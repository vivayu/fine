// <!-- auto generated navs start -->
const autoGenHeaderNavs = [];
const autoGenAsideNavs = [];

// <!-- auto generated navs end -->

const customHeaderNavs = [
  {
    text: '首页',
    to: '/',
    icon: 'home',
  },
  {
    text: '产品',
    to: 'https://github.com/alibaba/ice',
    external: true,
    newWindow: true,
    icon: 'message',
  },
  {
    text: '资讯',
    to: 'https://alibaba.github.io/ice',
    external: true,
    newWindow: true,
    icon: 'bangzhu',
  },
  {
    text: '合作',
    to: 'https://alibaba.github.io/ice',
    external: true,
    newWindow: true,
    icon: 'bangzhu',
  },
  {
    text: '联系我们',
    to: 'https://alibaba.github.io/ice',
    external: true,
    newWindow: true,
    icon: 'bangzhu',
  },
  {
    text: '关于我们',
    to: 'https://alibaba.github.io/ice',
    external: true,
    newWindow: true,
    icon: 'bangzhu',
  },
];

const customAsideNavs = [
];

function transform(navs) {
  // custom logical
  return [...navs];
}

export const headerNavs = transform([
  ...autoGenHeaderNavs,
  ...customHeaderNavs,
]);

export const asideNavs = transform([...autoGenAsideNavs, ...customAsideNavs]);
