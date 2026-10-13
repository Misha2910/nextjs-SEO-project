export const siteUrl = "https://localhost:3000";

export const siteName = "Home Services";

export function absoluteUrl(path: string): string {
    return new URL(path, `${siteUrl}/`).toString();
}
