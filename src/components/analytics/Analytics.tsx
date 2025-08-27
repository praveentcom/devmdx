"use client";

import { configData } from "@/data/config";
import Script from "next/script";

export function Analytics() {
  const { googleAnalytics, simpleAnalytics } = configData.analytics;

  return (
    <>
      {/* Google Analytics */}
      {googleAnalytics?.measurementId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalytics.measurementId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAnalytics.measurementId}');
            `}
          </Script>
        </>
      )}

      {/* Simple Analytics */}
      {simpleAnalytics?.hostname && (
        <Script
          src={`https://scripts.simpleanalyticscdn.com/latest.js`}
          strategy="afterInteractive"
          data-hostname={simpleAnalytics.hostname}
        />
      )}
    </>
  );
}
