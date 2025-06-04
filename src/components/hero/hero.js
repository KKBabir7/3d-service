'use client';
import { Play, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const slides = [
   {
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "3D Design",
      subtitle: "Reimagined",
      description: "Bringing imagination to life through cutting-edge 3D modeling, animation, and interactive experiences",
      buttonText: "View Portfolio"
    },
    {
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Creative",
      subtitle: "Solutions",
      description: "From concept to reality, crafting stunning 3D visualizations and immersive digital experiences",
      buttonText: "See Projects"
    },
    {
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Digital",
      subtitle: "Innovation",
      description: "Pushing boundaries in 3D art, motion graphics, and interactive design for modern brands",
      buttonText: "Explore Work"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAnimationKey(prev => prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAnimationKey(prev => prev + 1);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setAnimationKey(prev => prev + 1);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="videoElement" className="relative h-screen flex items-center overflow-hidden">
      {/* Static Blur Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm scale-110"
        style={{ backgroundImage: `url('${slides[0].image}')` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 w-full h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full items-center">
          
          {/* Text Side */}
          <div className="text-white space-y-8 px-4 lg:px-8">
            <div key={`text-${animationKey}`} className="space-y-4 animate-[slide-down_0.8s_ease-out]">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                {slides[currentSlide].title}
                <span className="block text-orange-500">
                  {slides[currentSlide].subtitle}
                </span>
              </h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-lg">
                {slides[currentSlide].description}
              </p>
            </div>

            <div key={`buttons-${animationKey}`} className="flex flex-col sm:flex-row gap-4 animate-[slide-up_0.8s_ease-out_0.3s_both]">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                {slides[currentSlide].buttonText}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Video
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                className="border-white text-white hover:bg-white hover:text-black"
                onClick={prevSlide}
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
              
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-orange-500' : 'bg-white/50'}`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                className="border-white text-white hover:bg-white hover:text-black"
                onClick={nextSlide}
              >
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative h-full w-full overflow-hidden rightsliderieor">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={`w-full h-full object-cover transition-transform duration-[4000ms] ${
                    index === currentSlide ? 'animate-[scale-pulse_4s_ease-in-out_infinite]' : ''
                  }`}
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/20"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
