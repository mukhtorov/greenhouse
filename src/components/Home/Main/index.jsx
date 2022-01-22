import Item from './Item';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { AntCarousel } from './Item/style';
import bir from '../../../assets/imgs/main-big-flower.png';
import ikki from '../../../assets/imgs/main-big-savat.png';

export const Main = () => {
  return (
    <>
      <AntCarousel infiniteLoop={true} autoPlay={false}>
        <Item img={bir} />
        <Item img={ikki} />
        <Item img={bir} />
      </AntCarousel>
    </>
  );
};

export default Main;
