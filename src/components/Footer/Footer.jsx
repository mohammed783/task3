import '../Footer/footer.css' ; 
import logo2 from "../../assets/icons/shape-14.svg" 
import mail from "../../assets/icons/Icon.svg"
import phone from "../../assets/icons/Icon (1).svg"
import loc from "../../assets/icons/Icon (2).svg"


import face from "../../assets/icons/Button.svg"
import twit from "../../assets/icons/Button (1).svg"
import linkd from "../../assets/icons/Button (2).svg"


export default function Footer() {
  return (
    <>
      <footer className='container_l'>
        <div className="top-footer">
            <div className="col-1">
                <h4>
                    <img src={logo2} alt="logo" />
                    <p>Littel learners</p>
                </h4>
                <p className='top-p'>
                We believe in the power of play to foster creativity,
                 problem-solving skills, and imagination.
                </p>
                <div className="info">
                    <p>
                        <img src={mail} alt="icon" />
                        hello@littlelearners.com
                    </p>

                    <p>
                    <img src={phone} alt="icon" />
                    +91 91813 23 2309
                    </p>
                    <p>
                    <img src={loc} alt="icon" />
                    Somewhere in the World
                    </p>
                </div>
            </div>
            <div className="col2">
                <h5>Home</h5>
                <ul>
                    <li>Features</li>
                    <li>Our Testimonials</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div className="col3">
                <h5>About Us</h5>
                <ul>
                    <li>Our Mission</li>
                    <li>Our Vission</li>
                    <li>Awards and Recognitions</li>
                    <li>History</li>
                    <li>Teachers</li>
                </ul>
            </div>
            <div className="col4">
                <h5>Academics</h5>
                <ul>
                    <li>Special Features</li>
                    <li>Gallery</li>
                </ul>
            </div>
            <div className="col5">
                <h5>Contact Us</h5>
                <ul>
                    <li>Information</li>
                    <li>Map & Direction</li>
                </ul>
            </div>
           

        </div>
        <div className="bottom-footer">
            <p>
            Terms of Service |  Privacy Policy  | Cookie Policy
            </p>
            <div className="logos">
                <img src="" alt="" />
                <img src={face} alt="butoon" />
                <img src={twit} alt="butoon" />
                <img src={linkd} alt="butoon" />
            </div>
        </div>
        <div className="last-p">
        Copyright © [2023] Little Learners Academy. All rights reserved.
        </div>
      </footer>
    </>
  )
}
