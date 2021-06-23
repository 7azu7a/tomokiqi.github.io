import { useState, useEffect } from "react";
import { VStack } from "@chakra-ui/react";

import { IBlogList } from "interfaces/blog";
import { BlogList } from "components/BlogList";
import { InferGetStaticPropsType } from "next";
import { Container } from "components/Container";
import { BlogPageHeader } from "components/BlogPageHeader";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Blogs: React.VFC<Props> = ({ blogList }) => {
  const [searchWord, setSearchWord] = useState("");
  const [displayBlogList, setDisplayBlogList] = useState(blogList);

  useEffect(() => {
    setDisplayBlogList({
      ...blogList,
      contents: blogList.contents.filter(
        (blog) =>
          blog.title.toLowerCase().indexOf(searchWord.toLowerCase()) >= 0
      ),
    });
  }, [searchWord]);

  return (
    <Container>
      <VStack p="2em" width="100%" spacing="2em">
        <BlogPageHeader setSearchWord={setSearchWord} />
        <BlogList blogList={displayBlogList} />
      </VStack>
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

  const res = await fetch(endpoint, key);
  const data = await res.json();
  return {
    props: {
      blogList: data as IBlogList,
    },
  };
};

export default Blogs;
