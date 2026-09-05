"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type ContactContextValue = {
  openContact: () => void;
  closeContact: () => void;
};

const ContactContext = createContext<ContactContextValue | null>(null);

export function ContactProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <ContactContext.Provider
      value={{
        openContact: () => setOpen(true),
        closeContact: () => setOpen(false),
      }}
    >
      {children}

      <ContactPanelMount open={open} onClose={() => setOpen(false)} />
    </ContactContext.Provider>
  );
}

function ContactPanelMount({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <ContactPanel
      open={open}
      onClose={onClose}
    />
  );
}

export function useContact() {
  const context = useContext(ContactContext);

  if (!context) {
    throw new Error("useContact must be used inside ContactProvider");
  }

  return context;
}

import ContactPanel from "./ContactPanel";