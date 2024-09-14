import './index.css'
import { IoIosArrowForward } from "react-icons/io";
const  WhyChoose =()=>{
    return (
        /*<div className="choose-container">
            <h1>Why Choose Gelato</h1>
            <div className='choose-section'>
                <div>
                    <img src="https://res.cloudinary.com/dndswwhrh/image/upload/v1726216330/Screenshot_86_xkqgle.png"
                    alt='choose-img' className='choose-image'/>
                </div>
            </div>

            <div>
                <ul>
                    <li className='pointer-para'>
                        <div >
                            <IoIosArrowForward />
                            <p > World's largest print-on-demand network</p>
                        </div> 
                        <p>140+ print partners in 32 countries. Gelato is a truly global service.</p>
                        </li>
                    </ul>
                </div>
        </div>*/
        <div className='choose-container'>
                <h1>Why Choose Gelato</h1>
                <div className='choose-section'>
                    <div className='choose-img'>
                        <img src="https://res.cloudinary.com/dndswwhrh/image/upload/v1726216330/Screenshot_86_xkqgle.png"
                        alt='choose-img' className='choose-image'/>
                    </div>

                    <ul>
                        <li className='pointer-para'>
                            <div className='icon-para'>
                                <IoIosArrowForward />
                                <p > World's largest print-on-demand network</p>
                            </div> 
                            <p className='pointer-paragrah'>140+ print partners in 32 countries. Gelato is a truly global service.</p>
                        </li>

                        <li className='pointer-para'>
                            <div className='icon-para'>
                                <IoIosArrowForward />
                                <p >  Endless creativity with Shutterstock Images</p>
                            </div> 
                            <p className='pointer-paragrah'>140+ print partners in 32 countries. Gelato is a truly global service.</p>
                        </li>

                        <li className='pointer-para'>
                            <div className='icon-para'>
                                <IoIosArrowForward />
                                <p>Sell globally, produce locally</p>
                            </div> 
                            <p className='pointer-paragrah'>Your products are produced close to your customers, wherever they are.</p>
                        </li>

                        <li className='pointer-para'>
                            <div className='icon-para'>
                                <IoIosArrowForward />
                                <p> 100% free editing tools</p>
                            </div> 
                            <p className='pointer-paragrah'>Create your custom products using our suite of free tools.</p>
                        </li>

                        <li className='pointer-para'>
                            <div className='icon-para'>
                                <IoIosArrowForward />
                                <p > World's largest print-on-demand network</p>
                            </div> 
                            <p className='pointer-paragrah'>140+ print partners in 32 countries. Gelato is a truly global service.</p>
                        </li>

                        <li className='pointer-para'>
                            <div className='icon-para'>
                                <IoIosArrowForward />
                                <p>60+logistics partners</p>
                            </div> 
                            <p className='pointer-paragrah'>We partner with the world's leading brands to ensure the best quality products.</p>
                        </li>

                        <li className='pointer-para'>
                            <div className='icon-para'>
                                <IoIosArrowForward />
                                <p> 1-click integration to the leading ecommerce platforms</p>
                            </div> 
                            <p className='pointer-paragrah'>Connect your store to Gelato using our integrations with Shopify, Etsy and more.</p>
                        </li>

                    </ul>

                    

                    
                </div>
        </div>
    )
}
export default WhyChoose