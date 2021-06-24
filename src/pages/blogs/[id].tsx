import { useCallback, useState } from "react";
import { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import { IBlog, IBlogList } from "interfaces/blog";
import { Container } from "components/Container";
import {
  VStack,
  Box,
  Flex,
  Heading,
  Skeleton,
  Image as ChakraImage,
} from "@chakra-ui/react";
import { ButtonParts } from "components/parts/ButtonParts";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import hljs from "highlight.js";
import "highlight.js/styles/a11y-light.css";
import cheerio from "cheerio";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Blog: React.VFC<Props> = ({ blog, highlightedBody }) => {
  const router = useRouter();
  const [isLoadedImage, setIsLoadedImage] = useState(false);
  const routerBack = () => router.back();
  const returnTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

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
          <Box
            width="100%"
            dangerouslySetInnerHTML={{
              __html: `${highlightedBody}`,
            }}
            css={css`
              h1 {
                font-size: 1.25em;
                margin: 1em 0;
                font-weight: bold;
              }
              ul {
                margin: 0.5em 0 0.5em 1em;
              }
              pre {
                background-color: white;
                margin: 1em 0;
                padding: 0.5em;
                overflow-x: scroll;
              }
            `}
          />
        </Flex>
        <ButtonParts label={"ページトップへ戻る"} callback={returnTop} />
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
  const blog = await res.json();

  const $ = cheerio.load(blog.body);

  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });

  return { props: { blog: blog as IBlog, highlightedBody: $.html() } };
};

export default Blog;
