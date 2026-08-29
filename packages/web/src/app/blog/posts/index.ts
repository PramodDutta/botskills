// Dual-registry blog engine, same contract as qaskills:
// - `posts` map powers /blog/[slug] (miss it = 404)
// - `postList` powers /blog and the sitemap (miss it = invisible)
// Every post needs THREE edits here: import, posts entry, postList entry.
// Batch arrays, when they arrive, spread at the END (last write wins on slug).







































import { post as introducingBotskills } from './introducing-botskills';
import { post as onePersonCompanyGrokBot } from './one-person-company-grok-bot';
import { post as aBoundaryIsNotAPermission } from './a-boundary-is-not-a-permission';
import { post as accountExpertInternalBrief } from './account-expert-internal-brief';
import { post as accountTieringPackNeverChangesOwner } from './account-tiering-pack-never-changes-owner';
import { post as adCreativeDraftsNeverGoLive } from './ad-creative-drafts-never-go-live';
import { post as agentInboxIsNotGmailSend } from './agent-inbox-is-not-gmail-send';
import { post as aiAgentPlatformsCompared } from './ai-agent-platforms-compared';
import { post as aiAgentsVsHiring } from './ai-agents-vs-hiring';
import { post as aiAgentsVsRpa } from './ai-agents-vs-rpa';
import { post as aiAgentsVsWorkflowBuilders } from './ai-agents-vs-workflow-builders';
import { post as aiBotsCompleteGuide } from './ai-bots-complete-guide';
import { post as approvalFatigueAndTheBlanketYes } from './approval-fatigue-and-the-blanket-yes';
import { post as approvalGatesForBots } from './approval-gates-for-bots';
import { post as bestAiBotsForDevelopers } from './best-ai-bots-for-developers';
import { post as bestAiBotsForFounders } from './best-ai-bots-for-founders';
import { post as bestAiBotsForMarketing } from './best-ai-bots-for-marketing';
import { post as bestAiBotsForSales } from './best-ai-bots-for-sales';
import { post as bestAiBotsForSupport } from './best-ai-bots-for-support';
import { post as bookingPipelineNeverChargesTheCard } from './booking-pipeline-never-charges-the-card';
import { post as bookkeepingAuditorNeverPostsTheJournal } from './bookkeeping-auditor-never-posts-the-journal';
import { post as botCapacityPlanning } from './bot-capacity-planning';
import { post as botChangeManagement } from './bot-change-management';
import { post as botCharterAntiPatterns } from './bot-charter-anti-patterns';
import { post as botCostControl } from './bot-cost-control';
import { post as botDataRetention } from './bot-data-retention';
import { post as botDelegationPlaybook } from './bot-delegation-playbook';
import { post as botFailureModes } from './bot-failure-modes';
import { post as botHandoffToHuman } from './bot-handoff-to-human';
import { post as botIncidentResponse } from './bot-incident-response';
import { post as botIntegrationsCompleteGuide } from './bot-integrations-complete-guide';
import { post as botObservability } from './bot-observability';
import { post as botPromptEngineering } from './bot-prompt-engineering';
import { post as botSecurityCompleteGuide } from './bot-security-complete-guide';
import { post as botSystemArchitecture } from './bot-system-architecture';
import { post as botThatNeverSends } from './bot-that-never-sends';
import { post as botdirectoryAlternatives } from './botdirectory-alternatives';
import { post as botsAnd1password } from './bots-and-1password';
import { post as botsAndAsana } from './bots-and-asana';
import { post as botsAndAws } from './bots-and-aws';
import { post as botsAndClickup } from './bots-and-clickup';
import { post as botsAndDocusign } from './bots-and-docusign';
import { post as botsAndFigma } from './bots-and-figma';
import { post as botsAndJiraServiceManagement } from './bots-and-jira-service-management';
import { post as botsAndMixpanel } from './bots-and-mixpanel';
import { post as botsAndMonday } from './bots-and-monday';
import { post as botsAndOkta } from './bots-and-okta';
import { post as botsAndSupabase } from './bots-and-supabase';
import { post as botsAndWebflow } from './bots-and-webflow';
import { post as botsAndWhatsapp } from './bots-and-whatsapp';
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
import { post as cheapestWayIntoGrokBot } from './cheapest-way-into-grok-bot';
import { post as copyABotskillsListingOntoASecondSeat } from './copy-a-botskills-listing-onto-a-second-seat';
import { post as deleteAGrokBotSafely } from './delete-a-grok-bot-safely';
import { post as downloadGrokBot } from './download-grok-bot';
import { post as emailInjectionSentinelReadOnly } from './email-injection-sentinel-read-only';
import { post as explainGrokBotToYourBoss } from './explain-grok-bot-to-your-boss';
import { post as firstGrokBotInAnHour } from './first-grok-bot-in-an-hour';
import { post as grokBot2faPrompt } from './grok-bot-2fa-prompt';
import { post as grokBotAccountHealth } from './grok-bot-account-health';
import { post as grokBotAgentmail } from './grok-bot-agentmail';
import { post as grokBotAgentmailVsGmail } from './grok-bot-agentmail-vs-gmail';
import { post as grokBotAirtable } from './grok-bot-airtable';
import { post as grokBotAmazonCart } from './grok-bot-amazon-cart';
import { post as grokBotAndroidStatus } from './grok-bot-android-status';
import { post as grokBotApprovalRulesReversibility } from './grok-bot-approval-rules-reversibility';
import { post as grokBotAvoidingAiSlop } from './grok-bot-avoiding-ai-slop';
import { post as grokBotBothSubscriptions } from './grok-bot-both-subscriptions';
import { post as grokBotBoundaries } from './grok-bot-boundaries';
import { post as grokBotBrowserBroke } from './grok-bot-browser-broke';
import { post as grokBotBugReproduction } from './grok-bot-bug-reproduction';
import { post as grokBotCalendarManager } from './grok-bot-calendar-manager';
import { post as grokBotCannotSeeFiles } from './grok-bot-cannot-see-files';
import { post as grokBotCannotSendEmail } from './grok-bot-cannot-send-email';
import { post as grokBotChiefOfStaffSetup } from './grok-bot-chief-of-staff-setup';
import { post as grokBotClaudeCodeSkillsCompatibility } from './grok-bot-claude-code-skills-compatibility';
import { post as grokBotClipYoutubePodcast } from './grok-bot-clip-youtube-podcast';
import { post as grokBotCommunityManager } from './grok-bot-community-manager';
import { post as grokBotCompareBookingPrices } from './grok-bot-compare-booking-prices';
import { post as grokBotComposio } from './grok-bot-composio';
import { post as grokBotCost } from './grok-bot-cost';
import { post as grokBotCrmHygiene } from './grok-bot-crm-hygiene';
import { post as grokBotCursorAccountExplained } from './grok-bot-cursor-account-explained';
import { post as grokBotCursorProPlus } from './grok-bot-cursor-pro-plus';
import { post as grokBotDeepseekRouting } from './grok-bot-deepseek-routing';
import { post as grokBotDevilsAdvocate } from './grok-bot-devils-advocate';
import { post as grokBotDirectoryBusiness } from './grok-bot-directory-business';
import { post as grokBotDiscord } from './grok-bot-discord';
import { post as grokBotEnterpriseWaitlist } from './grok-bot-enterprise-waitlist';
import { post as grokBotEvidenceRules } from './grok-bot-evidence-rules';
import { post as grokBotExamples } from './grok-bot-examples';
import { post as grokBotExecutiveBriefing } from './grok-bot-executive-briefing';
import { post as grokBotExpenseManager } from './grok-bot-expense-manager';
import { post as grokBotFalsePositives } from './grok-bot-false-positives';
import { post as grokBotFigmaProductionFiles } from './grok-bot-figma-production-files';
import { post as grokBotFirstWeek } from './grok-bot-first-week';
import { post as grokBotFirstmate } from './grok-bot-firstmate';
import { post as grokBotFivePartBrief } from './grok-bot-five-part-brief';
import { post as grokBotFleetAudit } from './grok-bot-fleet-audit';
import { post as grokBotForAccountants } from './grok-bot-for-accountants';
import { post as grokBotForAgenciesIsolation } from './grok-bot-for-agencies-isolation';
import { post as grokBotForCustomerSuccess } from './grok-bot-for-customer-success';
import { post as grokBotForDesignersFigmaMotion } from './grok-bot-for-designers-figma-motion';
import { post as grokBotForEngineersOpsNotMerge } from './grok-bot-for-engineers-ops-not-merge';
import { post as grokBotForFoundersWeekOne } from './grok-bot-for-founders-week-one';
import { post as grokBotForGtmTeams } from './grok-bot-for-gtm-teams';
import { post as grokBotForHr } from './grok-bot-for-hr';
import { post as grokBotForLawyers } from './grok-bot-for-lawyers';
import { post as grokBotForMobileAppTeams } from './grok-bot-for-mobile-app-teams';
import { post as grokBotForNonprofits } from './grok-bot-for-nonprofits';
import { post as grokBotForRevops } from './grok-bot-for-revops';
import { post as grokBotForSecurityTeams } from './grok-bot-for-security-teams';
import { post as grokBotForStudents } from './grok-bot-for-students';
import { post as grokBotForYoutubeCreators } from './grok-bot-for-youtube-creators';
import { post as grokBotFreeTrial } from './grok-bot-free-trial';
import { post as grokBotGithub } from './grok-bot-github';
import { post as grokBotGmail } from './grok-bot-gmail';
import { post as grokBotGoogleCalendar } from './grok-bot-google-calendar';
import { post as grokBotGoogleDrive } from './grok-bot-google-drive';
import { post as grokBotGoogleSheets } from './grok-bot-google-sheets';
import { post as grokBotGrokImagineStoryboard } from './grok-bot-grok-imagine-storyboard';
import { post as grokBotGroupChat } from './grok-bot-group-chat';
import { post as grokBotHobbyAndProExclusion } from './grok-bot-hobby-and-pro-exclusion';
import { post as grokBotHostedMcpTokens } from './grok-bot-hosted-mcp-tokens';
import { post as grokBotHubspot } from './grok-bot-hubspot';
import { post as grokBotIntegrationsList } from './grok-bot-integrations-list';
import { post as grokBotIntercom } from './grok-bot-intercom';
import { post as grokBotIpadStatus } from './grok-bot-ipad-status';
import { post as grokBotIphoneApp } from './grok-bot-iphone-app';
import { post as grokBotIphoneCannotEdit } from './grok-bot-iphone-cannot-edit';
import { post as grokBotJira } from './grok-bot-jira';
import { post as grokBotLinear } from './grok-bot-linear';
import { post as grokBotLoginFailed } from './grok-bot-login-failed';
import { post as grokBotMacIntel } from './grok-bot-mac-intel';
import { post as grokBotMarketingOs } from './grok-bot-marketing-os';
import { post as grokBotMcpServers } from './grok-bot-mcp-servers';
import { post as grokBotMemory } from './grok-bot-memory';
import { post as grokBotNaming } from './grok-bot-naming';
import { post as grokBotNoAuditLogYet } from './grok-bot-no-audit-log-yet';
import { post as grokBotNoSpendCapOps } from './grok-bot-no-spend-cap-ops';
import { post as grokBotNotASandbox } from './grok-bot-not-a-sandbox';
import { post as grokBotNotion } from './grok-bot-notion';
import { post as grokBotObsidianKnowledgeBase } from './grok-bot-obsidian-knowledge-base';
import { post as grokBotOnCall } from './grok-bot-on-call';
import { post as grokBotOnDemandUsage } from './grok-bot-on-demand-usage';
import { post as grokBotOneComputerManyScreens } from './grok-bot-one-computer-many-screens';
import { post as grokBotOutlook } from './grok-bot-outlook';
import { post as grokBotOverwatchSharedVm } from './grok-bot-overwatch-shared-vm';
import { post as grokBotPaidMedia } from './grok-bot-paid-media';
import { post as grokBotPaperTrading } from './grok-bot-paper-trading';
import { post as grokBotPermissionsExplained } from './grok-bot-permissions-explained';
import { post as grokBotPluginMissing } from './grok-bot-plugin-missing';
import { post as grokBotPlugins2026 } from './grok-bot-plugins-2026';
import { post as grokBotPluginsCatalog } from './grok-bot-plugins-catalog';
import { post as grokBotPrFactory } from './grok-bot-pr-factory';
import { post as grokBotPreflightChecklist } from './grok-bot-preflight-checklist';
import { post as grokBotPrivacyMode } from './grok-bot-privacy-mode';
import { post as grokBotProductInvestigation } from './grok-bot-product-investigation';
import { post as grokBotPromptInjectionEmail } from './grok-bot-prompt-injection-email';
import { post as grokBotPromptsThatWork } from './grok-bot-prompts-that-work';
import { post as grokBotQuickbooks } from './grok-bot-quickbooks';
import { post as grokBotQuotaExceeded } from './grok-bot-quota-exceeded';
import { post as grokBotRegulatedIndustries } from './grok-bot-regulated-industries';
import { post as grokBotRetirement } from './grok-bot-retirement';
import { post as grokBotReviewFatigue } from './grok-bot-review-fatigue';
import { post as grokBotRoutineDidNotRun } from './grok-bot-routine-did-not-run';
import { post as grokBotRoutinesVsTriggers } from './grok-bot-routines-vs-triggers';
import { post as grokBotRunbook } from './grok-bot-runbook';
import { post as grokBotRunsWithLaptopClosed } from './grok-bot-runs-with-laptop-closed';
import { post as grokBotSafetyChecklist } from './grok-bot-safety-checklist';
import { post as grokBotSalesOutbound } from './grok-bot-sales-outbound';
import { post as grokBotSalesforce } from './grok-bot-salesforce';
import { post as grokBotScheduling } from './grok-bot-scheduling';
import { post as grokBotSetupGuide } from './grok-bot-setup-guide';
import { post as grokBotShadowMode } from './grok-bot-shadow-mode';
import { post as grokBotSharedComputerSecurity } from './grok-bot-shared-computer-security';
import { post as grokBotShopify } from './grok-bot-shopify';
import { post as grokBotSlack } from './grok-bot-slack';
import { post as grokBotSpendCapAndTokenBurn } from './grok-bot-spend-cap-and-token-burn';
import { post as grokBotSponsorshipInboxScore } from './grok-bot-sponsorship-inbox-score';
import { post as grokBotStalled } from './grok-bot-stalled';
import { post as grokBotStarterCharterTemplate } from './grok-bot-starter-charter-template';
import { post as grokBotStarterRoster } from './grok-bot-starter-roster';
import { post as grokBotStaticEgressIp } from './grok-bot-static-egress-ip';
import { post as grokBotStripe } from './grok-bot-stripe';
import { post as grokBotSupergrokPlus } from './grok-bot-supergrok-plus';
import { post as grokBotSupportedPlatforms } from './grok-bot-supported-platforms';
import { post as grokBotSwitchIntentOnX } from './grok-bot-switch-intent-on-x';
import { post as grokBotTalentScout } from './grok-bot-talent-scout';
import { post as grokBotTeamsStandard } from './grok-bot-teams-standard';
import { post as grokBotTelegramBridge } from './grok-bot-telegram-bridge';
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
import { post as grokBotTranscriptapiVsBrowser } from './grok-bot-transcriptapi-vs-browser';
import { post as grokBotTroubleshooting } from './grok-bot-troubleshooting';
import { post as grokBotVisionMd } from './grok-bot-vision-md';
import { post as grokBotVsChatgptAgent } from './grok-bot-vs-chatgpt-agent';
import { post as grokBotVsChatgptTasks } from './grok-bot-vs-chatgpt-tasks';
import { post as grokBotVsChatgptWork } from './grok-bot-vs-chatgpt-work';
import { post as grokBotVsClaudeAgent } from './grok-bot-vs-claude-agent';
import { post as grokBotVsClaudeCowork } from './grok-bot-vs-claude-cowork';
import { post as grokBotVsClaudeCoworkVsChatgptWork } from './grok-bot-vs-claude-cowork-vs-chatgpt-work';
import { post as grokBotVsComputerUse } from './grok-bot-vs-computer-use';
import { post as grokBotVsCursorBackgroundAgent } from './grok-bot-vs-cursor-background-agent';
import { post as grokBotVsDevin } from './grok-bot-vs-devin';
import { post as grokBotVsGeminiGems } from './grok-bot-vs-gemini-gems';
import { post as grokBotVsGenspark } from './grok-bot-vs-genspark';
import { post as grokBotVsGrokBuild } from './grok-bot-vs-grok-build';
import { post as grokBotVsGrokTheChatbot } from './grok-bot-vs-grok-the-chatbot';
import { post as grokBotVsGrokbotDev } from './grok-bot-vs-grokbot-dev';
import { post as grokBotVsGroq } from './grok-bot-vs-groq';
import { post as grokBotVsLindy } from './grok-bot-vs-lindy';
import { post as grokBotVsLindyVsCowork } from './grok-bot-vs-lindy-vs-cowork';
import { post as grokBotVsMake } from './grok-bot-vs-make';
import { post as grokBotVsManus } from './grok-bot-vs-manus';
import { post as grokBotVsMicrosoftCopilot } from './grok-bot-vs-microsoft-copilot';
import { post as grokBotVsN8n } from './grok-bot-vs-n8n';
import { post as grokBotVsOpenaiOperator } from './grok-bot-vs-openai-operator';
import { post as grokBotVsOpenclawVsHermesVsBuzz } from './grok-bot-vs-openclaw-vs-hermes-vs-buzz';
import { post as grokBotVsPerplexityComputer } from './grok-bot-vs-perplexity-computer';
import { post as grokBotVsRabbit } from './grok-bot-vs-rabbit';
import { post as grokBotVsZapier } from './grok-bot-vs-zapier';
import { post as grokBotWeekOneMistakes } from './grok-bot-week-one-mistakes';
import { post as grokBotWeeklyAllowance } from './grok-bot-weekly-allowance';
import { post as grokBotWhopCliCommerce } from './grok-bot-whop-cli-commerce';
import { post as grokBotWindowsSetup } from './grok-bot-windows-setup';
import { post as grokBotWorkforceChecker } from './grok-bot-workforce-checker';
import { post as grokBotWrongAccountSignedIn } from './grok-bot-wrong-account-signed-in';
import { post as grokBotXContentAutomationRisks } from './grok-bot-x-content-automation-risks';
import { post as grokBotXTwitter } from './grok-bot-x-twitter';
import { post as grokBotYoutubeManager } from './grok-bot-youtube-manager';
import { post as grokBotYoutubeTranscripts } from './grok-bot-youtube-transcripts';
import { post as grokBotZoom } from './grok-bot-zoom';
import { post as handAContractorTheCharterNotTheLogin } from './hand-a-contractor-the-charter-not-the-login';
import { post as howBotsOnGrokActuallyWork } from './how-bots-on-grok-actually-work';
import { post as howToAnswerSecurityQuestionnaires } from './how-to-answer-security-questionnaires';
import { post as howToAuditABotYouInherited } from './how-to-audit-a-bot-you-inherited';
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
import { post as howToConnectGmailToGrokBot } from './how-to-connect-gmail-to-grok-bot';
import { post as howToCreateAGrokBot } from './how-to-create-a-grok-bot';
import { post as howToIsolateGrokBotCredentials } from './how-to-isolate-grok-bot-credentials';
import { post as howToKeepSalesDecksCurrent } from './how-to-keep-sales-decks-current';
import { post as howToMaintainAnOrgChart } from './how-to-maintain-an-org-chart';
import { post as howToPauseAGrokBotOnIphone } from './how-to-pause-a-grok-bot-on-iphone';
import { post as howToScheduleAGrokBotRoutine } from './how-to-schedule-a-grok-bot-routine';
import { post as howToSetGrokBotApprovals } from './how-to-set-grok-bot-approvals';
import { post as howToStopGrokBotOverspending } from './how-to-stop-grok-bot-overspending';
import { post as howToTestAGrokBotOnTrial } from './how-to-test-a-grok-bot-on-trial';
import { post as howToTrackCustomerPromises } from './how-to-track-customer-promises';
import { post as howToWriteABoundaryLine } from './how-to-write-a-boundary-line';
import { post as howToWriteAGrokBotCharter2026 } from './how-to-write-a-grok-bot-charter-2026';
import { post as isGrokBotWorthIt } from './is-grok-bot-worth-it';
import { post as learnGrokBot } from './learn-grok-bot';
import { post as leastPrivilegeBots } from './least-privilege-bots';
import { post as localComputerApprovalsAreNotUndo } from './local-computer-approvals-are-not-undo';
import { post as mcpVsConnectors } from './mcp-vs-connectors';
import { post as measuringBotRoi } from './measuring-bot-roi';
import { post as migrateGrokBotToRakazo } from './migrate-grok-bot-to-rakazo';
import { post as moveAMakeScenarioToABot } from './move-a-make-scenario-to-a-bot';
import { post as moveANightlyCsvPullOntoGrokBot } from './move-a-nightly-csv-pull-onto-grok-bot';
import { post as moveAZapToABot } from './move-a-zap-to-a-bot';
import { post as moveAnIphoneShortcutToABot } from './move-an-iphone-shortcut-to-a-bot';
import { post as moveAnN8nWorkflowToABot } from './move-an-n8n-workflow-to-a-bot';
import { post as moveGrokBotWorkFromPersonalToWork } from './move-grok-bot-work-from-personal-to-work';
import { post as multiBotTeams } from './multi-bot-teams';
import { post as multiTenantBotRisk } from './multi-tenant-bot-risk';
import { post as openSourceBotRuntimes } from './open-source-bot-runtimes';
import { post as persistentMemoryFileIsNotAVault } from './persistent-memory-file-is-not-a-vault';
import { post as personalCfoBriefNeverMovesMoney } from './personal-cfo-brief-never-moves-money';
import { post as pickTheFirstGrokBotJob } from './pick-the-first-grok-bot-job';
import { post as promptInjectionForOperators } from './prompt-injection-for-operators';
import { post as proveGrokBotToARiskCommittee } from './prove-grok-bot-to-a-risk-committee';
import { post as ptoCoverageForALiveGrokBot } from './pto-coverage-for-a-live-grok-bot';
import { post as rakazoModelChoice } from './rakazo-model-choice';
import { post as rakazoPermissionsAudit } from './rakazo-permissions-audit';
import { post as rakazoRoutines } from './rakazo-routines';
import { post as rakazoSandboxOptions } from './rakazo-sandbox-options';
import { post as rakazoSelfHostingGuide } from './rakazo-self-hosting-guide';
import { post as rakazoVsGrokBot } from './rakazo-vs-grok-bot';
import { post as readAGrokBotListing } from './read-a-grok-bot-listing';
import { post as readOnlyBankViewThenSignOut } from './read-only-bank-view-then-sign-out';
import { post as replaceAVaShiftWithAGrokBot } from './replace-a-va-shift-with-a-grok-bot';
import { post as retireTheAutomationYouReplaced } from './retire-the-automation-you-replaced';
import { post as rotateVendorAccessAfterABadGrokBotIncident } from './rotate-vendor-access-after-a-bad-grok-bot-incident';
import { post as scoreWhetherThisGrokBotPaidForItself } from './score-whether-this-grok-bot-paid-for-itself';
import { post as screensAreNotBoundaries } from './screens-are-not-boundaries';
import { post as selfHostingAiAgentsGuide } from './self-hosting-ai-agents-guide';
import { post as shareAGrokBot } from './share-a-grok-bot';
import { post as shouldOverflowPushYouToAHigherPlan } from './should-overflow-push-you-to-a-higher-plan';
import { post as sixBotsToAChannel } from './six-bots-to-a-channel';
import { post as teachGrokBotByDemonstration } from './teach-grok-bot-by-demonstration';
import { post as testingYourBot } from './testing-your-bot';
import { post as theFiveQuestionsBeforeYourFirstBot } from './the-five-questions-before-your-first-bot';
import { post as thePmAttentionList } from './the-pm-attention-list';
import { post as whatAPastedPromptInherits } from './what-a-pasted-prompt-inherits';
import { post as whatARoutineIsAndWhereItDies } from './what-a-routine-is-and-where-it-dies';
import { post as whatAiBotsCost } from './what-ai-bots-cost';
import { post as whatAnApprovalActuallyGoverns } from './what-an-approval-actually-governs';
import { post as whatIsAGrokBot } from './what-is-a-grok-bot';
import { post as whatMakesAWeakBoundary } from './what-makes-a-weak-boundary';
import { post as whatSurvivesIfYouDropGrokBot } from './what-survives-if-you-drop-grok-bot';
import { post as whatYouCannotCap } from './what-you-cannot-cap';
import { post as whenBotsGoWrong } from './when-bots-go-wrong';
import { post as whenNotToUseABot } from './when-not-to-use-a-bot';
import { post as whereABotCookieActuallyLives } from './where-a-bot-cookie-actually-lives';
import { post as whichSurfaceReadsSkillMd } from './which-surface-reads-skill-md';
import { post as whoCanActuallyRunGrokBot } from './who-can-actually-run-grok-bot';
import { post as whyDeletingABotLeavesTheFiles } from './why-deleting-a-bot-leaves-the-files';
import { post as whyGrokBotHasNoLinuxApp } from './why-grok-bot-has-no-linux-app';
import { post as whyIsThisGrokBotInSomeoneElsesDashboard } from './why-is-this-grok-bot-in-someone-elses-dashboard';
import { post as whyTheModelBehindGrokBotIsUnpublished } from './why-the-model-behind-grok-bot-is-unpublished';
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
  'a-boundary-is-not-a-permission': aBoundaryIsNotAPermission,
  'account-expert-internal-brief': accountExpertInternalBrief,
  'account-tiering-pack-never-changes-owner': accountTieringPackNeverChangesOwner,
  'ad-creative-drafts-never-go-live': adCreativeDraftsNeverGoLive,
  'agent-inbox-is-not-gmail-send': agentInboxIsNotGmailSend,
  'ai-agent-platforms-compared': aiAgentPlatformsCompared,
  'ai-agents-vs-hiring': aiAgentsVsHiring,
  'ai-agents-vs-rpa': aiAgentsVsRpa,
  'ai-agents-vs-workflow-builders': aiAgentsVsWorkflowBuilders,
  'ai-bots-complete-guide': aiBotsCompleteGuide,
  'approval-fatigue-and-the-blanket-yes': approvalFatigueAndTheBlanketYes,
  'approval-gates-for-bots': approvalGatesForBots,
  'best-ai-bots-for-developers': bestAiBotsForDevelopers,
  'best-ai-bots-for-founders': bestAiBotsForFounders,
  'best-ai-bots-for-marketing': bestAiBotsForMarketing,
  'best-ai-bots-for-sales': bestAiBotsForSales,
  'best-ai-bots-for-support': bestAiBotsForSupport,
  'booking-pipeline-never-charges-the-card': bookingPipelineNeverChargesTheCard,
  'bookkeeping-auditor-never-posts-the-journal': bookkeepingAuditorNeverPostsTheJournal,
  'bot-capacity-planning': botCapacityPlanning,
  'bot-change-management': botChangeManagement,
  'bot-charter-anti-patterns': botCharterAntiPatterns,
  'bot-cost-control': botCostControl,
  'bot-data-retention': botDataRetention,
  'bot-delegation-playbook': botDelegationPlaybook,
  'bot-failure-modes': botFailureModes,
  'bot-handoff-to-human': botHandoffToHuman,
  'bot-incident-response': botIncidentResponse,
  'bot-integrations-complete-guide': botIntegrationsCompleteGuide,
  'bot-observability': botObservability,
  'bot-prompt-engineering': botPromptEngineering,
  'bot-security-complete-guide': botSecurityCompleteGuide,
  'bot-system-architecture': botSystemArchitecture,
  'bot-that-never-sends': botThatNeverSends,
  'botdirectory-alternatives': botdirectoryAlternatives,
  'bots-and-1password': botsAnd1password,
  'bots-and-asana': botsAndAsana,
  'bots-and-aws': botsAndAws,
  'bots-and-clickup': botsAndClickup,
  'bots-and-docusign': botsAndDocusign,
  'bots-and-figma': botsAndFigma,
  'bots-and-jira-service-management': botsAndJiraServiceManagement,
  'bots-and-mixpanel': botsAndMixpanel,
  'bots-and-monday': botsAndMonday,
  'bots-and-okta': botsAndOkta,
  'bots-and-supabase': botsAndSupabase,
  'bots-and-webflow': botsAndWebflow,
  'bots-and-whatsapp': botsAndWhatsapp,
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
  'cheapest-way-into-grok-bot': cheapestWayIntoGrokBot,
  'copy-a-botskills-listing-onto-a-second-seat': copyABotskillsListingOntoASecondSeat,
  'delete-a-grok-bot-safely': deleteAGrokBotSafely,
  'download-grok-bot': downloadGrokBot,
  'email-injection-sentinel-read-only': emailInjectionSentinelReadOnly,
  'explain-grok-bot-to-your-boss': explainGrokBotToYourBoss,
  'first-grok-bot-in-an-hour': firstGrokBotInAnHour,
  'grok-bot-2fa-prompt': grokBot2faPrompt,
  'grok-bot-account-health': grokBotAccountHealth,
  'grok-bot-agentmail': grokBotAgentmail,
  'grok-bot-agentmail-vs-gmail': grokBotAgentmailVsGmail,
  'grok-bot-airtable': grokBotAirtable,
  'grok-bot-amazon-cart': grokBotAmazonCart,
  'grok-bot-android-status': grokBotAndroidStatus,
  'grok-bot-approval-rules-reversibility': grokBotApprovalRulesReversibility,
  'grok-bot-avoiding-ai-slop': grokBotAvoidingAiSlop,
  'grok-bot-both-subscriptions': grokBotBothSubscriptions,
  'grok-bot-boundaries': grokBotBoundaries,
  'grok-bot-browser-broke': grokBotBrowserBroke,
  'grok-bot-bug-reproduction': grokBotBugReproduction,
  'grok-bot-calendar-manager': grokBotCalendarManager,
  'grok-bot-cannot-see-files': grokBotCannotSeeFiles,
  'grok-bot-cannot-send-email': grokBotCannotSendEmail,
  'grok-bot-chief-of-staff-setup': grokBotChiefOfStaffSetup,
  'grok-bot-claude-code-skills-compatibility': grokBotClaudeCodeSkillsCompatibility,
  'grok-bot-clip-youtube-podcast': grokBotClipYoutubePodcast,
  'grok-bot-community-manager': grokBotCommunityManager,
  'grok-bot-compare-booking-prices': grokBotCompareBookingPrices,
  'grok-bot-composio': grokBotComposio,
  'grok-bot-cost': grokBotCost,
  'grok-bot-crm-hygiene': grokBotCrmHygiene,
  'grok-bot-cursor-account-explained': grokBotCursorAccountExplained,
  'grok-bot-cursor-pro-plus': grokBotCursorProPlus,
  'grok-bot-deepseek-routing': grokBotDeepseekRouting,
  'grok-bot-devils-advocate': grokBotDevilsAdvocate,
  'grok-bot-directory-business': grokBotDirectoryBusiness,
  'grok-bot-discord': grokBotDiscord,
  'grok-bot-enterprise-waitlist': grokBotEnterpriseWaitlist,
  'grok-bot-evidence-rules': grokBotEvidenceRules,
  'grok-bot-examples': grokBotExamples,
  'grok-bot-executive-briefing': grokBotExecutiveBriefing,
  'grok-bot-expense-manager': grokBotExpenseManager,
  'grok-bot-false-positives': grokBotFalsePositives,
  'grok-bot-figma-production-files': grokBotFigmaProductionFiles,
  'grok-bot-first-week': grokBotFirstWeek,
  'grok-bot-firstmate': grokBotFirstmate,
  'grok-bot-five-part-brief': grokBotFivePartBrief,
  'grok-bot-fleet-audit': grokBotFleetAudit,
  'grok-bot-for-accountants': grokBotForAccountants,
  'grok-bot-for-agencies-isolation': grokBotForAgenciesIsolation,
  'grok-bot-for-customer-success': grokBotForCustomerSuccess,
  'grok-bot-for-designers-figma-motion': grokBotForDesignersFigmaMotion,
  'grok-bot-for-engineers-ops-not-merge': grokBotForEngineersOpsNotMerge,
  'grok-bot-for-founders-week-one': grokBotForFoundersWeekOne,
  'grok-bot-for-gtm-teams': grokBotForGtmTeams,
  'grok-bot-for-hr': grokBotForHr,
  'grok-bot-for-lawyers': grokBotForLawyers,
  'grok-bot-for-mobile-app-teams': grokBotForMobileAppTeams,
  'grok-bot-for-nonprofits': grokBotForNonprofits,
  'grok-bot-for-revops': grokBotForRevops,
  'grok-bot-for-security-teams': grokBotForSecurityTeams,
  'grok-bot-for-students': grokBotForStudents,
  'grok-bot-for-youtube-creators': grokBotForYoutubeCreators,
  'grok-bot-free-trial': grokBotFreeTrial,
  'grok-bot-github': grokBotGithub,
  'grok-bot-gmail': grokBotGmail,
  'grok-bot-google-calendar': grokBotGoogleCalendar,
  'grok-bot-google-drive': grokBotGoogleDrive,
  'grok-bot-google-sheets': grokBotGoogleSheets,
  'grok-bot-grok-imagine-storyboard': grokBotGrokImagineStoryboard,
  'grok-bot-group-chat': grokBotGroupChat,
  'grok-bot-hobby-and-pro-exclusion': grokBotHobbyAndProExclusion,
  'grok-bot-hosted-mcp-tokens': grokBotHostedMcpTokens,
  'grok-bot-hubspot': grokBotHubspot,
  'grok-bot-integrations-list': grokBotIntegrationsList,
  'grok-bot-intercom': grokBotIntercom,
  'grok-bot-ipad-status': grokBotIpadStatus,
  'grok-bot-iphone-app': grokBotIphoneApp,
  'grok-bot-iphone-cannot-edit': grokBotIphoneCannotEdit,
  'grok-bot-jira': grokBotJira,
  'grok-bot-linear': grokBotLinear,
  'grok-bot-login-failed': grokBotLoginFailed,
  'grok-bot-mac-intel': grokBotMacIntel,
  'grok-bot-marketing-os': grokBotMarketingOs,
  'grok-bot-mcp-servers': grokBotMcpServers,
  'grok-bot-memory': grokBotMemory,
  'grok-bot-naming': grokBotNaming,
  'grok-bot-no-audit-log-yet': grokBotNoAuditLogYet,
  'grok-bot-no-spend-cap-ops': grokBotNoSpendCapOps,
  'grok-bot-not-a-sandbox': grokBotNotASandbox,
  'grok-bot-notion': grokBotNotion,
  'grok-bot-obsidian-knowledge-base': grokBotObsidianKnowledgeBase,
  'grok-bot-on-call': grokBotOnCall,
  'grok-bot-on-demand-usage': grokBotOnDemandUsage,
  'grok-bot-one-computer-many-screens': grokBotOneComputerManyScreens,
  'grok-bot-outlook': grokBotOutlook,
  'grok-bot-overwatch-shared-vm': grokBotOverwatchSharedVm,
  'grok-bot-paid-media': grokBotPaidMedia,
  'grok-bot-paper-trading': grokBotPaperTrading,
  'grok-bot-permissions-explained': grokBotPermissionsExplained,
  'grok-bot-plugin-missing': grokBotPluginMissing,
  'grok-bot-plugins-2026': grokBotPlugins2026,
  'grok-bot-plugins-catalog': grokBotPluginsCatalog,
  'grok-bot-pr-factory': grokBotPrFactory,
  'grok-bot-preflight-checklist': grokBotPreflightChecklist,
  'grok-bot-privacy-mode': grokBotPrivacyMode,
  'grok-bot-product-investigation': grokBotProductInvestigation,
  'grok-bot-prompt-injection-email': grokBotPromptInjectionEmail,
  'grok-bot-prompts-that-work': grokBotPromptsThatWork,
  'grok-bot-quickbooks': grokBotQuickbooks,
  'grok-bot-quota-exceeded': grokBotQuotaExceeded,
  'grok-bot-regulated-industries': grokBotRegulatedIndustries,
  'grok-bot-retirement': grokBotRetirement,
  'grok-bot-review-fatigue': grokBotReviewFatigue,
  'grok-bot-routine-did-not-run': grokBotRoutineDidNotRun,
  'grok-bot-routines-vs-triggers': grokBotRoutinesVsTriggers,
  'grok-bot-runbook': grokBotRunbook,
  'grok-bot-runs-with-laptop-closed': grokBotRunsWithLaptopClosed,
  'grok-bot-safety-checklist': grokBotSafetyChecklist,
  'grok-bot-sales-outbound': grokBotSalesOutbound,
  'grok-bot-salesforce': grokBotSalesforce,
  'grok-bot-scheduling': grokBotScheduling,
  'grok-bot-setup-guide': grokBotSetupGuide,
  'grok-bot-shadow-mode': grokBotShadowMode,
  'grok-bot-shared-computer-security': grokBotSharedComputerSecurity,
  'grok-bot-shopify': grokBotShopify,
  'grok-bot-slack': grokBotSlack,
  'grok-bot-spend-cap-and-token-burn': grokBotSpendCapAndTokenBurn,
  'grok-bot-sponsorship-inbox-score': grokBotSponsorshipInboxScore,
  'grok-bot-stalled': grokBotStalled,
  'grok-bot-starter-charter-template': grokBotStarterCharterTemplate,
  'grok-bot-starter-roster': grokBotStarterRoster,
  'grok-bot-static-egress-ip': grokBotStaticEgressIp,
  'grok-bot-stripe': grokBotStripe,
  'grok-bot-supergrok-plus': grokBotSupergrokPlus,
  'grok-bot-supported-platforms': grokBotSupportedPlatforms,
  'grok-bot-switch-intent-on-x': grokBotSwitchIntentOnX,
  'grok-bot-talent-scout': grokBotTalentScout,
  'grok-bot-teams-standard': grokBotTeamsStandard,
  'grok-bot-telegram-bridge': grokBotTelegramBridge,
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
  'grok-bot-transcriptapi-vs-browser': grokBotTranscriptapiVsBrowser,
  'grok-bot-troubleshooting': grokBotTroubleshooting,
  'grok-bot-vision-md': grokBotVisionMd,
  'grok-bot-vs-chatgpt-agent': grokBotVsChatgptAgent,
  'grok-bot-vs-chatgpt-tasks': grokBotVsChatgptTasks,
  'grok-bot-vs-chatgpt-work': grokBotVsChatgptWork,
  'grok-bot-vs-claude-agent': grokBotVsClaudeAgent,
  'grok-bot-vs-claude-cowork': grokBotVsClaudeCowork,
  'grok-bot-vs-claude-cowork-vs-chatgpt-work': grokBotVsClaudeCoworkVsChatgptWork,
  'grok-bot-vs-computer-use': grokBotVsComputerUse,
  'grok-bot-vs-cursor-background-agent': grokBotVsCursorBackgroundAgent,
  'grok-bot-vs-devin': grokBotVsDevin,
  'grok-bot-vs-gemini-gems': grokBotVsGeminiGems,
  'grok-bot-vs-genspark': grokBotVsGenspark,
  'grok-bot-vs-grok-build': grokBotVsGrokBuild,
  'grok-bot-vs-grok-the-chatbot': grokBotVsGrokTheChatbot,
  'grok-bot-vs-grokbot-dev': grokBotVsGrokbotDev,
  'grok-bot-vs-groq': grokBotVsGroq,
  'grok-bot-vs-lindy': grokBotVsLindy,
  'grok-bot-vs-lindy-vs-cowork': grokBotVsLindyVsCowork,
  'grok-bot-vs-make': grokBotVsMake,
  'grok-bot-vs-manus': grokBotVsManus,
  'grok-bot-vs-microsoft-copilot': grokBotVsMicrosoftCopilot,
  'grok-bot-vs-n8n': grokBotVsN8n,
  'grok-bot-vs-openai-operator': grokBotVsOpenaiOperator,
  'grok-bot-vs-openclaw-vs-hermes-vs-buzz': grokBotVsOpenclawVsHermesVsBuzz,
  'grok-bot-vs-perplexity-computer': grokBotVsPerplexityComputer,
  'grok-bot-vs-rabbit': grokBotVsRabbit,
  'grok-bot-vs-zapier': grokBotVsZapier,
  'grok-bot-week-one-mistakes': grokBotWeekOneMistakes,
  'grok-bot-weekly-allowance': grokBotWeeklyAllowance,
  'grok-bot-whop-cli-commerce': grokBotWhopCliCommerce,
  'grok-bot-windows-setup': grokBotWindowsSetup,
  'grok-bot-workforce-checker': grokBotWorkforceChecker,
  'grok-bot-wrong-account-signed-in': grokBotWrongAccountSignedIn,
  'grok-bot-x-content-automation-risks': grokBotXContentAutomationRisks,
  'grok-bot-x-twitter': grokBotXTwitter,
  'grok-bot-youtube-manager': grokBotYoutubeManager,
  'grok-bot-youtube-transcripts': grokBotYoutubeTranscripts,
  'grok-bot-zoom': grokBotZoom,
  'hand-a-contractor-the-charter-not-the-login': handAContractorTheCharterNotTheLogin,
  'how-bots-on-grok-actually-work': howBotsOnGrokActuallyWork,
  'how-to-answer-security-questionnaires': howToAnswerSecurityQuestionnaires,
  'how-to-audit-a-bot-you-inherited': howToAuditABotYouInherited,
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
  'how-to-connect-gmail-to-grok-bot': howToConnectGmailToGrokBot,
  'how-to-create-a-grok-bot': howToCreateAGrokBot,
  'how-to-isolate-grok-bot-credentials': howToIsolateGrokBotCredentials,
  'how-to-keep-sales-decks-current': howToKeepSalesDecksCurrent,
  'how-to-maintain-an-org-chart': howToMaintainAnOrgChart,
  'how-to-pause-a-grok-bot-on-iphone': howToPauseAGrokBotOnIphone,
  'how-to-schedule-a-grok-bot-routine': howToScheduleAGrokBotRoutine,
  'how-to-set-grok-bot-approvals': howToSetGrokBotApprovals,
  'how-to-stop-grok-bot-overspending': howToStopGrokBotOverspending,
  'how-to-test-a-grok-bot-on-trial': howToTestAGrokBotOnTrial,
  'how-to-track-customer-promises': howToTrackCustomerPromises,
  'how-to-write-a-boundary-line': howToWriteABoundaryLine,
  'how-to-write-a-grok-bot-charter-2026': howToWriteAGrokBotCharter2026,
  'is-grok-bot-worth-it': isGrokBotWorthIt,
  'learn-grok-bot': learnGrokBot,
  'least-privilege-bots': leastPrivilegeBots,
  'local-computer-approvals-are-not-undo': localComputerApprovalsAreNotUndo,
  'mcp-vs-connectors': mcpVsConnectors,
  'measuring-bot-roi': measuringBotRoi,
  'migrate-grok-bot-to-rakazo': migrateGrokBotToRakazo,
  'move-a-make-scenario-to-a-bot': moveAMakeScenarioToABot,
  'move-a-nightly-csv-pull-onto-grok-bot': moveANightlyCsvPullOntoGrokBot,
  'move-a-zap-to-a-bot': moveAZapToABot,
  'move-an-iphone-shortcut-to-a-bot': moveAnIphoneShortcutToABot,
  'move-an-n8n-workflow-to-a-bot': moveAnN8nWorkflowToABot,
  'move-grok-bot-work-from-personal-to-work': moveGrokBotWorkFromPersonalToWork,
  'multi-bot-teams': multiBotTeams,
  'multi-tenant-bot-risk': multiTenantBotRisk,
  'open-source-bot-runtimes': openSourceBotRuntimes,
  'persistent-memory-file-is-not-a-vault': persistentMemoryFileIsNotAVault,
  'personal-cfo-brief-never-moves-money': personalCfoBriefNeverMovesMoney,
  'pick-the-first-grok-bot-job': pickTheFirstGrokBotJob,
  'prompt-injection-for-operators': promptInjectionForOperators,
  'prove-grok-bot-to-a-risk-committee': proveGrokBotToARiskCommittee,
  'pto-coverage-for-a-live-grok-bot': ptoCoverageForALiveGrokBot,
  'rakazo-model-choice': rakazoModelChoice,
  'rakazo-permissions-audit': rakazoPermissionsAudit,
  'rakazo-routines': rakazoRoutines,
  'rakazo-sandbox-options': rakazoSandboxOptions,
  'rakazo-self-hosting-guide': rakazoSelfHostingGuide,
  'rakazo-vs-grok-bot': rakazoVsGrokBot,
  'read-a-grok-bot-listing': readAGrokBotListing,
  'read-only-bank-view-then-sign-out': readOnlyBankViewThenSignOut,
  'replace-a-va-shift-with-a-grok-bot': replaceAVaShiftWithAGrokBot,
  'retire-the-automation-you-replaced': retireTheAutomationYouReplaced,
  'rotate-vendor-access-after-a-bad-grok-bot-incident': rotateVendorAccessAfterABadGrokBotIncident,
  'score-whether-this-grok-bot-paid-for-itself': scoreWhetherThisGrokBotPaidForItself,
  'screens-are-not-boundaries': screensAreNotBoundaries,
  'self-hosting-ai-agents-guide': selfHostingAiAgentsGuide,
  'share-a-grok-bot': shareAGrokBot,
  'should-overflow-push-you-to-a-higher-plan': shouldOverflowPushYouToAHigherPlan,
  'six-bots-to-a-channel': sixBotsToAChannel,
  'teach-grok-bot-by-demonstration': teachGrokBotByDemonstration,
  'testing-your-bot': testingYourBot,
  'the-five-questions-before-your-first-bot': theFiveQuestionsBeforeYourFirstBot,
  'the-pm-attention-list': thePmAttentionList,
  'what-a-pasted-prompt-inherits': whatAPastedPromptInherits,
  'what-a-routine-is-and-where-it-dies': whatARoutineIsAndWhereItDies,
  'what-ai-bots-cost': whatAiBotsCost,
  'what-an-approval-actually-governs': whatAnApprovalActuallyGoverns,
  'what-is-a-grok-bot': whatIsAGrokBot,
  'what-makes-a-weak-boundary': whatMakesAWeakBoundary,
  'what-survives-if-you-drop-grok-bot': whatSurvivesIfYouDropGrokBot,
  'what-you-cannot-cap': whatYouCannotCap,
  'when-bots-go-wrong': whenBotsGoWrong,
  'when-not-to-use-a-bot': whenNotToUseABot,
  'where-a-bot-cookie-actually-lives': whereABotCookieActuallyLives,
  'which-surface-reads-skill-md': whichSurfaceReadsSkillMd,
  'who-can-actually-run-grok-bot': whoCanActuallyRunGrokBot,
  'why-deleting-a-bot-leaves-the-files': whyDeletingABotLeavesTheFiles,
  'why-grok-bot-has-no-linux-app': whyGrokBotHasNoLinuxApp,
  'why-is-this-grok-bot-in-someone-elses-dashboard': whyIsThisGrokBotInSomeoneElsesDashboard,
  'why-the-model-behind-grok-bot-is-unpublished': whyTheModelBehindGrokBotIsUnpublished,
  'writing-bot-setups-complete-guide': writingBotSetupsCompleteGuide,
};

export const postList: Array<{ slug: string } & BlogPost> = [
  { slug: 'introducing-botskills', ...introducingBotskills },
  { slug: 'one-person-company-grok-bot', ...onePersonCompanyGrokBot },
  { slug: 'a-boundary-is-not-a-permission', ...aBoundaryIsNotAPermission },
  { slug: 'account-expert-internal-brief', ...accountExpertInternalBrief },
  { slug: 'account-tiering-pack-never-changes-owner', ...accountTieringPackNeverChangesOwner },
  { slug: 'ad-creative-drafts-never-go-live', ...adCreativeDraftsNeverGoLive },
  { slug: 'agent-inbox-is-not-gmail-send', ...agentInboxIsNotGmailSend },
  { slug: 'ai-agent-platforms-compared', ...aiAgentPlatformsCompared },
  { slug: 'ai-agents-vs-hiring', ...aiAgentsVsHiring },
  { slug: 'ai-agents-vs-rpa', ...aiAgentsVsRpa },
  { slug: 'ai-agents-vs-workflow-builders', ...aiAgentsVsWorkflowBuilders },
  { slug: 'ai-bots-complete-guide', ...aiBotsCompleteGuide },
  { slug: 'approval-fatigue-and-the-blanket-yes', ...approvalFatigueAndTheBlanketYes },
  { slug: 'approval-gates-for-bots', ...approvalGatesForBots },
  { slug: 'best-ai-bots-for-developers', ...bestAiBotsForDevelopers },
  { slug: 'best-ai-bots-for-founders', ...bestAiBotsForFounders },
  { slug: 'best-ai-bots-for-marketing', ...bestAiBotsForMarketing },
  { slug: 'best-ai-bots-for-sales', ...bestAiBotsForSales },
  { slug: 'best-ai-bots-for-support', ...bestAiBotsForSupport },
  { slug: 'booking-pipeline-never-charges-the-card', ...bookingPipelineNeverChargesTheCard },
  { slug: 'bookkeeping-auditor-never-posts-the-journal', ...bookkeepingAuditorNeverPostsTheJournal },
  { slug: 'bot-capacity-planning', ...botCapacityPlanning },
  { slug: 'bot-change-management', ...botChangeManagement },
  { slug: 'bot-charter-anti-patterns', ...botCharterAntiPatterns },
  { slug: 'bot-cost-control', ...botCostControl },
  { slug: 'bot-data-retention', ...botDataRetention },
  { slug: 'bot-delegation-playbook', ...botDelegationPlaybook },
  { slug: 'bot-failure-modes', ...botFailureModes },
  { slug: 'bot-handoff-to-human', ...botHandoffToHuman },
  { slug: 'bot-incident-response', ...botIncidentResponse },
  { slug: 'bot-integrations-complete-guide', ...botIntegrationsCompleteGuide },
  { slug: 'bot-observability', ...botObservability },
  { slug: 'bot-prompt-engineering', ...botPromptEngineering },
  { slug: 'bot-security-complete-guide', ...botSecurityCompleteGuide },
  { slug: 'bot-system-architecture', ...botSystemArchitecture },
  { slug: 'bot-that-never-sends', ...botThatNeverSends },
  { slug: 'botdirectory-alternatives', ...botdirectoryAlternatives },
  { slug: 'bots-and-1password', ...botsAnd1password },
  { slug: 'bots-and-asana', ...botsAndAsana },
  { slug: 'bots-and-aws', ...botsAndAws },
  { slug: 'bots-and-clickup', ...botsAndClickup },
  { slug: 'bots-and-docusign', ...botsAndDocusign },
  { slug: 'bots-and-figma', ...botsAndFigma },
  { slug: 'bots-and-jira-service-management', ...botsAndJiraServiceManagement },
  { slug: 'bots-and-mixpanel', ...botsAndMixpanel },
  { slug: 'bots-and-monday', ...botsAndMonday },
  { slug: 'bots-and-okta', ...botsAndOkta },
  { slug: 'bots-and-supabase', ...botsAndSupabase },
  { slug: 'bots-and-webflow', ...botsAndWebflow },
  { slug: 'bots-and-whatsapp', ...botsAndWhatsapp },
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
  { slug: 'cheapest-way-into-grok-bot', ...cheapestWayIntoGrokBot },
  { slug: 'copy-a-botskills-listing-onto-a-second-seat', ...copyABotskillsListingOntoASecondSeat },
  { slug: 'delete-a-grok-bot-safely', ...deleteAGrokBotSafely },
  { slug: 'download-grok-bot', ...downloadGrokBot },
  { slug: 'email-injection-sentinel-read-only', ...emailInjectionSentinelReadOnly },
  { slug: 'explain-grok-bot-to-your-boss', ...explainGrokBotToYourBoss },
  { slug: 'first-grok-bot-in-an-hour', ...firstGrokBotInAnHour },
  { slug: 'grok-bot-2fa-prompt', ...grokBot2faPrompt },
  { slug: 'grok-bot-account-health', ...grokBotAccountHealth },
  { slug: 'grok-bot-agentmail', ...grokBotAgentmail },
  { slug: 'grok-bot-agentmail-vs-gmail', ...grokBotAgentmailVsGmail },
  { slug: 'grok-bot-airtable', ...grokBotAirtable },
  { slug: 'grok-bot-amazon-cart', ...grokBotAmazonCart },
  { slug: 'grok-bot-android-status', ...grokBotAndroidStatus },
  { slug: 'grok-bot-approval-rules-reversibility', ...grokBotApprovalRulesReversibility },
  { slug: 'grok-bot-avoiding-ai-slop', ...grokBotAvoidingAiSlop },
  { slug: 'grok-bot-both-subscriptions', ...grokBotBothSubscriptions },
  { slug: 'grok-bot-boundaries', ...grokBotBoundaries },
  { slug: 'grok-bot-browser-broke', ...grokBotBrowserBroke },
  { slug: 'grok-bot-bug-reproduction', ...grokBotBugReproduction },
  { slug: 'grok-bot-calendar-manager', ...grokBotCalendarManager },
  { slug: 'grok-bot-cannot-see-files', ...grokBotCannotSeeFiles },
  { slug: 'grok-bot-cannot-send-email', ...grokBotCannotSendEmail },
  { slug: 'grok-bot-chief-of-staff-setup', ...grokBotChiefOfStaffSetup },
  { slug: 'grok-bot-claude-code-skills-compatibility', ...grokBotClaudeCodeSkillsCompatibility },
  { slug: 'grok-bot-clip-youtube-podcast', ...grokBotClipYoutubePodcast },
  { slug: 'grok-bot-community-manager', ...grokBotCommunityManager },
  { slug: 'grok-bot-compare-booking-prices', ...grokBotCompareBookingPrices },
  { slug: 'grok-bot-composio', ...grokBotComposio },
  { slug: 'grok-bot-cost', ...grokBotCost },
  { slug: 'grok-bot-crm-hygiene', ...grokBotCrmHygiene },
  { slug: 'grok-bot-cursor-account-explained', ...grokBotCursorAccountExplained },
  { slug: 'grok-bot-cursor-pro-plus', ...grokBotCursorProPlus },
  { slug: 'grok-bot-deepseek-routing', ...grokBotDeepseekRouting },
  { slug: 'grok-bot-devils-advocate', ...grokBotDevilsAdvocate },
  { slug: 'grok-bot-directory-business', ...grokBotDirectoryBusiness },
  { slug: 'grok-bot-discord', ...grokBotDiscord },
  { slug: 'grok-bot-enterprise-waitlist', ...grokBotEnterpriseWaitlist },
  { slug: 'grok-bot-evidence-rules', ...grokBotEvidenceRules },
  { slug: 'grok-bot-examples', ...grokBotExamples },
  { slug: 'grok-bot-executive-briefing', ...grokBotExecutiveBriefing },
  { slug: 'grok-bot-expense-manager', ...grokBotExpenseManager },
  { slug: 'grok-bot-false-positives', ...grokBotFalsePositives },
  { slug: 'grok-bot-figma-production-files', ...grokBotFigmaProductionFiles },
  { slug: 'grok-bot-first-week', ...grokBotFirstWeek },
  { slug: 'grok-bot-firstmate', ...grokBotFirstmate },
  { slug: 'grok-bot-five-part-brief', ...grokBotFivePartBrief },
  { slug: 'grok-bot-fleet-audit', ...grokBotFleetAudit },
  { slug: 'grok-bot-for-accountants', ...grokBotForAccountants },
  { slug: 'grok-bot-for-agencies-isolation', ...grokBotForAgenciesIsolation },
  { slug: 'grok-bot-for-customer-success', ...grokBotForCustomerSuccess },
  { slug: 'grok-bot-for-designers-figma-motion', ...grokBotForDesignersFigmaMotion },
  { slug: 'grok-bot-for-engineers-ops-not-merge', ...grokBotForEngineersOpsNotMerge },
  { slug: 'grok-bot-for-founders-week-one', ...grokBotForFoundersWeekOne },
  { slug: 'grok-bot-for-gtm-teams', ...grokBotForGtmTeams },
  { slug: 'grok-bot-for-hr', ...grokBotForHr },
  { slug: 'grok-bot-for-lawyers', ...grokBotForLawyers },
  { slug: 'grok-bot-for-mobile-app-teams', ...grokBotForMobileAppTeams },
  { slug: 'grok-bot-for-nonprofits', ...grokBotForNonprofits },
  { slug: 'grok-bot-for-revops', ...grokBotForRevops },
  { slug: 'grok-bot-for-security-teams', ...grokBotForSecurityTeams },
  { slug: 'grok-bot-for-students', ...grokBotForStudents },
  { slug: 'grok-bot-for-youtube-creators', ...grokBotForYoutubeCreators },
  { slug: 'grok-bot-free-trial', ...grokBotFreeTrial },
  { slug: 'grok-bot-github', ...grokBotGithub },
  { slug: 'grok-bot-gmail', ...grokBotGmail },
  { slug: 'grok-bot-google-calendar', ...grokBotGoogleCalendar },
  { slug: 'grok-bot-google-drive', ...grokBotGoogleDrive },
  { slug: 'grok-bot-google-sheets', ...grokBotGoogleSheets },
  { slug: 'grok-bot-grok-imagine-storyboard', ...grokBotGrokImagineStoryboard },
  { slug: 'grok-bot-group-chat', ...grokBotGroupChat },
  { slug: 'grok-bot-hobby-and-pro-exclusion', ...grokBotHobbyAndProExclusion },
  { slug: 'grok-bot-hosted-mcp-tokens', ...grokBotHostedMcpTokens },
  { slug: 'grok-bot-hubspot', ...grokBotHubspot },
  { slug: 'grok-bot-integrations-list', ...grokBotIntegrationsList },
  { slug: 'grok-bot-intercom', ...grokBotIntercom },
  { slug: 'grok-bot-ipad-status', ...grokBotIpadStatus },
  { slug: 'grok-bot-iphone-app', ...grokBotIphoneApp },
  { slug: 'grok-bot-iphone-cannot-edit', ...grokBotIphoneCannotEdit },
  { slug: 'grok-bot-jira', ...grokBotJira },
  { slug: 'grok-bot-linear', ...grokBotLinear },
  { slug: 'grok-bot-login-failed', ...grokBotLoginFailed },
  { slug: 'grok-bot-mac-intel', ...grokBotMacIntel },
  { slug: 'grok-bot-marketing-os', ...grokBotMarketingOs },
  { slug: 'grok-bot-mcp-servers', ...grokBotMcpServers },
  { slug: 'grok-bot-memory', ...grokBotMemory },
  { slug: 'grok-bot-naming', ...grokBotNaming },
  { slug: 'grok-bot-no-audit-log-yet', ...grokBotNoAuditLogYet },
  { slug: 'grok-bot-no-spend-cap-ops', ...grokBotNoSpendCapOps },
  { slug: 'grok-bot-not-a-sandbox', ...grokBotNotASandbox },
  { slug: 'grok-bot-notion', ...grokBotNotion },
  { slug: 'grok-bot-obsidian-knowledge-base', ...grokBotObsidianKnowledgeBase },
  { slug: 'grok-bot-on-call', ...grokBotOnCall },
  { slug: 'grok-bot-on-demand-usage', ...grokBotOnDemandUsage },
  { slug: 'grok-bot-one-computer-many-screens', ...grokBotOneComputerManyScreens },
  { slug: 'grok-bot-outlook', ...grokBotOutlook },
  { slug: 'grok-bot-overwatch-shared-vm', ...grokBotOverwatchSharedVm },
  { slug: 'grok-bot-paid-media', ...grokBotPaidMedia },
  { slug: 'grok-bot-paper-trading', ...grokBotPaperTrading },
  { slug: 'grok-bot-permissions-explained', ...grokBotPermissionsExplained },
  { slug: 'grok-bot-plugin-missing', ...grokBotPluginMissing },
  { slug: 'grok-bot-plugins-2026', ...grokBotPlugins2026 },
  { slug: 'grok-bot-plugins-catalog', ...grokBotPluginsCatalog },
  { slug: 'grok-bot-pr-factory', ...grokBotPrFactory },
  { slug: 'grok-bot-preflight-checklist', ...grokBotPreflightChecklist },
  { slug: 'grok-bot-privacy-mode', ...grokBotPrivacyMode },
  { slug: 'grok-bot-product-investigation', ...grokBotProductInvestigation },
  { slug: 'grok-bot-prompt-injection-email', ...grokBotPromptInjectionEmail },
  { slug: 'grok-bot-prompts-that-work', ...grokBotPromptsThatWork },
  { slug: 'grok-bot-quickbooks', ...grokBotQuickbooks },
  { slug: 'grok-bot-quota-exceeded', ...grokBotQuotaExceeded },
  { slug: 'grok-bot-regulated-industries', ...grokBotRegulatedIndustries },
  { slug: 'grok-bot-retirement', ...grokBotRetirement },
  { slug: 'grok-bot-review-fatigue', ...grokBotReviewFatigue },
  { slug: 'grok-bot-routine-did-not-run', ...grokBotRoutineDidNotRun },
  { slug: 'grok-bot-routines-vs-triggers', ...grokBotRoutinesVsTriggers },
  { slug: 'grok-bot-runbook', ...grokBotRunbook },
  { slug: 'grok-bot-runs-with-laptop-closed', ...grokBotRunsWithLaptopClosed },
  { slug: 'grok-bot-safety-checklist', ...grokBotSafetyChecklist },
  { slug: 'grok-bot-sales-outbound', ...grokBotSalesOutbound },
  { slug: 'grok-bot-salesforce', ...grokBotSalesforce },
  { slug: 'grok-bot-scheduling', ...grokBotScheduling },
  { slug: 'grok-bot-setup-guide', ...grokBotSetupGuide },
  { slug: 'grok-bot-shadow-mode', ...grokBotShadowMode },
  { slug: 'grok-bot-shared-computer-security', ...grokBotSharedComputerSecurity },
  { slug: 'grok-bot-shopify', ...grokBotShopify },
  { slug: 'grok-bot-slack', ...grokBotSlack },
  { slug: 'grok-bot-spend-cap-and-token-burn', ...grokBotSpendCapAndTokenBurn },
  { slug: 'grok-bot-sponsorship-inbox-score', ...grokBotSponsorshipInboxScore },
  { slug: 'grok-bot-stalled', ...grokBotStalled },
  { slug: 'grok-bot-starter-charter-template', ...grokBotStarterCharterTemplate },
  { slug: 'grok-bot-starter-roster', ...grokBotStarterRoster },
  { slug: 'grok-bot-static-egress-ip', ...grokBotStaticEgressIp },
  { slug: 'grok-bot-stripe', ...grokBotStripe },
  { slug: 'grok-bot-supergrok-plus', ...grokBotSupergrokPlus },
  { slug: 'grok-bot-supported-platforms', ...grokBotSupportedPlatforms },
  { slug: 'grok-bot-switch-intent-on-x', ...grokBotSwitchIntentOnX },
  { slug: 'grok-bot-talent-scout', ...grokBotTalentScout },
  { slug: 'grok-bot-teams-standard', ...grokBotTeamsStandard },
  { slug: 'grok-bot-telegram-bridge', ...grokBotTelegramBridge },
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
  { slug: 'grok-bot-transcriptapi-vs-browser', ...grokBotTranscriptapiVsBrowser },
  { slug: 'grok-bot-troubleshooting', ...grokBotTroubleshooting },
  { slug: 'grok-bot-vision-md', ...grokBotVisionMd },
  { slug: 'grok-bot-vs-chatgpt-agent', ...grokBotVsChatgptAgent },
  { slug: 'grok-bot-vs-chatgpt-tasks', ...grokBotVsChatgptTasks },
  { slug: 'grok-bot-vs-chatgpt-work', ...grokBotVsChatgptWork },
  { slug: 'grok-bot-vs-claude-agent', ...grokBotVsClaudeAgent },
  { slug: 'grok-bot-vs-claude-cowork', ...grokBotVsClaudeCowork },
  { slug: 'grok-bot-vs-claude-cowork-vs-chatgpt-work', ...grokBotVsClaudeCoworkVsChatgptWork },
  { slug: 'grok-bot-vs-computer-use', ...grokBotVsComputerUse },
  { slug: 'grok-bot-vs-cursor-background-agent', ...grokBotVsCursorBackgroundAgent },
  { slug: 'grok-bot-vs-devin', ...grokBotVsDevin },
  { slug: 'grok-bot-vs-gemini-gems', ...grokBotVsGeminiGems },
  { slug: 'grok-bot-vs-genspark', ...grokBotVsGenspark },
  { slug: 'grok-bot-vs-grok-build', ...grokBotVsGrokBuild },
  { slug: 'grok-bot-vs-grok-the-chatbot', ...grokBotVsGrokTheChatbot },
  { slug: 'grok-bot-vs-grokbot-dev', ...grokBotVsGrokbotDev },
  { slug: 'grok-bot-vs-groq', ...grokBotVsGroq },
  { slug: 'grok-bot-vs-lindy', ...grokBotVsLindy },
  { slug: 'grok-bot-vs-lindy-vs-cowork', ...grokBotVsLindyVsCowork },
  { slug: 'grok-bot-vs-make', ...grokBotVsMake },
  { slug: 'grok-bot-vs-manus', ...grokBotVsManus },
  { slug: 'grok-bot-vs-microsoft-copilot', ...grokBotVsMicrosoftCopilot },
  { slug: 'grok-bot-vs-n8n', ...grokBotVsN8n },
  { slug: 'grok-bot-vs-openai-operator', ...grokBotVsOpenaiOperator },
  { slug: 'grok-bot-vs-openclaw-vs-hermes-vs-buzz', ...grokBotVsOpenclawVsHermesVsBuzz },
  { slug: 'grok-bot-vs-perplexity-computer', ...grokBotVsPerplexityComputer },
  { slug: 'grok-bot-vs-rabbit', ...grokBotVsRabbit },
  { slug: 'grok-bot-vs-zapier', ...grokBotVsZapier },
  { slug: 'grok-bot-week-one-mistakes', ...grokBotWeekOneMistakes },
  { slug: 'grok-bot-weekly-allowance', ...grokBotWeeklyAllowance },
  { slug: 'grok-bot-whop-cli-commerce', ...grokBotWhopCliCommerce },
  { slug: 'grok-bot-windows-setup', ...grokBotWindowsSetup },
  { slug: 'grok-bot-workforce-checker', ...grokBotWorkforceChecker },
  { slug: 'grok-bot-wrong-account-signed-in', ...grokBotWrongAccountSignedIn },
  { slug: 'grok-bot-x-content-automation-risks', ...grokBotXContentAutomationRisks },
  { slug: 'grok-bot-x-twitter', ...grokBotXTwitter },
  { slug: 'grok-bot-youtube-manager', ...grokBotYoutubeManager },
  { slug: 'grok-bot-youtube-transcripts', ...grokBotYoutubeTranscripts },
  { slug: 'grok-bot-zoom', ...grokBotZoom },
  { slug: 'hand-a-contractor-the-charter-not-the-login', ...handAContractorTheCharterNotTheLogin },
  { slug: 'how-bots-on-grok-actually-work', ...howBotsOnGrokActuallyWork },
  { slug: 'how-to-answer-security-questionnaires', ...howToAnswerSecurityQuestionnaires },
  { slug: 'how-to-audit-a-bot-you-inherited', ...howToAuditABotYouInherited },
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
  { slug: 'how-to-connect-gmail-to-grok-bot', ...howToConnectGmailToGrokBot },
  { slug: 'how-to-create-a-grok-bot', ...howToCreateAGrokBot },
  { slug: 'how-to-isolate-grok-bot-credentials', ...howToIsolateGrokBotCredentials },
  { slug: 'how-to-keep-sales-decks-current', ...howToKeepSalesDecksCurrent },
  { slug: 'how-to-maintain-an-org-chart', ...howToMaintainAnOrgChart },
  { slug: 'how-to-pause-a-grok-bot-on-iphone', ...howToPauseAGrokBotOnIphone },
  { slug: 'how-to-schedule-a-grok-bot-routine', ...howToScheduleAGrokBotRoutine },
  { slug: 'how-to-set-grok-bot-approvals', ...howToSetGrokBotApprovals },
  { slug: 'how-to-stop-grok-bot-overspending', ...howToStopGrokBotOverspending },
  { slug: 'how-to-test-a-grok-bot-on-trial', ...howToTestAGrokBotOnTrial },
  { slug: 'how-to-track-customer-promises', ...howToTrackCustomerPromises },
  { slug: 'how-to-write-a-boundary-line', ...howToWriteABoundaryLine },
  { slug: 'how-to-write-a-grok-bot-charter-2026', ...howToWriteAGrokBotCharter2026 },
  { slug: 'is-grok-bot-worth-it', ...isGrokBotWorthIt },
  { slug: 'learn-grok-bot', ...learnGrokBot },
  { slug: 'least-privilege-bots', ...leastPrivilegeBots },
  { slug: 'local-computer-approvals-are-not-undo', ...localComputerApprovalsAreNotUndo },
  { slug: 'mcp-vs-connectors', ...mcpVsConnectors },
  { slug: 'measuring-bot-roi', ...measuringBotRoi },
  { slug: 'migrate-grok-bot-to-rakazo', ...migrateGrokBotToRakazo },
  { slug: 'move-a-make-scenario-to-a-bot', ...moveAMakeScenarioToABot },
  { slug: 'move-a-nightly-csv-pull-onto-grok-bot', ...moveANightlyCsvPullOntoGrokBot },
  { slug: 'move-a-zap-to-a-bot', ...moveAZapToABot },
  { slug: 'move-an-iphone-shortcut-to-a-bot', ...moveAnIphoneShortcutToABot },
  { slug: 'move-an-n8n-workflow-to-a-bot', ...moveAnN8nWorkflowToABot },
  { slug: 'move-grok-bot-work-from-personal-to-work', ...moveGrokBotWorkFromPersonalToWork },
  { slug: 'multi-bot-teams', ...multiBotTeams },
  { slug: 'multi-tenant-bot-risk', ...multiTenantBotRisk },
  { slug: 'open-source-bot-runtimes', ...openSourceBotRuntimes },
  { slug: 'persistent-memory-file-is-not-a-vault', ...persistentMemoryFileIsNotAVault },
  { slug: 'personal-cfo-brief-never-moves-money', ...personalCfoBriefNeverMovesMoney },
  { slug: 'pick-the-first-grok-bot-job', ...pickTheFirstGrokBotJob },
  { slug: 'prompt-injection-for-operators', ...promptInjectionForOperators },
  { slug: 'prove-grok-bot-to-a-risk-committee', ...proveGrokBotToARiskCommittee },
  { slug: 'pto-coverage-for-a-live-grok-bot', ...ptoCoverageForALiveGrokBot },
  { slug: 'rakazo-model-choice', ...rakazoModelChoice },
  { slug: 'rakazo-permissions-audit', ...rakazoPermissionsAudit },
  { slug: 'rakazo-routines', ...rakazoRoutines },
  { slug: 'rakazo-sandbox-options', ...rakazoSandboxOptions },
  { slug: 'rakazo-self-hosting-guide', ...rakazoSelfHostingGuide },
  { slug: 'rakazo-vs-grok-bot', ...rakazoVsGrokBot },
  { slug: 'read-a-grok-bot-listing', ...readAGrokBotListing },
  { slug: 'read-only-bank-view-then-sign-out', ...readOnlyBankViewThenSignOut },
  { slug: 'replace-a-va-shift-with-a-grok-bot', ...replaceAVaShiftWithAGrokBot },
  { slug: 'retire-the-automation-you-replaced', ...retireTheAutomationYouReplaced },
  { slug: 'rotate-vendor-access-after-a-bad-grok-bot-incident', ...rotateVendorAccessAfterABadGrokBotIncident },
  { slug: 'score-whether-this-grok-bot-paid-for-itself', ...scoreWhetherThisGrokBotPaidForItself },
  { slug: 'screens-are-not-boundaries', ...screensAreNotBoundaries },
  { slug: 'self-hosting-ai-agents-guide', ...selfHostingAiAgentsGuide },
  { slug: 'share-a-grok-bot', ...shareAGrokBot },
  { slug: 'should-overflow-push-you-to-a-higher-plan', ...shouldOverflowPushYouToAHigherPlan },
  { slug: 'six-bots-to-a-channel', ...sixBotsToAChannel },
  { slug: 'teach-grok-bot-by-demonstration', ...teachGrokBotByDemonstration },
  { slug: 'testing-your-bot', ...testingYourBot },
  { slug: 'the-five-questions-before-your-first-bot', ...theFiveQuestionsBeforeYourFirstBot },
  { slug: 'the-pm-attention-list', ...thePmAttentionList },
  { slug: 'what-a-pasted-prompt-inherits', ...whatAPastedPromptInherits },
  { slug: 'what-a-routine-is-and-where-it-dies', ...whatARoutineIsAndWhereItDies },
  { slug: 'what-ai-bots-cost', ...whatAiBotsCost },
  { slug: 'what-an-approval-actually-governs', ...whatAnApprovalActuallyGoverns },
  { slug: 'what-is-a-grok-bot', ...whatIsAGrokBot },
  { slug: 'what-makes-a-weak-boundary', ...whatMakesAWeakBoundary },
  { slug: 'what-survives-if-you-drop-grok-bot', ...whatSurvivesIfYouDropGrokBot },
  { slug: 'what-you-cannot-cap', ...whatYouCannotCap },
  { slug: 'when-bots-go-wrong', ...whenBotsGoWrong },
  { slug: 'when-not-to-use-a-bot', ...whenNotToUseABot },
  { slug: 'where-a-bot-cookie-actually-lives', ...whereABotCookieActuallyLives },
  { slug: 'which-surface-reads-skill-md', ...whichSurfaceReadsSkillMd },
  { slug: 'who-can-actually-run-grok-bot', ...whoCanActuallyRunGrokBot },
  { slug: 'why-deleting-a-bot-leaves-the-files', ...whyDeletingABotLeavesTheFiles },
  { slug: 'why-grok-bot-has-no-linux-app', ...whyGrokBotHasNoLinuxApp },
  { slug: 'why-is-this-grok-bot-in-someone-elses-dashboard', ...whyIsThisGrokBotInSomeoneElsesDashboard },
  { slug: 'why-the-model-behind-grok-bot-is-unpublished', ...whyTheModelBehindGrokBotIsUnpublished },
  { slug: 'writing-bot-setups-complete-guide', ...writingBotSetupsCompleteGuide },
];
