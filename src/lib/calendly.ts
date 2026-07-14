import { siteConfig, calendlyTheme } from "../siteConfig";

interface CalendlyGlobal {
  initPopupWidget: (opts: { url: string }) => void;
}

function themedUrl(): string {
  const params = new URLSearchParams({
    hide_gdpr_banner: "1",
    primary_color: calendlyTheme.primaryColor,
    background_color: calendlyTheme.backgroundColor,
    text_color: calendlyTheme.textColor,
  });
  return `${siteConfig.calendlyUrl}?${params.toString()}`;
}

/**
 * Opens the Calendly scheduling popup. widget.js is loaded site-wide from
 * index.html; if it hasn't loaded (blocked, offline), we fall back to opening
 * the scheduling page in a new tab so booking always works.
 */
export function openCalendly(): void {
  const url = themedUrl();
  const w = window as unknown as { Calendly?: CalendlyGlobal };
  if (w.Calendly?.initPopupWidget) {
    w.Calendly.initPopupWidget({ url });
  } else {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}
