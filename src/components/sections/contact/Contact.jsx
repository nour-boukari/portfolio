import styled from "styled-components";
import Section from "../ui/Section";
import { ColumnContainer, Text, Title, TwoColumnContainer } from "../../ui/elements/UIElements";
import resume from "../../../assets/data/resume";
import TitleWithIcon from "../ui/TitleWithIcon";
import { IoIosMail } from "react-icons/io";
import { RiMailSendLine } from "react-icons/ri";

const ContactInfo = styled.div`
  padding: 1rem 0;
`;
const ContactInfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
`;

const Form = styled.form`
  margin: 1rem 1rem 3rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TwoColumns = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const ReversedRow = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const FormField = (field) => styled(field)`
  padding: 0.5rem;
  font-size: large;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.secondaryButtonColor};
  color: ${({ theme }) => theme.primaryTextColor};
  border: none;
`;

const Input = styled(FormField("input"))`
  width: 50%;
  @media (max-width: 1200px) {
    width: auto;
  }
`;
const TextArea = styled(FormField("textarea"))`
  resize: none;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.primaryButtonColor};
  border: none;
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  gap: 0.7rem;
  font-size: large;
  border-radius: 25px;
  cursor: pointer;
  transition: gap 0.5s;
  text-align: center;
  text-transform: uppercase;
  &:hover {
    gap: 1rem;
  }
`;

function Contact() {
  return (
    <Section title="Contact">
      <ContactInfo>
        <TwoColumnContainer>
          <ColumnContainer>
            <ContactInfoItem>
              <Title>ADDRESS:</Title>
              <Text style={{ margin: 0 }}>{resume.address}</Text>
            </ContactInfoItem>
            <ContactInfoItem>
              <Title>PHONE:</Title>
              <Text style={{ margin: 0 }}>{resume.phone}</Text>
            </ContactInfoItem>
          </ColumnContainer>
          <ColumnContainer>
            <ContactInfoItem>
              <Title>EMAIL:</Title>
              <Text style={{ margin: 0 }}>{resume.email}</Text>
            </ContactInfoItem>
            <ContactInfoItem>
              <Title>PROFESSIONAL ENTITY:</Title>
              <Text style={{ margin: 0 }}>{resume.company}</Text>
            </ContactInfoItem>
          </ColumnContainer>
        </TwoColumnContainer>
      </ContactInfo>
      <TitleWithIcon title="Contact Form">
        <IoIosMail />
      </TitleWithIcon>
      <Form
        target="_blank"
        action={"https://formsubmit.co/" + resume.email}
        method="POST"
      >
        <TwoColumns>
          <Input type="text" name="name" placeholder="Full Name" required />
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
        </TwoColumns>
        <TextArea
          placeholder="Your Message"
          name="message"
          rows="2"
          required
        ></TextArea>
        <ReversedRow>
          <Button type="submit">Submit <RiMailSendLine /></Button>
        </ReversedRow>
      </Form>
    </Section>
  );
}

export default Contact;
