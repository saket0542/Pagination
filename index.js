let link=document.getElementsByClassName("link");
console.log(link)
// This will return an array link having all the
// element whose classname is link
let currentValue=1;
function activeLink()
{
    for(l of link)
    {
        l.classList.remove("active");
    }
    event.target.classList.add("active");
    currentValue=event.target.value;
}
function backbtn()
{
     if(currentValue>1)
     {
        for(l of link)
    {
        l.classList.remove("active");
    }
    currentValue--;
    link[currentValue-1].classList.add("active");
     }
}
function nextbtn()
{
     if(currentValue>=1 && currentValue<6)
     {
        for(l of link)
    {
        l.classList.remove("active");
    }
    currentValue++;
    link[currentValue-1].classList.add("active");
     }
}