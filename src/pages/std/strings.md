---
title: Strings
---

# Strings

[String Reference](https://en.cppreference.com/w/cpp/string/basic_string)
[String Stream Reference](https://en.cppreference.com/w/cpp/header/sstream)

## Introduction

A string is a sequence of characters. In C++, strings are represented by the `std::string` class, which is defined in the `string` header file. Here is an example of how to use `std::string`:

```cpp
#include <iostream>
#include <string>

int main() {
    std::string s = "Hello, world!";
    std::cout << s << std::endl;
    return 0;
}
```

In this example, we are creating a `std::string` object `s` and initializing it with the value `"Hello, world!"`. We then use `std::cout` to print the value of `s` to the console.

You can concatenate strings using the `+` operator:

```cpp
#include <iostream>
#include <string>

int main() {
    std::string s1 = "Hello";
    std::string s2 = "world!";
    std::string s = s1 + ", " + s2;
    std::cout << s << std::endl; // prints "Hello, world!"
    return 0;
}
```

You can also compare strings using the `==` operator:

```cpp
#include <iostream>
#include <string>

int main() {
    std::string s1 = "Hello";
    std::string s2 = "world!";
    if (s1 == s2) {
        std::cout << "The strings are equal" << std::endl;
    } else {
        std::cout << "The strings are not equal" << std::endl;
    }
    return 0;
}
```

You can also compare strings using the `<` and `>` operators, which compare the strings lexicographically:

```cpp
#include <iostream>
#include <string>

int main() {
    std::string s1 = "apple";
    std::string s2 = "banana";
    if (s1 < s2) {
        std::cout << "apple comes before banana" << std::endl;
    } else {
        std::cout << "apple comes after banana" << std::endl;
    }
    return 0;
}
```

## Manipulating Strings

### Indexing

You can access individual characters of a string using the `[]` operator, or the `at` method:

```cpp
#include <iostream>
#include <string>

int main() {
    std::string s = "Hello, world!";
    std::cout << s[0] << std::endl; // prints 'H'
    std::cout << s.at(7) << std::endl; // prints 'w'
    return 0;
}
```

### Find

You can find the position of a substring within a string using the `find` method:

```cpp
#include <iostream>
#include <string>

int main() {
    std::string s = "Hello, world!";
    size_t pos = s.find("world");
    if (pos != std::string::npos) {
        std::cout << "Found at position " << pos << std::endl;
    } else {
        std::cout << "Not found" << std::endl;
    }
    return 0;
}
```

`sd::string::npos` is a constant that represents the position of a substring that is not found in the string. This is usually `-1`.

### Clear

You can remove all elements from a string using the `clear` method:

```cpp
#include <iostream>
#include <string>

int main() {
    std::string s = "Hello, world!";
    s.clear();
    std::cout << s << std::endl; // prints an empty line
    return 0;
}
```

### Append and Pop

You can append a character to a string using the `push_back` method:

```cpp
#include <iostream>
#include <string>

int main() {
    std::string s = "Hello, world!";
    s.push_back('!');
    std::cout << s << std::endl; // prints "Hello, world!!"
    return 0;
}
```

You can append a string to another string using the `append` method:

```cpp
#include <iostream>
#include <string>

int main() {
    std::string s1 = "Hello";
    std::string s2 = "world!";
    s1.append(", ");
    s1.append(s2);
    std::cout << s1 << std::endl; // prints "Hello, world!"
    return 0;
}
```

You can remove the lase character from a string using the `pop_back` method:

```cpp
#include <iostream>
#include <string>

int main() {
    std::string s = "Hello, world!";
    s.pop_back();
    std::cout << s << std::endl; // prints "Hello, world"
    return 0;
}
```

## String Streams

A string stream is a very useful tool for building strings from other data types. It is included in the `sstream` header file. You can use the `std::stringstream` class to create a string stream:

```cpp https://cplusplus.com/reference/sstream/stringstream/stringstream/
// swapping ostringstream objects
#include <string>       // std::string
#include <iostream>     // std::cout
#include <sstream>      // std::stringstream

int main() {

  std::stringstream ss;

  // std::ostringstream behavior
  ss << 100 << ' ' << 200; // "100 200"

  int foo,bar;
  // std::istringstream behavior
  ss >> foo >> bar;

  std::cout << "foo: " << foo << '\n';
  std::cout << "bar: " << bar << '\n';

  return 0;
}
```

In this example, we are creating a `std::stringstream` object `ss` and using it to build a string containing the numbers `100` and `200`. We then extract the numbers from the string using the `>>` operator. The extracted numbers are stored in the variables `foo` and `bar`, which are then printed to the console.

This example uses a `std::stringstream` object, which combines the functionality of both `std::ostringstream` and `std::istringstream`. You can use `<<` to write to the stream and `>>` to read from the stream. The code is commented to show the behavior of each operation.
