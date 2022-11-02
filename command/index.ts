import Document from "./Document";
import BoldCommand from "./BoldCommand";
import Button from "./Button";
import CheckBox from "./CheckBox";

const document = new Document();
console.log(document.getTextContent());

const boldCommand = new BoldCommand(document);
const button = new Button(boldCommand);
button.click();

//const checkbox = new CheckBox(boldCommand);
//checkbox.check();

console.log(document.getTextContent());
