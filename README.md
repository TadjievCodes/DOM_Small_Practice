# DOM_Small_Practice
DOM_Small_Practice

An event received by an element doesn't stop with that one element. That event moves to other elements like the parent, 
and other ancestors of the element. This is called "event bubbling".
What is the callback function that is passed to addEventListener often called? Event Handler...
A parent experiences the same event a child does because of event bubbling.
The Event Object like: Event.target example: (And value LI any tagname should be uppercase when "tagName" is used)
```js
event.target.tagName == 'LI' 
```
Another Example where we make it equal to the INPUT
```js
let section = document.getElementsByTagName('section')[0];

section.addEventListener('click', (e) => {
  if(e.target.tagName == "INPUT") {
  e.target.style.backgroundColor = 'rgb(255, 255, 0)';
  }
}); 
```
OR we can use Traversing the DOM with parentNode and removeChild in the next example 
```js
listDiv.addEventListener('mouseover', (event) => {
    if (event.target.tagName == 'LI') {
        let li = event.target;
        let ul = li.parentNode;
        ul.removeChild(li);
    }
});
```
The Event Object
Linking back to Event Delegation, we can use the 'event' object from an event listener's callback method to identify different things.

For example, the following code will identify the parent element of the child element which an event was called on:
```js
event.target.parentNode
```
There will be cases where you will need to traverse up the DOM tree, to get to a specific element. This is known as DOM Traversal, and although this is not the best practice as it involves hardcoding and relying on the DOM structure, this is one way to do it:
```js
event.target.parentNode.parentNode.parentNode [...] // Continue until desired element has been reached
```
Using previousElementSibling and insertBefore
```js

```
