import { createContext, useState } from "react";

const SettingContext = createContext({
  name: "",
  price: "",
  addCart: "",
  setName: () => {},
  setPrcie: () => {},
  setAddCart: () => {},
});

export function SettingProvider(props) {
  const [name, setName] = useState("");
  const [proce, setPrcie] = useState("");
  const [addCart, setAddCart] = useState("");

  return (
    <SettingContext.Provider
      value={{ name, setName, price, setPrcie, addCart, setAddCart }}
    >
      {props.children}
    </SettingContext.Provider>
  );
}
