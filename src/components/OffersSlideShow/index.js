import { useState,useEffect } from 'react';
import './index.css';

const OffersSlideShow = (props) => {
  const { offers ,interval=3000} = props;

  const [currentIndex, setCurrentIndex] = useState(0);

  const startAutoScroll = () => {
    return setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === offers.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);
  };

  useEffect(() => {
    const autoScroll = startAutoScroll();

    // Clean up the interval when component unmounts
    return () => clearInterval(autoScroll);
  }, [offers, interval]);

  // Function to generate a random color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className='offers-container'>
      {offers.map((eachOffer, index) => {
        // Generate a random color for each container
        const backgroundColor = getRandomColor();
        return (
          <div
            key={index}
            className='offers-section'
            style={{ backgroundColor }}
          >
            <div className="icon-content font-weight-medium">
              <p>{eachOffer.description}</p>
              {eachOffer.icon}
            </div>
            <p className="font-weight-medium">{eachOffer.title}</p>
            <p>{eachOffer.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default OffersSlideShow;
