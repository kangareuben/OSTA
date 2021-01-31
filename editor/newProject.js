function newProject() {
	var title = document.getElementById("titleField").value.trim();
	var author = document.getElementById("authorField").value.trim();
	
	// Handle no title
	if(title == "") {
		title = "My Text Adventure";
	}
	
	// Strip whitespace for filename
	var sanitizedTitle = title.replace(/\s+/g, '');
	
	// Download initial file
	var el = document.createElement('a');
	el.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(
		'<!DOCTYPE html><html lang="en"><head><meta charset="utf-8">\n<meta author="' + author + '">\n<title>' + title + '</title></head><body><p>Testing</p></body></html>'
	));
	el.setAttribute('download', sanitizedTitle + ".html");
	el.style.display = 'none';
	document.body.appendChild(el);
	el.click();
	document.body.removeChild(el);
}