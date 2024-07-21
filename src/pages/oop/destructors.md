---
title: Destructors
---

# Destructors

## Introduction

Much like constructors, destructors are special member functions that are used to initialize and destroy objects. While constructors are used to initialize objects, destructors are used to clean up resources that the object has acquired during its lifetime. This can include closing files, releasing memory, or any other cleanup that is necessary.

## Syntax

The syntax for a destructor is similar to that of a constructor, but with a `~` character in front of the class name. Here is an example of a destructor for the `Person` class, I have stripped the class down to just the destructor for brevity:

```cpp
class Person {
public:
    ~Person() {
        cout << "Destroying " << name << endl;
    }
};
```

This destructor will be called automatically when the object goes out of scope, or when `delete` is called on a dynamically allocated object.

To demonstrate this, we will create a new class called `Draw`. This class will store the lottery numbers that the user has drawn. We will then modify the `Person` class to include a dynamically allocated `Draw` object. When the `Person` object is destroyed, the destructor ensure the `Draw` object will also be destroyed.

We are adding a destructor to the `Draw` class. This destructor will print out a message when the `Draw` object is destroyed. There is no need for a destructor in this case, but we are including one to demonstrate how destructors work.

We are returning a `const int*` from the `getNumbers` method. This is a pointer to a constant integer, which means that the numbers cannot be modified. This is a good practice to prevent accidental modification of the numbers.

```cpp Draw.cpp A:Draw.h Person.cpp Person.h
class Draw {
    int numbers[6]; // Store the lottery numbers

public:
    Draw(); // Constructor
    ~Draw(); // Destructor
    const int* getNumbers();
};
```

The `Draw` class will generate 6 random numbers between 1 and 100. We will use the `std::random_device` class to generate a random seed, and the `std::mt19937` class to generate the random numbers. We will also use the `std::uniform_int_distribution` class to generate numbers between 1 and 100. This looks complicated, but it is the recommended way to generate random numbers in C++.

```cpp A:Draw.cpp Draw.h Person.cpp Person.h
#include "Draw.h"
#include <random>

Draw::Draw() {
    // Generate a random number function
    std::random_device dev;
    std::mt19937 rng(dev());
    std::uniform_int_distribution<std::mt19937::result_type> rand(1,100); // distribution in range [1, 100]

    // Generate 6 random numbers
    for (int i = 0; i < 6; i++) {
        numbers[i] = rand(rng);
    }
}

Draw::~Draw() {
    cout << "Destroying a Draw object" << endl;
}

const int* Draw::getNumbers() {
    return numbers;
}
```

We will now modify the `Person` class to include a `Draw` object. We will also modify the `printInfo` method to print out the lottery numbers that the user has drawn.

```cpp Draw.cpp Draw.h Person.cpp A:Person.h
#pragma once

#include <string>

class Person {
    int age;
    Draw *draw; // Pointer to a Draw object // [!code ++]

public:
    std::string name;

    void printInfo();
    Person(std::string n, int a);
    ~Person(); // Destructor // [!code ++]
    bool setAge(int a);
    int getAge();
};
```

Now for the implementation of the destructor. We will use the `delete` keyword to destroy the `Draw` object. This will call the destructor of the `Draw` object, which will release any resources that it has acquired. We will also make a small change to the `printInfo` method to print out the lottery numbers that the user has drawn.

```cpp Draw.cpp Draw.h A:Person.cpp Person.h
#include "Person.h"

void Person::printInfo() {
    cout << "Name: " << name << endl;
    cout << "Age: " << age << endl;
    cout << "Lottery Numbers: "; // [!code ++]
    for (int i = 0; i < 6; i++) { // [!code ++]
        cout << draw->numbers[i] << " "; // [!code ++]
    } // [!code ++]
    cout << endl; // [!code ++]
}

Person::Person(string n, int a) {
    name = n;
    if (!setAge(a)) {
        throw invalid_argument("Invalid age");
    }
    draw = new Draw(); // Create a new Draw object // [!code ++]
}

Person::~Person() { // [!code ++]
    cout << "Destroying " << name << endl; // [!code ++]
    cout << "Calling delete on a Draw object" << endl; // [!code ++]
    delete draw; // Destroy the Draw object // [!code ++]
    cout << "Called delete on a Draw object" << endl; // [!code ++]
} // [!code ++]

bool Person::setAge(int a) {
    if (a < 18 || a > 120) {
        return false;
    }
    age = a;
    return true;
}

int Person::getAge() {
    return age;
}
```

We will now modify the `main` function to create a `Person` object and print out the lottery numbers that the user has drawn.

```cpp Draw.cpp Person.cpp A:main
#include "Person.h"

int main() {

    // A new scope to demonstrate the destructor
    {
        Person p("Alice", 25);
        p.printInfo();

        cout << "Main: Exiting scope" << endl;
    }
    cout << "Main: Exited scope" << endl;

    Person* p = new Person("Bob", 30);

    cout << "Main: Deleting Bob" << endl;
    delete p;
    cout << "Main: Deleted Bob" << endl;

    return 0;
}
```

You should see that the destructor is called when the `Person` object goes out of scope, or delete is called on one, the destructor for the Person object is called, which in turn calls the destructor for the `Draw` object when the `Person` destructor calls `delete` on the `Draw` object.

When you understand how destructors work, remove the console output from the destructors. It is not necessary to print out messages from the destructors in a real program, but it can be useful for debugging.
