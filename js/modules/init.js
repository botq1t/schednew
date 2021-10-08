export function setMainMaxHeight() {
	let windowHeight = window.innerHeight;
	let headerHeight = document.querySelector('.header').clientHeight;
	let footerHeight = document.querySelector('.footer').clientHeight;
	$('.main').css('max-height', (windowHeight - headerHeight - footerHeight));
}