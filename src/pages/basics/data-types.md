---
title: Data Types
---

# Data Types

## Fundamental Data Types

There are several fundamental data types in C++:
- [`int`](#integer-data-types) integer
- [`float` & `double`](#floating-point-data-types) Floating Points
- [`char`](#character-data-type) character
- [`bool`](#boolean-data-type) boolean

## Integer Data Types

The `int` data type is used to store integer values. The size of an `int` is dependent on the compiler and the system. This should be the default for numbers that do not require decimals, as they are more efficient.

## Floating Point Data Types

The `float` and `double` data types are used to store floating point values. The `float` data type is used to store single-precision floating point values. The `double` data type is used to store double-precision floating point values.

> ℹ️
> Due to the large amounts of RAM on modern computers, a double should likely be used over a float for the higher precision (~15 digits after the decimal points, vs ~7 for a float).

> ℹ️
> Floating point numbers can be used with scientific notation, a lowercase e for a float, and an uppercase E for a double
> ```cpp
> float f1 = 35e3
> double d1 = 12E4
> ```

## Character Data Type

The `char` data type is used to store a single character. A `char` is always a single byte (8 bits).

## Boolean Data Type

The `bool` data type is used to store boolean values. A boolean value can be either `true` or `false`.

## Signed and Unsigned

The `int` and `char` types are by default `signed`, but they can also be made `unsigned`.
```cpp
char negativeSignedCount = -128;
char signedCount = 127;
unsigned char unsignedCount = 255;
```
Only a signed type can contain negative numbers, however this comes at the cost of the maximum value of the type - by half. An unsigned number is useful for when the values may get too large for a signed integer, and there won't be any negative numbers. If You need larger numbers, and negative numbers, the following section will be of use.

> ℹ️
> There are many ways of storing negative numbers, such as using a sign bit - `01` means positive 1, `11` means negative 1 (or vice versa depending on implementation). However this results in there being two values for 0. The most widespread method to fix this is called [Two's Complement](https://en.wikipedia.org/wiki/Two%27s_complement) and assigns the bottom half of the number range to positive, and the top half to negative, in reverse order. This is the reason for many bugs you may have heard of, when a really large number "rolls over" and becomes a really large negative number.  
> The list below shows the relation between signed and unsigned 8 bit integers:
> - 0 --> 0
> - ...
> - 127 --> 127
> - 128 --> -128
> - ...
> - 255 --> -1

## Short and Long

`short` and `long` can be thought of as modifiers to the `int` type (Although some compilers do accept a `long double`). They can be used to increase or decrease the size of the type. The size of a `short` is at least 16 bits, and the size of a `long` is at least 32 bits. The size of a `long long` is at least 64 bits. The size of these types are vague, and are dependent on the compiler and the system compiled for. Below is a quick program to determine the size of the types on your system:
```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Size of char : " << sizeof(char) << " byte" << endl;
    cout << "Size of int : " << sizeof(int) << " bytes" << endl;
    cout << "Size of short int : " << sizeof(short int) << " bytes" << endl;
    cout << "Size of long int : " << sizeof(long int) << " bytes" << endl;
    cout << "Size of long long int : " << sizeof(long long int) << " bytes" << endl;
    cout << "Size of float : " << sizeof(float) << " bytes" << endl;
    cout << "Size of double : " << sizeof(double) << " bytes" << endl;
    cout << "Size of long double : " << sizeof(long double) << " bytes" << endl;
    return 0;
}
```

## Enumerated Data Types

Enumerated data types are user-defined data types that consist of a set of named constants called enumerators. The `enum` keyword is used to define an enumerated data type. The syntax for defining an enumerated data type is as follows:
```cpp
enum enumName {
    enumerator1,
    enumerator2,
    ...
};
```

Here is an example of defining an enumerated data type called `Color` with three enumerators: `RED`, `GREEN`, and `BLUE`:
```cpp
enum Color {
    RED,
    GREEN,
    BLUE
};
```

Enumerated data types are aliases for integer values. By default, the first enumerator has the value `0`, and each subsequent enumerator has a value one greater than the previous enumerator. You can also assign specific values to the enumerators:
```cpp
enum Color {
    RED = 1,
    GREEN = 2,
    BLUE = 4
};
```