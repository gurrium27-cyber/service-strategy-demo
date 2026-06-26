const IMG = {
  d1: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=120&h=120&fit=crop',
  d1c:'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=80&h=80&fit=crop',
  d2: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=120&h=120&fit=crop',
  d2c:'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=80&h=80&fit=crop',
  d3: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=120&h=120&fit=crop',
  d4: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=120&h=120&fit=crop',
  d5: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=120&h=120&fit=crop'
};

const ROWS = [
  {
    pic: IMG.d1, pcls:'pk',
    name:'2024新款法式碎花连衣裙女夏季薄款气质收腰显瘦中长款雪纺裙子',
    pid:'7856231094521',
    tag:'同款之宝',
    price:'¥168.00', stock:'15,832', total:'15,832', d30:'2,456',
    state:'lead', leadPct:82,
    time:'2024-02-14 00:00:00', status:'出售中', statusCls:''
  },
  {
    pic: IMG.d2, pcls:'bl',
    name:'春秋季新款男士连帽卫衣宽松潮牌休闲运动开衫外套上衣男装',
    pid:'6543218790456',
    tag:'',
    price:'¥259.00', stock:'8,320', total:'8,320', d30:'968',
    state:'behind', behindPct:68,
    // ⚠️ 待提升 - 命中服务策略（退货宝）
    strategy:{
      desc:'<b>215个订单</b>流量支持<b>退货宝</b>的同款竞品',
      competitor:{ pic: IMG.d2c, shop:'XX旗舰店 · 同款卫衣', sale:'月销 3,420 件', price:'¥219' },
      svcTags:['退货宝','顺丰包邮','破损包退'],
      cta:'开通退货宝'
    },
    time:'2024-02-14 00:00:00', status:'出售中', statusCls:''
  },
  {
    pic: IMG.d3, pcls:'yl',
    name:'夏季纯棉圆领短袖T恤女宽松百搭印花上衣学生韩版ins潮',
    pid:'3219087654321',
    tag:'',
    price:'¥79.90', stock:'42,180', total:'42,180', d30:'5,678',
    state:'lead', leadPct:91,
    time:'2024-02-14 00:00:00', status:'出售中', statusCls:''
  },
  {
    pic: IMG.d4, pcls:'gr',
    name:'秋冬新款中长款风衣女英伦风双排扣气质大衣宽松过膝外套',
    pid:'4567890123456',
    tag:'',
    price:'¥399.00', stock:'3,210', total:'3,210', d30:'456',
    state:'lead', leadPct:76,
    time:'2024-02-14 00:00:00', status:'仓库中', statusCls:'warn'
  },
  {
    pic: IMG.d5, pcls:'lb',
    name:'高腰直筒牛仔裤女春秋新款小个子显瘦显高阔腿裤宽松拖地长裤',
    pid:'8901234567890',
    tag:'',
    price:'¥129.00', stock:'28,450', total:'28,450', d30:'3,892',
    state:'lead', leadPct:88,
    time:'2024-02-14 00:00:00', status:'出售中', statusCls:''
  }
];

function buildCompCell(r) {
  if (r.state === 'lead') {
    return `
      <div class="comp-state lead"><span class="dot"></span>领先${r.leadPct}%同款竞品</div>
      <div class="comp-meta">商品暂无优化建议，请保持优势！</div>
    `;
  }
  // behind - 待提升类
  const s = r.strategy;
  return `
    <div class="comp-state behind"><span class="dot"></span>落后${r.behindPct}%同款竞品</div>
    <div class="comp-meta">${s.desc}</div>
    <div class="comp-card">
      <div class="comp-card-pic"><img src="${s.competitor.pic}" alt=""></div>
      <div class="comp-card-body">
        <div class="comp-card-shop">${s.competitor.shop}</div>
        <div class="comp-card-meta">${s.competitor.sale} · <span class="price">${s.competitor.price}</span></div>
      </div>
    </div>
    <div class="svc-tags">${s.svcTags.map(t=>`<span class="svc-tag">${t}</span>`).join('')}</div>
    <a class="comp-cta">${s.cta}</a>
  `;
}

function render() {
  const tb = document.getElementById('tbody');
  tb.innerHTML = ROWS.map(r => `
    <tr>
      <td class="ck"><input type="checkbox"></td>
      <td>
        <div class="prd">
          <div class="pic ${r.pcls}"><img src="${r.pic}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:4px"></div>
          <div class="prd-body">
            <div class="prd-name">${r.name}</div>
            <div class="prd-pid">商品ID ${r.pid} 📋</div>
            <div class="prd-tags">
              ${r.tag?`<span class="prd-tag">${r.tag}</span>`:''}
              <span class="prd-share">⊘ 分享 ${r.state==='behind'?'<span class="heart">♡</span>':''}</span>
            </div>
          </div>
        </div>
      </td>
      <td class="col-price">${r.price}</td>
      <td class="col-num">${r.stock}</td>
      <td class="col-num">${r.total}</td>
      <td class="col-num">${r.d30}</td>
      <td class="col-comp">${buildCompCell(r)}</td>
      <td class="col-time">
        ${r.time}
        <span class="stat ${r.statusCls}">${r.status}</span>
      </td>
      <td class="col-op">
        <a>编辑商品</a>
        <a>编辑素材</a>
        <a class="more">更多</a>
      </td>
    </tr>
  `).join('');
}

document.addEventListener('DOMContentLoaded', render);
