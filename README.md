# TypeScript Type Error: String Argument to Numeric Parameter

This repository demonstrates a common type error in TypeScript where a string argument is passed to a function parameter expecting a number.  The error arises from the type system's inability to implicitly convert strings to numbers.  The solution shows how to explicitly handle the type mismatch to prevent the error.

## Bug

The `add` function is defined to accept two numeric parameters.  However, the code attempts to pass a string ("2") as a parameter.  This results in a type error.

## Solution

The solution addresses this by either explicitly converting the string to a number using `parseInt()` or by adding a type guard to check the type and handle it appropriately.