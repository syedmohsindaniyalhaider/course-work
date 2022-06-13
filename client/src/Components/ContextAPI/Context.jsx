import React, { useContext, useState } from "react";
import { UserContext } from "./CreateContext";
import UserContextProvider from "./UserContextProvider";

const CompC = () => {
  const { value, setValue } = useContext(UserContext);
  return (
    <>
      <p>Component C</p>
      <p>Message from Context : {value}</p>
      <button onClick={() => setValue("hey from C Component")}>
        Update Context Value from last nested component
      </button>
    </>
  );
};
const CompB = () => {
  const { value } = useContext(UserContext);
  return (
    <>
      <p>Component B</p>
      <p>Message from Context : {value}</p>
      <CompC />
    </>
  );
};
const CompA = () => {
  const { value, setValue } = useContext(UserContext);
  return (
    <>
      <p>Component A</p>
      <p>Message from Context : {value}</p>
      <button onClick={() => setValue("hey from A Component")}>
        Update Context Value from first nested component
      </button>
      <CompB />
    </>
  );
};

const Context = () => {
  return (
    <>
      <UserContextProvider>
        <p>Parent Component</p>
        <CompA />
      </UserContextProvider>
    </>
  );
};

export default Context;
