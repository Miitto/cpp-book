---
title: Classes
---

# Classes

Classes are a fundamental concept in object-oriented programming (OOP). A class is a blueprint for creating objects (instances) that share common attributes and behaviors. Classes define the structure and behavior of objects, and objects are instances of classes that can interact with each other.

## Class vs Object

It is important that the difference between a class and an object is understood. A class can be thought of as a blueprint or template for creating objects. An object is an instance of a class. For instance, a class would be the schematic for a house, while an object would be a specific house built from that schematic. Each house will have the same basic structure, however they could have different colors.

## Object-Oriented Programming (OOP)

Object-oriented programming (OOP) is a programming paradigm that uses objects and classes to design and build applications. OOP focuses on the concept of objects, and how they interact with each other to create complex systems.
Objects have attributes (data) and methods (functions) that define their behavior. Classes are used to define the structure and behavior of objects. Inheritance, encapsulation, and polymorphism are key concepts in OOP, and will be covered in more detail in later lessons.

## Access Modifiers

Access modifiers are keywords that define the visibility of class members (attributes and methods). There are three access modifiers in C++:

-   `public`: Members are accessible from outside the class.
-   `protected`: Members are accessible from derived classes. (We will cover inheritance in a later lesson)
-   `private`: Members are only accessible from within the class.

## Defining a Class

In C++, a class is defined using the `class` keyword followed by the class name. The class definition is enclosed in curly braces `{}`. Here is an example of a simple class definition:

```cpp
class Person {
private:
    std::string name;

public:
    int age;
};
```

In this example, the `Person` class has two members: a private `name` attribute and a public `age` attribute. The `name` attribute is private, meaning it can only be accessed from within the `Person` class. The `age` attribute is public, meaning it can be accessed from outside the class. This will be more clear when we create objects of the `Person` class.

## `this` Keyword

While working with classes, you may encounter situations where the names of the class attributes and the parameters of a method are the same. In such cases, you can use the `this` keyword to refer to the class attributes. The `this` keyword is a pointer that points to the current object. Here is an example of using the `this` keyword:

```cpp
class Person {
private:
    std::string name;

public:
    // Constructor
    Person(std::string name) {
        // Use the `this` keyword to refer to the class attribute
        this.name = name;
    }
};
```

## Creating Objects

To create an object of a class, you need a constructor. A constructor is a special member function that is called when an object is created. Constructors are used to initialize the object's attributes. If you do not define a constructor, C++ will provide a default constructor that initializes the object's attributes to default values.

> ℹ️
> Remember to still include the `iostream` and `string` header files to use the `std::cout` object. This is not shown in the examples below for brevity.

The constructor has the same name as the class and no return type. Here is an example of a constructor for the `Person` class:

```cpp
class Person {
private:
    std::string name;

public:
    int age;

    // Constructor
    Person(std::string n, int a) {
        // since the parameter name is the same as the attribute name, we use the `this` keyword to refer to the attribute
        name = n;
        age = a;

        // We will print a message to the console when a Person object is created for demonstration purposes
        std::cout << "Created: " << n << std::endl;
    }
};
```

Now we can create objects of the `Person` class using the constructor:

```cpp
int main() {
    // Create objects of the Person class
    Person person1("Alice", 30); // On the stack
    Person person2 = new Person("Bob", 25); // On the heap

    // Access the attributes of the objects
    std::cout << person1.age << std::endl; // Output: 30
    std::cout << person2.age << std::endl; // Output: 25

    delete person2; // Free the memory allocated for the Person object

    return 0;
}
```

We can access the attributes of the objects using the dot `.` operator. We can access the `age` attribute because it is public, but we cannot access the `name` attribute because it is private.

So how can we access the `name` attribute? We can define a public method in the `Person` class that returns the `name` attribute:

```cpp
class Person {
private:
    std::string name;

public:
    int age;

    // Constructor
    Person(std::string n, int a) {
        name = n;
        age = a;
    }

    // Public method to access the name attribute
    std::string getName() {
        return name;
    }
};
```

Now we can access the `name` attribute using the `getName` method:

```cpp
int main() {
    // Create objects of the Person class
    Person person1("Alice", 30);
    Person person2("Bob", 25);

    // Access the attributes of the objects
    std::cout << person1.getName() << std::endl; // Output: Alice
    std::cout << person2.getName() << std::endl; // Output: Bob

    return 0;
}
```

This is an example of a getter method, which is a common pattern in OOP. Getter methods are used to access private attributes of a class. You can also define setter methods to modify the attributes of a class. This allows for you to allow access to a variable, but control how it is accessed. For instance, if you make age private, you could add a getter method and have a setter method that only allows the `age` attribute to be set to a value between 0 and 120. Since we have not included a setter method for `name`, it is not possible to change the `name` attribute of a `Person` object once it is created.

## Static Members

A static member is a class member that belongs to the class itself, rather than to individual objects of the class. Static members are shared among all objects of the class. You can access static members using the class name followed by the scope resolution operator `::`. in the implementation below, we use a static method to create a `Person` object from user input.

## Implementation

We have covered enough to refactor our existing code to use a vector of people, instead of just names

```cpp
#include <iostream>
#include <string>
#include <vector>

class Person {
private:
    std::string name;
    int age;

public:
    /* Static method to create a Person object
    returns true if a person was created, false if the user exits
    takes a reference to a pointer to a Person object, so that the object can be created and returned without copying
    */
    static bool createPerson(Person*& p) {
        std::string name = "";
        int age = -1;
        while (true) {
            std::cout << "Enter 'exit' to quit." << std::endl;
            std::string first = inputName();
            if (first == "exit") {
                break;
            }
            std::string last = inputName();
            if (last == "undo") {
                continue;
            }
            if (last == "exit") {
                break;
            }

            name = first + " " + last;

            age = inputAge();
        }

        // If the name is empty or the age is -1, return false, as the user has exited
        if (name.empty() || age == -1) {
            return false;
        }

        // Create a new Person object and assign it to the pointer
        p = new Person(name, age);
        return true;
    }

    // Public constructor, if the name and age is already known
    Person(std::string n, int a) {
        name = n;
        age = a;
    }

    // Static methods for user input
    static std::string inputName() {
        std::string n = "";
        while (n.empty()) {
            std::cout << "Enter a name: ";
            std::cin >> n;
        }
        return n;
    }

    static int inputAge() {
        int a;
        while (true) {
            std::cout << "Enter an age, or -1 to exit: ";
            std::cin >> a;
            if (a == -1) {
                break;
            }
            // Although we have direct access to age, we will use the setter method since it has validation
            if (setAge(a)) {
                break;
            }
            std::cout << "Invalid age. Please enter an age between 0 and 120, or -1 to exit." << std::endl;
        }
        return a;
    }

    // Setters and Getters
    std::string getName() {
        return name;
    }

    int getAge() {
        return age;
    }

    // We will return a boolean to indicate if the age was set successfully, or if an invalid age was provided
    bool setAge(int a) {
        if (a >= 0 && a <= 120) {
            age = a;
            return true;
        }
        return false;
    }
};
```

This implementation allows for the creation of a `Person` object using the `createPerson` method. The `createPerson` method will prompt the user for a name and age, and create a `Person` object with the provided values. The `createPerson` method returns a boolean value to indicate if a `Person` object was created successfully. If the user enters "exit" at any time, the `createPerson` method will return false, and the `Person` object will not be created.

We can now use this class to create a vector of `Person` objects:

```cpp
int main() {
    std::vector<Person*> people;
    while (true) {
        Person* p = nullptr;
        if (!Person::createPerson(p)) {
            break;
        }
        people.push_back(p);
    }

    for (const auto& person : people) {
        std::cout << person->getName() << " is " << person->getAge() << " years old." << std::endl;
    }

    // Free the memory allocated for the Person objects
    for (const auto& person : people) {
        delete person;
    }

    return 0;
}
```
