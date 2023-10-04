import React, {useState} from 'react'
import classes from './Footer.module.css'
import Page from './Page';
const Footer = (props) => {
  const backword='<';
  const forword='>';
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 19; 

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    // later we can load data of new pafe here
  };
  return (
    <div className={classes.footer}>
      <p>{currentPage} from 19</p>
      {/* <div className={classes.pagination}>
        <button>{backword}</button>
        <button>1</button>
        <button>2</button>
        <button>{forword}</button>

      </div> */}
      <Page
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default Footer
