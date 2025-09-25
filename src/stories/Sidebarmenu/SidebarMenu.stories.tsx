import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  SidebarMenu,
  type MenuItem,
} from "../../components/SidebarMenu/SidebarMenu";

const meta: Meta<typeof SidebarMenu> = {
  title: "Components/SidebarMenu",
  component: SidebarMenu,
  argTypes: {
    isOpen: { control: "boolean" },
    items: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const menu1Level: MenuItem[] = [
  {
    label: "Dashboard",
    subLabels: [{ label: "Analytics" }, { label: "Reports" }],
  },
  { label: "Settings" },
];

const menu2Level: MenuItem[] = [
  {
    label: "Projects",
    subLabels: [
      { label: "Active Projects" },
      {
        label: "Archived Projects",
        subLabels: [{ label: "2023 Archive" }, { label: "2022 Archive" }],
      },
    ],
  },
  { label: "Team" },
];

const Template = ({
  items,
  isOpen: initialOpen,
}: {
  items: MenuItem[];
  isOpen: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  return (
    <>
      <button
        style={{
          background: "hsl(199, 100.00%, 9.40%)",
          padding: "10px 20px",
          color: "white",
          border: "1px solid",
          borderRadius: "5px",
        }}
        onClick={() => setIsOpen(true)}
      >
        Open Sidebar
      </button>
      <SidebarMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        items={items}
      />
    </>
  );
};

export const OneLevel: Story = {
  render: (args) => <Template {...args} />,
  args: {
    items: menu1Level,
    isOpen: true,
  },
};

export const TwoLevel: Story = {
  render: (args) => <Template {...args} />,
  args: {
    items: menu2Level,
    isOpen: false,
  },
};
