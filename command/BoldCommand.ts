import Document from "./Document";
//import UndoableCommand from "./Undo/UndoableCommand";
import Command from "./Command";

class BoldCommand implements Command {
    private document: Document;
    //private prevContent: string;

    constructor(document: Document) {
        this.document = document;
        // this.prevContent = "";
    }

    execute() {
        //this.prevContent = this.document.getTextContent();
        this.document.makeBold();
    }
}

export default BoldCommand;
