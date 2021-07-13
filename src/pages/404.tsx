import { Container } from 'components/Container';
import { Flex, Heading, Text } from '@chakra-ui/react';
import { ButtonParts } from 'components/parts/ButtonParts';
import { useRouter } from 'next/router';

const Custom404 = () => {
  const router = useRouter();
  const pushIndexPage = () => router.push('/', undefined, { shallow: true });

  return (
    <Container>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        width="100vw"
        height="100vh"
        p="2em"
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          transform="rotate(45deg)"
          borderColor="white"
          borderWidth="1px"
          width="128px"
          height="128px"
          mb="4em"
        >
          <Heading transform="rotate(-45deg)">四○四</Heading>
        </Flex>
        <Text mb="2em">このページは見つかりませんでした</Text>
        <ButtonParts label="トップページへ戻る" callback={pushIndexPage} />
      </Flex>
    </Container>
  );
};

export default Custom404;
