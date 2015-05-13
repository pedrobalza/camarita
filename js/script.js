	// primero se carga todo, luego si el dispositivo esta ready, ejecuta la funcion "onDeviceReady"

    window.addEventListener('load', function(){
    	// Wait for PhoneGap to load
   		document.addEventListener("deviceready", arrancar, false);
    }, false);
    

    // PhoneGap is ready
    function arrancar() {
    	var startBtn = $('#startBtn');
    	var stopBtn = $('#stopBtn');
    	
    	startBtn.click(function(){
    		sacarfoto();
    	});
    	   	
    }
    
    // Start watching the compass
    function sacarfoto() {
        navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.DATA_URL
        });

    }

    
    function onSuccess(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }