class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeters(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let users = new Student("Jane", "M.", "User");

document.body.innerHTML = greeters(users);