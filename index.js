
function CombinationListener(e) {
	var evtobj = window.event ? event : e;
	if (evtobj.keyCode == 73 && evtobj.ctrlKey && evtobj.shiftKey);
	e.preventDefault();
	return;
}

document.onkeydown = CombinationListener;
document.addEventListener('contextmenu', event => event.preventDefault());
