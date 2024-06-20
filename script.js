function calculate() {
    // Get input values
    const salesCalls = parseFloat(document.getElementById('sales-calls').value) || 0;
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
    
    // KPIs
    const leadsPerClosedDeal = 1 / (0.5 * 0.1 * 0.25 * 0.5 * 0.2); // 400 leads per closed deal
    const leadsPerSalesCall = 1 / (0.5 * 0.1 * 0.25 * 0.5); // 40 leads per sales call

    // Calculations
    const totalLeadsNeeded = salesCalls * leadsPerSalesCall;
    const usableEmailPercentage = 0.75;
    const usableLeads = totalLeadsNeeded / usableEmailPercentage;
    const emailAccountsNeeded = Math.ceil(totalLeadsNeeded / 1000 * 5);
    const domainsNeeded = Math.ceil(emailAccountsNeeded / 2);

    const totalScrapingCredits = usableLeads * emailScrapingCredit;
    const totalVerifyingCredits = usableLeads * emailVerifyingCredit;

    const totalDomainCost = domainsNeeded * costPerDomain;
    const totalEmailAccountCost = emailAccountsNeeded * costPerEmailAccount;
    const totalSmartLeadCost = smartLeadCost;
    const totalZapierCost = zapierCost;
    const totalCalendlyCost = calendlyCost;
    const totalGoogleAdminCost = googleAdminCost;
    const totalScrapingCost = usableLeads * emailScrapingCredit;
    const totalVerifyingCost = usableLeads * emailVerifyingCredit;

    const totalCost = totalDomainCost + totalEmailAccountCost + totalSmartLeadCost + totalZapierCost + totalCalendlyCost + totalGoogleAdminCost + totalScrapingCost + totalVerifyingCost;
    const potentialRevenue = roi * salesCalls * 0.2; // Assuming 20% close rate
    const totalProfit = potentialRevenue - totalCost;

    // Display results
    document.getElementById('results').innerHTML = `
        <h2>Results</h2>
        <p>Domains Needed: ${domainsNeeded}</p>
        <p>Email Accounts Needed: ${emailAccountsNeeded}</p>
        <p>Email Scraping Credits Needed: ${totalScrapingCredits}</p>
        <p>Email Verification Credits Needed: ${totalVerifyingCredits}</p>
        <p>Total Cost: $${totalCost.toFixed(2)}</p>
        <p>Total Revenue: $${potentialRevenue.toFixed(2)}</p>
        <p>Total Profit: $${totalProfit.toFixed(2)}</p>
    `;
}
