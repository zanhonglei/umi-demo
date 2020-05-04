import { defineConfig } from 'umi';

export default defineConfig({
  // locale: { antd: true },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    // { path: '/', component: '@/pages/index' },
    
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: '@/pages/index' },
        { path: '/products', component: '@/pages/products' },

      ],
    }, 
  ],
});
