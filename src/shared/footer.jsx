import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box textAlign="center" color="muted" mt={8}>
      <Text fontSize="sm">Built and designed by me — soraplex</Text>
      <Text fontSize="sm"> &copy; {new Date().getFullYear()} All rights reserved.</Text>
    </Box>
  );
};

export default Footer;