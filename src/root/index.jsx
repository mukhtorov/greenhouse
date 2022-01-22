import Navbar from '../components/Navbar';
import { Container } from './style';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { navbar } from '../utils/navbar';
import NotFound from '../components/NotFound';

export const Root = () => {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            {navbar.map(({ path, id, Element }) => (
              <Route key={id} path={path} element={<Element />} />
            ))}
          </Route>
          <Route path={'/'} element={<Navigate to='/home' />} />
          <Route path={'*'} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default Root;
