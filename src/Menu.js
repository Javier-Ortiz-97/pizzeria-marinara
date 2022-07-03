const Menu = () => {
  return (
    <div className="menu">
      <div className="spacing text-center text-sh font-one">
        <h1>Menu</h1>
        <h3 style={{ color: "azure" }}>12" New York Style Pizzas</h3>
      </div>
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
            <h3>The Three Meats... $16 </h3>
            <p>pepperoni, meatballs, and sausage.</p>
          </div>
          <div className="pies">
            <h3>The NY Supreme... $20</h3>
            <p>
              pepperoni, sausage, mushrooms, green bell peppers, and onions.
            </p>
          </div>
          <div className="pies">
            <h3>The SMG... $16</h3>
            <p>spinach, mushrooms, and garlic.</p>
          </div>
          <div className="pies">
            <h3>Matty's Special... $16</h3>
            <p>Italian Sausage, red bell peppers, and garlic.</p>
          </div>
          <div className="pies">
            <h3>The Ultimate Veggie Pie... $24</h3>
            <p>
              Spinach, tomato, garlic, mushrooms, green bell peppers, onions,
              and black olives.
            </p>
          </div>
        </div>
        <div>
          <h2 className="spacing text-sh font-one">White Pies</h2>
          <div className="pies">
            <h3>Meatball Marinara... $16</h3>
            <p>meatball ricotta, marinara, and basil.</p>
          </div>
          <div className="pies">
            <h3>The White Spinach... $16</h3>
            <p>spinach, ricotta, and garlic.</p>
          </div>
          <div className="pies">
            <h3>The White Mushroom... $16</h3>
            <p>mushrooms, ricotta, and garlic.</p>
          </div>
          <div className="pies">
            <h3>White Stone Classic... $16</h3>
            <p>mozzarella, parmesan, ricotta, garlic, and basil.</p>
          </div>
          <div className="pies">
            <h3>The Tony Soprano... $16</h3>
            <p>
              mozzarella, ricotta, romano, garlic, Mike's hot honey, and hot
              gabagool seasoned with Italian parsley.
            </p>
          </div>
          <div className="pies">
            <h3>The Margherita... $16</h3>
            <p>Tomato, basil, and garlic</p>
          </div>
        </div>
      </div>
      <div className="menu-create spacing">
        <h3 className="font-one  red-font-color">
          Create Your Own Pie... $10 plus $2.00 per topping
        </h3>
        <p>
          Toppings: pepperoni, sausage, meatball, gabagool, red peppers, green peppers,
          onions, garlic, spinach, tomato, jalapenos, mushrooms, black olives, basil,
          Italian parsley, extra cheese, hot honey.{" "}
        </p>
      </div>
      <hr style={{ width: "100%", color: "azure" }}></hr>
      <div className="delivery">
        <h2 className="text-sh font-one">We Deliver To All San Diego</h2>{" "}
        <p> Call or text Matt at (858) 414-0334 to place an order</p>{" "}
        <p>
          {" "}
          A minimum order of $30 is required for all deliveries plus a $3 dollar
          delivery fee
        </p>
      </div>
    </div>
  );
};

export default Menu;
