import { Container } from './style';

export const Root = ({ width, height, bg, children, size, props }) => {
  return (
    <Container size={size} bg={bg} width={width} height={height} {...props}>
      {children}
    </Container>
  );
};

export default Root;
