// Dual-registry blog engine, same contract as qaskills:
// - `posts` map powers /blog/[slug] (miss it = 404)
// - `postList` powers /blog and the sitemap (miss it = invisible)
// Every post needs THREE edits here: import, posts entry, postList entry.
// Batch arrays, when they arrive, spread at the END (last write wins on slug).




import { post as introducingBotskills } from './introducing-botskills';
import { post as onePersonCompanyGrokBot } from './one-person-company-grok-bot';
import { post as approvalGatesForBots } from './approval-gates-for-bots';
import { post as botCostControl } from './bot-cost-control';
import { post as botFailureModes } from './bot-failure-modes';
import { post as botHandoffToHuman } from './bot-handoff-to-human';
import { post as botObservability } from './bot-observability';
import { post as botPromptEngineering } from './bot-prompt-engineering';
import { post as botThatNeverSends } from './bot-that-never-sends';
import { post as grokBotApprovalRulesReversibility } from './grok-bot-approval-rules-reversibility';
import { post as grokBotBoundaries } from './grok-bot-boundaries';
import { post as grokBotChiefOfStaffSetup } from './grok-bot-chief-of-staff-setup';
import { post as grokBotClaudeCodeSkillsCompatibility } from './grok-bot-claude-code-skills-compatibility';
import { post as grokBotCost } from './grok-bot-cost';
import { post as grokBotCursorAccountExplained } from './grok-bot-cursor-account-explained';
import { post as grokBotExamples } from './grok-bot-examples';
import { post as grokBotFirstWeek } from './grok-bot-first-week';
import { post as grokBotGithub } from './grok-bot-github';
import { post as grokBotGmail } from './grok-bot-gmail';
import { post as grokBotGoogleCalendar } from './grok-bot-google-calendar';
import { post as grokBotIntegrationsList } from './grok-bot-integrations-list';
import { post as grokBotMemory } from './grok-bot-memory';
import { post as grokBotNotion } from './grok-bot-notion';
import { post as grokBotPermissionsExplained } from './grok-bot-permissions-explained';
import { post as grokBotPromptsThatWork } from './grok-bot-prompts-that-work';
import { post as grokBotRoutinesVsTriggers } from './grok-bot-routines-vs-triggers';
import { post as grokBotSafetyChecklist } from './grok-bot-safety-checklist';
import { post as grokBotScheduling } from './grok-bot-scheduling';
import { post as grokBotSetupGuide } from './grok-bot-setup-guide';
import { post as grokBotSharedComputerSecurity } from './grok-bot-shared-computer-security';
import { post as grokBotSlack } from './grok-bot-slack';
import { post as grokBotSpendCapAndTokenBurn } from './grok-bot-spend-cap-and-token-burn';
import { post as grokBotStarterRoster } from './grok-bot-starter-roster';
import { post as grokBotSupportedPlatforms } from './grok-bot-supported-platforms';
import { post as grokBotToBugTriage } from './grok-bot-to-bug-triage';
import { post as grokBotToChurnWatch } from './grok-bot-to-churn-watch';
import { post as grokBotToCompetitorMonitoring } from './grok-bot-to-competitor-monitoring';
import { post as grokBotToContentCalendar } from './grok-bot-to-content-calendar';
import { post as grokBotToCustomerOnboarding } from './grok-bot-to-customer-onboarding';
import { post as grokBotToDocCleanup } from './grok-bot-to-doc-cleanup';
import { post as grokBotToExpenseReconciliation } from './grok-bot-to-expense-reconciliation';
import { post as grokBotToHiringScreening } from './grok-bot-to-hiring-screening';
import { post as grokBotToInboxTriage } from './grok-bot-to-inbox-triage';
import { post as grokBotToInvoiceChasing } from './grok-bot-to-invoice-chasing';
import { post as grokBotToKpiReporting } from './grok-bot-to-kpi-reporting';
import { post as grokBotToLeadResearch } from './grok-bot-to-lead-research';
import { post as grokBotToMeetingPrep } from './grok-bot-to-meeting-prep';
import { post as grokBotToNewsletterDigest } from './grok-bot-to-newsletter-digest';
import { post as grokBotToPrReview } from './grok-bot-to-pr-review';
import { post as grokBotToSalesFollowup } from './grok-bot-to-sales-followup';
import { post as grokBotToSocialScheduling } from './grok-bot-to-social-scheduling';
import { post as grokBotToStandup } from './grok-bot-to-standup';
import { post as grokBotToSubscriptionAudit } from './grok-bot-to-subscription-audit';
import { post as grokBotToSupportTriage } from './grok-bot-to-support-triage';
import { post as grokBotTroubleshooting } from './grok-bot-troubleshooting';
import { post as grokBotVsChatgptTasks } from './grok-bot-vs-chatgpt-tasks';
import { post as howToCreateAGrokBot } from './how-to-create-a-grok-bot';
import { post as leastPrivilegeBots } from './least-privilege-bots';
import { post as multiBotTeams } from './multi-bot-teams';
import { post as testingYourBot } from './testing-your-bot';
import { post as whatIsAGrokBot } from './what-is-a-grok-bot';

export interface BlogPost {
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  category: string;
  content: string;
}

export const posts: Record<string, BlogPost> = {
  'introducing-botskills': introducingBotskills,
  'one-person-company-grok-bot': onePersonCompanyGrokBot,
  'approval-gates-for-bots': approvalGatesForBots,
  'bot-cost-control': botCostControl,
  'bot-failure-modes': botFailureModes,
  'bot-handoff-to-human': botHandoffToHuman,
  'bot-observability': botObservability,
  'bot-prompt-engineering': botPromptEngineering,
  'bot-that-never-sends': botThatNeverSends,
  'grok-bot-approval-rules-reversibility': grokBotApprovalRulesReversibility,
  'grok-bot-boundaries': grokBotBoundaries,
  'grok-bot-chief-of-staff-setup': grokBotChiefOfStaffSetup,
  'grok-bot-claude-code-skills-compatibility': grokBotClaudeCodeSkillsCompatibility,
  'grok-bot-cost': grokBotCost,
  'grok-bot-cursor-account-explained': grokBotCursorAccountExplained,
  'grok-bot-examples': grokBotExamples,
  'grok-bot-first-week': grokBotFirstWeek,
  'grok-bot-github': grokBotGithub,
  'grok-bot-gmail': grokBotGmail,
  'grok-bot-google-calendar': grokBotGoogleCalendar,
  'grok-bot-integrations-list': grokBotIntegrationsList,
  'grok-bot-memory': grokBotMemory,
  'grok-bot-notion': grokBotNotion,
  'grok-bot-permissions-explained': grokBotPermissionsExplained,
  'grok-bot-prompts-that-work': grokBotPromptsThatWork,
  'grok-bot-routines-vs-triggers': grokBotRoutinesVsTriggers,
  'grok-bot-safety-checklist': grokBotSafetyChecklist,
  'grok-bot-scheduling': grokBotScheduling,
  'grok-bot-setup-guide': grokBotSetupGuide,
  'grok-bot-shared-computer-security': grokBotSharedComputerSecurity,
  'grok-bot-slack': grokBotSlack,
  'grok-bot-spend-cap-and-token-burn': grokBotSpendCapAndTokenBurn,
  'grok-bot-starter-roster': grokBotStarterRoster,
  'grok-bot-supported-platforms': grokBotSupportedPlatforms,
  'grok-bot-to-bug-triage': grokBotToBugTriage,
  'grok-bot-to-churn-watch': grokBotToChurnWatch,
  'grok-bot-to-competitor-monitoring': grokBotToCompetitorMonitoring,
  'grok-bot-to-content-calendar': grokBotToContentCalendar,
  'grok-bot-to-customer-onboarding': grokBotToCustomerOnboarding,
  'grok-bot-to-doc-cleanup': grokBotToDocCleanup,
  'grok-bot-to-expense-reconciliation': grokBotToExpenseReconciliation,
  'grok-bot-to-hiring-screening': grokBotToHiringScreening,
  'grok-bot-to-inbox-triage': grokBotToInboxTriage,
  'grok-bot-to-invoice-chasing': grokBotToInvoiceChasing,
  'grok-bot-to-kpi-reporting': grokBotToKpiReporting,
  'grok-bot-to-lead-research': grokBotToLeadResearch,
  'grok-bot-to-meeting-prep': grokBotToMeetingPrep,
  'grok-bot-to-newsletter-digest': grokBotToNewsletterDigest,
  'grok-bot-to-pr-review': grokBotToPrReview,
  'grok-bot-to-sales-followup': grokBotToSalesFollowup,
  'grok-bot-to-social-scheduling': grokBotToSocialScheduling,
  'grok-bot-to-standup': grokBotToStandup,
  'grok-bot-to-subscription-audit': grokBotToSubscriptionAudit,
  'grok-bot-to-support-triage': grokBotToSupportTriage,
  'grok-bot-troubleshooting': grokBotTroubleshooting,
  'grok-bot-vs-chatgpt-tasks': grokBotVsChatgptTasks,
  'how-to-create-a-grok-bot': howToCreateAGrokBot,
  'least-privilege-bots': leastPrivilegeBots,
  'multi-bot-teams': multiBotTeams,
  'testing-your-bot': testingYourBot,
  'what-is-a-grok-bot': whatIsAGrokBot,
};

export const postList: Array<{ slug: string } & BlogPost> = [
  { slug: 'introducing-botskills', ...introducingBotskills },
  { slug: 'one-person-company-grok-bot', ...onePersonCompanyGrokBot },
  { slug: 'approval-gates-for-bots', ...approvalGatesForBots },
  { slug: 'bot-cost-control', ...botCostControl },
  { slug: 'bot-failure-modes', ...botFailureModes },
  { slug: 'bot-handoff-to-human', ...botHandoffToHuman },
  { slug: 'bot-observability', ...botObservability },
  { slug: 'bot-prompt-engineering', ...botPromptEngineering },
  { slug: 'bot-that-never-sends', ...botThatNeverSends },
  { slug: 'grok-bot-approval-rules-reversibility', ...grokBotApprovalRulesReversibility },
  { slug: 'grok-bot-boundaries', ...grokBotBoundaries },
  { slug: 'grok-bot-chief-of-staff-setup', ...grokBotChiefOfStaffSetup },
  { slug: 'grok-bot-claude-code-skills-compatibility', ...grokBotClaudeCodeSkillsCompatibility },
  { slug: 'grok-bot-cost', ...grokBotCost },
  { slug: 'grok-bot-cursor-account-explained', ...grokBotCursorAccountExplained },
  { slug: 'grok-bot-examples', ...grokBotExamples },
  { slug: 'grok-bot-first-week', ...grokBotFirstWeek },
  { slug: 'grok-bot-github', ...grokBotGithub },
  { slug: 'grok-bot-gmail', ...grokBotGmail },
  { slug: 'grok-bot-google-calendar', ...grokBotGoogleCalendar },
  { slug: 'grok-bot-integrations-list', ...grokBotIntegrationsList },
  { slug: 'grok-bot-memory', ...grokBotMemory },
  { slug: 'grok-bot-notion', ...grokBotNotion },
  { slug: 'grok-bot-permissions-explained', ...grokBotPermissionsExplained },
  { slug: 'grok-bot-prompts-that-work', ...grokBotPromptsThatWork },
  { slug: 'grok-bot-routines-vs-triggers', ...grokBotRoutinesVsTriggers },
  { slug: 'grok-bot-safety-checklist', ...grokBotSafetyChecklist },
  { slug: 'grok-bot-scheduling', ...grokBotScheduling },
  { slug: 'grok-bot-setup-guide', ...grokBotSetupGuide },
  { slug: 'grok-bot-shared-computer-security', ...grokBotSharedComputerSecurity },
  { slug: 'grok-bot-slack', ...grokBotSlack },
  { slug: 'grok-bot-spend-cap-and-token-burn', ...grokBotSpendCapAndTokenBurn },
  { slug: 'grok-bot-starter-roster', ...grokBotStarterRoster },
  { slug: 'grok-bot-supported-platforms', ...grokBotSupportedPlatforms },
  { slug: 'grok-bot-to-bug-triage', ...grokBotToBugTriage },
  { slug: 'grok-bot-to-churn-watch', ...grokBotToChurnWatch },
  { slug: 'grok-bot-to-competitor-monitoring', ...grokBotToCompetitorMonitoring },
  { slug: 'grok-bot-to-content-calendar', ...grokBotToContentCalendar },
  { slug: 'grok-bot-to-customer-onboarding', ...grokBotToCustomerOnboarding },
  { slug: 'grok-bot-to-doc-cleanup', ...grokBotToDocCleanup },
  { slug: 'grok-bot-to-expense-reconciliation', ...grokBotToExpenseReconciliation },
  { slug: 'grok-bot-to-hiring-screening', ...grokBotToHiringScreening },
  { slug: 'grok-bot-to-inbox-triage', ...grokBotToInboxTriage },
  { slug: 'grok-bot-to-invoice-chasing', ...grokBotToInvoiceChasing },
  { slug: 'grok-bot-to-kpi-reporting', ...grokBotToKpiReporting },
  { slug: 'grok-bot-to-lead-research', ...grokBotToLeadResearch },
  { slug: 'grok-bot-to-meeting-prep', ...grokBotToMeetingPrep },
  { slug: 'grok-bot-to-newsletter-digest', ...grokBotToNewsletterDigest },
  { slug: 'grok-bot-to-pr-review', ...grokBotToPrReview },
  { slug: 'grok-bot-to-sales-followup', ...grokBotToSalesFollowup },
  { slug: 'grok-bot-to-social-scheduling', ...grokBotToSocialScheduling },
  { slug: 'grok-bot-to-standup', ...grokBotToStandup },
  { slug: 'grok-bot-to-subscription-audit', ...grokBotToSubscriptionAudit },
  { slug: 'grok-bot-to-support-triage', ...grokBotToSupportTriage },
  { slug: 'grok-bot-troubleshooting', ...grokBotTroubleshooting },
  { slug: 'grok-bot-vs-chatgpt-tasks', ...grokBotVsChatgptTasks },
  { slug: 'how-to-create-a-grok-bot', ...howToCreateAGrokBot },
  { slug: 'least-privilege-bots', ...leastPrivilegeBots },
  { slug: 'multi-bot-teams', ...multiBotTeams },
  { slug: 'testing-your-bot', ...testingYourBot },
  { slug: 'what-is-a-grok-bot', ...whatIsAGrokBot },
];
