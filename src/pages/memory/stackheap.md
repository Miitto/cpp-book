---
title: Stack and Heap Memory
---

# Stack and Heap Memory

## Stack Memory

The stack is a region of memory that is managed automatically for you. Any data that is not explicitly allocated on the heap is automatically allocated on the stack. This is because the stack is much faster than the heap. However, the stack is much smaller than the heap. Another thing to note is that data on the stack must have a known, fixed size. Data with an unknown size at compile time or a size that might change must be stored on the heap instead. This is why only arrays with a fixed size can be created without using the `new` keyword.

## Heap Memory

The heap is a larger but less efficient region of memory. Unlike the stack, you can allocate a large amount of data on the heap at runtime. You are responsible for allocating memory on the heap and releasing it when you are done with it. If you do not release it, your program will have a memory leak. In C++ you allocate memory on the heap using the `new` keyword and release it using the `delete` keyword. `new` returns a pointer to the location on the heap where the data is stored. You can then store this pointer in a pointer variable. Since the size of a pointer is fixed, you can store the pointer on the stack.

As a rule, for every `new` there should be one `delete`. Using `delete` on memory that has already been freed results in undefined behavior.

> ℹ️
> In C, instead of using the `new` and `delete` keywords, you would use the `malloc` and `free` functions to allocate and release memory on the heap. `malloc` is a function that takes the number of bytes to allocate and returns a pointer to the allocated memory. You then need to cast this pointer to the correct type. `free` is a function that takes a pointer to the memory to release.
>
> ```c
> // (int*) tells the compiler to treat the pointer as a pointer to an integer. This is a C style cast.
> int* numbers = (int*)malloc(5 * sizeof(int)); // allocate memory for 5 integers.
> //...
> free(numbers);
> ```
