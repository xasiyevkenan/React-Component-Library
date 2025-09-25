import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toast } from "../../components/Toast/Toast";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  tags: ["autodocs"],
  argTypes: {
    message: { control: "text" },
    type: { control: { type: "radio", options: ["success", "error", "warn"] } },
    duration: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    message: "This is a success toast!",
    type: "success",
    duration: 3000,
  },
};

export const Error: Story = {
  args: {
    message: "This is an error toast!",
    type: "error",
    duration: 5000,
  },
};

export const Warn: Story = {
  args: {
    message: "This is a warn toast!",
    type: "warn",
    duration: 4000,
  },
};
