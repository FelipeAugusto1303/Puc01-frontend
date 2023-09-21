import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const ProductCard: React.FC<any> = ({ product, handleDetails }) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      gap="20px"
      borderRadius="20px"
      bg="#e9f0eb"
      height="300px"
      width="200px"
      marginX="10px"
      onClick={() => handleDetails(product.id)}
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
