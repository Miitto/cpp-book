---
title: Class Headers
---

# Class Headers

## Introduction

In C++, the most common way to create a class is to split it into two files: a header file and a source file. The header file contains the class declaration and any other declarations that are needed, while the source file contains the class definition. This is a bit different from using functions in header files, as a class also defines a namespace for its members.

## Migrating to a Header File.

In the previous chapter, we created our `Person` class in a single file. We will move that entire class to a header file, and then extract the implementation to a source file.

```cpp Person.cpp A:Person.h
class Person {
    int age;

public:
    string name;

    void printInfo() {
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
    }

    Person(string n, int a) {
        name = n;
        if (!setAge(a)) {
            throw invalid_argument("Invalid age");
        }
    }
    bool setAge(int a) {
        if (a < 18 || a > 120) {
            return false;
        }
        age = a;
        return true;
    }
    int getAge() {
        return age;
    }
};
```

### Include any necessary headers

Since we are using the `string` class as part of the declaration, we need to include the `string` header file. We will be moving the implementation of the constructor and `printInfo` method to a source file, so we do not need to include the `iostream` or `stdexcept` header files.

```cpp Person.cpp A:Person.h
#include <string> // [!code highlight]

class Person {
    int age;

public:
    string name;

    void printInfo() {
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
    }

    Person(string n, int a) {
        name = n;
        if (!setAge(a)) {
            throw invalid_argument("Invalid age");
        }
    }

    bool setAge(int a) {
        if (a < 18 || a > 120) {
            return false;
        }
        age = a;
        return true;
    }

    int getAge() {
        return age;
    }
};
```

### Remove `using` directives

Since we are moving the class to a header, we should remove the `using` directives from the class definition. This is because the `using` directive applies to the entire file, and any files that include this file, or any file that includes a file that includes this file and so on. So that we do not force anyone including our header to also use our namespaces, we should remove the `using` directives. This means that in header files, we should always use the fully qualified names of classes and functions. We do not need to remove the `using` directives from the source file, as it is not included in any other files, and as such the implementations can keep the shorter names.

```cpp Person.cpp A:Person.h
#include <string> // [!code word:std]

class Person {
    int age;

public:
    std::string name;

    void printInfo() {
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
    }

    Person(std::string n, int a) {
        name = n;
        if (!setAge(a)) {
            throw invalid_argument("Invalid age");
        }
    }

    bool setAge(int a) {
        if (a < 18 || a > 120) {
            return false;
        }
        age = a;
        return true;
    }

    int getAge() {
        return age;
    }
};
```

### Add include guards

This example uses `#pragma once` to prevent the header file from being included multiple times. Using the older but more universally supported `#ifndef` and `#define` method is also acceptable.

```cpp Person.cpp A:Person.h
#pragma once // [!code focus]

#include <string>

class Person {
    // ...
```

### Removing the implementation from the header file

Now that we have moved the class declaration to a header file, we can move the implementation to a source file. We will create a new file called `Person.cpp` and move the implementation of the constructor and `printInfo` method to that file.

First we remove the implementation from the header file.

```cpp Person.cpp A:Person.h
#pragma once

#include <string>

class Person {
    int age;

public:
    std::string name;

    void printInfo();
    Person(std::string n, int a);
    bool setAge(int a);
    int getAge();
};
```

We have now moved the class declaration to a header file.

## Creating a Source File

To add back the implementation of the class, we need to create a new file called `Person.cpp`. We will include the header file of our class in the source file, as well as any other header files used in the implementation. We do not need any header files used in the class declaration, such as `string`, as they are included in our class's header file. If you do use a string in the implementation, it is a good idea to include the `string` header file in the source file anyway, incase the header changes in the future.

```cpp A:Person.cpp Person.h
#include <iostream>
#include <stdexcept>

#include "Person.h" // Will indirectly include <string>
```

Since classes are a namespace, we need to qualify the names of the methods with the class name when we define them in the source file. We use this using the `::` operator. The syntax for defining a method outside of the class is `return_type class_name::method_name(parameters)`. The definition for the `printInfo` method is shown below.

```cpp
void Person::printInfo() {
    cout << "Name: " << name << endl;
    cout << "Age: " << age << endl;
}
```

We do not need to wrap the method in the class definition, as we are defining it outside of the class - which is also why we need to qualify the method with the class name. The complete source file is shown below.

```cpp A:Person.cpp Person.h
#include <iostream>
#include <stdexcept>

#include "Person.h"

using std::string;

void Person::printInfo() {
    cout << "Name: " << name << endl;
    cout << "Age: " << age << endl;
}

Person::Person(string n, int a) {
    name = n;
    if (!setAge(a)) {
        throw invalid_argument("Invalid age");
    }
}

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

## Using the Class

Now that we have split our class into a header file and a source file, we can use it in our main program. We include the header file of our class in our main program, and then we can create instances of our class and use them as before.

```cpp A:main.cpp Person.h
#include "Person.h"

int main() {
    Person p("Alice", 25);
    p.printInfo();
}
```
