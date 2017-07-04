window.onload = function() {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {}
        }
    });

    // Sample code
    //var mainPage = document.querySelector('#main');
    var contentText = document.querySelector('#content-text');
    var btn1 = document.querySelector('#right');
    var btn2 = document.querySelector('#left');
    var picture = document.querySelector('#pic');

    btn1.addEventListener("click", function() {
    	if(picture.style.visibility === 'visible'){
    			            picture.style.visibility = 'hidden';
    			        }
    			        else{
    			            picture.style.visibility = 'visible';
    			        }});
    btn2.addEventListener("click", function() {
    	if (contentText.innerHTML !== "экран") {contentText.innerHTML = "экран";} else {contentText.innerHTML = screen.height + "X" + screen.width;}
    	 });
    };
//		mainPage.addEventListener("click", function() {
//   	 var contentText = document.querySelector('#content-text');
//
//        contentText.innerHTML = (contentText.innerHTML === "Basic") ? "Tizen" : "Basic";
//    });
//};