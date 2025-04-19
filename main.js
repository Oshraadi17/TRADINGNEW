
document.getElementById("boostForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const service = document.getElementById("service").value;
    const link = document.getElementById("link").value;
    const quantity = document.getElementById("quantity").value;

    if (!link || !quantity) {
        document.getElementById("response").innerText = "אנא מלא את כל השדות.";
        return;
    }

    // Simulate API call
    document.getElementById("response").innerText = `הזמנת ${quantity} ${service} נשלחה בהצלחה! מתחילים מיד...`;
});
