---
title: Arrays
---

# Arrays

## What is an Array?

An array is a collection of elements of the same type, stored in contiguous memory locations. The elements are accessed by their index, which is an integer value that represents the position of the element in the array. The index of the first element is 0, and the index of the last element is the size of the array minus one.

## Declaring an Array

To declare an array in C++, you need to specify the type of the elements and the number of elements in the array. The syntax for declaring an array is as follows: `type arrayName[arraySize]`.

Here is an example of declaring an array of integers with 5 elements:

```cpp
int numbers[5];
```

To create an array with a specific set of values, you can use an initializer list:
The size can be inferred from the number of elements in the initializer list.

```cpp
int numbers[] = {1, 2, 3, 4, 5};
```

If you want to initialize all the elements of the array to their default values (0 for integers), you can use an empty initializer list:
```cpp
int numbers[5] = { }; // All 5 elements will be initialized to 0
```

If you want to initialize only some of the elements,
or if you want to ensure the array is of a specific size, you can specify the size:

```cpp
int numbers[10] = {1, 2, 3, 4, 5}; // The remaining elements will be initialized to 0
```

## Accessing Elements of an Array

You can access the elements of an array using the index of the element.

```cpp
int numbers[5] = {1, 2, 3, 4, 5};

// Accessing the first element
int firstElement = numbers[0]; // firstElement = 1

// Accessing the third element
int thirdElement = numbers[2]; // thirdElement = 3
```

C++ will allow you to access elements outside the bounds of the array, but this can lead to undefined behavior (probably a crash). It is important to ensure that you are accessing valid indices when working with arrays.

## Modifying Elements of an Array

You can modify the elements of an array using the index of the element.

```cpp
int numbers[5] = {1, 2, 3, 4, 5};

// Modifying the first element
numbers[0] = 10; // numbers = {10, 2, 3, 4, 5}
```

## Dynamic Arrays

If the size of the array is not known at compile time (e.g., it is determined at runtime using a variable), you can create a dynamic array using the `new` operator. This will create the array on the heap, and you will need to manage the memory yourself. The standard library provides a safer alternative with `std::vector`.

```cpp
int size = 5;
int* numbers = new int[size];
```

When you are done with the dynamic array, you need to free the memory using the `delete[]` operator. It is important to use the `delete[]` operator on arrays, not the normal `delete` operator used for objects.

```cpp
delete[] numbers;
```

> ℹ️
> In C++ 11 and later, you can initialize a dynamic array with a set of values using an initializer list. This is done by using curly braces `{}` after the `new` operator.

```cpp
int size = 5;
int* numbers = new int[size] {1, 2, 3, 4, 5};
//...
delete[] numbers;
```

## Multidimensional Arrays

C++ supports multidimensional arrays, which are arrays of arrays. You can create a two-dimensional array by specifying the number of rows and columns in the array.

```cpp
int matrix[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};
```

You can access elements of a two-dimensional array using two indices: one for the row and one for the column.

```cpp
int element = matrix[1][2]; // element = 6
```

## Array Size

In C++, you can determine the size of an array using the `sizeof` operator. This operator returns the size of the array in bytes.

```cpp
int numbers[5] = {1, 2, 3, 4, 5};
int size = sizeof(numbers) / sizeof(numbers[0]); // size = 5
```

> ℹ️
> The `sizeof` operator returns the size of the array in bytes, not the number of elements in the array. To get the number of elements, you need to divide the size of the array by the size of the first element. If you know that the array is of a specific type, you can use that type instead of `numbers[0]`. For example, if you know that `numbers` is an array of integers, you can use `sizeof(int)` instead of `sizeof(numbers[0])`.
> ```cpp
> int size = sizeof(numbers) / sizeof(int); // size = 5
> ```