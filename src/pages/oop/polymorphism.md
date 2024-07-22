---
title: Polymorphism
---

# Polymorphism

## Introduction

Polymorphism is a fundamental concept in object-oriented programming that allows you to treat objects of different classes as objects of a common base class. This enables you to write code that can work with objects of multiple classes without knowing their specific types. Polymorphism is a powerful mechanism that enables you to write flexible and extensible code that can adapt to different types of objects at runtime.

## Example

The easiest way to see how polymorphism works is through example. For this we will go back to our shapes example:

```cpp
class Shape {
public:
    Shape() {}

    virtual void draw() {
        cout << "Drawing a shape" << endl;
    }
};

class Circle : public Shape {
    double radius;
public:
    Circle(double r) : radius(r) {}

    void draw() override {
        cout << "Drawing a circle" << endl;
    }
};

class Rectangle : public Shape {
    double width, height;
public:
    Rectangle(double w, double h) : width(w), height(h) {}

    void draw() override {
        cout << "Drawing a rectangle" << endl;
    }

    double area() {
        return width * height;
    }
};

class Square : public Rectangle {
public:
    Square(double s) : Rectangle(s, s) {}

    void draw() override {
        cout << "Drawing a square" << endl;
    }
};
```

We have a few shapes here, all of which are derived from the `Shape` class. The `Shape` class has a virtual `draw` method that is overridden by the derived classes. The `Circle`, `Rectangle`, and `Square` classes all have their own `draw` methods that print out the name of the shape they represent. The `Rectangle` class also has an `area` method that calculates the area of the rectangle, which is inherited by the `Square` class, but not present in any other class.

### Without polymorphism

Now let's create a few shapes and draw them, to check if everything is working as expected:

```cpp
int main() {
    Circle c(5);
    Rectangle r(3, 4);
    Square sq(6);

    c.draw();
    r.draw();
    sq.draw();

    cout << "Rectangle area: " << r.area() << endl;
    cout << "Square area: " << sq.area() << endl;

    return 0;
}
```

This is nothing new so far, but now lets use some polymorphism:

### With polymorphism

```cpp
int main() {
    std::vector<Shape*> shapes;

    shapes.push_back(new Circle(5));
    shapes.push_back(new Rectangle(3, 4));
    shapes.push_back(new Square(6));

    for (Shape* shape : shapes) {
        shape->draw();
    }

    return 0;
}
```

This will output:

```plaintext
Drawing a circle
Drawing a rectangle
Drawing a square
```

Now this is more useful. Since all shapes are derived from the `Shape` class, they are bound to the contract of the `Shape` class. This means that we can treat them as `Shape` objects, and call the `draw` method on them, without knowing their specific types. Since we have overridden the virtual method in the derived classes, the derived classes version of the method is the one that is called. This is the essence of polymorphism: the ability to treat objects of different classes as objects of a common base class. This enables you to write code that can work with objects of multiple classes without knowing their specific types.

While they are treated as `Shape` objects, we cannot call the `area` method, as that is not part of the `Shape` class.

## `dynamic_cast`

`dynamic_cast` is a C++11 operator that is used to perform safe down-casting of pointers and references in object-oriented programming. It is used to convert a pointer or reference of a base class to a pointer or reference of a derived class. If the conversion is not possible, `dynamic_cast` returns a null pointer or throws an exception, depending on the context in which it is used. In our current context, it would allow us to take a `Shape` pointer and convert it to a `Rectangle` pointer, for example.

```cpp
int main() {
    std::vector<Shape*> shapes;

    shapes.push_back(new Circle(5));
    shapes.push_back(new Rectangle(3, 4));
    shapes.push_back(new Square(6));

    for (Shape* shape : shapes) {
        shape->draw();

        // Attempt to cast the shape to a Rectangle
        Rectangle* rect = dynamic_cast<Rectangle*>(shape);

        // Check if the cast was successful
        if (rect) {
            cout << "Rectangle area: " << rect->area() << endl;
        }
    }

    return 0;
}
```

While this is very useful, it is also usually a sign of bad design. If you find yourself needing to use `dynamic_cast`, you should probably rethink your design.

## Better design

In this case, it would be better to have the `area` method in the `Shape` class, which would be overridden by the derived classes. This would allow you to call the `area` method on any `Shape` object, without needing to know its specific type.

We could also create a `ShapeArea` class that derives from `Shape`, which has the `area` method to be overridden by the derived classes. This would allow us to only use shapes that can have their area calculated as `ShapeArea` objects.

## Adding the area method to the Shape class

```cpp
class Shape {
public:
    virtual void draw() {
        cout << "Drawing a shape" << endl;
    }

    virtual double area() = 0; // Pure virtual method, to force all Shapes to implement it themselves // [!code ++]
};

class Circle : public Shape {
    double radius;

public:
    Circle(double r) : radius(r) {}

    void draw() override {
        cout << "Drawing a circle" << endl;
    }

    double area() override { // [!code ++]
        return 3.14159 * radius * radius; // Area of a circle is pi * r^2 // [!code ++]
    } // [!code ++]
};

class Rectangle : public Shape {
    double width, height;

public:
    Rectangle(double w, double h) : width(w), height(h) {}

    void draw() override {
        cout << "Drawing a rectangle" << endl;
    }

    double area() { // [!code --]
    double area() override { // Added the override keyword // [!code ++]
        return width * height;
    }
};

class Square : public Rectangle {
public:
    Square(double s) : Rectangle(s, s) {}

    void draw() override {
        cout << "Drawing a square" << endl;
    }

    // We do not need to override the area method, as it is already implemented correctly in the Rectangle class
};
```

This will now allow us to call the `area` method on any `Shape` object, without needing to know its specific type. We can now remove the `dynamic_cast` from our code, and call the `area` method directly on the `Shape` objects.

```cpp
int main() {
    std::vector<Shape*> shapes;

    shapes.push_back(new Circle(5));
    shapes.push_back(new Rectangle(3, 4));
    shapes.push_back(new Square(6));

    for (Shape* shape : shapes) {
        shape->draw();
        cout << "Area: " << shape->area() << endl;
    }

    return 0;
}
```

### Creating a ShapeArea class

```cpp
class Shape {
public:
    virtual void draw() {
        cout << "Drawing a shape" << endl;
    }
};

class Circle : public Shape {
    double radius;

public:
    Circle(double r) : radius(r) {}

    void draw() override {
        cout << "Drawing a circle" << endl;
    }
};

class ShapeArea : public Shape { // [!code ++]
public: // [!code ++]
    virtual double area() = 0; // Pure virtual method, to force all Shapes to implement it themselves // [!code ++]
}; // [!code ++]

class Rectangle : public Shape { // [!code --]
class Rectangle : public ShapeArea { // Inherit from ShapeArea instead of Shape // [!code ++]
    double width, height;

public:
    Rectangle(double w, double h) : width(w), height(h) {}

    void draw() override {
        cout << "Drawing a rectangle" << endl;
    }

    double area() { // [!code --]
    double area() override { // Added the override keyword // [!code ++]
        return width * height;
    }
};

class Square : public Rectangle {
public:
    Square(double s) : Rectangle(s, s) {}

    void draw() override {
        cout << "Drawing a square" << endl;
    }

    // We do not need to override the area method, as it is already implemented correctly in the Rectangle class
};
```

While this method is more verbose, it lets us keep our original `Shape` class separated, and only add the `area` method to the `ShapeArea` class. We can now take a list of `ShapeArea` objects, and call the `area` method on them, without needing to know their specific types. Since `ShapeArea` is derived from `Shape`, we can still treat them as `Shape` objects, and call the `draw` method on them.

```cpp
double getCombinedArea(std::vector<ShapeArea*> shapes) {
    double totalArea = 0;

    for (ShapeArea* shape : shapes) {
        totalArea += shape->area();
    }

    return totalArea;
}

int main() {
    vector<ShapeArea*> shapeAreas;

    shapes.push_back(new Rectangle(3, 4));
    shapes.push_back(new Square(6));

    cout << "Combined area: " << getCombinedArea(shapes) << endl;

    vector<Shape*> shapes;
    shapes.push_back(new Circle(5));
    shapes.insert(shapes.end(), shapeAreas.begin(), shapeAreas.end()); // We can insert the ShapeArea objects into the Shape vector, as they are derived from Shape

    for (Shape* shape : shapes) {
        shape->draw();
    }

    return 0;
}
```

In this case, it makes more sense to just add the area method to the Shape class, as it is a common property of all shapes. However, this is just an example to show how you can use polymorphism on multiple levels. This method would be more useful to something like an `Animal`. Below is a more reasonable example of how you could use this method:

```cpp
class Animal {
public:
    virtual void speak() = 0;
};

class Dog : public Animal {
public:
    void speak() override {
        cout << "Woof!" << endl;
    }
};

class FlyingAnimal : public Animal {
public:
    virtual void fly() = 0;
};

class Bird : public FlyingAnimal {
public:
    void speak() override {
        cout << "Chirp!" << endl;
    }

    void fly() override {
        cout << "Flap flap flap" << endl;
    }
};

class AquaticAnimal : public Animal {
public:
    virtual void swim() = 0;
};

class Fish : public AquaticAnimal {
public:
    void speak() override {
        cout << "Blub blub" << endl;
    }

    void swim() override {
        cout << "Swish swish" << endl;
    }
};
```

This way, you can treat all animals as `Animal` objects, any flying animals as `FlyingAnimal` objects, and any aquatic animals as `AquaticAnimal` objects. This allows you to write code that can work with animals of different types, while ensuring that each animal is still of the correct category.
