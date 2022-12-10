let setting=document.querySelector('.bar');
let links=document.querySelector('.nav-links');
let title=document.querySelector('.title-text');
setting.addEventListener('click',()=>{
	links.classList.toggle('nav-show');
	title.classList.toggle('textHide');
});
