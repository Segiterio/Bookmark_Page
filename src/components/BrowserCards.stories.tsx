import type { Meta, StoryObj } from '@storybook/react';

import BrowserCards from './BrowserCards';

const meta = {
  component: BrowserCards,
} satisfies Meta<typeof BrowserCards>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};