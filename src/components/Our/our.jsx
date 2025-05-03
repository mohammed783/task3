
import '../Our/our.css' ; 
// import testo1 from '../../assets/icons/testo 1.svg' ; 
// import testo2 from "../../assets/icons/testo2.svg" ; 
// import testo3 from "../../assets/icons/testo3.svg" ; 
// import testo4 from "../../assets/icons/testo4.svg" ; 
// import testo5 from "../../assets/icons/testo5.svg" ; 
// import testo6 from '../../assets/icons/testo6.svg'

const benefits = [
  {
    title: "Holistic Learning Approach",
    description: "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
    icon:"**" , 
  },
  {
    title: "Experienced Educators",
    description: "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
    icon: "**" , 
  },
  {
    title: "Nurturing Environment",
    description: "We prioritize safety and provide a warm and caring atmosphere for every child.",
    icon: "**" , 
  },
  {
    title: "Play-Based Learning",
    description:"We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
    icon: "**" ,  
  },
  {
    title: "Individualized Attention",
    description: "Our small class sizes enable personalized attention, catering to each child's unique needs.",
    icon: "**" ,  
  },
  {
    title: "Parent Involvement",
    description: "We foster a strong parent-school partnership to ensure seamless communication and collaboration.",
    icon: "**", 
  }
];

export default function BenefitsSection() {
  return (
    <div className="benefits-wrapper">
      <div className="benefits-header">
        <h2>Our Benefits</h2>
        <p>With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your childs future.</p>
      </div>
      <div className="benefits-grid">
        {benefits.map((item, index) => (
          <div key={index} className="benefit-card">
            <div className="benefit-icon">{item.icon}</div>
            <h3 className="benefit-title">{item.title}</h3>
            <p className="benefit-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
