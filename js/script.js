
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

        // Calcolo prezzo per km
        var prezzo = (km * 0.21);

        // Applicazione sconto del 20% under 18
        var sconto20 = (prezzo / 100) * 20;
        var prezzoFinaleMinorenne = (prezzo - sconto20).toFixed(2);
      
        // Applicazione sconto del 40% se over 65
        var sconto40 = (prezzo / 100) * 40; 
        var prezzoFinale = (prezzo - sconto40).toFixed(2);

        if( eta == "minorenne"){
            document.getElementById('costo').innerHTML = prezzoFinaleMinorenne;
            console.log(prezzoFinaleMinorenne);
        } else if ( eta == "over"){
            document.getElementById('costo').innerHTML = prezzoFinale;
            console.log(prezzoFinale);
        } else {
            document.getElementById('costo').innerHTML = prezzo;
        }

        // Ottenuto il risultato lo mostro a video.
        document.getElementById('nome-utente').innerHTML = nome;
    



    }
);








// 3 - Devo manipolare i dati: devo controllare SE l’età è < di 18 o > 65. SE sono in uno di questi due casi, applico lo sconto, ALTRIMENTI non lo applico (i se ed altrimenti sono scritti volontariamente in maiuscolo per darti un suggerimento :occhiolino:)
// 4 - Ottenuto il risultato lo mostro a video.
// Spezzati sempre il problema in sottoproblemi e vedrai che andrai più spedita. In ogni caso, ti lascio mezz’ora. Se entro mezz’ora non ce la fai a risolvere o ad impostare bene l’esercizio, ricontattami. Se non sono impegnato con un ticket ci sentiamo su zoom e ti do una mano per proseguire. Se vedi che non ti rispondo entro 10 minuti apri un ticket