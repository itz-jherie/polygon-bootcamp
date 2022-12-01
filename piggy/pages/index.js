import { useState, useEffect } from 'react'
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
import { PIGGY_ADDRESS, PIGGY_ABI } from '../constants/index.js'
import { useAccount, useContractRead } from 'wagmi'
import { ethers, utils } from 'ethers'
import { parseEther, formatEther, parseUnits } from 'ethers/lib/utils';



export default function Home() {
  const [balance, setBalance] = useState()
  const [deposited, setDeposited] = useState()
  const [withdrawn, setWithdrawn] = useState()

  const contractRead = useContractRead({
    address: PIGGY_ADDRESS,
    abi: PIGGY_ABI,
    functionName: 'getBalanceInWei',
    onSuccess(data) {
      setBalance(formatEther(data))
    }
  })
  
  const getEthersIn = useContractRead({
    address: PIGGY_ADDRESS,
    abi: PIGGY_ABI,
    functionName: 'ethersIn',
    onSuccess(data) {
      setDeposited(formatEther(data))
    }
  })

  const getEthersOut = useContractRead({
    address: PIGGY_ADDRESS,
    abi: PIGGY_ABI,
    functionName: 'ethersOut',
    onSuccess(data) {
      setWithdrawn(formatEther(data))
    }
  })
  
 return (
    <div className="bg-black text-white h-screen flex flex-col md:mx-0 xl:mx-50 lg:mx-40">
      <Image src={piggy}  alt='bg'className='flex self-center'/>
      <div className='text-lg flex justify-center mt-7'>
        Balance: 
      </div>
      <div className='text-xl font-bold flex justify-center'>{balance} MATIC</div>
      <span className='flex justify-end mx-7'><Link href='/deposit'><Image src={addbtn} alt="deposit btn"/></Link></span>
      <div className='flex flex-col p-5'>
        <span className='py-3 font-bold'></span>
        <div className='flex justify-between  bg-green-500 p-4 rounded-md'>
          <span>Total Amount Deposited</span>
          <span>{deposited} MATIC</span>
        </div>
        <div className='flex justify-between mt-4 bg-red-500 p-4 rounded-md'>
          <span>Total Amount Withdrawn</span>
          <span>{withdrawn} MATIC</span>
        </div>
        <div className='mt-20 text-black'>.</div>
        <div className='bottom-4 flex place-self-center w-3/4 px-1 py-2 border border-gray-400 fixed justify-evenly rounded-full bg-opacity-50 backdrop-blur bg-purple-200'>
          <div className='w-10 bg-red '><Image src={home} alt="home"/><Link href='/'><span className='font-black bg-black p-1 text-xs flex'></span></Link></div>
          <div className='w-10 bg-red-30 text-black font-bold'><Link href='/deposit'><Image src={piggybtn} alt="deposit"/></Link></div>
          <div className='w-10 '><Link href='/withdraw'><Image src={withdraw} alt="withdraw"/></Link></div>
        </div>
      </div>
    </div>
  )
}
