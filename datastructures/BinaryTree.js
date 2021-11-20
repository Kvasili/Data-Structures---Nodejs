/**
 * @Author Konstantinos Vasili
 * @Date November 2021
 * 
 * Implementation of a Binary Tree
 * Every parent node has at most two children
 * 
 * Every node to the left of a parent node is always less than the parent
 * Evey node to the right of a parent node is always greater than the parent
 * 
 * USAGE
 * node BinaryTree.js
 * 
 */


class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null; 
    }
}


class BinarySearchTree{
    constructor(){
        this.root = null; //pertains to a node    
    }

    insert(val){
        let newNode = new Node(val); 

        if(!this.root){
            this.root = newNode; 
            return this; 
        }
        
        let currentNode = this.root; 
        while(true){
            if(val < currentNode.value){
                if(currentNode.left === null){
                    currentNode.left = newNode; 
                    return this; 
                }
                currentNode = currentNode.left;
            }else if(val > currentNode.value){
                if(currentNode.right === null){
                    currentNode.right = newNode; 
                    return this; 
                }
                currentNode = currentNode.right;
            }else{
                console.log("Duplicates are not supported!"); 
                return this;  
            }
        }
        
    }
}

function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }


// console.log(between(0, 10));
let tree = new BinarySearchTree();

for(let i=0;i<100;i++){
    tree.insert( between(0, 1000)); 
}

console.log(tree); 


/**
 * USAGE
 * node BinaryTree.js
 * 
 */
