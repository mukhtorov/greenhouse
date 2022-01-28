import './style.css'
// import { Container } from './style';
// import Button from '../../Generic/Button';
// import { flowers } from '../../../utils/navbar';
import ReactPaginate from 'react-paginate';
import React, { useState, useContext } from 'react';
import { FlowersContext } from '../../../context';

export const Main = () => {

  const [flower, setFlower] =useContext(FlowersContext);
  const [pageNumber, setPageNumber] =useState (0);
  

  // ---------- subnav part -------------
  const onSort=(Category)=>{
    let res=flower.filter((value)=>value.Category==='House Plants');
    setFlower(res);
  }  ;
  let count = flower.filter((value)=>value.Category==='House Plants').length;
   
  const oNSort=(Category)=>{
    let res=flower.filter((value)=>value.Category==='Potter Plants');
    setFlower(res);
  }  
  let counts = flower.filter((value)=>value.Category==='Potter Plants').length;

  const onsort=(Category)=>{
    let res=flower.filter((value)=>value.Category==='Seeds');
    setFlower(res);
  }  
  let countss = flower.filter((value)=>value.Category==='Seeds').length;

  const oNsort=(Category)=>{
    let res=flower.filter((value)=>value.Category==='Small Plants');
    setFlower(res);
  }  
  let coun = flower.filter((value)=>value.Category==='Small Plants').length;

  const OnSort=(Category)=>{
    let res=flower.filter((value)=>value.Category==='Big Plants');
    setFlower(res);
  }  
  let cou = flower.filter((value)=>value.Category==='Big Plants').length;

  const Onsort=(Category)=>{
    let res=flower.filter((value)=>value.Category==='Succulents');
    setFlower(res);
  }  
  let co = flower.filter((value)=>value.Category==='Succulents').length;

  const onSOrt=(Category)=>{
    let res=flower.filter((value)=>value.Category==='Trettariums');
    setFlower(res);
  }  
  let c = flower.filter((value)=>value.Category==='Trettariums').length;

  const onsOrt=(Category)=>{
    let res=flower.filter((value)=>value.Category==='Gardening');
    setFlower(res);
  }  
  let ounts = flower.filter((value)=>value.Category==='Gardening').length;

  const onSoRt=(Category)=>{
    let res=flower.filter((value)=>value.Category==='Accessories');
    setFlower(res);
  }  
  let unts = flower.filter((value)=>value.Category==='Accessories').length;
  
  // ------------ range input ------------------



  
// -----  pagination part  --------
  const flowersPerPage = 9;
  const pagesVisited = pageNumber * flowersPerPage;
  const displayFlowers = flower.slice(pagesVisited, pagesVisited + flowersPerPage)
  .map((flower)=> {
    return (
       <div className='Cards'> 
              <img src={flower.src} alt='Flowers'></img> 
              <p> {flower.title}</p>  
              <h3>{flower.price}</h3>  
         </div> 
    )                 
  })            
    const pageCount = Math.ceil(flower.length/flowersPerPage);

    const changePage =({selected})=>{ 
        setPageNumber(selected); 
    } 
  return (
    <div className='MainContainer'>
        {/* ------------------------- SubNav ----------------------------- */}
        <div className='SubContainer'>
          <h2 className='title'>Categories</h2>
          <div className='rows' onClick={()=>onSort(flower.category)} >
            <span>House Plants </span><span>({count})</span>
          </div>
          <div className='rows' onClick={()=>oNSort(flower.category)} >
            <span>Potter Plants</span><span>({counts})</span>
          </div>
          <div className='rows' onClick={()=>onsort(flower.category)} >
            <span>Seeds</span><span>({countss})</span>
          </div>
          <div className='rows' onClick={()=>oNsort(flower.category)} >
            <span>Small Plants</span><span>({coun})</span>
          </div>
          <div className='rows' onClick={()=>OnSort(flower.category)} >
            <span>Big Plants</span><span>({cou})</span>
          </div>
          <div className='rows' onClick={()=>Onsort(flower.category)} >
            <span>Succulents</span><span>({co})</span>
          </div>
          <div className='rows' onClick={()=>onSOrt(flower.category)} >
            <span>Trettariums</span><span>({c})</span>
          </div>
          <div className='rows' onClick={()=>onsOrt(flower.category)} >
            <span>Gardening</span><span>({ounts})</span>
          </div>
          <div className='rows' onClick={()=>onSoRt(flower.category)} >
            <span>Accessories</span><span>({unts})</span>
          </div>

          {/* ----------- range input --------------- */}




        
     
        



        </div>
        {/* --------------------------------- MiniNav of pagination -------------------------------------- */}
      <div>
        <div className='mininav'>
          <span>All Plants</span>
          <span>New Arrivals</span>
          <span>Sale</span>
          <span>
            <span>Short by:</span>
            <span>Default sorting</span>
          </span>
        </div>
        {/* ---------------------------------- Pagination ------------------------------------------- */}
        <div className='flawersContainer'>
          {displayFlowers}
            <ReactPaginate 
              previousLabel={'Previes'}
              nextLabel={'Next'}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={'PaginationBttn'}
              previousLinkClassName={'previousBttn'}
              nextLinkClassName={'nextBtn'}
              disabledClassName={'paginationDisabled'}
              activeClassName={'paginationActive'}
           />
        </div>
      </div>
  </div>
  );
};

export default Main;
