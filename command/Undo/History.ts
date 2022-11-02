import UndoableCommand from "./UndoableCommand";

class History {
    private history: UndoableCommand[];

    constructor() {
        this.history = [];
    }

    push(command: UndoableCommand) {
        this.history = [...this.history, command];
    }

    pop() {
        if (this.history.length > 0) {
            const lastCommand = this.history.pop();
            return lastCommand;
        }
    }
}

export default History;
