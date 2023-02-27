import styled from 'styled-components';

type OfferProps = {
  className?: string;
  pageOffsetTop?: boolean;
};

const Offer = (props: OfferProps) => (
  <section className={props.className}>
    <h1 className='title'>Welcome to Offer section</h1>
  </section>
);

const StyledOffer = styled(Offer)`
  margin-top: ${(props) => (props.pageOffsetTop ? '38px' : '0')};

  .title {
    background-color: blue;
  }
`;

export default StyledOffer;
