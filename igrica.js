function igrica() {
debugger;
    var prviIgrac = prompt('Prvi igrac: papir/kamen/makaze');
    var drugiIgrac = prompt('Drugi igrac: papir/kamen/makaze');
    var treciIgrac = prompt('Treci igrac: papir/kamen/makaze');

    if ((prviIgrac === drugiIgrac && prviIgrac === treciIgrac && drugiIgrac === treciIgrac) || (prviIgrac !== drugiIgrac && prviIgrac !== treciIgrac && drugiIgrac !== treciIgrac)) {
        alert('Nereseno, nova igra!');
        igrica();
    } else if (prviIgrac === 'papir' && drugiIgrac === 'papir' && treciIgrac === 'kamen') {
        alert('Nereseno, nova igra!');
        igrica();

    } else if (prviIgrac === 'papir' && drugiIgrac === 'papir' && treciIgrac === 'makaze') {

        rezultat = 'Treci igrac je pobedio sa makazama.';


    } else if (prviIgrac === 'papir' && drugiIgrac === 'kamen' && treciIgrac === 'papir') {
        alert('Nereseno, nova igra!');
        igrica();
    } else if (prviIgrac === 'papir' && drugiIgrac === 'kamen' && treciIgrac === 'kamen') {
        rezultat = 'Prvi igrac je pobednik sa papirom.';

    } else if (prviIgrac === 'papir' && drugiIgrac === 'makaze' && treciIgrac === 'papir') {
        rezultat = 'Drugi igrac je pobednik sa makazama';

    } else if (prviIgrac === 'papir' && drugiIgrac === 'makaze' && treciIgrac === 'makaze') {
        alert('Nereseno, nova igra!');
        igrica();


    } else if (prviIgrac === 'kamen' && drugiIgrac === 'papir' && treciIgrac === 'papir') {
        alert('Nereseno, nova igra!');
        igrica();
    } else if (prviIgrac === 'kamen' && drugiIgrac === 'papir' && treciIgrac === 'kamen') {
        alert('Nereseno, nova igra!');
        igrica();


    } else if (prviIgrac === 'kamen' && drugiIgrac === 'kamen' && treciIgrac === 'papir') {
        rezultat = 'Pobednik je treci igrac sa papirom';
    } else if (prviIgrac === 'kamen' && drugiIgrac === 'kamen' && treciIgrac === 'makaze') {
        alert('Nereseno, nova igra!');
        igrica();



    } else if (prviIgrac === 'kamen' && drugiIgrac === 'makaze' && treciIgrac === 'makaze') {
        alert('Nereseno, nova igra!');
        igrica();
    } else if (prviIgrac === 'kamen' && drugiIgrac === 'makaze' && treciIgrac === 'kamen') {
        alert('Nereseno, nova igra!');
        igrica();



    } else if (prviIgrac === 'makaze' && drugiIgrac === 'papir' && treciIgrac === 'papir') {
        rezultat = 'Pobednik je prvi igrac sa makazama.';
    } else if (prviIgrac === 'makaze' && drugiIgrac === 'papir' && treciIgrac === 'makaze') {
        alert('Nereseno, nova igra!');
        igrica();


    } else if (prviIgrac === 'makaze' && drugiIgrac === 'kamen' && treciIgrac === 'kamen') {
        alert('Nereseno, nova igra!');
        igrica();
    } else if (prviIgrac === 'makaze' && drugiIgrac === 'kamen' && treciIgrac === 'makaze') {
        rezultat = 'Pobednik je drugi igrac sa kamenom.';


    } else if (prviIgrac === 'makaze' && drugiIgrac === 'makaze' && treciIgrac === 'papir') {
        alert('Nereseno, nova igra!');
        igrica();
    } else if (prviIgrac === 'makaze' && drugiIgrac === 'makaze' && treciIgrac === 'kamen') {
        rezultat = 'Treci igrac je pobednik sa kamenom.';
    }
    alert(rezultat);
}
igrica();