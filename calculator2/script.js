function calculate() {
    const usable_emails = document.getElementById('usable_emails').value;
    const resultList = document.getElementById('resultList');
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');

    resultList.innerHTML = '';
    resultDiv.style.display = 'none';
    errorDiv.innerHTML = '';

    const usable_email_percentage = 0.75; // 75%
    const cost_per_credit = 0.002; // $0.002 per credit

    if (usable_emails) {
        const total_email_addresses = usable_emails / usable_email_percentage;
        const total_credits_needed = total_email_addresses; // Assuming 1 credit per email verification
        const total_cost = total_credits_needed * cost_per_credit;

        resultList.innerHTML += `<li>Total Email Addresses Needed: ${Math.ceil(total_email_addresses)}</li>`;
        resultList.innerHTML += `<li>Total Credits Needed: ${Math.ceil(total_credits_needed)}</li>`;
        resultList.innerHTML += `<li>Total Cost: $${total_cost.toFixed(2)}</li>`;
    } else {
        errorDiv.innerHTML = 'Please provide the target number of usable emails.';
        return;
    }

    resultDiv.style.display = 'block';
}
