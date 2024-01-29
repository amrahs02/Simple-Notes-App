import { Delete, FavoriteRounded, Notes, Person2 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Switcher from '../darkmode/Switcher';

const NavList = ({ title }) => {
  const navList = [
    { id: 1, icon: <Notes />, route: '/' },
    { id: 2, icon: <Delete />, route: '/delete' },
    { id: 3, icon: <FavoriteRounded />, route: '/favourites' },
    { id: 4, icon: <Person2 />, route: '/you' },
  ];


  return (

    <div className="border dark:bg-gray-100 dark:text-gray-700 border-gray-700 bg-dark-gray m-2 p-4 flex flex-row items-center justify-between rounded-xl sm:w-1/2">
      <h2 className="text-xl font-bold dark:hover:text-gray-700 hover:text-gray-300 hover:underline">Your Personal Notes</h2>
      <Switcher />
      <div className="flex">
        {navList.map((list) => (
          <Link key={list.id} to={`${list.route}`} className="mx-4">
            <div className="text-gray-200 dark:text-gray-700  hover:text-gray-400">{list.icon}</div>
          </Link>
        ))}
      </div>
    </div>

  );
};

export default NavList;
