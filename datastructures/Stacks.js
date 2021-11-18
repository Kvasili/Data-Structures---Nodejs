/**
 * @Author Konstantinos Vasili
 * @Date November 2021
 * 
 * 
 * USAGE
 * node Stack.js
 * 
 * 
 * Implementation of a LIFO  data structure
 * The last element addet to the Stack is the first to be removed
 * 
 */

class Node{
    constructor(val){
        this.val = val; 
        this.next = null; 
    }
}


class Stack{
    constructor(){
        this.first = null;
        this.last = null; 
        this.length = 0 ; 
    }

    push(val){
        /**
         * Adds a new node at the beginning of the stack
         */
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode; 
        }else{
            let currentFirstNode = this.first; 
            this.first = newNode;
            this.first.next = currentFirstNode; 
            this.length ++; 
        }

        return this; 
    }

    pop(){
        /**
         * Removes a new node from the beginning of the List
         */
        if(this.length === 0) return null; 
        let currentNode = this.first;

        if(this.length === 1){
            this.first = null;
            this.last = null;
        }else{
            this.first = currentNode.next; 
            this.length -- ;
        }
        
        return currentNode; 
    }

}

let stack = new Stack(); 

let iter = 5; 
for(let i=0;i<iter;i++){
    stack.push(`A_${i}`);
} 

console.log(stack); 
console.log("///////////////////////////////////////////////////"); 
stack.pop(); 
console.log(stack); 

///////////////////////////////////////////////////
/**
 * node Stacks.js
 */