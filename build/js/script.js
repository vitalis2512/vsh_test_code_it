//"use strict";

/*! overthrow - An overflow:auto polyfill for responsive design. - v0.7.0 - 2013-11-04
 * Copyright (c) 2013 Scott Jehl, Filament Group, Inc.; Licensed MIT */
!function (a) {
    var b = a.document, c = b.documentElement, d = "overthrow-enabled", e = "ontouchmove"in b, f = "WebkitOverflowScrolling"in c.style || "msOverflowStyle"in c.style || !e && a.screen.width > 800 || function () {
        var b = a.navigator.userAgent, c = b.match(/AppleWebKit\/([0-9]+)/), d = c && c[1], e = c && d >= 534;
        return b.match(/Android ([0-9]+)/) && RegExp.$1 >= 3 && e || b.match(/ Version\/([0-9]+)/) && RegExp.$1 >= 0 && a.blackberry && e || b.indexOf("PlayBook") > -1 && e && -1 === !b.indexOf("Android 2") || b.match(/Firefox\/([0-9]+)/) && RegExp.$1 >= 4 || b.match(/wOSBrowser\/([0-9]+)/) && RegExp.$1 >= 233 && e || b.match(/NokiaBrowser\/([0-9\.]+)/) && 7.3 === parseFloat(RegExp.$1) && c && d >= 533
    }();
    a.overthrow = {}, a.overthrow.enabledClassName = d, a.overthrow.addClass = function () {
        -1 === c.className.indexOf(a.overthrow.enabledClassName) && (c.className += " " + a.overthrow.enabledClassName)
    }, a.overthrow.removeClass = function () {
        c.className = c.className.replace(a.overthrow.enabledClassName, "")
    }, a.overthrow.set = function () {
        f && a.overthrow.addClass()
    }, a.overthrow.canBeFilledWithPoly = e, a.overthrow.forget = function () {
        a.overthrow.removeClass()
    }, a.overthrow.support = f ? "native" : "none"
}(this), function (a, b, c) {
    if (b !== c) {
        b.easing = function (a, b, c, d) {
            return c * ((a = a / d - 1) * a * a + 1) + b
        }, b.tossing = !1;
        var d;
        b.toss = function (a, e) {
            b.intercept();
            var f, g, h = 0, i = a.scrollLeft, j = a.scrollTop, k = {top: "+0", left: "+0", duration: 50, easing: b.easing, finished: function () {
            }}, l = !1;
            if (e)for (var m in k)e[m] !== c && (k[m] = e[m]);
            return"string" == typeof k.left ? (k.left = parseFloat(k.left), f = k.left + i) : (f = k.left, k.left = k.left - i), "string" == typeof k.top ? (k.top = parseFloat(k.top), g = k.top + j) : (g = k.top, k.top = k.top - j), b.tossing = !0, d = setInterval(function () {
                h++ < k.duration ? (a.scrollLeft = k.easing(h, i, k.left, k.duration), a.scrollTop = k.easing(h, j, k.top, k.duration)) : (f !== a.scrollLeft ? a.scrollLeft = f : (l && k.finished(), l = !0), g !== a.scrollTop ? a.scrollTop = g : (l && k.finished(), l = !0), b.intercept())
            }, 1), {top: g, left: f, duration: b.duration, easing: b.easing}
        }, b.intercept = function () {
            clearInterval(d), b.tossing = !1
        }
    }
}(this, this.overthrow), function (a, b, c) {
    if (b !== c) {
        b.scrollIndicatorClassName = "overthrow";
        var d = a.document, e = d.documentElement, f = "native" === b.support, g = b.canBeFilledWithPoly, h = (b.configure, b.set), i = b.forget, j = b.scrollIndicatorClassName;
        b.closest = function (a, c) {
            return!c && a.className && a.className.indexOf(j) > -1 && a || b.closest(a.parentNode)
        };
        var k = !1;
        b.set = function () {
            if (h(), !k && !f && g) {
                a.overthrow.addClass(), k = !0, b.support = "polyfilled", b.forget = function () {
                    i(), k = !1, d.removeEventListener && d.removeEventListener("touchstart", u, !1)
                };
                var j, l, m, n, o = [], p = [], q = function () {
                    o = [], l = null
                }, r = function () {
                    p = [], m = null
                }, s = function (a) {
                    n = j.querySelectorAll("textarea, input");
                    for (var b = 0, c = n.length; c > b; b++)n[b].style.pointerEvents = a
                }, t = function (a, b) {
                    if (d.createEvent) {
                        var e, f = (!b || b === c) && j.parentNode || j.touchchild || j;
                        f !== j && (e = d.createEvent("HTMLEvents"), e.initEvent("touchend", !0, !0), j.dispatchEvent(e), f.touchchild = j, j = f, f.dispatchEvent(a))
                    }
                }, u = function (a) {
                    if (b.intercept && b.intercept(), q(), r(), j = b.closest(a.target), j && j !== e && !(a.touches.length > 1)) {
                        s("none");
                        var c = a, d = j.scrollTop, f = j.scrollLeft, g = j.offsetHeight, h = j.offsetWidth, i = a.touches[0].pageY, k = a.touches[0].pageX, n = j.scrollHeight, u = j.scrollWidth, v = function (a) {
                            var b = d + i - a.touches[0].pageY, e = f + k - a.touches[0].pageX, s = b >= (o.length ? o[0] : 0), v = e >= (p.length ? p[0] : 0);
                            b > 0 && n - g > b || e > 0 && u - h > e ? a.preventDefault() : t(c), l && s !== l && q(), m && v !== m && r(), l = s, m = v, j.scrollTop = b, j.scrollLeft = e, o.unshift(b), p.unshift(e), o.length > 3 && o.pop(), p.length > 3 && p.pop()
                        }, w = function () {
                            s("auto"), setTimeout(function () {
                                s("none")
                            }, 450), j.removeEventListener("touchmove", v, !1), j.removeEventListener("touchend", w, !1)
                        };
                        j.addEventListener("touchmove", v, !1), j.addEventListener("touchend", w, !1)
                    }
                };
                d.addEventListener("touchstart", u, !1)
            }
        }
    }
}(this, this.overthrow), function (a) {
    a.overthrow.set()
}(this);
/*! nanoScrollerJS - v0.8.1 - 2014
 * http://jamesflorentino.github.com/nanoScrollerJS/
 * Copyright (c) 2014 James Florentino; Licensed MIT */
(function ($, window, document) {
    "use strict";
    var BROWSER_IS_IE7, BROWSER_SCROLLBAR_WIDTH, DOMSCROLL, DOWN, DRAG, ENTER, KEYDOWN, KEYUP, MOUSEDOWN, MOUSEENTER, MOUSEMOVE, MOUSEUP, MOUSEWHEEL, NanoScroll, PANEDOWN, RESIZE, SCROLL, SCROLLBAR, TOUCHMOVE, UP, WHEEL, cAF, defaults, getBrowserScrollbarWidth, hasTransform, isFFWithBuggyScrollbar, rAF, transform, _elementStyle, _prefixStyle, _vendor;
    defaults = {

        /**
         a classname for the pane element.
         @property paneClass
         @type String
         @default 'nano-pane'
         */
        paneClass: 'nano-pane',

        /**
         a classname for the slider element.
         @property sliderClass
         @type String
         @default 'nano-slider'
         */
        sliderClass: 'nano-slider',

        /**
         a classname for the content element.
         @property contentClass
         @type String
         @default 'nano-content'
         */
        contentClass: 'nano-content',

        /**
         a setting to enable native scrolling in iOS devices.
         @property iOSNativeScrolling
         @type Boolean
         @default false
         */
        iOSNativeScrolling: false,

        /**
         a setting to prevent the rest of the page being
         scrolled when user scrolls the `.content` element.
         @property preventPageScrolling
         @type Boolean
         @default false
         */
        preventPageScrolling: false,

        /**
         a setting to disable binding to the resize event.
         @property disableResize
         @type Boolean
         @default false
         */
        disableResize: false,

        /**
         a setting to make the scrollbar always visible.
         @property alwaysVisible
         @type Boolean
         @default false
         */
        alwaysVisible: false,

        /**
         a default timeout for the `flash()` method.
         @property flashDelay
         @type Number
         @default 1500
         */
        flashDelay: 1500,

        /**
         a minimum height for the `.slider` element.
         @property sliderMinHeight
         @type Number
         @default 20
         */
        sliderMinHeight: 20,

        /**
         a maximum height for the `.slider` element.
         @property sliderMaxHeight
         @type Number
         @default null
         */
        sliderMaxHeight: null,

        /**
         an alternate document context.
         @property documentContext
         @type Document
         @default null
         */
        documentContext: null,

        /**
         an alternate window context.
         @property windowContext
         @type Window
         @default null
         */
        windowContext: null
    };

    /**
     @property SCROLLBAR
     @type String
     @static
     @final
     @private
     */
    SCROLLBAR = 'scrollbar';

    /**
     @property SCROLL
     @type String
     @static
     @final
     @private
     */
    SCROLL = 'scroll';

    /**
     @property MOUSEDOWN
     @type String
     @final
     @private
     */
    MOUSEDOWN = 'mousedown';

    /**
     @property MOUSEENTER
     @type String
     @final
     @private
     */
    MOUSEENTER = 'mouseenter';

    /**
     @property MOUSEMOVE
     @type String
     @static
     @final
     @private
     */
    MOUSEMOVE = 'mousemove';

    /**
     @property MOUSEWHEEL
     @type String
     @final
     @private
     */
    MOUSEWHEEL = 'mousewheel';

    /**
     @property MOUSEUP
     @type String
     @static
     @final
     @private
     */
    MOUSEUP = 'mouseup';

    /**
     @property RESIZE
     @type String
     @final
     @private
     */
    RESIZE = 'resize';

    /**
     @property DRAG
     @type String
     @static
     @final
     @private
     */
    DRAG = 'drag';

    /**
     @property ENTER
     @type String
     @static
     @final
     @private
     */
    ENTER = 'enter';

    /**
     @property UP
     @type String
     @static
     @final
     @private
     */
    UP = 'up';

    /**
     @property PANEDOWN
     @type String
     @static
     @final
     @private
     */
    PANEDOWN = 'panedown';

    /**
     @property DOMSCROLL
     @type String
     @static
     @final
     @private
     */
    DOMSCROLL = 'DOMMouseScroll';

    /**
     @property DOWN
     @type String
     @static
     @final
     @private
     */
    DOWN = 'down';

    /**
     @property WHEEL
     @type String
     @static
     @final
     @private
     */
    WHEEL = 'wheel';

    /**
     @property KEYDOWN
     @type String
     @static
     @final
     @private
     */
    KEYDOWN = 'keydown';

    /**
     @property KEYUP
     @type String
     @static
     @final
     @private
     */
    KEYUP = 'keyup';

    /**
     @property TOUCHMOVE
     @type String
     @static
     @final
     @private
     */
    TOUCHMOVE = 'touchmove';

    /**
     @property BROWSER_IS_IE7
     @type Boolean
     @static
     @final
     @private
     */
    BROWSER_IS_IE7 = window.navigator.appName === 'Microsoft Internet Explorer' && /msie 7./i.test(window.navigator.appVersion) && window.ActiveXObject;

    /**
     @property BROWSER_SCROLLBAR_WIDTH
     @type Number
     @static
     @default null
     @private
     */
    BROWSER_SCROLLBAR_WIDTH = null;
    rAF = window.requestAnimationFrame;
    cAF = window.cancelAnimationFrame;
    _elementStyle = document.createElement('div').style;
    _vendor = (function () {
        var i, transform, vendor, vendors, _i, _len;
        vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'];
        for (i = _i = 0, _len = vendors.length; _i < _len; i = ++_i) {
            vendor = vendors[i];
            transform = vendors[i] + 'ransform';
            if (transform in _elementStyle) {
                return vendors[i].substr(0, vendors[i].length - 1);
            }
        }
        return false;
    })();
    _prefixStyle = function (style) {
        if (_vendor === false) {
            return false;
        }
        if (_vendor === '') {
            return style;
        }
        return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
    };
    transform = _prefixStyle('transform');
    hasTransform = transform !== false;

    /**
     Returns browser's native scrollbar width
     @method getBrowserScrollbarWidth
     @return {Number} the scrollbar width in pixels
     @static
     @private
     */
    getBrowserScrollbarWidth = function () {
        var outer, outerStyle, scrollbarWidth;
        outer = document.createElement('div');
        outerStyle = outer.style;
        outerStyle.position = 'absolute';
        outerStyle.width = '100px';
        outerStyle.height = '100px';
        outerStyle.overflow = SCROLL;
        outerStyle.top = '-9999px';
        document.body.appendChild(outer);
        scrollbarWidth = outer.offsetWidth - outer.clientWidth;
        document.body.removeChild(outer);
        return scrollbarWidth;
    };
    isFFWithBuggyScrollbar = function () {
        var isOSXFF, ua, version;
        ua = window.navigator.userAgent;
        isOSXFF = /(?=.+Mac OS X)(?=.+Firefox)/.test(ua);
        if (!isOSXFF) {
            return false;
        }
        version = /Firefox\/\d{2}\./.exec(ua);
        if (version) {
            version = version[0].replace(/\D+/g, '');
        }
        return isOSXFF && +version > 23;
    };

    /**
     @class NanoScroll
     @param element {HTMLElement|Node} the main element
     @param options {Object} nanoScroller's options
     @constructor
     */
    NanoScroll = (function () {
        function NanoScroll(el, options) {
            this.el = el;
            this.options = options;
            BROWSER_SCROLLBAR_WIDTH || (BROWSER_SCROLLBAR_WIDTH = getBrowserScrollbarWidth());
            this.$el = $(this.el);
            this.doc = $(this.options.documentContext || document);
            this.win = $(this.options.windowContext || window);
            this.body = this.doc.find('body');
            this.$content = this.$el.children("." + options.contentClass);
            this.$content.attr('tabindex', this.options.tabIndex || 0);
            this.content = this.$content[0];
            this.previousPosition = 0;
            if (this.options.iOSNativeScrolling && (this.el.style.WebkitOverflowScrolling != null)) {
                this.nativeScrolling();
            } else {
                this.generate();
            }
            this.createEvents();
            this.addEvents();
            this.reset();
        }


        /**
         Prevents the rest of the page being scrolled
         when user scrolls the `.nano-content` element.
         @method preventScrolling
         @param event {Event}
         @param direction {String} Scroll direction (up or down)
         @private
         */

        NanoScroll.prototype.preventScrolling = function (e, direction) {
            if (!this.isActive) {
                return;
            }
            if (e.type === DOMSCROLL) {
                if (direction === DOWN && e.originalEvent.detail > 0 || direction === UP && e.originalEvent.detail < 0) {
                    e.preventDefault();
                }
            } else if (e.type === MOUSEWHEEL) {
                if (!e.originalEvent || !e.originalEvent.wheelDelta) {
                    return;
                }
                if (direction === DOWN && e.originalEvent.wheelDelta < 0 || direction === UP && e.originalEvent.wheelDelta > 0) {
                    e.preventDefault();
                }
            }
        };


        /**
         Enable iOS native scrolling
         @method nativeScrolling
         @private
         */

        NanoScroll.prototype.nativeScrolling = function () {
            this.$content.css({
                WebkitOverflowScrolling: 'touch'
            });
            this.iOSNativeScrolling = true;
            this.isActive = true;
        };


        /**
         Updates those nanoScroller properties that
         are related to current scrollbar position.
         @method updateScrollValues
         @private
         */

        NanoScroll.prototype.updateScrollValues = function () {
            var content, direction;
            content = this.content;
            this.maxScrollTop = content.scrollHeight - content.clientHeight;
            this.prevScrollTop = this.contentScrollTop || 0;
            this.contentScrollTop = content.scrollTop;
            direction = this.contentScrollTop > this.previousPosition ? "down" : this.contentScrollTop < this.previousPosition ? "up" : "same";
            this.previousPosition = this.contentScrollTop;
            if (direction !== "same") {
                this.$el.trigger('update', {
                    position: this.contentScrollTop,
                    maximum: this.maxScrollTop,
                    direction: direction
                });
            }
            if (!this.iOSNativeScrolling) {
                this.maxSliderTop = this.paneHeight - this.sliderHeight;
                this.sliderTop = this.maxScrollTop === 0 ? 0 : this.contentScrollTop * this.maxSliderTop / this.maxScrollTop;
            }
        };


        /**
         Updates CSS styles for current scroll position.
         Uses CSS 2d transfroms and `window.requestAnimationFrame` if available.
         @method setOnScrollStyles
         @private
         */

        NanoScroll.prototype.setOnScrollStyles = function () {
            var cssValue;
            if (hasTransform) {
                cssValue = {};
                cssValue[transform] = "translate(0, " + this.sliderTop + "px)";
            } else {
                cssValue = {
                    top: this.sliderTop
                };
            }
            if (rAF) {
                if (cAF && this.scrollRAF) {
                    cAF(this.scrollRAF);
                }
                this.scrollRAF = rAF((function (_this) {
                    return function () {
                        _this.scrollRAF = null;
                        return _this.slider.css(cssValue);
                    };
                })(this));
            } else {
                this.slider.css(cssValue);
            }
        };


        /**
         Creates event related methods
         @method createEvents
         @private
         */

        NanoScroll.prototype.createEvents = function () {
            this.events = {
                down: (function (_this) {
                    return function (e) {
                        _this.isBeingDragged = true;
                        _this.offsetY = e.pageY - _this.slider.offset().top;
                        if (!_this.slider.is(e.target)) {
                            _this.offsetY = 0;
                        }
                        _this.pane.addClass('active');
                        _this.doc.bind(MOUSEMOVE, _this.events[DRAG]).bind(MOUSEUP, _this.events[UP]);
                        _this.body.bind(MOUSEENTER, _this.events[ENTER]);
                        return false;
                    };
                })(this),
                drag: (function (_this) {
                    return function (e) {
                        _this.sliderY = e.pageY - _this.$el.offset().top - _this.paneTop - (_this.offsetY || _this.sliderHeight * 0.5);
                        _this.scroll();
                        if (_this.contentScrollTop >= _this.maxScrollTop && _this.prevScrollTop !== _this.maxScrollTop) {
                            _this.$el.trigger('scrollend');
                        } else if (_this.contentScrollTop === 0 && _this.prevScrollTop !== 0) {
                            _this.$el.trigger('scrolltop');
                        }
                        return false;
                    };
                })(this),
                up: (function (_this) {
                    return function (e) {
                        _this.isBeingDragged = false;
                        _this.pane.removeClass('active');
                        _this.doc.unbind(MOUSEMOVE, _this.events[DRAG]).unbind(MOUSEUP, _this.events[UP]);
                        _this.body.unbind(MOUSEENTER, _this.events[ENTER]);
                        return false;
                    };
                })(this),
                resize: (function (_this) {
                    return function (e) {
                        _this.reset();
                    };
                })(this),
                panedown: (function (_this) {
                    return function (e) {
                        _this.sliderY = (e.offsetY || e.originalEvent.layerY) - (_this.sliderHeight * 0.5);
                        _this.scroll();
                        _this.events.down(e);
                        return false;
                    };
                })(this),
                scroll: (function (_this) {
                    return function (e) {
                        _this.updateScrollValues();
                        if (_this.isBeingDragged) {
                            return;
                        }
                        if (!_this.iOSNativeScrolling) {
                            _this.sliderY = _this.sliderTop;
                            _this.setOnScrollStyles();
                        }
                        if (e == null) {
                            return;
                        }
                        if (_this.contentScrollTop >= _this.maxScrollTop) {
                            if (_this.options.preventPageScrolling) {
                                _this.preventScrolling(e, DOWN);
                            }
                            if (_this.prevScrollTop !== _this.maxScrollTop) {
                                _this.$el.trigger('scrollend');
                            }
                        } else if (_this.contentScrollTop === 0) {
                            if (_this.options.preventPageScrolling) {
                                _this.preventScrolling(e, UP);
                            }
                            if (_this.prevScrollTop !== 0) {
                                _this.$el.trigger('scrolltop');
                            }
                        }
                    };
                })(this),
                wheel: (function (_this) {
                    return function (e) {
                        var delta;
                        if (e == null) {
                            return;
                        }
                        delta = e.delta || e.wheelDelta || (e.originalEvent && e.originalEvent.wheelDelta) || -e.detail || (e.originalEvent && -e.originalEvent.detail);
                        if (delta) {
                            _this.sliderY += -delta / 3;
                        }
                        _this.scroll();
                        return false;
                    };
                })(this),
                enter: (function (_this) {
                    return function (e) {
                        var _ref;
                        if (!_this.isBeingDragged) {
                            return;
                        }
                        if ((e.buttons || e.which) !== 1) {
                            return (_ref = _this.events)[UP].apply(_ref, arguments);
                        }
                    };
                })(this)
            };
        };


        /**
         Adds event listeners with jQuery.
         @method addEvents
         @private
         */

        NanoScroll.prototype.addEvents = function () {
            var events;
            this.removeEvents();
            events = this.events;
            if (!this.options.disableResize) {
                this.win.bind(RESIZE, events[RESIZE]);
            }
            if (!this.iOSNativeScrolling) {
                this.slider.bind(MOUSEDOWN, events[DOWN]);
                this.pane.bind(MOUSEDOWN, events[PANEDOWN]).bind("" + MOUSEWHEEL + " " + DOMSCROLL, events[WHEEL]);
            }
            this.$content.bind("" + SCROLL + " " + MOUSEWHEEL + " " + DOMSCROLL + " " + TOUCHMOVE, events[SCROLL]);
        };


        /**
         Removes event listeners with jQuery.
         @method removeEvents
         @private
         */

        NanoScroll.prototype.removeEvents = function () {
            var events;
            events = this.events;
            this.win.unbind(RESIZE, events[RESIZE]);
            if (!this.iOSNativeScrolling) {
                this.slider.unbind();
                this.pane.unbind();
            }
            this.$content.unbind("" + SCROLL + " " + MOUSEWHEEL + " " + DOMSCROLL + " " + TOUCHMOVE, events[SCROLL]);
        };


        /**
         Generates nanoScroller's scrollbar and elements for it.
         @method generate
         @chainable
         @private
         */

        NanoScroll.prototype.generate = function () {
            var contentClass, cssRule, currentPadding, options, pane, paneClass, sliderClass;
            options = this.options;
            paneClass = options.paneClass, sliderClass = options.sliderClass, contentClass = options.contentClass;
            if (!(pane = this.$el.children("." + paneClass)).length && !pane.children("." + sliderClass).length) {
                this.$el.append("<div class=\"" + paneClass + "\"><div class=\"" + sliderClass + "\" /></div>");
            }
            this.pane = this.$el.children("." + paneClass);
            this.slider = this.pane.find("." + sliderClass);
            if (BROWSER_SCROLLBAR_WIDTH === 0 && isFFWithBuggyScrollbar()) {
                currentPadding = window.getComputedStyle(this.content, null).getPropertyValue('padding-right').replace(/[^0-9.]+/g, '');
                cssRule = {
                    right: -14,
                    paddingRight: +currentPadding + 14
                };
            } else if (BROWSER_SCROLLBAR_WIDTH) {
                cssRule = {
                    right: -BROWSER_SCROLLBAR_WIDTH
                };
                this.$el.addClass('has-scrollbar');
            }
            if (cssRule != null) {
                this.$content.css(cssRule);
            }
            return this;
        };


        /**
         @method restore
         @private
         */

        NanoScroll.prototype.restore = function () {
            this.stopped = false;
            if (!this.iOSNativeScrolling) {
                this.pane.show();
            }
            this.addEvents();
        };


        /**
         Resets nanoScroller's scrollbar.
         @method reset
         @chainable
         @example
         $(".nano").nanoScroller();
         */

        NanoScroll.prototype.reset = function () {
            var content, contentHeight, contentPosition, contentStyle, contentStyleOverflowY, paneBottom, paneHeight, paneOuterHeight, paneTop, parentMaxHeight, right, sliderHeight;
            if (this.iOSNativeScrolling) {
                this.contentHeight = this.content.scrollHeight;
                return;
            }
            if (!this.$el.find("." + this.options.paneClass).length) {
                this.generate().stop();
            }
            if (this.stopped) {
                this.restore();
            }
            content = this.content;
            contentStyle = content.style;
            contentStyleOverflowY = contentStyle.overflowY;
            if (BROWSER_IS_IE7) {
                this.$content.css({
                    height: this.$content.height()
                });
            }
            contentHeight = content.scrollHeight + BROWSER_SCROLLBAR_WIDTH;
            parentMaxHeight = parseInt(this.$el.css("max-height"), 10);
            if (parentMaxHeight > 0) {
                this.$el.height("");
                this.$el.height(content.scrollHeight > parentMaxHeight ? parentMaxHeight : content.scrollHeight);
            }
            paneHeight = this.pane.outerHeight(false);
            paneTop = parseInt(this.pane.css('top'), 10);
            paneBottom = parseInt(this.pane.css('bottom'), 10);
            paneOuterHeight = paneHeight + paneTop + paneBottom;
            sliderHeight = Math.round(paneOuterHeight / contentHeight * paneOuterHeight);
            if (sliderHeight < this.options.sliderMinHeight) {
                sliderHeight = this.options.sliderMinHeight;
            } else if ((this.options.sliderMaxHeight != null) && sliderHeight > this.options.sliderMaxHeight) {
                sliderHeight = this.options.sliderMaxHeight;
            }
            if (contentStyleOverflowY === SCROLL && contentStyle.overflowX !== SCROLL) {
                sliderHeight += BROWSER_SCROLLBAR_WIDTH;
            }
            this.maxSliderTop = paneOuterHeight - sliderHeight;
            this.contentHeight = contentHeight;
            this.paneHeight = paneHeight;
            this.paneOuterHeight = paneOuterHeight;
            this.sliderHeight = sliderHeight;
            this.paneTop = paneTop;
            this.slider.height(sliderHeight);
            this.events.scroll();
            this.pane.show();
            this.isActive = true;
            if ((content.scrollHeight === content.clientHeight) || (this.pane.outerHeight(true) >= content.scrollHeight && contentStyleOverflowY !== SCROLL)) {
                this.pane.hide();
                this.isActive = false;
            } else if (this.el.clientHeight === content.scrollHeight && contentStyleOverflowY === SCROLL) {
                this.slider.hide();
            } else {
                this.slider.show();
            }
            this.pane.css({
                opacity: (this.options.alwaysVisible ? 1 : ''),
                visibility: (this.options.alwaysVisible ? 'visible' : '')
            });
            contentPosition = this.$content.css('position');
            if (contentPosition === 'static' || contentPosition === 'relative') {
                right = parseInt(this.$content.css('right'), 10);
                if (right) {
                    this.$content.css({
                        right: '',
                        marginRight: right
                    });
                }
            }
            return this;
        };


        /**
         @method scroll
         @private
         @example
         $(".nano").nanoScroller({ scroll: 'top' });
         */

        NanoScroll.prototype.scroll = function () {
            if (!this.isActive) {
                return;
            }
            this.sliderY = Math.max(0, this.sliderY);
            this.sliderY = Math.min(this.maxSliderTop, this.sliderY);
            this.$content.scrollTop(this.maxScrollTop * this.sliderY / this.maxSliderTop);
            if (!this.iOSNativeScrolling) {
                this.updateScrollValues();
                this.setOnScrollStyles();
            }
            return this;
        };


        /**
         Scroll at the bottom with an offset value
         @method scrollBottom
         @param offsetY {Number}
         @chainable
         @example
         $(".nano").nanoScroller({ scrollBottom: value });
         */

        NanoScroll.prototype.scrollBottom = function (offsetY) {
            if (!this.isActive) {
                return;
            }
            this.$content.scrollTop(this.contentHeight - this.$content.height() - offsetY).trigger(MOUSEWHEEL);
            this.stop().restore();
            return this;
        };


        /**
         Scroll at the top with an offset value
         @method scrollTop
         @param offsetY {Number}
         @chainable
         @example
         $(".nano").nanoScroller({ scrollTop: value });
         */

        NanoScroll.prototype.scrollTop = function (offsetY) {
            if (!this.isActive) {
                return;
            }
            this.$content.scrollTop(+offsetY).trigger(MOUSEWHEEL);
            this.stop().restore();
            return this;
        };


        /**
         Scroll to an element
         @method scrollTo
         @param node {Node} A node to scroll to.
         @chainable
         @example
         $(".nano").nanoScroller({ scrollTo: $('#a_node') });
         */

        NanoScroll.prototype.scrollTo = function (node) {
            if (!this.isActive) {
                return;
            }
            this.scrollTop(this.$el.find(node).get(0).offsetTop);
            return this;
        };


        /**
         To stop the operation.
         This option will tell the plugin to disable all event bindings and hide the gadget scrollbar from the UI.
         @method stop
         @chainable
         @example
         $(".nano").nanoScroller({ stop: true });
         */

        NanoScroll.prototype.stop = function () {
            if (cAF && this.scrollRAF) {
                cAF(this.scrollRAF);
                this.scrollRAF = null;
            }
            this.stopped = true;
            this.removeEvents();
            if (!this.iOSNativeScrolling) {
                this.pane.hide();
            }
            return this;
        };


        /**
         Destroys nanoScroller and restores browser's native scrollbar.
         @method destroy
         @chainable
         @example
         $(".nano").nanoScroller({ destroy: true });
         */

        NanoScroll.prototype.destroy = function () {
            if (!this.stopped) {
                this.stop();
            }
            if (!this.iOSNativeScrolling && this.pane.length) {
                this.pane.remove();
            }
            if (BROWSER_IS_IE7) {
                this.$content.height('');
            }
            this.$content.removeAttr('tabindex');
            if (this.$el.hasClass('has-scrollbar')) {
                this.$el.removeClass('has-scrollbar');
                this.$content.css({
                    right: ''
                });
            }
            return this;
        };


        /**
         To flash the scrollbar gadget for an amount of time defined in plugin settings (defaults to 1,5s).
         Useful if you want to show the user (e.g. on pageload) that there is more content waiting for him.
         @method flash
         @chainable
         @example
         $(".nano").nanoScroller({ flash: true });
         */

        NanoScroll.prototype.flash = function () {
            if (this.iOSNativeScrolling) {
                return;
            }
            if (!this.isActive) {
                return;
            }
            this.reset();
            this.pane.addClass('flashed');
            setTimeout((function (_this) {
                return function () {
                    _this.pane.removeClass('flashed');
                };
            })(this), this.options.flashDelay);
            return this;
        };

        return NanoScroll;

    })();
    $.fn.nanoScroller = function (settings) {
        return this.each(function () {
            var options, scrollbar;
            if (!(scrollbar = this.nanoscroller)) {
                options = $.extend({}, defaults, settings);
                this.nanoscroller = scrollbar = new NanoScroll(this, options);
            }
            if (settings && typeof settings === "object") {
                $.extend(scrollbar.options, settings);
                if (settings.scrollBottom != null) {
                    return scrollbar.scrollBottom(settings.scrollBottom);
                }
                if (settings.scrollTop != null) {
                    return scrollbar.scrollTop(settings.scrollTop);
                }
                if (settings.scrollTo) {
                    return scrollbar.scrollTo(settings.scrollTo);
                }
                if (settings.scroll === 'bottom') {
                    return scrollbar.scrollBottom(0);
                }
                if (settings.scroll === 'top') {
                    return scrollbar.scrollTop(0);
                }
                if (settings.scroll && settings.scroll instanceof $) {
                    return scrollbar.scrollTo(settings.scroll);
                }
                if (settings.stop) {
                    return scrollbar.stop();
                }
                if (settings.destroy) {
                    return scrollbar.destroy();
                }
                if (settings.flash) {
                    return scrollbar.flash();
                }
            }
            return scrollbar.reset();
        });
    };
    $.fn.nanoScroller.Constructor = NanoScroll;
})(jQuery, window, document);

//# sourceMappingURL=jquery.nanoscroller.js.map
"function"!==typeof Object.create&&(Object.create=function(f){function g(){}g.prototype=f;return new g});
(function(f,g,k){var l={init:function(a,b){this.$elem=f(b);this.options=f.extend({},f.fn.owlCarousel.options,this.$elem.data(),a);this.userOptions=a;this.loadContent()},loadContent:function(){function a(a){var d,e="";if("function"===typeof b.options.jsonSuccess)b.options.jsonSuccess.apply(this,[a]);else{for(d in a.owl)a.owl.hasOwnProperty(d)&&(e+=a.owl[d].item);b.$elem.html(e)}b.logIn()}var b=this,e;"function"===typeof b.options.beforeInit&&b.options.beforeInit.apply(this,[b.$elem]);"string"===typeof b.options.jsonPath?
(e=b.options.jsonPath,f.getJSON(e,a)):b.logIn()},logIn:function(){this.$elem.data("owl-originalStyles",this.$elem.attr("style"));this.$elem.data("owl-originalClasses",this.$elem.attr("class"));this.$elem.css({opacity:0});this.orignalItems=this.options.items;this.checkBrowser();this.wrapperWidth=0;this.checkVisible=null;this.setVars()},setVars:function(){if(0===this.$elem.children().length)return!1;this.baseClass();this.eventTypes();this.$userItems=this.$elem.children();this.itemsAmount=this.$userItems.length;
this.wrapItems();this.$owlItems=this.$elem.find(".owl-item");this.$owlWrapper=this.$elem.find(".owl-wrapper");this.playDirection="next";this.prevItem=0;this.prevArr=[0];this.currentItem=0;this.customEvents();this.onStartup()},onStartup:function(){this.updateItems();this.calculateAll();this.buildControls();this.updateControls();this.response();this.moveEvents();this.stopOnHover();this.owlStatus();!1!==this.options.transitionStyle&&this.transitionTypes(this.options.transitionStyle);!0===this.options.autoPlay&&
(this.options.autoPlay=5E3);this.play();this.$elem.find(".owl-wrapper").css("display","block");this.$elem.is(":visible")?this.$elem.css("opacity",1):this.watchVisibility();this.onstartup=!1;this.eachMoveUpdate();"function"===typeof this.options.afterInit&&this.options.afterInit.apply(this,[this.$elem])},eachMoveUpdate:function(){!0===this.options.lazyLoad&&this.lazyLoad();!0===this.options.autoHeight&&this.autoHeight();this.onVisibleItems();"function"===typeof this.options.afterAction&&this.options.afterAction.apply(this,
[this.$elem])},updateVars:function(){"function"===typeof this.options.beforeUpdate&&this.options.beforeUpdate.apply(this,[this.$elem]);this.watchVisibility();this.updateItems();this.calculateAll();this.updatePosition();this.updateControls();this.eachMoveUpdate();"function"===typeof this.options.afterUpdate&&this.options.afterUpdate.apply(this,[this.$elem])},reload:function(){var a=this;g.setTimeout(function(){a.updateVars()},0)},watchVisibility:function(){var a=this;if(!1===a.$elem.is(":visible"))a.$elem.css({opacity:0}),
g.clearInterval(a.autoPlayInterval),g.clearInterval(a.checkVisible);else return!1;a.checkVisible=g.setInterval(function(){a.$elem.is(":visible")&&(a.reload(),a.$elem.animate({opacity:1},200),g.clearInterval(a.checkVisible))},500)},wrapItems:function(){this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');this.wrapperOuter=this.$elem.find(".owl-wrapper-outer");this.$elem.css("display","block")},
baseClass:function(){var a=this.$elem.hasClass(this.options.baseClass),b=this.$elem.hasClass(this.options.theme);a||this.$elem.addClass(this.options.baseClass);b||this.$elem.addClass(this.options.theme)},updateItems:function(){var a,b;if(!1===this.options.responsive)return!1;if(!0===this.options.singleItem)return this.options.items=this.orignalItems=1,this.options.itemsCustom=!1,this.options.itemsDesktop=!1,this.options.itemsDesktopSmall=!1,this.options.itemsTablet=!1,this.options.itemsTabletSmall=
!1,this.options.itemsMobile=!1;a=f(this.options.responsiveBaseWidth).width();a>(this.options.itemsDesktop[0]||this.orignalItems)&&(this.options.items=this.orignalItems);if(!1!==this.options.itemsCustom)for(this.options.itemsCustom.sort(function(a,b){return a[0]-b[0]}),b=0;b<this.options.itemsCustom.length;b+=1)this.options.itemsCustom[b][0]<=a&&(this.options.items=this.options.itemsCustom[b][1]);else a<=this.options.itemsDesktop[0]&&!1!==this.options.itemsDesktop&&(this.options.items=this.options.itemsDesktop[1]),
a<=this.options.itemsDesktopSmall[0]&&!1!==this.options.itemsDesktopSmall&&(this.options.items=this.options.itemsDesktopSmall[1]),a<=this.options.itemsTablet[0]&&!1!==this.options.itemsTablet&&(this.options.items=this.options.itemsTablet[1]),a<=this.options.itemsTabletSmall[0]&&!1!==this.options.itemsTabletSmall&&(this.options.items=this.options.itemsTabletSmall[1]),a<=this.options.itemsMobile[0]&&!1!==this.options.itemsMobile&&(this.options.items=this.options.itemsMobile[1]);this.options.items>this.itemsAmount&&
!0===this.options.itemsScaleUp&&(this.options.items=this.itemsAmount)},response:function(){var a=this,b,e;if(!0!==a.options.responsive)return!1;e=f(g).width();a.resizer=function(){f(g).width()!==e&&(!1!==a.options.autoPlay&&g.clearInterval(a.autoPlayInterval),g.clearTimeout(b),b=g.setTimeout(function(){e=f(g).width();a.updateVars()},a.options.responsiveRefreshRate))};f(g).resize(a.resizer)},updatePosition:function(){this.jumpTo(this.currentItem);!1!==this.options.autoPlay&&this.checkAp()},appendItemsSizes:function(){var a=
this,b=0,e=a.itemsAmount-a.options.items;a.$owlItems.each(function(c){var d=f(this);d.css({width:a.itemWidth}).data("owl-item",Number(c));if(0===c%a.options.items||c===e)c>e||(b+=1);d.data("owl-roundPages",b)})},appendWrapperSizes:function(){this.$owlWrapper.css({width:this.$owlItems.length*this.itemWidth*2,left:0});this.appendItemsSizes()},calculateAll:function(){this.calculateWidth();this.appendWrapperSizes();this.loops();this.max()},calculateWidth:function(){this.itemWidth=Math.round(this.$elem.width()/
this.options.items)},max:function(){var a=-1*(this.itemsAmount*this.itemWidth-this.options.items*this.itemWidth);this.options.items>this.itemsAmount?this.maximumPixels=a=this.maximumItem=0:(this.maximumItem=this.itemsAmount-this.options.items,this.maximumPixels=a);return a},min:function(){return 0},loops:function(){var a=0,b=0,e,c;this.positionsInArray=[0];this.pagesInArray=[];for(e=0;e<this.itemsAmount;e+=1)b+=this.itemWidth,this.positionsInArray.push(-b),!0===this.options.scrollPerPage&&(c=f(this.$owlItems[e]),
c=c.data("owl-roundPages"),c!==a&&(this.pagesInArray[a]=this.positionsInArray[e],a=c))},buildControls:function(){if(!0===this.options.navigation||!0===this.options.pagination)this.owlControls=f('<div class="owl-controls"/>').toggleClass("clickable",!this.browser.isTouch).appendTo(this.$elem);!0===this.options.pagination&&this.buildPagination();!0===this.options.navigation&&this.buildButtons()},buildButtons:function(){var a=this,b=f('<div class="owl-buttons"/>');a.owlControls.append(b);a.buttonPrev=
f("<div/>",{"class":"owl-prev",html:a.options.navigationText[0]||""});a.buttonNext=f("<div/>",{"class":"owl-next",html:a.options.navigationText[1]||""});b.append(a.buttonPrev).append(a.buttonNext);b.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(a){a.preventDefault()});b.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(b){b.preventDefault();f(this).hasClass("owl-next")?a.next():a.prev()})},buildPagination:function(){var a=this;a.paginationWrapper=
f('<div class="owl-pagination"/>');a.owlControls.append(a.paginationWrapper);a.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(b){b.preventDefault();Number(f(this).data("owl-page"))!==a.currentItem&&a.goTo(Number(f(this).data("owl-page")),!0)})},updatePagination:function(){var a,b,e,c,d,g;if(!1===this.options.pagination)return!1;this.paginationWrapper.html("");a=0;b=this.itemsAmount-this.itemsAmount%this.options.items;for(c=0;c<this.itemsAmount;c+=1)0===c%this.options.items&&
(a+=1,b===c&&(e=this.itemsAmount-this.options.items),d=f("<div/>",{"class":"owl-page"}),g=f("<span></span>",{text:!0===this.options.paginationNumbers?a:"","class":!0===this.options.paginationNumbers?"owl-numbers":""}),d.append(g),d.data("owl-page",b===c?e:c),d.data("owl-roundPages",a),this.paginationWrapper.append(d));this.checkPagination()},checkPagination:function(){var a=this;if(!1===a.options.pagination)return!1;a.paginationWrapper.find(".owl-page").each(function(){f(this).data("owl-roundPages")===
f(a.$owlItems[a.currentItem]).data("owl-roundPages")&&(a.paginationWrapper.find(".owl-page").removeClass("active"),f(this).addClass("active"))})},checkNavigation:function(){if(!1===this.options.navigation)return!1;!1===this.options.rewindNav&&(0===this.currentItem&&0===this.maximumItem?(this.buttonPrev.addClass("disabled"),this.buttonNext.addClass("disabled")):0===this.currentItem&&0!==this.maximumItem?(this.buttonPrev.addClass("disabled"),this.buttonNext.removeClass("disabled")):this.currentItem===
this.maximumItem?(this.buttonPrev.removeClass("disabled"),this.buttonNext.addClass("disabled")):0!==this.currentItem&&this.currentItem!==this.maximumItem&&(this.buttonPrev.removeClass("disabled"),this.buttonNext.removeClass("disabled")))},updateControls:function(){this.updatePagination();this.checkNavigation();this.owlControls&&(this.options.items>=this.itemsAmount?this.owlControls.hide():this.owlControls.show())},destroyControls:function(){this.owlControls&&this.owlControls.remove()},next:function(a){if(this.isTransition)return!1;
this.currentItem+=!0===this.options.scrollPerPage?this.options.items:1;if(this.currentItem>this.maximumItem+(!0===this.options.scrollPerPage?this.options.items-1:0))if(!0===this.options.rewindNav)this.currentItem=0,a="rewind";else return this.currentItem=this.maximumItem,!1;this.goTo(this.currentItem,a)},prev:function(a){if(this.isTransition)return!1;this.currentItem=!0===this.options.scrollPerPage&&0<this.currentItem&&this.currentItem<this.options.items?0:this.currentItem-(!0===this.options.scrollPerPage?
this.options.items:1);if(0>this.currentItem)if(!0===this.options.rewindNav)this.currentItem=this.maximumItem,a="rewind";else return this.currentItem=0,!1;this.goTo(this.currentItem,a)},goTo:function(a,b,e){var c=this;if(c.isTransition)return!1;"function"===typeof c.options.beforeMove&&c.options.beforeMove.apply(this,[c.$elem]);a>=c.maximumItem?a=c.maximumItem:0>=a&&(a=0);c.currentItem=c.owl.currentItem=a;if(!1!==c.options.transitionStyle&&"drag"!==e&&1===c.options.items&&!0===c.browser.support3d)return c.swapSpeed(0),
!0===c.browser.support3d?c.transition3d(c.positionsInArray[a]):c.css2slide(c.positionsInArray[a],1),c.afterGo(),c.singleItemTransition(),!1;a=c.positionsInArray[a];!0===c.browser.support3d?(c.isCss3Finish=!1,!0===b?(c.swapSpeed("paginationSpeed"),g.setTimeout(function(){c.isCss3Finish=!0},c.options.paginationSpeed)):"rewind"===b?(c.swapSpeed(c.options.rewindSpeed),g.setTimeout(function(){c.isCss3Finish=!0},c.options.rewindSpeed)):(c.swapSpeed("slideSpeed"),g.setTimeout(function(){c.isCss3Finish=!0},
c.options.slideSpeed)),c.transition3d(a)):!0===b?c.css2slide(a,c.options.paginationSpeed):"rewind"===b?c.css2slide(a,c.options.rewindSpeed):c.css2slide(a,c.options.slideSpeed);c.afterGo()},jumpTo:function(a){"function"===typeof this.options.beforeMove&&this.options.beforeMove.apply(this,[this.$elem]);a>=this.maximumItem||-1===a?a=this.maximumItem:0>=a&&(a=0);this.swapSpeed(0);!0===this.browser.support3d?this.transition3d(this.positionsInArray[a]):this.css2slide(this.positionsInArray[a],1);this.currentItem=
this.owl.currentItem=a;this.afterGo()},afterGo:function(){this.prevArr.push(this.currentItem);this.prevItem=this.owl.prevItem=this.prevArr[this.prevArr.length-2];this.prevArr.shift(0);this.prevItem!==this.currentItem&&(this.checkPagination(),this.checkNavigation(),this.eachMoveUpdate(),!1!==this.options.autoPlay&&this.checkAp());"function"===typeof this.options.afterMove&&this.prevItem!==this.currentItem&&this.options.afterMove.apply(this,[this.$elem])},stop:function(){this.apStatus="stop";g.clearInterval(this.autoPlayInterval)},
checkAp:function(){"stop"!==this.apStatus&&this.play()},play:function(){var a=this;a.apStatus="play";if(!1===a.options.autoPlay)return!1;g.clearInterval(a.autoPlayInterval);a.autoPlayInterval=g.setInterval(function(){a.next(!0)},a.options.autoPlay)},swapSpeed:function(a){"slideSpeed"===a?this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)):"paginationSpeed"===a?this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)):"string"!==typeof a&&this.$owlWrapper.css(this.addCssSpeed(a))},
addCssSpeed:function(a){return{"-webkit-transition":"all "+a+"ms ease","-moz-transition":"all "+a+"ms ease","-o-transition":"all "+a+"ms ease",transition:"all "+a+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(a){return{"-webkit-transform":"translate3d("+a+"px, 0px, 0px)","-moz-transform":"translate3d("+a+"px, 0px, 0px)","-o-transform":"translate3d("+a+"px, 0px, 0px)","-ms-transform":"translate3d("+
a+"px, 0px, 0px)",transform:"translate3d("+a+"px, 0px,0px)"}},transition3d:function(a){this.$owlWrapper.css(this.doTranslate(a))},css2move:function(a){this.$owlWrapper.css({left:a})},css2slide:function(a,b){var e=this;e.isCssFinish=!1;e.$owlWrapper.stop(!0,!0).animate({left:a},{duration:b||e.options.slideSpeed,complete:function(){e.isCssFinish=!0}})},checkBrowser:function(){var a=k.createElement("div");a.style.cssText="  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
a=a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);this.browser={support3d:null!==a&&1===a.length,isTouch:"ontouchstart"in g||g.navigator.msMaxTouchPoints}},moveEvents:function(){if(!1!==this.options.mouseDrag||!1!==this.options.touchDrag)this.gestures(),this.disabledEvents()},eventTypes:function(){var a=["s","e","x"];this.ev_types={};!0===this.options.mouseDrag&&!0===this.options.touchDrag?a=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]:
!1===this.options.mouseDrag&&!0===this.options.touchDrag?a=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]:!0===this.options.mouseDrag&&!1===this.options.touchDrag&&(a=["mousedown.owl","mousemove.owl","mouseup.owl"]);this.ev_types.start=a[0];this.ev_types.move=a[1];this.ev_types.end=a[2]},disabledEvents:function(){this.$elem.on("dragstart.owl",function(a){a.preventDefault()});this.$elem.on("mousedown.disableTextSelect",function(a){return f(a.target).is("input, textarea, select, option")})},
gestures:function(){function a(a){if(void 0!==a.touches)return{x:a.touches[0].pageX,y:a.touches[0].pageY};if(void 0===a.touches){if(void 0!==a.pageX)return{x:a.pageX,y:a.pageY};if(void 0===a.pageX)return{x:a.clientX,y:a.clientY}}}function b(a){"on"===a?(f(k).on(d.ev_types.move,e),f(k).on(d.ev_types.end,c)):"off"===a&&(f(k).off(d.ev_types.move),f(k).off(d.ev_types.end))}function e(b){b=b.originalEvent||b||g.event;d.newPosX=a(b).x-h.offsetX;d.newPosY=a(b).y-h.offsetY;d.newRelativeX=d.newPosX-h.relativePos;
"function"===typeof d.options.startDragging&&!0!==h.dragging&&0!==d.newRelativeX&&(h.dragging=!0,d.options.startDragging.apply(d,[d.$elem]));(8<d.newRelativeX||-8>d.newRelativeX)&&!0===d.browser.isTouch&&(void 0!==b.preventDefault?b.preventDefault():b.returnValue=!1,h.sliding=!0);(10<d.newPosY||-10>d.newPosY)&&!1===h.sliding&&f(k).off("touchmove.owl");d.newPosX=Math.max(Math.min(d.newPosX,d.newRelativeX/5),d.maximumPixels+d.newRelativeX/5);!0===d.browser.support3d?d.transition3d(d.newPosX):d.css2move(d.newPosX)}
function c(a){a=a.originalEvent||a||g.event;var c;a.target=a.target||a.srcElement;h.dragging=!1;!0!==d.browser.isTouch&&d.$owlWrapper.removeClass("grabbing");d.dragDirection=0>d.newRelativeX?d.owl.dragDirection="left":d.owl.dragDirection="right";0!==d.newRelativeX&&(c=d.getNewPosition(),d.goTo(c,!1,"drag"),h.targetElement===a.target&&!0!==d.browser.isTouch&&(f(a.target).on("click.disable",function(a){a.stopImmediatePropagation();a.stopPropagation();a.preventDefault();f(a.target).off("click.disable")}),
a=f._data(a.target,"events").click,c=a.pop(),a.splice(0,0,c)));b("off")}var d=this,h={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};d.isCssFinish=!0;d.$elem.on(d.ev_types.start,".owl-wrapper",function(c){c=c.originalEvent||c||g.event;var e;if(3===c.which)return!1;if(!(d.itemsAmount<=d.options.items)){if(!1===d.isCssFinish&&!d.options.dragBeforeAnimFinish||!1===d.isCss3Finish&&!d.options.dragBeforeAnimFinish)return!1;
!1!==d.options.autoPlay&&g.clearInterval(d.autoPlayInterval);!0===d.browser.isTouch||d.$owlWrapper.hasClass("grabbing")||d.$owlWrapper.addClass("grabbing");d.newPosX=0;d.newRelativeX=0;f(this).css(d.removeTransition());e=f(this).position();h.relativePos=e.left;h.offsetX=a(c).x-e.left;h.offsetY=a(c).y-e.top;b("on");h.sliding=!1;h.targetElement=c.target||c.srcElement}})},getNewPosition:function(){var a=this.closestItem();a>this.maximumItem?a=this.currentItem=this.maximumItem:0<=this.newPosX&&(this.currentItem=
a=0);return a},closestItem:function(){var a=this,b=!0===a.options.scrollPerPage?a.pagesInArray:a.positionsInArray,e=a.newPosX,c=null;f.each(b,function(d,g){e-a.itemWidth/20>b[d+1]&&e-a.itemWidth/20<g&&"left"===a.moveDirection()?(c=g,a.currentItem=!0===a.options.scrollPerPage?f.inArray(c,a.positionsInArray):d):e+a.itemWidth/20<g&&e+a.itemWidth/20>(b[d+1]||b[d]-a.itemWidth)&&"right"===a.moveDirection()&&(!0===a.options.scrollPerPage?(c=b[d+1]||b[b.length-1],a.currentItem=f.inArray(c,a.positionsInArray)):
(c=b[d+1],a.currentItem=d+1))});return a.currentItem},moveDirection:function(){var a;0>this.newRelativeX?(a="right",this.playDirection="next"):(a="left",this.playDirection="prev");return a},customEvents:function(){var a=this;a.$elem.on("owl.next",function(){a.next()});a.$elem.on("owl.prev",function(){a.prev()});a.$elem.on("owl.play",function(b,e){a.options.autoPlay=e;a.play();a.hoverStatus="play"});a.$elem.on("owl.stop",function(){a.stop();a.hoverStatus="stop"});a.$elem.on("owl.goTo",function(b,e){a.goTo(e)});
a.$elem.on("owl.jumpTo",function(b,e){a.jumpTo(e)})},stopOnHover:function(){var a=this;!0===a.options.stopOnHover&&!0!==a.browser.isTouch&&!1!==a.options.autoPlay&&(a.$elem.on("mouseover",function(){a.stop()}),a.$elem.on("mouseout",function(){"stop"!==a.hoverStatus&&a.play()}))},lazyLoad:function(){var a,b,e,c,d;if(!1===this.options.lazyLoad)return!1;for(a=0;a<this.itemsAmount;a+=1)b=f(this.$owlItems[a]),"loaded"!==b.data("owl-loaded")&&(e=b.data("owl-item"),c=b.find(".lazyOwl"),"string"!==typeof c.data("src")?
b.data("owl-loaded","loaded"):(void 0===b.data("owl-loaded")&&(c.hide(),b.addClass("loading").data("owl-loaded","checked")),(d=!0===this.options.lazyFollow?e>=this.currentItem:!0)&&e<this.currentItem+this.options.items&&c.length&&this.lazyPreload(b,c)))},lazyPreload:function(a,b){function e(){a.data("owl-loaded","loaded").removeClass("loading");b.removeAttr("data-src");"fade"===d.options.lazyEffect?b.fadeIn(400):b.show();"function"===typeof d.options.afterLazyLoad&&d.options.afterLazyLoad.apply(this,
[d.$elem])}function c(){f+=1;d.completeImg(b.get(0))||!0===k?e():100>=f?g.setTimeout(c,100):e()}var d=this,f=0,k;"DIV"===b.prop("tagName")?(b.css("background-image","url("+b.data("src")+")"),k=!0):b[0].src=b.data("src");c()},autoHeight:function(){function a(){var a=f(e.$owlItems[e.currentItem]).height();e.wrapperOuter.css("height",a+"px");e.wrapperOuter.hasClass("autoHeight")||g.setTimeout(function(){e.wrapperOuter.addClass("autoHeight")},0)}function b(){d+=1;e.completeImg(c.get(0))?a():100>=d?g.setTimeout(b,
100):e.wrapperOuter.css("height","")}var e=this,c=f(e.$owlItems[e.currentItem]).find("img"),d;void 0!==c.get(0)?(d=0,b()):a()},completeImg:function(a){return!a.complete||"undefined"!==typeof a.naturalWidth&&0===a.naturalWidth?!1:!0},onVisibleItems:function(){var a;!0===this.options.addClassActive&&this.$owlItems.removeClass("active");this.visibleItems=[];for(a=this.currentItem;a<this.currentItem+this.options.items;a+=1)this.visibleItems.push(a),!0===this.options.addClassActive&&f(this.$owlItems[a]).addClass("active");
this.owl.visibleItems=this.visibleItems},transitionTypes:function(a){this.outClass="owl-"+a+"-out";this.inClass="owl-"+a+"-in"},singleItemTransition:function(){var a=this,b=a.outClass,e=a.inClass,c=a.$owlItems.eq(a.currentItem),d=a.$owlItems.eq(a.prevItem),f=Math.abs(a.positionsInArray[a.currentItem])+a.positionsInArray[a.prevItem],g=Math.abs(a.positionsInArray[a.currentItem])+a.itemWidth/2;a.isTransition=!0;a.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":g+"px","-moz-perspective-origin":g+
"px","perspective-origin":g+"px"});d.css({position:"relative",left:f+"px"}).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){a.endPrev=!0;d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");a.clearTransStyle(d,b)});c.addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){a.endCurrent=!0;c.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");a.clearTransStyle(c,e)})},clearTransStyle:function(a,
b){a.css({position:"",left:""}).removeClass(b);this.endPrev&&this.endCurrent&&(this.$owlWrapper.removeClass("owl-origin"),this.isTransition=this.endCurrent=this.endPrev=!1)},owlStatus:function(){this.owl={userOptions:this.userOptions,baseElement:this.$elem,userItems:this.$userItems,owlItems:this.$owlItems,currentItem:this.currentItem,prevItem:this.prevItem,visibleItems:this.visibleItems,isTouch:this.browser.isTouch,browser:this.browser,dragDirection:this.dragDirection}},clearEvents:function(){this.$elem.off(".owl owl mousedown.disableTextSelect");
f(k).off(".owl owl");f(g).off("resize",this.resizer)},unWrap:function(){0!==this.$elem.children().length&&(this.$owlWrapper.unwrap(),this.$userItems.unwrap().unwrap(),this.owlControls&&this.owlControls.remove());this.clearEvents();this.$elem.attr("style",this.$elem.data("owl-originalStyles")||"").attr("class",this.$elem.data("owl-originalClasses"))},destroy:function(){this.stop();g.clearInterval(this.checkVisible);this.unWrap();this.$elem.removeData()},reinit:function(a){a=f.extend({},this.userOptions,
a);this.unWrap();this.init(a,this.$elem)},addItem:function(a,b){var e;if(!a)return!1;if(0===this.$elem.children().length)return this.$elem.append(a),this.setVars(),!1;this.unWrap();e=void 0===b||-1===b?-1:b;e>=this.$userItems.length||-1===e?this.$userItems.eq(-1).after(a):this.$userItems.eq(e).before(a);this.setVars()},removeItem:function(a){if(0===this.$elem.children().length)return!1;a=void 0===a||-1===a?-1:a;this.unWrap();this.$userItems.eq(a).remove();this.setVars()}};f.fn.owlCarousel=function(a){return this.each(function(){if(!0===
f(this).data("owl-init"))return!1;f(this).data("owl-init",!0);var b=Object.create(l);b.init(a,this);f.data(this,"owlCarousel",b)})};f.fn.owlCarousel.options={items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1E3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,
responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:g,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,jsonPath:!1,jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,addClassActive:!1,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1}})(jQuery,window,document);
/*

 arcticModal — jQuery plugin
 Version: 0.3
 Author: Sergey Predvoditelev (sergey.predvoditelev@gmail.com)
 Company: Arctic Laboratory (http://arcticlab.ru/)

 Docs & Examples: http://arcticlab.ru/arcticmodal/

 */
(function($) {


	var default_options = {

		type: 'html', // ajax или html
		content: '',
		url: '',
		ajax: {},
		ajax_request: null,

		closeOnEsc: true,
		closeOnOverlayClick: true,

		clone: false,

		overlay: {
			block: undefined,
			tpl: '<div class="arcticmodal-overlay"></div>',
			css: {
				backgroundColor: '#000',
				opacity: .6
			}
		},

		container: {
			block: undefined,
			tpl: '<div class="arcticmodal-container"><table class="arcticmodal-container_i"><tr><td class="arcticmodal-container_i2"></td></tr></table></div>'
		},

		wrap: undefined,
		body: undefined,

		errors: {
			tpl: '<div class="arcticmodal-error arcticmodal-close"></div>',
			autoclose_delay: 2000,
			ajax_unsuccessful_load: 'Error'
		},

		openEffect: {
			type: 'fade',
			speed: 400
		},
		closeEffect: {
			type: 'fade',
			speed: 400
		},

		beforeOpen: $.noop,
		afterOpen: $.noop,
		beforeClose: $.noop,
		afterClose: $.noop,
		afterLoading: $.noop,
		afterLoadingOnShow: $.noop,
		errorLoading: $.noop

	};


	var modalID = 0;
	var modals = $([]);


	var utils = {


		// Определяет произошло ли событие e вне блока block
		isEventOut: function(blocks, e) {
			var r = true;
			$(blocks).each(function() {
				if ($(e.target).get(0)==$(this).get(0)) r = false;
				if ($(e.target).closest('HTML', $(this).get(0)).length==0) r = false;
			});
			return r;
		}


	};


	var modal = {


		// Возвращает элемент, которым был вызван плагин
		getParentEl: function(el) {
			var r = $(el);
			if (r.data('arcticmodal')) return r;
			r = $(el).closest('.arcticmodal-container').data('arcticmodalParentEl');
			if (r) return r;
			return false;
		},


		// Переход
		transition: function(el, action, options, callback) {
			callback = callback==undefined ? $.noop : callback;
			switch (options.type) {
				case 'fade':
					action=='show' ? el.fadeIn(options.speed, callback) : el.fadeOut(options.speed, callback);
					break;
				case 'none':
					action=='show' ? el.show() : el.hide();
					callback();
					break;
			}
		},


		// Подготвка содержимого окна
		prepare_body: function(D, $this) {

			// Обработчик закрытия
			$('.arcticmodal-close', D.body).unbind('click.arcticmodal').bind('click.arcticmodal', function() {
				$this.arcticmodal('close');
				return false;
			});

		},


		// Инициализация элемента
		init_el: function($this, options) {
			var D = $this.data('arcticmodal');
			if (D) return;

			D = options;
			modalID++;
			D.modalID = modalID;

			// Overlay
			D.overlay.block = $(D.overlay.tpl);
			D.overlay.block.css(D.overlay.css);

			// Container
			D.container.block = $(D.container.tpl);

			// BODY
			D.body = $('.arcticmodal-container_i2', D.container.block);
			if (options.clone) {
				D.body.html($this.clone(true));
			} else {
				$this.before('<div id="arcticmodalReserve' + D.modalID + '" style="display: none" />');
				D.body.html($this);
			}

			// Подготовка содержимого
			modal.prepare_body(D, $this);

			// Закрытие при клике на overlay
			if (D.closeOnOverlayClick)
				D.overlay.block.add(D.container.block).click(function(e) {
					if (utils.isEventOut($('>*', D.body), e))
						$this.arcticmodal('close');
				});

			// Запомним настройки
			D.container.block.data('arcticmodalParentEl', $this);
			$this.data('arcticmodal', D);
			modals = $.merge(modals, $this);

			// Показать
			$.proxy(actions.show, $this)();
			if (D.type=='html') return $this;

			// Ajax-загрузка
			if (D.ajax.beforeSend!=undefined) {
				var fn_beforeSend = D.ajax.beforeSend;
				delete D.ajax.beforeSend;
			}
			if (D.ajax.success!=undefined) {
				var fn_success = D.ajax.success;
				delete D.ajax.success;
			}
			if (D.ajax.error!=undefined) {
				var fn_error = D.ajax.error;
				delete D.ajax.error;
			}
			var o = $.extend(true, {
				url: D.url,
				beforeSend: function() {
					if (fn_beforeSend==undefined) {
						D.body.html('<div class="arcticmodal-loading" />');
					} else {
						fn_beforeSend(D, $this);
					}
				},
				success: function(responce) {

					// Событие после загрузки до показа содержимого
					$this.trigger('afterLoading');
					D.afterLoading(D, $this, responce);

					if (fn_success==undefined) {
						D.body.html(responce);
					} else {
						fn_success(D, $this, responce);
					}
					modal.prepare_body(D, $this);

					// Событие после загрузки после отображения содержимого
					$this.trigger('afterLoadingOnShow');
					D.afterLoadingOnShow(D, $this, responce);

				},
				error: function() {

					// Событие при ошибке загрузки
					$this.trigger('errorLoading');
					D.errorLoading(D, $this);

					if (fn_error==undefined) {
						D.body.html(D.errors.tpl);
						$('.arcticmodal-error', D.body).html(D.errors.ajax_unsuccessful_load);
						$('.arcticmodal-close', D.body).click(function() {
							$this.arcticmodal('close');
							return false;
						});
						if (D.errors.autoclose_delay)
							setTimeout(function() {
								$this.arcticmodal('close');
							}, D.errors.autoclose_delay);
					} else {
						fn_error(D, $this);
					}
				}
			}, D.ajax);
			D.ajax_request = $.ajax(o);

			// Запомнить настройки
			$this.data('arcticmodal', D);

		},


		// Инициализация
		init: function(options) {
			options = $.extend(true, {}, default_options, options);
			if ($.isFunction(this)) {
				if (options==undefined) {
					$.error('jquery.arcticmodal: Uncorrect parameters');
					return;
				}
				if (options.type=='') {
					$.error('jquery.arcticmodal: Don\'t set parameter "type"');
					return;
				}
				switch (options.type) {
					case 'html':
						if (options.content=='') {
							$.error('jquery.arcticmodal: Don\'t set parameter "content"');
							return
						}
						var c = options.content;
						options.content = '';

						return modal.init_el($(c), options);
						break;
					case 'ajax':
						if (options.url=='') {
							$.error('jquery.arcticmodal: Don\'t set parameter "url"');
							return;
						}
						return modal.init_el($('<div />'), options);
						break;
				}
			} else {
				return this.each(function() {
					modal.init_el($(this), $.extend(true, {}, options));
				});
			}
		}


	};


	var actions = {


		// Показать
		show: function() {
			var $this = modal.getParentEl(this);
			if ($this===false) {
				$.error('jquery.arcticmodal: Uncorrect call');
				return;
			}
			var D = $this.data('arcticmodal');

			// Добавить overlay и container
			D.overlay.block.hide();
			D.container.block.hide();
			$('BODY').append(D.overlay.block);
			$('BODY').append(D.container.block);

			// Событие
			D.beforeOpen(D, $this);
			$this.trigger('beforeOpen');

			// Wrap
			if (D.wrap.css('overflow')!='hidden') {
				D.wrap.data('arcticmodalOverflow', D.wrap.css('overflow'));
				var w1 = D.wrap.outerWidth(true);
				D.wrap.css('overflow', 'hidden');
				var w2 = D.wrap.outerWidth(true);
				if (w2!=w1)
					D.wrap.css('marginRight', (w2 - w1) + 'px');
			}

			// Скрыть предыдущие оверлеи
			modals.not($this).each(function() {
				var d = $(this).data('arcticmodal');
				d.overlay.block.hide();
			});

			// Показать
			modal.transition(D.overlay.block, 'show', modals.length>1 ? {type: 'none'} : D.openEffect);
			modal.transition(D.container.block, 'show', modals.length>1 ? {type: 'none'} : D.openEffect, function() {
				D.afterOpen(D, $this);
				$this.trigger('afterOpen');
			});

			return $this;
		},


		// Закрыть
		close: function() {
			if ($.isFunction(this)) {
				modals.each(function() {
					$(this).arcticmodal('close');
				});
			} else {
				return this.each(function() {
					var $this = modal.getParentEl(this);
					if ($this===false) {
						$.error('jquery.arcticmodal: Uncorrect call');
						return;
					}
					var D = $this.data('arcticmodal');

					// Событие перед закрытием
					if (D.beforeClose(D, $this)===false) return;
					$this.trigger('beforeClose');

					// Показать предыдущие оверлеи
					modals.not($this).last().each(function() {
						var d = $(this).data('arcticmodal');
						d.overlay.block.show();
					});

					modal.transition(D.overlay.block, 'hide', modals.length>1 ? {type: 'none'} : D.closeEffect);
					modal.transition(D.container.block, 'hide', modals.length>1 ? {type: 'none'} : D.closeEffect, function() {

						// Событие после закрытия
						D.afterClose(D, $this);
						$this.trigger('afterClose');

						// Если не клонировали - вернём на место
						if (!D.clone)
							$('#arcticmodalReserve' + D.modalID).replaceWith(D.body.find('>*'));

						D.overlay.block.remove();
						D.container.block.remove();
						$this.data('arcticmodal', null);
						if (!$('.arcticmodal-container').length) {
							if (D.wrap.data('arcticmodalOverflow'))
								D.wrap.css('overflow', D.wrap.data('arcticmodalOverflow'));
							D.wrap.css('marginRight', 0);
						}

					});

					if (D.type=='ajax')
						D.ajax_request.abort();

					modals = modals.not($this);
				});
			}
		},


		// Установить опции по-умолчанию
		setDefault: function(options) {
			$.extend(true, default_options, options);
		}


	};


	$(function() {
		default_options.wrap = $((document.all && !document.querySelector) ? 'html' : 'body');
	});


	// Закрытие при нажатии Escape
	$(document).bind('keyup.arcticmodal', function(e) {
		var m = modals.last();
		if (!m.length) return;
		var D = m.data('arcticmodal');
		if (D.closeOnEsc && (e.keyCode===27))
			m.arcticmodal('close');
	});


	$.arcticmodal = $.fn.arcticmodal = function(method) {

		if (actions[method]) {
			return actions[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method==='object' || !method) {
			return modal.init.apply(this, arguments);
		} else {
			$.error('jquery.arcticmodal: Method ' + method + ' does not exist');
		}

	};


})(jQuery);
/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.9
 *
 * Requires: jQuery 1.2.2+
 */

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
            ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ($.event.fixHooks) {
        for (var i = toFix.length; i;) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.9',

        setup: function () {
            if (this.addEventListener) {
                for (var i = toBind.length; i;) {
                    this.addEventListener(toBind[--i], handler, false);
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function () {
            if (this.removeEventListener) {
                for (var i = toBind.length; i;) {
                    this.removeEventListener(toBind[--i], handler, false);
                }
            } else {
                this.onmousewheel = null;
            }
        },

        getLineHeight: function (elem) {
            return parseInt($(elem)['offsetParent' in $.fn ? 'offsetParent' : 'parent']().css('fontSize'), 10);
        },

        getPageHeight: function (elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true
        }
    };

    $.fn.extend({
        mousewheel: function (fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function (fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent = event || window.event,
            args = slice.call(arguments, 1),
            delta = 0,
            deltaX = 0,
            deltaY = 0,
            absDelta = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ('detail'      in orgEvent) {
            deltaY = orgEvent.detail * -1;
        }
        if ('wheelDelta'  in orgEvent) {
            deltaY = orgEvent.wheelDelta;
        }
        if ('wheelDeltaY' in orgEvent) {
            deltaY = orgEvent.wheelDeltaY;
        }
        if ('wheelDeltaX' in orgEvent) {
            deltaX = orgEvent.wheelDeltaX * -1;
        }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ('axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ('deltaY' in orgEvent) {
            deltaY = orgEvent.deltaY * -1;
            delta = deltaY;
        }
        if ('deltaX' in orgEvent) {
            deltaX = orgEvent.deltaX;
            if (deltaY === 0) {
                delta = deltaX * -1;
            }
        }

        // No change actually happened, no reason to go any further
        if (deltaY === 0 && deltaX === 0) {
            return;
        }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if (orgEvent.deltaMode === 1) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if (orgEvent.deltaMode === 2) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX));

        if (!lowestDelta || absDelta < lowestDelta) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
            // Divide all the things by 40!
            delta /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta = Math[ delta >= 1 ? 'floor' : 'ceil' ](delta / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) {
            clearTimeout(nullLowestDeltaTimeout);
        }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));

/**
 * Created by vitaly on 12.03.2016.
 */
;(function() {
        $(".slider").owlCarousel({
                navigation: false,
                slideSpeed: 300,
                paginationSpeed: 400,
                singleItem: true,
                rewindNav: true,
                responsive: true,
                responsiveRefreshRate: 200,
                responsiveBaseWidth: window
        });
})();




var $master = $("#wrapper"),
    $hcm = $(".headerWrapMobile"),
    $slideMenu = $("#slideMenu"),
    $nano = $('.nano'),
    $header = $(".header"),
    $headerHelper = $(".headerHelper");


function Height_header(hh, h){
    var $header_height = hh.outerHeight();
    h.css({
        "height" : $header_height
    });
    hh.css({
        "position" : "fixed",
        "top" : 0,
        "left" : 0,
        "width" : "100%",
        "z-index" : 2
    });
}Height_header($header, $headerHelper);


    // nanoScroller
    $nano.nanoScroller({
        preventPageScrolling: true,
        alwaysVisible: false,
        iOSNativeScrolling: true
    });
    $('.slideMenuClose').on('click', function () {
        $hcm.removeClass('active');
        $master.removeClass('slided');
        $slideMenu.removeClass('slided');
        return false;
    });
    $hcm.on('click', function () {
        $hcm.toggleClass("active");
        $master.toggleClass("slided");
        $slideMenu.toggleClass("slided");
        return false;
    });


$(window).resize(function(){
    Height_header($header, $headerHelper);
});

var feedbackModule = function feedbackModule() {
    function validateFeedbackForm(fields) {
        var hasError = false;
        var errorMessages = {
            required: 'is required',
            phone: 'invalid phone number. Format is +XX XXXX XXXX',
            email: 'is mandatory field'
        };

        var validationRules = {
            required: function(val) {
                return !!val;
            },
            phone: function(val) {
                return /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(val);
            },
            email: function(val) {
                return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(val);
            }
        };

        function validate(field) {
            for(var i = 0, j = field.validations.length; i < j; i++) {
                if(!validationRules[field.validations[i]](field.$el.val())) {
                    hasError = true;
                    field.$el.val(field.name + ' ' + errorMessages[field.validations[i]]);
                    field.$el.addClass('error');
                    return;
                } else {
                    field.$el.removeClass('error');
                }
            }
        }

        fields.forEach(function(field) {
            validate(field);
        });

        return hasError;

    }

    $('#feedback').on("click" ,function() {
        var c = $('<div class="box-modal" />');
        c.html($('.b-text').html());
        c.prepend('<div class="box-modal_close arcticmodal-close">закрыть</div>');
        $.arcticmodal({
            content: c
        });
    });

    $(document).on('click', '.arcticmodal-container #button', function() {
        var fields = [
            {
                name: 'name',
                $el: $('.arcticmodal-container #name'),
                validations: ['required']
            },
            {
                name: 'phone',
                $el: $('.arcticmodal-container #phone'),
                validations: ['required', 'phone']
            },
            {
                name: 'email',
                $el: $('.arcticmodal-container #email'),
                validations: ['required', 'email']
            }
        ];
        var error = validateFeedbackForm(fields);
        console.log('Form has error ' + error);
        return error;
    });
};
feedbackModule();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9cInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qISBvdmVydGhyb3cgLSBBbiBvdmVyZmxvdzphdXRvIHBvbHlmaWxsIGZvciByZXNwb25zaXZlIGRlc2lnbi4gLSB2MC43LjAgLSAyMDEzLTExLTA0XHJcbiAqIENvcHlyaWdodCAoYykgMjAxMyBTY290dCBKZWhsLCBGaWxhbWVudCBHcm91cCwgSW5jLjsgTGljZW5zZWQgTUlUICovXHJcbiFmdW5jdGlvbiAoYSkge1xyXG4gICAgdmFyIGIgPSBhLmRvY3VtZW50LCBjID0gYi5kb2N1bWVudEVsZW1lbnQsIGQgPSBcIm92ZXJ0aHJvdy1lbmFibGVkXCIsIGUgPSBcIm9udG91Y2htb3ZlXCJpbiBiLCBmID0gXCJXZWJraXRPdmVyZmxvd1Njcm9sbGluZ1wiaW4gYy5zdHlsZSB8fCBcIm1zT3ZlcmZsb3dTdHlsZVwiaW4gYy5zdHlsZSB8fCAhZSAmJiBhLnNjcmVlbi53aWR0aCA+IDgwMCB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGIgPSBhLm5hdmlnYXRvci51c2VyQWdlbnQsIGMgPSBiLm1hdGNoKC9BcHBsZVdlYktpdFxcLyhbMC05XSspLyksIGQgPSBjICYmIGNbMV0sIGUgPSBjICYmIGQgPj0gNTM0O1xyXG4gICAgICAgIHJldHVybiBiLm1hdGNoKC9BbmRyb2lkIChbMC05XSspLykgJiYgUmVnRXhwLiQxID49IDMgJiYgZSB8fCBiLm1hdGNoKC8gVmVyc2lvblxcLyhbMC05XSspLykgJiYgUmVnRXhwLiQxID49IDAgJiYgYS5ibGFja2JlcnJ5ICYmIGUgfHwgYi5pbmRleE9mKFwiUGxheUJvb2tcIikgPiAtMSAmJiBlICYmIC0xID09PSAhYi5pbmRleE9mKFwiQW5kcm9pZCAyXCIpIHx8IGIubWF0Y2goL0ZpcmVmb3hcXC8oWzAtOV0rKS8pICYmIFJlZ0V4cC4kMSA+PSA0IHx8IGIubWF0Y2goL3dPU0Jyb3dzZXJcXC8oWzAtOV0rKS8pICYmIFJlZ0V4cC4kMSA+PSAyMzMgJiYgZSB8fCBiLm1hdGNoKC9Ob2tpYUJyb3dzZXJcXC8oWzAtOVxcLl0rKS8pICYmIDcuMyA9PT0gcGFyc2VGbG9hdChSZWdFeHAuJDEpICYmIGMgJiYgZCA+PSA1MzNcclxuICAgIH0oKTtcclxuICAgIGEub3ZlcnRocm93ID0ge30sIGEub3ZlcnRocm93LmVuYWJsZWRDbGFzc05hbWUgPSBkLCBhLm92ZXJ0aHJvdy5hZGRDbGFzcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAtMSA9PT0gYy5jbGFzc05hbWUuaW5kZXhPZihhLm92ZXJ0aHJvdy5lbmFibGVkQ2xhc3NOYW1lKSAmJiAoYy5jbGFzc05hbWUgKz0gXCIgXCIgKyBhLm92ZXJ0aHJvdy5lbmFibGVkQ2xhc3NOYW1lKVxyXG4gICAgfSwgYS5vdmVydGhyb3cucmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgYy5jbGFzc05hbWUgPSBjLmNsYXNzTmFtZS5yZXBsYWNlKGEub3ZlcnRocm93LmVuYWJsZWRDbGFzc05hbWUsIFwiXCIpXHJcbiAgICB9LCBhLm92ZXJ0aHJvdy5zZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZiAmJiBhLm92ZXJ0aHJvdy5hZGRDbGFzcygpXHJcbiAgICB9LCBhLm92ZXJ0aHJvdy5jYW5CZUZpbGxlZFdpdGhQb2x5ID0gZSwgYS5vdmVydGhyb3cuZm9yZ2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGEub3ZlcnRocm93LnJlbW92ZUNsYXNzKClcclxuICAgIH0sIGEub3ZlcnRocm93LnN1cHBvcnQgPSBmID8gXCJuYXRpdmVcIiA6IFwibm9uZVwiXHJcbn0odGhpcyksIGZ1bmN0aW9uIChhLCBiLCBjKSB7XHJcbiAgICBpZiAoYiAhPT0gYykge1xyXG4gICAgICAgIGIuZWFzaW5nID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGMgKiAoKGEgPSBhIC8gZCAtIDEpICogYSAqIGEgKyAxKSArIGJcclxuICAgICAgICB9LCBiLnRvc3NpbmcgPSAhMTtcclxuICAgICAgICB2YXIgZDtcclxuICAgICAgICBiLnRvc3MgPSBmdW5jdGlvbiAoYSwgZSkge1xyXG4gICAgICAgICAgICBiLmludGVyY2VwdCgpO1xyXG4gICAgICAgICAgICB2YXIgZiwgZywgaCA9IDAsIGkgPSBhLnNjcm9sbExlZnQsIGogPSBhLnNjcm9sbFRvcCwgayA9IHt0b3A6IFwiKzBcIiwgbGVmdDogXCIrMFwiLCBkdXJhdGlvbjogNTAsIGVhc2luZzogYi5lYXNpbmcsIGZpbmlzaGVkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIH19LCBsID0gITE7XHJcbiAgICAgICAgICAgIGlmIChlKWZvciAodmFyIG0gaW4gayllW21dICE9PSBjICYmIChrW21dID0gZVttXSk7XHJcbiAgICAgICAgICAgIHJldHVyblwic3RyaW5nXCIgPT0gdHlwZW9mIGsubGVmdCA/IChrLmxlZnQgPSBwYXJzZUZsb2F0KGsubGVmdCksIGYgPSBrLmxlZnQgKyBpKSA6IChmID0gay5sZWZ0LCBrLmxlZnQgPSBrLmxlZnQgLSBpKSwgXCJzdHJpbmdcIiA9PSB0eXBlb2Ygay50b3AgPyAoay50b3AgPSBwYXJzZUZsb2F0KGsudG9wKSwgZyA9IGsudG9wICsgaikgOiAoZyA9IGsudG9wLCBrLnRvcCA9IGsudG9wIC0gaiksIGIudG9zc2luZyA9ICEwLCBkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaCsrIDwgay5kdXJhdGlvbiA/IChhLnNjcm9sbExlZnQgPSBrLmVhc2luZyhoLCBpLCBrLmxlZnQsIGsuZHVyYXRpb24pLCBhLnNjcm9sbFRvcCA9IGsuZWFzaW5nKGgsIGosIGsudG9wLCBrLmR1cmF0aW9uKSkgOiAoZiAhPT0gYS5zY3JvbGxMZWZ0ID8gYS5zY3JvbGxMZWZ0ID0gZiA6IChsICYmIGsuZmluaXNoZWQoKSwgbCA9ICEwKSwgZyAhPT0gYS5zY3JvbGxUb3AgPyBhLnNjcm9sbFRvcCA9IGcgOiAobCAmJiBrLmZpbmlzaGVkKCksIGwgPSAhMCksIGIuaW50ZXJjZXB0KCkpXHJcbiAgICAgICAgICAgIH0sIDEpLCB7dG9wOiBnLCBsZWZ0OiBmLCBkdXJhdGlvbjogYi5kdXJhdGlvbiwgZWFzaW5nOiBiLmVhc2luZ31cclxuICAgICAgICB9LCBiLmludGVyY2VwdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChkKSwgYi50b3NzaW5nID0gITFcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0odGhpcywgdGhpcy5vdmVydGhyb3cpLCBmdW5jdGlvbiAoYSwgYiwgYykge1xyXG4gICAgaWYgKGIgIT09IGMpIHtcclxuICAgICAgICBiLnNjcm9sbEluZGljYXRvckNsYXNzTmFtZSA9IFwib3ZlcnRocm93XCI7XHJcbiAgICAgICAgdmFyIGQgPSBhLmRvY3VtZW50LCBlID0gZC5kb2N1bWVudEVsZW1lbnQsIGYgPSBcIm5hdGl2ZVwiID09PSBiLnN1cHBvcnQsIGcgPSBiLmNhbkJlRmlsbGVkV2l0aFBvbHksIGggPSAoYi5jb25maWd1cmUsIGIuc2V0KSwgaSA9IGIuZm9yZ2V0LCBqID0gYi5zY3JvbGxJbmRpY2F0b3JDbGFzc05hbWU7XHJcbiAgICAgICAgYi5jbG9zZXN0ID0gZnVuY3Rpb24gKGEsIGMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIWMgJiYgYS5jbGFzc05hbWUgJiYgYS5jbGFzc05hbWUuaW5kZXhPZihqKSA+IC0xICYmIGEgfHwgYi5jbG9zZXN0KGEucGFyZW50Tm9kZSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBrID0gITE7XHJcbiAgICAgICAgYi5zZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChoKCksICFrICYmICFmICYmIGcpIHtcclxuICAgICAgICAgICAgICAgIGEub3ZlcnRocm93LmFkZENsYXNzKCksIGsgPSAhMCwgYi5zdXBwb3J0ID0gXCJwb2x5ZmlsbGVkXCIsIGIuZm9yZ2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGkoKSwgayA9ICExLCBkLnJlbW92ZUV2ZW50TGlzdGVuZXIgJiYgZC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB1LCAhMSlcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB2YXIgaiwgbCwgbSwgbiwgbyA9IFtdLCBwID0gW10sIHEgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbyA9IFtdLCBsID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgfSwgciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBwID0gW10sIG0gPSBudWxsXHJcbiAgICAgICAgICAgICAgICB9LCBzID0gZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBuID0gai5xdWVyeVNlbGVjdG9yQWxsKFwidGV4dGFyZWEsIGlucHV0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGIgPSAwLCBjID0gbi5sZW5ndGg7IGMgPiBiOyBiKyspbltiXS5zdHlsZS5wb2ludGVyRXZlbnRzID0gYVxyXG4gICAgICAgICAgICAgICAgfSwgdCA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQuY3JlYXRlRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGUsIGYgPSAoIWIgfHwgYiA9PT0gYykgJiYgai5wYXJlbnROb2RlIHx8IGoudG91Y2hjaGlsZCB8fCBqO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmICE9PSBqICYmIChlID0gZC5jcmVhdGVFdmVudChcIkhUTUxFdmVudHNcIiksIGUuaW5pdEV2ZW50KFwidG91Y2hlbmRcIiwgITAsICEwKSwgai5kaXNwYXRjaEV2ZW50KGUpLCBmLnRvdWNoY2hpbGQgPSBqLCBqID0gZiwgZi5kaXNwYXRjaEV2ZW50KGEpKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIHUgPSBmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChiLmludGVyY2VwdCAmJiBiLmludGVyY2VwdCgpLCBxKCksIHIoKSwgaiA9IGIuY2xvc2VzdChhLnRhcmdldCksIGogJiYgaiAhPT0gZSAmJiAhKGEudG91Y2hlcy5sZW5ndGggPiAxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzKFwibm9uZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBhLCBkID0gai5zY3JvbGxUb3AsIGYgPSBqLnNjcm9sbExlZnQsIGcgPSBqLm9mZnNldEhlaWdodCwgaCA9IGoub2Zmc2V0V2lkdGgsIGkgPSBhLnRvdWNoZXNbMF0ucGFnZVksIGsgPSBhLnRvdWNoZXNbMF0ucGFnZVgsIG4gPSBqLnNjcm9sbEhlaWdodCwgdSA9IGouc2Nyb2xsV2lkdGgsIHYgPSBmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGIgPSBkICsgaSAtIGEudG91Y2hlc1swXS5wYWdlWSwgZSA9IGYgKyBrIC0gYS50b3VjaGVzWzBdLnBhZ2VYLCBzID0gYiA+PSAoby5sZW5ndGggPyBvWzBdIDogMCksIHYgPSBlID49IChwLmxlbmd0aCA/IHBbMF0gOiAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIgPiAwICYmIG4gLSBnID4gYiB8fCBlID4gMCAmJiB1IC0gaCA+IGUgPyBhLnByZXZlbnREZWZhdWx0KCkgOiB0KGMpLCBsICYmIHMgIT09IGwgJiYgcSgpLCBtICYmIHYgIT09IG0gJiYgcigpLCBsID0gcywgbSA9IHYsIGouc2Nyb2xsVG9wID0gYiwgai5zY3JvbGxMZWZ0ID0gZSwgby51bnNoaWZ0KGIpLCBwLnVuc2hpZnQoZSksIG8ubGVuZ3RoID4gMyAmJiBvLnBvcCgpLCBwLmxlbmd0aCA+IDMgJiYgcC5wb3AoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB3ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcyhcImF1dG9cIiksIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMoXCJub25lXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCA0NTApLCBqLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdiwgITEpLCBqLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB3LCAhMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgai5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHYsICExKSwgai5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdywgITEpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdSwgITEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0odGhpcywgdGhpcy5vdmVydGhyb3cpLCBmdW5jdGlvbiAoYSkge1xyXG4gICAgYS5vdmVydGhyb3cuc2V0KClcclxufSh0aGlzKTtcclxuLyohIG5hbm9TY3JvbGxlckpTIC0gdjAuOC4xIC0gMjAxNFxyXG4gKiBodHRwOi8vamFtZXNmbG9yZW50aW5vLmdpdGh1Yi5jb20vbmFub1Njcm9sbGVySlMvXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNCBKYW1lcyBGbG9yZW50aW5vOyBMaWNlbnNlZCBNSVQgKi9cclxuKGZ1bmN0aW9uICgkLCB3aW5kb3csIGRvY3VtZW50KSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHZhciBCUk9XU0VSX0lTX0lFNywgQlJPV1NFUl9TQ1JPTExCQVJfV0lEVEgsIERPTVNDUk9MTCwgRE9XTiwgRFJBRywgRU5URVIsIEtFWURPV04sIEtFWVVQLCBNT1VTRURPV04sIE1PVVNFRU5URVIsIE1PVVNFTU9WRSwgTU9VU0VVUCwgTU9VU0VXSEVFTCwgTmFub1Njcm9sbCwgUEFORURPV04sIFJFU0laRSwgU0NST0xMLCBTQ1JPTExCQVIsIFRPVUNITU9WRSwgVVAsIFdIRUVMLCBjQUYsIGRlZmF1bHRzLCBnZXRCcm93c2VyU2Nyb2xsYmFyV2lkdGgsIGhhc1RyYW5zZm9ybSwgaXNGRldpdGhCdWdneVNjcm9sbGJhciwgckFGLCB0cmFuc2Zvcm0sIF9lbGVtZW50U3R5bGUsIF9wcmVmaXhTdHlsZSwgX3ZlbmRvcjtcclxuICAgIGRlZmF1bHRzID0ge1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgYSBjbGFzc25hbWUgZm9yIHRoZSBwYW5lIGVsZW1lbnQuXHJcbiAgICAgICAgIEBwcm9wZXJ0eSBwYW5lQ2xhc3NcclxuICAgICAgICAgQHR5cGUgU3RyaW5nXHJcbiAgICAgICAgIEBkZWZhdWx0ICduYW5vLXBhbmUnXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcGFuZUNsYXNzOiAnbmFuby1wYW5lJyxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgIGEgY2xhc3NuYW1lIGZvciB0aGUgc2xpZGVyIGVsZW1lbnQuXHJcbiAgICAgICAgIEBwcm9wZXJ0eSBzbGlkZXJDbGFzc1xyXG4gICAgICAgICBAdHlwZSBTdHJpbmdcclxuICAgICAgICAgQGRlZmF1bHQgJ25hbm8tc2xpZGVyJ1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNsaWRlckNsYXNzOiAnbmFuby1zbGlkZXInLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgYSBjbGFzc25hbWUgZm9yIHRoZSBjb250ZW50IGVsZW1lbnQuXHJcbiAgICAgICAgIEBwcm9wZXJ0eSBjb250ZW50Q2xhc3NcclxuICAgICAgICAgQHR5cGUgU3RyaW5nXHJcbiAgICAgICAgIEBkZWZhdWx0ICduYW5vLWNvbnRlbnQnXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29udGVudENsYXNzOiAnbmFuby1jb250ZW50JyxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgIGEgc2V0dGluZyB0byBlbmFibGUgbmF0aXZlIHNjcm9sbGluZyBpbiBpT1MgZGV2aWNlcy5cclxuICAgICAgICAgQHByb3BlcnR5IGlPU05hdGl2ZVNjcm9sbGluZ1xyXG4gICAgICAgICBAdHlwZSBCb29sZWFuXHJcbiAgICAgICAgIEBkZWZhdWx0IGZhbHNlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaU9TTmF0aXZlU2Nyb2xsaW5nOiBmYWxzZSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgIGEgc2V0dGluZyB0byBwcmV2ZW50IHRoZSByZXN0IG9mIHRoZSBwYWdlIGJlaW5nXHJcbiAgICAgICAgIHNjcm9sbGVkIHdoZW4gdXNlciBzY3JvbGxzIHRoZSBgLmNvbnRlbnRgIGVsZW1lbnQuXHJcbiAgICAgICAgIEBwcm9wZXJ0eSBwcmV2ZW50UGFnZVNjcm9sbGluZ1xyXG4gICAgICAgICBAdHlwZSBCb29sZWFuXHJcbiAgICAgICAgIEBkZWZhdWx0IGZhbHNlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJldmVudFBhZ2VTY3JvbGxpbmc6IGZhbHNlLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgYSBzZXR0aW5nIHRvIGRpc2FibGUgYmluZGluZyB0byB0aGUgcmVzaXplIGV2ZW50LlxyXG4gICAgICAgICBAcHJvcGVydHkgZGlzYWJsZVJlc2l6ZVxyXG4gICAgICAgICBAdHlwZSBCb29sZWFuXHJcbiAgICAgICAgIEBkZWZhdWx0IGZhbHNlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZGlzYWJsZVJlc2l6ZTogZmFsc2UsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICBhIHNldHRpbmcgdG8gbWFrZSB0aGUgc2Nyb2xsYmFyIGFsd2F5cyB2aXNpYmxlLlxyXG4gICAgICAgICBAcHJvcGVydHkgYWx3YXlzVmlzaWJsZVxyXG4gICAgICAgICBAdHlwZSBCb29sZWFuXHJcbiAgICAgICAgIEBkZWZhdWx0IGZhbHNlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgYWx3YXlzVmlzaWJsZTogZmFsc2UsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICBhIGRlZmF1bHQgdGltZW91dCBmb3IgdGhlIGBmbGFzaCgpYCBtZXRob2QuXHJcbiAgICAgICAgIEBwcm9wZXJ0eSBmbGFzaERlbGF5XHJcbiAgICAgICAgIEB0eXBlIE51bWJlclxyXG4gICAgICAgICBAZGVmYXVsdCAxNTAwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZmxhc2hEZWxheTogMTUwMCxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgIGEgbWluaW11bSBoZWlnaHQgZm9yIHRoZSBgLnNsaWRlcmAgZWxlbWVudC5cclxuICAgICAgICAgQHByb3BlcnR5IHNsaWRlck1pbkhlaWdodFxyXG4gICAgICAgICBAdHlwZSBOdW1iZXJcclxuICAgICAgICAgQGRlZmF1bHQgMjBcclxuICAgICAgICAgKi9cclxuICAgICAgICBzbGlkZXJNaW5IZWlnaHQ6IDIwLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgYSBtYXhpbXVtIGhlaWdodCBmb3IgdGhlIGAuc2xpZGVyYCBlbGVtZW50LlxyXG4gICAgICAgICBAcHJvcGVydHkgc2xpZGVyTWF4SGVpZ2h0XHJcbiAgICAgICAgIEB0eXBlIE51bWJlclxyXG4gICAgICAgICBAZGVmYXVsdCBudWxsXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2xpZGVyTWF4SGVpZ2h0OiBudWxsLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgYW4gYWx0ZXJuYXRlIGRvY3VtZW50IGNvbnRleHQuXHJcbiAgICAgICAgIEBwcm9wZXJ0eSBkb2N1bWVudENvbnRleHRcclxuICAgICAgICAgQHR5cGUgRG9jdW1lbnRcclxuICAgICAgICAgQGRlZmF1bHQgbnVsbFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGRvY3VtZW50Q29udGV4dDogbnVsbCxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgIGFuIGFsdGVybmF0ZSB3aW5kb3cgY29udGV4dC5cclxuICAgICAgICAgQHByb3BlcnR5IHdpbmRvd0NvbnRleHRcclxuICAgICAgICAgQHR5cGUgV2luZG93XHJcbiAgICAgICAgIEBkZWZhdWx0IG51bGxcclxuICAgICAgICAgKi9cclxuICAgICAgICB3aW5kb3dDb250ZXh0OiBudWxsXHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgIEBwcm9wZXJ0eSBTQ1JPTExCQVJcclxuICAgICBAdHlwZSBTdHJpbmdcclxuICAgICBAc3RhdGljXHJcbiAgICAgQGZpbmFsXHJcbiAgICAgQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgU0NST0xMQkFSID0gJ3Njcm9sbGJhcic7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgQHByb3BlcnR5IFNDUk9MTFxyXG4gICAgIEB0eXBlIFN0cmluZ1xyXG4gICAgIEBzdGF0aWNcclxuICAgICBAZmluYWxcclxuICAgICBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBTQ1JPTEwgPSAnc2Nyb2xsJztcclxuXHJcbiAgICAvKipcclxuICAgICBAcHJvcGVydHkgTU9VU0VET1dOXHJcbiAgICAgQHR5cGUgU3RyaW5nXHJcbiAgICAgQGZpbmFsXHJcbiAgICAgQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgTU9VU0VET1dOID0gJ21vdXNlZG93bic7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgQHByb3BlcnR5IE1PVVNFRU5URVJcclxuICAgICBAdHlwZSBTdHJpbmdcclxuICAgICBAZmluYWxcclxuICAgICBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBNT1VTRUVOVEVSID0gJ21vdXNlZW50ZXInO1xyXG5cclxuICAgIC8qKlxyXG4gICAgIEBwcm9wZXJ0eSBNT1VTRU1PVkVcclxuICAgICBAdHlwZSBTdHJpbmdcclxuICAgICBAc3RhdGljXHJcbiAgICAgQGZpbmFsXHJcbiAgICAgQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgTU9VU0VNT1ZFID0gJ21vdXNlbW92ZSc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgQHByb3BlcnR5IE1PVVNFV0hFRUxcclxuICAgICBAdHlwZSBTdHJpbmdcclxuICAgICBAZmluYWxcclxuICAgICBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBNT1VTRVdIRUVMID0gJ21vdXNld2hlZWwnO1xyXG5cclxuICAgIC8qKlxyXG4gICAgIEBwcm9wZXJ0eSBNT1VTRVVQXHJcbiAgICAgQHR5cGUgU3RyaW5nXHJcbiAgICAgQHN0YXRpY1xyXG4gICAgIEBmaW5hbFxyXG4gICAgIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIE1PVVNFVVAgPSAnbW91c2V1cCc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgQHByb3BlcnR5IFJFU0laRVxyXG4gICAgIEB0eXBlIFN0cmluZ1xyXG4gICAgIEBmaW5hbFxyXG4gICAgIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIFJFU0laRSA9ICdyZXNpemUnO1xyXG5cclxuICAgIC8qKlxyXG4gICAgIEBwcm9wZXJ0eSBEUkFHXHJcbiAgICAgQHR5cGUgU3RyaW5nXHJcbiAgICAgQHN0YXRpY1xyXG4gICAgIEBmaW5hbFxyXG4gICAgIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIERSQUcgPSAnZHJhZyc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgQHByb3BlcnR5IEVOVEVSXHJcbiAgICAgQHR5cGUgU3RyaW5nXHJcbiAgICAgQHN0YXRpY1xyXG4gICAgIEBmaW5hbFxyXG4gICAgIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIEVOVEVSID0gJ2VudGVyJztcclxuXHJcbiAgICAvKipcclxuICAgICBAcHJvcGVydHkgVVBcclxuICAgICBAdHlwZSBTdHJpbmdcclxuICAgICBAc3RhdGljXHJcbiAgICAgQGZpbmFsXHJcbiAgICAgQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgVVAgPSAndXAnO1xyXG5cclxuICAgIC8qKlxyXG4gICAgIEBwcm9wZXJ0eSBQQU5FRE9XTlxyXG4gICAgIEB0eXBlIFN0cmluZ1xyXG4gICAgIEBzdGF0aWNcclxuICAgICBAZmluYWxcclxuICAgICBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBQQU5FRE9XTiA9ICdwYW5lZG93bic7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgQHByb3BlcnR5IERPTVNDUk9MTFxyXG4gICAgIEB0eXBlIFN0cmluZ1xyXG4gICAgIEBzdGF0aWNcclxuICAgICBAZmluYWxcclxuICAgICBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBET01TQ1JPTEwgPSAnRE9NTW91c2VTY3JvbGwnO1xyXG5cclxuICAgIC8qKlxyXG4gICAgIEBwcm9wZXJ0eSBET1dOXHJcbiAgICAgQHR5cGUgU3RyaW5nXHJcbiAgICAgQHN0YXRpY1xyXG4gICAgIEBmaW5hbFxyXG4gICAgIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIERPV04gPSAnZG93bic7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgQHByb3BlcnR5IFdIRUVMXHJcbiAgICAgQHR5cGUgU3RyaW5nXHJcbiAgICAgQHN0YXRpY1xyXG4gICAgIEBmaW5hbFxyXG4gICAgIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIFdIRUVMID0gJ3doZWVsJztcclxuXHJcbiAgICAvKipcclxuICAgICBAcHJvcGVydHkgS0VZRE9XTlxyXG4gICAgIEB0eXBlIFN0cmluZ1xyXG4gICAgIEBzdGF0aWNcclxuICAgICBAZmluYWxcclxuICAgICBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBLRVlET1dOID0gJ2tleWRvd24nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgIEBwcm9wZXJ0eSBLRVlVUFxyXG4gICAgIEB0eXBlIFN0cmluZ1xyXG4gICAgIEBzdGF0aWNcclxuICAgICBAZmluYWxcclxuICAgICBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBLRVlVUCA9ICdrZXl1cCc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgQHByb3BlcnR5IFRPVUNITU9WRVxyXG4gICAgIEB0eXBlIFN0cmluZ1xyXG4gICAgIEBzdGF0aWNcclxuICAgICBAZmluYWxcclxuICAgICBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBUT1VDSE1PVkUgPSAndG91Y2htb3ZlJztcclxuXHJcbiAgICAvKipcclxuICAgICBAcHJvcGVydHkgQlJPV1NFUl9JU19JRTdcclxuICAgICBAdHlwZSBCb29sZWFuXHJcbiAgICAgQHN0YXRpY1xyXG4gICAgIEBmaW5hbFxyXG4gICAgIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIEJST1dTRVJfSVNfSUU3ID0gd2luZG93Lm5hdmlnYXRvci5hcHBOYW1lID09PSAnTWljcm9zb2Z0IEludGVybmV0IEV4cGxvcmVyJyAmJiAvbXNpZSA3Li9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci5hcHBWZXJzaW9uKSAmJiB3aW5kb3cuQWN0aXZlWE9iamVjdDtcclxuXHJcbiAgICAvKipcclxuICAgICBAcHJvcGVydHkgQlJPV1NFUl9TQ1JPTExCQVJfV0lEVEhcclxuICAgICBAdHlwZSBOdW1iZXJcclxuICAgICBAc3RhdGljXHJcbiAgICAgQGRlZmF1bHQgbnVsbFxyXG4gICAgIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIEJST1dTRVJfU0NST0xMQkFSX1dJRFRIID0gbnVsbDtcclxuICAgIHJBRiA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XHJcbiAgICBjQUYgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWU7XHJcbiAgICBfZWxlbWVudFN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jykuc3R5bGU7XHJcbiAgICBfdmVuZG9yID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaSwgdHJhbnNmb3JtLCB2ZW5kb3IsIHZlbmRvcnMsIF9pLCBfbGVuO1xyXG4gICAgICAgIHZlbmRvcnMgPSBbJ3QnLCAnd2Via2l0VCcsICdNb3pUJywgJ21zVCcsICdPVCddO1xyXG4gICAgICAgIGZvciAoaSA9IF9pID0gMCwgX2xlbiA9IHZlbmRvcnMubGVuZ3RoOyBfaSA8IF9sZW47IGkgPSArK19pKSB7XHJcbiAgICAgICAgICAgIHZlbmRvciA9IHZlbmRvcnNbaV07XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybSA9IHZlbmRvcnNbaV0gKyAncmFuc2Zvcm0nO1xyXG4gICAgICAgICAgICBpZiAodHJhbnNmb3JtIGluIF9lbGVtZW50U3R5bGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2ZW5kb3JzW2ldLnN1YnN0cigwLCB2ZW5kb3JzW2ldLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pKCk7XHJcbiAgICBfcHJlZml4U3R5bGUgPSBmdW5jdGlvbiAoc3R5bGUpIHtcclxuICAgICAgICBpZiAoX3ZlbmRvciA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoX3ZlbmRvciA9PT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX3ZlbmRvciArIHN0eWxlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3R5bGUuc3Vic3RyKDEpO1xyXG4gICAgfTtcclxuICAgIHRyYW5zZm9ybSA9IF9wcmVmaXhTdHlsZSgndHJhbnNmb3JtJyk7XHJcbiAgICBoYXNUcmFuc2Zvcm0gPSB0cmFuc2Zvcm0gIT09IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgIFJldHVybnMgYnJvd3NlcidzIG5hdGl2ZSBzY3JvbGxiYXIgd2lkdGhcclxuICAgICBAbWV0aG9kIGdldEJyb3dzZXJTY3JvbGxiYXJXaWR0aFxyXG4gICAgIEByZXR1cm4ge051bWJlcn0gdGhlIHNjcm9sbGJhciB3aWR0aCBpbiBwaXhlbHNcclxuICAgICBAc3RhdGljXHJcbiAgICAgQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgZ2V0QnJvd3NlclNjcm9sbGJhcldpZHRoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvdXRlciwgb3V0ZXJTdHlsZSwgc2Nyb2xsYmFyV2lkdGg7XHJcbiAgICAgICAgb3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBvdXRlclN0eWxlID0gb3V0ZXIuc3R5bGU7XHJcbiAgICAgICAgb3V0ZXJTdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgb3V0ZXJTdHlsZS53aWR0aCA9ICcxMDBweCc7XHJcbiAgICAgICAgb3V0ZXJTdHlsZS5oZWlnaHQgPSAnMTAwcHgnO1xyXG4gICAgICAgIG91dGVyU3R5bGUub3ZlcmZsb3cgPSBTQ1JPTEw7XHJcbiAgICAgICAgb3V0ZXJTdHlsZS50b3AgPSAnLTk5OTlweCc7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdXRlcik7XHJcbiAgICAgICAgc2Nyb2xsYmFyV2lkdGggPSBvdXRlci5vZmZzZXRXaWR0aCAtIG91dGVyLmNsaWVudFdpZHRoO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQob3V0ZXIpO1xyXG4gICAgICAgIHJldHVybiBzY3JvbGxiYXJXaWR0aDtcclxuICAgIH07XHJcbiAgICBpc0ZGV2l0aEJ1Z2d5U2Nyb2xsYmFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpc09TWEZGLCB1YSwgdmVyc2lvbjtcclxuICAgICAgICB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gICAgICAgIGlzT1NYRkYgPSAvKD89LitNYWMgT1MgWCkoPz0uK0ZpcmVmb3gpLy50ZXN0KHVhKTtcclxuICAgICAgICBpZiAoIWlzT1NYRkYpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2ZXJzaW9uID0gL0ZpcmVmb3hcXC9cXGR7Mn1cXC4vLmV4ZWModWEpO1xyXG4gICAgICAgIGlmICh2ZXJzaW9uKSB7XHJcbiAgICAgICAgICAgIHZlcnNpb24gPSB2ZXJzaW9uWzBdLnJlcGxhY2UoL1xcRCsvZywgJycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNPU1hGRiAmJiArdmVyc2lvbiA+IDIzO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICBAY2xhc3MgTmFub1Njcm9sbFxyXG4gICAgIEBwYXJhbSBlbGVtZW50IHtIVE1MRWxlbWVudHxOb2RlfSB0aGUgbWFpbiBlbGVtZW50XHJcbiAgICAgQHBhcmFtIG9wdGlvbnMge09iamVjdH0gbmFub1Njcm9sbGVyJ3Mgb3B0aW9uc1xyXG4gICAgIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBOYW5vU2Nyb2xsID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmdW5jdGlvbiBOYW5vU2Nyb2xsKGVsLCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWwgPSBlbDtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgICAgICAgICAgQlJPV1NFUl9TQ1JPTExCQVJfV0lEVEggfHwgKEJST1dTRVJfU0NST0xMQkFSX1dJRFRIID0gZ2V0QnJvd3NlclNjcm9sbGJhcldpZHRoKCkpO1xyXG4gICAgICAgICAgICB0aGlzLiRlbCA9ICQodGhpcy5lbCk7XHJcbiAgICAgICAgICAgIHRoaXMuZG9jID0gJCh0aGlzLm9wdGlvbnMuZG9jdW1lbnRDb250ZXh0IHx8IGRvY3VtZW50KTtcclxuICAgICAgICAgICAgdGhpcy53aW4gPSAkKHRoaXMub3B0aW9ucy53aW5kb3dDb250ZXh0IHx8IHdpbmRvdyk7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keSA9IHRoaXMuZG9jLmZpbmQoJ2JvZHknKTtcclxuICAgICAgICAgICAgdGhpcy4kY29udGVudCA9IHRoaXMuJGVsLmNoaWxkcmVuKFwiLlwiICsgb3B0aW9ucy5jb250ZW50Q2xhc3MpO1xyXG4gICAgICAgICAgICB0aGlzLiRjb250ZW50LmF0dHIoJ3RhYmluZGV4JywgdGhpcy5vcHRpb25zLnRhYkluZGV4IHx8IDApO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLiRjb250ZW50WzBdO1xyXG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzUG9zaXRpb24gPSAwO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlPU05hdGl2ZVNjcm9sbGluZyAmJiAodGhpcy5lbC5zdHlsZS5XZWJraXRPdmVyZmxvd1Njcm9sbGluZyAhPSBudWxsKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVTY3JvbGxpbmcoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUV2ZW50cygpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50cygpO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgIFByZXZlbnRzIHRoZSByZXN0IG9mIHRoZSBwYWdlIGJlaW5nIHNjcm9sbGVkXHJcbiAgICAgICAgIHdoZW4gdXNlciBzY3JvbGxzIHRoZSBgLm5hbm8tY29udGVudGAgZWxlbWVudC5cclxuICAgICAgICAgQG1ldGhvZCBwcmV2ZW50U2Nyb2xsaW5nXHJcbiAgICAgICAgIEBwYXJhbSBldmVudCB7RXZlbnR9XHJcbiAgICAgICAgIEBwYXJhbSBkaXJlY3Rpb24ge1N0cmluZ30gU2Nyb2xsIGRpcmVjdGlvbiAodXAgb3IgZG93bilcclxuICAgICAgICAgQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgTmFub1Njcm9sbC5wcm90b3R5cGUucHJldmVudFNjcm9sbGluZyA9IGZ1bmN0aW9uIChlLCBkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGUudHlwZSA9PT0gRE9NU0NST0xMKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBET1dOICYmIGUub3JpZ2luYWxFdmVudC5kZXRhaWwgPiAwIHx8IGRpcmVjdGlvbiA9PT0gVVAgJiYgZS5vcmlnaW5hbEV2ZW50LmRldGFpbCA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS50eXBlID09PSBNT1VTRVdIRUVMKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWUub3JpZ2luYWxFdmVudCB8fCAhZS5vcmlnaW5hbEV2ZW50LndoZWVsRGVsdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBET1dOICYmIGUub3JpZ2luYWxFdmVudC53aGVlbERlbHRhIDwgMCB8fCBkaXJlY3Rpb24gPT09IFVQICYmIGUub3JpZ2luYWxFdmVudC53aGVlbERlbHRhID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgRW5hYmxlIGlPUyBuYXRpdmUgc2Nyb2xsaW5nXHJcbiAgICAgICAgIEBtZXRob2QgbmF0aXZlU2Nyb2xsaW5nXHJcbiAgICAgICAgIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgIE5hbm9TY3JvbGwucHJvdG90eXBlLm5hdGl2ZVNjcm9sbGluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy4kY29udGVudC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6ICd0b3VjaCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuaU9TTmF0aXZlU2Nyb2xsaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICBVcGRhdGVzIHRob3NlIG5hbm9TY3JvbGxlciBwcm9wZXJ0aWVzIHRoYXRcclxuICAgICAgICAgYXJlIHJlbGF0ZWQgdG8gY3VycmVudCBzY3JvbGxiYXIgcG9zaXRpb24uXHJcbiAgICAgICAgIEBtZXRob2QgdXBkYXRlU2Nyb2xsVmFsdWVzXHJcbiAgICAgICAgIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgIE5hbm9TY3JvbGwucHJvdG90eXBlLnVwZGF0ZVNjcm9sbFZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGNvbnRlbnQsIGRpcmVjdGlvbjtcclxuICAgICAgICAgICAgY29udGVudCA9IHRoaXMuY29udGVudDtcclxuICAgICAgICAgICAgdGhpcy5tYXhTY3JvbGxUb3AgPSBjb250ZW50LnNjcm9sbEhlaWdodCAtIGNvbnRlbnQuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLnByZXZTY3JvbGxUb3AgPSB0aGlzLmNvbnRlbnRTY3JvbGxUb3AgfHwgMDtcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50U2Nyb2xsVG9wID0gY29udGVudC5zY3JvbGxUb3A7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IHRoaXMuY29udGVudFNjcm9sbFRvcCA+IHRoaXMucHJldmlvdXNQb3NpdGlvbiA/IFwiZG93blwiIDogdGhpcy5jb250ZW50U2Nyb2xsVG9wIDwgdGhpcy5wcmV2aW91c1Bvc2l0aW9uID8gXCJ1cFwiIDogXCJzYW1lXCI7XHJcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNQb3NpdGlvbiA9IHRoaXMuY29udGVudFNjcm9sbFRvcDtcclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiAhPT0gXCJzYW1lXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVsLnRyaWdnZXIoJ3VwZGF0ZScsIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5jb250ZW50U2Nyb2xsVG9wLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heGltdW06IHRoaXMubWF4U2Nyb2xsVG9wLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaU9TTmF0aXZlU2Nyb2xsaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1heFNsaWRlclRvcCA9IHRoaXMucGFuZUhlaWdodCAtIHRoaXMuc2xpZGVySGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJUb3AgPSB0aGlzLm1heFNjcm9sbFRvcCA9PT0gMCA/IDAgOiB0aGlzLmNvbnRlbnRTY3JvbGxUb3AgKiB0aGlzLm1heFNsaWRlclRvcCAvIHRoaXMubWF4U2Nyb2xsVG9wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICBVcGRhdGVzIENTUyBzdHlsZXMgZm9yIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uLlxyXG4gICAgICAgICBVc2VzIENTUyAyZCB0cmFuc2Zyb21zIGFuZCBgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZWAgaWYgYXZhaWxhYmxlLlxyXG4gICAgICAgICBAbWV0aG9kIHNldE9uU2Nyb2xsU3R5bGVzXHJcbiAgICAgICAgIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgIE5hbm9TY3JvbGwucHJvdG90eXBlLnNldE9uU2Nyb2xsU3R5bGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgY3NzVmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChoYXNUcmFuc2Zvcm0pIHtcclxuICAgICAgICAgICAgICAgIGNzc1ZhbHVlID0ge307XHJcbiAgICAgICAgICAgICAgICBjc3NWYWx1ZVt0cmFuc2Zvcm1dID0gXCJ0cmFuc2xhdGUoMCwgXCIgKyB0aGlzLnNsaWRlclRvcCArIFwicHgpXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjc3NWYWx1ZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IHRoaXMuc2xpZGVyVG9wXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyQUYpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjQUYgJiYgdGhpcy5zY3JvbGxSQUYpIHtcclxuICAgICAgICAgICAgICAgICAgICBjQUYodGhpcy5zY3JvbGxSQUYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxSQUYgPSByQUYoKGZ1bmN0aW9uIChfdGhpcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNjcm9sbFJBRiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5zbGlkZXIuY3NzKGNzc1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSkodGhpcykpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZXIuY3NzKGNzc1ZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgQ3JlYXRlcyBldmVudCByZWxhdGVkIG1ldGhvZHNcclxuICAgICAgICAgQG1ldGhvZCBjcmVhdGVFdmVudHNcclxuICAgICAgICAgQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgTmFub1Njcm9sbC5wcm90b3R5cGUuY3JlYXRlRXZlbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50cyA9IHtcclxuICAgICAgICAgICAgICAgIGRvd246IChmdW5jdGlvbiAoX3RoaXMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaXNCZWluZ0RyYWdnZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5vZmZzZXRZID0gZS5wYWdlWSAtIF90aGlzLnNsaWRlci5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghX3RoaXMuc2xpZGVyLmlzKGUudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMub2Zmc2V0WSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucGFuZS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmRvYy5iaW5kKE1PVVNFTU9WRSwgX3RoaXMuZXZlbnRzW0RSQUddKS5iaW5kKE1PVVNFVVAsIF90aGlzLmV2ZW50c1tVUF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5ib2R5LmJpbmQoTU9VU0VFTlRFUiwgX3RoaXMuZXZlbnRzW0VOVEVSXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSkodGhpcyksXHJcbiAgICAgICAgICAgICAgICBkcmFnOiAoZnVuY3Rpb24gKF90aGlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNsaWRlclkgPSBlLnBhZ2VZIC0gX3RoaXMuJGVsLm9mZnNldCgpLnRvcCAtIF90aGlzLnBhbmVUb3AgLSAoX3RoaXMub2Zmc2V0WSB8fCBfdGhpcy5zbGlkZXJIZWlnaHQgKiAwLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zY3JvbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmNvbnRlbnRTY3JvbGxUb3AgPj0gX3RoaXMubWF4U2Nyb2xsVG9wICYmIF90aGlzLnByZXZTY3JvbGxUb3AgIT09IF90aGlzLm1heFNjcm9sbFRvcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuJGVsLnRyaWdnZXIoJ3Njcm9sbGVuZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKF90aGlzLmNvbnRlbnRTY3JvbGxUb3AgPT09IDAgJiYgX3RoaXMucHJldlNjcm9sbFRvcCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuJGVsLnRyaWdnZXIoJ3Njcm9sbHRvcCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSkodGhpcyksXHJcbiAgICAgICAgICAgICAgICB1cDogKGZ1bmN0aW9uIChfdGhpcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5pc0JlaW5nRHJhZ2dlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5wYW5lLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZG9jLnVuYmluZChNT1VTRU1PVkUsIF90aGlzLmV2ZW50c1tEUkFHXSkudW5iaW5kKE1PVVNFVVAsIF90aGlzLmV2ZW50c1tVUF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5ib2R5LnVuYmluZChNT1VTRUVOVEVSLCBfdGhpcy5ldmVudHNbRU5URVJdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9KSh0aGlzKSxcclxuICAgICAgICAgICAgICAgIHJlc2l6ZTogKGZ1bmN0aW9uIChfdGhpcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9KSh0aGlzKSxcclxuICAgICAgICAgICAgICAgIHBhbmVkb3duOiAoZnVuY3Rpb24gKF90aGlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNsaWRlclkgPSAoZS5vZmZzZXRZIHx8IGUub3JpZ2luYWxFdmVudC5sYXllclkpIC0gKF90aGlzLnNsaWRlckhlaWdodCAqIDAuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNjcm9sbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5ldmVudHMuZG93bihlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9KSh0aGlzKSxcclxuICAgICAgICAgICAgICAgIHNjcm9sbDogKGZ1bmN0aW9uIChfdGhpcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVTY3JvbGxWYWx1ZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmlzQmVpbmdEcmFnZ2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5pT1NOYXRpdmVTY3JvbGxpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNsaWRlclkgPSBfdGhpcy5zbGlkZXJUb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRPblNjcm9sbFN0eWxlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuY29udGVudFNjcm9sbFRvcCA+PSBfdGhpcy5tYXhTY3JvbGxUb3ApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5vcHRpb25zLnByZXZlbnRQYWdlU2Nyb2xsaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucHJldmVudFNjcm9sbGluZyhlLCBET1dOKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5wcmV2U2Nyb2xsVG9wICE9PSBfdGhpcy5tYXhTY3JvbGxUb3ApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy4kZWwudHJpZ2dlcignc2Nyb2xsZW5kJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoX3RoaXMuY29udGVudFNjcm9sbFRvcCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLm9wdGlvbnMucHJldmVudFBhZ2VTY3JvbGxpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5wcmV2ZW50U2Nyb2xsaW5nKGUsIFVQKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5wcmV2U2Nyb2xsVG9wICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuJGVsLnRyaWdnZXIoJ3Njcm9sbHRvcCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0pKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgd2hlZWw6IChmdW5jdGlvbiAoX3RoaXMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlbHRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGEgPSBlLmRlbHRhIHx8IGUud2hlZWxEZWx0YSB8fCAoZS5vcmlnaW5hbEV2ZW50ICYmIGUub3JpZ2luYWxFdmVudC53aGVlbERlbHRhKSB8fCAtZS5kZXRhaWwgfHwgKGUub3JpZ2luYWxFdmVudCAmJiAtZS5vcmlnaW5hbEV2ZW50LmRldGFpbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWx0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2xpZGVyWSArPSAtZGVsdGEgLyAzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNjcm9sbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0pKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgZW50ZXI6IChmdW5jdGlvbiAoX3RoaXMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9yZWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghX3RoaXMuaXNCZWluZ0RyYWdnZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGUuYnV0dG9ucyB8fCBlLndoaWNoKSAhPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChfcmVmID0gX3RoaXMuZXZlbnRzKVtVUF0uYXBwbHkoX3JlZiwgYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9KSh0aGlzKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgQWRkcyBldmVudCBsaXN0ZW5lcnMgd2l0aCBqUXVlcnkuXHJcbiAgICAgICAgIEBtZXRob2QgYWRkRXZlbnRzXHJcbiAgICAgICAgIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgIE5hbm9TY3JvbGwucHJvdG90eXBlLmFkZEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGV2ZW50cztcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudHMoKTtcclxuICAgICAgICAgICAgZXZlbnRzID0gdGhpcy5ldmVudHM7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5vcHRpb25zLmRpc2FibGVSZXNpemUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2luLmJpbmQoUkVTSVpFLCBldmVudHNbUkVTSVpFXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlPU05hdGl2ZVNjcm9sbGluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZXIuYmluZChNT1VTRURPV04sIGV2ZW50c1tET1dOXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhbmUuYmluZChNT1VTRURPV04sIGV2ZW50c1tQQU5FRE9XTl0pLmJpbmQoXCJcIiArIE1PVVNFV0hFRUwgKyBcIiBcIiArIERPTVNDUk9MTCwgZXZlbnRzW1dIRUVMXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy4kY29udGVudC5iaW5kKFwiXCIgKyBTQ1JPTEwgKyBcIiBcIiArIE1PVVNFV0hFRUwgKyBcIiBcIiArIERPTVNDUk9MTCArIFwiIFwiICsgVE9VQ0hNT1ZFLCBldmVudHNbU0NST0xMXSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICBSZW1vdmVzIGV2ZW50IGxpc3RlbmVycyB3aXRoIGpRdWVyeS5cclxuICAgICAgICAgQG1ldGhvZCByZW1vdmVFdmVudHNcclxuICAgICAgICAgQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgTmFub1Njcm9sbC5wcm90b3R5cGUucmVtb3ZlRXZlbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZXZlbnRzO1xyXG4gICAgICAgICAgICBldmVudHMgPSB0aGlzLmV2ZW50cztcclxuICAgICAgICAgICAgdGhpcy53aW4udW5iaW5kKFJFU0laRSwgZXZlbnRzW1JFU0laRV0pO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaU9TTmF0aXZlU2Nyb2xsaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlci51bmJpbmQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFuZS51bmJpbmQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLiRjb250ZW50LnVuYmluZChcIlwiICsgU0NST0xMICsgXCIgXCIgKyBNT1VTRVdIRUVMICsgXCIgXCIgKyBET01TQ1JPTEwgKyBcIiBcIiArIFRPVUNITU9WRSwgZXZlbnRzW1NDUk9MTF0pO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgR2VuZXJhdGVzIG5hbm9TY3JvbGxlcidzIHNjcm9sbGJhciBhbmQgZWxlbWVudHMgZm9yIGl0LlxyXG4gICAgICAgICBAbWV0aG9kIGdlbmVyYXRlXHJcbiAgICAgICAgIEBjaGFpbmFibGVcclxuICAgICAgICAgQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgTmFub1Njcm9sbC5wcm90b3R5cGUuZ2VuZXJhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBjb250ZW50Q2xhc3MsIGNzc1J1bGUsIGN1cnJlbnRQYWRkaW5nLCBvcHRpb25zLCBwYW5lLCBwYW5lQ2xhc3MsIHNsaWRlckNsYXNzO1xyXG4gICAgICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xyXG4gICAgICAgICAgICBwYW5lQ2xhc3MgPSBvcHRpb25zLnBhbmVDbGFzcywgc2xpZGVyQ2xhc3MgPSBvcHRpb25zLnNsaWRlckNsYXNzLCBjb250ZW50Q2xhc3MgPSBvcHRpb25zLmNvbnRlbnRDbGFzcztcclxuICAgICAgICAgICAgaWYgKCEocGFuZSA9IHRoaXMuJGVsLmNoaWxkcmVuKFwiLlwiICsgcGFuZUNsYXNzKSkubGVuZ3RoICYmICFwYW5lLmNoaWxkcmVuKFwiLlwiICsgc2xpZGVyQ2xhc3MpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZWwuYXBwZW5kKFwiPGRpdiBjbGFzcz1cXFwiXCIgKyBwYW5lQ2xhc3MgKyBcIlxcXCI+PGRpdiBjbGFzcz1cXFwiXCIgKyBzbGlkZXJDbGFzcyArIFwiXFxcIiAvPjwvZGl2PlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBhbmUgPSB0aGlzLiRlbC5jaGlsZHJlbihcIi5cIiArIHBhbmVDbGFzcyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2xpZGVyID0gdGhpcy5wYW5lLmZpbmQoXCIuXCIgKyBzbGlkZXJDbGFzcyk7XHJcbiAgICAgICAgICAgIGlmIChCUk9XU0VSX1NDUk9MTEJBUl9XSURUSCA9PT0gMCAmJiBpc0ZGV2l0aEJ1Z2d5U2Nyb2xsYmFyKCkpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWRkaW5nID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5jb250ZW50LCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXJpZ2h0JykucmVwbGFjZSgvW14wLTkuXSsvZywgJycpO1xyXG4gICAgICAgICAgICAgICAgY3NzUnVsZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogLTE0LFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogK2N1cnJlbnRQYWRkaW5nICsgMTRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoQlJPV1NFUl9TQ1JPTExCQVJfV0lEVEgpIHtcclxuICAgICAgICAgICAgICAgIGNzc1J1bGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC1CUk9XU0VSX1NDUk9MTEJBUl9XSURUSFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVsLmFkZENsYXNzKCdoYXMtc2Nyb2xsYmFyJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNzc1J1bGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kY29udGVudC5jc3MoY3NzUnVsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICBAbWV0aG9kIHJlc3RvcmVcclxuICAgICAgICAgQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgTmFub1Njcm9sbC5wcm90b3R5cGUucmVzdG9yZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wcGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pT1NOYXRpdmVTY3JvbGxpbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFuZS5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5hZGRFdmVudHMoKTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgIFJlc2V0cyBuYW5vU2Nyb2xsZXIncyBzY3JvbGxiYXIuXHJcbiAgICAgICAgIEBtZXRob2QgcmVzZXRcclxuICAgICAgICAgQGNoYWluYWJsZVxyXG4gICAgICAgICBAZXhhbXBsZVxyXG4gICAgICAgICAkKFwiLm5hbm9cIikubmFub1Njcm9sbGVyKCk7XHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgIE5hbm9TY3JvbGwucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgY29udGVudCwgY29udGVudEhlaWdodCwgY29udGVudFBvc2l0aW9uLCBjb250ZW50U3R5bGUsIGNvbnRlbnRTdHlsZU92ZXJmbG93WSwgcGFuZUJvdHRvbSwgcGFuZUhlaWdodCwgcGFuZU91dGVySGVpZ2h0LCBwYW5lVG9wLCBwYXJlbnRNYXhIZWlnaHQsIHJpZ2h0LCBzbGlkZXJIZWlnaHQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlPU05hdGl2ZVNjcm9sbGluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50SGVpZ2h0ID0gdGhpcy5jb250ZW50LnNjcm9sbEhlaWdodDtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuJGVsLmZpbmQoXCIuXCIgKyB0aGlzLm9wdGlvbnMucGFuZUNsYXNzKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGUoKS5zdG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RvcHBlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0b3JlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29udGVudCA9IHRoaXMuY29udGVudDtcclxuICAgICAgICAgICAgY29udGVudFN0eWxlID0gY29udGVudC5zdHlsZTtcclxuICAgICAgICAgICAgY29udGVudFN0eWxlT3ZlcmZsb3dZID0gY29udGVudFN0eWxlLm92ZXJmbG93WTtcclxuICAgICAgICAgICAgaWYgKEJST1dTRVJfSVNfSUU3KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRjb250ZW50LmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLiRjb250ZW50LmhlaWdodCgpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb250ZW50SGVpZ2h0ID0gY29udGVudC5zY3JvbGxIZWlnaHQgKyBCUk9XU0VSX1NDUk9MTEJBUl9XSURUSDtcclxuICAgICAgICAgICAgcGFyZW50TWF4SGVpZ2h0ID0gcGFyc2VJbnQodGhpcy4kZWwuY3NzKFwibWF4LWhlaWdodFwiKSwgMTApO1xyXG4gICAgICAgICAgICBpZiAocGFyZW50TWF4SGVpZ2h0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZWwuaGVpZ2h0KFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZWwuaGVpZ2h0KGNvbnRlbnQuc2Nyb2xsSGVpZ2h0ID4gcGFyZW50TWF4SGVpZ2h0ID8gcGFyZW50TWF4SGVpZ2h0IDogY29udGVudC5zY3JvbGxIZWlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBhbmVIZWlnaHQgPSB0aGlzLnBhbmUub3V0ZXJIZWlnaHQoZmFsc2UpO1xyXG4gICAgICAgICAgICBwYW5lVG9wID0gcGFyc2VJbnQodGhpcy5wYW5lLmNzcygndG9wJyksIDEwKTtcclxuICAgICAgICAgICAgcGFuZUJvdHRvbSA9IHBhcnNlSW50KHRoaXMucGFuZS5jc3MoJ2JvdHRvbScpLCAxMCk7XHJcbiAgICAgICAgICAgIHBhbmVPdXRlckhlaWdodCA9IHBhbmVIZWlnaHQgKyBwYW5lVG9wICsgcGFuZUJvdHRvbTtcclxuICAgICAgICAgICAgc2xpZGVySGVpZ2h0ID0gTWF0aC5yb3VuZChwYW5lT3V0ZXJIZWlnaHQgLyBjb250ZW50SGVpZ2h0ICogcGFuZU91dGVySGVpZ2h0KTtcclxuICAgICAgICAgICAgaWYgKHNsaWRlckhlaWdodCA8IHRoaXMub3B0aW9ucy5zbGlkZXJNaW5IZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHNsaWRlckhlaWdodCA9IHRoaXMub3B0aW9ucy5zbGlkZXJNaW5IZWlnaHQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKHRoaXMub3B0aW9ucy5zbGlkZXJNYXhIZWlnaHQgIT0gbnVsbCkgJiYgc2xpZGVySGVpZ2h0ID4gdGhpcy5vcHRpb25zLnNsaWRlck1heEhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVySGVpZ2h0ID0gdGhpcy5vcHRpb25zLnNsaWRlck1heEhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29udGVudFN0eWxlT3ZlcmZsb3dZID09PSBTQ1JPTEwgJiYgY29udGVudFN0eWxlLm92ZXJmbG93WCAhPT0gU0NST0xMKSB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXJIZWlnaHQgKz0gQlJPV1NFUl9TQ1JPTExCQVJfV0lEVEg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5tYXhTbGlkZXJUb3AgPSBwYW5lT3V0ZXJIZWlnaHQgLSBzbGlkZXJIZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudEhlaWdodCA9IGNvbnRlbnRIZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMucGFuZUhlaWdodCA9IHBhbmVIZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMucGFuZU91dGVySGVpZ2h0ID0gcGFuZU91dGVySGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLnNsaWRlckhlaWdodCA9IHNsaWRlckhlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5wYW5lVG9wID0gcGFuZVRvcDtcclxuICAgICAgICAgICAgdGhpcy5zbGlkZXIuaGVpZ2h0KHNsaWRlckhlaWdodCk7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzLnNjcm9sbCgpO1xyXG4gICAgICAgICAgICB0aGlzLnBhbmUuc2hvdygpO1xyXG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKChjb250ZW50LnNjcm9sbEhlaWdodCA9PT0gY29udGVudC5jbGllbnRIZWlnaHQpIHx8ICh0aGlzLnBhbmUub3V0ZXJIZWlnaHQodHJ1ZSkgPj0gY29udGVudC5zY3JvbGxIZWlnaHQgJiYgY29udGVudFN0eWxlT3ZlcmZsb3dZICE9PSBTQ1JPTEwpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhbmUuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZWwuY2xpZW50SGVpZ2h0ID09PSBjb250ZW50LnNjcm9sbEhlaWdodCAmJiBjb250ZW50U3R5bGVPdmVyZmxvd1kgPT09IFNDUk9MTCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZXIuc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucGFuZS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogKHRoaXMub3B0aW9ucy5hbHdheXNWaXNpYmxlID8gMSA6ICcnKSxcclxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICh0aGlzLm9wdGlvbnMuYWx3YXlzVmlzaWJsZSA/ICd2aXNpYmxlJyA6ICcnKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29udGVudFBvc2l0aW9uID0gdGhpcy4kY29udGVudC5jc3MoJ3Bvc2l0aW9uJyk7XHJcbiAgICAgICAgICAgIGlmIChjb250ZW50UG9zaXRpb24gPT09ICdzdGF0aWMnIHx8IGNvbnRlbnRQb3NpdGlvbiA9PT0gJ3JlbGF0aXZlJykge1xyXG4gICAgICAgICAgICAgICAgcmlnaHQgPSBwYXJzZUludCh0aGlzLiRjb250ZW50LmNzcygncmlnaHQnKSwgMTApO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kY29udGVudC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiByaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgQG1ldGhvZCBzY3JvbGxcclxuICAgICAgICAgQHByaXZhdGVcclxuICAgICAgICAgQGV4YW1wbGVcclxuICAgICAgICAgJChcIi5uYW5vXCIpLm5hbm9TY3JvbGxlcih7IHNjcm9sbDogJ3RvcCcgfSk7XHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgIE5hbm9TY3JvbGwucHJvdG90eXBlLnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zbGlkZXJZID0gTWF0aC5tYXgoMCwgdGhpcy5zbGlkZXJZKTtcclxuICAgICAgICAgICAgdGhpcy5zbGlkZXJZID0gTWF0aC5taW4odGhpcy5tYXhTbGlkZXJUb3AsIHRoaXMuc2xpZGVyWSk7XHJcbiAgICAgICAgICAgIHRoaXMuJGNvbnRlbnQuc2Nyb2xsVG9wKHRoaXMubWF4U2Nyb2xsVG9wICogdGhpcy5zbGlkZXJZIC8gdGhpcy5tYXhTbGlkZXJUb3ApO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaU9TTmF0aXZlU2Nyb2xsaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNjcm9sbFZhbHVlcygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRPblNjcm9sbFN0eWxlcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgU2Nyb2xsIGF0IHRoZSBib3R0b20gd2l0aCBhbiBvZmZzZXQgdmFsdWVcclxuICAgICAgICAgQG1ldGhvZCBzY3JvbGxCb3R0b21cclxuICAgICAgICAgQHBhcmFtIG9mZnNldFkge051bWJlcn1cclxuICAgICAgICAgQGNoYWluYWJsZVxyXG4gICAgICAgICBAZXhhbXBsZVxyXG4gICAgICAgICAkKFwiLm5hbm9cIikubmFub1Njcm9sbGVyKHsgc2Nyb2xsQm90dG9tOiB2YWx1ZSB9KTtcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgTmFub1Njcm9sbC5wcm90b3R5cGUuc2Nyb2xsQm90dG9tID0gZnVuY3Rpb24gKG9mZnNldFkpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy4kY29udGVudC5zY3JvbGxUb3AodGhpcy5jb250ZW50SGVpZ2h0IC0gdGhpcy4kY29udGVudC5oZWlnaHQoKSAtIG9mZnNldFkpLnRyaWdnZXIoTU9VU0VXSEVFTCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpLnJlc3RvcmUoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICBTY3JvbGwgYXQgdGhlIHRvcCB3aXRoIGFuIG9mZnNldCB2YWx1ZVxyXG4gICAgICAgICBAbWV0aG9kIHNjcm9sbFRvcFxyXG4gICAgICAgICBAcGFyYW0gb2Zmc2V0WSB7TnVtYmVyfVxyXG4gICAgICAgICBAY2hhaW5hYmxlXHJcbiAgICAgICAgIEBleGFtcGxlXHJcbiAgICAgICAgICQoXCIubmFub1wiKS5uYW5vU2Nyb2xsZXIoeyBzY3JvbGxUb3A6IHZhbHVlIH0pO1xyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICBOYW5vU2Nyb2xsLnByb3RvdHlwZS5zY3JvbGxUb3AgPSBmdW5jdGlvbiAob2Zmc2V0WSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLiRjb250ZW50LnNjcm9sbFRvcCgrb2Zmc2V0WSkudHJpZ2dlcihNT1VTRVdIRUVMKTtcclxuICAgICAgICAgICAgdGhpcy5zdG9wKCkucmVzdG9yZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgIFNjcm9sbCB0byBhbiBlbGVtZW50XHJcbiAgICAgICAgIEBtZXRob2Qgc2Nyb2xsVG9cclxuICAgICAgICAgQHBhcmFtIG5vZGUge05vZGV9IEEgbm9kZSB0byBzY3JvbGwgdG8uXHJcbiAgICAgICAgIEBjaGFpbmFibGVcclxuICAgICAgICAgQGV4YW1wbGVcclxuICAgICAgICAgJChcIi5uYW5vXCIpLm5hbm9TY3JvbGxlcih7IHNjcm9sbFRvOiAkKCcjYV9ub2RlJykgfSk7XHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgIE5hbm9TY3JvbGwucHJvdG90eXBlLnNjcm9sbFRvID0gZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb3AodGhpcy4kZWwuZmluZChub2RlKS5nZXQoMCkub2Zmc2V0VG9wKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICBUbyBzdG9wIHRoZSBvcGVyYXRpb24uXHJcbiAgICAgICAgIFRoaXMgb3B0aW9uIHdpbGwgdGVsbCB0aGUgcGx1Z2luIHRvIGRpc2FibGUgYWxsIGV2ZW50IGJpbmRpbmdzIGFuZCBoaWRlIHRoZSBnYWRnZXQgc2Nyb2xsYmFyIGZyb20gdGhlIFVJLlxyXG4gICAgICAgICBAbWV0aG9kIHN0b3BcclxuICAgICAgICAgQGNoYWluYWJsZVxyXG4gICAgICAgICBAZXhhbXBsZVxyXG4gICAgICAgICAkKFwiLm5hbm9cIikubmFub1Njcm9sbGVyKHsgc3RvcDogdHJ1ZSB9KTtcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgTmFub1Njcm9sbC5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGNBRiAmJiB0aGlzLnNjcm9sbFJBRikge1xyXG4gICAgICAgICAgICAgICAgY0FGKHRoaXMuc2Nyb2xsUkFGKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsUkFGID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnN0b3BwZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50cygpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaU9TTmF0aXZlU2Nyb2xsaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhbmUuaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgRGVzdHJveXMgbmFub1Njcm9sbGVyIGFuZCByZXN0b3JlcyBicm93c2VyJ3MgbmF0aXZlIHNjcm9sbGJhci5cclxuICAgICAgICAgQG1ldGhvZCBkZXN0cm95XHJcbiAgICAgICAgIEBjaGFpbmFibGVcclxuICAgICAgICAgQGV4YW1wbGVcclxuICAgICAgICAgJChcIi5uYW5vXCIpLm5hbm9TY3JvbGxlcih7IGRlc3Ryb3k6IHRydWUgfSk7XHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgIE5hbm9TY3JvbGwucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zdG9wcGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaU9TTmF0aXZlU2Nyb2xsaW5nICYmIHRoaXMucGFuZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFuZS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoQlJPV1NFUl9JU19JRTcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGNvbnRlbnQuaGVpZ2h0KCcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLiRjb250ZW50LnJlbW92ZUF0dHIoJ3RhYmluZGV4Jyk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRlbC5oYXNDbGFzcygnaGFzLXNjcm9sbGJhcicpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbC5yZW1vdmVDbGFzcygnaGFzLXNjcm9sbGJhcicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kY29udGVudC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAnJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICBUbyBmbGFzaCB0aGUgc2Nyb2xsYmFyIGdhZGdldCBmb3IgYW4gYW1vdW50IG9mIHRpbWUgZGVmaW5lZCBpbiBwbHVnaW4gc2V0dGluZ3MgKGRlZmF1bHRzIHRvIDEsNXMpLlxyXG4gICAgICAgICBVc2VmdWwgaWYgeW91IHdhbnQgdG8gc2hvdyB0aGUgdXNlciAoZS5nLiBvbiBwYWdlbG9hZCkgdGhhdCB0aGVyZSBpcyBtb3JlIGNvbnRlbnQgd2FpdGluZyBmb3IgaGltLlxyXG4gICAgICAgICBAbWV0aG9kIGZsYXNoXHJcbiAgICAgICAgIEBjaGFpbmFibGVcclxuICAgICAgICAgQGV4YW1wbGVcclxuICAgICAgICAgJChcIi5uYW5vXCIpLm5hbm9TY3JvbGxlcih7IGZsYXNoOiB0cnVlIH0pO1xyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICBOYW5vU2Nyb2xsLnByb3RvdHlwZS5mbGFzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaU9TTmF0aXZlU2Nyb2xsaW5nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgICAgICAgICB0aGlzLnBhbmUuYWRkQ2xhc3MoJ2ZsYXNoZWQnKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoZnVuY3Rpb24gKF90aGlzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnBhbmUucmVtb3ZlQ2xhc3MoJ2ZsYXNoZWQnKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pKHRoaXMpLCB0aGlzLm9wdGlvbnMuZmxhc2hEZWxheSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBOYW5vU2Nyb2xsO1xyXG5cclxuICAgIH0pKCk7XHJcbiAgICAkLmZuLm5hbm9TY3JvbGxlciA9IGZ1bmN0aW9uIChzZXR0aW5ncykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgb3B0aW9ucywgc2Nyb2xsYmFyO1xyXG4gICAgICAgICAgICBpZiAoIShzY3JvbGxiYXIgPSB0aGlzLm5hbm9zY3JvbGxlcikpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIHNldHRpbmdzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmFub3Njcm9sbGVyID0gc2Nyb2xsYmFyID0gbmV3IE5hbm9TY3JvbGwodGhpcywgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNldHRpbmdzICYmIHR5cGVvZiBzZXR0aW5ncyA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgJC5leHRlbmQoc2Nyb2xsYmFyLm9wdGlvbnMsIHNldHRpbmdzKTtcclxuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy5zY3JvbGxCb3R0b20gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzY3JvbGxiYXIuc2Nyb2xsQm90dG9tKHNldHRpbmdzLnNjcm9sbEJvdHRvbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3Muc2Nyb2xsVG9wICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2Nyb2xsYmFyLnNjcm9sbFRvcChzZXR0aW5ncy5zY3JvbGxUb3ApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHNldHRpbmdzLnNjcm9sbFRvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNjcm9sbGJhci5zY3JvbGxUbyhzZXR0aW5ncy5zY3JvbGxUbyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3Muc2Nyb2xsID09PSAnYm90dG9tJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzY3JvbGxiYXIuc2Nyb2xsQm90dG9tKDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHNldHRpbmdzLnNjcm9sbCA9PT0gJ3RvcCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2Nyb2xsYmFyLnNjcm9sbFRvcCgwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy5zY3JvbGwgJiYgc2V0dGluZ3Muc2Nyb2xsIGluc3RhbmNlb2YgJCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzY3JvbGxiYXIuc2Nyb2xsVG8oc2V0dGluZ3Muc2Nyb2xsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy5zdG9wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNjcm9sbGJhci5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3MuZGVzdHJveSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzY3JvbGxiYXIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHNldHRpbmdzLmZsYXNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNjcm9sbGJhci5mbGFzaCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzY3JvbGxiYXIucmVzZXQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAkLmZuLm5hbm9TY3JvbGxlci5Db25zdHJ1Y3RvciA9IE5hbm9TY3JvbGw7XHJcbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCk7XHJcblxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1qcXVlcnkubmFub3Njcm9sbGVyLmpzLm1hcFxyXG5cImZ1bmN0aW9uXCIhPT10eXBlb2YgT2JqZWN0LmNyZWF0ZSYmKE9iamVjdC5jcmVhdGU9ZnVuY3Rpb24oZil7ZnVuY3Rpb24gZygpe31nLnByb3RvdHlwZT1mO3JldHVybiBuZXcgZ30pO1xyXG4oZnVuY3Rpb24oZixnLGspe3ZhciBsPXtpbml0OmZ1bmN0aW9uKGEsYil7dGhpcy4kZWxlbT1mKGIpO3RoaXMub3B0aW9ucz1mLmV4dGVuZCh7fSxmLmZuLm93bENhcm91c2VsLm9wdGlvbnMsdGhpcy4kZWxlbS5kYXRhKCksYSk7dGhpcy51c2VyT3B0aW9ucz1hO3RoaXMubG9hZENvbnRlbnQoKX0sbG9hZENvbnRlbnQ6ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGEpe3ZhciBkLGU9XCJcIjtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5vcHRpb25zLmpzb25TdWNjZXNzKWIub3B0aW9ucy5qc29uU3VjY2Vzcy5hcHBseSh0aGlzLFthXSk7ZWxzZXtmb3IoZCBpbiBhLm93bClhLm93bC5oYXNPd25Qcm9wZXJ0eShkKSYmKGUrPWEub3dsW2RdLml0ZW0pO2IuJGVsZW0uaHRtbChlKX1iLmxvZ0luKCl9dmFyIGI9dGhpcyxlO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBiLm9wdGlvbnMuYmVmb3JlSW5pdCYmYi5vcHRpb25zLmJlZm9yZUluaXQuYXBwbHkodGhpcyxbYi4kZWxlbV0pO1wic3RyaW5nXCI9PT10eXBlb2YgYi5vcHRpb25zLmpzb25QYXRoP1xyXG4oZT1iLm9wdGlvbnMuanNvblBhdGgsZi5nZXRKU09OKGUsYSkpOmIubG9nSW4oKX0sbG9nSW46ZnVuY3Rpb24oKXt0aGlzLiRlbGVtLmRhdGEoXCJvd2wtb3JpZ2luYWxTdHlsZXNcIix0aGlzLiRlbGVtLmF0dHIoXCJzdHlsZVwiKSk7dGhpcy4kZWxlbS5kYXRhKFwib3dsLW9yaWdpbmFsQ2xhc3Nlc1wiLHRoaXMuJGVsZW0uYXR0cihcImNsYXNzXCIpKTt0aGlzLiRlbGVtLmNzcyh7b3BhY2l0eTowfSk7dGhpcy5vcmlnbmFsSXRlbXM9dGhpcy5vcHRpb25zLml0ZW1zO3RoaXMuY2hlY2tCcm93c2VyKCk7dGhpcy53cmFwcGVyV2lkdGg9MDt0aGlzLmNoZWNrVmlzaWJsZT1udWxsO3RoaXMuc2V0VmFycygpfSxzZXRWYXJzOmZ1bmN0aW9uKCl7aWYoMD09PXRoaXMuJGVsZW0uY2hpbGRyZW4oKS5sZW5ndGgpcmV0dXJuITE7dGhpcy5iYXNlQ2xhc3MoKTt0aGlzLmV2ZW50VHlwZXMoKTt0aGlzLiR1c2VySXRlbXM9dGhpcy4kZWxlbS5jaGlsZHJlbigpO3RoaXMuaXRlbXNBbW91bnQ9dGhpcy4kdXNlckl0ZW1zLmxlbmd0aDtcclxudGhpcy53cmFwSXRlbXMoKTt0aGlzLiRvd2xJdGVtcz10aGlzLiRlbGVtLmZpbmQoXCIub3dsLWl0ZW1cIik7dGhpcy4kb3dsV3JhcHBlcj10aGlzLiRlbGVtLmZpbmQoXCIub3dsLXdyYXBwZXJcIik7dGhpcy5wbGF5RGlyZWN0aW9uPVwibmV4dFwiO3RoaXMucHJldkl0ZW09MDt0aGlzLnByZXZBcnI9WzBdO3RoaXMuY3VycmVudEl0ZW09MDt0aGlzLmN1c3RvbUV2ZW50cygpO3RoaXMub25TdGFydHVwKCl9LG9uU3RhcnR1cDpmdW5jdGlvbigpe3RoaXMudXBkYXRlSXRlbXMoKTt0aGlzLmNhbGN1bGF0ZUFsbCgpO3RoaXMuYnVpbGRDb250cm9scygpO3RoaXMudXBkYXRlQ29udHJvbHMoKTt0aGlzLnJlc3BvbnNlKCk7dGhpcy5tb3ZlRXZlbnRzKCk7dGhpcy5zdG9wT25Ib3ZlcigpO3RoaXMub3dsU3RhdHVzKCk7ITEhPT10aGlzLm9wdGlvbnMudHJhbnNpdGlvblN0eWxlJiZ0aGlzLnRyYW5zaXRpb25UeXBlcyh0aGlzLm9wdGlvbnMudHJhbnNpdGlvblN0eWxlKTshMD09PXRoaXMub3B0aW9ucy5hdXRvUGxheSYmXHJcbih0aGlzLm9wdGlvbnMuYXV0b1BsYXk9NUUzKTt0aGlzLnBsYXkoKTt0aGlzLiRlbGVtLmZpbmQoXCIub3dsLXdyYXBwZXJcIikuY3NzKFwiZGlzcGxheVwiLFwiYmxvY2tcIik7dGhpcy4kZWxlbS5pcyhcIjp2aXNpYmxlXCIpP3RoaXMuJGVsZW0uY3NzKFwib3BhY2l0eVwiLDEpOnRoaXMud2F0Y2hWaXNpYmlsaXR5KCk7dGhpcy5vbnN0YXJ0dXA9ITE7dGhpcy5lYWNoTW92ZVVwZGF0ZSgpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiB0aGlzLm9wdGlvbnMuYWZ0ZXJJbml0JiZ0aGlzLm9wdGlvbnMuYWZ0ZXJJbml0LmFwcGx5KHRoaXMsW3RoaXMuJGVsZW1dKX0sZWFjaE1vdmVVcGRhdGU6ZnVuY3Rpb24oKXshMD09PXRoaXMub3B0aW9ucy5sYXp5TG9hZCYmdGhpcy5sYXp5TG9hZCgpOyEwPT09dGhpcy5vcHRpb25zLmF1dG9IZWlnaHQmJnRoaXMuYXV0b0hlaWdodCgpO3RoaXMub25WaXNpYmxlSXRlbXMoKTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgdGhpcy5vcHRpb25zLmFmdGVyQWN0aW9uJiZ0aGlzLm9wdGlvbnMuYWZ0ZXJBY3Rpb24uYXBwbHkodGhpcyxcclxuW3RoaXMuJGVsZW1dKX0sdXBkYXRlVmFyczpmdW5jdGlvbigpe1wiZnVuY3Rpb25cIj09PXR5cGVvZiB0aGlzLm9wdGlvbnMuYmVmb3JlVXBkYXRlJiZ0aGlzLm9wdGlvbnMuYmVmb3JlVXBkYXRlLmFwcGx5KHRoaXMsW3RoaXMuJGVsZW1dKTt0aGlzLndhdGNoVmlzaWJpbGl0eSgpO3RoaXMudXBkYXRlSXRlbXMoKTt0aGlzLmNhbGN1bGF0ZUFsbCgpO3RoaXMudXBkYXRlUG9zaXRpb24oKTt0aGlzLnVwZGF0ZUNvbnRyb2xzKCk7dGhpcy5lYWNoTW92ZVVwZGF0ZSgpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiB0aGlzLm9wdGlvbnMuYWZ0ZXJVcGRhdGUmJnRoaXMub3B0aW9ucy5hZnRlclVwZGF0ZS5hcHBseSh0aGlzLFt0aGlzLiRlbGVtXSl9LHJlbG9hZDpmdW5jdGlvbigpe3ZhciBhPXRoaXM7Zy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YS51cGRhdGVWYXJzKCl9LDApfSx3YXRjaFZpc2liaWxpdHk6ZnVuY3Rpb24oKXt2YXIgYT10aGlzO2lmKCExPT09YS4kZWxlbS5pcyhcIjp2aXNpYmxlXCIpKWEuJGVsZW0uY3NzKHtvcGFjaXR5OjB9KSxcclxuZy5jbGVhckludGVydmFsKGEuYXV0b1BsYXlJbnRlcnZhbCksZy5jbGVhckludGVydmFsKGEuY2hlY2tWaXNpYmxlKTtlbHNlIHJldHVybiExO2EuY2hlY2tWaXNpYmxlPWcuc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXthLiRlbGVtLmlzKFwiOnZpc2libGVcIikmJihhLnJlbG9hZCgpLGEuJGVsZW0uYW5pbWF0ZSh7b3BhY2l0eToxfSwyMDApLGcuY2xlYXJJbnRlcnZhbChhLmNoZWNrVmlzaWJsZSkpfSw1MDApfSx3cmFwSXRlbXM6ZnVuY3Rpb24oKXt0aGlzLiR1c2VySXRlbXMud3JhcEFsbCgnPGRpdiBjbGFzcz1cIm93bC13cmFwcGVyXCI+Jykud3JhcCgnPGRpdiBjbGFzcz1cIm93bC1pdGVtXCI+PC9kaXY+Jyk7dGhpcy4kZWxlbS5maW5kKFwiLm93bC13cmFwcGVyXCIpLndyYXAoJzxkaXYgY2xhc3M9XCJvd2wtd3JhcHBlci1vdXRlclwiPicpO3RoaXMud3JhcHBlck91dGVyPXRoaXMuJGVsZW0uZmluZChcIi5vd2wtd3JhcHBlci1vdXRlclwiKTt0aGlzLiRlbGVtLmNzcyhcImRpc3BsYXlcIixcImJsb2NrXCIpfSxcclxuYmFzZUNsYXNzOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy4kZWxlbS5oYXNDbGFzcyh0aGlzLm9wdGlvbnMuYmFzZUNsYXNzKSxiPXRoaXMuJGVsZW0uaGFzQ2xhc3ModGhpcy5vcHRpb25zLnRoZW1lKTthfHx0aGlzLiRlbGVtLmFkZENsYXNzKHRoaXMub3B0aW9ucy5iYXNlQ2xhc3MpO2J8fHRoaXMuJGVsZW0uYWRkQ2xhc3ModGhpcy5vcHRpb25zLnRoZW1lKX0sdXBkYXRlSXRlbXM6ZnVuY3Rpb24oKXt2YXIgYSxiO2lmKCExPT09dGhpcy5vcHRpb25zLnJlc3BvbnNpdmUpcmV0dXJuITE7aWYoITA9PT10aGlzLm9wdGlvbnMuc2luZ2xlSXRlbSlyZXR1cm4gdGhpcy5vcHRpb25zLml0ZW1zPXRoaXMub3JpZ25hbEl0ZW1zPTEsdGhpcy5vcHRpb25zLml0ZW1zQ3VzdG9tPSExLHRoaXMub3B0aW9ucy5pdGVtc0Rlc2t0b3A9ITEsdGhpcy5vcHRpb25zLml0ZW1zRGVza3RvcFNtYWxsPSExLHRoaXMub3B0aW9ucy5pdGVtc1RhYmxldD0hMSx0aGlzLm9wdGlvbnMuaXRlbXNUYWJsZXRTbWFsbD1cclxuITEsdGhpcy5vcHRpb25zLml0ZW1zTW9iaWxlPSExO2E9Zih0aGlzLm9wdGlvbnMucmVzcG9uc2l2ZUJhc2VXaWR0aCkud2lkdGgoKTthPih0aGlzLm9wdGlvbnMuaXRlbXNEZXNrdG9wWzBdfHx0aGlzLm9yaWduYWxJdGVtcykmJih0aGlzLm9wdGlvbnMuaXRlbXM9dGhpcy5vcmlnbmFsSXRlbXMpO2lmKCExIT09dGhpcy5vcHRpb25zLml0ZW1zQ3VzdG9tKWZvcih0aGlzLm9wdGlvbnMuaXRlbXNDdXN0b20uc29ydChmdW5jdGlvbihhLGIpe3JldHVybiBhWzBdLWJbMF19KSxiPTA7Yjx0aGlzLm9wdGlvbnMuaXRlbXNDdXN0b20ubGVuZ3RoO2IrPTEpdGhpcy5vcHRpb25zLml0ZW1zQ3VzdG9tW2JdWzBdPD1hJiYodGhpcy5vcHRpb25zLml0ZW1zPXRoaXMub3B0aW9ucy5pdGVtc0N1c3RvbVtiXVsxXSk7ZWxzZSBhPD10aGlzLm9wdGlvbnMuaXRlbXNEZXNrdG9wWzBdJiYhMSE9PXRoaXMub3B0aW9ucy5pdGVtc0Rlc2t0b3AmJih0aGlzLm9wdGlvbnMuaXRlbXM9dGhpcy5vcHRpb25zLml0ZW1zRGVza3RvcFsxXSksXHJcbmE8PXRoaXMub3B0aW9ucy5pdGVtc0Rlc2t0b3BTbWFsbFswXSYmITEhPT10aGlzLm9wdGlvbnMuaXRlbXNEZXNrdG9wU21hbGwmJih0aGlzLm9wdGlvbnMuaXRlbXM9dGhpcy5vcHRpb25zLml0ZW1zRGVza3RvcFNtYWxsWzFdKSxhPD10aGlzLm9wdGlvbnMuaXRlbXNUYWJsZXRbMF0mJiExIT09dGhpcy5vcHRpb25zLml0ZW1zVGFibGV0JiYodGhpcy5vcHRpb25zLml0ZW1zPXRoaXMub3B0aW9ucy5pdGVtc1RhYmxldFsxXSksYTw9dGhpcy5vcHRpb25zLml0ZW1zVGFibGV0U21hbGxbMF0mJiExIT09dGhpcy5vcHRpb25zLml0ZW1zVGFibGV0U21hbGwmJih0aGlzLm9wdGlvbnMuaXRlbXM9dGhpcy5vcHRpb25zLml0ZW1zVGFibGV0U21hbGxbMV0pLGE8PXRoaXMub3B0aW9ucy5pdGVtc01vYmlsZVswXSYmITEhPT10aGlzLm9wdGlvbnMuaXRlbXNNb2JpbGUmJih0aGlzLm9wdGlvbnMuaXRlbXM9dGhpcy5vcHRpb25zLml0ZW1zTW9iaWxlWzFdKTt0aGlzLm9wdGlvbnMuaXRlbXM+dGhpcy5pdGVtc0Ftb3VudCYmXHJcbiEwPT09dGhpcy5vcHRpb25zLml0ZW1zU2NhbGVVcCYmKHRoaXMub3B0aW9ucy5pdGVtcz10aGlzLml0ZW1zQW1vdW50KX0scmVzcG9uc2U6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLGIsZTtpZighMCE9PWEub3B0aW9ucy5yZXNwb25zaXZlKXJldHVybiExO2U9ZihnKS53aWR0aCgpO2EucmVzaXplcj1mdW5jdGlvbigpe2YoZykud2lkdGgoKSE9PWUmJighMSE9PWEub3B0aW9ucy5hdXRvUGxheSYmZy5jbGVhckludGVydmFsKGEuYXV0b1BsYXlJbnRlcnZhbCksZy5jbGVhclRpbWVvdXQoYiksYj1nLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtlPWYoZykud2lkdGgoKTthLnVwZGF0ZVZhcnMoKX0sYS5vcHRpb25zLnJlc3BvbnNpdmVSZWZyZXNoUmF0ZSkpfTtmKGcpLnJlc2l6ZShhLnJlc2l6ZXIpfSx1cGRhdGVQb3NpdGlvbjpmdW5jdGlvbigpe3RoaXMuanVtcFRvKHRoaXMuY3VycmVudEl0ZW0pOyExIT09dGhpcy5vcHRpb25zLmF1dG9QbGF5JiZ0aGlzLmNoZWNrQXAoKX0sYXBwZW5kSXRlbXNTaXplczpmdW5jdGlvbigpe3ZhciBhPVxyXG50aGlzLGI9MCxlPWEuaXRlbXNBbW91bnQtYS5vcHRpb25zLml0ZW1zO2EuJG93bEl0ZW1zLmVhY2goZnVuY3Rpb24oYyl7dmFyIGQ9Zih0aGlzKTtkLmNzcyh7d2lkdGg6YS5pdGVtV2lkdGh9KS5kYXRhKFwib3dsLWl0ZW1cIixOdW1iZXIoYykpO2lmKDA9PT1jJWEub3B0aW9ucy5pdGVtc3x8Yz09PWUpYz5lfHwoYis9MSk7ZC5kYXRhKFwib3dsLXJvdW5kUGFnZXNcIixiKX0pfSxhcHBlbmRXcmFwcGVyU2l6ZXM6ZnVuY3Rpb24oKXt0aGlzLiRvd2xXcmFwcGVyLmNzcyh7d2lkdGg6dGhpcy4kb3dsSXRlbXMubGVuZ3RoKnRoaXMuaXRlbVdpZHRoKjIsbGVmdDowfSk7dGhpcy5hcHBlbmRJdGVtc1NpemVzKCl9LGNhbGN1bGF0ZUFsbDpmdW5jdGlvbigpe3RoaXMuY2FsY3VsYXRlV2lkdGgoKTt0aGlzLmFwcGVuZFdyYXBwZXJTaXplcygpO3RoaXMubG9vcHMoKTt0aGlzLm1heCgpfSxjYWxjdWxhdGVXaWR0aDpmdW5jdGlvbigpe3RoaXMuaXRlbVdpZHRoPU1hdGgucm91bmQodGhpcy4kZWxlbS53aWR0aCgpL1xyXG50aGlzLm9wdGlvbnMuaXRlbXMpfSxtYXg6ZnVuY3Rpb24oKXt2YXIgYT0tMSoodGhpcy5pdGVtc0Ftb3VudCp0aGlzLml0ZW1XaWR0aC10aGlzLm9wdGlvbnMuaXRlbXMqdGhpcy5pdGVtV2lkdGgpO3RoaXMub3B0aW9ucy5pdGVtcz50aGlzLml0ZW1zQW1vdW50P3RoaXMubWF4aW11bVBpeGVscz1hPXRoaXMubWF4aW11bUl0ZW09MDoodGhpcy5tYXhpbXVtSXRlbT10aGlzLml0ZW1zQW1vdW50LXRoaXMub3B0aW9ucy5pdGVtcyx0aGlzLm1heGltdW1QaXhlbHM9YSk7cmV0dXJuIGF9LG1pbjpmdW5jdGlvbigpe3JldHVybiAwfSxsb29wczpmdW5jdGlvbigpe3ZhciBhPTAsYj0wLGUsYzt0aGlzLnBvc2l0aW9uc0luQXJyYXk9WzBdO3RoaXMucGFnZXNJbkFycmF5PVtdO2ZvcihlPTA7ZTx0aGlzLml0ZW1zQW1vdW50O2UrPTEpYis9dGhpcy5pdGVtV2lkdGgsdGhpcy5wb3NpdGlvbnNJbkFycmF5LnB1c2goLWIpLCEwPT09dGhpcy5vcHRpb25zLnNjcm9sbFBlclBhZ2UmJihjPWYodGhpcy4kb3dsSXRlbXNbZV0pLFxyXG5jPWMuZGF0YShcIm93bC1yb3VuZFBhZ2VzXCIpLGMhPT1hJiYodGhpcy5wYWdlc0luQXJyYXlbYV09dGhpcy5wb3NpdGlvbnNJbkFycmF5W2VdLGE9YykpfSxidWlsZENvbnRyb2xzOmZ1bmN0aW9uKCl7aWYoITA9PT10aGlzLm9wdGlvbnMubmF2aWdhdGlvbnx8ITA9PT10aGlzLm9wdGlvbnMucGFnaW5hdGlvbil0aGlzLm93bENvbnRyb2xzPWYoJzxkaXYgY2xhc3M9XCJvd2wtY29udHJvbHNcIi8+JykudG9nZ2xlQ2xhc3MoXCJjbGlja2FibGVcIiwhdGhpcy5icm93c2VyLmlzVG91Y2gpLmFwcGVuZFRvKHRoaXMuJGVsZW0pOyEwPT09dGhpcy5vcHRpb25zLnBhZ2luYXRpb24mJnRoaXMuYnVpbGRQYWdpbmF0aW9uKCk7ITA9PT10aGlzLm9wdGlvbnMubmF2aWdhdGlvbiYmdGhpcy5idWlsZEJ1dHRvbnMoKX0sYnVpbGRCdXR0b25zOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcyxiPWYoJzxkaXYgY2xhc3M9XCJvd2wtYnV0dG9uc1wiLz4nKTthLm93bENvbnRyb2xzLmFwcGVuZChiKTthLmJ1dHRvblByZXY9XHJcbmYoXCI8ZGl2Lz5cIix7XCJjbGFzc1wiOlwib3dsLXByZXZcIixodG1sOmEub3B0aW9ucy5uYXZpZ2F0aW9uVGV4dFswXXx8XCJcIn0pO2EuYnV0dG9uTmV4dD1mKFwiPGRpdi8+XCIse1wiY2xhc3NcIjpcIm93bC1uZXh0XCIsaHRtbDphLm9wdGlvbnMubmF2aWdhdGlvblRleHRbMV18fFwiXCJ9KTtiLmFwcGVuZChhLmJ1dHRvblByZXYpLmFwcGVuZChhLmJ1dHRvbk5leHQpO2Iub24oXCJ0b3VjaHN0YXJ0Lm93bENvbnRyb2xzIG1vdXNlZG93bi5vd2xDb250cm9sc1wiLCdkaXZbY2xhc3NePVwib3dsXCJdJyxmdW5jdGlvbihhKXthLnByZXZlbnREZWZhdWx0KCl9KTtiLm9uKFwidG91Y2hlbmQub3dsQ29udHJvbHMgbW91c2V1cC5vd2xDb250cm9sc1wiLCdkaXZbY2xhc3NePVwib3dsXCJdJyxmdW5jdGlvbihiKXtiLnByZXZlbnREZWZhdWx0KCk7Zih0aGlzKS5oYXNDbGFzcyhcIm93bC1uZXh0XCIpP2EubmV4dCgpOmEucHJldigpfSl9LGJ1aWxkUGFnaW5hdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXM7YS5wYWdpbmF0aW9uV3JhcHBlcj1cclxuZignPGRpdiBjbGFzcz1cIm93bC1wYWdpbmF0aW9uXCIvPicpO2Eub3dsQ29udHJvbHMuYXBwZW5kKGEucGFnaW5hdGlvbldyYXBwZXIpO2EucGFnaW5hdGlvbldyYXBwZXIub24oXCJ0b3VjaGVuZC5vd2xDb250cm9scyBtb3VzZXVwLm93bENvbnRyb2xzXCIsXCIub3dsLXBhZ2VcIixmdW5jdGlvbihiKXtiLnByZXZlbnREZWZhdWx0KCk7TnVtYmVyKGYodGhpcykuZGF0YShcIm93bC1wYWdlXCIpKSE9PWEuY3VycmVudEl0ZW0mJmEuZ29UbyhOdW1iZXIoZih0aGlzKS5kYXRhKFwib3dsLXBhZ2VcIikpLCEwKX0pfSx1cGRhdGVQYWdpbmF0aW9uOmZ1bmN0aW9uKCl7dmFyIGEsYixlLGMsZCxnO2lmKCExPT09dGhpcy5vcHRpb25zLnBhZ2luYXRpb24pcmV0dXJuITE7dGhpcy5wYWdpbmF0aW9uV3JhcHBlci5odG1sKFwiXCIpO2E9MDtiPXRoaXMuaXRlbXNBbW91bnQtdGhpcy5pdGVtc0Ftb3VudCV0aGlzLm9wdGlvbnMuaXRlbXM7Zm9yKGM9MDtjPHRoaXMuaXRlbXNBbW91bnQ7Yys9MSkwPT09YyV0aGlzLm9wdGlvbnMuaXRlbXMmJlxyXG4oYSs9MSxiPT09YyYmKGU9dGhpcy5pdGVtc0Ftb3VudC10aGlzLm9wdGlvbnMuaXRlbXMpLGQ9ZihcIjxkaXYvPlwiLHtcImNsYXNzXCI6XCJvd2wtcGFnZVwifSksZz1mKFwiPHNwYW4+PC9zcGFuPlwiLHt0ZXh0OiEwPT09dGhpcy5vcHRpb25zLnBhZ2luYXRpb25OdW1iZXJzP2E6XCJcIixcImNsYXNzXCI6ITA9PT10aGlzLm9wdGlvbnMucGFnaW5hdGlvbk51bWJlcnM/XCJvd2wtbnVtYmVyc1wiOlwiXCJ9KSxkLmFwcGVuZChnKSxkLmRhdGEoXCJvd2wtcGFnZVwiLGI9PT1jP2U6YyksZC5kYXRhKFwib3dsLXJvdW5kUGFnZXNcIixhKSx0aGlzLnBhZ2luYXRpb25XcmFwcGVyLmFwcGVuZChkKSk7dGhpcy5jaGVja1BhZ2luYXRpb24oKX0sY2hlY2tQYWdpbmF0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcztpZighMT09PWEub3B0aW9ucy5wYWdpbmF0aW9uKXJldHVybiExO2EucGFnaW5hdGlvbldyYXBwZXIuZmluZChcIi5vd2wtcGFnZVwiKS5lYWNoKGZ1bmN0aW9uKCl7Zih0aGlzKS5kYXRhKFwib3dsLXJvdW5kUGFnZXNcIik9PT1cclxuZihhLiRvd2xJdGVtc1thLmN1cnJlbnRJdGVtXSkuZGF0YShcIm93bC1yb3VuZFBhZ2VzXCIpJiYoYS5wYWdpbmF0aW9uV3JhcHBlci5maW5kKFwiLm93bC1wYWdlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLGYodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIikpfSl9LGNoZWNrTmF2aWdhdGlvbjpmdW5jdGlvbigpe2lmKCExPT09dGhpcy5vcHRpb25zLm5hdmlnYXRpb24pcmV0dXJuITE7ITE9PT10aGlzLm9wdGlvbnMucmV3aW5kTmF2JiYoMD09PXRoaXMuY3VycmVudEl0ZW0mJjA9PT10aGlzLm1heGltdW1JdGVtPyh0aGlzLmJ1dHRvblByZXYuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKSx0aGlzLmJ1dHRvbk5leHQuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKSk6MD09PXRoaXMuY3VycmVudEl0ZW0mJjAhPT10aGlzLm1heGltdW1JdGVtPyh0aGlzLmJ1dHRvblByZXYuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKSx0aGlzLmJ1dHRvbk5leHQucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKSk6dGhpcy5jdXJyZW50SXRlbT09PVxyXG50aGlzLm1heGltdW1JdGVtPyh0aGlzLmJ1dHRvblByZXYucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKSx0aGlzLmJ1dHRvbk5leHQuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKSk6MCE9PXRoaXMuY3VycmVudEl0ZW0mJnRoaXMuY3VycmVudEl0ZW0hPT10aGlzLm1heGltdW1JdGVtJiYodGhpcy5idXR0b25QcmV2LnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIiksdGhpcy5idXR0b25OZXh0LnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIikpKX0sdXBkYXRlQ29udHJvbHM6ZnVuY3Rpb24oKXt0aGlzLnVwZGF0ZVBhZ2luYXRpb24oKTt0aGlzLmNoZWNrTmF2aWdhdGlvbigpO3RoaXMub3dsQ29udHJvbHMmJih0aGlzLm9wdGlvbnMuaXRlbXM+PXRoaXMuaXRlbXNBbW91bnQ/dGhpcy5vd2xDb250cm9scy5oaWRlKCk6dGhpcy5vd2xDb250cm9scy5zaG93KCkpfSxkZXN0cm95Q29udHJvbHM6ZnVuY3Rpb24oKXt0aGlzLm93bENvbnRyb2xzJiZ0aGlzLm93bENvbnRyb2xzLnJlbW92ZSgpfSxuZXh0OmZ1bmN0aW9uKGEpe2lmKHRoaXMuaXNUcmFuc2l0aW9uKXJldHVybiExO1xyXG50aGlzLmN1cnJlbnRJdGVtKz0hMD09PXRoaXMub3B0aW9ucy5zY3JvbGxQZXJQYWdlP3RoaXMub3B0aW9ucy5pdGVtczoxO2lmKHRoaXMuY3VycmVudEl0ZW0+dGhpcy5tYXhpbXVtSXRlbSsoITA9PT10aGlzLm9wdGlvbnMuc2Nyb2xsUGVyUGFnZT90aGlzLm9wdGlvbnMuaXRlbXMtMTowKSlpZighMD09PXRoaXMub3B0aW9ucy5yZXdpbmROYXYpdGhpcy5jdXJyZW50SXRlbT0wLGE9XCJyZXdpbmRcIjtlbHNlIHJldHVybiB0aGlzLmN1cnJlbnRJdGVtPXRoaXMubWF4aW11bUl0ZW0sITE7dGhpcy5nb1RvKHRoaXMuY3VycmVudEl0ZW0sYSl9LHByZXY6ZnVuY3Rpb24oYSl7aWYodGhpcy5pc1RyYW5zaXRpb24pcmV0dXJuITE7dGhpcy5jdXJyZW50SXRlbT0hMD09PXRoaXMub3B0aW9ucy5zY3JvbGxQZXJQYWdlJiYwPHRoaXMuY3VycmVudEl0ZW0mJnRoaXMuY3VycmVudEl0ZW08dGhpcy5vcHRpb25zLml0ZW1zPzA6dGhpcy5jdXJyZW50SXRlbS0oITA9PT10aGlzLm9wdGlvbnMuc2Nyb2xsUGVyUGFnZT9cclxudGhpcy5vcHRpb25zLml0ZW1zOjEpO2lmKDA+dGhpcy5jdXJyZW50SXRlbSlpZighMD09PXRoaXMub3B0aW9ucy5yZXdpbmROYXYpdGhpcy5jdXJyZW50SXRlbT10aGlzLm1heGltdW1JdGVtLGE9XCJyZXdpbmRcIjtlbHNlIHJldHVybiB0aGlzLmN1cnJlbnRJdGVtPTAsITE7dGhpcy5nb1RvKHRoaXMuY3VycmVudEl0ZW0sYSl9LGdvVG86ZnVuY3Rpb24oYSxiLGUpe3ZhciBjPXRoaXM7aWYoYy5pc1RyYW5zaXRpb24pcmV0dXJuITE7XCJmdW5jdGlvblwiPT09dHlwZW9mIGMub3B0aW9ucy5iZWZvcmVNb3ZlJiZjLm9wdGlvbnMuYmVmb3JlTW92ZS5hcHBseSh0aGlzLFtjLiRlbGVtXSk7YT49Yy5tYXhpbXVtSXRlbT9hPWMubWF4aW11bUl0ZW06MD49YSYmKGE9MCk7Yy5jdXJyZW50SXRlbT1jLm93bC5jdXJyZW50SXRlbT1hO2lmKCExIT09Yy5vcHRpb25zLnRyYW5zaXRpb25TdHlsZSYmXCJkcmFnXCIhPT1lJiYxPT09Yy5vcHRpb25zLml0ZW1zJiYhMD09PWMuYnJvd3Nlci5zdXBwb3J0M2QpcmV0dXJuIGMuc3dhcFNwZWVkKDApLFxyXG4hMD09PWMuYnJvd3Nlci5zdXBwb3J0M2Q/Yy50cmFuc2l0aW9uM2QoYy5wb3NpdGlvbnNJbkFycmF5W2FdKTpjLmNzczJzbGlkZShjLnBvc2l0aW9uc0luQXJyYXlbYV0sMSksYy5hZnRlckdvKCksYy5zaW5nbGVJdGVtVHJhbnNpdGlvbigpLCExO2E9Yy5wb3NpdGlvbnNJbkFycmF5W2FdOyEwPT09Yy5icm93c2VyLnN1cHBvcnQzZD8oYy5pc0NzczNGaW5pc2g9ITEsITA9PT1iPyhjLnN3YXBTcGVlZChcInBhZ2luYXRpb25TcGVlZFwiKSxnLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtjLmlzQ3NzM0ZpbmlzaD0hMH0sYy5vcHRpb25zLnBhZ2luYXRpb25TcGVlZCkpOlwicmV3aW5kXCI9PT1iPyhjLnN3YXBTcGVlZChjLm9wdGlvbnMucmV3aW5kU3BlZWQpLGcuc2V0VGltZW91dChmdW5jdGlvbigpe2MuaXNDc3MzRmluaXNoPSEwfSxjLm9wdGlvbnMucmV3aW5kU3BlZWQpKTooYy5zd2FwU3BlZWQoXCJzbGlkZVNwZWVkXCIpLGcuc2V0VGltZW91dChmdW5jdGlvbigpe2MuaXNDc3MzRmluaXNoPSEwfSxcclxuYy5vcHRpb25zLnNsaWRlU3BlZWQpKSxjLnRyYW5zaXRpb24zZChhKSk6ITA9PT1iP2MuY3NzMnNsaWRlKGEsYy5vcHRpb25zLnBhZ2luYXRpb25TcGVlZCk6XCJyZXdpbmRcIj09PWI/Yy5jc3Myc2xpZGUoYSxjLm9wdGlvbnMucmV3aW5kU3BlZWQpOmMuY3NzMnNsaWRlKGEsYy5vcHRpb25zLnNsaWRlU3BlZWQpO2MuYWZ0ZXJHbygpfSxqdW1wVG86ZnVuY3Rpb24oYSl7XCJmdW5jdGlvblwiPT09dHlwZW9mIHRoaXMub3B0aW9ucy5iZWZvcmVNb3ZlJiZ0aGlzLm9wdGlvbnMuYmVmb3JlTW92ZS5hcHBseSh0aGlzLFt0aGlzLiRlbGVtXSk7YT49dGhpcy5tYXhpbXVtSXRlbXx8LTE9PT1hP2E9dGhpcy5tYXhpbXVtSXRlbTowPj1hJiYoYT0wKTt0aGlzLnN3YXBTcGVlZCgwKTshMD09PXRoaXMuYnJvd3Nlci5zdXBwb3J0M2Q/dGhpcy50cmFuc2l0aW9uM2QodGhpcy5wb3NpdGlvbnNJbkFycmF5W2FdKTp0aGlzLmNzczJzbGlkZSh0aGlzLnBvc2l0aW9uc0luQXJyYXlbYV0sMSk7dGhpcy5jdXJyZW50SXRlbT1cclxudGhpcy5vd2wuY3VycmVudEl0ZW09YTt0aGlzLmFmdGVyR28oKX0sYWZ0ZXJHbzpmdW5jdGlvbigpe3RoaXMucHJldkFyci5wdXNoKHRoaXMuY3VycmVudEl0ZW0pO3RoaXMucHJldkl0ZW09dGhpcy5vd2wucHJldkl0ZW09dGhpcy5wcmV2QXJyW3RoaXMucHJldkFyci5sZW5ndGgtMl07dGhpcy5wcmV2QXJyLnNoaWZ0KDApO3RoaXMucHJldkl0ZW0hPT10aGlzLmN1cnJlbnRJdGVtJiYodGhpcy5jaGVja1BhZ2luYXRpb24oKSx0aGlzLmNoZWNrTmF2aWdhdGlvbigpLHRoaXMuZWFjaE1vdmVVcGRhdGUoKSwhMSE9PXRoaXMub3B0aW9ucy5hdXRvUGxheSYmdGhpcy5jaGVja0FwKCkpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiB0aGlzLm9wdGlvbnMuYWZ0ZXJNb3ZlJiZ0aGlzLnByZXZJdGVtIT09dGhpcy5jdXJyZW50SXRlbSYmdGhpcy5vcHRpb25zLmFmdGVyTW92ZS5hcHBseSh0aGlzLFt0aGlzLiRlbGVtXSl9LHN0b3A6ZnVuY3Rpb24oKXt0aGlzLmFwU3RhdHVzPVwic3RvcFwiO2cuY2xlYXJJbnRlcnZhbCh0aGlzLmF1dG9QbGF5SW50ZXJ2YWwpfSxcclxuY2hlY2tBcDpmdW5jdGlvbigpe1wic3RvcFwiIT09dGhpcy5hcFN0YXR1cyYmdGhpcy5wbGF5KCl9LHBsYXk6ZnVuY3Rpb24oKXt2YXIgYT10aGlzO2EuYXBTdGF0dXM9XCJwbGF5XCI7aWYoITE9PT1hLm9wdGlvbnMuYXV0b1BsYXkpcmV0dXJuITE7Zy5jbGVhckludGVydmFsKGEuYXV0b1BsYXlJbnRlcnZhbCk7YS5hdXRvUGxheUludGVydmFsPWcuc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXthLm5leHQoITApfSxhLm9wdGlvbnMuYXV0b1BsYXkpfSxzd2FwU3BlZWQ6ZnVuY3Rpb24oYSl7XCJzbGlkZVNwZWVkXCI9PT1hP3RoaXMuJG93bFdyYXBwZXIuY3NzKHRoaXMuYWRkQ3NzU3BlZWQodGhpcy5vcHRpb25zLnNsaWRlU3BlZWQpKTpcInBhZ2luYXRpb25TcGVlZFwiPT09YT90aGlzLiRvd2xXcmFwcGVyLmNzcyh0aGlzLmFkZENzc1NwZWVkKHRoaXMub3B0aW9ucy5wYWdpbmF0aW9uU3BlZWQpKTpcInN0cmluZ1wiIT09dHlwZW9mIGEmJnRoaXMuJG93bFdyYXBwZXIuY3NzKHRoaXMuYWRkQ3NzU3BlZWQoYSkpfSxcclxuYWRkQ3NzU3BlZWQ6ZnVuY3Rpb24oYSl7cmV0dXJue1wiLXdlYmtpdC10cmFuc2l0aW9uXCI6XCJhbGwgXCIrYStcIm1zIGVhc2VcIixcIi1tb3otdHJhbnNpdGlvblwiOlwiYWxsIFwiK2ErXCJtcyBlYXNlXCIsXCItby10cmFuc2l0aW9uXCI6XCJhbGwgXCIrYStcIm1zIGVhc2VcIix0cmFuc2l0aW9uOlwiYWxsIFwiK2ErXCJtcyBlYXNlXCJ9fSxyZW1vdmVUcmFuc2l0aW9uOmZ1bmN0aW9uKCl7cmV0dXJue1wiLXdlYmtpdC10cmFuc2l0aW9uXCI6XCJcIixcIi1tb3otdHJhbnNpdGlvblwiOlwiXCIsXCItby10cmFuc2l0aW9uXCI6XCJcIix0cmFuc2l0aW9uOlwiXCJ9fSxkb1RyYW5zbGF0ZTpmdW5jdGlvbihhKXtyZXR1cm57XCItd2Via2l0LXRyYW5zZm9ybVwiOlwidHJhbnNsYXRlM2QoXCIrYStcInB4LCAwcHgsIDBweClcIixcIi1tb3otdHJhbnNmb3JtXCI6XCJ0cmFuc2xhdGUzZChcIithK1wicHgsIDBweCwgMHB4KVwiLFwiLW8tdHJhbnNmb3JtXCI6XCJ0cmFuc2xhdGUzZChcIithK1wicHgsIDBweCwgMHB4KVwiLFwiLW1zLXRyYW5zZm9ybVwiOlwidHJhbnNsYXRlM2QoXCIrXHJcbmErXCJweCwgMHB4LCAwcHgpXCIsdHJhbnNmb3JtOlwidHJhbnNsYXRlM2QoXCIrYStcInB4LCAwcHgsMHB4KVwifX0sdHJhbnNpdGlvbjNkOmZ1bmN0aW9uKGEpe3RoaXMuJG93bFdyYXBwZXIuY3NzKHRoaXMuZG9UcmFuc2xhdGUoYSkpfSxjc3MybW92ZTpmdW5jdGlvbihhKXt0aGlzLiRvd2xXcmFwcGVyLmNzcyh7bGVmdDphfSl9LGNzczJzbGlkZTpmdW5jdGlvbihhLGIpe3ZhciBlPXRoaXM7ZS5pc0Nzc0ZpbmlzaD0hMTtlLiRvd2xXcmFwcGVyLnN0b3AoITAsITApLmFuaW1hdGUoe2xlZnQ6YX0se2R1cmF0aW9uOmJ8fGUub3B0aW9ucy5zbGlkZVNwZWVkLGNvbXBsZXRlOmZ1bmN0aW9uKCl7ZS5pc0Nzc0ZpbmlzaD0hMH19KX0sY2hlY2tCcm93c2VyOmZ1bmN0aW9uKCl7dmFyIGE9ay5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2Euc3R5bGUuY3NzVGV4dD1cIiAgLW1vei10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7IC1tcy10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7IC1vLXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTsgLXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7IHRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KVwiO1xyXG5hPWEuc3R5bGUuY3NzVGV4dC5tYXRjaCgvdHJhbnNsYXRlM2RcXCgwcHgsIDBweCwgMHB4XFwpL2cpO3RoaXMuYnJvd3Nlcj17c3VwcG9ydDNkOm51bGwhPT1hJiYxPT09YS5sZW5ndGgsaXNUb3VjaDpcIm9udG91Y2hzdGFydFwiaW4gZ3x8Zy5uYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50c319LG1vdmVFdmVudHM6ZnVuY3Rpb24oKXtpZighMSE9PXRoaXMub3B0aW9ucy5tb3VzZURyYWd8fCExIT09dGhpcy5vcHRpb25zLnRvdWNoRHJhZyl0aGlzLmdlc3R1cmVzKCksdGhpcy5kaXNhYmxlZEV2ZW50cygpfSxldmVudFR5cGVzOmZ1bmN0aW9uKCl7dmFyIGE9W1wic1wiLFwiZVwiLFwieFwiXTt0aGlzLmV2X3R5cGVzPXt9OyEwPT09dGhpcy5vcHRpb25zLm1vdXNlRHJhZyYmITA9PT10aGlzLm9wdGlvbnMudG91Y2hEcmFnP2E9W1widG91Y2hzdGFydC5vd2wgbW91c2Vkb3duLm93bFwiLFwidG91Y2htb3ZlLm93bCBtb3VzZW1vdmUub3dsXCIsXCJ0b3VjaGVuZC5vd2wgdG91Y2hjYW5jZWwub3dsIG1vdXNldXAub3dsXCJdOlxyXG4hMT09PXRoaXMub3B0aW9ucy5tb3VzZURyYWcmJiEwPT09dGhpcy5vcHRpb25zLnRvdWNoRHJhZz9hPVtcInRvdWNoc3RhcnQub3dsXCIsXCJ0b3VjaG1vdmUub3dsXCIsXCJ0b3VjaGVuZC5vd2wgdG91Y2hjYW5jZWwub3dsXCJdOiEwPT09dGhpcy5vcHRpb25zLm1vdXNlRHJhZyYmITE9PT10aGlzLm9wdGlvbnMudG91Y2hEcmFnJiYoYT1bXCJtb3VzZWRvd24ub3dsXCIsXCJtb3VzZW1vdmUub3dsXCIsXCJtb3VzZXVwLm93bFwiXSk7dGhpcy5ldl90eXBlcy5zdGFydD1hWzBdO3RoaXMuZXZfdHlwZXMubW92ZT1hWzFdO3RoaXMuZXZfdHlwZXMuZW5kPWFbMl19LGRpc2FibGVkRXZlbnRzOmZ1bmN0aW9uKCl7dGhpcy4kZWxlbS5vbihcImRyYWdzdGFydC5vd2xcIixmdW5jdGlvbihhKXthLnByZXZlbnREZWZhdWx0KCl9KTt0aGlzLiRlbGVtLm9uKFwibW91c2Vkb3duLmRpc2FibGVUZXh0U2VsZWN0XCIsZnVuY3Rpb24oYSl7cmV0dXJuIGYoYS50YXJnZXQpLmlzKFwiaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QsIG9wdGlvblwiKX0pfSxcclxuZ2VzdHVyZXM6ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGEpe2lmKHZvaWQgMCE9PWEudG91Y2hlcylyZXR1cm57eDphLnRvdWNoZXNbMF0ucGFnZVgseTphLnRvdWNoZXNbMF0ucGFnZVl9O2lmKHZvaWQgMD09PWEudG91Y2hlcyl7aWYodm9pZCAwIT09YS5wYWdlWClyZXR1cm57eDphLnBhZ2VYLHk6YS5wYWdlWX07aWYodm9pZCAwPT09YS5wYWdlWClyZXR1cm57eDphLmNsaWVudFgseTphLmNsaWVudFl9fX1mdW5jdGlvbiBiKGEpe1wib25cIj09PWE/KGYoaykub24oZC5ldl90eXBlcy5tb3ZlLGUpLGYoaykub24oZC5ldl90eXBlcy5lbmQsYykpOlwib2ZmXCI9PT1hJiYoZihrKS5vZmYoZC5ldl90eXBlcy5tb3ZlKSxmKGspLm9mZihkLmV2X3R5cGVzLmVuZCkpfWZ1bmN0aW9uIGUoYil7Yj1iLm9yaWdpbmFsRXZlbnR8fGJ8fGcuZXZlbnQ7ZC5uZXdQb3NYPWEoYikueC1oLm9mZnNldFg7ZC5uZXdQb3NZPWEoYikueS1oLm9mZnNldFk7ZC5uZXdSZWxhdGl2ZVg9ZC5uZXdQb3NYLWgucmVsYXRpdmVQb3M7XHJcblwiZnVuY3Rpb25cIj09PXR5cGVvZiBkLm9wdGlvbnMuc3RhcnREcmFnZ2luZyYmITAhPT1oLmRyYWdnaW5nJiYwIT09ZC5uZXdSZWxhdGl2ZVgmJihoLmRyYWdnaW5nPSEwLGQub3B0aW9ucy5zdGFydERyYWdnaW5nLmFwcGx5KGQsW2QuJGVsZW1dKSk7KDg8ZC5uZXdSZWxhdGl2ZVh8fC04PmQubmV3UmVsYXRpdmVYKSYmITA9PT1kLmJyb3dzZXIuaXNUb3VjaCYmKHZvaWQgMCE9PWIucHJldmVudERlZmF1bHQ/Yi5wcmV2ZW50RGVmYXVsdCgpOmIucmV0dXJuVmFsdWU9ITEsaC5zbGlkaW5nPSEwKTsoMTA8ZC5uZXdQb3NZfHwtMTA+ZC5uZXdQb3NZKSYmITE9PT1oLnNsaWRpbmcmJmYoaykub2ZmKFwidG91Y2htb3ZlLm93bFwiKTtkLm5ld1Bvc1g9TWF0aC5tYXgoTWF0aC5taW4oZC5uZXdQb3NYLGQubmV3UmVsYXRpdmVYLzUpLGQubWF4aW11bVBpeGVscytkLm5ld1JlbGF0aXZlWC81KTshMD09PWQuYnJvd3Nlci5zdXBwb3J0M2Q/ZC50cmFuc2l0aW9uM2QoZC5uZXdQb3NYKTpkLmNzczJtb3ZlKGQubmV3UG9zWCl9XHJcbmZ1bmN0aW9uIGMoYSl7YT1hLm9yaWdpbmFsRXZlbnR8fGF8fGcuZXZlbnQ7dmFyIGM7YS50YXJnZXQ9YS50YXJnZXR8fGEuc3JjRWxlbWVudDtoLmRyYWdnaW5nPSExOyEwIT09ZC5icm93c2VyLmlzVG91Y2gmJmQuJG93bFdyYXBwZXIucmVtb3ZlQ2xhc3MoXCJncmFiYmluZ1wiKTtkLmRyYWdEaXJlY3Rpb249MD5kLm5ld1JlbGF0aXZlWD9kLm93bC5kcmFnRGlyZWN0aW9uPVwibGVmdFwiOmQub3dsLmRyYWdEaXJlY3Rpb249XCJyaWdodFwiOzAhPT1kLm5ld1JlbGF0aXZlWCYmKGM9ZC5nZXROZXdQb3NpdGlvbigpLGQuZ29UbyhjLCExLFwiZHJhZ1wiKSxoLnRhcmdldEVsZW1lbnQ9PT1hLnRhcmdldCYmITAhPT1kLmJyb3dzZXIuaXNUb3VjaCYmKGYoYS50YXJnZXQpLm9uKFwiY2xpY2suZGlzYWJsZVwiLGZ1bmN0aW9uKGEpe2Euc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7YS5zdG9wUHJvcGFnYXRpb24oKTthLnByZXZlbnREZWZhdWx0KCk7ZihhLnRhcmdldCkub2ZmKFwiY2xpY2suZGlzYWJsZVwiKX0pLFxyXG5hPWYuX2RhdGEoYS50YXJnZXQsXCJldmVudHNcIikuY2xpY2ssYz1hLnBvcCgpLGEuc3BsaWNlKDAsMCxjKSkpO2IoXCJvZmZcIil9dmFyIGQ9dGhpcyxoPXtvZmZzZXRYOjAsb2Zmc2V0WTowLGJhc2VFbFdpZHRoOjAscmVsYXRpdmVQb3M6MCxwb3NpdGlvbjpudWxsLG1pblN3aXBlOm51bGwsbWF4U3dpcGU6bnVsbCxzbGlkaW5nOm51bGwsZGFyZ2dpbmc6bnVsbCx0YXJnZXRFbGVtZW50Om51bGx9O2QuaXNDc3NGaW5pc2g9ITA7ZC4kZWxlbS5vbihkLmV2X3R5cGVzLnN0YXJ0LFwiLm93bC13cmFwcGVyXCIsZnVuY3Rpb24oYyl7Yz1jLm9yaWdpbmFsRXZlbnR8fGN8fGcuZXZlbnQ7dmFyIGU7aWYoMz09PWMud2hpY2gpcmV0dXJuITE7aWYoIShkLml0ZW1zQW1vdW50PD1kLm9wdGlvbnMuaXRlbXMpKXtpZighMT09PWQuaXNDc3NGaW5pc2gmJiFkLm9wdGlvbnMuZHJhZ0JlZm9yZUFuaW1GaW5pc2h8fCExPT09ZC5pc0NzczNGaW5pc2gmJiFkLm9wdGlvbnMuZHJhZ0JlZm9yZUFuaW1GaW5pc2gpcmV0dXJuITE7XHJcbiExIT09ZC5vcHRpb25zLmF1dG9QbGF5JiZnLmNsZWFySW50ZXJ2YWwoZC5hdXRvUGxheUludGVydmFsKTshMD09PWQuYnJvd3Nlci5pc1RvdWNofHxkLiRvd2xXcmFwcGVyLmhhc0NsYXNzKFwiZ3JhYmJpbmdcIil8fGQuJG93bFdyYXBwZXIuYWRkQ2xhc3MoXCJncmFiYmluZ1wiKTtkLm5ld1Bvc1g9MDtkLm5ld1JlbGF0aXZlWD0wO2YodGhpcykuY3NzKGQucmVtb3ZlVHJhbnNpdGlvbigpKTtlPWYodGhpcykucG9zaXRpb24oKTtoLnJlbGF0aXZlUG9zPWUubGVmdDtoLm9mZnNldFg9YShjKS54LWUubGVmdDtoLm9mZnNldFk9YShjKS55LWUudG9wO2IoXCJvblwiKTtoLnNsaWRpbmc9ITE7aC50YXJnZXRFbGVtZW50PWMudGFyZ2V0fHxjLnNyY0VsZW1lbnR9fSl9LGdldE5ld1Bvc2l0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5jbG9zZXN0SXRlbSgpO2E+dGhpcy5tYXhpbXVtSXRlbT9hPXRoaXMuY3VycmVudEl0ZW09dGhpcy5tYXhpbXVtSXRlbTowPD10aGlzLm5ld1Bvc1gmJih0aGlzLmN1cnJlbnRJdGVtPVxyXG5hPTApO3JldHVybiBhfSxjbG9zZXN0SXRlbTpmdW5jdGlvbigpe3ZhciBhPXRoaXMsYj0hMD09PWEub3B0aW9ucy5zY3JvbGxQZXJQYWdlP2EucGFnZXNJbkFycmF5OmEucG9zaXRpb25zSW5BcnJheSxlPWEubmV3UG9zWCxjPW51bGw7Zi5lYWNoKGIsZnVuY3Rpb24oZCxnKXtlLWEuaXRlbVdpZHRoLzIwPmJbZCsxXSYmZS1hLml0ZW1XaWR0aC8yMDxnJiZcImxlZnRcIj09PWEubW92ZURpcmVjdGlvbigpPyhjPWcsYS5jdXJyZW50SXRlbT0hMD09PWEub3B0aW9ucy5zY3JvbGxQZXJQYWdlP2YuaW5BcnJheShjLGEucG9zaXRpb25zSW5BcnJheSk6ZCk6ZSthLml0ZW1XaWR0aC8yMDxnJiZlK2EuaXRlbVdpZHRoLzIwPihiW2QrMV18fGJbZF0tYS5pdGVtV2lkdGgpJiZcInJpZ2h0XCI9PT1hLm1vdmVEaXJlY3Rpb24oKSYmKCEwPT09YS5vcHRpb25zLnNjcm9sbFBlclBhZ2U/KGM9YltkKzFdfHxiW2IubGVuZ3RoLTFdLGEuY3VycmVudEl0ZW09Zi5pbkFycmF5KGMsYS5wb3NpdGlvbnNJbkFycmF5KSk6XHJcbihjPWJbZCsxXSxhLmN1cnJlbnRJdGVtPWQrMSkpfSk7cmV0dXJuIGEuY3VycmVudEl0ZW19LG1vdmVEaXJlY3Rpb246ZnVuY3Rpb24oKXt2YXIgYTswPnRoaXMubmV3UmVsYXRpdmVYPyhhPVwicmlnaHRcIix0aGlzLnBsYXlEaXJlY3Rpb249XCJuZXh0XCIpOihhPVwibGVmdFwiLHRoaXMucGxheURpcmVjdGlvbj1cInByZXZcIik7cmV0dXJuIGF9LGN1c3RvbUV2ZW50czpmdW5jdGlvbigpe3ZhciBhPXRoaXM7YS4kZWxlbS5vbihcIm93bC5uZXh0XCIsZnVuY3Rpb24oKXthLm5leHQoKX0pO2EuJGVsZW0ub24oXCJvd2wucHJldlwiLGZ1bmN0aW9uKCl7YS5wcmV2KCl9KTthLiRlbGVtLm9uKFwib3dsLnBsYXlcIixmdW5jdGlvbihiLGUpe2Eub3B0aW9ucy5hdXRvUGxheT1lO2EucGxheSgpO2EuaG92ZXJTdGF0dXM9XCJwbGF5XCJ9KTthLiRlbGVtLm9uKFwib3dsLnN0b3BcIixmdW5jdGlvbigpe2Euc3RvcCgpO2EuaG92ZXJTdGF0dXM9XCJzdG9wXCJ9KTthLiRlbGVtLm9uKFwib3dsLmdvVG9cIixmdW5jdGlvbihiLGUpe2EuZ29UbyhlKX0pO1xyXG5hLiRlbGVtLm9uKFwib3dsLmp1bXBUb1wiLGZ1bmN0aW9uKGIsZSl7YS5qdW1wVG8oZSl9KX0sc3RvcE9uSG92ZXI6ZnVuY3Rpb24oKXt2YXIgYT10aGlzOyEwPT09YS5vcHRpb25zLnN0b3BPbkhvdmVyJiYhMCE9PWEuYnJvd3Nlci5pc1RvdWNoJiYhMSE9PWEub3B0aW9ucy5hdXRvUGxheSYmKGEuJGVsZW0ub24oXCJtb3VzZW92ZXJcIixmdW5jdGlvbigpe2Euc3RvcCgpfSksYS4kZWxlbS5vbihcIm1vdXNlb3V0XCIsZnVuY3Rpb24oKXtcInN0b3BcIiE9PWEuaG92ZXJTdGF0dXMmJmEucGxheSgpfSkpfSxsYXp5TG9hZDpmdW5jdGlvbigpe3ZhciBhLGIsZSxjLGQ7aWYoITE9PT10aGlzLm9wdGlvbnMubGF6eUxvYWQpcmV0dXJuITE7Zm9yKGE9MDthPHRoaXMuaXRlbXNBbW91bnQ7YSs9MSliPWYodGhpcy4kb3dsSXRlbXNbYV0pLFwibG9hZGVkXCIhPT1iLmRhdGEoXCJvd2wtbG9hZGVkXCIpJiYoZT1iLmRhdGEoXCJvd2wtaXRlbVwiKSxjPWIuZmluZChcIi5sYXp5T3dsXCIpLFwic3RyaW5nXCIhPT10eXBlb2YgYy5kYXRhKFwic3JjXCIpP1xyXG5iLmRhdGEoXCJvd2wtbG9hZGVkXCIsXCJsb2FkZWRcIik6KHZvaWQgMD09PWIuZGF0YShcIm93bC1sb2FkZWRcIikmJihjLmhpZGUoKSxiLmFkZENsYXNzKFwibG9hZGluZ1wiKS5kYXRhKFwib3dsLWxvYWRlZFwiLFwiY2hlY2tlZFwiKSksKGQ9ITA9PT10aGlzLm9wdGlvbnMubGF6eUZvbGxvdz9lPj10aGlzLmN1cnJlbnRJdGVtOiEwKSYmZTx0aGlzLmN1cnJlbnRJdGVtK3RoaXMub3B0aW9ucy5pdGVtcyYmYy5sZW5ndGgmJnRoaXMubGF6eVByZWxvYWQoYixjKSkpfSxsYXp5UHJlbG9hZDpmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGUoKXthLmRhdGEoXCJvd2wtbG9hZGVkXCIsXCJsb2FkZWRcIikucmVtb3ZlQ2xhc3MoXCJsb2FkaW5nXCIpO2IucmVtb3ZlQXR0cihcImRhdGEtc3JjXCIpO1wiZmFkZVwiPT09ZC5vcHRpb25zLmxhenlFZmZlY3Q/Yi5mYWRlSW4oNDAwKTpiLnNob3coKTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgZC5vcHRpb25zLmFmdGVyTGF6eUxvYWQmJmQub3B0aW9ucy5hZnRlckxhenlMb2FkLmFwcGx5KHRoaXMsXHJcbltkLiRlbGVtXSl9ZnVuY3Rpb24gYygpe2YrPTE7ZC5jb21wbGV0ZUltZyhiLmdldCgwKSl8fCEwPT09az9lKCk6MTAwPj1mP2cuc2V0VGltZW91dChjLDEwMCk6ZSgpfXZhciBkPXRoaXMsZj0wLGs7XCJESVZcIj09PWIucHJvcChcInRhZ05hbWVcIik/KGIuY3NzKFwiYmFja2dyb3VuZC1pbWFnZVwiLFwidXJsKFwiK2IuZGF0YShcInNyY1wiKStcIilcIiksaz0hMCk6YlswXS5zcmM9Yi5kYXRhKFwic3JjXCIpO2MoKX0sYXV0b0hlaWdodDpmdW5jdGlvbigpe2Z1bmN0aW9uIGEoKXt2YXIgYT1mKGUuJG93bEl0ZW1zW2UuY3VycmVudEl0ZW1dKS5oZWlnaHQoKTtlLndyYXBwZXJPdXRlci5jc3MoXCJoZWlnaHRcIixhK1wicHhcIik7ZS53cmFwcGVyT3V0ZXIuaGFzQ2xhc3MoXCJhdXRvSGVpZ2h0XCIpfHxnLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtlLndyYXBwZXJPdXRlci5hZGRDbGFzcyhcImF1dG9IZWlnaHRcIil9LDApfWZ1bmN0aW9uIGIoKXtkKz0xO2UuY29tcGxldGVJbWcoYy5nZXQoMCkpP2EoKToxMDA+PWQ/Zy5zZXRUaW1lb3V0KGIsXHJcbjEwMCk6ZS53cmFwcGVyT3V0ZXIuY3NzKFwiaGVpZ2h0XCIsXCJcIil9dmFyIGU9dGhpcyxjPWYoZS4kb3dsSXRlbXNbZS5jdXJyZW50SXRlbV0pLmZpbmQoXCJpbWdcIiksZDt2b2lkIDAhPT1jLmdldCgwKT8oZD0wLGIoKSk6YSgpfSxjb21wbGV0ZUltZzpmdW5jdGlvbihhKXtyZXR1cm4hYS5jb21wbGV0ZXx8XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBhLm5hdHVyYWxXaWR0aCYmMD09PWEubmF0dXJhbFdpZHRoPyExOiEwfSxvblZpc2libGVJdGVtczpmdW5jdGlvbigpe3ZhciBhOyEwPT09dGhpcy5vcHRpb25zLmFkZENsYXNzQWN0aXZlJiZ0aGlzLiRvd2xJdGVtcy5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTt0aGlzLnZpc2libGVJdGVtcz1bXTtmb3IoYT10aGlzLmN1cnJlbnRJdGVtO2E8dGhpcy5jdXJyZW50SXRlbSt0aGlzLm9wdGlvbnMuaXRlbXM7YSs9MSl0aGlzLnZpc2libGVJdGVtcy5wdXNoKGEpLCEwPT09dGhpcy5vcHRpb25zLmFkZENsYXNzQWN0aXZlJiZmKHRoaXMuJG93bEl0ZW1zW2FdKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxudGhpcy5vd2wudmlzaWJsZUl0ZW1zPXRoaXMudmlzaWJsZUl0ZW1zfSx0cmFuc2l0aW9uVHlwZXM6ZnVuY3Rpb24oYSl7dGhpcy5vdXRDbGFzcz1cIm93bC1cIithK1wiLW91dFwiO3RoaXMuaW5DbGFzcz1cIm93bC1cIithK1wiLWluXCJ9LHNpbmdsZUl0ZW1UcmFuc2l0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcyxiPWEub3V0Q2xhc3MsZT1hLmluQ2xhc3MsYz1hLiRvd2xJdGVtcy5lcShhLmN1cnJlbnRJdGVtKSxkPWEuJG93bEl0ZW1zLmVxKGEucHJldkl0ZW0pLGY9TWF0aC5hYnMoYS5wb3NpdGlvbnNJbkFycmF5W2EuY3VycmVudEl0ZW1dKSthLnBvc2l0aW9uc0luQXJyYXlbYS5wcmV2SXRlbV0sZz1NYXRoLmFicyhhLnBvc2l0aW9uc0luQXJyYXlbYS5jdXJyZW50SXRlbV0pK2EuaXRlbVdpZHRoLzI7YS5pc1RyYW5zaXRpb249ITA7YS4kb3dsV3JhcHBlci5hZGRDbGFzcyhcIm93bC1vcmlnaW5cIikuY3NzKHtcIi13ZWJraXQtdHJhbnNmb3JtLW9yaWdpblwiOmcrXCJweFwiLFwiLW1vei1wZXJzcGVjdGl2ZS1vcmlnaW5cIjpnK1xyXG5cInB4XCIsXCJwZXJzcGVjdGl2ZS1vcmlnaW5cIjpnK1wicHhcIn0pO2QuY3NzKHtwb3NpdGlvbjpcInJlbGF0aXZlXCIsbGVmdDpmK1wicHhcIn0pLmFkZENsYXNzKGIpLm9uKFwid2Via2l0QW5pbWF0aW9uRW5kIG9BbmltYXRpb25FbmQgTVNBbmltYXRpb25FbmQgYW5pbWF0aW9uZW5kXCIsZnVuY3Rpb24oKXthLmVuZFByZXY9ITA7ZC5vZmYoXCJ3ZWJraXRBbmltYXRpb25FbmQgb0FuaW1hdGlvbkVuZCBNU0FuaW1hdGlvbkVuZCBhbmltYXRpb25lbmRcIik7YS5jbGVhclRyYW5zU3R5bGUoZCxiKX0pO2MuYWRkQ2xhc3MoZSkub24oXCJ3ZWJraXRBbmltYXRpb25FbmQgb0FuaW1hdGlvbkVuZCBNU0FuaW1hdGlvbkVuZCBhbmltYXRpb25lbmRcIixmdW5jdGlvbigpe2EuZW5kQ3VycmVudD0hMDtjLm9mZihcIndlYmtpdEFuaW1hdGlvbkVuZCBvQW5pbWF0aW9uRW5kIE1TQW5pbWF0aW9uRW5kIGFuaW1hdGlvbmVuZFwiKTthLmNsZWFyVHJhbnNTdHlsZShjLGUpfSl9LGNsZWFyVHJhbnNTdHlsZTpmdW5jdGlvbihhLFxyXG5iKXthLmNzcyh7cG9zaXRpb246XCJcIixsZWZ0OlwiXCJ9KS5yZW1vdmVDbGFzcyhiKTt0aGlzLmVuZFByZXYmJnRoaXMuZW5kQ3VycmVudCYmKHRoaXMuJG93bFdyYXBwZXIucmVtb3ZlQ2xhc3MoXCJvd2wtb3JpZ2luXCIpLHRoaXMuaXNUcmFuc2l0aW9uPXRoaXMuZW5kQ3VycmVudD10aGlzLmVuZFByZXY9ITEpfSxvd2xTdGF0dXM6ZnVuY3Rpb24oKXt0aGlzLm93bD17dXNlck9wdGlvbnM6dGhpcy51c2VyT3B0aW9ucyxiYXNlRWxlbWVudDp0aGlzLiRlbGVtLHVzZXJJdGVtczp0aGlzLiR1c2VySXRlbXMsb3dsSXRlbXM6dGhpcy4kb3dsSXRlbXMsY3VycmVudEl0ZW06dGhpcy5jdXJyZW50SXRlbSxwcmV2SXRlbTp0aGlzLnByZXZJdGVtLHZpc2libGVJdGVtczp0aGlzLnZpc2libGVJdGVtcyxpc1RvdWNoOnRoaXMuYnJvd3Nlci5pc1RvdWNoLGJyb3dzZXI6dGhpcy5icm93c2VyLGRyYWdEaXJlY3Rpb246dGhpcy5kcmFnRGlyZWN0aW9ufX0sY2xlYXJFdmVudHM6ZnVuY3Rpb24oKXt0aGlzLiRlbGVtLm9mZihcIi5vd2wgb3dsIG1vdXNlZG93bi5kaXNhYmxlVGV4dFNlbGVjdFwiKTtcclxuZihrKS5vZmYoXCIub3dsIG93bFwiKTtmKGcpLm9mZihcInJlc2l6ZVwiLHRoaXMucmVzaXplcil9LHVuV3JhcDpmdW5jdGlvbigpezAhPT10aGlzLiRlbGVtLmNoaWxkcmVuKCkubGVuZ3RoJiYodGhpcy4kb3dsV3JhcHBlci51bndyYXAoKSx0aGlzLiR1c2VySXRlbXMudW53cmFwKCkudW53cmFwKCksdGhpcy5vd2xDb250cm9scyYmdGhpcy5vd2xDb250cm9scy5yZW1vdmUoKSk7dGhpcy5jbGVhckV2ZW50cygpO3RoaXMuJGVsZW0uYXR0cihcInN0eWxlXCIsdGhpcy4kZWxlbS5kYXRhKFwib3dsLW9yaWdpbmFsU3R5bGVzXCIpfHxcIlwiKS5hdHRyKFwiY2xhc3NcIix0aGlzLiRlbGVtLmRhdGEoXCJvd2wtb3JpZ2luYWxDbGFzc2VzXCIpKX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMuc3RvcCgpO2cuY2xlYXJJbnRlcnZhbCh0aGlzLmNoZWNrVmlzaWJsZSk7dGhpcy51bldyYXAoKTt0aGlzLiRlbGVtLnJlbW92ZURhdGEoKX0scmVpbml0OmZ1bmN0aW9uKGEpe2E9Zi5leHRlbmQoe30sdGhpcy51c2VyT3B0aW9ucyxcclxuYSk7dGhpcy51bldyYXAoKTt0aGlzLmluaXQoYSx0aGlzLiRlbGVtKX0sYWRkSXRlbTpmdW5jdGlvbihhLGIpe3ZhciBlO2lmKCFhKXJldHVybiExO2lmKDA9PT10aGlzLiRlbGVtLmNoaWxkcmVuKCkubGVuZ3RoKXJldHVybiB0aGlzLiRlbGVtLmFwcGVuZChhKSx0aGlzLnNldFZhcnMoKSwhMTt0aGlzLnVuV3JhcCgpO2U9dm9pZCAwPT09Ynx8LTE9PT1iPy0xOmI7ZT49dGhpcy4kdXNlckl0ZW1zLmxlbmd0aHx8LTE9PT1lP3RoaXMuJHVzZXJJdGVtcy5lcSgtMSkuYWZ0ZXIoYSk6dGhpcy4kdXNlckl0ZW1zLmVxKGUpLmJlZm9yZShhKTt0aGlzLnNldFZhcnMoKX0scmVtb3ZlSXRlbTpmdW5jdGlvbihhKXtpZigwPT09dGhpcy4kZWxlbS5jaGlsZHJlbigpLmxlbmd0aClyZXR1cm4hMTthPXZvaWQgMD09PWF8fC0xPT09YT8tMTphO3RoaXMudW5XcmFwKCk7dGhpcy4kdXNlckl0ZW1zLmVxKGEpLnJlbW92ZSgpO3RoaXMuc2V0VmFycygpfX07Zi5mbi5vd2xDYXJvdXNlbD1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7aWYoITA9PT1cclxuZih0aGlzKS5kYXRhKFwib3dsLWluaXRcIikpcmV0dXJuITE7Zih0aGlzKS5kYXRhKFwib3dsLWluaXRcIiwhMCk7dmFyIGI9T2JqZWN0LmNyZWF0ZShsKTtiLmluaXQoYSx0aGlzKTtmLmRhdGEodGhpcyxcIm93bENhcm91c2VsXCIsYil9KX07Zi5mbi5vd2xDYXJvdXNlbC5vcHRpb25zPXtpdGVtczo1LGl0ZW1zQ3VzdG9tOiExLGl0ZW1zRGVza3RvcDpbMTE5OSw0XSxpdGVtc0Rlc2t0b3BTbWFsbDpbOTc5LDNdLGl0ZW1zVGFibGV0Ols3NjgsMl0saXRlbXNUYWJsZXRTbWFsbDohMSxpdGVtc01vYmlsZTpbNDc5LDFdLHNpbmdsZUl0ZW06ITEsaXRlbXNTY2FsZVVwOiExLHNsaWRlU3BlZWQ6MjAwLHBhZ2luYXRpb25TcGVlZDo4MDAscmV3aW5kU3BlZWQ6MUUzLGF1dG9QbGF5OiExLHN0b3BPbkhvdmVyOiExLG5hdmlnYXRpb246ITEsbmF2aWdhdGlvblRleHQ6W1wicHJldlwiLFwibmV4dFwiXSxyZXdpbmROYXY6ITAsc2Nyb2xsUGVyUGFnZTohMSxwYWdpbmF0aW9uOiEwLHBhZ2luYXRpb25OdW1iZXJzOiExLFxyXG5yZXNwb25zaXZlOiEwLHJlc3BvbnNpdmVSZWZyZXNoUmF0ZToyMDAscmVzcG9uc2l2ZUJhc2VXaWR0aDpnLGJhc2VDbGFzczpcIm93bC1jYXJvdXNlbFwiLHRoZW1lOlwib3dsLXRoZW1lXCIsbGF6eUxvYWQ6ITEsbGF6eUZvbGxvdzohMCxsYXp5RWZmZWN0OlwiZmFkZVwiLGF1dG9IZWlnaHQ6ITEsanNvblBhdGg6ITEsanNvblN1Y2Nlc3M6ITEsZHJhZ0JlZm9yZUFuaW1GaW5pc2g6ITAsbW91c2VEcmFnOiEwLHRvdWNoRHJhZzohMCxhZGRDbGFzc0FjdGl2ZTohMSx0cmFuc2l0aW9uU3R5bGU6ITEsYmVmb3JlVXBkYXRlOiExLGFmdGVyVXBkYXRlOiExLGJlZm9yZUluaXQ6ITEsYWZ0ZXJJbml0OiExLGJlZm9yZU1vdmU6ITEsYWZ0ZXJNb3ZlOiExLGFmdGVyQWN0aW9uOiExLHN0YXJ0RHJhZ2dpbmc6ITEsYWZ0ZXJMYXp5TG9hZDohMX19KShqUXVlcnksd2luZG93LGRvY3VtZW50KTtcclxuLypcclxuXHJcbiBhcmN0aWNNb2RhbCDigJQgalF1ZXJ5IHBsdWdpblxyXG4gVmVyc2lvbjogMC4zXHJcbiBBdXRob3I6IFNlcmdleSBQcmVkdm9kaXRlbGV2IChzZXJnZXkucHJlZHZvZGl0ZWxldkBnbWFpbC5jb20pXHJcbiBDb21wYW55OiBBcmN0aWMgTGFib3JhdG9yeSAoaHR0cDovL2FyY3RpY2xhYi5ydS8pXHJcblxyXG4gRG9jcyAmIEV4YW1wbGVzOiBodHRwOi8vYXJjdGljbGFiLnJ1L2FyY3RpY21vZGFsL1xyXG5cclxuICovXHJcbihmdW5jdGlvbigkKSB7XHJcblxyXG5cclxuXHR2YXIgZGVmYXVsdF9vcHRpb25zID0ge1xyXG5cclxuXHRcdHR5cGU6ICdodG1sJywgLy8gYWpheCDQuNC70LggaHRtbFxyXG5cdFx0Y29udGVudDogJycsXHJcblx0XHR1cmw6ICcnLFxyXG5cdFx0YWpheDoge30sXHJcblx0XHRhamF4X3JlcXVlc3Q6IG51bGwsXHJcblxyXG5cdFx0Y2xvc2VPbkVzYzogdHJ1ZSxcclxuXHRcdGNsb3NlT25PdmVybGF5Q2xpY2s6IHRydWUsXHJcblxyXG5cdFx0Y2xvbmU6IGZhbHNlLFxyXG5cclxuXHRcdG92ZXJsYXk6IHtcclxuXHRcdFx0YmxvY2s6IHVuZGVmaW5lZCxcclxuXHRcdFx0dHBsOiAnPGRpdiBjbGFzcz1cImFyY3RpY21vZGFsLW92ZXJsYXlcIj48L2Rpdj4nLFxyXG5cdFx0XHRjc3M6IHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwJyxcclxuXHRcdFx0XHRvcGFjaXR5OiAuNlxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdGNvbnRhaW5lcjoge1xyXG5cdFx0XHRibG9jazogdW5kZWZpbmVkLFxyXG5cdFx0XHR0cGw6ICc8ZGl2IGNsYXNzPVwiYXJjdGljbW9kYWwtY29udGFpbmVyXCI+PHRhYmxlIGNsYXNzPVwiYXJjdGljbW9kYWwtY29udGFpbmVyX2lcIj48dHI+PHRkIGNsYXNzPVwiYXJjdGljbW9kYWwtY29udGFpbmVyX2kyXCI+PC90ZD48L3RyPjwvdGFibGU+PC9kaXY+J1xyXG5cdFx0fSxcclxuXHJcblx0XHR3cmFwOiB1bmRlZmluZWQsXHJcblx0XHRib2R5OiB1bmRlZmluZWQsXHJcblxyXG5cdFx0ZXJyb3JzOiB7XHJcblx0XHRcdHRwbDogJzxkaXYgY2xhc3M9XCJhcmN0aWNtb2RhbC1lcnJvciBhcmN0aWNtb2RhbC1jbG9zZVwiPjwvZGl2PicsXHJcblx0XHRcdGF1dG9jbG9zZV9kZWxheTogMjAwMCxcclxuXHRcdFx0YWpheF91bnN1Y2Nlc3NmdWxfbG9hZDogJ0Vycm9yJ1xyXG5cdFx0fSxcclxuXHJcblx0XHRvcGVuRWZmZWN0OiB7XHJcblx0XHRcdHR5cGU6ICdmYWRlJyxcclxuXHRcdFx0c3BlZWQ6IDQwMFxyXG5cdFx0fSxcclxuXHRcdGNsb3NlRWZmZWN0OiB7XHJcblx0XHRcdHR5cGU6ICdmYWRlJyxcclxuXHRcdFx0c3BlZWQ6IDQwMFxyXG5cdFx0fSxcclxuXHJcblx0XHRiZWZvcmVPcGVuOiAkLm5vb3AsXHJcblx0XHRhZnRlck9wZW46ICQubm9vcCxcclxuXHRcdGJlZm9yZUNsb3NlOiAkLm5vb3AsXHJcblx0XHRhZnRlckNsb3NlOiAkLm5vb3AsXHJcblx0XHRhZnRlckxvYWRpbmc6ICQubm9vcCxcclxuXHRcdGFmdGVyTG9hZGluZ09uU2hvdzogJC5ub29wLFxyXG5cdFx0ZXJyb3JMb2FkaW5nOiAkLm5vb3BcclxuXHJcblx0fTtcclxuXHJcblxyXG5cdHZhciBtb2RhbElEID0gMDtcclxuXHR2YXIgbW9kYWxzID0gJChbXSk7XHJcblxyXG5cclxuXHR2YXIgdXRpbHMgPSB7XHJcblxyXG5cclxuXHRcdC8vINCe0L/RgNC10LTQtdC70Y/QtdGCINC/0YDQvtC40LfQvtGI0LvQviDQu9C4INGB0L7QsdGL0YLQuNC1IGUg0LLQvdC1INCx0LvQvtC60LAgYmxvY2tcclxuXHRcdGlzRXZlbnRPdXQ6IGZ1bmN0aW9uKGJsb2NrcywgZSkge1xyXG5cdFx0XHR2YXIgciA9IHRydWU7XHJcblx0XHRcdCQoYmxvY2tzKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmICgkKGUudGFyZ2V0KS5nZXQoMCk9PSQodGhpcykuZ2V0KDApKSByID0gZmFsc2U7XHJcblx0XHRcdFx0aWYgKCQoZS50YXJnZXQpLmNsb3Nlc3QoJ0hUTUwnLCAkKHRoaXMpLmdldCgwKSkubGVuZ3RoPT0wKSByID0gZmFsc2U7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gcjtcclxuXHRcdH1cclxuXHJcblxyXG5cdH07XHJcblxyXG5cclxuXHR2YXIgbW9kYWwgPSB7XHJcblxyXG5cclxuXHRcdC8vINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINGN0LvQtdC80LXQvdGCLCDQutC+0YLQvtGA0YvQvCDQsdGL0Lsg0LLRi9C30LLQsNC9INC/0LvQsNCz0LjQvVxyXG5cdFx0Z2V0UGFyZW50RWw6IGZ1bmN0aW9uKGVsKSB7XHJcblx0XHRcdHZhciByID0gJChlbCk7XHJcblx0XHRcdGlmIChyLmRhdGEoJ2FyY3RpY21vZGFsJykpIHJldHVybiByO1xyXG5cdFx0XHRyID0gJChlbCkuY2xvc2VzdCgnLmFyY3RpY21vZGFsLWNvbnRhaW5lcicpLmRhdGEoJ2FyY3RpY21vZGFsUGFyZW50RWwnKTtcclxuXHRcdFx0aWYgKHIpIHJldHVybiByO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvLyDQn9C10YDQtdGF0L7QtFxyXG5cdFx0dHJhbnNpdGlvbjogZnVuY3Rpb24oZWwsIGFjdGlvbiwgb3B0aW9ucywgY2FsbGJhY2spIHtcclxuXHRcdFx0Y2FsbGJhY2sgPSBjYWxsYmFjaz09dW5kZWZpbmVkID8gJC5ub29wIDogY2FsbGJhY2s7XHJcblx0XHRcdHN3aXRjaCAob3B0aW9ucy50eXBlKSB7XHJcblx0XHRcdFx0Y2FzZSAnZmFkZSc6XHJcblx0XHRcdFx0XHRhY3Rpb249PSdzaG93JyA/IGVsLmZhZGVJbihvcHRpb25zLnNwZWVkLCBjYWxsYmFjaykgOiBlbC5mYWRlT3V0KG9wdGlvbnMuc3BlZWQsIGNhbGxiYWNrKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ25vbmUnOlxyXG5cdFx0XHRcdFx0YWN0aW9uPT0nc2hvdycgPyBlbC5zaG93KCkgOiBlbC5oaWRlKCk7XHJcblx0XHRcdFx0XHRjYWxsYmFjaygpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8vINCf0L7QtNCz0L7RgtCy0LrQsCDRgdC+0LTQtdGA0LbQuNC80L7Qs9C+INC+0LrQvdCwXHJcblx0XHRwcmVwYXJlX2JvZHk6IGZ1bmN0aW9uKEQsICR0aGlzKSB7XHJcblxyXG5cdFx0XHQvLyDQntCx0YDQsNCx0L7RgtGH0LjQuiDQt9Cw0LrRgNGL0YLQuNGPXHJcblx0XHRcdCQoJy5hcmN0aWNtb2RhbC1jbG9zZScsIEQuYm9keSkudW5iaW5kKCdjbGljay5hcmN0aWNtb2RhbCcpLmJpbmQoJ2NsaWNrLmFyY3RpY21vZGFsJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JHRoaXMuYXJjdGljbW9kYWwoJ2Nsb3NlJyk7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDRjdC70LXQvNC10L3RgtCwXHJcblx0XHRpbml0X2VsOiBmdW5jdGlvbigkdGhpcywgb3B0aW9ucykge1xyXG5cdFx0XHR2YXIgRCA9ICR0aGlzLmRhdGEoJ2FyY3RpY21vZGFsJyk7XHJcblx0XHRcdGlmIChEKSByZXR1cm47XHJcblxyXG5cdFx0XHREID0gb3B0aW9ucztcclxuXHRcdFx0bW9kYWxJRCsrO1xyXG5cdFx0XHRELm1vZGFsSUQgPSBtb2RhbElEO1xyXG5cclxuXHRcdFx0Ly8gT3ZlcmxheVxyXG5cdFx0XHRELm92ZXJsYXkuYmxvY2sgPSAkKEQub3ZlcmxheS50cGwpO1xyXG5cdFx0XHRELm92ZXJsYXkuYmxvY2suY3NzKEQub3ZlcmxheS5jc3MpO1xyXG5cclxuXHRcdFx0Ly8gQ29udGFpbmVyXHJcblx0XHRcdEQuY29udGFpbmVyLmJsb2NrID0gJChELmNvbnRhaW5lci50cGwpO1xyXG5cclxuXHRcdFx0Ly8gQk9EWVxyXG5cdFx0XHRELmJvZHkgPSAkKCcuYXJjdGljbW9kYWwtY29udGFpbmVyX2kyJywgRC5jb250YWluZXIuYmxvY2spO1xyXG5cdFx0XHRpZiAob3B0aW9ucy5jbG9uZSkge1xyXG5cdFx0XHRcdEQuYm9keS5odG1sKCR0aGlzLmNsb25lKHRydWUpKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkdGhpcy5iZWZvcmUoJzxkaXYgaWQ9XCJhcmN0aWNtb2RhbFJlc2VydmUnICsgRC5tb2RhbElEICsgJ1wiIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiIC8+Jyk7XHJcblx0XHRcdFx0RC5ib2R5Lmh0bWwoJHRoaXMpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyDQn9C+0LTQs9C+0YLQvtCy0LrQsCDRgdC+0LTQtdGA0LbQuNC80L7Qs9C+XHJcblx0XHRcdG1vZGFsLnByZXBhcmVfYm9keShELCAkdGhpcyk7XHJcblxyXG5cdFx0XHQvLyDQl9Cw0LrRgNGL0YLQuNC1INC/0YDQuCDQutC70LjQutC1INC90LAgb3ZlcmxheVxyXG5cdFx0XHRpZiAoRC5jbG9zZU9uT3ZlcmxheUNsaWNrKVxyXG5cdFx0XHRcdEQub3ZlcmxheS5ibG9jay5hZGQoRC5jb250YWluZXIuYmxvY2spLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdGlmICh1dGlscy5pc0V2ZW50T3V0KCQoJz4qJywgRC5ib2R5KSwgZSkpXHJcblx0XHRcdFx0XHRcdCR0aGlzLmFyY3RpY21vZGFsKCdjbG9zZScpO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ly8g0JfQsNC/0L7QvNC90LjQvCDQvdCw0YHRgtGA0L7QudC60LhcclxuXHRcdFx0RC5jb250YWluZXIuYmxvY2suZGF0YSgnYXJjdGljbW9kYWxQYXJlbnRFbCcsICR0aGlzKTtcclxuXHRcdFx0JHRoaXMuZGF0YSgnYXJjdGljbW9kYWwnLCBEKTtcclxuXHRcdFx0bW9kYWxzID0gJC5tZXJnZShtb2RhbHMsICR0aGlzKTtcclxuXHJcblx0XHRcdC8vINCf0L7QutCw0LfQsNGC0YxcclxuXHRcdFx0JC5wcm94eShhY3Rpb25zLnNob3csICR0aGlzKSgpO1xyXG5cdFx0XHRpZiAoRC50eXBlPT0naHRtbCcpIHJldHVybiAkdGhpcztcclxuXHJcblx0XHRcdC8vIEFqYXgt0LfQsNCz0YDRg9C30LrQsFxyXG5cdFx0XHRpZiAoRC5hamF4LmJlZm9yZVNlbmQhPXVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdHZhciBmbl9iZWZvcmVTZW5kID0gRC5hamF4LmJlZm9yZVNlbmQ7XHJcblx0XHRcdFx0ZGVsZXRlIEQuYWpheC5iZWZvcmVTZW5kO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChELmFqYXguc3VjY2VzcyE9dW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0dmFyIGZuX3N1Y2Nlc3MgPSBELmFqYXguc3VjY2VzcztcclxuXHRcdFx0XHRkZWxldGUgRC5hamF4LnN1Y2Nlc3M7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKEQuYWpheC5lcnJvciE9dW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0dmFyIGZuX2Vycm9yID0gRC5hamF4LmVycm9yO1xyXG5cdFx0XHRcdGRlbGV0ZSBELmFqYXguZXJyb3I7XHJcblx0XHRcdH1cclxuXHRcdFx0dmFyIG8gPSAkLmV4dGVuZCh0cnVlLCB7XHJcblx0XHRcdFx0dXJsOiBELnVybCxcclxuXHRcdFx0XHRiZWZvcmVTZW5kOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGlmIChmbl9iZWZvcmVTZW5kPT11bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0RC5ib2R5Lmh0bWwoJzxkaXYgY2xhc3M9XCJhcmN0aWNtb2RhbC1sb2FkaW5nXCIgLz4nKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGZuX2JlZm9yZVNlbmQoRCwgJHRoaXMpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzcG9uY2UpIHtcclxuXHJcblx0XHRcdFx0XHQvLyDQodC+0LHRi9GC0LjQtSDQv9C+0YHQu9C1INC30LDQs9GA0YPQt9C60Lgg0LTQviDQv9C+0LrQsNC30LAg0YHQvtC00LXRgNC20LjQvNC+0LPQvlxyXG5cdFx0XHRcdFx0JHRoaXMudHJpZ2dlcignYWZ0ZXJMb2FkaW5nJyk7XHJcblx0XHRcdFx0XHRELmFmdGVyTG9hZGluZyhELCAkdGhpcywgcmVzcG9uY2UpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChmbl9zdWNjZXNzPT11bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0RC5ib2R5Lmh0bWwocmVzcG9uY2UpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Zm5fc3VjY2VzcyhELCAkdGhpcywgcmVzcG9uY2UpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0bW9kYWwucHJlcGFyZV9ib2R5KEQsICR0aGlzKTtcclxuXHJcblx0XHRcdFx0XHQvLyDQodC+0LHRi9GC0LjQtSDQv9C+0YHQu9C1INC30LDQs9GA0YPQt9C60Lgg0L/QvtGB0LvQtSDQvtGC0L7QsdGA0LDQttC10L3QuNGPINGB0L7QtNC10YDQttC40LzQvtCz0L5cclxuXHRcdFx0XHRcdCR0aGlzLnRyaWdnZXIoJ2FmdGVyTG9hZGluZ09uU2hvdycpO1xyXG5cdFx0XHRcdFx0RC5hZnRlckxvYWRpbmdPblNob3coRCwgJHRoaXMsIHJlc3BvbmNlKTtcclxuXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRlcnJvcjogZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdFx0Ly8g0KHQvtCx0YvRgtC40LUg0L/RgNC4INC+0YjQuNCx0LrQtSDQt9Cw0LPRgNGD0LfQutC4XHJcblx0XHRcdFx0XHQkdGhpcy50cmlnZ2VyKCdlcnJvckxvYWRpbmcnKTtcclxuXHRcdFx0XHRcdEQuZXJyb3JMb2FkaW5nKEQsICR0aGlzKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoZm5fZXJyb3I9PXVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHRELmJvZHkuaHRtbChELmVycm9ycy50cGwpO1xyXG5cdFx0XHRcdFx0XHQkKCcuYXJjdGljbW9kYWwtZXJyb3InLCBELmJvZHkpLmh0bWwoRC5lcnJvcnMuYWpheF91bnN1Y2Nlc3NmdWxfbG9hZCk7XHJcblx0XHRcdFx0XHRcdCQoJy5hcmN0aWNtb2RhbC1jbG9zZScsIEQuYm9keSkuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0JHRoaXMuYXJjdGljbW9kYWwoJ2Nsb3NlJyk7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0aWYgKEQuZXJyb3JzLmF1dG9jbG9zZV9kZWxheSlcclxuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0JHRoaXMuYXJjdGljbW9kYWwoJ2Nsb3NlJyk7XHJcblx0XHRcdFx0XHRcdFx0fSwgRC5lcnJvcnMuYXV0b2Nsb3NlX2RlbGF5KTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGZuX2Vycm9yKEQsICR0aGlzKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sIEQuYWpheCk7XHJcblx0XHRcdEQuYWpheF9yZXF1ZXN0ID0gJC5hamF4KG8pO1xyXG5cclxuXHRcdFx0Ly8g0JfQsNC/0L7QvNC90LjRgtGMINC90LDRgdGC0YDQvtC50LrQuFxyXG5cdFx0XHQkdGhpcy5kYXRhKCdhcmN0aWNtb2RhbCcsIEQpO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8vINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPXHJcblx0XHRpbml0OiBmdW5jdGlvbihvcHRpb25zKSB7XHJcblx0XHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh0cnVlLCB7fSwgZGVmYXVsdF9vcHRpb25zLCBvcHRpb25zKTtcclxuXHRcdFx0aWYgKCQuaXNGdW5jdGlvbih0aGlzKSkge1xyXG5cdFx0XHRcdGlmIChvcHRpb25zPT11bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdCQuZXJyb3IoJ2pxdWVyeS5hcmN0aWNtb2RhbDogVW5jb3JyZWN0IHBhcmFtZXRlcnMnKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKG9wdGlvbnMudHlwZT09JycpIHtcclxuXHRcdFx0XHRcdCQuZXJyb3IoJ2pxdWVyeS5hcmN0aWNtb2RhbDogRG9uXFwndCBzZXQgcGFyYW1ldGVyIFwidHlwZVwiJyk7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHN3aXRjaCAob3B0aW9ucy50eXBlKSB7XHJcblx0XHRcdFx0XHRjYXNlICdodG1sJzpcclxuXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMuY29udGVudD09JycpIHtcclxuXHRcdFx0XHRcdFx0XHQkLmVycm9yKCdqcXVlcnkuYXJjdGljbW9kYWw6IERvblxcJ3Qgc2V0IHBhcmFtZXRlciBcImNvbnRlbnRcIicpO1xyXG5cdFx0XHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHZhciBjID0gb3B0aW9ucy5jb250ZW50O1xyXG5cdFx0XHRcdFx0XHRvcHRpb25zLmNvbnRlbnQgPSAnJztcclxuXHJcblx0XHRcdFx0XHRcdHJldHVybiBtb2RhbC5pbml0X2VsKCQoYyksIG9wdGlvbnMpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ2FqYXgnOlxyXG5cdFx0XHRcdFx0XHRpZiAob3B0aW9ucy51cmw9PScnKSB7XHJcblx0XHRcdFx0XHRcdFx0JC5lcnJvcignanF1ZXJ5LmFyY3RpY21vZGFsOiBEb25cXCd0IHNldCBwYXJhbWV0ZXIgXCJ1cmxcIicpO1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gbW9kYWwuaW5pdF9lbCgkKCc8ZGl2IC8+JyksIG9wdGlvbnMpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdG1vZGFsLmluaXRfZWwoJCh0aGlzKSwgJC5leHRlbmQodHJ1ZSwge30sIG9wdGlvbnMpKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHJcblx0fTtcclxuXHJcblxyXG5cdHZhciBhY3Rpb25zID0ge1xyXG5cclxuXHJcblx0XHQvLyDQn9C+0LrQsNC30LDRgtGMXHJcblx0XHRzaG93OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyICR0aGlzID0gbW9kYWwuZ2V0UGFyZW50RWwodGhpcyk7XHJcblx0XHRcdGlmICgkdGhpcz09PWZhbHNlKSB7XHJcblx0XHRcdFx0JC5lcnJvcignanF1ZXJ5LmFyY3RpY21vZGFsOiBVbmNvcnJlY3QgY2FsbCcpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHR2YXIgRCA9ICR0aGlzLmRhdGEoJ2FyY3RpY21vZGFsJyk7XHJcblxyXG5cdFx0XHQvLyDQlNC+0LHQsNCy0LjRgtGMIG92ZXJsYXkg0LggY29udGFpbmVyXHJcblx0XHRcdEQub3ZlcmxheS5ibG9jay5oaWRlKCk7XHJcblx0XHRcdEQuY29udGFpbmVyLmJsb2NrLmhpZGUoKTtcclxuXHRcdFx0JCgnQk9EWScpLmFwcGVuZChELm92ZXJsYXkuYmxvY2spO1xyXG5cdFx0XHQkKCdCT0RZJykuYXBwZW5kKEQuY29udGFpbmVyLmJsb2NrKTtcclxuXHJcblx0XHRcdC8vINCh0L7QsdGL0YLQuNC1XHJcblx0XHRcdEQuYmVmb3JlT3BlbihELCAkdGhpcyk7XHJcblx0XHRcdCR0aGlzLnRyaWdnZXIoJ2JlZm9yZU9wZW4nKTtcclxuXHJcblx0XHRcdC8vIFdyYXBcclxuXHRcdFx0aWYgKEQud3JhcC5jc3MoJ292ZXJmbG93JykhPSdoaWRkZW4nKSB7XHJcblx0XHRcdFx0RC53cmFwLmRhdGEoJ2FyY3RpY21vZGFsT3ZlcmZsb3cnLCBELndyYXAuY3NzKCdvdmVyZmxvdycpKTtcclxuXHRcdFx0XHR2YXIgdzEgPSBELndyYXAub3V0ZXJXaWR0aCh0cnVlKTtcclxuXHRcdFx0XHRELndyYXAuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcclxuXHRcdFx0XHR2YXIgdzIgPSBELndyYXAub3V0ZXJXaWR0aCh0cnVlKTtcclxuXHRcdFx0XHRpZiAodzIhPXcxKVxyXG5cdFx0XHRcdFx0RC53cmFwLmNzcygnbWFyZ2luUmlnaHQnLCAodzIgLSB3MSkgKyAncHgnKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8g0KHQutGA0YvRgtGMINC/0YDQtdC00YvQtNGD0YnQuNC1INC+0LLQtdGA0LvQtdC4XHJcblx0XHRcdG1vZGFscy5ub3QoJHRoaXMpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyIGQgPSAkKHRoaXMpLmRhdGEoJ2FyY3RpY21vZGFsJyk7XHJcblx0XHRcdFx0ZC5vdmVybGF5LmJsb2NrLmhpZGUoKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQvLyDQn9C+0LrQsNC30LDRgtGMXHJcblx0XHRcdG1vZGFsLnRyYW5zaXRpb24oRC5vdmVybGF5LmJsb2NrLCAnc2hvdycsIG1vZGFscy5sZW5ndGg+MSA/IHt0eXBlOiAnbm9uZSd9IDogRC5vcGVuRWZmZWN0KTtcclxuXHRcdFx0bW9kYWwudHJhbnNpdGlvbihELmNvbnRhaW5lci5ibG9jaywgJ3Nob3cnLCBtb2RhbHMubGVuZ3RoPjEgPyB7dHlwZTogJ25vbmUnfSA6IEQub3BlbkVmZmVjdCwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0RC5hZnRlck9wZW4oRCwgJHRoaXMpO1xyXG5cdFx0XHRcdCR0aGlzLnRyaWdnZXIoJ2FmdGVyT3BlbicpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiAkdGhpcztcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8vINCX0LDQutGA0YvRgtGMXHJcblx0XHRjbG9zZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmICgkLmlzRnVuY3Rpb24odGhpcykpIHtcclxuXHRcdFx0XHRtb2RhbHMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdCQodGhpcykuYXJjdGljbW9kYWwoJ2Nsb3NlJyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHZhciAkdGhpcyA9IG1vZGFsLmdldFBhcmVudEVsKHRoaXMpO1xyXG5cdFx0XHRcdFx0aWYgKCR0aGlzPT09ZmFsc2UpIHtcclxuXHRcdFx0XHRcdFx0JC5lcnJvcignanF1ZXJ5LmFyY3RpY21vZGFsOiBVbmNvcnJlY3QgY2FsbCcpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR2YXIgRCA9ICR0aGlzLmRhdGEoJ2FyY3RpY21vZGFsJyk7XHJcblxyXG5cdFx0XHRcdFx0Ly8g0KHQvtCx0YvRgtC40LUg0L/QtdGA0LXQtCDQt9Cw0LrRgNGL0YLQuNC10LxcclxuXHRcdFx0XHRcdGlmIChELmJlZm9yZUNsb3NlKEQsICR0aGlzKT09PWZhbHNlKSByZXR1cm47XHJcblx0XHRcdFx0XHQkdGhpcy50cmlnZ2VyKCdiZWZvcmVDbG9zZScpO1xyXG5cclxuXHRcdFx0XHRcdC8vINCf0L7QutCw0LfQsNGC0Ywg0L/RgNC10LTRi9C00YPRidC40LUg0L7QstC10YDQu9C10LhcclxuXHRcdFx0XHRcdG1vZGFscy5ub3QoJHRoaXMpLmxhc3QoKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHR2YXIgZCA9ICQodGhpcykuZGF0YSgnYXJjdGljbW9kYWwnKTtcclxuXHRcdFx0XHRcdFx0ZC5vdmVybGF5LmJsb2NrLnNob3coKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdG1vZGFsLnRyYW5zaXRpb24oRC5vdmVybGF5LmJsb2NrLCAnaGlkZScsIG1vZGFscy5sZW5ndGg+MSA/IHt0eXBlOiAnbm9uZSd9IDogRC5jbG9zZUVmZmVjdCk7XHJcblx0XHRcdFx0XHRtb2RhbC50cmFuc2l0aW9uKEQuY29udGFpbmVyLmJsb2NrLCAnaGlkZScsIG1vZGFscy5sZW5ndGg+MSA/IHt0eXBlOiAnbm9uZSd9IDogRC5jbG9zZUVmZmVjdCwgZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyDQodC+0LHRi9GC0LjQtSDQv9C+0YHQu9C1INC30LDQutGA0YvRgtC40Y9cclxuXHRcdFx0XHRcdFx0RC5hZnRlckNsb3NlKEQsICR0aGlzKTtcclxuXHRcdFx0XHRcdFx0JHRoaXMudHJpZ2dlcignYWZ0ZXJDbG9zZScpO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8g0JXRgdC70Lgg0L3QtSDQutC70L7QvdC40YDQvtCy0LDQu9C4IC0g0LLQtdGA0L3RkdC8INC90LAg0LzQtdGB0YLQvlxyXG5cdFx0XHRcdFx0XHRpZiAoIUQuY2xvbmUpXHJcblx0XHRcdFx0XHRcdFx0JCgnI2FyY3RpY21vZGFsUmVzZXJ2ZScgKyBELm1vZGFsSUQpLnJlcGxhY2VXaXRoKEQuYm9keS5maW5kKCc+KicpKTtcclxuXHJcblx0XHRcdFx0XHRcdEQub3ZlcmxheS5ibG9jay5yZW1vdmUoKTtcclxuXHRcdFx0XHRcdFx0RC5jb250YWluZXIuYmxvY2sucmVtb3ZlKCk7XHJcblx0XHRcdFx0XHRcdCR0aGlzLmRhdGEoJ2FyY3RpY21vZGFsJywgbnVsbCk7XHJcblx0XHRcdFx0XHRcdGlmICghJCgnLmFyY3RpY21vZGFsLWNvbnRhaW5lcicpLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChELndyYXAuZGF0YSgnYXJjdGljbW9kYWxPdmVyZmxvdycpKVxyXG5cdFx0XHRcdFx0XHRcdFx0RC53cmFwLmNzcygnb3ZlcmZsb3cnLCBELndyYXAuZGF0YSgnYXJjdGljbW9kYWxPdmVyZmxvdycpKTtcclxuXHRcdFx0XHRcdFx0XHRELndyYXAuY3NzKCdtYXJnaW5SaWdodCcsIDApO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKEQudHlwZT09J2FqYXgnKVxyXG5cdFx0XHRcdFx0XHRELmFqYXhfcmVxdWVzdC5hYm9ydCgpO1xyXG5cclxuXHRcdFx0XHRcdG1vZGFscyA9IG1vZGFscy5ub3QoJHRoaXMpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvLyDQo9GB0YLQsNC90L7QstC40YLRjCDQvtC/0YbQuNC4INC/0L4t0YPQvNC+0LvRh9Cw0L3QuNGOXHJcblx0XHRzZXREZWZhdWx0OiBmdW5jdGlvbihvcHRpb25zKSB7XHJcblx0XHRcdCQuZXh0ZW5kKHRydWUsIGRlZmF1bHRfb3B0aW9ucywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblxyXG5cclxuXHR9O1xyXG5cclxuXHJcblx0JChmdW5jdGlvbigpIHtcclxuXHRcdGRlZmF1bHRfb3B0aW9ucy53cmFwID0gJCgoZG9jdW1lbnQuYWxsICYmICFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKSA/ICdodG1sJyA6ICdib2R5Jyk7XHJcblx0fSk7XHJcblxyXG5cclxuXHQvLyDQl9Cw0LrRgNGL0YLQuNC1INC/0YDQuCDQvdCw0LbQsNGC0LjQuCBFc2NhcGVcclxuXHQkKGRvY3VtZW50KS5iaW5kKCdrZXl1cC5hcmN0aWNtb2RhbCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdHZhciBtID0gbW9kYWxzLmxhc3QoKTtcclxuXHRcdGlmICghbS5sZW5ndGgpIHJldHVybjtcclxuXHRcdHZhciBEID0gbS5kYXRhKCdhcmN0aWNtb2RhbCcpO1xyXG5cdFx0aWYgKEQuY2xvc2VPbkVzYyAmJiAoZS5rZXlDb2RlPT09MjcpKVxyXG5cdFx0XHRtLmFyY3RpY21vZGFsKCdjbG9zZScpO1xyXG5cdH0pO1xyXG5cclxuXHJcblx0JC5hcmN0aWNtb2RhbCA9ICQuZm4uYXJjdGljbW9kYWwgPSBmdW5jdGlvbihtZXRob2QpIHtcclxuXHJcblx0XHRpZiAoYWN0aW9uc1ttZXRob2RdKSB7XHJcblx0XHRcdHJldHVybiBhY3Rpb25zW21ldGhvZF0uYXBwbHkodGhpcywgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XHJcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBtZXRob2Q9PT0nb2JqZWN0JyB8fCAhbWV0aG9kKSB7XHJcblx0XHRcdHJldHVybiBtb2RhbC5pbml0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkLmVycm9yKCdqcXVlcnkuYXJjdGljbW9kYWw6IE1ldGhvZCAnICsgbWV0aG9kICsgJyBkb2VzIG5vdCBleGlzdCcpO1xyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG5cclxuXHJcbn0pKGpRdWVyeSk7XHJcbi8qISBDb3B5cmlnaHQgKGMpIDIwMTMgQnJhbmRvbiBBYXJvbiAoaHR0cDovL2JyYW5kb24uYWFyb24uc2gpXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTElDRU5TRS50eHQpLlxyXG4gKlxyXG4gKiBWZXJzaW9uOiAzLjEuOVxyXG4gKlxyXG4gKiBSZXF1aXJlczogalF1ZXJ5IDEuMi4yK1xyXG4gKi9cclxuXHJcbihmdW5jdGlvbiAoZmFjdG9yeSkge1xyXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xyXG4gICAgICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cclxuICAgICAgICBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIC8vIE5vZGUvQ29tbW9uSlMgc3R5bGUgZm9yIEJyb3dzZXJpZnlcclxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3Rvcnk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xyXG4gICAgICAgIGZhY3RvcnkoalF1ZXJ5KTtcclxuICAgIH1cclxufShmdW5jdGlvbiAoJCkge1xyXG5cclxuICAgIHZhciB0b0ZpeCA9IFsnd2hlZWwnLCAnbW91c2V3aGVlbCcsICdET01Nb3VzZVNjcm9sbCcsICdNb3pNb3VzZVBpeGVsU2Nyb2xsJ10sXHJcbiAgICAgICAgdG9CaW5kID0gKCAnb253aGVlbCcgaW4gZG9jdW1lbnQgfHwgZG9jdW1lbnQuZG9jdW1lbnRNb2RlID49IDkgKSA/XHJcbiAgICAgICAgICAgIFsnd2hlZWwnXSA6IFsnbW91c2V3aGVlbCcsICdEb21Nb3VzZVNjcm9sbCcsICdNb3pNb3VzZVBpeGVsU2Nyb2xsJ10sXHJcbiAgICAgICAgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UsXHJcbiAgICAgICAgbnVsbExvd2VzdERlbHRhVGltZW91dCwgbG93ZXN0RGVsdGE7XHJcblxyXG4gICAgaWYgKCQuZXZlbnQuZml4SG9va3MpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gdG9GaXgubGVuZ3RoOyBpOykge1xyXG4gICAgICAgICAgICAkLmV2ZW50LmZpeEhvb2tzWyB0b0ZpeFstLWldIF0gPSAkLmV2ZW50Lm1vdXNlSG9va3M7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBzcGVjaWFsID0gJC5ldmVudC5zcGVjaWFsLm1vdXNld2hlZWwgPSB7XHJcbiAgICAgICAgdmVyc2lvbjogJzMuMS45JyxcclxuXHJcbiAgICAgICAgc2V0dXA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IHRvQmluZC5sZW5ndGg7IGk7KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKHRvQmluZFstLWldLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ubW91c2V3aGVlbCA9IGhhbmRsZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gU3RvcmUgdGhlIGxpbmUgaGVpZ2h0IGFuZCBwYWdlIGhlaWdodCBmb3IgdGhpcyBwYXJ0aWN1bGFyIGVsZW1lbnRcclxuICAgICAgICAgICAgJC5kYXRhKHRoaXMsICdtb3VzZXdoZWVsLWxpbmUtaGVpZ2h0Jywgc3BlY2lhbC5nZXRMaW5lSGVpZ2h0KHRoaXMpKTtcclxuICAgICAgICAgICAgJC5kYXRhKHRoaXMsICdtb3VzZXdoZWVsLXBhZ2UtaGVpZ2h0Jywgc3BlY2lhbC5nZXRQYWdlSGVpZ2h0KHRoaXMpKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB0ZWFyZG93bjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gdG9CaW5kLmxlbmd0aDsgaTspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIodG9CaW5kWy0taV0sIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25tb3VzZXdoZWVsID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGdldExpbmVIZWlnaHQ6IGZ1bmN0aW9uIChlbGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludCgkKGVsZW0pWydvZmZzZXRQYXJlbnQnIGluICQuZm4gPyAnb2Zmc2V0UGFyZW50JyA6ICdwYXJlbnQnXSgpLmNzcygnZm9udFNpemUnKSwgMTApO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGdldFBhZ2VIZWlnaHQ6IGZ1bmN0aW9uIChlbGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAkKGVsZW0pLmhlaWdodCgpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIGFkanVzdE9sZERlbHRhczogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJC5mbi5leHRlbmQoe1xyXG4gICAgICAgIG1vdXNld2hlZWw6IGZ1bmN0aW9uIChmbikge1xyXG4gICAgICAgICAgICByZXR1cm4gZm4gPyB0aGlzLmJpbmQoJ21vdXNld2hlZWwnLCBmbikgOiB0aGlzLnRyaWdnZXIoJ21vdXNld2hlZWwnKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB1bm1vdXNld2hlZWw6IGZ1bmN0aW9uIChmbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy51bmJpbmQoJ21vdXNld2hlZWwnLCBmbik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQpIHtcclxuICAgICAgICB2YXIgb3JnRXZlbnQgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQsXHJcbiAgICAgICAgICAgIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSksXHJcbiAgICAgICAgICAgIGRlbHRhID0gMCxcclxuICAgICAgICAgICAgZGVsdGFYID0gMCxcclxuICAgICAgICAgICAgZGVsdGFZID0gMCxcclxuICAgICAgICAgICAgYWJzRGVsdGEgPSAwO1xyXG4gICAgICAgIGV2ZW50ID0gJC5ldmVudC5maXgob3JnRXZlbnQpO1xyXG4gICAgICAgIGV2ZW50LnR5cGUgPSAnbW91c2V3aGVlbCc7XHJcblxyXG4gICAgICAgIC8vIE9sZCBzY2hvb2wgc2Nyb2xsd2hlZWwgZGVsdGFcclxuICAgICAgICBpZiAoJ2RldGFpbCcgICAgICBpbiBvcmdFdmVudCkge1xyXG4gICAgICAgICAgICBkZWx0YVkgPSBvcmdFdmVudC5kZXRhaWwgKiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCd3aGVlbERlbHRhJyAgaW4gb3JnRXZlbnQpIHtcclxuICAgICAgICAgICAgZGVsdGFZID0gb3JnRXZlbnQud2hlZWxEZWx0YTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCd3aGVlbERlbHRhWScgaW4gb3JnRXZlbnQpIHtcclxuICAgICAgICAgICAgZGVsdGFZID0gb3JnRXZlbnQud2hlZWxEZWx0YVk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgnd2hlZWxEZWx0YVgnIGluIG9yZ0V2ZW50KSB7XHJcbiAgICAgICAgICAgIGRlbHRhWCA9IG9yZ0V2ZW50LndoZWVsRGVsdGFYICogLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBGaXJlZm94IDwgMTcgaG9yaXpvbnRhbCBzY3JvbGxpbmcgcmVsYXRlZCB0byBET01Nb3VzZVNjcm9sbCBldmVudFxyXG4gICAgICAgIGlmICgnYXhpcycgaW4gb3JnRXZlbnQgJiYgb3JnRXZlbnQuYXhpcyA9PT0gb3JnRXZlbnQuSE9SSVpPTlRBTF9BWElTKSB7XHJcbiAgICAgICAgICAgIGRlbHRhWCA9IGRlbHRhWSAqIC0xO1xyXG4gICAgICAgICAgICBkZWx0YVkgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU2V0IGRlbHRhIHRvIGJlIGRlbHRhWSBvciBkZWx0YVggaWYgZGVsdGFZIGlzIDAgZm9yIGJhY2t3YXJkcyBjb21wYXRhYmlsaXRpeVxyXG4gICAgICAgIGRlbHRhID0gZGVsdGFZID09PSAwID8gZGVsdGFYIDogZGVsdGFZO1xyXG5cclxuICAgICAgICAvLyBOZXcgc2Nob29sIHdoZWVsIGRlbHRhICh3aGVlbCBldmVudClcclxuICAgICAgICBpZiAoJ2RlbHRhWScgaW4gb3JnRXZlbnQpIHtcclxuICAgICAgICAgICAgZGVsdGFZID0gb3JnRXZlbnQuZGVsdGFZICogLTE7XHJcbiAgICAgICAgICAgIGRlbHRhID0gZGVsdGFZO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoJ2RlbHRhWCcgaW4gb3JnRXZlbnQpIHtcclxuICAgICAgICAgICAgZGVsdGFYID0gb3JnRXZlbnQuZGVsdGFYO1xyXG4gICAgICAgICAgICBpZiAoZGVsdGFZID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBkZWx0YSA9IGRlbHRhWCAqIC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBObyBjaGFuZ2UgYWN0dWFsbHkgaGFwcGVuZWQsIG5vIHJlYXNvbiB0byBnbyBhbnkgZnVydGhlclxyXG4gICAgICAgIGlmIChkZWx0YVkgPT09IDAgJiYgZGVsdGFYID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE5lZWQgdG8gY29udmVydCBsaW5lcyBhbmQgcGFnZXMgdG8gcGl4ZWxzIGlmIHdlIGFyZW4ndCBhbHJlYWR5IGluIHBpeGVsc1xyXG4gICAgICAgIC8vIFRoZXJlIGFyZSB0aHJlZSBkZWx0YSBtb2RlczpcclxuICAgICAgICAvLyAgICogZGVsdGFNb2RlIDAgaXMgYnkgcGl4ZWxzLCBub3RoaW5nIHRvIGRvXHJcbiAgICAgICAgLy8gICAqIGRlbHRhTW9kZSAxIGlzIGJ5IGxpbmVzXHJcbiAgICAgICAgLy8gICAqIGRlbHRhTW9kZSAyIGlzIGJ5IHBhZ2VzXHJcbiAgICAgICAgaWYgKG9yZ0V2ZW50LmRlbHRhTW9kZSA9PT0gMSkge1xyXG4gICAgICAgICAgICB2YXIgbGluZUhlaWdodCA9ICQuZGF0YSh0aGlzLCAnbW91c2V3aGVlbC1saW5lLWhlaWdodCcpO1xyXG4gICAgICAgICAgICBkZWx0YSAqPSBsaW5lSGVpZ2h0O1xyXG4gICAgICAgICAgICBkZWx0YVkgKj0gbGluZUhlaWdodDtcclxuICAgICAgICAgICAgZGVsdGFYICo9IGxpbmVIZWlnaHQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvcmdFdmVudC5kZWx0YU1vZGUgPT09IDIpIHtcclxuICAgICAgICAgICAgdmFyIHBhZ2VIZWlnaHQgPSAkLmRhdGEodGhpcywgJ21vdXNld2hlZWwtcGFnZS1oZWlnaHQnKTtcclxuICAgICAgICAgICAgZGVsdGEgKj0gcGFnZUhlaWdodDtcclxuICAgICAgICAgICAgZGVsdGFZICo9IHBhZ2VIZWlnaHQ7XHJcbiAgICAgICAgICAgIGRlbHRhWCAqPSBwYWdlSGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU3RvcmUgbG93ZXN0IGFic29sdXRlIGRlbHRhIHRvIG5vcm1hbGl6ZSB0aGUgZGVsdGEgdmFsdWVzXHJcbiAgICAgICAgYWJzRGVsdGEgPSBNYXRoLm1heChNYXRoLmFicyhkZWx0YVkpLCBNYXRoLmFicyhkZWx0YVgpKTtcclxuXHJcbiAgICAgICAgaWYgKCFsb3dlc3REZWx0YSB8fCBhYnNEZWx0YSA8IGxvd2VzdERlbHRhKSB7XHJcbiAgICAgICAgICAgIGxvd2VzdERlbHRhID0gYWJzRGVsdGE7XHJcblxyXG4gICAgICAgICAgICAvLyBBZGp1c3Qgb2xkZXIgZGVsdGFzIGlmIG5lY2Vzc2FyeVxyXG4gICAgICAgICAgICBpZiAoc2hvdWxkQWRqdXN0T2xkRGVsdGFzKG9yZ0V2ZW50LCBhYnNEZWx0YSkpIHtcclxuICAgICAgICAgICAgICAgIGxvd2VzdERlbHRhIC89IDQwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBZGp1c3Qgb2xkZXIgZGVsdGFzIGlmIG5lY2Vzc2FyeVxyXG4gICAgICAgIGlmIChzaG91bGRBZGp1c3RPbGREZWx0YXMob3JnRXZlbnQsIGFic0RlbHRhKSkge1xyXG4gICAgICAgICAgICAvLyBEaXZpZGUgYWxsIHRoZSB0aGluZ3MgYnkgNDAhXHJcbiAgICAgICAgICAgIGRlbHRhIC89IDQwO1xyXG4gICAgICAgICAgICBkZWx0YVggLz0gNDA7XHJcbiAgICAgICAgICAgIGRlbHRhWSAvPSA0MDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEdldCBhIHdob2xlLCBub3JtYWxpemVkIHZhbHVlIGZvciB0aGUgZGVsdGFzXHJcbiAgICAgICAgZGVsdGEgPSBNYXRoWyBkZWx0YSA+PSAxID8gJ2Zsb29yJyA6ICdjZWlsJyBdKGRlbHRhIC8gbG93ZXN0RGVsdGEpO1xyXG4gICAgICAgIGRlbHRhWCA9IE1hdGhbIGRlbHRhWCA+PSAxID8gJ2Zsb29yJyA6ICdjZWlsJyBdKGRlbHRhWCAvIGxvd2VzdERlbHRhKTtcclxuICAgICAgICBkZWx0YVkgPSBNYXRoWyBkZWx0YVkgPj0gMSA/ICdmbG9vcicgOiAnY2VpbCcgXShkZWx0YVkgLyBsb3dlc3REZWx0YSk7XHJcblxyXG4gICAgICAgIC8vIEFkZCBpbmZvcm1hdGlvbiB0byB0aGUgZXZlbnQgb2JqZWN0XHJcbiAgICAgICAgZXZlbnQuZGVsdGFYID0gZGVsdGFYO1xyXG4gICAgICAgIGV2ZW50LmRlbHRhWSA9IGRlbHRhWTtcclxuICAgICAgICBldmVudC5kZWx0YUZhY3RvciA9IGxvd2VzdERlbHRhO1xyXG4gICAgICAgIC8vIEdvIGFoZWFkIGFuZCBzZXQgZGVsdGFNb2RlIHRvIDAgc2luY2Ugd2UgY29udmVydGVkIHRvIHBpeGVsc1xyXG4gICAgICAgIC8vIEFsdGhvdWdoIHRoaXMgaXMgYSBsaXR0bGUgb2RkIHNpbmNlIHdlIG92ZXJ3cml0ZSB0aGUgZGVsdGFYL1lcclxuICAgICAgICAvLyBwcm9wZXJ0aWVzIHdpdGggbm9ybWFsaXplZCBkZWx0YXMuXHJcbiAgICAgICAgZXZlbnQuZGVsdGFNb2RlID0gMDtcclxuXHJcbiAgICAgICAgLy8gQWRkIGV2ZW50IGFuZCBkZWx0YSB0byB0aGUgZnJvbnQgb2YgdGhlIGFyZ3VtZW50c1xyXG4gICAgICAgIGFyZ3MudW5zaGlmdChldmVudCwgZGVsdGEsIGRlbHRhWCwgZGVsdGFZKTtcclxuXHJcbiAgICAgICAgLy8gQ2xlYXJvdXQgbG93ZXN0RGVsdGEgYWZ0ZXIgc29tZXRpbWUgdG8gYmV0dGVyXHJcbiAgICAgICAgLy8gaGFuZGxlIG11bHRpcGxlIGRldmljZSB0eXBlcyB0aGF0IGdpdmUgZGlmZmVyZW50XHJcbiAgICAgICAgLy8gYSBkaWZmZXJlbnQgbG93ZXN0RGVsdGFcclxuICAgICAgICAvLyBFeDogdHJhY2twYWQgPSAzIGFuZCBtb3VzZSB3aGVlbCA9IDEyMFxyXG4gICAgICAgIGlmIChudWxsTG93ZXN0RGVsdGFUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChudWxsTG93ZXN0RGVsdGFUaW1lb3V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbnVsbExvd2VzdERlbHRhVGltZW91dCA9IHNldFRpbWVvdXQobnVsbExvd2VzdERlbHRhLCAyMDApO1xyXG5cclxuICAgICAgICByZXR1cm4gKCQuZXZlbnQuZGlzcGF0Y2ggfHwgJC5ldmVudC5oYW5kbGUpLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG51bGxMb3dlc3REZWx0YSgpIHtcclxuICAgICAgICBsb3dlc3REZWx0YSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvdWxkQWRqdXN0T2xkRGVsdGFzKG9yZ0V2ZW50LCBhYnNEZWx0YSkge1xyXG4gICAgICAgIC8vIElmIHRoaXMgaXMgYW4gb2xkZXIgZXZlbnQgYW5kIHRoZSBkZWx0YSBpcyBkaXZpc2FibGUgYnkgMTIwLFxyXG4gICAgICAgIC8vIHRoZW4gd2UgYXJlIGFzc3VtaW5nIHRoYXQgdGhlIGJyb3dzZXIgaXMgdHJlYXRpbmcgdGhpcyBhcyBhblxyXG4gICAgICAgIC8vIG9sZGVyIG1vdXNlIHdoZWVsIGV2ZW50IGFuZCB0aGF0IHdlIHNob3VsZCBkaXZpZGUgdGhlIGRlbHRhc1xyXG4gICAgICAgIC8vIGJ5IDQwIHRvIHRyeSBhbmQgZ2V0IGEgbW9yZSB1c2FibGUgZGVsdGFGYWN0b3IuXHJcbiAgICAgICAgLy8gU2lkZSBub3RlLCB0aGlzIGFjdHVhbGx5IGltcGFjdHMgdGhlIHJlcG9ydGVkIHNjcm9sbCBkaXN0YW5jZVxyXG4gICAgICAgIC8vIGluIG9sZGVyIGJyb3dzZXJzIGFuZCBjYW4gY2F1c2Ugc2Nyb2xsaW5nIHRvIGJlIHNsb3dlciB0aGFuIG5hdGl2ZS5cclxuICAgICAgICAvLyBUdXJuIHRoaXMgb2ZmIGJ5IHNldHRpbmcgJC5ldmVudC5zcGVjaWFsLm1vdXNld2hlZWwuc2V0dGluZ3MuYWRqdXN0T2xkRGVsdGFzIHRvIGZhbHNlLlxyXG4gICAgICAgIHJldHVybiBzcGVjaWFsLnNldHRpbmdzLmFkanVzdE9sZERlbHRhcyAmJiBvcmdFdmVudC50eXBlID09PSAnbW91c2V3aGVlbCcgJiYgYWJzRGVsdGEgJSAxMjAgPT09IDA7XHJcbiAgICB9XHJcblxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ3JlYXRlZCBieSB2aXRhbHkgb24gMTIuMDMuMjAxNi5cclxuICovXHJcbjsoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJChcIi5zbGlkZXJcIikub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzbGlkZVNwZWVkOiAzMDAsXHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uU3BlZWQ6IDQwMCxcclxuICAgICAgICAgICAgICAgIHNpbmdsZUl0ZW06IHRydWUsXHJcbiAgICAgICAgICAgICAgICByZXdpbmROYXY6IHRydWUsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZVJlZnJlc2hSYXRlOiAyMDAsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlQmFzZVdpZHRoOiB3aW5kb3dcclxuICAgICAgICB9KTtcclxufSkoKTtcclxuXHJcblxyXG5cclxuXHJcbnZhciAkbWFzdGVyID0gJChcIiN3cmFwcGVyXCIpLFxyXG4gICAgJGhjbSA9ICQoXCIuaGVhZGVyV3JhcE1vYmlsZVwiKSxcclxuICAgICRzbGlkZU1lbnUgPSAkKFwiI3NsaWRlTWVudVwiKSxcclxuICAgICRuYW5vID0gJCgnLm5hbm8nKSxcclxuICAgICRoZWFkZXIgPSAkKFwiLmhlYWRlclwiKSxcclxuICAgICRoZWFkZXJIZWxwZXIgPSAkKFwiLmhlYWRlckhlbHBlclwiKTtcclxuXHJcblxyXG5mdW5jdGlvbiBIZWlnaHRfaGVhZGVyKGhoLCBoKXtcclxuICAgIHZhciAkaGVhZGVyX2hlaWdodCA9IGhoLm91dGVySGVpZ2h0KCk7XHJcbiAgICBoLmNzcyh7XHJcbiAgICAgICAgXCJoZWlnaHRcIiA6ICRoZWFkZXJfaGVpZ2h0XHJcbiAgICB9KTtcclxuICAgIGhoLmNzcyh7XHJcbiAgICAgICAgXCJwb3NpdGlvblwiIDogXCJmaXhlZFwiLFxyXG4gICAgICAgIFwidG9wXCIgOiAwLFxyXG4gICAgICAgIFwibGVmdFwiIDogMCxcclxuICAgICAgICBcIndpZHRoXCIgOiBcIjEwMCVcIixcclxuICAgICAgICBcInotaW5kZXhcIiA6IDJcclxuICAgIH0pO1xyXG59SGVpZ2h0X2hlYWRlcigkaGVhZGVyLCAkaGVhZGVySGVscGVyKTtcclxuXHJcblxyXG4gICAgLy8gbmFub1Njcm9sbGVyXHJcbiAgICAkbmFuby5uYW5vU2Nyb2xsZXIoe1xyXG4gICAgICAgIHByZXZlbnRQYWdlU2Nyb2xsaW5nOiB0cnVlLFxyXG4gICAgICAgIGFsd2F5c1Zpc2libGU6IGZhbHNlLFxyXG4gICAgICAgIGlPU05hdGl2ZVNjcm9sbGluZzogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAkKCcuc2xpZGVNZW51Q2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJGhjbS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJG1hc3Rlci5yZW1vdmVDbGFzcygnc2xpZGVkJyk7XHJcbiAgICAgICAgJHNsaWRlTWVudS5yZW1vdmVDbGFzcygnc2xpZGVkJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgICAkaGNtLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkaGNtLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICRtYXN0ZXIudG9nZ2xlQ2xhc3MoXCJzbGlkZWRcIik7XHJcbiAgICAgICAgJHNsaWRlTWVudS50b2dnbGVDbGFzcyhcInNsaWRlZFwiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcblxyXG4kKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCl7XHJcbiAgICBIZWlnaHRfaGVhZGVyKCRoZWFkZXIsICRoZWFkZXJIZWxwZXIpO1xyXG59KTtcclxuXHJcbnZhciBmZWVkYmFja01vZHVsZSA9IGZ1bmN0aW9uIGZlZWRiYWNrTW9kdWxlKCkge1xyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVGZWVkYmFja0Zvcm0oZmllbGRzKSB7XHJcbiAgICAgICAgdmFyIGhhc0Vycm9yID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGVycm9yTWVzc2FnZXMgPSB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiAnaXMgcmVxdWlyZWQnLFxyXG4gICAgICAgICAgICBwaG9uZTogJ2ludmFsaWQgcGhvbmUgbnVtYmVyLiBGb3JtYXQgaXMgK1hYIFhYWFggWFhYWCcsXHJcbiAgICAgICAgICAgIGVtYWlsOiAnaXMgbWFuZGF0b3J5IGZpZWxkJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciB2YWxpZGF0aW9uUnVsZXMgPSB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmdW5jdGlvbih2YWwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAhIXZhbDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGhvbmU6IGZ1bmN0aW9uKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIC9eXFwrPyhbMC05XXsyfSlcXCk/Wy0uIF0/KFswLTldezR9KVstLiBdPyhbMC05XXs0fSkkLy50ZXN0KHZhbCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVtYWlsOiBmdW5jdGlvbih2YWwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAvXlxcdytAW2EtekEtWl9dKz9cXC5bYS16QS1aXXsyLDN9JC8udGVzdCh2YWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGUoZmllbGQpIHtcclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMCwgaiA9IGZpZWxkLnZhbGlkYXRpb25zLmxlbmd0aDsgaSA8IGo7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYoIXZhbGlkYXRpb25SdWxlc1tmaWVsZC52YWxpZGF0aW9uc1tpXV0oZmllbGQuJGVsLnZhbCgpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhc0Vycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC4kZWwudmFsKGZpZWxkLm5hbWUgKyAnICcgKyBlcnJvck1lc3NhZ2VzW2ZpZWxkLnZhbGlkYXRpb25zW2ldXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuJGVsLmFkZENsYXNzKCdlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuJGVsLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmaWVsZHMuZm9yRWFjaChmdW5jdGlvbihmaWVsZCkge1xyXG4gICAgICAgICAgICB2YWxpZGF0ZShmaWVsZCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBoYXNFcnJvcjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgJCgnI2ZlZWRiYWNrJykub24oXCJjbGlja1wiICxmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgYyA9ICQoJzxkaXYgY2xhc3M9XCJib3gtbW9kYWxcIiAvPicpO1xyXG4gICAgICAgIGMuaHRtbCgkKCcuYi10ZXh0JykuaHRtbCgpKTtcclxuICAgICAgICBjLnByZXBlbmQoJzxkaXYgY2xhc3M9XCJib3gtbW9kYWxfY2xvc2UgYXJjdGljbW9kYWwtY2xvc2VcIj7Qt9Cw0LrRgNGL0YLRjDwvZGl2PicpO1xyXG4gICAgICAgICQuYXJjdGljbW9kYWwoe1xyXG4gICAgICAgICAgICBjb250ZW50OiBjXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmFyY3RpY21vZGFsLWNvbnRhaW5lciAjYnV0dG9uJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGZpZWxkcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ25hbWUnLFxyXG4gICAgICAgICAgICAgICAgJGVsOiAkKCcuYXJjdGljbW9kYWwtY29udGFpbmVyICNuYW1lJyksXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uczogWydyZXF1aXJlZCddXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdwaG9uZScsXHJcbiAgICAgICAgICAgICAgICAkZWw6ICQoJy5hcmN0aWNtb2RhbC1jb250YWluZXIgI3Bob25lJyksXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uczogWydyZXF1aXJlZCcsICdwaG9uZSddXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdlbWFpbCcsXHJcbiAgICAgICAgICAgICAgICAkZWw6ICQoJy5hcmN0aWNtb2RhbC1jb250YWluZXIgI2VtYWlsJyksXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uczogWydyZXF1aXJlZCcsICdlbWFpbCddXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG4gICAgICAgIHZhciBlcnJvciA9IHZhbGlkYXRlRmVlZGJhY2tGb3JtKGZpZWxkcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Zvcm0gaGFzIGVycm9yICcgKyBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgfSk7XHJcbn07XHJcbmZlZWRiYWNrTW9kdWxlKCk7Il0sImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
