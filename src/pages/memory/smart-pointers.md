---
title: Smart Pointers
---

# Smart Pointers

[Reference](https://en.cppreference.com/w/cpp/memory)

## Introduction

Smart Pointer are a group of classes that manage the memory of a dynamically allocated object. They are called "smart" because they automatically handle the memory management of the object they point to. This helps to prevent memory leaks and other memory-related bugs that can occur when managing memory manually.

There are three types of smart pointers in C++:

-   `std::unique_ptr`
-   `std::shared_ptr`
-   `std::weak_ptr`

Each type of smart pointer has its own set of rules and use cases. In general, you should prefer using smart pointers over raw pointers whenever possible, as they help to make your code safer and more robust.

## `std::unique_ptr`

`std::unique_ptr` is a smart pointer that owns a dynamically allocated object. It ensures that the object is deleted when the `std::unique_ptr` goes out of scope. A `std::unique_ptr` cannot be copied, but it can be moved. This enforces the "unique" ownership of the object.

Here is an example of how to use `std::unique_ptr`:

```cpp
#include <memory>

int main() {
    std::unique_ptr<int> p(new int(42));

    return 0;
}
```

## `std::shared_ptr`

`std::shared_ptr` is a smart pointer that allows multiple `std::shared_ptr` objects to share ownership of the same dynamically allocated object. The object is deleted when the last `std::shared_ptr` that owns it goes out of scope.
This allows you to create a shared ownership model for objects, where multiple parts of your program can access and modify the object. This is useful when you need to pass objects between different parts of your program, or when you need to create cyclic references between objects. This is the most commonly used smart pointer, as it is most similar to the behavior of garbage-collected languages.

Here is an example of how to use `std::shared_ptr`:

```cpp
#include <memory>

int main() {
    std::shared_ptr<int> p(new int(42));

    return 0;
}
```

## `std::weak_ptr`

`std::weak_ptr` is a smart pointer that holds a non-owning ("weak") reference to an object managed by a `std::shared_ptr`. It allows you to access the object without taking ownership of it, and it does not affect the lifetime of the object. This is useful when you need to break cyclic references between objects, or when you need to access an object that may have been deleted.

Here is an example of how to use `std::weak_ptr`:

```cpp
#include <memory>

int main() {
    std::shared_ptr<int> p(new int(42));
    std::weak_ptr<int> wp = p;

    return 0;
}
```
