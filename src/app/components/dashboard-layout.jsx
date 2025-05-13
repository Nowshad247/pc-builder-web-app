"use client"

import { SidebarProvider } from "@/components/ui/sidebar"
import { MainSidebar } from "./main-sidebar"
import { TopBar } from "./top-bar"

export function DashboardLayout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen flex-col w-full">
        <TopBar />
        <div className="flex flex-1">
          <MainSidebar/>
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
