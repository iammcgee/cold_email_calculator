function calculate() {
    const targetEmails = document.getElementById('target_emails').value;
    const totalLeads = document.getElementById('total_leads').value;
    const identifiedEmails = document.getElementById('identified_emails').value;
    const usableEmails = document.getElementById('usable_emails').value;
    const resultList = document.getElementById('resultList');
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');

    resultList.innerHTML = '';
    resultDiv.style.display = 'none';
    errorDiv.innerHTML = '';

    let percentageUsableEmails = 0;

    if (identifiedEmails && usableEmails) {
        percentageUsableEmails = (usableEmails / identifiedEmails) * 100;
    }

    if (targetEmails && percentageUsableEmails) {
        const leadsNeeded = Math.ceil((targetEmails / (percentageUsableEmails / 100)));
        resultList.innerHTML += `<li>Number of Leads to Purchase: ${leadsNeeded}</li>`;
    } else if (totalLeads && identifiedEmails && usableEmails) {
        const riskPercentage = 100 - percentageUsableEmails;
        const totalCreditsNeeded = Math.ceil((totalLeads * (riskPercentage / 100)) / 1000) * 1000;
        resultList.innerHTML += `<li>Total Credits Needed: ${totalCreditsNeeded}</li>`;
    } else if (identifiedEmails && usableEmails) {
        resultList.innerHTML += `<li>Percentage of Usable Emails: ${percentageUsableEmails.toFixed(2)}%</li>`;
    } else {
        errorDiv.innerHTML = 'Please provide the necessary input values.';
        return;
    }

    resultDiv.style.display = 'block';
}

function clearInputs() {
    document.getElementById('target_emails').value = '';
    document.getElementById('total_leads').value = '';
    document.getElementById('identified_emails').value = '';
    document.getElementById('usable_emails').value = '';
    document.getElementById('resultList').innerHTML = '';
    document.getElementById('result').style.display = 'none';
    document.getElementById('error').innerHTML = '';
}
