## Mars Rover Kata

- This is a solution to the [Mars Rover Kata from TDD Buddy](http://www.tddbuddy.com/katas/Mars%20Rover.pdf) in TypeScript
- The aim was to follow TDD as closely as possible with the RED-GREEN-REFACTOR cycle, letting the tests write the code
- Final refactors included using a Map of characters to functions for commands and an array iteration for right ("e", "s", "w", "n", "e") and left ("e", "n", "w", "s", "e") turns

## Description

- The Mars Rover moves on a grid with a string of commands, "f" for foward, "b" for backward, "l" for turn left and "r" for turn right.
- It is facing either North ("n"), South ("s"), East("e") or West("w), which determines it's movements.
- The grid has edge wrapping, as if on a spherical planet.

## Test Coverage

- Check the commit history to see the detailed TDD process and RGR steps.
- An example commit might be "passing test for wrappign y-axis moving backward facing north" or "passing test for wrappign y-axis moving forward facing south".

![](./test-coverage.png)
