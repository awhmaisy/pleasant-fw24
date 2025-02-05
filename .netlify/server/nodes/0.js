

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.C1J0WCKE.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.D8DZQGu7.js"];
export const stylesheets = ["_app/immutable/assets/0.CKBbxZsD.css"];
export const fonts = ["_app/immutable/assets/MS Gothic Font.BwWyllxv.ttf"];
