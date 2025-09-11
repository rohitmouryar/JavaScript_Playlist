# JavaScript_Playlist
A code repo of javascript playlist



******************* CONST, LET & VAR *******************
=> Var
> Old way (before ES6) to declare variables.
> Scope: Function-scoped (available inside the function where it is declared).
> Can be re-declared and updated.
> Supports hoisting (moved to the top of scope but initialized as undefined).

var name = "Rohit";
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