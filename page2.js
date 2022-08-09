var cont=0;

document.getElementById("myBtn").addEventListener("click", ()=>{
    let txt = document.getElementById("txt");
    if(cont==0){
        
        txt.innerText=" Este mensaje es para pedirte disculpas y me siento demasiado mal."+
        " Yo se que puedo confiar en ti pero el problema soy yo..."+
        " hay momentos en los que me empiezo a cuestionarme "+
        " No me gusta pelear contigo y tampoco molestarte demasiado... "+
        " asi que ya busque ayuda para lo de mi confianza porque me di cuenta que no lo puedo hacer solo."
        txt.style.cssText="font-size:18px" 
        document.getElementById("audio").style.cssText="opacity:0"
    }

    if(cont==1){

        txt.innerText="Yo te quiero mucho Samira y siempre busco formas distintas de demostrarlo..."+
        " parezco un perrito cuando empiezo a verte y de la nada me pongo demasiado feliz..."+
        " De verdad nunca encuentro de como expresar lo que siento, es demasiado grande que"+
        " siento que ni las palabras ni los regalos lo demuestran. Me encanta verte feliz y"+
        " satisfecha sin ningun problema, es como una droga para mi. Eres una de mis personas favoritas, mi universo"
        
        
    }

    if(cont==2){
        
        txt.innerText="Ahora quiero regalandote "+ 
        "estos vales en los que cada uno es mi forma de pedirte disculpas. La musica de fondo la canta Junkook por si la reconoces jaja"
        document.getElementById("vales").style.cssText="opacity:1"
    }
    cont++;
});