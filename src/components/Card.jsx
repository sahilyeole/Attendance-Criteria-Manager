import {useState} from 'react'
import Popup from './Popup';

const Card = () => {
  const [editCard, setEditCard] = useState(false);

  function toggleEditCard() {
    setEditCard(prev => !prev);
  }
  const editPopup = editCard ? <Popup >
    <button className='w-20 h-12 bg-accent rounded-lg font-poppins font-semibold' onClick={toggleEditCard} >click</button>
  </Popup> : "";
  return (
    <div className='h-[18rem] w-[18rem] bg-[#090d11bd] rounded-xl ring ring-[#0000007c] p-3 text-center'>
      {editPopup}
      <h1 className='text-[#a0c4f0] font-poppins font-semibold uppercase text-3xl mt-2  '>DSA</h1>
      {/* <h3 className='text-greenT font-sans font-semibold'>82%</h3> */}
      <h3 className='text-redT font-sans font-semibold mt-8'>68%</h3>
      <h3 className=' font-sans font-semibold my-3 text-white'>You need to attend the next 3 classes</h3>
      <button onClick={toggleEditCard} className='bg-[#fee715e3] h-10 px-4 text-sm mt-9 rounded-lg font-poppins font-semibold'>Edit</button>
    </div>
  )
}

export default Card