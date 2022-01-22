let Vardi =["SKOLA", "MAIZE", "BUMBA", "ABOLS", "VIOLE", "RADIO"];
let vards;
let k=0; //jauna vārda kārtas numurs
let burti;
let g;
let rinda;

function jaunsVards(){
    vards=Vardi[k];
    //console.log(vards);
   
}

function BurtuIzveide(){
    burti=vards.split("");
    for (let i=0; i<vards.length; i++){
        let m=burti[i];
        let j=Math.floor(Math.random()*vards.length);
        burti[i]=burti[j];
        burti[j]=m;
    }
    return burti;
}

    
//function BurtiPogaa(){
   //for (let i=0; i<vards.length; i++){
      
      //document.getElementById("00").innnerHTML="2222";

     // poga.addEventListener("click", ()=>{
     // if(poga.innerText == "0"){
      //  poga.innerText =burti[i];
    //}})
    
//}

function replaceButtonText(buttonId, text)
{
  if (document.getElementById(buttonId))
  {
    var button=document.getElementById(buttonId);
    if (button)
    {
      if (button.childNodes[0])
      {
        button.childNodes[0].nodeValue=text;
      }
      else if (button.value)
      {
        
        button.value=text;
      }
      else //if (button.innerHTML)
      {
        button.innerHTML=text;
      }
    }
  }
}   

function loadButtonText () {
    for (let i=0; i<burti.length; i++){
      replaceButtonText('0'+i,burti[i]);
    
    }
}

jaunsVards();
BurtuIzveide();
//BurtiPogaa();
//console.log(g);
console.log(burti);
