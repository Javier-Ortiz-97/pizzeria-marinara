import React from "react";
import "./App.css";

function App() {
  return (
    <div className="body">
      <div className="header">
        <h1>Pizzeria Marinara</h1>
      </div>
      <div className="menu">
        <h1 className="spacing text-center text-sh font-one">Menu</h1>
        <hr style={{ width: "100%", color: "azure" }}></hr>
        <div className="menu-pies">
          <div>
            <h2 className="spacing text-sh font-one">Red Pies</h2>
            <div className="pies">
              <h3>The Regular Pie... $10</h3>
              <p>
                {" "}
                just the classic sauce, cheese, and dough cooked to perfection.
              </p>
            </div>
            <div className="pies">
              <h3>The Three Meats... $14.50 </h3>
              <p>pepperoni, meatball, sausage</p>
            </div>
            <div className="pies">
              <h3>The NY Supreme... $17.50</h3>
              <p>
                pepperoni, sausage, mushrooms, green bell peppers, and onions.
              </p>
            </div>
            <div className="pies">
              <h3>The SMG... $14.50</h3>
              <p>spinach, mushrooms, and garlic.</p>
            </div>
            <div className="pies">
              <h3>Matty's Special... $14.50</h3>
              <p>Italian Sausage, red bell peppers, and garlic.</p>
            </div>
          </div>
          <div>
            <h2 className="spacing text-sh font-one">White Pies</h2>
            <div className="pies">
              <h3>Meatball Marinara... $14.50</h3>
              <p>meatball ricotta, marinara, and basil.</p>
            </div>
            <div className="pies">
              <h3>The White Spinach... $14.50</h3>
              <p>spinach, ricotta, and garlic.</p>
            </div>
            <div className="pies">
              <h3>The White Mushroom... $14.50</h3>
              <p>mushrooms, ricotta, and garlic.</p>
            </div>
            <div className="pies">
              <h3>White Stone Classic... $14.50</h3>
              <p>mozzarella, parmesan, ricotta, garlic, and basil.</p>
            </div>
            <div className="pies">
              <h3>The Tony Soprano... $14.50</h3>
              <p>
                mozzarella, ricotta, romano, garlic, and hot gabagool seasoned
                with Italian parsley.
              </p>
            </div>
          </div>
        </div>
        <div className="menu-create spacing">
          <h3 className="font-one">
            Create Your Own Pie... $10 plus $1.50 per topping
          </h3>
          <p>
            Toppings: pepperoni, sausage, meatball, bacon, grape tomatoes,
            onions, mushrooms, green bell peppers, red bell peppers, spinach,
            black olives, jalapeños, garlic, ricotta, pesto, basil, gabagool,
            eggplant, and extra cheese.{" "}
          </p>
        </div>
        <hr style={{ width: "100%", color: "azure" }}></hr>
        <div className="delivery">
          <h2 className="text-sh font-one">We Deliver To All San Diego</h2>{" "}
          <p> Call or text Matt at (858) 414-0334 to place an order</p>{" "}
          <p> A minimum order of $30 is required for all deliveries</p>
        </div>
      </div>
      <footer className="font-two">
        {" "}
        &copy; 2022 Pizzeria Marinara All Rights Reserved, Website by Javier
      </footer>
    </div>
  );
}

export default App;
