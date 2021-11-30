import { IBlog } from '../../interfaces/blog';
import { Flex, Heading, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import Image from 'next/image';

type Props = {
  blog: IBlog;
};

export const BlogModule: React.VFC<Props> = ({ blog }) => {
  const router = useRouter();

  const pushBlogPage = () => {
    router.push(`/blogs/${blog.id}`);
  };

  return (
    <Flex
      direction="column"
      width="100%"
      height="16em"
      bgColor="white"
      color="black"
      onClick={pushBlogPage}
      cursor="pointer"
      key={blog.id}
    >
      <Flex w="100%" h="70%" pos="relative">
        <Image
          src={`${blog.cover.url}?dpr=2&w=256`}
          layout="fill"
          objectFit="cover"
          alt="blog cover"
          placeholder="blur"
          blurDataURL="/skeleton.jpg"
        />
      </Flex>
      <Flex
        direction="column"
        height="30%"
        justifyContent="space-between"
        p="1em"
      >
        <Heading fontSize="1em" isTruncated>
          {blog.title}
        </Heading>
        <Text fontSize="0.75em">
          {`${dayjs(blog.publishedAt).format('YYYY/MM/DD')}`}
        </Text>
      </Flex>
    </Flex>
  );
};
