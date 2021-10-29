/**
 * @Author Konstantinos Vasili
 * @Date October 2021
 * 
 * 
 * USAGE
 * node DoublyLinkedList.js
 */

 class Node{
    constructor(val){
        this.val = val; //this --> refers to the instance created by the class
        this.next = null;
        this.prev = null;  
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null; 
        this.length = 0 ; 
    }

    push(val){
        /**
         * Adds a new node at the end of the list
         */
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode; 
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail; 
            this.tail = newNode; 
        }

        this.length ++ ;
        return this; 
    }

    pop(){
        /**
         * Removes a node from the end of the Doubly Linked List
         */
        if(!this.tail) return undefined; 
        else{
            let currentTail = this.tail;

            if(this.length == 1) {
                this.head = null;
                this.tail = null; 
            }else{
                currentTail.previous = this.tail; 
                this.tail.next = null; 
                currentTail.previous = null; 
            }
            this.length -- ; 
            return currentTail; 
        }
    }
}

let list = new DoublyLinkedList();

let iter = 20; 
for(let i=0;i<iter;i++){
    list.push(`A_${i}`);
} 

console.log(list);
list.pop();
console.log(list);


///////////////////////////////////////////////////
/**
 * node DoublyLinkedList.js
 */