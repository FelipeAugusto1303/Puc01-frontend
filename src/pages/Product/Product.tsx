import React, { useState, useEffect } from "react";
import { createProduct, getProducts } from "../../services/productService";
import {
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  useDisclosure,
} from "@chakra-ui/react";
import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import ProductCard from "../../components/ProductCard";
import AddProductModal from "../../components/AddProductModal";

const Product: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [updateList, setUpdateList] = useState(false);
  const {
    isOpen: isOpenAdd,
    onClose: onCloseAdd,
    onOpen: onOpenAdd,
  } = useDisclosure();

  useEffect(() => {
    getProducts().then((response) => {
      console.log(response);
      setProducts(response.data.produtos);
    });
  }, [updateList]);

  const handleCreateProduct = (body: any) => {
    createProduct(body).then((response) => {
      console.log(response);
      setUpdateList((prev) => !prev);
    });
  };

  return (
    <>
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
          <Button
            bg="#2b9eb3"
            color="#fff"
            leftIcon={<AddIcon />}
            onClick={onOpenAdd}
          >
            Novo Produto
          </Button>
        </Flex>
        <Divider w="95%" marginY="20px" />

        <Flex flexWrap="wrap" w="100%" p="20px">
          {products.map((product) => {
            return <ProductCard product={product} />;
          })}
        </Flex>
      </Flex>
      <AddProductModal
        isOpen={isOpenAdd}
        onClose={onCloseAdd}
        handleCreate={handleCreateProduct}
      />
    </>
  );
};

export default Product;
