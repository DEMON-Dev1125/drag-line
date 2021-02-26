/*!
  * jQuery DOM Line plugin v0.1.3
  * Copyright (c) 2011 Gilmore Davidson
  * https://gilmoreorless.github.com/jquery-dom-line/
  *
  * @license Open source under the MIT licence: http://gilmoreorless.mit-license.org/2011/
  */
! function(t, e) {
  function r(t) {
    return t.x === e && t.y === e ? !1 : (t.x = parseFloat(t.x) || 0, t.y = parseFloat(t.y) || 0, t)
  }

  function a(e, r, a) {
    var n = [e.x, e.y, r.x, r.y, a.w, a.h].join(",");
    if (o[n]) return t.extend({}, o[n]);
    var i, s = Math.abs(r.x - e.x),
      l = Math.abs(r.y - e.y),
      h = s && l ? Math.sqrt(s * s + l * l) : s || l,
      d = Math.min(e.x, r.x),
      u = Math.min(e.y, r.y),
      x = d + s / 2,
      c = u + l / 2,
      p = x - h / 2,
      y = c,
      b = o[n] = {
        width: h
      };
    return a.w > 1 && (b.width -= a.w - 1), a.h > 1 && (y -= a.h / 2), a.bw && (p += a.bw / 2), a.bh && (y += a.bh / 2), t.support.matrixFilter || (p -= a.l, y -= a.t), p = Math.round(p), y = Math.round(y), b.width = Math.round(b.width), i = s ? l ? (180 + 180 * Math.atan2(e.y - r.y, e.x - r.x) / Math.PI + 360) % 360 : e.x < r.x ? 0 : 180 : e.y < r.y ? 90 : 270, b.transform = "rotate(" + i + "deg)", b.left = p, b.top = y, b.extra = {
      center: {
        x: x,
        y: c
      },
      rotation: {
        deg: i,
        rad: i % 360 * Math.PI / 180
      }
    }, t.extend({}, b)
  }
  var o = {};
  t.line = function(e, o, n) {
    if (e = r(e), o = r(o), !e || !o) return !1;
    var i, s, l, h = t.extend({}, t.line.defaults, n || {}),
      d = h.elem ? t(h.elem) : t("<div/>", {
        "class": h.className
      }),
      u = {
        position: "absolute",
        backgroundColor: h.lineColor,
        width: 1,
        height: h.lineWidth
      },
      x = d;
    return d.css(u), d.length && !d[0].parentNode && d.appendTo("body"), s = {
      w: d.outerWidth(),
      h: d.outerHeight(),
      l: parseFloat(d.css("marginLeft")) || 0,
      t: parseFloat(d.css("marginTop")) || 0
    }, t.support.matrixFilter && (s.bw = (parseFloat(d.css("borderLeftWidth")) || 0) + (parseFloat(d.css("borderRightWidth")) || 0), s.bh = (parseFloat(d.css("borderTopWidth")) || 0) + (parseFloat(d.css("borderBottomWidth")) || 0)), i = a(e, o, s), l = i.extra, delete i.extra, d.css(i), h.returnValues && (x = {
      from: e,
      to: o,
      center: l.center,
      rotation: l.rotation
    }), x
  }, t.line.defaults = {
    elem: "",
    className: "jquery-line",
    lineWidth: 1,
    lineColor: "#000",
    returnValues: !1
  }
}(jQuery);
/*
  * transform: A jQuery cssHooks adding cross-browser 2d transform capabilities to $.fn.css() and $.fn.animate()
  *
  * limitations:
  * - requires jQuery 1.4.3+
  * - Should you use the *translate* property, then your elements need to be absolutely positionned in a relatively positionned wrapper **or it will fail in IE678**.
  * - transformOrigin is not accessible
  *
  * latest version and complete README available on Github:
  * https://github.com/louisremi/jquery.transform.js
  *
  * Copyright 2011 @louis_remi
  * Licensed under the MIT license.
  *
  * This saved you an hour of work?
  * Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
  *
  */
if (!jQuery.cssHooks.transform) ! function(t, e, r, s, n) {
  function a(e) {
    e = e.split(")");
    var r, n, a, i = t.trim,
      o = -1,
      c = e.length - 1,
      p = O ? new Float32Array(6) : [],
      l = O ? new Float32Array(6) : [],
      f = O ? new Float32Array(6) : [1, 0, 0, 1, 0, 0];
    for (p[0] = p[3] = f[0] = f[3] = 1, p[1] = p[2] = p[4] = p[5] = 0; ++o < c;) {
      switch (r = e[o].split("("), n = i(r[0]), a = r[1], l[0] = l[3] = 1, l[1] = l[2] = l[4] = l[5] = 0, n) {
        case Y + "X":
          l[4] = parseInt(a, 10);
          break;
        case Y + "Y":
          l[5] = parseInt(a, 10);
          break;
        case Y:
          a = a.split(","), l[4] = parseInt(a[0], 10), l[5] = parseInt(a[1] || 0, 10);
          break;
        case j:
          a = u(a), l[0] = s.cos(a), l[1] = s.sin(a), l[2] = -s.sin(a), l[3] = s.cos(a);
          break;
        case H + "X":
          l[0] = +a;
          break;
        case H + "Y":
          l[3] = a;
          break;
        case H:
          a = a.split(","), l[0] = a[0], l[3] = a.length > 1 ? a[1] : a[0];
          break;
        case $ + "X":
          l[2] = s.tan(u(a));
          break;
        case $ + "Y":
          l[1] = s.tan(u(a));
          break;
        case z:
          a = a.split(","), l[0] = a[0], l[1] = a[1], l[2] = a[2], l[3] = a[3], l[4] = parseInt(a[4], 10), l[5] = parseInt(a[5], 10)
      }
      f[0] = p[0] * l[0] + p[2] * l[1], f[1] = p[1] * l[0] + p[3] * l[1], f[2] = p[0] * l[2] + p[2] * l[3], f[3] = p[1] * l[2] + p[3] * l[3], f[4] = p[0] * l[4] + p[2] * l[5] + p[4], f[5] = p[1] * l[4] + p[3] * l[5] + p[5], p = [f[0], f[1], f[2], f[3], f[4], f[5]]
    }
    return f
  }

  function i(t) {
    var e, r, n, a = t[0],
      i = t[1],
      o = t[2],
      c = t[3];
    return a * c - i * o ? (e = s.sqrt(a * a + i * i), a /= e, i /= e, n = a * o + i * c, o -= a * n, c -= i * n, r = s.sqrt(o * o + c * c), o /= r, c /= r, n /= r, i * o > a * c && (a = -a, i = -i, n = -n, e = -e)) : e = r = n = 0, [
      [Y, [+t[4], +t[5]]],
      [j, s.atan2(i, a)],
      [$ + "X", s.atan(n)],
      [H, [e, r]]
    ]
  }

  function o(e, r) {
    var s, n, o, u, m = {
        start: [],
        end: []
      },
      x = -1;
    if (("none" == e || p(e)) && (e = ""), ("none" == r || p(r)) && (r = ""), e && r && !r.indexOf("matrix") && g(e).join() == g(r.split(")")[0]).join() && (m.origin = e, e = "", r = r.slice(r.indexOf(")") + 1)), e || r) {
      if (e && r && l(e) != l(r)) m.start = i(a(e)), m.end = i(a(r));
      else
        for (e && (e = e.split(")")) && (s = e.length), r && (r = r.split(")")) && (s = r.length); ++x < s - 1;) e[x] && (n = e[x].split("(")), r[x] && (o = r[x].split("(")), u = t.trim((n || o)[0]), f(m.start, c(u, n ? n[1] : 0)), f(m.end, c(u, o ? o[1] : 0));
      return m
    }
  }

  function c(t, e) {
    var r, s = +!t.indexOf(H),
      n = t.replace(/e[XY]/, "e");
    switch (t) {
      case Y + "Y":
      case H + "Y":
        e = [s, e ? parseFloat(e) : s];
        break;
      case Y + "X":
      case Y:
      case H + "X":
        r = 1;
      case H:
        e = e ? (e = e.split(",")) && [parseFloat(e[0]), parseFloat(e.length > 1 ? e[1] : t == H ? r || e[0] : s + "")] : [s, s];
        break;
      case $ + "X":
      case $ + "Y":
      case j:
        e = e ? u(e) : 0;
        break;
      case z:
        return i(e ? g(e) : [1, 0, 0, 1, 0, 0])
    }
    return [
      [n, e]
    ]
  }

  function p(t) {
    return v.test(t)
  }

  function l(t) {
    return t.replace(/(?:\([^)]*\))|\s/g, "")
  }

  function f(t, e, r) {
    for (; r = e.shift();) t.push(r)
  }

  function u(t) {
    return ~t.indexOf("deg") ? parseInt(t, 10) * (2 * s.PI / 360) : ~t.indexOf("grad") ? parseInt(t, 10) * (s.PI / 200) : parseFloat(t)
  }

  function g(t) {
    return t = /([^,]*),([^,]*),([^,]*),([^,]*),([^,p]*)(?:px)?,([^)p]*)(?:px)?/.exec(t), [t[1], t[2], t[3], t[4], t[5], t[6]]
  }
  for (var m, x, d, k, h = r.createElement("div"), y = h.style, b = "Transform", I = ["O" + b, "ms" + b, "Webkit" + b, "Moz" + b], M = I.length, O = ("Float32Array" in e), X = /Matrix([^)]*)/, v = /^\s*matrix\(\s*1\s*,\s*0\s*,\s*0\s*,\s*1\s*(?:,\s*0(?:px)?\s*){2}\)\s*$/, w = "transform", F = "transformOrigin", Y = "translate", j = "rotate", H = "scale", $ = "skew", z = "matrix"; M--;) I[M] in y && (t.support[w] = m = I[M], t.support[F] = m + "Origin");
  m || (t.support.matrixFilter = x = "" === y.filter), t.cssNumber[w] = t.cssNumber[F] = !0, m && m != w ? (t.cssProps[w] = m, t.cssProps[F] = m + "Origin", m == "Moz" + b ? d = {
    get: function(e, r) {
      return r ? t.css(e, m).split("px").join("") : e.style[m]
    },
    set: function(t, e) {
      t.style[m] = /matrix\([^)p]*\)/.test(e) ? e.replace(/matrix((?:[^,]*,){4})([^,]*),([^)]*)/, z + "$1$2px,$3px") : e
    }
  } : /^1\.[0-5](?:\.|$)/.test(t.fn.jquery) && (d = {
    get: function(e, r) {
      return r ? t.css(e, m.replace(/^ms/, "Ms")) : e.style[m]
    }
  })) : x && (d = {
    get: function(e, r, s) {
      var a, i, o = r && e.currentStyle ? e.currentStyle : e.style;
      return o && X.test(o.filter) ? (a = RegExp.$1.split(","), a = [a[0].split("=")[1], a[2].split("=")[1], a[1].split("=")[1], a[3].split("=")[1]]) : a = [1, 0, 0, 1], t.cssHooks[F] ? (i = t._data(e, "transformTranslate", n), a[4] = i ? i[0] : 0, a[5] = i ? i[1] : 0) : (a[4] = o ? parseInt(o.left, 10) || 0 : 0, a[5] = o ? parseInt(o.top, 10) || 0 : 0), s ? a : z + "(" + a + ")"
    },
    set: function(e, r, s) {
      var n, i, o, c, p = e.style;
      s || (p.zoom = 1), r = a(r), i = ["Matrix(M11=" + r[0], "M12=" + r[2], "M21=" + r[1], "M22=" + r[3], "SizingMethod='auto expand'"].join(), o = (n = e.currentStyle) && n.filter || p.filter || "", p.filter = X.test(o) ? o.replace(X, i) : o + " progid:DXImageTransform.Microsoft." + i + ")", t.cssHooks[F] ? t.cssHooks[F].set(e, r) : ((c = t.transform.centerOrigin) && (p["margin" == c ? "marginLeft" : "left"] = -(e.offsetWidth / 2) + e.clientWidth / 2 + "px", p["margin" == c ? "marginTop" : "top"] = -(e.offsetHeight / 2) + e.clientHeight / 2 + "px"), p.left = r[4] + "px", p.top = r[5] + "px")
    }
  }), d && (t.cssHooks[w] = d), k = d && d.get || t.css, t.fx.step.transform = function(e) {
    var r, n, a, i, c = e.elem,
      p = e.start,
      l = e.end,
      f = e.pos,
      u = "",
      g = 1e5;
    for (p && "string" != typeof p || (p || (p = k(c, m)), x && (c.style.zoom = 1), l = l.split("+=").join(p), t.extend(e, o(p, l)), p = e.start, l = e.end), r = p.length; r--;) switch (n = p[r], a = l[r], i = 0, n[0]) {
      case Y:
        i = "px";
      case H:
        i || (i = ""), u = n[0] + "(" + s.round((n[1][0] + (a[1][0] - n[1][0]) * f) * g) / g + i + "," + s.round((n[1][1] + (a[1][1] - n[1][1]) * f) * g) / g + i + ")" + u;
        break;
      case $ + "X":
      case $ + "Y":
      case j:
        u = n[0] + "(" + s.round((n[1] + (a[1] - n[1]) * f) * g) / g + "rad)" + u
    }
    e.origin && (u = e.origin + u), d && d.set ? d.set(c, u, 1) : c.style[m] = u
  }, t.transform = {
    centerOrigin: "margin"
  }
}(jQuery, window, document, Math);