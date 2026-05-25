import { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  HStack,
  Text,
} from "@chakra-ui/react";

// Base styles for all contact form fields
const contactField = {
  bg: "bg",
  borderColor: "muted",
  focusBorderColor: "accent",
};

// Styles for the cancel button
const contactCancelButton = {
  variant: "ghost",
  border: "1px solid",
  borderColor: "brand.600",
  color: "muted",
  _hover: { color: "text" },
};

const ContactModal = ({
  isOpen,
  onClose,
  formData,
  handleChange,
  handleSubmit,
  isSending,
  statusMessage,
  resetStatus,
  resetForm,
}) => {
  // Reset form + status every time modal opens
  useEffect(() => {
    if (isOpen) {
      resetStatus?.();
      resetForm?.();
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
      <ModalOverlay />
      <ModalContent
        bg="bg"
        color="text"
        border="1px solid"
        borderColor="muted"
        maxW={{ base: "90%", md: "var(--chakra-sizes-lg)" }}
      >
        <ModalHeader color="text">Send Me a Message</ModalHeader>
        <ModalCloseButton color="muted" />

        <ModalBody pb={4}>
          <FormControl mb={4}>
            <FormLabel color="subtleText">Your Name</FormLabel>
            <Input name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} {...contactField} />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel color="subtleText">Your Email</FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              {...contactField}
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel color="subtleText">Subject</FormLabel>
            <Input
              name="subject"
              placeholder="What's this about?"
              value={formData.subject}
              onChange={handleChange}
              {...contactField}
            />
          </FormControl>

          <FormControl>
            <FormLabel color="subtleText">Your Message</FormLabel>
            <Textarea
              name="message"
              placeholder="Write your message here..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
              {...contactField}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter flexDirection="column" alignItems="flex-end">
          <HStack>
            <Button
              bg="accent"
              color="bg"
              mr={3}
              _hover={{ bg: "brand.600" }}
              onClick={() => handleSubmit(onClose)}
              isLoading={isSending}
              loadingText="Sending..."
              spinnerPlacement="start"
            >
              Send
            </Button>

            <Button onClick={onClose} {...contactCancelButton}>
              Cancel
            </Button>
          </HStack>

          {statusMessage && (
            <Text
              mt={3}
              fontSize="sm"
              color={statusMessage.type === "success" ? "green.300" : "red.300"}
              textAlign="right"
            >
              {statusMessage.text}
            </Text>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ContactModal;