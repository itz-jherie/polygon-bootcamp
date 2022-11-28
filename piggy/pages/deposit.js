import home from '../assets/home.svg'
import withdraw from '../assets/withdraw.svg'
import piggybtn from '../assets/piggybtn.svg'
import Image from 'next/image'
import Link from 'next/link'

const Deposit = () => {
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
                <div className="flex flex-wrap justify-center font-black ">
                    <button className="bg-white text-black p-5 rounded-full m-2">Custom <br/> Time</button>
                    <button  className="bg-white text-black p-5 rounded-full m-2">1 <br/>Year</button>
                    <button  className="bg-white text-black p-5 rounded-full m-2">Ten <br/> Days</button>
                    <button  className="bg-white text-black p-5 rounded-full m-2">Ten<br/> Minutes</button>
                    <button  className="bg-white text-black p-5 rounded-full m-2">Ten<br/> Months</button>
                </div>
            </div>
            <div className="text-center">Current lock time:
                <p className="text-lg font-bold">2 Minutes</p>
            </div>
            <form className=" flex justify-center flex-col font-black">
                <input className="flex w-1/2 self-center p-5 rounded-md mt-3 bg-slate-500"
                    type='text'
                    placeholder="Enter amount to deposit"
                />
                <button className="p-5 bg-purplee w-1/4 self-center mt-7 rounded-md">Submit</button>
            </form>
            <div className='bottom-4 flex place-self-center w-3/4 px-1 py-3 bg-white opacity- backdrop-blur fixed justify-evenly rounded-full'>
          <div className='w-10 bg-red bg-opacity-50 backdrop-blur'><Link href='/'><Image src={home}/></Link></div>
          <div className='w-10 bg-red-30 text-black font-bold '><Image src={piggybtn}/><span className='font-black bg-black p-1 text-xs flex'></span></div>
          <div className='w-10'><Image src={withdraw}/></div>
        </div>
        </div>
     );
}
 
export default Deposit;