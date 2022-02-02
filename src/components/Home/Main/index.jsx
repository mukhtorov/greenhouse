import Item from './Item';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { AntCarousel } from './Item/style';
import { carusel } from '../../mock/carousel';

export const Main = () => {
  return (
    <>
      <AntCarousel infiniteLoop={true} autoPlay={false}>
        {carusel.map(value => <Item value ={value}/>)}

      </AntCarousel>
    </>
  );
};

export default Main;
