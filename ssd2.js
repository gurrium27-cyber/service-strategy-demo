// 同款竞争 cell - 单卡片版（每行只展示一个策略）
function buildCell(p) {
  const c = p.competitor;
  return `
    <div class="sc">
      <div class="sc-top">
        <span class="sc-tag tag-${p.tagCls}">${p.tag}</span>
        <span class="sc-compete">${p.compete}</span>
      </div>
      <div class="sc-act">${p.act}</div>
      <div class="sc-row">
        <span class="sc-gain">↑ 预计流量 <b>${p.gain}</b></span>
        <button class="sc-cta cta-${p.tagCls}">${p.cta}</button>
      </div>
      <div class="sc-vs">
        <span class="vs-badge">VS</span>
        <img class="vs-pic" src="${c.picUrl}" alt="">
        <div class="vs-body">
          <div class="vs-name">${c.name}</div>
          <div class="vs-sub">${c.sub}</div>
        </div>
        <div class="vs-price">${c.price}</div>
      </div>
      <a class="sc-more">查看更多 ›</a>
    </div>
  `;
}
