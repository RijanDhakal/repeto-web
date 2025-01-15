document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("inp");
    const output = document.getElementById("output");
    const repeatBtn = document.getElementById("repeatBtn");
    const clearInputBtn = document.querySelector(".clrinput");
    const copyOutputBtn = document.querySelector(".cpyoutput");
    const addLine = document.getElementById("addline");
    const addSpace = document.getElementById("addspace");
    const repeatCountInput = document.querySelector(".repeaternum");

    repeatBtn.addEventListener("click", () => {
        const text = input.value.trim();
        const repeatCount = parseInt(repeatCountInput.value) || 0;
        let repeatedText = "";

        if (text && repeatCount > 0) {
            for (let i = 0; i < repeatCount; i++) {
                repeatedText += text;
                if (addLine.checked) repeatedText += "\n";
                if (addSpace.checked) repeatedText += " ";
            }
            output.value = repeatedText.trim();
        } else {
            alert("Please enter valid text and a repeat count!");
        }
    });

    clearInputBtn.addEventListener("click", () => {
        input.value = "";
    });

    copyOutputBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(output.value).then(() => {
            alert("Output copied to clipboard!");
        });
    });
});
