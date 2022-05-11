import ButterflyVue from './butterfly-vue.vue';
import ButterflyVueEndpoint from './coms/vue-endpoint.vue';

const install = (app)=>{
  console.log('install')
  app.component(ButterflyVue.name, ButterflyVue);
  app.component(ButterflyVueEndpoint.name, ButterflyVueEndpoint);
}


// 默认导出组件
export default {
  install,
  ButterflyVue,
  ButterflyVueEndpoint
};

export {
  ButterflyVue,
  ButterflyVueEndpoint
}
