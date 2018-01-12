var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-canvas-cssanimations-cssgrid_cssgridlegacy-csstransforms-csstransforms3d-csstransitions-geolocation-history-inlinesvg-smil-svg-svgasimg-svgclippaths-svgfilters-addtest-atrule-domprefixes-hasevent-mq-prefixed-prefixedcss-prefixedcssvalue-prefixes-setclasses-testallprops-testprop-teststyles !*/
!function (e, t, n) {
  function r(e, t) {
    return (typeof e === "undefined" ? "undefined" : _typeof(e)) === t;
  }function i() {
    var e, t, n, i, o, s, a;for (var u in C) {
      if (C.hasOwnProperty(u)) {
        if (e = [], t = C[u], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)) for (n = 0; n < t.options.aliases.length; n++) {
          e.push(t.options.aliases[n].toLowerCase());
        }for (i = r(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) {
          s = e[o], a = s.split("."), 1 === a.length ? Modernizr[a[0]] = i : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = i), w.push((i ? "" : "no-") + a.join("-"));
        }
      }
    }
  }function o(e) {
    var t = T.className,
        n = Modernizr._config.classPrefix || "";if (E && (t = t.baseVal), Modernizr._config.enableJSClass) {
      var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");t = t.replace(r, "$1" + n + "js$2");
    }Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), E ? T.className.baseVal = t : T.className = t);
  }function s(e, t) {
    if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) for (var n in e) {
      A(e, n) && s(n, e[n]);
    } else {
      e = e.toLowerCase();var r = e.split("."),
          i = Modernizr[r[0]];if (2 == r.length && (i = i[r[1]]), "undefined" != typeof i) return Modernizr;t = "function" == typeof t ? t() : t, 1 == r.length ? Modernizr[r[0]] = t : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = t), o([(t && 0 != t ? "" : "no-") + r.join("-")]), Modernizr._trigger(e, t);
    }return Modernizr;
  }function a() {
    return "function" != typeof t.createElement ? t.createElement(arguments[0]) : E ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments);
  }function u(e) {
    return e.replace(/([a-z])-([a-z])/g, function (e, t, n) {
      return t + n.toUpperCase();
    }).replace(/^-/, "");
  }function l(e) {
    return e.replace(/([A-Z])/g, function (e, t) {
      return "-" + t.toLowerCase();
    }).replace(/^ms-/, "-ms-");
  }function f() {
    var e = t.body;return e || (e = a(E ? "svg" : "body"), e.fake = !0), e;
  }function d(e, n, r, i) {
    var o,
        s,
        u,
        l,
        d = "modernizr",
        c = a("div"),
        p = f();if (parseInt(r, 10)) for (; r--;) {
      u = a("div"), u.id = i ? i[r] : d + (r + 1), c.appendChild(u);
    }return o = a("style"), o.type = "text/css", o.id = "s" + d, (p.fake ? p : c).appendChild(o), p.appendChild(c), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(t.createTextNode(e)), c.id = d, p.fake && (p.style.background = "", p.style.overflow = "hidden", l = T.style.overflow, T.style.overflow = "hidden", T.appendChild(p)), s = n(c, e), p.fake ? (p.parentNode.removeChild(p), T.style.overflow = l, T.offsetHeight) : c.parentNode.removeChild(c), !!s;
  }function c(e, t) {
    return !!~("" + e).indexOf(t);
  }function p(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }function m(e, t, n) {
    var i;for (var o in e) {
      if (e[o] in t) return n === !1 ? e[o] : (i = t[e[o]], r(i, "function") ? p(i, n || t) : i);
    }return !1;
  }function v(t, n, r) {
    var i;if ("getComputedStyle" in e) {
      i = getComputedStyle.call(e, t, n);var o = e.console;if (null !== i) r && (i = i.getPropertyValue(r));else if (o) {
        var s = o.error ? "error" : "log";o[s].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate");
      }
    } else i = !n && t.currentStyle && t.currentStyle[r];return i;
  }function g(t, r) {
    var i = t.length;if ("CSS" in e && "supports" in e.CSS) {
      for (; i--;) {
        if (e.CSS.supports(l(t[i]), r)) return !0;
      }return !1;
    }if ("CSSSupportsRule" in e) {
      for (var o = []; i--;) {
        o.push("(" + l(t[i]) + ":" + r + ")");
      }return o = o.join(" or "), d("@supports (" + o + ") { #modernizr { position: absolute; } }", function (e) {
        return "absolute" == v(e, null, "position");
      });
    }return n;
  }function h(e, t, i, o) {
    function s() {
      f && (delete q.style, delete q.modElem);
    }if (o = r(o, "undefined") ? !1 : o, !r(i, "undefined")) {
      var l = g(e, i);if (!r(l, "undefined")) return l;
    }for (var f, d, p, m, v, h = ["modernizr", "tspan", "samp"]; !q.style && h.length;) {
      f = !0, q.modElem = a(h.shift()), q.style = q.modElem.style;
    }for (p = e.length, d = 0; p > d; d++) {
      if (m = e[d], v = q.style[m], c(m, "-") && (m = u(m)), q.style[m] !== n) {
        if (o || r(i, "undefined")) return s(), "pfx" == t ? m : !0;try {
          q.style[m] = i;
        } catch (y) {}if (q.style[m] != v) return s(), "pfx" == t ? m : !0;
      }
    }return s(), !1;
  }function y(e, t, n, i, o) {
    var s = e.charAt(0).toUpperCase() + e.slice(1),
        a = (e + " " + N.join(s + " ") + s).split(" ");return r(t, "string") || r(t, "undefined") ? h(a, t, i, o) : (a = (e + " " + P.join(s + " ") + s).split(" "), m(a, t, n));
  }function S(e, t, r) {
    return y(e, n, n, t, r);
  }var w = [],
      C = [],
      x = { _version: "3.5.0", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function on(e, t) {
      var n = this;setTimeout(function () {
        t(n[e]);
      }, 0);
    }, addTest: function addTest(e, t, n) {
      C.push({ name: e, fn: t, options: n });
    }, addAsyncTest: function addAsyncTest(e) {
      C.push({ name: null, fn: e });
    } },
      Modernizr = function Modernizr() {};Modernizr.prototype = x, Modernizr = new Modernizr(), Modernizr.addTest("geolocation", "geolocation" in navigator), Modernizr.addTest("history", function () {
    var t = navigator.userAgent;return -1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone") || "file:" === location.protocol ? e.history && "pushState" in e.history : !1;
  }), Modernizr.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect), Modernizr.addTest("svgfilters", function () {
    var t = !1;try {
      t = "SVGFEColorMatrixElement" in e && 2 == SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE;
    } catch (n) {}return t;
  });var _ = x._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];x._prefixes = _;var T = t.documentElement,
      E = "svg" === T.nodeName.toLowerCase(),
      b = "Moz O ms Webkit",
      P = x._config.usePrefixes ? b.toLowerCase().split(" ") : [];x._domPrefixes = P;var A;!function () {
    var e = {}.hasOwnProperty;A = r(e, "undefined") || r(e.call, "undefined") ? function (e, t) {
      return t in e && r(e.constructor.prototype[t], "undefined");
    } : function (t, n) {
      return e.call(t, n);
    };
  }(), x._l = {}, x.on = function (e, t) {
    this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout(function () {
      Modernizr._trigger(e, Modernizr[e]);
    }, 0);
  }, x._trigger = function (e, t) {
    if (this._l[e]) {
      var n = this._l[e];setTimeout(function () {
        var e, r;for (e = 0; e < n.length; e++) {
          (r = n[e])(t);
        }
      }, 0), delete this._l[e];
    }
  }, Modernizr._q.push(function () {
    x.addTest = s;
  }), Modernizr.addTest("svgasimg", t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"));var N = x._config.usePrefixes ? b.split(" ") : [];x._cssomPrefixes = N;var O = function O(t) {
    var r,
        i = _.length,
        o = e.CSSRule;if ("undefined" == typeof o) return n;if (!t) return !1;if (t = t.replace(/^@/, ""), r = t.replace(/-/g, "_").toUpperCase() + "_RULE", r in o) return "@" + t;for (var s = 0; i > s; s++) {
      var a = _[s],
          u = a.toUpperCase() + "_" + r;if (u in o) return "@-" + a.toLowerCase() + "-" + t;
    }return !1;
  };x.atRule = O;var z = function () {
    function e(e, t) {
      var i;return e ? (t && "string" != typeof t || (t = a(t || "div")), e = "on" + e, i = e in t, !i && r && (t.setAttribute || (t = a("div")), t.setAttribute(e, ""), i = "function" == typeof t[e], t[e] !== n && (t[e] = n), t.removeAttribute(e)), i) : !1;
    }var r = !("onblur" in t.documentElement);return e;
  }();x.hasEvent = z;var R = function R(e, t) {
    var n = !1,
        r = a("div"),
        i = r.style;if (e in i) {
      var o = P.length;for (i[e] = t, n = i[e]; o-- && !n;) {
        i[e] = "-" + P[o] + "-" + t, n = i[e];
      }
    }return "" === n && (n = !1), n;
  };x.prefixedCSSValue = R, Modernizr.addTest("canvas", function () {
    var e = a("canvas");return !(!e.getContext || !e.getContext("2d"));
  }), Modernizr.addTest("inlinesvg", function () {
    var e = a("div");return e.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == ("undefined" != typeof SVGRect && e.firstChild && e.firstChild.namespaceURI);
  });var V = "CSS" in e && "supports" in e.CSS,
      L = "supportsCSS" in e;Modernizr.addTest("supports", V || L);var M = {}.toString;Modernizr.addTest("svgclippaths", function () {
    return !!t.createElementNS && /SVGClipPath/.test(M.call(t.createElementNS("http://www.w3.org/2000/svg", "clipPath")));
  }), Modernizr.addTest("smil", function () {
    return !!t.createElementNS && /SVGAnimate/.test(M.call(t.createElementNS("http://www.w3.org/2000/svg", "animate")));
  });var j = function () {
    var t = e.matchMedia || e.msMatchMedia;return t ? function (e) {
      var n = t(e);return n && n.matches || !1;
    } : function (t) {
      var n = !1;return d("@media " + t + " { #modernizr { position: absolute; } }", function (t) {
        n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position;
      }), n;
    };
  }();x.mq = j;var k = x.testStyles = d,
      G = { elem: a("modernizr") };Modernizr._q.push(function () {
    delete G.elem;
  });var q = { style: G.elem.style };Modernizr._q.unshift(function () {
    delete q.style;
  });x.testProp = function (e, t, r) {
    return h([e], n, t, r);
  };x.testAllProps = y;var U = x.prefixed = function (e, t, n) {
    return 0 === e.indexOf("@") ? O(e) : (-1 != e.indexOf("-") && (e = u(e)), t ? y(e, t, n) : y(e, "pfx"));
  };x.prefixedCSS = function (e) {
    var t = U(e);return t && l(t);
  };x.testAllProps = S, Modernizr.addTest("cssanimations", S("animationName", "a", !0)), Modernizr.addTest("csstransforms", function () {
    return -1 === navigator.userAgent.indexOf("Android 2.") && S("transform", "scale(1)", !0);
  }), Modernizr.addTest("csstransforms3d", function () {
    var e = !!S("perspective", "1px", !0),
        t = Modernizr._config.usePrefixes;if (e && (!t || "webkitPerspective" in T.style)) {
      var n,
          r = "#modernizr{width:0;height:0}";Modernizr.supports ? n = "@supports (perspective: 1px)" : (n = "@media (transform-3d)", t && (n += ",(-webkit-transform-3d)")), n += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}", k(r + n, function (t) {
        e = 7 === t.offsetWidth && 18 === t.offsetHeight;
      });
    }return e;
  }), Modernizr.addTest("csstransitions", S("transition", "all", !0)), Modernizr.addTest("cssgridlegacy", S("grid-columns", "10px", !0)), Modernizr.addTest("cssgrid", S("grid-template-rows", "none", !0)), i(), o(w), delete x.addTest, delete x.addAsyncTest;for (var I = 0; I < Modernizr._q.length; I++) {
    Modernizr._q[I]();
  }e.Modernizr = Modernizr;
}(window, document);