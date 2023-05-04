import GoodForm from "./components/GoodForm";
import * as React from 'react'
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";

const App = () => {
  return (
    <ChakraProvider>
    <GoodForm />
  </ChakraProvider>
  ) 
};

export default App;
