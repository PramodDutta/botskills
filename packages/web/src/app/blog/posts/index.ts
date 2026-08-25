// Dual-registry blog engine, same contract as qaskills:
// - `posts` map powers /blog/[slug] (miss it = 404)
// - `postList` powers /blog and the sitemap (miss it = invisible)
// Every post needs THREE edits here: import, posts entry, postList entry.
// Batch arrays, when they arrive, spread at the END (last write wins on slug).


import { post as introducingBotskills } from './introducing-botskills';
import { post as onePersonCompanyGrokBot } from './one-person-company-grok-bot';
import { post as grokBotBoundaries } from './grok-bot-boundaries';
import { post as grokBotCost } from './grok-bot-cost';
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
import { post as grokBotSafetyChecklist } from './grok-bot-safety-checklist';
import { post as grokBotScheduling } from './grok-bot-scheduling';
import { post as grokBotSetupGuide } from './grok-bot-setup-guide';
import { post as grokBotSlack } from './grok-bot-slack';
import { post as grokBotTroubleshooting } from './grok-bot-troubleshooting';
import { post as grokBotVsChatgptTasks } from './grok-bot-vs-chatgpt-tasks';
import { post as howToCreateAGrokBot } from './how-to-create-a-grok-bot';
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
  'grok-bot-boundaries': grokBotBoundaries,
  'grok-bot-cost': grokBotCost,
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
  'grok-bot-safety-checklist': grokBotSafetyChecklist,
  'grok-bot-scheduling': grokBotScheduling,
  'grok-bot-setup-guide': grokBotSetupGuide,
  'grok-bot-slack': grokBotSlack,
  'grok-bot-troubleshooting': grokBotTroubleshooting,
  'grok-bot-vs-chatgpt-tasks': grokBotVsChatgptTasks,
  'how-to-create-a-grok-bot': howToCreateAGrokBot,
  'what-is-a-grok-bot': whatIsAGrokBot,
};

export const postList: Array<{ slug: string } & BlogPost> = [
  { slug: 'introducing-botskills', ...introducingBotskills },
  { slug: 'one-person-company-grok-bot', ...onePersonCompanyGrokBot },
  { slug: 'grok-bot-boundaries', ...grokBotBoundaries },
  { slug: 'grok-bot-cost', ...grokBotCost },
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
  { slug: 'grok-bot-safety-checklist', ...grokBotSafetyChecklist },
  { slug: 'grok-bot-scheduling', ...grokBotScheduling },
  { slug: 'grok-bot-setup-guide', ...grokBotSetupGuide },
  { slug: 'grok-bot-slack', ...grokBotSlack },
  { slug: 'grok-bot-troubleshooting', ...grokBotTroubleshooting },
  { slug: 'grok-bot-vs-chatgpt-tasks', ...grokBotVsChatgptTasks },
  { slug: 'how-to-create-a-grok-bot', ...howToCreateAGrokBot },
  { slug: 'what-is-a-grok-bot', ...whatIsAGrokBot },
];
