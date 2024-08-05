---
title: Function Basics
---

# Function Basics

## Creating a Function

A function declaration specifies the return type, name, and parameters of a function. The syntax for a function declaration is as follows:

```cpp
return_type function_name() {
    // Function body
}
```

The `return_type` is the type of the value that the function returns. The `return_type` can be any valid C++ type, including `int`, `double`, `char`, `bool`, and user-defined types. `void` is also a valid return type, and is used to show that the function does not return a value. If the function does not return `void`, the function **must** return a value of the specified type.

The `function_name` is the name we give to the function, much like how we give names to variables. The function name can be any valid C++ identifier, and should be descriptive of the function's purpose to make it obvious what the function does. This name can then be used to call the function in other parts of the program.

The `()` is used to enclose the parameters of the function. Parameters are values that are passed to the function when it is called. Parameters are optional, and a function can have zero or more parameters. If a function has parameters, they are separated by commas. Even if a function has no parameters, the parentheses are still required to indicate that it is a function and not a variable. A function with no parameters will have empty parentheses `()`.

The function body is enclosed in `{}` and contains the code that the function executes. The function body can contain any valid C++ code, including variable declarations, loops, conditionals, and other function calls. This is the code that runs when the function is called.

To create a function that prints "Hello, World!" to the console, we can write the following code:

```cpp
void printHello() {
    cout << "Hello, World!" << endl;
}
```

This function has a return type of `void`, which means it does not return a value (and thus, we do not need a `return`). The function name is `printHello`, and it has no parameters. The function body contains a single statement that prints "Hello, World!" to the console.

For a function that takes two integers as parameters and returns their sum, we can write the following code:

```cpp
int add(int a, int b) {
    return a + b;
}
```

This function has a return type of `int`, which means it returns an integer value (and thus we must use `return` to return an integer value). The function name is `add`, and it has two parameters `a` and `b`, both of type `int`. The function body contains a single statement that returns the sum of `a` and `b`. The `return` statement is used to return the value of `a + b` to the caller.

## Calling a Function

To call a function, you use the function name followed by parentheses `()`. If the function has parameters, you pass the values to the function inside the parentheses. The parentheses are used to **call** the function, and are required even if the function has no parameters. If you do not use parentheses, then you are referring to the function itself, not calling it.

To call the `printHello` function, you would write:

```cpp
printHello();
```

This will execute the code inside the `printHello` function, which prints "Hello, World!" to the console. In this case, the function has no parameters, so the parentheses are empty.

To call the `add` function, you would write:

```cpp
add(5, 3);
```

This will execute the code inside the `add` function, which returns the sum of `5` and `3`. In this case, the function has two parameters `a` and `b`, so you pass the values `5` and `3` to the function inside the parentheses. Within the function, `a` will be `5` and `b` will be `3`. The `return` statement will return the sum of `5` and `3` to the caller.

Currently, we are not storing the return value of the `add` function, so the result is not being used. This still executes the code inside of the function, but the result is being discarded. To store the result of the function, you can assign it to a variable:

```cpp
int result = add(5, 3);
```

This will store the result of the `add` function in the variable `result`, which can then be used later in the program. In this case, `result` will have the value of `8`.

## Extracting User Input

Now that we have covered the basics of functions, we can use them to extract the user input from our program. We can create a function that prompts the user for input and returns the value entered by the user.

```cpp
// here, we are asking for a string to be passed in as a parameter, and we are calling it prompt
std::string inputName(std::string prompt) {
    std::string name = "";
    while (name.empty()) {
        std::cout << prompt; // we are using the prompt parameter here, a parameter is a variable that is passed into a function
        std::cin >> name;
    }
    return name;
}
```

In this function, we are asking for a `string` to be passed in as a parameter, and we are calling it `prompt`. We are using this `prompt` to display a message to the user. We are then asking the user to enter a value, and storing it in the variable `name`. We are using a `while` loop to keep asking for input until the user enters a non-empty value. Finally, we return the value entered by the user.

We can now use this function to ask for the users first and last name:

```cpp
int main() {
    std::vector<std::string> names;
    while (true) {
        std::cout << "Enter 'exit' to quit." << std::endl;
        std::string first = inputName("Enter your first name: "); // Here we are calling the function inputName and passing in the string "Enter your first name: " as a parameter. This will be used as the prompt in the inputName function.
        if (first == "exit") {
            break;
        }

        std::string last = inputName("Enter your last name: ");
        if (last == "undo") {
            continue;
        }
        if (last == "exit") {
            break;
        }
    }

    for (const auto& name : names) {
        std::cout << name << std::endl;
    }

    return 0;
}
```

## Pointers, References, and Values

When passing parameters to a function, you can pass them by value, by reference, or by pointer. So far we have been passing parameters by value, which creates a copy of the value. Passing by value is usually fine for small objects or primitive types (such as `int`s), but for larger objects, passing by reference or pointer is more efficient as it avoids copying the object. Passing by reference or pointer also allows the function to modify the original value, which can be useful if your function needs to directly modify the value.

### Pass by Value

Passing by value creates a copy of the value, so the original value is not modified by the function. This is useful when you want to ensure that the original value is not changed but still want to use the value in the function. Passing by value is the default way of passing parameters in C++, although it is less efficient than passing by reference or pointer for large objects.

### Pass by Reference

Passing by reference makes an alias to the passed variable. This means that any operation performed on this reference is as if you were performing that operation on the passed variable. A reference can be created by appending an `&` symbol to the type of the parameter, such as to make an `int` reference you would use `int&`. This is useful when you want to modify the original value of the variable in the function, or you do not want to copy the value.

The below example creates a function that takes an `int` reference and increments the value by one:

```cpp
void addOne(int& x) {
    x += 1;
}

int main() {
    int value = 5;
    addOne(value);
    std::cout << value << std::endl; // Output: 6
    return 0;
}
```

In this example, we are passing the variable `value` by reference to the `addOne` function. This means that the function can modify the original value of `value`, rather than a copy of the value. This is why the value of `value` is `6` after calling the function.

Since we can modify the original value of the variable, we can also bypass only being able to return one value from a function. We can return multiple values from a function by passing in references to the variables we want to modify. In this example, we are passing in two integers by value, and two integers by reference. `sum` and `difference` are references to the original variables and are modified to return the values of the sum and difference.

```cpp
/* *Here we are passing in two integers by value, and two integers by reference.
`sum` and `difference` are references to the original variables and are used to return the values of the sum and difference. */
void addAndSubtract(int a, int b, int& sum, int& difference) {
    sum = a + b;
    difference = a - b;
}

int main() {
    int a = 5;
    int b = 3;
    int sum, difference;

    /* Here we are passing in the variables `a` and `b` by value, and `sum` and `difference` by reference */
    addAndSubtract(a, b, sum, difference);
    std::cout << "Sum: " << sum << std::endl; // Output: Sum: 8
    std::cout << "Difference: " << difference << std::endl; // Output: Difference: 2
    return 0;
}
```

#### Const References

If you do not want the function to be able to modify the original value, you can use a `const` reference. A `const` reference is a reference that cannot be modified, which means that the function cannot modify the original value. This is useful when you want to pass a large object by reference but do not want the function to modify the object. This also allows you to pass in temporary values, such as literals or expressions, or constant variables to the function, as they can be bound to a `const` reference but not a normal reference.

```cpp
void printValue(const int& x) {
    std::cout << x << std::endl;

    // This will cause a compiler error, as we are trying to modify a const reference
    x += 1; // [!code error]
}
```

If you try to modify a `const` reference, the compiler will give you an error. This is because the `const` keyword tells the compiler that the value should not be modified, and the compiler will enforce this by giving an error if you try to modify the value.

A const reference should be preferred over a normal reference if you do not need to modify the value, as it is safer.

### Pass by Pointer

Passing by pointer is similar to passing by reference, but it requires the use of pointers. They work similar to references, however they also allow for `nullptr` to be passed in, which can be used for optional parameters. As always, be careful when using pointers, as they can lead to undefined behavior if not used correctly.

To pass by pointer, you need to use the `*` symbol after the parameter type `int* x`. This tells the compiler that the function will receive a pointer to a value of that type, rather than a copy of the value. Since a pointer is not an alias like a reference is, you receive a copy of the pointer. This is fine as pointers are small, but means that if you change the pointer to point to a different value, the original pointer will not be changed outside of the function.

The below example creates a function that takes an `int` pointer and increments the value by one:

```cpp
void addOne(int* x) {
    *x += 1; // We need to dereference the pointer to modify the original value, which is done by using the * symbol before the pointer
}

int main() {
    int value = 5;
    addOne(&value); // We need to pass in the address of the variable, which is done by using the & symbol. This is because the function is expecting a pointer, not a value
    std::cout << value << std::endl; // Output: 6
    return 0;
}
```

References and pointers are similar, but there are some key differences between the two:

-   References are safer than pointers, as they cannot be `nullptr` and cannot be reassigned to point to a different value. This means that you do not need to check if a reference is `nullptr` before using it, and you do not need to worry about the reference pointing to a different value.
-   Pointers are more flexible than references, as they can be `nullptr` and can be reassigned to point to a different value. This means that you can use pointers for optional parameters, or to point to different values throughout the function.
-   You need to dereference the pointer to modify the original value, which is done by using the `*` symbol before the pointer. This is not needed for references, as they are automatically dereferenced.

In general, you should prefer references over pointers if you do not need the extra flexibility that pointers provide. This is because references are safer and easier to use than pointers, and are less likely to lead to undefined behavior.

While the examples for references and pointers are simple and could easily be done by simply returning the value, they are a good starting point for more complex functions that do more work with the value. For example, if you are working on an array, it usually makes more sense to modify the array in place rather than returning a new array.

## Default Parameters

Default parameters are values that are used if no value is passed to the function. Default parameters are specified in the function declaration, and are used if no value is passed to the function for that parameter. Default parameters are useful when you want to provide a default value for a parameter, but still allow the user to override that value if they want.

To specify a default parameter, you use the `=` symbol after the parameter type, followed by the default value. The default value must be a compile-time constant, such as a literal, a constant variable, or an expression that can be evaluated at compile time. You can specify default parameters for any or all of the parameters in a function, and you can mix default and non-default parameters in the same function - however once you have one parameter with a default parameter, all following parameters must also have default parameters. This means that all parameters without a default parameter must come before any parameters with a default parameter.

The below example creates a function that takes two integers as parameters, and returns their sum. If no value is passed for the second parameter, it defaults to `0`.

```cpp
// Here we are specifying a default parameter of 0 for the second parameter. If we do not pass a value for the second parameter, it will default to 0
int add(int a, int b = 0) {
    return a + b;
}

int main() {
    std::cout << add(5, 3) << std::endl; // Output: 8
    std::cout << add(5) << std::endl; // Output: 5
    return 0;
}
```

The first example shows usage of the function with both parameters, and the second example shows usage of the function with only the first parameter. In the second example, the default value of `0` is used for the second parameter, as no value is passed for the second parameter. This allows the function to be called with only the first parameter, and still return a valid result.

## Function Declaration vs. Function Definition

A function declaration is a statement that tells the compiler about the function's name, return type, and parameters. A function definition is the actual implementation of the function. The function declaration is usually placed in a header file, while the function definition is placed in a source file. We will cover header files and source files in a later lesson. Default parameters should be declared in the function declaration, not the definition, if they are declared and defined in separate files.

```cpp
// Function declaration, used in header files
int add(int a, int b = 0);

// Function definition, used in source files
int add(int a, int b) {
    return a + b;
}
```

## Exercise

These exercises are for you to create the functions only, not the accompanying `main` function. A `main` function will be provided for you to test your functions.

1. Create a function that takes two integers as parameters and returns their product (multiplication). This is similar to the `add` function, but instead of adding the two numbers, you should multiply them. Try and create this function without looking at the `add` function for reference, as it will help you learn, rather than just copying the code. Call this function `multiply`.

2. Create a function that takes an integer parameter, and will loop until the user enters a number greater than the parameter. The function should return the number entered by the user. The function should contain the loop and take user input within it, and should only return the value when the user enters a number greater than the parameter. Call this function `getNumber`.

3. Create a function that takes two integer inputs, and modifies the first input to be the sum of the two inputs. The function should return the original value of the first input, and the second input should remain unchanged outside of the function Call this function `addAndModify`.

    - Tip 1: You will need to use pointers or references to modify the first input
    - Tip 2: You will need to use that assignment will copy the value, so you can use a variable local to the function to store the original value

4. As with the previous exercise, but take an additional boolean parameter on if the function should modify the second input instead of the first. The function should return the original value of the input that was modified, and the other input should remain unchanged outside of the function. The additional parameter should have a default value of `false`. Call this function `addAndModifySelected`.

Provided test code:

```cpp
#include <cassert>

// If you used pointers instead of references for addAndModify, uncomment the next line
// #define USE_POINTERtS_FOR_ADD_AND_MODIFY

// If you used pointers instead of references for addAndModifySelected, uncomment the next line
// #define USE_POINTERtS_FOR_ADD_AND_MODIFY_SELECTED

// Put your functions here



int main() {
    // Test multiply
    assert(multiply(5, 3) == 15 && "5 * 3 should be 15");
    assert(multiply(0, 3) == 0 && "0 * 3 should be 0");
    assert(multiply(5, 0) == 0 && "5 * 0 should be 0");
    assert(multiply(0, 0) == 0 && "0 * 0 should be 0");

    // Test getNumber
    // Uncomment the below line to test the getNumber function. If working correctly this will cause the program to wait for user input, so you will need to enter a number greater than 5 to continue the program.
    // assert(getNumber(5) > 5);

    // Test addAndModify
    int a = 5;
    int b = 3;
    int originalA = a;
    int originalB = b;



    #ifdef USE_POINTERS_FOR_ADD_AND_MODIFY
        assert(addAndModify(&a, b) == originalA && "The original value of `a` should be returned");
    #else
        assert(addAndModify(a, b) == originalA && "The original value of `a` should be returned");
    #endif

    assert(a == originalA + originalB && "The value of `a` should be the sum of the original values of `a` and `b`");
    assert(b == originalB && "The value of `b` should not be modified");


    // Test addAndModifySelected
    a = 5;
    b = 3;
    originalA = a;
    originalB = b;

    // If you used pointers instead of references for addAndModifySelected, set this variable to true.
    bool usePointers = false;

    #ifdef USE_POINTERS_FOR_ADD_AND_MODIFY_SELECTED
        assert(addAndModifySelected(&a, b, true) == originalB && "The original value of `b` should be returned");
    #else
        assert(addAndModifySelected(a, b, true) == originalB && "The original value of `b` should be returned");
    #endif

    assert(a == originalA && "The value of `a` should not be modified");
    assert(b == originalA + originalB && "The value of `b` should be the sum of the original values of `a` and `b");

    a = 5;
    b = 3;
    originalA = a;
    originalB = b;

    #ifdef USE_POINTERS_FOR_ADD_AND_MODIFY_SELECTED
        assert(addAndModifySelected(&a, b, false) == originalA && "The original value of `a` should be returned");
    #else
        assert(addAndModifySelected(a, b, false) == originalA && "The original value of `a` should be returned");
    #endif

    assert(a == originalA + originalB && "The value of `a` should be the sum of the original values of `a` and `b");
    assert(b == originalB && "The value of `b` should not be modified");

    a = 5;
    b = 3;
    originalA = a;
    originalB = b;

    #ifdef USE_POINTERS_FOR_ADD_AND_MODIFY_SELECTED
        assert(addAndModifySelected(&a, b) == originalA && "The original value of `a` should be returned");
    #else
        assert(addAndModifySelected(a, b) == originalA && "The original value of `a` should be returned");
    #endif

    assert(a == originalA + originalB && "The value of `a` should be the sum of the original values of `a` and `b");
    assert(b == originalB && "The value of `b` should not be modified");

    return 0;
}
```
