import Document from "../Document";
import BoldCommand from "./BoldCommandUndo";
import ItalicCommand from "./ItalicCommandUndo";

import Button from "../Button";
import CheckBox from "../CheckBox";

import History from "./History";

// initial
const document = new Document();
const history = new History();
const boldCommand = new BoldCommand(document, history);
const italicCommand = new ItalicCommand(document, history);
console.log(document.getTextContent());

// click 1
const button = new Button(italicCommand);
button.click();

// click 1
const checkbox = new CheckBox(boldCommand);
checkbox.check();

// click 2
const checkbox2 = new CheckBox(boldCommand);
checkbox2.check();

console.log(document.getTextContent());
console.log(history);

history.pop()?.unexecute();
history.pop()?.unexecute();

console.log(document.getTextContent());
