import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from '../../../assets/img1.jpg'
import img2 from '../../../assets/img2.jpg'
import img3 from '../../../assets/img3.jpg'
import img4 from '../../../assets/img4.jpg'




const Banner = () => {
    return (
        <div >
            <Carousel showArrows={true} autoPlay={true} autoFocus={true} >
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3}/>
                </div>
                <div>
                    <img src={img4}/>
                </div>
               
            </Carousel>
        </div>
    );
};

export default Banner;