import styled from 'styled-components';

type ContactProps = {
  className?: string;
  offsetTop?: boolean;
};

const Contact = (props: ContactProps) => (
  <section className={props.className}>
    <h1 className='title'>Welcome to Contact section</h1>
  </section>
);

const StyledContact = styled(Contact)`
  margin-top: ${(props) => (props.offsetTop ? '38px' : '0')};

  .title {
    background-color: purple;
  }
`;

export default StyledContact;
