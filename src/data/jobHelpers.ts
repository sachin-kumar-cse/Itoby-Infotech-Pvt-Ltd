export const JOB_SLUG_MAP: Record<string, string> = {
  "944ab032-029a-4258-b9fb-47d4114fcdbd": "ui-ux-designer",
};

export const REVERSE_JOB_SLUG_MAP: Record<string, string> = {
  "ui-ux-designer": "944ab032-029a-4258-b9fb-47d4114fcdbd",
};

export function getJobSlug(job: { id: string; title?: string }): string {
  if (JOB_SLUG_MAP[job.id]) return JOB_SLUG_MAP[job.id];
  if (job.id.includes("-") && job.id.length === 36 && job.title) {
    return job.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }
  return job.id;
}

export function getJobInternalId(slugOrId: string): string {
  if (REVERSE_JOB_SLUG_MAP[slugOrId]) return REVERSE_JOB_SLUG_MAP[slugOrId];
  return slugOrId;
}
