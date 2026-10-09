/**
 * MoneyNest product content.
 *
 * Every statement here was checked against the MoneyNest repository
 * (CLAUDE.md, billing.js, stripe-config.js, the app UI itself).
 * Do not add claims that the product does not demonstrably support.
 */

export type MnFeature = {
  id: string;
  label: string;
  title: string;
  text: string;
  image: string;
  alt: string;
};

export const MN_FEATURES: MnFeature[] = [
  {
    id: "movements",
    label: "Income & expenses",
    title: "Every movement, recorded in seconds.",
    text: "Add transactions one after another without leaving the form, use guided wizards, or import a CSV or Excel statement from your bank. Categories are suggested automatically and you preview everything before it is saved.",
    image: "/moneynest/desktop-gastos.webp",
    alt: "MoneyNest expenses screen with spending by category and a 12-month evolution chart",
  },
  {
    id: "budgets",
    label: "Budgets",
    title: "Limits that show where you stand.",
    text: "Set monthly, quarterly or annual budgets by category, including investment budgets, and follow progress with alerts as you approach each limit.",
    image: "/moneynest/desktop-presupuestos.webp",
    alt: "MoneyNest budgets screen with category limits and progress bars",
  },
  {
    id: "debts",
    label: "Debts",
    title: "A plan to pay them off.",
    text: "Compare payoff strategies, snowball, avalanche or your own, and follow the projection of each debt over time.",
    image: "/moneynest/desktop-deudas.webp",
    alt: "MoneyNest debts screen with payment strategies and a debt projection",
  },
  {
    id: "goals",
    label: "Goals",
    title: "Targets with a monthly number.",
    text: "Create goals, track progress and see how much to set aside each month to reach them.",
    image: "/moneynest/desktop-objetivos.webp",
    alt: "MoneyNest goals screen with progress toward each target",
  },
  {
    id: "investments",
    label: "Investments",
    title: "Your portfolio, with the returns.",
    text: "Track open and closed positions, realised and unrealised gains, and the return of each investment.",
    image: "/moneynest/desktop-inversiones.webp",
    alt: "MoneyNest investments screen with invested capital, gains and ROI chart",
  },
  {
    id: "networth",
    label: "Net worth",
    title: "What you own, minus what you owe.",
    text: "Net worth is calculated from your accounts and assets minus your debts, and compared with the previous period so you can see what changed and why.",
    image: "/moneynest/desktop-patrimonio.webp",
    alt: "MoneyNest net worth screen comparing the current and previous period",
  },
  {
    id: "analysis",
    label: "Analysis",
    title: "Trends, not just totals.",
    text: "Compare years, and follow your burn rate, savings rate, monthly cash flow and net worth over time. A review centre and a financial calendar sit alongside.",
    image: "/moneynest/desktop-analisis.webp",
    alt: "MoneyNest analysis screen with annual comparison, cash flow and net worth evolution",
  },
];

export const MN_PROBLEM_ITEMS = [
  "Bank accounts",
  "Spreadsheets",
  "Apps",
  "Investments",
  "Debts",
  "Budgets",
  "Goals",
];

export const MN_STEPS = [
  {
    title: "Set up your space",
    text: "A short onboarding asks for your name, your accounts and your categories. No bank connection is needed.",
  },
  {
    title: "Bring in your data",
    text: "Enter movements with guided wizards, or import a CSV or Excel statement. MoneyNest suggests categories, flags duplicates and shows a preview before importing.",
  },
  {
    title: "Understand where you stand",
    text: "The dashboard, budgets, goals and analysis all update from the same data, so the picture stays current as you go.",
  },
];

export const MN_TRUST = [
  {
    title: "Local by default",
    text: "In Local mode your financial data is stored on your own device. You can use the app fully offline and without an account.",
  },
  {
    title: "Sync only if you choose it",
    text: "With a Pro account your data syncs to the cloud so you can use several devices. Access is restricted per user with row-level security.",
  },
  {
    title: "Payments handled by Stripe",
    text: "Payments are processed by Stripe. MoneyNest does not see or store your card number.",
  },
  {
    title: "Optional PIN lock",
    text: "Protect the app on your device with a PIN you set in Settings.",
  },
  {
    title: "Your data stays portable",
    text: "Export a PDF report, an Excel workbook or a JSON backup, plus CSV files for each section.",
  },
  {
    title: "Funded by its plans",
    text: "MoneyNest is paid for by its subscription plans. See the privacy policy in the app for the details of how data is handled.",
  },
];

export const MN_PLANS = [
  {
    name: "Free trial",
    price: "€0",
    period: "",
    text: "100 movements to try every screen. No card required.",
  },
  {
    name: "Local",
    price: "€1",
    period: "per month, or €9.99 per year",
    text: "Unlimited movements. Your data stays on your device and the app works offline. PDF and Excel export.",
  },
  {
    name: "Pro",
    price: "€2",
    period: "per month, or €19.99 per year",
    text: "Everything in Local, plus cloud sync and use across multiple devices.",
  },
];

export const MN_FACTS = [
  "Free to start: 100 movements",
  "Works offline, installable as an app",
  "Available in 7 languages",
];
