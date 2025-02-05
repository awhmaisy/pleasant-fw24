import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","images/blog/oct/bags.jpg","images/blog/oct/bunny.jpg","images/blog/oct/daifuku.jpg","images/blog/oct/truffle.jpg","images/blog/oct/uchi.jpg","images/blog/sept/handm.JPG"]),
	mimeTypes: {".jpg":"image/jpeg",".JPG":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.CaCIvy9f.js","app":"_app/immutable/entry/app.SfCRUmpQ.js","imports":["_app/immutable/entry/start.CaCIvy9f.js","_app/immutable/chunks/entry.DaHZArQG.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/entry/app.SfCRUmpQ.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.D8DZQGu7.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js')),
			__memo(() => import('../server/nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/blog/oct",
				pattern: /^\/blog\/oct\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/blog/sept",
				pattern: /^\/blog\/sept\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/devour",
				pattern: /^\/devour\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/linky",
				pattern: /^\/linky\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
