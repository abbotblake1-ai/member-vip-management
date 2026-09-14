const seed=[
 [0,'vip0','','','',1,999,'10,000','','','',''],[1,'VIP1','6','0','0',1,999,'10,000','1,000','3,000','2,000','4,000'],[2,'VIP2','10','1,001','10',1,999,'200,000','2,000','4,000','3,000','5,000'],[3,'VIP3','15','15','200',1,999,'50,000','3,000','5,000','4,000','6,000'],
 [4,'VIP4','20','30','25',1,999,'250,000','4,000','6,000','5,000','7,000'],[5,'VIP5','30','40','35',1,999,'250,000','','','',''],[6,'VIP6','40','50','45',1,999,'250,000','','','',''],[7,'VIP7','500','600','550',1,999,'300,000','','','',''],
 [8,'VIP8','1,000','1,000','1,500','124',999,'300,000','','','',''],[9,'VIP9','1,500','1,500','1,505',1,999,'300,000','','','',''],[10,'VIP10','3,000,000','','588',1,999,'','','','',''],[11,'VIP11','10,000,000','100,000,000','100,000,000',1,999,'1,234,567,890,123','','','','']
];
const tbody=document.querySelector('#vipRows');
function render(data){tbody.innerHTML=data.map((row,i)=>`<tr>${row.map((v,j)=>j===0?`<td>${v}</td>`:`<td><input aria-label="VIP${i} ${j}" value="${v}" placeholder="请输入"></td>`).join('')}</tr>`).join('')}
render(seed);
const rebateSeed=[
 ['VIP0','','','','','',''],['VIP1','1','','1','1','1','1'],['VIP2','0.5','2','2','2','2','2'],['VIP3','0.5','0.5','0.5','0.5','0.5','0'],
 ['VIP4','4','4','4','4','4','4'],['VIP5','5','5','5','5','5','5'],['VIP6','6','6','6','6','6','6'],['VIP7','7','7','7','7','7','7'],
 ['VIP8','8','8','8','8','8','8'],['VIP9','9','9','9','9','9','9'],['VIP10','10','10','10','10','10','10'],['VIP11','11','11','11','11','11','11']
];
const rebateBody=document.querySelector('#rebateRows');
function renderRebates(data){rebateBody.innerHTML=data.map((row,i)=>`<tr><td>${row[0]}</td>${row.slice(1).map((v,j)=>`<td><div class="percent-input"><input aria-label="${row[0]} 返水比例 ${j+1}" value="${v}" placeholder="请输入百分比" inputmode="decimal"><span>%</span></div></td>`).join('')}</tr>`).join('')}
renderRebates(rebateSeed);
const recordSeed=[
 ['2026-09-03 15:52:36','升级','VIP0','VIP1','taotest036','APP登录,7天未登录,7天未充值,30天未下注','dtest123','正常','自动调整','VIP字段升级: 升级VIP1|存款 1 / 1；流水 0 / 0（扣除存款 1；流水 0）','admin'],
 ['2026-08-31 17:52:04','升级','VIP0','VIP1','ningkeuat001','APP登录,7天未登录,7天未充值,15天未下注','doraaffuat01','正常','自动调整','VIP字段升级: 升级VIP1|存款 1 / 1；流水 0 / 0（扣除存款 1；流水 0）','admin'],
 ['2026-08-29 17:35:20','升级','VIP0','VIP1','elisa1','APP登录,7天未登录,15天未充值,7天未下注','doraaffuat01','正常','自动调整','VIP字段升级: 升级VIP1|存款 1 / 1；流水 0 / 0（扣除存款 1；流水 0）','admin'],
 ['2026-08-29 10:19:21','升级','VIP0','VIP1','mikeyxr011','同IP会员,APP登录,同设备号会员,7天未登录,15天未充值,15天未下注','doraaffuat01','正常','自动调整','VIP字段升级: 升级VIP1|存款 1 / 1；流水 0 / 0（扣除存款 1；流水 0）','admin'],
 ['2026-08-29 10:19:17','升级','VIP0','VIP1','mikeyxr012','同IP会员,APP登录,同设备号会员,7天未登录,15天未充值,15天未下注','doraaffuat01','正常','自动调整','VIP字段升级: 升级VIP1|存款 1 / 1；流水 0 / 0（扣除存款 1；流水 0）','admin']
];
const recordBody=document.querySelector('#recordRows');
function renderRecords(data){recordBody.innerHTML=data.map(row=>`<tr>${row.map((v,i)=>i===2||i===3?`<td><span class="vip-badge">${v}</span></td>`:i===7?`<td><span class="normal-badge">${v}</span></td>`:`<td>${v}</td>`).join('')}</tr>`).join('');document.querySelector('#emptyRecords').hidden=data.length>0}
renderRecords(recordSeed);
const toast=document.querySelector('#toast');function notify(msg){toast.textContent=msg;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1800)}
document.querySelector('#saveBtn').onclick=()=>{const values=[...tbody.rows].map((tr,i)=>[i,...tr.querySelectorAll('input')].map((x,j)=>j?x.value:x));localStorage.setItem('vip-config',JSON.stringify(values));notify('保存成功')};
document.querySelector('#restoreBtn').onclick=()=>{const saved=localStorage.getItem('vip-config');render(saved?JSON.parse(saved):seed);notify(saved?'已恢复上次保存的设置':'已恢复默认设置')};
document.querySelectorAll('.tab').forEach(btn=>btn.onclick=()=>{document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));btn.classList.add('active');const type=btn.dataset.tab;document.querySelector('#configPanel').hidden=type!=='等级配置';document.querySelector('#rebatePanel').hidden=type!=='返水配置';document.querySelector('#recordPanel').hidden=type!=='等级变更记录';const placeholder=type==='权益配置';document.querySelector('#placeholderPanel').hidden=!placeholder;document.querySelector('#placeholderTitle').textContent=btn.textContent});
document.querySelector('#rebateSwitch').onclick=()=>{const el=document.querySelector('#rebateSwitch');const on=el.getAttribute('aria-checked')!=='true';el.setAttribute('aria-checked',String(on));el.classList.toggle('on',on);el.querySelector('em').textContent=on?'开':'关'};
document.querySelector('#rebateSaveBtn').onclick=()=>{const state={multiple:document.querySelector('#turnoverMultiple').value,enabled:document.querySelector('#rebateSwitch').getAttribute('aria-checked')==='true',rates:[...rebateBody.rows].map(tr=>[...tr.querySelectorAll('input')].map(x=>x.value))};localStorage.setItem('vip-rebate-config',JSON.stringify(state));notify('返水配置保存成功')};
document.querySelector('#recordFilters').onsubmit=e=>{e.preventDefault();const type=document.querySelector('#changeType').value;const account=document.querySelector('#memberAccount').value.trim().toLowerCase();const operator=document.querySelector('#operator').value.trim().toLowerCase();renderRecords(recordSeed.filter(row=>(!type||row[1]===type)&&(!account||row[4].toLowerCase().includes(account))&&(!operator||row[10].toLowerCase().includes(operator))));notify('查询完成')};
document.querySelector('#recordFilters').onreset=()=>setTimeout(()=>{renderRecords(recordSeed);notify('已重置查询条件')});
document.querySelector('#exportBtn').onclick=()=>notify('导出任务已创建');
document.querySelector('#memberToggle').onclick=()=>{const m=document.querySelector('#memberMenu');m.hidden=!m.hidden};
document.querySelector('#collapseBtn').onclick=()=>{document.querySelector('#sidebar').classList.toggle('collapsed');document.querySelector('.workspace').classList.toggle('expanded')};
