# Redux - Rewrite

## Reimplementation of redux in Vanilla JS


## Module 1: createStore

Function to create a global store with methods 

* getState()
* dispatch()
* subscribe()
* replaceReducer()


## Module 2: combineReducer

## Module 3: applyMiddleware

## Module 4: compose

* Compose performs a right-to-left function composition.
* It is a high order function. It is a function that returns another function.
* It takes multiple functions as arguments and we convert them into an array of functions using the spread opeartor.
* Then we simply apply a reduceRight on those functions. The first parameter of the callback is the current argument.
* The second argument is the current function.
* Then we call each function with the current argument and the result is use for the next call.
