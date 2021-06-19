import { Flex, Grid } from "@chakra-ui/react";
import { BlogParts } from "./parts/BlogParts";
import { IBlogList } from "interfaces/blog";

type Props = {
  blogList: IBlogList;
};

export const BlogList: React.VFC<Props> = ({ blogList }) => {
  return (
    <Flex width="100%" direction="column">
      <Grid templateColumns="repeat(4, 1fr)" gap="1rem" width="100%">
        {blogList.contents.map((blog) => (
          <BlogParts blog={blog} key={blog.id} />
        ))}
      </Grid>
    </Flex>
  );
};
