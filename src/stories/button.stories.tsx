import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../components/Button";

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    variant: "default",
    children: "Text",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = (args) => <Button {...args} />;
