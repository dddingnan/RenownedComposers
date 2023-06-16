const app = Vue.createApp({
  data() {
    return {
      composer: {
        Biography: null,
        Creations: [],
        MusicalStyles: null,
        FavoriteComposition: { name: null, audioSource: null },
        Trivia: null,
        InfluencesAndLegacy: { text: null, imgSrc: null },
      },
    };
  },
  mounted() {
    fetch("../static/data/composer/bach.json")
      .then((response) => response.json())
      .then((data) => (this.composer = data));
  },
});
app.mount("#app");
