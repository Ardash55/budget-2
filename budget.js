class Budget {
    constructor(name, many) {
        this.name = name;
        this.many = many;
    }

    add(value) {
        this.many += value;
        return this.many;
    }

    take(value) {
        this.many -= value;
        return this.many;
    }

    change(value) {
        this.many = value;
        return this.many;
    }

    rename(newName) {
        this.name = newName;
        return this.name;
    }
}

let categories = {

}

function addCategory(name) {
    categories[name] = 0;
    return categories;
}

// let cash = new Budget('Наличные', 500);

console.log(categories);

addCategory('Еда');
addCategory('Транспорт');
addCategory('Жилье');

console.log(categories);