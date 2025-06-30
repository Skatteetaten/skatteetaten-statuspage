// This should be the same as the content as found at the end of the custom_footer.js file.
!(function () {
  "use strict";
  var e =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {};
  function lo(e) {
    throw new Error(
      'Could not dynamically require "' +
        e +
        '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
    );
  }
  function r(e) {
    var t = e.find("var");
    t.length
      ? t.each(function (e, t) {
          t = s(t);
          0 === e ? t.text("+ Vis alle") : 2 === e && t.text("hendelser");
        })
      : e.text("- Skjul hendelser");
  }
  function u(e) {
    return e
      .replace(" Scheduled for", "")
      .replace("CET", "")
      .replace("CEST", "")
      .replace(/\s/g, "");
  }
  function i() {
    s(".incident-history .expand-incidents").each(function (e, t) {
      s(this).find("button").length ||
        (s(t).prepend("<button>f</button>"),
        s(t).find("button").html(s(t).find("span").html()));
    }),
      s(".expand-incidents > button").each(function (e, t) {
        s(t).is("[data-translated]") ||
          (r(s(t)),
          s(this).click(function (t) {
            setTimeout(function () {
              var e = s(t.target);
              r(e.parent().find("span")),
                e.html(e.parent().find("span").html()),
                s(".scheduled-maintenance").each(function (e, t) {
                  o(s(t).find(".incident-title small"), !1, !1);
                }),
                s(".incident-data.incident-container").each(function (e, t) {
                  o(s(t).find(".secondary"), !1, !1);
                }),
                s(".page-title .scheduled-for").each(function (e, t) {
                  o(s(t), !0, !1);
                }),
                s(".update-row .update-timestamp").each(function (e, t) {
                  o(s(t), !0, !0);
                }),
                s(".incident-container .update small").each(function (e, t) {
                  o(s(t), !1, !1);
                });
            }, 30);
          }),
          s(t).attr("data-translated", "true"));
      });
  }
  (e = "undefined" != typeof window ? window : e),
    (t = function (x, L) {
      function v(e) {
        return (
          "function" == typeof e &&
          "number" != typeof e.nodeType &&
          "function" != typeof e.item
        );
      }
      function m(e) {
        return null != e && e === e.window;
      }
      var t = [],
        H = Object.getPrototypeOf,
        a = t.slice,
        R = t.flat
          ? function (e) {
              return t.flat.call(e);
            }
          : function (e) {
              return t.concat.apply([], e);
            },
        W = t.push,
        q = t.indexOf,
        F = {},
        I = F.toString,
        U = F.hasOwnProperty,
        V = U.toString,
        G = V.call(Object),
        y = {},
        b = x.document,
        $ = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function B(e, t, n) {
        var r,
          i,
          s = (n = n || b).createElement("script");
        if (((s.text = e), t))
          for (r in $)
            (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
              s.setAttribute(r, i);
        n.head.appendChild(s).parentNode.removeChild(s);
      }
      function p(e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? F[I.call(e)] || "object"
          : typeof e;
      }
      var e = "3.6.0",
        k = function (e, t) {
          return new k.fn.init(e, t);
        };
      function z(e) {
        var t = !!e && "length" in e && e.length,
          n = p(e);
        return (
          !v(e) &&
          !m(e) &&
          ("array" === n ||
            0 === t ||
            ("number" == typeof t && 0 < t && t - 1 in e))
        );
      }
      (k.fn = k.prototype =
        {
          jquery: e,
          constructor: k,
          length: 0,
          toArray: function () {
            return a.call(this);
          },
          get: function (e) {
            return null == e
              ? a.call(this)
              : e < 0
              ? this[e + this.length]
              : this[e];
          },
          pushStack: function (e) {
            e = k.merge(this.constructor(), e);
            return (e.prevObject = this), e;
          },
          each: function (e) {
            return k.each(this, e);
          },
          map: function (n) {
            return this.pushStack(
              k.map(this, function (e, t) {
                return n.call(e, t, e);
              })
            );
          },
          slice: function () {
            return this.pushStack(a.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          even: function () {
            return this.pushStack(
              k.grep(this, function (e, t) {
                return (t + 1) % 2;
              })
            );
          },
          odd: function () {
            return this.pushStack(
              k.grep(this, function (e, t) {
                return t % 2;
              })
            );
          },
          eq: function (e) {
            var t = this.length,
              e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: W,
          sort: t.sort,
          splice: t.splice,
        }),
        (k.extend = k.fn.extend =
          function () {
            var e,
              t,
              n,
              r,
              i,
              s = arguments[0] || {},
              o = 1,
              a = arguments.length,
              u = !1;
            for (
              "boolean" == typeof s && ((u = s), (s = arguments[o] || {}), o++),
                "object" == typeof s || v(s) || (s = {}),
                o === a && ((s = this), o--);
              o < a;
              o++
            )
              if (null != (e = arguments[o]))
                for (t in e)
                  (n = e[t]),
                    "__proto__" !== t &&
                      s !== n &&
                      (u && n && (k.isPlainObject(n) || (r = Array.isArray(n)))
                        ? ((i = s[t]),
                          (i =
                            r && !Array.isArray(i)
                              ? []
                              : r || k.isPlainObject(i)
                              ? i
                              : {}),
                          (r = !1),
                          (s[t] = k.extend(u, i, n)))
                        : void 0 !== n && (s[t] = n));
            return s;
          }),
        k.extend({
          expando: "jQuery" + (e + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {},
          isPlainObject: function (e) {
            return (
              !(!e || "[object Object]" !== I.call(e)) &&
              (!(e = H(e)) ||
                ("function" ==
                  typeof (e = U.call(e, "constructor") && e.constructor) &&
                  V.call(e) === G))
            );
          },
          isEmptyObject: function (e) {
            for (var t in e) return !1;
            return !0;
          },
          globalEval: function (e, t, n) {
            B(e, { nonce: t && t.nonce }, n);
          },
          each: function (e, t) {
            var n,
              r = 0;
            if (z(e))
              for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e;
          },
          makeArray: function (e, t) {
            t = t || [];
            return (
              null != e &&
                (z(Object(e))
                  ? k.merge(t, "string" == typeof e ? [e] : e)
                  : W.call(t, e)),
              t
            );
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : q.call(t, e, n);
          },
          merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
              e[i++] = t[r];
            return (e.length = i), e;
          },
          grep: function (e, t, n) {
            for (var r = [], i = 0, s = e.length, o = !n; i < s; i++)
              !t(e[i], i) != o && r.push(e[i]);
            return r;
          },
          map: function (e, t, n) {
            var r,
              i,
              s = 0,
              o = [];
            if (z(e))
              for (r = e.length; s < r; s++)
                null != (i = t(e[s], s, n)) && o.push(i);
            else for (s in e) null != (i = t(e[s], s, n)) && o.push(i);
            return R(o);
          },
          guid: 1,
          support: y,
        }),
        "function" == typeof Symbol &&
          (k.fn[Symbol.iterator] = t[Symbol.iterator]),
        k.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            F["[object " + t + "]"] = t.toLowerCase();
          }
        );
      function r(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
          if (1 === e.nodeType) {
            if (i && k(e).is(n)) break;
            r.push(e);
          }
        return r;
      }
      function Z(e, t) {
        for (var n = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && n.push(e);
        return n;
      }
      var e = (function (L) {
          function f(e, t) {
            return (
              (e = "0x" + e.slice(1) - 65536),
              t ||
                (e < 0
                  ? String.fromCharCode(65536 + e)
                  : String.fromCharCode((e >> 10) | 55296, (1023 & e) | 56320))
            );
          }
          function H(e, t) {
            return t
              ? "\0" === e
                ? "�"
                : e.slice(0, -1) +
                  "\\" +
                  e.charCodeAt(e.length - 1).toString(16) +
                  " "
              : "\\" + e;
          }
          function R() {
            b();
          }
          var e,
            d,
            w,
            s,
            W,
            h,
            q,
            F,
            x,
            u,
            l,
            b,
            k,
            n,
            S,
            p,
            r,
            i,
            m,
            D = "sizzle" + +new Date(),
            c = L.document,
            T = 0,
            I = 0,
            U = Y(),
            V = Y(),
            G = Y(),
            y = Y(),
            $ = function (e, t) {
              return e === t && (l = !0), 0;
            },
            B = {}.hasOwnProperty,
            t = [],
            z = t.pop,
            Z = t.push,
            M = t.push,
            X = t.slice,
            v = function (e, t) {
              for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t) return n;
              return -1;
            },
            J =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            o = "[\\x20\\t\\r\\n\\f]",
            a =
              "(?:\\\\[\\da-fA-F]{1,6}" +
              o +
              "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            Q =
              "\\[" +
              o +
              "*(" +
              a +
              ")(?:" +
              o +
              "*([*^$|!~]?=)" +
              o +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              a +
              "))|)" +
              o +
              "*\\]",
            K =
              ":(" +
              a +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              Q +
              ")*)|.*)\\)|)",
            ee = new RegExp(o + "+", "g"),
            g = new RegExp(
              "^" + o + "+|((?:^|[^\\\\])(?:\\\\.)*)" + o + "+$",
              "g"
            ),
            te = new RegExp("^" + o + "*," + o + "*"),
            ne = new RegExp("^" + o + "*([>+~]|" + o + ")" + o + "*"),
            re = new RegExp(o + "|>"),
            ie = new RegExp(K),
            se = new RegExp("^" + a + "$"),
            _ = {
              ID: new RegExp("^#(" + a + ")"),
              CLASS: new RegExp("^\\.(" + a + ")"),
              TAG: new RegExp("^(" + a + "|[*])"),
              ATTR: new RegExp("^" + Q),
              PSEUDO: new RegExp("^" + K),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  o +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  o +
                  "*(?:([+-]|)" +
                  o +
                  "*(\\d+)|))" +
                  o +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + J + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  o +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  o +
                  "*((?:-\\d)?\\d*)" +
                  o +
                  "*\\)|)(?=[^-]|$)",
                "i"
              ),
            },
            oe = /HTML$/i,
            ae = /^(?:input|select|textarea|button)$/i,
            ue = /^h\d$/i,
            C = /^[^{]+\{\s*\[native \w/,
            le = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ce = /[+~]/,
            N = new RegExp(
              "\\\\[\\da-fA-F]{1,6}" + o + "?|\\\\([^\\r\\n\\f])",
              "g"
            ),
            fe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            de = ve(
              function (e) {
                return (
                  !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                );
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            M.apply((t = X.call(c.childNodes)), c.childNodes),
              t[c.childNodes.length].nodeType;
          } catch (e) {
            M = {
              apply: t.length
                ? function (e, t) {
                    Z.apply(e, X.call(t));
                  }
                : function (e, t) {
                    for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                    e.length = n - 1;
                  },
            };
          }
          function O(t, e, n, r) {
            var i,
              s,
              o,
              a,
              u,
              l,
              c = e && e.ownerDocument,
              f = e ? e.nodeType : 9;
            if (
              ((n = n || []),
              "string" != typeof t || !t || (1 !== f && 9 !== f && 11 !== f))
            )
              return n;
            if (!r && (b(e), (e = e || k), S)) {
              if (11 !== f && (a = le.exec(t)))
                if ((i = a[1])) {
                  if (9 === f) {
                    if (!(l = e.getElementById(i))) return n;
                    if (l.id === i) return n.push(l), n;
                  } else if (
                    c &&
                    (l = c.getElementById(i)) &&
                    m(e, l) &&
                    l.id === i
                  )
                    return n.push(l), n;
                } else {
                  if (a[2]) return M.apply(n, e.getElementsByTagName(t)), n;
                  if (
                    (i = a[3]) &&
                    d.getElementsByClassName &&
                    e.getElementsByClassName
                  )
                    return M.apply(n, e.getElementsByClassName(i)), n;
                }
              if (
                d.qsa &&
                !y[t + " "] &&
                (!p || !p.test(t)) &&
                (1 !== f || "object" !== e.nodeName.toLowerCase())
              ) {
                if (((l = t), (c = e), 1 === f && (re.test(t) || ne.test(t)))) {
                  for (
                    ((c = (ce.test(t) && ye(e.parentNode)) || e) === e &&
                      d.scope) ||
                      ((o = e.getAttribute("id"))
                        ? (o = o.replace(fe, H))
                        : e.setAttribute("id", (o = D))),
                      s = (u = h(t)).length;
                    s--;

                  )
                    u[s] = (o ? "#" + o : ":scope") + " " + P(u[s]);
                  l = u.join(",");
                }
                try {
                  return M.apply(n, c.querySelectorAll(l)), n;
                } catch (e) {
                  y(t, !0);
                } finally {
                  o === D && e.removeAttribute("id");
                }
              }
            }
            return F(t.replace(g, "$1"), e, n, r);
          }
          function Y() {
            var n = [];
            function r(e, t) {
              return (
                n.push(e + " ") > w.cacheLength && delete r[n.shift()],
                (r[e + " "] = t)
              );
            }
            return r;
          }
          function E(e) {
            return (e[D] = !0), e;
          }
          function A(e) {
            var t = k.createElement("fieldset");
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t);
            }
          }
          function he(e, t) {
            for (var n = e.split("|"), r = n.length; r--; )
              w.attrHandle[n[r]] = t;
          }
          function pe(e, t) {
            var n = t && e,
              r =
                n &&
                1 === e.nodeType &&
                1 === t.nodeType &&
                e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function me(t) {
            return function (e) {
              return "form" in e
                ? e.parentNode && !1 === e.disabled
                  ? "label" in e
                    ? "label" in e.parentNode
                      ? e.parentNode.disabled === t
                      : e.disabled === t
                    : e.isDisabled === t || (e.isDisabled !== !t && de(e) === t)
                  : e.disabled === t
                : "label" in e && e.disabled === t;
            };
          }
          function j(o) {
            return E(function (s) {
              return (
                (s = +s),
                E(function (e, t) {
                  for (var n, r = o([], e.length, s), i = r.length; i--; )
                    e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
                })
              );
            });
          }
          function ye(e) {
            return e && void 0 !== e.getElementsByTagName && e;
          }
          for (e in ((d = O.support = {}),
          (W = O.isXML =
            function (e) {
              var t = e && e.namespaceURI,
                e = e && (e.ownerDocument || e).documentElement;
              return !oe.test(t || (e && e.nodeName) || "HTML");
            }),
          (b = O.setDocument =
            function (e) {
              var e = e ? e.ownerDocument || e : c;
              return (
                e != k &&
                  9 === e.nodeType &&
                  e.documentElement &&
                  ((n = (k = e).documentElement),
                  (S = !W(k)),
                  c != k &&
                    (e = k.defaultView) &&
                    e.top !== e &&
                    (e.addEventListener
                      ? e.addEventListener("unload", R, !1)
                      : e.attachEvent && e.attachEvent("onunload", R)),
                  (d.scope = A(function (e) {
                    return (
                      n.appendChild(e).appendChild(k.createElement("div")),
                      void 0 !== e.querySelectorAll &&
                        !e.querySelectorAll(":scope fieldset div").length
                    );
                  })),
                  (d.attributes = A(function (e) {
                    return (e.className = "i"), !e.getAttribute("className");
                  })),
                  (d.getElementsByTagName = A(function (e) {
                    return (
                      e.appendChild(k.createComment("")),
                      !e.getElementsByTagName("*").length
                    );
                  })),
                  (d.getElementsByClassName = C.test(k.getElementsByClassName)),
                  (d.getById = A(function (e) {
                    return (
                      (n.appendChild(e).id = D),
                      !k.getElementsByName || !k.getElementsByName(D).length
                    );
                  })),
                  d.getById
                    ? ((w.filter.ID = function (e) {
                        var t = e.replace(N, f);
                        return function (e) {
                          return e.getAttribute("id") === t;
                        };
                      }),
                      (w.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && S)
                          return (t = t.getElementById(e)) ? [t] : [];
                      }))
                    : ((w.filter.ID = function (e) {
                        var t = e.replace(N, f);
                        return function (e) {
                          e =
                            void 0 !== e.getAttributeNode &&
                            e.getAttributeNode("id");
                          return e && e.value === t;
                        };
                      }),
                      (w.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && S) {
                          var n,
                            r,
                            i,
                            s = t.getElementById(e);
                          if (s) {
                            if ((n = s.getAttributeNode("id")) && n.value === e)
                              return [s];
                            for (
                              i = t.getElementsByName(e), r = 0;
                              (s = i[r++]);

                            )
                              if (
                                (n = s.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [s];
                          }
                          return [];
                        }
                      })),
                  (w.find.TAG = d.getElementsByTagName
                    ? function (e, t) {
                        return void 0 !== t.getElementsByTagName
                          ? t.getElementsByTagName(e)
                          : d.qsa
                          ? t.querySelectorAll(e)
                          : void 0;
                      }
                    : function (e, t) {
                        var n,
                          r = [],
                          i = 0,
                          s = t.getElementsByTagName(e);
                        if ("*" !== e) return s;
                        for (; (n = s[i++]); ) 1 === n.nodeType && r.push(n);
                        return r;
                      }),
                  (w.find.CLASS =
                    d.getElementsByClassName &&
                    function (e, t) {
                      if (void 0 !== t.getElementsByClassName && S)
                        return t.getElementsByClassName(e);
                    }),
                  (r = []),
                  (p = []),
                  (d.qsa = C.test(k.querySelectorAll)) &&
                    (A(function (e) {
                      var t;
                      (n.appendChild(e).innerHTML =
                        "<a id='" +
                        D +
                        "'></a><select id='" +
                        D +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        e.querySelectorAll("[msallowcapture^='']").length &&
                          p.push("[*^$]=" + o + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length ||
                          p.push("\\[" + o + "*(?:value|" + J + ")"),
                        e.querySelectorAll("[id~=" + D + "-]").length ||
                          p.push("~="),
                        (t = k.createElement("input")).setAttribute("name", ""),
                        e.appendChild(t),
                        e.querySelectorAll("[name='']").length ||
                          p.push(
                            "\\[" + o + "*name" + o + "*=" + o + "*(?:''|\"\")"
                          ),
                        e.querySelectorAll(":checked").length ||
                          p.push(":checked"),
                        e.querySelectorAll("a#" + D + "+*").length ||
                          p.push(".#.+[+~]"),
                        e.querySelectorAll("\\\f"),
                        p.push("[\\r\\n\\f]");
                    }),
                    A(function (e) {
                      e.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var t = k.createElement("input");
                      t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length &&
                          p.push("name" + o + "*[*^$|!~]?="),
                        2 !== e.querySelectorAll(":enabled").length &&
                          p.push(":enabled", ":disabled"),
                        (n.appendChild(e).disabled = !0),
                        2 !== e.querySelectorAll(":disabled").length &&
                          p.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        p.push(",.*:");
                    })),
                  (d.matchesSelector = C.test(
                    (i =
                      n.matches ||
                      n.webkitMatchesSelector ||
                      n.mozMatchesSelector ||
                      n.oMatchesSelector ||
                      n.msMatchesSelector)
                  )) &&
                    A(function (e) {
                      (d.disconnectedMatch = i.call(e, "*")),
                        i.call(e, "[s!='']:x"),
                        r.push("!=", K);
                    }),
                  (p = p.length && new RegExp(p.join("|"))),
                  (r = r.length && new RegExp(r.join("|"))),
                  (e = C.test(n.compareDocumentPosition)),
                  (m =
                    e || C.test(n.contains)
                      ? function (e, t) {
                          var n = 9 === e.nodeType ? e.documentElement : e,
                            t = t && t.parentNode;
                          return (
                            e === t ||
                            !(
                              !t ||
                              1 !== t.nodeType ||
                              !(n.contains
                                ? n.contains(t)
                                : e.compareDocumentPosition &&
                                  16 & e.compareDocumentPosition(t))
                            )
                          );
                        }
                      : function (e, t) {
                          if (t)
                            for (; (t = t.parentNode); ) if (t === e) return !0;
                          return !1;
                        }),
                  ($ = e
                    ? function (e, t) {
                        if (e === t) return (l = !0), 0;
                        var n =
                          !e.compareDocumentPosition -
                          !t.compareDocumentPosition;
                        return (
                          n ||
                          (1 &
                            (n =
                              (e.ownerDocument || e) == (t.ownerDocument || t)
                                ? e.compareDocumentPosition(t)
                                : 1) ||
                          (!d.sortDetached &&
                            t.compareDocumentPosition(e) === n)
                            ? e == k || (e.ownerDocument == c && m(c, e))
                              ? -1
                              : t == k || (t.ownerDocument == c && m(c, t))
                              ? 1
                              : u
                              ? v(u, e) - v(u, t)
                              : 0
                            : 4 & n
                            ? -1
                            : 1)
                        );
                      }
                    : function (e, t) {
                        if (e === t) return (l = !0), 0;
                        var n,
                          r = 0,
                          i = e.parentNode,
                          s = t.parentNode,
                          o = [e],
                          a = [t];
                        if (!i || !s)
                          return e == k
                            ? -1
                            : t == k
                            ? 1
                            : i
                            ? -1
                            : s
                            ? 1
                            : u
                            ? v(u, e) - v(u, t)
                            : 0;
                        if (i === s) return pe(e, t);
                        for (n = e; (n = n.parentNode); ) o.unshift(n);
                        for (n = t; (n = n.parentNode); ) a.unshift(n);
                        for (; o[r] === a[r]; ) r++;
                        return r
                          ? pe(o[r], a[r])
                          : o[r] == c
                          ? -1
                          : a[r] == c
                          ? 1
                          : 0;
                      })),
                k
              );
            }),
          (O.matches = function (e, t) {
            return O(e, null, null, t);
          }),
          (O.matchesSelector = function (e, t) {
            if (
              (b(e),
              d.matchesSelector &&
                S &&
                !y[t + " "] &&
                (!r || !r.test(t)) &&
                (!p || !p.test(t)))
            )
              try {
                var n = i.call(e, t);
                if (
                  n ||
                  d.disconnectedMatch ||
                  (e.document && 11 !== e.document.nodeType)
                )
                  return n;
              } catch (e) {
                y(t, !0);
              }
            return 0 < O(t, k, null, [e]).length;
          }),
          (O.contains = function (e, t) {
            return (e.ownerDocument || e) != k && b(e), m(e, t);
          }),
          (O.attr = function (e, t) {
            (e.ownerDocument || e) != k && b(e);
            var n = w.attrHandle[t.toLowerCase()],
              n =
                n && B.call(w.attrHandle, t.toLowerCase())
                  ? n(e, t, !S)
                  : void 0;
            return void 0 !== n
              ? n
              : d.attributes || !S
              ? e.getAttribute(t)
              : (n = e.getAttributeNode(t)) && n.specified
              ? n.value
              : null;
          }),
          (O.escape = function (e) {
            return (e + "").replace(fe, H);
          }),
          (O.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (O.uniqueSort = function (e) {
            var t,
              n = [],
              r = 0,
              i = 0;
            if (
              ((l = !d.detectDuplicates),
              (u = !d.sortStable && e.slice(0)),
              e.sort($),
              l)
            ) {
              for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
              for (; r--; ) e.splice(n[r], 1);
            }
            return (u = null), e;
          }),
          (s = O.getText =
            function (e) {
              var t,
                n = "",
                r = 0,
                i = e.nodeType;
              if (i) {
                if (1 === i || 9 === i || 11 === i) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += s(e);
                } else if (3 === i || 4 === i) return e.nodeValue;
              } else for (; (t = e[r++]); ) n += s(t);
              return n;
            }),
          ((w = O.selectors =
            {
              cacheLength: 50,
              createPseudo: E,
              match: _,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" },
              },
              preFilter: {
                ATTR: function (e) {
                  return (
                    (e[1] = e[1].replace(N, f)),
                    (e[3] = (e[3] || e[4] || e[5] || "").replace(N, f)),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                  );
                },
                CHILD: function (e) {
                  return (
                    (e[1] = e[1].toLowerCase()),
                    "nth" === e[1].slice(0, 3)
                      ? (e[3] || O.error(e[0]),
                        (e[4] = +(e[4]
                          ? e[5] + (e[6] || 1)
                          : 2 * ("even" === e[3] || "odd" === e[3]))),
                        (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                      : e[3] && O.error(e[0]),
                    e
                  );
                },
                PSEUDO: function (e) {
                  var t,
                    n = !e[6] && e[2];
                  return _.CHILD.test(e[0])
                    ? null
                    : (e[3]
                        ? (e[2] = e[4] || e[5] || "")
                        : n &&
                          ie.test(n) &&
                          (t = h(n, !0)) &&
                          (t = n.indexOf(")", n.length - t) - n.length) &&
                          ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                      e.slice(0, 3));
                },
              },
              filter: {
                TAG: function (e) {
                  var t = e.replace(N, f).toLowerCase();
                  return "*" === e
                    ? function () {
                        return !0;
                      }
                    : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                      };
                },
                CLASS: function (e) {
                  var t = U[e + " "];
                  return (
                    t ||
                    ((t = new RegExp("(^|" + o + ")" + e + "(" + o + "|$)")) &&
                      U(e, function (e) {
                        return t.test(
                          ("string" == typeof e.className && e.className) ||
                            (void 0 !== e.getAttribute &&
                              e.getAttribute("class")) ||
                            ""
                        );
                      }))
                  );
                },
                ATTR: function (t, n, r) {
                  return function (e) {
                    e = O.attr(e, t);
                    return null == e
                      ? "!=" === n
                      : !n ||
                          ((e += ""),
                          "=" === n
                            ? e === r
                            : "!=" === n
                            ? e !== r
                            : "^=" === n
                            ? r && 0 === e.indexOf(r)
                            : "*=" === n
                            ? r && -1 < e.indexOf(r)
                            : "$=" === n
                            ? r && e.slice(-r.length) === r
                            : "~=" === n
                            ? -1 < (" " + e.replace(ee, " ") + " ").indexOf(r)
                            : "|=" === n &&
                              (e === r ||
                                e.slice(0, r.length + 1) === r + "-"));
                  };
                },
                CHILD: function (p, e, t, m, y) {
                  var g = "nth" !== p.slice(0, 3),
                    v = "last" !== p.slice(-4),
                    _ = "of-type" === e;
                  return 1 === m && 0 === y
                    ? function (e) {
                        return !!e.parentNode;
                      }
                    : function (e, t, n) {
                        var r,
                          i,
                          s,
                          o,
                          a,
                          u,
                          l = g != v ? "nextSibling" : "previousSibling",
                          c = e.parentNode,
                          f = _ && e.nodeName.toLowerCase(),
                          d = !n && !_,
                          h = !1;
                        if (c) {
                          if (g) {
                            for (; l; ) {
                              for (o = e; (o = o[l]); )
                                if (
                                  _
                                    ? o.nodeName.toLowerCase() === f
                                    : 1 === o.nodeType
                                )
                                  return !1;
                              u = l = "only" === p && !u && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((u = [v ? c.firstChild : c.lastChild]), v && d)
                          ) {
                            for (
                              h =
                                (a =
                                  (r =
                                    (i =
                                      (s = (o = c)[D] || (o[D] = {}))[
                                        o.uniqueID
                                      ] || (s[o.uniqueID] = {}))[p] ||
                                    [])[0] === T && r[1]) && r[2],
                                o = a && c.childNodes[a];
                              (o =
                                (++a && o && o[l]) || (h = a = 0) || u.pop());

                            )
                              if (1 === o.nodeType && ++h && o === e) {
                                i[p] = [T, a, h];
                                break;
                              }
                          } else if (
                            !1 ===
                            (h = d
                              ? (a =
                                  (r =
                                    (i =
                                      (s = (o = e)[D] || (o[D] = {}))[
                                        o.uniqueID
                                      ] || (s[o.uniqueID] = {}))[p] ||
                                    [])[0] === T && r[1])
                              : h)
                          )
                            for (
                              ;
                              (o =
                                (++a && o && o[l]) || (h = a = 0) || u.pop()) &&
                              ((_
                                ? o.nodeName.toLowerCase() !== f
                                : 1 !== o.nodeType) ||
                                !++h ||
                                (d &&
                                  ((i =
                                    (s = o[D] || (o[D] = {}))[o.uniqueID] ||
                                    (s[o.uniqueID] = {}))[p] = [T, h]),
                                o !== e));

                            );
                          return (h -= y) === m || (h % m == 0 && 0 <= h / m);
                        }
                      };
                },
                PSEUDO: function (e, s) {
                  var t,
                    o =
                      w.pseudos[e] ||
                      w.setFilters[e.toLowerCase()] ||
                      O.error("unsupported pseudo: " + e);
                  return o[D]
                    ? o(s)
                    : 1 < o.length
                    ? ((t = [e, e, "", s]),
                      w.setFilters.hasOwnProperty(e.toLowerCase())
                        ? E(function (e, t) {
                            for (var n, r = o(e, s), i = r.length; i--; )
                              e[(n = v(e, r[i]))] = !(t[n] = r[i]);
                          })
                        : function (e) {
                            return o(e, 0, t);
                          })
                    : o;
                },
              },
              pseudos: {
                not: E(function (e) {
                  var r = [],
                    i = [],
                    a = q(e.replace(g, "$1"));
                  return a[D]
                    ? E(function (e, t, n, r) {
                        for (var i, s = a(e, null, r, []), o = e.length; o--; )
                          (i = s[o]) && (e[o] = !(t[o] = i));
                      })
                    : function (e, t, n) {
                        return (
                          (r[0] = e), a(r, null, n, i), (r[0] = null), !i.pop()
                        );
                      };
                }),
                has: E(function (t) {
                  return function (e) {
                    return 0 < O(t, e).length;
                  };
                }),
                contains: E(function (t) {
                  return (
                    (t = t.replace(N, f)),
                    function (e) {
                      return -1 < (e.textContent || s(e)).indexOf(t);
                    }
                  );
                }),
                lang: E(function (n) {
                  return (
                    se.test(n || "") || O.error("unsupported lang: " + n),
                    (n = n.replace(N, f).toLowerCase()),
                    function (e) {
                      var t;
                      do {
                        if (
                          (t = S
                            ? e.lang
                            : e.getAttribute("xml:lang") ||
                              e.getAttribute("lang"))
                        )
                          return (
                            (t = t.toLowerCase()) === n ||
                            0 === t.indexOf(n + "-")
                          );
                      } while ((e = e.parentNode) && 1 === e.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (e) {
                  var t = L.location && L.location.hash;
                  return t && t.slice(1) === e.id;
                },
                root: function (e) {
                  return e === n;
                },
                focus: function (e) {
                  return (
                    e === k.activeElement &&
                    (!k.hasFocus || k.hasFocus()) &&
                    !!(e.type || e.href || ~e.tabIndex)
                  );
                },
                enabled: me(!1),
                disabled: me(!0),
                checked: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && !!e.checked) ||
                    ("option" === t && !!e.selected)
                  );
                },
                selected: function (e) {
                  return (
                    e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                  );
                },
                empty: function (e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                    if (e.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (e) {
                  return !w.pseudos.empty(e);
                },
                header: function (e) {
                  return ue.test(e.nodeName);
                },
                input: function (e) {
                  return ae.test(e.nodeName);
                },
                button: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && "button" === e.type) || "button" === t
                  );
                },
                text: function (e) {
                  return (
                    "input" === e.nodeName.toLowerCase() &&
                    "text" === e.type &&
                    (null == (e = e.getAttribute("type")) ||
                      "text" === e.toLowerCase())
                  );
                },
                first: j(function () {
                  return [0];
                }),
                last: j(function (e, t) {
                  return [t - 1];
                }),
                eq: j(function (e, t, n) {
                  return [n < 0 ? n + t : n];
                }),
                even: j(function (e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n);
                  return e;
                }),
                odd: j(function (e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n);
                  return e;
                }),
                lt: j(function (e, t, n) {
                  for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                    e.push(r);
                  return e;
                }),
                gt: j(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                  return e;
                }),
              },
            }).pseudos.nth = w.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            w.pseudos[e] = (function (t) {
              return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
              };
            })(e);
          for (e in { submit: !0, reset: !0 })
            w.pseudos[e] = (function (n) {
              return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n;
              };
            })(e);
          function ge() {}
          function P(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
          }
          function ve(o, e, t) {
            var a = e.dir,
              u = e.next,
              l = u || a,
              c = t && "parentNode" === l,
              f = I++;
            return e.first
              ? function (e, t, n) {
                  for (; (e = e[a]); )
                    if (1 === e.nodeType || c) return o(e, t, n);
                  return !1;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    s = [T, f];
                  if (n) {
                    for (; (e = e[a]); )
                      if ((1 === e.nodeType || c) && o(e, t, n)) return !0;
                  } else
                    for (; (e = e[a]); )
                      if (1 === e.nodeType || c)
                        if (
                          ((i =
                            (i = e[D] || (e[D] = {}))[e.uniqueID] ||
                            (i[e.uniqueID] = {})),
                          u && u === e.nodeName.toLowerCase())
                        )
                          e = e[a] || e;
                        else {
                          if ((r = i[l]) && r[0] === T && r[1] === f)
                            return (s[2] = r[2]);
                          if (((i[l] = s)[2] = o(e, t, n))) return !0;
                        }
                  return !1;
                };
          }
          function _e(i) {
            return 1 < i.length
              ? function (e, t, n) {
                  for (var r = i.length; r--; ) if (!i[r](e, t, n)) return !1;
                  return !0;
                }
              : i[0];
          }
          function we(e, t, n, r, i) {
            for (var s, o = [], a = 0, u = e.length, l = null != t; a < u; a++)
              !(s = e[a]) || (n && !n(s, r, i)) || (o.push(s), l && t.push(a));
            return o;
          }
          function xe(h, p, m, y, g, e) {
            return (
              y && !y[D] && (y = xe(y)),
              g && !g[D] && (g = xe(g, e)),
              E(function (e, t, n, r) {
                var i,
                  s,
                  o,
                  a = [],
                  u = [],
                  l = t.length,
                  c =
                    e ||
                    (function (e, t, n) {
                      for (var r = 0, i = t.length; r < i; r++) O(e, t[r], n);
                      return n;
                    })(p || "*", n.nodeType ? [n] : n, []),
                  f = !h || (!e && p) ? c : we(c, a, h, n, r),
                  d = m ? (g || (e ? h : l || y) ? [] : t) : f;
                if ((m && m(f, d, n, r), y))
                  for (i = we(d, u), y(i, [], n, r), s = i.length; s--; )
                    (o = i[s]) && (d[u[s]] = !(f[u[s]] = o));
                if (e) {
                  if (g || h) {
                    if (g) {
                      for (i = [], s = d.length; s--; )
                        (o = d[s]) && i.push((f[s] = o));
                      g(null, (d = []), i, r);
                    }
                    for (s = d.length; s--; )
                      (o = d[s]) &&
                        -1 < (i = g ? v(e, o) : a[s]) &&
                        (e[i] = !(t[i] = o));
                  }
                } else (d = we(d === t ? d.splice(l, d.length) : d)), g ? g(null, t, d, r) : M.apply(t, d);
              })
            );
          }
          function be(y, g) {
            function e(e, t, n, r, i) {
              var s,
                o,
                a,
                u = 0,
                l = "0",
                c = e && [],
                f = [],
                d = x,
                h = e || (_ && w.find.TAG("*", i)),
                p = (T += null == d ? 1 : Math.random() || 0.1),
                m = h.length;
              for (
                i && (x = t == k || t || i);
                l !== m && null != (s = h[l]);
                l++
              ) {
                if (_ && s) {
                  for (
                    o = 0, t || s.ownerDocument == k || (b(s), (n = !S));
                    (a = y[o++]);

                  )
                    if (a(s, t || k, n)) {
                      r.push(s);
                      break;
                    }
                  i && (T = p);
                }
                v && ((s = !a && s) && u--, e && c.push(s));
              }
              if (((u += l), v && l !== u)) {
                for (o = 0; (a = g[o++]); ) a(c, f, t, n);
                if (e) {
                  if (0 < u) for (; l--; ) c[l] || f[l] || (f[l] = z.call(r));
                  f = we(f);
                }
                M.apply(r, f),
                  i &&
                    !e &&
                    0 < f.length &&
                    1 < u + g.length &&
                    O.uniqueSort(r);
              }
              return i && ((T = p), (x = d)), c;
            }
            var v = 0 < g.length,
              _ = 0 < y.length;
            return v ? E(e) : e;
          }
          return (
            (ge.prototype = w.filters = w.pseudos),
            (w.setFilters = new ge()),
            (h = O.tokenize =
              function (e, t) {
                var n,
                  r,
                  i,
                  s,
                  o,
                  a,
                  u,
                  l = V[e + " "];
                if (l) return t ? 0 : l.slice(0);
                for (o = e, a = [], u = w.preFilter; o; ) {
                  for (s in ((n && !(r = te.exec(o))) ||
                    (r && (o = o.slice(r[0].length) || o), a.push((i = []))),
                  (n = !1),
                  (r = ne.exec(o)) &&
                    ((n = r.shift()),
                    i.push({ value: n, type: r[0].replace(g, " ") }),
                    (o = o.slice(n.length))),
                  w.filter))
                    !(r = _[s].exec(o)) ||
                      (u[s] && !(r = u[s](r))) ||
                      ((n = r.shift()),
                      i.push({ value: n, type: s, matches: r }),
                      (o = o.slice(n.length)));
                  if (!n) break;
                }
                return t ? o.length : o ? O.error(e) : V(e, a).slice(0);
              }),
            (q = O.compile =
              function (e, t) {
                var n,
                  r = [],
                  i = [],
                  s = G[e + " "];
                if (!s) {
                  for (n = (t = t || h(e)).length; n--; )
                    ((s = (function e(t) {
                      for (
                        var r,
                          n,
                          i,
                          s = t.length,
                          o = w.relative[t[0].type],
                          a = o || w.relative[" "],
                          u = o ? 1 : 0,
                          l = ve(
                            function (e) {
                              return e === r;
                            },
                            a,
                            !0
                          ),
                          c = ve(
                            function (e) {
                              return -1 < v(r, e);
                            },
                            a,
                            !0
                          ),
                          f = [
                            function (e, t, n) {
                              return (
                                (e =
                                  (!o && (n || t !== x)) ||
                                  ((r = t).nodeType ? l : c)(e, t, n)),
                                (r = null),
                                e
                              );
                            },
                          ];
                        u < s;
                        u++
                      )
                        if ((n = w.relative[t[u].type])) f = [ve(_e(f), n)];
                        else {
                          if (
                            (n = w.filter[t[u].type].apply(null, t[u].matches))[
                              D
                            ]
                          ) {
                            for (i = ++u; i < s && !w.relative[t[i].type]; i++);
                            return xe(
                              1 < u && _e(f),
                              1 < u &&
                                P(
                                  t.slice(0, u - 1).concat({
                                    value: " " === t[u - 2].type ? "*" : "",
                                  })
                                ).replace(g, "$1"),
                              n,
                              u < i && e(t.slice(u, i)),
                              i < s && e((t = t.slice(i))),
                              i < s && P(t)
                            );
                          }
                          f.push(n);
                        }
                      return _e(f);
                    })(t[n]))[D]
                      ? r
                      : i
                    ).push(s);
                  (s = G(e, be(i, r))).selector = e;
                }
                return s;
              }),
            (F = O.select =
              function (e, t, n, r) {
                var i,
                  s,
                  o,
                  a,
                  u,
                  l = "function" == typeof e && e,
                  c = !r && h((e = l.selector || e));
                if (((n = n || []), 1 === c.length)) {
                  if (
                    2 < (s = c[0] = c[0].slice(0)).length &&
                    "ID" === (o = s[0]).type &&
                    9 === t.nodeType &&
                    S &&
                    w.relative[s[1].type]
                  ) {
                    if (
                      !(t = (w.find.ID(o.matches[0].replace(N, f), t) || [])[0])
                    )
                      return n;
                    l && (t = t.parentNode),
                      (e = e.slice(s.shift().value.length));
                  }
                  for (
                    i = _.needsContext.test(e) ? 0 : s.length;
                    i-- && ((o = s[i]), !w.relative[(a = o.type)]);

                  )
                    if (
                      (u = w.find[a]) &&
                      (r = u(
                        o.matches[0].replace(N, f),
                        (ce.test(s[0].type) && ye(t.parentNode)) || t
                      ))
                    ) {
                      if ((s.splice(i, 1), (e = r.length && P(s)))) break;
                      return M.apply(n, r), n;
                    }
                }
                return (
                  (l || q(e, c))(
                    r,
                    t,
                    !S,
                    n,
                    !t || (ce.test(e) && ye(t.parentNode)) || t
                  ),
                  n
                );
              }),
            (d.sortStable = D.split("").sort($).join("") === D),
            (d.detectDuplicates = !!l),
            b(),
            (d.sortDetached = A(function (e) {
              return 1 & e.compareDocumentPosition(k.createElement("fieldset"));
            })),
            A(function (e) {
              return (
                (e.innerHTML = "<a href='#'></a>"),
                "#" === e.firstChild.getAttribute("href")
              );
            }) ||
              he("type|href|height|width", function (e, t, n) {
                if (!n)
                  return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
              }),
            (d.attributes &&
              A(function (e) {
                return (
                  (e.innerHTML = "<input/>"),
                  e.firstChild.setAttribute("value", ""),
                  "" === e.firstChild.getAttribute("value")
                );
              })) ||
              he("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                  return e.defaultValue;
              }),
            A(function (e) {
              return null == e.getAttribute("disabled");
            }) ||
              he(J, function (e, t, n) {
                if (!n)
                  return !0 === e[t]
                    ? t.toLowerCase()
                    : (n = e.getAttributeNode(t)) && n.specified
                    ? n.value
                    : null;
              }),
            O
          );
        })(x),
        X =
          ((k.find = e),
          (k.expr = e.selectors),
          (k.expr[":"] = k.expr.pseudos),
          (k.uniqueSort = k.unique = e.uniqueSort),
          (k.text = e.getText),
          (k.isXMLDoc = e.isXML),
          (k.contains = e.contains),
          (k.escapeSelector = e.escape),
          k.expr.match.needsContext);
      function u(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var J = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function Q(e, n, r) {
        return v(n)
          ? k.grep(e, function (e, t) {
              return !!n.call(e, t, e) !== r;
            })
          : n.nodeType
          ? k.grep(e, function (e) {
              return (e === n) !== r;
            })
          : "string" != typeof n
          ? k.grep(e, function (e) {
              return -1 < q.call(n, e) !== r;
            })
          : k.filter(n, e, r);
      }
      (k.filter = function (e, t, n) {
        var r = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === r.nodeType
            ? k.find.matchesSelector(r, e)
              ? [r]
              : []
            : k.find.matches(
                e,
                k.grep(t, function (e) {
                  return 1 === e.nodeType;
                })
              )
        );
      }),
        k.fn.extend({
          find: function (e) {
            var t,
              n,
              r = this.length,
              i = this;
            if ("string" != typeof e)
              return this.pushStack(
                k(e).filter(function () {
                  for (t = 0; t < r; t++) if (k.contains(i[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
            return 1 < r ? k.uniqueSort(n) : n;
          },
          filter: function (e) {
            return this.pushStack(Q(this, e || [], !1));
          },
          not: function (e) {
            return this.pushStack(Q(this, e || [], !0));
          },
          is: function (e) {
            return !!Q(
              this,
              "string" == typeof e && X.test(e) ? k(e) : e || [],
              !1
            ).length;
          },
        });
      var K,
        ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        te =
          (((k.fn.init = function (e, t, n) {
            if (!e) return this;
            if (((n = n || K), "string" != typeof e))
              return e.nodeType
                ? ((this[0] = e), (this.length = 1), this)
                : v(e)
                ? void 0 !== n.ready
                  ? n.ready(e)
                  : e(k)
                : k.makeArray(e, this);
            if (
              !(r =
                "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
                  ? [null, e, null]
                  : ee.exec(e)) ||
              (!r[1] && t)
            )
              return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
            if (r[1]) {
              if (
                ((t = t instanceof k ? t[0] : t),
                k.merge(
                  this,
                  k.parseHTML(
                    r[1],
                    t && t.nodeType ? t.ownerDocument || t : b,
                    !0
                  )
                ),
                J.test(r[1]) && k.isPlainObject(t))
              )
                for (var r in t)
                  v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
              return this;
            }
            return (
              (n = b.getElementById(r[2])) &&
                ((this[0] = n), (this.length = 1)),
              this
            );
          }).prototype = k.fn),
          (K = k(b)),
          /^(?:parents|prev(?:Until|All))/),
        ne = { children: !0, contents: !0, next: !0, prev: !0 };
      function re(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
      }
      k.fn.extend({
        has: function (e) {
          var t = k(e, this),
            n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) if (k.contains(this, t[e])) return !0;
          });
        },
        closest: function (e, t) {
          var n,
            r = 0,
            i = this.length,
            s = [],
            o = "string" != typeof e && k(e);
          if (!X.test(e))
            for (; r < i; r++)
              for (n = this[r]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (o
                    ? -1 < o.index(n)
                    : 1 === n.nodeType && k.find.matchesSelector(n, e))
                ) {
                  s.push(n);
                  break;
                }
          return this.pushStack(1 < s.length ? k.uniqueSort(s) : s);
        },
        index: function (e) {
          return e
            ? "string" == typeof e
              ? q.call(k(e), this[0])
              : q.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (e, t) {
          return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
        },
        addBack: function (e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        },
      }),
        k.each(
          {
            parent: function (e) {
              e = e.parentNode;
              return e && 11 !== e.nodeType ? e : null;
            },
            parents: function (e) {
              return r(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
              return r(e, "parentNode", n);
            },
            next: function (e) {
              return re(e, "nextSibling");
            },
            prev: function (e) {
              return re(e, "previousSibling");
            },
            nextAll: function (e) {
              return r(e, "nextSibling");
            },
            prevAll: function (e) {
              return r(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
              return r(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
              return r(e, "previousSibling", n);
            },
            siblings: function (e) {
              return Z((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return Z(e.firstChild);
            },
            contents: function (e) {
              return null != e.contentDocument && H(e.contentDocument)
                ? e.contentDocument
                : (u(e, "template") && (e = e.content || e),
                  k.merge([], e.childNodes));
            },
          },
          function (r, i) {
            k.fn[r] = function (e, t) {
              var n = k.map(this, i, e);
              return (
                (t = "Until" !== r.slice(-5) ? e : t) &&
                  "string" == typeof t &&
                  (n = k.filter(t, n)),
                1 < this.length &&
                  (ne[r] || k.uniqueSort(n), te.test(r) && n.reverse()),
                this.pushStack(n)
              );
            };
          }
        );
      var S = /[^\x20\t\r\n\f]+/g;
      function c(e) {
        return e;
      }
      function ie(e) {
        throw e;
      }
      function se(e, t, n, r) {
        var i;
        try {
          e && v((i = e.promise))
            ? i.call(e).done(t).fail(n)
            : e && v((i = e.then))
            ? i.call(e, t, n)
            : t.apply(void 0, [e].slice(r));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      (k.Callbacks = function (r) {
        var e, n;
        r =
          "string" == typeof r
            ? ((e = r),
              (n = {}),
              k.each(e.match(S) || [], function (e, t) {
                n[t] = !0;
              }),
              n)
            : k.extend({}, r);
        function i() {
          for (a = a || r.once, o = s = !0; l.length; c = -1)
            for (t = l.shift(); ++c < u.length; )
              !1 === u[c].apply(t[0], t[1]) &&
                r.stopOnFalse &&
                ((c = u.length), (t = !1));
          r.memory || (t = !1), (s = !1), a && (u = t ? [] : "");
        }
        var s,
          t,
          o,
          a,
          u = [],
          l = [],
          c = -1,
          f = {
            add: function () {
              return (
                u &&
                  (t && !s && ((c = u.length - 1), l.push(t)),
                  (function n(e) {
                    k.each(e, function (e, t) {
                      v(t)
                        ? (r.unique && f.has(t)) || u.push(t)
                        : t && t.length && "string" !== p(t) && n(t);
                    });
                  })(arguments),
                  t && !s && i()),
                this
              );
            },
            remove: function () {
              return (
                k.each(arguments, function (e, t) {
                  for (var n; -1 < (n = k.inArray(t, u, n)); )
                    u.splice(n, 1), n <= c && c--;
                }),
                this
              );
            },
            has: function (e) {
              return e ? -1 < k.inArray(e, u) : 0 < u.length;
            },
            empty: function () {
              return (u = u && []), this;
            },
            disable: function () {
              return (a = l = []), (u = t = ""), this;
            },
            disabled: function () {
              return !u;
            },
            lock: function () {
              return (a = l = []), t || s || (u = t = ""), this;
            },
            locked: function () {
              return !!a;
            },
            fireWith: function (e, t) {
              return (
                a ||
                  ((t = [e, (t = t || []).slice ? t.slice() : t]),
                  l.push(t),
                  s || i()),
                this
              );
            },
            fire: function () {
              return f.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!o;
            },
          };
        return f;
      }),
        k.extend({
          Deferred: function (e) {
            var s = [
                [
                  "notify",
                  "progress",
                  k.Callbacks("memory"),
                  k.Callbacks("memory"),
                  2,
                ],
                [
                  "resolve",
                  "done",
                  k.Callbacks("once memory"),
                  k.Callbacks("once memory"),
                  0,
                  "resolved",
                ],
                [
                  "reject",
                  "fail",
                  k.Callbacks("once memory"),
                  k.Callbacks("once memory"),
                  1,
                  "rejected",
                ],
              ],
              i = "pending",
              o = {
                state: function () {
                  return i;
                },
                always: function () {
                  return a.done(arguments).fail(arguments), this;
                },
                catch: function (e) {
                  return o.then(null, e);
                },
                pipe: function () {
                  var i = arguments;
                  return k
                    .Deferred(function (r) {
                      k.each(s, function (e, t) {
                        var n = v(i[t[4]]) && i[t[4]];
                        a[t[1]](function () {
                          var e = n && n.apply(this, arguments);
                          e && v(e.promise)
                            ? e
                                .promise()
                                .progress(r.notify)
                                .done(r.resolve)
                                .fail(r.reject)
                            : r[t[0] + "With"](this, n ? [e] : arguments);
                        });
                      }),
                        (i = null);
                    })
                    .promise();
                },
                then: function (t, n, r) {
                  var u = 0;
                  function l(i, s, o, a) {
                    return function () {
                      function e() {
                        var e, t;
                        if (!(i < u)) {
                          if ((e = o.apply(n, r)) === s.promise())
                            throw new TypeError("Thenable self-resolution");
                          (t =
                            e &&
                            ("object" == typeof e || "function" == typeof e) &&
                            e.then),
                            v(t)
                              ? a
                                ? t.call(e, l(u, s, c, a), l(u, s, ie, a))
                                : (u++,
                                  t.call(
                                    e,
                                    l(u, s, c, a),
                                    l(u, s, ie, a),
                                    l(u, s, c, s.notifyWith)
                                  ))
                              : (o !== c && ((n = void 0), (r = [e])),
                                (a || s.resolveWith)(n, r));
                        }
                      }
                      var n = this,
                        r = arguments,
                        t = a
                          ? e
                          : function () {
                              try {
                                e();
                              } catch (e) {
                                k.Deferred.exceptionHook &&
                                  k.Deferred.exceptionHook(e, t.stackTrace),
                                  u <= i + 1 &&
                                    (o !== ie && ((n = void 0), (r = [e])),
                                    s.rejectWith(n, r));
                              }
                            };
                      i
                        ? t()
                        : (k.Deferred.getStackHook &&
                            (t.stackTrace = k.Deferred.getStackHook()),
                          x.setTimeout(t));
                    };
                  }
                  return k
                    .Deferred(function (e) {
                      s[0][3].add(l(0, e, v(r) ? r : c, e.notifyWith)),
                        s[1][3].add(l(0, e, v(t) ? t : c)),
                        s[2][3].add(l(0, e, v(n) ? n : ie));
                    })
                    .promise();
                },
                promise: function (e) {
                  return null != e ? k.extend(e, o) : o;
                },
              },
              a = {};
            return (
              k.each(s, function (e, t) {
                var n = t[2],
                  r = t[5];
                (o[t[1]] = n.add),
                  r &&
                    n.add(
                      function () {
                        i = r;
                      },
                      s[3 - e][2].disable,
                      s[3 - e][3].disable,
                      s[0][2].lock,
                      s[0][3].lock
                    ),
                  n.add(t[3].fire),
                  (a[t[0]] = function () {
                    return (
                      a[t[0] + "With"](this === a ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (a[t[0] + "With"] = n.fireWith);
              }),
              o.promise(a),
              e && e.call(a, a),
              a
            );
          },
          when: function (e) {
            function t(t) {
              return function (e) {
                (i[t] = this),
                  (s[t] = 1 < arguments.length ? a.call(arguments) : e),
                  --n || o.resolveWith(i, s);
              };
            }
            var n = arguments.length,
              r = n,
              i = Array(r),
              s = a.call(arguments),
              o = k.Deferred();
            if (
              n <= 1 &&
              (se(e, o.done(t(r)).resolve, o.reject, !n),
              "pending" === o.state() || v(s[r] && s[r].then))
            )
              return o.then();
            for (; r--; ) se(s[r], t(r), o.reject);
            return o.promise();
          },
        });
      var oe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/,
        ae =
          ((k.Deferred.exceptionHook = function (e, t) {
            x.console &&
              x.console.warn &&
              e &&
              oe.test(e.name) &&
              x.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
              );
          }),
          (k.readyException = function (e) {
            x.setTimeout(function () {
              throw e;
            });
          }),
          k.Deferred());
      function ue() {
        b.removeEventListener("DOMContentLoaded", ue),
          x.removeEventListener("load", ue),
          k.ready();
      }
      (k.fn.ready = function (e) {
        return (
          ae.then(e).catch(function (e) {
            k.readyException(e);
          }),
          this
        );
      }),
        k.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            (!0 === e ? --k.readyWait : k.isReady) ||
              ((k.isReady = !0) !== e && 0 < --k.readyWait) ||
              ae.resolveWith(b, [k]);
          },
        }),
        (k.ready.then = ae.then),
        "complete" === b.readyState ||
        ("loading" !== b.readyState && !b.documentElement.doScroll)
          ? x.setTimeout(k.ready)
          : (b.addEventListener("DOMContentLoaded", ue),
            x.addEventListener("load", ue));
      function f(e, t, n, r, i, s, o) {
        var a = 0,
          u = e.length,
          l = null == n;
        if ("object" === p(n))
          for (a in ((i = !0), n)) f(e, t, a, n[a], !0, s, o);
        else if (
          void 0 !== r &&
          ((i = !0),
          v(r) || (o = !0),
          (t = l
            ? o
              ? (t.call(e, r), null)
              : ((l = t),
                function (e, t, n) {
                  return l.call(k(e), n);
                })
            : t))
        )
          for (; a < u; a++) t(e[a], n, o ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : s;
      }
      var le = /^-ms-/,
        ce = /-([a-z])/g;
      function fe(e, t) {
        return t.toUpperCase();
      }
      function _(e) {
        return e.replace(le, "ms-").replace(ce, fe);
      }
      function g(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      }
      function de() {
        this.expando = k.expando + de.uid++;
      }
      (de.uid = 1),
        (de.prototype = {
          cache: function (e) {
            var t = e[this.expando];
            return (
              t ||
                ((t = {}),
                g(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0,
                      }))),
              t
            );
          },
          set: function (e, t, n) {
            var r,
              i = this.cache(e);
            if ("string" == typeof t) i[_(t)] = n;
            else for (r in t) i[_(r)] = t[r];
            return i;
          },
          get: function (e, t) {
            return void 0 === t
              ? this.cache(e)
              : e[this.expando] && e[this.expando][_(t)];
          },
          access: function (e, t, n) {
            return void 0 === t || (t && "string" == typeof t && void 0 === n)
              ? this.get(e, t)
              : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function (e, t) {
            var n,
              r = e[this.expando];
            if (void 0 !== r) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t)
                  ? t.map(_)
                  : (t = _(t)) in r
                  ? [t]
                  : t.match(S) || []).length;
                for (; n--; ) delete r[t[n]];
              }
              (void 0 !== t && !k.isEmptyObject(r)) ||
                (e.nodeType
                  ? (e[this.expando] = void 0)
                  : delete e[this.expando]);
            }
          },
          hasData: function (e) {
            e = e[this.expando];
            return void 0 !== e && !k.isEmptyObject(e);
          },
        });
      var w = new de(),
        l = new de(),
        he = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        pe = /[A-Z]/g;
      function me(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
          if (
            ((r = "data-" + t.replace(pe, "-$&").toLowerCase()),
            "string" == typeof (n = e.getAttribute(r)))
          ) {
            try {
              n =
                "true" === (i = n) ||
                ("false" !== i &&
                  ("null" === i
                    ? null
                    : i === +i + ""
                    ? +i
                    : he.test(i)
                    ? JSON.parse(i)
                    : i));
            } catch (e) {}
            l.set(e, t, n);
          } else n = void 0;
        return n;
      }
      k.extend({
        hasData: function (e) {
          return l.hasData(e) || w.hasData(e);
        },
        data: function (e, t, n) {
          return l.access(e, t, n);
        },
        removeData: function (e, t) {
          l.remove(e, t);
        },
        _data: function (e, t, n) {
          return w.access(e, t, n);
        },
        _removeData: function (e, t) {
          w.remove(e, t);
        },
      }),
        k.fn.extend({
          data: function (n, e) {
            var t,
              r,
              i,
              s = this[0],
              o = s && s.attributes;
            if (void 0 !== n)
              return "object" == typeof n
                ? this.each(function () {
                    l.set(this, n);
                  })
                : f(
                    this,
                    function (e) {
                      var t;
                      if (s && void 0 === e)
                        return void 0 !== (t = l.get(s, n)) ||
                          void 0 !== (t = me(s, n))
                          ? t
                          : void 0;
                      this.each(function () {
                        l.set(this, n, e);
                      });
                    },
                    null,
                    e,
                    1 < arguments.length,
                    null,
                    !0
                  );
            if (
              this.length &&
              ((i = l.get(s)), 1 === s.nodeType && !w.get(s, "hasDataAttrs"))
            ) {
              for (t = o.length; t--; )
                o[t] &&
                  0 === (r = o[t].name).indexOf("data-") &&
                  ((r = _(r.slice(5))), me(s, r, i[r]));
              w.set(s, "hasDataAttrs", !0);
            }
            return i;
          },
          removeData: function (e) {
            return this.each(function () {
              l.remove(this, e);
            });
          },
        }),
        k.extend({
          queue: function (e, t, n) {
            var r;
            if (e)
              return (
                (r = w.get(e, (t = (t || "fx") + "queue"))),
                n &&
                  (!r || Array.isArray(n)
                    ? (r = w.access(e, t, k.makeArray(n)))
                    : r.push(n)),
                r || []
              );
          },
          dequeue: function (e, t) {
            t = t || "fx";
            var n = k.queue(e, t),
              r = n.length,
              i = n.shift(),
              s = k._queueHooks(e, t);
            "inprogress" === i && ((i = n.shift()), r--),
              i &&
                ("fx" === t && n.unshift("inprogress"),
                delete s.stop,
                i.call(
                  e,
                  function () {
                    k.dequeue(e, t);
                  },
                  s
                )),
              !r && s && s.empty.fire();
          },
          _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return (
              w.get(e, n) ||
              w.access(e, n, {
                empty: k.Callbacks("once memory").add(function () {
                  w.remove(e, [t + "queue", n]);
                }),
              })
            );
          },
        }),
        k.fn.extend({
          queue: function (t, n) {
            var e = 2;
            return (
              "string" != typeof t && ((n = t), (t = "fx"), e--),
              arguments.length < e
                ? k.queue(this[0], t)
                : void 0 === n
                ? this
                : this.each(function () {
                    var e = k.queue(this, t, n);
                    k._queueHooks(this, t),
                      "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t);
                  })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              k.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || "fx", []);
          },
          promise: function (e, t) {
            function n() {
              --i || s.resolveWith(o, [o]);
            }
            var r,
              i = 1,
              s = k.Deferred(),
              o = this,
              a = this.length;
            for (
              "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
              a--;

            )
              (r = w.get(o[a], e + "queueHooks")) &&
                r.empty &&
                (i++, r.empty.add(n));
            return n(), s.promise(t);
          },
        });
      function ye(e, t) {
        return (
          "none" === (e = t || e).style.display ||
          ("" === e.style.display && T(e) && "none" === k.css(e, "display"))
        );
      }
      var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ge = new RegExp("^(?:([+-])=|)(" + e + ")([a-z%]*)$", "i"),
        d = ["Top", "Right", "Bottom", "Left"],
        D = b.documentElement,
        T = function (e) {
          return k.contains(e.ownerDocument, e);
        },
        ve = { composed: !0 };
      D.getRootNode &&
        (T = function (e) {
          return (
            k.contains(e.ownerDocument, e) ||
            e.getRootNode(ve) === e.ownerDocument
          );
        });
      function _e(e, t, n, r) {
        var i,
          s,
          o = 20,
          a = r
            ? function () {
                return r.cur();
              }
            : function () {
                return k.css(e, t, "");
              },
          u = a(),
          l = (n && n[3]) || (k.cssNumber[t] ? "" : "px"),
          c =
            e.nodeType &&
            (k.cssNumber[t] || ("px" !== l && +u)) &&
            ge.exec(k.css(e, t));
        if (c && c[3] !== l) {
          for (l = l || c[3], c = +(u /= 2) || 1; o--; )
            k.style(e, t, c + l),
              (1 - s) * (1 - (s = a() / u || 0.5)) <= 0 && (o = 0),
              (c /= s);
          k.style(e, t, (c *= 2) + l), (n = n || []);
        }
        return (
          n &&
            ((c = +c || +u || 0),
            (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
            r && ((r.unit = l), (r.start = c), (r.end = i))),
          i
        );
      }
      var we = {};
      function M(e, t) {
        for (var n, r, i, s, o, a = [], u = 0, l = e.length; u < l; u++)
          (r = e[u]).style &&
            ((n = r.style.display),
            t
              ? ("none" === n &&
                  ((a[u] = w.get(r, "display") || null),
                  a[u] || (r.style.display = "")),
                "" === r.style.display &&
                  ye(r) &&
                  (a[u] =
                    ((o = s = void 0),
                    (s = (i = r).ownerDocument),
                    (i = i.nodeName),
                    (o = we[i]) ||
                      ((s = s.body.appendChild(s.createElement(i))),
                      (o = k.css(s, "display")),
                      s.parentNode.removeChild(s),
                      (we[i] = o = "none" === o ? "block" : o)))))
              : "none" !== n && ((a[u] = "none"), w.set(r, "display", n)));
        for (u = 0; u < l; u++) null != a[u] && (e[u].style.display = a[u]);
        return e;
      }
      k.fn.extend({
        show: function () {
          return M(this, !0);
        },
        hide: function () {
          return M(this);
        },
        toggle: function (e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                ye(this) ? k(this).show() : k(this).hide();
              });
        },
      });
      var xe = /^(?:checkbox|radio)$/i,
        be = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ke = /^$|^module$|\/(?:java|ecma)script/i,
        C =
          ((E = b.createDocumentFragment().appendChild(b.createElement("div"))),
          (o = b.createElement("input")).setAttribute("type", "radio"),
          o.setAttribute("checked", "checked"),
          o.setAttribute("name", "t"),
          E.appendChild(o),
          (y.checkClone = E.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (E.innerHTML = "<textarea>x</textarea>"),
          (y.noCloneChecked = !!E.cloneNode(!0).lastChild.defaultValue),
          (E.innerHTML = "<option></option>"),
          (y.option = !!E.lastChild),
          {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          });
      function N(e, t) {
        var n =
          void 0 !== e.getElementsByTagName
            ? e.getElementsByTagName(t || "*")
            : void 0 !== e.querySelectorAll
            ? e.querySelectorAll(t || "*")
            : [];
        return void 0 === t || (t && u(e, t)) ? k.merge([e], n) : n;
      }
      function Se(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          w.set(e[n], "globalEval", !t || w.get(t[n], "globalEval"));
      }
      (C.tbody = C.tfoot = C.colgroup = C.caption = C.thead),
        (C.th = C.td),
        y.option ||
          (C.optgroup = C.option =
            [1, "<select multiple='multiple'>", "</select>"]);
      var De = /<|&#?\w+;/;
      function Te(e, t, n, r, i) {
        for (
          var s,
            o,
            a,
            u,
            l,
            c = t.createDocumentFragment(),
            f = [],
            d = 0,
            h = e.length;
          d < h;
          d++
        )
          if ((s = e[d]) || 0 === s)
            if ("object" === p(s)) k.merge(f, s.nodeType ? [s] : s);
            else if (De.test(s)) {
              for (
                o = o || c.appendChild(t.createElement("div")),
                  a = (be.exec(s) || ["", ""])[1].toLowerCase(),
                  a = C[a] || C._default,
                  o.innerHTML = a[1] + k.htmlPrefilter(s) + a[2],
                  l = a[0];
                l--;

              )
                o = o.lastChild;
              k.merge(f, o.childNodes), ((o = c.firstChild).textContent = "");
            } else f.push(t.createTextNode(s));
        for (c.textContent = "", d = 0; (s = f[d++]); )
          if (r && -1 < k.inArray(s, r)) i && i.push(s);
          else if (
            ((u = T(s)), (o = N(c.appendChild(s), "script")), u && Se(o), n)
          )
            for (l = 0; (s = o[l++]); ) ke.test(s.type || "") && n.push(s);
        return c;
      }
      var Me = /^([^.]*)(?:\.(.+)|)/;
      function n() {
        return !0;
      }
      function h() {
        return !1;
      }
      function Ce(e, t) {
        return (
          (e ===
            (function () {
              try {
                return b.activeElement;
              } catch (e) {}
            })()) ==
          ("focus" === t)
        );
      }
      function Ne(e, t, n, r, i, s) {
        var o, a;
        if ("object" == typeof t) {
          for (a in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
            Ne(e, a, n, r, t[a], s);
          return e;
        }
        if (
          (null == r && null == i
            ? ((i = n), (r = n = void 0))
            : null == i &&
              ("string" == typeof n
                ? ((i = r), (r = void 0))
                : ((i = r), (r = n), (n = void 0))),
          !1 === i)
        )
          i = h;
        else if (!i) return e;
        return (
          1 === s &&
            ((o = i),
            ((i = function (e) {
              return k().off(e), o.apply(this, arguments);
            }).guid = o.guid || (o.guid = k.guid++))),
          e.each(function () {
            k.event.add(this, t, i, r, n);
          })
        );
      }
      function Oe(e, i, s) {
        s
          ? (w.set(e, i, !1),
            k.event.add(e, i, {
              namespace: !1,
              handler: function (e) {
                var t,
                  n,
                  r = w.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                  if (r.length)
                    (k.event.special[i] || {}).delegateType &&
                      e.stopPropagation();
                  else if (
                    ((r = a.call(arguments)),
                    w.set(this, i, r),
                    (t = s(this, i)),
                    this[i](),
                    r !== (n = w.get(this, i)) || t
                      ? w.set(this, i, !1)
                      : (n = {}),
                    r !== n)
                  )
                    return (
                      e.stopImmediatePropagation(),
                      e.preventDefault(),
                      n && n.value
                    );
                } else
                  r.length &&
                    (w.set(this, i, {
                      value: k.event.trigger(
                        k.extend(r[0], k.Event.prototype),
                        r.slice(1),
                        this
                      ),
                    }),
                    e.stopImmediatePropagation());
              },
            }))
          : void 0 === w.get(e, i) && k.event.add(e, i, n);
      }
      (k.event = {
        global: {},
        add: function (t, e, n, r, i) {
          var s,
            o,
            a,
            u,
            l,
            c,
            f,
            d,
            h,
            p = w.get(t);
          if (g(t))
            for (
              n.handler && ((n = (s = n).handler), (i = s.selector)),
                i && k.find.matchesSelector(D, i),
                n.guid || (n.guid = k.guid++),
                (a = p.events) || (a = p.events = Object.create(null)),
                (o = p.handle) ||
                  (o = p.handle =
                    function (e) {
                      return void 0 !== k && k.event.triggered !== e.type
                        ? k.event.dispatch.apply(t, arguments)
                        : void 0;
                    }),
                u = (e = (e || "").match(S) || [""]).length;
              u--;

            )
              (f = h = (d = Me.exec(e[u]) || [])[1]),
                (d = (d[2] || "").split(".").sort()),
                f &&
                  ((l = k.event.special[f] || {}),
                  (f = (i ? l.delegateType : l.bindType) || f),
                  (l = k.event.special[f] || {}),
                  (h = k.extend(
                    {
                      type: f,
                      origType: h,
                      data: r,
                      handler: n,
                      guid: n.guid,
                      selector: i,
                      needsContext: i && k.expr.match.needsContext.test(i),
                      namespace: d.join("."),
                    },
                    s
                  )),
                  (c = a[f]) ||
                    (((c = a[f] = []).delegateCount = 0),
                    (l.setup && !1 !== l.setup.call(t, r, d, o)) ||
                      (t.addEventListener && t.addEventListener(f, o))),
                  l.add &&
                    (l.add.call(t, h),
                    h.handler.guid || (h.handler.guid = n.guid)),
                  i ? c.splice(c.delegateCount++, 0, h) : c.push(h),
                  (k.event.global[f] = !0));
        },
        remove: function (e, t, n, r, i) {
          var s,
            o,
            a,
            u,
            l,
            c,
            f,
            d,
            h,
            p,
            m,
            y = w.hasData(e) && w.get(e);
          if (y && (u = y.events)) {
            for (l = (t = (t || "").match(S) || [""]).length; l--; )
              if (
                ((h = m = (a = Me.exec(t[l]) || [])[1]),
                (p = (a[2] || "").split(".").sort()),
                h)
              ) {
                for (
                  f = k.event.special[h] || {},
                    d = u[(h = (r ? f.delegateType : f.bindType) || h)] || [],
                    a =
                      a[2] &&
                      new RegExp(
                        "(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    o = s = d.length;
                  s--;

                )
                  (c = d[s]),
                    (!i && m !== c.origType) ||
                      (n && n.guid !== c.guid) ||
                      (a && !a.test(c.namespace)) ||
                      (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                      (d.splice(s, 1),
                      c.selector && d.delegateCount--,
                      f.remove && f.remove.call(e, c));
                o &&
                  !d.length &&
                  ((f.teardown && !1 !== f.teardown.call(e, p, y.handle)) ||
                    k.removeEvent(e, h, y.handle),
                  delete u[h]);
              } else for (h in u) k.event.remove(e, h + t[l], n, r, !0);
            k.isEmptyObject(u) && w.remove(e, "handle events");
          }
        },
        dispatch: function (e) {
          var t,
            n,
            r,
            i,
            s,
            o = new Array(arguments.length),
            a = k.event.fix(e),
            e = (w.get(this, "events") || Object.create(null))[a.type] || [],
            u = k.event.special[a.type] || {};
          for (o[0] = a, t = 1; t < arguments.length; t++) o[t] = arguments[t];
          if (
            ((a.delegateTarget = this),
            !u.preDispatch || !1 !== u.preDispatch.call(this, a))
          ) {
            for (
              s = k.event.handlers.call(this, a, e), t = 0;
              (r = s[t++]) && !a.isPropagationStopped();

            )
              for (
                a.currentTarget = r.elem, n = 0;
                (i = r.handlers[n++]) && !a.isImmediatePropagationStopped();

              )
                (a.rnamespace &&
                  !1 !== i.namespace &&
                  !a.rnamespace.test(i.namespace)) ||
                  ((a.handleObj = i),
                  (a.data = i.data),
                  void 0 !==
                    (i = (
                      (k.event.special[i.origType] || {}).handle || i.handler
                    ).apply(r.elem, o)) &&
                    !1 === (a.result = i) &&
                    (a.preventDefault(), a.stopPropagation()));
            return u.postDispatch && u.postDispatch.call(this, a), a.result;
          }
        },
        handlers: function (e, t) {
          var n,
            r,
            i,
            s,
            o,
            a = [],
            u = t.delegateCount,
            l = e.target;
          if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
            for (; l !== this; l = l.parentNode || this)
              if (
                1 === l.nodeType &&
                ("click" !== e.type || !0 !== l.disabled)
              ) {
                for (s = [], o = {}, n = 0; n < u; n++)
                  void 0 === o[(i = (r = t[n]).selector + " ")] &&
                    (o[i] = r.needsContext
                      ? -1 < k(i, this).index(l)
                      : k.find(i, this, null, [l]).length),
                    o[i] && s.push(r);
                s.length && a.push({ elem: l, handlers: s });
              }
          return (
            (l = this),
            u < t.length && a.push({ elem: l, handlers: t.slice(u) }),
            a
          );
        },
        addProp: function (t, e) {
          Object.defineProperty(k.Event.prototype, t, {
            enumerable: !0,
            configurable: !0,
            get: v(e)
              ? function () {
                  if (this.originalEvent) return e(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[t];
                },
            set: function (e) {
              Object.defineProperty(this, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e,
              });
            },
          });
        },
        fix: function (e) {
          return e[k.expando] ? e : new k.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (e) {
              e = this || e;
              return (
                xe.test(e.type) &&
                  e.click &&
                  u(e, "input") &&
                  Oe(e, "click", n),
                !1
              );
            },
            trigger: function (e) {
              e = this || e;
              return (
                xe.test(e.type) && e.click && u(e, "input") && Oe(e, "click"),
                !0
              );
            },
            _default: function (e) {
              e = e.target;
              return (
                (xe.test(e.type) &&
                  e.click &&
                  u(e, "input") &&
                  w.get(e, "click")) ||
                u(e, "a")
              );
            },
          },
          beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result);
            },
          },
        },
      }),
        (k.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }),
        (k.Event = function (e, t) {
          if (!(this instanceof k.Event)) return new k.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? n
                  : h),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && k.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[k.expando] = !0);
        }),
        (k.Event.prototype = {
          constructor: k.Event,
          isDefaultPrevented: h,
          isPropagationStopped: h,
          isImmediatePropagationStopped: h,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = n),
              e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = n),
              e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = n),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        k.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: !0,
          },
          k.event.addProp
        ),
        k.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          k.event.special[e] = {
            setup: function () {
              return Oe(this, e, Ce), !1;
            },
            trigger: function () {
              return Oe(this, e), !0;
            },
            _default: function () {
              return !0;
            },
            delegateType: t,
          };
        }),
        k.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (e, i) {
            k.event.special[e] = {
              delegateType: i,
              bindType: i,
              handle: function (e) {
                var t,
                  n = e.relatedTarget,
                  r = e.handleObj;
                return (
                  (n && (n === this || k.contains(this, n))) ||
                    ((e.type = r.origType),
                    (t = r.handler.apply(this, arguments)),
                    (e.type = i)),
                  t
                );
              },
            };
          }
        ),
        k.fn.extend({
          on: function (e, t, n, r) {
            return Ne(this, e, t, n, r);
          },
          one: function (e, t, n, r) {
            return Ne(this, e, t, n, r, 1);
          },
          off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
              return (
                (r = e.handleObj),
                k(e.delegateTarget).off(
                  r.namespace ? r.origType + "." + r.namespace : r.origType,
                  r.selector,
                  r.handler
                ),
                this
              );
            if ("object" != typeof e)
              return (
                (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                !1 === n && (n = h),
                this.each(function () {
                  k.event.remove(this, e, n, t);
                })
              );
            for (i in e) this.off(i, t, e[i]);
            return this;
          },
        });
      var Ye = /<script|<style|<link/i,
        Ee = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function je(e, t) {
        return (
          (u(e, "table") &&
            u(11 !== t.nodeType ? t : t.firstChild, "tr") &&
            k(e).children("tbody")[0]) ||
          e
        );
      }
      function Pe(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
      }
      function Le(e) {
        return (
          "true/" === (e.type || "").slice(0, 5)
            ? (e.type = e.type.slice(5))
            : e.removeAttribute("type"),
          e
        );
      }
      function He(e, t) {
        var n, r, i, s;
        if (1 === t.nodeType) {
          if (w.hasData(e) && (s = w.get(e).events))
            for (i in (w.remove(t, "handle events"), s))
              for (n = 0, r = s[i].length; n < r; n++)
                k.event.add(t, i, s[i][n]);
          l.hasData(e) &&
            ((e = l.access(e)), (e = k.extend({}, e)), l.set(t, e));
        }
      }
      function O(n, r, i, s) {
        r = R(r);
        var e,
          t,
          o,
          a,
          u,
          l,
          c = 0,
          f = n.length,
          d = f - 1,
          h = r[0],
          p = v(h);
        if (p || (1 < f && "string" == typeof h && !y.checkClone && Ee.test(h)))
          return n.each(function (e) {
            var t = n.eq(e);
            p && (r[0] = h.call(this, e, t.html())), O(t, r, i, s);
          });
        if (
          f &&
          ((t = (e = Te(r, n[0].ownerDocument, !1, n, s)).firstChild),
          1 === e.childNodes.length && (e = t),
          t || s)
        ) {
          for (a = (o = k.map(N(e, "script"), Pe)).length; c < f; c++)
            (u = e),
              c !== d &&
                ((u = k.clone(u, !0, !0)), a && k.merge(o, N(u, "script"))),
              i.call(n[c], u, c);
          if (a)
            for (
              l = o[o.length - 1].ownerDocument, k.map(o, Le), c = 0;
              c < a;
              c++
            )
              (u = o[c]),
                ke.test(u.type || "") &&
                  !w.access(u, "globalEval") &&
                  k.contains(l, u) &&
                  (u.src && "module" !== (u.type || "").toLowerCase()
                    ? k._evalUrl &&
                      !u.noModule &&
                      k._evalUrl(
                        u.src,
                        { nonce: u.nonce || u.getAttribute("nonce") },
                        l
                      )
                    : B(u.textContent.replace(Ae, ""), u, l));
        }
        return n;
      }
      function Re(e, t, n) {
        for (var r, i = t ? k.filter(t, e) : e, s = 0; null != (r = i[s]); s++)
          n || 1 !== r.nodeType || k.cleanData(N(r)),
            r.parentNode &&
              (n && T(r) && Se(N(r, "script")), r.parentNode.removeChild(r));
        return e;
      }
      k.extend({
        htmlPrefilter: function (e) {
          return e;
        },
        clone: function (e, t, n) {
          var r,
            i,
            s,
            o,
            a,
            u,
            l,
            c = e.cloneNode(!0),
            f = T(e);
          if (
            !(
              y.noCloneChecked ||
              (1 !== e.nodeType && 11 !== e.nodeType) ||
              k.isXMLDoc(e)
            )
          )
            for (o = N(c), r = 0, i = (s = N(e)).length; r < i; r++)
              (a = s[r]),
                (u = o[r]),
                (l = void 0),
                "input" === (l = u.nodeName.toLowerCase()) && xe.test(a.type)
                  ? (u.checked = a.checked)
                  : ("input" !== l && "textarea" !== l) ||
                    (u.defaultValue = a.defaultValue);
          if (t)
            if (n)
              for (
                s = s || N(e), o = o || N(c), r = 0, i = s.length;
                r < i;
                r++
              )
                He(s[r], o[r]);
            else He(e, c);
          return (
            0 < (o = N(c, "script")).length && Se(o, !f && N(e, "script")), c
          );
        },
        cleanData: function (e) {
          for (
            var t, n, r, i = k.event.special, s = 0;
            void 0 !== (n = e[s]);
            s++
          )
            if (g(n)) {
              if ((t = n[w.expando])) {
                if (t.events)
                  for (r in t.events)
                    i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                n[w.expando] = void 0;
              }
              n[l.expando] && (n[l.expando] = void 0);
            }
        },
      }),
        k.fn.extend({
          detach: function (e) {
            return Re(this, e, !0);
          },
          remove: function (e) {
            return Re(this, e);
          },
          text: function (e) {
            return f(
              this,
              function (e) {
                return void 0 === e
                  ? k.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = e);
                    });
              },
              null,
              e,
              arguments.length
            );
          },
          append: function () {
            return O(this, arguments, function (e) {
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                je(this, e).appendChild(e);
            });
          },
          prepend: function () {
            return O(this, arguments, function (e) {
              var t;
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                (t = je(this, e)).insertBefore(e, t.firstChild);
            });
          },
          before: function () {
            return O(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function () {
            return O(this, arguments, function (e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType && (k.cleanData(N(e, !1)), (e.textContent = ""));
            return this;
          },
          clone: function (e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function () {
                return k.clone(this, e, t);
              })
            );
          },
          html: function (e) {
            return f(
              this,
              function (e) {
                var t = this[0] || {},
                  n = 0,
                  r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if (
                  "string" == typeof e &&
                  !Ye.test(e) &&
                  !C[(be.exec(e) || ["", ""])[1].toLowerCase()]
                ) {
                  e = k.htmlPrefilter(e);
                  try {
                    for (; n < r; n++)
                      1 === (t = this[n] || {}).nodeType &&
                        (k.cleanData(N(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (e) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith: function () {
            var n = [];
            return O(
              this,
              arguments,
              function (e) {
                var t = this.parentNode;
                k.inArray(this, n) < 0 &&
                  (k.cleanData(N(this)), t && t.replaceChild(e, this));
              },
              n
            );
          },
        }),
        k.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (e, o) {
            k.fn[e] = function (e) {
              for (
                var t, n = [], r = k(e), i = r.length - 1, s = 0;
                s <= i;
                s++
              )
                (t = s === i ? this : this.clone(!0)),
                  k(r[s])[o](t),
                  W.apply(n, t.get());
              return this.pushStack(n);
            };
          }
        );
      function We(e) {
        var t = e.ownerDocument.defaultView;
        return (t = t && t.opener ? t : x).getComputedStyle(e);
      }
      function qe(e, t, n) {
        var r,
          i = {};
        for (r in t) (i[r] = e.style[r]), (e.style[r] = t[r]);
        for (r in ((n = n.call(e)), t)) e.style[r] = i[r];
        return n;
      }
      var Fe,
        Ie,
        Ue,
        Ve,
        Ge,
        $e,
        Be,
        i,
        ze = new RegExp("^(" + e + ")(?!px)[a-z%]+$", "i"),
        Ze = new RegExp(d.join("|"), "i");
      function Xe() {
        var e;
        i &&
          ((Be.style.cssText =
            "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (i.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          D.appendChild(Be).appendChild(i),
          (e = x.getComputedStyle(i)),
          (Fe = "1%" !== e.top),
          ($e = 12 === Je(e.marginLeft)),
          (i.style.right = "60%"),
          (Ve = 36 === Je(e.right)),
          (Ie = 36 === Je(e.width)),
          (i.style.position = "absolute"),
          (Ue = 12 === Je(i.offsetWidth / 3)),
          D.removeChild(Be),
          (i = null));
      }
      function Je(e) {
        return Math.round(parseFloat(e));
      }
      function Qe(e, t, n) {
        var r,
          i,
          s = e.style;
        return (
          (n = n || We(e)) &&
            ("" !== (i = n.getPropertyValue(t) || n[t]) ||
              T(e) ||
              (i = k.style(e, t)),
            !y.pixelBoxStyles() &&
              ze.test(i) &&
              Ze.test(t) &&
              ((e = s.width),
              (t = s.minWidth),
              (r = s.maxWidth),
              (s.minWidth = s.maxWidth = s.width = i),
              (i = n.width),
              (s.width = e),
              (s.minWidth = t),
              (s.maxWidth = r))),
          void 0 !== i ? i + "" : i
        );
      }
      function Ke(e, t) {
        return {
          get: function () {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          },
        };
      }
      (Be = b.createElement("div")),
        (i = b.createElement("div")).style &&
          ((i.style.backgroundClip = "content-box"),
          (i.cloneNode(!0).style.backgroundClip = ""),
          (y.clearCloneStyle = "content-box" === i.style.backgroundClip),
          k.extend(y, {
            boxSizingReliable: function () {
              return Xe(), Ie;
            },
            pixelBoxStyles: function () {
              return Xe(), Ve;
            },
            pixelPosition: function () {
              return Xe(), Fe;
            },
            reliableMarginLeft: function () {
              return Xe(), $e;
            },
            scrollboxSize: function () {
              return Xe(), Ue;
            },
            reliableTrDimensions: function () {
              var e, t, n;
              return (
                null == Ge &&
                  ((e = b.createElement("table")),
                  (t = b.createElement("tr")),
                  (n = b.createElement("div")),
                  (e.style.cssText =
                    "position:absolute;left:-11111px;border-collapse:separate"),
                  (t.style.cssText = "border:1px solid"),
                  (t.style.height = "1px"),
                  (n.style.height = "9px"),
                  (n.style.display = "block"),
                  D.appendChild(e).appendChild(t).appendChild(n),
                  (n = x.getComputedStyle(t)),
                  (Ge =
                    parseInt(n.height, 10) +
                      parseInt(n.borderTopWidth, 10) +
                      parseInt(n.borderBottomWidth, 10) ===
                    t.offsetHeight),
                  D.removeChild(e)),
                Ge
              );
            },
          }));
      var et = ["Webkit", "Moz", "ms"],
        tt = b.createElement("div").style,
        nt = {};
      function rt(e) {
        var t = k.cssProps[e] || nt[e];
        return (
          t ||
          (e in tt
            ? e
            : (nt[e] =
                (function (e) {
                  for (
                    var t = e[0].toUpperCase() + e.slice(1), n = et.length;
                    n--;

                  )
                    if ((e = et[n] + t) in tt) return e;
                })(e) || e))
        );
      }
      var it = /^(none|table(?!-c[ea]).+)/,
        st = /^--/,
        ot = { position: "absolute", visibility: "hidden", display: "block" },
        at = { letterSpacing: "0", fontWeight: "400" };
      function ut(e, t, n) {
        var r = ge.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
      }
      function lt(e, t, n, r, i, s) {
        var o = "width" === t ? 1 : 0,
          a = 0,
          u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; o < 4; o += 2)
          "margin" === n && (u += k.css(e, n + d[o], !0, i)),
            r
              ? ("content" === n && (u -= k.css(e, "padding" + d[o], !0, i)),
                "margin" !== n &&
                  (u -= k.css(e, "border" + d[o] + "Width", !0, i)))
              : ((u += k.css(e, "padding" + d[o], !0, i)),
                "padding" !== n
                  ? (u += k.css(e, "border" + d[o] + "Width", !0, i))
                  : (a += k.css(e, "border" + d[o] + "Width", !0, i)));
        return (
          !r &&
            0 <= s &&
            (u +=
              Math.max(
                0,
                Math.ceil(
                  e["offset" + t[0].toUpperCase() + t.slice(1)] -
                    s -
                    u -
                    a -
                    0.5
                )
              ) || 0),
          u
        );
      }
      function ct(e, t, n) {
        var r = We(e),
          i =
            (!y.boxSizingReliable() || n) &&
            "border-box" === k.css(e, "boxSizing", !1, r),
          s = i,
          o = Qe(e, t, r),
          a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (ze.test(o)) {
          if (!n) return o;
          o = "auto";
        }
        return (
          ((!y.boxSizingReliable() && i) ||
            (!y.reliableTrDimensions() && u(e, "tr")) ||
            "auto" === o ||
            (!parseFloat(o) && "inline" === k.css(e, "display", !1, r))) &&
            e.getClientRects().length &&
            ((i = "border-box" === k.css(e, "boxSizing", !1, r)),
            (s = a in e) && (o = e[a])),
          (o = parseFloat(o) || 0) +
            lt(e, t, n || (i ? "border" : "content"), s, r, o) +
            "px"
        );
      }
      function s(e, t, n, r, i) {
        return new s.prototype.init(e, t, n, r, i);
      }
      k.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) return "" === (t = Qe(e, "opacity")) ? "1" : t;
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var i,
              s,
              o,
              a = _(t),
              u = st.test(t),
              l = e.style;
            if (
              (u || (t = rt(a)),
              (o = k.cssHooks[t] || k.cssHooks[a]),
              void 0 === n)
            )
              return o && "get" in o && void 0 !== (i = o.get(e, !1, r))
                ? i
                : l[t];
            "string" === (s = typeof n) &&
              (i = ge.exec(n)) &&
              i[1] &&
              ((n = _e(e, t, i)), (s = "number")),
              null != n &&
                n == n &&
                ("number" !== s ||
                  u ||
                  (n += (i && i[3]) || (k.cssNumber[a] ? "" : "px")),
                y.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (l[t] = "inherit"),
                (o && "set" in o && void 0 === (n = o.set(e, n, r))) ||
                  (u ? l.setProperty(t, n) : (l[t] = n)));
          }
        },
        css: function (e, t, n, r) {
          var i,
            s = _(t);
          return (
            st.test(t) || (t = rt(s)),
            "normal" ===
              (i =
                void 0 ===
                (i =
                  (s = k.cssHooks[t] || k.cssHooks[s]) && "get" in s
                    ? s.get(e, !0, n)
                    : i)
                  ? Qe(e, t, r)
                  : i) &&
              t in at &&
              (i = at[t]),
            "" === n || n
              ? ((s = parseFloat(i)), !0 === n || isFinite(s) ? s || 0 : i)
              : i
          );
        },
      }),
        k.each(["height", "width"], function (e, o) {
          k.cssHooks[o] = {
            get: function (e, t, n) {
              if (t)
                return !it.test(k.css(e, "display")) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? ct(e, o, n)
                  : qe(e, ot, function () {
                      return ct(e, o, n);
                    });
            },
            set: function (e, t, n) {
              var r = We(e),
                i = !y.scrollboxSize() && "absolute" === r.position,
                s = (i || n) && "border-box" === k.css(e, "boxSizing", !1, r),
                n = n ? lt(e, o, n, s, r) : 0;
              return (
                s &&
                  i &&
                  (n -= Math.ceil(
                    e["offset" + o[0].toUpperCase() + o.slice(1)] -
                      parseFloat(r[o]) -
                      lt(e, o, "border", !1, r) -
                      0.5
                  )),
                n &&
                  (s = ge.exec(t)) &&
                  "px" !== (s[3] || "px") &&
                  ((e.style[o] = t), (t = k.css(e, o))),
                ut(0, t, n)
              );
            },
          };
        }),
        (k.cssHooks.marginLeft = Ke(y.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat(Qe(e, "marginLeft")) ||
                e.getBoundingClientRect().left -
                  qe(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        k.each({ margin: "", padding: "", border: "Width" }, function (i, s) {
          (k.cssHooks[i + s] = {
            expand: function (e) {
              for (
                var t = 0,
                  n = {},
                  r = "string" == typeof e ? e.split(" ") : [e];
                t < 4;
                t++
              )
                n[i + d[t] + s] = r[t] || r[t - 2] || r[0];
              return n;
            },
          }),
            "margin" !== i && (k.cssHooks[i + s].set = ut);
        }),
        k.fn.extend({
          css: function (e, t) {
            return f(
              this,
              function (e, t, n) {
                var r,
                  i,
                  s = {},
                  o = 0;
                if (Array.isArray(t)) {
                  for (r = We(e), i = t.length; o < i; o++)
                    s[t[o]] = k.css(e, t[o], !1, r);
                  return s;
                }
                return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
              },
              e,
              t,
              1 < arguments.length
            );
          },
        }),
        (((k.Tween = s).prototype = {
          constructor: s,
          init: function (e, t, n, r, i, s) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = i || k.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = r),
              (this.unit = s || (k.cssNumber[n] ? "" : "px"));
          },
          cur: function () {
            var e = s.propHooks[this.prop];
            return (e && e.get ? e : s.propHooks._default).get(this);
          },
          run: function (e) {
            var t,
              n = s.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t =
                    k.easing[this.easing](
                      e,
                      this.options.duration * e,
                      0,
                      1,
                      this.options.duration
                    ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              (n && n.set ? n : s.propHooks._default).set(this),
              this
            );
          },
        }).init.prototype = s.prototype),
        ((s.propHooks = {
          _default: {
            get: function (e) {
              return 1 !== e.elem.nodeType ||
                (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                ? e.elem[e.prop]
                : (e = k.css(e.elem, e.prop, "")) && "auto" !== e
                ? e
                : 0;
            },
            set: function (e) {
              k.fx.step[e.prop]
                ? k.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType ||
                  (!k.cssHooks[e.prop] && null == e.elem.style[rt(e.prop)])
                ? (e.elem[e.prop] = e.now)
                : k.style(e.elem, e.prop, e.now + e.unit);
            },
          },
        }).scrollTop = s.propHooks.scrollLeft =
          {
            set: function (e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
          }),
        (k.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (k.fx = s.prototype.init),
        (k.fx.step = {});
      var Y,
        ft,
        o,
        E,
        dt = /^(?:toggle|show|hide)$/,
        ht = /queueHooks$/;
      function pt() {
        ft &&
          (!1 === b.hidden && x.requestAnimationFrame
            ? x.requestAnimationFrame(pt)
            : x.setTimeout(pt, k.fx.interval),
          k.fx.tick());
      }
      function mt() {
        return (
          x.setTimeout(function () {
            Y = void 0;
          }),
          (Y = Date.now())
        );
      }
      function yt(e, t) {
        var n,
          r = 0,
          i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
          i["margin" + (n = d[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
      }
      function gt(e, t, n) {
        for (
          var r,
            i = (A.tweeners[t] || []).concat(A.tweeners["*"]),
            s = 0,
            o = i.length;
          s < o;
          s++
        )
          if ((r = i[s].call(n, t, e))) return r;
      }
      function A(i, e, t) {
        var n,
          s,
          r,
          o,
          a,
          u,
          l,
          c = 0,
          f = A.prefilters.length,
          d = k.Deferred().always(function () {
            delete h.elem;
          }),
          h = function () {
            if (s) return !1;
            for (
              var e = Y || mt(),
                e = Math.max(0, p.startTime + p.duration - e),
                t = 1 - (e / p.duration || 0),
                n = 0,
                r = p.tweens.length;
              n < r;
              n++
            )
              p.tweens[n].run(t);
            return (
              d.notifyWith(i, [p, t, e]),
              t < 1 && r
                ? e
                : (r || d.notifyWith(i, [p, 1, 0]), d.resolveWith(i, [p]), !1)
            );
          },
          p = d.promise({
            elem: i,
            props: k.extend({}, e),
            opts: k.extend(
              !0,
              { specialEasing: {}, easing: k.easing._default },
              t
            ),
            originalProperties: e,
            originalOptions: t,
            startTime: Y || mt(),
            duration: t.duration,
            tweens: [],
            createTween: function (e, t) {
              t = k.Tween(
                i,
                p.opts,
                e,
                t,
                p.opts.specialEasing[e] || p.opts.easing
              );
              return p.tweens.push(t), t;
            },
            stop: function (e) {
              var t = 0,
                n = e ? p.tweens.length : 0;
              if (s) return this;
              for (s = !0; t < n; t++) p.tweens[t].run(1);
              return (
                e
                  ? (d.notifyWith(i, [p, 1, 0]), d.resolveWith(i, [p, e]))
                  : d.rejectWith(i, [p, e]),
                this
              );
            },
          }),
          m = p.props,
          y = m,
          g = p.opts.specialEasing;
        for (r in y)
          if (
            ((a = g[(o = _(r))]),
            (u = y[r]),
            Array.isArray(u) && ((a = u[1]), (u = y[r] = u[0])),
            r !== o && ((y[o] = u), delete y[r]),
            (l = k.cssHooks[o]) && "expand" in l)
          )
            for (r in ((u = l.expand(u)), delete y[o], u))
              r in y || ((y[r] = u[r]), (g[r] = a));
          else g[o] = a;
        for (; c < f; c++)
          if ((n = A.prefilters[c].call(p, i, m, p.opts)))
            return (
              v(n.stop) &&
                (k._queueHooks(p.elem, p.opts.queue).stop = n.stop.bind(n)),
              n
            );
        return (
          k.map(m, gt, p),
          v(p.opts.start) && p.opts.start.call(i, p),
          p
            .progress(p.opts.progress)
            .done(p.opts.done, p.opts.complete)
            .fail(p.opts.fail)
            .always(p.opts.always),
          k.fx.timer(k.extend(h, { elem: i, anim: p, queue: p.opts.queue })),
          p
        );
      }
      (k.Animation = k.extend(A, {
        tweeners: {
          "*": [
            function (e, t) {
              var n = this.createTween(e, t);
              return _e(n.elem, e, ge.exec(t), n), n;
            },
          ],
        },
        tweener: function (e, t) {
          for (
            var n, r = 0, i = (e = v(e) ? ((t = e), ["*"]) : e.match(S)).length;
            r < i;
            r++
          )
            (n = e[r]),
              (A.tweeners[n] = A.tweeners[n] || []),
              A.tweeners[n].unshift(t);
        },
        prefilters: [
          function (e, t, n) {
            var r,
              i,
              s,
              o,
              a,
              u,
              l,
              c = "width" in t || "height" in t,
              f = this,
              d = {},
              h = e.style,
              p = e.nodeType && ye(e),
              m = w.get(e, "fxshow");
            for (r in (n.queue ||
              (null == (o = k._queueHooks(e, "fx")).unqueued &&
                ((o.unqueued = 0),
                (a = o.empty.fire),
                (o.empty.fire = function () {
                  o.unqueued || a();
                })),
              o.unqueued++,
              f.always(function () {
                f.always(function () {
                  o.unqueued--, k.queue(e, "fx").length || o.empty.fire();
                });
              })),
            t))
              if (((i = t[r]), dt.test(i))) {
                if (
                  (delete t[r],
                  (s = s || "toggle" === i),
                  i === (p ? "hide" : "show"))
                ) {
                  if ("show" !== i || !m || void 0 === m[r]) continue;
                  p = !0;
                }
                d[r] = (m && m[r]) || k.style(e, r);
              }
            if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d))
              for (r in (c &&
                1 === e.nodeType &&
                ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                null == (l = m && m.display) && (l = w.get(e, "display")),
                "none" === (c = k.css(e, "display")) &&
                  (l
                    ? (c = l)
                    : (M([e], !0),
                      (l = e.style.display || l),
                      (c = k.css(e, "display")),
                      M([e]))),
                ("inline" === c || ("inline-block" === c && null != l)) &&
                  "none" === k.css(e, "float") &&
                  (u ||
                    (f.done(function () {
                      h.display = l;
                    }),
                    null == l &&
                      ((c = h.display), (l = "none" === c ? "" : c))),
                  (h.display = "inline-block"))),
              n.overflow &&
                ((h.overflow = "hidden"),
                f.always(function () {
                  (h.overflow = n.overflow[0]),
                    (h.overflowX = n.overflow[1]),
                    (h.overflowY = n.overflow[2]);
                })),
              (u = !1),
              d))
                u ||
                  (m
                    ? "hidden" in m && (p = m.hidden)
                    : (m = w.access(e, "fxshow", { display: l })),
                  s && (m.hidden = !p),
                  p && M([e], !0),
                  f.done(function () {
                    for (r in (p || M([e]), w.remove(e, "fxshow"), d))
                      k.style(e, r, d[r]);
                  })),
                  (u = gt(p ? m[r] : 0, r, f)),
                  r in m ||
                    ((m[r] = u.start), p && ((u.end = u.start), (u.start = 0)));
          },
        ],
        prefilter: function (e, t) {
          t ? A.prefilters.unshift(e) : A.prefilters.push(e);
        },
      })),
        (k.speed = function (e, t, n) {
          var r =
            e && "object" == typeof e
              ? k.extend({}, e)
              : {
                  complete: n || (!n && t) || (v(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !v(t) && t),
                };
          return (
            k.fx.off
              ? (r.duration = 0)
              : "number" != typeof r.duration &&
                (r.duration in k.fx.speeds
                  ? (r.duration = k.fx.speeds[r.duration])
                  : (r.duration = k.fx.speeds._default)),
            (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
            (r.old = r.complete),
            (r.complete = function () {
              v(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue);
            }),
            r
          );
        }),
        k.fn.extend({
          fadeTo: function (e, t, n, r) {
            return this.filter(ye)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: t }, e, n, r);
          },
          animate: function (t, e, n, r) {
            function i() {
              var e = A(this, k.extend({}, t), o);
              (s || w.get(this, "finish")) && e.stop(!0);
            }
            var s = k.isEmptyObject(t),
              o = k.speed(e, n, r);
            return (
              (i.finish = i),
              s || !1 === o.queue ? this.each(i) : this.queue(o.queue, i)
            );
          },
          stop: function (i, e, s) {
            function o(e) {
              var t = e.stop;
              delete e.stop, t(s);
            }
            return (
              "string" != typeof i && ((s = e), (e = i), (i = void 0)),
              e && this.queue(i || "fx", []),
              this.each(function () {
                var e = !0,
                  t = null != i && i + "queueHooks",
                  n = k.timers,
                  r = w.get(this);
                if (t) r[t] && r[t].stop && o(r[t]);
                else for (t in r) r[t] && r[t].stop && ht.test(t) && o(r[t]);
                for (t = n.length; t--; )
                  n[t].elem !== this ||
                    (null != i && n[t].queue !== i) ||
                    (n[t].anim.stop(s), (e = !1), n.splice(t, 1));
                (!e && s) || k.dequeue(this, i);
              })
            );
          },
          finish: function (o) {
            return (
              !1 !== o && (o = o || "fx"),
              this.each(function () {
                var e,
                  t = w.get(this),
                  n = t[o + "queue"],
                  r = t[o + "queueHooks"],
                  i = k.timers,
                  s = n ? n.length : 0;
                for (
                  t.finish = !0,
                    k.queue(this, o, []),
                    r && r.stop && r.stop.call(this, !0),
                    e = i.length;
                  e--;

                )
                  i[e].elem === this &&
                    i[e].queue === o &&
                    (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < s; e++)
                  n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish;
              })
            );
          },
        }),
        k.each(["toggle", "show", "hide"], function (e, r) {
          var i = k.fn[r];
          k.fn[r] = function (e, t, n) {
            return null == e || "boolean" == typeof e
              ? i.apply(this, arguments)
              : this.animate(yt(r, !0), e, t, n);
          };
        }),
        k.each(
          {
            slideDown: yt("show"),
            slideUp: yt("hide"),
            slideToggle: yt("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (e, r) {
            k.fn[e] = function (e, t, n) {
              return this.animate(r, e, t, n);
            };
          }
        ),
        (k.timers = []),
        (k.fx.tick = function () {
          var e,
            t = 0,
            n = k.timers;
          for (Y = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || k.fx.stop(), (Y = void 0);
        }),
        (k.fx.timer = function (e) {
          k.timers.push(e), k.fx.start();
        }),
        (k.fx.interval = 13),
        (k.fx.start = function () {
          ft || ((ft = !0), pt());
        }),
        (k.fx.stop = function () {
          ft = null;
        }),
        (k.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (k.fn.delay = function (r, e) {
          return (
            (r = (k.fx && k.fx.speeds[r]) || r),
            this.queue((e = e || "fx"), function (e, t) {
              var n = x.setTimeout(e, r);
              t.stop = function () {
                x.clearTimeout(n);
              };
            })
          );
        }),
        (o = b.createElement("input")),
        (E = b.createElement("select").appendChild(b.createElement("option"))),
        (o.type = "checkbox"),
        (y.checkOn = "" !== o.value),
        (y.optSelected = E.selected),
        ((o = b.createElement("input")).value = "t"),
        (o.type = "radio"),
        (y.radioValue = "t" === o.value);
      var vt,
        _t = k.expr.attrHandle,
        wt =
          (k.fn.extend({
            attr: function (e, t) {
              return f(this, k.attr, e, t, 1 < arguments.length);
            },
            removeAttr: function (e) {
              return this.each(function () {
                k.removeAttr(this, e);
              });
            },
          }),
          k.extend({
            attr: function (e, t, n) {
              var r,
                i,
                s = e.nodeType;
              if (3 !== s && 8 !== s && 2 !== s)
                return void 0 === e.getAttribute
                  ? k.prop(e, t, n)
                  : ((1 === s && k.isXMLDoc(e)) ||
                      (i =
                        k.attrHooks[t.toLowerCase()] ||
                        (k.expr.match.bool.test(t) ? vt : void 0)),
                    void 0 !== n
                      ? null === n
                        ? void k.removeAttr(e, t)
                        : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                        ? r
                        : (e.setAttribute(t, n + ""), n)
                      : !(i && "get" in i && null !== (r = i.get(e, t))) &&
                        null == (r = k.find.attr(e, t))
                      ? void 0
                      : r);
            },
            attrHooks: {
              type: {
                set: function (e, t) {
                  var n;
                  if (!y.radioValue && "radio" === t && u(e, "input"))
                    return (
                      (n = e.value),
                      e.setAttribute("type", t),
                      n && (e.value = n),
                      t
                    );
                },
              },
            },
            removeAttr: function (e, t) {
              var n,
                r = 0,
                i = t && t.match(S);
              if (i && 1 === e.nodeType)
                for (; (n = i[r++]); ) e.removeAttribute(n);
            },
          }),
          (vt = {
            set: function (e, t, n) {
              return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
          }),
          k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var o = _t[t] || k.find.attr;
            _t[t] = function (e, t, n) {
              var r,
                i,
                s = t.toLowerCase();
              return (
                n ||
                  ((i = _t[s]),
                  (_t[s] = r),
                  (r = null != o(e, t, n) ? s : null),
                  (_t[s] = i)),
                r
              );
            };
          }),
          /^(?:input|select|textarea|button)$/i),
        xt = /^(?:a|area)$/i;
      function j(e) {
        return (e.match(S) || []).join(" ");
      }
      function P(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
      }
      function bt(e) {
        return Array.isArray(e)
          ? e
          : ("string" == typeof e && e.match(S)) || [];
      }
      k.fn.extend({
        prop: function (e, t) {
          return f(this, k.prop, e, t, 1 < arguments.length);
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[k.propFix[e] || e];
          });
        },
      }),
        k.extend({
          prop: function (e, t, n) {
            var r,
              i,
              s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s)
              return (
                (1 === s && k.isXMLDoc(e)) ||
                  ((t = k.propFix[t] || t), (i = k.propHooks[t])),
                void 0 !== n
                  ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                    ? r
                    : (e[t] = n)
                  : i && "get" in i && null !== (r = i.get(e, t))
                  ? r
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = k.find.attr(e, "tabindex");
                return t
                  ? parseInt(t, 10)
                  : wt.test(e.nodeName) || (xt.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        y.optSelected ||
          (k.propHooks.selected = {
            get: function (e) {
              e = e.parentNode;
              return e && e.parentNode && e.parentNode.selectedIndex, null;
            },
            set: function (e) {
              e = e.parentNode;
              e &&
                (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
            },
          }),
        k.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            k.propFix[this.toLowerCase()] = this;
          }
        ),
        k.fn.extend({
          addClass: function (t) {
            var e,
              n,
              r,
              i,
              s,
              o,
              a = 0;
            if (v(t))
              return this.each(function (e) {
                k(this).addClass(t.call(this, e, P(this)));
              });
            if ((e = bt(t)).length)
              for (; (n = this[a++]); )
                if (((o = P(n)), (r = 1 === n.nodeType && " " + j(o) + " "))) {
                  for (s = 0; (i = e[s++]); )
                    r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                  o !== (o = j(r)) && n.setAttribute("class", o);
                }
            return this;
          },
          removeClass: function (t) {
            var e,
              n,
              r,
              i,
              s,
              o,
              a = 0;
            if (v(t))
              return this.each(function (e) {
                k(this).removeClass(t.call(this, e, P(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if ((e = bt(t)).length)
              for (; (n = this[a++]); )
                if (((o = P(n)), (r = 1 === n.nodeType && " " + j(o) + " "))) {
                  for (s = 0; (i = e[s++]); )
                    for (; -1 < r.indexOf(" " + i + " "); )
                      r = r.replace(" " + i + " ", " ");
                  o !== (o = j(r)) && n.setAttribute("class", o);
                }
            return this;
          },
          toggleClass: function (i, t) {
            var s = typeof i,
              o = "string" == s || Array.isArray(i);
            return "boolean" == typeof t && o
              ? t
                ? this.addClass(i)
                : this.removeClass(i)
              : v(i)
              ? this.each(function (e) {
                  k(this).toggleClass(i.call(this, e, P(this), t), t);
                })
              : this.each(function () {
                  var e, t, n, r;
                  if (o)
                    for (t = 0, n = k(this), r = bt(i); (e = r[t++]); )
                      n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                  else
                    (void 0 !== i && "boolean" != s) ||
                      ((e = P(this)) && w.set(this, "__className__", e),
                      this.setAttribute &&
                        this.setAttribute(
                          "class",
                          (!e && !1 !== i && w.get(this, "__className__")) || ""
                        ));
                });
          },
          hasClass: function (e) {
            for (var t, n = 0, r = " " + e + " "; (t = this[n++]); )
              if (1 === t.nodeType && -1 < (" " + j(P(t)) + " ").indexOf(r))
                return !0;
            return !1;
          },
        });
      function kt(e) {
        e.stopPropagation();
      }
      var St = /\r/g,
        Dt =
          (k.fn.extend({
            val: function (t) {
              var n,
                e,
                r,
                i = this[0];
              return arguments.length
                ? ((r = v(t)),
                  this.each(function (e) {
                    1 === this.nodeType &&
                      (null == (e = r ? t.call(this, e, k(this).val()) : t)
                        ? (e = "")
                        : "number" == typeof e
                        ? (e += "")
                        : Array.isArray(e) &&
                          (e = k.map(e, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((n =
                        k.valHooks[this.type] ||
                        k.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in n &&
                        void 0 !== n.set(this, e, "value")) ||
                        (this.value = e));
                  }))
                : i
                ? (n =
                    k.valHooks[i.type] ||
                    k.valHooks[i.nodeName.toLowerCase()]) &&
                  "get" in n &&
                  void 0 !== (e = n.get(i, "value"))
                  ? e
                  : "string" == typeof (e = i.value)
                  ? e.replace(St, "")
                  : null == e
                  ? ""
                  : e
                : void 0;
            },
          }),
          k.extend({
            valHooks: {
              option: {
                get: function (e) {
                  var t = k.find.attr(e, "value");
                  return null != t ? t : j(k.text(e));
                },
              },
              select: {
                get: function (e) {
                  for (
                    var t,
                      n = e.options,
                      r = e.selectedIndex,
                      i = "select-one" === e.type,
                      s = i ? null : [],
                      o = i ? r + 1 : n.length,
                      a = r < 0 ? o : i ? r : 0;
                    a < o;
                    a++
                  )
                    if (
                      ((t = n[a]).selected || a === r) &&
                      !t.disabled &&
                      (!t.parentNode.disabled || !u(t.parentNode, "optgroup"))
                    ) {
                      if (((t = k(t).val()), i)) return t;
                      s.push(t);
                    }
                  return s;
                },
                set: function (e, t) {
                  for (
                    var n, r, i = e.options, s = k.makeArray(t), o = i.length;
                    o--;

                  )
                    ((r = i[o]).selected =
                      -1 < k.inArray(k.valHooks.option.get(r), s)) && (n = !0);
                  return n || (e.selectedIndex = -1), s;
                },
              },
            },
          }),
          k.each(["radio", "checkbox"], function () {
            (k.valHooks[this] = {
              set: function (e, t) {
                if (Array.isArray(t))
                  return (e.checked = -1 < k.inArray(k(e).val(), t));
              },
            }),
              y.checkOn ||
                (k.valHooks[this].get = function (e) {
                  return null === e.getAttribute("value") ? "on" : e.value;
                });
          }),
          (y.focusin = "onfocusin" in x),
          /^(?:focusinfocus|focusoutblur)$/),
        Tt =
          (k.extend(k.event, {
            trigger: function (e, t, n, r) {
              var i,
                s,
                o,
                a,
                u,
                l,
                c,
                f = [n || b],
                d = U.call(e, "type") ? e.type : e,
                h = U.call(e, "namespace") ? e.namespace.split(".") : [],
                p = (c = s = n = n || b);
              if (
                3 !== n.nodeType &&
                8 !== n.nodeType &&
                !Dt.test(d + k.event.triggered) &&
                (-1 < d.indexOf(".") &&
                  ((d = (h = d.split(".")).shift()), h.sort()),
                (a = d.indexOf(":") < 0 && "on" + d),
                ((e = e[k.expando]
                  ? e
                  : new k.Event(d, "object" == typeof e && e)).isTrigger = r
                  ? 2
                  : 3),
                (e.namespace = h.join(".")),
                (e.rnamespace = e.namespace
                  ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
                  : null),
                (e.result = void 0),
                e.target || (e.target = n),
                (t = null == t ? [e] : k.makeArray(t, [e])),
                (l = k.event.special[d] || {}),
                r || !l.trigger || !1 !== l.trigger.apply(n, t))
              ) {
                if (!r && !l.noBubble && !m(n)) {
                  for (
                    o = l.delegateType || d,
                      Dt.test(o + d) || (p = p.parentNode);
                    p;
                    p = p.parentNode
                  )
                    f.push(p), (s = p);
                  s === (n.ownerDocument || b) &&
                    f.push(s.defaultView || s.parentWindow || x);
                }
                for (i = 0; (p = f[i++]) && !e.isPropagationStopped(); )
                  (c = p),
                    (e.type = 1 < i ? o : l.bindType || d),
                    (u =
                      (w.get(p, "events") || Object.create(null))[e.type] &&
                      w.get(p, "handle")) && u.apply(p, t),
                    (u = a && p[a]) &&
                      u.apply &&
                      g(p) &&
                      ((e.result = u.apply(p, t)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = d),
                  r ||
                    e.isDefaultPrevented() ||
                    (l._default && !1 !== l._default.apply(f.pop(), t)) ||
                    !g(n) ||
                    (a &&
                      v(n[d]) &&
                      !m(n) &&
                      ((s = n[a]) && (n[a] = null),
                      (k.event.triggered = d),
                      e.isPropagationStopped() && c.addEventListener(d, kt),
                      n[d](),
                      e.isPropagationStopped() && c.removeEventListener(d, kt),
                      (k.event.triggered = void 0),
                      s && (n[a] = s))),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              n = k.extend(new k.Event(), n, { type: e, isSimulated: !0 });
              k.event.trigger(n, null, t);
            },
          }),
          k.fn.extend({
            trigger: function (e, t) {
              return this.each(function () {
                k.event.trigger(e, t, this);
              });
            },
            triggerHandler: function (e, t) {
              var n = this[0];
              if (n) return k.event.trigger(e, t, n, !0);
            },
          }),
          y.focusin ||
            k.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
              function i(e) {
                k.event.simulate(r, e.target, k.event.fix(e));
              }
              k.event.special[r] = {
                setup: function () {
                  var e = this.ownerDocument || this.document || this,
                    t = w.access(e, r);
                  t || e.addEventListener(n, i, !0),
                    w.access(e, r, (t || 0) + 1);
                },
                teardown: function () {
                  var e = this.ownerDocument || this.document || this,
                    t = w.access(e, r) - 1;
                  t
                    ? w.access(e, r, t)
                    : (e.removeEventListener(n, i, !0), w.remove(e, r));
                },
              };
            }),
          x.location),
        Mt = { guid: Date.now() },
        Ct = /\?/,
        Nt =
          ((k.parseXML = function (e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
              t = new x.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {}
            return (
              (n = t && t.getElementsByTagName("parsererror")[0]),
              (t && !n) ||
                k.error(
                  "Invalid XML: " +
                    (n
                      ? k
                          .map(n.childNodes, function (e) {
                            return e.textContent;
                          })
                          .join("\n")
                      : e)
                ),
              t
            );
          }),
          /\[\]$/),
        Ot = /\r?\n/g,
        Yt = /^(?:submit|button|image|reset|file)$/i,
        Et = /^(?:input|select|textarea|keygen)/i;
      (k.param = function (e, t) {
        function n(e, t) {
          (t = v(t) ? t() : t),
            (i[i.length] =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(null == t ? "" : t));
        }
        var r,
          i = [];
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !k.isPlainObject(e)))
          k.each(e, function () {
            n(this.name, this.value);
          });
        else
          for (r in e)
            !(function n(r, e, i, s) {
              if (Array.isArray(e))
                k.each(e, function (e, t) {
                  i || Nt.test(r)
                    ? s(r, t)
                    : n(
                        r +
                          "[" +
                          ("object" == typeof t && null != t ? e : "") +
                          "]",
                        t,
                        i,
                        s
                      );
                });
              else if (i || "object" !== p(e)) s(r, e);
              else for (var t in e) n(r + "[" + t + "]", e[t], i, s);
            })(r, e[r], t, n);
        return i.join("&");
      }),
        k.fn.extend({
          serialize: function () {
            return k.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var e = k.prop(this, "elements");
              return e ? k.makeArray(e) : this;
            })
              .filter(function () {
                var e = this.type;
                return (
                  this.name &&
                  !k(this).is(":disabled") &&
                  Et.test(this.nodeName) &&
                  !Yt.test(e) &&
                  (this.checked || !xe.test(e))
                );
              })
              .map(function (e, t) {
                var n = k(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? k.map(n, function (e) {
                      return { name: t.name, value: e.replace(Ot, "\r\n") };
                    })
                  : { name: t.name, value: n.replace(Ot, "\r\n") };
              })
              .get();
          },
        });
      var At = /%20/g,
        jt = /#.*$/,
        Pt = /([?&])_=[^&]*/,
        Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ht = /^(?:GET|HEAD)$/,
        Rt = /^\/\//,
        Wt = {},
        qt = {},
        Ft = "*/".concat("*"),
        It = b.createElement("a");
      function Ut(s) {
        return function (e, t) {
          "string" != typeof e && ((t = e), (e = "*"));
          var n,
            r = 0,
            i = e.toLowerCase().match(S) || [];
          if (v(t))
            for (; (n = i[r++]); )
              "+" === n[0]
                ? ((n = n.slice(1) || "*"), (s[n] = s[n] || []).unshift(t))
                : (s[n] = s[n] || []).push(t);
        };
      }
      function Vt(t, r, i, s) {
        var o = {},
          a = t === qt;
        function u(e) {
          var n;
          return (
            (o[e] = !0),
            k.each(t[e] || [], function (e, t) {
              t = t(r, i, s);
              return "string" != typeof t || a || o[t]
                ? a
                  ? !(n = t)
                  : void 0
                : (r.dataTypes.unshift(t), u(t), !1);
            }),
            n
          );
        }
        return u(r.dataTypes[0]) || (!o["*"] && u("*"));
      }
      function Gt(e, t) {
        var n,
          r,
          i = k.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : (r = r || {}))[n] = t[n]);
        return r && k.extend(!0, e, r), e;
      }
      (It.href = Tt.href),
        k.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: Tt.href,
            type: "GET",
            isLocal:
              /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                Tt.protocol
              ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": Ft,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON",
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": k.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (e, t) {
            return t ? Gt(Gt(e, k.ajaxSettings), t) : Gt(k.ajaxSettings, e);
          },
          ajaxPrefilter: Ut(Wt),
          ajaxTransport: Ut(qt),
          ajax: function (e, t) {
            "object" == typeof e && ((t = e), (e = void 0));
            var u,
              l,
              c,
              n,
              f,
              d,
              h,
              r,
              p = k.ajaxSetup({}, (t = t || {})),
              m = p.context || p,
              y = p.context && (m.nodeType || m.jquery) ? k(m) : k.event,
              g = k.Deferred(),
              v = k.Callbacks("once memory"),
              _ = p.statusCode || {},
              i = {},
              s = {},
              o = "canceled",
              w = {
                readyState: 0,
                getResponseHeader: function (e) {
                  var t;
                  if (d) {
                    if (!n)
                      for (n = {}; (t = Lt.exec(c)); )
                        n[t[1].toLowerCase() + " "] = (
                          n[t[1].toLowerCase() + " "] || []
                        ).concat(t[2]);
                    t = n[e.toLowerCase() + " "];
                  }
                  return null == t ? null : t.join(", ");
                },
                getAllResponseHeaders: function () {
                  return d ? c : null;
                },
                setRequestHeader: function (e, t) {
                  return (
                    null == d &&
                      ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                      (i[e] = t)),
                    this
                  );
                },
                overrideMimeType: function (e) {
                  return null == d && (p.mimeType = e), this;
                },
                statusCode: function (e) {
                  if (e)
                    if (d) w.always(e[w.status]);
                    else for (var t in e) _[t] = [_[t], e[t]];
                  return this;
                },
                abort: function (e) {
                  e = e || o;
                  return u && u.abort(e), a(0, e), this;
                },
              };
            if (
              (g.promise(w),
              (p.url = ((e || p.url || Tt.href) + "").replace(
                Rt,
                Tt.protocol + "//"
              )),
              (p.type = t.method || t.type || p.method || p.type),
              (p.dataTypes = (p.dataType || "*").toLowerCase().match(S) || [
                "",
              ]),
              null == p.crossDomain)
            ) {
              e = b.createElement("a");
              try {
                (e.href = p.url),
                  (e.href = e.href),
                  (p.crossDomain =
                    It.protocol + "//" + It.host != e.protocol + "//" + e.host);
              } catch (e) {
                p.crossDomain = !0;
              }
            }
            if (
              (p.data &&
                p.processData &&
                "string" != typeof p.data &&
                (p.data = k.param(p.data, p.traditional)),
              Vt(Wt, p, t, w),
              d)
            )
              return w;
            for (r in ((h = k.event && p.global) &&
              0 == k.active++ &&
              k.event.trigger("ajaxStart"),
            (p.type = p.type.toUpperCase()),
            (p.hasContent = !Ht.test(p.type)),
            (l = p.url.replace(jt, "")),
            p.hasContent
              ? p.data &&
                p.processData &&
                0 ===
                  (p.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (p.data = p.data.replace(At, "+"))
              : ((e = p.url.slice(l.length)),
                p.data &&
                  (p.processData || "string" == typeof p.data) &&
                  ((l += (Ct.test(l) ? "&" : "?") + p.data), delete p.data),
                !1 === p.cache &&
                  ((l = l.replace(Pt, "$1")),
                  (e = (Ct.test(l) ? "&" : "?") + "_=" + Mt.guid++ + e)),
                (p.url = l + e)),
            p.ifModified &&
              (k.lastModified[l] &&
                w.setRequestHeader("If-Modified-Since", k.lastModified[l]),
              k.etag[l] && w.setRequestHeader("If-None-Match", k.etag[l])),
            ((p.data && p.hasContent && !1 !== p.contentType) ||
              t.contentType) &&
              w.setRequestHeader("Content-Type", p.contentType),
            w.setRequestHeader(
              "Accept",
              p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                ? p.accepts[p.dataTypes[0]] +
                    ("*" !== p.dataTypes[0] ? ", " + Ft + "; q=0.01" : "")
                : p.accepts["*"]
            ),
            p.headers))
              w.setRequestHeader(r, p.headers[r]);
            if (p.beforeSend && (!1 === p.beforeSend.call(m, w, p) || d))
              return w.abort();
            if (
              ((o = "abort"),
              v.add(p.complete),
              w.done(p.success),
              w.fail(p.error),
              (u = Vt(qt, p, t, w)))
            ) {
              if (((w.readyState = 1), h && y.trigger("ajaxSend", [w, p]), d))
                return w;
              p.async &&
                0 < p.timeout &&
                (f = x.setTimeout(function () {
                  w.abort("timeout");
                }, p.timeout));
              try {
                (d = !1), u.send(i, a);
              } catch (e) {
                if (d) throw e;
                a(-1, e);
              }
            } else a(-1, "No Transport");
            function a(e, t, n, r) {
              var i,
                s,
                o,
                a = t;
              d ||
                ((d = !0),
                f && x.clearTimeout(f),
                (u = void 0),
                (c = r || ""),
                (w.readyState = 0 < e ? 4 : 0),
                (r = (200 <= e && e < 300) || 304 === e),
                n &&
                  (o = (function (e, t, n) {
                    for (
                      var r, i, s, o, a = e.contents, u = e.dataTypes;
                      "*" === u[0];

                    )
                      u.shift(),
                        void 0 === r &&
                          (r =
                            e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                      for (i in a)
                        if (a[i] && a[i].test(r)) {
                          u.unshift(i);
                          break;
                        }
                    if (u[0] in n) s = u[0];
                    else {
                      for (i in n) {
                        if (!u[0] || e.converters[i + " " + u[0]]) {
                          s = i;
                          break;
                        }
                        o = o || i;
                      }
                      s = s || o;
                    }
                    if (s) return s !== u[0] && u.unshift(s), n[s];
                  })(p, w, n)),
                !r &&
                  -1 < k.inArray("script", p.dataTypes) &&
                  k.inArray("json", p.dataTypes) < 0 &&
                  (p.converters["text script"] = function () {}),
                (o = (function (e, t, n, r) {
                  var i,
                    s,
                    o,
                    a,
                    u,
                    l = {},
                    c = e.dataTypes.slice();
                  if (c[1])
                    for (o in e.converters)
                      l[o.toLowerCase()] = e.converters[o];
                  for (s = c.shift(); s; )
                    if (
                      (e.responseFields[s] && (n[e.responseFields[s]] = t),
                      !u &&
                        r &&
                        e.dataFilter &&
                        (t = e.dataFilter(t, e.dataType)),
                      (u = s),
                      (s = c.shift()))
                    )
                      if ("*" === s) s = u;
                      else if ("*" !== u && u !== s) {
                        if (!(o = l[u + " " + s] || l["* " + s]))
                          for (i in l)
                            if (
                              (a = i.split(" "))[1] === s &&
                              (o = l[u + " " + a[0]] || l["* " + a[0]])
                            ) {
                              !0 === o
                                ? (o = l[i])
                                : !0 !== l[i] && ((s = a[0]), c.unshift(a[1]));
                              break;
                            }
                        if (!0 !== o)
                          if (o && e.throws) t = o(t);
                          else
                            try {
                              t = o(t);
                            } catch (e) {
                              return {
                                state: "parsererror",
                                error: o
                                  ? e
                                  : "No conversion from " + u + " to " + s,
                              };
                            }
                      }
                  return { state: "success", data: t };
                })(p, o, w, r)),
                r
                  ? (p.ifModified &&
                      ((n = w.getResponseHeader("Last-Modified")) &&
                        (k.lastModified[l] = n),
                      (n = w.getResponseHeader("etag")) && (k.etag[l] = n)),
                    204 === e || "HEAD" === p.type
                      ? (a = "nocontent")
                      : 304 === e
                      ? (a = "notmodified")
                      : ((a = o.state), (i = o.data), (r = !(s = o.error))))
                  : ((s = a), (!e && a) || ((a = "error"), e < 0 && (e = 0))),
                (w.status = e),
                (w.statusText = (t || a) + ""),
                r ? g.resolveWith(m, [i, a, w]) : g.rejectWith(m, [w, a, s]),
                w.statusCode(_),
                (_ = void 0),
                h &&
                  y.trigger(r ? "ajaxSuccess" : "ajaxError", [w, p, r ? i : s]),
                v.fireWith(m, [w, a]),
                h &&
                  (y.trigger("ajaxComplete", [w, p]),
                  --k.active || k.event.trigger("ajaxStop")));
            }
            return w;
          },
          getJSON: function (e, t, n) {
            return k.get(e, t, n, "json");
          },
          getScript: function (e, t) {
            return k.get(e, void 0, t, "script");
          },
        }),
        k.each(["get", "post"], function (e, i) {
          k[i] = function (e, t, n, r) {
            return (
              v(t) && ((r = r || n), (n = t), (t = void 0)),
              k.ajax(
                k.extend(
                  { url: e, type: i, dataType: r, data: t, success: n },
                  k.isPlainObject(e) && e
                )
              )
            );
          };
        }),
        k.ajaxPrefilter(function (e) {
          for (var t in e.headers)
            "content-type" === t.toLowerCase() &&
              (e.contentType = e.headers[t] || "");
        }),
        (k._evalUrl = function (e, t, n) {
          return k.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function () {} },
            dataFilter: function (e) {
              k.globalEval(e, t, n);
            },
          });
        }),
        k.fn.extend({
          wrapAll: function (e) {
            return (
              this[0] &&
                (v(e) && (e = e.call(this[0])),
                (e = k(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && e.insertBefore(this[0]),
                e
                  .map(function () {
                    for (var e = this; e.firstElementChild; )
                      e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (n) {
            return v(n)
              ? this.each(function (e) {
                  k(this).wrapInner(n.call(this, e));
                })
              : this.each(function () {
                  var e = k(this),
                    t = e.contents();
                  t.length ? t.wrapAll(n) : e.append(n);
                });
          },
          wrap: function (t) {
            var n = v(t);
            return this.each(function (e) {
              k(this).wrapAll(n ? t.call(this, e) : t);
            });
          },
          unwrap: function (e) {
            return (
              this.parent(e)
                .not("body")
                .each(function () {
                  k(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (k.expr.pseudos.hidden = function (e) {
          return !k.expr.pseudos.visible(e);
        }),
        (k.expr.pseudos.visible = function (e) {
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        }),
        (k.ajaxSettings.xhr = function () {
          try {
            return new x.XMLHttpRequest();
          } catch (e) {}
        });
      var $t = { 0: 200, 1223: 204 },
        Bt = k.ajaxSettings.xhr(),
        zt =
          ((y.cors = !!Bt && "withCredentials" in Bt),
          (y.ajax = Bt = !!Bt),
          k.ajaxTransport(function (i) {
            var s, o;
            if (y.cors || (Bt && !i.crossDomain))
              return {
                send: function (e, t) {
                  var n,
                    r = i.xhr();
                  if (
                    (r.open(i.type, i.url, i.async, i.username, i.password),
                    i.xhrFields)
                  )
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                  for (n in (i.mimeType &&
                    r.overrideMimeType &&
                    r.overrideMimeType(i.mimeType),
                  i.crossDomain ||
                    e["X-Requested-With"] ||
                    (e["X-Requested-With"] = "XMLHttpRequest"),
                  e))
                    r.setRequestHeader(n, e[n]);
                  (s = function (e) {
                    return function () {
                      s &&
                        ((s =
                          o =
                          r.onload =
                          r.onerror =
                          r.onabort =
                          r.ontimeout =
                          r.onreadystatechange =
                            null),
                        "abort" === e
                          ? r.abort()
                          : "error" === e
                          ? "number" != typeof r.status
                            ? t(0, "error")
                            : t(r.status, r.statusText)
                          : t(
                              $t[r.status] || r.status,
                              r.statusText,
                              "text" !== (r.responseType || "text") ||
                                "string" != typeof r.responseText
                                ? { binary: r.response }
                                : { text: r.responseText },
                              r.getAllResponseHeaders()
                            ));
                    };
                  }),
                    (r.onload = s()),
                    (o = r.onerror = r.ontimeout = s("error")),
                    void 0 !== r.onabort
                      ? (r.onabort = o)
                      : (r.onreadystatechange = function () {
                          4 === r.readyState &&
                            x.setTimeout(function () {
                              s && o();
                            });
                        }),
                    (s = s("abort"));
                  try {
                    r.send((i.hasContent && i.data) || null);
                  } catch (e) {
                    if (s) throw e;
                  }
                },
                abort: function () {
                  s && s();
                },
              };
          }),
          k.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
          }),
          k.ajaxSetup({
            accepts: {
              script:
                "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
              "text script": function (e) {
                return k.globalEval(e), e;
              },
            },
          }),
          k.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1),
              e.crossDomain && (e.type = "GET");
          }),
          k.ajaxTransport("script", function (n) {
            var r, i;
            if (n.crossDomain || n.scriptAttrs)
              return {
                send: function (e, t) {
                  (r = k("<script>")
                    .attr(n.scriptAttrs || {})
                    .prop({ charset: n.scriptCharset, src: n.url })
                    .on(
                      "load error",
                      (i = function (e) {
                        r.remove(),
                          (i = null),
                          e && t("error" === e.type ? 404 : 200, e.type);
                      })
                    )),
                    b.head.appendChild(r[0]);
                },
                abort: function () {
                  i && i();
                },
              };
          }),
          []),
        Zt = /(=)\?(?=&|$)|\?\?/,
        Xt =
          (k.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = zt.pop() || k.expando + "_" + Mt.guid++;
              return (this[e] = !0), e;
            },
          }),
          k.ajaxPrefilter("json jsonp", function (e, t, n) {
            var r,
              i,
              s,
              o =
                !1 !== e.jsonp &&
                (Zt.test(e.url)
                  ? "url"
                  : "string" == typeof e.data &&
                    0 ===
                      (e.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    Zt.test(e.data) &&
                    "data");
            if (o || "jsonp" === e.dataTypes[0])
              return (
                (r = e.jsonpCallback =
                  v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                o
                  ? (e[o] = e[o].replace(Zt, "$1" + r))
                  : !1 !== e.jsonp &&
                    (e.url += (Ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                (e.converters["script json"] = function () {
                  return s || k.error(r + " was not called"), s[0];
                }),
                (e.dataTypes[0] = "json"),
                (i = x[r]),
                (x[r] = function () {
                  s = arguments;
                }),
                n.always(function () {
                  void 0 === i ? k(x).removeProp(r) : (x[r] = i),
                    e[r] && ((e.jsonpCallback = t.jsonpCallback), zt.push(r)),
                    s && v(i) && i(s[0]),
                    (s = i = void 0);
                }),
                "script"
              );
          }),
          (y.createHTMLDocument =
            (((e = b.implementation.createHTMLDocument("").body).innerHTML =
              "<form></form><form></form>"),
            2 === e.childNodes.length)),
          (k.parseHTML = function (e, t, n) {
            return "string" != typeof e
              ? []
              : ("boolean" == typeof t && ((n = t), (t = !1)),
                t ||
                  (y.createHTMLDocument
                    ? (((r = (t =
                        b.implementation.createHTMLDocument("")).createElement(
                        "base"
                      )).href = b.location.href),
                      t.head.appendChild(r))
                    : (t = b)),
                (r = !n && []),
                (n = J.exec(e))
                  ? [t.createElement(n[1])]
                  : ((n = Te([e], t, r)),
                    r && r.length && k(r).remove(),
                    k.merge([], n.childNodes)));
            var r;
          }),
          (k.fn.load = function (e, t, n) {
            var r,
              i,
              s,
              o = this,
              a = e.indexOf(" ");
            return (
              -1 < a && ((r = j(e.slice(a))), (e = e.slice(0, a))),
              v(t)
                ? ((n = t), (t = void 0))
                : t && "object" == typeof t && (i = "POST"),
              0 < o.length &&
                k
                  .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                  .done(function (e) {
                    (s = arguments),
                      o.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e);
                  })
                  .always(
                    n &&
                      function (e, t) {
                        o.each(function () {
                          n.apply(this, s || [e.responseText, t, e]);
                        });
                      }
                  ),
              this
            );
          }),
          (k.expr.pseudos.animated = function (t) {
            return k.grep(k.timers, function (e) {
              return t === e.elem;
            }).length;
          }),
          (k.offset = {
            setOffset: function (e, t, n) {
              var r,
                i,
                s,
                o,
                a = k.css(e, "position"),
                u = k(e),
                l = {};
              "static" === a && (e.style.position = "relative"),
                (s = u.offset()),
                (r = k.css(e, "top")),
                (o = k.css(e, "left")),
                (a =
                  ("absolute" === a || "fixed" === a) &&
                  -1 < (r + o).indexOf("auto")
                    ? ((i = (a = u.position()).top), a.left)
                    : ((i = parseFloat(r) || 0), parseFloat(o) || 0)),
                null != (t = v(t) ? t.call(e, n, k.extend({}, s)) : t).top &&
                  (l.top = t.top - s.top + i),
                null != t.left && (l.left = t.left - s.left + a),
                "using" in t ? t.using.call(e, l) : u.css(l);
            },
          }),
          k.fn.extend({
            offset: function (t) {
              if (arguments.length)
                return void 0 === t
                  ? this
                  : this.each(function (e) {
                      k.offset.setOffset(this, t, e);
                    });
              var e,
                n = this[0];
              return n
                ? n.getClientRects().length
                  ? ((e = n.getBoundingClientRect()),
                    (n = n.ownerDocument.defaultView),
                    {
                      top: e.top + n.pageYOffset,
                      left: e.left + n.pageXOffset,
                    })
                  : { top: 0, left: 0 }
                : void 0;
            },
            position: function () {
              if (this[0]) {
                var e,
                  t,
                  n,
                  r = this[0],
                  i = { top: 0, left: 0 };
                if ("fixed" === k.css(r, "position"))
                  t = r.getBoundingClientRect();
                else {
                  for (
                    t = this.offset(),
                      n = r.ownerDocument,
                      e = r.offsetParent || n.documentElement;
                    e &&
                    (e === n.body || e === n.documentElement) &&
                    "static" === k.css(e, "position");

                  )
                    e = e.parentNode;
                  e &&
                    e !== r &&
                    1 === e.nodeType &&
                    (((i = k(e).offset()).top += k.css(
                      e,
                      "borderTopWidth",
                      !0
                    )),
                    (i.left += k.css(e, "borderLeftWidth", !0)));
                }
                return {
                  top: t.top - i.top - k.css(r, "marginTop", !0),
                  left: t.left - i.left - k.css(r, "marginLeft", !0),
                };
              }
            },
            offsetParent: function () {
              return this.map(function () {
                for (
                  var e = this.offsetParent;
                  e && "static" === k.css(e, "position");

                )
                  e = e.offsetParent;
                return e || D;
              });
            },
          }),
          k.each(
            { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
            function (t, i) {
              var s = "pageYOffset" === i;
              k.fn[t] = function (e) {
                return f(
                  this,
                  function (e, t, n) {
                    var r;
                    if (
                      (m(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                      void 0 === n)
                    )
                      return r ? r[i] : e[t];
                    r
                      ? r.scrollTo(s ? r.pageXOffset : n, s ? n : r.pageYOffset)
                      : (e[t] = n);
                  },
                  t,
                  e,
                  arguments.length
                );
              };
            }
          ),
          k.each(["top", "left"], function (e, n) {
            k.cssHooks[n] = Ke(y.pixelPosition, function (e, t) {
              if (t)
                return (
                  (t = Qe(e, n)), ze.test(t) ? k(e).position()[n] + "px" : t
                );
            });
          }),
          k.each({ Height: "height", Width: "width" }, function (o, a) {
            k.each(
              { padding: "inner" + o, content: a, "": "outer" + o },
              function (r, s) {
                k.fn[s] = function (e, t) {
                  var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                  return f(
                    this,
                    function (e, t, n) {
                      var r;
                      return m(e)
                        ? 0 === s.indexOf("outer")
                          ? e["inner" + o]
                          : e.document.documentElement["client" + o]
                        : 9 === e.nodeType
                        ? ((r = e.documentElement),
                          Math.max(
                            e.body["scroll" + o],
                            r["scroll" + o],
                            e.body["offset" + o],
                            r["offset" + o],
                            r["client" + o]
                          ))
                        : void 0 === n
                        ? k.css(e, t, i)
                        : k.style(e, t, n, i);
                    },
                    a,
                    n ? e : void 0,
                    n
                  );
                };
              }
            );
          }),
          k.each(
            [
              "ajaxStart",
              "ajaxStop",
              "ajaxComplete",
              "ajaxError",
              "ajaxSuccess",
              "ajaxSend",
            ],
            function (e, t) {
              k.fn[t] = function (e) {
                return this.on(t, e);
              };
            }
          ),
          k.fn.extend({
            bind: function (e, t, n) {
              return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
              return this.off(e, null, t);
            },
            delegate: function (e, t, n, r) {
              return this.on(t, e, n, r);
            },
            undelegate: function (e, t, n) {
              return 1 === arguments.length
                ? this.off(e, "**")
                : this.off(t, e || "**", n);
            },
            hover: function (e, t) {
              return this.mouseenter(e).mouseleave(t || e);
            },
          }),
          k.each(
            "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
              " "
            ),
            function (e, n) {
              k.fn[n] = function (e, t) {
                return 0 < arguments.length
                  ? this.on(n, null, e, t)
                  : this.trigger(n);
              };
            }
          ),
          /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g),
        Jt =
          ((k.proxy = function (e, t) {
            var n, r;
            if (("string" == typeof t && ((r = e[t]), (t = e), (e = r)), v(e)))
              return (
                (n = a.call(arguments, 2)),
                ((r = function () {
                  return e.apply(t || this, n.concat(a.call(arguments)));
                }).guid = e.guid =
                  e.guid || k.guid++),
                r
              );
          }),
          (k.holdReady = function (e) {
            e ? k.readyWait++ : k.ready(!0);
          }),
          (k.isArray = Array.isArray),
          (k.parseJSON = JSON.parse),
          (k.nodeName = u),
          (k.isFunction = v),
          (k.isWindow = m),
          (k.camelCase = _),
          (k.type = p),
          (k.now = Date.now),
          (k.isNumeric = function (e) {
            var t = k.type(e);
            return (
              ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            );
          }),
          (k.trim = function (e) {
            return null == e ? "" : (e + "").replace(Xt, "");
          }),
          x.jQuery),
        Qt = x.$;
      return (
        (k.noConflict = function (e) {
          return (
            x.$ === k && (x.$ = Qt), e && x.jQuery === k && (x.jQuery = Jt), k
          );
        }),
        void 0 === L && (x.jQuery = x.$ = k),
        k
      );
    });
  var t,
    co,
    s = e.document
      ? t(e, !0)
      : function (e) {
          if (e.document) return t(e);
          throw new Error("jQuery requires a window with a document");
        },
    n = window.location.href.includes("localhost")
      ? "/digdir-status-pages/#/history"
      : "/history",
    e = { exports: {} },
    l =
      (((co = e).exports = (function () {
        var L, H;
        function f() {
          return L.apply(null, arguments);
        }
        function R(e) {
          L = e;
        }
        function o(e) {
          return (
            e instanceof Array ||
            Object.prototype.toString.call(e) === "[object Array]"
          );
        }
        function W(e) {
          return (
            e != null && Object.prototype.toString.call(e) === "[object Object]"
          );
        }
        function u(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }
        function q(e) {
          if (Object.getOwnPropertyNames)
            return Object.getOwnPropertyNames(e).length === 0;
          else {
            var t;
            for (t in e) if (u(e, t)) return false;
            return true;
          }
        }
        function a(e) {
          return e === void 0;
        }
        function l(e) {
          return (
            typeof e === "number" ||
            Object.prototype.toString.call(e) === "[object Number]"
          );
        }
        function F(e) {
          return (
            e instanceof Date ||
            Object.prototype.toString.call(e) === "[object Date]"
          );
        }
        function I(e, t) {
          var n = [],
            r,
            i = e.length;
          for (r = 0; r < i; ++r) n.push(t(e[r], r));
          return n;
        }
        function U(e, t) {
          for (var n in t) if (u(t, n)) e[n] = t[n];
          if (u(t, "toString")) e.toString = t.toString;
          if (u(t, "valueOf")) e.valueOf = t.valueOf;
          return e;
        }
        function c(e, t, n, r) {
          return Qn(e, t, n, r, true).utc();
        }
        function V() {
          return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: false,
            weekdayMismatch: false,
          };
        }
        function d(e) {
          if (e._pf == null) e._pf = V();
          return e._pf;
        }
        if (Array.prototype.some) H = Array.prototype.some;
        else
          H = function (e) {
            var t = Object(this),
              n = t.length >>> 0,
              r;
            for (r = 0; r < n; r++)
              if (r in t && e.call(this, t[r], r, t)) return true;
            return false;
          };
        function G(e) {
          if (e._isValid == null) {
            var t = d(e),
              n = H.call(t.parsedDateParts, function (e) {
                return e != null;
              }),
              r =
                !isNaN(e._d.getTime()) &&
                t.overflow < 0 &&
                !t.empty &&
                !t.invalidEra &&
                !t.invalidMonth &&
                !t.invalidWeekday &&
                !t.weekdayMismatch &&
                !t.nullInput &&
                !t.invalidFormat &&
                !t.userInvalidated &&
                (!t.meridiem || (t.meridiem && n));
            if (e._strict)
              r =
                r &&
                t.charsLeftOver === 0 &&
                t.unusedTokens.length === 0 &&
                t.bigHour === undefined;
            if (Object.isFrozen == null || !Object.isFrozen(e)) e._isValid = r;
            else return r;
          }
          return e._isValid;
        }
        function $(e) {
          var t = c(NaN);
          if (e != null) U(d(t), e);
          else d(t).userInvalidated = true;
          return t;
        }
        var B = (f.momentProperties = []),
          z = false;
        function Z(e, t) {
          var n,
            r,
            i,
            s = B.length;
          if (!a(t._isAMomentObject)) e._isAMomentObject = t._isAMomentObject;
          if (!a(t._i)) e._i = t._i;
          if (!a(t._f)) e._f = t._f;
          if (!a(t._l)) e._l = t._l;
          if (!a(t._strict)) e._strict = t._strict;
          if (!a(t._tzm)) e._tzm = t._tzm;
          if (!a(t._isUTC)) e._isUTC = t._isUTC;
          if (!a(t._offset)) e._offset = t._offset;
          if (!a(t._pf)) e._pf = d(t);
          if (!a(t._locale)) e._locale = t._locale;
          if (s > 0)
            for (n = 0; n < s; n++) {
              r = B[n];
              i = t[r];
              if (!a(i)) e[r] = i;
            }
          return e;
        }
        function X(e) {
          Z(this, e);
          this._d = new Date(e._d != null ? e._d.getTime() : NaN);
          if (!this.isValid()) this._d = new Date(NaN);
          if (z === false) {
            z = true;
            f.updateOffset(this);
            z = false;
          }
        }
        function h(e) {
          return e instanceof X || (e != null && e._isAMomentObject != null);
        }
        function J(e) {
          if (
            f.suppressDeprecationWarnings === false &&
            typeof console !== "undefined" &&
            console.warn
          )
            console.warn("Deprecation warning: " + e);
        }
        function e(s, o) {
          var a = true;
          return U(function () {
            if (f.deprecationHandler != null) f.deprecationHandler(null, s);
            if (a) {
              var e = [],
                t,
                n,
                r,
                i = arguments.length;
              for (n = 0; n < i; n++) {
                t = "";
                if (typeof arguments[n] === "object") {
                  t += "\n[" + n + "] ";
                  for (r in arguments[0])
                    if (u(arguments[0], r))
                      t += r + ": " + arguments[0][r] + ", ";
                  t = t.slice(0, -2);
                } else t = arguments[n];
                e.push(t);
              }
              J(
                s +
                  "\nArguments: " +
                  Array.prototype.slice.call(e).join("") +
                  "\n" +
                  new Error().stack
              );
              a = false;
            }
            return o.apply(this, arguments);
          }, o);
        }
        var Q = {},
          K;
        function ee(e, t) {
          if (f.deprecationHandler != null) f.deprecationHandler(e, t);
          if (!Q[e]) {
            J(t);
            Q[e] = true;
          }
        }
        function p(e) {
          return (
            (typeof Function !== "undefined" && e instanceof Function) ||
            Object.prototype.toString.call(e) === "[object Function]"
          );
        }
        function te(e) {
          var t, n;
          for (n in e)
            if (u(e, n)) {
              t = e[n];
              if (p(t)) this[n] = t;
              else this["_" + n] = t;
            }
          this._config = e;
          this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
              "|" +
              /\d{1,2}/.source
          );
        }
        function ne(e, t) {
          var n = U({}, e),
            r;
          for (r in t)
            if (u(t, r))
              if (W(e[r]) && W(t[r])) {
                n[r] = {};
                U(n[r], e[r]);
                U(n[r], t[r]);
              } else if (t[r] != null) n[r] = t[r];
              else delete n[r];
          for (r in e) if (u(e, r) && !u(t, r) && W(e[r])) n[r] = U({}, n[r]);
          return n;
        }
        function re(e) {
          if (e != null) this.set(e);
        }
        if (
          ((f.suppressDeprecationWarnings = false),
          (f.deprecationHandler = null),
          Object.keys)
        )
          K = Object.keys;
        else
          K = function (e) {
            var t,
              n = [];
            for (t in e) if (u(e, t)) n.push(t);
            return n;
          };
        var ie = {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L",
        };
        function se(e, t, n) {
          var r = this._calendar[e] || this._calendar["sameElse"];
          return p(r) ? r.call(t, n) : r;
        }
        function s(e, t, n) {
          var r = "" + Math.abs(e),
            i = t - r.length,
            s = e >= 0;
          return (
            (s ? (n ? "+" : "") : "-") +
            Math.pow(10, Math.max(0, i)).toString().substr(1) +
            r
          );
        }
        var oe =
            /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
          ae = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
          ue = {},
          le = {};
        function r(e, t, n, r) {
          var i = r;
          if (typeof r === "string")
            i = function () {
              return this[r]();
            };
          if (e) le[e] = i;
          if (t)
            le[t[0]] = function () {
              return s(i.apply(this, arguments), t[1], t[2]);
            };
          if (n)
            le[n] = function () {
              return this.localeData().ordinal(i.apply(this, arguments), e);
            };
        }
        function ce(e) {
          if (e.match(/\[[\s\S]/)) return e.replace(/^\[|\]$/g, "");
          return e.replace(/\\/g, "");
        }
        function fe(r) {
          var i = r.match(oe),
            e,
            s;
          for (e = 0, s = i.length; e < s; e++)
            if (le[i[e]]) i[e] = le[i[e]];
            else i[e] = ce(i[e]);
          return function (e) {
            var t = "",
              n;
            for (n = 0; n < s; n++) t += p(i[n]) ? i[n].call(e, r) : i[n];
            return t;
          };
        }
        function de(e, t) {
          if (!e.isValid()) return e.localeData().invalidDate();
          t = he(t, e.localeData());
          ue[t] = ue[t] || fe(t);
          return ue[t](e);
        }
        function he(e, t) {
          var n = 5;
          function r(e) {
            return t.longDateFormat(e) || e;
          }
          ae.lastIndex = 0;
          while (n >= 0 && ae.test(e)) {
            e = e.replace(ae, r);
            ae.lastIndex = 0;
            n -= 1;
          }
          return e;
        }
        var pe = {
          LTS: "h:mm:ss A",
          LT: "h:mm A",
          L: "MM/DD/YYYY",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY h:mm A",
          LLLL: "dddd, MMMM D, YYYY h:mm A",
        };
        function me(e) {
          var t = this._longDateFormat[e],
            n = this._longDateFormat[e.toUpperCase()];
          if (t || !n) return t;
          this._longDateFormat[e] = n
            .match(oe)
            .map(function (e) {
              if (e === "MMMM" || e === "MM" || e === "DD" || e === "dddd")
                return e.slice(1);
              return e;
            })
            .join("");
          return this._longDateFormat[e];
        }
        var ye = "Invalid date";
        function ge() {
          return this._invalidDate;
        }
        var ve = "%d",
          _e = /\d{1,2}/;
        function we(e) {
          return this._ordinal.replace("%d", e);
        }
        var xe = {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          w: "a week",
          ww: "%d weeks",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years",
        };
        function be(e, t, n, r) {
          var i = this._relativeTime[n];
          return p(i) ? i(e, t, n, r) : i.replace(/%d/i, e);
        }
        function ke(e, t) {
          var n = this._relativeTime[e > 0 ? "future" : "past"];
          return p(n) ? n(t) : n.replace(/%s/i, t);
        }
        var Se = {};
        function t(e, t) {
          var n = e.toLowerCase();
          Se[n] = Se[n + "s"] = Se[t] = e;
        }
        function m(e) {
          return typeof e === "string"
            ? Se[e] || Se[e.toLowerCase()]
            : undefined;
        }
        function De(e) {
          var t = {},
            n,
            r;
          for (r in e)
            if (u(e, r)) {
              n = m(r);
              if (n) t[n] = e[r];
            }
          return t;
        }
        var Te = {};
        function n(e, t) {
          Te[e] = t;
        }
        function Me(e) {
          var t = [],
            n;
          for (n in e) if (u(e, n)) t.push({ unit: n, priority: Te[n] });
          t.sort(function (e, t) {
            return e.priority - t.priority;
          });
          return t;
        }
        function Ce(e) {
          return (e % 4 === 0 && e % 100 !== 0) || e % 400 === 0;
        }
        function y(e) {
          if (e < 0) return Math.ceil(e) || 0;
          else return Math.floor(e);
        }
        function g(e) {
          var t = +e,
            n = 0;
          if (t !== 0 && isFinite(t)) n = y(t);
          return n;
        }
        function Ne(t, n) {
          return function (e) {
            if (e != null) {
              Ye(this, t, e);
              f.updateOffset(this, n);
              return this;
            } else return Oe(this, t);
          };
        }
        function Oe(e, t) {
          return e.isValid()
            ? e._d["get" + (e._isUTC ? "UTC" : "") + t]()
            : NaN;
        }
        function Ye(e, t, n) {
          if (e.isValid() && !isNaN(n))
            if (
              t === "FullYear" &&
              Ce(e.year()) &&
              e.month() === 1 &&
              e.date() === 29
            ) {
              n = g(n);
              e._d["set" + (e._isUTC ? "UTC" : "") + t](
                n,
                e.month(),
                st(n, e.month())
              );
            } else e._d["set" + (e._isUTC ? "UTC" : "") + t](n);
        }
        function Ee(e) {
          e = m(e);
          if (p(this[e])) return this[e]();
          return this;
        }
        function Ae(e, t) {
          if (typeof e === "object") {
            e = De(e);
            var n = Me(e),
              r,
              i = n.length;
            for (r = 0; r < i; r++) this[n[r].unit](e[n[r].unit]);
          } else {
            e = m(e);
            if (p(this[e])) return this[e](t);
          }
          return this;
        }
        var je = /\d/,
          i = /\d\d/,
          Pe = /\d{3}/,
          Le = /\d{4}/,
          He = /[+-]?\d{6}/,
          v = /\d\d?/,
          Re = /\d\d\d\d?/,
          We = /\d\d\d\d\d\d?/,
          qe = /\d{1,3}/,
          Fe = /\d{1,4}/,
          Ie = /[+-]?\d{1,6}/,
          Ue = /\d+/,
          Ve = /[+-]?\d+/,
          Ge = /Z|[+-]\d\d:?\d\d/gi,
          $e = /Z|[+-]\d\d(?::?\d\d)?/gi,
          Be = /[+-]?\d+(\.\d{1,3})?/,
          ze =
            /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
          Ze;
        function _(e, n, r) {
          Ze[e] = p(n)
            ? n
            : function (e, t) {
                return e && r ? r : n;
              };
        }
        function Xe(e, t) {
          if (!u(Ze, e)) return new RegExp(Je(e));
          return Ze[e](t._strict, t._locale);
        }
        function Je(e) {
          return w(
            e
              .replace("\\", "")
              .replace(
                /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                function (e, t, n, r, i) {
                  return t || n || r || i;
                }
              )
          );
        }
        function w(e) {
          return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        }
        var Ze = {},
          Qe = {};
        function x(e, n) {
          var t,
            r = n,
            i;
          if (typeof e === "string") e = [e];
          if (l(n))
            r = function (e, t) {
              t[n] = g(e);
            };
          i = e.length;
          for (t = 0; t < i; t++) Qe[e[t]] = r;
        }
        function Ke(e, i) {
          x(e, function (e, t, n, r) {
            n._w = n._w || {};
            i(e, n._w, n, r);
          });
        }
        function et(e, t, n) {
          if (t != null && u(Qe, e)) Qe[e](t, n._a, n, e);
        }
        var b = 0,
          k = 1,
          S = 2,
          D = 3,
          T = 4,
          M = 5,
          tt = 6,
          nt = 7,
          rt = 8,
          C;
        function it(e, t) {
          return ((e % t) + t) % t;
        }
        if (Array.prototype.indexOf) C = Array.prototype.indexOf;
        else
          C = function (e) {
            var t;
            for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
            return -1;
          };
        function st(e, t) {
          if (isNaN(e) || isNaN(t)) return NaN;
          var n = it(t, 12);
          e += (t - n) / 12;
          return n === 1 ? (Ce(e) ? 29 : 28) : 31 - ((n % 7) % 2);
        }
        r("M", ["MM", 2], "Mo", function () {
          return this.month() + 1;
        }),
          r("MMM", 0, 0, function (e) {
            return this.localeData().monthsShort(this, e);
          }),
          r("MMMM", 0, 0, function (e) {
            return this.localeData().months(this, e);
          }),
          t("month", "M"),
          n("month", 8),
          _("M", v),
          _("MM", v, i),
          _("MMM", function (e, t) {
            return t.monthsShortRegex(e);
          }),
          _("MMMM", function (e, t) {
            return t.monthsRegex(e);
          }),
          x(["M", "MM"], function (e, t) {
            t[k] = g(e) - 1;
          }),
          x(["MMM", "MMMM"], function (e, t, n, r) {
            var i = n._locale.monthsParse(e, r, n._strict);
            if (i != null) t[k] = i;
            else d(n).invalidMonth = e;
          });
        var ot =
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_"
            ),
          at = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
          ut = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
          lt = ze,
          ct = ze;
        function ft(e, t) {
          if (!e)
            return o(this._months) ? this._months : this._months["standalone"];
          return o(this._months)
            ? this._months[e.month()]
            : this._months[
                (this._months.isFormat || ut).test(t) ? "format" : "standalone"
              ][e.month()];
        }
        function dt(e, t) {
          if (!e)
            return o(this._monthsShort)
              ? this._monthsShort
              : this._monthsShort["standalone"];
          return o(this._monthsShort)
            ? this._monthsShort[e.month()]
            : this._monthsShort[ut.test(t) ? "format" : "standalone"][
                e.month()
              ];
        }
        function ht(e, t, n) {
          var r,
            i,
            s,
            o = e.toLocaleLowerCase();
          if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (r = 0; r < 12; ++r) {
              s = c([2e3, r]);
              this._shortMonthsParse[r] = this.monthsShort(
                s,
                ""
              ).toLocaleLowerCase();
              this._longMonthsParse[r] = this.months(s, "").toLocaleLowerCase();
            }
          }
          if (n)
            if (t === "MMM") {
              i = C.call(this._shortMonthsParse, o);
              return i !== -1 ? i : null;
            } else {
              i = C.call(this._longMonthsParse, o);
              return i !== -1 ? i : null;
            }
          else if (t === "MMM") {
            i = C.call(this._shortMonthsParse, o);
            if (i !== -1) return i;
            i = C.call(this._longMonthsParse, o);
            return i !== -1 ? i : null;
          } else {
            i = C.call(this._longMonthsParse, o);
            if (i !== -1) return i;
            i = C.call(this._shortMonthsParse, o);
            return i !== -1 ? i : null;
          }
        }
        function pt(e, t, n) {
          var r, i, s;
          if (this._monthsParseExact) return ht.call(this, e, t, n);
          if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
          }
          for (r = 0; r < 12; r++) {
            i = c([2e3, r]);
            if (n && !this._longMonthsParse[r]) {
              this._longMonthsParse[r] = new RegExp(
                "^" + this.months(i, "").replace(".", "") + "$",
                "i"
              );
              this._shortMonthsParse[r] = new RegExp(
                "^" + this.monthsShort(i, "").replace(".", "") + "$",
                "i"
              );
            }
            if (!n && !this._monthsParse[r]) {
              s = "^" + this.months(i, "") + "|^" + this.monthsShort(i, "");
              this._monthsParse[r] = new RegExp(s.replace(".", ""), "i");
            }
            if (n && t === "MMMM" && this._longMonthsParse[r].test(e)) return r;
            else if (n && t === "MMM" && this._shortMonthsParse[r].test(e))
              return r;
            else if (!n && this._monthsParse[r].test(e)) return r;
          }
        }
        function mt(e, t) {
          var n;
          if (!e.isValid()) return e;
          if (typeof t === "string")
            if (/^\d+$/.test(t)) t = g(t);
            else {
              t = e.localeData().monthsParse(t);
              if (!l(t)) return e;
            }
          n = Math.min(e.date(), st(e.year(), t));
          e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n);
          return e;
        }
        function yt(e) {
          if (e != null) {
            mt(this, e);
            f.updateOffset(this, true);
            return this;
          } else return Oe(this, "Month");
        }
        function gt() {
          return st(this.year(), this.month());
        }
        function vt(e) {
          if (this._monthsParseExact) {
            if (!u(this, "_monthsRegex")) wt.call(this);
            if (e) return this._monthsShortStrictRegex;
            else return this._monthsShortRegex;
          } else {
            if (!u(this, "_monthsShortRegex")) this._monthsShortRegex = lt;
            return this._monthsShortStrictRegex && e
              ? this._monthsShortStrictRegex
              : this._monthsShortRegex;
          }
        }
        function _t(e) {
          if (this._monthsParseExact) {
            if (!u(this, "_monthsRegex")) wt.call(this);
            if (e) return this._monthsStrictRegex;
            else return this._monthsRegex;
          } else {
            if (!u(this, "_monthsRegex")) this._monthsRegex = ct;
            return this._monthsStrictRegex && e
              ? this._monthsStrictRegex
              : this._monthsRegex;
          }
        }
        function wt() {
          function e(e, t) {
            return t.length - e.length;
          }
          var t = [],
            n = [],
            r = [],
            i,
            s;
          for (i = 0; i < 12; i++) {
            s = c([2e3, i]);
            t.push(this.monthsShort(s, ""));
            n.push(this.months(s, ""));
            r.push(this.months(s, ""));
            r.push(this.monthsShort(s, ""));
          }
          t.sort(e);
          n.sort(e);
          r.sort(e);
          for (i = 0; i < 12; i++) {
            t[i] = w(t[i]);
            n[i] = w(n[i]);
          }
          for (i = 0; i < 24; i++) r[i] = w(r[i]);
          this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i");
          this._monthsShortRegex = this._monthsRegex;
          this._monthsStrictRegex = new RegExp("^(" + n.join("|") + ")", "i");
          this._monthsShortStrictRegex = new RegExp(
            "^(" + t.join("|") + ")",
            "i"
          );
        }
        function xt(e) {
          return Ce(e) ? 366 : 365;
        }
        r("Y", 0, 0, function () {
          var e = this.year();
          return e <= 9999 ? s(e, 4) : "+" + e;
        }),
          r(0, ["YY", 2], 0, function () {
            return this.year() % 100;
          }),
          r(0, ["YYYY", 4], 0, "year"),
          r(0, ["YYYYY", 5], 0, "year"),
          r(0, ["YYYYYY", 6, true], 0, "year"),
          t("year", "y"),
          n("year", 1),
          _("Y", Ve),
          _("YY", v, i),
          _("YYYY", Fe, Le),
          _("YYYYY", Ie, He),
          _("YYYYYY", Ie, He),
          x(["YYYYY", "YYYYYY"], b),
          x("YYYY", function (e, t) {
            t[b] = e.length === 2 ? f.parseTwoDigitYear(e) : g(e);
          }),
          x("YY", function (e, t) {
            t[b] = f.parseTwoDigitYear(e);
          }),
          x("Y", function (e, t) {
            t[b] = parseInt(e, 10);
          }),
          (f.parseTwoDigitYear = function (e) {
            return g(e) + (g(e) > 68 ? 1900 : 2e3);
          });
        var bt = Ne("FullYear", true);
        function kt() {
          return Ce(this.year());
        }
        function St(e, t, n, r, i, s, o) {
          var a;
          if (e < 100 && e >= 0) {
            a = new Date(e + 400, t, n, r, i, s, o);
            if (isFinite(a.getFullYear())) a.setFullYear(e);
          } else a = new Date(e, t, n, r, i, s, o);
          return a;
        }
        function Dt(e) {
          var t, n;
          if (e < 100 && e >= 0) {
            n = Array.prototype.slice.call(arguments);
            n[0] = e + 400;
            t = new Date(Date.UTC.apply(null, n));
            if (isFinite(t.getUTCFullYear())) t.setUTCFullYear(e);
          } else t = new Date(Date.UTC.apply(null, arguments));
          return t;
        }
        function Tt(e, t, n) {
          var r = 7 + t - n,
            i = (7 + Dt(e, 0, r).getUTCDay() - t) % 7;
          return -i + r - 1;
        }
        function Mt(e, t, n, r, i) {
          var s = (7 + n - r) % 7,
            o = Tt(e, r, i),
            a = 1 + 7 * (t - 1) + s + o,
            u,
            l;
          if (a <= 0) {
            u = e - 1;
            l = xt(u) + a;
          } else if (a > xt(e)) {
            u = e + 1;
            l = a - xt(e);
          } else {
            u = e;
            l = a;
          }
          return { year: u, dayOfYear: l };
        }
        function Ct(e, t, n) {
          var r = Tt(e.year(), t, n),
            i = Math.floor((e.dayOfYear() - r - 1) / 7) + 1,
            s,
            o;
          if (i < 1) {
            o = e.year() - 1;
            s = i + N(o, t, n);
          } else if (i > N(e.year(), t, n)) {
            s = i - N(e.year(), t, n);
            o = e.year() + 1;
          } else {
            o = e.year();
            s = i;
          }
          return { week: s, year: o };
        }
        function N(e, t, n) {
          var r = Tt(e, t, n),
            i = Tt(e + 1, t, n);
          return (xt(e) - r + i) / 7;
        }
        function Nt(e) {
          return Ct(e, this._week.dow, this._week.doy).week;
        }
        r("w", ["ww", 2], "wo", "week"),
          r("W", ["WW", 2], "Wo", "isoWeek"),
          t("week", "w"),
          t("isoWeek", "W"),
          n("week", 5),
          n("isoWeek", 5),
          _("w", v),
          _("ww", v, i),
          _("W", v),
          _("WW", v, i),
          Ke(["w", "ww", "W", "WW"], function (e, t, n, r) {
            t[r.substr(0, 1)] = g(e);
          });
        var Ot = { dow: 0, doy: 6 };
        function Yt() {
          return this._week.dow;
        }
        function Et() {
          return this._week.doy;
        }
        function At(e) {
          var t = this.localeData().week(this);
          return e == null ? t : this.add((e - t) * 7, "d");
        }
        function jt(e) {
          var t = Ct(this, 1, 4).week;
          return e == null ? t : this.add((e - t) * 7, "d");
        }
        function Pt(e, t) {
          if (typeof e !== "string") return e;
          if (!isNaN(e)) return parseInt(e, 10);
          e = t.weekdaysParse(e);
          if (typeof e === "number") return e;
          return null;
        }
        function Lt(e, t) {
          if (typeof e === "string") return t.weekdaysParse(e) % 7 || 7;
          return isNaN(e) ? null : e;
        }
        function Ht(e, t) {
          return e.slice(t, 7).concat(e.slice(0, t));
        }
        r("d", 0, "do", "day"),
          r("dd", 0, 0, function (e) {
            return this.localeData().weekdaysMin(this, e);
          }),
          r("ddd", 0, 0, function (e) {
            return this.localeData().weekdaysShort(this, e);
          }),
          r("dddd", 0, 0, function (e) {
            return this.localeData().weekdays(this, e);
          }),
          r("e", 0, 0, "weekday"),
          r("E", 0, 0, "isoWeekday"),
          t("day", "d"),
          t("weekday", "e"),
          t("isoWeekday", "E"),
          n("day", 11),
          n("weekday", 11),
          n("isoWeekday", 11),
          _("d", v),
          _("e", v),
          _("E", v),
          _("dd", function (e, t) {
            return t.weekdaysMinRegex(e);
          }),
          _("ddd", function (e, t) {
            return t.weekdaysShortRegex(e);
          }),
          _("dddd", function (e, t) {
            return t.weekdaysRegex(e);
          }),
          Ke(["dd", "ddd", "dddd"], function (e, t, n, r) {
            var i = n._locale.weekdaysParse(e, r, n._strict);
            if (i != null) t.d = i;
            else d(n).invalidWeekday = e;
          }),
          Ke(["d", "e", "E"], function (e, t, n, r) {
            t[r] = g(e);
          });
        var Rt =
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_"
            ),
          Wt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          qt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          Ft = ze,
          It = ze,
          Ut = ze;
        function Vt(e, t) {
          var n = o(this._weekdays)
            ? this._weekdays
            : this._weekdays[
                e && e !== true && this._weekdays.isFormat.test(t)
                  ? "format"
                  : "standalone"
              ];
          return e === true ? Ht(n, this._week.dow) : e ? n[e.day()] : n;
        }
        function Gt(e) {
          return e === true
            ? Ht(this._weekdaysShort, this._week.dow)
            : e
            ? this._weekdaysShort[e.day()]
            : this._weekdaysShort;
        }
        function $t(e) {
          return e === true
            ? Ht(this._weekdaysMin, this._week.dow)
            : e
            ? this._weekdaysMin[e.day()]
            : this._weekdaysMin;
        }
        function Bt(e, t, n) {
          var r,
            i,
            s,
            o = e.toLocaleLowerCase();
          if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];
            for (r = 0; r < 7; ++r) {
              s = c([2e3, 1]).day(r);
              this._minWeekdaysParse[r] = this.weekdaysMin(
                s,
                ""
              ).toLocaleLowerCase();
              this._shortWeekdaysParse[r] = this.weekdaysShort(
                s,
                ""
              ).toLocaleLowerCase();
              this._weekdaysParse[r] = this.weekdays(s, "").toLocaleLowerCase();
            }
          }
          if (n)
            if (t === "dddd") {
              i = C.call(this._weekdaysParse, o);
              return i !== -1 ? i : null;
            } else if (t === "ddd") {
              i = C.call(this._shortWeekdaysParse, o);
              return i !== -1 ? i : null;
            } else {
              i = C.call(this._minWeekdaysParse, o);
              return i !== -1 ? i : null;
            }
          else if (t === "dddd") {
            i = C.call(this._weekdaysParse, o);
            if (i !== -1) return i;
            i = C.call(this._shortWeekdaysParse, o);
            if (i !== -1) return i;
            i = C.call(this._minWeekdaysParse, o);
            return i !== -1 ? i : null;
          } else if (t === "ddd") {
            i = C.call(this._shortWeekdaysParse, o);
            if (i !== -1) return i;
            i = C.call(this._weekdaysParse, o);
            if (i !== -1) return i;
            i = C.call(this._minWeekdaysParse, o);
            return i !== -1 ? i : null;
          } else {
            i = C.call(this._minWeekdaysParse, o);
            if (i !== -1) return i;
            i = C.call(this._weekdaysParse, o);
            if (i !== -1) return i;
            i = C.call(this._shortWeekdaysParse, o);
            return i !== -1 ? i : null;
          }
        }
        function zt(e, t, n) {
          var r, i, s;
          if (this._weekdaysParseExact) return Bt.call(this, e, t, n);
          if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
          }
          for (r = 0; r < 7; r++) {
            i = c([2e3, 1]).day(r);
            if (n && !this._fullWeekdaysParse[r]) {
              this._fullWeekdaysParse[r] = new RegExp(
                "^" + this.weekdays(i, "").replace(".", "\\.?") + "$",
                "i"
              );
              this._shortWeekdaysParse[r] = new RegExp(
                "^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$",
                "i"
              );
              this._minWeekdaysParse[r] = new RegExp(
                "^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$",
                "i"
              );
            }
            if (!this._weekdaysParse[r]) {
              s =
                "^" +
                this.weekdays(i, "") +
                "|^" +
                this.weekdaysShort(i, "") +
                "|^" +
                this.weekdaysMin(i, "");
              this._weekdaysParse[r] = new RegExp(s.replace(".", ""), "i");
            }
            if (n && t === "dddd" && this._fullWeekdaysParse[r].test(e))
              return r;
            else if (n && t === "ddd" && this._shortWeekdaysParse[r].test(e))
              return r;
            else if (n && t === "dd" && this._minWeekdaysParse[r].test(e))
              return r;
            else if (!n && this._weekdaysParse[r].test(e)) return r;
          }
        }
        function Zt(e) {
          if (!this.isValid()) return e != null ? this : NaN;
          var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
          if (e != null) {
            e = Pt(e, this.localeData());
            return this.add(e - t, "d");
          } else return t;
        }
        function Xt(e) {
          if (!this.isValid()) return e != null ? this : NaN;
          var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
          return e == null ? t : this.add(e - t, "d");
        }
        function Jt(e) {
          if (!this.isValid()) return e != null ? this : NaN;
          if (e != null) {
            var t = Lt(e, this.localeData());
            return this.day(this.day() % 7 ? t : t - 7);
          } else return this.day() || 7;
        }
        function Qt(e) {
          if (this._weekdaysParseExact) {
            if (!u(this, "_weekdaysRegex")) tn.call(this);
            if (e) return this._weekdaysStrictRegex;
            else return this._weekdaysRegex;
          } else {
            if (!u(this, "_weekdaysRegex")) this._weekdaysRegex = Ft;
            return this._weekdaysStrictRegex && e
              ? this._weekdaysStrictRegex
              : this._weekdaysRegex;
          }
        }
        function Kt(e) {
          if (this._weekdaysParseExact) {
            if (!u(this, "_weekdaysRegex")) tn.call(this);
            if (e) return this._weekdaysShortStrictRegex;
            else return this._weekdaysShortRegex;
          } else {
            if (!u(this, "_weekdaysShortRegex")) this._weekdaysShortRegex = It;
            return this._weekdaysShortStrictRegex && e
              ? this._weekdaysShortStrictRegex
              : this._weekdaysShortRegex;
          }
        }
        function en(e) {
          if (this._weekdaysParseExact) {
            if (!u(this, "_weekdaysRegex")) tn.call(this);
            if (e) return this._weekdaysMinStrictRegex;
            else return this._weekdaysMinRegex;
          } else {
            if (!u(this, "_weekdaysMinRegex")) this._weekdaysMinRegex = Ut;
            return this._weekdaysMinStrictRegex && e
              ? this._weekdaysMinStrictRegex
              : this._weekdaysMinRegex;
          }
        }
        function tn() {
          function e(e, t) {
            return t.length - e.length;
          }
          var t = [],
            n = [],
            r = [],
            i = [],
            s,
            o,
            a,
            u,
            l;
          for (s = 0; s < 7; s++) {
            o = c([2e3, 1]).day(s);
            a = w(this.weekdaysMin(o, ""));
            u = w(this.weekdaysShort(o, ""));
            l = w(this.weekdays(o, ""));
            t.push(a);
            n.push(u);
            r.push(l);
            i.push(a);
            i.push(u);
            i.push(l);
          }
          t.sort(e);
          n.sort(e);
          r.sort(e);
          i.sort(e);
          this._weekdaysRegex = new RegExp("^(" + i.join("|") + ")", "i");
          this._weekdaysShortRegex = this._weekdaysRegex;
          this._weekdaysMinRegex = this._weekdaysRegex;
          this._weekdaysStrictRegex = new RegExp("^(" + r.join("|") + ")", "i");
          this._weekdaysShortStrictRegex = new RegExp(
            "^(" + n.join("|") + ")",
            "i"
          );
          this._weekdaysMinStrictRegex = new RegExp(
            "^(" + t.join("|") + ")",
            "i"
          );
        }
        function nn() {
          return this.hours() % 12 || 12;
        }
        function rn() {
          return this.hours() || 24;
        }
        function sn(e, t) {
          r(e, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), t);
          });
        }
        function on(e, t) {
          return t._meridiemParse;
        }
        function an(e) {
          return (e + "").toLowerCase().charAt(0) === "p";
        }
        r("H", ["HH", 2], 0, "hour"),
          r("h", ["hh", 2], 0, nn),
          r("k", ["kk", 2], 0, rn),
          r("hmm", 0, 0, function () {
            return "" + nn.apply(this) + s(this.minutes(), 2);
          }),
          r("hmmss", 0, 0, function () {
            return (
              "" + nn.apply(this) + s(this.minutes(), 2) + s(this.seconds(), 2)
            );
          }),
          r("Hmm", 0, 0, function () {
            return "" + this.hours() + s(this.minutes(), 2);
          }),
          r("Hmmss", 0, 0, function () {
            return (
              "" + this.hours() + s(this.minutes(), 2) + s(this.seconds(), 2)
            );
          }),
          sn("a", true),
          sn("A", false),
          t("hour", "h"),
          n("hour", 13),
          _("a", on),
          _("A", on),
          _("H", v),
          _("h", v),
          _("k", v),
          _("HH", v, i),
          _("hh", v, i),
          _("kk", v, i),
          _("hmm", Re),
          _("hmmss", We),
          _("Hmm", Re),
          _("Hmmss", We),
          x(["H", "HH"], D),
          x(["k", "kk"], function (e, t, n) {
            var r = g(e);
            t[D] = r === 24 ? 0 : r;
          }),
          x(["a", "A"], function (e, t, n) {
            n._isPm = n._locale.isPM(e);
            n._meridiem = e;
          }),
          x(["h", "hh"], function (e, t, n) {
            t[D] = g(e);
            d(n).bigHour = true;
          }),
          x("hmm", function (e, t, n) {
            var r = e.length - 2;
            t[D] = g(e.substr(0, r));
            t[T] = g(e.substr(r));
            d(n).bigHour = true;
          }),
          x("hmmss", function (e, t, n) {
            var r = e.length - 4,
              i = e.length - 2;
            t[D] = g(e.substr(0, r));
            t[T] = g(e.substr(r, 2));
            t[M] = g(e.substr(i));
            d(n).bigHour = true;
          }),
          x("Hmm", function (e, t, n) {
            var r = e.length - 2;
            t[D] = g(e.substr(0, r));
            t[T] = g(e.substr(r));
          }),
          x("Hmmss", function (e, t, n) {
            var r = e.length - 4,
              i = e.length - 2;
            t[D] = g(e.substr(0, r));
            t[T] = g(e.substr(r, 2));
            t[M] = g(e.substr(i));
          });
        var un,
          ln = Ne("Hours", true);
        function cn(e, t, n) {
          if (e > 11) return n ? "pm" : "PM";
          else return n ? "am" : "AM";
        }
        var fn = {
            calendar: ie,
            longDateFormat: pe,
            invalidDate: ye,
            ordinal: ve,
            dayOfMonthOrdinalParse: _e,
            relativeTime: xe,
            months: ot,
            monthsShort: at,
            week: Ot,
            weekdays: Rt,
            weekdaysMin: qt,
            weekdaysShort: Wt,
            meridiemParse: /[ap]\.?m?\.?/i,
          },
          O = {},
          dn = {},
          hn;
        function pn(e, t) {
          var n,
            r = Math.min(e.length, t.length);
          for (n = 0; n < r; n += 1) if (e[n] !== t[n]) return n;
          return r;
        }
        function mn(e) {
          return e ? e.toLowerCase().replace("_", "-") : e;
        }
        function yn(e) {
          var t = 0,
            n,
            r,
            i,
            s;
          while (t < e.length) {
            s = mn(e[t]).split("-");
            n = s.length;
            r = mn(e[t + 1]);
            r = r ? r.split("-") : null;
            while (n > 0) {
              i = vn(s.slice(0, n).join("-"));
              if (i) return i;
              if (r && r.length >= n && pn(s, r) >= n - 1) break;
              n--;
            }
            t++;
          }
          return hn;
        }
        function gn(e) {
          return e.match("^[^/\\\\]*$") != null;
        }
        function vn(t) {
          var e = null,
            n;
          if (
            O[t] === undefined &&
            "object" !== "undefined" &&
            co &&
            co.exports &&
            gn(t)
          )
            try {
              e = hn._abbr;
              n = lo;
              n("./locale/" + t);
              _n(e);
            } catch (e) {
              O[t] = null;
            }
          return O[t];
        }
        function _n(e, t) {
          var n;
          if (e) {
            if (a(t)) n = bn(e);
            else n = wn(e, t);
            if (n) hn = n;
            else if (typeof console !== "undefined" && console.warn)
              console.warn(
                "Locale " + e + " not found. Did you forget to load it?"
              );
          }
          return hn._abbr;
        }
        function wn(e, t) {
          if (t !== null) {
            var n,
              r = fn;
            t.abbr = e;
            if (O[e] != null) {
              ee(
                "defineLocaleOverride",
                "use moment.updateLocale(localeName, config) to change " +
                  "an existing locale. moment.defineLocale(localeName, " +
                  "config) should only be used for creating a new locale " +
                  "See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
              );
              r = O[e]._config;
            } else if (t.parentLocale != null)
              if (O[t.parentLocale] != null) r = O[t.parentLocale]._config;
              else {
                n = vn(t.parentLocale);
                if (n != null) r = n._config;
                else {
                  if (!dn[t.parentLocale]) dn[t.parentLocale] = [];
                  dn[t.parentLocale].push({ name: e, config: t });
                  return null;
                }
              }
            O[e] = new re(ne(r, t));
            if (dn[e])
              dn[e].forEach(function (e) {
                wn(e.name, e.config);
              });
            _n(e);
            return O[e];
          } else {
            delete O[e];
            return null;
          }
        }
        function xn(e, t) {
          if (t != null) {
            var n,
              r,
              i = fn;
            if (O[e] != null && O[e].parentLocale != null)
              O[e].set(ne(O[e]._config, t));
            else {
              r = vn(e);
              if (r != null) i = r._config;
              t = ne(i, t);
              if (r == null) t.abbr = e;
              n = new re(t);
              n.parentLocale = O[e];
              O[e] = n;
            }
            _n(e);
          } else if (O[e] != null)
            if (O[e].parentLocale != null) {
              O[e] = O[e].parentLocale;
              if (e === _n()) _n(e);
            } else if (O[e] != null) delete O[e];
          return O[e];
        }
        function bn(e) {
          var t;
          if (e && e._locale && e._locale._abbr) e = e._locale._abbr;
          if (!e) return hn;
          if (!o(e)) {
            t = vn(e);
            if (t) return t;
            e = [e];
          }
          return yn(e);
        }
        function kn() {
          return K(O);
        }
        function Sn(e) {
          var t,
            n = e._a;
          if (n && d(e).overflow === -2) {
            t =
              n[k] < 0 || n[k] > 11
                ? k
                : n[S] < 1 || n[S] > st(n[b], n[k])
                ? S
                : n[D] < 0 ||
                  n[D] > 24 ||
                  (n[D] === 24 && (n[T] !== 0 || n[M] !== 0 || n[tt] !== 0))
                ? D
                : n[T] < 0 || n[T] > 59
                ? T
                : n[M] < 0 || n[M] > 59
                ? M
                : n[tt] < 0 || n[tt] > 999
                ? tt
                : -1;
            if (d(e)._overflowDayOfYear && (t < b || t > S)) t = S;
            if (d(e)._overflowWeeks && t === -1) t = nt;
            if (d(e)._overflowWeekday && t === -1) t = rt;
            d(e).overflow = t;
          }
          return e;
        }
        var Dn =
            /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          Tn =
            /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          Mn = /Z|[+-]\d\d(?::?\d\d)?/,
          Cn = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, false],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, false],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, false],
            ["YYYYDDD", /\d{7}/],
            ["YYYYMM", /\d{6}/, false],
            ["YYYY", /\d{4}/, false],
          ],
          Nn = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/],
          ],
          On = /^\/?Date\((-?\d+)/i,
          Yn =
            /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
          En = {
            UT: 0,
            GMT: 0,
            EDT: -4 * 60,
            EST: -5 * 60,
            CDT: -5 * 60,
            CST: -6 * 60,
            MDT: -6 * 60,
            MST: -7 * 60,
            PDT: -7 * 60,
            PST: -8 * 60,
          };
        function An(e) {
          var t,
            n,
            r = e._i,
            i = Dn.exec(r) || Tn.exec(r),
            s,
            o,
            a,
            u,
            l = Cn.length,
            c = Nn.length;
          if (i) {
            d(e).iso = true;
            for (t = 0, n = l; t < n; t++)
              if (Cn[t][1].exec(i[1])) {
                o = Cn[t][0];
                s = Cn[t][2] !== false;
                break;
              }
            if (o == null) {
              e._isValid = false;
              return;
            }
            if (i[3]) {
              for (t = 0, n = c; t < n; t++)
                if (Nn[t][1].exec(i[3])) {
                  a = (i[2] || " ") + Nn[t][0];
                  break;
                }
              if (a == null) {
                e._isValid = false;
                return;
              }
            }
            if (!s && a != null) {
              e._isValid = false;
              return;
            }
            if (i[4])
              if (Mn.exec(i[4])) u = "Z";
              else {
                e._isValid = false;
                return;
              }
            e._f = o + (a || "") + (u || "");
            Gn(e);
          } else e._isValid = false;
        }
        function jn(e, t, n, r, i, s) {
          var o = [
            Pn(e),
            at.indexOf(t),
            parseInt(n, 10),
            parseInt(r, 10),
            parseInt(i, 10),
          ];
          if (s) o.push(parseInt(s, 10));
          return o;
        }
        function Pn(e) {
          var t = parseInt(e, 10);
          if (t <= 49) return 2e3 + t;
          else if (t <= 999) return 1900 + t;
          return t;
        }
        function Ln(e) {
          return e
            .replace(/\([^)]*\)|[\n\t]/g, " ")
            .replace(/(\s\s+)/g, " ")
            .replace(/^\s\s*/, "")
            .replace(/\s\s*$/, "");
        }
        function Hn(e, t, n) {
          if (e) {
            var r = Wt.indexOf(e),
              i = new Date(t[0], t[1], t[2]).getDay();
            if (r !== i) {
              d(n).weekdayMismatch = true;
              n._isValid = false;
              return false;
            }
          }
          return true;
        }
        function Rn(e, t, n) {
          if (e) return En[e];
          else if (t) return 0;
          else {
            var r = parseInt(n, 10),
              i = r % 100,
              s = (r - i) / 100;
            return s * 60 + i;
          }
        }
        function Wn(e) {
          var t = Yn.exec(Ln(e._i)),
            n;
          if (t) {
            n = jn(t[4], t[3], t[2], t[5], t[6], t[7]);
            if (!Hn(t[1], n, e)) return;
            e._a = n;
            e._tzm = Rn(t[8], t[9], t[10]);
            e._d = Dt.apply(null, e._a);
            e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm);
            d(e).rfc2822 = true;
          } else e._isValid = false;
        }
        function qn(e) {
          var t = On.exec(e._i);
          if (t !== null) {
            e._d = new Date(+t[1]);
            return;
          }
          An(e);
          if (e._isValid === false) delete e._isValid;
          else return;
          Wn(e);
          if (e._isValid === false) delete e._isValid;
          else return;
          if (e._strict) e._isValid = false;
          else f.createFromInputFallback(e);
        }
        function Fn(e, t, n) {
          if (e != null) return e;
          if (t != null) return t;
          return n;
        }
        function In(e) {
          var t = new Date(f.now());
          if (e._useUTC)
            return [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()];
          return [t.getFullYear(), t.getMonth(), t.getDate()];
        }
        function Un(e) {
          var t,
            n,
            r = [],
            i,
            s,
            o;
          if (e._d) return;
          i = In(e);
          if (e._w && e._a[S] == null && e._a[k] == null) Vn(e);
          if (e._dayOfYear != null) {
            o = Fn(e._a[b], i[b]);
            if (e._dayOfYear > xt(o) || e._dayOfYear === 0)
              d(e)._overflowDayOfYear = true;
            n = Dt(o, 0, e._dayOfYear);
            e._a[k] = n.getUTCMonth();
            e._a[S] = n.getUTCDate();
          }
          for (t = 0; t < 3 && e._a[t] == null; ++t) e._a[t] = r[t] = i[t];
          for (; t < 7; t++)
            e._a[t] = r[t] = e._a[t] == null ? (t === 2 ? 1 : 0) : e._a[t];
          if (
            e._a[D] === 24 &&
            e._a[T] === 0 &&
            e._a[M] === 0 &&
            e._a[tt] === 0
          ) {
            e._nextDay = true;
            e._a[D] = 0;
          }
          e._d = (e._useUTC ? Dt : St).apply(null, r);
          s = e._useUTC ? e._d.getUTCDay() : e._d.getDay();
          if (e._tzm != null) e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm);
          if (e._nextDay) e._a[D] = 24;
          if (e._w && typeof e._w.d !== "undefined" && e._w.d !== s)
            d(e).weekdayMismatch = true;
        }
        function Vn(e) {
          var t, n, r, i, s, o, a, u, l;
          t = e._w;
          if (t.GG != null || t.W != null || t.E != null) {
            s = 1;
            o = 4;
            n = Fn(t.GG, e._a[b], Ct(Y(), 1, 4).year);
            r = Fn(t.W, 1);
            i = Fn(t.E, 1);
            if (i < 1 || i > 7) u = true;
          } else {
            s = e._locale._week.dow;
            o = e._locale._week.doy;
            l = Ct(Y(), s, o);
            n = Fn(t.gg, e._a[b], l.year);
            r = Fn(t.w, l.week);
            if (t.d != null) {
              i = t.d;
              if (i < 0 || i > 6) u = true;
            } else if (t.e != null) {
              i = t.e + s;
              if (t.e < 0 || t.e > 6) u = true;
            } else i = s;
          }
          if (r < 1 || r > N(n, s, o)) d(e)._overflowWeeks = true;
          else if (u != null) d(e)._overflowWeekday = true;
          else {
            a = Mt(n, r, i, s, o);
            e._a[b] = a.year;
            e._dayOfYear = a.dayOfYear;
          }
        }
        function Gn(e) {
          if (e._f === f.ISO_8601) {
            An(e);
            return;
          }
          if (e._f === f.RFC_2822) {
            Wn(e);
            return;
          }
          e._a = [];
          d(e).empty = true;
          var t = "" + e._i,
            n,
            r,
            i,
            s,
            o,
            a = t.length,
            u = 0,
            l,
            c;
          i = he(e._f, e._locale).match(oe) || [];
          c = i.length;
          for (n = 0; n < c; n++) {
            s = i[n];
            r = (t.match(Xe(s, e)) || [])[0];
            if (r) {
              o = t.substr(0, t.indexOf(r));
              if (o.length > 0) d(e).unusedInput.push(o);
              t = t.slice(t.indexOf(r) + r.length);
              u += r.length;
            }
            if (le[s]) {
              if (r) d(e).empty = false;
              else d(e).unusedTokens.push(s);
              et(s, r, e);
            } else if (e._strict && !r) d(e).unusedTokens.push(s);
          }
          d(e).charsLeftOver = a - u;
          if (t.length > 0) d(e).unusedInput.push(t);
          if (e._a[D] <= 12 && d(e).bigHour === true && e._a[D] > 0)
            d(e).bigHour = undefined;
          d(e).parsedDateParts = e._a.slice(0);
          d(e).meridiem = e._meridiem;
          e._a[D] = $n(e._locale, e._a[D], e._meridiem);
          l = d(e).era;
          if (l !== null) e._a[b] = e._locale.erasConvertYear(l, e._a[b]);
          Un(e);
          Sn(e);
        }
        function $n(e, t, n) {
          var r;
          if (n == null) return t;
          if (e.meridiemHour != null) return e.meridiemHour(t, n);
          else if (e.isPM != null) {
            r = e.isPM(n);
            if (r && t < 12) t += 12;
            if (!r && t === 12) t = 0;
            return t;
          } else return t;
        }
        function Bn(e) {
          var t,
            n,
            r,
            i,
            s,
            o,
            a = false,
            u = e._f.length;
          if (u === 0) {
            d(e).invalidFormat = true;
            e._d = new Date(NaN);
            return;
          }
          for (i = 0; i < u; i++) {
            s = 0;
            o = false;
            t = Z({}, e);
            if (e._useUTC != null) t._useUTC = e._useUTC;
            t._f = e._f[i];
            Gn(t);
            if (G(t)) o = true;
            s += d(t).charsLeftOver;
            s += d(t).unusedTokens.length * 10;
            d(t).score = s;
            if (!a) {
              if (r == null || s < r || o) {
                r = s;
                n = t;
                if (o) a = true;
              }
            } else if (s < r) {
              r = s;
              n = t;
            }
          }
          U(e, n || t);
        }
        function zn(e) {
          if (e._d) return;
          var t = De(e._i),
            n = t.day === undefined ? t.date : t.day;
          e._a = I(
            [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
            function (e) {
              return e && parseInt(e, 10);
            }
          );
          Un(e);
        }
        function Zn(e) {
          var t = new X(Sn(Xn(e)));
          if (t._nextDay) {
            t.add(1, "d");
            t._nextDay = undefined;
          }
          return t;
        }
        function Xn(e) {
          var t = e._i,
            n = e._f;
          e._locale = e._locale || bn(e._l);
          if (t === null || (n === undefined && t === ""))
            return $({ nullInput: true });
          if (typeof t === "string") e._i = t = e._locale.preparse(t);
          if (h(t)) return new X(Sn(t));
          else if (F(t)) e._d = t;
          else if (o(n)) Bn(e);
          else if (n) Gn(e);
          else Jn(e);
          if (!G(e)) e._d = null;
          return e;
        }
        function Jn(e) {
          var t = e._i;
          if (a(t)) e._d = new Date(f.now());
          else if (F(t)) e._d = new Date(t.valueOf());
          else if (typeof t === "string") qn(e);
          else if (o(t)) {
            e._a = I(t.slice(0), function (e) {
              return parseInt(e, 10);
            });
            Un(e);
          } else if (W(t)) zn(e);
          else if (l(t)) e._d = new Date(t);
          else f.createFromInputFallback(e);
        }
        function Qn(e, t, n, r, i) {
          var s = {};
          if (t === true || t === false) {
            r = t;
            t = undefined;
          }
          if (n === true || n === false) {
            r = n;
            n = undefined;
          }
          if ((W(e) && q(e)) || (o(e) && e.length === 0)) e = undefined;
          s._isAMomentObject = true;
          s._useUTC = s._isUTC = i;
          s._l = n;
          s._i = e;
          s._f = t;
          s._strict = r;
          return Zn(s);
        }
        function Y(e, t, n, r) {
          return Qn(e, t, n, r, false);
        }
        (f.createFromInputFallback = e(
          "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), " +
            "which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are " +
            "discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
          function (e) {
            e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
          }
        )),
          (f.ISO_8601 = function () {}),
          (f.RFC_2822 = function () {});
        var Kn = e(
            "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
            function () {
              var e = Y.apply(null, arguments);
              if (this.isValid() && e.isValid()) return e < this ? this : e;
              else return $();
            }
          ),
          er = e(
            "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
            function () {
              var e = Y.apply(null, arguments);
              if (this.isValid() && e.isValid()) return e > this ? this : e;
              else return $();
            }
          );
        function tr(e, t) {
          var n, r;
          if (t.length === 1 && o(t[0])) t = t[0];
          if (!t.length) return Y();
          n = t[0];
          for (r = 1; r < t.length; ++r)
            if (!t[r].isValid() || t[r][e](n)) n = t[r];
          return n;
        }
        function nr() {
          var e = [].slice.call(arguments, 0);
          return tr("isBefore", e);
        }
        function rr() {
          var e = [].slice.call(arguments, 0);
          return tr("isAfter", e);
        }
        var ir = function () {
            return Date.now ? Date.now() : +new Date();
          },
          sr = [
            "year",
            "quarter",
            "month",
            "week",
            "day",
            "hour",
            "minute",
            "second",
            "millisecond",
          ];
        function or(e) {
          var t,
            n = false,
            r,
            i = sr.length;
          for (t in e)
            if (
              u(e, t) &&
              !(C.call(sr, t) !== -1 && (e[t] == null || !isNaN(e[t])))
            )
              return false;
          for (r = 0; r < i; ++r)
            if (e[sr[r]]) {
              if (n) return false;
              if (parseFloat(e[sr[r]]) !== g(e[sr[r]])) n = true;
            }
          return true;
        }
        function ar() {
          return this._isValid;
        }
        function ur() {
          return E(NaN);
        }
        function lr(e) {
          var t = De(e),
            n = t.year || 0,
            r = t.quarter || 0,
            i = t.month || 0,
            s = t.week || t.isoWeek || 0,
            o = t.day || 0,
            a = t.hour || 0,
            u = t.minute || 0,
            l = t.second || 0,
            c = t.millisecond || 0;
          this._isValid = or(t);
          this._milliseconds = +c + l * 1e3 + u * 6e4 + a * 1e3 * 60 * 60;
          this._days = +o + s * 7;
          this._months = +i + r * 3 + n * 12;
          this._data = {};
          this._locale = bn();
          this._bubble();
        }
        function cr(e) {
          return e instanceof lr;
        }
        function fr(e) {
          if (e < 0) return Math.round(-1 * e) * -1;
          else return Math.round(e);
        }
        function dr(e, t, n) {
          var r = Math.min(e.length, t.length),
            i = Math.abs(e.length - t.length),
            s = 0,
            o;
          for (o = 0; o < r; o++)
            if ((n && e[o] !== t[o]) || (!n && g(e[o]) !== g(t[o]))) s++;
          return s + i;
        }
        function hr(e, n) {
          r(e, 0, 0, function () {
            var e = this.utcOffset(),
              t = "+";
            if (e < 0) {
              e = -e;
              t = "-";
            }
            return t + s(~~(e / 60), 2) + n + s(~~e % 60, 2);
          });
        }
        hr("Z", ":"),
          hr("ZZ", ""),
          _("Z", $e),
          _("ZZ", $e),
          x(["Z", "ZZ"], function (e, t, n) {
            n._useUTC = true;
            n._tzm = mr($e, e);
          });
        var pr = /([\+\-]|\d\d)/gi;
        function mr(e, t) {
          var n = (t || "").match(e),
            r,
            i,
            s;
          if (n === null) return null;
          r = n[n.length - 1] || [];
          i = (r + "").match(pr) || ["-", 0, 0];
          s = +(i[1] * 60) + g(i[2]);
          return s === 0 ? 0 : i[0] === "+" ? s : -s;
        }
        function yr(e, t) {
          var n, r;
          if (t._isUTC) {
            n = t.clone();
            r = (h(e) || F(e) ? e.valueOf() : Y(e).valueOf()) - n.valueOf();
            n._d.setTime(n._d.valueOf() + r);
            f.updateOffset(n, false);
            return n;
          } else return Y(e).local();
        }
        function gr(e) {
          return -Math.round(e._d.getTimezoneOffset());
        }
        function vr(e, t, n) {
          var r = this._offset || 0,
            i;
          if (!this.isValid()) return e != null ? this : NaN;
          if (e != null) {
            if (typeof e === "string") {
              e = mr($e, e);
              if (e === null) return this;
            } else if (Math.abs(e) < 16 && !n) e = e * 60;
            if (!this._isUTC && t) i = gr(this);
            this._offset = e;
            this._isUTC = true;
            if (i != null) this.add(i, "m");
            if (r !== e)
              if (!t || this._changeInProgress)
                Pr(this, E(e - r, "m"), 1, false);
              else if (!this._changeInProgress) {
                this._changeInProgress = true;
                f.updateOffset(this, true);
                this._changeInProgress = null;
              }
            return this;
          } else return this._isUTC ? r : gr(this);
        }
        function _r(e, t) {
          if (e != null) {
            if (typeof e !== "string") e = -e;
            this.utcOffset(e, t);
            return this;
          } else return -this.utcOffset();
        }
        function wr(e) {
          return this.utcOffset(0, e);
        }
        function xr(e) {
          if (this._isUTC) {
            this.utcOffset(0, e);
            this._isUTC = false;
            if (e) this.subtract(gr(this), "m");
          }
          return this;
        }
        function br() {
          if (this._tzm != null) this.utcOffset(this._tzm, false, true);
          else if (typeof this._i === "string") {
            var e = mr(Ge, this._i);
            if (e != null) this.utcOffset(e);
            else this.utcOffset(0, true);
          }
          return this;
        }
        function kr(e) {
          if (!this.isValid()) return false;
          e = e ? Y(e).utcOffset() : 0;
          return (this.utcOffset() - e) % 60 === 0;
        }
        function Sr() {
          return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
          );
        }
        function Dr() {
          if (!a(this._isDSTShifted)) return this._isDSTShifted;
          var e = {},
            t;
          Z(e, this);
          e = Xn(e);
          if (e._a) {
            t = e._isUTC ? c(e._a) : Y(e._a);
            this._isDSTShifted = this.isValid() && dr(e._a, t.toArray()) > 0;
          } else this._isDSTShifted = false;
          return this._isDSTShifted;
        }
        function Tr() {
          return this.isValid() ? !this._isUTC : false;
        }
        function Mr() {
          return this.isValid() ? this._isUTC : false;
        }
        function Cr() {
          return this.isValid() ? this._isUTC && this._offset === 0 : false;
        }
        f.updateOffset = function () {};
        var Nr = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
          Or =
            /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
        function E(e, t) {
          var n = e,
            r = null,
            i,
            s,
            o;
          if (cr(e)) n = { ms: e._milliseconds, d: e._days, M: e._months };
          else if (l(e) || !isNaN(+e)) {
            n = {};
            if (t) n[t] = +e;
            else n.milliseconds = +e;
          } else if ((r = Nr.exec(e))) {
            i = r[1] === "-" ? -1 : 1;
            n = {
              y: 0,
              d: g(r[S]) * i,
              h: g(r[D]) * i,
              m: g(r[T]) * i,
              s: g(r[M]) * i,
              ms: g(fr(r[tt] * 1e3)) * i,
            };
          } else if ((r = Or.exec(e))) {
            i = r[1] === "-" ? -1 : 1;
            n = {
              y: Yr(r[2], i),
              M: Yr(r[3], i),
              w: Yr(r[4], i),
              d: Yr(r[5], i),
              h: Yr(r[6], i),
              m: Yr(r[7], i),
              s: Yr(r[8], i),
            };
          } else if (n == null) n = {};
          else if (typeof n === "object" && ("from" in n || "to" in n)) {
            o = Ar(Y(n.from), Y(n.to));
            n = {};
            n.ms = o.milliseconds;
            n.M = o.months;
          }
          s = new lr(n);
          if (cr(e) && u(e, "_locale")) s._locale = e._locale;
          if (cr(e) && u(e, "_isValid")) s._isValid = e._isValid;
          return s;
        }
        function Yr(e, t) {
          var n = e && parseFloat(e.replace(",", "."));
          return (isNaN(n) ? 0 : n) * t;
        }
        function Er(e, t) {
          var n = {};
          n.months = t.month() - e.month() + (t.year() - e.year()) * 12;
          if (e.clone().add(n.months, "M").isAfter(t)) --n.months;
          n.milliseconds = +t - +e.clone().add(n.months, "M");
          return n;
        }
        function Ar(e, t) {
          var n;
          if (!(e.isValid() && t.isValid()))
            return { milliseconds: 0, months: 0 };
          t = yr(t, e);
          if (e.isBefore(t)) n = Er(e, t);
          else {
            n = Er(t, e);
            n.milliseconds = -n.milliseconds;
            n.months = -n.months;
          }
          return n;
        }
        function jr(i, s) {
          return function (e, t) {
            var n, r;
            if (t !== null && !isNaN(+t)) {
              ee(
                s,
                "moment()." +
                  s +
                  "(period, number) is deprecated. Please use moment()." +
                  s +
                  "(number, period). " +
                  "See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
              );
              r = e;
              e = t;
              t = r;
            }
            n = E(e, t);
            Pr(this, n, i);
            return this;
          };
        }
        function Pr(e, t, n, r) {
          var i = t._milliseconds,
            s = fr(t._days),
            o = fr(t._months);
          if (!e.isValid()) return;
          r = r == null ? true : r;
          if (o) mt(e, Oe(e, "Month") + o * n);
          if (s) Ye(e, "Date", Oe(e, "Date") + s * n);
          if (i) e._d.setTime(e._d.valueOf() + i * n);
          if (r) f.updateOffset(e, s || o);
        }
        (E.fn = lr.prototype), (E.invalid = ur);
        var Lr = jr(1, "add"),
          Hr = jr(-1, "subtract");
        function Rr(e) {
          return typeof e === "string" || e instanceof String;
        }
        function Wr(e) {
          return (
            h(e) ||
            F(e) ||
            Rr(e) ||
            l(e) ||
            Fr(e) ||
            qr(e) ||
            e === null ||
            e === undefined
          );
        }
        function qr(e) {
          var t = W(e) && !q(e),
            n = false,
            r = [
              "years",
              "year",
              "y",
              "months",
              "month",
              "M",
              "days",
              "day",
              "d",
              "dates",
              "date",
              "D",
              "hours",
              "hour",
              "h",
              "minutes",
              "minute",
              "m",
              "seconds",
              "second",
              "s",
              "milliseconds",
              "millisecond",
              "ms",
            ],
            i,
            s,
            o = r.length;
          for (i = 0; i < o; i += 1) {
            s = r[i];
            n = n || u(e, s);
          }
          return t && n;
        }
        function Fr(t) {
          var e = o(t),
            n = false;
          if (e)
            n =
              t.filter(function (e) {
                return !l(e) && Rr(t);
              }).length === 0;
          return e && n;
        }
        function Ir(e) {
          var t = W(e) && !q(e),
            n = false,
            r = [
              "sameDay",
              "nextDay",
              "lastDay",
              "nextWeek",
              "lastWeek",
              "sameElse",
            ],
            i,
            s;
          for (i = 0; i < r.length; i += 1) {
            s = r[i];
            n = n || u(e, s);
          }
          return t && n;
        }
        function Ur(e, t) {
          var n = e.diff(t, "days", true);
          return n < -6
            ? "sameElse"
            : n < -1
            ? "lastWeek"
            : n < 0
            ? "lastDay"
            : n < 1
            ? "sameDay"
            : n < 2
            ? "nextDay"
            : n < 7
            ? "nextWeek"
            : "sameElse";
        }
        function Vr(e, t) {
          if (arguments.length === 1)
            if (!arguments[0]) {
              e = undefined;
              t = undefined;
            } else if (Wr(arguments[0])) {
              e = arguments[0];
              t = undefined;
            } else if (Ir(arguments[0])) {
              t = arguments[0];
              e = undefined;
            }
          var n = e || Y(),
            r = yr(n, this).startOf("day"),
            i = f.calendarFormat(this, r) || "sameElse",
            s = t && (p(t[i]) ? t[i].call(this, n) : t[i]);
          return this.format(s || this.localeData().calendar(i, this, Y(n)));
        }
        function Gr() {
          return new X(this);
        }
        function $r(e, t) {
          var n = h(e) ? e : Y(e);
          if (!(this.isValid() && n.isValid())) return false;
          t = m(t) || "millisecond";
          if (t === "millisecond") return this.valueOf() > n.valueOf();
          else return n.valueOf() < this.clone().startOf(t).valueOf();
        }
        function Br(e, t) {
          var n = h(e) ? e : Y(e);
          if (!(this.isValid() && n.isValid())) return false;
          t = m(t) || "millisecond";
          if (t === "millisecond") return this.valueOf() < n.valueOf();
          else return this.clone().endOf(t).valueOf() < n.valueOf();
        }
        function zr(e, t, n, r) {
          var i = h(e) ? e : Y(e),
            s = h(t) ? t : Y(t);
          if (!(this.isValid() && i.isValid() && s.isValid())) return false;
          r = r || "()";
          return (
            (r[0] === "(" ? this.isAfter(i, n) : !this.isBefore(i, n)) &&
            (r[1] === ")" ? this.isBefore(s, n) : !this.isAfter(s, n))
          );
        }
        function Zr(e, t) {
          var n = h(e) ? e : Y(e),
            r;
          if (!(this.isValid() && n.isValid())) return false;
          t = m(t) || "millisecond";
          if (t === "millisecond") return this.valueOf() === n.valueOf();
          else {
            r = n.valueOf();
            return (
              this.clone().startOf(t).valueOf() <= r &&
              r <= this.clone().endOf(t).valueOf()
            );
          }
        }
        function Xr(e, t) {
          return this.isSame(e, t) || this.isAfter(e, t);
        }
        function Jr(e, t) {
          return this.isSame(e, t) || this.isBefore(e, t);
        }
        function Qr(e, t, n) {
          var r, i, s;
          if (!this.isValid()) return NaN;
          r = yr(e, this);
          if (!r.isValid()) return NaN;
          i = (r.utcOffset() - this.utcOffset()) * 6e4;
          t = m(t);
          switch (t) {
            case "year":
              s = Kr(this, r) / 12;
              break;
            case "month":
              s = Kr(this, r);
              break;
            case "quarter":
              s = Kr(this, r) / 3;
              break;
            case "second":
              s = (this - r) / 1e3;
              break;
            case "minute":
              s = (this - r) / 6e4;
              break;
            case "hour":
              s = (this - r) / 36e5;
              break;
            case "day":
              s = (this - r - i) / 864e5;
              break;
            case "week":
              s = (this - r - i) / 6048e5;
              break;
            default:
              s = this - r;
          }
          return n ? s : y(s);
        }
        function Kr(e, t) {
          if (e.date() < t.date()) return -Kr(t, e);
          var n = (t.year() - e.year()) * 12 + (t.month() - e.month()),
            r = e.clone().add(n, "months"),
            i,
            s;
          if (t - r < 0) {
            i = e.clone().add(n - 1, "months");
            s = (t - r) / (r - i);
          } else {
            i = e.clone().add(n + 1, "months");
            s = (t - r) / (i - r);
          }
          return -(n + s) || 0;
        }
        function ei() {
          return this.clone()
            .locale("en")
            .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
        }
        function ti(e) {
          if (!this.isValid()) return null;
          var t = e !== true,
            n = t ? this.clone().utc() : this;
          if (n.year() < 0 || n.year() > 9999)
            return de(
              n,
              t
                ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
            );
          if (p(Date.prototype.toISOString))
            if (t) return this.toDate().toISOString();
            else
              return new Date(this.valueOf() + this.utcOffset() * 60 * 1e3)
                .toISOString()
                .replace("Z", de(n, "Z"));
          return de(
            n,
            t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
          );
        }
        function ni() {
          if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
          var e = "moment",
            t = "",
            n,
            r,
            i,
            s;
          if (!this.isLocal()) {
            e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
            t = "Z";
          }
          n = "[" + e + '("]';
          r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
          i = "-MM-DD[T]HH:mm:ss.SSS";
          s = t + '[")]';
          return this.format(n + r + i + s);
        }
        function ri(e) {
          if (!e) e = this.isUtc() ? f.defaultFormatUtc : f.defaultFormat;
          var t = de(this, e);
          return this.localeData().postformat(t);
        }
        function ii(e, t) {
          if (this.isValid() && ((h(e) && e.isValid()) || Y(e).isValid()))
            return E({ to: this, from: e }).locale(this.locale()).humanize(!t);
          else return this.localeData().invalidDate();
        }
        function si(e) {
          return this.from(Y(), e);
        }
        function oi(e, t) {
          if (this.isValid() && ((h(e) && e.isValid()) || Y(e).isValid()))
            return E({ from: this, to: e }).locale(this.locale()).humanize(!t);
          else return this.localeData().invalidDate();
        }
        function ai(e) {
          return this.to(Y(), e);
        }
        function ui(e) {
          var t;
          if (e === undefined) return this._locale._abbr;
          else {
            t = bn(e);
            if (t != null) this._locale = t;
            return this;
          }
        }
        (f.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
          (f.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
        var li = e(
          "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
          function (e) {
            if (e === undefined) return this.localeData();
            else return this.locale(e);
          }
        );
        function ci() {
          return this._locale;
        }
        var fi = 1e3,
          di = 60 * fi,
          hi = 60 * di,
          pi = (365 * 400 + 97) * 24 * hi;
        function mi(e, t) {
          return ((e % t) + t) % t;
        }
        function yi(e, t, n) {
          if (e < 100 && e >= 0) return new Date(e + 400, t, n) - pi;
          else return new Date(e, t, n).valueOf();
        }
        function gi(e, t, n) {
          if (e < 100 && e >= 0) return Date.UTC(e + 400, t, n) - pi;
          else return Date.UTC(e, t, n);
        }
        function vi(e) {
          var t, n;
          e = m(e);
          if (e === undefined || e === "millisecond" || !this.isValid())
            return this;
          n = this._isUTC ? gi : yi;
          switch (e) {
            case "year":
              t = n(this.year(), 0, 1);
              break;
            case "quarter":
              t = n(this.year(), this.month() - (this.month() % 3), 1);
              break;
            case "month":
              t = n(this.year(), this.month(), 1);
              break;
            case "week":
              t = n(this.year(), this.month(), this.date() - this.weekday());
              break;
            case "isoWeek":
              t = n(
                this.year(),
                this.month(),
                this.date() - (this.isoWeekday() - 1)
              );
              break;
            case "day":
            case "date":
              t = n(this.year(), this.month(), this.date());
              break;
            case "hour":
              t = this._d.valueOf();
              t -= mi(t + (this._isUTC ? 0 : this.utcOffset() * di), hi);
              break;
            case "minute":
              t = this._d.valueOf();
              t -= mi(t, di);
              break;
            case "second":
              t = this._d.valueOf();
              t -= mi(t, fi);
              break;
          }
          this._d.setTime(t);
          f.updateOffset(this, true);
          return this;
        }
        function _i(e) {
          var t, n;
          e = m(e);
          if (e === undefined || e === "millisecond" || !this.isValid())
            return this;
          n = this._isUTC ? gi : yi;
          switch (e) {
            case "year":
              t = n(this.year() + 1, 0, 1) - 1;
              break;
            case "quarter":
              t = n(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
              break;
            case "month":
              t = n(this.year(), this.month() + 1, 1) - 1;
              break;
            case "week":
              t =
                n(this.year(), this.month(), this.date() - this.weekday() + 7) -
                1;
              break;
            case "isoWeek":
              t =
                n(
                  this.year(),
                  this.month(),
                  this.date() - (this.isoWeekday() - 1) + 7
                ) - 1;
              break;
            case "day":
            case "date":
              t = n(this.year(), this.month(), this.date() + 1) - 1;
              break;
            case "hour":
              t = this._d.valueOf();
              t +=
                hi - mi(t + (this._isUTC ? 0 : this.utcOffset() * di), hi) - 1;
              break;
            case "minute":
              t = this._d.valueOf();
              t += di - mi(t, di) - 1;
              break;
            case "second":
              t = this._d.valueOf();
              t += fi - mi(t, fi) - 1;
              break;
          }
          this._d.setTime(t);
          f.updateOffset(this, true);
          return this;
        }
        function wi() {
          return this._d.valueOf() - (this._offset || 0) * 6e4;
        }
        function xi() {
          return Math.floor(this.valueOf() / 1e3);
        }
        function bi() {
          return new Date(this.valueOf());
        }
        function ki() {
          var e = this;
          return [
            e.year(),
            e.month(),
            e.date(),
            e.hour(),
            e.minute(),
            e.second(),
            e.millisecond(),
          ];
        }
        function Si() {
          var e = this;
          return {
            years: e.year(),
            months: e.month(),
            date: e.date(),
            hours: e.hours(),
            minutes: e.minutes(),
            seconds: e.seconds(),
            milliseconds: e.milliseconds(),
          };
        }
        function Di() {
          return this.isValid() ? this.toISOString() : null;
        }
        function Ti() {
          return G(this);
        }
        function Mi() {
          return U({}, d(this));
        }
        function Ci() {
          return d(this).overflow;
        }
        function Ni() {
          return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict,
          };
        }
        function Oi(e, t) {
          var n,
            r,
            i,
            s = this._eras || bn("en")._eras;
          for (n = 0, r = s.length; n < r; ++n) {
            switch (typeof s[n].since) {
              case "string":
                i = f(s[n].since).startOf("day");
                s[n].since = i.valueOf();
                break;
            }
            switch (typeof s[n].until) {
              case "undefined":
                s[n].until = +Infinity;
                break;
              case "string":
                i = f(s[n].until).startOf("day").valueOf();
                s[n].until = i.valueOf();
                break;
            }
          }
          return s;
        }
        function Yi(e, t, n) {
          var r,
            i,
            s = this.eras(),
            o,
            a,
            u;
          e = e.toUpperCase();
          for (r = 0, i = s.length; r < i; ++r) {
            o = s[r].name.toUpperCase();
            a = s[r].abbr.toUpperCase();
            u = s[r].narrow.toUpperCase();
            if (n)
              switch (t) {
                case "N":
                case "NN":
                case "NNN":
                  if (a === e) return s[r];
                  break;
                case "NNNN":
                  if (o === e) return s[r];
                  break;
                case "NNNNN":
                  if (u === e) return s[r];
                  break;
              }
            else if ([o, a, u].indexOf(e) >= 0) return s[r];
          }
        }
        function Ei(e, t) {
          var n = e.since <= e.until ? +1 : -1;
          if (t === undefined) return f(e.since).year();
          else return f(e.since).year() + (t - e.offset) * n;
        }
        function Ai() {
          var e,
            t,
            n,
            r = this.localeData().eras();
          for (e = 0, t = r.length; e < t; ++e) {
            n = this.clone().startOf("day").valueOf();
            if (r[e].since <= n && n <= r[e].until) return r[e].name;
            if (r[e].until <= n && n <= r[e].since) return r[e].name;
          }
          return "";
        }
        function ji() {
          var e,
            t,
            n,
            r = this.localeData().eras();
          for (e = 0, t = r.length; e < t; ++e) {
            n = this.clone().startOf("day").valueOf();
            if (r[e].since <= n && n <= r[e].until) return r[e].narrow;
            if (r[e].until <= n && n <= r[e].since) return r[e].narrow;
          }
          return "";
        }
        function Pi() {
          var e,
            t,
            n,
            r = this.localeData().eras();
          for (e = 0, t = r.length; e < t; ++e) {
            n = this.clone().startOf("day").valueOf();
            if (r[e].since <= n && n <= r[e].until) return r[e].abbr;
            if (r[e].until <= n && n <= r[e].since) return r[e].abbr;
          }
          return "";
        }
        function Li() {
          var e,
            t,
            n,
            r,
            i = this.localeData().eras();
          for (e = 0, t = i.length; e < t; ++e) {
            n = i[e].since <= i[e].until ? +1 : -1;
            r = this.clone().startOf("day").valueOf();
            if (
              (i[e].since <= r && r <= i[e].until) ||
              (i[e].until <= r && r <= i[e].since)
            )
              return (this.year() - f(i[e].since).year()) * n + i[e].offset;
          }
          return this.year();
        }
        function Hi(e) {
          if (!u(this, "_erasNameRegex")) Vi.call(this);
          return e ? this._erasNameRegex : this._erasRegex;
        }
        function Ri(e) {
          if (!u(this, "_erasAbbrRegex")) Vi.call(this);
          return e ? this._erasAbbrRegex : this._erasRegex;
        }
        function Wi(e) {
          if (!u(this, "_erasNarrowRegex")) Vi.call(this);
          return e ? this._erasNarrowRegex : this._erasRegex;
        }
        function qi(e, t) {
          return t.erasAbbrRegex(e);
        }
        function Fi(e, t) {
          return t.erasNameRegex(e);
        }
        function Ii(e, t) {
          return t.erasNarrowRegex(e);
        }
        function Ui(e, t) {
          return t._eraYearOrdinalRegex || Ue;
        }
        function Vi() {
          var e = [],
            t = [],
            n = [],
            r = [],
            i,
            s,
            o = this.eras();
          for (i = 0, s = o.length; i < s; ++i) {
            t.push(w(o[i].name));
            e.push(w(o[i].abbr));
            n.push(w(o[i].narrow));
            r.push(w(o[i].name));
            r.push(w(o[i].abbr));
            r.push(w(o[i].narrow));
          }
          this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i");
          this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i");
          this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i");
          this._erasNarrowRegex = new RegExp("^(" + n.join("|") + ")", "i");
        }
        function Gi(e, t) {
          r(0, [e, e.length], 0, t);
        }
        function $i(e) {
          return Qi.call(
            this,
            e,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy
          );
        }
        function Bi(e) {
          return Qi.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
        }
        function zi() {
          return N(this.year(), 1, 4);
        }
        function Zi() {
          return N(this.isoWeekYear(), 1, 4);
        }
        function Xi() {
          var e = this.localeData()._week;
          return N(this.year(), e.dow, e.doy);
        }
        function Ji() {
          var e = this.localeData()._week;
          return N(this.weekYear(), e.dow, e.doy);
        }
        function Qi(e, t, n, r, i) {
          var s;
          if (e == null) return Ct(this, r, i).year;
          else {
            s = N(e, r, i);
            if (t > s) t = s;
            return Ki.call(this, e, t, n, r, i);
          }
        }
        function Ki(e, t, n, r, i) {
          var s = Mt(e, t, n, r, i),
            o = Dt(s.year, 0, s.dayOfYear);
          this.year(o.getUTCFullYear());
          this.month(o.getUTCMonth());
          this.date(o.getUTCDate());
          return this;
        }
        function es(e) {
          return e == null
            ? Math.ceil((this.month() + 1) / 3)
            : this.month((e - 1) * 3 + (this.month() % 3));
        }
        r("N", 0, 0, "eraAbbr"),
          r("NN", 0, 0, "eraAbbr"),
          r("NNN", 0, 0, "eraAbbr"),
          r("NNNN", 0, 0, "eraName"),
          r("NNNNN", 0, 0, "eraNarrow"),
          r("y", ["y", 1], "yo", "eraYear"),
          r("y", ["yy", 2], 0, "eraYear"),
          r("y", ["yyy", 3], 0, "eraYear"),
          r("y", ["yyyy", 4], 0, "eraYear"),
          _("N", qi),
          _("NN", qi),
          _("NNN", qi),
          _("NNNN", Fi),
          _("NNNNN", Ii),
          x(["N", "NN", "NNN", "NNNN", "NNNNN"], function (e, t, n, r) {
            var i = n._locale.erasParse(e, r, n._strict);
            if (i) d(n).era = i;
            else d(n).invalidEra = e;
          }),
          _("y", Ue),
          _("yy", Ue),
          _("yyy", Ue),
          _("yyyy", Ue),
          _("yo", Ui),
          x(["y", "yy", "yyy", "yyyy"], b),
          x(["yo"], function (e, t, n, r) {
            var i;
            if (n._locale._eraYearOrdinalRegex)
              i = e.match(n._locale._eraYearOrdinalRegex);
            if (n._locale.eraYearOrdinalParse)
              t[b] = n._locale.eraYearOrdinalParse(e, i);
            else t[b] = parseInt(e, 10);
          }),
          r(0, ["gg", 2], 0, function () {
            return this.weekYear() % 100;
          }),
          r(0, ["GG", 2], 0, function () {
            return this.isoWeekYear() % 100;
          }),
          Gi("gggg", "weekYear"),
          Gi("ggggg", "weekYear"),
          Gi("GGGG", "isoWeekYear"),
          Gi("GGGGG", "isoWeekYear"),
          t("weekYear", "gg"),
          t("isoWeekYear", "GG"),
          n("weekYear", 1),
          n("isoWeekYear", 1),
          _("G", Ve),
          _("g", Ve),
          _("GG", v, i),
          _("gg", v, i),
          _("GGGG", Fe, Le),
          _("gggg", Fe, Le),
          _("GGGGG", Ie, He),
          _("ggggg", Ie, He),
          Ke(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, r) {
            t[r.substr(0, 2)] = g(e);
          }),
          Ke(["gg", "GG"], function (e, t, n, r) {
            t[r] = f.parseTwoDigitYear(e);
          }),
          r("Q", 0, "Qo", "quarter"),
          t("quarter", "Q"),
          n("quarter", 7),
          _("Q", je),
          x("Q", function (e, t) {
            t[k] = (g(e) - 1) * 3;
          }),
          r("D", ["DD", 2], "Do", "date"),
          t("date", "D"),
          n("date", 9),
          _("D", v),
          _("DD", v, i),
          _("Do", function (e, t) {
            return e
              ? t._dayOfMonthOrdinalParse || t._ordinalParse
              : t._dayOfMonthOrdinalParseLenient;
          }),
          x(["D", "DD"], S),
          x("Do", function (e, t) {
            t[S] = g(e.match(v)[0]);
          });
        var ts = Ne("Date", true);
        function ns(e) {
          var t =
            Math.round(
              (this.clone().startOf("day") - this.clone().startOf("year")) /
                864e5
            ) + 1;
          return e == null ? t : this.add(e - t, "d");
        }
        r("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
          t("dayOfYear", "DDD"),
          n("dayOfYear", 4),
          _("DDD", qe),
          _("DDDD", Pe),
          x(["DDD", "DDDD"], function (e, t, n) {
            n._dayOfYear = g(e);
          }),
          r("m", ["mm", 2], 0, "minute"),
          t("minute", "m"),
          n("minute", 14),
          _("m", v),
          _("mm", v, i),
          x(["m", "mm"], T);
        var rs = Ne("Minutes", false),
          is =
            (r("s", ["ss", 2], 0, "second"),
            t("second", "s"),
            n("second", 15),
            _("s", v),
            _("ss", v, i),
            x(["s", "ss"], M),
            Ne("Seconds", false)),
          ss,
          os;
        for (
          r("S", 0, 0, function () {
            return ~~(this.millisecond() / 100);
          }),
            r(0, ["SS", 2], 0, function () {
              return ~~(this.millisecond() / 10);
            }),
            r(0, ["SSS", 3], 0, "millisecond"),
            r(0, ["SSSS", 4], 0, function () {
              return this.millisecond() * 10;
            }),
            r(0, ["SSSSS", 5], 0, function () {
              return this.millisecond() * 100;
            }),
            r(0, ["SSSSSS", 6], 0, function () {
              return this.millisecond() * 1e3;
            }),
            r(0, ["SSSSSSS", 7], 0, function () {
              return this.millisecond() * 1e4;
            }),
            r(0, ["SSSSSSSS", 8], 0, function () {
              return this.millisecond() * 1e5;
            }),
            r(0, ["SSSSSSSSS", 9], 0, function () {
              return this.millisecond() * 1e6;
            }),
            t("millisecond", "ms"),
            n("millisecond", 16),
            _("S", qe, je),
            _("SS", qe, i),
            _("SSS", qe, Pe),
            ss = "SSSS";
          ss.length <= 9;
          ss += "S"
        )
          _(ss, Ue);
        function as(e, t) {
          t[tt] = g(("0." + e) * 1e3);
        }
        for (ss = "S"; ss.length <= 9; ss += "S") x(ss, as);
        function us() {
          return this._isUTC ? "UTC" : "";
        }
        function ls() {
          return this._isUTC ? "Coordinated Universal Time" : "";
        }
        (os = Ne("Milliseconds", false)),
          r("z", 0, 0, "zoneAbbr"),
          r("zz", 0, 0, "zoneName");
        var A = X.prototype;
        if (
          ((A.add = Lr),
          (A.calendar = Vr),
          (A.clone = Gr),
          (A.diff = Qr),
          (A.endOf = _i),
          (A.format = ri),
          (A.from = ii),
          (A.fromNow = si),
          (A.to = oi),
          (A.toNow = ai),
          (A.get = Ee),
          (A.invalidAt = Ci),
          (A.isAfter = $r),
          (A.isBefore = Br),
          (A.isBetween = zr),
          (A.isSame = Zr),
          (A.isSameOrAfter = Xr),
          (A.isSameOrBefore = Jr),
          (A.isValid = Ti),
          (A.lang = li),
          (A.locale = ui),
          (A.localeData = ci),
          (A.max = er),
          (A.min = Kn),
          (A.parsingFlags = Mi),
          (A.set = Ae),
          (A.startOf = vi),
          (A.subtract = Hr),
          (A.toArray = ki),
          (A.toObject = Si),
          (A.toDate = bi),
          (A.toISOString = ti),
          (A.inspect = ni),
          typeof Symbol !== "undefined" && Symbol.for != null)
        )
          A[Symbol.for("nodejs.util.inspect.custom")] = function () {
            return "Moment<" + this.format() + ">";
          };
        function cs(e) {
          return Y(e * 1e3);
        }
        function fs() {
          return Y.apply(null, arguments).parseZone();
        }
        function ds(e) {
          return e;
        }
        (A.toJSON = Di),
          (A.toString = ei),
          (A.unix = xi),
          (A.valueOf = wi),
          (A.creationData = Ni),
          (A.eraName = Ai),
          (A.eraNarrow = ji),
          (A.eraAbbr = Pi),
          (A.eraYear = Li),
          (A.year = bt),
          (A.isLeapYear = kt),
          (A.weekYear = $i),
          (A.isoWeekYear = Bi),
          (A.quarter = A.quarters = es),
          (A.month = yt),
          (A.daysInMonth = gt),
          (A.week = A.weeks = At),
          (A.isoWeek = A.isoWeeks = jt),
          (A.weeksInYear = Xi),
          (A.weeksInWeekYear = Ji),
          (A.isoWeeksInYear = zi),
          (A.isoWeeksInISOWeekYear = Zi),
          (A.date = ts),
          (A.day = A.days = Zt),
          (A.weekday = Xt),
          (A.isoWeekday = Jt),
          (A.dayOfYear = ns),
          (A.hour = A.hours = ln),
          (A.minute = A.minutes = rs),
          (A.second = A.seconds = is),
          (A.millisecond = A.milliseconds = os),
          (A.utcOffset = vr),
          (A.utc = wr),
          (A.local = xr),
          (A.parseZone = br),
          (A.hasAlignedHourOffset = kr),
          (A.isDST = Sr),
          (A.isLocal = Tr),
          (A.isUtcOffset = Mr),
          (A.isUtc = Cr),
          (A.isUTC = Cr),
          (A.zoneAbbr = us),
          (A.zoneName = ls),
          (A.dates = e("dates accessor is deprecated. Use date instead.", ts)),
          (A.months = e(
            "months accessor is deprecated. Use month instead",
            yt
          )),
          (A.years = e("years accessor is deprecated. Use year instead", bt)),
          (A.zone = e(
            "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
            _r
          )),
          (A.isDSTShifted = e(
            "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
            Dr
          ));
        var j = re.prototype;
        function hs(e, t, n, r) {
          var i = bn(),
            s = c().set(r, t);
          return i[n](s, e);
        }
        function ps(e, t, n) {
          if (l(e)) {
            t = e;
            e = undefined;
          }
          e = e || "";
          if (t != null) return hs(e, t, n, "month");
          var r,
            i = [];
          for (r = 0; r < 12; r++) i[r] = hs(e, r, n, "month");
          return i;
        }
        function ms(e, t, n, r) {
          if (typeof e === "boolean") {
            if (l(t)) {
              n = t;
              t = undefined;
            }
            t = t || "";
          } else {
            t = e;
            n = t;
            e = false;
            if (l(t)) {
              n = t;
              t = undefined;
            }
            t = t || "";
          }
          var i = bn(),
            s = e ? i._week.dow : 0,
            o,
            a = [];
          if (n != null) return hs(t, (n + s) % 7, r, "day");
          for (o = 0; o < 7; o++) a[o] = hs(t, (o + s) % 7, r, "day");
          return a;
        }
        function ys(e, t) {
          return ps(e, t, "months");
        }
        function gs(e, t) {
          return ps(e, t, "monthsShort");
        }
        function vs(e, t, n) {
          return ms(e, t, n, "weekdays");
        }
        function _s(e, t, n) {
          return ms(e, t, n, "weekdaysShort");
        }
        function ws(e, t, n) {
          return ms(e, t, n, "weekdaysMin");
        }
        (j.calendar = se),
          (j.longDateFormat = me),
          (j.invalidDate = ge),
          (j.ordinal = we),
          (j.preparse = ds),
          (j.postformat = ds),
          (j.relativeTime = be),
          (j.pastFuture = ke),
          (j.set = te),
          (j.eras = Oi),
          (j.erasParse = Yi),
          (j.erasConvertYear = Ei),
          (j.erasAbbrRegex = Ri),
          (j.erasNameRegex = Hi),
          (j.erasNarrowRegex = Wi),
          (j.months = ft),
          (j.monthsShort = dt),
          (j.monthsParse = pt),
          (j.monthsRegex = _t),
          (j.monthsShortRegex = vt),
          (j.week = Nt),
          (j.firstDayOfYear = Et),
          (j.firstDayOfWeek = Yt),
          (j.weekdays = Vt),
          (j.weekdaysMin = $t),
          (j.weekdaysShort = Gt),
          (j.weekdaysParse = zt),
          (j.weekdaysRegex = Qt),
          (j.weekdaysShortRegex = Kt),
          (j.weekdaysMinRegex = en),
          (j.isPM = an),
          (j.meridiem = cn),
          _n("en", {
            eras: [
              {
                since: "0001-01-01",
                until: +Infinity,
                offset: 1,
                name: "Anno Domini",
                narrow: "AD",
                abbr: "AD",
              },
              {
                since: "0000-12-31",
                until: -Infinity,
                offset: 1,
                name: "Before Christ",
                narrow: "BC",
                abbr: "BC",
              },
            ],
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function (e) {
              var t = e % 10,
                n =
                  g((e % 100) / 10) === 1
                    ? "th"
                    : t === 1
                    ? "st"
                    : t === 2
                    ? "nd"
                    : t === 3
                    ? "rd"
                    : "th";
              return e + n;
            },
          }),
          (f.lang = e(
            "moment.lang is deprecated. Use moment.locale instead.",
            _n
          )),
          (f.langData = e(
            "moment.langData is deprecated. Use moment.localeData instead.",
            bn
          ));
        var xs = Math.abs;
        function bs() {
          var e = this._data;
          this._milliseconds = xs(this._milliseconds);
          this._days = xs(this._days);
          this._months = xs(this._months);
          e.milliseconds = xs(e.milliseconds);
          e.seconds = xs(e.seconds);
          e.minutes = xs(e.minutes);
          e.hours = xs(e.hours);
          e.months = xs(e.months);
          e.years = xs(e.years);
          return this;
        }
        function ks(e, t, n, r) {
          var i = E(t, n);
          e._milliseconds += r * i._milliseconds;
          e._days += r * i._days;
          e._months += r * i._months;
          return e._bubble();
        }
        function Ss(e, t) {
          return ks(this, e, t, 1);
        }
        function Ds(e, t) {
          return ks(this, e, t, -1);
        }
        function Ts(e) {
          if (e < 0) return Math.floor(e);
          else return Math.ceil(e);
        }
        function Ms() {
          var e = this._milliseconds,
            t = this._days,
            n = this._months,
            r = this._data,
            i,
            s,
            o,
            a,
            u;
          if (!((e >= 0 && t >= 0 && n >= 0) || (e <= 0 && t <= 0 && n <= 0))) {
            e += Ts(Ns(n) + t) * 864e5;
            t = 0;
            n = 0;
          }
          r.milliseconds = e % 1e3;
          i = y(e / 1e3);
          r.seconds = i % 60;
          s = y(i / 60);
          r.minutes = s % 60;
          o = y(s / 60);
          r.hours = o % 24;
          t += y(o / 24);
          u = y(Cs(t));
          n += u;
          t -= Ts(Ns(u));
          a = y(n / 12);
          n %= 12;
          r.days = t;
          r.months = n;
          r.years = a;
          return this;
        }
        function Cs(e) {
          return (e * 4800) / 146097;
        }
        function Ns(e) {
          return (e * 146097) / 4800;
        }
        function Os(e) {
          if (!this.isValid()) return NaN;
          var t,
            n,
            r = this._milliseconds;
          e = m(e);
          if (e === "month" || e === "quarter" || e === "year") {
            t = this._days + r / 864e5;
            n = this._months + Cs(t);
            switch (e) {
              case "month":
                return n;
              case "quarter":
                return n / 3;
              case "year":
                return n / 12;
            }
          } else {
            t = this._days + Math.round(Ns(this._months));
            switch (e) {
              case "week":
                return t / 7 + r / 6048e5;
              case "day":
                return t + r / 864e5;
              case "hour":
                return t * 24 + r / 36e5;
              case "minute":
                return t * 1440 + r / 6e4;
              case "second":
                return t * 86400 + r / 1e3;
              case "millisecond":
                return Math.floor(t * 864e5) + r;
              default:
                throw new Error("Unknown unit " + e);
            }
          }
        }
        function Ys() {
          if (!this.isValid()) return NaN;
          return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            g(this._months / 12) * 31536e6
          );
        }
        function Es(e) {
          return function () {
            return this.as(e);
          };
        }
        var As = Es("ms"),
          js = Es("s"),
          Ps = Es("m"),
          Ls = Es("h"),
          Hs = Es("d"),
          Rs = Es("w"),
          Ws = Es("M"),
          qs = Es("Q"),
          Fs = Es("y");
        function Is() {
          return E(this);
        }
        function Us(e) {
          e = m(e);
          return this.isValid() ? this[e + "s"]() : NaN;
        }
        function Vs(e) {
          return function () {
            return this.isValid() ? this._data[e] : NaN;
          };
        }
        var Gs = Vs("milliseconds"),
          $s = Vs("seconds"),
          Bs = Vs("minutes"),
          zs = Vs("hours"),
          Zs = Vs("days"),
          Xs = Vs("months"),
          Js = Vs("years");
        function Qs() {
          return y(this.days() / 7);
        }
        var Ks = Math.round,
          eo = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };
        function to(e, t, n, r, i) {
          return i.relativeTime(t || 1, !!n, e, r);
        }
        function no(e, t, n, r) {
          var i = E(e).abs(),
            s = Ks(i.as("s")),
            o = Ks(i.as("m")),
            a = Ks(i.as("h")),
            u = Ks(i.as("d")),
            l = Ks(i.as("M")),
            c = Ks(i.as("w")),
            f = Ks(i.as("y")),
            d =
              (s <= n.ss && ["s", s]) ||
              (s < n.s && ["ss", s]) ||
              (o <= 1 && ["m"]) ||
              (o < n.m && ["mm", o]) ||
              (a <= 1 && ["h"]) ||
              (a < n.h && ["hh", a]) ||
              (u <= 1 && ["d"]) ||
              (u < n.d && ["dd", u]);
          if (n.w != null) d = d || (c <= 1 && ["w"]) || (c < n.w && ["ww", c]);
          d = d ||
            (l <= 1 && ["M"]) ||
            (l < n.M && ["MM", l]) ||
            (f <= 1 && ["y"]) || ["yy", f];
          d[2] = t;
          d[3] = +e > 0;
          d[4] = r;
          return to.apply(null, d);
        }
        function ro(e) {
          if (e === undefined) return Ks;
          if (typeof e === "function") {
            Ks = e;
            return true;
          }
          return false;
        }
        function io(e, t) {
          if (eo[e] === undefined) return false;
          if (t === undefined) return eo[e];
          eo[e] = t;
          if (e === "s") eo.ss = t - 1;
          return true;
        }
        function so(e, t) {
          if (!this.isValid()) return this.localeData().invalidDate();
          var n = false,
            r = eo,
            i,
            s;
          if (typeof e === "object") {
            t = e;
            e = false;
          }
          if (typeof e === "boolean") n = e;
          if (typeof t === "object") {
            r = Object.assign({}, eo, t);
            if (t.s != null && t.ss == null) r.ss = t.s - 1;
          }
          i = this.localeData();
          s = no(this, !n, r, i);
          if (n) s = i.pastFuture(+this, s);
          return i.postformat(s);
        }
        var oo = Math.abs;
        function ao(e) {
          return (e > 0) - (e < 0) || +e;
        }
        function uo() {
          if (!this.isValid()) return this.localeData().invalidDate();
          var e = oo(this._milliseconds) / 1e3,
            t = oo(this._days),
            n = oo(this._months),
            r,
            i,
            s,
            o,
            a = this.asSeconds(),
            u,
            l,
            c,
            f;
          if (!a) return "P0D";
          r = y(e / 60);
          i = y(r / 60);
          e %= 60;
          r %= 60;
          s = y(n / 12);
          n %= 12;
          o = e ? e.toFixed(3).replace(/\.?0+$/, "") : "";
          u = a < 0 ? "-" : "";
          l = ao(this._months) !== ao(a) ? "-" : "";
          c = ao(this._days) !== ao(a) ? "-" : "";
          f = ao(this._milliseconds) !== ao(a) ? "-" : "";
          return (
            u +
            "P" +
            (s ? l + s + "Y" : "") +
            (n ? l + n + "M" : "") +
            (t ? c + t + "D" : "") +
            (i || r || e ? "T" : "") +
            (i ? f + i + "H" : "") +
            (r ? f + r + "M" : "") +
            (e ? f + o + "S" : "")
          );
        }
        var P = lr.prototype;
        return (
          (P.isValid = ar),
          (P.abs = bs),
          (P.add = Ss),
          (P.subtract = Ds),
          (P.as = Os),
          (P.asMilliseconds = As),
          (P.asSeconds = js),
          (P.asMinutes = Ps),
          (P.asHours = Ls),
          (P.asDays = Hs),
          (P.asWeeks = Rs),
          (P.asMonths = Ws),
          (P.asQuarters = qs),
          (P.asYears = Fs),
          (P.valueOf = Ys),
          (P._bubble = Ms),
          (P.clone = Is),
          (P.get = Us),
          (P.milliseconds = Gs),
          (P.seconds = $s),
          (P.minutes = Bs),
          (P.hours = zs),
          (P.days = Zs),
          (P.weeks = Qs),
          (P.months = Xs),
          (P.years = Js),
          (P.humanize = so),
          (P.toISOString = uo),
          (P.toString = uo),
          (P.toJSON = uo),
          (P.locale = ui),
          (P.localeData = ci),
          (P.toIsoString = e(
            "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
            uo
          )),
          (P.lang = li),
          r("X", 0, 0, "unix"),
          r("x", 0, 0, "valueOf"),
          _("x", Ve),
          _("X", Be),
          x("X", function (e, t, n) {
            n._d = new Date(parseFloat(e) * 1e3);
          }),
          x("x", function (e, t, n) {
            n._d = new Date(g(e));
          }),
          (f.version = "2.29.3"),
          R(Y),
          (f.fn = A),
          (f.min = nr),
          (f.max = rr),
          (f.now = ir),
          (f.utc = c),
          (f.unix = cs),
          (f.months = ys),
          (f.isDate = F),
          (f.locale = _n),
          (f.invalid = $),
          (f.duration = E),
          (f.isMoment = h),
          (f.weekdays = vs),
          (f.parseZone = fs),
          (f.localeData = bn),
          (f.isDuration = cr),
          (f.monthsShort = gs),
          (f.weekdaysMin = ws),
          (f.defineLocale = wn),
          (f.updateLocale = xn),
          (f.locales = kn),
          (f.weekdaysShort = _s),
          (f.normalizeUnits = m),
          (f.relativeTimeRounding = ro),
          (f.relativeTimeThreshold = io),
          (f.calendarFormat = Ur),
          (f.prototype = A),
          (f.HTML5_FMT = {
            DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
            DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
            DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
            DATE: "YYYY-MM-DD",
            TIME: "HH:mm",
            TIME_SECONDS: "HH:mm:ss",
            TIME_MS: "HH:mm:ss.SSS",
            WEEK: "GGGG-[W]WW",
            MONTH: "YYYY-MM",
          }),
          f
        );
      })()),
      e.exports),
    o = function (e, t, n) {
      var r, i, s, o, a;
      e.is("[data-translated]") ||
        ((o = (r = e.text().split("-"))[0]),
        (i = r[1]),
        (s = "DD. MMM HH:mm"),
        (a = ""),
        n &&
          (o = (
            void 0 === o.split("ago.")[1] ? o.split("siden.") : o.split("ago.")
          )[1]),
        /\d{4}/.test(o) && (s = n ? "DD. MMM YYYY" : "DD. MMM YYYY HH:mm"),
        (n = l(u(o), "MMM DD, HH:mm").format(s)),
        1 === r.length
          ? (a += n)
          : 2 === i.split(",").length
          ? (a += n + " - " + l(u(i), "MMM DD, HH:mm").format(s))
          : (a = n + " - " + u(i)),
        e.text(a),
        e.attr("data-translated", "true"));
    };
  s(function () {
    var e;
    (e = s("body")).on("keydown", function (e) {
      9 === (e.keyCode || e.which) && s(this).addClass("keyboard-navigation");
    }),
      e.on("click", function (e) {
        e = s(e.target);
        e.is("a") ||
          e.is("button") ||
          s(this).removeClass("keyboard-navigation");
      }),
      s("span.status:contains('All Systems Operational')").text(
        "Ingen kjente driftsproblemer"
      ),
      setTimeout(function () {
        var e;
        s(".components-container")
          .toggleClass("one-column")
          .toggleClass("two-columns"),
          s(".component-container.is-group").each(function (e, t) {
            var n = s(t).find("> div:first-child").clone(),
              r =
                (s(t).prepend("<button></button>"),
                s(t).find("button").append(n),
                s(t).find("> .component-inner-container").remove(),
                s(t).find(".group-parent-indicator"));
            r.hasClass("fa-minus-square-o") &&
              s(t).find("button").addClass("open"),
              s(t)
                .find("> button")
                .click(function (e) {
                  e.stopImmediatePropagation(),
                    e.preventDefault(),
                    e.stopImmediatePropagation();
                  e = s(this).parent().find(".child-components-container");
                  s(this).hasClass("open")
                    ? (s(this).removeClass("open"),
                      e.css("display", "none"),
                      r.addClass("fa-plus-square-o"),
                      r.removeClass("fa-minus-square-o"))
                    : (s(this).addClass("open"),
                      e.css("display", "block"),
                      r.addClass("fa-minus-square-o"),
                      r.removeClass("fa-plus-square-o"));
                });
          }),
          s(".scheduled-maintenances-container .scheduled-maintenance").each(
            function (e, t) {
              var n = s(t).find(".incident-title a").text(),
                r = s(t).find("a").attr("href");
              s(t).find("a").remove(),
                s(t).replaceWith(function () {
                  return s(
                    '<a class="scheduled-maintenance" href="' +
                      r +
                      '"><span class="scheduled-maintenance__title"> ' +
                      n +
                      " </span>" +
                      s(t).html() +
                      "</a>"
                  );
                });
            }
          ),
          s(".incidents-list").append(
            '<div class="incidents-list__history-container"><a class="incidents-list__history" href="' +
              n +
              '">Tidligere driftsmeldinger</a></div>'
          ),
          (e = s("#show-updates-dropdown")).length && e.text("Abonner");
      }, 50),
      setInterval(function () {
        var e, t, n;
        i(),
          s(".incident-history .incident-list .incident-container").each(
            function (e, t) {
              var n, r, i;
              s(t).is("[data-processed]") ||
                ((n = s(t).find("a").text()),
                (r = s(t).find("a").attr("href")),
                (i = s(t)
                  .find("a")
                  .attr("class")
                  .replace("incident-title font-large", "")),
                s(t).find("a").remove(),
                s(t).after(
                  '<a data-processed="true" class="incident-container ' +
                    i +
                    '" href="' +
                    r +
                    '"><span class="incident-container__title"> ' +
                    n +
                    " </span>" +
                    s(t).html() +
                    "</a>"
                ),
                s(t).addClass("incident-container__div"),
                s(t).attr("data-processed", "true"));
            }
          ),
          (e = s(".custom-header-container")),
          (t = s(".layout-content.status-incident")),
          (n = t.find(".page-title").clone()),
          s(n).is("[data-processed]") ||
            (s(n).attr("data-processed", "true"),
            e.append(n),
            s(t).find(".container .page-title").remove()),
          (function () {
            var e = s(".history-header .component-selector");
            if (e.length) {
              if (e.is("[data-processed]")) return;
              var t = e.find(".show-filter"),
                n = t.clone(),
                r = (e.prepend("<button></button>"), e.find("button"));
              r.append(n),
                r.click(function (e) {
                  e.stopImmediatePropagation(),
                    e.stopPropagation(),
                    e.preventDefault(),
                    t.click();
                });
            }
            s("body").click(function (e) {
              var e = s(e.target),
                t = s(".component-selector > span");
              !e.hasClass("show-filter") &&
                1 !== e.closest(".grouped-items").length &&
                t.hasClass("open") &&
                s(t).click();
            }),
              e.attr("data-processed", "true");
          })(),
          s(".incident-history .incident-list a.incident-container").each(
            function (e, t) {
              !s(t).prev("div").length &&
                s(t).is("[data-processed]") &&
                (s(".incident-history .expand-incidents button").each(function (
                  e,
                  t
                ) {
                  r(s(this).parent().find("span")),
                    s(this).html(s(this).parent().find("span").html());
                }),
                s(t).remove());
            }
          );
      }, 50);
  });
})();
