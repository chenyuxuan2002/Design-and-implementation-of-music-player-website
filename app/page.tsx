"use client"

import Sidebar from '@/components/Sidebar'
import Mainbar from '@/components/Mainbar'


export default function Home() {

  return (
    <main className="flex h-screen overflow-auto w-full bg-black text-white">

        <div className='md:basis-3/12'>
          <Sidebar/>
        </div>

        <div className='md:basis-9/12 w-full flex justify-center items-center'>
          <Mainbar/>
        </div>
       
    </main>
  )
}


