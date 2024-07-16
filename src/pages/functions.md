---
title: Functions
---

# Functions

## Introduction

Functions are used to extract a block of code into a separate unit that can be called from other parts of the program. Functions are useful for organizing code, making it easier to read and maintain. Functions can also be reused in multiple places in a program to reduce overhead when modifying logic.

## Creating a Function

A function declaration specifies the return type, name, and parameters of a function. The syntax for a function declaration is as follows:

```cpp
return_type function_name(parameter_type1 parameter_name1, parameter_type2 parameter_name2, ...) {
    // Function body
}
```

The `return_type` is the type of the value that the function returns. If the function does not return a value, the return type is `void`. The `function_name` is the name of the function. The `parameter_type` and `parameter_name` are the types and names of the parameters that the function accepts. If the function does not accept any parameters, the parameter list is empty `()`.

Here is an example of a function declaration that takes two `int` parameters and returns an `int` value:

```cpp
int add(int a, int b) {
    return a + b;
}
```

When the function returns a value, the `return` statement is used to return the value. The `return` statement can be followed by an expression that evaluates to the return value. If the function does not return a value, the `return` statement is optional, and the function will return control to the caller when it reaches the end of the function body. The `return` statement can also be used to return early from a function.

## Function Declaration vs. Function Definition

A function declaration is a statement that tells the compiler about the function's name, return type, and parameters. A function definition is the actual implementation of the function. The function declaration is usually placed in a header file, while the function definition is placed in a source file. We will cover header files and source files in a later lesson.

## Calling a Function

To call a function, you use the function name followed by parentheses `()` with the arguments passed inside the parentheses. The arguments must match the types and order of the parameters in the function declaration.

Here is an example of calling the `add` function from the previous example:

```cpp
#include <iostream>
using namespace std;

int add(int a, int b) {
    return a + b;
}

int main() {
    int result = add(3, 4);
    cout << "3 + 4 = " << result << endl; // Output: 3 + 4 = 7

    return 0;
}
```

The value that is returned from the function will be the what the function evaluates to when it is called. In this case, `add(3, 4)` will evaluate to `7`, which is then stored in the `result` variable - `result` is now equal to `7`.

## First Order Functions

In C++, functions are first-class citizens, which means they can be passed as arguments to other functions and returned as values from functions. This allows for powerful abstractions and functional programming paradigms.

Here is an example of a function that takes another function as an argument:

```cpp
#include <iostream>
using namespace std;

int add(int a, int b) {
    return a + b;
}

int subtract(int a, int b) {
    return a - b;
}

int calculate(int (*operation)(int, int), int a, int b) {
    return operation(a, b);
}

int main() {
    int result1 = calculate(add, 3, 4);
    cout << "3 + 4 = " << result1 << endl; // Output: 3 + 4 = 7

    int result2 = calculate(subtract, 3, 4);
    cout << "3 - 4 = " << result2 << endl; // Output: 3 - 4 = -1

    return 0;
}
```

This looks complicated, but if you break down `int (*operation)(int, int)`, `(*operation)` is a pointer to a function that takes two `int` parameters (`(*operation)(int, int)`) and returns an `int` (`int (*operation)(int, int)`). `operation` is just the name given to the function pointer.

This may be a bit too complex for now, but it's good to know that functions can be treated as values in C++.

## Function Overloading

Function overloading allows you to define multiple functions with the same name but different parameter lists. The compiler determines which function to call based on the number and types of arguments passed to the function. Function overloading is useful when you want to perform similar operations on different types of data. For instance, in the previous examples we defined an `add` function that takes two `int` parameters. We can overload the `add` function to take `double` parameters as well.

Here is an example of function overloading:

```cpp
#include <iostream>
using namespace std;

int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}

int main() {
    int result1 = add(3, 4); // Passing int arguments will call the matching function add(int, int)
    cout << "3 + 4 = " << result1 << endl; // Output: 3 + 4 = 7

    double result2 = add(3.5, 4.5); // Passing double arguments will call the matching function add(double, double)
    cout << "3.5 + 4.5 = " << result2 << endl; // Output: 3.5 + 4.5 = 8.0

    return 0;
}
```

Note that although there is a version for `int` and `double`, we cannot mix and match types. The compiler will not know which function to call if we pass an `int` and a `double` to the `add` function. Attempting to call `add(3, 4.5)` will be looking for `add(int, double)`. This could be fixed by creating a new function, converting one of the arguments to the other type (likely the `int` to `double` so the decimal is not lost), or using a template function. Template functions will be covered in a later lesson, and may also be referred to as *generics*.