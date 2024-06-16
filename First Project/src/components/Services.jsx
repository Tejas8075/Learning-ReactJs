import {Carousel} from "react-responsive-carousel"
import img1 from "../assests/3.jpg"
import img2 from "../assests/4.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Services = ()=>{
    return(
        <div>
            <Carousel
            infiniteLoop
            autoPlay
            showStatus={false}
            showArrows={false}
            interval={1000}
            showThumbs={false}
            showIndicators={false}>
                <div>
                    <img src={img1} alt="Item1" />
                    <p className="legend">Full Stack</p>
                </div>
                <div>
                    <img src={img2} alt="Item2" />
                    <p className="legend">Peer-to-Peer support</p>
                </div>
            </Carousel>
        </div>
    )
}

export default Services