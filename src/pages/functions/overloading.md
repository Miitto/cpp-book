---
title: Function Overloading
---

# Function Overloading

Function overloading allows you to define multiple functions with the same name but different parameter lists. The compiler determines which function to call based on the number and types of arguments passed to the function. Function overloading is useful when you want to perform similar operations on different types of data. For instance, in the previous examples we defined an `add` function that takes two `int` parameters. We can overload the `add` function to take `double` parameters as well.

Here is an example of function overloading:

```cpp
#include <iostream>
using namespace std;

int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}

int main() {
    int result1 = add(3, 4); // Passing int arguments will call the matching function add(int, int)
    cout << "3 + 4 = " << result1 << endl; // Output: 3 + 4 = 7

    double result2 = add(3.5, 4.5); // Passing double arguments will call the matching function add(double, double)
    cout << "3.5 + 4.5 = " << result2 << endl; // Output: 3.5 + 4.5 = 8.0

    return 0;
}
```

Note that although there is a version for `int` and `double`, we cannot mix and match types. The compiler will not know which function to call if we pass an `int` and a `double` to the `add` function. Attempting to call `add(3, 4.5)` will be looking for `add(int, double)`. This could be fixed by creating a new function, converting one of the arguments to the other type (likely the `int` to `double` so the decimal is not lost), or using a template function. Template functions will be covered in a later lesson, and may also be referred to as _generics_.
