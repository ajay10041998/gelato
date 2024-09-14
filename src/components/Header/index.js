import './index.css'
import { MdHeadsetMic } from "react-icons/md";
import { IoGlobeSharp } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
const Header = () =>{
    return (
        <div className='header-container'>
            <nav className='nav-container'>
                <div className='gelato-logo-heading-section'>
                    <img src='https://res.cloudinary.com/dndswwhrh/image/upload/v1726199912/Screenshot_81_owr54o.png'
                    className='gelato-image'
                    alt="gelato"/>
                    <h1>Gelato</h1>
                </div>
                <ul className='nav-elements-section'>
                    <li className='list-item'>
                    <MdHeadsetMic />
                    <p>Contact us</p>
                    </li>

                    <li className='list-item'>
                    <IoGlobeSharp />
                    <p>IN/INR 
                        <button className='arrow-btn'>
                            <MdKeyboardArrowDown />
                        </button></p>
                    </li>

                    <li className='list-item'>
                    <MdShoppingCart />
                    <p>Cart</p>
                    </li>

                    <li className='list-item'>
                    <IoIosContact />
                    <p>Sign in</p>
                    </li>
                    <button className='signup-button'>Sign up for free</button>
                </ul>
            </nav>
            <hr/>

                <div>
                    <ul className='hamburg-menu-container'>
                        <li className='menu-items'>
                            <p>Products</p>
                            <div className='arrow-down-icon'>
                            <MdKeyboardArrowDown />
                            </div>  
                        </li>

                        <li className='menu-items'>
                            <p>Start selling</p>
                            <div className='arrow-down-icon'>
                            <MdKeyboardArrowDown />
                            </div>  
                        </li>

                        <li className='menu-items'>
                            <p>Tools and apps</p>
                            <div className='arrow-down-icon'>
                            <MdKeyboardArrowDown />
                            </div>  
                        </li>

                        <li className='menu-items'>
                            <p>pricing</p>
                            <div className='arrow-down-icon'>
                            <MdKeyboardArrowDown />
                            </div>  
                        </li>

                        <li className='menu-items'>
                            <p>Resources</p>
                            <div className='arrow-down-icon'>
                            <MdKeyboardArrowDown />
                            </div>  
                        </li>

                        <li className='menu-items'>
                            <p>Pro sellers</p> 
                        </li>

                        <li className='menu-items'>
                            <p>GelatoConnect</p>
                            <div className='arrow-down-icon'>
                            <MdKeyboardArrowDown />
                            </div>  
                        </li>

                    </ul>
                </div>
            <hr/>
        </div>
    )
}
export default Header