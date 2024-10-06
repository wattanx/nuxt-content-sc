import fsp from 'node:fs/promises';

export default defineEventHandler(async () => {
  const content = await fsp.readFile('content/example.md', 'utf-8');

  return content;
});
