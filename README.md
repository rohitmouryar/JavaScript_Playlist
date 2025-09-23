# JavaScript_Playlist
A code repo of javascript playlist



******************* CONST, LET & VAR *******************<br>
=> Var 
- Old way (before ES6) to declare variables.<br>
- Scope: Function-scoped (available inside the function where it is declared).<br>
- Can be re-declared and updated.<br>
- Supports hoisting (moved to the top of scope but initialized as undefined).<br>

var name = "Rohit";<br>
console.log(name); // Rohit

var name = "Maurya"; // re-declaration allowed
console.log(name); // Maurya


----------------------------------------------------------------------------------------------------------------------------------------------

=> let
> Introduced in ES6 (2015).
> Scope: Block-scoped (only available inside { } where it is declared).
> Can be updated but cannot be re-declared in the same scope.
> Hoisted but not initialized (gives error if used before declaration).

let age = 25;
age = 26; // allowed
console.log(age); // 26

// let age = 30; ❌ Error (cannot re-declare in same scope)


----------------------------------------------------------------------------------------------------------------------------------------------

=> Const
> Also introduced in ES6.
> Scope: Block-scoped (like let).
> Must be initialized at declaration.
> Cannot be updated or re-declared.
> Used for constants or values that should not change.

const accountId = 144553;
console.log(accountId);     // error
TypeError: Assignment to constant variable.


| Feature        | var               | let               | const             |
| -------------- | ----------------- | ----------------- | ----------------- |
| Scope          | Function-scoped   | Block-scoped      | Block-scoped      |
| Re-declaration | ✅ Allowed         | ❌ Not allowed     | ❌ Not allowed     |
| Update value   | ✅ Allowed         | ✅ Allowed         | ❌ Not allowed     |
| Hoisting       | ✅ Yes (undefined) | ✅ Yes (but TDZ\*) | ✅ Yes (but TDZ\*) |
| Initialization | Optional          | Optional          | Mandatory         |

**Note => prefer not to use var because of issue in  block scope and fucntional scope.


-------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------

*************************************************** DATA TYPES **********************************************************************

DATA TYPE

Number  => 2 to power 53

BigInt

string => " "

Boolean = > true/false

null => standalone value

undefined =>

Symbol => unique




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




    
     





