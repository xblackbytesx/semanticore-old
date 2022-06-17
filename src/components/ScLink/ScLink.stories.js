import ScLink from "./ScLink.vue";

export default {
  title: "Components/ScLink",
  component: ScLink,
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = () => ({
  components: { ScLink },
  template: `
  <sc-link href="https://example.org">Test Link</sc-link>`,
});
