---
title: Loops
---

# Loops

## Introduction

Loops are used to execute a block of code multiple times. There are three types of loops in C++:

-   [`while`](#while-loop)
-   [`do-while`](#do-while-loop)
-   [`for`](#for-loop)

## While Loop

The `while` loop is used to execute a block of code as long as a condition is true. The syntax for the `while` loop is as follows:

```cpp
while (condition) {
    // Code to be executed
}
```

The condition is checked before each iteration of the loop. If the condition is true, the code inside the loop is executed.

We can now repeatedly ask the user for input until they enter what we want:

```cpp
#include <iostream>
#include <string>

int main() {
    std::string first = "";
    while (first.empty()) {
        std::cout << "Enter your first name: ";
        std::cin >> first;
    }

    std::string last = "";
    while (last.empty()) {
        std::cout << "Enter your last name: ";
        std::cin >> last;
    }

    std::string name = first + " " + last;

    return 0;
}
```

This code will repeatedly ask the user for their first and last name until they enter a non-empty string for each.

We can nest loops inside each other, which will allow us to ask for multiple names:

```cpp
#include <iostream>
#include <string>
#include <vector>

int main() {
    std::vector<std::string> names = {};
    while (true) {
        std::string first = "";
        while (first.empty()) {
            std::cout << "Enter your first name: ";
            std::cin >> first;
        }

        std::string last = "";
        while (last.empty()) {
            std::cout << "Enter your last name: ";
            std::cin >> last;
        }

        names.push_back(first + " " + last);
    }

    return 0;
}
```

The `return` in this example is not necessary, as the program will not reach it. The program will continue to ask for names until it is stopped. This is an infinite loop, and it is not recommended to use infinite loops in practice. We will cover how to stop the loop in the next section.

## Breaking Out of a Loop

The previous example will repeatedly ask the user for their first and last name and store them in a vector. The loop will continue until the user stops the program, which can be done by pressing `Ctrl+C` in the terminal. If we want to stop the program by entering a specific value, we can modify the loop condition to check for that value. This can be done easily using the `break` statement, which will exit the current loop immediately.

The `break` statement can be used in any loop to exit the loop early, and is usually used within an `if` statement to exit the loop conditionally. `break` will only exit the innermost loop, so if you have nested loops, it will only exit the loop it is in. `break` works in any loop.

```cpp
#include <iostream>
#include <string>
#include <vector>

int main() {
    std::vector<std::string> names = {};
    while (true) {
        std::cout << "Enter 'exit' for either name to stop the program." << std::endl; // It is a good idea to provide instructions to the user, as they cannot see the code
        std::string first = "";
        while (first.empty()) {
            std::cout << "Enter your first name: ";
            std::cin >> first;
        }

        if (first == "exit") {
            break;
        }

        std::string last = "";
        while (last.empty()) {
            std::cout << "Enter your last name: ";
            std::cin >> last;
        }

        if (last == "exit") {
            break;
        }

        names.push_back(first + " " + last);
    }

    return 0;
}
```

## Continue

The `continue` statement can be used to skip the rest of the code in the current iteration of the loop and continue to the next iteration. This can be useful if you want to skip some code based on a condition, but continue the loop.

```cpp
#include <iostream>
#include <string>
#include <vector>

int main() {
    std::vector<std::string> names = {};
    while (true) {
        std::cout << "Enter 'exit' for either name to stop the program." << std::endl; // It is a good idea to provide instructions to the user, as they cannot see the code
        std::string first = "";
        while (first.empty()) {
            std::cout << "Enter your first name: ";
            std::cin >> first;
        }

        if (first == "exit") {
            break;
        }

        std::string last = "";
        while (last.empty()) {
            std::cout << "Enter your last name (Enter undo to reenter the first name): ";
            std::cin >> last;
        }

        if (last == "undo") {
            continue; // Skip the rest of the loop and start over. This will not run any code after this point in the loop.
        }

        if (last == "exit") {
            break;
        }

        names.push_back(first + " " + last);
    }

    return 0;
}
```

## Do-While Loop

The `do-while` loop is similar to the `while` loop, but the condition is checked after each iteration of the loop. This means that the code inside the loop is executed at least once. The syntax for the `do-while` loop is as follows:

```cpp
do {
    // Code to be executed
} while (condition);
```

We could to the same thing as the first example with a `do-while` loop:

```cpp
int main() {
    std::string first = "";
    do {
        std::cout << "Enter your first name: ";
        std::cin >> first;
    } while (first.empty());

    std::string last = "";
    do {
        std::cout << "Enter your last name: ";
        std::cin >> last;
    } while (last.empty());

    std::string name = first + " " + last;

    return 0;
}
```

## For Loop

The `for` loop is usually used to execute a block of code a specified number of times. The syntax for the `for` loop is as follows:

```cpp
for (initialization; condition; update) {
    // Code to be executed
}
```

The initialization is executed once at the beginning of the loop. The condition is checked before each iteration of the loop. If the condition is true, the code inside the loop is executed. After the code inside the loop is executed, the update is executed.

We can use the `for` loop to output all the names we collected in the previous examples:

```cpp
#include <iostream>
#include <string>
#include <vector>

int main() {
    std::vector<std::string> names = {};
    while (true) {
        std::cout << "Enter 'exit' for either name to stop the program." << std::endl; // It is a good idea to provide instructions to the user, as they cannot see the code
        std::string first = "";
        while (first.empty()) {
            std::cout << "Enter your first name: ";
            std::cin >> first;
        }

        if (first == "exit") {
            break;
        }

        std::string last = "";
        while (last.empty()) {
            std::cout << "Enter your last name (Enter undo to reenter the first name): ";
            std::cin >> last;
        }

        if (last == "undo") {
            continue; // Skip the rest of the loop and start over. This will not run any code after this point in the loop.
        }

        if (last == "exit") {
            break;
        }

        names.push_back(first + " " + last);
    }

    for (int i = 0; i < names.size(); i++) {
        std::cout << names[i] << std::endl;
    }

    return 0;
}
```

We can also use a range-based `for` loop to iterate over the elements in the vector, which is more concise, but only added in C++11:

```cpp
for (const std::string& name : names) {
    std::cout << name << std::endl;
}
```

You can also use iterators to loop over the vector, as covered in the next chapter.
