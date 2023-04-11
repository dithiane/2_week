//////////////////////////// PROBLEM 1 ////////////////////////////
/*
  Create an object called me.
  Give it a key of name with the value being your name, and another key of age with the value being your age.
*/

//Code here
console.log("````````````````````````````````````````````````````````````````````````````````````````Problem_1")

let me = {name: "Elena", age: 30}
console.log(me)

//////////////////////////// PROBLEM 2 ////////////////////////////

//Create an object saved to the variable dog.
//The dog object should have the following properties:
//name (a string), color (a string), age (a number),
//and goodBoy/goodGirl (a boolean).

//Code here
console.log("````````````````````````````````````````````````````````````````````````````````````````Problem_2")

let dog = {name: "Toby", color: "black", age: 2, goodBoy: true}
console.log(dog)

//////////////////////////// PROBLEM 3 ////////////////////////////
/* Print out the name of the dog you created in problem 2 using dot-notation. */

//Code here
console.log("````````````````````````````````````````````````````````````````````````````````````````Problem_3")

console.log("Dog name", dog.name)

//////////////////////////// PROBLEM 4 ////////////////////////////
/* Print out the color of the dog you created in problem 2 using bracket-notation. */

//Code here
console.log("````````````````````````````````````````````````````````````````````````````````````````Problem_4")

console.log("Dog age", dog["age"])

//////////////////////////// PROBLEM 5 ////////////////////////////
/*
  Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday.
  Have the values to those keys be strings that are equal to your favorite thing in that category.
*/

//Code here
console.log("````````````````````````````````````````````````````````````````````````````````````````Problem_5")

let favoriteThings = {band: "The Beatles", food: "Chicken noodle soup", person: "Albert Einstein", book: "The Adventures of Sherlock Holmes", movie: "Back to the Future", holiday: "New Year"}

/*
  After you've made your object, use bracket or dot notation to add another key named 'car' with the value being your favorite car and then another key named 'show' with the value being your favorite show.
*/

//Code here

favoriteThings["car"] = "Ferrari"

/*
  Now use bracket or dot notation to change the value of the food key in your favoriteThings object to be 'Chicken Nuggets'
  and change the value of the book key in your favoriteThings object to be 'Harry Potter'. (If they were either of those things already, change them to something else.)
*/

//Code here
favoriteThings.food = "Chicken Nuggets"
favoriteThings.book = "Harry Potter"

console.log(favoriteThings)

//////////////////////////// PROBLEM 6 ////////////////////////////

// Do not edit the code below.
var carDetails = {
  color: 'red',
  make: 'toyota',
  model: 'tacoma',
  year: 1994
}
// Do not edit the code above.

/*
  Use object destructuring to save the property values from the object carDetails into new variables. 
*/

//Code Here
console.log("````````````````````````````````````````````````````````````````````````````````````````Problem_6")

const {color, make, model, year} = carDetails

console.log(color, make, model, year)


//////////////////////////// PROBLEM 7 ////////////////////////////

/*
  In the function below named greeting, it is receiving an object as a parameter. 
  Use object destructuring to save the object properties to new variables. 
  The property names are firstName, lastName, and title.
*/

function greeting( obj ) {
  //Code Here
  console.log("````````````````````````````````````````````````````````````````````````````````````````Problem_7")

  let { firstName, lastName, title } = obj

  // Do not edit the code below.
  return 'Hello, ' + title + ' ' + firstName + ' ' + lastName + '!';
  // Do not edit the code above.
}

console.log(greeting({firstName: "Arthur", lastName: "Conan Doyle", title: "The Adventures of Sherlock Holmes"}))

//////////////////////////// PROBLEM 8 ////////////////////////////

/*
  Write a function called totalPopulation that will take in an object.
  That object will have 4 properties named utah, california, texas and arizona.
  The property values will be numbers.
  Use object destructuring to save the property values to new variables.
  Sum up the values and return the total number.
*/

//Code Here
console.log("````````````````````````````````````````````````````````````````````````````````````````Problem_8")

const totalPopulation = (obj) => {
  let {utah, california, texas, arizona} = obj
  return utah + california + texas + arizona
}

console.log(totalPopulation({utah: 84899, california: 163696, texas: 268597, arizona: 113990 }))
//////////////////////////// PROBLEM 9 ////////////////////////////

/*
  Write a function called ingredients that will take in an object. 
  This object will have 3 properties named carb, fat, and protein. 
  The property values will be strings. 
  Use object destructuring to save the property values to new variables. 
  Push these new variables to an array and return the array. 
*/

//Code Here
console.log("````````````````````````````````````````````````````````````````````````````````````````Problem_9")

const ingredients = (obj) => {
  const {carb, fat, protein} = obj

  return [carb, fat, protein]
}

console.log(ingredients({carb: "34", fat: "67", protein: "68"}))

//////////////////////////// PROBLEM 10 ////////////////////////////
// Do not edit the code below.
var user = {
  name: 'Bryan',
  age: 24,
  pwHash: 'U+Ldlngx2BYQk',
  email: 'BryanSmith33@gmail.com',
  birthday: '05/02/1990',
  username: 'bryansmith33'
};
// Do not edit the code above.

/*
  Let's say I, the user, decided to change my name and email address to the following:
  name -> 'Bryan G. Smith' and email -> 'bryan.smith@devmounta.in'.
  Make that change without modifying the original object code above.
*/

//Code Here
console.log("````````````````````````````````````````````````````````````````````````````````````````Problem_10")

let user1 = {
  ...user
};

user1.name = 'Bryan G. Smith'
user1.email = 'bryan.smith@devmounta.in'

console.log(user1, user)

//////////////////////////// PROBLEM 11 ////////////////////////////
/*
  Using the user object above, delete the users age off of the object.
*/

//Code Here
console.log("````````````````````````````````````````````````````````````````````````````````````````Problem_11")

delete user1.age
console.log(user1)

//////////////////////////// PROBLEM 12 ////////////////////////////
/*
  Create a class called 'Cat'. Make sure to call your constructor, and require these 3 parameters: name, age, color.
  Outside of your class, create an instance of your cat, passing in whatever values you would like.
  Print the name of your cat instance using dot notation.
*/

//Code here
console.log("````````````````````````````````````````````````````````````````````````````````````````Problem_12")

class Cat {
  constructor(name, age, color) { 
    this.name = name
    this.age = age
    this.color = color
  }
}

const myCat = new Cat('Snow', 2, "white");
console.log(myCat)

//////////////////////////// PROBLEM 13 ////////////////////////////
/*
  Create a class called 'Wizard'. Make sure to call your constructor, and require these 3 parameters: name, age, favoriteSpell.
  Add a function to your Wizard class called castSpell. This function should print "{name} has cast {favoriteSpell}"
  Outside of your class, create an instance of your Wizard, passing in whatever values you would like.
  Call the castSpell function on the instance of your wizard.
*/

//Code here
console.log("````````````````````````````````````````````````````````````````````````````````````````Problem_13")

class Wizard {
  constructor(name, age, favoriteSpell) { 
    this.name = name
    this.age = age
    this.favoriteSpell = favoriteSpell
  }
  castSpell() {
    console.log(`${this.name} has cast ${this.favoriteSpell}`)
  }
}

const myWizard = new Wizard("Guddy", 222, "Asuarrooo");
myWizard.castSpell()

//////////////////////////// PROBLEM 14 ////////////////////////////
/*
    Write a class called Phone. We'll use it as if we were creating
    phone objects to keep track of inventory using an app.

    Phone will build phone objects with brand, model, storage, color, price, and sold properties.

    Write a constructor that sets those values -- all of the values 
    should come from the constructors parameters except sold, which
    should always be set to false. We want that to be false since 
    when we create a new phone, we're putting it in our inventory
    and it won't be sold yet. 

    Create a method called 'sell'.
    sell should be a function that changes the value of sold to true and prints the string: '{brand} {model} has been sold.'
    
    Create another method called 'changePrice'. We can use this 
    to change the price in case a phone isn't selling.
    changePrice should take in one argument, 'newPrice'. 
    Inside the function, reassign the value of the object's price
    to be newPrice.
*/

//Code Here
console.log("````````````````````````````````````````````````````````````````````````````````````````Problem_14")

class Phone {
  constructor(brand, model, storage, color, price) { 
    this.brand = brand
    this.model = model
    this.storage = storage
    this.color = color
    this.price = price
    this.sold = false
  }

  sell() {
    this.sold = true;
    console.log(`${this.brand} ${this.model} has been sold.`)
  }

  changePrice(newPrice) {
    this.price = newPrice
  }
}

/*
    Next make three new phone instances using your class.
    Send in values of your choice. They should match these data types:
    - brand: string
    - model: string
    - storage: number
    - color: string
    - price: number
*/

//Code Here
const myPhone = new Phone("Samsung", "Galaxy S23+", 512, "white", 1120);
/* 
  Call the changePrice function on one of your phones, 
  don't forget to pass in a new price 

  Then console.log that object to see the price change
*/ 

//Code Here 
myPhone.changePrice(2000)
console.log(myPhone)

/*
  Now call the sell method on one of your other phone objects

  Print the value of that phone's sell property to make sure it's been changed to true
*/

//Code Here 
myPhone.sell()
console.log(myPhone)
////////////////////////// PROBLEM 15 ////////////////////////////

/*
  Use the spread operator to create a copy of the colors object below.
  Store the copy in a variable called colorsCopy.
  Note: We did not cover the spread operator in class. 
  We do not expect you to know how to use it. Challenge yourself by going online and researching what the spread operator is and how to use it.
*/

//do not edit this object
const colors = {
  background: 'red',
  highlight: 'blue',
  text: 'yellow'
}
//do not edit this object

//Code Here 
console.log("````````````````````````````````````````````````````````````````````````````````````````Problem_15")

const colorsCopy = {
  ...colors
}

/*
 Now use the spread operator to combine the following 2 objects into one. 
 Call the new variable helensInfo. 
 When they combine, none of the properties should be repeated.
*/

//do not edit the objects below
const contactInfo = {
  firstName: 'Helen',
  lastName: 'Parr',
  phoneNumber: 1234445555,
  email: 'helen@mymail.com',
}

const shippingInfo = {
  firstName: 'Helen',
  lastName: 'Parr',
  street: '100 E. Main Street',
  city: 'Anytown',
  state: 'AZ',
  zipCode: 85004,
}
//do not edit the objects above

//Code Here
const helensInfo =  {...contactInfo, ...shippingInfo}

//Print helensInfo to see what it looks like, there should be no repeating properties.

console.log(helensInfo)

//////////////////////////// PROBLEM 16 ////////////////////////////

/*
  Create a class called Vehicle. Make sure to call your constructor, 
  and require these 3 parameters: capacity (how many passengers), color, and mileage.

  Write a method inside your class called 'move'.
  The move function should take in one parameter, miles.
  Inside the function, add the number of miles to the object's mileage.
  And finally, print the value of the mileage.
*/

//Code Here 
console.log("````````````````````````````````````````````````````````````````````````````````````````Problem_16")

class Vehicle {
  constructor(capacity, color, mileage){
    this.capacity = capacity
    this.color = color
    this.mileage = mileage
  }

  move(miles){
    this.mileage + miles
    console.log(this.mileage)
  }
}

/*
  Create a vehicle using your new class and save it to a variable called myFirstVehicle
*/

//Code Here

const myFirstVehicle = new Vehicle(8, 'black', 10000)

/* 
  Now we'll create a class that's based off of the vehicle class. 

  Write a class called Motorcycle that *extends* the Vehicle class. In the constructor, 
  make sure you require all of the parameters from the Vehicle class as well as 2 
  new ones: make and isCool. (Hint: don't forget to call the super function)
*/

//Code Here

class Motorcycle extends Vehicle {
  constructor(capacity, color, mileage, make, isCool){
    super(capacity, color, mileage)
    this.make = make
    this.isCool = isCool
  }
}

/*
  Create a Motorcycle using your new class and save it to a variable called myFirstMotorcycle
*/

//Code Here 
const myFirstMotorcycle = new Motorcycle(2, 'white', 12000, "China", true)
/*
  Call the move function on myFirstMotorcycle (don't forget the parameter)
*/
myFirstMotorcycle.move(13000)
console.log(myFirstMotorcycle)
/*
  Let's make another class based off of Vehicle. 

  Write a class called Boat that *extends* the Vehicle class. The constructor should take in
  all the same arguments as Vehicle plus 3 new ones: 
  name (boats gotta have cool names), type (ski boat, yacht, etc), and isSeaworthy.

  Create a method inside of the Boat class called checkSeaworthiness 
  Inside the method, check to see if the boat is seaworthy
  If it is, console.log a string: 'The {color} {type} {name} is seaworthy!'
  If it isn't, console.log a string: 'You need to get your {type} in shape!'

  Write a second function in this class called performMaintenance 
  This function should set isSeaworthy to be true
*/

//Code Here
class Boat extends Vehicle {
  constructor(capacity, color, mileage, name, type, isSeaworthy){
    super(capacity, color, mileage)
    this.name = name
    this.type = type
    this.isSeaworthy = isSeaworthy
  }

  checkSeaworthiness() {
    if (this.isSeaworthy) console.log(`The ${this.color} ${this.type} ${this.name} is seaworthy!`)
    else console.log(`You need to get your ${this.type} in shape!`)
  }

  performMaintenance(){
    this.isSeaworthy = true
  }
}

/*
  Create a new boat using your class. You can choose whatever values you like for all the 
  properties except isSeaworthy -- make that one false. Call your variable myFirstBoat.
*/

//Code Here
  const myFirstBoat = new Boat(12, "white", 2000, "Flyer", "yacht", false)
/*
  Call the checkSeaworthiness method on your new boat
*/

//Code Here
console.log(myFirstBoat)
myFirstBoat.checkSeaworthiness()
/*
  Now run the performMaintenance method on your boat
*/

//Code Here 
myFirstBoat.performMaintenance()
/*
  Check the seaworthiness once more (you should be ready for the water!)
*/

//Code Here
console.log(myFirstBoat)
myFirstBoat.checkSeaworthiness()
