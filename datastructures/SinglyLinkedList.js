/**
 * @Author Konstantinos Vasili
 * @Date October 2021
 * 
 * 
 * USAGE
 * node SinglyLinkedList.js
 * 
 */
class Node{
    constructor(val){
        this.val = val; //this --> refers to the instance created by the class
        this.next = null; 
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null; 
        this.length = 0 ; 
    }

    push(val){
        /**
         * Adds a new node to the list 
         * */ 
        let newNode = new Node(val);
        if(this.head == null){
            // if there are no nodes on the list
            this.head = newNode;
            this.tail = newNode; 
        }else{
            this.tail.next = newNode; 
            this.tail = newNode; 
        }

        this.length ++;

        return this; //ρ

    }

    pop(){
        /**
         * Removes the last node from the list
         * 
         */
        if(!this.head){
            //console.log('undefined'); 
            return undefined; 
        }else if(this.head == this.tail){
            //there is only one node in the list
            this.head = null;
            this.tail = null;
            this.length --;
        } 
        else {
            let currentItem = this.head.next;
            let prevItem = this.head;
            while(currentItem){
                if(currentItem == this.tail){
                    this.tail = prevItem;
                    this.tail.next = null;  
                    this.length -- ;
                    
                    return currentItem.val; 
                }
                prevItem = currentItem;
                currentItem = currentItem.next;
            }

        }
    }

    shift(){
        /**
         * Removes a new node from the beginning of the List
         */
        if(!this.head){
            //console.log('undefined'); 
            return undefined;
        }
        let currentNode = this.head;
        this.head = currentNode.next; 
        this.length -- ; 
        if(this.length == 0){
            this.tail = null; 
        }
        return currentNode; 

    }

    unshift(val){
        /**
         * Adds a new node at the beginning of the list
         */
        let newNode = new Node(val); 
        if(this.head == null){
            // if there are no nodes on the list
            this.head = newNode;
            this.tail = newNode; 
        }else{
            newNode.next = this.head;
            this.head = newNode;
             
        }
        this.length ++; 
        return this; 

    }

    get(index){
        /** 
         * Retrieves a node by its position
         * in the Linked List
         */
        if (index < 0 || index >= this.length){
            return null; 
        }else{
            let counter = 0; 
            let currentNode = this.head; 
            while(currentNode){
                
                if(counter == index){
                    return currentNode; 
                }
                currentNode = currentNode.next; 
                counter++;
            }
        }
    }

    set(index, val){
        /**
         * Changes the value of a node based on 
         * its position in the Linked List
         */
        if(!this.get(index)){
            return false; 
        }else{
            this.get(index).val = val; 
            return true; 
        }
    }

    insert(index, val){
         /**
         * Adds a node to the Linked List
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
            let prevNode = this.get(index-1);
            let temp = prevNode.next;
            prevNode.next = new Node(val);
            prevNode.next.next = temp;
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
            this.pop();
        }
        else if(index == 0){
            this.shift();
        }else{
            var prevNode = this.get(index-1);
            var removedNode = this.get(index);
            prevNode.next = removedNode.next; 
            this.length--; 

            return removedNode; 
        }
    }

    reverse(){
        /**
         * Reverses the List in place
         */
        if(!this.head){
            return undefined;
        }

        let currentNode = this.head;
        this.head = this.tail;
        this.tail = currentNode;  
        let next ;
        let prev = null; 
    
        while(currentNode){
            next = currentNode.next; 
            currentNode.next = prev;
            prev = currentNode;
            currentNode = next; 

        }

        return this; 
    }

    traverse(){
        /**
         * Loops through all elements of the List
         */
        let currentItem = this.head;
        while(currentItem){
            console.log(currentItem.val);
            currentItem = currentItem.next; 
        }
    }
}

let list = new SinglyLinkedList();
//list.push('A'); 
//list.push('B'); 
let iter = 1000; 
for(let i=0;i<iter;i++){
    list.push(`A_${i}`);
} 

console.log(list);
list.reverse();
console.log(list);
//console.log(list.traverse()); 

///////////////////////////////////////////////////
/**
 * node SinglyLinkedList.js
 */