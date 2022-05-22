import ScGrid from "./ScGrid.vue";

export default {
  title: "Components/ScGrid",
  component: ScGrid,
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = () => ({
  components: { ScGrid },
  template: `
  <sc-grid>
    <div><img src="https://placekitten.com/g/200/200"></div>
    <div><img src="https://placekitten.com/g/200/200"></div>
  </sc-grid>`,
});
