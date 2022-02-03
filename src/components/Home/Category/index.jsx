import React, { useEffect, useState } from 'react';
import {
  AntOption,
  AntSelect,
  Container,
  Link,
  NoData,
  Wrapper,
} from './style';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { plants } from '../../../mock/flowers';
import Card from '../../Generic/Card';

const list = [
  { id: 'all', title: 'All Plants' },
  { id: 'new', title: 'New Arrivals' },
  { id: 'sale', title: 'Sale' },
];

export const Root = () => {
  const [data, setData] = useState([]);

  const { pathname } = useLocation();
  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      category.replace(':', '') !== 'new' &&
      category.replace(':', '') !== 'all' &&
      category.replace(':', '') !== 'sale'
    ) {
      let newData = plants.filter(
        (value) =>
          value.category.toLocaleLowerCase() ===
          category.replace(':', '').toLocaleLowerCase()
      );
      setData(newData);
    }
  }, [pathname]);

  const onRoute = (path) => {
    navigate(`/home/:${path}`);
    if (path === 'all') {
      setData(plants);
    } else {
      let res = plants.filter((value) => value.status === path);
      setData(res);
    }
  };

  return (
    <Container>
      <Wrapper>
        {/* Navbar */}
        <Wrapper.Navbar>
          {list.map((value) => (
            <Link
              onClick={() => onRoute(value.id)}
              active={
                value.id === category.replace(':', '').toLocaleLowerCase()
              }
            >
              {value.title}
            </Link>
          ))}
          <AntSelect
            defaultValue='default'
            style={{ width: 150 }}
            bordered={false}
          >
            <AntOption value='default'>Default Sorting</AntOption>
            <AntOption value='Price'>Price</AntOption>
            <AntOption value='Name'>Name</AntOption>
            <AntOption value='Date'>Date</AntOption>
          </AntSelect>
        </Wrapper.Navbar>

        {/* Body */}
        <Wrapper.Body>
          {data.length ? (
            data.map((value) => <Card value={value} />)
          ) : (
            <NoData>no data</NoData>
          )}
        </Wrapper.Body>
      </Wrapper>
    </Container>
  );
};

export default Root;
