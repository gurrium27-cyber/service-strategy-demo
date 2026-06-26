// 真实商品图（Unsplash）+ 每行只展示一个策略
const IMG = {
  jeans: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=160&h=160&fit=crop',
  jeans2: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=160&h=160&fit=crop',
  dress: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=160&h=160&fit=crop',
  dress2: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=160&h=160&fit=crop',
  jacket: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=160&h=160&fit=crop',
  jacket2: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=160&h=160&fit=crop',
  hoodie: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=160&h=160&fit=crop',
  hoodie2: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=160&h=160&fit=crop',
  bag: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=160&h=160&fit=crop',
  bag2: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=160&h=160&fit=crop',
  sport: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=160&h=160&fit=crop',
  sport2: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=160&h=160&fit=crop'
};

const products = [
  {
    id:'r1', picUrl:IMG.jeans,
    name:'男士牛仔裤 直筒宽松显瘦版型 春夏新款潮流百搭长裤',
    pid:'10572584211150', score:60, price:'¥111.00', stock:111, sales:0, sales30:0,
    strategy:'quality', state:'red',
    headline:'商品SKU不可购 · 请立即修改SKU类型',
    sameQty:41, beatBy:92,
    tag:'同款全质量', tagCls:'q',
    compete:'15 个同款已修复 SKU',
    act:'修复 SKU 类型 + 补全标题',
    gain:'+90%',
    cta:'一键修复',
    competitor:{picUrl:IMG.jeans2,name:'M号 直筒牛仔裤 男 修复版',sub:'✅ 质量分 95 · SKU 完整 · 已售 3,248',price:'¥118',advantage:'同款已修复 SKU + 标题完整'}
  },
  {
    id:'r2', picUrl:IMG.dress,
    name:'法式茶歇连衣裙 女夏季新款气质收腰长裙 V领修身显瘦',
    pid:'10561057380830', score:55, price:'¥200.00', stock:99, sales:0, sales30:0,
    strategy:'quality', state:'red',
    headline:'类目错挂 + 标题违禁词 · 质量分锁死',
    sameQty:36, beatBy:88,
    tag:'同款全质量', tagCls:'q',
    compete:'18 个同款已修复',
    act:'重选类目 + 改标题违禁词',
    gain:'+95%',
    cta:'去修改',
    competitor:{picUrl:IMG.dress2,name:'法式茶歇连衣裙 收腰显瘦',sub:'✅ 类目正确 · 无违禁词 · 已售 5,120',price:'¥189',advantage:'同款已正确挂类目'}
  },
  {
    id:'r3', picUrl:IMG.jacket,
    name:'复古港风字母印花百搭宽松男士夹克外套秋冬款新品',
    pid:'10571928374650', score:95, price:'¥299.00', stock:320, sales:432, sales30:56,
    strategy:'subsidy', state:'orange',
    headline:'差 ¥30 即可进入「百亿补贴」白名单',
    sameQty:18, beatBy:35,
    tag:'同款低价', tagCls:'s',
    compete:'15 个同款已降价',
    act:'降价 ¥30 → ¥269，进入百亿补贴池',
    gain:'+180%',
    cta:'去降价',
    competitor:{picUrl:IMG.jacket2,name:'港风字母夹克 男 秋冬',sub:'🏷 已入百亿补贴池 · 享免佣流量加权',price:'¥269',advantage:'同款已加入「百亿补贴」'}
  },
  {
    id:'r4', picUrl:IMG.hoodie,
    name:'MardiMercredi小雏菊插肩薄卫衣明线短款休闲纯棉上衣女',
    pid:'10567644947040', score:100, price:'¥59.00', stock:87, sales:768, sales30:68,
    strategy:'subsidy', state:'orange',
    headline:'已在补贴 · 同款再降 ¥4，您即将掉出补贴位',
    sameQty:24, beatBy:18,
    tag:'同款低价', tagCls:'s',
    compete:'7 个同款跟降',
    act:'跟降 ¥5 → ¥54，守住补贴位',
    gain:'+30%',
    cta:'去降价',
    competitor:{picUrl:IMG.hoodie2,name:'明线卫衣 纯棉 韩版 短款',sub:'🏷 跟降进补贴 · 抢走您 12% 流量',price:'¥54',advantage:'同款已跟降进入补贴位'}
  },
  {
    id:'r5', picUrl:IMG.bag,
    name:'小众设计感单肩腋下包 女 2026新款百搭通勤手提包',
    pid:'10583746591200', score:92, price:'¥168.00', stock:240, sales:156, sales30:32,
    strategy:'service', state:'orange',
    headline:'缺「破损包退」+「48h发货」· 服务分拖累点击率',
    sameQty:22, beatBy:28,
    tag:'同款服务好', tagCls:'v',
    compete:'18 个同行已开通',
    act:'补「破损包退 + 48h发货」',
    gain:'+30%',
    cta:'一键开通',
    competitor:{picUrl:IMG.bag2,name:'设计感腋下包 通勤 女',sub:'🛡破损包退 ⚡48h ✅运费险 三服务全开',price:'¥158',advantage:'同款已开通 3 项服务（您 0 项）'}
  },
  {
    id:'r6', picUrl:IMG.sport,
    name:'2025春季新款女士休闲运动套装宽松显瘦两件套卫衣长裤',
    pid:'10589234567890', score:100, price:'¥128.00', stock:156, sales:1520, sales30:234,
    strategy:'service', state:'green',
    headline:'综合竞争力领跑同款 · 服务/价格/补贴全维度领先',
    sameQty:31, beatBy:95,
    tag:'领跑同款', tagCls:'g',
    compete:'已击败 95% 同款',
    act:'维持当前策略 · 加投流量包扩量',
    gain:'+20%',
    cta:'去推广',
    competitor:{picUrl:IMG.sport2,name:'女士休闲套装 卫衣两件套',sub:'仅 1 项服务 · 综合分落后您 18 分',price:'¥135',advantage:'同款各维度均落后您'}
  }
];

function renderTable(){
  const tb=document.getElementById('tbody');
  tb.innerHTML=products.map(p=>{
    const qs=p.score<80?`<span class="qs alert">质量分 ${p.score} ⤴</span>`:`<span class="qs">质量分 ${p.score} ⤴</span>`;
    return `<tr>
      <td class="ck"><input type="checkbox"></td>
      <td><div class="prd">
        <div class="pic"><img src="${p.picUrl}" alt=""></div>
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
