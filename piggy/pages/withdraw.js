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
import { BigNumber } from 'ethers'


const Withdraw = () => {
    
    return ( 
        <div className='bg-black h-screen align-center flex flex-col'>
            <div className='h-1/4'>.</div>
            <div className='flex bg-gray-300 w-2/3 place-self-center flex-col place-content-center p-7 rounded-md'>
                <p className='text-black font-bold p-2 place-self-center'>Enter Deposit ID:</p>
                <form className='flex flex-col items-center'>
                    <input 
                        className='bg-slate-500 placeholder-white text-bold w-2/3 p-3 rounded-md m-2'
                        type="number"
                        placeholder='Deposit ID...'
                    />
                    <button className='w-1/2 p-2 bg-purplee text-white rounded-md m-2'>SUBMIT</button>
                </form>
            </div>
            <div className='bottom-4 flex place-self-center w-3/4 px-1 py-3 bg-white opacity- backdrop-blur fixed justify-evenly rounded-full'>
                <div className='w-10 bg-red bg-opacity-50 backdrop-blur'><Link href='/'><Image src={home} alt="home"/></Link></div>
                <div className='w-10 bg-red-30 text-black font-bold '><Link href="/deposit"><Image src={piggybtn} alt="deposit"/></Link></div>
                <div className='w-10'><Link href='/withdraw'><Image src={withdraw} alt="withdraw"/><span className='font-black bg-black p-1 text-xs flex'></span></Link></div>
            </div>
        </div>
     );
}
 
export default Withdraw;