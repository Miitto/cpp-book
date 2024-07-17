---
title: Vectors
---

# Vectors

[Reference](https://en.cppreference.com/w/cpp/container/vector)

## Introduction

A vector is a sequence of elements, much like an array. However, vectors are dynamic, meaning that their size can change at runtime. Vectors are defined in the `vector` header file. Here is an example of how to use `std::vector`:

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> v = {1, 2, 3, 4, 5};
    for (int i = 0; i < v.size(); i++) {
        std::cout << v[i] << " ";
    }
    std::cout << std::endl;
    return 0;
}
```

In this example, we are creating a `std::vector` object `v` and initializing it with the values `{1, 2, 3, 4, 5}`. We then use a `for` loop to iterate over the elements of the vector and print them to the console. This will output `1 2 3 4 5`.

The `size` method returns the number of elements in the vector. You can also use the `empty` method to check if the vector is empty.

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
