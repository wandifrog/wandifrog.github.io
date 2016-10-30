

// var halaman = 1;
// slideShow(halaman);
// Slide artikel
var halaman = document.getElementsByClassName('en-data');
halaman[0].style.display = "block";

var slideIndex = 1;
showSlides(slideIndex);

function changeSlide(x) {
	showSlides(slideIndex += x); 
}

function showSlides(x) {
	var i 
	var slides = document.getElementsByClassName("en-data");
	if (x > slides.length) {slideIndex = 1} 
	if (x < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
	slides[i].style.display = "none"; 
	}
	slides[slideIndex-1].style.display = "block"; 
}


document.addEventListener('keyup', function(e) {
    if (e.keyCode == 37) {
        document.querySelector('.part-2').classList.toggle("block");
        document.querySelector('.sementara').classList.toggle("change");
    }
});
document.addEventListener('keyup', function(e) {
    if (e.keyCode == 39) {
        document.querySelector('.part-2').classList.toggle("block");
        document.querySelector('.sementara').classList.toggle("change");
    }
});

var audioAll = document.getElementsByTagName('audio'),
    pause    = document.getElementById('pause'),
    volume   = document.getElementById('volume');  

function playMusic(x){
    var audio   = document.getElementById('track-0'+x);
    function forloop(){
        for (var i = 0; i < audioAll.length; i++) {
            if (audioAll[i].play()) {
            audioAll[i].pause();
            audioAll[i].currentTime = 0;
            audioAll[i].loop = false;
            audioAll[i].removeAttribute('class');
            } 
        }  
        audio.play();
        audio.className='inikelas';
        pause.innerHTML='pause';
    } 
    function playkey(a){
    var numberAudio = document.getElementById('track-0'+a);
        for (var i = 0; i < audioAll.length; i++) {
            if (audioAll[i].play()) {
            audioAll[i].pause();
            audioAll[i].currentTime = 0;
            audioAll[i].loop = false;
            audioAll[i].removeAttribute('class');
            } 
        }  
        numberAudio.play();
        numberAudio.loop = true;
        numberAudio.className='inikelas';
        pause.innerHTML='pause';
    }
    document.addEventListener('keypress', function(e) {
        if (e.keyCode == 49) {
            playkey(1);
        }
        if (e.keyCode == 50) {
            playkey(2);
        }
        if (e.keyCode == 51) {
            playkey(3);
        }
        if (e.keyCode == 52) {
            playkey(4);
        }
        if (e.keyCode == 53) {
            playkey(5);
        }
        if (e.keyCode == 54) {
            playkey(6);
        }
        if (e.keyCode == 55) {
            playkey(7);
        }
        if (e.keyCode == 56) {
            playkey(8);
        }
        if (e.keyCode == 57) {
            playkey(9);
        }
        if (e.keyCode == 48) {
            playkey(0);
        }
        if (e.keyCode == 112) {
            if (pause.innerHTML=='pause') {
                pause.innerHTML='play_arrow';
                document.querySelectorAll('audio[class]')[0].pause();
            } else {
                pause.innerHTML='pause';
                document.querySelectorAll('audio[class]')[0].play();
            }
        }
        if (e.keyCode == 109) {
            if (volume.innerHTML=='volume_off') {
                volume.innerHTML='volume_up';
                document.querySelectorAll('audio[class]')[0].muted=true;
            } else {
                volume.innerHTML='volume_off';
                document.querySelectorAll('audio[class]')[0].muted=false;
            }
        }
    });
     switch (x) {
        case 1 :
            forloop(); 
            break;
        case 2 : 
            forloop(); 
            break;
        case 3 : 
            forloop(); 
            break;
        case 4 : 
            forloop();    
            break;
        case 5 : 
            forloop();    
            break;
        case 6 : 
            forloop();    
            break;
        case 7 : 
            forloop();    
            break;
        case 8 : 
            forloop();
            break;
        case 9 : 
            forloop();
            break;
        case 0 : 
            forloop();
            break;
        case 11 :
            if (pause.innerHTML=='pause') {
                pause.innerHTML='play_arrow';
                document.querySelectorAll('audio[class]')[0].pause();
            } else {
                pause.innerHTML='pause';
                document.querySelectorAll('audio[class]')[0].play();
            }
            break;
        case 12 :
            if (volume.innerHTML=='volume_off') {
                volume.innerHTML='volume_up';
                document.querySelectorAll('audio[class]')[0].muted=true;
            } else {
                volume.innerHTML='volume_off';
                document.querySelectorAll('audio[class]')[0].muted=false;
            }
            break;
    }
    // document.querySelectorAll('audio[class]')[0].addEventListener("ended", function(){
    //     alert('press 1-10');
    // });
}

// Toggle Menu
function sementara() {
    var x = document.querySelector('.sementara');
    var y = document.querySelector('.part-2');
    var z = document.querySelector('.sementara-feedback');
    y.classList.toggle("block");
    x.classList.toggle("change");
    z.classList.toggle("sementara-feedback-2");
}

// TIME
var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var hours = d.getHours();
var minutes = d.getMinutes();
var year = d.getYear();
if(hours<10) {
    hours = "0" + hours
} 
if (minutes < 10) {
	minutes = "0" + minutes
}
year = year + 1900;
document.querySelector("#hari").innerHTML = days[d.getDay()];
document.querySelector("#tanggal").innerHTML = d.getDate() + " " + months[d.getMonth()] + ", " + year;
document.querySelector("#jam").innerHTML = hours + ":" + minutes;
