import { type FC } from 'react';
import AddAvatar from './AddAvatar';
import { IoIosLogOut } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { removeFromStorage } from '@/api/services/auth/auth-helper';
import { useAppDispatch } from '@/hooks/app-hooks';
import { setIsAuthenticated } from '@/store/slices/auth-slice';

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setIsAuthenticated(false))
    removeFromStorage()
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-between pt-2 pb-3 pl-4 pr-4 bg-secondary relative border-b-1 border-border/30">
      <p className="text-4xl font-bold">LISTEN</p>
      <div className="flex items-center gap-5">
        <AddAvatar />
        <div className=" p-1 hover:bg-white/20 hover:rounded-[10px] cursor-pointer">
          <IoIosLogOut size={36} onClick={handleLogout}/>
        </div>
      </div>
    </div>
  );
};

export default Header;
