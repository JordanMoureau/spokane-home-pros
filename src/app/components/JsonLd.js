// app/components/JsonLd.jsx
import React from "react";

/**
 * Injects JSON-LD into <head>.
 * Usage: <JsonLd json={{ "@context":"https://schema.org", "@type":"Service", ... }} />
 * You can also pass an array of objects.
 */
export default function JsonLd({ json, id }) {
  const safeStringify = (data) =>
    JSON.stringify(data, (_k, v) =>
      typeof v === "undefined" || typeof v === "function" ? undefined : v
    );

  return (
    <script
      type="application/ld+json"
      id={id}
      dangerouslySetInnerHTML={{ __html: safeStringify(json) }}
    />
  );
}
