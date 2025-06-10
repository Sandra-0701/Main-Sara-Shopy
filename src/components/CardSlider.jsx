import { useState, useEffect, useCallback, useRef } from "react";

const CardSlider = () => {
  const cards = [
    { id: 1, title: "Card 1", image: "/img/slider/slider1.jpeg" },
    { id: 2, title: "Card 2", image: "/img/slider/slider2.jpeg" },
    { id: 3, title: "Card 3", image: "/img/slider/slider3.jpeg" },
    { id: 4, title: "Card 4", image: "/img/slider/slider1.jpeg" },
    { id: 5, title: "Card 5", image: "/img/slider/slider2.jpeg" },
    { id: 6, title: "Card 6", image: "/img/slider/slider3.jpeg" },
  ];

  const [autoScroll, setAutoScroll] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const scrollToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  }, [cards.length]);

  useEffect(() => {
    if (!autoScroll) return;
    const interval = setInterval(scrollToNext, 3000);
    return () => clearInterval(interval);
  }, [autoScroll, scrollToNext]);

  useEffect(() => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.firstChild?.offsetWidth || 0;
      containerRef.current.scrollTo({
        left: currentIndex * (cardWidth + 16),
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div 
      className="w-full py-8 relative"
      onMouseEnter={() => setAutoScroll(false)}
      onMouseLeave={() => setAutoScroll(true)}
    >
      <div
        ref={containerRef}
        className="flex gap-4 px-4 overflow-x-scroll scrollbar-hide snap-x scroll-smooth"
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex-shrink-0 relative rounded-xl overflow-hidden shadow-lg"
            style={{ width: "350px", height: "200px" }}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover"
              loading={card.id <= 2 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4 gap-2">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === index ? "bg-blue-500 w-6" : "bg-gray-300"
            }`}
            aria-label={`Go to card ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSlider;