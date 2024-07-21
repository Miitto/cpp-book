---
title: Variables
---

# Variables

## What is a Variable?

A variable is a named storage location in memory that holds a value. Variables are used to store data that can be manipulated and accessed by a program. In C++, variables must be declared before they can be used. The declaration of a variable specifies its type and name, and optionally, an initial value.

## Definition

Variables can be defined by specifying the type of the variable, followed by the variable name.

```cpp
type variableName;
```

For example, to define an integer variable named `x`, you would write:

```cpp
int x;
```

You can also provide an initial value for the variable, this is called **initialization**.

```cpp
type variableName = value;
```

ts
For example, define an integer variable named `x` with the initial value `5`, you would write:

```cpp
int x = 5;
```

## Declaration

By default, any none constant variable that is defined in global scope (covered in [scope](#scope-of-variables) below) will be assessable from any file in the program. However the compiler will not know if you with to use that variable. To tell the compiler that you wish to use a variable that is defined in another file, you must **declare** the variable. This is done by using the `extern` keyword. For example, if you have a variable `x` defined in a file `file1.cpp` and you wish to use it in a file `file2.cpp`, you would declare the variable in `file2.cpp` as follows:

```cpp
extern int x;
```

This tells the compiler that the variable `x` is defined in another file and that it should be linked to that file at compile time. Any modifications to the variable `x` in `file2.cpp` will be reflected in `file1.cpp` as well.

`extern` works slightly differently for constants, this difference is covered in the [constants](#constants) section below.

## Declaration vs Definition vs Initialization

Declaring a variable tells the compiler what name and type a variable has. Defining a variable allocates memory for the variable. Initializing a variable assigns it its first value. It is an error to **define** a variable more than once, but you can **declare** a variable as many times as you like.

> ℹ️
> There are many different conventions to name variables. The most important thing is to be consistent with the naming convention you choose. In C++ the convention is to use `camelCase` for variable names, PascalCase for class names, and `UPPER_CASE` for constants. Some languages, such as Python, use `snake_case` for variables. Below is a table of naming conventions.
>
> | Name       | Example       | Explanation                                        |
> | ---------- | ------------- | -------------------------------------------------- |
> | camelCase  | `myVariable`  | Start lowercase, then capitalize subsequent words. |
> | PascalCase | `MyClass`     | Start uppercase, then capitalize subsequent words. |
> | UPPER_CASE | `MY_CONSTANT` | All uppercase with underscores separating words.   |
> | snake_case | `my_variable` | All lowercase with underscores separating words.   |

## Scope of Variables

The scope of a variable refers to the region of the program where the variable is accessible. A scope is usually defined by a pair of curly braces `{}`. Variables declared inside a pair of curly braces are local to that block and cannot be accessed outside of it. Variables declared outside of any block are global variables and can be accessed from anywhere in the program.

```cpp
int globalVariable = 10; // Global variable

int main() {
    int localVariable = 5; // Local variable

    {
        int nestedVariable = 15; // Nested variable

        // Access localVariable and globalVariable
        cout << localVariable << endl;
        cout << globalVariable << endl;
    }

    // Cannot access nestedVariable here, as since the braces have closed, the variable is out of scope.

    return 0;
}
```

In the example above, a scope is created manually using curly braces `{}`. Scopes are more commonly created by functions, loops, and conditional statements. Declaration is a useful tool to prevent a variable from being lost when a scope ends.
The example below shows a variable being declared outside of a scope, and then defined inside of a scope. This is used commonly in loops to persist counters and the like.

## Constants

A constant is a variable whose value cannot be changed once it has been assigned. In C++, constants are declared using the `const` keyword. By convention, the variable has an uppercase name, separating words with underscores. The syntax for declaring a constant is as follows:

```cpp
const type CONSTANT_NAME = value;
```

For example, to declare a constant integer named `PI` with the value `3.14159`, you would write:

```cpp
const double PI = 3.14159;
```

Constants are useful for defining values that should not be changed throughout the program, such as mathematical constants or configuration settings.

By default constants are only accessible in the file they are defined in. To make a constant accessible in other files, you must use the `extern` keyword. This is done in the same way as declaring a variable, but with the `const` keyword before the type.

```cpp file1.cpp
// Since this is where it is initialized, this is also where it is defined.
extern const double PI = 3.14159;
```

```cpp file2.cpp
// We can now use PI in this file as with other extern variables. Remember the `const` keyword.
extern const double PI;

int main() {
    cout << "The value of PI is: " << PI << endl;
    return 0;
}
```

Splitting code across multiple files is covered in the [splitting code](../../files/splitting/) section.
