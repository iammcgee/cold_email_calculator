function calculate() {
    const desiredMeetings = document.getElementById('desired_meetings').value;
    const conversionRate = document.getElementById('conversion_rate').value / 100;
    const emailsPerDomain = document.getElementById('emails_per_domain').value;
    const emailsPerLead = document.getElementById('emails_per_lead').value;

    const resultList = document.getElementById('resultList');
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');

    resultList.innerHTML = '';
    resultDiv.style.display = 'none';
    errorDiv.innerHTML = '';

    const cost_per_email_account = 0.002; // $0.002 per email account (example cost)

    if (desiredMeetings && conversionRate && emailsPerDomain && emailsPerLead) {
        const totalLeadsNeeded = Math.ceil(desiredMeetings / conversionRate);
        const totalEmailsNeeded = totalLeadsNeeded * emailsPerLead;
        const totalDomainsNeeded = Math.ceil(totalEmailsNeeded / emailsPerDomain);
        const totalEmailAccountsNeeded = Math.ceil(totalEmailsNeeded / 1000) * 1000; // Rounding up to the nearest thousand
        const totalCost = totalEmailAccountsNeeded * cost_per_email_account;

        resultList.innerHTML += `<li>Total Leads Needed: ${totalLeadsNeeded}</li>`;
        resultList.innerHTML += `<li>Total Emails Needed: ${totalEmailsNeeded}</li>`;
        resultList.innerHTML += `<li>Total Domains Needed: ${totalDomainsNeeded}</li>`;
        resultList.innerHTML += `<li>Total Email Accounts Needed: ${totalEmailAccountsNeeded}</li>`;
        resultList.innerHTML += `<li>Total Cost: $${totalCost.toFixed(2)}</li>`;
    } else {
        errorDiv.innerHTML = 'Please fill in all fields.';
        return;
    }

    resultDiv.style.display = 'block';
}
