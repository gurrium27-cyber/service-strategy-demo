// 6 个商品 × 3 个执行档位（tiers）
// strategy: quality(质量分) / subsidy(百亿补贴) / service(服务)
const products = [
  // ---- r1 质量分 · 红 ----
  {
    id:'r1', pic:'👖', picCls:'pp',
    name:'测试请不要拍 · 男士牛仔裤直筒宽松显瘦版型',
    pid:'10572584211150', score:60, price:'¥111.00', stock:111, sales:0, sales30:0,
    strategy:'quality', state:'red',
    headline:'商品SKU不可购 · 请立即修改SKU类型',
    sameQty:41, beatBy:92,
    tiers:[
      {tag:'轻量修复',compete:'3个同行已修复',act:'修改 SKU 类型',gain:'+30%',cta:'去修改',vs:{pic:'👖',name:'M号 直筒牛仔裤 男',sub:'✅ SKU 已修复',price:'¥118'}},
      {tag:'中度修复',compete:'9个同行已修复',act:'改 SKU + 补标题',gain:'+60%',cta:'去修改',vs:{pic:'👖',name:'宽松直筒牛仔裤 男士',sub:'✅ SKU+标题 修复',price:'¥109'}},
      {tag:'全量修复',compete:'15个同行已修复',act:'SKU+标题+主图',gain:'+90%',cta:'一键修复',vs:{pic:'👖',name:'潮牌牛仔长裤 男',sub:'✅ 质量分 95',price:'¥115'}}
    ]
  },
  // ---- r2 质量分 · 红 ----
  {
    id:'r2', pic:'👗', picCls:'rd',
    name:'法式茶歇连衣裙女夏季新款气质收腰长裙',
    pid:'10561057380830', score:55, price:'¥200.00', stock:99, sales:0, sales30:0,
    strategy:'quality', state:'red',
    headline:'类目错挂 + 标题违禁词 · 质量分锁死',
    sameQty:36, beatBy:88,
    tiers:[
      {tag:'轻量修复',compete:'5个同行已修复',act:'重选类目',gain:'+40%',cta:'去修改',vs:{pic:'👗',name:'法式茶歇连衣裙',sub:'✅ 类目:连衣裙',price:'¥189'}},
      {tag:'中度修复',compete:'12个同行已修复',act:'类目 + 标题违禁词',gain:'+70%',cta:'去修改',vs:{pic:'👗',name:'气质长裙 法式复古',sub:'✅ 类目+标题 修复',price:'¥198'}},
      {tag:'全量修复',compete:'18个同行已修复',act:'类目+标题+属性',gain:'+95%',cta:'一键修复',vs:{pic:'👗',name:'方领茶歇裙 夏新款',sub:'✅ 质量分 92',price:'¥179'}}
    ]
  },
  // ---- r3 百亿补贴 · 橙 ----
  {
    id:'r3', pic:'🧥', picCls:'bl',
    name:'复古港风字母印花百搭宽松男士夹克外套秋冬款新品',
    pid:'10571928374650', score:95, price:'¥299.00', stock:320, sales:432, sales30:56,
    strategy:'subsidy', state:'orange',
    headline:'差 ¥30 即可进入「百亿补贴」白名单',
    sameQty:18, beatBy:35,
    tiers:[
      {tag:'同款低价',compete:'3个同款已降价',act:'降价 ¥10 → ¥289',gain:'+15%',cta:'去降价',vs:{pic:'🧥',name:'港风字母夹克 男',sub:'🏷 拼多多百亿补贴',price:'¥289'}},
      {tag:'同款低价',compete:'9个同款已降价',act:'降价 ¥20 → ¥279',gain:'+50%',cta:'去降价',vs:{pic:'🧥',name:'复古印花外套 男',sub:'🏷 京东自营补贴',price:'¥279'}},
      {tag:'同款低价',compete:'15个同款已降价',act:'降价 ¥30 → ¥269',gain:'+180%',cta:'去降价',vs:{pic:'🧥',name:'宽松工装夹克 男',sub:'🏷 进入百亿补贴池',price:'¥269'}}
    ]
  },
  {id:'r4',pic:'👕',picCls:'gn',name:'MardiMercredi小雏菊插肩薄卫衣明线短款休闲纯棉上衣女',pid:'10567644947040',score:100,price:'¥59.00',stock:87,sales:768,sales30:68,strategy:'subsidy',state:'orange',headline:'已在补贴 · 同款再降 ¥4，您即将掉出补贴位',sameQty:24,beatBy:18,tiers:[
    {tag:'同款低价',compete:'2个同款跟降',act:'降价 ¥3 → ¥56',gain:'+10%',cta:'去降价',vs:{pic:'👕',name:'雏菊插肩卫衣 女',sub:'守住基础流量位',price:'¥56'}},
    {tag:'同款低价',compete:'7个同款跟降',act:'降价 ¥5 → ¥54',gain:'+30%',cta:'去降价',vs:{pic:'👕',name:'明线卫衣 纯棉 韩版',sub:'🏷 保住补贴位',price:'¥54'}},
    {tag:'同款低价',compete:'12个同款跟降',act:'降价 ¥8 → ¥51',gain:'+60%',cta:'去降价',vs:{pic:'👕',name:'插肩袖卫衣 薄款',sub:'🏷 升至补贴TOP3',price:'¥51'}}
  ]},
  {id:'r5',pic:'👜',picCls:'pk',name:'小众设计感单肩腋下包女2026新款百搭通勤手提包',pid:'10583746591200',score:92,price:'¥168.00',stock:240,sales:156,sales30:32,strategy:'service',state:'orange',headline:'缺「破损包退」+「48h发货」· 服务分拖累点击率',sameQty:22,beatBy:28,tiers:[
    {tag:'同款服务好',compete:'18个同行已开通',act:'补「破损包退」',gain:'+18%',cta:'去开通',vs:{pic:'👜',name:'设计感腋下包 通勤',sub:'🛡 破损包退',price:'¥158'}},
    {tag:'同款服务好',compete:'15个同行已开通',act:'补「破损+48h」',gain:'+30%',cta:'去开通',vs:{pic:'👜',name:'单肩手提包 百搭',sub:'🛡 ⚡ 双服务加权',price:'¥168'}},
    {tag:'同款服务好',compete:'8个同行全开通',act:'补全 5 项服务',gain:'+45%',cta:'一键开通',vs:{pic:'👜',name:'小众设计包包 优雅',sub:'✅ 5项服务全开通',price:'¥175'}}
  ]},
  {id:'r6',pic:'🦺',picCls:'yl',name:'2025春季新款女士休闲运动套装宽松显瘦两件套卫衣长裤',pid:'10589234567890',score:100,price:'¥128.00',stock:156,sales:1520,sales30:234,strategy:'service',state:'green',headline:'综合竞争力领跑同款 · 服务/价格/补贴全维度领先',sameQty:31,beatBy:95,tiers:[
    {tag:'领跑同款',compete:'已击败 95% 同款',act:'维持当前策略',gain:'+0%',cta:'查看明细',vs:{pic:'🦺',name:'女士休闲套装 卫衣',sub:'落后您 18 分',price:'¥135'}},
    {tag:'同款全服务',compete:'仅 3 家可对比',act:'加投流量包 ¥500',gain:'+20%',cta:'去推广',vs:{pic:'🦺',name:'运动套装 宽松显瘦',sub:'推广 ROI 1:5',price:'¥139'}},
    {tag:'同款扩品',compete:'类目空缺机会',act:'扩品类 5 个 SKU',gain:'+50%',cta:'去扩品',vs:{pic:'🦺',name:'卫衣长裤两件套',sub:'同款连带率 +30%',price:'¥129'}}
  ]}
];

function renderTable(){
  const tb=document.getElementById('tbody');
  tb.innerHTML=products.map(p=>{
    const qs=p.score<80?`<span class="qs alert">质量分 ${p.score} ⤴</span>`:`<span class="qs">质量分 ${p.score} ⤴</span>`;
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
document.addEventListener('DOMContentLoaded',renderTable);
