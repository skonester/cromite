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
        (function(z) {
            (function() {
                "use strict";
                if (z.env.NODE_ENV === "production") h.exports = D("2p"); else h.exports = D("TD");
            }).call(this);
        }).call(this, D("_process"));
    }, {
        TD: 2,
        "2p": 3,
        _process: 12
    } ],
    2: [ function(D, h, z) {
        "use strict";
        var j = Object.create, F = Object.defineProperty, l = Object.getOwnPropertyDescriptor, Z = Object.getOwnPropertyNames, A = Object.getPrototypeOf, q = Object.prototype.hasOwnProperty, Q = (D, h) => {
            for (var z in h) F(D, z, {
                get: h[z],
                enumerable: true
            });
        }, I = (D, h, z, j) => {
            if (h && typeof h === "object" || typeof h === "function") for (let A of Z(h)) if (!q.call(D, A) && A !== z) F(D, A, {
                get: () => h[A],
                enumerable: !(j = l(h, A)) || j.enumerable
            });
            return D;
        }, E = (D, h, z) => (z = D != null ? j(A(D)) : {}, I(h || !D || !D.__esModule ? F(z, "default", {
            value: D,
            enumerable: true
        }) : z, D)), X = D => I(F({}, "__esModule", {
            value: true
        }), D), f = {};
        Q(f, {
            Provider: () => lJ,
            ReactReduxContext: () => a,
            batch: () => PP,
            connect: () => aJ,
            createDispatchHook: () => KY,
            createSelectorHook: () => T,
            createStoreHook: () => Xv,
            shallowEqual: () => Tx,
            useDispatch: () => WJ,
            useSelector: () => e,
            useStore: () => WY
        }), h.exports = X(f);
        var s = E(D("react")), L = D("use-sync-external-store/with-selector.js"), P = E(D("react")), x = "default" in P ? P["default"] : P, n = Symbol.for(`react-redux-context`), w = typeof globalThis !== "undefined" ? globalThis : {};
        function J() {
            if (!x.createContext) return {};
            const D = w[n] ?? (w[n] = new Map);
            let h = D.get(x.createContext);
            if (!h) {
                if (h = x.createContext(null), true) h.displayName = "ReactRedux";
                D.set(x.createContext, h);
            }
            return h;
        }
        var a = J(), d = () => {
            throw new Error("uSES not initialized!");
        };
        function H(D = a) {
            return function h() {
                const z = x.useContext(D);
                if (!z) throw new Error("could not find react-redux context value; please ensure the component is wrapped in a <Provider>");
                return z;
            };
        }
        var K = H(), c = d, M = D => {
            c = D;
        }, S = (D, h) => D === h;
        function T(D = a) {
            const h = D === a ? K : H(D), z = (D, z = {}) => {
                const {equalityFn: j = S, devModeChecks: F = {}} = typeof z === "function" ? {
                    equalityFn: z
                } : z;
                if (true) {
                    if (!D) throw new Error(`You must pass a selector to useSelector`);
                    if (typeof D !== "function") throw new Error(`You must pass a function as a selector to useSelector`);
                    if (typeof j !== "function") throw new Error(`You must pass a function as an equality function to useSelector`);
                }
                const {store: l, subscription: Z, getServerState: A, stabilityCheck: q, identityFunctionCheck: Q} = h(), I = x.useRef(true), E = x.useCallback({
                    [D.name](h) {
                        const z = D(h);
                        if (true) {
                            const {identityFunctionCheck: l, stabilityCheck: Z} = {
                                stabilityCheck: q,
                                identityFunctionCheck: Q,
                                ...F
                            };
                            if (Z === "always" || Z === "once" && I.current) {
                                const F = D(h);
                                if (!j(z, F)) {
                                    let D;
                                    try {
                                        throw new Error;
                                    } catch (h) {
                                        ({stack: D} = h);
                                    }
                                }
                            }
                            if (l === "always" || l === "once" && I.current) if (z === h) {
                                let D;
                                try {
                                    throw new Error;
                                } catch (h) {
                                    ({stack: D} = h);
                                }
                            }
                            if (I.current) I.current = false;
                        }
                        return z;
                    }
                }[D.name], [ D, q, F.stabilityCheck ]), X = c(Z.addNestedSub, l.getState, A || l.getState, E, j);
                return x.useDebugValue(X), X;
            };
            return Object.assign(z, {
                withTypes: () => z
            }), z;
        }
        var e = T(), v = Symbol.for("react.element"), m = Symbol.for("react.portal"), G = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), t = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), y = Symbol.for("react.context"), k = Symbol.for("react.server_context"), W = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), o = Symbol.for("react.offscreen"), b = Symbol.for("react.client.reference"), B = W, Y = u;
        function R(D) {
            if (typeof D === "string" || typeof D === "function") return true;
            if (D === G || D === t || D === r || D === U || D === p || D === o) return true;
            if (typeof D === "object" && D !== null) if (D.$$typeof === O || D.$$typeof === u || D.$$typeof === C || D.$$typeof === y || D.$$typeof === W || D.$$typeof === b || D.getModuleId !== void 0) return true;
            return false;
        }
        function V(D) {
            if (typeof D === "object" && D !== null) {
                const h = D.$$typeof;
                switch (h) {
                  case v:
                    {
                        const z = D.type;
                        switch (z) {
                          case G:
                          case t:
                          case r:
                          case U:
                          case p:
                            return z;

                          default:
                            {
                                const D = z && z.$$typeof;
                                switch (D) {
                                  case k:
                                  case y:
                                  case W:
                                  case O:
                                  case u:
                                  case C:
                                    return D;

                                  default:
                                    return h;
                                }
                            }
                        }
                    }

                  case m:
                    return h;
                }
            }
            return;
        }
        function i(D) {
            return V(D) === y;
        }
        function g(D) {
            return V(D) === u;
        }
        function N(D) {
            if (typeof console !== "undefined" && typeof console.error === "function") ;
            try {
                throw new Error(D);
            } catch (D) {}
        }
        function kN(D, h) {
            if (!D) throw new Error(`Unexpected value for ${h} in connect.`); else if (h === "mapStateToProps" || h === "mapDispatchToProps") if (!Object.prototype.hasOwnProperty.call(D, "dependsOnOwnProps")) N(`The selector for ${h} of connect did not specify a value for dependsOnOwnProps.`);
        }
        function Ar(D, h, z) {
            kN(D, "mapStateToProps"), kN(h, "mapDispatchToProps"), kN(z, "mergeProps");
        }
        function qk(D, h, z, j, {areStatesEqual: F, areOwnPropsEqual: l, areStatePropsEqual: Z}) {
            let A = false, q, Q, I, E, X;
            function f(F, l) {
                return q = F, Q = l, I = D(q, Q), E = h(j, Q), X = z(I, E, Q), A = true, X;
            }
            function s() {
                if (I = D(q, Q), h.dependsOnOwnProps) E = h(j, Q);
                return X = z(I, E, Q), X;
            }
            function L() {
                if (D.dependsOnOwnProps) I = D(q, Q);
                if (h.dependsOnOwnProps) E = h(j, Q);
                return X = z(I, E, Q), X;
            }
            function P() {
                const h = D(q, Q), j = !Z(h, I);
                if (I = h, j) X = z(I, E, Q);
                return X;
            }
            function x(D, h) {
                const z = !l(h, Q), j = !F(D, q, h, Q);
                if (q = D, Q = h, z && j) return s();
                if (z) return L();
                if (j) return P();
                return X;
            }
            return function D(h, z) {
                return A ? x(h, z) : f(h, z);
            };
        }
        function xk(D, {initMapStateToProps: h, initMapDispatchToProps: z, initMergeProps: j, ...F}) {
            const l = h(D, F), Z = z(D, F), A = j(D, F);
            if (true) Ar(l, Z, A);
            return qk(l, Z, A, D, F);
        }
        function LD(D, h) {
            const z = {};
            for (const j in D) {
                const F = D[j];
                if (typeof F === "function") z[j] = (...D) => h(F(...D));
            }
            return z;
        }
        function hO(D) {
            if (typeof D !== "object" || D === null) return false;
            const h = Object.getPrototypeOf(D);
            if (h === null) return true;
            let z = h;
            while (Object.getPrototypeOf(z) !== null) z = Object.getPrototypeOf(z);
            return h === z;
        }
        function VB(D, h, z) {
            if (!hO(D)) N(`${z}() in ${h} must return a plain object. Instead received ${D}.`);
        }
        function zi(D) {
            return function h(z) {
                const j = D(z);
                function F() {
                    return j;
                }
                return F.dependsOnOwnProps = false, F;
            };
        }
        function dj(D) {
            return D.dependsOnOwnProps ? Boolean(D.dependsOnOwnProps) : D.length !== 1;
        }
        function Su(D, h) {
            return function z(j, {displayName: F}) {
                const l = function D(h, z) {
                    return l.dependsOnOwnProps ? l.mapToProps(h, z) : l.mapToProps(h, void 0);
                };
                return l.dependsOnOwnProps = true, l.mapToProps = function z(j, Z) {
                    l.mapToProps = D, l.dependsOnOwnProps = dj(D);
                    let A = l(j, Z);
                    if (typeof A === "function") l.mapToProps = A, l.dependsOnOwnProps = dj(A), A = l(j, Z);
                    if (true) VB(A, F, h);
                    return A;
                }, l;
            };
        }
        function Cv(D, h) {
            return (z, j) => {
                throw new Error(`Invalid value of type ${typeof D} for ${h} argument when connecting component ${j.wrappedComponentName}.`);
            };
        }
        function Oq(D) {
            return D && typeof D === "object" ? zi((h => LD(D, h))) : !D ? zi((D => ({
                dispatch: D
            }))) : typeof D === "function" ? Su(D, "mapDispatchToProps") : Cv(D, "mapDispatchToProps");
        }
        function rB(D) {
            return !D ? zi((() => ({}))) : typeof D === "function" ? Su(D, "mapStateToProps") : Cv(D, "mapStateToProps");
        }
        function KU(D, h, z) {
            return {
                ...z,
                ...D,
                ...h
            };
        }
        function BW(D) {
            return function h(z, {displayName: j, areMergedPropsEqual: F}) {
                let l = false, Z;
                return function h(z, A, q) {
                    const Q = D(z, A, q);
                    if (l) {
                        if (!F(Q, Z)) Z = Q;
                    } else if (l = true, Z = Q, true) VB(Z, j, "mergeProps");
                    return Z;
                };
            };
        }
        function yi(D) {
            return !D ? () => KU : typeof D === "function" ? BW(D) : Cv(D, "mergeProps");
        }
        function mX(D) {
            D();
        }
        function ol() {
            let D = null, h = null;
            return {
                clear() {
                    D = null, h = null;
                },
                notify() {
                    mX((() => {
                        let h = D;
                        while (h) h.callback(), h = h.next;
                    }));
                },
                get() {
                    const h = [];
                    let z = D;
                    while (z) h.push(z), z = z.next;
                    return h;
                },
                subscribe(z) {
                    let j = true;
                    const F = h = {
                        callback: z,
                        next: null,
                        prev: h
                    };
                    if (F.prev) F.prev.next = F; else D = F;
                    return function z() {
                        if (!j || D === null) return;
                        if (j = false, F.next) F.next.prev = F.prev; else h = F.prev;
                        if (F.prev) F.prev.next = F.next; else D = F.next;
                    };
                }
            };
        }
        var tR = {
            notify() {},
            get: () => []
        };
        function An(D, h) {
            let z, j = tR, F = 0, l = false;
            function Z(D) {
                I();
                const h = j.subscribe(D);
                let z = false;
                return () => {
                    if (!z) z = true, h(), E();
                };
            }
            function A() {
                j.notify();
            }
            function q() {
                if (s.onStateChange) s.onStateChange();
            }
            function Q() {
                return l;
            }
            function I() {
                if (F++, !z) z = h ? h.addNestedSub(q) : D.subscribe(q), j = ol();
            }
            function E() {
                if (F--, z && F === 0) z(), z = void 0, j.clear(), j = tR;
            }
            function X() {
                if (!l) l = true, I();
            }
            function f() {
                if (l) l = false, E();
            }
            const s = {
                addNestedSub: Z,
                notifyNestedSubs: A,
                handleChangeWrapper: q,
                isSubscribed: Q,
                trySubscribe: X,
                tryUnsubscribe: f,
                getListeners: () => j
            };
            return s;
        }
        var qe = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined"), LL = typeof navigator !== "undefined" && navigator.product === "ReactNative", Ki = qe || LL ? x.useLayoutEffect : x.useEffect;
        function Jo(D, h) {
            if (D === h) return D !== 0 || h !== 0 || 1 / D === 1 / h; else return D !== D && h !== h;
        }
        function Tx(D, h) {
            if (Jo(D, h)) return true;
            if (typeof D !== "object" || D === null || typeof h !== "object" || h === null) return false;
            const z = Object.keys(D), j = Object.keys(h);
            if (z.length !== j.length) return false;
            for (let j = 0; j < z.length; j++) if (!Object.prototype.hasOwnProperty.call(h, z[j]) || !Jo(D[z[j]], h[z[j]])) return false;
            return true;
        }
        var By = {
            childContextTypes: true,
            contextType: true,
            contextTypes: true,
            defaultProps: true,
            displayName: true,
            getDefaultProps: true,
            getDerivedStateFromError: true,
            getDerivedStateFromProps: true,
            mixins: true,
            propTypes: true,
            type: true
        }, vF = {
            name: true,
            length: true,
            prototype: true,
            caller: true,
            callee: true,
            arguments: true,
            arity: true
        }, kn = {
            $$typeof: true,
            render: true,
            defaultProps: true,
            displayName: true,
            propTypes: true
        }, wQ = {
            $$typeof: true,
            compare: true,
            defaultProps: true,
            displayName: true,
            propTypes: true,
            type: true
        }, lp = {
            [B]: kn,
            [Y]: wQ
        };
        function Hd(D) {
            if (g(D)) return wQ;
            return lp[D["$$typeof"]] || By;
        }
        var rG = Object.defineProperty, Az = Object.getOwnPropertyNames, vS = Object.getOwnPropertySymbols, Sq = Object.getOwnPropertyDescriptor, PG = Object.getPrototypeOf, Tm = Object.prototype;
        function FM(D, h) {
            if (typeof h !== "string") {
                if (Tm) {
                    const z = PG(h);
                    if (z && z !== Tm) FM(D, z);
                }
                let z = Az(h);
                if (vS) z = z.concat(vS(h));
                const j = Hd(D), F = Hd(h);
                for (let l = 0; l < z.length; ++l) {
                    const Z = z[l];
                    if (!vF[Z] && !(F && F[Z]) && !(j && j[Z])) {
                        const z = Sq(h, Z);
                        try {
                            rG(D, Z, z);
                        } catch (D) {}
                    }
                }
            }
            return D;
        }
        var oF = d, an = D => {
            oF = D;
        }, cz = [ null, null ], Md = D => {
            try {
                return JSON.stringify(D);
            } catch (h) {
                return String(D);
            }
        };
        function gU(D, h, z) {
            Ki((() => D(...h)), z);
        }
        function xZ(D, h, z, j, F, l) {
            if (D.current = j, z.current = false, F.current) F.current = null, l();
        }
        function YJ(D, h, z, j, F, l, Z, A, q, Q, I) {
            if (!D) return () => {};
            let E = false, X = null;
            const f = () => {
                if (E || !A.current) return;
                const D = h.getState();
                let z, f;
                try {
                    z = j(D, F.current);
                } catch (D) {
                    f = D, X = D;
                }
                if (!f) X = null;
                if (z === l.current) {
                    if (!Z.current) Q();
                } else l.current = z, q.current = z, Z.current = true, I();
            };
            z.onStateChange = f, z.trySubscribe(), f();
            const s = () => {
                if (E = true, z.tryUnsubscribe(), z.onStateChange = null, X) throw X;
            };
            return s;
        }
        function oC(D, h) {
            return D === h;
        }
        var jg = false;
        function ll(D, h, z, {pure: j, areStatesEqual: F = oC, areOwnPropsEqual: l = Tx, areStatePropsEqual: Z = Tx, areMergedPropsEqual: A = Tx, forwardRef: q = false, context: Q = a} = {}) {
            if (true) if (j !== void 0 && !jg) jg = true, N('The `pure` option has been removed. `connect` is now always a "pure/memoized" component');
            const I = Q, E = rB(D), X = Oq(h), f = yi(z), s = Boolean(D), L = D => {
                if (true) {
                    const h = R(D);
                    if (!h) throw new Error(`You must pass a component to the function returned by connect. Instead received ${Md(D)}`);
                }
                const h = D.displayName || D.name || "Component", z = `Connect(${h})`, j = {
                    shouldHandleStateChanges: s,
                    displayName: z,
                    wrappedComponentName: h,
                    WrappedComponent: D,
                    initMapStateToProps: E,
                    initMapDispatchToProps: X,
                    initMergeProps: f,
                    areStatesEqual: F,
                    areStatePropsEqual: Z,
                    areOwnPropsEqual: l,
                    areMergedPropsEqual: A
                };
                function Q(h) {
                    const [F, l, Z] = x.useMemo((() => {
                        const {reactReduxForwardedRef: D, ...z} = h;
                        return [ h.context, D, z ];
                    }), [ h ]), A = x.useMemo((() => {
                        let D = I;
                        if (F?.Consumer) if (true) {
                            const h = i(x.createElement(F.Consumer, null));
                            if (!h) throw new Error("You must pass a valid React context consumer as `props.context`");
                            D = F;
                        }
                        return D;
                    }), [ F, I ]), q = x.useContext(A), Q = Boolean(h.store) && Boolean(h.store.getState) && Boolean(h.store.dispatch), E = Boolean(q) && Boolean(q.store);
                    if (!Q && !E) throw new Error(`Could not find "store" in the context of "${z}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${z} in connect options.`);
                    const X = Q ? h.store : q.store, f = E ? q.getServerState : X.getState, L = x.useMemo((() => xk(X.dispatch, j)), [ X ]), [P, n] = x.useMemo((() => {
                        if (!s) return cz;
                        const D = An(X, Q ? void 0 : q.subscription), h = D.notifyNestedSubs.bind(D);
                        return [ D, h ];
                    }), [ X, Q, q ]), w = x.useMemo((() => {
                        if (Q) return q;
                        return {
                            ...q,
                            subscription: P
                        };
                    }), [ Q, q, P ]), J = x.useRef(void 0), a = x.useRef(Z), d = x.useRef(void 0), H = x.useRef(false), K = x.useRef(false), c = x.useRef(void 0);
                    Ki((() => (K.current = true, () => {
                        K.current = false;
                    })), []);
                    const M = x.useMemo((() => {
                        const D = () => {
                            if (d.current && Z === a.current) return d.current;
                            return L(X.getState(), Z);
                        };
                        return D;
                    }), [ X, Z ]), S = x.useMemo((() => {
                        const D = D => {
                            if (!P) return () => {};
                            return YJ(s, X, P, L, a, J, H, K, d, n, D);
                        };
                        return D;
                    }), [ P ]);
                    let T;
                    gU(xZ, [ a, J, H, Z, d, n ]);
                    try {
                        T = oF(S, M, f ? () => L(f(), Z) : M);
                    } catch (D) {
                        if (c.current) D.message += `\nThe error may be correlated with this previous error:\n${c.current.stack}\n\n`;
                        throw D;
                    }
                    Ki((() => {
                        c.current = void 0, d.current = void 0, J.current = T;
                    }));
                    const e = x.useMemo((() => x.createElement(D, {
                        ...T,
                        ref: l
                    })), [ l, D, T ]), v = x.useMemo((() => {
                        if (s) return x.createElement(A.Provider, {
                            value: w
                        }, e);
                        return e;
                    }), [ A, e, w ]);
                    return v;
                }
                const L = x.memo(Q), P = L;
                if (P.WrappedComponent = D, P.displayName = Q.displayName = z, q) {
                    const h = x.forwardRef((function D(h, z) {
                        return x.createElement(P, {
                            ...h,
                            reactReduxForwardedRef: z
                        });
                    })), j = h;
                    return j.displayName = z, j.WrappedComponent = D, FM(j, D);
                }
                return FM(P, D);
            };
            return L;
        }
        var aJ = ll;
        function nz({store: D, context: h, children: z, serverState: j, stabilityCheck: F = "once", identityFunctionCheck: l = "once"}) {
            const Z = x.useMemo((() => {
                const h = An(D);
                return {
                    store: D,
                    subscription: h,
                    getServerState: j ? () => j : void 0,
                    stabilityCheck: F,
                    identityFunctionCheck: l
                };
            }), [ D, j, F, l ]), A = x.useMemo((() => D.getState()), [ D ]);
            Ki((() => {
                const {subscription: h} = Z;
                if (h.onStateChange = h.notifyNestedSubs, h.trySubscribe(), A !== D.getState()) h.notifyNestedSubs();
                return () => {
                    h.tryUnsubscribe(), h.onStateChange = void 0;
                };
            }), [ Z, A ]);
            const q = h || a;
            return x.createElement(q.Provider, {
                value: Z
            }, z);
        }
        var lJ = nz;
        function Xv(D = a) {
            const h = D === a ? K : H(D), z = () => {
                const {store: D} = h();
                return D;
            };
            return Object.assign(z, {
                withTypes: () => z
            }), z;
        }
        var WY = Xv();
        function KY(D = a) {
            const h = D === a ? WY : Xv(D), z = () => {
                const D = h();
                return D.dispatch;
            };
            return Object.assign(z, {
                withTypes: () => z
            }), z;
        }
        var WJ = KY(), PP = mX;
        M(L.useSyncExternalStoreWithSelector), an(s.useSyncExternalStore), 0 && (h.exports = {
            Provider: nz,
            ReactReduxContext: a,
            batch: PP,
            connect: ll,
            createDispatchHook: KY,
            createSelectorHook: T,
            createStoreHook: Xv,
            shallowEqual: Tx,
            useDispatch: WJ,
            useSelector: e,
            useStore: WY
        });
    }, {
        react: 6,
        "use-sync-external-store/with-selector.js": 10
    } ],
    3: [ function(D, h, z) {
        "use strict";
        var j = Object.create, F = Object.defineProperty, l = Object.getOwnPropertyDescriptor, Z = Object.getOwnPropertyNames, A = Object.getPrototypeOf, q = Object.prototype.hasOwnProperty, Q = (D, h) => {
            for (var z in h) F(D, z, {
                get: h[z],
                enumerable: !0
            });
        }, I = (D, h, z, j) => {
            if (h && typeof h == "object" || typeof h == "function") for (let A of Z(h)) !q.call(D, A) && A !== z && F(D, A, {
                get: () => h[A],
                enumerable: !(j = l(h, A)) || j.enumerable
            });
            return D;
        }, E = (D, h, z) => (z = D != null ? j(A(D)) : {}, I(h || !D || !D.__esModule ? F(z, "default", {
            value: D,
            enumerable: !0
        }) : z, D)), X = D => I(F({}, "__esModule", {
            value: !0
        }), D), f = {};
        Q(f, {
            Provider: () => YJ,
            ReactReduxContext: () => d,
            batch: () => nz,
            connect: () => gU,
            createDispatchHook: () => ll,
            createSelectorHook: () => v,
            createStoreHook: () => oC,
            shallowEqual: () => qe,
            useDispatch: () => aJ,
            useSelector: () => G,
            useStore: () => jg
        }), h.exports = X(f);
        var s = E(D("react")), L = D("use-sync-external-store/with-selector.js"), P = E(D("react")), n = "default" in P ? P.default : P, w = Symbol.for("react-redux-context"), J = typeof globalThis < "u" ? globalThis : {};
        function a() {
            if (!n.createContext) return {};
            let D = J[w] ?? (J[w] = new Map), h = D.get(n.createContext);
            return h || (h = n.createContext(null), D.set(n.createContext, h)), h;
        }
        var d = a(), H = () => {
            throw new Error("uSES not initialized!");
        };
        function K(D = d) {
            return function() {
                return n.useContext(D);
            };
        }
        var c = K(), M = H, T = D => {
            M = D;
        }, e = (D, h) => D === h;
        function v(D = d) {
            let h = D === d ? c : K(D), z = (D, z = {}) => {
                let {equalityFn: j = e, devModeChecks: F = {}} = typeof z == "function" ? {
                    equalityFn: z
                } : z, {store: l, subscription: Z, getServerState: A, stabilityCheck: q, identityFunctionCheck: Q} = h(), I = n.useRef(!0), E = n.useCallback({
                    [D.name](h) {
                        let z = D(h);
                        if (!1) {
                            if ((S === "always" || S === "once" && I.current) && !j(z, m)) try {} catch (D) {}
                            if ((x === "always" || x === "once" && I.current) && z === h) try {} catch (D) {}
                        }
                        return z;
                    }
                }[D.name], [ D, q, F.stabilityCheck ]), X = M(Z.addNestedSub, l.getState, A || l.getState, E, j);
                return n.useDebugValue(X), X;
            };
            return Object.assign(z, {
                withTypes: () => z
            }), z;
        }
        var G = v(), r = Symbol.for("react.element"), t = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), W = Symbol.for("react.provider"), U = Symbol.for("react.context"), p = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), o = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), R = Symbol.for("react.client.reference"), V = u, i = b;
        function g(D) {
            if (typeof D == "object" && D !== null) {
                let h = D.$$typeof;
                switch (h) {
                  case r:
                    {
                        let z = D.type;
                        switch (z) {
                          case C:
                          case k:
                          case y:
                          case O:
                          case o:
                            return z;

                          default:
                            {
                                let D = z && z.$$typeof;
                                switch (D) {
                                  case p:
                                  case U:
                                  case u:
                                  case B:
                                  case b:
                                  case W:
                                    return D;

                                  default:
                                    return h;
                                }
                            }
                        }
                    }

                  case t:
                    return h;
                }
            }
        }
        function N(D) {
            return g(D) === b;
        }
        function kN(D, h, z, j, {areStatesEqual: F, areOwnPropsEqual: l, areStatePropsEqual: Z}) {
            let A = !1, q, Q, I, E, X;
            function f(F, l) {
                return q = F, Q = l, I = D(q, Q), E = h(j, Q), X = z(I, E, Q), A = !0, X;
            }
            function s() {
                return I = D(q, Q), h.dependsOnOwnProps && (E = h(j, Q)), X = z(I, E, Q), X;
            }
            function L() {
                return D.dependsOnOwnProps && (I = D(q, Q)), h.dependsOnOwnProps && (E = h(j, Q)),
                X = z(I, E, Q), X;
            }
            function P() {
                let h = D(q, Q), j = !Z(h, I);
                return I = h, j && (X = z(I, E, Q)), X;
            }
            function x(D, h) {
                let z = !l(h, Q), j = !F(D, q, h, Q);
                return q = D, Q = h, z && j ? s() : z ? L() : j ? P() : X;
            }
            return function(D, h) {
                return A ? x(D, h) : f(D, h);
            };
        }
        function Ar(D, {initMapStateToProps: h, initMapDispatchToProps: z, initMergeProps: j, ...F}) {
            let l = h(D, F), Z = z(D, F), A = j(D, F);
            return kN(l, Z, A, D, F);
        }
        function qk(D, h) {
            let z = {};
            for (let j in D) {
                let F = D[j];
                typeof F == "function" && (z[j] = (...D) => h(F(...D)));
            }
            return z;
        }
        function xk(D) {
            return function(h) {
                let z = D(h);
                function j() {
                    return z;
                }
                return j.dependsOnOwnProps = !1, j;
            };
        }
        function LD(D) {
            return D.dependsOnOwnProps ? !!D.dependsOnOwnProps : D.length !== 1;
        }
        function hO(D, h) {
            return function(h, {displayName: z}) {
                let j = function(D, h) {
                    return j.dependsOnOwnProps ? j.mapToProps(D, h) : j.mapToProps(D, void 0);
                };
                return j.dependsOnOwnProps = !0, j.mapToProps = function(h, z) {
                    j.mapToProps = D, j.dependsOnOwnProps = LD(D);
                    let F = j(h, z);
                    return typeof F == "function" && (j.mapToProps = F, j.dependsOnOwnProps = LD(F),
                    F = j(h, z)), F;
                }, j;
            };
        }
        function VB(D, h) {
            return (z, j) => {
                throw new Error(`Invalid value of type ${typeof D} for ${h} argument when connecting component ${j.wrappedComponentName}.`);
            };
        }
        function zi(D) {
            return D && typeof D == "object" ? xk((h => qk(D, h))) : D ? typeof D == "function" ? hO(D, "mapDispatchToProps") : VB(D, "mapDispatchToProps") : xk((D => ({
                dispatch: D
            })));
        }
        function dj(D) {
            return D ? typeof D == "function" ? hO(D, "mapStateToProps") : VB(D, "mapStateToProps") : xk((() => ({})));
        }
        function Su(D, h, z) {
            return {
                ...z,
                ...D,
                ...h
            };
        }
        function Cv(D) {
            return function(h, {displayName: z, areMergedPropsEqual: j}) {
                let F = !1, l;
                return function(h, z, Z) {
                    let A = D(h, z, Z);
                    return F ? j(A, l) || (l = A) : (F = !0, l = A), l;
                };
            };
        }
        function Oq(D) {
            return D ? typeof D == "function" ? Cv(D) : VB(D, "mergeProps") : () => Su;
        }
        function rB(D) {
            D();
        }
        function KU() {
            let D = null, h = null;
            return {
                clear() {
                    D = null, h = null;
                },
                notify() {
                    rB((() => {
                        let h = D;
                        for (;h; ) h.callback(), h = h.next;
                    }));
                },
                get() {
                    let h = [], z = D;
                    for (;z; ) h.push(z), z = z.next;
                    return h;
                },
                subscribe(z) {
                    let j = !0, F = h = {
                        callback: z,
                        next: null,
                        prev: h
                    };
                    return F.prev ? F.prev.next = F : D = F, function() {
                        !j || D === null || (j = !1, F.next ? F.next.prev = F.prev : h = F.prev, F.prev ? F.prev.next = F.next : D = F.next);
                    };
                }
            };
        }
        var BW = {
            notify() {},
            get: () => []
        };
        function yi(D, h) {
            let z, j = BW, F = 0, l = !1;
            function Z(D) {
                I();
                let h = j.subscribe(D), z = !1;
                return () => {
                    z || (z = !0, h(), E());
                };
            }
            function A() {
                j.notify();
            }
            function q() {
                s.onStateChange && s.onStateChange();
            }
            function Q() {
                return l;
            }
            function I() {
                F++, z || (z = h ? h.addNestedSub(q) : D.subscribe(q), j = KU());
            }
            function E() {
                F--, z && F === 0 && (z(), z = void 0, j.clear(), j = BW);
            }
            function X() {
                l || (l = !0, I());
            }
            function f() {
                l && (l = !1, E());
            }
            let s = {
                addNestedSub: Z,
                notifyNestedSubs: A,
                handleChangeWrapper: q,
                isSubscribed: Q,
                trySubscribe: X,
                tryUnsubscribe: f,
                getListeners: () => j
            };
            return s;
        }
        var mX = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ol = typeof navigator < "u" && navigator.product === "ReactNative", tR = mX || ol ? n.useLayoutEffect : n.useEffect;
        function An(D, h) {
            return D === h ? D !== 0 || h !== 0 || 1 / D === 1 / h : D !== D && h !== h;
        }
        function qe(D, h) {
            if (An(D, h)) return !0;
            if (typeof D != "object" || D === null || typeof h != "object" || h === null) return !1;
            let z = Object.keys(D), j = Object.keys(h);
            if (z.length !== j.length) return !1;
            for (let j = 0; j < z.length; j++) if (!Object.prototype.hasOwnProperty.call(h, z[j]) || !An(D[z[j]], h[z[j]])) return !1;
            return !0;
        }
        var LL = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0
        }, Ki = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0
        }, Jo = {
            $$typeof: !0,
            render: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0
        }, Tx = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0
        }, By = {
            [V]: Jo,
            [i]: Tx
        };
        function vF(D) {
            return N(D) ? Tx : By[D.$$typeof] || LL;
        }
        var kn = Object.defineProperty, wQ = Object.getOwnPropertyNames, lp = Object.getOwnPropertySymbols, Hd = Object.getOwnPropertyDescriptor, rG = Object.getPrototypeOf, Az = Object.prototype;
        function vS(D, h) {
            if (typeof h != "string") {
                if (Az) {
                    let z = rG(h);
                    z && z !== Az && vS(D, z);
                }
                let z = wQ(h);
                lp && (z = z.concat(lp(h)));
                let j = vF(D), F = vF(h);
                for (let l = 0; l < z.length; ++l) {
                    let Z = z[l];
                    if (!Ki[Z] && !(F && F[Z]) && !(j && j[Z])) {
                        let z = Hd(h, Z);
                        try {
                            kn(D, Z, z);
                        } catch {}
                    }
                }
            }
            return D;
        }
        var Sq = H, PG = D => {
            Sq = D;
        }, Tm = [ null, null ];
        function FM(D, h, z) {
            tR((() => D(...h)), z);
        }
        function oF(D, h, z, j, F, l) {
            D.current = j, z.current = !1, F.current && (F.current = null, l());
        }
        function an(D, h, z, j, F, l, Z, A, q, Q, I) {
            if (!D) return () => {};
            let E = !1, X = null, f = () => {
                if (E || !A.current) return;
                let D = h.getState(), z, f;
                try {
                    z = j(D, F.current);
                } catch (D) {
                    f = D, X = D;
                }
                f || (X = null), z === l.current ? Z.current || Q() : (l.current = z, q.current = z,
                Z.current = !0, I());
            };
            return z.onStateChange = f, z.trySubscribe(), f(), () => {
                if (E = !0, z.tryUnsubscribe(), z.onStateChange = null, X) throw X;
            };
        }
        function cz(D, h) {
            return D === h;
        }
        function Md(D, h, z, {pure: j, areStatesEqual: F = cz, areOwnPropsEqual: l = qe, areStatePropsEqual: Z = qe, areMergedPropsEqual: A = qe, forwardRef: q = !1, context: Q = d} = {}) {
            let I = Q, E = dj(D), X = zi(h), f = Oq(z), s = !!D;
            return D => {
                let h = D.displayName || D.name || "Component", z = `Connect(${h})`, j = {
                    shouldHandleStateChanges: s,
                    displayName: z,
                    wrappedComponentName: h,
                    WrappedComponent: D,
                    initMapStateToProps: E,
                    initMapDispatchToProps: X,
                    initMergeProps: f,
                    areStatesEqual: F,
                    areStatePropsEqual: Z,
                    areOwnPropsEqual: l,
                    areMergedPropsEqual: A
                };
                function Q(h) {
                    let [z, F, l] = n.useMemo((() => {
                        let {reactReduxForwardedRef: D, ...z} = h;
                        return [ h.context, D, z ];
                    }), [ h ]), Z = n.useMemo((() => {
                        let D = I;
                        return D;
                    }), [ z, I ]), A = n.useContext(Z), q = !!h.store && !!h.store.getState && !!h.store.dispatch, Q = !!A && !!A.store, E = q ? h.store : A.store, X = Q ? A.getServerState : E.getState, f = n.useMemo((() => Ar(E.dispatch, j)), [ E ]), [L, P] = n.useMemo((() => {
                        if (!s) return Tm;
                        let D = yi(E, q ? void 0 : A.subscription), h = D.notifyNestedSubs.bind(D);
                        return [ D, h ];
                    }), [ E, q, A ]), x = n.useMemo((() => q ? A : {
                        ...A,
                        subscription: L
                    }), [ q, A, L ]), w = n.useRef(void 0), J = n.useRef(l), a = n.useRef(void 0), d = n.useRef(!1), H = n.useRef(!1), K = n.useRef(void 0);
                    tR((() => (H.current = !0, () => {
                        H.current = !1;
                    })), []);
                    let c = n.useMemo((() => () => a.current && l === J.current ? a.current : f(E.getState(), l)), [ E, l ]), M = n.useMemo((() => D => L ? an(s, E, L, f, J, w, d, H, a, P, D) : () => {}), [ L ]), S;
                    FM(oF, [ J, w, d, l, a, P ]);
                    try {
                        S = Sq(M, c, X ? () => f(X(), l) : c);
                    } catch (D) {
                        throw K.current && (D.message += `\nThe error may be correlated with this previous error:\n${K.current.stack}\n\n`),
                        D;
                    }
                    tR((() => {
                        K.current = void 0, a.current = void 0, w.current = S;
                    }));
                    let T = n.useMemo((() => n.createElement(D, {
                        ...S,
                        ref: F
                    })), [ F, D, S ]);
                    return n.useMemo((() => s ? n.createElement(Z.Provider, {
                        value: x
                    }, T) : T), [ Z, T, x ]);
                }
                let L = n.memo(Q);
                if (L.WrappedComponent = D, L.displayName = Q.displayName = z, q) {
                    let h = n.forwardRef((function(D, h) {
                        return n.createElement(L, {
                            ...D,
                            reactReduxForwardedRef: h
                        });
                    }));
                    return h.displayName = z, h.WrappedComponent = D, vS(h, D);
                }
                return vS(L, D);
            };
        }
        var gU = Md;
        function xZ({store: D, context: h, children: z, serverState: j, stabilityCheck: F = "once", identityFunctionCheck: l = "once"}) {
            let Z = n.useMemo((() => {
                let h = yi(D);
                return {
                    store: D,
                    subscription: h,
                    getServerState: j ? () => j : void 0,
                    stabilityCheck: F,
                    identityFunctionCheck: l
                };
            }), [ D, j, F, l ]), A = n.useMemo((() => D.getState()), [ D ]);
            return tR((() => {
                let {subscription: h} = Z;
                return h.onStateChange = h.notifyNestedSubs, h.trySubscribe(), A !== D.getState() && h.notifyNestedSubs(),
                () => {
                    h.tryUnsubscribe(), h.onStateChange = void 0;
                };
            }), [ Z, A ]), n.createElement((h || d).Provider, {
                value: Z
            }, z);
        }
        var YJ = xZ;
        function oC(D = d) {
            let h = D === d ? c : K(D), z = () => {
                let {store: D} = h();
                return D;
            };
            return Object.assign(z, {
                withTypes: () => z
            }), z;
        }
        var jg = oC();
        function ll(D = d) {
            let h = D === d ? jg : oC(D), z = () => h().dispatch;
            return Object.assign(z, {
                withTypes: () => z
            }), z;
        }
        var aJ = ll(), nz = rB;
        T(L.useSyncExternalStoreWithSelector), PG(s.useSyncExternalStore), 0 && (h.exports = {
            Provider: Provider,
            ReactReduxContext: ReactReduxContext,
            batch: batch,
            connect: connect,
            createDispatchHook: createDispatchHook,
            createSelectorHook: createSelectorHook,
            createStoreHook: createStoreHook,
            shallowEqual: shallowEqual,
            useDispatch: useDispatch,
            useSelector: useSelector,
            useStore: useStore
        });
    }, {
        react: 6,
        "use-sync-external-store/with-selector.js": 10
    } ],
    4: [ function(D, h, z) {
        (function(D) {
            (function() {
                "use strict";
                if (D.env.NODE_ENV !== "production") (function() {
                    "use strict";
                    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);
                    var D = "18.3.1", j = Symbol.for("react.element"), F = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), Z = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), q = Symbol.for("react.provider"), Q = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), X = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), s = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), P = Symbol.iterator, x = "@@iterator";
                    function n(D) {
                        if (D === null || typeof D !== "object") return null;
                        var h = P && D[P] || D[x];
                        if (typeof h === "function") return h;
                        return null;
                    }
                    var w = {
                        current: null
                    }, J = {
                        transition: null
                    }, a = {
                        current: null,
                        isBatchingLegacy: false,
                        didScheduleLegacyUpdate: false
                    }, d = {
                        current: null
                    }, H = {}, K = null;
                    function c(D) {
                        K = D;
                    }
                    H.setExtraStackFrame = function(D) {
                        K = D;
                    }, H.getCurrentStack = null, H.getStackAddendum = function() {
                        var D = "";
                        if (K) D += K;
                        var h = H.getCurrentStack;
                        if (h) D += h() || "";
                        return D;
                    };
                    var M = false, S = false, T = false, e = false, v = false, m = {
                        ReactCurrentDispatcher: w,
                        ReactCurrentBatchConfig: J,
                        ReactCurrentOwner: d
                    };
                    function G(D) {
                        for (var h = arguments.length, z = new Array(h > 1 ? h - 1 : 0), j = 1; j < h; j++) z[j - 1] = arguments[j];
                        t("warn", D, z);
                    }
                    function r(D) {
                        for (var h = arguments.length, z = new Array(h > 1 ? h - 1 : 0), j = 1; j < h; j++) z[j - 1] = arguments[j];
                        t("error", D, z);
                    }
                    function t(D, h, z) {
                        var j = m.ReactDebugCurrentFrame, F = j.getStackAddendum();
                        if (F !== "") h += "%s", z = z.concat([ F ]);
                        var l = z.map((function(D) {
                            return String(D);
                        }));
                        l.unshift("Warning: " + h), Function.prototype.apply.call(console[D], console, l);
                    }
                    m.ReactDebugCurrentFrame = H, m.ReactCurrentActQueue = a;
                    var C = {};
                    function y(D, h) {
                        var z = D.constructor, j = z && (z.displayName || z.name) || "ReactClass", F = j + "." + h;
                        if (C[F]) return;
                        r("Can't call %s on a component that is not yet mounted. " + "This is a no-op, but it might indicate a bug in your application. " + "Instead, assign to `this.state` directly or define a `state = {};` " + "class property with the desired state in the %s component.", h, j),
                        C[F] = true;
                    }
                    var k = {
                        isMounted: function(D) {
                            return false;
                        },
                        enqueueForceUpdate: function(D, h, z) {
                            y(D, "forceUpdate");
                        },
                        enqueueReplaceState: function(D, h, z, j) {
                            y(D, "replaceState");
                        },
                        enqueueSetState: function(D, h, z, j) {
                            y(D, "setState");
                        }
                    }, W = Object.assign, U = {};
                    function p(D, h, z) {
                        this.props = D, this.context = h, this.refs = U, this.updater = z || k;
                    }
                    Object.freeze(U), p.prototype.isReactComponent = {}, p.prototype.setState = function(D, h) {
                        if (typeof D !== "object" && typeof D !== "function" && D != null) throw new Error("setState(...): takes an object of state variables to update or a " + "function which returns an object of state variables.");
                        this.updater.enqueueSetState(this, D, h, "setState");
                    }, p.prototype.forceUpdate = function(D) {
                        this.updater.enqueueForceUpdate(this, D, "forceUpdate");
                    };
                    var u = {
                        isMounted: [ "isMounted", "Instead, make sure to clean up subscriptions and pending requests in " + "componentWillUnmount to prevent memory leaks." ],
                        replaceState: [ "replaceState", "Refactor your code to use setState instead (see " + "https://github.com/facebook/react/issues/3236)." ]
                    }, O = function(D, h) {
                        Object.defineProperty(p.prototype, D, {
                            get: function() {
                                return void G("%s(...) is deprecated in plain JavaScript React classes. %s", h[0], h[1]);
                            }
                        });
                    };
                    for (var o in u) if (u.hasOwnProperty(o)) O(o, u[o]);
                    function b() {}
                    function B(D, h, z) {
                        this.props = D, this.context = h, this.refs = U, this.updater = z || k;
                    }
                    b.prototype = p.prototype;
                    var Y = B.prototype = new b;
                    function R() {
                        var D = {
                            current: null
                        };
                        return Object.seal(D), D;
                    }
                    Y.constructor = B, W(Y, p.prototype), Y.isPureReactComponent = true;
                    var V = Array.isArray;
                    function i(D) {
                        return V(D);
                    }
                    function g(D) {
                        var h = typeof Symbol === "function" && Symbol.toStringTag, z = h && D[Symbol.toStringTag] || D.constructor.name || "Object";
                        return z;
                    }
                    function N(D) {
                        try {
                            return kN(D), false;
                        } catch (D) {
                            return true;
                        }
                    }
                    function kN(D) {
                        return "" + D;
                    }
                    function Ar(D) {
                        if (N(D)) return r("The provided key is an unsupported type %s." + " This value must be coerced to a string before before using it here.", g(D)),
                        kN(D);
                    }
                    function qk(D, h, z) {
                        var j = D.displayName;
                        if (j) return j;
                        var F = h.displayName || h.name || "";
                        return F !== "" ? z + "(" + F + ")" : z;
                    }
                    function xk(D) {
                        return D.displayName || "Context";
                    }
                    function LD(D) {
                        if (D == null) return null;
                        if (typeof D.tag === "number") r("Received an unexpected object in getComponentNameFromType(). " + "This is likely a bug in React. Please file an issue.");
                        if (typeof D === "function") return D.displayName || D.name || null;
                        if (typeof D === "string") return D;
                        switch (D) {
                          case l:
                            return "Fragment";

                          case F:
                            return "Portal";

                          case A:
                            return "Profiler";

                          case Z:
                            return "StrictMode";

                          case E:
                            return "Suspense";

                          case X:
                            return "SuspenseList";
                        }
                        if (typeof D === "object") switch (D.$$typeof) {
                          case Q:
                            var h = D;
                            return xk(h) + ".Consumer";

                          case q:
                            var z = D;
                            return xk(z._context) + ".Provider";

                          case I:
                            return qk(D, D.render, "ForwardRef");

                          case f:
                            var j = D.displayName || null;
                            if (j !== null) return j;
                            return LD(D.type) || "Memo";

                          case s:
                            var L = D, P = L._payload, x = L._init;
                            try {
                                return LD(x(P));
                            } catch (D) {
                                return null;
                            }
                        }
                        return null;
                    }
                    var hO = Object.prototype.hasOwnProperty, VB = {
                        key: true,
                        ref: true,
                        __self: true,
                        __source: true
                    }, zi, dj, Su;
                    function Cv(D) {
                        if (hO.call(D, "ref")) {
                            var h = Object.getOwnPropertyDescriptor(D, "ref").get;
                            if (h && h.isReactWarning) return false;
                        }
                        return D.ref !== void 0;
                    }
                    function Oq(D) {
                        if (hO.call(D, "key")) {
                            var h = Object.getOwnPropertyDescriptor(D, "key").get;
                            if (h && h.isReactWarning) return false;
                        }
                        return D.key !== void 0;
                    }
                    function rB(D, h) {
                        var z = function() {
                            if (!zi) zi = true, r("%s: `key` is not a prop. Trying to access it will result " + "in `undefined` being returned. If you need to access the same " + "value within the child component, you should pass it as a different " + "prop. (https://reactjs.org/link/special-props)", h);
                        };
                        z.isReactWarning = true, Object.defineProperty(D, "key", {
                            get: z,
                            configurable: true
                        });
                    }
                    function KU(D, h) {
                        var z = function() {
                            if (!dj) dj = true, r("%s: `ref` is not a prop. Trying to access it will result " + "in `undefined` being returned. If you need to access the same " + "value within the child component, you should pass it as a different " + "prop. (https://reactjs.org/link/special-props)", h);
                        };
                        z.isReactWarning = true, Object.defineProperty(D, "ref", {
                            get: z,
                            configurable: true
                        });
                    }
                    function BW(D) {
                        if (typeof D.ref === "string" && d.current && D.__self && d.current.stateNode !== D.__self) {
                            var h = LD(d.current.type);
                            if (!Su[h]) r('Component "%s" contains the string ref "%s". ' + "Support for string refs will be removed in a future major release. " + "This case cannot be automatically converted to an arrow function. " + "We ask you to manually fix this case by using useRef() or createRef() instead. " + "Learn more about using refs safely here: " + "https://reactjs.org/link/strict-mode-string-ref", h, D.ref),
                            Su[h] = true;
                        }
                    }
                    Su = {};
                    var yi = function(D, h, z, F, l, Z, A) {
                        var q = {
                            $$typeof: j,
                            type: D,
                            key: h,
                            ref: z,
                            props: A,
                            _owner: Z,
                            _store: {}
                        };
                        if (Object.defineProperty(q._store, "validated", {
                            configurable: false,
                            enumerable: false,
                            writable: true,
                            value: false
                        }), Object.defineProperty(q, "_self", {
                            configurable: false,
                            enumerable: false,
                            writable: false,
                            value: F
                        }), Object.defineProperty(q, "_source", {
                            configurable: false,
                            enumerable: false,
                            writable: false,
                            value: l
                        }), Object.freeze) Object.freeze(q.props), Object.freeze(q);
                        return q;
                    };
                    function mX(D, h, z) {
                        var j, F = {}, l = null, Z = null, A = null, q = null;
                        if (h != null) {
                            if (Cv(h)) Z = h.ref, BW(h);
                            if (Oq(h)) Ar(h.key), l = "" + h.key;
                            for (j in A = h.__self === void 0 ? null : h.__self, q = h.__source === void 0 ? null : h.__source,
                            h) if (hO.call(h, j) && !VB.hasOwnProperty(j)) F[j] = h[j];
                        }
                        var Q = arguments.length - 2;
                        if (Q === 1) F.children = z; else if (Q > 1) {
                            for (var I = Array(Q), E = 0; E < Q; E++) I[E] = arguments[E + 2];
                            if (Object.freeze) Object.freeze(I);
                            F.children = I;
                        }
                        if (D && D.defaultProps) {
                            var X = D.defaultProps;
                            for (j in X) if (F[j] === void 0) F[j] = X[j];
                        }
                        if (l || Z) {
                            var f = typeof D === "function" ? D.displayName || D.name || "Unknown" : D;
                            if (l) rB(F, f);
                            if (Z) KU(F, f);
                        }
                        return yi(D, l, Z, A, q, d.current, F);
                    }
                    function ol(D, h) {
                        var z = yi(D.type, h, D.ref, D._self, D._source, D._owner, D.props);
                        return z;
                    }
                    function tR(D, h, z) {
                        if (D === null || D === void 0) throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + D + ".");
                        var j, F = W({}, D.props), l = D.key, Z = D.ref, A = D._self, q = D._source, Q = D._owner;
                        if (h != null) {
                            if (Cv(h)) Z = h.ref, Q = d.current;
                            if (Oq(h)) Ar(h.key), l = "" + h.key;
                            var I;
                            if (D.type && D.type.defaultProps) I = D.type.defaultProps;
                            for (j in h) if (hO.call(h, j) && !VB.hasOwnProperty(j)) if (h[j] === void 0 && I !== void 0) F[j] = I[j]; else F[j] = h[j];
                        }
                        var E = arguments.length - 2;
                        if (E === 1) F.children = z; else if (E > 1) {
                            for (var X = Array(E), f = 0; f < E; f++) X[f] = arguments[f + 2];
                            F.children = X;
                        }
                        return yi(D.type, l, Z, A, q, Q, F);
                    }
                    function An(D) {
                        return typeof D === "object" && D !== null && D.$$typeof === j;
                    }
                    var qe = ".", LL = ":";
                    function Ki(D) {
                        var h = /[=:]/g, z = {
                            "=": "=0",
                            ":": "=2"
                        }, j = D.replace(h, (function(D) {
                            return z[D];
                        }));
                        return "$" + j;
                    }
                    var Jo = false, Tx = /\/+/g;
                    function By(D) {
                        return D.replace(Tx, "$&/");
                    }
                    function vF(D, h) {
                        if (typeof D === "object" && D !== null && D.key != null) return Ar(D.key), Ki("" + D.key);
                        return h.toString(36);
                    }
                    function kn(D, h, z, l, Z) {
                        var A = typeof D;
                        if (A === "undefined" || A === "boolean") D = null;
                        var q = false, Q, I;
                        if (D === null) q = true; else switch (A) {
                          case "string":
                          case "number":
                            q = true;
                            break;

                          case "object":
                            switch (D.$$typeof) {
                              case j:
                              case F:
                                q = true;
                            }
                        }
                        if (q) {
                            var E = D, X = Z(E), f = l === "" ? qe + vF(E, 0) : l;
                            if (i(X)) {
                                var s = "";
                                if (f != null) s = By(f) + "/";
                                kn(X, h, s, "", (function(D) {
                                    return D;
                                }));
                            } else if (X != null) {
                                if (An(X)) {
                                    if (X.key && (!E || E.key !== X.key)) Ar(X.key);
                                    X = ol(X, z + (X.key && (!E || E.key !== X.key) ? By("" + X.key) + "/" : "") + f);
                                }
                                h.push(X);
                            }
                            return 1;
                        }
                        var L = 0, P = l === "" ? qe : l + LL;
                        if (i(D)) for (var x = 0; x < D.length; x++) Q = D[x], I = P + vF(Q, x), L += kn(Q, h, z, I, Z); else {
                            var w = n(D);
                            if (typeof w === "function") {
                                var J = D;
                                if (w === J.entries) {
                                    if (!Jo) G("Using Maps as children is not supported. " + "Use an array of keyed ReactElements instead.");
                                    Jo = true;
                                }
                                var a = w.call(J), d, H = 0;
                                while (!(d = a.next()).done) Q = d.value, I = P + vF(Q, H++), L += kn(Q, h, z, I, Z);
                            } else if (A === "object") {
                                var K = String(D);
                                throw new Error("Objects are not valid as a React child (found: " + (K === "[object Object]" ? "object with keys {" + Object.keys(D).join(", ") + "}" : K) + "). " + "If you meant to render a collection of children, use an array " + "instead.");
                            }
                        }
                        return L;
                    }
                    function wQ(D, h, z) {
                        if (D == null) return D;
                        var j = [], F = 0;
                        return kn(D, j, "", "", (function(D) {
                            return h.call(z, D, F++);
                        })), j;
                    }
                    function lp(D) {
                        var h = 0;
                        return wQ(D, (function() {
                            h++;
                        })), h;
                    }
                    function Hd(D, h, z) {
                        wQ(D, (function() {
                            h.apply(this, arguments);
                        }), z);
                    }
                    function rG(D) {
                        return wQ(D, (function(D) {
                            return D;
                        })) || [];
                    }
                    function Az(D) {
                        if (!An(D)) throw new Error("React.Children.only expected to receive a single React element child.");
                        return D;
                    }
                    function vS(D) {
                        var h = {
                            $$typeof: Q,
                            _currentValue: D,
                            _currentValue2: D,
                            _threadCount: 0,
                            Provider: null,
                            Consumer: null,
                            _defaultValue: null,
                            _globalName: null
                        };
                        h.Provider = {
                            $$typeof: q,
                            _context: h
                        };
                        var z = false, j = false, F = false, l = {
                            $$typeof: Q,
                            _context: h
                        };
                        return Object.defineProperties(l, {
                            Provider: {
                                get: function() {
                                    if (!j) j = true, r("Rendering <Context.Consumer.Provider> is not supported and will be removed in " + "a future major release. Did you mean to render <Context.Provider> instead?");
                                    return h.Provider;
                                },
                                set: function(D) {
                                    h.Provider = D;
                                }
                            },
                            _currentValue: {
                                get: function() {
                                    return h._currentValue;
                                },
                                set: function(D) {
                                    h._currentValue = D;
                                }
                            },
                            _currentValue2: {
                                get: function() {
                                    return h._currentValue2;
                                },
                                set: function(D) {
                                    h._currentValue2 = D;
                                }
                            },
                            _threadCount: {
                                get: function() {
                                    return h._threadCount;
                                },
                                set: function(D) {
                                    h._threadCount = D;
                                }
                            },
                            Consumer: {
                                get: function() {
                                    if (!z) z = true, r("Rendering <Context.Consumer.Consumer> is not supported and will be removed in " + "a future major release. Did you mean to render <Context.Consumer> instead?");
                                    return h.Consumer;
                                }
                            },
                            displayName: {
                                get: function() {
                                    return h.displayName;
                                },
                                set: function(D) {
                                    if (!F) G("Setting `displayName` on Context.Consumer has no effect. " + "You should set it directly on the context with Context.displayName = '%s'.", D),
                                    F = true;
                                }
                            }
                        }), h.Consumer = l, h._currentRenderer = null, h._currentRenderer2 = null, h;
                    }
                    var Sq = -1, PG = 0, Tm = 1, FM = 2, oF;
                    function an(D) {
                        if (D._status === Sq) {
                            var h = D._result, z = h();
                            if (z.then((function(h) {
                                if (D._status === PG || D._status === Sq) {
                                    var z = D;
                                    z._status = Tm, z._result = h;
                                }
                            }), (function(h) {
                                if (D._status === PG || D._status === Sq) {
                                    var z = D;
                                    z._status = FM, z._result = h;
                                }
                            })), D._status === Sq) {
                                var j = D;
                                j._status = PG, j._result = z;
                            }
                        }
                        if (D._status === Tm) {
                            var F = D._result;
                            if (F === void 0) r("lazy: Expected the result of a dynamic imp" + "ort() call. " + "Instead received: %s\n\nYour code should look like: \n  " + "const MyComponent = lazy(() => imp" + "ort('./MyComponent'))\n\n" + "Did you accidentally put curly braces around the import?", F);
                            if (!("default" in F)) r("lazy: Expected the result of a dynamic imp" + "ort() call. " + "Instead received: %s\n\nYour code should look like: \n  " + "const MyComponent = lazy(() => imp" + "ort('./MyComponent'))", F);
                            return F.default;
                        } else throw D._result;
                    }
                    function cz(D) {
                        var h = {
                            _status: Sq,
                            _result: D
                        }, z = {
                            $$typeof: s,
                            _payload: h,
                            _init: an
                        }, j, F;
                        return Object.defineProperties(z, {
                            defaultProps: {
                                configurable: true,
                                get: function() {
                                    return j;
                                },
                                set: function(D) {
                                    r("React.lazy(...): It is not supported to assign `defaultProps` to " + "a lazy component import. Either specify them where the component " + "is defined, or create a wrapping component around it."),
                                    j = D, Object.defineProperty(z, "defaultProps", {
                                        enumerable: true
                                    });
                                }
                            },
                            propTypes: {
                                configurable: true,
                                get: function() {
                                    return F;
                                },
                                set: function(D) {
                                    r("React.lazy(...): It is not supported to assign `propTypes` to " + "a lazy component import. Either specify them where the component " + "is defined, or create a wrapping component around it."),
                                    F = D, Object.defineProperty(z, "propTypes", {
                                        enumerable: true
                                    });
                                }
                            }
                        }), z;
                    }
                    function Md(D) {
                        if (D != null && D.$$typeof === f) r("forwardRef requires a render function but received a `memo` " + "component. Instead of forwardRef(memo(...)), use " + "memo(forwardRef(...))."); else if (typeof D !== "function") r("forwardRef requires a render function but was given %s.", D === null ? "null" : typeof D); else if (D.length !== 0 && D.length !== 2) r("forwardRef render functions accept exactly two parameters: props and ref. %s", D.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
                        if (D != null) if (D.defaultProps != null || D.propTypes != null) r("forwardRef render functions do not support propTypes or defaultProps. " + "Did you accidentally pass a React component?");
                        var h = {
                            $$typeof: I,
                            render: D
                        }, z;
                        return Object.defineProperty(h, "displayName", {
                            enumerable: false,
                            configurable: true,
                            get: function() {
                                return z;
                            },
                            set: function(h) {
                                if (z = h, !D.name && !D.displayName) D.displayName = h;
                            }
                        }), h;
                    }
                    function gU(D) {
                        if (typeof D === "string" || typeof D === "function") return true;
                        if (D === l || D === A || v || D === Z || D === E || D === X || e || D === L || M || S || T) return true;
                        if (typeof D === "object" && D !== null) if (D.$$typeof === s || D.$$typeof === f || D.$$typeof === q || D.$$typeof === Q || D.$$typeof === I || D.$$typeof === oF || D.getModuleId !== void 0) return true;
                        return false;
                    }
                    function xZ(D, h) {
                        if (!gU(D)) r("memo: The first argument must be a component. Instead " + "received: %s", D === null ? "null" : typeof D);
                        var z = {
                            $$typeof: f,
                            type: D,
                            compare: h === void 0 ? null : h
                        }, j;
                        return Object.defineProperty(z, "displayName", {
                            enumerable: false,
                            configurable: true,
                            get: function() {
                                return j;
                            },
                            set: function(h) {
                                if (j = h, !D.name && !D.displayName) D.displayName = h;
                            }
                        }), z;
                    }
                    function YJ() {
                        var D = w.current;
                        if (D === null) r("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for" + " one of the following reasons:\n" + "1. You might have mismatching versions of React and the renderer (such as React DOM)\n" + "2. You might be breaking the Rules of Hooks\n" + "3. You might have more than one copy of React in the same app\n" + "See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
                        return D;
                    }
                    function oC(D) {
                        var h = YJ();
                        if (D._context !== void 0) {
                            var z = D._context;
                            if (z.Consumer === D) r("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be " + "removed in a future major release. Did you mean to call useContext(Context) instead?"); else if (z.Provider === D) r("Calling useContext(Context.Provider) is not supported. " + "Did you mean to call useContext(Context) instead?");
                        }
                        return h.useContext(D);
                    }
                    function jg(D) {
                        var h = YJ();
                        return h.useState(D);
                    }
                    function ll(D, h, z) {
                        var j = YJ();
                        return j.useReducer(D, h, z);
                    }
                    function aJ(D) {
                        var h = YJ();
                        return h.useRef(D);
                    }
                    function nz(D, h) {
                        var z = YJ();
                        return z.useEffect(D, h);
                    }
                    function lJ(D, h) {
                        var z = YJ();
                        return z.useInsertionEffect(D, h);
                    }
                    function Xv(D, h) {
                        var z = YJ();
                        return z.useLayoutEffect(D, h);
                    }
                    function WY(D, h) {
                        var z = YJ();
                        return z.useCallback(D, h);
                    }
                    function KY(D, h) {
                        var z = YJ();
                        return z.useMemo(D, h);
                    }
                    function WJ(D, h, z) {
                        var j = YJ();
                        return j.useImperativeHandle(D, h, z);
                    }
                    function PP(D, h) {
                        var z = YJ();
                        return z.useDebugValue(D, h);
                    }
                    function ce() {
                        var D = YJ();
                        return D.useTransition();
                    }
                    function OK(D) {
                        var h = YJ();
                        return h.useDeferredValue(D);
                    }
                    function bv() {
                        var D = YJ();
                        return D.useId();
                    }
                    function je(D, h, z) {
                        var j = YJ();
                        return j.useSyncExternalStore(D, h, z);
                    }
                    oF = Symbol.for("react.module.reference");
                    var HO = 0, pd, sd, Cb, Ll, gH, Bq, fB;
                    function GJ() {}
                    function fd() {
                        if (HO === 0) {
                            pd = console.log, sd = console.info, Cb = console.warn, Ll = console.error, gH = console.group,
                            Bq = console.groupCollapsed, fB = console.groupEnd;
                            var D = {
                                configurable: true,
                                enumerable: true,
                                value: GJ,
                                writable: true
                            };
                            Object.defineProperties(console, {
                                info: D,
                                log: D,
                                warn: D,
                                error: D,
                                group: D,
                                groupCollapsed: D,
                                groupEnd: D
                            });
                        }
                        HO++;
                    }
                    function YS() {
                        if (HO--, HO === 0) {
                            var D = {
                                configurable: true,
                                enumerable: true,
                                writable: true
                            };
                            Object.defineProperties(console, {
                                log: W({}, D, {
                                    value: pd
                                }),
                                info: W({}, D, {
                                    value: sd
                                }),
                                warn: W({}, D, {
                                    value: Cb
                                }),
                                error: W({}, D, {
                                    value: Ll
                                }),
                                group: W({}, D, {
                                    value: gH
                                }),
                                groupCollapsed: W({}, D, {
                                    value: Bq
                                }),
                                groupEnd: W({}, D, {
                                    value: fB
                                })
                            });
                        }
                        if (HO < 0) r("disabledDepth fell below zero. " + "This is a bug in React. Please file an issue.");
                    }
                    GJ.__reactDisabledLog = true;
                    var Bn = m.ReactCurrentDispatcher, Tk;
                    function WI(D, h, z) {
                        if (Tk === void 0) try {
                            throw Error();
                        } catch (D) {
                            var j = D.stack.trim().match(/\n( *(at )?)/);
                            Tk = j && j[1] || "";
                        }
                        return "\n" + Tk + D;
                    }
                    var fU = false, FC, Ri = typeof WeakMap === "function" ? WeakMap : Map;
                    function OV(D, h) {
                        if (!D || fU) return "";
                        var z = FC.get(D), j;
                        if (z !== void 0) return z;
                        fU = true;
                        var F = Error.prepareStackTrace, l;
                        Error.prepareStackTrace = void 0, l = Bn.current, Bn.current = null, fd();
                        try {
                            if (h) {
                                var Z = function() {
                                    throw Error();
                                };
                                if (Object.defineProperty(Z.prototype, "props", {
                                    set: function() {
                                        throw Error();
                                    }
                                }), typeof Reflect === "object" && Reflect.construct) {
                                    try {
                                        Reflect.construct(Z, []);
                                    } catch (D) {
                                        j = D;
                                    }
                                    Reflect.construct(D, [], Z);
                                } else {
                                    try {
                                        Z.call();
                                    } catch (D) {
                                        j = D;
                                    }
                                    D.call(Z.prototype);
                                }
                            } else {
                                try {
                                    throw Error();
                                } catch (D) {
                                    j = D;
                                }
                                D();
                            }
                        } catch (h) {
                            if (h && j && typeof h.stack === "string") {
                                var A = h.stack.split("\n"), q = j.stack.split("\n"), Q = A.length - 1, I = q.length - 1;
                                while (Q >= 1 && I >= 0 && A[Q] !== q[I]) I--;
                                for (;Q >= 1 && I >= 0; Q--, I--) if (A[Q] !== q[I]) {
                                    if (Q !== 1 || I !== 1) do {
                                        if (Q--, I--, I < 0 || A[Q] !== q[I]) {
                                            var E = "\n" + A[Q].replace(" at new ", " at ");
                                            if (D.displayName && E.includes("<anonymous>")) E = E.replace("<anonymous>", D.displayName);
                                            if (typeof D === "function") FC.set(D, E);
                                            return E;
                                        }
                                    } while (Q >= 1 && I >= 0);
                                    break;
                                }
                            }
                        } finally {
                            fU = false, Bn.current = l, YS(), Error.prepareStackTrace = F;
                        }
                        var X = D ? D.displayName || D.name : "", f = X ? WI(X) : "";
                        if (typeof D === "function") FC.set(D, f);
                        return f;
                    }
                    function UE(D, h, z) {
                        return OV(D, false);
                    }
                    function Sg(D) {
                        var h = D.prototype;
                        return !!(h && h.isReactComponent);
                    }
                    function Iz(D, h, z) {
                        if (D == null) return "";
                        if (typeof D === "function") return OV(D, Sg(D));
                        if (typeof D === "string") return WI(D);
                        switch (D) {
                          case E:
                            return WI("Suspense");

                          case X:
                            return WI("SuspenseList");
                        }
                        if (typeof D === "object") switch (D.$$typeof) {
                          case I:
                            return UE(D.render);

                          case f:
                            return Iz(D.type, h, z);

                          case s:
                            var j = D, F = j._payload, l = j._init;
                            try {
                                return Iz(l(F), h, z);
                            } catch (D) {}
                        }
                        return "";
                    }
                    FC = new Ri;
                    var YB = {}, Cp = m.ReactDebugCurrentFrame, Af;
                    function yQ(D) {
                        if (D) {
                            var h = D._owner, z = Iz(D.type, D._source, h ? h.type : null);
                            Cp.setExtraStackFrame(z);
                        } else Cp.setExtraStackFrame(null);
                    }
                    function TV(D, h, z, j, F) {
                        var l = Function.call.bind(hO);
                        for (var Z in D) if (l(D, Z)) {
                            var A = void 0;
                            try {
                                if (typeof D[Z] !== "function") {
                                    var q = Error((j || "React class") + ": " + z + " type `" + Z + "` is invalid; " + "it must be a function, usually from the `prop-types` package, but received `" + typeof D[Z] + "`." + "This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                                    throw q.name = "Invariant Violation", q;
                                }
                                A = D[Z](h, Z, j, z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                            } catch (D) {
                                A = D;
                            }
                            if (A && !(A instanceof Error)) yQ(F), r("%s: type specification of %s" + " `%s` is invalid; the type checker " + "function must return `null` or an `Error` but returned a %s. " + "You may have forgotten to pass an argument to the type checker " + "creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and " + "shape all require an argument).", j || "React class", z, Z, typeof A),
                            yQ(null);
                            if (A instanceof Error && !(A.message in YB)) YB[A.message] = true, yQ(F), r("Failed %s type: %s", z, A.message),
                            yQ(null);
                        }
                    }
                    function Ta(D) {
                        if (D) {
                            var h = D._owner, z = Iz(D.type, D._source, h ? h.type : null);
                            c(z);
                        } else c(null);
                    }
                    function oB() {
                        if (d.current) {
                            var D = LD(d.current.type);
                            if (D) return "\n\nCheck the render method of `" + D + "`.";
                        }
                        return "";
                    }
                    function te(D) {
                        if (D !== void 0) {
                            var h = D.fileName.replace(/^.*[\\\/]/, ""), z = D.lineNumber;
                            return "\n\nCheck your code at " + h + ":" + z + ".";
                        }
                        return "";
                    }
                    function ID(D) {
                        if (D !== null && D !== void 0) return te(D.__source);
                        return "";
                    }
                    Af = false;
                    var pU = {};
                    function zA(D) {
                        var h = oB();
                        if (!h) {
                            var z = typeof D === "string" ? D : D.displayName || D.name;
                            if (z) h = "\n\nCheck the top-level render call using <" + z + ">.";
                        }
                        return h;
                    }
                    function rv(D, h) {
                        if (!D._store || D._store.validated || D.key != null) return;
                        D._store.validated = true;
                        var z = zA(h);
                        if (pU[z]) return;
                        pU[z] = true;
                        var j = "";
                        if (D && D._owner && D._owner !== d.current) j = " It was passed a child from " + LD(D._owner.type) + ".";
                        Ta(D), r('Each child in a list should have a unique "key" prop.' + "%s%s See https://reactjs.org/link/warning-keys for more information.", z, j),
                        Ta(null);
                    }
                    function yq(D, h) {
                        if (typeof D !== "object") return;
                        if (i(D)) for (var z = 0; z < D.length; z++) {
                            var j = D[z];
                            if (An(j)) rv(j, h);
                        } else if (An(D)) {
                            if (D._store) D._store.validated = true;
                        } else if (D) {
                            var F = n(D);
                            if (typeof F === "function") if (F !== D.entries) {
                                var l = F.call(D), Z;
                                while (!(Z = l.next()).done) if (An(Z.value)) rv(Z.value, h);
                            }
                        }
                    }
                    function fp(D) {
                        var h = D.type, z;
                        if (h === null || h === void 0 || typeof h === "string") return;
                        if (typeof h === "function") z = h.propTypes; else if (typeof h === "object" && (h.$$typeof === I || h.$$typeof === f)) z = h.propTypes; else return;
                        if (z) {
                            var j = LD(h);
                            TV(z, D.props, "prop", j, D);
                        } else if (h.PropTypes !== void 0 && !Af) {
                            Af = true;
                            var F = LD(h);
                            r("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", F || "Unknown");
                        }
                        if (typeof h.getDefaultProps === "function" && !h.getDefaultProps.isReactClassApproved) r("getDefaultProps is only used on classic React.createClass " + "definitions. Use a static property named `defaultProps` instead.");
                    }
                    function vN(D) {
                        for (var h = Object.keys(D.props), z = 0; z < h.length; z++) {
                            var j = h[z];
                            if (j !== "children" && j !== "key") {
                                Ta(D), r("Invalid prop `%s` supplied to `React.Fragment`. " + "React.Fragment can only have `key` and `children` props.", j),
                                Ta(null);
                                break;
                            }
                        }
                        if (D.ref !== null) Ta(D), r("Invalid attribute `ref` supplied to `React.Fragment`."),
                        Ta(null);
                    }
                    function Te(D, h, z) {
                        var F = gU(D);
                        if (!F) {
                            var Z = "";
                            if (D === void 0 || typeof D === "object" && D !== null && Object.keys(D).length === 0) Z += " You likely forgot to export your component from the file " + "it's defined in, or you might have mixed up default and named imports.";
                            var A = ID(h), q;
                            if (A) Z += A; else Z += oB();
                            if (D === null) q = "null"; else if (i(D)) q = "array"; else if (D !== void 0 && D.$$typeof === j) q = "<" + (LD(D.type) || "Unknown") + " />",
                            Z = " Did you accidentally export a JSX literal instead of a component?"; else q = typeof D;
                            r("React.createElement: type is invalid -- expected a string (for " + "built-in components) or a class/function (for composite " + "components) but got: %s.%s", q, Z);
                        }
                        var Q = mX.apply(this, arguments);
                        if (Q == null) return Q;
                        if (F) for (var I = 2; I < arguments.length; I++) yq(arguments[I], D);
                        if (D === l) vN(Q); else fp(Q);
                        return Q;
                    }
                    var ju = false;
                    function sB(D) {
                        var h = Te.bind(null, D);
                        if (h.type = D, !ju) ju = true, G("React.createFactory() is deprecated and will be removed in " + "a future major release. Consider using JSX " + "or use React.createElement() directly instead.");
                        return Object.defineProperty(h, "type", {
                            enumerable: false,
                            get: function() {
                                return G("Factory.type is deprecated. Access the class directly " + "before passing it to createFactory."),
                                Object.defineProperty(this, "type", {
                                    value: D
                                }), D;
                            }
                        }), h;
                    }
                    function jS(D, h, z) {
                        for (var j = tR.apply(this, arguments), F = 2; F < arguments.length; F++) yq(arguments[F], j.type);
                        return fp(j), j;
                    }
                    function rM(D, h) {
                        var z = J.transition;
                        J.transition = {};
                        var j = J.transition;
                        J.transition._updatedFibers = new Set;
                        try {
                            D();
                        } finally {
                            if (J.transition = z, z === null && j._updatedFibers) {
                                var F = j._updatedFibers.size;
                                if (F > 10) G("Detected a large number of updates inside startTransition. " + "If this is due to a subscription please re-write it to use React provided hooks. " + "Otherwise concurrent mode guarantees are off the table.");
                                j._updatedFibers.clear();
                            }
                        }
                    }
                    var qM = false, Ja = null;
                    function Qj(D) {
                        if (Ja === null) try {
                            var z = ("require" + Math.random()).slice(0, 7), j = h && h[z];
                            Ja = j.call(h, "timers").setImmediate;
                        } catch (D) {
                            Ja = function(D) {
                                if (qM === false) if (qM = true, typeof MessageChannel === "undefined") r("This browser does not have a MessageChannel implementation, " + "so enqueuing tasks via await act(async () => ...) will fail. " + "Please file an issue at https://github.com/facebook/react/issues " + "if you encounter this warning.");
                                var h = new MessageChannel;
                                h.port1.onmessage = D, h.port2.postMessage(void 0);
                            };
                        }
                        return Ja(D);
                    }
                    var cY = 0, gn = false;
                    function Kf(D) {
                        var h = cY;
                        if (cY++, a.current === null) a.current = [];
                        var z = a.isBatchingLegacy, j;
                        try {
                            if (a.isBatchingLegacy = true, j = D(), !z && a.didScheduleLegacyUpdate) {
                                var F = a.current;
                                if (F !== null) a.didScheduleLegacyUpdate = false, FZ(F);
                            }
                        } catch (D) {
                            throw Ys(h), D;
                        } finally {
                            a.isBatchingLegacy = z;
                        }
                        if (j !== null && typeof j === "object" && typeof j.then === "function") {
                            var l = j, Z = false, A = {
                                then: function(D, z) {
                                    Z = true, l.then((function(j) {
                                        if (Ys(h), cY === 0) wx(j, D, z); else D(j);
                                    }), (function(D) {
                                        Ys(h), z(D);
                                    }));
                                }
                            };
                            if (!gn && typeof Promise !== "undefined") Promise.resolve().then((function() {})).then((function() {
                                if (!Z) gn = true, r("You called act(async () => ...) without await. " + "This could lead to unexpected testing behaviour, " + "interleaving multiple act calls and mixing their " + "scopes. " + "You should - await act(async () => ...);");
                            }));
                            return A;
                        } else {
                            var q = j;
                            if (Ys(h), cY === 0) {
                                var Q = a.current;
                                if (Q !== null) FZ(Q), a.current = null;
                                var I = {
                                    then: function(D, h) {
                                        if (a.current === null) a.current = [], wx(q, D, h); else D(q);
                                    }
                                };
                                return I;
                            } else {
                                var E = {
                                    then: function(D, h) {
                                        D(q);
                                    }
                                };
                                return E;
                            }
                        }
                    }
                    function Ys(D) {
                        if (D !== cY - 1) r("You seem to have overlapping act() calls, this is not supported. " + "Be sure to await previous act() calls before making a new one. ");
                        cY = D;
                    }
                    function wx(D, h, z) {
                        var j = a.current;
                        if (j !== null) try {
                            FZ(j), Qj((function() {
                                if (j.length === 0) a.current = null, h(D); else wx(D, h, z);
                            }));
                        } catch (D) {
                            z(D);
                        } else h(D);
                    }
                    var zD = false;
                    function FZ(D) {
                        if (!zD) {
                            zD = true;
                            var h = 0;
                            try {
                                for (;h < D.length; h++) {
                                    var z = D[h];
                                    do {
                                        z = z(true);
                                    } while (z !== null);
                                }
                                D.length = 0;
                            } catch (z) {
                                throw D = D.slice(h + 1), z;
                            } finally {
                                zD = false;
                            }
                        }
                    }
                    var qm = Te, hl = jS, Ap = sB, BC = {
                        map: wQ,
                        forEach: Hd,
                        count: lp,
                        toArray: rG,
                        only: Az
                    };
                    if (z.Children = BC, z.Component = p, z.Fragment = l, z.Profiler = A, z.PureComponent = B,
                    z.StrictMode = Z, z.Suspense = E, z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = m,
                    z.act = Kf, z.cloneElement = hl, z.createContext = vS, z.createElement = qm, z.createFactory = Ap,
                    z.createRef = R, z.forwardRef = Md, z.isValidElement = An, z.lazy = cz, z.memo = xZ,
                    z.startTransition = rM, z.unstable_act = Kf, z.useCallback = WY, z.useContext = oC,
                    z.useDebugValue = PP, z.useDeferredValue = OK, z.useEffect = nz, z.useId = bv, z.useImperativeHandle = WJ,
                    z.useInsertionEffect = lJ, z.useLayoutEffect = Xv, z.useMemo = KY, z.useReducer = ll,
                    z.useRef = aJ, z.useState = jg, z.useSyncExternalStore = je, z.useTransition = ce,
                    z.version = D, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error);
                })();
            }).call(this);
        }).call(this, D("_process"));
    }, {
        _process: 12
    } ],
    5: [ function(D, h, z) {
        "use strict";
        var j = Symbol.for("react.element"), F = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), Z = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), q = Symbol.for("react.provider"), Q = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), X = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), s = Symbol.iterator;
        function L(D) {
            if (null === D || "object" !== typeof D) return null;
            return D = s && D[s] || D["@@iterator"], "function" === typeof D ? D : null;
        }
        var P = {
            isMounted: function() {
                return !1;
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        }, x = Object.assign, n = {};
        function w(D, h, z) {
            this.props = D, this.context = h, this.refs = n, this.updater = z || P;
        }
        function J() {}
        function a(D, h, z) {
            this.props = D, this.context = h, this.refs = n, this.updater = z || P;
        }
        w.prototype.isReactComponent = {}, w.prototype.setState = function(D, h) {
            if ("object" !== typeof D && "function" !== typeof D && null != D) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, D, h, "setState");
        }, w.prototype.forceUpdate = function(D) {
            this.updater.enqueueForceUpdate(this, D, "forceUpdate");
        }, J.prototype = w.prototype;
        var d = a.prototype = new J;
        d.constructor = a, x(d, w.prototype), d.isPureReactComponent = !0;
        var H = Array.isArray, K = Object.prototype.hasOwnProperty, c = {
            current: null
        }, M = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };
        function S(D, h, z) {
            var F, l = {}, Z = null, A = null;
            if (null != h) for (F in void 0 !== h.ref && (A = h.ref), void 0 !== h.key && (Z = "" + h.key),
            h) K.call(h, F) && !M.hasOwnProperty(F) && (l[F] = h[F]);
            var q = arguments.length - 2;
            if (1 === q) l.children = z; else if (1 < q) {
                for (var Q = Array(q), I = 0; I < q; I++) Q[I] = arguments[I + 2];
                l.children = Q;
            }
            if (D && D.defaultProps) for (F in q = D.defaultProps, q) void 0 === l[F] && (l[F] = q[F]);
            return {
                $$typeof: j,
                type: D,
                key: Z,
                ref: A,
                props: l,
                _owner: c.current
            };
        }
        function T(D, h) {
            return {
                $$typeof: j,
                type: D.type,
                key: h,
                ref: D.ref,
                props: D.props,
                _owner: D._owner
            };
        }
        function e(D) {
            return "object" === typeof D && null !== D && D.$$typeof === j;
        }
        function v(D) {
            var h = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + D.replace(/[=:]/g, (function(D) {
                return h[D];
            }));
        }
        var m = /\/+/g;
        function G(D, h) {
            return "object" === typeof D && null !== D && null != D.key ? v("" + D.key) : h.toString(36);
        }
        function r(D, h, z, l, Z) {
            var A = typeof D;
            if ("undefined" === A || "boolean" === A) D = null;
            var q = !1;
            if (null === D) q = !0; else switch (A) {
              case "string":
              case "number":
                q = !0;
                break;

              case "object":
                switch (D.$$typeof) {
                  case j:
                  case F:
                    q = !0;
                }
            }
            if (q) return q = D, Z = Z(q), D = "" === l ? "." + G(q, 0) : l, H(Z) ? (z = "",
            null != D && (z = D.replace(m, "$&/") + "/"), r(Z, h, z, "", (function(D) {
                return D;
            }))) : null != Z && (e(Z) && (Z = T(Z, z + (!Z.key || q && q.key === Z.key ? "" : ("" + Z.key).replace(m, "$&/") + "/") + D)),
            h.push(Z)), 1;
            if (q = 0, l = "" === l ? "." : l + ":", H(D)) for (var Q = 0; Q < D.length; Q++) {
                A = D[Q];
                var I = l + G(A, Q);
                q += r(A, h, z, I, Z);
            } else if (I = L(D), "function" === typeof I) for (D = I.call(D), Q = 0; !(A = D.next()).done; ) A = A.value,
            I = l + G(A, Q++), q += r(A, h, z, I, Z); else if ("object" === A) throw h = String(D),
            Error("Objects are not valid as a React child (found: " + ("[object Object]" === h ? "object with keys {" + Object.keys(D).join(", ") + "}" : h) + "). If you meant to render a collection of children, use an array instead.");
            return q;
        }
        function t(D, h, z) {
            if (null == D) return D;
            var j = [], F = 0;
            return r(D, j, "", "", (function(D) {
                return h.call(z, D, F++);
            })), j;
        }
        function C(D) {
            if (-1 === D._status) {
                var h = D._result;
                h = h(), h.then((function(h) {
                    if (0 === D._status || -1 === D._status) D._status = 1, D._result = h;
                }), (function(h) {
                    if (0 === D._status || -1 === D._status) D._status = 2, D._result = h;
                })), -1 === D._status && (D._status = 0, D._result = h);
            }
            if (1 === D._status) return D._result.default;
            throw D._result;
        }
        var y = {
            current: null
        }, k = {
            transition: null
        }, W = {
            ReactCurrentDispatcher: y,
            ReactCurrentBatchConfig: k,
            ReactCurrentOwner: c
        };
        function U() {
            throw Error("act(...) is not supported in production builds of React.");
        }
        z.Children = {
            map: t,
            forEach: function(D, h, z) {
                t(D, (function() {
                    h.apply(this, arguments);
                }), z);
            },
            count: function(D) {
                var h = 0;
                return t(D, (function() {
                    h++;
                })), h;
            },
            toArray: function(D) {
                return t(D, (function(D) {
                    return D;
                })) || [];
            },
            only: function(D) {
                if (!e(D)) throw Error("React.Children.only expected to receive a single React element child.");
                return D;
            }
        }, z.Component = w, z.Fragment = l, z.Profiler = A, z.PureComponent = a, z.StrictMode = Z,
        z.Suspense = E, z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W, z.act = U,
        z.cloneElement = function(D, h, z) {
            if (null === D || void 0 === D) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + D + ".");
            var F = x({}, D.props), l = D.key, Z = D.ref, A = D._owner;
            if (null != h) {
                if (void 0 !== h.ref && (Z = h.ref, A = c.current), void 0 !== h.key && (l = "" + h.key),
                D.type && D.type.defaultProps) var q = D.type.defaultProps;
                for (Q in h) K.call(h, Q) && !M.hasOwnProperty(Q) && (F[Q] = void 0 === h[Q] && void 0 !== q ? q[Q] : h[Q]);
            }
            var Q = arguments.length - 2;
            if (1 === Q) F.children = z; else if (1 < Q) {
                q = Array(Q);
                for (var I = 0; I < Q; I++) q[I] = arguments[I + 2];
                F.children = q;
            }
            return {
                $$typeof: j,
                type: D.type,
                key: l,
                ref: Z,
                props: F,
                _owner: A
            };
        }, z.createContext = function(D) {
            return D = {
                $$typeof: Q,
                _currentValue: D,
                _currentValue2: D,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null
            }, D.Provider = {
                $$typeof: q,
                _context: D
            }, D.Consumer = D;
        }, z.createElement = S, z.createFactory = function(D) {
            var h = S.bind(null, D);
            return h.type = D, h;
        }, z.createRef = function() {
            return {
                current: null
            };
        }, z.forwardRef = function(D) {
            return {
                $$typeof: I,
                render: D
            };
        }, z.isValidElement = e, z.lazy = function(D) {
            return {
                $$typeof: f,
                _payload: {
                    _status: -1,
                    _result: D
                },
                _init: C
            };
        }, z.memo = function(D, h) {
            return {
                $$typeof: X,
                type: D,
                compare: void 0 === h ? null : h
            };
        }, z.startTransition = function(D) {
            var h = k.transition;
            k.transition = {};
            try {
                D();
            } finally {
                k.transition = h;
            }
        }, z.unstable_act = U, z.useCallback = function(D, h) {
            return y.current.useCallback(D, h);
        }, z.useContext = function(D) {
            return y.current.useContext(D);
        }, z.useDebugValue = function() {}, z.useDeferredValue = function(D) {
            return y.current.useDeferredValue(D);
        }, z.useEffect = function(D, h) {
            return y.current.useEffect(D, h);
        }, z.useId = function() {
            return y.current.useId();
        }, z.useImperativeHandle = function(D, h, z) {
            return y.current.useImperativeHandle(D, h, z);
        }, z.useInsertionEffect = function(D, h) {
            return y.current.useInsertionEffect(D, h);
        }, z.useLayoutEffect = function(D, h) {
            return y.current.useLayoutEffect(D, h);
        }, z.useMemo = function(D, h) {
            return y.current.useMemo(D, h);
        }, z.useReducer = function(D, h, z) {
            return y.current.useReducer(D, h, z);
        }, z.useRef = function(D) {
            return y.current.useRef(D);
        }, z.useState = function(D) {
            return y.current.useState(D);
        }, z.useSyncExternalStore = function(D, h, z) {
            return y.current.useSyncExternalStore(D, h, z);
        }, z.useTransition = function() {
            return y.current.useTransition();
        }, z.version = "18.3.1";
    }, {} ],
    6: [ function(D, h, z) {
        (function(z) {
            (function() {
                "use strict";
                if (z.env.NODE_ENV === "production") h.exports = D("5o"); else h.exports = D("t6");
            }).call(this);
        }).call(this, D("_process"));
    }, {
        t6: 4,
        "5o": 5,
        _process: 12
    } ],
    7: [ function(D, h, z) {
        (function(D) {
            (function() {
                "use strict";
                var z = Object.defineProperty, j = Object.getOwnPropertyDescriptor, F = Object.getOwnPropertyNames, l = Object.prototype.hasOwnProperty, Z = (D, h) => {
                    for (var j in h) z(D, j, {
                        get: h[j],
                        enumerable: true
                    });
                }, A = (D, h, Z, A) => {
                    if (h && typeof h === "object" || typeof h === "function") for (let q of F(h)) if (!l.call(D, q) && q !== Z) z(D, q, {
                        get: () => h[q],
                        enumerable: !(A = j(h, q)) || A.enumerable
                    });
                    return D;
                }, q = D => A(z({}, "__esModule", {
                    value: true
                }), D), Q = {};
                function I(D) {
                    return `Minified Redux error #${D}; visit https://redux.js.org/Errors?code=${D} for the full message or use the non-minified dev environment for full errors. `;
                }
                Z(Q, {
                    __DO_NOT_USE__ActionTypes: () => L,
                    applyMiddleware: () => m,
                    bindActionCreators: () => e,
                    combineReducers: () => S,
                    compose: () => v,
                    createStore: () => d,
                    isAction: () => G,
                    isPlainObject: () => P,
                    legacy_createStore: () => H
                }), h.exports = q(Q);
                var E = typeof Symbol === "function" && Symbol.observable || "@@observable", X = E, f = () => Math.random().toString(36).substring(7).split("").join("."), s = {
                    INIT: `@@redux/INIT${f()}`,
                    REPLACE: `@@redux/REPLACE${f()}`,
                    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${f()}`
                }, L = s;
                function P(D) {
                    if (typeof D !== "object" || D === null) return false;
                    let h = D;
                    while (Object.getPrototypeOf(h) !== null) h = Object.getPrototypeOf(h);
                    return Object.getPrototypeOf(D) === h || Object.getPrototypeOf(D) === null;
                }
                function x(D) {
                    if (D === void 0) return "undefined";
                    if (D === null) return "null";
                    const h = typeof D;
                    switch (h) {
                      case "boolean":
                      case "string":
                      case "number":
                      case "symbol":
                      case "function":
                        return h;
                    }
                    if (Array.isArray(D)) return "array";
                    if (J(D)) return "date";
                    if (w(D)) return "error";
                    const z = n(D);
                    switch (z) {
                      case "Symbol":
                      case "Promise":
                      case "WeakMap":
                      case "WeakSet":
                      case "Map":
                      case "Set":
                        return z;
                    }
                    return Object.prototype.toString.call(D).slice(8, -1).toLowerCase().replace(/\s/g, "");
                }
                function n(D) {
                    return typeof D.constructor === "function" ? D.constructor.name : null;
                }
                function w(D) {
                    return D instanceof Error || typeof D.message === "string" && D.constructor && typeof D.constructor.stackTraceLimit === "number";
                }
                function J(D) {
                    if (D instanceof Date) return true;
                    return typeof D.toDateString === "function" && typeof D.getDate === "function" && typeof D.setDate === "function";
                }
                function a(h) {
                    let z = typeof h;
                    if (D.env.NODE_ENV !== "production") z = x(h);
                    return z;
                }
                function d(h, z, j) {
                    if (typeof h !== "function") throw new Error(D.env.NODE_ENV === "production" ? I(2) : `Expected the root reducer to be a function. Instead, received: '${a(h)}'`);
                    if (typeof z === "function" && typeof j === "function" || typeof j === "function" && typeof arguments[3] === "function") throw new Error(D.env.NODE_ENV === "production" ? I(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
                    if (typeof z === "function" && typeof j === "undefined") j = z, z = void 0;
                    if (typeof j !== "undefined") {
                        if (typeof j !== "function") throw new Error(D.env.NODE_ENV === "production" ? I(1) : `Expected the enhancer to be a function. Instead, received: '${a(j)}'`);
                        return j(d)(h, z);
                    }
                    let F = h, l = z, Z = new Map, A = Z, q = 0, Q = false;
                    function E() {
                        if (A === Z) A = new Map, Z.forEach(((D, h) => {
                            A.set(h, D);
                        }));
                    }
                    function f() {
                        if (Q) throw new Error(D.env.NODE_ENV === "production" ? I(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
                        return l;
                    }
                    function s(h) {
                        if (typeof h !== "function") throw new Error(D.env.NODE_ENV === "production" ? I(4) : `Expected the listener to be a function. Instead, received: '${a(h)}'`);
                        if (Q) throw new Error(D.env.NODE_ENV === "production" ? I(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
                        let z = true;
                        E();
                        const j = q++;
                        return A.set(j, h), function h() {
                            if (!z) return;
                            if (Q) throw new Error(D.env.NODE_ENV === "production" ? I(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
                            z = false, E(), A.delete(j), Z = null;
                        };
                    }
                    function x(h) {
                        if (!P(h)) throw new Error(D.env.NODE_ENV === "production" ? I(7) : `Actions must be plain objects. Instead, the actual type was: '${a(h)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
                        if (typeof h.type === "undefined") throw new Error(D.env.NODE_ENV === "production" ? I(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
                        if (typeof h.type !== "string") throw new Error(D.env.NODE_ENV === "production" ? I(17) : `Action "type" property must be a string. Instead, the actual type was: '${a(h.type)}'. Value was: '${h.type}' (stringified)`);
                        if (Q) throw new Error(D.env.NODE_ENV === "production" ? I(9) : "Reducers may not dispatch actions.");
                        try {
                            Q = true, l = F(l, h);
                        } finally {
                            Q = false;
                        }
                        const z = Z = A;
                        return z.forEach((D => {
                            D();
                        })), h;
                    }
                    function n(h) {
                        if (typeof h !== "function") throw new Error(D.env.NODE_ENV === "production" ? I(10) : `Expected the nextReducer to be a function. Instead, received: '${a(h)}`);
                        F = h, x({
                            type: L.REPLACE
                        });
                    }
                    function w() {
                        const h = s;
                        return {
                            subscribe(z) {
                                if (typeof z !== "object" || z === null) throw new Error(D.env.NODE_ENV === "production" ? I(11) : `Expected the observer to be an object. Instead, received: '${a(z)}'`);
                                function j() {
                                    const D = z;
                                    if (D.next) D.next(f());
                                }
                                j();
                                const F = h(j);
                                return {
                                    unsubscribe: F
                                };
                            },
                            [X]() {
                                return this;
                            }
                        };
                    }
                    x({
                        type: L.INIT
                    });
                    const J = {
                        dispatch: x,
                        subscribe: s,
                        getState: f,
                        replaceReducer: n,
                        [X]: w
                    };
                    return J;
                }
                function H(D, h, z) {
                    return d(D, h, z);
                }
                function K(D) {
                    if (typeof console !== "undefined" && typeof console.error === "function") ;
                    try {
                        throw new Error(D);
                    } catch (D) {}
                }
                function c(D, h, z, j) {
                    const F = Object.keys(h), l = z && z.type === L.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
                    if (F.length === 0) return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
                    if (!P(D)) return `The ${l} has unexpected type of "${a(D)}". Expected argument to be an object with the following keys: "${F.join('", "')}"`;
                    const Z = Object.keys(D).filter((D => !h.hasOwnProperty(D) && !j[D]));
                    if (Z.forEach((D => {
                        j[D] = true;
                    })), z && z.type === L.REPLACE) return;
                    if (Z.length > 0) return `Unexpected ${Z.length > 1 ? "keys" : "key"} "${Z.join('", "')}" found in ${l}. Expected to find one of the known reducer keys instead: "${F.join('", "')}". Unexpected keys will be ignored.`;
                }
                function M(h) {
                    Object.keys(h).forEach((z => {
                        const j = h[z], F = j(void 0, {
                            type: L.INIT
                        });
                        if (typeof F === "undefined") throw new Error(D.env.NODE_ENV === "production" ? I(12) : `The slice reducer for key "${z}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
                        if (typeof j(void 0, {
                            type: L.PROBE_UNKNOWN_ACTION()
                        }) === "undefined") throw new Error(D.env.NODE_ENV === "production" ? I(13) : `The slice reducer for key "${z}" returned undefined when probed with a random type. Don't try to handle '${L.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
                    }));
                }
                function S(h) {
                    const z = Object.keys(h), j = {};
                    for (let F = 0; F < z.length; F++) {
                        const l = z[F];
                        if (D.env.NODE_ENV !== "production") if (typeof h[l] === "undefined") K(`No reducer provided for key "${l}"`);
                        if (typeof h[l] === "function") j[l] = h[l];
                    }
                    const F = Object.keys(j);
                    let l, Z;
                    if (D.env.NODE_ENV !== "production") l = {};
                    try {
                        M(j);
                    } catch (D) {
                        Z = D;
                    }
                    return function h(z = {}, A) {
                        if (Z) throw Z;
                        if (D.env.NODE_ENV !== "production") {
                            const D = c(z, j, A, l);
                            if (D) K(D);
                        }
                        let q = false;
                        const Q = {};
                        for (let h = 0; h < F.length; h++) {
                            const l = F[h], Z = j[l], E = z[l], X = Z(E, A);
                            if (typeof X === "undefined") {
                                const h = A && A.type;
                                throw new Error(D.env.NODE_ENV === "production" ? I(14) : `When called with an action of type ${h ? `"${String(h)}"` : "(unknown type)"}, the slice reducer for key "${l}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
                            }
                            Q[l] = X, q = q || X !== E;
                        }
                        return q = q || F.length !== Object.keys(z).length, q ? Q : z;
                    };
                }
                function T(D, h) {
                    return function(...z) {
                        return h(D.apply(this, z));
                    };
                }
                function e(h, z) {
                    if (typeof h === "function") return T(h, z);
                    if (typeof h !== "object" || h === null) throw new Error(D.env.NODE_ENV === "production" ? I(16) : `bindActionCreators expected an object or a function, but instead received: '${a(h)}'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
                    const j = {};
                    for (const D in h) {
                        const F = h[D];
                        if (typeof F === "function") j[D] = T(F, z);
                    }
                    return j;
                }
                function v(...D) {
                    if (D.length === 0) return D => D;
                    if (D.length === 1) return D[0];
                    return D.reduce(((D, h) => (...z) => D(h(...z))));
                }
                function m(...h) {
                    return z => (j, F) => {
                        const l = z(j, F);
                        let Z = () => {
                            throw new Error(D.env.NODE_ENV === "production" ? I(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
                        };
                        const A = {
                            getState: l.getState,
                            dispatch: (D, ...h) => Z(D, ...h)
                        }, q = h.map((D => D(A)));
                        return Z = v(...q)(l.dispatch), {
                            ...l,
                            dispatch: Z
                        };
                    };
                }
                function G(D) {
                    return P(D) && "type" in D && typeof D.type === "string";
                }
                0 && (h.exports = {
                    __DO_NOT_USE__ActionTypes: __DO_NOT_USE__ActionTypes,
                    applyMiddleware: m,
                    bindActionCreators: e,
                    combineReducers: S,
                    compose: v,
                    createStore: d,
                    isAction: G,
                    isPlainObject: P,
                    legacy_createStore: H
                });
            }).call(this);
        }).call(this, D("_process"));
    }, {
        _process: 12
    } ],
    8: [ function(D, h, z) {
        (function(h) {
            (function() {
                "use strict";
                if (h.env.NODE_ENV !== "production") (function() {
                    "use strict";
                    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);
                    var h = D("react");
                    function j(D, h) {
                        return D === h && (D !== 0 || 1 / D === 1 / h) || D !== D && h !== h;
                    }
                    var F = typeof Object.is === "function" ? Object.is : j, l = h.useSyncExternalStore, Z = h.useRef, A = h.useEffect, q = h.useMemo, Q = h.useDebugValue;
                    function I(D, h, z, j, I) {
                        var E = Z(null), X;
                        if (E.current === null) X = {
                            hasValue: false,
                            value: null
                        }, E.current = X; else X = E.current;
                        var f = q((function() {
                            var D = false, l, Z, A = function(h) {
                                if (!D) {
                                    D = true, l = h;
                                    var z = j(h);
                                    if (I !== void 0) if (X.hasValue) {
                                        var A = X.value;
                                        if (I(A, z)) return Z = A, A;
                                    }
                                    return Z = z, z;
                                }
                                var q = l, Q = Z;
                                if (F(q, h)) return Q;
                                var E = j(h);
                                if (I !== void 0 && I(Q, E)) return Q;
                                return l = h, Z = E, E;
                            }, q = z === void 0 ? null : z, Q = function() {
                                return A(h());
                            }, E = q === null ? void 0 : function() {
                                return A(q());
                            };
                            return [ Q, E ];
                        }), [ h, z, j, I ]), s = f[0], L = f[1], P = l(D, s, L);
                        return A((function() {
                            X.hasValue = true, X.value = P;
                        }), [ P ]), Q(P), P;
                    }
                    if (z.useSyncExternalStoreWithSelector = I, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error);
                })();
            }).call(this);
        }).call(this, D("_process"));
    }, {
        _process: 12,
        react: 6
    } ],
    9: [ function(D, h, z) {
        "use strict";
        var j = D("react");
        function F(D, h) {
            return D === h && (0 !== D || 1 / D === 1 / h) || D !== D && h !== h;
        }
        var l = "function" === typeof Object.is ? Object.is : F, Z = j.useSyncExternalStore, A = j.useRef, q = j.useEffect, Q = j.useMemo, I = j.useDebugValue;
        z.useSyncExternalStoreWithSelector = function(D, h, z, j, F) {
            var E = A(null);
            if (null === E.current) {
                var X = {
                    hasValue: !1,
                    value: null
                };
                E.current = X;
            } else X = E.current;
            E = Q((function() {
                function D(D) {
                    if (!Z) {
                        if (Z = !0, A = D, D = j(D), void 0 !== F && X.hasValue) {
                            var h = X.value;
                            if (F(h, D)) return q = h;
                        }
                        return q = D;
                    }
                    if (h = q, l(A, D)) return h;
                    var z = j(D);
                    if (void 0 !== F && F(h, z)) return h;
                    return A = D, q = z;
                }
                var Z = !1, A, q, Q = void 0 === z ? null : z;
                return [ function() {
                    return D(h());
                }, null === Q ? void 0 : function() {
                    return D(Q());
                } ];
            }), [ h, z, j, F ]);
            var f = Z(D, E[0], E[1]);
            return q((function() {
                X.hasValue = !0, X.value = f;
            }), [ f ]), I(f), f;
        };
    }, {
        react: 6
    } ],
    10: [ function(D, h, z) {
        (function(z) {
            (function() {
                "use strict";
                if (z.env.NODE_ENV === "production") h.exports = D("Cc"); else h.exports = D("LI");
            }).call(this);
        }).call(this, D("_process"));
    }, {
        LI: 8,
        Cc: 9,
        _process: 12
    } ],
    11: [ function(D, h, z) {
        "use strict";
        var j = void 0 && (void 0).__createBinding || (Object.create ? function(D, h, z, j) {
            if (j === void 0) j = z;
            var F = Object.getOwnPropertyDescriptor(h, z);
            if (!F || ("get" in F ? !h.__esModule : F.writable || F.configurable)) F = {
                enumerable: true,
                get: function() {
                    return h[z];
                }
            };
            Object.defineProperty(D, j, F);
        } : function(D, h, z, j) {
            if (j === void 0) j = z;
            D[j] = h[z];
        }), F = void 0 && (void 0).__setModuleDefault || (Object.create ? function(D, h) {
            Object.defineProperty(D, "default", {
                enumerable: true,
                value: h
            });
        } : function(D, h) {
            D["default"] = h;
        }), l = void 0 && (void 0).__importStar || function(D) {
            if (D && D.__esModule) return D;
            var h = {};
            if (D != null) for (var z in D) if (z !== "default" && Object.prototype.hasOwnProperty.call(D, z)) j(h, D, z);
            return F(h, D), h;
        }, Z = void 0 && (void 0).__importDefault || function(D) {
            return D && D.__esModule ? D : {
                default: D
            };
        };
        Object.defineProperty(z, "__esModule", {
            value: true
        });
        const A = D("KT"), q = Z(D("fm")), Q = l(D("redux")), I = l(D("react-redux"));
        chrome.runtime.onInstalled.addListener((async D => {
            if (D.reason === "install") {
                const D = "js/content.js", h = await chrome.tabs.query({});
                for (const z of h) if (z.id) try {
                    await chrome.scripting.executeScript({
                        target: {
                            tabId: z.id
                        },
                        files: [ D ]
                    });
                } catch (D) {}
            }
        })), (0, A.init)(), (0, q.default)("G-BR1B7R77J1", "xhttwE85S5u2JKmKeNHAcQ");
    }, {
        fm: 13,
        KT: 30,
        "react-redux": 1,
        redux: 7
    } ],
    12: [ function(D, h, z) {
        "use strict";
        var j = h.exports = {}, F, l;
        function Z() {
            throw new Error("setTimeout has not been defined");
        }
        function A() {
            throw new Error("clearTimeout has not been defined");
        }
        function q(D) {
            if (F === setTimeout) return setTimeout(D, 0);
            if ((F === Z || !F) && setTimeout) return F = setTimeout, setTimeout(D, 0);
            try {
                return F(D, 0);
            } catch (h) {
                try {
                    return F.call(null, D, 0);
                } catch (h) {
                    return F.call(this, D, 0);
                }
            }
        }
        function Q(D) {
            if (l === clearTimeout) return clearTimeout(D);
            if ((l === A || !l) && clearTimeout) return l = clearTimeout, clearTimeout(D);
            try {
                return l(D);
            } catch (h) {
                try {
                    return l.call(null, D);
                } catch (h) {
                    return l.call(this, D);
                }
            }
        }
        (function() {
            try {
                if (typeof setTimeout === "function") F = setTimeout; else F = Z;
            } catch (D) {
                F = Z;
            }
            try {
                if (typeof clearTimeout === "function") l = clearTimeout; else l = A;
            } catch (D) {
                l = A;
            }
        })();
        var I = [], E = false, X, f = -1;
        function s() {
            if (!E || !X) return;
            if (E = false, X.length) I = X.concat(I); else f = -1;
            if (I.length) L();
        }
        function L() {
            if (E) return;
            var D = q(s);
            E = true;
            var h = I.length;
            while (h) {
                X = I, I = [];
                while (++f < h) if (X) X[f].run();
                f = -1, h = I.length;
            }
            X = null, E = false, Q(D);
        }
        function P(D, h) {
            this.fun = D, this.array = h;
        }
        function x() {}
        j.nextTick = function(D) {
            var h = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var z = 1; z < arguments.length; z++) h[z - 1] = arguments[z];
            if (I.push(new P(D, h)), I.length === 1 && !E) q(L);
        }, P.prototype.run = function() {
            this.fun.apply(null, this.array);
        }, j.title = "browser", j.browser = true, j.env = {}, j.argv = [], j.version = "",
        j.versions = {}, j.on = x, j.addListener = x, j.once = x, j.off = x, j.removeListener = x,
        j.removeAllListeners = x, j.emit = x, j.prependListener = x, j.prependOnceListener = x,
        j.listeners = function(D) {
            return [];
        }, j.binding = function(D) {
            throw new Error("process.binding is not supported");
        }, j.cwd = function() {
            return "/";
        }, j.chdir = function(D) {
            throw new Error("process.chdir is not supported");
        }, j.umask = function() {
            return 0;
        };
    }, {} ],
    13: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.default = z.analytics = z.Analytics = void 0;
        const j = D("uuid"), F = "https://www.google-analytics.com/mp/collect", l = "https://www.google-analytics.com/debug/mp/collect", Z = "cid", A = 100, q = 30;
        class Q {
            constructor(D, h, z = false) {
                this.measurement_id = D, this.api_secret = h, this.debug = z;
            }
            async getOrCreateClientId() {
                const D = await chrome.storage.local.get(Z);
                let h = D[Z];
                if (!h) h = (0, j.v4)(), await chrome.storage.local.set({
                    [Z]: h
                });
                return h;
            }
            async getOrCreateSessionId() {
                let {sessionData: D} = await chrome.storage.session.get("sessionData");
                const h = Date.now();
                if (D && D.timestamp) {
                    const z = (h - D.timestamp) / 6e4;
                    if (z > q) D = null; else D.timestamp = h, await chrome.storage.session.set({
                        sessionData: D
                    });
                }
                if (!D) D = {
                    session_id: h.toString(),
                    timestamp: h.toString()
                }, await chrome.storage.session.set({
                    sessionData: D
                });
                return D.session_id;
            }
            async fireEvent(D, h = {}) {
                if (!h.session_id) h.session_id = await this.getOrCreateSessionId();
                if (!h.engagement_time_msec) h.engagement_time_msec = A;
                try {
                    const z = await fetch(`${this.debug ? l : F}?measurement_id=${this.measurement_id}&api_secret=${this.api_secret}`, {
                        method: "POST",
                        body: JSON.stringify({
                            client_id: await this.getOrCreateClientId(),
                            events: [ {
                                name: D,
                                params: h
                            } ]
                        })
                    });
                    if (!this.debug) return;
                } catch (D) {}
            }
            async firePageViewEvent(D, h, z = {}) {
                return this.fireEvent("page_view", Object.assign({
                    page_title: D,
                    page_location: h
                }, z));
            }
            async fireErrorEvent(D, h = {}) {
                return this.fireEvent("extension_error", Object.assign(Object.assign({}, D), h));
            }
        }
        function I(D, h) {
            const z = new Q(D, h);
            z.fireEvent("run"), chrome.alarms.create(D, {
                periodInMinutes: 60
            }), chrome.alarms.onAlarm.addListener((() => {
                z.fireEvent("run");
            }));
        }
        z.Analytics = Q, z.analytics = I, z.default = I;
    }, {
        uuid: 14
    } ],
    14: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), Object.defineProperty(z, "NIL", {
            enumerable: true,
            get: function() {
                return A.default;
            }
        }), Object.defineProperty(z, "parse", {
            enumerable: true,
            get: function() {
                return E.default;
            }
        }), Object.defineProperty(z, "stringify", {
            enumerable: true,
            get: function() {
                return I.default;
            }
        }), Object.defineProperty(z, "v1", {
            enumerable: true,
            get: function() {
                return j.default;
            }
        }), Object.defineProperty(z, "v3", {
            enumerable: true,
            get: function() {
                return F.default;
            }
        }), Object.defineProperty(z, "v4", {
            enumerable: true,
            get: function() {
                return l.default;
            }
        }), Object.defineProperty(z, "v5", {
            enumerable: true,
            get: function() {
                return Z.default;
            }
        }), Object.defineProperty(z, "validate", {
            enumerable: true,
            get: function() {
                return Q.default;
            }
        }), Object.defineProperty(z, "version", {
            enumerable: true,
            get: function() {
                return q.default;
            }
        });
        var j = X(D("hP")), F = X(D("NQ")), l = X(D("x2")), Z = X(D("rf")), A = X(D("Ai")), q = X(D("Cp")), Q = X(D("Jd")), I = X(D("Pj")), E = X(D("Dp"));
        function X(D) {
            return D && D.__esModule ? D : {
                default: D
            };
        }
    }, {
        Ai: 17,
        Dp: 18,
        Pj: 22,
        hP: 23,
        NQ: 24,
        x2: 26,
        rf: 27,
        Jd: 28,
        Cp: 29
    } ],
    15: [ function(D, h, z) {
        "use strict";
        function j(D) {
            if (typeof D === "string") {
                const h = unescape(encodeURIComponent(D));
                D = new Uint8Array(h.length);
                for (let z = 0; z < h.length; ++z) D[z] = h.charCodeAt(z);
            }
            return F(Z(A(D), D.length * 8));
        }
        function F(D) {
            const h = [], z = D.length * 32, j = "0123456789abcdef";
            for (let F = 0; F < z; F += 8) {
                const z = D[F >> 5] >>> F % 32 & 255, l = parseInt(j.charAt(z >>> 4 & 15) + j.charAt(z & 15), 16);
                h.push(l);
            }
            return h;
        }
        function l(D) {
            return (D + 64 >>> 9 << 4) + 14 + 1;
        }
        function Z(D, h) {
            D[h >> 5] |= 128 << h % 32, D[l(h) - 1] = h;
            let z = 1732584193, j = -271733879, F = -1732584194, Z = 271733878;
            for (let h = 0; h < D.length; h += 16) {
                const l = z, A = j, Q = F, I = Z;
                z = E(z, j, F, Z, D[h], 7, -680876936), Z = E(Z, z, j, F, D[h + 1], 12, -389564586),
                F = E(F, Z, z, j, D[h + 2], 17, 606105819), j = E(j, F, Z, z, D[h + 3], 22, -1044525330),
                z = E(z, j, F, Z, D[h + 4], 7, -176418897), Z = E(Z, z, j, F, D[h + 5], 12, 1200080426),
                F = E(F, Z, z, j, D[h + 6], 17, -1473231341), j = E(j, F, Z, z, D[h + 7], 22, -45705983),
                z = E(z, j, F, Z, D[h + 8], 7, 1770035416), Z = E(Z, z, j, F, D[h + 9], 12, -1958414417),
                F = E(F, Z, z, j, D[h + 10], 17, -42063), j = E(j, F, Z, z, D[h + 11], 22, -1990404162),
                z = E(z, j, F, Z, D[h + 12], 7, 1804603682), Z = E(Z, z, j, F, D[h + 13], 12, -40341101),
                F = E(F, Z, z, j, D[h + 14], 17, -1502002290), j = E(j, F, Z, z, D[h + 15], 22, 1236535329),
                z = X(z, j, F, Z, D[h + 1], 5, -165796510), Z = X(Z, z, j, F, D[h + 6], 9, -1069501632),
                F = X(F, Z, z, j, D[h + 11], 14, 643717713), j = X(j, F, Z, z, D[h], 20, -373897302),
                z = X(z, j, F, Z, D[h + 5], 5, -701558691), Z = X(Z, z, j, F, D[h + 10], 9, 38016083),
                F = X(F, Z, z, j, D[h + 15], 14, -660478335), j = X(j, F, Z, z, D[h + 4], 20, -405537848),
                z = X(z, j, F, Z, D[h + 9], 5, 568446438), Z = X(Z, z, j, F, D[h + 14], 9, -1019803690),
                F = X(F, Z, z, j, D[h + 3], 14, -187363961), j = X(j, F, Z, z, D[h + 8], 20, 1163531501),
                z = X(z, j, F, Z, D[h + 13], 5, -1444681467), Z = X(Z, z, j, F, D[h + 2], 9, -51403784),
                F = X(F, Z, z, j, D[h + 7], 14, 1735328473), j = X(j, F, Z, z, D[h + 12], 20, -1926607734),
                z = f(z, j, F, Z, D[h + 5], 4, -378558), Z = f(Z, z, j, F, D[h + 8], 11, -2022574463),
                F = f(F, Z, z, j, D[h + 11], 16, 1839030562), j = f(j, F, Z, z, D[h + 14], 23, -35309556),
                z = f(z, j, F, Z, D[h + 1], 4, -1530992060), Z = f(Z, z, j, F, D[h + 4], 11, 1272893353),
                F = f(F, Z, z, j, D[h + 7], 16, -155497632), j = f(j, F, Z, z, D[h + 10], 23, -1094730640),
                z = f(z, j, F, Z, D[h + 13], 4, 681279174), Z = f(Z, z, j, F, D[h], 11, -358537222),
                F = f(F, Z, z, j, D[h + 3], 16, -722521979), j = f(j, F, Z, z, D[h + 6], 23, 76029189),
                z = f(z, j, F, Z, D[h + 9], 4, -640364487), Z = f(Z, z, j, F, D[h + 12], 11, -421815835),
                F = f(F, Z, z, j, D[h + 15], 16, 530742520), j = f(j, F, Z, z, D[h + 2], 23, -995338651),
                z = s(z, j, F, Z, D[h], 6, -198630844), Z = s(Z, z, j, F, D[h + 7], 10, 1126891415),
                F = s(F, Z, z, j, D[h + 14], 15, -1416354905), j = s(j, F, Z, z, D[h + 5], 21, -57434055),
                z = s(z, j, F, Z, D[h + 12], 6, 1700485571), Z = s(Z, z, j, F, D[h + 3], 10, -1894986606),
                F = s(F, Z, z, j, D[h + 10], 15, -1051523), j = s(j, F, Z, z, D[h + 1], 21, -2054922799),
                z = s(z, j, F, Z, D[h + 8], 6, 1873313359), Z = s(Z, z, j, F, D[h + 15], 10, -30611744),
                F = s(F, Z, z, j, D[h + 6], 15, -1560198380), j = s(j, F, Z, z, D[h + 13], 21, 1309151649),
                z = s(z, j, F, Z, D[h + 4], 6, -145523070), Z = s(Z, z, j, F, D[h + 11], 10, -1120210379),
                F = s(F, Z, z, j, D[h + 2], 15, 718787259), j = s(j, F, Z, z, D[h + 9], 21, -343485551),
                z = q(z, l), j = q(j, A), F = q(F, Q), Z = q(Z, I);
            }
            return [ z, j, F, Z ];
        }
        function A(D) {
            if (D.length === 0) return [];
            const h = D.length * 8, z = new Uint32Array(l(h));
            for (let j = 0; j < h; j += 8) z[j >> 5] |= (D[j / 8] & 255) << j % 32;
            return z;
        }
        function q(D, h) {
            const z = (D & 65535) + (h & 65535), j = (D >> 16) + (h >> 16) + (z >> 16);
            return j << 16 | z & 65535;
        }
        function Q(D, h) {
            return D << h | D >>> 32 - h;
        }
        function I(D, h, z, j, F, l) {
            return q(Q(q(q(h, D), q(j, l)), F), z);
        }
        function E(D, h, z, j, F, l, Z) {
            return I(h & z | ~h & j, D, h, F, l, Z);
        }
        function X(D, h, z, j, F, l, Z) {
            return I(h & j | z & ~j, D, h, F, l, Z);
        }
        function f(D, h, z, j, F, l, Z) {
            return I(h ^ z ^ j, D, h, F, l, Z);
        }
        function s(D, h, z, j, F, l, Z) {
            return I(z ^ (h | ~j), D, h, F, l, Z);
        }
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.default = void 0;
        var L = j;
        z.default = L;
    }, {} ],
    16: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.default = void 0;
        const j = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
        var F = {
            randomUUID: j
        };
        z.default = F;
    }, {} ],
    17: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.default = void 0;
        var j = "00000000-0000-0000-0000-000000000000";
        z.default = j;
    }, {} ],
    18: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.default = void 0;
        var j = F(D("Jd"));
        function F(D) {
            return D && D.__esModule ? D : {
                default: D
            };
        }
        function l(D) {
            if (!(0, j.default)(D)) throw TypeError("Invalid UUID");
            let h;
            const z = new Uint8Array(16);
            return z[0] = (h = parseInt(D.slice(0, 8), 16)) >>> 24, z[1] = h >>> 16 & 255, z[2] = h >>> 8 & 255,
            z[3] = h & 255, z[4] = (h = parseInt(D.slice(9, 13), 16)) >>> 8, z[5] = h & 255,
            z[6] = (h = parseInt(D.slice(14, 18), 16)) >>> 8, z[7] = h & 255, z[8] = (h = parseInt(D.slice(19, 23), 16)) >>> 8,
            z[9] = h & 255, z[10] = (h = parseInt(D.slice(24, 36), 16)) / 1099511627776 & 255,
            z[11] = h / 4294967296 & 255, z[12] = h >>> 24 & 255, z[13] = h >>> 16 & 255, z[14] = h >>> 8 & 255,
            z[15] = h & 255, z;
        }
        var Z = l;
        z.default = Z;
    }, {
        Jd: 28
    } ],
    19: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.default = void 0;
        var j = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
        z.default = j;
    }, {} ],
    20: [ function(D, h, z) {
        "use strict";
        let j;
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.default = l;
        const F = new Uint8Array(16);
        function l() {
            if (!j) if (j = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto),
            !j) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            return j(F);
        }
    }, {} ],
    21: [ function(D, h, z) {
        "use strict";
        function j(D, h, z, j) {
            switch (D) {
              case 0:
                return h & z ^ ~h & j;

              case 1:
                return h ^ z ^ j;

              case 2:
                return h & z ^ h & j ^ z & j;

              case 3:
                return h ^ z ^ j;
            }
        }
        function F(D, h) {
            return D << h | D >>> 32 - h;
        }
        function l(D) {
            const h = [ 1518500249, 1859775393, 2400959708, 3395469782 ], z = [ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ];
            if (typeof D === "string") {
                const h = unescape(encodeURIComponent(D));
                D = [];
                for (let z = 0; z < h.length; ++z) D.push(h.charCodeAt(z));
            } else if (!Array.isArray(D)) D = Array.prototype.slice.call(D);
            D.push(128);
            const l = D.length / 4 + 2, Z = Math.ceil(l / 16), A = new Array(Z);
            for (let h = 0; h < Z; ++h) {
                const z = new Uint32Array(16);
                for (let j = 0; j < 16; ++j) z[j] = D[h * 64 + j * 4] << 24 | D[h * 64 + j * 4 + 1] << 16 | D[h * 64 + j * 4 + 2] << 8 | D[h * 64 + j * 4 + 3];
                A[h] = z;
            }
            A[Z - 1][14] = (D.length - 1) * 8 / Math.pow(2, 32), A[Z - 1][14] = Math.floor(A[Z - 1][14]),
            A[Z - 1][15] = (D.length - 1) * 8 & 4294967295;
            for (let D = 0; D < Z; ++D) {
                const l = new Uint32Array(80);
                for (let h = 0; h < 16; ++h) l[h] = A[D][h];
                for (let D = 16; D < 80; ++D) l[D] = F(l[D - 3] ^ l[D - 8] ^ l[D - 14] ^ l[D - 16], 1);
                let Z = z[0], q = z[1], Q = z[2], I = z[3], E = z[4];
                for (let D = 0; D < 80; ++D) {
                    const z = Math.floor(D / 20), A = F(Z, 5) + j(z, q, Q, I) + E + h[z] + l[D] >>> 0;
                    E = I, I = Q, Q = F(q, 30) >>> 0, q = Z, Z = A;
                }
                z[0] = z[0] + Z >>> 0, z[1] = z[1] + q >>> 0, z[2] = z[2] + Q >>> 0, z[3] = z[3] + I >>> 0,
                z[4] = z[4] + E >>> 0;
            }
            return [ z[0] >> 24 & 255, z[0] >> 16 & 255, z[0] >> 8 & 255, z[0] & 255, z[1] >> 24 & 255, z[1] >> 16 & 255, z[1] >> 8 & 255, z[1] & 255, z[2] >> 24 & 255, z[2] >> 16 & 255, z[2] >> 8 & 255, z[2] & 255, z[3] >> 24 & 255, z[3] >> 16 & 255, z[3] >> 8 & 255, z[3] & 255, z[4] >> 24 & 255, z[4] >> 16 & 255, z[4] >> 8 & 255, z[4] & 255 ];
        }
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.default = void 0;
        var Z = l;
        z.default = Z;
    }, {} ],
    22: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.default = void 0, z.unsafeStringify = Z;
        var j = F(D("Jd"));
        function F(D) {
            return D && D.__esModule ? D : {
                default: D
            };
        }
        const l = [];
        for (let D = 0; D < 256; ++D) l.push((D + 256).toString(16).slice(1));
        function Z(D, h = 0) {
            return (l[D[h + 0]] + l[D[h + 1]] + l[D[h + 2]] + l[D[h + 3]] + "-" + l[D[h + 4]] + l[D[h + 5]] + "-" + l[D[h + 6]] + l[D[h + 7]] + "-" + l[D[h + 8]] + l[D[h + 9]] + "-" + l[D[h + 10]] + l[D[h + 11]] + l[D[h + 12]] + l[D[h + 13]] + l[D[h + 14]] + l[D[h + 15]]).toLowerCase();
        }
        function A(D, h = 0) {
            const z = Z(D, h);
            if (!(0, j.default)(z)) throw TypeError("Stringified UUID is invalid");
            return z;
        }
        var q = A;
        z.default = q;
    }, {
        Jd: 28
    } ],
    23: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.default = void 0;
        var j = l(D("aP")), F = D("Pj");
        function l(D) {
            return D && D.__esModule ? D : {
                default: D
            };
        }
        let Z, A, q = 0, Q = 0;
        function I(D, h, z) {
            let l = h && z || 0;
            const I = h || new Array(16);
            D = D || {};
            let E = D.node || Z, X = D.clockseq !== void 0 ? D.clockseq : A;
            if (E == null || X == null) {
                const h = D.random || (D.rng || j.default)();
                if (E == null) E = Z = [ h[0] | 1, h[1], h[2], h[3], h[4], h[5] ];
                if (X == null) X = A = (h[6] << 8 | h[7]) & 16383;
            }
            let f = D.msecs !== void 0 ? D.msecs : Date.now(), s = D.nsecs !== void 0 ? D.nsecs : Q + 1;
            const L = f - q + (s - Q) / 1e4;
            if (L < 0 && D.clockseq === void 0) X = X + 1 & 16383;
            if ((L < 0 || f > q) && D.nsecs === void 0) s = 0;
            if (s >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
            q = f, Q = s, A = X, f += 122192928e5;
            const P = ((f & 268435455) * 1e4 + s) % 4294967296;
            I[l++] = P >>> 24 & 255, I[l++] = P >>> 16 & 255, I[l++] = P >>> 8 & 255, I[l++] = P & 255;
            const x = f / 4294967296 * 1e4 & 268435455;
            I[l++] = x >>> 8 & 255, I[l++] = x & 255, I[l++] = x >>> 24 & 15 | 16, I[l++] = x >>> 16 & 255,
            I[l++] = X >>> 8 | 128, I[l++] = X & 255;
            for (let D = 0; D < 6; ++D) I[l + D] = E[D];
            return h || (0, F.unsafeStringify)(I);
        }
        var E = I;
        z.default = E;
    }, {
        aP: 20,
        Pj: 22
    } ],
    24: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.default = void 0;
        var j = l(D("uN")), F = l(D("JW"));
        function l(D) {
            return D && D.__esModule ? D : {
                default: D
            };
        }
        const Z = (0, j.default)("v3", 48, F.default);
        var A = Z;
        z.default = A;
    }, {
        JW: 15,
        uN: 25
    } ],
    25: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.URL = z.DNS = void 0, z.default = Q;
        var j = D("Pj"), F = l(D("Dp"));
        function l(D) {
            return D && D.__esModule ? D : {
                default: D
            };
        }
        function Z(D) {
            D = unescape(encodeURIComponent(D));
            const h = [];
            for (let z = 0; z < D.length; ++z) h.push(D.charCodeAt(z));
            return h;
        }
        const A = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
        z.DNS = A;
        const q = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
        function Q(D, h, z) {
            function l(D, l, A, q) {
                var Q;
                if (typeof D === "string") D = Z(D);
                if (typeof l === "string") l = (0, F.default)(l);
                if (((Q = l) === null || Q === void 0 ? void 0 : Q.length) !== 16) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
                let I = new Uint8Array(16 + D.length);
                if (I.set(l), I.set(D, l.length), I = z(I), I[6] = I[6] & 15 | h, I[8] = I[8] & 63 | 128,
                A) {
                    q = q || 0;
                    for (let D = 0; D < 16; ++D) A[q + D] = I[D];
                    return A;
                }
                return (0, j.unsafeStringify)(I);
            }
            try {
                l.name = D;
            } catch (D) {}
            return l.DNS = A, l.URL = q, l;
        }
        z.URL = q;
    }, {
        Dp: 18,
        Pj: 22
    } ],
    26: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.default = void 0;
        var j = Z(D("0C")), F = Z(D("aP")), l = D("Pj");
        function Z(D) {
            return D && D.__esModule ? D : {
                default: D
            };
        }
        function A(D, h, z) {
            if (j.default.randomUUID && !h && !D) return j.default.randomUUID();
            D = D || {};
            const Z = D.random || (D.rng || F.default)();
            if (Z[6] = Z[6] & 15 | 64, Z[8] = Z[8] & 63 | 128, h) {
                z = z || 0;
                for (let D = 0; D < 16; ++D) h[z + D] = Z[D];
                return h;
            }
            return (0, l.unsafeStringify)(Z);
        }
        var q = A;
        z.default = q;
    }, {
        "0C": 16,
        aP: 20,
        Pj: 22
    } ],
    27: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.default = void 0;
        var j = l(D("uN")), F = l(D("ja"));
        function l(D) {
            return D && D.__esModule ? D : {
                default: D
            };
        }
        const Z = (0, j.default)("v5", 80, F.default);
        var A = Z;
        z.default = A;
    }, {
        ja: 21,
        uN: 25
    } ],
    28: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.default = void 0;
        var j = F(D("3P"));
        function F(D) {
            return D && D.__esModule ? D : {
                default: D
            };
        }
        function l(D) {
            return typeof D === "string" && j.default.test(D);
        }
        var Z = l;
        z.default = Z;
    }, {
        "3P": 19
    } ],
    29: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.default = void 0;
        var j = F(D("Jd"));
        function F(D) {
            return D && D.__esModule ? D : {
                default: D
            };
        }
        function l(D) {
            if (!(0, j.default)(D)) throw TypeError("Invalid UUID");
            return parseInt(D.slice(14, 15), 16);
        }
        var Z = l;
        z.default = Z;
    }, {
        Jd: 28
    } ],
    30: [ function(D, h, z) {
        "use strict";
        var j = void 0 && (void 0).__importDefault || function(D) {
            return D && D.__esModule ? D : {
                default: D
            };
        };
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.init = void 0;
        const F = D("Zq"), l = j(D("MV"));
        async function Z() {
            const D = new F.Settings;
            await D.init(), D.addOnAdblockChangeListener((() => {
                const h = [], z = [];
                if (D.blockAds) if (z.push("ads"), D.blockAnnotations) z.push("annotations"); else h.push("annotations"); else h.push("ads"),
                h.push("annotations");
                chrome.declarativeNetRequest.updateEnabledRulesets({
                    disableRulesetIds: h,
                    enableRulesetIds: z
                });
            }));
            const h = new l.default(D);
            h.init(), chrome.runtime.onMessage.addListener(((D, z) => {
                var j, F;
                switch (D.action) {
                  case "checkPage":
                    if ((j = z.tab) === null || j === void 0 ? void 0 : j.id) chrome.tabs.sendMessage(z.tab.id, {
                        action: "checkPageResult",
                        data: h.isWatchedTab(z.tab.id)
                    });
                    break;

                  case "reloadPage":
                    if ((F = z.tab) === null || F === void 0 ? void 0 : F.id) chrome.tabs.reload(z.tab.id);
                    break;

                  default:
                    break;
                }
            }));
        }
        z.init = Z;
    }, {
        Zq: 31,
        MV: 32
    } ],
    31: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.Settings = void 0;
        class j {
            constructor() {
                this.blockAds = true, this.blockAnnotations = false, this.changeListeners = [];
            }
            notifyOnChange(D) {
                for (const h of this.changeListeners) h(D);
            }
            async onChangedHandler(D) {
                if ("blockAnnotations" in D) this.blockAnnotations = D.blockAnnotations.newValue,
                this.notifyOnChange({
                    changeType: "annotations",
                    blockAnnotations: D.blockAnnotations.newValue
                });
                if ("blockAds" in D) {
                    const h = this.blockAds;
                    if (this.blockAds = D.blockAds.newValue, h !== D.blockAds.newValue) this.notifyOnChange({
                        changeType: "ads",
                        blockAds: this.blockAds
                    });
                }
            }
            async init() {
                var D, h;
                const z = await chrome.storage.local.get([ "blockAds", "blockAnnotations" ]);
                this.blockAds = (D = z.blockAds) !== null && D !== void 0 ? D : true, this.blockAnnotations = (h = z.blockAnnotations) !== null && h !== void 0 ? h : true,
                chrome.storage.onChanged.addListener(this.onChangedHandler.bind(this));
            }
            setBlockAds(D) {
                const h = {
                    changeType: "ads",
                    blockAds: D
                };
                if (this.blockAds !== D) this.notifyOnChange(h);
                this.blockAds = D, chrome.storage.local.set({
                    blockAds: D
                });
            }
            setBlockAnnotations(D) {
                const h = {
                    changeType: "annotations",
                    blockAnnotations: D
                };
                if (this.blockAnnotations !== D) this.notifyOnChange(h);
                this.blockAnnotations = D, chrome.storage.local.set({
                    blockAnnotations: D
                });
            }
            addOnAdblockChangeListener(D) {
                this.changeListeners.push(D);
            }
        }
        z.Settings = j;
    }, {} ],
    32: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        });
        class j {
            constructor(D) {
                this.REGEX_LIST = [ "(doubleclick.net)", "(adservice.google.)", "(youtube.com/api/stats/ads)", "(&ad_type=)", "(&adurl=)", "(-pagead-id.)", "(doubleclick.com)", "(/ad_status.)", "(/api/ads/)", "(/googleads)", "(/pagead/gen_)", "(/pagead/lvz?)", "(/pubads.)", "(/pubads_)", "(/securepubads)", "(=adunit&)", "(googlesyndication.com)", "(innovid.com)", "(youtube.com/pagead/)", "(google.com/pagead/)", "(flashtalking.com)", "(googleadservices.com)", "(s0.2mdn.net/ads)", "(www.youtube.com/ptracking)", "(www.youtube.com/pagead)", "(www.youtube.com/get_midroll_)", "(www.youtube.com/annotations_invideo/)" ],
                this.youtubeRegex = /^https?:\/\/(\w*.)?youtube.com/i, this.watchedTabs = new Set,
                this.adRegex = new RegExp(this.REGEX_LIST.join("|")), this.settings = D;
            }
            async onUpdatedHandler(D, h, z) {
                if (z.url && z.id) if (this.youtubeRegex.test(z.url)) this.watchedTabs.add(z.id); else this.watchedTabs.delete(z.id);
            }
            isWatchedTab(D) {
                return this.watchedTabs.has(D);
            }
            async init() {
                const D = await chrome.tabs.query({});
                for (const h of D) if (h.url && h.id) if (this.youtubeRegex.test(h.url)) this.watchedTabs.add(h.id);
                chrome.tabs.onUpdated.addListener(this.onUpdatedHandler.bind(this));
            }
        }
        z.default = j;
    }, {} ]
}, {}, [ 11 ]);