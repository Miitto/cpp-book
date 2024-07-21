---
title: Terminology
---

# Terminology

Before we start, it is important to clarify some basic terminology that is used in programming. Understanding these terms will help you grasp the concepts more easily, and simplify the learning process.

## lvalue and rvalue

### lvalue

An lvalue (ell-value) represents an object that occupies some identifiable location in memory (i.e., has an address). An lvalue may be a variable or a function. For example, `x` is an lvalue in the expression `x = 5;`.
An lvalue can appear on the left-hand side of an assignment operator (`=`). An lvalue can also be used as an rvalue, and thus can also appear on the right-hand side of an assignment operator.

### rvalue

An rvalue (arr-value) is a value that does not have an address and is typically a temporary value that does not persist beyond the expression that uses it. For example, `5` is an rvalue in the expression `x = 5;`.
An rvalue can appear only on the right-hand side of an assignment operator (`=`). Arithmetic expressions, literals, and function calls that return a value are all examples of rvalues. This makes sense, as attempting to do something like `x + 5 = y;` would not make sense.

### Examples

-   `x = 5;` - `x` is an l value, `5` is an rvalue.
-   `int y = x + 5;` - `y` is an lvalue, `x + 5` is an rvalue.
-   `int z = foo();` - `z` is an lvalue, `foo()` is an rvalue.

## Literals

A literal is a fixed value that is directly written in the code. There are five types of literals in C++:

-   Integer literals: `42`, `-10`, `0`
-   Floating-point literals: `3.14`, `-0.5`, `1.0e-5`
-   Character literals: `'a'`, `'b'`, `'1'`
-   String literals: `"Hello"`, `"World"`, `"42"`
-   Boolean literals: `true`, `false`

## Expression

An expression is a combination of values, variables, operators, and functions that are evaluated to produce a result. For example, `x + 5` is an expression that adds the value of `x` to `5`.

## Statement

A statement is a complete instruction that performs some action. In C++, statements are terminated by a semicolon `;`. For example, `x = 5;` is a statement that assigns the value `5` to the variable `x`.
The difference between an expression and a statement is that an expression evaluates to a value, and a statement does something.

## Condition

A condition is an expression that evaluates to a boolean value (`true` or `false`). Conditions are used in control flow statements such as `if`, `else`, `while`, and `for` to determine which block of code to execute.  
Note that both the `true` and `false` literals can be used as conditions.

## Declaration

Can be found [here](../variables/#declaration).

## Definition

Can be found [here](../variables/#definition).

## Initialization

Is giving a variable an initial value. For example, `int x = 5;` initializes the variable `x` with the value `5`. Initialization is a distinct operation from assignment in C++.

Declaration vs Definition vs Initialization is [here](../variables/#declaration-vs-definition-vs-initialisation).
