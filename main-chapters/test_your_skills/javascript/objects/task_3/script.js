// JavaScript for task_4
const cat = {
    name: "Bertie",
    breed: "Cymric",
    color: "white",
    greeting: function () {
        console.log("Meow!");
    },
};

// Don't edit the code above here!

// Add your code here

cat.greeting = function() {
    console.log(`Hello, said ${this.name} the ${this.breed}.`)
}

cat2 = {
    name: "Alec",
    breed: "Garfield",
    color: "Orange",
    greeting: function () {
        console.log("Meow!");
    }
};

cat.greeting();
cat2.greeting();
