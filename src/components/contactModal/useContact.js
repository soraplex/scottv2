import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@chakra-ui/react";

export const useContact = () => {
  const toast = useToast();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetStatus = () => setStatusMessage(null);

  const resetForm = () =>
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

  const handleSubmit = async (onClose) => {
    setIsSending(true);
    setStatusMessage(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      // Show success message
      setStatusMessage({ type: "success", text: "Message sent successfully!" });

      // Reset form fields
      resetForm();

      // ⭐ Smooth auto-close AFTER success message appears
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
      setStatusMessage({ type: "error", text: "Failed to send message. Try again." });

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