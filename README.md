#Handling Webworkers using JavaScript

Web Workers allow you to do things like fire up long-running scripts to handle computationally intensive tasks, 
but without blocking the UI or other scripts to handle user interactions. 
They're going to help put and end to that nasty 'unresponsive script' dialog that we've all come to love:

Workers utilize thread-like message passing to achieve parallelism. They're perfect for keeping your 
UI refresh, performant, and responsive for users.

This example demonstrares the classic example of finding a list of prime numbers in the given range. The UI often becomes unrepsonsive
when dealing with large requested prime numbers. This blurb of code shows how to tackle this kind of requests with webworkers in
javascript.
