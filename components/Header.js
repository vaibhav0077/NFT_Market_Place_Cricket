import { useMoralis } from "react-moralis";
import {
  Button,
  Flex,
  useColorMode,
  Spacer,
  Text,
  FormLabel,
} from "@chakra-ui/react";

import styles from "../styles/toggle.module.css";
import Link from "next/link";

function ToggleCurrentMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      {/* <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button> */}
      <FormLabel mt={3} className={styles.switch} onChange={toggleColorMode}>
        <input type="checkbox" /> <div></div>
      </FormLabel>
    </div>
  );
}
const Header = () => {
  const { isAuthenticated, logout, user } = useMoralis();
  // Toggle Mode
  return (
    <Flex m={3}>
      <Link href="/">NFT Market Place</Link>
      <Spacer />
      <Text>
        {isAuthenticated && user.get("ethAddress") && (
          <div>
            Your wallet address is{" "}
            <Text fontWeight="bold">{user.get("ethAddress")}</Text>
          </div>
        )}
      </Text>
      <Text m="auto" fontSize="20px" mx={3}>
        {isAuthenticated && (
          <Text>
            Welcome{" "}
            <Link href="/Profile" fontWeight="bold">
              {user && user.get("username")}
            </Link>
          </Text>
        )}
      </Text>
      <ToggleCurrentMode />
      <Text mx={3}>
        {isAuthenticated && <Button onClick={logout}>Logout</Button>}
      </Text>
    </Flex>
  );
};

export default Header;
