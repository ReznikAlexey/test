const doThings = (event) => {
    const { value, min, max, step, parentElement: parent } = event.target
    const decimals = step && step.includes('.') ? step.split('.')[1] : 1
    const percent = `${((value - min)/(max - min) * 100).toFixed(decimals)}%`
    parent.style.setProperty('--p', percent)
    }

    //button
    const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
    const menuIcon = document.querySelector('.menu-icon');
    const sidebar = document.querySelector('.header__menu');

    sidebarToggleBtn.onclick = function () {
	    menuIcon.classList.toggle('menu-icon-active');
        sidebar.classList.toggle('header__menu--mobile-active');
}