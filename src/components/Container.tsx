import { Flex } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

export const Container: React.VFC<Props> = ({ children }) => {
  return (
    <Flex direction="column" justifyContent="center" alignItems="center">
      {children}
    </Flex>
  );
};
