'use client';
import { Menu, Bell, Sun, Settings } from 'lucide-react';
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full mb-4'>
      {/* left section */}
      <div className='flex justify-between items-center gap-4'>
        <button
          className='px-3 py-3 rounded-full bg-gray-100 hover:bg-blue-100'
          onClick={() => {}}
        >
          <Menu className='h-4 w-4' />
        </button>
        <div className='relative'>
            <input
            type='search'
            placeholder='Search types to search groups and products'
            className='pl-10 pr-4 py-2 md:w-80 border-2 border-gray-200 bg-white rounded-lg foucs:outline-none focus:border-blue-500'
            />
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <Bell className='text-gray-500' size={20}/>
            </div>
        </div>
      </div>
      {/* Right Section */}
      <div className='flex justify-between items-center gap-5'>
        <div className='hidden md:flex justify-between items-center gap-5'>
            <Sun className='cursor-pointer text-gray-500' size={24} />
            <div className='relative'>
                <Bell className='cursor-pointer text-gray-500' size={24} />
                <span className='absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-bold text-red-100 bg-red-400 rounded-full leading-none'> 3 </span>
            </div>
            <hr  className='w-0 h-7 border-solid border-l mx-3 border-gray-300'/>
            <div className='flex items-center gap-3 cursor-pointer'>
                <div className='w-9 h-9'>Image</div>
                <span className='font-semibold'>Cs</span>    
            </div>
        </div>
        <Link href="/settings">
            <Settings className='cursor-pointer text-gray-500' size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
