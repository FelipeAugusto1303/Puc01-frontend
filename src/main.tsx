import React from "react";
import ReactDOM from "react-dom/client";
import Product from "./pages/Product/Product.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <Product />
    </ChakraProvider>
  </React.StrictMode>
);
