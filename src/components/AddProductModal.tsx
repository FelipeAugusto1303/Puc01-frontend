import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  handleCreate: (body: any) => void;
};

const AddProductModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  handleCreate,
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [qnt, setQnt] = useState("0");
  const [value, setValue] = useState("0");

  const format = (val: string) => `$ ` + val;
  const parse = (val: string) => val.replace(/^\$/, "");

  const handleSubmit = () => {
    var data = new FormData();
    data.append("nome", name);
    data.append("descricao", description);
    data.append("quantidade", qnt);
    data.append("valor", value);
    handleCreate(data);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Crie um novo produto</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Nome do produto</FormLabel>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Descrição</FormLabel>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Quantidade em estoque</FormLabel>
            <NumberInput
              value={qnt}
              onChange={(value) => setQnt(value)}
              min={0}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Valor do produto</FormLabel>
            <NumberInput
              value={format(value)}
              onChange={(value) => setValue(parse(value))}
              precision={2}
              step={0.1}
              min={0}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            Criar
          </Button>
          <Button onClick={onClose}>Cancelar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddProductModal;
