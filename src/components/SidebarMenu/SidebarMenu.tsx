import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import "./SidebarMenu.css";

export interface MenuItem {
  label: string;
  subLabels?: MenuItem[];
}

export interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({
  isOpen,
  onClose,
  items,
}) => {
  const [openIndexes, setOpenIndexes] = useState<string[]>([]);

  const toggleSubmenu = (index: string) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleClose = () => {
    setOpenIndexes([]);
    onClose();
  };

  const renderMenuItems = (menuItems: MenuItem[], parentIndex = "") => {
    return menuItems.map((item, idx) => {
      const currentIndex = parentIndex ? `${parentIndex}-${idx}` : `${idx}`;
      const isOpenSub = openIndexes.includes(currentIndex);

      return (
        <li key={currentIndex}>
          <div
            className="menu-item"
            onClick={() => item.subLabels && toggleSubmenu(currentIndex)}
          >
            {item.label}
            {item.subLabels && (
              <AiOutlineRight
                className={`arrow ${isOpenSub ? "rotate" : ""}`}
              />
            )}
          </div>

          {item.subLabels && (
            <ul className={`submenu ${isOpenSub ? "fade-in" : "fade-out"}`}>
              {renderMenuItems(item.subLabels, currentIndex)}
            </ul>
          )}
        </li>
      );
    });
  };

  return (
    <>
      <div
        className={`sidebar-overlay ${isOpen ? "visible" : ""}`}
        onClick={handleClose}
      />
      <div
        className={`sidebar ${isOpen ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="menu">{renderMenuItems(items)}</ul>
      </div>
    </>
  );
};
