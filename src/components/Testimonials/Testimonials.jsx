import  { useState } from "react";
import "../Testimonials/Testimonials.css";
import pro1 from "../../assets/Profile Container.png" ; 
import pro2 from "../../assets/Profile Container (1).png" ; 
import pro3 from "../../assets/Profile Container (2).png" ; 

const testimonials = [
  {
    id: 1,
    name: "Jennifer B",
    text: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
    img: {pro1},
  },
  {
    id: 2,
    name: "David K",
    text: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
    img:{pro2} , 
  },
  {
    id: 3,
    name: "Emily L",
    text: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
    img: {pro3},
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="testimonials-section">
        <div className="happy">
        Their Happy Words 🤗
        </div>
      <h2>Our Testimonials</h2>
      <p className="subtitle">
        Our testimonials are heartfelt reflections of the nurturing environment we provide,
        where children flourish both academically and emotionally.
      </p>

      <div className="slider-container">
        <button onClick={prevSlide} className="arrow">
          &#8592;
        </button>

        <div className="slider">
          {testimonials.map((item, i) => (
            <div
              key={item.id}
              className={`card ${i === index ? "active" : "inactive"}`}
            >
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <button onClick={nextSlide} className="arrow">
          &#8594;
        </button>
      </div>
    </div>
  );
}
