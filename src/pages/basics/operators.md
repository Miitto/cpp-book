---
title: Operators
---

# Operators

## What is an Operator?

Simply, an operator is a symbol such as `+` that represents an operation. Operators are used to perform operations on variables and values in C++. There are many different types of operators in C++, including arithmetic operators, comparison operators, logical operators, and more.

## Arithmetic Operators

Arithmetic operators are used to perform mathematical operations on variables and values. The following table lists the arithmetic operators in C++:

| Operator | Description    | Example |
| -------- | -------------- | ------- |
| `+`      | Addition       | `a + b` |
| `-`      | Subtraction    | `a - b` |
| `*`      | Multiplication | `a * b` |
| `/`      | Division       | `a / b` |
| `%`      | Modulus        | `a % b` |

### Prefix and Postfix Increment and Decrement Operators

The increment and decrement operators are used to increase or decrease the value of a variable by one. There are two versions of these operators: prefix and postfix. The prefix version increments or decrements the value of the variable before using it in an expression, while the postfix version increments or decrements the value of the variable after using it in an expression. This is more easily understood with the example below:

```cpp
int a = 5, c = 5;
int b, d;

b = ++a; // a is incremented by 1, then assigned to b. b = 6 and a = 6

d = c++; // a is assigned to c, then incremented by 1. d = 5 and c = 6
```

> ℹ️
> If we were to expand out these operations into more common operations, the code would be the following:
>
> ```cpp
> int a = 5, c = 5;
> int b, d;
>
> // Prefix
> a = a + 1;
> b = a;
>
> // Postfix
> d = c;
> c = c + 1;
> ```

## Comparison Operators

Comparison operators are used to compare two values. The following table lists the comparison operators in C++:

| Operator | Description              | Example  |
| -------- | ------------------------ | -------- |
| `==`     | Equal to                 | `a == b` |
| `!=`     | Not equal to             | `a != b` |
| `>`      | Greater than             | `a > b`  |
| `<`      | Less than                | `a < b`  |
| `>=`     | Greater than or equal to | `a >= b` |
| `<=`     | Less than or equal to    | `a <= b` |

## Logical Operators

Logical operators are used to combine two or more conditions. The following table lists the logical operators in C++:

| Operator | Description | Example    |
| -------- | ----------- | ---------- |
| `&&`     | Logical AND | `a && b`   |
| `\|\|`   | Logical OR  | `a \|\| b` |
| `!`      | Logical NOT | `!a`       |

## Bitwise Operators

Bitwise operators are used to perform bitwise operations on variables and values. The following table lists the bitwise operators in C++:

| Operator | Description | Example  |
| -------- | ----------- | -------- |
| `&`      | Bitwise AND | `a & b`  |
| `\|`     | Bitwise OR  | `a \| b` |
| `^`      | Bitwise XOR | `a ^ b`  |
| `~`      | Bitwise NOT | `~a`     |
| `<<`     | Left shift  | `a << b` |
| `>>`     | Right shift | `a >> b` |

## Assignment Operators

Assignment operators are used to assign values to variables. The following table lists the assignment operators in C++:

| Operator | Description            | Example   |
| -------- | ---------------------- | --------- |
| `=`      | Assign                 | `a = b`   |
| `+=`     | Add and assign         | `a += b`  |
| `-=`     | Subtract and assign    | `a -= b`  |
| `*=`     | Multiply and assign    | `a *= b`  |
| `/=`     | Divide and assign      | `a /= b`  |
| `%=`     | Modulus and assign     | `a %= b`  |
| `&=`     | Bitwise AND and assign | `a &= b`  |
| `\|=`    | Bitwise OR and assign  | `a \|= b` |
| `^=`     | Bitwise XOR and assign | `a ^= b`  |
| `<<=`    | Left shift and assign  | `a <<= b` |
| `>>=`    | Right shift and assign | `a >>= b` |

## Ternary Operator

The ternary operator is a conditional operator that takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false. The syntax of the ternary operator is as follows:

```cpp
condition ? value_if_true : value_if_false
```

For example:

```cpp
int a = 5;

int b = (a > 10) ? 10 : 20; // b = 20
```

## Comma Operator

The comma operator is used to evaluate multiple expressions in a single statement. The comma operator evaluates each expression from left to right and returns the value of the last expression. For example:

```cpp
int a = 5, b = 10, c = 15;

int d = (a++, b++, c++); // d = 15 and the other 3 variables are incremented by 1
```

## Operator Precedence

Operator precedence determines the order in which operators are evaluated in an expression. Operators with higher precedence are evaluated before operators with lower precedence. The following table lists the operator precedence in C++:

| Operator                                                           | Description                                                              |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `()`                                                               | Parentheses                                                              |
| `++`, `--`                                                         | Prefix and postfix increment and decrement                               |
| `!`, `~`, `+`, `-`                                                 | Logical NOT, bitwise NOT, unary plus, unary minus                        |
| `*`, `/`, `%`                                                      | Multiplication, division, modulus                                        |
| `+`, `-`                                                           | Addition, subtraction                                                    |
| `<<`, `>>`                                                         | Left shift, right shift                                                  |
| `<`, `<=`, `>`, `>=`                                               | Less than, less than or equal to, greater than, greater than or equal to |
| `==`, `!=`                                                         | Equal to, not equal to                                                   |
| `&`                                                                | Bitwise AND                                                              |
| `^`                                                                | Bitwise XOR                                                              |
| `\|`                                                               | Bitwise OR                                                               |
| `&&`                                                               | Logical AND                                                              |
| `\|\|`                                                             | Logical OR                                                               |
| `? :`                                                              | Ternary operator                                                         |
| `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `&=`, `\|=`, `^=`, `<<=`, `>>=` | Assignment operators                                                     |
| `,`                                                                | Comma operator                                                           |
