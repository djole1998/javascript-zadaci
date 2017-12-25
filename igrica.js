function igrica() {
debugger;
    var prviIgrac = prompt('papir/kamen/makaze');
    var drugiIgrac = prompt('papir/kamen/makaze');
    var treciIgrac = prompt('papir/kamen/makaze');

    if ((prviIgrac === drugiIgrac && prviIgrac === treciIgrac && drugiIgrac === treciIgrac) || (prviIgrac !== drugiIgrac && prviIgrac !== treciIgrac && drugiIgrac !== treciIgrac)) {
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

    }
    console.log(rezultat);
}
igrica();