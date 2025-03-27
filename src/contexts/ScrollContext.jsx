import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const sections = useMemo(() => ({
    about: aboutRef,
    resume: resumeRef,
    portfolio: portfolioRef,
    contact: contactRef,
  }), [aboutRef, resumeRef, portfolioRef, contactRef]);

  const [activeSection, setActiveSection] = useState("about");

  const createObserver = (threshold = 0.5) => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: threshold,
    };
    return new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.getAttribute("data-section");
          setActiveSection(sectionName);
        }
      });
    }, observerOptions);
  };

  useEffect(() => {
    const observers = [];

    const sectionsWithThrosholds = [
      { name: "about", ref: aboutRef, threshold: 0.2 },
      { name: "resume", ref: resumeRef, threshold: 0.2 },
      { name: "portfolio", ref: portfolioRef, threshold: 0.9 },
      { name: "contact", ref: contactRef, threshold: 1 },
    ];
  
    sectionsWithThrosholds.forEach((section) => {
      if (section.ref.current) {
        const observer = createObserver(section.threshold);
        section.ref.current.setAttribute("data-section", section.name);
        observer.observe(section.ref.current);
        observers.push(observer);
      }
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  const scrollToSection = useCallback((sectionName) => {
    const section = sections[sectionName]?.current;
    if (!section) {
      console.warn(`Section ${sectionName} not found`);
      return;
    }
    try {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionName);
    } catch (error) {
      console.error(`Failed to scroll to ${sectionName}:`, error);
    }
  }, [sections]);

  const value = {
    activeSection,
    sections,
    scrollToSection,
  };

  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};
