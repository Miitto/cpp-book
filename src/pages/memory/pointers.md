---
title: Pointers
---

# Pointers

## Introduction

This chapter contains a lot of technical information about pointers. While they will likely be confusing to start with, and you may not understand why you would use them, you will start to pick them up when we start to work with functions and classes. If you come back to this chapter later, you may find it easier to understand. I would not recommend skipping this chapter, instead come back and read it again later.

## What is a Pointer?

A pointer is a variable that stores the memory address of another variable. This allows you to indirectly access the value of a variable by using the pointer to access the memory location where the variable is stored. Pointers are a powerful feature of C++ that allow you to work with memory directly, and are used extensively in many advanced programming techniques. They are also a common source of bugs, so it is important to understand how they work.

## Declaring a Pointer

To declare a pointer in C++, you use the following syntax: `type* pointerName;`. The `type` is the type of the variable that the pointer will point to, and the `pointerName` is the name of the pointer variable. Here is an example of declaring a pointer to an integer:

```cpp
int* ptr;
```

This declares a pointer `ptr` that can store the memory address of an integer variable.

## Initializing a Pointer

When you declare a pointer, it does not automatically point to a valid memory address. You need to initialize the pointer to point to a valid memory address before you can use it. You can initialize a pointer by assigning it the memory address of a variable using the address-of operator `&`. Here is an example of initializing a pointer to point to an integer variable:

```cpp
int number = 42;
int* ptr = &number;
```

This initializes the pointer `ptr` to point to the memory address of the integer variable `number`.

## Accessing the Value of a Pointer

You can access the value of a pointer by dereferencing it using the dereference operator `*`. This allows you to access the value stored at the memory address that the pointer points to. Here is an example of accessing the value of a pointer:

```cpp
int number = 42;
int* ptr = &number;

// Accessing the value of the pointer
int value = *ptr; // value = 42
```

This accesses the value stored at the memory address that `ptr` points to, which is the value of the integer variable `number`.

> ℹ️
> Dereferencing a pointer that has not been initialized or that points to an invalid memory address can lead to undefined behavior. It is important to ensure that a pointer is properly initialized, and has not been deleted, before dereferencing it.

> ℹ️
> Pointers can be used to access the memory location of any variable, including other pointers. This allows you to create complex data structures and algorithms that manipulate memory directly. (This gets confusing quickly, so be careful!)

> ℹ️
> `*` and `&` have many different meanings depending where they are used. `*` is used to declare a pointer, and to dereference a pointer. `&` is used to get the address of a variable, and to take a reference in a function argument. This can be confusing at first, but with practice you will get used to it.

## Modify the Value of a Pointer

You can modify the value of a pointer by assigning it a new memory address. This allows you to change what the pointer points to. Here is an example of modifying the value of a pointer:

```cpp
int number1 = 42;
int number2 = 24;
int* ptr = &number1;

// Modifying the value of the pointer
ptr = &number2;
```

This changes the memory address that `ptr` points to, so it now points to the integer variable `number2`.

## Pointer Arithmetic

Pointers can be used in arithmetic expressions to move between memory locations. This is known as pointer arithmetic. When you add an integer value to a pointer, the pointer is moved by that many elements of the type that the pointer points to. Here is an example of pointer arithmetic:

```cpp
int numbers[] = {1, 2, 3, 4, 5};
int* ptr = numbers;

// Accessing the first element

int firstElement = *ptr; // firstElement = 1

// Moving to the next element
++ptr; // ++ is the same as `ptr = ptr + 1` or `ptr += 1`. This could also be written as `ptr++`

int secondElement = *ptr; // secondElement = 2
```

This works due to how arrays work. Since an array is a contiguous block of memory, you can move between elements by changing the memory address that the pointer points to (adding or subtracting). This is how indexing an array works in C++. Behind the scenes, an array is just a pointer to the first element of the array. That means that the type of `int numbers[]` is `int*`.

> ℹ️
> Since indexing an array uses pointer arithmetic, you can index into an array by doing:

```cpp
int numbers[] = {1, 2, 3, 4, 5};
int index = 2;

int value = numbers[index];

// This is the same as
int value = *(numbers + index);

// Or even something wacky like
int value = index[numbers];
```

## Null Pointers

A null pointer is a pointer that does not point to a valid memory address. You can assign a null pointer to a pointer variable by using the `nullptr` keyword. This is useful when you want to indicate that a pointer does not currently point to a valid memory address. Here is an example of declaring a null pointer:

```cpp
int* ptr = nullptr;
```

This can be used to check if a pointer is valid before dereferencing it, to avoid undefined behavior. For example:

```cpp
int* ptr = nullptr;

if (ptr != nullptr) {
    int value = *ptr;
}
```

> ⚠️  
> This does not mean that the pointer is valid, this only checks that the pointer has not been _marked_ as invalid. It is still possible that the pointer points to an invalid memory address. A pointer will not be automatically set to `nullptr` when it is deleted, and the memory may have been freed from a different pointer, if there are multiple pointers for the same memory space.
