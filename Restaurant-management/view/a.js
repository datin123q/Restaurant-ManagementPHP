function l(b, a, c, d, e) {
    b.o.Gb(b.nb, a, c, d, e)
}
function m(b, a, c, d) {
    b.o.Z ? l(b, a, c, d) : b.o.Ie()._OnMessageFromDOM({
        type: "event",
        component: b.nb,
        handler: a,
        dispatchOpts: d || null,
        data: c,
        responseId: null
    })
}
function n(b, a, c) {
    b.o.C(b.nb, a, c)
}
function t(b, a) {
    for (const [c,d] of a)
        n(b, c, d)
}
function u(b) {
    b.Tb || (b.o.td(b.be),
    b.Tb = !0)
}
window.Ma = class {
    constructor(b, a) {
        this.o = b;
        this.nb = a;
        this.Tb = !1;
        this.be = ()=>this.va()
    }
    hd() {}
    va() {}
}
;
window.uf = class {
    constructor() {
        this.ed = -1
    }
    j() {
        -1 !== this.ed && (self.clearTimeout(this.ed),
        this.ed = -1)
    }
}
;
"use strict";
class aa {
    constructor(b) {
        this.Rb = b;
        this.Oc = !1;
        this.Wc = !0
    }
}
function ba(b, a) {
    const c = a.elementId
      , d = b.mc(c, a)
      , e = new aa(d);
    b.Sa.set(c, e);
    d.style.boxSizing = "border-box";
    d.style.display = "none";
    e.Wc = !!a.isVisible;
    d.addEventListener("focus", ()=>{
        v(b, "elem-focused", c)
    }
    );
    d.addEventListener("blur", ()=>{
        v(b, "elem-blurred", c)
    }
    );
    b.lb && document.body.appendChild(d)
}
function w(b, a, c) {
    n(b, a, d=>{
        const e = x(b, d.elementId);
        return c(e, d)
    }
    )
}
function x(b, a) {
    b = b.Sa.get(a);
    if (!b)
        throw Error(`no element with id ${a}`);
    return b.Rb
}
function v(b, a, c, d) {
    d || (d = {});
    d.elementId = c;
    l(b, a, d)
}
function ca(b, a, c) {
    var d;
    d || (d = {});
    d.elementId = c;
    m(b, a, d)
}
window.md = class extends self.Ma {
    constructor(b, a) {
        super(b, a);
        this.Sa = new Map;
        this.lb = !0;
        t(this, [["create", c=>ba(this, c)], ["destroy", c=>{
            c = c.elementId;
            const d = x(this, c);
            this.od(d);
            this.lb && d.parentElement.removeChild(d);
            this.Sa.delete(c)
        }
        ], ["set-visible", c=>{
            if (this.lb) {
                var d = this.Sa.get(c.elementId)
                  , e = d.Rb;
                d.Oc ? e.style.display = c.isVisible ? "" : "none" : d.Wc = !!c.isVisible
            }
        }
        ], ["update-position", c=>{
            if (this.lb) {
                var d = this.Sa.get(c.elementId)
                  , e = d.Rb;
                e.style.left = c.left + "px";
                e.style.top = c.top + "px";
                e.style.width = c.width + "px";
                e.style.height = c.height + "px";
                c = c.fontSize;
                null !== c && (e.style.fontSize = c + "em");
                d.Oc || (d.Oc = !0,
                d.Wc && (e.style.display = ""))
            }
        }
        ], ["update-state", c=>{
            const d = x(this, c.elementId);
            this.Jb(d, c)
        }
        ], ["focus", c=>this.Ec(c)], ["set-css-style", c=>{
            const d = x(this, c.elementId)
              , e = c.prop;
            c = c.val;
            e.startsWith("--") ? d.style.setProperty(e, c) : d.style[e] = c
        }
        ], ["set-attribute", c=>{
            x(this, c.elementId).setAttribute(c.name, c.val)
        }
        ], ["remove-attribute", c=>{
            x(this, c.elementId).removeAttribute(c.name)
        }
        ]]);
        w(this, "get-element", c=>c)
    }
    mc() {
        throw Error("required override");
    }
    od() {}
    Jb() {
        throw Error("required override");
    }
    Ec(b) {
        var a = x(this, b.elementId);
        b.focus ? a.focus() : a.blur()
    }
}
;
"use strict";
const da = /(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent)
  , z = /android/i.test(navigator.userAgent)
  , ea = /safari/i.test(navigator.userAgent) && !/(chrome|chromium|edg\/|OPR\/|nwjs)/i.test(navigator.userAgent);
let fa = 0;
function ia(b) {
    const a = document.createElement("script");
    a.async = !1;
    a.type = "module";
    return b.jf ? new Promise(c=>{
        const d = "c3_resolve_" + fa;
        ++fa;
        self[d] = c;
        a.textContent = b.nf + `\n\nself["${d}"]();`;
        document.head.appendChild(a)
    }
    ) : new Promise((c,d)=>{
        a.onload = c;
        a.onerror = d;
        a.src = b;
        document.head.appendChild(a)
    }
    )
}
let ja = !1
  , ka = !1;
function la() {
    if (!ja) {
        try {
            new Worker("blob://",{
                get type() {
                    ka = !0
                }
            })
        } catch (b) {}
        ja = !0
    }
    return ka
}
let A = new Audio;
const ma = {
    "audio/webm; codecs=opus": !!A.canPlayType("audio/webm; codecs=opus"),
    "audio/ogg; codecs=opus": !!A.canPlayType("audio/ogg; codecs=opus"),
    "audio/webm; codecs=vorbis": !!A.canPlayType("audio/webm; codecs=vorbis"),
    "audio/ogg; codecs=vorbis": !!A.canPlayType("audio/ogg; codecs=vorbis"),
    "audio/mp4": !!A.canPlayType("audio/mp4"),
    "audio/mpeg": !!A.canPlayType("audio/mpeg")
};
A = null;
async function na(b) {
    b = await oa(b);
    return (new TextDecoder("utf-8")).decode(b)
}
function oa(b) {
    return new Promise((a,c)=>{
        const d = new FileReader;
        d.onload = e=>a(e.target.result);
        d.onerror = e=>c(e);
        d.readAsArrayBuffer(b)
    }
    )
}
const pa = [];
let D = 0;
window.RealFile = window.File;
const E = []
  , sa = new Map
  , ta = new Map;
let ua = 0;
const va = [];
self.runOnStartup = function(b) {
    if ("function" !== typeof b)
        throw Error("runOnStartup called without a function");
    va.push(b)
}
;
const wa = new Set(["cordova", "playable-ad", "instant-games"]);
let xa = !1;
window.ha = class b {
    constructor(a) {
        this.Z = a.qf;
        this.xa = null;
        this.ca = "";
        this.bb = a.mf;
        this.Db = {};
        this.Va = this.ua = null;
        this.Qb = [];
        this.I = this.ya = null;
        this.Sc = !1;
        this.Id = 0;
        this.sb = null;
        this.ab = -1;
        this.cf = ()=>this.Qe();
        this.$a = [];
        this.u = a.ce;
        this.Ub = "file" === location.protocol.substr(0, 4);
        !this.Z || "undefined" !== typeof OffscreenCanvas && navigator.userActivation && la() || (this.Z = !1);
        this.Z && ea && (this.Z = !1);
        if ("playable-ad" === this.u || "instant-games" === this.u)
            this.Z = !1;
        if ("cordova" === this.u && this.Z)
            if (z) {
                const c = /Chrome\/(\d+)/i.exec(navigator.userAgent);
                c && 90 <= parseInt(c[1], 10) || (this.Z = !1)
            } else
                this.Z = !1;
        this.Xb = this.ra = null;
        "html5" !== this.u || window.isSecureContext || console.warn("[Construct] Warning: the browser indicates this is not a secure context. Some features may be unavailable. Use secure (HTTPS) hosting to ensure all features are available.");
        this.C("runtime", "cordova-fetch-local-file", c=>this.Me(c));
        this.C("runtime", "create-job-worker", ()=>this.Ne());
        "cordova" === this.u ? document.addEventListener("deviceready", ()=>this.xd(a)) : this.xd(a)
    }
    j() {
        this.xc();
        this.xa && (this.xa = this.xa.onmessage = null);
        this.ua && (this.ua.terminate(),
        this.ua = null);
        this.Va && (this.Va.j(),
        this.Va = null);
        this.I && (this.I.parentElement.removeChild(this.I),
        this.I = null)
    }
    rd() {
        return da && "cordova" === this.u
    }
    sc() {
        const a = navigator.userAgent;
        return da && wa.has(this.u) || navigator.standalone || /crios\/|fxios\/|edgios\//i.test(a)
    }
    ve() {
        return z
    }
    pd() {
        return z && wa.has(this.u)
    }
    async xd(a) {
        "macos-wkwebview" === this.u && this.Hc({
            type: "ready"
        });
        if ("playable-ad" === this.u) {
            this.ra = self.c3_base64files;
            this.Xb = {};
            await this.Ee();
            for (let d = 0, e = a.eb.length; d < e; ++d) {
                var c = a.eb[d];
                this.Xb.hasOwnProperty(c) ? a.eb[d] = {
                    jf: !0,
                    nf: this.Xb[c]
                } : this.ra.hasOwnProperty(c) && (a.eb[d] = URL.createObjectURL(this.ra[c]))
            }
            a.kc = []
        }
        if ("nwjs" === this.u && self.nw && self.nw.App.manifest["c3-steam-mode"]) {
            let d = 0;
            this.td(()=>{
                d++;
                document.body.style.opacity = 0 === d % 2 ? "1" : "0.999"
            }
            )
        }
        a.lf ? this.ca = a.lf : (c = location.origin,
        this.ca = ("null" === c ? "file:///" : c) + location.pathname,
        c = this.ca.lastIndexOf("/"),
        -1 !== c && (this.ca = this.ca.substr(0, c + 1)));
        a.sf && (this.Db = a.sf);
        c = new MessageChannel;
        this.xa = c.port1;
        this.xa.onmessage = d=>this._OnMessageFromRuntime(d.data);
        window.c3_addPortMessageHandler && window.c3_addPortMessageHandler(d=>this.Pe(d));
        this.sb = new self.xe(this);
        await ya(this.sb);
        "object" === typeof window.StatusBar && window.StatusBar.hide();
        if ("object" === typeof window.AndroidFullScreen)
            try {
                await new Promise((d,e)=>{
                    window.AndroidFullScreen.immersiveMode(d, e)
                }
                )
            } catch (d) {
                console.error("Failed to enter Android immersive mode: ", d)
            }
        this.Z ? await this.Le(a, c.port2) : await this.Ke(a, c.port2)
    }
    zc(a) {
        a = this.Db.hasOwnProperty(a) ? this.Db[a] : a.endsWith("/workermain.js") && this.Db.hasOwnProperty("workermain.js") ? this.Db["workermain.js"] : "playable-ad" === this.u && this.ra.hasOwnProperty(a) ? this.ra[a] : a;
        a instanceof Blob && (a = URL.createObjectURL(a));
        return a
    }
    async nc(a, c, d) {
        if (a.startsWith("blob:"))
            return new Worker(a,d);
        if ("cordova" === this.u && this.Ub)
            return a = await this.Eb(d.hf ? a : this.bb + a),
            new Worker(URL.createObjectURL(new Blob([a],{
                type: "application/javascript"
            })),d);
        a = new URL(a,c);
        if (location.origin !== a.origin) {
            a = await fetch(a);
            if (!a.ok)
                throw Error("failed to fetch worker script");
            a = await a.blob();
            return new Worker(URL.createObjectURL(a),d)
        }
        return new Worker(a,d)
    }
    pa() {
        return Math.max(window.innerWidth, 1)
    }
    ia() {
        return Math.max(window.innerHeight, 1)
    }
    vd(a) {
        var c = this.ca
          , d = location.href
          , e = this.pa()
          , f = this.ia()
          , g = window.devicePixelRatio
          , h = b.ib()
          , k = a.zf
          , p = window.cr_previewImageBlobs || this.ra
          , q = window.cr_previewProjectFileBlobs
          , B = window.cr_previewProjectFiles
          , y = window.xf || "";
        a = a.ce;
        var r = (new URLSearchParams(self.location.search)).has("debug")
          , C = this.sb;
        return {
            runtimeBaseUrl: c,
            previewUrl: d,
            windowInnerWidth: e,
            windowInnerHeight: f,
            devicePixelRatio: g,
            isFullscreen: h,
            projectData: k,
            previewImageBlobs: p,
            previewProjectFileBlobs: q,
            previewProjectFileSWUrls: B,
            swClientId: y,
            exportType: a,
            isDebug: r,
            ife: !!self.yf,
            jobScheduler: {
                inputPort: C.Rc,
                outputPort: C.$c,
                maxNumWorkers: C.$e
            },
            supportedAudioFormats: ma,
            opusWasmScriptUrl: window.cr_opusWasmScriptUrl || this.bb + "opus.wasm.js",
            opusWasmBinaryUrl: window.cr_opusWasmBinaryUrl || this.bb + "opus.wasm.wasm",
            isFileProtocol: this.Ub,
            isiOSCordova: this.rd(),
            isiOSWebView: this.sc(),
            isFBInstantAvailable: "undefined" !== typeof self.FBInstant
        }
    }
    async Le(a, c) {
        const d = this.zc(a.rf);
        "preview" === this.u ? (this.ua = new Worker("previewworker.js",{
            type: "module",
            name: "Runtime"
        }),
        await new Promise((h,k)=>{
            const p = q=>{
                this.ua.removeEventListener("message", p);
                q.data && "ok" === q.data.type ? h() : k()
            }
            ;
            this.ua.addEventListener("message", p);
            this.ua.postMessage({
                type: "construct-worker-init",
                "import": (new URL(d,this.ca)).toString()
            })
        }
        )) : this.ua = await this.nc(d, this.ca, {
            type: "module",
            name: "Runtime",
            hf: !0
        });
        this.I = document.createElement("canvas");
        this.I.style.display = "none";
        const e = this.I.transferControlToOffscreen();
        document.body.appendChild(this.I);
        window.c3canvas = this.I;
        self.C3_InsertHTMLPlaceholders && self.C3_InsertHTMLPlaceholders();
        let f = a.kc || []
          , g = a.eb;
        f = await Promise.all(f.map(h=>this.Pa(h)));
        g = await Promise.all(g.map(h=>this.Pa(h)));
        if ("cordova" === this.u)
            for (let h = 0, k = a.jc.length; h < k; ++h) {
                const p = a.jc[h]
                  , q = p[0];
                if (q === a.fd || "scriptsInEvents.js" === q || q.endsWith("/scriptsInEvents.js"))
                    p[1] = await this.Pa(q)
            }
        this.ua.postMessage(Object.assign(this.vd(a), {
            type: "init-runtime",
            isInWorker: !0,
            messagePort: c,
            canvas: e,
            workerDependencyScripts: f,
            engineScripts: g,
            projectScripts: a.jc,
            mainProjectScript: a.fd,
            projectScriptsStatus: self.C3_ProjectScriptsStatus
        }), [c, e, ...za(this.sb)]);
        this.Qb = E.map(h=>new h(this));
        this.ud();
        Aa(this.ya);
        self.c3_callFunction = (h,k)=>{
            var p = this.ya;
            return p.o.sd(p.nb, "js-invoke-function", {
                name: h,
                params: k
            }, void 0, void 0)
        }
        ;
        "preview" === this.u && (self.goToLastErrorScript = ()=>this.Gb("runtime", "go-to-last-error-script"))
    }
    async Ke(a, c) {
        this.I = document.createElement("canvas");
        this.I.style.display = "none";
        document.body.appendChild(this.I);
        window.c3canvas = this.I;
        self.C3_InsertHTMLPlaceholders && self.C3_InsertHTMLPlaceholders();
        this.Qb = E.map(g=>new g(this));
        this.ud();
        var d = a.eb.map(g=>"string" === typeof g ? (new URL(g,this.ca)).toString() : g);
        Array.isArray(a.kc) && d.unshift(...a.kc);
        d = await Promise.all(d.map(g=>this.Pa(g)));
        await Promise.all(d.map(g=>ia(g)));
        d = self.C3_ProjectScriptsStatus;
        const e = a.fd
          , f = a.jc;
        for (let[g,h] of f)
            if (h || (h = g),
            g === e)
                try {
                    h = await this.Pa(h),
                    await ia(h),
                    "preview" !== this.u || d[g] || this.Ad(g, "main script did not run to completion")
                } catch (k) {
                    this.Ad(g, k)
                }
            else if ("scriptsInEvents.js" === g || g.endsWith("/scriptsInEvents.js"))
                h = await this.Pa(h),
                await ia(h);
        "preview" === this.u && "object" !== typeof self.tf.vf ? (this.Lb(),
        console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),
        alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")) : (a = Object.assign(this.vd(a), {
            isInWorker: !1,
            messagePort: c,
            canvas: this.I,
            runOnStartupFunctions: va
        }),
        Aa(this.ya),
        this.zd(),
        this.Va = self.C3_CreateRuntime(a),
        await self.C3_InitRuntime(this.Va, a))
    }
    Ad(a, c) {
        this.Lb();
        console.error(`[Preview] Failed to load project main script (${a}): `, c);
        alert(`Failed to load project main script (${a}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)
    }
    zd() {
        this.Lb()
    }
    Lb() {
        const a = window.ff;
        a && (a.parentElement.removeChild(a),
        window.ff = null)
    }
    async Ne() {
        const a = await Ba(this.sb);
        return {
            outputPort: a,
            transferables: [a]
        }
    }
    Ie() {
        if (this.Z)
            throw Error("not available in worker mode");
        return this.Va
    }
    Gb(a, c, d, e, f) {
        this.xa.postMessage({
            type: "event",
            component: a,
            handler: c,
            dispatchOpts: e || null,
            data: d,
            responseId: null
        }, f)
    }
    sd(a, c, d, e, f) {
        const g = ua++
          , h = new Promise((k,p)=>{
            ta.set(g, {
                resolve: k,
                reject: p
            })
        }
        );
        this.xa.postMessage({
            type: "event",
            component: a,
            handler: c,
            dispatchOpts: e || null,
            data: d,
            responseId: g
        }, f);
        return h
    }
    _OnMessageFromRuntime(a) {
        const c = a.type;
        if ("event" === c)
            return this.Oe(a);
        if ("result" === c)
            this.Re(a);
        else if ("runtime-ready" === c)
            this.Se();
        else if ("alert-error" === c)
            this.Lb(),
            alert(a.message);
        else if ("creating-runtime" === c)
            this.zd();
        else
            throw Error(`unknown message '${c}'`);
    }
    Oe(a) {
        const c = a.component
          , d = a.handler
          , e = a.data
          , f = a.responseId;
        if (a = sa.get(c))
            if (a = a.get(d)) {
                var g = null;
                try {
                    g = a(e)
                } catch (h) {
                    console.error(`Exception in '${c}' handler '${d}':`, h);
                    null !== f && this.Kb(f, !1, "" + h);
                    return
                }
                if (null === f)
                    return g;
                g && g.then ? g.then(h=>this.Kb(f, !0, h)).catch(h=>{
                    console.error(`Rejection from '${c}' handler '${d}':`, h);
                    this.Kb(f, !1, "" + h)
                }
                ) : this.Kb(f, !0, g)
            } else
                console.warn(`[DOM] No handler '${d}' for component '${c}'`);
        else
            console.warn(`[DOM] No event handlers for component '${c}'`)
    }
    Kb(a, c, d) {
        let e;
        d && d.transferables && (e = d.transferables);
        this.xa.postMessage({
            type: "result",
            responseId: a,
            isOk: c,
            result: d
        }, e)
    }
    Re(a) {
        const c = a.responseId
          , d = a.isOk;
        a = a.result;
        const e = ta.get(c);
        d ? e.resolve(a) : e.reject(a);
        ta.delete(c)
    }
    C(a, c, d) {
        let e = sa.get(a);
        e || (e = new Map,
        sa.set(a, e));
        if (e.has(c))
            throw Error(`[DOM] Component '${a}' already has handler '${c}'`);
        e.set(c, d)
    }
    static Ba(a) {
        if (E.includes(a))
            throw Error("DOM handler already added");
        E.push(a)
    }
    ud() {
        for (const a of this.Qb)
            if ("runtime" === a.nb) {
                this.ya = a;
                return
            }
        throw Error("cannot find runtime DOM handler");
    }
    Pe(a) {
        this.Gb("debugger", "message", a)
    }
    Se() {
        for (const a of this.Qb)
            a.hd()
    }
    static ib() {
        return !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || xa)
    }
    static Mb(a) {
        xa = !!a
    }
    td(a) {
        this.$a.push(a);
        this.Gc()
    }
    Ue(a) {
        a = this.$a.indexOf(a);
        if (-1 === a)
            throw Error("invalid callback");
        this.$a.splice(a, 1);
        this.$a.length || this.xc()
    }
    Gc() {
        -1 === this.ab && this.$a.length && (this.ab = requestAnimationFrame(this.cf))
    }
    xc() {
        -1 !== this.ab && (cancelAnimationFrame(this.ab),
        this.ab = -1)
    }
    Qe() {
        this.ab = -1;
        for (const a of this.$a)
            a();
        this.Gc()
    }
    Ea(a) {
        this.ya.Ea(a)
    }
    Oa(a) {
        this.ya.Oa(a)
    }
    Fc() {
        this.ya.Fc()
    }
    Ib(a) {
        this.ya.Ib(a)
    }
    we() {
        return !!ma["audio/webm; codecs=opus"]
    }
    async We(a) {
        a = await this.sd("runtime", "opus-decode", {
            arrayBuffer: a
        }, null, [a]);
        return new Float32Array(a)
    }
    Ae(a) {
        this.Sc = !0;
        this.Id = a
    }
    ue(a) {
        return /^(?:[a-z\-]+:)?\/\//.test(a) || "data:" === a.substr(0, 5) || "blob:" === a.substr(0, 5)
    }
    qd(a) {
        return !this.ue(a)
    }
    async Pa(a) {
        return "cordova" === this.u && (a.startsWith("file:") || this.Ub && this.qd(a)) ? (a.startsWith(this.ca) && (a = a.substr(this.ca.length)),
        a = await this.Eb(a),
        URL.createObjectURL(new Blob([a],{
            type: "application/javascript"
        }))) : a
    }
    async Me(a) {
        const c = a.filename;
        switch (a.as) {
        case "text":
            return await this.te(c);
        case "buffer":
            return await this.Eb(c);
        default:
            throw Error("unsupported type");
        }
    }
    wd() {
        const a = window.cordova && window.cordova.plugins && window.cordova.plugins.permissions;
        if ("object" !== typeof a)
            throw Error("Permission API is not loaded");
        return a
    }
    yd(a, c) {
        a = a[c];
        if ("string" !== typeof a)
            throw Error("Invalid permission name");
        return a
    }
    Je(a) {
        const c = this.wd();
        return new Promise((d,e)=>c.checkPermission(this.yd(c, a), f=>d(!!f.hasPermission), e))
    }
    Ve(a) {
        const c = this.wd();
        return new Promise((d,e)=>c.requestPermission(this.yd(c, a), f=>d(!!f.hasPermission), e))
    }
    async ze(a) {
        if ("cordova" !== this.u || this.rd())
            return !0;
        for (const c of a)
            if (!await this.Je(c) && !1 === await this.Ve(c))
                return !1;
        return !0
    }
    async tc(...a) {
        if (!1 === await this.ze(a))
            throw Error("Permission not granted");
    }
    ld(a) {
        const c = window.cordova.file.applicationDirectory + "www/" + a;
        return new Promise((d,e)=>{
            window.resolveLocalFileSystemURL(c, f=>{
                f.file(d, e)
            }
            , e)
        }
        )
    }
    async te(a) {
        a = await this.ld(a);
        return await na(a)
    }
    yc() {
        if (pa.length && !(8 <= D)) {
            D++;
            var a = pa.shift();
            this.Fe(a.filename, a.pf, a.gf)
        }
    }
    Eb(a) {
        return new Promise((c,d)=>{
            pa.push({
                filename: a,
                pf: e=>{
                    D--;
                    this.yc();
                    c(e)
                }
                ,
                gf: e=>{
                    D--;
                    this.yc();
                    d(e)
                }
            });
            this.yc()
        }
        )
    }
    async Fe(a, c, d) {
        try {
            const e = await this.ld(a)
              , f = await oa(e);
            c(f)
        } catch (e) {
            d(e)
        }
    }
    Hc(a) {
        if ("windows-webview2" === this.u)
            window.chrome.webview.postMessage(JSON.stringify(a));
        else if ("macos-wkwebview" === this.u)
            window.webkit.messageHandlers.C3Wrapper.postMessage(JSON.stringify(a));
        else
            throw Error("cannot send wrapper message");
    }
    async Ee() {
        const a = [];
        for (const [c,d] of Object.entries(this.ra))
            a.push(this.De(c, d));
        await Promise.all(a)
    }
    async De(a, c) {
        if ("object" === typeof c)
            this.ra[a] = new Blob([c.str],{
                type: c.type
            }),
            this.Xb[a] = c.str;
        else {
            let d = await this.He(c);
            d || (d = this.Ge(c));
            this.ra[a] = d
        }
    }
    async He(a) {
        try {
            return await (await fetch(a)).blob()
        } catch (c) {
            return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.", c),
            null
        }
    }
    Ge(a) {
        a = this.Te(a);
        return this.Ce(a.data, a.kf)
    }
    Te(a) {
        var c = a.indexOf(",");
        if (0 > c)
            throw new URIError("expected comma in data: uri");
        var d = a.substring(c + 1);
        c = a.substring(5, c).split(";");
        a = c[0] || "";
        const e = c[2];
        d = "base64" === c[1] || "base64" === e ? atob(d) : decodeURIComponent(d);
        return {
            kf: a,
            data: d
        }
    }
    Ce(a, c) {
        var d = a.length;
        let e = d >> 2, f = new Uint8Array(d), g = new Uint32Array(f.buffer,0,e), h, k;
        for (k = h = 0; h < e; ++h)
            g[h] = a.charCodeAt(k++) | a.charCodeAt(k++) << 8 | a.charCodeAt(k++) << 16 | a.charCodeAt(k++) << 24;
        for (d &= 3; d--; )
            f[k] = a.charCodeAt(k),
            ++k;
        return new Blob([f],{
            type: c
        })
    }
}
;
"use strict";
const F = self.ha;
function Ca(b) {
    return b.sourceCapabilities && b.sourceCapabilities.firesTouchEvents || b.originalEvent && b.originalEvent.sourceCapabilities && b.originalEvent.sourceCapabilities.firesTouchEvents
}
const Da = new Map([["OSLeft", "MetaLeft"], ["OSRight", "MetaRight"]])
  , H = {
    dispatchRuntimeEvent: !0,
    dispatchUserScriptEvent: !0
}
  , Ea = {
    dispatchUserScriptEvent: !0
}
  , Fa = {
    dispatchRuntimeEvent: !0
};
function Ga(b) {
    return new Promise((a,c)=>{
        const d = document.createElement("link");
        d.onload = ()=>a(d);
        d.onerror = e=>c(e);
        d.rel = "stylesheet";
        d.href = b;
        document.head.appendChild(d)
    }
    )
}
function Ha(b) {
    return new Promise((a,c)=>{
        const d = new Image;
        d.onload = ()=>a(d);
        d.onerror = e=>c(e);
        d.src = b
    }
    )
}
async function I(b) {
    b = URL.createObjectURL(b);
    try {
        return await Ha(b)
    } finally {
        URL.revokeObjectURL(b)
    }
}
function Ia(b) {
    return new Promise((a,c)=>{
        let d = new FileReader;
        d.onload = e=>a(e.target.result);
        d.onerror = e=>c(e);
        d.readAsText(b)
    }
    )
}
async function Ja(b, a, c) {
    if (!/firefox/i.test(navigator.userAgent))
        return await I(b);
    var d = await Ia(b);
    d = (new DOMParser).parseFromString(d, "image/svg+xml");
    const e = d.documentElement;
    if (e.hasAttribute("width") && e.hasAttribute("height")) {
        const f = e.getAttribute("width")
          , g = e.getAttribute("height");
        if (!f.includes("%") && !g.includes("%"))
            return await I(b)
    }
    e.setAttribute("width", a + "px");
    e.setAttribute("height", c + "px");
    d = (new XMLSerializer).serializeToString(d);
    b = new Blob([d],{
        type: "image/svg+xml"
    });
    return await I(b)
}
function Ka(b) {
    do {
        if (b.parentNode && b.hasAttribute("contenteditable"))
            return !0;
        b = b.parentNode
    } while (b);
    return !1
}
const La = new Set(["input", "textarea", "datalist", "select"])
  , Na = new Set(["canvas", "body", "html"]);
function J(b) {
    b.target.tagName && Na.has(b.target.tagName.toLowerCase()) && b.preventDefault()
}
function Oa(b) {
    (b.metaKey || b.ctrlKey) && b.preventDefault()
}
self.C3_GetSvgImageSize = async function(b) {
    b = await I(b);
    if (0 < b.width && 0 < b.height)
        return [b.width, b.height];
    b.style.position = "absolute";
    b.style.left = "0px";
    b.style.top = "0px";
    b.style.visibility = "hidden";
    document.body.appendChild(b);
    const a = b.getBoundingClientRect();
    document.body.removeChild(b);
    return [a.width, a.height]
}
;
self.C3_RasterSvgImageBlob = async function(b, a, c, d, e) {
    b = await Ja(b, a, c);
    const f = document.createElement("canvas");
    f.width = d;
    f.height = e;
    f.getContext("2d").drawImage(b, 0, 0, a, c);
    return f
}
;
let Pa = !1;
document.addEventListener("pause", ()=>Pa = !0);
document.addEventListener("resume", ()=>Pa = !1);
function Aa(b) {
    b.Hd = !0;
    b.Xc = b.o.pa();
    b.tb = b.o.ia()
}
async function Qa(b) {
    await Promise.all(b.webfonts.map(async a=>{
        a = new FontFace(a.name,`url('${a.url}')`);
        document.fonts.add(a);
        await a.load()
    }
    ))
}
async function Ra(b) {
    var a = b.imageBitmapOpts;
    b = await self.C3_RasterSvgImageBlob(b.blob, b.imageWidth, b.imageHeight, b.surfaceWidth, b.surfaceHeight);
    a = a ? await createImageBitmap(b, a) : await createImageBitmap(b);
    return {
        imageBitmap: a,
        transferables: [a]
    }
}
async function Sa(b) {
    return await self.C3_GetSvgImageSize(b.blob)
}
function Ta(b) {
    window.c3_postToMessagePort && (b.from = "runtime",
    window.c3_postToMessagePort(b))
}
function Ua(b) {
    self.setTimeout(()=>{
        b.Gd = !0
    }
    , 1E3);
    "cordova" === b.o.u ? (document.addEventListener("pause", ()=>Va(b, !0)),
    document.addEventListener("resume", ()=>Va(b, !1))) : document.addEventListener("visibilitychange", ()=>Va(b, document.hidden));
    return {
        isSuspended: !(!document.hidden && !Pa)
    }
}
function Wa(b) {
    b.Cd || (b.Cd = !0,
    window.addEventListener("deviceorientation", a=>{
        b.aa || l(b, "deviceorientation", {
            absolute: !!a.absolute,
            alpha: a.alpha || 0,
            beta: a.beta || 0,
            gamma: a.gamma || 0,
            timeStamp: a.timeStamp,
            webkitCompassHeading: a.webkitCompassHeading,
            webkitCompassAccuracy: a.webkitCompassAccuracy
        }, H)
    }
    ),
    window.addEventListener("deviceorientationabsolute", a=>{
        b.aa || l(b, "deviceorientationabsolute", {
            absolute: !!a.absolute,
            alpha: a.alpha || 0,
            beta: a.beta || 0,
            gamma: a.gamma || 0,
            timeStamp: a.timeStamp
        }, H)
    }
    ))
}
function Xa(b) {
    b.Bd || (b.Bd = !0,
    window.addEventListener("devicemotion", a=>{
        if (!b.aa) {
            var c = null
              , d = a.acceleration;
            d && (c = {
                x: d.x || 0,
                y: d.y || 0,
                z: d.z || 0
            });
            d = null;
            var e = a.accelerationIncludingGravity;
            e && (d = {
                x: e.x || 0,
                y: e.y || 0,
                z: e.z || 0
            });
            e = null;
            var f = a.rotationRate;
            f && (e = {
                alpha: f.alpha || 0,
                beta: f.beta || 0,
                gamma: f.gamma || 0
            });
            l(b, "devicemotion", {
                acceleration: c,
                accelerationIncludingGravity: d,
                rotationRate: e,
                interval: a.interval,
                timeStamp: a.timeStamp
            }, H)
        }
    }
    ))
}
async function Ya(b) {
    await Ga(b.url)
}
function Za(b, a) {
    b.Jd = a.message;
    -1 === b.Mc && (b.Mc = setTimeout(()=>{
        b.Mc = -1;
        const c = document.getElementById("exportToVideoMessage");
        c && (c.textContent = b.Jd)
    }
    , 250))
}
function K(b) {
    if (!b.aa) {
        var a = F.ib();
        a && "any" !== b.cd && $a(b);
        l(b, "fullscreenchange", {
            isFullscreen: a,
            innerWidth: b.pa(),
            innerHeight: b.ia()
        })
    }
}
function ab(b, a) {
    console.warn("[Construct] Fullscreen request failed: ", a);
    l(b, "fullscreenerror", {
        isFullscreen: F.ib(),
        innerWidth: b.pa(),
        innerHeight: b.ia()
    })
}
function Va(b, a) {
    a ? b.o.xc() : b.o.Gc();
    l(b, "visibilitychange", {
        hidden: a
    })
}
function bb(b, a, c) {
    "Backspace" === c.key && J(c);
    if (!b.aa) {
        var d = Da.get(c.code) || c.code;
        m(b, a, {
            code: d,
            key: c.key,
            which: c.which,
            repeat: c.repeat,
            altKey: c.altKey,
            ctrlKey: c.ctrlKey,
            metaKey: c.metaKey,
            shiftKey: c.shiftKey,
            timeStamp: c.timeStamp
        }, H)
    }
}
function cb(b, a, c, d) {
    b.aa || Ca(c) || m(b, a, {
        button: c.button,
        buttons: c.buttons,
        clientX: c.clientX,
        clientY: c.clientY + b.da,
        pageX: c.pageX,
        pageY: c.pageY + b.da,
        movementX: c.movementX || 0,
        movementY: c.movementY || 0,
        timeStamp: c.timeStamp
    }, d)
}
function db(b) {
    window !== window.top && window.focus();
    eb(b.target) && document.activeElement && !eb(document.activeElement) && document.activeElement.blur()
}
function L(b, a, c) {
    if (!b.aa) {
        var d = 0;
        "mouse" === c.pointerType && (d = b.yb);
        m(b, a, {
            pointerId: c.pointerId,
            pointerType: c.pointerType,
            button: c.button,
            buttons: c.buttons,
            lastButtons: d,
            clientX: c.clientX,
            clientY: c.clientY + b.da,
            pageX: c.pageX,
            pageY: c.pageY + b.da,
            movementX: c.movementX || 0,
            movementY: c.movementY || 0,
            width: c.width || 0,
            height: c.height || 0,
            pressure: c.pressure || 0,
            tangentialPressure: c.tangentialPressure || 0,
            tiltX: c.tiltX || 0,
            tiltY: c.tiltY || 0,
            twist: c.twist || 0,
            timeStamp: c.timeStamp
        }, H);
        "mouse" === c.pointerType && (d = "mousemove",
        "pointerdown" === a ? d = "mousedown" : "pointerup" === a && (d = "mouseup"),
        cb(b, d, c, Ea),
        b.yb = c.buttons)
    }
}
function gb(b, a, c) {
    if (!b.aa && !Ca(c)) {
        var d = b.yb;
        "pointerdown" === a && 0 !== d ? a = "pointermove" : "pointerup" === a && 0 !== c.buttons && (a = "pointermove");
        m(b, a, {
            pointerId: 1,
            pointerType: "mouse",
            button: c.button,
            buttons: c.buttons,
            lastButtons: d,
            clientX: c.clientX,
            clientY: c.clientY + b.da,
            pageX: c.pageX,
            pageY: c.pageY + b.da,
            movementX: c.movementX || 0,
            movementY: c.movementY || 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            timeStamp: c.timeStamp
        }, H);
        b.yb = c.buttons;
        cb(b, c.type, c, Ea)
    }
}
function M(b, a, c) {
    if (!b.aa)
        for (let d = 0, e = c.changedTouches.length; d < e; ++d) {
            const f = c.changedTouches[d];
            m(b, a, {
                pointerId: f.identifier,
                pointerType: "touch",
                button: 0,
                buttons: 0,
                lastButtons: 0,
                clientX: f.clientX,
                clientY: f.clientY + b.da,
                pageX: f.pageX,
                pageY: f.pageY + b.da,
                movementX: c.movementX || 0,
                movementY: c.movementY || 0,
                width: 2 * (f.radiusX || f.webkitRadiusX || 0),
                height: 2 * (f.radiusY || f.webkitRadiusY || 0),
                pressure: f.force || f.webkitForce || 0,
                tangentialPressure: 0,
                tiltX: 0,
                tiltY: 0,
                twist: f.rotationAngle || 0,
                timeStamp: c.timeStamp
            }, H)
        }
}
function hb(b, a, c) {
    document.body.style.transform = "";
    b.da = 0;
    if (0 < c) {
        var d = document.activeElement;
        d && (d = d.getBoundingClientRect(),
        a = (d.top + d.bottom) / 2 - (a - c) / 2,
        a > c && (a = c),
        0 > a && (a = 0),
        0 < a && (document.body.style.transform = `translateY(${-a}px)`,
        b.da = a))
    }
}
function ib(b, a, c, d) {
    const e = b.pa()
      , f = b.ia();
    b.cb = -1;
    e != a || f != c ? l(b, "window-resize", {
        innerWidth: e,
        innerHeight: f,
        devicePixelRatio: window.devicePixelRatio,
        isFullscreen: F.ib()
    }) : 10 > d && jb(b, e, f, d + 1)
}
function jb(b, a, c, d) {
    -1 !== b.cb && clearTimeout(b.cb);
    b.cb = setTimeout(()=>ib(b, a, c, d), 48)
}
function $a(b) {
    b = b.cd;
    if (screen.orientation && screen.orientation.lock)
        screen.orientation.lock(b).catch(a=>console.warn("[Construct] Failed to lock orientation: ", a));
    else
        try {
            let a = !1;
            screen.lockOrientation ? a = screen.lockOrientation(b) : screen.webkitLockOrientation ? a = screen.webkitLockOrientation(b) : screen.mozLockOrientation ? a = screen.mozLockOrientation(b) : screen.msLockOrientation && (a = screen.msLockOrientation(b));
            a || console.warn("[Construct] Failed to lock orientation")
        } catch (a) {
            console.warn("[Construct] Failed to lock orientation: ", a)
        }
}
function eb(b) {
    return !b || b === document || b === window || b === document.body || "canvas" === b.tagName.toLowerCase()
}
F.Ba(class extends self.Ma {
    constructor(b) {
        super(b, "runtime");
        this.Od = !0;
        this.Hd = !1;
        this.cb = -1;
        this.cd = "any";
        this.Bd = this.Cd = !1;
        this.fc = document.createElement("div");
        this.fc.className = "c3-screen-reader-text";
        this.fc.setAttribute("aria-live", "polite");
        document.body.appendChild(this.fc);
        this.Ha = null;
        this.aa = !1;
        this.Jd = "";
        this.Mc = -1;
        this.Gd = !1;
        this.Xc = b.pa();
        this.tb = b.ia();
        this.da = this.Cb = 0;
        b.C("canvas", "update-size", d=>{
            var e = this.o;
            e.Sc || (e = e.I,
            e.style.width = d.styleWidth + "px",
            e.style.height = d.styleHeight + "px",
            e.style.marginLeft = d.marginLeft + "px",
            e.style.marginTop = d.marginTop + "px",
            document.documentElement.style.setProperty("--construct-scale", d.displayScale),
            this.Od && (e.style.display = "",
            this.Od = !1))
        }
        );
        b.C("runtime", "invoke-download", d=>{
            const e = d.url;
            d = d.filename;
            const f = document.createElement("a")
              , g = document.body;
            f.textContent = d;
            f.href = e;
            f.download = d;
            g.appendChild(f);
            f.click();
            g.removeChild(f)
        }
        );
        b.C("runtime", "load-webfonts", d=>Qa(d));
        b.C("runtime", "raster-svg-image", d=>Ra(d));
        b.C("runtime", "get-svg-image-size", d=>Sa(d));
        b.C("runtime", "set-target-orientation", d=>{
            this.cd = d.targetOrientation
        }
        );
        b.C("runtime", "register-sw", ()=>{
            window.C3_RegisterSW && window.C3_RegisterSW()
        }
        );
        b.C("runtime", "post-to-debugger", d=>Ta(d));
        b.C("runtime", "go-to-script", d=>Ta(d));
        b.C("runtime", "before-start-ticking", ()=>Ua(this));
        b.C("runtime", "debug-highlight", d=>{
            if (d.show) {
                this.Ha || (this.Ha = document.createElement("div"),
                this.Ha.id = "inspectOutline",
                document.body.appendChild(this.Ha));
                var e = this.Ha;
                e.style.display = "";
                e.style.left = d.left - 1 + "px";
                e.style.top = d.top - 1 + "px";
                e.style.width = d.width + 2 + "px";
                e.style.height = d.height + 2 + "px";
                e.textContent = d.name
            } else
                this.Ha && (this.Ha.style.display = "none")
        }
        );
        b.C("runtime", "enable-device-orientation", ()=>Wa(this));
        b.C("runtime", "enable-device-motion", ()=>Xa(this));
        b.C("runtime", "add-stylesheet", d=>Ya(d));
        b.C("runtime", "script-create-worker", d=>{
            const e = d.port2;
            (new Worker(d.url,d.opts)).postMessage({
                type: "construct-worker-init",
                port2: e
            }, [e])
        }
        );
        b.C("runtime", "alert", d=>this.Cc(d));
        b.C("runtime", "screen-reader-text", d=>{
            var e = d.type;
            "create" === e ? (e = document.createElement("p"),
            e.id = "c3-sr-" + d.id,
            e.textContent = d.text,
            this.fc.appendChild(e)) : "update" === e ? (e = document.getElementById("c3-sr-" + d.id)) ? e.textContent = d.text : console.warn(`[Construct] Missing screen reader text with id ${d.id}`) : "release" === e ? (e = document.getElementById("c3-sr-" + d.id)) ? e.remove() : console.warn(`[Construct] Missing screen reader text with id ${d.id}`) : console.warn(`[Construct] Unknown screen reader text update '${e}'`)
        }
        );
        b.C("runtime", "hide-cordova-splash", ()=>{
            navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide()
        }
        );
        b.C("runtime", "set-exporting-to-video", d=>{
            this.aa = !0;
            const e = document.createElement("h1");
            e.id = "exportToVideoMessage";
            e.textContent = d.message;
            document.body.prepend(e);
            document.body.classList.add("exportingToVideo");
            this.o.I.style.display = "";
            this.o.Ae(d.duration)
        }
        );
        b.C("runtime", "export-to-video-progress", d=>Za(this, d));
        b.C("runtime", "exported-to-video", d=>{
            window.ef({
                type: "exported-video",
                blob: d.blob,
                time: d.time
            })
        }
        );
        b.C("runtime", "exported-to-image-sequence", d=>{
            window.ef({
                type: "exported-image-sequence",
                blobArr: d.blobArr,
                time: d.time,
                gif: d.gif
            })
        }
        );
        const a = new Set(["input", "textarea", "datalist"]);
        window.addEventListener("contextmenu", d=>{
            const e = d.target;
            a.has(e.tagName.toLowerCase()) || Ka(e) || d.preventDefault()
        }
        );
        const c = b.I;
        window.addEventListener("selectstart", J);
        window.addEventListener("gesturehold", J);
        c.addEventListener("selectstart", J);
        c.addEventListener("gesturehold", J);
        window.addEventListener("touchstart", J, {
            passive: !1
        });
        "undefined" !== typeof PointerEvent ? (window.addEventListener("pointerdown", J, {
            passive: !1
        }),
        c.addEventListener("pointerdown", J)) : c.addEventListener("touchstart", J);
        this.yb = 0;
        window.addEventListener("mousedown", d=>{
            1 === d.button && d.preventDefault()
        }
        );
        window.addEventListener("mousewheel", Oa, {
            passive: !1
        });
        window.addEventListener("wheel", Oa, {
            passive: !1
        });
        window.addEventListener("resize", ()=>{
            a: {
                if (!this.aa && this.Hd) {
                    var d = this.pa();
                    var e = this.ia();
                    if (this.o.pd()) {
                        if (this.Gd) {
                            if (this.Xc === d && e < this.tb) {
                                this.Cb = this.tb - e;
                                hb(this, this.tb, this.Cb);
                                d = void 0;
                                break a
                            }
                            0 < this.Cb && (this.Cb = 0,
                            hb(this, e, this.Cb))
                        }
                        this.Xc = d;
                        this.tb = e
                    }
                    l(this, "window-resize", {
                        innerWidth: d,
                        innerHeight: e,
                        devicePixelRatio: window.devicePixelRatio,
                        isFullscreen: F.ib()
                    });
                    this.o.sc() && (-1 !== this.cb && clearTimeout(this.cb),
                    ib(this, d, e, 0))
                }
                d = void 0
            }
            return d
        }
        );
        window.addEventListener("fullscreenchange", ()=>K(this));
        window.addEventListener("webkitfullscreenchange", ()=>K(this));
        window.addEventListener("mozfullscreenchange", ()=>K(this));
        window.addEventListener("fullscreenerror", d=>ab(this, d));
        window.addEventListener("webkitfullscreenerror", d=>ab(this, d));
        window.addEventListener("mozfullscreenerror", d=>ab(this, d));
        if (b.sc())
            if (window.visualViewport) {
                let d = Infinity;
                window.visualViewport.addEventListener("resize", ()=>{
                    const e = window.visualViewport.height;
                    e > d && (document.scrollingElement.scrollTop = 0);
                    d = e
                }
                )
            } else
                window.addEventListener("focusout", ()=>{
                    {
                        const f = document.activeElement;
                        if (f) {
                            var d = f.tagName.toLowerCase();
                            var e = new Set("email number password search tel text url".split(" "));
                            d = "textarea" === d ? !0 : "input" === d ? e.has(f.type.toLowerCase() || "text") : Ka(f)
                        } else
                            d = !1
                    }
                    d || (document.scrollingElement.scrollTop = 0)
                }
                );
        self.C3WrapperOnMessage = d=>{
            "entered-fullscreen" === d ? (F.Mb(!0),
            K(this)) : "exited-fullscreen" === d ? (F.Mb(!1),
            K(this)) : console.warn("Unknown wrapper message: ", d)
        }
        ;
        this.Wa = new Set;
        this.Zb = new WeakSet;
        this.wa = !1
    }
    hd() {
        window.addEventListener("focus", ()=>{
            l(this, "window-focus", null, Fa)
        }
        );
        window.addEventListener("blur", ()=>{
            try {
                var a = window.parent && window.parent.document.hasFocus()
            } catch (c) {
                a = !1
            }
            l(this, "window-blur", {
                parentHasFocus: a
            }, Fa);
            this.yb = 0
        }
        );
        window.addEventListener("focusin", a=>{
            a = a.target;
            (La.has(a.tagName.toLowerCase()) || Ka(a)) && l(this, "keyboard-blur", null, Fa)
        }
        );
        window.addEventListener("keydown", a=>bb(this, "keydown", a));
        window.addEventListener("keyup", a=>bb(this, "keyup", a));
        window.addEventListener("dblclick", a=>cb(this, "dblclick", a, H));
        window.addEventListener("wheel", a=>{
            this.aa || l(this, "wheel", {
                clientX: a.clientX,
                clientY: a.clientY + this.da,
                pageX: a.pageX,
                pageY: a.pageY + this.da,
                deltaX: a.deltaX,
                deltaY: a.deltaY,
                deltaZ: a.deltaZ,
                deltaMode: a.deltaMode,
                timeStamp: a.timeStamp
            }, H)
        }
        );
        "undefined" !== typeof PointerEvent ? (window.addEventListener("pointerdown", a=>{
            db(a);
            L(this, "pointerdown", a)
        }
        ),
        this.o.Z && "undefined" !== typeof window.onpointerrawupdate && self === self.top ? window.addEventListener("pointerrawupdate", a=>{
            L(this, "pointermove", a)
        }
        ) : window.addEventListener("pointermove", a=>L(this, "pointermove", a)),
        window.addEventListener("pointerup", a=>L(this, "pointerup", a)),
        window.addEventListener("pointercancel", a=>L(this, "pointercancel", a))) : (window.addEventListener("mousedown", a=>{
            db(a);
            gb(this, "pointerdown", a)
        }
        ),
        window.addEventListener("mousemove", a=>gb(this, "pointermove", a)),
        window.addEventListener("mouseup", a=>gb(this, "pointerup", a)),
        window.addEventListener("touchstart", a=>{
            db(a);
            M(this, "pointerdown", a)
        }
        ),
        window.addEventListener("touchmove", a=>M(this, "pointermove", a)),
        window.addEventListener("touchend", a=>M(this, "pointerup", a)),
        window.addEventListener("touchcancel", a=>M(this, "pointercancel", a)));
        const b = ()=>this.Fc();
        window.addEventListener("pointerup", b, !0);
        window.addEventListener("touchend", b, !0);
        window.addEventListener("click", b, !0);
        window.addEventListener("keydown", b, !0);
        window.addEventListener("gamepadconnected", b, !0);
        this.o.ve() && !this.o.pd() && navigator.virtualKeyboard && (navigator.virtualKeyboard.overlaysContent = !0,
        navigator.virtualKeyboard.addEventListener("geometrychange", ()=>{
            hb(this, this.ia(), navigator.virtualKeyboard.boundingRect.height)
        }
        ))
    }
    pa() {
        return this.o.pa()
    }
    ia() {
        return this.o.ia()
    }
    Fc() {
        var b = [...this.Wa];
        this.Wa.clear();
        if (!this.wa)
            for (const a of b)
                (b = a.play()) && b.catch(()=>{
                    this.Zb.has(a) || this.Wa.add(a)
                }
                )
    }
    Ea(b) {
        if ("function" !== typeof b.play)
            throw Error("missing play function");
        this.Zb.delete(b);
        let a;
        try {
            a = b.play()
        } catch (c) {
            this.Wa.add(b);
            return
        }
        a && a.catch(()=>{
            this.Zb.has(b) || this.Wa.add(b)
        }
        )
    }
    Oa(b) {
        this.Wa.delete(b);
        this.Zb.add(b)
    }
    Ib(b) {
        this.wa = !!b
    }
    Cc(b) {
        alert(b.message)
    }
}
);
"use strict";
async function ya(b) {
    if (b.Xe)
        throw Error("already initialised");
    b.Xe = !0;
    var a = b.za.zc(("playable-ad" === b.za.u ? b.za.bb : "") + "dispatchworker.js");
    b.Lc = await b.za.nc(a, b.mb, {
        name: "DispatchWorker"
    });
    a = new MessageChannel;
    b.Rc = a.port1;
    b.Lc.postMessage({
        type: "_init",
        "in-port": a.port2
    }, [a.port2]);
    b.$c = await Ba(b)
}
function za(b) {
    return [b.Rc, b.$c]
}
async function Ba(b) {
    const a = b.Qd.length;
    var c = b.za.zc(("playable-ad" === b.za.u ? b.za.bb : "") + "jobworker.js");
    c = await b.za.nc(c, b.mb, {
        name: "JobWorker" + a
    });
    const d = new MessageChannel
      , e = new MessageChannel;
    b.Lc.postMessage({
        type: "_addJobWorker",
        port: d.port1
    }, [d.port1]);
    c.postMessage({
        type: "init",
        number: a,
        "dispatch-port": d.port2,
        "output-port": e.port2
    }, [d.port2, e.port2]);
    b.Qd.push(c);
    return e.port1
}
self.xe = class {
    constructor(b) {
        this.za = b;
        this.mb = b.ca;
        this.mb = "preview" === b.u ? this.mb + "workers/" : this.mb + b.bb;
        this.$e = Math.min(navigator.hardwareConcurrency || 2, 16);
        this.Lc = null;
        this.Qd = [];
        this.$c = this.Rc = null
    }
}
;
"use strict";
window.C3_IsSupported && (window.c3_runtimeInterface = new self.ha({
    qf: !0,
    rf: "workermain.js",
    eb: ["scripts/c3runtime.js"],
    jc: [],
    fd: "",
    mf: "scripts/",
    kc: [],
    ce: "html5"
}));
"use strict";
const kb = 180 / Math.PI;
async function lb(b, a) {
    if (a.isiOSCordova || a.isSafari)
        b.bc = !0;
    b.dd = a.timeScaleMode;
    b.Vd = ["equalpower", "HRTF", "soundfield"][a.panningModel];
    b.Fd = ["linear", "inverse", "exponential"][a.distanceModel];
    b.Wd = a.refDistance;
    b.Ud = a.maxDistance;
    b.Yd = a.rolloffFactor;
    if (b.o.Sc)
        b.bc = !0,
        b.g = new OfflineAudioContext({
            numberOfChannels: 2,
            sampleRate: 48E3,
            length: Math.ceil(48E3 * b.o.Id)
        });
    else {
        var c = {
            latencyHint: a.latencyHint
        };
        b.ae || (c.sampleRate = 48E3);
        if ("undefined" !== typeof AudioContext)
            b.g = new AudioContext(c);
        else if ("undefined" !== typeof webkitAudioContext)
            b.g = new webkitAudioContext(c);
        else
            throw Error("Web Audio API not supported");
        mb(b);
        b.g.onstatechange = ()=>{
            "running" !== b.g.state && mb(b);
            l(b, "audiocontext-state", {
                audioContextState: b.g.state
            })
        }
    }
    b.Ra = b.g.createGain();
    b.Ra.connect(b.g.destination);
    c = a.listenerPos;
    b.ba[0] = c[0];
    b.ba[1] = c[1];
    b.ba[2] = c[2];
    b.g.listener.setPosition(c[0], c[1], c[2]);
    b.g.listener.setOrientation(...b.ea);
    self.C3_GetAudioContextCurrentTime = ()=>b.g.currentTime;
    try {
        await Promise.all(a.preloadList.map(d=>N(b, d.originalUrl, d.url, d.type, !1)))
    } catch (d) {
        console.error("[Construct] Preloading sounds failed: ", d)
    }
    return {
        sampleRate: b.g.sampleRate,
        audioContextState: b.g.state,
        outputLatency: b.g.outputLatency || 0
    }
}
async function nb(b, a) {
    var c = a.originalUrl
      , d = a.url;
    const e = a.type
      , f = a.isMusic
      , g = a.tags
      , h = a.isLooping
      , k = a.vol
      , p = a.pos
      , q = a.panning
      , B = a.stereoPan;
    let y = a.off;
    0 < y && !a.trueClock && (b.g.getOutputTimestamp ? (a = b.g.getOutputTimestamp(),
    y = y - a.performanceTime / 1E3 + a.contextTime) : y = y - performance.now() / 1E3 + b.g.currentTime);
    b.Rd = g.slice(0);
    ob(b, g);
    try {
        b.R = await pb(b, c, d, e, g, f);
        if (q) {
            O(b.R, !0);
            var r = b.R
              , C = q.innerAngle
              , qa = q.outerAngle
              , ra = q.outerGain;
            if (r.rb) {
                qb(r, q.x, q.y, q.z, q.angle);
                var G = self.fb.Be;
                r.sa[0] !== G(C) && (r.sa[0] = G(C),
                r.F.coneInnerAngle = G(C));
                r.sa[1] !== G(qa) && (r.sa[1] = G(qa),
                r.F.coneOuterAngle = G(qa));
                r.sa[2] !== ra && (r.sa[2] = ra,
                r.F.coneOuterGain = ra)
            }
            q.hasOwnProperty("uid") && (b.R.qa = q.uid)
        } else
            "number" === typeof B && 0 !== B ? (P(b.R, !0),
            rb(b.R, B)) : (O(b.R, !1),
            P(b.R, !1));
        b.R.Play(h, k, p, y)
    } catch (Ib) {
        console.error("[Construct] Audio: error starting playback: ", Ib);
        return
    } finally {
        c = g.join(" ");
        d = b.Ab.get(c);
        if (!d)
            throw Error("expected pending tag");
        d.gd--;
        0 === d.gd && (d.resolve(),
        b.Ab.delete(c))
    }
    u(b)
}
async function sb(b, a) {
    var c = a.tags;
    const d = a.vol
      , e = a.duration;
    a = a.stopOnEnd;
    await tb(b, c);
    for (const q of Q(b, c)) {
        c = q;
        var f = d
          , g = e
          , h = a;
        if (!c.Ua) {
            var k = c.G.gain;
            k.cancelScheduledValues(0);
            var p = c.v.g.currentTime;
            g = p + g;
            k.setValueAtTime(k.value, p);
            k.linearRampToValueAtTime(f, g);
            c.La = f;
            c.Ta = g;
            c.$d = h
        }
    }
    R(b)
}
async function ub(b, a) {
    const c = a.tags;
    a = a.rate;
    await tb(b, c);
    for (const d of Q(b, c))
        b = d,
        b.ma !== a && (b.ma = a,
        b.Fa())
}
async function vb(b, a) {
    const c = a.tags;
    a = a.pos;
    await tb(b, c);
    for (const d of Q(b, c))
        d.uc(a)
}
async function wb(b, a) {
    const c = a.originalUrl
      , d = a.url
      , e = a.type;
    a = a.isMusic;
    try {
        await pb(b, c, d, e, "", a)
    } catch (f) {
        console.error("[Construct] Audio: error preloading: ", f)
    }
}
async function xb(b, a) {
    if (a = await N(b, "", a.url, a.type, a.isMusic, !0))
        a.j(),
        a = b.ka.indexOf(a),
        -1 !== a && b.ka.splice(a, 1)
}
async function yb(b, a) {
    const c = a.type;
    var d = a.tags;
    const e = a.params;
    let f;
    if ("convolution" === c)
        try {
            f = await N(b, a.bufferOriginalUrl, a.bufferUrl, a.bufferType, !1)
        } catch (k) {
            console.log("[Construct] Audio: error loading convolution: ", k);
            return
        }
    for (const k of d) {
        if ("filter" === c)
            d = new self.ie(b,...e);
        else if ("delay" === c)
            d = new self.ge(b,...e);
        else if ("convolution" === c) {
            var g = d = new self.fe(b,f.ja,...e)
              , h = a.bufferType;
            g.Dd = a.bufferOriginalUrl;
            g.Ed = h
        } else if ("flanger" === c)
            d = new self.je(b,...e);
        else if ("phaser" === c)
            d = new self.le(b,...e);
        else if ("gain" === c)
            d = new self.ke(b,...e);
        else if ("stereopan" === c)
            d = new self.ne(b,...e);
        else if ("tremolo" === c)
            d = new self.oe(b,...e);
        else if ("ringmod" === c)
            d = new self.me(b,...e);
        else if ("distortion" === c)
            d = new self.he(b,...e);
        else if ("compressor" === c)
            d = new self.ee(b,...e);
        else if ("analyser" === c)
            d = new self.de(b,...e);
        else
            throw Error("invalid effect type");
        g = b;
        h = k;
        h = h.toLowerCase();
        let p = g.la.get(h);
        p || (p = [],
        g.la.set(h, p));
        d.Nd = p.length;
        d.bd = h;
        p.push(d);
        zb(g, h)
    }
    Ab(b)
}
async function Bb(b, a) {
    const c = a.saveLoadMode;
    if (3 !== c) {
        var d = [];
        for (var e of b.H)
            e.Ca() && 1 === c || !e.Ca() && 2 === c ? d.push(e) : e.j();
        b.H = d
    }
    for (const f of b.la.values())
        for (const g of f)
            g.j();
    b.la.clear();
    b.hc = a.timeScale;
    b.Nc = a.gameTime;
    d = a.listenerPos;
    b.ba[0] = d[0];
    b.ba[1] = d[1];
    b.ba[2] = d[2];
    b.g.listener.setPosition(d[0], d[1], d[2]);
    d = a.listenerOrientation;
    if (Array.isArray(d)) {
        for (e = 0; 6 > e; ++e)
            b.ea[e] = d[e];
        b.g.listener.setOrientation(...b.ea)
    }
    b.wa = a.isSilent;
    b.o.Ib(b.wa);
    b.Yb = a.masterVolume;
    b.Ra.gain.value = b.Yb;
    d = [];
    for (const f of Object.values(a.effects))
        d.push(Promise.all(f.map(g=>yb(b, g))));
    await Promise.all(d);
    await Promise.all(a.playing.map(f=>Cb(b, f, c)));
    R(b)
}
async function Db(b, a) {
    try {
        const c = b.g.suspend(a.time);
        b.Md ? b.g.resume() : (b.g.startRendering().then(d=>{
            const e = [];
            for (let f = 0, g = d.numberOfChannels; f < g; ++f) {
                const h = d.getChannelData(f);
                e.push(h.buffer)
            }
            b.o.Gb("runtime", "offline-audio-render-completed", {
                duration: d.duration,
                length: d.length,
                numberOfChannels: d.numberOfChannels,
                sampleRate: d.sampleRate,
                channelData: e
            }, null, e)
        }
        ).catch(d=>Eb(d)),
        b.Md = !0);
        await c
    } catch (c) {
        Eb(c)
    }
}
function mb(b) {
    b.Sb || (b.Qc = !1,
    window.addEventListener("pointerup", b.Aa, !0),
    window.addEventListener("touchend", b.Aa, !0),
    window.addEventListener("click", b.Aa, !0),
    window.addEventListener("keydown", b.Aa, !0),
    b.Sb = !0)
}
async function N(b, a, c, d, e, f) {
    for (var g of b.ka)
        if (g.hb() === c)
            return await Fb(g),
            g;
    if (f)
        return null;
    if (e && (b.bc || b.Ld)) {
        f = 0;
        for (let h = 0, k = b.ka.length; h < k; ++h)
            g = b.ka[h],
            b.ka[f] = g,
            g.Ca() ? g.j() : ++f;
        b.ka.length = f
    }
    f = "audio/webm; codecs=opus" === d && !b.ae;
    e && f && (b.Ld = !0);
    c = !e || b.bc || f ? new self.re(b,a,c,d,e,f) : new self.pe(b,a,c,d,e);
    b.ka.push(c);
    await Fb(c);
    b.Td.has(a) || (l(b, "buffer-metadata", {
        originalUrl: a,
        duration: c.ga()
    }),
    b.Td.add(a));
    return c
}
function Gb(b, a) {
    return b === a || b.normalize().toLowerCase() === a.normalize().toLowerCase()
}
function Hb(b, a) {
    return (a = b.la.get(a.toLowerCase())) ? a[0].N() : b.oa()
}
function zb(b, a) {
    a = a.toLowerCase();
    let c = b.oa();
    var d = b.la.get(a);
    if (d && d.length) {
        c = d[0].N();
        for (let f = 0, g = d.length; f < g; ++f) {
            var e = d[f];
            f + 1 === g ? e.U(b.oa()) : e.U(d[f + 1].N())
        }
    }
    for (const f of Jb(b, a))
        d = c,
        e = f.fa || f.F || f.G,
        e.disconnect(),
        e.connect(d);
    b.Ja && b.Yc === a && (b.Ja.disconnect(),
    b.Ja.connect(c))
}
function *Jb(b, a) {
    if (a)
        for (const c of b.H)
            Gb(0 < c.na.length ? c.na[0] : "", a) && (yield c);
    else
        b.R && !b.R.O() && (yield b.R)
}
function Kb(b, a, c) {
    return c ? b.o.We(a).then(d=>{
        const e = b.g.createBuffer(1, d.length, 48E3);
        e.getChannelData(0).set(d);
        return e
    }
    ) : new Promise((d,e)=>{
        b.g.decodeAudioData(a, d, e)
    }
    )
}
function Lb(b, a) {
    let c = 0;
    for (let d = 0, e = b.H.length; d < e; ++d) {
        const f = b.H[d];
        b.H[c] = f;
        f.P === a ? f.j() : ++c
    }
    b.H.length = c
}
function *Q(b, a) {
    if (0 < a.length)
        for (const d of b.H) {
            a: {
                b = d.na;
                var c = a;
                for (const e of c) {
                    c = !1;
                    for (const f of b)
                        if (Gb(f, e)) {
                            c = !0;
                            break
                        }
                    if (!c) {
                        b = !1;
                        break a
                    }
                }
                b = !0
            }
            b && (yield d)
        }
    else
        b.R && !b.R.O() && (yield b.R)
}
async function pb(b, a, c, d, e, f) {
    for (const g of b.H)
        if (g.hb() === c && (g.lc() || f))
            return g.na = e,
            g;
    a = await N(b, a, c, d, f);
    e = "html5" === a.Jc ? new self.qe(a.v,a,e) : new self.se(a.v,a,e);
    b.H.push(e);
    return e
}
function ob(b, a) {
    a = a.join(" ");
    let c = b.Ab.get(a);
    if (!c) {
        let d = null;
        c = {
            gd: 0,
            promise: new Promise(e=>d = e),
            resolve: d
        };
        b.Ab.set(a, c)
    }
    c.gd++
}
function tb(b, a) {
    return (b = b.Ab.get((0 === a.length ? b.Rd : a).join(" "))) ? b.promise : Promise.resolve()
}
function R(b) {
    if (0 < b.Qa.size)
        u(b);
    else
        for (const a of b.H)
            if (!a.J && !a.O()) {
                u(b);
                break
            }
}
function Mb(b, a, c, d) {
    l(b, "trigger", {
        type: a,
        tags: c,
        aiid: d
    })
}
function Ab(b) {
    b.Tc || (b.Tc = !0,
    Promise.resolve().then(()=>Nb(b)))
}
function Nb(b) {
    const a = {};
    for (const [c,d] of b.la)
        a[c] = d.map(e=>e.gb());
    l(b, "fxstate", {
        fxstate: a
    });
    b.Tc = !1
}
async function Cb(b, a, c) {
    if (3 !== c) {
        var d = a.bufferOriginalUrl
          , e = a.bufferUrl
          , f = a.bufferType
          , g = a.isMusic
          , h = a.tags
          , k = a.isLooping
          , p = a.volume
          , q = a.playbackTime;
        if (!g || 1 !== c)
            if (g || 2 !== c) {
                c = null;
                try {
                    c = await pb(b, d, e, f, h, g)
                } catch (B) {
                    console.error("[Construct] Audio: error loading audio state: ", B);
                    return
                }
                b = c;
                (d = a.pan) ? (O(b, !0),
                e = b.F,
                f = d.pos,
                b.Ya[0] = f[0],
                b.Ya[1] = f[1],
                b.Ya[2] = f[2],
                f = d.orient,
                b.Xa[0] = f[0],
                b.Xa[1] = f[1],
                b.Xa[2] = f[2],
                e.setPosition(...b.Ya),
                e.setOrientation(...b.Xa),
                b.sa[0] = d.cia,
                b.sa[1] = d.coa,
                b.sa[2] = d.cog,
                e.coneInnerAngle = d.cia,
                e.coneOuterAngle = d.coa,
                e.coneOuterGain = d.cog,
                b.qa = d.uid) : O(b, !1);
                b = c;
                d = a.stereoPan;
                "number" !== typeof d ? P(b, !1) : (P(b, !0),
                rb(b, d));
                c.Play(k, p, q, 0);
                a.isPlaying || c.jb();
                c.Bc(a)
            }
    }
}
function Eb(b) {
    console.error("[Audio] Offline rendering error: ", b)
}
self.fb = class extends self.Ma {
    constructor(b) {
        super(b, "audio");
        this.Ra = this.g = null;
        this.Sb = this.Qc = !1;
        this.Aa = ()=>{
            if (!this.Qc) {
                var a = this.g;
                "suspended" === a.state && a.resume && a.resume();
                var c = a.createBuffer(1, 220, 22050)
                  , d = a.createBufferSource();
                d.buffer = c;
                d.connect(a.destination);
                d.start(0);
                "running" === a.state && this.Sb && (this.Qc = !0,
                window.removeEventListener("pointerup", this.Aa, !0),
                window.removeEventListener("touchend", this.Aa, !0),
                window.removeEventListener("click", this.Aa, !0),
                window.removeEventListener("keydown", this.Aa, !0),
                this.Sb = !1)
            }
        }
        ;
        this.ka = [];
        this.H = [];
        this.R = null;
        this.Rd = [];
        this.Td = new Set;
        this.Sd = -1;
        this.Ab = new Map;
        this.Yb = 1;
        this.wa = !1;
        this.dd = 0;
        this.hc = 1;
        this.Nc = 0;
        this.Vd = "HRTF";
        this.Fd = "inverse";
        this.Wd = 600;
        this.Ud = 1E4;
        this.Yd = 1;
        this.ba = [0, 0, 0];
        this.ea = [0, 0, -1, 0, 1, 0];
        this.Ld = this.bc = !1;
        this.ae = this.o.we();
        this.la = new Map;
        this.Qa = new Set;
        this.Md = this.Tc = !1;
        this.Yc = "";
        this.Ja = null;
        self.C3Audio_OnMicrophoneStream = (a,c)=>{
            this.Ja && this.Ja.disconnect();
            this.Yc = c.toLowerCase();
            this.Ja = this.g.createMediaStreamSource(a);
            this.Ja.connect(Hb(this, this.Yc))
        }
        ;
        this.Pb = null;
        self.C3Audio_GetOutputStream = ()=>{
            this.Pb || (this.Pb = this.g.createMediaStreamDestination(),
            this.Ra.connect(this.Pb));
            return this.Pb.stream
        }
        ;
        self.C3Audio_DOMInterface = this;
        t(this, [["create-audio-context", a=>lb(this, a)], ["play", a=>nb(this, a)], ["stop", a=>this.Ic(a)], ["stop-all", ()=>{
            for (const a of this.H)
                a.Da()
        }
        ], ["set-paused", a=>{
            const c = a.tags;
            a = a.paused;
            for (const d of Q(this, c))
                a ? d.jb() : d.Hb();
            R(this)
        }
        ], ["set-volume", a=>{
            const c = a.tags;
            a = a.vol;
            for (const d of Q(this, c))
                S(d, a)
        }
        ], ["fade-volume", a=>sb(this, a)], ["set-master-volume", a=>{
            this.Yb = a.vol;
            this.Ra.gain.value = this.Yb
        }
        ], ["set-muted", a=>{
            const c = a.tags;
            a = a.isMuted;
            for (const d of Q(this, c))
                Ob(d, a)
        }
        ], ["set-silent", a=>{
            this.wa = a.isSilent;
            this.o.Ib(this.wa);
            for (const c of this.H)
                c.Nb()
        }
        ], ["set-looping", a=>{
            const c = a.tags;
            a = a.isLooping;
            for (const d of Q(this, c))
                d.vc(a)
        }
        ], ["set-playback-rate", a=>ub(this, a)], ["set-stereo-pan", a=>{
            const c = a.tags;
            a = a.p;
            for (const d of Q(this, c))
                P(d, !0),
                rb(d, a)
        }
        ], ["seek", a=>vb(this, a)], ["preload", a=>wb(this, a)], ["unload", a=>xb(this, a)], ["unload-all", ()=>{
            for (const a of this.ka)
                a.j();
            this.ka.length = 0
        }
        ], ["set-suspended", a=>{
            a = a.isSuspended;
            !a && this.g.resume && this.g.resume();
            for (const c of this.H)
                c.wc(a);
            a && this.g.suspend && this.g.suspend()
        }
        ], ["add-effect", a=>yb(this, a)], ["set-effect-param", a=>{
            var c = a.tags;
            const d = a.index
              , e = a.param
              , f = a.value
              , g = a.ramp;
            a = a.time;
            for (const h of c)
                c = this.la.get(h.toLowerCase()),
                !c || 0 > d || d >= c.length || c[d].$(e, f, g, a);
            Ab(this)
        }
        ], ["remove-effects", a=>{
            a = a.tags;
            for (const c of a) {
                a = c.toLowerCase();
                const d = this.la.get(a);
                if (!d || !d.length)
                    break;
                for (const e of d)
                    e.j();
                this.la.delete(a);
                zb(this, a)
            }
        }
        ], ["tick", a=>{
            this.hc = a.timeScale;
            this.Nc = a.gameTime;
            this.Sd = a.tickCount;
            if (0 !== this.dd)
                for (var c of this.H)
                    c.Fa();
            !(c = a.listenerPos) || this.ba[0] === c[0] && this.ba[1] === c[1] && this.ba[2] === c[2] || (this.ba[0] = c[0],
            this.ba[1] = c[1],
            this.ba[2] = c[2],
            this.g.listener.setPosition(c[0], c[1], c[2]));
            if ((c = a.listenerOrientation) && (this.ea[0] !== c[0] || this.ea[1] !== c[1] || this.ea[2] !== c[2] || this.ea[3] !== c[3] || this.ea[4] !== c[4] || this.ea[5] !== c[5])) {
                for (let d = 0; 6 > d; ++d)
                    this.ea[d] = c[d];
                this.g.listener.setOrientation(...this.ea)
            }
            for (const d of a.instPans) {
                a = d.uid;
                for (const e of this.H)
                    e.qa === a && qb(e, d.x, d.y, d.z, d.angle)
            }
        }
        ], ["load-state", a=>Bb(this, a)], ["offline-render-audio", a=>Db(this, a)], ["offline-render-finish", ()=>{
            this.g.resume()
        }
        ]])
    }
    W() {
        return this.g
    }
    oa() {
        return this.Ra
    }
    Fb() {
        return this.wa
    }
    Ea(b) {
        this.o.Ea(b)
    }
    Oa(b) {
        this.o.Oa(b)
    }
    va() {
        for (var b of this.Qa)
            b.va();
        b = this.g.currentTime;
        for (var a of this.H)
            a.va(b);
        a = this.H.filter(c=>!c.J && !c.O()).map(c=>c.gb());
        l(this, "state", {
            tickCount: this.Sd,
            outputLatency: this.g.outputLatency || 0,
            audioInstances: a,
            analysers: [...this.Qa].map(c=>({
                tag: c.bd,
                index: c.Nd,
                peak: c.Za,
                rms: c.Xd,
                binCount: c.l.frequencyBinCount,
                freqBins: c.Kd
            }))
        });
        0 === a.length && 0 === this.Qa.size && this.Tb && (this.o.Ue(this.be),
        this.Tb = !1)
    }
    Ic(b) {
        b = b.tags;
        for (const a of Q(this, b))
            a.Da()
    }
    static Be(b) {
        return b * kb
    }
    static nd(b) {
        return Math.max(Math.min(Math.pow(10, b / 20), 1), 0)
    }
    static ye(b) {
        return Math.log(Math.max(Math.min(b, 1), 0)) / Math.log(10) * 20
    }
}
;
self.ha.Ba(self.fb);
"use strict";
function Fb(b) {
    b.Wb || (b.Wb = b.Ac());
    return b.Wb
}
self.jd = class {
    constructor(b, a, c, d, e) {
        this.v = b;
        this.bf = a;
        this.Ka = c;
        this.T = d;
        this.Ye = e;
        this.Jc = "";
        this.Wb = null
    }
    j() {
        this.Wb = this.v = null
    }
    Ac() {}
    W() {
        return this.v.W()
    }
    pc() {
        return this.bf
    }
    hb() {
        return this.Ka
    }
    oc() {
        return this.T
    }
    Ca() {
        return this.Ye
    }
    ga() {}
}
;
"use strict";
self.pe = class extends self.jd {
    constructor(b, a, c, d, e) {
        super(b, a, c, d, e);
        this.Jc = "html5";
        this.M = new Audio;
        this.M.crossOrigin = "anonymous";
        this.M.autoplay = !1;
        this.M.preload = "auto";
        this.ub = this.vb = null;
        this.M.addEventListener("canplaythrough", ()=>!0);
        this.zb = this.W().createGain();
        this.xb = null;
        this.M.addEventListener("canplay", ()=>{
            this.vb && (this.vb(),
            this.ub = this.vb = null);
            !this.xb && this.M && (this.xb = this.W().createMediaElementSource(this.M),
            this.xb.connect(this.zb))
        }
        );
        this.onended = null;
        this.M.addEventListener("ended", ()=>{
            if (this.onended)
                this.onended()
        }
        );
        this.M.addEventListener("error", f=>{
            console.error(`[Construct] Audio '${this.Ka}' error: `, f);
            this.ub && (this.ub(f),
            this.ub = this.vb = null)
        }
        )
    }
    j() {
        Lb(this.v, this);
        this.zb.disconnect();
        this.zb = null;
        this.xb.disconnect();
        this.xb = null;
        this.M && !this.M.paused && this.M.pause();
        this.M = this.onended = null;
        super.j()
    }
    Ac() {
        return new Promise((b,a)=>{
            this.vb = b;
            this.ub = a;
            this.M.src = this.Ka
        }
        )
    }
    V() {
        return this.M
    }
    ga() {
        return this.M.duration
    }
}
;
"use strict";
async function Pb(b) {
    if (b.Ga)
        return b.Ga;
    var a = b.v.o;
    if ("cordova" === a.u && a.qd(b.Ka) && a.Ub)
        b.Ga = await a.Eb(b.Ka);
    else {
        a = await fetch(b.Ka);
        if (!a.ok)
            throw Error(`error fetching audio data: ${a.status} ${a.statusText}`);
        b.Ga = await a.arrayBuffer()
    }
}
async function Qb(b) {
    if (b.ja)
        return b.ja;
    b.ja = await Kb(b.v, b.Ga, b.af);
    b.Ga = null
}
self.re = class extends self.jd {
    constructor(b, a, c, d, e, f) {
        super(b, a, c, d, e);
        this.Jc = "webaudio";
        this.ja = this.Ga = null;
        this.af = !!f
    }
    j() {
        Lb(this.v, this);
        this.ja = this.Ga = null;
        super.j()
    }
    async Ac() {
        try {
            await Pb(this),
            await Qb(this)
        } catch (b) {
            console.error(`[Construct] Failed to load audio '${this.Ka}': `, b)
        }
    }
    ga() {
        return this.ja ? this.ja.duration : 0
    }
}
;
"use strict";
let Rb = 0;
function O(b, a) {
    a = !!a;
    b.rb !== a && (b.rb = a,
    b.rb ? (P(b, !1),
    b.F || (b.F = b.W().createPanner(),
    b.F.panningModel = b.v.Vd,
    b.F.distanceModel = b.v.Fd,
    b.F.refDistance = b.v.Wd,
    b.F.maxDistance = b.v.Ud,
    b.F.rolloffFactor = b.v.Yd),
    b.G.disconnect(),
    b.G.connect(b.F),
    b.F.connect(b.oa())) : (b.F.disconnect(),
    b.G.disconnect(),
    b.G.connect(b.oa())))
}
function P(b, a) {
    a = !!a;
    b.Vb !== a && (b.Vb = a,
    b.Vb ? (O(b, !1),
    b.fa = b.W().createStereoPanner(),
    b.G.disconnect(),
    b.G.connect(b.fa),
    b.fa.connect(b.oa())) : (b.fa.disconnect(),
    b.fa = null,
    b.G.disconnect(),
    b.G.connect(b.oa())))
}
function rb(b, a) {
    b.Vb && b.ad !== a && (b.fa.pan.value = a,
    b.ad = a)
}
function S(b, a) {
    b.La = a;
    b.G.gain.cancelScheduledValues(0);
    b.Ta = -1;
    b.G.gain.value = b.qc()
}
function Ob(b, a) {
    a = !!a;
    b.Ua !== a && (b.Ua = a,
    b.Nb())
}
function qb(b, a, c, d, e) {
    if (b.rb) {
        var f = b.Ya
          , g = b.Xa
          , h = Math.cos(e);
        e = Math.sin(e);
        if (f[0] !== a || f[1] !== c || f[2] !== d)
            f[0] = a,
            f[1] = c,
            f[2] = d,
            b.F.setPosition(...f);
        if (g[0] !== h || g[1] !== e || 0 !== g[2])
            g[0] = h,
            g[1] = e,
            g[2] = 0,
            b.F.setOrientation(...g)
    }
}
function T(b) {
    return b.Vc ? b.v.Nc : performance.now() / 1E3
}
self.kd = class {
    constructor(b, a, c) {
        this.v = b;
        this.P = a;
        this.na = c;
        this.Ob = Rb++;
        this.G = this.W().createGain();
        this.G.connect(this.oa());
        this.F = null;
        this.rb = !1;
        this.Ya = [0, 0, 0];
        this.Xa = [0, 0, 0];
        this.sa = [0, 0, 0];
        this.fa = null;
        this.Vb = !1;
        this.ad = 0;
        this.J = !0;
        this.Y = this.ta = this.K = !1;
        this.La = 1;
        this.Ua = !1;
        this.ma = 1;
        b = this.v.dd;
        this.Vc = 1 === b && !this.Ca() || 2 === b;
        this.Ta = this.qa = -1;
        this.$d = !1
    }
    j() {
        this.P = this.v = null;
        this.F && (this.F.disconnect(),
        this.F = null);
        this.fa && (this.fa.disconnect(),
        this.fa = null);
        this.G.disconnect();
        this.G = null
    }
    W() {
        return this.v.W()
    }
    oa() {
        return Hb(this.v, 0 < this.na.length ? this.na[0] : "")
    }
    pc() {
        return this.P.pc()
    }
    hb() {
        return this.P.hb()
    }
    oc() {
        return this.P.oc()
    }
    Ca() {
        return this.P.Ca()
    }
    O() {}
    lc() {}
    IsPlaying() {
        return !this.J && !this.K && !this.O()
    }
    Na() {}
    ga() {
        return this.P.ga()
    }
    Play() {}
    Da() {}
    jb() {}
    Hb() {}
    va(b) {
        -1 !== this.Ta && b >= this.Ta && (this.Ta = -1,
        this.$d && this.Da(),
        Mb(this.v, "fade-ended", this.na, this.Ob))
    }
    qc() {
        const b = this.La;
        return isFinite(b) ? b : 0
    }
    Fb() {
        return this.v.Fb()
    }
    Nb() {}
    vc() {}
    Fa() {}
    uc() {}
    wc() {}
    rc() {}
    gb() {
        var b = this.Ob
          , a = this.na
          , c = this.ga()
          , d = -1 === this.Ta ? this.La : this.G.gain.value
          , e = this.IsPlaying();
        if (this.F) {
            var f = this.F;
            f = {
                pos: this.Ya,
                orient: this.Xa,
                cia: f.coneInnerAngle,
                coa: f.coneOuterAngle,
                cog: f.coneOuterGain,
                uid: this.qa
            }
        } else
            f = null;
        return {
            aiid: b,
            tags: a,
            duration: c,
            volume: d,
            isPlaying: e,
            playbackTime: this.Na(),
            playbackRate: this.ma,
            uid: this.qa,
            bufferOriginalUrl: this.pc(),
            bufferUrl: "",
            bufferType: this.oc(),
            isMusic: this.Ca(),
            isLooping: this.Y,
            isMuted: this.Ua,
            resumePosition: this.rc(),
            pan: f,
            stereoPan: this.fa ? this.ad : null
        }
    }
    Bc(b) {
        var a = b.playbackRate;
        this.ma !== a && (this.ma = a,
        this.Fa());
        Ob(this, b.isMuted)
    }
}
;
"use strict";
self.qe = class extends self.kd {
    constructor(b, a, c) {
        super(b, a, c);
        this.P.zb.connect(this.G);
        this.P.onended = ()=>this.Dc()
    }
    j() {
        this.Da();
        this.P.zb.disconnect();
        super.j()
    }
    V() {
        return this.P.V()
    }
    Dc() {
        this.J = !0;
        this.qa = -1;
        Mb(this.v, "ended", this.na, this.Ob)
    }
    O() {
        return this.V().ended
    }
    lc() {
        return this.J ? !0 : this.O()
    }
    Na() {
        let b = this.V().currentTime;
        this.Y || (b = Math.min(b, this.ga()));
        return b
    }
    Play(b, a, c) {
        const d = this.V();
        1 !== d.playbackRate && (d.playbackRate = 1);
        d.loop !== b && (d.loop = b);
        S(this, a);
        d.muted && (d.muted = !1);
        if (d.currentTime !== c)
            try {
                d.currentTime = c
            } catch (e) {
                console.warn(`[Construct] Exception seeking audio '${this.P.hb()}' to position '${c}': `, e)
            }
        this.v.Ea(d);
        this.K = this.J = !1;
        this.Y = b;
        this.ma = 1
    }
    Da() {
        const b = this.V();
        b.paused || b.pause();
        this.v.Oa(b);
        this.J = !0;
        this.K = !1;
        this.qa = -1
    }
    jb() {
        if (!(this.K || this.J || this.O())) {
            var b = this.V();
            b.paused || b.pause();
            this.v.Oa(b);
            this.K = !0
        }
    }
    Hb() {
        !this.K || this.J || this.O() || (this.v.Ea(this.V()),
        this.K = !1)
    }
    Nb() {
        this.V().muted = this.Ua || this.Fb()
    }
    vc(b) {
        b = !!b;
        this.Y !== b && (this.Y = b,
        this.V().loop = b)
    }
    Fa() {
        let b = this.ma;
        this.Vc && (b *= this.v.hc);
        try {
            this.V().playbackRate = b
        } catch (a) {
            console.warn(`[Construct] Unable to set playback rate '${b}':`, a)
        }
    }
    uc(b) {
        if (!this.J && !this.O())
            try {
                this.V().currentTime = b
            } catch (a) {
                console.warn(`[Construct] Error seeking audio to '${b}': `, a)
            }
    }
    rc() {
        return this.Na()
    }
    wc(b) {
        b ? this.IsPlaying() ? (this.V().pause(),
        this.ta = !0) : this.ta = !1 : this.ta && (this.v.Ea(this.V()),
        this.ta = !1)
    }
}
;
"use strict";
function U(b) {
    b.s && (b.s.onended = null,
    b.s.disconnect(),
    b.s.buffer = null);
    b.s = null;
    b.kb = null
}
self.se = class extends self.kd {
    constructor(b, a, c) {
        super(b, a, c);
        this.s = null;
        this.$b = d=>this.Dc(d);
        this.Pc = !0;
        this.kb = null;
        this.S = this.ac = this.cc = 0;
        this.Zc = 1
    }
    j() {
        this.Da();
        U(this);
        this.$b = null;
        super.j()
    }
    Dc(b) {
        this.K || this.ta || b.target !== this.kb || (this.J = this.Pc = !0,
        this.qa = -1,
        U(this),
        Mb(this.v, "ended", this.na, this.Ob))
    }
    O() {
        return !this.J && this.s && this.s.loop || this.K ? !1 : this.Pc
    }
    lc() {
        return !this.s || this.J ? !0 : this.O()
    }
    Na() {
        let b;
        b = this.K ? this.S : this.ac + (T(this) - this.cc) * this.ma;
        this.Y || (b = Math.min(b, this.ga()));
        return b
    }
    Play(b, a, c, d) {
        this.Zc = 1;
        S(this, a);
        U(this);
        this.s = this.W().createBufferSource();
        this.s.buffer = this.P.ja;
        this.s.connect(this.G);
        this.kb = this.s;
        this.s.onended = this.$b;
        this.s.loop = b;
        this.s.start(d, c);
        this.K = this.J = this.Pc = !1;
        this.Y = b;
        this.ma = 1;
        this.cc = T(this);
        this.ac = c
    }
    Da() {
        if (this.s)
            try {
                this.s.stop(0)
            } catch (b) {}
        this.J = !0;
        this.K = !1;
        this.qa = -1
    }
    jb() {
        this.K || this.J || this.O() || (this.S = this.Na(),
        this.Y && (this.S %= this.ga()),
        this.K = !0,
        this.s.stop(0))
    }
    Hb() {
        !this.K || this.J || this.O() || (U(this),
        this.s = this.W().createBufferSource(),
        this.s.buffer = this.P.ja,
        this.s.connect(this.G),
        this.kb = this.s,
        this.s.onended = this.$b,
        this.s.loop = this.Y,
        S(this, this.La),
        this.Fa(),
        this.s.start(0, this.S),
        this.cc = T(this),
        this.ac = this.S,
        this.K = !1)
    }
    qc() {
        return super.qc() * this.Zc
    }
    Nb() {
        this.Zc = this.Ua || this.Fb() ? 0 : 1;
        S(this, this.La)
    }
    vc(b) {
        b = !!b;
        this.Y !== b && (this.Y = b,
        this.s && (this.s.loop = b))
    }
    Fa() {
        let b = this.ma;
        this.Vc && (b *= this.v.hc);
        this.s && (this.s.playbackRate.value = b)
    }
    uc(b) {
        this.J || this.O() || (this.K ? this.S = b : (this.jb(),
        this.S = b,
        this.Hb()))
    }
    rc() {
        return this.S
    }
    wc(b) {
        b ? this.IsPlaying() ? (this.ta = !0,
        this.S = this.Na(),
        this.Y && (this.S %= this.ga()),
        this.s.stop(0)) : this.ta = !1 : this.ta && (U(this),
        this.s = this.W().createBufferSource(),
        this.s.buffer = this.P.ja,
        this.s.connect(this.G),
        this.kb = this.s,
        this.s.onended = this.$b,
        this.s.loop = this.Y,
        S(this, this.La),
        this.Fa(),
        this.s.start(0, this.S),
        this.cc = T(this),
        this.ac = this.S,
        this.ta = !1)
    }
    Bc(b) {
        super.Bc(b);
        this.S = b.resumePosition
    }
}
;
"use strict";
function V(b) {
    return b.g.createGain()
}
function W(b, a, c, d, e) {
    a.cancelScheduledValues(0);
    if (0 === e)
        a.value = c;
    else
        switch (b = b.g.currentTime,
        e += b,
        d) {
        case 0:
            a.setValueAtTime(c, e);
            break;
        case 1:
            a.setValueAtTime(a.value, b);
            a.linearRampToValueAtTime(c, e);
            break;
        case 2:
            a.setValueAtTime(a.value, b),
            a.exponentialRampToValueAtTime(c, e)
        }
}
class X {
    constructor(b) {
        this.v = b;
        this.g = b.W();
        this.Nd = -1;
        this.T = this.bd = "";
        this.m = null
    }
    j() {
        this.g = null
    }
    N() {}
    U() {}
    gb() {
        return {
            type: this.T,
            tag: this.bd,
            params: this.m
        }
    }
}
self.ie = class extends X {
    constructor(b, a, c, d, e, f, g) {
        super(b);
        this.T = "filter";
        this.m = [a, c, d, e, f, g];
        this.A = V(this);
        this.i = V(this);
        this.i.gain.value = g;
        this.h = V(this);
        this.h.gain.value = 1 - g;
        this.D = this.g.createBiquadFilter();
        this.D.type = a;
        this.D.frequency.value = c;
        this.D.detune.value = d;
        this.D.Q.value = e;
        this.D.gain.vlaue = f;
        this.A.connect(this.D);
        this.A.connect(this.h);
        this.D.connect(this.i)
    }
    j() {
        this.A.disconnect();
        this.D.disconnect();
        this.i.disconnect();
        this.h.disconnect();
        super.j()
    }
    U(b) {
        this.i.disconnect();
        this.i.connect(b);
        this.h.disconnect();
        this.h.connect(b)
    }
    N() {
        return this.A
    }
    $(b, a, c, d) {
        switch (b) {
        case 0:
            a = Math.max(Math.min(a / 100, 1), 0);
            this.m[5] = a;
            W(this, this.i.gain, a, c, d);
            W(this, this.h.gain, 1 - a, c, d);
            break;
        case 1:
            this.m[1] = a;
            W(this, this.D.frequency, a, c, d);
            break;
        case 2:
            this.m[2] = a;
            W(this, this.D.detune, a, c, d);
            break;
        case 3:
            this.m[3] = a;
            W(this, this.D.Q, a, c, d);
            break;
        case 4:
            this.m[4] = a,
            W(this, this.D.gain, a, c, d)
        }
    }
}
;
self.ge = class extends X {
    constructor(b, a, c, d) {
        super(b);
        this.T = "delay";
        this.m = [a, c, d];
        this.A = V(this);
        this.i = V(this);
        this.i.gain.value = d;
        this.h = V(this);
        this.h.gain.value = 1 - d;
        this.wb = V(this);
        this.X = this.g.createDelay(a);
        this.X.delayTime.value = a;
        this.pb = V(this);
        this.pb.gain.value = c;
        this.A.connect(this.wb);
        this.A.connect(this.h);
        this.wb.connect(this.i);
        this.wb.connect(this.X);
        this.X.connect(this.pb);
        this.pb.connect(this.wb)
    }
    j() {
        this.A.disconnect();
        this.i.disconnect();
        this.h.disconnect();
        this.wb.disconnect();
        this.X.disconnect();
        this.pb.disconnect();
        super.j()
    }
    U(b) {
        this.i.disconnect();
        this.i.connect(b);
        this.h.disconnect();
        this.h.connect(b)
    }
    N() {
        return this.A
    }
    $(b, a, c, d) {
        const e = self.fb.nd;
        switch (b) {
        case 0:
            a = Math.max(Math.min(a / 100, 1), 0);
            this.m[2] = a;
            W(this, this.i.gain, a, c, d);
            W(this, this.h.gain, 1 - a, c, d);
            break;
        case 4:
            this.m[1] = e(a);
            W(this, this.pb.gain, e(a), c, d);
            break;
        case 5:
            this.m[0] = a,
            W(this, this.X.delayTime, a, c, d)
        }
    }
}
;
self.fe = class extends X {
    constructor(b, a, c, d) {
        super(b);
        this.T = "convolution";
        this.m = [c, d];
        this.Ed = this.Dd = "";
        this.A = V(this);
        this.i = V(this);
        this.i.gain.value = d;
        this.h = V(this);
        this.h.gain.value = 1 - d;
        this.ob = this.g.createConvolver();
        this.ob.normalize = c;
        this.ob.buffer = a;
        this.A.connect(this.ob);
        this.A.connect(this.h);
        this.ob.connect(this.i)
    }
    j() {
        this.A.disconnect();
        this.ob.disconnect();
        this.i.disconnect();
        this.h.disconnect();
        super.j()
    }
    U(b) {
        this.i.disconnect();
        this.i.connect(b);
        this.h.disconnect();
        this.h.connect(b)
    }
    N() {
        return this.A
    }
    $(b, a, c, d) {
        switch (b) {
        case 0:
            a = Math.max(Math.min(a / 100, 1), 0),
            this.m[1] = a,
            W(this, this.i.gain, a, c, d),
            W(this, this.h.gain, 1 - a, c, d)
        }
    }
    gb() {
        const b = super.gb();
        b.bufferOriginalUrl = this.Dd;
        b.bufferUrl = "";
        b.bufferType = this.Ed;
        return b
    }
}
;
self.je = class extends X {
    constructor(b, a, c, d, e, f) {
        super(b);
        this.T = "flanger";
        this.m = [a, c, d, e, f];
        this.A = V(this);
        this.h = V(this);
        this.h.gain.value = 1 - f / 2;
        this.i = V(this);
        this.i.gain.value = f / 2;
        this.qb = V(this);
        this.qb.gain.value = e;
        this.X = this.g.createDelay(a + c);
        this.X.delayTime.value = a;
        this.B = this.g.createOscillator();
        this.B.frequency.value = d;
        this.L = V(this);
        this.L.gain.value = c;
        this.A.connect(this.X);
        this.A.connect(this.h);
        this.X.connect(this.i);
        this.X.connect(this.qb);
        this.qb.connect(this.X);
        this.B.connect(this.L);
        this.L.connect(this.X.delayTime);
        this.B.start(0)
    }
    j() {
        this.B.stop(0);
        this.A.disconnect();
        this.X.disconnect();
        this.B.disconnect();
        this.L.disconnect();
        this.h.disconnect();
        this.i.disconnect();
        this.qb.disconnect();
        super.j()
    }
    U(b) {
        this.i.disconnect();
        this.i.connect(b);
        this.h.disconnect();
        this.h.connect(b)
    }
    N() {
        return this.A
    }
    $(b, a, c, d) {
        switch (b) {
        case 0:
            a = Math.max(Math.min(a / 100, 1), 0);
            this.m[4] = a;
            W(this, this.i.gain, a / 2, c, d);
            W(this, this.h.gain, 1 - a / 2, c, d);
            break;
        case 6:
            this.m[1] = a / 1E3;
            W(this, this.L.gain, a / 1E3, c, d);
            break;
        case 7:
            this.m[2] = a;
            W(this, this.B.frequency, a, c, d);
            break;
        case 8:
            this.m[3] = a / 100,
            W(this, this.qb.gain, a / 100, c, d)
        }
    }
}
;
self.le = class extends X {
    constructor(b, a, c, d, e, f, g) {
        super(b);
        this.T = "phaser";
        this.m = [a, c, d, e, f, g];
        this.A = V(this);
        this.h = V(this);
        this.h.gain.value = 1 - g / 2;
        this.i = V(this);
        this.i.gain.value = g / 2;
        this.D = this.g.createBiquadFilter();
        this.D.type = "allpass";
        this.D.frequency.value = a;
        this.D.detune.value = c;
        this.D.Q.value = d;
        this.B = this.g.createOscillator();
        this.B.frequency.value = f;
        this.L = V(this);
        this.L.gain.value = e;
        this.A.connect(this.D);
        this.A.connect(this.h);
        this.D.connect(this.i);
        this.B.connect(this.L);
        this.L.connect(this.D.frequency);
        this.B.start(0)
    }
    j() {
        this.B.stop(0);
        this.A.disconnect();
        this.D.disconnect();
        this.B.disconnect();
        this.L.disconnect();
        this.h.disconnect();
        this.i.disconnect();
        super.j()
    }
    U(b) {
        this.i.disconnect();
        this.i.connect(b);
        this.h.disconnect();
        this.h.connect(b)
    }
    N() {
        return this.A
    }
    $(b, a, c, d) {
        switch (b) {
        case 0:
            a = Math.max(Math.min(a / 100, 1), 0);
            this.m[5] = a;
            W(this, this.i.gain, a / 2, c, d);
            W(this, this.h.gain, 1 - a / 2, c, d);
            break;
        case 1:
            this.m[0] = a;
            W(this, this.D.frequency, a, c, d);
            break;
        case 2:
            this.m[1] = a;
            W(this, this.D.detune, a, c, d);
            break;
        case 3:
            this.m[2] = a;
            W(this, this.D.Q, a, c, d);
            break;
        case 6:
            this.m[3] = a;
            W(this, this.L.gain, a, c, d);
            break;
        case 7:
            this.m[4] = a,
            W(this, this.B.frequency, a, c, d)
        }
    }
}
;
self.ke = class extends X {
    constructor(b, a) {
        super(b);
        this.T = "gain";
        this.m = [a];
        this.l = V(this);
        this.l.gain.value = a
    }
    j() {
        this.l.disconnect();
        super.j()
    }
    U(b) {
        this.l.disconnect();
        this.l.connect(b)
    }
    N() {
        return this.l
    }
    $(b, a, c, d) {
        const e = self.fb.nd;
        switch (b) {
        case 4:
            this.m[0] = e(a),
            W(this, this.l.gain, e(a), c, d)
        }
    }
}
;
self.ne = class extends X {
    constructor(b, a) {
        super(b);
        this.T = "stereopan";
        this.m = [a];
        this.l = this.g.createStereoPanner();
        this.l.pan.value = a
    }
    j() {
        this.l.disconnect();
        super.j()
    }
    U(b) {
        this.l.disconnect();
        this.l.connect(b)
    }
    N() {
        return this.l
    }
    $(b, a, c, d) {
        a = Math.min(Math.max(a / 100, -1), 1);
        switch (b) {
        case 9:
            this.m[0] = a,
            W(this, this.l.pan, a, c, d)
        }
    }
}
;
self.oe = class extends X {
    constructor(b, a, c) {
        super(b);
        this.T = "tremolo";
        this.m = [a, c];
        this.l = V(this);
        this.l.gain.value = 1 - c / 2;
        this.B = this.g.createOscillator();
        this.B.frequency.value = a;
        this.L = V(this);
        this.L.gain.value = c / 2;
        this.B.connect(this.L);
        this.L.connect(this.l.gain);
        this.B.start(0)
    }
    j() {
        this.B.stop(0);
        this.B.disconnect();
        this.L.disconnect();
        this.l.disconnect();
        super.j()
    }
    U(b) {
        this.l.disconnect();
        this.l.connect(b)
    }
    N() {
        return this.l
    }
    $(b, a, c, d) {
        switch (b) {
        case 0:
            a = Math.max(Math.min(a / 100, 1), 0);
            this.m[1] = a;
            W(this, this.l.gain, 1 - a / 2, c, d);
            W(this, this.L.gain, a / 2, c, d);
            break;
        case 7:
            this.m[0] = a,
            W(this, this.B.frequency, a, c, d)
        }
    }
}
;
self.me = class extends X {
    constructor(b, a, c) {
        super(b);
        this.T = "ringmod";
        this.m = [a, c];
        this.A = V(this);
        this.i = V(this);
        this.i.gain.value = c;
        this.h = V(this);
        this.h.gain.value = 1 - c;
        this.Bb = V(this);
        this.Bb.gain.value = 0;
        this.B = this.g.createOscillator();
        this.B.frequency.value = a;
        this.B.connect(this.Bb.gain);
        this.B.start(0);
        this.A.connect(this.Bb);
        this.A.connect(this.h);
        this.Bb.connect(this.i)
    }
    j() {
        this.B.stop(0);
        this.B.disconnect();
        this.Bb.disconnect();
        this.A.disconnect();
        this.i.disconnect();
        this.h.disconnect();
        super.j()
    }
    U(b) {
        this.i.disconnect();
        this.i.connect(b);
        this.h.disconnect();
        this.h.connect(b)
    }
    N() {
        return this.A
    }
    $(b, a, c, d) {
        switch (b) {
        case 0:
            a = Math.max(Math.min(a / 100, 1), 0);
            this.m[1] = a;
            W(this, this.i.gain, a, c, d);
            W(this, this.h.gain, 1 - a, c, d);
            break;
        case 7:
            this.m[0] = a,
            W(this, this.B.frequency, a, c, d)
        }
    }
}
;
self.he = class extends X {
    constructor(b, a, c, d, e, f) {
        super(b);
        this.T = "distortion";
        this.m = [a, c, d, e, f];
        this.A = V(this);
        this.ec = V(this);
        this.dc = V(this);
        b = d;
        .01 > b && (b = .01);
        this.ec.gain.value = b;
        this.dc.gain.value = Math.pow(1 / b, .6) * e;
        this.i = V(this);
        this.i.gain.value = f;
        this.h = V(this);
        this.h.gain.value = 1 - f;
        this.ic = this.g.createWaveShaper();
        this.Kc = new Float32Array(65536);
        for (e = 0; 32768 > e; ++e)
            f = e / 32768,
            b = 1.05 * c * a - a,
            d = 0 > f ? -f : f,
            d < a ? b = d : (d = 1 - Math.exp(-(1 / b) * (d - a)),
            b = a + b * d),
            f = b * (0 > f ? -1 : 1),
            this.Kc[32768 + e] = f,
            this.Kc[32768 - e - 1] = -f;
        this.ic.curve = this.Kc;
        this.A.connect(this.ec);
        this.A.connect(this.h);
        this.ec.connect(this.ic);
        this.ic.connect(this.dc);
        this.dc.connect(this.i)
    }
    j() {
        this.A.disconnect();
        this.ec.disconnect();
        this.ic.disconnect();
        this.dc.disconnect();
        this.i.disconnect();
        this.h.disconnect();
        super.j()
    }
    U(b) {
        this.i.disconnect();
        this.i.connect(b);
        this.h.disconnect();
        this.h.connect(b)
    }
    N() {
        return this.A
    }
    $(b, a, c, d) {
        switch (b) {
        case 0:
            a = Math.max(Math.min(a / 100, 1), 0),
            this.m[4] = a,
            W(this, this.i.gain, a, c, d),
            W(this, this.h.gain, 1 - a, c, d)
        }
    }
}
;
self.ee = class extends X {
    constructor(b, a, c, d, e, f) {
        super(b);
        this.T = "compressor";
        this.m = [a, c, d, e, f];
        this.l = this.g.createDynamicsCompressor();
        this.l.threshold.value = a;
        this.l.knee.value = c;
        this.l.ratio.value = d;
        this.l.attack.value = e;
        this.l.release.value = f
    }
    j() {
        this.l.disconnect();
        super.j()
    }
    U(b) {
        this.l.disconnect();
        this.l.connect(b)
    }
    N() {
        return this.l
    }
    $() {}
}
;
self.de = class extends X {
    constructor(b, a, c) {
        super(b);
        this.T = "analyser";
        this.m = [a, c];
        this.l = this.g.createAnalyser();
        this.l.fftSize = a;
        this.l.smoothingTimeConstant = c;
        this.Kd = new Float32Array(this.l.frequencyBinCount);
        this.Zd = new Uint8Array(a);
        this.Xd = this.Za = 0;
        b = this.v;
        b.Qa.add(this);
        R(b)
    }
    j() {
        this.v.Qa.delete(this);
        this.l.disconnect();
        super.j()
    }
    va() {
        this.l.getFloatFrequencyData(this.Kd);
        this.l.getByteTimeDomainData(this.Zd);
        const b = this.l.fftSize;
        let a = this.Za = 0;
        for (var c = 0; c < b; ++c) {
            let d = (this.Zd[c] - 128) / 128;
            0 > d && (d = -d);
            this.Za < d && (this.Za = d);
            a += d * d
        }
        c = self.fb.ye;
        this.Za = c(this.Za);
        this.Xd = c(Math.sqrt(a / b))
    }
    U(b) {
        this.l.disconnect();
        this.l.connect(b)
    }
    N() {
        return this.l
    }
    $() {}
}
;
"use strict";
self.ha.Ba(class extends self.Ma {
    constructor(b) {
        super(b, "mouse");
        t(this, [["cursor", a=>{
            document.documentElement.style.cursor = a
        }
        ], ["request-pointer-lock", ()=>{
            this.o.I.requestPointerLock()
        }
        ], ["release-pointer-lock", ()=>{
            document.exitPointerLock()
        }
        ]]);
        document.addEventListener("pointerlockchange", ()=>{
            l(this, "pointer-lock-change", {
                "has-pointer-lock": !!document.pointerLockElement
            })
        }
        );
        document.addEventListener("pointerlockerror", ()=>{
            l(this, "pointer-lock-error", {
                "has-pointer-lock": !!document.pointerLockElement
            })
        }
        )
    }
}
);
"use strict";
function Sb() {}
function Tb(b) {
    window.C3_RegisterSW && window.OfflineClientInfo && window.OfflineClientInfo.SetMessageCallback(a=>l(b, "sw-message", a.data))
}
function Ub(b) {
    b = b.orientation;
    if (screen.orientation && screen.orientation.lock)
        screen.orientation.lock(b).catch(a=>console.warn("[Construct] Failed to lock orientation: ", a));
    else
        try {
            let a = !1;
            screen.lockOrientation ? a = screen.lockOrientation(b) : screen.webkitLockOrientation ? a = screen.webkitLockOrientation(b) : screen.mozLockOrientation ? a = screen.mozLockOrientation(b) : screen.msLockOrientation && (a = screen.msLockOrientation(b));
            a || console.warn("[Construct] Failed to lock orientation")
        } catch (a) {
            console.warn("[Construct] Failed to lock orientation: ", a)
        }
}
self.ha.Ba(class extends self.Ma {
    constructor(b) {
        super(b, "browser");
        this.u = "";
        t(this, [["get-initial-state", a=>{
            this.u = a.exportType;
            return {
                location: location.toString(),
                isOnline: !!navigator.onLine,
                referrer: document.referrer,
                title: document.title,
                isCookieEnabled: !!navigator.cookieEnabled,
                screenWidth: screen.width,
                screenHeight: screen.height,
                windowOuterWidth: window.outerWidth,
                windowOuterHeight: window.outerHeight,
                isConstructArcade: "undefined" !== typeof window.is_scirra_arcade
            }
        }
        ], ["ready-for-sw-messages", ()=>Tb(this)], ["alert", a=>this.Cc(a)], ["close", ()=>{
            navigator.app && navigator.app.exitApp ? navigator.app.exitApp() : navigator.device && navigator.device.exitApp ? navigator.device.exitApp() : window.close()
        }
        ], ["set-focus", a=>this.Ec(a)], ["vibrate", a=>{
            navigator.vibrate && navigator.vibrate(a.pattern)
        }
        ], ["lock-orientation", a=>Ub(a)], ["unlock-orientation", ()=>{
            try {
                screen.orientation && screen.orientation.unlock ? screen.orientation.unlock() : screen.unlockOrientation ? screen.unlockOrientation() : screen.webkitUnlockOrientation ? screen.webkitUnlockOrientation() : screen.mozUnlockOrientation ? screen.mozUnlockOrientation() : screen.msUnlockOrientation && screen.msUnlockOrientation()
            } catch (a) {}
        }
        ], ["navigate", a=>{
            var c = a.type;
            if ("back" === c)
                navigator.app && navigator.app.backHistory ? navigator.app.backHistory() : window.history.back();
            else if ("forward" === c)
                window.history.forward();
            else if ("reload" === c)
                location.reload();
            else if ("url" === c) {
                c = a.url;
                const d = a.target;
                a = a.exportType;
                self.cordova && self.cordova.InAppBrowser ? self.cordova.InAppBrowser.open(c, "_system") : "preview" === a || "windows-webview2" === a ? window.open(c, "_blank") : this.wf || (2 === d ? window.top.location = c : 1 === d ? window.parent.location = c : window.location = c)
            } else
                "new-window" === c && (c = a.url,
                a = a.tag,
                self.cordova && self.cordova.InAppBrowser ? self.cordova.InAppBrowser.open(c, "_system") : window.open(c, a))
        }
        ], ["request-fullscreen", a=>{
            if ("windows-webview2" === this.u || "macos-wkwebview" === this.u)
                self.ha.Mb(!0),
                this.o.Hc({
                    type: "set-fullscreen",
                    fullscreen: !0
                });
            else {
                const c = {
                    navigationUI: "auto"
                };
                a = a.navUI;
                1 === a ? c.navigationUI = "hide" : 2 === a && (c.navigationUI = "show");
                a = document.documentElement;
                let d;
                a.requestFullscreen ? d = a.requestFullscreen(c) : a.mozRequestFullScreen ? d = a.mozRequestFullScreen(c) : a.msRequestFullscreen ? d = a.msRequestFullscreen(c) : a.webkitRequestFullScreen && (d = "undefined" !== typeof Element.ALLOW_KEYBOARD_INPUT ? a.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : a.webkitRequestFullScreen());
                d instanceof Promise && d.catch(Sb)
            }
        }
        ], ["exit-fullscreen", ()=>{
            if ("windows-webview2" === this.u || "macos-wkwebview" === this.u)
                self.ha.Mb(!1),
                this.o.Hc({
                    type: "set-fullscreen",
                    fullscreen: !1
                });
            else {
                let a;
                document.exitFullscreen ? a = document.exitFullscreen() : document.mozCancelFullScreen ? a = document.mozCancelFullScreen() : document.msExitFullscreen ? a = document.msExitFullscreen() : document.webkitCancelFullScreen && (a = document.webkitCancelFullScreen());
                a instanceof Promise && a.catch(Sb)
            }
        }
        ], ["set-hash", a=>{
            location.hash = a.hash
        }
        ], ["set-document-css-style", a=>{
            const c = a.prop
              , d = a.value;
            var e = a.selector;
            a = a["is-all"];
            try {
                if (e)
                    if (a)
                        var f = Array.from(document.querySelectorAll(e));
                    else {
                        var g = document.querySelector(e);
                        f = g ? [g] : []
                    }
                else
                    f = [document.documentElement];
                e = f;
                for (const h of e)
                    c.startsWith("--") ? h.style.setProperty(c, d) : h.style[c] = d
            } catch (h) {
                console.warn("[Browser] Failed to set style: ", h)
            }
        }
        ], ["get-document-css-style", a=>{
            {
                const d = a.prop;
                a = a.selector;
                try {
                    const e = document.querySelector(a);
                    var c = e ? {
                        isOk: !0,
                        result: window.getComputedStyle(e).getPropertyValue(d)
                    } : {
                        isOk: !1
                    }
                } catch (e) {
                    console.warn("[Browser] Failed to get style: ", e),
                    c = {
                        isOk: !1
                    }
                }
            }
            return c
        }
        ]]);
        window.addEventListener("online", ()=>{
            l(this, "online-state", {
                isOnline: !0
            })
        }
        );
        window.addEventListener("offline", ()=>{
            l(this, "online-state", {
                isOnline: !1
            })
        }
        );
        window.addEventListener("hashchange", ()=>{
            l(this, "hashchange", {
                location: location.toString()
            })
        }
        );
        document.addEventListener("backbutton", ()=>{
            l(this, "backbutton")
        }
        )
    }
    Cc(b) {
        alert(b.message)
    }
    Ec(b) {
        b = b.isFocus;
        if ("nwjs" === this.u) {
            const a = "nwjs" === this.u ? nw.Window.get() : null;
            b ? a.focus() : a.blur()
        } else
            b ? window.focus() : window.blur()
    }
}
);
"use strict";
let Vb = !1;
async function Wb(b) {
    var a = Xb(b.index);
    if (a && (a = a.vibrationActuator) && a.playEffect)
        try {
            await a.playEffect("dual-rumble", {
                duration: b.duration,
                startDelay: 0,
                weakMagnitude: b.weakMag,
                strongMagnitude: b.strongMag
            })
        } catch (c) {
            console.warn("[Gamepad] Failed to vibrate gamepad: ", c)
        }
}
function Y() {
    try {
        return Array.from(navigator.getGamepads()).filter(b=>b && b.connected)
    } catch (b) {
        return Vb || (console.warn("[Construct] Failed to access gamepads: ", b),
        Vb = !0),
        []
    }
}
function Xb(b) {
    for (const a of Y())
        if (a.index === b)
            return a;
    return null
}
self.ha.Ba(class extends self.Ma {
    constructor(b) {
        super(b, "gamepad");
        this.Pd = !!navigator.getGamepads;
        this.Uc = !1;
        n(this, "is-supported", ()=>this.Pd);
        n(this, "ready", ()=>{
            this.Uc = !0;
            for (const a of Y())
                l(this, "gamepad-connected", {
                    index: a.index,
                    id: a.id
                });
            this.Pd && u(this)
        }
        );
        n(this, "vibrate", a=>Wb(a));
        n(this, "reset-vibrate", a=>{
            (a = Xb(a.index)) && (a = a.vibrationActuator) && a.reset && a.reset()
        }
        );
        window.addEventListener("gamepadconnected", a=>{
            this.Uc && (a = a.gamepad,
            l(this, "gamepad-connected", {
                index: a.index,
                id: a.id
            }))
        }
        );
        window.addEventListener("gamepaddisconnected", a=>{
            this.Uc && l(this, "gamepad-disconnected", {
                index: a.gamepad.index
            })
        }
        );
        window.addEventListener("unload", ()=>{
            for (const a of Y()) {
                const c = a.vibrationActuator;
                c && c.reset && c.reset()
            }
        }
        )
    }
    va() {
        var b = Y();
        b.length && (b = b.map(a=>({
            index: a.index,
            id: a.id,
            buttons: a.buttons.map(c=>({
                pressed: c.pressed,
                value: c.value
            })),
            axes: a.axes
        })),
        l(this, "input-update", b))
    }
}
);
"use strict";
async function Yb() {
    const b = []
      , a = [];
    if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
        var c = await navigator.mediaDevices.enumerateDevices();
        for (const d of c) {
            c = d.kind;
            const e = {
                deviceId: d.deviceId,
                label: d.label,
                facing: d.facing || d.facingMode || ""
            };
            "video" === c || "videoinput" === c ? b.push(e) : ("audio" === c || "audioinput" === c) && a.push(e)
        }
    }
    return {
        videoSources: b,
        audioSources: a
    }
}
async function Zb(b, a, c) {
    try {
        const d = b.o;
        "object" === typeof c.constraints.audio ? await d.tc("CAMERA", "RECORD_AUDIO", "MODIFY_AUDIO_SETTINGS") : await d.tc("CAMERA");
        b.Ia = await navigator.mediaDevices.getUserMedia(c.constraints);
        a.srcObject = b.Ia;
        a.play();
        u(b);
        return {
            ok: !0
        }
    } catch (d) {
        return console.warn("Error requesting camera: ", d),
        {
            ok: !1
        }
    }
}
async function $b(b, a) {
    try {
        return await b.o.tc("RECORD_AUDIO", "MODIFY_AUDIO_SETTINGS"),
        b.Ia = await navigator.mediaDevices.getUserMedia(a.constraints),
        self.C3Audio_OnMicrophoneStream && self.C3Audio_OnMicrophoneStream(b.Ia, a.tag),
        {
            ok: !0
        }
    } catch (c) {
        return console.warn("Error requesting microphone: ", c),
        {
            ok: !1
        }
    }
}
async function ac(b, a) {
    const c = document.createElement("canvas");
    c.width = b.videoWidth;
    c.height = b.videoHeight;
    c.getContext("2d").drawImage(b, 0, 0, b.videoWidth, b.videoHeight);
    return {
        snapshotUrl: await bc(c, a.format, a.quality)
    }
}
function cc(b, a) {
    b.Ia === a && (b.Ia = null);
    b = a.getTracks();
    for (let c = 0, d = b.length; c < d; ++c)
        b[c].stop()
}
function bc(b, a, c) {
    return new Promise(d=>{
        b.toBlob ? b.toBlob(e=>d(URL.createObjectURL(e)), a, c) : d(b.toDataURL(a, c))
    }
    )
}
self.ha.Ba(class extends self.md {
    constructor(b) {
        super(b, "user-media");
        this.lb = !1;
        this.Ze = this.o.Z;
        this.df = 0;
        this.Ia = null;
        n(this, "get-media-sources", ()=>Yb());
        w(this, "request-camera", (a,c)=>Zb(this, a, c));
        w(this, "request-microphone", (a,c)=>$b(this, c));
        w(this, "snapshot", (a,c)=>ac(a, c));
        w(this, "stop", a=>this.Ic(a));
        self.C3UserMedia_GetVideoElement = a=>x(this, a);
        self.C3UserMedia_GetLastMediaStream = ()=>this.Ia
    }
    mc(b) {
        const a = document.createElement("video");
        a.crossOrigin = "anonymous";
        a.autoplay = !0;
        a.muted = !0;
        a.playsInline = !0;
        a.addEventListener("canplaythrough", ()=>{
            v(this, "video-ready", b, {
                width: a.videoWidth,
                height: a.videoHeight
            })
        }
        );
        return a
    }
    Jb() {}
    od(b) {
        b.srcObject && (cc(this, b.srcObject),
        b.srcObject = null)
    }
    Ic(b) {
        b.srcObject && (cc(this, b.srcObject),
        b.srcObject = null)
    }
    va() {
        const b = {}
          , a = {
            sequenceNumber: this.df++,
            videoData: b
        }
          , c = []
          , d = [];
        for (const [e,f] of this.Sa.entries()) {
            const g = f.Rb;
            if (!g.srcObject)
                continue;
            const h = {
                width: g.videoWidth,
                height: g.videoHeight
            };
            this.Ze && d.push(createImageBitmap(g).then(k=>{
                h.imageBitmap = k;
                c.push(k)
            }
            ).catch(()=>{
                h.imageBitmap = null
            }
            ));
            b[e.toString()] = h
        }
        Promise.all(d).then(()=>l(this, "state", a, !1, c))
    }
}
);
"use strict";
function Z(b) {
    b.stopPropagation()
}
function dc(b) {
    13 !== b.which && 27 !== b.which && b.stopPropagation()
}
self.ha.Ba(class extends self.md {
    constructor(b) {
        super(b, "text-input");
        w(this, "scroll-to-bottom", a=>{
            a.scrollTop = a.scrollHeight
        }
        )
    }
    mc(b, a) {
        let c;
        const d = a.type;
        "textarea" === d ? (c = document.createElement("textarea"),
        c.style.resize = "none") : (c = document.createElement("input"),
        c.type = d);
        c.style.position = "absolute";
        c.autocomplete = "off";
        c.addEventListener("pointerdown", Z);
        c.addEventListener("pointermove", Z);
        c.addEventListener("pointerrawupdate", Z);
        c.addEventListener("pointerup", Z);
        c.addEventListener("mousedown", Z);
        c.addEventListener("mouseup", Z);
        c.addEventListener("keydown", dc);
        c.addEventListener("keyup", dc);
        c.addEventListener("click", e=>{
            e.stopPropagation();
            ca(this, "click", b)
        }
        );
        c.addEventListener("dblclick", e=>{
            e.stopPropagation();
            ca(this, "dblclick", b)
        }
        );
        c.addEventListener("input", ()=>v(this, "change", b, {
            text: c.value
        }));
        a.id && (c.id = a.id);
        a.className && (c.className = a.className);
        this.Jb(c, a);
        return c
    }
    Jb(b, a) {
        b.value = a.text;
        b.placeholder = a.placeholder;
        b.title = a.title;
        b.disabled = !a.isEnabled;
        b.readOnly = a.isReadOnly;
        b.spellcheck = a.spellCheck;
        a = a.maxLength;
        0 > a ? b.removeAttribute("maxlength") : b.setAttribute("maxlength", a)
    }
}
);
