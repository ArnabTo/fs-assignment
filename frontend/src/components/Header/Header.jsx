import { useEffect, useState } from 'react';
import Nav from '../Navbar/Nav';
import { MoveRight } from 'lucide-react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { searchQuery, filturedCards } from '../../features/CardSlice';

const Header = () => {

    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchQuery(query));

        if (query) {
            // Fetch data if there's a query
            const fetchQueryCards = async () => {
                try {
                    const response = await axios.get(`http://localhost:5000/card/${query}`);
                    if (response.data.success) {
                        dispatch(filturedCards(response.data.data));
                    }
                } catch (error) {
                    console.error("Error fetching search results:", error);
                }
            };
            fetchQueryCards();
        } else {
            // Clear filtered cards if query is empty
            dispatch(filturedCards([]));
        }
    }, [dispatch, query]);

    const handleSearch = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div className='bg-[#DADBF0] pt-1'>
            <Nav />
            <div className='w-full md:w-2/3 xl:w-1/2 mx-auto space-y-5 py-24 px-5'>
                <h2 className='text-black text-5xl text-center'>How can we help?</h2>
                <div>
                    <form className='lg:w-1/2 mx-auto flex relative' onSubmit={(e) => e.preventDefault()}>
                        <input 
                            className='w-full bg-white text-gray-700 py-2 border-black px-3 rounded-md'
                            value={query}
                            onChange={handleSearch} 
                            type='text' 
                            placeholder='Search' 
                        />
                        <button type='submit' className='text-black absolute right-5 top-2'>
                            <MoveRight />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Header;
