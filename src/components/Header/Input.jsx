import React, { useState, useContext } from "react";
import { InputContainer, InputIP, Button } from "./Header.styled";
import icon from "../../icon-arrow.svg";
import ApiContext  from '../../context/ApiContext';



const Input = () => {

  const { addNewIp } = useContext(ApiContext);
  const [textIp, setTextIp] = useState("");

  const onChange = (e) => {
    setTextIp(e.target.value);
  };

  const onSubmitIp = (e) => {
    e.preventDefault();

    let validarIp = textIp.split(".");
    if (validarIp.length !== 4) {
      alert("Ingrese una dirección ip valida");
    } else {
      for (let i in validarIp) {
        if (
          !/^\d+$/g.test(validarIp[i]) ||
          +validarIp[i] > 255 ||
          +validarIp[i] < 0 ||
          /^[0][0-9]{1,2}/.test(validarIp[i])
        ) {
          alert("Ingrese una dirección ip valida");
          return;
        }
      }
    }
    alert("Dirección ip valida");
    addNewIp(textIp);
  };

  return (
    <InputContainer>
      <InputIP
        type="text"
        placeholder="Search for any IP adress"
        onChange={onChange}
      />
      <Button type="submit" onClick={onSubmitIp}>
        <img src={icon} alt="icon" />
      </Button>
    </InputContainer>
  );
};

export default Input;
