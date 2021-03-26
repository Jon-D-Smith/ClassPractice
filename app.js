class Pet {
    //This constructor passes to anything that extends it
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //This function is available to any "Child"
    eat() {
        return `${this.name} is eating!`;
    }
}


class Cat extends Pet {
    //Creating a new contructor to add variables
    cosntructor(name, age, livesLeft) {
        //Super takes from the parent variables
        super(name, age)
        this.livesLeft = livesLeft;
    }
    meow() {
        return "Meow!!"
    }
}
//No constructor needed as it takes from the parent
class Dog extends Pet {
    bark() {
        return "woof!"
    }
}