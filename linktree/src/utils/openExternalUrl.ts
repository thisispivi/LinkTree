/**
 * Opens external links in a new tab while preventing access to the opener window.
 */
export function openExternalUrl(url: string): void {
  window.open(url, "_blank", "noopener,noreferrer");
}
