# Typescript + ES6

## Knowledge round-up

### Typescript

#### 1. What is TypeScript and Why do we need it?
- TypeScript is a superset of JavaScript which primarily provides optional static typing, classes and interfaces. One of the big benefits is to enable IDEs to provide a richer environment for spotting common errors as you type the code.TypeScript is a free and open-source programming language developed and maintained by Microsoft. 
- Why do we need  it? When us using TypeScript you can use the latest ES6 (and some ES2016/ES2017) features but not worry about browser or node version support, since TypeScript compiles to “standard JavaScript”. Even though today’s browsers support much of ES6, TypeScript levels the playing field, making sure the rendered JavaScript is 100% compatible across all platforms.

#### 2. How can you get TypeScript and install it?
- We  need to have Node.js and NPM installed.After that, TypeScript can be installed through the NPM package manager.
```bash	
npm install -g typescript
```

The `-g` means it’s installed on your system globally so that the TypeScript compiler can be used in any of your projects.

Test that the TypeScript is installed correctly by typing `tsc -v` in to your terminal or command prompt. You should see the TypeScript version print out to the screen.

For help on possible arguments you can type `tsc -h` or just `tsc`.


#### 3. How do you compile TypeScript files?
- The following command will compile a `single .ts` file in to `a .js` file:
```bash 
tsc app.ts
```
This will result in an app.js file being created.

To compile multiple .ts files:
```bash 
tsc app.ts another.ts someMore.ts
```
This will result in 3 files, `app.js`, `another.js` and `someMore.js`.
#### 4. Which Object Oriented terms are supported by TypeScript? Write an example.
- Object Oriented terms are supported by TypeScript:
Classes, Association, aggregation, and composition, Inheritance
- Example
-- Classes
```
class Person {
  public name : string;
  public surname : string;
  public email : string;
  constructor(name : string, surname : string, email : string){
    this.email = email;
    this.name = name;
    this.surname = surname;
  }
  greet() {
    alert("Hi!");
  }
}

var me : Person = new Person("Remo", "Jansen", 
"remo.jansen@wolksoftware.com");
```

-- Interface
```
interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);
```

-- Model association: 
 
```
@model()
class ChatRoom extends modelsafe.Model {
  // Other properties first..

  @assoc(modelsafe.HAS_ONE, User)
  user: User;
}

@model()
class AvailabilityStatus extneds modelsafe.Model {
  // Other properties first..
  
  @assoc(modelsafe.BELONGS_TO, User)
  user: User;
}

@model()
class ChatMessage extneds modelsafe.Model {
  // Other properties first..
  
  @assoc(modelsafe.BELONGS_TO_MANY, User)
  users: User[];
}

@model()
class User extends modelsafe.Model {
  // Other properties first..

  @assoc(modelsafe.BELONGS_TO, ChatRoom)
  room: ChatRoom;

  @assoc(modelsafe.HAS_ONE, AvailabilityStatus)
  status: AvailabilityStatus;

  @assoc(modelsafe.BELONGS_TO_MANY, ChatMessage)
  messages: ChatMessage[];
}
```
-- Aggregation
 We call aggregation those relationships whose objects have an independent lifecycle, but there is ownership, and child objects cannot belong to another parent object. Let's take an example of a cell phone and a cell phone battery. A single battery can belong to a phone, but if the phone stops working, and we delete it from our database, the phone battery will not be deleted because it may still be functional. So in aggregation, while there is ownership, objects have their own lifecycle
 
 -- Composition

We use the term composition to refer to relationships whose objects don't have an independent lifecycle, and if the parent object is deleted, all child objects will also be deleted.

Let's take an example of the relationship between questions and answers. Single questions can have multiple answers, and answers cannot belong to multiple questions. If we delete questions, answers will automatically be deleted.

Objects with a dependent life cycle (answers, in the example) are known as weak entities.

-- Inheritance

```
class Person {
  public name : string;
  public surname : string;
  public email : Email;
  constructor(name : string, surname : string, email : Email){
    this.name = name;
    this.surname = surname;
    this.email = email;
  }
  greet() {
    alert("Hi!");
  }
}

class Teacher extends Person {
  teach() {
    alert("Welcome to class!");
  }
}

var teacher = new Teacher("remo", "jansen", new 
Email("remo.jansen@wolksoftware.com"));

var me = new Person("remo", "jansen", new 
Email("remo.jansen@wolksoftware.com"));

me.greet();
teacher.greet();
me.teach(); // Error : Property 'teach' does not exist on type 
'Person'
teacher.teach();
```
####  5. How do you implement inheritance in TypeScript? Write an example.
We can extends class by use keyword `extends`.Example in #4. 

## ES6
#### Write an example for each of the following new features in ES6:  `Block scope variable` `Template Literals` `Multi-line strings` `Arrow functions` `For...of` `Default parameters`
 - Block scope variable  
 We use let to limit scope of varible  in block statement
```
 function f(input: boolean) {
    let a = 100;

    if (input) {
        // Still okay to reference 'a'
        let b = a + 1;
        return b;
    }

    // Error: 'b' doesn't exist here
    return b;
}
```
  
- Template Literals

The delimiter of a template literal is the backtick ` character (also know as backquote character or grave accent symbol). An expression inside the literal (the value of which is evaluated during runtime and included in the final value produced by the literal) is enclosed in curly braces {} with a preceding dollar sign $

```
console.log(`hello`);
// hello
 
var name = "Joan";
console.log(`hello ${name}`);
// hello Joan
 
console.log(`Dear Joan,
Welcome.`);
// Dear Joan,
// Welcome.

console.log(`inline code in markup: \`code\``);
// inline code in markup: `code`
 
var name = "Joan";
 
console.log(`hello \${name}.`);
// hello ${name}.
 
console.log(String.raw`hello \${name}.`);
// hello \${name}.
```

- Multi-line string
The new kid in town is called Template Strings. Template Strings are demarked by a backtick(`) on either end and can contain other backticks if they are escaped by a backslash(ie. let my_string = `some cool \`escaped\` thing`). This new kind of primitive in JavaScript is different from string literals in a few important ways.

```
let kevin = {  
  profile_image: 'http://lorempixel.com/300/300',
  name: 'Kevin',
  title: 'Mover, Shaker, Risk Taker'
}

function get_user_widget_markup (user) {  
  return `<div class="user-profile">
    <img src="${user.profile_image}" alt="" class="user-image">
    <h2 class="user-name">${user.name}</h2>
    <p class="user-title">${user.title}</p>
  </div>`
}

get_user_widget_markup(kevin)  
```

- Arrow function 
An arrow function expression has a shorter syntax than a function expression and does not bind its own this, arguments, super, or new.target. These function expressions are best suited for non-method functions, and they cannot be used as constructors.

```
$('.btn').click((event) =>{
  this.sendData()
})
```

- Default parameters
Default parameters allow us to initialize functions with default values. A default is used when an argument is either omitted or undefined; this means null is a valid value. A default parameter can be anything from a number to another function.

```
var link = function(height = 50, color = 'red', url = 'http://azat.co') {
  ...
}

```

- For ... of

With the new for-of loop, ES6 aims to bring the best parts from all three of the previous approaches.

```
let list = [8, 3, 11, 9, 6];
 
for (let value of list) {
  console.log(value);
}
```