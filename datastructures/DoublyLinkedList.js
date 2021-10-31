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
            let counter, currentNode; 
            if(this.length-index>=this.length/2){
                //console.log("WORKING FROM START.")
                counter = 0; 
                currentNode = this.head;
                while(currentNode){
                    if(counter == index){
                        return currentNode; 
                    }
                    currentNode = currentNode.next; 
                    counter++; 
                }
            }else{
                //console.log("WORKING FROM END.")
                counter = this.length-1;
                currentNode = this.tail;
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

    set(index, newVall){
        /**Updates the value of a node 
         * based its position to the Linked List
         */
        if(!this.get(index)) return null;
        else{
            this.get(index).val = newVall;
            return true; 
        }
    }

    insert(index, val){
        /**
        * Adds a node to the Doubly Linked List
        * at a specific given position
        */
       if(index < 0 || index > this.length){
           return false; 
       }else if(index == this.length){
           this.push(val); 
           return true; 
       }else if(index == 0){
           this.unshift(val); 
           return true; 
       }else{
           let beforeNode = this.get(index-1); // 1
           let afterNode = beforeNode.next; // 2
           let newNode = new Node(val);
           beforeNode.next = newNode;
           newNode.next = afterNode;
           afterNode.prev = newNode; 
           newNode.prev = beforeNode; 
           this.length ++;
           return true; 
       }

   }

   remove(index){
    /**
     * Removes a node from the list at a 
     * specific position
     */
    if(index < 0 || index >= this.length){
        return undefined;
    }
    else if(index == this.length-1){
        return this.pop();
    }
    else if(index == 0){
        return this.shift();
    }else{
        var prevNode = this.get(index-1);
        var removedNode = prevNode.next; 
        prevNode.next = removedNode.next;
        removedNode.next.prev = prevNode;  
        this.length--; 

        removedNode.next = null;
        removedNode.prev = null; 
        return removedNode; 
    }
}
    
}

let list = new DoublyLinkedList();

// let iter = 5; 
// for(let i=0;i<iter;i++){
//     list.push(`A_${i}`);
// }

list.push("Harry");
list.push('Ron');
list.push('Hermione'); 
console.log(list); // 1 BTC ≈ 52.339.77



console.log(list.remove(0));

console.log(list);

///////////////////////////////////////////////////
/**
 * node DoublyLinkedList.js
 */