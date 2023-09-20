import React, { useState, useEffect } from "react";
import { getProducts } from "../../services/productService";
import {
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import ProductCard from "../../components/ProductCard";

const Product: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    getProducts().then((response) => {
      console.log(response);
      setProducts(response.data.produtos);
    });
  }, []);
  return (
    <Flex flexDirection="column" alignItems="center">
      <Flex
        bg="#85cc9c"
        w="100%"
        justifyContent="center"
        alignItems="center"
        p="20px"
      >
        <Heading as="h2" size="lg">
          PUC-Rio MERCADO
        </Heading>
      </Flex>
      <Flex p="20px" w="100%" gap="20px">
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" fontSize="20px" />
          </InputLeftElement>
          <Input
            size="md"
            placeholder="Busque um produto pelo seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputGroup>
        <Button bg="#2b9eb3" color="#fff" leftIcon={<AddIcon />}>
          Novo Produto
        </Button>
      </Flex>
      <Divider w="95%" marginY="20px" />

      <Flex flexWrap="wrap">
        {products.map((product) => {
          return <ProductCard product={product} />;
        })}
      </Flex>
    </Flex>
  );
};

export default Product;
