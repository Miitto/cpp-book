---
title: Header Files
---

# Header Files

## Introduction

A header file is a file that contains the declarations of functions and classes, but not their definitions. This allows you to include the header file in multiple source files, without causing any conflicts. It is important to ensure that a header file will not introduce any conflicts when included in multiple source files. We will cover how classes use header files when we discuss classes.

## Why Use Header Files?

Header files are used to share declarations of code between files. This is useful when you have multiple source files that need to use the same functions or classes. By including the header file in each source file, you can avoid having to redeclare the functions or classes in each file.

## How to Use Header Files

To use a header file in your source file, you need to include it at the top of the file. You can do this using the `#include` directive, and since this is our own header, and not one from the standard library, we use double quotes `"`. For example, to include the header file `myHeader.h`, you would write:

```cpp
#include "myHeader.h"
```

To declare a function in a header file, you can use the following syntax:

```cpp A:myFunction.h myFunction.cpp main.cpp
void myFunction();
```

and then to define the function in a source file, you can use the following syntax:

```cpp myFunction.h A:myFunction.cpp main.cpp
#include "myFunction.h"

void myFunction() {
    // Function definition
}
```

This way, you can include the header file in multiple source files, and define the function in a single source file. This makes it easier to share the declarations of code between files, without causing any conflicts.

To now use this function in another source file, you can include the header file at the top of the file, and then call the function as you would normally:

```cpp myFunction.h myFunction.cpp A:main.cpp
#include "myFunction.h"

int main() {
    myFunction();
    return 0;
}
```

## Guards

When you include a header file in multiple source files, you may run into issues with redefinition. This is because the compiler will include the contents of the header file in each source file, which can cause conflicts if the same code is included multiple times. To avoid this, you can use **header guards**.

Header guards are preprocessor directives that prevent the contents of a header file from being included more than once in the same source file. There are two ways to define header guards, either using preprocessor definitions, or using the newer `#pragma once` directive.

### Preprocessor Definitions

To define header guards using preprocessor definitions, you first check to see if the preprocessor definition has been defined. If it has not been defined, you define it, and then include the contents of the header file. For example:

```cpp myHeader.h
#ifndef MYHEADER_H // If MYHEADER_H is not defined
#define MYHEADER_H // Define MYHEADER_H

// Header file contents

#endif // End of MYHEADER_H
```

If the header file is included in another source file, the preprocessor definition `MYHEADER_H` will be defined, and the contents of the header file will not be included again.

The name of the preprocessor definition should be unique to the header file, to avoid conflicts with other header files. It is common practice to use the name of the header file in uppercase, with underscores replacing the periods.

### Pragma Once

The newer `#pragma once` directive is a simpler way to define header guards. You simply add `#pragma once` at the top of the header file, and the contents of the header file will only be included once in each source file. For example:

```cpp myHeader.h
#pragma once

// Header file contents
```

This is a more modern and concise way to define header guards, and is supported by most modern compilers. However, it is not part of the C++ standard, so it may not be supported by all compilers.

## Conclusion

Header files are an essential part of C++ programming, allowing you to share declarations of code between files without causing conflicts. By using header files, you can split your code into multiple files, making it easier to manage and understand. Header guards are used to prevent redefinition issues when including header files in multiple source files, and there are two ways to define header guards: using preprocessor definitions, or using the `#pragma once` directive.

From now on, we will be splitting our code into multiple files, and using header files to share declarations of code between files. This will help us to manage our code more effectively, and avoid conflicts when including code in multiple source files.
