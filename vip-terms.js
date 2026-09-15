const vipTermsEditor=document.querySelector('#vipTermsEditor');
if(vipTermsEditor){
document.querySelectorAll('.rich-toolbar button').forEach(btn=>btn.onclick=()=>{vipTermsEditor.focus();document.execCommand(btn.dataset.cmd,false,btn.dataset.value||null)});
const pageSave=document.querySelector('#pageConfigSaveBtn');if(pageSave)pageSave.addEventListener('click',()=>{if(!vipTermsEditor.innerText.trim()){alert('请输入VIP条款与规则');return}localStorage.setItem('vipTermsHtml',vipTermsEditor.innerHTML)});
document.querySelector('#vipTermsPreviewBtn').onclick=()=>{const w=window.open('','vipTermsPreview','width=760,height=680');w.document.write('<title>VIP条款与规则预览</title><style>body{font-family:Microsoft YaHei;padding:28px;line-height:1.8;color:#333}</style><h2>VIP条款与规则</h2><div>'+vipTermsEditor.innerHTML+'</div>');w.document.close()};
const saved=localStorage.getItem('vipTermsHtml');if(saved)vipTermsEditor.innerHTML=saved;
}
