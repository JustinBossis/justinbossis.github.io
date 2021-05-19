document.getElementById('latitude').addEventListener('click', showLatitude);
document.getElementById('longitude').addEventListener('click', showLongitude);
document.getElementById('reculer').addEventListener('click', reculerPages);
document.getElementById('copier').addEventListener('click', copyText);
document.getElementById('coller').addEventListener('click', pasteText);

function showLatitude(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position) {
            document.getElementById('lat').innerText = "Latitude : "+position.coords.latitude;
        });
    }
}

function showLongitude(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position) {
            document.getElementById('long').innerText = "Longitude : "+position.coords.longitude;
        });
    }
}

function reculerPages(){
    window.history.go(-parseInt(document.getElementById('nbpages').value));
}

function copyText(){
    navigator.clipboard.writeText(document.getElementById('textecopie').value).then(alert("Valeur copiée : "+document.getElementById('textecopie').value));
}

function pasteText(){
    navigator.clipboard.readText().then(textCopy => document.getElementById('textecolle').value = textCopy);
}