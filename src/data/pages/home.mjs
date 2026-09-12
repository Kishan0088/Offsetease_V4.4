import { U } from '../nav.mjs';
import { site } from '../site.mjs';
import * as F from '../../lib/figures.mjs';
import { arrow } from '../../lib/html.mjs';

/* The four dimensions of The Source Standard — reused on the home page and
   on the method page itself. */
export const DIMENSIONS = [
  { n: '01', title: 'Additionality & permanence',
    body: ['The reduction or removal would not', 'have happened otherwise, and it lasts,', 'buffered against reversal.'] },
  { n: '02', title: 'Measurement & verification',
    body: ['Conservative quantification and', 'independent MRV, increasingly', 'remote-sensed.'] },
  { n: '03', title: 'Market & legal integrity',
    body: ['Clear title, no double counting,', 'transparent retirement on a', 'recognised registry.'] },
  { n: '04', title: 'People & nature',
    body: ['Measurable community and biodiversity', 'benefit, aligned to the UN SDGs', 'and evidenced, not asserted.'] }
];

export const LIFECYCLE = [
  { title: 'Source', body: 'Originate at the point of production, in the markets where the scarcest supply is made.' },
  { title: 'Screen', body: 'Apply The Source Standard at origin, before development proceeds.' },
  { title: 'Verify', body: 'Independent, increasingly remote-sensed MRV against a conservative baseline.' },
  { title: 'Deliver', body: 'Transfer with clear title and a complete, traceable record.' },
  { title: 'Retire', body: 'Transparent retirement on a recognised registry, documented for audit.' }
];

const pipelineStats = () => {
  const p = site.pipeline;
  if (!p.tonnesUnderDevelopment) return null;
  return [
    { count: p.tonnesUnderDevelopment, label: 'Tonnes under development' },
    { count: p.projectsInOrigination, label: 'Projects in origination' },
    { count: p.countries, label: 'Countries' }
  ];
};

export const home = {
  file: U.home,
  url: '/',
  title: 'High-Integrity Carbon, Developed at the Source | Offsetease',
  description: 'Offsetease develops high-integrity carbon in emerging markets and delivers it to global companies whose claims must withstand every audit, rating and headline.',
  keywords: ['high-integrity carbon developer', 'high-quality carbon credits', 'Fortune 500 carbon', 'emerging markets carbon projects'],
  h1: 'Carbon you can put your name to.',
  og: 'og-default.jpg',

  hero: {
    kind: 'canvas',
    photo: 'hero-canopy',
    headline: 'Carbon you can|put your name to.',
    lede: 'Offsetease develops high-integrity carbon at its source, in the emerging markets where the highest-quality, highest-impact supply is made. We deliver it to global companies whose net-zero claims must survive the audit, the rating agency and the front page.',
    buttons: [
      { href: U.contact, label: 'Request a briefing', variant: 'primary' },
      { href: U.source, label: 'The Source Standard', variant: 'ghost' }
    ],
    stats: pipelineStats(),
    scrollHint: 'The market has divided'
  },

  blocks: [
    {
      type: 'figure', tone: 'paper', n: '01', kicker: 'The challenge',
      title: 'The market has divided.',
      paras: [
        'The voluntary carbon market has split in two. One half is cheap, abundant, and increasingly a liability. The other is scarce, scrutinised, and defensible.',
        'Fewer than one in twenty credits issued today meets the emerging quality bar. We operate only in the half that lasts, and we develop supply at its source so our clients are not left competing for it.'
      ],
      fig: F.dots({
        total: 20, on: 1,
        legendOn: 'Meets the emerging quality bar',
        legendOff: 'Abundant, cheap, increasingly a liability',
        caption: 'Fewer than one in twenty credits issued today meets the emerging quality bar.'
      })
    },
    {
      type: 'statement', tone: 'bone', n: '02', kicker: 'What a serious buyer needs',
      text: 'A climate claim is now a financial and legal position, not a line of marketing.',
      sub: 'It must be additional, permanent, independently verified, free of double counting, and demonstrably good for the people and ecosystems it touches. That is the whole of our work, and the whole of The Source Standard.'
    },
    {
      type: 'figure', tone: 'dark', n: '03', kicker: 'The method', layout: 'stacked',
      title: 'The Source Standard.',
      lede: 'Our signature. Every asset we develop or supply is screened at origin, before it can carry our name, across four dimensions that extend beyond the ICVCM Core Carbon Principles.',
      fig: F.radial4({
        items: DIMENSIONS,
        centre: ['Screened', 'at origin'],
        caption: 'Assets that do not pass are not delivered.'
      }),
      after: `<div class="btn-row" data-reveal style="--d:.2s"><a class="btn btn--primary" href="${U.source}">Read the method${arrow()}</a></div>`
    },
    {
      type: 'figure', tone: 'deep', n: '04', kicker: 'One lifecycle', layout: 'stacked',
      title: 'Documented throughout, not reported once.',
      lede: 'The standard runs across a single lifecycle and is documented at every stage. A client inherits a complete, audit-ready record rather than a certificate and a promise.',
      fig: F.spine({ steps: LIFECYCLE })
    },
    {
      type: 'band', photo: 'mangrove-river', n: '05', kicker: 'Impact is the point',
      title: 'The credits that survive scrutiny are the ones that do measurable good on the ground.',
      paras: ['Forests restored, biodiversity protected, livelihoods and clean cooking delivered. We treat community and ecosystem benefit as the foundation of value, not a footnote to it.'],
      buttons: [{ href: U.nature, label: 'Nature-based projects', variant: 'ghost' }]
    },
    {
      type: 'split', tone: 'paper', n: '06', kicker: 'Two mandates',
      title: 'What we are asked to do.',
      lede: 'Two mandates, one relationship. Most clients begin with one and grow into both.',
      left: {
        k: 'Environmental markets', h: 'h3',
        title: 'We develop and deliver the carbon.',
        paras: ['High-integrity carbon and renewable attributes end to end, from origination to retirement -- nature-based projects and durable removals, screened at source.'],
        href: U.markets, link: 'Environmental markets'
      },
      right: {
        k: 'ESG & sustainability', h: 'h3',
        title: 'We build the case that makes it hold.',
        paras: ['The measurement, strategy, disclosure and target architecture that makes a carbon position defensible to a CFO, an auditor and a board.'],
        href: U.esg, link: 'ESG & sustainability'
      }
    },
    {
      type: 'points', tone: 'bone', n: '07', kicker: 'Why Offsetease',
      title: 'Four reasons the work holds.',
      aside: `<p class="note" data-reveal>We develop; we do not merely broker. Senior partners run every mandate, and we stay as the rules and the market evolve.</p>`,
      items: [
        { title: 'Access at the origin', body: 'We develop where the scarcest, highest-impact supply is made, so our clients are not left competing for it on the open market.' },
        { title: 'A proprietary integrity method', body: 'The Source Standard is applied before development proceeds and before a credit is supplied -- not audited after the fact.' },
        { title: 'Senior counsel on every mandate', body: 'Partners run the work. The person who scopes the engagement is the person who delivers it.' },
        { title: 'One partner, end to end', body: 'Development, supply and disclosure under a single relationship, so the carbon position and the reporting agree with each other.' }
      ]
    },
    {
      type: 'raw', tone: 'abyss', tight: true, wide: true,
      html: `<div class="stack-lg">
        <p class="kicker"><span class="kicker__n">08</span>Registries and standards we work to</p>
        <div class="marquee" aria-hidden="true"><div class="marquee__t">
          ${[0, 1].map(() => `<span>${site.standards.join('</span><span>')}</span>`).join('')}
        </div></div>
        <p class="sr">${site.standards.join(', ')}.</p>
      </div>`
    }
  ],

  faq: [
    { q: 'What does Offsetease do?', a: 'We develop high-integrity carbon in emerging markets and deliver verified credits, renewable attributes and ESG advisory to global companies.' },
    { q: 'What is The Source Standard?', a: 'Our proprietary integrity method: a screen applied at origin across additionality and permanence, measurement and verification, market and legal integrity, and people and nature.' },
    { q: 'Where do you develop?', a: 'At the source, in India today, with development extending across South Asia and Africa.' }
  ],
  faqN: '09',
  cta: {
    title: 'Request a briefing.',
    body: 'A senior advisor responds within one business day.',
    buttons: [
      { href: U.contact, label: 'Request a briefing', variant: 'primary' },
      { href: U.about, label: 'How we work', variant: 'ghost' }
    ]
  }
};
