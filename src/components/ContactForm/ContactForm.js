import { useState } from "react";
const ContactForm = (props) => {
  const [name, setNombre] = useState("");
  const [email, setemail] = useState("");
  const [phone, setPhone] = useState("");
  
  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();

        const name = ev.target.nombre.value;
        const email = ev.target.email.value;
        const phone = ev.target.telefono.value;

        setNombre(name);
        setemail(email);
        setPhone(phone);
      }}
    >
      <input
        type="text"
        name="nombre"
        autoComplete="off"
        placeholder="Ingrese su nombre"
      ></input>
      <br />
      <input
        type="text"
        name="email"
        autoComplete="off"
        placeholder="Ingrese su email"
      ></input>
      <br />
      <input
        type="number"
        name="telefono"
        autoComplete="off"
        placeholder="Ingrese su teléfono"
      ></input>
      <br />
      <button type="submit">Ver Formulario</button>

      <p>{`Datos del comprador: ${name} ${phone} ${email}`}</p>
    </form>
  );
};

export default ContactForm;
