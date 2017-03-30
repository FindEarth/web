import Vue from 'vue';
import Router from 'vue-router';
import home from './routes/home';
import person from './routes/person';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    home,
    person,
  ],
});
