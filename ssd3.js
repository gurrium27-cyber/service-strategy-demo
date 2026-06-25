function buildPhone2(p, isLead) {
  return `
  <div class="pv">
    <div class="pv-h a">② 搜索底纹 · 服务词前置</div>
    <div class="ph">
      <div class="ph-sb">🔍 <input placeholder="搜索"></div>
      <div class="ph-sec">猜你想搜</div>
      <div class="ph-tags">
        <span class="hot">破损包退 ${p.name.slice(0,2)}</span>
        <span class="hot">48h发货 ${p.name.slice(0,2)}</span>
        <span>2026新款</span>
        <span>正品保障</span>
      </div>
      <div class="ph-sec">服务好物推荐</div>
      <div class="ph-it" style="border:none">
        <div class="ph-p">${p.pic}</div>
        <div class="ph-m">
          <div class="ph-n">${isLead?'<span class="ph-rank up">TOP1</span>':''}${p.name.slice(0,10)}</div>
          <div class="ph-pr">${p.price}</div>
          <div class="ph-svc"><span>全服务</span></div>
        </div>
      </div>
    </div>
  </div>`;
}

function buildPhone3(p, isLead) {
  return `
  <div class="pv">
    <div class="pv-h a">③ 搜索筛选 · 服务筛选项</div>
    <div class="ph">
      <div class="ph-sb">🔍 <input value="${p.name.slice(0,4)}"></div>
      <div class="ph-sec">服务筛选</div>
      <div class="ph-tags">
        <span class="hot">✓ 破损包退</span>
        <span class="hot">✓ 48h发货</span>
        <span>7天无理由</span>
        <span>运费险</span>
      </div>
      <div class="ph-it hi">
        <div class="ph-p">${p.pic}</div>
        <div class="ph-m">
          <div class="ph-n"><span class="ph-rank up">推荐</span>${p.name.slice(0,10)}</div>
          <div class="ph-pr">${p.price}</div>
          <div class="ph-svc"><span>破损包退</span><span>48h发</span></div>
        </div>
      </div>
      <div class="ph-it" style="opacity:.35">
        <div class="ph-p">📦</div>
        <div class="ph-m">
          <div class="ph-n" style="color:#86909c">不符合筛选 · 同款被过滤</div>
          <div class="ph-pr" style="color:#86909c">¥69</div>
        </div>
      </div>
    </div>
  </div>`;
}

function buildWeights(p, isLead) {
  if (isLead) {
    return `
    <div class="weight-row"><div class="wn">破损包退<span class="wm">同款核心</span></div><div class="wv">+18% 搜索曝光</div><div class="wb done">✓ 生效</div></div>
    <div class="weight-row"><div class="wn">48小时发货<span class="wm">同款核心</span></div><div class="wv">+12% 推荐曝光</div><div class="wb done">✓ 生效</div></div>
    <div class="weight-row"><div class="wn">运费险<span class="wm">标配</span></div><div class="wv">+9% 转化加权</div><div class="wb done">✓ 生效</div></div>
    <div class="weight-row"><div class="wn">7天无理由<span class="wm">基础</span></div><div class="wv">+5% 基础权重</div><div class="wb done">✓ 生效</div></div>
    <div class="weight-row"><div class="wn">极速退款<span class="wm">差异化</span></div><div class="wv">+3% 信任度</div><div class="wb done">✓ 生效</div></div>`;
  }
  const has = s => !p.miss.includes(s);
  const row = (n,t,v) => has(n)
    ? `<div class="weight-row"><div class="wn">${n}<span class="wm">${t}</span></div><div class="wv">${v}</div><div class="wb done">✓ 已开通</div></div>`
    : `<div class="weight-row need"><div class="wn">${n}<span class="wm">${t}</span></div><div class="wv hl">${v}</div><div class="wb" onclick="this.className='wb done';this.textContent='✓ 已应用'">一键开通</div></div>`;
  return row('破损包退','同款核心·必选','+18% 搜索曝光')
       + row('48h发货','同款核心·必选','+12% 推荐曝光')
       + row('运费险','同款标配','+9% 转化加权')
       + row('7天无理由','基础服务','+5% 基础权重')
       + row('极速退款','差异化','+3% 信任度');
}

document.addEventListener('DOMContentLoaded', function(){
  renderTable();
  document.getElementById('mask').addEventListener('click', closeDr);
});
