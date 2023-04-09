import React from 'react';
import Header from "../../components/header/index";
import VideosList from "../../components/video_list/index";



const HomePage = () => {

  return (
    <div className='w-full h-full'>
      <Header></Header>
      <div className='bg-gray-50 mt-[100px] px-[48px] pt-[48px]'>
        <VideosList></VideosList>
      </div>
    </div>
  );
};

export default HomePage;