const vipTermsEditor=document.querySelector('#vipTermsEditor');
if(vipTermsEditor){
document.querySelectorAll('.rich-toolbar button').forEach(btn=>btn.onclick=()=>{vipTermsEditor.focus();document.execCommand(btn.dataset.cmd,false,btn.dataset.value||null)});
let vipTermsDraft='';const confirmBtn=document.querySelector('#vipTermsConfirmBtn');if(confirmBtn)confirmBtn.onclick=()=>{if(!vipTermsEditor.innerText.trim()){alert('请输入VIP条款与规则');return}vipTermsDraft=vipTermsEditor.innerHTML;localStorage.setItem('vipTermsHtml',vipTermsDraft);alert('已确定')};const cancelBtn=document.querySelector('#vipTermsCancelBtn');if(cancelBtn)cancelBtn.onclick=()=>{vipTermsEditor.innerHTML=vipTermsDraft};
const saved=localStorage.getItem('vipTermsHtml');if(saved)vipTermsEditor.innerHTML=saved;
}
