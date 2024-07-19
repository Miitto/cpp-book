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
