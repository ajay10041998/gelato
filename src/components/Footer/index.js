import './index.css'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { IoLogoApple } from "react-icons/io";
import { BiLogoPlayStore } from "react-icons/bi";
const Footer = () =>{
    return (
        <div className="footerscontainer">
            <div className='logo-social-icons'>
                <div className='logo-heading'>
                    <img src='https://res.cloudinary.com/dndswwhrh/image/upload/v1726199912/Screenshot_81_owr54o.png'
                    className='gelatoimg'
                    alt="gelato"/>
                    <h1>Gelato</h1>
                </div>
                <div className='social-icons'>
                    <p>Find Gelato on:</p>
                    <a className='icons' 
                    href="https://www.instagram.com/gelato/" 
                    target="_blank" 
                    rel="noopener noreferrer"><FaInstagram /></a>

                    <a className='icons' 
                    href="https://www.facebook.com/gelatoconnects" 
                    target="_blank" 
                    rel="noopener noreferrer"><FaFacebookF/></a>

                    <a className='icons' 
                    href="https://www.linkedin.com/company/gelato/" 
                    target="_blank" 
                    rel="noopener noreferrer"><CiLinkedin /></a>

                    <a className='icons' 
                    href=" https://www.youtube.com/c/GelatoConnects" 
                    target="_blank" 
                    rel="noopener noreferrer"><CiYoutube /></a>   
                </div>
            </div>
            <ul className='footer-unoreder-list'>
                <li className='list-footer'>
                    <p>Gelato has created the world's largest network for local production </p>
                    <button className='list-button'>Get started</button>
                    <p>Get The App</p>
                    <div className='buttons-container'>
                    <a  className='store-button' 
                    href="https://apps.apple.com/no/app/gelato/id1583536931" 
                    rel="noopener noreferrer" 
                    target="_blank">
                        <button >
                        <IoLogoApple />
                        <p>Apple Store</p>
                        </button>
                    </a>
                    <a  className='store-button' 
                    href="https://play.google.com/store/apps/details?id=com.gelato.api&pli=1" 
                    rel="noopener noreferrer" 
                    target="_blank">
                    <button >
                    <BiLogoPlayStore />
                    <p>Play Store</p>
                    </button>
                    </a>
                    </div>
                </li>
                <li>
                    <p>Print on Demand</p>
                    <p>what is print on demond</p>
                    <p>product catelog</p>
                    <p>global yet local</p>
                    <p>returns policies</p> 
                    <p>proseller</p>
                </li>
                <li>
                    <p>integration</p>
                    <p>shopify</p>
                    <p>WooCommerece</p>
                    <p>Wix</p>
                </li>
                <li>
                    <p>Company</p>
                    <p>Gelato contact</p>
                    <p>About Gelato</p>
                    <p>Leadership team</p>
                    <p>Newsroom</p>
                    
                </li>
            </ul>
        </div>
    )
}
export default Footer