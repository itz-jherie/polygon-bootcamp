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
import { useAccount, useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi'
import { BigNumber, ethers, utils } from 'ethers'
import { parseEther, formatEther, parseUnits } from 'ethers/lib/utils';
import { readContract } from '@wagmi/core'

const Withdraw = () => {
    const [deposits, setDeposits] = useState();
    const [queryDetails, setQueryDetails] = useState()
    const [amount, setAmount] = useState()
    const [depositId, setDepositId] = useState()
    const [depositTime, setDepositTime] = useState()
    const [unlockTime, setUnlockTime] = useState()
    const [userDepositValue, setUserDepositValue] = useState('')
    const [withdrawID, setWithdrawID] = useState('')
 

    const getTotalDeposits = useContractRead({
        address: PIGGY_ADDRESS,
        abi: PIGGY_ABI,
        functionName: 'getDepositsLength',
        onSuccess(data) {
            setDeposits(parseInt(data._hex)- 1)
        }
      })
      
    const getQuery = async (id) => {
        const queryDeposits = await readContract({
            address: PIGGY_ADDRESS,
            abi: PIGGY_ABI,
            functionName: 'deposits',
            args: [id],
        })
        if(queryDeposits) {
            setAmount(formatEther(queryDeposits._amount._hex))
            setDepositId(parseInt(queryDeposits._depositId._hex))
            setDepositTime(parseInt(queryDeposits._depositTime._hex))
            setUnlockTime(parseInt(queryDeposits._unlockTime._hex))
            setQueryDetails(true) 
        }
    }

        const getReadableDate = (unixTime) => {
            let timestamp = unixTime*1000
            let date = new Date(timestamp);
            return date;
        }

        const { config: withdrawConfig } = usePrepareContractWrite({
            address: PIGGY_ADDRESS,
            abi: PIGGY_ABI,
            functionName: "withdrawEthFromDeposit",
            args: [withdrawID]
        })
        const { write: withdrawWrite } = useContractWrite({
            ...withdrawConfig,
            onError(error) {
                alert(error.message.slice(0, 25))
            },
            onSuccess() {
                alert('Successful')
            }
        });
//2.0466

    return ( 
        <div className='bg-black h-screen align-center flex flex-col md:mx-0 xl:mx-50 lg:mx-40'>
            <div className='mt-7'>.</div>
            <p className='bg-green-500 self-center p-3 mt-3'>Total Deposits Index: {deposits} </p>
            <div className='flex bg-gray-300  place-self-center flex-col place-content-center p-7 rounded-md m-3'>
                <p className='self-center font-bold'>Query deposit</p>
                <form>
                    <input
                        className='p-2'
                        type='number'
                        placeholder='Enter deposit ID'
                        onChange={e => {
                                setUserDepositValue(e.target.value);
                            }}
                        value={userDepositValue}
                    />
                    <button className='bg-purplee p-2'
                        onClick={(e) => {
                            e.preventDefault()
                            getQuery(userDepositValue)
                            setUserDepositValue('')
                        }}
                    >Query Deposit</button>
                </form>
                {queryDetails && 
                    <div>
                        <p>Deposit ID: {depositId}  </p>
                        <p>Amount: {amount} MATIC</p>
                        <p>Deposit Time: {getReadableDate(depositTime).toString()} </p>
                        <p>Unlock Time: {getReadableDate(unlockTime).toString()}</p>
                    </div>
                }
            </div>
            <div className='flex bg-gray-300  place-self-center flex-col place-content-center p-7 rounded-md'>
                <p className='text-black font-bold p-2 place-self-center'>Withdraw Funds</p>
                <form className='flex flex-col items-center'>
                    <input 
                        className='bg-slate-500 placeholder-white text-bold w-2/3 p-3 rounded-md m-2'
                        type="number"
                        placeholder='Deposit ID...'
                        setWithdrawID
                        onChange={e => {
                            setWithdrawID(e.target.value);
                        }}
                        value={withdrawID}
                    />
                    <button className='w-1/2 p-2 bg-purplee text-white rounded-md m-2'
                        onClick={(e) => {
                            e.preventDefault()
                            withdrawWrite()
                            setWithdrawID('')
                        }}
                    >SUBMIT</button>
                </form>
            </div>
            <div className='mt-20'>.</div>
            <div className='bottom-4 flex place-self-center w-3/4 px-1 py-3 border border-gray-400 fixed justify-evenly rounded-full bg-opacity-50 backdrop-blur bg-purple-200'>
                <div className='w-10 bg-red'><Link href='/'><Image src={home} alt="home"/></Link></div>
                <div className='w-10 bg-red-30 text-black font-bold '><Link href="/deposit"><Image src={piggybtn} alt="deposit"/></Link></div>
                <div className='w-10'><Link href='/withdraw'><Image src={withdraw} alt="withdraw"/><span className='font-black bg-black p-1 text-xs flex'></span></Link></div>
            </div>
        </div>
     );
}
 
export default Withdraw;