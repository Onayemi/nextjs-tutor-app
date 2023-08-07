

export default async function sitemap() {
    const baseUrl = "https://www.remlextech.com";

    return [
        { url: baseUrl, lastModified: new Date() },
        { url: `${baseUrl}/about`, lastModified: new Date() },
        { url: `${baseUrl}/service`, lastModified: new Date() },
        { url: `${baseUrl}/contact`, lastModified: new Date() },
        { url: `${baseUrl}/blog`, lastModified: new Date() }
    ]
}