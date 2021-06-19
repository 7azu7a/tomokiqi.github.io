import { Button } from "@chakra-ui/react";

type ButtonProps = {
  label: string;
  callback: () => void;
};

export const ButtonParts: React.VFC<ButtonProps> = ({ label, callback }) => (
  <Button
    borderWidth="2px"
    borderStyle="solid"
    borderColor="white"
    borderRadius="0"
    width="16rem"
    onClick={callback}
    bgColor="transparent"
    _active={{
      bgColor: "white",
      color: "black",
    }}
  >
    {label}
  </Button>
);
