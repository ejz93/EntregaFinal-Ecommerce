import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../services/firebase.config";

const CheckoutForm = (props) => {
  const { total, items, handleSubmit } = props;

  const [form, setForm] = useState({
    buyer: {
      email: "",
      name: "",
      phone: "",
    },
    total,
    items,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      buyer: {
        ...form.buyer,
        [name]: value,
      },
    });
    handleSubmitForm(e);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const col = collection(db, 'orders');
    const order = await addDoc(col, form);
    alert("Success, order id is:" + " " + order.id)

    handleSubmit(e, form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        rowGap: '20px'
      }}
    >
      <h4>Data needed to confirm purchase</h4>
      <input
        onChange={handleChange}
        type="text"
        name="name"
        placeholder="Name"
      />
      <input
        onChange={handleChange}
        type="email"
        name="email"
        placeholder="Email"
      />
      <input
        onChange={handleChange}
        type="number"
        name="phone"
        placeholder="Phone"
      />

      <button className="btn btn-warning m-3" type="submit">
        Buy
      </button>
    </form>
  );
};
export default CheckoutForm;
