const burger = document.querySelector('.burger'),
nav = document.querySelector('.nav-links')
function slider (){
	burger.addEventListener('click',()=>{
		nav.classList.toggle('nav-active')
		burger.classList.toggle('toggle')
	})
}
slider()