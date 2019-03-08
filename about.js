function myFunction()
{
x=document.getElementById("demo");  // Find the element
x.innerHTML="The webpage you are looking at is my app sample,pleas click Home or other buttons and play around to have fun!";    // Change the content
}
function favBrowser()
{
var mylist=document.getElementById("myList");
document.getElementById("favorite").value=mylist.options[mylist.selectedIndex].text;
}
