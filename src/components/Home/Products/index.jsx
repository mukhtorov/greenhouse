import './style.css'
// import { Container } from './style';
// import Button from '../../Generic/Button';
import { flowers } from '../../../utils/navbar';
import ReactPaginate from 'react-paginate';
import React, { useState } from 'react';

export const Main = () => {

  const [pageNumber, setPageNumber] =useState (0);
  const flowersPerPage = 9;
  const pagesVisited = pageNumber * flowersPerPage;
  const displayFlowers = flowers.slice(pagesVisited, pagesVisited + flowersPerPage)
  .map((flowers)=> {
    return (
       <div className='Cards'>
              <img src={flowers.src} alt='Flowers'></img>
              <p>{flowers.title}</p>
              <h3>{flowers.price}</h3>
         </div>
    )
  })
    const pageCount = Math.ceil(flowers.length/flowersPerPage);

    const changePage =({selected})=>{
        setPageNumber(selected);
    }
  return (
    <div className='App'>
      <span>
        <div>SubNav</div>
        <div>
          miniNav
        </div>
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
          
      </span>
    </div>
  );
};

export default Main;
