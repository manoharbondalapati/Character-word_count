const input =document.querySelector('textarea');
const ccount=document.getElementById('ccount');
const wcount=document.getElementById('wcount');
const scount =document.getElementById('scount');
const pcount =document.getElementById('pcount');

input.addEventListener("input",function()
{
    if(input.value)
    {
        ccount.innerText=input.value.length;

        const words=input.value.split(' ').filter((word)=>word!=="");
        wcount.innerText=words.length;


        const sentence =input.value.split("\n").filter((p)=>p.trim()!=="");
        scount.innerText=sentence.length;


        const paragraph =input.value.split(/[.!]/);
        pcount.innerText=paragraph.length-1;

       
    }
    else
    {
       wcount.innerText=0;
       ccount.innerText=0;
       scount.innerText=0;
       pcount.innerText=0;
    }
});