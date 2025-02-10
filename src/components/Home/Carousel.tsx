import { useState, useEffect } from "react";

interface CarouselImage {
  id: number;
  src: string;
  title: string;
  type: string;
  images:object;
}

const TRANSITION_DURATION = 500;
const AUTO_ADVANCE_INTERVAL = 3000;

const Carousel = () => {
  const [images, setImages] = useState<CarouselImage[]>([
    {
      id: 1,
      src: "https://bzr-furniro.s3.us-east-2.amazonaws.com/Carrousel/car01.png",
      title: "Inner Peace",
      type: "Bed Room",
      images:[],
    },
    {
      id: 2,
      src: "https://bzr-furniro.s3.us-east-2.amazonaws.com/Carrousel/car02.png",
      title: "Harmony",
      type: "Living Room",
      images:[],
    },
    {
      id: 3,
      src: "https://bzr-furniro.s3.us-east-2.amazonaws.com/Carrousel/car03.png",
      title: "Elegance",
      type: "Dining Room",
      images:[],
    },
    {
      id: 4,
      src: "https://bzr-furniro.s3.us-east-2.amazonaws.com/Carrousel/car04.png",
      title: "Focus",
      type: "Office",
      images:[],
    },
  ]);

  const [isTransitioning, setIsTransitioning] = useState(false);
  const activeImageId = images[0]?.id || 1;

  const handleSlideChange = (newImages: CarouselImage[]) => {
    setIsTransitioning(true);
    setImages(newImages);
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    handleSlideChange([...images.slice(1), images[0]]);
  };

  const handleDotClick = (targetId: number) => {
    if (isTransitioning || targetId === activeImageId) return;

    const targetIndex = images.findIndex((img) => img.id === targetId);
    if (targetIndex === -1) return;

    handleSlideChange([
      ...images.slice(targetIndex),
      ...images.slice(0, targetIndex),
    ]);
  };

  // Efeito para avanço automático
  useEffect(() => {
    const timer = setInterval(nextSlide, AUTO_ADVANCE_INTERVAL);
    return () => clearInterval(timer);
  }, [images]);

  // Reset transitioning state
  useEffect(() => {
    const timer = setTimeout(
      () => setIsTransitioning(false),
      TRANSITION_DURATION
    );
    return () => clearTimeout(timer);
  }, [images]);

  return (
    <section className="relative w-full h-[670px] bg-[#FCF8F3] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 h-full relative">
        {/* Content Section */}
        <div className="absolute left-[6.94%] top-[33.28%] space-y-6 z-10">
          <h2 className="text-[40px] font-bold text-[#3A3A3A] leading-[120%] max-w-[422px]">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="text-base text-[#616161] max-w-[368px]">
            Our designer already made a lot of beautiful prototype of rooms that
            inspire you
          </p>
          <button
            className="w-[176px] h-[48px] bg-[#B88E2F] text-white font-semibold hover:bg-[#A57D2B] transition-colors"
            aria-label="Explore more"
          >
            Explore More
          </button>
        </div>

        {/* Carousel Container */}
        <div className="absolute left-[37.5%] w-[74.75%] h-full overflow-hidden">
          <div
            className={`flex gap-5 ${isTransitioning ? "transition-all" : ""}`}
            style={{ transitionDuration: `${TRANSITION_DURATION}ms` }}
          >
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`relative ${
                  index === 0 ? "w-[25%]" : "w-[20%]"
                } flex-shrink-0`}
                aria-hidden={index !== 0}
              >
                <img
                  src={image.src}
                  alt={`Interior design - ${image.title}`}
                  className={`object-cover w-full ${
                    index === 0 ? "h-[582px]" : "h-[486px]"
                  } transition-all duration-300`}
                />

                {index === 0 && (
                  <div className="absolute bottom-4 left-6 bg-white/70 backdrop-blur-sm p-4 w-[217px]">
                    <div className="flex items-center gap-2 text-[#616161]">
                      <span className="text-base">0{image.id}</span>
                      <div className="w-[27px] h-[1px] bg-[#616161]" />
                      <span className="text-base">{image.type}</span>
                    </div>
                    <h3 className="text-[28px] font-semibold text-[#3A3A3A] mt-2">
                      {image.title}
                    </h3>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <button
            onClick={nextSlide}
            className="absolute left-[15%] bottom-4 w-12 h-12 bg-[#B88E2F] flex items-center justify-center hover:bg-[#A57D2B] transition-colors"
            aria-label="Next slide"
            disabled={isTransitioning}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Pagination Dots */}
          <div className="absolute bottom-[40px] left-[30%] flex gap-5">
            {images.map((image) => (
              <button
                key={image.id}
                onClick={() => handleDotClick(image.id)}
                className="group"
                aria-label={`Go to slide ${image.id}`}
              >
                <div
                  className={`w-[27px] h-[27px] border rounded-full relative ${
                    activeImageId === image.id
                      ? "border-[#B88E2F] opacity-70"
                      : "border-transparent"
                  }`}
                >
                  <div
                    className={`absolute inset-0 m-auto w-[11px] h-[11px] rounded-full ${
                      activeImageId === image.id
                        ? "bg-[#B88E2F]"
                        : "bg-[#D8D8D8]"
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
