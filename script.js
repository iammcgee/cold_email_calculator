function calculate() {
    // Get input values
    const leads = parseFloat(document.getElementById('leads').value) || 0;
    const domains = parseFloat(document.getElementById('domains').value) || 0;
    const emailAccounts = parseFloat(document.getElementById('email-accounts').value) || 0;
    const budget = parseFloat(document.getElementById('budget').value) || 0;
    const roi = parseFloat(document.getElementById('roi').value) || 0;

    // Constants
    const costPerDomain = 10.37;
    const costPerEmailAccount = 7.68;
    const smartLeadCost = 94;
    const zapierCost = 31.97;
    const calendlyCost = 13;
    const emailScrapingCredit = 0.004;
    const emailVerifyingCredit = 0.002;
    const googleAdminCost = 7.68;

    // Calculations
    const usableEmailPercentage = 0.75;
    const emailAccountsNeeded = Math.ceil(leads / 1000 * 5);
    const domainsNeeded = Math.ceil(emailAccountsNeeded / 2);
    const leadsWithGivenResources = Math.min(domains * 2 * 1000 / 5, emailAccounts * 1000 / 5);
    const usableLeads = leadsWithGivenResources * usableEmailPercentage;
    const scrapingCredits = leadsWithGivenResources * emailScrapingCredit;
    const verifyingCredits = leadsWithGivenResources * emailVerifyingCredit;

    const totalDomainCost = domainsNeeded * costPerDomain;
    const totalEmailAccountCost = emailAccountsNeeded * costPerEmailAccount;
    const totalSmartLeadCost = smartLeadCost;
    const totalZapierCost = zapierCost;
    const totalCalendlyCost = calendlyCost;
    const totalGoogleAdminCost = googleAdminCost;
    const totalScrapingCost = leadsWithGivenResources * emailScrapingCredit;
    const totalVerifyingCost = leadsWithGivenResources * emailVerifyingCredit;

    const totalCost = totalDomainCost + totalEmailAccountCost + totalSmartLeadCost + totalZapierCost + totalCalendlyCost + totalGoogleAdminCost + totalScrapingCost + totalVerifyingCost;
    const potentialRevenue = roi * (leadsWithGivenResources * 0.5 * 0.1 * 0.25 * 0.5 * 0.2);

    // Display results
    document.getElementById('results').innerHTML = `
        <h2>Results</h2>
        <p>Email Accounts Needed: ${emailAccountsNeeded}</p>
        <p>Domains Needed: ${domainsNeeded}</p>
        <p>Leads that can be targeted: ${leadsWithGivenResources}</p>
        <p>Usable Leads: ${usableLeads}</p>
        <p>Total Cost: $${totalCost.toFixed(2)}</p>
        <p>Potential Revenue: $${potentialRevenue.toFixed(2)}</p>
        <p>ROI: ${(potentialRevenue - totalCost).toFixed(2)}</p>
    `;
}
