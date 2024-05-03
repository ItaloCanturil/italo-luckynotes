export default defineAppConfig({
  name: "Italo's lucky notes",
  description: "Build & learn in public notes",
  host: "italo-luckynotes.vercel.app",

  author: {
    twitter: "ItaloCantur",
  },

  publishing: {
    twitter: true,
  },

  header: {
    title: "Hi there 👋",
    description:
      "Welcome to my notes! here I share my thoughts, ideas, and learnings.",
  },

  ui: {
    primary: "cyan",
  },
});
