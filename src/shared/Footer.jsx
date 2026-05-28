import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box  color="muted" mt={8}>
      <Text color="muted" fontSize="sm">Built and designed by me — soraplex</Text>
      <Text color="muted" fontSize="sm"> &copy; {new Date().getFullYear()} All rights reserved.</Text>
    </Box>
  );
};

export default Footer;