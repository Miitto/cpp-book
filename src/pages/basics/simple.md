---
title: First Steps
---

# First Steps

A C++ program contains one or more functions, one of which must be called `main`. The `main` function is the entry point of the program, and is where the program starts executing. The `main` function must return an integer value, which is the exit code of the program. A return value of 0 indicates that the program has finished successfully, while a non-zero value indicates an error.

The simplest C++ program is an empty `main` function that returns a number, in this case `0` to indicate success:

```cpp
int main() {
    return 0;
}
```

A function is created from a _return type_, a _name_, a (possibly empty) list of _parameters_ enclosed in `()`, and a _body_. Although the `main` function is special in that it is the entry point of the program, it is still a function like any other. In this case, the return type is `int`, the name is `main`, and there are no parameters `()`. The body of the function a block of statements which are lines of code enclosed in `{}`. In this case, the body only includes a single statement `return 0;` which returns the value `0` to the operating system.

> ℹ️
> Many compilers will add the return statement at compile time, if there is no return statement present. However since this is not guaranteed, it is best practice to include the return statement.

## Comments

Comments are used to explain the code and are ignored by the compiler. They can be single-line or multi-line.

```cpp
// This is a single-line comment

/*
This is a multi-line comment
It can span multiple lines
*/
```

A single line comment starts with `//` and continues until the end of the line. A multi-line comment starts with `/*` and ends with `*/`.

Comments will not affect the program in any way, and as such can be used to add notes, explanations, or to temporarily disable code.

Most code editors will grey out comments to make them easier to distinguish from the actual code, as does the code blocks in our examples. This allows you to quickly see what is code and what is a comment.

```cpp
int main() {
    /* This is a
    multi-line comment */
    return 0; // This is also a comment
}
```

The above code is functionally identical to the first example.

To actually do something with our program, we need to to be able to take input and produce output. The next chapter will cover taking user input and outputting to the console.

## Project

Throughout this book, we will be building a Lottery Management System. This system will allow users to create, manage, and draw lotteries. The system will have the following features:

-   Create a new lottery
-   Create a new participant
-   Add participants to a lottery
-   Remove participants from a lottery
-   List all participants in a lottery

-   Participants can draw numbers
-   A winning draw can be generated
-   The winning draw can be compared to the participants' draws

-   The system will keep track of all lotteries and participants, and their respective draws
-   The system will be able to save and load data from a file

This project will be built incrementally, starting with the basics and adding more features as we go along. The project will be built using the principles of Object-Oriented Programming (OOP) and will be designed to be modular and extensible.
It will start out slowly as we build up the basics of C++ programming, and will gradually become more complex as we add more features and functionality.
