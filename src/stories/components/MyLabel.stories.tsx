import { Meta, StoryObj } from '@storybook/react';
import { MyLabel } from '../../components/MyLabel';

const meta = {
  title: 'UI/MyLabel',
  component: MyLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select' },
    allCaps: {
      control: 'boolean',
      defaultValue: false,
      description:
        'this parameter define if the text will be uppercase or normal',
    },
    color: {
      control: 'select',
      type: 'string',
      defaultValue: 'primary',
      description: 'this property define the component color',
    },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'hola mundo Basic',
    size: 'normal',
    allCaps: false,
  },
};

export const Allcaps: Story = {
  args: {
    label: 'hola mundo AllCAps',
    size: 'h1',
    allCaps: true,
  },
};

export const Secundary: Story = {
  args: {
    label: 'hola mundo secudary',
    size: 'h2',
    color: 'secundary',
  },
};

export const Tertiary: Story = {
  args: {
    label: 'hola mundo Tertiary',
    size: 'normal',
    color: 'tertiary',
  },
};
