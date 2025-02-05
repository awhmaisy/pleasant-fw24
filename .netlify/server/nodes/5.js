

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/devour/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.BUg9QDAU.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.D8DZQGu7.js"];
export const stylesheets = [];
export const fonts = [];
