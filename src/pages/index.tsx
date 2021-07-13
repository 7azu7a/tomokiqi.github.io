import { InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { Container } from 'components/Container';
import { Cover } from 'components/Cover';
import { BlogList } from 'components/BlogList';
import { Profile } from 'components/Profile';
import { Footer } from 'components/Footer';
import { ButtonParts } from 'components/parts/ButtonParts';
import { IBlogList } from 'interfaces/blog';
import { VStack } from '@chakra-ui/react';
import { Main } from 'components/Main';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Index: React.VFC<Props> = ({ blogList }) => {
  const router = useRouter();
  const pushBlogListPage = () =>
    router.push('/blogs', undefined, { shallow: true });

  return (
    <Container>
      <Cover />
      <Main>
        <VStack alignItems="center" width="100%" spacing="2em">
          <BlogList blogList={blogList} />
          <ButtonParts label={'全ての記事　＞'} callback={pushBlogListPage} />
        </VStack>
        <Profile />
        <Footer />
      </Main>
    </Container>
  );
};

export const getStaticProps = async () => {
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

  const res = await fetch(`${endpoint}?limit=12`, key);
  const data = await res.json();

  return {
    props: {
      blogList: data as IBlogList,
    },
    revalidate: 60,
  };
};

export default Index;
