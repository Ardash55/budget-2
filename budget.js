class Budget { //класс создания счетов
    static allAccounts = []

    constructor(name, many) {
        this.name = name;
        this.many = many;
        Budget.allAccounts.push(this);
    }

    setMany(value) {
        this.many = this.many + value;
    }

    spendMany(value) {
        this.many = this.many - value;
    }

    setName(newName) {
        this.name = newName;
    }
}

class Category { //класс создания категорий трат
    static allCategory = [];

    constructor(name, many) {
        this.name = name;
        this.many = many;
        Category.allCategory.push(this);
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

let food = new Category('еда', 500);


let accountsConteiner = document.getElementById('accounts');

function showAllAccounts() {
    for (let i = 0; i < Budget.allAccounts.length; i++) {
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

let categoriesContainer = document.getElementById('categories');

function showAllCategories() {
    for (let i = 0; i < Category.allCategory.length; i++) {
        let categoryDiv = document.createElement('div');
        categoriesContainer.appendChild(categoryDiv);
        categoryDiv.className = 'categoryDiv';
        let categoryName = document.createElement('p');
        categoryDiv.appendChild(categoryName);
        categoryName.textContent = Category.allCategory[i].name;
        categoryName.className = 'categoryName';
        let categoryMany = document.createElement('p');
        categoryDiv.appendChild(categoryMany);
        categoryMany.textContent = Category.allCategory[i].many;
        categoryMany.className = 'categoryMany';
    }
}

function getMoneyFromBudget(sum, category, budget) {
    category.setMany(sum);
    budget.spendMany(sum);
}

showAllAccounts();
showAllCategories();