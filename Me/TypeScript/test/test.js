var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeters(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var users = new Student("Jane", "M.", "User");
document.body.innerHTML = greeters(users);
