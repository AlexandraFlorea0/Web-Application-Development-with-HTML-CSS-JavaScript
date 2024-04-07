function dataCurenta()
{
    var date = new Date();
    document.getElementById("DataCurenta").innerHTML = date;
}

function adresaURL()
{
    let adresa = window.location.origin;
    document.getElementById("AdresaURL").innerHTML = adresa;
}

setInterval(timpReal, 1000);

function timpReal() {
  const date = new Date();
  document.getElementById("TimpReal").innerHTML = date.toLocaleTimeString();
}

function browser() {
    const name = window.navigator.appName;
    const version = window.navigator.appVersion;
    const location = window.location.geolocation;
    document.getElementById("NumeBrowser").innerHTML = name;
    document.getElementById("VersiuneBrowser").innerHTML = version;
    document.getElementById("LocatieUser").innerHTML = location;
}
function myCanva(){
    const c = document.getElementById("myCanva");
    const ctx = c.getContext("2d");
    ctx.fillRect(20, 20, 150, 100);
}
