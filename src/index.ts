import * as $ from "jquery";
import "./scss/root.scss";

$('body').css("background-color", "#f5f5f5");

var color = [0, 0, 0];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

$('.yellow').click((event) => {
    var Color = color.map((el) => {
        return getRandomInt(0, 255).toString(16);
    })
    var strColor = Color.toString().replace(/,/gi, "");
    $('body').css("background-color", `#${strColor}`);
});

function showMess(message: string) {
    console.info(`It is ${message}`);
}

let a: string = "333";
showMess("first message");


// Define a Person model.
var Person = kendo.data.Model.define({
    fields: {
        "firstName": {
            type: "string"
        },
        "lastName": {
            type: "string"
        }
    },

    // Define a function for fullName to get the firstName and lastName
    // and concatenate them together.
    fullName: function () {
        return this.get("firstName") + " " + this.get("lastName");
    }
});

// Create an observable object with an obserable array where each item
// in the array is an instance of a Person model.
var vm = kendo.observable({
    people: [
        new Person({
            firstName: "John",
            lastName: "DeVight"
        }),
        new Person({
            firstName: "Wendy",
            lastName: "Parry"
        })
    ],

    // Add a new person to the array.
    add: function () {
        this.people.push(new Person());
    },

    // Delete the person from the array.
    delete: function (e) {
        var that = this;
        $.each(that.people, function (idx, person) {
            if (e.data.uid === person.uid) {
                that.people.splice(idx, 1);
                return true;
            }
        });
    }
});

kendo.bind($("#peopleList"), vm);