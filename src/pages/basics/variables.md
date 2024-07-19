---
title: Variables
---

# Variables

## What is a Variable?

A variable is a named storage location in memory that holds a value. Variables are used to store data that can be manipulated and accessed by a program. In C++, variables must be declared before they can be used. The declaration of a variable specifies its type and name, and optionally, an initial value.

## Declaring Variables

In C++, variables are declared by specifying the type of the variable followed by the variable name. By convention, the variable name should start lowercase, and then any subsequent words should be capitalized. This is called the **Declaration** of a variable.
The syntax for declaring a variable is as follows:

```cpp
type variableName;
```

For example, to declare an integer variable named `x`, you would write:

```cpp
int x;
```

You can also declare multiple variables of the same type on the same line by separating the variable names with commas. For example:

```cpp
int a, b, c;
```

> ℹ️
> There are many different conventions to name variables. The most important thing is to be consistent with the naming convention you choose. In C++ the convention is to use `camelCase` for variable names, PascalCase for class names, and `UPPER_CASE` for constants. Some languages, such as Python, use `snake_case` for variables. Below is a table of naming conventions.

| Name       | Example       | Explanation                                        |
| ---------- | ------------- | -------------------------------------------------- |
| camelCase  | `myVariable`  | Start lowercase, then capitalize subsequent words. |
| PascalCase | `MyClass`     | Start uppercase, then capitalize subsequent words. |
| UPPER_CASE | `MY_CONSTANT` | All uppercase with underscores separating words.   |
| snake_case | `my_variable` | All lowercase with underscores separating words.   |

## Defining Variables

Variables can be initialized when they are declared by providing an initial value after the variable name. This is called the **Definition** of a variable.
The syntax for initializing a variable is as follows:

```cpp
type variableName = value;
```

For example, to declare and define an integer variable named `x` with the value `5`, you would write:

```cpp
int x = 5;
```

## Declaration vs Definition

In C++, the declaration of a variable is when you specify the type and name of the variable, but do not provide an initial value. The definition is when you give the variable its initial value.

## Scope of Variables

The scope of a variable refers to the region of the program where the variable is accessible. A scope is usually defined by a pair of curly braces `{}`. Variables declared inside a pair of curly braces are local to that block and cannot be accessed outside of it. Variables declared outside of any block are global variables and can be accessed from anywhere in the program.

```cpp
#include <iostream>
using namespace std;

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
