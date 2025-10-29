
'use server';

import { detectPhishingEmail, DetectPhishingEmailInput, DetectPhishingEmailOutput } from '@/ai/flows/phishing-email-detection';
import { assessUrlRisk, UrlRiskAssessmentInput, UrlRiskAssessmentOutput } from '@/ai/flows/url-risk-assessment';
import { aiAssistedReply, AiAssistedReplyInput, AiAssistedReplyOutput } from '@/ai/flows/ai-assisted-reply';
import { summarizeEmail, SummarizeEmailInput, SummarizeEmailOutput } from '@/ai/flows/summarize-email';

export async function analyzeEmailAction(input: DetectPhishingEmailInput): Promise<{ data: DetectPhishingEmailOutput | null; error: string | null }> {
  try {
    const result = await detectPhishingEmail(input);
    return { data: result, error: null };
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
    return { data: null, error: `Failed to analyze email: ${errorMessage}` };
  }
}

export async function analyzeUrlAction(input: UrlRiskAssessmentInput): Promise<{ data: UrlRiskAssessmentOutput | null; error: string | null }> {
  try {
    const result = await assessUrlRisk(input);
    return { data: result, error: null };
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
    return { data: null, error: `Failed to analyze URL: ${errorMessage}` };
  }
}

export async function generateReplyAction(input: AiAssistedReplyInput): Promise<{ data: AiAssistedReplyOutput | null; error: string | null }> {
  try {
    const result = await aiAssistedReply(input);
    return { data: result, error: null };
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
    return { data: null, error: `Failed to generate reply: ${errorMessage}` };
  }
}

export async function summarizeEmailAction(input: SummarizeEmailInput): Promise<{ data: SummarizeEmailOutput | null; error: string | null }> {
    try {
      const result = await summarizeEmail(input);
      return { data: result, error: null };
    } catch (e) {
      console.error(e);
      const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
      return { data: null, error: `Failed to summarize email: ${errorMessage}` };
    }
  }
