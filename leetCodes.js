"use strict";
class Stack {
    stack = [];
    constructor() { }
    pop() {
        if (this.stack.length - 1 < 0) {
            return null;
        }
        return this.stack.pop();
    }
    push(value) {
        this.stack.push(value);
    }
    peek() {
        return this.stack[this.stack.length - 1];
    }
    isEmpty() {
        return this.stack.length === 0;
    }
}
function parenthesisChecker(parenthesis) {
    let stack = new Stack();
    parenthesis = parenthesis.split(" ").join("");
    for (let i = 0; i < parenthesis.length; i++) {
        if (parenthesis[i] === "(" ||
            parenthesis[i] === "{" ||
            parenthesis[i] === "[") {
            stack.push(parenthesis[i]);
        }
        else {
            if (parenthesis[i] == "}" && stack.peek() == "{") {
                stack.pop();
            }
            else if (parenthesis[i] == ")" && stack.peek() == "(") {
                stack.pop();
            }
            else if (parenthesis[i] === "]" && stack.peek() == "[") {
                stack.pop();
            }
            else {
                return false;
            }
        }
    }
    return stack.isEmpty();
}
console.log(parenthesisChecker("( [])"));
