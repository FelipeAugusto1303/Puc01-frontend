import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

// import { Container } from './styles';

const ProductCard: React.FC<any> = ({ product }) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      gap="20px"
      borderRadius="20px"
      bg="#f5eeee"
      height="300px"
      width="200px"
      marginX="10px"
    >
      <Image
        src="./product_image.jpeg"
        alt="product_image"
        w="200px"
        h="200px"
        borderRadius="20px 20px 0px 0px"
      />
      <Flex flexDirection="column" w="100%" gap="5px" paddingLeft="10px">
        <Text fontWeight="bold" fontSize="25px">
          R$ {product.valor}
        </Text>
        <Text fontWeight="bold" fontSize="15px">
          {product.nome}
        </Text>
      </Flex>
    </Flex>
  );
};

export default ProductCard;
