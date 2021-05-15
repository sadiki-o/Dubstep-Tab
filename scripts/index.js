//files names
const sources = [
    'Bassline4.wav',
    'Drum_beat.wav',
    'DubStep-8-DrumLoop.wav',
    'DubStep-dloop.wav',
    'DubStep00_Wet.wav',
    'Dubstep101.wav',
    'DubStep_012Dr.wav',
    'DubStep_03_Kick.wav',
    'DubStep_BassWet.wav',
    'DubStep_04_Dry.wav',
    'DubStep_04_ry.wav',
    'DubStep_Synth.wav',
    'Noise1.wav',
    'distored_loop1.wav',
    'drum_loo.wav',
    'drum_lp13.wav',
    'drum_loop3.wav',
    'drum_loop9.wav',
    'electronic-arabic.wav',
    'electronic13.wav',
    'electronicsnarehit.wav',
    'experimental-electronic.wav',
    'glitch_three.wav',
    'looperman-drums.wav',
    'loopermankick_snare.wav',
    'perc5.wav',
    'tribaldrums1.wav'
  ]

for(let i=0; i < sources.length; i++){
    let s = sources[i].split(".")[0]
    //source tag
    let sourceTag = document.createElement("source");
    sourceTag.src = "scripts/instruments/"+s+".wav"
    sourceTag.type = "audio/wav"

    //audio tag
    let audioTag = document.createElement("audio");
    audioTag.id = s;
    audioTag.appendChild(sourceTag);

    //playbutton
    let buttonSound = document.createElement("button");
    buttonSound.className = s;
    buttonSound.innerHTML = s;
    buttonSound.name = "false";
    
    
    //div that contains audio + button
    let division = document.createElement("div");
    division.className = "button-component";
    
    division.appendChild(audioTag);
    division.appendChild(buttonSound);
    document.getElementById("container").appendChild(division);
    if(document.querySelector('.' + s)){
        document.querySelector('.' + s).addEventListener("click",wrapAudio);
    }
    
    
}

function wrapAudio(e) { 
    var x = document.getElementById(e.currentTarget.className); 
    var but = e.currentTarget;

    if(typeof(window[e.currentTarget.className]) === "number"){
        //creating a global setInterval pointer so we can clear it globally on re-click
        x.pause(); //pause audio from being completed
        x.currentTime = 0; //reset it to play from start
        window[e.currentTarget.className] = clearInterval(window[e.currentTarget.className]);
        window[e.currentTarget.className+"color"] = clearInterval(window[e.currentTarget.className+"color"])
        but.style.backgroundColor = "aqua";
        
    }else{
        window[e.currentTarget.className] = setInterval(() => {
            x.play();
        },0);
        window[e.currentTarget.className+"color"] = setInterval(()=>{
            if(but.style.backgroundColor == "red"){
                but.style.backgroundColor = "aqua";
            }else{
                but.style.backgroundColor = "red";
            }
        },500)
        
    }
}
// function wrapAudio(e) { 
//     var x = document.getElementById(e.currentTarget.className); 
    
//     if(typeof(window[e.currentTarget.className]) === "undefined"){
//         window[e.currentTarget.className] = setInterval(() => x.play(),0);
//     }else{
//         window[e.currentTarget.className] = clearInterval(window[e.currentTarget.className]);
//     }
// }
