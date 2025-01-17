# Lifting State to Parents

* Given data can *only* move down ⬇️ the component tree,
* Given the same data might be used in several different components,
* We might find ourselves in a position where the data's starting point needs to be moved

![react component diagram](https://reactjs.org/static/9381f09e609723a8bb6e4ba1a7713b46/90cbd/thinking-in-react-components.png)

---

# Code Along: Fahrenheit to Celsius

See lifting state to parents in action with this fahrenheit to celsius conversion app.

https://replit.com/@SDB-june-2022/fahrenheit-to-celsius

---

# Lifting State - Conclusions

* The state's origin point is its "single source of truth."
* Parent components can send functions to children to update their own (parent) state.
* Data "flows" down the component tree.
* We use props to spread state throughout our applications.

---

# Classes and Functions

React supports two ways of writing your Components

- as classes with a render method that returns JSX
- as functions that directly return JSX

Each has benefits, and drawbacks, but with the introduction of hooks in React functional components are becoming much more common

---

# Classes, Pros and Cons

Classes are the original way of setting up a React component if you want access to lifecycle methods, and state.

Pros:
- direct access to your component's state, and lifecycle methods
- more representative of React "under the hood"

Cons:

- related operations are often split across lifecycle methods
- (relatively) complicated setup
- `this` and `bind`

---

# Functions, Pros and Cons

Functional components are a shorthand way of setting up a react component.

Pros:

- Simple syntax
- Shorter to write
- Don't need to worry about binding `this`
- Now with access to state, and the component lifecycle thanks to hooks
- Related operations can be bundled into a single hook

Cons:

- hooks are very new, so documentation is sparse
- an additional layer of abstraction

---

# What are Hooks?

Hooks are a way to bring state, and life-cycle operations into functional Components. They are functions packaged with React that allow access to all the operations class based components have.

The two most common hooks are `useState` and `useEffect`

`useState` is used to set up, and manipulate state.

`useEffect` is used to set up side-effect operations, such as fetching data from an external source.

---

# Which Should I Use?

Both functional components, and class based components can be used side by side. Regardless of which method you use to setup your components they are used in the same manner, and you can even mix, and match class based, and functional components in the same application.

As always I recommend you use the way that makes the most sense to you.

---

# ...but

With the advent of hooks functional components are becoming much more common. In a matter of months functional components have become an industry standard thanks to their clean syntax, and ease of use so you should make an effort to learn all about hooks.

---

# Code Along: Convert a Class to a Function

Let's convert a class based component into a function!

Go ahead and clone down [this example code](https://github.com/Habenzy/class-comp-example) then run an `npm install` to bring in all the dependencies.

This is a simple class based React app that accepts an input in a form, and displays it as an `<h2>` on the page when the form is submitted.

Follow along as I transform this class based component into a functional component!

---

# Compare and Contrast

![class vs. functional components](https://res.cloudinary.com/btvca/image/upload/v1622826629/curriculum/func_v_class_comp_h7omae.png)

---

# The Future of React

There are no plans to remove classes from React, so they will be supported for the forseeable future. It's still important to understand, and be able to use class based components.

**However** functional components can now do (practically) everything class based components can, and are much cleaner. Functional components are the way React will be written going forward.