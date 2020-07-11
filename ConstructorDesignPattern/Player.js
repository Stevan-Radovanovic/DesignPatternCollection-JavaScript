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

let player1 = new Player("Yaya","Toure",7)
player1.toString()