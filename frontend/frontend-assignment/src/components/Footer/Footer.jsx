
const Footer = () => {
    return (
        <footer className='bg-black'>
            <div className="max-w-6xl mx-auto py-10">
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-5">
                    <div>
                        <ul>
                            <li><h3 className="text-lg font-bold">Abstract</h3></li>
                            <li className="text-sm">Branches</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><h3 className="text-lg font-bold mb-2">Resources</h3></li>
                            <li className="text-sm"><a href="#">Blog</a></li>
                            <li className="text-sm"><a href="#">Help Center</a></li>
                            <li className="text-sm"><a href="#">Release Notes</a></li>
                            <li className="text-sm"><a href="#">Status</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><h3 className="text-lg font-bold mb-2">Community</h3></li>
                            <li className="text-sm"><a href="#">Twitter</a></li>
                            <li className="text-sm"><a href="#">LinkedIn</a></li>
                            <li className="text-sm"><a href="#">Facebook</a></li>
                            <li className="text-sm"><a href="#">Dribble</a></li>
                            <li className="text-sm"><a href="#">Podcast</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="mb-4">
                            <li><h3 className="text-lg font-bold mb-2">Company</h3></li>
                            <li className="text-sm"><a href="#">About Us</a></li>
                            <li className="text-sm"><a href="#">Careers</a></li>
                            <li className="text-sm"><a href="#">Ligal</a></li>
                            <li className="text-sm"><a href="#">Status</a></li>
                        </ul>
                        <ul>
                            <li><h3 className="text-lg font-bold mb-2">Contact Us</h3></li>
                            <li className="text-sm"><a href="#">info@abstract.com</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><h3 className="text-lg font-bold mb-2">Resources</h3></li>
                            <li className="text-sm"><a href="#">Blog</a></li>
                            <li className="text-sm"><a href="#">Help Center</a></li>
                            <li className="text-sm"><a href="#">Release Notes</a></li>
                            <li className="text-sm"><a href="#">Status</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><h3 className="text-lg font-bold mb-2">Logo</h3></li>
                            <li className="text-sm"><p>© Copyright 2022 <br></br>
                            Abstract Studio Design, Inc. <br></br>
                            All rights reserved</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;