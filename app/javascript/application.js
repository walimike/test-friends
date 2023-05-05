// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"


import { createApp } from "vue";
import HelloWorld from "../components/HelloWorld.vue";

const app = createApp({
  components: {
    HelloWorld,
  },
});

app.mount("#app");

