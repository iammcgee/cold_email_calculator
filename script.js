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

    if (leads) {
        const accounts_per_1000_leads = 5;
        const accounts_per_domain = 2;
        const email_accounts_needed = (leads / 1000) * accounts_per_1000_leads;
        const domains_needed = email_accounts_needed / accounts_per_domain;

        resultList.innerHTML += `<li>Leads: ${leads}</li>`;
        resultList.innerHTML += `<li>Email Accounts Needed: ${Math.ceil(email_accounts_needed)}</li>`;
        resultList.innerHTML += `<li>Domains Needed: ${Math.ceil(domains_needed)}</li>`;
        resultDiv.style.display = 'block';
    } else if (domains && email_accounts) {
        const accounts_per_1000_leads = 5;
        const accounts_per_domain = 2;
        const total_email_accounts = domains * accounts_per_domain;
        const leads_targetable = (total_email_accounts / accounts_per_1000_leads) * 1000;

        resultList.innerHTML += `<li>Domains: ${domains}</li>`;
        resultList.innerHTML += `<li>Email Accounts: ${email_accounts}</li>`;
        resultList.innerHTML += `<li>Leads Targetable: ${Math.floor(leads_targetable)}</li>`;
        resultDiv.style.display = 'block';
    } else {
        errorDiv.innerHTML = 'Please provide the necessary input values.';
    }
}
