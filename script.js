function calculate() {
    const leads = document.getElementById('leads').value;
    const domains = document.getElementById('domains').value;
    const email_accounts = document.getElementById('email_accounts').value;
    const resultList = document.getElementById('resultList');
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');

    resultList.innerHTML = '';
    resultDiv.style.display = 'none';
    errorDiv.innerHTML = '';

    const accounts_per_1000_leads = 5;
    const accounts_per_domain = 2;

    if (leads) {
        const email_accounts_needed = (leads / 1000) * accounts_per_1000_leads;
        const domains_needed = email_accounts_needed / accounts_per_domain;

        resultList.innerHTML += `<li>Email Accounts Needed: ${Math.ceil(email_accounts_needed)}</li>`;
        resultList.innerHTML += `<li>Domains Needed: ${Math.ceil(domains_needed)}</li>`;
    } else if (domains) {
        const total_email_accounts = domains * accounts_per_domain;
        const leads_targetable = (total_email_accounts / accounts_per_1000_leads) * 1000;

        resultList.innerHTML += `<li>Email Accounts: ${Math.floor(total_email_accounts)}</li>`;
        resultList.innerHTML += `<li>Leads Targetable: ${Math.floor(leads_targetable)}</li>`;
    } else if (email_accounts) {
        const leads_targetable = (email_accounts / accounts_per_1000_leads) * 1000;
        const domains_needed = email_accounts / accounts_per_domain;

        resultList.innerHTML += `<li>Leads Targetable: ${Math.floor(leads_targetable)}</li>`;
        resultList.innerHTML += `<li>Domains Needed: ${Math.ceil(domains_needed)}</li>`;
    } else {
        errorDiv.innerHTML = 'Please provide at least one input value.';
        return;
    }

    resultDiv.style.display = 'block';
}

