---
title: Loops
---

# Loops

## Introduction

Loops are used to execute a block of code multiple times. There are three types of loops in C++:

- [`for`](#for-loop)
- [`while`](#while-loop)
- [`do-while`](#do-while-loop)

## For Loop

The `for` loop is usually used to execute a block of code a specified number of times. The syntax for the `for` loop is as follows:

```cpp
for (initialization; condition; update) {
    // Code to be executed
}
```

The initialization is executed once at the beginning of the loop. The condition is checked before each iteration of the loop. If the condition is true, the code inside the loop is executed. After the code inside the loop is executed, the update is executed.

Here is an example of using the `for` loop to print the numbers from 1 to 5:

```cpp
#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 5; i++) {
        cout << i << endl;
    }

    return 0;
}
```

## While Loop

The `while` loop is used to execute a block of code as long as a condition is true. The syntax for the `while` loop is as follows:

```cpp
while (condition) {
    // Code to be executed
}
```

The condition is checked before each iteration of the loop. If the condition is true, the code inside the loop is executed.

Here is an example of using the `while` loop to print the numbers from 1 to 5:

```cpp
#include <iostream>
using namespace std;

int main() {
    int i = 1;

    while (i <= 5) {
        cout << i++ << endl;
    }

    return 0;
}
```

## Do-While Loop

The `do-while` loop is similar to the `while` loop, but the condition is checked after each iteration of the loop. This means that the code inside the loop is executed at least once. The syntax for the `do-while` loop is as follows:

```cpp
do {
    // Code to be executed
} while (condition);
```

Here is an example of using the `do-while` loop to print the numbers from 1 to 5:

```cpp
#include <iostream>
using namespace std;

int main() {
    int i = 1;

    do {
        cout << i++ << endl;
    } while (i <= 5);

    return 0;
}
```