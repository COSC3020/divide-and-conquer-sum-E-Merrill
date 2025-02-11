# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

**Plagiarism message**

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.


## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.  

The base condition for the implemented algorithm is $T(1)$ when $n\leq1$  
In every other case, $T(n) = 3T(n/3) +2$  with the +2 accounting for adding the partial sums.  
This is the recurrence relation, and from there we can substitute it into itself to solve for a meaningful answer.  
$T(n) = 3T(\frac{n}{3})+2$  
$T(n) = 3(3(T(\frac{n}{9})+\frac{2}{3})+2$  
$T(n) = 9T(\frac{n}{9})+4$  
$T(n) = 27T(\frac{n}{27})+6$  
...  
$T(n) = 3^i T(\frac{n}{3^i})+2i$  

Letting $i = log_3 n$ :  

$T(n) = 3^{log_3 n}  T(\frac{n}{3^{log_3 n}})+2log_3n$  
$T(n) = n T(\frac{n}{n})+2log_3n$  
$T(n) = n T(1)+2log_3n$  
$T(n) = n+2log_3n$  
$2log_3n$ grows slower than $n$, so the final asymptotic complexity ends up being  
$T(n) = n$  
This means that $T(n) \in \theta (n)$  

This shows that the divide-and-conquer sum I implemented has a runtime analysis/asymptotic complexity of n, or linear complexity.  
The mathematicl analysis is shown, but I also concluded this by timing the function myself using the 
```
performance.now()
```
function within Javascript.
When entering larger numbers, the timing of the function would increase by the same amount as the input size.  
That is to say, if I doubled the input, the timing would double; if I tripled the input, the timing would triple; if I increased the input by a power of 10, the timing would do the same. 
