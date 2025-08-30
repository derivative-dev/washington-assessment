'use client'

import React from 'react'
import WButton from "@/components/washington/WButton";
import { DrawerProvider, useDrawer } from "@/components/washington/drawer";
import { Save } from "lucide-react";

const DrawerDemoInner = () => {
  const { showDrawer, closeDrawer } = useDrawer();

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-4">
        <WButton
          content="Open Drawer"
          onClick={() =>
            showDrawer({
              title: "Create project",
              widthClass: "w-[520px]",
              body: (
                <div className="space-y-4">
                  <p className="text-body-s text-fg-secondary">
                    Fill in the form fields then click Submit to continue.
                  </p>
                  <div className="space-y-2">
                    <label className="text-sm">Project name</label>
                    <input className="w-full border rounded-md px-3 py-2 bg-background" placeholder="Acme" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm">Description</label>
                    <textarea className="w-full border rounded-md px-3 py-2 bg-background" placeholder="What are you building?" />
                  </div>
                </div>
              ),
              onPrimary: async () => {
                await new Promise((r) => setTimeout(r, 300));
                closeDrawer();
              },
              onSecondary: async () => {
                await new Promise((r) => setTimeout(r, 150));
                closeDrawer();
              },
              onDiscard: () => {
                closeDrawer();
              },
              primary: { content: "Submit" },
              secondary: { content: "Save draft", leftIcon: Save },
              discard: { content: "Discard" },
            })
          }
        />
      </div>
    </div>
  );
}

export default function DrawerDemo() {
  return (
    <DrawerProvider>
      <DrawerDemoInner />
    </DrawerProvider>
  )
}


