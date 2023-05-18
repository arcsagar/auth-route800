import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../Card/Card";

const Carousel: React.FC<{
  images: any;
  interval?: number;
  visibleItems?: number;
}> = ({ images, interval = 3000, visibleItems = 3 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // // console.log('images',images)
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const timeoutId = setTimeout(nextImage, interval);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentIndex]);

  return (
    <div className="relative">
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <button
          onClick={prevImage}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-l"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      </div>
      <div className="flex justify-center">
        <div className="flex">
          {images
            .slice(currentIndex, currentIndex + visibleItems)
            .map((image: any, index: number) => {
              return (
                <Card
                  title={image.alt}
                  author={image.author}
                  description={image.description}
                  imageSrc={image.img}
                  key={index}
                  keyValue={index}
                />
              );
            })}
        </div>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <button
          onClick={nextImage}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-r"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div className="text-center mt-2">
        <p className="text-gray-600">{images[currentIndex].description}</p>
      </div>
    </div>
  );
};

export default Carousel;
