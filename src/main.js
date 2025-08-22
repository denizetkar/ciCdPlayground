import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Deniz Etkar",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["Github Actions", "jenkins", "testing", "deployment"],
    // Which CI/CD tools do you use in your project?
    tools: "Github Actions",
    // What do you want to learn in this workshop?
    expectations: [
      "Other popular CI/CD tools",
      "How to setup CI/CD for a greenfield project from scratch (no existing infra guidance)?",
    ],
  },
});
