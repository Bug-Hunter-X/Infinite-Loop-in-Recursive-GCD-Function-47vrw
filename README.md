# Infinite Loop in Recursive GCD Function
This repository contains a JavaScript function that calculates the greatest common divisor (GCD) of two numbers using recursion. However, the function contains a bug that can lead to an infinite loop if the input is invalid.  The bug and a solution are provided.

## Bug
The `foo` function correctly calculates the GCD using Euclid's algorithm. However, it lacks input validation. If `b` is 0 and `a` is not 0, the recursive call will continue indefinitely because neither `a` nor `b` will be zero.  The condition should also check for `b` being zero.

## Solution
The solution adds input validation to check if either `a` or `b` is zero. If either is zero, the function will return the other number. This prevents the infinite loop.
