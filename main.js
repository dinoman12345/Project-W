function start(){navigator.mediaDevices.getUserMedia({ audio: true});

    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/vL4aYKrMe/model.json',modelloaded);

}
cat=0;
dog=0;
dino=0;
cow=0;
function modelloaded(){
    console.log("modelloaded");
    classifier.classify(gotresult);
}

function gotresult(error,result){
    if(error){
        console.log(error);
    }       
    else{
        console.log(result);
        color = Math.floor(Math.random() * 255) + 1;
        color2 = Math.floor(Math.random() * 255) + 1;
        color3 = Math.floor(Math.random() * 255) + 1;
        document.getElementById("hear").innerHTML="Detected voice is: "+result[0].label;
        document.getElementById("accuracy").innerHTML='Detected Dog - '+dog+ ' Detected Cat - '+cat+ '    Detected dino =  '    +dino+ '    detected cow  =   ' +cow;
     document.getElementById("hear").style.color = "rgb("+color+","+color2+","+color3+")";
     document.getElementById("accuracy").style.color = "rgb("+color+","+color2+","+color3+")";
   Aliens1= document.getElementById("Image1");
   

    if(result[0].label=="Background Noise"){
      Aliens1.src="listen.gif";
     
    }    
    else if(result[0].label=="Dog"){
        Aliens1.src="dog.jfif";
        dog=dog+1;
    }
    else if(result[0].label=="Cat"){
        Aliens1.src="cat.jpg";
        cat=cat+1;
    }

    else if(result[0].label=="Cow"){
        Aliens1.src="Cowe.png";
        cow=cow+1;
    }


    
    else {
        Aliens1.src="dino.jfif";
       dino=dino+1;
    }   
    }
    }