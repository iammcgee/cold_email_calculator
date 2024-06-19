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

    if (desiredMeetings && conversionRate && emailsPerDomain && emailsPerLead) {
        const totalLeadsNeeded = Math.ceil(desiredMeetings / conversionRate);
        const totalEmailsNeeded = totalLeadsNeeded * emailsPerLead;
        const totalDomainsNeeded = Math.ceil(totalEmailsNeeded / emailsPerDomain);
        const totalEmailAccountsNeeded = totalEmailsNeeded;

        resultList.innerHTML += `<li>Total Leads Needed: ${totalLeadsNeeded}</li>`;
        resultList.innerHTML += `<li>Total Emails Needed: ${totalEmailsNeeded}</li>`;
        resultList.innerHTML += `<li>Total Domains Needed: ${totalDomainsNeeded}</li>`;
        resultList.innerHTML += `<li>Total Email Accounts Needed: ${totalEmailAccountsNeeded}</li>`;
    } else {
        errorDiv.innerHTML = 'Please fill in all fields.';
        return;
    }

    resultDiv.style.display = 'block';
}
