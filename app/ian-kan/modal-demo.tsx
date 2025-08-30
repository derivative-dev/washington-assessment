'use client'

import React from 'react'
import WButton from "@/components/washington/WButton";
import { ModalProvider, useModal } from "@/components/washington/modal";
import { Info } from "lucide-react";

const ModalDemoInner = () => {
  const { showModal } = useModal();

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-4">
        <WButton
          content="Open Modal"
          onClick={() =>
            showModal({
              headerIcon: Info,
              headerTitle: "Project information",
              title: "Confirm submission",
              description: "Review details and confirm to proceed.",
              width: "w-[640px]",
              body: (
                <div className="space-y-4">
                  <p className="text-body-s text-fg-secondary">
                    Please verify the entries below before submitting.
                  </p>
                  <div className="space-y-2">
                    <label className="text-sm">Owner</label>
                    <input className="w-full border rounded-md px-3 py-2 bg-background" placeholder="Jane Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm">Notes</label>
                    <textarea className="w-full border rounded-md px-3 py-2 bg-background" placeholder="Optional" />
                  </div>
                </div>
              ),
              primary: { content: "Submit" },
              secondary: { content: "Cancel" },
              onPrimary: async () => {
                await new Promise((r) => setTimeout(r, 300));
              },
              onSubmit: async () => {
                await new Promise((r) => setTimeout(r, 150));
              },
            })
          }
        />
      </div>
    </div>
  );
}

export default function ModalDemo() {
  return (
    <ModalProvider>
      <ModalDemoInner />
    </ModalProvider>
  )
}


