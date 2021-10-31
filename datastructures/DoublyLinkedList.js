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
        //this.other = [];   
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
                this.tail = currentTail.prev; 
                this.tail.next = null; 
                currentTail.prev = null; 
            }
            this.length -- ; 
            return currentTail; 
        }
    }

    shift(){
        /**
         * Removes a node from the beginning of the list
         */
        if(!this.head) return undefined; 
        else{
            let currentHead = this.head;

            if(this.length === 1) {
                this.head = null;
                this.tail = null; 
            }else{

                this.head = currentHead.next;
                this.head.prev = null;
                currentHead.next = null;
                
            }
            
            this.length --; 
            return currentHead; 
        }
       
    }

    unshift(val){
        /**
         * Adds a node to the beginning of the list
         */
         let newNode = new Node(val);
         if(!this.head){
             this.head = newNode;
             this.tail = newNode; 
         }else{
             let currentHead = this.head;
             this.head = newNode; 
             currentHead.prev = this.head;
             this.head.next = currentHead; 
         }
 
         this.length ++ ;
         return this; 
       
    }

    get(index){
        /**
         * Accesses a node in a Doubly Linked List by its position
         */
        if(index < 0 || index >= this.length) return null;
        else{
            if(this.length-index>=this.length/2){
                console.log("WORKING FROM START.")
                let counter = 0; 
                let currentNode = this.head;
                while(currentNode){
                    if(counter == index){
                        return currentNode; 
                    }
                    currentNode = currentNode.next; 
                    counter++; 
                }
            }else{
                console.log("WORKING FROM END.")
                let counter = this.length-1;
                let currentNode = this.tail;
                while(currentNode){
                    if(counter == index){
                        return currentNode;
                    }
                    currentNode = currentNode.prev;
                    counter --; 
                }

            }
        }
       
    }
    
}

let list = new DoublyLinkedList();

let iter = 100; 
for(let i=0;i<iter;i++){
    list.push(`A_${i}`);
} 

//console.log(list);

console.log(list.get(50));

///////////////////////////////////////////////////
/**
 * node DoublyLinkedList.js
 */