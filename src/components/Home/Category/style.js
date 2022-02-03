import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';
import styled from 'styled-components';
import { Select } from 'antd';
const { Option } = Select;

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 54px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

Wrapper.Navbar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 31px;
`;

export const Link = styled.div`
  font-family: Cera Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 16px;
  color: ${({ active }) => (active ? '#46A358' : '#3d3d3d')};
  border: 2px solid transparent;
  border-bottom: ${({ active }) => active && '2px solid #46A358'};
  margin-right: 37px;
  padding-bottom: 7px;
  cursor: pointer;
  transition: all 0.3s;
`;

// ============
Wrapper.Body = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const NoData = styled.div`
  display: flex;
  width: 100%;
  font-size: 32px;
  height: 200px;
  justify-content: center;
  align-items: center;
`;

export const AntSelect = styled(Select)`
  padding-bottom: 7px;
  margin-left: auto;
`;
export const AntOption = styled(Option)``;
