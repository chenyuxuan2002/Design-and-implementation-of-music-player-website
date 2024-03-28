import React from 'react';
import { IoMdHome } from "react-icons/io";
import { FaSearch, FaMusic, FaBorderAll,FaCloudUploadAlt,FaThList } from "react-icons/fa";

import useShowModal from '@/hooks/useShow';
import useUserStore from '@/hooks/useUser';

type Props = {}

const Sidebar = (props: Props) => {
  const { setShow } = useShowModal();
  const {user} = useUserStore()

  return (
    <div className='p-2 flex flex-col gap-2 h-full'>
        <div className='bg-neutral-900 flex flex-col gap-4 p-6 rounded-md text-neutral-400'>
            <div 
              className='flex gap-4 items-center hover:text-white cursor-pointer'
              onClick={() => setShow('player')} // 切换到播放器视图
            >
                <IoMdHome size={22}/>
                <p>Home</p>
            </div>

            <div 
              className='flex gap-4 items-center hover:text-white cursor-pointer'
              onClick={() => setShow('list')} // 切换到类别视图
            >
                <FaThList size={22}/>
                <p>List</p>
            </div>

            <div 
              className='flex gap-4 items-center hover:text-white cursor-pointer'
              onClick={() => setShow('category')} // 切换到类别视图
            >
                <FaBorderAll size={22}/>
                <p>Catagory</p>
            </div>

            {
              user && 
              <div 
                className='flex gap-4 items-center hover:text-white cursor-pointer'
                onClick={() => setShow('upload')} //Toggle the 'upload' modal
              >
                <FaCloudUploadAlt size={22}/>
                <p>Upload</p>
              </div>

            }
           

            

            <div 
              className='flex gap-4 items-center hover:text-white cursor-pointer'
              onClick={() => setShow('search')} // 切换到搜索视图
            >
                <FaSearch size={22}/>
                <p>Search</p>
            </div>
        </div>

        <div className='bg-neutral-900 flex flex-col gap-2 p-3 h-full rounded-md text-neutral-400'>
            <div  onClick={() => setShow('library')}
                  className='flex gap-4 items-center hover:text-white cursor-pointer'>
                <FaMusic size={22}/>
                <p>My Library</p>
            </div>
        </div>
    </div>
  );
}

export default Sidebar;
