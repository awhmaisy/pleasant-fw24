

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/linky/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.Bbap2h5N.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.D8DZQGu7.js"];
export const stylesheets = [];
export const fonts = [];
