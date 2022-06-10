import { useMoralis } from "react-moralis";
import { useState } from "react";

import { Button, Box, Input, Stack } from "@chakra-ui/react";

const SignUp = () => {
  const { signup } = useMoralis();
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
      <Button onClick={() => signup(email, password, email)}>Sign Up</Button>
    </Stack>
  );
};

export default SignUp;
