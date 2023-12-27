function inflationCalculator() {

    // Definisem varijable
    let inflation = document.querySelector("#inflationRate");
    let money = document.querySelector("#money");
    let years = document.querySelector("#years");

    // Pretvaram vrijednosti u float number
    inflation = parseFloat(inflation.value);
    money = parseFloat(money.value);
    years = parseFloat(years.value)

    // Formula za izracunavanje inflacije za prvu godinu
    let worth = money + (money * (inflation / 100));

    // Pravim brojac, i formula za ostale godine
    for (let i = 1; i < years; i++) {
        worth += worth * (inflation / 100);
    }

    // Zaokruzejem na 2 decimale
    worth = worth.toFixed(2)

    console.log(worth)

    //Pravim div na stranici i prikazujem stopu inflacije
    let newElement = document.createElement("div");
    newElement.className = 'new-value';
    newElement.innerText = `Današnjih ${money}€ vrijedi isto kao ${worth}€ za ${years} godina/e.`
    document.querySelector(".container").appendChild(newElement)
}