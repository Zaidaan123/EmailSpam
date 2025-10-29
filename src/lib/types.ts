import type { DetectPhishingEmailInput, DetectPhishingEmailOutput } from '@/ai/flows/phishing-email-detection';
import type { UrlRiskAssessmentOutput } from '@/ai/flows/url-risk-assessment';
import type { AiAssistedReplyOutput } from '@/ai/flows/ai-assisted-reply';
import type { SummarizeEmailOutput } from '@/ai/flows/summarize-email';
import type { SecurityBriefingOutput } from '@/ai/flows/security-briefing';

export type AnalysisStatus = 'idle' | 'loading' | 'success' | 'error';

export type EmailAnalysisState = {
  status: AnalysisStatus;
  result: DetectPhishingEmailOutput | null;
  error: string | null;
};

export type UrlAnalysisState = {
  status: AnalysisStatus;
  result: UrlRiskAssessmentOutput | null;
  error: string | null;
};

export type ReplyGenerationState = {
  status: AnalysisStatus;
  result: AiAssistedReplyOutput | null;
  error: string | null;
};

export type SummarizationState = {
    status: AnalysisStatus;
    result: SummarizeEmailOutput | null;
    error: string | null;
};

export type SecurityBriefingState = {
    status: AnalysisStatus;
    result: SecurityBriefingOutput | null;
    error: string | null;
};

export type MockEmail = {
  subject: string;
  senderDomain: string;
  senderIp: string;
  body: string;
  label: string;
  urlList: string[];
};

export type InboxEmail = {
    id: string;
    from: {
      name: string;
      email: string;
      avatar: string;
    };
    subject: string;
    snippet: string;
    body: string;
    date: string;
    unread: boolean;
    tags: string[];
};

export type SentEmail = {
  id: string;
  to: {
    name: string;
    email: string;
  };
  subject: string;
  body: string;
  date: string;
};

export type EmailForAnalysis = DetectPhishingEmailInput;
