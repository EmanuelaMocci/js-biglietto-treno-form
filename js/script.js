
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.


// 1 - faccio la form con i campi;

// 2 - devo recuperare i dati immessi dall’utente
var genera = document.getElementById("bottoneGenera");


bottoneGenera.addEventListener("click",
    function() {

        var nome = document.getElementById("nome").value;
        var km = parseInt(document.getElementById("km").value);
        var eta = document.getElementById("eta").value;

        // Codice carrozza
        var numeroCarrozza = Math.floor(Math.random() * 10) + 1;

        // Codice CP
        var numeroCP = Math.floor(Math.random() * 9999) + 90000;

        // Calcolo prezzo per km
        var prezzo = (km * 0.21);

        // Condizione sconto
        if( eta == "minorenne"){
            var sconto20 = (prezzo / 100) * 20;
            prezzo = (prezzo - sconto20).toFixed(2);
        
        } else if ( eta == "over"){
            var sconto40 = (prezzo / 100) * 40; 
            prezzo = (prezzo - sconto40).toFixed(2);
        } else {
            
        }

        // Ottenuto il risultato lo mostro a video.
        document.getElementById('nome-utente').innerHTML = nome;
        document.getElementById('costo').innerHTML = prezzo;
        document.getElementById('carrozza').innerHTML = numeroCarrozza;
        document.getElementById('codice').innerHTML = numeroCP;

    }
);








// 3 - Devo manipolare i dati: devo controllare SE l’età è < di 18 o > 65. SE sono in uno di questi due casi, applico lo sconto, ALTRIMENTI non lo applico (i se ed altrimenti sono scritti volontariamente in maiuscolo per darti un suggerimento :occhiolino:)
// 4 - Ottenuto il risultato lo mostro a video.
// Spezzati sempre il problema in sottoproblemi.