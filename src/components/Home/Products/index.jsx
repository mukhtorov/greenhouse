import { category } from '../../../utils/category';
import { Container, Left, Right, Title, Wrapper } from './style';
import Category from '../Category';
import { Outlet, useLocation } from 'react-router-dom';

export const Products = () => {
  const location = useLocation();
  return (
    <Container>
      <Left>
        {category.map((value) => (
          <Wrapper
            active={location.pathname === `/home${value.path}`}
            to={`/home${value.path}`}
          >
            <Title key={value.id}>{value.title}</Title>
            <Title key={value.id}>({value.count})</Title>
          </Wrapper>
        ))}
      </Left>
      <Right>
        <Outlet />
      </Right>
    </Container>
  );
};
