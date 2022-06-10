import { useMoralis } from "react-moralis";
import { useState } from "react";
import {
  Box,
  Input,
  Stack,
  Text,
  Container,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ErrorBox from "../components/ErrorBox";

const Profile = () => {
  const router = useRouter();
  const { isAuthenticated, user, setUserData, userError, isUserUpdating } =
    useMoralis();

  const [username, setUsername] = useState(user ? user.get("username") : "");
  const [email, setemail] = useState(user ? user.get("email") : "");
  const [password, setpassword] = useState(user ? user.get("password") : "");

  const handleSave = () => {
    setUserData({
      username,
      email,
      password: password === "" ? undefined : password,
    });
  };

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/");
    }
  });

  return (
    <Container>
      <Stack spacing={3}>
        <Box>
          <Text>
            <Flex textAlign="center" alignItems="baseline">
              <Text fontSize="2xl">Hello Mrs {username}, </Text>
              Update your Details Here
            </Flex>
          </Text>
        </Box>
        {userError && (
          <ErrorBox title="User Change Failed" message={userError.message} />
        )}
        <Box>
          <Stack spacing={3}>
            Profile of {username}
            <Box>
              <Text>Username</Text>
              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Box>
            <Box>
              <Text>Email</Text>
              <Input value={email} onChange={(e) => setemail(e.target.value)} />
            </Box>
            <Box>
              <Text>Password</Text>
              <Input
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </Box>
          </Stack>
        </Box>
        <Button onClick={handleSave} isLoading={isUserUpdating}>
          Save Chnages
        </Button>
      </Stack>
    </Container>
  );
};

export default Profile;
