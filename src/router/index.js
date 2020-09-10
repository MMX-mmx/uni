import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../components/Layout.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/login/index.vue")
  },
  {
    path: "/",
    name: "Layout",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        meta: {
          title: "首页"
        },
        component: () => import(/* webpackChunkName: "about" */ '@/views/home/index.vue')
      },
      {
        path: "/image",
        name: "image",
        // component: Image,
        // redirect: "/image",
        meta: {
          title: "相册"
        },
        component: () => import(/* webpackChunkName: "about" */ '@/views/image/image.vue')
      },
      {
        path: "/shop",
        name: "shop",
        meta: {
          title: "商品"
        },
        component: () => import(/* webpackChunkName: "about" */ '@/views/shop/index.vue')
      },
     

    ]
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // },
 
  
  // {
  //   path: '/',
  //   name: 'layout',
  //   component: () => import(/* webpackChunkName: "about" */ '@/components/Layout.vue'),
  //   // redirect: "/home"
  // }
];

const router = new VueRouter({
  routes
});

export default router;
