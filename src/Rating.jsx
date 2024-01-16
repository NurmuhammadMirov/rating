import React from 'react';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';

export default function Rating(props) {
  const [rating, setRating] = React.useState(props.rating);
  return (
    <>
      <div className='flex items-center text-orange-500'>
        {rating >= 1
          ? <IoIosStar onClick={() => setRating(1)} />
          : <IoIosStarOutline onClick={() => setRating(1)} />
        }
        {rating >= 2
          ? <IoIosStar onClick={() => setRating(2)} />
          : <IoIosStarOutline onClick={() => setRating(2)} />
        }
        {rating >= 3
          ? <IoIosStar onClick={() => setRating(3)} />
          : <IoIosStarOutline onClick={() => setRating(3)} />
        }
        {rating >= 4
          ? <IoIosStar onClick={() => setRating(4)} />
          : <IoIosStarOutline onClick={() => setRating(4)} />
        }
        {rating >= 5
          ? <IoIosStar onClick={() => setRating(5)} />
          : <IoIosStarOutline onClick={() => setRating(5)} />
        }
        <div className='pl-1'>
         {props.numOfReviews}
        </div>
      </div>
    </>        
  )
}

const styles = {
  starStyle: {
    color: 'orange'
  }
};