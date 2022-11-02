import Command from "./Command";
class Button {
    private command: Command;

    constructor(command: Command) {
        this.command = command;
    }

    click() {
        this.command.execute();
    }
}

export default Button;
