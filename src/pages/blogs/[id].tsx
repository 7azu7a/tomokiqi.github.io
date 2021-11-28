import { InferGetStaticPropsType, GetStaticPaths, GetStaticProps } from 'next';
import { IBlog, IBlogList } from 'interfaces/blog';
import { Container } from 'components/Container';
import { VStack, Box, Flex, Heading, Text } from '@chakra-ui/react';
import { ButtonParts } from 'components/parts/ButtonParts';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { css } from '@emotion/react';
import hljs from 'highlight.js';
import 'highlight.js/styles/a11y-light.css';
import cheerio from 'cheerio';
import { ParsedUrlQuery } from 'querystring';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Blog: React.VFC<Props> = ({ blog, highlightedBody }) => {
  const router = useRouter();

  const routerBack = () => router.back();
  const returnTop = () =>
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

  if (router.isFallback) {
    return (
      <Container>
        <Text>Loading...</Text>
      </Container>
    );
  } else {
    return (
      <Container>
        <VStack
          w="100%"
          spacing="2em"
          justifyContent="center"
          alignItems="flex-start"
          p="2em"
        >
          <Box>
            <ButtonParts label={'＜　戻る'} callback={routerBack} />
          </Box>
          <Box w="100%" h="30vh" pos="relative">
            <Image
              src={`${blog.cover.url}?dpr=2&w=1024`}
              alt="blog cover"
              objectFit="cover"
              layout="fill"
              placeholder="blur"
              blurDataURL="/skeleton.jpg"
            />
          </Box>
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
          <ButtonParts label={'▲ ページトップへ戻る'} callback={returnTop} />
        </VStack>
      </Container>
    );
  }
};

interface PathParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  const apiKey = process.env.API_KEY;
  const endpoint = process.env.ENDPOINT;

  if (apiKey === undefined) {
    throw new Error('API KEY is undefined');
  } else if (endpoint === undefined) {
    throw new Error('ENDPOINT is undefined');
  }

  const key = {
    headers: { 'x-api-key': process.env.API_KEY ?? '' },
  };

  const res = await fetch(endpoint, key);
  const blogs = (await res.json()) as IBlogList;
  const paths = blogs.contents.map((blog) => ({ params: { id: blog.id } }));

  return { paths, fallback: true };
};

interface PropsParams {
  blog: IBlog;
  highlightedBody: string;
}

export const getStaticProps: GetStaticProps<PropsParams, PathParams> = async ({
  params,
}) => {
  const apiKey = process.env.API_KEY;
  const endpoint = process.env.ENDPOINT;

  if (apiKey === undefined) {
    throw new Error('API KEY is undefined');
  } else if (endpoint === undefined) {
    throw new Error('ENDPOINT is undefined');
  }

  const key = {
    headers: { 'x-api-key': process.env.API_KEY ?? '' },
  };

  const id = params!.id;
  const res = await fetch(`${endpoint}${id}`, key);
  const blog = await res.json();

  const $ = cheerio.load(blog.body);

  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });

  return {
    props: { blog: blog as IBlog, highlightedBody: $.html() },
    revalidate: 60,
  };
};

export default Blog;
