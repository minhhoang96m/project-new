import Image from 'next/image'
import Illustration from '~/public/assets/Illustration_1.png'
import MasterCard from '~/public/assets/m_mastercard.png'
import Paypall from '~/public/assets/m_paypall.png'
import Visa from '~/public/assets/m_visa.png'
const HeroPage = () => {
  return (
    <div>
      <div className='flex flex-row w-[131.9rem] h-[58rem] ml-[8rem] mr-10  '>
        <div className='w-[769px]'>
          <h1 className=' leading-[7rem] my-[2.5rem]'>
            Always Track & <br />
            Analyze Your Business <br />
            Statistics To Succeed.
          </h1>
          <h3>
            A better way to manage your sales, team, clients & marketing <br />—
            on a single platform. Powerful, affordable & easy.
          </h3>
          <div className='flex flex-row my-10'>
            <input
              type='text'
              placeholder='Enter your email'
              className='w-[28rem] h-[5.2rem] text-[1.5rem] pl-3 border border-black'
            />
            <button className='text-[1.5rem] text-center text-[#FFFF] text-[1.5rem] bg-black w-[19.8rem] h-[5.2rem] shadow-[0px 4px 4px 0px rgba(0,0,0,0.25)]  cursor-pointer '>
              Get started
            </button>
          </div>
          <div className='flex flex-row ml-3 mt-20'>
            <Image
              className=' object-cover mr-10'
              src={Visa}
              alt='Visa'
              width={86}
              height={40}
            />
            <Image
              className=' object-cover mr-10'
              src={MasterCard}
              alt='MasterCard'
              width={60}
              height={40}
            />
            <Image
              className=' object-cover mr-10'
              src={Paypall}
              alt='Paypall'
              width={120}
              height={40}
            />
          </div>
        </div>
        <Image
          className=' object-cover'
          src={Illustration}
          alt='Illustration'
          width={550}
          height={580}
        />
      </div>
    </div>
  )
}

export default HeroPage
