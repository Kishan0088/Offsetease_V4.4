// Public URLs for the stylesheet and the behaviour script.
//
// These are plain, unhashed paths during development and are replaced with
// content-fingerprinted ones by build.mjs before any page is rendered.
//
// WHY THIS EXISTS
// site.css and app.js shipped under fixed names with max-age=3600, while the
// HTML is must-revalidate. A returning visitor therefore got new markup paired
// with up to an hour of old stylesheet — so every class added in a release was
// unstyled for them: labels invisible against the panel that had not been
// styled yet, list-style bullets back on the contact list, tables with no
// borders. The page looked broken and the server was serving exactly the right
// files. Fingerprinting makes that pairing impossible: new markup can only ever
// reference a stylesheet that exists, and the file can then be immutable.
export const assetUrls = {
  css: '/assets/css/site.css',
  js: '/assets/js/app.js',
};
