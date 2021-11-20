/**
 * @Author Konstantinos Vasili
 * @Date November 2021
 * 
 * 
 * USAGE
 * node Queue.js
 * 
 * 
 * Implementation of a FIFO  data structure
 * Supports only two actions --> adding data, removing data
 * The first element added to the Stack is the first to be removed
 * 
 */

 class Node{
    constructor(val){
        this.val = val; 
        this.next = null; 
    }
}


class Queue{
    constructor(){
        this.first = null;
        this.last = null; 
        this.length = 0 ; 
    }

    insert(val){
        /**
         * Adds a new node at the end of the queue
         */
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode; 
        }else{
            this.last.next = newNode; 
            this.last = newNode; 
            this.length ++; 
        }

        return this; 
    }

    remove(){
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
        
        return currentNode.val; 
    }

}

let q = new Queue();

let iter = 10; 

for(let i=0;i<iter;i++){
    q.insert(`A_${i}`);
} 

console.log(q);

console.log(q.remove()); 
console.log(q.remove().next); 

///////////////////////////////////////////////////
/**
 * node Queues.js
 */