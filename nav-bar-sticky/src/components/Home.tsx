import styled from 'styled-components';

type HomeProps = {
  className?: string;
};

const Home = (props: HomeProps) => (
  <section className={props.className}>
    <h1 className='title'>Welcome home</h1>
  </section>
);

const StyledHome = styled(Home)`
  .title {
    background-color: red;
  }
`;

export default StyledHome;
