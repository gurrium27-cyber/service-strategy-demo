// 续接 ssd.js - 领跑型 cell 剩余部分 + 抽屉

function buildLeadCell2(p) {
  return `
  <div class="cc lead">
    <div class="cc-hd g">⚡ ${p.stateTxt} · 击败 <b>${p.beatBy}%</b> 同款（共 ${p.sameQty} 件）</div>
    <div class="cc-loss">
      <div class="cc-l-it"><div class="cc-l-v g">+${fmt(p.leadExp)}</div><div class="cc-l-k">日均加权曝光</div></div>
      <div class="cc-l-it"><div class="cc-l-v g">+¥${fmt(p.leadGmv)}</div><div class="cc-l-k">日均产出 GMV</div></div>
      <div class="cc-l-it"><div class="cc-l-v g">+${p.leadOrder}</div><div class="cc-l-k">日均订单</div></div>
    </div>
    <div class="cc-fe-title">您在 3 个前台流量位的 <b class="g">领跑</b> 表现：</div>
    <div class="cc-fe">
      <div class="cc-fe-it"><span class="cc-fe-ic">🔎</span>
        <div class="cc-fe-bd"><div class="cc-fe-k">搜索SRP · 服务icon</div>
        <div class="cc-fe-d"><b class="g">${p.fe.icon.cur}</b> · 同款最优</div></div>
        <span class="cc-fe-up g">✓ 领跑</span></div>
      <div class="cc-fe-it"><span class="cc-fe-ic">💡</span>
        <div class="cc-fe-bd"><div class="cc-fe-k">搜索底纹 · 服务词前置</div>
        <div class="cc-fe-d"><b class="g">${p.fe.hint.cur}</b></div></div>
        <span class="cc-fe-up g">✓ 领跑</span></div>
      <div class="cc-fe-it"><span class="cc-fe-ic">🔧</span>
        <div class="cc-fe-bd"><div class="cc-fe-k">搜索筛选 · 服务筛选项</div>
        <div class="cc-fe-d"><b class="g">${p.fe.filter.cur}</b></div></div>
        <span class="cc-fe-up g">✓ 领跑</span></div>
    </div>
    <div class="cc-act">
      <button class="cc-btn pri" onclick="openDr('${p.id}')">查看流量明细</button>
      <button class="cc-btn" onclick="openDr('${p.id}')">复制到其他商品</button>
    </div>
  </div>`;
}
// 替换 buildLeadCell 为完整版
window.buildLeadCell = buildLeadCell2;

// ========== 抽屉 ==========
function openDr(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  const tag = document.getElementById('drTag');
  tag.textContent = p.stateTxt;
  tag.className = 'tag ' + p.state[0];
  document.getElementById('drBody').innerHTML = buildDrBody(p);
  document.getElementById('mask').classList.add('on');
  document.getElementById('dr').classList.add('on');
}
function closeDr() {
  document.getElementById('mask').classList.remove('on');
  document.getElementById('dr').classList.remove('on');
}

function buildDrBody(p) {
  const isLead = p.state === 'green';
  const c = p.state[0];
  // 顶部 KPI
  const kpi = isLead
    ? `<div class="fb-stat">
        <div class="it g"><b>TOP ${100-p.beatBy}%</b>同款竞争力</div>
        <div class="it g"><b>+¥${fmt(p.leadGmv)}/日</b>服务加权产出</div>
        <div class="it g"><b>${p.leadOrder}/日</b>稳定订单</div>
      </div>`
    : `<div class="fb-stat">
        <div class="it ${c}"><b>落后 ${p.beatBy}%</b>同款 ${p.sameQty} 件击败您</div>
        <div class="it ${c}"><b>-${fmt(p.lostExp)}/日</b>流失曝光</div>
        <div class="it ${c}"><b>-¥${fmt(p.lostGmv)}/日</b>流失 GMV</div>
      </div>`;

  // 同款竞品
  const competiteRows = !isLead ? `
    <tr><td>破损包退</td><td><span class="svc-i no">未开通</span></td><td><span class="svc-i">已开通</span></td><td>92%</td><td><span class="imp">流量 -18%</span></td></tr>
    <tr><td>48小时发货</td><td><span class="svc-i no">未开通</span></td><td><span class="svc-i">已开通</span></td><td>87%</td><td><span class="imp">点击 -12%</span></td></tr>
    <tr><td>7天无理由</td><td><span class="svc-i">已开通</span></td><td><span class="svc-i">已开通</span></td><td>100%</td><td><span class="imp g">持平</span></td></tr>
    <tr><td>运费险</td><td><span class="svc-i no">未开通</span></td><td><span class="svc-i">已开通</span></td><td>78%</td><td><span class="imp">转化 -9%</span></td></tr>
    <tr><td>极速退款</td><td><span class="svc-i">已开通</span></td><td><span class="svc-i">已开通</span></td><td>65%</td><td><span class="imp g">领先</span></td></tr>` : `
    <tr><td>破损包退</td><td><span class="svc-i">已开通</span></td><td><span class="svc-i">已开通</span></td><td>92%</td><td><span class="imp g">领先</span></td></tr>
    <tr><td>48小时发货</td><td><span class="svc-i">已开通</span></td><td><span class="svc-i">已开通</span></td><td>87%</td><td><span class="imp g">领先</span></td></tr>
    <tr><td>7天无理由</td><td><span class="svc-i">已开通</span></td><td><span class="svc-i">已开通</span></td><td>100%</td><td><span class="imp g">持平</span></td></tr>
    <tr><td>运费险</td><td><span class="svc-i">已开通</span></td><td><span class="svc-i">已开通</span></td><td>78%</td><td><span class="imp g">领先</span></td></tr>
    <tr><td>极速退款</td><td><span class="svc-i">已开通</span></td><td><span class="svc-i">已开通</span></td><td>65%</td><td><span class="imp g">独家</span></td></tr>`;

  return `
  ${kpi}

  <!-- ① 同款竞品 -->
  <div class="dr-card">
    <h4>① 同款竞品 <span class="badge">近30天同款成交TOP10</span></h4>
    <div class="sub">系统识别您与同款 TOP3 的服务项差异，影响列即流量/转化抓手。</div>
    <table class="gap-tbl">
      <thead><tr><th>服务项</th><th>您的商品</th><th>同款TOP3</th><th>覆盖率</th><th>影响</th></tr></thead>
      <tbody>${competiteRows}</tbody>
    </table>
  </div>

  <!-- ② 前台样式预览 -->
  <div class="dr-card">
    <h4>② 服务项在前台应用 <span class="badge">补齐后的真实展示效果</span></h4>
    <div class="sub">${isLead?'您的商品在 3 个前台流量位均处于优势位置：':'补齐核心服务后，您的商品将在 3 个前台流量位获得加权展示：'}</div>
    <div class="pv-row">
      ${buildPhone1(p, isLead)}
      ${buildPhone2(p, isLead)}
      ${buildPhone3(p, isLead)}
    </div>
  </div>

  <!-- ③ 流量加权 -->
  <div class="dr-card">
    <h4>③ 流量加权 <span class="badge">服务→搜推算法加权明细</span></h4>
    <div class="sub">${isLead?'当前生效的服务加权项：':'补齐每项服务对应的搜推流量加权数值（基于平台公开规则）：'}</div>
    ${buildWeights(p, isLead)}
    ${!isLead ? `
    <div class="dr-sum">
      <div class="dr-sum-l">
        <div class="dr-sum-k">合计预估 7 天增量</div>
        <div class="dr-sum-v">曝光 +${fmt(p.recExp*7)} · <span class="g">GMV +¥${fmt(p.recGmv*7)}</span> · 订单 +${p.recOrder*7}</div>
      </div>
      <button class="cc-btn pri big">一键应用全部服务方案</button>
    </div>` : ''}
  </div>
  `;
}

// 注意：buildPhone2、buildPhone3、buildWeights 在 ssd3.js 中定义

function buildPhone1(p, isLead) {
  return `
  <div class="pv">
    <div class="pv-h a">① 搜索结果页 · 服务icon</div>
    <div class="ph">
      <div class="ph-sb">🔍 <input value="${p.name.slice(0,4)}"></div>
      <div class="ph-fil"><span>综合</span><span>销量</span><span>价格</span><span>筛选</span></div>
      <div class="ph-it hi">
        <div class="ph-p">${p.pic}</div>
        <div class="ph-m">
          <div class="ph-n"><span class="ph-rank up">${isLead?'第1位':'第2位 ↑'}</span>${p.name.slice(0,12)}</div>
          <div class="ph-pr">${p.price}</div>
          <div class="ph-svc"><span>破损包退</span><span>48h发</span><span>运费险</span></div>
        </div>
      </div>
      <div class="ph-it">
        <div class="ph-p">📦</div>
        <div class="ph-m">
          <div class="ph-n">同款竞品 B</div>
          <div class="ph-pr">¥69</div>
          <div class="ph-svc"><span>破损包退</span><span>48h发</span></div>
        </div>
      </div>
      <div class="ph-it">
        <div class="ph-p">📦</div>
        <div class="ph-m">
          <div class="ph-n">同款竞品 C</div>
          <div class="ph-pr">¥79</div>
          <div class="ph-svc"><span>破损包退</span></div>
        </div>
      </div>
    </div>
  </div>`;
}
