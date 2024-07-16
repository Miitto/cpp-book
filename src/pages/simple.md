---
title: First Steps
---

# First Steps

## Simplest Program

A C++ program will run starting with a function called `main`. The simplest complete program is the following:
```cpp
int main() {
    return 0;
}
```

This program will always have a return value of 0. Returning this value from the main function to the main function indicates to the operating system that the program has finished successfully.

> ℹ️
> Many compilers will add the return statement at compile time, if there is no return statement present. However since this is not guaranteed, it is best practice to include the return statement.

To actually do something with our program, we need to add some code. For example, to print "Hello, World!" to the console, we can use the `cout` object from the `iostream` library. The `cout` object is used to output data to the console. Here is an example of a simple program that prints "Hello, World!" to the console:

```cpp
#include <iostream> // Include the iostream library, which contains the cout object
using namespace std; // Use the standard namespace, this lets use use cout by itself, without having to type std::cout every time. This is not a good idea in anything larger than a simple program.

int main() {
    cout << "Hello, World!" << endl; // Output "Hello, World!" to the console, with a newline character at the end. endl is a special object that represents a newline character, while also cleaning up buffers used in the background.
    return 0; // Return 0 to the operating system
}
```