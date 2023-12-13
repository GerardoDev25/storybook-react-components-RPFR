import { Meta, StoryObj } from '@storybook/react';
import { MyLabel } from '../../components/MyLabel';

const meta = {
  title: 'UI/MyLabel',
  component: MyLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MyLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'hola mundo',
    size: 'normal',
  },
};
export const Allcaps: Story = {
  args: {
    label: 'hola mundo',
    size: 'h1',
  },
};
export const Secundary: Story = {
  args: {
    label: 'hola mundo secudary',
    size: 'h2',
  },
};
