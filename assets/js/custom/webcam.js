let videoSection  = document.getElementById('videsection');
let results       = document.getElementById('results'); 
let download      = document.getElementById('download');


function opencam()
{
    Webcam.set({
        width : 400 ,
        height : 350 ,
        image_format : 'Png' ,
        Png_quality : 90
    });
    Webcam.attach(videoSection);
    videoSection.style.display = 'block' ;
    results.style.display = 'none' ;    
    download.style.display = 'none' ;
}

function takeSnap()
{
    Webcam.snap(function(e){
        results.innerHTML = "<img src = "+e+">" ;
        videoSection.style.display = 'none' ;
        download.innerHTML = "<a href = "+e+" download >Download Image</a>";
        results.style.display = 'block' ;    
        download.style.display = 'block' ;
        Webcam.reset(); 
    })
}

function camclose()
{
    Webcam.reset();
    videoSection.style.display = 'none' ;
    results.style.display = 'none' ;    
    download.style.display = 'none' ;
}