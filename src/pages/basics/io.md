---
title: Input Output
---

# Input Output

## Introduction

Console input and output are the easiest methods to implement. Both console input `cin` and console output `cout` are part of the standard library `iostream`. The `iostream` library is included in the C++ standard library, so you don't need to install any additional libraries to use it.

## A note on namespaces

Both `cin` and `cout` are part of the `std` namespace, to access members of a namespace you use the `::` operator (`namespace::member`), so you need to use `std::cin` and `std::cout` to access them. You can also use the `using` directive to avoid having to use the namespace prefix (`using namespace namespaceName`, e.g. `using namespace std`), but this is generally discouraged as it can lead to naming conflicts, especially with large namespaces such as `std`.

## Including the iostream header file

To use `cin` and `cout`, you need to include the `iostream` header file. This file contains the declarations for the `cin` and `cout` objects, as well as other input and output objects. Imports are located at the top of the file, and use the `#include` directive. When including a header file, you should use angle brackets `<>` for standard library headers, and double quotes `""` for user-defined headers. GCC has a more in depth explanation of the difference between the two [here](https://gcc.gnu.org/onlinedocs/cpp/Search-Path.html).

```cpp
#include <iostream> // include the iostream header file

int main() {
    //...
```

## Output

The quickest way to check that your program is working is to output a message to the console.

```cpp
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

We are using the `<<` operator to output the string `"Hello, World!"` to the console. The `std::endl` object is used to insert a newline character and flush the output buffer. The `std::endl` object could be replaced with the newline character `'\n'`, but it is recommended to use `std::endl` instead in normal situations, as the only downside is a very minor performance hit.

`std::cout` is an `ostream` object, which have overridden the `<<` operator to use it as the method to write to the stream. In this case, we are writing a string to the console.

Variables can also be chained together with `<<`:

```cpp
#include <iostream>

int main() {
    int x = 5;
    int y = 10;
    std::cout << "The value of x is " << x << " and the value of y is " << y << std::endl;
    return 0;
}
```

## Input

To read input from the console, you can use the `std::cin` object. This object is also defined in the `iostream` header file. Here is an example of how to use `std::cin`:

```cpp
#include <iostream>

int main() {
    int x;
    std::cout << "Enter a number: ";
    std::cin >> x;
    std::cout << "You entered: " << x << std::endl;
    return 0;
}
```

In this example, we are using the `>>` operator to read an integer from the console and store it in the variable `x`. The `std::cin` object is an `istream` object, which has overridden the `>>` operator to use it as the method to read from the stream.

To read a value into a variable, the variable must already be declared, but not necessarily defined. In this case, `x` is declared as an integer, but it is not defined until the user enters a value.

You can chain together multiple reads with `>>`:

```cpp
#include <iostream>

int main() {
    int x, y;
    std::cout << "Enter two numbers: ";
    std::cin >> x >> y;
    std::cout << "The sum of " << x << " and " << y << " is " << x + y << std::endl;
    return 0;
}
```

You can also read an unbounded number of values using a loop:

```cpp
#include <iostream>

int main() {
    int sum = 0;
    int x;
    std::cout << "Enter numbers to sum (enter 0 to finish): ";
    while (std::cin >> x && x != 0) {
        sum += x;
    }
    std::cout << "The sum is: " << sum << std::endl;
    return 0;
}
```

An entire line can be read using the `std::getline` function:

```cpp
#include <iostream>
#include <string>

int main() {
    std::string line;
    std::cout << "What is your name? ";
    std::getline(std::cin, line);
    std::cout << "Hello " << line << std::endl; // Note the space after Hello, this is to separate the name from the rest of the output. Chaining << does not add spaces.
    return 0;
}
```

This example use `std::string` which we have not covered yet, but it is included here for completeness.
