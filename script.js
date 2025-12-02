async function solveMystery() {
    const mystery = document.getElementById("mysteryInput").value;

    if(!mystery){
        alert("Bhai mystery toh daal 😭");
        return;
    }

    document.getElementById("resultText").innerText = "Solving... 🔍";

    const response = await fetch("https://test-backend-crlb.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: mystery })
    });

    const data = await response.json();

    document.getElementById("resultText").innerText = data.answer;
}
