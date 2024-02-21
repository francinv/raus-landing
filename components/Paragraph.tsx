import { Group, Image, Space, Text, TextProps } from '@mantine/core';

interface ParagraphProps extends TextProps {
  text: string;
  leftImageSource?: string;
  rightImageSource?: string;
  wantBold?: boolean;
}

const Paragraph = ({
  rightImageSource,
  leftImageSource,
  text,
  wantBold,
  ...rest
}: ParagraphProps) => (
  <>
    <Group justify="space-between" wrap="nowrap" align="flex-start">
      {leftImageSource && <Image src={leftImageSource} />}
      <Text fw={wantBold ? 700 : 400} {...rest}>
        {text}
      </Text>
      {rightImageSource && <Image src={rightImageSource} height={300} />}
    </Group>
    <Space h="md" />
  </>
);

export default Paragraph;
