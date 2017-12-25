/*1.
Dobijene su cetiri varijable. Napraviti petu varijablu 'recenica', i u nju spojiti ove reci u recenicu.
    Spajanje je potrebno uraditi string metodom, a ne sa operatorom +*/

let prvaRec = 'Ove ';
let drugaRec = 'reci treba ';
let trecaRec = 'spojiti u jednu ';
let cetvrtaRec = 'recencu.';

let recenica = prvaRec.concat(drugaRec,trecaRec,cetvrtaRec);
console.log(recenica);

/*
2.
Napraviti objekat 'osoba' koji ceo kao propertije imati: ime, prezime, godina rodjenja.
    Ispisati npr: 'Pera Peric ima _(broj)_ godina'.*/


var osoba = {
    ime: 'Pera',
    prezime: 'Peric',
    godine: 19
};
console.log(osoba.ime + " " + osoba.prezime + " ima " + osoba.godine + " godina.");

var osoba2 = {
    godina_rodjenja: 1998
};
var datum = new Date();
var godina = datum.getFullYear();

console.log("ima " + (godina-osoba2.godina_rodjenja));

/*
3.
Napraviti igru 'papir-kamen-makaze', gde ucestvuju dva igraca.
    Pravila igre:
    - papir je jaci od kamena
    - kamen je jaci od makaza
    - makaze su jace od papira
Dve promenljive (prviIgrac i drugiIgrac) primaju kao string papir, kamen ili makaze.
    Ispisati koji je igrac pobedio i sta je izabrao. Ukoliko su oba igraca izabrali isto ispisati da je rezultat neresen.*/
var prviIgrac = prompt("papir/kamen/makaze");
var drugiIgrac = prompt("papir/kamen/makaze");
function papirKamenMakaze() {
    var rezultat;


    if (prviIgrac === drugiIgrac) {
       rezultat = 'Nereseno!';
    } else if (prviIgrac === 'papir' && drugiIgrac === 'kamen'){
        rezultat = 'Prvi igrac je pobedio sa papirom.';
    } else if(prviIgrac ==='papir' && drugiIgrac === 'makaze') {
        rezultat ='Drugi igrac je pobedio sa makazama.';

    } else  if(prviIgrac === 'kamen' && drugiIgrac === 'makaze'){
        rezultat = 'Prvi igrac je pobedio sa kamenom.';
    } else if (prviIgrac === 'kamen' && drugiIgrac === 'papir'){

        rezultat ='Drugi igrac je pobedio sa papir.';
    } else  if(prviIgrac === 'makaze' && drugiIgrac === 'papir'){
        rezultat = 'Prvi igrac je pobedio sa makazama.';
    } else if(prviIgrac === 'makaze' && drugiIgrac === 'kamen'){
        rezultat = 'Drugi igrac je pobedio sa kamenom.';
    }


console.log(rezultat);
}
papirKamenMakaze();


/* 4. Pomocu ugradjenog objekta u JavaScriptu - Date - , ispisati danasnji datum.*/

var date = new Date();

var datum = date.getDate();
var mesec = date.getMonth() + 1;
var godina = date.getFullYear();

console.log(datum +  "-" + mesec +  "-" + godina);

/*5. Funckija prima 3 broja. Izracunati srednju vrednost tih brojeva.*/

function srednjaVrednost(a,b,c) {
    return ((a+b+c)/3);
}
srednjaVrednost(2,5,14);




/*
6. Funkcija prima niz nekoliko brojeva. Npr var niz = [1,3,5,7,10].
    Ispisati svaki od brojeva iz niza uvecan za 3.
Ocekivan rezultat posle poziva funkcije je -> [4, 6, 8, 10, 13]*/


function uvecaj(){
    var niz = [1,3,5,7,10];
    for(var i =0; i< niz.length;i++){
        niz[i] = niz[i]+3;
    }

    console.log(niz);
}
uvecaj();

/*
7. Prosiriti igru papir kamen makaze, iz treceg primera tako da sada ucestvuju tri igraca ukupno.
    Pokusati u ovom primeru koristiti Switch statement.*/


function igrica() {

    var prviIgrac = prompt("papir/kamen/makaze");
    var drugiIgrac = prompt("papir/kamen/makaze");
    var treciIgrac = prompt("papir/kamen/makaze");

    if (prviIgrac === drugiIgrac && prviIgrac === treciIgrac || prviIgrac !== drugiIgrac && prviIgrac !== treciIgrac && drugiIgrac !== treciIgrac) {
        rezultat = 'Nereseno!';
    } else if (prviIgrac === 'papir' && drugiIgrac === 'papir' && treciIgrac === 'kamen') {

        igrica();

    } else if (prviIgrac === 'papir' && drugiIgrac === 'papir' && treciIgrac === 'makaze') {

        rezultat = 'Treci igrac je pobedio sa makazama.';


    } else if (prviIgrac === 'papir' && drugiIgrac === 'kamen' && treciIgrac === 'papir') {

        igrica();
    } else if (prviIgrac === 'papir' && drugiIgrac === 'kamen' && treciIgrac === 'kamen') {
        rezultat = 'Prvi igrac je pobednik sa papirom.';

    } else if (prviIgrac === 'papir' && drugiIgrac === 'makaze' && treciIgrac === 'papir') {
        rezultat = 'Drugi igrac je pobednik sa makazama';

    } else if (prviIgrac === 'papir' && drugiIgrac === 'makaze' && treciIgrac === 'makaze') {
        igrica();


    } else if (prviIgrac === 'kamen' && drugiIgrac === 'papir' && treciIgrac === 'papir') {
        igrica();
    } else if (prviIgrac === 'kamen' && drugiIgrac === 'papir' && treciIgrac === 'kamen') {
        igrica();


    } else if (prviIgrac === 'kamen' && drugiIgrac === 'kamen' && treciIgrac === 'papir') {
        rezultat = 'Pobednik je treci igrac sa papirom';
    } else if (prviIgrac === 'kamen' && drugiIgrac === 'kamen' && treciIgrac === 'makaze') {
        igrica();


    } else if (prviIgrac === 'makaze' && drugiIgrac === 'papir' && treciIgrac === 'papir') {
        rezultat = 'Pobednik je prvi igrac sa makazama.'
    } else if (prviIgrac === 'makaze' && drugiIgrac === 'papir' && treciIgrac === 'makaze') {
        igrica();


    } else if (prviIgrac === 'makaze' && drugiIgrac === 'kamen' && treciIgrac === 'kamen') {
        igrica();
    } else if (prviIgrac === 'makaze' && drugiIgrac === 'kamen' && treciIgrac === 'makaze') {
        rezultat = 'Pobednik je drugi igrac sa kamenom.';


        console.log(rezultat);

    }
}
/*
/!* PAPIR *!/
papir papir papir
papir papir kamen
papir papir makaze

papir kamen papir
papir kamen kamen
papir kamen makaze

papir makaze papir
papir makaze kamen
papir makaze makaze

/!* KAMEN *!/
kamen papir papir
kamen papir kamen
kamen papir makaze

kamen kamen papir
kamen kamen kamen
kamen kamen makaze

kamen makaze papir
kamen makaze kamen
kamen makaze makaze

/!* MAKAZE *!/

makaze papir papir
makaze papir kamen
makaze papir makaze

makaze kamen papir
makaze kamen kamen
makaze kamen makaze

makaze makaze papir
makaze makaze kamen
makaze makaze makaze

*/






/*8. Koristeci Ternary operator (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
ispitati da li je jedan broj veci od drugog.
if ( a > b ) { 'a je vece od b' } else { 'b je vece od a' }  -->> ovo postoci sa ternary operatorom.*/


function conditionalOperator (a,b) {
  var rezultat =  a > b ? 'a je vece od b' : 'b je vece od a';
    console.log(rezultat);
}
conditionalOperator(2,3);



/*9. U niz [0,1,2] dodati jos dva broja i dva stringa.*/

function dodajUNiz() {
    var niz = [0,1,2];
    niz.push(123,23,'djole','aaa');
    console.log(niz);
}
dodajUNiz();

/*10. U niz [1,2,3] na pocetak dodati broj 0.*/

function dodajNaPocetak() {
    var niz = [1,2,3];
    niz.unshift(0);
    console.log(niz);
}
dodajNaPocetak();

/*11. Spojiti dva niza ['prvi', 'niz'] i ['drugi', 'niz'] tako da oni daju jedan niz.*/

var prviNiz = ['prvi', 'niz'];
var drugiNiz = ['drugi', 'niz'];
var treciNiz = prviNiz.concat(drugiNiz);
console.log(treciNiz);


/*
12. U zadati niz dodati broj koji oznacava duzinu tog niza.
    var niz = [11, 55, 0, 'cool', 2017];*/

var nizDuzina = [11, 55, 0, 'cool', 2017, '123123123123'];
nizDuzina.push(nizDuzina.length+1);
console.log(nizDuzina);


/* 13. var niz = [1, 2, 3, 4, 5]
Izmeniti niz tako prvi i poslednji clan niza zamene mesta.*/

var nizZamena = [1,2,3,4,5];
var temp = nizZamena[0];
nizZamena[0] = nizZamena[nizZamena.length-1];
nizZamena[nizZamena.length-1] = temp;
console.log(nizZamena);


/* 14. Koriscenjem metode .filter, iz zadatog niza izbaciti sve brojeve manje ili jednake od broja 17.
var niz = [18, 4, 33, 12, 17, 1, 44]*/

function filterMetoda (broj){
    return broj > 17;
}
var sedamnaest = [18, 4, 33, 12, 17, 1, 44].filter(filterMetoda);
console.log(sedamnaest);



/* 15. Koriscenjem metode .map iz zadatog niza svaki clan uvecati za duzinu tog niza.
    var niz = [1, 5, 10, 22, 33, 50, 55]*/

var nizMap = [1, 5, 10, 22, 33, 50, 55];

var noviMap = nizMap.map( function(broj){
    return broj + nizMap.length;
});
console.log(noviMap);