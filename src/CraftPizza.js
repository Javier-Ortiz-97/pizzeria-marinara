import img1 from "./images/image3.jpg";
import img2 from "./images/image5.jpg";
import img3 from "./images/image2.jpg";
import img4 from "./images/image4.jpg";
import img5 from "./images/image7.jpg";
import img6 from "./images/image6.jpg";
import img7 from "./images/image1.jpg";

const CraftPizza = () => {
  return (
    <div className="text-center font-one">
    <div className="spacing">
      <h1 className="text-sh">Scicilian Craft Pizza</h1>
      <h2 className="font-two">Sold by the slice</h2>
      </div>
      <div className="craft-pizza center-items spacing">
        <div className="craft-slices">
          <img src={img1} alt="" />
          <h3>The Regular Slice</h3>
          <h3>$4.00</h3>
        </div>
        <div className="craft-slices">
          <img src={img2} alt="" />
          <h3>The Pepperoni Slice</h3>
          <h3>$5.00</h3>
        </div>
        <div className="craft-slices">
          <img src={img3} alt="" />
          <h3>The Steak Sicilian Slice</h3>
          <h3>$7.00</h3>
        </div>
        <div className="craft-slices">
          <img src={img4} alt="" />
          <h3>The Bacon Slice</h3>
          <h3>$6.00</h3>
        </div>
        <div className="craft-slices">
          <img src={img5} alt="" />
          <h3>The Matty's Special Slice</h3>
          <h3>$6.00</h3>
        </div>
        <div className="craft-slices">
          <img src={img6} alt="" />
          <h3>The Eggplant Slice</h3>
          <h3>$6.00</h3>
        </div>
        <div className="craft-slices">
          <img src={img7} alt="" />
          <h3>The Bruschetta Sicilian</h3>
          <h3>$6.00</h3>
        </div>
      </div>
    </div>
  );
};

export default CraftPizza;
