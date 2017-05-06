
document.querySelector('.sm_menu_nav').onclick = function() {
	
	document.querySelector('.sm_menu_nav .burger').classList.toggle("open");
	if((document.querySelector('nav ul').style.display) == 'flex'){
		document.querySelector('nav ul').style.display = '';
	}
	else{
		document.querySelector('nav ul').style.display = 'flex';
	}
console.log(document.querySelector('nav ul').style.display)
}



document.querySelector('.sm_menu').onclick = function() {
	
	document.querySelector('.sm_menu .burger').classList.toggle("open");
	if((document.querySelector('.categories ul').style.display) == 'block'){
		document.querySelector('.categories ul').style.display = '';
	}
	else{
		document.querySelector('.categories ul').style.display = 'block';
	}
console.log(document.querySelector('.categories ul').style.display)
}
