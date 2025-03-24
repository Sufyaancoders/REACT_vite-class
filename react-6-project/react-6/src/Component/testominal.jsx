import react from 'react'
import Card from './card'
 import { useState } from 'react'
const Testominal = (props) => {
    
    let review = props.review;
    const [index, setIndex] = useState(0);

  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(review.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  const rightShiftHandler = () => {
    if (index + 1 >= review.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  function surpriceShiftHandler() {
    let randIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randIndex);
  }
    return (
        <div  className="flex flex-col  ">
           <Card review={review[index]}> </Card>
           <div className='flex justify-center gap-4'>
                    <button className='bg-violet-400 text-white px-3 py-2 rounded-md mt-4'
                 onClick={rightShiftHandler}   >Read More</button>
                
                    <button className='bg-violet-400 text-white px-3 py-2 rounded-md mt-4'
                    onClick={leftShiftHandler}>previous</button>
                </div>
              <div>
                <button className='bg-violet-400 text-white px-3 py-2 rounded-md mt-4' onClick={surpriceShiftHandler}>Surprice Me</button>
              </div>
        </div>
    )
}

export default Testominal