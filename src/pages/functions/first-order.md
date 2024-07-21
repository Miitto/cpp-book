## First Order Functions

In C++, functions are first-class citizens, which means they can be passed as arguments to other functions and returned as values from functions. This allows for powerful abstractions and functional programming paradigms.

Here is an example of a function that takes another function as an argument:

```cpp
int add(int a, int b) {
    return a + b;
}

int subtract(int a, int b) {
    return a - b;
}

int calculate(int (*operation)(int, int), int a, int b) {
    return operation(a, b);
}

int main() {
    int result1 = calculate(add, 3, 4);
    cout << "3 + 4 = " << result1 << endl; // Output: 3 + 4 = 7

    int result2 = calculate(subtract, 3, 4);
    cout << "3 - 4 = " << result2 << endl; // Output: 3 - 4 = -1

    return 0;
}
```

This looks complicated, but if you break down `int (*operation)(int, int)`, `(*operation)` is a pointer to a function that takes two `int` parameters (`(*operation)(int, int)`) and returns an `int` (`int (*operation)(int, int)`). `operation` is just the name given to the function pointer.

This may be a bit too complex for now, but it's good to know that functions can be treated as values in C++.
