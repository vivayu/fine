// <!-- auto generated navs start -->
const autoGenHeaderNavs = [];
const autoGenAsideNavs = [
  { text: '产品', to: '/product', icon: 'nav-list' },
  { text: '资讯', to: '/news', icon: 'nav-list' },
  { text: '合作', to: '/cooperate', icon: 'nav-list' },
  { text: '关于我们', to: '/about', icon: 'nav-list' },
  { text: '联系我们', to: '/contact', icon: 'nav-list' },
  { text: 'ci4', to: '/ci4', icon: 'nav-list' },
  { text: 'ch4', to: '/ch4', icon: 'nav-list' },
  { text: 'cf4', to: '/cf4', icon: 'nav-list' },
  { text: 'x46', to: '/x46', icon: 'nav-list' },
  { text: 'gl5', to: '/gl5', icon: 'nav-list' },
  { text: 'h8', to: '/h8', icon: 'nav-list' },
];

// <!-- auto generated navs end -->

const customHeaderNavs = [
    {
        text: '首页',
        to: '/',
        icon: 'home',
    },
    {
        text: '产品',
        to: '/product',
        icon: 'message',
    },
    {
        text: '资讯',
        to: '/news',
        icon: 'bangzhu',
    },
    {
        text: '合作',
        to: '/cooperate',
        icon: 'bangzhu',
    },
    {
        text: '联系我们',
        to: '/contact',
        icon: 'bangzhu',
    },
    {
        text: '关于我们',
        to: '/about',
        icon: 'bangzhu',
    },
];

const customAsideNavs = [];

function transform(navs) {
    // custom logical
    return [...navs];
}

export const headerNavs = transform([
    ...autoGenHeaderNavs,
    ...customHeaderNavs,
]);

export const asideNavs = transform([...autoGenAsideNavs, ...customAsideNavs]);
