import Image from 'next/image'

import LogoBlack from '~/public/assets/LogoBlack.png'

export default function HomePage() {
  const nameLinks = [
    {
      id: 1,
      name: 'About us',
    },
    {
      id: 2,
      name: 'How it works',
    },
    {
      id: 3,
      name: 'Pricing',
    },
    {
      id: 4,
      name: 'FAQs',
    },
  ]

  return (
    <div className='grid grid-flow-row w-[100%] mx-[8rem]  mt-[3.6rem] mb-[8rem]'>
      <div className='flex flex-row justify-normal items-center w-[128rem] h-[5.2rem]  text-[1.5rem] '>
        <Image
          src={LogoBlack}
          alt='LogoBlack.png'
          width={52}
          height={52}
          className='flex-none'
        />
        <div className='flex flex-row grow justify-normal items-center  mx-[2rem] my-[3.6rem] text-[1.5rem]'>
          {nameLinks.map((nameLink) => (
            <div className='mx-6 my-3' key={nameLink.id}>
              {nameLink.name}
            </div>
          ))}
        </div>

        <button className='flex-none text-[1.5rem] text-center bg-[#F0F0F0] w-[12.8rem] h-[5.2rem] shadow-[0 4px 4px 0 rgba(0,0,0,0.25)] rounded-[0.4rem] cursor-pointer'>
          Login
        </button>

        <button className='flex-none text-[1.5rem] text-center text-[#FFFF] bg-black w-[12.8rem] h-[5.2rem] mx-3 shadow-[0px 4px 4px 0px rgba(0,0,0,0.25)] rounded-[0.4rem] cursor-pointer'>
          Sign up
        </button>
      </div>
    </div>
  )
}
