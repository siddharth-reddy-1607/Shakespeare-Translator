var translateButton=document.querySelector("#button-translate");
translateButton.addEventListener("click",buttonClicked);
var input=document.querySelector("#text-input");
var outdiv=document.querySelector("#output");

var url="https://api.funtranslations.com/translate/shakespeare.json";
// var urltemp="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function ExceptionHandler(error)
{
    alert("Oops! Looks like the server is down! Please try again in a while");
}

function buttonClicked()
{
    fetch(url+"?text="+input.value)
    .then(response => response.json())
    .then(data => {
        var translatedText=data.contents.translated;
        outdiv.innerText=translatedText;
    })
    .catch(ExceptionHandler)

}