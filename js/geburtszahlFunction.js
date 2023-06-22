

//Zahl aufteilen und in Array speichern
function splitIntoArray(num) {
    return Array.from(String(num), Number);
}

var lebenszahlBedeutung = [
    "Diese Zahl wird mit Individualität, Führungsqualitäten und Unabhängigkeit in Verbindung gebracht." ,
    "Diese Zahl wird mit Harmonie, Diplomatie und Kooperation in Verbindung gebracht." ,
    "Diese Zahl wird mit Kreativität, Kunstfertigkeit und gesellschaftlicher Akzeptanz in Verbindung gebracht." ,
    "Diese Zahl wird mit Fleiß, Praktikabilität und Organisationstalent in Verbindung gebracht." ,
    "Diese Zahl wird mit Freiheitsliebe, Abenteuerlust und der Fähigkeit, sich anzupassen, in Verbindung gebracht." ,
    "Diese Zahl wird mit Verantwortungsbewusstsein, Familiensinn und Nächstenliebe in Verbindung gebracht." ,
    "Diese Zahl wird mit Spiritualität, Weisheit und Intuition in Verbindung gebracht." ,
    "Diese Zahl wird mit Macht, Erfolg und Materialismus in Verbindung gebracht." ,
    "Diese Zahl wird mit Humanismus, Idealismus und Selbstlosigkeit in Verbindung gebracht."
]
add = function(arr) {
    return arr.reduce((a, b) => a + b, 0);
};


function test() {
    var tag;
    var monat;
    var jahr;

    //Einlesen von Geburtsdatum
    tag = document.getElementById("tag").value;
    monat = document.getElementById("monat").value;
    jahr = document.getElementById("jahr").value;


    let tagR = splitIntoArray(tag);
    let monatR = splitIntoArray(monat);
    let jahrR = splitIntoArray(jahr);

    //Geburtsdatum in Array speichern
    var lebenszahl = add(tagR.concat(monatR).concat(jahrR));

    //Wenn quersumme kleiner gleich 9 ist, wird die lebenszahl ausgegeben
    while (lebenszahl > 9){
        lebenszahl = add(splitIntoArray(lebenszahl));
    }
    console.log(lebenszahl)
    document.getElementById("lebenszahl-ausgabe").innerHTML = "Deine Lebenszahl ist die " + lebenszahl + " ." + lebenszahlBedeutung[lebenszahl-1];

}