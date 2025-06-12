import React from 'react';
import Header from '../header/Header';
import SideBar from '../side-bar/SideBar';
import AudioPlayer from '../audio-player/AudioPlayer';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
<div className="h-screen flex flex-col bg-primary text-text">
  <div className="flex flex-grow">
    <SideBar/>
    <div className="flex flex-col flex-grow">
      <Header />
      <main className="flex-grow overflow-y-auto p-5 pt-0">{children}</main>
    </div>
  </div>
  <AudioPlayer />
</div>
  );
};

export default Layout;
