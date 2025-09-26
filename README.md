# JavaScript_Playlist
A code repo of javascript playlist



# CONST, LET & VAR <br>
## Var 
- Introduced in ES5 (and earlier)<br>
- Scope → Function-scoped (or globally-scoped if not inside a function).<br>
-Hoisting → Yes, but initialized as undefined until the execution reaches the declaration.<br>
- Re-declaration → Allowed in the same scope.<br>
- Re-assignment → Allowed.<br>

function testVar() {<br>
  if (true) {<br>
    var x = 10; // var is function-scoped<br>
  }<br>
  console.log(x); // ✅ 10 (accessible outside the block)<br>
}<br>

testVar();<br>

var y = 5;<br>
var y = 15; // ✅ re-declaration allowed<br>
console.log(y); // 15<br>

console.log(z); // ✅ undefined (hoisted, but not initialized yet)<br>
var z = 20;<br>



<hr>

## let
- Introduced in ES6 (2015)  <br>
- Scope → Block-scoped ({ ... }).
- Hoisting → Yes, but not initialized. Accessing before declaration gives ReferenceError (this is called Temporal Dead Zone).<br>
- Re-declaration → ❌ Not allowed in the same scope.<br>
- Re-assignment → ✅ Allowed.<br>

1. Example:

function testLet() {<br>
  if (true) {<br>
    let a = 30; // let is block-scoped<br>
    console.log(a); // ✅ 30<br>
  }<br>
  // console.log(a); // ❌ ReferenceError: a is not defined<br>
}<br>

testLet();<br>

let b = 40;
// let b = 50; // ❌ SyntaxError: Identifier 'b' has already been declared<br>
b = 60; // ✅ re-assignment is allowed<br>
console.log(b); // 60<br>

// Hoisting example<br>
// console.log(c); // ❌ ReferenceError (TDZ)<br>
let c = 70;<br>
console.log(c); // 70<br>

<hr>

## Const
> Also introduced in ES6.
> Scope: Block-scoped (like let).
> Must be initialized at declaration.
> Cannot be updated or re-declared.
> Used for constants or values that should not change.ntroduced in ES6 (2015)

- Scope → Block-scoped ({ ... }). 
<br>
- Hoisting → Yes, but not initialized (same TDZ issue as let).
<br>
- Re-declaration → ❌ Not allowed in the same scope.
<br>
- Re-assignment → ❌ Not allowed (constant binding).
<br>
- ⚠️ But object/array values can still be modified (only the reference is constant).
<br>

1. Example
const pi = 3.14;
<br>
// pi = 3.14159; // ❌ TypeError: Assignment to constant variable
<br>
const person = { name: "Rohit", age: 22 };
<br>
person.age = 23; // ✅ modifying object properties is allowed
<br>
console.log(person); // { name: "Rohit", age: 23 }
<br>
// const person = {}; // ❌ Re-declaration not allowed in same scope
<br>
// Hoisting example
<br>
// console.log(d); // ❌ ReferenceError (TDZ)
<br>
const d = 100;
<br>
console.log(d); // 100

<hr>

| Feature        | var               | let               | const             |
| -------------- | ----------------- | ----------------- | ----------------- |
| Scope          | Function-scoped   | Block-scoped      | Block-scoped      |
| Re-declaration | ✅ Allowed         | ❌ Not allowed     | ❌ Not allowed     |
| Update value   | ✅ Allowed         | ✅ Allowed         | ❌ Not allowed     |
| Hoisting       | ✅ Yes (undefined) | ✅ Yes (but TDZ\*) | ✅ Yes (but TDZ\*) |
| Initialization | Optional          | Optional          | Mandatory         |

**Note => prefer not to use var because of issue in  block scope and fucntional scope.

<hr>

## Data type
- A data type defines the type of value a variable can hold in JavaScript.
<br>
- JavaScript is a dynamically typed language, meaning you don’t have to declare the type explicitly — the type is decided at runtime based on the value.
<br>

1. Exapmle
let x = 42;      // number
<br>
x = "Hello";     // now it's a string

<hr>

### Categories of Data Types in JavaScript
- JavaScript has two main categories:<br>
- Primitive Data Types (simple, immutable values)<br>
- Non-Primitive (Reference) Data Types (objects, arrays, functions, etc.)<br>

### 1. Primitive Data Types
- Primitive values are stored directly in memory and are immutable (cannot be changed, only replaced).

#### 1. Number → integers, floats, special values (Infinity, NaN)
- Example <br>
let age = 25;          // integer   <br>
let price = 99.99;     // float <br>
let infinity = Infinity;    <br>
let notNumber = NaN;   // Not a Number

<hr>

#### 2. BigInt → for very large integers beyond Number.MAX_SAFE_INTEGER
- Example <br>
let big = 123456789012345678901234567890n; // add "n" at end    <br>
console.log(big + 10n); // works

<hr>

#### 3. String → text enclosed in " ", ' ', or backticks `
- Example <br>
let name = "Rohit"; <br>
let greet = `Hello, ${name}!`; // template literal

<hr>





-------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------

==> Stack Memory

> Used for primitive data types (like numbers, strings, booleans, null, undefined, symbol, bigint).
> Stores function calls and execution context (where JavaScript keeps track of what’s currently running).
> Works in LIFO (Last In, First Out) order → the last thing pushed is the first to be removed.
> Fast but limited in size.

let a = 10;   // number (primitive)
let b = a;    // copy of value

b = 20;

console.log(a); // 10
console.log(b); // 20

> Here:
a is stored in the stack.
When b = a, a new copy of 10 is made in the stack.
Changing b doesn’t affect a.

==>Heap Memory
Used for non-primitive data types (like objects, arrays, functions).
Stores data in a reference-based way.
Variables in the stack only store a reference (address) to the object in the heap.
More flexible and larger than stack but slower.

Example:
let obj1 = { name: "Rohit" };
let obj2 = obj1;   // reference to the same object

obj2.name = "Maurya";

console.log(obj1.name); // "Maurya"
console.log(obj2.name); // "Maurya"

> Here:
obj1 and obj2 are stored in the stack but they both point to the same object in the heap.
Changing obj2 also affects obj1.


-------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------

==> String

<!-- JS Execution Contexxt -->

> GLobal execution context
* This is the default execution context created by the JavaScript engine when a script first loads.
* It's the base context where all global code (code not inside any function) is executed.
There can only be one GEC per JavaScript file.


> Function execution context
* A new FEC is created every time a function is called.
* Each function call gets its own distinct execution context.

> Eval Execution context


==> Each execution context has two main components:
> Memory Component (Variable Environment):
* This component stores variables and function declarations as key-value pairs.
* During the creation phase of an execution context, memory is allocated for these variables (initialized to undefined) and functions (stored in their entirety).

> Code Component (Thread of Execution):
* This component is responsible for executing the JavaScript code line by line.
* JavaScript is single-threaded, meaning it processes one command at a time in a specific order within this component. 

![Alt text](./03_basics/assets/JS.PNG)
![Alt text](./03_basics/assets/js2.PNG)
![Alt text](./03_basics/assets/CallStack.PNG)





----------------------------------------------------------------------------------------------------------------------------------------------

> Async Code
=>jS
    > Synchronoud
    > Sing le threaded
note : Above all Async and single threaded are deafult

> Execution context 
= The execute one line of code at a time
    > console log -1
    > console log -2
    call stack      memory heap

note : Each operation waits for the last one to complete executing

> Blocking code Vs Non Blocking code
=> Blocking code :
* Block the flow of program 
* Read file Sync

=> Non Blocking code :
* Does not block Exection 
* Read file Async

![Alt text](./08_events/Event%20Loop.PNG)




    
     





