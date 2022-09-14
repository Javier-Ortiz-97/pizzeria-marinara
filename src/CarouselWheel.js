import pm from "./images/pm.jpg";
import pizza1 from "./images/pizza1.jpg";
import pizza2 from "./images/pizza2.jpg";
import pizza3 from "./images/pizza3.jpg";
import pizza4 from "./images/pizza4.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselWheel = () => {
  return (
    <Carousel autoPlay infiniteLoop swipeable>
      <div className="pm-image1">
        <img key={pm} src={pm} alt={""} />
      </div>
      <div className="pm-image">
        <img key={pizza1} src={pizza1} alt={""} />
      </div>
      <div className="pm-image">
        <img key={pizza2} src={pizza2} alt={""} />
      </div>
      <div className="pm-image">
        <img key={pizza3} src={pizza3} alt={""} />
      </div>
      <div className="pm-image">
        <img key={pizza4} src={pizza4} alt={""} />
      </div>
    </Carousel>
  );
};

export default CarouselWheel;