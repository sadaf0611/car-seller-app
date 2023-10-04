import React from 'react'
import Car from './Car'
import classes from './CarList.module.css'
import carimg from '../../assets/car.jpg'
  const DUMMY_DATA=[
    {
      id:'c1',
      brand:'BMW',
      modal:'BMW i4',
      year:2021,
      people:4,
      petrol:'Hybrid',
      mileage:6.1,
      steering:'Automatic',
      amount:620,
      images:carimg,
    },
    {
      id:'c2',
      brand:'Ford',
      modal:'Ford Edge',
      year:2020,
      people:6,
      petrol:'Hybrid',
      mileage:7.1,
      steering:'Automatic',
      amount:520,
      images:carimg,
    },
    {
      id:'c3',
      brand:'Chevrolet',
      modal:'Chevrolet Cruze',
      year:2022,
      people:4,
      petrol:'Gasoline',
      mileage:4.5,
      steering:'Automatic',
      amount:500,
      images:carimg,
    },
    {
      id:'c4',
      brand:'Toyota',
      modal:'Toyota Fortuner',
      year:2021,
      people:4,
      petrol:'Hybrid',
      mileage:6.9,
      steering:'Automatic',
      amount:700,
      images:carimg,
    },
    {
      id:'c5',
      brand:'BMW',
      modal:'BMW X5',
      year:2021,
      people:4,
      petrol:'Hybrid',
      mileage:7.2,
      steering:'Automatic',
      amount:490,
      images:carimg,
    },
    {
      id:'c6',
      brand:'Lamborghini',
      modal:'Lamborghini Urus',
      year:2023,
      people:2,
      petrol:'Gasoline',
      mileage:7.4,
      steering:'Automatic',
      amount:780,
      images:carimg,
    }


  ]
  const CarList = (props) => {
  const carList=DUMMY_DATA.map(data=>
    <Car 
      key={data.id}
      id={data.id}
      brand={data.brand}
      modal={data.modal}
      year={data.year}
      people={data.people}
      petrol={data.petrol}
      mileage={data.mileage}
      steering={data.steering}
      amount={data.amount}
      images={data.images}
    />)
  return (
    <div className={classes.carListContainer}>
      {carList}
    </div>
  )
}

export default CarList
