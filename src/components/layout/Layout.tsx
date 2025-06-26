import React from 'react';
import Header from '../header/Header';
import SideBar from '../side-bar/SideBar';
import AudioPlayer from '../audio-player/AudioPlayer';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col bg-primary text-text relative">
      <div className="flex flex-grow h-screen">
        <SideBar />
        <div className="flex flex-col flex-grow">
          <Header />
          <main className="flex-grow overflow-y-auto p-5 pt-0 pl-4">{children}</main>
        </div>
      </div>
      <div className='absolute w-full bottom-0'>
        <AudioPlayer />
      </div>
    </div>
  );
};

export default Layout;
