// Every internal URL the build emits goes through here, so the site works
// identically at a domain root and under a GitHub Pages repository sub-path.

import { site } from '../data/site.mjs';

const base = site.basePath.replace(/\/$/, '');

/** Prefix a site-absolute path (`/about.html`) with the deployment base path. */
export function url(path) {
  if (!path) return base || '/';
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  const [p, hash = ''] = String(path).split('#');
  const suffix = hash ? `#${hash}` : '';
  if (!p) return suffix; // pure fragment
  return `${base}${p.startsWith('/') ? '' : '/'}${p}${suffix}`;
}

/** Fully-qualified URL, for canonicals, Open Graph and JSON-LD. */
export function absolute(path) {
  return `${site.origin}${url(path)}`;
}
