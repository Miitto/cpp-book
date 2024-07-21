---
title: Splitting Code
---

# Splitting Code

## Introduction

When working on projects, you will likely soon get to the point where your codebase is too large for a single file. You will spend lots of time scrolling up and down, trying to find the right place to add or modify code. This is where splitting your code into multiple files comes in handy.

## Why Split Code?

The main advantage of splitting code is that it makes your codebase more manageable. You can group related code together, making it easier to find and understand. This can also help you to avoid naming conflicts, as you can use the same variable names in different files without any issues.

## How to Split Code

The most conventional way to split code is to group by functionality. For example, you could have a file for each feature of your application, or a file for each component in your user interface. This way, you can easily find the code you need by looking in the appropriate file. In this project, we might have a file specifically for I/O functions.

Classes are usually split into their own files, with each class in a separate file. This makes it easier to find and understand the code for each class. For example, you could have a file for the `Person` class, and another file for the `Draw` class.

To more easily share the declarations of code between files, we use **header files**. Header files contain the declarations of functions and classes, but not their definitions. This allows you to include the header file in multiple source files, without causing any conflicts.
