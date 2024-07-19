---
title: Vectors
---

# Vectors

[Reference](https://en.cppreference.com/w/cpp/container/vector)

## Introduction

With our current knowledge, we can create arrays to store a fixed number of elements. However, arrays have some limitations. For instance, if we want to store multiple people's names, we would need to know the number of people in advance. If we don't know the number of people, we would need to create an array with a large number of elements to accommodate all possible names, which would be wasteful. We could also create a dynamic array using the `new` operator, but we would need to manage the memory ourselves, and recreate the array if we need to add more elements. This is where vectors come in.

A vector is a sequence of elements, much like an array. However, vectors are dynamic, meaning that their size can change at runtime. Vectors are defined in the `vector` header file.

We will be using a vector over an array in most cases, as vectors are more flexible and provide additional functionality. Vectors are part of the C++ Standard Library and are defined in the `std` namespace.

Now we can use the vector to store multiple people's names without knowing the number of people in advance. We can add or remove names as needed, and the vector will automatically resize itself.

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<std::string> names = {};
    std::cout << "Enter first name: ";
    std::string first;
    std::cin >> first;
    std::cout << "Enter last name: ";
    std::string last;
    std::cin >> last;

    names.push_back(first + " " + last);

    std::cout << "Enter first name: ";
    std::string first;
    std::cin >> first;
    std::cout << "Enter last name: ";
    std::string last;
    std::cin >> last;

    names.push_back(first + " " + last);

    return 0;
}
```

The vector now contains two peoples names. This code is rather messy, and we will clean it up with loops and functions later.

Again, the below examples will likely use things we have not covered yet, but they are here for future reference.

## Checking the Size

You can use the `empty` method to check if the vector is empty.

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> v = {1, 2, 3, 4, 5};
    if (v.empty()) {
        std::cout << "Vector is empty" << std::endl;
    } else {
        std::cout << "Vector has " << v.size() << " elements" << std::endl;
    }
    return 0;
}
```

`size` returns the number of elements in the vector. If the vector is empty, `size` will return 0.

## Creating Vectors

To declare a vector, you need to tell it which type of elements it will store. You can do this by specifying the type in angle brackets (`<>`). Here is an example of creating a vector of integers:

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> v;
    return 0;
}
```

This vector can only store integers, much like an array of integers. You can also define a vector with a list of elements, like this:

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> v = {1, 2, 3, 4, 5};
    return 0;
}
```

## Accessing Elements

You can access elements of a vector using the `[]` operator, just like with arrays. Vectors are also zero-indexed, so the first element is at index 0. Here is an example:

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> v = {1, 2, 3, 4, 5};
    std::cout << v[0] << std::endl; // prints 1
    std::cout << v[2] << std::endl; // prints 3
    return 0;
}
```

You can also use the `at` method to access elements of a vector. The `at` method performs bounds checking and will throw an `std::out_of_range` exception if you try to access an element that is out of bounds. Here is an example:

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> v = {1, 2, 3, 4, 5};
    std::cout << v.at(0) << std::endl; // prints 1
    std::cout << v.at(2) << std::endl; // prints 3

    try {
        std::cout << v.at(10) << std::endl; // throws std::out_of_range exception
    } catch (const std::out_of_range& e) {
        std::cout << "Exception caught: " << e.what() << std::endl;
    }
    return 0;
}
```

## Modifying Elements

You can modify elements of a vector using the `[]` operator or the `at` method. Here is an example:

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> v = {1, 2, 3, 4, 5};
    v[0] = 10;
    v.at(2) = 30;

    for (int i = 0; i < v.size(); i++) {
        std::cout << v[i] << " ";
    }
    std::cout << std::endl;
    return 0;
}
```

This example will output `10 2 30 4 5`.

## Adding Elements

You can add elements to the end of a vector using the `push_back` method. Here is an example:

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> v = {1, 2, 3, 4, 5};
    v.push_back(6);

    for (int i = 0; i < v.size(); i++) {
        std::cout << v[i] << " ";
    }
    std::cout << std::endl;
    return 0;
}
```

This example will output `1 2 3 4 5 6`.

## Removing Elements

You can remove elements from the end of a vector using the `pop_back` method. Here is an example:

```cpp
#include <iostream>
#include <vector>

```
