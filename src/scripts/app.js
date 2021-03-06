import flip from './common/flip';
import authorization from './common/authorization';
import scrollDown from './common/scrollDown';
import scrollUp from './common/scrollUp';
import hamMenu from './common/hamMenu';
import slider from './common/slider';
import map from './common/map';
import skillsAnimation from './common/skillsAnimation';
import sidebarCreate from './common/sidebarCreate';
import sidebarStyles from './common/sidebarStyles';
import sidebarBehavior from './common/sidebarBehavior';
import water from './water/index-water';

flip();
authorization();
scrollDown(10);
scrollUp(20);
hamMenu(); 
slider();
map();
skillsAnimation();
sidebarCreate();
sidebarStyles();
sidebarBehavior(25);
water('.intro__wrap', '.intro__canvas');
water('.header__container', '.header__canvas');
