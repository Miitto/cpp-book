---
title: Inheritance
---

# Inheritance

## Introduction

Inheritance is a fundamental concept in object-oriented programming that allows you to create a new class based on an existing class. The new class, known as a **derived class**, inherits the properties and behaviors of the existing class, known as a **base class**. This allows you to reuse code and create a hierarchy of classes that share common attributes and behaviors.

Inheritance is a powerful mechanism that enables you to model real-world relationships between objects and create more maintainable and flexible code. Inheritance is a powerful tool, but as with most powerful tools in C++, it can be misused. It is important to understand how inheritance works and when to use it appropriately.

## Syntax

The syntax for inheritance in C++ is as follows:

```cpp
class Base {
    // Base class members
};

class Derived : access-specifier Base {
    // Derived class members
};
```

In the above syntax:

-   `Base` is the name of the base class.
-   `Derived` is the name of the derived class.
-   `access-specifier` specifies the access level for the inheritance. It can be one of the following:
    -   `public`: The public members of the base class are accessible in the derived class.
    -   `protected`: The protected members of the base class are accessible in the derived class.
    -   `private`: The base class members are inherited as private members in the derived class.

## Example

Let's look at an example to illustrate inheritance in C++. We will create a base class called `Shape` that represents a geometric shape. The `Shape` class will have a member function to calculate the area of the shape. We will then create a derived class called `Rectangle` that inherits from the `Shape` class and adds additional functionality to calculate the perimeter of the rectangle.

```cpp
class Shape {
public:
    virtual double area() const = 0; // This is called a `pure virtual` method
};

// Create a derived class Rectangle that inherits from the Shape class.
// Public inheritance means that we can access the public members of the base class, such as the area() method.
class Rectangle : public Shape {
    double width;
    double height;
public:
    Rectangle(double w, double h) : width(w), height(h) {}

    double area() const override {
        return width * height;
    }

    double perimeter() const {
        return 2 * (width + height);
    }
};
```

In the above example:

-   The `Shape` class is the base class with a pure virtual method `area()`.
    -   A pure virtual method is a virtual method that has no implementation in the base class. It is used to define an interface that derived classes must implement. It can be thought of as "if you derive from me, you must implement this method."
-   The `Rectangle` class is the derived class that inherits from the `Shape` class.
    -   The `Rectangle` class implements the `area()` method to calculate the area of the rectangle.
        -   The `override` keyword is used to indicate that the `area()` method overrides the pure virtual method in the base class. This is a C++11 feature that helps catch errors at compile time if the method does not actually override a base class method. It is good practice to use `override` when overriding virtual methods, even though it is not strictly necessary. For instance, if you misspell the method name, the compiler will catch the error.
    -   The `Rectangle` class also adds a new method `perimeter()` to calculate the perimeter of the rectangle.

## Virtual Methods

A virtual method is a method that is declared in the base class and can be overridden by a derived class. Virtual methods are used to achieve [polymorphism](../polymorphism/), which will be covered in the next chapter. In the example above, the `area()` method in the `Shape` class is declared as a pure virtual method, which means that any class that inherits from the `Shape` class must implement the `area()` method.

A virtual method will can have an implementation in the base class, but it is not required. If a virtual method has an implementation in the base class, it can be overridden by the derived class.

## Pure Virtual Methods

A pure virtual method is a virtual method that has no implementation in the base class. Pure virtual methods **must** be overridden by any derived class.

## Inheritance Access Specifiers

In C++, you can specify the access level for inheritance using the `public`, `protected`, and `private` access specifiers. The access specifier determines the visibility of the base class members in the derived class. The default access level for inheritance is `private`. For instance, if you use `public` inheritance, all inherited members will be accessible as if they were declared in the derived class with the `public` access specifier.

Here is an example that demonstrates the different access levels in inheritance:

```cpp
class Base {
public:
    void publicBaseMethod() {
        cout << "Public method" << endl;
    }
};

class DerivedPublic : public Base {
public:
    void callBaseMethods() {
        publicBaseMethod();
    }
};

class DerivedPrivate : private Base {
public:
    void callBaseMethods() {
        // This is fine, as we have inherited the public method as private - and we are using it within the class
        publicBaseMethod();
    }
};

int main() {
    DerivedPublic derivedPublic;
    derivedPublic.callBaseMethods();
    derivedPublic.publicMethod(); // OK: Inherited parent members as public

    DerivedPrivate derivedPrivate;
    derivedPrivate.callBaseMethods();
    derivedPrivate.publicMethod(); // Error: Inherited parent members as private, this method is inaccessible // [!code error]
}
```

In the above example:

-   The `Base` class has a public method `publicBaseMethod()`.
-   The `DerivedPublic` class inherits from the `Base` class using public inheritance.
    -   The `publicBaseMethod()` method is a public member of the `DerivedPublic` class, and it can be accessed directly.
-   The `DerivedPrivate` class inherits from the `Base` class using private inheritance.
    -   The `publicBaseMethod()` method is a private member of the `DerivedPrivate` class, and it cannot be accessed directly. However, it can be accessed within the class itself.

## The `override` Keyword

The `override` keyword is a C++11 feature that helps catch errors at compile time if a method does not actually override a base class method. It is good practice to use `override` when overriding methods, even though it is not strictly necessary. For instance, if you misspell the method name, the compiler will catch the error. The `override` keyword is to tell the compiler to throw an error if the method does not override a base class method.

Here is an example that demonstrates the use of the `override` keyword:

```cpp
class Base {
public:
    virtual void foo() const {
        cout << "Base::foo()" << endl;
    }
};

class Derived : public Base {
public:
    void foo() const override {
        cout << "Derived::foo()" << endl;
    }

    void bar() const override { // Error: 'bar' marked 'override' but does not override any member functions // [!code error]
        cout << "Derived::bar()" << endl;
    }
};
```

## Access Modifiers Revisited

When we covered classes, we discussed access modifiers such as `public`, `protected`, and `private`. At the time we mentioned that these access modifiers control the visibility of class members in relation to using them on objects of the class. `protected` was passed over, as this access modifier is in relation to inheritance. We will now redefine the access modifiers in relation to inheritance:

-   `public`: Public members of the base class are accessible anywhere
-   `protected`: Protected members of the base class are accessible in the base class and derived classes, but not outside of them.
-   `private`: Private members of the base class are only accessible in the base class

Here is an example that demonstrates the use of access modifiers in inheritance:

```cpp
class Base {
public:
    void publicMethod() {
        cout << "Public method" << endl;
    }

protected:
    void protectedMethod() {
        cout << "Protected method" << endl;
    }

private:
    void privateMethod() {
        cout << "Private method" << endl;
    }
};

class Derived : public Base {
public:
    void callBaseMethods() {
        publicMethod(); // OK: Public members of the base class are accessible in the derived class
        protectedMethod(); // OK: Protected members of the base class are accessible in the derived class
        privateMethod(); // Error: Private members of the base class are not accessible in the derived class // [!code error]
    }
};

int main() {
    Base base;
    base.publicMethod(); // OK: Public members of the base class are accessible outside the class
    base.protectedMethod(); // Error: Protected members of the base class are not accessible outside the class // [!code error]
    base.privateMethod(); // Error: Private members of the base class are not accessible outside the class // [!code error]
}
```

## Default Implementations

In C++, you can provide default implementations for virtual methods in the base class. This allows derived classes to inherit the default implementation and override it if necessary. Default implementations are useful when you want to provide a common implementation for a method that can be overridden by derived classes.

To demonstrate this, we will create a new derived class called `Square` that derives from the `Rectangle` class. The `Square` class will inherit the `area()` and `perimeter` methods from the `Rectangle` class and override the constructor to ensure that the width and height are equal.

```cpp
class Square : public Rectangle {
public:
    Square(double side) : Rectangle(side, side) {} // Call the base class constructor with the side as both the width and height
};
```

In this example we have referred to the `Rectangle` class by name. In some languages, you can use the `super` keyword to refer to the base class, however in C++ you can inherit from multiple classes, so you must refer to the base class by name to avoid ambiguity.

## Deriving from Multiple Classes

In C++, you can derive a class from multiple base classes. This is known as **multiple inheritance**. When you derive a class from multiple base classes, the derived class inherits the properties and behaviors of all the base classes. This is a quick route to creating a mess of your code, so it is generally recommended to avoid multiple inheritance unless you have a very good reason to use it. [This](https://stackoverflow.com/questions/406081/why-should-i-avoid-multiple-inheritance) StackOverflow post provides a good overview of the reasons to avoid multiple inheritance, and the better methods of achieving the same results.

## Summary

We have seen how we can derive one class from another to use the properties and behaviors of the base class in the derived class. Inheritance is a powerful mechanism that allows you to create a hierarchy of classes and reuse code. We have also seen how access specifiers control the visibility of base class members in the derived class. In the next chapter, we will look at polymorphism, which in my opinion, is the most useful reason to use inheritance.
