import React, { useState, useEffect } from "react";
import "./Hero.css";
import imgcar1 from '../images/car1.jpg'
import imgcar2 from '../images/car2.jpg'
import imgcar3 from '../images/car3.jpg'
import imgcar4 from '../images/car4.jpg'


const slides = [
  {
    title: "SAINT ANTONIEN",
    description: "Discover the beauty of Saint Antonien",
    image: imgcar1,
    cards: [
      { title: "MIDLAND ADVENTURES", image: imgcar1 },
      { title: "NAMADGI NATIONAL PARK", image: imgcar2 },
      { title: "YOSEMITE NATIONAL PARK", image: imgcar3 },
      { title: "SURF COAST WALK", image: imgcar4 },
    ],
  },
  // Add more slides as needed
  {
    title: "OTRO DESTINO",
    description: "Explora nuevos horizontes",
    image: imgcar2,
    cards: [
      { title: "MIDLAND ADVENTURES", image: imgcar1 },
      { title: "NAMADGI NATIONAL PARK", image: imgcar2 },
      { title: "YOSEMITE NATIONAL PARK", image: imgcar3 },
      { title: "SURF COAST WALK", image: imgcar4 },
    ],
  },
  {
    title: "Otro destino dos",
    description: "Explora nuevos horizontes 2",
    image: imgcar3,
    cards: [
      { title: "MIDLAND ADVENTURES", image: imgcar1 },
      { title: "NAMADGI NATIONAL PARK", image: imgcar2 },
      { title: "YOSEMITE NATIONAL PARK", image: imgcar3 },
      { title: "SURF COAST WALK", image: imgcar4 },
    ],

  },
  {
    title: "Otro destino tres",
    description: "Explora nuevos horizontes 3",
    image: imgcar4,
    cards: [
      { title: "MIDLAND ADVENTURES", image: imgcar1 },
      { title: "NAMADGI NATIONAL PARK", image: imgcar2 },
      { title: "YOSEMITE NATIONAL PARK", image: imgcar3 },
      { title: "SURF COAST WALK", image: imgcar4 },
    ],

  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero">
      <div
        className="hero-image"
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        <div className="hero-content">
          <h1>{slide.title}</h1>
          <p>{slide.description}</p>
        </div>
        <div className="hero-cards">
          {slide.cards.map((card, index) => (
            <div key={index} className="hero-card">
              <img src={card.image} alt={card.title} />
              <h3>{card.title}</h3>
            </div>
          ))}
        </div>
        <button className="nav-button prev" onClick={prevSlide}>&#10094;</button>
        <button className="nav-button next" onClick={nextSlide}>&#10095;</button>
      </div>
    </section>
  );
}