import styled from 'styled-components';

type AboutProps = {
  className?: string;
};

const About = (props: AboutProps) => (
  <section className={props.className}>
    <h1>Welcome to About section!</h1>
  </section>
);

const StyledAbout = styled(About)``;

export default StyledAbout;
