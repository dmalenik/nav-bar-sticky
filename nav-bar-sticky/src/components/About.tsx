import styled from 'styled-components';

type AboutProps = {
  className?: string;
  offsetTop?: boolean;
};

const About = (props: AboutProps) => (
  <section className={props.className}>
    <h1 className='title'>Welcome to About section!</h1>
  </section>
);

const StyledAbout = styled(About)`
  margin-top: ${(props) => (props.offsetTop ? '38px' : '0')};

  .title {
    background-color: green;
  }
`;

export default StyledAbout;
