import { Cover } from "components/Cover";
import { Container } from "components/Container";
import { Footer } from "components/Footer";
import { BlogList } from "components/BlogList";
import { ValueList } from "components/ValueList";
import { Profile } from "components/Profile";
import { IBlogList } from "interfaces/blog";

type Props = {
  blogs: IBlogList;
};

const Index: React.VFC<Props> = ({ blogs }) => (
  <Container>
    <Cover />
    <BlogList blogs={blogs.contents} />
    <Profile />
    <ValueList />
    <Footer />
  </Container>
);

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

  try {
    const res = await fetch(endpoint, key);
    const data = (await res.json()) as Promise<IBlogList>;
    return {
      props: {
        blogs: data,
      },
    };
  } catch (e) {
    throw new Error("Failed to fetch data");
  }
};

export default Index;
