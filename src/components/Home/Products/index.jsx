import {Container, Left,Wrapper, Title,Right} from './style.js'
import {category} from '../../../utils/category';
import Category from '../Category';
import { Route } from 'react-router-dom';

export const Products = () => {
  return (
    <Container>
      <Left>
           <h2 className='title'>Categories</h2>
          {category.map((value)=>
          <Wrapper>
             <Title key={value.id}>{value.title}</Title>
             <Title key={value.id}>({value.count}1)</Title>
          </Wrapper>)}
      </Left>
      <Right>
        {/* <Route path='/home/:category' element={<Category/>}/> */}
      </Right>
      
    </Container>);
};

export default Products;
