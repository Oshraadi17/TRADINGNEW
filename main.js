
document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const service = document.querySelector('#service').value;
    const link = document.querySelector('#link').value;
    const quantity = document.querySelector('#quantity').value;

    try {
        const res = await fetch('https://tradingbuy-1.onrender.com/api/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ service, link, quantity }),
        });

        const data = await res.json();
        if (data.message) {
            document.getElementById('response').innerText = data.message;
        } else {
            document.getElementById('response').innerText = 'ההזמנה נשלחה, אך לא התקבלה תגובה ברורה.';
        }
    } catch (err) {
        document.getElementById('response').innerText = 'שגיאה בשליחה לשרת.';
    }
});
