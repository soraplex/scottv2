import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Stack,
  Link,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { navItems } from "../data/navigation";
import { useContact } from "./contactModal/useContact";
import ContactForm from "./contactModal/ContactForm.jsx";

const NavLinks = ({ handleNavClick, openEmail }) => (
  <Box>
    <VStack align="start" spacing={2} mt={6}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          color="accent"
          position="relative"
          _after={{
            content: '""',
            position: "absolute",
            bottom: "-2px",
            left: 0,
            width: "0%",
            height: "1px",
            backgroundColor: "highlight",
            transition: "width 0.25s ease",
          }}
          _hover={{ _after: { width: "100%" } }}
          onClick={(e) => handleNavClick(e, item.href)}
        >
          {item.label}
        </Link>
      ))}
    </VStack>
    <Box mt={10}>
      <Text color="subtleText" fontWeight="600" mb={3}>
        Contact
      </Text>

      <HStack spacing={4} divider={<Box h="16px" w="1px" bg="muted" />}>
        <Link href="https://github.com/soraplex" target="_blank" color="highlight">
          GitHub
        </Link>

        <Link href={import.meta.env.VITE_LINKEDIN_URL} target="_blank" color="highlight">
          LinkedIn
        </Link>

        <Link onClick={openEmail} color="highlight" cursor="pointer">
          Email
        </Link>
      </HStack>
    </Box>
  </Box>
);

const Sidebar = () => {
  const mobileMenu = useDisclosure();
  const email = useDisclosure();
  const contact = useContact();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleNavClick = (e, href) => {
    e.preventDefault();

    const target = document.querySelector(href);
    if (!target) return;

    const headerOffset = 70;
    const offset = target.getBoundingClientRect().top + window.scrollY - headerOffset;

    if (isMobile) {
      mobileMenu.onClose();
      setTimeout(() => {
        window.scrollTo({ top: offset, behavior: "smooth" });
      }, 250);
    } else {
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <Box pt={isMobile ? "64px" : 0} position={isMobile ? "relative" : "sticky"} top={isMobile ? 0 : "4rem"}>
      {isMobile && (
        <HStack
          position="fixed"
          top={0}
          left={0}
          right={0}
          zIndex="1000"
          bg="bg"
          backdropFilter="blur(8px)"
          borderBottom="1px solid"
          borderColor="surface"
          px={4}
          py={3}
          justify="space-between"
        >
          <Box>SR</Box>

          <IconButton
            icon={<HamburgerIcon />}
            variant="ghost"
            color="highlight"
            onClick={mobileMenu.onOpen}
            aria-label="Open Menu"
          />
        </HStack>
      )}

      <Heading size="xl" color="textSubtle">
        Scott
      </Heading>

      <Text color="muted" mt={2}>
        Full Stack · AI · UI/UX Designer
      </Text>

      <Text color="muted" mt={4} maxW={{ base: "80%", md: "none" }}>
        I create intuitive products unifying engineering, AI, and design seamlessly.
      </Text>

      {!isMobile && <NavLinks handleNavClick={handleNavClick} openEmail={email.onOpen} />}

      <Stack mt="auto" pt={10} spacing={1}>
        <Text color="muted" fontSize="sm">
          Built and designed by me — soraplex.
        </Text>
        <Text color="muted" fontSize="sm">
          © {new Date().getFullYear()} All rights reserved.
        </Text>
      </Stack>

      <Drawer isOpen={mobileMenu.isOpen} placement="right" onClose={mobileMenu.onClose} blockScrollOnMount={false}>
        <DrawerOverlay />
        <DrawerContent bg="bg" color="text" borderLeft="1px solid" borderColor="surface" p={4}>
          <DrawerCloseButton right="16px" top="16px" color="highlight" />

          <DrawerBody>
            <NavLinks handleNavClick={handleNavClick} openEmail={email.onOpen} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <ContactForm {...contact} isOpen={email.isOpen} onClose={email.onClose} />
    </Box>
  );
};

export default Sidebar;