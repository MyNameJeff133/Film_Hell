import PropTypes from 'prop-types';
import { useState } from 'react';

const Header = ({onSearch}) => {
    const [textSearch, setSearch] = useState ('');
    return <div className="p-4 bg-black flex items-center justify-between ">
        <div className="flex items-start space-x-4">
            <h1 className="text-[30px] uppercase
            font-bold text-red-700">Film Hell</h1>
            <nav className="flex items-center m-auto space-x-5">
                <a href="#" className="text-white">Home</a>
                <a href="#" className="text-white">About</a>
                <a href="#" className="text-white"> Contact</a>
            </nav>
        </div>
        <div className="flex items-center space-x-4">
            <input type="text" placeholder="Tìm kiếm" 
            className="p-3 text-black rounded-xl" onChange={(e) => setSearch(e.target.value)} value={textSearch}/>
            <button className="p-3 text-white 
            bg-red-600 rounded-xl" onClick={() => onSearch(textSearch)}>Tìm kiếm</button>
        </div>
    </div>
}

Header.propTypes = {
    onSearch: PropTypes.func,
};

export default Header;