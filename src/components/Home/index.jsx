import { Container } from './style';
import Button from '../Generic/Button';
import Main from './Main';
import Products from './Products';

export const Home = () => {
  return (
    <Container>
      <Main />
      <Products />
    </Container>
  );
};

export default Home;
