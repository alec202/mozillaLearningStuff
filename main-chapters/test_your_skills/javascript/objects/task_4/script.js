// JavaScript for task_4


class Cat {
    constructor(name, breed, color) {
        this.name = name;
        this.breed = breed;
        this.color = color;
    }

    Greeting() {
        console.log(`Hello, said ${this.name} the ${this.breed}.`);
    }
}
/**
 *     
    name: "Elfie",
    breed: "Aphrodite Giant",
    color: "ginger",

 */
cat = new Cat("Bertie", "Cymric", "white");
cat2 = new Cat("Elfie", "Aphrodite Giant", "Ginger");
// Don't edit the code below here!

cat.Greeting();
cat2.Greeting();

