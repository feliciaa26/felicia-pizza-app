import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
    return (
        <div>
          <Header/>
          <Menu/>
          <Footer/>
        </div>
    );
}

function Header() {
    return <h1 style={{marginBottom: "20px"}}>Felicia's Pizza Co.</h1>
}

const pizzas = [
  { name: 'Focaccia', ingredients: 'Bread with Italian olive oil and rosemary', price: 6, image: 'pizzas/focaccia.jpg' },
  { name: 'Pizza Margherita', ingredients: 'Tomato and mozzarella', price: 10, image: 'pizzas/margherita.jpg' },
  { name: 'Pizza Spinaci', ingredients: 'Tomato, mozzarella, spinach, and ricotta cheese', price: 12, image: 'pizzas/spinaci.jpg' },
  { name: 'Pizza Funghi', ingredients: 'Tomato, mozzarella, mushrooms, and onion', price: 12, image: 'pizzas/funghi.jpg' },
  { name: 'Pizza Salamino', ingredients: 'Tomato, mozzarella, and pepperoni', price: 15, image: 'pizzas/salamino.jpg' },
  { name: 'Pizza Prosciutto', ingredients: 'Tomato, mozzarella, ham, arugula, and burrata cheese', price: 18, image: 'pizzas/prosciutto.jpg' },
];

function Pizza({ name, ingredients, price, image }) {
  return (
    <div className="pizza">
      <img src={image} alt={`${name} pizza`} />
      <h3>{name}</h3>
      <p>{ingredients}</p>
      <p>${price}</p>
    </div>
  );
}

function Menu() {
  
  const [search, setSearch] = useState("");
  
  const filteredPizzas = pizzas.filter(pizza =>
    pizza.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="menu" style={{marginBottom: "20px"}}>
      <h2>Our Menu</h2>
      
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search for a pizza..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "20px", padding: "10px", width: "100%" }}
      />
      
      <div className="pizzas">
        {filteredPizzas.length > 0 ? (
          filteredPizzas.map((pizza, index) => (
            <Pizza
              key={index}
              name={pizza.name}
              ingredients={pizza.ingredients}
              price={pizza.price}
              image={pizza.image}
            />
          ))
        ) : (
          <p>No pizzas found</p>
        )}
      </div>
    </div>
  );
}

function Order() {
  return (
    <div className="order" style={{marginTop: "20px"}}>
      <button>Order Now</button>
    </div>
  );
}

function Footer() {
    const currentHour = new Date().getHours();
    const open = currentHour >= 10 && currentHour < 22;
  
    return (
      <footer className="footer">
        {open ? "We’re currently open" : "Sorry, we’re closed"}
        {open ? <Order /> : <p>Sorry, we're closed</p>}
      </footer>
    );
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
  
