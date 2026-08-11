export const JOB_SLUG_MAP: Record<string, string> = {
  "944ab032-029a-4258-b9fb-47d4114fcdbd": "ui-ux-designer",
  "b9874691-759d-4849-a25b-b243ab71aef4": "senior-full-stack-developer",
  "e3751fdf-2f6c-484a-b30e-7ff5a11fc4a1": "mobile-app-developer",
  "61d23419-42ad-40d3-afdb-3c8530172a9b": "digital-marketing-specialist",
  "f8fa7a37-6498-4b04-93ba-3578215e9389": "project-manager",
  "67c55a7e-1355-4949-9497-0f1677f854a2": "devops-engineer",
};

export const REVERSE_JOB_SLUG_MAP: Record<string, string> = {
  "ui-ux-designer": "944ab032-029a-4258-b9fb-47d4114fcdbd",
  "senior-full-stack-developer": "b9874691-759d-4849-a25b-b243ab71aef4",
  "mobile-app-developer": "e3751fdf-2f6c-484a-b30e-7ff5a11fc4a1",
  "digital-marketing-specialist": "61d23419-42ad-40d3-afdb-3c8530172a9b",
  "project-manager": "f8fa7a37-6498-4b04-93ba-3578215e9389",
  "devops-engineer": "67c55a7e-1355-4949-9497-0f1677f854a2",
};

const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function isValidUuid(str: string): boolean {
  return UUID_REGEX.test(str);
}

export function getJobSlug(job: { id: string; title?: string }): string {
  if (JOB_SLUG_MAP[job.id]) return JOB_SLUG_MAP[job.id];
  if (isValidUuid(job.id) && job.title) {
    return job.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }
  return job.id;
}

export function getJobInternalId(slugOrId: string): string {
  if (REVERSE_JOB_SLUG_MAP[slugOrId]) return REVERSE_JOB_SLUG_MAP[slugOrId];
  return slugOrId;
}
