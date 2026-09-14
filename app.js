const seed=[
 [0,'vip0','','','',1,999,'10,000'],[1,'VIP1','6','0','0',1,999,'10,000'],[2,'VIP2','10','1,001','10',1,999,'200,000'],[3,'VIP3','15','15','200',1,999,'50,000'],
 [4,'VIP4','20','30','25',1,999,'250,000'],[5,'VIP5','30','40','35',1,999,'250,000'],[6,'VIP6','40','50','45',1,999,'250,000'],[7,'VIP7','500','600','550',1,999,'300,000'],
 [8,'VIP8','1,000','1,000','1,500','124',999,'300,000'],[9,'VIP9','1,500','1,500','1,505',1,999,'300,000'],[10,'VIP10','3,000,000','','588',1,999,''],[11,'VIP11','10,000,000','100,000,000','100,000,000',1,999,'1,234,567,890,123']
];
const tbody=document.querySelector('#vipRows');
function render(data){tbody.innerHTML=data.map((row,i)=>`<tr>${row.map((v,j)=>j===0?`<td>${v}</td>`:`<td><input aria-label="VIP${i} ${j}" value="${v}" placeholder="请输入"></td>`).join('')}</tr>`).join('')}
render(seed);
const toast=document.querySelector('#toast');function notify(msg){toast.textContent=msg;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1800)}
document.querySelector('#saveBtn').onclick=()=>{const values=[...tbody.rows].map((tr,i)=>[i,...tr.querySelectorAll('input')].map((x,j)=>j?x.value:x));localStorage.setItem('vip-config',JSON.stringify(values));notify('保存成功')};
document.querySelector('#restoreBtn').onclick=()=>{const saved=localStorage.getItem('vip-config');render(saved?JSON.parse(saved):seed);notify(saved?'已恢复上次保存的设置':'已恢复默认设置')};
document.querySelectorAll('.tab').forEach(btn=>btn.onclick=()=>{document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));btn.classList.add('active');const main=btn.dataset.tab==='等级配置';document.querySelector('#configPanel').hidden=!main;document.querySelector('#placeholderPanel').hidden=main;document.querySelector('#placeholderTitle').textContent=btn.textContent});
document.querySelector('#memberToggle').onclick=()=>{const m=document.querySelector('#memberMenu');m.hidden=!m.hidden};
document.querySelector('#collapseBtn').onclick=()=>{document.querySelector('#sidebar').classList.toggle('collapsed');document.querySelector('.workspace').classList.toggle('expanded')};
