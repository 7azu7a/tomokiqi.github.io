import { useCallback, useState } from "react";
import { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import { IBlog, IBlogList } from "interfaces/blog";
import { Container } from "components/Container";
import {
  VStack,
  Flex,
  Heading,
  Image as ChakraImage,
  Skeleton,
} from "@chakra-ui/react";
import { ButtonParts } from "components/parts/ButtonParts";
import { useRouter } from "next/router";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Blog: React.VFC<Props> = ({ blog }) => {
  const router = useRouter();
  const [isLoadedImage, setIsLoadedImage] = useState(false);
  const routerBack = useCallback(() => router.back(), []);

  return (
    <Container>
      <VStack
        width="100%"
        spacing="2em"
        justifyContent="center"
        alignItems="flex-start"
        p="2em"
      >
        <ButtonParts label={"＜　戻る"} callback={routerBack} />
        <Skeleton width="100%" height="30%" isLoaded={isLoadedImage}>
          <ChakraImage
            src={`${blog.cover.url}?dpr=2&w=1024`}
            alt="cover image"
            width="100%"
            height="30vh"
            objectFit="cover"
            onLoad={() => setIsLoadedImage(true)}
          />
        </Skeleton>
        <Heading fontSize="1.5em">{blog.title}</Heading>
        <Flex width="100%">
          <div
            dangerouslySetInnerHTML={{
              __html: `${blog.body}`,
            }}
          />
        </Flex>
      </VStack>
    </Container>
  );
};

export const getStaticPaths = async () => {
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

  const res = await fetch(endpoint, key);
  const blogs = (await res.json()) as IBlogList;
  const paths = blogs.contents.map((blog) => `/blogs/${blog.id}`);

  return { paths, fallback: false };
};

export const getStaticProps = async (
  context: GetStaticPropsContext<{ id: string }>
) => {
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

  const id = context.params?.id;
  const res = await fetch(`${endpoint}${id}`, key);
  const data = await res.json();

  return { props: { blog: data as IBlog } };
};

export default Blog;
