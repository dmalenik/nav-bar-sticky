import styled from 'styled-components';

type HomeProps = {
  className?: string;
};

const Home = (props: HomeProps) => (
  <section className={props.className}>
    <h1>Welcome home</h1>
  </section>
);

const StyledHome = styled(Home)``;

export default StyledHome;
