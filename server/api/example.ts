export default defineEventHandler(async () => {
  return await useStorage('assets:content').getItem<string>('example.md');
});
