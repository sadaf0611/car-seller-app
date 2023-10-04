import React from 'react'
import classes from './Car.module.css'
// import carimg from '../../assets/car.jpg'
const Car = (props) => {
  return (
    <div className={classes.carContainer}>
      <div className={classes.image}>
        <img src={props.images} alt="car"/>
      </div>
      <div className={classes.content}>
        <div className={classes.head}>
          <h2>{props.modal}</h2>
          <label>{props.year}</label>
        </div>
        <div className={classes.feature}>
          <p><span><i class="fa-solid fa-user"></i></span> {props.people} users</p>
          <p><span><i class="fa-solid fa-gas-pump"></i></span> {props.petrol}</p>
          <p><span><i class="fa-solid fa-gauge"></i></span> {props.mileage}km/1-litre</p>
          <p><span><i class="fa-solid fa-gauge-simple-high"></i></span> {props.steering}</p>
        </div>
      </div>
      <div className={classes.foot}>
          <div className={classes.amount}><span>${props.amount} </span>/month</div>
          <div className={classes.btns}>
            <button className={classes.btnlike}><i class="fa-regular fa-heart"></i></button>
            <button className={classes.btnrent}>Rent Now</button>
          </div>
      </div>
    </div>
  )
}

export default Car
