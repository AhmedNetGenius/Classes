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
}

function takeSnap()
{
    Webcam.snap(function(e){
        
    })
}