import { useRouter } from "next/router";
import { useCallback, Dispatch, SetStateAction } from "react";
import {
  Flex,
  Box,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import { ButtonParts } from "components/parts/ButtonParts";
import { SearchIcon } from "@chakra-ui/icons";

type Props = {
  setSearchWord: Dispatch<SetStateAction<string>>;
};

export const BlogPageHeader: React.VFC<Props> = ({ setSearchWord }) => {
  const router = useRouter();
  const routerBack = useCallback(() => router.back(), []);

  const onChangeSearchWord = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchWord(e.target.value);

  return (
    <Flex width="100%" direction={{ base: "column", sm: "row" }}>
      <Box width="100%" mr="2em" mb="2em">
        <ButtonParts label={"＜　戻る"} callback={routerBack} />
      </Box>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="white" />}
        />
        <Input
          borderWidth="2px"
          borderStyle="solid"
          borderColor="white"
          borderRadius="none"
          onChange={(e) => {
            onChangeSearchWord(e);
          }}
        />
      </InputGroup>
    </Flex>
  );
};
