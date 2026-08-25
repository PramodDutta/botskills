// Brand icons for integrations via simple-icons (CC0). Nominative use:
// identifying the tool a bot connects to. Unknown ids fall back to a letter dot.
import {
  siGmail, siSlack, siGithub, siX, siNotion, siGooglecalendar, siGoogledrive,
  siGooglesheets, siGoogledocs, siStripe, siIntercom, siAirtable, siSentry,
  siLinear, siSalesforce, siYoutube, siQuickbooks,
} from 'simple-icons';

const MAP: Record<string, { path: string; hex: string; title: string }> = {
  gmail: siGmail, slack: siSlack, github: siGithub, x: siX, notion: siNotion,
  'google-calendar': siGooglecalendar, 'google-drive': siGoogledrive,
  sheets: siGooglesheets, 'google-sheets': siGooglesheets,
  'google-docs': siGoogledocs, stripe: siStripe, intercom: siIntercom,
  airtable: siAirtable, sentry: siSentry, linear: siLinear,
  salesforce: siSalesforce, youtube: siYoutube, quickbooks: siQuickbooks,
};

export function IntegrationIcon({ id }: { id: string }) {
  const icon = MAP[id];
  if (!icon) {
    return (
      <span className="int-chip">
        <span className="int-fallback">{id.slice(0, 1).toUpperCase()}</span>
        <span className="int-name">{id.replace(/-/g, ' ')}</span>
      </span>
    );
  }
  return (
    <span className="int-chip" title={icon.title}>
      <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">
        <path d={icon.path} fill={`#${icon.hex}`} />
      </svg>
      <span className="int-name">{icon.title}</span>
    </span>
  );
}
