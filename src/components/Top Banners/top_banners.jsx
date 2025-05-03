import Left_des from  "../../assets/top banners L/Left_ball.svg" ;
import Ball_2 from  "../../assets/top banners L/F_ball.svg" ;
import Ball_1 from  "../../assets/top banners L/sec_ball.svg" ;
import Right_des from  "../../assets/top banners L/Right_ball.svg" ; 
import Arrow from "../../assets/icons/Vector (Stroke).svg" ; 
import '../Top Banners/top_banners.css'
export default function top_banners() {
  return (
    <>
    <div className="top container_l">
        <div className="top_imgs">
            <img src={Left_des}  alt="img" className="Left_des" />
            <img src={Right_des} alt="ball img" className="Right_des"/>
            <img src={Ball_1}alt="ball img"  className="Sec-ball" />
            <img src={Ball_2}alt="img"  className="F-ball"/>
        </div>
        <div className="top_text">
            <p className="top-p"> Admission is Open, Grab your seat now </p>
            <img src={Arrow} alt="icon" />
        </div>
    </div>

    </>
  )
}
