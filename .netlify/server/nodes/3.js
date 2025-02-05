

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/oct/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.ChHYNH2a.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.D8DZQGu7.js"];
export const stylesheets = [];
export const fonts = [];
