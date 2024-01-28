import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "../components/Badge";

const meta: Meta<typeof Badge> = {
  component: Badge,
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  render: (props) => <Badge {...props}>Badge</Badge>,
};
export const Secondary: Story = {
  render: (props) => (
    <Badge {...props} variant="outline">
      Badge
    </Badge>
  ),
};
