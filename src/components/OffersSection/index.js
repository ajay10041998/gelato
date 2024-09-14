import OffersSlideShow from '../OffersSlideShow'
import { CiGlobe } from "react-icons/ci";
import { GoGraph } from "react-icons/go";
import { CiDollar } from "react-icons/ci";
import './index.css'
const OfferSection = () =>{
    const offers=[
        { 
            title: "up to 7% points",
            description: "workFolw",
            icon: <GoGraph />,
            content : "increase in cash flow"
          },
          { 
            title: "5% - 10%",
            description: "procurement",
            icon: <CiGlobe />,
            content : "in raw material cost"
          },
          { 
            title: "10% - 25%",
            description: "logistics",
            icon:<CiDollar />,
            content: 'lower shipping cost'
          },
          { 
            title: "5% - 25%",
            description: "logistics",
            icon:<CiDollar />,
            content: 'lower shipping cost'
          },
    ]
    return (
        <div className="offers-container">
            <div className="offers-slide-section">
                <OffersSlideShow offers={offers}/>
            </div>
            <div className="offers-content-section">
                <p>For print producers</p>
                <h1>GelatoConnect</h1>
                <p>Elevate efficiency, cut costs, and seamlessly automate with our all-in-one software solution for the print industry</p>
                <button className='learnbtn'>Learn More</button>
            </div>
        </div>
    )
}
export default OfferSection