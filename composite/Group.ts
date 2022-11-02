import Shape from "./Shape.js";

// Containers
class Group implements Shape {
    // Declarations
    items: Shape[];

    // Just for debug
    text: string;

    constructor(text: string) {
        this.items = [];
        this.text = text;
    }

    print(): void {
        this.items.forEach((shape) => {
            shape.print();
        });
        console.log("GROUP");
    }

    draw(): void {
        this.items.forEach((shape) => {
            shape.draw();
        });
    }

    add(item: Shape) {
        this.items.push(item);
    }

    move() {
        this.items.forEach((shape) => {
            shape.move();
        });
    }
}

export default Group;
