import Document from "../Document";
import UndoableCommand from "./UndoableCommand";
import History from "./History";

class BoldCommand implements UndoableCommand {
    private document: Document;
    private prevContent: string;
    private history: History;

    constructor(document: Document, history: History) {
        this.document = document;
        this.history = history;
        this.prevContent = "";
    }

    public execute() {
        this.prevContent = this.document.getTextContent();
        this.document.makeBold();

        const addedCommand = {
            ...this,
            execute: this.execute,
            unexecute: this.unexecute,
        };
        this.history.push(addedCommand);
    }

    public unexecute() {
        this.document.setTextContent(this.prevContent);
    }
}

export default BoldCommand;
