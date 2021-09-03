const person1 = new Object();
person1.firstName = "vaka";
person1.lastName = "lakshmi";
person1.toString = function() {
    return this.firstName + " " + this.lastName;
}
console.log(person1); //JSON
console.log(person1.toString()); //JSON