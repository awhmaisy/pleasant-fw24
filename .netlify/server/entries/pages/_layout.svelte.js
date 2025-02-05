import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { e as escape } from "../../chunks/escape.js";
const css = {
  code: "nav.svelte-14u8hf6{display:flex;justify-content:center;align-items:center;margin:10px 0}a.svelte-14u8hf6,.nav-link.svelte-14u8hf6{color:#ea9ae5;text-decoration:none;word-wrap:break-word;text-align:center;font-size:13px;margin:0 10px}.nav-link.svelte-14u8hf6{background:none;border:none;padding:0;cursor:pointer}",
  map: `{"version":3,"file":"Navigation.svelte","sources":["Navigation.svelte"],"sourcesContent":["<script>\\n    let isLightMode = false;\\n  \\n    function toggleTheme() {\\n      isLightMode = !isLightMode;\\n      document.body.classList.toggle('light-mode', isLightMode);\\n    }\\n  <\/script>\\n  \\n<nav>\\n    <a href=\\"/\\">hai</a>\\n    <a href=\\"/devour\\">devour</a>\\n    <a href=\\"/linky\\">linky</a>\\n    <button class=\\"nav-link\\" on:click={toggleTheme}>\\n        {isLightMode ? '電気消して！' : '電気つけて！'}\\n    </button>\\n</nav>\\n\\n<!-- \\n    first one is turn the lights off, switch to dark mode \\n    second one is turn the lights on, switch to light mode \\n-->\\n    \\n<style>\\n  \\n    nav {\\n      display: flex;\\n      justify-content: center;\\n      align-items: center;\\n      margin: 10px 0;\\n    }\\n    a, .nav-link {\\n        color: #ea9ae5; \\n        text-decoration: none;\\n        word-wrap: break-word;\\n        text-align: center;\\n        font-size: 13px;\\n        margin: 0 10px;\\n    }\\n\\n    .nav-link {\\n        background: none;\\n        border: none;\\n        padding: 0;\\n        cursor: pointer;\\n    }\\n    </style>"],"names":[],"mappings":"AAyBI,kBAAI,CACF,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,MAAM,CAAE,IAAI,CAAC,CACf,CACA,gBAAC,CAAE,wBAAU,CACT,KAAK,CAAE,OAAO,CACd,eAAe,CAAE,IAAI,CACrB,SAAS,CAAE,UAAU,CACrB,UAAU,CAAE,MAAM,CAClB,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,CAAC,CAAC,IACd,CAEA,wBAAU,CACN,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,OACZ"}`
};
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav class="svelte-14u8hf6"><a href="/" class="svelte-14u8hf6" data-svelte-h="svelte-azknob">hai</a> <a href="/devour" class="svelte-14u8hf6" data-svelte-h="svelte-1u04gof">devour</a> <a href="/linky" class="svelte-14u8hf6" data-svelte-h="svelte-isaxc5">linky</a> <button class="nav-link svelte-14u8hf6">${escape("電気つけて！")}</button></nav> `;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<body>${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}</body>`;
});
export {
  Layout as default
};
