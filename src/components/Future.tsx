import {
  Box,
  Flex,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

export const Future = () => {
  const wantToDo = [
    {
      title: 'プロダクトと苦楽を共に。',
      content:
        'ひとつのプロダクトの成長にフルコミットし、そのプロダクトひいてはユーザーを成功に導く難しさや楽しさを経験したいです。',
    },
    {
      title: 'クロスファンクショナルで。',
      content:
        'プロダクトの価値を実現するためなら、フロントエンドに拘らずバックエンドやスクラムマスターなどでも担当していきたいです。',
    },
    {
      title: '個人の学びを仲間の学びへ。',
      content:
        '仕事の中でも学習を大切にして、チームや社内外のメンバーと技術力を高め合いたいです。',
    },
  ];

  return (
    <Flex flexDirection="column" justifyContent="left" w="50%">
      <Heading
        fontSize="1.25em"
        textAlign={{ base: 'center', sm: 'start' }}
        mb="2em"
      >
        やってみたいこと
      </Heading>
      <Accordion allowToggle>
        {wantToDo.map((todo) => (
          <AccordionItem key={todo.title}>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {todo.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <Flex color="black" bgColor="beige" p="2em">
                {todo.content}
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Flex>
  );
};
