class Dog {
    constructor(name){
        this._name = name;
    }

    introduce() {
        console.log("This is " + this._name  + " !");
    }

    // a static method
    static bark() {
        console.log("Woof!");
    }
}

const myDog = new Dog("Buster");
myDog.introduce();
//myDog.bark(); เรียกไม่ได้ เพราะไม่ใช่ฟังก์ชั่น

// calling the static method
Dog.bark();