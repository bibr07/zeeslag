window.onload = function () {
     
var vliegdekschip = [naam="vliegdekschip",lengte=5,kleur="groen",afbeelding="img/boot_groen.png", actief=true];
var slagschip = [naam="slagschip",lengte=4,kleur="rood",afbeelding="img/boot_rood.png", actief=true];
var onderzeeer = [naam="onderzeeer",lengte=3,kleur="geel",afbeelding="img/boot_geel.png", actief=true];
var torpedo = [naam="torpedo",lengte=3,kleur="oranje",afbeelding="img/boot_oranje.png", actief=true];
var patrouille = [naam="patrouille",lengte=2,kleur="blauw",afbeelding="img/boot_blauw.png", actief=true];

    
var schepen = document.getElementById("schepen");
    
        var option = document.createElement("option"),
            txt = document.createTextNode("--- Kies een schip ---");
        option.appendChild(txt);
        option.value = "--- Kies een schip ---";
        schepen.insertBefore(option, schepen.lastChild);
    
        var option = document.createElement("option"),
            txt = document.createTextNode(vliegdekschip[1] + "* " + vliegdekschip[0]);
        option.appendChild(txt);
        option.value = "vliegdekschip";
        option.id = "vliegdekschip";
        schepen.insertBefore(option, schepen.lastChild);
    
        var option = document.createElement("option"),
            txt = document.createTextNode(slagschip[1] + "* " + slagschip[0]);
        option.appendChild(txt);
        option.value = "slagschip";
        option.id = "slagschip";
        schepen.insertBefore(option, schepen.lastChild);
    
        var option = document.createElement("option"),
            txt = document.createTextNode(onderzeeer[1] + "* " + onderzeeer[0]);
        option.appendChild(txt);
        option.value = "onderzeeer";
        option.id = "onderzeeer";
        schepen.insertBefore(option, schepen.lastChild);
    
        var option = document.createElement("option"),
            txt = document.createTextNode(torpedo[1] + "* " + torpedo[0]);
        option.appendChild(txt);
        option.id = "torpedo";
        schepen.insertBefore(option, schepen.lastChild);
    
        var option = document.createElement("option"),
            txt = document.createTextNode(patrouille[1] + "* " + patrouille[0]);
        option.appendChild(txt);
        option.value = "patrouille";
        option.id = "patrouille";
        schepen.insertBefore(option, schepen.lastChild);
    

    
    

// selectie rijen aanvullen
var kiesRij = document.getElementById("rij"),
    arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    
    
    for (var teller2 = 0; teller2 < arr.length; teller2++) {
        var option = document.createElement("option"),
            txt = document.createTextNode(arr[teller2]);
        option.appendChild(txt);
        kiesRij.insertBefore(option, kiesRij.lastChild);
    }
    
    
    

// selectie kolommen aanvullen
 var kiesKolom = document.getElementById("kolom"),
    arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    
    
    for (var teller3 = 0; teller3 < arr.length; teller3++) {
        var option = document.createElement("option"),
            txt = document.createTextNode(arr[teller3]);
        option.value = (teller3);
        option.appendChild(txt);
        kiesKolom.insertBefore(option, kiesKolom.lastChild);
    }
       
/* ----- validatie ----- */
//plaatsen afbeelding in div + validatie selectie schip
    
    var plaatsen = document.getElementById("plaatsschip");
    plaatsen.addEventListener("click", function validatieSchipSelectie (e) {
    var selectedValue = document.getElementById("schepen").value;

        switch(selectedValue) {
            case ("vliegdekschip"):
                var msg = document.getElementById("msg");
                msg.innerHTML = "";
                if (document.getElementById("horizontaal").checked){
                    if ((kiesKolom.value-1) <= ((kiesKolom[9].value)-vliegdekschip[1])) {
                        for(i = 0; i < vliegdekschip[1]; i++) {
                            var img = document.createElement("img");
                            img.src = vliegdekschip[3];
                            
                                var gekozenKolom = (kiesKolom.value);
                                var integerGekozenKolom = parseInt(gekozenKolom);
                                var gekozenRij = (kiesRij.value-1);
                                var optellenKolom = (integerGekozenKolom +i);
                                var uiteindelijkGekozenKolom = optellenKolom.toString();
                            
                        var id = gekozenRij + uiteindelijkGekozenKolom;
                        var src = document.getElementById(id);
                        if (document.getElementById(id).innerHTML === "") {
                            src.appendChild(img);
                            var disableVliegdekschip = document.getElementById("vliegdekschip");
                            disableVliegdekschip.setAttribute("disabled", true);
                        }
                        else {
                            for(i = 0; i < vliegdekschip[1]; i++) {
                                msg.innerHTML = "Dit overlapt met een ander schip. Kies een andere plaats aub.";
                            }
                        }
                    
                    }
                    }
                    else {
                        msg.innerHTML = "Er is niet genoeg ruimte horizontaal. Probeer opnieuw.";
                    }
                }
                else {
                     if ((kiesRij.value-1) <= ((kiesRij[9].value)-vliegdekschip[1])) {
                        for(i = 0; i < vliegdekschip[1]; i++) {
                            var img = document.createElement("img");
                            img.src = vliegdekschip[3];
                            
                                var gekozenRij = ((kiesRij.value-1)+i);
                                var uiteindelijkGekozenKolom = kiesKolom.value;
                            
                        var id = gekozenRij + uiteindelijkGekozenKolom;
                        var src = document.getElementById(id);                            
                        if (document.getElementById(id).innerHTML === "") {
                            src.appendChild(img);
                            var disableVliegdekschip = document.getElementById("vliegdekschip");
                            disableVliegdekschip.setAttribute("disabled", true);
                        }
                        else {
                            for(i = 0; i < vliegdekschip[1]; i++) {
                                msg.innerHTML = "Dit overlapt met een ander schip. Kies een andere plaats aub.";
                            }
                        }
                    
                    }
                    }
                    else {
                        msg.innerHTML = "Er is niet genoeg ruimte horizontaal. Probeer opnieuw.";
                    }       
                }
                    
                break;
                
                
            
            case ("slagschip"):
                var msg = document.getElementById("msg");
                msg.innerHTML = "";
                if (document.getElementById("horizontaal").checked){
                    if ((kiesKolom.value-1) <= ((kiesKolom[9].value)-slagschip[1])) {
                        for(i = 0; i < slagschip[1]; i++) {
                            var img = document.createElement("img");
                            img.src = slagschip[3];
                            if (document.getElementById("horizontaal").checked){
                                var gekozenKolom = (kiesKolom.value);
                                var integerGekozenKolom = parseInt(gekozenKolom);
                                var gekozenRij = (kiesRij.value-1);
                                var optellenKolom = (integerGekozenKolom +i);
                                var uiteindelijkGekozenKolom = optellenKolom.toString();
                            }
                            else {
                                var gekozenRij = ((kiesRij.value-1)+i);
                                var uiteindelijkGekozenKolom = kiesKolom.value;
                            }
                        var id = gekozenRij + uiteindelijkGekozenKolom;
                        var src = document.getElementById(id);
                        if (document.getElementById(id).innerHTML === "") {
                            src.appendChild(img);
                            var disableSlagschip = document.getElementById("slagschip");
                            disableSlagschip.setAttribute("disabled", true);
                        }
                        else {
                            for(i = 0; i < vliegdekschip[1]; i++) {
                                msg.innerHTML = "Dit overlapt met een ander schip. Kies een andere plaats aub.";
                            }
                        }
                    
                    }
                    }
                    else {
                        msg.innerHTML = "Er is niet genoeg ruimte horizontaal. Probeer opnieuw.";
                    }
                }
                else {
                     if ((kiesRij.value-1) <= ((kiesRij[9].value)-slagschip[1])) {
                        for(i = 0; i < slagschip[1]; i++) {
                            var img = document.createElement("img");
                            img.src = slagschip[3];
                            if (document.getElementById("horizontaal").checked){
                                var gekozenKolom = (kiesKolom.value);
                                var integerGekozenKolom = parseInt(gekozenKolom);
                                var gekozenRij = (kiesRij.value-1);
                                var optellenKolom = (integerGekozenKolom +i);
                                var uiteindelijkGekozenKolom = optellenKolom.toString();
                            }
                            else {
                                var gekozenRij = ((kiesRij.value-1)+i);
                                var uiteindelijkGekozenKolom = kiesKolom.value;
                            }
                        var id = gekozenRij + uiteindelijkGekozenKolom;
                        var src = document.getElementById(id);
                        if (document.getElementById(id).innerHTML === "") {
                            src.appendChild(img);
                            var disableSlagschip = document.getElementById("slagschip");
                            disableSlagschip.setAttribute("disabled", true);
                        }
                        else {
                            for(i = 0; i < vliegdekschip[1]; i++) {
                                msg.innerHTML = "Dit overlapt met een ander schip. Kies een andere plaats aub.";
                            }
                        }
                    
                    }
                    }
                    else {
                        msg.innerHTML = "Er is niet genoeg ruimte horizontaal. Probeer opnieuw.";
                    }     
                }
                break;
                
                
            
            case ("onderzeeer"):
                var msg = document.getElementById("msg");
                msg.innerHTML = "";
                if (document.getElementById("horizontaal").checked){
                    if ((kiesKolom.value-1) <= ((kiesKolom[9].value)-onderzeeer[1])) {
                        for(i = 0; i < onderzeeer[1]; i++) {
                            var img = document.createElement("img");
                            img.src = onderzeeer[3];
                            if (document.getElementById("horizontaal").checked){
                                var gekozenKolom = (kiesKolom.value);
                                var integerGekozenKolom = parseInt(gekozenKolom);
                                var gekozenRij = (kiesRij.value-1);
                                var optellenKolom = (integerGekozenKolom +i);
                                var uiteindelijkGekozenKolom = optellenKolom.toString();
                            }
                            else {
                                var gekozenRij = ((kiesRij.value-1)+i);
                                var uiteindelijkGekozenKolom = kiesKolom.value;
                            }
                        var id = gekozenRij + uiteindelijkGekozenKolom;
                        var src = document.getElementById(id);
                        if (document.getElementById(id).innerHTML === "") {
                            src.appendChild(img);
                            var disableOnderzeeer = document.getElementById("onderzeeer");
                            disableOnderzeeer.setAttribute("disabled", true);
                        }
                        else {
                            for(i = 0; i < vliegdekschip[1]; i++) {
                                msg.innerHTML = "Dit overlapt met een ander schip. Kies een andere plaats aub.";
                            }
                        }
                    
                    }
                    }
                    else {
                        msg.innerHTML = "Er is niet genoeg ruimte horizontaal. Probeer opnieuw.";
                    }
                }
                else {
                     if ((kiesRij.value-1) <= ((kiesRij[9].value)-onderzeeer[1])) {
                        for(i = 0; i < onderzeeer[1]; i++) {
                            var img = document.createElement("img");
                            img.src = onderzeeer[3];
                            if (document.getElementById("horizontaal").checked){
                                var gekozenKolom = (kiesKolom.value);
                                var integerGekozenKolom = parseInt(gekozenKolom);
                                var gekozenRij = (kiesRij.value-1);
                                var optellenKolom = (integerGekozenKolom +i);
                                var uiteindelijkGekozenKolom = optellenKolom.toString();
                            }
                            else {
                                var gekozenRij = ((kiesRij.value-1)+i);
                                var uiteindelijkGekozenKolom = kiesKolom.value;
                            }
                        var id = gekozenRij + uiteindelijkGekozenKolom;
                        var src = document.getElementById(id);
                        if (document.getElementById(id).innerHTML === "") {
                            src.appendChild(img);
                            var disableOnderzeeer = document.getElementById("onderzeeer");
                            disableOnderzeeer.setAttribute("disabled", true);
                        }
                        else {
                            for(i = 0; i < vliegdekschip[1]; i++) {
                                msg.innerHTML = "Dit overlapt met een ander schip. Kies een andere plaats aub.";
                            }
                        }
                    
                    }
                    }
                    else {
                        msg.innerHTML = "Er is niet genoeg ruimte horizontaal. Probeer opnieuw.";
                    }      
                }
                break;
                
                
            
            case ("torpedo"):
                var msg = document.getElementById("msg");
                msg.innerHTML = "";
                if (document.getElementById("horizontaal").checked){
                    if ((kiesKolom.value-1) <= ((kiesKolom[9].value)-torpedo[1])) {
                        for(i = 0; i < torpedo[1]; i++) {
                            var img = document.createElement("img");
                            img.src = torpedo[3];
                            if (document.getElementById("horizontaal").checked){
                                var gekozenKolom = (kiesKolom.value);
                                var integerGekozenKolom = parseInt(gekozenKolom);
                                var gekozenRij = (kiesRij.value-1);
                                var optellenKolom = (integerGekozenKolom +i);
                                var uiteindelijkGekozenKolom = optellenKolom.toString();
                            }
                            else {
                                var gekozenRij = ((kiesRij.value-1)+i);
                                var uiteindelijkGekozenKolom = kiesKolom.value;
                            }
                        var id = gekozenRij + uiteindelijkGekozenKolom;
                        var src = document.getElementById(id);
                        if (document.getElementById(id).innerHTML === "") {
                            src.appendChild(img);
                            var disableTorpedo = document.getElementById("torpedo");
                            disableTorpedo.setAttribute("disabled", true);
                        }
                        else {
                            for(i = 0; i < vliegdekschip[1]; i++) {
                                msg.innerHTML = "Dit overlapt met een ander schip. Kies een andere plaats aub.";
                            }
                        }
                    
                    }
                    }
                    else {
                        msg.innerHTML = "Er is niet genoeg ruimte horizontaal. Probeer opnieuw.";
                    }
                }
                else {
                     if ((kiesRij.value-1) <= ((kiesRij[9].value)-torpedo[1])) {
                        for(i = 0; i < torpedo[1]; i++) {
                            var img = document.createElement("img");
                            img.src = torpedo[3];
                            if (document.getElementById("horizontaal").checked){
                                var gekozenKolom = (kiesKolom.value);
                                var integerGekozenKolom = parseInt(gekozenKolom);
                                var gekozenRij = (kiesRij.value-1);
                                var optellenKolom = (integerGekozenKolom +i);
                                var uiteindelijkGekozenKolom = optellenKolom.toString();
                            }
                            else {
                                var gekozenRij = ((kiesRij.value-1)+i);
                                var uiteindelijkGekozenKolom = kiesKolom.value;
                            }
                        var id = gekozenRij + uiteindelijkGekozenKolom;
                        var src = document.getElementById(id);
                        if (document.getElementById(id).innerHTML === "") {
                            src.appendChild(img);
                            var disableTorpedo = document.getElementById("torpedo");
                            disableTorpedo.setAttribute("disabled", true);
                        }
                        else {
                            for(i = 0; i < vliegdekschip[1]; i++) {
                                msg.innerHTML = "Dit overlapt met een ander schip. Kies een andere plaats aub.";
                            }
                        }
                    
                    }
                    }
                    else {
                        msg.innerHTML = "Er is niet genoeg ruimte horizontaal. Probeer opnieuw.";
                    }       
                }
                break;
                
                
            
            case ("patrouille"):
                var msg = document.getElementById("msg");
                msg.innerHTML = "";
                if (document.getElementById("horizontaal").checked){
                    if ((kiesKolom.value-1) <= ((kiesKolom[9].value)-patrouille[1])) {
                        for(i = 0; i < patrouille[1]; i++) {
                            var img = document.createElement("img");
                            img.src = patrouille[3];
                            if (document.getElementById("horizontaal").checked){
                                var gekozenKolom = (kiesKolom.value);
                                var integerGekozenKolom = parseInt(gekozenKolom);
                                var gekozenRij = (kiesRij.value-1);
                                var optellenKolom = (integerGekozenKolom +i);
                                var uiteindelijkGekozenKolom = optellenKolom.toString();
                            }
                            else {
                                var gekozenRij = ((kiesRij.value-1)+i);
                                var uiteindelijkGekozenKolom = kiesKolom.value;
                            }
                        var id = gekozenRij + uiteindelijkGekozenKolom;
                        var src = document.getElementById(id);
                        if (document.getElementById(id).innerHTML === "") {
                            src.appendChild(img);
                            var disablePatrouille = document.getElementById("patrouille");
                            disablePatrouille.setAttribute("disabled", true);
                        }
                        else {
                            for(i = 0; i < vliegdekschip[1]; i++) {
                                msg.innerHTML = "Dit overlapt met een ander schip. Kies een andere plaats aub.";
                            }
                        }
                    
                    }
                    }
                    else {
                        msg.innerHTML = "Er is niet genoeg ruimte horizontaal. Probeer opnieuw.";
                    }
                }
                else {
                     if ((kiesRij.value-1) <= ((kiesRij[9].value)-patrouille[1])) {
                        for(i = 0; i < patrouille[1]; i++) {
                            var img = document.createElement("img");
                            img.src = patrouille[3];
                            if (document.getElementById("horizontaal").checked){
                                var gekozenKolom = (kiesKolom.value);
                                var integerGekozenKolom = parseInt(gekozenKolom);
                                var gekozenRij = (kiesRij.value-1);
                                var optellenKolom = (integerGekozenKolom +i);
                                var uiteindelijkGekozenKolom = optellenKolom.toString();
                            }
                            else {
                                var gekozenRij = ((kiesRij.value-1)+i);
                                var uiteindelijkGekozenKolom = kiesKolom.value;
                            }
                        var id = gekozenRij + uiteindelijkGekozenKolom;
                        var src = document.getElementById(id);
                        if (document.getElementById(id).innerHTML === "") {
                            src.appendChild(img);
                            var disablePatrouille = document.getElementById("patrouille");
                            disablePatrouille.setAttribute("disabled", true);
                        }
                        else {
                            for(i = 0; i < vliegdekschip[1]; i++) {
                                msg.innerHTML = "Dit overlapt met een ander schip. Kies een andere plaats aub.";
                            }
                        }
                    
                    }
                    }
                    else {
                        msg.innerHTML = "Er is niet genoeg ruimte horizontaal. Probeer opnieuw.";
                    }       
                }
                break;
                
                
                
            case ("--- Kies een schip ---"):
                var msg = document.getElementById("msg");
                if (schepen.value == "--- Kies een schip ---") 
                e.preventDefault();
                msg.innerHTML = "Je hebt geen schip geselecteerd.";
                break;
                
                
                
            default:
                var msg = document.getElementById("msg");
                msg.innerHTML = "Sorry, er ging iets mis. Probeer later opnieuw."
                break;
        }
    });
    
 /* ----- legen formulier en heraanvullen lijst schepen ----- */
    
var nieuw = document.getElementById("nieuwspel");
nieuw.addEventListener("click", function () {

    // lijst terug aanvullen 
    var enableVliegdekschip = document.getElementById("vliegdekschip");
    enableVliegdekschip.removeAttribute("disabled");
    
    var enableSlagschip = document.getElementById("slagschip");
    enableSlagschip.removeAttribute("disabled");
    
    var enableOnderzeeer = document.getElementById("onderzeeer");
    enableOnderzeeer.removeAttribute("disabled");
    
    var enableTorpedo = document.getElementById("torpedo");
    enableTorpedo.removeAttribute("disabled");
    
    var enablePatrouille = document.getElementById("patrouille");
    enablePatrouille.removeAttribute("disabled");
    
    // schepen op bord verwijderen 
    for (rij = 0; rij < kiesRij[9].value; rij++) {
        for (kolom = 0; kolom < kiesKolom[9].value; kolom++) {
            var idRij = rij;
            var idKolom = kolom;
            var stringRij = (idRij).toString();
            var stringKolom = (idKolom).toString();
            var id = (stringRij + stringKolom);
            console.log(id);
            var speelveld = document.getElementById(id);
            speelveld.innerHTML="";
        }
    }   
});
    
    
/* cookies */
    var mijnCookies = {};
    
    // cookie opslaan
    function cookiesOpslaan () {
        mijnCookies["_vliegdekschip"] = document.getElementById("vliegdekschip").value;
        mijnCookies["slagschip"] = document.getElementById("slagschip").value;
        mijnCookies["onderzeeer"] = document.getElementById("onderzeeer").value;
        mijnCookies["torpedo"] = document.getElementById("torpedo").value;
        mijnCookies["patrouille"] = document.getElementById("patrouille").value;
        
        document.cookie = ""; //eventuele inhoud verwijderen
        var eindDatum = new Date (Date.now() + 60*100000).toString();
        var cookieString = "";
        for (var teller in myCookies) { //ongeacht aantal cookies er worden opgeslagen, hij doorloopt ze allemaal omdat je tot 'myCookies' gaat
            cookieString = key + "=" + myCookies[teller] + ";" + eindDatum + ";";
            document.cookie = cookieString;
        }
    }
    
    //cookie laden
    function cookiesLaden () {
        mijnCookies = {}; //eventuele inhoud verwijderen
        var keyValue = document.cookie.split(";");
        for (var teller2 in keyValue) {
            var cookie = keyValue[teller2].split("=");
            mijnCookies[cookie[0].trim()] = cookie[1];
        }
        
      document.getElementById("vliegdekschip").value = mijnCookies[_vliegdekschip];  
        
    }
    
    
}