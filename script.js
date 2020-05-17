let previousOperand;// ova e prethodniot broj momentalno e null posto nema vrednost
let operation; //ova e znakot + - / * 

const result= document.querySelector(".result");

let num=document.querySelectorAll(".number");
//ovde se zema vrednosta na brojot

 for(let i = 0; i < num.length; i++) {
        num[i].addEventListener('click',function(){
        result.textContent+=num[i].textContent;
    })
}
let flag=0;
let znak = document.querySelectorAll(".operator")

    for(let i=0;i<znak.length;i++)
    {
       
        znak[i].addEventListener('click',function()
        {
            let maja=operation;
            let emi = previousOperand; 
            operation=znak[i].textContent;            
            previousOperand=parseInt(result.textContent);   
                    
            console.log(operation);
            result.textContent="";
            flag++;
            console.log(flag);
            if(flag>1)
            {
                previousOperand=emi;
                flag=0;
                emi=parseInt(result.textContent);
                result.textContent=previousOperand;
                result.textContent="";
                console.log(previousOperand);
                console.log(operation);              
               
            }
        })
    }
  

let clear = document.querySelector(".clear");

clear.addEventListener('click',function(){
    result.textContent="";
})
let bck=document.querySelector('.backspace');
bck.addEventListener('click',function()
{
    let pom=parseInt(result.textContent);
    console.log(pom/10);
    result.textContent=Math.floor(pom/10);
})

let equal = document.querySelector(".equal");
equal.addEventListener('click',function()
{
    let pom=parseInt(result.textContent);
    let pomOperation=operation;
    
    if(operation==="+")
    {
       result.textContent=previousOperand+pom;
       
    }
    else if(operation==="-")
    {
        result.textContent=previousOperand-pom;
    }
    else if(operation==="x")
    {
        result.textContent*=previousOperand;       
    }
    else if(operation==="%")
    {
        result.textContent=previousOperand/pom;
    }
      
})

  


