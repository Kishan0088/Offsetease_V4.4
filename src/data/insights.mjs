// The Insights library — the full articles, hosted here.
//
// Bodies were migrated from the client's published articles. Every internal
// link in them has been remapped to this build's own pages (16 distinct
// service pages are linked from article prose), and nothing links back to the
// old domain. External links are to primary sources only — the European
// Commission, SEBI, ISO, the GHG Protocol, SBTi, CDP, ICVCM and similar.
//
// `published` / `modified` were read from each article's own markup rather
// than inferred from its month label.

export const insights = [
  {
    slug: 'cbam-iron-steel-strategy',
    title: 'CBAM strategy for iron & steel: what exporters must decide in 2026',
    category: 'Regulation',
    published: '2026-08-01',
    modified: '2026-08-01',
    lastUpdatedLabel: '',
    minutes: 10,
    blurb:
      'CBAM is now a carbon price at the EU border for steel — the widest scope, the highest emissions. Verified data vs default values, and how to turn it into an edge.',
    metaTitle: 'CBAM Strategy for Iron & Steel Exporters (2026)',
    metaDescription: 'From 2026 CBAM is a carbon price at the EU border for iron and steel. What exporters must decide now: verified emissions data versus default values, and how to turn it into an edge.',
    related: '/cbam-compliance.html',
    disclaimer: '',
    refs: [
    ],
    body: `<p class="article-lead">For two years, CBAM was a reporting drill. Quarterly numbers, no money, low stakes. That era is over. Since 1 January 2026, the EU's Carbon Border Adjustment Mechanism is in its <strong>definitive period</strong> — no longer a data-collection exercise, but a carbon price at the EU border. And for iron and steel — the sector with the widest product scope and the highest embedded emissions — it is where the money will be.</p>
<p>If you make steel or steel products and sell into Europe — directly, or as a supplier to a company that does — CBAM is now a commercial variable, not a compliance footnote. Here is the strategy you actually need. (<a href="https://taxation-customs.ec.europa.eu/system/files/2026-08/Guidance%20No.%201%20-%20Introduction%20to%20CBAM%20concepts.pdf" target="_blank" rel="noopener">EU: Introduction to CBAM concepts</a>.)</p>

<h2>First, what changed in 2026 (60-second reset)</h2>
<p>If your knowledge of CBAM is based on the 2023–2024 guidance, update it. The Omnibus simplification (Regulation (EU) 2025/2083, in force since October 2025) reshaped the rules:</p>
<ul>
<li>The old €150-per-consignment exemption is gone. It is replaced by a single <strong>50-tonne per-importer, per-year mass threshold</strong> across iron &amp; steel, aluminium, fertilisers and cement. Below it, no CBAM obligations. Above it, full obligations.</li>
<li>Certificate sales start <strong>1 February 2027</strong> — not 2026. No cash leaves in 2026, but the liability is accruing from day one.</li>
<li>First annual declaration and certificate surrender: <strong>30 September 2027</strong>, covering all 2026 imports.</li>
<li>The quarterly holding requirement was cut from 80% to <strong>50%</strong> of accrued emissions.</li>
<li>New default values apply (<a href="https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=OJ:L_202601740" target="_blank" rel="noopener">Implementing Regulation (EU) 2026/1740</a>), and verification is only required when you use actual emission values.</li>
</ul>
<p>The paperwork got lighter, but the price signal got real.</p>

<h2>Who is actually in scope — a concrete example</h2>
<p>Forget the giant integrated mill for a moment. Picture a more common business: a non-EU OEM that machines small steel engineering parts — brackets, housings, fasteners, sub-assemblies — and ships them to a larger EU manufacturer that builds them into finished machines.</p>
<p>Those parts sit in CN Chapter 73 ("articles of iron or steel"). They are CBAM goods. If that OEM ships more than 50 tonnes a year into the EU (most regular suppliers do), its EU customer now carries a CBAM cost tied to the embedded emissions of those parts — and will come asking the OEM for the data behind them. That request is the moment CBAM stops being someone else's problem.</p>
<figure class="fig">
<span class="fig__tag">Figure 1</span>
<p class="fig__title">Who does what — the CBAM data &amp; compliance flow</p>
<p class="fig__sub">Emissions data travels down the chain; the reporting and payment obligation sits with the EU importer.</p>
<div class="cbam-flow">
<div class="cbam-flow__box"><span class="cbam-flow__eyebrow">Non-EU mill</span><span class="cbam-flow__name">Installation / Operator</span><span class="cbam-flow__desc">Monitors direct, indirect &amp; precursor emissions</span></div>
<span class="cbam-flow__arrow" aria-hidden="true">→</span>
<div class="cbam-flow__box"><span class="cbam-flow__eyebrow">You</span><span class="cbam-flow__name">Non-EU OEM / Exporter</span><span class="cbam-flow__desc">Compiles &amp; passes verified emissions data</span></div>
<span class="cbam-flow__arrow" aria-hidden="true">→</span>
<div class="cbam-flow__box cbam-flow__box--hl"><span class="cbam-flow__eyebrow">EU side</span><span class="cbam-flow__name">EU Importer (Authorised CBAM Declarant)</span><span class="cbam-flow__desc">Files declaration, buys &amp; surrenders certificates</span></div>
<span class="cbam-flow__arrow" aria-hidden="true">→</span>
<div class="cbam-flow__box"><span class="cbam-flow__eyebrow">EU Commission</span><span class="cbam-flow__name">CBAM Registry</span><span class="cbam-flow__desc">Annual declaration &amp; certificate surrender</span></div>
</div>
<p class="fig__note fig__note--accent"><strong>Accredited verifier</strong> sits alongside the exporter: verification is required only when <strong>actual</strong> emission values are used (default values need no verification).</p>
</figure>
<p>The obligation legally sits with the EU importer (the "authorised CBAM declarant"). But the data they need can only come from you. In practice, whoever controls the emissions numbers controls the cost. (<a href="https://taxation-customs.ec.europa.eu/system/files/2026-08/Guidance%20No.%202%20-%20Quick%20guide%20for%20non-EU%20operators%20on%20CBAM%20implementation.pdf" target="_blank" rel="noopener">EU: Quick guide for non-EU operators</a>.)</p>

<h2>The core idea in plain English</h2>
<p>CBAM prices <strong>embedded emissions</strong> — the emissions released producing your goods. Three parts matter:</p>
<ul>
<li><strong>Direct emissions:</strong> from your own production process (furnaces, fuels, reactions).</li>
<li><strong>Indirect emissions:</strong> from the electricity you consumed.</li>
<li><strong>Precursor emissions:</strong> the embedded emissions of the steel inputs you bought (crude steel, pig iron, DRI, ferro-alloys).</li>
</ul>
<p>Your production route is the anchor. The EU has set official steel benchmarks: roughly <strong>1.370 tCO₂e</strong> per tonne for blast-furnace (BF-BOF) steel, <strong>0.481</strong> for gas-based DRI-EAF, and just <strong>0.072</strong> for scrap-based EAF. High recycled-scrap content is a genuine structural advantage — scrap carries zero embedded emissions under the methodology.</p>

<h2>The one decision that drives your cost: actual data vs default values</h2>
<p>This is the strategic heart of CBAM for steel. If you supply verified actual emissions, your EU customer pays on your real footprint. If you don't, they must use default values — set deliberately high (well above the benchmark), and carrying a mark-up that climbs from 10% in 2026 to 20% in 2027 and 30% from 2028. Here is the gap, illustrated per tonne of steel product, at the Q1 2026 certificate price of €75.36/tCO₂e (<a href="https://taxation-customs.ec.europa.eu/carbon-border-adjustment-mechanism/price-cbam-certificates_en" target="_blank" rel="noopener">EU: price of CBAM certificates</a>).</p>
<figure class="fig">
<span class="fig__tag">Figure 3</span>
<p class="fig__title">Verified data vs default values — the cost gap</p>
<p class="fig__sub">The single biggest lever an exporter controls. Illustrative example, per tonne of steel product.</p>
<div class="cost-cards">
<div class="cost-card"><div class="cost-card__head">Verified actual data</div>
<div class="cost-card__row"><span>Embedded emissions</span><b>1.80 tCO₂e/t</b></div>
<div class="cost-card__row"><span>Mark-up penalty</span><b>None</b></div>
<div class="cost-card__row"><span>Certificate price</span><b>€75.36 /t</b></div>
<div class="cost-card__row"><span>Gross basis / tonne</span><b class="cost-card__total">≈ €135.6</b></div></div>
<div class="cost-card"><div class="cost-card__head cost-card__head--dark">Default value (no verified data)</div>
<div class="cost-card__row"><span>Embedded emissions</span><b>3.00 tCO₂e/t</b></div>
<div class="cost-card__row"><span>Mark-up (2026: +10%)</span><b>→ 3.30 tCO₂e/t</b></div>
<div class="cost-card__row"><span>Certificate price</span><b>€75.36 /t</b></div>
<div class="cost-card__row"><span>Gross basis / tonne</span><b class="cost-card__total">≈ €248.7</b></div></div>
</div>
<p class="fig__note"><strong>Why the net number looks small in 2026:</strong> only the phased-out share of EU free allocation is charged. In 2026 the CBAM factor is ~2.5%, so net ≈ €3.4/t (verified) vs €6.2/t (default). The <strong>gap</strong>, not today's absolute cost, is the point — and it scales every year (see Figure 4).</p>
<p class="fig__note fig__note--accent"><strong>On 500 t/yr, the verified-vs-default gap is ~€1.4k in 2026 → ~€27k by 2030 → ~€57k by 2034.</strong> Verified data turns a penalty into a competitive advantage.</p>
</figure>
<p>A supplier who cannot produce credible numbers is effectively taxed on someone else's worst-case emissions. Verified data is the difference between being the expensive supplier and the preferred one. (See <a href="https://taxation-customs.ec.europa.eu/system/files/2026-08/Guidance%20No.%203%20-%20CBAM%20methods%20for%20the%20calculation%20of%20emissions%20embedded%20in%20goods.pdf" target="_blank" rel="noopener">EU Guidance No. 3: calculation of embedded emissions</a> and <a href="https://taxation-customs.ec.europa.eu/system/files/2026-08/Guidance%20No.%204%20-%20CBAM%20calculation%20of%20the%20free%20allocation%20adjustment%20to%20the%20number%20of%20CBAM%20certificates%20to%20be%20surrendered.pdf" target="_blank" rel="noopener">Guidance No. 4: the free-allocation adjustment</a>.)</p>

<h2>What the OEM should actually do</h2>
<p>Strategy only matters if it turns into steps. For a non-EU steel supplier, the path is clear.</p>
<figure class="fig"><span class="fig__tag">Figure 2</span><p class="fig__title">What a non-EU steel OEM should actually do</p><p class="fig__sub">Example: a supplier machining small steel engineering parts (CN Chapter 73) for a larger EU manufacturer.</p><div class="cbam-steps"><div class="cbam-steps__item"><span class="cbam-steps__num">1</span><div><b class="cbam-steps__b">Confirm you make CBAM goods</b><span class="cbam-steps__d">Match your products' CN codes against Chapters 72 &amp; 73 (scrap under 7204 is excluded).</span></div></div><div class="cbam-steps__item"><span class="cbam-steps__num">2</span><div><b class="cbam-steps__b">Check the 50-tonne threshold with your EU buyer</b><span class="cbam-steps__d">Below 50 t net mass per importer per year = out of scope. Most regular suppliers are above it.</span></div></div><div class="cbam-steps__item"><span class="cbam-steps__num">3</span><div><b class="cbam-steps__b">Identify your production route</b><span class="cbam-steps__d">BF-BOF, DRI-EAF or scrap-EAF — the route sets the benchmark and your emissions story.</span></div></div><div class="cbam-steps__item"><span class="cbam-steps__num">4</span><div><b class="cbam-steps__b">Monitor direct + indirect + precursor emissions</b><span class="cbam-steps__d">Attribute installation emissions to each product; add embedded emissions of purchased precursors.</span></div></div><div class="cbam-steps__item"><span class="cbam-steps__num">5</span><div><b class="cbam-steps__b">Get actual values verified</b><span class="cbam-steps__d">Use an accredited verifier so your EU customer can rely on your real numbers, not defaults.</span></div></div><div class="cbam-steps__item"><span class="cbam-steps__num">6</span><div><b class="cbam-steps__b">Communicate data to the importer</b><span class="cbam-steps__d">Use the Commission's Annex IV emissions-communication template for a clean, common format.</span></div></div><div class="cbam-steps__item"><span class="cbam-steps__num">7</span><div><b class="cbam-steps__b">Evidence any carbon price paid at home</b><span class="cbam-steps__d">A verified domestic carbon price can be deducted from the certificates owed (Article 9).</span></div></div></div></figure>
<p>Note step 7 carefully: if your country prices carbon and you can prove it, that reduces the EU-side cost. That is a negotiating asset with your buyer. (<a href="https://taxation-customs.ec.europa.eu/carbon-border-adjustment-mechanism/cbam-verification_en" target="_blank" rel="noopener">EU: verification of CBAM emissions</a>.)</p>

<h2>Why "it's tiny in 2026" is the trap</h2>
<p>The most dangerous misreading of CBAM is looking at 2026 and relaxing. In 2026, EU steelmakers still keep about 97.5% of their free ETS allowances, so only ~2.5% of the embedded emissions is actually charged. The net cost per tonne looks trivial. It does not stay trivial.</p>
<figure class="fig"><span class="fig__tag">Figure 4</span><p class="fig__title">Why "small today" is a trap — the 2026→2034 ramp</p><p class="fig__sub">Bars show the share of embedded emissions actually charged (the CBAM factor) as EU free allocation is withdrawn.</p><div class="ramp"><div><div class="ramp__bar"><span class="ramp__fill" style="width:2.5%"></span></div><div class="ramp__year">2026</div><div class="ramp__pct">~2.5% charged</div><div class="ramp__d">Liability accrues; no cash yet</div></div><div><div class="ramp__bar"><span class="ramp__fill" style="width:5%"></span></div><div class="ramp__year">2027</div><div class="ramp__pct">~5% charged</div><div class="ramp__d">Certificates &amp; first surrender</div></div><div><div class="ramp__bar"><span class="ramp__fill" style="width:48.5%"></span></div><div class="ramp__year">2030</div><div class="ramp__pct">~48.5% charged</div><div class="ramp__d">Cost becomes material</div></div><div><div class="ramp__bar"><span class="ramp__fill" style="width:100%"></span></div><div class="ramp__year">2034</div><div class="ramp__pct">100% charged</div><div class="ramp__d">Full embedded emissions</div></div></div><div class="ramp__chips"><span class="ramp__chip"><b>1 Feb 2027</b> — certificate sales open</span><span class="ramp__chip"><b>30 Sep 2027</b> — first annual declaration &amp; surrender (2026 imports)</span><span class="ramp__chip"><b>Each quarter from 2027</b> — hold ≥50% of accrued emissions</span></div><p class="fig__sub" style="margin:1.25rem 0 0">Free allocation phases out from ~97.5% (2026) to 0% (2034); percentages are indicative of the charged share.</p></figure>
<p>Free allocation is withdrawn on a fixed schedule — from ~97.5% shielded in 2026 to zero in 2034. The charged share climbs to roughly half by 2030 and 100% by 2034. The exporter who builds a verified emissions capability now, while the stakes are low, walks into 2030 with a priced-in advantage. The one who waits gets repriced by default values at exactly the moment the numbers get big.</p>

<h2>The strategic takeaways</h2>
<ol>
<li><strong>Treat CBAM data like financial data</strong> — with owners, procedures and an audit trail from the furnace to the customer.</li>
<li><strong>Make verified actual emissions a product feature.</strong> It is now a procurement criterion for EU buyers, not a nice-to-have.</li>
<li><strong>Lean into low-carbon routes and scrap content</strong> — the methodology rewards them explicitly.</li>
<li><strong>Capture your domestic carbon price.</strong> If you pay one, don't leave the Article 9 deduction on the table.</li>
<li><strong>Start before your buyer asks.</strong> The first supplier with clean, verified numbers becomes the default choice; the last one becomes the default value.</li>
</ol>
<p>CBAM will reward the iron &amp; steel businesses that can prove how clean they are — and quietly penalise those that can't. In this market, your emissions data is becoming as commercially important as your price and your lead time.</p>
<p>At Offsetease, we help iron &amp; steel producers and exporters turn CBAM from a cost into an edge — mapping production routes, building verified emissions data your EU customers can rely on instead of default values, and capturing Article 9 carbon-price deductions where you already pay a carbon price at home. If you're working out your CBAM position, <a href="/contact.html">let's talk</a>.</p></div>`,
  },
  {
    slug: 'cbam-definitive-period-2026',
    title: 'CBAM in 2026: the definitive period, the Omnibus simplification, and what exporters must do now',
    category: 'Regulation',
    published: '2026-06-01',
    modified: '2026-07-28',
    lastUpdatedLabel: 'Jul 2026',
    minutes: 9,
    blurb:
      'From 1 January 2026 the EU Carbon Border Adjustment Mechanism stops being a reporting exercise and becomes a cost. What changed, who is now exempt, and the moves that protect your margin.',
    metaTitle: 'CBAM 2026: Definitive Period & Omnibus Explained',
    metaDescription: 'From 1 January 2026 the EU Carbon Border Adjustment Mechanism stops being a reporting exercise and becomes a cost. Here is what changed, who is now exempt…',
    related: '/cbam-compliance.html',
    disclaimer: 'This article is general information, not legal, financial or compliance advice. The regulations and standards referenced here evolve; verify the current position with the issuing body, or ask us. Published June 2026.',
    refs: [
      { url: 'https://taxation-customs.ec.europa.eu/carbon-border-adjustment-mechanism_en', label: 'European Commission — Carbon Border Adjustment Mechanism' },
      { url: 'https://eur-lex.europa.eu/eli/reg/2023/956/oj', label: 'Regulation (EU) 2023/956 establishing the CBAM (EUR-Lex)' },
      { url: 'https://commission.europa.eu/business-economy-euro/doing-business-eu/sustainability-due-diligence-responsible-business/sustainability-reporting_en', label: 'European Commission — Omnibus simplification package (2025)' },
    ],
    body: `<p>The EU Carbon Border Adjustment Mechanism (CBAM) entered its definitive period on 1 January 2026. The transitional phase that ran from October 2023 was reporting-only; the definitive period attaches a financial cost to the carbon embedded in imported goods. For producers exporting covered products into the EU, embedded carbon is now a line item at the border — and the quality of your emissions data decides how large it is. Our <a href="/cbam-compliance.html">CBAM compliance consulting</a> prepares exporters — particularly in chemicals and metals — for the definitive period.</p><h2>What CBAM is, and what it covers</h2><p>CBAM is established by Regulation (EU) 2023/956. It applies the EU carbon price to imports of carbon-intensive goods in six sectors: iron and steel, aluminium, cement, fertilisers, hydrogen, and electricity. From 2026, authorised CBAM declarants (the EU importers) must buy and surrender CBAM certificates corresponding to the embedded emissions of the goods they import, priced against the EU Emissions Trading System. Any carbon price already paid in the country of production can be deducted — so a credible domestic carbon price genuinely reduces the CBAM bill.</p><h2>What changed when the definitive period began</h2><ul><li>Reporting became paying: quarterly transitional reports give way to an annual CBAM declaration, with certificates surrendered against verified embedded emissions.</li><li>Only authorised CBAM declarants may import covered goods — registration in the CBAM registry is now a prerequisite, not a formality.</li><li>Verified, installation-level emissions data carries real financial weight; estimates and defaults become the expensive fallback rather than an accepted norm.</li></ul><h2>The 2025 Omnibus simplification: the 50-tonne threshold</h2><p>In early 2025 the European Commission proposed a simplification package (the Omnibus) that introduced a de minimis mass threshold of 50 tonnes of covered goods imported per year. The Commission estimated this would exempt roughly 90% of importers — overwhelmingly small and occasional ones — while still capturing around 99% of the embedded emissions in scope. The practical effect: fewer companies face the administrative burden, but the carbon coverage of the mechanism is essentially unchanged. If you ship material volumes of covered goods into the EU, you are still firmly in scope.</p><p>Because simplification details were finalised through 2025 and implementing rules continue to evolve, confirm the current thresholds and procedural requirements against the Commission's CBAM guidance for your specific products and volumes.</p><h2>Default values versus actual data — a margin decision</h2><p>Where an importer cannot supply verified actual emissions, default values apply. Those defaults are deliberately conservative — set high enough that an efficient producer almost always pays less by providing real, verified installation-level data. Continuing to let your EU customers fall back on defaults is, in effect, choosing to pay a premium on every tonne you ship. The single highest-return action for most exporters is to replace defaults with verified actuals.</p><h2>What exporters should do now</h2><ul><li>Identify exactly which products (by CN code) and which EU destinations fall in scope.</li><li>Calculate embedded emissions at installation level, following the CBAM methodology, using primary data where it is material.</li><li>Get that data verification-ready, and establish a clean channel to supply it to your EU customers and their declarants.</li><li>Price the carbon cost into contracts rather than absorbing it silently as margin erosion.</li><li>Build a decarbonisation response — every tonne of genuine reduction is now a direct, priced advantage.</li><li>Watch scope: the Commission is reviewing extension to downstream products and additional sectors, with chemicals and polymers widely expected candidates.</li></ul><h2>The strategic read</h2><p>CBAM is not only a compliance task; it is a competitiveness mechanism. It systematically rewards lower-carbon producers and penalises those who cannot — or do not bother to — prove their carbon performance. Exporters who treat it as a measurement-and-pricing discipline will quietly take share from those who treat it as paperwork.</p>`,
  },
  {
    slug: 'sbti-net-zero-standard-v2',
    title: 'SBTi\'s Corporate Net-Zero Standard V2: what the draft changes — and how to prepare',
    category: 'Net Zero',
    published: '2026-06-01',
    modified: '2026-07-28',
    lastUpdatedLabel: 'Jul 2026',
    minutes: 10,
    blurb:
      'The Science Based Targets initiative opened a draft of Version 2 of its Corporate Net-Zero Standard. It is not final — but the direction is clear, and target-setting companies should prepare now.',
    metaTitle: 'SBTi Corporate Net-Zero Standard V2: What Changes',
    metaDescription: 'In 2025 the Science Based Targets initiative opened a draft of Version 2 of its Corporate Net-Zero Standard for consultation. It is not final — but the…',
    related: '/sbti-target-setting.html',
    disclaimer: 'This article is general information, not legal, financial or compliance advice. The regulations and standards referenced here evolve; verify the current position with the issuing body, or ask us. Published June 2026.',
    refs: [
      { url: 'https://sciencebasedtargets.org/net-zero', label: 'Science Based Targets initiative — Corporate Net-Zero Standard' },
      { url: 'https://sciencebasedtargets.org/resources/files/Corporate-Net-Zero-Standard-V2.pdf', label: 'SBTi — Corporate Net-Zero Standard V2 (draft for consultation)' },
      { url: 'https://ghgprotocol.org/corporate-standard', label: 'GHG Protocol — Corporate Standard (base-year and inventory rules)' },
    ],
    body: `<p>The Science Based Targets initiative (SBTi) published a draft of Version 2 of its Corporate Net-Zero Standard for public consultation in 2025 — the first major revision of the standard since it launched in 2021. As of this writing the standard is still in development, with consultation and piloting feeding a finalisation expected over the following one to two years. Nothing in the draft is yet binding. But the direction of travel is unambiguous, and companies setting or revalidating targets should design with V2 in mind rather than be surprised by it. We support this through <a href="/sbti-target-setting.html">SBTi target-setting and validation</a> and the wider <a href="/net-zero-decarbonization.html">net-zero and decarbonization strategy</a> that has to stand behind it.</p><h2>Why a Version 2 at all</h2><p>Version 1 established the now-familiar architecture: near-term and long-term targets, roughly 90% absolute emissions reduction by 2050, and neutralisation of only the small residual with permanent removals. In practice it drew consistent criticism on a few fronts — the feasibility of blanket Scope 3 coverage, the quality and accuracy of underlying data, the treatment of carbon removals, and weak accountability for actual progress between target-setting and the target year. V2 is SBTi's attempt to answer those critiques without abandoning scientific rigour.</p><h2>The proposed changes that matter most</h2><ul><li>Company categories: a proposed split between larger / higher-capacity companies (stricter requirements) and SMEs or companies in lower-income economies (streamlined requirements), so the burden scales with capability.</li><li>A rethink of Scope 3: moving away from a single blanket coverage percentage toward targeting the most material categories, combined with additional 'alignment' levers — for example, the share of suppliers with their own validated targets, or the share of revenue/procurement aligned to net zero — recognising that not all value-chain emissions are equally within a company's control.</li><li>Carbon removals: clearer expectations on addressing ongoing emissions over time and a more defined role for removals and beyond-value-chain mitigation — while keeping absolute reduction as the primary obligation.</li><li>Data and progress: a higher bar on data accuracy, base-year discipline and ongoing disclosure, so targets are tracked and recalculated rather than set and forgotten.</li></ul><h2>What is not changing</h2><p>The fundamentals hold. Targets remain anchored to climate science and a roughly 1.5°C trajectory. Absolute emissions reduction stays primary. Offsets still do not count toward reduction targets — removals play a role only in neutralising the residual at the net-zero point. If your strategy already treats reduction as the work and removals as the residual, V2 does not undermine it.</p><h2>How to prepare now</h2><ul><li>Keep strengthening a complete, accurate GHG inventory — V2 raises the data bar, and good data is the precondition for everything.</li><li>Deepen Scope 3 data quality on your most material categories, and begin or expand supplier engagement.</li><li>Do not rush to revalidate against a draft that may still change — but design target architecture that will survive the transition rather than only satisfying V1.</li><li>Treat removals strictly as a residual-emissions tool, and keep credits out of your reduction accounting.</li></ul><h2>Bottom line</h2><p>V2 is evolution, not reversal. It makes the standard more workable on Scope 3 and more demanding on data and honesty about progress. The companies that fare best will be those whose inventories and Scope 3 programmes are already strong — because the revision rewards substance over the appearance of ambition. Treat the current draft as a signpost, build the data foundation now, and validate when the final standard lands.</p><p>Because V2 is an evolving draft, always check the current status and requirements directly with SBTi before making target commitments.</p>`,
  },
  {
    slug: 'cdp-disclosure-2026',
    title: 'CDP after the overhaul: one questionnaire, IFRS-aligned, and how to score well',
    category: 'Disclosure',
    published: '2026-06-01',
    modified: '2026-07-28',
    lastUpdatedLabel: 'Jul 2026',
    minutes: 8,
    blurb:
      'CDP consolidated its separate questionnaires into a single, IFRS-aligned disclosure on a new platform. How the system now works, how scoring is decided, and what actually moves your grade.',
    metaTitle: 'CDP 2026: One Questionnaire, and How to Score Well',
    metaDescription: 'CDP consolidated its separate questionnaires into a single, IFRS-aligned disclosure on a new platform. Here is how the system now works, how scoring is…',
    related: '/cdp-disclosure.html',
    disclaimer: 'This article is general information, not legal, financial or compliance advice. The regulations and standards referenced here evolve; verify the current position with the issuing body, or ask us. Published June 2026.',
    refs: [
      { url: 'https://www.cdp.net/', label: 'CDP — official site' },
      { url: 'https://www.cdp.net/en/scores', label: 'CDP — Scores and scoring methodology' },
      { url: 'https://www.ifrs.org/issued-standards/ifrs-sustainability-standards-navigator/', label: 'IFRS Foundation — ISSB standards (IFRS S1 & S2)' },
    ],
    body: `<p>CDP runs the world's largest environmental disclosure system. Tens of thousands of companies report through it each year — not voluntarily in any loose sense, but because their investors and their largest customers request it. In its biggest change in years, CDP consolidated its previously separate climate, water and forests questionnaires into a single integrated questionnaire, delivered on a new online platform and aligned to the IFRS S2 / TCFD disclosure structure and the EU's ESRS. Our <a href="/cdp-disclosure.html">CDP reporting consulting</a> and broader <a href="/esg-sustainability.html">ESG and sustainability reporting</a> work run off one evidence base.</p><h2>What CDP is</h2><p>CDP (historically the Carbon Disclosure Project) is a not-for-profit that runs a standardised environmental disclosure system on behalf of investors and corporate buyers. Companies respond to a structured questionnaire; CDP scores the responses; and those scores are visible to the investors and customers who requested disclosure. That visibility is the point — a CDP score is simultaneously a disclosure, a rating, and a procurement document.</p><h2>The unified questionnaire</h2><ul><li>One combined questionnaire now spans climate change, water security and forests (with further environmental themes building in), rather than three separate submissions.</li><li>It is delivered through a new online response platform, replacing the older response system.</li><li>Its structure is aligned to IFRS S2 and the TCFD pillars — governance, strategy, risk management, and metrics and targets — and mapped to ESRS, so a single environmental data backbone can feed multiple regimes.</li></ul><h2>How scoring works</h2><p>CDP scores on an A to D scale (with intermediate grades such as A-, B and so on), reflecting four ascending levels of maturity: Disclosure (D), Awareness (C), Management (B) and Leadership (A). Higher bands demand more: Leadership-level scores typically require third-party-verified emissions data, science-based targets, and demonstrable best-practice processes, assessed against sector-relevant criteria. A blank or thin response sits at the bottom; a complete, well-governed, verified one reaches the top.</p><h2>Why it matters commercially</h2><p>Investors screen portfolios on CDP scores. Through the CDP Supply Chain programme, major buyers request disclosure from their suppliers and factor the results into procurement. The score you earn is published back to the people who asked for it — so a C or D sits in a procurement file next to competitors' As and Bs. For most supply-chain programmes, the Management band (B) is the practical credibility threshold.</p><h2>How to score well</h2><ul><li>Establish clear board-level governance of climate, and document it.</li><li>Run a genuine climate risk and opportunity process, not a narrative.</li><li>Report verified Scope 1, 2 and material Scope 3 emissions.</li><li>Have credible, ideally science-based, targets in place before the questionnaire window.</li><li>Build the content once against the IFRS S2 / TCFD backbone, so CDP, IFRS S2 and ESRS draw on the same evidence.</li><li>Start early — the score-improving work (governance, verification, targets) must exist before the submission window opens, which means starting two to three quarters ahead.</li></ul><h2>The relationship to other frameworks</h2><p>Because the questionnaire is now aligned to IFRS S2 and ESRS, CDP is best treated not as a standalone chore but as one output of a single, governed sustainability-data system. Build that system once and CDP becomes a view onto it — which is also the cheapest way to keep scoring well year after year.</p>`,
  },
  {
    slug: 'brsr-core-assurance-india',
    title: 'BRSR Core explained: India\'s assured sustainability disclosure and the value-chain ripple',
    category: 'Disclosure',
    published: '2026-06-01',
    modified: '2026-07-28',
    lastUpdatedLabel: 'Jul 2026',
    minutes: 9,
    blurb:
      'India\'s BRSR has moved from narrative to assured data. BRSR Core requires reasonable assurance on a defined set of KPIs — and pushes ESG requirements down to unlisted suppliers.',
    metaTitle: 'BRSR Core Explained: India\'s Assured ESG Disclosure',
    metaDescription: 'India\'s BRSR has moved from narrative to assured data. BRSR Core requires reasonable assurance on a defined set of KPIs — and pushes ESG requirements down…',
    related: '/brsr-reporting.html',
    disclaimer: 'This article is general information, not legal, financial or compliance advice. The regulations and standards referenced here evolve; verify the current position with the issuing body, or ask us. Published June 2026.',
    refs: [
      { url: 'https://www.sebi.gov.in/', label: 'SEBI — official site (circulars and master circulars)' },
      { url: 'https://www.sebi.gov.in/legal/circulars/jul-2023/brsr-core-framework-for-assurance-and-esg-disclosures-for-value-chain_73854.html', label: 'SEBI — BRSR Core circular (BRSR Core – Framework for assurance and ESG disclosures for value chain)' },
      { url: 'https://www.ifrs.org/issued-standards/ifrs-sustainability-standards-navigator/', label: 'IFRS Foundation — ISSB standards (IFRS S1 & S2)' },
    ],
    body: `<p>India's Business Responsibility and Sustainability Report (BRSR), mandated by the Securities and Exchange Board of India (SEBI) for the top 1,000 listed companies by market capitalisation, has crossed a threshold familiar from financial reporting: from disclosure you assert to data someone independently checks. The mechanism is BRSR Core. Our <a href="/esg-sustainability.html">ESG and sustainability reporting</a> practice prepares BRSR Core disclosures for assurance.</p><h2>What BRSR and BRSR Core are</h2><p>The full BRSR is a structured report covering the nine principles of India's National Guidelines on Responsible Business Conduct (NGRBC), spanning environment, social and governance disclosures. BRSR Core is a defined subset of that report — a focused set of key performance indicators and attributes (covering areas such as greenhouse-gas intensity, energy, water, waste, and key social metrics) that SEBI has singled out as requiring reasonable assurance. In other words: the whole BRSR is reported; the Core is reported and assured.</p><h2>The assurance timeline is phased</h2><ul><li>Reasonable assurance of BRSR Core is being phased in by market-capitalisation rank, beginning with the largest companies and widening each year.</li><li>The phase-in started with the top-ranked listed companies and is scheduled to extend toward the top 1,000 over subsequent financial years.</li><li>SEBI has adjusted the timeline and scope during implementation, so the precise applicability date for your company should be confirmed against the latest SEBI circular.</li></ul><h2>The value-chain dimension</h2><p>BRSR Core did something else significant: it introduced ESG disclosure for the value chain. In-scope companies are expected to report Core KPIs for their significant upstream and downstream partners (defined by a share of purchases and sales), on a phased, comply-or-explain basis. The ripple effect is the important part — requirements that formally land on a listed company flow straight to its unlisted suppliers, who must now produce the underlying data. If you supply a large Indian listed company, BRSR Core reaches you even if you never file one yourself.</p><h2>Why Core plus reasonable assurance is the hard part</h2><p>Reasonable assurance is a materially higher bar than limited assurance. Limited assurance yields a negative-form conclusion (nothing came to our attention); reasonable assurance yields a positive opinion, and demands substantially more evidence, controls testing and data traceability. Most first-time difficulties are not performance problems — they are evidence and control gaps: numbers that cannot be traced from source to disclosure, or processes with no documented controls. Those are fixable, but far cheaper to fix before the assurer arrives than during the engagement.</p><h2>How to prepare</h2><ul><li>Identify which Core KPIs apply to you and where the data currently comes from.</li><li>Build the data systems, controls and source-to-disclosure lineage that reasonable assurance requires.</li><li>Run a readiness or gap assessment against the assurance standard before the live engagement.</li><li>Engage value-chain partners early — their data is now part of your disclosure.</li><li>Align the work with IFRS S1/S2, which overlaps heavily, so the same backbone serves both Indian and global requirements.</li></ul><p>BRSR requirements and timelines are set and periodically revised by SEBI; confirm the current obligations and dates in the latest SEBI circulars before acting.</p>`,
  },
  {
    slug: 'lca-pcf-epd-difference',
    title: 'LCA, PCF and EPD: which one your buyers are actually asking for',
    category: 'Product Sustainability',
    published: '2026-06-01',
    modified: '2026-07-28',
    lastUpdatedLabel: 'Jul 2026',
    minutes: 8,
    blurb:
      'As carbon requirements move from the company to the product, three acronyms dominate procurement conversations. They are related but not interchangeable — and choosing wrong wastes months.',
    metaTitle: 'LCA vs PCF vs EPD: Which Do Your Buyers Want?',
    metaDescription: 'As carbon requirements move from the company to the product, three acronyms dominate procurement conversations. They are related but not interchangeable…',
    related: '/life-cycle-assessment.html',
    disclaimer: 'This article is general information, not legal, financial or compliance advice. The regulations and standards referenced here evolve; verify the current position with the issuing body, or ask us. Published June 2026.',
    refs: [
      { url: 'https://www.iso.org/standard/37456.html', label: 'ISO 14040 / 14044 — Life Cycle Assessment principles and requirements' },
      { url: 'https://www.iso.org/standard/71206.html', label: 'ISO 14067 — Carbon footprint of products' },
      { url: 'https://www.iso.org/standard/38131.html', label: 'ISO 14025 — Environmental Product Declarations (Type III)' },
      { url: 'https://www.carbon-transparency.org/', label: 'WBCSD — PACT Pathfinder Framework' },
    ],
    body: `<p>Sustainability requirements are migrating from the company to the product. Major buyers now ask for carbon data at the level of an individual SKU; regulators are converting product-level expectations into product-level rules. Three acronyms dominate those conversations — LCA, PCF and EPD. They are closely related, they share the same underlying data, and they are routinely confused. Picking the wrong one can cost months of work. We deliver all three: <a href="/life-cycle-assessment.html">life cycle assessment</a>, <a href="/product-carbon-footprint.html">product carbon footprints</a> and verified <a href="/environmental-product-declaration.html">EPDs</a>.</p><h2>LCA — Life Cycle Assessment</h2><p>Life Cycle Assessment is the foundational method, governed by ISO 14040 and ISO 14044. It quantifies a product's environmental impacts across multiple categories — climate, water use, resource depletion, acidification, toxicity and more — across its life cycle, either cradle-to-gate (raw materials to your factory gate) or cradle-to-grave (through use and end-of-life). A screening LCA uses secondary data to find hotspots quickly; a full LCA with independent critical review is required before you can make public comparative claims. LCA is the method everything else is built on.</p><h2>PCF — Product Carbon Footprint</h2><p>A Product Carbon Footprint is, in effect, the climate-only subset of an LCA, calculated to ISO 14067 (and the GHG Protocol Product Standard). It expresses a single product's greenhouse-gas emissions, most often cradle-to-gate for business-to-business use. PCFs are increasingly exchanged in standard digital formats such as the WBCSD PACT Pathfinder framework and, in automotive, Catena-X. A PCF is typically a business-to-business figure and is often not third-party verified.</p><h2>EPD — Environmental Product Declaration</h2><p>An Environmental Product Declaration is a third-party-verified, publicly registered declaration of a product's environmental impacts — a Type III declaration under ISO 14025, and, for construction products, EN 15804. It is built on an underlying LCA conducted to specific Product Category Rules (PCR), then independently verified and published through a programme operator. Green-building schemes such as LEED and BREEAM, and a growing list of public procurement policies, require EPDs as a condition of consideration. When a tender says EPD, a PCF will not substitute.</p><h2>So which one do you need?</h2><ul><li>A customer wants SKU-level carbon data in a scorecard or PACT/Catena-X format → a PCF.</li><li>A green-building project, specifier or public tender asks for it → an EPD.</li><li>You want to make a public environmental claim, or drive ecodesign and sourcing decisions → an LCA.</li><li>A regulation requires a product-level declaration (for example, battery or product-passport rules) → a product-level PCF or declaration to the prescribed method.</li></ul><h2>Build once, use many</h2><p>The decisive efficiency insight: all three share the same underlying data model. Build a robust LCA data foundation and a PCF becomes a view onto it, and an EPD becomes that view plus verification and a PCR. Companies that commission a PCF, then an EPD, then an LCA as three separate studies pay three times for one dataset.</p><h2>Avoiding the claim trap</h2><p>Public and comparative environmental claims carry rising regulatory risk. ISO 14044 requires a critical review for public comparative assertions, and anti-greenwashing rules — including the direction of travel in the EU — increasingly require the study behind a claim to be disclosed. Whatever you publish, make sure the evidence underneath it would survive a regulator or a competitor reading it closely.</p>`,
  },
  {
    slug: 'eudr-deforestation-regulation-explained',
    title: 'EUDR explained: deforestation-free supply chains, plot-level geolocation, and the deadline',
    category: 'Regulation',
    published: '2026-06-01',
    modified: '2026-07-28',
    lastUpdatedLabel: 'Jul 2026',
    minutes: 9,
    blurb:
      'Seven commodities banned from the EU market unless proven deforestation-free and traceable to the plot. What EUDR demands — and how to prepare.',
    metaTitle: 'EUDR Explained: Deforestation-Free Supply Chains',
    metaDescription: 'Seven commodities banned from the EU market unless proven deforestation-free and traceable to the plot. What EUDR demands — and how to prepare.',
    related: '/eudr-compliance.html',
    disclaimer: 'This article is general information, not legal, financial or compliance advice. The regulations and standards referenced here evolve; verify the current position with the issuing body, or ask us. Published June 2026.',
    refs: [
      { url: 'https://environment.ec.europa.eu/topics/forests/deforestation/regulation-deforestation-free-products_en', label: 'European Commission — Deforestation Regulation (EUDR)' },
      { url: 'https://eur-lex.europa.eu/eli/reg/2023/1115/oj', label: 'Regulation (EU) 2023/1115 on deforestation-free products (EUR-Lex)' },
      { url: 'https://green-business.ec.europa.eu/deforestation-regulation-implementation_en', label: 'European Commission — EUDR Information System & implementation guidance' },
    ],
    body: `<p>The EU Deforestation Regulation (EUDR), Regulation (EU) 2023/1115, prohibits placing seven commodities and their derived products on the EU market — or exporting them from it — unless they can be shown to be deforestation-free, legally produced, and traceable to the geolocation of the plot of land where they were grown. It is among the most operationally demanding traceability laws ever written, and it shifts the burden of proof onto operators and traders. Our <a href="/eudr-compliance.html">EUDR compliance consulting</a> supports the sectors most exposed, including consumer goods and textiles.</p><h2>What EUDR covers</h2><p>Seven commodities are in scope: cattle, cocoa, coffee, oil palm, rubber, soya and wood. So are the many products derived from them — leather, chocolate, furniture, paper and printed products, tyres, and a long list of others. If your product contains or is made from any of these, it is worth checking the precise scope against the regulation's annex rather than assuming.</p><h2>The three tests every shipment must pass</h2><ul><li>Deforestation-free: the commodity was not produced on land that was deforested or forest-degraded after 31 December 2020.</li><li>Legal: it was produced in accordance with the relevant laws of the country of production (land use, environment, labour, trade and more).</li><li>Traceable: its origin can be tied to the geolocation of the specific plot(s) of land it came from.</li></ul><h2>Plot-level geolocation: the core challenge</h2><p>EUDR requires the geographic coordinates — polygons for larger plots — of every parcel of land a commodity originated from, then a chain of traceability connecting those plots through aggregation, processing and trading to the finished product you place on the market. For supply chains built on thousands of smallholders, assembling and verifying that traceability is the real work, and the main reason to start early rather than wait for the deadline.</p><h2>Due diligence and the Due Diligence Statement</h2><p>In-scope operators must run a due diligence process — collecting information including geolocation, assessing the risk of non-compliance, and mitigating that risk until it is negligible — and then submit a Due Diligence Statement (DDS) through the EU's central Information System. The DDS carries a reference number that moves down the chain, so downstream buyers can rely on it. No DDS, no compliant placement on the market.</p><h2>Who is affected, and when</h2><p>Any operator or trader placing in-scope goods on the EU market, or exporting them from it, is affected — regardless of where the company is based. Non-EU producers feel it immediately, because their EU customers cannot legally buy without the underlying data. Application dates have been adjusted during implementation, with larger operators in scope first and micro and small enterprises following later; confirm the current confirmed dates for your category against the Commission's EUDR guidance, because the practical point — that data collection takes far longer than the paperwork — does not change.</p><h2>How to prepare, and the strategic upside</h2><ul><li>Map your in-scope commodities, products and supply chains, and quantify the traceability gap.</li><li>Build geolocation collection and chain-of-custody traceability back to the land of production.</li><li>Stand up the risk assessment, mitigation and record-keeping the regulation requires.</li><li>Establish your DDS submission process and a repeatable supplier-onboarding programme.</li></ul><p>Readiness is fast becoming a condition of keeping EU customers. Operators who build traceability early protect market access and become the preferred supplier for EU buyers who need the data — turning a compliance burden into a commercial moat. The supply-chain visibility you build also serves overlapping due-diligence duties such as the CSDDD.</p>`,
  },
  {
    slug: 'ecovadis-scoring-bronze-to-gold',
    title: 'How EcoVadis scoring really works — and how to move from Bronze to Gold',
    category: 'Ratings',
    published: '2026-06-01',
    modified: '2026-07-28',
    lastUpdatedLabel: 'Jul 2026',
    minutes: 8,
    blurb:
      'EcoVadis scores suppliers on four themes, with medals on a percentile curve. What the score really rewards — and how to move from Bronze to Gold.',
    metaTitle: 'EcoVadis Scoring: How to Move from Bronze to Gold',
    metaDescription: 'EcoVadis scores suppliers on four themes, with medals on a percentile curve. What the score really rewards — and how to move from Bronze to Gold.',
    related: '/ecovadis-rating.html',
    disclaimer: 'This article is general information, not legal, financial or compliance advice. The regulations and standards referenced here evolve; verify the current position with the issuing body, or ask us. Published June 2026.',
    refs: [
      { url: 'https://ecovadis.com/suppliers/', label: 'EcoVadis — Ratings methodology overview' },
      { url: 'https://ecovadis.com/', label: 'EcoVadis — official site' },
      { url: 'https://www.iso.org/iso-14001-environmental-management.html', label: 'ISO 14001 — Environmental management systems' },
    ],
    body: `<p>EcoVadis is the most widely used supplier sustainability rating, and for many companies the score has stopped being a benchmark and become a gate: large buyers set a minimum medal as a condition of doing business. That makes score improvement a commercial project with a deadline, not a reporting exercise — and understanding how the score is actually built is the difference between moving a band and standing still. Our <a href="/ecovadis-rating.html">EcoVadis score-improvement consulting</a> works each theme methodically toward the next medal.</p><h2>The four themes</h2><p>EcoVadis assesses four themes — Environment, Labour & Human Rights, Ethics, and Sustainable Procurement — across a set of criteria that are weighted according to your company's size, sector and geography. Two companies can answer the same way and score differently because the weighting reflects where their risks actually lie. The first step in any improvement effort is understanding your specific weighting, not copying another company's approach.</p><h2>It is documentation-driven</h2><p>This is the single most misunderstood point. EcoVadis scores what you can evidence, not what you do. Points come from formal policies (with scope and ownership), evidence of deployed actions (procedures, certifications such as ISO 14001, training records), and reported results (KPIs, audit outcomes, sustainability reports). Genuinely good practice with no conformant documentation scores poorly; the work is as much about evidencing as about doing.</p><h2>The medals are a percentile curve</h2><p>Scores run 0–100 and translate into medals — Bronze, Silver, Gold and Platinum — set on a percentile basis against the rated population, and the thresholds are revised periodically (Platinum has typically reflected roughly the top 1% of rated companies and Gold around the top 5%). Because the exact cut-offs move, confirm the current thresholds rather than relying on a past figure. The key implication is structural, not numerical: the bar rises as everyone improves.</p><h2>Why scores stall — or fall</h2><p>Because medals are percentile-based, a submission that does not improve is a score that quietly declines as the rated population gets better. Add in periodic methodology tightening, and a copy-paste resubmission is a recipe for slipping a band. Re-approaching each cycle against the current methodology is the only reliable defence.</p><h2>The Bronze-to-Gold playbook</h2><ul><li>Start with a methodology-level diagnosis: where your points sit, theme by theme, and what each gap costs to close.</li><li>Build the policies, evidence and KPIs the criteria reward, sequenced by score impact.</li><li>Manage the submission — document mapping and questionnaire — to the deadline.</li><li>Run it as a multi-cycle plan that compounds, rather than resetting each year.</li></ul><h2>The bonus: the evidence travels</h2><p>The documentation that lifts an EcoVadis score — policies, management systems, KPIs, assured data — overlaps heavily with CSRD, BRSR and CDP. Built once, it does double duty across your other disclosures, which is why a serious EcoVadis programme is rarely wasted effort.</p>`,
  },
  {
    slug: 'iscc-eu-plus-corsia-which-certification',
    title: 'ISCC EU vs ISCC PLUS vs CORSIA: which certification your business needs',
    category: 'Certification',
    published: '2026-06-01',
    modified: '2026-07-28',
    lastUpdatedLabel: 'Jul 2026',
    minutes: 8,
    blurb:
      'ISCC EU, PLUS, CORSIA and Carbon Footprint serve different markets. How to choose the right certification — or the right combination.',
    metaTitle: 'ISCC EU vs PLUS vs CORSIA: Which One Do You Need?',
    metaDescription: 'ISCC EU, PLUS, CORSIA and Carbon Footprint compared side by side — what each certifies, which market it opens, how mass balance works, and what certification costs and takes.',
    related: '/iscc-certification.html',
    disclaimer: 'This article is general information, not legal, financial or compliance advice. The regulations and standards referenced here evolve; verify the current position with the issuing body, or ask us. Published June 2026.',
    refs: [
      { url: 'https://www.iscc-system.org/', label: 'ISCC — International Sustainability and Carbon Certification (official site)' },
      { url: 'https://energy.ec.europa.eu/topics/renewable-energy/bioenergy/voluntary-schemes_en', label: 'European Commission — Voluntary schemes under the Renewable Energy Directive' },
      { url: 'https://www.icao.int/environmental-protection/CORSIA/Pages/default.aspx', label: 'ICAO — CORSIA Sustainability Certification Schemes' },
    ],
    body: `<p>ISCC — International Sustainability and Carbon Certification — is the most widely used certification system for sustainable feedstocks, biofuels, and recycled and bio-based materials. The confusion is that ISCC is not one thing: it is a family of schemes, and the right one depends entirely on your product and your market. Choosing wrong, or assuming one covers all, is a common and expensive mistake. If you need help choosing and preparing, our <a href="/iscc-certification.html">ISCC certification consulting</a> covers ISCC EU, PLUS, CORSIA and Carbon Footprint end to end.</p><div class="table-wrap" style="overflow-x:auto"><table class="cmp-table"><caption>ISCC schemes at a glance</caption><thead><tr><th scope="col">Scheme</th><th scope="col">What it certifies</th><th scope="col">Market it opens</th><th scope="col">Basis</th></tr></thead><tbody><tr><th scope="row"><a href="/iscc-certification.html">ISCC EU</a></th><td>Biofuels, bioliquids and biomass fuels</td><td>EU energy market</td><td>EU Renewable Energy Directive (RED III)</td></tr><tr><th scope="row"><a href="/iscc-certification.html">ISCC PLUS</a></th><td>Bio-based and recycled materials — plastics, chemicals, food, feed, circular economy</td><td>Non-energy markets</td><td>Mass-balance chain of custody</td></tr><tr><th scope="row"><a href="/iscc-certification.html">ISCC CORSIA</a></th><td>Sustainable Aviation Fuel (SAF) and its feedstocks</td><td>Aviation</td><td>ICAO CORSIA programme</td></tr><tr><th scope="row">ISCC Carbon Footprint</th><td>Product carbon footprints</td><td>—</td><td>— <!-- TODO: HUMAN — market/basis for ISCC CF not stated in article; source before filling --></td></tr></tbody></table></div><h2>ISCC EU — for the EU energy market</h2><p>ISCC EU is a European Commission-recognised voluntary scheme for demonstrating compliance with the EU Renewable Energy Directive (RED III). If you produce biofuels, bioliquids or biomass fuels and want them counted toward EU renewable-energy targets, ISCC EU is the practical route to prove the sustainability and greenhouse-gas-saving criteria are met. It is fundamentally about market access to the EU energy sector.</p><h2>ISCC PLUS — for everything that is not energy</h2><p>ISCC PLUS is the voluntary scheme for non-energy markets: bio-based and recycled plastics, chemicals, food, feed, and circular-economy materials. It uses a mass-balance chain of custody, which lets certified sustainable or recycled material be mixed with conventional material and the certified attribute allocated to a defined share of output, with auditable bookkeeping. ISCC PLUS is what most chemicals, plastics and consumer-goods buyers mean when they ask for certified recycled or bio-based content.</p><h2>ISCC CORSIA — for aviation</h2><p>ISCC CORSIA is approved under ICAO's CORSIA programme and certifies Sustainable Aviation Fuel (SAF) and its feedstocks against the scheme's sustainability requirements. If your product is destined for the aviation fuel value chain, this is the relevant scheme.</p><h2>ISCC Carbon Footprint Certification — the add-on</h2><p>ISCC also offers Carbon Footprint Certification: an audit-verified product carbon footprint built to ISCC's methodology and recognised within ISCC supply chains. It complements rather than replaces an ISO 14067 product carbon footprint, and is best built on the same underlying data.</p><h2>How mass balance works</h2><p>Mass balance is the mechanism that makes circular and bio-based supply chains commercially workable. You can blend certified and conventional inputs in the same process, then allocate the certified attribute to a portion of the output — provided the bookkeeping proves you never claim more than you put in. Getting that bookkeeping right is where most first audits fail.</p><h2>Which do you need?</h2><ul><li>Biofuel or feedstock for the EU energy market → ISCC EU.</li><li>Bio-based or recycled plastics, chemicals, food or feed → ISCC PLUS.</li><li>Sustainable aviation fuel → ISCC CORSIA.</li><li>An audit-verified product carbon footprint within ISCC chains → ISCC Carbon Footprint Certification.</li><li>Many businesses need more than one — map the combination to your products and buyers before scoping the audit.</li></ul>`,
  },
  {
    slug: 'scope-3-emissions-measurement',
    title: 'Scope 3 emissions: why they are most of your footprint and how to actually measure them',
    category: 'Carbon Accounting',
    published: '2026-06-01',
    modified: '2026-07-28',
    lastUpdatedLabel: 'Jul 2026',
    minutes: 9,
    blurb:
      'Scope 3 is typically 70–90% of your footprint and the hardest to measure. The 15 categories, the methods that work, and where to start.',
    metaTitle: 'Scope 3 Emissions: The 15 Categories, and How to Measure',
    metaDescription: 'Scope 3 is typically 70–90% of your footprint and the hardest to measure. The 15 categories, the methods that work, and where to start.',
    related: '/ghg-accounting.html',
    disclaimer: 'This article is general information, not legal, financial or compliance advice. The regulations and standards referenced here evolve; verify the current position with the issuing body, or ask us. Published June 2026.',
    refs: [
      { url: 'https://ghgprotocol.org/corporate-value-chain-scope-3-standard', label: 'GHG Protocol — Corporate Value Chain (Scope 3) Accounting and Reporting Standard' },
      { url: 'https://ghgprotocol.org/corporate-standard', label: 'GHG Protocol — Corporate Standard' },
      { url: 'https://ghgprotocol.org/scope-3-technical-calculation-guidance', label: 'GHG Protocol — Technical Guidance for Calculating Scope 3 Emissions' },
    ],
    body: `<p>For most companies, the emissions that matter most are the ones they do not directly control. Scope 3 — the emissions across a company's value chain — typically accounts for 70–90% of the total footprint, and it is exactly where measurement is hardest because the data sits with suppliers and customers rather than on your own meters. This sits within our <a href="/ghg-accounting.html">GHG accounting</a> work and, at product level, our <a href="/product-carbon-footprint.html">product carbon footprint</a> service.</p><h2>Scope 1, 2 and 3 in one line each</h2><p>Scope 1 is direct emissions from sources you own or control (fuel, processes, fleet). Scope 2 is indirect emissions from the energy you purchase (electricity, steam, heating, cooling). Scope 3 is everything else in your value chain — both upstream and downstream — and it is governed by the GHG Protocol Corporate Value Chain (Scope 3) Standard.</p><h2>The 15 categories</h2><p>Scope 3 is divided into 15 categories — eight upstream and seven downstream. Upstream covers purchased goods and services, capital goods, fuel- and energy-related activities, transportation, waste, business travel, employee commuting and leased assets. Downstream covers transportation and distribution, processing and use of sold products, end-of-life treatment, leased assets, franchises and investments. Not all 15 are relevant to every company — but all 15 must be screened.</p><h2>Why it is hard</h2><p>Scope 3 data lives outside your organisation. Suppliers may not measure their emissions; customers' use of your products is outside your control; and the further down the value chain you look, the thinner the data gets. The honest answer is that Scope 3 is an estimate that improves over time, not a precise meter reading on day one.</p><h2>The measurement methods — an accuracy ladder</h2><ul><li>Spend-based: multiply money spent by an emission factor per unit of spend. Fast, complete, low accuracy — good for a first screen.</li><li>Average-data: use physical activity data (kg, km, kWh) and average emission factors. More accurate than spend-based.</li><li>Supplier-specific (activity-based): use primary data from your actual suppliers. Most accurate, most effort — reserve it for material categories.</li></ul><h2>Where to start</h2><p>Screen all 15 categories quickly, usually with spend-based data, to find where emissions concentrate. For most companies that is purchased goods and services, and — for product makers — the use phase of sold products. Then deepen data quality only on those material categories. Trying to perfect all 15 at once is the most common way to stall a Scope 3 programme.</p><h2>Why it matters now</h2><p>Scope 3 is no longer optional. It is required under most disclosure standards (CSRD, IFRS S2), it is central to credible SBTi targets, and it increasingly appears on customer scorecards. The same value-chain data also underpins product carbon footprints and CBAM. Built once, properly, it serves all of them.</p>`,
  },
  {
    slug: 'ifrs-s1-s2-issb-explained',
    title: 'IFRS S1 and S2 explained: the global baseline for sustainability disclosure',
    category: 'Disclosure',
    published: '2026-06-01',
    modified: '2026-07-28',
    lastUpdatedLabel: 'Jul 2026',
    minutes: 9,
    blurb:
      'IFRS S1 and S2 are the global baseline for sustainability and climate disclosure. What they require, who must comply, and how to prepare.',
    metaTitle: 'IFRS S1 & S2 Explained: The Global Baseline',
    metaDescription: 'IFRS S1 and S2 are the global baseline for sustainability and climate disclosure. What they require, who must comply, and how to prepare.',
    related: '/ifrs-s1-s2.html',
    disclaimer: 'This article is general information, not legal, financial or compliance advice. The regulations and standards referenced here evolve; verify the current position with the issuing body, or ask us. Published June 2026.',
    refs: [
      { url: 'https://www.ifrs.org/issued-standards/ifrs-sustainability-standards-navigator/', label: 'IFRS Foundation — ISSB Sustainability Standards Navigator (IFRS S1 & S2)' },
      { url: 'https://www.ifrs.org/groups/international-sustainability-standards-board/', label: 'IFRS Foundation — About the ISSB' },
      { url: 'https://www.fsb-tcfd.org/', label: 'TCFD — Recommendations (now monitored by the ISSB)' },
    ],
    body: `<p>In 2023 the International Sustainability Standards Board (ISSB), part of the IFRS Foundation, issued its first two standards — IFRS S1 and IFRS S2. Together they have rapidly become the global baseline for sustainability-related financial disclosure, the reference point that other regimes increasingly map to and that a growing list of jurisdictions are adopting or endorsing. We put this into practice through <a href="/climate-risk-tcfd.html">climate risk and IFRS S2 consulting</a> and integrated <a href="/esg-sustainability.html">ESG and sustainability reporting</a>.</p><h2>What S1 and S2 are</h2><p>IFRS S1 sets out the general requirements for disclosing sustainability-related risks and opportunities that could reasonably affect a company's prospects — its cash flows, access to finance and cost of capital. IFRS S2 is the climate-specific standard, covering climate-related risks and opportunities in detail. S1 is the framework; S2 is the first topic built on it, with more topics expected over time.</p><h2>Built on the TCFD structure</h2><p>Both standards follow the four-pillar structure made familiar by the Task Force on Climate-related Financial Disclosures (TCFD): governance, strategy, risk management, and metrics and targets. Responsibility for monitoring corporate climate disclosures transferred from the TCFD to the ISSB, which makes IFRS S2 the natural successor to TCFD reporting rather than a parallel track.</p><h2>What they require</h2><ul><li>Governance: how the board and management oversee sustainability and climate matters.</li><li>Strategy: the material risks and opportunities, and their effects on the business model and finances — including climate scenario resilience.</li><li>Risk management: how these risks are identified, assessed and managed within enterprise risk processes.</li><li>Metrics and targets: Scope 1, 2 and 3 emissions, transition plans, and the targets used to manage performance.</li></ul><h2>Who must comply</h2><p>The ISSB sets the standards; it does not by itself make them mandatory. Application depends on each jurisdiction's adoption decisions, and many markets are now adopting, endorsing or building on IFRS S1 and S2 on their own timelines. The practical implication is to check your specific jurisdiction's status — but the direction is clearly toward IFRS S1/S2 as the common denominator of investor-grade disclosure.</p><h2>How it relates to CSRD, CDP and BRSR</h2><p>IFRS S1/S2 overlap substantially with the EU's CSRD/ESRS, with CDP (whose questionnaire is aligned to the structure), and with India's BRSR. The standards share emissions data, governance, risk processes and targets. Companies facing more than one regime should build a single governed data backbone and map outward, rather than running parallel reporting efforts.</p><h2>How to prepare</h2><p>Start with a materiality assessment, then build the data architecture and controls for the material topics, deepen Scope 3 on the categories that matter, formalise governance, and sequence an assurance roadmap. Done once, this backbone serves IFRS S1/S2 and every overlapping framework at a falling marginal cost.</p>`,
  },
  {
    slug: 'carbon-credit-integrity-icvcm-vcmi',
    title: 'High-integrity carbon credits: ICVCM, VCMI, and how to avoid the headline risk',
    category: 'Carbon Markets',
    published: '2026-06-01',
    modified: '2026-07-28',
    lastUpdatedLabel: 'Jul 2026',
    minutes: 9,
    blurb:
      'The carbon market has split on integrity — ICVCM defines the credit, VCMI the claim. What separates a quality carbon asset from a liability.',
    metaTitle: 'High-Integrity Carbon Credits: ICVCM and VCMI',
    metaDescription: 'The carbon market has split on integrity — ICVCM defines the credit, VCMI the claim. What separates a quality carbon asset from a liability.',
    related: '/carbon-supply.html',
    disclaimer: 'This article is general information, not legal, financial or compliance advice. The regulations and standards referenced here evolve; verify the current position with the issuing body, or ask us. Published June 2026.',
    refs: [
      { url: 'https://icvcm.org/the-core-carbon-principles/', label: 'Integrity Council for the Voluntary Carbon Market (ICVCM) — Core Carbon Principles' },
      { url: 'https://vcmintegrity.org/vcmi-claims-code-of-practice/', label: 'Voluntary Carbon Markets Integrity Initiative (VCMI) — Claims Code of Practice' },
      { url: 'https://sciencebasedtargets.org/net-zero', label: 'Science Based Targets initiative — Corporate Net-Zero Standard (on the role of credits)' },
    ],
    body: `<p>The voluntary carbon market has been through a credibility reckoning, and it did not collapse — it split. Demand and price are concentrating on credits that can withstand scrutiny, while questionable supply is being discounted or stranded. Two bodies now define what integrity means, and they address different halves of the problem: ICVCM governs the integrity of the credit itself, and VCMI governs the integrity of the claims a company makes when it uses one. Our <a href="/carbon-supply.html">carbon credit advisory</a> screens every credit against these integrity benchmarks.</p><h2>The two sides of integrity</h2><p>Supply-side integrity asks: is this credit real, additional and durable? Demand-side integrity asks: is the company using it making an honest claim, on top of genuine reductions? A high-quality credit attached to a misleading claim still creates headline risk — and a careful claim built on weak credits collapses on inspection. You need both.</p><h2>ICVCM and the Core Carbon Principles</h2><p>The Integrity Council for the Voluntary Carbon Market (ICVCM) sets the supply-side benchmark through its Core Carbon Principles (CCPs) — a set of ten principles covering effective governance, additionality, permanence, robust quantification, no double counting, and sustainable-development safeguards. ICVCM assesses carbon-crediting programmes and methodologies against an Assessment Framework, and credits that qualify can carry a CCP label. The label is a powerful first filter — but it is a floor for quality, not a substitute for project-level due diligence.</p><h2>VCMI and the Claims Code of Practice</h2><p>The Voluntary Carbon Markets Integrity Initiative (VCMI) addresses the demand side through its Claims Code of Practice. It sets out how a company can credibly say it has used carbon credits — through tiered claims (such as Silver, Gold and Platinum) — but only after meeting foundational criteria first: maintaining a greenhouse-gas inventory, setting and pursuing near-term science-based targets, and disclosing progress. In other words, VCMI makes credits something you earn the right to claim, after you are already cutting emissions.</p><h2>The rule that matters most</h2><p>Across every credible framework, the same principle holds: credits do not substitute for reduction. Reduce emissions across your own operations and value chain first; use high-integrity credits for genuinely residual emissions and for contribution beyond your value chain. The SBTi, for example, does not allow offsets to count toward reduction targets at all. Any strategy that leans on credits in place of cutting emissions will not survive scrutiny.</p><h2>What makes a credit high-integrity</h2><ul><li>Additionality: the reduction or removal would not have happened anyway.</li><li>Permanence and durability: the carbon stays out of the atmosphere, with reversal risk managed — engineered removals score highest here.</li><li>Robust baselines and quantification: conservative, verifiable methods, not inflated counterfactuals.</li><li>No double counting and no leakage: the reduction is claimed once, and not simply pushed elsewhere.</li><li>Co-benefits and safeguards: positive outcomes for communities and ecosystems, with social protections in place.</li></ul><h2>Buyer due diligence in practice</h2><p>Treat procurement as a risk-management discipline. Use the CCP label as a starting filter, then screen project by project on the criteria above, plus registry status, vintage, and reversal risk. Expect to reject a meaningful share of what you screen — that is the point of screening. A portfolio assembled this way holds its value and protects the claims built on it.</p><p>ICVCM and VCMI frameworks continue to evolve; confirm the current Core Carbon Principles, Assessment Framework and Claims Code requirements with each body before relying on them.</p>`,
  },
  {
    slug: 'net-zero-pathway-funding',
    title: 'Funding the net-zero transition: building a pathway your CFO will actually finance',
    category: 'Net Zero',
    published: '2026-06-01',
    modified: '2026-07-28',
    lastUpdatedLabel: 'Jul 2026',
    minutes: 9,
    blurb:
      'The gap between a net-zero pledge and a funded plan is a cost curve, a capital plan and financing. How to build a business case the board approves.',
    metaTitle: 'Funding Net Zero: A Pathway Your CFO Will Finance',
    metaDescription: 'The gap between a net-zero pledge and a funded plan is a cost curve, a capital plan and financing. How to build a business case the board approves.',
    related: '/net-zero-decarbonization.html',
    disclaimer: 'This article is general information, not legal, financial or compliance advice. The regulations and standards referenced here evolve; verify the current position with the issuing body, or ask us. Published June 2026.',
    refs: [
      { url: 'https://www.icmagroup.org/sustainable-finance/the-principles-guidelines-and-handbooks/green-bond-principles-gbp/', label: 'ICMA — Green Bond Principles' },
      { url: 'https://www.lma.eu.com/sustainable-lending', label: 'Loan Market Association — Sustainability-Linked Loan Principles' },
      { url: 'https://sciencebasedtargets.org/net-zero', label: 'Science Based Targets initiative — Corporate Net-Zero Standard' },
    ],
    body: `<p>Most net-zero commitments fail not at ambition but at the financing conversation. A public target with no funded pathway is a liability with a date on it. The difference between a pledge and a plan is concrete and financial: a marginal abatement cost curve, a sequenced capital plan, and financing identified for the levers that need it. Get those three right and net zero becomes a capital-allocation decision the CFO can actually make. Our <a href="/net-zero-decarbonization.html">net-zero and decarbonization strategy</a> work turns a pledge into a funded pathway.</p><h2>Why most plans stall at the CFO</h2><p>Boards reject net-zero plans for predictable reasons: the levers are not costed, they are not sequenced, and no one has shown where the money comes from. A roadmap that does not change the capital plan is decoration. The work is to express decarbonisation in the language finance already uses — cost per tonne, NPV, payback, and impact on the cost of capital.</p><h2>The marginal abatement cost curve</h2><p>The marginal abatement cost curve (MACC) ranks every viable lever by its cost per tonne of CO2 avoided, against your own hurdle rate. The honest revelation for most companies is that a substantial share of early levers — energy efficiency, renewable procurement, electrification — are cash-positive at current energy prices. They do not cost money; they save it. The MACC is what turns an abstract target into a ranked, fundable list.</p><h2>Sequencing for finance-ability</h2><p>Sequence deliberately: harvest the cash-positive levers first, and let their savings part-fund the harder, later ones. Pilot the expensive levers early (process heat, feedstock change, fleet) but time the heavy capital to natural asset-replacement cycles rather than forcing premature write-offs. Sequencing against asset life is the single biggest cost saver in any industrial decarbonisation plan.</p><h2>The financing toolkit</h2><ul><li>Green bonds: proceeds ring-fenced for defined green projects, under the ICMA Green Bond Principles.</li><li>Sustainability-linked loans and bonds: financial terms (the coupon or margin) tied to achieving sustainability KPIs, under the relevant Sustainability-Linked Principles.</li><li>Transition finance: instruments aimed specifically at hard-to-abate decarbonisation.</li><li>Internal carbon pricing: a shadow price that makes low-carbon options compete fairly inside capex and procurement decisions.</li></ul><h2>Building the business case</h2><p>Frame each lever in financial terms — NPV, payback and cost-of-capital effect — and, crucially, price the cost of inaction: rising carbon prices, CBAM exposure, lost market access, and financing that gets more expensive for laggards. The strongest business cases show that the unsequenced, unfunded path is the expensive one.</p><h2>Governance, delivery and disclosure</h2><p>Attach owners, milestones and a review cadence, and package the result as a transition plan in the format that CSRD and IFRS S2 increasingly expect. A credible, disclosed, funded transition plan does double duty: it directs capital internally and signals to lenders and investors that the company is financeable on better terms.</p>`,
  },
  {
    slug: 'i-rec-renewable-energy-certificates',
    title: 'I-RECs explained: how energy attribute certificates cut your Scope 2 — credibly',
    category: 'Renewable Energy',
    published: '2026-06-01',
    modified: '2026-07-28',
    lastUpdatedLabel: 'Jul 2026',
    minutes: 8,
    blurb:
      'I-RECs let companies claim renewable electricity and cut market-based Scope 2 worldwide. How they work — and what makes a claim hold up.',
    metaTitle: 'I-RECs Explained: Cutting Scope 2, Credibly',
    metaDescription: 'I-RECs let companies claim renewable electricity and cut market-based Scope 2 worldwide. How they work — and what makes a claim hold up.',
    related: '/energy-attribute-certificates.html',
    disclaimer: 'This article is general information, not legal, financial or compliance advice. The regulations and standards referenced here evolve; verify the current position with the issuing body, or ask us. Published June 2026.',
    refs: [
      { url: 'https://www.trackingstandard.org/', label: 'The International REC Standard (I-REC Standard Foundation / Evident)' },
      { url: 'https://ghgprotocol.org/scope-2-guidance', label: 'GHG Protocol — Scope 2 Guidance' },
      { url: 'https://www.there100.org/', label: 'RE100 — Technical criteria' },
    ],
    body: `<p>For most companies, purchased electricity (Scope 2) is the fastest credible emissions reduction available — and energy attribute certificates are the instrument that makes it claimable. Across much of the world, that instrument is the I-REC. Used well, it delivers genuine, defensible Scope 2 reductions; used carelessly, it buys paper that no longer survives an assurance review. Our <a href="/energy-attribute-certificates.html">renewable energy procurement</a> advisory covers I-RECs, RECs and PPAs.</p><h2>What an I-REC is</h2><p>An I-REC (International Renewable Energy Certificate) is a tradable certificate representing proof that one megawatt-hour of electricity was generated from a renewable source. It separates the environmental attribute of the electricity from the physical electrons, so a company can buy and retire the attribute to back a renewable-energy claim even when the grid it draws from is mixed. The I-REC Standard is administered by the I-REC Standard Foundation (operated by Evident).</p><h2>The family of energy attribute certificates</h2><p>I-RECs are one member of a global family of energy attribute certificates (EACs). In North America the equivalent is the REC; in Europe it is the Guarantee of Origin (GO); and across much of Asia, Africa, Latin America and the Middle East — including India — the I-REC is the dominant instrument. They do the same job under different governance, and which one applies depends simply on where your consumption sits.</p><h2>How they cut Scope 2</h2><p>Under the GHG Protocol Scope 2 Guidance, companies report Scope 2 two ways: location-based (the grid average) and market-based (reflecting the energy products they have chosen). Retiring EACs matched to your consumption is what lowers the market-based figure — and the market-based number is the one most targets, including SBTi pathways, are measured against.</p><h2>Quality and credibility</h2><p>Not all certificates are equal in the eyes of scrutiny. Expectations are tightening toward better geographic and temporal matching — certificates from the same market as your consumption, and increasingly from the same time period — and toward demonstrable impact. RE100, the corporate renewable-electricity initiative, has hardened its technical criteria accordingly. Unbundled certificates remain valid under market-based accounting, but are best treated as a bridge rather than a destination.</p><h2>Unbundled certificates, PPAs and on-site</h2><ul><li>Unbundled I-RECs: fast, flexible and low-cost, with the weakest additionality story.</li><li>Power purchase agreements (PPAs): a contract for renewable power (physical or virtual) that adds price certainty and a stronger additionality narrative, at the cost of a term commitment.</li><li>On-site generation: solar or wind on your own assets — the most direct and visible option where it is feasible.</li></ul><h2>The emerging frontier: 24/7 carbon-free energy</h2><p>Leading buyers are moving beyond annual matching toward 24/7 carbon-free energy — matching consumption with carbon-free generation every hour. Most companies need not start there, but new contracts should be structured so they remain compatible with hourly matching as expectations evolve.</p><h2>Using them well</h2><p>Align certificate procurement with your Scope 2 accounting, your RE100 or SBTi commitments, and the claims you intend to make. Prioritise matching quality over the cheapest certificate, and structure procurement so it delivers reductions that survive assurance — not just a line in the sustainability report.</p>`,
  },
];

/** Topics in descending article count, then alphabetically — the order the
 *  filter row and the topic index both use. */
export function insightCategories() {
  const counts = new Map();
  for (const a of insights) counts.set(a.category, (counts.get(a.category) || 0) + 1);
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([name, count]) => ({ name, count, id: name.toLowerCase().replace(/[^a-z0-9]+/g, '-') }));
}

/** Newest first. Thirteen of the fourteen share a publication date, so a
 *  title tiebreak would render the library alphabetically and bury the pieces
 *  the client put first. Ties fall back to the order they arrive in above,
 *  which is their own editorial running order. */
export function insightsByDate() {
  const rank = new Map(insights.map((a, i) => [a.slug, i]));
  return [...insights].sort(
    (a, b) => b.published.localeCompare(a.published) || rank.get(a.slug) - rank.get(b.slug)
  );
}

export function insightBySlug(slug) {
  return insights.find((a) => a.slug === slug);
}

/** Up to three further pieces: same topic first, then most recent. */
export function relatedInsights(article, n = 3) {
  const rest = insightsByDate().filter((a) => a.slug !== article.slug);
  const same = rest.filter((a) => a.category === article.category);
  return [...same, ...rest.filter((a) => a.category !== article.category)].slice(0, n);
}

export const insightStats = {
  articles: insights.length,
  categories: new Set(insights.map((a) => a.category)).size,
  minutes: insights.reduce((n, a) => n + a.minutes, 0),
};
