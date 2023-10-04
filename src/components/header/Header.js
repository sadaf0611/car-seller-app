import React from 'react'
import classes from './Header.module.css'
const Header = () => {
  return (
    <div className={classes.header}>
      <form className={classes.search}>
        <input type="text" placeholder="Search.." name="search"/>
        <button type="submit"><i class="fa fa-search"></i></button>
      </form>
    <div>
        <form id='relevance'>
            <select name="Relevance" id="cars">
                <option value="Relevance">Relevance</option>
                <option value="volvo">1 Year Old</option>
                <option value="saab">2 Year Old</option>
                <option value="opel">more than 3 Year Old</option>
            </select>
        </form>
    </div>
    <div>
        <form id='all-brand'>
            <select name="All Brand" id="cars">
                <option value="allbrand">All Brand</option>
                <option value="bmw">B M W</option>
                <option value="toyota">Toyota</option>
                <option value="chevrolet">Chevrolet</option>
            </select>
        </form>
    </div>
    </div>
  )
}

export default Header
