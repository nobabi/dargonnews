import logImage from '../assets/logo.png';

import moment from 'moment';

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 py-2">
            <div className="logo">
        <img src={logImage} className="w-[300px]" alt="logo" />
            </div>
            <h2 className="text-gray-500">Journalism Without Fear or Favour</h2>
            <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
        </div>
    );
};

export default Header;