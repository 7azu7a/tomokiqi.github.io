import { Grid } from "@chakra-ui/react";
import { BlogParts } from "./parts/BlogParts";
import { IBlogList } from "interfaces/blog";

type Props = {
  blogList: IBlogList;
};

export const BlogList: React.VFC<Props> = ({ blogList }) => {
  return (
    <Grid
      templateColumns="repeat(auto-fit, minmax(16em, 1fr))"
      gap="2em"
      width="100%"
    >
      {blogList.contents.map((blog) => (
        <BlogParts blog={blog} key={blog.id} />
      ))}
    </Grid>
  );
};
