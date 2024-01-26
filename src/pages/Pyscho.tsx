import { useState } from "react";
import PhysioScheduler from "../components/pyscho/PhysioScheduler";
import SidebarMenu from "../components/pyscho/sidebar";
import { DashboardIcon, InboxIcon, MessagesIcon, LogoutIcon, ProfileIcon, SettingsIcon, ClientsIcon, TasksIcon, NotificationsIcon } from '../components/pyscho/svgicons';
import Navbar from "../components/Navbar/index"
interface SidebarMenuItem {
    id: number;
    label: string;
    icon: JSX.Element;
    isNew?: boolean;
    content?: React.ReactNode; // Add a content property if you want to display content for each menu item
}

const Pyscho = () => {
    const [selectedItem, setSelectedItem] = useState<SidebarMenuItem | null>({ id: 1, label: 'Dashboard', icon: <DashboardIcon />, content: <PhysioScheduler /> });

    const handleSidebarItemClick = (item: SidebarMenuItem) => {
        console.log(item)
        setSelectedItem(item);
    };

    const menuItems: SidebarMenuItem[] = [
        { id: 1, label: 'Dashboard', icon: <DashboardIcon />, content: <PhysioScheduler /> },
        { id: 2, label: 'Inbox', icon: <InboxIcon />, isNew: true },
        { id: 3, label: 'Messages', icon: <MessagesIcon /> },
        { id: 4, label: 'Notifications', icon: <NotificationsIcon />, isNew: true },
        { id: 5, label: 'Appointments', icon: <TasksIcon /> },
        { id: 6, label: 'Clients', icon: <ClientsIcon />, isNew: true },
        { id: 7, label: 'Profile', icon: <ProfileIcon /> },
        { id: 8, label: 'Settings', icon: <SettingsIcon /> },
        { id: 9, label: 'Logout', icon: <LogoutIcon /> },
    ];

    return (
        <>
            <div className="min-h-screen flex flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
                <div className="fixed flex flex-col top-0 left-0 w-64 bg-slate-100 h-full border-r">
                    <div className="flex items-center justify-center h-14 border-b">
                        <div>Sidebar Navigation</div>
                    </div>
                    <SidebarMenu menuItems={menuItems} onItemClick={handleSidebarItemClick} />
                </div>
                <div className="ml-72">
                    <Navbar />
                    {selectedItem ? (
                        <div key={selectedItem.label}>
                            {/* Render the content based on the selected item */}
                            {selectedItem.content}
                        </div>
                    ) : (
                        <PhysioScheduler />
                    )}
                </div>
            </div>
        </>
    );
};

export default Pyscho;
