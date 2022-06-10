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

const ErrorBox = ({ title, message }) => {
  return (
    <Alert status="error" my={3}>
      <AlertIcon />
      <Box>
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Box>
      {/* <CloseButton
      alignSelf="flex-start"
      position="relative"
      right={-1}
      top={-1}
      onClick={onClose}
    /> */}
    </Alert>
  );
};

export default ErrorBox;
