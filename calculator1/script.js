function calculate(changedInput) {
    const leads = parseInt(document.getElementById('leads').value);
    const domains = parseInt(document.getElementById('domains').value);
    const emailAccountsPerDomain = parseInt(document.getElementById('email_accounts_per_domain').value) || 2;

    const resultList = document.getElementById('resultList');
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');

    resultList.innerHTML = '';
    resultDiv.style.display = 'none';
    errorDiv.innerHTML = '';

    const accountsPer1000Leads = 5;

    let calculatedLeads = leads;
    let calculatedDomains = domains;
    let calculatedEmailAccounts;

    if (changedInput === 'leads' && leads) {
        calculatedEmailAccounts = Math.ceil((leads / 1000) * accountsPer1000Leads);
        calculatedDomains = Math.ceil(calculatedEmailAccounts / emailAccountsPerDomain);
    } else if (changedInput === 'domains' && domains) {
        calculatedEmailAccounts = domains * emailAccountsPerDomain;
        calculatedLeads = Math.floor((calculatedEmailAccounts / accountsPer1000Leads) * 1000);
    } else if (changedInput === 'email_accounts_per_domain' && emailAccountsPerDomain) {
        if (leads) {
            calculatedEmailAccounts = Math.ceil((leads / 1000) * accountsPer1000Leads);
            calculatedDomains = Math.ceil(calculatedEmailAccounts / emailAccountsPerDomain);
        } else if (domains) {
            calculatedEmailAccounts = domains * emailAccountsPerDomain;
            calculatedLeads = Math.floor((calculatedEmailAccounts / accountsPer1000Leads) * 1000);
        }
    }

    if (calculatedLeads || calculatedEmailAccounts || calculatedDomains) {
        resultList.innerHTML += `<li>Total Leads: ${calculatedLeads || leads} / month</li>`;
        resultList.innerHTML += `<li>Total Email Accounts: ${calculatedEmailAccounts} / month</li>`;
        resultList.innerHTML += `<li>Total Domains: ${calculatedDomains} / month</li>`;
        resultDiv.style.display = 'block';
    } else {
        errorDiv.innerHTML = 'Please provide at least one input value.';
    }
}
