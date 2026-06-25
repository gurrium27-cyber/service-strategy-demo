// 商品数据 - 强化"商家抓手"：同款数 / 日均流失曝光 / 日均流失GMV / 前台三位 / 流量加权
const products = [
  {
    id: 'r1', pic: '👕', picCls: 'gn',
    name: 'MardiMercredi小雏菊插肩薄卫衣明线短款休闲纯棉上衣女红色新款',
    pid: '10567644947040', score: 100, price: '¥59.00', stock: 87, sales: 768, sales30: 68,
    state: 'orange', stateTxt: '转化遭挤压',
    sameQty: 24, lostExp: 3200, lostGmv: 860, beatBy: 18,
    fe: {icon:{cur:'无标',next:'3个加权icon',up:18}, hint:{cur:'未入选',next:'底纹词第2位',up:12}, filter:{cur:'被过滤',next:'优先展示',up:9}},
    recExp: 5800, recGmv: 1560, recOrder: 12,
    miss: ['破损包退','48h发货'],
    create: '06-08 18:01', publish: '06-08 18:01'
  },
  {
    id: 'r2', pic: '👖', picCls: 'pp',
    name: '测试请不要拍 · 男士牛仔裤直筒宽松显瘦',
    pid: '10572584211150', score: 60, price: '¥111.00', stock: 111, sales: 0, sales30: 0,
    state: 'red', stateTxt: '无法获得搜推曝光',
    sameQty: 41, lostExp: 8600, lostGmv: 2840, beatBy: 90,
    fe: {icon:{cur:'未展示',next:'3个加权icon',up:32}, hint:{cur:'被屏蔽',next:'纳入候选词',up:24}, filter:{cur:'完全过滤',next:'纳入结果',up:28}},
    recExp: 12400, recGmv: 4120, recOrder: 38,
    miss: ['破损包退','48h发货','运费险'],
    create: '06-08 15:46', publish: '06-08 15:46'
  },
  {
    id: 'r3', pic: '👗', picCls: 'rd',
    name: '法式茶歇连衣裙女夏季新款气质收腰长裙',
    pid: '10561057380830', score: 92, price: '¥200.00', stock: 99, sales: 0, sales30: 0,
    state: 'red', stateTxt: '无法获得搜推曝光',
    sameQty: 36, lostExp: 11200, lostGmv: 4480, beatBy: 88,
    fe: {icon:{cur:'未展示',next:'3个加权icon',up:35}, hint:{cur:'被屏蔽',next:'底纹词第4位',up:22}, filter:{cur:'完全过滤',next:'优先展示',up:30}},
    recExp: 15800, recGmv: 6320, recOrder: 32,
    miss: ['破损包退','48h发货','运费险'],
    create: '06-08 10:37', publish: '06-08 10:37'
  },
  {
    id: 'r4', pic: '🦺', picCls: 'yl',
    name: '2025春季新款女士休闲运动套装宽松显瘦两件套卫衣长裤',
    pid: '10589234567890', score: 100, price: '¥128.00', stock: 156, sales: 1520, sales30: 234,
    state: 'green', stateTxt: '综合竞争力领跑同款',
    sameQty: 31, lostExp: 0, lostGmv: 0, beatBy: 95,
    fe: {icon:{cur:'5个icon',next:'保持',up:0}, hint:{cur:'底纹词TOP1',next:'保持',up:0}, filter:{cur:'优先展示',next:'保持',up:0}},
    leadExp: 18600, leadGmv: 23800, leadOrder: 186,
    create: '05-20 09:15', publish: '05-20 09:15'
  },
  {
    id: 'r5', pic: '🧥', picCls: 'bl',
    name: '复古港风字母印花百搭宽松男士夹克外套秋冬款新品',
    pid: '10571928374650', score: 95, price: '¥299.00', stock: 320, sales: 432, sales30: 56,
    state: 'orange', stateTxt: '服务短板拖累点击率',
    sameQty: 18, lostExp: 2100, lostGmv: 1260, beatBy: 15,
    fe: {icon:{cur:'2个icon',next:'5个icon',up:12}, hint:{cur:'底纹词第8位',next:'第3位',up:8}, filter:{cur:'弱展示',next:'优先展示',up:10}},
    recExp: 4200, recGmv: 2520, recOrder: 8,
    miss: ['运费险','破损包退'],
    create: '06-01 14:22', publish: '06-01 14:22'
  },
  {
    id: 'r6', pic: '👜', picCls: 'pk',
    name: '小众设计感单肩腋下包女2026新款百搭通勤手提包',
    pid: '10583746591200', score: 98, price: '¥168.00', stock: 240, sales: 2156, sales30: 312,
    state: 'green', stateTxt: '综合竞争力领跑同款',
    sameQty: 22, lostExp: 0, lostGmv: 0, beatBy: 88,
    fe: {icon:{cur:'5个icon',next:'保持',up:0}, hint:{cur:'底纹词TOP2',next:'保持',up:0}, filter:{cur:'优先展示',next:'保持',up:0}},
    leadExp: 24200, leadGmv: 36800, leadOrder: 218,
    create: '04-15 11:08', publish: '04-15 11:08'
  }
];

function stateIcon(s){if(s==='orange')return '⚠';if(s==='red')return '↘';return '⚡';}
function fmt(n){return n>=1000? (n/1000).toFixed(1)+'k' : n;}

// 渲染表格
function renderTable() {
  const tb = document.getElementById('tbody');
  tb.innerHTML = products.map(p => {
    const compCell = p.state === 'green' ? buildLeadCell(p) : buildGapCell(p, p.state[0]);
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
      <td class="col-comp">${compCell}</td>
      <td class="col-time">${p.create}</td>
      <td class="col-time">${p.publish}<span class="sale">出售中</span></td>
      <td class="col-op"><a>编辑商品</a><a>更多 ›</a></td>
    </tr>`;
  }).join('');
}

// ========== 缺口型 cell ==========
function buildGapCell(p, c) {
  return `
  <div class="cc">
    <div class="cc-hd ${c}">${stateIcon(p.state)} ${p.stateTxt} · 同款 <b>${p.sameQty}</b> 件击败您 <b>${p.beatBy}%</b></div>

    <div class="cc-loss">
      <div class="cc-l-it">
        <div class="cc-l-v ${c}">-${fmt(p.lostExp)}</div>
        <div class="cc-l-k">日均流失曝光</div>
      </div>
      <div class="cc-l-it">
        <div class="cc-l-v ${c}">-¥${fmt(p.lostGmv)}</div>
        <div class="cc-l-k">日均流失 GMV</div>
      </div>
      <div class="cc-l-it">
        <div class="cc-l-v ${c}">${p.miss.length}</div>
        <div class="cc-l-k">缺失服务项</div>
      </div>
    </div>

    <div class="cc-fe-title">补齐 <b>${p.miss.join(' / ')}</b> 后，3 个前台流量位将变化：</div>
    <div class="cc-fe">
      <div class="cc-fe-it">
        <span class="cc-fe-ic">🔎</span>
        <div class="cc-fe-bd">
          <div class="cc-fe-k">搜索SRP · 服务icon</div>
          <div class="cc-fe-d">${p.fe.icon.cur} <span class="arr">→</span> <b>${p.fe.icon.next}</b></div>
        </div>
        <span class="cc-fe-up">+${p.fe.icon.up}%</span>
      </div>
      <div class="cc-fe-it">
        <span class="cc-fe-ic">💡</span>
        <div class="cc-fe-bd">
          <div class="cc-fe-k">搜索底纹 · 服务词前置</div>
          <div class="cc-fe-d">${p.fe.hint.cur} <span class="arr">→</span> <b>${p.fe.hint.next}</b></div>
        </div>
        <span class="cc-fe-up">+${p.fe.hint.up}%</span>
      </div>
      <div class="cc-fe-it">
        <span class="cc-fe-ic">🔧</span>
        <div class="cc-fe-bd">
          <div class="cc-fe-k">搜索筛选 · 服务筛选项</div>
          <div class="cc-fe-d">${p.fe.filter.cur} <span class="arr">→</span> <b>${p.fe.filter.next}</b></div>
        </div>
        <span class="cc-fe-up">+${p.fe.filter.up}%</span>
      </div>
    </div>

    <div class="cc-rec">
      <span class="cc-rec-k">补齐后预估 7 天：</span>
      <span class="cc-rec-v">曝光 +${fmt(p.recExp*7)}</span>
      <span class="cc-rec-v g">GMV +¥${fmt(p.recGmv*7)}</span>
      <span class="cc-rec-v">订单 +${p.recOrder*7}</span>
    </div>

    <div class="cc-act">
      <button class="cc-btn pri" onclick="openDr('${p.id}')">一键应用服务方案</button>
      <button class="cc-btn" onclick="openDr('${p.id}')">查看前台预览</button>
    </div>
  </div>`;
}

// ========== 领跑型 cell - 由 ssd2.js 覆盖 ==========
function buildLeadCell(p) { return '<div class="cc lead">loading...</div>'; }
