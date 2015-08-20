## 在不同版本的AngularJS下 ngView ngClass 动画的不同表现
由于1.4版本后 AngularJS 的动画模块重写了，从1.3升级后动画出现了一些问题

[AngularJS 1.4对动画系统进行了彻底的重构 - InfoQ](http://www.infoq.com/cn/news/2015/04/angularjs-14-ngAnimate)

[ngView API](https://docs.angularjs.org/api/ngRoute/directive/ngView)
[ngClass API](https://docs.angularjs.org/api/ng/directive/ngClass#animations)

#### AngularJS 1.4.4 ngView 切换时使用ngClass切换样式出现Class混乱的问题


##实验：
1.ngView初始化时如果class中存在transition的样式就会触发ngView的Animation。

    例子 ngView初始化时class只有view-animate
    view-animate ng-scope ng-animate ng-leave leave-active ng-leave-active
    view-animate ng-scope ng-animate ng-enter enter-active ng-enter-active

2.只使用ngClass,在切换ngClass的值时。

    "" -> "class"
    ng-animate class-add class class-add-active
    "class" -> "class1"
    ng-animate class1 class1-add class1-add-active class-remove class-remove-active
    "class1" -> ""
    ng-animate class1-remove class1-remove-active

3.ngView 与 ngClass一起用，transition写在page-view里。

    "" -> "slideLeft"
    移除 page-view ng-scope ng-animate ng-leave leave-active ng-leave-active slideLeft
    进入 page-view ng-scope ng-animate ng-enter enter-active ng-enter-active slideLeft slideLeft-add slideLeft-add-active

    "slideLeft" -> "slideRight"
    移除 page-view ng-scope ng-animate ng-leave leave-active ng-leave-active slideLeft slideLeft-remove slideRight-add (这里class同时保留了上次的值与本次增加的值)
    进入 page-view ng-scope ng-animate ng-enter enter-active ng-enter-active slideRight slideRight-add slideRight-add-active
        
    "slideRight" -> "slideRight"
    移除 page-view ng-scope ng-animate ng-leave leave-active ng-leave-active slideRight
    进入 page-view ng-scope ng-animate ng-enter enter-active ng-enter-active slideRight slideRight-add slideRight-add-active

##结论
AngularJS 1.4以后ngView与ngClass不能一起用了。

1.3.x
page-view ng-scope slideRight ng-animate ng-leave ng-leave-active
page-view ng-scope slideRight ng-animate ng-enter ng-enter-active

1.2.x
page-view ng-scope slideRight ng-animate ng-leave ng-leave-active ng-animate-start ng-animate-active
page-view ng-scope slideRight ng-animate ng-enter ng-enter-active ng-animate-start ng-animate-active