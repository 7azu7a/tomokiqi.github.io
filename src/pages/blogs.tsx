import { useCallback, useState, useRef, RefObject } from "react";
import {
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  Box,
  VStack,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { ButtonParts } from "components/parts/ButtonParts";
import { IBlogList } from "interfaces/blog";
import { BlogList } from "components/BlogList";
import { InferGetStaticPropsType } from "next";
import { Container } from "components/Container";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Blogs: React.VFC<Props> = ({ blogList }) => {
  const router = useRouter();
  const inputEl = useRef() as RefObject<HTMLInputElement>;

  const BlogHeader = () => {
    const routerBack = useCallback(() => router.back(), []);

    const [displayBlogList, setDisplayBlogList] = useState<IBlogList>(blogList);

    const onClickSearchButton = () => {
      setDisplayBlogList({
        ...displayBlogList,
        contents: blogList.contents.filter(
          (blog) =>
            blog.title.toLowerCase().indexOf(inputEl.current?.value || "") > -1
        ),
      });
    };

    return (
      <Container>
        <VStack p="2rem" width="100%" spacing="2rem">
          <Flex width="100%">
            <Box width="16rem" mr="2rem">
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
                ref={inputEl}
              />
            </InputGroup>
            <Box width="16rem" ml="2rem">
              <ButtonParts label={"検索"} callback={onClickSearchButton} />
            </Box>
          </Flex>
          <BlogList blogList={displayBlogList} />
        </VStack>
      </Container>
    );
  };

  return (
    <Flex direction="column">
      <BlogHeader />
    </Flex>
  );
};

export const getStaticProps = async () => {
  const apiKey = process.env.API_KEY;
  const endpoint = process.env.ENDPOINT;

  if (apiKey === undefined) {
    throw new Error("API KEY is undefined");
  } else if (endpoint === undefined) {
    throw new Error("ENDPOINT is undefined");
  }

  const key = {
    headers: { "x-api-key": process.env.API_KEY ?? "" },
  };

  const res = await fetch(`${endpoint}`, key);
  const data = await res.json();
  return {
    props: {
      blogList: data as IBlogList,
    },
  };
};

export default Blogs;
