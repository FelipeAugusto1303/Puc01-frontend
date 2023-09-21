import { DeleteIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  handleDelete: (id: number) => void;
  product: any;
};

const DetailsProductModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  handleDelete,
  product,
}) => {
  const handleSubmit = () => {
    handleDelete(product.id);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Image
            src="./product_image.jpeg"
            alt="product_image"
            w="100%"
            h="300px"
            borderRadius="20px"
          />

          <Flex flexDirection="column" w="100%" gap="5px" paddingLeft="10px">
            <Text fontWeight="bold" fontSize="25px">
              {product.nome}
            </Text>
            <Text fontWeight="bold" fontSize="15px" textAlign="justify">
              {product.descricao}
            </Text>
            <Text fontWeight="bold" fontSize="15px">
              R$ {product.valor}
            </Text>
            <Text fontWeight="bold" fontSize="15px">
              quantidade: {product.quantidade} produtos
            </Text>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="red"
            color="#fff"
            leftIcon={<DeleteIcon />}
            mr={3}
            onClick={handleSubmit}
          >
            remover produto
          </Button>
          <Button onClick={onClose}>Fechar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DetailsProductModal;
