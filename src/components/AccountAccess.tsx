'use client';

import { UserButton } from '@stackframe/stack';

export default function AccountAccess() {
  return (
    <div className="account-access">
      <p>Gérer votre compte :</p>
      <div className="user-button-wrapper">
        <UserButton />
      </div>
    </div>
  );
} 