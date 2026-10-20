const CONFIG = {
  brand: "Alephfall X EaglerMeow",
  footer: "© Alephfall x EaglerMeow",

  nav: [
    { label: "Library", href: "#library" },
    { label: "Drops",   href: "#drops" },
    { label: "Access",  href: "#access" },
  ],

  hero: {
    eyebrow: "The download library",
    title: "Peek into the unknown.",
    text: "WASM builds, code tools and game files in one place. Fast and beyond time! v0.1-EA",
  },

  library: [
    { tag: ".wasm",       title: "WASM Builds",     text: "Browser-ready modules and web clients, compiled and ready to host.", link: "#access" },
    { tag: "CLI, SDK",    title: "Code Tools",      text: "Compilers, loaders, mappings and utilities that save hours of setup.", link: "#access" },
    { tag: ".zip, .jar",  title: "Game Files",      text: "Clients, mods, maps and worlds, packaged with notes on every release.", link: "#access" },
    { tag: "Assets",      title: "Packs & Assets",  text: "Textures, shaders, sound and UI kits ready to drop into a project.", link: "#access" },
    { tag: "Beta",        title: "Early Builds",    text: "Pre-release drops shipped to testers before anyone else.", link: "#access" },
    { tag: "Docs",        title: "Guides & Source", text: "Readable docs and open source for everything in the archive.", link: "#access" },
  ],

  drops: [
    { name: "JDK 17 Runtime",  meta: "Access only", url: "#access" },
    { name: "MCP Mappings Bundle",       meta: "Access only", url: "#access" },
    { name: "Java 21 Runtime",   meta: "Upcoming",    url: "#access" },
    { name: "Forge Loader API",    meta: "Upcoming",    url: "#access" },
    { name: "OpenFront Offline",     meta: "Upcoming",    url: "#access" },
    { name: "WASM Binaries", meta: "Upcoming",    url: "#access" },
  ],

  codes: {
    "open1":      { url: "deploy/front/index.html", mode: "embed" },
    "earlyaccess26":      { url: "deploy/site/wall.html",   mode: "embed" },
    "STARFOREST": { url: "https://example.com/beta", mode: "embed" },
    "test1":      { url: "deploy/your-test-page.html", mode: "embed" },
  },
};
