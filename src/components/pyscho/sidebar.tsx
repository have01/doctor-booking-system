import React from 'react';

interface SidebarMenuItem {
    id: number;
    label: string;
    icon: JSX.Element;
    isNew?: boolean;
}

interface SidebarMenuProps {
    menuItems: SidebarMenuItem[];
    onItemClick: (item: SidebarMenuItem) => void;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ menuItems, onItemClick }) => {
    return (
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
            <ul className="flex flex-col py-4 space-y-1">
                <li className="px-5">
                    <div className="flex flex-row items-center h-8">
                        <div className="text-sm font-light tracking-wide text-gray-500">Menu</div>
                    </div>
                </li>
                {menuItems.map((item) => (
                    <li key={item.id}>
                        <button
                            onClick={() => onItemClick(item)}
                            className={`relative flex flex-row items-center w-full h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6`}
                        >
                            <span className="inline-flex justify-center items-center ml-4">{item.icon}</span>
                            <span className="ml-2 text-sm tracking-wide truncate">{item.label}</span>
                            {item.isNew && (
                                <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">
                                    New
                                </span>
                            )}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SidebarMenu
