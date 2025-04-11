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