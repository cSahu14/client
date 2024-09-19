import React from 'react'
import Navbar from '@/app/(components)/Navbar'
import Sidebar from '@/app/(components)/Sidebar'


const DashboardWrapper = ({children}: { children: React.ReactNode}) => {
  return (
    <div className={` flex w-full bg-gray-50 text-gray-900 max-h-screen`}>
        <Sidebar/>
        <main className={`light flex flex-col bg-gray-50 md:pl-24 py-7 px-9 w-full`}>
            <Navbar/>
            {children}
        </main>
    </div>
  )
}

export default DashboardWrapper