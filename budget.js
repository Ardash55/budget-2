class Budget {
    constructor(name, many) {
        this.name = name;
        this.many = many;
    }

    setMany(value) {
        this.many = this.many + value;
    }

    setName(newName) {
        this.name = newName;
    }
}

let allAccounts = [];

let card = new Budget('Карта', 0);
let cash = new Budget('Наличные', 300);

allAccounts.push(card);
allAccounts.push(cash);

console.log(allAccounts);

let accountsConteiner = document.getElementById('accounts');