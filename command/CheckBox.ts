import Command from "./Command";
class CheckBox {
    private command: Command;
    private checked: boolean;

    constructor(command: Command) {
        this.command = command;
        this.checked = false;
    }

    check() {
        this.command.execute();
        this.checked = !this.checked;
    }

    getChecked() {
        return this.checked;
    }
}

export default CheckBox;
