import { useMoralis } from "react-moralis";
import {
  Container,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  Text,
} from "@chakra-ui/react";
import SignUp from "./SignUp";
import Login from "./Login";
import { useState } from "react";
import ErrorBox from "../../components/ErrorBox";

const Authentication = () => {
  const { authenticate, isAuthenticated, isAuthenticating, authError } =
    useMoralis();

  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <Container>
      <Text fontSize="5xl" w="100%">
        Welcome To Cricket NFT Market Place
      </Text>
      {isAuthenticated ? (
        <Text fontSize="6xl" w="100%" color="green.300">
          Work in Progress
        </Text>
      ) : (
        <>
          {authError && (
            <ErrorBox
              title="Authetication has Failed!"
              message={authError.message}
            />
          )}
          <Button
            isLoading={isAuthenticating}
            mb={6}
            w="100%"
            onClick={() => {
              authenticate({ provider: "metamask" });
            }}
          >
            Sign in with MetaMask
          </Button>
          {isSignUp ? <SignUp /> : <Login />}
          <Text textAlign="center" m={5}>
            OR
          </Text>
          <Button w="100%" mb={10} onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? "Already have Account ?" : "Create Account"}
          </Button>
        </>
      )}
    </Container>
  );
};

export default Authentication;
