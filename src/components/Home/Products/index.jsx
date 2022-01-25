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

  const onSort=(Category)=>{
    let res=flower.filter((value)=>value.Category==='House Plants');
    setFlower(res);
  }  ;

  const oNSort=(Category)=>{
    let res=flower.filter((value)=>value.Category==='Potter Plants');
    setFlower(res);
  }  

  const onsort=(Category)=>{
    let res=flower.filter((value)=>value.Category==='Seeds');
    setFlower(res);
  }  

  const oNsort=(Category)=>{
    let res=flower.filter((value)=>value.Category==='Small Plants');
    setFlower(res);
  }  

  const OnSort=(Category)=>{
    let res=flower.filter((value)=>value.Category==='Big Plants');
    setFlower(res);
  }  

  const Onsort=(Category)=>{
    let res=flower.filter((value)=>value.Category==='Succulents');
    setFlower(res);
  }  

  const onSOrt=(Category)=>{
    let res=flower.filter((value)=>value.Category==='Trettariums');
    setFlower(res);
  }  

  const onsOrt=(Category)=>{
    let res=flower.filter((value)=>value.Category==='Gardening');
    setFlower(res);
  }  

  const onSoRt=(Category)=>{
    let res=flower.filter((value)=>value.Category==='Accessories');
    setFlower(res);
  }  

   

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
            <span>House Plants </span><span>({flower.length})</span>
          </div>
          <div className='rows' onClick={()=>oNSort(flower.category)} >
            <span>Potter Plants</span><span>({flower.length})</span>
          </div>
          <div className='rows' onClick={()=>onsort(flower.category)} >
            <span>Seeds</span><span>({flower.length})</span>
          </div>
          <div className='rows' onClick={()=>oNsort(flower.category)} >
            <span>Small Plants</span><span>({flower.length})</span>
          </div>
          <div className='rows' onClick={()=>OnSort(flower.category)} >
            <span>Big Plants</span><span>({flower.length})</span>
          </div>
          <div className='rows' onClick={()=>Onsort(flower.category)} >
            <span>Succulents</span><span>({flower.length})</span>
          </div>
          <div className='rows' onClick={()=>onSOrt(flower.category)} >
            <span>Trettariums</span><span>({flower.length})</span>
          </div>
          <div className='rows' onClick={()=>onsOrt(flower.category)} >
            <span>Gardening</span><span>({flower.length})</span>
          </div>
          <div className='rows' onClick={()=>onSoRt(flower.category)} >
            <span>Accessories</span><span>({flower.length})</span>
          </div>

          <h3>Price Range</h3>
           <div className="rangeContainer"><input type="range" min={39} max={1500} name="range" id="range" /></div>
           <p>Price:<span id=''></span></p>



        </div>




        {/* --------------------------------- MiniNav of pagination -------------------------------------- */}
      <div>
        <div>
          miniNav
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
