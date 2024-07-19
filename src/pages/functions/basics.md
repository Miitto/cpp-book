---
title: Functions
---

# Functions

## Introduction

Functions are used to extract a block of code into a separate unit that can be called from other parts of the program. Functions are useful for organizing code, making it easier to read and maintain. Functions can also be reused in multiple places in a program to reduce overhead when modifying logic.

## Creating a Function

A function declaration specifies the return type, name, and parameters of a function. The syntax for a function declaration is as follows:

```cpp
return_type function_name() {
    // Function body
}
```

The `return_type` is the type of the value that the function returns. If the function does not return a value, the return type is `void`. The `function_name` is the name of the function.

When the function returns a value, the `return` statement is used to return the value. The `return` statement can be followed by an expression that evaluates to the return value. If the function does not return a value (`void`), the `return` statement is optional, and the function will return control to the caller when it reaches the end of the function body. The `return` statement can also be used to return early from a function.

We can use functions to extract the logic of inputting the names:

```cpp
#include <iostream>
#include <string>
#include <vector>

std::string inputFirstName() {
    std::string name = "";
    while (name.empty()) {
        std::cout << "Enter your first name: ";
        std::cin >> name;
    }
    return name;
}

std::string inputLastName() {
    std::string name = "";
    while (name.empty()) {
        std::cout << "Enter your last name: ";
        std::cin >> name;
    }
    return name;
}

int main() {
    std::vector<std::string> names
    while (true) {
        std::cout << "Enter 'exit' to quit." << std::endl;
        std::string first = inputFirstName(); // We can call a function like this, by using the function name followed by parentheses. This will execute the code inside the function.
        if (first == "exit") {
            break;
        }

        std::string last = inputLastName();
        if (last == "undo") {
            continue;
        }
        if (last == "exit") {
            break;
        }
    }

    for (const auto& name : names) {
        std::cout << name << std::endl;
    }

    return 0;
}
```

This example may seem a bit contrived, but it demonstrates how functions can be used to extract logic from the main program. This makes the main program easier to read and understand.

## Parameters

Functions can take parameters, which are values passed to the function when it is called. Parameters allow you to pass data to the function to be used in the function body. The parameters are specified in the function declaration inside the parentheses `()`. If the function takes multiple parameters, they are separated by commas.

We can generalize the input functions to take a prompt as a parameter:

```cpp
#include <iostream>
#include <string>
#include <vector>

// here, we are asking for a string to be passed in as a parameter, and we are calling it prompt
std::string inputName(std::string prompt) {
    std::string name = "";
    while (name.empty()) {
        std::cout << prompt; // we are using the prompt parameter here, a parameter is a variable that is passed into a function
        std::cin >> name;
    }
    return name;
}

int main() {
    std::vector<std::string> names
    while (true) {
        std::cout << "Enter 'exit' to quit." << std::endl;
        std::string first = inputName("Enter your first name: "); // Here we are calling the function inputName and passing in the string "Enter your first name: " as a parameter. This will be used as the prompt in the inputName function.
        if (first == "exit") {
            break;
        }

        std::string last = inputName("Enter your last name: ");
        if (last == "undo") {
            continue;
        }
        if (last == "exit") {
            break;
        }
    }

    for (const auto& name : names) {
        std::cout << name << std::endl;
    }

    return 0;
}
```

This usage is more useful, as we have extracted all the logic for inputting a name into a single function. This makes the main program easier to read and understand, and if we need to edit the logic for inputting a name, we only need to edit the `inputName` function.

## Pointers, References, and Values

When passing parameters to a function, you can pass them by value, by reference, or by pointer. Passing by value creates a copy of the value and passing by reference or pointer allows the function to modify the original value.

### Pass by Value

Passing by value creates a copy of the value, so the original value is not modified by the function. This is useful when you want to ensure that the original value is not changed. This is the default behavior in C++, and is what we have been doing so far.

### Pass by Reference

Passing by reference allows the function to modify the original value. This is done by using the `&` symbol in the function declaration. When passing by reference, the function operates on the original value, so any changes made to the value inside the function will affect the original value. As with pointers, passing by reference is more efficient than passing by value for large objects.

To pass by reference, you need to use the `&` symbol in the function declaration `int& x`. This tells the compiler that the function will receive a reference to the original value, rather than a copy of the value.

```cpp
void addOne(int& x) {
    x += 1;
}

int main() {
    int value = 5;
    addOne(value);
    std::cout << value << std::endl; // Output: 6
    return 0;
}
```

You can also use this to return multiple values from a function:

```cpp
/* *Here we are passing in two integers by value, and two integers by reference.
`sum` and `difference` are references to the original variables and are used to return the values of the sum and difference. */
void addAndSubtract(int a, int b, int& sum, int& difference) {
    sum = a + b;
    difference = a - b;
}

int main() {
    int a = 5;
    int b = 3;
    int sum, difference;

    /* Here we are passing in the variables `a` and `b` by value, and `sum` and `difference` by reference.
    Only the values of `sum` and `difference` can be modified by the function, regardless of what the function does. */
    addAndSubtract(a, b, sum, difference);
    std::cout << "Sum: " << sum << std::endl; // Output: Sum: 8
    std::cout << "Difference: " << difference << std::endl; // Output: Difference: 2
    return 0;
}
```

### Pass by Pointer

Passing by pointer is similar to passing by reference, but it requires the use of pointers. They work similar to references, however they also allow for `nullptr` to be passed in, which can be used for optional parameters. As always, be careful when using pointers, as they can lead to undefined behavior if not used correctly.

To pass by pointer, you need to use the `*` symbol in the function declaration `int* x`. This tells the compiler that the function will receive a pointer to the original value, rather than a copy of the value.

```cpp
void addOne(int* x) {
    *x += 1; // We need to dereference the pointer to modify the original value, which is done by using the * symbol
}

int main() {
    int value = 5;
    addOne(&value); // We need to pass in the address of the variable, which is done by using the & symbol
    std::cout << value << std::endl; // Output: 6
    return 0;
}
```

## Function Declaration vs. Function Definition

A function declaration is a statement that tells the compiler about the function's name, return type, and parameters. A function definition is the actual implementation of the function. The function declaration is usually placed in a header file, while the function definition is placed in a source file. We will cover header files and source files in a later lesson.

```cpp
// Function declaration, used in header files
int add(int a, int b);

// Function definition, used in source files
int add(int a, int b) {
    return a + b;
}
```
