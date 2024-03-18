[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/26dp6wek)
# Asynchronicity

Implement a function that takes an array and a key to search for and counts the
number of times key matches an element in the array (the count matches function
we talked about in lectures). Your implementation must count the number of
matches asynchronously, but does not need to do so in parallel. What type of
asynchronous execution you choose is up to you.

I have not provided a template; depending on how you choose to implement the
function, it will have a different signature.

I have also not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The [async library](https://caolan.github.io/async/v3/) may be helpful with
this.

## Runtime Analysis

What is the time complexity of your implementation (worst-case $\Theta$)? Add
your answer, including your reasoning, to this markdown file.

# Runtime Analysis of `countMatchesAsync` Function

## Algorithm Steps:

1. **Initialization**: The function initializes a count variable to zero.
2. **Iteration and Comparison**: For each element in the array, there is a comparison operation with the key.
3. **Counting Matches**: If an element matches the key, the counter increments.
4. **Promise Resolution**: Once the entire array has been processed, the function resolves the promise with the count of matches.
   - This step signifies the asynchronous execution of the function, which doesn't impact the computational complexity.


## Analysis:

- **Linear Iteration**: The function's operation involves a single pass through the array of length $n$, checking each element to determine if it matches the key, resulting in a complexity of $O(n)$
  
- **Comparison Operation**: For each element in the array, there's a simple equality check to see if the element equals the key. This operation is a constant time, $O(1)$, for each element.

Considering these points, the primary factor affecting the runtime is the number of elements in the array, $O(n)$.

## Worst-Case Scenario:

In the worst-case scenario, the key does not match any elements in the array, or it matches all elements. Either way, the algorithm must inspect each of the $\(n\)$ elements to accurately count matches. Therefore, the complexity is directly proportional to the array's length.


## Conclusion

The `countMatchesAsync` function's overall worst-case time complexity, focusing on iterating through an array and performing a constant-time operation for each element, is: $$\Theta(n)$$ This reflects the direct impact of array size on the function's execution time.

References:
https://wesbos.com/javascript/12-advanced-flow-control/70-async-await
https://stackoverflow.com/questions/58398614/using-async-await-to-count-errors-from-3-different-loops-that-calls-an-async-f








