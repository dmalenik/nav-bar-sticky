import styled from 'styled-components';

type HomeProps = {
  className?: string;
  pageOffsetTop?: boolean;
};

const Home = (props: HomeProps) => (
  <section className={props.className}>
    <h1 className='title'>Welcome home</h1>
  </section>
);

const StyledHome = styled(Home)`
  margin-top: ${(props) => (props.pageOffsetTop ? '38px' : '0')};

  .title {
    background-color: yellow;
  }
`;

export { StyledHome };
