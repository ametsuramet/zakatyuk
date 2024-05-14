import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button, Progress } from 'rsuite'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { CalculatorIcon, CheckBadgeIcon, ChevronLeftIcon, ChevronRightIcon, HomeIcon, ListBulletIcon, MagnifyingGlassIcon, NewspaperIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { HiHome, HiOutlineHome, HiOutlineListBullet, HiOutlineMegaphone, HiOutlineUser } from 'react-icons/hi2'
import { PiNewspaper } from 'react-icons/pi'
import Swipe, { SwipeEvent, SwipePosition } from 'react-easy-swipe'
import { Item } from './components/carousel_component'
import Carousel from './components/carousel'



function App() {
  const [count, setCount] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [leftScrollShow, setLeftScrollShow] = useState(false);

  return (
    <>
      <div className="min-h-screen flex flex-col z-50">

        {/* Main Content */}
        <div className="flex-grow pb-32">
          <div className=' pb-24 relative '>
            <div className='md:px-10  md:h-[400px] h-[240px] p-4' style={{ backgroundImage: "url(/main-banner.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>

              <div className='w-2/3 '>
                <h1 className='md:mb-4 text-xl/7 md:text-4xl  font-bold text-white text-shadow shadow-gray-900 pt-20 md:pt-60'>Tingkatkan kepedulian anda dengan zakat</h1>
                <h3 className='text-white text-shadow-sm md:text-xl text-base/5 shadow-gray-900'>Kini anda dapat lebih mudah menunaikan zakat</h3>
              </div>

            </div>
            <div className='px-4 py-3 md:py-4 md:px-4 shadow absolute bottom-8 bg-white rounded-lg left-4  md:max-w-[600px] right-4 text-sm/5 md:text-base min-h-16 md:left-0 md:right-0 m-auto hero'>
              <p className='font-semibold'>
                Dengan zakat menuju pemberdayaan umat, ada 4 juta lebih orang yang telah berzakat di Indonesia
              </p>
              <div className='flex'>
                <div className='mt-4 bg-pink-700 text-white px-2 py-1 rounded-lg text-sm'>Bergabung Sekarang</div>

              </div>
            </div>
          </div>
          {/* dynamic Content */}
          <div className='mx-4  md:m-auto md:max-w-[1000px] flex flex-col  '>

            <div className='bg-white p-4 mb-4 rounded-md hover:shadow-lg shadow-gray-50 relative'>
              {leftScrollShow &&
                <div className='bg-white shadow p-2 none absolute top-[40%] left-0 z-10 rounded-full cursor-pointer' onClick={() => {
                  scrollRef.current!.scrollLeft -= 220;
                }}>
                  <ChevronLeftIcon className='w-4' />
                </div>
              }
              <div className='bg-white shadow p-2 none absolute top-[40%] right-0 z-10 rounded-full cursor-pointer' onClick={() => {
                scrollRef.current!.scrollLeft += 220;
              }}>
                <ChevronRightIcon className='w-4' />
              </div>
              <h3 className='font-semibold mb-4'>Penggalangan Dana Terpilih</h3>
              <div className="mb-4 flex flex-row space-x-4 overflow-x-auto scroll-smooth pb-4 relative" ref={scrollRef}>

                <div className="flex gap-4 pr-4 pb-2">
                  {fund()}
                  {fund()}
                  {fund()}
                  {fund()}
                  {fund()}
                  {fund()}
                </div>
              </div>

            </div>
            <div className='bg-white mb-4 rounded-md hover:shadow-lg shadow-gray-50 relative'>
              <Carousel >
                <Item img="https://unsplash.it/475/205" >
                  Hallo
                </Item>
                <Item img="https://unsplash.it/476/205" >
                  Hallo
                </Item>
                <Item img="https://unsplash.it/477/205" >
                  Hallo
                </Item>
                <Item img="https://unsplash.it/478/205" >
                  Hallo
                </Item>
                <Item img="https://unsplash.it/479/205" >
                  Hallo
                </Item>
              </Carousel>
            </div>

          </div>
        </div>
        {/* Top Bar (hidden on mobile) */}
        <div className=" bg-transparent transition-all fixed top-0 left-0 right-0 text-white p-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.jpg" alt="Logo" className="h-8 mr-4 rounded-full" />
            <span className="text-lg font-semibold logo">ZakatYuk!</span>
          </div>
          {/* Menu */}
          <div className='flex items-center'>
            <div className="md:flex items-center hidden">
              <a href="#" className=" text-shadow-sm cursor-pointer hover:text-black hover:font-semibold px-4">
                Home
              </a>
              <a href="#" className=" text-shadow-sm cursor-pointer hover:text-black hover:font-semibold px-4">
                Channel
              </a>
              <a href="#" className=" text-shadow-sm cursor-pointer hover:text-black hover:font-semibold px-4">
                Charity
              </a>
              <a href="#" className=" text-shadow-sm cursor-pointer hover:text-black hover:font-semibold px-4">
                Transactions
              </a>
              <a href="#" className=" text-shadow-sm cursor-pointer hover:text-black hover:font-semibold px-4">
                Profile
              </a>

            </div>
            <MagnifyingGlassIcon className='w-4 cursor-pointer  hover:w-6 transition-all' />
          </div>
        </div>
        {/* Bottom Menu (visible on mobile) */}

        <div className="flex h-20  menu-bottom justify-center bg-white shadow-[_0_0px_10px_rgba(0,0,0,0.1)] text-gray-400 p-4 fixed bottom-0 left-0 right-0 md:hidden">
          <div className='flex cursor-pointer w-36 flex-col  transition-all text-center justify-center items-center mx-2  active' >
            <HiOutlineHome size={28} className='w-6 cursor-pointer transition' />
            <span className='text-xxs hover:text-xs'>Home</span>
          </div>
          <div className='flex cursor-pointer w-36 flex-col hover:text-sm transition-all text-center justify-center items-center mx-2 ' >
            <PiNewspaper size={28} className='w-6 cursor-pointer transition' />
            <span className='text-xxs hover:text-xs'>Kanal</span>
          </div>
          <div className='flex cursor-pointer w-36 flex-col hover:text-sm transition-all text-center justify-center items-center mx-2 ' >
            <HiOutlineMegaphone size={28} className='w-6 cursor-pointer transition' />
            <span className='text-xxs hover:text-xs'>Galang Dana</span>
          </div>
          <div className='flex cursor-pointer w-36 flex-col hover:text-sm transition-all text-center justify-center items-center mx-2 ' >
            <HiOutlineListBullet size={28} className='w-6 cursor-pointer transition' />
            <span className='text-xxs hover:text-xs'>Transaksi</span>
          </div>
          <div className='flex cursor-pointer w-36 flex-col hover:text-sm transition-all text-center justify-center items-center mx-2 ' >
            <HiOutlineUser size={28} className='w-6 cursor-pointer transition' />
            <span className='text-xxs hover:text-xs'>Profil</span>
          </div>
        </div>
      </div>

    </>
  )
}

export default App

function fund() {
  return (<a
    className="relative w-[220px] flex-shrink-0 rounded-lg bg-white shadow-[0_2px_8px_rgba(152,152,152,0.2)]"
    data-testid="homepage-card-campaign-penggalangan-dana-mendesak"
    href="/campaign/banjirsumbar"
  >
    <div className="absolute top-0 left-0 rounded-tl-lg rounded-br-lg bg-white px-2 py-1">
      <span className="block text-xs font-semibold leading-3 text-cerulean-80">
        29 hari lagi
      </span>
    </div>
    <img
      alt="URGENT! Respon Cepat Banjir Bandang Sumbar"
      loading="lazy"
      width={220}
      height={120}
      decoding="async"
      data-nimg={1}
      className="h-[120px] w-[220px] rounded-tl-lg rounded-tr-lg object-cover"
      src="/flood.jpg"
      style={{ color: "transparent" }}
    />
    <div className="p-3">
      <div className="mb-2 flex">
        <span className="inlin-block overflow-hidden text-ellipsis whitespace-nowrap text-xs text-onyx">
          Masjid Nusantara
        </span>
        <div className="relative flex items-center">
          <CheckBadgeIcon className='w-3 text-pink-600 ml-2' />

        </div>
      </div>
      <span className="mb-2 block h-9 overflow-hidden break-words text-sm font-semibold text-mineshaft line-clamp-2">
        URGENT! Respon Cepat Banjir Bandang Sumbar
      </span>
      <div className="mb-2">
        <span className="mr-2 inline-block text-xs md:text-sm text-mineshaft">
          Terkumpul
        </span>
        <span className="text-sm font-semibold">Rp12.925.052</span>
      </div>
      <Progress.Line percent={30} strokeColor='#be185d' status="active" strokeWidth={4} showInfo={false} className='custom-progress' />

    </div>
  </a>)
}