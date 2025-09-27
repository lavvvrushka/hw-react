import React from 'react';

export function ModalFooter({ children }: { children: React.ReactNode }) {
  return <div style={{ textAlign: 'right', marginTop: 12 }}>{children}</div>;
}
