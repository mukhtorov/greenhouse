import { NavLink,Outlet } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;
export const Left = styled.div`
/* display: flex; */
justify-content:space-between;
width: 310px;
height:1100px;`

export const Wrapper = styled(NavLink)`
display: flex;
justify-content: space-between;
height:36px;
padding:30px;
/* background: #FBFBFB; */
text-decoration:none;
color:${({active})=>active ? ' darkgreen' : '#000'};
cursor: pointer;
`


export const Title = styled.div`
font-size: 16px;
height: 36px;
`
export const Right = styled.div`
display: inline-block;
flex-wrap: wrap;
width: 400px;
height: 800px;
`
export const Oultlet = styled(Outlet)`
/* width: 200px; */
/* height: 200px; */
`