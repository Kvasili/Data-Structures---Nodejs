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
 * node BinarySearchTree.js
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
                // insert the new node to the left
                if(currentNode.left === null){
                    currentNode.left = newNode; 
                    return this; 
                }
                currentNode = currentNode.left;
            }else if(val > currentNode.value){
                // insert the new node to the right
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

    find(val){

        if(!this.root){
            return null; 
        }

        let currentNode = this.root;

        while(true){

            if(currentNode.value === val){
                return currentNode; 
            }   
            else if(val < currentNode.value){
                if(currentNode.left){
                    currentNode = currentNode.left; 
                }else{
                    return "Value does not exist"; 
                }
                
            }
            else if(val > currentNode.value){
                if(currentNode.right){
                    currentNode = currentNode.right; 
                }else{
                    return "Value does not exist"; 
                }
            }
        } 
    }

    BFS_Traverse(){
        /**
         * Method for visiting eveyr single Node using the 
         * Breadth First Search (BFS) approach.
         * Every node is visited horizontally
         *
         * */
        let node = this.root; 
        let queue = [];
        let visitedNode = [];
        
        queue.push(node); 
        
        while(queue.length){
            
            node = queue.shift();
            //console.log(node);
            visitedNode.push(node.value); 
            
            if(node.left){ queue.push(node.left); }

            if(node.right){ queue.push(node.right); }
            
        }

        return visitedNode; 
    }
}


let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

//console.log(tree); 

console.log(tree.BFS_Traverse());

/**
 * USAGE
 * node BinarySearchTree.js
 * 
 */