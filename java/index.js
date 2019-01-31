/*Javascript-Dokument*/


function loadPage(url, pix) {

	if(url == 'home.html')
	{
		window.scrollTo(0,0);
	} else {
	window.scrollTo(0, 450);
	}

	var tid = new Date().getTime();
	var end = tid;


	while(end < tid + 100) {
		end =  new Date().getTime();
	}

	var frame = document.getElementById("BigFrame");
	frame.src = url;


	frame.style.height = pix + 'vw';

}