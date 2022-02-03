import React,{useEffect, useState} from 'react';
import { Container } from './style';
import { useLocation, useParams } from 'react-router-dom';
import {flowers} from '../../mock/flower.js';


export const Root = () => {
  const[data, setData]= useState([])
  const{pathname}= useLocation()
  const {category} = useParams();

  useEffect(()=>{
     let newData = flowers.filter((value)=>value.category.toLocaleLowerCase()===category.replace(':','').toLocaleLowerCase());
     setData(newData)
    },[pathname])



  return (
    <Container>
      {data.length?(
      data.map((value)=>  
      <><img src={value.src}/>
      <h1>{value.title}</h1>
      <div>{value.price}</div> </>
      )
      ):(
        <h1>no data</h1>
        )}

    </Container>
  );
};

export default Root;
