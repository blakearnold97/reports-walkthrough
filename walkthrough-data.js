const PROD_BASE = 'https://web-production-83e37.up.railway.app';
const CLIENT_TOKEN = '227b4c43-90bf-4476-9b0a-94932003c2a7';

const WALKTHROUGH_MODULES = [
  {
    id: 'welcome',
    title: 'Welcome',
    icon: '\u{1F3E0}',
    steps: [
      {
        id: 'welcome-intro',
        title: 'What is Reports?',
        description: 'CleverProfits Reports is the team\'s financial reporting dashboard. It pulls data from QuickBooks Online, applies our proprietary Chart of Accounts mapping, and generates monthly financial playbooks for every client. This walkthrough will guide you through each module using a live demo client called <strong>Training Ground</strong>.',
        iframe: null,
        image: 'monthly-tab-preview.png',
      },
      {
        id: 'welcome-login',
        title: 'How to Log In',
        description: 'Reports uses email-based sign-in. Enter your CleverProfits email, receive a code, and you\'re in. <strong>You must log in before the embedded previews in this walkthrough will work.</strong> Click the button below to open the login page in a new tab, then come back here and continue.',
        iframe: null,
        link: `${PROD_BASE}/login`,
        linkLabel: 'Open Reports Login',
        note: 'Log into Reports first in the new tab. The iframe previews in this walkthrough share your browser session, so you only need to log in once.',
      },
      {
        id: 'welcome-nav',
        title: 'Navigation Overview',
        description: 'Once logged in, you land on a client dashboard. The top nav has tabs for <strong>Monthly</strong>, <strong>Budget</strong>, and any enabled <strong>Plugins</strong>. The admin panel (gear icon) is where you manage clients, team members, COA mappings, and sync health.',
        iframe: `${PROD_BASE}/r/${CLIENT_TOKEN}`,
      },
    ],
  },
  {
    id: 'admin',
    title: 'Admin Panel',
    icon: '\u{2699}\u{FE0F}',
    steps: [
      {
        id: 'admin-list',
        title: 'Client List',
        description: 'The Admin Panel opens to the client list. Each card shows the client name, sync status, and last sync time. Click any client to drill into their settings. Use the search bar to filter by name.',
        iframe: `${PROD_BASE}/admin`,
      },
      {
        id: 'admin-detail',
        title: 'Client Detail Page',
        description: 'Each client has tabs for <strong>Overview</strong>, <strong>COA Mapping</strong>, <strong>Add-ons</strong>, and more. The overview shows connection status, QBO company info, and sync health at a glance.',
        iframe: `${PROD_BASE}/admin/clients/training_ground`,
      },
      {
        id: 'admin-team',
        title: 'Team & Permissions',
        description: 'The Team page shows all team members with their roles and access levels. Admins can invite new members, change roles, and revoke access. Each team member sees only the clients they\'re assigned to.',
        iframe: `${PROD_BASE}/admin/team`,
      },
      {
        id: 'admin-settings',
        title: 'Settings',
        description: 'Global settings for the Reports app. Includes organization preferences, default report configurations, and system-wide toggles.',
        iframe: `${PROD_BASE}/admin/settings`,
      },
    ],
  },
  {
    id: 'monthly',
    title: 'Monthly Tab',
    icon: '\u{1F4CA}',
    steps: [
      {
        id: 'monthly-playbook',
        title: 'Playbook Cards',
        description: 'The Monthly tab is the heart of Reports. Playbook cards give you a snapshot of each financial area: Revenue, COGS, Labor, Operating Expenses, and more. Each card shows the current month vs. budget with a trend indicator. Click a card to see the detailed breakdown.',
        iframe: `${PROD_BASE}/r/${CLIENT_TOKEN}?view=monthly`,
      },
      {
        id: 'monthly-revenue',
        title: 'Revenue Trend & Cash',
        description: 'The revenue trend chart shows month-over-month revenue with a trailing average. Below it, the cash position card shows current bank balances and cash flow direction. These update automatically with each sync.',
        iframe: `${PROD_BASE}/r/${CLIENT_TOKEN}?view=monthly`,
        note: 'Scroll down in the iframe to see the revenue trend chart and cash position below the playbook cards.',
      },
      {
        id: 'monthly-budget',
        title: 'Budget vs Actuals',
        description: 'Each playbook card compares actuals against budget. Green means under budget, red means over. The variance column shows both dollar and percentage differences. This is the core of the CFO review process.',
        iframe: `${PROD_BASE}/r/${CLIENT_TOKEN}?view=monthly`,
      },
      {
        id: 'monthly-vendor',
        title: 'Vendor Insights',
        description: 'The vendor insights section breaks down spending by vendor within each expense category. Use this to identify unusual charges, duplicate payments, or vendors that need renegotiation.',
        iframe: `${PROD_BASE}/r/${CLIENT_TOKEN}?view=monthly`,
      },
    ],
  },
  {
    id: 'budget',
    title: 'Budget Tab',
    icon: '\u{1F4B0}',
    steps: [
      {
        id: 'budget-overview',
        title: 'Budget Overview',
        description: 'The Budget tab shows all budget line items organized by P&L category. Each row shows the monthly budget amount, YTD budget, YTD actual, and variance. This is where CFOs set and adjust client budgets.',
        iframe: `${PROD_BASE}/r/${CLIENT_TOKEN}?view=budget`,
      },
      {
        id: 'budget-labor',
        title: 'Labor Budget',
        description: 'The Labor sub-tab breaks down payroll budgets by role or department. It includes salary, benefits, and payroll tax projections. This is critical for clients where labor is the largest expense category.',
        iframe: `${PROD_BASE}/r/${CLIENT_TOKEN}?view=budget&btab=labor`,
      },
      {
        id: 'budget-adding',
        title: 'Adding Line Items',
        description: 'To add a budget line item, click the "+ Add" button in any category section. Select the account from the COA dropdown, enter monthly amounts (or use the "apply to all months" shortcut), and save. Budget changes take effect immediately in the Monthly tab comparisons.',
        iframe: `${PROD_BASE}/r/${CLIENT_TOKEN}?view=budget`,
        note: 'Try adding a test line item in Training Ground to see how it flows through to the Monthly playbook cards.',
      },
    ],
  },
  {
    id: 'plugins',
    title: 'Plugins',
    icon: '\u{1F9E9}',
    steps: [
      {
        id: 'plugins-what',
        title: 'What Are Plugins?',
        description: 'Plugins extend Reports with client-specific features. They\'re modular add-ons that appear as extra tabs on the client dashboard. Each plugin is built by the team and can be enabled per-client. Examples include ad spend tracking, custom KPI dashboards, and industry-specific reports.',
        iframe: `${PROD_BASE}/admin/plugins`,
      },
      {
        id: 'plugins-enabling',
        title: 'Enabling a Plugin',
        description: 'To enable a plugin for a client, go to the client\'s detail page in Admin, click the <strong>Add-ons</strong> tab, and toggle the plugin on. Some plugins require additional configuration (like API keys or account IDs) before they activate.',
        iframe: `${PROD_BASE}/admin/clients/training_ground?tab=add-ons`,
      },
      {
        id: 'plugins-examples',
        title: 'Plugin Examples',
        description: 'Current plugins include: <strong>Ad Spend Tracker</strong> (pulls Meta/Google ad data), <strong>Budget Tab</strong> (the budget system you just saw), and more in development. The plugin architecture makes it easy for the team to build new features without touching the core codebase.',
        iframe: `${PROD_BASE}/admin/plugins`,
      },
    ],
  },
  {
    id: 'coa',
    title: 'COA Mapping',
    icon: '\u{1F5C2}\u{FE0F}',
    steps: [
      {
        id: 'coa-reference',
        title: 'The Reference COA',
        description: 'The Reference Chart of Accounts is CleverProfits\' universal translator. Every client\'s QBO accounts get mapped to our standard buckets (Revenue, COGS, Labor, OpEx, etc.). This is how we produce consistent reports across 100+ clients with wildly different account structures. The Reference COA is our core IP — it standardizes financial reporting regardless of the source.',
        iframe: null,
      },
      {
        id: 'coa-mapping',
        title: 'Mapping Accounts',
        description: 'On the client\'s COA tab, you\'ll see every QBO account listed with its current bucket assignment. To remap an account, click the bucket dropdown and select the correct category. Changes apply on the next sync. If an account is unmapped, it shows as "Uncategorized" in reports — always map new accounts promptly.',
        iframe: `${PROD_BASE}/admin/clients/training_ground?tab=coa`,
        note: 'The COA mapping page shows all accounts from QBO. Look for the bucket dropdown on each row — that\'s where you assign accounts to the correct reporting category.',
      },
    ],
  },
  {
    id: 'sync',
    title: 'Sync Engine',
    icon: '\u{1F504}',
    steps: [
      {
        id: 'sync-how',
        title: 'How Sync Works',
        description: 'The sync engine connects to each client\'s QBO via OAuth and pulls trial balance data, account lists, and transaction details on a scheduled basis. Data flows through the COA mapping layer, gets categorized into our standard buckets, and lands in the reports database. Syncs run automatically but can also be triggered manually.',
        iframe: null,
      },
      {
        id: 'sync-health',
        title: 'Sync Health Dashboard',
        description: 'The Sync Health page shows every client\'s sync status at a glance. Green = healthy (synced recently), Yellow = stale (hasn\'t synced in 24+ hours), Red = failed (error on last attempt). Click any client to see detailed sync logs and error messages.',
        iframe: `${PROD_BASE}/admin/sync-health`,
      },
      {
        id: 'sync-trigger',
        title: 'Triggering a Sync',
        description: 'To manually trigger a sync, go to the client detail page and click the sync button. This is useful after a client makes changes in QBO that you need reflected immediately. The sync typically takes 30-60 seconds depending on the client\'s data volume.',
        iframe: `${PROD_BASE}/admin/clients/training_ground`,
        note: 'You can trigger a sync for Training Ground here. Watch the status indicator change from idle to syncing to complete.',
      },
    ],
  },
  {
    id: 'tools',
    title: 'Internal Tools',
    icon: '\u{1F6E0}\u{FE0F}',
    steps: [
      {
        id: 'tools-overview',
        title: 'Tools Overview',
        description: 'The Internal Tools section houses utilities built for the CFO team. These are power-user features for account reconciliation, payroll verification, quick report generation, and bank data analysis.',
        iframe: `${PROD_BASE}/admin/tools`,
      },
      {
        id: 'tools-recon',
        title: 'Account Recon',
        description: 'The Account Reconciliation tool compares QBO balances against expected values. Use it to quickly identify discrepancies, missing transactions, or accounts that need attention before month-end close.',
        iframe: `${PROD_BASE}/admin/tools/recon`,
      },
      {
        id: 'tools-payroll',
        title: 'Payroll Recon',
        description: 'The Payroll Reconciliation tool cross-references payroll provider data with QBO entries. It highlights mismatches in gross pay, tax withholdings, and benefit deductions — critical for labor-heavy clients.',
        iframe: `${PROD_BASE}/admin/tools/payroll-recon`,
      },
      {
        id: 'tools-reports',
        title: 'Quick Reports',
        description: 'Quick Reports generates on-demand financial summaries without waiting for the full monthly cycle. Useful for ad-hoc client requests, board meeting prep, or mid-month check-ins.',
        iframe: `${PROD_BASE}/admin/tools/reports`,
      },
    ],
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    icon: '\u{1F527}',
    steps: [
      {
        id: 'trouble-sync',
        title: 'Sync Failures',
        description: 'When a sync fails, check the Sync Health dashboard first. Common causes: <strong>expired OAuth token</strong> (client needs to re-authorize), <strong>QBO API rate limit</strong> (wait and retry), or <strong>network timeout</strong> (usually resolves on retry). If a client shows red for 24+ hours, escalate to Blake.',
        iframe: `${PROD_BASE}/admin/sync-health`,
      },
      {
        id: 'trouble-missing',
        title: 'Missing Data',
        description: 'If a report shows missing or zero data: <strong>1)</strong> Check if the sync completed successfully. <strong>2)</strong> Verify the date range — Reports pulls current fiscal year by default. <strong>3)</strong> Check COA mapping — unmapped accounts won\'t appear in reports. <strong>4)</strong> Look at the QBO source — if data isn\'t in QBO, it won\'t be in Reports.',
        iframe: `${PROD_BASE}/admin/clients/training_ground`,
      },
      {
        id: 'trouble-bucket',
        title: 'Wrong Bucket Assignment',
        description: 'If an account appears in the wrong section of a report (e.g., a labor expense showing under Operating Expenses), the fix is in COA Mapping. Go to the client\'s COA tab, find the account, and reassign it to the correct bucket. The change will be reflected after the next sync or page refresh.',
        iframe: `${PROD_BASE}/admin/clients/training_ground?tab=coa`,
      },
    ],
  },
];
