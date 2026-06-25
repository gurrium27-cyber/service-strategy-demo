// 三种策略类型的商品数据
// strategy: 'quality'(质量分) | 'subsidy'(百亿补贴) | 'service'(服务)
const products = [
  // ---- 质量分策略 · 红色（竞争力差）----
  {
    id: 'r1', pic: '👖', picCls: 'pp',
    name: '测试请不要拍 · 男士牛仔裤直筒宽松显瘦版型',
    pid: '10572584211150', score: 60, price: '¥111.00', stock: 111, sales: 0, sales30: 0,
    strategy: 'quality',
    state: 'red',
    headline: '商品SKU不可购 · 立即修改SKU类型',
    sameQty: 41, beatBy: 92,
    // 3个抓手
    hooks: [
      {ic:'🛠', act:'修改 SKU 类型', gain:'流量 +90%', sub:'当前 SKU 不可购，搜推全量屏蔽', cta:'去修改', primary:true},
      {ic:'📦', act:'同款竞品', gain:'41 件压制您', sub:'TOP3 销量 3.2k / 2.8k / 1.9k', cta:'查看明细', pop:'comp'},
      {ic:'🔍', act:'前台展示位', gain:'当前 0 个曝光位', sub:'修复后将进入 3 个流量位', cta:'查看样式', pop:'fe'}
    ]
  },
  {
    id: 'r2', pic: '👗', picCls: 'rd',
    name: '法式茶歇连衣裙女夏季新款气质收腰长裙',
    pid: '10561057380830', score: 55, price: '¥200.00', stock: 99, sales: 0, sales30: 0,
    strategy: 'quality',
    state: 'red',
    headline: '类目错挂 + 标题违禁词 · 质量分锁死',
    sameQty: 36, beatBy: 88,
    hooks: [
      {ic:'🏷', act:'重选类目 + 改标题', gain:'质量分 55→90', sub:'当前类目「家居」与商品不符，含违禁词 3 个', cta:'一键修复', primary:true},
      {ic:'📦', act:'同款竞品', gain:'36 件压制您', sub:'TOP3 同款均在「连衣裙」类目', cta:'查看明细', pop:'comp'},
      {ic:'🔍', act:'前台展示位', gain:'当前完全屏蔽', sub:'修复后进入「茶歇裙」类目流量池', cta:'查看样式', pop:'fe'}
    ]
  },
  // ---- 百亿补贴策略 ----
  {
    id: 'r3', pic: '🧥', picCls: 'bl',
    name: '复古港风字母印花百搭宽松男士夹克外套秋冬款新品',
    pid: '10571928374650', score: 95, price: '¥299.00', stock: 320, sales: 432, sales30: 56,
    strategy: 'subsidy',
    state: 'orange',
    headline: '差 ¥30 即可进入「百亿补贴」白名单',
    sameQty: 18, beatBy: 35,
    hooks: [
      {ic:'💰', act:'降价 ¥30 → ¥269', gain:'流量 +180%', sub:'进入百亿补贴池，新增「补贴标」+「频道入口」', cta:'去调价', primary:true},
      {ic:'📦', act:'同款竞品', gain:'18 件已在补贴', sub:'TOP3 补贴价 ¥259 / ¥269 / ¥279', cta:'查看明细', pop:'comp'},
      {ic:'🏷', act:'前台展示位', gain:'+ 百亿补贴会场 / 底纹 / icon', sub:'三处加权展示，详情页带专属价格标', cta:'查看样式', pop:'fe'}
    ]
  },
  {
    id: 'r4', pic: '👕', picCls: 'gn',
    name: 'MardiMercredi小雏菊插肩薄卫衣明线短款休闲纯棉上衣女',
    pid: '10567644947040', score: 100, price: '¥59.00', stock: 87, sales: 768, sales30: 68,
    strategy: 'subsidy',
    state: 'orange',
    headline: '已在补贴 · 但同款再降 ¥4，您即将掉出补贴位',
    sameQty: 24, beatBy: 18,
    hooks: [
      {ic:'💰', act:'再降 ¥5 → ¥54', gain:'保住补贴位 +30%', sub:'7 个同款已跟进降价，再不动您将被替换', cta:'立即跟降', primary:true},
      {ic:'📦', act:'同款竞品', gain:'7 件跟降中', sub:'同款 A 降 ¥4 / 同款 B 降 ¥6 / 同款 C 降 ¥3', cta:'查看明细', pop:'comp'},
      {ic:'🏷', act:'前台展示位', gain:'守住 3 个补贴位', sub:'掉位将损失 SRP「补贴标」+ 底纹优先', cta:'查看样式', pop:'fe'}
    ]
  },
  // ---- 服务策略 ----
  {
    id: 'r5', pic: '👜', picCls: 'pk',
    name: '小众设计感单肩腋下包女2026新款百搭通勤手提包',
    pid: '10583746591200', score: 92, price: '¥168.00', stock: 240, sales: 156, sales30: 32,
    strategy: 'service',
    state: 'orange',
    headline: '缺「破损包退」+「48h发货」· 服务分拖累点击率',
    sameQty: 22, beatBy: 28,
    hooks: [
      {ic:'🛡', act:'补齐 2 项核心服务', gain:'流量 +30%', sub:'破损包退 +18% / 48h发货 +12% 搜推加权', cta:'一键开通', primary:true},
      {ic:'📦', act:'同款竞品', gain:'18 件已开通', sub:'TOP3 全开通 5 项服务，覆盖率 92%', cta:'查看明细', pop:'comp'},
      {ic:'🔍', act:'前台展示位', gain:'+ 搜索SRP / 底纹 / 筛选', sub:'3 个流量位获得加权 icon 展示', cta:'查看样式', pop:'fe'}
    ]
  },
  {
    id: 'r6', pic: '🦺', picCls: 'yl',
    name: '2025春季新款女士休闲运动套装宽松显瘦两件套卫衣长裤',
    pid: '10589234567890', score: 100, price: '¥128.00', stock: 156, sales: 1520, sales30: 234,
    strategy: 'service',
    state: 'green',
    headline: '综合竞争力领跑同款 · 服务/价格/补贴全维度领先',
    sameQty: 31, beatBy: 95,
    hooks: [
      {ic:'⚡', act:'维持当前策略', gain:'日均 +¥23.8k GMV', sub:'已开通全部 5 项服务 + 补贴位 TOP1', cta:'查看明细', primary:true},
      {ic:'📦', act:'同款竞品', gain:'击败 95% 同款', sub:'综合分领先 TOP2 同款 18 分', cta:'查看明细', pop:'comp'},
      {ic:'🔍', act:'前台展示位', gain:'独占 3 位 TOP1', sub:'SRP/底纹/筛选 均第 1 位展示', cta:'查看样式', pop:'fe'}
    ]
  }
];

// 策略类型样式
const STRATEGY = {
  quality: {tag:'质量分策略', cls:'q'},
  subsidy: {tag:'百亿补贴策略', cls:'s'},
  service: {tag:'服务策略', cls:'v'}
};

function renderTable() {
  const tb = document.getElementById('tbody');
  tb.innerHTML = products.map(p => {
    const qs = p.score < 80
      ? `<span class="qs alert">质量分 ${p.score} ⤴</span>`
      : `<span class="qs">质量分 ${p.score} ⤴</span>`;
    return `<tr>
      <td class="ck"><input type="checkbox"></td>
      <td><div class="prd">
        <div class="pic ${p.picCls}">${p.pic}</div>
        <div>
          <div class="name">${p.name}</div>
          <div class="pid">ID:${p.pid} 📋</div>
          ${qs}
        </div>
      </div></td>
      <td class="col-price">${p.price}</td>
      <td>${p.stock}</td>
      <td>${p.sales}</td>
      <td>${p.sales30}</td>
      <td class="col-comp">${buildCell(p)}</td>
      <td class="col-time">06-08 18:01</td>
      <td class="col-time">06-08 18:01<span class="sale">出售中</span></td>
      <td class="col-op"><a>编辑商品</a><a>更多 ›</a></td>
    </tr>`;
  }).join('');
}

document.addEventListener('DOMContentLoaded', renderTable);
