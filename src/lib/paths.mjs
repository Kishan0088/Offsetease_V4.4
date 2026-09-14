// Every internal URL the build emits goes through here, so the site works
// identically at a domain root and under a GitHub Pages repository sub-path.

import { site } from '../data/site.mjs';

const base = site.basePath.replace(/\/$/, '');

// Pages are written to disk as flat `about.html` files, but every URL the site
// publishes is extensionless. Netlify and GitHub Pages both resolve `/about`
// to `about.html`, and `_redirects` sends the `.html` form to the clean one.
//
// This has to happen here rather than in the served markup. Netlify's Pretty
// URLs post-processing rewrites relative links but leaves absolute URLs alone,
// so canonical, og:url and every JSON-LD @id kept a `.html` suffix that no link
// on the site pointed at — the canonical was voting for a URL nothing used.
export function pretty(p) {
  if (p === '/index.html') return '/';
  return p.replace(/\.html$/, '');
}

/** Prefix a site-absolute path (`/about.html`) with the deployment base path. */
export function url(path) {
  if (!path) return base || '/';
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  const [p, hash = ''] = String(path).split('#');
  const suffix = hash ? `#${hash}` : '';
  if (!p) return suffix; // pure fragment
  return `${base}${p.startsWith('/') ? '' : '/'}${pretty(p)}${suffix}`;
}

/** Fully-qualified URL, for canonicals, Open Graph and JSON-LD. */
export function absolute(path) {
  return `${site.origin}${url(path)}`;
}
