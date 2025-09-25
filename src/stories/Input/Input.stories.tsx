import type { Meta, StoryObj } from "@storybook/react-vite";
import { useForm, Controller } from "react-hook-form";
import { Input } from "../../components/Input/Input";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "radio", options: ["password", "number", "text"] },
    },
    placeholder: { control: "text" },
    clearable: { control: "boolean" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

const RHFWrapper = ({ type, placeholder, clearable }: any) => {
  const { control } = useForm({
    defaultValues: { value: "" },
  });

  return (
    <Controller
      name="value"
      control={control}
      render={({ field }) => (
        <Input
          {...field}
          type={type}
          placeholder={placeholder}
          clearable={clearable}
        />
      )}
    />
  );
};

export const TextClearable: Story = {
  args: { type: "text", placeholder: "Type here...", clearable: true },
  render: (args) => <RHFWrapper {...args} />,
};

export const TextNotClearable: Story = {
  args: { type: "text", placeholder: "Type here...", clearable: false },
  render: (args) => <RHFWrapper {...args} />,
};

export const PasswordClearable: Story = {
  args: { type: "password", placeholder: "Enter password", clearable: true },
  render: (args) => <RHFWrapper {...args} />,
};

export const PasswordNotClearable: Story = {
  args: { type: "password", placeholder: "Enter password", clearable: false },
  render: (args) => <RHFWrapper {...args} />,
};

export const NumberClearable: Story = {
  args: { type: "number", placeholder: "Enter number", clearable: true },
  render: (args) => <RHFWrapper {...args} />,
};

export const NumberNotClearable: Story = {
  args: { type: "number", placeholder: "Enter number", clearable: false },
  render: (args) => <RHFWrapper {...args} />,
};
