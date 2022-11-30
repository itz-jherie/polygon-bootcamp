import { ConnectButton } from '@rainbow-me/rainbowkit'
import piggylogo from '../assets/piggylogo.svg'
import polylogo from '../assets/polylogo.svg'
import Image from 'next/image'
import Iconhamburger from '../assets/icon-hamburger.svg'


const Navbar = () => {
    return ( 
        <nav className="fixed bg-opacity-50 backdrop-blur right-0 left-0  flex justify-between px-5 py-2 bg-blue-50">
            <div className='p-3 self-center'><Image src={Iconhamburger} alt="menu"/></div>
            <div className='flex'>
                <Image  src={piggylogo} alt='logo'/>
                <Image  className='-mx-5' src={polylogo} alt='logo' width="auto"/>
            </div>
            <div className='text-xs'>
                <ConnectButton className=""
                    label="Connect"
                    accountStatus="address"
                />
            </div>
        </nav>
     );
}
 
export default Navbar;