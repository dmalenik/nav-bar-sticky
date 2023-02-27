import styled from 'styled-components';

type OfferProps = {
  className?: string;
};

const Offer = (props: OfferProps) => (
  <section className={props.className}>
    <h1 className='title'>Welcome to Offer section</h1>
  </section>
);

const StyledOffer = styled(Offer)`
  .title {
    background-color: blue;
  }
`;

export default StyledOffer;
