import type { Meta, StoryObj } from '@storybook/react';

import { Logo } from './Logo';

const meta = {
  title: 'UI/Logo',
  component: Logo,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

const sharedProps = {
  noText: false,
} satisfies Partial<Story['args']>;

export const Monochrome: Story = {
  args: {
    ...sharedProps,
  },
};

export const Colored: Story = {
  args: {
    ...sharedProps,
    variant: 'colored',
  },
};

export const PermanentColored: Story = {
  name: 'Permanent colored',
  args: {
    ...sharedProps,
    variant: 'permanentColored',
    noText: true,
  },
};
