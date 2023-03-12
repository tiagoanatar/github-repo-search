'use client'
import { PaginationProps } from '../types/pagination'

export const Pagination = ({page, handlePagination}: PaginationProps) => {

  return (
    <>
      <div className="pagination-container">
        <button disabled={page === 1 ? true : false} className={page === 1 ? 'pagination-button-disable' : 'pagination-button'} onClick={() => handlePagination(page-1)}><i className="fa fa-arrow-left"></i> Back</button>
        <div className='pagination-count'>{page}</div>
        <button className='pagination-button' onClick={() => handlePagination(page+1)}>Next <i className="fa fa-arrow-right"></i></button>
      </div>
    </>
  );
};

interface Search {
  items: []
}