let keyarr= Array.from(document.getElementsByClassName('keybutton'));

const keyCodes = [

    {filepath:"assets/boom.wav",heading:"A",subtitle:"clap"},
    
    {filepath:"assets/clap.wav",heading:"B",subtitle:"hihat"},
    {filepath:"assets/hihat.wav",heading:"c",subtitle:"kick"},
    {filepath:"assets/kick.wav",heading:"D",subtitle:"openhat"},
    {filepath:"assets/openhat.wav",heading:"E",subtitle:"boom"},
    {filepath:"assets/ride.wav",heading:"F",subtitle:"ride"},
    {filepath:"assets/sanre.wav",heading:"X",subtitle:"snare"},
    {filepath:"assets/tink.wav",heading:"Y",subtitle:"tom"},
    {filepath:"assets/tom.wav",heading:"Z",subtitle:"tink"}
]

keyarr.forEach((element,i)=>{
    element.getElementsByTagName("kbd")[0].innerHTML=keyCodes[i].heading;
    element.getElementsByTagName("p")[0].innerHTML=keyCodes[i].subtitle;
})

window.addEventListener("keydown",(e)=>{
    const audioElement= document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key=document.querySelector(`div[data-key="${e.keyCode}"]`);
    audioElement.currentTime=0;

            if(audioElement.paused)  
           audioElement.play();

           key.classList.add('playing');
           
           console.log(e.keyCode);
/*
    keyCodes.forEach((element)=>{
        if(e.keyCode==el   audioElement.src=element.filepath;
            audioElement.currentTime=0;

            //if(audioElement.paused)  
           try{ audioElement.play();}
           catch(e){
               console.log(e);
           }
        }

    })
    console.log(e.keyCode);
    //if(e.keyCode==65) audioElement.play();

    */
 })


  keyarr.forEach((element)=>{
      element.addEventListener('transitionend',transitonremove)
  })

  function transitonremove(e){//e is the event
      console.log(e);//as there are many transition which will occure so we can focus on only one transition.when
      //that trrasnition gets over(generally the longest one) then we can aplly removetrasntion
      if (e.propertyName!=='transform') return;
       this.classList.remove('playing');//this refers to the elemnt of keyarr
  }

 



    
