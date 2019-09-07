export const environment = {
    production: false,
    // Should be coming from a CI/CD pipeline as a secret
    apiUrl: 'http://localhost:8080',
    // The maximum amount of paragraphs the browser can handle at once
    // The application may show even less than that
    browserParagraphLimit: 100,
    // The number of items remaining in memory when the next batch of data should be requested
    scrollingThreshold: 30
};
