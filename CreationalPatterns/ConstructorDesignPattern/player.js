/*
Constructor Design Pattern
Creating classes with constructors
*/
class Player {
 
    constructor(firstName,lastName,number) {
        this.firstName = firstName
        this.lastName = lastName
        this.number = number
    };

    toString() {
        console.log(this.firstName + " " + this.lastName + " " + this.number) 
    };

}

let player1 = new Player("Yaya","Toure",42)
player1.toString()

/*
Constructor Design Pattern
The same thing can be made with JS Objects
*/
let PlayerObj = function(firstName,lastName,number) {
    this.firstName = firstName
    this.lastName = lastName
    this.number = number
}

PlayerObj.prototype.toString = function() {
    console.log(this.firstName + " " + this.lastName + " " + this.number) 
}

let p1 = new PlayerObj("Sergio","Aguero",10)
p1.toString()