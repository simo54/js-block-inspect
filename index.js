function CombinationListener(e) {
	const evtobj = window.event ? event : e;
	if (evtobj.keyCode == 73 && evtobj.ctrlKey && evtobj.shiftKey);
	e.preventDefault();
	return;
}

function blockInspectTab() {
	document.onkeydown = CombinationListener;
	document.addEventListener('contextmenu', (event) => event.preventDefault());
}

module.exports = blockInspectTab;
