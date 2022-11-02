import Shape from "./Shape";

// Leaf
class Rect implements Shape {
    text: string;

    constructor(text: string) {
        this.text = text;
    }

    print(): void {
        console.log("RECT");
    }

    draw(): void {
        console.log("Draw Rect");
    }

    move(): void {
        console.log(`Rect ${this.text} Move`);
    }
}
export default Rect;
