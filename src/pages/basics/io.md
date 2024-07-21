---
title: Input Output
---

# Input Output

## Introduction

Console input and output are the easiest methods to implement. Both console input `cin` and console output `cout` are part of the standard library `iostream`. The `iostream` library is included in the C++ standard library, so you don't need to install any additional libraries to use it.

## Including the iostream header file

To use `cin` and `cout`, you need to include the `iostream` header file. This file contains the declarations for the `cin` and `cout` objects, as well as other input and output objects. Imports are located at the top of the file, and use the `#include` directive. When including a header file, you should use angle brackets `<>` for standard library headers, and double quotes `""` for user-defined headers. GCC has a more in depth explanation of the difference between the two [here](https://gcc.gnu.org/onlinedocs/cpp/Search-Path.html).

```cpp
#include <iostream> // include the iostream header file

int main() {
    //...
```

For brevity, I will not include the `#include <iostream>` directive in the following examples, but you should include it in your own code wherever you use `cin` or `cout`.

## A note on namespaces

Both `cin` and `cout` are part of the `std` namespace, to access members of a namespace you use the `::` operator (`namespace::member`), so you need to use `std::cin` and `std::cout` to access them. You can also use the `using` directive to avoid having to use the namespace prefix (`using namespace namespaceName`, e.g. `using namespace std`), but this is generally discouraged as it can lead to naming conflicts, especially with large namespaces such as `std`. We can however use `using` to import specific members of a namespace (`using namespace::member`, e.g. `using std::cout`), which is generally considered safe. For any member you wish to use this shorthand for, you must use an additional `using` statement. For example, to use `std::cout` and `std::cin` without the `std::` prefix, you would write:

```cpp
using std::cout; // we can now use cout without the std:: prefix
using std::cin; // we can now use cin without the std:: prefix
```

As with the `#include` directive, I will not include the `using` directives in the following examples, but you should include it in your own code wherever you wish to use a namespace member without the namespace prefix.

## Output

The quickest way to check that your program is working is to output a message to the console.

```cpp
int main() {
    cout << "Hello, World!" << endl;
    return 0;
}
```

We are using the `<<` operator to output the string `"Hello, World!"` to the console. The `endl` object is used to insert a newline character and flush the output buffer. The `endl` object could be replaced with the newline character `'\n'`, but it is recommended to use `endl` instead in normal situations, as the only downside is a very minor performance hit.

`cout` is an `ostream` object, which have overridden the `<<` operator to use it as the method to write to the stream. In this case, we are writing a string to the console. Since this operation returns an `ostream` object, we can chain multiple `<<` operations together.

Variables can also be chained together with `<<`:

```cpp
int main() {
    int x = 5;
    int y = 10;
    cout << "The value of x is " << x << " and the value of y is " << y << endl;
    return 0;
}
```

## Input

To read input from the console, you can use the `cin` object. This object is also defined in the `iostream` header file. Here is an example of how to use `cin`:

```cpp
int main() {
    int x;
    cout << "Enter a number: ";
    cin >> x;
    cout << "You entered: " << x << endl;
    return 0;
}
```

In this example, we are using the `>>` operator to read an integer from the console and store it in the variable `x`. The `cin` object is an `istream` object, which has overridden the `>>` operator to use it as the method to read from the stream.

To read a value into a variable, the variable must already be declared, but not necessarily defined. In this case, `x` is declared as an integer, but it is not defined until the user enters a value.

You can chain together multiple reads with `>>`:

```cpp
int main() {
    int x, y;
    cout << "Enter two numbers: ";
    cin >> x >> y;
    cout << "The sum of " << x << " and " << y << " is " << x + y << endl;
    return 0;
}
```

You can also read an unbounded number of values using a loop:

```cpp
int main() {
    int sum = 0;
    int x;
    cout << "Enter numbers to sum (enter 0 to finish): ";
    while (cin >> x && x != 0) {
        sum += x;
    }
    cout << "The sum is: " << sum << endl;
    return 0;
}
```

An entire line can be read using the `getline` function:

```cpp
int main() {
    string line;
    cout << "What is your name? ";
    std::getline(cin, line);
    cout << "Hello " << line << endl; // Note the space after Hello, this is to separate the name from the rest of the output. Chaining << does not add spaces.
    return 0;
}
```

This example uses `string` which we have not covered yet, but it is included here for completeness. `string` is defined in the `string` header file.
