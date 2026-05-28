import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@chakra-ui/react";

export const useContact = () => {
  const toast = useToast();

  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const initialForm = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const resetStatus = () => setStatusMessage(null);
  const resetForm = () => setFormData(initialForm);

  const handleSubmit = async (onClose) => {
    setIsSending(true);
    resetStatus();

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setStatusMessage({ type: "success", text: "Message sent successfully!" });
      resetForm();

      setTimeout(() => {
        onClose();
        resetStatus();
      }, 1800);

      toast({
        title: "Success!",
        description: "Message sent successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      setStatusMessage({
        type: "error",
        text: "Failed to send message. Try again.",
      });

      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsSending(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isSending,
    statusMessage,
    resetStatus,
    resetForm,
  };
};