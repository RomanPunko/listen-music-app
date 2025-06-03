import React from 'react';
import Header from '../header/Header';
import SideBar from '../side-bar/SideBar';
import AudioPlayer from '../audio-player/AudioPlayer';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col bg-primary text-text h-screen">
      <Header />
      <div className="flex flex-grow">
        <SideBar />
        <main className="flex-grow overflow-y-auto p-5">{children}</main>
      </div>
      <AudioPlayer />
    </div>
  );
};

export default Layout;
