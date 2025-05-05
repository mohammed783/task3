import './Welcome.css'
import welimg from "../../assets/wlecome.svg"


export default function Welcome() {
  return (
    <>
      <div className='welcome container_l'>
        <img src={welimg} alt="img" />
        <div className="l-wel">
            <div className="wel-box">
            Overview
            </div>
            <h2>Welcome to Little Learners Academy</h2>
        </div>
       
        <p>A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners.
             With a commitment to excellence in early education,
              we believe in shaping curious minds and building a strong foundation for a lifelong love of learning.
               Our holistic approach fosters intellectual, social, emotional, and physical development,
             ensuring that each child reaches their full potential.</p>
      </div>
    </>
  )
}
