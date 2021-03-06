/*
jquery.animate-enhanced plugin v1.11
---
http://github.com/benbarnett/jQuery-Animate-Enhanced
http://benbarnett.net
@benpbarnett
*/
(function(d, w) {
  "function" === typeof define && define.amd ? define(["jquery"], function() {
    return w.apply(d, arguments)
  }) : "object" === typeof module && module.exports ? module.exports = w.call(d, require("jquery")) : w.call(d, d.jQuery)
})("object" === typeof global ? global : this, function(d) {
  function w(a, b, k, c) {
    if ("d" != k && D(a)) {
      var f = K.exec(b),
        e = "auto" === a.css(k) ? 0 : a.css(k),
        e = "string" == typeof e ? A(e) : e;
      "string" == typeof b && A(b);
      c = !0 === c ? 0 : e;
      var g = a.is(":hidden"),
        n = a.translation();
      "left" == k && (c = parseInt(e, 10) + n.x);
      "right" == k &&
        (c = parseInt(e, 10) + n.x);
      "top" == k && (c = parseInt(e, 10) + n.y);
      "bottom" == k && (c = parseInt(e, 10) + n.y);
      if (f || "show" != b) f || "hide" != b || (c = 0);
      else if (c = 1, g) elem = a[0], elem.style && (display = elem.style.display, d._data(elem, "olddisplay") || "none" !== display || (display = elem.style.display = ""), "" === display && "none" === d.css(elem, "display") && d._data(elem, "olddisplay", L(elem.tagName)), "" === display || "none" === display) && (elem.style.display = d._data(elem, "olddisplay") || ""), a.css("opacity", 0);
      return f ? (a = parseFloat(f[2]), f[1] && (a =
        ("-=" === f[1] ? -1 : 1) * a + parseInt(c, 10)), f[3] && "px" != f[3] && (a += f[3]), a) : c
    }
  }

  function M(a, b, k, c, f, e, g, n) {
    var m = a.data(r),
      m = m && !q(m) ? m : d.extend(!0, {}, N),
      s = f;
    if (-1 < d.inArray(b, B)) {
      var l = m.meta,
        p = A(a.css(b)) || 0,
        t = b + "_o",
        s = f - p;
      l[b] = s;
      l[t] = "auto" == a.css(b) ? 0 + s : p + s || 0;
      m.meta = l;
      g && 0 === s && (s = 0 - l[t], l[b] = s, l[t] = 0)
    }
    return a.data(r, O(a, m, b, k, c, s, e, g, n))
  }

  function O(a, b, d, c, f, e, g, n, m) {
    var s = !1;
    g = !0 === g && !0 === n;
    b = b || {};
    b.original || (b.original = {}, s = !0);
    b.properties = b.properties || {};
    b.secondary = b.secondary || {};
    n = b.meta;
    for (var r = b.original, p = b.properties, t = b.secondary, h = l.length - 1; 0 <= h; h--) {
      var u = l[h] + "transition-property",
        v = l[h] + "transition-duration",
        q = l[h] + "transition-timing-function";
      d = g ? l[h] + "transform" : d;
      s && (r[u] = a.css(u) || "", r[v] = a.css(v) || "", r[q] = a.css(q) || "");
      var P = t,
        w = d,
        x;
      if (g) {
        x = n.left;
        var E = n.top;
        x = !0 === m || !0 === C && !1 !== m && F ? "translate3d(" + x + "px, " + E + "px, 0)" : "translate(" + x + "px," + E + "px)"
      } else x = e;
      P[w] = x;
      p[u] = (p[u] ? p[u] + "," : "") + d;
      p[v] = (p[v] ? p[v] + "," : "") + c + "ms";
      p[q] = (p[q] ? p[q] + "," : "") + f
    }
    return b
  }

  function Q(a) {
    for (var b in a)
      if (!("width" !=
          b && "height" != b || "show" != a[b] && "hide" != a[b] && "toggle" != a[b])) return !0;
    return !1
  }

  function q(a) {
    for (var b in a) return !1;
    return !0
  }

  function L(a) {
    a = a.toUpperCase();
    var b = {
      LI: "list-item",
      TR: "table-row",
      TD: "table-cell",
      TH: "table-cell",
      CAPTION: "table-caption",
      COL: "table-column",
      COLGROUP: "table-column-group",
      TFOOT: "table-footer-group",
      THEAD: "table-header-group",
      TBODY: "table-row-group"
    };
    return "string" == typeof b[a] ? b[a] : "block"
  }

  function A(a) {
    return parseFloat(a.replace(a.match(/\D+$/), ""))
  }

  function D(a) {
    var b = !0;
    a.each(function(a, d) {
      return b = b && d.ownerDocument
    });
    return b
  }

  function R(a, b, k) {
    if (!D(k)) return !1;
    var c = -1 < d.inArray(a, S);
    "width" != a && "height" != a && "opacity" != a || parseFloat(b) !== parseFloat(k.css(a)) || (c = !1);
    return c
  }
  var G = d.fn.animate,
    H = d.fn.stop,
    S = "top right bottom left opacity height width".split(" "),
    B = ["top", "right", "bottom", "left"],
    l = ["-webkit-", "-moz-", "-o-", ""],
    T = ["avoidTransforms", "useTranslate3d", "leaveTransforms"],
    K = /^([+-]=)?([\d+-.]+)(.*)$/,
    U = /([A-Z])/g,
    N = {
      secondary: {},
      meta: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },
    r = "jQe",
    I = null,
    y = !1,
    z = (document.body || document.documentElement).style,
    J = void 0 !== z.WebkitTransition || void 0 !== z.MozTransition || void 0 !== z.OTransition || void 0 !== z.transition,
    F = "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix,
    C = F;
  d.expr && d.expr.filters && (I = d.expr.filters.animated, d.expr.filters.animated = function(a) {
    return d(a).data("events") && d(a).data("events")["webkitTransitionEnd oTransitionEnd transitionend"] ? !0 : I.call(this, a)
  });
  d.extend({
    toggle3DByDefault: function() {
      return C = !C
    },
    toggleDisabledByDefault: function() {
      return y = !y
    },
    setDisabledByDefault: function(a) {
      return y = a
    }
  });
  d.fn.translation = function() {
    if (!this[0]) return null;
    var a = window.getComputedStyle(this[0], null),
      b = {
        x: 0,
        y: 0
      };
    if (a)
      for (var d = l.length - 1; 0 <= d; d--) {
        var c = a.getPropertyValue(l[d] + "transform");
        if (c && /matrix/i.test(c)) {
          a = c.replace(/^matrix\(/i, "").split(/, |\)$/g);
          b = {
            x: parseInt(a[4], 10),
            y: parseInt(a[5], 10)
          };
          break
        }
      }
    return b
  };
  d.fn.animate = function(a, b, k, c) {
    a = a || {};
    var f = !("undefined" !== typeof a.bottom || "undefined" !==
        typeof a.right),
      e = d.speed(b, k, c),
      g = 0,
      n = function() {
        g--;
        0 === g && "function" === typeof e.complete && e.complete.apply(this, arguments)
      };
    return !0 === ("undefined" !== typeof a.avoidCSSTransitions ? a.avoidCSSTransitions : y) || !J || q(a) || Q(a) || 0 >= e.duration || e.step ? G.apply(this, arguments) : this[!0 === e.queue ? "queue" : "each"](function() {
      var b = d(this),
        c = d.extend({}, e),
        k = function(c) {
          var e = b.data(r) || {
              original: {}
            },
            g = {};
          if (2 == c.eventPhase) {
            if (!0 !== a.leaveTransforms) {
              for (c = l.length - 1; 0 <= c; c--) g[l[c] + "transform"] = "";
              if (f && "undefined" !==
                typeof e.meta) {
                c = 0;
                for (var h; h = B[c]; ++c) {
                  var k = e.meta[h + "_o"];
                  "undefined" !== typeof k && (g[h] = k + "px", d(this).css(h, g[h]))
                }
              }
            }
            b.unbind("webkitTransitionEnd oTransitionEnd transitionend").css(e.original).css(g).data(r, null);
            "hide" === a.opacity && (elem = b[0], elem.style && (display = d.css(elem, "display"), "none" === display || d._data(elem, "olddisplay") || d._data(elem, "olddisplay", display), elem.style.display = "none"), b.css("opacity", ""));
            n.call(this)
          }
        },
        p = {
          bounce: "cubic-bezier(0.0, 0.35, .5, 1.3)",
          linear: "linear",
          swing: "ease-in-out",
          easeInQuad: "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
          easeInCubic: "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
          easeInQuart: "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
          easeInQuint: "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
          easeInSine: "cubic-bezier(0.470, 0.000, 0.745, 0.715)",
          easeInExpo: "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
          easeInCirc: "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
          easeInBack: "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
          easeOutQuad: "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
          easeOutCubic: "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
          easeOutQuart: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
          easeOutQuint: "cubic-bezier(0.230, 1.000, 0.320, 1.000)",
          easeOutSine: "cubic-bezier(0.390, 0.575, 0.565, 1.000)",
          easeOutExpo: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
          easeOutCirc: "cubic-bezier(0.075, 0.820, 0.165, 1.000)",
          easeOutBack: "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
          easeInOutQuad: "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
          easeInOutCubic: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
          easeInOutQuart: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
          easeInOutQuint: "cubic-bezier(0.860, 0.000, 0.070, 1.000)",
          easeInOutSine: "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
          easeInOutExpo: "cubic-bezier(1.000, 0.000, 0.000, 1.000)",
          easeInOutCirc: "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
          easeInOutBack: "cubic-bezier(0.680, -0.550, 0.265, 1.550)"
        },
        t = {},
        p = p[c.easing || "swing"] ? p[c.easing || "swing"] : c.easing || "swing",
        h;
      for (h in a)
        if (-1 === d.inArray(h, T)) {
          var u = -1 < d.inArray(h, B),
            v = w(b, a[h], h, u && !0 !== a.avoidTransforms);
          R(h, v, b) ? M(b, h, c.duration, p, v, u && !0 !== a.avoidTransforms,
            f, a.useTranslate3d) : t[h] = a[h]
        }
      b.unbind("webkitTransitionEnd oTransitionEnd transitionend");
      h = b.data(r);
      if (!h || q(h) || q(h.secondary)) c.queue = !1;
      else {
        g++;
        b.css(h.properties);
        var y = h.secondary;
        setTimeout(function() {
          b.bind("webkitTransitionEnd oTransitionEnd transitionend", k).css(y)
        })
      }
      q(t) || (g++, G.apply(b, [t, {
        duration: c.duration,
        easing: d.easing[c.easing] ? c.easing : d.easing.swing ? "swing" : "linear",
        complete: n,
        queue: c.queue
      }]));
      return !0
    })
  };
  d.fn.animate.defaults = {};
  d.fn.stop = function(a, b, k) {
    if (!J) return H.apply(this, [a, b]);
    a && this.queue([]);
    this.each(function() {
      var c = d(this),
        f = c.data(r);
      if (f && !q(f)) {
        var e, g = {};
        if (b) {
          if (g = f.secondary, !k && void 0 !== typeof f.meta.left_o || void 0 !== typeof f.meta.top_o)
            for (g.left = void 0 !== typeof f.meta.left_o ? f.meta.left_o : "auto", g.top = void 0 !== typeof f.meta.top_o ? f.meta.top_o : "auto", e = l.length - 1; 0 <= e; e--) g[l[e] + "transform"] = ""
        } else if (!q(f.secondary)) {
          var n = window.getComputedStyle(c[0], null);
          if (n)
            for (var m in f.secondary)
              if (f.secondary.hasOwnProperty(m) && (m = m.replace(U, "-$1").toLowerCase(),
                  g[m] = n.getPropertyValue(m), !k && /matrix/i.test(g[m])))
                for (e = g[m].replace(/^matrix\(/i, "").split(/, |\)$/g), g.left = parseFloat(e[4]) + parseFloat(c.css("left")) + "px" || "auto", g.top = parseFloat(e[5]) + parseFloat(c.css("top")) + "px" || "auto", e = l.length - 1; 0 <= e; e--) g[l[e] + "transform"] = ""
        }
        c.unbind("webkitTransitionEnd oTransitionEnd transitionend");
        c.css(f.original).css(g).data(r, null)
      } else H.apply(c, [a, b])
    });
    return this
  }
});