function mostrarMenu(){
    const menuLateral=document.getElementById('menu-lateral');
    menuLateral.classList.toggle('ativa');

const iconMenu=document.getElementById("ham");
if(iconMenu.src.endsWith("icon-hamburger-menu.png")){
    iconMenu.src="icon-close-menu.png";
} else{
    iconMenu.src="icon-hamburger-menu.png";
}
}