import React from "react";
const ContactForm = ({
  name,
  email,
  phone,
  setName,
  setEmail,
  setPhone,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <p>Ingrese sus datos en el siguiente formulario:</p>
      <input
        type="text"
        name="nombre"
        value={name}
        autoComplete="off"
        placeholder="Ingrese su nombre"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <br />
      <input
        type="text"
        name="email"
        value={email}
        autoComplete="off"
        placeholder="Ingrese su email"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <br />
      <input
        type="number"
        name="telefono"
        value={phone}
        autoComplete="off"
        placeholder="Ingrese su teléfono"
        onChange={(e) => setPhone(e.target.value)}
      ></input>
      <br />
    </form>
  );
};

export default ContactForm;
