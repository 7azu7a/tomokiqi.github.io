import { Button } from '@chakra-ui/react';

type ButtonProps = {
  label: string;
  callback: () => void;
};

export const ButtonParts: React.VFC<ButtonProps> = ({ label, callback }) => (
  <Button
    bgColor="white"
    color="black"
    borderRadius="0"
    width={{ base: '100%', sm: '16em' }}
    onClick={callback}
    _active={{
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: 'white',
    }}
  >
    {label}
  </Button>
);
