import { useMoralis } from "react-moralis";
import { useState } from "react";
import { Button, Box, Input, Stack } from "@chakra-ui/react";

const Login = () => {
  const { login } = useMoralis();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <Stack spacing={6}>
      <Input
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.currentTarget.value)}
      />
      <Input
        placeholder="Password"
        value={password}
        type="password"
        onChange={(event) => setpassword(event.currentTarget.value)}
      />
      <Button onClick={() => login(email, password, email)}>Login</Button>
    </Stack>
  );
};

export default Login;
