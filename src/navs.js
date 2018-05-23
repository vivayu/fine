// <!-- auto generated navs start -->
const autoGenHeaderNavs = [];
const autoGenAsideNavs = [
  { text: '产品', to: '/product', icon: 'nav-list' },
  { text: '资讯', to: '/news', icon: 'nav-list' },
  { text: '合作', to: '/cooperate', icon: 'nav-list' },
  { text: '关于我们', to: '/about', icon: 'nav-list' },
  { text: '联系我们', to: '/contact', icon: 'nav-list' },
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
