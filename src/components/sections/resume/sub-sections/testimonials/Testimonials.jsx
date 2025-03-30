import styled from "styled-components";
import Section from "../../../ui/Section";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Text, Title } from "../../../../ui/elements/UIElements";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonials from "../../../../../assets/data/testimonials.json";

const FlexCenter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 0 1rem;
`;

const StyledSlider = styled(Slider)`
  .slick-track {
    display: flex;
    height: 100%;
  }
  .slick-slide {
    height: auto;
  }
  .slick-slide > div {
    height: 100%;
  }

  .slick-dots li button:before {
    color: ${({ theme }) => theme.accentColor};
    font-size: 12px;
  }

  .slick-dots li.slick-active button:before {
    color: ${({ theme }) => theme.accentColor};
  }
`;

const SliderContainer = styled.div`
  display: flex !important;
  flex-direction: column;
  height: 100%;
`;

const TestimonialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  gap: 1rem;
  padding: 2rem;
  @media (max-width: 1200px) {
    padding: 1rem;
  }
  @media (max-width: 480px) {
    padding: 0;
  }
`;

const QuoteLeftWrapper = styled.div`
  color: ${({ theme }) => theme.accentColor};
`;

const QuoteRightWrapper = styled(QuoteLeftWrapper)`
  display: flex;
  flex-direction: column-reverse;
`;

const StyledText = styled(Text)`
  font-style: italic;
  font-weight: 300;
`;

const Source = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
`;

const ProfileImage = styled.img`
  max-width: 90px;
  border-radius: 100%;
  margin-bottom: 0.5rem;
`;

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
};

function Testimonials() {
  return (
    <Section title="Testimonials">
      <FlexCenter>
        <CarouselContainer>
          <StyledSlider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <SliderContainer key={index}>
                <TestimonialContainer>
                  <QuoteLeftWrapper>
                    <FaQuoteLeft />
                  </QuoteLeftWrapper>
                  <StyledText>"{testimonial.quote}"</StyledText>
                  <QuoteRightWrapper>
                    <FaQuoteRight />
                  </QuoteRightWrapper>
                </TestimonialContainer>
                <Source>
                  <ProfileImage
                    src={`${process.env.PUBLIC_URL}${testimonial.imgSrc}`}
                    alt={`${testimonial.sourceName} ${testimonial.isCompany ? 'logo' : 'photo'}`}
                  />
                  <Title>{testimonial.sourceName}</Title>
                  <Text style={{ margin: 0, fontSize: "14px" }}>
                    {testimonial.sourceDescription}
                  </Text>
                </Source>
              </SliderContainer>
            ))}
          </StyledSlider>
        </CarouselContainer>
      </FlexCenter>
    </Section>
  );
}

export default Testimonials;
