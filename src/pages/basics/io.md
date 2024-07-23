---
title: Input Output
---

# Input Output

## Introduction

Console input and output are the easiest user interaction methods to implement. The standard library provides two objects for this purpose: `cin` and `cout`. `cin` is used to read input from the console, and `cout` is used to write output to the console. `cin` is used to take input from the console, and stands for _character input_. `cout` is used to output to the console, and stands for _character output_.

## Including the iostream header file

To use `cin` and `cout`, you need to include the `iostream` header file. Imports are located at the top of the file, and use the `#include` directive. When including a header file, you should use angle brackets `<>` for standard library headers, and double quotes `""` for user-defined headers. GCC has a more in depth explanation of the difference between the two [here](https://gcc.gnu.org/onlinedocs/cpp/Search-Path.html).

```cpp
#include <iostream> // include the iostream header file // [!code focus]

int main() {
    //...
```

For brevity, I will not include the `#include <iostream>` directive in the following examples, but you should include it in your own code wherever you use `cin` or `cout`.

## A note on namespaces

Both `cin` and `cout` are in something called a _namespace_. A namespace is used to separate out parts of code into distinct sections to prevent one section becoming cluttered. Both `cin` and `cout` are part of the standard library namespace which is called `std` (for standard). This means that to access either `cin` or `cout` you need to prefix them with their namespace (`std`), and the namespace access operator `::` (which results in the `std::` prefix). The end result is `std::cin` to access `cin`, or `std::cout` to access `cout`.

### The `using` directive

To avoid having to use the prefix every single time you want to use a member of a namespace, you can use the `using` directive. This directive allows you to use a member of a namespace without the namespace prefix. For example, to use `cin` and `cout` without the `std::` prefix, you can use the following `using` directives:

```cpp
using std::cout; // we can now use cout without the std:: prefix
using std::cin; // we can now use cin without the std:: prefix
```

You can also use the `using` directive to import the entire namespace:

```cpp
using namespace std; // we can now use all members of the std namespace without the std:: prefix, such as `cin` and `cout`
```

This is generally not recommended, as it can lead to naming conflicts if two namespaces have members with the same name.

As with the `#include` directive, I will not include the `using` directives in the following examples, but you should either qualify any use of a standard library member with `std::`, or use a `using` directive at the top of your file. If you encounter an error about `cin` or `cout` not being defined, you have forgotten to include the `iostream` header file, or you have forgotten to qualify the use of `cin` or `cout` with `std::`.

## Streams

A stream is an object that can be read from, or written to. There are three types of streams: normal streams, input streams, and output streams.

### Input Streams

An input stream is a stream that can only be read from. To read from an input stream, you will use the `>>` operator. An input stream will inherit from an `istream` object. This may not make much sense now, but just remember that if anything is described as an `istream`, that means that you can use the `>>` operator to read from it. For instance, `cin` is an `istream` object, so you can read from it like this:

```cpp
int x; // declare a variable to store the input
cin >> x; // read the input from the console and store it in x
```

### Output Streams

An output stream is a stream that can only be written to. To write to an output stream, you will use the `<<` operator. An output stream will inherit from an `ostream` object. As with an `istream`, just remember that if anything is described as an `ostream`, that means that you can use the `<<` operator to write to it. For instance, `cout` is an `ostream` object, so you can write to it like this:

```cpp
cout << "Hello"; // Write "Hello" to the console
```

## Output

The quickest way to check that your program is working is to output a message to the console.

```cpp
int main() {
    cout << "Hello, World!" << endl;
    return 0;
}
```

Since `cout` is an `ostream` we are using `<<` to write text to it. Anything that you write to `cout` will be displayed in the console. When you write to `cout`, the operation returns an `ostream`, so you can chain together multiple writes to `cout`, which is why we can write `<< endl` after the string.

The `<<` operator is overloaded (we will learn what overloading means later) to work with different types of data, so you can write variables of many types to `cout` as well:

```cpp
int main() {
    int x = 5;
    cout << "The value of x is " << x << endl;
    return 0;
}
```

In these examples, we have used `endl` to add a newline to the output. While `\n` is the newline character in C++, `endl` is a special object that adds a newline to the output and flushes the buffer. Flushing the buffer means that any output that is waiting to be written will be written immediately. This is useful if you want to ensure that the output is written to the console immediately, rather than waiting for the buffer to fill up. This is especially important if you are debugging, as it ensures that the output is written to the console immediately.

This may look strange if you are coming from other languages. In other languages, you usually use some form of `print` function to output text to the console. In Python for example, you would use `print("Hello, World!")`. For example, to convert the python code:

```py
name = "Alice"
age = 30
print("Hello " + name + ", you are " + str(age) + " years old.")
```

to C++, you would write:

```cpp
/* This uses a string, which is also part of the standard library. We will cover this later.
For now just add the following to the top of your file:
#include <string>
using std::string;
*/
string name = "Alice";
int age = 30;
cout << "Hello " << name << ", you are " << age << " years old." << endl;
return 0;
```

## Input

We used `cin` as an example earlier of an `istream` object. `cin` is used to read input from the console. To read input from the console, you use the `>>` operator, as you do with any `istream`. The example below is a small program that will first ask the user to enter a number, and then output that number back to the console. The line using `cin` is highlighted.

```cpp
int main() {
    cout << "Enter a number: "; // Output to console, to ask for input

    int x; // Define a variable to store the input
    cin >> x; // Read the input from the console and store it in x // [!code highlight]

    cout << "You entered: " << x << endl; // Output the input back to the console
    return 0;
}
```

In this example, we are using the `>>` operator to read an integer from the console and store it in the variable `x`. The `cin` object is an `istream` object, which has overridden the `>>` operator to use it as the method to read from the stream.

To read a value into a variable, the variable must already be declared, but not necessarily defined. In this case, `x` is declared as an integer, but it is not defined until the user enters a value.

As with `cout`, you can chain together multiple reads from `cin` since it returns an `istream` object. For example, you can read two numbers and output their sum:

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
    // Read numbers until 0 is entered
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
