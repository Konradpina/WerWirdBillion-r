const duration="20s"
var backwords= setInterval(creatwords,800)
function creatwords(){
    const word=randomword()
    var wordhtml=""
    // for(i=Math.floor(Math.random()*2)+1;i<4;i++){}
    if(Math.random()<0.5){
    if(Math.random()<0.5){
        wordhtml=wordhtml+`<div class="cob Bword" style=" left:${Math.floor(Math.random()*100)}vw; animation-duration:${duration}s;animation-direction: reverse; padding:${Math.random()*1}vw;">${word}</div>`
    }else{
        wordhtml=wordhtml+`<div class="cob Bword" style=" left:${Math.floor(Math.random()*100)}vw; animation-duration:${duration}s;padding:${Math.random()*1}vw;">${word}</div>`
    }}else{
        if(Math.random()<0.5){
            wordhtml=wordhtml+`<div class="cob Bbword" style=" top:${Math.floor(Math.random()*100)}vw; animation-duration:${duration}s;animation-direction: reverse; padding:${Math.random()*1}vw;">${word}</div>`
        }else{
            wordhtml=wordhtml+`<div class="cob Bbword" style=" top:${Math.floor(Math.random()*100)}vw; animation-duration:${duration}s;padding:${Math.random()*1}vw;">${word}</div>`
        }    
    }

    var div1 =document.createElement('div')
    div1.innerHTML=wordhtml
    document.body.appendChild(div1)
    setTimeout(function(){
        div1.remove();
    },30000)
}

function randomword(){
        var wordd
        var text
    if(Math.floor(Math.random()*4)===1){
         text=qustionarry[currentq].question
    }else{
         text=qustionarry[currentq].aa[Math.floor(Math.random()*4)]
    }
        text.replace(/\b(?:Der|Das|Die|Dem|Ein|Eine|Einen|Deb|Wie|Wer|Was|Durch|Es)\b/gi, '');
    const wordarrey= text.split(/[ ,&]/)

    wordd=wordarrey[Math.floor(Math.random()*wordarrey.length)]
    return wordd
}