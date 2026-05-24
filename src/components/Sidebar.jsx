// import { Box, Heading, Text, VStack, HStack, Stack, Link, useDisclosure } from "@chakra-ui/react";
// import { useContact } from "./contactModal/useContact";
// import ContactForm from "./contactModal/ContactForm.jsx";

// const Sidebar = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const contact = useContact();

//   return (
//     <Box position="sticky" top="4rem" h="fit-content">
//       {/* Hero */}
//       <Heading size="xl" color="textSubtle">
//         Scott
//       </Heading>

//       <Text color="muted" mt={2}>
//         Full Stack · AI · UI/UX Designer
//       </Text>

//       <Text color="muted" mt={4} maxW = {{base: "80%", md: "none"}}>
//         I create intuitive products unifying engineering, AI, and design seamlessly.
//       </Text>

//       {/* Navigation */}
//       <VStack align="start" spacing={2} mt={6}>
//         {[
//           { label: "ABOUT", href: "#" },
//           { label: "EXPERIENCE", href: "#experience" },
//           { label: "PROJECTS", href: "#projects" },
//           { label: "CASE STUDIES", href: "#case-studies" },
//         ].map((item) => (
//           <Link
//             key={item.href}
//             href={item.href}
//             color="accent"
//             position="relative"
//             _after={{
//               content: '""',
//               position: "absolute",
//               bottom: "-2px",
//               left: "0",
//               width: "0%",
//               height: "1px",
//               backgroundColor: "highlight",
//               transition: "width 0.25s ease",
//             }}
//             _hover={{
//               _after: { width: "100%" },
//             }}
//           >
//             {item.label}
//           </Link>
//         ))}
//       </VStack>

//       {/* Contact Links */}
//       <Box mt={10}>
//         <Text color="subtleText" fontWeight="600" mb={3}>
//           Contact
//         </Text>

//         <HStack spacing={4} divider={<Box h="16px" w="1px" bg="muted" />}>
//           <Link href="https://github.com/soraplex" target="_blank" color="highlight">
//             GitHub
//           </Link>
//           <Link href={import.meta.env.VITE_LINKEDIN_URL} target="_blank" color="highlight">
//             LinkedIn
//           </Link>
//           <Link onClick={onOpen} color="highlight" cursor="pointer">
//             Email
//           </Link>
//         </HStack>

//         <ContactForm {...contact} isOpen={isOpen} onClose={onClose} />
//       </Box>

//       {/* Footer */}
//       <Stack mt={4} spacing={1}>
//         <Text color="muted" fontSize="sm">
//           Built and designed by me — soraplex.
//         </Text>
//         <Text color="muted" fontSize="sm">
//           © {new Date().getFullYear()} All rights reserved.
//         </Text>
//       </Stack>
//     </Box>
//   );
// };

// export default Sidebar;









import React from "react";
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

  // const navItems = [
  //   { label: "ABOUT", href: "#home" },
  //   { label: "EXPERIENCE", href: "#experience" },
  //   { label: "PROJECTS", href: "#projects" },
  //   { label: "CASE STUDIES", href: "#case-studies" },
  // ];

  // ⭐ FIX: Delay closing the drawer to allow scroll to complete
  // const handleNavClick = (e, href) => {
  //   e.preventDefault();

  //   const target = document.querySelector(href);
  //   if (target) {
  //     target.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }

  //   if (isMobile) {
  //     setTimeout(() => {
  //       closeMenu();
  //     }, 300); // Wait 300ms for scroll to finish before closing
  //   }
  // };

  // const handleNavClick = (e, href) => {
  //   e.preventDefault();

  //   if (isMobile) {
  //     // 1. Close drawer first
  //     closeMenu();

  //     // 2. Wait for drawer animation to finish
  //     setTimeout(() => {
  //       const target = document.querySelector(href);
  //       if (target) {
  //         target.scrollIntoView({ behavior: "smooth", block: "start" });
  //       }
  //     }, 300); // 200–300ms feels perfect
  //   } else {
  //     // Desktop: scroll immediately
  //     const target = document.querySelector(href);
  //     if (target) {
  //       target.scrollIntoView({ behavior: "smooth", block: "start" });
  //     }
  //   }
  // };

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
      {/* {isMobile && (
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
          <Box></Box>
          <IconButton
            icon={<HamburgerIcon />}
            variant="ghost"
            color="highlight"
            onClick={openMenu}
            aria-label="Open Menu"
          />
        </Box>
      )} */}

      {isMobile && (
        <Box
          position="fixed"
          top="0"
          left="0"
          right="0"
          zIndex="1000"
          bg="bg" // or "blackAlpha.800" for darker
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
