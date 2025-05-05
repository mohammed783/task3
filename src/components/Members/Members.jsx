import './Members.css'

const team = [
  {
    name: "Ms. Sarah Anderson",
    qualification: "Bachelor's Degree in Early Childhood Education",
    description:
      "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.",
    img: "https://via.placeholder.com/80x80?text=👩‍🏫",
  },
  {
    name: "Mr. David Roberts",
    qualification: "Master's Degree in Elementary Education",
    description:
      "With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically.",
    img: "https://via.placeholder.com/80x80?text=👨‍🏫",
  },
  {
    name: "Ms. Emily Hernandez",
    qualification: "Diploma in Child Psychology",
    description:
      "Ms. Emily’s expertise in child psychology enables her to understand each child’s unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students.",
    img: "https://via.placeholder.com/80x80?text=👩‍⚕️",
  },
  {
    name: "Mr. Michael Turner",
    qualification: "Bachelor's Degree in Physical Education",
    description:
      "Mr. Michael’s passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle.",
    img: "https://via.placeholder.com/80x80?text=🏃‍♂️",
  },
  {
    name: "Ms. Jessica Lee",
    qualification: "Master's Degree in Special Education",
    description:
      "Ms. Jessica’s specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential.",
    img: "https://via.placeholder.com/80x80?text=👩‍🎓",
  },
  {
    name: "Mr. William Parker",
    qualification: "Bachelor's Degree in Fine Arts",
    description:
      "Mr. William’s background in fine arts brings creativity and imagination to his classroom. Through art projects and activities, he nurtures the artistic expression and self-confidence of his students.",
    img: "https://via.placeholder.com/80x80?text=🎨",
  },
];

function TeamMembers() {
  return (
    <div className="team-section">
      <h2 className="team-title">Our Team Members</h2>
      <p className="team-subtitle">
        At Little Learners Academy, our teaching team is the heart of our
        educational journey. We take great pride in employing highly qualified
        and passionate educators who possess a deep understanding of early
        childhood development.
      </p>

      <div className="team-grid">
        {team.map((member, idx) => (
          <div className="team-card" key={idx}>
            <div className="team-header">
              <img src={member.img} alt={member.name} className="team-photo" />
              <div className="team-name">{member.name}</div>
              <span className="email-icon">✉️</span>
            </div>
            <div className="team-qual">
              <strong>Qualification: </strong>
              {member.qualification}
            </div>
            <p className="team-desc">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamMembers;
