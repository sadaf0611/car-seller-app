import React from 'react'

const Page = ({ currentPage, totalPages, onPageChange }) => {
    const pageButtons = [];

    for (let i = 1; i <= totalPages; i++) {
      pageButtons.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={i === currentPage ? 'active' : ''}
          style={{padding: '8px 16px', textDecoration: 'none',margin: '0 2px',border:'none'}}
        >
          {i}
        </button>
      );
    }
  
    return (
      <div className="pagination">
          {pageButtons}
      </div>
    )
}

export default Page
