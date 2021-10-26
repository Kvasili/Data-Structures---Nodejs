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

}

let list = new DoublyLinkedList();

let iter = 30; 
for(let i=0;i<iter;i++){
    list.push(`A_${i}`);
} 

console.log(list);

///////////////////////////////////////////////////
/**
 * node DoublyLinkedList.js
 */