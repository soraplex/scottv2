import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Stack,
  Link,
  IconButton,
  Image,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useBreakpointValue,
} from "@chakra-ui/react";
import { navItems } from "../data/navigation";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useContact } from "./contactModal/useContact";
import ContactForm from "./contactModal/ContactForm.jsx";
import logo from "/logo.png";

const Sidebar = () => {
  // Mobile menu state
  const { isOpen: isMenuOpen, onOpen: openMenu, onClose: closeMenu } = useDisclosure();

  // Email modal state
  const { isOpen: isEmailOpen, onOpen: openEmail, onClose: closeEmail } = useDisclosure();

  const contact = useContact();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const scrollWithOffset = (element) => {
    const headerOffset = 70; // height of your mobile bar
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();

    if (isMobile) {
      closeMenu();

      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) {
          scrollWithOffset(target);
        }
      }, 250);
    } else {
      const target = document.querySelector(href);
      if (target) {
        scrollWithOffset(target);
      }
    }
  };

  const NavLinks = () => (
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
              left: "0",
              width: "0%",
              height: "1px",
              backgroundColor: "highlight",
              transition: "width 0.25s ease",
            }}
            _hover={{
              _after: { width: "100%" },
            }}
            onClick={(e) => handleNavClick(e, item.href)}
          >
            {item.label}
          </Link>
        ))}
      </VStack>

      {/* Contact Links */}
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

  return (
    <Box
      // mt={isMobile ? 0 : "4rem"}
      pt={isMobile ? "64px" : "0"}
      h={isMobile ? "auto" : "fit-content"}
      position={isMobile ? "relative" : "sticky"}
      top={isMobile ? "0" : "4rem"}
    >
      {/* Mobile Header */}
      {isMobile && (
        <Box
          position="fixed"
          top="0"
          left="0"
          right="0"
          zIndex="1000"
          bg="bg"
          backdropFilter="blur(8px)" // optional, looks premium
          borderBottom="1px solid"
          borderColor="surface"
          px={4}
          py={3}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          {/* <Image src={logo} alt="Logo" boxSize="32px" objectFit="contain" /> */}
          <Box>SR</Box>

          <IconButton
            icon={<HamburgerIcon />}
            variant="ghost"
            color="highlight"
            onClick={openMenu}
            aria-label="Open Menu"
          />
        </Box>
      )}

      {/* Hero */}
      <Heading size="xl" color="textSubtle">
        Scott
      </Heading>

      <Text color="muted" mt={2}>
        Full Stack · AI · UI/UX Designer
      </Text>

      <Text color="muted" mt={4} maxW={{ base: "80%", md: "none" }}>
        I create intuitive products unifying engineering, AI, and design seamlessly.
      </Text>

      {/* Desktop Navigation */}
      {!isMobile && <NavLinks />}

      {/* Footer */}
      <Stack mt="auto" pt={10} spacing={1}>
        <Text color="muted" fontSize="sm">
          Built and designed by me — soraplex.
        </Text>
        <Text color="muted" fontSize="sm">
          © {new Date().getFullYear()} All rights reserved.
        </Text>
      </Stack>

      {/* Mobile Drawer */}
      <Drawer isOpen={isMenuOpen} placement="right" onClose={closeMenu} blockScrollOnMount={false}>
        <DrawerOverlay />

        <DrawerContent bg="bg" color="text" borderLeft="1px solid" borderColor="surface" p={4}>
          {/* <DrawerCloseButton right="50px" mt={4} color="highlight" />
           */}
          <DrawerCloseButton right="16px" top="16px" color="highlight" />

          {/* <DrawerHeader borderBottomWidth="0.px" borderColor="surface" color="accent" mb={4}>
            Menu
          </DrawerHeader> */}

          <DrawerBody>
            <NavLinks />
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Email Modal */}
      <ContactForm {...contact} isOpen={isEmailOpen} onClose={closeEmail} />
    </Box>
  );
};

export default Sidebar;