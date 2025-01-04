import React from "react";
import ReactDOM from "react-dom";

const ServicesItem = ({ headerName, text, price, active }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "10px",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <h2>{headerName}</h2>
      <p>{text}</p>
      <p>
        <strong>Price:</strong> ${price}
      </p>
      <p>
        <strong>Status:</strong> {active ? "Active" : "Inactive"}
      </p>
    </div>
  );
};

const servicesData = [
  { headerName: "Service A", text: "Description of Service A", price: 100, active: true },
  { headerName: "Service B", text: "Description of Service B", price: 200, active: false },
  { headerName: "Service C", text: "Description of Service C", price: 300, active: true },
  { headerName: "Service D", text: "Description of Service D", price: 400, active: false },
  { headerName: "Service E", text: "Description of Service E", price: 500, active: true },
  { headerName: "Service F", text: "Description of Service F", price: 600, active: false },
];

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Our Services</h1>
      {servicesData.map((service, index) => (
        <ServicesItem
          key={index}
          headerName={service.headerName}
          text={service.text}
          price={service.price}
          active={service.active}
        />
      ))}
    </div>
  );
};
export default App;
