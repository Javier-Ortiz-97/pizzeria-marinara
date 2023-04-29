import menuOne from "./images/1.jpg";
import menuTwo from "./images/2.jpg";
import matty from "./images/matty.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsFillTelephoneFill, BsInstagram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import CarouselWheel from "./CarouselWheel";

const HomePage = () => {
  return (
    <div className="welcome-page ">
      {/* Carousel Images */}
      <CarouselWheel />

      {/* Intro message */}
      <div className="intro-msg font-four text-sh">
        <h2>
          HERE AT PIZZERIA MARINARA SD WE PROVIDE CATERING SERVICES FOR ALL
          TYPES OF EVENTS. WE SPECIALIZE IN NY STYLE PIES AND WE STRIVE TO BRING
          YOU THE BEST PIES BY USING THE BEST INGREDIENTS.
        </h2>
      </div>
      <div className="matt-info font-three text-sh2">
        <h1 className="text-center">MEET MATT</h1>
        <hr></hr>
        <img key={matty} src={matty} alt="" />

        <h2 className="text-center text-sh2">
          Matt founded Pizzeria Marinara SD and is the genius behind our delicious
          pies. He's a professional pizza chef with over 20 years of experience
          making delicious pies.
        </h2>
      </div>

      {/* Menu Section */}
      <div className="menu-info font-three text-sh2">
        <h1>Our Menu</h1>
        <hr></hr>
        <img key={menuOne} src={menuOne} alt="" />
        <img key={menuTwo} src={menuTwo} alt="" />

      </div>

      <div className="matt-info font-three text-sh2">
        <div className="contact-us">
          <h1>CONTACT US</h1>
          <hr></hr>
          <ul>
            <li>
              <a href="tel:+18584140334">
                <p>
                  <BsFillTelephoneFill className="icons" />
                  +1 (858) 414-0334
                </p>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/pizzeria_marinara_sd/"
                target="blank"
              >
                <p>
                  <BsInstagram className="icons" />
                  @Pizzeria_Marinara_SD
                </p>
              </a>
            </li>
            <li>
              <a
                href="mailto:shleps@live.com"
                target="blank"
              >
                <p>
                  <MdEmail className="icons"/>
                  shleps@live.com
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
