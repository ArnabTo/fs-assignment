import axios from 'axios'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addCard } from '../../features/CardSlice';
export default function Cards() {

    const dispatch = useDispatch();
   const cards = useSelector((state) => state.cards.cards);

    useEffect(() =>{
        const fetchData = async () => {
            const response = await axios.get('http://localhost:5000/card');
  
            dispatch(addCard(response.data.data))

        }
         fetchData();
    }, [dispatch])
 
console.log(cards)
  return (
    <div className='max-w-6xl mx-auto my-20'>
        <div className='grid gird-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-16 px-4 lg:mx-36'>
            {
                cards.map((card) => (
                    <div key={card._id} className='bg-[#F4F6F8] rounded-md px-5 pb-7 border-1 border-blue-100'>
                        <div className='py-3'>
                            <h4 className='text-[#373A40] font-bold'>{card.title}</h4>
                        </div>
                        <hr></hr>
                        <p className='text-[#454551]'>{card.description}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
