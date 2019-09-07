// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
