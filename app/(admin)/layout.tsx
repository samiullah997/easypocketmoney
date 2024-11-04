import AppSidebar from "@/components/dashboard/sidebar/Sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/nextjs";
import React from "react";
import "../globals.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ClerkLoading>
            <div className="flex items-center justify-center h-screen text-2xl">
              loading...
            </div>
          </ClerkLoading>
          <ClerkLoaded>
            <div className=" mx-auto">
              <div className="flex flex-col h-screen">
                <SidebarProvider>
                  <AppSidebar />
                  <SidebarTrigger />
                  <main className="flex flex-col w-full justify-center items-center bg-red-700">
                    {children}
                  </main>
                </SidebarProvider>
              </div>
            </div>
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default Layout;
