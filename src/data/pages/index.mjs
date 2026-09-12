/* The page registry. Order here is the order of the sitemap. */
import { home } from './home.mjs';
import { markets, sourceStandard, cpd, nature, durable, offtake, irec } from './markets.mjs';
import { esg, ghg, pcf, lca, epd, csr, dma, risk, supplier, reporting,
         ecovadis, cdp, cbam, eudr, iscc, sbti, netzero } from './esg.mjs';
import { industries, insights, about, contact, faq } from './company.mjs';

export const pages = [
  home,
  markets, sourceStandard, cpd, nature, durable, offtake, irec,
  esg, ghg, pcf, lca, epd, csr, dma, risk, supplier, reporting,
  ecovadis, cdp, cbam, eudr, iscc, sbti, netzero,
  industries, insights, about, contact, faq
];
