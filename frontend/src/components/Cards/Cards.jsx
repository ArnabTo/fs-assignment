import axios from 'axios'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addCard } from '../../features/CardSlice';
export default function Cards() {

    const dispatch = useDispatch();
    const cards = useSelector((state) => state.cards.cards);
    const searchQuery = useSelector((state) => state.cards.searchQuery);
    const filteredCards = useSelector((state) => state.cards.filturedCards);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://fs-assignment.vercel.app/card');
            dispatch(addCard(response.data.data))
        }
        fetchData();
    }, [dispatch])

    return (
        <div className='max-w-6xl mx-auto my-20'>

            {
                searchQuery ? (
                    filteredCards.length > 0 ? (
                        filteredCards.map((card) => (
                            <div key={card._id} className="bg-[#F4F6F8] rounded-md px-5 pb-7 border-1 border-blue-100 w-1/2 mx-auto mb-3">
                                <div className="py-3">
                                    <h4 className="text-[#373A40] font-bold">{card.title}</h4>
                                </div>
                                <hr />
                                <p className="text-[#454551]">{card.description}</p>
                            </div>
                        ))
                    ) : (<p className='text-center text-black mx-auto text-2xl'>Sorry! No cards found 😢</p>)
                ) : (
                    <div className='grid gird-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 px-4'>
                        {
                            cards.map((card) => (
                                <div key={card._id} className="bg-[#F4F6F8] rounded-md px-5 pb-7 border-1 border-blue-100">
                                    <div className="py-3">
                                        <h4 className="text-[#373A40] font-bold">{card.title}</h4>
                                    </div>
                                    <hr />
                                    <p className="text-[#454551]">{card.description}</p>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>

    )
}

