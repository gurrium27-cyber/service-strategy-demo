// 同款竞品明细（hover popup 内容）
const COMP_DETAIL = {
  r1: [
    {n:'M号 直筒牛仔裤 男 春夏新款', s:'3,248 销/30天', p:'¥98', t:'已开通破损包退'},
    {n:'宽松直筒牛仔裤 男士 韩版', s:'2,856 销/30天', p:'¥109', t:'已开通48h发货'},
    {n:'潮牌牛仔长裤 男 显瘦', s:'1,920 销/30天', p:'¥115', t:'已加入百亿补贴'}
  ],
  r2: [
    {n:'法式茶歇连衣裙 收腰显瘦', s:'5,120 销/30天', p:'¥189', t:'类目:连衣裙'},
    {n:'气质长裙 法式复古', s:'3,640 销/30天', p:'¥198', t:'类目:连衣裙'},
    {n:'方领茶歇裙 夏新款', s:'2,890 销/30天', p:'¥179', t:'类目:连衣裙'}
  ],
  r3: [
    {n:'港风字母夹克 男 秋冬', s:'1,820 销/30天', p:'¥259', t:'🏷 百亿补贴中'},
    {n:'复古印花外套 男士潮牌', s:'1,540 销/30天', p:'¥269', t:'🏷 百亿补贴中'},
    {n:'宽松工装夹克 男 韩版', s:'1,260 销/30天', p:'¥279', t:'🏷 百亿补贴中'}
  ],
  r4: [
    {n:'雏菊插肩卫衣 短款 女', s:'920 销/30天', p:'¥55', t:'7 天降价 ¥4 ↓'},
    {n:'明线卫衣 纯棉 韩版', s:'860 销/30天', p:'¥53', t:'7 天降价 ¥6 ↓'},
    {n:'插肩袖卫衣 薄款 女', s:'780 销/30天', p:'¥56', t:'7 天降价 ¥3 ↓'}
  ],
  r5: [
    {n:'设计感腋下包 通勤 女', s:'2,180 销/30天', p:'¥158', t:'✅ 5项服务全开通'},
    {n:'单肩手提包 百搭 2026新', s:'1,920 销/30天', p:'¥168', t:'✅ 5项服务全开通'},
    {n:'小众设计包包 法式优雅', s:'1,560 销/30天', p:'¥175', t:'✅ 5项服务全开通'}
  ],
  r6: [
    {n:'女士休闲套装 卫衣两件套', s:'1,120 销/30天', p:'¥135', t:'落后 18 分'},
    {n:'运动套装 宽松显瘦 女', s:'980 销/30天', p:'¥139', t:'落后 22 分'},
    {n:'卫衣长裤两件套 春季新款', s:'870 销/30天', p:'¥129', t:'落后 25 分'}
  ]
};

// 前台展示样式（hover popup 内容）
function fePopHTML(p) {
  if (p.strategy === 'quality') {
    return `
      <div class="fe-row"><div class="fe-tag err">SRP 不展示</div><div class="fe-desc">商品状态异常，搜索/推荐全量屏蔽</div></div>
      <div class="fe-row"><div class="fe-tag err">底纹屏蔽</div><div class="fe-desc">底纹词「${p.pic === '👖' ? '牛仔裤男' : '连衣裙'}」不收录</div></div>
      <div class="fe-row"><div class="fe-tag ok">修复后 →</div><div class="fe-desc">进入「猜你想搜」+ 类目筛选 + SRP 主流量</div></div>
    `;
  }
  if (p.strategy === 'subsidy') {
    return `
      <div class="fe-row"><div class="fe-tag sub">SRP 补贴标</div><div class="fe-desc">列表卡片左上角「百亿补贴」金标</div></div>
      <div class="fe-row"><div class="fe-tag sub">补贴会场</div><div class="fe-desc">百亿补贴频道首页类目位曝光</div></div>
      <div class="fe-row"><div class="fe-tag sub">底纹/猜搜</div><div class="fe-desc">底纹词带「补贴价 ¥${p.id==='r3'?269:54}」前置展示</div></div>
    `;
  }
  return `
    <div class="fe-row"><div class="fe-tag svc">SRP 服务icon</div><div class="fe-desc">卡片底部 🛡 破损包退 + ⚡ 48h发货</div></div>
    <div class="fe-row"><div class="fe-tag svc">搜索筛选</div><div class="fe-desc">用户筛「破损包退」时进入流量池</div></div>
    <div class="fe-row"><div class="fe-tag svc">底纹/猜搜</div><div class="fe-desc">服务词「48h发货」前置展示</div></div>
  `;
}

function buildCell(p) {
  const stateLabel = {red:'竞争力差', orange:'有差距', green:'领先'}[p.state];
  const head = `
    <div class="comp-head st-${p.state}">
      <span class="state-pill st-${p.state}">${stateLabel}</span>
      <span class="comp-meta">同款 <b>${p.sameQty}</b> 件 · 击败您 <b>${p.beatBy}%</b></span>
    </div>
    <div class="comp-headline">${p.headline}</div>
  `;

  const hooksHTML = p.hooks.map((h, i) => {
    const hasPop = h.pop;
    return `
      <div class="hook ${h.primary?'pri':''} ${hasPop?'hov':''}" data-pop="${h.pop||''}" data-pid="${p.id}">
        <div class="hk-ic">${h.ic}</div>
        <div class="hk-body">
          <div class="hk-row1">
            <span class="hk-act">${h.act}</span>
            <span class="hk-gain ${p.state==='red'?'g-red':p.state==='green'?'g-grn':'g-org'}">${h.gain}</span>
          </div>
          <div class="hk-sub">${h.sub}</div>
        </div>
        <a class="hk-cta">${h.cta} ›</a>
        ${hasPop ? `<div class="popover pop-${h.pop}">${buildPop(p, h.pop)}</div>` : ''}
      </div>
    `;
  }).join('');

  return head + `<div class="hooks">${hooksHTML}</div>`;
}

function buildPop(p, type) {
  if (type === 'comp') {
    const items = COMP_DETAIL[p.id] || [];
    return `
      <div class="pop-title">📦 近30天同款成交 TOP3</div>
      ${items.map(it => `
        <div class="pop-comp-row">
          <div class="pop-comp-name">${it.n}</div>
          <div class="pop-comp-meta"><span>${it.s}</span><span class="pop-comp-price">${it.p}</span></div>
          <div class="pop-comp-tag">${it.t}</div>
        </div>
      `).join('')}
      <div class="pop-foot">点击「一键应用服务方案」查看完整对比 →</div>
    `;
  }
  return `
    <div class="pop-title">🔍 前台展示样式预览</div>
    ${fePopHTML(p)}
    <div class="pop-foot">三处前台位均与搜推权重直接挂钩</div>
  `;
}
