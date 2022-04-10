function openModal() {

    var modalContent = document.getElementById("modelContent");
    modalContent.innerHTML = '<dialog open id="dialog" class="dialog" onclick="closeModal();"><iframe style="border: 0px; " src="' + src + '.html" width="100%" height="100%></iframe><div class="close" oneclick="closeModal();">x</div></dialog>';
}

function closeModal() {

    var dialog = document.getElementById("dialog");
    dialog.close();
}
