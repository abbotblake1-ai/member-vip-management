const vipTermsEditor=document.querySelector('#vipTermsEditor');
if(vipTermsEditor){
document.querySelectorAll('.rich-toolbar button').forEach(btn=>btn.onclick=()=>{vipTermsEditor.focus();const value=btn.dataset.prompt?prompt(btn.dataset.prompt):btn.dataset.value||null;if(btn.dataset.cmd==='createLink'&&!value)return;document.execCommand(btn.dataset.cmd,false,value)});document.querySelectorAll('.rich-toolbar input[type=color]').forEach(input=>input.oninput=()=>{vipTermsEditor.focus();document.execCommand(input.dataset.cmd,false,input.value)});
let vipTermsDraft='';const confirmBtn=document.querySelector('#vipTermsConfirmBtn');if(confirmBtn)confirmBtn.onclick=()=>{if(!vipTermsEditor.innerText.trim()){alert('请输入VIP条款与规则');return}vipTermsDraft=vipTermsEditor.innerHTML;localStorage.setItem('vipTermsHtml',vipTermsDraft);alert('已确定')};const cancelBtn=document.querySelector('#vipTermsCancelBtn');if(cancelBtn)cancelBtn.onclick=()=>{vipTermsEditor.innerHTML=vipTermsDraft};
const saved=localStorage.getItem('vipTermsHtml');if(saved)vipTermsEditor.innerHTML=saved;
}
