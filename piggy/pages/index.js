import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import piggy from '../assets/piggypic.webp'
import home from '../assets/home.svg'
import withdraw from '../assets/withdraw.svg'
import piggybtn from '../assets/piggybtn.svg'
import addbtn from '../assets/addbtn.svg'
import Link from 'next/link'
//#8247E5
export default function Home() {
  return (
    <div className="bg-black text-white h-screen">
      <Image src={piggy}  alt='bg'/>
      <div className='text-lg flex justify-center mt-7'>
        Balance:
      </div>
      <div className='text-xl font-bold flex justify-center'>3.2 MATIC</div>
      <span className='flex justify-end mx-7'><Image src={addbtn}/></span>
      <div className='flex flex-col p-5'>
        <span className='py-3 font-bold'>Deposits:</span>
        <div className='flex justify-between  bg-purplee p-4 rounded-md'>
          <span>1.2 MATIC</span>
          <span>date</span>
        </div>
        <div className='flex justify-between mt-4 bg-purplee p-4 rounded-md'>
          <span>1.2 MATIC</span>
          <span>date</span>
        </div>
        <div className='bottom-4 flex place-self-center w-3/4 px-1 py-3 bg-white opacity- backdrop-blur fixed justify-evenly rounded-full'>
          <div className='w-10 bg-red bg-opacity-50 backdrop-blur'><Image src={home}/><Link href='/'><span className='font-black bg-black p-1 text-xs flex'></span></Link></div>
          <div className='w-10 bg-red-30 text-black font-bold '><Link href='/deposit'><Image src={piggybtn}/></Link></div>
          <div className='w-10'><Image src={withdraw}/></div>
        </div>
      </div>
    </div>
  )
}
