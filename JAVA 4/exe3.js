let styles = [
    { styleName: "color", value: "red" },
    { styleName: "font-size", value: "20px" },
    { styleName: "text-align", value: "center" },
    { styleName: "text-decoration", value: "underline" }
];

function applyStyles(stylesArray, text) {
    let styleString = stylesArray.map(item => `${item.styleName}: ${item.value}`).join("; ");
    
    document.write(`<p style="${styleString}">${text}</p>`);
}