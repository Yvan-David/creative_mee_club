import hero from "../assets/hero.jpeg"
import {  useEffect, useState } from "react";

//const URL= "https://creative-mee-club.vercel.app/"
export default function Introduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Background images
  const heroImages = [hero, hero];

  // Auto-slide effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev) % heroImages.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [heroImages.length]);

  const title = "Creative MEE Club";

  return (
    <section className="relative overflow-hidden h-[450px] md:h-[700px]">
      {/* Sliding Background Images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === currentSlide
                ? "transform translate-x-0"
                : index < currentSlide
                ? "transform -translate-x-full"
                : "transform translate-x-full"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center -mt-10">
        {/* Title with letter animation */}
        <div className="h-[25%]">
                  <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 leading-tight flex justify-center flex-wrap">
          {title.split("").map((letter, index) => (
            <span
              key={index}
              className="inline-block opacity-0 translate-y-4 animate-fadeSlideUpLetter"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards",
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h1>
                <h2 className="text-white text-xl md:text-2xl font-medium mb-6 max-w-xl mx-auto leading-snug opacity-0 animate-fadeSlideUp [animation-delay:1200ms]">
          Empowering students through hands-on projects
        </h2>

        </div>


        {/* <h2 className="text-white text-xl md:text-2xl font-medium mb-6 max-w-xl mx-auto leading-snug opacity-0 animate-fadeSlideUp [animation-delay:1200ms]">
          Empowering students through hands-on projects
        </h2> */}

        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded text-sm font-medium transition-colors">
         
          <a href="/projects"> Explore projects</a>
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 right-4 z-10 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() =>
          setCurrentSlide(
            (prev) => (prev - 1 + heroImages.length) % heroImages.length
          )
        }
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
      >
        ←
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % heroImages.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
      >
        →
      </button>
    </section>
  );
}

