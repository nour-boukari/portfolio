export const smoothScrollTo = (ref, duration = 1000) => {
  const container = document.getElementById("main-content");
  if (!container || !ref.current) return;

  const startPosition = container.scrollTop;

  const containerRect = container.getBoundingClientRect();
  const sectionRect = ref.current.getBoundingClientRect();

  const relativeSectionTop = sectionRect.top - containerRect.top;
  const targetPosition = startPosition + relativeSectionTop;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutQuad(progress);
    container.scrollTop = startPosition + distance * ease;
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
};
