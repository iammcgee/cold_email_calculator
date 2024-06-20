function calculate(changedInput) {
    const salesCalls = parseInt(document.getElementById('sales_calls').value) || 0;
    const conversionRate = parseFloat(document.getElementById('conversion_rate').value) / 100 || 0.02;
    const leads = parseInt(document.getElementById('leads').value) || 0;
    const domains = parseInt(document.getElementById('domains').value) || 0;
    const emailAccountsPerDomain = parseInt(document.getElementById('email_accounts_per_domain').value) || 2;

    const resultList = document.getElementById('resultList');
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');

    resultList.innerHTML = '';
    resultDiv.style.display = 'none';
    errorDiv.innerHTML = '';

    const accountsPer1000Leads = 5;
    const usableEmailPercentage = 0.75; // 75%
    const costPerCredit = 0.002; // $0.002 per credit
    const domainPrice = 10.37; // $10.37 per domain
    const emailAccountPrice = 7.68; // $7.68 per email account

    let calculatedLeads, calculatedDomains, calculatedEmailAccounts, calculatedSalesCalls;
    let totalEmailAddresses, totalCreditsNeeded, scrapeCreditsNeeded, verifyCreditsNeeded, totalCost;

    if (changedInput === 'sales_calls' && salesCalls) {
        calculatedLeads = Math.ceil(salesCalls / conversionRate);
        calculatedEmailAccounts = Math.ceil((calculatedLeads / 1000) * accountsPer1000Leads);
        calculatedDomains = Math.ceil(calculatedEmailAccounts / emailAccountsPerDomain);
        totalEmailAddresses = Math.ceil((calculatedLeads / usableEmailPercentage) / 1000) * 1000;
        totalCreditsNeeded = totalEmailAddresses;
        scrapeCreditsNeeded = totalCreditsNeeded;
        verifyCreditsNeeded = totalCreditsNeeded;
        totalCost = (calculatedDomains * domainPrice) + (calculatedEmailAccounts * emailAccountPrice) + (totalCreditsNeeded * costPerCredit * 2);
    } else if (changedInput === 'leads' && leads) {
        calculatedSalesCalls = Math.floor(leads * conversionRate);
        calculatedEmailAccounts = Math.ceil((leads / 1000) * accountsPer1000Leads);
        calculatedDomains = Math.ceil(calculatedEmailAccounts / emailAccountsPerDomain);
        totalEmailAddresses = Math.ceil((leads / usableEmailPercentage) / 1000) * 1000;
        totalCreditsNeeded = totalEmailAddresses;
        scrapeCreditsNeeded = totalCreditsNeeded;
        verifyCreditsNeeded = totalCreditsNeeded;
        totalCost = (calculatedDomains * domainPrice) + (calculatedEmailAccounts * emailAccountPrice) + (totalCreditsNeeded * costPerCredit * 2);
    } else if (changedInput === 'domains' && domains) {
        calculatedEmailAccounts = domains * emailAccountsPerDomain;
        calculatedLeads = Math.floor((calculatedEmailAccounts / accountsPer1000Leads) * 1000);
        calculatedSalesCalls = Math.floor(calculatedLeads * conversionRate);
        totalEmailAddresses = Math.ceil((calculatedLeads / usableEmailPercentage) / 1000) * 1000;
        totalCreditsNeeded = totalEmailAddresses;
        scrapeCreditsNeeded = totalCreditsNeeded;
        verifyCreditsNeeded = totalCreditsNeeded;
        totalCost = (domains * domainPrice) + (calculatedEmailAccounts * emailAccountPrice) + (totalCreditsNeeded * costPerCredit * 2);
    } else if (changedInput === 'email_accounts_per_domain' && emailAccountsPerDomain) {
        if (leads) {
            calculatedEmailAccounts = Math.ceil((leads / 1000) * accountsPer1000Leads);
            calculatedDomains = Math.ceil(calculatedEmailAccounts / emailAccountsPerDomain);
        } else if (domains) {
            calculatedEmailAccounts = domains * emailAccountsPerDomain;
            calculatedLeads = Math.floor((calculatedEmailAccounts / accountsPer1000Leads) * 1000);
            calculatedSalesCalls = Math.floor(calculatedLeads * conversionRate);
        }
        totalEmailAddresses = Math.ceil((calculatedLeads / usableEmailPercentage) / 1000) * 1000;
        totalCreditsNeeded = totalEmailAddresses;
        scrapeCreditsNeeded = totalCreditsNeeded;
        verifyCreditsNeeded = totalCreditsNeeded;
        totalCost = (calculatedDomains * domainPrice) + (calculatedEmailAccounts * emailAccountPrice) + (totalCreditsNeeded * costPerCredit * 2);
    } else if (changedInput === 'conversion_rate' && conversionRate) {
        if (salesCalls) {
            calculatedLeads = Math.ceil(salesCalls / conversionRate);
            calculatedEmailAccounts = Math.ceil((calculatedLeads / 1000) * accountsPer1000Leads);
            calculatedDomains = Math.ceil(calculatedEmailAccounts / emailAccountsPerDomain);
        } else if (leads) {
            calculatedSalesCalls = Math.floor(leads * conversionRate);
            calculatedEmailAccounts = Math.ceil((leads / 1000) * accountsPer1000Leads);
            calculatedDomains = Math.ceil(calculatedEmailAccounts / emailAccountsPerDomain);
        }
        totalEmailAddresses = Math.ceil((calculatedLeads / usableEmailPercentage) / 1000) * 1000;
        totalCreditsNeeded = totalEmailAddresses;
        scrapeCreditsNeeded = totalCreditsNeeded;
        verifyCreditsNeeded = totalCreditsNeeded;
        totalCost = (calculatedDomains * domainPrice) + (calculatedEmailAccounts * emailAccountPrice) + (totalCreditsNeeded * costPerCredit * 2);
    }

    if (calculatedLeads || calculatedEmailAccounts || calculatedDomains || calculatedSalesCalls) {
        resultList.innerHTML += `<li>Total Sales Calls: ${calculatedSalesCalls || salesCalls} / month</li>`;
        resultList.innerHTML += `<li>Total Leads: ${calculatedLeads || leads} / month</li>`;
        resultList.innerHTML += `<li>Total Email Accounts: ${calculatedEmailAccounts} / month</li>`;
        resultList.innerHTML += `<li>Total Domains: ${calculatedDomains} / month</li>`;
        resultList.innerHTML += `<li>Total Email Addresses Needed: ${totalEmailAddresses} / month</li>`;
        resultList.innerHTML += `<li>Total Credits Needed: ${totalCreditsNeeded} / month</li>`;
        resultList.innerHTML += `<li>Total Cost: $${totalCost.toFixed(2)} / month</li>`;
        resultDiv.style.display = 'block';
    } else {
        errorDiv.innerHTML = 'Please provide at least one input value.';
    }
}
