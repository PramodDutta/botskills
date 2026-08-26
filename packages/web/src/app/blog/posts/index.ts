// Dual-registry blog engine, same contract as qaskills:
// - `posts` map powers /blog/[slug] (miss it = 404)
// - `postList` powers /blog and the sitemap (miss it = invisible)
// Every post needs THREE edits here: import, posts entry, postList entry.
// Batch arrays, when they arrive, spread at the END (last write wins on slug).















import { post as introducingBotskills } from './introducing-botskills';
import { post as onePersonCompanyGrokBot } from './one-person-company-grok-bot';
import { post as aiAgentPlatformsCompared } from './ai-agent-platforms-compared';
import { post as aiBotsCompleteGuide } from './ai-bots-complete-guide';
import { post as approvalGatesForBots } from './approval-gates-for-bots';
import { post as bestAiBotsForDevelopers } from './best-ai-bots-for-developers';
import { post as bestAiBotsForFounders } from './best-ai-bots-for-founders';
import { post as bestAiBotsForMarketing } from './best-ai-bots-for-marketing';
import { post as bestAiBotsForSales } from './best-ai-bots-for-sales';
import { post as bestAiBotsForSupport } from './best-ai-bots-for-support';
import { post as botCostControl } from './bot-cost-control';
import { post as botDelegationPlaybook } from './bot-delegation-playbook';
import { post as botFailureModes } from './bot-failure-modes';
import { post as botHandoffToHuman } from './bot-handoff-to-human';
import { post as botIntegrationsCompleteGuide } from './bot-integrations-complete-guide';
import { post as botObservability } from './bot-observability';
import { post as botPromptEngineering } from './bot-prompt-engineering';
import { post as botSecurityCompleteGuide } from './bot-security-complete-guide';
import { post as botSystemArchitecture } from './bot-system-architecture';
import { post as botThatNeverSends } from './bot-that-never-sends';
import { post as botdirectoryAlternatives } from './botdirectory-alternatives';
import { post as botsAndAsana } from './bots-and-asana';
import { post as botsAndAws } from './bots-and-aws';
import { post as botsAndClickup } from './bots-and-clickup';
import { post as botsAndFigma } from './bots-and-figma';
import { post as botsAndJiraServiceManagement } from './bots-and-jira-service-management';
import { post as botsAndMixpanel } from './bots-and-mixpanel';
import { post as botsAndMonday } from './bots-and-monday';
import { post as botsAndSupabase } from './bots-and-supabase';
import { post as botsAndZendesk } from './bots-and-zendesk';
import { post as botsForAgencies } from './bots-for-agencies';
import { post as botsForConsultants } from './bots-for-consultants';
import { post as botsForEcommerce } from './bots-for-ecommerce';
import { post as botsForEngineers } from './bots-for-engineers';
import { post as botsForEveryRole } from './bots-for-every-role';
import { post as botsForFinance } from './bots-for-finance';
import { post as botsForFounders } from './bots-for-founders';
import { post as botsForMarketers } from './bots-for-marketers';
import { post as botsForPersonalLife } from './bots-for-personal-life';
import { post as botsForProductManagers } from './bots-for-product-managers';
import { post as botsForRealEstate } from './bots-for-real-estate';
import { post as botsForRecruiters } from './bots-for-recruiters';
import { post as botsForSalesReps } from './bots-for-sales-reps';
import { post as botsForSupportLeads } from './bots-for-support-leads';
import { post as botsForTeachers } from './bots-for-teachers';
import { post as botsForWriters } from './bots-for-writers';
import { post as grokBotAirtable } from './grok-bot-airtable';
import { post as grokBotApprovalRulesReversibility } from './grok-bot-approval-rules-reversibility';
import { post as grokBotAvoidingAiSlop } from './grok-bot-avoiding-ai-slop';
import { post as grokBotBoundaries } from './grok-bot-boundaries';
import { post as grokBotChiefOfStaffSetup } from './grok-bot-chief-of-staff-setup';
import { post as grokBotClaudeCodeSkillsCompatibility } from './grok-bot-claude-code-skills-compatibility';
import { post as grokBotCost } from './grok-bot-cost';
import { post as grokBotCursorAccountExplained } from './grok-bot-cursor-account-explained';
import { post as grokBotDiscord } from './grok-bot-discord';
import { post as grokBotExamples } from './grok-bot-examples';
import { post as grokBotFirstWeek } from './grok-bot-first-week';
import { post as grokBotForDesignersFigmaMotion } from './grok-bot-for-designers-figma-motion';
import { post as grokBotFreeTrial } from './grok-bot-free-trial';
import { post as grokBotGithub } from './grok-bot-github';
import { post as grokBotGmail } from './grok-bot-gmail';
import { post as grokBotGoogleCalendar } from './grok-bot-google-calendar';
import { post as grokBotGoogleDrive } from './grok-bot-google-drive';
import { post as grokBotGoogleSheets } from './grok-bot-google-sheets';
import { post as grokBotHubspot } from './grok-bot-hubspot';
import { post as grokBotIntegrationsList } from './grok-bot-integrations-list';
import { post as grokBotIntercom } from './grok-bot-intercom';
import { post as grokBotJira } from './grok-bot-jira';
import { post as grokBotLinear } from './grok-bot-linear';
import { post as grokBotMemory } from './grok-bot-memory';
import { post as grokBotNotion } from './grok-bot-notion';
import { post as grokBotObsidianKnowledgeBase } from './grok-bot-obsidian-knowledge-base';
import { post as grokBotOutlook } from './grok-bot-outlook';
import { post as grokBotPermissionsExplained } from './grok-bot-permissions-explained';
import { post as grokBotPromptsThatWork } from './grok-bot-prompts-that-work';
import { post as grokBotQuickbooks } from './grok-bot-quickbooks';
import { post as grokBotRoutinesVsTriggers } from './grok-bot-routines-vs-triggers';
import { post as grokBotSafetyChecklist } from './grok-bot-safety-checklist';
import { post as grokBotSalesforce } from './grok-bot-salesforce';
import { post as grokBotScheduling } from './grok-bot-scheduling';
import { post as grokBotSetupGuide } from './grok-bot-setup-guide';
import { post as grokBotSharedComputerSecurity } from './grok-bot-shared-computer-security';
import { post as grokBotShopify } from './grok-bot-shopify';
import { post as grokBotSlack } from './grok-bot-slack';
import { post as grokBotSpendCapAndTokenBurn } from './grok-bot-spend-cap-and-token-burn';
import { post as grokBotStarterCharterTemplate } from './grok-bot-starter-charter-template';
import { post as grokBotStarterRoster } from './grok-bot-starter-roster';
import { post as grokBotStripe } from './grok-bot-stripe';
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
import { post as grokBotVsChatgptWork } from './grok-bot-vs-chatgpt-work';
import { post as grokBotVsClaudeAgent } from './grok-bot-vs-claude-agent';
import { post as grokBotVsClaudeCowork } from './grok-bot-vs-claude-cowork';
import { post as grokBotVsGrokBuild } from './grok-bot-vs-grok-build';
import { post as grokBotVsLindy } from './grok-bot-vs-lindy';
import { post as grokBotVsMake } from './grok-bot-vs-make';
import { post as grokBotVsN8n } from './grok-bot-vs-n8n';
import { post as grokBotVsOpenaiOperator } from './grok-bot-vs-openai-operator';
import { post as grokBotVsOpenclawVsHermesVsBuzz } from './grok-bot-vs-openclaw-vs-hermes-vs-buzz';
import { post as grokBotVsZapier } from './grok-bot-vs-zapier';
import { post as grokBotWhopCliCommerce } from './grok-bot-whop-cli-commerce';
import { post as grokBotXContentAutomationRisks } from './grok-bot-x-content-automation-risks';
import { post as grokBotXTwitter } from './grok-bot-x-twitter';
import { post as grokBotZoom } from './grok-bot-zoom';
import { post as howToAnswerSecurityQuestionnaires } from './how-to-answer-security-questionnaires';
import { post as howToAutomateAccountTiering } from './how-to-automate-account-tiering';
import { post as howToAutomateCallFollowUps } from './how-to-automate-call-follow-ups';
import { post as howToAutomateChangelogWriting } from './how-to-automate-changelog-writing';
import { post as howToAutomateDealDesk } from './how-to-automate-deal-desk';
import { post as howToAutomateExpenseCategorisation } from './how-to-automate-expense-categorisation';
import { post as howToAutomateForecastHygiene } from './how-to-automate-forecast-hygiene';
import { post as howToAutomateHelpCenterUpdates } from './how-to-automate-help-center-updates';
import { post as howToAutomateInboundQualification } from './how-to-automate-inbound-qualification';
import { post as howToAutomateInvoiceReconciliation } from './how-to-automate-invoice-reconciliation';
import { post as howToAutomateMeetingPrep } from './how-to-automate-meeting-prep';
import { post as howToAutomateQbrPrep } from './how-to-automate-qbr-prep';
import { post as howToAutomateSupportTriage } from './how-to-automate-support-triage';
import { post as howToAutomateWinLossAnalysis } from './how-to-automate-win-loss-analysis';
import { post as howToBuildAProspectResearchSheet } from './how-to-build-a-prospect-research-sheet';
import { post as howToCoachSalesCallsWithAi } from './how-to-coach-sales-calls-with-ai';
import { post as howToCreateAGrokBot } from './how-to-create-a-grok-bot';
import { post as howToKeepSalesDecksCurrent } from './how-to-keep-sales-decks-current';
import { post as howToMaintainAnOrgChart } from './how-to-maintain-an-org-chart';
import { post as howToTrackCustomerPromises } from './how-to-track-customer-promises';
import { post as isGrokBotWorthIt } from './is-grok-bot-worth-it';
import { post as leastPrivilegeBots } from './least-privilege-bots';
import { post as migrateGrokBotToRakazo } from './migrate-grok-bot-to-rakazo';
import { post as multiBotTeams } from './multi-bot-teams';
import { post as openSourceBotRuntimes } from './open-source-bot-runtimes';
import { post as rakazoModelChoice } from './rakazo-model-choice';
import { post as rakazoPermissionsAudit } from './rakazo-permissions-audit';
import { post as rakazoRoutines } from './rakazo-routines';
import { post as rakazoSandboxOptions } from './rakazo-sandbox-options';
import { post as rakazoSelfHostingGuide } from './rakazo-self-hosting-guide';
import { post as rakazoVsGrokBot } from './rakazo-vs-grok-bot';
import { post as selfHostingAiAgentsGuide } from './self-hosting-ai-agents-guide';
import { post as testingYourBot } from './testing-your-bot';
import { post as whatAiBotsCost } from './what-ai-bots-cost';
import { post as whatIsAGrokBot } from './what-is-a-grok-bot';
import { post as whenBotsGoWrong } from './when-bots-go-wrong';
import { post as writingBotSetupsCompleteGuide } from './writing-bot-setups-complete-guide';

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
  'ai-agent-platforms-compared': aiAgentPlatformsCompared,
  'ai-bots-complete-guide': aiBotsCompleteGuide,
  'approval-gates-for-bots': approvalGatesForBots,
  'best-ai-bots-for-developers': bestAiBotsForDevelopers,
  'best-ai-bots-for-founders': bestAiBotsForFounders,
  'best-ai-bots-for-marketing': bestAiBotsForMarketing,
  'best-ai-bots-for-sales': bestAiBotsForSales,
  'best-ai-bots-for-support': bestAiBotsForSupport,
  'bot-cost-control': botCostControl,
  'bot-delegation-playbook': botDelegationPlaybook,
  'bot-failure-modes': botFailureModes,
  'bot-handoff-to-human': botHandoffToHuman,
  'bot-integrations-complete-guide': botIntegrationsCompleteGuide,
  'bot-observability': botObservability,
  'bot-prompt-engineering': botPromptEngineering,
  'bot-security-complete-guide': botSecurityCompleteGuide,
  'bot-system-architecture': botSystemArchitecture,
  'bot-that-never-sends': botThatNeverSends,
  'botdirectory-alternatives': botdirectoryAlternatives,
  'bots-and-asana': botsAndAsana,
  'bots-and-aws': botsAndAws,
  'bots-and-clickup': botsAndClickup,
  'bots-and-figma': botsAndFigma,
  'bots-and-jira-service-management': botsAndJiraServiceManagement,
  'bots-and-mixpanel': botsAndMixpanel,
  'bots-and-monday': botsAndMonday,
  'bots-and-supabase': botsAndSupabase,
  'bots-and-zendesk': botsAndZendesk,
  'bots-for-agencies': botsForAgencies,
  'bots-for-consultants': botsForConsultants,
  'bots-for-ecommerce': botsForEcommerce,
  'bots-for-engineers': botsForEngineers,
  'bots-for-every-role': botsForEveryRole,
  'bots-for-finance': botsForFinance,
  'bots-for-founders': botsForFounders,
  'bots-for-marketers': botsForMarketers,
  'bots-for-personal-life': botsForPersonalLife,
  'bots-for-product-managers': botsForProductManagers,
  'bots-for-real-estate': botsForRealEstate,
  'bots-for-recruiters': botsForRecruiters,
  'bots-for-sales-reps': botsForSalesReps,
  'bots-for-support-leads': botsForSupportLeads,
  'bots-for-teachers': botsForTeachers,
  'bots-for-writers': botsForWriters,
  'grok-bot-airtable': grokBotAirtable,
  'grok-bot-approval-rules-reversibility': grokBotApprovalRulesReversibility,
  'grok-bot-avoiding-ai-slop': grokBotAvoidingAiSlop,
  'grok-bot-boundaries': grokBotBoundaries,
  'grok-bot-chief-of-staff-setup': grokBotChiefOfStaffSetup,
  'grok-bot-claude-code-skills-compatibility': grokBotClaudeCodeSkillsCompatibility,
  'grok-bot-cost': grokBotCost,
  'grok-bot-cursor-account-explained': grokBotCursorAccountExplained,
  'grok-bot-discord': grokBotDiscord,
  'grok-bot-examples': grokBotExamples,
  'grok-bot-first-week': grokBotFirstWeek,
  'grok-bot-for-designers-figma-motion': grokBotForDesignersFigmaMotion,
  'grok-bot-free-trial': grokBotFreeTrial,
  'grok-bot-github': grokBotGithub,
  'grok-bot-gmail': grokBotGmail,
  'grok-bot-google-calendar': grokBotGoogleCalendar,
  'grok-bot-google-drive': grokBotGoogleDrive,
  'grok-bot-google-sheets': grokBotGoogleSheets,
  'grok-bot-hubspot': grokBotHubspot,
  'grok-bot-integrations-list': grokBotIntegrationsList,
  'grok-bot-intercom': grokBotIntercom,
  'grok-bot-jira': grokBotJira,
  'grok-bot-linear': grokBotLinear,
  'grok-bot-memory': grokBotMemory,
  'grok-bot-notion': grokBotNotion,
  'grok-bot-obsidian-knowledge-base': grokBotObsidianKnowledgeBase,
  'grok-bot-outlook': grokBotOutlook,
  'grok-bot-permissions-explained': grokBotPermissionsExplained,
  'grok-bot-prompts-that-work': grokBotPromptsThatWork,
  'grok-bot-quickbooks': grokBotQuickbooks,
  'grok-bot-routines-vs-triggers': grokBotRoutinesVsTriggers,
  'grok-bot-safety-checklist': grokBotSafetyChecklist,
  'grok-bot-salesforce': grokBotSalesforce,
  'grok-bot-scheduling': grokBotScheduling,
  'grok-bot-setup-guide': grokBotSetupGuide,
  'grok-bot-shared-computer-security': grokBotSharedComputerSecurity,
  'grok-bot-shopify': grokBotShopify,
  'grok-bot-slack': grokBotSlack,
  'grok-bot-spend-cap-and-token-burn': grokBotSpendCapAndTokenBurn,
  'grok-bot-starter-charter-template': grokBotStarterCharterTemplate,
  'grok-bot-starter-roster': grokBotStarterRoster,
  'grok-bot-stripe': grokBotStripe,
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
  'grok-bot-vs-chatgpt-work': grokBotVsChatgptWork,
  'grok-bot-vs-claude-agent': grokBotVsClaudeAgent,
  'grok-bot-vs-claude-cowork': grokBotVsClaudeCowork,
  'grok-bot-vs-grok-build': grokBotVsGrokBuild,
  'grok-bot-vs-lindy': grokBotVsLindy,
  'grok-bot-vs-make': grokBotVsMake,
  'grok-bot-vs-n8n': grokBotVsN8n,
  'grok-bot-vs-openai-operator': grokBotVsOpenaiOperator,
  'grok-bot-vs-openclaw-vs-hermes-vs-buzz': grokBotVsOpenclawVsHermesVsBuzz,
  'grok-bot-vs-zapier': grokBotVsZapier,
  'grok-bot-whop-cli-commerce': grokBotWhopCliCommerce,
  'grok-bot-x-content-automation-risks': grokBotXContentAutomationRisks,
  'grok-bot-x-twitter': grokBotXTwitter,
  'grok-bot-zoom': grokBotZoom,
  'how-to-answer-security-questionnaires': howToAnswerSecurityQuestionnaires,
  'how-to-automate-account-tiering': howToAutomateAccountTiering,
  'how-to-automate-call-follow-ups': howToAutomateCallFollowUps,
  'how-to-automate-changelog-writing': howToAutomateChangelogWriting,
  'how-to-automate-deal-desk': howToAutomateDealDesk,
  'how-to-automate-expense-categorisation': howToAutomateExpenseCategorisation,
  'how-to-automate-forecast-hygiene': howToAutomateForecastHygiene,
  'how-to-automate-help-center-updates': howToAutomateHelpCenterUpdates,
  'how-to-automate-inbound-qualification': howToAutomateInboundQualification,
  'how-to-automate-invoice-reconciliation': howToAutomateInvoiceReconciliation,
  'how-to-automate-meeting-prep': howToAutomateMeetingPrep,
  'how-to-automate-qbr-prep': howToAutomateQbrPrep,
  'how-to-automate-support-triage': howToAutomateSupportTriage,
  'how-to-automate-win-loss-analysis': howToAutomateWinLossAnalysis,
  'how-to-build-a-prospect-research-sheet': howToBuildAProspectResearchSheet,
  'how-to-coach-sales-calls-with-ai': howToCoachSalesCallsWithAi,
  'how-to-create-a-grok-bot': howToCreateAGrokBot,
  'how-to-keep-sales-decks-current': howToKeepSalesDecksCurrent,
  'how-to-maintain-an-org-chart': howToMaintainAnOrgChart,
  'how-to-track-customer-promises': howToTrackCustomerPromises,
  'is-grok-bot-worth-it': isGrokBotWorthIt,
  'least-privilege-bots': leastPrivilegeBots,
  'migrate-grok-bot-to-rakazo': migrateGrokBotToRakazo,
  'multi-bot-teams': multiBotTeams,
  'open-source-bot-runtimes': openSourceBotRuntimes,
  'rakazo-model-choice': rakazoModelChoice,
  'rakazo-permissions-audit': rakazoPermissionsAudit,
  'rakazo-routines': rakazoRoutines,
  'rakazo-sandbox-options': rakazoSandboxOptions,
  'rakazo-self-hosting-guide': rakazoSelfHostingGuide,
  'rakazo-vs-grok-bot': rakazoVsGrokBot,
  'self-hosting-ai-agents-guide': selfHostingAiAgentsGuide,
  'testing-your-bot': testingYourBot,
  'what-ai-bots-cost': whatAiBotsCost,
  'what-is-a-grok-bot': whatIsAGrokBot,
  'when-bots-go-wrong': whenBotsGoWrong,
  'writing-bot-setups-complete-guide': writingBotSetupsCompleteGuide,
};

export const postList: Array<{ slug: string } & BlogPost> = [
  { slug: 'introducing-botskills', ...introducingBotskills },
  { slug: 'one-person-company-grok-bot', ...onePersonCompanyGrokBot },
  { slug: 'ai-agent-platforms-compared', ...aiAgentPlatformsCompared },
  { slug: 'ai-bots-complete-guide', ...aiBotsCompleteGuide },
  { slug: 'approval-gates-for-bots', ...approvalGatesForBots },
  { slug: 'best-ai-bots-for-developers', ...bestAiBotsForDevelopers },
  { slug: 'best-ai-bots-for-founders', ...bestAiBotsForFounders },
  { slug: 'best-ai-bots-for-marketing', ...bestAiBotsForMarketing },
  { slug: 'best-ai-bots-for-sales', ...bestAiBotsForSales },
  { slug: 'best-ai-bots-for-support', ...bestAiBotsForSupport },
  { slug: 'bot-cost-control', ...botCostControl },
  { slug: 'bot-delegation-playbook', ...botDelegationPlaybook },
  { slug: 'bot-failure-modes', ...botFailureModes },
  { slug: 'bot-handoff-to-human', ...botHandoffToHuman },
  { slug: 'bot-integrations-complete-guide', ...botIntegrationsCompleteGuide },
  { slug: 'bot-observability', ...botObservability },
  { slug: 'bot-prompt-engineering', ...botPromptEngineering },
  { slug: 'bot-security-complete-guide', ...botSecurityCompleteGuide },
  { slug: 'bot-system-architecture', ...botSystemArchitecture },
  { slug: 'bot-that-never-sends', ...botThatNeverSends },
  { slug: 'botdirectory-alternatives', ...botdirectoryAlternatives },
  { slug: 'bots-and-asana', ...botsAndAsana },
  { slug: 'bots-and-aws', ...botsAndAws },
  { slug: 'bots-and-clickup', ...botsAndClickup },
  { slug: 'bots-and-figma', ...botsAndFigma },
  { slug: 'bots-and-jira-service-management', ...botsAndJiraServiceManagement },
  { slug: 'bots-and-mixpanel', ...botsAndMixpanel },
  { slug: 'bots-and-monday', ...botsAndMonday },
  { slug: 'bots-and-supabase', ...botsAndSupabase },
  { slug: 'bots-and-zendesk', ...botsAndZendesk },
  { slug: 'bots-for-agencies', ...botsForAgencies },
  { slug: 'bots-for-consultants', ...botsForConsultants },
  { slug: 'bots-for-ecommerce', ...botsForEcommerce },
  { slug: 'bots-for-engineers', ...botsForEngineers },
  { slug: 'bots-for-every-role', ...botsForEveryRole },
  { slug: 'bots-for-finance', ...botsForFinance },
  { slug: 'bots-for-founders', ...botsForFounders },
  { slug: 'bots-for-marketers', ...botsForMarketers },
  { slug: 'bots-for-personal-life', ...botsForPersonalLife },
  { slug: 'bots-for-product-managers', ...botsForProductManagers },
  { slug: 'bots-for-real-estate', ...botsForRealEstate },
  { slug: 'bots-for-recruiters', ...botsForRecruiters },
  { slug: 'bots-for-sales-reps', ...botsForSalesReps },
  { slug: 'bots-for-support-leads', ...botsForSupportLeads },
  { slug: 'bots-for-teachers', ...botsForTeachers },
  { slug: 'bots-for-writers', ...botsForWriters },
  { slug: 'grok-bot-airtable', ...grokBotAirtable },
  { slug: 'grok-bot-approval-rules-reversibility', ...grokBotApprovalRulesReversibility },
  { slug: 'grok-bot-avoiding-ai-slop', ...grokBotAvoidingAiSlop },
  { slug: 'grok-bot-boundaries', ...grokBotBoundaries },
  { slug: 'grok-bot-chief-of-staff-setup', ...grokBotChiefOfStaffSetup },
  { slug: 'grok-bot-claude-code-skills-compatibility', ...grokBotClaudeCodeSkillsCompatibility },
  { slug: 'grok-bot-cost', ...grokBotCost },
  { slug: 'grok-bot-cursor-account-explained', ...grokBotCursorAccountExplained },
  { slug: 'grok-bot-discord', ...grokBotDiscord },
  { slug: 'grok-bot-examples', ...grokBotExamples },
  { slug: 'grok-bot-first-week', ...grokBotFirstWeek },
  { slug: 'grok-bot-for-designers-figma-motion', ...grokBotForDesignersFigmaMotion },
  { slug: 'grok-bot-free-trial', ...grokBotFreeTrial },
  { slug: 'grok-bot-github', ...grokBotGithub },
  { slug: 'grok-bot-gmail', ...grokBotGmail },
  { slug: 'grok-bot-google-calendar', ...grokBotGoogleCalendar },
  { slug: 'grok-bot-google-drive', ...grokBotGoogleDrive },
  { slug: 'grok-bot-google-sheets', ...grokBotGoogleSheets },
  { slug: 'grok-bot-hubspot', ...grokBotHubspot },
  { slug: 'grok-bot-integrations-list', ...grokBotIntegrationsList },
  { slug: 'grok-bot-intercom', ...grokBotIntercom },
  { slug: 'grok-bot-jira', ...grokBotJira },
  { slug: 'grok-bot-linear', ...grokBotLinear },
  { slug: 'grok-bot-memory', ...grokBotMemory },
  { slug: 'grok-bot-notion', ...grokBotNotion },
  { slug: 'grok-bot-obsidian-knowledge-base', ...grokBotObsidianKnowledgeBase },
  { slug: 'grok-bot-outlook', ...grokBotOutlook },
  { slug: 'grok-bot-permissions-explained', ...grokBotPermissionsExplained },
  { slug: 'grok-bot-prompts-that-work', ...grokBotPromptsThatWork },
  { slug: 'grok-bot-quickbooks', ...grokBotQuickbooks },
  { slug: 'grok-bot-routines-vs-triggers', ...grokBotRoutinesVsTriggers },
  { slug: 'grok-bot-safety-checklist', ...grokBotSafetyChecklist },
  { slug: 'grok-bot-salesforce', ...grokBotSalesforce },
  { slug: 'grok-bot-scheduling', ...grokBotScheduling },
  { slug: 'grok-bot-setup-guide', ...grokBotSetupGuide },
  { slug: 'grok-bot-shared-computer-security', ...grokBotSharedComputerSecurity },
  { slug: 'grok-bot-shopify', ...grokBotShopify },
  { slug: 'grok-bot-slack', ...grokBotSlack },
  { slug: 'grok-bot-spend-cap-and-token-burn', ...grokBotSpendCapAndTokenBurn },
  { slug: 'grok-bot-starter-charter-template', ...grokBotStarterCharterTemplate },
  { slug: 'grok-bot-starter-roster', ...grokBotStarterRoster },
  { slug: 'grok-bot-stripe', ...grokBotStripe },
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
  { slug: 'grok-bot-vs-chatgpt-work', ...grokBotVsChatgptWork },
  { slug: 'grok-bot-vs-claude-agent', ...grokBotVsClaudeAgent },
  { slug: 'grok-bot-vs-claude-cowork', ...grokBotVsClaudeCowork },
  { slug: 'grok-bot-vs-grok-build', ...grokBotVsGrokBuild },
  { slug: 'grok-bot-vs-lindy', ...grokBotVsLindy },
  { slug: 'grok-bot-vs-make', ...grokBotVsMake },
  { slug: 'grok-bot-vs-n8n', ...grokBotVsN8n },
  { slug: 'grok-bot-vs-openai-operator', ...grokBotVsOpenaiOperator },
  { slug: 'grok-bot-vs-openclaw-vs-hermes-vs-buzz', ...grokBotVsOpenclawVsHermesVsBuzz },
  { slug: 'grok-bot-vs-zapier', ...grokBotVsZapier },
  { slug: 'grok-bot-whop-cli-commerce', ...grokBotWhopCliCommerce },
  { slug: 'grok-bot-x-content-automation-risks', ...grokBotXContentAutomationRisks },
  { slug: 'grok-bot-x-twitter', ...grokBotXTwitter },
  { slug: 'grok-bot-zoom', ...grokBotZoom },
  { slug: 'how-to-answer-security-questionnaires', ...howToAnswerSecurityQuestionnaires },
  { slug: 'how-to-automate-account-tiering', ...howToAutomateAccountTiering },
  { slug: 'how-to-automate-call-follow-ups', ...howToAutomateCallFollowUps },
  { slug: 'how-to-automate-changelog-writing', ...howToAutomateChangelogWriting },
  { slug: 'how-to-automate-deal-desk', ...howToAutomateDealDesk },
  { slug: 'how-to-automate-expense-categorisation', ...howToAutomateExpenseCategorisation },
  { slug: 'how-to-automate-forecast-hygiene', ...howToAutomateForecastHygiene },
  { slug: 'how-to-automate-help-center-updates', ...howToAutomateHelpCenterUpdates },
  { slug: 'how-to-automate-inbound-qualification', ...howToAutomateInboundQualification },
  { slug: 'how-to-automate-invoice-reconciliation', ...howToAutomateInvoiceReconciliation },
  { slug: 'how-to-automate-meeting-prep', ...howToAutomateMeetingPrep },
  { slug: 'how-to-automate-qbr-prep', ...howToAutomateQbrPrep },
  { slug: 'how-to-automate-support-triage', ...howToAutomateSupportTriage },
  { slug: 'how-to-automate-win-loss-analysis', ...howToAutomateWinLossAnalysis },
  { slug: 'how-to-build-a-prospect-research-sheet', ...howToBuildAProspectResearchSheet },
  { slug: 'how-to-coach-sales-calls-with-ai', ...howToCoachSalesCallsWithAi },
  { slug: 'how-to-create-a-grok-bot', ...howToCreateAGrokBot },
  { slug: 'how-to-keep-sales-decks-current', ...howToKeepSalesDecksCurrent },
  { slug: 'how-to-maintain-an-org-chart', ...howToMaintainAnOrgChart },
  { slug: 'how-to-track-customer-promises', ...howToTrackCustomerPromises },
  { slug: 'is-grok-bot-worth-it', ...isGrokBotWorthIt },
  { slug: 'least-privilege-bots', ...leastPrivilegeBots },
  { slug: 'migrate-grok-bot-to-rakazo', ...migrateGrokBotToRakazo },
  { slug: 'multi-bot-teams', ...multiBotTeams },
  { slug: 'open-source-bot-runtimes', ...openSourceBotRuntimes },
  { slug: 'rakazo-model-choice', ...rakazoModelChoice },
  { slug: 'rakazo-permissions-audit', ...rakazoPermissionsAudit },
  { slug: 'rakazo-routines', ...rakazoRoutines },
  { slug: 'rakazo-sandbox-options', ...rakazoSandboxOptions },
  { slug: 'rakazo-self-hosting-guide', ...rakazoSelfHostingGuide },
  { slug: 'rakazo-vs-grok-bot', ...rakazoVsGrokBot },
  { slug: 'self-hosting-ai-agents-guide', ...selfHostingAiAgentsGuide },
  { slug: 'testing-your-bot', ...testingYourBot },
  { slug: 'what-ai-bots-cost', ...whatAiBotsCost },
  { slug: 'what-is-a-grok-bot', ...whatIsAGrokBot },
  { slug: 'when-bots-go-wrong', ...whenBotsGoWrong },
  { slug: 'writing-bot-setups-complete-guide', ...writingBotSetupsCompleteGuide },
];
