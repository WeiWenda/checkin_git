!
function(e, t) {
    function n() {
        var e = m.elements;
        return "string" == typeof e ? e.split(" ") : e
    }
    function r(e) {
        var t = h[e[d]];
        return t || (t = {},
        p++, e[d] = p, h[p] = t),
        t
    }
    function i(e, n, i) {
        return n || (n = t),
        l ? n.createElement(e) : (i || (i = r(n)), n = i.cache[e] ? i.cache[e].cloneNode() : f.test(e) ? (i.cache[e] = i.createElem(e)).cloneNode() : i.createElem(e), n.canHaveChildren && !u.test(e) ? i.frag.appendChild(n) : n)
    }
    function o(e, t) {
        t.cache || (t.cache = {},
        t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()),
        e.createElement = function(n) {
            return m.shivMethods ? i(n, e, t) : t.createElem(n)
        },
        e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/[\w\-]+/g,
        function(e) {
            return t.createElem(e),
            t.frag.createElement(e),
            'c("' + e + '")'
        }) + ");return n}")(m, t.frag)
    }
    function a(e) {
        e || (e = t);
        var n = r(e);
        if (m.shivCSS && !s && !n.hasCSS) {
            var i, a = e;
            i = a.createElement("p"),
            a = a.getElementsByTagName("head")[0] || a.documentElement,
            i.innerHTML = "x<style>article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}</style>",
            i = a.insertBefore(i.lastChild, a.firstChild),
            n.hasCSS = !!i
        }
        return l || o(e, n),
        e
    }
    var s, l, c = e.html5 || {},
    u = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
    f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
    d = "_html5shiv",
    p = 0,
    h = {}; !
    function() {
        try {
            var e = t.createElement("a");
            e.innerHTML = "<xyz></xyz>",
            s = "hidden" in e;
            var n;
            if (! (n = 1 == e.childNodes.length)) {
                t.createElement("a");
                var r = t.createDocumentFragment();
                n = "undefined" == typeof r.cloneNode || "undefined" == typeof r.createDocumentFragment || "undefined" == typeof r.createElement
            }
            l = n
        } catch(i) {
            l = s = !0
        }
    } ();
    var m = {
        elements: c.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
        version: "3.7.0",
        shivCSS: !1 !== c.shivCSS,
        supportsUnknownElements: l,
        shivMethods: !1 !== c.shivMethods,
        type: "default",
        shivDocument: a,
        createElement: i,
        createDocumentFragment: function(e, i) {
            if (e || (e = t), l) return e.createDocumentFragment();
            for (var i = i || r(e), o = i.frag.cloneNode(), a = 0, s = n(), c = s.length; c > a; a++) o.createElement(s[a]);
            return o
        }
    };
    e.html5 = m,
    a(t)
} (this, document),
!
function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    }: t(e)
} ("undefined" != typeof window ? window: this,
function(e, t) {
    function n(e) {
        var t = e.length,
        n = ot.type(e);
        return "function" === n || ot.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }
    function r(e, t, n) {
        if (ot.isFunction(t)) return ot.grep(e,
        function(e, r) {
            return !! t.call(e, r, e) !== n
        });
        if (t.nodeType) return ot.grep(e,
        function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (pt.test(t)) return ot.filter(t, e, n);
            t = ot.filter(t, e)
        }
        return ot.grep(e,
        function(e) {
            return ot.inArray(e, t) >= 0 !== n
        })
    }
    function i(e, t) {
        do e = e[t];
        while (e && 1 !== e.nodeType);
        return e
    }
    function o(e) {
        var t = wt[e] = {};
        return ot.each(e.match(xt) || [],
        function(e, n) {
            t[n] = !0
        }),
        t
    }
    function a() {
        mt.addEventListener ? (mt.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (mt.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
    }
    function s() { (mt.addEventListener || "load" === event.type || "complete" === mt.readyState) && (a(), ot.ready())
    }
    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(St, "-$1").toLowerCase();
            if (n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null: +n + "" === n ? +n: kt.test(n) ? ot.parseJSON(n) : n
                } catch(i) {}
                ot.data(e, t, n)
            } else n = void 0
        }
        return n
    }
    function c(e) {
        var t;
        for (t in e) if (("data" !== t || !ot.isEmptyObject(e[t])) && "toJSON" !== t) return ! 1;
        return ! 0
    }
    function u(e, t, n, r) {
        if (ot.acceptData(e)) {
            var i, o, a = ot.expando,
            s = e.nodeType,
            l = s ? ot.cache: e,
            c = s ? e[a] : e[a] && a;
            if (c && l[c] && (r || l[c].data) || void 0 !== n || "string" != typeof t) return c || (c = s ? e[a] = G.pop() || ot.guid++:a),
            l[c] || (l[c] = s ? {}: {
                toJSON: ot.noop
            }),
            ("object" == typeof t || "function" == typeof t) && (r ? l[c] = ot.extend(l[c], t) : l[c].data = ot.extend(l[c].data, t)),
            o = l[c],
            r || (o.data || (o.data = {}), o = o.data),
            void 0 !== n && (o[ot.camelCase(t)] = n),
            "string" == typeof t ? (i = o[t], null == i && (i = o[ot.camelCase(t)])) : i = o,
            i
        }
    }
    function f(e, t, n) {
        if (ot.acceptData(e)) {
            var r, i, o = e.nodeType,
            a = o ? ot.cache: e,
            s = o ? e[ot.expando] : ot.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    ot.isArray(t) ? t = t.concat(ot.map(t, ot.camelCase)) : t in r ? t = [t] : (t = ot.camelCase(t), t = t in r ? [t] : t.split(" ")),
                    i = t.length;
                    for (; i--;) delete r[t[i]];
                    if (n ? !c(r) : !ot.isEmptyObject(r)) return
                } (n || (delete a[s].data, c(a[s]))) && (o ? ot.cleanData([e], !0) : rt.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }
    function d() {
        return ! 0
    }
    function p() {
        return ! 1
    }
    function h() {
        try {
            return mt.activeElement
        } catch(e) {}
    }
    function m(e) {
        var t = Ft.split("|"),
        n = e.createDocumentFragment();
        if (n.createElement) for (; t.length;) n.createElement(t.pop());
        return n
    }
    function g(e, t) {
        var n, r, i = 0,
        o = typeof e.getElementsByTagName !== Ct ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Ct ? e.querySelectorAll(t || "*") : void 0;
        if (!o) for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) ! t || ot.nodeName(r, t) ? o.push(r) : ot.merge(o, g(r, t));
        return void 0 === t || t && ot.nodeName(e, t) ? ot.merge([e], o) : o
    }
    function v(e) {
        _t.test(e.type) && (e.defaultChecked = e.checked)
    }
    function y(e, t) {
        return ot.nodeName(e, "table") && ot.nodeName(11 !== t.nodeType ? t: t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function b(e) {
        return e.type = (null !== ot.find.attr(e, "type")) + "/" + e.type,
        e
    }
    function x(e) {
        var t = Gt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function w(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) ot._data(n, "globalEval", !t || ot._data(t[r], "globalEval"))
    }
    function T(e, t) {
        if (1 === t.nodeType && ot.hasData(e)) {
            var n, r, i, o = ot._data(e),
            a = ot._data(t, o),
            s = o.events;
            if (s) {
                delete a.handle,
                a.events = {};
                for (n in s) for (r = 0, i = s[n].length; i > r; r++) ot.event.add(t, n, s[n][r])
            }
            a.data && (a.data = ot.extend({},
            a.data))
        }
    }
    function E(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !rt.noCloneEvent && t[ot.expando]) {
                i = ot._data(t);
                for (r in i.events) ot.removeEvent(t, r, i.handle);
                t.removeAttribute(ot.expando)
            }
            "script" === n && t.text !== e.text ? (b(t).text = e.text, x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), rt.html5Clone && e.innerHTML && !ot.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && _t.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected: ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    function C(t, n) {
        var r = ot(n.createElement(t)).appendTo(n.body),
        i = e.getDefaultComputedStyle ? e.getDefaultComputedStyle(r[0]).display: ot.css(r[0], "display");
        return r.detach(),
        i
    }
    function k(e) {
        var t = mt,
        n = en[e];
        return n || (n = C(e, t), "none" !== n && n || (Zt = (Zt || ot("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Zt[0].contentWindow || Zt[0].contentDocument).document, t.write(), t.close(), n = C(e, t), Zt.detach()), en[e] = n),
        n
    }
    function S(e, t) {
        return {
            get: function() {
                var n = e();
                return null != n ? n ? void delete this.get: (this.get = t).apply(this, arguments) : void 0
            }
        }
    }
    function N(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = hn.length; i--;) if (t = hn[i] + n, t in e) return t;
        return r
    }
    function L(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a],
        r.style && (o[a] = ot._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && At(r) && (o[a] = ot._data(r, "olddisplay", k(r.nodeName)))) : o[a] || (i = At(r), (n && "none" !== n || !i) && ot._data(r, "olddisplay", i ? n: ot.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a],
        r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "": "none"));
        return e
    }
    function A(e, t, n) {
        var r = un.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function D(e, t, n, r, i) {
        for (var o = n === (r ? "border": "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)"margin" === n && (a += ot.css(e, n + Lt[o], !0, i)),
        r ? ("content" === n && (a -= ot.css(e, "padding" + Lt[o], !0, i)), "margin" !== n && (a -= ot.css(e, "border" + Lt[o] + "Width", !0, i))) : (a += ot.css(e, "padding" + Lt[o], !0, i), "padding" !== n && (a += ot.css(e, "border" + Lt[o] + "Width", !0, i)));
        return a
    }
    function _(e, t, n) {
        var r = !0,
        i = "width" === t ? e.offsetWidth: e.offsetHeight,
        o = tn(e),
        a = rt.boxSizing() && "border-box" === ot.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = nn(e, t, o), (0 > i || null == i) && (i = e.style[t]), on.test(i)) return i;
            r = a && (rt.boxSizingReliable() || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        return i + D(e, t, n || (a ? "border": "content"), r, o) + "px"
    }
    function j(e, t, n, r, i) {
        return new j.prototype.init(e, t, n, r, i)
    }
    function O() {
        return setTimeout(function() {
            mn = void 0
        }),
        mn = ot.now()
    }
    function H(e, t) {
        var n, r = {
            height: e
        },
        i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Lt[i],
        r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    function $(e, t, n) {
        for (var r, i = (wn[t] || []).concat(wn["*"]), o = 0, a = i.length; a > o; o++) if (r = i[o].call(n, t, e)) return r
    }
    function M(e, t, n) {
        var r, i, o, a, s, l, c, u, f = this,
        d = {},
        p = e.style,
        h = e.nodeType && At(e),
        m = ot._data(e, "fxshow");
        n.queue || (s = ot._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, f.always(function() {
            f.always(function() {
                s.unqueued--,
                ot.queue(e, "fx").length || s.empty.fire()
            })
        })),
        1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = ot.css(e, "display"), u = k(e.nodeName), "none" === c && (c = u), "inline" === c && "none" === ot.css(e, "float") && (rt.inlineBlockNeedsLayout && "inline" !== u ? p.zoom = 1 : p.display = "inline-block")),
        n.overflow && (p.overflow = "hidden", rt.shrinkWrapBlocks() || f.always(function() {
            p.overflow = n.overflow[0],
            p.overflowX = n.overflow[1],
            p.overflowY = n.overflow[2]
        }));
        for (r in t) if (i = t[r], vn.exec(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (h ? "hide": "show")) {
                if ("show" !== i || !m || void 0 === m[r]) continue;
                h = !0
            }
            d[r] = m && m[r] || ot.style(e, r)
        }
        if (!ot.isEmptyObject(d)) {
            m ? "hidden" in m && (h = m.hidden) : m = ot._data(e, "fxshow", {}),
            o && (m.hidden = !h),
            h ? ot(e).show() : f.done(function() {
                ot(e).hide()
            }),
            f.done(function() {
                var t;
                ot._removeData(e, "fxshow");
                for (t in d) ot.style(e, t, d[t])
            });
            for (r in d) a = $(h ? m[r] : 0, r, f),
            r in m || (m[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function F(e, t) {
        var n, r, i, o, a;
        for (n in e) if (r = ot.camelCase(n), i = t[r], o = e[n], ot.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = ot.cssHooks[r], a && "expand" in a) {
            o = a.expand(o),
            delete e[r];
            for (n in o) n in e || (e[n] = o[n], t[n] = i)
        } else t[r] = i
    }
    function P(e, t, n) {
        var r, i, o = 0,
        a = xn.length,
        s = ot.Deferred().always(function() {
            delete l.elem
        }),
        l = function() {
            if (i) return ! 1;
            for (var t = mn || O(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, o = 1 - r, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(o);
            return s.notifyWith(e, [c, o, n]),
            1 > o && l ? n: (s.resolveWith(e, [c]), !1)
        },
        c = s.promise({
            elem: e,
            props: ot.extend({},
            t),
            opts: ot.extend(!0, {
                specialEasing: {}
            },
            n),
            originalProperties: t,
            originalOptions: n,
            startTime: mn || O(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = ot.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0,
                r = t ? c.tweens.length: 0;
                if (i) return this;
                for (i = !0; r > n; n++) c.tweens[n].run(1);
                return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]),
                this
            }
        }),
        u = c.props;
        for (F(u, c.opts.specialEasing); a > o; o++) if (r = xn[o].call(c, e, u, c.opts)) return r;
        return ot.map(u, $, c),
        ot.isFunction(c.opts.start) && c.opts.start.call(e, c),
        ot.fx.timer(ot.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })),
        c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    function q(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
            o = t.toLowerCase().match(xt) || [];
            if (ot.isFunction(n)) for (; r = o[i++];)"+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function z(e, t, n, r) {
        function i(s) {
            var l;
            return o[s] = !0,
            ot.each(e[s] || [],
            function(e, s) {
                var c = s(t, n, r);
                return "string" != typeof c || a || o[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), i(c), !1)
            }),
            l
        }
        var o = {},
        a = e === Xn;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }
    function B(e, t) {
        var n, r, i = ot.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((i[r] ? e: n || (n = {}))[r] = t[r]);
        return n && ot.extend(!0, e, n),
        e
    }
    function W(e, t, n) {
        for (var r, i, o, a, s = e.contents,
        l = e.dataTypes;
        "*" === l[0];) l.shift(),
        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i) for (a in s) if (s[a] && s[a].test(i)) {
            l.unshift(a);
            break
        }
        if (l[0] in n) o = l[0];
        else {
            for (a in n) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                    o = a;
                    break
                }
                r || (r = a)
            }
            o = o || r
        }
        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
    }
    function R(e, t, n, r) {
        var i, o, a, s, l, c = {},
        u = e.dataTypes.slice();
        if (u[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
        for (o = u.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift()) if ("*" === o) o = l;
        else if ("*" !== l && l !== o) {
            if (a = c[l + " " + o] || c["* " + o], !a) for (i in c) if (s = i.split(" "), s[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                a === !0 ? a = c[i] : c[i] !== !0 && (o = s[0], u.unshift(s[1]));
                break
            }
            if (a !== !0) if (a && e["throws"]) t = a(t);
            else try {
                t = a(t)
            } catch(f) {
                return {
                    state: "parsererror",
                    error: a ? f: "No conversion from " + l + " to " + o
                }
            }
        }
        return {
            state: "success",
            data: t
        }
    }
    function I(e, t, n, r) {
        var i;
        if (ot.isArray(t)) ot.each(t,
        function(t, i) {
            n || Jn.test(e) ? r(e, i) : I(e + "[" + ("object" == typeof i ? t: "") + "]", i, n, r)
        });
        else if (n || "object" !== ot.type(t)) r(e, t);
        else for (i in t) I(e + "[" + i + "]", t[i], n, r)
    }
    function X() {
        try {
            return new e.XMLHttpRequest
        } catch(t) {}
    }
    function V() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch(t) {}
    }
    function U(e) {
        return ot.isWindow(e) ? e: 9 === e.nodeType ? e.defaultView || e.parentWindow: !1
    }
    var G = [],
    J = G.slice,
    Q = G.concat,
    Y = G.push,
    K = G.indexOf,
    Z = {},
    et = Z.toString,
    tt = Z.hasOwnProperty,
    nt = "".trim,
    rt = {},
    it = "1.11.0",
    ot = function(e, t) {
        return new ot.fn.init(e, t)
    },
    at = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    st = /^-ms-/,
    lt = /-([\da-z])/gi,
    ct = function(e, t) {
        return t.toUpperCase()
    };
    ot.fn = ot.prototype = {
        jquery: it,
        constructor: ot,
        selector: "",
        length: 0,
        toArray: function() {
            return J.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : J.call(this)
        },
        pushStack: function(e) {
            var t = ot.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return ot.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(ot.map(this,
            function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(J.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(e) {
            var t = this.length,
            n = +e + (0 > e ? t: 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Y,
        sort: G.sort,
        splice: G.splice
    },
    ot.extend = ot.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
        s = 1,
        l = arguments.length,
        c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[s] || {},
        s++), "object" == typeof a || ot.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++) if (null != (i = arguments[s])) for (r in i) e = a[r],
        n = i[r],
        a !== n && (c && n && (ot.isPlainObject(n) || (t = ot.isArray(n))) ? (t ? (t = !1, o = e && ot.isArray(e) ? e: []) : o = e && ot.isPlainObject(e) ? e: {},
        a[r] = ot.extend(c, o, n)) : void 0 !== n && (a[r] = n));
        return a
    },
    ot.extend({
        expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === ot.type(e)
        },
        isArray: Array.isArray ||
        function(e) {
            return "array" === ot.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return e - parseFloat(e) >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return ! 1;
            return ! 0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== ot.type(e) || e.nodeType || ot.isWindow(e)) return ! 1;
            try {
                if (e.constructor && !tt.call(e, "constructor") && !tt.call(e.constructor.prototype, "isPrototypeOf")) return ! 1
            } catch(n) {
                return ! 1
            }
            if (rt.ownLast) for (t in e) return tt.call(e, t);
            for (t in e);
            return void 0 === t || tt.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "": "object" == typeof e || "function" == typeof e ? Z[et.call(e)] || "object": typeof e
        },
        globalEval: function(t) {
            t && ot.trim(t) && (e.execScript ||
            function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(st, "ms-").replace(lt, ct)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, r) {
            var i, o = 0,
            a = e.length,
            s = n(e);
            if (r) {
                if (s) for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
                else for (o in e) if (i = t.apply(e[o], r), i === !1) break
            } else if (s) for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
            else for (o in e) if (i = t.call(e[o], o, e[o]), i === !1) break;
            return e
        },
        trim: nt && !nt.call("﻿ ") ?
        function(e) {
            return null == e ? "": nt.call(e)
        }: function(e) {
            return null == e ? "": (e + "").replace(at, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? ot.merge(r, "string" == typeof e ? [e] : e) : Y.call(r, e)),
            r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (K) return K.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n: 0; r > n; n++) if (n in t && t[n] === e) return n
            }
            return - 1
        },
        merge: function(e, t) {
            for (var n = +t.length,
            r = 0,
            i = e.length; n > r;) e[i++] = t[r++];
            if (n !== n) for (; void 0 !== t[r];) e[i++] = t[r++];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++) r = !t(e[o], o),
            r !== s && i.push(e[o]);
            return i
        },
        map: function(e, t, r) {
            var i, o = 0,
            a = e.length,
            s = n(e),
            l = [];
            if (s) for (; a > o; o++) i = t(e[o], o, r),
            null != i && l.push(i);
            else for (o in e) i = t(e[o], o, r),
            null != i && l.push(i);
            return Q.apply([], l)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (i = e[t], t = e, e = i),
            ot.isFunction(e) ? (n = J.call(arguments, 2), r = function() {
                return e.apply(t || this, n.concat(J.call(arguments)))
            },
            r.guid = e.guid = e.guid || ot.guid++, r) : void 0
        },
        now: function() {
            return + new Date
        },
        support: rt
    }),
    ot.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(e, t) {
        Z["[object " + t + "]"] = t.toLowerCase()
    });
    var ut = function(e) {
        function t(e, t, n, r) {
            var i, o, a, s, l, c, f, h, m, g;
            if ((t ? t.ownerDocument || t: z) !== j && _(t), t = t || j, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if (H && !r) {
                if (i = yt.exec(e)) if (a = i[1]) {
                    if (9 === s) {
                        if (o = t.getElementById(a), !o || !o.parentNode) return n;
                        if (o.id === a) return n.push(o),
                        n
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && P(t, o) && o.id === a) return n.push(o),
                    n
                } else {
                    if (i[2]) return Z.apply(n, t.getElementsByTagName(e)),
                    n;
                    if ((a = i[3]) && E.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(a)),
                    n
                }
                if (E.qsa && (!$ || !$.test(e))) {
                    if (h = f = q, m = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (c = d(e), (f = t.getAttribute("id")) ? h = f.replace(xt, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", l = c.length; l--;) c[l] = h + p(c[l]);
                        m = bt.test(e) && u(t.parentNode) || t,
                        g = c.join(",")
                    }
                    if (g) try {
                        return Z.apply(n, m.querySelectorAll(g)),
                        n
                    } catch(v) {} finally {
                        f || t.removeAttribute("id")
                    }
                }
            }
            return w(e.replace(lt, "$1"), t, n, r)
        }
        function n() {
            function e(n, r) {
                return t.push(n + " ") > C.cacheLength && delete e[t.shift()],
                e[n + " "] = r
            }
            var t = [];
            return e
        }
        function r(e) {
            return e[q] = !0,
            e
        }
        function i(e) {
            var t = j.createElement("div");
            try {
                return !! e(t)
            } catch(n) {
                return ! 1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), r = e.length; r--;) C.attrHandle[n[r]] = t
        }
        function a(e, t) {
            var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || G) - (~e.sourceIndex || G);
            if (r) return r;
            if (n) for (; n = n.nextSibling;) if (n === t) return - 1;
            return e ? 1 : -1
        }
        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function c(e) {
            return r(function(t) {
                return t = +t,
                r(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function u(e) {
            return e && typeof e.getElementsByTagName !== U && e
        }
        function f() {}
        function d(e, n) {
            var r, i, o, a, s, l, c, u = I[e + " "];
            if (u) return n ? 0 : u.slice(0);
            for (s = e, l = [], c = C.preFilter; s;) { (!r || (i = ct.exec(s))) && (i && (s = s.slice(i[0].length) || s), l.push(o = [])),
                r = !1,
                (i = ut.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(lt, " ")
                }), s = s.slice(r.length));
                for (a in C.filter) ! (i = ht[a].exec(s)) || c[a] && !(i = c[a](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length: s ? t.error(e) : I(e, l).slice(0)
        }
        function p(e) {
            for (var t = 0,
            n = e.length,
            r = ""; n > t; t++) r += e[t].value;
            return r
        }
        function h(e, t, n) {
            var r = t.dir,
            i = n && "parentNode" === r,
            o = W++;
            return t.first ?
            function(t, n, o) {
                for (; t = t[r];) if (1 === t.nodeType || i) return e(t, n, o)
            }: function(t, n, a) {
                var s, l, c = [B, o];
                if (a) {
                    for (; t = t[r];) if ((1 === t.nodeType || i) && e(t, n, a)) return ! 0
                } else for (; t = t[r];) if (1 === t.nodeType || i) {
                    if (l = t[q] || (t[q] = {}), (s = l[r]) && s[0] === B && s[1] === o) return c[2] = s[2];
                    if (l[r] = c, c[2] = e(t, n, a)) return ! 0
                }
            }
        }
        function m(e) {
            return e.length > 1 ?
            function(t, n, r) {
                for (var i = e.length; i--;) if (!e[i](t, n, r)) return ! 1;
                return ! 0
            }: e[0]
        }
        function g(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, c = null != t; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), c && t.push(s));
            return a
        }
        function v(e, t, n, i, o, a) {
            return i && !i[q] && (i = v(i)),
            o && !o[q] && (o = v(o, a)),
            r(function(r, a, s, l) {
                var c, u, f, d = [],
                p = [],
                h = a.length,
                m = r || x(t || "*", s.nodeType ? [s] : s, []),
                v = !e || !r && t ? m: g(m, d, e, s, l),
                y = n ? o || (r ? e: h || i) ? [] : a: v;
                if (n && n(v, y, s, l), i) for (c = g(y, p), i(c, [], s, l), u = c.length; u--;)(f = c[u]) && (y[p[u]] = !(v[p[u]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (c = [], u = y.length; u--;)(f = y[u]) && c.push(v[u] = f);
                            o(null, y = [], c, l)
                        }
                        for (u = y.length; u--;)(f = y[u]) && (c = o ? tt.call(r, f) : d[u]) > -1 && (r[c] = !(a[c] = f))
                    }
                } else y = g(y === a ? y.splice(h, y.length) : y),
                o ? o(null, a, y, l) : Z.apply(a, y)
            })
        }
        function y(e) {
            for (var t, n, r, i = e.length,
            o = C.relative[e[0].type], a = o || C.relative[" "], s = o ? 1 : 0, l = h(function(e) {
                return e === t
            },
            a, !0), c = h(function(e) {
                return tt.call(t, e) > -1
            },
            a, !0), u = [function(e, n, r) {
                return ! o && (r || n !== L) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
            }]; i > s; s++) if (n = C.relative[e[s].type]) u = [h(m(u), n)];
            else {
                if (n = C.filter[e[s].type].apply(null, e[s].matches), n[q]) {
                    for (r = ++s; i > r && !C.relative[e[r].type]; r++);
                    return v(s > 1 && m(u), s > 1 && p(e.slice(0, s - 1).concat({
                        value: " " === e[s - 2].type ? "*": ""
                    })).replace(lt, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && p(e))
                }
                u.push(n)
            }
            return m(u)
        }
        function b(e, n) {
            var i = n.length > 0,
            o = e.length > 0,
            a = function(r, a, s, l, c) {
                var u, f, d, p = 0,
                h = "0",
                m = r && [],
                v = [],
                y = L,
                b = r || o && C.find.TAG("*", c),
                x = B += null == y ? 1 : Math.random() || .1,
                w = b.length;
                for (c && (L = a !== j && a); h !== w && null != (u = b[h]); h++) {
                    if (o && u) {
                        for (f = 0; d = e[f++];) if (d(u, a, s)) {
                            l.push(u);
                            break
                        }
                        c && (B = x)
                    }
                    i && ((u = !d && u) && p--, r && m.push(u))
                }
                if (p += h, i && h !== p) {
                    for (f = 0; d = n[f++];) d(m, v, a, s);
                    if (r) {
                        if (p > 0) for (; h--;) m[h] || v[h] || (v[h] = Y.call(l));
                        v = g(v)
                    }
                    Z.apply(l, v),
                    c && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                }
                return c && (B = x, L = y),
                m
            };
            return i ? r(a) : a
        }
        function x(e, n, r) {
            for (var i = 0,
            o = n.length; o > i; i++) t(e, n[i], r);
            return r
        }
        function w(e, t, n, r) {
            var i, o, a, s, l, c = d(e);
            if (!r && 1 === c.length) {
                if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && E.getById && 9 === t.nodeType && H && C.relative[o[1].type]) {
                    if (t = (C.find.ID(a.matches[0].replace(wt, Tt), t) || [])[0], !t) return n;
                    e = e.slice(o.shift().value.length)
                }
                for (i = ht.needsContext.test(e) ? 0 : o.length; i--&&(a = o[i], !C.relative[s = a.type]);) if ((l = C.find[s]) && (r = l(a.matches[0].replace(wt, Tt), bt.test(o[0].type) && u(t.parentNode) || t))) {
                    if (o.splice(i, 1), e = r.length && p(o), !e) return Z.apply(n, r),
                    n;
                    break
                }
            }
            return N(e, c)(r, t, !H, n, bt.test(e) && u(t.parentNode) || t),
            n
        }
        var T, E, C, k, S, N, L, A, D, _, j, O, H, $, M, F, P, q = "sizzle" + -new Date,
        z = e.document,
        B = 0,
        W = 0,
        R = n(),
        I = n(),
        X = n(),
        V = function(e, t) {
            return e === t && (D = !0),
            0
        },
        U = "undefined",
        G = 1 << 31,
        J = {}.hasOwnProperty,
        Q = [],
        Y = Q.pop,
        K = Q.push,
        Z = Q.push,
        et = Q.slice,
        tt = Q.indexOf ||
        function(e) {
            for (var t = 0,
            n = this.length; n > t; t++) if (this[t] === e) return t;
            return - 1
        },
        nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        rt = "[\\x20\\t\\r\\n\\f]",
        it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        ot = it.replace("w", "w#"),
        at = "\\[" + rt + "*(" + it + ")" + rt + "*(?:([*^$|!~]?=)" + rt + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ot + ")|)|)" + rt + "*\\]",
        st = ":(" + it + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + at.replace(3, 8) + ")*)|.*)\\)|)",
        lt = new RegExp("^" + rt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + rt + "+$", "g"),
        ct = new RegExp("^" + rt + "*," + rt + "*"),
        ut = new RegExp("^" + rt + "*([>+~]|" + rt + ")" + rt + "*"),
        ft = new RegExp("=" + rt + "*([^\\]'\"]*?)" + rt + "*\\]", "g"),
        dt = new RegExp(st),
        pt = new RegExp("^" + ot + "$"),
        ht = {
            ID: new RegExp("^#(" + it + ")"),
            CLASS: new RegExp("^\\.(" + it + ")"),
            TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + at),
            PSEUDO: new RegExp("^" + st),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + rt + "*(even|odd|(([+-]|)(\\d*)n|)" + rt + "*(?:([+-]|)" + rt + "*(\\d+)|))" + rt + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + nt + ")$", "i"),
            needsContext: new RegExp("^" + rt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + rt + "*((?:-\\d)?\\d*)" + rt + "*\\)|)(?=[^-]|$)", "i")
        },
        mt = /^(?:input|select|textarea|button)$/i,
        gt = /^h\d$/i,
        vt = /^[^{]+\{\s*\[native \w/,
        yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        bt = /[+~]/,
        xt = /'|\\/g,
        wt = new RegExp("\\\\([\\da-f]{1,6}" + rt + "?|(" + rt + ")|.)", "ig"),
        Tt = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t: 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        };
        try {
            Z.apply(Q = et.call(z.childNodes), z.childNodes),
            Q[z.childNodes.length].nodeType
        } catch(Et) {
            Z = {
                apply: Q.length ?
                function(e, t) {
                    K.apply(e, et.call(t))
                }: function(e, t) {
                    for (var n = e.length,
                    r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        E = t.support = {},
        S = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName: !1
        },
        _ = t.setDocument = function(e) {
            var t, n = e ? e.ownerDocument || e: z,
            r = n.defaultView;
            return n !== j && 9 === n.nodeType && n.documentElement ? (j = n, O = n.documentElement, H = !S(n), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload",
            function() {
                _()
            },
            !1) : r.attachEvent && r.attachEvent("onunload",
            function() {
                _()
            })), E.attributes = i(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }), E.getElementsByTagName = i(function(e) {
                return e.appendChild(n.createComment("")),
                !e.getElementsByTagName("*").length
            }), E.getElementsByClassName = vt.test(n.getElementsByClassName) && i(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>",
                e.firstChild.className = "i",
                2 === e.getElementsByClassName("i").length
            }), E.getById = i(function(e) {
                return O.appendChild(e).id = q,
                !n.getElementsByName || !n.getElementsByName(q).length
            }), E.getById ? (C.find.ID = function(e, t) {
                if (typeof t.getElementById !== U && H) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            },
            C.filter.ID = function(e) {
                var t = e.replace(wt, Tt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete C.find.ID, C.filter.ID = function(e) {
                var t = e.replace(wt, Tt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== U && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), C.find.TAG = E.getElementsByTagName ?
            function(e, t) {
                return typeof t.getElementsByTagName !== U ? t.getElementsByTagName(e) : void 0
            }: function(e, t) {
                var n, r = [],
                i = 0,
                o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            },
            C.find.CLASS = E.getElementsByClassName &&
            function(e, t) {
                return typeof t.getElementsByClassName !== U && H ? t.getElementsByClassName(e) : void 0
            },
            M = [], $ = [], (E.qsa = vt.test(n.querySelectorAll)) && (i(function(e) {
                e.innerHTML = "<select t=''><option selected=''></option></select>",
                e.querySelectorAll("[t^='']").length && $.push("[*^$]=" + rt + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || $.push("\\[" + rt + "*(?:value|" + nt + ")"),
                e.querySelectorAll(":checked").length || $.push(":checked")
            }), i(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && $.push("name" + rt + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || $.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                $.push(",.*:")
            })), (E.matchesSelector = vt.test(F = O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && i(function(e) {
                E.disconnectedMatch = F.call(e, "div"),
                F.call(e, "[s!='']:x"),
                M.push("!=", st)
            }), $ = $.length && new RegExp($.join("|")), M = M.length && new RegExp(M.join("|")), t = vt.test(O.compareDocumentPosition), P = t || vt.test(O.contains) ?
            function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement: e,
                r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }: function(e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return ! 0;
                return ! 1
            },
            V = t ?
            function(e, t) {
                if (e === t) return D = !0,
                0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r: (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !E.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === z && P(z, e) ? -1 : t === n || t.ownerDocument === z && P(z, t) ? 1 : A ? tt.call(A, e) - tt.call(A, t) : 0 : 4 & r ? -1 : 1)
            }: function(e, t) {
                if (e === t) return D = !0,
                0;
                var r, i = 0,
                o = e.parentNode,
                s = t.parentNode,
                l = [e],
                c = [t];
                if (!o || !s) return e === n ? -1 : t === n ? 1 : o ? -1 : s ? 1 : A ? tt.call(A, e) - tt.call(A, t) : 0;
                if (o === s) return a(e, t);
                for (r = e; r = r.parentNode;) l.unshift(r);
                for (r = t; r = r.parentNode;) c.unshift(r);
                for (; l[i] === c[i];) i++;
                return i ? a(l[i], c[i]) : l[i] === z ? -1 : c[i] === z ? 1 : 0
            },
            n) : j
        },
        t.matches = function(e, n) {
            return t(e, null, null, n)
        },
        t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== j && _(e), n = n.replace(ft, "='$1']"), !(!E.matchesSelector || !H || M && M.test(n) || $ && $.test(n))) try {
                var r = F.call(e, n);
                if (r || E.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch(i) {}
            return t(n, j, null, [e]).length > 0
        },
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== j && _(e),
            P(e, t)
        },
        t.attr = function(e, t) { (e.ownerDocument || e) !== j && _(e);
            var n = C.attrHandle[t.toLowerCase()],
            r = n && J.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
            return void 0 !== r ? r: E.attributes || !H ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value: null
        },
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        },
        t.uniqueSort = function(e) {
            var t, n = [],
            r = 0,
            i = 0;
            if (D = !E.detectDuplicates, A = !E.sortStable && e.slice(0), e.sort(V), D) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return A = null,
            e
        },
        k = t.getText = function(e) {
            var t, n = "",
            r = 0,
            i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += k(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else for (; t = e[r++];) n += k(t);
            return n
        },
        C = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: ht,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(wt, Tt),
                    e[3] = (e[4] || e[5] || "").replace(wt, Tt),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[5] && e[2];
                    return ht.CHILD.test(e[0]) ? null: (e[3] && void 0 !== e[4] ? e[2] = e[4] : n && dt.test(n) && (t = d(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(wt, Tt).toLowerCase();
                    return "*" === e ?
                    function() {
                        return ! 0
                    }: function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = R[e + " "];
                    return t || (t = new RegExp("(^|" + rt + ")" + e + "(" + rt + "|$)")) && R(e,
                    function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== U && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n: n ? (o += "", "=" === n ? o === r: "!=" === n ? o !== r: "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice( - r.length) === r: "~=" === n ? (" " + o + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-": !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                    a = "last" !== e.slice( - 4),
                    s = "of-type" === t;
                    return 1 === r && 0 === i ?
                    function(e) {
                        return !! e.parentNode
                    }: function(t, n, l) {
                        var c, u, f, d, p, h, m = o !== a ? "nextSibling": "previousSibling",
                        g = t.parentNode,
                        v = s && t.nodeName.toLowerCase(),
                        y = !l && !s;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (f = t; f = f[m];) if (s ? f.nodeName.toLowerCase() === v: 1 === f.nodeType) return ! 1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return ! 0
                            }
                            if (h = [a ? g.firstChild: g.lastChild], a && y) {
                                for (u = g[q] || (g[q] = {}), c = u[e] || [], p = c[0] === B && c[1], d = c[0] === B && c[2], f = p && g.childNodes[p]; f = ++p && f && f[m] || (d = p = 0) || h.pop();) if (1 === f.nodeType && ++d && f === t) {
                                    u[e] = [B, p, d];
                                    break
                                }
                            } else if (y && (c = (t[q] || (t[q] = {}))[e]) && c[0] === B) d = c[1];
                            else for (; (f = ++p && f && f[m] || (d = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v: 1 !== f.nodeType) || !++d || (y && ((f[q] || (f[q] = {}))[e] = [B, d]), f !== t)););
                            return d -= i,
                            d === r || d % r === 0 && d / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[q] ? o(n) : o.length > 1 ? (i = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), a = i.length; a--;) r = tt.call(e, i[a]),
                        e[r] = !(t[r] = i[a])
                    }) : function(e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                    n = [],
                    i = N(e.replace(lt, "$1"));
                    return i[q] ? r(function(e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, r, o) {
                        return t[0] = e,
                        i(t, null, o, n),
                        !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                    }
                }),
                lang: r(function(e) {
                    return pt.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(wt, Tt).toLowerCase(),
                    function(t) {
                        var n;
                        do
                        if (n = H ? t.lang: t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(),
                        n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return ! 1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === O
                },
                focus: function(e) {
                    return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return ! 1;
                    return ! 0
                },
                parent: function(e) {
                    return ! C.pseudos.empty(e)
                },
                header: function(e) {
                    return gt.test(e.nodeName)
                },
                input: function(e) {
                    return mt.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, n) {
                    return [0 > n ? n + t: n]
                }),
                even: c(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: c(function(e, t, n) {
                    for (var r = 0 > n ? n + t: n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: c(function(e, t, n) {
                    for (var r = 0 > n ? n + t: n; ++r < t;) e.push(r);
                    return e
                })
            }
        },
        C.pseudos.nth = C.pseudos.eq;
        for (T in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) C.pseudos[T] = s(T);
        for (T in {
            submit: !0,
            reset: !0
        }) C.pseudos[T] = l(T);
        return f.prototype = C.filters = C.pseudos,
        C.setFilters = new f,
        N = t.compile = function(e, t) {
            var n, r = [],
            i = [],
            o = X[e + " "];
            if (!o) {
                for (t || (t = d(e)), n = t.length; n--;) o = y(t[n]),
                o[q] ? r.push(o) : i.push(o);
                o = X(e, b(i, r))
            }
            return o
        },
        E.sortStable = q.split("").sort(V).join("") === q,
        E.detectDuplicates = !!D,
        _(),
        E.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(j.createElement("div"))
        }),
        i(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width",
        function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        E.attributes && i(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || o("value",
        function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }),
        i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(nt,
        function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value: null
        }),
        t
    } (e);
    ot.find = ut,
    ot.expr = ut.selectors,
    ot.expr[":"] = ot.expr.pseudos,
    ot.unique = ut.uniqueSort,
    ot.text = ut.getText,
    ot.isXMLDoc = ut.isXML,
    ot.contains = ut.contains;
    var ft = ot.expr.match.needsContext,
    dt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    pt = /^.[^:#\[\.,]*$/;
    ot.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? ot.find.matchesSelector(r, e) ? [r] : [] : ot.find.matches(e, ot.grep(t,
        function(e) {
            return 1 === e.nodeType
        }))
    },
    ot.fn.extend({
        find: function(e) {
            var t, n = [],
            r = this,
            i = r.length;
            if ("string" != typeof e) return this.pushStack(ot(e).filter(function() {
                for (t = 0; i > t; t++) if (ot.contains(r[t], this)) return ! 0
            }));
            for (t = 0; i > t; t++) ot.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? ot.unique(n) : n),
            n.selector = this.selector ? this.selector + " " + e: e,
            n
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !! r(this, "string" == typeof e && ft.test(e) ? ot(e) : e || [], !1).length
        }
    });
    var ht, mt = e.document,
    gt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    vt = ot.fn.init = function(e, t) {
        var n, r;
        if (!e) return this;
        if ("string" == typeof e) {
            if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : gt.exec(e), !n || !n[1] && t) return ! t || t.jquery ? (t || ht).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof ot ? t[0] : t, ot.merge(this, ot.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t: mt, !0)), dt.test(n[1]) && ot.isPlainObject(t)) for (n in t) ot.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            if (r = mt.getElementById(n[2]), r && r.parentNode) {
                if (r.id !== n[2]) return ht.find(e);
                this.length = 1,
                this[0] = r
            }
            return this.context = mt,
            this.selector = e,
            this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ot.isFunction(e) ? "undefined" != typeof ht.ready ? ht.ready(e) : e(ot) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ot.makeArray(e, this))
    };
    vt.prototype = ot.fn,
    ht = ot(mt);
    var yt = /^(?:parents|prev(?:Until|All))/,
    bt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    ot.extend({
        dir: function(e, t, n) {
            for (var r = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !ot(i).is(n));) 1 === i.nodeType && r.push(i),
            i = i[t];
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }),
    ot.fn.extend({
        has: function(e) {
            var t, n = ot(e, this),
            r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++) if (ot.contains(this, n[t])) return ! 0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0,
            i = this.length,
            o = [], a = ft.test(e) || "string" != typeof e ? ot(e, t || this.context) : 0; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ot.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? ot.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? ot.inArray(this[0], ot(e)) : ot.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(e, t) {
            return this.pushStack(ot.unique(ot.merge(this.get(), ot(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject: this.prevObject.filter(e))
        }
    }),
    ot.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t: null
        },
        parents: function(e) {
            return ot.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return ot.dir(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return ot.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return ot.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return ot.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return ot.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return ot.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return ot.sibling(e.firstChild)
        },
        contents: function(e) {
            return ot.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document: ot.merge([], e.childNodes)
        }
    },
    function(e, t) {
        ot.fn[e] = function(n, r) {
            var i = ot.map(this, t, n);
            return "Until" !== e.slice( - 5) && (r = n),
            r && "string" == typeof r && (i = ot.filter(r, i)),
            this.length > 1 && (bt[e] || (i = ot.unique(i)), yt.test(e) && (i = i.reverse())),
            this.pushStack(i)
        }
    });
    var xt = /\S+/g,
    wt = {};
    ot.Callbacks = function(e) {
        e = "string" == typeof e ? wt[e] || o(e) : ot.extend({},
        e);
        var t, n, r, i, a, s, l = [],
        c = !e.once && [],
        u = function(o) {
            for (n = e.memory && o, r = !0, a = s || 0, s = 0, i = l.length, t = !0; l && i > a; a++) if (l[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                n = !1;
                break
            }
            t = !1,
            l && (c ? c.length && u(c.shift()) : n ? l = [] : f.disable())
        },
        f = {
            add: function() {
                if (l) {
                    var r = l.length; !
                    function o(t) {
                        ot.each(t,
                        function(t, n) {
                            var r = ot.type(n);
                            "function" === r ? e.unique && f.has(n) || l.push(n) : n && n.length && "string" !== r && o(n)
                        })
                    } (arguments),
                    t ? i = l.length: n && (s = r, u(n))
                }
                return this
            },
            remove: function() {
                return l && ot.each(arguments,
                function(e, n) {
                    for (var r; (r = ot.inArray(n, l, r)) > -1;) l.splice(r, 1),
                    t && (i >= r && i--, a >= r && a--)
                }),
                this
            },
            has: function(e) {
                return e ? ot.inArray(e, l) > -1 : !(!l || !l.length)
            },
            empty: function() {
                return l = [],
                i = 0,
                this
            },
            disable: function() {
                return l = c = n = void 0,
                this
            },
            disabled: function() {
                return ! l
            },
            lock: function() {
                return c = void 0,
                n || f.disable(),
                this
            },
            locked: function() {
                return ! c
            },
            fireWith: function(e, n) {
                return ! l || r && !c || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? c.push(n) : u(n)),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! r
            }
        };
        return f
    },
    ot.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", ot.Callbacks("once memory"), "resolved"], ["reject", "fail", ot.Callbacks("once memory"), "rejected"], ["notify", "progress", ot.Callbacks("memory")]],
            n = "pending",
            r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return ot.Deferred(function(n) {
                        ot.each(t,
                        function(t, o) {
                            var a = ot.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = a && a.apply(this, arguments);
                                e && ot.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? ot.extend(e, r) : r
                }
            },
            i = {};
            return r.pipe = r.then,
            ot.each(t,
            function(e, o) {
                var a = o[2],
                s = o[3];
                r[o[1]] = a.add,
                s && a.add(function() {
                    n = s
                },
                t[1 ^ e][2].disable, t[2][2].lock),
                i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r: this, arguments),
                    this
                },
                i[o[0] + "With"] = a.fireWith
            }),
            r.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(e) {
            var t, n, r, i = 0,
            o = J.call(arguments),
            a = o.length,
            s = 1 !== a || e && ot.isFunction(e.promise) ? a: 0,
            l = 1 === s ? e: ot.Deferred(),
            c = function(e, n, r) {
                return function(i) {
                    n[e] = this,
                    r[e] = arguments.length > 1 ? J.call(arguments) : i,
                    r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
                }
            };
            if (a > 1) for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && ot.isFunction(o[i].promise) ? o[i].promise().done(c(i, r, o)).fail(l.reject).progress(c(i, n, t)) : --s;
            return s || l.resolveWith(r, o),
            l.promise()
        }
    });
    var Tt;
    ot.fn.ready = function(e) {
        return ot.ready.promise().done(e),
        this
    },
    ot.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? ot.readyWait++:ot.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--ot.readyWait: !ot.isReady) {
                if (!mt.body) return setTimeout(ot.ready);
                ot.isReady = !0,
                e !== !0 && --ot.readyWait > 0 || (Tt.resolveWith(mt, [ot]), ot.fn.trigger && ot(mt).trigger("ready").off("ready"))
            }
        }
    }),
    ot.ready.promise = function(t) {
        if (!Tt) if (Tt = ot.Deferred(), "complete" === mt.readyState) setTimeout(ot.ready);
        else if (mt.addEventListener) mt.addEventListener("DOMContentLoaded", s, !1),
        e.addEventListener("load", s, !1);
        else {
            mt.attachEvent("onreadystatechange", s),
            e.attachEvent("onload", s);
            var n = !1;
            try {
                n = null == e.frameElement && mt.documentElement
            } catch(r) {}
            n && n.doScroll && !
            function i() {
                if (!ot.isReady) {
                    try {
                        n.doScroll("left")
                    } catch(e) {
                        return setTimeout(i, 50)
                    }
                    a(),
                    ot.ready()
                }
            } ()
        }
        return Tt.promise(t)
    };
    var Et, Ct = "undefined";
    for (Et in ot(rt)) break;
    rt.ownLast = "0" !== Et,
    rt.inlineBlockNeedsLayout = !1,
    ot(function() {
        var e, t, n = mt.getElementsByTagName("body")[0];
        n && (e = mt.createElement("div"), e.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", t = mt.createElement("div"), n.appendChild(e).appendChild(t), typeof t.style.zoom !== Ct && (t.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (rt.inlineBlockNeedsLayout = 3 === t.offsetWidth) && (n.style.zoom = 1)), n.removeChild(e), e = t = null)
    }),
    function() {
        var e = mt.createElement("div");
        if (null == rt.deleteExpando) {
            rt.deleteExpando = !0;
            try {
                delete e.test
            } catch(t) {
                rt.deleteExpando = !1
            }
        }
        e = null
    } (),
    ot.acceptData = function(e) {
        var t = ot.noData[(e.nodeName + " ").toLowerCase()],
        n = +e.nodeType || 1;
        return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
    };
    var kt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    St = /([A-Z])/g;
    ot.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? ot.cache[e[ot.expando]] : e[ot.expando],
            !!e && !c(e)
        },
        data: function(e, t, n) {
            return u(e, t, n)
        },
        removeData: function(e, t) {
            return f(e, t)
        },
        _data: function(e, t, n) {
            return u(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return f(e, t, !0)
        }
    }),
    ot.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
            a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = ot.data(o), 1 === o.nodeType && !ot._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--;) r = a[n].name,
                    0 === r.indexOf("data-") && (r = ot.camelCase(r.slice(5)), l(o, r, i[r]));
                    ot._data(o, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                ot.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                ot.data(this, e, t)
            }) : o ? l(o, e, ot.data(o, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                ot.removeData(this, e)
            })
        }
    }),
    ot.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = ot._data(e, t), n && (!r || ot.isArray(n) ? r = ot._data(e, t, ot.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ot.queue(e, t),
            r = n.length,
            i = n.shift(),
            o = ot._queueHooks(e, t),
            a = function() {
                ot.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--),
            i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ot._data(e, n) || ot._data(e, n, {
                empty: ot.Callbacks("once memory").add(function() {
                    ot._removeData(e, t + "queue"),
                    ot._removeData(e, n)
                })
            })
        }
    }),
    ot.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--),
            arguments.length < n ? ot.queue(this[0], e) : void 0 === t ? this: this.each(function() {
                var n = ot.queue(this, e, t);
                ot._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && ot.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ot.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
            i = ot.Deferred(),
            o = this,
            a = this.length,
            s = function() {--r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = ot._data(o[a], e + "queueHooks"),
            n && n.empty && (r++, n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var Nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Lt = ["Top", "Right", "Bottom", "Left"],
    At = function(e, t) {
        return e = t || e,
        "none" === ot.css(e, "display") || !ot.contains(e.ownerDocument, e)
    },
    Dt = ot.access = function(e, t, n, r, i, o, a) {
        var s = 0,
        l = e.length,
        c = null == n;
        if ("object" === ot.type(n)) {
            i = !0;
            for (s in n) ot.access(e, t, s, n[s], !0, o, a)
        } else if (void 0 !== r && (i = !0, ot.isFunction(r) || (a = !0), c && (a ? (t.call(e, r), t = null) : (c = t, t = function(e, t, n) {
            return c.call(ot(e), n)
        })), t)) for (; l > s; s++) t(e[s], n, a ? r: r.call(e[s], s, t(e[s], n)));
        return i ? e: c ? t.call(e) : l ? t(e[0], n) : o
    },
    _t = /^(?:checkbox|radio)$/i; !
    function() {
        var e = mt.createDocumentFragment(),
        t = mt.createElement("div"),
        n = mt.createElement("input");
        if (t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a>", rt.leadingWhitespace = 3 === t.firstChild.nodeType, rt.tbody = !t.getElementsByTagName("tbody").length, rt.htmlSerialize = !!t.getElementsByTagName("link").length, rt.html5Clone = "<:nav></:nav>" !== mt.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, e.appendChild(n), rt.appendChecked = n.checked, t.innerHTML = "<textarea>x</textarea>", rt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", rt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, rt.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick",
        function() {
            rt.noCloneEvent = !1
        }), t.cloneNode(!0).click()), null == rt.deleteExpando) {
            rt.deleteExpando = !0;
            try {
                delete t.test
            } catch(r) {
                rt.deleteExpando = !1
            }
        }
        e = t = n = null
    } (),
    function() {
        var t, n, r = mt.createElement("div");
        for (t in {
            submit: !0,
            change: !0,
            focusin: !0
        }) n = "on" + t,
        (rt[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), rt[t + "Bubbles"] = r.attributes[n].expando === !1);
        r = null
    } ();
    var jt = /^(?:input|select|textarea)$/i,
    Ot = /^key/,
    Ht = /^(?:mouse|contextmenu)|click/,
    $t = /^(?:focusinfocus|focusoutblur)$/,
    Mt = /^([^.]*)(?:\.(.+)|)$/;
    ot.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, l, c, u, f, d, p, h, m, g = ot._data(e);
            if (g) {
                for (n.handler && (l = n, n = l.handler, i = l.selector), n.guid || (n.guid = ot.guid++), (a = g.events) || (a = g.events = {}), (u = g.handle) || (u = g.handle = function(e) {
                    return typeof ot === Ct || e && ot.event.triggered === e.type ? void 0 : ot.event.dispatch.apply(u.elem, arguments)
                },
                u.elem = e), t = (t || "").match(xt) || [""], s = t.length; s--;) o = Mt.exec(t[s]) || [],
                p = m = o[1],
                h = (o[2] || "").split(".").sort(),
                p && (c = ot.event.special[p] || {},
                p = (i ? c.delegateType: c.bindType) || p, c = ot.event.special[p] || {},
                f = ot.extend({
                    type: p,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && ot.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                },
                l), (d = a[p]) || (d = a[p] = [], d.delegateCount = 0, c.setup && c.setup.call(e, r, h, u) !== !1 || (e.addEventListener ? e.addEventListener(p, u, !1) : e.attachEvent && e.attachEvent("on" + p, u))), c.add && (c.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, f) : d.push(f), ot.event.global[p] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, c, u, f, d, p, h, m, g = ot.hasData(e) && ot._data(e);
            if (g && (u = g.events)) {
                for (t = (t || "").match(xt) || [""], c = t.length; c--;) if (s = Mt.exec(t[c]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                    for (f = ot.event.special[p] || {},
                    p = (r ? f.delegateType: f.bindType) || p, d = u[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--;) a = d[o],
                    !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (d.splice(o, 1), a.selector && d.delegateCount--, f.remove && f.remove.call(e, a));
                    l && !d.length && (f.teardown && f.teardown.call(e, h, g.handle) !== !1 || ot.removeEvent(e, p, g.handle), delete u[p])
                } else for (p in u) ot.event.remove(e, p + t[c], n, r, !0);
                ot.isEmptyObject(u) && (delete g.handle, ot._removeData(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var o, a, s, l, c, u, f, d = [r || mt],
            p = tt.call(t, "type") ? t.type: t,
            h = tt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = u = r = r || mt, 3 !== r.nodeType && 8 !== r.nodeType && !$t.test(p + ot.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[ot.expando] ? t: new ot.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : ot.makeArray(n, [t]), c = ot.event.special[p] || {},
            i || !c.trigger || c.trigger.apply(r, n) !== !1)) {
                if (!i && !c.noBubble && !ot.isWindow(r)) {
                    for (l = c.delegateType || p, $t.test(l + p) || (s = s.parentNode); s; s = s.parentNode) d.push(s),
                    u = s;
                    u === (r.ownerDocument || mt) && d.push(u.defaultView || u.parentWindow || e)
                }
                for (f = 0; (s = d[f++]) && !t.isPropagationStopped();) t.type = f > 1 ? l: c.bindType || p,
                o = (ot._data(s, "events") || {})[t.type] && ot._data(s, "handle"),
                o && o.apply(s, n),
                o = a && s[a],
                o && o.apply && ot.acceptData(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
                if (t.type = p, !i && !t.isDefaultPrevented() && (!c._default || c._default.apply(d.pop(), n) === !1) && ot.acceptData(r) && a && r[p] && !ot.isWindow(r)) {
                    u = r[a],
                    u && (r[a] = null),
                    ot.event.triggered = p;
                    try {
                        r[p]()
                    } catch(m) {}
                    ot.event.triggered = void 0,
                    u && (r[a] = u)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = ot.event.fix(e);
            var t, n, r, i, o, a = [],
            s = J.call(arguments),
            l = (ot._data(this, "events") || {})[e.type] || [],
            c = ot.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (a = ot.event.handlers.call(this, e, l), t = 0; (i = a[t++]) && !e.isPropagationStopped();) for (e.currentTarget = i.elem, o = 0; (r = i.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, n = ((ot.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a = [],
            s = t.delegateCount,
            l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                for (i = [], o = 0; s > o; o++) r = t[o],
                n = r.selector + " ",
                void 0 === i[n] && (i[n] = r.needsContext ? ot(n, this).index(l) >= 0 : ot.find(n, this, null, [l]).length),
                i[n] && i.push(r);
                i.length && a.push({
                    elem: l,
                    handlers: i
                })
            }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }),
            a
        },
        fix: function(e) {
            if (e[ot.expando]) return e;
            var t, n, r, i = e.type,
            o = e,
            a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Ht.test(i) ? this.mouseHooks: Ot.test(i) ? this.keyHooks: {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ot.Event(o), t = r.length; t--;) n = r[t],
            e[n] = o[n];
            return e.target || (e.target = o.srcElement || mt),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode: t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button,
                a = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || mt, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)),
                !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement: a),
                e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== h() && this.focus) try {
                        return this.focus(),
                        !1
                    } catch(e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === h() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return ot.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return ot.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = ot.extend(new ot.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? ot.event.trigger(i, null, t) : ot.event.dispatch.call(t, i),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    ot.removeEvent = mt.removeEventListener ?
    function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }: function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === Ct && (e[r] = null), e.detachEvent(r, n))
    },
    ot.Event = function(e, t) {
        return this instanceof ot.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && (e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault()) ? d: p) : this.type = e, t && ot.extend(this, t), this.timeStamp = e && e.timeStamp || ot.now(), void(this[ot.expando] = !0)) : new ot.Event(e, t)
    },
    ot.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = d,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = d,
            e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = d,
            this.stopPropagation()
        }
    },
    ot.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    function(e, t) {
        ot.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                i = e.relatedTarget,
                o = e.handleObj;
                return (!i || i !== r && !ot.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t),
                n
            }
        }
    }),
    rt.submitBubbles || (ot.event.special.submit = {
        setup: function() {
            return ot.nodeName(this, "form") ? !1 : void ot.event.add(this, "click._submit keypress._submit",
            function(e) {
                var t = e.target,
                n = ot.nodeName(t, "input") || ot.nodeName(t, "button") ? t.form: void 0;
                n && !ot._data(n, "submitBubbles") && (ot.event.add(n, "submit._submit",
                function(e) {
                    e._submit_bubble = !0
                }), ot._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ot.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return ot.nodeName(this, "form") ? !1 : void ot.event.remove(this, "._submit")
        }
    }),
    rt.changeBubbles || (ot.event.special.change = {
        setup: function() {
            return jt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ot.event.add(this, "propertychange._change",
            function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), ot.event.add(this, "click._change",
            function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1),
                ot.event.simulate("change", this, e, !0)
            })), !1) : void ot.event.add(this, "beforeactivate._change",
            function(e) {
                var t = e.target;
                jt.test(t.nodeName) && !ot._data(t, "changeBubbles") && (ot.event.add(t, "change._change",
                function(e) { ! this.parentNode || e.isSimulated || e.isTrigger || ot.event.simulate("change", this.parentNode, e, !0)
                }), ot._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return ot.event.remove(this, "._change"),
            !jt.test(this.nodeName)
        }
    }),
    rt.focusinBubbles || ot.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(e, t) {
        var n = function(e) {
            ot.event.simulate(t, e.target, ot.event.fix(e), !0)
        };
        ot.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                i = ot._data(r, t);
                i || r.addEventListener(e, n, !0),
                ot._data(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                i = ot._data(r, t) - 1;
                i ? ot._data(r, t, i) : (r.removeEventListener(e, n, !0), ot._removeData(r, t))
            }
        }
    }),
    ot.fn.extend({
        on: function(e, t, n, r, i) {
            var o, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (o in e) this.on(o, t, n, e[o], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = p;
            else if (!r) return this;
            return 1 === i && (a = r, r = function(e) {
                return ot().off(e),
                a.apply(this, arguments)
            },
            r.guid = a.guid || (a.guid = ot.guid++)),
            this.each(function() {
                ot.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj,
            ot(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace: r.origType, r.selector, r.handler),
            this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0),
            n === !1 && (n = p),
            this.each(function() {
                ot.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                ot.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? ot.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Ft = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    Pt = / jQuery\d+="(?:null|\d+)"/g,
    qt = new RegExp("<(?:" + Ft + ")[\\s/>]", "i"),
    zt = /^\s+/,
    Bt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Wt = /<([\w:]+)/,
    Rt = /<tbody/i,
    It = /<|&#?\w+;/,
    Xt = /<(?:script|style|link)/i,
    Vt = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ut = /^$|\/(?:java|ecma)script/i,
    Gt = /^true\/(.*)/,
    Jt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Qt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: rt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    Yt = m(mt),
    Kt = Yt.appendChild(mt.createElement("div"));
    Qt.optgroup = Qt.option,
    Qt.tbody = Qt.tfoot = Qt.colgroup = Qt.caption = Qt.thead,
    Qt.th = Qt.td,
    ot.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, l = ot.contains(e.ownerDocument, e);
            if (rt.html5Clone || ot.isXMLDoc(e) || !qt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Kt.innerHTML = e.outerHTML, Kt.removeChild(o = Kt.firstChild)), !(rt.noCloneEvent && rt.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ot.isXMLDoc(e))) for (r = g(o), s = g(e), a = 0; null != (i = s[a]); ++a) r[a] && E(i, r[a]);
            if (t) if (n) for (s = s || g(e), r = r || g(o), a = 0; null != (i = s[a]); a++) T(i, r[a]);
            else T(e, o);
            return r = g(o, "script"),
            r.length > 0 && w(r, !l && g(e, "script")),
            r = s = i = null,
            o
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, l, c, u, f = e.length,
            d = m(t), p = [], h = 0; f > h; h++) if (o = e[h], o || 0 === o) if ("object" === ot.type(o)) ot.merge(p, o.nodeType ? [o] : o);
            else if (It.test(o)) {
                for (s = s || d.appendChild(t.createElement("div")), l = (Wt.exec(o) || ["", ""])[1].toLowerCase(), u = Qt[l] || Qt._default, s.innerHTML = u[1] + o.replace(Bt, "<$1></$2>") + u[2], i = u[0]; i--;) s = s.lastChild;
                if (!rt.leadingWhitespace && zt.test(o) && p.push(t.createTextNode(zt.exec(o)[0])), !rt.tbody) for (o = "table" !== l || Rt.test(o) ? "<table>" !== u[1] || Rt.test(o) ? 0 : s: s.firstChild, i = o && o.childNodes.length; i--;) ot.nodeName(c = o.childNodes[i], "tbody") && !c.childNodes.length && o.removeChild(c);
                for (ot.merge(p, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = d.lastChild
            } else p.push(t.createTextNode(o));
            for (s && d.removeChild(s), rt.appendChecked || ot.grep(g(p, "input"), v), h = 0; o = p[h++];) if ((!r || -1 === ot.inArray(o, r)) && (a = ot.contains(o.ownerDocument, o), s = g(d.appendChild(o), "script"), a && w(s), n)) for (i = 0; o = s[i++];) Ut.test(o.type || "") && n.push(o);
            return s = null,
            d
        },
        cleanData: function(e, t) {
            for (var n, r, i, o, a = 0,
            s = ot.expando,
            l = ot.cache,
            c = rt.deleteExpando,
            u = ot.event.special; null != (n = e[a]); a++) if ((t || ot.acceptData(n)) && (i = n[s], o = i && l[i])) {
                if (o.events) for (r in o.events) u[r] ? ot.event.remove(n, r) : ot.removeEvent(n, r, o.handle);
                l[i] && (delete l[i], c ? delete n[s] : typeof n.removeAttribute !== Ct ? n.removeAttribute(s) : n[s] = null, G.push(i))
            }
        }
    }),
    ot.fn.extend({
        text: function(e) {
            return Dt(this,
            function(e) {
                return void 0 === e ? ot.text(this) : this.empty().append((this[0] && this[0].ownerDocument || mt).createTextNode(e))
            },
            null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments,
            function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments,
            function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? ot.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || ot.cleanData(g(n)),
            n.parentNode && (t && ot.contains(n.ownerDocument, n) && w(g(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ot.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && ot.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e,
            t = null == t ? e: t,
            this.map(function() {
                return ot.clone(this, e, t)
            })
        },
        html: function(e) {
            return Dt(this,
            function(e) {
                var t = this[0] || {},
                n = 0,
                r = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Pt, "") : void 0;
                if (! ("string" != typeof e || Xt.test(e) || !rt.htmlSerialize && qt.test(e) || !rt.leadingWhitespace && zt.test(e) || Qt[(Wt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Bt, "<$1></$2>");
                    try {
                        for (; r > n; n++) t = this[n] || {},
                        1 === t.nodeType && (ot.cleanData(g(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch(i) {}
                }
                t && this.empty().append(e)
            },
            null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments,
            function(t) {
                e = this.parentNode,
                ot.cleanData(g(this)),
                e && e.replaceChild(t, this)
            }),
            e && (e.length || e.nodeType) ? this: this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = Q.apply([], e);
            var n, r, i, o, a, s, l = 0,
            c = this.length,
            u = this,
            f = c - 1,
            d = e[0],
            p = ot.isFunction(d);
            if (p || c > 1 && "string" == typeof d && !rt.checkClone && Vt.test(d)) return this.each(function(n) {
                var r = u.eq(n);
                p && (e[0] = d.call(this, n, r.html())),
                r.domManip(e, t)
            });
            if (c && (s = ot.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                for (o = ot.map(g(s, "script"), b), i = o.length; c > l; l++) r = s,
                l !== f && (r = ot.clone(r, !0, !0), i && ot.merge(o, g(r, "script"))),
                t.call(this[l], r, l);
                if (i) for (a = o[o.length - 1].ownerDocument, ot.map(o, x), l = 0; i > l; l++) r = o[l],
                Ut.test(r.type || "") && !ot._data(r, "globalEval") && ot.contains(a, r) && (r.src ? ot._evalUrl && ot._evalUrl(r.src) : ot.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Jt, "")));
                s = n = null
            }
            return this
        }
    }),
    ot.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(e, t) {
        ot.fn[e] = function(e) {
            for (var n, r = 0,
            i = [], o = ot(e), a = o.length - 1; a >= r; r++) n = r === a ? this: this.clone(!0),
            ot(o[r])[t](n),
            Y.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Zt, en = {}; !
    function() {
        var e, t, n = mt.createElement("div"),
        r = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        e = n.getElementsByTagName("a")[0],
        e.style.cssText = "float:left;opacity:.5",
        rt.opacity = /^0.5/.test(e.style.opacity),
        rt.cssFloat = !!e.style.cssFloat,
        n.style.backgroundClip = "content-box",
        n.cloneNode(!0).style.backgroundClip = "",
        rt.clearCloneStyle = "content-box" === n.style.backgroundClip,
        e = n = null,
        rt.shrinkWrapBlocks = function() {
            var e, n, i, o;
            if (null == t) {
                if (e = mt.getElementsByTagName("body")[0], !e) return;
                o = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
                n = mt.createElement("div"),
                i = mt.createElement("div"),
                e.appendChild(n).appendChild(i),
                t = !1,
                typeof i.style.zoom !== Ct && (i.style.cssText = r + ";width:1px;padding:1px;zoom:1", i.innerHTML = "<div></div>", i.firstChild.style.width = "5px", t = 3 !== i.offsetWidth),
                e.removeChild(n),
                e = n = i = null
            }
            return t
        }
    } ();
    var tn, nn, rn = /^margin/,
    on = new RegExp("^(" + Nt + ")(?!px)[a-z%]+$", "i"),
    an = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (tn = function(e) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null)
    },
    nn = function(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || tn(e),
        a = n ? n.getPropertyValue(t) || n[t] : void 0,
        n && ("" !== a || ot.contains(e.ownerDocument, e) || (a = ot.style(e, t)), on.test(a) && rn.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)),
        void 0 === a ? a: a + ""
    }) : mt.documentElement.currentStyle && (tn = function(e) {
        return e.currentStyle
    },
    nn = function(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || tn(e),
        a = n ? n[t] : void 0,
        null == a && s && s[t] && (a = s[t]),
        on.test(a) && !an.test(t) && (r = s.left, i = e.runtimeStyle, o = i && i.left, o && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em": a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)),
        void 0 === a ? a: a + "" || "auto"
    }),
    !
    function() {
        function t() {
            var t, n, r = mt.getElementsByTagName("body")[0];
            r && (t = mt.createElement("div"), n = mt.createElement("div"), t.style.cssText = c, r.appendChild(t).appendChild(n), n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", ot.swap(r, null != r.style.zoom ? {
                zoom: 1
            }: {},
            function() {
                i = 4 === n.offsetWidth
            }), o = !0, a = !1, s = !0, e.getComputedStyle && (a = "1%" !== (e.getComputedStyle(n, null) || {}).top, o = "4px" === (e.getComputedStyle(n, null) || {
                width: "4px"
            }).width), r.removeChild(t), n = r = null)
        }
        var n, r, i, o, a, s, l = mt.createElement("div"),
        c = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
        u = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        n = l.getElementsByTagName("a")[0],
        n.style.cssText = "float:left;opacity:.5",
        rt.opacity = /^0.5/.test(n.style.opacity),
        rt.cssFloat = !!n.style.cssFloat,
        l.style.backgroundClip = "content-box",
        l.cloneNode(!0).style.backgroundClip = "",
        rt.clearCloneStyle = "content-box" === l.style.backgroundClip,
        n = l = null,
        ot.extend(rt, {
            reliableHiddenOffsets: function() {
                if (null != r) return r;
                var e, t, n, i = mt.createElement("div"),
                o = mt.getElementsByTagName("body")[0];
                return o ? (i.setAttribute("className", "t"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = mt.createElement("div"), e.style.cssText = c, o.appendChild(e).appendChild(i), i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", t = i.getElementsByTagName("td"), t[0].style.cssText = "padding:0;margin:0;border:0;display:none", n = 0 === t[0].offsetHeight, t[0].style.display = "", t[1].style.display = "none", r = n && 0 === t[0].offsetHeight, o.removeChild(e), i = o = null, r) : void 0
            },
            boxSizing: function() {
                return null == i && t(),
                i
            },
            boxSizingReliable: function() {
                return null == o && t(),
                o
            },
            pixelPosition: function() {
                return null == a && t(),
                a
            },
            reliableMarginRight: function() {
                var t, n, r, i;
                if (null == s && e.getComputedStyle) {
                    if (t = mt.getElementsByTagName("body")[0], !t) return;
                    n = mt.createElement("div"),
                    r = mt.createElement("div"),
                    n.style.cssText = c,
                    t.appendChild(n).appendChild(r),
                    i = r.appendChild(mt.createElement("div")),
                    i.style.cssText = r.style.cssText = u,
                    i.style.marginRight = i.style.width = "0",
                    r.style.width = "1px",
                    s = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight),
                    t.removeChild(n)
                }
                return s
            }
        })
    } (),
    ot.swap = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t) a[o] = e.style[o],
        e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t) e.style[o] = a[o];
        return i
    };
    var sn = /alpha\([^)]*\)/i,
    ln = /opacity\s*=\s*([^)]*)/,
    cn = /^(none|table(?!-c[ea]).+)/,
    un = new RegExp("^(" + Nt + ")(.*)$", "i"),
    fn = new RegExp("^([+-])=(" + Nt + ")", "i"),
    dn = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    pn = {
        letterSpacing: 0,
        fontWeight: 400
    },
    hn = ["Webkit", "O", "Moz", "ms"];
    ot.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = nn(e, "opacity");
                        return "" === n ? "1": n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": rt.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = ot.camelCase(t),
                l = e.style;
                if (t = ot.cssProps[s] || (ot.cssProps[s] = N(l, s)), a = ot.cssHooks[t] || ot.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i: l[t];
                if (o = typeof n, "string" === o && (i = fn.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(ot.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || ot.cssNumber[s] || (n += "px"), rt.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try {
                    l[t] = "",
                    l[t] = n
                } catch(c) {}
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = ot.camelCase(t);
            return t = ot.cssProps[s] || (ot.cssProps[s] = N(e.style, s)),
            a = ot.cssHooks[t] || ot.cssHooks[s],
            a && "get" in a && (o = a.get(e, !0, n)),
            void 0 === o && (o = nn(e, t, r)),
            "normal" === o && t in pn && (o = pn[t]),
            "" === n || n ? (i = parseFloat(o), n === !0 || ot.isNumeric(i) ? i || 0 : o) : o
        }
    }),
    ot.each(["height", "width"],
    function(e, t) {
        ot.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? 0 === e.offsetWidth && cn.test(ot.css(e, "display")) ? ot.swap(e, dn,
                function() {
                    return _(e, t, r)
                }) : _(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i = r && tn(e);
                return A(e, n, r ? D(e, t, r, rt.boxSizing() && "border-box" === ot.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }),
    rt.opacity || (ot.cssHooks.opacity = {
        get: function(e, t) {
            return ln.test((t && e.currentStyle ? e.currentStyle.filter: e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": t ? "1": ""
        },
        set: function(e, t) {
            var n = e.style,
            r = e.currentStyle,
            i = ot.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")": "",
            o = r && r.filter || n.filter || "";
            n.zoom = 1,
            (t >= 1 || "" === t) && "" === ot.trim(o.replace(sn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = sn.test(o) ? o.replace(sn, i) : o + " " + i)
        }
    }),
    ot.cssHooks.marginRight = S(rt.reliableMarginRight,
    function(e, t) {
        return t ? ot.swap(e, {
            display: "inline-block"
        },
        nn, [e, "marginRight"]) : void 0
    }),
    ot.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(e, t) {
        ot.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0,
                i = {},
                o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Lt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        rn.test(e) || (ot.cssHooks[e + t].set = A)
    }),
    ot.fn.extend({
        css: function(e, t) {
            return Dt(this,
            function(e, t, n) {
                var r, i, o = {},
                a = 0;
                if (ot.isArray(t)) {
                    for (r = tn(e), i = t.length; i > a; a++) o[t[a]] = ot.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? ot.style(e, t, n) : ot.css(e, t)
            },
            e, t, arguments.length > 1)
        },
        show: function() {
            return L(this, !0)
        },
        hide: function() {
            return L(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                At(this) ? ot(this).show() : ot(this).hide()
            })
        }
    }),
    ot.Tween = j,
    j.prototype = {
        constructor: j,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (ot.cssNumber[n] ? "": "px")
        },
        cur: function() {
            var e = j.propHooks[this.prop];
            return e && e.get ? e.get(this) : j.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = j.propHooks[this.prop];
            return this.pos = t = this.options.duration ? ot.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : j.propHooks._default.set(this),
            this
        }
    },
    j.prototype.init.prototype = j.prototype,
    j.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ot.css(e.elem, e.prop, ""), t && "auto" !== t ? t: 0) : e.elem[e.prop]
            },
            set: function(e) {
                ot.fx.step[e.prop] ? ot.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ot.cssProps[e.prop]] || ot.cssHooks[e.prop]) ? ot.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    j.propHooks.scrollTop = j.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    ot.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return.5 - Math.cos(e * Math.PI) / 2
        }
    },
    ot.fx = j.prototype.init,
    ot.fx.step = {};
    var mn, gn, vn = /^(?:toggle|show|hide)$/,
    yn = new RegExp("^(?:([+-])=|)(" + Nt + ")([a-z%]*)$", "i"),
    bn = /queueHooks$/,
    xn = [M],
    wn = {
        "*": [function(e, t) {
            var n = this.createTween(e, t),
            r = n.cur(),
            i = yn.exec(t),
            o = i && i[3] || (ot.cssNumber[e] ? "": "px"),
            a = (ot.cssNumber[e] || "px" !== o && +r) && yn.exec(ot.css(n.elem, e)),
            s = 1,
            l = 20;
            if (a && a[3] !== o) {
                o = o || a[3],
                i = i || [],
                a = +r || 1;
                do s = s || ".5",
                a /= s,
                ot.style(n.elem, e, a + o);
                while (s !== (s = n.cur() / r) && 1 !== s && --l)
            }
            return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]),
            n
        }]
    };
    ot.Animation = ot.extend(P, {
        tweener: function(e, t) {
            ot.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0,
            i = e.length; i > r; r++) n = e[r],
            wn[n] = wn[n] || [],
            wn[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? xn.unshift(e) : xn.push(e)
        }
    }),
    ot.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? ot.extend({},
        e) : {
            complete: n || !n && t || ot.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !ot.isFunction(t) && t
        };
        return r.duration = ot.fx.off ? 0 : "number" == typeof r.duration ? r.duration: r.duration in ot.fx.speeds ? ot.fx.speeds[r.duration] : ot.fx.speeds._default,
        (null == r.queue || r.queue === !0) && (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            ot.isFunction(r.old) && r.old.call(this),
            r.queue && ot.dequeue(this, r.queue)
        },
        r
    },
    ot.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(At).css("opacity", 0).show().end().animate({
                opacity: t
            },
            e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = ot.isEmptyObject(e),
            o = ot.speed(t, n, r),
            a = function() {
                var t = P(this, ot.extend({},
                e), o); (i || ot._data(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0),
            t && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0,
                i = null != e && e + "queueHooks",
                o = ot.timers,
                a = ot._data(this);
                if (i) a[i] && a[i].stop && r(a[i]);
                else for (i in a) a[i] && a[i].stop && bn.test(i) && r(a[i]);
                for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1)); (t || !n) && ot.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = ot._data(this),
                r = n[e + "queue"],
                i = n[e + "queueHooks"],
                o = ot.timers,
                a = r ? r.length: 0;
                for (n.finish = !0, ot.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    ot.each(["toggle", "show", "hide"],
    function(e, t) {
        var n = ot.fn[t];
        ot.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(H(t, !0), e, r, i)
        }
    }),
    ot.each({
        slideDown: H("show"),
        slideUp: H("hide"),
        slideToggle: H("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(e, t) {
        ot.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    ot.timers = [],
    ot.fx.tick = function() {
        var e, t = ot.timers,
        n = 0;
        for (mn = ot.now(); n < t.length; n++) e = t[n],
        e() || t[n] !== e || t.splice(n--, 1);
        t.length || ot.fx.stop(),
        mn = void 0
    },
    ot.fx.timer = function(e) {
        ot.timers.push(e),
        e() ? ot.fx.start() : ot.timers.pop()
    },
    ot.fx.interval = 13,
    ot.fx.start = function() {
        gn || (gn = setInterval(ot.fx.tick, ot.fx.interval))
    },
    ot.fx.stop = function() {
        clearInterval(gn),
        gn = null
    },
    ot.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    ot.fn.delay = function(e, t) {
        return e = ot.fx ? ot.fx.speeds[e] || e: e,
        t = t || "fx",
        this.queue(t,
        function(t, n) {
            var r = setTimeout(t, e);
            n.stop = function() {
                clearTimeout(r)
            }
        })
    },
    function() {
        var e, t, n, r, i = mt.createElement("div");
        i.setAttribute("className", "t"),
        i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        e = i.getElementsByTagName("a")[0],
        n = mt.createElement("select"),
        r = n.appendChild(mt.createElement("option")),
        t = i.getElementsByTagName("input")[0],
        e.style.cssText = "top:1px",
        rt.getSetAttribute = "t" !== i.className,
        rt.style = /top/.test(e.getAttribute("style")),
        rt.hrefNormalized = "/a" === e.getAttribute("href"),
        rt.checkOn = !!t.value,
        rt.optSelected = r.selected,
        rt.enctype = !!mt.createElement("form").enctype,
        n.disabled = !0,
        rt.optDisabled = !r.disabled,
        t = mt.createElement("input"),
        t.setAttribute("value", ""),
        rt.input = "" === t.getAttribute("value"),
        t.value = "t",
        t.setAttribute("type", "radio"),
        rt.radioValue = "t" === t.value,
        e = t = n = r = i = null
    } ();
    var Tn = /\r/g;
    ot.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = ot.isFunction(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, ot(this).val()) : e, null == i ? i = "": "number" == typeof i ? i += "": ot.isArray(i) && (i = ot.map(i,
                function(e) {
                    return null == e ? "": e + ""
                })), t = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = ot.valHooks[i.type] || ot.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n: (n = i.value, "string" == typeof n ? n.replace(Tn, "") : null == n ? "": n)) : void 0
        }
    }),
    ot.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ot.find.attr(e, "value");
                    return null != t ? t: ot.text(e)
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options,
                    i = e.selectedIndex,
                    o = "select-one" === e.type || 0 > i,
                    a = o ? null: [], s = o ? i + 1 : r.length, l = 0 > i ? s: o ? i: 0; s > l; l++) if (n = r[l], !(!n.selected && l !== i || (rt.optDisabled ? n.disabled: null !== n.getAttribute("disabled")) || n.parentNode.disabled && ot.nodeName(n.parentNode, "optgroup"))) {
                        if (t = ot(n).val(), o) return t;
                        a.push(t)
                    }
                    return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options,
                    o = ot.makeArray(t), a = i.length; a--;) if (r = i[a], ot.inArray(ot.valHooks.option.get(r), o) >= 0) try {
                        r.selected = n = !0
                    } catch(s) {
                        r.scrollHeight
                    } else r.selected = !1;
                    return n || (e.selectedIndex = -1),
                    i
                }
            }
        }
    }),
    ot.each(["radio", "checkbox"],
    function() {
        ot.valHooks[this] = {
            set: function(e, t) {
                return ot.isArray(t) ? e.checked = ot.inArray(ot(e).val(), t) >= 0 : void 0
            }
        },
        rt.checkOn || (ot.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on": e.value
        })
    });
    var En, Cn, kn = ot.expr.attrHandle,
    Sn = /^(?:checked|selected)$/i,
    Nn = rt.getSetAttribute,
    Ln = rt.input;
    ot.fn.extend({
        attr: function(e, t) {
            return Dt(this, ot.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ot.removeAttr(this, e)
            })
        }
    }),
    ot.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            return e && 3 !== o && 8 !== o && 2 !== o ? typeof e.getAttribute === Ct ? ot.prop(e, t, n) : (1 === o && ot.isXMLDoc(e) || (t = t.toLowerCase(), r = ot.attrHooks[t] || (ot.expr.match.bool.test(t) ? Cn: En)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i: (i = ot.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i: (e.setAttribute(t, n + ""), n) : void ot.removeAttr(e, t)) : void 0
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
            o = t && t.match(xt);
            if (o && 1 === e.nodeType) for (; n = o[i++];) r = ot.propFix[n] || n,
            ot.expr.match.bool.test(n) ? Ln && Nn || !Sn.test(n) ? e[r] = !1 : e[ot.camelCase("default-" + n)] = e[r] = !1 : ot.attr(e, n, ""),
            e.removeAttribute(Nn ? n: r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!rt.radioValue && "radio" === t && ot.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        }
    }),
    Cn = {
        set: function(e, t, n) {
            return t === !1 ? ot.removeAttr(e, n) : Ln && Nn || !Sn.test(n) ? e.setAttribute(!Nn && ot.propFix[n] || n, n) : e[ot.camelCase("default-" + n)] = e[n] = !0,
            n
        }
    },
    ot.each(ot.expr.match.bool.source.match(/\w+/g),
    function(e, t) {
        var n = kn[t] || ot.find.attr;
        kn[t] = Ln && Nn || !Sn.test(t) ?
        function(e, t, r) {
            var i, o;
            return r || (o = kn[t], kn[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, kn[t] = o),
            i
        }: function(e, t, n) {
            return n ? void 0 : e[ot.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }),
    Ln && Nn || (ot.attrHooks.value = {
        set: function(e, t, n) {
            return ot.nodeName(e, "input") ? void(e.defaultValue = t) : En && En.set(e, t, n)
        }
    }),
    Nn || (En = {
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)),
            r.value = t += "",
            "value" === n || t === e.getAttribute(n) ? t: void 0
        }
    },
    kn.id = kn.name = kn.coords = function(e, t, n) {
        var r;
        return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value: null
    },
    ot.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value: void 0
        },
        set: En.set
    },
    ot.attrHooks.contenteditable = {
        set: function(e, t, n) {
            En.set(e, "" === t ? !1 : t, n)
        }
    },
    ot.each(["width", "height"],
    function(e, t) {
        ot.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })),
    rt.style || (ot.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var An = /^(?:input|select|textarea|button|object)$/i,
    Dn = /^(?:a|area)$/i;
    ot.fn.extend({
        prop: function(e, t) {
            return Dt(this, ot.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = ot.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = void 0,
                    delete this[e]
                } catch(t) {}
            })
        }
    }),
    ot.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, i, o, a = e.nodeType;
            return e && 3 !== a && 8 !== a && 2 !== a ? (o = 1 !== a || !ot.isXMLDoc(e), o && (t = ot.propFix[t] || t, i = ot.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r: e[t] = n: i && "get" in i && null !== (r = i.get(e, t)) ? r: e[t]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ot.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : An.test(e.nodeName) || Dn.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }),
    rt.hrefNormalized || ot.each(["href", "src"],
    function(e, t) {
        ot.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }),
    rt.optSelected || (ot.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
        }
    }),
    ot.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
    function() {
        ot.propFix[this.toLowerCase()] = this
    }),
    rt.enctype || (ot.propFix.enctype = "encoding");
    var _n = /[\t\r\n\f]/g;
    ot.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s = 0,
            l = this.length,
            c = "string" == typeof e && e;
            if (ot.isFunction(e)) return this.each(function(t) {
                ot(this).addClass(e.call(this, t, this.className))
            });
            if (c) for (t = (e || "").match(xt) || []; l > s; s++) if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(_n, " ") : " ")) {
                for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                a = ot.trim(r),
                n.className !== a && (n.className = a)
            }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s = 0,
            l = this.length,
            c = 0 === arguments.length || "string" == typeof e && e;
            if (ot.isFunction(e)) return this.each(function(t) {
                ot(this).removeClass(e.call(this, t, this.className))
            });
            if (c) for (t = (e || "").match(xt) || []; l > s; s++) if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(_n, " ") : "")) {
                for (o = 0; i = t[o++];) for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                a = e ? ot.trim(r) : "",
                n.className !== a && (n.className = a)
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(ot.isFunction(e) ?
            function(n) {
                ot(this).toggleClass(e.call(this, n, this.className, t), t)
            }: function() {
                if ("string" === n) for (var t, r = 0,
                i = ot(this), o = e.match(xt) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(n === Ct || "boolean" === n) && (this.className && ot._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "": ot._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ",
            n = 0,
            r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(_n, " ").indexOf(t) >= 0) return ! 0;
            return ! 1
        }
    }),
    ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(e, t) {
        ot.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    ot.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var jn = ot.now(),
    On = /\?/,
    Hn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    ot.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, r = null,
        i = ot.trim(t + "");
        return i && !ot.trim(i.replace(Hn,
        function(e, t, i, o) {
            return n && t && (r = 0),
            0 === r ? e: (n = i || t, r += !o - !i, "")
        })) ? Function("return " + i)() : ot.error("Invalid JSON: " + t)
    },
    ot.parseXML = function(t) {
        var n, r;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch(i) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ot.error("Invalid XML: " + t),
        n
    };
    var $n, Mn, Fn = /#.*$/,
    Pn = /([?&])_=[^&]*/,
    qn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    zn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Bn = /^(?:GET|HEAD)$/,
    Wn = /^\/\//,
    Rn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    In = {},
    Xn = {},
    Vn = "*/".concat("*");
    try {
        Mn = location.href
    } catch(Un) {
        Mn = mt.createElement("a"),
        Mn.href = "",
        Mn = Mn.href
    }
    $n = Rn.exec(Mn.toLowerCase()) || [],
    ot.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Mn,
            type: "GET",
            isLocal: zn.test($n[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Vn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ot.parseJSON,
                "text xml": ot.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? B(B(e, ot.ajaxSettings), t) : B(ot.ajaxSettings, e)
        },
        ajaxPrefilter: q(In),
        ajaxTransport: q(Xn),
        ajax: function(e, t) {
            function n(e, t, n, r) {
                var i, u, v, y, x, T = t;
                2 !== b && (b = 2, s && clearTimeout(s), c = void 0, a = r || "", w.readyState = e > 0 ? 4 : 0, i = e >= 200 && 300 > e || 304 === e, n && (y = W(f, w, n)), y = R(f, y, w, i), i ? (f.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (ot.lastModified[o] = x), x = w.getResponseHeader("etag"), x && (ot.etag[o] = x)), 204 === e || "HEAD" === f.type ? T = "nocontent": 304 === e ? T = "notmodified": (T = y.state, u = y.data, v = y.error, i = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", i ? h.resolveWith(d, [u, T, w]) : h.rejectWith(d, [w, T, v]), w.statusCode(g), g = void 0, l && p.trigger(i ? "ajaxSuccess": "ajaxError", [w, f, i ? u: v]), m.fireWith(d, [w, T]), l && (p.trigger("ajaxComplete", [w, f]), --ot.active || ot.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0),
            t = t || {};
            var r, i, o, a, s, l, c, u, f = ot.ajaxSetup({},
            t),
            d = f.context || f,
            p = f.context && (d.nodeType || d.jquery) ? ot(d) : ot.event,
            h = ot.Deferred(),
            m = ot.Callbacks("once memory"),
            g = f.statusCode || {},
            v = {},
            y = {},
            b = 0,
            x = "canceled",
            w = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === b) {
                        if (!u) for (u = {}; t = qn.exec(a);) u[t[1].toLowerCase()] = t[2];
                        t = u[e.toLowerCase()]
                    }
                    return null == t ? null: t
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? a: null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return b || (e = y[n] = y[n] || e, v[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return b || (f.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (2 > b) for (t in e) g[t] = [g[t], e[t]];
                    else w.always(e[w.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || x;
                    return c && c.abort(t),
                    n(0, t),
                    this
                }
            };
            if (h.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || Mn) + "").replace(Fn, "").replace(Wn, $n[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = ot.trim(f.dataType || "*").toLowerCase().match(xt) || [""], null == f.crossDomain && (r = Rn.exec(f.url.toLowerCase()), f.crossDomain = !(!r || r[1] === $n[1] && r[2] === $n[2] && (r[3] || ("http:" === r[1] ? "80": "443")) === ($n[3] || ("http:" === $n[1] ? "80": "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = ot.param(f.data, f.traditional)), z(In, f, t, w), 2 === b) return w;
            l = f.global,
            l && 0 === ot.active++&&ot.event.trigger("ajaxStart"),
            f.type = f.type.toUpperCase(),
            f.hasContent = !Bn.test(f.type),
            o = f.url,
            f.hasContent || (f.data && (o = f.url += (On.test(o) ? "&": "?") + f.data, delete f.data), f.cache === !1 && (f.url = Pn.test(o) ? o.replace(Pn, "$1_=" + jn++) : o + (On.test(o) ? "&": "?") + "_=" + jn++)),
            f.ifModified && (ot.lastModified[o] && w.setRequestHeader("If-Modified-Since", ot.lastModified[o]), ot.etag[o] && w.setRequestHeader("If-None-Match", ot.etag[o])),
            (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", f.contentType),
            w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Vn + "; q=0.01": "") : f.accepts["*"]);
            for (i in f.headers) w.setRequestHeader(i, f.headers[i]);
            if (f.beforeSend && (f.beforeSend.call(d, w, f) === !1 || 2 === b)) return w.abort();
            x = "abort";
            for (i in {
                success: 1,
                error: 1,
                complete: 1
            }) w[i](f[i]);
            if (c = z(Xn, f, t, w)) {
                w.readyState = 1,
                l && p.trigger("ajaxSend", [w, f]),
                f.async && f.timeout > 0 && (s = setTimeout(function() {
                    w.abort("timeout")
                },
                f.timeout));
                try {
                    b = 1,
                    c.send(v, n)
                } catch(T) {
                    if (! (2 > b)) throw T;
                    n( - 1, T)
                }
            } else n( - 1, "No Transport");
            return w
        },
        getJSON: function(e, t, n) {
            return ot.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return ot.get(e, void 0, t, "script")
        }
    }),
    ot.each(["get", "post"],
    function(e, t) {
        ot[t] = function(e, n, r, i) {
            return ot.isFunction(n) && (i = i || r, r = n, n = void 0),
            ot.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }),
    ot.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(e, t) {
        ot.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    ot._evalUrl = function(e) {
        return ot.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    },
    ot.fn.extend({
        wrapAll: function(e) {
            if (ot.isFunction(e)) return this.each(function(t) {
                ot(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = ot(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(ot.isFunction(e) ?
            function(t) {
                ot(this).wrapInner(e.call(this, t))
            }: function() {
                var t = ot(this),
                n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = ot.isFunction(e);
            return this.each(function(n) {
                ot(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    ot.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !rt.reliableHiddenOffsets() && "none" === (e.style && e.style.display || ot.css(e, "display"))
    },
    ot.expr.filters.visible = function(e) {
        return ! ot.expr.filters.hidden(e)
    };
    var Gn = /%20/g,
    Jn = /\[\]$/,
    Qn = /\r?\n/g,
    Yn = /^(?:submit|button|image|reset|file)$/i,
    Kn = /^(?:input|select|textarea|keygen)/i;
    ot.param = function(e, t) {
        var n, r = [],
        i = function(e, t) {
            t = ot.isFunction(t) ? t() : null == t ? "": t,
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = ot.ajaxSettings && ot.ajaxSettings.traditional), ot.isArray(e) || e.jquery && !ot.isPlainObject(e)) ot.each(e,
        function() {
            i(this.name, this.value)
        });
        else for (n in e) I(n, e[n], t, i);
        return r.join("&").replace(Gn, "+")
    },
    ot.fn.extend({
        serialize: function() {
            return ot.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ot.prop(this, "elements");
                return e ? ot.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ot(this).is(":disabled") && Kn.test(this.nodeName) && !Yn.test(e) && (this.checked || !_t.test(e))
            }).map(function(e, t) {
                var n = ot(this).val();
                return null == n ? null: ot.isArray(n) ? ot.map(n,
                function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Qn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Qn, "\r\n")
                }
            }).get()
        }
    }),
    ot.ajaxSettings.xhr = void 0 !== e.ActiveXObject ?
    function() {
        return ! this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X() || V()
    }: X;
    var Zn = 0,
    er = {},
    tr = ot.ajaxSettings.xhr();
    e.ActiveXObject && ot(e).on("unload",
    function() {
        for (var e in er) er[e](void 0, !0)
    }),
    rt.cors = !!tr && "withCredentials" in tr,
    tr = rt.ajax = !!tr,
    tr && ot.ajaxTransport(function(e) {
        if (!e.crossDomain || rt.cors) {
            var t;
            return {
                send: function(n, r) {
                    var i, o = e.xhr(),
                    a = ++Zn;
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (i in e.xhrFields) o[i] = e.xhrFields[i];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType),
                    e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n) void 0 !== n[i] && o.setRequestHeader(i, n[i] + "");
                    o.send(e.hasContent && e.data || null),
                    t = function(n, i) {
                        var s, l, c;
                        if (t && (i || 4 === o.readyState)) if (delete er[a], t = void 0, o.onreadystatechange = ot.noop, i) 4 !== o.readyState && o.abort();
                        else {
                            c = {},
                            s = o.status,
                            "string" == typeof o.responseText && (c.text = o.responseText);
                            try {
                                l = o.statusText
                            } catch(u) {
                                l = ""
                            }
                            s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
                        }
                        c && r(s, l, c, o.getAllResponseHeaders())
                    },
                    e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = er[a] = t: t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }),
    ot.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return ot.globalEval(e),
                e
            }
        }
    }),
    ot.ajaxPrefilter("script",
    function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET", e.global = !1)
    }),
    ot.ajaxTransport("script",
    function(e) {
        if (e.crossDomain) {
            var t, n = mt.head || ot("head")[0] || mt.documentElement;
            return {
                send: function(r, i) {
                    t = mt.createElement("script"),
                    t.async = !0,
                    e.scriptCharset && (t.charset = e.scriptCharset),
                    t.src = e.url,
                    t.onload = t.onreadystatechange = function(e, n) { (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
                    },
                    n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var nr = [],
    rr = /(=)\?(?=&|$)|\?\?/;
    ot.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = nr.pop() || ot.expando + "_" + jn++;
            return this[e] = !0,
            e
        }
    }),
    ot.ajaxPrefilter("json jsonp",
    function(t, n, r) {
        var i, o, a, s = t.jsonp !== !1 && (rr.test(t.url) ? "url": "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && rr.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = ot.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(rr, "$1" + i) : t.jsonp !== !1 && (t.url += (On.test(t.url) ? "&": "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || ot.error(i + " was not called"),
            a[0]
        },
        t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments
        },
        r.always(function() {
            e[i] = o,
            t[i] && (t.jsonpCallback = n.jsonpCallback, nr.push(i)),
            a && ot.isFunction(o) && o(a[0]),
            a = o = void 0
        }), "script") : void 0
    }),
    ot.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1),
        t = t || mt;
        var r = dt.exec(e),
        i = !n && [];
        return r ? [t.createElement(r[1])] : (r = ot.buildFragment([e], t, i), i && i.length && ot(i).remove(), ot.merge([], r.childNodes))
    };
    var ir = ot.fn.load;
    ot.fn.load = function(e, t, n) {
        if ("string" != typeof e && ir) return ir.apply(this, arguments);
        var r, i, o, a = this,
        s = e.indexOf(" ");
        return s >= 0 && (r = e.slice(s, e.length), e = e.slice(0, s)),
        ot.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"),
        a.length > 0 && ot.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments,
            a.html(r ? ot("<div>").append(ot.parseHTML(e)).find(r) : e)
        }).complete(n &&
        function(e, t) {
            a.each(n, i || [e.responseText, t, e])
        }),
        this
    },
    ot.expr.filters.animated = function(e) {
        return ot.grep(ot.timers,
        function(t) {
            return e === t.elem
        }).length
    };
    var or = e.document.documentElement;
    ot.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, l, c, u = ot.css(e, "position"),
            f = ot(e),
            d = {};
            "static" === u && (e.style.position = "relative"),
            s = f.offset(),
            o = ot.css(e, "top"),
            l = ot.css(e, "left"),
            c = ("absolute" === u || "fixed" === u) && ot.inArray("auto", [o, l]) > -1,
            c ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(l) || 0),
            ot.isFunction(t) && (t = t.call(e, n, s)),
            null != t.top && (d.top = t.top - s.top + a),
            null != t.left && (d.left = t.left - s.left + i),
            "using" in t ? t.using.call(e, d) : f.css(d)
        }
    },
    ot.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this: this.each(function(t) {
                ot.offset.setOffset(this, e, t)
            });
            var t, n, r = {
                top: 0,
                left: 0
            },
            i = this[0],
            o = i && i.ownerDocument;
            return o ? (t = o.documentElement, ot.contains(t, i) ? (typeof i.getBoundingClientRect !== Ct && (r = i.getBoundingClientRect()), n = U(o), {
                top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : r) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                },
                r = this[0];
                return "fixed" === ot.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ot.nodeName(e[0], "html") || (n = e.offset()), n.top += ot.css(e[0], "borderTopWidth", !0), n.left += ot.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - ot.css(r, "marginTop", !0),
                    left: t.left - n.left - ot.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || or; e && !ot.nodeName(e, "html") && "static" === ot.css(e, "position");) e = e.offsetParent;
                return e || or
            })
        }
    }),
    ot.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(e, t) {
        var n = /Y/.test(t);
        ot.fn[e] = function(r) {
            return Dt(this,
            function(e, r, i) {
                var o = U(e);
                return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void(o ? o.scrollTo(n ? ot(o).scrollLeft() : i, n ? i: ot(o).scrollTop()) : e[r] = i)
            },
            e, r, arguments.length, null)
        }
    }),
    ot.each(["top", "left"],
    function(e, t) {
        ot.cssHooks[t] = S(rt.pixelPosition,
        function(e, n) {
            return n ? (n = nn(e, t), on.test(n) ? ot(e).position()[t] + "px": n) : void 0
        })
    }),
    ot.each({
        Height: "height",
        Width: "width"
    },
    function(e, t) {
        ot.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        },
        function(n, r) {
            ot.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                a = n || (r === !0 || i === !0 ? "margin": "border");
                return Dt(this,
                function(t, n, r) {
                    var i;
                    return ot.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? ot.css(t, n, a) : ot.style(t, n, r, a)
                },
                t, o ? r: void 0, o, null)
            }
        })
    }),
    ot.fn.size = function() {
        return this.length
    },
    ot.fn.andSelf = ot.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [],
    function() {
        return ot
    });
    var ar = e.jQuery,
    sr = e.$;
    return ot.noConflict = function(t) {
        return e.$ === ot && (e.$ = sr),
        t && e.jQuery === ot && (e.jQuery = ar),
        ot
    },
    typeof t === Ct && (e.jQuery = e.$ = ot),
    ot
}),
/*!
 * Modernizr v2.7.1
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
window.Modernizr = function(e, t, n) {
    function r(e) {
        b.cssText = e
    }
    function i(e, t) {
        return r(E.join(e + ";") + (t || ""))
    }
    function o(e, t) {
        return typeof e === t
    }
    function a(e, t) {
        return !! ~ ("" + e).indexOf(t)
    }
    function s(e, t) {
        for (var r in e) {
            var i = e[r];
            if (!a(i, "-") && b[i] !== n) return "pfx" == t ? i: !0
        }
        return ! 1
    }
    function l(e, t, r) {
        for (var i in e) {
            var a = t[e[i]];
            if (a !== n) return r === !1 ? e[i] : o(a, "function") ? a.bind(r || t) : a
        }
        return ! 1
    }
    function c(e, t, n) {
        var r = e.charAt(0).toUpperCase() + e.slice(1),
        i = (e + " " + k.join(r + " ") + r).split(" ");
        return o(t, "string") || o(t, "undefined") ? s(i, t) : (i = (e + " " + S.join(r + " ") + r).split(" "), l(i, t, n))
    }
    function u() {
        h.input = function(n) {
            for (var r = 0,
            i = n.length; i > r; r++) D[n[r]] = !!(n[r] in x);
            return D.list && (D.list = !(!t.createElement("datalist") || !e.HTMLDataListElement)),
            D
        } ("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),
        h.inputtypes = function(e) {
            for (var r, i, o, a = 0,
            s = e.length; s > a; a++) x.setAttribute("type", i = e[a]),
            r = "text" !== x.type,
            r && (x.value = w, x.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(i) && x.style.WebkitAppearance !== n ? (g.appendChild(x), o = t.defaultView, r = o.getComputedStyle && "textfield" !== o.getComputedStyle(x, null).WebkitAppearance && 0 !== x.offsetHeight, g.removeChild(x)) : /^(search|tel)$/.test(i) || (r = /^(url|email)$/.test(i) ? x.checkValidity && x.checkValidity() === !1 : x.value != w)),
            A[e[a]] = !!r;
            return A
        } ("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var f, d, p = "2.7.1",
    h = {},
    m = !0,
    g = t.documentElement,
    v = "modernizr",
    y = t.createElement(v),
    b = y.style,
    x = t.createElement("input"),
    w = ":)",
    T = {}.toString,
    E = " -webkit- -moz- -o- -ms- ".split(" "),
    C = "Webkit Moz O ms",
    k = C.split(" "),
    S = C.toLowerCase().split(" "),
    N = {
        svg: "http://www.w3.org/2000/svg"
    },
    L = {},
    A = {},
    D = {},
    _ = [],
    j = _.slice,
    O = function(e, n, r, i) {
        var o, a, s, l, c = t.createElement("div"),
        u = t.body,
        f = u || t.createElement("body");
        if (parseInt(r, 10)) for (; r--;) s = t.createElement("div"),
        s.id = i ? i[r] : v + (r + 1),
        c.appendChild(s);
        return o = ["&#173;", '<style id="s', v, '">', e, "</style>"].join(""),
        c.id = v,
        (u ? c: f).innerHTML += o,
        f.appendChild(c),
        u || (f.style.background = "", f.style.overflow = "hidden", l = g.style.overflow, g.style.overflow = "hidden", g.appendChild(f)),
        a = n(c, e),
        u ? c.parentNode.removeChild(c) : (f.parentNode.removeChild(f), g.style.overflow = l),
        !!a
    },
    H = function(t) {
        var n = e.matchMedia || e.msMatchMedia;
        if (n) return n(t).matches;
        var r;
        return O("@media " + t + " { #" + v + " { position: absolute; } }",
        function(t) {
            r = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
        }),
        r
    },
    $ = function() {
        function e(e, i) {
            i = i || t.createElement(r[e] || "div"),
            e = "on" + e;
            var a = e in i;
            return a || (i.setAttribute || (i = t.createElement("div")), i.setAttribute && i.removeAttribute && (i.setAttribute(e, ""), a = o(i[e], "function"), o(i[e], "undefined") || (i[e] = n), i.removeAttribute(e))),
            i = null,
            a
        }
        var r = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return e
    } (),
    M = {}.hasOwnProperty;
    d = o(M, "undefined") || o(M.call, "undefined") ?
    function(e, t) {
        return t in e && o(e.constructor.prototype[t], "undefined")
    }: function(e, t) {
        return M.call(e, t)
    },
    Function.prototype.bind || (Function.prototype.bind = function(e) {
        var t = this;
        if ("function" != typeof t) throw new TypeError;
        var n = j.call(arguments, 1),
        r = function() {
            if (this instanceof r) {
                var i = function() {};
                i.prototype = t.prototype;
                var o = new i,
                a = t.apply(o, n.concat(j.call(arguments)));
                return Object(a) === a ? a: o
            }
            return t.apply(e, n.concat(j.call(arguments)))
        };
        return r
    }),
    L.flexbox = function() {
        return c("flexWrap")
    },
    L.flexboxlegacy = function() {
        return c("boxDirection")
    },
    L.canvas = function() {
        var e = t.createElement("canvas");
        return ! (!e.getContext || !e.getContext("2d"))
    },
    L.canvastext = function() {
        return ! (!h.canvas || !o(t.createElement("canvas").getContext("2d").fillText, "function"))
    },
    L.webgl = function() {
        return !! e.WebGLRenderingContext
    },
    L.touch = function() {
        var n;
        return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : O(["@media (", E.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""),
        function(e) {
            n = 9 === e.offsetTop
        }),
        n
    },
    L.geolocation = function() {
        return "geolocation" in navigator
    },
    L.postmessage = function() {
        return !! e.postMessage
    },
    L.websqldatabase = function() {
        return !! e.openDatabase
    },
    L.indexedDB = function() {
        return !! c("indexedDB", e)
    },
    L.hashchange = function() {
        return $("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
    },
    L.history = function() {
        return ! (!e.history || !history.pushState)
    },
    L.draganddrop = function() {
        var e = t.createElement("div");
        return "draggable" in e || "ondragstart" in e && "ondrop" in e
    },
    L.websockets = function() {
        return "WebSocket" in e || "MozWebSocket" in e
    },
    L.rgba = function() {
        return r("background-color:rgba(150,255,150,.5)"),
        a(b.backgroundColor, "rgba")
    },
    L.hsla = function() {
        return r("background-color:hsla(120,40%,100%,.5)"),
        a(b.backgroundColor, "rgba") || a(b.backgroundColor, "hsla")
    },
    L.multiplebgs = function() {
        return r("background:url(https://),url(https://),red url(https://)"),
        /(url\s*\(.*?){3}/.test(b.background)
    },
    L.backgroundsize = function() {
        return c("backgroundSize")
    },
    L.borderimage = function() {
        return c("borderImage")
    },
    L.borderradius = function() {
        return c("borderRadius")
    },
    L.boxshadow = function() {
        return c("boxShadow")
    },
    L.textshadow = function() {
        return "" === t.createElement("div").style.textShadow
    },
    L.opacity = function() {
        return i("opacity:.55"),
        /^0.55$/.test(b.opacity)
    },
    L.cssanimations = function() {
        return c("animationName")
    },
    L.csscolumns = function() {
        return c("columnCount")
    },
    L.cssgradients = function() {
        var e = "background-image:",
        t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
        n = "linear-gradient(left top,#9f9, white);";
        return r((e + "-webkit- ".split(" ").join(t + e) + E.join(n + e)).slice(0, -e.length)),
        a(b.backgroundImage, "gradient")
    },
    L.cssreflections = function() {
        return c("boxReflect")
    },
    L.csstransforms = function() {
        return !! c("transform")
    },
    L.csstransforms3d = function() {
        var e = !!c("perspective");
        return e && "webkitPerspective" in g.style && O("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",
        function(t) {
            e = 9 === t.offsetLeft && 3 === t.offsetHeight
        }),
        e
    },
    L.csstransitions = function() {
        return c("transition")
    },
    L.fontface = function() {
        var e;
        return O('@font-face {font-family:"font";src:url("https://")}',
        function(n, r) {
            var i = t.getElementById("smodernizr"),
            o = i.sheet || i.styleSheet,
            a = o ? o.cssRules && o.cssRules[0] ? o.cssRules[0].cssText: o.cssText || "": "";
            e = /src/i.test(a) && 0 === a.indexOf(r.split(" ")[0])
        }),
        e
    },
    L.generatedcontent = function() {
        var e;
        return O(["#", v, "{font:0/0 a}#", v, ':after{content:"', w, '";visibility:hidden;font:3px/1 a}'].join(""),
        function(t) {
            e = t.offsetHeight >= 3
        }),
        e
    },
    L.video = function() {
        var e = t.createElement("video"),
        n = !1;
        try { (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch(r) {}
        return n
    },
    L.audio = function() {
        var e = t.createElement("audio"),
        n = !1;
        try { (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch(r) {}
        return n
    },
    L.localstorage = function() {
        try {
            return localStorage.setItem(v, v),
            localStorage.removeItem(v),
            !0
        } catch(e) {
            return ! 1
        }
    },
    L.sessionstorage = function() {
        try {
            return sessionStorage.setItem(v, v),
            sessionStorage.removeItem(v),
            !0
        } catch(e) {
            return ! 1
        }
    },
    L.webworkers = function() {
        return !! e.Worker
    },
    L.applicationcache = function() {
        return !! e.applicationCache
    },
    L.svg = function() {
        return !! t.createElementNS && !!t.createElementNS(N.svg, "svg").createSVGRect
    },
    L.inlinesvg = function() {
        var e = t.createElement("div");
        return e.innerHTML = "<svg/>",
        (e.firstChild && e.firstChild.namespaceURI) == N.svg
    },
    L.smil = function() {
        return !! t.createElementNS && /SVGAnimate/.test(T.call(t.createElementNS(N.svg, "animate")))
    },
    L.svgclippaths = function() {
        return !! t.createElementNS && /SVGClipPath/.test(T.call(t.createElementNS(N.svg, "clipPath")))
    };
    for (var F in L) d(L, F) && (f = F.toLowerCase(), h[f] = L[F](), _.push((h[f] ? "": "no-") + f));
    return h.input || u(),
    h.addTest = function(e, t) {
        if ("object" == typeof e) for (var r in e) d(e, r) && h.addTest(r, e[r]);
        else {
            if (e = e.toLowerCase(), h[e] !== n) return h;
            t = "function" == typeof t ? t() : t,
            "undefined" != typeof m && m && (g.className += " " + (t ? "": "no-") + e),
            h[e] = t
        }
        return h
    },
    r(""),
    y = x = null,
    function(e, t) {
        function n(e, t) {
            var n = e.createElement("p"),
            r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>",
            r.insertBefore(n.lastChild, r.firstChild)
        }
        function r() {
            var e = y.elements;
            return "string" == typeof e ? e.split(" ") : e
        }
        function i(e) {
            var t = v[e[m]];
            return t || (t = {},
            g++, e[m] = g, v[g] = t),
            t
        }
        function o(e, n, r) {
            if (n || (n = t), u) return n.createElement(e);
            r || (r = i(n));
            var o;
            return o = r.cache[e] ? r.cache[e].cloneNode() : h.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e),
            !o.canHaveChildren || p.test(e) || o.tagUrn ? o: r.frag.appendChild(o)
        }
        function a(e, n) {
            if (e || (e = t), u) return e.createDocumentFragment();
            n = n || i(e);
            for (var o = n.frag.cloneNode(), a = 0, s = r(), l = s.length; l > a; a++) o.createElement(s[a]);
            return o
        }
        function s(e, t) {
            t.cache || (t.cache = {},
            t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()),
            e.createElement = function(n) {
                return y.shivMethods ? o(n, e, t) : t.createElem(n)
            },
            e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-]+/g,
            function(e) {
                return t.createElem(e),
                t.frag.createElement(e),
                'c("' + e + '")'
            }) + ");return n}")(y, t.frag)
        }
        function l(e) {
            e || (e = t);
            var r = i(e);
            return ! y.shivCSS || c || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),
            u || s(e, r),
            e
        }
        var c, u, f = "3.7.0",
        d = e.html5 || {},
        p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        m = "_html5shiv",
        g = 0,
        v = {}; !
        function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>",
                c = "hidden" in e,
                u = 1 == e.childNodes.length ||
                function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                } ()
            } catch(n) {
                c = !0,
                u = !0
            }
        } ();
        var y = {
            elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: f,
            shivCSS: d.shivCSS !== !1,
            supportsUnknownElements: u,
            shivMethods: d.shivMethods !== !1,
            type: "default",
            shivDocument: l,
            createElement: o,
            createDocumentFragment: a
        };
        e.html5 = y,
        l(t)
    } (this, t),
    h._version = p,
    h._prefixes = E,
    h._domPrefixes = S,
    h._cssomPrefixes = k,
    h.mq = H,
    h.hasEvent = $,
    h.testProp = function(e) {
        return s([e])
    },
    h.testAllProps = c,
    h.testStyles = O,
    h.prefixed = function(e, t, n) {
        return t ? c(e, t, n) : c(e, "pfx")
    },
    g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (m ? " js " + _.join(" ") : ""),
    h
} (this, this.document),
function(e, t, n, r) {
    function i(t, n) {
        this.element = t,
        this.options = e.extend({},
        a, n),
        this._defaults = a,
        this._name = o,
        this.init()
    }
    var o = "stellar",
    a = {
        scrollProperty: "scroll",
        positionProperty: "position",
        horizontalScrolling: !0,
        verticalScrolling: !0,
        horizontalOffset: 0,
        verticalOffset: 0,
        responsive: !1,
        parallaxBackgrounds: !0,
        parallaxElements: !0,
        hideDistantElements: !0,
        hideElement: function(e) {
            e.hide()
        },
        showElement: function(e) {
            e.show()
        }
    },
    s = {
        scroll: {
            getLeft: function(e) {
                return e.scrollLeft()
            },
            setLeft: function(e, t) {
                e.scrollLeft(t)
            },
            getTop: function(e) {
                return e.scrollTop()
            },
            setTop: function(e, t) {
                e.scrollTop(t)
            }
        },
        position: {
            getLeft: function(e) {
                return - 1 * parseInt(e.css("left"), 10)
            },
            getTop: function(e) {
                return - 1 * parseInt(e.css("top"), 10)
            }
        },
        margin: {
            getLeft: function(e) {
                return - 1 * parseInt(e.css("margin-left"), 10)
            },
            getTop: function(e) {
                return - 1 * parseInt(e.css("margin-top"), 10)
            }
        },
        transform: {
            getLeft: function(e) {
                var t = getComputedStyle(e[0])[u];
                return "none" !== t ? -1 * parseInt(t.match(/(-?[0-9]+)/g)[4], 10) : 0
            },
            getTop: function(e) {
                var t = getComputedStyle(e[0])[u];
                return "none" !== t ? -1 * parseInt(t.match(/(-?[0-9]+)/g)[5], 10) : 0
            }
        }
    },
    l = {
        position: {
            setLeft: function(e, t) {
                e.css("left", t)
            },
            setTop: function(e, t) {
                e.css("top", t)
            }
        },
        transform: {
            setPosition: function(e, t, n, r, i) {
                e[0].style[u] = "translate3d(" + (t - n) + "px, " + (r - i) + "px, 0)"
            }
        }
    },
    c = function() {
        var t, n = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
        r = e("script")[0].style,
        i = "";
        for (t in r) if (n.test(t)) {
            i = t.match(n)[0];
            break
        }
        return "WebkitOpacity" in r && (i = "Webkit"),
        "KhtmlOpacity" in r && (i = "Khtml"),
        function(e) {
            return i + (i.length > 0 ? e.charAt(0).toUpperCase() + e.slice(1) : e)
        }
    } (),
    u = c("transform"),
    f = e("<div />", {
        style: "background:#fff"
    }).css("background-position-x") !== r,
    d = f ?
    function(e, t, n) {
        e.css({
            "background-position-x": t,
            "background-position-y": n
        })
    }: function(e, t, n) {
        e.css("background-position", t + " " + n)
    },
    p = f ?
    function(e) {
        return [e.css("background-position-x"), e.css("background-position-y")]
    }: function(e) {
        return e.css("background-position").split(" ")
    },
    h = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame ||
    function(e) {
        setTimeout(e, 1e3 / 60)
    };
    i.prototype = {
        init: function() {
            this.options.name = o + "_" + Math.floor(1e9 * Math.random()),
            this._defineElements(),
            this._defineGetters(),
            this._defineSetters(),
            this._handleWindowLoadAndResize(),
            this._detectViewport(),
            this.refresh({
                firstLoad: !0
            }),
            "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
        },
        _defineElements: function() {
            this.element === n.body && (this.element = t),
            this.$scrollElement = e(this.element),
            this.$element = this.element === t ? e("body") : this.$scrollElement,
            this.$viewportElement = this.options.viewportElement !== r ? e(this.options.viewportElement) : this.$scrollElement[0] === t || "scroll" === this.options.scrollProperty ? this.$scrollElement: this.$scrollElement.parent()
        },
        _defineGetters: function() {
            var e = this,
            t = s[e.options.scrollProperty];
            this._getScrollLeft = function() {
                return t.getLeft(e.$scrollElement)
            },
            this._getScrollTop = function() {
                return t.getTop(e.$scrollElement)
            }
        },
        _defineSetters: function() {
            var t = this,
            n = s[t.options.scrollProperty],
            r = l[t.options.positionProperty],
            i = n.setLeft,
            o = n.setTop;
            this._setScrollLeft = "function" == typeof i ?
            function(e) {
                i(t.$scrollElement, e)
            }: e.noop,
            this._setScrollTop = "function" == typeof o ?
            function(e) {
                o(t.$scrollElement, e)
            }: e.noop,
            this._setPosition = r.setPosition ||
            function(e, n, i, o, a) {
                t.options.horizontalScrolling && r.setLeft(e, n, i),
                t.options.verticalScrolling && r.setTop(e, o, a)
            }
        },
        _handleWindowLoadAndResize: function() {
            var n = this,
            r = e(t);
            n.options.responsive && r.bind("load." + this.name,
            function() {
                n.refresh()
            }),
            r.bind("resize." + this.name,
            function() {
                n._detectViewport(),
                n.options.responsive && n.refresh()
            })
        },
        refresh: function(n) {
            var r = this,
            i = r._getScrollLeft(),
            o = r._getScrollTop();
            n && n.firstLoad || this._reset(),
            this._setScrollLeft(0),
            this._setScrollTop(0),
            this._setOffsets(),
            this._findParticles(),
            this._findBackgrounds(),
            n && n.firstLoad && /WebKit/.test(navigator.userAgent) && e(t).load(function() {
                var e = r._getScrollLeft(),
                t = r._getScrollTop();
                r._setScrollLeft(e + 1),
                r._setScrollTop(t + 1),
                r._setScrollLeft(e),
                r._setScrollTop(t)
            }),
            this._setScrollLeft(i),
            this._setScrollTop(o)
        },
        _detectViewport: function() {
            var e = this.$viewportElement.offset(),
            t = null !== e && e !== r;
            this.viewportWidth = this.$viewportElement.width(),
            this.viewportHeight = this.$viewportElement.height(),
            this.viewportOffsetTop = t ? e.top: 0,
            this.viewportOffsetLeft = t ? e.left: 0
        },
        _findParticles: function() {
            {
                var t = this;
                this._getScrollLeft(),
                this._getScrollTop()
            }
            if (this.particles !== r) for (var n = this.particles.length - 1; n >= 0; n--) this.particles[n].$element.data("stellar-elementIsActive", r);
            this.particles = [],
            this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function() {
                var n, i, o, a, s, l, c, u, f, d = e(this),
                p = 0,
                h = 0,
                m = 0,
                g = 0;
                if (d.data("stellar-elementIsActive")) {
                    if (d.data("stellar-elementIsActive") !== this) return
                } else d.data("stellar-elementIsActive", this);
                t.options.showElement(d),
                d.data("stellar-startingLeft") ? (d.css("left", d.data("stellar-startingLeft")), d.css("top", d.data("stellar-startingTop"))) : (d.data("stellar-startingLeft", d.css("left")), d.data("stellar-startingTop", d.css("top"))),
                o = d.position().left,
                a = d.position().top,
                s = "auto" === d.css("margin-left") ? 0 : parseInt(d.css("margin-left"), 10),
                l = "auto" === d.css("margin-top") ? 0 : parseInt(d.css("margin-top"), 10),
                u = d.offset().left - s,
                f = d.offset().top - l,
                d.parents().each(function() {
                    var t = e(this);
                    return t.data("stellar-offset-parent") === !0 ? (p = m, h = g, c = t, !1) : (m += t.position().left, g += t.position().top, void 0)
                }),
                n = d.data("stellar-horizontal-offset") !== r ? d.data("stellar-horizontal-offset") : c !== r && c.data("stellar-horizontal-offset") !== r ? c.data("stellar-horizontal-offset") : t.horizontalOffset,
                i = d.data("stellar-vertical-offset") !== r ? d.data("stellar-vertical-offset") : c !== r && c.data("stellar-vertical-offset") !== r ? c.data("stellar-vertical-offset") : t.verticalOffset,
                t.particles.push({
                    $element: d,
                    $offsetParent: c,
                    isFixed: "fixed" === d.css("position"),
                    horizontalOffset: n,
                    verticalOffset: i,
                    startingPositionLeft: o,
                    startingPositionTop: a,
                    startingOffsetLeft: u,
                    startingOffsetTop: f,
                    parentOffsetLeft: p,
                    parentOffsetTop: h,
                    stellarRatio: d.data("stellar-ratio") !== r ? d.data("stellar-ratio") : 1,
                    width: d.outerWidth(!0),
                    height: d.outerHeight(!0),
                    isHidden: !1
                })
            })
        },
        _findBackgrounds: function() {
            var t, n = this,
            i = this._getScrollLeft(),
            o = this._getScrollTop();
            this.backgrounds = [],
            this.options.parallaxBackgrounds && (t = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (t = t.add(this.$element)), t.each(function() {
                var t, a, s, l, c, u, f, h = e(this),
                m = p(h),
                g = 0,
                v = 0,
                y = 0,
                b = 0;
                if (h.data("stellar-backgroundIsActive")) {
                    if (h.data("stellar-backgroundIsActive") !== this) return
                } else h.data("stellar-backgroundIsActive", this);
                h.data("stellar-backgroundStartingLeft") ? d(h, h.data("stellar-backgroundStartingLeft"), h.data("stellar-backgroundStartingTop")) : (h.data("stellar-backgroundStartingLeft", m[0]), h.data("stellar-backgroundStartingTop", m[1])),
                s = "auto" === h.css("margin-left") ? 0 : parseInt(h.css("margin-left"), 10),
                l = "auto" === h.css("margin-top") ? 0 : parseInt(h.css("margin-top"), 10),
                c = h.offset().left - s - i,
                u = h.offset().top - l - o,
                h.parents().each(function() {
                    var t = e(this);
                    return t.data("stellar-offset-parent") === !0 ? (g = y, v = b, f = t, !1) : (y += t.position().left, b += t.position().top, void 0)
                }),
                t = h.data("stellar-horizontal-offset") !== r ? h.data("stellar-horizontal-offset") : f !== r && f.data("stellar-horizontal-offset") !== r ? f.data("stellar-horizontal-offset") : n.horizontalOffset,
                a = h.data("stellar-vertical-offset") !== r ? h.data("stellar-vertical-offset") : f !== r && f.data("stellar-vertical-offset") !== r ? f.data("stellar-vertical-offset") : n.verticalOffset,
                n.backgrounds.push({
                    $element: h,
                    $offsetParent: f,
                    isFixed: "fixed" === h.css("background-attachment"),
                    horizontalOffset: t,
                    verticalOffset: a,
                    startingValueLeft: m[0],
                    startingValueTop: m[1],
                    startingBackgroundPositionLeft: isNaN(parseInt(m[0], 10)) ? 0 : parseInt(m[0], 10),
                    startingBackgroundPositionTop: isNaN(parseInt(m[1], 10)) ? 0 : parseInt(m[1], 10),
                    startingPositionLeft: h.position().left,
                    startingPositionTop: h.position().top,
                    startingOffsetLeft: c,
                    startingOffsetTop: u,
                    parentOffsetLeft: g,
                    parentOffsetTop: v,
                    stellarRatio: h.data("stellar-background-ratio") === r ? 1 : h.data("stellar-background-ratio")
                })
            }))
        },
        _reset: function() {
            var e, t, n, r, i;
            for (i = this.particles.length - 1; i >= 0; i--) e = this.particles[i],
            t = e.$element.data("stellar-startingLeft"),
            n = e.$element.data("stellar-startingTop"),
            this._setPosition(e.$element, t, t, n, n),
            this.options.showElement(e.$element),
            e.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
            for (i = this.backgrounds.length - 1; i >= 0; i--) r = this.backgrounds[i],
            r.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null),
            d(r.$element, r.startingValueLeft, r.startingValueTop)
        },
        destroy: function() {
            this._reset(),
            this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name),
            this._animationLoop = e.noop,
            e(t).unbind("load." + this.name).unbind("resize." + this.name)
        },
        _setOffsets: function() {
            var n = this,
            r = e(t);
            r.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name),
            "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), r.bind("resize.horizontal-" + this.name,
            function() {
                n.horizontalOffset = n.options.horizontalOffset()
            })) : this.horizontalOffset = this.options.horizontalOffset,
            "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), r.bind("resize.vertical-" + this.name,
            function() {
                n.verticalOffset = n.options.verticalOffset()
            })) : this.verticalOffset = this.options.verticalOffset
        },
        _repositionElements: function() {
            var e, t, n, r, i, o, a, s, l, c, u = this._getScrollLeft(),
            f = this._getScrollTop(),
            p = !0,
            h = !0;
            if (this.currentScrollLeft !== u || this.currentScrollTop !== f || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
                for (this.currentScrollLeft = u, this.currentScrollTop = f, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, c = this.particles.length - 1; c >= 0; c--) e = this.particles[c],
                t = e.isFixed ? 1 : 0,
                this.options.horizontalScrolling ? (o = (u + e.horizontalOffset + this.viewportOffsetLeft + e.startingPositionLeft - e.startingOffsetLeft + e.parentOffsetLeft) * -(e.stellarRatio + t - 1) + e.startingPositionLeft, s = o - e.startingPositionLeft + e.startingOffsetLeft) : (o = e.startingPositionLeft, s = e.startingOffsetLeft),
                this.options.verticalScrolling ? (a = (f + e.verticalOffset + this.viewportOffsetTop + e.startingPositionTop - e.startingOffsetTop + e.parentOffsetTop) * -(e.stellarRatio + t - 1) + e.startingPositionTop, l = a - e.startingPositionTop + e.startingOffsetTop) : (a = e.startingPositionTop, l = e.startingOffsetTop),
                this.options.hideDistantElements && (h = !this.options.horizontalScrolling || s + e.width > (e.isFixed ? 0 : u) && s < (e.isFixed ? 0 : u) + this.viewportWidth + this.viewportOffsetLeft, p = !this.options.verticalScrolling || l + e.height > (e.isFixed ? 0 : f) && l < (e.isFixed ? 0 : f) + this.viewportHeight + this.viewportOffsetTop),
                h && p ? (e.isHidden && (this.options.showElement(e.$element), e.isHidden = !1), this._setPosition(e.$element, o, e.startingPositionLeft, a, e.startingPositionTop)) : e.isHidden || (this.options.hideElement(e.$element), e.isHidden = !0);
                for (c = this.backgrounds.length - 1; c >= 0; c--) n = this.backgrounds[c],
                t = n.isFixed ? 0 : 1,
                r = this.options.horizontalScrolling ? (u + n.horizontalOffset - this.viewportOffsetLeft - n.startingOffsetLeft + n.parentOffsetLeft - n.startingBackgroundPositionLeft) * (t - n.stellarRatio) + "px": n.startingValueLeft,
                i = this.options.verticalScrolling ? (f + n.verticalOffset - this.viewportOffsetTop - n.startingOffsetTop + n.parentOffsetTop - n.startingBackgroundPositionTop) * (t - n.stellarRatio) + "px": n.startingValueTop,
                d(n.$element, r, i)
            }
        },
        _handleScrollEvent: function() {
            var e = this,
            t = !1,
            n = function() {
                e._repositionElements(),
                t = !1
            },
            r = function() {
                t || (h(n), t = !0)
            };
            this.$scrollElement.bind("scroll." + this.name, r),
            r()
        },
        _startAnimationLoop: function() {
            var e = this;
            this._animationLoop = function() {
                h(e._animationLoop),
                e._repositionElements()
            },
            this._animationLoop()
        }
    },
    e.fn[o] = function(t) {
        var n = arguments;
        return t === r || "object" == typeof t ? this.each(function() {
            e.data(this, "plugin_" + o) || e.data(this, "plugin_" + o, new i(this, t))
        }) : "string" == typeof t && "_" !== t[0] && "init" !== t ? this.each(function() {
            var r = e.data(this, "plugin_" + o);
            r instanceof i && "function" == typeof r[t] && r[t].apply(r, Array.prototype.slice.call(n, 1)),
            "destroy" === t && e.data(this, "plugin_" + o, null)
        }) : void 0
    },
    e[o] = function() {
        var n = e(t);
        return n.stellar.apply(n, Array.prototype.slice.call(arguments, 0))
    },
    e[o].scrollProperty = s,
    e[o].positionProperty = l,
    t.Stellar = i
} (jQuery, this, document),
function() {
    var e = function(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }; !
    function(t, n, r) {
        var i, o, a;
        return a = "stickyMenu",
        o = {},
        i = function() {
            function i(n, r) {
                this.element = n,
                this.activateLink = e(this.activateLink, this),
                this.scrollTo = e(this.scrollTo, this),
                this.toggleMenu = e(this.toggleMenu, this),
                this.manageScroll = e(this.manageScroll, this),
                this.listen = e(this.listen, this),
                this.settings = t.extend({},
                o, r),
                this._defaults = o,
                this._name = a,
                this.init()
            }
            return i.prototype.init = function() {
                return this.$el = t(this.element),
                this.$toggle = this.$el.find(".toggle-nav"),
                this.$nav = this.$el.find(".nav-links"),
                this.settings.offset = t("#main_content").offset().top,
                this.scrolling = !1,
                this.listen()
            },
            i.prototype.listen = function() {
                return this.$toggle.on("click", this.toggleMenu),
                this.$nav.find("a").on("click", this.scrollTo),
                t(n).on("scroll", this.manageScroll)
            },
            i.prototype.manageScroll = function() {
                var e;
                return this.scrolling ? void 0 : (e = t(r).scrollTop(), this.$nav.find("a").each(function(n) {
                    return function(r, i) {
                        var o, a, s, l;
                        return a = t(i),
                        s = t(a.attr("href")),
                        l = s.offset().top,
                        o = s.height(),
                        e >= l && l + o >= e ? n.activateLink(a) : void 0
                    }
                } (this)))
            },
            i.prototype.toggleMenu = function(e) {
                return e.preventDefault(),
                this.$nav.stop().toggleClass("show", 300)
            },
            i.prototype.scrollTo = function(e) {
                var n, r;
                return e.preventDefault(),
                n = t(e.target),
                r = t(n.attr("href")),
                r.length ? (this.scrolling = !0, t("html,body").animate({
                    scrollTop: r.offset().top
                },
                600,
                function(e) {
                    return function() {
                        return e.activateLink(n)
                    }
                } (this))) : void 0
            },
            i.prototype.activateLink = function(e) {
                return e.stop().closest("li").addClass("active").siblings(".active").removeClass("active"),
                this.scrolling = !1
            },
            i
        } (),
        t.fn[a] = function(e) {
            return this.each(function() {
                return t.data(this, "plugin_" + a) ? void 0 : t.data(this, "plugin_" + a, new i(this, e))
            })
        }
    } (jQuery, window, document)
}.call(this),
function() {
    $(window).load(function() {
        var e, t, n;
        return $("#main_nav").stickyMenu(),
        t = document.getElementById("map-canvas"),
        // n = {
        //     center: new google.maps.LatLng(43.585284, -5.968088),
        //     zoom: 15,
        //     mapTypeId: google.maps.MapTypeId.SATELLITE,
        //     disableDefaultUI: !0
        // },
        // e = new google.maps.Map(t, n),
        e = new ol.Map({
        layers: [
          new ol.layer.Tile({
            source: new ol.source.BingMaps({
            key:'AjLLkJSmSuIMQyAqDjRmY5nfiw2wDcmc4A5lIPbX4YFLteoiUhqGjCQxSdLl7i5h',
            imagerySet: 'AerialWithLabels'
          })
        })
        ],
        target: 'map-canvas',
        controls: ol.control.defaults({
          attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
            collapsible: false
          })
        }),
        view: new ol.View({
          center: ol.proj.transform([108.984075,34.246291], 'EPSG:4326', 'EPSG:3857'),
          zoom: 16
        })
    }),
        $.stellar({
            horizontalScrolling: !1,
            responsive: !1
        }),
        $(".animate").each(function() {
            var e, t;
            return t = $(this),
            e = t.data("animation"),
            null != e && t.not(".animated") ? $(window).scroll(function() {
                var n, r;
                return n = t.offset().top,
                r = $(window).scrollTop(),
                r + 820 > n ? t.removeClass("invisible").addClass("animated " + e) : void 0
            }) : void 0
        })
    })
}.call(this);