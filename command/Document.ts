class Document {
    private textContent: string;

    constructor(text = "Hello World") {
        this.textContent = text;
    }

    makeBold() {
        this.textContent = "<b>" + this.textContent + "</b>";
    }

    makeItalic() {
        this.textContent = "<i>" + this.textContent + "</i>";
    }

    getTextContent() {
        return this.textContent;
    }

    setTextContent(textContent: string) {
        this.textContent = textContent;
    }
}

export default Document;
