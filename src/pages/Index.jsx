import { Container, Text, VStack, Heading, Box, Image, Button } from "@chakra-ui/react";
import { FaPaw } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Dog Lovers
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Discover the best dog breeds, tips for care, and heartwarming stories about our furry friends.
        </Text>
        <Box boxSize="sm">
          <Image src="/images/dog-landing.jpg" alt="Happy Dog" borderRadius="md" />
        </Box>
        <Button rightIcon={<FaPaw />} colorScheme="teal" variant="solid" size="lg">
          Learn More
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;