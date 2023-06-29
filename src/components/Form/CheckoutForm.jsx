import React, { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductProvider";
import { CartContext } from "../../context/CartProvider";
import { Modal, Button, Form, InputGroup, Col } from "react-bootstrap";
import "./CheckoutForm.css";

const CheckoutForm = () => {
  const { handleSubmit } = useContext(ProductContext);
  const { cart, getTotal, clearCart } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [order, setOrder] = useState(null);

  const [form, setForm] = useState({
    buyer: {
      name: "",
      email: "",
      phone: "",
    },
    total: getTotal(),
    items: cart,
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
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setOrder(handleSubmit(form));
    setIsModalOpen(true);
    clearCart();
  };

  if (order) {
    return (
      <Modal
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
        show={isModalOpen}
        onHide={() => setIsModalOpen(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Thank you for your purchase.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Hope you keep on choosing us!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="border border-dark"
            variant="warning"
            onClick={() => setIsModalOpen(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <Form className="order_form mt-3" onSubmit={handleSubmitForm} action="">
        <h2 className="m-5 text-center text-light">
          Data needed to complete the order:
        </h2>
        <Form.Group as={Col} md="4" className="mb-3" controlId="name">
          <InputGroup hasValidation>
            <Form.Control
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a name.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="4" className="mb-3" controlId="email">
          <InputGroup hasValidation>
            <Form.Control
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Your email"
              aria-describedby="inputGroupPrepend"
              required
            />
            <InputGroup.Text id="inputGroupPrepend">
              e.g @gmail.com
            </InputGroup.Text>
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="4" className="mb-3" controlId="phone">
          <InputGroup hasValidation>
            <Form.Control
              onChange={handleChange}
              type="number"
              name="phone"
              placeholder="Your phone"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a phone number.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Button
          className="btn btn-warning m-3 border border-dark px-5"
          disabled={cart.length === 0}
          onClick={() => setIsModalOpen(true)}
          type="submit"
        >
          BUY !
        </Button>
      </Form>
    </>
  );
};
export default CheckoutForm;
