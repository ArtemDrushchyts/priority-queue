class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		node.parent = this;
		if(!this.left) {
			this.left = node;
		} else {
			if(!this.right) {
				this.right = node;
			}
		}
	}

	removeChild(node) {
		if (this.left == node) {
			this.left.parent = null;
			this.left = null;
		}
		else if (this.right == node) {
			this.right.parent = null;
			this.right = null;
		} else {
			throw error;
		}
		
	}

	remove() {
		if (this.parent) {
		this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		let parm;
		if(this.parent) {
			if(this.left) {
				this.left.parent = this.parent;
			}
			if(this.right) {
				this.right.parent = this.parent; 
			}
		}
		if(this.parent.parent) {
			if(this.parent === this.parent.parent) {
				this.parent.parent.left = this;
			}
			else {
				this.parent.parent.right = this;
			}
		}
	}
}

module.exports = Node;
