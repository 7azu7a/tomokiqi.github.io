import { Flex, VStack, Heading } from '@chakra-ui/react';
import { CareerModule } from 'components/module/CareerModule';

export const CareerList = () => {
  const career = [
    {
      year: '2015',
      organization: '中央大学大学院理工学研究科ヒューマンメディア工学研究室',
      job: 'ニューロマーケティング（脳科学と消費者心理学の融合分野）に関する研究',
    },
    {
      year: '2017',
      organization: '株式会社Agoop（ソフトバンク株式会社より出向）',
      job: 'モバイルアプリの企画・要件定義や通信ログ収集モジュールの精度検証・他部署折衝',
    },
    {
      year: '2019',
      organization: 'ソフトバンク株式会社',
      job: 'MLOps サービスのマネージメントコンソールとしてフロントエンド・BFF開発',
    },
  ];

  return (
    <Flex flexDirection="column" justifyContent="left" w="50%">
      <Heading
        fontSize="1.25em"
        textAlign={{ base: 'center', sm: 'start' }}
        mb="4em"
      >
        経歴
      </Heading>
      <VStack alignItems="flex-start" textAlign="justify" spacing={4}>
        {career.map((content) => (
          <CareerModule key={content.year} {...content} />
        ))}
      </VStack>
    </Flex>
  );
};
