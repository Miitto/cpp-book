---
title: Conditions
---

# Conditions

## Introduction

Control flow is a foundational concept in programming. It allows you to execute different blocks of code based on certain conditions. In C++, you can use control structures such as `if`, `else`, `else if`, and `switch` to control the flow of your program. These control structures are used to make decisions and execute code based on those decisions.

## IF Statement

The `if` statement is used to execute a block of code if a condition is true. The syntax for the `if` statement is as follows:

```cpp
if (condition) {
    // Code to be executed if the condition is true
}
```

We can now use add in a check to ensure that any name given is not empty:

```cpp
#include <iostream>
#include <string>

int main() {
    std::string first;
    std::cout << "Enter your first name: ";
    std::cin >> first;

    if (first.empty()) {
        std::cout << "You did not enter a name." << std::endl;
        return 1; // Return an error code, and since this is in main, it will exit the program.
    }

    std::string last;
    std::cout << "Enter your last name: ";
    std::cin >> last;

    if (last.empty()) {
        std::cout << "You did not enter a last name." << std::endl;
        return 1;
    }

    std::string name = first + " " + last;

    return 0;
}
```

This code will now check if the first or last name is empty, and if so, it will print an error message and exit the program.

The condition in the `if` statement can be any expression that evaluates to a boolean value (`true` or `false`). The condition can be a comparison, a logical operation, or a function that returns a boolean value.

We will continue to build on this code as we add loops in the next chapter.

### Else

You can use `else` to execute a block of code if the condition is false. The syntax for the `if-else` statement is as follows:

```cpp
if (condition) {
    // Code to be executed if the condition is true
} else {
    // Code to be executed if the condition is false
}
```

Here is an example of using the `if-else` statement to check if a number is positive or negative:

```cpp
#include <iostream>
using namespace std;

int main() {
    int number = -5;

    if (number > 0) {
        cout << "The number is positive." << endl;
    } else {
        cout << "The number is negative." << endl;
    }

    return 0;
}
```

### Else If

You can use `else if` to check multiple conditions. The syntax for the `if-else if-else` statement is as follows:

```cpp

if (condition1) {
    // Code to be executed if condition1 is true
} else if (condition2) {
    // Code to be executed if condition2 is true
} else {
    // Code to be executed if all conditions are false
}
```

Here is an example of using the `if-else if-else` statement to check if a number is positive, negative, or zero:

```cpp
#include <iostream>
using namespace std;

int main() {
    int number = 0;

    if (number > 0) {
        cout << "The number is positive." << endl;
    } else if (number < 0) {
        cout << "The number is negative." << endl;
    } else {
        cout << "The number is zero." << endl;
    }

    return 0;
}
```

## Switch Statement

The `switch` statement is used to execute a block of code based on the value of an expression. A switch statement is commonly used to collapse `else-if` trees. A switch statement is extremely fast to execute, and should be the preferred option when available. The syntax for the `switch` statement is as follows:

```cpp
switch (expression) {
    case value1:
        // Code to be executed if expression is equal to value1
        break;
    case value2:
        // Code to be executed if expression is equal to value2
        break;
    ...
    default:
        // Code to be executed if expression does not match any case
}
```

Here is an example of using the `switch` statement to check the day of the week:

```cpp
#include <iostream>
using namespace std;

int main() {
    int day = 3;

    switch (day) {
        case 1:
            cout << "Monday" << endl;
            break;
        case 2:
            cout << "Tuesday" << endl;
            break;
        case 3:
            cout << "Wednesday" << endl;
            break;
        case 4:
            cout << "Thursday" << endl;
            break;
        case 5:
            cout << "Friday" << endl;
            break;
        case 6:
            cout << "Saturday" << endl;
            break;
        case 7:
            cout << "Sunday" << endl;
            break;
        default:
            cout << "Invalid day" << endl;
    }

    return 0;
}
```

The expression for a switch statement can be of type `int`, `char`, or `enum`. The case values must be constant expressions, and the `break` statement is used to exit the switch statement.

The `default` case is optional and is executed if none of the case values match the expression. The `default` case is similar to the `else` statement in an `if-else` statement.

### Fall-Through

In C++, the `break` statement is used to exit the switch statement. If the `break` statement is omitted, the code will "fall through" to the next case. This can be useful if you want to execute the same code for multiple cases. Here is an example of using fall-through in a switch statement:

```cpp
#include <iostream>
using namespace std;

enum Day {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
};

int main() {
    Day day = WEDNESDAY;

    cout << "The days left in the week are: ";

    switch (number) {
        case MONDAY:
            cout << "Monday, ";
        case TUESDAY:
            cout << "Tuesday, ";
        case WEDNESDAY:
            cout << "Wednesday, ";
        case THURSDAY:
            cout << "Thursday, ";
        case FRIDAY:
            cout << "Friday, ";
        case SATURDAY:
            cout << "Saturday, ";
        case SUNDAY:
            cout << "Sunday, ";
        default:
            cout << endl;
    }

    return 0;
}
```

The above code will output:

```plaintext
The days left in the week are: Wednesday, Thursday, Friday, Saturday, Sunday,
```
