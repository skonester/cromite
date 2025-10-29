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
        Object.defineProperty(z, "__esModule", {
            value: true
        });
        const j = D("2p");
        (0, j.run)();
    }, {
        "2p": 4
    } ],
    2: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        });
        class j {
            constructor(D, h) {
                if (this.styleAdsId = "abyt-ads-style", this.styleAnnotationsId = "abyt-ann-style",
                this.settings = D, this.options = h, this.settings.addOnAdblockChangeListener(this.onSettingsChange.bind(this)),
                this.settings.blockAds) this.hideAds();
                if (this.settings.blockAnnotations) this.hideAnnotations();
            }
            onSettingsChange(D) {
                switch (D.changeType) {
                  case "ads":
                    if (D.blockAds) if (this.hideAds(), this.settings.blockAnnotations) this.hideAnnotations(); else this.viewAnnotations(); else this.viewAds(),
                    this.viewAnnotations();
                    break;

                  case "annotations":
                    if (!this.settings.blockAds) return;
                    if (D.blockAnnotations) this.hideAnnotations(); else this.viewAnnotations();
                    break;

                  default:
                    break;
                }
            }
            static createStyleElement(D, h) {
                const z = document.createElement("link");
                return z.id = D, z.setAttribute("rel", "stylesheet"), z.setAttribute("href", h),
                z;
            }
            hideAnnotations() {
                if (document.getElementById(this.styleAnnotationsId)) return;
                if (this.options.annotBlockCss) {
                    const D = j.createStyleElement(this.styleAnnotationsId, chrome.runtime.getURL(this.options.annotBlockCss)), h = document.head || document.body || document.documentElement;
                    h.appendChild(D);
                }
            }
            hideAds() {
                if (document.getElementById(this.styleAdsId)) return;
                const D = j.createStyleElement(this.styleAdsId, chrome.runtime.getURL(this.options.adBlockCss)), h = document.head || document.body || document.documentElement;
                h.appendChild(D);
            }
            viewAnnotations() {
                const D = document.getElementById(this.styleAnnotationsId);
                j.removeElement(D);
            }
            viewAds() {
                const D = document.getElementById(this.styleAdsId);
                j.removeElement(D);
            }
            static removeElement(D) {
                if (D) D.remove();
            }
        }
        z.default = j;
    }, {} ],
    3: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        });
        class j {
            skip() {
                if (!this.settings.blockAds) return;
                const D = document.querySelector(".html5-video-player"), h = D === null || D === void 0 ? void 0 : D.querySelector("video");
                if (D && h && D.classList.contains("ad-showing")) h.currentTime = 1e4;
                const z = this.skipBtnClasses.map((D => document.querySelector(`.${D}.ytp-button`))).filter((D => !!D))[0];
                if (z) if (z.click(), h) h.currentTime = 0;
            }
            onMutation() {
                this.skip();
            }
            constructor(D) {
                this.skipBtnClasses = [ "ytp-ad-skip-button", "ytp-ad-skip-button-modern" ], this.settings = D;
                const h = {
                    attributes: false,
                    childList: true,
                    subtree: true
                };
                this.observer = new MutationObserver(this.onMutation.bind(this)), this.observer.observe(document, h),
                this.skip();
            }
        }
        z.default = j;
    }, {} ],
    4: [ function(D, h, z) {
        "use strict";
        var j = void 0 && (void 0).__importDefault || function(D) {
            return D && D.__esModule ? D : {
                default: D
            };
        };
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.run = void 0;
        const F = j(D("TD")), l = j(D("Dk")), Z = j(D("k9")), A = D("rV"), q = {
            adBlockCss: "/css/remove_ads.css",
            annotBlockCss: "/css/remove_annotations.css"
        };
        async function Q(D = q) {
            chrome.runtime.onMessage.addListener((async h => {
                if (h.action === "checkPageResult") {
                    const z = h.data;
                    if (z) {
                        const h = new A.Settings;
                        await h.init(), new l.default(h), new F.default(h, D), new Z.default(h);
                    }
                }
            })), chrome.runtime.sendMessage({
                action: "checkPage"
            });
        }
        z.run = Q;
    }, {
        TD: 2,
        Dk: 3,
        k9: 5,
        rV: 6
    } ],
    5: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        });
        class j {
            async checkEnforcement() {
                if (!this.settings.blockAds) return;
                const D = document.querySelectorAll("ytd-enforcement-message-view-model");
                if (D.length > 0) {
                    const {last_refresh: D} = await chrome.storage.local.get("last_refresh"), h = +new Date, z = D && D > h + 15 * 1e3;
                    if (!z) chrome.storage.local.set({
                        last_refresh: h
                    }), chrome.runtime.sendMessage({
                        action: "reloadPage"
                    });
                }
            }
            onMutation() {
                this.checkEnforcement();
            }
            constructor(D) {
                this.settings = D;
                const h = {
                    attributes: false,
                    childList: true,
                    subtree: true
                };
                this.observer = new MutationObserver(this.onMutation.bind(this)), this.observer.observe(document, h),
                this.checkEnforcement();
            }
        }
        z.default = j;
    }, {} ],
    6: [ function(D, h, z) {
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
    }, {} ]
}, {}, [ 1 ]);