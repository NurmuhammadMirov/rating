import React from 'react';
import Rating from './Rating';

export default function Product(props) {
  return (
    <li>
      <div className="flex gap-x-3">
        <img className="h-20 w-20 rounded" src={props.data.imageUrl} alt="Profile Image" />
        <div className='basis-1/3'>
          <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{props.data.productName}</h3>
          {props.data.releasedDate}
          {/* <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p> */}
          <Rating rating={props.data.rating} numOfReviews={props.data.numOfReviews}/>
          <p>{props.data.description}</p>
        </div>
      </div>
    </li>
  )
}