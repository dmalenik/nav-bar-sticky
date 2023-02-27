import styled from 'styled-components';

type ContactProps = {
  className?: string;
};

const Contact = (props: ContactProps) => (
  <section className={props.className}>
    <h1 className='title'>Welcome to Contact section</h1>
  </section>
);

const StyledContact = styled(Contact)`
  .title {
    background-color: purple;
  }
`;

export default StyledContact;
