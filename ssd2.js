// 同款竞争 - 三类商家视角统一表达
// red→竞争力差 / orange→待提升 / green→有优势
const CATEGORY = {
  red:    {key:'bad',     icon:'🔻', title:'同款竞争力差', desc:'急需修复，否则不进流量池', cls:'cat-bad'},
  orange: {key:'improve', icon:'⚠️', title:'同款待提升', desc:'同行已抢跑，补齐即可追平', cls:'cat-improve'},
  green:  {key:'lead',    icon:'🏆', title:'同款有优势', desc:'综合领先，建议加投扩量',   cls:'cat-lead'}
};

function buildCell(p) {
  const c = p.competitor;
  const cat = CATEGORY[p.state];
  const gainN = parseInt(p.gain.replace(/[^\d]/g,''));
  const cvr = Math.max(8, Math.round(gainN * 0.2));

  return `
    <div class="sc ${cat.cls}">
      <!-- ▼ 商家视角统一分类 banner -->
      <div class="cat-banner">
        <span class="cat-ic">${cat.icon}</span>
        <div class="cat-body">
          <div class="cat-title">${cat.title}<span class="cat-meta">${p.compete}</span></div>
          <div class="cat-desc">${cat.desc}</div>
        </div>
      </div>

      <!-- ▼ 当前策略 / Action -->
      <div class="sc-act">${p.act}</div>
      <div class="sc-row">
        <span class="sc-gain">↑ 预计流量 <b>${p.gain}</b> · 成交转化 <b>+${cvr}%</b></span>
        <button class="sc-cta cta-${cat.key}">${p.cta}</button>
      </div>

      <!-- ▼ 同款竞品（待提升/有优势/竞争力差 都需展示，凸显对方做了/没做什么） -->
      <div class="sc-vs">
        <div class="vs-label">${cat.key==='improve'?'🆚 已抢跑的同款竞品':cat.key==='lead'?'🆚 落后您的同款参考':'🆚 已修复的同款参考'}</div>
        <div class="vs-row">
          <img class="vs-pic" src="${c.picUrl}" alt="">
          <div class="vs-body">
            <div class="vs-name">${c.name}</div>
            <div class="vs-adv ${cat.key==='lead'?'me-win':''}">${cat.key==='lead'?'⬇ ':'⬆ '}${c.advantage}</div>
            <div class="vs-sub">${c.sub}</div>
          </div>
          <div class="vs-price">${c.price}</div>
        </div>
      </div>

      <a class="sc-more">悬停查看 前台展示样式 →</a>
      ${buildFePop(p, cvr, cat)}
    </div>
  `;
}

function buildFePop(p, cvr, cat) {
  const c = p.competitor;
  const myPrice = parseInt(p.price.replace(/[^\d]/g,''));
  let scenes = '';

  if (p.strategy === 'quality') {
    scenes = sceneBefore(p) + sceneAfterQuality(p);
  } else if (p.strategy === 'subsidy') {
    scenes = sceneSubsidySRP(p, myPrice) + sceneSubsidyHint(p, myPrice);
  } else if (p.strategy === 'service' && p.state === 'orange') {
    scenes = sceneServiceSRP(p) + sceneServiceFilter(p);
  } else {
    scenes = sceneLeadingSRP(p);
  }

  return `<div class="fp">
    <div class="fp-hd"><span class="cat-ic">${cat.icon}</span> ${cat.title} · 前台展示样式（与「↑ 预计流量 ${p.gain}」联动）</div>
    <div class="fp-body">${scenes}</div>
    <div class="fp-ft">前台展示量 <b>${p.gain}</b> · 预计成交转化 <b>+${cvr}%</b></div>
  </div>`;
}

// ============ 场景 ============
function sceneBefore(p) {
  return `<div class="fp-scene">
    <div class="fp-tab bad">修复前 · 前台不展示</div>
    ${phWrap(
      phSearchBar(p.competitor.name.slice(0,8)) +
      `<div class="fp-empty"><div class="fp-empty-ic">🚫</div>
        <div>您的商品 <b>质量分 ${p.score}</b><br>不进入搜索结果流量池</div>
      </div>`
    )}
  </div>`;
}
function sceneAfterQuality(p) {
  const c = p.competitor;
  return `<div class="fp-scene">
    <div class="fp-tab good">修复后 · SRP 出现 (类目筛选命中)</div>
    ${phWrap(
      phSearchBar(p.competitor.name.slice(0,8)) +
      phFilters(['销量','价格','✓ 类目'], 2) +
      phCardMine(p, `<span class="ph-nw">NEW · 修复上架</span>`) +
      phCardNormal(c)
    )}
  </div>`;
}

function sceneSubsidySRP(p, myPrice) {
  const newPrice = p.id==='r3' ? myPrice-30 : myPrice-5;
  return `<div class="fp-scene">
    <div class="fp-tab sub">SRP 结果页 · 卡片左上「百亿补贴」金标</div>
    ${phWrap(
      phSearchBar(p.id==='r3'?'男士夹克':'小雏菊卫衣') +
      phFilters(['销量','价格↓','✓ 百亿补贴'], 2) +
      phCardMine(p, `<span class="ph-bb">🏷 百亿补贴 ¥${newPrice}</span>`, newPrice) +
      phCardNormal(p.competitor, `<span class="ph-bb">🏷 百亿补贴</span>`)
    )}
  </div>`;
}
function sceneSubsidyHint(p, myPrice) {
  const newPrice = p.id==='r3' ? myPrice-30 : myPrice-5;
  const kw = p.id==='r3' ? '男士夹克 秋冬' : '雏菊卫衣 女';
  return `<div class="fp-scene">
    <div class="fp-tab sub">搜索底纹 · 补贴价前置展示</div>
    ${phWrap(
      phSearchBarEmpty() +
      `<div class="ph-sec">猜你想搜</div>
      <div class="ph-tags">
        <span class="hot mine">🏷 补贴价 ¥${newPrice}（您的款）</span>
        <span>${kw}</span>
        <span>同款低价</span>
        <span>百亿补贴</span>
        <span>新款 秋冬</span>
      </div>`
    )}
  </div>`;
}

function sceneServiceSRP(p) {
  return `<div class="fp-scene">
    <div class="fp-tab svc">SRP 结果页 · 卡片底部服务 icon 表达</div>
    ${phWrap(
      phSearchBar('设计感腋下包') +
      phFilters(['销量','价格','✓ 破损包退','✓ 48h'], 2) +
      phCardMine(p, `<span class="ph-svc-row"><span class="ph-svc-i">🛡 破损包退</span><span class="ph-svc-i">⚡ 48h发货</span></span>`) +
      phCardNormal(p.competitor, `<span class="ph-svc-row"><span class="ph-svc-i">🛡 破损包退</span><span class="ph-svc-i">⚡ 48h</span><span class="ph-svc-i">✅ 运费险</span></span>`)
    )}
  </div>`;
}
function sceneServiceFilter(p) {
  return `<div class="fp-scene">
    <div class="fp-tab svc">搜索筛选 · 进入服务流量池</div>
    ${phWrap(
      `<div class="ph-sec">服务筛选</div>
      <div class="ph-filter-list">
        <div class="ph-fl-row checked"><span class="ph-cb">✓</span> 🛡 破损包退 <span class="ph-fl-meta">您已开通</span></div>
        <div class="ph-fl-row checked"><span class="ph-cb">✓</span> ⚡ 48h 发货 <span class="ph-fl-meta">您已开通</span></div>
        <div class="ph-fl-row"><span class="ph-cb">○</span> 🚚 运费险 <span class="ph-fl-meta meta-warn">未开通 · 失去 35% 流量</span></div>
        <div class="ph-fl-row"><span class="ph-cb">○</span> 🎁 七天无理由 <span class="ph-fl-meta">未开通</span></div>
        <div class="ph-fl-row"><span class="ph-cb">○</span> 📞 24h 客服 <span class="ph-fl-meta">未开通</span></div>
      </div>`
    )}
  </div>`;
}

function sceneLeadingSRP(p) {
  return `<div class="fp-scene">
    <div class="fp-tab good">SRP 首屏 TOP 1 · 综合权重领跑</div>
    ${phWrap(
      phSearchBar('女士运动套装') +
      phFilters(['综合 ↓','销量','价格'], 0) +
      phCardMine(p, `<span class="ph-bb">🏆 TOP1 · 服务全开通</span><span class="ph-svc-row"><span class="ph-svc-i">🛡</span><span class="ph-svc-i">⚡</span><span class="ph-svc-i">🚚</span></span>`)
    )}
  </div>`;
}

// ============ atoms ============
function phWrap(inner){return `<div class="fp-phone">${inner}</div>`;}
function phSearchBar(kw){return `<div class="ph-sb"><span class="ph-sb-ic">🔍</span><input value="${kw}"><span class="ph-sb-btn">搜索</span></div>`;}
function phSearchBarEmpty(){return `<div class="ph-sb"><span class="ph-sb-ic">🔍</span><input placeholder="搜索商品"><span class="ph-sb-btn">搜索</span></div>`;}
function phFilters(arr, hi){return `<div class="ph-fil">${arr.map((s,i)=>`<span class="${i===hi?'hl':''}">${s}</span>`).join('')}</div>`;}

function phCardMine(p, extra, customPrice){
  const price = customPrice ? `¥${customPrice}` : p.price;
  return `<div class="ph-it me">
    <img class="ph-p" src="${p.picUrl}">
    <div class="ph-m">
      <div class="ph-n">${p.name}</div>
      <div class="ph-pr">${price}<span class="ph-mine-tag">您的款</span></div>
      ${extra||''}
    </div>
  </div>`;
}
function phCardNormal(c, extra){
  return `<div class="ph-it">
    <img class="ph-p" src="${c.picUrl}">
    <div class="ph-m">
      <div class="ph-n">${c.name}</div>
      <div class="ph-pr">${c.price}</div>
      ${extra||''}
    </div>
  </div>`;
}
