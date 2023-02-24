import styled from 'styled-components';

type ContactProps = {
  className?: string;
};

const Contact = (props: ContactProps) => (
  <section className={props.className}>
    <h1>Welcome to Contact section</h1>
  </section>
);

const StyledContact = styled(Contact)``;

export default StyledContact;
