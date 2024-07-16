---
title: Control Flow
---

# Control Flow

## IF Statement

The `if` statement is used to execute a block of code if a condition is true. The syntax for the `if` statement is as follows:

```cpp
if (condition) {
    // Code to be executed if the condition is true
}
```

Here is an example of using the `if` statement to check if a number is positive:

```cpp
#include <iostream>
using namespace std;

int main() {
    int number = 10;

    if (number > 0) {
        cout << "The number is positive." << endl;
    }

    return 0;
}
```

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

If you omit the `break` statement, the code will continue to execute until the end of the switch statement or until a `break` statement is encountered. This is called "falling through" and is sometimes used intentionally.

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

## Loops

Since loops are slightly more complex, they have been given their own [page](../loops/).