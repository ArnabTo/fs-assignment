import { useState } from 'react';
import Nav from '../Navbar/Nav';

const Header = () => {

    const [value, setValue] = useState('');

    console.log(value)

    return (
        <div className='bg-[#DADBF0] pt-1'>
            <Nav />
            <div className='w-full md:w-2/3 xl:w-1/2 mx-auto space-y-5 py-24 px-5'>
                <h2 className='text-black text-5xl text-center'>How can we help?</h2>
                <div>
                    <form className='lg:w-1/2 mx-auto flex relative'>
                        <input className='w-full bg-white py-2 border-black placeholder:px-3 rounded-md' value={value} onChange={(e) => setValue(e.target.value)} type='text' placeholder='Search' />
                        <button className='text-black absolute right-5 top-2' >S</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Header;