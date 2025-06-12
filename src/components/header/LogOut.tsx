import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { removeFromStorage } from '@/api/services/auth/auth-helper';
import { useAppDispatch } from '@/hooks/app-hooks';
import { setIsAuthenticated } from '@/store/slices/auth-slice';
import { IoIosLogOut } from 'react-icons/io';

const LogOut: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setIsAuthenticated(false));
    removeFromStorage();
    navigate('/login');
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors border-0 outline-0 cursor-pointer"
    >
      <IoIosLogOut size={20} />
      <span className="text-sm font-medium">Logout</span>
    </button>
  );
};

export default LogOut;
