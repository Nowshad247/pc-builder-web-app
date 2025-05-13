"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BarChart3,
  ChevronDown,
  ChevronRight,
  FileText,
  Home,
  LayoutDashboard,
  MessageSquare,
  PanelLeft,
  Settings,
  Users,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function MainSidebar() {
  const [activeItem, setActiveItem] = useState("dashboard");
  const [expandedItems, setExpandedItems] = useState({
    dashboard: true,
  });

  const toggleExpand = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    setActiveItem(id);
  };

  const menuItems = [
    {
      id: "dashboard",
      title: "Dashboard",
      icon: LayoutDashboard,
      subItems: [
        { title: "Overview", url: "/dashboard/overview" },
        { title: "Analytics", url: "/dashboard/analytics" },
        { title: "Reports", url: "/dashboard/reports" },
        { title: "Notifications", url: "/dashboard/notifications" },
      ],
    },
    {
      id: "home",
      title: "Academic courses",
      icon: Home,
      subItems: [
        { title: "Degree", url: "/home/feed" },
        { title: "Honours", url: "/home/favorites" },
        { title: "Masters", url: "/home/masters" },
        { title: "Professional", url: "/home/professional" },
      ],
    },
    {
      id: "analytics",
      title: "Analytics",
      icon: BarChart3,
      subItems: [
        { title: "Daily", url: "/analytics/daily" },
        { title: "Weekly", url: "/analytics/weekly" },
        { title: "Monthly", url: "/analytics/monthly" },
        { title: "Yearly", url: "/analytics/yearly" },
      ],
    },
    {
      id: "customers",
      title: "Customers",
      icon: Users,
      subItems: [
        { title: "All Customers", url: "/customers/all" },
        { title: "Active", url: "/customers/active" },
        { title: "Inactive", url: "/customers/inactive" },
      ],
    },
    {
      id: "documents",
      title: "Documents",
      icon: FileText,
      subItems: [
        { title: "Recent", url: "/documents/recent" },
        { title: "Shared", url: "/documents/shared" },
        { title: "Archived", url: "/documents/archived" },
      ],
    },
    {
      id: "messages",
      title: "Notifications",
      icon: MessageSquare,
      subItems: [
        { title: "All Notification", url: "/messages/inbox" },
        { title: "Team Notification", url: "/messages/team" },
        { title: "APP User Notification", url: "/messages/app-users" },
        { title: "Send via Email", url: "/messages/email" },
        { title: "Send via SMS", url: "/messages/sms" },
      ],
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
            <PanelLeft className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold">Dashboard</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <Collapsible
                    open={expandedItems[item.id]}
                    onOpenChange={() => toggleExpand(item.id)}
                    className="w-full"
                  >
                    <CollapsibleTrigger className="w-full">
                      <SidebarMenuButton
                        isActive={activeItem === item.id}
                        className="w-full justify-between"
                      >
                        <div className="flex items-center">
                          <item.icon className="h-4 w-4 mr-2" />
                          <span>{item.title}</span>
                        </div>
                        {expandedItems[item.id] ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.subItems.map((subItem, index) => (
                          <SidebarMenuSubItem key={index}>
                            <SidebarMenuSubButton asChild>
                              <a href={subItem.url}>{subItem.title}</a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </Collapsible>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="/settings">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Link>
        </Button>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
