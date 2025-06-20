"use client";

import ExitIntentModal from "./ExitIntentModal";

export default function ExitIntentWrapper() {
  const handleExitLead = (phone) => {
    console.log("Exit-intent phone lead captured:", phone);
    // You can send to an API, Zapier, or fire a conversion here
  };

  return <ExitIntentModal onSubmit={handleExitLead} />;
}
