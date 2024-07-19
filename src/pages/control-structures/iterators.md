---
title: Iterators
---

# Iterators

[Reference](https://en.cppreference.com/w/cpp/iterator)

An iterator is not a control structure, but they are used extensively in loops, so it made sense to co-locate them.

## Introduction

An iterator is an object that allows you to traverse the elements of a container. Iterators are defined in the `iterator` header file. There are different types of iterators, each with its own set of capabilities.

An iterators primary purpose is to provide a way to access the elements of a container without exposing the underlying data structure. This allows you to write generic algorithms that work with any container that supports iterators.
An iterator can be progressed using the increment operator (`++`) to move to the next element. You can also dereference an iterator using the dereference operator (`*`) to access the value of the element it points to. This allows you to iterate over a collection without keeping track of the current index.

Here is an example of how to use iterators to iterate over a vector:

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> v = {1, 2, 3, 4, 5};

    for (std::vector<int>::iterator it = v.begin(); it != v.end(); ++it) {
        std::cout << *it << " ";
    }

    std::cout << std::endl;
    return 0;
}
```

The iterator has a type of `std::vector<int>::iterator`, which is a type defined by the vector class. This is a bit verbose, and is commonly replaced with the `auto` keyword:

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> v = {1, 2, 3, 4, 5};

    auto it = v.begin();

    return 0;
}
```

`v.begin()` returns an iterator at the start of the vector, and `v.end()` returns an iterator at the end of the vector. The iterator can be compared to the end iterator to determine if the iterator has reached the end of the collection.

Strings can also be iterated over using iterators:

```cpp
#include <iostream>
#include <string>

int main() {
    std::string s = "Hello, World!";

    for (std::string::iterator it = s.begin(); it != s.end(); ++it) {
        std::cout << *it;
    }

    std::cout << std::endl;
    return 0;
}
```
