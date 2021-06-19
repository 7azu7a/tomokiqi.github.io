import { InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { Container } from "components/Container";
import { Cover } from "components/Cover";
import { BlogList } from "components/BlogList";
import { Profile } from "components/Profile";
import { ValueList } from "components/ValueList";
import { Footer } from "components/Footer";
import { ButtonParts } from "components/parts/ButtonParts";
import { IBlogList } from "interfaces/blog";
import { VStack } from "@chakra-ui/react";
import { Main } from "components/Main";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Index: React.VFC<Props> = ({ blogList }) => {
  const router = useRouter();
  const pushBlogPage = () =>
    router.push("/blogs", undefined, { shallow: true });

  return (
    <Container>
      <Cover />
      <Main>
        <VStack alignItems="center" width="100%" spacing="2rem">
          <BlogList blogList={blogList} />
          <ButtonParts label={"全ての記事　＞"} callback={pushBlogPage} />
        </VStack>
        <Profile />
        <ValueList />
        <Footer />
      </Main>
    </Container>
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

  // TODO: 正しくQuery Paramの設定
  const res = await fetch(`${endpoint}?limit=4`, key);
  const data = await res.json();
  return {
    props: {
      blogList: data as IBlogList,
    },
  };
};

export default Index;
