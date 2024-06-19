function calculate() {
    const targetEmails = document.getElementById('target_emails').value;
    const totalLeads = document.getElementById('total_leads').value;
    const riskPercentage = document.getElementById('risk_percentage').value;
    const resultList = document.getElementById('resultList');
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');

    resultList.innerHTML = '';
    resultDiv.style.display = 'none';
    errorDiv.innerHTML = '';

    if (targetEmails) {
        const totalCreditsNeeded = Math.ceil((targetEmails / (1 - (riskPercentage / 100))) / 1000) * 1000;
        resultList.innerHTML += `<li>Total Credits Needed: ${totalCreditsNeeded}</li>`;
    } else if (totalLeads) {
        const riskLeads = totalLeads * (riskPercentage / 100);
        const usableEmails = totalLeads - riskLeads;
        resultList.innerHTML += `<li>Usable Emails: ${Math.floor(usableEmails)}</li>`;
    } else if (riskPercentage) {
        errorDiv.innerHTML = 'Please provide either target emails or total leads.';
        return;
    } else {
        errorDiv.innerHTML = 'Please provide at least one input value.';
        return;
    }

    resultDiv.style.display = 'block';
}

function clearInputs() {
    document.getElementById('target_emails').value = '';
    document.getElementById('total_leads').value = '';
    document.getElementById('risk_percentage').value = '';
    document.getElementById('resultList').innerHTML = '';
    document.getElementById('result').style.display = 'none';
    document.getElementById('error').innerHTML = '';
}
