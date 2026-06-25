// 渲染同款竞争 cell - 3 张档位卡片横排（参考竞品图）
function buildCell(p) {
  const stateLabel = {red:'竞争力差', orange:'有差距', green:'领先'}[p.state];
  const tagCls = {quality:'tag-q', subsidy:'tag-s', service:'tag-v'}[p.strategy];

  const head = `
    <div class="cc2-head">
      <span class="cc2-state st-${p.state}">${stateLabel}</span>
      <span class="cc2-headline">${p.headline}</span>
      <span class="cc2-meta">同款 <b>${p.sameQty}</b> · 击败您 <b>${p.beatBy}%</b></span>
    </div>
  `;

  const cards = p.tiers.map((t, i) => `
    <div class="tier tier-${i}">
      <div class="tier-top">
        <span class="tier-tag ${tagCls}">${t.tag}</span>
        <span class="tier-compete">${t.compete}</span>
      </div>
      <div class="tier-act">${t.act}</div>
      <div class="tier-row">
        <span class="tier-gain">↑ 预计流量 <b>${t.gain}</b></span>
        <button class="tier-cta">${t.cta}</button>
      </div>
      <div class="tier-vs">
        <span class="vs-badge">VS</span>
        <div class="vs-pic">${t.vs.pic}</div>
        <div class="vs-body">
          <div class="vs-name">${t.vs.name}</div>
          <div class="vs-sub">${t.vs.sub}</div>
        </div>
        <div class="vs-price">${t.vs.price}</div>
      </div>
      <a class="tier-more">查看更多 ›</a>
    </div>
  `).join('');

  return head + `<div class="tier-row-wrap">${cards}</div>`;
}
