import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';

export const AntCarousel = styled(Carousel)`
  .carousel .slide {
    text-align: start !important;
  }
`;

export const Container = styled.div`
  display: flex;
  margin-top: 15px;
  background: linear-gradient(
    97.77deg,
    rgba(245, 245, 245, 0.5) -23.46%,
    rgba(245, 245, 245, 0.5) 107.51%
  );
  padding: 40px;
  height: 500px;
  max-height: fit-content;
`;

export const Left = styled.div`
  flex: 1;
`;

Left.Text = styled.div`
  font-family: Cera Pro;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #3d3d3d;
  margin-top: 40px;
`;

Left.MainText = styled.div`
  font-family: Cera Pro;
  font-style: normal;
  font-weight: 900;
  font-size: 70px;
  line-height: 70px;

  text-transform: uppercase;
  color: #3d3d3d;
  /* white-space: nowrap; */
  margin: 7px 0 5px 0;
`;

Left.Span = styled(Left.MainText)`
  display: inline-block;
  color: #46a358;
`;

Left.Desc = styled.div`
  font-family: Cera Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #727272;
  margin-bottom: 44px;
`;

// Right
export const Right = styled.div`
  flex: 1;
  position: relative;
`;

Right.BigImg = styled.img`
  position: absolute;
  top: -100px;
  right: 0px;
  /* width: 420px; */
  width: 420px !important;
`;
Right.SmallImg = styled.img`
  position: absolute;
  top: 230px;
  right: 320px;
  /* width: 100px; */
  width: 100px !important;
`;
