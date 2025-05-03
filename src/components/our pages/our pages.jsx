import "../our pages/our pages.css";
import doted from '../../assets/doted line.svg' ; 

const pages = [
  {
    title: "About Us",
    text: "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
  },
  {
    title: "Academics",
    text: "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
  },
  {
    title: "Student Life",
    text: "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
  },
  {
    title: "Admissions",
    text: "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
  },
];

export default function PagesSection() {
  return (
    <section className="pages-section">
        <div className="happy">
        Explore More
        </div>
      <h2>Navigate through our Pages</h2>
      <p className="subtitle">
        Your gateway to discovering a wealth of valuable information about our kindergarten school. 
        Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school.
      </p>

      <div className="cards-container">
        {pages.map((page, index) => (
          <div key={index} className="page-card">
            <h3>{page.title}</h3>
            <div className="line-divider">
                <img src={doted}alt="line" />
            </div>
            <p>{page.text}</p>
            <button className="learn-more">Learn More →</button>
          </div>
        ))}
      </div>
    </section>
  );
}
