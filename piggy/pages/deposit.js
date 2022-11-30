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
import { useAccount, useContractRead, usePrepareContractWrite, useContractWrite } from 'wagmi'
import { BigNumber } from 'ethers'
import { ethers, utils } from 'ethers'
import { parseEther, formatEther, parseUnits } from 'ethers/lib/utils';



const Deposit = () => {
    const [unlockTime, setUnlockTime] = useState(0);
    const [humanizeTime, setHumanizeTime] = useState();
    const [customTime, setCustomTime] = useState();
    const [depositAmount, setDepositAmount] = useState('');
    const { address } = useAccount()
    

        const getUnlockTime = useContractRead({
            address: PIGGY_ADDRESS,
            abi: PIGGY_ABI,
            functionName: 'lockTime',
            onSettled(data, error) {
            setUnlockTime((parseInt(data._hex)))
            },
        })


        function ConvertSectoDay(n) {
            let day = parseInt( n / (24 * 3600));

            n = n % (24 * 3600);
            var hour = parseInt(n / 3600);

            n %= 3600;
            let minutes = n / 60;

            n %= 60;
            let seconds = n;

            setHumanizeTime(
                    day + " " + "days " + hour + " " + "hours "
                    + minutes.toFixed() + " " + "minutes " +
                    seconds.toFixed() + " " + "seconds ");
        }

        useEffect(() => {
            if (unlockTime) {
                ConvertSectoDay(unlockTime)
            }
        }, [unlockTime])

        const { config: customTimeConfig } = usePrepareContractWrite({
            address: PIGGY_ADDRESS,
            abi: PIGGY_ABI,
            functionName: "setCustomUnlockTimeInMinutes",
            args: [customTime || 5]
        })
        const { write: customTimeWrite } = useContractWrite({
            ...customTimeConfig,
            onError(error) {
                alert(error.message.slice(0, 25))
            }
        });

        const { config: oneYearConfig } = usePrepareContractWrite({
            address: PIGGY_ADDRESS,
            abi: PIGGY_ABI,
            functionName: "setUnlockTimeToOneYear",
        })
        const { write: oneYearWrite } = useContractWrite({
            ...oneYearConfig,
            onError(error) {
                alert(error.message.slice(0, 25))
            },
            onSuccess() {
                alert('Successful')
            }
        });

        const { config: tenDayConfig } = usePrepareContractWrite({
            address: PIGGY_ADDRESS,
            abi: PIGGY_ABI,
            functionName: "setUnlockTimeToTenDays",
        })
        const { write: tenDayWrite } = useContractWrite({
            ...tenDayConfig,
            onError(error) {
                alert(error.message.slice(0, 25))
            },
            onSuccess() {
                alert('Successful')
            }
        });

        const { config: tenMinConfig } = usePrepareContractWrite({
            address: PIGGY_ADDRESS,
            abi: PIGGY_ABI,
            functionName: "setUnlockTimeToTenMinutes",
        })
        const { write: tenMinWrite } = useContractWrite({
            ...tenMinConfig,
            onError(error) {
                alert(error.message.slice(0, 25))
            },
            onSuccess() {
                alert('Successful')
            }
        });

        const { config: tenMonthsConfig } = usePrepareContractWrite({
            address: PIGGY_ADDRESS,
            abi: PIGGY_ABI,
            functionName: "setUnlockTimeToTenMonths",
        })
        const { write: tenMonthsWrite } = useContractWrite({
            ...tenMonthsConfig,
            onError(error) {
                alert(error.message.slice(0, 25))
            },
            onSuccess() {
                alert('Successful')
            }
        });

        const { config: depositConfig } = usePrepareContractWrite({
            address: PIGGY_ADDRESS,
            abi: PIGGY_ABI,
            functionName: "depositEth",
            overrides: {
                from: address,
                value: ethers.utils.parseEther(depositAmount ? depositAmount :'0.0005'),
            }
        })
        const { write: depositWrite } = useContractWrite({
            ...depositConfig,
            onError(error) {
                alert(error.message.slice(0, 25))
            },
            onSuccess() {
                alert('Successful')
            }
        });

        // const { config: depositConfig } = usePrepareContractWrite({
        //     address: PIGGY_ADDRESS,
        //     abi: PIGGY_ABI,
        //     functionName: "depositEth",
        //     overrides: {
        //         from: address,
        //         value: ethers.utils.parseEther("4")
        //     },
            
    
        // })
        // const { write: depositConfigWrite } = useContractWrite({
        //     ...depositConfig,
        //     onError(error) {
        //         alert(error.message.slice(0, 25))
        //     },
        //     onSuccess() {
        //             alert('Deposit Successful')
        //          }
        // })
    return (
        <div className="bg-black flex text-white white h-screen align-center flex-col">
            <p>.</p>
            <p className="mt-10 flex justify-center">SAVE MATIC:</p>
            <p className="border rounded-md w-1/2 self-center p-5">
                The individual most 
                accountable for your 
                future financial welfare
                is the one you see in 
                the mirror today. <br/>
                -kemberly wardlaw
                </p>
            <div className="bg-purplee mt-7 w-full">
                <p className="text-center">Set unlock time:</p>
                <div className="flex flex-wrap justify-center font-black">
                    <div className='w-full flex justify-center'>
                        <div className="bg-white  text-black p-7  m-2 flex flex-col items-center">Enter Custom Time:
                            <form className='self-center bg-gray-300'>
                                <input className='flex justify-center bg-gray-300 p-2 rounded-md'  
                                    type="number"
                                    placeholder="custom time"
                                    onChange={e => {
                                        setCustomTime(e.target.value) 
                                        }}
                                    value={customTime}
                                />
                            </form>
                            <button 
                                className='bg-purplee p-2 rounded-md mt-2'
                                onClick={(e) => {
                                    e.preventDefault()
                                    customTimeWrite()
                                    setCustomTime('')
                                }}
                            >Submit</button>
                        </div>
                    </div>
                    <button  className="bg-white text-black p-5 rounded-full m-2"
                        onClick={(e) => {
                            e.preventDefault()
                            oneYearWrite()
                        }}
                    >1 <br/>Year</button>
                    <button  className="bg-white text-black p-5 rounded-full m-2"
                        onClick={(e) => {
                            e.preventDefault()
                            tenDayWrite()
                        }}
                    >Ten <br/> Days</button>
                    <button  className="bg-white text-black p-5 rounded-full m-2"
                        onClick={(e) => {
                            e.preventDefault()
                            tenMinWrite()
                        }}
                    >Ten<br/> Minutes</button>
                    <button  className="bg-white text-black p-5 rounded-full m-2"
                        onClick={(e) => {
                            e.preventDefault()
                            tenMonthsWrite()
                        }}
                    >Ten<br/> Months</button>
                </div>
            </div>
            <div className="text-center">Current lock time:
                <p className="text-lg font-bold">{humanizeTime}</p>
            </div>
            <form className=" flex justify-center flex-col font-black">
                <input className="flex w-1/2 self-center p-5 rounded-md mt-3 bg-slate-500 font-bold"
                    type='number'
                    placeholder="Enter amount to deposit"
                    onChange={(e) => {
                        setDepositAmount(e.target.value) 
                        }}
                    value={depositAmount}
                />
                <button className="p-5 bg-purplee w-1/4 self-center mt-7 rounded-md"
                    onClick={(e) => {
                        e.preventDefault()
                        depositWrite()
                        setDepositAmount('')
                    }}
                >Submit</button>
            </form>
            <div className='mt-20'>.</div>
            <div className='bottom-4 flex place-self-center w-3/4 px-1 py-3 bg-white opacity- backdrop-blur fixed justify-evenly rounded-full'>
                <div className='w-10 bg-red bg-opacity-50 backdrop-blur'><Link href='/'><Image src={home} alt="home"/></Link></div>
                <div className='w-10 bg-red-30 text-black font-bold '><Image src={piggybtn} alt="deposit"/><span className='font-black bg-black p-1 text-xs flex'></span></div>
                <div className='w-10'><Link href='/withdraw'><Image src={withdraw} alt="withdraw"/></Link></div>
                
            </div>
        </div>
     );
}
 
export default Deposit;