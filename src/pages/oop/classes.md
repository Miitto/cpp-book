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

## Defining a Class

In C++, a class is defined using the `class` keyword followed by the class name. The class definition is enclosed in curly braces `{}`. Here is an example of a simple class definition:

```cpp
class Person {};
```

In this example, we have defined a class named `Person`. It does not have any attributes or methods yet, so lets add some

## Members

### Attributes

Attributes are the data members of a class. They represent the state of an object. Attributes are also known as fields, properties, or instance variables. Attributes are defined within the class definition, but not initialized.
We will add a name and an age attribute to the `Person` class:

```cpp
class Person {
    string name; // [!code focus:2]
    int age;
};
```

In this example, the `Person` class has two members: `name` and `age`. `name` is a string attribute, and `age` is an integer attribute. These attributes represent the state of an individual `Person` object.

### Methods

Methods are the member functions of a class. They define the behavior of an object. Methods are also known as functions or member functions. Methods are defined within the class definition. We will add a method to print the name and age of a `Person` object:

```cpp
class Person {
    string name;
    int age;
    // [!code focus:5]
    void printInfo() {
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
    }
};
```

The `printInfo` method is like the `size` method of a vector, and can be called on a `Person` object to print the name and age of the object. However we could not call it on a `Person` object yet as all the members are currently **private**.

## Access Modifiers

Access modifiers are keywords that define the visibility of class members (attributes and methods). There are three access modifiers in C++:

-   `public`: Members are accessible from outside the class.
-   `protected`: Members are accessible from derived classes. (We will cover inheritance in a later lesson, for now it will work the same as `private`)
-   `private`: Members are only accessible from within the class.

By default, the access modifier for class members is `private`. This means that if we attempt to use the `printInfo` method, we will get a compiler error.

```cpp
    person1.printInfo(); // Error: 'void Person::printInfo()' is inaccessible // [!code error]
```

We will change the access modifier for the `printInfo` method to `public` so that it can be accessed from outside the class:

```cpp
class Person {
    string name;
    int age;
// [!code focus:8]
/* The `public` label is the access modifier.
It will apply to any members below it, until another access modifier is encountered. */
public: // [!code ++]
    void printInfo() {
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
    }
};
```

We can now use the `printInfo` method to print the name and age of a `Person` object.

```cpp
    person1.printInfo(); // OK: printInfo is now public
```

But how do we get a `Person` object?

## Creating Objects

To create an object of a class, you need a constructor. A constructor is a special method that is called when an object is created. Constructors are used to initialize the object's attributes. If you do not define a constructor, C++ will provide a default constructor that initializes the object's attributes to default values.

The constructor has the same name as the class and no return type. Once created, we can access members of the object using the `.` operator. Remember, we use `::` to access members of a namespace and `.` to access members of an object.

If we want to be able to use a constructor outside of the class, we need to make it public. There are uses for private constructors, but they are more advanced and will be covered in a later lesson.

Here is an example of a constructor for the `Person` class:

```cpp
class Person {
    string name;
    int age;

public:
    void printInfo() {
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
    }
    // [!code focus:8]
    Person(string n, int a) {
        name = n;
        age = a;

        // We will print a message to the console when a Person object is created for demonstration purposes
        cout << "Created: " << n << endl;
    }
};
```

Now we can create objects of the `Person` class using the constructor. Since a class is a user-defined type, we can use the class name as the type of the variable.

```cpp
int main() {
    // Create objects of the Person class
    Person person1("Alice", 30); // On the stack

    // Since the `new` keyword returns a pointer, we must use a pointer to store the object: `Person*`
    Person* person2 = new Person("Bob", 25); // On the heap

    // Now that we have created the objects, we can access their public attributes and methods
    person1.printInfo();
    (*person2).printInfo(); // We need to dereference the pointer to access the object's members

    delete person2; // Free the memory allocated for the Person object

    return 0;
}
```

### Initializer List

You can also initialize the attributes of a class in the constructor using an initializer list. This is a more concise way to initialize the attributes of a class. Here is an example of using an initializer list to initialize the attributes of the `Person` class:

```cpp
class Person {
    string name;
    int age;

public:

    Person(string name, int a) : name(name), age(a) {}
};
```

This is equivalent to the previous constructor definition, but is more concise. The `:` is used to initialize the attributes of the object. This is known as an initializer list. An initializer list can be used to initialize members that can not be initialized in the constructor body, such as `const` members or reference members. The syntax is:

```cpp
ConstructorName(parameters) : member1(value1), member2(value2), ... {}
```

Also shown is that you do not need to use the `this` keyword to refer to the class attributes if the parameter name is the same as the attribute name.

## -> Operator

We can use the `->` operator to access an object's members through a pointer. The `->` operator combines the dereference operator `*` and the member access operator `.` into a single operator. For instance, we can modify our code to use the `->` operator:

```cpp
int main() {
    // Create objects of the Person class
    Person person1("Alice", 30); // On the stack

    // Since the `new` keyword returns a pointer, we must use a pointer to store the object: `Person*`
    Person* person2 = new Person("Bob", 25); // On the heap

    // Now that we have created the objects, we can access their public attributes and methods
    person1.printInfo();
    // [!code focus:3]
    (*person2).printInfo(); // [!code --]
    person2->printInfo();  // [!code ++]

    delete person2; // Free the memory allocated for the Person object

    return 0;
}
```

## `this` Keyword

While working with classes, you may encounter situations where the names of the class attributes and the parameters of a method are the same. In such cases, you can use the `this` keyword to refer to the class attributes. For example, if we want to use `name` as a parameter in the constructor, we can use the `this` keyword to refer to the class attribute to set its value:

```cpp
class Person {
    string name; // [!code focus]

public:
    // Calling the parameter `name` would shadow the class attribute `name` // [!code focus:5]
    Person(string name) {
        // So we use this to refer to the class attribute
        this->name = name;
    }
};
```

`this` is a pointer to the current object, so you use the `->` operator to access the object's members. Since `this` is a pointer, objects can destroy themselves using the `delete this` statement, but this is not recommended as it can lead to undefined behavior.

`this` is an rvalue, so you cannot modify it, only modify members of the object it points to. You can also use `this` to return a reference to the current object, which can be useful for method chaining.

## Getters and Setters

Now what if we want to be able to change name and age? We could make the attributes public, which would allow us to change them directly. But then
suppose we want to ensure that `age` is always between 18 and 120. We could add a check in the constructor, and throw an error when creating the object. We will throw an `invalid_argument` exception if the age is invalid, which is from the `stdexcept` header file.

```cpp
class Person {
public:
    string name;
    int age;

    void printInfo() {
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
    }
    // [!code focus:8]
    Person(string n, int a) {
        name = n;
        if (a < 18 || a > 120) { // [!code highlight:3]
            throw invalid_argument("Invalid age"); // Since we cannot return a value from a constructor, we must throw an error if the age is invalid.
        }
        age = a;
    }
};

int main() {
    try {
        Person person1("Alice", 30);
        Person person2("Bob", 15); // This will throw an error
    } catch (invalid_argument& e) {
        cout << e.what() << endl;
    }

    return 0;
}
```

This works at first glance, but consider the following code:

```cpp
Person person1("Alice", 30);
person1.age = 15;
```

This code will compile and run, but it will not throw an error. This is because the `age` attribute is public, and can be changed directly without any further checks.

### Setters

To prevent this, we can use setter methods to modify the attributes of a class. Setter methods are used to set the values of private attributes. We will add a setter method for the `age` attribute that checks if the provided age is valid:

```cpp
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
        /* Since this method is inside of the class, we could simply use `age = a;` here, // [!code focus:3]
        but that would require us to duplicate the check in the setter method. */
        if (!setAge(a)) {
            throw invalid_argument("Invalid age");
        }
    }
    // [!code focus:8]
    bool setAge(int a) {
        if (a < 18 || a > 120) {
            return false;
        }
        age = a;
        return true;
    }
};
```

Now we can use the `setAge` method to change the `age` attribute, and it will return `false` if the provided age is invalid. Returning a `bool` is more common than throwing an error, as it can be handled more easily.:

```cpp
int main() {
    Person person1("Alice", 30); // [!code focus:4]
    if (!person1.setAge(15)) { // This will return false, as age is below 18. The age will not be changed.
        cout << "Invalid age" << endl; // Since the setter returns false, we can print an error message
    }

    person1.printInfo(); // This will print the original age of 30 // [!code focus]

    return 0;
}
```

### Getters

What if we want to get the age itself? We could make the `age` attribute public again, but then we would lose the ability to enforce age limits. Instead, we can add a getter method to return the value of the `age` attribute:

```cpp
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
// [!code focus:4]
    int getAge() {
        return age;
    }
};

int main() {
    Person person1("Alice", 30);
    cout << "Age: " << person1.getAge() << endl; // [!code focus]

    return 0;
}
```

Since this returns a copy of age, there is no risk of the age being changed outside of the class.
