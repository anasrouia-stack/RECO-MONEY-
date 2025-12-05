// =====================
// RECO MONEY SCRIPT
// =====================

const inputAmount = document.getElementById("amount");
const inputDays = document.getElementById("days");
const resultDiv = document.getElementById("result");
const calculateBtn = document.getElementById("calculate");

function calculateRecoMoney() {
    const amount = parseFloat(inputAmount.value);
    const days = parseInt(inputDays.value);

    if (isNaN(amount) || isNaN(days) || amount <= 0 || days <= 0) {
        resultDiv.innerHTML = "<span style='color:red;'>Veuillez entrer des valeurs valides.</span>";
        return;
    }

    const dailyRate = 0.025;
    const total = amount + (amount * dailyRate * days);

    resultDiv.innerHTML = `
        <h3>Résultat</h3>
        <p>Montant de départ : <strong>${amount.toFixed(2)} €</strong></p>
        <p>Durée : <strong>${days} jours</strong></p>
        <p>Total final : <strong>${total.toFixed(2)} €</strong></p>
    `;
}

calculateBtn.addEventListener("click", calculateRecoMoney);
