
const Nav = () => {
    return (
        <nav className="bg-black rounded-t-lg">
            <div className="max-w-6xl mx-auto py-5 px-5">
            <div className="flex justify-between">
                <div className="flex gap-3">
                    <div className="border-r-2 px-3 text-center">Abstract</div>
                    <a href="">Help Center</a>
                </div>
                <div>
                    <button className=" bg-[#1A1A1A] text-white px-4 py-1 rounded-md border-white">Submit a request</button>
                </div>
             </div>
            </div>
        </nav>
    );
};
 
export default Nav;