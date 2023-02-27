import styled from 'styled-components';

type AboutProps = {
  className?: string;
};

const About = (props: AboutProps) => (
  <section className={props.className}>
    <h1 className='title'>Welcome to About section!</h1>
  </section>
);

const StyledAbout = styled(About)`
  .title {
    background-color: green;
  }
`;

export default StyledAbout;
