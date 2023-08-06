import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>our menu</h2>

      {/* {pizzas && (
        <ul className="pizzas">
          {pizzas.map((pizzaca) => (
            <Pizza
              key={pizzaca.name}
              name={pizzaca.name}
              ingredient={pizzaca.ingredients}
              photoName={pizzaca.photoName}
              price={pizzaca.price}
            />
          ))}
        </ul>
      )} */}
      {/* THIS IS USING TERNARIES: */}
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic catalan coisine. 6 creative dishes to choose from. All
            from our stone oven, inclusion kitchen, all organic, all delicious,
            all feminist, all what you like! :-)
          </p>

          <ul className="pizzas">
            {pizzas.map((pizzaca) => (
              <Pizza
                key={pizzaca.name}
                name={pizzaca.name}
                ingredient={pizzaca.ingredients}
                photoName={pizzaca.photoName}
                price={pizzaca.price}
                soldOut={pizzaca.soldOut}
              />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later ...</p>
      )}
    </main>
  );
}
function Pizza({ name, ingredient, photoName, price, soldOut }) {
  // console.log(props);
  // if (soldOut) return null; //in this case the pizza is no longer now
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name}></img>
      <div>
        <h3>{name}</h3>
        <p>{ingredient}</p>
        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if (hour >= openHour && hour <= closeHour) alert("we are currentyl open!");
  // else alert("sorry we are closed");

  // this solution is not very good. Look that in this case returns the same <p></p> but we don't have the footer classname... so, yes, better to do in the other way (look behind.)
  // if (!isOpen)
  //   return (
  //     <p>
  //       We're happy to welcome you betwen {openHour}:00 and {closeHour}:00
  //     </p>
  //   );

  return (
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()}. We are currently open */}
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you betwen {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We're open until {closeHour}:00. Come to visit us or order online</p>
      <button className="btn">Order</button>
    </div>
  );
}

//React version 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // WITH STRICMODE RENDERS TWICE TO CHECK POSSIBLE ERRORS
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);
