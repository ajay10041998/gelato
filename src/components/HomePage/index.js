
import Efficiency from '../Efficiency'
import WhyChoose from '../WhyChoose'
import GrowthWithDesign from '../GrowthWithDesign'
import Footer from '../Footer'
import './index.css'
import OfferSection from '../OffersSection'
const HomePage = () =>{
    return (
        <div>
        <div className="content-image-container">
            <div className="content-section">
                <h1>Customize Anything for Your Ecommerce Business</h1>
                <p>"Join for free and only pay when you succeed. Sign up now and start selling effortlessly!"</p>
                <p className='caption-para'>Transform your ideas into income with the leading  
                     <span className='print-word'>   print-on-demand </span>
                network. Start selling today</p>
                <div className='buttons-container'>
                    <button className='get-button'>Get starte for free</button>
                    <button className='products-button'>free our products</button>
                </div>
                <div className="shop-icon-heading-stars">

                <div className='image-shop-heading'>
                    <img src="https://res.cloudinary.com/dndswwhrh/image/upload/v1726207072/Screenshot_82_jxjwkc.png" 
                    alt="shopify" className='shop-image'/>
                    <h1>Storefront</h1>
                </div>

                <div className='stars-rating-section'>
                    <img src='https://res.cloudinary.com/dndswwhrh/image/upload/v1726207568/Screenshot_83_gwc2tu.png'
                    alt='stars' className='stars'/>
                    <p>4.8/5 </p>
                </div>
                <p>based on 1000 reviews</p>
                

                </div>
            </div>
            <div className="image-section">
                <img src="https://res.cloudinary.com/dndswwhrh/image/upload/v1726208783/Screenshot_84_jdleny.png"
                alt="print-img" className='img'/>
            </div>       
        </div>
        <Efficiency/>
        <WhyChoose/>
        <GrowthWithDesign/>
        <OfferSection/>
        <Footer/>
        </div>
    )
}
export default HomePage