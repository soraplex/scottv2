import { Box, Heading, Flex, Text, Image, Tag, Link, SimpleGrid } from "@chakra-ui/react";
import { FaGithubSquare } from "react-icons/fa";
import { TbBrowserMaximize } from "react-icons/tb";
import { projects, miniProjects } from "../data/projects";

// ONE unified card style
const cardStyles = {
  borderRadius: "lg",
  border: "1px solid rgba(255,255,255,0.06)",
  align: "flex-start",
  position: "relative",
  overflow: "hidden",
  bg: "surface",
  backdropFilter: "blur(18px)",
  transition:
    "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), background 0.35s ease, box-shadow 0.35s ease, backdrop-filter 0.35s ease",
  _hover: {
    transform: { base: "translateY(-2px)", md: "scale(1.02)" },
    boxShadow: "0 12px 32px rgba(0,0,0,0.25)",
    backdropFilter: "blur(20px) brightness(1.1)",
    bg: "rgba(255,255,255,0.05)",
  },
};

// Reusable GitHub + Live link icons (responsive sizing)
const ProjectLinks = ({ github, live }) => (
  <Flex gap={{ base: 2, md: 3 }}>
    {github && (
      <Link href={github} target="_blank" color="accent" title="View GitHub Repo">
        <Box fontSize={{ base: "20px", md: "22px" }}>
          <FaGithubSquare />
        </Box>
      </Link>
    )}

    {live && (
      <Link href={live} target="_blank" color="accent" title="View Live Demo">
        <Box fontSize={{ base: "20px", md: "22px" }}>
          <TbBrowserMaximize />
        </Box>
      </Link>
    )}
  </Flex>
);

// Reusable tag list
const Tags = ({ tags }) => (
  <Flex gap={2} mt={3} wrap="wrap">
    {tags.map((tag) => (
      <Tag key={tag} bg="olive.700" color="olive.100">
        {tag}
      </Tag>
    ))}
  </Flex>
);

const Projects = () => {
  return (
    <Box id="projects">
      <Heading size="md" mb={6} color="accent">
        Projects
      </Heading>

      {/* MAIN PROJECTS */}
      <Flex direction="column" gap={6} mb={7}>
        {projects.map((project) => (
          <Flex
            key={project.title}
            {...cardStyles}
            p={{ base: 4, md: 6 }} // original main project padding
            gap={{ base: 4, md: 6 }} // original main project gap
            flexDirection={{ base: "column", md: "row" }}
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              w={{ base: "100%", md: "120px" }}
              h={{ base: "140px", md: "90px" }}
              objectFit="cover"
              borderRadius="md"
              mb={{ base: 3, md: 0 }}
            />

            <Box flex="1">
              <Flex
                justify="space-between"
                align="center"
                flexDirection={{ base: "column", md: "row" }}
                gap={{ base: 2, md: 0 }}
              >
                <Heading size={{ base: "sm", md: "md" }} color="subtleText">
                  {project.title}
                </Heading>

                <ProjectLinks github={project.github} live={project.live} />
              </Flex>

              <Text color="muted" mt={2}>
                {project.description}
              </Text>

              <Tags tags={project.tags} />
            </Box>
          </Flex>
        ))}
      </Flex>

      {/* MINI PROJECTS */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 4, md: 6 }}>
        {miniProjects.map((project) => (
          <Flex
            key={project.title}
            {...cardStyles}
            p={6} // original mini project padding
            gap={6} // original mini project gap
          >
            <Box flex="1">
              <Flex justify="space-between" align="center">
                <Heading size="sm" color="subtleText">
                  {project.title}
                </Heading>

                <ProjectLinks github={project.github} live={project.live} />
              </Flex>

              <Text color="muted" mt={2}>
                {project.description}
              </Text>

              <Tags tags={project.tags} />
            </Box>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;