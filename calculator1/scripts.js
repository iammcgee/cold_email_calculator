function calculate(changedInput) {
    const leads = document.getElementById('leads').value;
    const domains = document.getElementById('domains').value;
    const emailAccountsPerDomain = document.getElementById('email_accounts_per_domain').value;

    const resultList = document.getElementById('resultList');
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');

    resultList.innerHTML = '';
    resultDiv.style.display = 'none';
    errorDiv.innerHTML = '';

    const accountsPer1000Leads = 5;
    const accountsPerDomain = emailAccountsPerDomain || 2;

    let calculatedLeads, calculatedDomains, calculatedEmailAccounts;

    if (changedInput === 'leads' && leads) {
        calculatedEmailAccounts = Math.ceil((leads / 1000) * accountsPer1000Leads);
        calculatedDomains = Math.ceil(calculatedEmailAccounts / accountsPerDomain);
    } else if (changedInput === 'domains' && domains) {
        calculatedEmailAccounts = domains * accountsPerDomain;
        calculatedLeads = Math.floor((calculatedEmailAccounts / accountsPer1000Leads) * 1000);
    } else if (changedInput === 'email_accounts_per_domain' && emailAccountsPerDomain) {
        if (leads) {
            calculatedEmailAccounts = Math.ceil((leads / 1000) * accountsPer1000Leads);
            calculatedDomains = Math.ceil(calculatedEmailAccounts / accountsPerDomain);
        } else if (domains) {
            calculatedEmailAccounts = domains * accountsPerDomain;
            calculatedLeads = Math.floor((calculatedEmailAccounts / accountsPer1000Leads) * 1000);
        }
    }

    if (calculatedLeads || calculatedEmailAccounts || calculatedDomains) {
        resultList.innerHTML += `<li>Total Leads: ${calculatedLeads || leads}</li>`;
        resultList.innerHTML += `<li>Total Email Accounts: ${calculatedEmailAccounts}</li>`;
        resultList.innerHTML += `<li>Total Domains: ${calculatedDomains}</li>`;
    } else {
        errorDiv.innerHTML = 'Please provide at least one input value.';
        return;
    }

    resultDiv.style.display = 'block';
}


