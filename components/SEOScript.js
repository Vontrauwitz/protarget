import Script from 'next/script'

export default function SEOScript() {
  return (
    <Script
      id="seo-widget-script"
      src="https://www.local-marketing-reports.com/m/assets-v2/lead-gen/js/external/widget-builder.js"
      data-widget-id="a7e7ec873629ff35c55a5b317d03f8898d9f4c01"
      strategy="afterInteractive"
    />
  )
}