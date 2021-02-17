import React, { useState, useEffect } from "react";
import "./styles.css";

const Customers = () => {
  const [customers, setCustomers] = useState(null);

  useEffect(() => {
    fetch("/api/customers")
      .then((res) => res.json())
      .then((res) => {
        setCustomers(res);
      });
  }, []);

  const customerList = (
    <ul>
      {customers
        ? customers.map((customer) => {
            return <li>{customer.firstName}</li>;
          })
        : null}
    </ul>
  );
  return (
    <div>
      <h2>Customers</h2>
      {customers ? customerList : <div>Loading Customers</div>}
    </div>
  );
};

export default Customers;
