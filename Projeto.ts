for (let numero = 2; numero <= 100; numero++) {

    let primo = true;

    for (let divisor = 2; divisor < numero; divisor++) {

        if (numero % divisor === 0) {
            primo = false;
            break;
        }
    }

    if (!primo) {
        continue;
    }

    console.log(numero);
    console.log(test);
}
