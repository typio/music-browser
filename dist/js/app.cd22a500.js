(function (t) {
  function e(e) {
    for (
      var r, a, o = e[0], l = e[1], b = e[2], s = 0, f = [];
      s < o.length;
      s++
    )
      (a = o[s]),
        Object.prototype.hasOwnProperty.call(c, a) && c[a] && f.push(c[a][0]),
        (c[a] = 0);
    for (r in l) Object.prototype.hasOwnProperty.call(l, r) && (t[r] = l[r]);
    i && i(e);
    while (f.length) f.shift()();
    return u.push.apply(u, b || []), n();
  }
  function n() {
    for (var t, e = 0; e < u.length; e++) {
      for (var n = u[e], r = !0, o = 1; o < n.length; o++) {
        var l = n[o];
        0 !== c[l] && (r = !1);
      }
      r && (u.splice(e--, 1), (t = a((a.s = n[0]))));
    }
    return t;
  }
  var r = {},
    c = { app: 0 },
    u = [];
  function a(e) {
    if (r[e]) return r[e].exports;
    var n = (r[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
  }
  (a.m = t),
    (a.c = r),
    (a.d = function (t, e, n) {
      a.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (a.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (a.t = function (t, e) {
      if ((1 & e && (t = a(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (a.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          a.d(
            n,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
          );
      return n;
    }),
    (a.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return a.d(e, "a", e), e;
    }),
    (a.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (a.p = "");
  var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = o.push.bind(o);
  (o.push = e), (o = o.slice());
  for (var b = 0; b < o.length; b++) e(o[b]);
  var i = l;
  u.push([0, "chunk-vendors"]), n();
})({
  0: function (t, e, n) {
    t.exports = n("cd49");
  },
  "27a5": function (t, e, n) {
    "use strict";
    n("84cd");
  },
  "84cd": function (t, e, n) {},
  af74: function (t, e, n) {},
  cc73: function (t, e, n) {
    "use strict";
    n("af74");
  },
  cd49: function (t, e, n) {
    "use strict";
    n.r(e);
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var r = n("7a23"),
      c = { id: "nav" },
      u = Object(r["g"])("Home"),
      a = Object(r["g"])(" | "),
      o = Object(r["g"])("About");
    function l(t, e) {
      var n = Object(r["x"])("router-link"),
        l = Object(r["x"])("router-view");
      return (
        Object(r["q"])(),
        Object(r["e"])(
          r["a"],
          null,
          [
            Object(r["f"])("div", c, [
              Object(r["h"])(
                n,
                { to: "/" },
                {
                  default: Object(r["C"])(function () {
                    return [u];
                  }),
                  _: 1,
                }
              ),
              a,
              Object(r["h"])(
                n,
                { to: "/about" },
                {
                  default: Object(r["C"])(function () {
                    return [o];
                  }),
                  _: 1,
                }
              ),
            ]),
            Object(r["h"])(l),
          ],
          64
        )
      );
    }
    n("cc73");
    var b = n("6b0d"),
      i = n.n(b);
    const s = {},
      f = i()(s, [["render", l]]);
    var p = f,
      d = n("6c02"),
      j = function (t) {
        return (
          Object(r["t"])("data-v-0bbcda06"), (t = t()), Object(r["r"])(), t
        );
      },
      O = j(function () {
        return Object(r["f"])("h1", null, "Albums", -1);
      }),
      m = j(function () {
        return Object(r["f"])(
          "input",
          { type: "search", placeholder: "Artist/Album Name" },
          null,
          -1
        );
      }),
      v = { class: "albums" };
    function h(t, e, n, c, u, a) {
      var o = Object(r["x"])("AlbumCard");
      return (
        Object(r["q"])(),
        Object(r["e"])(
          r["a"],
          null,
          [
            O,
            m,
            Object(r["f"])("div", v, [
              (Object(r["q"])(!0),
              Object(r["e"])(
                r["a"],
                null,
                Object(r["w"])(t.albums, function (t) {
                  return (
                    Object(r["q"])(),
                    Object(r["d"])(
                      o,
                      { key: t.collectionId, album: t },
                      null,
                      8,
                      ["album"]
                    )
                  );
                }),
                128
              )),
            ]),
          ],
          64
        )
      );
    }
    var y = { class: "album-card" },
      g = ["src"];
    function w(t, e, n, c, u, a) {
      return (
        Object(r["q"])(),
        Object(r["e"])("div", y, [
          Object(r["f"])("h2", null, Object(r["z"])(t.album.collectionName), 1),
          Object(r["f"])(
            "img",
            { src: t.album.artworkUrl100, alt: "" },
            null,
            8,
            g
          ),
          Object(r["f"])("h3", null, Object(r["z"])(t.album.artistName), 1),
        ])
      );
    }
    var A = Object(r["i"])({ name: "AlbumCard", props: { album: Object } });
    const _ = i()(A, [["render", w]]);
    var x = _,
      P = n("bc3a"),
      k = n.n(P),
      C = k.a.create({
        baseURL: "",
        withCredentials: !1,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }),
      q = {
        getEvents: function (t) {
          return C.get(t);
        },
      },
      S = "drake",
      M = Object(r["i"])({
        name: "AlbumList",
        components: { AlbumCard: x },
        data: function () {
          return { albums: null };
        },
        created: function () {
          var t = this;
          (void 0 == S && null == S) ||
            q
              .getEvents(
                "https://itunes.apple.com/search?term=" +
                  S +
                  "&country=us&entity=album"
              )
              .then(function (e) {
                t.albums = e.data.results;
              })
              .catch(function (t) {
                console.log(t);
              });
        },
      });
    n("27a5");
    const T = i()(M, [
      ["render", h],
      ["__scopeId", "data-v-0bbcda06"],
    ]);
    var I = T,
      L = { class: "about" },
      N = Object(r["f"])("h2", null, "Album browser using iTunes API.", -1),
      z = [N];
    function E(t, e) {
      return Object(r["q"])(), Object(r["e"])("div", L, z);
    }
    const J = {},
      U = i()(J, [["render", E]]);
    var H = U,
      R = [
        { path: "/", name: "AlbumList", component: I },
        { path: "/about", name: "About", component: H },
      ],
      B = Object(d["a"])({ history: Object(d["b"])(), routes: R }),
      D = B,
      F = n("5502"),
      G = Object(F["a"])({
        state: {},
        mutations: {},
        actions: {},
        modules: {},
      });
    Object(r["c"])(p).use(G).use(D).mount("#app");
  },
});
//# sourceMappingURL=app.cd22a500.js.map
