/* Assemble a page: hero, body blocks, FAQ, closing call to action. */

import { renderBlocks } from './blocks.mjs';
import { hero } from './hero.mjs';
import { renderPage } from './layout.mjs';
import { U } from '../data/nav.mjs';

export function buildPage(page, ctx) {
  const blocks = [...(page.blocks || [])];

  if (page.faq && page.faq.length && page.renderFaq !== false) {
    const faqBlock = {
      type: 'faq', tone: page.faqTone || 'bone',
      kicker: page.faqKicker || 'Questions', n: page.faqN || '',
      title: page.faqTitle || 'Answered plainly.',
      items: page.faq
    };
    // on a page whose whole purpose is the answers, they lead
    page.faqFirst ? blocks.unshift(faqBlock) : blocks.push(faqBlock);
  }
  if (page.cta !== false) {
    blocks.push({
      type: 'cta', tone: 'abyss', kicker: 'Next',
      title: (page.cta && page.cta.title) || 'Request a briefing.',
      body: (page.cta && page.cta.body) ||
        'Every engagement begins with a senior advisor and a confidential conversation to test fit and scope. A response within one business day.',
      buttons: (page.cta && page.cta.buttons) || [
        { href: U.contact, label: 'Request a briefing', variant: 'primary' },
        { href: U.source, label: 'The Source Standard', variant: 'ghost' }
      ]
    });
  }

  const body = hero(page, ctx) + '\n' + renderBlocks(blocks, ctx);
  return renderPage(page, body, {
    extraScripts: (page.hero && page.hero.kind === 'canvas')
      ? '<script src="assets/js/hero-canvas.js" defer></script>' : ''
  });
}
