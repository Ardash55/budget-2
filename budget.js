class Budget {
static allAccounts = []

    constructor(name, many) {
        this.name = name;
        this.many = many;
        Budget.allAccounts.push(this);
    }

    setMany(value) {
        this.many = this.many + value;
    }

    setName(newName) {
        this.name = newName;
    }
}

let card = new Budget('Карта', 0);
let cash = new Budget('Наличные', 300);

// console.log(Budget.allAccounts[0]);

let accountsConteiner = document.getElementById('accounts');

function showAllAccounts() {
    for(let i = 0; i < Budget.allAccounts.length; i++) {
        let accountDiv = document.createElement('div');
        accountsConteiner.appendChild(accountDiv);
        accountDiv.className = 'accoutDiv';
        let accountName = document.createElement('p');
        accountDiv.appendChild(accountName);
        accountName.textContent = Budget.allAccounts[i].name;
        accountName.className = 'accountName';
        let accountMany = document.createElement('p');
        accountDiv.appendChild(accountMany);
        accountMany.textContent = Budget.allAccounts[i].many;
        accountMany.className = 'accountMany'
    }
}

showAllAccounts();