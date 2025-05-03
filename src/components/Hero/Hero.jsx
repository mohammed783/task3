import '../Hero/Hero.css'
import main_img from "../../assets/hero image.png"

export default function Hero() {
  return (
    <>
     <div className="hero container_b">
        <div className="l-hero">
        <img src={main_img} alt="img" />
            
        </div>

        <div className="r-hero">
        <p className='p1'>Welcome to Little Learners Academy </p>
        <h2>
        Where Young Minds Blossom and 
            <span className='orang'>
            &nbsp;Dreams Take Flight. 
            </span>
        </h2>
        <p className='p2'>Our kinder garden school provides a nurturing and stimulating environment,
             fostering a love for learning that lasts a lifetime.
              Join us as we embark on an exciting educational journey together!</p>
              <div className="hero-box">
                <div className="bo">
                    <div className="num">
                    +7000
                    </div>
                    <p>Students Passed Out</p>
                </div>
                <div className="bo">
                    <div className="num">
                    +37
                    </div>
                    <p>Awards & Recognitions</p>
                </div>
                <div className="bo">
                    <div className="num">
                    +15
                    </div>
                    <p>Experience Educators</p>
                </div>
              </div>
        </div>    
    </div> 
    </>
  )
}
