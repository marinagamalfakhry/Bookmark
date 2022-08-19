var siteNameInput= document.getElementById("siteName");
var siteUrlInput= document.getElementById("siteUrl");
var siteBtnn= document.getElementById("siteBtn");
var linkInputs=document.getElementsByClassName('form-control');
var currentIndex=0;6
var links=[];
 
siteBtnn.onclick=function (){
    if(siteBtnn.innerHTML=="Submit")
    {
        addLinks();

    }
    else{
        updateLink()
    }
    displayLinks(); 
    resetLinks();
}

if(JSON.parse(localStorage.getItem("linksList"))!=null )
{
    links=JSON.parse(localStorage.getItem("linksList"));
    displayLinks(); 

}



function addLinks(){
    var link={
         Name:siteNameInput.value,
         Url:siteUrlInput.value
    }
    links.push(link);
    localStorage.setItem("linksList",JSON.stringify(links))
 }

function displayLinks(){
    var cartona='';
    for(var i=0; i<links.length; i++){
        cartona+=`<tr>
        <td>${links[i].Name} <a  class="btn btn-default target="_blank"href="${links[i].Url}"> </a></td>
        
        <td> <button onclick="addlinkInfo(${i})" class="btn btn-outline-warning m-3">Update</button> </td>
        <td> <button onclick="Deletelink(${i})" class="btn btn-outline-danger  m-3">Delete</button> </td>
        <td>  <a class="" target="_blank"" href="${links[i].Url}"><button class="btn btn-outline-info   m-3">Visit</button></a> </td>

        </tr>`
    }
    document.getElementById('linksAdd').innerHTML=cartona
}

function Deletelink(indexBox){
    links.splice(indexBox,1);
    displayLinks(); 
    localStorage.setItem("linksList",JSON.stringify(links))

}



function addlinkInfo(infoIndex){                      
    currentIndex=infoIndex;                           

var currentLink=links[infoIndex];
siteNameInput.value=currentLink.Name;
siteUrlInput.value=currentLink.Url;
siteBtnn.innerHTML="Add link"
}

function updateLink(){
    var link={
        Name:siteNameInput.value,
        Url:siteUrlInput.value
   }
   links[currentIndex]=link;
   localStorage.setItem("linksList",JSON.stringify(links))

}


function resetLinks(){
for( var i=0;i<linkInputs.length;i++)
{
    linkInputs[i].value=''
}
}

function searchLinks(searchBox)
{

    var cartona='';
    for(var i=0; i<links.length; i++){

    if(links[i].Name.tolowercase().includes(searchBox.tolowercase()))
    {
        cartona+=`<tr>
        <td>${links[i].Name} <a  class="btn btn-default target="_blank"href="${links[i].Url}"> </a></td>
        
        <td> <button onclick="addlinkInfo(${i})" class="btn btn-outline-warning m-3">Update</button> </td>
        <td> <button onclick="Deletelink(${i})" class="btn btn-outline-danger  m-3">Delete</button> </td>
        <td> <button class="btn btn-outline-info   m-3">Visit</button> </td>

        </tr>`
    }

    }

    document.getElementById('linksAdd').innerHTML=cartona
}


var siteAlert=document.getElementById('name');
var urlAlert=document.getElementById('url');


 siteNameInput.onkeyup=function()
 {
    var linkName=/^[a-zA-z][a-z]{3,9}$/;
     if(linkName.test(siteNameInput.value)) {
        siteBtnn.removeAttribute('disabled');
        siteNameInput.classList.add('is-valid');
        siteNameInput.classList.remove('is-invalid');
        siteAlert.classList.add('d-none');

     }
     else{
        siteBtnn.disabled='true';
        siteNameInput.classList.remove('is-valid');
        siteNameInput.classList.add('is-invalid');
        siteAlert.classList.remove('d-none');

     }

     }

     
 
      siteUrlInput.onkeyup=function(){

     var regexurl=/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
     if(regexurl.test(siteUrlInput.value)){
        siteBtnn.removeAttribute('disabled');
        siteUrlInput.classList.add('is-valid');
        siteUrlInput.classList.remove('is-invalid');
        urlAlert.classList.add('d-none');

     }
     else{
        siteBtnn.disabled='true';
        siteUrlInput.classList.remove('is-valid');
        siteUrlInput.classList.add('is-invalid');
        urlAlert.classList.remove('d-none');

     }
 }
  

 /*validate()
 function validate (){
if(siteUrlInput.value==null)
{
    siteBtnn.disabled='true';

}
else if(siteNameInput.value==null){
    siteBtnn.disabled='true';

}


else{
    siteBtnn.removeAttribute('disabled');

}

 }
*/