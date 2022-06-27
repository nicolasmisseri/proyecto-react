import { useState } from "react";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const response = { name, email, phone };
    console.log("response", response);
    return response;
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Enviar Formulario</button>
    </form>
  );
};

export default ContactForm;
