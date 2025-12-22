"use client";

import Script from "next/script";

import { configData } from "@/data/config";

export function Analytics() {
  const {
    googleAnalytics,
    simpleAnalytics,
    plausible,
    umami,
    microsoftClarity,
  } = configData.analytics;

  return (
    <>
      {/* Google Analytics */}
      {googleAnalytics?.measurementId && (
        <>
          <Script
            {...{
              src: `https://www.googletagmanager.com/gtag/js?id=${googleAnalytics.measurementId}`,
              strategy: "afterInteractive" as const,
            }}
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
          {...{
            src: "https://scripts.simpleanalyticscdn.com/latest.js",
            strategy: "afterInteractive" as const,
            "data-hostname": simpleAnalytics.hostname,
          }}
        />
      )}

      {/* Plausible Analytics */}
      {plausible?.domain && (
        <Script
          {...{
            src: plausible.src || "https://plausible.io/js/script.js",
            strategy: "afterInteractive" as const,
            "data-domain": plausible.domain,
          }}
        />
      )}

      {/* Umami Analytics */}
      {umami?.websiteId && (
        <Script
          {...{
            src: umami.src || "https://analytics.umami.is/script.js",
            strategy: "afterInteractive" as const,
            "data-website-id": umami.websiteId,
          }}
        />
      )}

      {/* Microsoft Clarity */}
      {microsoftClarity?.projectId && (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${microsoftClarity.projectId}");
          `}
        </Script>
      )}
    </>
  );
}
