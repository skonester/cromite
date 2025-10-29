(function() {
    function D(h, z, j) {
        function F(Z, A) {
            if (!z[Z]) {
                if (!h[Z]) {
                    var q = "function" == typeof require && require;
                    if (!A && q) return q(Z, !0);
                    if (l) return l(Z, !0);
                    var Q = new Error("Cannot find module '" + Z + "'");
                    throw Q.code = "MODULE_NOT_FOUND", Q;
                }
                var I = z[Z] = {
                    exports: {}
                };
                h[Z][0].call(I.exports, (function(D) {
                    var z = h[Z][1][D];
                    return F(z || D);
                }), I, I.exports, D, h, z, j);
            }
            return z[Z].exports;
        }
        for (var l = "function" == typeof require && require, Z = 0; Z < j.length; Z++) F(j[Z]);
        return F;
    }
    return D;
})()({
    1: [ function(D, h, z) {
        "use strict";
        (function(D, z) {
            "use strict";
            if (typeof h === "object" && typeof h.exports === "object") h.exports = D.document ? z(D, true) : function(D) {
                if (!D.document) throw new Error("jQuery requires a window with a document");
                return z(D);
            }; else z(D);
        })(typeof window !== "undefined" ? window : void 0, (function(D, h) {
            "use strict";
            var z = [], j = Object.getPrototypeOf, F = z.slice, l = z.flat ? function(D) {
                return z.flat.call(D);
            } : function(D) {
                return z.concat.apply([], D);
            }, Z = z.push, A = z.indexOf, q = {}, Q = q.toString, I = q.hasOwnProperty, E = I.toString, X = E.call(Object), f = {}, s = function D(h) {
                return typeof h === "function" && typeof h.nodeType !== "number" && typeof h.item !== "function";
            }, L = function D(h) {
                return h != null && h === h.window;
            }, P = D.document, x = {
                type: true,
                src: true,
                nonce: true,
                noModule: true
            };
            function n(D, h, z) {
                z = z || P;
                var j, F, l = z.createElement("script");
                if (l.text = D, h) for (j in x) if (F = h[j] || h.getAttribute && h.getAttribute(j),
                F) l.setAttribute(j, F);
                z.head.appendChild(l).parentNode.removeChild(l);
            }
            function w(D) {
                if (D == null) return D + "";
                return typeof D === "object" || typeof D === "function" ? q[Q.call(D)] || "object" : typeof D;
            }
            var J = "3.6.0", a = function(D, h) {
                return new a.fn.init(D, h);
            };
            if (a.fn = a.prototype = {
                jquery: J,
                constructor: a,
                length: 0,
                toArray: function() {
                    return F.call(this);
                },
                get: function(D) {
                    if (D == null) return F.call(this);
                    return D < 0 ? this[D + this.length] : this[D];
                },
                pushStack: function(D) {
                    var h = a.merge(this.constructor(), D);
                    return h.prevObject = this, h;
                },
                each: function(D) {
                    return a.each(this, D);
                },
                map: function(D) {
                    return this.pushStack(a.map(this, (function(h, z) {
                        return D.call(h, z, h);
                    })));
                },
                slice: function() {
                    return this.pushStack(F.apply(this, arguments));
                },
                first: function() {
                    return this.eq(0);
                },
                last: function() {
                    return this.eq(-1);
                },
                even: function() {
                    return this.pushStack(a.grep(this, (function(D, h) {
                        return (h + 1) % 2;
                    })));
                },
                odd: function() {
                    return this.pushStack(a.grep(this, (function(D, h) {
                        return h % 2;
                    })));
                },
                eq: function(D) {
                    var h = this.length, z = +D + (D < 0 ? h : 0);
                    return this.pushStack(z >= 0 && z < h ? [ this[z] ] : []);
                },
                end: function() {
                    return this.prevObject || this.constructor();
                },
                push: Z,
                sort: z.sort,
                splice: z.splice
            }, a.extend = a.fn.extend = function() {
                var D, h, z, j, F, l, Z = arguments[0] || {}, A = 1, q = arguments.length, Q = false;
                if (typeof Z === "boolean") Q = Z, Z = arguments[A] || {}, A++;
                if (typeof Z !== "object" && !s(Z)) Z = {};
                if (A === q) Z = this, A--;
                for (;A < q; A++) if ((D = arguments[A]) != null) for (h in D) {
                    if (j = D[h], h === "__proto__" || Z === j) continue;
                    if (Q && j && (a.isPlainObject(j) || (F = Array.isArray(j)))) {
                        if (z = Z[h], F && !Array.isArray(z)) l = []; else if (!F && !a.isPlainObject(z)) l = {}; else l = z;
                        F = false, Z[h] = a.extend(Q, l, j);
                    } else if (j !== void 0) Z[h] = j;
                }
                return Z;
            }, a.extend({
                expando: "jQuery" + (J + Math.random()).replace(/\D/g, ""),
                isReady: true,
                error: function(D) {
                    throw new Error(D);
                },
                noop: function() {},
                isPlainObject: function(D) {
                    var h, z;
                    if (!D || Q.call(D) !== "[object Object]") return false;
                    if (h = j(D), !h) return true;
                    return z = I.call(h, "constructor") && h.constructor, typeof z === "function" && E.call(z) === X;
                },
                isEmptyObject: function(D) {
                    var h;
                    for (h in D) return false;
                    return true;
                },
                globalEval: function(D, h, z) {
                    n(D, {
                        nonce: h && h.nonce
                    }, z);
                },
                each: function(D, h) {
                    var z, j = 0;
                    if (d(D)) {
                        for (z = D.length; j < z; j++) if (h.call(D[j], j, D[j]) === false) break;
                    } else for (j in D) if (h.call(D[j], j, D[j]) === false) break;
                    return D;
                },
                makeArray: function(D, h) {
                    var z = h || [];
                    if (D != null) if (d(Object(D))) a.merge(z, typeof D === "string" ? [ D ] : D); else Z.call(z, D);
                    return z;
                },
                inArray: function(D, h, z) {
                    return h == null ? -1 : A.call(h, D, z);
                },
                merge: function(D, h) {
                    for (var z = +h.length, j = 0, F = D.length; j < z; j++) D[F++] = h[j];
                    return D.length = F, D;
                },
                grep: function(D, h, z) {
                    for (var j, F = [], l = 0, Z = D.length, A = !z; l < Z; l++) if (j = !h(D[l], l),
                    j !== A) F.push(D[l]);
                    return F;
                },
                map: function(D, h, z) {
                    var j, F, Z = 0, A = [];
                    if (d(D)) {
                        for (j = D.length; Z < j; Z++) if (F = h(D[Z], Z, z), F != null) A.push(F);
                    } else for (Z in D) if (F = h(D[Z], Z, z), F != null) A.push(F);
                    return l(A);
                },
                guid: 1,
                support: f
            }), typeof Symbol === "function") a.fn[Symbol.iterator] = z[Symbol.iterator];
            function d(D) {
                var h = !!D && "length" in D && D.length, z = w(D);
                if (s(D) || L(D)) return false;
                return z === "array" || h === 0 || typeof h === "number" && h > 0 && h - 1 in D;
            }
            a.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(D, h) {
                q["[object " + h + "]"] = h.toLowerCase();
            }));
            var H = function(D) {
                var h, z, j, F, l, Z, A, q, Q, I, E, X, f, s, L, P, x, n, w, J = "sizzle" + 1 * new Date, a = D.document, d = 0, H = 0, K = Cv(), c = Cv(), M = Cv(), S = Cv(), T = function(D, h) {
                    if (D === h) E = true;
                    return 0;
                }, e = {}.hasOwnProperty, v = [], m = v.pop, G = v.push, r = v.push, t = v.slice, C = function(D, h) {
                    for (var z = 0, j = D.length; z < j; z++) if (D[z] === h) return z;
                    return -1;
                }, y = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" + "ismap|loop|multiple|open|readonly|required|scoped", k = "[\\x20\\t\\r\\n\\f]", W = "(?:\\\\[\\da-fA-F]{1,6}" + k + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", U = "\\[" + k + "*(" + W + ")(?:" + k + "*([*^$|!~]?=)" + k + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + W + "))|)" + k + "*\\]", p = ":(" + W + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + U + ")*)|" + ".*" + ")\\)|)", u = new RegExp(k + "+", "g"), O = new RegExp("^" + k + "+|((?:^|[^\\\\])(?:\\\\.)*)" + k + "+$", "g"), o = new RegExp("^" + k + "*," + k + "*"), b = new RegExp("^" + k + "*([>+~]|" + k + ")" + k + "*"), B = new RegExp(k + "|>"), Y = new RegExp(p), R = new RegExp("^" + W + "$"), V = {
                    ID: new RegExp("^#(" + W + ")"),
                    CLASS: new RegExp("^\\.(" + W + ")"),
                    TAG: new RegExp("^(" + W + "|[*])"),
                    ATTR: new RegExp("^" + U),
                    PSEUDO: new RegExp("^" + p),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + k + "*(even|odd|(([+-]|)(\\d*)n|)" + k + "*(?:([+-]|)" + k + "*(\\d+)|))" + k + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + y + ")$", "i"),
                    needsContext: new RegExp("^" + k + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + k + "*((?:-\\d)?\\d*)" + k + "*\\)|)(?=[^-]|$)", "i")
                }, i = /HTML$/i, g = /^(?:input|select|textarea|button)$/i, N = /^h\d$/i, kN = /^[^{]+\{\s*\[native \w/, Ar = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, qk = /[+~]/, xk = new RegExp("\\\\[\\da-fA-F]{1,6}" + k + "?|\\\\([^\\r\\n\\f])", "g"), LD = function(D, h) {
                    var z = "0x" + D.slice(1) - 65536;
                    return h ? h : z < 0 ? String.fromCharCode(z + 65536) : String.fromCharCode(z >> 10 | 55296, z & 1023 | 56320);
                }, hO = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, VB = function(D, h) {
                    if (h) {
                        if (D === "\0") return "�";
                        return D.slice(0, -1) + "\\" + D.charCodeAt(D.length - 1).toString(16) + " ";
                    }
                    return "\\" + D;
                }, zi = function() {
                    X();
                }, dj = Ki((function(D) {
                    return D.disabled === true && D.nodeName.toLowerCase() === "fieldset";
                }), {
                    dir: "parentNode",
                    next: "legend"
                });
                try {
                    r.apply(v = t.call(a.childNodes), a.childNodes), v[a.childNodes.length].nodeType;
                } catch (D) {
                    r = {
                        apply: v.length ? function(D, h) {
                            G.apply(D, t.call(h));
                        } : function(D, h) {
                            var z = D.length, j = 0;
                            while (D[z++] = h[j++]) ;
                            D.length = z - 1;
                        }
                    };
                }
                function Su(D, h, j, F) {
                    var l, A, Q, I, E, s, x, n = h && h.ownerDocument, a = h ? h.nodeType : 9;
                    if (j = j || [], typeof D !== "string" || !D || a !== 1 && a !== 9 && a !== 11) return j;
                    if (!F) if (X(h), h = h || f, L) {
                        if (a !== 11 && (E = Ar.exec(D))) if (l = E[1]) {
                            if (a === 9) if (Q = h.getElementById(l)) {
                                if (Q.id === l) return j.push(Q), j;
                            } else return j; else if (n && (Q = n.getElementById(l)) && w(h, Q) && Q.id === l) return j.push(Q),
                            j;
                        } else if (E[2]) return r.apply(j, h.getElementsByTagName(D)), j; else if ((l = E[3]) && z.getElementsByClassName && h.getElementsByClassName) return r.apply(j, h.getElementsByClassName(l)),
                        j;
                        if (z.qsa && !S[D + " "] && (!P || !P.test(D)) && (a !== 1 || h.nodeName.toLowerCase() !== "object")) {
                            if (x = D, n = h, a === 1 && (B.test(D) || b.test(D))) {
                                if (n = qk.test(D) && An(h.parentNode) || h, n !== h || !z.scope) if (I = h.getAttribute("id")) I = I.replace(hO, VB); else h.setAttribute("id", I = J);
                                s = Z(D), A = s.length;
                                while (A--) s[A] = (I ? "#" + I : ":scope") + " " + LL(s[A]);
                                x = s.join(",");
                            }
                            try {
                                return r.apply(j, n.querySelectorAll(x)), j;
                            } catch (h) {
                                S(D, true);
                            } finally {
                                if (I === J) h.removeAttribute("id");
                            }
                        }
                    }
                    return q(D.replace(O, "$1"), h, j, F);
                }
                function Cv() {
                    var D = [];
                    function h(z, F) {
                        if (D.push(z + " ") > j.cacheLength) delete h[D.shift()];
                        return h[z + " "] = F;
                    }
                    return h;
                }
                function Oq(D) {
                    return D[J] = true, D;
                }
                function rB(D) {
                    var h = f.createElement("fieldset");
                    try {
                        return !!D(h);
                    } catch (D) {
                        return false;
                    } finally {
                        if (h.parentNode) h.parentNode.removeChild(h);
                        h = null;
                    }
                }
                function KU(D, h) {
                    var z = D.split("|"), F = z.length;
                    while (F--) j.attrHandle[z[F]] = h;
                }
                function BW(D, h) {
                    var z = h && D, j = z && D.nodeType === 1 && h.nodeType === 1 && D.sourceIndex - h.sourceIndex;
                    if (j) return j;
                    if (z) while (z = z.nextSibling) if (z === h) return -1;
                    return D ? 1 : -1;
                }
                function yi(D) {
                    return function(h) {
                        var z = h.nodeName.toLowerCase();
                        return z === "input" && h.type === D;
                    };
                }
                function mX(D) {
                    return function(h) {
                        var z = h.nodeName.toLowerCase();
                        return (z === "input" || z === "button") && h.type === D;
                    };
                }
                function ol(D) {
                    return function(h) {
                        if ("form" in h) {
                            if (h.parentNode && h.disabled === false) {
                                if ("label" in h) if ("label" in h.parentNode) return h.parentNode.disabled === D; else return h.disabled === D;
                                return h.isDisabled === D || h.isDisabled !== !D && dj(h) === D;
                            }
                            return h.disabled === D;
                        } else if ("label" in h) return h.disabled === D;
                        return false;
                    };
                }
                function tR(D) {
                    return Oq((function(h) {
                        return h = +h, Oq((function(z, j) {
                            var F, l = D([], z.length, h), Z = l.length;
                            while (Z--) if (z[F = l[Z]]) z[F] = !(j[F] = z[F]);
                        }));
                    }));
                }
                function An(D) {
                    return D && typeof D.getElementsByTagName !== "undefined" && D;
                }
                for (h in z = Su.support = {}, l = Su.isXML = function(D) {
                    var h = D && D.namespaceURI, z = D && (D.ownerDocument || D).documentElement;
                    return !i.test(h || z && z.nodeName || "HTML");
                }, X = Su.setDocument = function(D) {
                    var h, F, Z = D ? D.ownerDocument || D : a;
                    if (Z == f || Z.nodeType !== 9 || !Z.documentElement) return f;
                    if (f = Z, s = f.documentElement, L = !l(f), a != f && (F = f.defaultView) && F.top !== F) if (F.addEventListener) F.addEventListener("unload", zi, false); else if (F.attachEvent) F.attachEvent("onunload", zi);
                    if (z.scope = rB((function(D) {
                        return s.appendChild(D).appendChild(f.createElement("div")), typeof D.querySelectorAll !== "undefined" && !D.querySelectorAll(":scope fieldset div").length;
                    })), z.attributes = rB((function(D) {
                        return D.className = "i", !D.getAttribute("className");
                    })), z.getElementsByTagName = rB((function(D) {
                        return D.appendChild(f.createComment("")), !D.getElementsByTagName("*").length;
                    })), z.getElementsByClassName = kN.test(f.getElementsByClassName), z.getById = rB((function(D) {
                        return s.appendChild(D).id = J, !f.getElementsByName || !f.getElementsByName(J).length;
                    })), z.getById) j.filter["ID"] = function(D) {
                        var h = D.replace(xk, LD);
                        return function(D) {
                            return D.getAttribute("id") === h;
                        };
                    }, j.find["ID"] = function(D, h) {
                        if (typeof h.getElementById !== "undefined" && L) {
                            var z = h.getElementById(D);
                            return z ? [ z ] : [];
                        }
                    }; else j.filter["ID"] = function(D) {
                        var h = D.replace(xk, LD);
                        return function(D) {
                            var z = typeof D.getAttributeNode !== "undefined" && D.getAttributeNode("id");
                            return z && z.value === h;
                        };
                    }, j.find["ID"] = function(D, h) {
                        if (typeof h.getElementById !== "undefined" && L) {
                            var z, j, F, l = h.getElementById(D);
                            if (l) {
                                if (z = l.getAttributeNode("id"), z && z.value === D) return [ l ];
                                F = h.getElementsByName(D), j = 0;
                                while (l = F[j++]) if (z = l.getAttributeNode("id"), z && z.value === D) return [ l ];
                            }
                            return [];
                        }
                    };
                    if (j.find["TAG"] = z.getElementsByTagName ? function(D, h) {
                        if (typeof h.getElementsByTagName !== "undefined") return h.getElementsByTagName(D); else if (z.qsa) return h.querySelectorAll(D);
                    } : function(D, h) {
                        var z, j = [], F = 0, l = h.getElementsByTagName(D);
                        if (D === "*") {
                            while (z = l[F++]) if (z.nodeType === 1) j.push(z);
                            return j;
                        }
                        return l;
                    }, j.find["CLASS"] = z.getElementsByClassName && function(D, h) {
                        if (typeof h.getElementsByClassName !== "undefined" && L) return h.getElementsByClassName(D);
                    }, x = [], P = [], z.qsa = kN.test(f.querySelectorAll)) rB((function(D) {
                        var h;
                        if (s.appendChild(D).innerHTML = "<a id='" + J + "'></a>" + "<select id='" + J + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>",
                        D.querySelectorAll("[msallowcapture^='']").length) P.push("[*^$]=" + k + "*(?:''|\"\")");
                        if (!D.querySelectorAll("[selected]").length) P.push("\\[" + k + "*(?:value|" + y + ")");
                        if (!D.querySelectorAll("[id~=" + J + "-]").length) P.push("~=");
                        if (h = f.createElement("input"), h.setAttribute("name", ""), D.appendChild(h),
                        !D.querySelectorAll("[name='']").length) P.push("\\[" + k + "*name" + k + "*=" + k + "*(?:''|\"\")");
                        if (!D.querySelectorAll(":checked").length) P.push(":checked");
                        if (!D.querySelectorAll("a#" + J + "+*").length) P.push(".#.+[+~]");
                        D.querySelectorAll("\\\f"), P.push("[\\r\\n\\f]");
                    })), rB((function(D) {
                        D.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";
                        var h = f.createElement("input");
                        if (h.setAttribute("type", "hidden"), D.appendChild(h).setAttribute("name", "D"),
                        D.querySelectorAll("[name=d]").length) P.push("name" + k + "*[*^$|!~]?=");
                        if (D.querySelectorAll(":enabled").length !== 2) P.push(":enabled", ":disabled");
                        if (s.appendChild(D).disabled = true, D.querySelectorAll(":disabled").length !== 2) P.push(":enabled", ":disabled");
                        D.querySelectorAll("*,:x"), P.push(",.*:");
                    }));
                    if (z.matchesSelector = kN.test(n = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) rB((function(D) {
                        z.disconnectedMatch = n.call(D, "*"), n.call(D, "[s!='']:x"), x.push("!=", p);
                    }));
                    return P = P.length && new RegExp(P.join("|")), x = x.length && new RegExp(x.join("|")),
                    h = kN.test(s.compareDocumentPosition), w = h || kN.test(s.contains) ? function(D, h) {
                        var z = D.nodeType === 9 ? D.documentElement : D, j = h && h.parentNode;
                        return D === j || !!(j && j.nodeType === 1 && (z.contains ? z.contains(j) : D.compareDocumentPosition && D.compareDocumentPosition(j) & 16));
                    } : function(D, h) {
                        if (h) while (h = h.parentNode) if (h === D) return true;
                        return false;
                    }, T = h ? function(D, h) {
                        if (D === h) return E = true, 0;
                        var j = !D.compareDocumentPosition - !h.compareDocumentPosition;
                        if (j) return j;
                        if (j = (D.ownerDocument || D) == (h.ownerDocument || h) ? D.compareDocumentPosition(h) : 1,
                        j & 1 || !z.sortDetached && h.compareDocumentPosition(D) === j) {
                            if (D == f || D.ownerDocument == a && w(a, D)) return -1;
                            if (h == f || h.ownerDocument == a && w(a, h)) return 1;
                            return I ? C(I, D) - C(I, h) : 0;
                        }
                        return j & 4 ? -1 : 1;
                    } : function(D, h) {
                        if (D === h) return E = true, 0;
                        var z, j = 0, F = D.parentNode, l = h.parentNode, Z = [ D ], A = [ h ];
                        if (!F || !l) return D == f ? -1 : h == f ? 1 : F ? -1 : l ? 1 : I ? C(I, D) - C(I, h) : 0; else if (F === l) return BW(D, h);
                        z = D;
                        while (z = z.parentNode) Z.unshift(z);
                        z = h;
                        while (z = z.parentNode) A.unshift(z);
                        while (Z[j] === A[j]) j++;
                        return j ? BW(Z[j], A[j]) : Z[j] == a ? -1 : A[j] == a ? 1 : 0;
                    }, f;
                }, Su.matches = function(D, h) {
                    return Su(D, null, null, h);
                }, Su.matchesSelector = function(D, h) {
                    if (X(D), z.matchesSelector && L && !S[h + " "] && (!x || !x.test(h)) && (!P || !P.test(h))) try {
                        var j = n.call(D, h);
                        if (j || z.disconnectedMatch || D.document && D.document.nodeType !== 11) return j;
                    } catch (D) {
                        S(h, true);
                    }
                    return Su(h, f, null, [ D ]).length > 0;
                }, Su.contains = function(D, h) {
                    if ((D.ownerDocument || D) != f) X(D);
                    return w(D, h);
                }, Su.attr = function(D, h) {
                    if ((D.ownerDocument || D) != f) X(D);
                    var F = j.attrHandle[h.toLowerCase()], l = F && e.call(j.attrHandle, h.toLowerCase()) ? F(D, h, !L) : void 0;
                    return l !== void 0 ? l : z.attributes || !L ? D.getAttribute(h) : (l = D.getAttributeNode(h)) && l.specified ? l.value : null;
                }, Su.escape = function(D) {
                    return (D + "").replace(hO, VB);
                }, Su.error = function(D) {
                    throw new Error("Syntax error, unrecognized expression: " + D);
                }, Su.uniqueSort = function(D) {
                    var h, j = [], F = 0, l = 0;
                    if (E = !z.detectDuplicates, I = !z.sortStable && D.slice(0), D.sort(T), E) {
                        while (h = D[l++]) if (h === D[l]) F = j.push(l);
                        while (F--) D.splice(j[F], 1);
                    }
                    return I = null, D;
                }, F = Su.getText = function(D) {
                    var h, z = "", j = 0, l = D.nodeType;
                    if (!l) while (h = D[j++]) z += F(h); else if (l === 1 || l === 9 || l === 11) if (typeof D.textContent === "string") return D.textContent; else for (D = D.firstChild; D; D = D.nextSibling) z += F(D); else if (l === 3 || l === 4) return D.nodeValue;
                    return z;
                }, j = Su.selectors = {
                    cacheLength: 50,
                    createPseudo: Oq,
                    match: V,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: true
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: true
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(D) {
                            if (D[1] = D[1].replace(xk, LD), D[3] = (D[3] || D[4] || D[5] || "").replace(xk, LD),
                            D[2] === "~=") D[3] = " " + D[3] + " ";
                            return D.slice(0, 4);
                        },
                        CHILD: function(D) {
                            if (D[1] = D[1].toLowerCase(), D[1].slice(0, 3) === "nth") {
                                if (!D[3]) Su.error(D[0]);
                                D[4] = +(D[4] ? D[5] + (D[6] || 1) : 2 * (D[3] === "even" || D[3] === "odd")), D[5] = +(D[7] + D[8] || D[3] === "odd");
                            } else if (D[3]) Su.error(D[0]);
                            return D;
                        },
                        PSEUDO: function(D) {
                            var h, z = !D[6] && D[2];
                            if (V["CHILD"].test(D[0])) return null;
                            if (D[3]) D[2] = D[4] || D[5] || ""; else if (z && Y.test(z) && (h = Z(z, true)) && (h = z.indexOf(")", z.length - h) - z.length)) D[0] = D[0].slice(0, h),
                            D[2] = z.slice(0, h);
                            return D.slice(0, 3);
                        }
                    },
                    filter: {
                        TAG: function(D) {
                            var h = D.replace(xk, LD).toLowerCase();
                            return D === "*" ? function() {
                                return true;
                            } : function(D) {
                                return D.nodeName && D.nodeName.toLowerCase() === h;
                            };
                        },
                        CLASS: function(D) {
                            var h = K[D + " "];
                            return h || (h = new RegExp("(^|" + k + ")" + D + "(" + k + "|$)")) && K(D, (function(D) {
                                return h.test(typeof D.className === "string" && D.className || typeof D.getAttribute !== "undefined" && D.getAttribute("class") || "");
                            }));
                        },
                        ATTR: function(D, h, z) {
                            return function(j) {
                                var F = Su.attr(j, D);
                                if (F == null) return h === "!=";
                                if (!h) return true;
                                return F += "", h === "=" ? F === z : h === "!=" ? F !== z : h === "^=" ? z && F.indexOf(z) === 0 : h === "*=" ? z && F.indexOf(z) > -1 : h === "$=" ? z && F.slice(-z.length) === z : h === "~=" ? (" " + F.replace(u, " ") + " ").indexOf(z) > -1 : h === "|=" ? F === z || F.slice(0, z.length + 1) === z + "-" : false;
                            };
                        },
                        CHILD: function(D, h, z, j, F) {
                            var l = D.slice(0, 3) !== "nth", Z = D.slice(-4) !== "last", A = h === "of-type";
                            return j === 1 && F === 0 ? function(D) {
                                return !!D.parentNode;
                            } : function(h, z, q) {
                                var Q, I, E, X, f, s, L = l !== Z ? "nextSibling" : "previousSibling", P = h.parentNode, x = A && h.nodeName.toLowerCase(), n = !q && !A, w = false;
                                if (P) {
                                    if (l) {
                                        while (L) {
                                            X = h;
                                            while (X = X[L]) if (A ? X.nodeName.toLowerCase() === x : X.nodeType === 1) return false;
                                            s = L = D === "only" && !s && "nextSibling";
                                        }
                                        return true;
                                    }
                                    if (s = [ Z ? P.firstChild : P.lastChild ], Z && n) {
                                        X = P, E = X[J] || (X[J] = {}), I = E[X.uniqueID] || (E[X.uniqueID] = {}), Q = I[D] || [],
                                        f = Q[0] === d && Q[1], w = f && Q[2], X = f && P.childNodes[f];
                                        while (X = ++f && X && X[L] || (w = f = 0) || s.pop()) if (X.nodeType === 1 && ++w && X === h) {
                                            I[D] = [ d, f, w ];
                                            break;
                                        }
                                    } else {
                                        if (n) X = h, E = X[J] || (X[J] = {}), I = E[X.uniqueID] || (E[X.uniqueID] = {}),
                                        Q = I[D] || [], f = Q[0] === d && Q[1], w = f;
                                        if (w === false) while (X = ++f && X && X[L] || (w = f = 0) || s.pop()) if ((A ? X.nodeName.toLowerCase() === x : X.nodeType === 1) && ++w) {
                                            if (n) E = X[J] || (X[J] = {}), I = E[X.uniqueID] || (E[X.uniqueID] = {}), I[D] = [ d, w ];
                                            if (X === h) break;
                                        }
                                    }
                                    return w -= F, w === j || w % j === 0 && w / j >= 0;
                                }
                            };
                        },
                        PSEUDO: function(D, h) {
                            var z, F = j.pseudos[D] || j.setFilters[D.toLowerCase()] || Su.error("unsupported pseudo: " + D);
                            if (F[J]) return F(h);
                            if (F.length > 1) return z = [ D, D, "", h ], j.setFilters.hasOwnProperty(D.toLowerCase()) ? Oq((function(D, z) {
                                var j, l = F(D, h), Z = l.length;
                                while (Z--) j = C(D, l[Z]), D[j] = !(z[j] = l[Z]);
                            })) : function(D) {
                                return F(D, 0, z);
                            };
                            return F;
                        }
                    },
                    pseudos: {
                        not: Oq((function(D) {
                            var h = [], z = [], j = A(D.replace(O, "$1"));
                            return j[J] ? Oq((function(D, h, z, F) {
                                var l, Z = j(D, null, F, []), A = D.length;
                                while (A--) if (l = Z[A]) D[A] = !(h[A] = l);
                            })) : function(D, F, l) {
                                return h[0] = D, j(h, null, l, z), h[0] = null, !z.pop();
                            };
                        })),
                        has: Oq((function(D) {
                            return function(h) {
                                return Su(D, h).length > 0;
                            };
                        })),
                        contains: Oq((function(D) {
                            return D = D.replace(xk, LD), function(h) {
                                return (h.textContent || F(h)).indexOf(D) > -1;
                            };
                        })),
                        lang: Oq((function(D) {
                            if (!R.test(D || "")) Su.error("unsupported lang: " + D);
                            return D = D.replace(xk, LD).toLowerCase(), function(h) {
                                var z;
                                do {
                                    if (z = L ? h.lang : h.getAttribute("xml:lang") || h.getAttribute("lang")) return z = z.toLowerCase(),
                                    z === D || z.indexOf(D + "-") === 0;
                                } while ((h = h.parentNode) && h.nodeType === 1);
                                return false;
                            };
                        })),
                        target: function(h) {
                            var z = D.location && D.location.hash;
                            return z && z.slice(1) === h.id;
                        },
                        root: function(D) {
                            return D === s;
                        },
                        focus: function(D) {
                            return D === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(D.type || D.href || ~D.tabIndex);
                        },
                        enabled: ol(false),
                        disabled: ol(true),
                        checked: function(D) {
                            var h = D.nodeName.toLowerCase();
                            return h === "input" && !!D.checked || h === "option" && !!D.selected;
                        },
                        selected: function(D) {
                            if (D.parentNode) D.parentNode.selectedIndex;
                            return D.selected === true;
                        },
                        empty: function(D) {
                            for (D = D.firstChild; D; D = D.nextSibling) if (D.nodeType < 6) return false;
                            return true;
                        },
                        parent: function(D) {
                            return !j.pseudos["empty"](D);
                        },
                        header: function(D) {
                            return N.test(D.nodeName);
                        },
                        input: function(D) {
                            return g.test(D.nodeName);
                        },
                        button: function(D) {
                            var h = D.nodeName.toLowerCase();
                            return h === "input" && D.type === "button" || h === "button";
                        },
                        text: function(D) {
                            var h;
                            return D.nodeName.toLowerCase() === "input" && D.type === "text" && ((h = D.getAttribute("type")) == null || h.toLowerCase() === "text");
                        },
                        first: tR((function() {
                            return [ 0 ];
                        })),
                        last: tR((function(D, h) {
                            return [ h - 1 ];
                        })),
                        eq: tR((function(D, h, z) {
                            return [ z < 0 ? z + h : z ];
                        })),
                        even: tR((function(D, h) {
                            for (var z = 0; z < h; z += 2) D.push(z);
                            return D;
                        })),
                        odd: tR((function(D, h) {
                            for (var z = 1; z < h; z += 2) D.push(z);
                            return D;
                        })),
                        lt: tR((function(D, h, z) {
                            for (var j = z < 0 ? z + h : z > h ? h : z; --j >= 0; ) D.push(j);
                            return D;
                        })),
                        gt: tR((function(D, h, z) {
                            for (var j = z < 0 ? z + h : z; ++j < h; ) D.push(j);
                            return D;
                        }))
                    }
                }, j.pseudos["nth"] = j.pseudos["eq"], {
                    radio: true,
                    checkbox: true,
                    file: true,
                    password: true,
                    image: true
                }) j.pseudos[h] = yi(h);
                for (h in {
                    submit: true,
                    reset: true
                }) j.pseudos[h] = mX(h);
                function qe() {}
                function LL(D) {
                    for (var h = 0, z = D.length, j = ""; h < z; h++) j += D[h].value;
                    return j;
                }
                function Ki(D, h, z) {
                    var j = h.dir, F = h.next, l = F || j, Z = z && l === "parentNode", A = H++;
                    return h.first ? function(h, z, F) {
                        while (h = h[j]) if (h.nodeType === 1 || Z) return D(h, z, F);
                        return false;
                    } : function(h, z, q) {
                        var Q, I, E, X = [ d, A ];
                        if (q) {
                            while (h = h[j]) if (h.nodeType === 1 || Z) if (D(h, z, q)) return true;
                        } else while (h = h[j]) if (h.nodeType === 1 || Z) if (E = h[J] || (h[J] = {}),
                        I = E[h.uniqueID] || (E[h.uniqueID] = {}), F && F === h.nodeName.toLowerCase()) h = h[j] || h; else if ((Q = I[l]) && Q[0] === d && Q[1] === A) return X[2] = Q[2]; else if (I[l] = X,
                        X[2] = D(h, z, q)) return true;
                        return false;
                    };
                }
                function Jo(D) {
                    return D.length > 1 ? function(h, z, j) {
                        var F = D.length;
                        while (F--) if (!D[F](h, z, j)) return false;
                        return true;
                    } : D[0];
                }
                function Tx(D, h, z) {
                    for (var j = 0, F = h.length; j < F; j++) Su(D, h[j], z);
                    return z;
                }
                function By(D, h, z, j, F) {
                    for (var l, Z = [], A = 0, q = D.length, Q = h != null; A < q; A++) if (l = D[A]) if (!z || z(l, j, F)) if (Z.push(l),
                    Q) h.push(A);
                    return Z;
                }
                function vF(D, h, z, j, F, l) {
                    if (j && !j[J]) j = vF(j);
                    if (F && !F[J]) F = vF(F, l);
                    return Oq((function(l, Z, A, q) {
                        var Q, I, E, X = [], f = [], s = Z.length, L = l || Tx(h || "*", A.nodeType ? [ A ] : A, []), P = D && (l || !h) ? By(L, X, D, A, q) : L, x = z ? F || (l ? D : s || j) ? [] : Z : P;
                        if (z) z(P, x, A, q);
                        if (j) {
                            Q = By(x, f), j(Q, [], A, q), I = Q.length;
                            while (I--) if (E = Q[I]) x[f[I]] = !(P[f[I]] = E);
                        }
                        if (l) {
                            if (F || D) {
                                if (F) {
                                    Q = [], I = x.length;
                                    while (I--) if (E = x[I]) Q.push(P[I] = E);
                                    F(null, x = [], Q, q);
                                }
                                I = x.length;
                                while (I--) if ((E = x[I]) && (Q = F ? C(l, E) : X[I]) > -1) l[Q] = !(Z[Q] = E);
                            }
                        } else if (x = By(x === Z ? x.splice(s, x.length) : x), F) F(null, Z, x, q); else r.apply(Z, x);
                    }));
                }
                function kn(D) {
                    for (var h, z, F, l = D.length, Z = j.relative[D[0].type], A = Z || j.relative[" "], q = Z ? 1 : 0, I = Ki((function(D) {
                        return D === h;
                    }), A, true), E = Ki((function(D) {
                        return C(h, D) > -1;
                    }), A, true), X = [ function(D, z, j) {
                        var F = !Z && (j || z !== Q) || ((h = z).nodeType ? I(D, z, j) : E(D, z, j));
                        return h = null, F;
                    } ]; q < l; q++) if (z = j.relative[D[q].type]) X = [ Ki(Jo(X), z) ]; else {
                        if (z = j.filter[D[q].type].apply(null, D[q].matches), z[J]) {
                            for (F = ++q; F < l; F++) if (j.relative[D[F].type]) break;
                            return vF(q > 1 && Jo(X), q > 1 && LL(D.slice(0, q - 1).concat({
                                value: D[q - 2].type === " " ? "*" : ""
                            })).replace(O, "$1"), z, q < F && kn(D.slice(q, F)), F < l && kn(D = D.slice(F)), F < l && LL(D));
                        }
                        X.push(z);
                    }
                    return Jo(X);
                }
                function wQ(D, h) {
                    var z = h.length > 0, F = D.length > 0, l = function(l, Z, A, q, I) {
                        var E, s, P, x = 0, n = "0", w = l && [], J = [], a = Q, H = l || F && j.find["TAG"]("*", I), K = d += a == null ? 1 : Math.random() || .1, c = H.length;
                        if (I) Q = Z == f || Z || I;
                        for (;n !== c && (E = H[n]) != null; n++) {
                            if (F && E) {
                                if (s = 0, !Z && E.ownerDocument != f) X(E), A = !L;
                                while (P = D[s++]) if (P(E, Z || f, A)) {
                                    q.push(E);
                                    break;
                                }
                                if (I) d = K;
                            }
                            if (z) {
                                if (E = !P && E) x--;
                                if (l) w.push(E);
                            }
                        }
                        if (x += n, z && n !== x) {
                            s = 0;
                            while (P = h[s++]) P(w, J, Z, A);
                            if (l) {
                                if (x > 0) while (n--) if (!(w[n] || J[n])) J[n] = m.call(q);
                                J = By(J);
                            }
                            if (r.apply(q, J), I && !l && J.length > 0 && x + h.length > 1) Su.uniqueSort(q);
                        }
                        if (I) d = K, Q = a;
                        return w;
                    };
                    return z ? Oq(l) : l;
                }
                if (qe.prototype = j.filters = j.pseudos, j.setFilters = new qe, Z = Su.tokenize = function(D, h) {
                    var z, F, l, Z, A, q, Q, I = c[D + " "];
                    if (I) return h ? 0 : I.slice(0);
                    A = D, q = [], Q = j.preFilter;
                    while (A) {
                        if (!z || (F = o.exec(A))) {
                            if (F) A = A.slice(F[0].length) || A;
                            q.push(l = []);
                        }
                        if (z = false, F = b.exec(A)) z = F.shift(), l.push({
                            value: z,
                            type: F[0].replace(O, " ")
                        }), A = A.slice(z.length);
                        for (Z in j.filter) if ((F = V[Z].exec(A)) && (!Q[Z] || (F = Q[Z](F)))) z = F.shift(),
                        l.push({
                            value: z,
                            type: Z,
                            matches: F
                        }), A = A.slice(z.length);
                        if (!z) break;
                    }
                    return h ? A.length : A ? Su.error(D) : c(D, q).slice(0);
                }, A = Su.compile = function(D, h) {
                    var z, j = [], F = [], l = M[D + " "];
                    if (!l) {
                        if (!h) h = Z(D);
                        z = h.length;
                        while (z--) if (l = kn(h[z]), l[J]) j.push(l); else F.push(l);
                        l = M(D, wQ(F, j)), l.selector = D;
                    }
                    return l;
                }, q = Su.select = function(D, h, z, F) {
                    var l, q, Q, I, E, X = typeof D === "function" && D, f = !F && Z(D = X.selector || D);
                    if (z = z || [], f.length === 1) {
                        if (q = f[0] = f[0].slice(0), q.length > 2 && (Q = q[0]).type === "ID" && h.nodeType === 9 && L && j.relative[q[1].type]) {
                            if (h = (j.find["ID"](Q.matches[0].replace(xk, LD), h) || [])[0], !h) return z; else if (X) h = h.parentNode;
                            D = D.slice(q.shift().value.length);
                        }
                        l = V["needsContext"].test(D) ? 0 : q.length;
                        while (l--) {
                            if (Q = q[l], j.relative[I = Q.type]) break;
                            if (E = j.find[I]) if (F = E(Q.matches[0].replace(xk, LD), qk.test(q[0].type) && An(h.parentNode) || h)) {
                                if (q.splice(l, 1), D = F.length && LL(q), !D) return r.apply(z, F), z;
                                break;
                            }
                        }
                    }
                    return (X || A(D, f))(F, h, !L, z, !h || qk.test(D) && An(h.parentNode) || h), z;
                }, z.sortStable = J.split("").sort(T).join("") === J, z.detectDuplicates = !!E,
                X(), z.sortDetached = rB((function(D) {
                    return D.compareDocumentPosition(f.createElement("fieldset")) & 1;
                })), !rB((function(D) {
                    return D.innerHTML = "<a href='#'></a>", D.firstChild.getAttribute("href") === "#";
                }))) KU("type|href|height|width", (function(D, h, z) {
                    if (!z) return D.getAttribute(h, h.toLowerCase() === "type" ? 1 : 2);
                }));
                if (!z.attributes || !rB((function(D) {
                    return D.innerHTML = "<input/>", D.firstChild.setAttribute("value", ""), D.firstChild.getAttribute("value") === "";
                }))) KU("value", (function(D, h, z) {
                    if (!z && D.nodeName.toLowerCase() === "input") return D.defaultValue;
                }));
                if (!rB((function(D) {
                    return D.getAttribute("disabled") == null;
                }))) KU(y, (function(D, h, z) {
                    var j;
                    if (!z) return D[h] === true ? h.toLowerCase() : (j = D.getAttributeNode(h)) && j.specified ? j.value : null;
                }));
                return Su;
            }(D);
            a.find = H, a.expr = H.selectors, a.expr[":"] = a.expr.pseudos, a.uniqueSort = a.unique = H.uniqueSort,
            a.text = H.getText, a.isXMLDoc = H.isXML, a.contains = H.contains, a.escapeSelector = H.escape;
            var K = function(D, h, z) {
                var j = [], F = z !== void 0;
                while ((D = D[h]) && D.nodeType !== 9) if (D.nodeType === 1) {
                    if (F && a(D).is(z)) break;
                    j.push(D);
                }
                return j;
            }, c = function(D, h) {
                for (var z = []; D; D = D.nextSibling) if (D.nodeType === 1 && D !== h) z.push(D);
                return z;
            }, M = a.expr.match.needsContext;
            function S(D, h) {
                return D.nodeName && D.nodeName.toLowerCase() === h.toLowerCase();
            }
            var T = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            function e(D, h, z) {
                if (s(h)) return a.grep(D, (function(D, j) {
                    return !!h.call(D, j, D) !== z;
                }));
                if (h.nodeType) return a.grep(D, (function(D) {
                    return D === h !== z;
                }));
                if (typeof h !== "string") return a.grep(D, (function(D) {
                    return A.call(h, D) > -1 !== z;
                }));
                return a.filter(h, D, z);
            }
            a.filter = function(D, h, z) {
                var j = h[0];
                if (z) D = ":not(" + D + ")";
                if (h.length === 1 && j.nodeType === 1) return a.find.matchesSelector(j, D) ? [ j ] : [];
                return a.find.matches(D, a.grep(h, (function(D) {
                    return D.nodeType === 1;
                })));
            }, a.fn.extend({
                find: function(D) {
                    var h, z, j = this.length, F = this;
                    if (typeof D !== "string") return this.pushStack(a(D).filter((function() {
                        for (h = 0; h < j; h++) if (a.contains(F[h], this)) return true;
                    })));
                    for (z = this.pushStack([]), h = 0; h < j; h++) a.find(D, F[h], z);
                    return j > 1 ? a.uniqueSort(z) : z;
                },
                filter: function(D) {
                    return this.pushStack(e(this, D || [], false));
                },
                not: function(D) {
                    return this.pushStack(e(this, D || [], true));
                },
                is: function(D) {
                    return !!e(this, typeof D === "string" && M.test(D) ? a(D) : D || [], false).length;
                }
            });
            var v, m = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, G = a.fn.init = function(D, h, z) {
                var j, F;
                if (!D) return this;
                if (z = z || v, typeof D === "string") {
                    if (D[0] === "<" && D[D.length - 1] === ">" && D.length >= 3) j = [ null, D, null ]; else j = m.exec(D);
                    if (j && (j[1] || !h)) if (j[1]) {
                        if (h = h instanceof a ? h[0] : h, a.merge(this, a.parseHTML(j[1], h && h.nodeType ? h.ownerDocument || h : P, true)),
                        T.test(j[1]) && a.isPlainObject(h)) for (j in h) if (s(this[j])) this[j](h[j]); else this.attr(j, h[j]);
                        return this;
                    } else {
                        if (F = P.getElementById(j[2]), F) this[0] = F, this.length = 1;
                        return this;
                    } else if (!h || h.jquery) return (h || z).find(D); else return this.constructor(h).find(D);
                } else if (D.nodeType) return this[0] = D, this.length = 1, this; else if (s(D)) return z.ready !== void 0 ? z.ready(D) : D(a);
                return a.makeArray(D, this);
            };
            G.prototype = a.fn, v = a(P);
            var r = /^(?:parents|prev(?:Until|All))/, t = {
                children: true,
                contents: true,
                next: true,
                prev: true
            };
            function C(D, h) {
                while ((D = D[h]) && D.nodeType !== 1) ;
                return D;
            }
            a.fn.extend({
                has: function(D) {
                    var h = a(D, this), z = h.length;
                    return this.filter((function() {
                        for (var D = 0; D < z; D++) if (a.contains(this, h[D])) return true;
                    }));
                },
                closest: function(D, h) {
                    var z, j = 0, F = this.length, l = [], Z = typeof D !== "string" && a(D);
                    if (!M.test(D)) for (;j < F; j++) for (z = this[j]; z && z !== h; z = z.parentNode) if (z.nodeType < 11 && (Z ? Z.index(z) > -1 : z.nodeType === 1 && a.find.matchesSelector(z, D))) {
                        l.push(z);
                        break;
                    }
                    return this.pushStack(l.length > 1 ? a.uniqueSort(l) : l);
                },
                index: function(D) {
                    if (!D) return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                    if (typeof D === "string") return A.call(a(D), this[0]);
                    return A.call(this, D.jquery ? D[0] : D);
                },
                add: function(D, h) {
                    return this.pushStack(a.uniqueSort(a.merge(this.get(), a(D, h))));
                },
                addBack: function(D) {
                    return this.add(D == null ? this.prevObject : this.prevObject.filter(D));
                }
            }), a.each({
                parent: function(D) {
                    var h = D.parentNode;
                    return h && h.nodeType !== 11 ? h : null;
                },
                parents: function(D) {
                    return K(D, "parentNode");
                },
                parentsUntil: function(D, h, z) {
                    return K(D, "parentNode", z);
                },
                next: function(D) {
                    return C(D, "nextSibling");
                },
                prev: function(D) {
                    return C(D, "previousSibling");
                },
                nextAll: function(D) {
                    return K(D, "nextSibling");
                },
                prevAll: function(D) {
                    return K(D, "previousSibling");
                },
                nextUntil: function(D, h, z) {
                    return K(D, "nextSibling", z);
                },
                prevUntil: function(D, h, z) {
                    return K(D, "previousSibling", z);
                },
                siblings: function(D) {
                    return c((D.parentNode || {}).firstChild, D);
                },
                children: function(D) {
                    return c(D.firstChild);
                },
                contents: function(D) {
                    if (D.contentDocument != null && j(D.contentDocument)) return D.contentDocument;
                    if (S(D, "template")) D = D.content || D;
                    return a.merge([], D.childNodes);
                }
            }, (function(D, h) {
                a.fn[D] = function(z, j) {
                    var F = a.map(this, h, z);
                    if (D.slice(-5) !== "Until") j = z;
                    if (j && typeof j === "string") F = a.filter(j, F);
                    if (this.length > 1) {
                        if (!t[D]) a.uniqueSort(F);
                        if (r.test(D)) F.reverse();
                    }
                    return this.pushStack(F);
                };
            }));
            var y = /[^\x20\t\r\n\f]+/g;
            function k(D) {
                var h = {};
                return a.each(D.match(y) || [], (function(D, z) {
                    h[z] = true;
                })), h;
            }
            function W(D) {
                return D;
            }
            function U(D) {
                throw D;
            }
            function p(D, h, z, j) {
                var F;
                try {
                    if (D && s(F = D.promise)) F.call(D).done(h).fail(z); else if (D && s(F = D.then)) F.call(D, h, z); else h.apply(void 0, [ D ].slice(j));
                } catch (D) {
                    z.apply(void 0, [ D ]);
                }
            }
            a.Callbacks = function(D) {
                D = typeof D === "string" ? k(D) : a.extend({}, D);
                var h, z, j, F, l = [], Z = [], A = -1, q = function() {
                    for (F = F || D.once, j = h = true; Z.length; A = -1) {
                        z = Z.shift();
                        while (++A < l.length) if (l[A].apply(z[0], z[1]) === false && D.stopOnFalse) A = l.length,
                        z = false;
                    }
                    if (!D.memory) z = false;
                    if (h = false, F) if (z) l = []; else l = "";
                }, Q = {
                    add: function() {
                        if (l) {
                            if (z && !h) A = l.length - 1, Z.push(z);
                            if (function h(z) {
                                a.each(z, (function(z, j) {
                                    if (s(j)) {
                                        if (!D.unique || !Q.has(j)) l.push(j);
                                    } else if (j && j.length && w(j) !== "string") h(j);
                                }));
                            }(arguments), z && !h) q();
                        }
                        return this;
                    },
                    remove: function() {
                        return a.each(arguments, (function(D, h) {
                            var z;
                            while ((z = a.inArray(h, l, z)) > -1) if (l.splice(z, 1), z <= A) A--;
                        })), this;
                    },
                    has: function(D) {
                        return D ? a.inArray(D, l) > -1 : l.length > 0;
                    },
                    empty: function() {
                        if (l) l = [];
                        return this;
                    },
                    disable: function() {
                        return F = Z = [], l = z = "", this;
                    },
                    disabled: function() {
                        return !l;
                    },
                    lock: function() {
                        if (F = Z = [], !z && !h) l = z = "";
                        return this;
                    },
                    locked: function() {
                        return !!F;
                    },
                    fireWith: function(D, z) {
                        if (!F) if (z = z || [], z = [ D, z.slice ? z.slice() : z ], Z.push(z), !h) q();
                        return this;
                    },
                    fire: function() {
                        return Q.fireWith(this, arguments), this;
                    },
                    fired: function() {
                        return !!j;
                    }
                };
                return Q;
            }, a.extend({
                Deferred: function(h) {
                    var z = [ [ "notify", "progress", a.Callbacks("memory"), a.Callbacks("memory"), 2 ], [ "resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), 1, "rejected" ] ], j = "pending", F = {
                        state: function() {
                            return j;
                        },
                        always: function() {
                            return l.done(arguments).fail(arguments), this;
                        },
                        catch: function(D) {
                            return F.then(null, D);
                        },
                        pipe: function() {
                            var D = arguments;
                            return a.Deferred((function(h) {
                                a.each(z, (function(z, j) {
                                    var F = s(D[j[4]]) && D[j[4]];
                                    l[j[1]]((function() {
                                        var D = F && F.apply(this, arguments);
                                        if (D && s(D.promise)) D.promise().progress(h.notify).done(h.resolve).fail(h.reject); else h[j[0] + "With"](this, F ? [ D ] : arguments);
                                    }));
                                })), D = null;
                            })).promise();
                        },
                        then: function(h, j, F) {
                            var l = 0;
                            function Z(h, z, j, F) {
                                return function() {
                                    var A = this, q = arguments, Q = function() {
                                        var D, Q;
                                        if (h < l) return;
                                        if (D = j.apply(A, q), D === z.promise()) throw new TypeError("Thenable self-resolution");
                                        if (Q = D && (typeof D === "object" || typeof D === "function") && D.then, s(Q)) if (F) Q.call(D, Z(l, z, W, F), Z(l, z, U, F)); else l++,
                                        Q.call(D, Z(l, z, W, F), Z(l, z, U, F), Z(l, z, W, z.notifyWith)); else {
                                            if (j !== W) A = void 0, q = [ D ];
                                            (F || z.resolveWith)(A, q);
                                        }
                                    }, I = F ? Q : function() {
                                        try {
                                            Q();
                                        } catch (D) {
                                            if (a.Deferred.exceptionHook) a.Deferred.exceptionHook(D, I.stackTrace);
                                            if (h + 1 >= l) {
                                                if (j !== U) A = void 0, q = [ D ];
                                                z.rejectWith(A, q);
                                            }
                                        }
                                    };
                                    if (h) I(); else {
                                        if (a.Deferred.getStackHook) I.stackTrace = a.Deferred.getStackHook();
                                        D.setTimeout(I);
                                    }
                                };
                            }
                            return a.Deferred((function(D) {
                                z[0][3].add(Z(0, D, s(F) ? F : W, D.notifyWith)), z[1][3].add(Z(0, D, s(h) ? h : W)),
                                z[2][3].add(Z(0, D, s(j) ? j : U));
                            })).promise();
                        },
                        promise: function(D) {
                            return D != null ? a.extend(D, F) : F;
                        }
                    }, l = {};
                    if (a.each(z, (function(D, h) {
                        var Z = h[2], A = h[5];
                        if (F[h[1]] = Z.add, A) Z.add((function() {
                            j = A;
                        }), z[3 - D][2].disable, z[3 - D][3].disable, z[0][2].lock, z[0][3].lock);
                        Z.add(h[3].fire), l[h[0]] = function() {
                            return l[h[0] + "With"](this === l ? void 0 : this, arguments), this;
                        }, l[h[0] + "With"] = Z.fireWith;
                    })), F.promise(l), h) h.call(l, l);
                    return l;
                },
                when: function(D) {
                    var h = arguments.length, z = h, j = Array(z), l = F.call(arguments), Z = a.Deferred(), A = function(D) {
                        return function(z) {
                            if (j[D] = this, l[D] = arguments.length > 1 ? F.call(arguments) : z, ! --h) Z.resolveWith(j, l);
                        };
                    };
                    if (h <= 1) if (p(D, Z.done(A(z)).resolve, Z.reject, !h), Z.state() === "pending" || s(l[z] && l[z].then)) return Z.then();
                    while (z--) p(l[z], A(z), Z.reject);
                    return Z.promise();
                }
            });
            var u = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            a.Deferred.exceptionHook = function(h, z) {
                if (D.console && D.console.warn && h && u.test(h.name)) D.console.warn("jQuery.Deferred exception: " + h.message, h.stack, z);
            }, a.readyException = function(h) {
                D.setTimeout((function() {
                    throw h;
                }));
            };
            var O = a.Deferred();
            function o() {
                P.removeEventListener("DOMContentLoaded", o), D.removeEventListener("load", o),
                a.ready();
            }
            if (a.fn.ready = function(D) {
                return O.then(D).catch((function(D) {
                    a.readyException(D);
                })), this;
            }, a.extend({
                isReady: false,
                readyWait: 1,
                ready: function(D) {
                    if (D === true ? --a.readyWait : a.isReady) return;
                    if (a.isReady = true, D !== true && --a.readyWait > 0) return;
                    O.resolveWith(P, [ a ]);
                }
            }), a.ready.then = O.then, P.readyState === "complete" || P.readyState !== "loading" && !P.documentElement.doScroll) D.setTimeout(a.ready); else P.addEventListener("DOMContentLoaded", o),
            D.addEventListener("load", o);
            var b = function(D, h, z, j, F, l, Z) {
                var A = 0, q = D.length, Q = z == null;
                if (w(z) === "object") for (A in F = true, z) b(D, h, A, z[A], true, l, Z); else if (j !== void 0) {
                    if (F = true, !s(j)) Z = true;
                    if (Q) if (Z) h.call(D, j), h = null; else Q = h, h = function(D, h, z) {
                        return Q.call(a(D), z);
                    };
                    if (h) for (;A < q; A++) h(D[A], z, Z ? j : j.call(D[A], A, h(D[A], z)));
                }
                if (F) return D;
                if (Q) return h.call(D);
                return q ? h(D[0], z) : l;
            }, B = /^-ms-/, Y = /-([a-z])/g;
            function R(D, h) {
                return h.toUpperCase();
            }
            function V(D) {
                return D.replace(B, "ms-").replace(Y, R);
            }
            var i = function(D) {
                return D.nodeType === 1 || D.nodeType === 9 || !+D.nodeType;
            };
            function g() {
                this.expando = a.expando + g.uid++;
            }
            g.uid = 1, g.prototype = {
                cache: function(D) {
                    var h = D[this.expando];
                    if (!h) if (h = {}, i(D)) if (D.nodeType) D[this.expando] = h; else Object.defineProperty(D, this.expando, {
                        value: h,
                        configurable: true
                    });
                    return h;
                },
                set: function(D, h, z) {
                    var j, F = this.cache(D);
                    if (typeof h === "string") F[V(h)] = z; else for (j in h) F[V(j)] = h[j];
                    return F;
                },
                get: function(D, h) {
                    return h === void 0 ? this.cache(D) : D[this.expando] && D[this.expando][V(h)];
                },
                access: function(D, h, z) {
                    if (h === void 0 || h && typeof h === "string" && z === void 0) return this.get(D, h);
                    return this.set(D, h, z), z !== void 0 ? z : h;
                },
                remove: function(D, h) {
                    var z, j = D[this.expando];
                    if (j === void 0) return;
                    if (h !== void 0) {
                        if (Array.isArray(h)) h = h.map(V); else h = V(h), h = h in j ? [ h ] : h.match(y) || [];
                        z = h.length;
                        while (z--) delete j[h[z]];
                    }
                    if (h === void 0 || a.isEmptyObject(j)) if (D.nodeType) D[this.expando] = void 0; else delete D[this.expando];
                },
                hasData: function(D) {
                    var h = D[this.expando];
                    return h !== void 0 && !a.isEmptyObject(h);
                }
            };
            var N = new g, kN = new g, Ar = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, qk = /[A-Z]/g;
            function xk(D) {
                if (D === "true") return true;
                if (D === "false") return false;
                if (D === "null") return null;
                if (D === +D + "") return +D;
                if (Ar.test(D)) return JSON.parse(D);
                return D;
            }
            function LD(D, h, z) {
                var j;
                if (z === void 0 && D.nodeType === 1) if (j = "data-" + h.replace(qk, "-$&").toLowerCase(),
                z = D.getAttribute(j), typeof z === "string") {
                    try {
                        z = xk(z);
                    } catch (D) {}
                    kN.set(D, h, z);
                } else z = void 0;
                return z;
            }
            a.extend({
                hasData: function(D) {
                    return kN.hasData(D) || N.hasData(D);
                },
                data: function(D, h, z) {
                    return kN.access(D, h, z);
                },
                removeData: function(D, h) {
                    kN.remove(D, h);
                },
                _data: function(D, h, z) {
                    return N.access(D, h, z);
                },
                _removeData: function(D, h) {
                    N.remove(D, h);
                }
            }), a.fn.extend({
                data: function(D, h) {
                    var z, j, F, l = this[0], Z = l && l.attributes;
                    if (D === void 0) {
                        if (this.length) if (F = kN.get(l), l.nodeType === 1 && !N.get(l, "hasDataAttrs")) {
                            z = Z.length;
                            while (z--) if (Z[z]) if (j = Z[z].name, j.indexOf("data-") === 0) j = V(j.slice(5)),
                            LD(l, j, F[j]);
                            N.set(l, "hasDataAttrs", true);
                        }
                        return F;
                    }
                    if (typeof D === "object") return this.each((function() {
                        kN.set(this, D);
                    }));
                    return b(this, (function(h) {
                        var z;
                        if (l && h === void 0) {
                            if (z = kN.get(l, D), z !== void 0) return z;
                            if (z = LD(l, D), z !== void 0) return z;
                            return;
                        }
                        this.each((function() {
                            kN.set(this, D, h);
                        }));
                    }), null, h, arguments.length > 1, null, true);
                },
                removeData: function(D) {
                    return this.each((function() {
                        kN.remove(this, D);
                    }));
                }
            }), a.extend({
                queue: function(D, h, z) {
                    var j;
                    if (D) {
                        if (h = (h || "fx") + "queue", j = N.get(D, h), z) if (!j || Array.isArray(z)) j = N.access(D, h, a.makeArray(z)); else j.push(z);
                        return j || [];
                    }
                },
                dequeue: function(D, h) {
                    h = h || "fx";
                    var z = a.queue(D, h), j = z.length, F = z.shift(), l = a._queueHooks(D, h), Z = function() {
                        a.dequeue(D, h);
                    };
                    if (F === "inprogress") F = z.shift(), j--;
                    if (F) {
                        if (h === "fx") z.unshift("inprogress");
                        delete l.stop, F.call(D, Z, l);
                    }
                    if (!j && l) l.empty.fire();
                },
                _queueHooks: function(D, h) {
                    var z = h + "queueHooks";
                    return N.get(D, z) || N.access(D, z, {
                        empty: a.Callbacks("once memory").add((function() {
                            N.remove(D, [ h + "queue", z ]);
                        }))
                    });
                }
            }), a.fn.extend({
                queue: function(D, h) {
                    var z = 2;
                    if (typeof D !== "string") h = D, D = "fx", z--;
                    if (arguments.length < z) return a.queue(this[0], D);
                    return h === void 0 ? this : this.each((function() {
                        var z = a.queue(this, D, h);
                        if (a._queueHooks(this, D), D === "fx" && z[0] !== "inprogress") a.dequeue(this, D);
                    }));
                },
                dequeue: function(D) {
                    return this.each((function() {
                        a.dequeue(this, D);
                    }));
                },
                clearQueue: function(D) {
                    return this.queue(D || "fx", []);
                },
                promise: function(D, h) {
                    var z, j = 1, F = a.Deferred(), l = this, Z = this.length, A = function() {
                        if (! --j) F.resolveWith(l, [ l ]);
                    };
                    if (typeof D !== "string") h = D, D = void 0;
                    D = D || "fx";
                    while (Z--) if (z = N.get(l[Z], D + "queueHooks"), z && z.empty) j++, z.empty.add(A);
                    return A(), F.promise(h);
                }
            });
            var hO = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, VB = new RegExp("^(?:([+-])=|)(" + hO + ")([a-z%]*)$", "i"), zi = [ "Top", "Right", "Bottom", "Left" ], dj = P.documentElement, Su = function(D) {
                return a.contains(D.ownerDocument, D);
            }, Cv = {
                composed: true
            };
            if (dj.getRootNode) Su = function(D) {
                return a.contains(D.ownerDocument, D) || D.getRootNode(Cv) === D.ownerDocument;
            };
            var Oq = function(D, h) {
                return D = h || D, D.style.display === "none" || D.style.display === "" && Su(D) && a.css(D, "display") === "none";
            };
            function rB(D, h, z, j) {
                var F, l, Z = 20, A = j ? function() {
                    return j.cur();
                } : function() {
                    return a.css(D, h, "");
                }, q = A(), Q = z && z[3] || (a.cssNumber[h] ? "" : "px"), I = D.nodeType && (a.cssNumber[h] || Q !== "px" && +q) && VB.exec(a.css(D, h));
                if (I && I[3] !== Q) {
                    q /= 2, Q = Q || I[3], I = +q || 1;
                    while (Z--) {
                        if (a.style(D, h, I + Q), (1 - l) * (1 - (l = A() / q || .5)) <= 0) Z = 0;
                        I /= l;
                    }
                    I *= 2, a.style(D, h, I + Q), z = z || [];
                }
                if (z) if (I = +I || +q || 0, F = z[1] ? I + (z[1] + 1) * z[2] : +z[2], j) j.unit = Q,
                j.start = I, j.end = F;
                return F;
            }
            var KU = {};
            function BW(D) {
                var h, z = D.ownerDocument, j = D.nodeName, F = KU[j];
                if (F) return F;
                if (h = z.body.appendChild(z.createElement(j)), F = a.css(h, "display"), h.parentNode.removeChild(h),
                F === "none") F = "block";
                return KU[j] = F, F;
            }
            function yi(D, h) {
                for (var z, j, F = [], l = 0, Z = D.length; l < Z; l++) {
                    if (j = D[l], !j.style) continue;
                    if (z = j.style.display, h) {
                        if (z === "none") if (F[l] = N.get(j, "display") || null, !F[l]) j.style.display = "";
                        if (j.style.display === "" && Oq(j)) F[l] = BW(j);
                    } else if (z !== "none") F[l] = "none", N.set(j, "display", z);
                }
                for (l = 0; l < Z; l++) if (F[l] != null) D[l].style.display = F[l];
                return D;
            }
            a.fn.extend({
                show: function() {
                    return yi(this, true);
                },
                hide: function() {
                    return yi(this);
                },
                toggle: function(D) {
                    if (typeof D === "boolean") return D ? this.show() : this.hide();
                    return this.each((function() {
                        if (Oq(this)) a(this).show(); else a(this).hide();
                    }));
                }
            });
            var mX = /^(?:checkbox|radio)$/i, ol = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, tR = /^$|^module$|\/(?:java|ecma)script/i, An, qe, LL;
            An = P.createDocumentFragment(), qe = An.appendChild(P.createElement("div")), LL = P.createElement("input"),
            LL.setAttribute("type", "radio"), LL.setAttribute("checked", "checked"), LL.setAttribute("name", "t"),
            qe.appendChild(LL), f.checkClone = qe.cloneNode(true).cloneNode(true).lastChild.checked,
            qe.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!qe.cloneNode(true).lastChild.defaultValue,
            qe.innerHTML = "<option></option>", f.option = !!qe.lastChild;
            var Ki = {
                thead: [ 1, "<table>", "</table>" ],
                col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
                tr: [ 2, "<table><tbody>", "</tbody></table>" ],
                td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
                _default: [ 0, "", "" ]
            };
            if (Ki.tbody = Ki.tfoot = Ki.colgroup = Ki.caption = Ki.thead, Ki.th = Ki.td, !f.option) Ki.optgroup = Ki.option = [ 1, "<select multiple='multiple'>", "</select>" ];
            function Jo(D, h) {
                var z;
                if (typeof D.getElementsByTagName !== "undefined") z = D.getElementsByTagName(h || "*"); else if (typeof D.querySelectorAll !== "undefined") z = D.querySelectorAll(h || "*"); else z = [];
                if (h === void 0 || h && S(D, h)) return a.merge([ D ], z);
                return z;
            }
            function Tx(D, h) {
                for (var z = 0, j = D.length; z < j; z++) N.set(D[z], "globalEval", !h || N.get(h[z], "globalEval"));
            }
            var By = /<|&#?\w+;/;
            function vF(D, h, z, j, F) {
                for (var l, Z, A, q, Q, I, E = h.createDocumentFragment(), X = [], f = 0, s = D.length; f < s; f++) if (l = D[f],
                l || l === 0) if (w(l) === "object") a.merge(X, l.nodeType ? [ l ] : l); else if (!By.test(l)) X.push(h.createTextNode(l)); else {
                    Z = Z || E.appendChild(h.createElement("div")), A = (ol.exec(l) || [ "", "" ])[1].toLowerCase(),
                    q = Ki[A] || Ki._default, Z.innerHTML = q[1] + a.htmlPrefilter(l) + q[2], I = q[0];
                    while (I--) Z = Z.lastChild;
                    a.merge(X, Z.childNodes), Z = E.firstChild, Z.textContent = "";
                }
                E.textContent = "", f = 0;
                while (l = X[f++]) {
                    if (j && a.inArray(l, j) > -1) {
                        if (F) F.push(l);
                        continue;
                    }
                    if (Q = Su(l), Z = Jo(E.appendChild(l), "script"), Q) Tx(Z);
                    if (z) {
                        I = 0;
                        while (l = Z[I++]) if (tR.test(l.type || "")) z.push(l);
                    }
                }
                return E;
            }
            var kn = /^([^.]*)(?:\.(.+)|)/;
            function wQ() {
                return true;
            }
            function lp() {
                return false;
            }
            function Hd(D, h) {
                return D === rG() === (h === "focus");
            }
            function rG() {
                try {
                    return P.activeElement;
                } catch (D) {}
            }
            function Az(D, h, z, j, F, l) {
                var Z, A;
                if (typeof h === "object") {
                    if (typeof z !== "string") j = j || z, z = void 0;
                    for (A in h) Az(D, A, z, j, h[A], l);
                    return D;
                }
                if (j == null && F == null) F = z, j = z = void 0; else if (F == null) if (typeof z === "string") F = j,
                j = void 0; else F = j, j = z, z = void 0;
                if (F === false) F = lp; else if (!F) return D;
                if (l === 1) Z = F, F = function(D) {
                    return a().off(D), Z.apply(this, arguments);
                }, F.guid = Z.guid || (Z.guid = a.guid++);
                return D.each((function() {
                    a.event.add(this, h, F, j, z);
                }));
            }
            function vS(D, h, z) {
                if (!z) {
                    if (N.get(D, h) === void 0) a.event.add(D, h, wQ);
                    return;
                }
                N.set(D, h, false), a.event.add(D, h, {
                    namespace: false,
                    handler: function(D) {
                        var j, l, Z = N.get(this, h);
                        if (D.isTrigger & 1 && this[h]) {
                            if (!Z.length) {
                                if (Z = F.call(arguments), N.set(this, h, Z), j = z(this, h), this[h](), l = N.get(this, h),
                                Z !== l || j) N.set(this, h, false); else l = {};
                                if (Z !== l) return D.stopImmediatePropagation(), D.preventDefault(), l && l.value;
                            } else if ((a.event.special[h] || {}).delegateType) D.stopPropagation();
                        } else if (Z.length) N.set(this, h, {
                            value: a.event.trigger(a.extend(Z[0], a.Event.prototype), Z.slice(1), this)
                        }), D.stopImmediatePropagation();
                    }
                });
            }
            a.event = {
                global: {},
                add: function(D, h, z, j, F) {
                    var l, Z, A, q, Q, I, E, X, f, s, L, P = N.get(D);
                    if (!i(D)) return;
                    if (z.handler) l = z, z = l.handler, F = l.selector;
                    if (F) a.find.matchesSelector(dj, F);
                    if (!z.guid) z.guid = a.guid++;
                    if (!(q = P.events)) q = P.events = Object.create(null);
                    if (!(Z = P.handle)) Z = P.handle = function(h) {
                        return typeof a !== "undefined" && a.event.triggered !== h.type ? a.event.dispatch.apply(D, arguments) : void 0;
                    };
                    h = (h || "").match(y) || [ "" ], Q = h.length;
                    while (Q--) {
                        if (A = kn.exec(h[Q]) || [], f = L = A[1], s = (A[2] || "").split(".").sort(), !f) continue;
                        if (E = a.event.special[f] || {}, f = (F ? E.delegateType : E.bindType) || f, E = a.event.special[f] || {},
                        I = a.extend({
                            type: f,
                            origType: L,
                            data: j,
                            handler: z,
                            guid: z.guid,
                            selector: F,
                            needsContext: F && a.expr.match.needsContext.test(F),
                            namespace: s.join(".")
                        }, l), !(X = q[f])) if (X = q[f] = [], X.delegateCount = 0, !E.setup || E.setup.call(D, j, s, Z) === false) if (D.addEventListener) D.addEventListener(f, Z);
                        if (E.add) if (E.add.call(D, I), !I.handler.guid) I.handler.guid = z.guid;
                        if (F) X.splice(X.delegateCount++, 0, I); else X.push(I);
                        a.event.global[f] = true;
                    }
                },
                remove: function(D, h, z, j, F) {
                    var l, Z, A, q, Q, I, E, X, f, s, L, P = N.hasData(D) && N.get(D);
                    if (!P || !(q = P.events)) return;
                    h = (h || "").match(y) || [ "" ], Q = h.length;
                    while (Q--) {
                        if (A = kn.exec(h[Q]) || [], f = L = A[1], s = (A[2] || "").split(".").sort(), !f) {
                            for (f in q) a.event.remove(D, f + h[Q], z, j, true);
                            continue;
                        }
                        E = a.event.special[f] || {}, f = (j ? E.delegateType : E.bindType) || f, X = q[f] || [],
                        A = A[2] && new RegExp("(^|\\.)" + s.join("\\.(?:.*\\.|)") + "(\\.|$)"), Z = l = X.length;
                        while (l--) if (I = X[l], (F || L === I.origType) && (!z || z.guid === I.guid) && (!A || A.test(I.namespace)) && (!j || j === I.selector || j === "**" && I.selector)) {
                            if (X.splice(l, 1), I.selector) X.delegateCount--;
                            if (E.remove) E.remove.call(D, I);
                        }
                        if (Z && !X.length) {
                            if (!E.teardown || E.teardown.call(D, s, P.handle) === false) a.removeEvent(D, f, P.handle);
                            delete q[f];
                        }
                    }
                    if (a.isEmptyObject(q)) N.remove(D, "handle events");
                },
                dispatch: function(D) {
                    var h, z, j, F, l, Z, A = new Array(arguments.length), q = a.event.fix(D), Q = (N.get(this, "events") || Object.create(null))[q.type] || [], I = a.event.special[q.type] || {};
                    for (A[0] = q, h = 1; h < arguments.length; h++) A[h] = arguments[h];
                    if (q.delegateTarget = this, I.preDispatch && I.preDispatch.call(this, q) === false) return;
                    Z = a.event.handlers.call(this, q, Q), h = 0;
                    while ((F = Z[h++]) && !q.isPropagationStopped()) {
                        q.currentTarget = F.elem, z = 0;
                        while ((l = F.handlers[z++]) && !q.isImmediatePropagationStopped()) if (!q.rnamespace || l.namespace === false || q.rnamespace.test(l.namespace)) if (q.handleObj = l,
                        q.data = l.data, j = ((a.event.special[l.origType] || {}).handle || l.handler).apply(F.elem, A),
                        j !== void 0) if ((q.result = j) === false) q.preventDefault(), q.stopPropagation();
                    }
                    if (I.postDispatch) I.postDispatch.call(this, q);
                    return q.result;
                },
                handlers: function(D, h) {
                    var z, j, F, l, Z, A = [], q = h.delegateCount, Q = D.target;
                    if (q && Q.nodeType && !(D.type === "click" && D.button >= 1)) for (;Q !== this; Q = Q.parentNode || this) if (Q.nodeType === 1 && !(D.type === "click" && Q.disabled === true)) {
                        for (l = [], Z = {}, z = 0; z < q; z++) {
                            if (j = h[z], F = j.selector + " ", Z[F] === void 0) Z[F] = j.needsContext ? a(F, this).index(Q) > -1 : a.find(F, this, null, [ Q ]).length;
                            if (Z[F]) l.push(j);
                        }
                        if (l.length) A.push({
                            elem: Q,
                            handlers: l
                        });
                    }
                    if (Q = this, q < h.length) A.push({
                        elem: Q,
                        handlers: h.slice(q)
                    });
                    return A;
                },
                addProp: function(D, h) {
                    Object.defineProperty(a.Event.prototype, D, {
                        enumerable: true,
                        configurable: true,
                        get: s(h) ? function() {
                            if (this.originalEvent) return h(this.originalEvent);
                        } : function() {
                            if (this.originalEvent) return this.originalEvent[D];
                        },
                        set: function(h) {
                            Object.defineProperty(this, D, {
                                enumerable: true,
                                configurable: true,
                                writable: true,
                                value: h
                            });
                        }
                    });
                },
                fix: function(D) {
                    return D[a.expando] ? D : new a.Event(D);
                },
                special: {
                    load: {
                        noBubble: true
                    },
                    click: {
                        setup: function(D) {
                            var h = this || D;
                            if (mX.test(h.type) && h.click && S(h, "input")) vS(h, "click", wQ);
                            return false;
                        },
                        trigger: function(D) {
                            var h = this || D;
                            if (mX.test(h.type) && h.click && S(h, "input")) vS(h, "click");
                            return true;
                        },
                        _default: function(D) {
                            var h = D.target;
                            return mX.test(h.type) && h.click && S(h, "input") && N.get(h, "click") || S(h, "a");
                        }
                    },
                    beforeunload: {
                        postDispatch: function(D) {
                            if (D.result !== void 0 && D.originalEvent) D.originalEvent.returnValue = D.result;
                        }
                    }
                }
            }, a.removeEvent = function(D, h, z) {
                if (D.removeEventListener) D.removeEventListener(h, z);
            }, a.Event = function(D, h) {
                if (!(this instanceof a.Event)) return new a.Event(D, h);
                if (D && D.type) this.originalEvent = D, this.type = D.type, this.isDefaultPrevented = D.defaultPrevented || D.defaultPrevented === void 0 && D.returnValue === false ? wQ : lp,
                this.target = D.target && D.target.nodeType === 3 ? D.target.parentNode : D.target,
                this.currentTarget = D.currentTarget, this.relatedTarget = D.relatedTarget; else this.type = D;
                if (h) a.extend(this, h);
                this.timeStamp = D && D.timeStamp || Date.now(), this[a.expando] = true;
            }, a.Event.prototype = {
                constructor: a.Event,
                isDefaultPrevented: lp,
                isPropagationStopped: lp,
                isImmediatePropagationStopped: lp,
                isSimulated: false,
                preventDefault: function() {
                    var D = this.originalEvent;
                    if (this.isDefaultPrevented = wQ, D && !this.isSimulated) D.preventDefault();
                },
                stopPropagation: function() {
                    var D = this.originalEvent;
                    if (this.isPropagationStopped = wQ, D && !this.isSimulated) D.stopPropagation();
                },
                stopImmediatePropagation: function() {
                    var D = this.originalEvent;
                    if (this.isImmediatePropagationStopped = wQ, D && !this.isSimulated) D.stopImmediatePropagation();
                    this.stopPropagation();
                }
            }, a.each({
                altKey: true,
                bubbles: true,
                cancelable: true,
                changedTouches: true,
                ctrlKey: true,
                detail: true,
                eventPhase: true,
                metaKey: true,
                pageX: true,
                pageY: true,
                shiftKey: true,
                view: true,
                char: true,
                code: true,
                charCode: true,
                key: true,
                keyCode: true,
                button: true,
                buttons: true,
                clientX: true,
                clientY: true,
                offsetX: true,
                offsetY: true,
                pointerId: true,
                pointerType: true,
                screenX: true,
                screenY: true,
                targetTouches: true,
                toElement: true,
                touches: true,
                which: true
            }, a.event.addProp), a.each({
                focus: "focusin",
                blur: "focusout"
            }, (function(D, h) {
                a.event.special[D] = {
                    setup: function() {
                        return vS(this, D, Hd), false;
                    },
                    trigger: function() {
                        return vS(this, D), true;
                    },
                    _default: function() {
                        return true;
                    },
                    delegateType: h
                };
            })), a.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, (function(D, h) {
                a.event.special[D] = {
                    delegateType: h,
                    bindType: h,
                    handle: function(D) {
                        var z, j = this, F = D.relatedTarget, l = D.handleObj;
                        if (!F || F !== j && !a.contains(j, F)) D.type = l.origType, z = l.handler.apply(this, arguments),
                        D.type = h;
                        return z;
                    }
                };
            })), a.fn.extend({
                on: function(D, h, z, j) {
                    return Az(this, D, h, z, j);
                },
                one: function(D, h, z, j) {
                    return Az(this, D, h, z, j, 1);
                },
                off: function(D, h, z) {
                    var j, F;
                    if (D && D.preventDefault && D.handleObj) return j = D.handleObj, a(D.delegateTarget).off(j.namespace ? j.origType + "." + j.namespace : j.origType, j.selector, j.handler),
                    this;
                    if (typeof D === "object") {
                        for (F in D) this.off(F, h, D[F]);
                        return this;
                    }
                    if (h === false || typeof h === "function") z = h, h = void 0;
                    if (z === false) z = lp;
                    return this.each((function() {
                        a.event.remove(this, D, z, h);
                    }));
                }
            });
            var Sq = /<script|<style|<link/i, PG = /checked\s*(?:[^=]|=\s*.checked.)/i, Tm = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            function FM(D, h) {
                if (S(D, "table") && S(h.nodeType !== 11 ? h : h.firstChild, "tr")) return a(D).children("tbody")[0] || D;
                return D;
            }
            function oF(D) {
                return D.type = (D.getAttribute("type") !== null) + "/" + D.type, D;
            }
            function an(D) {
                if ((D.type || "").slice(0, 5) === "true/") D.type = D.type.slice(5); else D.removeAttribute("type");
                return D;
            }
            function cz(D, h) {
                var z, j, F, l, Z, A, q;
                if (h.nodeType !== 1) return;
                if (N.hasData(D)) if (l = N.get(D), q = l.events, q) for (F in N.remove(h, "handle events"),
                q) for (z = 0, j = q[F].length; z < j; z++) a.event.add(h, F, q[F][z]);
                if (kN.hasData(D)) Z = kN.access(D), A = a.extend({}, Z), kN.set(h, A);
            }
            function Md(D, h) {
                var z = h.nodeName.toLowerCase();
                if (z === "input" && mX.test(D.type)) h.checked = D.checked; else if (z === "input" || z === "textarea") h.defaultValue = D.defaultValue;
            }
            function gU(D, h, z, j) {
                h = l(h);
                var F, Z, A, q, Q, I, E = 0, X = D.length, L = X - 1, P = h[0], x = s(P);
                if (x || X > 1 && typeof P === "string" && !f.checkClone && PG.test(P)) return D.each((function(F) {
                    var l = D.eq(F);
                    if (x) h[0] = P.call(this, F, l.html());
                    gU(l, h, z, j);
                }));
                if (X) {
                    if (F = vF(h, D[0].ownerDocument, false, D, j), Z = F.firstChild, F.childNodes.length === 1) F = Z;
                    if (Z || j) {
                        for (A = a.map(Jo(F, "script"), oF), q = A.length; E < X; E++) {
                            if (Q = F, E !== L) if (Q = a.clone(Q, true, true), q) a.merge(A, Jo(Q, "script"));
                            z.call(D[E], Q, E);
                        }
                        if (q) for (I = A[A.length - 1].ownerDocument, a.map(A, an), E = 0; E < q; E++) if (Q = A[E],
                        tR.test(Q.type || "") && !N.access(Q, "globalEval") && a.contains(I, Q)) if (Q.src && (Q.type || "").toLowerCase() !== "module") {
                            if (a._evalUrl && !Q.noModule) a._evalUrl(Q.src, {
                                nonce: Q.nonce || Q.getAttribute("nonce")
                            }, I);
                        } else n(Q.textContent.replace(Tm, ""), Q, I);
                    }
                }
                return D;
            }
            function xZ(D, h, z) {
                for (var j, F = h ? a.filter(h, D) : D, l = 0; (j = F[l]) != null; l++) {
                    if (!z && j.nodeType === 1) a.cleanData(Jo(j));
                    if (j.parentNode) {
                        if (z && Su(j)) Tx(Jo(j, "script"));
                        j.parentNode.removeChild(j);
                    }
                }
                return D;
            }
            a.extend({
                htmlPrefilter: function(D) {
                    return D;
                },
                clone: function(D, h, z) {
                    var j, F, l, Z, A = D.cloneNode(true), q = Su(D);
                    if (!f.noCloneChecked && (D.nodeType === 1 || D.nodeType === 11) && !a.isXMLDoc(D)) for (Z = Jo(A),
                    l = Jo(D), j = 0, F = l.length; j < F; j++) Md(l[j], Z[j]);
                    if (h) if (z) for (l = l || Jo(D), Z = Z || Jo(A), j = 0, F = l.length; j < F; j++) cz(l[j], Z[j]); else cz(D, A);
                    if (Z = Jo(A, "script"), Z.length > 0) Tx(Z, !q && Jo(D, "script"));
                    return A;
                },
                cleanData: function(D) {
                    for (var h, z, j, F = a.event.special, l = 0; (z = D[l]) !== void 0; l++) if (i(z)) {
                        if (h = z[N.expando]) {
                            if (h.events) for (j in h.events) if (F[j]) a.event.remove(z, j); else a.removeEvent(z, j, h.handle);
                            z[N.expando] = void 0;
                        }
                        if (z[kN.expando]) z[kN.expando] = void 0;
                    }
                }
            }), a.fn.extend({
                detach: function(D) {
                    return xZ(this, D, true);
                },
                remove: function(D) {
                    return xZ(this, D);
                },
                text: function(D) {
                    return b(this, (function(D) {
                        return D === void 0 ? a.text(this) : this.empty().each((function() {
                            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) this.textContent = D;
                        }));
                    }), null, D, arguments.length);
                },
                append: function() {
                    return gU(this, arguments, (function(D) {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            var h = FM(this, D);
                            h.appendChild(D);
                        }
                    }));
                },
                prepend: function() {
                    return gU(this, arguments, (function(D) {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            var h = FM(this, D);
                            h.insertBefore(D, h.firstChild);
                        }
                    }));
                },
                before: function() {
                    return gU(this, arguments, (function(D) {
                        if (this.parentNode) this.parentNode.insertBefore(D, this);
                    }));
                },
                after: function() {
                    return gU(this, arguments, (function(D) {
                        if (this.parentNode) this.parentNode.insertBefore(D, this.nextSibling);
                    }));
                },
                empty: function() {
                    for (var D, h = 0; (D = this[h]) != null; h++) if (D.nodeType === 1) a.cleanData(Jo(D, false)),
                    D.textContent = "";
                    return this;
                },
                clone: function(D, h) {
                    return D = D == null ? false : D, h = h == null ? D : h, this.map((function() {
                        return a.clone(this, D, h);
                    }));
                },
                html: function(D) {
                    return b(this, (function(D) {
                        var h = this[0] || {}, z = 0, j = this.length;
                        if (D === void 0 && h.nodeType === 1) return h.innerHTML;
                        if (typeof D === "string" && !Sq.test(D) && !Ki[(ol.exec(D) || [ "", "" ])[1].toLowerCase()]) {
                            D = a.htmlPrefilter(D);
                            try {
                                for (;z < j; z++) if (h = this[z] || {}, h.nodeType === 1) a.cleanData(Jo(h, false)),
                                h.innerHTML = D;
                                h = 0;
                            } catch (D) {}
                        }
                        if (h) this.empty().append(D);
                    }), null, D, arguments.length);
                },
                replaceWith: function() {
                    var D = [];
                    return gU(this, arguments, (function(h) {
                        var z = this.parentNode;
                        if (a.inArray(this, D) < 0) if (a.cleanData(Jo(this)), z) z.replaceChild(h, this);
                    }), D);
                }
            }), a.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, (function(D, h) {
                a.fn[D] = function(D) {
                    for (var z, j = [], F = a(D), l = F.length - 1, A = 0; A <= l; A++) z = A === l ? this : this.clone(true),
                    a(F[A])[h](z), Z.apply(j, z.get());
                    return this.pushStack(j);
                };
            }));
            var YJ = new RegExp("^(" + hO + ")(?!px)[a-z%]+$", "i"), oC = function(h) {
                var z = h.ownerDocument.defaultView;
                if (!z || !z.opener) z = D;
                return z.getComputedStyle(h);
            }, jg = function(D, h, z) {
                var j, F, l = {};
                for (F in h) l[F] = D.style[F], D.style[F] = h[F];
                for (F in j = z.call(D), h) D.style[F] = l[F];
                return j;
            }, ll = new RegExp(zi.join("|"), "i");
            function aJ(D, h, z) {
                var j, F, l, Z, A = D.style;
                if (z = z || oC(D), z) {
                    if (Z = z.getPropertyValue(h) || z[h], Z === "" && !Su(D)) Z = a.style(D, h);
                    if (!f.pixelBoxStyles() && YJ.test(Z) && ll.test(h)) j = A.width, F = A.minWidth,
                    l = A.maxWidth, A.minWidth = A.maxWidth = A.width = Z, Z = z.width, A.width = j,
                    A.minWidth = F, A.maxWidth = l;
                }
                return Z !== void 0 ? Z + "" : Z;
            }
            function nz(D, h) {
                return {
                    get: function() {
                        if (D()) return void delete this.get;
                        return (this.get = h).apply(this, arguments);
                    }
                };
            }
            (function() {
                function h() {
                    if (!I) return;
                    Q.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0",
                    I.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%",
                    dj.appendChild(Q).appendChild(I);
                    var h = D.getComputedStyle(I);
                    j = h.top !== "1%", q = z(h.marginLeft) === 12, I.style.right = "60%", Z = z(h.right) === 36,
                    F = z(h.width) === 36, I.style.position = "absolute", l = z(I.offsetWidth / 3) === 12,
                    dj.removeChild(Q), I = null;
                }
                function z(D) {
                    return Math.round(parseFloat(D));
                }
                var j, F, l, Z, A, q, Q = P.createElement("div"), I = P.createElement("div");
                if (!I.style) return;
                I.style.backgroundClip = "content-box", I.cloneNode(true).style.backgroundClip = "",
                f.clearCloneStyle = I.style.backgroundClip === "content-box", a.extend(f, {
                    boxSizingReliable: function() {
                        return h(), F;
                    },
                    pixelBoxStyles: function() {
                        return h(), Z;
                    },
                    pixelPosition: function() {
                        return h(), j;
                    },
                    reliableMarginLeft: function() {
                        return h(), q;
                    },
                    scrollboxSize: function() {
                        return h(), l;
                    },
                    reliableTrDimensions: function() {
                        var h, z, j, F;
                        if (A == null) h = P.createElement("table"), z = P.createElement("tr"), j = P.createElement("div"),
                        h.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", z.style.cssText = "border:1px solid",
                        z.style.height = "1px", j.style.height = "9px", j.style.display = "block", dj.appendChild(h).appendChild(z).appendChild(j),
                        F = D.getComputedStyle(z), A = parseInt(F.height, 10) + parseInt(F.borderTopWidth, 10) + parseInt(F.borderBottomWidth, 10) === z.offsetHeight,
                        dj.removeChild(h);
                        return A;
                    }
                });
            })();
            var lJ = [ "Webkit", "Moz", "ms" ], Xv = P.createElement("div").style, WY = {};
            function KY(D) {
                var h = D[0].toUpperCase() + D.slice(1), z = lJ.length;
                while (z--) if (D = lJ[z] + h, D in Xv) return D;
            }
            function WJ(D) {
                var h = a.cssProps[D] || WY[D];
                if (h) return h;
                if (D in Xv) return D;
                return WY[D] = KY(D) || D;
            }
            var PP = /^(none|table(?!-c[ea]).+)/, ce = /^--/, OK = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }, bv = {
                letterSpacing: "0",
                fontWeight: "400"
            };
            function je(D, h, z) {
                var j = VB.exec(h);
                return j ? Math.max(0, j[2] - (z || 0)) + (j[3] || "px") : h;
            }
            function HO(D, h, z, j, F, l) {
                var Z = h === "width" ? 1 : 0, A = 0, q = 0;
                if (z === (j ? "border" : "content")) return 0;
                for (;Z < 4; Z += 2) {
                    if (z === "margin") q += a.css(D, z + zi[Z], true, F);
                    if (!j) if (q += a.css(D, "padding" + zi[Z], true, F), z !== "padding") q += a.css(D, "border" + zi[Z] + "Width", true, F); else A += a.css(D, "border" + zi[Z] + "Width", true, F); else {
                        if (z === "content") q -= a.css(D, "padding" + zi[Z], true, F);
                        if (z !== "margin") q -= a.css(D, "border" + zi[Z] + "Width", true, F);
                    }
                }
                if (!j && l >= 0) q += Math.max(0, Math.ceil(D["offset" + h[0].toUpperCase() + h.slice(1)] - l - q - A - .5)) || 0;
                return q;
            }
            function pd(D, h, z) {
                var j = oC(D), F = !f.boxSizingReliable() || z, l = F && a.css(D, "boxSizing", false, j) === "border-box", Z = l, A = aJ(D, h, j), q = "offset" + h[0].toUpperCase() + h.slice(1);
                if (YJ.test(A)) {
                    if (!z) return A;
                    A = "auto";
                }
                if ((!f.boxSizingReliable() && l || !f.reliableTrDimensions() && S(D, "tr") || A === "auto" || !parseFloat(A) && a.css(D, "display", false, j) === "inline") && D.getClientRects().length) if (l = a.css(D, "boxSizing", false, j) === "border-box",
                Z = q in D, Z) A = D[q];
                return A = parseFloat(A) || 0, A + HO(D, h, z || (l ? "border" : "content"), Z, j, A) + "px";
            }
            function sd(D, h, z, j, F) {
                return new sd.prototype.init(D, h, z, j, F);
            }
            a.extend({
                cssHooks: {
                    opacity: {
                        get: function(D, h) {
                            if (h) {
                                var z = aJ(D, "opacity");
                                return z === "" ? "1" : z;
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: true,
                    columnCount: true,
                    fillOpacity: true,
                    flexGrow: true,
                    flexShrink: true,
                    fontWeight: true,
                    gridArea: true,
                    gridColumn: true,
                    gridColumnEnd: true,
                    gridColumnStart: true,
                    gridRow: true,
                    gridRowEnd: true,
                    gridRowStart: true,
                    lineHeight: true,
                    opacity: true,
                    order: true,
                    orphans: true,
                    widows: true,
                    zIndex: true,
                    zoom: true
                },
                cssProps: {},
                style: function(D, h, z, j) {
                    if (!D || D.nodeType === 3 || D.nodeType === 8 || !D.style) return;
                    var F, l, Z, A = V(h), q = ce.test(h), Q = D.style;
                    if (!q) h = WJ(A);
                    if (Z = a.cssHooks[h] || a.cssHooks[A], z !== void 0) {
                        if (l = typeof z, l === "string" && (F = VB.exec(z)) && F[1]) z = rB(D, h, F), l = "number";
                        if (z == null || z !== z) return;
                        if (l === "number" && !q) z += F && F[3] || (a.cssNumber[A] ? "" : "px");
                        if (!f.clearCloneStyle && z === "" && h.indexOf("background") === 0) Q[h] = "inherit";
                        if (!Z || !("set" in Z) || (z = Z.set(D, z, j)) !== void 0) if (q) Q.setProperty(h, z); else Q[h] = z;
                    } else {
                        if (Z && "get" in Z && (F = Z.get(D, false, j)) !== void 0) return F;
                        return Q[h];
                    }
                },
                css: function(D, h, z, j) {
                    var F, l, Z, A = V(h), q = ce.test(h);
                    if (!q) h = WJ(A);
                    if (Z = a.cssHooks[h] || a.cssHooks[A], Z && "get" in Z) F = Z.get(D, true, z);
                    if (F === void 0) F = aJ(D, h, j);
                    if (F === "normal" && h in bv) F = bv[h];
                    if (z === "" || z) return l = parseFloat(F), z === true || isFinite(l) ? l || 0 : F;
                    return F;
                }
            }), a.each([ "height", "width" ], (function(D, h) {
                a.cssHooks[h] = {
                    get: function(D, z, j) {
                        if (z) return PP.test(a.css(D, "display")) && (!D.getClientRects().length || !D.getBoundingClientRect().width) ? jg(D, OK, (function() {
                            return pd(D, h, j);
                        })) : pd(D, h, j);
                    },
                    set: function(D, z, j) {
                        var F, l = oC(D), Z = !f.scrollboxSize() && l.position === "absolute", A = Z || j, q = A && a.css(D, "boxSizing", false, l) === "border-box", Q = j ? HO(D, h, j, q, l) : 0;
                        if (q && Z) Q -= Math.ceil(D["offset" + h[0].toUpperCase() + h.slice(1)] - parseFloat(l[h]) - HO(D, h, "border", false, l) - .5);
                        if (Q && (F = VB.exec(z)) && (F[3] || "px") !== "px") D.style[h] = z, z = a.css(D, h);
                        return je(D, z, Q);
                    }
                };
            })), a.cssHooks.marginLeft = nz(f.reliableMarginLeft, (function(D, h) {
                if (h) return (parseFloat(aJ(D, "marginLeft")) || D.getBoundingClientRect().left - jg(D, {
                    marginLeft: 0
                }, (function() {
                    return D.getBoundingClientRect().left;
                }))) + "px";
            })), a.each({
                margin: "",
                padding: "",
                border: "Width"
            }, (function(D, h) {
                if (a.cssHooks[D + h] = {
                    expand: function(z) {
                        for (var j = 0, F = {}, l = typeof z === "string" ? z.split(" ") : [ z ]; j < 4; j++) F[D + zi[j] + h] = l[j] || l[j - 2] || l[0];
                        return F;
                    }
                }, D !== "margin") a.cssHooks[D + h].set = je;
            })), a.fn.extend({
                css: function(D, h) {
                    return b(this, (function(D, h, z) {
                        var j, F, l = {}, Z = 0;
                        if (Array.isArray(h)) {
                            for (j = oC(D), F = h.length; Z < F; Z++) l[h[Z]] = a.css(D, h[Z], false, j);
                            return l;
                        }
                        return z !== void 0 ? a.style(D, h, z) : a.css(D, h);
                    }), D, h, arguments.length > 1);
                }
            }), a.Tween = sd, sd.prototype = {
                constructor: sd,
                init: function(D, h, z, j, F, l) {
                    this.elem = D, this.prop = z, this.easing = F || a.easing._default, this.options = h,
                    this.start = this.now = this.cur(), this.end = j, this.unit = l || (a.cssNumber[z] ? "" : "px");
                },
                cur: function() {
                    var D = sd.propHooks[this.prop];
                    return D && D.get ? D.get(this) : sd.propHooks._default.get(this);
                },
                run: function(D) {
                    var h, z = sd.propHooks[this.prop];
                    if (this.options.duration) this.pos = h = a.easing[this.easing](D, this.options.duration * D, 0, 1, this.options.duration); else this.pos = h = D;
                    if (this.now = (this.end - this.start) * h + this.start, this.options.step) this.options.step.call(this.elem, this.now, this);
                    if (z && z.set) z.set(this); else sd.propHooks._default.set(this);
                    return this;
                }
            }, sd.prototype.init.prototype = sd.prototype, sd.propHooks = {
                _default: {
                    get: function(D) {
                        var h;
                        if (D.elem.nodeType !== 1 || D.elem[D.prop] != null && D.elem.style[D.prop] == null) return D.elem[D.prop];
                        return h = a.css(D.elem, D.prop, ""), !h || h === "auto" ? 0 : h;
                    },
                    set: function(D) {
                        if (a.fx.step[D.prop]) a.fx.step[D.prop](D); else if (D.elem.nodeType === 1 && (a.cssHooks[D.prop] || D.elem.style[WJ(D.prop)] != null)) a.style(D.elem, D.prop, D.now + D.unit); else D.elem[D.prop] = D.now;
                    }
                }
            }, sd.propHooks.scrollTop = sd.propHooks.scrollLeft = {
                set: function(D) {
                    if (D.elem.nodeType && D.elem.parentNode) D.elem[D.prop] = D.now;
                }
            }, a.easing = {
                linear: function(D) {
                    return D;
                },
                swing: function(D) {
                    return .5 - Math.cos(D * Math.PI) / 2;
                },
                _default: "swing"
            }, a.fx = sd.prototype.init, a.fx.step = {};
            var Cb, Ll, gH = /^(?:toggle|show|hide)$/, Bq = /queueHooks$/;
            function fB() {
                if (Ll) {
                    if (P.hidden === false && D.requestAnimationFrame) D.requestAnimationFrame(fB); else D.setTimeout(fB, a.fx.interval);
                    a.fx.tick();
                }
            }
            function GJ() {
                return D.setTimeout((function() {
                    Cb = void 0;
                })), Cb = Date.now();
            }
            function fd(D, h) {
                var z, j = 0, F = {
                    height: D
                };
                for (h = h ? 1 : 0; j < 4; j += 2 - h) z = zi[j], F["margin" + z] = F["padding" + z] = D;
                if (h) F.opacity = F.width = D;
                return F;
            }
            function YS(D, h, z) {
                for (var j, F = (WI.tweeners[h] || []).concat(WI.tweeners["*"]), l = 0, Z = F.length; l < Z; l++) if (j = F[l].call(z, h, D)) return j;
            }
            function Bn(D, h, z) {
                var j, F, l, Z, A, q, Q, I, E = "width" in h || "height" in h, X = this, f = {}, s = D.style, L = D.nodeType && Oq(D), P = N.get(D, "fxshow");
                if (!z.queue) {
                    if (Z = a._queueHooks(D, "fx"), Z.unqueued == null) Z.unqueued = 0, A = Z.empty.fire,
                    Z.empty.fire = function() {
                        if (!Z.unqueued) A();
                    };
                    Z.unqueued++, X.always((function() {
                        X.always((function() {
                            if (Z.unqueued--, !a.queue(D, "fx").length) Z.empty.fire();
                        }));
                    }));
                }
                for (j in h) if (F = h[j], gH.test(F)) {
                    if (delete h[j], l = l || F === "toggle", F === (L ? "hide" : "show")) if (F === "show" && P && P[j] !== void 0) L = true; else continue;
                    f[j] = P && P[j] || a.style(D, j);
                }
                if (q = !a.isEmptyObject(h), !q && a.isEmptyObject(f)) return;
                if (E && D.nodeType === 1) {
                    if (z.overflow = [ s.overflow, s.overflowX, s.overflowY ], Q = P && P.display, Q == null) Q = N.get(D, "display");
                    if (I = a.css(D, "display"), I === "none") if (Q) I = Q; else yi([ D ], true), Q = D.style.display || Q,
                    I = a.css(D, "display"), yi([ D ]);
                    if (I === "inline" || I === "inline-block" && Q != null) if (a.css(D, "float") === "none") {
                        if (!q) if (X.done((function() {
                            s.display = Q;
                        })), Q == null) I = s.display, Q = I === "none" ? "" : I;
                        s.display = "inline-block";
                    }
                }
                if (z.overflow) s.overflow = "hidden", X.always((function() {
                    s.overflow = z.overflow[0], s.overflowX = z.overflow[1], s.overflowY = z.overflow[2];
                }));
                for (j in q = false, f) {
                    if (!q) {
                        if (P) {
                            if ("hidden" in P) L = P.hidden;
                        } else P = N.access(D, "fxshow", {
                            display: Q
                        });
                        if (l) P.hidden = !L;
                        if (L) yi([ D ], true);
                        X.done((function() {
                            if (!L) yi([ D ]);
                            for (j in N.remove(D, "fxshow"), f) a.style(D, j, f[j]);
                        }));
                    }
                    if (q = YS(L ? P[j] : 0, j, X), !(j in P)) if (P[j] = q.start, L) q.end = q.start,
                    q.start = 0;
                }
            }
            function Tk(D, h) {
                var z, j, F, l, Z;
                for (z in D) {
                    if (j = V(z), F = h[j], l = D[z], Array.isArray(l)) F = l[1], l = D[z] = l[0];
                    if (z !== j) D[j] = l, delete D[z];
                    if (Z = a.cssHooks[j], Z && "expand" in Z) {
                        for (z in l = Z.expand(l), delete D[j], l) if (!(z in D)) D[z] = l[z], h[z] = F;
                    } else h[j] = F;
                }
            }
            function WI(D, h, z) {
                var j, F, l = 0, Z = WI.prefilters.length, A = a.Deferred().always((function() {
                    delete q.elem;
                })), q = function() {
                    if (F) return false;
                    for (var h = Cb || GJ(), z = Math.max(0, Q.startTime + Q.duration - h), j = z / Q.duration || 0, l = 1 - j, Z = 0, q = Q.tweens.length; Z < q; Z++) Q.tweens[Z].run(l);
                    if (A.notifyWith(D, [ Q, l, z ]), l < 1 && q) return z;
                    if (!q) A.notifyWith(D, [ Q, 1, 0 ]);
                    return A.resolveWith(D, [ Q ]), false;
                }, Q = A.promise({
                    elem: D,
                    props: a.extend({}, h),
                    opts: a.extend(true, {
                        specialEasing: {},
                        easing: a.easing._default
                    }, z),
                    originalProperties: h,
                    originalOptions: z,
                    startTime: Cb || GJ(),
                    duration: z.duration,
                    tweens: [],
                    createTween: function(h, z) {
                        var j = a.Tween(D, Q.opts, h, z, Q.opts.specialEasing[h] || Q.opts.easing);
                        return Q.tweens.push(j), j;
                    },
                    stop: function(h) {
                        var z = 0, j = h ? Q.tweens.length : 0;
                        if (F) return this;
                        for (F = true; z < j; z++) Q.tweens[z].run(1);
                        if (h) A.notifyWith(D, [ Q, 1, 0 ]), A.resolveWith(D, [ Q, h ]); else A.rejectWith(D, [ Q, h ]);
                        return this;
                    }
                }), I = Q.props;
                for (Tk(I, Q.opts.specialEasing); l < Z; l++) if (j = WI.prefilters[l].call(Q, D, I, Q.opts),
                j) {
                    if (s(j.stop)) a._queueHooks(Q.elem, Q.opts.queue).stop = j.stop.bind(j);
                    return j;
                }
                if (a.map(I, YS, Q), s(Q.opts.start)) Q.opts.start.call(D, Q);
                return Q.progress(Q.opts.progress).done(Q.opts.done, Q.opts.complete).fail(Q.opts.fail).always(Q.opts.always),
                a.fx.timer(a.extend(q, {
                    elem: D,
                    anim: Q,
                    queue: Q.opts.queue
                })), Q;
            }
            a.Animation = a.extend(WI, {
                tweeners: {
                    "*": [ function(D, h) {
                        var z = this.createTween(D, h);
                        return rB(z.elem, D, VB.exec(h), z), z;
                    } ]
                },
                tweener: function(D, h) {
                    if (s(D)) h = D, D = [ "*" ]; else D = D.match(y);
                    for (var z, j = 0, F = D.length; j < F; j++) z = D[j], WI.tweeners[z] = WI.tweeners[z] || [],
                    WI.tweeners[z].unshift(h);
                },
                prefilters: [ Bn ],
                prefilter: function(D, h) {
                    if (h) WI.prefilters.unshift(D); else WI.prefilters.push(D);
                }
            }), a.speed = function(D, h, z) {
                var j = D && typeof D === "object" ? a.extend({}, D) : {
                    complete: z || !z && h || s(D) && D,
                    duration: D,
                    easing: z && h || h && !s(h) && h
                };
                if (a.fx.off) j.duration = 0; else if (typeof j.duration !== "number") if (j.duration in a.fx.speeds) j.duration = a.fx.speeds[j.duration]; else j.duration = a.fx.speeds._default;
                if (j.queue == null || j.queue === true) j.queue = "fx";
                return j.old = j.complete, j.complete = function() {
                    if (s(j.old)) j.old.call(this);
                    if (j.queue) a.dequeue(this, j.queue);
                }, j;
            }, a.fn.extend({
                fadeTo: function(D, h, z, j) {
                    return this.filter(Oq).css("opacity", 0).show().end().animate({
                        opacity: h
                    }, D, z, j);
                },
                animate: function(D, h, z, j) {
                    var F = a.isEmptyObject(D), l = a.speed(h, z, j), Z = function() {
                        var h = WI(this, a.extend({}, D), l);
                        if (F || N.get(this, "finish")) h.stop(true);
                    };
                    return Z.finish = Z, F || l.queue === false ? this.each(Z) : this.queue(l.queue, Z);
                },
                stop: function(D, h, z) {
                    var j = function(D) {
                        var h = D.stop;
                        delete D.stop, h(z);
                    };
                    if (typeof D !== "string") z = h, h = D, D = void 0;
                    if (h) this.queue(D || "fx", []);
                    return this.each((function() {
                        var h = true, F = D != null && D + "queueHooks", l = a.timers, Z = N.get(this);
                        if (F) {
                            if (Z[F] && Z[F].stop) j(Z[F]);
                        } else for (F in Z) if (Z[F] && Z[F].stop && Bq.test(F)) j(Z[F]);
                        for (F = l.length; F--; ) if (l[F].elem === this && (D == null || l[F].queue === D)) l[F].anim.stop(z),
                        h = false, l.splice(F, 1);
                        if (h || !z) a.dequeue(this, D);
                    }));
                },
                finish: function(D) {
                    if (D !== false) D = D || "fx";
                    return this.each((function() {
                        var h, z = N.get(this), j = z[D + "queue"], F = z[D + "queueHooks"], l = a.timers, Z = j ? j.length : 0;
                        if (z.finish = true, a.queue(this, D, []), F && F.stop) F.stop.call(this, true);
                        for (h = l.length; h--; ) if (l[h].elem === this && l[h].queue === D) l[h].anim.stop(true),
                        l.splice(h, 1);
                        for (h = 0; h < Z; h++) if (j[h] && j[h].finish) j[h].finish.call(this);
                        delete z.finish;
                    }));
                }
            }), a.each([ "toggle", "show", "hide" ], (function(D, h) {
                var z = a.fn[h];
                a.fn[h] = function(D, j, F) {
                    return D == null || typeof D === "boolean" ? z.apply(this, arguments) : this.animate(fd(h, true), D, j, F);
                };
            })), a.each({
                slideDown: fd("show"),
                slideUp: fd("hide"),
                slideToggle: fd("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, (function(D, h) {
                a.fn[D] = function(D, z, j) {
                    return this.animate(h, D, z, j);
                };
            })), a.timers = [], a.fx.tick = function() {
                var D, h = 0, z = a.timers;
                for (Cb = Date.now(); h < z.length; h++) if (D = z[h], !D() && z[h] === D) z.splice(h--, 1);
                if (!z.length) a.fx.stop();
                Cb = void 0;
            }, a.fx.timer = function(D) {
                a.timers.push(D), a.fx.start();
            }, a.fx.interval = 13, a.fx.start = function() {
                if (Ll) return;
                Ll = true, fB();
            }, a.fx.stop = function() {
                Ll = null;
            }, a.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, a.fn.delay = function(h, z) {
                return h = a.fx ? a.fx.speeds[h] || h : h, z = z || "fx", this.queue(z, (function(z, j) {
                    var F = D.setTimeout(z, h);
                    j.stop = function() {
                        D.clearTimeout(F);
                    };
                }));
            }, function() {
                var D = P.createElement("input"), h = P.createElement("select"), z = h.appendChild(P.createElement("option"));
                D.type = "checkbox", f.checkOn = D.value !== "", f.optSelected = z.selected, D = P.createElement("input"),
                D.value = "t", D.type = "radio", f.radioValue = D.value === "t";
            }();
            var fU, FC = a.expr.attrHandle;
            a.fn.extend({
                attr: function(D, h) {
                    return b(this, a.attr, D, h, arguments.length > 1);
                },
                removeAttr: function(D) {
                    return this.each((function() {
                        a.removeAttr(this, D);
                    }));
                }
            }), a.extend({
                attr: function(D, h, z) {
                    var j, F, l = D.nodeType;
                    if (l === 3 || l === 8 || l === 2) return;
                    if (typeof D.getAttribute === "undefined") return a.prop(D, h, z);
                    if (l !== 1 || !a.isXMLDoc(D)) F = a.attrHooks[h.toLowerCase()] || (a.expr.match.bool.test(h) ? fU : void 0);
                    if (z !== void 0) {
                        if (z === null) return void a.removeAttr(D, h);
                        if (F && "set" in F && (j = F.set(D, z, h)) !== void 0) return j;
                        return D.setAttribute(h, z + ""), z;
                    }
                    if (F && "get" in F && (j = F.get(D, h)) !== null) return j;
                    return j = a.find.attr(D, h), j == null ? void 0 : j;
                },
                attrHooks: {
                    type: {
                        set: function(D, h) {
                            if (!f.radioValue && h === "radio" && S(D, "input")) {
                                var z = D.value;
                                if (D.setAttribute("type", h), z) D.value = z;
                                return h;
                            }
                        }
                    }
                },
                removeAttr: function(D, h) {
                    var z, j = 0, F = h && h.match(y);
                    if (F && D.nodeType === 1) while (z = F[j++]) D.removeAttribute(z);
                }
            }), fU = {
                set: function(D, h, z) {
                    if (h === false) a.removeAttr(D, z); else D.setAttribute(z, z);
                    return z;
                }
            }, a.each(a.expr.match.bool.source.match(/\w+/g), (function(D, h) {
                var z = FC[h] || a.find.attr;
                FC[h] = function(D, h, j) {
                    var F, l, Z = h.toLowerCase();
                    if (!j) l = FC[Z], FC[Z] = F, F = z(D, h, j) != null ? Z : null, FC[Z] = l;
                    return F;
                };
            }));
            var Ri = /^(?:input|select|textarea|button)$/i, OV = /^(?:a|area)$/i;
            if (a.fn.extend({
                prop: function(D, h) {
                    return b(this, a.prop, D, h, arguments.length > 1);
                },
                removeProp: function(D) {
                    return this.each((function() {
                        delete this[a.propFix[D] || D];
                    }));
                }
            }), a.extend({
                prop: function(D, h, z) {
                    var j, F, l = D.nodeType;
                    if (l === 3 || l === 8 || l === 2) return;
                    if (l !== 1 || !a.isXMLDoc(D)) h = a.propFix[h] || h, F = a.propHooks[h];
                    if (z !== void 0) {
                        if (F && "set" in F && (j = F.set(D, z, h)) !== void 0) return j;
                        return D[h] = z;
                    }
                    if (F && "get" in F && (j = F.get(D, h)) !== null) return j;
                    return D[h];
                },
                propHooks: {
                    tabIndex: {
                        get: function(D) {
                            var h = a.find.attr(D, "tabindex");
                            if (h) return parseInt(h, 10);
                            if (Ri.test(D.nodeName) || OV.test(D.nodeName) && D.href) return 0;
                            return -1;
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), !f.optSelected) a.propHooks.selected = {
                get: function(D) {
                    var h = D.parentNode;
                    if (h && h.parentNode) h.parentNode.selectedIndex;
                    return null;
                },
                set: function(D) {
                    var h = D.parentNode;
                    if (h) if (h.selectedIndex, h.parentNode) h.parentNode.selectedIndex;
                }
            };
            function UE(D) {
                var h = D.match(y) || [];
                return h.join(" ");
            }
            function Sg(D) {
                return D.getAttribute && D.getAttribute("class") || "";
            }
            function Iz(D) {
                if (Array.isArray(D)) return D;
                if (typeof D === "string") return D.match(y) || [];
                return [];
            }
            a.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], (function() {
                a.propFix[this.toLowerCase()] = this;
            })), a.fn.extend({
                addClass: function(D) {
                    var h, z, j, F, l, Z, A, q = 0;
                    if (s(D)) return this.each((function(h) {
                        a(this).addClass(D.call(this, h, Sg(this)));
                    }));
                    if (h = Iz(D), h.length) while (z = this[q++]) if (F = Sg(z), j = z.nodeType === 1 && " " + UE(F) + " ",
                    j) {
                        Z = 0;
                        while (l = h[Z++]) if (j.indexOf(" " + l + " ") < 0) j += l + " ";
                        if (A = UE(j), F !== A) z.setAttribute("class", A);
                    }
                    return this;
                },
                removeClass: function(D) {
                    var h, z, j, F, l, Z, A, q = 0;
                    if (s(D)) return this.each((function(h) {
                        a(this).removeClass(D.call(this, h, Sg(this)));
                    }));
                    if (!arguments.length) return this.attr("class", "");
                    if (h = Iz(D), h.length) while (z = this[q++]) if (F = Sg(z), j = z.nodeType === 1 && " " + UE(F) + " ",
                    j) {
                        Z = 0;
                        while (l = h[Z++]) while (j.indexOf(" " + l + " ") > -1) j = j.replace(" " + l + " ", " ");
                        if (A = UE(j), F !== A) z.setAttribute("class", A);
                    }
                    return this;
                },
                toggleClass: function(D, h) {
                    var z = typeof D, j = z === "string" || Array.isArray(D);
                    if (typeof h === "boolean" && j) return h ? this.addClass(D) : this.removeClass(D);
                    if (s(D)) return this.each((function(z) {
                        a(this).toggleClass(D.call(this, z, Sg(this), h), h);
                    }));
                    return this.each((function() {
                        var h, F, l, Z;
                        if (j) {
                            F = 0, l = a(this), Z = Iz(D);
                            while (h = Z[F++]) if (l.hasClass(h)) l.removeClass(h); else l.addClass(h);
                        } else if (D === void 0 || z === "boolean") {
                            if (h = Sg(this), h) N.set(this, "__className__", h);
                            if (this.setAttribute) this.setAttribute("class", h || D === false ? "" : N.get(this, "__className__") || "");
                        }
                    }));
                },
                hasClass: function(D) {
                    var h, z, j = 0;
                    h = " " + D + " ";
                    while (z = this[j++]) if (z.nodeType === 1 && (" " + UE(Sg(z)) + " ").indexOf(h) > -1) return true;
                    return false;
                }
            });
            var YB = /\r/g;
            a.fn.extend({
                val: function(D) {
                    var h, z, j, F = this[0];
                    if (!arguments.length) {
                        if (F) {
                            if (h = a.valHooks[F.type] || a.valHooks[F.nodeName.toLowerCase()], h && "get" in h && (z = h.get(F, "value")) !== void 0) return z;
                            if (z = F.value, typeof z === "string") return z.replace(YB, "");
                            return z == null ? "" : z;
                        }
                        return;
                    }
                    return j = s(D), this.each((function(z) {
                        var F;
                        if (this.nodeType !== 1) return;
                        if (j) F = D.call(this, z, a(this).val()); else F = D;
                        if (F == null) F = ""; else if (typeof F === "number") F += ""; else if (Array.isArray(F)) F = a.map(F, (function(D) {
                            return D == null ? "" : D + "";
                        }));
                        if (h = a.valHooks[this.type] || a.valHooks[this.nodeName.toLowerCase()], !h || !("set" in h) || h.set(this, F, "value") === void 0) this.value = F;
                    }));
                }
            }), a.extend({
                valHooks: {
                    option: {
                        get: function(D) {
                            var h = a.find.attr(D, "value");
                            return h != null ? h : UE(a.text(D));
                        }
                    },
                    select: {
                        get: function(D) {
                            var h, z, j, F = D.options, l = D.selectedIndex, Z = D.type === "select-one", A = Z ? null : [], q = Z ? l + 1 : F.length;
                            if (l < 0) j = q; else j = Z ? l : 0;
                            for (;j < q; j++) if (z = F[j], (z.selected || j === l) && !z.disabled && (!z.parentNode.disabled || !S(z.parentNode, "optgroup"))) {
                                if (h = a(z).val(), Z) return h;
                                A.push(h);
                            }
                            return A;
                        },
                        set: function(D, h) {
                            var z, j, F = D.options, l = a.makeArray(h), Z = F.length;
                            while (Z--) if (j = F[Z], j.selected = a.inArray(a.valHooks.option.get(j), l) > -1) z = true;
                            if (!z) D.selectedIndex = -1;
                            return l;
                        }
                    }
                }
            }), a.each([ "radio", "checkbox" ], (function() {
                if (a.valHooks[this] = {
                    set: function(D, h) {
                        if (Array.isArray(h)) return D.checked = a.inArray(a(D).val(), h) > -1;
                    }
                }, !f.checkOn) a.valHooks[this].get = function(D) {
                    return D.getAttribute("value") === null ? "on" : D.value;
                };
            })), f.focusin = "onfocusin" in D;
            var Cp = /^(?:focusinfocus|focusoutblur)$/, Af = function(D) {
                D.stopPropagation();
            };
            if (a.extend(a.event, {
                trigger: function(h, z, j, F) {
                    var l, Z, A, q, Q, E, X, f, x = [ j || P ], n = I.call(h, "type") ? h.type : h, w = I.call(h, "namespace") ? h.namespace.split(".") : [];
                    if (Z = f = A = j = j || P, j.nodeType === 3 || j.nodeType === 8) return;
                    if (Cp.test(n + a.event.triggered)) return;
                    if (n.indexOf(".") > -1) w = n.split("."), n = w.shift(), w.sort();
                    if (Q = n.indexOf(":") < 0 && "on" + n, h = h[a.expando] ? h : new a.Event(n, typeof h === "object" && h),
                    h.isTrigger = F ? 2 : 3, h.namespace = w.join("."), h.rnamespace = h.namespace ? new RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    h.result = void 0, !h.target) h.target = j;
                    if (z = z == null ? [ h ] : a.makeArray(z, [ h ]), X = a.event.special[n] || {},
                    !F && X.trigger && X.trigger.apply(j, z) === false) return;
                    if (!F && !X.noBubble && !L(j)) {
                        if (q = X.delegateType || n, !Cp.test(q + n)) Z = Z.parentNode;
                        for (;Z; Z = Z.parentNode) x.push(Z), A = Z;
                        if (A === (j.ownerDocument || P)) x.push(A.defaultView || A.parentWindow || D);
                    }
                    l = 0;
                    while ((Z = x[l++]) && !h.isPropagationStopped()) {
                        if (f = Z, h.type = l > 1 ? q : X.bindType || n, E = (N.get(Z, "events") || Object.create(null))[h.type] && N.get(Z, "handle"),
                        E) E.apply(Z, z);
                        if (E = Q && Z[Q], E && E.apply && i(Z)) if (h.result = E.apply(Z, z), h.result === false) h.preventDefault();
                    }
                    if (h.type = n, !F && !h.isDefaultPrevented()) if ((!X._default || X._default.apply(x.pop(), z) === false) && i(j)) if (Q && s(j[n]) && !L(j)) {
                        if (A = j[Q], A) j[Q] = null;
                        if (a.event.triggered = n, h.isPropagationStopped()) f.addEventListener(n, Af);
                        if (j[n](), h.isPropagationStopped()) f.removeEventListener(n, Af);
                        if (a.event.triggered = void 0, A) j[Q] = A;
                    }
                    return h.result;
                },
                simulate: function(D, h, z) {
                    var j = a.extend(new a.Event, z, {
                        type: D,
                        isSimulated: true
                    });
                    a.event.trigger(j, null, h);
                }
            }), a.fn.extend({
                trigger: function(D, h) {
                    return this.each((function() {
                        a.event.trigger(D, h, this);
                    }));
                },
                triggerHandler: function(D, h) {
                    var z = this[0];
                    if (z) return a.event.trigger(D, h, z, true);
                }
            }), !f.focusin) a.each({
                focus: "focusin",
                blur: "focusout"
            }, (function(D, h) {
                var z = function(D) {
                    a.event.simulate(h, D.target, a.event.fix(D));
                };
                a.event.special[h] = {
                    setup: function() {
                        var j = this.ownerDocument || this.document || this, F = N.access(j, h);
                        if (!F) j.addEventListener(D, z, true);
                        N.access(j, h, (F || 0) + 1);
                    },
                    teardown: function() {
                        var j = this.ownerDocument || this.document || this, F = N.access(j, h) - 1;
                        if (!F) j.removeEventListener(D, z, true), N.remove(j, h); else N.access(j, h, F);
                    }
                };
            }));
            var yQ = D.location, TV = {
                guid: Date.now()
            }, Ta = /\?/;
            a.parseXML = function(h) {
                var z, j;
                if (!h || typeof h !== "string") return null;
                try {
                    z = (new D.DOMParser).parseFromString(h, "text/xml");
                } catch (D) {}
                if (j = z && z.getElementsByTagName("parsererror")[0], !z || j) a.error("Invalid XML: " + (j ? a.map(j.childNodes, (function(D) {
                    return D.textContent;
                })).join("\n") : h));
                return z;
            };
            var oB = /\[\]$/, te = /\r?\n/g, ID = /^(?:submit|button|image|reset|file)$/i, pU = /^(?:input|select|textarea|keygen)/i;
            function zA(D, h, z, j) {
                var F;
                if (Array.isArray(h)) a.each(h, (function(h, F) {
                    if (z || oB.test(D)) j(D, F); else zA(D + "[" + (typeof F === "object" && F != null ? h : "") + "]", F, z, j);
                })); else if (!z && w(h) === "object") for (F in h) zA(D + "[" + F + "]", h[F], z, j); else j(D, h);
            }
            a.param = function(D, h) {
                var z, j = [], F = function(D, h) {
                    var z = s(h) ? h() : h;
                    j[j.length] = encodeURIComponent(D) + "=" + encodeURIComponent(z == null ? "" : z);
                };
                if (D == null) return "";
                if (Array.isArray(D) || D.jquery && !a.isPlainObject(D)) a.each(D, (function() {
                    F(this.name, this.value);
                })); else for (z in D) zA(z, D[z], h, F);
                return j.join("&");
            }, a.fn.extend({
                serialize: function() {
                    return a.param(this.serializeArray());
                },
                serializeArray: function() {
                    return this.map((function() {
                        var D = a.prop(this, "elements");
                        return D ? a.makeArray(D) : this;
                    })).filter((function() {
                        var D = this.type;
                        return this.name && !a(this).is(":disabled") && pU.test(this.nodeName) && !ID.test(D) && (this.checked || !mX.test(D));
                    })).map((function(D, h) {
                        var z = a(this).val();
                        if (z == null) return null;
                        if (Array.isArray(z)) return a.map(z, (function(D) {
                            return {
                                name: h.name,
                                value: D.replace(te, "\r\n")
                            };
                        }));
                        return {
                            name: h.name,
                            value: z.replace(te, "\r\n")
                        };
                    })).get();
                }
            });
            var rv = /%20/g, yq = /#.*$/, fp = /([?&])_=[^&]*/, vN = /^(.*?):[ \t]*([^\r\n]*)$/gm, Te = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, ju = /^(?:GET|HEAD)$/, sB = /^\/\//, jS = {}, rM = {}, qM = "*/".concat("*"), Ja = P.createElement("a");
            function Qj(D) {
                return function(h, z) {
                    if (typeof h !== "string") z = h, h = "*";
                    var j, F = 0, l = h.toLowerCase().match(y) || [];
                    if (s(z)) while (j = l[F++]) if (j[0] === "+") j = j.slice(1) || "*", (D[j] = D[j] || []).unshift(z); else (D[j] = D[j] || []).push(z);
                };
            }
            function cY(D, h, z, j) {
                var F = {}, l = D === rM;
                function Z(A) {
                    var q;
                    return F[A] = true, a.each(D[A] || [], (function(D, A) {
                        var Q = A(h, z, j);
                        if (typeof Q === "string" && !l && !F[Q]) return h.dataTypes.unshift(Q), Z(Q), false; else if (l) return !(q = Q);
                    })), q;
                }
                return Z(h.dataTypes[0]) || !F["*"] && Z("*");
            }
            function gn(D, h) {
                var z, j, F = a.ajaxSettings.flatOptions || {};
                for (z in h) if (h[z] !== void 0) (F[z] ? D : j || (j = {}))[z] = h[z];
                if (j) a.extend(true, D, j);
                return D;
            }
            function Kf(D, h, z) {
                var j, F, l, Z, A = D.contents, q = D.dataTypes;
                while (q[0] === "*") if (q.shift(), j === void 0) j = D.mimeType || h.getResponseHeader("Content-Type");
                if (j) for (F in A) if (A[F] && A[F].test(j)) {
                    q.unshift(F);
                    break;
                }
                if (q[0] in z) l = q[0]; else {
                    for (F in z) {
                        if (!q[0] || D.converters[F + " " + q[0]]) {
                            l = F;
                            break;
                        }
                        if (!Z) Z = F;
                    }
                    l = l || Z;
                }
                if (l) {
                    if (l !== q[0]) q.unshift(l);
                    return z[l];
                }
            }
            function Ys(D, h, z, j) {
                var F, l, Z, A, q, Q = {}, I = D.dataTypes.slice();
                if (I[1]) for (Z in D.converters) Q[Z.toLowerCase()] = D.converters[Z];
                l = I.shift();
                while (l) {
                    if (D.responseFields[l]) z[D.responseFields[l]] = h;
                    if (!q && j && D.dataFilter) h = D.dataFilter(h, D.dataType);
                    if (q = l, l = I.shift(), l) if (l === "*") l = q; else if (q !== "*" && q !== l) {
                        if (Z = Q[q + " " + l] || Q["* " + l], !Z) for (F in Q) if (A = F.split(" "), A[1] === l) if (Z = Q[q + " " + A[0]] || Q["* " + A[0]],
                        Z) {
                            if (Z === true) Z = Q[F]; else if (Q[F] !== true) l = A[0], I.unshift(A[1]);
                            break;
                        }
                        if (Z !== true) if (Z && D.throws) h = Z(h); else try {
                            h = Z(h);
                        } catch (D) {
                            return {
                                state: "parsererror",
                                error: Z ? D : "No conversion from " + q + " to " + l
                            };
                        }
                    }
                }
                return {
                    state: "success",
                    data: h
                };
            }
            Ja.href = yQ.href, a.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: yQ.href,
                    type: "GET",
                    isLocal: Te.test(yQ.protocol),
                    global: true,
                    processData: true,
                    async: true,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": qM,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": true,
                        "text json": JSON.parse,
                        "text xml": a.parseXML
                    },
                    flatOptions: {
                        url: true,
                        context: true
                    }
                },
                ajaxSetup: function(D, h) {
                    return h ? gn(gn(D, a.ajaxSettings), h) : gn(a.ajaxSettings, D);
                },
                ajaxPrefilter: Qj(jS),
                ajaxTransport: Qj(rM),
                ajax: function(h, z) {
                    if (typeof h === "object") z = h, h = void 0;
                    z = z || {};
                    var j, F, l, Z, A, q, Q, I, E, X, f = a.ajaxSetup({}, z), s = f.context || f, L = f.context && (s.nodeType || s.jquery) ? a(s) : a.event, x = a.Deferred(), n = a.Callbacks("once memory"), w = f.statusCode || {}, J = {}, d = {}, H = "canceled", K = {
                        readyState: 0,
                        getResponseHeader: function(D) {
                            var h;
                            if (Q) {
                                if (!Z) {
                                    Z = {};
                                    while (h = vN.exec(l)) Z[h[1].toLowerCase() + " "] = (Z[h[1].toLowerCase() + " "] || []).concat(h[2]);
                                }
                                h = Z[D.toLowerCase() + " "];
                            }
                            return h == null ? null : h.join(", ");
                        },
                        getAllResponseHeaders: function() {
                            return Q ? l : null;
                        },
                        setRequestHeader: function(D, h) {
                            if (Q == null) D = d[D.toLowerCase()] = d[D.toLowerCase()] || D, J[D] = h;
                            return this;
                        },
                        overrideMimeType: function(D) {
                            if (Q == null) f.mimeType = D;
                            return this;
                        },
                        statusCode: function(D) {
                            var h;
                            if (D) if (Q) K.always(D[K.status]); else for (h in D) w[h] = [ w[h], D[h] ];
                            return this;
                        },
                        abort: function(D) {
                            var h = D || H;
                            if (j) j.abort(h);
                            return c(0, h), this;
                        }
                    };
                    if (x.promise(K), f.url = ((h || f.url || yQ.href) + "").replace(sB, yQ.protocol + "//"),
                    f.type = z.method || z.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(y) || [ "" ],
                    f.crossDomain == null) {
                        q = P.createElement("a");
                        try {
                            q.href = f.url, q.href = q.href, f.crossDomain = Ja.protocol + "//" + Ja.host !== q.protocol + "//" + q.host;
                        } catch (D) {
                            f.crossDomain = true;
                        }
                    }
                    if (f.data && f.processData && typeof f.data !== "string") f.data = a.param(f.data, f.traditional);
                    if (cY(jS, f, z, K), Q) return K;
                    if (I = a.event && f.global, I && a.active++ === 0) a.event.trigger("ajaxStart");
                    if (f.type = f.type.toUpperCase(), f.hasContent = !ju.test(f.type), F = f.url.replace(yq, ""),
                    !f.hasContent) {
                        if (X = f.url.slice(F.length), f.data && (f.processData || typeof f.data === "string")) F += (Ta.test(F) ? "&" : "?") + f.data,
                        delete f.data;
                        if (f.cache === false) F = F.replace(fp, "$1"), X = (Ta.test(F) ? "&" : "?") + "_=" + TV.guid++ + X;
                        f.url = F + X;
                    } else if (f.data && f.processData && (f.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) f.data = f.data.replace(rv, "+");
                    if (f.ifModified) {
                        if (a.lastModified[F]) K.setRequestHeader("If-Modified-Since", a.lastModified[F]);
                        if (a.etag[F]) K.setRequestHeader("If-None-Match", a.etag[F]);
                    }
                    if (f.data && f.hasContent && f.contentType !== false || z.contentType) K.setRequestHeader("Content-Type", f.contentType);
                    for (E in K.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + (f.dataTypes[0] !== "*" ? ", " + qM + "; q=0.01" : "") : f.accepts["*"]),
                    f.headers) K.setRequestHeader(E, f.headers[E]);
                    if (f.beforeSend && (f.beforeSend.call(s, K, f) === false || Q)) return K.abort();
                    if (H = "abort", n.add(f.complete), K.done(f.success), K.fail(f.error), j = cY(rM, f, z, K),
                    !j) c(-1, "No Transport"); else {
                        if (K.readyState = 1, I) L.trigger("ajaxSend", [ K, f ]);
                        if (Q) return K;
                        if (f.async && f.timeout > 0) A = D.setTimeout((function() {
                            K.abort("timeout");
                        }), f.timeout);
                        try {
                            Q = false, j.send(J, c);
                        } catch (D) {
                            if (Q) throw D;
                            c(-1, D);
                        }
                    }
                    function c(h, z, Z, q) {
                        var E, X, P, J, d, H = z;
                        if (Q) return;
                        if (Q = true, A) D.clearTimeout(A);
                        if (j = void 0, l = q || "", K.readyState = h > 0 ? 4 : 0, E = h >= 200 && h < 300 || h === 304,
                        Z) J = Kf(f, K, Z);
                        if (!E && a.inArray("script", f.dataTypes) > -1 && a.inArray("json", f.dataTypes) < 0) f.converters["text script"] = function() {};
                        if (J = Ys(f, J, K, E), E) {
                            if (f.ifModified) {
                                if (d = K.getResponseHeader("Last-Modified"), d) a.lastModified[F] = d;
                                if (d = K.getResponseHeader("etag"), d) a.etag[F] = d;
                            }
                            if (h === 204 || f.type === "HEAD") H = "nocontent"; else if (h === 304) H = "notmodified"; else H = J.state,
                            X = J.data, P = J.error, E = !P;
                        } else if (P = H, h || !H) if (H = "error", h < 0) h = 0;
                        if (K.status = h, K.statusText = (z || H) + "", E) x.resolveWith(s, [ X, H, K ]); else x.rejectWith(s, [ K, H, P ]);
                        if (K.statusCode(w), w = void 0, I) L.trigger(E ? "ajaxSuccess" : "ajaxError", [ K, f, E ? X : P ]);
                        if (n.fireWith(s, [ K, H ]), I) if (L.trigger("ajaxComplete", [ K, f ]), ! --a.active) a.event.trigger("ajaxStop");
                    }
                    return K;
                },
                getJSON: function(D, h, z) {
                    return a.get(D, h, z, "json");
                },
                getScript: function(D, h) {
                    return a.get(D, void 0, h, "script");
                }
            }), a.each([ "get", "post" ], (function(D, h) {
                a[h] = function(D, z, j, F) {
                    if (s(z)) F = F || j, j = z, z = void 0;
                    return a.ajax(a.extend({
                        url: D,
                        type: h,
                        dataType: F,
                        data: z,
                        success: j
                    }, a.isPlainObject(D) && D));
                };
            })), a.ajaxPrefilter((function(D) {
                var h;
                for (h in D.headers) if (h.toLowerCase() === "content-type") D.contentType = D.headers[h] || "";
            })), a._evalUrl = function(D, h, z) {
                return a.ajax({
                    url: D,
                    type: "GET",
                    dataType: "script",
                    cache: true,
                    async: false,
                    global: false,
                    converters: {
                        "text script": function() {}
                    },
                    dataFilter: function(D) {
                        a.globalEval(D, h, z);
                    }
                });
            }, a.fn.extend({
                wrapAll: function(D) {
                    var h;
                    if (this[0]) {
                        if (s(D)) D = D.call(this[0]);
                        if (h = a(D, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode) h.insertBefore(this[0]);
                        h.map((function() {
                            var D = this;
                            while (D.firstElementChild) D = D.firstElementChild;
                            return D;
                        })).append(this);
                    }
                    return this;
                },
                wrapInner: function(D) {
                    if (s(D)) return this.each((function(h) {
                        a(this).wrapInner(D.call(this, h));
                    }));
                    return this.each((function() {
                        var h = a(this), z = h.contents();
                        if (z.length) z.wrapAll(D); else h.append(D);
                    }));
                },
                wrap: function(D) {
                    var h = s(D);
                    return this.each((function(z) {
                        a(this).wrapAll(h ? D.call(this, z) : D);
                    }));
                },
                unwrap: function(D) {
                    return this.parent(D).not("body").each((function() {
                        a(this).replaceWith(this.childNodes);
                    })), this;
                }
            }), a.expr.pseudos.hidden = function(D) {
                return !a.expr.pseudos.visible(D);
            }, a.expr.pseudos.visible = function(D) {
                return !!(D.offsetWidth || D.offsetHeight || D.getClientRects().length);
            }, a.ajaxSettings.xhr = function() {
                try {
                    return new D.XMLHttpRequest;
                } catch (D) {}
            };
            var wx = {
                0: 200,
                1223: 204
            }, zD = a.ajaxSettings.xhr();
            f.cors = !!zD && "withCredentials" in zD, f.ajax = zD = !!zD, a.ajaxTransport((function(h) {
                var z, j;
                if (f.cors || zD && !h.crossDomain) return {
                    send: function(F, l) {
                        var Z, A = h.xhr();
                        if (A.open(h.type, h.url, h.async, h.username, h.password), h.xhrFields) for (Z in h.xhrFields) A[Z] = h.xhrFields[Z];
                        if (h.mimeType && A.overrideMimeType) A.overrideMimeType(h.mimeType);
                        if (!h.crossDomain && !F["X-Requested-With"]) F["X-Requested-With"] = "XMLHttpRequest";
                        for (Z in F) A.setRequestHeader(Z, F[Z]);
                        if (z = function(D) {
                            return function() {
                                if (z) if (z = j = A.onload = A.onerror = A.onabort = A.ontimeout = A.onreadystatechange = null,
                                D === "abort") A.abort(); else if (D === "error") if (typeof A.status !== "number") l(0, "error"); else l(A.status, A.statusText); else l(wx[A.status] || A.status, A.statusText, (A.responseType || "text") !== "text" || typeof A.responseText !== "string" ? {
                                    binary: A.response
                                } : {
                                    text: A.responseText
                                }, A.getAllResponseHeaders());
                            };
                        }, A.onload = z(), j = A.onerror = A.ontimeout = z("error"), A.onabort !== void 0) A.onabort = j; else A.onreadystatechange = function() {
                            if (A.readyState === 4) D.setTimeout((function() {
                                if (z) j();
                            }));
                        };
                        z = z("abort");
                        try {
                            A.send(h.hasContent && h.data || null);
                        } catch (D) {
                            if (z) throw D;
                        }
                    },
                    abort: function() {
                        if (z) z();
                    }
                };
            })), a.ajaxPrefilter((function(D) {
                if (D.crossDomain) D.contents.script = false;
            })), a.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(D) {
                        return a.globalEval(D), D;
                    }
                }
            }), a.ajaxPrefilter("script", (function(D) {
                if (D.cache === void 0) D.cache = false;
                if (D.crossDomain) D.type = "GET";
            })), a.ajaxTransport("script", (function(D) {
                if (D.crossDomain || D.scriptAttrs) {
                    var h, z;
                    return {
                        send: function(j, F) {
                            h = a("<script>").attr(D.scriptAttrs || {}).prop({
                                charset: D.scriptCharset,
                                src: D.url
                            }).on("load error", z = function(D) {
                                if (h.remove(), z = null, D) F(D.type === "error" ? 404 : 200, D.type);
                            }), P.head.appendChild(h[0]);
                        },
                        abort: function() {
                            if (z) z();
                        }
                    };
                }
            }));
            var FZ = [], qm = /(=)\?(?=&|$)|\?\?/, hl;
            a.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var D = FZ.pop() || a.expando + "_" + TV.guid++;
                    return this[D] = true, D;
                }
            }), a.ajaxPrefilter("json jsonp", (function(h, z, j) {
                var F, l, Z, A = h.jsonp !== false && (qm.test(h.url) ? "url" : typeof h.data === "string" && (h.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && qm.test(h.data) && "data");
                if (A || h.dataTypes[0] === "jsonp") {
                    if (F = h.jsonpCallback = s(h.jsonpCallback) ? h.jsonpCallback() : h.jsonpCallback,
                    A) h[A] = h[A].replace(qm, "$1" + F); else if (h.jsonp !== false) h.url += (Ta.test(h.url) ? "&" : "?") + h.jsonp + "=" + F;
                    return h.converters["script json"] = function() {
                        if (!Z) a.error(F + " was not called");
                        return Z[0];
                    }, h.dataTypes[0] = "json", l = D[F], D[F] = function() {
                        Z = arguments;
                    }, j.always((function() {
                        if (l === void 0) a(D).removeProp(F); else D[F] = l;
                        if (h[F]) h.jsonpCallback = z.jsonpCallback, FZ.push(F);
                        if (Z && s(l)) l(Z[0]);
                        Z = l = void 0;
                    })), "script";
                }
            })), f.createHTMLDocument = (hl = P.implementation.createHTMLDocument("").body,
            hl.innerHTML = "<form></form><form></form>", hl.childNodes.length === 2), a.parseHTML = function(D, h, z) {
                if (typeof D !== "string") return [];
                if (typeof h === "boolean") z = h, h = false;
                var j, F, l;
                if (!h) if (f.createHTMLDocument) h = P.implementation.createHTMLDocument(""), j = h.createElement("base"),
                j.href = P.location.href, h.head.appendChild(j); else h = P;
                if (F = T.exec(D), l = !z && [], F) return [ h.createElement(F[1]) ];
                if (F = vF([ D ], h, l), l && l.length) a(l).remove();
                return a.merge([], F.childNodes);
            }, a.fn.load = function(D, h, z) {
                var j, F, l, Z = this, A = D.indexOf(" ");
                if (A > -1) j = UE(D.slice(A)), D = D.slice(0, A);
                if (s(h)) z = h, h = void 0; else if (h && typeof h === "object") F = "POST";
                if (Z.length > 0) a.ajax({
                    url: D,
                    type: F || "GET",
                    dataType: "html",
                    data: h
                }).done((function(D) {
                    l = arguments, Z.html(j ? a("<div>").append(a.parseHTML(D)).find(j) : D);
                })).always(z && function(D, h) {
                    Z.each((function() {
                        z.apply(this, l || [ D.responseText, h, D ]);
                    }));
                });
                return this;
            }, a.expr.pseudos.animated = function(D) {
                return a.grep(a.timers, (function(h) {
                    return D === h.elem;
                })).length;
            }, a.offset = {
                setOffset: function(D, h, z) {
                    var j, F, l, Z, A, q, Q, I = a.css(D, "position"), E = a(D), X = {};
                    if (I === "static") D.style.position = "relative";
                    if (A = E.offset(), l = a.css(D, "top"), q = a.css(D, "left"), Q = (I === "absolute" || I === "fixed") && (l + q).indexOf("auto") > -1,
                    Q) j = E.position(), Z = j.top, F = j.left; else Z = parseFloat(l) || 0, F = parseFloat(q) || 0;
                    if (s(h)) h = h.call(D, z, a.extend({}, A));
                    if (h.top != null) X.top = h.top - A.top + Z;
                    if (h.left != null) X.left = h.left - A.left + F;
                    if ("using" in h) h.using.call(D, X); else E.css(X);
                }
            }, a.fn.extend({
                offset: function(D) {
                    if (arguments.length) return D === void 0 ? this : this.each((function(h) {
                        a.offset.setOffset(this, D, h);
                    }));
                    var h, z, j = this[0];
                    if (!j) return;
                    if (!j.getClientRects().length) return {
                        top: 0,
                        left: 0
                    };
                    return h = j.getBoundingClientRect(), z = j.ownerDocument.defaultView, {
                        top: h.top + z.pageYOffset,
                        left: h.left + z.pageXOffset
                    };
                },
                position: function() {
                    if (!this[0]) return;
                    var D, h, z, j = this[0], F = {
                        top: 0,
                        left: 0
                    };
                    if (a.css(j, "position") === "fixed") h = j.getBoundingClientRect(); else {
                        h = this.offset(), z = j.ownerDocument, D = j.offsetParent || z.documentElement;
                        while (D && (D === z.body || D === z.documentElement) && a.css(D, "position") === "static") D = D.parentNode;
                        if (D && D !== j && D.nodeType === 1) F = a(D).offset(), F.top += a.css(D, "borderTopWidth", true),
                        F.left += a.css(D, "borderLeftWidth", true);
                    }
                    return {
                        top: h.top - F.top - a.css(j, "marginTop", true),
                        left: h.left - F.left - a.css(j, "marginLeft", true)
                    };
                },
                offsetParent: function() {
                    return this.map((function() {
                        var D = this.offsetParent;
                        while (D && a.css(D, "position") === "static") D = D.offsetParent;
                        return D || dj;
                    }));
                }
            }), a.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, (function(D, h) {
                var z = "pageYOffset" === h;
                a.fn[D] = function(j) {
                    return b(this, (function(D, j, F) {
                        var l;
                        if (L(D)) l = D; else if (D.nodeType === 9) l = D.defaultView;
                        if (F === void 0) return l ? l[h] : D[j];
                        if (l) l.scrollTo(!z ? F : l.pageXOffset, z ? F : l.pageYOffset); else D[j] = F;
                    }), D, j, arguments.length);
                };
            })), a.each([ "top", "left" ], (function(D, h) {
                a.cssHooks[h] = nz(f.pixelPosition, (function(D, z) {
                    if (z) return z = aJ(D, h), YJ.test(z) ? a(D).position()[h] + "px" : z;
                }));
            })), a.each({
                Height: "height",
                Width: "width"
            }, (function(D, h) {
                a.each({
                    padding: "inner" + D,
                    content: h,
                    "": "outer" + D
                }, (function(z, j) {
                    a.fn[j] = function(F, l) {
                        var Z = arguments.length && (z || typeof F !== "boolean"), A = z || (F === true || l === true ? "margin" : "border");
                        return b(this, (function(h, z, F) {
                            var l;
                            if (L(h)) return j.indexOf("outer") === 0 ? h["inner" + D] : h.document.documentElement["client" + D];
                            if (h.nodeType === 9) return l = h.documentElement, Math.max(h.body["scroll" + D], l["scroll" + D], h.body["offset" + D], l["offset" + D], l["client" + D]);
                            return F === void 0 ? a.css(h, z, A) : a.style(h, z, F, A);
                        }), h, Z ? F : void 0, Z);
                    };
                }));
            })), a.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], (function(D, h) {
                a.fn[h] = function(D) {
                    return this.on(h, D);
                };
            })), a.fn.extend({
                bind: function(D, h, z) {
                    return this.on(D, null, h, z);
                },
                unbind: function(D, h) {
                    return this.off(D, null, h);
                },
                delegate: function(D, h, z, j) {
                    return this.on(h, D, z, j);
                },
                undelegate: function(D, h, z) {
                    return arguments.length === 1 ? this.off(D, "**") : this.off(h, D || "**", z);
                },
                hover: function(D, h) {
                    return this.mouseenter(D).mouseleave(h || D);
                }
            }), a.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), (function(D, h) {
                a.fn[h] = function(D, z) {
                    return arguments.length > 0 ? this.on(h, null, D, z) : this.trigger(h);
                };
            }));
            var Ap = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            if (a.proxy = function(D, h) {
                var z, j, l;
                if (typeof h === "string") z = D[h], h = D, D = z;
                if (!s(D)) return;
                return j = F.call(arguments, 2), l = function() {
                    return D.apply(h || this, j.concat(F.call(arguments)));
                }, l.guid = D.guid = D.guid || a.guid++, l;
            }, a.holdReady = function(D) {
                if (D) a.readyWait++; else a.ready(true);
            }, a.isArray = Array.isArray, a.parseJSON = JSON.parse, a.nodeName = S, a.isFunction = s,
            a.isWindow = L, a.camelCase = V, a.type = w, a.now = Date.now, a.isNumeric = function(D) {
                var h = a.type(D);
                return (h === "number" || h === "string") && !isNaN(D - parseFloat(D));
            }, a.trim = function(D) {
                return D == null ? "" : (D + "").replace(Ap, "");
            }, typeof define === "function" && define.amd) define("jquery", [], (function() {
                return a;
            }));
            var BC = D.jQuery, Qw = D.$;
            if (a.noConflict = function(h) {
                if (D.$ === a) D.$ = Qw;
                if (h && D.jQuery === a) D.jQuery = BC;
                return a;
            }, typeof h === "undefined") D.jQuery = D.$ = a;
            return a;
        }));
    }, {} ],
    2: [ function(D, h, z) {
        "use strict";
        var j = void 0 && (void 0).__importDefault || function(D) {
            return D && D.__esModule ? D : {
                default: D
            };
        };
        Object.defineProperty(z, "__esModule", {
            value: true
        });
        const F = j(D("jquery"));
        async function l() {
            var D;
            const h = await chrome.storage.local.get([ "enabled" ]), z = (D = h.enabled) !== null && D !== void 0 ? D : true;
            if (z) (0, F.default)("#disabled-text").addClass("d-none"), (0, F.default)("#enabled-text").removeClass("d-none"),
            (0, F.default)("#enable-btn").addClass("enabled"), (0, F.default)("#enable-btn").text("Disable"),
            (0, F.default)("#status").text("Enabled"); else (0, F.default)("#enabled-text").addClass("d-none"),
            (0, F.default)("#disabled-text").removeClass("d-none"), (0, F.default)("#enable-btn").removeClass("enabled"),
            (0, F.default)("#enable-btn").text("Enable"), (0, F.default)("#status").text("Disabled");
        }
        (0, F.default)((async () => {
            await l(), (0, F.default)("#enable-btn").on("click", (async () => {
                var D;
                const h = await chrome.storage.local.get([ "enabled" ]), z = (D = h.enabled) !== null && D !== void 0 ? D : true;
                chrome.storage.local.set({
                    enabled: !z
                });
            })), chrome.storage.onChanged.addListener((async D => {
                if (D.enabled) l();
            }));
        }));
    }, {
        jquery: 1
    } ]
}, {}, [ 2 ]);