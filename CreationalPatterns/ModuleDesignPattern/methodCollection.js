/*
Method Design Pattern
Encapsulating functions in one place
*/
let MethodCollection = function() {

    let array = new Array()

    let addNewElement = function(element) {
        array.push(element)
        console.log("New element added")
    }

    let showElements = function(element) {
        console.log("Showing all elements:")
        array.forEach((value) => {console.log(value)})
    }

    return {
        addNewElement: addNewElement,
        showElements: showElements
    }

}

module.exports = MethodCollection()