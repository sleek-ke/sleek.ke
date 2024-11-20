!(function (t) {
  var e = {};
  function n(i) {
    if (e[i]) return e[i].exports;
    var r = (e[i] = { i: i, l: !1, exports: {} });
    return t[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, i) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          n.d(
            i,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
          );
      return i;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = "/assets/js/"),
    n((n.s = 127));
})([
  function (t, e, n) {
    (function (e) {
      var n;
      /*!
       * matter-js 0.18.0 by @liabru
       * http://brm.io/matter-js/
       * License MIT
       *
       * The MIT License (MIT)
       *
       * Copyright (c) Liam Brummitt and contributors.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */ (n = function () {
        return (function (t) {
          var e = {};
          function n(i) {
            if (e[i]) return e[i].exports;
            var r = (e[i] = { i: i, l: !1, exports: {} });
            return t[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
          }
          return (
            (n.m = t),
            (n.c = e),
            (n.d = function (t, e, i) {
              n.o(t, e) ||
                Object.defineProperty(t, e, { enumerable: !0, get: i });
            }),
            (n.r = function (t) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(t, "__esModule", { value: !0 });
            }),
            (n.t = function (t, e) {
              if ((1 & e && (t = n(t)), 8 & e)) return t;
              if (4 & e && "object" == typeof t && t && t.__esModule) return t;
              var i = Object.create(null);
              if (
                (n.r(i),
                Object.defineProperty(i, "default", {
                  enumerable: !0,
                  value: t,
                }),
                2 & e && "string" != typeof t)
              )
                for (var r in t)
                  n.d(
                    i,
                    r,
                    function (e) {
                      return t[e];
                    }.bind(null, r)
                  );
              return i;
            }),
            (n.n = function (t) {
              var e =
                t && t.__esModule
                  ? function () {
                      return t.default;
                    }
                  : function () {
                      return t;
                    };
              return n.d(e, "a", e), e;
            }),
            (n.o = function (t, e) {
              return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (n.p = ""),
            n((n.s = 21))
          );
        })([
          function (t, n) {
            var i = {};
            (t.exports = i),
              (function () {
                (i._nextId = 0),
                  (i._seed = 0),
                  (i._nowStartTime = +new Date()),
                  (i._warnedOnce = {}),
                  (i._decomp = null),
                  (i.extend = function (t, e) {
                    var n, r;
                    "boolean" == typeof e
                      ? ((n = 2), (r = e))
                      : ((n = 1), (r = !0));
                    for (var o = n; o < arguments.length; o++) {
                      var s = arguments[o];
                      if (s)
                        for (var a in s)
                          r && s[a] && s[a].constructor === Object
                            ? t[a] && t[a].constructor !== Object
                              ? (t[a] = s[a])
                              : ((t[a] = t[a] || {}), i.extend(t[a], r, s[a]))
                            : (t[a] = s[a]);
                    }
                    return t;
                  }),
                  (i.clone = function (t, e) {
                    return i.extend({}, e, t);
                  }),
                  (i.keys = function (t) {
                    if (Object.keys) return Object.keys(t);
                    var e = [];
                    for (var n in t) e.push(n);
                    return e;
                  }),
                  (i.values = function (t) {
                    var e = [];
                    if (Object.keys) {
                      for (var n = Object.keys(t), i = 0; i < n.length; i++)
                        e.push(t[n[i]]);
                      return e;
                    }
                    for (var r in t) e.push(t[r]);
                    return e;
                  }),
                  (i.get = function (t, e, n, i) {
                    e = e.split(".").slice(n, i);
                    for (var r = 0; r < e.length; r += 1) t = t[e[r]];
                    return t;
                  }),
                  (i.set = function (t, e, n, r, o) {
                    var s = e.split(".").slice(r, o);
                    return (i.get(t, e, 0, -1)[s[s.length - 1]] = n), n;
                  }),
                  (i.shuffle = function (t) {
                    for (var e = t.length - 1; e > 0; e--) {
                      var n = Math.floor(i.random() * (e + 1)),
                        r = t[e];
                      (t[e] = t[n]), (t[n] = r);
                    }
                    return t;
                  }),
                  (i.choose = function (t) {
                    return t[Math.floor(i.random() * t.length)];
                  }),
                  (i.isElement = function (t) {
                    return "undefined" != typeof HTMLElement
                      ? t instanceof HTMLElement
                      : !!(t && t.nodeType && t.nodeName);
                  }),
                  (i.isArray = function (t) {
                    return (
                      "[object Array]" === Object.prototype.toString.call(t)
                    );
                  }),
                  (i.isFunction = function (t) {
                    return "function" == typeof t;
                  }),
                  (i.isPlainObject = function (t) {
                    return "object" == typeof t && t.constructor === Object;
                  }),
                  (i.isString = function (t) {
                    return "[object String]" === toString.call(t);
                  }),
                  (i.clamp = function (t, e, n) {
                    return t < e ? e : t > n ? n : t;
                  }),
                  (i.sign = function (t) {
                    return t < 0 ? -1 : 1;
                  }),
                  (i.now = function () {
                    if ("undefined" != typeof window && window.performance) {
                      if (window.performance.now)
                        return window.performance.now();
                      if (window.performance.webkitNow)
                        return window.performance.webkitNow();
                    }
                    return Date.now ? Date.now() : new Date() - i._nowStartTime;
                  }),
                  (i.random = function (e, n) {
                    return (
                      (n = void 0 !== n ? n : 1),
                      (e = void 0 !== e ? e : 0) + t() * (n - e)
                    );
                  });
                var t = function () {
                  return (
                    (i._seed = (9301 * i._seed + 49297) % 233280),
                    i._seed / 233280
                  );
                };
                (i.colorToNumber = function (t) {
                  return (
                    3 == (t = t.replace("#", "")).length &&
                      (t =
                        t.charAt(0) +
                        t.charAt(0) +
                        t.charAt(1) +
                        t.charAt(1) +
                        t.charAt(2) +
                        t.charAt(2)),
                    parseInt(t, 16)
                  );
                }),
                  (i.logLevel = 1),
                  (i.log = function () {
                    console &&
                      i.logLevel > 0 &&
                      i.logLevel <= 3 &&
                      console.log.apply(
                        console,
                        ["matter-js:"].concat(
                          Array.prototype.slice.call(arguments)
                        )
                      );
                  }),
                  (i.info = function () {
                    console &&
                      i.logLevel > 0 &&
                      i.logLevel <= 2 &&
                      console.info.apply(
                        console,
                        ["matter-js:"].concat(
                          Array.prototype.slice.call(arguments)
                        )
                      );
                  }),
                  (i.warn = function () {
                    console &&
                      i.logLevel > 0 &&
                      i.logLevel <= 3 &&
                      console.warn.apply(
                        console,
                        ["matter-js:"].concat(
                          Array.prototype.slice.call(arguments)
                        )
                      );
                  }),
                  (i.warnOnce = function () {
                    var t = Array.prototype.slice.call(arguments).join(" ");
                    i._warnedOnce[t] || (i.warn(t), (i._warnedOnce[t] = !0));
                  }),
                  (i.deprecated = function (t, e, n) {
                    t[e] = i.chain(function () {
                      i.warnOnce("🔅 deprecated 🔅", n);
                    }, t[e]);
                  }),
                  (i.nextId = function () {
                    return i._nextId++;
                  }),
                  (i.indexOf = function (t, e) {
                    if (t.indexOf) return t.indexOf(e);
                    for (var n = 0; n < t.length; n++) if (t[n] === e) return n;
                    return -1;
                  }),
                  (i.map = function (t, e) {
                    if (t.map) return t.map(e);
                    for (var n = [], i = 0; i < t.length; i += 1)
                      n.push(e(t[i]));
                    return n;
                  }),
                  (i.topologicalSort = function (t) {
                    var e = [],
                      n = [],
                      r = [];
                    for (var o in t)
                      n[o] || r[o] || i._topologicalSort(o, n, r, t, e);
                    return e;
                  }),
                  (i._topologicalSort = function (t, e, n, r, o) {
                    var s = r[t] || [];
                    n[t] = !0;
                    for (var a = 0; a < s.length; a += 1) {
                      var l = s[a];
                      n[l] || e[l] || i._topologicalSort(l, e, n, r, o);
                    }
                    (n[t] = !1), (e[t] = !0), o.push(t);
                  }),
                  (i.chain = function () {
                    for (var t = [], e = 0; e < arguments.length; e += 1) {
                      var n = arguments[e];
                      n._chained ? t.push.apply(t, n._chained) : t.push(n);
                    }
                    var i = function () {
                      for (
                        var e,
                          n = new Array(arguments.length),
                          i = 0,
                          r = arguments.length;
                        i < r;
                        i++
                      )
                        n[i] = arguments[i];
                      for (i = 0; i < t.length; i += 1) {
                        var o = t[i].apply(e, n);
                        void 0 !== o && (e = o);
                      }
                      return e;
                    };
                    return (i._chained = t), i;
                  }),
                  (i.chainPathBefore = function (t, e, n) {
                    return i.set(t, e, i.chain(n, i.get(t, e)));
                  }),
                  (i.chainPathAfter = function (t, e, n) {
                    return i.set(t, e, i.chain(i.get(t, e), n));
                  }),
                  (i.setDecomp = function (t) {
                    i._decomp = t;
                  }),
                  (i.getDecomp = function () {
                    var t = i._decomp;
                    try {
                      t || "undefined" == typeof window || (t = window.decomp),
                        t || void 0 === e || (t = e.decomp);
                    } catch (e) {
                      t = null;
                    }
                    return t;
                  });
              })();
          },
          function (t, e) {
            var n = {};
            (t.exports = n),
              (n.create = function (t) {
                var e = { min: { x: 0, y: 0 }, max: { x: 0, y: 0 } };
                return t && n.update(e, t), e;
              }),
              (n.update = function (t, e, n) {
                (t.min.x = 1 / 0),
                  (t.max.x = -1 / 0),
                  (t.min.y = 1 / 0),
                  (t.max.y = -1 / 0);
                for (var i = 0; i < e.length; i++) {
                  var r = e[i];
                  r.x > t.max.x && (t.max.x = r.x),
                    r.x < t.min.x && (t.min.x = r.x),
                    r.y > t.max.y && (t.max.y = r.y),
                    r.y < t.min.y && (t.min.y = r.y);
                }
                n &&
                  (n.x > 0 ? (t.max.x += n.x) : (t.min.x += n.x),
                  n.y > 0 ? (t.max.y += n.y) : (t.min.y += n.y));
              }),
              (n.contains = function (t, e) {
                return (
                  e.x >= t.min.x &&
                  e.x <= t.max.x &&
                  e.y >= t.min.y &&
                  e.y <= t.max.y
                );
              }),
              (n.overlaps = function (t, e) {
                return (
                  t.min.x <= e.max.x &&
                  t.max.x >= e.min.x &&
                  t.max.y >= e.min.y &&
                  t.min.y <= e.max.y
                );
              }),
              (n.translate = function (t, e) {
                (t.min.x += e.x),
                  (t.max.x += e.x),
                  (t.min.y += e.y),
                  (t.max.y += e.y);
              }),
              (n.shift = function (t, e) {
                var n = t.max.x - t.min.x,
                  i = t.max.y - t.min.y;
                (t.min.x = e.x),
                  (t.max.x = e.x + n),
                  (t.min.y = e.y),
                  (t.max.y = e.y + i);
              });
          },
          function (t, e) {
            var n = {};
            (t.exports = n),
              (n.create = function (t, e) {
                return { x: t || 0, y: e || 0 };
              }),
              (n.clone = function (t) {
                return { x: t.x, y: t.y };
              }),
              (n.magnitude = function (t) {
                return Math.sqrt(t.x * t.x + t.y * t.y);
              }),
              (n.magnitudeSquared = function (t) {
                return t.x * t.x + t.y * t.y;
              }),
              (n.rotate = function (t, e, n) {
                var i = Math.cos(e),
                  r = Math.sin(e);
                n || (n = {});
                var o = t.x * i - t.y * r;
                return (n.y = t.x * r + t.y * i), (n.x = o), n;
              }),
              (n.rotateAbout = function (t, e, n, i) {
                var r = Math.cos(e),
                  o = Math.sin(e);
                i || (i = {});
                var s = n.x + ((t.x - n.x) * r - (t.y - n.y) * o);
                return (
                  (i.y = n.y + ((t.x - n.x) * o + (t.y - n.y) * r)),
                  (i.x = s),
                  i
                );
              }),
              (n.normalise = function (t) {
                var e = n.magnitude(t);
                return 0 === e ? { x: 0, y: 0 } : { x: t.x / e, y: t.y / e };
              }),
              (n.dot = function (t, e) {
                return t.x * e.x + t.y * e.y;
              }),
              (n.cross = function (t, e) {
                return t.x * e.y - t.y * e.x;
              }),
              (n.cross3 = function (t, e, n) {
                return (e.x - t.x) * (n.y - t.y) - (e.y - t.y) * (n.x - t.x);
              }),
              (n.add = function (t, e, n) {
                return n || (n = {}), (n.x = t.x + e.x), (n.y = t.y + e.y), n;
              }),
              (n.sub = function (t, e, n) {
                return n || (n = {}), (n.x = t.x - e.x), (n.y = t.y - e.y), n;
              }),
              (n.mult = function (t, e) {
                return { x: t.x * e, y: t.y * e };
              }),
              (n.div = function (t, e) {
                return { x: t.x / e, y: t.y / e };
              }),
              (n.perp = function (t, e) {
                return { x: (e = !0 === e ? -1 : 1) * -t.y, y: e * t.x };
              }),
              (n.neg = function (t) {
                return { x: -t.x, y: -t.y };
              }),
              (n.angle = function (t, e) {
                return Math.atan2(e.y - t.y, e.x - t.x);
              }),
              (n._temp = [
                n.create(),
                n.create(),
                n.create(),
                n.create(),
                n.create(),
                n.create(),
              ]);
          },
          function (t, e, n) {
            var i = {};
            t.exports = i;
            var r = n(2),
              o = n(0);
            (i.create = function (t, e) {
              for (var n = [], i = 0; i < t.length; i++) {
                var r = t[i],
                  o = { x: r.x, y: r.y, index: i, body: e, isInternal: !1 };
                n.push(o);
              }
              return n;
            }),
              (i.fromPath = function (t, e) {
                var n = [];
                return (
                  t.replace(
                    /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/gi,
                    function (t, e, i) {
                      n.push({ x: parseFloat(e), y: parseFloat(i) });
                    }
                  ),
                  i.create(n, e)
                );
              }),
              (i.centre = function (t) {
                for (
                  var e, n, o, s = i.area(t, !0), a = { x: 0, y: 0 }, l = 0;
                  l < t.length;
                  l++
                )
                  (o = (l + 1) % t.length),
                    (e = r.cross(t[l], t[o])),
                    (n = r.mult(r.add(t[l], t[o]), e)),
                    (a = r.add(a, n));
                return r.div(a, 6 * s);
              }),
              (i.mean = function (t) {
                for (var e = { x: 0, y: 0 }, n = 0; n < t.length; n++)
                  (e.x += t[n].x), (e.y += t[n].y);
                return r.div(e, t.length);
              }),
              (i.area = function (t, e) {
                for (var n = 0, i = t.length - 1, r = 0; r < t.length; r++)
                  (n += (t[i].x - t[r].x) * (t[i].y + t[r].y)), (i = r);
                return e ? n / 2 : Math.abs(n) / 2;
              }),
              (i.inertia = function (t, e) {
                for (var n, i, o = 0, s = 0, a = t, l = 0; l < a.length; l++)
                  (i = (l + 1) % a.length),
                    (o +=
                      (n = Math.abs(r.cross(a[i], a[l]))) *
                      (r.dot(a[i], a[i]) +
                        r.dot(a[i], a[l]) +
                        r.dot(a[l], a[l]))),
                    (s += n);
                return (e / 6) * (o / s);
              }),
              (i.translate = function (t, e, n) {
                n = void 0 !== n ? n : 1;
                var i,
                  r = t.length,
                  o = e.x * n,
                  s = e.y * n;
                for (i = 0; i < r; i++) (t[i].x += o), (t[i].y += s);
                return t;
              }),
              (i.rotate = function (t, e, n) {
                if (0 !== e) {
                  var i,
                    r,
                    o,
                    s,
                    a = Math.cos(e),
                    l = Math.sin(e),
                    u = n.x,
                    c = n.y,
                    d = t.length;
                  for (s = 0; s < d; s++)
                    (r = (i = t[s]).x - u),
                      (o = i.y - c),
                      (i.x = u + (r * a - o * l)),
                      (i.y = c + (r * l + o * a));
                  return t;
                }
              }),
              (i.contains = function (t, e) {
                for (
                  var n, i = e.x, r = e.y, o = t.length, s = t[o - 1], a = 0;
                  a < o;
                  a++
                ) {
                  if (
                    ((n = t[a]),
                    (i - s.x) * (n.y - s.y) + (r - s.y) * (s.x - n.x) > 0)
                  )
                    return !1;
                  s = n;
                }
                return !0;
              }),
              (i.scale = function (t, e, n, o) {
                if (1 === e && 1 === n) return t;
                var s, a;
                o = o || i.centre(t);
                for (var l = 0; l < t.length; l++)
                  (s = t[l]),
                    (a = r.sub(s, o)),
                    (t[l].x = o.x + a.x * e),
                    (t[l].y = o.y + a.y * n);
                return t;
              }),
              (i.chamfer = function (t, e, n, i, s) {
                (e = "number" == typeof e ? [e] : e || [8]),
                  (n = void 0 !== n ? n : -1),
                  (i = i || 2),
                  (s = s || 14);
                for (var a = [], l = 0; l < t.length; l++) {
                  var u = t[l - 1 >= 0 ? l - 1 : t.length - 1],
                    c = t[l],
                    d = t[(l + 1) % t.length],
                    p = e[l < e.length ? l : e.length - 1];
                  if (0 !== p) {
                    var f = r.normalise({ x: c.y - u.y, y: u.x - c.x }),
                      h = r.normalise({ x: d.y - c.y, y: c.x - d.x }),
                      m = Math.sqrt(2 * Math.pow(p, 2)),
                      v = r.mult(o.clone(f), p),
                      g = r.normalise(r.mult(r.add(f, h), 0.5)),
                      y = r.sub(c, r.mult(g, m)),
                      b = n;
                    -1 === n && (b = 1.75 * Math.pow(p, 0.32)),
                      (b = o.clamp(b, i, s)) % 2 == 1 && (b += 1);
                    for (var x = Math.acos(r.dot(f, h)) / b, w = 0; w < b; w++)
                      a.push(r.add(r.rotate(v, x * w), y));
                  } else a.push(c);
                }
                return a;
              }),
              (i.clockwiseSort = function (t) {
                var e = i.mean(t);
                return (
                  t.sort(function (t, n) {
                    return r.angle(e, t) - r.angle(e, n);
                  }),
                  t
                );
              }),
              (i.isConvex = function (t) {
                var e,
                  n,
                  i,
                  r,
                  o = 0,
                  s = t.length;
                if (s < 3) return null;
                for (e = 0; e < s; e++)
                  if (
                    ((i = (e + 2) % s),
                    (r = (t[(n = (e + 1) % s)].x - t[e].x) * (t[i].y - t[n].y)),
                    (r -= (t[n].y - t[e].y) * (t[i].x - t[n].x)) < 0
                      ? (o |= 1)
                      : r > 0 && (o |= 2),
                    3 === o)
                  )
                    return !1;
                return 0 !== o || null;
              }),
              (i.hull = function (t) {
                var e,
                  n,
                  i = [],
                  o = [];
                for (
                  (t = t.slice(0)).sort(function (t, e) {
                    var n = t.x - e.x;
                    return 0 !== n ? n : t.y - e.y;
                  }),
                    n = 0;
                  n < t.length;
                  n += 1
                ) {
                  for (
                    e = t[n];
                    o.length >= 2 &&
                    r.cross3(o[o.length - 2], o[o.length - 1], e) <= 0;

                  )
                    o.pop();
                  o.push(e);
                }
                for (n = t.length - 1; n >= 0; n -= 1) {
                  for (
                    e = t[n];
                    i.length >= 2 &&
                    r.cross3(i[i.length - 2], i[i.length - 1], e) <= 0;

                  )
                    i.pop();
                  i.push(e);
                }
                return i.pop(), o.pop(), i.concat(o);
              });
          },
          function (t, e, n) {
            var i = {};
            t.exports = i;
            var r = n(0);
            (i.on = function (t, e, n) {
              for (var i, r = e.split(" "), o = 0; o < r.length; o++)
                (i = r[o]),
                  (t.events = t.events || {}),
                  (t.events[i] = t.events[i] || []),
                  t.events[i].push(n);
              return n;
            }),
              (i.off = function (t, e, n) {
                if (e) {
                  "function" == typeof e &&
                    ((n = e), (e = r.keys(t.events).join(" ")));
                  for (var i = e.split(" "), o = 0; o < i.length; o++) {
                    var s = t.events[i[o]],
                      a = [];
                    if (n && s)
                      for (var l = 0; l < s.length; l++)
                        s[l] !== n && a.push(s[l]);
                    t.events[i[o]] = a;
                  }
                } else t.events = {};
              }),
              (i.trigger = function (t, e, n) {
                var i,
                  o,
                  s,
                  a,
                  l = t.events;
                if (l && r.keys(l).length > 0) {
                  n || (n = {}), (i = e.split(" "));
                  for (var u = 0; u < i.length; u++)
                    if ((s = l[(o = i[u])])) {
                      ((a = r.clone(n, !1)).name = o), (a.source = t);
                      for (var c = 0; c < s.length; c++) s[c].apply(t, [a]);
                    }
                }
              });
          },
          function (t, e, n) {
            var i = {};
            t.exports = i;
            var r = n(4),
              o = n(0),
              s = n(1),
              a = n(6);
            (i.create = function (t) {
              return o.extend(
                {
                  id: o.nextId(),
                  type: "composite",
                  parent: null,
                  isModified: !1,
                  bodies: [],
                  constraints: [],
                  composites: [],
                  label: "Composite",
                  plugin: {},
                  cache: {
                    allBodies: null,
                    allConstraints: null,
                    allComposites: null,
                  },
                },
                t
              );
            }),
              (i.setModified = function (t, e, n, r) {
                if (
                  ((t.isModified = e),
                  e &&
                    t.cache &&
                    ((t.cache.allBodies = null),
                    (t.cache.allConstraints = null),
                    (t.cache.allComposites = null)),
                  n && t.parent && i.setModified(t.parent, e, n, r),
                  r)
                )
                  for (var o = 0; o < t.composites.length; o++) {
                    var s = t.composites[o];
                    i.setModified(s, e, n, r);
                  }
              }),
              (i.add = function (t, e) {
                var n = [].concat(e);
                r.trigger(t, "beforeAdd", { object: e });
                for (var s = 0; s < n.length; s++) {
                  var a = n[s];
                  switch (a.type) {
                    case "body":
                      if (a.parent !== a) {
                        o.warn(
                          "Composite.add: skipped adding a compound body part (you must add its parent instead)"
                        );
                        break;
                      }
                      i.addBody(t, a);
                      break;
                    case "constraint":
                      i.addConstraint(t, a);
                      break;
                    case "composite":
                      i.addComposite(t, a);
                      break;
                    case "mouseConstraint":
                      i.addConstraint(t, a.constraint);
                  }
                }
                return r.trigger(t, "afterAdd", { object: e }), t;
              }),
              (i.remove = function (t, e, n) {
                var o = [].concat(e);
                r.trigger(t, "beforeRemove", { object: e });
                for (var s = 0; s < o.length; s++) {
                  var a = o[s];
                  switch (a.type) {
                    case "body":
                      i.removeBody(t, a, n);
                      break;
                    case "constraint":
                      i.removeConstraint(t, a, n);
                      break;
                    case "composite":
                      i.removeComposite(t, a, n);
                      break;
                    case "mouseConstraint":
                      i.removeConstraint(t, a.constraint);
                  }
                }
                return r.trigger(t, "afterRemove", { object: e }), t;
              }),
              (i.addComposite = function (t, e) {
                return (
                  t.composites.push(e),
                  (e.parent = t),
                  i.setModified(t, !0, !0, !1),
                  t
                );
              }),
              (i.removeComposite = function (t, e, n) {
                var r = o.indexOf(t.composites, e);
                if ((-1 !== r && i.removeCompositeAt(t, r), n))
                  for (var s = 0; s < t.composites.length; s++)
                    i.removeComposite(t.composites[s], e, !0);
                return t;
              }),
              (i.removeCompositeAt = function (t, e) {
                return (
                  t.composites.splice(e, 1), i.setModified(t, !0, !0, !1), t
                );
              }),
              (i.addBody = function (t, e) {
                return t.bodies.push(e), i.setModified(t, !0, !0, !1), t;
              }),
              (i.removeBody = function (t, e, n) {
                var r = o.indexOf(t.bodies, e);
                if ((-1 !== r && i.removeBodyAt(t, r), n))
                  for (var s = 0; s < t.composites.length; s++)
                    i.removeBody(t.composites[s], e, !0);
                return t;
              }),
              (i.removeBodyAt = function (t, e) {
                return t.bodies.splice(e, 1), i.setModified(t, !0, !0, !1), t;
              }),
              (i.addConstraint = function (t, e) {
                return t.constraints.push(e), i.setModified(t, !0, !0, !1), t;
              }),
              (i.removeConstraint = function (t, e, n) {
                var r = o.indexOf(t.constraints, e);
                if ((-1 !== r && i.removeConstraintAt(t, r), n))
                  for (var s = 0; s < t.composites.length; s++)
                    i.removeConstraint(t.composites[s], e, !0);
                return t;
              }),
              (i.removeConstraintAt = function (t, e) {
                return (
                  t.constraints.splice(e, 1), i.setModified(t, !0, !0, !1), t
                );
              }),
              (i.clear = function (t, e, n) {
                if (n)
                  for (var r = 0; r < t.composites.length; r++)
                    i.clear(t.composites[r], e, !0);
                return (
                  e
                    ? (t.bodies = t.bodies.filter(function (t) {
                        return t.isStatic;
                      }))
                    : (t.bodies.length = 0),
                  (t.constraints.length = 0),
                  (t.composites.length = 0),
                  i.setModified(t, !0, !0, !1),
                  t
                );
              }),
              (i.allBodies = function (t) {
                if (t.cache && t.cache.allBodies) return t.cache.allBodies;
                for (
                  var e = [].concat(t.bodies), n = 0;
                  n < t.composites.length;
                  n++
                )
                  e = e.concat(i.allBodies(t.composites[n]));
                return t.cache && (t.cache.allBodies = e), e;
              }),
              (i.allConstraints = function (t) {
                if (t.cache && t.cache.allConstraints)
                  return t.cache.allConstraints;
                for (
                  var e = [].concat(t.constraints), n = 0;
                  n < t.composites.length;
                  n++
                )
                  e = e.concat(i.allConstraints(t.composites[n]));
                return t.cache && (t.cache.allConstraints = e), e;
              }),
              (i.allComposites = function (t) {
                if (t.cache && t.cache.allComposites)
                  return t.cache.allComposites;
                for (
                  var e = [].concat(t.composites), n = 0;
                  n < t.composites.length;
                  n++
                )
                  e = e.concat(i.allComposites(t.composites[n]));
                return t.cache && (t.cache.allComposites = e), e;
              }),
              (i.get = function (t, e, n) {
                var r, o;
                switch (n) {
                  case "body":
                    r = i.allBodies(t);
                    break;
                  case "constraint":
                    r = i.allConstraints(t);
                    break;
                  case "composite":
                    r = i.allComposites(t).concat(t);
                }
                return r
                  ? 0 ===
                    (o = r.filter(function (t) {
                      return t.id.toString() === e.toString();
                    })).length
                    ? null
                    : o[0]
                  : null;
              }),
              (i.move = function (t, e, n) {
                return i.remove(t, e), i.add(n, e), t;
              }),
              (i.rebase = function (t) {
                for (
                  var e = i
                      .allBodies(t)
                      .concat(i.allConstraints(t))
                      .concat(i.allComposites(t)),
                    n = 0;
                  n < e.length;
                  n++
                )
                  e[n].id = o.nextId();
                return t;
              }),
              (i.translate = function (t, e, n) {
                for (
                  var r = n ? i.allBodies(t) : t.bodies, o = 0;
                  o < r.length;
                  o++
                )
                  a.translate(r[o], e);
                return t;
              }),
              (i.rotate = function (t, e, n, r) {
                for (
                  var o = Math.cos(e),
                    s = Math.sin(e),
                    l = r ? i.allBodies(t) : t.bodies,
                    u = 0;
                  u < l.length;
                  u++
                ) {
                  var c = l[u],
                    d = c.position.x - n.x,
                    p = c.position.y - n.y;
                  a.setPosition(c, {
                    x: n.x + (d * o - p * s),
                    y: n.y + (d * s + p * o),
                  }),
                    a.rotate(c, e);
                }
                return t;
              }),
              (i.scale = function (t, e, n, r, o) {
                for (
                  var s = o ? i.allBodies(t) : t.bodies, l = 0;
                  l < s.length;
                  l++
                ) {
                  var u = s[l],
                    c = u.position.x - r.x,
                    d = u.position.y - r.y;
                  a.setPosition(u, { x: r.x + c * e, y: r.y + d * n }),
                    a.scale(u, e, n);
                }
                return t;
              }),
              (i.bounds = function (t) {
                for (
                  var e = i.allBodies(t), n = [], r = 0;
                  r < e.length;
                  r += 1
                ) {
                  var o = e[r];
                  n.push(o.bounds.min, o.bounds.max);
                }
                return s.create(n);
              });
          },
          function (t, e, n) {
            var i = {};
            t.exports = i;
            var r = n(3),
              o = n(2),
              s = n(7),
              a = (n(16), n(0)),
              l = n(1),
              u = n(11);
            !(function () {
              (i._inertiaScale = 4),
                (i._nextCollidingGroupId = 1),
                (i._nextNonCollidingGroupId = -1),
                (i._nextCategory = 1),
                (i.create = function (e) {
                  var n = {
                      id: a.nextId(),
                      type: "body",
                      label: "Body",
                      parts: [],
                      plugin: {},
                      angle: 0,
                      vertices: r.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),
                      position: { x: 0, y: 0 },
                      force: { x: 0, y: 0 },
                      torque: 0,
                      positionImpulse: { x: 0, y: 0 },
                      constraintImpulse: { x: 0, y: 0, angle: 0 },
                      totalContacts: 0,
                      speed: 0,
                      angularSpeed: 0,
                      velocity: { x: 0, y: 0 },
                      angularVelocity: 0,
                      isSensor: !1,
                      isStatic: !1,
                      isSleeping: !1,
                      motion: 0,
                      sleepThreshold: 60,
                      density: 0.001,
                      restitution: 0,
                      friction: 0.1,
                      frictionStatic: 0.5,
                      frictionAir: 0.01,
                      collisionFilter: {
                        category: 1,
                        mask: 4294967295,
                        group: 0,
                      },
                      slop: 0.05,
                      timeScale: 1,
                      render: {
                        visible: !0,
                        opacity: 1,
                        strokeStyle: null,
                        fillStyle: null,
                        lineWidth: null,
                        sprite: {
                          xScale: 1,
                          yScale: 1,
                          xOffset: 0,
                          yOffset: 0,
                        },
                      },
                      events: null,
                      bounds: null,
                      chamfer: null,
                      circleRadius: 0,
                      positionPrev: null,
                      anglePrev: 0,
                      parent: null,
                      axes: null,
                      area: 0,
                      mass: 0,
                      inertia: 0,
                      _original: null,
                    },
                    i = a.extend(n, e);
                  return t(i, e), i;
                }),
                (i.nextGroup = function (t) {
                  return t
                    ? i._nextNonCollidingGroupId--
                    : i._nextCollidingGroupId++;
                }),
                (i.nextCategory = function () {
                  return (
                    (i._nextCategory = i._nextCategory << 1), i._nextCategory
                  );
                });
              var t = function (t, e) {
                (e = e || {}),
                  i.set(t, {
                    bounds: t.bounds || l.create(t.vertices),
                    positionPrev: t.positionPrev || o.clone(t.position),
                    anglePrev: t.anglePrev || t.angle,
                    vertices: t.vertices,
                    parts: t.parts || [t],
                    isStatic: t.isStatic,
                    isSleeping: t.isSleeping,
                    parent: t.parent || t,
                  }),
                  r.rotate(t.vertices, t.angle, t.position),
                  u.rotate(t.axes, t.angle),
                  l.update(t.bounds, t.vertices, t.velocity),
                  i.set(t, {
                    axes: e.axes || t.axes,
                    area: e.area || t.area,
                    mass: e.mass || t.mass,
                    inertia: e.inertia || t.inertia,
                  });
                var n = t.isStatic
                    ? "#14151f"
                    : a.choose([
                        "#f19648",
                        "#f5d259",
                        "#f55a3c",
                        "#063e7b",
                        "#ececd1",
                      ]),
                  s = t.isStatic ? "#555" : "#ccc",
                  c = t.isStatic && null === t.render.fillStyle ? 1 : 0;
                (t.render.fillStyle = t.render.fillStyle || n),
                  (t.render.strokeStyle = t.render.strokeStyle || s),
                  (t.render.lineWidth = t.render.lineWidth || c),
                  (t.render.sprite.xOffset +=
                    -(t.bounds.min.x - t.position.x) /
                    (t.bounds.max.x - t.bounds.min.x)),
                  (t.render.sprite.yOffset +=
                    -(t.bounds.min.y - t.position.y) /
                    (t.bounds.max.y - t.bounds.min.y));
              };
              (i.set = function (t, e, n) {
                var r;
                for (r in ("string" == typeof e && ((r = e), ((e = {})[r] = n)),
                e))
                  if (Object.prototype.hasOwnProperty.call(e, r))
                    switch (((n = e[r]), r)) {
                      case "isStatic":
                        i.setStatic(t, n);
                        break;
                      case "isSleeping":
                        s.set(t, n);
                        break;
                      case "mass":
                        i.setMass(t, n);
                        break;
                      case "density":
                        i.setDensity(t, n);
                        break;
                      case "inertia":
                        i.setInertia(t, n);
                        break;
                      case "vertices":
                        i.setVertices(t, n);
                        break;
                      case "position":
                        i.setPosition(t, n);
                        break;
                      case "angle":
                        i.setAngle(t, n);
                        break;
                      case "velocity":
                        i.setVelocity(t, n);
                        break;
                      case "angularVelocity":
                        i.setAngularVelocity(t, n);
                        break;
                      case "parts":
                        i.setParts(t, n);
                        break;
                      case "centre":
                        i.setCentre(t, n);
                        break;
                      default:
                        t[r] = n;
                    }
              }),
                (i.setStatic = function (t, e) {
                  for (var n = 0; n < t.parts.length; n++) {
                    var i = t.parts[n];
                    (i.isStatic = e),
                      e
                        ? ((i._original = {
                            restitution: i.restitution,
                            friction: i.friction,
                            mass: i.mass,
                            inertia: i.inertia,
                            density: i.density,
                            inverseMass: i.inverseMass,
                            inverseInertia: i.inverseInertia,
                          }),
                          (i.restitution = 0),
                          (i.friction = 1),
                          (i.mass = i.inertia = i.density = 1 / 0),
                          (i.inverseMass = i.inverseInertia = 0),
                          (i.positionPrev.x = i.position.x),
                          (i.positionPrev.y = i.position.y),
                          (i.anglePrev = i.angle),
                          (i.angularVelocity = 0),
                          (i.speed = 0),
                          (i.angularSpeed = 0),
                          (i.motion = 0))
                        : i._original &&
                          ((i.restitution = i._original.restitution),
                          (i.friction = i._original.friction),
                          (i.mass = i._original.mass),
                          (i.inertia = i._original.inertia),
                          (i.density = i._original.density),
                          (i.inverseMass = i._original.inverseMass),
                          (i.inverseInertia = i._original.inverseInertia),
                          (i._original = null));
                  }
                }),
                (i.setMass = function (t, e) {
                  var n = t.inertia / (t.mass / 6);
                  (t.inertia = n * (e / 6)),
                    (t.inverseInertia = 1 / t.inertia),
                    (t.mass = e),
                    (t.inverseMass = 1 / t.mass),
                    (t.density = t.mass / t.area);
                }),
                (i.setDensity = function (t, e) {
                  i.setMass(t, e * t.area), (t.density = e);
                }),
                (i.setInertia = function (t, e) {
                  (t.inertia = e), (t.inverseInertia = 1 / t.inertia);
                }),
                (i.setVertices = function (t, e) {
                  e[0].body === t
                    ? (t.vertices = e)
                    : (t.vertices = r.create(e, t)),
                    (t.axes = u.fromVertices(t.vertices)),
                    (t.area = r.area(t.vertices)),
                    i.setMass(t, t.density * t.area);
                  var n = r.centre(t.vertices);
                  r.translate(t.vertices, n, -1),
                    i.setInertia(
                      t,
                      i._inertiaScale * r.inertia(t.vertices, t.mass)
                    ),
                    r.translate(t.vertices, t.position),
                    l.update(t.bounds, t.vertices, t.velocity);
                }),
                (i.setParts = function (t, e, n) {
                  var o;
                  for (
                    e = e.slice(0),
                      t.parts.length = 0,
                      t.parts.push(t),
                      t.parent = t,
                      o = 0;
                    o < e.length;
                    o++
                  ) {
                    var s = e[o];
                    s !== t && ((s.parent = t), t.parts.push(s));
                  }
                  if (1 !== t.parts.length) {
                    if ((n = void 0 === n || n)) {
                      var a = [];
                      for (o = 0; o < e.length; o++)
                        a = a.concat(e[o].vertices);
                      r.clockwiseSort(a);
                      var l = r.hull(a),
                        u = r.centre(l);
                      i.setVertices(t, l), r.translate(t.vertices, u);
                    }
                    var c = i._totalProperties(t);
                    (t.area = c.area),
                      (t.parent = t),
                      (t.position.x = c.centre.x),
                      (t.position.y = c.centre.y),
                      (t.positionPrev.x = c.centre.x),
                      (t.positionPrev.y = c.centre.y),
                      i.setMass(t, c.mass),
                      i.setInertia(t, c.inertia),
                      i.setPosition(t, c.centre);
                  }
                }),
                (i.setCentre = function (t, e, n) {
                  n
                    ? ((t.positionPrev.x += e.x),
                      (t.positionPrev.y += e.y),
                      (t.position.x += e.x),
                      (t.position.y += e.y))
                    : ((t.positionPrev.x =
                        e.x - (t.position.x - t.positionPrev.x)),
                      (t.positionPrev.y =
                        e.y - (t.position.y - t.positionPrev.y)),
                      (t.position.x = e.x),
                      (t.position.y = e.y));
                }),
                (i.setPosition = function (t, e) {
                  var n = o.sub(e, t.position);
                  (t.positionPrev.x += n.x), (t.positionPrev.y += n.y);
                  for (var i = 0; i < t.parts.length; i++) {
                    var s = t.parts[i];
                    (s.position.x += n.x),
                      (s.position.y += n.y),
                      r.translate(s.vertices, n),
                      l.update(s.bounds, s.vertices, t.velocity);
                  }
                }),
                (i.setAngle = function (t, e) {
                  var n = e - t.angle;
                  t.anglePrev += n;
                  for (var i = 0; i < t.parts.length; i++) {
                    var s = t.parts[i];
                    (s.angle += n),
                      r.rotate(s.vertices, n, t.position),
                      u.rotate(s.axes, n),
                      l.update(s.bounds, s.vertices, t.velocity),
                      i > 0 &&
                        o.rotateAbout(s.position, n, t.position, s.position);
                  }
                }),
                (i.setVelocity = function (t, e) {
                  (t.positionPrev.x = t.position.x - e.x),
                    (t.positionPrev.y = t.position.y - e.y),
                    (t.velocity.x = e.x),
                    (t.velocity.y = e.y),
                    (t.speed = o.magnitude(t.velocity));
                }),
                (i.setAngularVelocity = function (t, e) {
                  (t.anglePrev = t.angle - e),
                    (t.angularVelocity = e),
                    (t.angularSpeed = Math.abs(t.angularVelocity));
                }),
                (i.translate = function (t, e) {
                  i.setPosition(t, o.add(t.position, e));
                }),
                (i.rotate = function (t, e, n) {
                  if (n) {
                    var r = Math.cos(e),
                      o = Math.sin(e),
                      s = t.position.x - n.x,
                      a = t.position.y - n.y;
                    i.setPosition(t, {
                      x: n.x + (s * r - a * o),
                      y: n.y + (s * o + a * r),
                    }),
                      i.setAngle(t, t.angle + e);
                  } else i.setAngle(t, t.angle + e);
                }),
                (i.scale = function (t, e, n, o) {
                  var s = 0,
                    a = 0;
                  o = o || t.position;
                  for (var c = 0; c < t.parts.length; c++) {
                    var d = t.parts[c];
                    r.scale(d.vertices, e, n, o),
                      (d.axes = u.fromVertices(d.vertices)),
                      (d.area = r.area(d.vertices)),
                      i.setMass(d, t.density * d.area),
                      r.translate(d.vertices, {
                        x: -d.position.x,
                        y: -d.position.y,
                      }),
                      i.setInertia(
                        d,
                        i._inertiaScale * r.inertia(d.vertices, d.mass)
                      ),
                      r.translate(d.vertices, {
                        x: d.position.x,
                        y: d.position.y,
                      }),
                      c > 0 && ((s += d.area), (a += d.inertia)),
                      (d.position.x = o.x + (d.position.x - o.x) * e),
                      (d.position.y = o.y + (d.position.y - o.y) * n),
                      l.update(d.bounds, d.vertices, t.velocity);
                  }
                  t.parts.length > 1 &&
                    ((t.area = s),
                    t.isStatic ||
                      (i.setMass(t, t.density * s), i.setInertia(t, a))),
                    t.circleRadius &&
                      (e === n
                        ? (t.circleRadius *= e)
                        : (t.circleRadius = null));
                }),
                (i.update = function (t, e, n, i) {
                  var s = Math.pow(e * n * t.timeScale, 2),
                    a = 1 - t.frictionAir * n * t.timeScale,
                    c = t.position.x - t.positionPrev.x,
                    d = t.position.y - t.positionPrev.y;
                  (t.velocity.x = c * a * i + (t.force.x / t.mass) * s),
                    (t.velocity.y = d * a * i + (t.force.y / t.mass) * s),
                    (t.positionPrev.x = t.position.x),
                    (t.positionPrev.y = t.position.y),
                    (t.position.x += t.velocity.x),
                    (t.position.y += t.velocity.y),
                    (t.angularVelocity =
                      (t.angle - t.anglePrev) * a * i +
                      (t.torque / t.inertia) * s),
                    (t.anglePrev = t.angle),
                    (t.angle += t.angularVelocity),
                    (t.speed = o.magnitude(t.velocity)),
                    (t.angularSpeed = Math.abs(t.angularVelocity));
                  for (var p = 0; p < t.parts.length; p++) {
                    var f = t.parts[p];
                    r.translate(f.vertices, t.velocity),
                      p > 0 &&
                        ((f.position.x += t.velocity.x),
                        (f.position.y += t.velocity.y)),
                      0 !== t.angularVelocity &&
                        (r.rotate(f.vertices, t.angularVelocity, t.position),
                        u.rotate(f.axes, t.angularVelocity),
                        p > 0 &&
                          o.rotateAbout(
                            f.position,
                            t.angularVelocity,
                            t.position,
                            f.position
                          )),
                      l.update(f.bounds, f.vertices, t.velocity);
                  }
                }),
                (i.applyForce = function (t, e, n) {
                  (t.force.x += n.x), (t.force.y += n.y);
                  var i = e.x - t.position.x,
                    r = e.y - t.position.y;
                  t.torque += i * n.y - r * n.x;
                }),
                (i._totalProperties = function (t) {
                  for (
                    var e = {
                        mass: 0,
                        area: 0,
                        inertia: 0,
                        centre: { x: 0, y: 0 },
                      },
                      n = 1 === t.parts.length ? 0 : 1;
                    n < t.parts.length;
                    n++
                  ) {
                    var i = t.parts[n],
                      r = i.mass !== 1 / 0 ? i.mass : 1;
                    (e.mass += r),
                      (e.area += i.area),
                      (e.inertia += i.inertia),
                      (e.centre = o.add(e.centre, o.mult(i.position, r)));
                  }
                  return (e.centre = o.div(e.centre, e.mass)), e;
                });
            })();
          },
          function (t, e, n) {
            var i = {};
            t.exports = i;
            var r = n(4);
            (i._motionWakeThreshold = 0.18),
              (i._motionSleepThreshold = 0.08),
              (i._minBias = 0.9),
              (i.update = function (t, e) {
                for (var n = e * e * e, r = 0; r < t.length; r++) {
                  var o = t[r],
                    s = o.speed * o.speed + o.angularSpeed * o.angularSpeed;
                  if (0 === o.force.x && 0 === o.force.y) {
                    var a = Math.min(o.motion, s),
                      l = Math.max(o.motion, s);
                    (o.motion = i._minBias * a + (1 - i._minBias) * l),
                      o.sleepThreshold > 0 &&
                      o.motion < i._motionSleepThreshold * n
                        ? ((o.sleepCounter += 1),
                          o.sleepCounter >= o.sleepThreshold && i.set(o, !0))
                        : o.sleepCounter > 0 && (o.sleepCounter -= 1);
                  } else i.set(o, !1);
                }
              }),
              (i.afterCollisions = function (t, e) {
                for (var n = e * e * e, r = 0; r < t.length; r++) {
                  var o = t[r];
                  if (o.isActive) {
                    var s = o.collision,
                      a = s.bodyA.parent,
                      l = s.bodyB.parent;
                    if (
                      !(
                        (a.isSleeping && l.isSleeping) ||
                        a.isStatic ||
                        l.isStatic
                      ) &&
                      (a.isSleeping || l.isSleeping)
                    ) {
                      var u = a.isSleeping && !a.isStatic ? a : l,
                        c = u === a ? l : a;
                      !u.isStatic &&
                        c.motion > i._motionWakeThreshold * n &&
                        i.set(u, !1);
                    }
                  }
                }
              }),
              (i.set = function (t, e) {
                var n = t.isSleeping;
                e
                  ? ((t.isSleeping = !0),
                    (t.sleepCounter = t.sleepThreshold),
                    (t.positionImpulse.x = 0),
                    (t.positionImpulse.y = 0),
                    (t.positionPrev.x = t.position.x),
                    (t.positionPrev.y = t.position.y),
                    (t.anglePrev = t.angle),
                    (t.speed = 0),
                    (t.angularSpeed = 0),
                    (t.motion = 0),
                    n || r.trigger(t, "sleepStart"))
                  : ((t.isSleeping = !1),
                    (t.sleepCounter = 0),
                    n && r.trigger(t, "sleepEnd"));
              });
          },
          function (t, e, n) {
            var i = {};
            t.exports = i;
            var r,
              o,
              s,
              a = n(3),
              l = n(9);
            (r = []),
              (o = { overlap: 0, axis: null }),
              (s = { overlap: 0, axis: null }),
              (i.create = function (t, e) {
                return {
                  pair: null,
                  collided: !1,
                  bodyA: t,
                  bodyB: e,
                  parentA: t.parent,
                  parentB: e.parent,
                  depth: 0,
                  normal: { x: 0, y: 0 },
                  tangent: { x: 0, y: 0 },
                  penetration: { x: 0, y: 0 },
                  supports: [],
                };
              }),
              (i.collides = function (t, e, n) {
                if (
                  (i._overlapAxes(o, t.vertices, e.vertices, t.axes),
                  o.overlap <= 0)
                )
                  return null;
                if (
                  (i._overlapAxes(s, e.vertices, t.vertices, e.axes),
                  s.overlap <= 0)
                )
                  return null;
                var r,
                  u,
                  c = n && n.table[l.id(t, e)];
                c
                  ? (r = c.collision)
                  : (((r = i.create(t, e)).collided = !0),
                    (r.bodyA = t.id < e.id ? t : e),
                    (r.bodyB = t.id < e.id ? e : t),
                    (r.parentA = r.bodyA.parent),
                    (r.parentB = r.bodyB.parent)),
                  (t = r.bodyA),
                  (e = r.bodyB),
                  (u = o.overlap < s.overlap ? o : s);
                var d = r.normal,
                  p = r.supports,
                  f = u.axis,
                  h = f.x,
                  m = f.y;
                h * (e.position.x - t.position.x) +
                  m * (e.position.y - t.position.y) <
                0
                  ? ((d.x = h), (d.y = m))
                  : ((d.x = -h), (d.y = -m)),
                  (r.tangent.x = -d.y),
                  (r.tangent.y = d.x),
                  (r.depth = u.overlap),
                  (r.penetration.x = d.x * r.depth),
                  (r.penetration.y = d.y * r.depth);
                var v = i._findSupports(t, e, d, 1),
                  g = 0;
                if (
                  (a.contains(t.vertices, v[0]) && (p[g++] = v[0]),
                  a.contains(t.vertices, v[1]) && (p[g++] = v[1]),
                  g < 2)
                ) {
                  var y = i._findSupports(e, t, d, -1);
                  a.contains(e.vertices, y[0]) && (p[g++] = y[0]),
                    g < 2 && a.contains(e.vertices, y[1]) && (p[g++] = y[1]);
                }
                return 0 === g && (p[g++] = v[0]), (p.length = g), r;
              }),
              (i._overlapAxes = function (t, e, n, i) {
                var r,
                  o,
                  s,
                  a,
                  l,
                  u,
                  c = e.length,
                  d = n.length,
                  p = e[0].x,
                  f = e[0].y,
                  h = n[0].x,
                  m = n[0].y,
                  v = i.length,
                  g = Number.MAX_VALUE,
                  y = 0;
                for (l = 0; l < v; l++) {
                  var b = i[l],
                    x = b.x,
                    w = b.y,
                    D = p * x + f * w,
                    _ = h * x + m * w,
                    S = D,
                    C = _;
                  for (u = 1; u < c; u += 1)
                    (a = e[u].x * x + e[u].y * w) > S
                      ? (S = a)
                      : a < D && (D = a);
                  for (u = 1; u < d; u += 1)
                    (a = n[u].x * x + n[u].y * w) > C
                      ? (C = a)
                      : a < _ && (_ = a);
                  if (
                    (r = (o = S - _) < (s = C - D) ? o : s) < g &&
                    ((g = r), (y = l), r <= 0)
                  )
                    break;
                }
                (t.axis = i[y]), (t.overlap = g);
              }),
              (i._projectToAxis = function (t, e, n) {
                for (
                  var i = e[0].x * n.x + e[0].y * n.y, r = i, o = 1;
                  o < e.length;
                  o += 1
                ) {
                  var s = e[o].x * n.x + e[o].y * n.y;
                  s > r ? (r = s) : s < i && (i = s);
                }
                (t.min = i), (t.max = r);
              }),
              (i._findSupports = function (t, e, n, i) {
                var o,
                  s,
                  a,
                  l,
                  u,
                  c = e.vertices,
                  d = c.length,
                  p = t.position.x,
                  f = t.position.y,
                  h = n.x * i,
                  m = n.y * i,
                  v = Number.MAX_VALUE;
                for (u = 0; u < d; u += 1)
                  (l = h * (p - (s = c[u]).x) + m * (f - s.y)) < v &&
                    ((v = l), (o = s));
                return (
                  (v =
                    h * (p - (a = c[(d + o.index - 1) % d]).x) + m * (f - a.y)),
                  h * (p - (s = c[(o.index + 1) % d]).x) + m * (f - s.y) < v
                    ? ((r[0] = o), (r[1] = s), r)
                    : ((r[0] = o), (r[1] = a), r)
                );
              });
          },
          function (t, e, n) {
            var i = {};
            t.exports = i;
            var r = n(17);
            (i.create = function (t, e) {
              var n = t.bodyA,
                r = t.bodyB,
                o = {
                  id: i.id(n, r),
                  bodyA: n,
                  bodyB: r,
                  collision: t,
                  contacts: [],
                  activeContacts: [],
                  separation: 0,
                  isActive: !0,
                  confirmedActive: !0,
                  isSensor: n.isSensor || r.isSensor,
                  timeCreated: e,
                  timeUpdated: e,
                  inverseMass: 0,
                  friction: 0,
                  frictionStatic: 0,
                  restitution: 0,
                  slop: 0,
                };
              return i.update(o, t, e), o;
            }),
              (i.update = function (t, e, n) {
                var i = t.contacts,
                  o = e.supports,
                  s = t.activeContacts,
                  a = e.parentA,
                  l = e.parentB,
                  u = a.vertices.length;
                (t.isActive = !0),
                  (t.timeUpdated = n),
                  (t.collision = e),
                  (t.separation = e.depth),
                  (t.inverseMass = a.inverseMass + l.inverseMass),
                  (t.friction =
                    a.friction < l.friction ? a.friction : l.friction),
                  (t.frictionStatic =
                    a.frictionStatic > l.frictionStatic
                      ? a.frictionStatic
                      : l.frictionStatic),
                  (t.restitution =
                    a.restitution > l.restitution
                      ? a.restitution
                      : l.restitution),
                  (t.slop = a.slop > l.slop ? a.slop : l.slop),
                  (e.pair = t),
                  (s.length = 0);
                for (var c = 0; c < o.length; c++) {
                  var d = o[c],
                    p = d.body === a ? d.index : u + d.index,
                    f = i[p];
                  f ? s.push(f) : s.push((i[p] = r.create(d)));
                }
              }),
              (i.setActive = function (t, e, n) {
                e
                  ? ((t.isActive = !0), (t.timeUpdated = n))
                  : ((t.isActive = !1), (t.activeContacts.length = 0));
              }),
              (i.id = function (t, e) {
                return t.id < e.id
                  ? "A" + t.id + "B" + e.id
                  : "A" + e.id + "B" + t.id;
              });
          },
          function (t, e, n) {
            var i = {};
            t.exports = i;
            var r = n(3),
              o = n(2),
              s = n(7),
              a = n(1),
              l = n(11),
              u = n(0);
            (i._warming = 0.4),
              (i._torqueDampen = 1),
              (i._minLength = 1e-6),
              (i.create = function (t) {
                var e = t;
                e.bodyA && !e.pointA && (e.pointA = { x: 0, y: 0 }),
                  e.bodyB && !e.pointB && (e.pointB = { x: 0, y: 0 });
                var n = e.bodyA ? o.add(e.bodyA.position, e.pointA) : e.pointA,
                  i = e.bodyB ? o.add(e.bodyB.position, e.pointB) : e.pointB,
                  r = o.magnitude(o.sub(n, i));
                (e.length = void 0 !== e.length ? e.length : r),
                  (e.id = e.id || u.nextId()),
                  (e.label = e.label || "Constraint"),
                  (e.type = "constraint"),
                  (e.stiffness = e.stiffness || (e.length > 0 ? 1 : 0.7)),
                  (e.damping = e.damping || 0),
                  (e.angularStiffness = e.angularStiffness || 0),
                  (e.angleA = e.bodyA ? e.bodyA.angle : e.angleA),
                  (e.angleB = e.bodyB ? e.bodyB.angle : e.angleB),
                  (e.plugin = {});
                var s = {
                  visible: !0,
                  lineWidth: 2,
                  strokeStyle: "#ffffff",
                  type: "line",
                  anchors: !0,
                };
                return (
                  0 === e.length && e.stiffness > 0.1
                    ? ((s.type = "pin"), (s.anchors = !1))
                    : e.stiffness < 0.9 && (s.type = "spring"),
                  (e.render = u.extend(s, e.render)),
                  e
                );
              }),
              (i.preSolveAll = function (t) {
                for (var e = 0; e < t.length; e += 1) {
                  var n = t[e],
                    i = n.constraintImpulse;
                  n.isStatic ||
                    (0 === i.x && 0 === i.y && 0 === i.angle) ||
                    ((n.position.x += i.x),
                    (n.position.y += i.y),
                    (n.angle += i.angle));
                }
              }),
              (i.solveAll = function (t, e) {
                for (var n = 0; n < t.length; n += 1) {
                  var r = t[n],
                    o = !r.bodyA || (r.bodyA && r.bodyA.isStatic),
                    s = !r.bodyB || (r.bodyB && r.bodyB.isStatic);
                  (o || s) && i.solve(t[n], e);
                }
                for (n = 0; n < t.length; n += 1)
                  (o = !(r = t[n]).bodyA || (r.bodyA && r.bodyA.isStatic)),
                    (s = !r.bodyB || (r.bodyB && r.bodyB.isStatic)),
                    o || s || i.solve(t[n], e);
              }),
              (i.solve = function (t, e) {
                var n = t.bodyA,
                  r = t.bodyB,
                  s = t.pointA,
                  a = t.pointB;
                if (n || r) {
                  n &&
                    !n.isStatic &&
                    (o.rotate(s, n.angle - t.angleA, s), (t.angleA = n.angle)),
                    r &&
                      !r.isStatic &&
                      (o.rotate(a, r.angle - t.angleB, a),
                      (t.angleB = r.angle));
                  var l = s,
                    u = a;
                  if (
                    (n && (l = o.add(n.position, s)),
                    r && (u = o.add(r.position, a)),
                    l && u)
                  ) {
                    var c = o.sub(l, u),
                      d = o.magnitude(c);
                    d < i._minLength && (d = i._minLength);
                    var p,
                      f,
                      h,
                      m,
                      v,
                      g = (d - t.length) / d,
                      y = t.stiffness < 1 ? t.stiffness * e : t.stiffness,
                      b = o.mult(c, g * y),
                      x = (n ? n.inverseMass : 0) + (r ? r.inverseMass : 0),
                      w =
                        x +
                        ((n ? n.inverseInertia : 0) +
                          (r ? r.inverseInertia : 0));
                    if (t.damping) {
                      var D = o.create();
                      (h = o.div(c, d)),
                        (v = o.sub(
                          (r && o.sub(r.position, r.positionPrev)) || D,
                          (n && o.sub(n.position, n.positionPrev)) || D
                        )),
                        (m = o.dot(h, v));
                    }
                    n &&
                      !n.isStatic &&
                      ((f = n.inverseMass / x),
                      (n.constraintImpulse.x -= b.x * f),
                      (n.constraintImpulse.y -= b.y * f),
                      (n.position.x -= b.x * f),
                      (n.position.y -= b.y * f),
                      t.damping &&
                        ((n.positionPrev.x -= t.damping * h.x * m * f),
                        (n.positionPrev.y -= t.damping * h.y * m * f)),
                      (p =
                        (o.cross(s, b) / w) *
                        i._torqueDampen *
                        n.inverseInertia *
                        (1 - t.angularStiffness)),
                      (n.constraintImpulse.angle -= p),
                      (n.angle -= p)),
                      r &&
                        !r.isStatic &&
                        ((f = r.inverseMass / x),
                        (r.constraintImpulse.x += b.x * f),
                        (r.constraintImpulse.y += b.y * f),
                        (r.position.x += b.x * f),
                        (r.position.y += b.y * f),
                        t.damping &&
                          ((r.positionPrev.x += t.damping * h.x * m * f),
                          (r.positionPrev.y += t.damping * h.y * m * f)),
                        (p =
                          (o.cross(a, b) / w) *
                          i._torqueDampen *
                          r.inverseInertia *
                          (1 - t.angularStiffness)),
                        (r.constraintImpulse.angle += p),
                        (r.angle += p));
                  }
                }
              }),
              (i.postSolveAll = function (t) {
                for (var e = 0; e < t.length; e++) {
                  var n = t[e],
                    u = n.constraintImpulse;
                  if (
                    !(n.isStatic || (0 === u.x && 0 === u.y && 0 === u.angle))
                  ) {
                    s.set(n, !1);
                    for (var c = 0; c < n.parts.length; c++) {
                      var d = n.parts[c];
                      r.translate(d.vertices, u),
                        c > 0 && ((d.position.x += u.x), (d.position.y += u.y)),
                        0 !== u.angle &&
                          (r.rotate(d.vertices, u.angle, n.position),
                          l.rotate(d.axes, u.angle),
                          c > 0 &&
                            o.rotateAbout(
                              d.position,
                              u.angle,
                              n.position,
                              d.position
                            )),
                        a.update(d.bounds, d.vertices, n.velocity);
                    }
                    (u.angle *= i._warming),
                      (u.x *= i._warming),
                      (u.y *= i._warming);
                  }
                }
              }),
              (i.pointAWorld = function (t) {
                return {
                  x: (t.bodyA ? t.bodyA.position.x : 0) + t.pointA.x,
                  y: (t.bodyA ? t.bodyA.position.y : 0) + t.pointA.y,
                };
              }),
              (i.pointBWorld = function (t) {
                return {
                  x: (t.bodyB ? t.bodyB.position.x : 0) + t.pointB.x,
                  y: (t.bodyB ? t.bodyB.position.y : 0) + t.pointB.y,
                };
              });
          },
          function (t, e, n) {
            var i = {};
            t.exports = i;
            var r = n(2),
              o = n(0);
            (i.fromVertices = function (t) {
              for (var e = {}, n = 0; n < t.length; n++) {
                var i = (n + 1) % t.length,
                  s = r.normalise({ x: t[i].y - t[n].y, y: t[n].x - t[i].x }),
                  a = 0 === s.y ? 1 / 0 : s.x / s.y;
                e[(a = a.toFixed(3).toString())] = s;
              }
              return o.values(e);
            }),
              (i.rotate = function (t, e) {
                if (0 !== e)
                  for (
                    var n = Math.cos(e), i = Math.sin(e), r = 0;
                    r < t.length;
                    r++
                  ) {
                    var o,
                      s = t[r];
                    (o = s.x * n - s.y * i),
                      (s.y = s.x * i + s.y * n),
                      (s.x = o);
                  }
              });
          },
          function (t, e, n) {
            var i = {};
            t.exports = i;
            var r = n(3),
              o = n(0),
              s = n(6),
              a = n(1),
              l = n(2);
            (i.rectangle = function (t, e, n, i, a) {
              a = a || {};
              var l = {
                label: "Rectangle Body",
                position: { x: t, y: e },
                vertices: r.fromPath(
                  "L 0 0 L " + n + " 0 L " + n + " " + i + " L 0 " + i
                ),
              };
              if (a.chamfer) {
                var u = a.chamfer;
                (l.vertices = r.chamfer(
                  l.vertices,
                  u.radius,
                  u.quality,
                  u.qualityMin,
                  u.qualityMax
                )),
                  delete a.chamfer;
              }
              return s.create(o.extend({}, l, a));
            }),
              (i.trapezoid = function (t, e, n, i, a, l) {
                l = l || {};
                var u,
                  c = n * (a *= 0.5),
                  d = c + (1 - 2 * a) * n,
                  p = d + c;
                u =
                  a < 0.5
                    ? "L 0 0 L " +
                      c +
                      " " +
                      -i +
                      " L " +
                      d +
                      " " +
                      -i +
                      " L " +
                      p +
                      " 0"
                    : "L 0 0 L " + d + " " + -i + " L " + p + " 0";
                var f = {
                  label: "Trapezoid Body",
                  position: { x: t, y: e },
                  vertices: r.fromPath(u),
                };
                if (l.chamfer) {
                  var h = l.chamfer;
                  (f.vertices = r.chamfer(
                    f.vertices,
                    h.radius,
                    h.quality,
                    h.qualityMin,
                    h.qualityMax
                  )),
                    delete l.chamfer;
                }
                return s.create(o.extend({}, f, l));
              }),
              (i.circle = function (t, e, n, r, s) {
                r = r || {};
                var a = { label: "Circle Body", circleRadius: n };
                s = s || 25;
                var l = Math.ceil(Math.max(10, Math.min(s, n)));
                return (
                  l % 2 == 1 && (l += 1),
                  i.polygon(t, e, l, n, o.extend({}, a, r))
                );
              }),
              (i.polygon = function (t, e, n, a, l) {
                if (((l = l || {}), n < 3)) return i.circle(t, e, a, l);
                for (
                  var u = (2 * Math.PI) / n, c = "", d = 0.5 * u, p = 0;
                  p < n;
                  p += 1
                ) {
                  var f = d + p * u,
                    h = Math.cos(f) * a,
                    m = Math.sin(f) * a;
                  c += "L " + h.toFixed(3) + " " + m.toFixed(3) + " ";
                }
                var v = {
                  label: "Polygon Body",
                  position: { x: t, y: e },
                  vertices: r.fromPath(c),
                };
                if (l.chamfer) {
                  var g = l.chamfer;
                  (v.vertices = r.chamfer(
                    v.vertices,
                    g.radius,
                    g.quality,
                    g.qualityMin,
                    g.qualityMax
                  )),
                    delete l.chamfer;
                }
                return s.create(o.extend({}, v, l));
              }),
              (i.fromVertices = function (t, e, n, i, u, c, d, p) {
                var f,
                  h,
                  m,
                  v,
                  g,
                  y,
                  b,
                  x,
                  w,
                  D,
                  _ = o.getDecomp();
                for (
                  f = Boolean(_ && _.quickDecomp),
                    i = i || {},
                    m = [],
                    u = void 0 !== u && u,
                    c = void 0 !== c ? c : 0.01,
                    d = void 0 !== d ? d : 10,
                    p = void 0 !== p ? p : 0.01,
                    o.isArray(n[0]) || (n = [n]),
                    w = 0;
                  w < n.length;
                  w += 1
                )
                  if (
                    ((g = n[w]),
                    !(v = r.isConvex(g)) &&
                      !f &&
                      o.warnOnce(
                        "Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."
                      ),
                    v || !f)
                  )
                    (g = v ? r.clockwiseSort(g) : r.hull(g)),
                      m.push({ position: { x: t, y: e }, vertices: g });
                  else {
                    var S = g.map(function (t) {
                      return [t.x, t.y];
                    });
                    _.makeCCW(S),
                      !1 !== c && _.removeCollinearPoints(S, c),
                      !1 !== p &&
                        _.removeDuplicatePoints &&
                        _.removeDuplicatePoints(S, p);
                    var C = _.quickDecomp(S);
                    for (y = 0; y < C.length; y++) {
                      var E = C[y].map(function (t) {
                        return { x: t[0], y: t[1] };
                      });
                      (d > 0 && r.area(E) < d) ||
                        m.push({ position: r.centre(E), vertices: E });
                    }
                  }
                for (y = 0; y < m.length; y++)
                  m[y] = s.create(o.extend(m[y], i));
                if (u)
                  for (y = 0; y < m.length; y++) {
                    var T = m[y];
                    for (b = y + 1; b < m.length; b++) {
                      var P = m[b];
                      if (a.overlaps(T.bounds, P.bounds)) {
                        var A = T.vertices,
                          k = P.vertices;
                        for (x = 0; x < T.vertices.length; x++)
                          for (D = 0; D < P.vertices.length; D++) {
                            var O = l.magnitudeSquared(
                                l.sub(A[(x + 1) % A.length], k[D])
                              ),
                              M = l.magnitudeSquared(
                                l.sub(A[x], k[(D + 1) % k.length])
                              );
                            O < 5 &&
                              M < 5 &&
                              ((A[x].isInternal = !0), (k[D].isInternal = !0));
                          }
                      }
                    }
                  }
                return m.length > 1
                  ? ((h = s.create(o.extend({ parts: m.slice(0) }, i))),
                    s.setPosition(h, { x: t, y: e }),
                    h)
                  : m[0];
              });
          },
          function (t, e, n) {
            var i = {};
            t.exports = i;
            var r = n(0);
            (i.create = function (t) {
              var e = {};
              return (
                t ||
                  r.log(
                    "Mouse.create: element was undefined, defaulting to document.body",
                    "warn"
                  ),
                (e.element = t || document.body),
                (e.absolute = { x: 0, y: 0 }),
                (e.position = { x: 0, y: 0 }),
                (e.mousedownPosition = { x: 0, y: 0 }),
                (e.mouseupPosition = { x: 0, y: 0 }),
                (e.offset = { x: 0, y: 0 }),
                (e.scale = { x: 1, y: 1 }),
                (e.wheelDelta = 0),
                (e.button = -1),
                (e.pixelRatio =
                  parseInt(e.element.getAttribute("data-pixel-ratio"), 10) ||
                  1),
                (e.sourceEvents = {
                  mousemove: null,
                  mousedown: null,
                  mouseup: null,
                  mousewheel: null,
                }),
                (e.mousemove = function (t) {
                  var n = i._getRelativeMousePosition(
                    t,
                    e.element,
                    e.pixelRatio
                  );
                  t.changedTouches && ((e.button = 0), t.preventDefault()),
                    (e.absolute.x = n.x),
                    (e.absolute.y = n.y),
                    (e.position.x = e.absolute.x * e.scale.x + e.offset.x),
                    (e.position.y = e.absolute.y * e.scale.y + e.offset.y),
                    (e.sourceEvents.mousemove = t);
                }),
                (e.mousedown = function (t) {
                  var n = i._getRelativeMousePosition(
                    t,
                    e.element,
                    e.pixelRatio
                  );
                  t.changedTouches
                    ? ((e.button = 0), t.preventDefault())
                    : (e.button = t.button),
                    (e.absolute.x = n.x),
                    (e.absolute.y = n.y),
                    (e.position.x = e.absolute.x * e.scale.x + e.offset.x),
                    (e.position.y = e.absolute.y * e.scale.y + e.offset.y),
                    (e.mousedownPosition.x = e.position.x),
                    (e.mousedownPosition.y = e.position.y),
                    (e.sourceEvents.mousedown = t);
                }),
                (e.mouseup = function (t) {
                  var n = i._getRelativeMousePosition(
                    t,
                    e.element,
                    e.pixelRatio
                  );
                  t.changedTouches && t.preventDefault(),
                    (e.button = -1),
                    (e.absolute.x = n.x),
                    (e.absolute.y = n.y),
                    (e.position.x = e.absolute.x * e.scale.x + e.offset.x),
                    (e.position.y = e.absolute.y * e.scale.y + e.offset.y),
                    (e.mouseupPosition.x = e.position.x),
                    (e.mouseupPosition.y = e.position.y),
                    (e.sourceEvents.mouseup = t);
                }),
                (e.mousewheel = function (t) {
                  (e.wheelDelta = Math.max(
                    -1,
                    Math.min(1, t.wheelDelta || -t.detail)
                  )),
                    t.preventDefault();
                }),
                i.setElement(e, e.element),
                e
              );
            }),
              (i.setElement = function (t, e) {
                (t.element = e),
                  e.addEventListener("mousemove", t.mousemove),
                  e.addEventListener("mousedown", t.mousedown),
                  e.addEventListener("mouseup", t.mouseup),
                  e.addEventListener("mousewheel", t.mousewheel),
                  e.addEventListener("DOMMouseScroll", t.mousewheel),
                  e.addEventListener("touchmove", t.mousemove),
                  e.addEventListener("touchstart", t.mousedown),
                  e.addEventListener("touchend", t.mouseup);
              }),
              (i.clearSourceEvents = function (t) {
                (t.sourceEvents.mousemove = null),
                  (t.sourceEvents.mousedown = null),
                  (t.sourceEvents.mouseup = null),
                  (t.sourceEvents.mousewheel = null),
                  (t.wheelDelta = 0);
              }),
              (i.setOffset = function (t, e) {
                (t.offset.x = e.x),
                  (t.offset.y = e.y),
                  (t.position.x = t.absolute.x * t.scale.x + t.offset.x),
                  (t.position.y = t.absolute.y * t.scale.y + t.offset.y);
              }),
              (i.setScale = function (t, e) {
                (t.scale.x = e.x),
                  (t.scale.y = e.y),
                  (t.position.x = t.absolute.x * t.scale.x + t.offset.x),
                  (t.position.y = t.absolute.y * t.scale.y + t.offset.y);
              }),
              (i._getRelativeMousePosition = function (t, e, n) {
                var i,
                  r,
                  o = e.getBoundingClientRect(),
                  s =
                    document.documentElement ||
                    document.body.parentNode ||
                    document.body,
                  a =
                    void 0 !== window.pageXOffset
                      ? window.pageXOffset
                      : s.scrollLeft,
                  l =
                    void 0 !== window.pageYOffset
                      ? window.pageYOffset
                      : s.scrollTop,
                  u = t.changedTouches;
                return (
                  u
                    ? ((i = u[0].pageX - o.left - a),
                      (r = u[0].pageY - o.top - l))
                    : ((i = t.pageX - o.left - a), (r = t.pageY - o.top - l)),
                  {
                    x: i / ((e.clientWidth / (e.width || e.clientWidth)) * n),
                    y:
                      r / ((e.clientHeight / (e.height || e.clientHeight)) * n),
                  }
                );
              });
          },
          function (t, e, n) {
            var i = {};
            t.exports = i;
            var r = n(0),
              o = n(8);
            (i.create = function (t) {
              return r.extend({ bodies: [], pairs: null }, t);
            }),
              (i.setBodies = function (t, e) {
                t.bodies = e.slice(0);
              }),
              (i.clear = function (t) {
                t.bodies = [];
              }),
              (i.collisions = function (t) {
                var e,
                  n,
                  r = [],
                  s = t.pairs,
                  a = t.bodies,
                  l = a.length,
                  u = i.canCollide,
                  c = o.collides;
                for (a.sort(i._compareBoundsX), e = 0; e < l; e++) {
                  var d = a[e],
                    p = d.bounds,
                    f = d.bounds.max.x,
                    h = d.bounds.max.y,
                    m = d.bounds.min.y,
                    v = d.isStatic || d.isSleeping,
                    g = d.parts.length,
                    y = 1 === g;
                  for (n = e + 1; n < l; n++) {
                    var b = a[n];
                    if ((T = b.bounds).min.x > f) break;
                    if (
                      !(h < T.min.y || m > T.max.y) &&
                      (!v || (!b.isStatic && !b.isSleeping)) &&
                      u(d.collisionFilter, b.collisionFilter)
                    ) {
                      var x = b.parts.length;
                      if (y && 1 === x) (C = c(d, b, s)) && r.push(C);
                      else
                        for (
                          var w = x > 1 ? 1 : 0, D = g > 1 ? 1 : 0;
                          D < g;
                          D++
                        )
                          for (
                            var _ = d.parts[D], S = ((p = _.bounds), w);
                            S < x;
                            S++
                          ) {
                            var C,
                              E = b.parts[S],
                              T = E.bounds;
                            p.min.x > T.max.x ||
                              p.max.x < T.min.x ||
                              p.max.y < T.min.y ||
                              p.min.y > T.max.y ||
                              ((C = c(_, E, s)) && r.push(C));
                          }
                    }
                  }
                }
                return r;
              }),
              (i.canCollide = function (t, e) {
                return t.group === e.group && 0 !== t.group
                  ? t.group > 0
                  : 0 != (t.mask & e.category) && 0 != (e.mask & t.category);
              }),
              (i._compareBoundsX = function (t, e) {
                return t.bounds.min.x - e.bounds.min.x;
              });
          },
          function (t, e, n) {
            var i = {};
            t.exports = i;
            var r = n(0);
            (i._registry = {}),
              (i.register = function (t) {
                if (
                  (i.isPlugin(t) ||
                    r.warn(
                      "Plugin.register:",
                      i.toString(t),
                      "does not implement all required fields."
                    ),
                  t.name in i._registry)
                ) {
                  var e = i._registry[t.name],
                    n = i.versionParse(t.version).number,
                    o = i.versionParse(e.version).number;
                  n > o
                    ? (r.warn(
                        "Plugin.register:",
                        i.toString(e),
                        "was upgraded to",
                        i.toString(t)
                      ),
                      (i._registry[t.name] = t))
                    : n < o
                    ? r.warn(
                        "Plugin.register:",
                        i.toString(e),
                        "can not be downgraded to",
                        i.toString(t)
                      )
                    : t !== e &&
                      r.warn(
                        "Plugin.register:",
                        i.toString(t),
                        "is already registered to different plugin object"
                      );
                } else i._registry[t.name] = t;
                return t;
              }),
              (i.resolve = function (t) {
                return i._registry[i.dependencyParse(t).name];
              }),
              (i.toString = function (t) {
                return "string" == typeof t
                  ? t
                  : (t.name || "anonymous") +
                      "@" +
                      (t.version || t.range || "0.0.0");
              }),
              (i.isPlugin = function (t) {
                return t && t.name && t.version && t.install;
              }),
              (i.isUsed = function (t, e) {
                return t.used.indexOf(e) > -1;
              }),
              (i.isFor = function (t, e) {
                var n = t.for && i.dependencyParse(t.for);
                return (
                  !t.for ||
                  (e.name === n.name && i.versionSatisfies(e.version, n.range))
                );
              }),
              (i.use = function (t, e) {
                if (
                  ((t.uses = (t.uses || []).concat(e || [])),
                  0 !== t.uses.length)
                ) {
                  for (
                    var n = i.dependencies(t),
                      o = r.topologicalSort(n),
                      s = [],
                      a = 0;
                    a < o.length;
                    a += 1
                  )
                    if (o[a] !== t.name) {
                      var l = i.resolve(o[a]);
                      l
                        ? i.isUsed(t, l.name) ||
                          (i.isFor(l, t) ||
                            (r.warn(
                              "Plugin.use:",
                              i.toString(l),
                              "is for",
                              l.for,
                              "but installed on",
                              i.toString(t) + "."
                            ),
                            (l._warned = !0)),
                          l.install
                            ? l.install(t)
                            : (r.warn(
                                "Plugin.use:",
                                i.toString(l),
                                "does not specify an install function."
                              ),
                              (l._warned = !0)),
                          l._warned
                            ? (s.push("🔶 " + i.toString(l)), delete l._warned)
                            : s.push("✅ " + i.toString(l)),
                          t.used.push(l.name))
                        : s.push("❌ " + o[a]);
                    }
                  s.length > 0 && r.info(s.join("  "));
                } else
                  r.warn(
                    "Plugin.use:",
                    i.toString(t),
                    "does not specify any dependencies to install."
                  );
              }),
              (i.dependencies = function (t, e) {
                var n = i.dependencyParse(t),
                  o = n.name;
                if (!(o in (e = e || {}))) {
                  (t = i.resolve(t) || t),
                    (e[o] = r.map(t.uses || [], function (e) {
                      i.isPlugin(e) && i.register(e);
                      var o = i.dependencyParse(e),
                        s = i.resolve(e);
                      return (
                        s && !i.versionSatisfies(s.version, o.range)
                          ? (r.warn(
                              "Plugin.dependencies:",
                              i.toString(s),
                              "does not satisfy",
                              i.toString(o),
                              "used by",
                              i.toString(n) + "."
                            ),
                            (s._warned = !0),
                            (t._warned = !0))
                          : s ||
                            (r.warn(
                              "Plugin.dependencies:",
                              i.toString(e),
                              "used by",
                              i.toString(n),
                              "could not be resolved."
                            ),
                            (t._warned = !0)),
                        o.name
                      );
                    }));
                  for (var s = 0; s < e[o].length; s += 1)
                    i.dependencies(e[o][s], e);
                  return e;
                }
              }),
              (i.dependencyParse = function (t) {
                return r.isString(t)
                  ? (/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/.test(
                      t
                    ) ||
                      r.warn(
                        "Plugin.dependencyParse:",
                        t,
                        "is not a valid dependency string."
                      ),
                    { name: t.split("@")[0], range: t.split("@")[1] || "*" })
                  : { name: t.name, range: t.range || t.version };
              }),
              (i.versionParse = function (t) {
                var e =
                  /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;
                e.test(t) ||
                  r.warn(
                    "Plugin.versionParse:",
                    t,
                    "is not a valid version or range."
                  );
                var n = e.exec(t),
                  i = Number(n[4]),
                  o = Number(n[5]),
                  s = Number(n[6]);
                return {
                  isRange: Boolean(n[1] || n[2]),
                  version: n[3],
                  range: t,
                  operator: n[1] || n[2] || "",
                  major: i,
                  minor: o,
                  patch: s,
                  parts: [i, o, s],
                  prerelease: n[7],
                  number: 1e8 * i + 1e4 * o + s,
                };
              }),
              (i.versionSatisfies = function (t, e) {
                e = e || "*";
                var n = i.versionParse(e),
                  r = i.versionParse(t);
                if (n.isRange) {
                  if ("*" === n.operator || "*" === t) return !0;
                  if (">" === n.operator) return r.number > n.number;
                  if (">=" === n.operator) return r.number >= n.number;
                  if ("~" === n.operator)
                    return (
                      r.major === n.major &&
                      r.minor === n.minor &&
                      r.patch >= n.patch
                    );
                  if ("^" === n.operator)
                    return n.major > 0
                      ? r.major === n.major && r.number >= n.number
                      : n.minor > 0
                      ? r.minor === n.minor && r.patch >= n.patch
                      : r.patch === n.patch;
                }
                return t === e || "*" === t;
              });
          },
          function (t, e, n) {
            var i = {};
            t.exports = i;
            var r = n(0),
              o = n(5),
              s = n(1),
              a = n(4),
              l = n(2),
              u = n(13);
            !(function () {
              var t, e;
              "undefined" != typeof window &&
                ((t =
                  window.requestAnimationFrame ||
                  window.webkitRequestAnimationFrame ||
                  window.mozRequestAnimationFrame ||
                  window.msRequestAnimationFrame ||
                  function (t) {
                    window.setTimeout(function () {
                      t(r.now());
                    }, 1e3 / 60);
                  }),
                (e =
                  window.cancelAnimationFrame ||
                  window.mozCancelAnimationFrame ||
                  window.webkitCancelAnimationFrame ||
                  window.msCancelAnimationFrame)),
                (i._goodFps = 30),
                (i._goodDelta = 1e3 / 60),
                (i.create = function (t) {
                  var e = {
                      controller: i,
                      engine: null,
                      element: null,
                      canvas: null,
                      mouse: null,
                      frameRequestId: null,
                      timing: {
                        historySize: 60,
                        delta: 0,
                        deltaHistory: [],
                        lastTime: 0,
                        lastTimestamp: 0,
                        lastElapsed: 0,
                        timestampElapsed: 0,
                        timestampElapsedHistory: [],
                        engineDeltaHistory: [],
                        engineElapsedHistory: [],
                        elapsedHistory: [],
                      },
                      options: {
                        width: 800,
                        height: 600,
                        pixelRatio: 1,
                        background: "#14151f",
                        wireframeBackground: "#14151f",
                        hasBounds: !!t.bounds,
                        enabled: !0,
                        wireframes: !0,
                        showSleeping: !0,
                        showDebug: !1,
                        showStats: !1,
                        showPerformance: !1,
                        showBounds: !1,
                        showVelocity: !1,
                        showCollisions: !1,
                        showSeparations: !1,
                        showAxes: !1,
                        showPositions: !1,
                        showAngleIndicator: !1,
                        showIds: !1,
                        showVertexNumbers: !1,
                        showConvexHulls: !1,
                        showInternalEdges: !1,
                        showMousePosition: !1,
                      },
                    },
                    n = r.extend(e, t);
                  return (
                    n.canvas &&
                      ((n.canvas.width = n.options.width || n.canvas.width),
                      (n.canvas.height = n.options.height || n.canvas.height)),
                    (n.mouse = t.mouse),
                    (n.engine = t.engine),
                    (n.canvas =
                      n.canvas || d(n.options.width, n.options.height)),
                    (n.context = n.canvas.getContext("2d")),
                    (n.textures = {}),
                    (n.bounds = n.bounds || {
                      min: { x: 0, y: 0 },
                      max: { x: n.canvas.width, y: n.canvas.height },
                    }),
                    (n.options.showBroadphase = !1),
                    1 !== n.options.pixelRatio &&
                      i.setPixelRatio(n, n.options.pixelRatio),
                    r.isElement(n.element)
                      ? n.element.appendChild(n.canvas)
                      : n.canvas.parentNode ||
                        r.log(
                          "Render.create: options.element was undefined, render.canvas was created but not appended",
                          "warn"
                        ),
                    n
                  );
                }),
                (i.run = function (e) {
                  !(function r(o) {
                    (e.frameRequestId = t(r)),
                      n(e, o),
                      i.world(e, o),
                      (e.options.showStats || e.options.showDebug) &&
                        i.stats(e, e.context, o),
                      (e.options.showPerformance || e.options.showDebug) &&
                        i.performance(e, e.context, o);
                  })();
                }),
                (i.stop = function (t) {
                  e(t.frameRequestId);
                }),
                (i.setPixelRatio = function (t, e) {
                  var n = t.options,
                    i = t.canvas;
                  "auto" === e && (e = p(i)),
                    (n.pixelRatio = e),
                    i.setAttribute("data-pixel-ratio", e),
                    (i.width = n.width * e),
                    (i.height = n.height * e),
                    (i.style.width = n.width + "px"),
                    (i.style.height = n.height + "px");
                }),
                (i.lookAt = function (t, e, n, i) {
                  (i = void 0 === i || i),
                    (e = r.isArray(e) ? e : [e]),
                    (n = n || { x: 0, y: 0 });
                  for (
                    var o = {
                        min: { x: 1 / 0, y: 1 / 0 },
                        max: { x: -1 / 0, y: -1 / 0 },
                      },
                      s = 0;
                    s < e.length;
                    s += 1
                  ) {
                    var a = e[s],
                      l = a.bounds ? a.bounds.min : a.min || a.position || a,
                      c = a.bounds ? a.bounds.max : a.max || a.position || a;
                    l &&
                      c &&
                      (l.x < o.min.x && (o.min.x = l.x),
                      c.x > o.max.x && (o.max.x = c.x),
                      l.y < o.min.y && (o.min.y = l.y),
                      c.y > o.max.y && (o.max.y = c.y));
                  }
                  var d = o.max.x - o.min.x + 2 * n.x,
                    p = o.max.y - o.min.y + 2 * n.y,
                    f = t.canvas.height,
                    h = t.canvas.width / f,
                    m = d / p,
                    v = 1,
                    g = 1;
                  m > h ? (g = m / h) : (v = h / m),
                    (t.options.hasBounds = !0),
                    (t.bounds.min.x = o.min.x),
                    (t.bounds.max.x = o.min.x + d * v),
                    (t.bounds.min.y = o.min.y),
                    (t.bounds.max.y = o.min.y + p * g),
                    i &&
                      ((t.bounds.min.x += 0.5 * d - d * v * 0.5),
                      (t.bounds.max.x += 0.5 * d - d * v * 0.5),
                      (t.bounds.min.y += 0.5 * p - p * g * 0.5),
                      (t.bounds.max.y += 0.5 * p - p * g * 0.5)),
                    (t.bounds.min.x -= n.x),
                    (t.bounds.max.x -= n.x),
                    (t.bounds.min.y -= n.y),
                    (t.bounds.max.y -= n.y),
                    t.mouse &&
                      (u.setScale(t.mouse, {
                        x: (t.bounds.max.x - t.bounds.min.x) / t.canvas.width,
                        y: (t.bounds.max.y - t.bounds.min.y) / t.canvas.height,
                      }),
                      u.setOffset(t.mouse, t.bounds.min));
                }),
                (i.startViewTransform = function (t) {
                  var e = t.bounds.max.x - t.bounds.min.x,
                    n = t.bounds.max.y - t.bounds.min.y,
                    i = e / t.options.width,
                    r = n / t.options.height;
                  t.context.setTransform(
                    t.options.pixelRatio / i,
                    0,
                    0,
                    t.options.pixelRatio / r,
                    0,
                    0
                  ),
                    t.context.translate(-t.bounds.min.x, -t.bounds.min.y);
                }),
                (i.endViewTransform = function (t) {
                  t.context.setTransform(
                    t.options.pixelRatio,
                    0,
                    0,
                    t.options.pixelRatio,
                    0,
                    0
                  );
                }),
                (i.world = function (t, e) {
                  var n,
                    c = r.now(),
                    d = t.engine,
                    p = d.world,
                    f = t.canvas,
                    m = t.context,
                    v = t.options,
                    g = t.timing,
                    y = o.allBodies(p),
                    b = o.allConstraints(p),
                    x = v.wireframes ? v.wireframeBackground : v.background,
                    w = [],
                    D = [],
                    _ = { timestamp: d.timing.timestamp };
                  if (
                    (a.trigger(t, "beforeRender", _),
                    t.currentBackground !== x && h(t, x),
                    (m.globalCompositeOperation = "source-in"),
                    (m.fillStyle = "transparent"),
                    m.fillRect(0, 0, f.width, f.height),
                    (m.globalCompositeOperation = "source-over"),
                    v.hasBounds)
                  ) {
                    for (n = 0; n < y.length; n++) {
                      var S = y[n];
                      s.overlaps(S.bounds, t.bounds) && w.push(S);
                    }
                    for (n = 0; n < b.length; n++) {
                      var C = b[n],
                        E = C.bodyA,
                        T = C.bodyB,
                        P = C.pointA,
                        A = C.pointB;
                      E && (P = l.add(E.position, C.pointA)),
                        T && (A = l.add(T.position, C.pointB)),
                        P &&
                          A &&
                          (s.contains(t.bounds, P) ||
                            s.contains(t.bounds, A)) &&
                          D.push(C);
                    }
                    i.startViewTransform(t),
                      t.mouse &&
                        (u.setScale(t.mouse, {
                          x:
                            (t.bounds.max.x - t.bounds.min.x) / t.options.width,
                          y:
                            (t.bounds.max.y - t.bounds.min.y) /
                            t.options.height,
                        }),
                        u.setOffset(t.mouse, t.bounds.min));
                  } else
                    (D = b),
                      (w = y),
                      1 !== t.options.pixelRatio &&
                        t.context.setTransform(
                          t.options.pixelRatio,
                          0,
                          0,
                          t.options.pixelRatio,
                          0,
                          0
                        );
                  !v.wireframes || (d.enableSleeping && v.showSleeping)
                    ? i.bodies(t, w, m)
                    : (v.showConvexHulls && i.bodyConvexHulls(t, w, m),
                      i.bodyWireframes(t, w, m)),
                    v.showBounds && i.bodyBounds(t, w, m),
                    (v.showAxes || v.showAngleIndicator) && i.bodyAxes(t, w, m),
                    v.showPositions && i.bodyPositions(t, w, m),
                    v.showVelocity && i.bodyVelocity(t, w, m),
                    v.showIds && i.bodyIds(t, w, m),
                    v.showSeparations && i.separations(t, d.pairs.list, m),
                    v.showCollisions && i.collisions(t, d.pairs.list, m),
                    v.showVertexNumbers && i.vertexNumbers(t, w, m),
                    v.showMousePosition && i.mousePosition(t, t.mouse, m),
                    i.constraints(D, m),
                    v.hasBounds && i.endViewTransform(t),
                    a.trigger(t, "afterRender", _),
                    (g.lastElapsed = r.now() - c);
                }),
                (i.stats = function (t, e, n) {
                  for (
                    var i = t.engine,
                      r = i.world,
                      s = o.allBodies(r),
                      a = 0,
                      l = 0,
                      u = 0;
                    u < s.length;
                    u += 1
                  )
                    a += s[u].parts.length;
                  var c = {
                    Part: a,
                    Body: s.length,
                    Cons: o.allConstraints(r).length,
                    Comp: o.allComposites(r).length,
                    Pair: i.pairs.list.length,
                  };
                  for (var d in ((e.fillStyle = "#0e0f19"),
                  e.fillRect(l, 0, 302.5, 44),
                  (e.font = "12px Arial"),
                  (e.textBaseline = "top"),
                  (e.textAlign = "right"),
                  c)) {
                    var p = c[d];
                    (e.fillStyle = "#aaa"),
                      e.fillText(d, l + 55, 8),
                      (e.fillStyle = "#eee"),
                      e.fillText(p, l + 55, 26),
                      (l += 55);
                  }
                }),
                (i.performance = function (t, e) {
                  var n = t.engine,
                    r = t.timing,
                    o = r.deltaHistory,
                    s = r.elapsedHistory,
                    a = r.timestampElapsedHistory,
                    l = r.engineDeltaHistory,
                    u = r.engineElapsedHistory,
                    d = n.timing.lastDelta,
                    p = c(o),
                    f = c(s),
                    h = c(l),
                    m = c(u),
                    v = c(a) / p || 0,
                    g = 1e3 / p || 0;
                  (e.fillStyle = "#0e0f19"),
                    e.fillRect(0, 50, 370, 34),
                    i.status(
                      e,
                      10,
                      69,
                      60,
                      4,
                      o.length,
                      Math.round(g) + " fps",
                      g / i._goodFps,
                      function (t) {
                        return o[t] / p - 1;
                      }
                    ),
                    i.status(
                      e,
                      82,
                      69,
                      60,
                      4,
                      l.length,
                      d.toFixed(2) + " dt",
                      i._goodDelta / d,
                      function (t) {
                        return l[t] / h - 1;
                      }
                    ),
                    i.status(
                      e,
                      154,
                      69,
                      60,
                      4,
                      u.length,
                      m.toFixed(2) + " ut",
                      1 - m / i._goodFps,
                      function (t) {
                        return u[t] / m - 1;
                      }
                    ),
                    i.status(
                      e,
                      226,
                      69,
                      60,
                      4,
                      s.length,
                      f.toFixed(2) + " rt",
                      1 - f / i._goodFps,
                      function (t) {
                        return s[t] / f - 1;
                      }
                    ),
                    i.status(
                      e,
                      298,
                      69,
                      60,
                      4,
                      a.length,
                      v.toFixed(2) + " x",
                      v * v * v,
                      function (t) {
                        return (a[t] / o[t] / v || 0) - 1;
                      }
                    );
                }),
                (i.status = function (t, e, n, i, o, s, a, l, u) {
                  (t.strokeStyle = "#888"),
                    (t.fillStyle = "#444"),
                    (t.lineWidth = 1),
                    t.fillRect(e, n + 7, i, 1),
                    t.beginPath(),
                    t.moveTo(e, n + 7 - o * r.clamp(0.4 * u(0), -2, 2));
                  for (var c = 0; c < i; c += 1)
                    t.lineTo(
                      e + c,
                      n + 7 - (c < s ? o * r.clamp(0.4 * u(c), -2, 2) : 0)
                    );
                  t.stroke(),
                    (t.fillStyle =
                      "hsl(" + r.clamp(25 + 95 * l, 0, 120) + ",100%,60%)"),
                    t.fillRect(e, n - 7, 4, 4),
                    (t.font = "12px Arial"),
                    (t.textBaseline = "middle"),
                    (t.textAlign = "right"),
                    (t.fillStyle = "#eee"),
                    t.fillText(a, e + i, n - 5);
                }),
                (i.constraints = function (t, e) {
                  for (var n = e, i = 0; i < t.length; i++) {
                    var o = t[i];
                    if (o.render.visible && o.pointA && o.pointB) {
                      var s,
                        a,
                        u = o.bodyA,
                        c = o.bodyB;
                      if (
                        ((s = u ? l.add(u.position, o.pointA) : o.pointA),
                        "pin" === o.render.type)
                      )
                        n.beginPath(),
                          n.arc(s.x, s.y, 3, 0, 2 * Math.PI),
                          n.closePath();
                      else {
                        if (
                          ((a = c ? l.add(c.position, o.pointB) : o.pointB),
                          n.beginPath(),
                          n.moveTo(s.x, s.y),
                          "spring" === o.render.type)
                        )
                          for (
                            var d,
                              p = l.sub(a, s),
                              f = l.perp(l.normalise(p)),
                              h = Math.ceil(r.clamp(o.length / 5, 12, 20)),
                              m = 1;
                            m < h;
                            m += 1
                          )
                            (d = m % 2 == 0 ? 1 : -1),
                              n.lineTo(
                                s.x + p.x * (m / h) + f.x * d * 4,
                                s.y + p.y * (m / h) + f.y * d * 4
                              );
                        n.lineTo(a.x, a.y);
                      }
                      o.render.lineWidth &&
                        ((n.lineWidth = o.render.lineWidth),
                        (n.strokeStyle = o.render.strokeStyle),
                        n.stroke()),
                        o.render.anchors &&
                          ((n.fillStyle = o.render.strokeStyle),
                          n.beginPath(),
                          n.arc(s.x, s.y, 3, 0, 2 * Math.PI),
                          n.arc(a.x, a.y, 3, 0, 2 * Math.PI),
                          n.closePath(),
                          n.fill());
                    }
                  }
                }),
                (i.bodies = function (t, e, n) {
                  var i,
                    r,
                    o,
                    s,
                    a = n,
                    l = (t.engine, t.options),
                    u = l.showInternalEdges || !l.wireframes;
                  for (o = 0; o < e.length; o++)
                    if ((i = e[o]).render.visible)
                      for (
                        s = i.parts.length > 1 ? 1 : 0;
                        s < i.parts.length;
                        s++
                      )
                        if ((r = i.parts[s]).render.visible) {
                          if (
                            (l.showSleeping && i.isSleeping
                              ? (a.globalAlpha = 0.5 * r.render.opacity)
                              : 1 !== r.render.opacity &&
                                (a.globalAlpha = r.render.opacity),
                            r.render.sprite &&
                              r.render.sprite.texture &&
                              !l.wireframes)
                          ) {
                            var c = r.render.sprite,
                              d = f(t, c.texture);
                            a.translate(r.position.x, r.position.y),
                              a.rotate(r.angle),
                              a.drawImage(
                                d,
                                d.width * -c.xOffset * c.xScale,
                                d.height * -c.yOffset * c.yScale,
                                d.width * c.xScale,
                                d.height * c.yScale
                              ),
                              a.rotate(-r.angle),
                              a.translate(-r.position.x, -r.position.y);
                          } else {
                            if (r.circleRadius)
                              a.beginPath(),
                                a.arc(
                                  r.position.x,
                                  r.position.y,
                                  r.circleRadius,
                                  0,
                                  2 * Math.PI
                                );
                            else {
                              a.beginPath(),
                                a.moveTo(r.vertices[0].x, r.vertices[0].y);
                              for (var p = 1; p < r.vertices.length; p++)
                                !r.vertices[p - 1].isInternal || u
                                  ? a.lineTo(r.vertices[p].x, r.vertices[p].y)
                                  : a.moveTo(r.vertices[p].x, r.vertices[p].y),
                                  r.vertices[p].isInternal &&
                                    !u &&
                                    a.moveTo(
                                      r.vertices[(p + 1) % r.vertices.length].x,
                                      r.vertices[(p + 1) % r.vertices.length].y
                                    );
                              a.lineTo(r.vertices[0].x, r.vertices[0].y),
                                a.closePath();
                            }
                            l.wireframes
                              ? ((a.lineWidth = 1),
                                (a.strokeStyle = "#bbb"),
                                a.stroke())
                              : ((a.fillStyle = r.render.fillStyle),
                                r.render.lineWidth &&
                                  ((a.lineWidth = r.render.lineWidth),
                                  (a.strokeStyle = r.render.strokeStyle),
                                  a.stroke()),
                                a.fill());
                          }
                          a.globalAlpha = 1;
                        }
                }),
                (i.bodyWireframes = function (t, e, n) {
                  var i,
                    r,
                    o,
                    s,
                    a,
                    l = n,
                    u = t.options.showInternalEdges;
                  for (l.beginPath(), o = 0; o < e.length; o++)
                    if ((i = e[o]).render.visible)
                      for (
                        a = i.parts.length > 1 ? 1 : 0;
                        a < i.parts.length;
                        a++
                      ) {
                        for (
                          r = i.parts[a],
                            l.moveTo(r.vertices[0].x, r.vertices[0].y),
                            s = 1;
                          s < r.vertices.length;
                          s++
                        )
                          !r.vertices[s - 1].isInternal || u
                            ? l.lineTo(r.vertices[s].x, r.vertices[s].y)
                            : l.moveTo(r.vertices[s].x, r.vertices[s].y),
                            r.vertices[s].isInternal &&
                              !u &&
                              l.moveTo(
                                r.vertices[(s + 1) % r.vertices.length].x,
                                r.vertices[(s + 1) % r.vertices.length].y
                              );
                        l.lineTo(r.vertices[0].x, r.vertices[0].y);
                      }
                  (l.lineWidth = 1), (l.strokeStyle = "#bbb"), l.stroke();
                }),
                (i.bodyConvexHulls = function (t, e, n) {
                  var i,
                    r,
                    o,
                    s = n;
                  for (s.beginPath(), r = 0; r < e.length; r++)
                    if ((i = e[r]).render.visible && 1 !== i.parts.length) {
                      for (
                        s.moveTo(i.vertices[0].x, i.vertices[0].y), o = 1;
                        o < i.vertices.length;
                        o++
                      )
                        s.lineTo(i.vertices[o].x, i.vertices[o].y);
                      s.lineTo(i.vertices[0].x, i.vertices[0].y);
                    }
                  (s.lineWidth = 1),
                    (s.strokeStyle = "rgba(255,255,255,0.2)"),
                    s.stroke();
                }),
                (i.vertexNumbers = function (t, e, n) {
                  var i,
                    r,
                    o,
                    s = n;
                  for (i = 0; i < e.length; i++) {
                    var a = e[i].parts;
                    for (o = a.length > 1 ? 1 : 0; o < a.length; o++) {
                      var l = a[o];
                      for (r = 0; r < l.vertices.length; r++)
                        (s.fillStyle = "rgba(255,255,255,0.2)"),
                          s.fillText(
                            i + "_" + r,
                            l.position.x +
                              0.8 * (l.vertices[r].x - l.position.x),
                            l.position.y +
                              0.8 * (l.vertices[r].y - l.position.y)
                          );
                    }
                  }
                }),
                (i.mousePosition = function (t, e, n) {
                  var i = n;
                  (i.fillStyle = "rgba(255,255,255,0.8)"),
                    i.fillText(
                      e.position.x + "  " + e.position.y,
                      e.position.x + 5,
                      e.position.y - 5
                    );
                }),
                (i.bodyBounds = function (t, e, n) {
                  var i = n,
                    r = (t.engine, t.options);
                  i.beginPath();
                  for (var o = 0; o < e.length; o++)
                    if (e[o].render.visible)
                      for (
                        var s = e[o].parts, a = s.length > 1 ? 1 : 0;
                        a < s.length;
                        a++
                      ) {
                        var l = s[a];
                        i.rect(
                          l.bounds.min.x,
                          l.bounds.min.y,
                          l.bounds.max.x - l.bounds.min.x,
                          l.bounds.max.y - l.bounds.min.y
                        );
                      }
                  r.wireframes
                    ? (i.strokeStyle = "rgba(255,255,255,0.08)")
                    : (i.strokeStyle = "rgba(0,0,0,0.1)"),
                    (i.lineWidth = 1),
                    i.stroke();
                }),
                (i.bodyAxes = function (t, e, n) {
                  var i,
                    r,
                    o,
                    s,
                    a = n,
                    l = (t.engine, t.options);
                  for (a.beginPath(), r = 0; r < e.length; r++) {
                    var u = e[r],
                      c = u.parts;
                    if (u.render.visible)
                      if (l.showAxes)
                        for (o = c.length > 1 ? 1 : 0; o < c.length; o++)
                          for (i = c[o], s = 0; s < i.axes.length; s++) {
                            var d = i.axes[s];
                            a.moveTo(i.position.x, i.position.y),
                              a.lineTo(
                                i.position.x + 20 * d.x,
                                i.position.y + 20 * d.y
                              );
                          }
                      else
                        for (o = c.length > 1 ? 1 : 0; o < c.length; o++)
                          for (i = c[o], s = 0; s < i.axes.length; s++)
                            a.moveTo(i.position.x, i.position.y),
                              a.lineTo(
                                (i.vertices[0].x +
                                  i.vertices[i.vertices.length - 1].x) /
                                  2,
                                (i.vertices[0].y +
                                  i.vertices[i.vertices.length - 1].y) /
                                  2
                              );
                  }
                  l.wireframes
                    ? ((a.strokeStyle = "indianred"), (a.lineWidth = 1))
                    : ((a.strokeStyle = "rgba(255, 255, 255, 0.4)"),
                      (a.globalCompositeOperation = "overlay"),
                      (a.lineWidth = 2)),
                    a.stroke(),
                    (a.globalCompositeOperation = "source-over");
                }),
                (i.bodyPositions = function (t, e, n) {
                  var i,
                    r,
                    o,
                    s,
                    a = n,
                    l = (t.engine, t.options);
                  for (a.beginPath(), o = 0; o < e.length; o++)
                    if ((i = e[o]).render.visible)
                      for (s = 0; s < i.parts.length; s++)
                        (r = i.parts[s]),
                          a.arc(
                            r.position.x,
                            r.position.y,
                            3,
                            0,
                            2 * Math.PI,
                            !1
                          ),
                          a.closePath();
                  for (
                    l.wireframes
                      ? (a.fillStyle = "indianred")
                      : (a.fillStyle = "rgba(0,0,0,0.5)"),
                      a.fill(),
                      a.beginPath(),
                      o = 0;
                    o < e.length;
                    o++
                  )
                    (i = e[o]).render.visible &&
                      (a.arc(
                        i.positionPrev.x,
                        i.positionPrev.y,
                        2,
                        0,
                        2 * Math.PI,
                        !1
                      ),
                      a.closePath());
                  (a.fillStyle = "rgba(255,165,0,0.8)"), a.fill();
                }),
                (i.bodyVelocity = function (t, e, n) {
                  var i = n;
                  i.beginPath();
                  for (var r = 0; r < e.length; r++) {
                    var o = e[r];
                    o.render.visible &&
                      (i.moveTo(o.position.x, o.position.y),
                      i.lineTo(
                        o.position.x + 2 * (o.position.x - o.positionPrev.x),
                        o.position.y + 2 * (o.position.y - o.positionPrev.y)
                      ));
                  }
                  (i.lineWidth = 3),
                    (i.strokeStyle = "cornflowerblue"),
                    i.stroke();
                }),
                (i.bodyIds = function (t, e, n) {
                  var i,
                    r,
                    o = n;
                  for (i = 0; i < e.length; i++)
                    if (e[i].render.visible) {
                      var s = e[i].parts;
                      for (r = s.length > 1 ? 1 : 0; r < s.length; r++) {
                        var a = s[r];
                        (o.font = "12px Arial"),
                          (o.fillStyle = "rgba(255,255,255,0.5)"),
                          o.fillText(
                            a.id,
                            a.position.x + 10,
                            a.position.y - 10
                          );
                      }
                    }
                }),
                (i.collisions = function (t, e, n) {
                  var i,
                    r,
                    o,
                    s,
                    a = n,
                    l = t.options;
                  for (a.beginPath(), o = 0; o < e.length; o++)
                    if ((i = e[o]).isActive)
                      for (
                        r = i.collision, s = 0;
                        s < i.activeContacts.length;
                        s++
                      ) {
                        var u = i.activeContacts[s].vertex;
                        a.rect(u.x - 1.5, u.y - 1.5, 3.5, 3.5);
                      }
                  for (
                    l.wireframes
                      ? (a.fillStyle = "rgba(255,255,255,0.7)")
                      : (a.fillStyle = "orange"),
                      a.fill(),
                      a.beginPath(),
                      o = 0;
                    o < e.length;
                    o++
                  )
                    if (
                      (i = e[o]).isActive &&
                      ((r = i.collision), i.activeContacts.length > 0)
                    ) {
                      var c = i.activeContacts[0].vertex.x,
                        d = i.activeContacts[0].vertex.y;
                      2 === i.activeContacts.length &&
                        ((c =
                          (i.activeContacts[0].vertex.x +
                            i.activeContacts[1].vertex.x) /
                          2),
                        (d =
                          (i.activeContacts[0].vertex.y +
                            i.activeContacts[1].vertex.y) /
                          2)),
                        r.bodyB === r.supports[0].body ||
                        !0 === r.bodyA.isStatic
                          ? a.moveTo(c - 8 * r.normal.x, d - 8 * r.normal.y)
                          : a.moveTo(c + 8 * r.normal.x, d + 8 * r.normal.y),
                        a.lineTo(c, d);
                    }
                  l.wireframes
                    ? (a.strokeStyle = "rgba(255,165,0,0.7)")
                    : (a.strokeStyle = "orange"),
                    (a.lineWidth = 1),
                    a.stroke();
                }),
                (i.separations = function (t, e, n) {
                  var i,
                    r,
                    o,
                    s,
                    a,
                    l = n,
                    u = t.options;
                  for (l.beginPath(), a = 0; a < e.length; a++)
                    if ((i = e[a]).isActive) {
                      o = (r = i.collision).bodyA;
                      var c = 1;
                      (s = r.bodyB).isStatic || o.isStatic || (c = 0.5),
                        s.isStatic && (c = 0),
                        l.moveTo(s.position.x, s.position.y),
                        l.lineTo(
                          s.position.x - r.penetration.x * c,
                          s.position.y - r.penetration.y * c
                        ),
                        (c = 1),
                        s.isStatic || o.isStatic || (c = 0.5),
                        o.isStatic && (c = 0),
                        l.moveTo(o.position.x, o.position.y),
                        l.lineTo(
                          o.position.x + r.penetration.x * c,
                          o.position.y + r.penetration.y * c
                        );
                    }
                  u.wireframes
                    ? (l.strokeStyle = "rgba(255,165,0,0.5)")
                    : (l.strokeStyle = "orange"),
                    l.stroke();
                }),
                (i.inspector = function (t, e) {
                  t.engine;
                  var n,
                    i = t.selected,
                    r = t.render,
                    o = r.options;
                  if (o.hasBounds) {
                    var s = r.bounds.max.x - r.bounds.min.x,
                      a = r.bounds.max.y - r.bounds.min.y,
                      l = s / r.options.width,
                      u = a / r.options.height;
                    e.scale(1 / l, 1 / u),
                      e.translate(-r.bounds.min.x, -r.bounds.min.y);
                  }
                  for (var c = 0; c < i.length; c++) {
                    var d = i[c].data;
                    switch (
                      (e.translate(0.5, 0.5),
                      (e.lineWidth = 1),
                      (e.strokeStyle = "rgba(255,165,0,0.9)"),
                      e.setLineDash([1, 2]),
                      d.type)
                    ) {
                      case "body":
                        (n = d.bounds),
                          e.beginPath(),
                          e.rect(
                            Math.floor(n.min.x - 3),
                            Math.floor(n.min.y - 3),
                            Math.floor(n.max.x - n.min.x + 6),
                            Math.floor(n.max.y - n.min.y + 6)
                          ),
                          e.closePath(),
                          e.stroke();
                        break;
                      case "constraint":
                        var p = d.pointA;
                        d.bodyA && (p = d.pointB),
                          e.beginPath(),
                          e.arc(p.x, p.y, 10, 0, 2 * Math.PI),
                          e.closePath(),
                          e.stroke();
                    }
                    e.setLineDash([]), e.translate(-0.5, -0.5);
                  }
                  null !== t.selectStart &&
                    (e.translate(0.5, 0.5),
                    (e.lineWidth = 1),
                    (e.strokeStyle = "rgba(255,165,0,0.6)"),
                    (e.fillStyle = "rgba(255,165,0,0.1)"),
                    (n = t.selectBounds),
                    e.beginPath(),
                    e.rect(
                      Math.floor(n.min.x),
                      Math.floor(n.min.y),
                      Math.floor(n.max.x - n.min.x),
                      Math.floor(n.max.y - n.min.y)
                    ),
                    e.closePath(),
                    e.stroke(),
                    e.fill(),
                    e.translate(-0.5, -0.5)),
                    o.hasBounds && e.setTransform(1, 0, 0, 1, 0, 0);
                });
              var n = function (t, e) {
                  var n = t.engine,
                    r = t.timing,
                    o = r.historySize,
                    s = n.timing.timestamp;
                  (r.delta = e - r.lastTime || i._goodDelta),
                    (r.lastTime = e),
                    (r.timestampElapsed = s - r.lastTimestamp || 0),
                    (r.lastTimestamp = s),
                    r.deltaHistory.unshift(r.delta),
                    (r.deltaHistory.length = Math.min(
                      r.deltaHistory.length,
                      o
                    )),
                    r.engineDeltaHistory.unshift(n.timing.lastDelta),
                    (r.engineDeltaHistory.length = Math.min(
                      r.engineDeltaHistory.length,
                      o
                    )),
                    r.timestampElapsedHistory.unshift(r.timestampElapsed),
                    (r.timestampElapsedHistory.length = Math.min(
                      r.timestampElapsedHistory.length,
                      o
                    )),
                    r.engineElapsedHistory.unshift(n.timing.lastElapsed),
                    (r.engineElapsedHistory.length = Math.min(
                      r.engineElapsedHistory.length,
                      o
                    )),
                    r.elapsedHistory.unshift(r.lastElapsed),
                    (r.elapsedHistory.length = Math.min(
                      r.elapsedHistory.length,
                      o
                    ));
                },
                c = function (t) {
                  for (var e = 0, n = 0; n < t.length; n += 1) e += t[n];
                  return e / t.length || 0;
                },
                d = function (t, e) {
                  var n = document.createElement("canvas");
                  return (
                    (n.width = t),
                    (n.height = e),
                    (n.oncontextmenu = function () {
                      return !1;
                    }),
                    (n.onselectstart = function () {
                      return !1;
                    }),
                    n
                  );
                },
                p = function (t) {
                  var e = t.getContext("2d");
                  return (
                    (window.devicePixelRatio || 1) /
                    (e.webkitBackingStorePixelRatio ||
                      e.mozBackingStorePixelRatio ||
                      e.msBackingStorePixelRatio ||
                      e.oBackingStorePixelRatio ||
                      e.backingStorePixelRatio ||
                      1)
                  );
                },
                f = function (t, e) {
                  var n = t.textures[e];
                  return n || (((n = t.textures[e] = new Image()).src = e), n);
                },
                h = function (t, e) {
                  var n = e;
                  /(jpg|gif|png)$/.test(e) && (n = "url(" + e + ")"),
                    (t.canvas.style.background = n),
                    (t.canvas.style.backgroundSize = "contain"),
                    (t.currentBackground = e);
                };
            })();
          },
          function (t, e) {
            var n = {};
            (t.exports = n),
              (n.create = function (t) {
                return { vertex: t, normalImpulse: 0, tangentImpulse: 0 };
              });
          },
          function (t, e, n) {
            var i = {};
            t.exports = i;
            var r = n(7),
              o = n(19),
              s = n(14),
              a = n(20),
              l = n(4),
              u = n(5),
              c = n(10),
              d = n(0),
              p = n(6);
            (i.create = function (t) {
              t = t || {};
              var e = d.extend(
                {
                  positionIterations: 6,
                  velocityIterations: 4,
                  constraintIterations: 2,
                  enableSleeping: !1,
                  events: [],
                  plugin: {},
                  gravity: { x: 0, y: 1, scale: 0.001 },
                  timing: {
                    timestamp: 0,
                    timeScale: 1,
                    lastDelta: 0,
                    lastElapsed: 0,
                  },
                },
                t
              );
              return (
                (e.world = t.world || u.create({ label: "World" })),
                (e.pairs = t.pairs || a.create()),
                (e.detector = t.detector || s.create()),
                (e.grid = { buckets: [] }),
                (e.world.gravity = e.gravity),
                (e.broadphase = e.grid),
                (e.metrics = {}),
                e
              );
            }),
              (i.update = function (t, e, n) {
                var p = d.now();
                (e = e || 1e3 / 60), (n = n || 1);
                var f,
                  h = t.world,
                  m = t.detector,
                  v = t.pairs,
                  g = t.timing,
                  y = g.timestamp;
                (g.timestamp += e * g.timeScale),
                  (g.lastDelta = e * g.timeScale);
                var b = { timestamp: g.timestamp };
                l.trigger(t, "beforeUpdate", b);
                var x = u.allBodies(h),
                  w = u.allConstraints(h);
                for (
                  h.isModified && s.setBodies(m, x),
                    h.isModified && u.setModified(h, !1, !1, !0),
                    t.enableSleeping && r.update(x, g.timeScale),
                    i._bodiesApplyGravity(x, t.gravity),
                    i._bodiesUpdate(x, e, g.timeScale, n, h.bounds),
                    c.preSolveAll(x),
                    f = 0;
                  f < t.constraintIterations;
                  f++
                )
                  c.solveAll(w, g.timeScale);
                c.postSolveAll(x), (m.pairs = t.pairs);
                var D = s.collisions(m);
                for (
                  a.update(v, D, y),
                    t.enableSleeping && r.afterCollisions(v.list, g.timeScale),
                    v.collisionStart.length > 0 &&
                      l.trigger(t, "collisionStart", {
                        pairs: v.collisionStart,
                      }),
                    o.preSolvePosition(v.list),
                    f = 0;
                  f < t.positionIterations;
                  f++
                )
                  o.solvePosition(v.list, g.timeScale);
                for (
                  o.postSolvePosition(x), c.preSolveAll(x), f = 0;
                  f < t.constraintIterations;
                  f++
                )
                  c.solveAll(w, g.timeScale);
                for (
                  c.postSolveAll(x), o.preSolveVelocity(v.list), f = 0;
                  f < t.velocityIterations;
                  f++
                )
                  o.solveVelocity(v.list, g.timeScale);
                return (
                  v.collisionActive.length > 0 &&
                    l.trigger(t, "collisionActive", {
                      pairs: v.collisionActive,
                    }),
                  v.collisionEnd.length > 0 &&
                    l.trigger(t, "collisionEnd", { pairs: v.collisionEnd }),
                  i._bodiesClearForces(x),
                  l.trigger(t, "afterUpdate", b),
                  (t.timing.lastElapsed = d.now() - p),
                  t
                );
              }),
              (i.merge = function (t, e) {
                if ((d.extend(t, e), e.world)) {
                  (t.world = e.world), i.clear(t);
                  for (var n = u.allBodies(t.world), o = 0; o < n.length; o++) {
                    var s = n[o];
                    r.set(s, !1), (s.id = d.nextId());
                  }
                }
              }),
              (i.clear = function (t) {
                a.clear(t.pairs), s.clear(t.detector);
              }),
              (i._bodiesClearForces = function (t) {
                for (var e = 0; e < t.length; e++) {
                  var n = t[e];
                  (n.force.x = 0), (n.force.y = 0), (n.torque = 0);
                }
              }),
              (i._bodiesApplyGravity = function (t, e) {
                var n = void 0 !== e.scale ? e.scale : 0.001;
                if ((0 !== e.x || 0 !== e.y) && 0 !== n)
                  for (var i = 0; i < t.length; i++) {
                    var r = t[i];
                    r.isStatic ||
                      r.isSleeping ||
                      ((r.force.y += r.mass * e.y * n),
                      (r.force.x += r.mass * e.x * n));
                  }
              }),
              (i._bodiesUpdate = function (t, e, n, i, r) {
                for (var o = 0; o < t.length; o++) {
                  var s = t[o];
                  s.isStatic || s.isSleeping || p.update(s, e, n, i);
                }
              });
          },
          function (t, e, n) {
            var i = {};
            t.exports = i;
            var r = n(3),
              o = n(1);
            (i._restingThresh = 4),
              (i._restingThreshTangent = 6),
              (i._positionDampen = 0.9),
              (i._positionWarming = 0.8),
              (i._frictionNormalMultiplier = 5),
              (i.preSolvePosition = function (t) {
                var e,
                  n,
                  i,
                  r = t.length;
                for (e = 0; e < r; e++)
                  (n = t[e]).isActive &&
                    ((i = n.activeContacts.length),
                    (n.collision.parentA.totalContacts += i),
                    (n.collision.parentB.totalContacts += i));
              }),
              (i.solvePosition = function (t, e) {
                var n,
                  r,
                  o,
                  s,
                  a,
                  l,
                  u,
                  c,
                  d = i._positionDampen,
                  p = t.length;
                for (n = 0; n < p; n++)
                  (r = t[n]).isActive &&
                    !r.isSensor &&
                    ((s = (o = r.collision).parentA),
                    (a = o.parentB),
                    (l = o.normal),
                    (r.separation =
                      l.x *
                        (a.positionImpulse.x +
                          o.penetration.x -
                          s.positionImpulse.x) +
                      l.y *
                        (a.positionImpulse.y +
                          o.penetration.y -
                          s.positionImpulse.y)));
                for (n = 0; n < p; n++)
                  (r = t[n]).isActive &&
                    !r.isSensor &&
                    ((s = (o = r.collision).parentA),
                    (a = o.parentB),
                    (l = o.normal),
                    (c = (r.separation - r.slop) * e),
                    (s.isStatic || a.isStatic) && (c *= 2),
                    s.isStatic ||
                      s.isSleeping ||
                      ((u = d / s.totalContacts),
                      (s.positionImpulse.x += l.x * c * u),
                      (s.positionImpulse.y += l.y * c * u)),
                    a.isStatic ||
                      a.isSleeping ||
                      ((u = d / a.totalContacts),
                      (a.positionImpulse.x -= l.x * c * u),
                      (a.positionImpulse.y -= l.y * c * u)));
              }),
              (i.postSolvePosition = function (t) {
                for (
                  var e = i._positionWarming,
                    n = t.length,
                    s = r.translate,
                    a = o.update,
                    l = 0;
                  l < n;
                  l++
                ) {
                  var u = t[l],
                    c = u.positionImpulse,
                    d = c.x,
                    p = c.y,
                    f = u.velocity;
                  if (((u.totalContacts = 0), 0 !== d || 0 !== p)) {
                    for (var h = 0; h < u.parts.length; h++) {
                      var m = u.parts[h];
                      s(m.vertices, c),
                        a(m.bounds, m.vertices, f),
                        (m.position.x += d),
                        (m.position.y += p);
                    }
                    (u.positionPrev.x += d),
                      (u.positionPrev.y += p),
                      d * f.x + p * f.y < 0
                        ? ((c.x = 0), (c.y = 0))
                        : ((c.x *= e), (c.y *= e));
                  }
                }
              }),
              (i.preSolveVelocity = function (t) {
                var e,
                  n,
                  i = t.length;
                for (e = 0; e < i; e++) {
                  var r = t[e];
                  if (r.isActive && !r.isSensor) {
                    var o = r.activeContacts,
                      s = o.length,
                      a = r.collision,
                      l = a.parentA,
                      u = a.parentB,
                      c = a.normal,
                      d = a.tangent;
                    for (n = 0; n < s; n++) {
                      var p = o[n],
                        f = p.vertex,
                        h = p.normalImpulse,
                        m = p.tangentImpulse;
                      if (0 !== h || 0 !== m) {
                        var v = c.x * h + d.x * m,
                          g = c.y * h + d.y * m;
                        l.isStatic ||
                          l.isSleeping ||
                          ((l.positionPrev.x += v * l.inverseMass),
                          (l.positionPrev.y += g * l.inverseMass),
                          (l.anglePrev +=
                            l.inverseInertia *
                            ((f.x - l.position.x) * g -
                              (f.y - l.position.y) * v))),
                          u.isStatic ||
                            u.isSleeping ||
                            ((u.positionPrev.x -= v * u.inverseMass),
                            (u.positionPrev.y -= g * u.inverseMass),
                            (u.anglePrev -=
                              u.inverseInertia *
                              ((f.x - u.position.x) * g -
                                (f.y - u.position.y) * v)));
                      }
                    }
                  }
                }
              }),
              (i.solveVelocity = function (t, e) {
                var n,
                  r,
                  o,
                  s,
                  a = e * e,
                  l = i._restingThresh * a,
                  u = i._frictionNormalMultiplier,
                  c = i._restingThreshTangent * a,
                  d = Number.MAX_VALUE,
                  p = t.length;
                for (o = 0; o < p; o++) {
                  var f = t[o];
                  if (f.isActive && !f.isSensor) {
                    var h = f.collision,
                      m = h.parentA,
                      v = h.parentB,
                      g = m.velocity,
                      y = v.velocity,
                      b = h.normal.x,
                      x = h.normal.y,
                      w = h.tangent.x,
                      D = h.tangent.y,
                      _ = f.activeContacts,
                      S = _.length,
                      C = 1 / S,
                      E = m.inverseMass + v.inverseMass,
                      T = f.friction * f.frictionStatic * u * a;
                    for (
                      g.x = m.position.x - m.positionPrev.x,
                        g.y = m.position.y - m.positionPrev.y,
                        y.x = v.position.x - v.positionPrev.x,
                        y.y = v.position.y - v.positionPrev.y,
                        m.angularVelocity = m.angle - m.anglePrev,
                        v.angularVelocity = v.angle - v.anglePrev,
                        s = 0;
                      s < S;
                      s++
                    ) {
                      var P = _[s],
                        A = P.vertex,
                        k = A.x - m.position.x,
                        O = A.y - m.position.y,
                        M = A.x - v.position.x,
                        F = A.y - v.position.y,
                        B = g.x - O * m.angularVelocity,
                        L = g.y + k * m.angularVelocity,
                        I = B - (y.x - F * v.angularVelocity),
                        j = L - (y.y + M * v.angularVelocity),
                        R = b * I + x * j,
                        z = w * I + D * j,
                        N = f.separation + R,
                        q = Math.min(N, 1),
                        W = (q = N < 0 ? 0 : q) * T;
                      z > W || -z > W
                        ? ((r = z > 0 ? z : -z),
                          (n = f.friction * (z > 0 ? 1 : -1) * a) < -r
                            ? (n = -r)
                            : n > r && (n = r))
                        : ((n = z), (r = d));
                      var V = k * x - O * b,
                        H = M * x - F * b,
                        G =
                          C /
                          (E +
                            m.inverseInertia * V * V +
                            v.inverseInertia * H * H),
                        $ = (1 + f.restitution) * R * G;
                      if (((n *= G), R * R > l && R < 0)) P.normalImpulse = 0;
                      else {
                        var X = P.normalImpulse;
                        (P.normalImpulse += $),
                          (P.normalImpulse = Math.min(P.normalImpulse, 0)),
                          ($ = P.normalImpulse - X);
                      }
                      if (z * z > c) P.tangentImpulse = 0;
                      else {
                        var Y = P.tangentImpulse;
                        (P.tangentImpulse += n),
                          P.tangentImpulse < -r && (P.tangentImpulse = -r),
                          P.tangentImpulse > r && (P.tangentImpulse = r),
                          (n = P.tangentImpulse - Y);
                      }
                      var U = b * $ + w * n,
                        Q = x * $ + D * n;
                      m.isStatic ||
                        m.isSleeping ||
                        ((m.positionPrev.x += U * m.inverseMass),
                        (m.positionPrev.y += Q * m.inverseMass),
                        (m.anglePrev += (k * Q - O * U) * m.inverseInertia)),
                        v.isStatic ||
                          v.isSleeping ||
                          ((v.positionPrev.x -= U * v.inverseMass),
                          (v.positionPrev.y -= Q * v.inverseMass),
                          (v.anglePrev -= (M * Q - F * U) * v.inverseInertia));
                    }
                  }
                }
              });
          },
          function (t, e, n) {
            var i = {};
            t.exports = i;
            var r = n(9),
              o = n(0);
            (i.create = function (t) {
              return o.extend(
                {
                  table: {},
                  list: [],
                  collisionStart: [],
                  collisionActive: [],
                  collisionEnd: [],
                },
                t
              );
            }),
              (i.update = function (t, e, n) {
                var i,
                  o,
                  s,
                  a,
                  l = t.list,
                  u = l.length,
                  c = t.table,
                  d = e.length,
                  p = t.collisionStart,
                  f = t.collisionEnd,
                  h = t.collisionActive;
                for (
                  p.length = 0, f.length = 0, h.length = 0, a = 0;
                  a < u;
                  a++
                )
                  l[a].confirmedActive = !1;
                for (a = 0; a < d; a++)
                  (s = (i = e[a]).pair)
                    ? (s.isActive ? h.push(s) : p.push(s),
                      r.update(s, i, n),
                      (s.confirmedActive = !0))
                    : ((c[(s = r.create(i, n)).id] = s), p.push(s), l.push(s));
                var m = [];
                for (u = l.length, a = 0; a < u; a++)
                  (s = l[a]).confirmedActive ||
                    (r.setActive(s, !1, n),
                    f.push(s),
                    s.collision.bodyA.isSleeping ||
                      s.collision.bodyB.isSleeping ||
                      m.push(a));
                for (a = 0; a < m.length; a++)
                  (s = l[(o = m[a] - a)]), l.splice(o, 1), delete c[s.id];
              }),
              (i.clear = function (t) {
                return (
                  (t.table = {}),
                  (t.list.length = 0),
                  (t.collisionStart.length = 0),
                  (t.collisionActive.length = 0),
                  (t.collisionEnd.length = 0),
                  t
                );
              });
          },
          function (t, e, n) {
            var i = (t.exports = n(22));
            (i.Axes = n(11)),
              (i.Bodies = n(12)),
              (i.Body = n(6)),
              (i.Bounds = n(1)),
              (i.Collision = n(8)),
              (i.Common = n(0)),
              (i.Composite = n(5)),
              (i.Composites = n(23)),
              (i.Constraint = n(10)),
              (i.Contact = n(17)),
              (i.Detector = n(14)),
              (i.Engine = n(18)),
              (i.Events = n(4)),
              (i.Grid = n(24)),
              (i.Mouse = n(13)),
              (i.MouseConstraint = n(25)),
              (i.Pair = n(9)),
              (i.Pairs = n(20)),
              (i.Plugin = n(15)),
              (i.Query = n(26)),
              (i.Render = n(16)),
              (i.Resolver = n(19)),
              (i.Runner = n(27)),
              (i.SAT = n(28)),
              (i.Sleeping = n(7)),
              (i.Svg = n(29)),
              (i.Vector = n(2)),
              (i.Vertices = n(3)),
              (i.World = n(30)),
              (i.Engine.run = i.Runner.run),
              i.Common.deprecated(
                i.Engine,
                "run",
                "Engine.run ➤ use Matter.Runner.run(engine) instead"
              );
          },
          function (t, e, n) {
            var i = {};
            t.exports = i;
            var r = n(15),
              o = n(0);
            (i.name = "matter-js"),
              (i.version = "0.18.0"),
              (i.uses = []),
              (i.used = []),
              (i.use = function () {
                r.use(i, Array.prototype.slice.call(arguments));
              }),
              (i.before = function (t, e) {
                return (
                  (t = t.replace(/^Matter./, "")), o.chainPathBefore(i, t, e)
                );
              }),
              (i.after = function (t, e) {
                return (
                  (t = t.replace(/^Matter./, "")), o.chainPathAfter(i, t, e)
                );
              });
          },
          function (t, e, n) {
            var i = {};
            t.exports = i;
            var r = n(5),
              o = n(10),
              s = n(0),
              a = n(6),
              l = n(12),
              u = s.deprecated;
            (i.stack = function (t, e, n, i, o, s, l) {
              for (
                var u,
                  c = r.create({ label: "Stack" }),
                  d = t,
                  p = e,
                  f = 0,
                  h = 0;
                h < i;
                h++
              ) {
                for (var m = 0, v = 0; v < n; v++) {
                  var g = l(d, p, v, h, u, f);
                  if (g) {
                    var y = g.bounds.max.y - g.bounds.min.y,
                      b = g.bounds.max.x - g.bounds.min.x;
                    y > m && (m = y),
                      a.translate(g, { x: 0.5 * b, y: 0.5 * y }),
                      (d = g.bounds.max.x + o),
                      r.addBody(c, g),
                      (u = g),
                      (f += 1);
                  } else d += o;
                }
                (p += m + s), (d = t);
              }
              return c;
            }),
              (i.chain = function (t, e, n, i, a, l) {
                for (var u = t.bodies, c = 1; c < u.length; c++) {
                  var d = u[c - 1],
                    p = u[c],
                    f = d.bounds.max.y - d.bounds.min.y,
                    h = d.bounds.max.x - d.bounds.min.x,
                    m = p.bounds.max.y - p.bounds.min.y,
                    v = {
                      bodyA: d,
                      pointA: { x: h * e, y: f * n },
                      bodyB: p,
                      pointB: {
                        x: (p.bounds.max.x - p.bounds.min.x) * i,
                        y: m * a,
                      },
                    },
                    g = s.extend(v, l);
                  r.addConstraint(t, o.create(g));
                }
                return (t.label += " Chain"), t;
              }),
              (i.mesh = function (t, e, n, i, a) {
                var l,
                  u,
                  c,
                  d,
                  p,
                  f = t.bodies;
                for (l = 0; l < n; l++) {
                  for (u = 1; u < e; u++)
                    (c = f[u - 1 + l * e]),
                      (d = f[u + l * e]),
                      r.addConstraint(
                        t,
                        o.create(s.extend({ bodyA: c, bodyB: d }, a))
                      );
                  if (l > 0)
                    for (u = 0; u < e; u++)
                      (c = f[u + (l - 1) * e]),
                        (d = f[u + l * e]),
                        r.addConstraint(
                          t,
                          o.create(s.extend({ bodyA: c, bodyB: d }, a))
                        ),
                        i &&
                          u > 0 &&
                          ((p = f[u - 1 + (l - 1) * e]),
                          r.addConstraint(
                            t,
                            o.create(s.extend({ bodyA: p, bodyB: d }, a))
                          )),
                        i &&
                          u < e - 1 &&
                          ((p = f[u + 1 + (l - 1) * e]),
                          r.addConstraint(
                            t,
                            o.create(s.extend({ bodyA: p, bodyB: d }, a))
                          ));
                }
                return (t.label += " Mesh"), t;
              }),
              (i.pyramid = function (t, e, n, r, o, s, l) {
                return i.stack(t, e, n, r, o, s, function (e, i, s, u, c, d) {
                  var p = Math.min(r, Math.ceil(n / 2)),
                    f = c ? c.bounds.max.x - c.bounds.min.x : 0;
                  if (!(u > p || s < (u = p - u) || s > n - 1 - u))
                    return (
                      1 === d &&
                        a.translate(c, {
                          x: (s + (n % 2 == 1 ? 1 : -1)) * f,
                          y: 0,
                        }),
                      l(t + (c ? s * f : 0) + s * o, i, s, u, c, d)
                    );
                });
              }),
              (i.newtonsCradle = function (t, e, n, i, s) {
                for (
                  var a = r.create({ label: "Newtons Cradle" }), u = 0;
                  u < n;
                  u++
                ) {
                  var c = l.circle(t + u * (1.9 * i), e + s, i, {
                      inertia: 1 / 0,
                      restitution: 1,
                      friction: 0,
                      frictionAir: 1e-4,
                      slop: 1,
                    }),
                    d = o.create({
                      pointA: { x: t + u * (1.9 * i), y: e },
                      bodyB: c,
                    });
                  r.addBody(a, c), r.addConstraint(a, d);
                }
                return a;
              }),
              u(
                i,
                "newtonsCradle",
                "Composites.newtonsCradle ➤ moved to newtonsCradle example"
              ),
              (i.car = function (t, e, n, i, s) {
                var u = a.nextGroup(!0),
                  c = 0.5 * -n + 20,
                  d = 0.5 * n - 20,
                  p = r.create({ label: "Car" }),
                  f = l.rectangle(t, e, n, i, {
                    collisionFilter: { group: u },
                    chamfer: { radius: 0.5 * i },
                    density: 2e-4,
                  }),
                  h = l.circle(t + c, e + 0, s, {
                    collisionFilter: { group: u },
                    friction: 0.8,
                  }),
                  m = l.circle(t + d, e + 0, s, {
                    collisionFilter: { group: u },
                    friction: 0.8,
                  }),
                  v = o.create({
                    bodyB: f,
                    pointB: { x: c, y: 0 },
                    bodyA: h,
                    stiffness: 1,
                    length: 0,
                  }),
                  g = o.create({
                    bodyB: f,
                    pointB: { x: d, y: 0 },
                    bodyA: m,
                    stiffness: 1,
                    length: 0,
                  });
                return (
                  r.addBody(p, f),
                  r.addBody(p, h),
                  r.addBody(p, m),
                  r.addConstraint(p, v),
                  r.addConstraint(p, g),
                  p
                );
              }),
              u(i, "car", "Composites.car ➤ moved to car example"),
              (i.softBody = function (t, e, n, r, o, a, u, c, d, p) {
                (d = s.extend({ inertia: 1 / 0 }, d)),
                  (p = s.extend(
                    { stiffness: 0.2, render: { type: "line", anchors: !1 } },
                    p
                  ));
                var f = i.stack(t, e, n, r, o, a, function (t, e) {
                  return l.circle(t, e, c, d);
                });
                return i.mesh(f, n, r, u, p), (f.label = "Soft Body"), f;
              }),
              u(
                i,
                "softBody",
                "Composites.softBody ➤ moved to softBody and cloth examples"
              );
          },
          function (t, e, n) {
            var i = {};
            t.exports = i;
            var r = n(9),
              o = n(0),
              s = o.deprecated;
            (i.create = function (t) {
              return o.extend(
                {
                  buckets: {},
                  pairs: {},
                  pairsList: [],
                  bucketWidth: 48,
                  bucketHeight: 48,
                },
                t
              );
            }),
              (i.update = function (t, e, n, r) {
                var o,
                  s,
                  a,
                  l,
                  u,
                  c = n.world,
                  d = t.buckets,
                  p = !1;
                for (o = 0; o < e.length; o++) {
                  var f = e[o];
                  if (
                    (!f.isSleeping || r) &&
                    (!c.bounds ||
                      !(
                        f.bounds.max.x < c.bounds.min.x ||
                        f.bounds.min.x > c.bounds.max.x ||
                        f.bounds.max.y < c.bounds.min.y ||
                        f.bounds.min.y > c.bounds.max.y
                      ))
                  ) {
                    var h = i._getRegion(t, f);
                    if (!f.region || h.id !== f.region.id || r) {
                      (f.region && !r) || (f.region = h);
                      var m = i._regionUnion(h, f.region);
                      for (s = m.startCol; s <= m.endCol; s++)
                        for (a = m.startRow; a <= m.endRow; a++) {
                          l = d[(u = i._getBucketId(s, a))];
                          var v =
                              s >= h.startCol &&
                              s <= h.endCol &&
                              a >= h.startRow &&
                              a <= h.endRow,
                            g =
                              s >= f.region.startCol &&
                              s <= f.region.endCol &&
                              a >= f.region.startRow &&
                              a <= f.region.endRow;
                          !v && g && g && l && i._bucketRemoveBody(t, l, f),
                            (f.region === h || (v && !g) || r) &&
                              (l || (l = i._createBucket(d, u)),
                              i._bucketAddBody(t, l, f));
                        }
                      (f.region = h), (p = !0);
                    }
                  }
                }
                p && (t.pairsList = i._createActivePairsList(t));
              }),
              s(i, "update", "Grid.update ➤ replaced by Matter.Detector"),
              (i.clear = function (t) {
                (t.buckets = {}), (t.pairs = {}), (t.pairsList = []);
              }),
              s(i, "clear", "Grid.clear ➤ replaced by Matter.Detector"),
              (i._regionUnion = function (t, e) {
                var n = Math.min(t.startCol, e.startCol),
                  r = Math.max(t.endCol, e.endCol),
                  o = Math.min(t.startRow, e.startRow),
                  s = Math.max(t.endRow, e.endRow);
                return i._createRegion(n, r, o, s);
              }),
              (i._getRegion = function (t, e) {
                var n = e.bounds,
                  r = Math.floor(n.min.x / t.bucketWidth),
                  o = Math.floor(n.max.x / t.bucketWidth),
                  s = Math.floor(n.min.y / t.bucketHeight),
                  a = Math.floor(n.max.y / t.bucketHeight);
                return i._createRegion(r, o, s, a);
              }),
              (i._createRegion = function (t, e, n, i) {
                return {
                  id: t + "," + e + "," + n + "," + i,
                  startCol: t,
                  endCol: e,
                  startRow: n,
                  endRow: i,
                };
              }),
              (i._getBucketId = function (t, e) {
                return "C" + t + "R" + e;
              }),
              (i._createBucket = function (t, e) {
                return (t[e] = []);
              }),
              (i._bucketAddBody = function (t, e, n) {
                var i,
                  o = t.pairs,
                  s = r.id,
                  a = e.length;
                for (i = 0; i < a; i++) {
                  var l = e[i];
                  if (!(n.id === l.id || (n.isStatic && l.isStatic))) {
                    var u = s(n, l),
                      c = o[u];
                    c ? (c[2] += 1) : (o[u] = [n, l, 1]);
                  }
                }
                e.push(n);
              }),
              (i._bucketRemoveBody = function (t, e, n) {
                var i,
                  s = t.pairs,
                  a = r.id;
                e.splice(o.indexOf(e, n), 1);
                var l = e.length;
                for (i = 0; i < l; i++) {
                  var u = s[a(n, e[i])];
                  u && (u[2] -= 1);
                }
              }),
              (i._createActivePairsList = function (t) {
                var e,
                  n,
                  i = t.pairs,
                  r = o.keys(i),
                  s = r.length,
                  a = [];
                for (n = 0; n < s; n++)
                  (e = i[r[n]])[2] > 0 ? a.push(e) : delete i[r[n]];
                return a;
              });
          },
          function (t, e, n) {
            var i = {};
            t.exports = i;
            var r = n(3),
              o = n(7),
              s = n(13),
              a = n(4),
              l = n(14),
              u = n(10),
              c = n(5),
              d = n(0),
              p = n(1);
            (i.create = function (t, e) {
              var n = (t ? t.mouse : null) || (e ? e.mouse : null);
              n ||
                (t && t.render && t.render.canvas
                  ? (n = s.create(t.render.canvas))
                  : e && e.element
                  ? (n = s.create(e.element))
                  : ((n = s.create()),
                    d.warn(
                      "MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected"
                    )));
              var r = {
                  type: "mouseConstraint",
                  mouse: n,
                  element: null,
                  body: null,
                  constraint: u.create({
                    label: "Mouse Constraint",
                    pointA: n.position,
                    pointB: { x: 0, y: 0 },
                    length: 0.01,
                    stiffness: 0.1,
                    angularStiffness: 1,
                    render: { strokeStyle: "#90EE90", lineWidth: 3 },
                  }),
                  collisionFilter: { category: 1, mask: 4294967295, group: 0 },
                },
                o = d.extend(r, e);
              return (
                a.on(t, "beforeUpdate", function () {
                  var e = c.allBodies(t.world);
                  i.update(o, e), i._triggerEvents(o);
                }),
                o
              );
            }),
              (i.update = function (t, e) {
                var n = t.mouse,
                  i = t.constraint,
                  s = t.body;
                if (0 === n.button) {
                  if (i.bodyB) o.set(i.bodyB, !1), (i.pointA = n.position);
                  else
                    for (var u = 0; u < e.length; u++)
                      if (
                        ((s = e[u]),
                        p.contains(s.bounds, n.position) &&
                          l.canCollide(s.collisionFilter, t.collisionFilter))
                      )
                        for (
                          var c = s.parts.length > 1 ? 1 : 0;
                          c < s.parts.length;
                          c++
                        ) {
                          var d = s.parts[c];
                          if (r.contains(d.vertices, n.position)) {
                            (i.pointA = n.position),
                              (i.bodyB = t.body = s),
                              (i.pointB = {
                                x: n.position.x - s.position.x,
                                y: n.position.y - s.position.y,
                              }),
                              (i.angleB = s.angle),
                              o.set(s, !1),
                              a.trigger(t, "startdrag", { mouse: n, body: s });
                            break;
                          }
                        }
                } else
                  (i.bodyB = t.body = null),
                    (i.pointB = null),
                    s && a.trigger(t, "enddrag", { mouse: n, body: s });
              }),
              (i._triggerEvents = function (t) {
                var e = t.mouse,
                  n = e.sourceEvents;
                n.mousemove && a.trigger(t, "mousemove", { mouse: e }),
                  n.mousedown && a.trigger(t, "mousedown", { mouse: e }),
                  n.mouseup && a.trigger(t, "mouseup", { mouse: e }),
                  s.clearSourceEvents(e);
              });
          },
          function (t, e, n) {
            var i = {};
            t.exports = i;
            var r = n(2),
              o = n(8),
              s = n(1),
              a = n(12),
              l = n(3);
            (i.collides = function (t, e) {
              for (
                var n = [],
                  i = e.length,
                  r = t.bounds,
                  a = o.collides,
                  l = s.overlaps,
                  u = 0;
                u < i;
                u++
              ) {
                var c = e[u],
                  d = c.parts.length,
                  p = 1 === d ? 0 : 1;
                if (l(c.bounds, r))
                  for (var f = p; f < d; f++) {
                    var h = c.parts[f];
                    if (l(h.bounds, r)) {
                      var m = a(h, t);
                      if (m) {
                        n.push(m);
                        break;
                      }
                    }
                  }
              }
              return n;
            }),
              (i.ray = function (t, e, n, o) {
                o = o || 1e-100;
                for (
                  var s = r.angle(e, n),
                    l = r.magnitude(r.sub(e, n)),
                    u = 0.5 * (n.x + e.x),
                    c = 0.5 * (n.y + e.y),
                    d = a.rectangle(u, c, l, o, { angle: s }),
                    p = i.collides(d, t),
                    f = 0;
                  f < p.length;
                  f += 1
                ) {
                  var h = p[f];
                  h.body = h.bodyB = h.bodyA;
                }
                return p;
              }),
              (i.region = function (t, e, n) {
                for (var i = [], r = 0; r < t.length; r++) {
                  var o = t[r],
                    a = s.overlaps(o.bounds, e);
                  ((a && !n) || (!a && n)) && i.push(o);
                }
                return i;
              }),
              (i.point = function (t, e) {
                for (var n = [], i = 0; i < t.length; i++) {
                  var r = t[i];
                  if (s.contains(r.bounds, e))
                    for (
                      var o = 1 === r.parts.length ? 0 : 1;
                      o < r.parts.length;
                      o++
                    ) {
                      var a = r.parts[o];
                      if (
                        s.contains(a.bounds, e) &&
                        l.contains(a.vertices, e)
                      ) {
                        n.push(r);
                        break;
                      }
                    }
                }
                return n;
              });
          },
          function (t, e, n) {
            var i = {};
            t.exports = i;
            var r,
              o,
              s,
              a = n(4),
              l = n(18),
              u = n(0);
            "undefined" != typeof window &&
              ((r =
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.msRequestAnimationFrame),
              (o =
                window.cancelAnimationFrame ||
                window.mozCancelAnimationFrame ||
                window.webkitCancelAnimationFrame ||
                window.msCancelAnimationFrame)),
              r ||
                ((r = function (t) {
                  s = setTimeout(function () {
                    t(u.now());
                  }, 1e3 / 60);
                }),
                (o = function () {
                  clearTimeout(s);
                })),
              (i.create = function (t) {
                var e = u.extend(
                  {
                    fps: 60,
                    correction: 1,
                    deltaSampleSize: 60,
                    counterTimestamp: 0,
                    frameCounter: 0,
                    deltaHistory: [],
                    timePrev: null,
                    timeScalePrev: 1,
                    frameRequestId: null,
                    isFixed: !1,
                    enabled: !0,
                  },
                  t
                );
                return (
                  (e.delta = e.delta || 1e3 / e.fps),
                  (e.deltaMin = e.deltaMin || 1e3 / e.fps),
                  (e.deltaMax = e.deltaMax || 1e3 / (0.5 * e.fps)),
                  (e.fps = 1e3 / e.delta),
                  e
                );
              }),
              (i.run = function (t, e) {
                return (
                  void 0 !== t.positionIterations &&
                    ((e = t), (t = i.create())),
                  (function n(o) {
                    (t.frameRequestId = r(n)),
                      o && t.enabled && i.tick(t, e, o);
                  })(),
                  t
                );
              }),
              (i.tick = function (t, e, n) {
                var i,
                  r = e.timing,
                  o = 1,
                  s = { timestamp: r.timestamp };
                a.trigger(t, "beforeTick", s),
                  t.isFixed
                    ? (i = t.delta)
                    : ((i = n - t.timePrev || t.delta),
                      (t.timePrev = n),
                      t.deltaHistory.push(i),
                      (t.deltaHistory = t.deltaHistory.slice(
                        -t.deltaSampleSize
                      )),
                      (o =
                        (i =
                          (i =
                            (i = Math.min.apply(null, t.deltaHistory)) <
                            t.deltaMin
                              ? t.deltaMin
                              : i) > t.deltaMax
                            ? t.deltaMax
                            : i) / t.delta),
                      (t.delta = i)),
                  0 !== t.timeScalePrev && (o *= r.timeScale / t.timeScalePrev),
                  0 === r.timeScale && (o = 0),
                  (t.timeScalePrev = r.timeScale),
                  (t.correction = o),
                  (t.frameCounter += 1),
                  n - t.counterTimestamp >= 1e3 &&
                    ((t.fps =
                      t.frameCounter * ((n - t.counterTimestamp) / 1e3)),
                    (t.counterTimestamp = n),
                    (t.frameCounter = 0)),
                  a.trigger(t, "tick", s),
                  a.trigger(t, "beforeUpdate", s),
                  l.update(e, i, o),
                  a.trigger(t, "afterUpdate", s),
                  a.trigger(t, "afterTick", s);
              }),
              (i.stop = function (t) {
                o(t.frameRequestId);
              }),
              (i.start = function (t, e) {
                i.run(t, e);
              });
          },
          function (t, e, n) {
            var i = {};
            t.exports = i;
            var r = n(8),
              o = n(0).deprecated;
            (i.collides = function (t, e) {
              return r.collides(t, e);
            }),
              o(i, "collides", "SAT.collides ➤ replaced by Collision.collides");
          },
          function (t, e, n) {
            var i = {};
            (t.exports = i), n(1);
            var r = n(0);
            (i.pathToVertices = function (t, e) {
              "undefined" == typeof window ||
                "SVGPathSeg" in window ||
                r.warn(
                  "Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required."
                );
              var n,
                o,
                s,
                a,
                l,
                u,
                c,
                d,
                p,
                f,
                h,
                m = [],
                v = 0,
                g = 0,
                y = 0;
              e = e || 15;
              var b = function (t, e, n) {
                  var i = n % 2 == 1 && n > 1;
                  if (!p || t != p.x || e != p.y) {
                    p && i ? ((f = p.x), (h = p.y)) : ((f = 0), (h = 0));
                    var r = { x: f + t, y: h + e };
                    (!i && p) || (p = r), m.push(r), (g = f + t), (y = h + e);
                  }
                },
                x = function (t) {
                  var e = t.pathSegTypeAsLetter.toUpperCase();
                  if ("Z" !== e) {
                    switch (e) {
                      case "M":
                      case "L":
                      case "T":
                      case "C":
                      case "S":
                      case "Q":
                        (g = t.x), (y = t.y);
                        break;
                      case "H":
                        g = t.x;
                        break;
                      case "V":
                        y = t.y;
                    }
                    b(g, y, t.pathSegType);
                  }
                };
              for (
                i._svgPathToAbsolute(t), s = t.getTotalLength(), u = [], n = 0;
                n < t.pathSegList.numberOfItems;
                n += 1
              )
                u.push(t.pathSegList.getItem(n));
              for (c = u.concat(); v < s; ) {
                if ((l = u[t.getPathSegAtLength(v)]) != d) {
                  for (; c.length && c[0] != l; ) x(c.shift());
                  d = l;
                }
                switch (l.pathSegTypeAsLetter.toUpperCase()) {
                  case "C":
                  case "T":
                  case "S":
                  case "Q":
                  case "A":
                    (a = t.getPointAtLength(v)), b(a.x, a.y, 0);
                }
                v += e;
              }
              for (n = 0, o = c.length; n < o; ++n) x(c[n]);
              return m;
            }),
              (i._svgPathToAbsolute = function (t) {
                for (
                  var e,
                    n,
                    i,
                    r,
                    o,
                    s,
                    a = t.pathSegList,
                    l = 0,
                    u = 0,
                    c = a.numberOfItems,
                    d = 0;
                  d < c;
                  ++d
                ) {
                  var p = a.getItem(d),
                    f = p.pathSegTypeAsLetter;
                  if (/[MLHVCSQTA]/.test(f))
                    "x" in p && (l = p.x), "y" in p && (u = p.y);
                  else
                    switch (
                      ("x1" in p && (i = l + p.x1),
                      "x2" in p && (o = l + p.x2),
                      "y1" in p && (r = u + p.y1),
                      "y2" in p && (s = u + p.y2),
                      "x" in p && (l += p.x),
                      "y" in p && (u += p.y),
                      f)
                    ) {
                      case "m":
                        a.replaceItem(t.createSVGPathSegMovetoAbs(l, u), d);
                        break;
                      case "l":
                        a.replaceItem(t.createSVGPathSegLinetoAbs(l, u), d);
                        break;
                      case "h":
                        a.replaceItem(
                          t.createSVGPathSegLinetoHorizontalAbs(l),
                          d
                        );
                        break;
                      case "v":
                        a.replaceItem(
                          t.createSVGPathSegLinetoVerticalAbs(u),
                          d
                        );
                        break;
                      case "c":
                        a.replaceItem(
                          t.createSVGPathSegCurvetoCubicAbs(l, u, i, r, o, s),
                          d
                        );
                        break;
                      case "s":
                        a.replaceItem(
                          t.createSVGPathSegCurvetoCubicSmoothAbs(l, u, o, s),
                          d
                        );
                        break;
                      case "q":
                        a.replaceItem(
                          t.createSVGPathSegCurvetoQuadraticAbs(l, u, i, r),
                          d
                        );
                        break;
                      case "t":
                        a.replaceItem(
                          t.createSVGPathSegCurvetoQuadraticSmoothAbs(l, u),
                          d
                        );
                        break;
                      case "a":
                        a.replaceItem(
                          t.createSVGPathSegArcAbs(
                            l,
                            u,
                            p.r1,
                            p.r2,
                            p.angle,
                            p.largeArcFlag,
                            p.sweepFlag
                          ),
                          d
                        );
                        break;
                      case "z":
                      case "Z":
                        (l = e), (u = n);
                    }
                  ("M" != f && "m" != f) || ((e = l), (n = u));
                }
              });
          },
          function (t, e, n) {
            var i = {};
            t.exports = i;
            var r = n(5);
            n(0),
              (i.create = r.create),
              (i.add = r.add),
              (i.remove = r.remove),
              (i.clear = r.clear),
              (i.addComposite = r.addComposite),
              (i.addBody = r.addBody),
              (i.addConstraint = r.addConstraint);
          },
        ]);
      }),
        (t.exports = n());
    }.call(this, n(31)));
  },
  function (t, e, n) {
    (function (e) {
      var n = function (t) {
        return t && t.Math == Math && t;
      };
      t.exports =
        n("object" == typeof globalThis && globalThis) ||
        n("object" == typeof window && window) ||
        n("object" == typeof self && self) ||
        n("object" == typeof e && e) ||
        (function () {
          return this;
        })() ||
        Function("return this")();
    }.call(this, n(31)));
  },
  function (t, e) {
    var n = Function.prototype,
      i = n.bind,
      r = n.call,
      o = i && i.bind(r);
    t.exports = i
      ? function (t) {
          return t && o(r, t);
        }
      : function (t) {
          return (
            t &&
            function () {
              return r.apply(t, arguments);
            }
          );
        };
  },
  function (t, e) {
    t.exports = function (t) {
      return "function" == typeof t;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  function (t, e, n) {
    var i = n(1),
      r = n(57),
      o = n(7),
      s = n(36),
      a = n(58),
      l = n(59),
      u = r("wks"),
      c = i.Symbol,
      d = c && c.for,
      p = l ? c : (c && c.withoutSetter) || s;
    t.exports = function (t) {
      if (!o(u, t) || (!a && "string" != typeof u[t])) {
        var e = "Symbol." + t;
        a && o(c, t) ? (u[t] = c[t]) : (u[t] = l && d ? d(e) : p(e));
      }
      return u[t];
    };
  },
  function (t, e, n) {
    var i = n(3);
    t.exports = function (t) {
      return "object" == typeof t ? null !== t : i(t);
    };
  },
  function (t, e, n) {
    var i = n(2),
      r = n(17),
      o = i({}.hasOwnProperty);
    t.exports =
      Object.hasOwn ||
      function (t, e) {
        return o(r(t), e);
      };
  },
  function (t, e, n) {
    var i = n(1),
      r = n(6),
      o = i.String,
      s = i.TypeError;
    t.exports = function (t) {
      if (r(t)) return t;
      throw s(o(t) + " is not an object");
    };
  },
  function (t, e, n) {
    var i = n(4);
    t.exports = !i(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    });
  },
  function (t, e, n) {
    var i = n(1),
      r = n(9),
      o = n(60),
      s = n(8),
      a = n(37),
      l = i.TypeError,
      u = Object.defineProperty;
    e.f = r
      ? u
      : function (t, e, n) {
          if ((s(t), (e = a(e)), s(n), o))
            try {
              return u(t, e, n);
            } catch (t) {}
          if ("get" in n || "set" in n) throw l("Accessors not supported");
          return "value" in n && (t[e] = n.value), t;
        };
  },
  function (t, e) {
    var n = Function.prototype.call;
    t.exports = n.bind
      ? n.bind(n)
      : function () {
          return n.apply(n, arguments);
        };
  },
  function (t, e, n) {
    var i = n(30),
      r = n(32);
    t.exports = function (t) {
      return i(r(t));
    };
  },
  function (t, e, n) {
    var i = n(1),
      r = n(3),
      o = function (t) {
        return r(t) ? t : void 0;
      };
    t.exports = function (t, e) {
      return arguments.length < 2 ? o(i[t]) : i[t] && i[t][e];
    };
  },
  function (t, e, n) {
    var i,
      r,
      o,
      s = n(65),
      a = n(1),
      l = n(2),
      u = n(6),
      c = n(24),
      d = n(7),
      p = n(34),
      f = n(44),
      h = n(23),
      m = a.TypeError,
      v = a.WeakMap;
    if (s || p.state) {
      var g = p.state || (p.state = new v()),
        y = l(g.get),
        b = l(g.has),
        x = l(g.set);
      (i = function (t, e) {
        if (b(g, t)) throw new m("Object already initialized");
        return (e.facade = t), x(g, t, e), e;
      }),
        (r = function (t) {
          return y(g, t) || {};
        }),
        (o = function (t) {
          return b(g, t);
        });
    } else {
      var w = f("state");
      (h[w] = !0),
        (i = function (t, e) {
          if (d(t, w)) throw new m("Object already initialized");
          return (e.facade = t), c(t, w, e), e;
        }),
        (r = function (t) {
          return d(t, w) ? t[w] : {};
        }),
        (o = function (t) {
          return d(t, w);
        });
    }
    t.exports = {
      set: i,
      get: r,
      has: o,
      enforce: function (t) {
        return o(t) ? r(t) : i(t, {});
      },
      getterFor: function (t) {
        return function (e) {
          var n;
          if (!u(e) || (n = r(e)).type !== t)
            throw m("Incompatible receiver, " + t + " required");
          return n;
        };
      },
    };
  },
  function (t, e, n) {
    var i = n(1),
      r = n(3),
      o = n(7),
      s = n(24),
      a = n(35),
      l = n(45),
      u = n(14),
      c = n(68).CONFIGURABLE,
      d = u.get,
      p = u.enforce,
      f = String(String).split("String");
    (t.exports = function (t, e, n, l) {
      var u,
        d = !!l && !!l.unsafe,
        h = !!l && !!l.enumerable,
        m = !!l && !!l.noTargetGet,
        v = l && void 0 !== l.name ? l.name : e;
      r(n) &&
        ("Symbol(" === String(v).slice(0, 7) &&
          (v = "[" + String(v).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
        (!o(n, "name") || (c && n.name !== v)) && s(n, "name", v),
        (u = p(n)).source ||
          (u.source = f.join("string" == typeof v ? v : ""))),
        t !== i
          ? (d ? !m && t[e] && (h = !0) : delete t[e],
            h ? (t[e] = n) : s(t, e, n))
          : h
          ? (t[e] = n)
          : a(e, n);
    })(Function.prototype, "toString", function () {
      return (r(this) && d(this).source) || l(this);
    });
  },
  function (t, e, n) {
    var i = n(2),
      r = i({}.toString),
      o = i("".slice);
    t.exports = function (t) {
      return o(r(t), 8, -1);
    };
  },
  function (t, e, n) {
    var i = n(1),
      r = n(32),
      o = i.Object;
    t.exports = function (t) {
      return o(r(t));
    };
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e, n) {
    var i = n(1),
      r = n(66).f,
      o = n(24),
      s = n(15),
      a = n(35),
      l = n(96),
      u = n(70);
    t.exports = function (t, e) {
      var n,
        c,
        d,
        p,
        f,
        h = t.target,
        m = t.global,
        v = t.stat;
      if ((n = m ? i : v ? i[h] || a(h, {}) : (i[h] || {}).prototype))
        for (c in e) {
          if (
            ((p = e[c]),
            (d = t.noTargetGet ? (f = r(n, c)) && f.value : n[c]),
            !u(m ? c : h + (v ? "." : "#") + c, t.forced) && void 0 !== d)
          ) {
            if (typeof p == typeof d) continue;
            l(p, d);
          }
          (t.sham || (d && d.sham)) && o(p, "sham", !0), s(n, c, p, t);
        }
    };
  },
  function (t, e, n) {
    var i = n(1);
    t.exports = i;
  },
  function (t, e, n) {
    var i,
      r = n(8),
      o = n(89),
      s = n(43),
      a = n(23),
      l = n(95),
      u = n(61),
      c = n(44),
      d = c("IE_PROTO"),
      p = function () {},
      f = function (t) {
        return "<script>" + t + "</script>";
      },
      h = function (t) {
        t.write(f("")), t.close();
        var e = t.parentWindow.Object;
        return (t = null), e;
      },
      m = function () {
        try {
          i = new ActiveXObject("htmlfile");
        } catch (t) {}
        var t, e;
        m =
          "undefined" != typeof document
            ? document.domain && i
              ? h(i)
              : (((e = u("iframe")).style.display = "none"),
                l.appendChild(e),
                (e.src = String("javascript:")),
                (t = e.contentWindow.document).open(),
                t.write(f("document.F=Object")),
                t.close(),
                t.F)
            : h(i);
        for (var n = s.length; n--; ) delete m.prototype[s[n]];
        return m();
      };
    (a[d] = !0),
      (t.exports =
        Object.create ||
        function (t, e) {
          var n;
          return (
            null !== t
              ? ((p.prototype = r(t)),
                (n = new p()),
                (p.prototype = null),
                (n[d] = t))
              : (n = m()),
            void 0 === e ? n : o(n, e)
          );
        });
  },
  function (t, e, n) {
    var i = n(94);
    t.exports = function (t) {
      return i(t.length);
    };
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e, n) {
    var i = n(9),
      r = n(10),
      o = n(25);
    t.exports = i
      ? function (t, e, n) {
          return r.f(t, e, o(1, n));
        }
      : function (t, e, n) {
          return (t[e] = n), t;
        };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      };
    };
  },
  function (t, e, n) {
    var i = n(19),
      r = n(2),
      o = n(23),
      s = n(6),
      a = n(7),
      l = n(10).f,
      u = n(47),
      c = n(102),
      d = n(74),
      p = n(36),
      f = n(105),
      h = !1,
      m = p("meta"),
      v = 0,
      g = function (t) {
        l(t, m, { value: { objectID: "O" + v++, weakData: {} } });
      },
      y = (t.exports = {
        enable: function () {
          (y.enable = function () {}), (h = !0);
          var t = u.f,
            e = r([].splice),
            n = {};
          (n[m] = 1),
            t(n).length &&
              ((u.f = function (n) {
                for (var i = t(n), r = 0, o = i.length; r < o; r++)
                  if (i[r] === m) {
                    e(i, r, 1);
                    break;
                  }
                return i;
              }),
              i(
                { target: "Object", stat: !0, forced: !0 },
                { getOwnPropertyNames: c.f }
              ));
        },
        fastKey: function (t, e) {
          if (!s(t))
            return "symbol" == typeof t
              ? t
              : ("string" == typeof t ? "S" : "P") + t;
          if (!a(t, m)) {
            if (!d(t)) return "F";
            if (!e) return "E";
            g(t);
          }
          return t[m].objectID;
        },
        getWeakData: function (t, e) {
          if (!a(t, m)) {
            if (!d(t)) return !0;
            if (!e) return !1;
            g(t);
          }
          return t[m].weakData;
        },
        onFreeze: function (t) {
          return f && h && d(t) && !a(t, m) && g(t), t;
        },
      });
    o[m] = !0;
  },
  function (t, e, n) {
    var i = n(2),
      r = n(40),
      o = i(i.bind);
    t.exports = function (t, e) {
      return (
        r(t),
        void 0 === e
          ? t
          : o
          ? o(t, e)
          : function () {
              return t.apply(e, arguments);
            }
      );
    };
  },
  function (t, e, n) {
    var i = n(1),
      r = n(52),
      o = n(3),
      s = n(16),
      a = n(5)("toStringTag"),
      l = i.Object,
      u =
        "Arguments" ==
        s(
          (function () {
            return arguments;
          })()
        );
    t.exports = r
      ? s
      : function (t) {
          var e, n, i;
          return void 0 === t
            ? "Undefined"
            : null === t
            ? "Null"
            : "string" ==
              typeof (n = (function (t, e) {
                try {
                  return t[e];
                } catch (t) {}
              })((e = l(t)), a))
            ? n
            : u
            ? s(e)
            : "Object" == (i = s(e)) && o(e.callee)
            ? "Arguments"
            : i;
        };
  },
  function (t, e, n) {
    var i = n(12),
      r = n(86),
      o = n(18),
      s = n(14),
      a = n(46),
      l = s.set,
      u = s.getterFor("Array Iterator");
    (t.exports = a(
      Array,
      "Array",
      function (t, e) {
        l(this, { type: "Array Iterator", target: i(t), index: 0, kind: e });
      },
      function () {
        var t = u(this),
          e = t.target,
          n = t.kind,
          i = t.index++;
        return !e || i >= e.length
          ? ((t.target = void 0), { value: void 0, done: !0 })
          : "keys" == n
          ? { value: i, done: !1 }
          : "values" == n
          ? { value: e[i], done: !1 }
          : { value: [i, e[i]], done: !1 };
      },
      "values"
    )),
      (o.Arguments = o.Array),
      r("keys"),
      r("values"),
      r("entries");
  },
  function (t, e, n) {
    var i = n(1),
      r = n(2),
      o = n(4),
      s = n(16),
      a = i.Object,
      l = r("".split);
    t.exports = o(function () {
      return !a("z").propertyIsEnumerable(0);
    })
      ? function (t) {
          return "String" == s(t) ? l(t, "") : a(t);
        }
      : a;
  },
  function (t, e) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (n = window);
    }
    t.exports = n;
  },
  function (t, e, n) {
    var i = n(1).TypeError;
    t.exports = function (t) {
      if (null == t) throw i("Can't call method on " + t);
      return t;
    };
  },
  function (t, e) {
    t.exports = !1;
  },
  function (t, e, n) {
    var i = n(1),
      r = n(35),
      o = i["__core-js_shared__"] || r("__core-js_shared__", {});
    t.exports = o;
  },
  function (t, e, n) {
    var i = n(1),
      r = Object.defineProperty;
    t.exports = function (t, e) {
      try {
        r(i, t, { value: e, configurable: !0, writable: !0 });
      } catch (n) {
        i[t] = e;
      }
      return e;
    };
  },
  function (t, e, n) {
    var i = n(2),
      r = 0,
      o = Math.random(),
      s = i((1).toString);
    t.exports = function (t) {
      return "Symbol(" + (void 0 === t ? "" : t) + ")_" + s(++r + o, 36);
    };
  },
  function (t, e, n) {
    var i = n(90),
      r = n(62);
    t.exports = function (t) {
      var e = i(t, "string");
      return r(e) ? e : e + "";
    };
  },
  function (t, e, n) {
    var i = n(2);
    t.exports = i({}.isPrototypeOf);
  },
  function (t, e, n) {
    var i = n(40);
    t.exports = function (t, e) {
      var n = t[e];
      return null == n ? void 0 : i(n);
    };
  },
  function (t, e, n) {
    var i = n(1),
      r = n(3),
      o = n(41),
      s = i.TypeError;
    t.exports = function (t) {
      if (r(t)) return t;
      throw s(o(t) + " is not a function");
    };
  },
  function (t, e, n) {
    var i = n(1).String;
    t.exports = function (t) {
      try {
        return i(t);
      } catch (t) {
        return "Object";
      }
    };
  },
  function (t, e) {
    var n = Math.ceil,
      i = Math.floor;
    t.exports = function (t) {
      var e = +t;
      return e != e || 0 === e ? 0 : (e > 0 ? i : n)(e);
    };
  },
  function (t, e) {
    t.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  },
  function (t, e, n) {
    var i = n(57),
      r = n(36),
      o = i("keys");
    t.exports = function (t) {
      return o[t] || (o[t] = r(t));
    };
  },
  function (t, e, n) {
    var i = n(2),
      r = n(3),
      o = n(34),
      s = i(Function.toString);
    r(o.inspectSource) ||
      (o.inspectSource = function (t) {
        return s(t);
      }),
      (t.exports = o.inspectSource);
  },
  function (t, e, n) {
    var i = n(19),
      r = n(11),
      o = n(33),
      s = n(68),
      a = n(3),
      l = n(98),
      u = n(72),
      c = n(73),
      d = n(48),
      p = n(24),
      f = n(15),
      h = n(5),
      m = n(18),
      v = n(71),
      g = s.PROPER,
      y = s.CONFIGURABLE,
      b = v.IteratorPrototype,
      x = v.BUGGY_SAFARI_ITERATORS,
      w = h("iterator"),
      D = function () {
        return this;
      };
    t.exports = function (t, e, n, s, h, v, _) {
      l(n, e, s);
      var S,
        C,
        E,
        T = function (t) {
          if (t === h && M) return M;
          if (!x && t in k) return k[t];
          switch (t) {
            case "keys":
            case "values":
            case "entries":
              return function () {
                return new n(this, t);
              };
          }
          return function () {
            return new n(this);
          };
        },
        P = e + " Iterator",
        A = !1,
        k = t.prototype,
        O = k[w] || k["@@iterator"] || (h && k[h]),
        M = (!x && O) || T(h),
        F = ("Array" == e && k.entries) || O;
      if (
        (F &&
          (S = u(F.call(new t()))) !== Object.prototype &&
          S.next &&
          (o || u(S) === b || (c ? c(S, b) : a(S[w]) || f(S, w, D)),
          d(S, P, !0, !0),
          o && (m[P] = D)),
        g &&
          "values" == h &&
          O &&
          "values" !== O.name &&
          (!o && y
            ? p(k, "name", "values")
            : ((A = !0),
              (M = function () {
                return r(O, this);
              }))),
        h)
      )
        if (
          ((C = {
            values: T("values"),
            keys: v ? M : T("keys"),
            entries: T("entries"),
          }),
          _)
        )
          for (E in C) (x || A || !(E in k)) && f(k, E, C[E]);
        else i({ target: e, proto: !0, forced: x || A }, C);
      return (o && !_) || k[w] === M || f(k, w, M, { name: h }), (m[e] = M), C;
    };
  },
  function (t, e, n) {
    var i = n(64),
      r = n(43).concat("length", "prototype");
    e.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return i(t, r);
      };
  },
  function (t, e, n) {
    var i = n(10).f,
      r = n(7),
      o = n(5)("toStringTag");
    t.exports = function (t, e, n) {
      t &&
        !r((t = n ? t : t.prototype), o) &&
        i(t, o, { configurable: !0, value: e });
    };
  },
  function (t, e, n) {
    var i = n(19),
      r = n(1),
      o = n(2),
      s = n(70),
      a = n(15),
      l = n(26),
      u = n(50),
      c = n(53),
      d = n(3),
      p = n(6),
      f = n(4),
      h = n(78),
      m = n(48),
      v = n(106);
    t.exports = function (t, e, n) {
      var g = -1 !== t.indexOf("Map"),
        y = -1 !== t.indexOf("Weak"),
        b = g ? "set" : "add",
        x = r[t],
        w = x && x.prototype,
        D = x,
        _ = {},
        S = function (t) {
          var e = o(w[t]);
          a(
            w,
            t,
            "add" == t
              ? function (t) {
                  return e(this, 0 === t ? 0 : t), this;
                }
              : "delete" == t
              ? function (t) {
                  return !(y && !p(t)) && e(this, 0 === t ? 0 : t);
                }
              : "get" == t
              ? function (t) {
                  return y && !p(t) ? void 0 : e(this, 0 === t ? 0 : t);
                }
              : "has" == t
              ? function (t) {
                  return !(y && !p(t)) && e(this, 0 === t ? 0 : t);
                }
              : function (t, n) {
                  return e(this, 0 === t ? 0 : t, n), this;
                }
          );
        };
      if (
        s(
          t,
          !d(x) ||
            !(
              y ||
              (w.forEach &&
                !f(function () {
                  new x().entries().next();
                }))
            )
        )
      )
        (D = n.getConstructor(e, t, g, b)), l.enable();
      else if (s(t, !0)) {
        var C = new D(),
          E = C[b](y ? {} : -0, 1) != C,
          T = f(function () {
            C.has(1);
          }),
          P = h(function (t) {
            new x(t);
          }),
          A =
            !y &&
            f(function () {
              for (var t = new x(), e = 5; e--; ) t[b](e, e);
              return !t.has(-0);
            });
        P ||
          (((D = e(function (t, e) {
            c(t, w);
            var n = v(new x(), t, D);
            return null != e && u(e, n[b], { that: n, AS_ENTRIES: g }), n;
          })).prototype = w),
          (w.constructor = D)),
          (T || A) && (S("delete"), S("has"), g && S("get")),
          (A || E) && S(b),
          y && w.clear && delete w.clear;
      }
      return (
        (_[t] = D),
        i({ global: !0, forced: D != x }, _),
        m(D, t),
        y || n.setStrong(D, t, g),
        D
      );
    };
  },
  function (t, e, n) {
    var i = n(1),
      r = n(27),
      o = n(11),
      s = n(8),
      a = n(41),
      l = n(75),
      u = n(22),
      c = n(38),
      d = n(76),
      p = n(51),
      f = n(77),
      h = i.TypeError,
      m = function (t, e) {
        (this.stopped = t), (this.result = e);
      },
      v = m.prototype;
    t.exports = function (t, e, n) {
      var i,
        g,
        y,
        b,
        x,
        w,
        D,
        _ = n && n.that,
        S = !(!n || !n.AS_ENTRIES),
        C = !(!n || !n.IS_ITERATOR),
        E = !(!n || !n.INTERRUPTED),
        T = r(e, _),
        P = function (t) {
          return i && f(i, "normal", t), new m(!0, t);
        },
        A = function (t) {
          return S
            ? (s(t), E ? T(t[0], t[1], P) : T(t[0], t[1]))
            : E
            ? T(t, P)
            : T(t);
        };
      if (C) i = t;
      else {
        if (!(g = p(t))) throw h(a(t) + " is not iterable");
        if (l(g)) {
          for (y = 0, b = u(t); b > y; y++)
            if ((x = A(t[y])) && c(v, x)) return x;
          return new m(!1);
        }
        i = d(t, g);
      }
      for (w = i.next; !(D = o(w, i)).done; ) {
        try {
          x = A(D.value);
        } catch (t) {
          f(i, "throw", t);
        }
        if ("object" == typeof x && x && c(v, x)) return x;
      }
      return new m(!1);
    };
  },
  function (t, e, n) {
    var i = n(28),
      r = n(39),
      o = n(18),
      s = n(5)("iterator");
    t.exports = function (t) {
      if (null != t) return r(t, s) || r(t, "@@iterator") || o[i(t)];
    };
  },
  function (t, e, n) {
    var i = {};
    (i[n(5)("toStringTag")] = "z"), (t.exports = "[object z]" === String(i));
  },
  function (t, e, n) {
    var i = n(1),
      r = n(38),
      o = i.TypeError;
    t.exports = function (t, e) {
      if (r(e, t)) return t;
      throw o("Incorrect invocation");
    };
  },
  function (t, e, n) {
    var i = n(15);
    t.exports = function (t, e, n) {
      for (var r in e) i(t, r, e[r], n);
      return t;
    };
  },
  function (t, e, n) {
    var i = n(52),
      r = n(15),
      o = n(108);
    i || r(Object.prototype, "toString", o, { unsafe: !0 });
  },
  function (t, e, n) {
    var i = n(109).charAt,
      r = n(80),
      o = n(14),
      s = n(46),
      a = o.set,
      l = o.getterFor("String Iterator");
    s(
      String,
      "String",
      function (t) {
        a(this, { type: "String Iterator", string: r(t), index: 0 });
      },
      function () {
        var t,
          e = l(this),
          n = e.string,
          r = e.index;
        return r >= n.length
          ? { value: void 0, done: !0 }
          : ((t = i(n, r)), (e.index += t.length), { value: t, done: !1 });
      }
    );
  },
  function (t, e, n) {
    var i = n(33),
      r = n(34);
    (t.exports = function (t, e) {
      return r[t] || (r[t] = void 0 !== e ? e : {});
    })("versions", []).push({
      version: "3.19.1",
      mode: i ? "pure" : "global",
      copyright: "© 2021 Denis Pushkarev (zloirock.ru)",
    });
  },
  function (t, e, n) {
    var i = n(87),
      r = n(4);
    t.exports =
      !!Object.getOwnPropertySymbols &&
      !r(function () {
        var t = Symbol();
        return (
          !String(t) ||
          !(Object(t) instanceof Symbol) ||
          (!Symbol.sham && i && i < 41)
        );
      });
  },
  function (t, e, n) {
    var i = n(58);
    t.exports = i && !Symbol.sham && "symbol" == typeof Symbol.iterator;
  },
  function (t, e, n) {
    var i = n(9),
      r = n(4),
      o = n(61);
    t.exports =
      !i &&
      !r(function () {
        return (
          7 !=
          Object.defineProperty(o("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (t, e, n) {
    var i = n(1),
      r = n(6),
      o = i.document,
      s = r(o) && r(o.createElement);
    t.exports = function (t) {
      return s ? o.createElement(t) : {};
    };
  },
  function (t, e, n) {
    var i = n(1),
      r = n(13),
      o = n(3),
      s = n(38),
      a = n(59),
      l = i.Object;
    t.exports = a
      ? function (t) {
          return "symbol" == typeof t;
        }
      : function (t) {
          var e = r("Symbol");
          return o(e) && s(e.prototype, l(t));
        };
  },
  function (t, e, n) {
    var i = n(64),
      r = n(43);
    t.exports =
      Object.keys ||
      function (t) {
        return i(t, r);
      };
  },
  function (t, e, n) {
    var i = n(2),
      r = n(7),
      o = n(12),
      s = n(92).indexOf,
      a = n(23),
      l = i([].push);
    t.exports = function (t, e) {
      var n,
        i = o(t),
        u = 0,
        c = [];
      for (n in i) !r(a, n) && r(i, n) && l(c, n);
      for (; e.length > u; ) r(i, (n = e[u++])) && (~s(c, n) || l(c, n));
      return c;
    };
  },
  function (t, e, n) {
    var i = n(1),
      r = n(3),
      o = n(45),
      s = i.WeakMap;
    t.exports = r(s) && /native code/.test(o(s));
  },
  function (t, e, n) {
    var i = n(9),
      r = n(11),
      o = n(67),
      s = n(25),
      a = n(12),
      l = n(37),
      u = n(7),
      c = n(60),
      d = Object.getOwnPropertyDescriptor;
    e.f = i
      ? d
      : function (t, e) {
          if (((t = a(t)), (e = l(e)), c))
            try {
              return d(t, e);
            } catch (t) {}
          if (u(t, e)) return s(!r(o.f, t, e), t[e]);
        };
  },
  function (t, e) {
    var n = {}.propertyIsEnumerable,
      i = Object.getOwnPropertyDescriptor,
      r = i && !n.call({ 1: 2 }, 1);
    e.f = r
      ? function (t) {
          var e = i(this, t);
          return !!e && e.enumerable;
        }
      : n;
  },
  function (t, e, n) {
    var i = n(9),
      r = n(7),
      o = Function.prototype,
      s = i && Object.getOwnPropertyDescriptor,
      a = r(o, "name"),
      l = a && "something" === function () {}.name,
      u = a && (!i || (i && s(o, "name").configurable));
    t.exports = { EXISTS: a, PROPER: l, CONFIGURABLE: u };
  },
  function (t, e) {
    e.f = Object.getOwnPropertySymbols;
  },
  function (t, e, n) {
    var i = n(4),
      r = n(3),
      o = /#|\.prototype\./,
      s = function (t, e) {
        var n = l[a(t)];
        return n == c || (n != u && (r(e) ? i(e) : !!e));
      },
      a = (s.normalize = function (t) {
        return String(t).replace(o, ".").toLowerCase();
      }),
      l = (s.data = {}),
      u = (s.NATIVE = "N"),
      c = (s.POLYFILL = "P");
    t.exports = s;
  },
  function (t, e, n) {
    var i,
      r,
      o,
      s = n(4),
      a = n(3),
      l = n(21),
      u = n(72),
      c = n(15),
      d = n(5),
      p = n(33),
      f = d("iterator"),
      h = !1;
    [].keys &&
      ("next" in (o = [].keys())
        ? (r = u(u(o))) !== Object.prototype && (i = r)
        : (h = !0)),
      null == i ||
      s(function () {
        var t = {};
        return i[f].call(t) !== t;
      })
        ? (i = {})
        : p && (i = l(i)),
      a(i[f]) ||
        c(i, f, function () {
          return this;
        }),
      (t.exports = { IteratorPrototype: i, BUGGY_SAFARI_ITERATORS: h });
  },
  function (t, e, n) {
    var i = n(1),
      r = n(7),
      o = n(3),
      s = n(17),
      a = n(44),
      l = n(99),
      u = a("IE_PROTO"),
      c = i.Object,
      d = c.prototype;
    t.exports = l
      ? c.getPrototypeOf
      : function (t) {
          var e = s(t);
          if (r(e, u)) return e[u];
          var n = e.constructor;
          return o(n) && e instanceof n
            ? n.prototype
            : e instanceof c
            ? d
            : null;
        };
  },
  function (t, e, n) {
    var i = n(2),
      r = n(8),
      o = n(100);
    t.exports =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var t,
              e = !1,
              n = {};
            try {
              (t = i(
                Object.getOwnPropertyDescriptor(Object.prototype, "__proto__")
                  .set
              ))(n, []),
                (e = n instanceof Array);
            } catch (t) {}
            return function (n, i) {
              return r(n), o(i), e ? t(n, i) : (n.__proto__ = i), n;
            };
          })()
        : void 0);
  },
  function (t, e, n) {
    var i = n(4),
      r = n(6),
      o = n(16),
      s = n(104),
      a = Object.isExtensible,
      l = i(function () {
        a(1);
      });
    t.exports =
      l || s
        ? function (t) {
            return !!r(t) && (!s || "ArrayBuffer" != o(t)) && (!a || a(t));
          }
        : a;
  },
  function (t, e, n) {
    var i = n(5),
      r = n(18),
      o = i("iterator"),
      s = Array.prototype;
    t.exports = function (t) {
      return void 0 !== t && (r.Array === t || s[o] === t);
    };
  },
  function (t, e, n) {
    var i = n(1),
      r = n(11),
      o = n(40),
      s = n(8),
      a = n(41),
      l = n(51),
      u = i.TypeError;
    t.exports = function (t, e) {
      var n = arguments.length < 2 ? l(t) : e;
      if (o(n)) return s(r(n, t));
      throw u(a(t) + " is not iterable");
    };
  },
  function (t, e, n) {
    var i = n(11),
      r = n(8),
      o = n(39);
    t.exports = function (t, e, n) {
      var s, a;
      r(t);
      try {
        if (!(s = o(t, "return"))) {
          if ("throw" === e) throw n;
          return n;
        }
        s = i(s, t);
      } catch (t) {
        (a = !0), (s = t);
      }
      if ("throw" === e) throw n;
      if (a) throw s;
      return r(s), n;
    };
  },
  function (t, e, n) {
    var i = n(5)("iterator"),
      r = !1;
    try {
      var o = 0,
        s = {
          next: function () {
            return { done: !!o++ };
          },
          return: function () {
            r = !0;
          },
        };
      (s[i] = function () {
        return this;
      }),
        Array.from(s, function () {
          throw 2;
        });
    } catch (t) {}
    t.exports = function (t, e) {
      if (!e && !r) return !1;
      var n = !1;
      try {
        var o = {};
        (o[i] = function () {
          return {
            next: function () {
              return { done: (n = !0) };
            },
          };
        }),
          t(o);
      } catch (t) {}
      return n;
    };
  },
  function (t, e, n) {
    var i = n(10).f,
      r = n(21),
      o = n(54),
      s = n(27),
      a = n(53),
      l = n(50),
      u = n(46),
      c = n(107),
      d = n(9),
      p = n(26).fastKey,
      f = n(14),
      h = f.set,
      m = f.getterFor;
    t.exports = {
      getConstructor: function (t, e, n, u) {
        var c = t(function (t, i) {
            a(t, f),
              h(t, {
                type: e,
                index: r(null),
                first: void 0,
                last: void 0,
                size: 0,
              }),
              d || (t.size = 0),
              null != i && l(i, t[u], { that: t, AS_ENTRIES: n });
          }),
          f = c.prototype,
          v = m(e),
          g = function (t, e, n) {
            var i,
              r,
              o = v(t),
              s = y(t, e);
            return (
              s
                ? (s.value = n)
                : ((o.last = s =
                    {
                      index: (r = p(e, !0)),
                      key: e,
                      value: n,
                      previous: (i = o.last),
                      next: void 0,
                      removed: !1,
                    }),
                  o.first || (o.first = s),
                  i && (i.next = s),
                  d ? o.size++ : t.size++,
                  "F" !== r && (o.index[r] = s)),
              t
            );
          },
          y = function (t, e) {
            var n,
              i = v(t),
              r = p(e);
            if ("F" !== r) return i.index[r];
            for (n = i.first; n; n = n.next) if (n.key == e) return n;
          };
        return (
          o(f, {
            clear: function () {
              for (var t = v(this), e = t.index, n = t.first; n; )
                (n.removed = !0),
                  n.previous && (n.previous = n.previous.next = void 0),
                  delete e[n.index],
                  (n = n.next);
              (t.first = t.last = void 0), d ? (t.size = 0) : (this.size = 0);
            },
            delete: function (t) {
              var e = v(this),
                n = y(this, t);
              if (n) {
                var i = n.next,
                  r = n.previous;
                delete e.index[n.index],
                  (n.removed = !0),
                  r && (r.next = i),
                  i && (i.previous = r),
                  e.first == n && (e.first = i),
                  e.last == n && (e.last = r),
                  d ? e.size-- : this.size--;
              }
              return !!n;
            },
            forEach: function (t) {
              for (
                var e,
                  n = v(this),
                  i = s(t, arguments.length > 1 ? arguments[1] : void 0);
                (e = e ? e.next : n.first);

              )
                for (i(e.value, e.key, this); e && e.removed; ) e = e.previous;
            },
            has: function (t) {
              return !!y(this, t);
            },
          }),
          o(
            f,
            n
              ? {
                  get: function (t) {
                    var e = y(this, t);
                    return e && e.value;
                  },
                  set: function (t, e) {
                    return g(this, 0 === t ? 0 : t, e);
                  },
                }
              : {
                  add: function (t) {
                    return g(this, (t = 0 === t ? 0 : t), t);
                  },
                }
          ),
          d &&
            i(f, "size", {
              get: function () {
                return v(this).size;
              },
            }),
          c
        );
      },
      setStrong: function (t, e, n) {
        var i = e + " Iterator",
          r = m(e),
          o = m(i);
        u(
          t,
          e,
          function (t, e) {
            h(this, { type: i, target: t, state: r(t), kind: e, last: void 0 });
          },
          function () {
            for (var t = o(this), e = t.kind, n = t.last; n && n.removed; )
              n = n.previous;
            return t.target && (t.last = n = n ? n.next : t.state.first)
              ? "keys" == e
                ? { value: n.key, done: !1 }
                : "values" == e
                ? { value: n.value, done: !1 }
                : { value: [n.key, n.value], done: !1 }
              : ((t.target = void 0), { value: void 0, done: !0 });
          },
          n ? "entries" : "values",
          !n,
          !0
        ),
          c(e);
      },
    };
  },
  function (t, e, n) {
    var i = n(1),
      r = n(28),
      o = i.String;
    t.exports = function (t) {
      if ("Symbol" === r(t))
        throw TypeError("Cannot convert a Symbol value to a string");
      return o(t);
    };
  },
  function (t, e, n) {
    var i = n(2),
      r = n(4),
      o = n(3),
      s = n(28),
      a = n(13),
      l = n(45),
      u = function () {},
      c = [],
      d = a("Reflect", "construct"),
      p = /^\s*(?:class|function)\b/,
      f = i(p.exec),
      h = !p.exec(u),
      m = function (t) {
        if (!o(t)) return !1;
        try {
          return d(u, c, t), !0;
        } catch (t) {
          return !1;
        }
      };
    t.exports =
      !d ||
      r(function () {
        var t;
        return (
          m(m.call) ||
          !m(Object) ||
          !m(function () {
            t = !0;
          }) ||
          t
        );
      })
        ? function (t) {
            if (!o(t)) return !1;
            switch (s(t)) {
              case "AsyncFunction":
              case "GeneratorFunction":
              case "AsyncGeneratorFunction":
                return !1;
            }
            return h || !!f(p, l(t));
          }
        : m;
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var n =
          Object.assign ||
          function (t) {
            for (var e, n = 1, i = arguments.length; n < i; n++)
              for (var r in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t;
          },
        i = [
          ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
          ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
          ["opera", /OPR\/([0-9\.]+)(:?\s|$)$/],
          ["edge", /Edge\/([0-9\._]+)/],
          ["ie", /Trident\/7\.0.*rv\:([0-9\.]+)\).*Gecko$/],
          ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
          ["ie", /MSIE\s(7\.0)/],
          ["safari", /Version\/([0-9\._]+).*Safari/],
          ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
          ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
          ["android", /Android\s([0-9\.]+)/],
          ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
          ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
          ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
        ],
        r = [
          "Windows Phone",
          "Android",
          "CentOS",
          { name: "Chrome OS", pattern: "CrOS" },
          "Debian",
          "Fedora",
          "FreeBSD",
          "Gentoo",
          "Haiku",
          "Kubuntu",
          "Linux Mint",
          "OpenBSD",
          "Red Hat",
          "SuSE",
          "Ubuntu",
          "Xubuntu",
          "Cygwin",
          "Symbian OS",
          "hpwOS",
          "webOS ",
          "webOS",
          "Tablet OS",
          "Tizen",
          "Linux",
          "Mac OS X",
          "Macintosh",
          "Mac",
          "Windows 98;",
          "Windows ",
        ],
        o = {
          "10.0": "10",
          6.4: "10 Technical Preview",
          6.3: "8.1",
          6.2: "8",
          6.1: "Server 2008 R2 / 7",
          "6.0": "Server 2008 / Vista",
          5.2: "Server 2003 / XP 64-bit",
          5.1: "XP",
          5.01: "2000 SP1",
          "5.0": "2000",
          "4.0": "NT",
          "4.90": "ME",
        },
        s = new RegExp(
          [
            "(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|",
            "compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|",
            "midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)",
            "\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|",
            "wap|windows ce|xda|xiino",
          ].join(""),
          "i"
        ),
        a = new RegExp(
          [
            "1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|",
            "ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|",
            "avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|",
            "cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|",
            "ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|",
            "g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|",
            "hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|",
            "i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|",
            "kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])",
            "|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|",
            "mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|",
            "n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|",
            "op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|",
            "po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|",
            "raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|",
            "se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|k\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|",
            "so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|",
            "tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|",
            "veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|",
            "w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-",
          ].join(""),
          "i"
        ),
        l = (function () {
          function t(t, e, n) {
            (this.navigator = e),
              (this.process = n),
              (this.userAgent =
                t || (this.navigator ? e.userAgent || e.vendor : ""));
          }
          return (
            (t.prototype.detect = function () {
              if (this.process && !this.userAgent) {
                var t = this.process.version.slice(1).split(".").slice(0, 3),
                  e = Array.prototype.slice.call(t, 1).join("") || "0";
                return {
                  name: "node",
                  version: t.join("."),
                  versionNumber: parseFloat(t[0] + "." + e),
                  mobile: !1,
                  os: this.process.platform,
                };
              }
              return (
                this.userAgent || this.handleMissingError(),
                n({}, this.checkBrowser(), this.checkMobile(), this.checkOs())
              );
            }),
            (t.prototype.checkBrowser = function () {
              var t = this;
              return i
                .filter(function (e) {
                  return e[1].test(t.userAgent);
                })
                .map(function (e) {
                  var n = e[1].exec(t.userAgent),
                    i = n && n[1].split(/[._]/).slice(0, 3),
                    r = Array.prototype.slice.call(i, 1).join("") || "0";
                  return (
                    i &&
                      i.length < 3 &&
                      Array.prototype.push.apply(
                        i,
                        1 === i.length ? [0, 0] : [0]
                      ),
                    {
                      name: String(e[0]),
                      version: i.join("."),
                      versionNumber: Number(i[0] + "." + r),
                    }
                  );
                })
                .shift();
            }),
            (t.prototype.checkMobile = function () {
              var t = this.userAgent.substr(0, 4);
              return { mobile: s.test(this.userAgent) || a.test(t) };
            }),
            (t.prototype.checkOs = function () {
              var t = this;
              return r
                .map(function (e) {
                  var n = e.name || e,
                    i = t.getOsPattern(e);
                  return {
                    name: n,
                    pattern: i,
                    value: RegExp(
                      "\\b" +
                        i.replace(/([ -])(?!$)/g, "$1?") +
                        "(?:x?[\\d._]+|[ \\w.]*)",
                      "i"
                    ).exec(t.userAgent),
                  };
                })
                .filter(function (t) {
                  return t.value;
                })
                .map(function (t) {
                  var e,
                    n = t.value[0] || "";
                  return (
                    t.pattern &&
                      t.name &&
                      /^Win/i.test(n) &&
                      !/^Windows Phone /i.test(n) &&
                      (e = o[n.replace(/[^\d.]/g, "")]) &&
                      (n = "Windows " + e),
                    t.pattern &&
                      t.name &&
                      (n = n.replace(RegExp(t.pattern, "i"), t.name)),
                    (n = n
                      .replace(/ ce$/i, " CE")
                      .replace(/\bhpw/i, "web")
                      .replace(/\bMacintosh\b/, "Mac OS")
                      .replace(/_PowerPC\b/i, " OS")
                      .replace(/\b(OS X) [^ \d]+/i, "$1")
                      .replace(/\bMac (OS X)\b/, "$1")
                      .replace(/\/(\d)/, " $1")
                      .replace(/_/g, ".")
                      .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "")
                      .replace(/\bx86\.64\b/gi, "x86_64")
                      .replace(/\b(Windows Phone) OS\b/, "$1")
                      .replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1")
                      .split(" on ")[0]
                      .trim()),
                    {
                      os: (n = /^(?:webOS|i(?:OS|P))/.test(n)
                        ? n
                        : n.charAt(0).toUpperCase() + n.slice(1)),
                    }
                  );
                })
                .shift();
            }),
            (t.prototype.getOsPattern = function (t) {
              var e = t;
              return ("string" == typeof t ? t : void 0) || e.pattern || e.name;
            }),
            (t.prototype.handleMissingError = function () {
              throw new Error(
                "Please give user-agent.\n> browser(navigator.userAgent or res.headers['user-agent'])."
              );
            }),
            t
          );
        })();
      /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */ function u(
        t,
        e
      ) {
        return t((e = { exports: {} }), e.exports), e.exports;
      }
      var c = u(function (t) {
          var e = (t.exports =
            "undefined" != typeof window && window.Math == Math
              ? window
              : "undefined" != typeof self && self.Math == Math
              ? self
              : Function("return this")());
          "number" == typeof __g && (__g = e);
        }),
        d = u(function (t) {
          var e = (t.exports = { version: "2.5.7" });
          "number" == typeof __e && (__e = e);
        }),
        p =
          (d.version,
          function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t;
          }),
        f = function (t) {
          if (!p(t)) throw TypeError(t + " is not an object!");
          return t;
        },
        h = function (t) {
          try {
            return !!t();
          } catch (t) {
            return !0;
          }
        },
        m = !h(function () {
          return (
            7 !=
            Object.defineProperty({}, "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        }),
        v = c.document,
        g = p(v) && p(v.createElement),
        y =
          !m &&
          !h(function () {
            return (
              7 !=
              Object.defineProperty(
                ((t = "div"), g ? v.createElement(t) : {}),
                "a",
                {
                  get: function () {
                    return 7;
                  },
                }
              ).a
            );
            var t;
          }),
        b = Object.defineProperty,
        x = {
          f: m
            ? Object.defineProperty
            : function (t, e, n) {
                if (
                  (f(t),
                  (e = (function (t, e) {
                    if (!p(t)) return t;
                    var n, i;
                    if (
                      e &&
                      "function" == typeof (n = t.toString) &&
                      !p((i = n.call(t)))
                    )
                      return i;
                    if (
                      "function" == typeof (n = t.valueOf) &&
                      !p((i = n.call(t)))
                    )
                      return i;
                    if (
                      !e &&
                      "function" == typeof (n = t.toString) &&
                      !p((i = n.call(t)))
                    )
                      return i;
                    throw TypeError("Can't convert object to primitive value");
                  })(e, !0)),
                  f(n),
                  y)
                )
                  try {
                    return b(t, e, n);
                  } catch (t) {}
                if ("get" in n || "set" in n)
                  throw TypeError("Accessors not supported!");
                return "value" in n && (t[e] = n.value), t;
              },
        },
        w = m
          ? function (t, e, n) {
              return x.f(
                t,
                e,
                (function (t, e) {
                  return {
                    enumerable: !(1 & t),
                    configurable: !(2 & t),
                    writable: !(4 & t),
                    value: e,
                  };
                })(1, n)
              );
            }
          : function (t, e, n) {
              return (t[e] = n), t;
            },
        D = {}.hasOwnProperty,
        _ = function (t, e) {
          return D.call(t, e);
        },
        S = 0,
        C = Math.random(),
        E = function (t) {
          return "Symbol(".concat(
            void 0 === t ? "" : t,
            ")_",
            (++S + C).toString(36)
          );
        },
        T = u(function (t) {
          var e = E("src"),
            n = Function.toString,
            i = ("" + n).split("toString");
          (d.inspectSource = function (t) {
            return n.call(t);
          }),
            (t.exports = function (t, n, r, o) {
              var s = "function" == typeof r;
              s && (_(r, "name") || w(r, "name", n)),
                t[n] !== r &&
                  (s &&
                    (_(r, e) || w(r, e, t[n] ? "" + t[n] : i.join(String(n)))),
                  t === c
                    ? (t[n] = r)
                    : o
                    ? t[n]
                      ? (t[n] = r)
                      : w(t, n, r)
                    : (delete t[n], w(t, n, r)));
            })(Function.prototype, "toString", function () {
              return ("function" == typeof this && this[e]) || n.call(this);
            });
        }),
        P = function (t, e, n) {
          if (
            ((function (t) {
              if ("function" != typeof t)
                throw TypeError(t + " is not a function!");
            })(t),
            void 0 === e)
          )
            return t;
          switch (n) {
            case 1:
              return function (n) {
                return t.call(e, n);
              };
            case 2:
              return function (n, i) {
                return t.call(e, n, i);
              };
            case 3:
              return function (n, i, r) {
                return t.call(e, n, i, r);
              };
          }
          return function () {
            return t.apply(e, arguments);
          };
        },
        A = function (t, e, n) {
          var i,
            r,
            o,
            s,
            a = t & A.F,
            l = t & A.G,
            u = t & A.S,
            p = t & A.P,
            f = t & A.B,
            h = l ? c : u ? c[e] || (c[e] = {}) : (c[e] || {}).prototype,
            m = l ? d : d[e] || (d[e] = {}),
            v = m.prototype || (m.prototype = {});
          for (i in (l && (n = e), n))
            (o = ((r = !a && h && void 0 !== h[i]) ? h : n)[i]),
              (s =
                f && r
                  ? P(o, c)
                  : p && "function" == typeof o
                  ? P(Function.call, o)
                  : o),
              h && T(h, i, o, t & A.U),
              m[i] != o && w(m, i, s),
              p && v[i] != o && (v[i] = o);
        };
      (c.core = d),
        (A.F = 1),
        (A.G = 2),
        (A.S = 4),
        (A.P = 8),
        (A.B = 16),
        (A.W = 32),
        (A.U = 64),
        (A.R = 128);
      var k = A,
        O = {}.toString,
        M = function (t) {
          return O.call(t).slice(8, -1);
        },
        F = Object("z").propertyIsEnumerable(0)
          ? Object
          : function (t) {
              return "String" == M(t) ? t.split("") : Object(t);
            },
        B = function (t) {
          if (null == t) throw TypeError("Can't call method on  " + t);
          return t;
        },
        L = Math.ceil,
        I = Math.floor,
        j = Math.min,
        R = function (t) {
          return t > 0
            ? j(
                (function (t) {
                  return isNaN((t = +t)) ? 0 : (t > 0 ? I : L)(t);
                })(t),
                9007199254740991
              )
            : 0;
        },
        z =
          Array.isArray ||
          function (t) {
            return "Array" == M(t);
          },
        N = u(function (t) {
          var e = c["__core-js_shared__"] || (c["__core-js_shared__"] = {});
          (t.exports = function (t, n) {
            return e[t] || (e[t] = void 0 !== n ? n : {});
          })("versions", []).push({
            version: d.version,
            mode: "global",
            copyright: "© Mboa Technologies ",
          });
        }),
        q = u(function (t) {
          var e = N("wks"),
            n = c.Symbol,
            i = "function" == typeof n;
          (t.exports = function (t) {
            return e[t] || (e[t] = (i && n[t]) || (i ? n : E)("Symbol." + t));
          }).store = e;
        })("species"),
        W = function (t, e) {
          return new ((function (t) {
            var e;
            return (
              z(t) &&
                ("function" != typeof (e = t.constructor) ||
                  (e !== Array && !z(e.prototype)) ||
                  (e = void 0),
                p(e) && null === (e = e[q]) && (e = void 0)),
              void 0 === e ? Array : e
            );
          })(t))(e);
        },
        V = function (t, e) {
          var n = 1 == t,
            i = 2 == t,
            r = 3 == t,
            o = 4 == t,
            s = 6 == t,
            a = 5 == t || s,
            l = e || W;
          return function (e, u, c) {
            for (
              var d,
                p,
                f = Object(B(e)),
                h = F(f),
                m = P(u, c, 3),
                v = R(h.length),
                g = 0,
                y = n ? l(e, v) : i ? l(e, 0) : void 0;
              v > g;
              g++
            )
              if ((a || g in h) && ((p = m((d = h[g]), g, f)), t))
                if (n) y[g] = p;
                else if (p)
                  switch (t) {
                    case 3:
                      return !0;
                    case 5:
                      return d;
                    case 6:
                      return g;
                    case 2:
                      y.push(d);
                  }
                else if (o) return !1;
            return s ? -1 : r || o ? o : y;
          };
        },
        H = function (t, e) {
          return (
            !!t &&
            h(function () {
              e ? t.call(null, function () {}, 1) : t.call(null);
            })
          );
        },
        G = V(2);
      k(k.P + k.F * !H([].filter, !0), "Array", {
        filter: function (t) {
          return G(this, t, arguments[1]);
        },
      });
      d.Array.filter;
      var $ = V(1);
      k(k.P + k.F * !H([].map, !0), "Array", {
        map: function (t) {
          return $(this, t, arguments[1]);
        },
      });
      d.Array.map;
      var X = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff",
        Y = "[" + X + "]",
        U = RegExp("^" + Y + Y + "*"),
        Q = RegExp(Y + Y + "*$"),
        K = function (t, e, n) {
          var i = {},
            r = h(function () {
              return !!X[t]() || "​" != "​"[t]();
            }),
            o = (i[t] = r ? e(Z) : X[t]);
          n && (i[n] = o), k(k.P + k.F * r, "String", i);
        },
        Z = (K.trim = function (t, e) {
          return (
            (t = String(B(t))),
            1 & e && (t = t.replace(U, "")),
            2 & e && (t = t.replace(Q, "")),
            t
          );
        });
      K("trim", function (t) {
        return function () {
          return t(this, 3);
        };
      });
      d.String.trim;
      var J = "undefined" != typeof window ? window.navigator : void 0,
        tt = void 0 !== t ? t : void 0;
      e.a = function (t) {
        return new l(t, J, tt).detect();
      };
    }.call(this, n(84)));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var n = "object" == typeof t && t && t.Object === Object && t;
      e.a = n;
    }.call(this, n(31)));
  },
  function (t, e) {
    var n,
      i,
      r = (t.exports = {});
    function o() {
      throw new Error("setTimeout has not been defined");
    }
    function s() {
      throw new Error("clearTimeout has not been defined");
    }
    function a(t) {
      if (n === setTimeout) return setTimeout(t, 0);
      if ((n === o || !n) && setTimeout)
        return (n = setTimeout), setTimeout(t, 0);
      try {
        return n(t, 0);
      } catch (e) {
        try {
          return n.call(null, t, 0);
        } catch (e) {
          return n.call(this, t, 0);
        }
      }
    }
    !(function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : o;
      } catch (t) {
        n = o;
      }
      try {
        i = "function" == typeof clearTimeout ? clearTimeout : s;
      } catch (t) {
        i = s;
      }
    })();
    var l,
      u = [],
      c = !1,
      d = -1;
    function p() {
      c &&
        l &&
        ((c = !1), l.length ? (u = l.concat(u)) : (d = -1), u.length && f());
    }
    function f() {
      if (!c) {
        var t = a(p);
        c = !0;
        for (var e = u.length; e; ) {
          for (l = u, u = []; ++d < e; ) l && l[d].run();
          (d = -1), (e = u.length);
        }
        (l = null),
          (c = !1),
          (function (t) {
            if (i === clearTimeout) return clearTimeout(t);
            if ((i === s || !i) && clearTimeout)
              return (i = clearTimeout), clearTimeout(t);
            try {
              i(t);
            } catch (e) {
              try {
                return i.call(null, t);
              } catch (e) {
                return i.call(this, t);
              }
            }
          })(t);
      }
    }
    function h(t, e) {
      (this.fun = t), (this.array = e);
    }
    function m() {}
    (r.nextTick = function (t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
      u.push(new h(t, e)), 1 !== u.length || c || a(f);
    }),
      (h.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (r.title = "browser"),
      (r.browser = !0),
      (r.env = {}),
      (r.argv = []),
      (r.version = ""),
      (r.versions = {}),
      (r.on = m),
      (r.addListener = m),
      (r.once = m),
      (r.off = m),
      (r.removeListener = m),
      (r.removeAllListeners = m),
      (r.emit = m),
      (r.prependListener = m),
      (r.prependOnceListener = m),
      (r.listeners = function (t) {
        return [];
      }),
      (r.binding = function (t) {
        throw new Error("process.binding is not supported");
      }),
      (r.cwd = function () {
        return "/";
      }),
      (r.chdir = function (t) {
        throw new Error("process.chdir is not supported");
      }),
      (r.umask = function () {
        return 0;
      });
  },
  function (t, e, n) {
    n(29), n(101), n(55), n(56);
    var i = n(20);
    t.exports = i.Map;
  },
  function (t, e, n) {
    var i = n(5),
      r = n(21),
      o = n(10),
      s = i("unscopables"),
      a = Array.prototype;
    null == a[s] && o.f(a, s, { configurable: !0, value: r(null) }),
      (t.exports = function (t) {
        a[s][t] = !0;
      });
  },
  function (t, e, n) {
    var i,
      r,
      o = n(1),
      s = n(88),
      a = o.process,
      l = o.Deno,
      u = (a && a.versions) || (l && l.version),
      c = u && u.v8;
    c && (r = (i = c.split("."))[0] > 0 && i[0] < 4 ? 1 : +(i[0] + i[1])),
      !r &&
        s &&
        (!(i = s.match(/Edge\/(\d+)/)) || i[1] >= 74) &&
        (i = s.match(/Chrome\/(\d+)/)) &&
        (r = +i[1]),
      (t.exports = r);
  },
  function (t, e, n) {
    var i = n(13);
    t.exports = i("navigator", "userAgent") || "";
  },
  function (t, e, n) {
    var i = n(9),
      r = n(10),
      o = n(8),
      s = n(12),
      a = n(63);
    t.exports = i
      ? Object.defineProperties
      : function (t, e) {
          o(t);
          for (var n, i = s(e), l = a(e), u = l.length, c = 0; u > c; )
            r.f(t, (n = l[c++]), i[n]);
          return t;
        };
  },
  function (t, e, n) {
    var i = n(1),
      r = n(11),
      o = n(6),
      s = n(62),
      a = n(39),
      l = n(91),
      u = n(5),
      c = i.TypeError,
      d = u("toPrimitive");
    t.exports = function (t, e) {
      if (!o(t) || s(t)) return t;
      var n,
        i = a(t, d);
      if (i) {
        if ((void 0 === e && (e = "default"), (n = r(i, t, e)), !o(n) || s(n)))
          return n;
        throw c("Can't convert object to primitive value");
      }
      return void 0 === e && (e = "number"), l(t, e);
    };
  },
  function (t, e, n) {
    var i = n(1),
      r = n(11),
      o = n(3),
      s = n(6),
      a = i.TypeError;
    t.exports = function (t, e) {
      var n, i;
      if ("string" === e && o((n = t.toString)) && !s((i = r(n, t)))) return i;
      if (o((n = t.valueOf)) && !s((i = r(n, t)))) return i;
      if ("string" !== e && o((n = t.toString)) && !s((i = r(n, t)))) return i;
      throw a("Can't convert object to primitive value");
    };
  },
  function (t, e, n) {
    var i = n(12),
      r = n(93),
      o = n(22),
      s = function (t) {
        return function (e, n, s) {
          var a,
            l = i(e),
            u = o(l),
            c = r(s, u);
          if (t && n != n) {
            for (; u > c; ) if ((a = l[c++]) != a) return !0;
          } else
            for (; u > c; c++)
              if ((t || c in l) && l[c] === n) return t || c || 0;
          return !t && -1;
        };
      };
    t.exports = { includes: s(!0), indexOf: s(!1) };
  },
  function (t, e, n) {
    var i = n(42),
      r = Math.max,
      o = Math.min;
    t.exports = function (t, e) {
      var n = i(t);
      return n < 0 ? r(n + e, 0) : o(n, e);
    };
  },
  function (t, e, n) {
    var i = n(42),
      r = Math.min;
    t.exports = function (t) {
      return t > 0 ? r(i(t), 9007199254740991) : 0;
    };
  },
  function (t, e, n) {
    var i = n(13);
    t.exports = i("document", "documentElement");
  },
  function (t, e, n) {
    var i = n(7),
      r = n(97),
      o = n(66),
      s = n(10);
    t.exports = function (t, e) {
      for (var n = r(e), a = s.f, l = o.f, u = 0; u < n.length; u++) {
        var c = n[u];
        i(t, c) || a(t, c, l(e, c));
      }
    };
  },
  function (t, e, n) {
    var i = n(13),
      r = n(2),
      o = n(47),
      s = n(69),
      a = n(8),
      l = r([].concat);
    t.exports =
      i("Reflect", "ownKeys") ||
      function (t) {
        var e = o.f(a(t)),
          n = s.f;
        return n ? l(e, n(t)) : e;
      };
  },
  function (t, e, n) {
    var i = n(71).IteratorPrototype,
      r = n(21),
      o = n(25),
      s = n(48),
      a = n(18),
      l = function () {
        return this;
      };
    t.exports = function (t, e, n) {
      var u = e + " Iterator";
      return (
        (t.prototype = r(i, { next: o(1, n) })), s(t, u, !1, !0), (a[u] = l), t
      );
    };
  },
  function (t, e, n) {
    var i = n(4);
    t.exports = !i(function () {
      function t() {}
      return (
        (t.prototype.constructor = null),
        Object.getPrototypeOf(new t()) !== t.prototype
      );
    });
  },
  function (t, e, n) {
    var i = n(1),
      r = n(3),
      o = i.String,
      s = i.TypeError;
    t.exports = function (t) {
      if ("object" == typeof t || r(t)) return t;
      throw s("Can't set " + o(t) + " as a prototype");
    };
  },
  function (t, e, n) {
    n(49)(
      "Map",
      function (t) {
        return function () {
          return t(this, arguments.length ? arguments[0] : void 0);
        };
      },
      n(79)
    );
  },
  function (t, e, n) {
    var i = n(16),
      r = n(12),
      o = n(47).f,
      s = n(103),
      a =
        "object" == typeof window && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [];
    t.exports.f = function (t) {
      return a && "Window" == i(t)
        ? (function (t) {
            try {
              return o(t);
            } catch (t) {
              return s(a);
            }
          })(t)
        : o(r(t));
    };
  },
  function (t, e, n) {
    var i = n(2);
    t.exports = i([].slice);
  },
  function (t, e, n) {
    var i = n(4);
    t.exports = i(function () {
      if ("function" == typeof ArrayBuffer) {
        var t = new ArrayBuffer(8);
        Object.isExtensible(t) && Object.defineProperty(t, "a", { value: 8 });
      }
    });
  },
  function (t, e, n) {
    var i = n(4);
    t.exports = !i(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    });
  },
  function (t, e, n) {
    var i = n(3),
      r = n(6),
      o = n(73);
    t.exports = function (t, e, n) {
      var s, a;
      return (
        o &&
          i((s = e.constructor)) &&
          s !== n &&
          r((a = s.prototype)) &&
          a !== n.prototype &&
          o(t, a),
        t
      );
    };
  },
  function (t, e, n) {
    var i = n(13),
      r = n(10),
      o = n(5),
      s = n(9),
      a = o("species");
    t.exports = function (t) {
      var e = i(t),
        n = r.f;
      s &&
        e &&
        !e[a] &&
        n(e, a, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    };
  },
  function (t, e, n) {
    var i = n(52),
      r = n(28);
    t.exports = i
      ? {}.toString
      : function () {
          return "[object " + r(this) + "]";
        };
  },
  function (t, e, n) {
    var i = n(2),
      r = n(42),
      o = n(80),
      s = n(32),
      a = i("".charAt),
      l = i("".charCodeAt),
      u = i("".slice),
      c = function (t) {
        return function (e, n) {
          var i,
            c,
            d = o(s(e)),
            p = r(n),
            f = d.length;
          return p < 0 || p >= f
            ? t
              ? ""
              : void 0
            : (i = l(d, p)) < 55296 ||
              i > 56319 ||
              p + 1 === f ||
              (c = l(d, p + 1)) < 56320 ||
              c > 57343
            ? t
              ? a(d, p)
              : i
            : t
            ? u(d, p, p + 2)
            : c - 56320 + ((i - 55296) << 10) + 65536;
        };
      };
    t.exports = { codeAt: c(!1), charAt: c(!0) };
  },
  function (t, e, n) {
    n(29), n(55), n(111), n(56);
    var i = n(20);
    t.exports = i.Set;
  },
  function (t, e, n) {
    n(49)(
      "Set",
      function (t) {
        return function () {
          return t(this, arguments.length ? arguments[0] : void 0);
        };
      },
      n(79)
    );
  },
  function (t, e, n) {
    n(29), n(55), n(113);
    var i = n(20);
    t.exports = i.WeakMap;
  },
  function (t, e, n) {
    var i,
      r = n(1),
      o = n(2),
      s = n(54),
      a = n(26),
      l = n(49),
      u = n(114),
      c = n(6),
      d = n(74),
      p = n(14).enforce,
      f = n(65),
      h = !r.ActiveXObject && "ActiveXObject" in r,
      m = function (t) {
        return function () {
          return t(this, arguments.length ? arguments[0] : void 0);
        };
      },
      v = l("WeakMap", m, u);
    if (f && h) {
      (i = u.getConstructor(m, "WeakMap", !0)), a.enable();
      var g = v.prototype,
        y = o(g.delete),
        b = o(g.has),
        x = o(g.get),
        w = o(g.set);
      s(g, {
        delete: function (t) {
          if (c(t) && !d(t)) {
            var e = p(this);
            return (
              e.frozen || (e.frozen = new i()), y(this, t) || e.frozen.delete(t)
            );
          }
          return y(this, t);
        },
        has: function (t) {
          if (c(t) && !d(t)) {
            var e = p(this);
            return (
              e.frozen || (e.frozen = new i()), b(this, t) || e.frozen.has(t)
            );
          }
          return b(this, t);
        },
        get: function (t) {
          if (c(t) && !d(t)) {
            var e = p(this);
            return (
              e.frozen || (e.frozen = new i()),
              b(this, t) ? x(this, t) : e.frozen.get(t)
            );
          }
          return x(this, t);
        },
        set: function (t, e) {
          if (c(t) && !d(t)) {
            var n = p(this);
            n.frozen || (n.frozen = new i()),
              b(this, t) ? w(this, t, e) : n.frozen.set(t, e);
          } else w(this, t, e);
          return this;
        },
      });
    }
  },
  function (t, e, n) {
    var i = n(2),
      r = n(54),
      o = n(26).getWeakData,
      s = n(8),
      a = n(6),
      l = n(53),
      u = n(50),
      c = n(115),
      d = n(7),
      p = n(14),
      f = p.set,
      h = p.getterFor,
      m = c.find,
      v = c.findIndex,
      g = i([].splice),
      y = 0,
      b = function (t) {
        return t.frozen || (t.frozen = new x());
      },
      x = function () {
        this.entries = [];
      },
      w = function (t, e) {
        return m(t.entries, function (t) {
          return t[0] === e;
        });
      };
    (x.prototype = {
      get: function (t) {
        var e = w(this, t);
        if (e) return e[1];
      },
      has: function (t) {
        return !!w(this, t);
      },
      set: function (t, e) {
        var n = w(this, t);
        n ? (n[1] = e) : this.entries.push([t, e]);
      },
      delete: function (t) {
        var e = v(this.entries, function (e) {
          return e[0] === t;
        });
        return ~e && g(this.entries, e, 1), !!~e;
      },
    }),
      (t.exports = {
        getConstructor: function (t, e, n, i) {
          var c = t(function (t, r) {
              l(t, p),
                f(t, { type: e, id: y++, frozen: void 0 }),
                null != r && u(r, t[i], { that: t, AS_ENTRIES: n });
            }),
            p = c.prototype,
            m = h(e),
            v = function (t, e, n) {
              var i = m(t),
                r = o(s(e), !0);
              return !0 === r ? b(i).set(e, n) : (r[i.id] = n), t;
            };
          return (
            r(p, {
              delete: function (t) {
                var e = m(this);
                if (!a(t)) return !1;
                var n = o(t);
                return !0 === n
                  ? b(e).delete(t)
                  : n && d(n, e.id) && delete n[e.id];
              },
              has: function (t) {
                var e = m(this);
                if (!a(t)) return !1;
                var n = o(t);
                return !0 === n ? b(e).has(t) : n && d(n, e.id);
              },
            }),
            r(
              p,
              n
                ? {
                    get: function (t) {
                      var e = m(this);
                      if (a(t)) {
                        var n = o(t);
                        return !0 === n ? b(e).get(t) : n ? n[e.id] : void 0;
                      }
                    },
                    set: function (t, e) {
                      return v(this, t, e);
                    },
                  }
                : {
                    add: function (t) {
                      return v(this, t, !0);
                    },
                  }
            ),
            c
          );
        },
      });
  },
  function (t, e, n) {
    var i = n(27),
      r = n(2),
      o = n(30),
      s = n(17),
      a = n(22),
      l = n(116),
      u = r([].push),
      c = function (t) {
        var e = 1 == t,
          n = 2 == t,
          r = 3 == t,
          c = 4 == t,
          d = 6 == t,
          p = 7 == t,
          f = 5 == t || d;
        return function (h, m, v, g) {
          for (
            var y,
              b,
              x = s(h),
              w = o(x),
              D = i(m, v),
              _ = a(w),
              S = 0,
              C = g || l,
              E = e ? C(h, _) : n || p ? C(h, 0) : void 0;
            _ > S;
            S++
          )
            if ((f || S in w) && ((b = D((y = w[S]), S, x)), t))
              if (e) E[S] = b;
              else if (b)
                switch (t) {
                  case 3:
                    return !0;
                  case 5:
                    return y;
                  case 6:
                    return S;
                  case 2:
                    u(E, y);
                }
              else
                switch (t) {
                  case 4:
                    return !1;
                  case 7:
                    u(E, y);
                }
          return d ? -1 : r || c ? c : E;
        };
      };
    t.exports = {
      forEach: c(0),
      map: c(1),
      filter: c(2),
      some: c(3),
      every: c(4),
      find: c(5),
      findIndex: c(6),
      filterReject: c(7),
    };
  },
  function (t, e, n) {
    var i = n(117);
    t.exports = function (t, e) {
      return new (i(t))(0 === e ? 0 : e);
    };
  },
  function (t, e, n) {
    var i = n(1),
      r = n(118),
      o = n(81),
      s = n(6),
      a = n(5)("species"),
      l = i.Array;
    t.exports = function (t) {
      var e;
      return (
        r(t) &&
          ((e = t.constructor),
          ((o(e) && (e === l || r(e.prototype))) ||
            (s(e) && null === (e = e[a]))) &&
            (e = void 0)),
        void 0 === e ? l : e
      );
    };
  },
  function (t, e, n) {
    var i = n(16);
    t.exports =
      Array.isArray ||
      function (t) {
        return "Array" == i(t);
      };
  },
  function (t, e, n) {
    n(56), n(120);
    var i = n(20);
    t.exports = i.Array.from;
  },
  function (t, e, n) {
    var i = n(19),
      r = n(121);
    i(
      {
        target: "Array",
        stat: !0,
        forced: !n(78)(function (t) {
          Array.from(t);
        }),
      },
      { from: r }
    );
  },
  function (t, e, n) {
    var i = n(1),
      r = n(27),
      o = n(11),
      s = n(17),
      a = n(122),
      l = n(75),
      u = n(81),
      c = n(22),
      d = n(123),
      p = n(76),
      f = n(51),
      h = i.Array;
    t.exports = function (t) {
      var e = s(t),
        n = u(this),
        i = arguments.length,
        m = i > 1 ? arguments[1] : void 0,
        v = void 0 !== m;
      v && (m = r(m, i > 2 ? arguments[2] : void 0));
      var g,
        y,
        b,
        x,
        w,
        D,
        _ = f(e),
        S = 0;
      if (!_ || (this == h && l(_)))
        for (g = c(e), y = n ? new this(g) : h(g); g > S; S++)
          (D = v ? m(e[S], S) : e[S]), d(y, S, D);
      else
        for (
          w = (x = p(e, _)).next, y = n ? new this() : [];
          !(b = o(w, x)).done;
          S++
        )
          (D = v ? a(x, m, [b.value, S], !0) : b.value), d(y, S, D);
      return (y.length = S), y;
    };
  },
  function (t, e, n) {
    var i = n(8),
      r = n(77);
    t.exports = function (t, e, n, o) {
      try {
        return o ? e(i(n)[0], n[1]) : e(n);
      } catch (e) {
        r(t, "throw", e);
      }
    };
  },
  function (t, e, n) {
    var i = n(37),
      r = n(10),
      o = n(25);
    t.exports = function (t, e, n) {
      var s = i(e);
      s in t ? r.f(t, s, o(0, n)) : (t[s] = n);
    };
  },
  function (t, e, n) {
    n(125);
    var i = n(20);
    t.exports = i.Object.assign;
  },
  function (t, e, n) {
    var i = n(19),
      r = n(126);
    i(
      { target: "Object", stat: !0, forced: Object.assign !== r },
      { assign: r }
    );
  },
  function (t, e, n) {
    var i = n(9),
      r = n(2),
      o = n(11),
      s = n(4),
      a = n(63),
      l = n(69),
      u = n(67),
      c = n(17),
      d = n(30),
      p = Object.assign,
      f = Object.defineProperty,
      h = r([].concat);
    t.exports =
      !p ||
      s(function () {
        if (
          i &&
          1 !==
            p(
              { b: 1 },
              p(
                f({}, "a", {
                  enumerable: !0,
                  get: function () {
                    f(this, "b", { value: 3, enumerable: !1 });
                  },
                }),
                { b: 2 }
              )
            ).b
        )
          return !0;
        var t = {},
          e = {},
          n = Symbol();
        return (
          (t[n] = 7),
          "abcdefghijklmnopqrst".split("").forEach(function (t) {
            e[t] = t;
          }),
          7 != p({}, t)[n] || "abcdefghijklmnopqrst" != a(p({}, e)).join("")
        );
      })
        ? function (t, e) {
            for (
              var n = c(t), r = arguments.length, s = 1, p = l.f, f = u.f;
              r > s;

            )
              for (
                var m,
                  v = d(arguments[s++]),
                  g = p ? h(a(v), p(v)) : a(v),
                  y = g.length,
                  b = 0;
                y > b;

              )
                (m = g[b++]), (i && !o(f, v, m)) || (n[m] = v[m]);
            return n;
          }
        : p;
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = {};
    n.r(i),
      n.d(i, "keyboardHandler", function () {
        return Fs;
      }),
      n.d(i, "mouseHandler", function () {
        return Ls;
      }),
      n.d(i, "resizeHandler", function () {
        return Is;
      }),
      n.d(i, "selectHandler", function () {
        return js;
      }),
      n.d(i, "touchHandler", function () {
        return zs;
      }),
      n.d(i, "wheelHandler", function () {
        return Ns;
      });
    var r = (function () {
        function t(t, e, n) {
          (this.app = t), e && (this.el = e), n && (this.options = n);
        }
        var e = t.prototype;
        return (
          (e.onInit = function () {
            return new Promise(function (t, e) {
              return t();
            });
          }),
          (e.onRefresh = function () {
            return new Promise(function (t, e) {
              return t();
            });
          }),
          (e.onEnter = function () {
            return new Promise(function (t, e) {
              return t();
            });
          }),
          (e.onComplete = function () {
            return new Promise(function (t, e) {
              return t();
            });
          }),
          (e.onLeave = function () {
            return new Promise(function (t, e) {
              return t();
            });
          }),
          (e.onDestroy = function () {
            return new Promise(function (t, e) {
              return t();
            });
          }),
          (e.onLoading = function () {
            return new Promise(function (t, e) {
              return t();
            });
          }),
          (e.onLoaded = function () {
            return new Promise(function (t, e) {
              return t();
            });
          }),
          t
        );
      })(),
      o = (function () {
        function t(t) {
          (this.store = new Map()),
            (this.registry = new Map()),
            (this.events = []),
            (this.options = Object.assign(
              {},
              { start: !0, cleanupNodes: !0 },
              t
            )),
            this.options.define && this.defineAll(this.options.define),
            this.options.start && this.start();
        }
        var e = t.prototype;
        return (
          (e.start = function () {
            return new Promise(
              function (t, e) {
                var n;
                return (
                  (n = this),
                  "complete" === document.readyState
                    ? Promise.resolve(this.init()).then(
                        function (t) {
                          try {
                            return i.call(this);
                          } catch (t) {
                            return e(t);
                          }
                        }.bind(this),
                        e
                      )
                    : (document.addEventListener(
                        "DOMContentLoaded",
                        function () {
                          return n.init();
                        }
                      ),
                      i.call(this))
                );
                function i() {
                  return t();
                }
              }.bind(this)
            );
          }),
          (e.init = function () {
            return new Promise(
              function (t, e) {
                var n;
                return (
                  (n = this),
                  this.registry.forEach(function (t, e) {
                    if ((n.store.has(e) || n.store.set(e, []), t.assign))
                      for (
                        var i = n.queryAll(t.assign), r = 0;
                        r < i.length;
                        r++
                      ) {
                        var o = i[r];
                        n.attach(e, o, null, !1);
                      }
                    else n.attach(e, null, null, !1);
                  }),
                  Promise.resolve(
                    new Promise(function (t) {
                      "complete" === document.readyState
                        ? t()
                        : window.addEventListener("load", function () {
                            return t();
                          });
                    })
                  ).then(
                    function (n) {
                      try {
                        return Promise.resolve(this.execute("init")).then(
                          function (n) {
                            try {
                              return Promise.resolve(
                                this.execute("enter")
                              ).then(
                                function (n) {
                                  try {
                                    return Promise.resolve(
                                      this.execute("complete")
                                    ).then(function (n) {
                                      try {
                                        return t();
                                      } catch (t) {
                                        return e(t);
                                      }
                                    }, e);
                                  } catch (t) {
                                    return e(t);
                                  }
                                }.bind(this),
                                e
                              );
                            } catch (t) {
                              return e(t);
                            }
                          }.bind(this),
                          e
                        );
                      } catch (t) {
                        return e(t);
                      }
                    }.bind(this),
                    e
                  )
                );
              }.bind(this)
            );
          }),
          (e.update = function (t) {
            return new Promise(
              function (e, n) {
                var i = this;
                void 0 === t && (t = !0);
                var r = [],
                  o = [];
                return (
                  this.registry.forEach(function (e, n) {
                    var s = i.store.get(n);
                    if (e.assign) {
                      var a = i.queryAll(e.assign);
                      i.options.cleanupNodes &&
                        s.forEach(function (e, r) {
                          e.el &&
                            !e.el.isConnected &&
                            o.push(i.detach(n, r, t));
                        });
                      for (
                        var l = function (e) {
                            var o = a[e],
                              l = s.filter(function (t) {
                                return t.el && o.isSameNode(t.el);
                              })[0];
                            l
                              ? l.onRefresh && t && r.push(l.onRefresh())
                              : r.push(i.attach(n, o, null, t));
                          },
                          u = 0;
                        u < a.length;
                        u++
                      )
                        l(u);
                    } else
                      s.forEach(function (e) {
                        e.onRefresh && t && r.push(e.onRefresh());
                      });
                  }),
                  e(Promise.all(o.concat(r)))
                );
              }.bind(this)
            );
          }),
          (e.execute = function (t) {
            return new Promise(
              function (e, n) {
                var i = [],
                  r = "on" + t.charAt(0).toUpperCase() + t.slice(1);
                return (
                  this.trigger(t),
                  this.store.forEach(function (t) {
                    t.forEach(function (t) {
                      return i.push(t[r]());
                    });
                  }),
                  e(Promise.all(i))
                );
              }.bind(this)
            );
          }),
          (e.attach = function (t, e, n, i) {
            return new Promise(
              function (r, o) {
                var s, a, l;
                if (
                  (void 0 === i && (i = !0),
                  (s = n || this.registry.get(t).options),
                  (a = this.registry.get(t).component),
                  (l = new a(this, e, s)),
                  this.store.get(t).push(l),
                  i && l.onInit)
                )
                  return Promise.resolve(l.onInit()).then(
                    function (t) {
                      try {
                        return u.call(this);
                      } catch (t) {
                        return o(t);
                      }
                    }.bind(this),
                    o
                  );
                function u() {
                  return r(l);
                }
                return u.call(this);
              }.bind(this)
            );
          }),
          (e.detach = function (t, e, n) {
            return new Promise(
              function (i, r) {
                var o;
                if (
                  (void 0 === n && (n = !0),
                  (o = this.store.get(t).splice(e, 1)[0]),
                  n && o.onDestroy)
                )
                  return Promise.resolve(o.onDestroy()).then(
                    function (t) {
                      try {
                        return s.call(this);
                      } catch (t) {
                        return r(t);
                      }
                    }.bind(this),
                    r
                  );
                function s() {
                  return i(o);
                }
                return s.call(this);
              }.bind(this)
            );
          }),
          (e.define = function (t, e, n, i) {
            return (
              this.registry.set(t, { assign: n, component: e, options: i }),
              this
            );
          }),
          (e.defineAll = function (t) {
            var e = this;
            return (
              t.forEach(function (t) {
                e.define(t.namespace, t.component, t.assign, t.options);
              }),
              this
            );
          }),
          (e.on = function (t, e) {
            return (
              this.events[t] instanceof Array || this.off(t),
              this.events[t].push(e),
              this
            );
          }),
          (e.off = function (t) {
            return (this.events[t] = []), this;
          }),
          (e.trigger = function (t) {
            for (
              var e = this.events[t] || [],
                n = arguments.length,
                i = new Array(n > 1 ? n - 1 : 0),
                r = 1;
              r < n;
              r++
            )
              i[r - 1] = arguments[r];
            for (var o = 0; o < e.length; o++) {
              var s;
              (s = e[o]).call.apply(s, [this].concat(i));
            }
            return this;
          }),
          (e.get = function (t) {
            var e = this.store.get(t);
            return e ? e[0] : null;
          }),
          (e.getAll = function (t) {
            return this.store.get(t);
          }),
          (e.find = function (t, e) {
            var n = this.findAll(t, e);
            return n ? n[0] : null;
          }),
          (e.findAll = function (t, e) {
            var n = e ? [this.store.get(e) || []] : this.store,
              i = [];
            return (
              n.forEach(function (e) {
                i.push.apply(
                  i,
                  e.filter(function (e) {
                    return (
                      e.el &&
                      ("string" == typeof t ? e.el.matches(t) : e.el === t)
                    );
                  })
                );
              }),
              i
            );
          }),
          (e.query = function (t) {
            return "string" == typeof t
              ? document.querySelector(t)
              : "object" == typeof t
              ? t
              : null;
          }),
          (e.queryAll = function (t) {
            return "string" == typeof t
              ? document.querySelectorAll(t)
              : "object" == typeof t
              ? t
              : [];
          }),
          t
        );
      })();
    function s(t, e) {
      return (s =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    var a = (function (t) {
        var e, n;
        function i() {
          var e;
          return (
            ((e = t.apply(this, arguments) || this).options = Object.assign(
              {},
              {
                bindLinks: !0,
                bindHistory: !0,
                updateSelectors: ["title", "meta", "#view-main"],
                updateRemoveNodes: !0,
                scrollRestoration: "manual",
                reqOptions: { history: "push" },
              },
              e.options
            )),
            (e.parser = new DOMParser()),
            "scrollRestoration" in window.history &&
              (window.history.scrollRestoration = e.options.scrollRestoration),
            e.options.bindLinks && e.bindLinks(),
            e.options.bindHistory && e.bindHistory(),
            e
          );
        }
        (n = t),
          ((e = i).prototype = Object.create(n.prototype)),
          (e.prototype.constructor = e),
          s(e, n);
        var r = i.prototype;
        return (
          (r.bindLinks = function () {
            var t = this;
            document.addEventListener(
              "click",
              function (e) {
                for (var n = e.target; n && n !== document; n = n.parentNode)
                  if (
                    "A" === n.tagName &&
                    n.href &&
                    n.host === window.location.host
                  ) {
                    e.preventDefault(), t.goTo(n.href);
                    break;
                  }
              },
              !1
            );
          }),
          (r.bindHistory = function () {
            var t = this;
            window.addEventListener("popstate", function () {
              t.goTo(window.location.pathname, { history: !1 });
            });
          }),
          (r.pushHistory = function (t, e) {
            void 0 === e && (e = "push"),
              window.history["push" === e ? "pushState" : "replaceState"](
                {},
                "",
                t
              );
          }),
          (r.replaceBySelector = function (t, e, n) {
            void 0 === n && (n = !0);
            var i = document.querySelectorAll(t),
              r = e.querySelectorAll(t);
            i.forEach(function (t, e) {
              r[e] ? t.replaceWith(r[e]) : n && t.remove();
            });
          }),
          (r.goTo = function (t, e) {
            return new Promise(
              function (n, i) {
                return (
                  (this.reqOptions = Object.assign(
                    {},
                    { url: t, fetch: {} },
                    this.options.reqOptions,
                    e
                  )),
                  this.reqOptions.history &&
                    this.pushHistory(t, this.reqOptions.history),
                  Promise.resolve(this.app.execute("leave")).then(
                    function (t) {
                      try {
                        return Promise.resolve(
                          this.app.execute("loading")
                        ).then(
                          function (t) {
                            try {
                              return Promise.resolve(
                                this.app.execute("loaded")
                              ).then(
                                function (t) {
                                  try {
                                    return Promise.resolve(
                                      this.app.update()
                                    ).then(
                                      function (t) {
                                        try {
                                          return Promise.resolve(
                                            this.app.execute("enter")
                                          ).then(
                                            function (t) {
                                              try {
                                                return Promise.resolve(
                                                  this.app.execute("complete")
                                                ).then(function (t) {
                                                  try {
                                                    return n();
                                                  } catch (t) {
                                                    return i(t);
                                                  }
                                                }, i);
                                              } catch (t) {
                                                return i(t);
                                              }
                                            }.bind(this),
                                            i
                                          );
                                        } catch (t) {
                                          return i(t);
                                        }
                                      }.bind(this),
                                      i
                                    );
                                  } catch (t) {
                                    return i(t);
                                  }
                                }.bind(this),
                                i
                              );
                            } catch (t) {
                              return i(t);
                            }
                          }.bind(this),
                          i
                        );
                      } catch (t) {
                        return i(t);
                      }
                    }.bind(this),
                    i
                  )
                );
              }.bind(this)
            );
          }),
          (r.onLoading = function () {
            return new Promise(
              function (t, e) {
                return Promise.resolve(
                  fetch(this.reqOptions.url, this.reqOptions.fetch)
                ).then(
                  function (n) {
                    try {
                      return (
                        (this.req = n),
                        Promise.resolve(this.req.text()).then(
                          function (n) {
                            try {
                              return (
                                (this.data = n),
                                (this.document = this.data
                                  ? this.parser.parseFromString(
                                      this.data,
                                      "text/html"
                                    )
                                  : null),
                                t()
                              );
                            } catch (t) {
                              return e(t);
                            }
                          }.bind(this),
                          e
                        )
                      );
                    } catch (t) {
                      return e(t);
                    }
                  }.bind(this),
                  e
                );
              }.bind(this)
            );
          }),
          (r.onLoaded = function () {
            return new Promise(
              function (t, e) {
                var n = this;
                return (
                  this.options.updateSelectors &&
                    this.document &&
                    this.options.updateSelectors.forEach(function (t) {
                      n.replaceBySelector(
                        t,
                        n.document,
                        n.options.updateRemoveNodes
                      );
                    }),
                  t()
                );
              }.bind(this)
            );
          }),
          i
        );
      })(r),
      l = n(82);
    function u(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    }
    function c(t, e) {
      (t.prototype = Object.create(e.prototype)),
        (t.prototype.constructor = t),
        (t.__proto__ = e);
    }
    /*!
     * GSAP 3.8.0
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */ var d,
      p,
      f,
      h,
      m,
      v,
      g,
      y,
      b,
      x,
      w,
      D,
      _,
      S = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: { lineHeight: "" },
      },
      C = { duration: 0.5, overwrite: !1, delay: 0 },
      E = 1e8,
      T = 2 * Math.PI,
      P = T / 4,
      A = 0,
      k = Math.sqrt,
      O = Math.cos,
      M = Math.sin,
      F = function (t) {
        return "string" == typeof t;
      },
      B = function (t) {
        return "function" == typeof t;
      },
      L = function (t) {
        return "number" == typeof t;
      },
      I = function (t) {
        return void 0 === t;
      },
      j = function (t) {
        return "object" == typeof t;
      },
      R = function (t) {
        return !1 !== t;
      },
      z = function () {
        return "undefined" != typeof window;
      },
      N = function (t) {
        return B(t) || F(t);
      },
      q =
        ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
        function () {},
      W = Array.isArray,
      V = /(?:-?\.?\d|\.)+/gi,
      H = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
      G = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      $ = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
      X = /[+-]=-?[.\d]+/,
      Y = /[^,'"\[\]\s]+/gi,
      U = /[\d.+\-=]+(?:e[-+]\d*)*/i,
      Q = {},
      K = {},
      Z = function (t) {
        return (K = St(t, Q)) && un;
      },
      J = function (t, e) {
        return console.warn(
          "Invalid property",
          t,
          "set to",
          e,
          "Missing plugin? gsap.registerPlugin()"
        );
      },
      tt = function (t, e) {
        return !e && console.warn(t);
      },
      et = function (t, e) {
        return (t && (Q[t] = e) && K && (K[t] = e)) || Q;
      },
      nt = function () {
        return 0;
      },
      it = {},
      rt = [],
      ot = {},
      st = {},
      at = {},
      lt = 30,
      ut = [],
      ct = "",
      dt = function (t) {
        var e,
          n,
          i = t[0];
        if ((j(i) || B(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
          for (n = ut.length; n-- && !ut[n].targetTest(i); );
          e = ut[n];
        }
        for (n = t.length; n--; )
          (t[n] && (t[n]._gsap || (t[n]._gsap = new Fe(t[n], e)))) ||
            t.splice(n, 1);
        return t;
      },
      pt = function (t) {
        return t._gsap || dt(Jt(t))[0]._gsap;
      },
      ft = function (t, e, n) {
        return (n = t[e]) && B(n)
          ? t[e]()
          : (I(n) && t.getAttribute && t.getAttribute(e)) || n;
      },
      ht = function (t, e) {
        return (t = t.split(",")).forEach(e) || t;
      },
      mt = function (t) {
        return Math.round(1e5 * t) / 1e5 || 0;
      },
      vt = function (t) {
        return Math.round(1e7 * t) / 1e7 || 0;
      },
      gt = function (t, e) {
        for (var n = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < n; );
        return i < n;
      },
      yt = function () {
        var t,
          e,
          n = rt.length,
          i = rt.slice(0);
        for (ot = {}, rt.length = 0, t = 0; t < n; t++)
          (e = i[t]) &&
            e._lazy &&
            (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
      },
      bt = function (t, e, n, i) {
        rt.length && yt(), t.render(e, n, i), rt.length && yt();
      },
      xt = function (t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(Y).length < 2
          ? e
          : F(t)
          ? t.trim()
          : t;
      },
      wt = function (t) {
        return t;
      },
      Dt = function (t, e) {
        for (var n in e) n in t || (t[n] = e[n]);
        return t;
      },
      _t = function (t, e) {
        for (var n in e)
          n in t || "duration" === n || "ease" === n || (t[n] = e[n]);
      },
      St = function (t, e) {
        for (var n in e) t[n] = e[n];
        return t;
      },
      Ct = function t(e, n) {
        for (var i in n)
          "__proto__" !== i &&
            "constructor" !== i &&
            "prototype" !== i &&
            (e[i] = j(n[i]) ? t(e[i] || (e[i] = {}), n[i]) : n[i]);
        return e;
      },
      Et = function (t, e) {
        var n,
          i = {};
        for (n in t) n in e || (i[n] = t[n]);
        return i;
      },
      Tt = function (t) {
        var e = t.parent || p,
          n = t.keyframes ? _t : Dt;
        if (R(t.inherit))
          for (; e; ) n(t, e.vars.defaults), (e = e.parent || e._dp);
        return t;
      },
      Pt = function (t, e, n, i) {
        void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
        var r = e._prev,
          o = e._next;
        r ? (r._next = o) : t[n] === e && (t[n] = o),
          o ? (o._prev = r) : t[i] === e && (t[i] = r),
          (e._next = e._prev = e.parent = null);
      },
      At = function (t, e) {
        t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
          (t._act = 0);
      },
      kt = function (t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
          for (var n = t; n; ) (n._dirty = 1), (n = n.parent);
        return t;
      },
      Ot = function (t) {
        for (var e = t.parent; e && e.parent; )
          (e._dirty = 1), e.totalDuration(), (e = e.parent);
        return t;
      },
      Mt = function (t) {
        return t._repeat ? Ft(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
      },
      Ft = function (t, e) {
        var n = Math.floor((t /= e));
        return t && n === t ? n - 1 : n;
      },
      Bt = function (t, e) {
        return (
          (t - e._start) * e._ts +
          (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        );
      },
      Lt = function (t) {
        return (t._end = vt(
          t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0)
        ));
      },
      It = function (t, e) {
        var n = t._dp;
        return (
          n &&
            n.smoothChildTiming &&
            t._ts &&
            ((t._start = vt(
              n._time -
                (t._ts > 0
                  ? e / t._ts
                  : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
            )),
            Lt(t),
            n._dirty || kt(n, t)),
          t
        );
      },
      jt = function (t, e) {
        var n;
        if (
          ((e._time || (e._initted && !e._dur)) &&
            ((n = Bt(t.rawTime(), e)),
            (!e._dur || Yt(0, e.totalDuration(), n) - e._tTime > 1e-8) &&
              e.render(n, !0)),
          kt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
        ) {
          if (t._dur < t.duration())
            for (n = t; n._dp; )
              n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
          t._zTime = -1e-8;
        }
      },
      Rt = function (t, e, n, i) {
        return (
          e.parent && At(e),
          (e._start = vt(
            (L(n) ? n : n || t !== p ? Gt(t, n, e) : t._time) + e._delay
          )),
          (e._end = vt(
            e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
          )),
          (function (t, e, n, i, r) {
            void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
            var o,
              s = t[i];
            if (r) for (o = e[r]; s && s[r] > o; ) s = s._prev;
            s
              ? ((e._next = s._next), (s._next = e))
              : ((e._next = t[n]), (t[n] = e)),
              e._next ? (e._next._prev = e) : (t[i] = e),
              (e._prev = s),
              (e.parent = e._dp = t);
          })(t, e, "_first", "_last", t._sort ? "_start" : 0),
          qt(e) || (t._recent = e),
          i || jt(t, e),
          t
        );
      },
      zt = function (t, e) {
        return (
          (Q.ScrollTrigger || J("scrollTrigger", e)) &&
          Q.ScrollTrigger.create(e, t)
        );
      },
      Nt = function (t, e, n, i) {
        return (
          Ne(t, e),
          t._initted
            ? !n &&
              t._pt &&
              ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
              g !== xe.frame
              ? (rt.push(t), (t._lazy = [e, i]), 1)
              : void 0
            : 1
        );
      },
      qt = function (t) {
        var e = t.data;
        return "isFromStart" === e || "isStart" === e;
      },
      Wt = function (t, e, n, i) {
        var r = t._repeat,
          o = vt(e) || 0,
          s = t._tTime / t._tDur;
        return (
          s && !i && (t._time *= o / t._dur),
          (t._dur = o),
          (t._tDur = r ? (r < 0 ? 1e10 : vt(o * (r + 1) + t._rDelay * r)) : o),
          s && !i ? It(t, (t._tTime = t._tDur * s)) : t.parent && Lt(t),
          n || kt(t.parent, t),
          t
        );
      },
      Vt = function (t) {
        return t instanceof Le ? kt(t) : Wt(t, t._dur);
      },
      Ht = { _start: 0, endTime: nt, totalDuration: nt },
      Gt = function t(e, n, i) {
        var r,
          o,
          s,
          a = e.labels,
          l = e._recent || Ht,
          u = e.duration() >= E ? l.endTime(!1) : e._dur;
        return F(n) && (isNaN(n) || n in a)
          ? ((o = n.charAt(0)),
            (s = "%" === n.substr(-1)),
            (r = n.indexOf("=")),
            "<" === o || ">" === o
              ? (r >= 0 && (n = n.replace(/=/, "")),
                ("<" === o ? l._start : l.endTime(l._repeat >= 0)) +
                  (parseFloat(n.substr(1)) || 0) *
                    (s ? (r < 0 ? l : i).totalDuration() / 100 : 1))
              : r < 0
              ? (n in a || (a[n] = u), a[n])
              : ((o = parseFloat(n.charAt(r - 1) + n.substr(r + 1))),
                s && i && (o = (o / 100) * (W(i) ? i[0] : i).totalDuration()),
                r > 1 ? t(e, n.substr(0, r - 1), i) + o : u + o))
          : null == n
          ? u
          : +n;
      },
      $t = function (t, e, n) {
        var i,
          r,
          o = L(e[1]),
          s = (o ? 2 : 1) + (t < 2 ? 0 : 1),
          a = e[s];
        if ((o && (a.duration = e[1]), (a.parent = n), t)) {
          for (i = a, r = n; r && !("immediateRender" in i); )
            (i = r.vars.defaults || {}), (r = R(r.vars.inherit) && r.parent);
          (a.immediateRender = R(i.immediateRender)),
            t < 2 ? (a.runBackwards = 1) : (a.startAt = e[s - 1]);
        }
        return new He(e[0], a, e[s + 1]);
      },
      Xt = function (t, e) {
        return t || 0 === t ? e(t) : e;
      },
      Yt = function (t, e, n) {
        return n < t ? t : n > e ? e : n;
      },
      Ut = function (t) {
        if ("string" != typeof t) return "";
        var e = U.exec(t);
        return e ? t.substr(e.index + e[0].length) : "";
      },
      Qt = [].slice,
      Kt = function (t, e) {
        return (
          t &&
          j(t) &&
          "length" in t &&
          ((!e && !t.length) || (t.length - 1 in t && j(t[0]))) &&
          !t.nodeType &&
          t !== f
        );
      },
      Zt = function (t, e, n) {
        return (
          void 0 === n && (n = []),
          t.forEach(function (t) {
            var i;
            return (F(t) && !e) || Kt(t, 1)
              ? (i = n).push.apply(i, Jt(t))
              : n.push(t);
          }) || n
        );
      },
      Jt = function (t, e, n) {
        return !F(t) || n || (!h && we())
          ? W(t)
            ? Zt(t, n)
            : Kt(t)
            ? Qt.call(t, 0)
            : t
            ? [t]
            : []
          : Qt.call((e || m).querySelectorAll(t), 0);
      },
      te = function (t) {
        return t.sort(function () {
          return 0.5 - Math.random();
        });
      },
      ee = function (t) {
        if (B(t)) return t;
        var e = j(t) ? t : { each: t },
          n = Pe(e.ease),
          i = e.from || 0,
          r = parseFloat(e.base) || 0,
          o = {},
          s = i > 0 && i < 1,
          a = isNaN(i) || s,
          l = e.axis,
          u = i,
          c = i;
        return (
          F(i)
            ? (u = c = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
            : !s && a && ((u = i[0]), (c = i[1])),
          function (t, s, d) {
            var p,
              f,
              h,
              m,
              v,
              g,
              y,
              b,
              x,
              w = (d || e).length,
              D = o[w];
            if (!D) {
              if (!(x = "auto" === e.grid ? 0 : (e.grid || [1, E])[1])) {
                for (
                  y = -E;
                  y < (y = d[x++].getBoundingClientRect().left) && x < w;

                );
                x--;
              }
              for (
                D = o[w] = [],
                  p = a ? Math.min(x, w) * u - 0.5 : i % x,
                  f = a ? (w * c) / x - 0.5 : (i / x) | 0,
                  y = 0,
                  b = E,
                  g = 0;
                g < w;
                g++
              )
                (h = (g % x) - p),
                  (m = f - ((g / x) | 0)),
                  (D[g] = v =
                    l ? Math.abs("y" === l ? m : h) : k(h * h + m * m)),
                  v > y && (y = v),
                  v < b && (b = v);
              "random" === i && te(D),
                (D.max = y - b),
                (D.min = b),
                (D.v = w =
                  (parseFloat(e.amount) ||
                    parseFloat(e.each) *
                      (x > w
                        ? w - 1
                        : l
                        ? "y" === l
                          ? w / x
                          : x
                        : Math.max(x, w / x)) ||
                    0) * ("edges" === i ? -1 : 1)),
                (D.b = w < 0 ? r - w : r),
                (D.u = Ut(e.amount || e.each) || 0),
                (n = n && w < 0 ? Ee(n) : n);
            }
            return (
              (w = (D[t] - D.min) / D.max || 0),
              vt(D.b + (n ? n(w) : w) * D.v) + D.u
            );
          }
        );
      },
      ne = function (t) {
        var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
        return function (n) {
          var i = Math.round(parseFloat(n) / t) * t * e;
          return (i - (i % 1)) / e + (L(n) ? 0 : Ut(n));
        };
      },
      ie = function (t, e) {
        var n,
          i,
          r = W(t);
        return (
          !r &&
            j(t) &&
            ((n = r = t.radius || E),
            t.values
              ? ((t = Jt(t.values)), (i = !L(t[0])) && (n *= n))
              : (t = ne(t.increment))),
          Xt(
            e,
            r
              ? B(t)
                ? function (e) {
                    return (i = t(e)), Math.abs(i - e) <= n ? i : e;
                  }
                : function (e) {
                    for (
                      var r,
                        o,
                        s = parseFloat(i ? e.x : e),
                        a = parseFloat(i ? e.y : 0),
                        l = E,
                        u = 0,
                        c = t.length;
                      c--;

                    )
                      (r = i
                        ? (r = t[c].x - s) * r + (o = t[c].y - a) * o
                        : Math.abs(t[c] - s)) < l && ((l = r), (u = c));
                    return (
                      (u = !n || l <= n ? t[u] : e),
                      i || u === e || L(e) ? u : u + Ut(e)
                    );
                  }
              : ne(t)
          )
        );
      },
      re = function (t, e, n, i) {
        return Xt(W(t) ? !e : !0 === n ? !!(n = 0) : !i, function () {
          return W(t)
            ? t[~~(Math.random() * t.length)]
            : (n = n || 1e-5) &&
                (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) &&
                Math.floor(
                  Math.round(
                    (t - n / 2 + Math.random() * (e - t + 0.99 * n)) / n
                  ) *
                    n *
                    i
                ) / i;
        });
      },
      oe = function (t, e, n) {
        return Xt(n, function (n) {
          return t[~~e(n)];
        });
      },
      se = function (t) {
        for (var e, n, i, r, o = 0, s = ""; ~(e = t.indexOf("random(", o)); )
          (i = t.indexOf(")", e)),
            (r = "[" === t.charAt(e + 7)),
            (n = t.substr(e + 7, i - e - 7).match(r ? Y : V)),
            (s +=
              t.substr(o, e - o) +
              re(r ? n : +n[0], r ? 0 : +n[1], +n[2] || 1e-5)),
            (o = i + 1);
        return s + t.substr(o, t.length - o);
      },
      ae = function (t, e, n, i, r) {
        var o = e - t,
          s = i - n;
        return Xt(r, function (e) {
          return n + (((e - t) / o) * s || 0);
        });
      },
      le = function (t, e, n) {
        var i,
          r,
          o,
          s = t.labels,
          a = E;
        for (i in s)
          (r = s[i] - e) < 0 == !!n &&
            r &&
            a > (r = Math.abs(r)) &&
            ((o = i), (a = r));
        return o;
      },
      ue = function (t, e, n) {
        var i,
          r,
          o = t.vars,
          s = o[e];
        if (s)
          return (
            (i = o[e + "Params"]),
            (r = o.callbackScope || t),
            n && rt.length && yt(),
            i ? s.apply(r, i) : s.call(r)
          );
      },
      ce = function (t) {
        return (
          At(t),
          t.scrollTrigger && t.scrollTrigger.kill(!1),
          t.progress() < 1 && ue(t, "onInterrupt"),
          t
        );
      },
      de = function (t) {
        var e = (t = (!t.name && t.default) || t).name,
          n = B(t),
          i =
            e && !n && t.init
              ? function () {
                  this._props = [];
                }
              : t,
          r = {
            init: nt,
            render: Je,
            add: Re,
            kill: en,
            modifier: tn,
            rawVars: 0,
          },
          o = {
            targetTest: 0,
            get: 0,
            getSetter: Ue,
            aliases: {},
            register: 0,
          };
        if ((we(), t !== i)) {
          if (st[e]) return;
          Dt(i, Dt(Et(t, r), o)),
            St(i.prototype, St(r, Et(t, o))),
            (st[(i.prop = e)] = i),
            t.targetTest && (ut.push(i), (it[e] = 1)),
            (e =
              ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) +
              "Plugin");
        }
        et(e, i), t.register && t.register(un, i, on);
      },
      pe = {
        aqua: [0, 255, 255],
        lime: [0, 255, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, 255],
        navy: [0, 0, 128],
        white: [255, 255, 255],
        olive: [128, 128, 0],
        yellow: [255, 255, 0],
        orange: [255, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [255, 0, 0],
        pink: [255, 192, 203],
        cyan: [0, 255, 255],
        transparent: [255, 255, 255, 0],
      },
      fe = function (t, e, n) {
        return (
          (255 *
            (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1
              ? e + (n - e) * t * 6
              : t < 0.5
              ? n
              : 3 * t < 2
              ? e + (n - e) * (2 / 3 - t) * 6
              : e) +
            0.5) |
          0
        );
      },
      he = function (t, e, n) {
        var i,
          r,
          o,
          s,
          a,
          l,
          u,
          c,
          d,
          p,
          f = t ? (L(t) ? [t >> 16, (t >> 8) & 255, 255 & t] : 0) : pe.black;
        if (!f) {
          if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), pe[t]))
            f = pe[t];
          else if ("#" === t.charAt(0)) {
            if (
              (t.length < 6 &&
                ((i = t.charAt(1)),
                (r = t.charAt(2)),
                (o = t.charAt(3)),
                (t =
                  "#" +
                  i +
                  i +
                  r +
                  r +
                  o +
                  o +
                  (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))),
              9 === t.length)
            )
              return [
                (f = parseInt(t.substr(1, 6), 16)) >> 16,
                (f >> 8) & 255,
                255 & f,
                parseInt(t.substr(7), 16) / 255,
              ];
            f = [
              (t = parseInt(t.substr(1), 16)) >> 16,
              (t >> 8) & 255,
              255 & t,
            ];
          } else if ("hsl" === t.substr(0, 3))
            if (((f = p = t.match(V)), e)) {
              if (~t.indexOf("="))
                return (f = t.match(H)), n && f.length < 4 && (f[3] = 1), f;
            } else
              (s = (+f[0] % 360) / 360),
                (a = +f[1] / 100),
                (i =
                  2 * (l = +f[2] / 100) -
                  (r = l <= 0.5 ? l * (a + 1) : l + a - l * a)),
                f.length > 3 && (f[3] *= 1),
                (f[0] = fe(s + 1 / 3, i, r)),
                (f[1] = fe(s, i, r)),
                (f[2] = fe(s - 1 / 3, i, r));
          else f = t.match(V) || pe.transparent;
          f = f.map(Number);
        }
        return (
          e &&
            !p &&
            ((i = f[0] / 255),
            (r = f[1] / 255),
            (o = f[2] / 255),
            (l = ((u = Math.max(i, r, o)) + (c = Math.min(i, r, o))) / 2),
            u === c
              ? (s = a = 0)
              : ((d = u - c),
                (a = l > 0.5 ? d / (2 - u - c) : d / (u + c)),
                (s =
                  u === i
                    ? (r - o) / d + (r < o ? 6 : 0)
                    : u === r
                    ? (o - i) / d + 2
                    : (i - r) / d + 4),
                (s *= 60)),
            (f[0] = ~~(s + 0.5)),
            (f[1] = ~~(100 * a + 0.5)),
            (f[2] = ~~(100 * l + 0.5))),
          n && f.length < 4 && (f[3] = 1),
          f
        );
      },
      me = function (t) {
        var e = [],
          n = [],
          i = -1;
        return (
          t.split(ge).forEach(function (t) {
            var r = t.match(G) || [];
            e.push.apply(e, r), n.push((i += r.length + 1));
          }),
          (e.c = n),
          e
        );
      },
      ve = function (t, e, n) {
        var i,
          r,
          o,
          s,
          a = "",
          l = (t + a).match(ge),
          u = e ? "hsla(" : "rgba(",
          c = 0;
        if (!l) return t;
        if (
          ((l = l.map(function (t) {
            return (
              (t = he(t, e, 1)) &&
              u +
                (e
                  ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                  : t.join(",")) +
                ")"
            );
          })),
          n && ((o = me(t)), (i = n.c).join(a) !== o.c.join(a)))
        )
          for (s = (r = t.replace(ge, "1").split(G)).length - 1; c < s; c++)
            a +=
              r[c] +
              (~i.indexOf(c)
                ? l.shift() || u + "0,0,0,0)"
                : (o.length ? o : l.length ? l : n).shift());
        if (!r)
          for (s = (r = t.split(ge)).length - 1; c < s; c++) a += r[c] + l[c];
        return a + r[s];
      },
      ge = (function () {
        var t,
          e =
            "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (t in pe) e += "|" + t + "\\b";
        return new RegExp(e + ")", "gi");
      })(),
      ye = /hsl[a]?\(/,
      be = function (t) {
        var e,
          n = t.join(" ");
        if (((ge.lastIndex = 0), ge.test(n)))
          return (
            (e = ye.test(n)),
            (t[1] = ve(t[1], e)),
            (t[0] = ve(t[0], e, me(t[1]))),
            !0
          );
      },
      xe = (function () {
        var t,
          e,
          n,
          i,
          r,
          o,
          s = Date.now,
          a = 500,
          l = 33,
          u = s(),
          c = u,
          d = 1e3 / 240,
          p = d,
          g = [],
          y = function n(f) {
            var h,
              m,
              v,
              y,
              b = s() - c,
              x = !0 === f;
            if (
              (b > a && (u += b - l),
              ((h = (v = (c += b) - u) - p) > 0 || x) &&
                ((y = ++i.frame),
                (r = v - 1e3 * i.time),
                (i.time = v /= 1e3),
                (p += h + (h >= d ? 4 : d - h)),
                (m = 1)),
              x || (t = e(n)),
              m)
            )
              for (o = 0; o < g.length; o++) g[o](v, r, y, f);
          };
        return (i = {
          time: 0,
          frame: 0,
          tick: function () {
            y(!0);
          },
          deltaRatio: function (t) {
            return r / (1e3 / (t || 60));
          },
          wake: function () {
            v &&
              (!h &&
                z() &&
                ((f = h = window),
                (m = f.document || {}),
                (Q.gsap = un),
                (f.gsapVersions || (f.gsapVersions = [])).push(un.version),
                Z(K || f.GreenSockGlobals || (!f.gsap && f) || {}),
                (n = f.requestAnimationFrame)),
              t && i.sleep(),
              (e =
                n ||
                function (t) {
                  return setTimeout(t, (p - 1e3 * i.time + 1) | 0);
                }),
              (b = 1),
              y(2));
          },
          sleep: function () {
            (n ? f.cancelAnimationFrame : clearTimeout)(t), (b = 0), (e = nt);
          },
          lagSmoothing: function (t, e) {
            (a = t || 1 / 1e-8), (l = Math.min(e, a, 0));
          },
          fps: function (t) {
            (d = 1e3 / (t || 240)), (p = 1e3 * i.time + d);
          },
          add: function (t) {
            g.indexOf(t) < 0 && g.push(t), we();
          },
          remove: function (t) {
            var e;
            ~(e = g.indexOf(t)) && g.splice(e, 1) && o >= e && o--;
          },
          _listeners: g,
        });
      })(),
      we = function () {
        return !b && xe.wake();
      },
      De = {},
      _e = /^[\d.\-M][\d.\-,\s]/,
      Se = /["']/g,
      Ce = function (t) {
        for (
          var e,
            n,
            i,
            r = {},
            o = t.substr(1, t.length - 3).split(":"),
            s = o[0],
            a = 1,
            l = o.length;
          a < l;
          a++
        )
          (n = o[a]),
            (e = a !== l - 1 ? n.lastIndexOf(",") : n.length),
            (i = n.substr(0, e)),
            (r[s] = isNaN(i) ? i.replace(Se, "").trim() : +i),
            (s = n.substr(e + 1).trim());
        return r;
      },
      Ee = function (t) {
        return function (e) {
          return 1 - t(1 - e);
        };
      },
      Te = function t(e, n) {
        for (var i, r = e._first; r; )
          r instanceof Le
            ? t(r, n)
            : !r.vars.yoyoEase ||
              (r._yoyo && r._repeat) ||
              r._yoyo === n ||
              (r.timeline
                ? t(r.timeline, n)
                : ((i = r._ease),
                  (r._ease = r._yEase),
                  (r._yEase = i),
                  (r._yoyo = n))),
            (r = r._next);
      },
      Pe = function (t, e) {
        return (
          (t &&
            (B(t)
              ? t
              : De[t] ||
                (function (t) {
                  var e,
                    n,
                    i,
                    r,
                    o = (t + "").split("("),
                    s = De[o[0]];
                  return s && o.length > 1 && s.config
                    ? s.config.apply(
                        null,
                        ~t.indexOf("{")
                          ? [Ce(o[1])]
                          : ((e = t),
                            (n = e.indexOf("(") + 1),
                            (i = e.indexOf(")")),
                            (r = e.indexOf("(", n)),
                            e.substring(
                              n,
                              ~r && r < i ? e.indexOf(")", i + 1) : i
                            ))
                              .split(",")
                              .map(xt)
                      )
                    : De._CE && _e.test(t)
                    ? De._CE("", t)
                    : s;
                })(t))) ||
          e
        );
      },
      Ae = function (t, e, n, i) {
        void 0 === n &&
          (n = function (t) {
            return 1 - e(1 - t);
          }),
          void 0 === i &&
            (i = function (t) {
              return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
            });
        var r,
          o = { easeIn: e, easeOut: n, easeInOut: i };
        return (
          ht(t, function (t) {
            for (var e in ((De[t] = Q[t] = o),
            (De[(r = t.toLowerCase())] = n),
            o))
              De[
                r +
                  ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
              ] = De[t + "." + e] = o[e];
          }),
          o
        );
      },
      ke = function (t) {
        return function (e) {
          return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
        };
      },
      Oe = function t(e, n, i) {
        var r = n >= 1 ? n : 1,
          o = (i || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
          s = (o / T) * (Math.asin(1 / r) || 0),
          a = function (t) {
            return 1 === t ? 1 : r * Math.pow(2, -10 * t) * M((t - s) * o) + 1;
          },
          l =
            "out" === e
              ? a
              : "in" === e
              ? function (t) {
                  return 1 - a(1 - t);
                }
              : ke(a);
        return (
          (o = T / o),
          (l.config = function (n, i) {
            return t(e, n, i);
          }),
          l
        );
      },
      Me = function t(e, n) {
        void 0 === n && (n = 1.70158);
        var i = function (t) {
            return t ? --t * t * ((n + 1) * t + n) + 1 : 0;
          },
          r =
            "out" === e
              ? i
              : "in" === e
              ? function (t) {
                  return 1 - i(1 - t);
                }
              : ke(i);
        return (
          (r.config = function (n) {
            return t(e, n);
          }),
          r
        );
      };
    ht("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
      var n = e < 5 ? e + 1 : e;
      Ae(
        t + ",Power" + (n - 1),
        e
          ? function (t) {
              return Math.pow(t, n);
            }
          : function (t) {
              return t;
            },
        function (t) {
          return 1 - Math.pow(1 - t, n);
        },
        function (t) {
          return t < 0.5
            ? Math.pow(2 * t, n) / 2
            : 1 - Math.pow(2 * (1 - t), n) / 2;
        }
      );
    }),
      (De.Linear.easeNone = De.none = De.Linear.easeIn),
      Ae("Elastic", Oe("in"), Oe("out"), Oe()),
      (x = 7.5625),
      (D = 1 / (w = 2.75)),
      Ae(
        "Bounce",
        function (t) {
          return 1 - _(1 - t);
        },
        (_ = function (t) {
          return t < D
            ? x * t * t
            : t < 0.7272727272727273
            ? x * Math.pow(t - 1.5 / w, 2) + 0.75
            : t < 0.9090909090909092
            ? x * (t -= 2.25 / w) * t + 0.9375
            : x * Math.pow(t - 2.625 / w, 2) + 0.984375;
        })
      ),
      Ae("Expo", function (t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0;
      }),
      Ae("Circ", function (t) {
        return -(k(1 - t * t) - 1);
      }),
      Ae("Sine", function (t) {
        return 1 === t ? 1 : 1 - O(t * P);
      }),
      Ae("Back", Me("in"), Me("out"), Me()),
      (De.SteppedEase =
        De.steps =
        Q.SteppedEase =
          {
            config: function (t, e) {
              void 0 === t && (t = 1);
              var n = 1 / t,
                i = t + (e ? 0 : 1),
                r = e ? 1 : 0;
              return function (t) {
                return (((i * Yt(0, 1 - 1e-8, t)) | 0) + r) * n;
              };
            },
          }),
      (C.ease = De["quad.out"]),
      ht(
        "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
        function (t) {
          return (ct += t + "," + t + "Params,");
        }
      );
    var Fe = function (t, e) {
        (this.id = A++),
          (t._gsap = this),
          (this.target = t),
          (this.harness = e),
          (this.get = e ? e.get : ft),
          (this.set = e ? e.getSetter : Ue);
      },
      Be = (function () {
        function t(t) {
          (this.vars = t),
            (this._delay = +t.delay || 0),
            (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
              ((this._rDelay = t.repeatDelay || 0),
              (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
            (this._ts = 1),
            Wt(this, +t.duration, 1, 1),
            (this.data = t.data),
            b || xe.wake();
        }
        var e = t.prototype;
        return (
          (e.delay = function (t) {
            return t || 0 === t
              ? (this.parent &&
                  this.parent.smoothChildTiming &&
                  this.startTime(this._start + t - this._delay),
                (this._delay = t),
                this)
              : this._delay;
          }),
          (e.duration = function (t) {
            return arguments.length
              ? this.totalDuration(
                  this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
                )
              : this.totalDuration() && this._dur;
          }),
          (e.totalDuration = function (t) {
            return arguments.length
              ? ((this._dirty = 0),
                Wt(
                  this,
                  this._repeat < 0
                    ? t
                    : (t - this._repeat * this._rDelay) / (this._repeat + 1)
                ))
              : this._tDur;
          }),
          (e.totalTime = function (t, e) {
            if ((we(), !arguments.length)) return this._tTime;
            var n = this._dp;
            if (n && n.smoothChildTiming && this._ts) {
              for (
                It(this, t), !n._dp || n.parent || jt(n, this);
                n && n.parent;

              )
                n.parent._time !==
                  n._start +
                    (n._ts >= 0
                      ? n._tTime / n._ts
                      : (n.totalDuration() - n._tTime) / -n._ts) &&
                  n.totalTime(n._tTime, !0),
                  (n = n.parent);
              !this.parent &&
                this._dp.autoRemoveChildren &&
                ((this._ts > 0 && t < this._tDur) ||
                  (this._ts < 0 && t > 0) ||
                  (!this._tDur && !t)) &&
                Rt(this._dp, this, this._start - this._delay);
            }
            return (
              (this._tTime !== t ||
                (!this._dur && !e) ||
                (this._initted && 1e-8 === Math.abs(this._zTime)) ||
                (!t && !this._initted && (this.add || this._ptLookup))) &&
                (this._ts || (this._pTime = t), bt(this, t, e)),
              this
            );
          }),
          (e.time = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  Math.min(this.totalDuration(), t + Mt(this)) %
                    (this._dur + this._rDelay) || (t ? this._dur : 0),
                  e
                )
              : this._time;
          }),
          (e.totalProgress = function (t, e) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * t, e)
              : this.totalDuration()
              ? Math.min(1, this._tTime / this._tDur)
              : this.ratio;
          }),
          (e.progress = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                    Mt(this),
                  e
                )
              : this.duration()
              ? Math.min(1, this._time / this._dur)
              : this.ratio;
          }),
          (e.iteration = function (t, e) {
            var n = this.duration() + this._rDelay;
            return arguments.length
              ? this.totalTime(this._time + (t - 1) * n, e)
              : this._repeat
              ? Ft(this._tTime, n) + 1
              : 1;
          }),
          (e.timeScale = function (t) {
            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === t) return this;
            var e =
              this.parent && this._ts
                ? Bt(this.parent._time, this)
                : this._tTime;
            return (
              (this._rts = +t || 0),
              (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
              Ot(this.totalTime(Yt(-this._delay, this._tDur, e), !0)),
              Lt(this),
              this
            );
          }),
          (e.paused = function (t) {
            return arguments.length
              ? (this._ps !== t &&
                  ((this._ps = t),
                  t
                    ? ((this._pTime =
                        this._tTime || Math.max(-this._delay, this.rawTime())),
                      (this._ts = this._act = 0))
                    : (we(),
                      (this._ts = this._rts),
                      this.totalTime(
                        this.parent && !this.parent.smoothChildTiming
                          ? this.rawTime()
                          : this._tTime || this._pTime,
                        1 === this.progress() &&
                          1e-8 !== Math.abs(this._zTime) &&
                          (this._tTime -= 1e-8)
                      ))),
                this)
              : this._ps;
          }),
          (e.startTime = function (t) {
            if (arguments.length) {
              this._start = t;
              var e = this.parent || this._dp;
              return (
                e && (e._sort || !this.parent) && Rt(e, this, t - this._delay),
                this
              );
            }
            return this._start;
          }),
          (e.endTime = function (t) {
            return (
              this._start +
              (R(t) ? this.totalDuration() : this.duration()) /
                Math.abs(this._ts || 1)
            );
          }),
          (e.rawTime = function (t) {
            var e = this.parent || this._dp;
            return e
              ? t &&
                (!this._ts ||
                  (this._repeat && this._time && this.totalProgress() < 1))
                ? this._tTime % (this._dur + this._rDelay)
                : this._ts
                ? Bt(e.rawTime(t), this)
                : this._tTime
              : this._tTime;
          }),
          (e.globalTime = function (t) {
            for (var e = this, n = arguments.length ? t : e.rawTime(); e; )
              (n = e._start + n / (e._ts || 1)), (e = e._dp);
            return n;
          }),
          (e.repeat = function (t) {
            return arguments.length
              ? ((this._repeat = t === 1 / 0 ? -2 : t), Vt(this))
              : -2 === this._repeat
              ? 1 / 0
              : this._repeat;
          }),
          (e.repeatDelay = function (t) {
            if (arguments.length) {
              var e = this._time;
              return (this._rDelay = t), Vt(this), e ? this.time(e) : this;
            }
            return this._rDelay;
          }),
          (e.yoyo = function (t) {
            return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
          }),
          (e.seek = function (t, e) {
            return this.totalTime(Gt(this, t), R(e));
          }),
          (e.restart = function (t, e) {
            return this.play().totalTime(t ? -this._delay : 0, R(e));
          }),
          (e.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
          }),
          (e.reverse = function (t, e) {
            return (
              null != t && this.seek(t || this.totalDuration(), e),
              this.reversed(!0).paused(!1)
            );
          }),
          (e.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0);
          }),
          (e.resume = function () {
            return this.paused(!1);
          }),
          (e.reversed = function (t) {
            return arguments.length
              ? (!!t !== this.reversed() &&
                  this.timeScale(-this._rts || (t ? -1e-8 : 0)),
                this)
              : this._rts < 0;
          }),
          (e.invalidate = function () {
            return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
          }),
          (e.isActive = function () {
            var t,
              e = this.parent || this._dp,
              n = this._start;
            return !(
              e &&
              !(
                this._ts &&
                this._initted &&
                e.isActive() &&
                (t = e.rawTime(!0)) >= n &&
                t < this.endTime(!0) - 1e-8
              )
            );
          }),
          (e.eventCallback = function (t, e, n) {
            var i = this.vars;
            return arguments.length > 1
              ? (e
                  ? ((i[t] = e),
                    n && (i[t + "Params"] = n),
                    "onUpdate" === t && (this._onUpdate = e))
                  : delete i[t],
                this)
              : i[t];
          }),
          (e.then = function (t) {
            var e = this;
            return new Promise(function (n) {
              var i = B(t) ? t : wt,
                r = function () {
                  var t = e.then;
                  (e.then = null),
                    B(i) && (i = i(e)) && (i.then || i === e) && (e.then = t),
                    n(i),
                    (e.then = t);
                };
              (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
              (!e._tTime && e._ts < 0)
                ? r()
                : (e._prom = r);
            });
          }),
          (e.kill = function () {
            ce(this);
          }),
          t
        );
      })();
    Dt(Be.prototype, {
      _time: 0,
      _start: 0,
      _end: 0,
      _tTime: 0,
      _tDur: 0,
      _dirty: 0,
      _repeat: 0,
      _yoyo: !1,
      parent: null,
      _initted: !1,
      _rDelay: 0,
      _ts: 1,
      _dp: 0,
      ratio: 0,
      _zTime: -1e-8,
      _prom: 0,
      _ps: !1,
      _rts: 1,
    });
    var Le = (function (t) {
      function e(e, n) {
        var i;
        return (
          void 0 === e && (e = {}),
          ((i = t.call(this, e) || this).labels = {}),
          (i.smoothChildTiming = !!e.smoothChildTiming),
          (i.autoRemoveChildren = !!e.autoRemoveChildren),
          (i._sort = R(e.sortChildren)),
          p && Rt(e.parent || p, u(i), n),
          e.reversed && i.reverse(),
          e.paused && i.paused(!0),
          e.scrollTrigger && zt(u(i), e.scrollTrigger),
          i
        );
      }
      c(e, t);
      var n = e.prototype;
      return (
        (n.to = function (t, e, n) {
          return $t(0, arguments, this), this;
        }),
        (n.from = function (t, e, n) {
          return $t(1, arguments, this), this;
        }),
        (n.fromTo = function (t, e, n, i) {
          return $t(2, arguments, this), this;
        }),
        (n.set = function (t, e, n) {
          return (
            (e.duration = 0),
            (e.parent = this),
            Tt(e).repeatDelay || (e.repeat = 0),
            (e.immediateRender = !!e.immediateRender),
            new He(t, e, Gt(this, n), 1),
            this
          );
        }),
        (n.call = function (t, e, n) {
          return Rt(this, He.delayedCall(0, t, e), n);
        }),
        (n.staggerTo = function (t, e, n, i, r, o, s) {
          return (
            (n.duration = e),
            (n.stagger = n.stagger || i),
            (n.onComplete = o),
            (n.onCompleteParams = s),
            (n.parent = this),
            new He(t, n, Gt(this, r)),
            this
          );
        }),
        (n.staggerFrom = function (t, e, n, i, r, o, s) {
          return (
            (n.runBackwards = 1),
            (Tt(n).immediateRender = R(n.immediateRender)),
            this.staggerTo(t, e, n, i, r, o, s)
          );
        }),
        (n.staggerFromTo = function (t, e, n, i, r, o, s, a) {
          return (
            (i.startAt = n),
            (Tt(i).immediateRender = R(i.immediateRender)),
            this.staggerTo(t, e, i, r, o, s, a)
          );
        }),
        (n.render = function (t, e, n) {
          var i,
            r,
            o,
            s,
            a,
            l,
            u,
            c,
            d,
            f,
            h,
            m,
            v = this._time,
            g = this._dirty ? this.totalDuration() : this._tDur,
            y = this._dur,
            b = t <= 0 ? 0 : vt(t),
            x = this._zTime < 0 != t < 0 && (this._initted || !y);
          if (
            (this !== p && b > g && t >= 0 && (b = g),
            b !== this._tTime || n || x)
          ) {
            if (
              (v !== this._time &&
                y &&
                ((b += this._time - v), (t += this._time - v)),
              (i = b),
              (d = this._start),
              (l = !(c = this._ts)),
              x && (y || (v = this._zTime), (t || !e) && (this._zTime = t)),
              this._repeat)
            ) {
              if (
                ((h = this._yoyo),
                (a = y + this._rDelay),
                this._repeat < -1 && t < 0)
              )
                return this.totalTime(100 * a + t, e, n);
              if (
                ((i = vt(b % a)),
                b === g
                  ? ((s = this._repeat), (i = y))
                  : ((s = ~~(b / a)) && s === b / a && ((i = y), s--),
                    i > y && (i = y)),
                (f = Ft(this._tTime, a)),
                !v && this._tTime && f !== s && (f = s),
                h && 1 & s && ((i = y - i), (m = 1)),
                s !== f && !this._lock)
              ) {
                var w = h && 1 & f,
                  D = w === (h && 1 & s);
                if (
                  (s < f && (w = !w),
                  (v = w ? 0 : y),
                  (this._lock = 1),
                  (this.render(v || (m ? 0 : vt(s * a)), e, !y)._lock = 0),
                  (this._tTime = b),
                  !e && this.parent && ue(this, "onRepeat"),
                  this.vars.repeatRefresh &&
                    !m &&
                    (this.invalidate()._lock = 1),
                  (v && v !== this._time) ||
                    l !== !this._ts ||
                    (this.vars.onRepeat && !this.parent && !this._act))
                )
                  return this;
                if (
                  ((y = this._dur),
                  (g = this._tDur),
                  D &&
                    ((this._lock = 2),
                    (v = w ? y : -1e-4),
                    this.render(v, !0),
                    this.vars.repeatRefresh && !m && this.invalidate()),
                  (this._lock = 0),
                  !this._ts && !l)
                )
                  return this;
                Te(this, m);
              }
            }
            if (
              (this._hasPause &&
                !this._forcing &&
                this._lock < 2 &&
                (u = (function (t, e, n) {
                  var i;
                  if (n > e)
                    for (i = t._first; i && i._start <= n; ) {
                      if (!i._dur && "isPause" === i.data && i._start > e)
                        return i;
                      i = i._next;
                    }
                  else
                    for (i = t._last; i && i._start >= n; ) {
                      if (!i._dur && "isPause" === i.data && i._start < e)
                        return i;
                      i = i._prev;
                    }
                })(this, vt(v), vt(i))) &&
                (b -= i - (i = u._start)),
              (this._tTime = b),
              (this._time = i),
              (this._act = !c),
              this._initted ||
                ((this._onUpdate = this.vars.onUpdate),
                (this._initted = 1),
                (this._zTime = t),
                (v = 0)),
              !v && i && !e && (ue(this, "onStart"), this._tTime !== b))
            )
              return this;
            if (i >= v && t >= 0)
              for (r = this._first; r; ) {
                if (
                  ((o = r._next), (r._act || i >= r._start) && r._ts && u !== r)
                ) {
                  if (r.parent !== this) return this.render(t, e, n);
                  if (
                    (r.render(
                      r._ts > 0
                        ? (i - r._start) * r._ts
                        : (r._dirty ? r.totalDuration() : r._tDur) +
                            (i - r._start) * r._ts,
                      e,
                      n
                    ),
                    i !== this._time || (!this._ts && !l))
                  ) {
                    (u = 0), o && (b += this._zTime = -1e-8);
                    break;
                  }
                }
                r = o;
              }
            else {
              r = this._last;
              for (var _ = t < 0 ? t : i; r; ) {
                if (
                  ((o = r._prev), (r._act || _ <= r._end) && r._ts && u !== r)
                ) {
                  if (r.parent !== this) return this.render(t, e, n);
                  if (
                    (r.render(
                      r._ts > 0
                        ? (_ - r._start) * r._ts
                        : (r._dirty ? r.totalDuration() : r._tDur) +
                            (_ - r._start) * r._ts,
                      e,
                      n
                    ),
                    i !== this._time || (!this._ts && !l))
                  ) {
                    (u = 0), o && (b += this._zTime = _ ? -1e-8 : 1e-8);
                    break;
                  }
                }
                r = o;
              }
            }
            if (
              u &&
              !e &&
              (this.pause(),
              (u.render(i >= v ? 0 : -1e-8)._zTime = i >= v ? 1 : -1),
              this._ts)
            )
              return (this._start = d), Lt(this), this.render(t, e, n);
            this._onUpdate && !e && ue(this, "onUpdate", !0),
              ((b === g && g >= this.totalDuration()) || (!b && v)) &&
                ((d !== this._start && Math.abs(c) === Math.abs(this._ts)) ||
                  this._lock ||
                  ((t || !y) &&
                    ((b === g && this._ts > 0) || (!b && this._ts < 0)) &&
                    At(this, 1),
                  e ||
                    (t < 0 && !v) ||
                    (!b && !v && g) ||
                    (ue(
                      this,
                      b === g && t >= 0 ? "onComplete" : "onReverseComplete",
                      !0
                    ),
                    this._prom &&
                      !(b < g && this.timeScale() > 0) &&
                      this._prom())));
          }
          return this;
        }),
        (n.add = function (t, e) {
          var n = this;
          if ((L(e) || (e = Gt(this, e, t)), !(t instanceof Be))) {
            if (W(t))
              return (
                t.forEach(function (t) {
                  return n.add(t, e);
                }),
                this
              );
            if (F(t)) return this.addLabel(t, e);
            if (!B(t)) return this;
            t = He.delayedCall(0, t);
          }
          return this !== t ? Rt(this, t, e) : this;
        }),
        (n.getChildren = function (t, e, n, i) {
          void 0 === t && (t = !0),
            void 0 === e && (e = !0),
            void 0 === n && (n = !0),
            void 0 === i && (i = -E);
          for (var r = [], o = this._first; o; )
            o._start >= i &&
              (o instanceof He
                ? e && r.push(o)
                : (n && r.push(o),
                  t && r.push.apply(r, o.getChildren(!0, e, n)))),
              (o = o._next);
          return r;
        }),
        (n.getById = function (t) {
          for (var e = this.getChildren(1, 1, 1), n = e.length; n--; )
            if (e[n].vars.id === t) return e[n];
        }),
        (n.remove = function (t) {
          return F(t)
            ? this.removeLabel(t)
            : B(t)
            ? this.killTweensOf(t)
            : (Pt(this, t),
              t === this._recent && (this._recent = this._last),
              kt(this));
        }),
        (n.totalTime = function (e, n) {
          return arguments.length
            ? ((this._forcing = 1),
              !this._dp &&
                this._ts &&
                (this._start = vt(
                  xe.time -
                    (this._ts > 0
                      ? e / this._ts
                      : (this.totalDuration() - e) / -this._ts)
                )),
              t.prototype.totalTime.call(this, e, n),
              (this._forcing = 0),
              this)
            : this._tTime;
        }),
        (n.addLabel = function (t, e) {
          return (this.labels[t] = Gt(this, e)), this;
        }),
        (n.removeLabel = function (t) {
          return delete this.labels[t], this;
        }),
        (n.addPause = function (t, e, n) {
          var i = He.delayedCall(0, e || nt, n);
          return (
            (i.data = "isPause"), (this._hasPause = 1), Rt(this, i, Gt(this, t))
          );
        }),
        (n.removePause = function (t) {
          var e = this._first;
          for (t = Gt(this, t); e; )
            e._start === t && "isPause" === e.data && At(e), (e = e._next);
        }),
        (n.killTweensOf = function (t, e, n) {
          for (var i = this.getTweensOf(t, n), r = i.length; r--; )
            Ie !== i[r] && i[r].kill(t, e);
          return this;
        }),
        (n.getTweensOf = function (t, e) {
          for (var n, i = [], r = Jt(t), o = this._first, s = L(e); o; )
            o instanceof He
              ? gt(o._targets, r) &&
                (s
                  ? (!Ie || (o._initted && o._ts)) &&
                    o.globalTime(0) <= e &&
                    o.globalTime(o.totalDuration()) > e
                  : !e || o.isActive()) &&
                i.push(o)
              : (n = o.getTweensOf(r, e)).length && i.push.apply(i, n),
              (o = o._next);
          return i;
        }),
        (n.tweenTo = function (t, e) {
          e = e || {};
          var n,
            i = this,
            r = Gt(i, t),
            o = e,
            s = o.startAt,
            a = o.onStart,
            l = o.onStartParams,
            u = o.immediateRender,
            c = He.to(
              i,
              Dt(
                {
                  ease: e.ease || "none",
                  lazy: !1,
                  immediateRender: !1,
                  time: r,
                  overwrite: "auto",
                  duration:
                    e.duration ||
                    Math.abs(
                      (r - (s && "time" in s ? s.time : i._time)) /
                        i.timeScale()
                    ) ||
                    1e-8,
                  onStart: function () {
                    if ((i.pause(), !n)) {
                      var t =
                        e.duration ||
                        Math.abs(
                          (r - (s && "time" in s ? s.time : i._time)) /
                            i.timeScale()
                        );
                      c._dur !== t && Wt(c, t, 0, 1).render(c._time, !0, !0),
                        (n = 1);
                    }
                    a && a.apply(c, l || []);
                  },
                },
                e
              )
            );
          return u ? c.render(0) : c;
        }),
        (n.tweenFromTo = function (t, e, n) {
          return this.tweenTo(e, Dt({ startAt: { time: Gt(this, t) } }, n));
        }),
        (n.recent = function () {
          return this._recent;
        }),
        (n.nextLabel = function (t) {
          return void 0 === t && (t = this._time), le(this, Gt(this, t));
        }),
        (n.previousLabel = function (t) {
          return void 0 === t && (t = this._time), le(this, Gt(this, t), 1);
        }),
        (n.currentLabel = function (t) {
          return arguments.length
            ? this.seek(t, !0)
            : this.previousLabel(this._time + 1e-8);
        }),
        (n.shiftChildren = function (t, e, n) {
          void 0 === n && (n = 0);
          for (var i, r = this._first, o = this.labels; r; )
            r._start >= n && ((r._start += t), (r._end += t)), (r = r._next);
          if (e) for (i in o) o[i] >= n && (o[i] += t);
          return kt(this);
        }),
        (n.invalidate = function () {
          var e = this._first;
          for (this._lock = 0; e; ) e.invalidate(), (e = e._next);
          return t.prototype.invalidate.call(this);
        }),
        (n.clear = function (t) {
          void 0 === t && (t = !0);
          for (var e, n = this._first; n; )
            (e = n._next), this.remove(n), (n = e);
          return (
            this._dp && (this._time = this._tTime = this._pTime = 0),
            t && (this.labels = {}),
            kt(this)
          );
        }),
        (n.totalDuration = function (t) {
          var e,
            n,
            i,
            r = 0,
            o = this,
            s = o._last,
            a = E;
          if (arguments.length)
            return o.timeScale(
              (o._repeat < 0 ? o.duration() : o.totalDuration()) /
                (o.reversed() ? -t : t)
            );
          if (o._dirty) {
            for (i = o.parent; s; )
              (e = s._prev),
                s._dirty && s.totalDuration(),
                (n = s._start) > a && o._sort && s._ts && !o._lock
                  ? ((o._lock = 1), (Rt(o, s, n - s._delay, 1)._lock = 0))
                  : (a = n),
                n < 0 &&
                  s._ts &&
                  ((r -= n),
                  ((!i && !o._dp) || (i && i.smoothChildTiming)) &&
                    ((o._start += n / o._ts), (o._time -= n), (o._tTime -= n)),
                  o.shiftChildren(-n, !1, -Infinity),
                  (a = 0)),
                s._end > r && s._ts && (r = s._end),
                (s = e);
            Wt(o, o === p && o._time > r ? o._time : r, 1, 1), (o._dirty = 0);
          }
          return o._tDur;
        }),
        (e.updateRoot = function (t) {
          if ((p._ts && (bt(p, Bt(t, p)), (g = xe.frame)), xe.frame >= lt)) {
            lt += S.autoSleep || 120;
            var e = p._first;
            if ((!e || !e._ts) && S.autoSleep && xe._listeners.length < 2) {
              for (; e && !e._ts; ) e = e._next;
              e || xe.sleep();
            }
          }
        }),
        e
      );
    })(Be);
    Dt(Le.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
    var Ie,
      je = function (t, e, n, i, r, o, s) {
        var a,
          l,
          u,
          c,
          d,
          p,
          f,
          h,
          m = new on(this._pt, t, e, 0, 1, Ze, null, r),
          v = 0,
          g = 0;
        for (
          m.b = n,
            m.e = i,
            n += "",
            (f = ~(i += "").indexOf("random(")) && (i = se(i)),
            o && (o((h = [n, i]), t, e), (n = h[0]), (i = h[1])),
            l = n.match($) || [];
          (a = $.exec(i));

        )
          (c = a[0]),
            (d = i.substring(v, a.index)),
            u ? (u = (u + 1) % 5) : "rgba(" === d.substr(-5) && (u = 1),
            c !== l[g++] &&
              ((p = parseFloat(l[g - 1]) || 0),
              (m._pt = {
                _next: m._pt,
                p: d || 1 === g ? d : ",",
                s: p,
                c:
                  "=" === c.charAt(1)
                    ? parseFloat(c.substr(2)) * ("-" === c.charAt(0) ? -1 : 1)
                    : parseFloat(c) - p,
                m: u && u < 4 ? Math.round : 0,
              }),
              (v = $.lastIndex));
        return (
          (m.c = v < i.length ? i.substring(v, i.length) : ""),
          (m.fp = s),
          (X.test(i) || f) && (m.e = 0),
          (this._pt = m),
          m
        );
      },
      Re = function (t, e, n, i, r, o, s, a, l) {
        B(i) && (i = i(r || 0, t, o));
        var u,
          c = t[e],
          d =
            "get" !== n
              ? n
              : B(c)
              ? l
                ? t[
                    e.indexOf("set") || !B(t["get" + e.substr(3)])
                      ? e
                      : "get" + e.substr(3)
                  ](l)
                : t[e]()
              : c,
          p = B(c) ? (l ? Xe : $e) : Ge;
        if (
          (F(i) &&
            (~i.indexOf("random(") && (i = se(i)),
            "=" === i.charAt(1) &&
              ((u =
                parseFloat(d) +
                parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) +
                (Ut(d) || 0)) ||
                0 === u) &&
              (i = u)),
          d !== i)
        )
          return isNaN(d * i) || "" === i
            ? (!c && !(e in t) && J(e, i),
              je.call(this, t, e, d, i, p, a || S.stringFilter, l))
            : ((u = new on(
                this._pt,
                t,
                e,
                +d || 0,
                i - (d || 0),
                "boolean" == typeof c ? Ke : Qe,
                0,
                p
              )),
              l && (u.fp = l),
              s && u.modifier(s, this, t),
              (this._pt = u));
      },
      ze = function (t, e, n, i, r, o) {
        var s, a, l, u;
        if (
          st[t] &&
          !1 !==
            (s = new st[t]()).init(
              r,
              s.rawVars
                ? e[t]
                : (function (t, e, n, i, r) {
                    if (
                      (B(t) && (t = qe(t, r, e, n, i)),
                      !j(t) || (t.style && t.nodeType) || W(t) || q(t))
                    )
                      return F(t) ? qe(t, r, e, n, i) : t;
                    var o,
                      s = {};
                    for (o in t) s[o] = qe(t[o], r, e, n, i);
                    return s;
                  })(e[t], i, r, o, n),
              n,
              i,
              o
            ) &&
          ((n._pt = a = new on(n._pt, r, t, 0, 1, s.render, s, 0, s.priority)),
          n !== y)
        )
          for (
            l = n._ptLookup[n._targets.indexOf(r)], u = s._props.length;
            u--;

          )
            l[s._props[u]] = a;
        return s;
      },
      Ne = function t(e, n) {
        var i,
          r,
          o,
          s,
          a,
          l,
          u,
          c,
          f,
          h,
          m,
          v,
          g,
          y = e.vars,
          b = y.ease,
          x = y.startAt,
          w = y.immediateRender,
          D = y.lazy,
          _ = y.onUpdate,
          S = y.onUpdateParams,
          E = y.callbackScope,
          T = y.runBackwards,
          P = y.yoyoEase,
          A = y.keyframes,
          k = y.autoRevert,
          O = e._dur,
          M = e._startAt,
          F = e._targets,
          B = e.parent,
          L = B && "nested" === B.data ? B.parent._targets : F,
          I = "auto" === e._overwrite && !d,
          j = e.timeline;
        if (
          (j && (!A || !b) && (b = "none"),
          (e._ease = Pe(b, C.ease)),
          (e._yEase = P ? Ee(Pe(!0 === P ? b : P, C.ease)) : 0),
          P &&
            e._yoyo &&
            !e._repeat &&
            ((P = e._yEase), (e._yEase = e._ease), (e._ease = P)),
          (e._from = !j && !!y.runBackwards),
          !j)
        ) {
          if (
            ((v = (c = F[0] ? pt(F[0]).harness : 0) && y[c.prop]),
            (i = Et(y, it)),
            M && M.render(-1, !0).kill(),
            x)
          )
            if (
              (At(
                (e._startAt = He.set(
                  F,
                  Dt(
                    {
                      data: "isStart",
                      overwrite: !1,
                      parent: B,
                      immediateRender: !0,
                      lazy: R(D),
                      startAt: null,
                      delay: 0,
                      onUpdate: _,
                      onUpdateParams: S,
                      callbackScope: E,
                      stagger: 0,
                    },
                    x
                  )
                ))
              ),
              n < 0 && !w && !k && e._startAt.render(-1, !0),
              w)
            ) {
              if ((n > 0 && !k && (e._startAt = 0), O && n <= 0))
                return void (n && (e._zTime = n));
            } else !1 === k && (e._startAt = 0);
          else if (T && O)
            if (M) !k && (e._startAt = 0);
            else if (
              (n && (w = !1),
              (o = Dt(
                {
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: w && R(D),
                  immediateRender: w,
                  stagger: 0,
                  parent: B,
                },
                i
              )),
              v && (o[c.prop] = v),
              At((e._startAt = He.set(F, o))),
              n < 0 && e._startAt.render(-1, !0),
              w)
            ) {
              if (!n) return;
            } else t(e._startAt, 1e-8);
          for (
            e._pt = 0, D = (O && R(D)) || (D && !O), r = 0;
            r < F.length;
            r++
          ) {
            if (
              ((u = (a = F[r])._gsap || dt(F)[r]._gsap),
              (e._ptLookup[r] = h = {}),
              ot[u.id] && rt.length && yt(),
              (m = L === F ? r : L.indexOf(a)),
              c &&
                !1 !== (f = new c()).init(a, v || i, e, m, L) &&
                ((e._pt = s =
                  new on(e._pt, a, f.name, 0, 1, f.render, f, 0, f.priority)),
                f._props.forEach(function (t) {
                  h[t] = s;
                }),
                f.priority && (l = 1)),
              !c || v)
            )
              for (o in i)
                st[o] && (f = ze(o, i, e, m, a, L))
                  ? f.priority && (l = 1)
                  : (h[o] = s =
                      Re.call(e, a, o, "get", i[o], m, L, 0, y.stringFilter));
            e._op && e._op[r] && e.kill(a, e._op[r]),
              I &&
                e._pt &&
                ((Ie = e),
                p.killTweensOf(a, h, e.globalTime(n)),
                (g = !e.parent),
                (Ie = 0)),
              e._pt && D && (ot[u.id] = 1);
          }
          l && rn(e), e._onInit && e._onInit(e);
        }
        (e._onUpdate = _), (e._initted = (!e._op || e._pt) && !g);
      },
      qe = function (t, e, n, i, r) {
        return B(t)
          ? t.call(e, n, i, r)
          : F(t) && ~t.indexOf("random(")
          ? se(t)
          : t;
      },
      We = ct + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
      Ve = (We + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
      He = (function (t) {
        function e(e, n, i, r) {
          var o;
          "number" == typeof n && ((i.duration = n), (n = i), (i = null));
          var s,
            a,
            l,
            c,
            f,
            h,
            m,
            v,
            g = (o = t.call(this, r ? n : Tt(n)) || this).vars,
            y = g.duration,
            b = g.delay,
            x = g.immediateRender,
            w = g.stagger,
            D = g.overwrite,
            _ = g.keyframes,
            C = g.defaults,
            E = g.scrollTrigger,
            T = g.yoyoEase,
            P = n.parent || p,
            A = (W(e) || q(e) ? L(e[0]) : "length" in n) ? [e] : Jt(e);
          if (
            ((o._targets = A.length
              ? dt(A)
              : tt(
                  "GSAP target " + e + " not found. https://greensock.com",
                  !S.nullTargetWarn
                ) || []),
            (o._ptLookup = []),
            (o._overwrite = D),
            _ || w || N(y) || N(b))
          ) {
            if (
              ((n = o.vars),
              (s = o.timeline =
                new Le({ data: "nested", defaults: C || {} })).kill(),
              (s.parent = s._dp = u(o)),
              (s._start = 0),
              _)
            )
              Tt(Dt(s.vars.defaults, { ease: "none" })),
                w
                  ? A.forEach(function (t, e) {
                      return _.forEach(function (n, i) {
                        return s.to(t, n, i ? ">" : e * w);
                      });
                    })
                  : _.forEach(function (t) {
                      return s.to(A, t, ">");
                    });
            else {
              if (((c = A.length), (m = w ? ee(w) : nt), j(w)))
                for (f in w) ~We.indexOf(f) && (v || (v = {}), (v[f] = w[f]));
              for (a = 0; a < c; a++) {
                for (f in ((l = {}), n)) Ve.indexOf(f) < 0 && (l[f] = n[f]);
                (l.stagger = 0),
                  T && (l.yoyoEase = T),
                  v && St(l, v),
                  (h = A[a]),
                  (l.duration = +qe(y, u(o), a, h, A)),
                  (l.delay = (+qe(b, u(o), a, h, A) || 0) - o._delay),
                  !w &&
                    1 === c &&
                    l.delay &&
                    ((o._delay = b = l.delay), (o._start += b), (l.delay = 0)),
                  s.to(h, l, m(a, h, A));
              }
              s.duration() ? (y = b = 0) : (o.timeline = 0);
            }
            y || o.duration((y = s.duration()));
          } else o.timeline = 0;
          return (
            !0 !== D || d || ((Ie = u(o)), p.killTweensOf(A), (Ie = 0)),
            Rt(P, u(o), i),
            n.reversed && o.reverse(),
            n.paused && o.paused(!0),
            (x ||
              (!y &&
                !_ &&
                o._start === vt(P._time) &&
                R(x) &&
                (function t(e) {
                  return !e || (e._ts && t(e.parent));
                })(u(o)) &&
                "nested" !== P.data)) &&
              ((o._tTime = -1e-8), o.render(Math.max(0, -b))),
            E && zt(u(o), E),
            o
          );
        }
        c(e, t);
        var n = e.prototype;
        return (
          (n.render = function (t, e, n) {
            var i,
              r,
              o,
              s,
              a,
              l,
              u,
              c,
              d,
              p = this._time,
              f = this._tDur,
              h = this._dur,
              m = t > f - 1e-8 && t >= 0 ? f : t < 1e-8 ? 0 : t;
            if (h) {
              if (
                m !== this._tTime ||
                !t ||
                n ||
                (!this._initted && this._tTime) ||
                (this._startAt && this._zTime < 0 != t < 0)
              ) {
                if (((i = m), (c = this.timeline), this._repeat)) {
                  if (((s = h + this._rDelay), this._repeat < -1 && t < 0))
                    return this.totalTime(100 * s + t, e, n);
                  if (
                    ((i = vt(m % s)),
                    m === f
                      ? ((o = this._repeat), (i = h))
                      : ((o = ~~(m / s)) && o === m / s && ((i = h), o--),
                        i > h && (i = h)),
                    (l = this._yoyo && 1 & o) &&
                      ((d = this._yEase), (i = h - i)),
                    (a = Ft(this._tTime, s)),
                    i === p && !n && this._initted)
                  )
                    return this;
                  o !== a &&
                    (c && this._yEase && Te(c, l),
                    !this.vars.repeatRefresh ||
                      l ||
                      this._lock ||
                      ((this._lock = n = 1),
                      (this.render(vt(s * o), !0).invalidate()._lock = 0)));
                }
                if (!this._initted) {
                  if (Nt(this, t < 0 ? t : i, n, e))
                    return (this._tTime = 0), this;
                  if (h !== this._dur) return this.render(t, e, n);
                }
                if (
                  ((this._tTime = m),
                  (this._time = i),
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  (this.ratio = u = (d || this._ease)(i / h)),
                  this._from && (this.ratio = u = 1 - u),
                  i && !p && !e && (ue(this, "onStart"), this._tTime !== m))
                )
                  return this;
                for (r = this._pt; r; ) r.r(u, r.d), (r = r._next);
                (c &&
                  c.render(t < 0 ? t : !i && l ? -1e-8 : c._dur * u, e, n)) ||
                  (this._startAt && (this._zTime = t)),
                  this._onUpdate &&
                    !e &&
                    (t < 0 && this._startAt && this._startAt.render(t, !0, n),
                    ue(this, "onUpdate")),
                  this._repeat &&
                    o !== a &&
                    this.vars.onRepeat &&
                    !e &&
                    this.parent &&
                    ue(this, "onRepeat"),
                  (m !== this._tDur && m) ||
                    this._tTime !== m ||
                    (t < 0 &&
                      this._startAt &&
                      !this._onUpdate &&
                      this._startAt.render(t, !0, !0),
                    (t || !h) &&
                      ((m === this._tDur && this._ts > 0) ||
                        (!m && this._ts < 0)) &&
                      At(this, 1),
                    e ||
                      (t < 0 && !p) ||
                      (!m && !p) ||
                      (ue(
                        this,
                        m === f ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                      this._prom &&
                        !(m < f && this.timeScale() > 0) &&
                        this._prom()));
              }
            } else
              !(function (t, e, n, i) {
                var r,
                  o,
                  s,
                  a = t.ratio,
                  l =
                    e < 0 ||
                    (!e &&
                      ((!t._start &&
                        (function t(e) {
                          var n = e.parent;
                          return (
                            n &&
                            n._ts &&
                            n._initted &&
                            !n._lock &&
                            (n.rawTime() < 0 || t(n))
                          );
                        })(t) &&
                        (t._initted || !qt(t))) ||
                        ((t._ts < 0 || t._dp._ts < 0) && !qt(t))))
                      ? 0
                      : 1,
                  u = t._rDelay,
                  c = 0;
                if (
                  (u &&
                    t._repeat &&
                    ((c = Yt(0, t._tDur, e)),
                    (o = Ft(c, u)),
                    (s = Ft(t._tTime, u)),
                    t._yoyo && 1 & o && (l = 1 - l),
                    o !== s &&
                      ((a = 1 - l),
                      t.vars.repeatRefresh && t._initted && t.invalidate())),
                  l !== a || i || 1e-8 === t._zTime || (!e && t._zTime))
                ) {
                  if (!t._initted && Nt(t, e, i, n)) return;
                  for (
                    s = t._zTime,
                      t._zTime = e || (n ? 1e-8 : 0),
                      n || (n = e && !s),
                      t.ratio = l,
                      t._from && (l = 1 - l),
                      t._time = 0,
                      t._tTime = c,
                      r = t._pt;
                    r;

                  )
                    r.r(l, r.d), (r = r._next);
                  t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                    t._onUpdate && !n && ue(t, "onUpdate"),
                    c && t._repeat && !n && t.parent && ue(t, "onRepeat"),
                    (e >= t._tDur || e < 0) &&
                      t.ratio === l &&
                      (l && At(t, 1),
                      n ||
                        (ue(t, l ? "onComplete" : "onReverseComplete", !0),
                        t._prom && t._prom()));
                } else t._zTime || (t._zTime = e);
              })(this, t, e, n);
            return this;
          }),
          (n.targets = function () {
            return this._targets;
          }),
          (n.invalidate = function () {
            return (
              (this._pt =
                this._op =
                this._startAt =
                this._onUpdate =
                this._lazy =
                this.ratio =
                  0),
              (this._ptLookup = []),
              this.timeline && this.timeline.invalidate(),
              t.prototype.invalidate.call(this)
            );
          }),
          (n.kill = function (t, e) {
            if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
              return (this._lazy = this._pt = 0), this.parent ? ce(this) : this;
            if (this.timeline) {
              var n = this.timeline.totalDuration();
              return (
                this.timeline.killTweensOf(t, e, Ie && !0 !== Ie.vars.overwrite)
                  ._first || ce(this),
                this.parent &&
                  n !== this.timeline.totalDuration() &&
                  Wt(this, (this._dur * this.timeline._tDur) / n, 0, 1),
                this
              );
            }
            var i,
              r,
              o,
              s,
              a,
              l,
              u,
              c = this._targets,
              d = t ? Jt(t) : c,
              p = this._ptLookup,
              f = this._pt;
            if (
              (!e || "all" === e) &&
              (function (t, e) {
                for (
                  var n = t.length, i = n === e.length;
                  i && n-- && t[n] === e[n];

                );
                return n < 0;
              })(c, d)
            )
              return "all" === e && (this._pt = 0), ce(this);
            for (
              i = this._op = this._op || [],
                "all" !== e &&
                  (F(e) &&
                    ((a = {}),
                    ht(e, function (t) {
                      return (a[t] = 1);
                    }),
                    (e = a)),
                  (e = (function (t, e) {
                    var n,
                      i,
                      r,
                      o,
                      s = t[0] ? pt(t[0]).harness : 0,
                      a = s && s.aliases;
                    if (!a) return e;
                    for (i in ((n = St({}, e)), a))
                      if ((i in n))
                        for (r = (o = a[i].split(",")).length; r--; )
                          n[o[r]] = n[i];
                    return n;
                  })(c, e))),
                u = c.length;
              u--;

            )
              if (~d.indexOf(c[u]))
                for (a in ((r = p[u]),
                "all" === e
                  ? ((i[u] = e), (s = r), (o = {}))
                  : ((o = i[u] = i[u] || {}), (s = e)),
                s))
                  (l = r && r[a]) &&
                    (("kill" in l.d && !0 !== l.d.kill(a)) ||
                      Pt(this, l, "_pt"),
                    delete r[a]),
                    "all" !== o && (o[a] = 1);
            return this._initted && !this._pt && f && ce(this), this;
          }),
          (e.to = function (t, n) {
            return new e(t, n, arguments[2]);
          }),
          (e.from = function (t, e) {
            return $t(1, arguments);
          }),
          (e.delayedCall = function (t, n, i, r) {
            return new e(n, 0, {
              immediateRender: !1,
              lazy: !1,
              overwrite: !1,
              delay: t,
              onComplete: n,
              onReverseComplete: n,
              onCompleteParams: i,
              onReverseCompleteParams: i,
              callbackScope: r,
            });
          }),
          (e.fromTo = function (t, e, n) {
            return $t(2, arguments);
          }),
          (e.set = function (t, n) {
            return (
              (n.duration = 0), n.repeatDelay || (n.repeat = 0), new e(t, n)
            );
          }),
          (e.killTweensOf = function (t, e, n) {
            return p.killTweensOf(t, e, n);
          }),
          e
        );
      })(Be);
    Dt(He.prototype, {
      _targets: [],
      _lazy: 0,
      _startAt: 0,
      _op: 0,
      _onInit: 0,
    }),
      ht("staggerTo,staggerFrom,staggerFromTo", function (t) {
        He[t] = function () {
          var e = new Le(),
            n = Qt.call(arguments, 0);
          return (
            n.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, n)
          );
        };
      });
    var Ge = function (t, e, n) {
        return (t[e] = n);
      },
      $e = function (t, e, n) {
        return t[e](n);
      },
      Xe = function (t, e, n, i) {
        return t[e](i.fp, n);
      },
      Ye = function (t, e, n) {
        return t.setAttribute(e, n);
      },
      Ue = function (t, e) {
        return B(t[e]) ? $e : I(t[e]) && t.setAttribute ? Ye : Ge;
      },
      Qe = function (t, e) {
        return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
      },
      Ke = function (t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e);
      },
      Ze = function (t, e) {
        var n = e._pt,
          i = "";
        if (!t && e.b) i = e.b;
        else if (1 === t && e.e) i = e.e;
        else {
          for (; n; )
            (i =
              n.p +
              (n.m
                ? n.m(n.s + n.c * t)
                : Math.round(1e4 * (n.s + n.c * t)) / 1e4) +
              i),
              (n = n._next);
          i += e.c;
        }
        e.set(e.t, e.p, i, e);
      },
      Je = function (t, e) {
        for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
      },
      tn = function (t, e, n, i) {
        for (var r, o = this._pt; o; )
          (r = o._next), o.p === i && o.modifier(t, e, n), (o = r);
      },
      en = function (t) {
        for (var e, n, i = this._pt; i; )
          (n = i._next),
            (i.p === t && !i.op) || i.op === t
              ? Pt(this, i, "_pt")
              : i.dep || (e = 1),
            (i = n);
        return !e;
      },
      nn = function (t, e, n, i) {
        i.mSet(t, e, i.m.call(i.tween, n, i.mt), i);
      },
      rn = function (t) {
        for (var e, n, i, r, o = t._pt; o; ) {
          for (e = o._next, n = i; n && n.pr > o.pr; ) n = n._next;
          (o._prev = n ? n._prev : r) ? (o._prev._next = o) : (i = o),
            (o._next = n) ? (n._prev = o) : (r = o),
            (o = e);
        }
        t._pt = i;
      },
      on = (function () {
        function t(t, e, n, i, r, o, s, a, l) {
          (this.t = e),
            (this.s = i),
            (this.c = r),
            (this.p = n),
            (this.r = o || Qe),
            (this.d = s || this),
            (this.set = a || Ge),
            (this.pr = l || 0),
            (this._next = t),
            t && (t._prev = this);
        }
        return (
          (t.prototype.modifier = function (t, e, n) {
            (this.mSet = this.mSet || this.set),
              (this.set = nn),
              (this.m = t),
              (this.mt = n),
              (this.tween = e);
          }),
          t
        );
      })();
    ht(
      ct +
        "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
      function (t) {
        return (it[t] = 1);
      }
    ),
      (Q.TweenMax = Q.TweenLite = He),
      (Q.TimelineLite = Q.TimelineMax = Le),
      (p = new Le({
        sortChildren: !1,
        defaults: C,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0,
      })),
      (S.stringFilter = be);
    var sn = {
      registerPlugin: function () {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        e.forEach(function (t) {
          return de(t);
        });
      },
      timeline: function (t) {
        return new Le(t);
      },
      getTweensOf: function (t, e) {
        return p.getTweensOf(t, e);
      },
      getProperty: function (t, e, n, i) {
        F(t) && (t = Jt(t)[0]);
        var r = pt(t || {}).get,
          o = n ? wt : xt;
        return (
          "native" === n && (n = ""),
          t
            ? e
              ? o(((st[e] && st[e].get) || r)(t, e, n, i))
              : function (e, n, i) {
                  return o(((st[e] && st[e].get) || r)(t, e, n, i));
                }
            : t
        );
      },
      quickSetter: function (t, e, n) {
        if ((t = Jt(t)).length > 1) {
          var i = t.map(function (t) {
              return un.quickSetter(t, e, n);
            }),
            r = i.length;
          return function (t) {
            for (var e = r; e--; ) i[e](t);
          };
        }
        t = t[0] || {};
        var o = st[e],
          s = pt(t),
          a = (s.harness && (s.harness.aliases || {})[e]) || e,
          l = o
            ? function (e) {
                var i = new o();
                (y._pt = 0),
                  i.init(t, n ? e + n : e, y, 0, [t]),
                  i.render(1, i),
                  y._pt && Je(1, y);
              }
            : s.set(t, a);
        return o
          ? l
          : function (e) {
              return l(t, a, n ? e + n : e, s, 1);
            };
      },
      isTweening: function (t) {
        return p.getTweensOf(t, !0).length > 0;
      },
      defaults: function (t) {
        return t && t.ease && (t.ease = Pe(t.ease, C.ease)), Ct(C, t || {});
      },
      config: function (t) {
        return Ct(S, t || {});
      },
      registerEffect: function (t) {
        var e = t.name,
          n = t.effect,
          i = t.plugins,
          r = t.defaults,
          o = t.extendTimeline;
        (i || "").split(",").forEach(function (t) {
          return (
            t && !st[t] && !Q[t] && tt(e + " effect requires " + t + " plugin.")
          );
        }),
          (at[e] = function (t, e, i) {
            return n(Jt(t), Dt(e || {}, r), i);
          }),
          o &&
            (Le.prototype[e] = function (t, n, i) {
              return this.add(at[e](t, j(n) ? n : (i = n) && {}, this), i);
            });
      },
      registerEase: function (t, e) {
        De[t] = Pe(e);
      },
      parseEase: function (t, e) {
        return arguments.length ? Pe(t, e) : De;
      },
      getById: function (t) {
        return p.getById(t);
      },
      exportRoot: function (t, e) {
        void 0 === t && (t = {});
        var n,
          i,
          r = new Le(t);
        for (
          r.smoothChildTiming = R(t.smoothChildTiming),
            p.remove(r),
            r._dp = 0,
            r._time = r._tTime = p._time,
            n = p._first;
          n;

        )
          (i = n._next),
            (!e &&
              !n._dur &&
              n instanceof He &&
              n.vars.onComplete === n._targets[0]) ||
              Rt(r, n, n._start - n._delay),
            (n = i);
        return Rt(p, r, 0), r;
      },
      utils: {
        wrap: function t(e, n, i) {
          var r = n - e;
          return W(e)
            ? oe(e, t(0, e.length), n)
            : Xt(i, function (t) {
                return ((r + ((t - e) % r)) % r) + e;
              });
        },
        wrapYoyo: function t(e, n, i) {
          var r = n - e,
            o = 2 * r;
          return W(e)
            ? oe(e, t(0, e.length - 1), n)
            : Xt(i, function (t) {
                return e + ((t = (o + ((t - e) % o)) % o || 0) > r ? o - t : t);
              });
        },
        distribute: ee,
        random: re,
        snap: ie,
        normalize: function (t, e, n) {
          return ae(t, e, 0, 1, n);
        },
        getUnit: Ut,
        clamp: function (t, e, n) {
          return Xt(n, function (n) {
            return Yt(t, e, n);
          });
        },
        splitColor: he,
        toArray: Jt,
        selector: function (t) {
          return (
            (t = Jt(t)[0] || tt("Invalid scope") || {}),
            function (e) {
              var n = t.current || t.nativeElement || t;
              return Jt(
                e,
                n.querySelectorAll
                  ? n
                  : n === t
                  ? tt("Invalid scope") || m.createElement("div")
                  : t
              );
            }
          );
        },
        mapRange: ae,
        pipe: function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          return function (t) {
            return e.reduce(function (t, e) {
              return e(t);
            }, t);
          };
        },
        unitize: function (t, e) {
          return function (n) {
            return t(parseFloat(n)) + (e || Ut(n));
          };
        },
        interpolate: function t(e, n, i, r) {
          var o = isNaN(e + n)
            ? 0
            : function (t) {
                return (1 - t) * e + t * n;
              };
          if (!o) {
            var s,
              a,
              l,
              u,
              c,
              d = F(e),
              p = {};
            if ((!0 === i && (r = 1) && (i = null), d))
              (e = { p: e }), (n = { p: n });
            else if (W(e) && !W(n)) {
              for (l = [], u = e.length, c = u - 2, a = 1; a < u; a++)
                l.push(t(e[a - 1], e[a]));
              u--,
                (o = function (t) {
                  t *= u;
                  var e = Math.min(c, ~~t);
                  return l[e](t - e);
                }),
                (i = n);
            } else r || (e = St(W(e) ? [] : {}, e));
            if (!l) {
              for (s in n) Re.call(p, e, s, "get", n[s]);
              o = function (t) {
                return Je(t, p) || (d ? e.p : e);
              };
            }
          }
          return Xt(i, o);
        },
        shuffle: te,
      },
      install: Z,
      effects: at,
      ticker: xe,
      updateRoot: Le.updateRoot,
      plugins: st,
      globalTimeline: p,
      core: {
        PropTween: on,
        globals: et,
        Tween: He,
        Timeline: Le,
        Animation: Be,
        getCache: pt,
        _removeLinkedListItem: Pt,
        suppressOverwrites: function (t) {
          return (d = t);
        },
      },
    };
    ht("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
      return (sn[t] = He[t]);
    }),
      xe.add(Le.updateRoot),
      (y = sn.to({}, { duration: 0 }));
    var an = function (t, e) {
        for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e; )
          n = n._next;
        return n;
      },
      ln = function (t, e) {
        return {
          name: t,
          rawVars: 1,
          init: function (t, n, i) {
            i._onInit = function (t) {
              var i, r;
              if (
                (F(n) &&
                  ((i = {}),
                  ht(n, function (t) {
                    return (i[t] = 1);
                  }),
                  (n = i)),
                e)
              ) {
                for (r in ((i = {}), n)) i[r] = e(n[r]);
                n = i;
              }
              !(function (t, e) {
                var n,
                  i,
                  r,
                  o = t._targets;
                for (n in e)
                  for (i = o.length; i--; )
                    (r = t._ptLookup[i][n]) &&
                      (r = r.d) &&
                      (r._pt && (r = an(r, n)),
                      r && r.modifier && r.modifier(e[n], t, o[i], n));
              })(t, n);
            };
          },
        };
      },
      un =
        sn.registerPlugin(
          {
            name: "attr",
            init: function (t, e, n, i, r) {
              var o, s;
              for (o in e)
                (s = this.add(
                  t,
                  "setAttribute",
                  (t.getAttribute(o) || 0) + "",
                  e[o],
                  i,
                  r,
                  0,
                  0,
                  o
                )) && (s.op = o),
                  this._props.push(o);
            },
          },
          {
            name: "endArray",
            init: function (t, e) {
              for (var n = e.length; n--; ) this.add(t, n, t[n] || 0, e[n]);
            },
          },
          ln("roundProps", ne),
          ln("modifiers"),
          ln("snap", ie)
        ) || sn;
    (He.version = Le.version = un.version = "3.8.0"), (v = 1), z() && we();
    De.Power0,
      De.Power1,
      De.Power2,
      De.Power3,
      De.Power4,
      De.Linear,
      De.Quad,
      De.Cubic,
      De.Quart,
      De.Quint,
      De.Strong,
      De.Elastic,
      De.Back,
      De.SteppedEase,
      De.Bounce,
      De.Sine,
      De.Expo,
      De.Circ;
    var cn,
      dn,
      pn,
      fn,
      hn,
      mn,
      vn,
      gn = {},
      yn = 180 / Math.PI,
      bn = Math.PI / 180,
      xn = Math.atan2,
      wn = /([A-Z])/g,
      Dn = /(?:left|right|width|margin|padding|x)/i,
      _n = /[\s,\(]\S/,
      Sn = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity",
      },
      Cn = function (t, e) {
        return e.set(
          e.t,
          e.p,
          Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
          e
        );
      },
      En = function (t, e) {
        return e.set(
          e.t,
          e.p,
          1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
          e
        );
      },
      Tn = function (t, e) {
        return e.set(
          e.t,
          e.p,
          t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
          e
        );
      },
      Pn = function (t, e) {
        var n = e.s + e.c * t;
        e.set(e.t, e.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + e.u, e);
      },
      An = function (t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e);
      },
      kn = function (t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
      },
      On = function (t, e, n) {
        return (t.style[e] = n);
      },
      Mn = function (t, e, n) {
        return t.style.setProperty(e, n);
      },
      Fn = function (t, e, n) {
        return (t._gsap[e] = n);
      },
      Bn = function (t, e, n) {
        return (t._gsap.scaleX = t._gsap.scaleY = n);
      },
      Ln = function (t, e, n, i, r) {
        var o = t._gsap;
        (o.scaleX = o.scaleY = n), o.renderTransform(r, o);
      },
      In = function (t, e, n, i, r) {
        var o = t._gsap;
        (o[e] = n), o.renderTransform(r, o);
      },
      jn = "transform",
      Rn = jn + "Origin",
      zn = function (t, e) {
        var n = dn.createElementNS
          ? dn.createElementNS(
              (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
              t
            )
          : dn.createElement(t);
        return n.style ? n : dn.createElement(t);
      },
      Nn = function t(e, n, i) {
        var r = getComputedStyle(e);
        return (
          r[n] ||
          r.getPropertyValue(n.replace(wn, "-$1").toLowerCase()) ||
          r.getPropertyValue(n) ||
          (!i && t(e, Wn(n) || n, 1)) ||
          ""
        );
      },
      qn = "O,Moz,ms,Ms,Webkit".split(","),
      Wn = function (t, e, n) {
        var i = (e || hn).style,
          r = 5;
        if (t in i && !n) return t;
        for (
          t = t.charAt(0).toUpperCase() + t.substr(1);
          r-- && !(qn[r] + t in i);

        );
        return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? qn[r] : "") + t;
      },
      Vn = function () {
        "undefined" != typeof window &&
          window.document &&
          ((cn = window),
          (dn = cn.document),
          (pn = dn.documentElement),
          (hn = zn("div") || { style: {} }),
          zn("div"),
          (jn = Wn(jn)),
          (Rn = jn + "Origin"),
          (hn.style.cssText =
            "border-width:0;line-height:0;position:absolute;padding:0"),
          (vn = !!Wn("perspective")),
          (fn = 1));
      },
      Hn = function t(e) {
        var n,
          i = zn(
            "svg",
            (this.ownerSVGElement &&
              this.ownerSVGElement.getAttribute("xmlns")) ||
              "http://www.w3.org/2000/svg"
          ),
          r = this.parentNode,
          o = this.nextSibling,
          s = this.style.cssText;
        if (
          (pn.appendChild(i),
          i.appendChild(this),
          (this.style.display = "block"),
          e)
        )
          try {
            (n = this.getBBox()),
              (this._gsapBBox = this.getBBox),
              (this.getBBox = t);
          } catch (t) {}
        else this._gsapBBox && (n = this._gsapBBox());
        return (
          r && (o ? r.insertBefore(this, o) : r.appendChild(this)),
          pn.removeChild(i),
          (this.style.cssText = s),
          n
        );
      },
      Gn = function (t, e) {
        for (var n = e.length; n--; )
          if (t.hasAttribute(e[n])) return t.getAttribute(e[n]);
      },
      $n = function (t) {
        var e;
        try {
          e = t.getBBox();
        } catch (n) {
          e = Hn.call(t, !0);
        }
        return (
          (e && (e.width || e.height)) ||
            t.getBBox === Hn ||
            (e = Hn.call(t, !0)),
          !e || e.width || e.x || e.y
            ? e
            : {
                x: +Gn(t, ["x", "cx", "x1"]) || 0,
                y: +Gn(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0,
              }
        );
      },
      Xn = function (t) {
        return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !$n(t));
      },
      Yn = function (t, e) {
        if (e) {
          var n = t.style;
          e in gn && e !== Rn && (e = jn),
            n.removeProperty
              ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                  (e = "-" + e),
                n.removeProperty(e.replace(wn, "-$1").toLowerCase()))
              : n.removeAttribute(e);
        }
      },
      Un = function (t, e, n, i, r, o) {
        var s = new on(t._pt, e, n, 0, 1, o ? kn : An);
        return (t._pt = s), (s.b = i), (s.e = r), t._props.push(n), s;
      },
      Qn = { deg: 1, rad: 1, turn: 1 },
      Kn = function t(e, n, i, r) {
        var o,
          s,
          a,
          l,
          u = parseFloat(i) || 0,
          c = (i + "").trim().substr((u + "").length) || "px",
          d = hn.style,
          p = Dn.test(n),
          f = "svg" === e.tagName.toLowerCase(),
          h = (f ? "client" : "offset") + (p ? "Width" : "Height"),
          m = "px" === r,
          v = "%" === r;
        return r === c || !u || Qn[r] || Qn[c]
          ? u
          : ("px" !== c && !m && (u = t(e, n, i, "px")),
            (l = e.getCTM && Xn(e)),
            (!v && "%" !== c) || (!gn[n] && !~n.indexOf("adius"))
              ? ((d[p ? "width" : "height"] = 100 + (m ? c : r)),
                (s =
                  ~n.indexOf("adius") || ("em" === r && e.appendChild && !f)
                    ? e
                    : e.parentNode),
                l && (s = (e.ownerSVGElement || {}).parentNode),
                (s && s !== dn && s.appendChild) || (s = dn.body),
                (a = s._gsap) && v && a.width && p && a.time === xe.time
                  ? mt((u / a.width) * 100)
                  : ((v || "%" === c) && (d.position = Nn(e, "position")),
                    s === e && (d.position = "static"),
                    s.appendChild(hn),
                    (o = hn[h]),
                    s.removeChild(hn),
                    (d.position = "absolute"),
                    p && v && (((a = pt(s)).time = xe.time), (a.width = s[h])),
                    mt(m ? (o * u) / 100 : o && u ? (100 / o) * u : 0)))
              : ((o = l ? e.getBBox()[p ? "width" : "height"] : e[h]),
                mt(v ? (u / o) * 100 : (u / 100) * o)));
      },
      Zn = function (t, e, n, i) {
        var r;
        return (
          fn || Vn(),
          e in Sn &&
            "transform" !== e &&
            ~(e = Sn[e]).indexOf(",") &&
            (e = e.split(",")[0]),
          gn[e] && "transform" !== e
            ? ((r = ui(t, i)),
              (r =
                "transformOrigin" !== e
                  ? r[e]
                  : r.svg
                  ? r.origin
                  : ci(Nn(t, Rn)) + " " + r.zOrigin + "px"))
            : (!(r = t.style[e]) ||
                "auto" === r ||
                i ||
                ~(r + "").indexOf("calc(")) &&
              (r =
                (ni[e] && ni[e](t, e, n)) ||
                Nn(t, e) ||
                ft(t, e) ||
                ("opacity" === e ? 1 : 0)),
          n && !~(r + "").trim().indexOf(" ") ? Kn(t, e, r, n) + n : r
        );
      },
      Jn = function (t, e, n, i) {
        if (!n || "none" === n) {
          var r = Wn(e, t, 1),
            o = r && Nn(t, r, 1);
          o && o !== n
            ? ((e = r), (n = o))
            : "borderColor" === e && (n = Nn(t, "borderTopColor"));
        }
        var s,
          a,
          l,
          u,
          c,
          d,
          p,
          f,
          h,
          m,
          v,
          g,
          y = new on(this._pt, t.style, e, 0, 1, Ze),
          b = 0,
          x = 0;
        if (
          ((y.b = n),
          (y.e = i),
          (n += ""),
          "auto" === (i += "") &&
            ((t.style[e] = i), (i = Nn(t, e) || i), (t.style[e] = n)),
          be((s = [n, i])),
          (i = s[1]),
          (l = (n = s[0]).match(G) || []),
          (i.match(G) || []).length)
        ) {
          for (; (a = G.exec(i)); )
            (p = a[0]),
              (h = i.substring(b, a.index)),
              c
                ? (c = (c + 1) % 5)
                : ("rgba(" !== h.substr(-5) && "hsla(" !== h.substr(-5)) ||
                  (c = 1),
              p !== (d = l[x++] || "") &&
                ((u = parseFloat(d) || 0),
                (v = d.substr((u + "").length)),
                (g = "=" === p.charAt(1) ? +(p.charAt(0) + "1") : 0) &&
                  (p = p.substr(2)),
                (f = parseFloat(p)),
                (m = p.substr((f + "").length)),
                (b = G.lastIndex - m.length),
                m ||
                  ((m = m || S.units[e] || v),
                  b === i.length && ((i += m), (y.e += m))),
                v !== m && (u = Kn(t, e, d, m) || 0),
                (y._pt = {
                  _next: y._pt,
                  p: h || 1 === x ? h : ",",
                  s: u,
                  c: g ? g * f : f - u,
                  m: (c && c < 4) || "zIndex" === e ? Math.round : 0,
                }));
          y.c = b < i.length ? i.substring(b, i.length) : "";
        } else y.r = "display" === e && "none" === i ? kn : An;
        return X.test(i) && (y.e = 0), (this._pt = y), y;
      },
      ti = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%",
      },
      ei = function (t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
          var n,
            i,
            r,
            o = e.t,
            s = o.style,
            a = e.u,
            l = o._gsap;
          if ("all" === a || !0 === a) (s.cssText = ""), (i = 1);
          else
            for (r = (a = a.split(",")).length; --r > -1; )
              (n = a[r]),
                gn[n] && ((i = 1), (n = "transformOrigin" === n ? Rn : jn)),
                Yn(o, n);
          i &&
            (Yn(o, jn),
            l &&
              (l.svg && o.removeAttribute("transform"),
              ui(o, 1),
              (l.uncache = 1)));
        }
      },
      ni = {
        clearProps: function (t, e, n, i, r) {
          if ("isFromStart" !== r.data) {
            var o = (t._pt = new on(t._pt, e, n, 0, 0, ei));
            return (o.u = i), (o.pr = -10), (o.tween = r), t._props.push(n), 1;
          }
        },
      },
      ii = [1, 0, 0, 1, 0, 0],
      ri = {},
      oi = function (t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
      },
      si = function (t) {
        var e = Nn(t, jn);
        return oi(e) ? ii : e.substr(7).match(H).map(mt);
      },
      ai = function (t, e) {
        var n,
          i,
          r,
          o,
          s = t._gsap || pt(t),
          a = t.style,
          l = si(t);
        return s.svg && t.getAttribute("transform")
          ? "1,0,0,1,0,0" ===
            (l = [
              (r = t.transform.baseVal.consolidate().matrix).a,
              r.b,
              r.c,
              r.d,
              r.e,
              r.f,
            ]).join(",")
            ? ii
            : l
          : (l !== ii ||
              t.offsetParent ||
              t === pn ||
              s.svg ||
              ((r = a.display),
              (a.display = "block"),
              ((n = t.parentNode) && t.offsetParent) ||
                ((o = 1), (i = t.nextSibling), pn.appendChild(t)),
              (l = si(t)),
              r ? (a.display = r) : Yn(t, "display"),
              o &&
                (i
                  ? n.insertBefore(t, i)
                  : n
                  ? n.appendChild(t)
                  : pn.removeChild(t))),
            e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
      },
      li = function (t, e, n, i, r, o) {
        var s,
          a,
          l,
          u = t._gsap,
          c = r || ai(t, !0),
          d = u.xOrigin || 0,
          p = u.yOrigin || 0,
          f = u.xOffset || 0,
          h = u.yOffset || 0,
          m = c[0],
          v = c[1],
          g = c[2],
          y = c[3],
          b = c[4],
          x = c[5],
          w = e.split(" "),
          D = parseFloat(w[0]) || 0,
          _ = parseFloat(w[1]) || 0;
        n
          ? c !== ii &&
            (a = m * y - v * g) &&
            ((l = D * (-v / a) + _ * (m / a) - (m * x - v * b) / a),
            (D = D * (y / a) + _ * (-g / a) + (g * x - y * b) / a),
            (_ = l))
          : ((D =
              (s = $n(t)).x + (~w[0].indexOf("%") ? (D / 100) * s.width : D)),
            (_ =
              s.y + (~(w[1] || w[0]).indexOf("%") ? (_ / 100) * s.height : _))),
          i || (!1 !== i && u.smooth)
            ? ((b = D - d),
              (x = _ - p),
              (u.xOffset = f + (b * m + x * g) - b),
              (u.yOffset = h + (b * v + x * y) - x))
            : (u.xOffset = u.yOffset = 0),
          (u.xOrigin = D),
          (u.yOrigin = _),
          (u.smooth = !!i),
          (u.origin = e),
          (u.originIsAbsolute = !!n),
          (t.style[Rn] = "0px 0px"),
          o &&
            (Un(o, u, "xOrigin", d, D),
            Un(o, u, "yOrigin", p, _),
            Un(o, u, "xOffset", f, u.xOffset),
            Un(o, u, "yOffset", h, u.yOffset)),
          t.setAttribute("data-svg-origin", D + " " + _);
      },
      ui = function (t, e) {
        var n = t._gsap || new Fe(t);
        if ("x" in n && !e && !n.uncache) return n;
        var i,
          r,
          o,
          s,
          a,
          l,
          u,
          c,
          d,
          p,
          f,
          h,
          m,
          v,
          g,
          y,
          b,
          x,
          w,
          D,
          _,
          C,
          E,
          T,
          P,
          A,
          k,
          O,
          M,
          F,
          B,
          L,
          I = t.style,
          j = n.scaleX < 0,
          R = Nn(t, Rn) || "0";
        return (
          (i = r = o = l = u = c = d = p = f = 0),
          (s = a = 1),
          (n.svg = !(!t.getCTM || !Xn(t))),
          (v = ai(t, n.svg)),
          n.svg &&
            ((T =
              (!n.uncache || "0px 0px" === R) &&
              !e &&
              t.getAttribute("data-svg-origin")),
            li(t, T || R, !!T || n.originIsAbsolute, !1 !== n.smooth, v)),
          (h = n.xOrigin || 0),
          (m = n.yOrigin || 0),
          v !== ii &&
            ((x = v[0]),
            (w = v[1]),
            (D = v[2]),
            (_ = v[3]),
            (i = C = v[4]),
            (r = E = v[5]),
            6 === v.length
              ? ((s = Math.sqrt(x * x + w * w)),
                (a = Math.sqrt(_ * _ + D * D)),
                (l = x || w ? xn(w, x) * yn : 0),
                (d = D || _ ? xn(D, _) * yn + l : 0) &&
                  (a *= Math.abs(Math.cos(d * bn))),
                n.svg &&
                  ((i -= h - (h * x + m * D)), (r -= m - (h * w + m * _))))
              : ((L = v[6]),
                (F = v[7]),
                (k = v[8]),
                (O = v[9]),
                (M = v[10]),
                (B = v[11]),
                (i = v[12]),
                (r = v[13]),
                (o = v[14]),
                (u = (g = xn(L, M)) * yn),
                g &&
                  ((T = C * (y = Math.cos(-g)) + k * (b = Math.sin(-g))),
                  (P = E * y + O * b),
                  (A = L * y + M * b),
                  (k = C * -b + k * y),
                  (O = E * -b + O * y),
                  (M = L * -b + M * y),
                  (B = F * -b + B * y),
                  (C = T),
                  (E = P),
                  (L = A)),
                (c = (g = xn(-D, M)) * yn),
                g &&
                  ((y = Math.cos(-g)),
                  (B = _ * (b = Math.sin(-g)) + B * y),
                  (x = T = x * y - k * b),
                  (w = P = w * y - O * b),
                  (D = A = D * y - M * b)),
                (l = (g = xn(w, x)) * yn),
                g &&
                  ((T = x * (y = Math.cos(g)) + w * (b = Math.sin(g))),
                  (P = C * y + E * b),
                  (w = w * y - x * b),
                  (E = E * y - C * b),
                  (x = T),
                  (C = P)),
                u &&
                  Math.abs(u) + Math.abs(l) > 359.9 &&
                  ((u = l = 0), (c = 180 - c)),
                (s = mt(Math.sqrt(x * x + w * w + D * D))),
                (a = mt(Math.sqrt(E * E + L * L))),
                (g = xn(C, E)),
                (d = Math.abs(g) > 2e-4 ? g * yn : 0),
                (f = B ? 1 / (B < 0 ? -B : B) : 0)),
            n.svg &&
              ((T = t.getAttribute("transform")),
              (n.forceCSS = t.setAttribute("transform", "") || !oi(Nn(t, jn))),
              T && t.setAttribute("transform", T))),
          Math.abs(d) > 90 &&
            Math.abs(d) < 270 &&
            (j
              ? ((s *= -1),
                (d += l <= 0 ? 180 : -180),
                (l += l <= 0 ? 180 : -180))
              : ((a *= -1), (d += d <= 0 ? 180 : -180))),
          (n.x =
            i -
            ((n.xPercent =
              i &&
              (n.xPercent ||
                (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0)))
              ? (t.offsetWidth * n.xPercent) / 100
              : 0) +
            "px"),
          (n.y =
            r -
            ((n.yPercent =
              r &&
              (n.yPercent ||
                (Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0)))
              ? (t.offsetHeight * n.yPercent) / 100
              : 0) +
            "px"),
          (n.z = o + "px"),
          (n.scaleX = mt(s)),
          (n.scaleY = mt(a)),
          (n.rotation = mt(l) + "deg"),
          (n.rotationX = mt(u) + "deg"),
          (n.rotationY = mt(c) + "deg"),
          (n.skewX = d + "deg"),
          (n.skewY = p + "deg"),
          (n.transformPerspective = f + "px"),
          (n.zOrigin = parseFloat(R.split(" ")[2]) || 0) && (I[Rn] = ci(R)),
          (n.xOffset = n.yOffset = 0),
          (n.force3D = S.force3D),
          (n.renderTransform = n.svg ? hi : vn ? fi : pi),
          (n.uncache = 0),
          n
        );
      },
      ci = function (t) {
        return (t = t.split(" "))[0] + " " + t[1];
      },
      di = function (t, e, n) {
        var i = Ut(e);
        return mt(parseFloat(e) + parseFloat(Kn(t, "x", n + "px", i))) + i;
      },
      pi = function (t, e) {
        (e.z = "0px"),
          (e.rotationY = e.rotationX = "0deg"),
          (e.force3D = 0),
          fi(t, e);
      },
      fi = function (t, e) {
        var n = e || this,
          i = n.xPercent,
          r = n.yPercent,
          o = n.x,
          s = n.y,
          a = n.z,
          l = n.rotation,
          u = n.rotationY,
          c = n.rotationX,
          d = n.skewX,
          p = n.skewY,
          f = n.scaleX,
          h = n.scaleY,
          m = n.transformPerspective,
          v = n.force3D,
          g = n.target,
          y = n.zOrigin,
          b = "",
          x = ("auto" === v && t && 1 !== t) || !0 === v;
        if (y && ("0deg" !== c || "0deg" !== u)) {
          var w,
            D = parseFloat(u) * bn,
            _ = Math.sin(D),
            S = Math.cos(D);
          (D = parseFloat(c) * bn),
            (w = Math.cos(D)),
            (o = di(g, o, _ * w * -y)),
            (s = di(g, s, -Math.sin(D) * -y)),
            (a = di(g, a, S * w * -y + y));
        }
        "0px" !== m && (b += "perspective(" + m + ") "),
          (i || r) && (b += "translate(" + i + "%, " + r + "%) "),
          (x || "0px" !== o || "0px" !== s || "0px" !== a) &&
            (b +=
              "0px" !== a || x
                ? "translate3d(" + o + ", " + s + ", " + a + ") "
                : "translate(" + o + ", " + s + ") "),
          "0deg" !== l && (b += "rotate(" + l + ") "),
          "0deg" !== u && (b += "rotateY(" + u + ") "),
          "0deg" !== c && (b += "rotateX(" + c + ") "),
          ("0deg" === d && "0deg" === p) ||
            (b += "skew(" + d + ", " + p + ") "),
          (1 === f && 1 === h) || (b += "scale(" + f + ", " + h + ") "),
          (g.style[jn] = b || "translate(0, 0)");
      },
      hi = function (t, e) {
        var n,
          i,
          r,
          o,
          s,
          a = e || this,
          l = a.xPercent,
          u = a.yPercent,
          c = a.x,
          d = a.y,
          p = a.rotation,
          f = a.skewX,
          h = a.skewY,
          m = a.scaleX,
          v = a.scaleY,
          g = a.target,
          y = a.xOrigin,
          b = a.yOrigin,
          x = a.xOffset,
          w = a.yOffset,
          D = a.forceCSS,
          _ = parseFloat(c),
          S = parseFloat(d);
        (p = parseFloat(p)),
          (f = parseFloat(f)),
          (h = parseFloat(h)) && ((f += h = parseFloat(h)), (p += h)),
          p || f
            ? ((p *= bn),
              (f *= bn),
              (n = Math.cos(p) * m),
              (i = Math.sin(p) * m),
              (r = Math.sin(p - f) * -v),
              (o = Math.cos(p - f) * v),
              f &&
                ((h *= bn),
                (s = Math.tan(f - h)),
                (r *= s = Math.sqrt(1 + s * s)),
                (o *= s),
                h &&
                  ((s = Math.tan(h)),
                  (n *= s = Math.sqrt(1 + s * s)),
                  (i *= s))),
              (n = mt(n)),
              (i = mt(i)),
              (r = mt(r)),
              (o = mt(o)))
            : ((n = m), (o = v), (i = r = 0)),
          ((_ && !~(c + "").indexOf("px")) ||
            (S && !~(d + "").indexOf("px"))) &&
            ((_ = Kn(g, "x", c, "px")), (S = Kn(g, "y", d, "px"))),
          (y || b || x || w) &&
            ((_ = mt(_ + y - (y * n + b * r) + x)),
            (S = mt(S + b - (y * i + b * o) + w))),
          (l || u) &&
            ((s = g.getBBox()),
            (_ = mt(_ + (l / 100) * s.width)),
            (S = mt(S + (u / 100) * s.height))),
          (s =
            "matrix(" +
            n +
            "," +
            i +
            "," +
            r +
            "," +
            o +
            "," +
            _ +
            "," +
            S +
            ")"),
          g.setAttribute("transform", s),
          D && (g.style[jn] = s);
      },
      mi = function (t, e, n, i, r, o) {
        var s,
          a,
          l = F(r),
          u = parseFloat(r) * (l && ~r.indexOf("rad") ? yn : 1),
          c = o ? u * o : u - i,
          d = i + c + "deg";
        return (
          l &&
            ("short" === (s = r.split("_")[1]) &&
              (c %= 360) !== c % 180 &&
              (c += c < 0 ? 360 : -360),
            "cw" === s && c < 0
              ? (c = ((c + 36e9) % 360) - 360 * ~~(c / 360))
              : "ccw" === s &&
                c > 0 &&
                (c = ((c - 36e9) % 360) - 360 * ~~(c / 360))),
          (t._pt = a = new on(t._pt, e, n, i, c, En)),
          (a.e = d),
          (a.u = "deg"),
          t._props.push(n),
          a
        );
      },
      vi = function (t, e) {
        for (var n in e) t[n] = e[n];
        return t;
      },
      gi = function (t, e, n) {
        var i,
          r,
          o,
          s,
          a,
          l,
          u,
          c = vi({}, n._gsap),
          d = n.style;
        for (r in (c.svg
          ? ((o = n.getAttribute("transform")),
            n.setAttribute("transform", ""),
            (d[jn] = e),
            (i = ui(n, 1)),
            Yn(n, jn),
            n.setAttribute("transform", o))
          : ((o = getComputedStyle(n)[jn]),
            (d[jn] = e),
            (i = ui(n, 1)),
            (d[jn] = o)),
        gn))
          (o = c[r]) !== (s = i[r]) &&
            "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 &&
            ((a = Ut(o) !== (u = Ut(s)) ? Kn(n, r, o, u) : parseFloat(o)),
            (l = parseFloat(s)),
            (t._pt = new on(t._pt, i, r, a, l - a, Cn)),
            (t._pt.u = u || 0),
            t._props.push(r));
        vi(i, c);
      };
    ht("padding,margin,Width,Radius", function (t, e) {
      var n = "Top",
        i = "Right",
        r = "Bottom",
        o = "Left",
        s = (e < 3 ? [n, i, r, o] : [n + o, n + i, r + i, r + o]).map(function (
          n
        ) {
          return e < 2 ? t + n : "border" + n + t;
        });
      ni[e > 1 ? "border" + t : t] = function (t, e, n, i, r) {
        var o, a;
        if (arguments.length < 4)
          return (
            (o = s.map(function (e) {
              return Zn(t, e, n);
            })),
            5 === (a = o.join(" ")).split(o[0]).length ? o[0] : a
          );
        (o = (i + "").split(" ")),
          (a = {}),
          s.forEach(function (t, e) {
            return (a[t] = o[e] = o[e] || o[((e - 1) / 2) | 0]);
          }),
          t.init(e, a, r);
      };
    });
    var yi,
      bi,
      xi = {
        name: "css",
        register: Vn,
        targetTest: function (t) {
          return t.style && t.nodeType;
        },
        init: function (t, e, n, i, r) {
          var o,
            s,
            a,
            l,
            u,
            c,
            d,
            p,
            f,
            h,
            m,
            v,
            g,
            y,
            b,
            x,
            w,
            D,
            _,
            C = this._props,
            E = t.style,
            T = n.vars.startAt;
          for (d in (fn || Vn(), e))
            if (
              "autoRound" !== d &&
              ((s = e[d]), !st[d] || !ze(d, e, n, i, t, r))
            )
              if (
                ((u = typeof s),
                (c = ni[d]),
                "function" === u && (u = typeof (s = s.call(n, i, t, r))),
                "string" === u && ~s.indexOf("random(") && (s = se(s)),
                c)
              )
                c(this, t, d, s, n) && (b = 1);
              else if ("--" === d.substr(0, 2))
                (o = (getComputedStyle(t).getPropertyValue(d) + "").trim()),
                  (s += ""),
                  (ge.lastIndex = 0),
                  ge.test(o) || ((p = Ut(o)), (f = Ut(s))),
                  f ? p !== f && (o = Kn(t, d, o, f) + f) : p && (s += p),
                  this.add(E, "setProperty", o, s, i, r, 0, 0, d),
                  C.push(d);
              else if ("undefined" !== u) {
                if (
                  (T && d in T
                    ? ((o =
                        "function" == typeof T[d]
                          ? T[d].call(n, i, t, r)
                          : T[d]),
                      d in S.units && !Ut(o) && (o += S.units[d]),
                      F(o) && ~o.indexOf("random(") && (o = se(o)),
                      "=" === (o + "").charAt(1) && (o = Zn(t, d)))
                    : (o = Zn(t, d)),
                  (l = parseFloat(o)),
                  (h =
                    "string" === u && "=" === s.charAt(1)
                      ? +(s.charAt(0) + "1")
                      : 0) && (s = s.substr(2)),
                  (a = parseFloat(s)),
                  d in Sn &&
                    ("autoAlpha" === d &&
                      (1 === l &&
                        "hidden" === Zn(t, "visibility") &&
                        a &&
                        (l = 0),
                      Un(
                        this,
                        E,
                        "visibility",
                        l ? "inherit" : "hidden",
                        a ? "inherit" : "hidden",
                        !a
                      )),
                    "scale" !== d &&
                      "transform" !== d &&
                      ~(d = Sn[d]).indexOf(",") &&
                      (d = d.split(",")[0])),
                  (m = d in gn))
                )
                  if (
                    (v ||
                      (((g = t._gsap).renderTransform && !e.parseTransform) ||
                        ui(t, e.parseTransform),
                      (y = !1 !== e.smoothOrigin && g.smooth),
                      ((v = this._pt =
                        new on(
                          this._pt,
                          E,
                          jn,
                          0,
                          1,
                          g.renderTransform,
                          g,
                          0,
                          -1
                        )).dep = 1)),
                    "scale" === d)
                  )
                    (this._pt = new on(
                      this._pt,
                      g,
                      "scaleY",
                      g.scaleY,
                      (h ? h * a : a - g.scaleY) || 0
                    )),
                      C.push("scaleY", d),
                      (d += "X");
                  else {
                    if ("transformOrigin" === d) {
                      (w = void 0),
                        (D = void 0),
                        (_ = void 0),
                        (w = (x = s).split(" ")),
                        (D = w[0]),
                        (_ = w[1] || "50%"),
                        ("top" !== D &&
                          "bottom" !== D &&
                          "left" !== _ &&
                          "right" !== _) ||
                          ((x = D), (D = _), (_ = x)),
                        (w[0] = ti[D] || D),
                        (w[1] = ti[_] || _),
                        (s = w.join(" ")),
                        g.svg
                          ? li(t, s, 0, y, 0, this)
                          : ((f = parseFloat(s.split(" ")[2]) || 0) !==
                              g.zOrigin && Un(this, g, "zOrigin", g.zOrigin, f),
                            Un(this, E, d, ci(o), ci(s)));
                      continue;
                    }
                    if ("svgOrigin" === d) {
                      li(t, s, 1, y, 0, this);
                      continue;
                    }
                    if (d in ri) {
                      mi(this, g, d, l, s, h);
                      continue;
                    }
                    if ("smoothOrigin" === d) {
                      Un(this, g, "smooth", g.smooth, s);
                      continue;
                    }
                    if ("force3D" === d) {
                      g[d] = s;
                      continue;
                    }
                    if ("transform" === d) {
                      gi(this, s, t);
                      continue;
                    }
                  }
                else d in E || (d = Wn(d) || d);
                if (
                  m ||
                  ((a || 0 === a) && (l || 0 === l) && !_n.test(s) && d in E)
                )
                  a || (a = 0),
                    (p = (o + "").substr((l + "").length)) !==
                      (f = Ut(s) || (d in S.units ? S.units[d] : p)) &&
                      (l = Kn(t, d, o, f)),
                    (this._pt = new on(
                      this._pt,
                      m ? g : E,
                      d,
                      l,
                      h ? h * a : a - l,
                      m || ("px" !== f && "zIndex" !== d) || !1 === e.autoRound
                        ? Cn
                        : Pn
                    )),
                    (this._pt.u = f || 0),
                    p !== f &&
                      "%" !== f &&
                      ((this._pt.b = o), (this._pt.r = Tn));
                else if (d in E) Jn.call(this, t, d, o, s);
                else {
                  if (!(d in t)) {
                    J(d, s);
                    continue;
                  }
                  this.add(t, d, o || t[d], s, i, r);
                }
                C.push(d);
              }
          b && rn(this);
        },
        get: Zn,
        aliases: Sn,
        getSetter: function (t, e, n) {
          var i = Sn[e];
          return (
            i && i.indexOf(",") < 0 && (e = i),
            e in gn && e !== Rn && (t._gsap.x || Zn(t, "x"))
              ? n && mn === n
                ? "scale" === e
                  ? Bn
                  : Fn
                : (mn = n || {}) && ("scale" === e ? Ln : In)
              : t.style && !I(t.style[e])
              ? On
              : ~e.indexOf("-")
              ? Mn
              : Ue(t, e)
          );
        },
        core: { _removeProperty: Yn, _getMatrix: ai },
      };
    (un.utils.checkPrefix = Wn),
      (bi = ht(
        "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," +
          (yi = "rotation,rotationX,rotationY,skewX,skewY") +
          ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
        function (t) {
          gn[t] = 1;
        }
      )),
      ht(yi, function (t) {
        (S.units[t] = "deg"), (ri[t] = 1);
      }),
      (Sn[bi[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + yi),
      ht(
        "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
        function (t) {
          var e = t.split(":");
          Sn[e[1]] = bi[e[0]];
        }
      ),
      ht(
        "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
        function (t) {
          S.units[t] = "px";
        }
      ),
      un.registerPlugin(xi);
    var wi,
      Di,
      _i,
      Si,
      Ci,
      Ei,
      Ti,
      Pi,
      Ai,
      ki,
      Oi,
      Mi,
      Fi,
      Bi,
      Li,
      Ii,
      ji,
      Ri,
      zi,
      Ni,
      qi,
      Wi,
      Vi,
      Hi,
      Gi,
      $i,
      Xi,
      Yi,
      Ui = un.registerPlugin(xi) || un,
      Qi = (Ui.core.Tween, 1),
      Ki = [],
      Zi = [],
      Ji = Date.now,
      tr = Ji(),
      er = 0,
      nr = 1,
      ir = function (t) {
        return t;
      },
      rr = function (t) {
        return (
          Oi(t)[0] || (hr(t) ? console.warn("Element not found:", t) : null)
        );
      },
      or = function (t) {
        return Math.round(1e5 * t) / 1e5 || 0;
      },
      sr = function () {
        return "undefined" != typeof window;
      },
      ar = function () {
        return wi || (sr() && (wi = window.gsap) && wi.registerPlugin && wi);
      },
      lr = function (t) {
        return !!~Ti.indexOf(t);
      },
      ur = function (t, e) {
        return ~Ki.indexOf(t) && Ki[Ki.indexOf(t) + 1][e];
      },
      cr = function (t, e) {
        var n = e.s,
          i = e.sc,
          r = Zi.indexOf(t),
          o = i === Er.sc ? 1 : 2;
        return (
          !~r && (r = Zi.push(t) - 1),
          Zi[r + o] ||
            (Zi[r + o] =
              ur(t, n) ||
              (lr(t)
                ? i
                : function (e) {
                    return arguments.length ? (t[n] = e) : t[n];
                  }))
        );
      },
      dr = function (t) {
        return (
          ur(t, "getBoundingClientRect") ||
          (lr(t)
            ? function () {
                return (
                  (ho.width = _i.innerWidth), (ho.height = _i.innerHeight), ho
                );
              }
            : function () {
                return Ar(t);
              })
        );
      },
      pr = function (t, e) {
        var n = e.s,
          i = e.d2,
          r = e.d,
          o = e.a;
        return (n = "scroll" + i) && (o = ur(t, n))
          ? o() - dr(t)()[r]
          : lr(t)
          ? (Ei[n] || Ci[n]) -
            (_i["inner" + i] || Ci["client" + i] || Ei["client" + i])
          : t[n] - t["offset" + i];
      },
      fr = function (t, e) {
        for (var n = 0; n < qi.length; n += 3)
          (!e || ~e.indexOf(qi[n + 1])) && t(qi[n], qi[n + 1], qi[n + 2]);
      },
      hr = function (t) {
        return "string" == typeof t;
      },
      mr = function (t) {
        return "function" == typeof t;
      },
      vr = function (t) {
        return "number" == typeof t;
      },
      gr = function (t) {
        return "object" == typeof t;
      },
      yr = function (t) {
        return mr(t) && t();
      },
      br = function (t, e) {
        return function () {
          var n = yr(t),
            i = yr(e);
          return function () {
            yr(n), yr(i);
          };
        };
      },
      xr = function (t, e, n) {
        return t && t.progress(e ? 0 : 1) && n && t.pause();
      },
      wr = function (t, e) {
        var n = e(t);
        n && n.totalTime && (t.callbackAnimation = n);
      },
      Dr = Math.abs,
      _r = "padding",
      Sr = "px",
      Cr = {
        s: "scrollLeft",
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: function (t) {
          return arguments.length
            ? _i.scrollTo(t, Er.sc())
            : _i.pageXOffset ||
                Si.scrollLeft ||
                Ci.scrollLeft ||
                Ei.scrollLeft ||
                0;
        },
      },
      Er = {
        s: "scrollTop",
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: Cr,
        sc: function (t) {
          return arguments.length
            ? _i.scrollTo(Cr.sc(), t)
            : _i.pageYOffset ||
                Si.scrollTop ||
                Ci.scrollTop ||
                Ei.scrollTop ||
                0;
        },
      },
      Tr = function (t) {
        return _i.getComputedStyle(t);
      },
      Pr = function (t, e) {
        for (var n in e) n in t || (t[n] = e[n]);
        return t;
      },
      Ar = function (t, e) {
        var n =
            e &&
            "matrix(1, 0, 0, 1, 0, 0)" !== Tr(t)[ji] &&
            wi
              .to(t, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0,
              })
              .progress(1),
          i = t.getBoundingClientRect();
        return n && n.progress(0).kill(), i;
      },
      kr = function (t, e) {
        var n = e.d2;
        return t["offset" + n] || t["client" + n] || 0;
      },
      Or = function (t) {
        var e,
          n = [],
          i = t.labels,
          r = t.duration();
        for (e in i) n.push(i[e] / r);
        return n;
      },
      Mr = function (t) {
        var e = wi.utils.snap(t),
          n =
            Array.isArray(t) &&
            t.slice(0).sort(function (t, e) {
              return t - e;
            });
        return n
          ? function (t, i) {
              var r;
              if (!i) return e(t);
              if (i > 0) {
                for (t -= 1e-4, r = 0; r < n.length; r++)
                  if (n[r] >= t) return n[r];
                return n[r - 1];
              }
              for (r = n.length, t += 1e-4; r--; ) if (n[r] <= t) return n[r];
              return n[0];
            }
          : function (n, i) {
              var r = e(n);
              return !i || Math.abs(r - n) < 0.001 || r - n < 0 == i < 0
                ? r
                : e(i < 0 ? n - t : n + t);
            };
      },
      Fr = function (t, e, n, i) {
        return n.split(",").forEach(function (n) {
          return t(e, n, i);
        });
      },
      Br = function (t, e, n) {
        return t.addEventListener(e, n, { passive: !0 });
      },
      Lr = function (t, e, n) {
        return t.removeEventListener(e, n);
      },
      Ir = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal",
      },
      jr = { toggleActions: "play", anticipatePin: 0 },
      Rr = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
      zr = function (t, e) {
        if (hr(t)) {
          var n = t.indexOf("="),
            i = ~n ? +(t.charAt(n - 1) + 1) * parseFloat(t.substr(n + 1)) : 0;
          ~n &&
            (t.indexOf("%") > n && (i *= e / 100), (t = t.substr(0, n - 1))),
            (t =
              i +
              (t in Rr
                ? Rr[t] * e
                : ~t.indexOf("%")
                ? (parseFloat(t) * e) / 100
                : parseFloat(t) || 0));
        }
        return t;
      },
      Nr = function (t, e, n, i, r, o, s, a) {
        var l = r.startColor,
          u = r.endColor,
          c = r.fontSize,
          d = r.indent,
          p = r.fontWeight,
          f = Si.createElement("div"),
          h = lr(n) || "fixed" === ur(n, "pinType"),
          m = -1 !== t.indexOf("scroller"),
          v = h ? Ei : n,
          g = -1 !== t.indexOf("start"),
          y = g ? l : u,
          b =
            "border-color:" +
            y +
            ";font-size:" +
            c +
            ";color:" +
            y +
            ";font-weight:" +
            p +
            ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return (
          (b += "position:" + ((m || a) && h ? "fixed;" : "absolute;")),
          (m || a || !h) &&
            (b +=
              (i === Er ? "right" : "bottom") +
              ":" +
              (o + parseFloat(d)) +
              "px;"),
          s &&
            (b +=
              "box-sizing:border-box;text-align:left;width:" +
              s.offsetWidth +
              "px;"),
          (f._isStart = g),
          f.setAttribute(
            "class",
            "gsap-marker-" + t + (e ? " marker-" + e : "")
          ),
          (f.style.cssText = b),
          (f.innerText = e || 0 === e ? t + "-" + e : t),
          v.children[0] ? v.insertBefore(f, v.children[0]) : v.appendChild(f),
          (f._offset = f["offset" + i.op.d2]),
          qr(f, 0, i, g),
          f
        );
      },
      qr = function (t, e, n, i) {
        var r = { display: "block" },
          o = n[i ? "os2" : "p2"],
          s = n[i ? "p2" : "os2"];
        (t._isFlipped = i),
          (r[n.a + "Percent"] = i ? -100 : 0),
          (r[n.a] = i ? "1px" : 0),
          (r["border" + o + "Width"] = 1),
          (r["border" + s + "Width"] = 0),
          (r[n.p] = e + "px"),
          wi.set(t, r);
      },
      Wr = [],
      Vr = {},
      Hr = function () {
        return Ji() - er > 20 && so();
      },
      Gr = function () {
        var t = Ji();
        er !== t
          ? (so(), er || Zr("scrollStart"), (er = t))
          : ki || (ki = Ai(so));
      },
      $r = function () {
        return !Li && !Hi && !Si.fullscreenElement && Pi.restart(!0);
      },
      Xr = {},
      Yr = [],
      Ur = [],
      Qr = function (t) {
        var e,
          n = wi.ticker.frame,
          i = [],
          r = 0;
        if (Xi !== n || Qi) {
          for (eo(); r < Ur.length; r += 4)
            (e = _i.matchMedia(Ur[r]).matches) !== Ur[r + 3] &&
              ((Ur[r + 3] = e),
              e ? i.push(r) : eo(1, Ur[r]) || (mr(Ur[r + 2]) && Ur[r + 2]()));
          for (to(), r = 0; r < i.length; r++)
            (e = i[r]), ($i = Ur[e]), (Ur[e + 2] = Ur[e + 1](t));
          ($i = 0), Di && io(0, 1), (Xi = n), Zr("matchMedia");
        }
      },
      Kr = function t() {
        return Lr(bo, "scrollEnd", t) || io(!0);
      },
      Zr = function (t) {
        return (
          (Xr[t] &&
            Xr[t].map(function (t) {
              return t();
            })) ||
          Yr
        );
      },
      Jr = [],
      to = function (t) {
        for (var e = 0; e < Jr.length; e += 5)
          (t && Jr[e + 4] !== t) ||
            ((Jr[e].style.cssText = Jr[e + 1]),
            Jr[e].getBBox && Jr[e].setAttribute("transform", Jr[e + 2] || ""),
            (Jr[e + 3].uncache = 1));
      },
      eo = function (t, e) {
        var n;
        for (Ri = 0; Ri < Wr.length; Ri++)
          (n = Wr[Ri]), (e && n.media !== e) || (t ? n.kill(1) : n.revert());
        e && to(e), e || Zr("revert");
      },
      no = function () {
        return Zi.forEach(function (t) {
          return "function" == typeof t && (t.rec = 0);
        });
      },
      io = function (t, e) {
        if (!er || t) {
          Yi = !0;
          var n = Zr("refreshInit");
          Wi && bo.sort(),
            e || eo(),
            Wr.forEach(function (t) {
              return t.refresh();
            }),
            n.forEach(function (t) {
              return t && t.render && t.render(-1);
            }),
            no(),
            Pi.pause(),
            (Yi = !1),
            Zr("refresh");
        } else Br(bo, "scrollEnd", Kr);
      },
      ro = 0,
      oo = 1,
      so = function () {
        if (!Yi) {
          var t = Wr.length,
            e = Ji(),
            n = e - tr >= 50,
            i = t && Wr[0].scroll();
          if (
            ((oo = ro > i ? -1 : 1),
            (ro = i),
            n &&
              (er && !Ii && e - er > 200 && ((er = 0), Zr("scrollEnd")),
              (Fi = tr),
              (tr = e)),
            oo < 0)
          ) {
            for (Ri = t; Ri-- > 0; ) Wr[Ri] && Wr[Ri].update(0, n);
            oo = 1;
          } else for (Ri = 0; Ri < t; Ri++) Wr[Ri] && Wr[Ri].update(0, n);
          ki = 0;
        }
      },
      ao = [
        "left",
        "top",
        "bottom",
        "right",
        "marginBottom",
        "marginRight",
        "marginTop",
        "marginLeft",
        "display",
        "flexShrink",
        "float",
        "zIndex",
        "grid-column-start",
        "grid-column-end",
        "grid-row-start",
        "grid-row-end",
        "grid-area",
        "justify-self",
        "align-self",
        "place-self",
      ],
      lo = ao.concat([
        "width",
        "height",
        "boxSizing",
        "maxWidth",
        "maxHeight",
        "position",
        "margin",
        _r,
        _r + "Top",
        _r + "Right",
        _r + "Bottom",
        _r + "Left",
      ]),
      uo = function (t, e, n, i) {
        if (t.parentNode !== e) {
          for (var r, o = ao.length, s = e.style, a = t.style; o--; )
            s[(r = ao[o])] = n[r];
          (s.position = "absolute" === n.position ? "absolute" : "relative"),
            "inline" === n.display && (s.display = "inline-block"),
            (a.bottom = a.right = "auto"),
            (s.overflow = "visible"),
            (s.boxSizing = "border-box"),
            (s.width = kr(t, Cr) + Sr),
            (s.height = kr(t, Er) + Sr),
            (s[_r] = a.margin = a.top = a.left = "0"),
            po(i),
            (a.width = a.maxWidth = n.width),
            (a.height = a.maxHeight = n.height),
            (a[_r] = n[_r]),
            t.parentNode.insertBefore(e, t),
            e.appendChild(t);
        }
      },
      co = /([A-Z])/g,
      po = function (t) {
        if (t) {
          var e,
            n,
            i = t.t.style,
            r = t.length,
            o = 0;
          for ((t.t._gsap || wi.core.getCache(t.t)).uncache = 1; o < r; o += 2)
            (n = t[o + 1]),
              (e = t[o]),
              n
                ? (i[e] = n)
                : i[e] && i.removeProperty(e.replace(co, "-$1").toLowerCase());
        }
      },
      fo = function (t) {
        for (var e = lo.length, n = t.style, i = [], r = 0; r < e; r++)
          i.push(lo[r], n[lo[r]]);
        return (i.t = t), i;
      },
      ho = { left: 0, top: 0 },
      mo = function (t, e, n, i, r, o, s, a, l, u, c, d, p) {
        mr(t) && (t = t(a)),
          hr(t) &&
            "max" === t.substr(0, 3) &&
            (t = d + ("=" === t.charAt(4) ? zr("0" + t.substr(3), n) : 0));
        var f,
          h,
          m,
          v = p ? p.time() : 0;
        if ((p && p.seek(0), vr(t))) s && qr(s, n, i, !0);
        else {
          mr(e) && (e = e(a));
          var g,
            y,
            b,
            x,
            w = t.split(" ");
          (m = rr(e) || Ei),
            ((g = Ar(m) || {}) && (g.left || g.top)) ||
              "none" !== Tr(m).display ||
              ((x = m.style.display),
              (m.style.display = "block"),
              (g = Ar(m)),
              x ? (m.style.display = x) : m.style.removeProperty("display")),
            (y = zr(w[0], g[i.d])),
            (b = zr(w[1] || "0", n)),
            (t = g[i.p] - l[i.p] - u + y + r - b),
            s && qr(s, b, i, n - b < 20 || (s._isStart && b > 20)),
            (n -= n - b);
        }
        if (o) {
          var D = t + n,
            _ = o._isStart;
          (f = "scroll" + i.d2),
            qr(
              o,
              D,
              i,
              (_ && D > 20) ||
                (!_ && (c ? Math.max(Ei[f], Ci[f]) : o.parentNode[f]) <= D + 1)
            ),
            c &&
              ((l = Ar(s)),
              c && (o.style[i.op.p] = l[i.op.p] - i.op.m - o._offset + Sr));
        }
        return (
          p &&
            m &&
            ((f = Ar(m)),
            p.seek(d),
            (h = Ar(m)),
            (p._caScrollDist = f[i.p] - h[i.p]),
            (t = (t / p._caScrollDist) * d)),
          p && p.seek(v),
          p ? t : Math.round(t)
        );
      },
      vo = /(?:webkit|moz|length|cssText|inset)/i,
      go = function (t, e, n, i) {
        if (t.parentNode !== e) {
          var r,
            o,
            s = t.style;
          if (e === Ei) {
            for (r in ((t._stOrig = s.cssText), (o = Tr(t))))
              +r ||
                vo.test(r) ||
                !o[r] ||
                "string" != typeof s[r] ||
                "0" === r ||
                (s[r] = o[r]);
            (s.top = n), (s.left = i);
          } else s.cssText = t._stOrig;
          (wi.core.getCache(t).uncache = 1), e.appendChild(t);
        }
      },
      yo = function (t, e) {
        var n,
          i,
          r = cr(t, e),
          o = "_scroll" + e.p2,
          s = function e(s, a, l, u, c) {
            var d = e.tween,
              p = a.onComplete,
              f = {};
            return (
              d && d.kill(),
              (n = Math.round(l)),
              (a[o] = s),
              (a.modifiers = f),
              (f[o] = function (t) {
                return (
                  (t = or(r())) !== n && t !== i && Math.abs(t - n) > 2
                    ? (d.kill(), (e.tween = 0))
                    : (t = l + u * d.ratio + c * d.ratio * d.ratio),
                  (i = n),
                  (n = or(t))
                );
              }),
              (a.onComplete = function () {
                (e.tween = 0), p && p.call(d);
              }),
              (d = e.tween = wi.to(t, a))
            );
          };
        return (
          (t[o] = r),
          t.addEventListener(
            "wheel",
            function () {
              return s.tween && s.tween.kill() && (s.tween = 0);
            },
            { passive: !0 }
          ),
          s
        );
      };
    Cr.op = Er;
    var bo = (function () {
      function t(e, n) {
        Di ||
          t.register(wi) ||
          console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
          this.init(e, n);
      }
      return (
        (t.prototype.init = function (e, n) {
          if (
            ((this.progress = this.start = 0), this.vars && this.kill(1), nr)
          ) {
            var i,
              r,
              o,
              s,
              a,
              l,
              u,
              c,
              d,
              p,
              f,
              h,
              m,
              v,
              g,
              y,
              b,
              x,
              w,
              D,
              _,
              S,
              C,
              E,
              T,
              P,
              A,
              k,
              O,
              M,
              F,
              B,
              L,
              I,
              j,
              R,
              z,
              N,
              q,
              W,
              V = (e = Pr(
                hr(e) || vr(e) || e.nodeType ? { trigger: e } : e,
                jr
              )),
              H = V.onUpdate,
              G = V.toggleClass,
              $ = V.id,
              X = V.onToggle,
              Y = V.onRefresh,
              U = V.scrub,
              Q = V.trigger,
              K = V.pin,
              Z = V.pinSpacing,
              J = V.invalidateOnRefresh,
              tt = V.anticipatePin,
              et = V.onScrubComplete,
              nt = V.onSnapComplete,
              it = V.once,
              rt = V.snap,
              ot = V.pinReparent,
              st = V.pinSpacer,
              at = V.containerAnimation,
              lt = V.fastScrollEnd,
              ut = V.preventOverlaps,
              ct =
                e.horizontal || (e.containerAnimation && !1 !== e.horizontal)
                  ? Cr
                  : Er,
              dt = !U && 0 !== U,
              pt = rr(e.scroller || _i),
              ft = wi.core.getCache(pt),
              ht = lr(pt),
              mt =
                "fixed" ===
                ("pinType" in e
                  ? e.pinType
                  : ur(pt, "pinType") || (ht && "fixed")),
              vt = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
              gt = dt && e.toggleActions.split(" "),
              yt = "markers" in e ? e.markers : jr.markers,
              bt = ht ? 0 : parseFloat(Tr(pt)["border" + ct.p2 + "Width"]) || 0,
              xt = this,
              wt =
                e.onRefreshInit &&
                function () {
                  return e.onRefreshInit(xt);
                },
              Dt = (function (t, e, n) {
                var i = n.d,
                  r = n.d2,
                  o = n.a;
                return (o = ur(t, "getBoundingClientRect"))
                  ? function () {
                      return o()[i];
                    }
                  : function () {
                      return (e ? _i["inner" + r] : t["client" + r]) || 0;
                    };
              })(pt, ht, ct),
              _t = (function (t, e) {
                return !e || ~Ki.indexOf(t)
                  ? dr(t)
                  : function () {
                      return ho;
                    };
              })(pt, ht),
              St = 0,
              Ct = cr(pt, ct);
            if (
              ((xt.media = $i),
              (tt *= 45),
              (xt.scroller = pt),
              (xt.scroll = at ? at.time.bind(at) : Ct),
              (s = Ct()),
              (xt.vars = e),
              (n = n || e.animation),
              "refreshPriority" in e && (Wi = 1),
              (ft.tweenScroll = ft.tweenScroll || {
                top: yo(pt, Er),
                left: yo(pt, Cr),
              }),
              (xt.tweenTo = i = ft.tweenScroll[ct.p]),
              n &&
                ((n.vars.lazy = !1),
                n._initted ||
                  (!1 !== n.vars.immediateRender &&
                    !1 !== e.immediateRender &&
                    n.render(0, !0, !0)),
                (xt.animation = n.pause()),
                (n.scrollTrigger = xt),
                (F = vr(U) && U) &&
                  (M = wi.to(n, {
                    ease: "power3",
                    duration: F,
                    onComplete: function () {
                      return et && et(xt);
                    },
                  })),
                (k = 0),
                $ || ($ = n.vars.id)),
              Wr.push(xt),
              rt &&
                ((gr(rt) && !rt.push) || (rt = { snapTo: rt }),
                "scrollBehavior" in Ei.style &&
                  wi.set(ht ? [Ei, Ci] : pt, { scrollBehavior: "auto" }),
                (o = mr(rt.snapTo)
                  ? rt.snapTo
                  : "labels" === rt.snapTo
                  ? (function (t) {
                      return function (e) {
                        return wi.utils.snap(Or(t), e);
                      };
                    })(n)
                  : "labelsDirectional" === rt.snapTo
                  ? ((N = n),
                    function (t, e) {
                      return Mr(Or(N))(t, e.direction);
                    })
                  : !1 !== rt.directional
                  ? function (t, e) {
                      return Mr(rt.snapTo)(t, e.direction);
                    }
                  : wi.utils.snap(rt.snapTo)),
                (B = rt.duration || { min: 0.1, max: 2 }),
                (B = gr(B) ? Mi(B.min, B.max) : Mi(B, B)),
                (L = wi
                  .delayedCall(rt.delay || F / 2 || 0.1, function () {
                    if (Math.abs(xt.getVelocity()) < 10 && !Ii && St !== Ct()) {
                      var t = n && !dt ? n.totalProgress() : xt.progress,
                        e = ((t - O) / (Ji() - Fi)) * 1e3 || 0,
                        r = wi.utils.clamp(
                          -xt.progress,
                          1 - xt.progress,
                          (Dr(e / 2) * e) / 0.185
                        ),
                        s = xt.progress + (!1 === rt.inertia ? 0 : r),
                        a = Mi(0, 1, o(s, xt)),
                        c = Ct(),
                        d = Math.round(l + a * m),
                        p = rt,
                        f = p.onStart,
                        h = p.onInterrupt,
                        v = p.onComplete,
                        g = i.tween;
                      if (c <= u && c >= l && d !== c) {
                        if (g && !g._initted && g.data <= Dr(d - c)) return;
                        !1 === rt.inertia && (r = a - xt.progress),
                          i(
                            d,
                            {
                              duration: B(
                                Dr(
                                  (0.185 * Math.max(Dr(s - t), Dr(a - t))) /
                                    e /
                                    0.05 || 0
                                )
                              ),
                              ease: rt.ease || "power3",
                              data: Dr(d - c),
                              onInterrupt: function () {
                                return L.restart(!0) && h && h(xt);
                              },
                              onComplete: function () {
                                (St = Ct()),
                                  (k = O =
                                    n && !dt ? n.totalProgress() : xt.progress),
                                  nt && nt(xt),
                                  v && v(xt);
                              },
                            },
                            c,
                            r * m,
                            d - c - r * m
                          ),
                          f && f(xt, i.tween);
                      }
                    } else xt.isActive && L.restart(!0);
                  })
                  .pause())),
              $ && (Vr[$] = xt),
              (Q = xt.trigger = rr(Q || K)),
              (K = !0 === K ? Q : rr(K)),
              hr(G) && (G = { targets: Q, className: G }),
              K &&
                (!1 === Z ||
                  "margin" === Z ||
                  (Z = !(!Z && "flex" === Tr(K.parentNode).display) && _r),
                (xt.pin = K),
                !1 !== e.force3D && wi.set(K, { force3D: !0 }),
                (r = wi.core.getCache(K)).spacer
                  ? (v = r.pinState)
                  : (st &&
                      ((st = rr(st)) &&
                        !st.nodeType &&
                        (st = st.current || st.nativeElement),
                      (r.spacerIsNative = !!st),
                      st && (r.spacerState = fo(st))),
                    (r.spacer = b = st || Si.createElement("div")),
                    b.classList.add("pin-spacer"),
                    $ && b.classList.add("pin-spacer-" + $),
                    (r.pinState = v = fo(K))),
                (xt.spacer = b = r.spacer),
                (A = Tr(K)),
                (C = A[Z + ct.os2]),
                (w = wi.getProperty(K)),
                (D = wi.quickSetter(K, ct.a, Sr)),
                uo(K, b, A),
                (y = fo(K))),
              yt &&
                ((h = gr(yt) ? Pr(yt, Ir) : Ir),
                (p = Nr("scroller-start", $, pt, ct, h, 0)),
                (f = Nr("scroller-end", $, pt, ct, h, 0, p)),
                (x = p["offset" + ct.op.d2]),
                (c = Nr("start", $, pt, ct, h, x, 0, at)),
                (d = Nr("end", $, pt, ct, h, x, 0, at)),
                at && (z = wi.quickSetter([c, d], ct.a, Sr)),
                mt ||
                  (Ki.length && !0 === ur(pt, "fixedMarkers")) ||
                  ((W = Tr((q = ht ? Ei : pt)).position),
                  (q.style.position =
                    "absolute" === W || "fixed" === W ? W : "relative"),
                  wi.set([p, f], { force3D: !0 }),
                  (T = wi.quickSetter(p, ct.a, Sr)),
                  (P = wi.quickSetter(f, ct.a, Sr)))),
              at)
            ) {
              var Et = at.vars.onUpdate,
                Tt = at.vars.onUpdateParams;
              at.eventCallback("onUpdate", function () {
                xt.update(0, 0, 1), Et && Et.apply(Tt || []);
              });
            }
            (xt.previous = function () {
              return Wr[Wr.indexOf(xt) - 1];
            }),
              (xt.next = function () {
                return Wr[Wr.indexOf(xt) + 1];
              }),
              (xt.revert = function (t) {
                var e = !1 !== t || !xt.enabled,
                  i = Li;
                e !== xt.isReverted &&
                  (e &&
                    (xt.scroll.rec || (xt.scroll.rec = Ct()),
                    (j = Math.max(Ct(), xt.scroll.rec || 0)),
                    (I = xt.progress),
                    (R = n && n.progress())),
                  c &&
                    [c, d, p, f].forEach(function (t) {
                      return (t.style.display = e ? "none" : "block");
                    }),
                  e && (Li = 1),
                  xt.update(e),
                  (Li = i),
                  K &&
                    (e
                      ? (function (t, e, n) {
                          po(n);
                          var i = t._gsap;
                          if (i.spacerIsNative) po(i.spacerState);
                          else if (t.parentNode === e) {
                            var r = e.parentNode;
                            r && (r.insertBefore(t, e), r.removeChild(e));
                          }
                        })(K, b, v)
                      : (!ot || !xt.isActive) && uo(K, b, Tr(K), E)),
                  (xt.isReverted = e));
              }),
              (xt.refresh = function (i, r) {
                if ((!Li && xt.enabled) || r)
                  if (K && i && er) Br(t, "scrollEnd", Kr);
                  else {
                    (Li = 1),
                      M && M.pause(),
                      J && n && n.progress(0).invalidate(),
                      xt.isReverted || xt.revert();
                    for (
                      var o,
                        h,
                        x,
                        D,
                        C,
                        T,
                        P,
                        A,
                        k,
                        O,
                        F = Dt(),
                        B = _t(),
                        L = at ? at.duration() : pr(pt, ct),
                        z = 0,
                        N = 0,
                        q = e.end,
                        W = e.endTrigger || Q,
                        V =
                          e.start ||
                          (0 !== e.start && Q ? (K ? "0 0" : "0 100%") : 0),
                        H = e.pinnedContainer && rr(e.pinnedContainer),
                        G = (Q && Math.max(0, Wr.indexOf(xt))) || 0,
                        $ = G;
                      $--;

                    )
                      (T = Wr[$]).end || T.refresh(0, 1) || (Li = 1),
                        !(P = T.pin) ||
                          (P !== Q && P !== K) ||
                          T.isReverted ||
                          (O || (O = []), O.unshift(T), T.revert());
                    for (
                      mr(V) && (V = V(xt)),
                        l =
                          mo(V, Q, F, ct, Ct(), c, p, xt, B, bt, mt, L, at) ||
                          (K ? -0.001 : 0),
                        mr(q) && (q = q(xt)),
                        hr(q) &&
                          !q.indexOf("+=") &&
                          (~q.indexOf(" ")
                            ? (q = (hr(V) ? V.split(" ")[0] : "") + q)
                            : ((z = zr(q.substr(2), F)),
                              (q = hr(V) ? V : l + z),
                              (W = Q))),
                        u =
                          Math.max(
                            l,
                            mo(
                              q || (W ? "100% 0" : L),
                              W,
                              F,
                              ct,
                              Ct() + z,
                              d,
                              f,
                              xt,
                              B,
                              bt,
                              mt,
                              L,
                              at
                            )
                          ) || -0.001,
                        m = u - l || ((l -= 0.01) && 0.001),
                        z = 0,
                        $ = G;
                      $--;

                    )
                      (P = (T = Wr[$]).pin) &&
                        T.start - T._pinPush < l &&
                        !at &&
                        ((o = T.end - T.start),
                        (P === Q || P === H) && !vr(V) && (z += o),
                        P === K && (N += o));
                    if (
                      ((l += z),
                      (u += z),
                      (xt._pinPush = N),
                      c &&
                        z &&
                        (((o = {})[ct.a] = "+=" + z),
                        H && (o[ct.p] = "-=" + Ct()),
                        wi.set([c, d], o)),
                      K)
                    )
                      (o = Tr(K)),
                        (D = ct === Er),
                        (x = Ct()),
                        (_ = parseFloat(w(ct.a)) + N),
                        !L &&
                          u > 1 &&
                          ((ht ? Ei : pt).style["overflow-" + ct.a] = "scroll"),
                        uo(K, b, o),
                        (y = fo(K)),
                        (h = Ar(K, !0)),
                        (A = mt && cr(pt, D ? Cr : Er)()),
                        Z &&
                          (((E = [Z + ct.os2, m + N + Sr]).t = b),
                          ($ = Z === _r ? kr(K, ct) + m + N : 0) &&
                            E.push(ct.d, $ + Sr),
                          po(E),
                          mt && Ct(j)),
                        mt &&
                          (((C = {
                            top: h.top + (D ? x - l : A) + Sr,
                            left: h.left + (D ? A : x - l) + Sr,
                            boxSizing: "border-box",
                            position: "fixed",
                          }).width = C.maxWidth =
                            Math.ceil(h.width) + Sr),
                          (C.height = C.maxHeight = Math.ceil(h.height) + Sr),
                          (C.margin =
                            C.marginTop =
                            C.marginRight =
                            C.marginBottom =
                            C.marginLeft =
                              "0"),
                          (C[_r] = o[_r]),
                          (C[_r + "Top"] = o[_r + "Top"]),
                          (C[_r + "Right"] = o[_r + "Right"]),
                          (C[_r + "Bottom"] = o[_r + "Bottom"]),
                          (C[_r + "Left"] = o[_r + "Left"]),
                          (g = (function (t, e, n) {
                            for (
                              var i, r = [], o = t.length, s = n ? 8 : 0;
                              s < o;
                              s += 2
                            )
                              (i = t[s]), r.push(i, i in e ? e[i] : t[s + 1]);
                            return (r.t = t.t), r;
                          })(v, C, ot))),
                        n
                          ? ((k = n._initted),
                            Vi(1),
                            n.render(n.duration(), !0, !0),
                            (S = w(ct.a) - _ + m + N),
                            m !== S && g.splice(g.length - 2, 2),
                            n.render(0, !0, !0),
                            k || n.invalidate(),
                            Vi(0))
                          : (S = m);
                    else if (Q && Ct() && !at)
                      for (h = Q.parentNode; h && h !== Ei; )
                        h._pinOffset &&
                          ((l -= h._pinOffset), (u -= h._pinOffset)),
                          (h = h.parentNode);
                    O &&
                      O.forEach(function (t) {
                        return t.revert(!1);
                      }),
                      (xt.start = l),
                      (xt.end = u),
                      (s = a = Ct()),
                      at || (s < j && Ct(j), (xt.scroll.rec = 0)),
                      xt.revert(!1),
                      (Li = 0),
                      n &&
                        dt &&
                        n._initted &&
                        n.progress() !== R &&
                        n.progress(R, !0).render(n.time(), !0, !0),
                      I !== xt.progress &&
                        (n && !dt && n.totalProgress(I, !0),
                        (xt.progress = I),
                        xt.update(0, 0, 1)),
                      K && Z && (b._pinOffset = Math.round(xt.progress * S)),
                      Y && Y(xt);
                  }
              }),
              (xt.getVelocity = function () {
                return ((Ct() - a) / (Ji() - Fi)) * 1e3 || 0;
              }),
              (xt.endAnimation = function () {
                xr(xt.callbackAnimation),
                  n &&
                    (M
                      ? M.progress(1)
                      : n.paused()
                      ? dt || xr(n, xt.direction < 0, 1)
                      : xr(n, n.reversed()));
              }),
              (xt.getTrailing = function (t) {
                var e = Wr.indexOf(xt),
                  n =
                    xt.direction > 0
                      ? Wr.slice(0, e).reverse()
                      : Wr.slice(e + 1);
                return hr(t)
                  ? n.filter(function (e) {
                      return e.vars.preventOverlaps === t;
                    })
                  : n;
              }),
              (xt.update = function (t, e, r) {
                if (!at || r || t) {
                  var o,
                    c,
                    d,
                    f,
                    h,
                    v,
                    x,
                    w = xt.scroll(),
                    E = t ? 0 : (w - l) / m,
                    A = E < 0 ? 0 : E > 1 ? 1 : E || 0,
                    F = xt.progress;
                  if (
                    (e &&
                      ((a = s),
                      (s = at ? Ct() : w),
                      rt && ((O = k), (k = n && !dt ? n.totalProgress() : A))),
                    tt &&
                      !A &&
                      K &&
                      !Li &&
                      !Qi &&
                      er &&
                      l < w + ((w - a) / (Ji() - Fi)) * tt &&
                      (A = 1e-4),
                    A !== F && xt.enabled)
                  ) {
                    if (
                      ((f =
                        (h =
                          (o = xt.isActive = !!A && A < 1) !==
                          (!!F && F < 1)) || !!A != !!F),
                      (xt.direction = A > F ? 1 : -1),
                      (xt.progress = A),
                      f &&
                        !Li &&
                        ((c = A && !F ? 0 : 1 === A ? 1 : 1 === F ? 2 : 3),
                        dt &&
                          ((d =
                            (!h && "none" !== gt[c + 1] && gt[c + 1]) || gt[c]),
                          (x =
                            n &&
                            ("complete" === d || "reset" === d || d in n)))),
                      ut &&
                        h &&
                        (x || U || !n) &&
                        (mr(ut)
                          ? ut(xt)
                          : xt.getTrailing(ut).forEach(function (t) {
                              return t.endAnimation();
                            })),
                      dt ||
                        (!M || Li || Qi
                          ? n && n.totalProgress(A, !!Li)
                          : ((M.vars.totalProgress = A),
                            M.invalidate().restart())),
                      K)
                    )
                      if ((t && Z && (b.style[Z + ct.os2] = C), mt)) {
                        if (f) {
                          if (
                            ((v =
                              !t && A > F && u + 1 > w && w + 1 >= pr(pt, ct)),
                            ot)
                          )
                            if (t || (!o && !v)) go(K, b);
                            else {
                              var B = Ar(K, !0),
                                I = w - l;
                              go(
                                K,
                                Ei,
                                B.top + (ct === Er ? I : 0) + Sr,
                                B.left + (ct === Er ? 0 : I) + Sr
                              );
                            }
                          po(o || v ? g : y),
                            (S !== m && A < 1 && o) ||
                              D(_ + (1 !== A || v ? 0 : S));
                        }
                      } else D(_ + S * A);
                    rt && !i.tween && !Li && !Qi && L.restart(!0),
                      G &&
                        (h || (it && A && (A < 1 || !Gi))) &&
                        Oi(G.targets).forEach(function (t) {
                          return t.classList[o || it ? "add" : "remove"](
                            G.className
                          );
                        }),
                      H && !dt && !t && H(xt),
                      f && !Li
                        ? (dt &&
                            (x &&
                              ("complete" === d
                                ? n.pause().totalProgress(1)
                                : "reset" === d
                                ? n.restart(!0).pause()
                                : "restart" === d
                                ? n.restart(!0)
                                : n[d]()),
                            H && H(xt)),
                          (!h && Gi) ||
                            (X && h && wr(xt, X),
                            vt[c] && wr(xt, vt[c]),
                            it && (1 === A ? xt.kill(!1, 1) : (vt[c] = 0)),
                            h || (vt[(c = 1 === A ? 1 : 3)] && wr(xt, vt[c]))),
                          lt &&
                            !o &&
                            Math.abs(xt.getVelocity()) > (vr(lt) ? lt : 2500) &&
                            (xr(xt.callbackAnimation),
                            M ? M.progress(1) : xr(n, !A, 1)))
                        : dt && H && !Li && H(xt);
                  }
                  if (P) {
                    var j = at
                      ? (w / at.duration()) * (at._caScrollDist || 0)
                      : w;
                    T(j + (p._isFlipped ? 1 : 0)), P(j);
                  }
                  z && z((-w / at.duration()) * (at._caScrollDist || 0));
                }
              }),
              (xt.enable = function (e, n) {
                xt.enabled ||
                  ((xt.enabled = !0),
                  Br(pt, "resize", $r),
                  Br(pt, "scroll", Gr),
                  wt && Br(t, "refreshInit", wt),
                  !1 !== e && ((xt.progress = I = 0), (s = a = St = Ct())),
                  !1 !== n && xt.refresh());
              }),
              (xt.getTween = function (t) {
                return t && i ? i.tween : M;
              }),
              (xt.disable = function (e, n) {
                if (
                  xt.enabled &&
                  (!1 !== e && xt.revert(),
                  (xt.enabled = xt.isActive = !1),
                  n || (M && M.pause()),
                  (j = 0),
                  r && (r.uncache = 1),
                  wt && Lr(t, "refreshInit", wt),
                  L && (L.pause(), i.tween && i.tween.kill() && (i.tween = 0)),
                  !ht)
                ) {
                  for (var o = Wr.length; o--; )
                    if (Wr[o].scroller === pt && Wr[o] !== xt) return;
                  Lr(pt, "resize", $r), Lr(pt, "scroll", Gr);
                }
              }),
              (xt.kill = function (t, e) {
                xt.disable(t, e), M && M.kill(), $ && delete Vr[$];
                var i = Wr.indexOf(xt);
                Wr.splice(i, 1),
                  i === Ri && oo > 0 && Ri--,
                  (i = 0),
                  Wr.forEach(function (t) {
                    return t.scroller === xt.scroller && (i = 1);
                  }),
                  i || (xt.scroll.rec = 0),
                  n &&
                    ((n.scrollTrigger = null),
                    t && n.render(-1),
                    e || n.kill()),
                  c &&
                    [c, d, p, f].forEach(function (t) {
                      return t.parentNode && t.parentNode.removeChild(t);
                    }),
                  K &&
                    (r && (r.uncache = 1),
                    (i = 0),
                    Wr.forEach(function (t) {
                      return t.pin === K && i++;
                    }),
                    i || (r.spacer = 0));
              }),
              xt.enable(!1, !1),
              n && n.add && !m
                ? wi.delayedCall(0.01, function () {
                    return l || u || xt.refresh();
                  }) &&
                  (m = 0.01) &&
                  (l = u = 0)
                : xt.refresh();
          } else this.update = this.refresh = this.kill = ir;
        }),
        (t.register = function (e) {
          if (
            !Di &&
            ((wi = e || ar()),
            sr() &&
              window.document &&
              ((_i = window),
              (Si = document),
              (Ci = Si.documentElement),
              (Ei = Si.body)),
            wi &&
              ((Oi = wi.utils.toArray),
              (Mi = wi.utils.clamp),
              (Vi = wi.core.suppressOverwrites || ir),
              wi.core.globals("ScrollTrigger", t),
              Ei))
          ) {
            (Ai =
              _i.requestAnimationFrame ||
              function (t) {
                return setTimeout(t, 16);
              }),
              Br(_i, "wheel", Gr),
              (Ti = [_i, Si, Ci, Ei]),
              Br(Si, "scroll", Gr);
            var n,
              i = Ei.style,
              r = i.borderTopStyle;
            (i.borderTopStyle = "solid"),
              (n = Ar(Ei)),
              (Er.m = Math.round(n.top + Er.sc()) || 0),
              (Cr.m = Math.round(n.left + Cr.sc()) || 0),
              r ? (i.borderTopStyle = r) : i.removeProperty("border-top-style"),
              (Bi = setInterval(Hr, 200)),
              wi.delayedCall(0.5, function () {
                return (Qi = 0);
              }),
              Br(Si, "touchcancel", ir),
              Br(Ei, "touchstart", ir),
              Fr(Br, Si, "pointerdown,touchstart,mousedown", function () {
                return (Ii = 1);
              }),
              Fr(Br, Si, "pointerup,touchend,mouseup", function () {
                return (Ii = 0);
              }),
              (ji = wi.utils.checkPrefix("transform")),
              lo.push(ji),
              (Di = Ji()),
              (Pi = wi.delayedCall(0.2, io).pause()),
              (qi = [
                Si,
                "visibilitychange",
                function () {
                  var t = _i.innerWidth,
                    e = _i.innerHeight;
                  Si.hidden
                    ? ((zi = t), (Ni = e))
                    : (zi === t && Ni === e) || $r();
                },
                Si,
                "DOMContentLoaded",
                io,
                _i,
                "load",
                function () {
                  return er || io();
                },
                _i,
                "resize",
                $r,
              ]),
              fr(Br);
          }
          return Di;
        }),
        (t.defaults = function (t) {
          for (var e in t) jr[e] = t[e];
        }),
        (t.kill = function () {
          (nr = 0),
            Wr.slice(0).forEach(function (t) {
              return t.kill(1);
            });
        }),
        (t.config = function (t) {
          "limitCallbacks" in t && (Gi = !!t.limitCallbacks);
          var e = t.syncInterval;
          (e && clearInterval(Bi)) || ((Bi = e) && setInterval(Hr, e)),
            "autoRefreshEvents" in t &&
              (fr(Lr) || fr(Br, t.autoRefreshEvents || "none"),
              (Hi = -1 === (t.autoRefreshEvents + "").indexOf("resize")));
        }),
        (t.scrollerProxy = function (t, e) {
          var n = rr(t),
            i = Zi.indexOf(n),
            r = lr(n);
          ~i && Zi.splice(i, r ? 6 : 2),
            r ? Ki.unshift(_i, e, Ei, e, Ci, e) : Ki.unshift(n, e);
        }),
        (t.matchMedia = function (t) {
          var e, n, i, r, o;
          for (n in t)
            (i = Ur.indexOf(n)),
              (r = t[n]),
              ($i = n),
              "all" === n
                ? r()
                : (e = _i.matchMedia(n)) &&
                  (e.matches && (o = r()),
                  ~i
                    ? ((Ur[i + 1] = br(Ur[i + 1], r)),
                      (Ur[i + 2] = br(Ur[i + 2], o)))
                    : ((i = Ur.length),
                      Ur.push(n, r, o),
                      e.addListener
                        ? e.addListener(Qr)
                        : e.addEventListener("change", Qr)),
                  (Ur[i + 3] = e.matches)),
              ($i = 0);
          return Ur;
        }),
        (t.clearMatchMedia = function (t) {
          t || (Ur.length = 0), (t = Ur.indexOf(t)) >= 0 && Ur.splice(t, 4);
        }),
        (t.isInViewport = function (t, e, n) {
          var i = (hr(t) ? rr(t) : t).getBoundingClientRect(),
            r = i[n ? "width" : "height"] * e || 0;
          return n
            ? i.right - r > 0 && i.left + r < _i.innerWidth
            : i.bottom - r > 0 && i.top + r < _i.innerHeight;
        }),
        (t.positionInViewport = function (t, e, n) {
          hr(t) && (t = rr(t));
          var i = t.getBoundingClientRect(),
            r = i[n ? "width" : "height"],
            o =
              null == e
                ? r / 2
                : e in Rr
                ? Rr[e] * r
                : ~e.indexOf("%")
                ? (parseFloat(e) * r) / 100
                : parseFloat(e) || 0;
          return n
            ? (i.left + o) / _i.innerWidth
            : (i.top + o) / _i.innerHeight;
        }),
        t
      );
    })();
    function xo(t, e) {
      return (xo =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    (bo.version = "3.8.0"),
      (bo.saveStyles = function (t) {
        return t
          ? Oi(t).forEach(function (t) {
              if (t && t.style) {
                var e = Jr.indexOf(t);
                e >= 0 && Jr.splice(e, 5),
                  Jr.push(
                    t,
                    t.style.cssText,
                    t.getBBox && t.getAttribute("transform"),
                    wi.core.getCache(t),
                    $i
                  );
              }
            })
          : Jr;
      }),
      (bo.revert = function (t, e) {
        return eo(!t, e);
      }),
      (bo.create = function (t, e) {
        return new bo(t, e);
      }),
      (bo.refresh = function (t) {
        return t ? $r() : (Di || bo.register()) && io(!0);
      }),
      (bo.update = so),
      (bo.clearScrollMemory = no),
      (bo.maxScroll = function (t, e) {
        return pr(t, e ? Cr : Er);
      }),
      (bo.getScrollFunc = function (t, e) {
        return cr(rr(t), e ? Cr : Er);
      }),
      (bo.getById = function (t) {
        return Vr[t];
      }),
      (bo.getAll = function () {
        return Wr.slice(0);
      }),
      (bo.isScrolling = function () {
        return !!er;
      }),
      (bo.snapDirectional = Mr),
      (bo.addEventListener = function (t, e) {
        var n = Xr[t] || (Xr[t] = []);
        ~n.indexOf(e) || n.push(e);
      }),
      (bo.removeEventListener = function (t, e) {
        var n = Xr[t],
          i = n && n.indexOf(e);
        i >= 0 && n.splice(i, 1);
      }),
      (bo.batch = function (t, e) {
        var n,
          i = [],
          r = {},
          o = e.interval || 0.016,
          s = e.batchMax || 1e9,
          a = function (t, e) {
            var n = [],
              i = [],
              r = wi
                .delayedCall(o, function () {
                  e(n, i), (n = []), (i = []);
                })
                .pause();
            return function (t) {
              n.length || r.restart(!0),
                n.push(t.trigger),
                i.push(t),
                s <= n.length && r.progress(1);
            };
          };
        for (n in e)
          r[n] =
            "on" === n.substr(0, 2) && mr(e[n]) && "onRefreshInit" !== n
              ? a(0, e[n])
              : e[n];
        return (
          mr(s) &&
            ((s = s()),
            Br(bo, "refresh", function () {
              return (s = e.batchMax());
            })),
          Oi(t).forEach(function (t) {
            var e = {};
            for (n in r) e[n] = r[n];
            (e.trigger = t), i.push(bo.create(e));
          }),
          i
        );
      }),
      (bo.sort = function (t) {
        return Wr.sort(
          t ||
            function (t, e) {
              return (
                -1e6 * (t.vars.refreshPriority || 0) +
                t.start -
                (e.start + -1e6 * (e.vars.refreshPriority || 0))
              );
            }
        );
      }),
      ar() && wi.registerPlugin(bo);
    Ui.registerPlugin(bo);
    var wo = (function (t) {
        var e, n;
        function i() {
          var e;
          return (
            (e = t.apply(this, arguments) || this).detectBrowser(),
            e.bindScrolling(),
            e.ensureWebmSupport(),
            e
          );
        }
        (n = t),
          ((e = i).prototype = Object.create(n.prototype)),
          (e.prototype.constructor = e),
          xo(e, n);
        var r = i.prototype;
        return (
          (r.detectBrowser = function () {
            (this.browser = Object(l.a)()),
              (this.mobile = this.app.mobile =
                this.browser.mobile || !!this.browser.os.match(/android/i)),
              document.documentElement.classList.remove("no-js"),
              document.documentElement.classList.add(this.browser.name),
              document.documentElement.classList.add(
                this.mobile ? "mobile" : "desktop"
              );
          }),
          (r.bindScrolling = function () {
            var t = this;
            window.addEventListener("scroll", function () {
              t.app.trigger(
                "scrolling",
                window.pageYOffset,
                window.pageXOffset
              );
            });
          }),
          (r.scrollEnable = function () {
            var t;
            document.documentElement.classList.remove("no-scroll"),
              null != (t = this.scrollProxy) &&
                t.enable &&
                this.scrollProxy.enable();
          }),
          (r.scrollDisable = function () {
            var t;
            document.documentElement.classList.add("no-scroll"),
              null != (t = this.scrollProxy) &&
                t.enable &&
                this.scrollProxy.disable();
          }),
          (r.scrollTop = function () {
            var t;
            return null != (t = this.scrollProxy) && t.top
              ? this.scrollProxy.top()
              : window.pageYOffset;
          }),
          (r.scrollLeft = function () {
            var t;
            return null != (t = this.scrollProxy) && t.left
              ? this.scrollProxy.left()
              : window.pageXOffset;
          }),
          (r.scrollHeight = function () {
            var t;
            return null != (t = this.scrollProxy) && t.height
              ? this.scrollProxy.height()
              : document.documentElement.scrollHeight;
          }),
          (r.scrollWidth = function () {
            var t;
            return null != (t = this.scrollProxy) && t.width
              ? this.scrollProxy.width()
              : document.documentElement.scrollWidth;
          }),
          (r.scrollTo = function (t, e, n) {
            var i;
            if (
              (void 0 === e && (e = 0),
              void 0 === n && (n = {}),
              (n = Object.assign(
                {},
                { offsetY: 0, offsetX: 0, duration: 0.5, callback: null },
                n
              )),
              "number" != typeof t)
            ) {
              var r = this.app.query(t);
              if (!r) return !1;
              (t = r.offsetTop), (e = r.offsetLeft);
            }
            (t += n.offsetY),
              (e += n.offsetX),
              null != (i = this.scrollProxy) && i.to
                ? this.scrollProxy.to(t, e, n)
                : window.scrollTo(e, t);
          }),
          (r.ensureWebmSupport = function () {
            if ("safari" !== this.browser.name) return !1;
            document.body
              .querySelectorAll('source[type="video/webm"]')
              .forEach(function (t) {
                var e = t.parentNode;
                t.remove(), e.load && e.load();
              });
          }),
          (r.loadVideos = function () {
            return new Promise(function (t, e) {
              return (
                document.body.querySelectorAll("video").forEach(function (t) {
                  return t.load();
                }),
                t()
              );
            });
          }),
          (r.loadLazyImages = function () {
            return new Promise(function (t, e) {
              return (
                document.body
                  .querySelectorAll('img[loading="lazy"]')
                  .forEach(function (t) {
                    return t.setAttribute("loading", "eager");
                  }),
                t()
              );
            });
          }),
          (r.goToHash = function () {
            return new Promise(
              function (t, e) {
                if (!window.location.hash) return t(!1);
                var n = "#section-" + window.location.hash.substr(1),
                  i = document.querySelector(n);
                return i && this.scrollTo(i, 0, { duration: 0 }), t();
              }.bind(this)
            );
          }),
          (r.onInit = function () {
            return new Promise(
              function (t, e) {
                return this.ensureWebmSupport(), t();
              }.bind(this)
            );
          }),
          (r.onRefresh = function () {
            return new Promise(
              function (t, e) {
                return (
                  (document.documentElement.scrollTop = 0),
                  bo.refresh(!1),
                  this.ensureWebmSupport(),
                  Promise.resolve(this.loadVideos()).then(function (n) {
                    try {
                      return t();
                    } catch (t) {
                      return e(t);
                    }
                  }, e)
                );
              }.bind(this)
            );
          }),
          (r.onEnter = function () {
            return new Promise(
              function (t, e) {
                return Promise.resolve(this.goToHash()).then(function (n) {
                  try {
                    return t();
                  } catch (t) {
                    return e(t);
                  }
                }, e);
              }.bind(this)
            );
          }),
          (r.onComplete = function () {
            return new Promise(
              function (t, e) {
                var n = this;
                return (
                  setTimeout(function () {
                    return n.loadLazyImages();
                  }, 2e3),
                  t()
                );
              }.bind(this)
            );
          }),
          (r.onLeave = function () {
            return new Promise(function (t, e) {
              return (
                bo.getAll().forEach(function (t) {
                  return t.kill(!1);
                }),
                bo.clearScrollMemory(),
                t()
              );
            });
          }),
          i
        );
      })(r),
      Do = (function () {
        function t(t) {
          (this.options = Object.assign(
            {},
            {
              el: null,
              container: document.body,
              className: "my-cursor",
              innerClassName: "my-cursor-inner",
              textClassName: "my-cursor-text",
              mediaClassName: "my-cursor-media",
              mediaBoxClassName: "my-cursor-media-box",
              iconSvgClassName: "my-svgsprite",
              iconSvgNamePrefix: "-",
              iconSvgSrc: "",
              dataAttr: "cursor",
              hiddenState: "-hidden",
              textState: "-text",
              iconState: "-icon",
              activeState: "-active",
              mediaState: "-media",
              stateDetection: { "-pointer": "a,button", "-hidden": "iframe" },
              visible: !0,
              speed: 0.55,
              ease: "expo.out",
              overwrite: !0,
              skewing: 0,
              skewingText: 2,
              skewingIcon: 2,
              skewingMedia: 2,
              skewingDelta: 0.001,
              skewingDeltaMax: 0.15,
              stickDelta: 0.15,
              showTimeout: 20,
              hideOnLeave: !0,
              hideTimeout: 300,
              hideMediaTimeout: 300,
              initialPos: [-window.innerWidth, -window.innerHeight],
            },
            t
          )),
            (this.el =
              "string" == typeof this.options.el
                ? document.querySelector(this.options.el)
                : this.options.el),
            (this.container =
              "string" == typeof this.options.container
                ? document.querySelector(this.options.container)
                : this.options.container),
            (this.skewing = this.options.skewing),
            (this.pos = {
              x: this.options.initialPos[0],
              y: this.options.initialPos[1],
            }),
            (this.vel = { x: 0, y: 0 }),
            (this.event = {}),
            this.init();
        }
        var e = t.prototype;
        return (
          (e.init = function () {
            this.el || this.create(),
              this.createSetter(),
              this.bind(),
              this.render(!0),
              (this.ticker = this.render.bind(this, !1)),
              Ui.ticker.add(this.ticker);
          }),
          (e.create = function () {
            (this.el = document.createElement("div")),
              (this.el.className = this.options.className),
              this.el.classList.add(this.options.hiddenState),
              (this.inner = document.createElement("div")),
              (this.inner.className = this.options.innerClassName),
              (this.text = document.createElement("div")),
              (this.text.className = this.options.textClassName),
              (this.media = document.createElement("div")),
              (this.media.className = this.options.mediaClassName),
              (this.mediaBox = document.createElement("div")),
              (this.mediaBox.className = this.options.mediaBoxClassName),
              this.media.appendChild(this.mediaBox),
              this.inner.appendChild(this.media),
              this.inner.appendChild(this.text),
              this.el.appendChild(this.inner),
              this.container.appendChild(this.el);
          }),
          (e.createSetter = function () {
            this.setter = {
              x: Ui.quickSetter(this.el, "x", "px"),
              y: Ui.quickSetter(this.el, "y", "px"),
              rotation: Ui.quickSetter(this.el, "rotation", "deg"),
              scaleX: Ui.quickSetter(this.el, "scaleX"),
              scaleY: Ui.quickSetter(this.el, "scaleY"),
              wc: Ui.quickSetter(this.el, "willChange"),
              inner: {
                rotation: Ui.quickSetter(this.inner, "rotation", "deg"),
              },
            };
          }),
          (e.bind = function () {
            var t = this;
            (this.event.mouseleave = function () {
              return t.hide();
            }),
              (this.event.mouseenter = function () {
                return t.show();
              }),
              (this.event.mousedown = function () {
                return t.addState(t.options.activeState);
              }),
              (this.event.mouseup = function () {
                return t.removeState(t.options.activeState);
              }),
              (this.event.mousemoveOnce = function () {
                return t.show();
              }),
              (this.event.mousemove = function (e) {
                Ui.to(t.pos, {
                  x: t.stick
                    ? t.stick.x - (t.stick.x - e.clientX) * t.options.stickDelta
                    : e.clientX,
                  y: t.stick
                    ? t.stick.y - (t.stick.y - e.clientY) * t.options.stickDelta
                    : e.clientY,
                  overwrite: t.options.overwrite,
                  ease: t.options.ease,
                  duration: t.visible ? t.options.speed : 0,
                  onUpdate: function () {
                    return (t.vel = {
                      x: e.clientX - t.pos.x,
                      y: e.clientY - t.pos.y,
                    });
                  },
                });
              }),
              (this.event.mouseover = function (e) {
                for (
                  var n = e.target;
                  n &&
                  n !== t.container &&
                  (!e.relatedTarget || !n.contains(e.relatedTarget));
                  n = n.parentNode
                ) {
                  for (var i in t.options.stateDetection)
                    n.matches(t.options.stateDetection[i]) && t.addState(i);
                  if (t.options.dataAttr) {
                    var r = t.getFromDataset(n);
                    r.state && t.addState(r.state),
                      r.text && t.setText(r.text),
                      r.icon && t.setIcon(r.icon),
                      r.img && t.setImg(r.img),
                      r.video && t.setVideo(r.video),
                      void 0 !== r.show && t.show(),
                      void 0 !== r.stick && t.setStick(r.stick || n);
                  }
                }
              }),
              (this.event.mouseout = function (e) {
                for (
                  var n = e.target;
                  n &&
                  n !== t.container &&
                  (!e.relatedTarget || !n.contains(e.relatedTarget));
                  n = n.parentNode
                ) {
                  for (var i in t.options.stateDetection)
                    n.matches(t.options.stateDetection[i]) && t.removeState(i);
                  if (t.options.dataAttr) {
                    var r = t.getFromDataset(n);
                    r.state && t.removeState(r.state),
                      r.text && t.removeText(),
                      r.icon && t.removeIcon(),
                      r.img && t.removeImg(),
                      r.video && t.removeVideo(),
                      void 0 !== r.show && t.hide(),
                      void 0 !== r.stick && t.removeStick();
                  }
                }
              }),
              this.options.hideOnLeave &&
                this.container.addEventListener(
                  "mouseleave",
                  this.event.mouseleave,
                  { passive: !0 }
                ),
              this.options.visible &&
                this.container.addEventListener(
                  "mouseenter",
                  this.event.mouseenter,
                  { passive: !0 }
                ),
              this.container.addEventListener(
                "mousedown",
                this.event.mousedown,
                { passive: !0 }
              ),
              this.container.addEventListener("mouseup", this.event.mouseup, {
                passive: !0,
              }),
              this.container.addEventListener(
                "mousemove",
                this.event.mousemove,
                { passive: !0 }
              ),
              this.options.visible &&
                this.container.addEventListener(
                  "mousemove",
                  this.event.mousemoveOnce,
                  { passive: !0, once: !0 }
                ),
              (this.options.stateDetection || this.options.dataAttr) &&
                (this.container.addEventListener(
                  "mouseover",
                  this.event.mouseover,
                  { passive: !0 }
                ),
                this.container.addEventListener(
                  "mouseout",
                  this.event.mouseout,
                  { passive: !0 }
                ));
          }),
          (e.render = function (t) {
            if (!0 === t || (0 !== this.vel.y && 0 !== this.vel.x)) {
              if (
                (this.setter.wc("transform"),
                this.setter.x(this.pos.x),
                this.setter.y(this.pos.y),
                this.skewing)
              ) {
                var e = Math.sqrt(
                    Math.pow(this.vel.x, 2) + Math.pow(this.vel.y, 2)
                  ),
                  n =
                    Math.min(
                      e * this.options.skewingDelta,
                      this.options.skewingDeltaMax
                    ) * this.skewing,
                  i = (180 * Math.atan2(this.vel.y, this.vel.x)) / Math.PI;
                this.setter.rotation(i),
                  this.setter.scaleX(1 + n),
                  this.setter.scaleY(1 - n),
                  this.setter.inner.rotation(-i);
              }
            } else this.setter.wc("auto");
          }),
          (e.show = function () {
            var t = this;
            clearInterval(this.visibleInt),
              this.el.classList.remove(this.options.hiddenState),
              (this.visibleInt = setTimeout(function () {
                return (t.visible = !0);
              }, this.options.showTimeout));
          }),
          (e.hide = function () {
            var t = this;
            clearInterval(this.visibleInt),
              this.el.classList.add(this.options.hiddenState),
              (this.visibleInt = setTimeout(function () {
                return (t.visible = !1);
              }, this.options.hideTimeout));
          }),
          (e.toggle = function (t) {
            void 0 === t && (t = !1),
              !this.visible || t ? this.show() : this.hide();
          }),
          (e.addState = function (t) {
            var e;
            if (t === this.options.hiddenState) return this.hide();
            (e = this.el.classList).add.apply(e, t.split(" "));
          }),
          (e.removeState = function (t) {
            var e;
            if (t === this.options.hiddenState) return this.show();
            (e = this.el.classList).remove.apply(e, t.split(" "));
          }),
          (e.toggleState = function (t, e) {
            this.el.classList.toggle("" + t, e);
          }),
          (e.setSkewing = function (t) {
            Ui.to(this, { skewing: t });
          }),
          (e.removeSkewing = function () {
            Ui.to(this, { skewing: this.options.skewing });
          }),
          (e.setStick = function (t) {
            var e = (
              "string" == typeof t ? document.querySelector(t) : t
            ).getBoundingClientRect();
            this.stick = { y: e.top + e.height / 2, x: e.left + e.height / 2 };
          }),
          (e.removeStick = function () {
            this.stick = !1;
          }),
          (e.setText = function (t) {
            (this.text.innerHTML = t),
              this.addState(this.options.textState),
              this.setSkewing(this.options.skewingText);
          }),
          (e.removeText = function () {
            this.removeState(this.options.textState), this.removeSkewing();
          }),
          (e.setIcon = function (t, e) {
            void 0 === e && (e = ""),
              (this.text.innerHTML =
                '<svg class="' +
                this.options.iconSvgClassName +
                " " +
                this.options.iconSvgNamePrefix +
                t +
                '" style="' +
                e +
                '"><use xlink:href="' +
                this.options.iconSvgSrc +
                "#" +
                t +
                '"></use></svg>'),
              this.addState(this.options.iconState),
              this.setSkewing(this.options.skewingIcon);
          }),
          (e.removeIcon = function () {
            this.removeState(this.options.iconState), this.removeSkewing();
          }),
          (e.setMedia = function (t) {
            var e = this;
            clearTimeout(this.mediaInt),
              t &&
                ((this.mediaBox.innerHTML = ""), this.mediaBox.appendChild(t)),
              (this.mediaInt = setTimeout(function () {
                return e.addState(e.options.mediaState);
              }, 20)),
              this.setSkewing(this.options.skewingMedia);
          }),
          (e.removeMedia = function () {
            var t = this;
            clearTimeout(this.mediaInt),
              this.removeState(this.options.mediaState),
              (this.mediaInt = setTimeout(function () {
                return (t.mediaBox.innerHTML = "");
              }, this.options.hideMediaTimeout)),
              this.removeSkewing();
          }),
          (e.setImg = function (t) {
            this.mediaImg || (this.mediaImg = new Image()),
              this.mediaImg.src !== t && (this.mediaImg.src = t),
              this.setMedia(this.mediaImg);
          }),
          (e.removeImg = function () {
            this.removeMedia();
          }),
          (e.setVideo = function (t) {
            this.mediaVideo ||
              ((this.mediaVideo = document.createElement("video")),
              (this.mediaVideo.muted = !0),
              (this.mediaVideo.loop = !0),
              (this.mediaVideo.autoplay = !0)),
              this.mediaVideo.src !== t &&
                ((this.mediaVideo.src = t), this.mediaVideo.load()),
              this.mediaVideo.play(),
              this.setMedia(this.mediaVideo);
          }),
          (e.removeVideo = function () {
            this.mediaVideo &&
              this.mediaVideo.readyState > 2 &&
              this.mediaVideo.pause(),
              this.removeMedia();
          }),
          (e.getFromDataset = function (t) {
            var e = t.dataset;
            return {
              state: e[this.options.dataAttr],
              show: e[this.options.dataAttr + "Show"],
              text: e[this.options.dataAttr + "Text"],
              icon: e[this.options.dataAttr + "Icon"],
              img: e[this.options.dataAttr + "Img"],
              video: e[this.options.dataAttr + "Video"],
              stick: e[this.options.dataAttr + "Stick"],
            };
          }),
          (e.destroy = function () {
            Ui.ticker.remove(this.ticker),
              this.container.removeEventListener(
                "mouseleave",
                this.event.mouseleave
              ),
              this.container.removeEventListener(
                "mouseenter",
                this.event.mouseenter
              ),
              this.container.removeEventListener(
                "mousedown",
                this.event.mousedown
              ),
              this.container.removeEventListener("mouseup", this.event.mouseup),
              this.container.removeEventListener(
                "mousemove",
                this.event.mousemove
              ),
              this.container.removeEventListener(
                "mousemove",
                this.event.mousemoveOnce
              ),
              this.container.removeEventListener(
                "mouseover",
                this.event.mouseover
              ),
              this.container.removeEventListener(
                "mouseout",
                this.event.mouseout
              ),
              this.el &&
                (this.container.removeChild(this.el),
                (this.el = null),
                (this.mediaImg = null),
                (this.mediaVideo = null));
          }),
          t
        );
      })();
    function _o(t, e) {
      return (_o =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    var So = (function (t) {
      var e, n;
      function i() {
        var e;
        return (
          ((e = t.apply(this, arguments) || this).page = e.app.get("page")),
          e.init(),
          e
        );
      }
      return (
        (n = t),
        ((e = i).prototype = Object.create(n.prototype)),
        (e.prototype.constructor = e),
        _o(e, n),
        (i.prototype.init = function () {
          if (this.page.mobile) return !1;
          this.follower = new Do({
            speed: 0.4,
            skewing: 4,
            skewingIcon: 3,
            className: "pt-cursor",
            innerClassName: "pt-cursor-inner",
            textClassName: "pt-cursor-text",
            mediaClassName: "pt-cursor-media",
            mediaBoxClassName: "pt-cursor-media-box",
            iconSvgClassName: "pt-svgsprite",
            iconSvgSrc: "/assets/img/sprites/svgsprites.svg",
          });
        }),
        i
      );
    })(r);
    function Co(t, e) {
      return (Co =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    var Eo = (function (t) {
        var e, n;
        function i() {
          return t.apply(this, arguments) || this;
        }
        (n = t),
          ((e = i).prototype = Object.create(n.prototype)),
          (e.prototype.constructor = e),
          Co(e, n);
        var r = i.prototype;
        return (
          (r.show = function () {
            this.el.classList.add("-front"),
              this.el.classList.add("-visible"),
              document.documentElement.classList.add("loader");
          }),
          (r.hide = function () {
            this.el.classList.remove("-visible"),
              document.documentElement.classList.remove("loader");
          }),
          (r.onInit = function () {
            return new Promise(function (t, e) {
              return t(
                new Promise(function (t) {
                  return setTimeout(t, 300);
                })
              );
            });
          }),
          (r.onEnter = function () {
            return new Promise(
              function (t, e) {
                return this.hide(), t();
              }.bind(this)
            );
          }),
          (r.onRefresh = function () {
            return new Promise(function (t, e) {
              return t(
                new Promise(function (t) {
                  return setTimeout(t, 350);
                })
              );
            });
          }),
          (r.onLeave = function () {
            return new Promise(
              function (t, e) {
                return (
                  this.show(),
                  t(
                    new Promise(function (t) {
                      return setTimeout(t, 300);
                    })
                  )
                );
              }.bind(this)
            );
          }),
          i
        );
      })(r),
      To = function (t, e) {
        return (To =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          })(t, e);
      };
    var Po = function () {
      return (Po =
        Object.assign ||
        function (t) {
          for (var e, n = 1, i = arguments.length; n < i; n++)
            for (var r in (e = arguments[n]))
              Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          return t;
        }).apply(this, arguments);
    };
    function Ao(t, e, n, i) {
      var r,
        o = arguments.length,
        s =
          o < 3
            ? e
            : null === i
            ? (i = Object.getOwnPropertyDescriptor(e, n))
            : i;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(t, e, n, i);
      else
        for (var a = t.length - 1; a >= 0; a--)
          (r = t[a]) &&
            (s = (o < 3 ? r(s) : o > 3 ? r(e, n, s) : r(e, n)) || s);
      return o > 3 && s && Object.defineProperty(e, n, s), s;
    }
    function ko() {
      for (var t = 0, e = 0, n = arguments.length; e < n; e++)
        t += arguments[e].length;
      var i = Array(t),
        r = 0;
      for (e = 0; e < n; e++)
        for (var o = arguments[e], s = 0, a = o.length; s < a; s++, r++)
          i[r] = o[s];
      return i;
    }
    n(85), n(110), n(112), n(119), n(124);
    var Oo = function (t, e, n) {
        return (
          t == t &&
            (void 0 !== n && (t = t <= n ? t : n),
            void 0 !== e && (t = t >= e ? t : e)),
          t
        );
      },
      Mo = /\s/;
    var Fo = function (t) {
        for (var e = t.length; e-- && Mo.test(t.charAt(e)); );
        return e;
      },
      Bo = /^\s+/;
    var Lo = function (t) {
      return t ? t.slice(0, Fo(t) + 1).replace(Bo, "") : t;
    };
    var Io = function (t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e);
      },
      jo = n(83),
      Ro = "object" == typeof self && self && self.Object === Object && self,
      zo = jo.a || Ro || Function("return this")(),
      No = zo.Symbol,
      qo = Object.prototype,
      Wo = qo.hasOwnProperty,
      Vo = qo.toString,
      Ho = No ? No.toStringTag : void 0;
    var Go = function (t) {
        var e = Wo.call(t, Ho),
          n = t[Ho];
        try {
          t[Ho] = void 0;
          var i = !0;
        } catch (t) {}
        var r = Vo.call(t);
        return i && (e ? (t[Ho] = n) : delete t[Ho]), r;
      },
      $o = Object.prototype.toString;
    var Xo = function (t) {
        return $o.call(t);
      },
      Yo = No ? No.toStringTag : void 0;
    var Uo = function (t) {
      return null == t
        ? void 0 === t
          ? "[object Undefined]"
          : "[object Null]"
        : Yo && Yo in Object(t)
        ? Go(t)
        : Xo(t);
    };
    var Qo = function (t) {
      return null != t && "object" == typeof t;
    };
    var Ko = function (t) {
        return "symbol" == typeof t || (Qo(t) && "[object Symbol]" == Uo(t));
      },
      Zo = /^[-+]0x[0-9a-f]+$/i,
      Jo = /^0b[01]+$/i,
      ts = /^0o[0-7]+$/i,
      es = parseInt;
    var ns = function (t) {
      if ("number" == typeof t) return t;
      if (Ko(t)) return NaN;
      if (Io(t)) {
        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
        t = Io(e) ? e + "" : e;
      }
      if ("string" != typeof t) return 0 === t ? t : +t;
      t = Lo(t);
      var n = Jo.test(t);
      return n || ts.test(t)
        ? es(t.slice(2), n ? 2 : 8)
        : Zo.test(t)
        ? NaN
        : +t;
    };
    var is = function (t, e, n) {
      return (
        void 0 === n && ((n = e), (e = void 0)),
        void 0 !== n && (n = (n = ns(n)) == n ? n : 0),
        void 0 !== e && (e = (e = ns(e)) == e ? e : 0),
        Oo(ns(t), e, n)
      );
    };
    function rs(t, e) {
      return (
        void 0 === t && (t = -1 / 0),
        void 0 === e && (e = 1 / 0),
        function (n, i) {
          var r = "_" + i;
          Object.defineProperty(n, i, {
            get: function () {
              return this[r];
            },
            set: function (n) {
              Object.defineProperty(this, r, {
                value: is(n, t, e),
                enumerable: !1,
                writable: !0,
                configurable: !0,
              });
            },
            enumerable: !0,
            configurable: !0,
          });
        }
      );
    }
    function os(t, e) {
      var n = "_" + e;
      Object.defineProperty(t, e, {
        get: function () {
          return this[n];
        },
        set: function (t) {
          Object.defineProperty(this, n, {
            value: !!t,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          });
        },
        enumerable: !0,
        configurable: !0,
      });
    }
    var ss = function () {
        return zo.Date.now();
      },
      as = Math.max,
      ls = Math.min;
    var us = function (t, e, n) {
      var i,
        r,
        o,
        s,
        a,
        l,
        u = 0,
        c = !1,
        d = !1,
        p = !0;
      if ("function" != typeof t) throw new TypeError("Expected a function");
      function f(e) {
        var n = i,
          o = r;
        return (i = r = void 0), (u = e), (s = t.apply(o, n));
      }
      function h(t) {
        return (u = t), (a = setTimeout(v, e)), c ? f(t) : s;
      }
      function m(t) {
        var n = t - l;
        return void 0 === l || n >= e || n < 0 || (d && t - u >= o);
      }
      function v() {
        var t = ss();
        if (m(t)) return g(t);
        a = setTimeout(
          v,
          (function (t) {
            var n = e - (t - l);
            return d ? ls(n, o - (t - u)) : n;
          })(t)
        );
      }
      function g(t) {
        return (a = void 0), p && i ? f(t) : ((i = r = void 0), s);
      }
      function y() {
        var t = ss(),
          n = m(t);
        if (((i = arguments), (r = this), (l = t), n)) {
          if (void 0 === a) return h(l);
          if (d) return clearTimeout(a), (a = setTimeout(v, e)), f(l);
        }
        return void 0 === a && (a = setTimeout(v, e)), s;
      }
      return (
        (e = ns(e) || 0),
        Io(n) &&
          ((c = !!n.leading),
          (o = (d = "maxWait" in n) ? as(ns(n.maxWait) || 0, e) : o),
          (p = "trailing" in n ? !!n.trailing : p)),
        (y.cancel = function () {
          void 0 !== a && clearTimeout(a), (u = 0), (i = l = r = a = void 0);
        }),
        (y.flush = function () {
          return void 0 === a ? s : g(ss());
        }),
        y
      );
    };
    function cs() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      return function (e, n, i) {
        var r = i.value;
        return {
          get: function () {
            return (
              this.hasOwnProperty(n) ||
                Object.defineProperty(this, n, {
                  value: us.apply(void 0, ko([r], t)),
                }),
              this[n]
            );
          },
        };
      };
    }
    var ds,
      ps = (function () {
        function t(t) {
          var e = this;
          void 0 === t && (t = {}),
            (this.damping = 0.1),
            (this.thumbMinSize = 20),
            (this.renderByPixels = !0),
            (this.alwaysShowTracks = !1),
            (this.continuousScrolling = !0),
            (this.delegateTo = null),
            (this.plugins = {}),
            Object.keys(t).forEach(function (n) {
              e[n] = t[n];
            });
        }
        return (
          Object.defineProperty(t.prototype, "wheelEventTarget", {
            get: function () {
              return this.delegateTo;
            },
            set: function (t) {
              console.warn(
                "[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead."
              ),
                (this.delegateTo = t);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Ao([rs(0, 1)], t.prototype, "damping", void 0),
          Ao([rs(0, 1 / 0)], t.prototype, "thumbMinSize", void 0),
          Ao([os], t.prototype, "renderByPixels", void 0),
          Ao([os], t.prototype, "alwaysShowTracks", void 0),
          Ao([os], t.prototype, "continuousScrolling", void 0),
          t
        );
      })(),
      fs = new WeakMap();
    function hs() {
      if (void 0 !== ds) return ds;
      var t = !1;
      try {
        var e = function () {},
          n = Object.defineProperty({}, "passive", {
            get: function () {
              t = !0;
            },
          });
        window.addEventListener("testPassive", e, n),
          window.removeEventListener("testPassive", e, n);
      } catch (t) {}
      return (ds = !!t && { passive: !1 });
    }
    function ms(t) {
      var e = fs.get(t) || [];
      return (
        fs.set(t, e),
        function (t, n, i) {
          function r(t) {
            t.defaultPrevented || i(t);
          }
          n.split(/\s+/g).forEach(function (n) {
            e.push({ elem: t, eventName: n, handler: r }),
              t.addEventListener(n, r, hs());
          });
        }
      );
    }
    function vs(t) {
      var e = (function (t) {
        return t.touches ? t.touches[t.touches.length - 1] : t;
      })(t);
      return { x: e.clientX, y: e.clientY };
    }
    function gs(t, e) {
      return (
        void 0 === e && (e = []),
        e.some(function (e) {
          return t === e;
        })
      );
    }
    var ys = ["webkit", "moz", "ms", "o"],
      bs = new RegExp("^-(?!(?:" + ys.join("|") + ")-)");
    function xs(t, e) {
      (e = (function (t) {
        var e = {};
        return (
          Object.keys(t).forEach(function (n) {
            if (bs.test(n)) {
              var i = t[n];
              (n = n.replace(/^-/, "")),
                (e[n] = i),
                ys.forEach(function (t) {
                  e["-" + t + "-" + n] = i;
                });
            } else e[n] = t[n];
          }),
          e
        );
      })(e)),
        Object.keys(e).forEach(function (n) {
          var i = n.replace(/^-/, "").replace(/-([a-z])/g, function (t, e) {
            return e.toUpperCase();
          });
          t.style[i] = e[n];
        });
    }
    var ws,
      Ds = (function () {
        function t(t) {
          (this.updateTime = Date.now()),
            (this.delta = { x: 0, y: 0 }),
            (this.velocity = { x: 0, y: 0 }),
            (this.lastPosition = { x: 0, y: 0 }),
            (this.lastPosition = vs(t));
        }
        return (
          (t.prototype.update = function (t) {
            var e = this.velocity,
              n = this.updateTime,
              i = this.lastPosition,
              r = Date.now(),
              o = vs(t),
              s = { x: -(o.x - i.x), y: -(o.y - i.y) },
              a = r - n || 16,
              l = (s.x / a) * 16,
              u = (s.y / a) * 16;
            (e.x = 0.9 * l + 0.1 * e.x),
              (e.y = 0.9 * u + 0.1 * e.y),
              (this.delta = s),
              (this.updateTime = r),
              (this.lastPosition = o);
          }),
          t
        );
      })(),
      _s = (function () {
        function t() {
          this._touchList = {};
        }
        return (
          Object.defineProperty(t.prototype, "_primitiveValue", {
            get: function () {
              return { x: 0, y: 0 };
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.isActive = function () {
            return void 0 !== this._activeTouchID;
          }),
          (t.prototype.getDelta = function () {
            var t = this._getActiveTracker();
            return t ? Po({}, t.delta) : this._primitiveValue;
          }),
          (t.prototype.getVelocity = function () {
            var t = this._getActiveTracker();
            return t ? Po({}, t.velocity) : this._primitiveValue;
          }),
          (t.prototype.track = function (t) {
            var e = this,
              n = t.targetTouches;
            return (
              Array.from(n).forEach(function (t) {
                e._add(t);
              }),
              this._touchList
            );
          }),
          (t.prototype.update = function (t) {
            var e = this,
              n = t.touches,
              i = t.changedTouches;
            return (
              Array.from(n).forEach(function (t) {
                e._renew(t);
              }),
              this._setActiveID(i),
              this._touchList
            );
          }),
          (t.prototype.release = function (t) {
            var e = this;
            delete this._activeTouchID,
              Array.from(t.changedTouches).forEach(function (t) {
                e._delete(t);
              });
          }),
          (t.prototype._add = function (t) {
            if (!this._has(t)) {
              var e = new Ds(t);
              this._touchList[t.identifier] = e;
            }
          }),
          (t.prototype._renew = function (t) {
            this._has(t) && this._touchList[t.identifier].update(t);
          }),
          (t.prototype._delete = function (t) {
            delete this._touchList[t.identifier];
          }),
          (t.prototype._has = function (t) {
            return this._touchList.hasOwnProperty(t.identifier);
          }),
          (t.prototype._setActiveID = function (t) {
            this._activeTouchID = t[t.length - 1].identifier;
          }),
          (t.prototype._getActiveTracker = function () {
            return this._touchList[this._activeTouchID];
          }),
          t
        );
      })();
    !(function (t) {
      (t.X = "x"), (t.Y = "y");
    })(ws || (ws = {}));
    var Ss = (function () {
        function t(t, e) {
          void 0 === e && (e = 0),
            (this._direction = t),
            (this._minSize = e),
            (this.element = document.createElement("div")),
            (this.displaySize = 0),
            (this.realSize = 0),
            (this.offset = 0),
            (this.element.className = "scrollbar-thumb scrollbar-thumb-" + t);
        }
        return (
          (t.prototype.attachTo = function (t) {
            t.appendChild(this.element);
          }),
          (t.prototype.update = function (t, e, n) {
            (this.realSize = Math.min(e / n, 1) * e),
              (this.displaySize = Math.max(this.realSize, this._minSize)),
              (this.offset =
                (t / n) * (e + (this.realSize - this.displaySize))),
              xs(this.element, this._getStyle());
          }),
          (t.prototype._getStyle = function () {
            switch (this._direction) {
              case ws.X:
                return {
                  width: this.displaySize + "px",
                  "-transform": "translate3d(" + this.offset + "px, 0, 0)",
                };
              case ws.Y:
                return {
                  height: this.displaySize + "px",
                  "-transform": "translate3d(0, " + this.offset + "px, 0)",
                };
              default:
                return null;
            }
          }),
          t
        );
      })(),
      Cs = (function () {
        function t(t, e) {
          void 0 === e && (e = 0),
            (this.element = document.createElement("div")),
            (this._isShown = !1),
            (this.element.className = "scrollbar-track scrollbar-track-" + t),
            (this.thumb = new Ss(t, e)),
            this.thumb.attachTo(this.element);
        }
        return (
          (t.prototype.attachTo = function (t) {
            t.appendChild(this.element);
          }),
          (t.prototype.show = function () {
            this._isShown ||
              ((this._isShown = !0), this.element.classList.add("show"));
          }),
          (t.prototype.hide = function () {
            this._isShown &&
              ((this._isShown = !1), this.element.classList.remove("show"));
          }),
          (t.prototype.update = function (t, e, n) {
            xs(this.element, { display: n <= e ? "none" : "block" }),
              this.thumb.update(t, e, n);
          }),
          t
        );
      })(),
      Es = (function () {
        function t(t) {
          this._scrollbar = t;
          var e = t.options.thumbMinSize;
          (this.xAxis = new Cs(ws.X, e)),
            (this.yAxis = new Cs(ws.Y, e)),
            this.xAxis.attachTo(t.containerEl),
            this.yAxis.attachTo(t.containerEl),
            t.options.alwaysShowTracks &&
              (this.xAxis.show(), this.yAxis.show());
        }
        return (
          (t.prototype.update = function () {
            var t = this._scrollbar,
              e = t.size,
              n = t.offset;
            this.xAxis.update(n.x, e.container.width, e.content.width),
              this.yAxis.update(n.y, e.container.height, e.content.height);
          }),
          (t.prototype.autoHideOnIdle = function () {
            this._scrollbar.options.alwaysShowTracks ||
              (this.xAxis.hide(), this.yAxis.hide());
          }),
          Ao([cs(300)], t.prototype, "autoHideOnIdle", null),
          t
        );
      })();
    var Ts = new WeakMap();
    function Ps(t) {
      return Math.pow(t - 1, 3) + 1;
    }
    var As = (function () {
        function t(t, e) {
          var n = this.constructor;
          (this.scrollbar = t),
            (this.name = n.pluginName),
            (this.options = Po(Po({}, n.defaultOptions), e));
        }
        return (
          (t.prototype.onInit = function () {}),
          (t.prototype.onDestroy = function () {}),
          (t.prototype.onUpdate = function () {}),
          (t.prototype.onRender = function (t) {}),
          (t.prototype.transformDelta = function (t, e) {
            return Po({}, t);
          }),
          (t.pluginName = ""),
          (t.defaultOptions = {}),
          t
        );
      })(),
      ks = { order: new Set(), constructors: {} };
    function Os() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      t.forEach(function (t) {
        var e = t.pluginName;
        if (!e) throw new TypeError("plugin name is required");
        ks.order.add(e), (ks.constructors[e] = t);
      });
    }
    var Ms;
    function Fs(t) {
      var e = ms(t),
        n = t.containerEl;
      e(n, "keydown", function (e) {
        var i = document.activeElement;
        if (
          (i === n || n.contains(i)) &&
          !(function (t) {
            if (
              "INPUT" === t.tagName ||
              "SELECT" === t.tagName ||
              "TEXTAREA" === t.tagName ||
              t.isContentEditable
            )
              return !t.disabled;
            return !1;
          })(i)
        ) {
          var r = (function (t, e) {
            var n = t.size,
              i = t.limit,
              r = t.offset;
            switch (e) {
              case Ms.TAB:
                return (function (t) {
                  requestAnimationFrame(function () {
                    t.scrollIntoView(document.activeElement, {
                      offsetTop: t.size.container.height / 2,
                      onlyScrollIfNeeded: !0,
                    });
                  });
                })(t);
              case Ms.SPACE:
                return [0, 200];
              case Ms.PAGE_UP:
                return [0, 40 - n.container.height];
              case Ms.PAGE_DOWN:
                return [0, n.container.height - 40];
              case Ms.END:
                return [0, i.y - r.y];
              case Ms.HOME:
                return [0, -r.y];
              case Ms.LEFT:
                return [-40, 0];
              case Ms.UP:
                return [0, -40];
              case Ms.RIGHT:
                return [40, 0];
              case Ms.DOWN:
                return [0, 40];
              default:
                return null;
            }
          })(t, e.keyCode || e.which);
          if (r) {
            var o = r[0],
              s = r[1];
            t.addTransformableMomentum(o, s, e, function (n) {
              n
                ? e.preventDefault()
                : (t.containerEl.blur(),
                  t.parent && t.parent.containerEl.focus());
            });
          }
        }
      });
    }
    !(function (t) {
      (t[(t.TAB = 9)] = "TAB"),
        (t[(t.SPACE = 32)] = "SPACE"),
        (t[(t.PAGE_UP = 33)] = "PAGE_UP"),
        (t[(t.PAGE_DOWN = 34)] = "PAGE_DOWN"),
        (t[(t.END = 35)] = "END"),
        (t[(t.HOME = 36)] = "HOME"),
        (t[(t.LEFT = 37)] = "LEFT"),
        (t[(t.UP = 38)] = "UP"),
        (t[(t.RIGHT = 39)] = "RIGHT"),
        (t[(t.DOWN = 40)] = "DOWN");
    })(Ms || (Ms = {}));
    var Bs;
    function Ls(t) {
      var e,
        n,
        i,
        r,
        o,
        s = ms(t),
        a = t.containerEl,
        l = t.track,
        u = l.xAxis,
        c = l.yAxis;
      function d(e, n) {
        var i = t.size,
          r = t.limit,
          o = t.offset;
        if (e === Bs.X) {
          var s = i.container.width + (u.thumb.realSize - u.thumb.displaySize);
          return is((n / s) * i.content.width, 0, r.x) - o.x;
        }
        if (e === Bs.Y) {
          var a = i.container.height + (c.thumb.realSize - c.thumb.displaySize);
          return is((n / a) * i.content.height, 0, r.y) - o.y;
        }
        return 0;
      }
      function p(t) {
        return gs(t, [u.element, u.thumb.element])
          ? Bs.X
          : gs(t, [c.element, c.thumb.element])
          ? Bs.Y
          : void 0;
      }
      s(a, "click", function (e) {
        if (!n && gs(e.target, [u.element, c.element])) {
          var i = e.target,
            r = p(i),
            o = i.getBoundingClientRect(),
            s = vs(e);
          if (r === Bs.X) {
            var a = s.x - o.left - u.thumb.displaySize / 2;
            t.setMomentum(d(r, a), 0);
          }
          if (r === Bs.Y) {
            a = s.y - o.top - c.thumb.displaySize / 2;
            t.setMomentum(0, d(r, a));
          }
        }
      }),
        s(a, "mousedown", function (n) {
          if (gs(n.target, [u.thumb.element, c.thumb.element])) {
            e = !0;
            var s = n.target,
              l = vs(n),
              d = s.getBoundingClientRect();
            (r = p(s)),
              (i = { x: l.x - d.left, y: l.y - d.top }),
              (o = a.getBoundingClientRect()),
              xs(t.containerEl, { "-user-select": "none" });
          }
        }),
        s(window, "mousemove", function (s) {
          if (e) {
            n = !0;
            var a = vs(s);
            if (r === Bs.X) {
              var l = a.x - i.x - o.left;
              t.setMomentum(d(r, l), 0);
            }
            if (r === Bs.Y) {
              l = a.y - i.y - o.top;
              t.setMomentum(0, d(r, l));
            }
          }
        }),
        s(window, "mouseup blur", function () {
          (e = n = !1), xs(t.containerEl, { "-user-select": "" });
        });
    }
    !(function (t) {
      (t[(t.X = 0)] = "X"), (t[(t.Y = 1)] = "Y");
    })(Bs || (Bs = {}));
    function Is(t) {
      ms(t)(window, "resize", us(t.update.bind(t), 300));
    }
    function js(t) {
      var e,
        n = ms(t),
        i = t.containerEl,
        r = t.contentEl,
        o = !1;
      n(window, "mousemove", function (n) {
        o &&
          (cancelAnimationFrame(e),
          (function n(i) {
            var r = i.x,
              o = i.y;
            if (r || o) {
              var s = t.offset,
                a = t.limit;
              t.setMomentum(
                is(s.x + r, 0, a.x) - s.x,
                is(s.y + o, 0, a.y) - s.y
              ),
                (e = requestAnimationFrame(function () {
                  n({ x: r, y: o });
                }));
            }
          })(
            (function (t, e) {
              var n = t.bounding,
                i = n.top,
                r = n.right,
                o = n.bottom,
                s = n.left,
                a = vs(e),
                l = a.x,
                u = a.y,
                c = { x: 0, y: 0 };
              if (0 === l && 0 === u) return c;
              l > r - 20
                ? (c.x = l - r + 20)
                : l < s + 20 && (c.x = l - s - 20);
              u > o - 20
                ? (c.y = u - o + 20)
                : u < i + 20 && (c.y = u - i - 20);
              return (c.x *= 2), (c.y *= 2), c;
            })(t, n)
          ));
      }),
        n(r, "selectstart", function (t) {
          t.stopPropagation(), cancelAnimationFrame(e), (o = !0);
        }),
        n(window, "mouseup blur", function () {
          cancelAnimationFrame(e), (o = !1);
        }),
        n(i, "scroll", function (t) {
          t.preventDefault(), (i.scrollTop = i.scrollLeft = 0);
        });
    }
    var Rs;
    function zs(t) {
      var e,
        n = /Android/.test(navigator.userAgent) ? 3 : 2,
        i = t.options.delegateTo || t.containerEl,
        r = new _s(),
        o = ms(t),
        s = 0;
      o(i, "touchstart", function (n) {
        r.track(n),
          t.setMomentum(0, 0),
          0 === s &&
            ((e = t.options.damping), (t.options.damping = Math.max(e, 0.5))),
          s++;
      }),
        o(i, "touchmove", function (e) {
          if (!Rs || Rs === t) {
            r.update(e);
            var n = r.getDelta(),
              i = n.x,
              o = n.y;
            t.addTransformableMomentum(i, o, e, function (n) {
              n && e.cancelable && (e.preventDefault(), (Rs = t));
            });
          }
        }),
        o(i, "touchcancel touchend", function (i) {
          var o = r.getVelocity(),
            a = { x: 0, y: 0 };
          Object.keys(o).forEach(function (t) {
            var i = o[t] / e;
            a[t] = Math.abs(i) < 50 ? 0 : i * n;
          }),
            t.addTransformableMomentum(a.x, a.y, i),
            0 === --s && (t.options.damping = e),
            r.release(i),
            (Rs = null);
        });
    }
    function Ns(t) {
      ms(t)(
        t.options.delegateTo || t.containerEl,
        "onwheel" in window ||
          document.implementation.hasFeature("Events.wheel", "3.0")
          ? "wheel"
          : "mousewheel",
        function (e) {
          var n = (function (t) {
              if ("deltaX" in t) {
                var e = (function (t) {
                  return Vs[t] || Vs[0];
                })(t.deltaMode);
                return { x: (t.deltaX / qs) * e, y: (t.deltaY / qs) * e };
              }
              if ("wheelDeltaX" in t)
                return { x: t.wheelDeltaX / Ws, y: t.wheelDeltaY / Ws };
              return { x: 0, y: t.wheelDelta / Ws };
            })(e),
            i = n.x,
            r = n.y;
          t.addTransformableMomentum(i, r, e, function (t) {
            t && e.preventDefault();
          });
        }
      );
    }
    var qs = 1,
      Ws = -3,
      Vs = [1, 28, 500];
    var Hs = new Map(),
      Gs = (function () {
        function t(t, e) {
          var n = this;
          (this.offset = { x: 0, y: 0 }),
            (this.limit = { x: 1 / 0, y: 1 / 0 }),
            (this.bounding = { top: 0, right: 0, bottom: 0, left: 0 }),
            (this._plugins = []),
            (this._momentum = { x: 0, y: 0 }),
            (this._listeners = new Set()),
            (this.containerEl = t);
          var i = (this.contentEl = document.createElement("div"));
          (this.options = new ps(e)),
            t.setAttribute("data-scrollbar", "true"),
            t.setAttribute("tabindex", "-1"),
            xs(t, { overflow: "hidden", outline: "none" }),
            window.navigator.msPointerEnabled &&
              (t.style.msTouchAction = "none"),
            (i.className = "scroll-content"),
            Array.from(t.childNodes).forEach(function (t) {
              i.appendChild(t);
            }),
            t.appendChild(i),
            (this.track = new Es(this)),
            (this.size = this.getSize()),
            (this._plugins = (function (t, e) {
              return Array.from(ks.order)
                .filter(function (t) {
                  return !1 !== e[t];
                })
                .map(function (n) {
                  var i = new (0, ks.constructors[n])(t, e[n]);
                  return (e[n] = i.options), i;
                });
            })(this, this.options.plugins));
          var r = t.scrollLeft,
            o = t.scrollTop;
          (t.scrollLeft = t.scrollTop = 0),
            this.setPosition(r, o, { withoutCallbacks: !0 });
          var s = window,
            a =
              s.MutationObserver ||
              s.WebKitMutationObserver ||
              s.MozMutationObserver;
          "function" == typeof a &&
            ((this._observer = new a(function () {
              n.update();
            })),
            this._observer.observe(i, { subtree: !0, childList: !0 })),
            Hs.set(t, this),
            requestAnimationFrame(function () {
              n._init();
            });
        }
        return (
          Object.defineProperty(t.prototype, "parent", {
            get: function () {
              for (var t = this.containerEl.parentElement; t; ) {
                var e = Hs.get(t);
                if (e) return e;
                t = t.parentElement;
              }
              return null;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "scrollTop", {
            get: function () {
              return this.offset.y;
            },
            set: function (t) {
              this.setPosition(this.scrollLeft, t);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "scrollLeft", {
            get: function () {
              return this.offset.x;
            },
            set: function (t) {
              this.setPosition(t, this.scrollTop);
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.getSize = function () {
            return (
              (e = (t = this).containerEl),
              (n = t.contentEl),
              (i = getComputedStyle(e)),
              (r = [
                "paddingTop",
                "paddingBottom",
                "paddingLeft",
                "paddingRight",
              ].map(function (t) {
                return i[t] ? parseFloat(i[t]) : 0;
              })),
              (o = r[0] + r[1]),
              (s = r[2] + r[3]),
              {
                container: { width: e.clientWidth, height: e.clientHeight },
                content: {
                  width: n.offsetWidth - n.clientWidth + n.scrollWidth + s,
                  height: n.offsetHeight - n.clientHeight + n.scrollHeight + o,
                },
              }
            );
            var t, e, n, i, r, o, s;
          }),
          (t.prototype.update = function () {
            var t, e, n, i, r;
            (e = (t = this).getSize()),
              (n = {
                x: Math.max(e.content.width - e.container.width, 0),
                y: Math.max(e.content.height - e.container.height, 0),
              }),
              (i = t.containerEl.getBoundingClientRect()),
              (r = {
                top: Math.max(i.top, 0),
                right: Math.min(i.right, window.innerWidth),
                bottom: Math.min(i.bottom, window.innerHeight),
                left: Math.max(i.left, 0),
              }),
              (t.size = e),
              (t.limit = n),
              (t.bounding = r),
              t.track.update(),
              t.setPosition(),
              this._plugins.forEach(function (t) {
                t.onUpdate();
              });
          }),
          (t.prototype.isVisible = function (t) {
            return (function (t, e) {
              var n = t.bounding,
                i = e.getBoundingClientRect(),
                r = Math.max(n.top, i.top),
                o = Math.max(n.left, i.left),
                s = Math.min(n.right, i.right);
              return r < Math.min(n.bottom, i.bottom) && o < s;
            })(this, t);
          }),
          (t.prototype.setPosition = function (t, e, n) {
            var i = this;
            void 0 === t && (t = this.offset.x),
              void 0 === e && (e = this.offset.y),
              void 0 === n && (n = {});
            var r = (function (t, e, n) {
              var i = t.options,
                r = t.offset,
                o = t.limit,
                s = t.track,
                a = t.contentEl;
              return (
                i.renderByPixels && ((e = Math.round(e)), (n = Math.round(n))),
                (e = is(e, 0, o.x)),
                (n = is(n, 0, o.y)),
                e !== r.x && s.xAxis.show(),
                n !== r.y && s.yAxis.show(),
                i.alwaysShowTracks || s.autoHideOnIdle(),
                e === r.x && n === r.y
                  ? null
                  : ((r.x = e),
                    (r.y = n),
                    xs(a, {
                      "-transform":
                        "translate3d(" + -e + "px, " + -n + "px, 0)",
                    }),
                    s.update(),
                    { offset: Po({}, r), limit: Po({}, o) })
              );
            })(this, t, e);
            r &&
              !n.withoutCallbacks &&
              this._listeners.forEach(function (t) {
                t.call(i, r);
              });
          }),
          (t.prototype.scrollTo = function (t, e, n, i) {
            void 0 === t && (t = this.offset.x),
              void 0 === e && (e = this.offset.y),
              void 0 === n && (n = 0),
              void 0 === i && (i = {}),
              (function (t, e, n, i, r) {
                void 0 === i && (i = 0);
                var o = void 0 === r ? {} : r,
                  s = o.easing,
                  a = void 0 === s ? Ps : s,
                  l = o.callback,
                  u = t.options,
                  c = t.offset,
                  d = t.limit;
                u.renderByPixels && ((e = Math.round(e)), (n = Math.round(n)));
                var p = c.x,
                  f = c.y,
                  h = is(e, 0, d.x) - p,
                  m = is(n, 0, d.y) - f,
                  v = Date.now();
                cancelAnimationFrame(Ts.get(t)),
                  (function e() {
                    var n = Date.now() - v,
                      r = i ? a(Math.min(n / i, 1)) : 1;
                    if ((t.setPosition(p + h * r, f + m * r), n >= i))
                      "function" == typeof l && l.call(t);
                    else {
                      var o = requestAnimationFrame(e);
                      Ts.set(t, o);
                    }
                  })();
              })(this, t, e, n, i);
          }),
          (t.prototype.scrollIntoView = function (t, e) {
            void 0 === e && (e = {}),
              (function (t, e, n) {
                var i = void 0 === n ? {} : n,
                  r = i.alignToTop,
                  o = void 0 === r || r,
                  s = i.onlyScrollIfNeeded,
                  a = void 0 !== s && s,
                  l = i.offsetTop,
                  u = void 0 === l ? 0 : l,
                  c = i.offsetLeft,
                  d = void 0 === c ? 0 : c,
                  p = i.offsetBottom,
                  f = void 0 === p ? 0 : p,
                  h = t.containerEl,
                  m = t.bounding,
                  v = t.offset,
                  g = t.limit;
                if (e && h.contains(e)) {
                  var y = e.getBoundingClientRect();
                  if (!a || !t.isVisible(e)) {
                    var b = o ? y.top - m.top - u : y.bottom - m.bottom + f;
                    t.setMomentum(y.left - m.left - d, is(b, -v.y, g.y - v.y));
                  }
                }
              })(this, t, e);
          }),
          (t.prototype.addListener = function (t) {
            if ("function" != typeof t)
              throw new TypeError(
                "[smooth-scrollbar] scrolling listener should be a function"
              );
            this._listeners.add(t);
          }),
          (t.prototype.removeListener = function (t) {
            this._listeners.delete(t);
          }),
          (t.prototype.addTransformableMomentum = function (t, e, n, i) {
            this._updateDebounced();
            var r = this._plugins.reduce(
                function (t, e) {
                  return e.transformDelta(t, n) || t;
                },
                { x: t, y: e }
              ),
              o = !this._shouldPropagateMomentum(r.x, r.y);
            o && this.addMomentum(r.x, r.y), i && i.call(this, o);
          }),
          (t.prototype.addMomentum = function (t, e) {
            this.setMomentum(this._momentum.x + t, this._momentum.y + e);
          }),
          (t.prototype.setMomentum = function (t, e) {
            0 === this.limit.x && (t = 0),
              0 === this.limit.y && (e = 0),
              this.options.renderByPixels &&
                ((t = Math.round(t)), (e = Math.round(e))),
              (this._momentum.x = t),
              (this._momentum.y = e);
          }),
          (t.prototype.updatePluginOptions = function (t, e) {
            this._plugins.forEach(function (n) {
              n.name === t && Object.assign(n.options, e);
            });
          }),
          (t.prototype.destroy = function () {
            var t,
              e,
              n = this.containerEl,
              i = this.contentEl;
            (t = this),
              (e = fs.get(t)) &&
                (e.forEach(function (t) {
                  var e = t.elem,
                    n = t.eventName,
                    i = t.handler;
                  e.removeEventListener(n, i, hs());
                }),
                fs.delete(t)),
              this._listeners.clear(),
              this.setMomentum(0, 0),
              cancelAnimationFrame(this._renderID),
              this._observer && this._observer.disconnect(),
              Hs.delete(this.containerEl);
            for (var r = Array.from(i.childNodes); n.firstChild; )
              n.removeChild(n.firstChild);
            r.forEach(function (t) {
              n.appendChild(t);
            }),
              xs(n, { overflow: "" }),
              (n.scrollTop = this.scrollTop),
              (n.scrollLeft = this.scrollLeft),
              this._plugins.forEach(function (t) {
                t.onDestroy();
              }),
              (this._plugins.length = 0);
          }),
          (t.prototype._init = function () {
            var t = this;
            this.update(),
              Object.keys(i).forEach(function (e) {
                i[e](t);
              }),
              this._plugins.forEach(function (t) {
                t.onInit();
              }),
              this._render();
          }),
          (t.prototype._updateDebounced = function () {
            this.update();
          }),
          (t.prototype._shouldPropagateMomentum = function (t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = 0);
            var n = this.options,
              i = this.offset,
              r = this.limit;
            if (!n.continuousScrolling) return !1;
            0 === r.x && 0 === r.y && this._updateDebounced();
            var o = is(t + i.x, 0, r.x),
              s = is(e + i.y, 0, r.y),
              a = !0;
            return (a =
              (a = (a = a && o === i.x) && s === i.y) &&
              (i.x === r.x || 0 === i.x || i.y === r.y || 0 === i.y));
          }),
          (t.prototype._render = function () {
            var t = this._momentum;
            if (t.x || t.y) {
              var e = this._nextTick("x"),
                n = this._nextTick("y");
              (t.x = e.momentum),
                (t.y = n.momentum),
                this.setPosition(e.position, n.position);
            }
            var i = Po({}, this._momentum);
            this._plugins.forEach(function (t) {
              t.onRender(i);
            }),
              (this._renderID = requestAnimationFrame(this._render.bind(this)));
          }),
          (t.prototype._nextTick = function (t) {
            var e = this.options,
              n = this.offset,
              i = this._momentum,
              r = n[t],
              o = i[t];
            if (Math.abs(o) <= 0.1) return { momentum: 0, position: r + o };
            var s = o * (1 - e.damping);
            return (
              e.renderByPixels && (s |= 0), { momentum: s, position: r + o - s }
            );
          }),
          Ao([cs(100, { leading: !0 })], t.prototype, "_updateDebounced", null),
          t
        );
      })(),
      $s = !1;
    function Xs() {
      if (!$s && "undefined" != typeof window) {
        var t = document.createElement("style");
        (t.id = "smooth-scrollbar-style"),
          (t.textContent =
            "\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  display: flow-root;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: rgba(222, 222, 222, .75);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: rgba(0, 0, 0, .5);\n  border-radius: 4px;\n}\n"),
          document.head && document.head.appendChild(t),
          ($s = !0);
      }
    }
    var Ys = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        (function (t, e) {
          function n() {
            this.constructor = t;
          }
          To(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        })(e, t),
        (e.init = function (t, e) {
          if (!t || 1 !== t.nodeType)
            throw new TypeError(
              "expect element to be DOM Element, but got " + t
            );
          return Xs(), Hs.has(t) ? Hs.get(t) : new Gs(t, e);
        }),
        (e.initAll = function (t) {
          return Array.from(
            document.querySelectorAll("[data-scrollbar]"),
            function (n) {
              return e.init(n, t);
            }
          );
        }),
        (e.has = function (t) {
          return Hs.has(t);
        }),
        (e.get = function (t) {
          return Hs.get(t);
        }),
        (e.getAll = function () {
          return Array.from(Hs.values());
        }),
        (e.destroy = function (t) {
          var e = Hs.get(t);
          e && e.destroy();
        }),
        (e.destroyAll = function () {
          Hs.forEach(function (t) {
            t.destroy();
          });
        }),
        (e.use = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          return Os.apply(void 0, t);
        }),
        (e.attachStyle = function () {
          return Xs();
        }),
        (e.detachStyle = function () {
          return (function () {
            if ($s && "undefined" != typeof window) {
              var t = document.getElementById("smooth-scrollbar-style");
              t && t.parentNode && (t.parentNode.removeChild(t), ($s = !1));
            }
          })();
        }),
        (e.version = "8.7.0"),
        (e.ScrollbarPlugin = As),
        e
      );
    })(Gs);
    function Us(t, e) {
      return (Us =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    var Qs = (function (t) {
      var e, n;
      function i() {
        return t.apply(this, arguments) || this;
      }
      return (
        (n = t),
        ((e = i).prototype = Object.create(n.prototype)),
        (e.prototype.constructor = e),
        Us(e, n),
        (i.prototype.transformDelta = function (t, e) {
          return this.options.disable ? { x: 0, y: 0 } : t;
        }),
        i
      );
    })(Ys.ScrollbarPlugin);
    /*!
     * SmoothScrollbar Disable Plugin
     *
     * @version 1.0.1
     * @author Artem Dordzhiev (Draft)
     */ (Qs.pluginName = "Disable"), (Qs.defaultOptions = { disable: !1 });
    var Ks = Qs;
    function Zs(t, e) {
      return (Zs =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    var Js = (function (t) {
      var e, n;
      function i() {
        return t.apply(this, arguments) || this;
      }
      (n = t),
        ((e = i).prototype = Object.create(n.prototype)),
        (e.prototype.constructor = e),
        Zs(e, n);
      var r = i.prototype;
      return (
        (r.transformDelta = function (t, e) {
          var n = t.x > 0 ? 1 : -1,
            i = t.y > 0 ? 1 : -1;
          return n === this.lockX || i === this.lockY
            ? { x: 0, y: 0 }
            : ((this.lockX = null), (this.lockY = null), t);
        }),
        (r.onRender = function (t) {
          var e = t.x,
            n = t.y;
          n < 0 &&
            !this.lockY &&
            Math.abs(n) >= this.scrollbar.scrollTop &&
            (this.scrollbar.setMomentum(0, -this.scrollbar.scrollTop),
            (this.lockY = -1)),
            e < 0 &&
              !this.lockX &&
              Math.abs(e) >= this.scrollbar.scrollLeft &&
              (this.scrollbar.setMomentum(-this.scrollbar.scrollLeft, 0),
              (this.lockX = -1)),
            e > 0 &&
              !this.lockX &&
              Math.abs(e) >=
                this.scrollbar.limit.x - this.scrollbar.scrollLeft &&
              (this.scrollbar.setMomentum(
                this.scrollbar.limit.x - this.scrollbar.scrollLeft,
                0
              ),
              (this.lockX = 1)),
            n > 0 &&
              !this.lockY &&
              Math.abs(n) >=
                this.scrollbar.limit.y - this.scrollbar.scrollTop &&
              (this.scrollbar.setMomentum(
                0,
                this.scrollbar.limit.y - this.scrollbar.scrollTop
              ),
              (this.lockY = 1)),
            0 === n && (this.lockY = null),
            0 === e && (this.lockX = null);
        }),
        i
      );
    })(Ys.ScrollbarPlugin);
    /*!
     * SmoothScrollbar SoftScroll Plugin
     *
     * @version 1.0.2
     * @author Artem Dordzhiev (Draft)
     */ Js.pluginName = "SoftScroll";
    var ta = Js;
    function ea(t, e) {
      return (ea =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    /*!
     * SmoothScrollbar GSAP ScrollTrigger Plugin
     *
     * @version 1.0.4
     * @author Artem Dordzhiev (Draft)
     */
    document.documentMode &&
      (window.requestAnimationFrame =
        window.requestAnimationFrame.bind(window)),
      Ui.registerPlugin(bo);
    var na = {
        el: document.body,
        vars: {
          scrollTop: function (t) {
            return (
              arguments.length && (na.scrollbar.scrollTop = t),
              na.scrollbar.scrollTop
            );
          },
          getBoundingClientRect: function () {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            };
          },
          pinType: "transform",
        },
      },
      ia = (function (t) {
        var e, n;
        function i(e, n) {
          var i;
          return (
            (i = t.call(this, e, n) || this),
            (na.scrollbar = e),
            bo.scrollerProxy(na.el, na.vars),
            bo.defaults({ pinType: "transform" }),
            e.addListener(bo.update),
            i
          );
        }
        return (
          (n = t),
          ((e = i).prototype = Object.create(n.prototype)),
          (e.prototype.constructor = e),
          ea(e, n),
          i
        );
      })(Ys.ScrollbarPlugin);
    ia.pluginName = "ScrollTrigger";
    var ra = ia;
    function oa(t, e) {
      return (oa =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    Ys.use(Ks, ta, ra);
    var sa = (function (t) {
      var e, n;
      function i() {
        var e;
        return (
          ((e = t.apply(this, arguments) || this).page = e.app.get("page")),
          (e.options = Object.assign(
            {},
            { continuousScrolling: !1, renderByPixels: !0, damping: 0.13 },
            e.options
          )),
          e.init(),
          e
        );
      }
      (n = t),
        ((e = i).prototype = Object.create(n.prototype)),
        (e.prototype.constructor = e),
        oa(e, n);
      var r = i.prototype;
      return (
        (r.init = function () {
          var t = this;
          if (this.page.mobile) return !1;
          (this.ssb = Ys.init(this.el, this.options)),
            (this.reflowTh = us(this.reflow.bind(this), 50)),
            this.ssb.addListener(function (e) {
              t.app.trigger("scrolling", e.offset.y, e.offset.x), t.reflowTh();
            }),
            document.documentElement.classList.add("smooth"),
            this.override();
        }),
        (r.override = function () {
          var t = this;
          this.page.scrollProxy = {
            top: function () {
              return t.ssb.scrollTop;
            },
            left: function () {
              return t.ssb.scrollLeft;
            },
            height: function () {
              return t.ssb.limit.y;
            },
            width: function () {
              return t.ssb.limit.x;
            },
            to: function (e, n, i) {
              t.ssb.update(), t.ssb.scrollTo(n, e, 1e3 * i.duration, i);
            },
            enable: function () {
              return t.ssb.updatePluginOptions("Disable", { disable: !1 });
            },
            disable: function () {
              return t.ssb.updatePluginOptions("Disable", { disable: !0 });
            },
          };
        }),
        (r.destroy = function () {
          this.ssb.destroy(),
            (this.ssb = null),
            (this.page.scrollProxy = {}),
            document.documentElement.classList.remove("smooth");
        }),
        (r.refresh = function (t) {
          t && (this.el = t), this.ssb && this.destroy(), this.init();
        }),
        (r.reflow = function () {
          this.ssb &&
            ((this.ssb.track.yAxis.element.style.display = "none"),
            this.ssb.track.yAxis.element.offsetHeight,
            this.ssb.track.yAxis.element.offsetHeight,
            this.ssb.track.yAxis.element.offsetHeight,
            (this.ssb.track.yAxis.element.style.display = "block"));
        }),
        (r.onDestroy = function () {
          return new Promise(
            function (t, e) {
              return this.ssb && this.ssb.destroy(), t();
            }.bind(this)
          );
        }),
        i
      );
    })(r);
    function aa(t, e) {
      (t.prototype = Object.create(e.prototype)),
        (t.prototype.constructor = t),
        la(t, e);
    }
    function la(t, e) {
      return (la =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    var ua = (function (t) {
        function e() {
          return t.apply(this, arguments) || this;
        }
        aa(e, t);
        var n = e.prototype;
        return (
          (n.bindModalOpen = function () {
            var t = this;
            this.el.dataset.modalOpen &&
              this.el.addEventListener("click", function (e) {
                var n = t.app.find(t.el.dataset.modalOpen, "modal");
                n && (e.preventDefault(), e.stopPropagation(), n.open());
              });
          }),
          (n.bindScrollTo = function () {
            var t = this;
            this.el.dataset.scrollTo &&
              this.el.addEventListener("click", function (e) {
                e.preventDefault(),
                  e.stopPropagation(),
                  t.page.scrollTo(t.el.dataset.scrollTo);
              });
          }),
          e
        );
      })(r),
      ca = (function (t) {
        function e() {
          var e;
          return (
            ((e = t.apply(this, arguments) || this).fill =
              e.el.querySelector(".pt-btn_cta-fill")),
            (e.ripple = e.el.querySelectorAll(".pt-btn_cta-ripple")),
            (e.outTl = e.tlOut()),
            (e.hoverTl = e.tlHover()),
            e.bindHover(),
            e
          );
        }
        aa(e, t);
        var n = e.prototype;
        return (
          (n.bindHover = function () {
            var t = this;
            if (this.app.get("page").mobile) return !1;
            this.ripple.length && Ui.set(this.ripple, { display: "block" }),
              this.el.addEventListener("mouseenter", function () {
                t.outTl.pause(), t.hoverTl.play(0);
              }),
              this.el.addEventListener("mouseleave", function () {
                t.hoverTl.pause(), t.outTl.play(0);
              });
          }),
          (n.tlHover = function () {
            var t = new Ui.timeline({ paused: !0 });
            return (
              t.set(this.fill, { willChange: "transform", scale: 1 }),
              t.to(
                this.fill,
                {
                  scaleX: 1.03,
                  scaleY: 0.98,
                  duration: 1,
                  ease: "elastic.out(1, 0.3)",
                  force3D: !0,
                },
                0
              ),
              t.set(this.fill, { willChange: "auto" }),
              this.ripple.length &&
                (t.set(this.ripple, { willChange: "transform" }),
                t.fromTo(
                  this.ripple,
                  { xPercent: -100 },
                  {
                    xPercent: 0,
                    stagger: { each: 0.2 },
                    duration: 1,
                    ease: "expo.out",
                    force3D: !0,
                  },
                  0
                ),
                t.set(this.ripple, { willChange: "auto" })),
              t
            );
          }),
          (n.tlOut = function () {
            var t = new Ui.timeline({ paused: !0 });
            return (
              t.set(
                this.fill,
                { scaleX: 1.03, scaleY: 0.98, willChange: "transform" },
                0
              ),
              t.to(
                this.fill,
                {
                  scaleX: 1,
                  scaleY: 1,
                  ease: "elastic.out(1, 0.3)",
                  duration: 1,
                  force3D: !0,
                },
                0
              ),
              t.set(this.fill, { willChange: "auto" }),
              this.ripple.length &&
                (t.set(this.ripple, { willChange: "transform" }),
                t.set(this.ripple, { xPercent: 0 }, 0),
                t.to(
                  this.ripple,
                  {
                    xPercent: 100,
                    stagger: { each: 0.2, from: "end" },
                    duration: 1,
                    ease: "expo.out",
                    immediateRender: !1,
                    force3D: !0,
                  },
                  0
                ),
                t.set(this.ripple, { willChange: "auto" })),
              t
            );
          }),
          e
        );
      })(r),
      da = (function (t) {
        function e() {
          var e;
          return (
            ((e = t.apply(this, arguments) || this).fill =
              e.el.querySelector(".pt-btn_nav-fill")),
            (e.outTl = e.tlOut()),
            (e.hoverTl = e.tlHover()),
            e.bindHover(),
            e
          );
        }
        aa(e, t);
        var n = e.prototype;
        return (
          (n.bindHover = function () {
            var t = this;
            if (this.app.get("page").mobile) return !1;
            this.el.addEventListener("mouseenter", function () {
              t.outTl.pause(), t.hoverTl.play(0);
            }),
              this.el.addEventListener("mouseleave", function () {
                t.hoverTl.pause(), t.outTl.play(0);
              });
          }),
          (n.tlHover = function () {
            var t = new Ui.timeline({ paused: !0 });
            return (
              t.set(this.fill, { willChange: "transform" }),
              t.to(
                this.fill,
                {
                  scale: 0.95,
                  ease: "elastic.out(1, 0.3)",
                  duration: 1,
                  force3D: !0,
                },
                0
              ),
              t.set(this.fill, { willChange: "auto" }),
              t
            );
          }),
          (n.tlOut = function () {
            var t = new Ui.timeline({ paused: !0 });
            return (
              t.set(this.fill, { willChange: "transform" }),
              t.to(
                this.fill,
                {
                  scale: 1,
                  ease: "elastic.out(1, 0.3)",
                  duration: 1,
                  force3D: !0,
                },
                0
              ),
              t.set(this.fill, { willChange: "auto" }),
              t
            );
          }),
          e
        );
      })(r),
      pa = (function (t) {
        function e() {
          var e;
          return (
            ((e = t.apply(this, arguments) || this).fill =
              e.el.querySelector(".pt-btn_play-fill")),
            (e.outTl = e.tlOut()),
            (e.hoverTl = e.tlHover()),
            e.bindHover(),
            e
          );
        }
        aa(e, t);
        var n = e.prototype;
        return (
          (n.bindHover = function () {
            var t = this;
            if (this.app.get("page").mobile) return !1;
            this.el.addEventListener("mouseenter", function () {
              t.outTl.pause(), t.hoverTl.play(0);
            }),
              this.el.addEventListener("mouseleave", function () {
                t.hoverTl.pause(), t.outTl.play(0);
              });
          }),
          (n.tlHover = function () {
            var t = new Ui.timeline({ paused: !0 });
            return (
              t.set(this.fill, { willChange: "transform" }),
              t.to(
                this.fill,
                {
                  scale: 0.9,
                  ease: "elastic.out(1, 0.3)",
                  duration: 1,
                  force3D: !0,
                },
                0
              ),
              t.set(this.fill, { willChange: "auto" }),
              t
            );
          }),
          (n.tlOut = function () {
            var t = new Ui.timeline({ paused: !0 });
            return (
              t.set(this.fill, { willChange: "transform" }),
              t.to(
                this.fill,
                {
                  scale: 1,
                  ease: "elastic.out(1, 0.3)",
                  duration: 1,
                  force3D: !0,
                },
                0
              ),
              t.set(this.fill, { willChange: "auto" }),
              t
            );
          }),
          e
        );
      })(r);
    function fa(t, e) {
      return (fa =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    var ha = (function (t) {
      var e, n;
      function i() {
        var e;
        return (
          ((e = t.apply(this, arguments) || this).events = []),
          (e.autoDestroy = !1),
          (e.showTimeout = 30),
          (e.hideTimeout = 600),
          (e.dialog = e.el.querySelectorAll("[data-modal-dialog]")),
          (e.closes = e.el.querySelectorAll("[data-modal-close]")),
          e.bindCloses(),
          e
        );
      }
      (n = t),
        ((e = i).prototype = Object.create(n.prototype)),
        (e.prototype.constructor = e),
        fa(e, n);
      var r = i.prototype;
      return (
        (r.bindCloses = function () {
          var t = this;
          this.closes.forEach(function (e) {
            return e.addEventListener("click", function () {
              return t.hide();
            });
          });
        }),
        (r.open = function () {
          var t = this;
          this.trigger("show"),
            this.el.classList.add("-show"),
            document.documentElement.classList.add("modal"),
            clearInterval(this.visibleInt),
            (this.visibleInt = setTimeout(function () {
              t.el.classList.add("-visible"), t.trigger("showed");
            }, this.showTimeout));
        }),
        (r.hide = function () {
          var t = this;
          this.trigger("hide"),
            this.el.classList.remove("-visible"),
            clearInterval(this.visibleInt),
            (this.visibleInt = setTimeout(function () {
              t.el.classList.add("-show"),
                document.documentElement.classList.remove("modal"),
                t.trigger("hidden"),
                t.autoDestroy && t.destroy();
            }, this.hideTimeout));
        }),
        (r.destroy = function () {
          this.el.parentNode.removeChild(this.el), this.trigger("destroy");
        }),
        (r.setContent = function (t) {
          this.dialog.innerHTML = t;
        }),
        (r.on = function (t, e) {
          return this.events[t] || this.off(t), this.events[t].push(e), this;
        }),
        (r.off = function (t) {
          return (this.events[t] = []), this;
        }),
        (r.trigger = function (t) {
          for (
            var e = this.events[t] || [],
              n = arguments.length,
              i = new Array(n > 1 ? n - 1 : 0),
              r = 1;
            r < n;
            r++
          )
            i[r - 1] = arguments[r];
          for (var o = 0; o < e.length; o++) {
            var s;
            (s = e[o]).call.apply(s, [this, this].concat(i));
          }
          return this;
        }),
        i
      );
    })(r);
    function ma(t, e) {
      return (ma =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    var va = (function (t) {
      var e, n;
      function i() {
        var e;
        return (
          ((e = t.apply(this, arguments) || this).page = e.app.get("page")),
          (e.strip = e.el.querySelector(".pt-navbar-strip")),
          (e.toggleBtn = e.el.querySelector(".pt-navbar-toggle button")),
          (e.nav = Array.from(e.el.querySelectorAll(".pt-navbar-nav"))),
          (e.opened = !1),
          e.lastY,
          e.bind(),
          e
        );
      }
      (n = t),
        ((e = i).prototype = Object.create(n.prototype)),
        (e.prototype.constructor = e),
        ma(e, n);
      var r = i.prototype;
      return (
        (r.bind = function () {
          var t = this;
          this.toggleBtn &&
            this.toggleBtn.addEventListener("click", function () {
              return t.toggle();
            }),
            this.app.on("scrolling", function (e) {
              t.el.classList.toggle("-fixed", e > 10),
                t.lastY &&
                  t.el.classList.toggle("-visible", e > 10 && e < t.lastY),
                (t.lastY = e);
            });
        }),
        (r.toggle = function () {
          this.opened ? this.hide() : this.show();
        }),
        (r.show = function () {
          (this.opened = !0),
            this.el.classList.add("-open"),
            this.page.scrollDisable();
        }),
        (r.hide = function () {
          (this.opened = !1),
            this.el.classList.remove("-open"),
            this.page.scrollEnable();
        }),
        (r.onEnter = function () {
          return new Promise(
            function (t, e) {
              return (
                this.page.scrollTop() > 10 && this.el.classList.add("-visible"),
                t()
              );
            }.bind(this)
          );
        }),
        (r.onLeave = function () {
          return new Promise(
            function (t, e) {
              return this.page.scrollEnable(), t();
            }.bind(this)
          );
        }),
        i
      );
    })(r);
    function ga(t, e) {
      return (ga =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    var ya = (function (t) {
      var e, n;
      function i() {
        var e;
        return (
          ((e = t.apply(this, arguments) || this).page = e.app.get("page")),
          (e.button = e.el.querySelector("button")),
          e.bindScroll(),
          e.bindClick(),
          e
        );
      }
      (n = t),
        ((e = i).prototype = Object.create(n.prototype)),
        (e.prototype.constructor = e),
        ga(e, n);
      var r = i.prototype;
      return (
        (r.bindScroll = function () {
          var t = this;
          this.app.on("scrolling", function (e) {
            t.el.classList.toggle("-visible", e < 200);
          });
        }),
        (r.bindClick = function () {
          var t = this;
          this.el.addEventListener("click", function () {
            return t.page.scrollTo(window.innerHeight);
          });
        }),
        i
      );
    })(r);
    function ba(t, e) {
      return (ba =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    var xa = (function (t) {
      var e, n;
      function i() {
        var e;
        return (
          ((e = t.apply(this, arguments) || this).src = e.el.dataset.src),
          e.bindSwitch(),
          e
        );
      }
      (n = t),
        ((e = i).prototype = Object.create(n.prototype)),
        (e.prototype.constructor = e),
        ba(e, n);
      var r = i.prototype;
      return (
        (r.bindSwitch = function () {
          var t = this;
          if (!this.src) return !1;
          this.el.addEventListener("click", function () {
            return t.inject();
          });
        }),
        (r.inject = function () {
          this.el.innerHTML =
            '<iframe src="' +
            this.src +
            '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        }),
        i
      );
    })(r);
    function wa(t, e) {
      return (wa =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    var Da = (function (t) {
        var e, n;
        function i() {
          var e;
          return (
            ((e = t.apply(this, arguments) || this).canvas =
              e.el.querySelector("canvas")),
            (e.context = e.canvas.getContext("2d")),
            (e.mouse = { x: e.el.offsetWidth / 2, y: -e.el.offsetHeight }),
            (e.dots = []),
            (e.enabled = !1),
            (e.needsUpdate = !1),
            e.init(),
            e.bindMouse(),
            e.bindResize(),
            e.startObserver(),
            e
          );
        }
        (n = t),
          ((e = i).prototype = Object.create(n.prototype)),
          (e.prototype.constructor = e),
          wa(e, n);
        var r = i.prototype;
        return (
          (r.init = function () {
            var t = this;
            this.refresh(),
              (this.renderFn = function () {
                t.enabled && t.render();
              }),
              Ui.ticker.add(this.renderFn);
          }),
          (r.bindMouse = function () {
            var t = this;
            (this.mousemoveFn = function (e) {
              if (!t.enabled) return !1;
              t.needsUpdate = !0;
              var n = t.el.getBoundingClientRect();
              Ui.to(t.mouse, {
                x: e.clientX - n.left,
                y: e.clientY - n.top,
                overwrite: !0,
                duration: window.innerWidth > 1200 ? 0.3 : 0.6,
                onComplete: function () {
                  return (t.needsUpdate = !1);
                },
              });
            }),
              document.body.addEventListener("mousemove", this.mousemoveFn);
          }),
          (r.bindResize = function () {
            var t = this;
            (this.resizeFn = function () {
              return t.refresh();
            }),
              window.addEventListener("resize", this.resizeFn);
          }),
          (r.startObserver = function () {
            var t = this;
            (this.observer = new IntersectionObserver(function (e) {
              t.enabled = e[0].isIntersecting;
            })),
              this.observer.observe(this.el);
          }),
          (r.render = function (t) {
            var e = this;
            if ((void 0 === t && (t = !1), !this.needsUpdate && !t)) return !1;
            this.clear(),
              this.context.save(),
              this.context.beginPath(),
              (this.context.fillStyle = "rgba(255,255,255,1)"),
              this.dots.forEach(function (t) {
                return e.drawDot(t);
              }),
              this.context.fill();
          }),
          (r.refresh = function () {
            if (
              this.height === this.el.offsetHeight &&
              this.width === this.el.offsetWidth
            )
              return !1;
            (this.height = this.el.offsetHeight),
              (this.width = this.el.offsetWidth),
              (this.canvas.style.width = "100%"),
              (this.canvas.style.height = "100%"),
              (this.canvas.width =
                this.canvas.offsetWidth * window.devicePixelRatio),
              (this.canvas.height =
                this.canvas.offsetHeight * window.devicePixelRatio),
              (this.proximityRatio = window.innerWidth > 1200 ? 225 : 150),
              (this.growthRatio = window.innerWidth > 1200 ? 8 : 5),
              (this.dots = this.createDots(0.7, 25)),
              this.render(!0);
          }),
          (r.clear = function () {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
          }),
          (r.drawDot = function (t) {
            var e = Math.sqrt(
                Math.pow(t.x - this.mouse.x, 2) +
                  Math.pow(t.y - this.mouse.y, 2)
              ),
              n = Ui.utils.mapRange(
                t.radiusOrig,
                t.radiusOrig + this.proximityRatio,
                this.growthRatio,
                0,
                e
              );
            (t.radius = Math.max(n, t.radiusOrig, 0)),
              this.context.moveTo(
                t.x * window.devicePixelRatio,
                t.y * window.devicePixelRatio
              ),
              this.context.arc(
                t.x * window.devicePixelRatio,
                t.y * window.devicePixelRatio,
                t.radius * window.devicePixelRatio,
                0,
                2 * Math.PI
              );
          }),
          (r.createDots = function (t, e) {
            for (
              var n = Math.ceil(this.width / e) + 1,
                i = Math.ceil(this.height / e) + 1,
                r = Math.ceil(n * i),
                o = [],
                s = 0;
              s < r;
              s++
            ) {
              var a = e * (s % n),
                l = e * ~~(s / n);
              o.push({ x: a, y: l, radiusOrig: t, radius: t, size: e });
            }
            return o;
          }),
          (r.destroy = function () {
            this.observer.disconnect(),
              (this.enabled = !1),
              Ui.ticker.remove(this.renderFn),
              window.removeEventListener("resize", this.resizeFn),
              document.body.removeEventListener("mousemove", this.mousemoveFn);
          }),
          (r.onDestroy = function () {
            return new Promise(
              function (t, e) {
                return this.destroy(), t();
              }.bind(this)
            );
          }),
          i
        );
      })(r),
      _a = n(0),
      Sa = n.n(_a);
    function Ca(t, e) {
      return (Ca =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    var Ea = (function (t) {
      var e, n;
      function i() {
        var e;
        return (
          ((e = t.apply(this, arguments) || this).isLg =
            e.el.classList.contains("-lg")),
          (e.isXl = e.el.classList.contains("-xl")),
          (e.item = Array.from(e.el.querySelectorAll(".pt-fallbox-item"))),
          e.createWorld(),
          e.createWalls(),
          e.createBodies(),
          e.startObserver(),
          e.startUnfoldObserver(),
          e.bindResize(),
          e.bindCursor(),
          e
        );
      }
      (n = t),
        ((e = i).prototype = Object.create(n.prototype)),
        (e.prototype.constructor = e),
        Ca(e, n);
      var r = i.prototype;
      return (
        (r.startObserver = function () {
          var t = this;
          (this.observer = new IntersectionObserver(function (e) {
            t.runner.enabled = e[0].isIntersecting;
          })),
            this.observer.observe(this.el);
        }),
        (r.startUnfoldObserver = function () {
          var t = this;
          (this.unfoldObserver = new IntersectionObserver(
            function (e) {
              e[0].isIntersecting &&
                (t.unfoldBodies(), t.unfoldObserver.disconnect());
            },
            { rootMargin: "-50% 0% -35% 0%" }
          )),
            this.unfoldObserver.observe(this.el);
        }),
        (r.bindResize = function () {
          var t = this;
          (this.resizeFn = function () {
            return t.refresh();
          }),
            window.addEventListener("resize", this.resizeFn);
        }),
        (r.bindCursor = function () {
          var t = this.app.get("cursor").cursor;
          if (!t) return !1;
          this.item.forEach(function (e) {
            e.addEventListener("mouseenter", function () {
              return t.addState("-pointer");
            }),
              e.addEventListener("mouseleave", function () {
                return t.removeState("-pointer");
              });
          });
        }),
        (r.createWorld = function () {
          (this.height = this.el.offsetHeight),
            (this.width = this.el.offsetWidth),
            (this.engine = Sa.a.Engine.create()),
            (this.runner = Sa.a.Runner.create()),
            (this.mouse = Sa.a.Mouse.create(this.el)),
            this.el.removeEventListener("mousewheel", this.mouse.mousewheel),
            this.el.addEventListener("mouseleave", this.mouse.mouseup),
            (this.mouseConstraint = Sa.a.MouseConstraint.create(this.engine, {
              mouse: this.mouse,
              constraint: { render: { visible: !1 } },
            })),
            (this.engine.world.gravity.y = 0.8),
            Sa.a.Composite.add(this.engine.world, [this.mouseConstraint]),
            Sa.a.Runner.start(this.runner, this.engine),
            (this.runner.enabled = !1);
        }),
        (r.refresh = function () {
          var t = this;
          if (
            this.height === this.el.offsetHeight &&
            this.width === this.el.offsetWidth
          )
            return !1;
          (this.height = this.el.offsetHeight),
            (this.width = this.el.offsetWidth),
            setTimeout(function () {
              t.updateWalls(), t.updateBodies();
            });
        }),
        (r.createWalls = function () {
          (this.wallL = Sa.a.Bodies.rectangle(
            -250,
            this.height / 2,
            500,
            4 * this.height,
            { isStatic: !0 }
          )),
            (this.wallR = Sa.a.Bodies.rectangle(
              this.width + 250,
              this.height / 2,
              500,
              4 * this.height,
              { isStatic: !0 }
            )),
            (this.wallB = Sa.a.Bodies.rectangle(
              0,
              this.height + 250,
              2 * this.width,
              500,
              { isStatic: !0 }
            )),
            Sa.a.Composite.add(this.engine.world, [
              this.wallB,
              this.wallL,
              this.wallR,
            ]);
        }),
        (r.createTopWall = function () {
          (this.wallT = Sa.a.Bodies.rectangle(0, -250, 2 * this.width, 500, {
            isStatic: !0,
          })),
            Sa.a.Composite.add(this.engine.world, [this.wallT]);
        }),
        (r.makeScrollGravity = function () {
          var t = this,
            e = this.isXl ? 0.07 : 0.2,
            n = 0;
          Sa.a.Events.on(this.runner, "tick", function () {
            var i = t.app.get("page").scrollTop(),
              r = i - n;
            (t.engine.world.gravity.y = 0.8 - Ui.utils.clamp(-2, 4, r * e)),
              (n = i);
          });
        }),
        (r.updateWalls = function () {
          this.wallT &&
            Sa.a.Body.setVertices(
              this.wallT,
              Sa.a.Bodies.rectangle(0, -250, 2 * this.width, 500, {
                isStatic: !0,
              }).vertices
            ),
            this.wallL &&
              (Sa.a.Body.setPosition(this.wallL, {
                x: -250,
                y: this.height / 2,
              }),
              Sa.a.Body.setVertices(
                this.wallL,
                Sa.a.Bodies.rectangle(
                  -250,
                  this.height / 2,
                  500,
                  4 * this.height,
                  { isStatic: !0 }
                ).vertices
              )),
            this.wallR &&
              (Sa.a.Body.setPosition(this.wallR, {
                x: this.width + 250,
                y: this.height / 2,
              }),
              Sa.a.Body.setVertices(
                this.wallR,
                Sa.a.Bodies.rectangle(
                  this.width + 250,
                  this.height / 2,
                  500,
                  4 * this.height,
                  { isStatic: !0 }
                ).vertices
              )),
            this.wallB &&
              (Sa.a.Body.setPosition(this.wallB, {
                x: 0,
                y: this.height + 250,
              }),
              Sa.a.Body.setVertices(
                this.wallB,
                Sa.a.Bodies.rectangle(
                  0,
                  this.height + 250,
                  2 * this.width,
                  500,
                  { isStatic: !0 }
                ).vertices
              ));
        }),
        (r.createBodies = function () {
          var t = this;
          (this.bodies = []),
            this.item.forEach(function (e, n) {
              var i = e.querySelector("span"),
                r = e.getBoundingClientRect(),
                o = Ui.quickSetter(e, "x", "px"),
                s = Ui.quickSetter(e, "y", "px"),
                a = Ui.utils.random(0.2 * -Math.PI, 0.2 * Math.PI),
                l = -r.width - (n * r.height + 10),
                u = Ui.utils.random(r.width / 2, t.width - r.width / 2),
                c = Ui.getProperty(i, "border-radius"),
                d = Sa.a.Bodies.rectangle(u, l, r.width, r.height, {
                  chamfer: { radius: c },
                  angle: a,
                  isStatic: !0,
                  restitution: 0.3,
                });
              t.bodies.push(d),
                Sa.a.Composite.add(t.engine.world, [d]),
                Sa.a.Events.on(t.runner, "tick", function () {
                  t.runner.enabled &&
                    ((i.style.transform =
                      "translate(-50%,-50%) rotate(" +
                      d.angle.toFixed(2) +
                      "rad)"),
                    s(d.position.y.toFixed(1)),
                    o(d.position.x.toFixed(1)));
                });
            });
        }),
        (r.updateBodies = function () {
          var t = this;
          this.item.forEach(function (e, n) {
            var i = t.bodies[n],
              r = e.querySelector("span"),
              o = e.getBoundingClientRect(),
              s = Ui.getProperty(r, "border-radius"),
              a = Sa.a.Bodies.rectangle(
                i.position.x,
                i.position.y,
                o.width,
                o.height,
                { chamfer: { radius: s }, angle: i.angle }
              );
            if (
              (Sa.a.Body.setVertices(i, a.vertices),
              i.position.y > t.height &&
                Sa.a.Body.setPosition(i, { y: t.height / 2, x: i.position.x }),
              i.position.x > t.width)
            ) {
              var l = Ui.utils.random(o.width / 2, t.width - o.width / 2);
              Sa.a.Body.setPosition(i, { y: i.position.y, x: l });
            }
          });
        }),
        (r.unfoldBodies = function () {
          var t = this,
            e = this.isLg ? 200 : 80;
          this.bodies.forEach(function (t, n) {
            setTimeout(function () {
              return Sa.a.Body.setStatic(t, !1);
            }, n * e);
          });
          var n = !0;
          Sa.a.Events.on(this.runner, "tick", function () {
            n &&
              t.bodies[t.bodies.length - 1].position.y > 70 &&
              (t.createTopWall(), t.isLg || t.makeScrollGravity(), (n = !1));
          });
        }),
        (r.destroy = function () {
          this.observer.disconnect(),
            this.unfoldObserver.disconnect(),
            (this.runner.enabled = !1),
            Sa.a.Runner.stop(this.runner),
            window.removeEventListener("resize", this.resizeFn);
        }),
        (r.onDestroy = function () {
          return new Promise(
            function (t, e) {
              return this.destroy(), t();
            }.bind(this)
          );
        }),
        i
      );
    })(r);
    function Ta(t, e) {
      return (Ta =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    var Pa,
      Aa,
      ka,
      Oa,
      Ma,
      Fa = (function (t) {
        var e, n;
        function i() {
          var e;
          return (
            ((e = t.apply(this, arguments) || this).canvas =
              e.el.querySelector("canvas")),
            (e.context = e.canvas.getContext("2d")),
            (e.mouse = { x: -window.innerWidth, y: -window.innerHeight }),
            (e.arrows = []),
            (e.enabled = !1),
            (e.needsUpdate = !1),
            e.init(),
            e.bindMouse(),
            e.bindResize(),
            e.startObserver(),
            e
          );
        }
        (n = t),
          ((e = i).prototype = Object.create(n.prototype)),
          (e.prototype.constructor = e),
          Ta(e, n);
        var r = i.prototype;
        return (
          (r.init = function () {
            var t = this;
            this.refresh(),
              (this.renderFn = function () {
                t.enabled && t.render();
              }),
              Ui.ticker.add(this.renderFn);
          }),
          (r.bindMouse = function () {
            var t = this;
            (this.mousemoveFn = function (e) {
              if (!t.enabled) return !1;
              t.needsUpdate = !0;
              var n = t.el.getBoundingClientRect();
              Ui.to(t.mouse, {
                x: e.clientX - n.left,
                y: e.clientY - n.top,
                overwrite: !0,
                duration: window.innerWidth > 1200 ? 0.15 : 0.4,
                onComplete: function () {
                  return (t.needsUpdate = !1);
                },
              });
            }),
              document.body.addEventListener("mousemove", this.mousemoveFn);
          }),
          (r.bindResize = function () {
            var t = this;
            (this.resizeFn = function () {
              return t.refresh();
            }),
              window.addEventListener("resize", this.resizeFn);
          }),
          (r.startObserver = function () {
            var t = this;
            (this.observer = new IntersectionObserver(function (e) {
              t.enabled = e[0].isIntersecting;
            })),
              this.observer.observe(this.el);
          }),
          (r.render = function (t) {
            var e = this;
            if ((void 0 === t && (t = !1), !this.needsUpdate && !t)) return !1;
            this.clear(),
              this.arrows.forEach(function (t) {
                var n = e.mouse.x - t.x,
                  i = e.mouse.y - t.y;
                (t.rotation = Math.atan2(i, n)), e.drawArrow(t);
              });
          }),
          (r.refresh = function () {
            if (
              this.height === this.el.offsetHeight &&
              this.width === this.el.offsetWidth
            )
              return !1;
            (this.height = this.el.offsetHeight),
              (this.width = this.el.offsetWidth),
              (this.canvas.style.width = "100%"),
              (this.canvas.style.height = "100%"),
              (this.canvas.width =
                this.canvas.offsetWidth * window.devicePixelRatio),
              (this.canvas.height =
                this.canvas.offsetHeight * window.devicePixelRatio),
              (this.arrows =
                window.innerWidth > 1200
                  ? this.createArrows(60, 60, 2, 15)
                  : this.createArrows(40, 40, 2, 10)),
              this.render(!0);
          }),
          (r.clear = function () {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
          }),
          (r.drawArrow = function (t) {
            this.context.save(),
              this.context.translate(
                t.x * window.devicePixelRatio,
                t.y * window.devicePixelRatio
              ),
              this.context.rotate(t.rotation),
              (this.context.lineWidth = t.radius * window.devicePixelRatio),
              (this.context.strokeStyle = "#fff"),
              (this.context.lineCap = "round"),
              this.context.beginPath(),
              this.context.moveTo(0, -t.size * window.devicePixelRatio),
              this.context.lineTo(t.size * window.devicePixelRatio, 0),
              this.context.lineTo(0, t.size * window.devicePixelRatio),
              this.context.moveTo(0, -t.size * window.devicePixelRatio),
              this.context.closePath(),
              this.context.stroke(),
              this.context.restore();
          }),
          (r.createArrows = function (t, e, n, i) {
            for (
              var r = Math.ceil(this.canvas.width / t),
                o = Math.ceil(this.canvas.height / e),
                s = (this.canvas.width - r * t) / 2,
                a = (this.canvas.height - o * e) / 2,
                l = [],
                u = 0;
              u < r;
              u++
            )
              for (var c = 0; c < o; c++) {
                var d = s + t / 2 + u * t,
                  p = a + e / 2 + c * e;
                l.push({
                  x: d,
                  y: p,
                  column: u,
                  row: c,
                  rotation: 0,
                  radius: n,
                  size: i,
                });
              }
            return l;
          }),
          (r.destroy = function () {
            this.observer.disconnect(),
              (this.enabled = !1),
              Ui.ticker.remove(this.renderFn),
              window.removeEventListener("resize", this.resizeFn),
              document.body.removeEventListener("mousemove", this.mousemoveFn);
          }),
          (r.onDestroy = function () {
            return new Promise(
              function (t, e) {
                return this.destroy(), t();
              }.bind(this)
            );
          }),
          i
        );
      })(r),
      Ba = function () {
        return "undefined" != typeof window;
      },
      La = function () {
        return Pa || (Ba() && (Pa = window.gsap) && Pa.registerPlugin && Pa);
      },
      Ia = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
      ja = {
        rect: ["width", "height"],
        circle: ["r", "r"],
        ellipse: ["rx", "ry"],
        line: ["x2", "y2"],
      },
      Ra = function (t) {
        return Math.round(1e4 * t) / 1e4;
      },
      za = function (t) {
        return parseFloat(t) || 0;
      },
      Na = function (t, e) {
        var n = za(t);
        return ~t.indexOf("%") ? (n / 100) * e : n;
      },
      qa = function (t, e) {
        return za(t.getAttribute(e));
      },
      Wa = Math.sqrt,
      Va = function (t, e, n, i, r, o) {
        return Wa(
          Math.pow((za(n) - za(t)) * r, 2) + Math.pow((za(i) - za(e)) * o, 2)
        );
      },
      Ha = function (t) {
        return console.warn(t);
      },
      Ga = function (t) {
        return "non-scaling-stroke" === t.getAttribute("vector-effect");
      },
      $a = function (t) {
        if (!(t = Aa(t)[0])) return 0;
        var e,
          n,
          i,
          r,
          o,
          s,
          a,
          l = t.tagName.toLowerCase(),
          u = t.style,
          c = 1,
          d = 1;
        Ga(t) &&
          ((d = t.getScreenCTM()),
          (c = Wa(d.a * d.a + d.b * d.b)),
          (d = Wa(d.d * d.d + d.c * d.c)));
        try {
          n = t.getBBox();
        } catch (t) {
          Ha(
            "Some browsers won't measure invisible elements (like display:none or masks inside defs)."
          );
        }
        var p = n || { x: 0, y: 0, width: 0, height: 0 },
          f = p.x,
          h = p.y,
          m = p.width,
          v = p.height;
        if (
          ((n && (m || v)) ||
            !ja[l] ||
            ((m = qa(t, ja[l][0])),
            (v = qa(t, ja[l][1])),
            "rect" !== l && "line" !== l && ((m *= 2), (v *= 2)),
            "line" === l &&
              ((f = qa(t, "x1")),
              (h = qa(t, "y1")),
              (m = Math.abs(m - f)),
              (v = Math.abs(v - h)))),
          "path" === l)
        )
          (r = u.strokeDasharray),
            (u.strokeDasharray = "none"),
            (e = t.getTotalLength() || 0),
            c !== d &&
              Ha(
                "Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."
              ),
            (e *= (c + d) / 2),
            (u.strokeDasharray = r);
        else if ("rect" === l) e = 2 * m * c + 2 * v * d;
        else if ("line" === l) e = Va(f, h, f + m, h + v, c, d);
        else if ("polyline" === l || "polygon" === l)
          for (
            i = t.getAttribute("points").match(Ia) || [],
              "polygon" === l && i.push(i[0], i[1]),
              e = 0,
              o = 2;
            o < i.length;
            o += 2
          )
            e += Va(i[o - 2], i[o - 1], i[o], i[o + 1], c, d) || 0;
        else
          ("circle" !== l && "ellipse" !== l) ||
            ((s = (m / 2) * c),
            (a = (v / 2) * d),
            (e = Math.PI * (3 * (s + a) - Wa((3 * s + a) * (s + 3 * a)))));
        return e || 0;
      },
      Xa = function (t, e) {
        if (!(t = Aa(t)[0])) return [0, 0];
        e || (e = $a(t) + 1);
        var n = ka.getComputedStyle(t),
          i = n.strokeDasharray || "",
          r = za(n.strokeDashoffset),
          o = i.indexOf(",");
        return (
          o < 0 && (o = i.indexOf(" ")),
          (i = o < 0 ? e : za(i.substr(0, o))) > e && (i = e),
          [-r || 0, i - r || 0]
        );
      },
      Ya = function () {
        Ba() &&
          (document,
          (ka = window),
          (Ma = Pa = La()),
          (Aa = Pa.utils.toArray),
          (Oa = -1 !== ((ka.navigator || {}).userAgent || "").indexOf("Edge")));
      },
      Ua = {
        version: "3.8.0",
        name: "drawSVG",
        register: function (t) {
          (Pa = t), Ya();
        },
        init: function (t, e, n, i, r) {
          if (!t.getBBox) return !1;
          Ma || Ya();
          var o,
            s,
            a,
            l = $a(t);
          return (
            (this._style = t.style),
            (this._target = t),
            e + "" == "true"
              ? (e = "0 100%")
              : e
              ? -1 === (e + "").indexOf(" ") && (e = "0 " + e)
              : (e = "0 0"),
            (s = (function (t, e, n) {
              var i,
                r,
                o = t.indexOf(" ");
              return (
                o < 0
                  ? ((i = void 0 !== n ? n + "" : t), (r = t))
                  : ((i = t.substr(0, o)), (r = t.substr(o + 1))),
                (i = Na(i, e)) > (r = Na(r, e)) ? [r, i] : [i, r]
              );
            })(e, l, (o = Xa(t, l))[0])),
            (this._length = Ra(l)),
            (this._dash = Ra(o[1] - o[0])),
            (this._offset = Ra(-o[0])),
            (this._dashPT = this.add(
              this,
              "_dash",
              this._dash,
              Ra(s[1] - s[0])
            )),
            (this._offsetPT = this.add(
              this,
              "_offset",
              this._offset,
              Ra(-s[0])
            )),
            Oa &&
              (a = ka.getComputedStyle(t)).strokeLinecap !== a.strokeLinejoin &&
              ((s = za(a.strokeMiterlimit)),
              this.add(t.style, "strokeMiterlimit", s, s + 0.01)),
            (this._live = Ga(t) || ~(e + "").indexOf("live")),
            (this._nowrap = ~(e + "").indexOf("nowrap")),
            this._props.push("drawSVG"),
            1
          );
        },
        render: function (t, e) {
          var n,
            i,
            r,
            o,
            s = e._pt,
            a = e._style;
          if (s) {
            for (
              e._live &&
              (n = $a(e._target)) !== e._length &&
              ((i = n / e._length),
              (e._length = n),
              e._offsetPT && ((e._offsetPT.s *= i), (e._offsetPT.c *= i)),
              e._dashPT
                ? ((e._dashPT.s *= i), (e._dashPT.c *= i))
                : (e._dash *= i));
              s;

            )
              s.r(t, s.d), (s = s._next);
            (r = e._dash || (t && 1 !== t && 1e-4) || 0),
              (n = e._length - r + 0.1),
              (o = e._offset),
              r &&
                o &&
                r + Math.abs(o % e._length) > e._length - 0.2 &&
                (o += o < 0 ? 0.1 : -0.1) &&
                (n += 0.1),
              (a.strokeDashoffset = r ? o : o + 0.001),
              (a.strokeDasharray =
                n < 0.2
                  ? "none"
                  : r
                  ? r + "px," + (e._nowrap ? 999999 : n) + "px"
                  : "0px, 999999px");
          }
        },
        getLength: $a,
        getPosition: Xa,
      };
    La() && Pa.registerPlugin(Ua);
    var Qa =
      /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
    /*!
     * strings: 3.8.0
     * https://greensock.com
     *
     * Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */ var Ka,
      Za,
      Ja,
      tl = /(?:\r|\n|\t\t)/g,
      el = /(?:\s\s+)/g,
      nl = function (t) {
        return Za.getComputedStyle(t);
      },
      il = Array.isArray,
      rl = [].slice,
      ol = function (t, e) {
        var n;
        return il(t)
          ? t
          : "string" == (n = typeof t) && !e && t
          ? rl.call(Ka.querySelectorAll(t), 0)
          : t && "object" === n && "length" in t
          ? rl.call(t, 0)
          : t
          ? [t]
          : [];
      },
      sl = function (t) {
        return "absolute" === t.position || !0 === t.absolute;
      },
      al = function (t, e) {
        for (var n, i = e.length; --i > -1; )
          if (((n = e[i]), t.substr(0, n.length) === n)) return n.length;
      },
      ll = function (t, e) {
        void 0 === t && (t = "");
        var n = ~t.indexOf("++"),
          i = 1;
        return (
          n && (t = t.split("++").join("")),
          function () {
            return (
              "<" +
              e +
              " style='position:relative;display:inline-block;'" +
              (t ? " class='" + t + (n ? i++ : "") + "'>" : ">")
            );
          }
        );
      },
      ul = function t(e, n, i) {
        var r = e.nodeType;
        if (1 === r || 9 === r || 11 === r)
          for (e = e.firstChild; e; e = e.nextSibling) t(e, n, i);
        else
          (3 !== r && 4 !== r) || (e.nodeValue = e.nodeValue.split(n).join(i));
      },
      cl = function (t, e) {
        for (var n = e.length; --n > -1; ) t.push(e[n]);
      },
      dl = function (t, e, n) {
        for (var i; t && t !== e; ) {
          if ((i = t._next || t.nextSibling))
            return i.textContent.charAt(0) === n;
          t = t.parentNode || t._parent;
        }
      },
      pl = function t(e) {
        var n,
          i,
          r = ol(e.childNodes),
          o = r.length;
        for (n = 0; n < o; n++)
          (i = r[n])._isSplit
            ? t(i)
            : n && i.previousSibling && 3 === i.previousSibling.nodeType
            ? ((i.previousSibling.nodeValue +=
                3 === i.nodeType ? i.nodeValue : i.firstChild.nodeValue),
              e.removeChild(i))
            : 3 !== i.nodeType &&
              (e.insertBefore(i.firstChild, i), e.removeChild(i));
      },
      fl = function (t, e) {
        return parseFloat(e[t]) || 0;
      },
      hl = function (t, e, n, i, r, o, s) {
        var a,
          l,
          u,
          c,
          d,
          p,
          f,
          h,
          m,
          v,
          g,
          y,
          b = nl(t),
          x = fl("paddingLeft", b),
          w = -999,
          D = fl("borderBottomWidth", b) + fl("borderTopWidth", b),
          _ = fl("borderLeftWidth", b) + fl("borderRightWidth", b),
          S = fl("paddingTop", b) + fl("paddingBottom", b),
          C = fl("paddingLeft", b) + fl("paddingRight", b),
          E = fl("fontSize", b) * (e.lineThreshold || 0.2),
          T = b.textAlign,
          P = [],
          A = [],
          k = [],
          O = e.wordDelimiter || " ",
          M = e.tag ? e.tag : e.span ? "span" : "div",
          F = e.type || e.split || "chars,words,lines",
          B = r && ~F.indexOf("lines") ? [] : null,
          L = ~F.indexOf("words"),
          I = ~F.indexOf("chars"),
          j = sl(e),
          R = e.linesClass,
          z = ~(R || "").indexOf("++"),
          N = [],
          q = "flex" === b.display,
          W = t.style.display;
        for (
          z && (R = R.split("++").join("")),
            q && (t.style.display = "block"),
            u = (l = t.getElementsByTagName("*")).length,
            d = [],
            a = 0;
          a < u;
          a++
        )
          d[a] = l[a];
        if (B || j)
          for (a = 0; a < u; a++)
            ((p = (c = d[a]).parentNode === t) || j || (I && !L)) &&
              ((y = c.offsetTop),
              B &&
                p &&
                Math.abs(y - w) > E &&
                ("BR" !== c.nodeName || 0 === a) &&
                ((f = []), B.push(f), (w = y)),
              j &&
                ((c._x = c.offsetLeft),
                (c._y = y),
                (c._w = c.offsetWidth),
                (c._h = c.offsetHeight)),
              B &&
                (((c._isSplit && p) ||
                  (!I && p) ||
                  (L && p) ||
                  (!L &&
                    c.parentNode.parentNode === t &&
                    !c.parentNode._isSplit)) &&
                  (f.push(c), (c._x -= x), dl(c, t, O) && (c._wordEnd = !0)),
                "BR" === c.nodeName &&
                  ((c.nextSibling && "BR" === c.nextSibling.nodeName) ||
                    0 === a) &&
                  B.push([])));
        for (a = 0; a < u; a++)
          if (((p = (c = d[a]).parentNode === t), "BR" !== c.nodeName))
            if (
              (j &&
                ((m = c.style),
                L ||
                  p ||
                  ((c._x += c.parentNode._x), (c._y += c.parentNode._y)),
                (m.left = c._x + "px"),
                (m.top = c._y + "px"),
                (m.position = "absolute"),
                (m.display = "block"),
                (m.width = c._w + 1 + "px"),
                (m.height = c._h + "px")),
              !L && I)
            )
              if (c._isSplit)
                for (
                  c._next = l = c.nextSibling, c.parentNode.appendChild(c);
                  l && 3 === l.nodeType && " " === l.textContent;

                )
                  (c._next = l.nextSibling),
                    c.parentNode.appendChild(l),
                    (l = l.nextSibling);
              else
                c.parentNode._isSplit
                  ? ((c._parent = c.parentNode),
                    !c.previousSibling &&
                      c.firstChild &&
                      (c.firstChild._isFirst = !0),
                    c.nextSibling &&
                      " " === c.nextSibling.textContent &&
                      !c.nextSibling.nextSibling &&
                      N.push(c.nextSibling),
                    (c._next =
                      c.nextSibling && c.nextSibling._isFirst
                        ? null
                        : c.nextSibling),
                    c.parentNode.removeChild(c),
                    d.splice(a--, 1),
                    u--)
                  : p ||
                    ((y = !c.nextSibling && dl(c.parentNode, t, O)),
                    c.parentNode._parent && c.parentNode._parent.appendChild(c),
                    y && c.parentNode.appendChild(Ka.createTextNode(" ")),
                    "span" === M && (c.style.display = "inline"),
                    P.push(c));
            else
              c.parentNode._isSplit && !c._isSplit && "" !== c.innerHTML
                ? A.push(c)
                : I &&
                  !c._isSplit &&
                  ("span" === M && (c.style.display = "inline"), P.push(c));
          else
            B || j
              ? (c.parentNode && c.parentNode.removeChild(c),
                d.splice(a--, 1),
                u--)
              : L || t.appendChild(c);
        for (a = N.length; --a > -1; ) N[a].parentNode.removeChild(N[a]);
        if (B) {
          for (
            j &&
              ((v = Ka.createElement(M)),
              t.appendChild(v),
              (g = v.offsetWidth + "px"),
              (y = v.offsetParent === t ? 0 : t.offsetLeft),
              t.removeChild(v)),
              m = t.style.cssText,
              t.style.cssText = "display:none;";
            t.firstChild;

          )
            t.removeChild(t.firstChild);
          for (h = " " === O && (!j || (!L && !I)), a = 0; a < B.length; a++) {
            for (
              f = B[a],
                (v = Ka.createElement(M)).style.cssText =
                  "display:block;text-align:" +
                  T +
                  ";position:" +
                  (j ? "absolute;" : "relative;"),
                R && (v.className = R + (z ? a + 1 : "")),
                k.push(v),
                u = f.length,
                l = 0;
              l < u;
              l++
            )
              "BR" !== f[l].nodeName &&
                ((c = f[l]),
                v.appendChild(c),
                h && c._wordEnd && v.appendChild(Ka.createTextNode(" ")),
                j &&
                  (0 === l &&
                    ((v.style.top = c._y + "px"),
                    (v.style.left = x + y + "px")),
                  (c.style.top = "0px"),
                  y && (c.style.left = c._x - y + "px")));
            0 === u
              ? (v.innerHTML = "&nbsp;")
              : L || I || (pl(v), ul(v, String.fromCharCode(160), " ")),
              j && ((v.style.width = g), (v.style.height = c._h + "px")),
              t.appendChild(v);
          }
          t.style.cssText = m;
        }
        j &&
          (s > t.clientHeight &&
            ((t.style.height = s - S + "px"),
            t.clientHeight < s && (t.style.height = s + D + "px")),
          o > t.clientWidth &&
            ((t.style.width = o - C + "px"),
            t.clientWidth < o && (t.style.width = o + _ + "px"))),
          q && (W ? (t.style.display = W) : t.style.removeProperty("display")),
          cl(n, P),
          L && cl(i, A),
          cl(r, k);
      },
      ml = function (t, e, n, i) {
        var r,
          o,
          s,
          a,
          l,
          u,
          c,
          d,
          p = e.tag ? e.tag : e.span ? "span" : "div",
          f = ~(e.type || e.split || "chars,words,lines").indexOf("chars"),
          h = sl(e),
          m = e.wordDelimiter || " ",
          v = " " !== m ? "" : h ? "&#173; " : " ",
          g = "</" + p + ">",
          y = 1,
          b = e.specialChars
            ? "function" == typeof e.specialChars
              ? e.specialChars
              : al
            : null,
          x = Ka.createElement("div"),
          w = t.parentNode;
        for (
          w.insertBefore(x, t),
            x.textContent = t.nodeValue,
            w.removeChild(t),
            c =
              -1 !==
              (r = (function t(e) {
                var n = e.nodeType,
                  i = "";
                if (1 === n || 9 === n || 11 === n) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) i += t(e);
                } else if (3 === n || 4 === n) return e.nodeValue;
                return i;
              })((t = x))).indexOf("<"),
            !1 !== e.reduceWhiteSpace &&
              (r = r.replace(el, " ").replace(tl, "")),
            c && (r = r.split("<").join("{{LT}}")),
            l = r.length,
            o = (" " === r.charAt(0) ? v : "") + n(),
            s = 0;
          s < l;
          s++
        )
          if (((u = r.charAt(s)), b && (d = b(r.substr(s), e.specialChars))))
            (u = r.substr(s, d || 1)),
              (o += f && " " !== u ? i() + u + "</" + p + ">" : u),
              (s += d - 1);
          else if (u === m && r.charAt(s - 1) !== m && s) {
            for (o += y ? g : "", y = 0; r.charAt(s + 1) === m; ) (o += v), s++;
            s === l - 1
              ? (o += v)
              : ")" !== r.charAt(s + 1) && ((o += v + n()), (y = 1));
          } else
            "{" === u && "{{LT}}" === r.substr(s, 6)
              ? ((o += f ? i() + "{{LT}}</" + p + ">" : "{{LT}}"), (s += 5))
              : (u.charCodeAt(0) >= 55296 && u.charCodeAt(0) <= 56319) ||
                (r.charCodeAt(s + 1) >= 65024 && r.charCodeAt(s + 1) <= 65039)
              ? ((a = ((r.substr(s, 12).split(Qa) || [])[1] || "").length || 2),
                (o +=
                  f && " " !== u
                    ? i() + r.substr(s, a) + "</" + p + ">"
                    : r.substr(s, a)),
                (s += a - 1))
              : (o += f && " " !== u ? i() + u + "</" + p + ">" : u);
        (t.outerHTML = o + (y ? g : "")), c && ul(w, "{{LT}}", "<");
      },
      vl = function t(e, n, i, r) {
        var o,
          s,
          a = ol(e.childNodes),
          l = a.length,
          u = sl(n);
        if (3 !== e.nodeType || l > 1) {
          for (n.absolute = !1, o = 0; o < l; o++)
            ((s = a[o])._next = s._isFirst = s._parent = s._wordEnd = null),
              (3 !== s.nodeType || /\S+/.test(s.nodeValue)) &&
                (u &&
                  3 !== s.nodeType &&
                  "inline" === nl(s).display &&
                  ((s.style.display = "inline-block"),
                  (s.style.position = "relative")),
                (s._isSplit = !0),
                t(s, n, i, r));
          return (n.absolute = u), void (e._isSplit = !0);
        }
        ml(e, n, i, r);
      },
      gl = (function () {
        function t(t, e) {
          Ja || ((Ka = document), (Za = window), (Ja = 1)),
            (this.elements = ol(t)),
            (this.chars = []),
            (this.words = []),
            (this.lines = []),
            (this._originals = []),
            (this.vars = e || {}),
            this.split(e);
        }
        var e = t.prototype;
        return (
          (e.split = function (t) {
            this.isSplit && this.revert(),
              (this.vars = t = t || this.vars),
              (this._originals.length =
                this.chars.length =
                this.words.length =
                this.lines.length =
                  0);
            for (
              var e,
                n,
                i,
                r = this.elements.length,
                o = t.tag ? t.tag : t.span ? "span" : "div",
                s = ll(t.wordsClass, o),
                a = ll(t.charsClass, o);
              --r > -1;

            )
              (i = this.elements[r]),
                (this._originals[r] = i.innerHTML),
                (e = i.clientHeight),
                (n = i.clientWidth),
                vl(i, t, s, a),
                hl(i, t, this.chars, this.words, this.lines, n, e);
            return (
              this.chars.reverse(),
              this.words.reverse(),
              this.lines.reverse(),
              (this.isSplit = !0),
              this
            );
          }),
          (e.revert = function () {
            var t = this._originals;
            if (!t) throw "revert() call wasn't scoped properly.";
            return (
              this.elements.forEach(function (e, n) {
                return (e.innerHTML = t[n]);
              }),
              (this.chars = []),
              (this.words = []),
              (this.lines = []),
              (this.isSplit = !1),
              this
            );
          }),
          (t.create = function (e, n) {
            return new t(e, n);
          }),
          t
        );
      })();
    /*!
     * SplitText: 3.8.0
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */ gl.version = "3.8.0";
    var yl = function (t, e) {
        var n, i;
        void 0 === e && (e = {});
        var r = new Ui.timeline(),
          o = new gl(t, { type: "lines" });
        return (
          r.set(
            t,
            {
              perspective: "1000px",
              transformStyle: "preserve-3d",
              transformOrigin: "center center",
            },
            0
          ),
          r.set(o.lines, { willChange: "transform" }, 0),
          r.fromTo(
            o.lines,
            { opacity: 0 },
            {
              opacity: 1,
              stagger: null != (n = e.stagger) ? n : 0.15,
              duration: 0.15,
            },
            0
          ),
          r.fromTo(
            o.lines,
            { yPercent: 100, skewY: 2, scale: 0.8, rotateX: -60 },
            {
              yPercent: 0,
              skewY: 0,
              rotateX: 0,
              scale: 1,
              ease: "expo.out",
              stagger: null != (i = e.stagger) ? i : 0.1,
              duration: 2.3,
              force3D: !0,
              onComplete: function () {
                e.noRevert ||
                  window.addEventListener(
                    "resize",
                    function () {
                      return o.revert();
                    },
                    { once: !0 }
                  );
              },
            },
            0
          ),
          r.set(o.lines, { willChange: "auto" }),
          r
        );
      },
      bl = function (t, e) {
        var n;
        void 0 === e && (e = {});
        var i = new Ui.timeline();
        return (
          i.set(t, { willChange: "transform" }),
          i.fromTo(
            t,
            { scaleX: 1 },
            {
              scaleX: 0.98,
              duration: null != (n = e.duration) ? n : 1,
              ease: "none",
              force3D: !0,
            }
          ),
          i.set(t, { willChange: "auto" }),
          i
        );
      },
      xl = function (t, e, n) {
        var i;
        void 0 === n && (n = {});
        var r = new Ui.timeline();
        return (
          r.set(t, { willChange: "transform" }),
          r.to(t, {
            duration: null != (i = n.duration) ? i : 20,
            ease: "none",
            x: function () {
              return e.reduce(function (t, e) {
                return t - e.clientWidth;
              }, 0);
            },
            repeat: -1,
            force3D: !0,
          }),
          r.set(t, { willChange: "auto" }),
          r
        );
      },
      wl = function (t, e) {
        void 0 === e && (e = {});
        var n = new Ui.timeline(),
          i = t.querySelector(".pt-btn_cta-fill"),
          r = t.querySelector(".pt-btn_cta-title");
        return (
          n.set(i, { willChange: "transform" }, 0),
          n.from(i, { opacity: 0, duration: 0.1 }, 0),
          n.from(
            i,
            {
              scaleX: 0.3,
              duration: 1.6,
              ease: "elastic.out(0.4, 0.3)",
              force3D: !0,
            },
            0
          ),
          n.from(r, { opacity: 0, duration: 0.2 }, 0.2),
          n.set(r, { willChange: "auto" }),
          n
        );
      },
      Dl = function (t, e) {
        void 0 === e && (e = {});
        var n = new Ui.timeline(),
          i = t.querySelector("video,img");
        return (
          n.set([t, i], { willChange: "transform" }, 0),
          n.from(t, { opacity: 0, duration: 0.4 }, 0),
          n.from(
            t,
            { scale: 0.2, duration: 2, ease: "expo.out", force3D: !0 },
            0
          ),
          n.from(
            i,
            { scale: 1.7, duration: 2, ease: "expo.out", force3D: !0 },
            0
          ),
          n.set([t, i], { willChange: "auto" }),
          n
        );
      };
    function _l(t, e) {
      return (_l =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    Ui.registerPlugin(Ua);
    var Sl = (function (t) {
      var e, n;
      function i() {
        var e;
        return (
          ((e = t.apply(this, arguments) || this).page = e.app.get("page")),
          (e.navbar = e.app.get("navbar")),
          (e.cursor = e.app.get("cursor")),
          (e.wrap = e.el.querySelector(".pt-hero-wrap")),
          (e.fill = e.el.querySelector(".pt-hero-fill")),
          (e.line = e.el.querySelector(".pt-hero-line")),
          (e.linePath = e.line.querySelectorAll("path")),
          (e.mask = e.el.querySelectorAll(".pt-hero-mask")),
          (e.head = e.el.querySelector(".pt-hero-head")),
          (e.header = e.el.querySelector(".pt-hero-header h1")),
          (e.action = e.el.querySelector(".pt-hero-action")),
          (e.notice = e.el.querySelector(".pt-hero-notice")),
          (e.video = e.el.querySelector(".pt-hero-video")),
          (e.videoPlay = e.video.querySelector(" .pt-hero-video-play")),
          (e.videoPlayer = e.video.querySelector("video")),
          (e.footer = e.el.querySelector(".pt-hero-footer")),
          (e.headlines = e.el.querySelector(".pt-hero-headlines")),
          (e.headline = e.headlines.querySelectorAll(".pt-hero-headline")),
          e.bindVideoPlayer(),
          e
        );
      }
      (n = t),
        ((e = i).prototype = Object.create(n.prototype)),
        (e.prototype.constructor = e),
        _l(e, n);
      var r = i.prototype;
      return (
        (r.handleEnter = function () {
          this.enterTl = this.tlShow();
        }),
        (r.bindVideoPlayer = function () {
          var t = this;
          this.video.addEventListener("click", function () {
            t.videoPlayed ? t.stopDemoVideo() : t.playDemoVideo();
          }),
            this.cursor.follower &&
              (this.video.addEventListener("mouseenter", function () {
                t.videoLoaded &&
                  t.videoPlayed &&
                  t.cursor.follower.setIcon("times-o");
              }),
              this.video.addEventListener("mouseleave", function () {
                t.cursor.follower.removeIcon();
              }));
        }),
        (r.injectDemoVideo = function () {
          var t = this,
            e = document.createElement("video");
          (e.src = "/assets/video/home/hero/1-full.mp4"),
            this.videoPlayer.replaceWith(e),
            (this.videoPlayer = e),
            (this.videoLoaded = !0),
            e.load(),
            e.addEventListener("ended", function () {
              return t.stopDemoVideo();
            });
        }),
        (r.playDemoVideo = function () {
          this.videoLoaded || this.injectDemoVideo(),
            this.videoPlayer.play(),
            (this.videoPlay.style.display = "none"),
            (this.videoPlayed = !0),
            this.cursor.follower && this.cursor.follower.setIcon("times-o");
        }),
        (r.stopDemoVideo = function () {
          this.videoPlayer.pause(),
            (this.videoPlay.style.display = ""),
            (this.videoPlayed = !1),
            this.cursor.follower && this.cursor.follower.removeIcon();
        }),
        (r.tlShow = function () {
          var t = new Ui.timeline({ paused: !0 });
          return (
            t.add(yl(this.header, { stagger: 0.15 })),
            t.add(wl(this.action), 0.45),
            t.fromTo(
              this.notice,
              { opacity: 0 },
              { opacity: 1, duration: 0.6 },
              0.9
            ),
            t.set(this.video, { willChange: "transform" }),
            t.fromTo(
              this.video,
              { y: 40, opacity: 0 },
              { y: 0, opacity: 1, duration: 2, ease: "expo.out", force3D: !0 },
              0.8
            ),
            t.set(this.video, { willChange: "auto" }),
            t
          );
        }),
        (r.magicScroll = function () {
          bo.create({
            animation: this.tlScroll(),
            trigger: this.el,
            start: "top top",
            end: function () {
              return 2 * window.innerHeight;
            },
            scrub: this.page.mobile ? 0.5 : 0.3,
            invalidateOnRefresh: !0,
          });
        }),
        (r.tlScroll = function () {
          var t = new Ui.timeline(),
            e = Ui.getProperty(this.mask[0], "width"),
            n = window.innerWidth > 767 ? 1.5 : 1.2,
            i = (this.el.clientWidth / e) * n,
            r = (this.el.clientHeight / e) * n,
            o = Ui.getProperty(this.mask[0], "background-color");
          return (
            t.fromTo(
              this.mask[0],
              { scale: 0.1 },
              {
                scale: Math.max(r, i),
                duration: 0.6,
                ease: "none",
                force3D: !1,
              },
              0
            ),
            t.fromTo(
              this.line,
              { color: "#000" },
              { color: "#bbb", duration: 0.2, ease: "none" },
              0
            ),
            t.fromTo(
              this.linePath,
              { drawSVG: "0% 0%" },
              { drawSVG: "100% 0", duration: 0.7, ease: "none" },
              0
            ),
            t.set(this.fill, { backgroundColor: o }, 0.7),
            t.set(this.mask, { display: "none" }, 0.7),
            t.add(function () {}, 1),
            t
          );
        }),
        (r.magicHeadline = function () {
          var t = this;
          bo.saveStyles([this.roll, this.headline]),
            bo.matchMedia({
              "(max-width:1199px)": function () {
                t.headline.forEach(function (t, e) {
                  bo.create({
                    trigger: t,
                    start:
                      0 === e
                        ? "top bottom"
                        : 2 === e
                        ? "top bottom-=300"
                        : "top bottom-=200",
                    end:
                      0 === e
                        ? "bottom+=200 bottom"
                        : 2 === e
                        ? ""
                        : "bottom+=300 bottom",
                    toggleClass: "-active",
                  });
                });
              },
              "(min-width:1200px)": function () {
                bo.create({
                  animation: t.tlHeadlineRoll(),
                  trigger: t.footer,
                  start: "top top",
                  end: "300%",
                  pin: t.wrap,
                  scrub: 0.1,
                  invalidateOnRefresh: !0,
                });
              },
            });
        }),
        (r.tlHeadline = function () {
          var t = Ui.timeline();
          return (
            this.headline.forEach(function (e, n) {
              0 === n &&
                t.fromTo(
                  e,
                  { opacity: 1 },
                  { opacity: 0.4, duration: 0.1, ease: "none" },
                  0.2
                ),
                1 === n &&
                  (t.fromTo(
                    e,
                    { opacity: 0.4 },
                    { opacity: 1, duration: 0.1, ease: "none" },
                    0.3
                  ),
                  t.fromTo(
                    e,
                    { opacity: 1 },
                    { opacity: 0.4, duration: 0.1, ease: "none" },
                    0.63
                  )),
                2 === n &&
                  t.fromTo(
                    e,
                    { opacity: 0.4 },
                    { opacity: 1, duration: 0.1, ease: "none" },
                    0.75
                  );
            }),
            t.add(function () {}, 1),
            t
          );
        }),
        (r.tlHeadlineRoll = function () {
          var t = this,
            e = Ui.timeline();
          return (
            e.set(this.headlines, { willChange: "transform" }, 0),
            e.to(
              this.headlines,
              {
                x: function () {
                  return 2 * -t.headlines.offsetWidth;
                },
                duration: 1,
                ease: "none",
              },
              0
            ),
            this.headline.forEach(function (t, n) {
              0 === n &&
                e.fromTo(
                  t,
                  { opacity: 1 },
                  { opacity: 0.6, duration: 0.1, ease: "none" },
                  0.2
                ),
                1 === n &&
                  (e.fromTo(
                    t,
                    { opacity: 0.6 },
                    { opacity: 1, duration: 0.1, ease: "none" },
                    0.3
                  ),
                  e.fromTo(
                    t,
                    { opacity: 1 },
                    { opacity: 0.6, duration: 0.1, ease: "none" },
                    0.63
                  )),
                2 === n &&
                  e.fromTo(
                    t,
                    { opacity: 0.6 },
                    { opacity: 1, duration: 0.1, ease: "none" },
                    0.75
                  );
            }),
            e.set(this.headlines, { willChange: "auto" }),
            e
          );
        }),
        (r.magicFill = function () {
          var t = this;
          bo.saveStyles([this.fill]),
            bo.matchMedia({
              "(min-width:1024px)": function () {
                bo.create({
                  animation: bl(t.fill),
                  trigger: t.el,
                  start: "bottom bottom",
                  end: "bottom 90%",
                  scrub: 0.2,
                });
              },
            });
        }),
        (r.magicNavbarInverse = function () {
          var t = this;
          bo.matchMedia({
            "(min-width:1024px)": function () {
              bo.create({
                trigger: t.el,
                start: function () {
                  return 0.6 * window.innerHeight;
                },
                end: "bottom top+=70px",
                toggleClass: {
                  targets: t.app.get("navbar").el,
                  className: "-inverse",
                },
              });
            },
          });
        }),
        (r.onInit = function () {
          return new Promise(
            function (t, e) {
              return (
                this.magicScroll(),
                this.magicHeadline(),
                this.magicFill(),
                this.magicNavbarInverse(),
                this.handleEnter(),
                t()
              );
            }.bind(this)
          );
        }),
        (r.onEnter = function () {
          return new Promise(
            function (t, e) {
              if (this.enterTl)
                return Promise.resolve(this.enterTl.play()).then(
                  function (t) {
                    try {
                      return n.call(this);
                    } catch (t) {
                      return e(t);
                    }
                  }.bind(this),
                  e
                );
              function n() {
                return t();
              }
              return n.call(this);
            }.bind(this)
          );
        }),
        i
      );
    })(r);
    function Cl(t) {
      return (
        null !== t &&
        "object" == typeof t &&
        "constructor" in t &&
        t.constructor === Object
      );
    }
    function El(t = {}, e = {}) {
      Object.keys(e).forEach((n) => {
        void 0 === t[n]
          ? (t[n] = e[n])
          : Cl(e[n]) &&
            Cl(t[n]) &&
            Object.keys(e[n]).length > 0 &&
            El(t[n], e[n]);
      });
    }
    const Tl = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function Pl() {
      const t = "undefined" != typeof document ? document : {};
      return El(t, Tl), t;
    }
    const Al = {
      document: Tl,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (t) =>
        "undefined" == typeof setTimeout ? (t(), null) : setTimeout(t, 0),
      cancelAnimationFrame(t) {
        "undefined" != typeof setTimeout && clearTimeout(t);
      },
    };
    function kl() {
      const t = "undefined" != typeof window ? window : {};
      return El(t, Al), t;
    }
    class Ol extends Array {
      constructor(t) {
        "number" == typeof t
          ? super(t)
          : (super(...(t || [])),
            (function (t) {
              const e = t.__proto__;
              Object.defineProperty(t, "__proto__", {
                get: () => e,
                set(t) {
                  e.__proto__ = t;
                },
              });
            })(this));
      }
    }
    function Ml(t = []) {
      const e = [];
      return (
        t.forEach((t) => {
          Array.isArray(t) ? e.push(...Ml(t)) : e.push(t);
        }),
        e
      );
    }
    function Fl(t, e) {
      return Array.prototype.filter.call(t, e);
    }
    function Bl(t, e) {
      const n = kl(),
        i = Pl();
      let r = [];
      if (!e && t instanceof Ol) return t;
      if (!t) return new Ol(r);
      if ("string" == typeof t) {
        const n = t.trim();
        if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
          let t = "div";
          0 === n.indexOf("<li") && (t = "ul"),
            0 === n.indexOf("<tr") && (t = "tbody"),
            (0 !== n.indexOf("<td") && 0 !== n.indexOf("<th")) || (t = "tr"),
            0 === n.indexOf("<tbody") && (t = "table"),
            0 === n.indexOf("<option") && (t = "select");
          const e = i.createElement(t);
          e.innerHTML = n;
          for (let t = 0; t < e.childNodes.length; t += 1)
            r.push(e.childNodes[t]);
        } else
          r = (function (t, e) {
            if ("string" != typeof t) return [t];
            const n = [],
              i = e.querySelectorAll(t);
            for (let t = 0; t < i.length; t += 1) n.push(i[t]);
            return n;
          })(t.trim(), e || i);
      } else if (t.nodeType || t === n || t === i) r.push(t);
      else if (Array.isArray(t)) {
        if (t instanceof Ol) return t;
        r = t;
      }
      return new Ol(
        (function (t) {
          const e = [];
          for (let n = 0; n < t.length; n += 1)
            -1 === e.indexOf(t[n]) && e.push(t[n]);
          return e;
        })(r)
      );
    }
    Bl.fn = Ol.prototype;
    const Ll = "resize scroll".split(" ");
    function Il(t) {
      return function (...e) {
        if (void 0 === e[0]) {
          for (let e = 0; e < this.length; e += 1)
            Ll.indexOf(t) < 0 &&
              (t in this[e] ? this[e][t]() : Bl(this[e]).trigger(t));
          return this;
        }
        return this.on(t, ...e);
      };
    }
    Il("click"),
      Il("blur"),
      Il("focus"),
      Il("focusin"),
      Il("focusout"),
      Il("keyup"),
      Il("keydown"),
      Il("keypress"),
      Il("submit"),
      Il("change"),
      Il("mousedown"),
      Il("mousemove"),
      Il("mouseup"),
      Il("mouseenter"),
      Il("mouseleave"),
      Il("mouseout"),
      Il("mouseover"),
      Il("touchstart"),
      Il("touchend"),
      Il("touchmove"),
      Il("resize"),
      Il("scroll");
    const jl = {
      addClass: function (...t) {
        const e = Ml(t.map((t) => t.split(" ")));
        return (
          this.forEach((t) => {
            t.classList.add(...e);
          }),
          this
        );
      },
      removeClass: function (...t) {
        const e = Ml(t.map((t) => t.split(" ")));
        return (
          this.forEach((t) => {
            t.classList.remove(...e);
          }),
          this
        );
      },
      hasClass: function (...t) {
        const e = Ml(t.map((t) => t.split(" ")));
        return (
          Fl(this, (t) => e.filter((e) => t.classList.contains(e)).length > 0)
            .length > 0
        );
      },
      toggleClass: function (...t) {
        const e = Ml(t.map((t) => t.split(" ")));
        this.forEach((t) => {
          e.forEach((e) => {
            t.classList.toggle(e);
          });
        });
      },
      attr: function (t, e) {
        if (1 === arguments.length && "string" == typeof t)
          return this[0] ? this[0].getAttribute(t) : void 0;
        for (let n = 0; n < this.length; n += 1)
          if (2 === arguments.length) this[n].setAttribute(t, e);
          else
            for (const e in t)
              (this[n][e] = t[e]), this[n].setAttribute(e, t[e]);
        return this;
      },
      removeAttr: function (t) {
        for (let e = 0; e < this.length; e += 1) this[e].removeAttribute(t);
        return this;
      },
      transform: function (t) {
        for (let e = 0; e < this.length; e += 1) this[e].style.transform = t;
        return this;
      },
      transition: function (t) {
        for (let e = 0; e < this.length; e += 1)
          this[e].style.transitionDuration =
            "string" != typeof t ? t + "ms" : t;
        return this;
      },
      on: function (...t) {
        let [e, n, i, r] = t;
        function o(t) {
          const e = t.target;
          if (!e) return;
          const r = t.target.dom7EventData || [];
          if ((r.indexOf(t) < 0 && r.unshift(t), Bl(e).is(n))) i.apply(e, r);
          else {
            const t = Bl(e).parents();
            for (let e = 0; e < t.length; e += 1)
              Bl(t[e]).is(n) && i.apply(t[e], r);
          }
        }
        function s(t) {
          const e = (t && t.target && t.target.dom7EventData) || [];
          e.indexOf(t) < 0 && e.unshift(t), i.apply(this, e);
        }
        "function" == typeof t[1] && (([e, i, r] = t), (n = void 0)),
          r || (r = !1);
        const a = e.split(" ");
        let l;
        for (let t = 0; t < this.length; t += 1) {
          const e = this[t];
          if (n)
            for (l = 0; l < a.length; l += 1) {
              const t = a[l];
              e.dom7LiveListeners || (e.dom7LiveListeners = {}),
                e.dom7LiveListeners[t] || (e.dom7LiveListeners[t] = []),
                e.dom7LiveListeners[t].push({ listener: i, proxyListener: o }),
                e.addEventListener(t, o, r);
            }
          else
            for (l = 0; l < a.length; l += 1) {
              const t = a[l];
              e.dom7Listeners || (e.dom7Listeners = {}),
                e.dom7Listeners[t] || (e.dom7Listeners[t] = []),
                e.dom7Listeners[t].push({ listener: i, proxyListener: s }),
                e.addEventListener(t, s, r);
            }
        }
        return this;
      },
      off: function (...t) {
        let [e, n, i, r] = t;
        "function" == typeof t[1] && (([e, i, r] = t), (n = void 0)),
          r || (r = !1);
        const o = e.split(" ");
        for (let t = 0; t < o.length; t += 1) {
          const e = o[t];
          for (let t = 0; t < this.length; t += 1) {
            const o = this[t];
            let s;
            if (
              (!n && o.dom7Listeners
                ? (s = o.dom7Listeners[e])
                : n && o.dom7LiveListeners && (s = o.dom7LiveListeners[e]),
              s && s.length)
            )
              for (let t = s.length - 1; t >= 0; t -= 1) {
                const n = s[t];
                (i && n.listener === i) ||
                (i &&
                  n.listener &&
                  n.listener.dom7proxy &&
                  n.listener.dom7proxy === i)
                  ? (o.removeEventListener(e, n.proxyListener, r),
                    s.splice(t, 1))
                  : i ||
                    (o.removeEventListener(e, n.proxyListener, r),
                    s.splice(t, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...t) {
        const e = kl(),
          n = t[0].split(" "),
          i = t[1];
        for (let r = 0; r < n.length; r += 1) {
          const o = n[r];
          for (let n = 0; n < this.length; n += 1) {
            const r = this[n];
            if (e.CustomEvent) {
              const n = new e.CustomEvent(o, {
                detail: i,
                bubbles: !0,
                cancelable: !0,
              });
              (r.dom7EventData = t.filter((t, e) => e > 0)),
                r.dispatchEvent(n),
                (r.dom7EventData = []),
                delete r.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (t) {
        const e = this;
        return (
          t &&
            e.on("transitionend", function n(i) {
              i.target === this && (t.call(this, i), e.off("transitionend", n));
            }),
          this
        );
      },
      outerWidth: function (t) {
        if (this.length > 0) {
          if (t) {
            const t = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(t.getPropertyValue("margin-right")) +
              parseFloat(t.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (t) {
        if (this.length > 0) {
          if (t) {
            const t = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(t.getPropertyValue("margin-top")) +
              parseFloat(t.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        const t = kl();
        return this[0] ? t.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const t = kl(),
            e = Pl(),
            n = this[0],
            i = n.getBoundingClientRect(),
            r = e.body,
            o = n.clientTop || r.clientTop || 0,
            s = n.clientLeft || r.clientLeft || 0,
            a = n === t ? t.scrollY : n.scrollTop,
            l = n === t ? t.scrollX : n.scrollLeft;
          return { top: i.top + a - o, left: i.left + l - s };
        }
        return null;
      },
      css: function (t, e) {
        const n = kl();
        let i;
        if (1 === arguments.length) {
          if ("string" != typeof t) {
            for (i = 0; i < this.length; i += 1)
              for (const e in t) this[i].style[e] = t[e];
            return this;
          }
          if (this[0])
            return n.getComputedStyle(this[0], null).getPropertyValue(t);
        }
        if (2 === arguments.length && "string" == typeof t) {
          for (i = 0; i < this.length; i += 1) this[i].style[t] = e;
          return this;
        }
        return this;
      },
      each: function (t) {
        return t
          ? (this.forEach((e, n) => {
              t.apply(e, [e, n]);
            }),
            this)
          : this;
      },
      html: function (t) {
        if (void 0 === t) return this[0] ? this[0].innerHTML : null;
        for (let e = 0; e < this.length; e += 1) this[e].innerHTML = t;
        return this;
      },
      text: function (t) {
        if (void 0 === t) return this[0] ? this[0].textContent.trim() : null;
        for (let e = 0; e < this.length; e += 1) this[e].textContent = t;
        return this;
      },
      is: function (t) {
        const e = kl(),
          n = Pl(),
          i = this[0];
        let r, o;
        if (!i || void 0 === t) return !1;
        if ("string" == typeof t) {
          if (i.matches) return i.matches(t);
          if (i.webkitMatchesSelector) return i.webkitMatchesSelector(t);
          if (i.msMatchesSelector) return i.msMatchesSelector(t);
          for (r = Bl(t), o = 0; o < r.length; o += 1)
            if (r[o] === i) return !0;
          return !1;
        }
        if (t === n) return i === n;
        if (t === e) return i === e;
        if (t.nodeType || t instanceof Ol) {
          for (r = t.nodeType ? [t] : t, o = 0; o < r.length; o += 1)
            if (r[o] === i) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let t,
          e = this[0];
        if (e) {
          for (t = 0; null !== (e = e.previousSibling); )
            1 === e.nodeType && (t += 1);
          return t;
        }
      },
      eq: function (t) {
        if (void 0 === t) return this;
        const e = this.length;
        if (t > e - 1) return Bl([]);
        if (t < 0) {
          const n = e + t;
          return Bl(n < 0 ? [] : [this[n]]);
        }
        return Bl([this[t]]);
      },
      append: function (...t) {
        let e;
        const n = Pl();
        for (let i = 0; i < t.length; i += 1) {
          e = t[i];
          for (let t = 0; t < this.length; t += 1)
            if ("string" == typeof e) {
              const i = n.createElement("div");
              for (i.innerHTML = e; i.firstChild; )
                this[t].appendChild(i.firstChild);
            } else if (e instanceof Ol)
              for (let n = 0; n < e.length; n += 1) this[t].appendChild(e[n]);
            else this[t].appendChild(e);
        }
        return this;
      },
      prepend: function (t) {
        const e = Pl();
        let n, i;
        for (n = 0; n < this.length; n += 1)
          if ("string" == typeof t) {
            const r = e.createElement("div");
            for (r.innerHTML = t, i = r.childNodes.length - 1; i >= 0; i -= 1)
              this[n].insertBefore(r.childNodes[i], this[n].childNodes[0]);
          } else if (t instanceof Ol)
            for (i = 0; i < t.length; i += 1)
              this[n].insertBefore(t[i], this[n].childNodes[0]);
          else this[n].insertBefore(t, this[n].childNodes[0]);
        return this;
      },
      next: function (t) {
        return this.length > 0
          ? t
            ? this[0].nextElementSibling && Bl(this[0].nextElementSibling).is(t)
              ? Bl([this[0].nextElementSibling])
              : Bl([])
            : this[0].nextElementSibling
            ? Bl([this[0].nextElementSibling])
            : Bl([])
          : Bl([]);
      },
      nextAll: function (t) {
        const e = [];
        let n = this[0];
        if (!n) return Bl([]);
        for (; n.nextElementSibling; ) {
          const i = n.nextElementSibling;
          t ? Bl(i).is(t) && e.push(i) : e.push(i), (n = i);
        }
        return Bl(e);
      },
      prev: function (t) {
        if (this.length > 0) {
          const e = this[0];
          return t
            ? e.previousElementSibling && Bl(e.previousElementSibling).is(t)
              ? Bl([e.previousElementSibling])
              : Bl([])
            : e.previousElementSibling
            ? Bl([e.previousElementSibling])
            : Bl([]);
        }
        return Bl([]);
      },
      prevAll: function (t) {
        const e = [];
        let n = this[0];
        if (!n) return Bl([]);
        for (; n.previousElementSibling; ) {
          const i = n.previousElementSibling;
          t ? Bl(i).is(t) && e.push(i) : e.push(i), (n = i);
        }
        return Bl(e);
      },
      parent: function (t) {
        const e = [];
        for (let n = 0; n < this.length; n += 1)
          null !== this[n].parentNode &&
            (t
              ? Bl(this[n].parentNode).is(t) && e.push(this[n].parentNode)
              : e.push(this[n].parentNode));
        return Bl(e);
      },
      parents: function (t) {
        const e = [];
        for (let n = 0; n < this.length; n += 1) {
          let i = this[n].parentNode;
          for (; i; )
            t ? Bl(i).is(t) && e.push(i) : e.push(i), (i = i.parentNode);
        }
        return Bl(e);
      },
      closest: function (t) {
        let e = this;
        return void 0 === t ? Bl([]) : (e.is(t) || (e = e.parents(t).eq(0)), e);
      },
      find: function (t) {
        const e = [];
        for (let n = 0; n < this.length; n += 1) {
          const i = this[n].querySelectorAll(t);
          for (let t = 0; t < i.length; t += 1) e.push(i[t]);
        }
        return Bl(e);
      },
      children: function (t) {
        const e = [];
        for (let n = 0; n < this.length; n += 1) {
          const i = this[n].children;
          for (let n = 0; n < i.length; n += 1)
            (t && !Bl(i[n]).is(t)) || e.push(i[n]);
        }
        return Bl(e);
      },
      filter: function (t) {
        return Bl(Fl(this, t));
      },
      remove: function () {
        for (let t = 0; t < this.length; t += 1)
          this[t].parentNode && this[t].parentNode.removeChild(this[t]);
        return this;
      },
    };
    Object.keys(jl).forEach((t) => {
      Object.defineProperty(Bl.fn, t, { value: jl[t], writable: !0 });
    });
    var Rl = Bl;
    function zl(t, e = 0) {
      return setTimeout(t, e);
    }
    function Nl() {
      return Date.now();
    }
    function ql(t, e = "x") {
      const n = kl();
      let i, r, o;
      const s = (function (t) {
        const e = kl();
        let n;
        return (
          e.getComputedStyle && (n = e.getComputedStyle(t, null)),
          !n && t.currentStyle && (n = t.currentStyle),
          n || (n = t.style),
          n
        );
      })(t);
      return (
        n.WebKitCSSMatrix
          ? ((r = s.transform || s.webkitTransform),
            r.split(",").length > 6 &&
              (r = r
                .split(", ")
                .map((t) => t.replace(",", "."))
                .join(", ")),
            (o = new n.WebKitCSSMatrix("none" === r ? "" : r)))
          : ((o =
              s.MozTransform ||
              s.OTransform ||
              s.MsTransform ||
              s.msTransform ||
              s.transform ||
              s
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (i = o.toString().split(","))),
        "x" === e &&
          (r = n.WebKitCSSMatrix
            ? o.m41
            : 16 === i.length
            ? parseFloat(i[12])
            : parseFloat(i[4])),
        "y" === e &&
          (r = n.WebKitCSSMatrix
            ? o.m42
            : 16 === i.length
            ? parseFloat(i[13])
            : parseFloat(i[5])),
        r || 0
      );
    }
    function Wl(t) {
      return (
        "object" == typeof t &&
        null !== t &&
        t.constructor &&
        "Object" === Object.prototype.toString.call(t).slice(8, -1)
      );
    }
    function Vl(...t) {
      const e = Object(t[0]),
        n = ["__proto__", "constructor", "prototype"];
      for (let r = 1; r < t.length; r += 1) {
        const o = t[r];
        if (
          null != o &&
          ((i = o),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? i instanceof HTMLElement
            : i && (1 === i.nodeType || 11 === i.nodeType)))
        ) {
          const t = Object.keys(Object(o)).filter((t) => n.indexOf(t) < 0);
          for (let n = 0, i = t.length; n < i; n += 1) {
            const i = t[n],
              r = Object.getOwnPropertyDescriptor(o, i);
            void 0 !== r &&
              r.enumerable &&
              (Wl(e[i]) && Wl(o[i])
                ? o[i].__swiper__
                  ? (e[i] = o[i])
                  : Vl(e[i], o[i])
                : !Wl(e[i]) && Wl(o[i])
                ? ((e[i] = {}),
                  o[i].__swiper__ ? (e[i] = o[i]) : Vl(e[i], o[i]))
                : (e[i] = o[i]));
          }
        }
      }
      var i;
      return e;
    }
    function Hl(t, e, n) {
      t.style.setProperty(e, n);
    }
    function Gl({ swiper: t, targetPosition: e, side: n }) {
      const i = kl(),
        r = -t.translate;
      let o,
        s = null;
      const a = t.params.speed;
      (t.wrapperEl.style.scrollSnapType = "none"),
        i.cancelAnimationFrame(t.cssModeFrameID);
      const l = e > r ? "next" : "prev",
        u = (t, e) => ("next" === l && t >= e) || ("prev" === l && t <= e),
        c = () => {
          (o = new Date().getTime()), null === s && (s = o);
          const l = Math.max(Math.min((o - s) / a, 1), 0),
            d = 0.5 - Math.cos(l * Math.PI) / 2;
          let p = r + d * (e - r);
          if ((u(p, e) && (p = e), t.wrapperEl.scrollTo({ [n]: p }), u(p, e)))
            return (
              (t.wrapperEl.style.overflow = "hidden"),
              (t.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (t.wrapperEl.style.overflow = ""),
                  t.wrapperEl.scrollTo({ [n]: p });
              }),
              void i.cancelAnimationFrame(t.cssModeFrameID)
            );
          t.cssModeFrameID = i.requestAnimationFrame(c);
        };
      c();
    }
    let $l;
    function Xl() {
      return (
        $l ||
          ($l = (function () {
            const t = kl(),
              e = Pl();
            return {
              smoothScroll:
                e.documentElement &&
                "scrollBehavior" in e.documentElement.style,
              touch: !!(
                "ontouchstart" in t ||
                (t.DocumentTouch && e instanceof t.DocumentTouch)
              ),
              passiveListener: (function () {
                let e = !1;
                try {
                  const n = Object.defineProperty({}, "passive", {
                    get() {
                      e = !0;
                    },
                  });
                  t.addEventListener("testPassiveListener", null, n);
                } catch (t) {}
                return e;
              })(),
              gestures: "ongesturestart" in t,
            };
          })()),
        $l
      );
    }
    let Yl;
    function Ul(t = {}) {
      return (
        Yl ||
          (Yl = (function ({ userAgent: t } = {}) {
            const e = Xl(),
              n = kl(),
              i = n.navigator.platform,
              r = t || n.navigator.userAgent,
              o = { ios: !1, android: !1 },
              s = n.screen.width,
              a = n.screen.height,
              l = r.match(/(Android);?[\s\/]+([\d.]+)?/);
            let u = r.match(/(iPad).*OS\s([\d_]+)/);
            const c = r.match(/(iPod)(.*OS\s([\d_]+))?/),
              d = !u && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              p = "Win32" === i;
            let f = "MacIntel" === i;
            return (
              !u &&
                f &&
                e.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${s}x${a}`) >= 0 &&
                ((u = r.match(/(Version)\/([\d.]+)/)),
                u || (u = [0, 1, "13_0_0"]),
                (f = !1)),
              l && !p && ((o.os = "android"), (o.android = !0)),
              (u || d || c) && ((o.os = "ios"), (o.ios = !0)),
              o
            );
          })(t)),
        Yl
      );
    }
    let Ql;
    function Kl() {
      return (
        Ql ||
          (Ql = (function () {
            const t = kl();
            return {
              isSafari: (function () {
                const e = t.navigator.userAgent.toLowerCase();
                return (
                  e.indexOf("safari") >= 0 &&
                  e.indexOf("chrome") < 0 &&
                  e.indexOf("android") < 0
                );
              })(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                t.navigator.userAgent
              ),
            };
          })()),
        Ql
      );
    }
    function Zl({ swiper: t, runCallbacks: e, direction: n, step: i }) {
      const { activeIndex: r, previousIndex: o } = t;
      let s = n;
      if (
        (s || (s = r > o ? "next" : r < o ? "prev" : "reset"),
        t.emit("transition" + i),
        e && r !== o)
      ) {
        if ("reset" === s) return void t.emit("slideResetTransition" + i);
        t.emit("slideChangeTransition" + i),
          "next" === s
            ? t.emit("slideNextTransition" + i)
            : t.emit("slidePrevTransition" + i);
      }
    }
    function Jl(t) {
      const e = this,
        n = Pl(),
        i = kl(),
        r = e.touchEventsData,
        { params: o, touches: s, enabled: a } = e;
      if (!a) return;
      if (e.animating && o.preventInteractionOnTransition) return;
      !e.animating && o.cssMode && o.loop && e.loopFix();
      let l = t;
      l.originalEvent && (l = l.originalEvent);
      let u = Rl(l.target);
      if ("wrapper" === o.touchEventsTarget && !u.closest(e.wrapperEl).length)
        return;
      if (
        ((r.isTouchEvent = "touchstart" === l.type),
        !r.isTouchEvent && "which" in l && 3 === l.which)
      )
        return;
      if (!r.isTouchEvent && "button" in l && l.button > 0) return;
      if (r.isTouched && r.isMoved) return;
      !!o.noSwipingClass &&
        "" !== o.noSwipingClass &&
        l.target &&
        l.target.shadowRoot &&
        t.path &&
        t.path[0] &&
        (u = Rl(t.path[0]));
      const c = o.noSwipingSelector
          ? o.noSwipingSelector
          : "." + o.noSwipingClass,
        d = !(!l.target || !l.target.shadowRoot);
      if (
        o.noSwiping &&
        (d
          ? (function (t, e = this) {
              return (function e(n) {
                return n && n !== Pl() && n !== kl()
                  ? (n.assignedSlot && (n = n.assignedSlot),
                    n.closest(t) || e(n.getRootNode().host))
                  : null;
              })(e);
            })(c, l.target)
          : u.closest(c)[0])
      )
        return void (e.allowClick = !0);
      if (o.swipeHandler && !u.closest(o.swipeHandler)[0]) return;
      (s.currentX =
        "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
        (s.currentY =
          "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
      const p = s.currentX,
        f = s.currentY,
        h = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
        m = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
      if (h && (p <= m || p >= i.innerWidth - m)) {
        if ("prevent" !== h) return;
        t.preventDefault();
      }
      if (
        (Object.assign(r, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
        (s.startX = p),
        (s.startY = f),
        (r.touchStartTime = Nl()),
        (e.allowClick = !0),
        e.updateSize(),
        (e.swipeDirection = void 0),
        o.threshold > 0 && (r.allowThresholdMove = !1),
        "touchstart" !== l.type)
      ) {
        let t = !0;
        u.is(r.focusableElements) && (t = !1),
          n.activeElement &&
            Rl(n.activeElement).is(r.focusableElements) &&
            n.activeElement !== u[0] &&
            n.activeElement.blur();
        const i = t && e.allowTouchMove && o.touchStartPreventDefault;
        (!o.touchStartForcePreventDefault && !i) ||
          u[0].isContentEditable ||
          l.preventDefault();
      }
      e.emit("touchStart", l);
    }
    function tu(t) {
      const e = Pl(),
        n = this,
        i = n.touchEventsData,
        { params: r, touches: o, rtlTranslate: s, enabled: a } = n;
      if (!a) return;
      let l = t;
      if ((l.originalEvent && (l = l.originalEvent), !i.isTouched))
        return void (
          i.startMoving &&
          i.isScrolling &&
          n.emit("touchMoveOpposite", l)
        );
      if (i.isTouchEvent && "touchmove" !== l.type) return;
      const u =
          "touchmove" === l.type &&
          l.targetTouches &&
          (l.targetTouches[0] || l.changedTouches[0]),
        c = "touchmove" === l.type ? u.pageX : l.pageX,
        d = "touchmove" === l.type ? u.pageY : l.pageY;
      if (l.preventedByNestedSwiper) return (o.startX = c), void (o.startY = d);
      if (!n.allowTouchMove)
        return (
          (n.allowClick = !1),
          void (
            i.isTouched &&
            (Object.assign(o, {
              startX: c,
              startY: d,
              currentX: c,
              currentY: d,
            }),
            (i.touchStartTime = Nl()))
          )
        );
      if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
        if (n.isVertical()) {
          if (
            (d < o.startY && n.translate <= n.maxTranslate()) ||
            (d > o.startY && n.translate >= n.minTranslate())
          )
            return (i.isTouched = !1), void (i.isMoved = !1);
        } else if (
          (c < o.startX && n.translate <= n.maxTranslate()) ||
          (c > o.startX && n.translate >= n.minTranslate())
        )
          return;
      if (
        i.isTouchEvent &&
        e.activeElement &&
        l.target === e.activeElement &&
        Rl(l.target).is(i.focusableElements)
      )
        return (i.isMoved = !0), void (n.allowClick = !1);
      if (
        (i.allowTouchCallbacks && n.emit("touchMove", l),
        l.targetTouches && l.targetTouches.length > 1)
      )
        return;
      (o.currentX = c), (o.currentY = d);
      const p = o.currentX - o.startX,
        f = o.currentY - o.startY;
      if (n.params.threshold && Math.sqrt(p ** 2 + f ** 2) < n.params.threshold)
        return;
      if (void 0 === i.isScrolling) {
        let t;
        (n.isHorizontal() && o.currentY === o.startY) ||
        (n.isVertical() && o.currentX === o.startX)
          ? (i.isScrolling = !1)
          : p * p + f * f >= 25 &&
            ((t = (180 * Math.atan2(Math.abs(f), Math.abs(p))) / Math.PI),
            (i.isScrolling = n.isHorizontal()
              ? t > r.touchAngle
              : 90 - t > r.touchAngle));
      }
      if (
        (i.isScrolling && n.emit("touchMoveOpposite", l),
        void 0 === i.startMoving &&
          ((o.currentX === o.startX && o.currentY === o.startY) ||
            (i.startMoving = !0)),
        i.isScrolling)
      )
        return void (i.isTouched = !1);
      if (!i.startMoving) return;
      (n.allowClick = !1),
        !r.cssMode && l.cancelable && l.preventDefault(),
        r.touchMoveStopPropagation && !r.nested && l.stopPropagation(),
        i.isMoved ||
          (r.loop && !r.cssMode && n.loopFix(),
          (i.startTranslate = n.getTranslate()),
          n.setTransition(0),
          n.animating &&
            n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (i.allowMomentumBounce = !1),
          !r.grabCursor ||
            (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) ||
            n.setGrabCursor(!0),
          n.emit("sliderFirstMove", l)),
        n.emit("sliderMove", l),
        (i.isMoved = !0);
      let h = n.isHorizontal() ? p : f;
      (o.diff = h),
        (h *= r.touchRatio),
        s && (h = -h),
        (n.swipeDirection = h > 0 ? "prev" : "next"),
        (i.currentTranslate = h + i.startTranslate);
      let m = !0,
        v = r.resistanceRatio;
      if (
        (r.touchReleaseOnEdges && (v = 0),
        h > 0 && i.currentTranslate > n.minTranslate()
          ? ((m = !1),
            r.resistance &&
              (i.currentTranslate =
                n.minTranslate() -
                1 +
                (-n.minTranslate() + i.startTranslate + h) ** v))
          : h < 0 &&
            i.currentTranslate < n.maxTranslate() &&
            ((m = !1),
            r.resistance &&
              (i.currentTranslate =
                n.maxTranslate() +
                1 -
                (n.maxTranslate() - i.startTranslate - h) ** v)),
        m && (l.preventedByNestedSwiper = !0),
        !n.allowSlideNext &&
          "next" === n.swipeDirection &&
          i.currentTranslate < i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        !n.allowSlidePrev &&
          "prev" === n.swipeDirection &&
          i.currentTranslate > i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        n.allowSlidePrev ||
          n.allowSlideNext ||
          (i.currentTranslate = i.startTranslate),
        r.threshold > 0)
      ) {
        if (!(Math.abs(h) > r.threshold || i.allowThresholdMove))
          return void (i.currentTranslate = i.startTranslate);
        if (!i.allowThresholdMove)
          return (
            (i.allowThresholdMove = !0),
            (o.startX = o.currentX),
            (o.startY = o.currentY),
            (i.currentTranslate = i.startTranslate),
            void (o.diff = n.isHorizontal()
              ? o.currentX - o.startX
              : o.currentY - o.startY)
          );
      }
      r.followFinger &&
        !r.cssMode &&
        (((r.freeMode && r.freeMode.enabled && n.freeMode) ||
          r.watchSlidesProgress) &&
          (n.updateActiveIndex(), n.updateSlidesClasses()),
        n.params.freeMode &&
          r.freeMode.enabled &&
          n.freeMode &&
          n.freeMode.onTouchMove(),
        n.updateProgress(i.currentTranslate),
        n.setTranslate(i.currentTranslate));
    }
    function eu(t) {
      const e = this,
        n = e.touchEventsData,
        {
          params: i,
          touches: r,
          rtlTranslate: o,
          slidesGrid: s,
          enabled: a,
        } = e;
      if (!a) return;
      let l = t;
      if (
        (l.originalEvent && (l = l.originalEvent),
        n.allowTouchCallbacks && e.emit("touchEnd", l),
        (n.allowTouchCallbacks = !1),
        !n.isTouched)
      )
        return (
          n.isMoved && i.grabCursor && e.setGrabCursor(!1),
          (n.isMoved = !1),
          void (n.startMoving = !1)
        );
      i.grabCursor &&
        n.isMoved &&
        n.isTouched &&
        (!0 === e.allowSlideNext || !0 === e.allowSlidePrev) &&
        e.setGrabCursor(!1);
      const u = Nl(),
        c = u - n.touchStartTime;
      if (e.allowClick) {
        const t = l.path || (l.composedPath && l.composedPath());
        e.updateClickedSlide((t && t[0]) || l.target),
          e.emit("tap click", l),
          c < 300 &&
            u - n.lastClickTime < 300 &&
            e.emit("doubleTap doubleClick", l);
      }
      if (
        ((n.lastClickTime = Nl()),
        zl(() => {
          e.destroyed || (e.allowClick = !0);
        }),
        !n.isTouched ||
          !n.isMoved ||
          !e.swipeDirection ||
          0 === r.diff ||
          n.currentTranslate === n.startTranslate)
      )
        return (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1);
      let d;
      if (
        ((n.isTouched = !1),
        (n.isMoved = !1),
        (n.startMoving = !1),
        (d = i.followFinger
          ? o
            ? e.translate
            : -e.translate
          : -n.currentTranslate),
        i.cssMode)
      )
        return;
      if (e.params.freeMode && i.freeMode.enabled)
        return void e.freeMode.onTouchEnd({ currentPos: d });
      let p = 0,
        f = e.slidesSizesGrid[0];
      for (
        let t = 0;
        t < s.length;
        t += t < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
      ) {
        const e = t < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        void 0 !== s[t + e]
          ? d >= s[t] && d < s[t + e] && ((p = t), (f = s[t + e] - s[t]))
          : d >= s[t] && ((p = t), (f = s[s.length - 1] - s[s.length - 2]));
      }
      const h = (d - s[p]) / f,
        m = p < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
      if (c > i.longSwipesMs) {
        if (!i.longSwipes) return void e.slideTo(e.activeIndex);
        "next" === e.swipeDirection &&
          (h >= i.longSwipesRatio ? e.slideTo(p + m) : e.slideTo(p)),
          "prev" === e.swipeDirection &&
            (h > 1 - i.longSwipesRatio ? e.slideTo(p + m) : e.slideTo(p));
      } else {
        if (!i.shortSwipes) return void e.slideTo(e.activeIndex);
        e.navigation &&
        (l.target === e.navigation.nextEl || l.target === e.navigation.prevEl)
          ? l.target === e.navigation.nextEl
            ? e.slideTo(p + m)
            : e.slideTo(p)
          : ("next" === e.swipeDirection && e.slideTo(p + m),
            "prev" === e.swipeDirection && e.slideTo(p));
      }
    }
    function nu() {
      const t = this,
        { params: e, el: n } = t;
      if (n && 0 === n.offsetWidth) return;
      e.breakpoints && t.setBreakpoint();
      const { allowSlideNext: i, allowSlidePrev: r, snapGrid: o } = t;
      (t.allowSlideNext = !0),
        (t.allowSlidePrev = !0),
        t.updateSize(),
        t.updateSlides(),
        t.updateSlidesClasses(),
        ("auto" === e.slidesPerView || e.slidesPerView > 1) &&
        t.isEnd &&
        !t.isBeginning &&
        !t.params.centeredSlides
          ? t.slideTo(t.slides.length - 1, 0, !1, !0)
          : t.slideTo(t.activeIndex, 0, !1, !0),
        t.autoplay &&
          t.autoplay.running &&
          t.autoplay.paused &&
          t.autoplay.run(),
        (t.allowSlidePrev = r),
        (t.allowSlideNext = i),
        t.params.watchOverflow && o !== t.snapGrid && t.checkOverflow();
    }
    function iu(t) {
      const e = this;
      e.enabled &&
        (e.allowClick ||
          (e.params.preventClicks && t.preventDefault(),
          e.params.preventClicksPropagation &&
            e.animating &&
            (t.stopPropagation(), t.stopImmediatePropagation())));
    }
    function ru() {
      const t = this,
        { wrapperEl: e, rtlTranslate: n, enabled: i } = t;
      if (!i) return;
      let r;
      (t.previousTranslate = t.translate),
        t.isHorizontal()
          ? (t.translate = -e.scrollLeft)
          : (t.translate = -e.scrollTop),
        -0 === t.translate && (t.translate = 0),
        t.updateActiveIndex(),
        t.updateSlidesClasses();
      const o = t.maxTranslate() - t.minTranslate();
      (r = 0 === o ? 0 : (t.translate - t.minTranslate()) / o),
        r !== t.progress && t.updateProgress(n ? -t.translate : t.translate),
        t.emit("setTranslate", t.translate, !1);
    }
    let ou = !1;
    function su() {}
    const au = (t, e) => {
      const n = Pl(),
        {
          params: i,
          touchEvents: r,
          el: o,
          wrapperEl: s,
          device: a,
          support: l,
        } = t,
        u = !!i.nested,
        c = "on" === e ? "addEventListener" : "removeEventListener",
        d = e;
      if (l.touch) {
        const e = !(
          "touchstart" !== r.start ||
          !l.passiveListener ||
          !i.passiveListeners
        ) && { passive: !0, capture: !1 };
        o[c](r.start, t.onTouchStart, e),
          o[c](
            r.move,
            t.onTouchMove,
            l.passiveListener ? { passive: !1, capture: u } : u
          ),
          o[c](r.end, t.onTouchEnd, e),
          r.cancel && o[c](r.cancel, t.onTouchEnd, e);
      } else
        o[c](r.start, t.onTouchStart, !1),
          n[c](r.move, t.onTouchMove, u),
          n[c](r.end, t.onTouchEnd, !1);
      (i.preventClicks || i.preventClicksPropagation) &&
        o[c]("click", t.onClick, !0),
        i.cssMode && s[c]("scroll", t.onScroll),
        i.updateOnWindowResize
          ? t[d](
              a.ios || a.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              nu,
              !0
            )
          : t[d]("observerUpdate", nu, !0);
    };
    const lu = (t, e) => t.grid && e.grid && e.grid.rows > 1;
    var uu = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function cu(t, e) {
      return function (n = {}) {
        const i = Object.keys(n)[0],
          r = n[i];
        "object" == typeof r && null !== r
          ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
              !0 === t[i] &&
              (t[i] = { auto: !0 }),
            i in t && "enabled" in r
              ? (!0 === t[i] && (t[i] = { enabled: !0 }),
                "object" != typeof t[i] ||
                  "enabled" in t[i] ||
                  (t[i].enabled = !0),
                t[i] || (t[i] = { enabled: !1 }),
                Vl(e, n))
              : Vl(e, n))
          : Vl(e, n);
      };
    }
    const du = {
        eventsEmitter: {
          on(t, e, n) {
            const i = this;
            if ("function" != typeof e) return i;
            const r = n ? "unshift" : "push";
            return (
              t.split(" ").forEach((t) => {
                i.eventsListeners[t] || (i.eventsListeners[t] = []),
                  i.eventsListeners[t][r](e);
              }),
              i
            );
          },
          once(t, e, n) {
            const i = this;
            if ("function" != typeof e) return i;
            function r(...n) {
              i.off(t, r),
                r.__emitterProxy && delete r.__emitterProxy,
                e.apply(i, n);
            }
            return (r.__emitterProxy = e), i.on(t, r, n);
          },
          onAny(t, e) {
            const n = this;
            if ("function" != typeof t) return n;
            const i = e ? "unshift" : "push";
            return (
              n.eventsAnyListeners.indexOf(t) < 0 && n.eventsAnyListeners[i](t),
              n
            );
          },
          offAny(t) {
            const e = this;
            if (!e.eventsAnyListeners) return e;
            const n = e.eventsAnyListeners.indexOf(t);
            return n >= 0 && e.eventsAnyListeners.splice(n, 1), e;
          },
          off(t, e) {
            const n = this;
            return n.eventsListeners
              ? (t.split(" ").forEach((t) => {
                  void 0 === e
                    ? (n.eventsListeners[t] = [])
                    : n.eventsListeners[t] &&
                      n.eventsListeners[t].forEach((i, r) => {
                        (i === e ||
                          (i.__emitterProxy && i.__emitterProxy === e)) &&
                          n.eventsListeners[t].splice(r, 1);
                      });
                }),
                n)
              : n;
          },
          emit(...t) {
            const e = this;
            if (!e.eventsListeners) return e;
            let n, i, r;
            "string" == typeof t[0] || Array.isArray(t[0])
              ? ((n = t[0]), (i = t.slice(1, t.length)), (r = e))
              : ((n = t[0].events), (i = t[0].data), (r = t[0].context || e)),
              i.unshift(r);
            return (
              (Array.isArray(n) ? n : n.split(" ")).forEach((t) => {
                e.eventsAnyListeners &&
                  e.eventsAnyListeners.length &&
                  e.eventsAnyListeners.forEach((e) => {
                    e.apply(r, [t, ...i]);
                  }),
                  e.eventsListeners &&
                    e.eventsListeners[t] &&
                    e.eventsListeners[t].forEach((t) => {
                      t.apply(r, i);
                    });
              }),
              e
            );
          },
        },
        update: {
          updateSize: function () {
            const t = this;
            let e, n;
            const i = t.$el;
            (e =
              void 0 !== t.params.width && null !== t.params.width
                ? t.params.width
                : i[0].clientWidth),
              (n =
                void 0 !== t.params.height && null !== t.params.height
                  ? t.params.height
                  : i[0].clientHeight),
              (0 === e && t.isHorizontal()) ||
                (0 === n && t.isVertical()) ||
                ((e =
                  e -
                  parseInt(i.css("padding-left") || 0, 10) -
                  parseInt(i.css("padding-right") || 0, 10)),
                (n =
                  n -
                  parseInt(i.css("padding-top") || 0, 10) -
                  parseInt(i.css("padding-bottom") || 0, 10)),
                Number.isNaN(e) && (e = 0),
                Number.isNaN(n) && (n = 0),
                Object.assign(t, {
                  width: e,
                  height: n,
                  size: t.isHorizontal() ? e : n,
                }));
          },
          updateSlides: function () {
            const t = this;
            function e(e) {
              return t.isHorizontal()
                ? e
                : {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom",
                  }[e];
            }
            function n(t, n) {
              return parseFloat(t.getPropertyValue(e(n)) || 0);
            }
            const i = t.params,
              { $wrapperEl: r, size: o, rtlTranslate: s, wrongRTL: a } = t,
              l = t.virtual && i.virtual.enabled,
              u = l ? t.virtual.slides.length : t.slides.length,
              c = r.children("." + t.params.slideClass),
              d = l ? t.virtual.slides.length : c.length;
            let p = [];
            const f = [],
              h = [];
            let m = i.slidesOffsetBefore;
            "function" == typeof m && (m = i.slidesOffsetBefore.call(t));
            let v = i.slidesOffsetAfter;
            "function" == typeof v && (v = i.slidesOffsetAfter.call(t));
            const g = t.snapGrid.length,
              y = t.slidesGrid.length;
            let b = i.spaceBetween,
              x = -m,
              w = 0,
              D = 0;
            if (void 0 === o) return;
            "string" == typeof b &&
              b.indexOf("%") >= 0 &&
              (b = (parseFloat(b.replace("%", "")) / 100) * o),
              (t.virtualSize = -b),
              s
                ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
                : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
              i.centeredSlides &&
                i.cssMode &&
                (Hl(t.wrapperEl, "--swiper-centered-offset-before", ""),
                Hl(t.wrapperEl, "--swiper-centered-offset-after", ""));
            const _ = i.grid && i.grid.rows > 1 && t.grid;
            let S;
            _ && t.grid.initSlides(d);
            const C =
              "auto" === i.slidesPerView &&
              i.breakpoints &&
              Object.keys(i.breakpoints).filter(
                (t) => void 0 !== i.breakpoints[t].slidesPerView
              ).length > 0;
            for (let r = 0; r < d; r += 1) {
              S = 0;
              const s = c.eq(r);
              if (
                (_ && t.grid.updateSlide(r, s, d, e),
                "none" !== s.css("display"))
              ) {
                if ("auto" === i.slidesPerView) {
                  C && (c[r].style[e("width")] = "");
                  const o = getComputedStyle(s[0]),
                    a = s[0].style.transform,
                    l = s[0].style.webkitTransform;
                  if (
                    (a && (s[0].style.transform = "none"),
                    l && (s[0].style.webkitTransform = "none"),
                    i.roundLengths)
                  )
                    S = t.isHorizontal() ? s.outerWidth(!0) : s.outerHeight(!0);
                  else {
                    const t = n(o, "width"),
                      e = n(o, "padding-left"),
                      i = n(o, "padding-right"),
                      r = n(o, "margin-left"),
                      a = n(o, "margin-right"),
                      l = o.getPropertyValue("box-sizing");
                    if (l && "border-box" === l) S = t + r + a;
                    else {
                      const { clientWidth: n, offsetWidth: o } = s[0];
                      S = t + e + i + r + a + (o - n);
                    }
                  }
                  a && (s[0].style.transform = a),
                    l && (s[0].style.webkitTransform = l),
                    i.roundLengths && (S = Math.floor(S));
                } else
                  (S = (o - (i.slidesPerView - 1) * b) / i.slidesPerView),
                    i.roundLengths && (S = Math.floor(S)),
                    c[r] && (c[r].style[e("width")] = S + "px");
                c[r] && (c[r].swiperSlideSize = S),
                  h.push(S),
                  i.centeredSlides
                    ? ((x = x + S / 2 + w / 2 + b),
                      0 === w && 0 !== r && (x = x - o / 2 - b),
                      0 === r && (x = x - o / 2 - b),
                      Math.abs(x) < 0.001 && (x = 0),
                      i.roundLengths && (x = Math.floor(x)),
                      D % i.slidesPerGroup == 0 && p.push(x),
                      f.push(x))
                    : (i.roundLengths && (x = Math.floor(x)),
                      (D - Math.min(t.params.slidesPerGroupSkip, D)) %
                        t.params.slidesPerGroup ==
                        0 && p.push(x),
                      f.push(x),
                      (x = x + S + b)),
                  (t.virtualSize += S + b),
                  (w = S),
                  (D += 1);
              }
            }
            if (
              ((t.virtualSize = Math.max(t.virtualSize, o) + v),
              s &&
                a &&
                ("slide" === i.effect || "coverflow" === i.effect) &&
                r.css({ width: t.virtualSize + i.spaceBetween + "px" }),
              i.setWrapperSize &&
                r.css({ [e("width")]: t.virtualSize + i.spaceBetween + "px" }),
              _ && t.grid.updateWrapperSize(S, p, e),
              !i.centeredSlides)
            ) {
              const e = [];
              for (let n = 0; n < p.length; n += 1) {
                let r = p[n];
                i.roundLengths && (r = Math.floor(r)),
                  p[n] <= t.virtualSize - o && e.push(r);
              }
              (p = e),
                Math.floor(t.virtualSize - o) - Math.floor(p[p.length - 1]) >
                  1 && p.push(t.virtualSize - o);
            }
            if ((0 === p.length && (p = [0]), 0 !== i.spaceBetween)) {
              const n = t.isHorizontal() && s ? "marginLeft" : e("marginRight");
              c.filter((t, e) => !i.cssMode || e !== c.length - 1).css({
                [n]: b + "px",
              });
            }
            if (i.centeredSlides && i.centeredSlidesBounds) {
              let t = 0;
              h.forEach((e) => {
                t += e + (i.spaceBetween ? i.spaceBetween : 0);
              }),
                (t -= i.spaceBetween);
              const e = t - o;
              p = p.map((t) => (t < 0 ? -m : t > e ? e + v : t));
            }
            if (i.centerInsufficientSlides) {
              let t = 0;
              if (
                (h.forEach((e) => {
                  t += e + (i.spaceBetween ? i.spaceBetween : 0);
                }),
                (t -= i.spaceBetween),
                t < o)
              ) {
                const e = (o - t) / 2;
                p.forEach((t, n) => {
                  p[n] = t - e;
                }),
                  f.forEach((t, n) => {
                    f[n] = t + e;
                  });
              }
            }
            if (
              (Object.assign(t, {
                slides: c,
                snapGrid: p,
                slidesGrid: f,
                slidesSizesGrid: h,
              }),
              i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
            ) {
              Hl(t.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
                Hl(
                  t.wrapperEl,
                  "--swiper-centered-offset-after",
                  t.size / 2 - h[h.length - 1] / 2 + "px"
                );
              const e = -t.snapGrid[0],
                n = -t.slidesGrid[0];
              (t.snapGrid = t.snapGrid.map((t) => t + e)),
                (t.slidesGrid = t.slidesGrid.map((t) => t + n));
            }
            d !== u && t.emit("slidesLengthChange"),
              p.length !== g &&
                (t.params.watchOverflow && t.checkOverflow(),
                t.emit("snapGridLengthChange")),
              f.length !== y && t.emit("slidesGridLengthChange"),
              i.watchSlidesProgress && t.updateSlidesOffset();
          },
          updateAutoHeight: function (t) {
            const e = this,
              n = [],
              i = e.virtual && e.params.virtual.enabled;
            let r,
              o = 0;
            "number" == typeof t
              ? e.setTransition(t)
              : !0 === t && e.setTransition(e.params.speed);
            const s = (t) =>
              i
                ? e.slides.filter(
                    (e) =>
                      parseInt(
                        e.getAttribute("data-swiper-slide-index"),
                        10
                      ) === t
                  )[0]
                : e.slides.eq(t)[0];
            if ("auto" !== e.params.slidesPerView && e.params.slidesPerView > 1)
              if (e.params.centeredSlides)
                e.visibleSlides.each((t) => {
                  n.push(t);
                });
              else
                for (r = 0; r < Math.ceil(e.params.slidesPerView); r += 1) {
                  const t = e.activeIndex + r;
                  if (t > e.slides.length && !i) break;
                  n.push(s(t));
                }
            else n.push(s(e.activeIndex));
            for (r = 0; r < n.length; r += 1)
              if (void 0 !== n[r]) {
                const t = n[r].offsetHeight;
                o = t > o ? t : o;
              }
            (o || 0 === o) && e.$wrapperEl.css("height", o + "px");
          },
          updateSlidesOffset: function () {
            const t = this,
              e = t.slides;
            for (let n = 0; n < e.length; n += 1)
              e[n].swiperSlideOffset = t.isHorizontal()
                ? e[n].offsetLeft
                : e[n].offsetTop;
          },
          updateSlidesProgress: function (t = (this && this.translate) || 0) {
            const e = this,
              n = e.params,
              { slides: i, rtlTranslate: r, snapGrid: o } = e;
            if (0 === i.length) return;
            void 0 === i[0].swiperSlideOffset && e.updateSlidesOffset();
            let s = -t;
            r && (s = t),
              i.removeClass(n.slideVisibleClass),
              (e.visibleSlidesIndexes = []),
              (e.visibleSlides = []);
            for (let t = 0; t < i.length; t += 1) {
              const a = i[t];
              let l = a.swiperSlideOffset;
              n.cssMode && n.centeredSlides && (l -= i[0].swiperSlideOffset);
              const u =
                  (s + (n.centeredSlides ? e.minTranslate() : 0) - l) /
                  (a.swiperSlideSize + n.spaceBetween),
                c =
                  (s - o[0] + (n.centeredSlides ? e.minTranslate() : 0) - l) /
                  (a.swiperSlideSize + n.spaceBetween),
                d = -(s - l),
                p = d + e.slidesSizesGrid[t];
              ((d >= 0 && d < e.size - 1) ||
                (p > 1 && p <= e.size) ||
                (d <= 0 && p >= e.size)) &&
                (e.visibleSlides.push(a),
                e.visibleSlidesIndexes.push(t),
                i.eq(t).addClass(n.slideVisibleClass)),
                (a.progress = r ? -u : u),
                (a.originalProgress = r ? -c : c);
            }
            e.visibleSlides = Rl(e.visibleSlides);
          },
          updateProgress: function (t) {
            const e = this;
            if (void 0 === t) {
              const n = e.rtlTranslate ? -1 : 1;
              t = (e && e.translate && e.translate * n) || 0;
            }
            const n = e.params,
              i = e.maxTranslate() - e.minTranslate();
            let { progress: r, isBeginning: o, isEnd: s } = e;
            const a = o,
              l = s;
            0 === i
              ? ((r = 0), (o = !0), (s = !0))
              : ((r = (t - e.minTranslate()) / i), (o = r <= 0), (s = r >= 1)),
              Object.assign(e, { progress: r, isBeginning: o, isEnd: s }),
              (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
                e.updateSlidesProgress(t),
              o && !a && e.emit("reachBeginning toEdge"),
              s && !l && e.emit("reachEnd toEdge"),
              ((a && !o) || (l && !s)) && e.emit("fromEdge"),
              e.emit("progress", r);
          },
          updateSlidesClasses: function () {
            const t = this,
              {
                slides: e,
                params: n,
                $wrapperEl: i,
                activeIndex: r,
                realIndex: o,
              } = t,
              s = t.virtual && n.virtual.enabled;
            let a;
            e.removeClass(
              `${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`
            ),
              (a = s
                ? t.$wrapperEl.find(
                    `.${n.slideClass}[data-swiper-slide-index="${r}"]`
                  )
                : e.eq(r)),
              a.addClass(n.slideActiveClass),
              n.loop &&
                (a.hasClass(n.slideDuplicateClass)
                  ? i
                      .children(
                        `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${o}"]`
                      )
                      .addClass(n.slideDuplicateActiveClass)
                  : i
                      .children(
                        `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${o}"]`
                      )
                      .addClass(n.slideDuplicateActiveClass));
            let l = a
              .nextAll("." + n.slideClass)
              .eq(0)
              .addClass(n.slideNextClass);
            n.loop &&
              0 === l.length &&
              ((l = e.eq(0)), l.addClass(n.slideNextClass));
            let u = a
              .prevAll("." + n.slideClass)
              .eq(0)
              .addClass(n.slidePrevClass);
            n.loop &&
              0 === u.length &&
              ((u = e.eq(-1)), u.addClass(n.slidePrevClass)),
              n.loop &&
                (l.hasClass(n.slideDuplicateClass)
                  ? i
                      .children(
                        `.${n.slideClass}:not(.${
                          n.slideDuplicateClass
                        })[data-swiper-slide-index="${l.attr(
                          "data-swiper-slide-index"
                        )}"]`
                      )
                      .addClass(n.slideDuplicateNextClass)
                  : i
                      .children(
                        `.${n.slideClass}.${
                          n.slideDuplicateClass
                        }[data-swiper-slide-index="${l.attr(
                          "data-swiper-slide-index"
                        )}"]`
                      )
                      .addClass(n.slideDuplicateNextClass),
                u.hasClass(n.slideDuplicateClass)
                  ? i
                      .children(
                        `.${n.slideClass}:not(.${
                          n.slideDuplicateClass
                        })[data-swiper-slide-index="${u.attr(
                          "data-swiper-slide-index"
                        )}"]`
                      )
                      .addClass(n.slideDuplicatePrevClass)
                  : i
                      .children(
                        `.${n.slideClass}.${
                          n.slideDuplicateClass
                        }[data-swiper-slide-index="${u.attr(
                          "data-swiper-slide-index"
                        )}"]`
                      )
                      .addClass(n.slideDuplicatePrevClass)),
              t.emitSlidesClasses();
          },
          updateActiveIndex: function (t) {
            const e = this,
              n = e.rtlTranslate ? e.translate : -e.translate,
              {
                slidesGrid: i,
                snapGrid: r,
                params: o,
                activeIndex: s,
                realIndex: a,
                snapIndex: l,
              } = e;
            let u,
              c = t;
            if (void 0 === c) {
              for (let t = 0; t < i.length; t += 1)
                void 0 !== i[t + 1]
                  ? n >= i[t] && n < i[t + 1] - (i[t + 1] - i[t]) / 2
                    ? (c = t)
                    : n >= i[t] && n < i[t + 1] && (c = t + 1)
                  : n >= i[t] && (c = t);
              o.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
            }
            if (r.indexOf(n) >= 0) u = r.indexOf(n);
            else {
              const t = Math.min(o.slidesPerGroupSkip, c);
              u = t + Math.floor((c - t) / o.slidesPerGroup);
            }
            if ((u >= r.length && (u = r.length - 1), c === s))
              return void (
                u !== l && ((e.snapIndex = u), e.emit("snapIndexChange"))
              );
            const d = parseInt(
              e.slides.eq(c).attr("data-swiper-slide-index") || c,
              10
            );
            Object.assign(e, {
              snapIndex: u,
              realIndex: d,
              previousIndex: s,
              activeIndex: c,
            }),
              e.emit("activeIndexChange"),
              e.emit("snapIndexChange"),
              a !== d && e.emit("realIndexChange"),
              (e.initialized || e.params.runCallbacksOnInit) &&
                e.emit("slideChange");
          },
          updateClickedSlide: function (t) {
            const e = this,
              n = e.params,
              i = Rl(t).closest("." + n.slideClass)[0];
            let r,
              o = !1;
            if (i)
              for (let t = 0; t < e.slides.length; t += 1)
                if (e.slides[t] === i) {
                  (o = !0), (r = t);
                  break;
                }
            if (!i || !o)
              return (e.clickedSlide = void 0), void (e.clickedIndex = void 0);
            (e.clickedSlide = i),
              e.virtual && e.params.virtual.enabled
                ? (e.clickedIndex = parseInt(
                    Rl(i).attr("data-swiper-slide-index"),
                    10
                  ))
                : (e.clickedIndex = r),
              n.slideToClickedSlide &&
                void 0 !== e.clickedIndex &&
                e.clickedIndex !== e.activeIndex &&
                e.slideToClickedSlide();
          },
        },
        translate: {
          getTranslate: function (t = this.isHorizontal() ? "x" : "y") {
            const {
              params: e,
              rtlTranslate: n,
              translate: i,
              $wrapperEl: r,
            } = this;
            if (e.virtualTranslate) return n ? -i : i;
            if (e.cssMode) return i;
            let o = ql(r[0], t);
            return n && (o = -o), o || 0;
          },
          setTranslate: function (t, e) {
            const n = this,
              {
                rtlTranslate: i,
                params: r,
                $wrapperEl: o,
                wrapperEl: s,
                progress: a,
              } = n;
            let l,
              u = 0,
              c = 0;
            n.isHorizontal() ? (u = i ? -t : t) : (c = t),
              r.roundLengths && ((u = Math.floor(u)), (c = Math.floor(c))),
              r.cssMode
                ? (s[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                    n.isHorizontal() ? -u : -c)
                : r.virtualTranslate ||
                  o.transform(`translate3d(${u}px, ${c}px, 0px)`),
              (n.previousTranslate = n.translate),
              (n.translate = n.isHorizontal() ? u : c);
            const d = n.maxTranslate() - n.minTranslate();
            (l = 0 === d ? 0 : (t - n.minTranslate()) / d),
              l !== a && n.updateProgress(t),
              n.emit("setTranslate", n.translate, e);
          },
          minTranslate: function () {
            return -this.snapGrid[0];
          },
          maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1];
          },
          translateTo: function (
            t = 0,
            e = this.params.speed,
            n = !0,
            i = !0,
            r
          ) {
            const o = this,
              { params: s, wrapperEl: a } = o;
            if (o.animating && s.preventInteractionOnTransition) return !1;
            const l = o.minTranslate(),
              u = o.maxTranslate();
            let c;
            if (
              ((c = i && t > l ? l : i && t < u ? u : t),
              o.updateProgress(c),
              s.cssMode)
            ) {
              const t = o.isHorizontal();
              if (0 === e) a[t ? "scrollLeft" : "scrollTop"] = -c;
              else {
                if (!o.support.smoothScroll)
                  return (
                    Gl({
                      swiper: o,
                      targetPosition: -c,
                      side: t ? "left" : "top",
                    }),
                    !0
                  );
                a.scrollTo({ [t ? "left" : "top"]: -c, behavior: "smooth" });
              }
              return !0;
            }
            return (
              0 === e
                ? (o.setTransition(0),
                  o.setTranslate(c),
                  n &&
                    (o.emit("beforeTransitionStart", e, r),
                    o.emit("transitionEnd")))
                : (o.setTransition(e),
                  o.setTranslate(c),
                  n &&
                    (o.emit("beforeTransitionStart", e, r),
                    o.emit("transitionStart")),
                  o.animating ||
                    ((o.animating = !0),
                    o.onTranslateToWrapperTransitionEnd ||
                      (o.onTranslateToWrapperTransitionEnd = function (t) {
                        o &&
                          !o.destroyed &&
                          t.target === this &&
                          (o.$wrapperEl[0].removeEventListener(
                            "transitionend",
                            o.onTranslateToWrapperTransitionEnd
                          ),
                          o.$wrapperEl[0].removeEventListener(
                            "webkitTransitionEnd",
                            o.onTranslateToWrapperTransitionEnd
                          ),
                          (o.onTranslateToWrapperTransitionEnd = null),
                          delete o.onTranslateToWrapperTransitionEnd,
                          n && o.emit("transitionEnd"));
                      }),
                    o.$wrapperEl[0].addEventListener(
                      "transitionend",
                      o.onTranslateToWrapperTransitionEnd
                    ),
                    o.$wrapperEl[0].addEventListener(
                      "webkitTransitionEnd",
                      o.onTranslateToWrapperTransitionEnd
                    ))),
              !0
            );
          },
        },
        transition: {
          setTransition: function (t, e) {
            const n = this;
            n.params.cssMode || n.$wrapperEl.transition(t),
              n.emit("setTransition", t, e);
          },
          transitionStart: function (t = !0, e) {
            const n = this,
              { params: i } = n;
            i.cssMode ||
              (i.autoHeight && n.updateAutoHeight(),
              Zl({ swiper: n, runCallbacks: t, direction: e, step: "Start" }));
          },
          transitionEnd: function (t = !0, e) {
            const { params: n } = this;
            (this.animating = !1),
              n.cssMode ||
                (this.setTransition(0),
                Zl({
                  swiper: this,
                  runCallbacks: t,
                  direction: e,
                  step: "End",
                }));
          },
        },
        slide: {
          slideTo: function (t = 0, e = this.params.speed, n = !0, i, r) {
            if ("number" != typeof t && "string" != typeof t)
              throw new Error(
                `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof t}] given.`
              );
            if ("string" == typeof t) {
              const e = parseInt(t, 10);
              if (!isFinite(e))
                throw new Error(
                  `The passed-in 'index' (string) couldn't be converted to 'number'. [${t}] given.`
                );
              t = e;
            }
            const o = this;
            let s = t;
            s < 0 && (s = 0);
            const {
              params: a,
              snapGrid: l,
              slidesGrid: u,
              previousIndex: c,
              activeIndex: d,
              rtlTranslate: p,
              wrapperEl: f,
              enabled: h,
            } = o;
            if (
              (o.animating && a.preventInteractionOnTransition) ||
              (!h && !i && !r)
            )
              return !1;
            const m = Math.min(o.params.slidesPerGroupSkip, s);
            let v = m + Math.floor((s - m) / o.params.slidesPerGroup);
            v >= l.length && (v = l.length - 1),
              (d || a.initialSlide || 0) === (c || 0) &&
                n &&
                o.emit("beforeSlideChangeStart");
            const g = -l[v];
            if ((o.updateProgress(g), a.normalizeSlideIndex))
              for (let t = 0; t < u.length; t += 1) {
                const e = -Math.floor(100 * g),
                  n = Math.floor(100 * u[t]),
                  i = Math.floor(100 * u[t + 1]);
                void 0 !== u[t + 1]
                  ? e >= n && e < i - (i - n) / 2
                    ? (s = t)
                    : e >= n && e < i && (s = t + 1)
                  : e >= n && (s = t);
              }
            if (o.initialized && s !== d) {
              if (!o.allowSlideNext && g < o.translate && g < o.minTranslate())
                return !1;
              if (
                !o.allowSlidePrev &&
                g > o.translate &&
                g > o.maxTranslate() &&
                (d || 0) !== s
              )
                return !1;
            }
            let y;
            if (
              ((y = s > d ? "next" : s < d ? "prev" : "reset"),
              (p && -g === o.translate) || (!p && g === o.translate))
            )
              return (
                o.updateActiveIndex(s),
                a.autoHeight && o.updateAutoHeight(),
                o.updateSlidesClasses(),
                "slide" !== a.effect && o.setTranslate(g),
                "reset" !== y &&
                  (o.transitionStart(n, y), o.transitionEnd(n, y)),
                !1
              );
            if (a.cssMode) {
              const t = o.isHorizontal(),
                n = p ? g : -g;
              if (0 === e) {
                const e = o.virtual && o.params.virtual.enabled;
                e &&
                  ((o.wrapperEl.style.scrollSnapType = "none"),
                  (o._immediateVirtual = !0)),
                  (f[t ? "scrollLeft" : "scrollTop"] = n),
                  e &&
                    requestAnimationFrame(() => {
                      (o.wrapperEl.style.scrollSnapType = ""),
                        (o._swiperImmediateVirtual = !1);
                    });
              } else {
                if (!o.support.smoothScroll)
                  return (
                    Gl({
                      swiper: o,
                      targetPosition: n,
                      side: t ? "left" : "top",
                    }),
                    !0
                  );
                f.scrollTo({ [t ? "left" : "top"]: n, behavior: "smooth" });
              }
              return !0;
            }
            return (
              o.setTransition(e),
              o.setTranslate(g),
              o.updateActiveIndex(s),
              o.updateSlidesClasses(),
              o.emit("beforeTransitionStart", e, i),
              o.transitionStart(n, y),
              0 === e
                ? o.transitionEnd(n, y)
                : o.animating ||
                  ((o.animating = !0),
                  o.onSlideToWrapperTransitionEnd ||
                    (o.onSlideToWrapperTransitionEnd = function (t) {
                      o &&
                        !o.destroyed &&
                        t.target === this &&
                        (o.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          o.onSlideToWrapperTransitionEnd
                        ),
                        o.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          o.onSlideToWrapperTransitionEnd
                        ),
                        (o.onSlideToWrapperTransitionEnd = null),
                        delete o.onSlideToWrapperTransitionEnd,
                        o.transitionEnd(n, y));
                    }),
                  o.$wrapperEl[0].addEventListener(
                    "transitionend",
                    o.onSlideToWrapperTransitionEnd
                  ),
                  o.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    o.onSlideToWrapperTransitionEnd
                  )),
              !0
            );
          },
          slideToLoop: function (t = 0, e = this.params.speed, n = !0, i) {
            const r = this;
            let o = t;
            return (
              r.params.loop && (o += r.loopedSlides), r.slideTo(o, e, n, i)
            );
          },
          slideNext: function (t = this.params.speed, e = !0, n) {
            const i = this,
              { animating: r, enabled: o, params: s } = i;
            if (!o) return i;
            let a = s.slidesPerGroup;
            "auto" === s.slidesPerView &&
              1 === s.slidesPerGroup &&
              s.slidesPerGroupAuto &&
              (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
            const l = i.activeIndex < s.slidesPerGroupSkip ? 1 : a;
            if (s.loop) {
              if (r && s.loopPreventsSlide) return !1;
              i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
            }
            return s.rewind && i.isEnd
              ? i.slideTo(0, t, e, n)
              : i.slideTo(i.activeIndex + l, t, e, n);
          },
          slidePrev: function (t = this.params.speed, e = !0, n) {
            const i = this,
              {
                params: r,
                animating: o,
                snapGrid: s,
                slidesGrid: a,
                rtlTranslate: l,
                enabled: u,
              } = i;
            if (!u) return i;
            if (r.loop) {
              if (o && r.loopPreventsSlide) return !1;
              i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
            }
            function c(t) {
              return t < 0 ? -Math.floor(Math.abs(t)) : Math.floor(t);
            }
            const d = c(l ? i.translate : -i.translate),
              p = s.map((t) => c(t));
            let f = s[p.indexOf(d) - 1];
            if (void 0 === f && r.cssMode) {
              let t;
              s.forEach((e, n) => {
                d >= e && (t = n);
              }),
                void 0 !== t && (f = s[t > 0 ? t - 1 : t]);
            }
            let h = 0;
            return (
              void 0 !== f &&
                ((h = a.indexOf(f)),
                h < 0 && (h = i.activeIndex - 1),
                "auto" === r.slidesPerView &&
                  1 === r.slidesPerGroup &&
                  r.slidesPerGroupAuto &&
                  ((h = h - i.slidesPerViewDynamic("previous", !0) + 1),
                  (h = Math.max(h, 0)))),
              r.rewind && i.isBeginning
                ? i.slideTo(i.slides.length - 1, t, e, n)
                : i.slideTo(h, t, e, n)
            );
          },
          slideReset: function (t = this.params.speed, e = !0, n) {
            return this.slideTo(this.activeIndex, t, e, n);
          },
          slideToClosest: function (t = this.params.speed, e = !0, n, i = 0.5) {
            const r = this;
            let o = r.activeIndex;
            const s = Math.min(r.params.slidesPerGroupSkip, o),
              a = s + Math.floor((o - s) / r.params.slidesPerGroup),
              l = r.rtlTranslate ? r.translate : -r.translate;
            if (l >= r.snapGrid[a]) {
              const t = r.snapGrid[a];
              l - t > (r.snapGrid[a + 1] - t) * i &&
                (o += r.params.slidesPerGroup);
            } else {
              const t = r.snapGrid[a - 1];
              l - t <= (r.snapGrid[a] - t) * i &&
                (o -= r.params.slidesPerGroup);
            }
            return (
              (o = Math.max(o, 0)),
              (o = Math.min(o, r.slidesGrid.length - 1)),
              r.slideTo(o, t, e, n)
            );
          },
          slideToClickedSlide: function () {
            const t = this,
              { params: e, $wrapperEl: n } = t,
              i =
                "auto" === e.slidesPerView
                  ? t.slidesPerViewDynamic()
                  : e.slidesPerView;
            let r,
              o = t.clickedIndex;
            if (e.loop) {
              if (t.animating) return;
              (r = parseInt(
                Rl(t.clickedSlide).attr("data-swiper-slide-index"),
                10
              )),
                e.centeredSlides
                  ? o < t.loopedSlides - i / 2 ||
                    o > t.slides.length - t.loopedSlides + i / 2
                    ? (t.loopFix(),
                      (o = n
                        .children(
                          `.${e.slideClass}[data-swiper-slide-index="${r}"]:not(.${e.slideDuplicateClass})`
                        )
                        .eq(0)
                        .index()),
                      zl(() => {
                        t.slideTo(o);
                      }))
                    : t.slideTo(o)
                  : o > t.slides.length - i
                  ? (t.loopFix(),
                    (o = n
                      .children(
                        `.${e.slideClass}[data-swiper-slide-index="${r}"]:not(.${e.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    zl(() => {
                      t.slideTo(o);
                    }))
                  : t.slideTo(o);
            } else t.slideTo(o);
          },
        },
        loop: {
          loopCreate: function () {
            const t = this,
              e = Pl(),
              { params: n, $wrapperEl: i } = t,
              r = i.children().length > 0 ? Rl(i.children()[0].parentNode) : i;
            r.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
            let o = r.children("." + n.slideClass);
            if (n.loopFillGroupWithBlank) {
              const t = n.slidesPerGroup - (o.length % n.slidesPerGroup);
              if (t !== n.slidesPerGroup) {
                for (let i = 0; i < t; i += 1) {
                  const t = Rl(e.createElement("div")).addClass(
                    `${n.slideClass} ${n.slideBlankClass}`
                  );
                  r.append(t);
                }
                o = r.children("." + n.slideClass);
              }
            }
            "auto" !== n.slidesPerView ||
              n.loopedSlides ||
              (n.loopedSlides = o.length),
              (t.loopedSlides = Math.ceil(
                parseFloat(n.loopedSlides || n.slidesPerView, 10)
              )),
              (t.loopedSlides += n.loopAdditionalSlides),
              t.loopedSlides > o.length && (t.loopedSlides = o.length);
            const s = [],
              a = [];
            o.each((e, n) => {
              const i = Rl(e);
              n < t.loopedSlides && a.push(e),
                n < o.length && n >= o.length - t.loopedSlides && s.push(e),
                i.attr("data-swiper-slide-index", n);
            });
            for (let t = 0; t < a.length; t += 1)
              r.append(Rl(a[t].cloneNode(!0)).addClass(n.slideDuplicateClass));
            for (let t = s.length - 1; t >= 0; t -= 1)
              r.prepend(Rl(s[t].cloneNode(!0)).addClass(n.slideDuplicateClass));
          },
          loopFix: function () {
            const t = this;
            t.emit("beforeLoopFix");
            const {
              activeIndex: e,
              slides: n,
              loopedSlides: i,
              allowSlidePrev: r,
              allowSlideNext: o,
              snapGrid: s,
              rtlTranslate: a,
            } = t;
            let l;
            (t.allowSlidePrev = !0), (t.allowSlideNext = !0);
            const u = -s[e] - t.getTranslate();
            if (e < i) {
              (l = n.length - 3 * i + e), (l += i);
              t.slideTo(l, 0, !1, !0) &&
                0 !== u &&
                t.setTranslate((a ? -t.translate : t.translate) - u);
            } else if (e >= n.length - i) {
              (l = -n.length + e + i), (l += i);
              t.slideTo(l, 0, !1, !0) &&
                0 !== u &&
                t.setTranslate((a ? -t.translate : t.translate) - u);
            }
            (t.allowSlidePrev = r), (t.allowSlideNext = o), t.emit("loopFix");
          },
          loopDestroy: function () {
            const { $wrapperEl: t, params: e, slides: n } = this;
            t
              .children(
                `.${e.slideClass}.${e.slideDuplicateClass},.${e.slideClass}.${e.slideBlankClass}`
              )
              .remove(),
              n.removeAttr("data-swiper-slide-index");
          },
        },
        grabCursor: {
          setGrabCursor: function (t) {
            if (
              this.support.touch ||
              !this.params.simulateTouch ||
              (this.params.watchOverflow && this.isLocked) ||
              this.params.cssMode
            )
              return;
            const e =
              "container" === this.params.touchEventsTarget
                ? this.el
                : this.wrapperEl;
            (e.style.cursor = "move"),
              (e.style.cursor = t ? "-webkit-grabbing" : "-webkit-grab"),
              (e.style.cursor = t ? "-moz-grabbin" : "-moz-grab"),
              (e.style.cursor = t ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            this.support.touch ||
              (this.params.watchOverflow && this.isLocked) ||
              this.params.cssMode ||
              (this[
                "container" === this.params.touchEventsTarget
                  ? "el"
                  : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: {
          attachEvents: function () {
            const t = this,
              e = Pl(),
              { params: n, support: i } = t;
            (t.onTouchStart = Jl.bind(t)),
              (t.onTouchMove = tu.bind(t)),
              (t.onTouchEnd = eu.bind(t)),
              n.cssMode && (t.onScroll = ru.bind(t)),
              (t.onClick = iu.bind(t)),
              i.touch &&
                !ou &&
                (e.addEventListener("touchstart", su), (ou = !0)),
              au(t, "on");
          },
          detachEvents: function () {
            au(this, "off");
          },
        },
        breakpoints: {
          setBreakpoint: function () {
            const t = this,
              {
                activeIndex: e,
                initialized: n,
                loopedSlides: i = 0,
                params: r,
                $el: o,
              } = t,
              s = r.breakpoints;
            if (!s || (s && 0 === Object.keys(s).length)) return;
            const a = t.getBreakpoint(s, t.params.breakpointsBase, t.el);
            if (!a || t.currentBreakpoint === a) return;
            const l = (a in s ? s[a] : void 0) || t.originalParams,
              u = lu(t, r),
              c = lu(t, l),
              d = r.enabled;
            u && !c
              ? (o.removeClass(
                  `${r.containerModifierClass}grid ${r.containerModifierClass}grid-column`
                ),
                t.emitContainerClasses())
              : !u &&
                c &&
                (o.addClass(r.containerModifierClass + "grid"),
                ((l.grid.fill && "column" === l.grid.fill) ||
                  (!l.grid.fill && "column" === r.grid.fill)) &&
                  o.addClass(r.containerModifierClass + "grid-column"),
                t.emitContainerClasses());
            const p = l.direction && l.direction !== r.direction,
              f = r.loop && (l.slidesPerView !== r.slidesPerView || p);
            p && n && t.changeDirection(), Vl(t.params, l);
            const h = t.params.enabled;
            Object.assign(t, {
              allowTouchMove: t.params.allowTouchMove,
              allowSlideNext: t.params.allowSlideNext,
              allowSlidePrev: t.params.allowSlidePrev,
            }),
              d && !h ? t.disable() : !d && h && t.enable(),
              (t.currentBreakpoint = a),
              t.emit("_beforeBreakpoint", l),
              f &&
                n &&
                (t.loopDestroy(),
                t.loopCreate(),
                t.updateSlides(),
                t.slideTo(e - i + t.loopedSlides, 0, !1)),
              t.emit("breakpoint", l);
          },
          getBreakpoint: function (t, e = "window", n) {
            if (!t || ("container" === e && !n)) return;
            let i = !1;
            const r = kl(),
              o = "window" === e ? r.innerHeight : n.clientHeight,
              s = Object.keys(t).map((t) => {
                if ("string" == typeof t && 0 === t.indexOf("@")) {
                  const e = parseFloat(t.substr(1));
                  return { value: o * e, point: t };
                }
                return { value: t, point: t };
              });
            s.sort((t, e) => parseInt(t.value, 10) - parseInt(e.value, 10));
            for (let t = 0; t < s.length; t += 1) {
              const { point: o, value: a } = s[t];
              "window" === e
                ? r.matchMedia(`(min-width: ${a}px)`).matches && (i = o)
                : a <= n.clientWidth && (i = o);
            }
            return i || "max";
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            const t = this,
              { isLocked: e, params: n } = t,
              { slidesOffsetBefore: i } = n;
            if (i) {
              const e = t.slides.length - 1,
                n = t.slidesGrid[e] + t.slidesSizesGrid[e] + 2 * i;
              t.isLocked = t.size > n;
            } else t.isLocked = 1 === t.snapGrid.length;
            !0 === n.allowSlideNext && (t.allowSlideNext = !t.isLocked),
              !0 === n.allowSlidePrev && (t.allowSlidePrev = !t.isLocked),
              e && e !== t.isLocked && (t.isEnd = !1),
              e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock");
          },
        },
        classes: {
          addClasses: function () {
            const {
                classNames: t,
                params: e,
                rtl: n,
                $el: i,
                device: r,
                support: o,
              } = this,
              s = (function (t, e) {
                const n = [];
                return (
                  t.forEach((t) => {
                    "object" == typeof t
                      ? Object.keys(t).forEach((i) => {
                          t[i] && n.push(e + i);
                        })
                      : "string" == typeof t && n.push(e + t);
                  }),
                  n
                );
              })(
                [
                  "initialized",
                  e.direction,
                  { "pointer-events": !o.touch },
                  { "free-mode": this.params.freeMode && e.freeMode.enabled },
                  { autoheight: e.autoHeight },
                  { rtl: n },
                  { grid: e.grid && e.grid.rows > 1 },
                  {
                    "grid-column":
                      e.grid && e.grid.rows > 1 && "column" === e.grid.fill,
                  },
                  { android: r.android },
                  { ios: r.ios },
                  { "css-mode": e.cssMode },
                  { centered: e.cssMode && e.centeredSlides },
                ],
                e.containerModifierClass
              );
            t.push(...s),
              i.addClass([...t].join(" ")),
              this.emitContainerClasses();
          },
          removeClasses: function () {
            const { $el: t, classNames: e } = this;
            t.removeClass(e.join(" ")), this.emitContainerClasses();
          },
        },
        images: {
          loadImage: function (t, e, n, i, r, o) {
            const s = kl();
            let a;
            function l() {
              o && o();
            }
            Rl(t).parent("picture")[0] || (t.complete && r)
              ? l()
              : e
              ? ((a = new s.Image()),
                (a.onload = l),
                (a.onerror = l),
                i && (a.sizes = i),
                n && (a.srcset = n),
                e && (a.src = e))
              : l();
          },
          preloadImages: function () {
            const t = this;
            function e() {
              null != t &&
                t &&
                !t.destroyed &&
                (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1),
                t.imagesLoaded === t.imagesToLoad.length &&
                  (t.params.updateOnImagesReady && t.update(),
                  t.emit("imagesReady")));
            }
            t.imagesToLoad = t.$el.find("img");
            for (let n = 0; n < t.imagesToLoad.length; n += 1) {
              const i = t.imagesToLoad[n];
              t.loadImage(
                i,
                i.currentSrc || i.getAttribute("src"),
                i.srcset || i.getAttribute("srcset"),
                i.sizes || i.getAttribute("sizes"),
                !0,
                e
              );
            }
          },
        },
      },
      pu = {};
    class fu {
      constructor(...t) {
        let e, n;
        if (
          (1 === t.length &&
          t[0].constructor &&
          "Object" === Object.prototype.toString.call(t[0]).slice(8, -1)
            ? (n = t[0])
            : ([e, n] = t),
          n || (n = {}),
          (n = Vl({}, n)),
          e && !n.el && (n.el = e),
          n.el && Rl(n.el).length > 1)
        ) {
          const t = [];
          return (
            Rl(n.el).each((e) => {
              const i = Vl({}, n, { el: e });
              t.push(new fu(i));
            }),
            t
          );
        }
        const i = this;
        (i.__swiper__ = !0),
          (i.support = Xl()),
          (i.device = Ul({ userAgent: n.userAgent })),
          (i.browser = Kl()),
          (i.eventsListeners = {}),
          (i.eventsAnyListeners = []),
          (i.modules = [...i.__modules__]),
          n.modules && Array.isArray(n.modules) && i.modules.push(...n.modules);
        const r = {};
        i.modules.forEach((t) => {
          t({
            swiper: i,
            extendParams: cu(n, r),
            on: i.on.bind(i),
            once: i.once.bind(i),
            off: i.off.bind(i),
            emit: i.emit.bind(i),
          });
        });
        const o = Vl({}, uu, r);
        return (
          (i.params = Vl({}, o, pu, n)),
          (i.originalParams = Vl({}, i.params)),
          (i.passedParams = Vl({}, n)),
          i.params &&
            i.params.on &&
            Object.keys(i.params.on).forEach((t) => {
              i.on(t, i.params.on[t]);
            }),
          i.params && i.params.onAny && i.onAny(i.params.onAny),
          (i.$ = Rl),
          Object.assign(i, {
            enabled: i.params.enabled,
            el: e,
            classNames: [],
            slides: Rl(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === i.params.direction,
            isVertical: () => "vertical" === i.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: i.params.allowSlideNext,
            allowSlidePrev: i.params.allowSlidePrev,
            touchEvents: (function () {
              const t = ["touchstart", "touchmove", "touchend", "touchcancel"],
                e = ["pointerdown", "pointermove", "pointerup"];
              return (
                (i.touchEventsTouch = {
                  start: t[0],
                  move: t[1],
                  end: t[2],
                  cancel: t[3],
                }),
                (i.touchEventsDesktop = { start: e[0], move: e[1], end: e[2] }),
                i.support.touch || !i.params.simulateTouch
                  ? i.touchEventsTouch
                  : i.touchEventsDesktop
              );
            })(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: i.params.focusableElements,
              lastClickTime: Nl(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: i.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          i.emit("_swiper"),
          i.params.init && i.init(),
          i
        );
      }
      enable() {
        const t = this;
        t.enabled ||
          ((t.enabled = !0),
          t.params.grabCursor && t.setGrabCursor(),
          t.emit("enable"));
      }
      disable() {
        const t = this;
        t.enabled &&
          ((t.enabled = !1),
          t.params.grabCursor && t.unsetGrabCursor(),
          t.emit("disable"));
      }
      setProgress(t, e) {
        t = Math.min(Math.max(t, 0), 1);
        const n = this.minTranslate(),
          i = (this.maxTranslate() - n) * t + n;
        this.translateTo(i, void 0 === e ? 0 : e),
          this.updateActiveIndex(),
          this.updateSlidesClasses();
      }
      emitContainerClasses() {
        const t = this;
        if (!t.params._emitClasses || !t.el) return;
        const e = t.el.className
          .split(" ")
          .filter(
            (e) =>
              0 === e.indexOf("swiper") ||
              0 === e.indexOf(t.params.containerModifierClass)
          );
        t.emit("_containerClasses", e.join(" "));
      }
      getSlideClasses(t) {
        const e = this;
        return t.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper-slide") ||
              0 === t.indexOf(e.params.slideClass)
          )
          .join(" ");
      }
      emitSlidesClasses() {
        const t = this;
        if (!t.params._emitClasses || !t.el) return;
        const e = [];
        t.slides.each((n) => {
          const i = t.getSlideClasses(n);
          e.push({ slideEl: n, classNames: i }), t.emit("_slideClass", n, i);
        }),
          t.emit("_slideClasses", e);
      }
      slidesPerViewDynamic(t = "current", e = !1) {
        const {
          params: n,
          slides: i,
          slidesGrid: r,
          slidesSizesGrid: o,
          size: s,
          activeIndex: a,
        } = this;
        let l = 1;
        if (n.centeredSlides) {
          let t,
            e = i[a].swiperSlideSize;
          for (let n = a + 1; n < i.length; n += 1)
            i[n] &&
              !t &&
              ((e += i[n].swiperSlideSize), (l += 1), e > s && (t = !0));
          for (let n = a - 1; n >= 0; n -= 1)
            i[n] &&
              !t &&
              ((e += i[n].swiperSlideSize), (l += 1), e > s && (t = !0));
        } else if ("current" === t)
          for (let t = a + 1; t < i.length; t += 1) {
            (e ? r[t] + o[t] - r[a] < s : r[t] - r[a] < s) && (l += 1);
          }
        else
          for (let t = a - 1; t >= 0; t -= 1) {
            r[a] - r[t] < s && (l += 1);
          }
        return l;
      }
      update() {
        const t = this;
        if (!t || t.destroyed) return;
        const { snapGrid: e, params: n } = t;
        function i() {
          const e = t.rtlTranslate ? -1 * t.translate : t.translate,
            n = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
          t.setTranslate(n), t.updateActiveIndex(), t.updateSlidesClasses();
        }
        let r;
        n.breakpoints && t.setBreakpoint(),
          t.updateSize(),
          t.updateSlides(),
          t.updateProgress(),
          t.updateSlidesClasses(),
          t.params.freeMode && t.params.freeMode.enabled
            ? (i(), t.params.autoHeight && t.updateAutoHeight())
            : ((r =
                ("auto" === t.params.slidesPerView ||
                  t.params.slidesPerView > 1) &&
                t.isEnd &&
                !t.params.centeredSlides
                  ? t.slideTo(t.slides.length - 1, 0, !1, !0)
                  : t.slideTo(t.activeIndex, 0, !1, !0)),
              r || i()),
          n.watchOverflow && e !== t.snapGrid && t.checkOverflow(),
          t.emit("update");
      }
      changeDirection(t, e = !0) {
        const n = this,
          i = n.params.direction;
        return (
          t || (t = "horizontal" === i ? "vertical" : "horizontal"),
          t === i ||
            ("horizontal" !== t && "vertical" !== t) ||
            (n.$el
              .removeClass(`${n.params.containerModifierClass}${i}`)
              .addClass(`${n.params.containerModifierClass}${t}`),
            n.emitContainerClasses(),
            (n.params.direction = t),
            n.slides.each((e) => {
              "vertical" === t ? (e.style.width = "") : (e.style.height = "");
            }),
            n.emit("changeDirection"),
            e && n.update()),
          n
        );
      }
      mount(t) {
        const e = this;
        if (e.mounted) return !0;
        const n = Rl(t || e.params.el);
        if (!(t = n[0])) return !1;
        t.swiper = e;
        const i = () =>
          "." + (e.params.wrapperClass || "").trim().split(" ").join(".");
        let r = (() => {
          if (t && t.shadowRoot && t.shadowRoot.querySelector) {
            const e = Rl(t.shadowRoot.querySelector(i()));
            return (e.children = (t) => n.children(t)), e;
          }
          return n.children(i());
        })();
        if (0 === r.length && e.params.createElements) {
          const t = Pl().createElement("div");
          (r = Rl(t)),
            (t.className = e.params.wrapperClass),
            n.append(t),
            n.children("." + e.params.slideClass).each((t) => {
              r.append(t);
            });
        }
        return (
          Object.assign(e, {
            $el: n,
            el: t,
            $wrapperEl: r,
            wrapperEl: r[0],
            mounted: !0,
            rtl: "rtl" === t.dir.toLowerCase() || "rtl" === n.css("direction"),
            rtlTranslate:
              "horizontal" === e.params.direction &&
              ("rtl" === t.dir.toLowerCase() || "rtl" === n.css("direction")),
            wrongRTL: "-webkit-box" === r.css("display"),
          }),
          !0
        );
      }
      init(t) {
        const e = this;
        if (e.initialized) return e;
        return (
          !1 === e.mount(t) ||
            (e.emit("beforeInit"),
            e.params.breakpoints && e.setBreakpoint(),
            e.addClasses(),
            e.params.loop && e.loopCreate(),
            e.updateSize(),
            e.updateSlides(),
            e.params.watchOverflow && e.checkOverflow(),
            e.params.grabCursor && e.enabled && e.setGrabCursor(),
            e.params.preloadImages && e.preloadImages(),
            e.params.loop
              ? e.slideTo(
                  e.params.initialSlide + e.loopedSlides,
                  0,
                  e.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : e.slideTo(
                  e.params.initialSlide,
                  0,
                  e.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            e.attachEvents(),
            (e.initialized = !0),
            e.emit("init"),
            e.emit("afterInit")),
          e
        );
      }
      destroy(t = !0, e = !0) {
        const n = this,
          { params: i, $el: r, $wrapperEl: o, slides: s } = n;
        return (
          void 0 === n.params ||
            n.destroyed ||
            (n.emit("beforeDestroy"),
            (n.initialized = !1),
            n.detachEvents(),
            i.loop && n.loopDestroy(),
            e &&
              (n.removeClasses(),
              r.removeAttr("style"),
              o.removeAttr("style"),
              s &&
                s.length &&
                s
                  .removeClass(
                    [
                      i.slideVisibleClass,
                      i.slideActiveClass,
                      i.slideNextClass,
                      i.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            n.emit("destroy"),
            Object.keys(n.eventsListeners).forEach((t) => {
              n.off(t);
            }),
            !1 !== t &&
              ((n.$el[0].swiper = null),
              (function (t) {
                const e = t;
                Object.keys(e).forEach((t) => {
                  try {
                    e[t] = null;
                  } catch (t) {}
                  try {
                    delete e[t];
                  } catch (t) {}
                });
              })(n)),
            (n.destroyed = !0)),
          null
        );
      }
      static extendDefaults(t) {
        Vl(pu, t);
      }
      static get extendedDefaults() {
        return pu;
      }
      static get defaults() {
        return uu;
      }
      static installModule(t) {
        fu.prototype.__modules__ || (fu.prototype.__modules__ = []);
        const e = fu.prototype.__modules__;
        "function" == typeof t && e.indexOf(t) < 0 && e.push(t);
      }
      static use(t) {
        return Array.isArray(t)
          ? (t.forEach((t) => fu.installModule(t)), fu)
          : (fu.installModule(t), fu);
      }
    }
    Object.keys(du).forEach((t) => {
      Object.keys(du[t]).forEach((e) => {
        fu.prototype[e] = du[t][e];
      });
    }),
      fu.use([
        function ({ swiper: t, on: e, emit: n }) {
          const i = kl();
          let r = null;
          const o = () => {
              t &&
                !t.destroyed &&
                t.initialized &&
                (n("beforeResize"), n("resize"));
            },
            s = () => {
              t && !t.destroyed && t.initialized && n("orientationchange");
            };
          e("init", () => {
            t.params.resizeObserver && void 0 !== i.ResizeObserver
              ? t &&
                !t.destroyed &&
                t.initialized &&
                ((r = new ResizeObserver((e) => {
                  const { width: n, height: i } = t;
                  let r = n,
                    s = i;
                  e.forEach(
                    ({ contentBoxSize: e, contentRect: n, target: i }) => {
                      (i && i !== t.el) ||
                        ((r = n ? n.width : (e[0] || e).inlineSize),
                        (s = n ? n.height : (e[0] || e).blockSize));
                    }
                  ),
                    (r === n && s === i) || o();
                })),
                r.observe(t.el))
              : (i.addEventListener("resize", o),
                i.addEventListener("orientationchange", s));
          }),
            e("destroy", () => {
              r && r.unobserve && t.el && (r.unobserve(t.el), (r = null)),
                i.removeEventListener("resize", o),
                i.removeEventListener("orientationchange", s);
            });
        },
        function ({ swiper: t, extendParams: e, on: n, emit: i }) {
          const r = [],
            o = kl(),
            s = (t, e = {}) => {
              const n = new (o.MutationObserver || o.WebkitMutationObserver)(
                (t) => {
                  if (1 === t.length) return void i("observerUpdate", t[0]);
                  const e = function () {
                    i("observerUpdate", t[0]);
                  };
                  o.requestAnimationFrame
                    ? o.requestAnimationFrame(e)
                    : o.setTimeout(e, 0);
                }
              );
              n.observe(t, {
                attributes: void 0 === e.attributes || e.attributes,
                childList: void 0 === e.childList || e.childList,
                characterData: void 0 === e.characterData || e.characterData,
              }),
                r.push(n);
            };
          e({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            n("init", () => {
              if (t.params.observer) {
                if (t.params.observeParents) {
                  const e = t.$el.parents();
                  for (let t = 0; t < e.length; t += 1) s(e[t]);
                }
                s(t.$el[0], { childList: t.params.observeSlideChildren }),
                  s(t.$wrapperEl[0], { attributes: !1 });
              }
            }),
            n("destroy", () => {
              r.forEach((t) => {
                t.disconnect();
              }),
                r.splice(0, r.length);
            });
        },
      ]);
    var hu = fu;
    function mu(t, e, n, i) {
      const r = Pl();
      return (
        t.params.createElements &&
          Object.keys(i).forEach((o) => {
            if (!n[o] && !0 === n.auto) {
              let s = t.$el.children("." + i[o])[0];
              s ||
                ((s = r.createElement("div")),
                (s.className = i[o]),
                t.$el.append(s)),
                (n[o] = s),
                (e[o] = s);
            }
          }),
        n
      );
    }
    function vu(t, e) {
      return (vu =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function gu(t, e) {
      return (gu =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    hu.use(function ({ swiper: t, extendParams: e, on: n, emit: i }) {
      function r(e) {
        let n;
        return (
          e &&
            ((n = Rl(e)),
            t.params.uniqueNavElements &&
              "string" == typeof e &&
              n.length > 1 &&
              1 === t.$el.find(e).length &&
              (n = t.$el.find(e))),
          n
        );
      }
      function o(e, n) {
        const i = t.params.navigation;
        e &&
          e.length > 0 &&
          (e[n ? "addClass" : "removeClass"](i.disabledClass),
          e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = n),
          t.params.watchOverflow &&
            t.enabled &&
            e[t.isLocked ? "addClass" : "removeClass"](i.lockClass));
      }
      function s() {
        if (t.params.loop) return;
        const { $nextEl: e, $prevEl: n } = t.navigation;
        o(n, t.isBeginning && !t.params.rewind),
          o(e, t.isEnd && !t.params.rewind);
      }
      function a(e) {
        e.preventDefault(),
          (!t.isBeginning || t.params.loop || t.params.rewind) && t.slidePrev();
      }
      function l(e) {
        e.preventDefault(),
          (!t.isEnd || t.params.loop || t.params.rewind) && t.slideNext();
      }
      function u() {
        const e = t.params.navigation;
        if (
          ((t.params.navigation = mu(
            t,
            t.originalParams.navigation,
            t.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
          )),
          !e.nextEl && !e.prevEl)
        )
          return;
        const n = r(e.nextEl),
          i = r(e.prevEl);
        n && n.length > 0 && n.on("click", l),
          i && i.length > 0 && i.on("click", a),
          Object.assign(t.navigation, {
            $nextEl: n,
            nextEl: n && n[0],
            $prevEl: i,
            prevEl: i && i[0],
          }),
          t.enabled ||
            (n && n.addClass(e.lockClass), i && i.addClass(e.lockClass));
      }
      function c() {
        const { $nextEl: e, $prevEl: n } = t.navigation;
        e &&
          e.length &&
          (e.off("click", l), e.removeClass(t.params.navigation.disabledClass)),
          n &&
            n.length &&
            (n.off("click", a),
            n.removeClass(t.params.navigation.disabledClass));
      }
      e({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
        },
      }),
        (t.navigation = {
          nextEl: null,
          $nextEl: null,
          prevEl: null,
          $prevEl: null,
        }),
        n("init", () => {
          u(), s();
        }),
        n("toEdge fromEdge lock unlock", () => {
          s();
        }),
        n("destroy", () => {
          c();
        }),
        n("enable disable", () => {
          const { $nextEl: e, $prevEl: n } = t.navigation;
          e &&
            e[t.enabled ? "removeClass" : "addClass"](
              t.params.navigation.lockClass
            ),
            n &&
              n[t.enabled ? "removeClass" : "addClass"](
                t.params.navigation.lockClass
              );
        }),
        n("click", (e, n) => {
          const { $nextEl: r, $prevEl: o } = t.navigation,
            s = n.target;
          if (t.params.navigation.hideOnClick && !Rl(s).is(o) && !Rl(s).is(r)) {
            if (
              t.pagination &&
              t.params.pagination &&
              t.params.pagination.clickable &&
              (t.pagination.el === s || t.pagination.el.contains(s))
            )
              return;
            let e;
            r
              ? (e = r.hasClass(t.params.navigation.hiddenClass))
              : o && (e = o.hasClass(t.params.navigation.hiddenClass)),
              i(!0 === e ? "navigationShow" : "navigationHide"),
              r && r.toggleClass(t.params.navigation.hiddenClass),
              o && o.toggleClass(t.params.navigation.hiddenClass);
          }
        }),
        Object.assign(t.navigation, { update: s, init: u, destroy: c });
    });
    function yu(t, e) {
      return (yu =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function bu(t, e) {
      return (bu =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function xu(t, e) {
      return (xu =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function wu(t, e) {
      return (wu =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Du(t, e) {
      return (Du =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function _u(t, e) {
      return (_u =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Su(t, e) {
      return (Su =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Cu(t, e) {
      return (Cu =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Eu(t, e) {
      return (Eu =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Tu(t, e) {
      return (Tu =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Pu(t, e) {
      return (Pu =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Au(t, e) {
      return (Au =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    new o({
      define: [
        {
          namespace: "ajax",
          component: a,
          options: { updateSelectors: ["title", "meta", "#view-main"] },
        },
        { namespace: "page", component: wo },
        { namespace: "cursor", component: So },
        { namespace: "loader", assign: ".pt-loader", component: Eo },
        { namespace: "scrollbar", assign: ".pt-layout", component: sa },
        { namespace: "button", assign: ".pt-btn", component: ua },
        { namespace: "button.cta", assign: ".pt-btn_cta", component: ca },
        { namespace: "button.nav", assign: ".pt-btn_nav", component: da },
        { namespace: "button.play", assign: ".pt-btn_play", component: pa },
        { namespace: "modal", assign: ".pt-modal", component: ha },
        { namespace: "navbar", assign: ".pt-navbar", component: va },
        { namespace: "scroller", assign: ".pt-scroller", component: ya },
        { namespace: "embedded", assign: ".pt-embedded", component: xa },
        { namespace: "glancebox", assign: ".pt-glancebox", component: Da },
        { namespace: "fallbox", assign: ".pt-fallbox", component: Ea },
        { namespace: "chevronbox", assign: ".pt-chevronbox", component: Fa },
        { namespace: "hero", assign: ".pt-hero", component: Sl },
        {
          namespace: "overview",
          assign: ".pt-overview",
          component: (function (t) {
            var e, n;
            function i() {
              var e;
              return (
                ((e = t.apply(this, arguments) || this).cursor =
                  e.app.get("cursor")),
                (e.fill = e.el.querySelector(".pt-overview-fill")),
                (e.header = e.el.querySelector(".pt-overview-header > *")),
                (e.num = e.el.querySelector(".pt-overview-header b")),
                (e.carousel = e.el.querySelector(".pt-overview-carousel")),
                (e.bundle = e.el.querySelector(".pt-overview-bundle")),
                (e.logos = e.el.querySelector(".pt-overview-logos")),
                (e.logo = Array.from(
                  e.el.querySelectorAll(".pt-overview-logo")
                )),
                (e.navPrevBtn = e.el.querySelector(
                  ".pt-overview-nav.-prev button"
                )),
                (e.navNextBtn = e.el.querySelector(
                  ".pt-overview-nav.-next button"
                )),
                e.initCarousel(),
                e
              );
            }
            (n = t),
              ((e = i).prototype = Object.create(n.prototype)),
              (e.prototype.constructor = e),
              vu(e, n);
            var r = i.prototype;
            return (
              (r.initCarousel = function () {
                this.swiper = new hu(this.carousel, {
                  containerModifierClass: "-",
                  noSwipingClass: "-noswipe",
                  slideClass: "pt-overview-review",
                  slideActiveClass: "-active",
                  slideBlankClass: "-blank",
                  slidePrevClass: "-prev",
                  slideNextClass: "-next",
                  slideDuplicateClass: "-duplicate",
                  slideDuplicateActiveClass: "-dactive",
                  slideDuplicateNextClass: "-dnext",
                  slideDuplicatePrevClass: "-dprev",
                  slideVisibleClass: "-visible",
                  wrapperClass: "pt-overview-reviews",
                  slidesPerView: "auto",
                  centeredSlides: !0,
                  initialSlide: 1,
                  loop: !0,
                  spaceBetween: 20,
                  speed: 800,
                  navigation: {
                    prevEl: this.navPrevBtn,
                    nextEl: this.navNextBtn,
                    lockClass: "-lock",
                    hiddenClass: "-hidden",
                    disabledClass: "-disabled",
                  },
                  touchStartPreventDefault: !this.cursor.follower,
                });
              }),
              (r.magicParallax = function () {
                var t = this;
                bo.saveStyles([this.carousel]),
                  bo.matchMedia({
                    "(min-width:1024px)": function () {
                      bo.create({
                        trigger: t.carousel,
                        animation: t.tlParallax(),
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 0.3,
                      });
                    },
                  });
              }),
              (r.tlParallax = function () {
                var t = new Ui.timeline();
                return (
                  t.set(this.carousel, { willChange: "transform" }),
                  t.fromTo(
                    this.carousel,
                    { x: -100 },
                    { x: 100, ease: "none", force3D: !0 },
                    0
                  ),
                  t.set(this.carousel, { willChange: "auto" }),
                  t
                );
              }),
              (r.magicMarquee = function () {
                var t = this,
                  e = document.createDocumentFragment();
                this.logo.forEach(function (t) {
                  var n = t.cloneNode(!0);
                  n.classList.add("-clone"), e.appendChild(n);
                }),
                  this.logos.append(e);
                var n = function () {
                  bo.create({
                    animation: xl(t.logos, t.logo),
                    trigger: t.bundle,
                    start: "top bottom",
                    end: "bottom top",
                    toggleActions: "play pause play pause",
                  });
                };
                bo.saveStyles([this.logos]),
                  bo.matchMedia({
                    "(min-width:0px)": n,
                    "(min-width:768px)": n,
                    "(min-width:1600px)": n,
                  });
              }),
              (r.magicShow = function () {
                bo.create({
                  animation: yl(this.header),
                  trigger: this.header,
                  start: "top bottom",
                  once: !0,
                });
              }),
              (r.onInit = function () {
                return new Promise(
                  function (t, e) {
                    return (
                      this.magicMarquee(),
                      this.magicParallax(),
                      this.magicShow(),
                      t()
                    );
                  }.bind(this)
                );
              }),
              (r.onDestroy = function () {
                return new Promise(
                  function (t, e) {
                    return this.swiper && this.swiper.destroy(), t();
                  }.bind(this)
                );
              }),
              i
            );
          })(r),
        },
        {
          namespace: "definition",
          assign: ".pt-definition",
          component: (function (t) {
            var e, n;
            function i() {
              var e;
              return (
                ((e = t.apply(this, arguments) || this).fill =
                  e.el.querySelector(".pt-definition-fill")),
                (e.text = e.el.querySelector(".pt-definition-text p")),
                (e.textMark = e.text.querySelectorAll("mark")),
                (e.action = e.el.querySelector(".pt-definition-action")),
                (e.notice = e.el.querySelector(".pt-definition-notice")),
                (e.figure = e.el.querySelector(".pt-definition-figure")),
                e
              );
            }
            (n = t),
              ((e = i).prototype = Object.create(n.prototype)),
              (e.prototype.constructor = e),
              gu(e, n);
            var r = i.prototype;
            return (
              (r.magicShow = function () {
                var t = this;
                bo.create({
                  animation: Ui.timeline(),
                  trigger: this.el,
                  start: "center center",
                  once: !0,
                  onEnter: function () {
                    return t.textMark.forEach(function (t) {
                      return t.classList.remove("-hidden");
                    });
                  },
                }),
                  bo.create({
                    animation: this.tlShow(),
                    trigger: this.text,
                    start: "top bottom",
                    once: !0,
                  });
              }),
              (r.tlShow = function () {
                var t = Ui.timeline();
                return (
                  t.add(yl(this.text)),
                  t.from(
                    this.figure,
                    {
                      yPercent: window.innerWidth >= 1200 ? 100 : 50,
                      duration: 2,
                      ease: "expo.out",
                      force3D: !0,
                    },
                    0.2
                  ),
                  t.add(wl(this.action), 0.7),
                  t.fromTo(
                    this.notice,
                    { opacity: 0 },
                    { opacity: 1, duration: 1 },
                    0.9
                  ),
                  t
                );
              }),
              (r.magicFill = function () {
                var t = this;
                bo.saveStyles([this.fill]),
                  bo.matchMedia({
                    "(min-width:1024px)": function () {
                      bo.create({
                        animation: bl(t.fill),
                        trigger: t.el,
                        start: "top top-=90px",
                        end: "20%",
                        scrub: !0,
                      });
                    },
                  });
              }),
              (r.onInit = function () {
                return new Promise(
                  function (t, e) {
                    return this.magicShow(), this.magicFill(), t();
                  }.bind(this)
                );
              }),
              i
            );
          })(r),
        },
        {
          namespace: "billboard",
          assign: ".pt-billboard",
          component: (function (t) {
            var e, n;
            function i() {
              var e;
              return (
                ((e = t.apply(this, arguments) || this).fill =
                  e.el.querySelector(".pt-billboard-fill")),
                e
              );
            }
            (n = t),
              ((e = i).prototype = Object.create(n.prototype)),
              (e.prototype.constructor = e),
              yu(e, n);
            var r = i.prototype;
            return (
              (r.magicFill = function () {
                var t = this;
                bo.saveStyles([this.fill]),
                  bo.matchMedia({
                    "(min-width:1024px)": function () {
                      bo.create({
                        animation: bl(t.fill),
                        trigger: t.el,
                        start: "center center",
                        end: "bottom center",
                        scrub: !0,
                      });
                    },
                  });
              }),
              (r.onInit = function () {
                return new Promise(
                  function (t, e) {
                    return this.magicFill(), t();
                  }.bind(this)
                );
              }),
              i
            );
          })(r),
        },
        {
          namespace: "feature",
          assign: ".pt-feature",
          component: (function (t) {
            var e, n;
            function i() {
              var e;
              return (
                ((e = t.apply(this, arguments) || this).roll =
                  e.el.querySelector(".pt-feature-roll")),
                (e.secions = e.el.querySelector(".pt-feature-sections")),
                (e.section = e.secions.querySelectorAll(".pt-feature-section")),
                e.startNavbarNavObserver(),
                e
              );
            }
            (n = t),
              ((e = i).prototype = Object.create(n.prototype)),
              (e.prototype.constructor = e),
              bu(e, n);
            var r = i.prototype;
            return (
              (r.magicRoll = function () {
                var t = this,
                  e = [];
                bo.saveStyles([this.roll]),
                  bo.matchMedia({
                    "(min-width:1024px)": function () {
                      bo.create({
                        animation: t.tlRoll(),
                        trigger: t.roll,
                        pin: !0,
                        start: "center center",
                        end: "400%",
                        scrub: !0,
                        invalidateOnRefresh: !0,
                        onUpdate: function () {
                          return e.forEach(function (t) {
                            return t.refresh(!1);
                          });
                        },
                      });
                    },
                  }),
                  this.section.forEach(function (n, i) {
                    var r = bo.create({
                      animation: t.tlShowSection(n),
                      trigger: n,
                      start:
                        i > 1 && window.innerWidth >= 1024
                          ? "left right"
                          : "center bottom",
                      once: !0,
                      horizontal: i > 1 && window.innerWidth >= 1024,
                    });
                    e.push(r);
                  });
              }),
              (r.tlShowSection = function (t) {
                var e = new Ui.timeline(),
                  n = t.querySelectorAll("h2,.pt-feature-text p"),
                  i = t.querySelector(".pt-feature-figure");
                return e.add(yl(n), 0), i && e.add(Dl(i), 0), e;
              }),
              (r.tlRoll = function () {
                var t = this,
                  e = new Ui.timeline();
                return (
                  e.set(this.secions, { willChange: "transform" }),
                  e.to(this.secions, {
                    x: function () {
                      return -t.secions.offsetWidth + window.innerWidth - 20;
                    },
                    duration: 1,
                    ease: "none",
                  }),
                  this.section.forEach(function (t, n) {
                    if (0 !== n) {
                      var i = t.querySelector(".pt-feature-figure"),
                        r = t.querySelector(".pt-feature-info");
                      e.set(i, { willChange: "transform" }),
                        1 === n &&
                          e.to(
                            i,
                            {
                              x: function () {
                                return r.clientWidth - i.clientWidth;
                              },
                              duration: 0.35,
                              ease: "none",
                            },
                            0.1
                          ),
                        2 === n &&
                          e.to(
                            i,
                            {
                              x: function () {
                                return r.clientWidth - i.clientWidth;
                              },
                              duration: 0.35,
                              ease: "none",
                            },
                            0.45
                          ),
                        3 === n &&
                          e.to(
                            i,
                            {
                              x: function () {
                                return (r.clientWidth - i.clientWidth) / 2;
                              },
                              duration: 0.2,
                              ease: "none",
                            },
                            0.8
                          ),
                        e.set(i, { willChange: "auto" });
                    }
                  }),
                  e.set(this.secions, { willChange: "auto" }, 1),
                  e
                );
              }),
              (r.startNavbarNavObserver = function () {
                var t = this.app.get("navbar").nav.find(function (t) {
                  return t.href.match(/#why$/);
                });
                if (!t) return !1;
                (this.navbarNavObserver = new IntersectionObserver(
                  function (e) {
                    t.classList.toggle("-active", e[0].isIntersecting);
                  },
                  { rootMargin: "0% 0% -93% 0%" }
                )),
                  this.navbarNavObserver.observe(this.el);
              }),
              (r.onInit = function () {
                return new Promise(
                  function (t, e) {
                    return this.magicRoll(), t();
                  }.bind(this)
                );
              }),
              (r.onDestroy = function () {
                return new Promise(
                  function (t, e) {
                    return (
                      this.navbarNavObserver &&
                        this.navbarNavObserver.disconnect(),
                      t()
                    );
                  }.bind(this)
                );
              }),
              i
            );
          })(r),
        },
        {
          namespace: "advantage",
          assign: ".pt-advantage",
          component: (function (t) {
            var e, n;
            function i() {
              var e;
              return (
                ((e = t.apply(this, arguments) || this).header =
                  e.el.querySelectorAll(".pt-advantage-header h2")),
                (e.section = e.el.querySelectorAll(".pt-advantage-section")),
                e
              );
            }
            (n = t),
              ((e = i).prototype = Object.create(n.prototype)),
              (e.prototype.constructor = e),
              xu(e, n);
            var r = i.prototype;
            return (
              (r.magicShow = function () {
                bo.create({
                  animation: yl(this.header),
                  trigger: this.header,
                  start: "top bottom",
                  once: !0,
                });
              }),
              (r.magicFigure = function () {
                var t = this;
                this.section.forEach(function (e, n) {
                  bo.matchMedia({
                    "(min-width:1024px)": function () {
                      bo.create({
                        animation: t.tlSection(e, n),
                        trigger: e,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: !0,
                      });
                    },
                  });
                  var i = e.querySelector("h3");
                  bo.create({
                    animation: yl(i),
                    trigger: i,
                    start: "top bottom",
                    once: !0,
                  });
                });
              }),
              (r.tlSection = function (t, e) {
                var n = new Ui.timeline(),
                  i = t.querySelector(".pt-advantage-grid-col.-left"),
                  r = t.querySelectorAll(".pt-advantage-figure-box");
                return (
                  bo.saveStyles([i, r]),
                  n.set([i, r], { willChange: "transform" }),
                  n.fromTo(
                    i,
                    { y: 100 },
                    { y: -100, duration: 1, ease: "none" },
                    0
                  ),
                  n.fromTo(
                    r,
                    { yPercent: -30 },
                    { yPercent: 30, duration: 1, ease: "none" },
                    0
                  ),
                  n.set([i, r], { willChange: "auto" }),
                  n
                );
              }),
              (r.magicNavbarInverse = function () {
                var t = this;
                bo.matchMedia({
                  "(min-width:1024px)": function () {
                    bo.create({
                      trigger: t.el,
                      start: "top top+=50px",
                      end: "bottom top+=70px",
                      toggleClass: {
                        targets: t.app.get("navbar").el,
                        className: "-inverse",
                      },
                    });
                  },
                });
              }),
              (r.onInit = function () {
                return new Promise(
                  function (t, e) {
                    return (
                      this.magicShow(),
                      this.magicFigure(),
                      this.magicNavbarInverse(),
                      t()
                    );
                  }.bind(this)
                );
              }),
              i
            );
          })(r),
        },
        {
          namespace: "explore",
          assign: ".pt-explore",
          component: (function (t) {
            var e, n;
            function i() {
              var e;
              return (
                ((e = t.apply(this, arguments) || this).header =
                  e.el.querySelector(".pt-explore-header > *")),
                (e.figure = e.el.querySelector(".pt-explore-figure")),
                (e.fill = e.el.querySelector(".pt-explore-fill")),
                (e.details = e.el.querySelector(".pt-explore-details")),
                (e.detail = e.details.querySelectorAll(".pt-explore-detail")),
                e
              );
            }
            (n = t),
              ((e = i).prototype = Object.create(n.prototype)),
              (e.prototype.constructor = e),
              wu(e, n);
            var r = i.prototype;
            return (
              (r.magicShow = function () {
                bo.create({
                  animation: yl(this.header),
                  trigger: this.header,
                  start: "top bottom",
                  once: !0,
                }),
                  bo.create({
                    animation: Dl(this.figure),
                    trigger: this.figure,
                    start: "top bottom",
                    once: !0,
                  }),
                  bo.create({
                    animation: this.tlShowDetails(),
                    trigger: this.details,
                    start: "top bottom",
                    once: !0,
                  });
              }),
              (r.tlShowDetails = function () {
                var t = new Ui.timeline();
                return (
                  t.set(this.detail, { willChange: "transform" }),
                  t.from(
                    this.detail,
                    { opacity: 0, duration: 0.4, stagger: 0.1 },
                    0
                  ),
                  t.from(
                    this.detail,
                    { y: 40, duration: 2, stagger: 0.1, ease: "expo.out" },
                    0
                  ),
                  t.set(this.detail, { willChange: "auto" }),
                  t
                );
              }),
              (r.magicFill = function () {
                var t = this;
                bo.saveStyles([this.fill]),
                  bo.matchMedia({
                    "(min-width:1024px)": function () {
                      bo.create({
                        animation: bl(t.fill),
                        trigger: t.el,
                        start: "bottom bottom",
                        end: "bottom 90%",
                        scrub: 0.2,
                      });
                    },
                  });
              }),
              (r.onInit = function () {
                return new Promise(
                  function (t, e) {
                    return this.magicShow(), this.magicFill(), t();
                  }.bind(this)
                );
              }),
              i
            );
          })(r),
        },
        {
          namespace: "partner",
          assign: ".pt-partner",
          component: (function (t) {
            var e, n;
            function i() {
              var e;
              return (
                ((e = t.apply(this, arguments) || this).header =
                  e.el.querySelector(".pt-partner-header > *")),
                (e.bundle = e.el.querySelector(".pt-partner-bundle")),
                (e.logos = e.el.querySelector(".pt-partner-logos")),
                (e.logo = Array.from(
                  e.el.querySelectorAll(".pt-partner-logo")
                )),
                e
              );
            }
            (n = t),
              ((e = i).prototype = Object.create(n.prototype)),
              (e.prototype.constructor = e),
              Du(e, n);
            var r = i.prototype;
            return (
              (r.magicShow = function () {
                bo.create({
                  animation: this.tlShow(),
                  trigger: this.header,
                  start: "top bottom",
                  once: !0,
                });
              }),
              (r.tlShow = function () {
                var t = new Ui.timeline();
                return t.add(yl(this.header), 0), t;
              }),
              (r.magicMarquee = function () {
                var t = this,
                  e = document.createDocumentFragment();
                this.logo.forEach(function (t) {
                  var n = t.cloneNode(!0);
                  n.classList.add("-clone"), e.appendChild(n);
                }),
                  this.logos.append(e);
                var n = function () {
                  bo.create({
                    animation: xl(t.logos, t.logo),
                    trigger: t.bundle,
                    start: "top bottom",
                    end: "bottom top",
                    toggleActions: "play pause play pause",
                  });
                };
                bo.saveStyles([this.logos]),
                  bo.matchMedia({
                    "(min-width:0px)": n,
                    "(min-width:768px)": n,
                    "(min-width:1600px)": n,
                  });
              }),
              (r.onInit = function () {
                return new Promise(
                  function (t, e) {
                    return this.magicShow(), this.magicMarquee(), t();
                  }.bind(this)
                );
              }),
              i
            );
          })(r),
        },
        {
          namespace: "pricing",
          assign: ".pt-pricing",
          component: (function (t) {
            var e, n;
            function i() {
              var e;
              return (
                ((e = t.apply(this, arguments) || this).header =
                  e.el.querySelector(".pt-pricing-header.-lg > *")),
                (e.headerXs = e.el.querySelector(".pt-pricing-header.-xs > *")),
                (e.char = e.el.querySelector(".pt-pricing-char")),
                (e.items = e.el.querySelector(".pt-pricing-items")),
                (e.item = e.items.querySelectorAll(".pt-pricing-item")),
                e.startNavbarNavObserver(),
                e
              );
            }
            (n = t),
              ((e = i).prototype = Object.create(n.prototype)),
              (e.prototype.constructor = e),
              _u(e, n);
            var r = i.prototype;
            return (
              (r.magicShow = function () {
                var t = this;
                bo.create({
                  animation: this.tlShowHeader(),
                  trigger: this.header,
                  start: "top bottom",
                  once: !0,
                }),
                  this.item.forEach(function (e, n) {
                    bo.create({
                      animation: t
                        .tlShowItem(e)
                        .delay(window.innerWidth >= 1024 ? 0.3 * n : 0),
                      trigger: e,
                      start: "top bottom",
                      once: !0,
                    });
                  });
              }),
              (r.tlShowHeader = function () {
                var t = new Ui.timeline();
                return (
                  t.add(yl(this.header)),
                  t.add(Dl(this.char), 0.4),
                  t.add(yl(this.headerXs), 0.7),
                  t
                );
              }),
              (r.tlShowItem = function (t, e) {
                var n = new Ui.timeline();
                return (
                  n.set(t, { willChange: "transform" }),
                  n.from(t, { opacity: 0, duration: 0.4, stagger: 0.1 }, 0),
                  n.from(
                    t,
                    { y: 100, duration: 2, ease: "expo.out", force3D: !0 },
                    0
                  ),
                  n.set(t, { willChange: "auto" }),
                  n
                );
              }),
              (r.startNavbarNavObserver = function () {
                var t = this.app.get("navbar").nav.find(function (t) {
                  return t.href.match(/#pricing$/);
                });
                if (!t) return !1;
                (this.navbarNavObserver = new IntersectionObserver(
                  function (e) {
                    t.classList.toggle("-active", e[0].isIntersecting);
                  },
                  { rootMargin: "0% 0% -93% 0%" }
                )),
                  this.navbarNavObserver.observe(this.el);
              }),
              (r.onInit = function () {
                return new Promise(
                  function (t, e) {
                    return this.magicShow(), t();
                  }.bind(this)
                );
              }),
              (r.onDestroy = function () {
                return new Promise(
                  function (t, e) {
                    return (
                      this.navbarNavObserver &&
                        this.navbarNavObserver.disconnect(),
                      t()
                    );
                  }.bind(this)
                );
              }),
              i
            );
          })(r),
        },
        {
          namespace: "tophead",
          assign: ".pt-tophead",
          component: (function (t) {
            var e, n;
            function i() {
              var e;
              return (
                ((e = t.apply(this, arguments) || this).content =
                  e.el.querySelector(".pt-tophead-content")),
                (e.header = e.el.querySelector(".pt-tophead-header h1")),
                (e.text = e.el.querySelector(".pt-tophead-text")),
                (e.fill = e.el.querySelector(".pt-tophead-fill")),
                (e.scene = e.el.querySelector(".pt-tophead-scene")),
                e
              );
            }
            (n = t),
              ((e = i).prototype = Object.create(n.prototype)),
              (e.prototype.constructor = e),
              Su(e, n);
            var r = i.prototype;
            return (
              (r.handleEnter = function () {
                this.enterTl = this.tlShow();
              }),
              (r.tlShow = function () {
                var t = new Ui.timeline({ paused: !0 });
                return (
                  this.header &&
                    t.add(yl(this.header, { stagger: 0.2, noRevert: !0 })),
                  this.text &&
                    (t.set(this.text, { willChange: "transform" }),
                    t.from(
                      this.text,
                      { y: 40, opacity: 0, duration: 2, ease: "expo.out" },
                      1
                    ),
                    t.set(this.text, { willChange: "auto" })),
                  t
                );
              }),
              (r.magicFill = function () {
                var t = this;
                bo.saveStyles([this.fill, this.scene]),
                  bo.matchMedia({
                    "(min-width:1024px)": function () {
                      bo.create({
                        animation: bl([t.fill, t.scene]),
                        trigger: t.el,
                        start: "bottom bottom",
                        end: "bottom center",
                        scrub: !0,
                      });
                    },
                  });
              }),
              (r.magicNavbarInverse = function () {
                bo.create({
                  trigger: this.el,
                  start: "top top+=50px",
                  end: "bottom top+=100px",
                  scrub: !0,
                  toggleClass: {
                    targets: this.app.get("navbar").el,
                    className: "-inverse",
                  },
                });
              }),
              (r.onInit = function () {
                return new Promise(
                  function (t, e) {
                    return (
                      this.magicFill(),
                      this.magicNavbarInverse(),
                      this.handleEnter(),
                      t()
                    );
                  }.bind(this)
                );
              }),
              (r.onEnter = function () {
                return new Promise(
                  function (t, e) {
                    if (this.enterTl)
                      return Promise.resolve(this.enterTl.play()).then(
                        function (t) {
                          try {
                            return n.call(this);
                          } catch (t) {
                            return e(t);
                          }
                        }.bind(this),
                        e
                      );
                    function n() {
                      return t();
                    }
                    return n.call(this);
                  }.bind(this)
                );
              }),
              i
            );
          })(r),
        },
        {
          namespace: "faq",
          assign: ".pt-faq",
          component: (function (t) {
            var e, n;
            function i() {
              var e;
              return (
                ((e = t.apply(this, arguments) || this).item =
                  e.el.querySelectorAll(".pt-faq-item")),
                e.bindToggle(),
                e
              );
            }
            (n = t),
              ((e = i).prototype = Object.create(n.prototype)),
              (e.prototype.constructor = e),
              Cu(e, n);
            var r = i.prototype;
            return (
              (r.bindToggle = function () {
                this.item.forEach(function (t) {
                  var e = t.querySelector(".pt-faq-info");
                  t.addEventListener("click", function () {
                    t.classList.toggle("-active"), bo.refresh();
                  }),
                    e.addEventListener("click", function (t) {
                      return t.stopPropagation();
                    });
                });
              }),
              (r.magicShow = function () {
                Ui.set(this.item, { opacity: 0 }),
                  bo.batch(this.item, {
                    onEnter: function (t, e) {
                      Ui.to(t, { opacity: 1, stagger: 0.15 });
                    },
                  });
              }),
              (r.onInit = function () {
                return new Promise(
                  function (t, e) {
                    return this.magicShow(), t();
                  }.bind(this)
                );
              }),
              (r.onRefresh = function () {
                return new Promise(
                  function (t, e) {
                    return this.magicShow(), t();
                  }.bind(this)
                );
              }),
              i
            );
          })(r),
        },
        {
          namespace: "card",
          assign: ".pt-card",
          component: (function (t) {
            var e, n;
            function i() {
              var e;
              return (
                ((e = t.apply(this, arguments) || this).item = Array.from(
                  e.el.querySelectorAll(".pt-card-item")
                )),
                e
              );
            }
            (n = t),
              ((e = i).prototype = Object.create(n.prototype)),
              (e.prototype.constructor = e),
              Eu(e, n);
            var r = i.prototype;
            return (
              (r.magicShow = function () {
                Ui.set(this.item, { opacity: 0, scale: 0.9 }),
                  bo.batch(this.item, {
                    onEnter: function (t, e) {
                      Ui.set(t, { willChange: "transform" }),
                        Ui.to(t, {
                          opacity: 1,
                          scale: 1,
                          stagger: 0.15,
                          force3D: !0,
                          onComplete: function () {
                            return Ui.set(t, { willChange: "auto" });
                          },
                        });
                    },
                  });
              }),
              (r.onInit = function () {
                return new Promise(
                  function (t, e) {
                    return this.magicShow(), t();
                  }.bind(this)
                );
              }),
              i
            );
          })(r),
        },
        {
          namespace: "demo",
          assign: ".pt-demo",
          component: (function (t) {
            var e, n;
            function i() {
              var e;
              return (
                ((e = t.apply(this, arguments) || this).header =
                  e.el.querySelector(".pt-demo-header h1")),
                (e.text = e.el.querySelector(".pt-demo-text p")),
                (e.iframe = e.el.querySelector(".pt-demo-iframe")),
                e
              );
            }
            (n = t),
              ((e = i).prototype = Object.create(n.prototype)),
              (e.prototype.constructor = e),
              Tu(e, n);
            var r = i.prototype;
            return (
              (r.handleEnter = function () {
                this.enterTl = this.tlShow();
              }),
              (r.tlShow = function () {
                var t = new Ui.timeline({ paused: !0 });
                return (
                  this.header && t.add(yl(this.header)),
                  this.text && t.add(yl(this.text), 0.2),
                  this.iframe &&
                    t.fromTo(
                      this.iframe,
                      { opacity: 0 },
                      { opacity: 1, duration: 0.4, ease: "none" },
                      0.6
                    ),
                  t
                );
              }),
              (r.onInit = function () {
                return new Promise(
                  function (t, e) {
                    return this.handleEnter(), t();
                  }.bind(this)
                );
              }),
              (r.onEnter = function () {
                return new Promise(
                  function (t, e) {
                    if (this.enterTl)
                      return Promise.resolve(this.enterTl.play()).then(
                        function (t) {
                          try {
                            return n.call(this);
                          } catch (t) {
                            return e(t);
                          }
                        }.bind(this),
                        e
                      );
                    function n() {
                      return t();
                    }
                    return n.call(this);
                  }.bind(this)
                );
              }),
              i
            );
          })(r),
        },
        {
          namespace: "outro",
          assign: ".pt-outro",
          component: (function (t) {
            var e, n;
            function i() {
              var e;
              return (
                ((e = t.apply(this, arguments) || this).header =
                  e.el.querySelector(".pt-outro-header h2")),
                (e.action = e.el.querySelector(".pt-outro-action")),
                (e.fill = e.el.querySelector(".pt-outro-fill")),
                e
              );
            }
            (n = t),
              ((e = i).prototype = Object.create(n.prototype)),
              (e.prototype.constructor = e),
              Pu(e, n);
            var r = i.prototype;
            return (
              (r.magicShow = function () {
                bo.create({
                  animation: this.tlShow(),
                  trigger: this.header,
                  start: "top bottom",
                  once: !0,
                });
              }),
              (r.tlShow = function () {
                var t = new Ui.timeline({ paused: !0 });
                return (
                  t.add(yl(this.header, { stagger: 0.2 })),
                  t.add(wl(this.action), 0.7),
                  t
                );
              }),
              (r.magicFill = function () {
                var t = this;
                bo.saveStyles([this.fill]),
                  bo.matchMedia({
                    "(min-width:1024px)": function () {
                      bo.create({
                        animation: bl(t.fill),
                        trigger: t.el,
                        start: "top top-=90px",
                        end: "bottom center",
                        scrub: !0,
                      });
                    },
                  });
              }),
              (r.onInit = function () {
                return new Promise(
                  function (t, e) {
                    return this.magicShow(), this.magicFill(), t();
                  }.bind(this)
                );
              }),
              i
            );
          })(r),
        },
        {
          namespace: "footer",
          assign: ".pt-footer",
          component: (function (t) {
            var e, n;
            function i() {
              var e;
              return (
                ((e = t.apply(this, arguments) || this).main =
                  e.el.querySelectorAll(".pt-footer-main")),
                e
              );
            }
            (n = t),
              ((e = i).prototype = Object.create(n.prototype)),
              (e.prototype.constructor = e),
              Au(e, n);
            var r = i.prototype;
            return (
              (r.magicParallax = function () {
                var t = this;
                bo.saveStyles([this.main]),
                  bo.matchMedia({
                    "(min-width:1050px)": function () {
                      bo.create({
                        animation: t.tlParallax(),
                        trigger: t.el,
                        start: "top bottom",
                        end: "bottom bottom",
                        scrub: !0,
                      });
                    },
                  });
              }),
              (r.tlParallax = function () {
                var t = new Ui.timeline();
                return (
                  t.set(this.main, { willChange: "transform" }),
                  t.fromTo(
                    this.main,
                    { yPercent: -50 },
                    { yPercent: 0, ease: "none", force3D: !0 }
                  ),
                  t.set(this.main, { willChange: "auto" }),
                  t
                );
              }),
              (r.onInit = function () {
                return new Promise(
                  function (t, e) {
                    return this.magicParallax(), t();
                  }.bind(this)
                );
              }),
              i
            );
          })(r),
        },
      ],
    });
    "serviceWorker" in navigator && navigator.serviceWorker.register("/sw.js");
  },
]);
