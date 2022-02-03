import styled from 'styled-components';

export const Wrapper = styled.div`
  background: inherit;
  margin-top: 12px;
`;

export const Container = styled.div`
  flex: 1;
  max-width: 300px;
  min-width: 250px;
  height: 300px;
  margin-bottom: 70px;
  margin-right: 30px;
`;
export const Main = styled.div`
  background: #fbfbfb;
  transition: all 0.3s;
  border-radius: 20px;
  :hover {
    box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.55);
  }
`;

export const Image = styled.img`
  height: 250px;
  width: 100%;
  border-radius: 20px;
`;

export const Info = styled.div``;

Info.Title = styled.div`
  font-family: Cera Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  color: #3d3d3d;
`;

Info.Price = styled.div`
  font-family: Cera Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 16px;
  color: var(--greenColor);
  margin-top: 6px;
`;
