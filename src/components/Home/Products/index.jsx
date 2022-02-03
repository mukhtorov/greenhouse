import {Container, Left,Wrapper, Title,Right,Oultlet} from './style.js'
import {category} from '../../../utils/category';
import { useLocation } from 'react-router-dom';

export const Products = () => {
  const location = useLocation();
  return (
    <Container>
      <Left>
           <h2 className='title'>Categories</h2>
          {category.map((value)=>
          <Wrapper active={location.pathname === `/home${value.path}`}
           to={`/home${value.path}`}>
             <Title key={value.id}>{value.title}</Title>
             <Title key={value.id}>({value.count})</Title>
          </Wrapper>)}
      </Left>
      <Right>
        <Oultlet/>
      </Right>
      
    </Container>);
};

export default Products;
