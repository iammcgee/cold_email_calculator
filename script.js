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
    const openRate = 0.50;
    const replyRate = 0.10;
    const interestedReplyRate = 0.25;
    const callBookRate = 0.50;
    const closeRate = 0.20;
    
    const leadsPerClosedDeal = 1 / (openRate * replyRate * interestedReplyRate * callBookRate * closeRate); // 400 leads per closed deal
    const leadsPerSalesCall = 1 / (openRate * replyRate * interestedReplyRate * callBookRate); // 40 leads per sales call

    // Calculations
    const totalLeadsNeeded = salesCalls * leadsPerSalesCall;
    const usableEmailPercentage = 0.75;
    const usableLeads = totalLeadsNeeded / usableEmailPercentage;
    const emailAccountsNeeded = Math.ceil(totalLeadsNeeded / 1000 * 5);
    const domainsNeeded = Math.ceil(emailAccountsNeeded / 2);

    const totalScrapingCredits = usableLeads;
    const totalVerifyingCredits = totalLeadsNeeded;

    const totalDomainCost = domainsNeeded * costPerDomain;
    const totalEmailAccountCost = emailAccountsNeeded * costPerEmailAccount;
    const totalSmartLeadCost = smartLeadCost;
    const totalZapierCost = zapierCost;
    const totalCalendlyCost = calendlyCost;
    const totalGoogleAdminCost = googleAdminCost;
    const totalScrapingCost = totalScrapingCredits * emailScrapingCredit;
    const totalVerifyingCost = totalVerifyingCredits * emailVerifyingCredit;

    const totalCost = totalDomainCost + totalEmailAccountCost + totalSmartLeadCost + totalZapierCost + totalCalendlyCost + totalGoogleAdminCost + totalScrapingCost + totalVerifyingCost;
    const potentialRevenue = roi * salesCalls * closeRate; // Assuming 20% close rate
    const totalProfit = potentialRevenue - totalCost;

    // Display results
    document.getElementById('results').innerHTML = `
        <h2>Results</h2>
        <p>Domains Needed: ${domainsNeeded}</p>
        <p>Email Accounts Needed: ${emailAccountsNeeded}</p>
        <p>Total Email Scraping Credits Needed: ${totalScrapingCredits}</p>
        <p>Total Email Leads Expected (75% of scraping credits): ${totalScrapingCredits * usableEmailPercentage}</p>
        <p>Total Email Verification Credits Needed: ${totalVerifyingCredits}</p>
        <p>Total Cost: $${totalCost.toFixed(2)}</p>
        <h2>Target Campaign KPIs</h2>
        <p>Open rates (50%): ${totalLeadsNeeded * openRate}</p>
        <p>Reply rate (10%): ${totalLeadsNeeded * openRate * replyRate}</p>
        <p>Interested reply rate (25%): ${totalLeadsNeeded * openRate * replyRate * interestedReplyRate}</p>
        <p>Call book rate (50%): ${totalLeadsNeeded * openRate * replyRate * interestedReplyRate * callBookRate}</p>
        <p>Close rate (20%): ${totalLeadsNeeded * openRate * replyRate * interestedReplyRate * callBookRate * closeRate}</p>
        <p>Total Revenue based on close rate: $${potentialRevenue.toFixed(2)}</p>
        <p>Total Profit based on Revenue minus cost of the email assets: $${totalProfit.toFixed(2)}</p>
    `;
}
