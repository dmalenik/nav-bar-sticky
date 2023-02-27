import styled from 'styled-components';

type HomeProps = {
  className?: string;
  offsetTop?: boolean;
};

const Home = (props: HomeProps) => (
  <section className={props.className}>
    <h1 className='title'>Welcome home</h1>
  </section>
);

const StyledHome = styled(Home)`
  margin-top: ${(props) => (props.offsetTop ? '38px' : '0')};

  .title {
    background-color: red;
  }
`;

export default StyledHome;
