const Et = Symbol(), pl = "http://www.w3.org/1999/xhtml", Qc = !1;
var Ro = Array.isArray, p1 = Array.prototype.indexOf, tn = Array.prototype.includes, mc = Array.from, g1 = Object.defineProperty, Xn = Object.getOwnPropertyDescriptor, y1 = Object.getOwnPropertyDescriptors, gl = Object.prototype, v1 = Array.prototype, Oo = Object.getPrototypeOf, Is = Object.isExtensible;
function _1(t) {
  return typeof t == "function";
}
const Zr = () => {
};
function w1(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function yl() {
  var t, e, a = new Promise((n, i) => {
    t = n, e = i;
  });
  return { promise: a, resolve: t, reject: e };
}
function vr(t, e) {
  if (Array.isArray(t))
    return t;
  if (e === void 0 || !(Symbol.iterator in t))
    return Array.from(t);
  const a = [];
  for (const n of t)
    if (a.push(n), a.length === e) break;
  return a;
}
const Dt = 2, wn = 4, Dr = 8, zo = 1 << 24, $a = 16, jt = 32, lr = 64, Kc = 128, ea = 512, kt = 1024, Nt = 2048, la = 4096, Ot = 8192, Wa = 16384, dr = 32768, Ar = 65536, Ns = 1 << 17, x1 = 1 << 18, Ur = 1 << 19, vl = 1 << 20, _a = 1 << 25, Cr = 65536, $c = 1 << 21, Uo = 1 << 22, cr = 1 << 23, Fi = Symbol("$state"), k1 = Symbol(""), _r = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function _l(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function S1() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function M1(t, e, a) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function T1(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function D1() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function A1(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function C1() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function P1() {
  throw new Error("https://svelte.dev/e/set_context_after_init");
}
function E1() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function I1() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function N1() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function L1() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function F1() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function wl(t) {
  return t === this.v;
}
function R1(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function xl(t) {
  return !R1(t, this.v);
}
let da = !1, O1 = !1;
function z1() {
  da = !0;
}
const U1 = [];
function kl(t, e = !1, a = !1) {
  return Ri(t, /* @__PURE__ */ new Map(), "", U1, null, a);
}
function Ri(t, e, a, n, i = null, c = !1) {
  if (typeof t == "object" && t !== null) {
    var o = e.get(t);
    if (o !== void 0) return o;
    if (t instanceof Map) return (
      /** @type {Snapshot<T>} */
      new Map(t)
    );
    if (t instanceof Set) return (
      /** @type {Snapshot<T>} */
      new Set(t)
    );
    if (Ro(t)) {
      var s = (
        /** @type {Snapshot<any>} */
        Array(t.length)
      );
      e.set(t, s), i !== null && e.set(i, s);
      for (var f = 0; f < t.length; f += 1) {
        var d = t[f];
        f in t && (s[f] = Ri(d, e, a, n, null, c));
      }
      return s;
    }
    if (Oo(t) === gl) {
      s = {}, e.set(t, s), i !== null && e.set(i, s);
      for (var h of Object.keys(t))
        s[h] = Ri(
          // @ts-expect-error
          t[h],
          e,
          a,
          n,
          null,
          c
        );
      return s;
    }
    if (t instanceof Date)
      return (
        /** @type {Snapshot<T>} */
        structuredClone(t)
      );
    if (typeof /** @type {T & { toJSON?: any } } */
    t.toJSON == "function" && !c)
      return Ri(
        /** @type {T & { toJSON(): any } } */
        t.toJSON(),
        e,
        a,
        n,
        // Associate the instance with the toJSON clone
        t
      );
  }
  if (t instanceof EventTarget)
    return (
      /** @type {Snapshot<T>} */
      t
    );
  try {
    return (
      /** @type {Snapshot<T>} */
      structuredClone(t)
    );
  } catch {
    return (
      /** @type {Snapshot<T>} */
      t
    );
  }
}
let Lt = null;
function an(t) {
  Lt = t;
}
function V1(t) {
  return (
    /** @type {T} */
    Ml().get(t)
  );
}
function Y1(t, e) {
  const a = Ml();
  if (da) {
    var n = (
      /** @type {Effect} */
      tt.f
    ), i = !et && (n & jt) !== 0 && // pop() runs synchronously, so this indicates we're setting context after an await
    !/** @type {ComponentContext} */
    Lt.i;
    i || P1();
  }
  return a.set(t, e), e;
}
function it(t, e = !1, a) {
  Lt = {
    p: Lt,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    l: null
  };
}
function ct(t) {
  var e = (
    /** @type {ComponentContext} */
    Lt
  ), a = e.e;
  if (a !== null) {
    e.e = null;
    for (var n of a)
      Wl(n);
  }
  return e.i = !0, Lt = e.p, /** @type {T} */
  {};
}
function Sl() {
  return !0;
}
function Ml(t) {
  return Lt === null && _l(), Lt.c ??= new Map(H1(Lt) || void 0);
}
function H1(t) {
  let e = t.p;
  for (; e !== null; ) {
    const a = e.c;
    if (a !== null)
      return a;
    e = e.p;
  }
  return null;
}
let wr = [];
function Tl() {
  var t = wr;
  wr = [], w1(t);
}
function Ta(t) {
  if (wr.length === 0 && !qn) {
    var e = wr;
    queueMicrotask(() => {
      e === wr && Tl();
    });
  }
  wr.push(t);
}
function B1() {
  for (; wr.length > 0; )
    Tl();
}
function Dl(t) {
  var e = tt;
  if (e === null)
    return et.f |= cr, t;
  if ((e.f & dr) === 0 && (e.f & wn) === 0)
    throw t;
  rr(t, e);
}
function rr(t, e) {
  for (; e !== null; ) {
    if ((e.f & Kc) !== 0) {
      if ((e.f & dr) === 0)
        throw t;
      try {
        e.b.error(t);
        return;
      } catch (a) {
        t = a;
      }
    }
    e = e.parent;
  }
  throw t;
}
const W1 = -7169;
function gt(t, e) {
  t.f = t.f & W1 | e;
}
function Vo(t) {
  (t.f & ea) !== 0 || t.deps === null ? gt(t, kt) : gt(t, la);
}
function Al(t) {
  if (t !== null)
    for (const e of t)
      (e.f & Dt) === 0 || (e.f & Cr) === 0 || (e.f ^= Cr, Al(
        /** @type {Derived} */
        e.deps
      ));
}
function Cl(t, e, a) {
  (t.f & Nt) !== 0 ? e.add(t) : (t.f & la) !== 0 && a.add(t), Al(t.deps), gt(t, kt);
}
const Xr = /* @__PURE__ */ new Set();
let lt = null, Vt = null, Yt = [], pc = null, qn = !1, rn = null, G1 = 1;
class Ga {
  // for debugging. TODO remove once async is stable
  id = G1++;
  /**
   * The current values of any sources that are updated in this batch
   * They keys of this map are identical to `this.#previous`
   * @type {Map<Source, any>}
   */
  current = /* @__PURE__ */ new Map();
  /**
   * The values of any sources that are updated in this batch _before_ those updates took place.
   * They keys of this map are identical to `this.#current`
   * @type {Map<Source, any>}
   */
  previous = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<(batch: Batch) => void>}
   */
  #e = /* @__PURE__ */ new Set();
  /**
   * If a fork is discarded, we need to destroy any effects that are no longer needed
   * @type {Set<(batch: Batch) => void>}
   */
  #a = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #t = 0;
  /**
   * The number of async effects that are currently in flight, _not_ inside a pending boundary
   */
  #r = 0;
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #n = null;
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Set<Effect>}
   */
  #c = /* @__PURE__ */ new Set();
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Set<Effect>}
   */
  #i = /* @__PURE__ */ new Set();
  /**
   * A map of branches that still exist, but will be destroyed when this batch
   * is committed — we skip over these during `process`.
   * The value contains child effects that were dirty/maybe_dirty before being reset,
   * so they can be rescheduled if the branch survives.
   * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
   */
  #o = /* @__PURE__ */ new Map();
  is_fork = !1;
  #s = !1;
  #d() {
    return this.is_fork || this.#r > 0;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(e) {
    this.#o.has(e) || this.#o.set(e, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(e) {
    var a = this.#o.get(e);
    if (a) {
      this.#o.delete(e);
      for (var n of a.d)
        gt(n, Nt), wa(n);
      for (n of a.m)
        gt(n, la), wa(n);
    }
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    Yt = [], this.apply();
    var a = rn = [], n = [];
    for (const i of e)
      this.#u(i, a, n);
    if (rn = null, this.#d()) {
      this.#l(n), this.#l(a);
      for (const [i, c] of this.#o)
        Nl(i, c);
    } else {
      lt = null;
      for (const i of this.#e) i(this);
      this.#e.clear(), this.#t === 0 && this.#h(), Ls(n), Ls(a), this.#c.clear(), this.#i.clear(), this.#n?.resolve();
    }
    Vt = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {Effect[]} effects
   * @param {Effect[]} render_effects
   */
  #u(e, a, n) {
    e.f ^= kt;
    for (var i = e.first; i !== null; ) {
      var c = i.f, o = (c & (jt | lr)) !== 0, s = o && (c & kt) !== 0, f = (c & Ot) !== 0, d = s || this.#o.has(i);
      if (!d && i.fn !== null) {
        o ? f || (i.f ^= kt) : (c & wn) !== 0 ? a.push(i) : (c & (Dr | zo)) !== 0 && (da || f) ? n.push(i) : di(i) && (cn(i), (c & $a) !== 0 && (this.#i.add(i), f && gt(i, Nt)));
        var h = i.first;
        if (h !== null) {
          i = h;
          continue;
        }
      }
      for (; i !== null; ) {
        var b = i.next;
        if (b !== null) {
          i = b;
          break;
        }
        i = i.parent;
      }
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #l(e) {
    for (var a = 0; a < e.length; a += 1)
      Cl(e[a], this.#c, this.#i);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, a) {
    a !== Et && !this.previous.has(e) && this.previous.set(e, a), (e.f & cr) === 0 && (this.current.set(e, e.v), Vt?.set(e, e.v));
  }
  activate() {
    lt = this, this.apply();
  }
  deactivate() {
    lt === this && (lt = null, Vt = null);
  }
  flush() {
    if (Yt.length > 0)
      lt = this, Pl();
    else if (this.#t === 0 && !this.is_fork) {
      for (const e of this.#e) e(this);
      this.#e.clear(), this.#h(), this.#n?.resolve();
    }
    this.deactivate();
  }
  discard() {
    for (const e of this.#a) e(this);
    this.#a.clear();
  }
  #h() {
    if (Xr.size > 1) {
      this.previous.clear();
      var e = lt, a = Vt, n = !0;
      for (const c of Xr) {
        if (c === this) {
          n = !1;
          continue;
        }
        const o = [];
        for (const [f, d] of this.current) {
          if (c.current.has(f))
            if (n && d !== c.current.get(f))
              c.current.set(f, d);
            else
              continue;
          o.push(f);
        }
        if (o.length === 0)
          continue;
        const s = [...c.current.keys()].filter((f) => !this.current.has(f));
        if (s.length > 0) {
          var i = Yt;
          Yt = [];
          const f = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map();
          for (const h of o)
            El(h, s, f, d);
          if (Yt.length > 0) {
            lt = c, c.apply();
            for (const h of Yt)
              c.#u(h, [], []);
            c.deactivate();
          }
          Yt = i;
        }
      }
      lt = e, Vt = a;
    }
    this.#o.clear(), Xr.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(e) {
    this.#t += 1, e && (this.#r += 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(e) {
    this.#t -= 1, e && (this.#r -= 1), !this.#s && (this.#s = !0, Ta(() => {
      this.#s = !1, this.#d() ? Yt.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const e of this.#c)
      this.#i.delete(e), gt(e, Nt), wa(e);
    for (const e of this.#i)
      gt(e, la), wa(e);
    this.flush();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(e) {
    this.#e.add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    this.#a.add(e);
  }
  settled() {
    return (this.#n ??= yl()).promise;
  }
  static ensure() {
    if (lt === null) {
      const e = lt = new Ga();
      Xr.add(lt), qn || Ta(() => {
        lt === e && e.flush();
      });
    }
    return lt;
  }
  apply() {
    if (!(!da || !this.is_fork && Xr.size === 1)) {
      Vt = new Map(this.current);
      for (const e of Xr)
        if (e !== this)
          for (const [a, n] of e.previous)
            Vt.has(a) || Vt.set(a, n);
    }
  }
}
function X1(t) {
  var e = qn;
  qn = !0;
  try {
    for (var a; ; ) {
      if (B1(), Yt.length === 0 && (lt?.flush(), Yt.length === 0))
        return pc = null, /** @type {T} */
        a;
      Pl();
    }
  } finally {
    qn = e;
  }
}
function Pl() {
  var t = null;
  try {
    for (var e = 0; Yt.length > 0; ) {
      var a = Ga.ensure();
      if (e++ > 1e3) {
        var n, i;
        q1();
      }
      a.process(Yt), or.clear();
    }
  } finally {
    Yt = [], pc = null, rn = null;
  }
}
function q1() {
  try {
    C1();
  } catch (t) {
    rr(t, pc);
  }
}
let ga = null;
function Ls(t) {
  var e = t.length;
  if (e !== 0) {
    for (var a = 0; a < e; ) {
      var n = t[a++];
      if ((n.f & (Wa | Ot)) === 0 && di(n) && (ga = /* @__PURE__ */ new Set(), cn(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Xl(n), ga?.size > 0)) {
        or.clear();
        for (const i of ga) {
          if ((i.f & (Wa | Ot)) !== 0) continue;
          const c = [i];
          let o = i.parent;
          for (; o !== null; )
            ga.has(o) && (ga.delete(o), c.push(o)), o = o.parent;
          for (let s = c.length - 1; s >= 0; s--) {
            const f = c[s];
            (f.f & (Wa | Ot)) === 0 && cn(f);
          }
        }
        ga.clear();
      }
    }
    ga = null;
  }
}
function El(t, e, a, n) {
  if (!a.has(t) && (a.add(t), t.reactions !== null))
    for (const i of t.reactions) {
      const c = i.f;
      (c & Dt) !== 0 ? El(
        /** @type {Derived} */
        i,
        e,
        a,
        n
      ) : (c & (Uo | $a)) !== 0 && (c & Nt) === 0 && Il(i, e, n) && (gt(i, Nt), wa(
        /** @type {Effect} */
        i
      ));
    }
}
function Il(t, e, a) {
  const n = a.get(t);
  if (n !== void 0) return n;
  if (t.deps !== null)
    for (const i of t.deps) {
      if (tn.call(e, i))
        return !0;
      if ((i.f & Dt) !== 0 && Il(
        /** @type {Derived} */
        i,
        e,
        a
      ))
        return a.set(
          /** @type {Derived} */
          i,
          !0
        ), !0;
    }
  return a.set(t, !1), !1;
}
function wa(t) {
  var e = pc = t, a = e.b;
  if (a?.is_pending && (t.f & (wn | Dr | zo)) !== 0 && (t.f & dr) === 0) {
    a.defer_effect(t);
    return;
  }
  for (; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (rn !== null && e === tt && (da || (t.f & Dr) === 0))
      return;
    if ((n & (lr | jt)) !== 0) {
      if ((n & kt) === 0)
        return;
      e.f ^= kt;
    }
  }
  Yt.push(e);
}
function Nl(t, e) {
  if (!((t.f & jt) !== 0 && (t.f & kt) !== 0)) {
    (t.f & Nt) !== 0 ? e.d.push(t) : (t.f & la) !== 0 && e.m.push(t), gt(t, kt);
    for (var a = t.first; a !== null; )
      Nl(a, e), a = a.next;
  }
}
function j1(t) {
  let e = 0, a = Za(0), n;
  return () => {
    Bo() && (r(a), Go(() => (e === 0 && (n = dt(() => t(() => Xt(a)))), e += 1, () => {
      Ta(() => {
        e -= 1, e === 0 && (n?.(), n = void 0, Xt(a));
      });
    })));
  };
}
var Z1 = Ar | Ur;
function J1(t, e, a, n) {
  new Q1(t, e, a, n);
}
class Q1 {
  /** @type {Boundary | null} */
  parent;
  is_pending = !1;
  /**
   * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
   * Inherited from parent boundary, or defaults to identity.
   * @type {(error: unknown) => unknown}
   */
  transform_error;
  /** @type {TemplateNode} */
  #e;
  /** @type {TemplateNode | null} */
  #a = null;
  /** @type {BoundaryProps} */
  #t;
  /** @type {((anchor: Node) => void)} */
  #r;
  /** @type {Effect} */
  #n;
  /** @type {Effect | null} */
  #c = null;
  /** @type {Effect | null} */
  #i = null;
  /** @type {Effect | null} */
  #o = null;
  /** @type {DocumentFragment | null} */
  #s = null;
  #d = 0;
  #u = 0;
  #l = !1;
  /** @type {Set<Effect>} */
  #h = /* @__PURE__ */ new Set();
  /** @type {Set<Effect>} */
  #m = /* @__PURE__ */ new Set();
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #f = null;
  #b = j1(() => (this.#f = Za(this.#d), () => {
    this.#f = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(e, a, n, i) {
    this.#e = e, this.#t = a, this.#r = (c) => {
      var o = (
        /** @type {Effect} */
        tt
      );
      o.b = this, o.f |= Kc, n(c);
    }, this.parent = /** @type {Effect} */
    tt.b, this.transform_error = i ?? this.parent?.transform_error ?? ((c) => c), this.#n = Xo(() => {
      this.#g();
    }, Z1);
  }
  #p() {
    try {
      this.#c = Qt(() => this.#r(this.#e));
    } catch (e) {
      this.error(e);
    }
  }
  /**
   * @param {unknown} error The deserialized error from the server's hydration comment
   */
  #y(e) {
    const a = this.#t.failed;
    a && (this.#o = Qt(() => {
      a(
        this.#e,
        () => e,
        () => () => {
        }
      );
    }));
  }
  #w() {
    const e = this.#t.pending;
    e && (this.is_pending = !0, this.#i = Qt(() => e(this.#e)), Ta(() => {
      var a = this.#s = document.createDocumentFragment(), n = Xa();
      a.append(n), this.#c = this.#_(() => (Ga.ensure(), Qt(() => this.#r(n)))), this.#u === 0 && (this.#e.before(a), this.#s = null, Sr(
        /** @type {Effect} */
        this.#i,
        () => {
          this.#i = null;
        }
      ), this.#v());
    }));
  }
  #g() {
    try {
      if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#d = 0, this.#c = Qt(() => {
        this.#r(this.#e);
      }), this.#u > 0) {
        var e = this.#s = document.createDocumentFragment();
        Zo(this.#c, e);
        const a = (
          /** @type {(anchor: Node) => void} */
          this.#t.pending
        );
        this.#i = Qt(() => a(this.#e));
      } else
        this.#v();
    } catch (a) {
      this.error(a);
    }
  }
  #v() {
    this.is_pending = !1;
    for (const e of this.#h)
      gt(e, Nt), wa(e);
    for (const e of this.#m)
      gt(e, la), wa(e);
    this.#h.clear(), this.#m.clear();
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(e) {
    Cl(e, this.#h, this.#m);
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!this.#t.pending;
  }
  /**
   * @template T
   * @param {() => T} fn
   */
  #_(e) {
    var a = tt, n = et, i = Lt;
    Pa(this.#n), ra(this.#n), an(this.#n.ctx);
    try {
      return e();
    } catch (c) {
      return Dl(c), null;
    } finally {
      Pa(a), ra(n), an(i);
    }
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   */
  #x(e) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#x(e);
      return;
    }
    this.#u += e, this.#u === 0 && (this.#v(), this.#i && Sr(this.#i, () => {
      this.#i = null;
    }), this.#s && (this.#e.before(this.#s), this.#s = null));
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    this.#x(e), this.#d += e, !(!this.#f || this.#l) && (this.#l = !0, Ta(() => {
      this.#l = !1, this.#f && nn(this.#f, this.#d);
    }));
  }
  get_effect_pending() {
    return this.#b(), r(
      /** @type {Source<number>} */
      this.#f
    );
  }
  /** @param {unknown} error */
  error(e) {
    var a = this.#t.onerror;
    let n = this.#t.failed;
    if (!a && !n)
      throw e;
    this.#c && (zt(this.#c), this.#c = null), this.#i && (zt(this.#i), this.#i = null), this.#o && (zt(this.#o), this.#o = null);
    var i = !1, c = !1;
    const o = () => {
      if (i) {
        F1();
        return;
      }
      i = !0, c && L1(), this.#o !== null && Sr(this.#o, () => {
        this.#o = null;
      }), this.#_(() => {
        Ga.ensure(), this.#g();
      });
    }, s = (f) => {
      try {
        c = !0, a?.(f, o), c = !1;
      } catch (d) {
        rr(d, this.#n && this.#n.parent);
      }
      n && (this.#o = this.#_(() => {
        Ga.ensure();
        try {
          return Qt(() => {
            var d = (
              /** @type {Effect} */
              tt
            );
            d.b = this, d.f |= Kc, n(
              this.#e,
              () => f,
              () => o
            );
          });
        } catch (d) {
          return rr(
            d,
            /** @type {Effect} */
            this.#n.parent
          ), null;
        }
      }));
    };
    Ta(() => {
      var f;
      try {
        f = this.transform_error(e);
      } catch (d) {
        rr(d, this.#n && this.#n.parent);
        return;
      }
      f !== null && typeof f == "object" && typeof /** @type {any} */
      f.then == "function" ? f.then(
        s,
        /** @param {unknown} e */
        (d) => rr(d, this.#n && this.#n.parent)
      ) : s(f);
    });
  }
}
function K1(t, e, a, n) {
  const i = Yo;
  var c = t.filter((b) => !b.settled);
  if (a.length === 0 && c.length === 0) {
    n(e.map(i));
    return;
  }
  var o = (
    /** @type {Effect} */
    tt
  ), s = $1(), f = c.length === 1 ? c[0].promise : c.length > 1 ? Promise.all(c.map((b) => b.promise)) : null;
  function d(b) {
    s();
    try {
      n(b);
    } catch (m) {
      (o.f & Wa) === 0 && rr(m, o);
    }
    eo();
  }
  if (a.length === 0) {
    f.then(() => d(e.map(i)));
    return;
  }
  function h() {
    s(), Promise.all(a.map((b) => /* @__PURE__ */ th(b))).then((b) => d([...e.map(i), ...b])).catch((b) => rr(b, o));
  }
  f ? f.then(h) : h();
}
function $1() {
  var t = tt, e = et, a = Lt, n = lt;
  return function(c = !0) {
    Pa(t), ra(e), an(a), c && n?.activate();
  };
}
function eo(t = !0) {
  Pa(null), ra(null), an(null), t && lt?.deactivate();
}
function eh() {
  var t = (
    /** @type {Boundary} */
    /** @type {Effect} */
    tt.b
  ), e = (
    /** @type {Batch} */
    lt
  ), a = t.is_rendered();
  return t.update_pending_count(1), e.increment(a), () => {
    t.update_pending_count(-1), e.decrement(a);
  };
}
// @__NO_SIDE_EFFECTS__
function Yo(t) {
  var e = Dt | Nt, a = et !== null && (et.f & Dt) !== 0 ? (
    /** @type {Derived} */
    et
  ) : null;
  return tt !== null && (tt.f |= Ur), {
    ctx: Lt,
    deps: null,
    effects: null,
    equals: wl,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Et
    ),
    wv: 0,
    parent: a ?? tt,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function th(t, e, a) {
  /** @type {Effect | null} */
  tt === null && S1();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), c = Za(
    /** @type {V} */
    Et
  ), o = !et, s = /* @__PURE__ */ new Map();
  return hh(() => {
    var f = yl();
    i = f.promise;
    try {
      Promise.resolve(t()).then(f.resolve, f.reject).finally(eo);
    } catch (m) {
      f.reject(m), eo();
    }
    var d = (
      /** @type {Batch} */
      lt
    );
    if (o) {
      var h = eh();
      s.get(d)?.reject(_r), s.delete(d), s.set(d, f);
    }
    const b = (m, p = void 0) => {
      if (d.activate(), p)
        p !== _r && (c.f |= cr, nn(c, p));
      else {
        (c.f & cr) !== 0 && (c.f ^= cr), nn(c, m);
        for (const [g, v] of s) {
          if (s.delete(g), g === d) break;
          v.reject(_r);
        }
      }
      h && h();
    };
    f.promise.then(b, (m) => b(null, m || "unknown"));
  }), Bl(() => {
    for (const f of s.values())
      f.reject(_r);
  }), new Promise((f) => {
    function d(h) {
      function b() {
        h === i ? f(c) : d(i);
      }
      h.then(b, b);
    }
    d(i);
  });
}
// @__NO_SIDE_EFFECTS__
function u(t) {
  const e = /* @__PURE__ */ Yo(t);
  return da || Zl(e), e;
}
// @__NO_SIDE_EFFECTS__
function ah(t) {
  const e = /* @__PURE__ */ Yo(t);
  return e.equals = xl, e;
}
function rh(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var a = 0; a < e.length; a += 1)
      zt(
        /** @type {Effect} */
        e[a]
      );
  }
}
function nh(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & Dt) === 0)
      return (e.f & Wa) === 0 ? (
        /** @type {Effect} */
        e
      ) : null;
    e = e.parent;
  }
  return null;
}
function Ho(t) {
  var e, a = tt;
  Pa(nh(t));
  try {
    t.f &= ~Cr, rh(t), e = $l(t);
  } finally {
    Pa(a);
  }
  return e;
}
function Ll(t) {
  var e = Ho(t);
  if (!t.equals(e) && (t.wv = Ql(), (!lt?.is_fork || t.deps === null) && (t.v = e, t.deps === null))) {
    gt(t, kt);
    return;
  }
  Pr || (Vt !== null ? (Bo() || lt?.is_fork) && Vt.set(t, e) : Vo(t));
}
function ih(t) {
  if (t.effects !== null)
    for (const e of t.effects)
      (e.teardown || e.ac) && (e.teardown?.(), e.ac?.abort(_r), e.teardown = Zr, e.ac = null, Qn(e, 0), qo(e));
}
function Fl(t) {
  if (t.effects !== null)
    for (const e of t.effects)
      e.teardown && cn(e);
}
let to = /* @__PURE__ */ new Set();
const or = /* @__PURE__ */ new Map();
let Rl = !1;
function Za(t, e) {
  var a = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: wl,
    rv: 0,
    wv: 0
  };
  return a;
}
// @__NO_SIDE_EFFECTS__
function Me(t, e) {
  const a = Za(t);
  return Zl(a), a;
}
// @__NO_SIDE_EFFECTS__
function ch(t, e = !1, a = !0) {
  const n = Za(t);
  return e || (n.equals = xl), n;
}
function re(t, e, a = !1) {
  et !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!oa || (et.f & Ns) !== 0) && Sl() && (et.f & (Dt | $a | Uo | Ns)) !== 0 && (ta === null || !tn.call(ta, t)) && N1();
  let n = a ? bt(e) : e;
  return nn(t, n);
}
function nn(t, e) {
  if (!t.equals(e)) {
    var a = t.v;
    Pr ? or.set(t, e) : or.set(t, a), t.v = e;
    var n = Ga.ensure();
    if (n.capture(t, a), (t.f & Dt) !== 0) {
      const i = (
        /** @type {Derived} */
        t
      );
      (t.f & Nt) !== 0 && Ho(i), Vo(i);
    }
    t.wv = Ql(), Ol(t, Nt), tt !== null && (tt.f & kt) !== 0 && (tt.f & (jt | lr)) === 0 && (Jt === null ? ph([t]) : Jt.push(t)), !n.is_fork && to.size > 0 && !Rl && oh();
  }
  return e;
}
function oh() {
  Rl = !1;
  for (const t of to)
    (t.f & kt) !== 0 && gt(t, la), di(t) && cn(t);
  to.clear();
}
function An(t, e = 1) {
  var a = r(t), n = e === 1 ? a++ : a--;
  return re(t, a), n;
}
function Xt(t) {
  re(t, t.v + 1);
}
function Ol(t, e) {
  var a = t.reactions;
  if (a !== null)
    for (var n = a.length, i = 0; i < n; i++) {
      var c = a[i], o = c.f, s = (o & Nt) === 0;
      if (s && gt(c, e), (o & Dt) !== 0) {
        var f = (
          /** @type {Derived} */
          c
        );
        Vt?.delete(f), (o & Cr) === 0 && (o & ea && (c.f |= Cr), Ol(f, la));
      } else s && ((o & $a) !== 0 && ga !== null && ga.add(
        /** @type {Effect} */
        c
      ), wa(
        /** @type {Effect} */
        c
      ));
    }
}
function bt(t) {
  if (typeof t != "object" || t === null || Fi in t)
    return t;
  const e = Oo(t);
  if (e !== gl && e !== v1)
    return t;
  var a = /* @__PURE__ */ new Map(), n = Ro(t), i = /* @__PURE__ */ Me(0), c = sa, o = (s) => {
    if (sa === c)
      return s();
    var f = et, d = sa;
    ra(null), zs(c);
    var h = s();
    return ra(f), zs(d), h;
  };
  return n && a.set("length", /* @__PURE__ */ Me(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(s, f, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && E1();
        var h = a.get(f);
        return h === void 0 ? o(() => {
          var b = /* @__PURE__ */ Me(d.value);
          return a.set(f, b), b;
        }) : re(h, d.value, !0), !0;
      },
      deleteProperty(s, f) {
        var d = a.get(f);
        if (d === void 0) {
          if (f in s) {
            const h = o(() => /* @__PURE__ */ Me(Et));
            a.set(f, h), Xt(i);
          }
        } else
          re(d, Et), Xt(i);
        return !0;
      },
      get(s, f, d) {
        if (f === Fi)
          return t;
        var h = a.get(f), b = f in s;
        if (h === void 0 && (!b || Xn(s, f)?.writable) && (h = o(() => {
          var p = bt(b ? s[f] : Et), g = /* @__PURE__ */ Me(p);
          return g;
        }), a.set(f, h)), h !== void 0) {
          var m = r(h);
          return m === Et ? void 0 : m;
        }
        return Reflect.get(s, f, d);
      },
      getOwnPropertyDescriptor(s, f) {
        var d = Reflect.getOwnPropertyDescriptor(s, f);
        if (d && "value" in d) {
          var h = a.get(f);
          h && (d.value = r(h));
        } else if (d === void 0) {
          var b = a.get(f), m = b?.v;
          if (b !== void 0 && m !== Et)
            return {
              enumerable: !0,
              configurable: !0,
              value: m,
              writable: !0
            };
        }
        return d;
      },
      has(s, f) {
        if (f === Fi)
          return !0;
        var d = a.get(f), h = d !== void 0 && d.v !== Et || Reflect.has(s, f);
        if (d !== void 0 || tt !== null && (!h || Xn(s, f)?.writable)) {
          d === void 0 && (d = o(() => {
            var m = h ? bt(s[f]) : Et, p = /* @__PURE__ */ Me(m);
            return p;
          }), a.set(f, d));
          var b = r(d);
          if (b === Et)
            return !1;
        }
        return h;
      },
      set(s, f, d, h) {
        var b = a.get(f), m = f in s;
        if (n && f === "length")
          for (var p = d; p < /** @type {Source<number>} */
          b.v; p += 1) {
            var g = a.get(p + "");
            g !== void 0 ? re(g, Et) : p in s && (g = o(() => /* @__PURE__ */ Me(Et)), a.set(p + "", g));
          }
        if (b === void 0)
          (!m || Xn(s, f)?.writable) && (b = o(() => /* @__PURE__ */ Me(void 0)), re(b, bt(d)), a.set(f, b));
        else {
          m = b.v !== Et;
          var v = o(() => bt(d));
          re(b, v);
        }
        var k = Reflect.getOwnPropertyDescriptor(s, f);
        if (k?.set && k.set.call(h, d), !m) {
          if (n && typeof f == "string") {
            var S = (
              /** @type {Source<number>} */
              a.get("length")
            ), N = Number(f);
            Number.isInteger(N) && N >= S.v && re(S, N + 1);
          }
          Xt(i);
        }
        return !0;
      },
      ownKeys(s) {
        r(i);
        var f = Reflect.ownKeys(s).filter((b) => {
          var m = a.get(b);
          return m === void 0 || m.v !== Et;
        });
        for (var [d, h] of a)
          h.v !== Et && !(d in s) && f.push(d);
        return f;
      },
      setPrototypeOf() {
        I1();
      }
    }
  );
}
var Fs, zl, Ul, Vl;
function sh() {
  if (Fs === void 0) {
    Fs = window, zl = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, a = Text.prototype;
    Ul = Xn(e, "firstChild").get, Vl = Xn(e, "nextSibling").get, Is(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Is(a) && (a.__t = void 0);
  }
}
function Xa(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Oa(t) {
  return (
    /** @type {TemplateNode | null} */
    Ul.call(t)
  );
}
// @__NO_SIDE_EFFECTS__
function si(t) {
  return (
    /** @type {TemplateNode | null} */
    Vl.call(t)
  );
}
function he(t, e) {
  return /* @__PURE__ */ Oa(t);
}
function ce(t, e = !1) {
  {
    var a = /* @__PURE__ */ Oa(t);
    return a instanceof Comment && a.data === "" ? /* @__PURE__ */ si(a) : a;
  }
}
function Q(t, e = 1, a = !1) {
  let n = t;
  for (; e--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ si(n);
  return n;
}
function fh(t) {
  t.textContent = "";
}
function Yl() {
  if (!da || ga !== null) return !1;
  var t = (
    /** @type {Effect} */
    tt.f
  );
  return (t & dr) !== 0;
}
function lh(t, e, a) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(pl, t, void 0)
  );
}
function fi(t) {
  var e = et, a = tt;
  ra(null), Pa(null);
  try {
    return t();
  } finally {
    ra(e), Pa(a);
  }
}
function Hl(t) {
  tt === null && (et === null && A1(), D1()), Pr && T1();
}
function dh(t, e) {
  var a = e.last;
  a === null ? e.last = e.first = t : (a.next = t, t.prev = a, e.last = t);
}
function ua(t, e) {
  var a = tt;
  a !== null && (a.f & Ot) !== 0 && (t |= Ot);
  var n = {
    ctx: Lt,
    deps: null,
    nodes: null,
    f: t | Nt | ea,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: a,
    b: a && a.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  }, i = n;
  if ((t & wn) !== 0)
    rn !== null ? rn.push(n) : wa(n);
  else if (e !== null) {
    try {
      cn(n);
    } catch (o) {
      throw zt(n), o;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & Ur) === 0 && (i = i.first, (t & $a) !== 0 && (t & Ar) !== 0 && i !== null && (i.f |= Ar));
  }
  if (i !== null && (i.parent = a, a !== null && dh(i, a), et !== null && (et.f & Dt) !== 0 && (t & lr) === 0)) {
    var c = (
      /** @type {Derived} */
      et
    );
    (c.effects ??= []).push(i);
  }
  return n;
}
function Bo() {
  return et !== null && !oa;
}
function Bl(t) {
  const e = ua(Dr, null);
  return gt(e, kt), e.teardown = t, e;
}
function ut(t) {
  Hl();
  var e = (
    /** @type {Effect} */
    tt.f
  ), a = !et && (e & jt) !== 0 && (e & dr) === 0;
  if (a) {
    var n = (
      /** @type {ComponentContext} */
      Lt
    );
    (n.e ??= []).push(t);
  } else
    return Wl(t);
}
function Wl(t) {
  return ua(wn | vl, t);
}
function Rs(t) {
  return Hl(), ua(Dr | vl, t);
}
function li(t) {
  Ga.ensure();
  const e = ua(lr | Ur, t);
  return () => {
    zt(e);
  };
}
function uh(t) {
  Ga.ensure();
  const e = ua(lr | Ur, t);
  return (a = {}) => new Promise((n) => {
    a.outro ? Sr(e, () => {
      zt(e), n(void 0);
    }) : (zt(e), n(void 0));
  });
}
function Wo(t) {
  return ua(wn, t);
}
function hh(t) {
  return ua(Uo | Ur, t);
}
function Go(t, e = 0) {
  return ua(Dr | e, t);
}
function Y(t, e = [], a = [], n = []) {
  K1(n, e, a, (i) => {
    ua(Dr, () => t(...i.map(r)));
  });
}
function Xo(t, e = 0) {
  var a = ua($a | e, t);
  return a;
}
function Qt(t) {
  return ua(jt | Ur, t);
}
function Gl(t) {
  var e = t.teardown;
  if (e !== null) {
    const a = Pr, n = et;
    Os(!0), ra(null);
    try {
      e.call(null);
    } finally {
      Os(a), ra(n);
    }
  }
}
function qo(t, e = !1) {
  var a = t.first;
  for (t.first = t.last = null; a !== null; ) {
    const i = a.ac;
    i !== null && fi(() => {
      i.abort(_r);
    });
    var n = a.next;
    (a.f & lr) !== 0 ? a.parent = null : zt(a, e), a = n;
  }
}
function bh(t) {
  for (var e = t.first; e !== null; ) {
    var a = e.next;
    (e.f & jt) === 0 && zt(e), e = a;
  }
}
function zt(t, e = !0) {
  var a = !1;
  (e || (t.f & x1) !== 0) && t.nodes !== null && t.nodes.end !== null && (mh(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), a = !0), qo(t, e && !a), Qn(t, 0), gt(t, Wa);
  var n = t.nodes && t.nodes.t;
  if (n !== null)
    for (const c of n)
      c.stop();
  Gl(t);
  var i = t.parent;
  i !== null && i.first !== null && Xl(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = null;
}
function mh(t, e) {
  for (; t !== null; ) {
    var a = t === e ? null : /* @__PURE__ */ si(t);
    t.remove(), t = a;
  }
}
function Xl(t) {
  var e = t.parent, a = t.prev, n = t.next;
  a !== null && (a.next = n), n !== null && (n.prev = a), e !== null && (e.first === t && (e.first = n), e.last === t && (e.last = a));
}
function Sr(t, e, a = !0) {
  var n = [];
  ql(t, n, !0);
  var i = () => {
    a && zt(t), e && e();
  }, c = n.length;
  if (c > 0) {
    var o = () => --c || i();
    for (var s of n)
      s.out(o);
  } else
    i();
}
function ql(t, e, a) {
  if ((t.f & Ot) === 0) {
    t.f ^= Ot;
    var n = t.nodes && t.nodes.t;
    if (n !== null)
      for (const s of n)
        (s.is_global || a) && e.push(s);
    for (var i = t.first; i !== null; ) {
      var c = i.next, o = (i.f & Ar) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & jt) !== 0 && (t.f & $a) !== 0;
      ql(i, e, o ? a : !1), i = c;
    }
  }
}
function jo(t) {
  jl(t, !0);
}
function jl(t, e) {
  if ((t.f & Ot) !== 0) {
    t.f ^= Ot, da && (t.f & jt) !== 0 && (t.f & kt) === 0 && (t.f ^= kt);
    for (var a = t.first; a !== null; ) {
      var n = a.next, i = (a.f & Ar) !== 0 || (a.f & jt) !== 0;
      jl(a, i ? e : !1), a = n;
    }
    var c = t.nodes && t.nodes.t;
    if (c !== null)
      for (const o of c)
        (o.is_global || e) && o.in();
  }
}
function Zo(t, e) {
  if (t.nodes)
    for (var a = t.nodes.start, n = t.nodes.end; a !== null; ) {
      var i = a === n ? null : /* @__PURE__ */ si(a);
      e.append(a), a = i;
    }
}
let Oi = !1, Pr = !1;
function Os(t) {
  Pr = t;
}
let et = null, oa = !1;
function ra(t) {
  et = t;
}
let tt = null;
function Pa(t) {
  tt = t;
}
let ta = null;
function Zl(t) {
  et !== null && (!da || (et.f & Dt) !== 0) && (ta === null ? ta = [t] : ta.push(t));
}
let Ht = null, Gt = 0, Jt = null;
function ph(t) {
  Jt = t;
}
let Jl = 1, xr = 0, sa = xr;
function zs(t) {
  sa = t;
}
function Ql() {
  return ++Jl;
}
function di(t) {
  var e = t.f;
  if ((e & Nt) !== 0)
    return !0;
  if (e & Dt && (t.f &= ~Cr), (e & la) !== 0) {
    for (var a = (
      /** @type {Value[]} */
      t.deps
    ), n = a.length, i = 0; i < n; i++) {
      var c = a[i];
      if (di(
        /** @type {Derived} */
        c
      ) && Ll(
        /** @type {Derived} */
        c
      ), c.wv > t.wv)
        return !0;
    }
    (e & ea) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Vt === null && gt(t, kt);
  }
  return !1;
}
function Kl(t, e, a = !0) {
  var n = t.reactions;
  if (n !== null && !(!da && ta !== null && tn.call(ta, t)))
    for (var i = 0; i < n.length; i++) {
      var c = n[i];
      (c.f & Dt) !== 0 ? Kl(
        /** @type {Derived} */
        c,
        e,
        !1
      ) : e === c && (a ? gt(c, Nt) : (c.f & kt) !== 0 && gt(c, la), wa(
        /** @type {Effect} */
        c
      ));
    }
}
function $l(t) {
  var e = Ht, a = Gt, n = Jt, i = et, c = ta, o = Lt, s = oa, f = sa, d = t.f;
  Ht = /** @type {null | Value[]} */
  null, Gt = 0, Jt = null, et = (d & (jt | lr)) === 0 ? t : null, ta = null, an(t.ctx), oa = !1, sa = ++xr, t.ac !== null && (fi(() => {
    t.ac.abort(_r);
  }), t.ac = null);
  try {
    t.f |= $c;
    var h = (
      /** @type {Function} */
      t.fn
    ), b = h();
    t.f |= dr;
    var m = t.deps, p = lt?.is_fork;
    if (Ht !== null) {
      var g;
      if (p || Qn(t, Gt), m !== null && Gt > 0)
        for (m.length = Gt + Ht.length, g = 0; g < Ht.length; g++)
          m[Gt + g] = Ht[g];
      else
        t.deps = m = Ht;
      if (Bo() && (t.f & ea) !== 0)
        for (g = Gt; g < m.length; g++)
          (m[g].reactions ??= []).push(t);
    } else !p && m !== null && Gt < m.length && (Qn(t, Gt), m.length = Gt);
    if (Sl() && Jt !== null && !oa && m !== null && (t.f & (Dt | la | Nt)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      Jt.length; g++)
        Kl(
          Jt[g],
          /** @type {Effect} */
          t
        );
    if (i !== null && i !== t) {
      if (xr++, i.deps !== null)
        for (let v = 0; v < a; v += 1)
          i.deps[v].rv = xr;
      if (e !== null)
        for (const v of e)
          v.rv = xr;
      Jt !== null && (n === null ? n = Jt : n.push(.../** @type {Source[]} */
      Jt));
    }
    return (t.f & cr) !== 0 && (t.f ^= cr), b;
  } catch (v) {
    return Dl(v);
  } finally {
    t.f ^= $c, Ht = e, Gt = a, Jt = n, et = i, ta = c, an(o), oa = s, sa = f;
  }
}
function gh(t, e) {
  let a = e.reactions;
  if (a !== null) {
    var n = p1.call(a, t);
    if (n !== -1) {
      var i = a.length - 1;
      i === 0 ? a = e.reactions = null : (a[n] = a[i], a.pop());
    }
  }
  if (a === null && (e.f & Dt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ht === null || !tn.call(Ht, e))) {
    var c = (
      /** @type {Derived} */
      e
    );
    (c.f & ea) !== 0 && (c.f ^= ea, c.f &= ~Cr), Vo(c), ih(c), Qn(c, 0);
  }
}
function Qn(t, e) {
  var a = t.deps;
  if (a !== null)
    for (var n = e; n < a.length; n++)
      gh(t, a[n]);
}
function cn(t) {
  var e = t.f;
  if ((e & Wa) === 0) {
    gt(t, kt);
    var a = tt, n = Oi;
    tt = t, Oi = !0;
    try {
      (e & ($a | zo)) !== 0 ? bh(t) : qo(t), Gl(t);
      var i = $l(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = Jl;
      var c;
      Qc && O1 && (t.f & Nt) !== 0 && t.deps;
    } finally {
      Oi = n, tt = a;
    }
  }
}
async function Us() {
  if (da)
    return new Promise((t) => {
      requestAnimationFrame(() => t()), setTimeout(() => t());
    });
  await Promise.resolve(), X1();
}
function r(t) {
  var e = t.f, a = (e & Dt) !== 0;
  if (et !== null && !oa) {
    var n = tt !== null && (tt.f & Wa) !== 0;
    if (!n && (ta === null || !tn.call(ta, t))) {
      var i = et.deps;
      if ((et.f & $c) !== 0)
        t.rv < xr && (t.rv = xr, Ht === null && i !== null && i[Gt] === t ? Gt++ : Ht === null ? Ht = [t] : Ht.push(t));
      else {
        (et.deps ??= []).push(t);
        var c = t.reactions;
        c === null ? t.reactions = [et] : tn.call(c, et) || c.push(et);
      }
    }
  }
  if (Pr && or.has(t))
    return or.get(t);
  if (a) {
    var o = (
      /** @type {Derived} */
      t
    );
    if (Pr) {
      var s = o.v;
      return ((o.f & kt) === 0 && o.reactions !== null || td(o)) && (s = Ho(o)), or.set(o, s), s;
    }
    var f = (o.f & ea) === 0 && !oa && et !== null && (Oi || (et.f & ea) !== 0), d = (o.f & dr) === 0;
    di(o) && (f && (o.f |= ea), Ll(o)), f && !d && (Fl(o), ed(o));
  }
  if (Vt?.has(t))
    return Vt.get(t);
  if ((t.f & cr) !== 0)
    throw t.v;
  return t.v;
}
function ed(t) {
  if (t.f |= ea, t.deps !== null)
    for (const e of t.deps)
      (e.reactions ??= []).push(t), (e.f & Dt) !== 0 && (e.f & ea) === 0 && (Fl(
        /** @type {Derived} */
        e
      ), ed(
        /** @type {Derived} */
        e
      ));
}
function td(t) {
  if (t.v === Et) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (or.has(e) || (e.f & Dt) !== 0 && td(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function dt(t) {
  var e = oa;
  try {
    return oa = !0, t();
  } finally {
    oa = e;
  }
}
const zn = Symbol("events"), ad = /* @__PURE__ */ new Set(), ao = /* @__PURE__ */ new Set();
function yh(t, e, a, n = {}) {
  function i(c) {
    if (n.capture || ro.call(e, c), !c.cancelBubble)
      return fi(() => a?.call(this, c));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? Ta(() => {
    e.addEventListener(t, i, n);
  }) : e.addEventListener(t, i, n), i;
}
function xa(t, e, a, n, i) {
  var c = { capture: n, passive: i }, o = yh(t, e, a, c);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Bl(() => {
    e.removeEventListener(t, o, c);
  });
}
function Ft(t, e, a) {
  (e[zn] ??= {})[t] = a;
}
function ur(t) {
  for (var e = 0; e < t.length; e++)
    ad.add(t[e]);
  for (var a of ao)
    a(t);
}
let Vs = null;
function ro(t) {
  var e = this, a = (
    /** @type {Node} */
    e.ownerDocument
  ), n = t.type, i = t.composedPath?.() || [], c = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  Vs = t;
  var o = 0, s = Vs === t && t[zn];
  if (s) {
    var f = i.indexOf(s);
    if (f !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t[zn] = e;
      return;
    }
    var d = i.indexOf(e);
    if (d === -1)
      return;
    f <= d && (o = f);
  }
  if (c = /** @type {Element} */
  i[o] || t.target, c !== e) {
    g1(t, "currentTarget", {
      configurable: !0,
      get() {
        return c || a;
      }
    });
    var h = et, b = tt;
    ra(null), Pa(null);
    try {
      for (var m, p = []; c !== null; ) {
        var g = c.assignedSlot || c.parentNode || /** @type {any} */
        c.host || null;
        try {
          var v = c[zn]?.[n];
          v != null && (!/** @type {any} */
          c.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === c) && v.call(c, t);
        } catch (k) {
          m ? p.push(k) : m = k;
        }
        if (t.cancelBubble || g === e || g === null)
          break;
        c = g;
      }
      if (m) {
        for (let k of p)
          queueMicrotask(() => {
            throw k;
          });
        throw m;
      }
    } finally {
      t[zn] = e, delete t.currentTarget, ra(h), Pa(b);
    }
  }
}
const vh = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (t) => t
  })
);
function _h(t) {
  return (
    /** @type {string} */
    vh?.createHTML(t) ?? t
  );
}
function rd(t) {
  var e = lh("template");
  return e.innerHTML = _h(t.replaceAll("<!>", "<!---->")), e.content;
}
function on(t, e) {
  var a = (
    /** @type {Effect} */
    tt
  );
  a.nodes === null && (a.nodes = { start: t, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function ha(t, e) {
  var a = (e & 1) !== 0, n = (e & 2) !== 0, i, c = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = rd(c ? t : "<!>" + t), a || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ Oa(i)));
    var o = (
      /** @type {TemplateNode} */
      n || zl ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (a) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Oa(o)
      ), f = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      on(s, f);
    } else
      on(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function wh(t, e, a = "svg") {
  var n = !t.startsWith("<!>"), i = (e & 1) !== 0, c = `<${a}>${n ? t : "<!>" + t}</${a}>`, o;
  return () => {
    if (!o) {
      var s = (
        /** @type {DocumentFragment} */
        rd(c)
      ), f = (
        /** @type {Element} */
        /* @__PURE__ */ Oa(s)
      );
      if (i)
        for (o = document.createDocumentFragment(); /* @__PURE__ */ Oa(f); )
          o.appendChild(
            /** @type {TemplateNode} */
            /* @__PURE__ */ Oa(f)
          );
      else
        o = /** @type {Element} */
        /* @__PURE__ */ Oa(f);
    }
    var d = (
      /** @type {TemplateNode} */
      o.cloneNode(!0)
    );
    if (i) {
      var h = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Oa(d)
      ), b = (
        /** @type {TemplateNode} */
        d.lastChild
      );
      on(h, b);
    } else
      on(d, d);
    return d;
  };
}
// @__NO_SIDE_EFFECTS__
function U(t, e) {
  return /* @__PURE__ */ wh(t, e, "svg");
}
function Un(t = "") {
  {
    var e = Xa(t + "");
    return on(e, e), e;
  }
}
function qe() {
  var t = document.createDocumentFragment(), e = document.createComment(""), a = Xa();
  return t.append(e, a), on(e, a), t;
}
function T(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
const xh = ["touchstart", "touchmove"];
function kh(t) {
  return xh.includes(t);
}
let no = !0;
function Ke(t, e) {
  var a = e == null ? "" : typeof e == "object" ? `${e}` : e;
  a !== (t.__t ??= t.nodeValue) && (t.__t = a, t.nodeValue = `${a}`);
}
function nd(t, e) {
  return Sh(t, e);
}
const pi = /* @__PURE__ */ new Map();
function Sh(t, { target: e, anchor: a, props: n = {}, events: i, context: c, intro: o = !0, transformError: s }) {
  sh();
  var f = void 0, d = uh(() => {
    var h = a ?? e.appendChild(Xa());
    J1(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (p) => {
        it({});
        var g = (
          /** @type {ComponentContext} */
          Lt
        );
        c && (g.c = c), i && (n.$$events = i), no = o, f = t(p, n) || {}, no = !0, ct();
      },
      s
    );
    var b = /* @__PURE__ */ new Set(), m = (p) => {
      for (var g = 0; g < p.length; g++) {
        var v = p[g];
        if (!b.has(v)) {
          b.add(v);
          var k = kh(v);
          for (const I of [e, document]) {
            var S = pi.get(I);
            S === void 0 && (S = /* @__PURE__ */ new Map(), pi.set(I, S));
            var N = S.get(v);
            N === void 0 ? (I.addEventListener(v, ro, { passive: k }), S.set(v, 1)) : S.set(v, N + 1);
          }
        }
      }
    };
    return m(mc(ad)), ao.add(m), () => {
      for (var p of b)
        for (const k of [e, document]) {
          var g = (
            /** @type {Map<string, number>} */
            pi.get(k)
          ), v = (
            /** @type {number} */
            g.get(p)
          );
          --v == 0 ? (k.removeEventListener(p, ro), g.delete(p), g.size === 0 && pi.delete(k)) : g.set(p, v);
        }
      ao.delete(m), h !== a && h.parentNode?.removeChild(h);
    };
  });
  return io.set(f, d), f;
}
let io = /* @__PURE__ */ new WeakMap();
function id(t, e) {
  const a = io.get(t);
  return a ? (io.delete(t), a(e)) : Promise.resolve();
}
class Mh {
  /** @type {TemplateNode} */
  anchor;
  /** @type {Map<Batch, Key>} */
  #e = /* @__PURE__ */ new Map();
  /**
   * Map of keys to effects that are currently rendered in the DOM.
   * These effects are visible and actively part of the document tree.
   * Example:
   * ```
   * {#if condition}
   * 	foo
   * {:else}
   * 	bar
   * {/if}
   * ```
   * Can result in the entries `true->Effect` and `false->Effect`
   * @type {Map<Key, Effect>}
   */
  #a = /* @__PURE__ */ new Map();
  /**
   * Similar to #onscreen with respect to the keys, but contains branches that are not yet
   * in the DOM, because their insertion is deferred.
   * @type {Map<Key, Branch>}
   */
  #t = /* @__PURE__ */ new Map();
  /**
   * Keys of effects that are currently outroing
   * @type {Set<Key>}
   */
  #r = /* @__PURE__ */ new Set();
  /**
   * Whether to pause (i.e. outro) on change, or destroy immediately.
   * This is necessary for `<svelte:element>`
   */
  #n = !0;
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, a = !0) {
    this.anchor = e, this.#n = a;
  }
  /**
   * @param {Batch} batch
   */
  #c = (e) => {
    if (this.#e.has(e)) {
      var a = (
        /** @type {Key} */
        this.#e.get(e)
      ), n = this.#a.get(a);
      if (n)
        jo(n), this.#r.delete(a);
      else {
        var i = this.#t.get(a);
        i && (i.effect.f & Ot) === 0 && (this.#a.set(a, i.effect), this.#t.delete(a), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
      }
      for (const [c, o] of this.#e) {
        if (this.#e.delete(c), c === e)
          break;
        const s = this.#t.get(o);
        s && (zt(s.effect), this.#t.delete(o));
      }
      for (const [c, o] of this.#a) {
        if (c === a || this.#r.has(c) || (o.f & Ot) !== 0) continue;
        const s = () => {
          if (Array.from(this.#e.values()).includes(c)) {
            var d = document.createDocumentFragment();
            Zo(o, d), d.append(Xa()), this.#t.set(c, { effect: o, fragment: d });
          } else
            zt(o);
          this.#r.delete(c), this.#a.delete(c);
        };
        this.#n || !n ? (this.#r.add(c), Sr(o, s, !1)) : s();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #i = (e) => {
    this.#e.delete(e);
    const a = Array.from(this.#e.values());
    for (const [n, i] of this.#t)
      a.includes(n) || (zt(i.effect), this.#t.delete(n));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, a) {
    var n = (
      /** @type {Batch} */
      lt
    ), i = Yl();
    if (a && !this.#a.has(e) && !this.#t.has(e))
      if (i) {
        var c = document.createDocumentFragment(), o = Xa();
        c.append(o), this.#t.set(e, {
          effect: Qt(() => a(o)),
          fragment: c
        });
      } else
        this.#a.set(
          e,
          Qt(() => a(this.anchor))
        );
    if (this.#e.set(n, e), i) {
      for (const [s, f] of this.#a)
        s === e ? n.unskip_effect(f) : n.skip_effect(f);
      for (const [s, f] of this.#t)
        s === e ? n.unskip_effect(f.effect) : n.skip_effect(f.effect);
      n.oncommit(this.#c), n.ondiscard(this.#i);
    } else
      this.#c(n);
  }
}
function xn(t) {
  Lt === null && _l(), ut(() => {
    const e = dt(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function we(t, e, a = !1) {
  var n = new Mh(t), i = a ? Ar : 0;
  function c(o, s) {
    n.ensure(o, s);
  }
  Xo(() => {
    var o = !1;
    e((s, f = 0) => {
      o = !0, c(f, s);
    }), o || c(-1, null);
  }, i);
}
function Xi(t, e) {
  return e;
}
function Th(t, e, a) {
  for (var n = [], i = e.length, c, o = e.length, s = 0; s < i; s++) {
    let b = e[s];
    Sr(
      b,
      () => {
        if (c) {
          if (c.pending.delete(b), c.done.add(b), c.pending.size === 0) {
            var m = (
              /** @type {Set<EachOutroGroup>} */
              t.outrogroups
            );
            co(t, mc(c.done)), m.delete(c), m.size === 0 && (t.outrogroups = null);
          }
        } else
          o -= 1;
      },
      !1
    );
  }
  if (o === 0) {
    var f = n.length === 0 && a !== null;
    if (f) {
      var d = (
        /** @type {Element} */
        a
      ), h = (
        /** @type {Element} */
        d.parentNode
      );
      fh(h), h.append(d), t.items.clear();
    }
    co(t, e, !f);
  } else
    c = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (t.outrogroups ??= /* @__PURE__ */ new Set()).add(c);
}
function co(t, e, a = !0) {
  var n;
  if (t.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const o of t.pending.values())
      for (const s of o)
        n.add(
          /** @type {EachItem} */
          t.items.get(s).e
        );
  }
  for (var i = 0; i < e.length; i++) {
    var c = e[i];
    if (n?.has(c)) {
      c.f |= _a;
      const o = document.createDocumentFragment();
      Zo(c, o);
    } else
      zt(e[i], a);
  }
}
var Ys;
function Xe(t, e, a, n, i, c = null) {
  var o = t, s = /* @__PURE__ */ new Map(), f = (e & 4) !== 0;
  if (f) {
    var d = (
      /** @type {Element} */
      t
    );
    o = d.appendChild(Xa());
  }
  var h = null, b = /* @__PURE__ */ ah(() => {
    var I = a();
    return Ro(I) ? I : I == null ? [] : mc(I);
  }), m, p = /* @__PURE__ */ new Map(), g = !0;
  function v(I) {
    (N.effect.f & Wa) === 0 && (N.pending.delete(I), N.fallback = h, Dh(N, m, o, e, n), h !== null && (m.length === 0 ? (h.f & _a) === 0 ? jo(h) : (h.f ^= _a, Vn(h, null, o)) : Sr(h, () => {
      h = null;
    })));
  }
  function k(I) {
    N.pending.delete(I);
  }
  var S = Xo(() => {
    m = /** @type {V[]} */
    r(b);
    for (var I = m.length, x = /* @__PURE__ */ new Set(), w = (
      /** @type {Batch} */
      lt
    ), y = Yl(), H = 0; H < I; H += 1) {
      var B = m[H], V = n(B, H), X = g ? null : s.get(V);
      X ? (X.v && nn(X.v, B), X.i && nn(X.i, H), y && w.unskip_effect(X.e)) : (X = Ah(
        s,
        g ? o : Ys ??= Xa(),
        B,
        V,
        H,
        i,
        e,
        a
      ), g || (X.e.f |= _a), s.set(V, X)), x.add(V);
    }
    if (I === 0 && c && !h && (g ? h = Qt(() => c(o)) : (h = Qt(() => c(Ys ??= Xa())), h.f |= _a)), I > x.size && M1(), !g)
      if (p.set(w, x), y) {
        for (const [G, q] of s)
          x.has(G) || w.skip_effect(q.e);
        w.oncommit(v), w.ondiscard(k);
      } else
        v(w);
    r(b);
  }), N = { effect: S, items: s, pending: p, outrogroups: null, fallback: h };
  g = !1;
}
function Cn(t) {
  for (; t !== null && (t.f & jt) === 0; )
    t = t.next;
  return t;
}
function Dh(t, e, a, n, i) {
  var c = (n & 8) !== 0, o = e.length, s = t.items, f = Cn(t.effect.first), d, h = null, b, m = [], p = [], g, v, k, S;
  if (c)
    for (S = 0; S < o; S += 1)
      g = e[S], v = i(g, S), k = /** @type {EachItem} */
      s.get(v).e, (k.f & _a) === 0 && (k.nodes?.a?.measure(), (b ??= /* @__PURE__ */ new Set()).add(k));
  for (S = 0; S < o; S += 1) {
    if (g = e[S], v = i(g, S), k = /** @type {EachItem} */
    s.get(v).e, t.outrogroups !== null)
      for (const X of t.outrogroups)
        X.pending.delete(k), X.done.delete(k);
    if ((k.f & _a) !== 0)
      if (k.f ^= _a, k === f)
        Vn(k, null, a);
      else {
        var N = h ? h.next : f;
        k === t.effect.last && (t.effect.last = k.prev), k.prev && (k.prev.next = k.next), k.next && (k.next.prev = k.prev), tr(t, h, k), tr(t, k, N), Vn(k, N, a), h = k, m = [], p = [], f = Cn(h.next);
        continue;
      }
    if ((k.f & Ot) !== 0 && (jo(k), c && (k.nodes?.a?.unfix(), (b ??= /* @__PURE__ */ new Set()).delete(k))), k !== f) {
      if (d !== void 0 && d.has(k)) {
        if (m.length < p.length) {
          var I = p[0], x;
          h = I.prev;
          var w = m[0], y = m[m.length - 1];
          for (x = 0; x < m.length; x += 1)
            Vn(m[x], I, a);
          for (x = 0; x < p.length; x += 1)
            d.delete(p[x]);
          tr(t, w.prev, y.next), tr(t, h, w), tr(t, y, I), f = I, h = y, S -= 1, m = [], p = [];
        } else
          d.delete(k), Vn(k, f, a), tr(t, k.prev, k.next), tr(t, k, h === null ? t.effect.first : h.next), tr(t, h, k), h = k;
        continue;
      }
      for (m = [], p = []; f !== null && f !== k; )
        (d ??= /* @__PURE__ */ new Set()).add(f), p.push(f), f = Cn(f.next);
      if (f === null)
        continue;
    }
    (k.f & _a) === 0 && m.push(k), h = k, f = Cn(k.next);
  }
  if (t.outrogroups !== null) {
    for (const X of t.outrogroups)
      X.pending.size === 0 && (co(t, mc(X.done)), t.outrogroups?.delete(X));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (f !== null || d !== void 0) {
    var H = [];
    if (d !== void 0)
      for (k of d)
        (k.f & Ot) === 0 && H.push(k);
    for (; f !== null; )
      (f.f & Ot) === 0 && f !== t.fallback && H.push(f), f = Cn(f.next);
    var B = H.length;
    if (B > 0) {
      var V = (n & 4) !== 0 && o === 0 ? a : null;
      if (c) {
        for (S = 0; S < B; S += 1)
          H[S].nodes?.a?.measure();
        for (S = 0; S < B; S += 1)
          H[S].nodes?.a?.fix();
      }
      Th(t, H, V);
    }
  }
  c && Ta(() => {
    if (b !== void 0)
      for (k of b)
        k.nodes?.a?.apply();
  });
}
function Ah(t, e, a, n, i, c, o, s) {
  var f = (o & 1) !== 0 ? (o & 16) === 0 ? /* @__PURE__ */ ch(a, !1, !1) : Za(a) : null, d = (o & 2) !== 0 ? Za(i) : null;
  return {
    v: f,
    i: d,
    e: Qt(() => (c(e, f ?? a, d ?? i, s), () => {
      t.delete(n);
    }))
  };
}
function Vn(t, e, a) {
  if (t.nodes)
    for (var n = t.nodes.start, i = t.nodes.end, c = e && (e.f & _a) === 0 ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : a; n !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ si(n)
      );
      if (c.before(n), n === i)
        return;
      n = o;
    }
}
function tr(t, e, a) {
  e === null ? t.effect.first = a : e.next = a, a === null ? t.effect.last = e : a.prev = e;
}
const Ch = () => performance.now(), va = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => Ch(),
  tasks: /* @__PURE__ */ new Set()
};
function cd() {
  const t = va.now();
  va.tasks.forEach((e) => {
    e.c(t) || (va.tasks.delete(e), e.f());
  }), va.tasks.size !== 0 && va.tick(cd);
}
function od(t) {
  let e;
  return va.tasks.size === 0 && va.tick(cd), {
    promise: new Promise((a) => {
      va.tasks.add(e = { c: t, f: a });
    }),
    abort() {
      va.tasks.delete(e);
    }
  };
}
function qi(t, e) {
  fi(() => {
    t.dispatchEvent(new CustomEvent(e));
  });
}
function Ph(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (a) => a[0].toUpperCase() + a.slice(1)
  ).join("");
}
function Hs(t) {
  const e = {}, a = t.split(";");
  for (const n of a) {
    const [i, c] = n.split(":");
    if (!i || c === void 0) break;
    const o = Ph(i.trim());
    e[o] = c.trim();
  }
  return e;
}
const Eh = (t) => t;
function Er(t, e, a, n) {
  var i = (t & 1) !== 0, c = (t & 2) !== 0, o = i && c, s = (t & 4) !== 0, f = o ? "both" : i ? "in" : "out", d, h = e.inert, b = e.style.overflow, m, p;
  function g() {
    return fi(() => d ??= a()(e, n?.() ?? /** @type {P} */
    {}, {
      direction: f
    }));
  }
  var v = {
    is_global: s,
    in() {
      if (e.inert = h, !i) {
        p?.abort(), p?.reset?.();
        return;
      }
      c || m?.abort(), m = oo(e, g(), p, 1, () => {
        qi(e, "introend"), m?.abort(), m = d = void 0, e.style.overflow = b;
      });
    },
    out(I) {
      if (!c) {
        I?.(), d = void 0;
        return;
      }
      e.inert = !0, p = oo(e, g(), m, 0, () => {
        qi(e, "outroend"), I?.();
      });
    },
    stop: () => {
      m?.abort(), p?.abort();
    }
  }, k = (
    /** @type {Effect & { nodes: EffectNodes }} */
    tt
  );
  if ((k.nodes.t ??= []).push(v), i && no) {
    var S = s;
    if (!S) {
      for (var N = (
        /** @type {Effect | null} */
        k.parent
      ); N && (N.f & Ar) !== 0; )
        for (; (N = N.parent) && (N.f & $a) === 0; )
          ;
      S = !N || (N.f & dr) !== 0;
    }
    S && Wo(() => {
      dt(() => v.in());
    });
  }
}
function oo(t, e, a, n, i) {
  var c = n === 1;
  if (_1(e)) {
    var o, s = !1;
    return Ta(() => {
      if (!s) {
        var k = e({ direction: c ? "in" : "out" });
        o = oo(t, k, a, n, i);
      }
    }), {
      abort: () => {
        s = !0, o?.abort();
      },
      deactivate: () => o.deactivate(),
      reset: () => o.reset(),
      t: () => o.t()
    };
  }
  if (a?.deactivate(), !e?.duration && !e?.delay)
    return qi(t, c ? "introstart" : "outrostart"), i(), {
      abort: Zr,
      deactivate: Zr,
      reset: Zr,
      t: () => n
    };
  const { delay: f = 0, css: d, tick: h, easing: b = Eh } = e;
  var m = [];
  if (c && a === void 0 && (h && h(0, 1), d)) {
    var p = Hs(d(0, 1));
    m.push(p, p);
  }
  var g = () => 1 - n, v = t.animate(m, { duration: f, fill: "forwards" });
  return v.onfinish = () => {
    v.cancel(), qi(t, c ? "introstart" : "outrostart");
    var k = a?.t() ?? 1 - n;
    a?.abort();
    var S = n - k, N = (
      /** @type {number} */
      e.duration * Math.abs(S)
    ), I = [];
    if (N > 0) {
      var x = !1;
      if (d)
        for (var w = Math.ceil(N / 16.666666666666668), y = 0; y <= w; y += 1) {
          var H = k + S * b(y / w), B = Hs(d(H, 1 - H));
          I.push(B), x ||= B.overflow === "hidden";
        }
      x && (t.style.overflow = "hidden"), g = () => {
        var V = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          v.currentTime
        );
        return k + S * b(V / N);
      }, h && od(() => {
        if (v.playState !== "running") return !1;
        var V = g();
        return h(V, 1 - V), !0;
      });
    }
    v = t.animate(I, { duration: N, fill: "forwards" }), v.onfinish = () => {
      g = () => n, h?.(n, 1 - n), i();
    };
  }, {
    abort: () => {
      v && (v.cancel(), v.effect = null, v.onfinish = Zr);
    },
    deactivate: () => {
      i = Zr;
    },
    reset: () => {
      n === 0 && h?.(1, 0);
    },
    t: () => g()
  };
}
function sd(t) {
  var e, a, n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (a = sd(t[e])) && (n && (n += " "), n += a);
  } else for (a in t) t[a] && (n && (n += " "), n += a);
  return n;
}
function Ih() {
  for (var t, e, a = 0, n = "", i = arguments.length; a < i; a++) (t = arguments[a]) && (e = sd(t)) && (n && (n += " "), n += e);
  return n;
}
function Nh(t) {
  return typeof t == "object" ? Ih(t) : t ?? "";
}
const Bs = [...` 	
\r\f \v\uFEFF`];
function Lh(t, e, a) {
  var n = t == null ? "" : "" + t;
  if (e && (n = n ? n + " " + e : e), a) {
    for (var i of Object.keys(a))
      if (a[i])
        n = n ? n + " " + i : i;
      else if (n.length)
        for (var c = i.length, o = 0; (o = n.indexOf(i, o)) >= 0; ) {
          var s = o + c;
          (o === 0 || Bs.includes(n[o - 1])) && (s === n.length || Bs.includes(n[s])) ? n = (o === 0 ? "" : n.substring(0, o)) + n.substring(s + 1) : o = s;
        }
  }
  return n === "" ? null : n;
}
function Ws(t, e = !1) {
  var a = e ? " !important;" : ";", n = "";
  for (var i of Object.keys(t)) {
    var c = t[i];
    c != null && c !== "" && (n += " " + i + ": " + c + a);
  }
  return n;
}
function Cc(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function Fh(t, e) {
  if (e) {
    var a = "", n, i;
    if (Array.isArray(e) ? (n = e[0], i = e[1]) : n = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var c = !1, o = 0, s = !1, f = [];
      n && f.push(...Object.keys(n).map(Cc)), i && f.push(...Object.keys(i).map(Cc));
      var d = 0, h = -1;
      const v = t.length;
      for (var b = 0; b < v; b++) {
        var m = t[b];
        if (s ? m === "/" && t[b - 1] === "*" && (s = !1) : c ? c === m && (c = !1) : m === "/" && t[b + 1] === "*" ? s = !0 : m === '"' || m === "'" ? c = m : m === "(" ? o++ : m === ")" && o--, !s && c === !1 && o === 0) {
          if (m === ":" && h === -1)
            h = b;
          else if (m === ";" || b === v - 1) {
            if (h !== -1) {
              var p = Cc(t.substring(d, h).trim());
              if (!f.includes(p)) {
                m !== ";" && b++;
                var g = t.substring(d, b).trim();
                a += " " + g + ";";
              }
            }
            d = b + 1, h = -1;
          }
        }
      }
    }
    return n && (a += Ws(n)), i && (a += Ws(i, !0)), a = a.trim(), a === "" ? null : a;
  }
  return t == null ? null : String(t);
}
function kn(t, e, a, n, i, c) {
  var o = t.__className;
  if (o !== a || o === void 0) {
    var s = Lh(a, n, c);
    s == null ? t.removeAttribute("class") : e ? t.className = s : t.setAttribute("class", s), t.__className = a;
  } else if (c && i !== c)
    for (var f in c) {
      var d = !!c[f];
      (i == null || d !== !!i[f]) && t.classList.toggle(f, d);
    }
  return c;
}
function Pc(t, e = {}, a, n) {
  for (var i in a) {
    var c = a[i];
    e[i] !== c && (a[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, c, n));
  }
}
function ft(t, e, a, n) {
  var i = t.__style;
  if (i !== e) {
    var c = Fh(e, n);
    c == null ? t.removeAttribute("style") : t.style.cssText = c, t.__style = e;
  } else n && (Array.isArray(n) ? (Pc(t, a?.[0], n[0]), Pc(t, a?.[1], n[1], "important")) : Pc(t, a, n));
  return n;
}
const Rh = Symbol("is custom element"), Oh = Symbol("is html");
function l(t, e, a, n) {
  var i = zh(t);
  i[e] !== (i[e] = a) && (e === "loading" && (t[k1] = a), a == null ? t.removeAttribute(e) : typeof a != "string" && Uh(t).includes(e) ? t[e] = a : t.setAttribute(e, a));
}
function zh(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ??= {
      [Rh]: t.nodeName.includes("-"),
      [Oh]: t.namespaceURI === pl
    }
  );
}
var Gs = /* @__PURE__ */ new Map();
function Uh(t) {
  var e = t.getAttribute("is") || t.nodeName, a = Gs.get(e);
  if (a) return a;
  Gs.set(e, a = []);
  for (var n, i = t, c = Element.prototype; c !== i; ) {
    n = y1(i);
    for (var o in n)
      n[o].set && a.push(o);
    i = Oo(i);
  }
  return a;
}
class Jo {
  /** */
  #e = /* @__PURE__ */ new WeakMap();
  /** @type {ResizeObserver | undefined} */
  #a;
  /** @type {ResizeObserverOptions} */
  #t;
  /** @static */
  static entries = /* @__PURE__ */ new WeakMap();
  /** @param {ResizeObserverOptions} options */
  constructor(e) {
    this.#t = e;
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(e, a) {
    var n = this.#e.get(e) || /* @__PURE__ */ new Set();
    return n.add(a), this.#e.set(e, n), this.#r().observe(e, this.#t), () => {
      var i = this.#e.get(e);
      i.delete(a), i.size === 0 && (this.#e.delete(e), this.#a.unobserve(e));
    };
  }
  #r() {
    return this.#a ?? (this.#a = new ResizeObserver(
      /** @param {any} entries */
      (e) => {
        for (var a of e) {
          Jo.entries.set(a.target, a);
          for (var n of this.#e.get(a.target) || [])
            n(a);
        }
      }
    ));
  }
}
var Vh = /* @__PURE__ */ new Jo({
  box: "border-box"
});
function Xs(t, e, a) {
  var n = Vh.observe(t, () => a(t[e]));
  Wo(() => (dt(() => a(t[e])), n));
}
function qs(t, e) {
  return t === e || t?.[Fi] === e;
}
function Da(t = {}, e, a, n) {
  return Wo(() => {
    var i, c;
    return Go(() => {
      i = c, c = [], dt(() => {
        t !== a(...c) && (e(t, ...c), i && qs(a(...i), t) && e(null, ...i));
      });
    }), () => {
      Ta(() => {
        c && qs(a(...c), t) && e(null, ...c);
      });
    };
  }), t;
}
function Tt(t, e, a, n) {
  var i = (
    /** @type {V} */
    n
  ), c = !0, o = () => (c && (c = !1, i = /** @type {V} */
  n), i), s;
  s = /** @type {V} */
  t[e], s === void 0 && n !== void 0 && (s = o());
  var f;
  return f = () => {
    var d = (
      /** @type {V} */
      t[e]
    );
    return d === void 0 ? o() : (c = !0, d);
  }, f;
}
function fd(t, e, a) {
  try {
    const n = localStorage.getItem(t);
    if (n) {
      const i = JSON.parse(n);
      return e(i);
    }
    return null;
  } catch (n) {
    return console.warn(`[${a}] Failed to load from localStorage:`, n), null;
  }
}
function ld(t, e, a) {
  try {
    localStorage.setItem(t, JSON.stringify(e));
  } catch (n) {
    console.warn(`[${a}] Failed to save to localStorage:`, n);
  }
}
const js = "timeline_viewer_remote_catalogs", Zs = "RemoteCatalogConfig";
class Yh {
  /** Remote catalog configurations */
  #e = /* @__PURE__ */ Me(bt([]));
  /** Whether configs have been loaded from storage */
  #a = !1;
  // --- Public accessors ---
  /** All remote catalog configurations */
  get configs() {
    return r(this.#e);
  }
  /** Enabled remote catalog configurations */
  get enabledConfigs() {
    return r(this.#e).filter((e) => e.enabled);
  }
  // --- Initialization ---
  /**
   * Load remote catalog configs from LocalStorage and URL parameters.
   * Should be called during app initialization.
   */
  load() {
    this.#a || (this.#t(), this.#r(), this.#a = !0);
  }
  #t() {
    const e = fd(js, (a) => Array.isArray(a) ? a : null, Zs);
    e && re(this.#e, e, !0);
  }
  /**
   * Load configs from URL parameters
   */
  #r() {
    if (typeof window > "u") return;
    const a = new URLSearchParams(window.location.search).get("remote_catalog");
    if (a) {
      const n = a.split(",").map((i) => i.trim());
      for (const i of n)
        this.#i(i) && r(this.#e).push({ url: i, enabled: !0, name: this.#o(i) });
    }
  }
  #n() {
    const e = r(this.#e).filter((a) => !this.#c(a));
    ld(js, e, Zs);
  }
  /**
   * Check if a config came from URL params (temporary)
   */
  #c(e) {
    if (typeof window > "u") return !1;
    const n = new URLSearchParams(window.location.search).get("remote_catalog");
    return n ? n.split(",").map((c) => c.trim()).includes(e.url) : !1;
  }
  /**
   * Validate URL
   */
  #i(e) {
    try {
      return new URL(e), !0;
    } catch {
      return !1;
    }
  }
  /**
   * Extract a friendly name from a URL
   */
  #o(e) {
    try {
      const n = new URL(e).pathname.split("/");
      return n[n.length - 1].replace(".json", "").replace(/-/g, " ");
    } catch {
      return e;
    }
  }
  // --- Public API ---
  /**
   * Add a new remote catalog configuration.
   *
   * @param url - URL to the remote catalog
   * @param name - Optional friendly name
   * @returns The created configuration
   */
  addRemoteCatalog(e, a) {
    if (!this.#i(e))
      return console.error("[RemoteCatalogConfig] Invalid URL:", e), null;
    if (r(this.#e).some((i) => i.url === e))
      return console.warn("[RemoteCatalogConfig] Catalog already exists:", e), null;
    const n = {
      url: e,
      enabled: !0,
      name: a || this.#o(e)
    };
    return r(this.#e).push(n), this.#n(), n;
  }
  /**
   * Remove a remote catalog configuration.
   *
   * @param url - URL of the catalog to remove
   * @returns true if removed
   */
  removeRemoteCatalog(e) {
    const a = r(this.#e).findIndex((n) => n.url === e);
    return a === -1 ? !1 : (r(this.#e).splice(a, 1), this.#n(), !0);
  }
  /**
   * Toggle a remote catalog on/off.
   *
   * @param url - URL of the catalog to toggle
   * @param enabled - Optional explicit enable/disable (default: toggle)
   */
  toggleRemoteCatalog(e, a) {
    const n = r(this.#e).find((i) => i.url === e);
    n && (n.enabled = a !== void 0 ? a : !n.enabled, this.#n());
  }
  /**
   * Update a remote catalog configuration.
   *
   * @param url - URL of the catalog to update
   * @param updates - Partial config updates
   */
  updateRemoteCatalog(e, a) {
    const n = r(this.#e).find((i) => i.url === e);
    n && (Object.assign(n, a), this.#n());
  }
  /**
   * Clear all remote catalog configurations from LocalStorage.
   * Does not affect URL-param configs.
   */
  clearAll() {
    re(this.#e, r(this.#e).filter((e) => this.#c(e)), !0), this.#n();
  }
}
const Js = new Yh(), Hh = "./layout-catalog.json";
class Bh {
  /** Bundled catalog data */
  #e = /* @__PURE__ */ Me(null);
  /** Remote catalogs indexed by URL */
  #a = /* @__PURE__ */ new Map();
  /** Remote source configurations */
  #t = /* @__PURE__ */ Me(bt([]));
  /** Loading state */
  #r = /* @__PURE__ */ Me(bt({ isLoading: !1, error: null, lastUpdated: null }));
  // --- Public accessors ---
  /** Current loading state */
  get state() {
    return r(this.#r);
  }
  /** Whether the catalog is loaded */
  get isLoaded() {
    return r(this.#e) !== null;
  }
  /** Path to the startup layout (loaded when no URL param is present) */
  get startupLayout() {
    return r(this.#e)?.startup_layout ?? "";
  }
  /** All registered remote sources */
  get remoteSources() {
    return r(this.#t);
  }
  // --- Catalog Loading ---
  /**
   * Load the bundled layout catalog.
   * This should be called during app initialization.
   */
  async loadBundledCatalog() {
    if (!(r(this.#e) || r(this.#r).isLoading)) {
      r(this.#r).isLoading = !0, r(this.#r).error = null;
      try {
        const e = await fetch(Hh);
        if (!e.ok)
          throw new Error(`Failed to load catalog: ${e.status} ${e.statusText}`);
        const a = await e.json();
        if (a.version !== 1)
          throw new Error(`Unsupported catalog version: ${a.version}`);
        for (const n of a.layouts)
          n.source = "bundled";
        re(this.#e, a, !0), r(this.#r).lastUpdated = Date.now(), await this.loadRemoteCatalogs();
      } catch (e) {
        const a = e instanceof Error ? e.message : "Unknown error loading catalog";
        r(this.#r).error = a, console.error("[LayoutCatalog] Failed to load bundled catalog:", e);
      } finally {
        r(this.#r).isLoading = !1;
      }
    }
  }
  /**
   * Load all enabled remote catalogs from the config manager.
   */
  async loadRemoteCatalogs() {
    Js.load();
    const e = Js.enabledConfigs;
    for (const a of e)
      try {
        await this.loadRemoteCatalog(a);
      } catch (n) {
        console.error(`[LayoutCatalog] Failed to load remote catalog ${a.url}:`, n);
      }
  }
  /**
   * Load a remote layout catalog.
   *
   * @param config - Remote catalog configuration
   * @returns Promise that resolves when loaded
   */
  async loadRemoteCatalog(e) {
    if (e.enabled)
      try {
        const a = await fetch(e.url);
        if (!a.ok)
          throw new Error(`Failed to load remote catalog: ${a.status}`);
        const n = await a.json();
        if (n.version !== 1)
          throw new Error(`Unsupported catalog version: ${n.version}`);
        const i = new URL(e.url);
        for (const c of n.layouts)
          c.source = "remote", c.path.startsWith("./") && (c.path = new URL(c.path.slice(2), i).toString());
        this.#a.set(e.url, n), r(this.#t).find((c) => c.url === e.url) || r(this.#t).push(e);
      } catch (a) {
        throw console.error(`[LayoutCatalog] Failed to load remote catalog ${e.url}:`, a), a;
      }
  }
  /**
   * Remove a remote catalog source.
   *
   * @param url - URL of the catalog to remove
   */
  removeRemoteSource(e) {
    this.#a.delete(e), re(this.#t, r(this.#t).filter((a) => a.url !== e), !0);
  }
  // --- Layout Access ---
  /**
   * Get all layouts from all sources (bundled + remote).
   *
   * @returns Array of all layout metadata
   */
  getAllLayouts() {
    const e = [];
    r(this.#e) && e.push(...r(this.#e).layouts);
    for (const a of this.#a.values())
      e.push(...a.layouts);
    return e;
  }
  /**
   * Get a layout by ID.
   *
   * @param id - Layout ID
   * @returns Layout metadata or undefined if not found
   */
  getLayoutById(e) {
    return this.getAllLayouts().find((a) => a.id === e);
  }
  // --- Filtering ---
  /**
   * Filter layouts based on the provided options.
   *
   * @param options - Filter options
   * @param favorites - Set of favorite layout IDs (optional)
   * @returns Filtered array of layout metadata
   */
  filterLayouts(e, a) {
    let n = this.getAllLayouts();
    if (e.favoritesOnly && a && (n = n.filter((i) => a.has(i.id))), e.query) {
      const i = e.query.toLowerCase();
      n = n.filter((c) => c.title.toLowerCase().includes(i) || c.description && c.description.toLowerCase().includes(i));
    }
    return e.tags && e.tags.length > 0 && (n = n.filter((i) => e.tags.every((c) => i.tags.includes(c)))), e.category && (n = n.filter((i) => i.category === e.category)), e.features && e.features.length > 0 && (n = n.filter((i) => e.features.every((c) => i.features.includes(c)))), e.complexity && (n = n.filter((i) => i.complexity === e.complexity)), n;
  }
  /**
   * Search layouts by text query.
   * Convenience method that wraps filterLayouts.
   *
   * @param query - Search query
   * @returns Matching layouts
   */
  search(e) {
    return this.filterLayouts({ query: e });
  }
  // --- Metadata Extraction ---
  /**
   * Get unique tags from a set of layouts.
   * Useful for showing only relevant tags in filter UI.
   *
   * @param layouts - Layouts to extract tags from (defaults to all)
   * @returns Array of unique tags sorted alphabetically
   */
  getUniqueTags(e) {
    const a = e ?? this.getAllLayouts(), n = /* @__PURE__ */ new Set();
    for (const i of a)
      for (const c of i.tags)
        n.add(c);
    return Array.from(n).sort();
  }
  /**
   * Get unique missions from a set of layouts.
   *
   * @param layouts - Layouts to extract missions from (defaults to all)
   * @returns Array of unique missions sorted alphabetically
   */
  getUniqueMissions(e) {
    const a = e ?? this.getAllLayouts(), n = /* @__PURE__ */ new Set();
    for (const i of a)
      for (const c of i.missions)
        n.add(c);
    return Array.from(n).sort();
  }
  /**
   * Get unique features from a set of layouts.
   *
   * @param layouts - Layouts to extract features from (defaults to all)
   * @returns Array of unique features
   */
  getUniqueFeatures(e) {
    const a = e ?? this.getAllLayouts(), n = /* @__PURE__ */ new Set();
    for (const i of a)
      for (const c of i.features)
        n.add(c);
    return Array.from(n);
  }
  /**
   * Get unique categories from a set of layouts.
   *
   * @param layouts - Layouts to extract categories from (defaults to all)
   * @returns Array of unique categories
   */
  getUniqueCategories(e) {
    const a = e ?? this.getAllLayouts(), n = /* @__PURE__ */ new Set();
    for (const i of a)
      n.add(i.category);
    return Array.from(n);
  }
  /**
   * Get layout counts by category.
   *
   * @returns Map of category to count
   */
  getCountsByCategory() {
    const e = /* @__PURE__ */ new Map(), a = this.getAllLayouts();
    for (const n of a) {
      const i = e.get(n.category) ?? 0;
      e.set(n.category, i + 1);
    }
    return e;
  }
  /**
   * Get layout counts by tag.
   *
   * @returns Map of tag to count
   */
  getCountsByTag() {
    const e = /* @__PURE__ */ new Map(), a = this.getAllLayouts();
    for (const n of a)
      for (const i of n.tags) {
        const c = e.get(i) ?? 0;
        e.set(i, c + 1);
      }
    return e;
  }
}
const gi = new Bh();
let Qs = /* @__PURE__ */ new Map(), Ks = /* @__PURE__ */ new Map();
async function Wh() {
  await gi.loadBundledCatalog();
  const t = gi.getAllLayouts();
  Qs.clear(), Ks.clear();
  for (const e of t) {
    Qs.set(e.id, e);
    const a = e.path.split("/").pop();
    a && Ks.set(a, e.path);
  }
  !jn.file && gi.startupLayout && (jn.file = gi.startupLayout);
}
let dd = !1;
function Gh() {
  dd = !0;
}
queueMicrotask(() => {
  dd || Wh().catch((t) => {
    console.error("[layout_file] Failed to load catalog:", t);
  });
});
const jn = bt({ file: "" });
function Ec(t, e) {
  return t - e * Math.floor(t / e);
}
const ud = 1721426;
function yi(t, e, a, n) {
  e = Qo(t, e);
  let i = e - 1, c = -2;
  return a <= 2 ? c = 0 : zi(e) && (c = -1), ud - 1 + 365 * i + Math.floor(i / 4) - Math.floor(i / 100) + Math.floor(i / 400) + Math.floor((367 * a - 362) / 12 + c + n);
}
function zi(t) {
  return t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0);
}
function Qo(t, e) {
  return t === "BC" ? 1 - e : e;
}
function Xh(t) {
  let e = "AD";
  return t <= 0 && (e = "BC", t = 1 - t), [
    e,
    t
  ];
}
const qh = {
  standard: [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ],
  leapyear: [
    31,
    29,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ]
};
class sn {
  fromJulianDay(e) {
    let a = e, n = a - ud, i = Math.floor(n / 146097), c = Ec(n, 146097), o = Math.floor(c / 36524), s = Ec(c, 36524), f = Math.floor(s / 1461), d = Ec(s, 1461), h = Math.floor(d / 365), b = i * 400 + o * 100 + f * 4 + h + (o !== 4 && h !== 4 ? 1 : 0), [m, p] = Xh(b), g = a - yi(m, p, 1, 1), v = 2;
    a < yi(m, p, 3, 1) ? v = 0 : zi(p) && (v = 1);
    let k = Math.floor(((g + v) * 12 + 373) / 367), S = a - yi(m, p, k, 1) + 1;
    return new Ji(m, p, k, S);
  }
  toJulianDay(e) {
    return yi(e.era, e.year, e.month, e.day);
  }
  getDaysInMonth(e) {
    return qh[zi(e.year) ? "leapyear" : "standard"][e.month - 1];
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getMonthsInYear(e) {
    return 12;
  }
  getDaysInYear(e) {
    return zi(e.year) ? 366 : 365;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getYearsInEra(e) {
    return 9999;
  }
  getEras() {
    return [
      "BC",
      "AD"
    ];
  }
  isInverseEra(e) {
    return e.era === "BC";
  }
  balanceDate(e) {
    e.year <= 0 && (e.era = e.era === "BC" ? "AD" : "BC", e.year = 1 - e.year);
  }
  constructor() {
    this.identifier = "gregory";
  }
}
function jh(t, e) {
  var a, n, i, c;
  return (c = (i = (a = t.isEqual) === null || a === void 0 ? void 0 : a.call(t, e)) !== null && i !== void 0 ? i : (n = e.isEqual) === null || n === void 0 ? void 0 : n.call(e, t)) !== null && c !== void 0 ? c : t.identifier === e.identifier;
}
function so(t) {
  return qt(Date.now(), t);
}
function hd(t, e) {
  return t.calendar.toJulianDay(t) - e.calendar.toJulianDay(e);
}
function Zh(t, e) {
  return $s(t) - $s(e);
}
function $s(t) {
  return t.hour * 36e5 + t.minute * 6e4 + t.second * 1e3 + t.millisecond;
}
let Ic = null;
function bd() {
  return Ic == null && (Ic = new Intl.DateTimeFormat().resolvedOptions().timeZone), Ic;
}
function fn(t) {
  t = Sa(t, new sn());
  let e = Qo(t.era, t.year);
  return md(e, t.month, t.day, t.hour, t.minute, t.second, t.millisecond);
}
function md(t, e, a, n, i, c, o) {
  let s = /* @__PURE__ */ new Date();
  return s.setUTCHours(n, i, c, o), s.setUTCFullYear(t, e - 1, a), s.getTime();
}
function fo(t, e) {
  if (e === "UTC") return 0;
  if (t > 0 && e === bd()) return new Date(t).getTimezoneOffset() * -6e4;
  let { year: a, month: n, day: i, hour: c, minute: o, second: s } = pd(t, e);
  return md(a, n, i, c, o, s, 0) - Math.floor(t / 1e3) * 1e3;
}
const ef = /* @__PURE__ */ new Map();
function pd(t, e) {
  let a = ef.get(e);
  a || (a = new Intl.DateTimeFormat("en-US", {
    timeZone: e,
    hour12: !1,
    era: "short",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  }), ef.set(e, a));
  let n = a.formatToParts(new Date(t)), i = {};
  for (let c of n) c.type !== "literal" && (i[c.type] = c.value);
  return {
    // Firefox returns B instead of BC... https://bugzilla.mozilla.org/show_bug.cgi?id=1752253
    year: i.era === "BC" || i.era === "B" ? -i.year + 1 : +i.year,
    month: +i.month,
    day: +i.day,
    hour: i.hour === "24" ? 0 : +i.hour,
    minute: +i.minute,
    second: +i.second
  };
}
const tf = 864e5;
function Jh(t, e, a, n) {
  return (a === n ? [
    a
  ] : [
    a,
    n
  ]).filter((c) => Qh(t, e, c));
}
function Qh(t, e, a) {
  let n = pd(a, e);
  return t.year === n.year && t.month === n.month && t.day === n.day && t.hour === n.hour && t.minute === n.minute && t.second === n.second;
}
function za(t, e, a = "compatible") {
  let n = ln(t);
  if (e === "UTC") return fn(n);
  if (e === bd() && a === "compatible") {
    n = Sa(n, new sn());
    let f = /* @__PURE__ */ new Date(), d = Qo(n.era, n.year);
    return f.setFullYear(d, n.month - 1, n.day), f.setHours(n.hour, n.minute, n.second, n.millisecond), f.getTime();
  }
  let i = fn(n), c = fo(i - tf, e), o = fo(i + tf, e), s = Jh(n, e, i - c, i - o);
  if (s.length === 1) return s[0];
  if (s.length > 1) switch (a) {
    // 'compatible' means 'earlier' for "fall back" transitions
    case "compatible":
    case "earlier":
      return s[0];
    case "later":
      return s[s.length - 1];
    case "reject":
      throw new RangeError("Multiple possible absolute times found");
  }
  switch (a) {
    case "earlier":
      return Math.min(i - c, i - o);
    // 'compatible' means 'later' for "spring forward" transitions
    case "compatible":
    case "later":
      return Math.max(i - c, i - o);
    case "reject":
      throw new RangeError("No such absolute time found");
  }
}
function gd(t, e, a = "compatible") {
  return new Date(za(t, e, a));
}
function qt(t, e) {
  let a = fo(t, e), n = new Date(t + a), i = n.getUTCFullYear(), c = n.getUTCMonth() + 1, o = n.getUTCDate(), s = n.getUTCHours(), f = n.getUTCMinutes(), d = n.getUTCSeconds(), h = n.getUTCMilliseconds();
  return new dn(i < 1 ? "BC" : "AD", i < 1 ? -i + 1 : i, c, o, e, a, s, f, d, h);
}
function ka(t, e) {
  return qt(t.getTime(), e);
}
function ln(t, e) {
  let a = 0, n = 0, i = 0, c = 0;
  if ("timeZone" in t) ({ hour: a, minute: n, second: i, millisecond: c } = t);
  else if ("hour" in t && !e) return t;
  return e && ({ hour: a, minute: n, second: i, millisecond: c } = e), new Qi(t.calendar, t.era, t.year, t.month, t.day, a, n, i, c);
}
function Sa(t, e) {
  if (jh(t.calendar, e)) return t;
  let a = e.fromJulianDay(t.calendar.toJulianDay(t)), n = t.copy();
  return n.calendar = e, n.era = a.era, n.year = a.year, n.month = a.month, n.day = a.day, Ir(n), n;
}
function Kh(t, e, a) {
  if (t instanceof dn)
    return t.timeZone === e ? t : yd(t, e);
  let n = za(t, e, a);
  return qt(n, e);
}
function $h(t) {
  let e = fn(t) - t.offset;
  return new Date(e);
}
function yd(t, e) {
  let a = fn(t) - t.offset;
  return Sa(qt(a, e), t.calendar);
}
const Pn = 36e5;
function gc(t, e) {
  let a = t.copy(), n = "hour" in a ? rb(a, e) : 0;
  lo(a, e.years || 0), a.calendar.balanceYearMonth && a.calendar.balanceYearMonth(a, t), a.month += e.months || 0, uo(a), vd(a), a.day += (e.weeks || 0) * 7, a.day += e.days || 0, a.day += n, eb(a), a.calendar.balanceDate && a.calendar.balanceDate(a), a.year < 1 && (a.year = 1, a.month = 1, a.day = 1);
  let i = a.calendar.getYearsInEra(a);
  if (a.year > i) {
    var c, o;
    let f = (c = (o = a.calendar).isInverseEra) === null || c === void 0 ? void 0 : c.call(o, a);
    a.year = i, a.month = f ? 1 : a.calendar.getMonthsInYear(a), a.day = f ? 1 : a.calendar.getDaysInMonth(a);
  }
  a.month < 1 && (a.month = 1, a.day = 1);
  let s = a.calendar.getMonthsInYear(a);
  return a.month > s && (a.month = s, a.day = a.calendar.getDaysInMonth(a)), a.day = Math.max(1, Math.min(a.calendar.getDaysInMonth(a), a.day)), a;
}
function lo(t, e) {
  var a, n;
  !((a = (n = t.calendar).isInverseEra) === null || a === void 0) && a.call(n, t) && (e = -e), t.year += e;
}
function uo(t) {
  for (; t.month < 1; )
    lo(t, -1), t.month += t.calendar.getMonthsInYear(t);
  let e = 0;
  for (; t.month > (e = t.calendar.getMonthsInYear(t)); )
    t.month -= e, lo(t, 1);
}
function eb(t) {
  for (; t.day < 1; )
    t.month--, uo(t), t.day += t.calendar.getDaysInMonth(t);
  for (; t.day > t.calendar.getDaysInMonth(t); )
    t.day -= t.calendar.getDaysInMonth(t), t.month++, uo(t);
}
function vd(t) {
  t.month = Math.max(1, Math.min(t.calendar.getMonthsInYear(t), t.month)), t.day = Math.max(1, Math.min(t.calendar.getDaysInMonth(t), t.day));
}
function Ir(t) {
  t.calendar.constrainDate && t.calendar.constrainDate(t), t.year = Math.max(1, Math.min(t.calendar.getYearsInEra(t), t.year)), vd(t);
}
function _d(t) {
  let e = {};
  for (let a in t) typeof t[a] == "number" && (e[a] = -t[a]);
  return e;
}
function wd(t, e) {
  return gc(t, _d(e));
}
function Ko(t, e) {
  let a = t.copy();
  return e.era != null && (a.era = e.era), e.year != null && (a.year = e.year), e.month != null && (a.month = e.month), e.day != null && (a.day = e.day), Ir(a), a;
}
function ji(t, e) {
  let a = t.copy();
  return e.hour != null && (a.hour = e.hour), e.minute != null && (a.minute = e.minute), e.second != null && (a.second = e.second), e.millisecond != null && (a.millisecond = e.millisecond), ab(a), a;
}
function tb(t) {
  t.second += Math.floor(t.millisecond / 1e3), t.millisecond = vi(t.millisecond, 1e3), t.minute += Math.floor(t.second / 60), t.second = vi(t.second, 60), t.hour += Math.floor(t.minute / 60), t.minute = vi(t.minute, 60);
  let e = Math.floor(t.hour / 24);
  return t.hour = vi(t.hour, 24), e;
}
function ab(t) {
  t.millisecond = Math.max(0, Math.min(t.millisecond, 1e3)), t.second = Math.max(0, Math.min(t.second, 59)), t.minute = Math.max(0, Math.min(t.minute, 59)), t.hour = Math.max(0, Math.min(t.hour, 23));
}
function vi(t, e) {
  let a = t % e;
  return a < 0 && (a += e), a;
}
function rb(t, e) {
  return t.hour += e.hours || 0, t.minute += e.minutes || 0, t.second += e.seconds || 0, t.millisecond += e.milliseconds || 0, tb(t);
}
function $o(t, e, a, n) {
  let i = t.copy();
  switch (e) {
    case "era": {
      let s = t.calendar.getEras(), f = s.indexOf(t.era);
      if (f < 0) throw new Error("Invalid era: " + t.era);
      f = Ua(f, a, 0, s.length - 1, n?.round), i.era = s[f], Ir(i);
      break;
    }
    case "year":
      var c, o;
      !((c = (o = i.calendar).isInverseEra) === null || c === void 0) && c.call(o, i) && (a = -a), i.year = Ua(t.year, a, -1 / 0, 9999, n?.round), i.year === -1 / 0 && (i.year = 1), i.calendar.balanceYearMonth && i.calendar.balanceYearMonth(i, t);
      break;
    case "month":
      i.month = Ua(t.month, a, 1, t.calendar.getMonthsInYear(t), n?.round);
      break;
    case "day":
      i.day = Ua(t.day, a, 1, t.calendar.getDaysInMonth(t), n?.round);
      break;
    default:
      throw new Error("Unsupported field " + e);
  }
  return t.calendar.balanceDate && t.calendar.balanceDate(i), Ir(i), i;
}
function xd(t, e, a, n) {
  let i = t.copy();
  switch (e) {
    case "hour": {
      let c = t.hour, o = 0, s = 23;
      if (n?.hourCycle === 12) {
        let f = c >= 12;
        o = f ? 12 : 0, s = f ? 23 : 11;
      }
      i.hour = Ua(c, a, o, s, n?.round);
      break;
    }
    case "minute":
      i.minute = Ua(t.minute, a, 0, 59, n?.round);
      break;
    case "second":
      i.second = Ua(t.second, a, 0, 59, n?.round);
      break;
    case "millisecond":
      i.millisecond = Ua(t.millisecond, a, 0, 999, n?.round);
      break;
    default:
      throw new Error("Unsupported field " + e);
  }
  return i;
}
function Ua(t, e, a, n, i = !1) {
  if (i) {
    t += Math.sign(e), t < a && (t = n);
    let c = Math.abs(e);
    e > 0 ? t = Math.ceil(t / c) * c : t = Math.floor(t / c) * c, t > n && (t = a);
  } else
    t += e, t < a ? t = n - (a - t - 1) : t > n && (t = a + (t - n - 1));
  return t;
}
function kd(t, e) {
  let a;
  if (e.years != null && e.years !== 0 || e.months != null && e.months !== 0 || e.weeks != null && e.weeks !== 0 || e.days != null && e.days !== 0) {
    let i = gc(ln(t), {
      years: e.years,
      months: e.months,
      weeks: e.weeks,
      days: e.days
    });
    a = za(i, t.timeZone);
  } else
    a = fn(t) - t.offset;
  a += e.milliseconds || 0, a += (e.seconds || 0) * 1e3, a += (e.minutes || 0) * 6e4, a += (e.hours || 0) * 36e5;
  let n = qt(a, t.timeZone);
  return Sa(n, t.calendar);
}
function nb(t, e) {
  return kd(t, _d(e));
}
function ib(t, e, a, n) {
  switch (e) {
    case "hour": {
      let i = 0, c = 23;
      if (n?.hourCycle === 12) {
        let g = t.hour >= 12;
        i = g ? 12 : 0, c = g ? 23 : 11;
      }
      let o = ln(t), s = Sa(ji(o, {
        hour: i
      }), new sn()), f = [
        za(s, t.timeZone, "earlier"),
        za(s, t.timeZone, "later")
      ].filter((g) => qt(g, t.timeZone).day === s.day)[0], d = Sa(ji(o, {
        hour: c
      }), new sn()), h = [
        za(d, t.timeZone, "earlier"),
        za(d, t.timeZone, "later")
      ].filter((g) => qt(g, t.timeZone).day === d.day).pop(), b = fn(t) - t.offset, m = Math.floor(b / Pn), p = b % Pn;
      return b = Ua(m, a, Math.floor(f / Pn), Math.floor(h / Pn), n?.round) * Pn + p, Sa(qt(b, t.timeZone), t.calendar);
    }
    case "minute":
    case "second":
    case "millisecond":
      return xd(t, e, a, n);
    case "era":
    case "year":
    case "month":
    case "day": {
      let i = $o(ln(t), e, a, n), c = za(i, t.timeZone);
      return Sa(qt(c, t.timeZone), t.calendar);
    }
    default:
      throw new Error("Unsupported field " + e);
  }
}
function cb(t, e, a) {
  let n = ln(t), i = ji(Ko(n, e), e);
  if (i.compare(n) === 0) return t;
  let c = za(i, t.timeZone, a);
  return Sa(qt(c, t.timeZone), t.calendar);
}
const ob = /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?(?:(?:([+-]\d{2})(?::?(\d{2}))?)|Z)$/, sb = /^((?<negative>-)|\+)?P((?<years>\d*)Y)?((?<months>\d*)M)?((?<weeks>\d*)W)?((?<days>\d*)D)?((?<time>T)((?<hours>\d*[.,]?\d{1,9})H)?((?<minutes>\d*[.,]?\d{1,9})M)?((?<seconds>\d*[.,]?\d{1,9})S)?)?$/, Sd = [
  "hours",
  "minutes",
  "seconds"
], fb = [
  "years",
  "months",
  "weeks",
  "days",
  ...Sd
];
function lb(t, e) {
  let a = t.match(ob);
  if (!a) throw new Error("Invalid ISO 8601 date time string: " + t);
  let n = La(a[1], -9999, 9999), i = n < 1 ? "BC" : "AD", c = new dn(i, n < 1 ? -n + 1 : n, La(a[2], 1, 12), 1, e, 0, a[4] ? La(a[4], 0, 23) : 0, a[5] ? La(a[5], 0, 59) : 0, a[6] ? La(a[6], 0, 59) : 0, a[7] ? La(a[7], 0, 1 / 0) * 1e3 : 0);
  c.day = La(a[3], 0, c.calendar.getDaysInMonth(c));
  var o;
  return a[8] && (c.offset = La(a[8], -23, 23) * 36e5 + La((o = a[9]) !== null && o !== void 0 ? o : "0", 0, 59) * 6e4), yd(c, e);
}
function La(t, e, a) {
  let n = Number(t);
  if (n < e || n > a) throw new RangeError(`Value out of range: ${e} <= ${n} <= ${a}`);
  return n;
}
function db(t) {
  return `${String(t.hour).padStart(2, "0")}:${String(t.minute).padStart(2, "0")}:${String(t.second).padStart(2, "0")}${t.millisecond ? String(t.millisecond / 1e3).slice(1) : ""}`;
}
function Md(t) {
  let e = Sa(t, new sn()), a;
  return e.era === "BC" ? a = e.year === 1 ? "0000" : "-" + String(Math.abs(1 - e.year)).padStart(6, "00") : a = String(e.year).padStart(4, "0"), `${a}-${String(e.month).padStart(2, "0")}-${String(e.day).padStart(2, "0")}`;
}
function Td(t) {
  return `${Md(t)}T${db(t)}`;
}
function ub(t) {
  let e = Math.sign(t) < 0 ? "-" : "+";
  t = Math.abs(t);
  let a = Math.floor(t / 36e5), n = Math.floor(t % 36e5 / 6e4), i = Math.floor(t % 36e5 % 6e4 / 1e3), c = `${e}${String(a).padStart(2, "0")}:${String(n).padStart(2, "0")}`;
  return i !== 0 && (c += `:${String(i).padStart(2, "0")}`), c;
}
function hb(t) {
  return `${Td(t)}${ub(t.offset)}[${t.timeZone}]`;
}
function Zi(t) {
  var e, a, n, i, c, o, s, f, d;
  const h = t.match(sb);
  if (!h) throw new Error(`Invalid ISO 8601 Duration string: ${t}`);
  const b = (k, S) => {
    if (!k) return 0;
    try {
      return (S ? -1 : 1) * Number(k.replace(",", "."));
    } catch {
      throw new Error(`Invalid ISO 8601 Duration string: ${t}`);
    }
  }, m = !!(!((e = h.groups) === null || e === void 0) && e.negative);
  if (!fb.some((k) => {
    var S;
    return (S = h.groups) === null || S === void 0 ? void 0 : S[k];
  })) throw new Error(`Invalid ISO 8601 Duration string: ${t}`);
  if (((a = h.groups) === null || a === void 0 ? void 0 : a.time) && !Sd.some((S) => {
    var N;
    return (N = h.groups) === null || N === void 0 ? void 0 : N[S];
  }))
    throw new Error(`Invalid ISO 8601 Duration string: ${t}`);
  const v = {
    years: b((n = h.groups) === null || n === void 0 ? void 0 : n.years, m),
    months: b((i = h.groups) === null || i === void 0 ? void 0 : i.months, m),
    weeks: b((c = h.groups) === null || c === void 0 ? void 0 : c.weeks, m),
    days: b((o = h.groups) === null || o === void 0 ? void 0 : o.days, m),
    hours: b((s = h.groups) === null || s === void 0 ? void 0 : s.hours, m),
    minutes: b((f = h.groups) === null || f === void 0 ? void 0 : f.minutes, m),
    seconds: b((d = h.groups) === null || d === void 0 ? void 0 : d.seconds, m)
  };
  if (v.hours !== void 0 && v.hours % 1 !== 0 && (v.minutes || v.seconds)) throw new Error(`Invalid ISO 8601 Duration string: ${t} - only the smallest unit can be fractional`);
  if (v.minutes !== void 0 && v.minutes % 1 !== 0 && v.seconds) throw new Error(`Invalid ISO 8601 Duration string: ${t} - only the smallest unit can be fractional`);
  return v;
}
function bb(t, e) {
  if (e.has(t))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function es(t, e, a) {
  bb(t, e), e.set(t, a);
}
function ts(t) {
  let e = typeof t[0] == "object" ? t.shift() : new sn(), a;
  if (typeof t[0] == "string") a = t.shift();
  else {
    let o = e.getEras();
    a = o[o.length - 1];
  }
  let n = t.shift(), i = t.shift(), c = t.shift();
  return [
    e,
    a,
    n,
    i,
    c
  ];
}
var mb = /* @__PURE__ */ new WeakMap();
class Ji {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Ji(this.calendar, this.era, this.year, this.month, this.day) : new Ji(this.calendar, this.year, this.month, this.day);
  }
  /** Returns a new `CalendarDate` with the given duration added to it. */
  add(e) {
    return gc(this, e);
  }
  /** Returns a new `CalendarDate` with the given duration subtracted from it. */
  subtract(e) {
    return wd(this, e);
  }
  /** Returns a new `CalendarDate` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(e) {
    return Ko(this, e);
  }
  /**
  * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(e, a, n) {
    return $o(this, e, a, n);
  }
  /** Converts the date to a native JavaScript Date object, with the time set to midnight in the given time zone. */
  toDate(e) {
    return gd(this, e);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return Md(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(e) {
    return hd(this, e);
  }
  constructor(...e) {
    es(this, mb, {
      writable: !0,
      value: void 0
    });
    let [a, n, i, c, o] = ts(e);
    this.calendar = a, this.era = n, this.year = i, this.month = c, this.day = o, Ir(this);
  }
}
var pb = /* @__PURE__ */ new WeakMap();
class Qi {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Qi(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new Qi(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `CalendarDateTime` with the given duration added to it. */
  add(e) {
    return gc(this, e);
  }
  /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */
  subtract(e) {
    return wd(this, e);
  }
  /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(e) {
    return Ko(ji(this, e), e);
  }
  /**
  * Returns a new `CalendarDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(e, a, n) {
    switch (e) {
      case "era":
      case "year":
      case "month":
      case "day":
        return $o(this, e, a, n);
      default:
        return xd(this, e, a, n);
    }
  }
  /** Converts the date to a native JavaScript Date object in the given time zone. */
  toDate(e, a) {
    return gd(this, e, a);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return Td(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(e) {
    let a = hd(this, e);
    return a === 0 ? Zh(this, ln(e)) : a;
  }
  constructor(...e) {
    es(this, pb, {
      writable: !0,
      value: void 0
    });
    let [a, n, i, c, o] = ts(e);
    this.calendar = a, this.era = n, this.year = i, this.month = c, this.day = o, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, Ir(this);
  }
}
var gb = /* @__PURE__ */ new WeakMap();
class dn {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new dn(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new dn(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `ZonedDateTime` with the given duration added to it. */
  add(e) {
    return kd(this, e);
  }
  /** Returns a new `ZonedDateTime` with the given duration subtracted from it. */
  subtract(e) {
    return nb(this, e);
  }
  /** Returns a new `ZonedDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(e, a) {
    return cb(this, e, a);
  }
  /**
  * Returns a new `ZonedDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(e, a, n) {
    return ib(this, e, a, n);
  }
  /** Converts the date to a native JavaScript Date object. */
  toDate() {
    return $h(this);
  }
  /** Converts the date to an ISO 8601 formatted string, including the UTC offset and time zone identifier. */
  toString() {
    return hb(this);
  }
  /** Converts the date to an ISO 8601 formatted string in UTC. */
  toAbsoluteString() {
    return this.toDate().toISOString();
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(e) {
    return this.toDate().getTime() - Kh(e, this.timeZone).toDate().getTime();
  }
  constructor(...e) {
    es(this, gb, {
      writable: !0,
      value: void 0
    });
    let [a, n, i, c, o] = ts(e), s = e.shift(), f = e.shift();
    this.calendar = a, this.era = n, this.year = i, this.month = c, this.day = o, this.timeZone = s, this.offset = f, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, Ir(this);
  }
}
function _i(t) {
  if (t.includes("P")) {
    const e = Zi(t);
    return so("utc").add(e);
  } else
    return lb(t, "UTC");
}
class yb {
  #e = (
    /** Start datetime of timeline viewport */
    /* @__PURE__ */ Me(bt(so("utc").subtract(Zi("P3D")).toDate()))
  );
  get start() {
    return r(this.#e);
  }
  set start(e) {
    re(this.#e, e, !0);
  }
  #a = /* @__PURE__ */ Me(bt(so("utc").add(Zi("P3D")).toDate()));
  get end() {
    return r(this.#a);
  }
  set end(e) {
    re(this.#a, e, !0);
  }
  #t = /* @__PURE__ */ u(() => this.end.valueOf() - this.start.valueOf());
  get viewportTimeSpan_msec() {
    return r(this.#t);
  }
  set viewportTimeSpan_msec(e) {
    re(this.#t, e);
  }
  #r = /* @__PURE__ */ Me(!1);
  get shouldAnimate() {
    return r(this.#r);
  }
  set shouldAnimate(e) {
    re(this.#r, e, !0);
  }
  #n = /* @__PURE__ */ Me(null);
  get requestedDurationMs() {
    return r(this.#n);
  }
  set requestedDurationMs(e) {
    re(this.#n, e, !0);
  }
  #c = /* @__PURE__ */ u(() => ({
    start: ka(this.start, "utc"),
    end: ka(this.end, "utc")
  }));
  get toZonedDateTime() {
    return r(this.#c);
  }
  set toZonedDateTime(e) {
    re(this.#c, e);
  }
  #i = null;
  setTimeDomainFromDate(e, a) {
    this.start = e, this.end = a;
  }
  /** Set the start and end datetime from ZonedDateTime objects */
  setTimeDomainFromZonedDateTime(e, a) {
    this.setTimeDomainFromDate(e.toDate(), a.toDate());
  }
  /**
   * Set time domain with animation.
   * @param start - Start time
   * @param end - End time
   * @param durationMs - Animation duration in ms. Null = auto-compute from zoom distance.
   *                     0 = instant (still goes through animation path to properly reset zoom state).
   */
  setTimeDomainAnimated(e, a, n = null) {
    this.requestedDurationMs = n, this.shouldAnimate = !0, this.setTimeDomainFromZonedDateTime(e, a);
  }
  /**
   * Set a pending time domain override (typically from URL parameters).
   * This will be applied when applyPendingOverride() is called,
   * which happens after the layout loads.
   *
   * @param start - Start date
   * @param end - End date
   */
  setPendingOverride(e, a) {
    this.#i = { start: e, end: a };
  }
  /**
   * Apply any pending time domain override.
   * Called by LayoutManager after loading a layout.
   *
   * @returns true if an override was applied, false if none was pending
   */
  applyPendingOverride() {
    return this.#i ? (this.setTimeDomainFromDate(this.#i.start, this.#i.end), this.#i = null, !0) : !1;
  }
  /**
   * Check if there is a pending time domain override.
   */
  hasPendingOverride() {
    return this.#i !== null;
  }
}
const Je = new yb();
var vb = Math.asin, Dd = Math.cos, Ad = Math.PI, _b = Math.pow, Ma = Math.sin, wb = Math.tan;
function na(t) {
  return Ad * t / 180;
}
function Cd(t) {
  return 180 * t / Ad;
}
function Pd(t) {
  var e = (280.46646 + t * (36000.76983 + t * 3032e-7)) % 360;
  return e < 0 ? e + 360 : e;
}
function Ed(t) {
  return 357.52911 + t * (35999.05029 - 1537e-7 * t);
}
function xb(t) {
  var e = na(Ed(t)), a = Ma(e), n = Ma(e * 2), i = Ma(e * 3);
  return a * (1.914602 - t * (4817e-6 + 14e-6 * t)) + n * (0.019993 - 101e-6 * t) + i * 289e-6;
}
function kb(t) {
  return Pd(t) + xb(t);
}
function Sb(t) {
  return kb(t) - 569e-5 - 478e-5 * Ma(na(125.04 - 1934.136 * t));
}
var Mb = Date.UTC(2e3, 0, 1, 12);
function Tb(t) {
  return (t - Mb) / 315576e7;
}
function Id(t) {
  var e = 23 + (26 + (21.448 - t * (46.815 + t * (59e-5 - t * 1813e-6))) / 60) / 60, a = 125.04 - 1934.136 * t, n = e + 256e-5 * Dd(na(a));
  return n;
}
function Db(t) {
  return Cd(vb(Ma(na(Id(t))) * Ma(na(Sb(t)))));
}
function Ab(t) {
  return 0.016708634 - t * (42037e-9 + 1267e-10 * t);
}
function Cb(t) {
  var e = Id(t), a = Pd(t), n = Ab(t), i = Ed(t), c = _b(wb(na(e) / 2), 2), o = Ma(2 * na(a)), s = Ma(na(i)), f = Dd(2 * na(a)), d = Ma(4 * na(a)), h = Ma(2 * na(i)), b = c * o - 2 * n * s + 4 * n * c * s * f - 0.5 * c * c * d - 1.25 * n * n * h;
  return Cd(b) * 4;
}
const Pb = function(t, e = !1) {
  const a = (/* @__PURE__ */ new Date(+t)).setUTCHours(0, 0, 0, 0), n = Tb(t), c = [(a - +t) / 864e5 * 360 - 180 - Cb(n) / 4, Db(n)];
  return e ? [c[0] + 180, -1 * c[1]] : c;
};
var Eb = ["forEach", "isDisjointFrom", "isSubsetOf", "isSupersetOf"], Ib = ["difference", "intersection", "symmetricDifference", "union"], af = !1;
class un extends Set {
  /** @type {Map<T, Source<boolean>>} */
  #e = /* @__PURE__ */ new Map();
  #a = /* @__PURE__ */ Me(0);
  #t = /* @__PURE__ */ Me(0);
  #r = sa || -1;
  /**
   * @param {Iterable<T> | null | undefined} [value]
   */
  constructor(e) {
    if (super(), e) {
      for (var a of e)
        super.add(a);
      this.#t.v = super.size;
    }
    af || this.#c();
  }
  /**
   * If the source is being created inside the same reaction as the SvelteSet instance,
   * we use `state` so that it will not be a dependency of the reaction. Otherwise we
   * use `source` so it will be.
   *
   * @template T
   * @param {T} value
   * @returns {Source<T>}
   */
  #n(e) {
    return sa === this.#r ? /* @__PURE__ */ Me(e) : Za(e);
  }
  // We init as part of the first instance so that we can treeshake this class
  #c() {
    af = !0;
    var e = un.prototype, a = Set.prototype;
    for (const n of Eb)
      e[n] = function(...i) {
        return r(this.#a), a[n].apply(this, i);
      };
    for (const n of Ib)
      e[n] = function(...i) {
        r(this.#a);
        var c = (
          /** @type {Set<T>} */
          a[n].apply(this, i)
        );
        return new un(c);
      };
  }
  /** @param {T} value */
  has(e) {
    var a = super.has(e), n = this.#e, i = n.get(e);
    if (i === void 0) {
      if (!a)
        return r(this.#a), !1;
      i = this.#n(!0), n.set(e, i);
    }
    return r(i), a;
  }
  /** @param {T} value */
  add(e) {
    return super.has(e) || (super.add(e), re(this.#t, super.size), Xt(this.#a)), this;
  }
  /** @param {T} value */
  delete(e) {
    var a = super.delete(e), n = this.#e, i = n.get(e);
    return i !== void 0 && (n.delete(e), re(i, !1)), a && (re(this.#t, super.size), Xt(this.#a)), a;
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var e = this.#e;
      for (var a of e.values())
        re(a, !1);
      e.clear(), re(this.#t, 0), Xt(this.#a);
    }
  }
  keys() {
    return this.values();
  }
  values() {
    return r(this.#a), super.values();
  }
  entries() {
    return r(this.#a), super.entries();
  }
  [Symbol.iterator]() {
    return this.keys();
  }
  get size() {
    return r(this.#t);
  }
}
class Nr extends Map {
  /** @type {Map<K, Source<number>>} */
  #e = /* @__PURE__ */ new Map();
  #a = /* @__PURE__ */ Me(0);
  #t = /* @__PURE__ */ Me(0);
  #r = sa || -1;
  /**
   * @param {Iterable<readonly [K, V]> | null | undefined} [value]
   */
  constructor(e) {
    if (super(), e) {
      for (var [a, n] of e)
        super.set(a, n);
      this.#t.v = super.size;
    }
  }
  /**
   * If the source is being created inside the same reaction as the SvelteMap instance,
   * we use `state` so that it will not be a dependency of the reaction. Otherwise we
   * use `source` so it will be.
   *
   * @template T
   * @param {T} value
   * @returns {Source<T>}
   */
  #n(e) {
    return sa === this.#r ? /* @__PURE__ */ Me(e) : Za(e);
  }
  /** @param {K} key */
  has(e) {
    var a = this.#e, n = a.get(e);
    if (n === void 0)
      if (super.has(e))
        n = this.#n(0), a.set(e, n);
      else
        return r(this.#a), !1;
    return r(n), !0;
  }
  /**
   * @param {(value: V, key: K, map: Map<K, V>) => void} callbackfn
   * @param {any} [this_arg]
   */
  forEach(e, a) {
    this.#c(), super.forEach(e, a);
  }
  /** @param {K} key */
  get(e) {
    var a = this.#e, n = a.get(e);
    if (n === void 0)
      if (super.has(e))
        n = this.#n(0), a.set(e, n);
      else {
        r(this.#a);
        return;
      }
    return r(n), super.get(e);
  }
  /**
   * @param {K} key
   * @param {V} value
   * */
  set(e, a) {
    var n = this.#e, i = n.get(e), c = super.get(e), o = super.set(e, a), s = this.#a;
    if (i === void 0)
      i = this.#n(0), n.set(e, i), re(this.#t, super.size), Xt(s);
    else if (c !== a) {
      Xt(i);
      var f = s.reactions === null ? null : new Set(s.reactions), d = f === null || !i.reactions?.every(
        (h) => (
          /** @type {NonNullable<typeof v_reactions>} */
          f.has(h)
        )
      );
      d && Xt(s);
    }
    return o;
  }
  /** @param {K} key */
  delete(e) {
    var a = this.#e, n = a.get(e), i = super.delete(e);
    return n !== void 0 && (a.delete(e), re(n, -1)), i && (re(this.#t, super.size), Xt(this.#a)), i;
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var e = this.#e;
      re(this.#t, 0);
      for (var a of e.values())
        re(a, -1);
      Xt(this.#a), e.clear();
    }
  }
  #c() {
    r(this.#a);
    var e = this.#e;
    if (this.#t.v !== e.size) {
      for (var a of super.keys())
        if (!e.has(a)) {
          var n = this.#n(0);
          e.set(a, n);
        }
    }
    for ([, n] of this.#e)
      r(n);
  }
  keys() {
    return r(this.#a), super.keys();
  }
  values() {
    return this.#c(), super.values();
  }
  entries() {
    return this.#c(), super.entries();
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  get size() {
    return r(this.#t), super.size;
  }
}
function rf(t) {
  return Object.prototype.toString.call(t) === "[object Date]";
}
function Nb(t) {
  return t;
}
function ho(t, e) {
  if (t === e || t !== t) return () => t;
  const a = typeof t;
  if (a !== typeof e || Array.isArray(t) !== Array.isArray(e))
    throw new Error("Cannot interpolate values of different type");
  if (Array.isArray(t)) {
    const n = (
      /** @type {Array<any>} */
      e.map((i, c) => ho(
        /** @type {Array<any>} */
        t[c],
        i
      ))
    );
    return (i) => n.map((c) => c(i));
  }
  if (a === "object") {
    if (!t || !e)
      throw new Error("Object cannot be null");
    if (rf(t) && rf(e)) {
      const c = t.getTime(), s = e.getTime() - c;
      return (f) => new Date(c + f * s);
    }
    const n = Object.keys(e), i = {};
    return n.forEach((c) => {
      i[c] = ho(t[c], e[c]);
    }), (c) => {
      const o = {};
      return n.forEach((s) => {
        o[s] = i[s](c);
      }), o;
    };
  }
  if (a === "number") {
    const n = (
      /** @type {number} */
      e - /** @type {number} */
      t
    );
    return (i) => t + i * n;
  }
  return () => e;
}
class as {
  #e;
  #a;
  /** @type {TweenedOptions<T>} */
  #t;
  /** @type {import('../internal/client/types').Task | null} */
  #r = null;
  /**
   * @param {T} value
   * @param {TweenedOptions<T>} options
   */
  constructor(e, a = {}) {
    this.#e = /* @__PURE__ */ Me(e), this.#a = /* @__PURE__ */ Me(e), this.#t = a;
  }
  /**
   * Create a tween whose value is bound to the return value of `fn`. This must be called
   * inside an effect root (for example, during component initialisation).
   *
   * ```svelte
   * <script>
   * 	import { Tween } from 'svelte/motion';
   *
   * 	let { number } = $props();
   *
   * 	const tween = Tween.of(() => number);
   * <\/script>
   * ```
   * @template U
   * @param {() => U} fn
   * @param {TweenedOptions<U>} [options]
   */
  static of(e, a) {
    const n = new as(e(), a);
    return Go(() => {
      n.set(e());
    }), n;
  }
  /**
   * Sets `tween.target` to `value` and returns a `Promise` that resolves if and when `tween.current` catches up to it.
   *
   * If `options` are provided, they will override the tween's defaults.
   * @param {T} value
   * @param {TweenedOptions<T>} [options]
   * @returns
   */
  set(e, a) {
    re(this.#a, e);
    let {
      delay: n = 0,
      duration: i = 400,
      easing: c = Nb,
      interpolate: o = ho
    } = { ...this.#t, ...a };
    if (i === 0)
      return this.#r?.abort(), re(this.#e, e), Promise.resolve();
    const s = va.now() + n;
    let f, d = !1, h = this.#r;
    return this.#r = od((b) => {
      if (b < s)
        return !0;
      if (!d) {
        d = !0;
        const p = this.#e.v;
        f = o(p, e), typeof i == "function" && (i = i(p, e)), h?.abort();
      }
      const m = b - s;
      return m > /** @type {number} */
      i ? (re(this.#e, e), !1) : (re(this.#e, f(c(m / /** @type {number} */
      i))), !0);
    }), this.#r.promise;
  }
  get current() {
    return r(this.#e);
  }
  get target() {
    return r(this.#a);
  }
  set target(e) {
    this.set(e);
  }
}
const Lb = 300;
let Fb = class {
  /** Position of playhead in viewport (fraction 0-1) */
  playheadPosition = new as(0.5, { duration: 400 });
  #e = /* @__PURE__ */ u(
    /** Datetime of playhead (derived from position and time domain) */
    () => {
      const a = Je.start.valueOf() + this.playheadPosition.current * Je.viewportTimeSpan_msec;
      return !Number.isFinite(a) || a < -864e13 || a > 864e13 ? qt(Date.now(), "utc") : qt(a, "utc");
    }
  );
  get playheadTime() {
    return r(this.#e);
  }
  set playheadTime(e) {
    re(this.#e, e);
  }
  #a = /* @__PURE__ */ Me(0);
  #t = null;
  #r = /* @__PURE__ */ Me(!1);
  #n = /* @__PURE__ */ Me(!1);
  get debouncedPlayheadTime() {
    return qt(r(this.#a), "utc");
  }
  get debouncedPlayheadMs() {
    return r(this.#a);
  }
  /**
   * Whether the debounced playhead has been initialized with a value from the time domain.
   * Components should check this before using debouncedPlayheadMs to avoid fetching
   * data for the wrong time range on initial load.
   */
  get isInitialized() {
    return r(this.#r);
  }
  /**
   * Whether the playhead has "settled" - i.e., hasn't moved for at least DEBOUNCE_MS.
   *
   * Use this to decide between exact-time vs. cached computations:
   * - During animation/dragging/panning: isSettled = false → use cached quantized data
   * - After pause/release (300ms): isSettled = true → use live exact-time data
   */
  get isSettled() {
    return r(this.#n);
  }
  constructor() {
    li(() => {
      ut(() => {
        const e = this.playheadTime.toDate().getTime();
        if (re(this.#n, !1), this.#t && clearTimeout(this.#t), !r(this.#r)) {
          re(this.#a, e, !0), re(this.#r, !0), re(this.#n, !0);
          return;
        }
        return this.#t = setTimeout(
          () => {
            re(this.#a, e, !0), this.#t = null, re(this.#n, !0);
          },
          Lb
        ), () => {
          this.#t && (clearTimeout(this.#t), this.#t = null);
        };
      });
    });
  }
  /** Set the playhead position (0-1) with optional animation duration */
  async setPlayhead(e, a) {
    if (e < 0 && (e = 0), e > 1 && (e = 1), this.trackingMode === "lock_to_time" && !this.animationPlaying) {
      const n = Je.start.valueOf(), i = Je.viewportTimeSpan_msec;
      this.#d = n + e * i;
    }
    return this.playheadPosition.set(e, { duration: a });
  }
  #c = (
    /** Whether animation is currently playing */
    /* @__PURE__ */ Me(!1)
  );
  get animationPlaying() {
    return r(this.#c);
  }
  set animationPlaying(e) {
    re(this.#c, e, !0);
  }
  #i = /* @__PURE__ */ Me(15);
  get animationDuration() {
    return r(this.#i);
  }
  set animationDuration(e) {
    re(this.#i, e, !0);
  }
  #o = /* @__PURE__ */ Me(!0);
  get loopEnabled() {
    return r(this.#o);
  }
  set loopEnabled(e) {
    re(this.#o, e, !0);
  }
  #s = /* @__PURE__ */ Me("follow_viewport");
  get trackingMode() {
    return r(this.#s);
  }
  set trackingMode(e) {
    re(this.#s, e, !0);
  }
  #d = null;
  startNewAnimationLoop = () => {
    this.loopEnabled ? (this.setPlayhead(0, 0), this.playAnimation()) : this.animationPlaying = !1;
  };
  /** Play the animation from current position to end */
  playAnimation = async () => {
    this.playheadPosition.current === 1 && this.setPlayhead(0, 0), this.animationPlaying = !0, this.setPlayhead(1, (1 - this.playheadPosition.current) * this.animationDuration * 1e3).then(this.startNewAnimationLoop);
  };
  /** Pause the animation at current position */
  pauseAnimation = () => {
    this.animationPlaying = !1, this.playheadPosition.set(this.playheadPosition.current, { duration: 0 });
  };
  /** Set the loop duration and restart animation if playing */
  setLoopDuration = (e) => {
    this.animationDuration = e, this.animationPlaying && this.playAnimation();
  };
  /** Set playhead position (only when not animating) */
  setPlayheadPosition = (e) => {
    if (!this.animationPlaying && (this.setPlayhead(e, 0), this.trackingMode === "lock_to_time")) {
      const a = Je.start.valueOf(), n = Je.viewportTimeSpan_msec;
      this.#d = a + e * n;
    }
  };
  /**
   * Lock the playhead to its current absolute time.
   * In this mode, the fraction adjusts when the viewport pans/zooms
   * to keep the playhead at the same absolute time.
   */
  lockToCurrentTime() {
    this.trackingMode = "lock_to_time", this.#d = this.playheadTime.toDate().getTime();
  }
  /** Unlock the playhead from time-lock mode */
  unlockFromTime() {
    this.trackingMode = "follow_viewport", this.#d = null;
  }
  /**
   * Called when the viewport time domain changes (pan/zoom).
   * If in lock mode, adjusts the playhead fraction to maintain the locked time.
   * Clamps to edges and updates the locked time when the playhead is pushed off-screen.
   */
  onViewportChange(e, a) {
    if (this.trackingMode !== "lock_to_time" || this.#d === null || this.animationPlaying) return;
    const n = e.valueOf(), i = a.valueOf(), c = i - n;
    if (c <= 0) return;
    let o = (this.#d - n) / c;
    o < 0 ? (o = 0, this.#d = n) : o > 1 && (o = 1, this.#d = i), this.playheadPosition.set(o, { duration: 0 });
  }
  /**
   * Initialize the playhead position based on a layout option.
   * Called once after the layout loads and the time domain is set.
   *
   * @param option - "center", "start", "end", "now", or a number 0-1
   * @param start - Viewport start time
   * @param end - Viewport end time
   */
  initializePosition(e, a, n) {
    let i;
    if (typeof e == "number")
      i = Math.max(0, Math.min(1, e));
    else
      switch (e) {
        case "start":
          i = 0;
          break;
        case "end":
          i = 1;
          break;
        case "now": {
          const c = Date.now(), o = a.valueOf(), s = n.valueOf();
          i = Math.max(0, Math.min(1, (c - o) / (s - o)));
          break;
        }
        default:
          i = 0.5;
      }
    this.playheadPosition.set(i, { duration: 0 });
  }
  #u = /* @__PURE__ */ u(() => Pb(this.playheadTime.toDate()));
  get subsolarpoint() {
    return r(this.#u);
  }
  set subsolarpoint(e) {
    re(this.#u, e);
  }
};
const Ge = new Fb();
class Rb {
  supportedSystems = ["geodetic"];
  requiresInitialization = !1;
  async initialize(e, a) {
  }
  setEpoch(e) {
  }
  getEpoch() {
    return null;
  }
  isReady() {
    return !0;
  }
  convertPoint(e, a) {
    return e;
  }
  convertLineString(e, a) {
    return e;
  }
  convertPolygon(e, a) {
    return e;
  }
  convertCirclePolygon(e, a) {
    return e;
  }
  convertTopology(e, a) {
    return e;
  }
  convertPosition(e, a) {
    return e;
  }
  // ============================================
  // Reverse conversion methods (magnetic → geodetic)
  // Passthrough: just return input unchanged
  // ============================================
  convertPointToGeodetic(e) {
    return e;
  }
  convertLineStringToGeodetic(e) {
    return e;
  }
  convertPolygonToGeodetic(e) {
    return e;
  }
  convertPositionToGeodetic(e) {
    return e;
  }
}
const Nc = new Rb(), Ob = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Ob);
z1();
ur(["click"]);
ur(["click"]);
const zb = !1, Ub = "map_2d", Vb = !1, Yb = "globe_3d", Hb = !1;
var Bb = { APEXCOORDS: "passthrough", MAP2D: "disabled", GLOBE3D: "disabled", GEOSPACE: "disabled" };
function Wb() {
  const t = {
    APEXCOORDS: "apex",
    MAP2D: "enabled",
    GLOBE3D: "disabled",
    GEOSPACE: "enabled"
  };
  try {
    const e = Bb;
    if (typeof e == "object" && e !== null)
      return e;
  } catch {
  }
  return t;
}
class Gb {
  #e;
  constructor() {
    this.#e = Wb();
  }
  /**
   * Get the coordinate converter instance.
   */
  get coordConverter() {
    return Nc;
  }
  /**
   * Get supported coordinate systems.
   */
  get supportedCoordinateSystems() {
    return Nc.supportedSystems;
  }
  /**
   * Check if magnetic coordinate conversion is available.
   */
  get hasMagneticCoords() {
    return Nc.supportedSystems.includes("magnetic");
  }
  /**
   * Check if Map2D pane is available.
   */
  get hasMap2D() {
    return zb;
  }
  /**
   * Check if Globe3D pane is available.
   */
  get hasGlobe3D() {
    return Vb;
  }
  /**
   * Check if geospace capabilities are available.
   * Includes Tsyganenko models, field line computation, and magnetic reference frames.
   */
  get hasGeospace() {
    return Hb;
  }
  /**
   * Get list of available pane types for this build.
   * Used by UI to show "Add Pane" options.
   */
  get availablePaneTypes() {
    const e = [
      "timeseries",
      // Always available
      "data_status",
      "layout",
      "image",
      "text_display",
      "plot_2d"
    ];
    return this.hasMap2D && e.push(Ub), this.hasGlobe3D && e.push(Yb), e;
  }
  /**
   * Check if a pane type is available in this build.
   * @param paneType The pane type to check
   */
  isPaneTypeAvailable(e) {
    return this.availablePaneTypes.includes(e);
  }
  /**
   * Check if a boolean feature flag is enabled.
   */
  isFeatureEnabled(e) {
    return this.#e[e] === "enabled";
  }
  /**
   * Get the raw feature configuration.
   * Useful for debugging.
   */
  get config() {
    return this.#e;
  }
}
const nf = new Gb(), Xb = {
  area: {
    visible: !0,
    legend_display: "collapsed",
    clip: "both",
    include_in_legend: !0,
    fetch_options: {
      time_parameter: "time",
      zoom_detail_factor: 1,
      fetch_mode: "viewport_throttled",
      time_identity_fields: [
        "time"
      ]
    }
  },
  axis_indicator: {
    visible: !0,
    include_in_legend: !0,
    legend_display: "collapsed",
    reference_frame: "GEO",
    position: {
      type: "static",
      x: 0,
      y: 0,
      z: 0
    },
    rotation: {
      type: "euler",
      x: 0,
      y: 0,
      z: 0
    },
    scale: {
      type: "static",
      x: 1,
      y: 1,
      z: 1
    },
    axis: "z",
    range: "both",
    visual_style: "solid",
    length: 4,
    radius: 0.03
  },
  bars: {
    visible: !0,
    legend_display: "collapsed",
    clip: "both",
    include_in_legend: !0,
    fetch_options: {
      time_parameter: "time",
      zoom_detail_factor: 1,
      fetch_mode: "viewport_throttled",
      time_identity_fields: [
        "time"
      ]
    }
  },
  basemap_fill: {
    visible: !0,
    legend_display: "collapsed",
    include_in_legend: !1
  },
  basemap_stroke: {
    visible: !0,
    legend_display: "collapsed",
    include_in_legend: !1,
    show_coastlines: !0,
    show_borders: !1
  },
  color_mapped_symbols: {
    visible: !0,
    legend_display: "collapsed",
    clip: "both",
    include_in_legend: !0,
    fetch_options: {
      time_parameter: "time",
      zoom_detail_factor: 1,
      fetch_mode: "viewport_throttled",
      time_identity_fields: [
        "time"
      ]
    }
  },
  current_position: {
    visible: !0,
    legend_display: "collapsed",
    include_in_legend: !0,
    show_label: !1
  },
  custom_xtick: {
    visible: !0,
    legend_display: "collapsed",
    clip: "both",
    include_in_legend: !0,
    style: {
      stroke_width: 1,
      stroke_opacity: 1
    },
    fetch_options: {
      time_parameter: "time",
      zoom_detail_factor: 1,
      fetch_mode: "viewport_throttled",
      time_identity_fields: [
        "time"
      ]
    }
  },
  event_interval: {
    visible: !0,
    legend_display: "collapsed",
    clip: "both",
    include_in_legend: !0,
    fetch_options: {
      time_parameter: "time",
      zoom_detail_factor: 1,
      fetch_mode: "viewport_throttled",
      time_identity_fields: [
        "time"
      ]
    }
  },
  field_line_shell: {
    visible: !0,
    include_in_legend: !1,
    mesh_options: {
      resample_points: 100,
      shell_grouping: "single"
    }
  },
  field_lines: {
    visible: !0,
    include_in_legend: !1
  },
  geolocated_texture: {
    visible: !0,
    legend_display: "collapsed",
    include_in_legend: !1,
    source: {
      max_cached_groups: 5,
      prefetch_frames: 10,
      max_groups: 7,
      store_structure: {
        mode: "auto",
        group_pattern: "YYYY/MM/DD",
        chunk_cache_count: 5
      }
    },
    style: {
      opacity: 1,
      face_side: "front",
      normalize_winding: !1
    },
    scan_reveal: {
      enabled: !1,
      trail_fade: {
        enabled: !1,
        min_opacity: 0.2
      }
    }
  },
  graticule: {
    visible: !0,
    legend_display: "collapsed",
    include_in_legend: !1,
    coordinate_type: "geodetic",
    step_longitude: 30,
    step_latitude: 30,
    latitude_start: -90,
    latitude_stop: 90,
    mirror_hemisphere: !1,
    subsolar_reference: !1,
    show_subsolar_point: !1
  },
  grid: {
    visible: !0,
    include_in_legend: !1,
    legend_display: "collapsed",
    reference_frame: "GEO",
    position: {
      type: "static",
      x: 0,
      y: 0,
      z: 0
    },
    rotation: {
      type: "euler",
      x: 0,
      y: 0,
      z: 0
    },
    scale: {
      type: "static",
      x: 1,
      y: 1,
      z: 1
    },
    plane: "xy",
    size: 20,
    divisions: 20
  },
  ground_track: {
    visible: !0,
    legend_display: "collapsed",
    include_in_legend: !0,
    fetch_options: {
      time_parameter: "time",
      zoom_detail_factor: 1,
      fetch_mode: "viewport_throttled",
      time_identity_fields: [
        "time"
      ]
    },
    position_marker: {
      visible: !0,
      shape: "circle",
      size: 6,
      color: "#ff0000",
      use_instance_color: !1,
      opacity: 1,
      stroke: "#000000",
      stroke_width: 1,
      direction_indicator: {
        mode: "off",
        length: 2
      }
    }
  },
  hapi_image_sequence: {
    visible: !0,
    legend_display: "collapsed",
    include_in_legend: !0,
    opacity: 1,
    render_mode: "direct",
    fetch_options: {
      time_parameter: "time",
      zoom_detail_factor: 1,
      fetch_mode: "viewport_throttled",
      time_identity_fields: [
        "time"
      ]
    }
  },
  interval_image: {
    visible: !0,
    legend_display: "collapsed",
    clip: "both",
    include_in_legend: !0,
    fetch_options: {
      time_parameter: "time",
      zoom_detail_factor: 1,
      fetch_mode: "viewport_throttled",
      time_identity_fields: [
        "time"
      ]
    }
  },
  issue_time_selector: {
    visible: !0,
    legend_display: "collapsed",
    clip: "both",
    include_in_legend: !0,
    selection_mode: "playhead_nearest_prior",
    style: {
      marker_size: 6,
      fill_available: "transparent",
      fill_selected: "#3b82f6",
      stroke: "#3b82f6",
      stroke_width: 2
    },
    fetch_options: {
      time_parameter: "time",
      zoom_detail_factor: 1,
      fetch_mode: "viewport_throttled",
      time_identity_fields: [
        "time"
      ]
    }
  },
  latlon_sphere: {
    visible: !0,
    include_in_legend: !1,
    legend_display: "collapsed",
    reference_frame: "GEO",
    position: {
      type: "static",
      x: 0,
      y: 0,
      z: 0
    },
    rotation: {
      type: "euler",
      x: 0,
      y: 0,
      z: 0
    },
    scale: {
      type: "static",
      x: 1,
      y: 1,
      z: 1
    },
    radius: 1,
    width_segments: 64,
    height_segments: 32,
    textures: []
  },
  line: {
    visible: !0,
    legend_display: "collapsed",
    clip: "both",
    include_in_legend: !0,
    fetch_options: {
      time_parameter: "time",
      zoom_detail_factor: 1,
      fetch_mode: "viewport_throttled",
      time_identity_fields: [
        "time"
      ]
    }
  },
  magnetopause: {
    visible: !0,
    include_in_legend: !1,
    model: "t96",
    resolution: 60,
    tail_limit_x: -15
  },
  plate_carree_texture: {
    visible: !0,
    legend_display: "collapsed",
    include_in_legend: !1,
    style: {
      visible: !0,
      opacity: 1
    },
    rendering: {
      high_res_degrees: 1,
      low_res_degrees: 7.5
    }
  },
  plot_histogram: {
    visible: !0,
    legend_display: "collapsed",
    include_in_legend: !0,
    bins: 0,
    orientation: "vertical",
    normalize: !1,
    fetch_options: {
      time_parameter: "time",
      zoom_detail_factor: 1,
      fetch_mode: "viewport_throttled",
      time_identity_fields: [
        "time"
      ]
    }
  },
  plot_line: {
    visible: !0,
    legend_display: "collapsed",
    include_in_legend: !0,
    fetch_options: {
      time_parameter: "time",
      zoom_detail_factor: 1,
      fetch_mode: "viewport_throttled",
      time_identity_fields: [
        "time"
      ]
    }
  },
  plot_scatter: {
    visible: !0,
    legend_display: "collapsed",
    include_in_legend: !0,
    fetch_options: {
      time_parameter: "time",
      zoom_detail_factor: 1,
      fetch_mode: "viewport_throttled",
      time_identity_fields: [
        "time"
      ]
    }
  },
  plot_spectrum: {
    visible: !0,
    legend_display: "collapsed",
    include_in_legend: !0,
    orientation: "horizontal",
    show_bin_ranges: !1,
    fetch_options: {
      time_parameter: "time",
      zoom_detail_factor: 1,
      fetch_mode: "viewport_throttled",
      time_identity_fields: [
        "time"
      ]
    }
  },
  plot_vector: {
    visible: !0,
    legend_display: "collapsed",
    include_in_legend: !0,
    fetch_options: {
      time_parameter: "time",
      zoom_detail_factor: 1,
      fetch_mode: "viewport_throttled",
      time_identity_fields: [
        "time"
      ]
    }
  },
  position_label: {
    visible: !0,
    include_in_legend: !1,
    legend_display: "collapsed",
    reference_frame: "GEO",
    position: {
      type: "static",
      x: 0,
      y: 0,
      z: 0
    },
    rotation: {
      type: "euler",
      x: 0,
      y: 0,
      z: 0
    },
    scale: {
      type: "static",
      x: 1,
      y: 1,
      z: 1
    },
    offset: [
      0,
      0,
      0
    ],
    use_instance_offset: !0,
    use_instance_label: !0,
    instance_label_source: "source"
  },
  position_marker: {
    visible: !0,
    include_in_legend: !0,
    legend_display: "collapsed",
    reference_frame: "GEO",
    position: {
      type: "static",
      x: 0,
      y: 0,
      z: 0
    },
    rotation: {
      type: "euler",
      x: 0,
      y: 0,
      z: 0
    },
    scale: {
      type: "static",
      x: 1,
      y: 1,
      z: 1
    },
    shape: "sphere",
    point_axis: "+x",
    size_x: 0.05
  },
  reference_frame_gizmo: {
    visible: !0,
    include_in_legend: !1,
    frames: [
      "GEI",
      "GEO"
    ],
    size: 75,
    show_labels: !0,
    placement: "bottom-left"
  },
  s2_cube_sphere: {
    visible: !0,
    include_in_legend: !0,
    legend_display: "collapsed",
    reference_frame: "GEO",
    position: {
      type: "static",
      x: 0,
      y: 0,
      z: 0
    },
    rotation: {
      type: "euler",
      x: 0,
      y: 0,
      z: 0
    },
    scale: {
      type: "static",
      x: 1,
      y: 1,
      z: 1
    },
    radius: 1,
    subdivisions: 32,
    textures: []
  },
  static_annotation: {
    visible: !0,
    legend_display: "collapsed",
    clip: "both",
    include_in_legend: !0,
    style: {
      stroke: "currentColor",
      stroke_width: 0.5,
      stroke_opacity: 0.5,
      font_size: 11,
      text_color: "currentColor",
      text_opacity: 1
    }
  },
  static_image: {
    visible: !0,
    legend_display: "collapsed",
    include_in_legend: !0,
    opacity: 1
  },
  station_picker: {
    visible: !0,
    legend_display: "collapsed",
    include_in_legend: !0,
    show_unavailable: !0,
    selection_mode: "toggle"
  },
  symbols: {
    visible: !0,
    legend_display: "collapsed",
    clip: "both",
    include_in_legend: !0,
    fetch_options: {
      time_parameter: "time",
      zoom_detail_factor: 1,
      fetch_mode: "viewport_throttled",
      time_identity_fields: [
        "time"
      ]
    }
  },
  trajectory_path: {
    visible: !0,
    include_in_legend: !0,
    legend_display: "collapsed",
    position: {
      type: "static",
      x: 0,
      y: 0,
      z: 0
    },
    rotation: {
      type: "euler",
      x: 0,
      y: 0,
      z: 0
    },
    scale: {
      type: "static",
      x: 1,
      y: 1,
      z: 1
    },
    fetch_options: {
      time_parameter: "time",
      zoom_detail_factor: 1,
      fetch_mode: "viewport_throttled",
      time_identity_fields: [
        "time"
      ]
    }
  },
  vector_along_trajectory: {
    visible: !0,
    include_in_legend: !0,
    legend_display: "collapsed",
    position: {
      type: "static",
      x: 0,
      y: 0,
      z: 0
    },
    rotation: {
      type: "euler",
      x: 0,
      y: 0,
      z: 0
    },
    scale: {
      type: "static",
      x: 1,
      y: 1,
      z: 1
    },
    fetch_options: {
      time_parameter: "time",
      zoom_detail_factor: 1,
      fetch_mode: "viewport_throttled",
      time_identity_fields: [
        "time"
      ]
    },
    vector_frame: "NEC"
  },
  vector_at_location: {
    visible: !0,
    legend_display: "collapsed",
    include_in_legend: !0,
    display_mode: "vector",
    time_window: {
      aggregation: "nearest"
    }
  },
  vector_at_location_3d: {
    visible: !0,
    include_in_legend: !0,
    legend_display: "collapsed",
    reference_frame: "GEO",
    position: {
      type: "static",
      x: 0,
      y: 0,
      z: 0
    },
    rotation: {
      type: "euler",
      x: 0,
      y: 0,
      z: 0
    },
    scale: {
      type: "static",
      x: 1,
      y: 1,
      z: 1
    },
    fetch_options: {
      time_parameter: "time",
      zoom_detail_factor: 1,
      fetch_mode: "viewport_throttled",
      time_identity_fields: [
        "time"
      ]
    },
    offset: [
      0,
      0,
      0
    ],
    use_instance_offset: !1,
    use_instance_color: !0
  },
  wiggle: {
    visible: !0,
    legend_display: "collapsed",
    clip: "both",
    include_in_legend: !0,
    fetch_options: {
      time_parameter: "time",
      zoom_detail_factor: 1,
      fetch_mode: "viewport_throttled",
      time_identity_fields: [
        "time"
      ]
    }
  },
  xy_text_annotation: {
    visible: !0,
    legend_display: "collapsed",
    clip: "both",
    include_in_legend: !0,
    style: {
      text_style: {
        font_size: 12,
        text_opacity: 1
      }
    },
    fetch_options: {
      time_parameter: "time",
      zoom_detail_factor: 1,
      fetch_mode: "viewport_throttled",
      time_identity_fields: [
        "time"
      ]
    }
  },
  zarr_fov_plane: {
    visible: !0,
    include_in_legend: !0,
    legend_display: "collapsed",
    reference_frame: "GEO",
    position: {
      type: "static",
      x: 0,
      y: 0,
      z: 0
    },
    rotation: {
      type: "euler",
      x: 0,
      y: 0,
      z: 0
    },
    scale: {
      type: "static",
      x: 1,
      y: 1,
      z: 1
    },
    source: {
      max_cached_groups: 5,
      prefetch_frames: 10,
      max_groups: 7,
      store_structure: {
        mode: "auto",
        group_pattern: "YYYY/MM/DD",
        chunk_cache_count: 5
      }
    },
    style: {
      material: {
        color: "#ffffff",
        emissive: "#000000",
        emissive_intensity: 1,
        metalness: 0,
        roughness: 1,
        opacity: 1,
        transparent: !1,
        side: "front",
        flat_shading: !1,
        wireframe: !1
      }
    },
    fov_subdivisions: 16
  },
  zarr_geolocated_mesh: {
    visible: !0,
    include_in_legend: !0,
    legend_display: "collapsed",
    reference_frame: "GEO",
    position: {
      type: "static",
      x: 0,
      y: 0,
      z: 0
    },
    rotation: {
      type: "euler",
      x: 0,
      y: 0,
      z: 0
    },
    scale: {
      type: "static",
      x: 1,
      y: 1,
      z: 1
    },
    source: {
      max_cached_groups: 5,
      prefetch_frames: 10,
      max_groups: 7,
      store_structure: {
        mode: "auto",
        group_pattern: "YYYY/MM/DD",
        chunk_cache_count: 5
      }
    },
    style: {
      opacity: 0.85,
      face_side: "front",
      normalize_winding: !1,
      depth_write: !1,
      wireframe: !1,
      debug_flat_alpha: !1
    },
    altitude_mode: "from_data",
    emission_altitude_km: 150,
    scan_reveal: {
      enabled: !1,
      trail_fade: {
        enabled: !1,
        min_opacity: 0.2
      }
    }
  },
  zarr_image_sequence: {
    visible: !0,
    legend_display: "collapsed",
    include_in_legend: !0,
    opacity: 1,
    source: {
      max_cached_groups: 5,
      prefetch_frames: 10,
      max_groups: 7,
      store_structure: {
        mode: "auto",
        group_pattern: "YYYY/MM/DD",
        chunk_cache_count: 5
      }
    }
  },
  zarr_interval_image: {
    visible: !0,
    legend_display: "collapsed",
    clip: "both",
    include_in_legend: !0,
    source: {
      max_cached_groups: 5,
      prefetch_frames: 10,
      max_groups: 7,
      store_structure: {
        mode: "auto",
        group_pattern: "YYYY/MM/DD",
        chunk_cache_count: 5
      }
    }
  }
}, wi = {
  subplot: {
    visible: !0,
    title_text_style: { text_color: "currentColor" },
    height: 1,
    bottom_margin: 20,
    legend_visible: !1,
    legend_position: "top-right",
    y_axis: {
      scale: "linear",
      label: "",
      tick_spacing: 50,
      tick_interval: 0,
      tick_format: "auto",
      ticks_visible: !0,
      annotation_visible: !0
    },
    xaxis_annotation_visible: !0,
    xaxis_ticks_visible: !0
  },
  pane: {
    // Margins are applied only to timeseries panes - see applyNestedDefaults
    margins: { top: 20, bottom: 20, left: 85, right: 30 }
  },
  plot_2d_pane: {
    margins: { top: 20, bottom: 40, left: 60, right: 20 }
  }
}, qb = /* @__PURE__ */ new Set(["static_annotation"]), jb = /* @__PURE__ */ new Set(["timeseries", "plot_2d"]);
function Zb(t) {
  if (!t || typeof t != "object" || Array.isArray(t))
    return { valid: !1, errors: [{ message: "Layout must be a JSON object" }] };
  const e = t, a = [];
  "version" in e ? e.version !== 1 && a.push({
    message: `Unsupported layout version: ${e.version} (expected 1)`
  }) : a.push({ message: 'Missing required property "version"' });
  for (const n of ["options", "time_domain", "sections"])
    n in e || a.push({ message: `Missing required property "${n}"` });
  return e.sections && typeof e.sections == "object" && ("center" in e.sections || a.push({ message: 'Missing required property "sections.center"' })), a.length > 0 ? { valid: !1, errors: a } : { valid: !0 };
}
class En {
  /**
   * Process layout data with structural validation.
   *
   * This is the single entry point for all layout processing (bundled, uploaded,
   * and external URL layouts). Full schema validation runs at build time via
   * validate:schemas; at runtime we only do a lightweight structural check.
   *
   * @param data - Raw layout JSON data
   */
  static processWithoutValidation(e) {
    const a = Zb(e);
    if (!a.valid)
      return { valid: !1, errors: a.errors };
    const n = JSON.parse(JSON.stringify(e));
    this.applyNestedDefaults(n);
    const i = this.validateFeatures(n);
    return i.length > 0 ? {
      valid: !1,
      errors: i.map((o) => ({ message: o }))
    } : {
      valid: !0,
      data: this.processLayoutData(n)
    };
  }
  /**
   * Apply default values to nested objects inside oneOf branches.
   * No schema validator runs at runtime, so defaults must be applied manually.
   * @param data - Validated layout data (mutated in place)
   */
  static applyNestedDefaults(e) {
    const a = (o, s) => {
      for (const [f, d] of Object.entries(s))
        o[f] === void 0 ? o[f] = JSON.parse(JSON.stringify(d)) : typeof d == "object" && d !== null && !Array.isArray(d) && typeof o[f] == "object" && o[f] !== null && !Array.isArray(o[f]) && a(
          o[f],
          d
        );
    }, n = (o) => Object.keys(o).length > 0, i = (o) => {
      const s = o.layer_type, f = Xb[s];
      if (f)
        if (qb.has(s)) {
          const { fetch_options: d, ...h } = f;
          a(o, h);
        } else
          a(o, f);
    }, c = (o) => {
      if (jb.has(o.pane_type)) {
        const s = o.pane_type === "plot_2d" ? wi.plot_2d_pane : wi.pane;
        n(s) && a(o, s);
      }
      if (o.pane_type === "timeseries" && Array.isArray(o.subplot_rows)) {
        for (const s of o.subplot_rows)
          if (n(wi.subplot) && a(s, wi.subplot), Array.isArray(s.visualisation_layers))
            for (const f of s.visualisation_layers)
              i(f);
      }
      if (o.pane_type !== "timeseries" && Array.isArray(o.visualisation_layers))
        for (const s of o.visualisation_layers)
          i(s);
    };
    e.sections && (e.sections.top ? e.sections.top.panes || (e.sections.top.panes = []) : e.sections.top = { height: 0, panes: [] }, e.sections.right ? e.sections.right.panes || (e.sections.right.panes = []) : e.sections.right = { width: 30, panes: [] }, e.sections.center?.pane && c(e.sections.center.pane), e.sections.right.panes.forEach((o) => {
      c(o);
    }), e.sections.top.panes.forEach((o) => {
      c(o);
    }));
  }
  /**
   * Validate layout against available features
   * Returns array of error messages for unavailable features
   * @param data - Validated layout data
   */
  static validateFeatures(e) {
    const a = [], n = (i, c) => {
      nf.isPaneTypeAvailable(i.pane_type) || a.push(
        `Layout requires '${i.pane_type}' pane (${c}) which is not available in this build. Available pane types: ${nf.availablePaneTypes.join(", ")}`
      );
    };
    return e.sections && (e.sections.center?.pane && n(e.sections.center.pane, "center"), e.sections.right?.panes?.forEach((i, c) => {
      n(i, `right[${c}]`);
    }), e.sections.top?.panes?.forEach((i, c) => {
      n(i, `top[${c}]`);
    })), a;
  }
  /**
   * Process layout data - assign unique IDs to subplots, layers, and panes
   * @param data - Validated layout data
   */
  static processLayoutData(e) {
    const a = JSON.parse(JSON.stringify(e)), n = (c) => {
      c?.forEach((o) => {
        o.id = crypto.randomUUID();
      });
    }, i = (c) => {
      c.id = crypto.randomUUID(), c.pane_type === "timeseries" ? c.subplot_rows?.forEach((o) => {
        o.id = crypto.randomUUID(), n(o.visualisation_layers);
      }) : (c.pane_type === "map_2d" || c.pane_type === "globe_3d" || c.pane_type === "image" || c.pane_type === "plot_2d") && n(c.visualisation_layers);
    };
    return a.sections && (a.sections.center?.pane && i(a.sections.center.pane), a.sections.right?.panes?.forEach((c) => {
      i(c);
    }), a.sections.top?.panes?.forEach((c) => {
      i(c);
    })), a;
  }
}
function je(t) {
  for (var e = t.length / 6 | 0, a = new Array(e), n = 0; n < e; ) a[n] = "#" + t.slice(n * 6, ++n * 6);
  return a;
}
const Nd = je("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), Jb = je("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"), Qb = je("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"), Kb = je("4269d0efb118ff725c6cc5b03ca951ff8ab7a463f297bbf59c6b4e9498a0"), Ld = je("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"), $b = je("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"), e2 = je("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"), Fd = je("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"), t2 = je("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"), a2 = je("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"), Rd = je("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function yc(t, e, a) {
  t.prototype = e.prototype = a, a.constructor = t;
}
function rs(t, e) {
  var a = Object.create(t.prototype);
  for (var n in e) a[n] = e[n];
  return a;
}
function Sn() {
}
var Lr = 0.7, hn = 1 / Lr, Qr = "\\s*([+-]?\\d+)\\s*", Kn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Aa = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", r2 = /^#([0-9a-f]{3,8})$/, n2 = new RegExp(`^rgb\\(${Qr},${Qr},${Qr}\\)$`), i2 = new RegExp(`^rgb\\(${Aa},${Aa},${Aa}\\)$`), c2 = new RegExp(`^rgba\\(${Qr},${Qr},${Qr},${Kn}\\)$`), o2 = new RegExp(`^rgba\\(${Aa},${Aa},${Aa},${Kn}\\)$`), s2 = new RegExp(`^hsl\\(${Kn},${Aa},${Aa}\\)$`), f2 = new RegExp(`^hsla\\(${Kn},${Aa},${Aa},${Kn}\\)$`), cf = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
yc(Sn, Fr, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: of,
  // Deprecated! Use color.formatHex.
  formatHex: of,
  formatHex8: l2,
  formatHsl: d2,
  formatRgb: sf,
  toString: sf
});
function of() {
  return this.rgb().formatHex();
}
function l2() {
  return this.rgb().formatHex8();
}
function d2() {
  return zd(this).formatHsl();
}
function sf() {
  return this.rgb().formatRgb();
}
function Fr(t) {
  var e, a;
  return t = (t + "").trim().toLowerCase(), (e = r2.exec(t)) ? (a = e[1].length, e = parseInt(e[1], 16), a === 6 ? ff(e) : a === 3 ? new Rt(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : a === 8 ? xi(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : a === 4 ? xi(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = n2.exec(t)) ? new Rt(e[1], e[2], e[3], 1) : (e = i2.exec(t)) ? new Rt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = c2.exec(t)) ? xi(e[1], e[2], e[3], e[4]) : (e = o2.exec(t)) ? xi(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = s2.exec(t)) ? uf(e[1], e[2] / 100, e[3] / 100, 1) : (e = f2.exec(t)) ? uf(e[1], e[2] / 100, e[3] / 100, e[4]) : cf.hasOwnProperty(t) ? ff(cf[t]) : t === "transparent" ? new Rt(NaN, NaN, NaN, 0) : null;
}
function ff(t) {
  return new Rt(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function xi(t, e, a, n) {
  return n <= 0 && (t = e = a = NaN), new Rt(t, e, a, n);
}
function Od(t) {
  return t instanceof Sn || (t = Fr(t)), t ? (t = t.rgb(), new Rt(t.r, t.g, t.b, t.opacity)) : new Rt();
}
function $n(t, e, a, n) {
  return arguments.length === 1 ? Od(t) : new Rt(t, e, a, n ?? 1);
}
function Rt(t, e, a, n) {
  this.r = +t, this.g = +e, this.b = +a, this.opacity = +n;
}
yc(Rt, $n, rs(Sn, {
  brighter(t) {
    return t = t == null ? hn : Math.pow(hn, t), new Rt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Lr : Math.pow(Lr, t), new Rt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rt(Mr(this.r), Mr(this.g), Mr(this.b), Ki(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: lf,
  // Deprecated! Use color.formatHex.
  formatHex: lf,
  formatHex8: u2,
  formatRgb: df,
  toString: df
}));
function lf() {
  return `#${kr(this.r)}${kr(this.g)}${kr(this.b)}`;
}
function u2() {
  return `#${kr(this.r)}${kr(this.g)}${kr(this.b)}${kr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function df() {
  const t = Ki(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Mr(this.r)}, ${Mr(this.g)}, ${Mr(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Ki(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Mr(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function kr(t) {
  return t = Mr(t), (t < 16 ? "0" : "") + t.toString(16);
}
function uf(t, e, a, n) {
  return n <= 0 ? t = e = a = NaN : a <= 0 || a >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new ca(t, e, a, n);
}
function zd(t) {
  if (t instanceof ca) return new ca(t.h, t.s, t.l, t.opacity);
  if (t instanceof Sn || (t = Fr(t)), !t) return new ca();
  if (t instanceof ca) return t;
  t = t.rgb();
  var e = t.r / 255, a = t.g / 255, n = t.b / 255, i = Math.min(e, a, n), c = Math.max(e, a, n), o = NaN, s = c - i, f = (c + i) / 2;
  return s ? (e === c ? o = (a - n) / s + (a < n) * 6 : a === c ? o = (n - e) / s + 2 : o = (e - a) / s + 4, s /= f < 0.5 ? c + i : 2 - c - i, o *= 60) : s = f > 0 && f < 1 ? 0 : o, new ca(o, s, f, t.opacity);
}
function h2(t, e, a, n) {
  return arguments.length === 1 ? zd(t) : new ca(t, e, a, n ?? 1);
}
function ca(t, e, a, n) {
  this.h = +t, this.s = +e, this.l = +a, this.opacity = +n;
}
yc(ca, h2, rs(Sn, {
  brighter(t) {
    return t = t == null ? hn : Math.pow(hn, t), new ca(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Lr : Math.pow(Lr, t), new ca(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, a = this.l, n = a + (a < 0.5 ? a : 1 - a) * e, i = 2 * a - n;
    return new Rt(
      Lc(t >= 240 ? t - 240 : t + 120, i, n),
      Lc(t, i, n),
      Lc(t < 120 ? t + 240 : t - 120, i, n),
      this.opacity
    );
  },
  clamp() {
    return new ca(hf(this.h), ki(this.s), ki(this.l), Ki(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Ki(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${hf(this.h)}, ${ki(this.s) * 100}%, ${ki(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function hf(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function ki(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Lc(t, e, a) {
  return (t < 60 ? e + (a - e) * t / 60 : t < 180 ? a : t < 240 ? e + (a - e) * (240 - t) / 60 : e) * 255;
}
const b2 = Math.PI / 180, m2 = 180 / Math.PI;
var Ud = -0.14861, ns = 1.78277, is = -0.29227, vc = -0.90649, ei = 1.97294, bf = ei * vc, mf = ei * ns, pf = ns * is - vc * Ud;
function p2(t) {
  if (t instanceof Tr) return new Tr(t.h, t.s, t.l, t.opacity);
  t instanceof Rt || (t = Od(t));
  var e = t.r / 255, a = t.g / 255, n = t.b / 255, i = (pf * n + bf * e - mf * a) / (pf + bf - mf), c = n - i, o = (ei * (a - i) - is * c) / vc, s = Math.sqrt(o * o + c * c) / (ei * i * (1 - i)), f = s ? Math.atan2(o, c) * m2 - 120 : NaN;
  return new Tr(f < 0 ? f + 360 : f, s, i, t.opacity);
}
function Ea(t, e, a, n) {
  return arguments.length === 1 ? p2(t) : new Tr(t, e, a, n ?? 1);
}
function Tr(t, e, a, n) {
  this.h = +t, this.s = +e, this.l = +a, this.opacity = +n;
}
yc(Tr, Ea, rs(Sn, {
  brighter(t) {
    return t = t == null ? hn : Math.pow(hn, t), new Tr(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Lr : Math.pow(Lr, t), new Tr(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = isNaN(this.h) ? 0 : (this.h + 120) * b2, e = +this.l, a = isNaN(this.s) ? 0 : this.s * e * (1 - e), n = Math.cos(t), i = Math.sin(t);
    return new Rt(
      255 * (e + a * (Ud * n + ns * i)),
      255 * (e + a * (is * n + vc * i)),
      255 * (e + a * (ei * n)),
      this.opacity
    );
  }
}));
function g2(t, e, a, n, i) {
  var c = t * t, o = c * t;
  return ((1 - 3 * t + 3 * c - o) * e + (4 - 6 * c + 3 * o) * a + (1 + 3 * t + 3 * c - 3 * o) * n + o * i) / 6;
}
function y2(t) {
  var e = t.length - 1;
  return function(a) {
    var n = a <= 0 ? a = 0 : a >= 1 ? (a = 1, e - 1) : Math.floor(a * e), i = t[n], c = t[n + 1], o = n > 0 ? t[n - 1] : 2 * i - c, s = n < e - 1 ? t[n + 2] : 2 * c - i;
    return g2((a - n / e) * e, o, i, c, s);
  };
}
const _c = (t) => () => t;
function Vd(t, e) {
  return function(a) {
    return t + a * e;
  };
}
function v2(t, e, a) {
  return t = Math.pow(t, a), e = Math.pow(e, a) - t, a = 1 / a, function(n) {
    return Math.pow(t + n * e, a);
  };
}
function _2(t, e) {
  var a = e - t;
  return a ? Vd(t, a > 180 || a < -180 ? a - 360 * Math.round(a / 360) : a) : _c(isNaN(t) ? e : t);
}
function w2(t) {
  return (t = +t) == 1 ? Kr : function(e, a) {
    return a - e ? v2(e, a, t) : _c(isNaN(e) ? a : e);
  };
}
function Kr(t, e) {
  var a = e - t;
  return a ? Vd(t, a) : _c(isNaN(t) ? e : t);
}
const ti = (function t(e) {
  var a = w2(e);
  function n(i, c) {
    var o = a((i = $n(i)).r, (c = $n(c)).r), s = a(i.g, c.g), f = a(i.b, c.b), d = Kr(i.opacity, c.opacity);
    return function(h) {
      return i.r = o(h), i.g = s(h), i.b = f(h), i.opacity = d(h), i + "";
    };
  }
  return n.gamma = t, n;
})(1);
function x2(t) {
  return function(e) {
    var a = e.length, n = new Array(a), i = new Array(a), c = new Array(a), o, s;
    for (o = 0; o < a; ++o)
      s = $n(e[o]), n[o] = s.r || 0, i[o] = s.g || 0, c[o] = s.b || 0;
    return n = t(n), i = t(i), c = t(c), s.opacity = 1, function(f) {
      return s.r = n(f), s.g = i(f), s.b = c(f), s + "";
    };
  };
}
var k2 = x2(y2);
function S2(t, e) {
  e || (e = []);
  var a = t ? Math.min(e.length, t.length) : 0, n = e.slice(), i;
  return function(c) {
    for (i = 0; i < a; ++i) n[i] = t[i] * (1 - c) + e[i] * c;
    return n;
  };
}
function M2(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function T2(t, e) {
  var a = e ? e.length : 0, n = t ? Math.min(a, t.length) : 0, i = new Array(n), c = new Array(a), o;
  for (o = 0; o < n; ++o) i[o] = ui(t[o], e[o]);
  for (; o < a; ++o) c[o] = e[o];
  return function(s) {
    for (o = 0; o < n; ++o) c[o] = i[o](s);
    return c;
  };
}
function D2(t, e) {
  var a = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(n) {
    return a.setTime(t * (1 - n) + e * n), a;
  };
}
function ia(t, e) {
  return t = +t, e = +e, function(a) {
    return t * (1 - a) + e * a;
  };
}
function A2(t, e) {
  var a = {}, n = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? a[i] = ui(t[i], e[i]) : n[i] = e[i];
  return function(c) {
    for (i in a) n[i] = a[i](c);
    return n;
  };
}
var bo = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Fc = new RegExp(bo.source, "g");
function C2(t) {
  return function() {
    return t;
  };
}
function P2(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Yd(t, e) {
  var a = bo.lastIndex = Fc.lastIndex = 0, n, i, c, o = -1, s = [], f = [];
  for (t = t + "", e = e + ""; (n = bo.exec(t)) && (i = Fc.exec(e)); )
    (c = i.index) > a && (c = e.slice(a, c), s[o] ? s[o] += c : s[++o] = c), (n = n[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, f.push({ i: o, x: ia(n, i) })), a = Fc.lastIndex;
  return a < e.length && (c = e.slice(a), s[o] ? s[o] += c : s[++o] = c), s.length < 2 ? f[0] ? P2(f[0].x) : C2(e) : (e = f.length, function(d) {
    for (var h = 0, b; h < e; ++h) s[(b = f[h]).i] = b.x(d);
    return s.join("");
  });
}
function ui(t, e) {
  var a = typeof e, n;
  return e == null || a === "boolean" ? _c(e) : (a === "number" ? ia : a === "string" ? (n = Fr(e)) ? (e = n, ti) : Yd : e instanceof Fr ? ti : e instanceof Date ? D2 : M2(e) ? S2 : Array.isArray(e) ? T2 : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? A2 : ia)(t, e);
}
function Hd(t, e) {
  return t = +t, e = +e, function(a) {
    return Math.round(t * (1 - a) + e * a);
  };
}
var gf = 180 / Math.PI, mo = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Bd(t, e, a, n, i, c) {
  var o, s, f;
  return (o = Math.sqrt(t * t + e * e)) && (t /= o, e /= o), (f = t * a + e * n) && (a -= t * f, n -= e * f), (s = Math.sqrt(a * a + n * n)) && (a /= s, n /= s, f /= s), t * n < e * a && (t = -t, e = -e, f = -f, o = -o), {
    translateX: i,
    translateY: c,
    rotate: Math.atan2(e, t) * gf,
    skewX: Math.atan(f) * gf,
    scaleX: o,
    scaleY: s
  };
}
var Si;
function E2(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? mo : Bd(e.a, e.b, e.c, e.d, e.e, e.f);
}
function I2(t) {
  return t == null || (Si || (Si = document.createElementNS("http://www.w3.org/2000/svg", "g")), Si.setAttribute("transform", t), !(t = Si.transform.baseVal.consolidate())) ? mo : (t = t.matrix, Bd(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Wd(t, e, a, n) {
  function i(d) {
    return d.length ? d.pop() + " " : "";
  }
  function c(d, h, b, m, p, g) {
    if (d !== b || h !== m) {
      var v = p.push("translate(", null, e, null, a);
      g.push({ i: v - 4, x: ia(d, b) }, { i: v - 2, x: ia(h, m) });
    } else (b || m) && p.push("translate(" + b + e + m + a);
  }
  function o(d, h, b, m) {
    d !== h ? (d - h > 180 ? h += 360 : h - d > 180 && (d += 360), m.push({ i: b.push(i(b) + "rotate(", null, n) - 2, x: ia(d, h) })) : h && b.push(i(b) + "rotate(" + h + n);
  }
  function s(d, h, b, m) {
    d !== h ? m.push({ i: b.push(i(b) + "skewX(", null, n) - 2, x: ia(d, h) }) : h && b.push(i(b) + "skewX(" + h + n);
  }
  function f(d, h, b, m, p, g) {
    if (d !== b || h !== m) {
      var v = p.push(i(p) + "scale(", null, ",", null, ")");
      g.push({ i: v - 4, x: ia(d, b) }, { i: v - 2, x: ia(h, m) });
    } else (b !== 1 || m !== 1) && p.push(i(p) + "scale(" + b + "," + m + ")");
  }
  return function(d, h) {
    var b = [], m = [];
    return d = t(d), h = t(h), c(d.translateX, d.translateY, h.translateX, h.translateY, b, m), o(d.rotate, h.rotate, b, m), s(d.skewX, h.skewX, b, m), f(d.scaleX, d.scaleY, h.scaleX, h.scaleY, b, m), d = h = null, function(p) {
      for (var g = -1, v = m.length, k; ++g < v; ) b[(k = m[g]).i] = k.x(p);
      return b.join("");
    };
  };
}
var N2 = Wd(E2, "px, ", "px)", "deg)"), L2 = Wd(I2, ", ", ")", ")"), F2 = 1e-12;
function yf(t) {
  return ((t = Math.exp(t)) + 1 / t) / 2;
}
function R2(t) {
  return ((t = Math.exp(t)) - 1 / t) / 2;
}
function O2(t) {
  return ((t = Math.exp(2 * t)) - 1) / (t + 1);
}
const Gd = (function t(e, a, n) {
  function i(c, o) {
    var s = c[0], f = c[1], d = c[2], h = o[0], b = o[1], m = o[2], p = h - s, g = b - f, v = p * p + g * g, k, S;
    if (v < F2)
      S = Math.log(m / d) / e, k = function(H) {
        return [
          s + H * p,
          f + H * g,
          d * Math.exp(e * H * S)
        ];
      };
    else {
      var N = Math.sqrt(v), I = (m * m - d * d + n * v) / (2 * d * a * N), x = (m * m - d * d - n * v) / (2 * m * a * N), w = Math.log(Math.sqrt(I * I + 1) - I), y = Math.log(Math.sqrt(x * x + 1) - x);
      S = (y - w) / e, k = function(H) {
        var B = H * S, V = yf(w), X = d / (a * N) * (V * O2(e * B + w) - R2(w));
        return [
          s + X * p,
          f + X * g,
          d * V / yf(e * B + w)
        ];
      };
    }
    return k.duration = S * 1e3 * e / Math.SQRT2, k;
  }
  return i.rho = function(c) {
    var o = Math.max(1e-3, +c), s = o * o, f = s * s;
    return t(o, s, f);
  }, i;
})(Math.SQRT2, 2, 4);
function Xd(t) {
  return (function e(a) {
    a = +a;
    function n(i, c) {
      var o = t((i = Ea(i)).h, (c = Ea(c)).h), s = Kr(i.s, c.s), f = Kr(i.l, c.l), d = Kr(i.opacity, c.opacity);
      return function(h) {
        return i.h = o(h), i.s = s(h), i.l = f(Math.pow(h, a)), i.opacity = d(h), i + "";
      };
    }
    return n.gamma = e, n;
  })(1);
}
Xd(_2);
var cs = Xd(Kr);
function z2(t, e) {
  e === void 0 && (e = t, t = ui);
  for (var a = 0, n = e.length - 1, i = e[0], c = new Array(n < 0 ? 0 : n); a < n; ) c[a] = t(i, i = e[++a]);
  return function(o) {
    var s = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return c[s](o - s);
  };
}
const ot = (t) => k2(t[t.length - 1]);
var qd = new Array(3).concat(
  "d8b365f5f5f55ab4ac",
  "a6611adfc27d80cdc1018571",
  "a6611adfc27df5f5f580cdc1018571",
  "8c510ad8b365f6e8c3c7eae55ab4ac01665e",
  "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e",
  "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e",
  "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e",
  "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30",
  "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30"
).map(je);
const U2 = ot(qd);
var jd = new Array(3).concat(
  "af8dc3f7f7f77fbf7b",
  "7b3294c2a5cfa6dba0008837",
  "7b3294c2a5cff7f7f7a6dba0008837",
  "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837",
  "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837",
  "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837",
  "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837",
  "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b",
  "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b"
).map(je);
const V2 = ot(jd);
var Zd = new Array(3).concat(
  "e9a3c9f7f7f7a1d76a",
  "d01c8bf1b6dab8e1864dac26",
  "d01c8bf1b6daf7f7f7b8e1864dac26",
  "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221",
  "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221",
  "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221",
  "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221",
  "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419",
  "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419"
).map(je);
const Y2 = ot(Zd);
var Jd = new Array(3).concat(
  "998ec3f7f7f7f1a340",
  "5e3c99b2abd2fdb863e66101",
  "5e3c99b2abd2f7f7f7fdb863e66101",
  "542788998ec3d8daebfee0b6f1a340b35806",
  "542788998ec3d8daebf7f7f7fee0b6f1a340b35806",
  "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806",
  "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806",
  "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08",
  "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08"
).map(je);
const H2 = ot(Jd);
var Qd = new Array(3).concat(
  "ef8a62f7f7f767a9cf",
  "ca0020f4a58292c5de0571b0",
  "ca0020f4a582f7f7f792c5de0571b0",
  "b2182bef8a62fddbc7d1e5f067a9cf2166ac",
  "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac",
  "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac",
  "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac",
  "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061",
  "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061"
).map(je);
const B2 = ot(Qd);
var Kd = new Array(3).concat(
  "ef8a62ffffff999999",
  "ca0020f4a582bababa404040",
  "ca0020f4a582ffffffbababa404040",
  "b2182bef8a62fddbc7e0e0e09999994d4d4d",
  "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d",
  "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d",
  "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d",
  "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a",
  "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a"
).map(je);
const W2 = ot(Kd);
var $d = new Array(3).concat(
  "fc8d59ffffbf91bfdb",
  "d7191cfdae61abd9e92c7bb6",
  "d7191cfdae61ffffbfabd9e92c7bb6",
  "d73027fc8d59fee090e0f3f891bfdb4575b4",
  "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4",
  "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4",
  "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4",
  "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695",
  "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695"
).map(je);
const G2 = ot($d);
var eu = new Array(3).concat(
  "fc8d59ffffbf91cf60",
  "d7191cfdae61a6d96a1a9641",
  "d7191cfdae61ffffbfa6d96a1a9641",
  "d73027fc8d59fee08bd9ef8b91cf601a9850",
  "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850",
  "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850",
  "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850",
  "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837",
  "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837"
).map(je);
const X2 = ot(eu);
var tu = new Array(3).concat(
  "fc8d59ffffbf99d594",
  "d7191cfdae61abdda42b83ba",
  "d7191cfdae61ffffbfabdda42b83ba",
  "d53e4ffc8d59fee08be6f59899d5943288bd",
  "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
  "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
  "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
  "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
  "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
).map(je);
const q2 = ot(tu);
var au = new Array(3).concat(
  "e5f5f999d8c92ca25f",
  "edf8fbb2e2e266c2a4238b45",
  "edf8fbb2e2e266c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b"
).map(je);
const ru = ot(au);
var nu = new Array(3).concat(
  "e0ecf49ebcda8856a7",
  "edf8fbb3cde38c96c688419d",
  "edf8fbb3cde38c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b"
).map(je);
const iu = ot(nu);
var cu = new Array(3).concat(
  "e0f3dba8ddb543a2ca",
  "f0f9e8bae4bc7bccc42b8cbe",
  "f0f9e8bae4bc7bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081"
).map(je);
const ou = ot(cu);
var su = new Array(3).concat(
  "fee8c8fdbb84e34a33",
  "fef0d9fdcc8afc8d59d7301f",
  "fef0d9fdcc8afc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000"
).map(je);
const fu = ot(su);
var lu = new Array(3).concat(
  "ece2f0a6bddb1c9099",
  "f6eff7bdc9e167a9cf02818a",
  "f6eff7bdc9e167a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636"
).map(je);
const du = ot(lu);
var uu = new Array(3).concat(
  "ece7f2a6bddb2b8cbe",
  "f1eef6bdc9e174a9cf0570b0",
  "f1eef6bdc9e174a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858"
).map(je);
const hu = ot(uu);
var bu = new Array(3).concat(
  "e7e1efc994c7dd1c77",
  "f1eef6d7b5d8df65b0ce1256",
  "f1eef6d7b5d8df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f"
).map(je);
const mu = ot(bu);
var pu = new Array(3).concat(
  "fde0ddfa9fb5c51b8a",
  "feebe2fbb4b9f768a1ae017e",
  "feebe2fbb4b9f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a"
).map(je);
const gu = ot(pu);
var yu = new Array(3).concat(
  "edf8b17fcdbb2c7fb8",
  "ffffcca1dab441b6c4225ea8",
  "ffffcca1dab441b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58"
).map(je);
const vu = ot(yu);
var _u = new Array(3).concat(
  "f7fcb9addd8e31a354",
  "ffffccc2e69978c679238443",
  "ffffccc2e69978c67931a354006837",
  "ffffccd9f0a3addd8e78c67931a354006837",
  "ffffccd9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529"
).map(je);
const wu = ot(_u);
var xu = new Array(3).concat(
  "fff7bcfec44fd95f0e",
  "ffffd4fed98efe9929cc4c02",
  "ffffd4fed98efe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506"
).map(je);
const ku = ot(xu);
var Su = new Array(3).concat(
  "ffeda0feb24cf03b20",
  "ffffb2fecc5cfd8d3ce31a1c",
  "ffffb2fecc5cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026"
).map(je);
const Mu = ot(Su);
var Tu = new Array(3).concat(
  "deebf79ecae13182bd",
  "eff3ffbdd7e76baed62171b5",
  "eff3ffbdd7e76baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
).map(je);
const Du = ot(Tu);
var Au = new Array(3).concat(
  "e5f5e0a1d99b31a354",
  "edf8e9bae4b374c476238b45",
  "edf8e9bae4b374c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
).map(je);
const Cu = ot(Au);
var Pu = new Array(3).concat(
  "f0f0f0bdbdbd636363",
  "f7f7f7cccccc969696525252",
  "f7f7f7cccccc969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000"
).map(je);
const Eu = ot(Pu);
var Iu = new Array(3).concat(
  "efedf5bcbddc756bb1",
  "f2f0f7cbc9e29e9ac86a51a3",
  "f2f0f7cbc9e29e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
).map(je);
const Nu = ot(Iu);
var Lu = new Array(3).concat(
  "fee0d2fc9272de2d26",
  "fee5d9fcae91fb6a4acb181d",
  "fee5d9fcae91fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
).map(je);
const Fu = ot(Lu);
var Ru = new Array(3).concat(
  "fee6cefdae6be6550d",
  "feeddefdbe85fd8d3cd94701",
  "feeddefdbe85fd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704"
).map(je);
const Ou = ot(Ru);
function zu(t) {
  return t = Math.max(0, Math.min(1, t)), "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - t * (35.34 - t * (2381.73 - t * (6402.7 - t * (7024.72 - t * 2710.57))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + t * (170.73 + t * (52.82 - t * (131.46 - t * (176.58 - t * 67.37))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + t * (442.36 - t * (2482.43 - t * (6167.24 - t * (6614.94 - t * 2475.67))))))) + ")";
}
const Uu = cs(Ea(300, 0.5, 0), Ea(-240, 0.5, 1));
var Vu = cs(Ea(-100, 0.75, 0.35), Ea(80, 1.5, 0.8)), Yu = cs(Ea(260, 0.75, 0.35), Ea(80, 1.5, 0.8)), Mi = Ea();
function Hu(t) {
  (t < 0 || t > 1) && (t -= Math.floor(t));
  var e = Math.abs(t - 0.5);
  return Mi.h = 360 * t - 100, Mi.s = 1.5 - 1.5 * e, Mi.l = 0.8 - 0.9 * e, Mi + "";
}
var Ti = $n(), j2 = Math.PI / 3, Z2 = Math.PI * 2 / 3;
function Bu(t) {
  var e;
  return t = (0.5 - t) * Math.PI, Ti.r = 255 * (e = Math.sin(t)) * e, Ti.g = 255 * (e = Math.sin(t + j2)) * e, Ti.b = 255 * (e = Math.sin(t + Z2)) * e, Ti + "";
}
function Wu(t) {
  return t = Math.max(0, Math.min(1, t)), "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + t * (1172.33 - t * (10793.56 - t * (33300.12 - t * (38394.49 - t * 14825.05))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + t * (557.33 + t * (1225.33 - t * (3574.96 - t * (1073.77 + t * 707.56))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + t * (3211.1 - t * (15327.97 - t * (27814 - t * (22569.18 - t * 6838.66))))))) + ")";
}
function wc(t) {
  var e = t.length;
  return function(a) {
    return t[Math.max(0, Math.min(e - 1, Math.floor(a * e)))];
  };
}
const $i = wc(je("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
var Gu = wc(je("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")), Xu = wc(je("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")), qu = wc(je("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
const vf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  interpolateBlues: Du,
  interpolateBrBG: U2,
  interpolateBuGn: ru,
  interpolateBuPu: iu,
  interpolateCividis: zu,
  interpolateCool: Yu,
  interpolateCubehelixDefault: Uu,
  interpolateGnBu: ou,
  interpolateGreens: Cu,
  interpolateGreys: Eu,
  interpolateInferno: Xu,
  interpolateMagma: Gu,
  interpolateOrRd: fu,
  interpolateOranges: Ou,
  interpolatePRGn: V2,
  interpolatePiYG: Y2,
  interpolatePlasma: qu,
  interpolatePuBu: hu,
  interpolatePuBuGn: du,
  interpolatePuOr: H2,
  interpolatePuRd: mu,
  interpolatePurples: Nu,
  interpolateRainbow: Hu,
  interpolateRdBu: B2,
  interpolateRdGy: W2,
  interpolateRdPu: gu,
  interpolateRdYlBu: G2,
  interpolateRdYlGn: X2,
  interpolateReds: Fu,
  interpolateSinebow: Bu,
  interpolateSpectral: q2,
  interpolateTurbo: Wu,
  interpolateViridis: $i,
  interpolateWarm: Vu,
  interpolateYlGn: wu,
  interpolateYlGnBu: vu,
  interpolateYlOrBr: ku,
  interpolateYlOrRd: Mu,
  schemeAccent: Jb,
  schemeBlues: Tu,
  schemeBrBG: qd,
  schemeBuGn: au,
  schemeBuPu: nu,
  schemeCategory10: Nd,
  schemeDark2: Qb,
  schemeGnBu: cu,
  schemeGreens: Au,
  schemeGreys: Pu,
  schemeObservable10: Kb,
  schemeOrRd: su,
  schemeOranges: Ru,
  schemePRGn: jd,
  schemePaired: Ld,
  schemePastel1: $b,
  schemePastel2: e2,
  schemePiYG: Zd,
  schemePuBu: uu,
  schemePuBuGn: lu,
  schemePuOr: Jd,
  schemePuRd: bu,
  schemePurples: Iu,
  schemeRdBu: Qd,
  schemeRdGy: Kd,
  schemeRdPu: pu,
  schemeRdYlBu: $d,
  schemeRdYlGn: eu,
  schemeReds: Lu,
  schemeSet1: Fd,
  schemeSet2: t2,
  schemeSet3: a2,
  schemeSpectral: tu,
  schemeTableau10: Rd,
  schemeYlGn: _u,
  schemeYlGnBu: yu,
  schemeYlOrBr: xu,
  schemeYlOrRd: Su
}, Symbol.toStringTag, { value: "Module" }));
function po(t) {
  return typeof t == "object" && t !== null && "driver_type" in t && t.driver_type === "color" && "value" in t && typeof t.value == "string";
}
function J2(t) {
  return typeof t == "object" && t !== null && "driver_type" in t && t.driver_type === "color_scale" && "color_map" in t && "color_map_domain" in t;
}
function Q2(t) {
  return po(t) ? t.value : (J2(t), t);
}
function Ca(t) {
  return typeof t == "object" && t !== null && "$driver" in t && typeof t.$driver == "string";
}
function Di(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t) && Object.prototype.toString.call(t) === "[object Object]";
}
function ju(t, e) {
  if (!Di(t) || !Di(e))
    return e;
  const a = { ...t };
  for (const n of Object.keys(e)) {
    const i = e[n], c = a[n];
    Di(c) && Di(i) ? a[n] = ju(
      c,
      i
    ) : i !== void 0 && (a[n] = i);
  }
  return a;
}
function aa(t, e) {
  if (!Ca(t))
    return t;
  const { $driver: a, ...n } = t, i = e?.[a];
  if (i === void 0)
    return e && Object.keys(e).length > 0 && console.warn(`Driver "${a}" not found in layout drivers`), n;
  const c = Q2(i);
  return Object.keys(n).length === 0 ? c : ju(
    c,
    n
  );
}
function qa(t, e, a = "currentColor") {
  if (t == null)
    return a;
  if (typeof t == "string")
    return t;
  if (Ca(t)) {
    const n = aa(t, e);
    return typeof n == "string" ? n : po(n) ? n.value : a;
  }
  return po(t) ? t.value : a;
}
const _f = {
  category10: Nd,
  tableau10: Rd,
  paired: Ld,
  set1: Fd
}, wf = "category10", xf = "#888888";
function sr(t, e, a) {
  if (t.type !== "hapi_multi_dataset") return null;
  const n = t.server;
  let i;
  if (Ca(n) ? (a?.onDriverAccess?.(n.$driver, "source.server"), i = aa(n, e)) : i = n, typeof i != "string" || !i) return null;
  const c = t.dataset_template;
  let o;
  if (Ca(c) ? (a?.onDriverAccess?.(c.$driver, "source.dataset_template"), o = aa(c, e)) : o = c, typeof o != "string" || !o) return null;
  const s = t.ids;
  let f;
  return Ca(s) ? (a?.onDriverAccess?.(s.$driver, "source.ids"), f = aa(s, e)) : f = s, !Array.isArray(f) || f.length === 0 ? null : { server: i, dataset_template: o, ids: f };
}
function K2(t) {
  return t.type === "hapi_multi_dataset";
}
function $2(t) {
  return t.type === "hapi_multi_parameter";
}
function e6(t) {
  return t?.type === "hapi_multi_dataset" || t?.type === "hapi_multi_parameter";
}
function t6(t) {
  if (t?.type === "hapi_multi_dataset" || t?.type === "hapi_multi_parameter") return t.instance_config;
}
function a6(t, e) {
  return t ? t.type === "hapi_multi_dataset" ? sr(t, e)?.ids ?? null : t.type === "hapi_multi_parameter" ? fs(t, e) : null : null;
}
function os(t) {
  if (t?.colors?.apply_to !== void 0)
    return t.colors.apply_to;
  if (t?.enabled === !1)
    return [];
}
function ai(t, e) {
  return t?.color ? t.colorApplyTo === void 0 ? !0 : t.colorApplyTo.includes(e) : !1;
}
function r6(t, e) {
  switch (e) {
    case "upper":
      return t.toUpperCase();
    case "capitalize":
      return t.charAt(0).toUpperCase() + t.slice(1);
    default:
      return t;
  }
}
function Zu(t, e) {
  const a = t?.labels;
  if (a?.dict?.[e] !== void 0)
    return a.dict[e];
  const n = r6(e, a?.case);
  return a?.mode === "template" && a?.template ? a.template.replace(/\{id\}/g, n) : n;
}
function ss(t, e, a, n) {
  const i = t?.colors;
  if (i?.dict?.[e] !== void 0) {
    const s = i.dict[e];
    return typeof s == "object" && s !== null && "$driver" in s ? aa(s, n) ?? xf : s;
  }
  const c = i?.colormap ?? wf, o = _f[c] ?? _f[wf];
  return !o || o.length === 0 ? xf : o[a % o.length];
}
function Ju(t, e) {
  const n = t?.label_offsets?.[e];
  if (n)
    return {
      x: n.x ?? 0,
      y: n.y ?? 0,
      z: n.z ?? 0
    };
}
function fs(t, e, a) {
  if (t.type !== "hapi_multi_parameter") return null;
  const n = t.parameters;
  let i;
  return Ca(n) ? (a?.onDriverAccess?.(n.$driver, "source.parameters"), i = aa(n, e)) : i = n, !Array.isArray(i) || i.length === 0 ? null : i;
}
function n6(t, e) {
  const a = fs(t, e);
  if (!a) return [];
  const { server: n, dataset: i, instance_config: c, mapping_dimension: o } = t, s = o ?? "value", f = a.length;
  return a.map((d, h) => ({
    type: "hapi_data",
    server: n,
    dataset: i,
    // All parameters are fetched together in one HAPI request
    parameters: a,
    _instanceId: d,
    _instanceIndex: h,
    _instanceCount: f,
    _instanceLabel: Zu(c, d),
    _instanceColor: ss(c, d, h, e),
    _colorApplyTo: os(c),
    _instanceLabelOffset: Ju(c, d),
    _parameterMappingOverride: { [s]: d }
  }));
}
function i6(t, e) {
  const a = sr(t, e);
  if (!a) return [];
  const { server: n, dataset_template: i, ids: c } = a, { parameters: o, instance_config: s } = t, f = c.length;
  return c.map((d, h) => ({
    type: "hapi_data",
    server: n,
    dataset: i.replace(/\{id\}/g, d),
    parameters: o,
    _instanceId: d,
    _instanceIndex: h,
    _instanceCount: f,
    _instanceLabel: Zu(s, d),
    _instanceColor: ss(s, d, h, e),
    _colorApplyTo: os(s),
    _instanceLabelOffset: Ju(s, d)
  }));
}
function Qu(t, e) {
  return K2(t) ? i6(t, e) : $2(t) ? n6(t, e) : [t];
}
function pa(t) {
  return "_instanceId" in t;
}
function Rc(t) {
  const e = t._colorApplyTo, a = e === void 0 || e.length > 0;
  return {
    id: t._instanceId,
    index: t._instanceIndex,
    count: t._instanceCount,
    label: t._instanceLabel,
    color: a ? t._instanceColor : null,
    colorApplyTo: e,
    labelOffset: t._instanceLabelOffset
  };
}
function ya(t) {
  return t.pane_type === "map_2d" || t.pane_type === "globe_3d" || t.pane_type === "image" || t.pane_type === "plot_2d";
}
function Jr(t, e) {
  if (!t?.sections) return;
  const a = t.sections.center?.pane;
  if (a?.pane_type === "timeseries")
    for (let i = 0; i < a.subplot_rows.length; i++) {
      const c = a.subplot_rows[i];
      for (let o = 0; o < c.visualisation_layers.length; o++) {
        const s = c.visualisation_layers[o];
        e(s, {
          paneType: "timeseries",
          subplotIndex: i,
          subplotId: c.id,
          layerIndex: o
        });
      }
    }
  const n = [
    { section: "right", panes: t.sections.right?.panes ?? [] },
    { section: "top", panes: t.sections.top?.panes ?? [] }
  ];
  for (const { section: i, panes: c } of n)
    for (let o = 0; o < c.length; o++) {
      const s = c[o];
      if (ya(s)) {
        const f = s.visualisation_layers ?? [];
        for (let d = 0; d < f.length; d++)
          e(f[d], {
            paneType: s.pane_type,
            paneId: s.id,
            section: i,
            paneIndex: o,
            layerIndex: d
          });
      }
    }
}
function Ku(t, e) {
  if (!t?.sections) return;
  const a = [
    ...t.sections.right?.panes ?? [],
    ...t.sections.top?.panes ?? []
  ];
  for (const n of a) {
    if (n.pane_type !== "globe_3d") continue;
    const i = n.reference_frame_definitions;
    if (i)
      for (const [c, o] of Object.entries(i)) {
        if (!o) continue;
        const s = o;
        "frame_type" in s || !("type" in s) || !s.source || e(s.source, c);
      }
  }
}
function c6(t, e) {
  const a = /* @__PURE__ */ new Set(), n = [], i = (s, f) => {
    const d = `${s}:${f}`;
    a.has(d) || (a.add(d), n.push({ server: s, dataset: f }));
  };
  Jr(t, (s) => {
    if (!s.source) return;
    const f = s.source.type;
    if ((f === "hapi_data" || f === "hapi_info_metadata") && s.source.server && s.source.dataset && i(s.source.server, s.source.dataset), f === "hapi_multi_dataset") {
      const d = sr(s.source, e);
      if (d)
        for (const h of d.ids) {
          const b = d.dataset_template.replace(/\{id\}/g, h);
          i(d.server, b);
        }
    }
    f === "hapi_multi_parameter" && s.source.server && s.source.dataset && i(s.source.server, s.source.dataset);
  }), Ku(t, (s) => {
    if (s.type === "hapi_data" && s.server && s.dataset && i(s.server, s.dataset), s.type === "hapi_multi_dataset") {
      const f = sr(s, e);
      if (f)
        for (const d of f.ids) {
          const h = f.dataset_template.replace(/\{id\}/g, d);
          i(f.server, h);
        }
    }
  });
  const c = t?.data_providers?.location_providers;
  if (c)
    for (const s of c) {
      if ("provider_type" in s && s.provider_type === "grid_location" || !("source" in s) || !s.source) continue;
      const f = s.source.type;
      if (f === "hapi_data" && s.source.server && s.source.dataset && i(s.source.server, s.source.dataset), f === "hapi_multi_dataset") {
        const d = sr(s.source, e);
        if (d)
          for (const h of d.ids) {
            const b = d.dataset_template.replace(/\{id\}/g, h);
            i(d.server, b);
          }
      }
    }
  const o = t?.data_providers?.model_input_providers;
  if (o) {
    for (const s of o)
      if (!(s.mode === "static" || !s.sources))
        for (const f of s.sources)
          f.server && f.dataset && i(f.server, f.dataset);
  }
  return n;
}
function o6(t) {
  const e = /* @__PURE__ */ new Set(), a = [], n = (f, d, h) => {
    !f || e.has(f) || (e.add(f), a.push({ url: f, layerType: d, paneId: h }));
  }, i = (f, d) => {
    const h = f.layer_type ?? "", b = f.source;
    if (b?.type === "zarr" || b?.url) {
      const p = b?.url;
      p && n(p, h, d);
    }
    const m = f.textures;
    if (m)
      for (const p of m) {
        const g = p.source;
        typeof g == "object" && g?.type === "zarr" && g?.url && n(g.url, h, d);
      }
  }, c = (f, d) => {
    if (f)
      for (const h of f)
        i(h, d);
  };
  if (!t?.sections) return a;
  const o = t.sections.center?.pane;
  if (o?.pane_type === "timeseries") {
    const f = o.id ?? "center";
    for (const d of o.subplot_rows)
      c(d.visualisation_layers, f);
  }
  const s = [
    ...t.sections.right?.panes ?? [],
    ...t.sections.top?.panes ?? []
  ];
  for (const f of s)
    ya(f) && c(f.visualisation_layers, f.id);
  return a;
}
function s6(t) {
  const e = /* @__PURE__ */ new Set(), a = [], n = (f, d, h, b) => {
    !f || e.has(f) || (e.add(f), a.push({ url: f, textureType: d, layerType: h, paneId: b }));
  }, i = (f, d) => {
    const h = f.layer_type ?? "", b = f.textures;
    if (b)
      for (const m of b) {
        const p = m.type ?? "", g = m.source;
        typeof g == "object" && g?.type === "static_image" && g?.url && n(g.url, p, h, d);
      }
  }, c = (f, d) => {
    if (f)
      for (const h of f)
        i(h, d);
  };
  if (!t?.sections) return a;
  const o = t.sections.center?.pane;
  if (o?.pane_type === "timeseries") {
    const f = o.id ?? "center";
    for (const d of o.subplot_rows)
      c(d.visualisation_layers, f);
  }
  const s = [
    ...t.sections.right?.panes ?? [],
    ...t.sections.top?.panes ?? []
  ];
  for (const f of s)
    ya(f) && c(f.visualisation_layers, f.id);
  return a;
}
function f6(t, e, a) {
  if (e.length === 0) return;
  let n = t;
  for (let i = 0; i < e.length - 1; i++)
    (typeof n[e[i]] != "object" || n[e[i]] === null) && (n[e[i]] = {}), n = n[e[i]];
  n[e[e.length - 1]] = a;
}
function In(t, e, a) {
  const n = e.split(".");
  if (n.length === 1) {
    t[e] = a;
    return;
  }
  let i = t;
  for (let c = 0; c < n.length - 1; c++) {
    const o = n[c];
    (typeof i[o] != "object" || i[o] === null) && (i[o] = {}), i = i[o];
  }
  i[n[n.length - 1]] = a;
}
function l6(t) {
  return (t?.data_providers?.location_providers ?? []).filter(
    (a) => !("provider_type" in a) || a.provider_type !== "grid_location" && a.provider_type !== "station_location" && a.provider_type !== "static_location"
  );
}
function d6(t) {
  return t?.data_providers?.location_providers ?? [];
}
function u6(t) {
  return (t?.data_providers?.location_providers ?? []).filter(
    (a) => "provider_type" in a && a.provider_type === "grid_location"
  );
}
function h6(t) {
  return (t?.data_providers?.location_providers ?? []).filter(
    (a) => "provider_type" in a && a.provider_type === "station_location"
  );
}
function b6(t) {
  return (t?.data_providers?.location_providers ?? []).filter(
    (a) => "provider_type" in a && a.provider_type === "static_location"
  );
}
function m6(t) {
  return t?.data_providers?.frame_providers ?? [];
}
function p6(t) {
  return t?.data_providers?.model_input_providers ?? [];
}
function g6(t) {
  return t?.data_providers?.field_line_providers ?? [];
}
function kf(t) {
  const e = JSON.parse(JSON.stringify(t));
  function a(i) {
    for (const c of i) {
      const o = c;
      if (delete o.id, o.visualisation_layers && Array.isArray(o.visualisation_layers))
        for (const s of o.visualisation_layers)
          delete s.id;
    }
  }
  function n(i) {
    for (const c of i) {
      const o = c;
      if (delete o.id, o.visualisation_layers && Array.isArray(o.visualisation_layers))
        for (const s of o.visualisation_layers)
          delete s.id;
    }
  }
  return e.sections && (e.sections.center?.pane && (delete e.sections.center.pane.id, e.sections.center.pane.subplot_rows && Array.isArray(e.sections.center.pane.subplot_rows) && a(e.sections.center.pane.subplot_rows)), e.sections.right?.panes && Array.isArray(e.sections.right.panes) && n(e.sections.right.panes), e.sections.top?.panes && Array.isArray(e.sections.top.panes) && n(e.sections.top.panes)), e;
}
const y6 = {
  map_2d: {
    pane_type: "map_2d",
    title: "Map 2D",
    projection: "orthographic",
    center_longitude: 0,
    center_latitude: 45,
    zoom: 1,
    visualisation_layers: [
      {
        layer_type: "basemap_fill",
        style: {
          background: "#b3d9ff",
          background_opacity: 0.3,
          land_fill: "#e8e8e8"
        }
      },
      {
        layer_type: "basemap_stroke",
        show_coastlines: !0,
        style: { coastline_stroke: "#666666", coastline_stroke_width: 1 }
      },
      {
        layer_type: "graticule",
        style: { stroke: "#cccccc", stroke_width: 0.5 }
      }
    ]
  },
  globe_3d: {
    pane_type: "globe_3d",
    title: "Globe 3D",
    visualisation_layers: [
      {
        layer_type: "latlon_sphere",
        radius: 1,
        reference_frame: "GEO"
      },
      { layer_type: "grid", reference_frame: "GEO" }
    ]
  },
  plot_2d: {
    pane_type: "plot_2d",
    title: "Plot 2D",
    x_axis: {
      domain: { current: [-25, 25], bounds: [-1e3, 1e3] },
      scale: "linear",
      label: "X-axis"
    },
    y_axis: {
      domain: { current: [-25, 25], bounds: [-1e3, 1e3] },
      scale: "linear",
      label: "Y-axis"
    },
    visualisation_layers: []
  },
  image: {
    pane_type: "image",
    title: "Image",
    background_color: "#1a1a2e",
    show_timestamp: !0,
    visualisation_layers: []
  },
  data_status: { pane_type: "data_status", title: "Data Status" },
  layout: { pane_type: "layout", title: "Layout Viewer" },
  text_display: {
    pane_type: "text_display",
    title: "Text Display",
    content_source: {
      type: "selected_event",
      parameter: "text_pane_content",
      include_metadata: !0
    },
    style: {
      render_mode: "markdown",
      font_size: 14,
      padding: 16,
      scrollable: !0,
      empty_message: "Click an event to see details"
    }
  }
};
class v6 {
  // ==================
  // Private State
  // ==================
  #e = /* @__PURE__ */ Me(null);
  #a = null;
  #t = null;
  // Loading state
  #r = /* @__PURE__ */ Me(!1);
  #n = /* @__PURE__ */ Me(!1);
  #c = /* @__PURE__ */ Me(!1);
  #i = /* @__PURE__ */ Me(null);
  // Cache for fetched layouts (URL -> raw data)
  #o = /* @__PURE__ */ new Map();
  // When true, the constructor's $effect (which watches layoutFile.file) is inert.
  // Set by loadFromData() to prevent the catalog's default layout from overwriting inline data.
  #s = !1;
  #d = (
    // ==================
    // Public State
    // ==================
    /* @__PURE__ */ Me(null)
  );
  get validationError() {
    return r(this.#d);
  }
  set validationError(e) {
    re(this.#d, e, !0);
  }
  #u = /* @__PURE__ */ Me(!1);
  get showValidationDialog() {
    return r(this.#u);
  }
  set showValidationDialog(e) {
    re(this.#u, e, !0);
  }
  #l(e) {
    if (!Je.applyPendingOverride() && e?.time_domain?.tmin && e?.time_domain?.tmax) {
      const a = _i(e.time_domain.tmin), n = _i(e.time_domain.tmax);
      Je.setTimeDomainFromZonedDateTime(a, n);
      const i = e?.options?.initial_playhead_position ?? "center";
      Ge.initializePosition(i, Je.start, Je.end), (e?.options?.playhead_tracking_mode ?? "follow_viewport") === "lock_to_time" ? Ge.lockToCurrentTime() : Ge.unlockFromTime();
      const o = e?.options?.animation_loop_duration ?? 15;
      Ge.animationDuration = o;
      const s = e?.options?.animation_loop_enabled ?? !0;
      Ge.loopEnabled = s, e?.options?.animation_autoplay && Ge.playAnimation();
    }
  }
  /**
   * Fetch layout from URL.
   */
  async #h(e) {
    const a = await fetch(e);
    if (!a.ok)
      throw new Error(`Failed to load layout: ${a.statusText}`);
    return a.json();
  }
  /**
   * Process raw layout data into validated ProcessedLayout.
   * Uses lightweight structural check — full schema validation runs at build time via validate:schemas.
   */
  #m(e) {
    const a = jn.file ?? "", n = En.processWithoutValidation(e);
    n.valid ? (re(this.#e, n.data ?? null, !0), this.#l(n.data ?? null)) : (this.#t !== a && (this.validationError = n.errors ?? null, this.showValidationDialog = !0, this.#t = a), re(this.#e, null));
  }
  // ==================
  // Standalone Loading
  // ==================
  /**
   * Load layout from an inline data object (no network fetch, no URL state).
   * Used by standalone embedding to bypass the layoutFile/fetch path.
   */
  loadFromData(e) {
    this.#s = !0, this.#m(e), r(this.#e) && (re(this.#c, !0), re(this.#r, !1), re(this.#n, !1), re(this.#i, null));
  }
  // ==================
  // Constructor
  // ==================
  constructor() {
    ut(() => {
      const e = jn.file;
      if (e && !this.#s && !(e === this.#a && r(this.#c))) {
        if (this.#o.has(e)) {
          const a = this.#o.get(e);
          this.#a = e, re(this.#c, !0), re(this.#r, !1), re(this.#n, !1), re(this.#i, null), this.#m(a);
          return;
        }
        re(this.#r, !0), re(this.#n, !1), re(this.#c, !1), re(this.#i, null), this.#h(e).then((a) => {
          this.#o.set(e, a), this.#a = e, re(this.#c, !0), re(this.#r, !1), this.#m(a);
        }).catch((a) => {
          re(this.#n, !0), re(this.#r, !1), re(this.#i, a instanceof Error ? a : new Error(String(a)), !0);
        });
      }
    });
  }
  // ==================
  // Core Data Getter
  // ==================
  get data() {
    return r(this.#e);
  }
  // ==================
  // Layout Property Getters
  // ==================
  /** Get the center pane (typically a timeseries pane) */
  get centerPane() {
    return this.data?.sections?.center?.pane;
  }
  /** Get the center pane as a timeseries pane (if it is one) */
  get centerTimeseriesPane() {
    const e = this.centerPane;
    if (e?.pane_type === "timeseries")
      return e;
  }
  /** Get subplot rows from the center timeseries pane */
  get subplots() {
    return this.centerTimeseriesPane?.subplot_rows ?? [];
  }
  get visibleSubplots() {
    return this.subplots.filter((e) => e.visible);
  }
  get sections() {
    return this.data?.sections;
  }
  get rightPanes() {
    return this.data?.sections?.right?.panes ?? [];
  }
  get topPanes() {
    return this.data?.sections?.top?.panes ?? [];
  }
  /** Get the height of the top section (0-80) */
  get topSectionHeight() {
    return this.data?.sections?.top?.height ?? 0;
  }
  /** Get the width of the right section (5-80) */
  get rightSectionWidth() {
    return this.data?.sections?.right?.width ?? 30;
  }
  /** Check if the top section should be rendered (has panes) */
  get hasTopSection() {
    const e = this.data?.sections?.top?.panes;
    return Array.isArray(e) && e.length > 0;
  }
  /** Check if the right section should be rendered (has panes) */
  get hasRightSection() {
    const e = this.data?.sections?.right?.panes;
    return Array.isArray(e) && e.length > 0;
  }
  get options() {
    return this.data?.options;
  }
  /** Get margins from the center timeseries pane */
  get globalMargins() {
    return this.centerTimeseriesPane?.margins;
  }
  get playheadVisibility() {
    return this.data?.options?.playhead_display_mode ?? "all";
  }
  get zoomDetailFactor() {
    return this.data?.options?.zoom_detail_factor ?? 1;
  }
  get prefetchFactor() {
    return this.data?.options?.prefetch_factor ?? 1.5;
  }
  get playheadTrackingMode() {
    return this.data?.options?.playhead_tracking_mode ?? "follow_viewport";
  }
  // ==================
  // Options Mutation Methods
  // ==================
  /**
   * Update the playhead visibility option.
   * @param value - 'off', 'all', 'bottom', or 'annotation'
   */
  setPlayheadVisibility(e) {
    r(this.#e)?.options && (r(this.#e).options.playhead_display_mode = e);
  }
  /**
   * Update the zoom detail factor option.
   * @param value - Integer >= 1
   */
  setZoomDetailFactor(e) {
    r(this.#e)?.options && (r(this.#e).options.zoom_detail_factor = Math.max(1, Math.round(e)));
  }
  /**
   * Update the prefetch factor option.
   * @param value - Number between 1 and 5
   */
  setPrefetchFactor(e) {
    r(this.#e)?.options && (r(this.#e).options.prefetch_factor = Math.max(1, Math.min(5, e)));
  }
  /**
   * Update a layout-level property using dot-path notation.
   * Examples:
   *   updateLayoutProperty("options.theme_mode", "dark")
   *   updateLayoutProperty("options.zoom_detail_factor", 2)
   */
  updateLayoutProperty(e, a) {
    r(this.#e) && In(r(this.#e), e, a);
  }
  get timeDomainParsed() {
    return !this.data?.time_domain?.tmin || !this.data?.time_domain?.tmax ? null : [
      _i(this.data.time_domain.tmin),
      _i(this.data.time_domain.tmax)
    ];
  }
  get timeDomainPresets() {
    return this.data?.time_domain_presets ?? [];
  }
  /**
   * Update the time_domain property in the layout with absolute ISO timestamps.
   * This persists the current viewport time range back to the layout JSON.
   * Note: This does NOT update the TimeDomain store (to avoid reactivity loops).
   *
   * @param start - Start date of the time domain
   * @param end - End date of the time domain
   */
  updateTimeDomain(e, a) {
    if (!r(this.#e)) return;
    const n = e.toISOString(), i = a.toISOString();
    r(this.#e).time_domain ? (r(this.#e).time_domain.tmin = n, r(this.#e).time_domain.tmax = i) : r(this.#e).time_domain = { tmin: n, tmax: i };
  }
  // ==================
  // Drivers
  // ==================
  /**
   * Get the drivers object from the layout.
   * Returns empty object if no drivers defined.
   */
  get drivers() {
    return this.data?.drivers ?? {};
  }
  /**
   * Update a driver value. This triggers reactivity so all components
   * referencing this driver will update.
   *
   * @param name - Name of the driver to update
   * @param value - New value for the driver
   * @returns true if update succeeded, false if no layout loaded
   */
  updateDriver(e, a) {
    return r(this.#e) ? (r(this.#e).drivers || (r(this.#e).drivers = {}), r(this.#e).drivers[e] = a, !0) : !1;
  }
  /**
   * Update a specific property within a driver value.
   * Useful for interactive components that modify individual properties.
   *
   * @param driverName - Name of the driver
   * @param propertyPath - Dot-separated path within the driver value (e.g., 'fill.opacity')
   * @param value - New value for the property
   * @returns true if update succeeded, false if driver not found
   */
  updateDriverProperty(e, a, n) {
    if (!r(this.#e)?.drivers) return !1;
    const i = r(this.#e).drivers[e];
    return i === void 0 ? !1 : (In(i, a, n), !0);
  }
  /**
   * Add a new driver to the layout.
   *
   * @param name - Name of the new driver
   * @param value - Initial value (defaults to null)
   * @returns true if added, false if already exists or no layout loaded
   */
  addDriver(e, a = null) {
    return !r(this.#e) || (r(this.#e).drivers || (r(this.#e).drivers = {}), e in r(this.#e).drivers) ? !1 : (r(this.#e).drivers[e] = a, !0);
  }
  /**
   * Delete a driver from the layout.
   *
   * @param name - Name of the driver to delete
   * @returns true if deleted, false if not found or no layout loaded
   */
  deleteDriver(e) {
    return !r(this.#e)?.drivers || !(e in r(this.#e).drivers) ? !1 : (delete r(this.#e).drivers[e], !0);
  }
  /**
   * Rename a driver in the layout.
   * Note: This does NOT update references to the driver in other parts of the layout.
   *
   * @param oldName - Current name of the driver
   * @param newName - New name for the driver
   * @returns true if renamed, false if oldName not found, newName exists, or no layout loaded
   */
  renameDriver(e, a) {
    return !r(this.#e)?.drivers || !(e in r(this.#e).drivers) || a in r(this.#e).drivers ? !1 : (r(this.#e).drivers[a] = r(this.#e).drivers[e], delete r(this.#e).drivers[e], !0);
  }
  /**
   * Find all references to a driver in the layout.
   * Returns an array of descriptive path strings like:
   * - "Subplot 'Dst Index' → Layer 0 (area) → stroke"
   * - "Map Layer 'stations' → fill"
   *
   * @param driverName - Name of the driver to find references for
   * @returns Array of human-readable path descriptions
   */
  getDriverReferences(e) {
    if (!r(this.#e)) return [];
    const a = [], n = (o) => o !== null && typeof o == "object" && "$driver" in o && o.$driver === e, i = (o, s) => {
      if (!(o === null || typeof o != "object")) {
        if (n(o)) {
          const f = s[s.length - 1];
          f && !f.startsWith("[") && a.push([...s.slice(0, -1), f].join(" → "));
          return;
        }
        if (Array.isArray(o)) {
          o.forEach((f, d) => {
            i(f, [...s, `[${d}]`]);
          });
          return;
        }
        for (const [f, d] of Object.entries(o))
          i(d, [...s, f]);
      }
    }, c = r(this.#e).sections;
    if (c) {
      const o = c.center?.pane;
      o?.pane_type === "timeseries" && o.subplot_rows.forEach((f, d) => {
        const h = f.title || `Subplot ${d}`;
        f.visualisation_layers && f.visualisation_layers.forEach((b, m) => {
          const p = b.layer_type;
          i(b, [
            `Subplot '${h}'`,
            `Layer ${m} (${p})`
          ]);
        });
      }), [...c.right?.panes ?? [], ...c.top?.panes ?? []].forEach((f) => {
        const d = f.pane_type;
        ya(f) && f.visualisation_layers && f.visualisation_layers.forEach((h, b) => {
          i(h, [
            `${d} pane`,
            `Layer ${b} (${h.layer_type})`
          ]);
        });
      });
    }
    return [...new Set(a)].map((o) => o.replace(/ → style → /g, " → ").replace(/ → \[\d+\]/g, "").replace(/\[\d+\] → /g, ""));
  }
  // ==================
  // Provider Typed Getters (delegated to layout-providers.ts)
  // ==================
  get locationProviders() {
    return l6(r(this.#e));
  }
  get allLocationProviders() {
    return d6(r(this.#e));
  }
  get gridLocationProviders() {
    return u6(r(this.#e));
  }
  get stationLocationProviders() {
    return h6(r(this.#e));
  }
  get staticLocationProviders() {
    return b6(r(this.#e));
  }
  get frameProviders() {
    return m6(r(this.#e));
  }
  get modelInputProviders() {
    return p6(r(this.#e));
  }
  get fieldLineProviders() {
    return g6(r(this.#e));
  }
  // ==================
  // Private Mutable Accessors
  // ==================
  /**
   * Get mutable reference to subplot_rows in the center timeseries pane.
   * Used internally for mutation operations.
   */
  #f() {
    const e = r(this.#e)?.sections?.center?.pane;
    if (e?.pane_type === "timeseries")
      return e.subplot_rows;
  }
  // ==================
  // Data Sources (delegated to layout-data-sources.ts)
  // ==================
  get infoSources() {
    return c6(r(this.#e), r(this.#e)?.drivers);
  }
  get zarrStoreUrls() {
    return o6(r(this.#e));
  }
  get textureUrls() {
    return s6(r(this.#e));
  }
  // ==================
  // Status Properties
  // ==================
  get status() {
    return {
      isLoading: r(this.#r),
      isError: r(this.#n),
      isSuccess: r(this.#c),
      error: r(this.#i)
    };
  }
  get isLoading() {
    return r(this.#r);
  }
  get isError() {
    return r(this.#n);
  }
  get isSuccess() {
    return r(this.#c);
  }
  get hasValidationErrors() {
    return this.validationError !== null && this.validationError.length > 0;
  }
  // ==================
  // Computed Helpers
  // ==================
  getPanelPercentageHeights() {
    const e = this.visibleSubplots.map((n) => n.height), a = e.reduce((n, i) => n + i, 0);
    return e.map((n) => 100 * n / a);
  }
  getSubplotById(e) {
    return this.subplots.find((a) => a.id === e);
  }
  getSubplotIndex(e) {
    return this.subplots.findIndex((a) => a.id === e);
  }
  // ==================
  // Loading Methods
  // ==================
  /**
   * Load layout from various sources
   */
  async loadLayout(e, a = "file") {
    switch (a) {
      case "file":
        jn.file = e;
        break;
      case "upload": {
        let n;
        try {
          const c = await e.text();
          n = JSON.parse(c);
        } catch (c) {
          const o = c instanceof Error ? c.message : String(c);
          dt(() => {
            this.validationError = [{ message: `Failed to parse uploaded file: ${o}` }], this.showValidationDialog = !0;
          });
          return;
        }
        const i = En.processWithoutValidation(n);
        if (i.valid && i.data) {
          const c = this.#f();
          c && (c.length = 0), await Us(), re(this.#e, i.data, !0), this.validationError = null, this.#l(i.data);
        } else
          dt(() => {
            this.validationError = i.errors ?? null, this.showValidationDialog = !0;
          });
        break;
      }
      case "url": {
        let n;
        try {
          const c = await fetch(e);
          if (!c.ok) {
            dt(() => {
              this.validationError = [
                { message: `HTTP ${c.status}: ${c.statusText}` }
              ], this.showValidationDialog = !0;
            });
            return;
          }
          n = await c.json();
        } catch (c) {
          const o = c instanceof Error ? c.message : String(c);
          dt(() => {
            this.validationError = [{ message: `Failed to load from URL: ${o}` }], this.showValidationDialog = !0;
          });
          return;
        }
        const i = En.processWithoutValidation(n);
        if (i.valid && i.data) {
          const c = this.#f();
          c && (c.length = 0), await Us(), re(this.#e, i.data, !0), this.validationError = null, this.#l(i.data);
        } else
          dt(() => {
            this.validationError = i.errors ?? null, this.showValidationDialog = !0;
          });
        break;
      }
    }
  }
  // ==================
  // Mutation Methods
  // ==================
  deleteSubplot(e) {
    const a = this.#f();
    a && a.splice(e, 1);
  }
  addSubplot(e) {
    const a = this.#f();
    a && a.push({ ...e, id: crypto.randomUUID() });
  }
  /**
   * Duplicate a subplot row.
   * The new subplot is inserted immediately after the original with new IDs.
   */
  duplicateSubplot(e) {
    const a = this.#f();
    if (!a || e < 0 || e >= a.length) return;
    const n = JSON.parse(JSON.stringify(a[e]));
    n.id = crypto.randomUUID(), n.title && (n.title = `${n.title} (copy)`), n.visualisation_layers.forEach((i) => {
      i.id = crypto.randomUUID();
    }), a.splice(e + 1, 0, n);
  }
  /**
   * Update a property on a subplot by index using dot notation path.
   * Supports both top-level properties and nested paths.
   * Examples:
   *   updateSubplotProperty(0, "title", "New Title")
   *   updateSubplotProperty(0, "y_domain.current", [0, 100])
   *   updateSubplotProperty(0, "visualisation_layers.0.visible", false)
   */
  updateSubplotProperty(e, a, n) {
    const i = this.#f();
    !i || !i[e] || In(i[e], a, n);
  }
  reorderSubplots(e, a) {
    const n = this.#f();
    if (!n) return;
    const [i] = n.splice(e, 1);
    n.splice(a, 0, i);
  }
  switchSubplotWithBelow(e) {
    const a = this.#f();
    a && (e >= a.length - 1 || this.reorderSubplots(e, e + 1));
  }
  /**
   * Import subplot from another layout
   */
  importSubplot(e) {
    const a = this.#f();
    if (!a) return;
    const n = JSON.parse(JSON.stringify(e));
    n.id = crypto.randomUUID(), n.visualisation_layers.forEach((i) => {
      i.id = crypto.randomUUID();
    }), a.push(n);
  }
  // ==================
  // Layer Mutation Methods
  // ==================
  /**
   * Toggle visibility of a layer within a subplot.
   */
  toggleLayerVisibility(e, a) {
    const n = this.#f();
    if (!n || !n[e]) return;
    const i = n[e].visualisation_layers[a];
    i && (i.visible = !(i.visible ?? !0));
  }
  /**
   * Reorder layers within a subplot (for drag-and-drop).
   */
  reorderLayers(e, a, n) {
    const i = this.#f();
    if (!i || !i[e]) return;
    const c = i[e].visualisation_layers;
    if (!c || a < 0 || a >= c.length) return;
    const [o] = c.splice(a, 1);
    c.splice(n, 0, o);
  }
  /**
   * Set the complete layer order for a subplot (for drag-and-drop).
   * Replaces the entire visualisation_layers array with the new order.
   */
  setLayerOrder(e, a) {
    const n = this.#f();
    !n || !n[e] || (n[e].visualisation_layers = a);
  }
  /**
   * Switch layer with the one below it (move down in z-order).
   */
  switchLayerWithBelow(e, a) {
    const n = this.#f();
    if (!n || !n[e]) return;
    const i = n[e].visualisation_layers;
    !i || a >= i.length - 1 || this.reorderLayers(e, a, a + 1);
  }
  /**
   * Switch layer with the one above it (move up in z-order).
   */
  switchLayerWithAbove(e, a) {
    a <= 0 || this.reorderLayers(e, a, a - 1);
  }
  /**
   * Delete a layer from a subplot.
   */
  deleteLayer(e, a) {
    const n = this.#f();
    if (!n || !n[e]) return;
    const i = n[e].visualisation_layers;
    !i || a < 0 || a >= i.length || i.splice(a, 1);
  }
  /**
   * Duplicate a layer in a subplot.
   * The new layer is inserted immediately after the original with a new ID.
   */
  duplicateLayer(e, a) {
    const n = this.#f();
    if (!n || !n[e]) return;
    const i = n[e].visualisation_layers;
    if (!i || a < 0 || a >= i.length) return;
    const c = i[a], o = JSON.parse(JSON.stringify(c));
    o.id = crypto.randomUUID(), c.title && (o.title = `${c.title} (copy)`), i.splice(a + 1, 0, o);
  }
  /**
   * Add a new layer to a subplot.
   * The layer template should NOT include an 'id' property - one will be assigned.
   */
  addLayerToSubplot(e, a) {
    const n = this.#f();
    if (!n || !n[e]) return;
    const i = n[e].visualisation_layers;
    i && i.push({ ...a, id: crypto.randomUUID() });
  }
  /**
   * Add a new subplot at the top of the timeseries pane.
   * New subplots are inserted at the beginning (top of the visual list).
   * The subplot template should NOT include an 'id' property - one will be assigned.
   */
  addSubplotAtTop(e) {
    const a = this.#f();
    a && a.unshift({ ...e, id: crypto.randomUUID() });
  }
  /**
   * Add a new subplot with a layer in one operation.
   * Convenience method for the common "create subplot + add layer" pattern.
   * The subplot is added at the top of the list for immediate visibility.
   *
   * @param title - Title for both the subplot and the layer
   * @param layerTemplate - Layer configuration (without id)
   * @param subplotDefaults - Optional overrides for subplot properties
   */
  addSubplotWithLayer(e, a, n) {
    const i = { ...a, id: crypto.randomUUID() }, c = {
      title: e,
      height: 150,
      bottom_margin: 20,
      visible: !0,
      y_axis: { scale: "linear", tick_spacing: 40 },
      // Initial range will be auto-adjusted by data system once data loads
      y_domain: { current: [0, 1], bounds: [0, 1] },
      visualisation_layers: [i],
      ...n
    };
    this.addSubplotAtTop(c);
  }
  /**
   * Add an empty subplot with schema defaults.
   * Used when creating subplots via the "+" button (structural layout first).
   * Users can then configure Y-axis settings and add layers.
   */
  addEmptySubplot() {
    const e = {
      title: "New Subplot",
      height: 150,
      bottom_margin: 20,
      visible: !0,
      y_axis: { scale: "linear", tick_spacing: 40 },
      y_domain: { current: [0, 100], bounds: [0, 100] },
      visualisation_layers: []
    };
    this.addSubplotAtTop(e);
  }
  /**
   * Add an empty pane of the given type with defaults from PANE_DEFAULTS.
   * Deep-clones the defaults to avoid shared references.
   */
  addEmptyPane(e, a) {
    const n = y6[e];
    if (!n) return;
    const i = structuredClone(n);
    this.addPane(a, i);
  }
  // ==================
  // Unified Container API
  // ==================
  /**
   * Container ID format:
   * - "subplot:0" → First subplot in center timeseries pane
   * - "subplot:1" → Second subplot
   * - "pane:abc123" → Pane with id "abc123"
   */
  /**
   * Parse a container ID into its type and identifier.
   * @param containerId - Container ID string (e.g., "subplot:0" or "pane:abc123")
   * @returns Object with type and id, or undefined if invalid
   */
  parseContainerId(e) {
    const [a, n] = e.split(":");
    if (!(!a || !n)) {
      if (a === "subplot") {
        const i = parseInt(n, 10);
        return isNaN(i) || i < 0 ? void 0 : { type: "subplot", id: i };
      } else if (a === "pane")
        return { type: "pane", id: n };
    }
  }
  /**
   * Get any container (subplot or pane) by unified ID.
   * @param containerId - Container ID string (e.g., "subplot:0" or "pane:abc123")
   * @returns The container or undefined if not found
   */
  getContainerById(e) {
    const a = this.parseContainerId(e);
    if (a)
      return a.type === "subplot" ? this.subplots[a.id] : this.getPaneById(a.id);
  }
  /**
   * Check if a container is effectively visible.
   * Consolidates all visibility checks:
   * - visible property set to false
   * - size-based collapse (panes with size <= 10)
   * - section collapse (top height = 0 or right width = 0)
   *
   * @param containerId - Container ID string (e.g., "subplot:0" or "pane:abc123")
   * @returns true if the container should be rendered/fetch data
   */
  isEffectivelyVisible(e) {
    const a = this.parseContainerId(e);
    if (!a) return !1;
    const n = 10;
    if (a.type === "subplot") {
      const i = this.subplots[a.id];
      return i ? i.visible !== !1 : !1;
    } else {
      const i = this.getPaneById(a.id);
      if (!i || i.visible === !1 || typeof i.size == "number" && i.size <= n) return !1;
      const c = this.data;
      if (c) {
        const o = c.sections.top?.panes ?? [], s = c.sections.right?.panes ?? [];
        if (o.some((f) => f.id === i.id) && (c.sections.top?.height ?? 0) === 0 || s.some((f) => f.id === i.id) && (c.sections.right?.width ?? 30) === 0)
          return !1;
      }
      return !0;
    }
  }
  /**
   * Update any container property using unified ID.
   * Routes internally to updateSubplotProperty or updatePaneProperty.
   *
   * @param containerId - Container ID string (e.g., "subplot:0" or "pane:abc123")
   * @param path - Dot-notation path to the property
   * @param value - New value for the property
   */
  updateContainerProperty(e, a, n) {
    const i = this.parseContainerId(e);
    i && (i.type === "subplot" ? this.updateSubplotProperty(i.id, a, n) : this.updatePaneProperty(i.id, a, n));
  }
  // ==================
  // Pane Accessor Methods
  // ==================
  /**
   * Get a pane by its ID (searches both right and top panes)
   */
  getPaneById(e) {
    const a = this.centerPane;
    if (a?.id === e) return a;
    const n = this.rightPanes.find((i) => i.id === e);
    return n || this.topPanes.find((i) => i.id === e);
  }
  /**
   * Get a pane by position and index
   */
  getPaneByPosition(e, a) {
    return (e === "right" ? this.rightPanes : this.topPanes)[a];
  }
  /**
   * Get visible panes for a position
   */
  getVisiblePanes(e) {
    return (e === "right" ? this.rightPanes : this.topPanes).filter((n) => n.visible !== !1);
  }
  // ==================
  // Pane Mutation Methods
  // ==================
  /**
   * Update a property on a pane by ID using dot notation path.
   * Supports both top-level properties and nested paths.
   * Examples:
   *   updatePaneProperty("pane-123", "title", "New Title")
   *   updatePaneProperty("pane-123", "camera.position.x", 5)
   *   updatePaneProperty("pane-123", "camera.position", { x: 0, y: 0, z: 5 })
   *   updatePaneProperty("pane-123", "lighting.sun_lamp.intensity", 2.0)
   */
  updatePaneProperty(e, a, n) {
    const i = this.getPaneById(e);
    i && In(i, a, n);
  }
  /**
   * Update a property on a layer within a pane by pane ID and layer index.
   * Used for Map 2D and Globe 3D panes where layers are stored directly in visualisation_layers.
   * Examples:
   *   updatePaneLayerProperty("map-pane", 0, "visible", false)
   *   updatePaneLayerProperty("map-pane", 0, "style.stroke", "#ff0000")
   *   updatePaneLayerProperty("globe-pane", 2, "style.opacity", 0.5)
   */
  updatePaneLayerProperty(e, a, n, i) {
    const c = this.getPaneById(e);
    if (!c || !ya(c)) return;
    const o = c.visualisation_layers;
    !o || !o[a] || In(o[a], n, i);
  }
  /**
   * Toggle the visibility of a pane
   */
  togglePaneVisible(e) {
    const a = this.getPaneById(e);
    a && (a.visible = !(a.visible ?? !0));
  }
  /**
   * Set the visibility of a pane
   */
  setPaneVisible(e, a) {
    const n = this.getPaneById(e);
    n && (n.visible = a);
  }
  /**
   * Update the size of a single pane.
   * @param paneId - ID of the pane
   * @param size - New relative size
   */
  updatePaneSize(e, a) {
    const n = this.getPaneById(e);
    n && (n.size = Math.max(1, Math.round(a)));
  }
  /**
   * Update sizes for all panes in a position (right or top).
   * Called by PaneArea after drag operations to persist sizes to layout.
   * @param position - 'right' or 'top'
   * @param sizes - Array of new sizes (matching pane order)
   */
  updatePaneSizes(e, a) {
    const n = e === "right" ? this.rightPanes : this.topPanes;
    if (a.length === n.length)
      for (let i = 0; i < n.length; i++)
        n[i].size = Math.max(1, Math.round(a[i]));
  }
  /**
   * Delete a pane by position and index
   */
  deletePane(e, a) {
    if (!r(this.#e)?.sections) return;
    const n = e === "right" ? r(this.#e).sections.right : r(this.#e).sections.top;
    if (!n?.panes || a < 0 || a >= n.panes.length) return;
    n.panes = n.panes.filter((o, s) => s !== a);
    const i = 10, c = n.panes.every((o) => (o.size ?? 100) <= i);
    n.panes.length > 0 && c && (n.panes[0].size = 100);
  }
  /**
   * Duplicate a pane by position and index.
   * The new pane is inserted immediately after the original with new IDs.
   */
  duplicatePane(e, a) {
    if (!r(this.#e)?.sections) return;
    const n = e === "right" ? r(this.#e).sections.right : r(this.#e).sections.top;
    if (!n?.panes || a < 0 || a >= n.panes.length) return;
    const i = JSON.parse(JSON.stringify(n.panes[a]));
    i.id = crypto.randomUUID(), i.title && (i.title = `${i.title} (copy)`), i.pane_type === "timeseries" ? i.subplot_rows?.forEach((c) => {
      c.id = crypto.randomUUID(), c.visualisation_layers?.forEach((o) => {
        o.id = crypto.randomUUID();
      });
    }) : ya(i) && i.visualisation_layers?.forEach((c) => {
      c.id = crypto.randomUUID();
    }), n.panes.splice(a + 1, 0, i);
  }
  /**
   * Reorder panes within a position
   */
  reorderPanes(e, a, n) {
    if (!r(this.#e)?.sections) return;
    const i = e === "right" ? r(this.#e).sections.right : r(this.#e).sections.top;
    if (!i?.panes || a < 0 || a >= i.panes.length || n < 0 || n >= i.panes.length) return;
    const [c] = i.panes.splice(a, 1);
    i.panes.splice(n, 0, c);
  }
  /**
   * Switch a pane with the next pane in the list.
   * @param position - 'right' or 'top'
   * @param index - Index of the pane to switch
   */
  switchPaneWithNext(e, a) {
    const n = e === "right" ? this.rightPanes : this.topPanes;
    a < 0 || a >= n.length - 1 || this.reorderPanes(e, a, a + 1);
  }
  /**
   * Move a pane from one section to another.
   * @param paneId - ID of the pane to move
   * @param fromSection - Source section ("right" or "top")
   * @param toSection - Destination section ("right" or "top")
   * @param toIndex - Index in destination section
   */
  movePaneBetweenSections(e, a, n, i) {
    if (!r(this.#e)?.sections || a === n) return;
    const c = a === "right" ? r(this.#e).sections.right : r(this.#e).sections.top, o = n === "right" ? r(this.#e).sections.right : r(this.#e).sections.top;
    if (!c?.panes || !o?.panes) return;
    const s = o.panes.length === 0, f = c.panes.findIndex((m) => m.id === e);
    if (f === -1) return;
    const [d] = c.panes.splice(f, 1), h = 10, b = c.panes.every((m) => (m.size ?? 100) <= h);
    if (c.panes.length > 0 && b && (c.panes[0].size = 100), s) {
      if (d.size = 100, n === "top") {
        const m = r(this.#e).sections.top;
        m && (!m.height || m.height === 0) && (m.height = 30);
      } else if (n === "right") {
        const m = r(this.#e).sections.right;
        m && (!m.width || m.width === 0) && (m.width = 30);
      }
    }
    o.panes.splice(i, 0, d);
  }
  /**
   * Add a new pane to a section (top or right).
   * New panes are added at the beginning of the array (top of list).
   * @param section - Target section ("top" or "right")
   * @param paneTemplate - Pane configuration (without id)
   * @returns The ID of the newly created pane
   */
  addPane(e, a) {
    if (!r(this.#e)?.sections) return "";
    const n = e === "right" ? r(this.#e).sections.right : r(this.#e).sections.top;
    if (!n) return "";
    n.panes || (n.panes = []);
    const i = n.panes.length === 0, c = crypto.randomUUID(), o = { ...a, id: c };
    return ya(o) && o.visualisation_layers?.forEach((s) => {
      s.id || (s.id = crypto.randomUUID());
    }), n.panes.unshift(o), i && (e === "top" && "height" in n ? (!n.height || n.height === 0) && (n.height = 30) : e === "right" && "width" in n && (!n.width || n.width === 0) && (n.width = 30)), c;
  }
  /**
   * Add a layer to a Map 2D or Globe 3D pane.
   * @param paneId - ID of the target pane
   * @param section - Section containing the pane
   * @param layerTemplate - Layer configuration (without id)
   */
  addLayerToPane(e, a, n) {
    if (!r(this.#e)?.sections) return;
    const i = a === "right" ? r(this.#e).sections.right : r(this.#e).sections.top;
    if (!i?.panes) return;
    const c = i.panes.find((s) => s.id === e);
    if (!c || !ya(c)) return;
    const o = c.visualisation_layers ?? [];
    c.visualisation_layers = o, o.push({ ...n, id: crypto.randomUUID() });
  }
  /**
   * Get the visualisation_layers array from a Map 2D or Globe 3D pane.
   * Returns undefined if the pane doesn't exist or is not a valid type.
   */
  #b(e) {
    const a = this.getPaneById(e);
    if (!(!a || !ya(a)))
      return a.visualisation_layers;
  }
  /**
   * Set the complete layer order for a pane (for drag-and-drop).
   * Replaces the entire visualisation_layers array with the new order.
   * @param paneId - ID of the pane
   * @param newLayers - Array of layers in new order (with IDs preserved)
   */
  setPaneLayerOrder(e, a) {
    const n = this.getPaneById(e);
    !n || !ya(n) || (n.visualisation_layers = a);
  }
  /**
   * Reorder layers within a pane (for drag-and-drop).
   * @param paneId - ID of the pane
   * @param fromIndex - Original index
   * @param toIndex - Destination index
   */
  reorderPaneLayers(e, a, n) {
    const i = this.#b(e);
    if (!i || a < 0 || a >= i.length) return;
    const [c] = i.splice(a, 1);
    i.splice(n, 0, c);
  }
  /**
   * Switch layer with the one below it in the array (move towards back in z-order).
   * @param paneId - ID of the pane
   * @param layerIndex - Index of the layer to move
   */
  switchPaneLayerWithBelow(e, a) {
    const n = this.#b(e);
    !n || a >= n.length - 1 || this.reorderPaneLayers(e, a, a + 1);
  }
  /**
   * Switch layer with the one above it in the array (move towards front in z-order).
   * @param paneId - ID of the pane
   * @param layerIndex - Index of the layer to move
   */
  switchPaneLayerWithAbove(e, a) {
    a <= 0 || this.reorderPaneLayers(e, a, a - 1);
  }
  /**
   * Delete a layer from a pane.
   * @param paneId - ID of the pane
   * @param layerIndex - Index of the layer to delete
   */
  deletePaneLayer(e, a) {
    const n = this.#b(e);
    !n || a < 0 || a >= n.length || n.splice(a, 1);
  }
  /**
   * Duplicate a layer in a pane.
   * The new layer is inserted immediately after the original with a new ID.
   * @param paneId - ID of the pane
   * @param layerIndex - Index of the layer to duplicate
   */
  duplicatePaneLayer(e, a) {
    const n = this.#b(e);
    if (!n || a < 0 || a >= n.length) return;
    const i = n[a], c = JSON.parse(JSON.stringify(i));
    c.id = crypto.randomUUID(), i.title && (c.title = `${i.title} (copy)`), n.splice(a + 1, 0, c);
  }
  // ==================
  // Section Size Mutation Methods
  // ==================
  /**
   * Update the height of the top section.
   * @param height - New height value (0-80)
   */
  updateTopSectionHeight(e) {
    r(this.#e)?.sections?.top && (r(this.#e).sections.top.height = Math.max(0, Math.min(80, e)));
  }
  /**
   * Update the width of the right section.
   * @param width - New width value (0-80). UI enforces 30px minimum dynamically.
   */
  updateRightSectionWidth(e) {
    r(this.#e)?.sections?.right && (r(this.#e).sections.right.width = Math.max(0, Math.min(80, e)));
  }
  // ==================
  // Path-Based Mutation Methods
  // ==================
  /**
   * Update a value at a specific path in the layout.
   *
   * Note: Validation is no longer performed on property mutations.
   * UI controls enforce valid values; validation only happens on layout load
   * and in the JSON editor pane.
   *
   * @param path - Array of path segments, e.g., ['subplots', 0, 'height']
   * @param value - The new value to set
   * @returns { success: boolean, errors?: string[] }
   */
  updateAtPath(e, a) {
    return r(this.#e) ? e.length === 0 ? { success: !1, errors: ["Path cannot be empty"] } : (f6(r(this.#e), e, a), { success: !0 }) : { success: !1, errors: ["No layout loaded"] };
  }
  /**
   * Validate the current layout state using structural checks.
   * For full schema validation, use the build-time validator (npm run validate:schemas).
   *
   * @returns Promise<{ valid: boolean, errors?: string[] }>
   */
  async validateCurrentLayout() {
    if (!r(this.#e))
      return { valid: !1, errors: ["No layout loaded"] };
    const e = En.processWithoutValidation(kf(r(this.#e)));
    return e.valid ? { valid: !0 } : {
      valid: !1,
      errors: e.errors?.map((a) => a.message) ?? ["Validation failed"]
    };
  }
  /**
   * Replace the entire layout with new data.
   * Validates structure, applies defaults, and processes (assigns IDs) before applying.
   *
   * Note: Input may contain `id` properties from a ProcessedLayout.
   * These are stripped before validation since the schema doesn't allow them,
   * then fresh IDs are assigned by processLayoutData.
   *
   * @param newLayout - The new layout object (will be validated)
   * @returns Promise<{ success: boolean, errors?: string[] }>
   */
  async replaceEntireLayout(e) {
    const a = kf(e), n = En.processWithoutValidation(a);
    return n.valid ? (re(this.#e, n.data ?? null, !0), this.#l(n.data ?? null), { success: !0 }) : {
      success: !1,
      errors: n.errors?.map((i) => i.message) ?? ["Processing failed"]
    };
  }
  // ==================
  // Validation Dialog Methods
  // ==================
  closeValidationDialog() {
    this.showValidationDialog = !1;
  }
  clearValidationError() {
    this.validationError = null, this.#t = null;
  }
}
let nr = null;
function $u(t) {
  return nr || (nr = new v6()), ls = !1, nr.loadFromData(t), nr;
}
let ls = !1;
const Ee = new Proxy({}, {
  get(t, e) {
    if (!nr) {
      if (ls) return;
      throw new Error("Layout manager not initialized. Call initLayoutManager() in a component first.");
    }
    const a = nr[e];
    return typeof a == "function" ? a.bind(nr) : a;
  }
});
function _6() {
  nr = null, ls = !0;
}
function w6(t, e) {
  return `${t}|${[...e].sort().join(",")}`;
}
const Zn = 720 * 60 * 1e3, e0 = 1200, t0 = 1201;
function st(t, e) {
  return JSON.stringify({ server: t, dataset: e });
}
function a0(t) {
  return JSON.stringify({ type: "static", layerId: t });
}
function r0(t, e) {
  return JSON.stringify({
    type: "field_line_tabular",
    model_ref: t,
    columns: e ? [...e].sort() : void 0
  });
}
function go(t, e, a) {
  return JSON.stringify({
    type: "location_timeseries",
    provider_ref: t,
    parameters: [...e].sort(),
    instance_id: a
  });
}
function Ia(t, e) {
  switch (t.type) {
    case "hapi_data":
      return st(t.server, t.dataset);
    case "hapi_multi_parameter":
      return st(t.server, t.dataset);
    case "field_line_tabular":
      return r0(t.model_ref, t.columns);
    case "location_timeseries":
      return go(t.provider_ref, t.parameters, t.instance_id);
    case "static":
      return a0(e ?? "");
    case "zarr_variable":
      return w6(t.url, t.variables);
    default:
      return "";
  }
}
function Mn(t) {
  switch (t.type) {
    case "hapi_data":
      return t.dataset;
    case "field_line_tabular":
      return t.model_ref;
    case "location_timeseries":
      return t.provider_ref;
    case "static":
      return "static";
    case "zarr_variable":
      return t.variables.join(", ");
    case "hapi_metadata":
      return t.dataset;
    case "hapi_multi_dataset":
      return String(t.dataset_template);
    case "hapi_multi_parameter":
      return t.dataset;
    default:
      return t.type;
  }
}
const x6 = {
  gapLimitMs: 10800 * 1e3,
  // 3 hours
  method: "linear"
}, k6 = {
  maxSegmentsPerDataset: 50,
  maxRecordsPerDataset: 1e5,
  staleThresholdMs: 1800 * 1e3,
  // 30 minutes
  mergeThreshold: 20
}, S6 = 60 * 1e3;
class n0 {
  /** In-flight requests keyed by request key */
  #e = /* @__PURE__ */ new Map();
  /** Cached results keyed by request key */
  #a = /* @__PURE__ */ new Map();
  /**
   * Fetch data with deduplication and stale-while-revalidate logic.
   *
   * Multiple calls with the same key will:
   * 1. Check if we have cached result that's not stale → return cached
   * 2. Check if request is already in-flight → return same promise
   * 3. If not in-flight → create new fetch request
   *
   * @param key - Unique cache key for this request
   * @param fetcher - Async function that performs the fetch (receives AbortSignal)
   * @param options - Fetch options (staleTime)
   * @returns FetchResult with data, fetch timestamp, and stale flag
   */
  async fetch(e, a, n = {}) {
    const i = n.staleTime ?? S6, c = this.#a.get(e);
    if (c && Date.now() - c.fetchedAt.getTime() < i)
      return {
        data: c.data,
        fetchedAt: c.fetchedAt,
        stale: !1
      };
    const o = this.#e.get(e);
    if (o)
      try {
        return await o.promise;
      } catch (d) {
        if (d instanceof Error && d.name === "AbortError") {
          const h = this.#e.get(e);
          if (h && h !== o)
            return await h.promise;
        } else
          throw d;
      }
    const s = new AbortController(), f = (async () => {
      try {
        const d = await a(s.signal), h = /* @__PURE__ */ new Date();
        return this.#a.set(e, { data: d, fetchedAt: h }), this.#e.delete(e), { data: d, fetchedAt: h, stale: !1 };
      } catch (d) {
        if (this.#e.delete(e), d instanceof Error && d.name === "AbortError") {
          const h = this.#a.get(e);
          if (h)
            return {
              data: h.data,
              fetchedAt: h.fetchedAt,
              stale: !0
            };
        }
        throw d;
      }
    })();
    return this.#e.set(e, { promise: f, controller: s }), f;
  }
  /**
   * Cancel an in-flight request by key.
   * Does nothing if no request is in-flight for that key.
   */
  abort(e) {
    const a = this.#e.get(e);
    a && (a.controller.abort(), this.#e.delete(e));
  }
  /**
   * Cancel all in-flight requests.
   */
  abortAll() {
    for (const e of this.#e.values())
      e.controller.abort();
    this.#e.clear();
  }
  /**
   * Invalidate cached result so next fetch will go to network.
   */
  invalidate(e) {
    this.#a.delete(e);
  }
  /**
   * Invalidate all cached results.
   */
  invalidateAll() {
    this.#a.clear();
  }
  /**
   * Check if a request is currently in-flight.
   */
  isInFlight(e) {
    return this.#e.has(e);
  }
  /**
   * Check if we have a cached result (stale or fresh).
   */
  hasCached(e) {
    return this.#a.has(e);
  }
  /**
   * Get cache age in milliseconds, or null if not cached.
   */
  getCacheAge(e) {
    const a = this.#a.get(e);
    return a ? Date.now() - a.fetchedAt.getTime() : null;
  }
  /**
   * Get the number of in-flight requests.
   */
  get inFlightCount() {
    return this.#e.size;
  }
  /**
   * Get the number of cached results.
   */
  get cacheSize() {
    return this.#a.size;
  }
}
const Jn = new n0(), M6 = /* @__PURE__ */ new Map([
  [
    "https://cdaweb.gsfc.nasa.gov/hapi",
    {
      fullName: "CDAWeb",
      shortId: "CDAWeb",
      outputFormats: ["csv", "json", "binary"],
      hapiVersion: "2.0"
    }
  ],
  [
    "http://hapi-server.org/servers/SSCWeb/hapi",
    {
      fullName: "SSCWeb",
      shortId: "SSCWeb",
      outputFormats: ["csv", "binary", "json"],
      hapiVersion: "2.0"
    }
  ],
  [
    "https://amda.irap.omp.eu/service/hapi",
    {
      fullName: "AMDA",
      shortId: "AMDA",
      outputFormats: ["csv", "binary", "json"],
      hapiVersion: "2.0"
    }
  ],
  [
    "https://csatools.esac.esa.int/HapiServer/hapi",
    {
      fullName: "Cluster Science Archive",
      shortId: "CSA",
      outputFormats: ["csv", "binary"],
      hapiVersion: "3.2"
    }
  ],
  [
    "https://iswa.gsfc.nasa.gov/IswaSystemWebApp/hapi",
    {
      fullName: "CCMC ISWA",
      shortId: "CCMC_ISWA",
      outputFormats: ["csv", "json"],
      hapiVersion: "2.0"
    }
  ],
  [
    "https://vires.services/hapi",
    {
      fullName: "VirES for Swarm",
      shortId: "VirES-for-Swarm",
      outputFormats: ["csv", "json", "binary"],
      hapiVersion: "3.0"
    }
  ],
  [
    "https://imag-data.bgs.ac.uk/GIN_V1/hapi",
    {
      fullName: "INTERMAGNET HAPI server",
      shortId: "INTERMAGNET",
      outputFormats: ["csv", "json", "binary"],
      hapiVersion: "3.1"
    }
  ],
  [
    "https://supermag.jhuapl.edu/hapi",
    {
      fullName: "SuperMAG (dev version)",
      shortId: "SuperMAG",
      outputFormats: ["csv"],
      hapiVersion: "3.3"
    }
  ],
  [
    "https://wdcapi.bgs.ac.uk/hapi",
    {
      fullName: "HAPI WDC (Edinburgh) Server",
      shortId: "WDC",
      outputFormats: ["csv", "json"],
      hapiVersion: "3.2"
    }
  ],
  [
    "http://lasp.colorado.edu/lisird/hapi",
    { fullName: "LISIRD", shortId: "LISIRD", outputFormats: ["csv"], hapiVersion: "2.0" }
  ],
  [
    "https://hapi.spaceweather.knmi.nl/hapi",
    {
      fullName: "KNMI public HAPI server for use with the space weather timeline viewer",
      shortId: "KNMI",
      outputFormats: ["csv", "json"],
      hapiVersion: "3.1"
    }
  ],
  [
    "https://api.helioviewer.org/hapi/Helioviewer/hapi",
    {
      fullName: "Helioviewer",
      shortId: "Helioviewer",
      outputFormats: ["csv", "binary", "json"],
      hapiVersion: "3.1"
    }
  ],
  [
    "https://planet.physics.uiowa.edu/das/das2Server/hapi",
    { fullName: "DAS2", shortId: "DAS2", outputFormats: ["csv"], hapiVersion: "1.1" }
  ],
  [
    "https://hapi-server.org/servers-dev/URLWatcher/hapi",
    {
      fullName: "Serve URLWatcher data from https://hapi-server.org/urlwatcher",
      shortId: "URLWatcher",
      outputFormats: ["csv", "binary", "json"],
      hapiVersion: "3.1"
    }
  ],
  [
    "http://hapi-server.org/servers/TestData2.0/hapi",
    {
      fullName: "HAPI 2.0 Test Data",
      shortId: "TestData2.0",
      outputFormats: ["csv", "binary", "json"],
      hapiVersion: "2.0"
    }
  ],
  [
    "http://hapi-server.org/servers/TestData2.1/hapi",
    {
      fullName: "HAPI 2.1 Test Data",
      shortId: "TestData2.1",
      outputFormats: ["csv", "binary", "json"],
      hapiVersion: "2.1"
    }
  ],
  [
    "http://hapi-server.org/servers/TestData3.0/hapi",
    {
      fullName: "Server using HAPI 3.0 additions",
      shortId: "TestData3.0",
      outputFormats: ["csv", "binary", "json"],
      hapiVersion: "3.0"
    }
  ],
  [
    "http://hapi-server.org/servers/TestData3.1/hapi",
    {
      fullName: "Server using HAPI 3.1 additions",
      shortId: "TestData3.1",
      outputFormats: ["csv", "binary", "json"],
      hapiVersion: "3.1"
    }
  ],
  [
    "http://hapi-server.org/servers/TestData3.2/hapi",
    {
      fullName: "Server using HAPI 3.2 additions",
      shortId: "TestData3.2",
      outputFormats: ["csv", "binary", "json"],
      hapiVersion: "3.2"
    }
  ],
  [
    "http://hapi-server.org/servers/TestData3.3/hapi",
    {
      fullName: "Server using HAPI 3.3 additions",
      shortId: "TestData3.3",
      outputFormats: ["csv", "binary", "json"],
      hapiVersion: "3.3"
    }
  ]
]);
function i0(t) {
  if (!t) return null;
  const e = t.match(/^(\d+)(?:\.(\d+))?(?:\.(\d+))?/);
  return e ? {
    major: parseInt(e[1], 10),
    minor: e[2] ? parseInt(e[2], 10) : 0,
    patch: e[3] ? parseInt(e[3], 10) : 0
  } : null;
}
function c0(t) {
  return M6.get(t);
}
const Sf = "timeline-viewer-custom-hapi-servers", Mf = "CustomHapiServers", T6 = /* @__PURE__ */ new Set(["json", "csv", "binary"]);
class D6 {
  /** Array of custom servers */
  #e = /* @__PURE__ */ Me(bt([]));
  /** Whether the service has been initialized */
  #a = !1;
  constructor() {
    typeof window < "u" && this.#c();
  }
  // --- Public accessors ---
  /**
   * Get all custom servers.
   */
  get servers() {
    return this.#t(), r(this.#e);
  }
  /**
   * Number of custom servers.
   */
  get count() {
    return r(this.#e).length;
  }
  // --- Public methods ---
  /**
   * Check if a server URL already exists.
   *
   * @param url - Server URL to check
   * @returns true if the server is already added
   */
  hasServer(e) {
    this.#t();
    const a = this.#r(e);
    return r(this.#e).some((n) => n.url === a);
  }
  /**
   * Add a custom server.
   *
   * @param url - Server URL (will be normalized)
   * @param name - Optional display name (auto-generated from hostname if not provided)
   * @param hapiVersion - HAPI version from /capabilities
   * @param outputFormats - Supported output formats from /capabilities
   */
  addServer(e, a, n, i) {
    this.#t();
    const c = this.#r(e);
    if (this.hasServer(c))
      return;
    const o = {
      url: c,
      name: a || this.#n(c),
      addedAt: Date.now(),
      hapiVersion: n ?? null,
      outputFormats: i ?? null
    };
    re(this.#e, [...r(this.#e), o], !0), this.#i();
  }
  /**
   * Update cached capabilities for an existing custom server.
   */
  updateServerCapabilities(e, a, n) {
    this.#t();
    const i = this.#r(e), c = r(this.#e).findIndex((h) => h.url === i);
    if (c === -1) return;
    const o = r(this.#e)[c], s = a ?? o.hapiVersion, f = n ?? o.outputFormats;
    if (o.hapiVersion === s && JSON.stringify(o.outputFormats) === JSON.stringify(f))
      return;
    const d = {
      ...o,
      hapiVersion: s,
      outputFormats: f
    };
    re(
      this.#e,
      [
        ...r(this.#e).slice(0, c),
        d,
        ...r(this.#e).slice(c + 1)
      ],
      !0
    ), this.#i();
  }
  /**
   * Remove a custom server by URL.
   *
   * @param url - Server URL to remove
   */
  removeServer(e) {
    this.#t();
    const a = this.#r(e), n = r(this.#e).findIndex((i) => i.url === a);
    n !== -1 && (re(this.#e, r(this.#e).filter((i, c) => c !== n), !0), this.#i());
  }
  /**
   * Get a custom server by URL.
   *
   * @param url - Server URL to look up
   * @returns The custom server or undefined
   */
  getServer(e) {
    this.#t();
    const a = this.#r(e);
    return r(this.#e).find((n) => n.url === a);
  }
  /**
   * Clear all custom servers.
   */
  clearAll() {
    re(this.#e, [], !0), this.#i();
  }
  // --- Private methods ---
  /**
   * Ensure the service is initialized (for SSR safety).
   */
  #t() {
    !this.#a && typeof window < "u" && this.#c();
  }
  /**
   * Normalize a URL by removing trailing slashes.
   */
  #r(e) {
    return e.replace(/\/+$/, "");
  }
  /**
   * Generate a display name from a URL.
   * Extracts hostname and removes common prefixes/suffixes.
   */
  #n(e) {
    try {
      return new URL(e).hostname.replace(/^(www|api|hapi)[.]/, "").replace(/[.](com|org|gov|edu|net)$/, "");
    } catch {
      return e;
    }
  }
  #c() {
    const e = fd(
      Sf,
      (a) => Array.isArray(a) ? a.filter((n) => typeof n == "object" && n !== null && typeof n.url == "string" && typeof n.name == "string" && typeof n.addedAt == "number" && ("hapiVersion" in n ? typeof n.hapiVersion == "string" || n.hapiVersion === null : !0) && ("outputFormats" in n ? n.outputFormats === null || Array.isArray(n.outputFormats) && n.outputFormats.every((i) => typeof i == "string" && T6.has(i)) : !0)) : null,
      Mf
    );
    re(this.#e, e ?? [], !0), this.#a = !0;
  }
  #i() {
    ld(Sf, r(this.#e), Mf);
  }
}
const Ui = new D6(), A6 = 5e3, C6 = /* @__PURE__ */ new Set(["json", "csv", "binary"]);
function P6(t) {
  const e = t.trim();
  if (!e)
    throw new Error("URL cannot be empty");
  if (!e.startsWith("http://") && !e.startsWith("https://"))
    throw new Error("URL must start with http:// or https://");
  try {
    new URL(e);
  } catch {
    throw new Error("Invalid URL format");
  }
  return e.replace(/\/+$/, "");
}
async function E6(t) {
  let e;
  try {
    e = P6(t);
  } catch (c) {
    return {
      valid: !1,
      hapiVersion: null,
      outputFormats: null,
      error: c instanceof Error ? c.message : "Invalid URL format"
    };
  }
  const a = `${e}/capabilities`, n = new AbortController(), i = setTimeout(() => n.abort(), A6);
  try {
    const c = await fetch(a, {
      signal: n.signal,
      headers: { Accept: "application/json" }
    });
    if (clearTimeout(i), !c.ok)
      return c.status === 404 ? {
        valid: !1,
        hapiVersion: null,
        outputFormats: null,
        error: "This doesn't appear to be a HAPI server (no /capabilities endpoint)"
      } : {
        valid: !1,
        hapiVersion: null,
        outputFormats: null,
        error: `Server returned error status ${c.status}`
      };
    let o;
    try {
      o = await c.json();
    } catch {
      return {
        valid: !1,
        hapiVersion: null,
        outputFormats: null,
        error: "Server response is not valid JSON"
      };
    }
    if (typeof o != "object" || o === null)
      return {
        valid: !1,
        hapiVersion: null,
        outputFormats: null,
        error: "This doesn't appear to be a HAPI server"
      };
    const s = o, f = typeof s.HAPI == "string" ? s.HAPI : null, d = "outputFormats" in s && Array.isArray(s.outputFormats) ? s.outputFormats.filter(
      (b) => typeof b == "string" && C6.has(b)
    ) : null, h = d !== null && d.length > 0;
    return !f && !h ? {
      valid: !1,
      hapiVersion: null,
      outputFormats: null,
      error: "This doesn't appear to be a HAPI server (missing HAPI version or outputFormats)"
    } : {
      valid: !0,
      hapiVersion: f,
      outputFormats: d
    };
  } catch (c) {
    if (clearTimeout(i), c instanceof Error) {
      if (c.name === "AbortError")
        return {
          valid: !1,
          hapiVersion: null,
          outputFormats: null,
          error: "Server took too long to respond"
        };
      if (c.message.includes("fetch") || c.message.includes("network") || c.message.includes("Failed"))
        return {
          valid: !1,
          hapiVersion: null,
          outputFormats: null,
          error: "Cannot connect to server. Check the URL and try again."
        };
    }
    return {
      valid: !1,
      hapiVersion: null,
      outputFormats: null,
      error: "Cannot connect to server. Check the URL and try again."
    };
  }
}
const yo = /* @__PURE__ */ new Map(), Oc = /* @__PURE__ */ new Map();
function Vr(t) {
  return t.replace(/\/+$/, "");
}
function Tf(t, e) {
  if (t.length === 0)
    throw new Error("Cannot choose a preferred output format from an empty capabilities list");
  if (e && t.includes("binary"))
    return "binary";
  if (t.includes("json"))
    return "json";
  if (t.includes("csv"))
    return "csv";
  if (t.includes("binary"))
    return "binary";
  throw new Error(
    `Server reported unsupported output formats: ${t.join(", ") || "(none)"}`
  );
}
function ds(t) {
  const e = Vr(t), a = c0(e);
  if (a?.hapiVersion)
    return {
      hapiVersion: a.hapiVersion,
      outputFormats: a.outputFormats
    };
  const n = Ui.getServer(e);
  return n?.hapiVersion ? {
    hapiVersion: n.hapiVersion,
    outputFormats: n.outputFormats ?? null
  } : yo.get(e) ?? null;
}
async function I6(t) {
  const e = Vr(t), a = await E6(e);
  if (!a.valid)
    throw new Error(
      `Cannot determine HAPI capabilities for ${e}: ${a.error ?? "Unknown error"}`
    );
  if (!a.hapiVersion)
    throw new Error(
      `Cannot determine HAPI version for ${e}: /capabilities did not include a HAPI version`
    );
  const n = {
    hapiVersion: a.hapiVersion,
    outputFormats: a.outputFormats
  };
  return s0(e, n), ds(e) ?? n;
}
async function o0(t) {
  const e = Vr(t), a = Oc.get(e);
  if (a)
    return a;
  const n = I6(e);
  Oc.set(e, n);
  try {
    return await n;
  } finally {
    Oc.delete(e);
  }
}
function s0(t, e) {
  const a = Vr(t), n = yo.get(a), i = e.hapiVersion ?? n?.hapiVersion ?? null, c = e.outputFormats ?? n?.outputFormats ?? null;
  if (i && yo.set(a, {
    hapiVersion: i,
    outputFormats: c
  }), !c0(a)) {
    if (Ui.hasServer(a)) {
      Ui.updateServerCapabilities(
        a,
        e.hapiVersion ?? void 0,
        e.outputFormats ?? void 0
      );
      return;
    }
    i && Ui.addServer(a, void 0, i, c);
  }
}
function f0(t) {
  return ds(t)?.hapiVersion ?? null;
}
function N6(t) {
  const e = f0(t);
  if (!e) return null;
  const a = i0(e);
  if (a === null)
    throw new Error(`Invalid cached HAPI version for ${Vr(t)}: ${e}`);
  return a.major >= 3;
}
async function L6(t) {
  const e = f0(t);
  return e || (await o0(t)).hapiVersion;
}
async function l0(t) {
  const e = N6(t);
  if (e !== null)
    return e;
  const a = await L6(t), n = i0(a);
  if (n === null)
    throw new Error(
      `Invalid resolved HAPI version for ${Vr(t)}: ${a}`
    );
  return n.major >= 3;
}
async function F6(t, e = !1) {
  const a = ds(t);
  if (a?.outputFormats && a.outputFormats.length > 0)
    return Tf(a.outputFormats, e);
  const n = await o0(t);
  if (!n.outputFormats || n.outputFormats.length === 0)
    throw new Error(
      `Cannot determine HAPI output formats for ${Vr(t)}: /capabilities did not include outputFormats`
    );
  return Tf(n.outputFormats, e);
}
const zc = async function(t, e) {
  const a = await l0(t) ? "dataset" : "id";
  return `${t}/info?${a}=${e}`;
}, R6 = function(t, e, a, n, i, c = "json") {
  return O6(t, e, a, n, i, c);
};
async function O6(t, e, a, n, i, c) {
  const o = await l0(t), s = o ? "dataset" : "id", f = o ? "start" : "time.min", d = o ? "stop" : "time.max";
  return t + "/data?" + s + "=" + e + "&parameters=" + a.join(",") + "&" + f + "=" + n.toISOString().slice(0, 19) + "Z&" + d + "=" + i.toISOString().slice(0, 19) + "Z&format=" + c;
}
const z6 = 300 * 1e3, U6 = /* @__PURE__ */ new Map();
function V6(t) {
  return Date.now() - t.fetchedAt < z6;
}
function Y6(t) {
  const e = U6.get(t);
  return e && V6(e) ? e.entries : null;
}
function H6(t, e) {
  const a = Y6(t);
  return a ? a.some((n) => n.id === e) : !0;
}
function fr(t) {
  if (!t)
    return null;
  try {
    const e = Zi(t), a = 1e3, n = 60 * a, i = 60 * n, c = 24 * i, o = 7 * c, s = 30 * c, f = 365 * c;
    let d = 0;
    return e.years && (d += e.years * f), e.months && (d += e.months * s), e.weeks && (d += e.weeks * o), e.days && (d += e.days * c), e.hours && (d += e.hours * i), e.minutes && (d += e.minutes * n), e.seconds && (d += e.seconds * a), e.milliseconds && (d += e.milliseconds), d > 0 ? d : null;
  } catch (e) {
    return console.warn(`Failed to parse duration "${t}":`, e), null;
  }
}
function B6(t, e) {
  const a = /* @__PURE__ */ new Map();
  if (!t?.parameters) return a;
  for (const n of e) {
    const i = t.parameters.find((c) => c.name === n);
    i?.type && a.set(n, i.type);
  }
  return a;
}
function W6(t, e) {
  const a = /* @__PURE__ */ new Map();
  if (!t?.parameters) return a;
  for (const n of e) {
    const i = t.parameters.find((c) => c.name === n);
    if (i?.fill !== void 0 && i.fill !== null) {
      const c = parseFloat(i.fill);
      isNaN(c) || a.set(n, c);
    }
  }
  return a;
}
const G6 = 1e-3;
function Df(t, e) {
  return t === e ? !0 : e === 0 ? t === 0 : Math.abs((t - e) / e) < G6;
}
const X6 = /"(?:[^"\\]|\\.)*"|(-?Infinity|NaN)(?=[,\]}\s:]|$)/g;
function d0(t) {
  return t.replace(X6, (e, a) => a !== void 0 ? "null" : e);
}
function q6(t, e, a) {
  const n = [], i = t.split(`
`), c = j6(e, a);
  for (const o of i) {
    const s = o.trim();
    if (!s) continue;
    const f = Z6(s);
    if (f.length === 0) continue;
    const d = [f[0]];
    let h = 1;
    for (const b of c)
      if (b.type === "scalar") {
        const m = f[h] ?? "";
        d.push(Af(m, b.paramType)), h++;
      } else {
        const m = [];
        for (let p = 0; p < b.size; p++) {
          const g = f[h] ?? "";
          m.push(Af(g, b.paramType)), h++;
        }
        d.push(m);
      }
    n.push(d);
  }
  return { data: n };
}
function j6(t, e) {
  const a = [];
  for (const n of e) {
    const i = t?.parameters?.find((s) => s.name === n);
    let c = 1, o = !1;
    i?.size && (Array.isArray(i.size) ? (c = i.size.reduce((s, f) => s * f, 1), o = c > 1) : typeof i.size == "number" && i.size > 1 && (c = i.size, o = !0)), a.push({
      paramName: n,
      type: o ? "array" : "scalar",
      size: c,
      paramType: i?.type ?? "double"
    });
  }
  return a;
}
function Z6(t) {
  const e = [];
  let a = "", n = !1;
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    n ? c === '"' ? i + 1 < t.length && t[i + 1] === '"' ? (a += '"', i++) : n = !1 : a += c : c === '"' ? n = !0 : c === "," ? (e.push(a), a = "") : a += c;
  }
  return e.push(a), e;
}
function Af(t, e) {
  const a = t.trim();
  switch (e) {
    case "string":
      return a;
    case "isotime":
      return a;
    case "integer": {
      const n = parseInt(a, 10);
      return isNaN(n) ? null : n;
    }
    case "double":
    default: {
      const n = parseFloat(a);
      return isNaN(n) ? null : n;
    }
  }
}
function pt(t) {
  const e = t.trim();
  let a;
  return e.includes("T") ? a = /[Zz]$/.test(e) || /[+-]\d{2}(:\d{2})?$/.test(e) ? e : e + "Z" : e.includes(" ") ? a = e.replace(" ", "T") + "Z" : a = e, new Date(a);
}
const Uc = new n0();
class ec {
  #e = new Nr();
  #a = new un();
  #t = new Nr();
  // Track failed fetches
  #r = new un();
  // Track datasets skipped (not in catalog)
  #n = /* @__PURE__ */ new Set();
  // Track in-progress fetches to avoid duplicates
  #c = /* @__PURE__ */ new Map();
  // assumed_cadence overrides (key → ISO duration)
  #i = /* @__PURE__ */ new Set();
  // Track which datasets we've warned about
  /** Cooldown period before retrying a failed fetch (30 seconds) */
  static RETRY_COOLDOWN_MS = 30 * 1e3;
  /** Maximum automatic retries before requiring manual retry */
  static MAX_AUTO_RETRIES = 2;
  /**
   * Get whether any info has been fetched yet.
   * Used as a reactive dependency in DataOrchestrator.
   */
  get isInfoLoaded() {
    return this.#a.size > 0;
  }
  /**
   * Check if INFO is loaded for a specific dataset.
   * Use this for per-dataset checks before data fetching.
   */
  isDatasetInfoLoaded(e, a) {
    const n = st(e, a);
    return this.#a.has(n);
  }
  /**
   * Get the set of loaded dataset keys (reactive).
   * Can be used as a dependency to trigger re-renders when any INFO loads.
   */
  get loadedDatasetKeys() {
    return this.#a;
  }
  /**
   * Get failure info for a dataset (if it failed).
   */
  getFailure(e, a) {
    const n = st(e, a);
    return this.#t.get(n);
  }
  /**
   * Check if a dataset fetch failed.
   */
  hasFailed(e, a) {
    const n = st(e, a);
    return this.#t.has(n);
  }
  /**
   * Check if a dataset was skipped (not in catalog).
   */
  wasSkipped(e, a) {
    const n = st(e, a);
    return this.#r.has(n);
  }
  /**
   * Get the status of a dataset info fetch.
   * Returns: 'loaded' | 'loading' | 'failed' | 'skipped' | 'unknown'
   */
  getInfoStatus(e, a) {
    const n = st(e, a);
    return this.#a.has(n) ? "loaded" : this.#n.has(n) ? "loading" : this.#t.has(n) ? "failed" : this.#r.has(n) ? "skipped" : "unknown";
  }
  /**
   * Manually retry a failed fetch.
   * Clears the failure state and re-attempts the fetch.
   */
  async retryFetch(e, a) {
    const n = st(e, a);
    this.#t.delete(n), this.#r.delete(n), await this.fetchInfo(e, a);
  }
  /**
   * Refresh HAPI info for a dataset, forcing a fresh network request.
   * Used by periodic refetch to update stopDate for real-time datasets.
   * Clears all cached state and re-fetches from the server.
   */
  async refreshInfo(e, a) {
    const n = st(e, a);
    this.#e.delete(n), this.#a.delete(n), this.#t.delete(n), this.#r.delete(n);
    try {
      const i = await zc(e, a);
      Uc.invalidate(i);
    } catch (i) {
      console.warn("[DataMetadataManager] Failed to resolve HAPI info URL for cache invalidation:", i);
    }
    await this.fetchInfo(e, a);
  }
  /**
   * Clear all failure states (e.g., when user wants to retry everything).
   */
  clearAllFailures() {
    this.#t.clear(), this.#r.clear();
  }
  /**
   * Register an assumed cadence for a dataset.
   * Used as fallback when HAPI info doesn't provide a cadence.
   */
  registerAssumedCadence(e, a, n) {
    const i = st(e, a);
    this.#c.set(i, n);
  }
  /**
   * Clear all assumed cadences (called before re-collecting from layout).
   */
  clearAssumedCadences() {
    this.#c.clear();
  }
  /**
   * Get effective cadence in milliseconds for a dataset.
   * Priority: HAPI info cadence > assumed_cadence > null.
   * Logs warnings when falling back or when no cadence is available.
   */
  #o(e, a) {
    const n = this.getInfo(e, a), i = st(e, a);
    if (n?.cadence) {
      const o = fr(n.cadence);
      if (o) return o;
    }
    const c = this.#c.get(i);
    if (c) {
      const o = fr(c);
      if (o)
        return this.#i.has(i) || (console.warn(`[DataMetadataManager] ${a}: HAPI info has no cadence, using assumed_cadence "${c}"`), this.#i.add(i)), o;
    }
    return n && !this.#i.has(i) && (console.warn(`[DataMetadataManager] ${a}: HAPI info has no cadence and no assumed_cadence configured. Data will not be fetched. Set assumed_cadence in fetch_options to enable fetching.`), this.#i.add(i)), null;
  }
  /**
   * Core fetch+parse logic for HAPI info requests.
   * Handles NaN sanitization, HAPI status validation, and capabilities detection.
   * Used by both fetchInfo() and checkForInfoUpdate().
   */
  async #s(e, a, n) {
    const i = await zc(e, a);
    return (await Uc.fetch(
      i,
      async (o) => {
        const s = await fetch(i, { signal: o });
        if (!s.ok)
          throw new Error(`HAPI info request failed: ${s.statusText}`);
        const f = await s.text();
        let d;
        try {
          d = JSON.parse(f);
        } catch (h) {
          const b = d0(f);
          if (b !== f)
            console.warn(`[HAPI] Sanitized NaN/Infinity in INFO response from: ${i}`), d = JSON.parse(b);
          else
            throw console.error(`[HAPI Error] Failed to parse INFO JSON response:
  URL: ${i}
  Parse error: ${h}
  Response (first 1000 chars): ${f.substring(0, 1e3)}`), new Error(`Failed to parse HAPI INFO response: ${h}`);
        }
        if (s0(e, { hapiVersion: d.HAPI }), d.status && d.status.code !== e0 && d.status.code !== t0)
          throw console.error(
            `[HAPI Error] Server returned error for INFO request:
  URL: ${i}
  Status: ${d.status.code} - ${d.status.message}
  Full response:`,
            d
          ), new Error(`HAPI error ${d.status.code}: ${d.status.message}`);
        return d;
      },
      { staleTime: n?.staleTime ?? 3600 * 1e3 }
    )).data;
  }
  /**
   * Fetch HAPI info for a dataset
   *
   * Uses FetchCoordinator for deduplication - multiple calls with same
   * server/dataset will share one network request.
   *
   * Validates against cached catalog if available - skips request for
   * datasets that don't exist in the catalog (prevents 400 errors).
   *
   * Tracks failures and supports automatic retry with cooldown.
   *
   * @param server - HAPI server URL
   * @param dataset - Dataset ID
   */
  async fetchInfo(e, a) {
    const n = st(e, a);
    if (this.#e.has(n) || this.#n.has(n))
      return;
    const i = this.#t.get(n);
    if (!(i && (Date.now() - i.failedAt.getTime() < ec.RETRY_COOLDOWN_MS || i.retryCount >= ec.MAX_AUTO_RETRIES))) {
      if (!H6(e, a)) {
        console.debug(`[DataMetadataManager] Skipping info fetch for ${a} - not in catalog`), this.#r.add(n);
        return;
      }
      this.#n.add(n);
      try {
        const c = await this.#s(e, a);
        this.#t.delete(n), this.#e.set(n, c), this.#a.add(n), this.#n.delete(n), c.cadence || console.warn(`[DataMetadataManager] ${a}: HAPI info response has no cadence field. Throttling will use assumed_cadence from fetch_options if configured.`);
      } catch (c) {
        this.#n.delete(n);
        const s = (this.#t.get(n)?.retryCount ?? 0) + 1;
        this.#t.set(n, {
          message: c instanceof Error ? c.message : String(c),
          failedAt: /* @__PURE__ */ new Date(),
          retryCount: s
        }), console.error(`[DataMetadataManager] Failed to fetch HAPI info for ${a} (attempt ${s}):`, c);
      }
    }
  }
  /**
   * Non-destructive check for updated HAPI info.
   * Fetches fresh info while keeping old info in cache.
   * Only updates the cache if start/stop dates have changed.
   * Returns true if info was updated.
   */
  async checkForInfoUpdate(e, a) {
    const n = st(e, a), i = this.#e.get(n);
    if (!i || this.#n.has(n)) return !1;
    try {
      const c = await zc(e, a);
      Uc.invalidate(c), this.#n.add(n);
      const o = await this.#s(e, a, { staleTime: 0 });
      return this.#n.delete(n), i.startDate === o.startDate && i.stopDate === o.stopDate ? !1 : (this.#e.set(n, o), this.#a.delete(n), this.#a.add(n), console.info(`[DataMetadataManager] Info updated for ${a}: stopDate ${i.stopDate} → ${o.stopDate}`), !0);
    } catch (c) {
      return this.#n.delete(n), console.warn(`[DataMetadataManager] Periodic info check failed for ${a}:`, c), !1;
    }
  }
  /**
   * Get HAPI info for a dataset (if cached)
   */
  getInfo(e, a) {
    const n = st(e, a);
    return this.#e.get(n);
  }
  /**
   * Check if info is cached for a dataset
   */
  hasInfo(e, a) {
    const n = st(e, a);
    return this.#e.has(n);
  }
  /**
   * Get parameter names in order from HAPI info response.
   * Used for constructing HAPI data queries.
   */
  getParameterOrder(e, a) {
    const n = this.getInfo(e, a);
    return n?.parameters ? n.parameters.map((i) => i.name) : [];
  }
  /**
   * Get dataset cadence in milliseconds.
   * Uses HAPI info cadence, falling back to assumed_cadence if configured.
   *
   * @param server - HAPI server URL
   * @param dataset - Dataset ID
   * @returns Cadence in milliseconds, or null if not available
   */
  getCadenceMs(e, a) {
    return this.#o(e, a);
  }
  /**
   * Get a list of all tracked dataset keys (for iterating over all datasets).
   */
  getTrackedDatasets() {
    return Array.from(this.#e.keys());
  }
  /**
   * Determine whether data should be fetched at current zoom level
   *
   * Decision based on: expected records vs max displayable records
   * - expectedRecords = (timeSpanMs / cadence_ms)
   * - maxRecords = pixelWidth * zoom_detail_factor
   * - shouldFetch = expectedRecords <= maxRecords
   *
   * @param server - Server URL
   * @param dataset - Dataset ID
   * @param timeRange - Current time domain
   * @param pixelWidth - Width of plot area in pixels
   * @param zoomFactors - Zoom detail factors (global and per-element)
   * @returns Fetch status with decision reason
   */
  shouldFetchDataset(e, a, n, i, c) {
    if (!i || i <= 0)
      return {
        shouldFetch: !0,
        expectedRecords: null,
        maxRecords: null,
        reason: null
      };
    if (!n?.start || !n?.end)
      return {
        shouldFetch: !1,
        expectedRecords: null,
        maxRecords: null,
        reason: "No time range"
      };
    const o = this.#o(e, a);
    if (!o)
      return {
        shouldFetch: !1,
        expectedRecords: null,
        maxRecords: null,
        reason: "No cadence available (set assumed_cadence in fetch_options)"
      };
    const s = n.end.getTime() - n.start.getTime(), f = Math.ceil(s / o), d = Math.floor(i * c.global * c.maxElement), h = f <= d, b = h ? null : `Too many records: ${f.toLocaleString()} expected, max ${d.toLocaleString()} allowed`;
    return { shouldFetch: h, expectedRecords: f, maxRecords: d, reason: b };
  }
  /**
   * Check if current time range overlaps with available data range
   *
   * Uses HAPI info startDate/stopDate to determine if data exists.
   * Returns overlap status and pan direction hints if no overlap.
   *
   * @param server - Server URL
   * @param dataset - Dataset ID
   * @param timeRange - Current time domain to check
   * @returns Availability status with pan hints if needed
   */
  checkDataAvailability(e, a, n) {
    if (!n?.start || !n?.end)
      return { isAvailable: !0 };
    const i = this.getInfo(e, a);
    if (!i?.startDate || !i?.stopDate)
      return console.warn(`checkDataAvailability called before INFO loaded for ${a}`), { isAvailable: !0 };
    const c = pt(i.startDate), o = pt(i.stopDate), s = n.start, f = n.end;
    if (s < o && f > c)
      return { isAvailable: !0, availableStart: c, availableEnd: o };
    const h = f <= c ? "future" : "past", b = (p) => p.toISOString().replace("T", " ").replace(/\.\d{3}Z$/, " UTC"), m = h === "future" ? `Data starts at ${b(c)}. Pan right (future) to view.` : `Data ends at ${b(o)}. Pan left (past) to view.`;
    return {
      isAvailable: !1,
      panDirection: h,
      availableStart: c,
      availableEnd: o,
      reason: m
    };
  }
  /**
   * Build a sorted list of datasets (primary + cadence alternatives)
   *
   * Creates a cadence chain from:
   * 1. Primary dataset's cadence (from HAPI info)
   * 2. Explicit cadence alternatives from layout
   *
   * Sorted from finest to coarsest (smallest to largest cadence).
   * Used by DataFetchManager for automatic dataset selection based on zoom.
   *
   * @param server - Server URL
   * @param dataset - Dataset ID
   * @param cadenceAlternatives - Explicit alternatives from layout
   * @returns Cadence chain sorted by cadence (finest first)
   */
  buildCadenceChain(e, a, n = []) {
    const i = [], c = this.#o(e, a);
    c && i.push({
      datasetId: a,
      server: e,
      cadence_ms: c,
      isPrimary: !0
    });
    for (const o of n) {
      if (!o.dataset || !o.cadence) continue;
      const s = fr(o.cadence);
      s && i.push({
        datasetId: o.dataset,
        server: e,
        cadence_ms: s,
        isPrimary: !1
      });
    }
    return i.sort((o, s) => o.cadence_ms - s.cadence_ms), i;
  }
  /**
   * Select the optimal dataset for current zoom level
   *
   * Iterates through cadence chain (finest to coarsest) and selects
   * the first dataset that doesn't require throttling at current zoom.
   *
   * If all datasets are throttled, returns null datasetKey with throttled=true.
   *
   * @param server - Server URL
   * @param dataset - Dataset ID
   * @param timeRange - Current time domain
   * @param pixelWidth - Width of plot area in pixels
   * @param zoomFactors - Zoom detail factors
   * @param cadenceAlternatives - Explicit alternatives from layout
   * @returns Selected dataset info or throttled status
   */
  selectDatasetForZoom(e, a, n, i, c, o = []) {
    const s = this.checkDataAvailability(e, a, n);
    if (!i || !n?.start || !n?.end)
      return {
        selectedDataset: a,
        originalDataset: a,
        isAlternative: !1,
        cadence_ms: null,
        throttled: !1,
        expectedRecords: null,
        maxRecords: null,
        dataAvailability: s
      };
    const f = this.buildCadenceChain(e, a, o);
    if (f.length === 0)
      return {
        selectedDataset: null,
        originalDataset: a,
        isAlternative: !1,
        cadence_ms: null,
        throttled: !0,
        expectedRecords: null,
        maxRecords: null,
        dataAvailability: s
      };
    const d = Math.floor(i * c.global * c.maxElement), h = n.end.getTime() - n.start.getTime();
    for (const p of f) {
      const g = Math.ceil(h / p.cadence_ms);
      if (g <= d)
        return {
          selectedDataset: p.datasetId,
          originalDataset: a,
          isAlternative: !p.isPrimary,
          cadence_ms: p.cadence_ms,
          throttled: !1,
          expectedRecords: g,
          maxRecords: d,
          dataAvailability: s
        };
    }
    const b = f[f.length - 1], m = Math.ceil(h / b.cadence_ms);
    return {
      selectedDataset: null,
      originalDataset: a,
      isAlternative: !1,
      cadence_ms: b.cadence_ms,
      throttled: !0,
      expectedRecords: m,
      maxRecords: d,
      dataAvailability: s
    };
  }
  /**
   * Clear all cached info (useful for testing or manual invalidation)
   */
  clearCache() {
    this.#e.clear(), this.#a.clear();
  }
  /**
   * Get cache statistics (for debugging)
   */
  getStats() {
    return { cachedDatasets: this.#e.size };
  }
}
const xt = new ec();
class J6 {
  #e = /* @__PURE__ */ new Map();
  #a;
  /**
   * Reactive version counter - incremented on every mutation.
   * Reading this in getter methods creates a Svelte reactive dependency,
   * ensuring components re-render when cache contents change.
   */
  #t = /* @__PURE__ */ Me(0);
  constructor(e = {}) {
    this.#a = { ...k6, ...e };
  }
  // ==================
  // Public API
  // ==================
  /**
   * Analyze cache for a given range and parameters.
   * Renamed from getWithGaps() for clarity - this is analysis only, not data fetching.
   *
   * Returns cached records, gaps that need fetching, and coverage status.
   * This method is synchronous and non-blocking.
   *
   * @param datasetKey - Dataset key (use datasetKey() helper)
   * @param timeRange - Requested time range
   * @param parameters - Required parameters
   * @returns CacheAnalysis with cachedRecords, gaps, coverage, segmentCount
   */
  analyzeCacheForRange(e, a, n) {
    const i = this.#e.get(e);
    if (!i || i.segments.length === 0)
      return {
        cachedRecords: [],
        gaps: [
          {
            start: new Date(a.start),
            end: new Date(a.end)
          }
        ],
        coverage: "none",
        segmentCount: 0
      };
    i.lastAccessRange = {
      start: new Date(a.start),
      end: new Date(a.end)
    };
    const c = this.#l(i.segments, a, n);
    if (c.length === 0)
      return {
        cachedRecords: [],
        gaps: [
          {
            start: new Date(a.start),
            end: new Date(a.end)
          }
        ],
        coverage: "none",
        segmentCount: i.segments.length
      };
    const o = this.#c(c);
    if (o.length === 0)
      return {
        cachedRecords: [],
        gaps: [
          {
            start: new Date(a.start),
            end: new Date(a.end)
          }
        ],
        coverage: "none",
        segmentCount: i.segments.length
      };
    const s = this.#h(o, a), f = this.#m(o, a, i.timeIdentityFields), d = s.length === 0 ? "full" : f.length > 0 ? "partial" : "none";
    return {
      cachedRecords: f,
      gaps: s,
      coverage: d,
      segmentCount: i.segments.length
    };
  }
  /**
   * Get ALL records from segments overlapping a time range (without filtering to range).
   * Use this for rendering where clipping masks handle edges.
   *
   * @param datasetKey - Dataset key
   * @param timeRange - Time range to find overlapping segments
   * @param parameters - Required parameters
   * @returns All records from overlapping segments, or null if no valid segments
   */
  getAllOverlappingRecords(e, a, n) {
    const i = this.#e.get(e);
    if (!i || i.segments.length === 0)
      return null;
    i.lastAccessRange = {
      start: new Date(a.start),
      end: new Date(a.end)
    };
    const c = this.#l(i.segments, a, n);
    if (c.length === 0)
      return null;
    const o = this.#c(c);
    return o.length === 0 ? null : this.#f(o, i.timeIdentityFields);
  }
  /**
   * Store data in cache.
   *
   * IMPORTANT: This method now appends segments WITHOUT merging them.
   * Merging is deferred to idle time via RenderScheduler.
   *
   * Benefits:
   * - set() is fast (no merging computation)
   * - Non-blocking during pan/zoom
   * - Merging happens during idle time instead
   *
   * @param datasetKey - Dataset key
   * @param timeRange - Time range of the data
   * @param records - Time series records to cache
   * @param parameters - Parameters in the records
   * @param staleTime - Time until data is stale (default: 30 minutes)
   * @param cadence_ms - Dataset cadence (for eviction priority)
   * @param timeIdentityFields - Fields forming unique record identity (default: ['time'])
   */
  set(e, a, n, i, c = this.#a.staleThresholdMs, o, s) {
    let f = this.#e.get(e);
    f ? (o !== void 0 && (f.cadence_ms = o), s !== void 0 && (f.timeIdentityFields = s)) : (f = { segments: [], cadence_ms: o, timeIdentityFields: s, dataVersion: 0 }, this.#e.set(e, f)), f.dataVersion++;
    const d = {
      timeRange: {
        start: new Date(a.start),
        end: new Date(a.end)
      },
      records: [...n],
      parameters: [...i],
      fetchedAt: /* @__PURE__ */ new Date(),
      staleTime: c
    };
    f.segments.push(d), f.segments.length > this.#a.maxSegmentsPerDataset && (f.segments.sort((h, b) => b.fetchedAt.getTime() - h.fetchedAt.getTime()), f.segments = f.segments.slice(0, this.#a.maxSegmentsPerDataset)), this.#w(f), this.#g(), An(this.#t);
  }
  /**
   * Check if segment count exceeds merge threshold.
   * Used to decide whether to schedule merging.
   */
  needsMerge(e) {
    if (e) {
      const a = this.#e.get(e);
      return a ? a.segments.length > this.#a.mergeThreshold : !1;
    }
    for (const a of this.#e.values())
      if (a.segments.length > this.#a.mergeThreshold)
        return !0;
    return !1;
  }
  /**
   * Merge overlapping segments for a dataset.
   *
   * Called during idle time by RenderScheduler, not during pan/zoom.
   * Consolidates multiple overlapping segments into fewer, larger ones.
   *
   * @param datasetKey - Dataset to merge (if omitted, merges all)
   */
  mergeOverlappingSegments(e) {
    let a = !1;
    if (e) {
      const n = this.#e.get(e);
      n && n.segments.length > this.#a.mergeThreshold && (this.#i(n), a = !0);
    } else
      for (const n of this.#e.values())
        n.segments.length > this.#a.mergeThreshold && (this.#i(n), a = !0);
    a && An(this.#t);
  }
  /**
   * Remove stale segments from cache.
   * Called during idle time via RenderScheduler.
   */
  pruneStale() {
    let e = !1;
    for (const [a, n] of this.#e) {
      const i = this.#c(n.segments);
      i.length === 0 ? (this.#e.delete(a), e = !0) : i.length < n.segments.length && (n.segments = i, e = !0);
    }
    e && An(this.#t);
  }
  /**
   * Check if cache has overlapping data for range.
   */
  hasOverlap(e, a, n) {
    const i = this.#e.get(e);
    return i ? this.#l(i.segments, a, n).length > 0 : !1;
  }
  /**
   * Get the data version for a dataset.
   * Version increments on every set() call for that dataset.
   * Used by fast-path optimization to detect when cache has new data.
   *
   * @param datasetKey - Dataset key
   * @returns Version number, or 0 if dataset not in cache
   */
  getVersion(e) {
    return this.#e.get(e)?.dataVersion ?? 0;
  }
  /**
   * Get cached ranges for a dataset (for debugging).
   */
  getCachedRanges(e) {
    r(this.#t);
    const a = this.#e.get(e);
    return a ? a.segments.map((n) => ({
      start: new Date(n.timeRange.start),
      end: new Date(n.timeRange.end)
    })) : [];
  }
  /**
   * Get total record count for a dataset (for debugging).
   */
  getDatasetRecordCount(e) {
    r(this.#t);
    const a = this.#e.get(e);
    return a ? a.segments.reduce((n, i) => n + i.records.length, 0) : 0;
  }
  /**
   * Invalidate cache for a dataset.
   */
  invalidate(e) {
    this.#e.delete(e), An(this.#t);
  }
  /**
   * Invalidate all cache.
   */
  invalidateAll() {
    this.#e.clear(), An(this.#t);
  }
  /**
   * Get cache statistics (for debugging).
   */
  getStats() {
    r(this.#t);
    let e = 0, a = 0;
    for (const n of this.#e.values()) {
      e += n.segments.length;
      for (const i of n.segments)
        a += i.records.length;
    }
    return {
      datasets: this.#e.size,
      totalSegments: e,
      totalRecords: a,
      maxRecordsPerDataset: this.#a.maxRecordsPerDataset,
      maxTotalRecords: this.#a.maxRecordsPerDataset * 20,
      // Approximate global limit
      utilizationPercent: Math.round(a / (this.#a.maxRecordsPerDataset * 20) * 100)
    };
  }
  /**
   * Get list of all cached dataset keys.
   */
  getDatasetKeys() {
    return r(this.#t), Array.from(this.#e.keys());
  }
  // ==================
  // Private Helpers
  // ==================
  /**
   * Generate a composite key for record deduplication.
   * Uses timeIdentityFields if provided, otherwise just 'time'.
   *
   * For standard time series: key = timestamp
   * For forecast data with time_identity_fields: ['time', 'timetag_issue']:
   *   key = "timestamp|issue_timestamp"
   *
   * @param record - Time series record
   * @param timeIdentityFields - Fields to use for identity (default: ['time'])
   * @returns String key for deduplication
   */
  #r(e, a) {
    const n = a ?? ["time"], i = [];
    for (const c of n) {
      const o = e[c];
      o instanceof Date ? i.push(o.getTime().toString()) : o != null ? i.push(String(o)) : i.push("");
    }
    return i.join("|");
  }
  /**
   * Deduplicate records using composite key and sort by time.
   * Consolidates the common pattern used across segment merge operations.
   *
   * @param records - Records to deduplicate
   * @param timeIdentityFields - Fields forming unique record identity
   * @returns Deduplicated and time-sorted records
   */
  #n(e, a) {
    const n = /* @__PURE__ */ new Set(), i = e.filter((c) => {
      const o = this.#r(c, a);
      return n.has(o) ? !1 : (n.add(o), !0);
    });
    return i.sort((c, o) => c.time.getTime() - o.time.getTime()), i;
  }
  /**
   * Filter segments to exclude stale ones.
   * Consolidates the staleness check pattern used across cache operations.
   *
   * @param segments - Segments to filter
   * @returns Only fresh (non-stale) segments
   */
  #c(e) {
    const a = Date.now();
    return e.filter((n) => a - n.fetchedAt.getTime() <= n.staleTime);
  }
  /**
   * Merge overlapping segments within a dataset entry.
   */
  #i(e) {
    if (e.segments.length <= 1) return;
    const a = /* @__PURE__ */ new Map();
    for (const i of e.segments) {
      const c = i.parameters.sort().join(","), o = a.get(c) || [];
      o.push(i), a.set(c, o);
    }
    const n = [];
    for (const i of a.values()) {
      if (i.length === 1) {
        n.push(i[0]);
        continue;
      }
      i.sort((o, s) => o.timeRange.start.getTime() - s.timeRange.start.getTime());
      let c = i[0];
      for (let o = 1; o < i.length; o++) {
        const s = i[o];
        this.#d(c.timeRange, s.timeRange) || this.#o(c.timeRange, s.timeRange) ? c = this.#s(c, s, e.timeIdentityFields) : (n.push(c), c = s);
      }
      n.push(c);
    }
    e.segments = n;
  }
  /**
   * Check if two ranges are adjacent (end of one equals start of other).
   */
  #o(e, a) {
    return e.end.getTime() === a.start.getTime() || a.end.getTime() === e.start.getTime();
  }
  /**
   * Merge two segments into one.
   */
  #s(e, a, n) {
    const i = [...e.records, ...a.records], c = this.#n(i, n);
    return {
      timeRange: {
        start: new Date(Math.min(e.timeRange.start.getTime(), a.timeRange.start.getTime())),
        end: new Date(Math.max(e.timeRange.end.getTime(), a.timeRange.end.getTime()))
      },
      records: c,
      parameters: e.parameters,
      fetchedAt: new Date(Math.max(e.fetchedAt.getTime(), a.fetchedAt.getTime())),
      staleTime: Math.min(e.staleTime, a.staleTime)
    };
  }
  /**
   * Check if two time ranges overlap.
   */
  #d(e, a) {
    return e.start < a.end && a.start < e.end;
  }
  /**
   * Check if segment parameters include all required parameters.
   */
  #u(e, a) {
    return a.every((n) => e.includes(n));
  }
  /**
   * Find segments overlapping range with required parameters.
   */
  #l(e, a, n) {
    return e.filter((i) => this.#d(i.timeRange, a) && this.#u(i.parameters, n));
  }
  /**
   * Calculate gaps in coverage.
   */
  #h(e, a) {
    const n = [], i = [...e].sort((s, f) => s.timeRange.start.getTime() - f.timeRange.start.getTime());
    let c = a.start.getTime();
    const o = a.end.getTime();
    for (const s of i) {
      const f = s.timeRange.start.getTime(), d = s.timeRange.end.getTime();
      if (f > c && n.push({
        start: new Date(c),
        end: new Date(Math.min(f, o))
      }), d > c && (c = d), c >= o) break;
    }
    return c < o && n.push({ start: new Date(c), end: new Date(o) }), n;
  }
  /**
   * Merge data from segments, filtering to range.
   * Uses composite key for deduplication based on timeIdentityFields.
   */
  #m(e, a, n) {
    const i = e.flatMap((f) => f.records), c = a.start.getTime(), o = a.end.getTime(), s = i.filter((f) => {
      const d = f.time.getTime();
      return d >= c && d <= o;
    });
    return this.#n(s, n);
  }
  /**
   * Merge data from segments WITHOUT filtering to range.
   * Uses composite key for deduplication based on timeIdentityFields.
   */
  #f(e, a) {
    const n = e.flatMap((i) => i.records);
    return this.#n(n, a);
  }
  /**
   * Count records in entry.
   */
  #b(e) {
    return e.segments.reduce((a, n) => a + n.records.length, 0);
  }
  /**
   * Trim records from entry (for eviction).
   */
  #p(e, a) {
    if (a <= 0) return 0;
    let n = 0;
    for (const i of e.segments) {
      if (n >= a) break;
      if (i.records.length === 0) continue;
      const c = Math.min(a - n, Math.floor(i.records.length * 0.5));
      if (c <= 0) continue;
      const o = e.lastAccessRange ? (e.lastAccessRange.start.getTime() + e.lastAccessRange.end.getTime()) / 2 : i.records[i.records.length - 1].time.getTime(), s = (i.timeRange.start.getTime() + i.timeRange.end.getTime()) / 2;
      o > s ? (i.records.splice(0, c), i.records.length > 0 && (i.timeRange.start = i.records[0].time)) : (i.records.splice(-c, c), i.records.length > 0 && (i.timeRange.end = i.records[i.records.length - 1].time)), n += c;
    }
    return e.segments = e.segments.filter((i) => i.records.length > 0), n;
  }
  /**
   * Get datasets sorted by cadence (highest cadence evict first).
   */
  #y() {
    const e = Array.from(this.#e.entries());
    return e.sort((a, n) => {
      const i = a[1].cadence_ms, c = n[1].cadence_ms;
      return i === void 0 && c === void 0 ? a[0].localeCompare(n[0]) : i === void 0 ? -1 : c === void 0 ? 1 : i - c;
    }), e.map(([a]) => a);
  }
  /**
   * Enforce per-dataset record limit.
   */
  #w(e) {
    const a = this.#b(e);
    a > this.#a.maxRecordsPerDataset && this.#p(e, a - this.#a.maxRecordsPerDataset);
  }
  /**
   * Enforce global record limit (evicts from high-cadence datasets first).
   */
  #g() {
    const e = this.getStats();
    if (e.totalRecords <= e.maxTotalRecords) return;
    const a = this.#y();
    let n = e.totalRecords - e.maxTotalRecords;
    for (const i of a) {
      if (n <= 0) break;
      const c = this.#e.get(i);
      if (c) {
        const o = this.#p(c, n);
        n -= o;
      }
    }
  }
}
const ht = new J6();
class Q6 {
  /**
   * Viewport data keyed by dataset key.
   * Stored as reactive SvelteMap so components are notified of changes.
   */
  #e = new Nr();
  // ==================
  // Public API for Components
  // ==================
  /**
   * Get viewport data for a dataset (for rendering).
   *
   * Returns undefined if no data is cached for this dataset.
   * Components use this via $derived to stay in sync.
   *
   * @param datasetKey - Dataset key (use datasetKey() helper)
   * @returns ViewportData with records, status, and error info
   */
  getViewportData(e) {
    return this.#e.get(e);
  }
  /**
   * Get just the records for a dataset (convenience method).
   *
   * @param datasetKey - Dataset key
   * @returns Array of records, or empty array if not available
   */
  getRecords(e) {
    return this.#e.get(e)?.records ?? [];
  }
  /**
   * Get the status for a dataset.
   *
   * @param datasetKey - Dataset key
   * @returns Status or undefined if dataset not tracked
   */
  getStatus(e) {
    return this.#e.get(e)?.status;
  }
  /**
   * Check if data is being loaded for a dataset.
   */
  isLoading(e) {
    const a = this.getStatus(e);
    return a === "loading" || a === "partial";
  }
  /**
   * Check if there's an error for a dataset.
   */
  hasError(e) {
    return this.getStatus(e) === "error";
  }
  /**
   * Check if data is tracked for a dataset.
   */
  hasData(e) {
    return this.#e.has(e);
  }
  // ==================
  // Interpolation API
  // ==================
  /**
   * Get an interpolated value at a specific time.
   *
   * Uses binary search to find approximate position, then searches
   * backwards/forwards for nearest non-NaN values (skipping fill values).
   * Terminates search early if gap exceeds limit.
   *
   * Complexity: O(log n + gap_limit/cadence) where the linear search
   * is bounded by gap_limit (e.g., 3h/1min = 180 records max).
   *
   * @param datasetKey - Dataset key (use datasetKey() helper)
   * @param time - Target time for interpolation
   * @param parameter - Parameter name to interpolate
   * @param config - Interpolation configuration (optional)
   * @returns Interpolated value with status
   */
  getInterpolatedValue(e, a, n, i = {}) {
    const c = { ...x6, ...i }, o = a.getTime(), f = this.#e.get(e)?.records ?? [];
    if (f.length === 0)
      return {
        value: c.fallbackValue ?? NaN,
        status: "no_data",
        statusDetail: "No data available"
      };
    const { before: d, after: h, exactMatch: b } = this.#t(f, o);
    if (b !== null) {
      const w = this.#r(f[b], n);
      if (w !== null && !isNaN(w))
        return { value: w, status: "exact" };
    }
    const m = b !== null ? b - 1 : d ?? -1, p = this.#a(f, n, m, -1, o, c.gapLimitMs), g = b !== null ? b + 1 : h ?? f.length, v = this.#a(f, n, g, 1, o, c.gapLimitMs);
    if (p === null && v === null)
      return {
        value: c.fallbackValue ?? NaN,
        status: "no_data",
        statusDetail: "No valid data within gap limit"
      };
    if (p === null)
      return {
        value: c.fallbackValue ?? NaN,
        status: "no_data",
        statusDetail: "Before earliest valid data"
      };
    if (v === null)
      return {
        value: c.fallbackValue ?? NaN,
        status: "no_data",
        statusDetail: "After latest valid data"
      };
    const k = v.timeMs - p.timeMs, S = v.index - p.index - 1;
    if (k > c.gapLimitMs) {
      const w = (k / 36e5).toFixed(1), y = (c.gapLimitMs / (1e3 * 60 * 60)).toFixed(1);
      return {
        value: c.fallbackValue ?? NaN,
        status: "gap_exceeded",
        statusDetail: `${w}h gap exceeds ${y}h limit (${S} NaN values)`,
        gapMs: k,
        skippedNaNs: S
      };
    }
    let N;
    switch (c.method) {
      case "nearest":
        N = o - p.timeMs < v.timeMs - o ? p.value : v.value;
        break;
      case "previous":
        N = p.value;
        break;
      case "linear":
      default: {
        const w = (o - p.timeMs) / (v.timeMs - p.timeMs);
        N = p.value + w * (v.value - p.value);
        break;
      }
    }
    const I = Math.round(k / (1e3 * 60));
    let x;
    return S === 0 ? x = I < 60 ? `${I}min cadence` : `${(k / (1e3 * 60 * 60)).toFixed(1)}h cadence` : x = `${I < 60 ? `${I}min` : `${(k / 36e5).toFixed(1)}h`} gap (${S} NaN${S > 1 ? "s" : ""} skipped)`, {
      value: N,
      status: "interpolated",
      statusDetail: x,
      gapMs: k,
      skippedNaNs: S
    };
  }
  /**
   * Search for the nearest valid (non-NaN) value in a direction.
   *
   * Terminates early if the time gap from target exceeds gapLimitMs,
   * ensuring O(gap_limit / cadence) complexity instead of O(n).
   *
   * @param records - Array of records
   * @param parameter - Parameter name to check
   * @param startIndex - Index to start searching from
   * @param direction - -1 for backwards, 1 for forwards
   * @param targetMs - Target time in milliseconds
   * @param gapLimitMs - Maximum gap to search (for early termination)
   * @returns {index, timeMs, value} or null if not found within limit
   */
  #a(e, a, n, i, c, o) {
    const s = e.length;
    for (let f = n; i === -1 ? f >= 0 : f < s; f += i) {
      const d = e[f], h = d.time.getTime();
      if (Math.abs(h - c) > o)
        return null;
      const m = this.#r(d, a);
      if (m !== null && !isNaN(m))
        return { index: f, timeMs: h, value: m };
    }
    return null;
  }
  /**
   * Get multiple interpolated values at once.
   *
   * More efficient than calling getInterpolatedValue multiple times
   * since it only searches for bracketing records once.
   *
   * @param datasetKey - Dataset key
   * @param time - Target time for interpolation
   * @param parameters - Array of parameter names to interpolate
   * @param config - Interpolation configuration
   * @returns Map of parameter name to interpolated value
   */
  getInterpolatedValues(e, a, n, i = {}) {
    const c = /* @__PURE__ */ new Map();
    for (const o of n)
      c.set(o, this.getInterpolatedValue(e, a, o, i));
    return c;
  }
  /**
   * Find records bracketing a target time using binary search.
   *
   * @returns Object with indices: before, after, exactMatch (null if not found)
   */
  #t(e, a) {
    if (e.length === 0)
      return { before: null, after: null, exactMatch: null };
    let n = 0, i = e.length - 1;
    for (; n <= i; ) {
      const s = Math.floor((n + i) / 2), f = e[s].time.getTime();
      if (f === a)
        return { before: null, after: null, exactMatch: s };
      f < a ? n = s + 1 : i = s - 1;
    }
    const c = i >= 0 ? i : null, o = n < e.length ? n : null;
    return { before: c, after: o, exactMatch: null };
  }
  /**
   * Extract a numeric value from a record.
   * Returns null if the value is not a number.
   */
  #r(e, a) {
    const n = e[a];
    return typeof n == "number" ? n : null;
  }
  // ==================
  // API for DataFetchManager
  // ==================
  /**
   * Update viewport data from cache (synchronous, called on viewport change).
   *
   * This is the "fast path" - reads from DataCache immediately to provide
   * cached data to components without waiting for network.
   *
   * @param datasetKey - Dataset key
   * @param timeRange - Current viewport time range
   * @param parameters - Required parameters for this dataset
   */
  updateFromCache(e, a, n) {
    const i = ht.analyzeCacheForRange(e, a, n);
    let c;
    i.coverage === "full" ? c = "complete" : i.coverage === "partial" ? c = "partial" : c = "loading";
    const o = this.#e.get(e);
    this.#e.set(e, {
      ...o,
      records: i.cachedRecords,
      timeRange: a,
      status: c,
      cadence_ms: o?.cadence_ms ?? null,
      updatedAt: /* @__PURE__ */ new Date()
    });
  }
  /**
   * Update viewport data after a network fetch completes.
   *
   * Called by DataFetchManager when new data arrives from the network.
   * Re-reads from cache to get the complete picture.
   *
   * @param datasetKey - Dataset key
   * @param timeRange - Current viewport time range
   * @param parameters - Required parameters for this dataset
   */
  updateFromFetch(e, a, n) {
    const i = ht.analyzeCacheForRange(e, a, n), c = i.coverage === "full" ? "complete" : "partial", o = this.#e.get(e);
    this.#e.set(e, {
      ...o,
      records: i.cachedRecords,
      timeRange: a,
      status: c,
      cadence_ms: o?.cadence_ms ?? null,
      updatedAt: /* @__PURE__ */ new Date()
    });
  }
  /**
   * Set viewport data directly with pre-analyzed records.
   *
   * Used when the storage key differs from the cache key (e.g., when using
   * alternative datasets from x_relations). The caller reads from one cache
   * key and stores under the component-facing key.
   *
   * IMPORTANT: This method preserves existing data when new data is empty.
   * This ensures visual continuity during zoom transitions - users never see
   * their data suddenly disappear while waiting for a different resolution.
   *
   * @param datasetKey - Storage key (what components look up)
   * @param records - Pre-analyzed records from cache
   * @param timeRange - Current viewport time range
   * @param coverage - Coverage status from cache analysis
   * @param cadence_ms - Dataset cadence in milliseconds (from selection)
   */
  setViewportData(e, a, n, i, c = null) {
    const o = this.#e.get(e);
    if (a.length === 0 && o && o.records.length > 0) {
      this.#e.set(e, {
        ...o,
        timeRange: n,
        cadence_ms: c ?? o.cadence_ms,
        status: "loading",
        updatedAt: /* @__PURE__ */ new Date()
      });
      return;
    }
    let s;
    i === "full" ? s = "complete" : i === "partial" ? s = "partial" : s = "loading", this.#e.set(e, {
      ...o,
      records: a,
      timeRange: n,
      status: s,
      cadence_ms: c,
      updatedAt: /* @__PURE__ */ new Date()
    });
  }
  /**
   * Update only the timeRange (scale domain) without changing records.
   *
   * Used during panning when the viewport moves within the already-provided
   * buffered data range. Avoids expensive data updates and re-renders.
   *
   * @param datasetKey - Dataset key
   * @param timeRange - New viewport time range (for scale domain)
   * @returns true if updated, false if no existing data
   */
  updateTimeRange(e, a) {
    const n = this.#e.get(e);
    return n ? (n.timeRange.start.getTime() === a.start.getTime() && n.timeRange.end.getTime() === a.end.getTime() || this.#e.set(e, {
      ...n,
      timeRange: a
      // Don't update updatedAt - records haven't changed
    }), !0) : !1;
  }
  /**
   * Set error state for a dataset.
   *
   * Called by DataFetchManager when a fetch fails.
   * Preserves existing cached data if available.
   *
   * @param datasetKey - Dataset key
   * @param error - The error that occurred
   */
  setError(e, a) {
    const n = this.#e.get(e);
    this.#e.set(e, {
      ...n,
      records: n?.records ?? [],
      timeRange: n?.timeRange ?? {
        start: /* @__PURE__ */ new Date(),
        end: /* @__PURE__ */ new Date()
      },
      status: "error",
      error: a,
      cadence_ms: n?.cadence_ms ?? null,
      updatedAt: /* @__PURE__ */ new Date()
    });
  }
  /**
   * Set loading state for a dataset (before first fetch).
   *
   * @param datasetKey - Dataset key
   * @param timeRange - Viewport time range
   * @param cadence_ms - Dataset cadence in milliseconds (optional, preserves existing if not provided)
   */
  setLoading(e, a, n) {
    const i = this.#e.get(e);
    this.#e.set(e, {
      ...i,
      records: i?.records ?? [],
      timeRange: a,
      status: "loading",
      cadence_ms: n ?? i?.cadence_ms ?? null,
      updatedAt: /* @__PURE__ */ new Date()
    });
  }
  /**
   * Set throttled state for a dataset (too zoomed out to fetch).
   *
   * When throttled, we skip the fetch because expected records exceed
   * the maximum allowed based on zoom_detail_factor settings.
   *
   * @param datasetKey - Dataset key
   * @param throttleInfo - Info about why throttling occurred
   */
  setThrottled(e, a) {
    const n = this.#e.get(e);
    this.#e.set(e, {
      ...n,
      records: [],
      // Clear records when throttled
      timeRange: n?.timeRange ?? {
        start: /* @__PURE__ */ new Date(),
        end: /* @__PURE__ */ new Date()
      },
      status: "throttled",
      throttleInfo: a,
      cadence_ms: a.cadence_ms ?? n?.cadence_ms ?? null,
      updatedAt: /* @__PURE__ */ new Date()
    });
  }
  /**
   * Set status to 'no data' - viewport is outside dataset's available time range.
   *
   * The dataset has no data for the current viewport because
   * the viewport doesn't overlap with the dataset's startDate/stopDate range.
   * No fetch is needed - the user needs to pan to a different time range.
   *
   * @param datasetKey - Dataset key
   * @param panDirection - Direction user should pan to find data ('past' or 'future')
   */
  setNoData(e, a) {
    const n = this.#e.get(e);
    this.#e.set(e, {
      ...n,
      records: [],
      // No records when outside available range
      timeRange: n?.timeRange ?? {
        start: /* @__PURE__ */ new Date(),
        end: /* @__PURE__ */ new Date()
      },
      status: "no data",
      cadence_ms: n?.cadence_ms ?? null,
      updatedAt: /* @__PURE__ */ new Date(),
      // Store pan direction hint in throttleInfo (reusing structure)
      // This is a slight overload but avoids adding another optional field
      throttleInfo: a ? { expectedRecords: null, maxRecords: null, cadence_ms: null } : void 0
    });
  }
  /**
   * Set alternative dataset info (when using x_relations lower-cadence dataset).
   *
   * This is informational - the actual data comes through updateFromCache/updateFromFetch.
   * Components can display this info to users (e.g., "using 1-minute data instead of 1-second").
   *
   * @param datasetKey - Primary dataset key (used by components)
   * @param alternativeDataset - The alternative dataset ID being fetched
   * @param cadence_ms - Cadence of the alternative dataset
   */
  setAlternativeDataset(e, a, n) {
    const i = this.#e.get(e);
    i && this.#e.set(e, {
      ...i,
      alternativeInfo: { alternativeDataset: a, cadence_ms: n }
    });
  }
  /**
   * Clear alternative dataset info (when switching back to primary).
   *
   * @param datasetKey - Dataset key
   */
  clearAlternativeDataset(e) {
    const a = this.#e.get(e);
    if (!a || !a.alternativeInfo) return;
    const { alternativeInfo: n, ...i } = a;
    this.#e.set(e, i);
  }
  // ==================
  // Static Source API
  // ==================
  /**
   * Register a static source with time-varying records.
   *
   * Static sources store their values inline in the layout JSON.
   * This method creates a ViewportData entry with multiple records
   * spanning the time range, each with the same values but different
   * timestamps. This allows layers to use findRecordAtPlayhead()
   * identically for both HAPI and static sources.
   *
   * The record has keys matching the parameter_mapping targets (e.g., x_component,
   * y_component, z_component) rather than HAPI parameter names.
   *
   * @param key - Static dataset key (use staticDatasetKey() helper)
   * @param values - Static values from the layer's source.values
   * @param timeRange - Time range to generate records for
   * @param cadence_ms - Optional cadence (default: 60000ms = 1 minute)
   */
  registerStaticSource(e, a, n, i = 6e4) {
    const c = [], o = n.start.getTime(), s = n.end.getTime();
    for (let f = o; f <= s; f += i)
      c.push({ time: new Date(f), ...a });
    c.length === 0 && c.push({ time: n.start, ...a }), this.#e.set(e, {
      records: c,
      timeRange: n,
      status: "complete",
      cadence_ms: i,
      updatedAt: /* @__PURE__ */ new Date()
    });
  }
  /**
   * Register a derived source with pre-built TimeSeriesRecord[].
   *
   * Used by zarr_variable, field_line_tabular, and location_timeseries sources
   * that produce their own records rather than using the HAPI fetch pipeline.
   *
   * @param key - Dataset key (use sourceGroupKey(), fieldLineTabularKey(), etc.)
   * @param records - Pre-built time-series records
   * @param cadence_ms - Optional cadence hint for interpolation
   * @param status - Optional status (defaults to "complete" for synchronous derived sources)
   */
  registerProviderSource(e, a, n, i) {
    if (a.length === 0) {
      this.#e.set(e, {
        records: [],
        timeRange: {
          start: /* @__PURE__ */ new Date(),
          end: /* @__PURE__ */ new Date()
        },
        status: i ?? "complete",
        cadence_ms: n ?? null,
        updatedAt: /* @__PURE__ */ new Date()
      });
      return;
    }
    const c = {
      start: a[0].time,
      end: a[a.length - 1].time
    };
    this.#e.set(e, {
      records: a,
      timeRange: c,
      status: i ?? "complete",
      cadence_ms: n ?? null,
      updatedAt: /* @__PURE__ */ new Date()
    });
  }
  /**
   * Remove a static source registration.
   *
   * @param key - Static dataset key to remove
   */
  unregisterStaticSource(e) {
    this.#e.delete(e);
  }
  // ==================
  // Cache Management
  // ==================
  /**
   * Clear data for a specific dataset.
   */
  clearDataset(e) {
    this.#e.delete(e);
  }
  /**
   * Remove viewport data for datasets no longer in the layout.
   *
   * Prevents stale data from accumulating when layers are deleted.
   * Only removes HAPI dataset entries (keyed by datasetKey() which contains "server").
   * Static, field_line, and location_timeseries entries use keys with "type" field
   * and are managed by their own lifecycle.
   *
   * @param activeKeys - Set of HAPI dataset keys currently in the layout
   */
  removeOrphanedDatasets(e) {
    for (const a of this.#e.keys())
      a.includes('"server"') && !e.has(a) && this.#e.delete(a);
  }
  /**
   * Clear all cached data.
   */
  clearAll() {
    this.#e.clear();
  }
  // ==================
  // Debug / Stats
  // ==================
  /**
   * Get cache statistics.
   */
  getStats() {
    let e = 0;
    const a = {
      loading: 0,
      partial: 0,
      complete: 0,
      throttled: 0,
      "no data": 0,
      error: 0
    };
    for (const n of this.#e.values())
      e += n.records.length, a[n.status]++;
    return {
      trackedDatasets: this.#e.size,
      totalRecords: e,
      statusCounts: a
    };
  }
  /**
   * Get list of tracked dataset keys.
   */
  getTrackedDatasets() {
    return Array.from(this.#e.keys());
  }
}
const nt = new Q6(), Cf = 500, K6 = 3;
class $6 {
  /** Queue of scheduled tasks sorted by priority */
  #e = [];
  /** Whether we're currently processing tasks */
  #a = !1;
  /** Timestamp of last user activity */
  #t = 0;
  /** Timer for idle detection */
  #r = null;
  /** Browser idle callback handle */
  #n = null;
  constructor() {
    this.#t = Date.now();
  }
  /**
   * Schedule a task with priority.
   *
   * If a task with the same ID already exists, it's replaced.
   * Tasks are processed in priority order: critical → normal → low.
   *
   * Note: 'critical' priority is conceptual - those tasks should be called
   * directly and not through the scheduler.
   *
   * @param id - Unique task identifier (e.g., 'cache-prune', 'cache-merge')
   * @param priority - Task priority level ('normal' or 'low')
   * @param fn - Async or sync function to execute
   */
  schedule(e, a, n) {
    a === "critical" && (console.warn(
      `RenderScheduler: 'critical' priority tasks should be called directly, not scheduled. Treating "${e}" as 'normal'.`
    ), a = "normal"), this.cancel(e);
    const i = Symbol(e);
    this.#e.push({
      id: e,
      priority: a,
      fn: n,
      scheduledAt: Date.now(),
      cancelToken: i
    }), this.#e.sort((c, o) => {
      const s = {
        critical: -1,
        // Should not happen, but handle it
        normal: 0,
        low: 1
      };
      return s[c.priority] - s[o.priority];
    }), this.#c();
  }
  /**
   * Cancel a scheduled task by ID.
   */
  cancel(e) {
    this.#e = this.#e.filter((a) => a.id !== e);
  }
  /**
   * Signal user activity (pan/zoom/resize event).
   *
   * Resets idle detection timer. Low-priority work waits for
   * IDLE_TIMEOUT_MS of inactivity before running.
   */
  signalActivity() {
    this.#t = Date.now(), this.#r && clearTimeout(this.#r), this.#r = setTimeout(() => {
      this.#s();
    }, Cf);
  }
  /**
   * Check if the scheduler considers the system idle.
   */
  get isIdle() {
    return Date.now() - this.#t > Cf;
  }
  /**
   * Get current queue length.
   */
  get queueLength() {
    return this.#e.length;
  }
  /**
   * Process task queue.
   * Runs normal priority tasks immediately, defers low priority to idle time.
   */
  async #c() {
    if (!(this.#a || this.#e.length === 0)) {
      for (this.#a = !0; this.#e.length > 0 && this.#e[0].priority === "normal"; ) {
        const e = this.#e.shift();
        try {
          await e.fn();
        } catch (a) {
          console.error(`RenderScheduler: Task "${e.id}" failed:`, a);
        }
      }
      this.#a = !1, this.#e.length > 0 && this.#e[0].priority === "low" && this.isIdle && this.#i();
    }
  }
  /**
   * Schedule low-priority work to run during browser idle time.
   */
  #i() {
    this.#n === null && (this.#e.length === 0 || this.#e[0].priority !== "low" || (typeof requestIdleCallback == "function" ? this.#n = requestIdleCallback(
      (e) => {
        this.#o(e);
      },
      { timeout: 2e3 }
      // Ensure we run within 2 seconds even if never idle
    ) : this.#n = setTimeout(() => {
      this.#o(null);
    }, 0)));
  }
  /**
   * Process low-priority tasks during idle time.
   */
  async #o(e) {
    if (this.#n = null, !this.isIdle)
      return;
    this.#a = !0;
    let a = 0;
    for (; this.#e.length > 0 && this.#e[0].priority === "low" && !(a >= K6 || e && e.timeRemaining() < 1); ) {
      const n = this.#e.shift();
      try {
        await n.fn();
      } catch (i) {
        console.error(`RenderScheduler: Low-priority task "${n.id}" failed:`, i);
      }
      a++;
    }
    this.#a = !1, this.#e.length > 0 && this.#e[0].priority === "low" && this.#i();
  }
  /**
   * Called when user activity stops (idle detected via timeout).
   */
  #s() {
    this.#r = null, this.#e.length > 0 && this.#e[0].priority === "low" && this.#i();
  }
  /**
   * Get current queue status (for debugging).
   */
  getStatus() {
    const e = this.#e.filter((n) => n.priority === "normal").length, a = this.#e.filter((n) => n.priority === "low").length;
    return {
      totalTasks: this.#e.length,
      normalPriority: e,
      lowPriority: a,
      processing: this.#a,
      isIdle: this.isIdle,
      msSinceLastActivity: Date.now() - this.#t
    };
  }
  /**
   * Clear all pending tasks.
   */
  clear() {
    this.#e = [], this.#r && (clearTimeout(this.#r), this.#r = null), this.#n !== null && (typeof cancelIdleCallback == "function" ? cancelIdleCallback(this.#n) : clearTimeout(this.#n), this.#n = null);
  }
  /**
   * Force immediate processing of all tasks (use for testing/cleanup).
   */
  async flush() {
    for (; this.#e.length > 0; ) {
      const e = this.#e.shift();
      try {
        await e.fn();
      } catch (a) {
        console.error(`RenderScheduler: Task "${e.id}" failed during flush:`, a);
      }
    }
  }
}
const Yn = new $6(), e5 = 100, Pf = 3, Vc = 0.1, Ef = Zn;
class t5 {
  /** Last queried viewport range */
  #e = null;
  /** Current pixel width of plot area */
  #a = 0;
  /** Debounce timer for network requests */
  #t = null;
  /** Datasets waiting for debounce to complete (keyed by primaryKey) */
  #r = /* @__PURE__ */ new Map();
  /** In-flight fetch operations by dataset key (for deduplication) */
  #n = /* @__PURE__ */ new Set();
  /**
   * In-flight fetch ranges by dataset key (for status visualization).
   * Tracks the actual time ranges being fetched, not just dataset keys.
   * Uses $state for reactivity so StatusAggregator can read it.
   */
  #c = /* @__PURE__ */ Me(bt(/* @__PURE__ */ new Map()));
  /**
   * Active dataset configurations (keyed by primaryKey).
   * Tracks what dataset/parameters are currently being used for each primary dataset.
   * Used by prefetch to know what to fetch and with which cache key.
   * Also stores cadence_ms from selection to avoid re-deriving from INFO.
   */
  #i = /* @__PURE__ */ new Map();
  /**
   * Tracks datasets that have been fully fetched (for fetch_mode: "full").
   * Once fetched, these don't need to be refetched on viewport changes.
   */
  #o = /* @__PURE__ */ new Set();
  /**
   * Tracks the data range and cache version currently provided to render manager.
   * Used by fast-path optimization to avoid unnecessary data updates when panning
   * within buffered range AND cache hasn't changed (no prefetch completed).
   *
   * INVARIANT: Must be updated whenever setViewportData() is called for a key.
   * Failing to do so breaks the fast path in updateViewportDisplay(), causing
   * gaps during panning because it skips datasets with no provided data entry.
   */
  #s = /* @__PURE__ */ new Map();
  /** Global zoom detail factor from layout options */
  #d = 1;
  /** Prefetch factor from layout options (multiplier for viewport range) */
  #u = Pf;
  // ==================
  // Display Update (Ultra-Fast Path)
  // ==================
  /**
   * Ultra-fast display update for panning - called on EVERY frame during interaction.
   *
   * This method ONLY updates the time range in DataRenderManager when the viewport
   * is within already-buffered data. It performs NO cache access, NO filtering, and
   * NO network scheduling. This ensures smooth 60fps panning even with large datasets.
   *
   * Fast-path conditions (ALL must be true):
   * 1. We have previously provided data for this dataset
   * 2. Cache version unchanged (no prefetch completed since last update)
   * 3. Viewport within already-provided buffered range
   *
   * If any condition fails, we still update the time range (to keep the scale domain
   * current) but the full data update will happen when scheduleViewportFetch() runs
   * after the debounce period.
   *
   * @param timeRange - Current viewport time range
   * @param pixelWidth - Width of plot area in pixels (unused but kept for API consistency)
   * @param datasets - Datasets to check (with their parameters)
   */
  updateViewportDisplay(e, a, n) {
    Yn.signalActivity();
    for (const i of n) {
      const c = st(i.server, i.dataset), o = this.#s.get(c), s = this.#i.get(c);
      if (!o) continue;
      const f = s?.fetchKey ?? st(i.server, i.dataset), d = e.start.getTime() >= o.range.start.getTime() && e.end.getTime() <= o.range.end.getTime(), h = o.cacheVersion === ht.getVersion(f);
      nt.updateTimeRange(c, e);
    }
  }
  // ==================
  // Full Processing (Debounced)
  // ==================
  /**
   * Full viewport processing - called after debounce period settles.
   *
   * This handles ALL the expensive operations that should NOT run during panning:
   * - x_relations dataset selection
   * - Throttling checks
   * - Cache analysis (analyzeCacheForRange)
   * - Update render manager with fresh buffered records
   * - Gap detection and fetch scheduling
   *
   * @param timeRange - Current viewport time range
   * @param pixelWidth - Width of plot area in pixels
   * @param datasets - Datasets to fetch (with their parameters and fetch options)
   * @param globalZoomDetailFactor - Global zoom_detail_factor from layout options (default: 1)
   * @param prefetchFactor - Prefetch factor from layout options (default: 3 = 100% extra on each side)
   */
  scheduleViewportFetch(e, a, n, i = 1, c = Pf) {
    if (Yn.signalActivity(), this.#e = e, this.#a = a, this.#d = i, this.#u = c, n.some((s) => s.fetchMode !== "playhead_relative") && this.#l && this.#T(this.#l, e)) {
      Jn.abortAll(), this.#S();
      for (const [s] of this.#r)
        this.#i.get(s)?.fetchMode !== "playhead_relative" && (this.#r.delete(s), this.#s.delete(s));
    }
    for (const s of n) {
      const f = st(s.server, s.dataset), d = {
        global: i,
        maxElement: s.maxElementZoomDetailFactor
      }, h = xt.selectDatasetForZoom(s.server, s.dataset, e, a, d, s.cadenceAlternatives);
      if (!h.dataAvailability.isAvailable && s.fetchMode !== "full") {
        nt.setNoData(f, h.dataAvailability.panDirection), this.#i.delete(f), this.#s.delete(f);
        continue;
      }
      if (s.fetchMode === "full") {
        const B = s.dataset, V = st(s.server, B);
        if (this.#i.set(f, {
          server: s.server,
          primaryDataset: s.dataset,
          fetchDataset: B,
          fetchKey: V,
          parameters: s.parameters,
          cadence_ms: h.cadence_ms,
          fetchMode: "full"
        }), this.#o.has(V)) {
          const G = xt.getInfo(s.server, s.dataset), q = {
            start: G?.startDate ? pt(G.startDate) : /* @__PURE__ */ new Date(0),
            end: G?.stopDate ? pt(G.stopDate) : /* @__PURE__ */ new Date(864e13)
          }, E = ht.getAllOverlappingRecords(V, q, s.parameters) ?? [];
          nt.setViewportData(f, E, e, "full", h.cadence_ms), this.#s.set(f, {
            cacheVersion: ht.getVersion(V),
            range: e
          });
          continue;
        }
        this.#r.has(f) || this.#r.set(f, {
          ...s,
          dataset: B,
          primaryDataset: s.dataset,
          fetchMode: "full"
        });
        const X = ht.analyzeCacheForRange(V, e, s.parameters);
        nt.setViewportData(f, X.cachedRecords, e, X.coverage, h.cadence_ms);
        continue;
      }
      if (h.throttled) {
        nt.setThrottled(f, {
          expectedRecords: h.expectedRecords,
          maxRecords: h.maxRecords,
          cadence_ms: h.cadence_ms
        }), this.#i.delete(f), this.#s.delete(f);
        continue;
      }
      const b = h.selectedDataset ?? s.dataset, m = st(s.server, b), p = h.isAlternative, g = h.cadence_ms, v = ht.analyzeCacheForRange(m, e, s.parameters), k = s.fetchMode === "playhead_relative" ? 1 : this.#u, S = this.#k(e, k), N = ht.getVersion(m), I = this.#s.get(f), x = this.#i.get(f), w = I && I.cacheVersion === N, y = I && e.start.getTime() >= I.range.start.getTime() && e.end.getTime() <= I.range.end.getTime(), H = !x || x.fetchDataset === b && x.cadence_ms === g;
      if (w && y && H && v.coverage === "full")
        nt.updateTimeRange(f, e);
      else {
        const B = ht.getAllOverlappingRecords(m, S, s.parameters);
        nt.setViewportData(f, B ?? v.cachedRecords, e, v.coverage, g), B && B.length > 0 && this.#s.set(f, { cacheVersion: N, range: S });
      }
      p ? nt.setAlternativeDataset(f, b, g) : nt.clearAlternativeDataset(f), this.#i.set(f, {
        server: s.server,
        primaryDataset: s.dataset,
        fetchDataset: b,
        fetchKey: m,
        parameters: s.parameters,
        cadence_ms: g,
        fetchMode: s.fetchMode
      }), v.coverage !== "full" && this.#r.set(f, {
        ...s,
        dataset: b,
        // What we actually fetch
        primaryDataset: s.dataset
        // What components reference (original from layout)
      });
    }
    this.#r.size > 0 ? (this.#S(), this.#t = setTimeout(
      () => {
        this.#h();
      },
      e5
    )) : this.#p(), this.#l = { ...e };
  }
  /** Track last queried range for change detection */
  #l = null;
  // ==================
  // Fetch Execution
  // ==================
  /**
   * Execute debounced viewport fetch for all pending datasets.
   */
  async #h() {
    this.#t = null;
    const e = this.#e;
    if (!e)
      return;
    const a = new Map(this.#r);
    this.#r.clear();
    const n = [];
    for (const [i, c] of a) {
      const o = st(c.server, c.dataset);
      if (this.#n.has(o))
        continue;
      if (c.fetchMode === "full") {
        n.push(this.#f(i, o, c));
        continue;
      }
      const s = ht.analyzeCacheForRange(o, e, c.parameters);
      if (s.coverage === "full") {
        this.#g(i, o, e, c);
        continue;
      }
      s.gaps.length > 0 && n.push(this.#m(i, o, c, s.gaps, e));
    }
    await Promise.all(n), this.#p(), ht.needsMerge() && Yn.schedule("cache-merge", "low", () => {
      ht.mergeOverlappingSegments();
    });
  }
  /**
   * Fetch gaps for a single dataset.
   *
   * @param primaryKey - Key for render manager (what components reference)
   * @param fetchKey - Key for cache (actual dataset being fetched)
   * @param config - Dataset config with fetch details
   * @param gaps - Time ranges to fetch
   * @param viewport - Current viewport range
   */
  async #m(e, a, n, i, c) {
    this.#n.add(a);
    try {
      const o = i.map((s) => this.#b(a, n, s));
      await Promise.all(o), this.#g(e, a, c, n);
    } catch (o) {
      o instanceof Error && o.name !== "AbortError" && nt.setError(e, o);
    } finally {
      this.#n.delete(a);
    }
  }
  /**
   * Fetch the full dataset for "full" fetch mode.
   *
   * Uses INFO startDate/stopDate as the range, constrained by fetch_time_range if specified.
   *
   * @param primaryKey - Key for render manager (what components reference)
   * @param fetchKey - Key for cache (actual dataset being fetched)
   * @param config - Dataset config with fetch details
   */
  async #f(e, a, n) {
    if (!this.#o.has(a)) {
      this.#n.add(a);
      try {
        const i = xt.getInfo(n.server, n.dataset);
        if (!i?.startDate || !i?.stopDate) {
          console.warn(`[DataFetch] Cannot fetch full dataset ${n.dataset}: missing INFO startDate/stopDate`);
          return;
        }
        let c = {
          start: pt(i.startDate),
          end: pt(i.stopDate)
        };
        if (n.fetchTimeRange) {
          if (n.fetchTimeRange.start) {
            const f = pt(n.fetchTimeRange.start);
            f.getTime() > c.start.getTime() && (c = { ...c, start: f });
          }
          if (n.fetchTimeRange.end) {
            const f = pt(n.fetchTimeRange.end);
            f.getTime() < c.end.getTime() && (c = { ...c, end: f });
          }
        }
        if (c.start >= c.end) {
          console.warn(`[DataFetch] Invalid full range for ${n.dataset}: start >= end`);
          return;
        }
        await this.#b(a, n, c), this.#o.add(a);
        const o = ht.getAllOverlappingRecords(a, c, n.parameters) ?? [], s = this.#e ?? c;
        nt.setViewportData(e, o, s, "full", fr(i.cadence) ?? null), this.#s.set(e, {
          cacheVersion: ht.getVersion(a),
          range: s
        });
      } catch (i) {
        i instanceof Error && i.name !== "AbortError" && nt.setError(e, i);
      } finally {
        this.#n.delete(a);
      }
    }
  }
  /**
   * Fetch a single time range from HAPI.
   *
   * @param cacheKey - Key to store data in cache (actual dataset being fetched)
   * @param config - Dataset config (includes primaryDataset for info fallback)
   * @param timeRange - Time range to fetch
   */
  async #b(e, a, n) {
    let i = xt.getInfo(a.server, a.dataset);
    !i && a.primaryDataset && a.primaryDataset !== a.dataset && (i = xt.getInfo(a.server, a.primaryDataset));
    const c = fr(i?.cadence) ?? void 0;
    let o = this.#v(n, c);
    const s = this.#_(o, i);
    if (!s) return;
    o = s;
    const f = this.#x(o, a.fetchTimeRange);
    if (!f) return;
    o = f;
    const d = this.#y(a);
    if (!d) return;
    const { urlParams: h, dataParams: b } = d, m = await F6(a.server), p = await R6(a.server, a.dataset, h, o.start, o.end, m);
    this.#D(e, o);
    try {
      const g = await Jn.fetch(
        p,
        async (N) => {
          const I = await fetch(p, { signal: N });
          if (!I.ok)
            throw new Error(`HAPI data request failed: ${I.statusText}`);
          const x = await I.text();
          if (m === "csv") {
            if (x.trimStart().startsWith("{"))
              try {
                const w = JSON.parse(x);
                this.#M(w, p);
              } catch (w) {
                if (w instanceof Error && w.message.startsWith("HAPI error"))
                  throw w;
              }
            return q6(x, i, b);
          } else {
            let w;
            try {
              w = JSON.parse(x);
            } catch (y) {
              const H = d0(x);
              if (H !== x)
                console.warn(`[HAPI] Sanitized NaN/Infinity in JSON response from: ${p}`), w = JSON.parse(H);
              else
                throw console.error(`[HAPI Error] Failed to parse JSON response:
  URL: ${p}
  Parse error: ${y}
  Response (first 1000 chars): ${x.substring(0, 1e3)}`), new Error(`Failed to parse HAPI JSON response: ${y}`);
            }
            return this.#M(w, p), w;
          }
        },
        { staleTime: Ef }
      ), v = W6(i, b), k = B6(i, b), S = this.#w(g.data, b, v, k);
      ht.set(e, o, S, a.parameters, Ef, c, a.timeIdentityFields);
    } catch (g) {
      throw g instanceof Error && g.name !== "AbortError" && console.error(`Failed to fetch ${e}:`, g), g;
    } finally {
      this.#A(e, o);
    }
  }
  // ==================
  // Prefetch
  // ==================
  /**
   * Schedule prefetch for buffer zone.
   *
   * Uses "normal" priority so it runs immediately after viewport fetch completes.
   * This ensures smooth panning by keeping the buffer zone populated.
   * (Previously used "low" priority which waited for 500ms idle, causing gaps during panning)
   */
  #p() {
    this.#e && Yn.schedule("prefetch-buffer", "normal", () => {
      this.fetchPrefetchBuffer();
    });
  }
  /**
   * Fetch data for buffer zone beyond viewport.
   * Called after viewport fetches complete to keep buffer populated.
   *
   * Uses active configs to fetch with correct keys:
   * - For x_relations alternatives, fetches into the alternative dataset's cache
   * - Uses the same parameters that viewport fetches use
   */
  async fetchPrefetchBuffer() {
    const e = this.#e;
    if (!e) return;
    const a = this.#k(e, this.#u);
    for (const [n, i] of this.#i) {
      const {
        fetchKey: c,
        parameters: o,
        server: s,
        fetchDataset: f,
        primaryDataset: d,
        fetchMode: h
      } = i;
      if (h === "playhead_relative" || o.length === 0 || this.#n.has(c)) continue;
      const b = ht.analyzeCacheForRange(c, a, o);
      if (b.coverage !== "full")
        for (const m of b.gaps)
          try {
            await this.#b(
              c,
              {
                server: s,
                dataset: f,
                parameters: o,
                primaryDataset: d,
                maxElementZoomDetailFactor: 1,
                cadenceAlternatives: []
              },
              m
            );
          } catch {
          }
    }
    for (const [n, i] of this.#i) {
      if (i.fetchMode === "playhead_relative" || i.parameters.length === 0) continue;
      const c = this.#k(e, this.#u), o = ht.getAllOverlappingRecords(i.fetchKey, c, i.parameters);
      o && o.length > 0 && (nt.setViewportData(n, o, e, "full", i.cadence_ms), this.#s.set(n, {
        cacheVersion: ht.getVersion(i.fetchKey),
        range: c
      }));
    }
  }
  // ==================
  // HAPI Parameter Handling
  // ==================
  /**
   * Prepare parameters for a HAPI data request.
   *
   * HAPI specification requirements:
   * 1. Time parameter is always returned as the first column, even if not requested
   * 2. Response columns are in INFO order, not REQUEST order
   * 3. Including time first ensures consistent ordering (especially for KNMI server)
   *
   * This method:
   * - Filters out "time" from requested parameters (handled separately)
   * - Sorts remaining parameters by their position in the INFO response
   * - Returns both URL parameters (with time first) and data parameters (for parsing)
   *
   * For x_relations alternative datasets, falls back to primary dataset's INFO
   * since alternatives typically share the same parameter structure.
   *
   * @param config - Dataset configuration with parameters from visualisation layers
   * @returns URL parameters for request and data parameters for parsing (in INFO order)
   */
  #y(e) {
    let a = xt.getInfo(e.server, e.dataset);
    if (!a?.parameters && e.primaryDataset && e.primaryDataset !== e.dataset && (a = xt.getInfo(e.server, e.primaryDataset)), !a?.parameters)
      return console.warn(`[DataFetchManager] Skipping data request for ${e.dataset}: HAPI info not available. Cannot determine parameter order or fill values. Requested parameters: [${e.parameters.join(", ")}]`), null;
    const n = a.parameters.map((o) => o.name), i = n[0], c = e.parameters.filter((o) => o.toLowerCase() !== "time" && o !== i).sort((o, s) => {
      const f = n.indexOf(o), d = n.indexOf(s);
      return (f === -1 ? 999 : f) - (d === -1 ? 999 : d);
    });
    return { urlParams: [i, ...c], dataParams: c };
  }
  // ==================
  // Helpers
  // ==================
  /**
   * Parse HAPI JSON data response into TimeSeriesRecord[].
   *
   * Expected response structure (HAPI JSON format):
   * {
   *   "data": [
   *     ["2024-01-01T00:00:00Z", value1, value2, ...],
   *     ["2024-01-01T00:01:00Z", value1, value2, ...],
   *     ...
   *   ]
   * }
   *
   * Fill values (from HAPI info) are replaced with NaN so d3 renders gaps.
   * Type-specific transformations are applied based on HAPI parameter types:
   * - string: preserved as-is (not converted to number)
   * - isotime: converted to JavaScript Date object
   * - double/integer: converted to number
   *
   * @param response - Raw HAPI JSON response
   * @param dataParams - Data parameter names in INFO order (excludes time)
   * @param fillValues - Map of parameter name to fill value (values to replace with NaN)
   * @param paramTypes - Map of parameter name to HAPI type (for type-specific transformations)
   */
  #w(e, a, n, i) {
    if (!e || typeof e != "object")
      return [];
    const c = e, o = Array.isArray(c.data) ? c.data : [], s = [];
    for (const f of o) {
      if (!Array.isArray(f) || f.length < 1) continue;
      const d = pt(f[0]);
      if (isNaN(d.getTime())) continue;
      const h = { time: d };
      for (let b = 0; b < a.length && b + 1 < f.length; b++) {
        const m = a[b];
        let p = f[b + 1];
        const g = i.get(m);
        if (g !== "string") if (g === "isotime")
          typeof p == "string" && (p = pt(p));
        else if (typeof p == "string") {
          const v = parseFloat(p);
          p = isNaN(v) ? p : v;
        } else Array.isArray(p) && (p = p.map((v) => typeof v == "string" && parseFloat(v) || v));
        if (n.has(m)) {
          const v = n.get(m);
          typeof p == "number" ? Df(p, v) && (p = NaN) : Array.isArray(p) && (p = p.map((k) => typeof k == "number" && Df(k, v) ? NaN : k));
        }
        h[m] = p;
      }
      s.push(h);
    }
    return s;
  }
  /**
   * Update render manager with data from cache.
   *
   * This handles the key separation:
   * - fetchKey = where data is stored in cache (actual dataset)
   * - primaryKey = what components look up (original dataset from layout)
   *
   * When using an alternative dataset, we read from the alternative's cache
   * but update the primary key in render manager so components see the data.
   *
   * @param primaryKey - Key for render manager (what components reference)
   * @param fetchKey - Key for cache (actual dataset being fetched)
   * @param viewport - Current viewport range
   * @param config - Dataset config
   */
  #g(e, a, n, i) {
    const c = ht.analyzeCacheForRange(a, n, i.parameters), o = this.#i.get(e), s = o?.cadence_ms ?? null, f = o?.fetchMode === "playhead_relative" ? 1 : this.#u, d = this.#k(n, f), h = ht.getAllOverlappingRecords(a, d, i.parameters), b = e !== a;
    nt.setViewportData(e, h ?? c.cachedRecords, n, c.coverage, s), (h ?? c.cachedRecords).length > 0 && this.#s.set(e, {
      cacheVersion: ht.getVersion(a),
      range: d
    }), b ? nt.setAlternativeDataset(e, i.dataset, s) : nt.clearAlternativeDataset(e);
  }
  /**
   * Extend time range by cadence to capture records spanning viewport edges.
   * Essential for interval_image data (keograms, spectrograms) where a single
   * record can span days/weeks, but also harmless for regular timeseries.
   *
   * @param range - Original time range
   * @param cadence_ms - Dataset cadence in milliseconds (undefined = no extension)
   * @returns Extended time range
   */
  #v(e, a) {
    return a ? {
      start: new Date(e.start.getTime() - a),
      end: new Date(e.end.getTime() + a)
    } : e;
  }
  /**
   * Clip time range to dataset availability from HAPI INFO.
   * Some servers (like INTERMAGNET) are strict about request bounds.
   *
   * @param range - Time range to clip
   * @param info - HAPI info with startDate/stopDate
   * @returns Clipped range, or null if entirely outside availability
   */
  #_(e, a) {
    if (!a?.startDate && !a?.stopDate) return e;
    const n = a.startDate ? pt(a.startDate) : /* @__PURE__ */ new Date(0), i = a.stopDate ? pt(a.stopDate) : /* @__PURE__ */ new Date(864e13), c = new Date(Math.max(e.start.getTime(), n.getTime())), o = new Date(Math.min(e.end.getTime(), i.getTime()));
    return c >= o ? null : { start: c, end: o };
  }
  /**
   * Apply fetch_time_range constraint to limit the fetchable window.
   * Used to exclude erratic data periods or combine datasets.
   *
   * @param range - Time range to constrain
   * @param fetchTimeRange - Optional start/end constraints
   * @returns Constrained range, or null if entirely outside constraint
   */
  #x(e, a) {
    if (!a) return e;
    let n = e;
    const i = a.start ? pt(a.start) : null, c = a.end ? pt(a.end) : null;
    return i && n.start.getTime() < i.getTime() && (n = { ...n, start: i }), c && n.end.getTime() > c.getTime() && (n = { ...n, end: c }), n.start >= n.end ? null : n;
  }
  /**
   * Validate HAPI response status code.
   * HAPI servers return error information in JSON format even for CSV requests.
   * Status 1200 = OK, 1201 = OK but no data in range (both valid).
   *
   * @param jsonResponse - Parsed JSON response
   * @param url - Request URL for error logging
   * @throws Error if status code indicates an error
   */
  #M(e, a) {
    if (!e || typeof e != "object") return;
    const i = e.status, c = i?.code;
    if (c && c !== e0 && c !== t0)
      throw console.error(
        `[HAPI Error] Server returned error for request:
  URL: ${a}
  Status: ${i?.code} - ${i?.message}
  Full response:`,
        e
      ), new Error(`HAPI error ${i?.code}: ${i?.message}`);
  }
  /**
   * Add buffer to time range for prefetching.
   */
  #k(e, a) {
    const i = (e.end.getTime() - e.start.getTime()) * (a - 1) / 2;
    return {
      start: new Date(e.start.getTime() - i),
      end: new Date(e.end.getTime() + i)
    };
  }
  /**
   * Check if change is significant (>10% duration or shift).
   */
  #T(e, a) {
    const n = e.end.getTime() - e.start.getTime(), i = a.end.getTime() - a.start.getTime();
    if (Math.abs(i - n) / n > Vc)
      return !0;
    const o = Math.abs(a.start.getTime() - e.start.getTime()) / n, s = Math.abs(a.end.getTime() - e.end.getTime()) / n;
    return o > Vc || s > Vc;
  }
  /**
   * Clear debounce timer.
   */
  #S() {
    this.#t && (clearTimeout(this.#t), this.#t = null);
  }
  // ==================
  // Public API
  // ==================
  /**
   * Cancel all in-flight requests.
   */
  abortAll() {
    Jn.abortAll(), this.#S(), this.#r.clear();
  }
  /**
   * Remove orphaned datasets that are no longer in the layout.
   *
   * When layers are removed from the layout, their entries persist in internal
   * tracking maps (#activeConfigs, #pendingDatasets, #providedData, etc.).
   * This causes the prefetch loop to continue fetching data for deleted datasets
   * without throttling checks, since throttling is applied in scheduleViewportFetch()
   * which is never called for removed datasets.
   *
   * @param activeKeys - Set of dataset keys currently in the layout
   */
  removeOrphanedDatasets(e) {
    for (const n of this.#i.keys())
      e.has(n) || this.#i.delete(n);
    for (const n of this.#r.keys())
      e.has(n) || this.#r.delete(n);
    for (const n of this.#s.keys())
      e.has(n) || this.#s.delete(n);
    const a = new Set(Array.from(this.#i.values()).map((n) => n.fetchKey));
    for (const n of this.#o)
      a.has(n) || this.#o.delete(n);
    this.#r.size === 0 && this.#S();
  }
  /**
   * Get current viewport (for debugging/external use).
   */
  get currentViewport() {
    return this.#e;
  }
  // ==================
  // In-Flight Range Tracking (for status visualization)
  // ==================
  /**
   * Add a time range to the in-flight tracking for a dataset.
   */
  #D(e, a) {
    const n = r(this.#c).get(e) ?? [];
    n.push({ start: new Date(a.start), end: new Date(a.end) }), r(this.#c).set(e, n);
  }
  /**
   * Remove a time range from the in-flight tracking for a dataset.
   */
  #A(e, a) {
    const n = r(this.#c).get(e);
    if (!n) return;
    const i = new Date(a.start).getTime(), c = new Date(a.end).getTime(), o = n.filter((s) => s.start.getTime() !== i || s.end.getTime() !== c);
    o.length === 0 ? r(this.#c).delete(e) : r(this.#c).set(e, o);
  }
  /**
   * Get in-flight fetch ranges for a dataset (for status visualization).
   * Returns empty array if no fetches in progress.
   */
  getInFlightRanges(e) {
    return r(this.#c).get(e) ?? [];
  }
  /**
   * Get all in-flight ranges across all datasets.
   */
  getAllInFlightRanges() {
    return r(this.#c);
  }
  /**
   * Get statistics (for debugging).
   */
  getStats() {
    return {
      pendingDatasets: this.#r.size,
      inFlightFetches: this.#n.size,
      hasDebounceTimer: this.#t !== null
    };
  }
}
const Ai = new t5(), a5 = 300;
class r5 {
  #e = (
    /** Viewport width in pixels, bound directly via bind:clientWidth */
    /* @__PURE__ */ Me(800)
  );
  get width() {
    return r(this.#e);
  }
  set width(e) {
    re(this.#e, e, !0);
  }
  #a = /* @__PURE__ */ Me(800);
  get debouncedWidth() {
    return r(this.#a);
  }
  #t = null;
  constructor() {
    li(() => {
      ut(() => {
        const e = this.width;
        return this.#t && clearTimeout(this.#t), this.#t = setTimeout(
          () => {
            re(this.#a, e, !0), this.#t = null;
          },
          a5
        ), () => {
          this.#t && (clearTimeout(this.#t), this.#t = null);
        };
      });
    });
  }
}
const gr = new r5();
function n5(t, e) {
  return {
    server: t,
    dataset: e,
    parameters: /* @__PURE__ */ new Set(),
    maxElementZoomDetailFactor: 1,
    cadenceAlternatives: [],
    hasViewportMode: !1,
    hasPlayheadMode: !1,
    hasFullMode: !1
  };
}
function If(t, e, a) {
  const n = st(e, a);
  let i = t.get(n);
  return i || (i = n5(e, a), t.set(n, i)), i;
}
function Yc(t) {
  return t?.fetch_mode ?? "viewport_throttled";
}
function i5(t, e) {
  e === "viewport_throttled" ? t.hasViewportMode = !0 : e === "playhead_relative" ? t.hasPlayheadMode = !0 : e === "full" && (t.hasFullMode = !0);
}
function c5(t) {
  return t.hasFullMode ? "full" : t.hasViewportMode ? "viewport_throttled" : t.hasPlayheadMode ? "playhead_relative" : "viewport_throttled";
}
function o5(t, e) {
  if (t)
    for (const a of t)
      typeof a == "string" && a && e.add(a);
}
function s5(t, e) {
  if (t) {
    for (const a of Object.values(t))
      if (typeof a == "string" && a)
        e.add(a);
      else if (typeof a == "object" && a !== null) {
        const n = a;
        typeof n.parameter == "string" && e.add(n.parameter);
      }
  }
}
function Nf(t, e, a = Zn) {
  const n = fr(t?.fetch_lookback) ?? a, i = fr(t?.fetch_lookahead) ?? a;
  (!e.fetchLookbackMs || n > e.fetchLookbackMs) && (e.fetchLookbackMs = n), (!e.fetchLookaheadMs || i > e.fetchLookaheadMs) && (e.fetchLookaheadMs = i);
}
function f5(t, e) {
  if (!t)
    return { ...e };
  const a = { ...t };
  return e.start && (!a.start || e.start > a.start) && (a.start = e.start), e.end && (!a.end || e.end < a.end) && (a.end = e.end), a;
}
function Lf(t, e) {
  if (!e) return;
  const a = e.zoom_detail_factor ?? 1;
  if (a > t.maxElementZoomDetailFactor && (t.maxElementZoomDetailFactor = a), e.time_parameter && (t.timeParameter = e.time_parameter), e.time_identity_fields && (t.timeIdentityFields = e.time_identity_fields), e.fetch_time_range) {
    const n = e.fetch_time_range;
    t.fetchTimeRange = f5(t.fetchTimeRange, n);
  }
  e.assumed_cadence && (t.assumedCadence = e.assumed_cadence);
}
function l5(t, e) {
  if (e?.length)
    for (const a of e)
      t.cadenceAlternatives.some((n) => n.dataset === a.dataset) || t.cadenceAlternatives.push(a);
}
class d5 {
  /**
   * Maps driver names to the entities that depend on them.
   * Example: "station_server" → ["dataset:server1:abk", "dataset:server1:ups"]
   */
  #e = /* @__PURE__ */ new Map();
  /**
   * Maps entity keys to the drivers they depend on.
   * Example: "dataset:server1:abk" → ["station_server", "station_template"]
   */
  #a = /* @__PURE__ */ new Map();
  /**
   * Reactive signal: sorted array of tracked driver names.
   * Only written when the set of names actually changes.
   */
  #t = /* @__PURE__ */ Me(bt([]));
  /**
   * Whether we're in the middle of a rebuild cycle.
   * When true, recordDependency() skips reactive signal updates.
   */
  #r = !1;
  /**
   * Record a dependency from an entity to a driver.
   *
   * @param driverName - The driver being accessed
   * @param entityKey - The entity that depends on this driver
   */
  recordDependency(e, a) {
    let n = this.#e.get(e);
    n || (n = /* @__PURE__ */ new Set(), this.#e.set(e, n));
    const i = n.has(a);
    n.add(a);
    let c = this.#a.get(a);
    c || (c = /* @__PURE__ */ new Set(), this.#a.set(a, c));
    const o = c.has(e);
    c.add(e), (!i || !o) && !this.#r && re(this.#t, this.#n(), !0);
  }
  /**
   * Create a recorder callback suitable for deepResolveDrivers options.
   *
   * @param entityKey - The entity being resolved
   * @returns A callback that records dependencies
   *
   * @example
   * ```typescript
   * const resolved = deepResolveDrivers(source, drivers, {
   *   onDriverAccess: tracker.createRecorder("dataset:server:id")
   * });
   * ```
   */
  createRecorder(e) {
    return (a, n) => {
      this.recordDependency(a, e);
    };
  }
  /**
   * Get all entities that depend on any of the given drivers.
   *
   * @param changedDrivers - Array of driver names that changed
   * @returns Set of entity keys affected by the changes
   */
  getAffectedEntities(e) {
    const a = /* @__PURE__ */ new Set();
    for (const n of e) {
      const i = this.#e.get(n);
      if (i)
        for (const c of i)
          a.add(c);
    }
    return a;
  }
  /**
   * Get all entities that depend on a specific driver.
   *
   * @param driverName - The driver to check
   * @returns Set of entity keys (empty if none)
   */
  getEntitiesForDriver(e) {
    const a = this.#e.get(e);
    return a ? new Set(a) : /* @__PURE__ */ new Set();
  }
  /**
   * Get all drivers that an entity depends on.
   *
   * @param entityKey - The entity to check
   * @returns Set of driver names (empty if none)
   */
  getDriversForEntity(e) {
    const a = this.#a.get(e);
    return a ? new Set(a) : /* @__PURE__ */ new Set();
  }
  /**
   * Clear dependencies for a specific entity.
   * Call this before re-resolving an entity to ensure stale dependencies are removed.
   *
   * @param entityKey - The entity to clear
   */
  clearEntityDependencies(e) {
    const a = this.#a.get(e);
    if (a) {
      for (const n of a) {
        const i = this.#e.get(n);
        i && (i.delete(e), i.size === 0 && this.#e.delete(n));
      }
      this.#a.delete(e), this.#r || re(this.#t, this.#n(), !0);
    }
  }
  /**
   * Clear all dependencies.
   * Call this when the layout changes and all dependencies need to be re-collected.
   */
  clearAll() {
    this.#e.clear(), this.#a.clear(), this.#r = !1, re(this.#t, [], !0);
  }
  /**
   * Begin a rebuild cycle. Clears internal maps without firing reactive signals.
   * Call commitRebuild() after re-recording all dependencies.
   */
  beginRebuild() {
    this.#r = !0, this.#e.clear(), this.#a.clear();
  }
  /**
   * End a rebuild cycle. Compares the new tracked driver names to the previous
   * value and only writes the reactive signal if they changed.
   */
  commitRebuild() {
    this.#r = !1;
    const e = this.#n();
    u5(r(this.#t), e) || re(this.#t, e, !0);
  }
  /**
   * Check if any entities depend on a driver.
   */
  hasAnyDependents(e) {
    const a = this.#e.get(e);
    return a !== void 0 && a.size > 0;
  }
  /**
   * Get all tracked driver names (reactive).
   * Reading this creates a reactive dependency that only fires when
   * the set of tracked driver names actually changes.
   */
  get trackedDrivers() {
    return r(this.#t);
  }
  /**
   * Get all tracked entity keys.
   */
  get trackedEntities() {
    return Array.from(this.#a.keys());
  }
  /**
   * Get total number of dependency relationships.
   */
  get dependencyCount() {
    let e = 0;
    for (const a of this.#a.values())
      e += a.size;
    return e;
  }
  /**
   * Get sorted array of current driver names from internal map.
   */
  #n() {
    return Array.from(this.#e.keys()).sort();
  }
  /**
   * Get a snapshot of all dependencies for debugging.
   */
  getSnapshot() {
    const e = {};
    for (const [n, i] of this.#e)
      e[n] = Array.from(i);
    const a = {};
    for (const [n, i] of this.#a)
      a[n] = Array.from(i);
    return { driverToEntities: e, entityToDrivers: a };
  }
}
const pr = new d5();
function u5(t, e) {
  if (t.length !== e.length) return !1;
  for (let a = 0; a < t.length; a++)
    if (t[a] !== e[a]) return !1;
  return !0;
}
class h5 {
  /** Internal reactive map of registered providers, keyed by title */
  #e = new Nr();
  /**
   * Register a provider.
   * If a provider with the same title already exists, it will be replaced.
   */
  register(e) {
    this.#e.set(e.title, e);
  }
  /**
   * Unregister a provider by title.
   * No-op if the provider doesn't exist.
   */
  unregister(e) {
    this.#e.delete(e);
  }
  /**
   * Get a provider by title.
   */
  get(e) {
    return this.#e.get(e);
  }
  /**
   * Get all registered provider titles.
   * Reactive - updates when providers are registered/unregistered.
   */
  get titles() {
    return Array.from(this.#e.keys());
  }
  /**
   * Iterate over all registered providers.
   * Returns an iterator of [title, provider] entries.
   */
  entries() {
    return this.#e.entries();
  }
  /**
   * Check if a provider title is registered.
   */
  has(e) {
    return this.#e.has(e);
  }
  /**
   * Get the number of registered providers.
   */
  get size() {
    return this.#e.size;
  }
  /**
   * Clear all registered providers.
   * Useful for cleanup during layout changes.
   */
  clear() {
    this.#e.clear();
  }
}
class b5 extends h5 {
  /**
   * Get a specific instance from a provider.
   *
   * @param title - Provider title
   * @param instanceId - Instance ID within the provider
   * @returns Instance if found, undefined otherwise
   */
  getInstance(e, a) {
    const n = this.get(e);
    if (n)
      return n.instances.find((i) => i.id === a);
  }
}
const Ff = new b5(), m5 = 60 * 1e3;
class p5 {
  #e = !1;
  /**
   * Compute a signature of only the driver values that data sources depend on.
   * This avoids creating a reactive dependency on ALL drivers (like selected_stations)
   * when only a subset (like multi-dataset IDs/servers) are relevant to data fetching.
   *
   * Uses driverDependencyTracker to know which drivers are data-relevant.
   * On the first run (no tracked drivers yet), returns undefined to allow
   * the effect to run unconditionally and discover dependencies.
   */
  #a = /* @__PURE__ */ u(() => {
    const e = pr.trackedDrivers;
    if (e.length === 0) return;
    const a = Ee.drivers, n = {};
    for (const i of e)
      n[i] = a[i];
    return JSON.stringify(n);
  });
  /** Reset the initialized flag so start() can re-create effects after destroy. */
  reset() {
    this.#e = !1;
  }
  /**
   * Start watching layout and timeDomain for changes.
   * Called once from initDataSystem().
   */
  start() {
    this.#e || (this.#e = !0, ut(() => {
      if (!Ee.isSuccess || !Ee.data) return;
      const e = Ee.infoSources;
      dt(() => {
        for (const a of e)
          xt.fetchInfo(a.server, a.dataset);
      });
    }), ut(() => {
      const e = Ee.isSuccess && Ee.data;
      r(this.#a);
      const a = xt.isInfoLoaded, n = xt.loadedDatasetKeys;
      [...n];
      const i = Je.start, c = Je.end, o = Je.shouldAnimate;
      if (!e || !a)
        return;
      const s = this.#i(), f = new Set(s.map((v) => st(v.server, v.dataset)));
      if (dt(() => {
        Ai.removeOrphanedDatasets(f), nt.removeOrphanedDatasets(f);
      }), s.length === 0)
        return;
      xt.clearAssumedCadences();
      for (const v of s)
        v.assumedCadence && xt.registerAssumedCadence(v.server, v.dataset, v.assumedCadence);
      const d = s.filter((v) => {
        if (v.fetchMode !== "viewport_throttled") return !1;
        const k = st(v.server, v.dataset);
        return n.has(k);
      });
      if (d.length === 0)
        return;
      const h = gr.debouncedWidth, b = this.#p(), m = this.#y();
      dt(() => {
        Ai.updateViewportDisplay({ start: i, end: c }, h, d);
      });
      const g = setTimeout(
        () => {
          dt(() => {
            Ai.scheduleViewportFetch({ start: i, end: c }, h, d, b, m);
          });
        },
        o ? 250 : 100
      );
      return () => clearTimeout(g);
    }), ut(() => {
      const e = Ee.isSuccess && Ee.data, a = xt.isInfoLoaded, n = Ge.isInitialized;
      [...xt.loadedDatasetKeys];
      const c = Ge.debouncedPlayheadMs;
      if (!e || !a || !n)
        return;
      const s = this.#i().filter((f) => f.fetchMode !== "playhead_relative" ? !1 : xt.isDatasetInfoLoaded(f.server, f.dataset));
      s.length !== 0 && dt(() => {
        for (const f of s) {
          const d = f.fetchLookbackMs ?? Zn, h = f.fetchLookaheadMs ?? Zn, b = new Date(c - d), m = new Date(c + h);
          Ai.scheduleViewportFetch(
            { start: b, end: m },
            1e6,
            [f],
            1,
            // No global zoom factor adjustment
            1
          );
        }
      });
    }), ut(() => {
      if (!Ee.isSuccess || !Ee.data) return;
      const e = this.#d(), a = [];
      return dt(() => {
        for (const [, n] of e) {
          const i = setInterval(
            async () => {
              const c = xt.getInfo(n.server, n.dataset);
              if (!c?.stopDate) return;
              const o = pt(c.stopDate).valueOf();
              Je.end.valueOf() < o || await xt.checkForInfoUpdate(n.server, n.dataset);
            },
            n.intervalMs
          );
          a.push(i);
        }
      }), () => {
        for (const n of a)
          clearInterval(n);
      };
    }), ut(() => {
      if (!Ee.isSuccess || !Ee.data) return;
      const e = Je.start, a = Je.end, n = this.#t();
      dt(() => {
        const i = /* @__PURE__ */ new Set();
        for (const [c, o] of n)
          i.add(c), nt.registerStaticSource(c, o.values, { start: e, end: a });
      });
    }), ut(() => {
      !Ee.isSuccess || Ee.data;
    }), ut(() => {
      if (!Ee.isSuccess || !Ee.data) return;
      const e = Je.start, a = Je.end, n = this.#n();
      if (n.length === 0) return;
      const i = new Set(n.map((c) => c.provider_ref));
      for (const c of i)
        Ff.get(c);
      dt(() => {
        for (const c of n)
          this.#c(c, { start: e, end: a });
      });
    }));
  }
  /**
   * Collect static sources from all visualization layers in the layout.
   * Returns a Map of static dataset keys to their configurations.
   */
  #t() {
    const e = /* @__PURE__ */ new Map();
    return Jr(Ee.data, (a) => {
      if (!a.source || a.source.type !== "static") return;
      const n = a.id;
      if (!n) {
        console.warn("Static source layer missing id, skipping:", a);
        return;
      }
      const c = a.source.values;
      if (!c || typeof c != "object") {
        console.warn("Static source missing values:", n);
        return;
      }
      const o = a0(n);
      e.set(o, { layerId: n, values: c });
    }), e;
  }
  // ============================================
  // Field Line Tabular Sources
  // ============================================
  /**
   * Collect field_line_tabular sources from all visualization layers.
   */
  #r() {
    const e = [], a = /* @__PURE__ */ new Set();
    return Jr(Ee.data, (n) => {
      if (!n.source || n.source.type !== "field_line_tabular") return;
      const i = n.source;
      if (!i.model_ref) return;
      const c = r0(i.model_ref, i.columns);
      a.has(c) || (a.add(c), e.push({ model_ref: i.model_ref, columns: i.columns }));
    }), e;
  }
  // ============================================
  // Location Timeseries Sources
  // ============================================
  /**
   * Collect location_timeseries sources from all visualization layers.
   */
  #n() {
    const e = [], a = /* @__PURE__ */ new Set();
    return Jr(Ee.data, (n) => {
      if (!n.source || n.source.type !== "location_timeseries") return;
      const i = n.source;
      if (!i.provider_ref || !i.parameters?.length) return;
      const c = go(i.provider_ref, i.parameters, i.instance_id);
      a.has(c) || (a.add(c), e.push({
        provider_ref: i.provider_ref,
        parameters: i.parameters,
        sample_cadence: i.sample_cadence ?? "PT10S",
        instance_id: i.instance_id
      }));
    }), e;
  }
  /**
   * Load a location_timeseries source: sample location provider and convert to TimeSeriesRecord[].
   */
  #c(e, a) {
    const n = go(e.provider_ref, e.parameters, e.instance_id), i = Ff.get(e.provider_ref);
    if (!i) {
      nt.registerProviderSource(n, []);
      return;
    }
    const c = e.instance_id ? i.instances.find((k) => k.id === e.instance_id) : i.instances[0];
    if (!c?.api?.isReady()) {
      nt.registerProviderSource(n, []);
      return;
    }
    const o = c.api.getTimeRange();
    if (!o) {
      nt.registerProviderSource(n, []);
      return;
    }
    const s = fr(e.sample_cadence) ?? 1e4, f = Math.max(a.start.getTime(), o.start.getTime()), d = Math.min(a.end.getTime(), o.end.getTime());
    if (f > d) {
      nt.registerProviderSource(n, []);
      return;
    }
    const h = [];
    for (let k = f; k <= d; k += s)
      h.push(new Date(k));
    if (h.length === 0) {
      nt.registerProviderSource(n, []);
      return;
    }
    const b = e.parameters.some((k) => ["latitude", "longitude"].includes(k)), m = e.parameters.some((k) => ["x", "y", "z", "altitude"].includes(k)), p = b ? c.api.sampleLatLons(h) : null, g = m ? c.api.samplePositions(h) : null, v = [];
    for (let k = 0; k < h.length; k++) {
      const S = { time: h[k] };
      let N = !1;
      for (const I of e.parameters)
        switch (I) {
          case "latitude":
            p?.[k] ? (S.latitude = p[k].lat, N = !0) : S.latitude = NaN;
            break;
          case "longitude":
            p?.[k] ? (S.longitude = p[k].lon, N = !0) : S.longitude = NaN;
            break;
          case "altitude":
            if (g?.[k]) {
              const x = Math.sqrt(g[k].x ** 2 + g[k].y ** 2 + g[k].z ** 2);
              S.altitude = (x - 1) * 6371.2, N = !0;
            } else
              S.altitude = NaN;
            break;
          case "x":
            g?.[k] ? (S.x = g[k].x, N = !0) : S.x = NaN;
            break;
          case "y":
            g?.[k] ? (S.y = g[k].y, N = !0) : S.y = NaN;
            break;
          case "z":
            g?.[k] ? (S.z = g[k].z, N = !0) : S.z = NaN;
            break;
        }
      N && v.push(S);
    }
    nt.registerProviderSource(n, v, s);
  }
  /**
   * Collect datasets with their parameters and fetch options from the layout.
   * Uses forEachVisualisationLayer utility for consistent traversal across pane types.
   *
   * **Key Design Decisions:**
   *
   * 1. **Parameter Merging**: Datasets are keyed by `server:dataset` (NOT by fetch mode).
   *    Parameters are MERGED from all layers using the same dataset. This ensures a single
   *    HAPI request fetches all parameters needed by any layer.
   *
   * 2. **Fetch Mode Selection**: If a dataset has BOTH viewport_throttled AND playhead_relative
   *    consumers, only viewport_throttled is output. This is because:
   *    - The fetch manager's #activeConfigs is keyed by server:dataset, so both modes would
   *      overwrite each other, causing inconsistent throttling and fetch behavior.
   *    - viewport_throttled fetches the full viewport, which is a superset of what
   *      playhead_relative would fetch.
   *    - Playhead-relative consumers (trajectory layers) can read from the same cache
   *      since it's keyed by server:dataset.
   *
   * 3. **Playhead-only Datasets**: If a dataset is ONLY used by playhead_relative consumers,
   *    it gets playhead_relative mode with appropriate lookback/lookahead.
   */
  #i() {
    const e = /* @__PURE__ */ new Map(), a = dt(() => Ee.drivers);
    return pr.beginRebuild(), Jr(Ee.data, (n, i) => {
      this.#o(n, i) && this.#s(n, e, a);
    }), this.#h(e, a), this.#m(e, a), this.#f(e), pr.commitRebuild(), this.#b(e);
  }
  /**
   * Check if a visualization layer should be processed (visibility checks).
   *
   * Uses the unified container visibility API from LayoutManager which consolidates:
   * - visible property checks
   * - size-based collapse (panes with size <= 10)
   * - section collapse (top height = 0 or right width = 0)
   */
  #o(e, a) {
    if (e.visible === !1 || !e.source) return !1;
    const n = a.paneId ? `pane:${a.paneId}` : a.subplotIndex !== void 0 ? `subplot:${a.subplotIndex}` : null;
    return n ? Ee.isEffectivelyVisible(n) : !0;
  }
  /**
   * Process datasets from a visualization layer.
   */
  #s(e, a, n) {
    const i = this.#u(e), c = Yc(i);
    if (e.source?.type === "hapi_data" && e.source.server && e.source.dataset && this.#l(
      e.source.server,
      e.source.dataset,
      c,
      i,
      {
        parameters: e.source.parameters,
        parameterMapping: e.parameter_mapping
      },
      a,
      e.source.cadence_alternatives
    ), e.source?.type === "hapi_multi_dataset") {
      const s = `layer:multi:${e.id ?? "layer"}`, f = sr(e.source, n, {
        onDriverAccess: pr.createRecorder(s)
      });
      if (f) {
        const d = e.source.cadence_alternatives;
        for (const h of f.ids) {
          const b = f.dataset_template.replace(/\{id\}/g, h), m = d?.map((p) => ({
            dataset: p.dataset.replace(/\{id\}/g, h),
            cadence: p.cadence
          }));
          this.#l(
            f.server,
            b,
            c,
            i,
            {
              parameters: e.source.parameters,
              parameterMapping: e.parameter_mapping
            },
            a,
            m
          );
        }
      }
    }
    if (e.source?.type === "hapi_multi_parameter") {
      const s = `layer:multiparam:${e.id ?? "layer"}`, f = fs(e.source, n, {
        onDriverAccess: pr.createRecorder(s)
      });
      f && e.source.server && e.source.dataset && this.#l(
        e.source.server,
        e.source.dataset,
        c,
        i,
        {
          parameters: f,
          parameterMapping: e.parameter_mapping
        },
        a,
        e.source.cadence_alternatives
      );
    }
  }
  /**
   * Collect refetch intervals for all hapi_data sources that have
   * refetch_interval_seconds configured.
   * Returns a map of datasetKey → { server, dataset, intervalMs }.
   * Takes the minimum interval when the same dataset appears multiple times.
   * Clamps to MIN_REFETCH_INTERVAL_MS to prevent excessive server/app load.
   */
  #d() {
    const e = /* @__PURE__ */ new Map();
    return Jr(Ee.data, (a) => {
      if (a.source?.type !== "hapi_data" && a.source?.type !== "hapi_multi_parameter") return;
      const n = a.source;
      if (!n.server || !n.dataset) return;
      const i = n.fetch_options?.refetch_interval_seconds;
      if (typeof i != "number" || i <= 0) return;
      const c = Math.max(i * 1e3, m5), o = st(n.server, n.dataset), s = e.get(o);
      (!s || c < s.intervalMs) && e.set(o, { server: n.server, dataset: n.dataset, intervalMs: c });
    }), e;
  }
  /**
   * Get fetch_options from a layer's source.
   */
  #u(e) {
    return e.source?.type === "hapi_data" || e.source?.type === "hapi_multi_dataset" || e.source?.type === "hapi_multi_parameter" ? e.source.fetch_options ?? {} : {};
  }
  /**
   * Process a single HAPI dataset (either from hapi_data or expanded hapi_multi_dataset).
   */
  #l(e, a, n, i, c, o, s) {
    const f = If(o, e, a);
    i5(f, n), n === "playhead_relative" && Nf(i, f), o5(c.parameters, f.parameters), s5(c.parameterMapping, f.parameters), Lf(f, i), l5(f, s);
  }
  /**
   * Collect datasets from reference frame definitions (globe_3d panes).
   */
  #h(e, a) {
    Ku(Ee.data, (n, i) => {
      const c = n.fetch_options, o = Yc(c);
      if (n.type === "hapi_data" && n.server && n.dataset && this.#l(n.server, n.dataset, o, c ?? {}, { parameters: n.parameters }, e, n.cadence_alternatives), n.type === "hapi_multi_dataset") {
        const s = `frame:multi:${i}`, f = sr(n, a, {
          onDriverAccess: pr.createRecorder(s)
        });
        if (f) {
          const d = n.cadence_alternatives;
          for (const h of f.ids) {
            const b = f.dataset_template.replace(/\{id\}/g, h), m = d?.map((p) => ({
              dataset: p.dataset.replace(/\{id\}/g, h),
              cadence: p.cadence
            }));
            this.#l(f.server, b, o, c ?? {}, { parameters: n.parameters }, e, m);
          }
        }
      }
    });
  }
  /**
   * Collect datasets from location providers (data_providers.location_providers).
   * These are root-level trajectory data providers that need their data fetched.
   */
  #m(e, a) {
    const n = Ee.data?.data_providers?.location_providers;
    if (n)
      for (const i of n) {
        if ("provider_type" in i && (i.provider_type === "grid_location" || i.provider_type === "station_location") || !("source" in i) || !i.source) continue;
        const c = i.fetch_options, o = Yc(c);
        if (i.source.type === "hapi_data" && i.source.server && i.source.dataset && this.#l(i.source.server, i.source.dataset, o, c ?? {}, { parameterMapping: i.parameter_mapping }, e, i.source.cadence_alternatives), i.source.type === "hapi_multi_dataset") {
          const f = `provider:multi:${i.title ?? "unknown"}`, d = sr(i.source, a, {
            onDriverAccess: pr.createRecorder(f)
          });
          if (d) {
            const h = i.source.cadence_alternatives;
            for (const b of d.ids) {
              const m = d.dataset_template.replace(/\{id\}/g, b), p = h?.map((g) => ({
                dataset: g.dataset.replace(/\{id\}/g, b),
                cadence: g.cadence
              }));
              this.#l(d.server, m, o, c ?? {}, { parameterMapping: i.parameter_mapping }, e, p);
            }
          }
        }
      }
  }
  /**
   * Collect datasets from model input providers (data_providers.model_input_providers).
   * Model input providers in "hapi" mode need their HAPI data fetched via playhead_relative.
   */
  #f(e) {
    const a = Ee.data?.data_providers?.model_input_providers;
    if (a) {
      for (const n of a)
        if (n.mode !== "static" && n.sources)
          for (const i of n.sources) {
            if (!i.server || !i.dataset) continue;
            const c = If(e, i.server, i.dataset);
            c.hasPlayheadMode = !0;
            for (const s of Object.values(i.mappings)) {
              if (!s) continue;
              const f = typeof s == "string" ? s : s.parameter;
              f && c.parameters.add(f);
            }
            const o = i.fetch_options;
            Nf(o, c, Zn), Lf(c, o);
          }
    }
  }
  /**
   * Convert dataset map to array format for dataFetchManager.
   * Resolves fetch mode priority: full > viewport_throttled > playhead_relative
   */
  #b(e) {
    const a = [];
    for (const n of e.values()) {
      const i = c5(n), c = {
        server: n.server,
        dataset: n.dataset,
        parameters: Array.from(n.parameters),
        maxElementZoomDetailFactor: n.maxElementZoomDetailFactor,
        cadenceAlternatives: n.cadenceAlternatives,
        timeParameter: n.timeParameter,
        timeIdentityFields: n.timeIdentityFields,
        fetchTimeRange: n.fetchTimeRange,
        assumedCadence: n.assumedCadence
      };
      i === "playhead_relative" ? a.push({
        ...c,
        fetchMode: i,
        fetchLookbackMs: n.fetchLookbackMs,
        fetchLookaheadMs: n.fetchLookaheadMs
      }) : a.push({ ...c, fetchMode: i });
    }
    return a;
  }
  /**
   * Get global zoom_detail_factor from layout options.
   */
  #p() {
    return Ee.options?.zoom_detail_factor ?? 1;
  }
  /**
   * Get prefetch_factor from layout options.
   * This controls how much data is fetched beyond the viewport for smooth panning.
   * Default is 3 (100% extra on each side = 3x viewport total).
   */
  #y() {
    return Ee.options?.prefetch_factor ?? 3;
  }
}
const u0 = new p5();
class g5 {
  getStore() {
  }
  isStoreOpen() {
    return !1;
  }
}
class y5 {
  start() {
  }
  stop() {
  }
}
const v5 = new g5(), us = new y5();
let vo = !1;
function h0() {
  vo || (u0.start(), us.start(), vo = !0);
}
function _5() {
  ht.invalidateAll(), nt.clearAll(), xt.clearCache(), Jn.abortAll(), Jn.invalidateAll(), Yn.clear(), u0.reset(), us.reset(), vo = !1, console.debug("Data system reset");
}
function Rf(t) {
  return t instanceof Date ? t : pt(t);
}
function b0(t, e) {
  let a = !1, n = !1;
  function i() {
    if (a)
      throw new Error("[timeline-viewer] Controller has been destroyed");
  }
  function c() {
    if (i(), !n)
      throw new Error(
        "[timeline-viewer] Layout not yet loaded. Wait for the 'ready' event before calling this method."
      );
  }
  const o = {
    // ── Inbound control ────────────────────────────────────────────
    setTimeDomain(f, d, h) {
      c(), e.suppress("timeDomain");
      const b = Rf(f), m = Rf(d), p = h?.duration ?? null;
      Je.setTimeDomainAnimated(
        ka(b, "UTC"),
        ka(m, "UTC"),
        p
      );
    },
    updateDriver(f, d) {
      c(), e.suppress("drivers"), Ee.updateDriver(f, d);
    },
    updateDriverProperty(f, d, h) {
      c(), e.suppress("drivers"), Ee.updateDriverProperty(f, d, h);
    },
    setPlayheadPosition(f) {
      c(), e.suppress("playhead"), Ge.setPlayheadPosition(f);
    },
    // ── Outbound events ────────────────────────────────────────────
    on(f, d) {
      return i(), e.on(f, d);
    },
    // ── State queries ──────────────────────────────────────────────
    getTimeDomain() {
      return c(), { start: Je.start, end: Je.end };
    },
    getDrivers() {
      return c(), { ...Ee.drivers };
    },
    getStatus() {
      return i(), n ? Ee.status : { isLoading: !0, isError: !1, isSuccess: !1, error: null };
    },
    // ── Lifecycle ──────────────────────────────────────────────────
    destroy() {
      a || (a = !0, e.destroy(), t(), _5(), _6());
    }
  };
  function s() {
    n = !0, e.start();
  }
  return { controller: o, markInitialized: s };
}
class m0 {
  #e = /* @__PURE__ */ new Map();
  #a = null;
  #t = /* @__PURE__ */ new Set();
  // Debounce timers
  #r = null;
  #n = null;
  #c = 0;
  // Previous driver snapshot for diffing
  #i = {};
  // Track whether ready has been emitted (fire only once)
  #o = !1;
  /** Start watching reactive state. Call once after singletons are initialized. */
  start() {
    this.#a || (this.#a = li(() => {
      ut(() => {
        const e = Je.start, a = Je.end;
        this.#t.has("timeDomain") || (this.#r !== null && clearTimeout(this.#r), this.#r = setTimeout(
          () => {
            this.#r = null, this.#s("timeDomainChange", { start: e, end: a });
          },
          50
        ));
      }), ut(() => {
        const e = Ee.status;
        e.isSuccess && !this.#o && (this.#o = !0, this.#s("ready")), e.isError && e.error && this.#s("error", e.error);
      }), ut(() => {
        const e = Ee.drivers;
        if (this.#t.has("drivers")) return;
        const a = {};
        for (const [n, i] of Object.entries(e))
          a[n] = kl(i);
        for (const [n, i] of Object.entries(a)) {
          const c = this.#i[n];
          (c === void 0 || !w5(c, i)) && this.#s("driverChange", { name: n, value: i });
        }
        this.#i = a;
      }), ut(() => {
        const e = Ge.playheadTime.toDate(), a = Ge.playheadPosition.current;
        if (this.#t.has("playhead")) return;
        const n = Date.now(), i = n - this.#c;
        i >= 100 ? (this.#c = n, this.#s("playheadChange", { time: e, position: a })) : this.#n || (this.#n = setTimeout(
          () => {
            this.#n = null, this.#c = Date.now(), this.#s("playheadChange", {
              time: Ge.playheadTime.toDate(),
              position: Ge.playheadPosition.current
            });
          },
          100 - i
        ));
      });
    }));
  }
  /** Register a callback for an event. Returns an unsubscribe function. */
  on(e, a) {
    this.#e.has(e) || this.#e.set(e, /* @__PURE__ */ new Set());
    const n = this.#e.get(e);
    return n.add(a), () => {
      n.delete(a);
    };
  }
  /**
   * Suppress an event category during programmatic state changes.
   * The suppression is automatically cleared after a microtask.
   */
  suppress(e) {
    this.#t.add(e), queueMicrotask(() => {
      this.#t.delete(e);
    });
  }
  /** Emit an error event from outside the reactive system (e.g., fetch failure). */
  emitError(e) {
    this.#s("error", e);
  }
  /** Stop all reactive effects and clear listeners. */
  destroy() {
    this.#r !== null && clearTimeout(this.#r), this.#n !== null && clearTimeout(this.#n), this.#a?.(), this.#a = null, this.#e.clear(), this.#t.clear(), this.#i = {}, this.#o = !1;
  }
  #s(e, ...a) {
    const n = this.#e.get(e);
    if (n)
      for (const i of n)
        try {
          i(...a);
        } catch (c) {
          console.error(`[timeline-viewer] Error in ${e} listener:`, c);
        }
  }
}
function w5(t, e) {
  if (t === e) return !0;
  if (t === null || e === null || typeof t != "object" || typeof e != "object") return !1;
  const a = Object.keys(t), n = Object.keys(e);
  if (a.length !== n.length) return !1;
  for (const i of a)
    if (t[i] !== e[i])
      return !1;
  return !0;
}
const x5 = (t) => t;
function Rr(t, { delay: e = 0, duration: a = 400, easing: n = x5 } = {}) {
  const i = +getComputedStyle(t).opacity;
  return {
    delay: e,
    duration: a,
    easing: n,
    css: (c) => `opacity: ${c * i}`
  };
}
function Vi(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function k5(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function hs(t) {
  let e, a, n;
  t.length !== 2 ? (e = Vi, a = (s, f) => Vi(t(s), f), n = (s, f) => t(s) - f) : (e = t === Vi || t === k5 ? t : S5, a = t, n = t);
  function i(s, f, d = 0, h = s.length) {
    if (d < h) {
      if (e(f, f) !== 0) return h;
      do {
        const b = d + h >>> 1;
        a(s[b], f) < 0 ? d = b + 1 : h = b;
      } while (d < h);
    }
    return d;
  }
  function c(s, f, d = 0, h = s.length) {
    if (d < h) {
      if (e(f, f) !== 0) return h;
      do {
        const b = d + h >>> 1;
        a(s[b], f) <= 0 ? d = b + 1 : h = b;
      } while (d < h);
    }
    return d;
  }
  function o(s, f, d = 0, h = s.length) {
    const b = i(s, f, d, h - 1);
    return b > d && n(s[b - 1], f) > -n(s[b], f) ? b - 1 : b;
  }
  return { left: i, center: o, right: c };
}
function S5() {
  return 0;
}
function M5(t) {
  return t === null ? NaN : +t;
}
const T5 = hs(Vi), D5 = T5.right;
hs(M5).center;
const A5 = Math.sqrt(50), C5 = Math.sqrt(10), P5 = Math.sqrt(2);
function tc(t, e, a) {
  const n = (e - t) / Math.max(0, a), i = Math.floor(Math.log10(n)), c = n / Math.pow(10, i), o = c >= A5 ? 10 : c >= C5 ? 5 : c >= P5 ? 2 : 1;
  let s, f, d;
  return i < 0 ? (d = Math.pow(10, -i) / o, s = Math.round(t * d), f = Math.round(e * d), s / d < t && ++s, f / d > e && --f, d = -d) : (d = Math.pow(10, i) * o, s = Math.round(t / d), f = Math.round(e / d), s * d < t && ++s, f * d > e && --f), f < s && 0.5 <= a && a < 2 ? tc(t, e, a * 2) : [s, f, d];
}
function _o(t, e, a) {
  if (e = +e, t = +t, a = +a, !(a > 0)) return [];
  if (t === e) return [t];
  const n = e < t, [i, c, o] = n ? tc(e, t, a) : tc(t, e, a);
  if (!(c >= i)) return [];
  const s = c - i + 1, f = new Array(s);
  if (n)
    if (o < 0) for (let d = 0; d < s; ++d) f[d] = (c - d) / -o;
    else for (let d = 0; d < s; ++d) f[d] = (c - d) * o;
  else if (o < 0) for (let d = 0; d < s; ++d) f[d] = (i + d) / -o;
  else for (let d = 0; d < s; ++d) f[d] = (i + d) * o;
  return f;
}
function wo(t, e, a) {
  return e = +e, t = +t, a = +a, tc(t, e, a)[2];
}
function xo(t, e, a) {
  e = +e, t = +t, a = +a;
  const n = e < t, i = n ? wo(e, t, a) : wo(t, e, a);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Of(t, e, a) {
  t = +t, e = +e, a = (i = arguments.length) < 2 ? (e = t, t = 0, 1) : i < 3 ? 1 : +a;
  for (var n = -1, i = Math.max(0, Math.ceil((e - t) / a)) | 0, c = new Array(i); ++n < i; )
    c[n] = t + n * a;
  return c;
}
var E5 = { value: () => {
} };
function xc() {
  for (var t = 0, e = arguments.length, a = {}, n; t < e; ++t) {
    if (!(n = arguments[t] + "") || n in a || /[\s.]/.test(n)) throw new Error("illegal type: " + n);
    a[n] = [];
  }
  return new Yi(a);
}
function Yi(t) {
  this._ = t;
}
function I5(t, e) {
  return t.trim().split(/^|\s+/).map(function(a) {
    var n = "", i = a.indexOf(".");
    if (i >= 0 && (n = a.slice(i + 1), a = a.slice(0, i)), a && !e.hasOwnProperty(a)) throw new Error("unknown type: " + a);
    return { type: a, name: n };
  });
}
Yi.prototype = xc.prototype = {
  constructor: Yi,
  on: function(t, e) {
    var a = this._, n = I5(t + "", a), i, c = -1, o = n.length;
    if (arguments.length < 2) {
      for (; ++c < o; ) if ((i = (t = n[c]).type) && (i = N5(a[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++c < o; )
      if (i = (t = n[c]).type) a[i] = zf(a[i], t.name, e);
      else if (e == null) for (i in a) a[i] = zf(a[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var a in e) t[a] = e[a].slice();
    return new Yi(t);
  },
  call: function(t, e) {
    if ((i = arguments.length - 2) > 0) for (var a = new Array(i), n = 0, i, c; n < i; ++n) a[n] = arguments[n + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (c = this._[t], n = 0, i = c.length; n < i; ++n) c[n].value.apply(e, a);
  },
  apply: function(t, e, a) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var n = this._[t], i = 0, c = n.length; i < c; ++i) n[i].value.apply(e, a);
  }
};
function N5(t, e) {
  for (var a = 0, n = t.length, i; a < n; ++a)
    if ((i = t[a]).name === e)
      return i.value;
}
function zf(t, e, a) {
  for (var n = 0, i = t.length; n < i; ++n)
    if (t[n].name === e) {
      t[n] = E5, t = t.slice(0, n).concat(t.slice(n + 1));
      break;
    }
  return a != null && t.push({ name: e, value: a }), t;
}
var ko = "http://www.w3.org/1999/xhtml";
const Uf = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: ko,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function kc(t) {
  var e = t += "", a = e.indexOf(":");
  return a >= 0 && (e = t.slice(0, a)) !== "xmlns" && (t = t.slice(a + 1)), Uf.hasOwnProperty(e) ? { space: Uf[e], local: t } : t;
}
function L5(t) {
  return function() {
    var e = this.ownerDocument, a = this.namespaceURI;
    return a === ko && e.documentElement.namespaceURI === ko ? e.createElement(t) : e.createElementNS(a, t);
  };
}
function F5(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function p0(t) {
  var e = kc(t);
  return (e.local ? F5 : L5)(e);
}
function R5() {
}
function bs(t) {
  return t == null ? R5 : function() {
    return this.querySelector(t);
  };
}
function O5(t) {
  typeof t != "function" && (t = bs(t));
  for (var e = this._groups, a = e.length, n = new Array(a), i = 0; i < a; ++i)
    for (var c = e[i], o = c.length, s = n[i] = new Array(o), f, d, h = 0; h < o; ++h)
      (f = c[h]) && (d = t.call(f, f.__data__, h, c)) && ("__data__" in f && (d.__data__ = f.__data__), s[h] = d);
  return new Zt(n, this._parents);
}
function z5(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function U5() {
  return [];
}
function g0(t) {
  return t == null ? U5 : function() {
    return this.querySelectorAll(t);
  };
}
function V5(t) {
  return function() {
    return z5(t.apply(this, arguments));
  };
}
function Y5(t) {
  typeof t == "function" ? t = V5(t) : t = g0(t);
  for (var e = this._groups, a = e.length, n = [], i = [], c = 0; c < a; ++c)
    for (var o = e[c], s = o.length, f, d = 0; d < s; ++d)
      (f = o[d]) && (n.push(t.call(f, f.__data__, d, o)), i.push(f));
  return new Zt(n, i);
}
function y0(t) {
  return function() {
    return this.matches(t);
  };
}
function v0(t) {
  return function(e) {
    return e.matches(t);
  };
}
var H5 = Array.prototype.find;
function B5(t) {
  return function() {
    return H5.call(this.children, t);
  };
}
function W5() {
  return this.firstElementChild;
}
function G5(t) {
  return this.select(t == null ? W5 : B5(typeof t == "function" ? t : v0(t)));
}
var X5 = Array.prototype.filter;
function q5() {
  return Array.from(this.children);
}
function j5(t) {
  return function() {
    return X5.call(this.children, t);
  };
}
function Z5(t) {
  return this.selectAll(t == null ? q5 : j5(typeof t == "function" ? t : v0(t)));
}
function J5(t) {
  typeof t != "function" && (t = y0(t));
  for (var e = this._groups, a = e.length, n = new Array(a), i = 0; i < a; ++i)
    for (var c = e[i], o = c.length, s = n[i] = [], f, d = 0; d < o; ++d)
      (f = c[d]) && t.call(f, f.__data__, d, c) && s.push(f);
  return new Zt(n, this._parents);
}
function _0(t) {
  return new Array(t.length);
}
function Q5() {
  return new Zt(this._enter || this._groups.map(_0), this._parents);
}
function ac(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
ac.prototype = {
  constructor: ac,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function K5(t) {
  return function() {
    return t;
  };
}
function $5(t, e, a, n, i, c) {
  for (var o = 0, s, f = e.length, d = c.length; o < d; ++o)
    (s = e[o]) ? (s.__data__ = c[o], n[o] = s) : a[o] = new ac(t, c[o]);
  for (; o < f; ++o)
    (s = e[o]) && (i[o] = s);
}
function e3(t, e, a, n, i, c, o) {
  var s, f, d = /* @__PURE__ */ new Map(), h = e.length, b = c.length, m = new Array(h), p;
  for (s = 0; s < h; ++s)
    (f = e[s]) && (m[s] = p = o.call(f, f.__data__, s, e) + "", d.has(p) ? i[s] = f : d.set(p, f));
  for (s = 0; s < b; ++s)
    p = o.call(t, c[s], s, c) + "", (f = d.get(p)) ? (n[s] = f, f.__data__ = c[s], d.delete(p)) : a[s] = new ac(t, c[s]);
  for (s = 0; s < h; ++s)
    (f = e[s]) && d.get(m[s]) === f && (i[s] = f);
}
function t3(t) {
  return t.__data__;
}
function a3(t, e) {
  if (!arguments.length) return Array.from(this, t3);
  var a = e ? e3 : $5, n = this._parents, i = this._groups;
  typeof t != "function" && (t = K5(t));
  for (var c = i.length, o = new Array(c), s = new Array(c), f = new Array(c), d = 0; d < c; ++d) {
    var h = n[d], b = i[d], m = b.length, p = r3(t.call(h, h && h.__data__, d, n)), g = p.length, v = s[d] = new Array(g), k = o[d] = new Array(g), S = f[d] = new Array(m);
    a(h, b, v, k, S, p, e);
    for (var N = 0, I = 0, x, w; N < g; ++N)
      if (x = v[N]) {
        for (N >= I && (I = N + 1); !(w = k[I]) && ++I < g; ) ;
        x._next = w || null;
      }
  }
  return o = new Zt(o, n), o._enter = s, o._exit = f, o;
}
function r3(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function n3() {
  return new Zt(this._exit || this._groups.map(_0), this._parents);
}
function i3(t, e, a) {
  var n = this.enter(), i = this, c = this.exit();
  return typeof t == "function" ? (n = t(n), n && (n = n.selection())) : n = n.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), a == null ? c.remove() : a(c), n && i ? n.merge(i).order() : i;
}
function c3(t) {
  for (var e = t.selection ? t.selection() : t, a = this._groups, n = e._groups, i = a.length, c = n.length, o = Math.min(i, c), s = new Array(i), f = 0; f < o; ++f)
    for (var d = a[f], h = n[f], b = d.length, m = s[f] = new Array(b), p, g = 0; g < b; ++g)
      (p = d[g] || h[g]) && (m[g] = p);
  for (; f < i; ++f)
    s[f] = a[f];
  return new Zt(s, this._parents);
}
function o3() {
  for (var t = this._groups, e = -1, a = t.length; ++e < a; )
    for (var n = t[e], i = n.length - 1, c = n[i], o; --i >= 0; )
      (o = n[i]) && (c && o.compareDocumentPosition(c) ^ 4 && c.parentNode.insertBefore(o, c), c = o);
  return this;
}
function s3(t) {
  t || (t = f3);
  function e(b, m) {
    return b && m ? t(b.__data__, m.__data__) : !b - !m;
  }
  for (var a = this._groups, n = a.length, i = new Array(n), c = 0; c < n; ++c) {
    for (var o = a[c], s = o.length, f = i[c] = new Array(s), d, h = 0; h < s; ++h)
      (d = o[h]) && (f[h] = d);
    f.sort(e);
  }
  return new Zt(i, this._parents).order();
}
function f3(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function l3() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function d3() {
  return Array.from(this);
}
function u3() {
  for (var t = this._groups, e = 0, a = t.length; e < a; ++e)
    for (var n = t[e], i = 0, c = n.length; i < c; ++i) {
      var o = n[i];
      if (o) return o;
    }
  return null;
}
function h3() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function b3() {
  return !this.node();
}
function m3(t) {
  for (var e = this._groups, a = 0, n = e.length; a < n; ++a)
    for (var i = e[a], c = 0, o = i.length, s; c < o; ++c)
      (s = i[c]) && t.call(s, s.__data__, c, i);
  return this;
}
function p3(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function g3(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function y3(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function v3(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function _3(t, e) {
  return function() {
    var a = e.apply(this, arguments);
    a == null ? this.removeAttribute(t) : this.setAttribute(t, a);
  };
}
function w3(t, e) {
  return function() {
    var a = e.apply(this, arguments);
    a == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, a);
  };
}
function x3(t, e) {
  var a = kc(t);
  if (arguments.length < 2) {
    var n = this.node();
    return a.local ? n.getAttributeNS(a.space, a.local) : n.getAttribute(a);
  }
  return this.each((e == null ? a.local ? g3 : p3 : typeof e == "function" ? a.local ? w3 : _3 : a.local ? v3 : y3)(a, e));
}
function w0(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function k3(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function S3(t, e, a) {
  return function() {
    this.style.setProperty(t, e, a);
  };
}
function M3(t, e, a) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.style.removeProperty(t) : this.style.setProperty(t, n, a);
  };
}
function T3(t, e, a) {
  return arguments.length > 1 ? this.each((e == null ? k3 : typeof e == "function" ? M3 : S3)(t, e, a ?? "")) : bn(this.node(), t);
}
function bn(t, e) {
  return t.style.getPropertyValue(e) || w0(t).getComputedStyle(t, null).getPropertyValue(e);
}
function D3(t) {
  return function() {
    delete this[t];
  };
}
function A3(t, e) {
  return function() {
    this[t] = e;
  };
}
function C3(t, e) {
  return function() {
    var a = e.apply(this, arguments);
    a == null ? delete this[t] : this[t] = a;
  };
}
function P3(t, e) {
  return arguments.length > 1 ? this.each((e == null ? D3 : typeof e == "function" ? C3 : A3)(t, e)) : this.node()[t];
}
function x0(t) {
  return t.trim().split(/^|\s+/);
}
function ms(t) {
  return t.classList || new k0(t);
}
function k0(t) {
  this._node = t, this._names = x0(t.getAttribute("class") || "");
}
k0.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function S0(t, e) {
  for (var a = ms(t), n = -1, i = e.length; ++n < i; ) a.add(e[n]);
}
function M0(t, e) {
  for (var a = ms(t), n = -1, i = e.length; ++n < i; ) a.remove(e[n]);
}
function E3(t) {
  return function() {
    S0(this, t);
  };
}
function I3(t) {
  return function() {
    M0(this, t);
  };
}
function N3(t, e) {
  return function() {
    (e.apply(this, arguments) ? S0 : M0)(this, t);
  };
}
function L3(t, e) {
  var a = x0(t + "");
  if (arguments.length < 2) {
    for (var n = ms(this.node()), i = -1, c = a.length; ++i < c; ) if (!n.contains(a[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? N3 : e ? E3 : I3)(a, e));
}
function F3() {
  this.textContent = "";
}
function R3(t) {
  return function() {
    this.textContent = t;
  };
}
function O3(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function z3(t) {
  return arguments.length ? this.each(t == null ? F3 : (typeof t == "function" ? O3 : R3)(t)) : this.node().textContent;
}
function U3() {
  this.innerHTML = "";
}
function V3(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Y3(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function H3(t) {
  return arguments.length ? this.each(t == null ? U3 : (typeof t == "function" ? Y3 : V3)(t)) : this.node().innerHTML;
}
function B3() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function W3() {
  return this.each(B3);
}
function G3() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function X3() {
  return this.each(G3);
}
function q3(t) {
  var e = typeof t == "function" ? t : p0(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function j3() {
  return null;
}
function Z3(t, e) {
  var a = typeof t == "function" ? t : p0(t), n = e == null ? j3 : typeof e == "function" ? e : bs(e);
  return this.select(function() {
    return this.insertBefore(a.apply(this, arguments), n.apply(this, arguments) || null);
  });
}
function J3() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Q3() {
  return this.each(J3);
}
function K3() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function $3() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function e8(t) {
  return this.select(t ? $3 : K3);
}
function t8(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function a8(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function r8(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var a = "", n = e.indexOf(".");
    return n >= 0 && (a = e.slice(n + 1), e = e.slice(0, n)), { type: e, name: a };
  });
}
function n8(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var a = 0, n = -1, i = e.length, c; a < i; ++a)
        c = e[a], (!t.type || c.type === t.type) && c.name === t.name ? this.removeEventListener(c.type, c.listener, c.options) : e[++n] = c;
      ++n ? e.length = n : delete this.__on;
    }
  };
}
function i8(t, e, a) {
  return function() {
    var n = this.__on, i, c = a8(e);
    if (n) {
      for (var o = 0, s = n.length; o < s; ++o)
        if ((i = n[o]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = c, i.options = a), i.value = e;
          return;
        }
    }
    this.addEventListener(t.type, c, a), i = { type: t.type, name: t.name, value: e, listener: c, options: a }, n ? n.push(i) : this.__on = [i];
  };
}
function c8(t, e, a) {
  var n = r8(t + ""), i, c = n.length, o;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var f = 0, d = s.length, h; f < d; ++f)
        for (i = 0, h = s[f]; i < c; ++i)
          if ((o = n[i]).type === h.type && o.name === h.name)
            return h.value;
    }
    return;
  }
  for (s = e ? i8 : n8, i = 0; i < c; ++i) this.each(s(n[i], e, a));
  return this;
}
function T0(t, e, a) {
  var n = w0(t), i = n.CustomEvent;
  typeof i == "function" ? i = new i(e, a) : (i = n.document.createEvent("Event"), a ? (i.initEvent(e, a.bubbles, a.cancelable), i.detail = a.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function o8(t, e) {
  return function() {
    return T0(this, t, e);
  };
}
function s8(t, e) {
  return function() {
    return T0(this, t, e.apply(this, arguments));
  };
}
function f8(t, e) {
  return this.each((typeof e == "function" ? s8 : o8)(t, e));
}
function* l8() {
  for (var t = this._groups, e = 0, a = t.length; e < a; ++e)
    for (var n = t[e], i = 0, c = n.length, o; i < c; ++i)
      (o = n[i]) && (yield o);
}
var D0 = [null];
function Zt(t, e) {
  this._groups = t, this._parents = e;
}
function hi() {
  return new Zt([[document.documentElement]], D0);
}
function d8() {
  return this;
}
Zt.prototype = hi.prototype = {
  constructor: Zt,
  select: O5,
  selectAll: Y5,
  selectChild: G5,
  selectChildren: Z5,
  filter: J5,
  data: a3,
  enter: Q5,
  exit: n3,
  join: i3,
  merge: c3,
  selection: d8,
  order: o3,
  sort: s3,
  call: l3,
  nodes: d3,
  node: u3,
  size: h3,
  empty: b3,
  each: m3,
  attr: x3,
  style: T3,
  property: P3,
  classed: L3,
  text: z3,
  html: H3,
  raise: W3,
  lower: X3,
  append: q3,
  insert: Z3,
  remove: Q3,
  clone: e8,
  datum: t8,
  on: c8,
  dispatch: f8,
  [Symbol.iterator]: l8
};
function mt(t) {
  return typeof t == "string" ? new Zt([[document.querySelector(t)]], [document.documentElement]) : new Zt([[t]], D0);
}
function u8(t) {
  let e;
  for (; e = t.sourceEvent; ) t = e;
  return t;
}
function Ra(t, e) {
  if (t = u8(t), e === void 0 && (e = t.currentTarget), e) {
    var a = e.ownerSVGElement || e;
    if (a.createSVGPoint) {
      var n = a.createSVGPoint();
      return n.x = t.clientX, n.y = t.clientY, n = n.matrixTransform(e.getScreenCTM().inverse()), [n.x, n.y];
    }
    if (e.getBoundingClientRect) {
      var i = e.getBoundingClientRect();
      return [t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const h8 = { passive: !1 }, ri = { capture: !0, passive: !1 };
function Hc(t) {
  t.stopImmediatePropagation();
}
function $r(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function A0(t) {
  var e = t.document.documentElement, a = mt(t).on("dragstart.drag", $r, ri);
  "onselectstart" in e ? a.on("selectstart.drag", $r, ri) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function C0(t, e) {
  var a = t.document.documentElement, n = mt(t).on("dragstart.drag", null);
  e && (n.on("click.drag", $r, ri), setTimeout(function() {
    n.on("click.drag", null);
  }, 0)), "onselectstart" in a ? n.on("selectstart.drag", null) : (a.style.MozUserSelect = a.__noselect, delete a.__noselect);
}
const Ci = (t) => () => t;
function So(t, {
  sourceEvent: e,
  subject: a,
  target: n,
  identifier: i,
  active: c,
  x: o,
  y: s,
  dx: f,
  dy: d,
  dispatch: h
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: e, enumerable: !0, configurable: !0 },
    subject: { value: a, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: c, enumerable: !0, configurable: !0 },
    x: { value: o, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: f, enumerable: !0, configurable: !0 },
    dy: { value: d, enumerable: !0, configurable: !0 },
    _: { value: h }
  });
}
So.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function b8(t) {
  return !t.ctrlKey && !t.button;
}
function m8() {
  return this.parentNode;
}
function p8(t, e) {
  return e ?? { x: t.x, y: t.y };
}
function g8() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function ja() {
  var t = b8, e = m8, a = p8, n = g8, i = {}, c = xc("start", "drag", "end"), o = 0, s, f, d, h, b = 0;
  function m(x) {
    x.on("mousedown.drag", p).filter(n).on("touchstart.drag", k).on("touchmove.drag", S, h8).on("touchend.drag touchcancel.drag", N).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function p(x, w) {
    if (!(h || !t.call(this, x, w))) {
      var y = I(this, e.call(this, x, w), x, w, "mouse");
      y && (mt(x.view).on("mousemove.drag", g, ri).on("mouseup.drag", v, ri), A0(x.view), Hc(x), d = !1, s = x.clientX, f = x.clientY, y("start", x));
    }
  }
  function g(x) {
    if ($r(x), !d) {
      var w = x.clientX - s, y = x.clientY - f;
      d = w * w + y * y > b;
    }
    i.mouse("drag", x);
  }
  function v(x) {
    mt(x.view).on("mousemove.drag mouseup.drag", null), C0(x.view, d), $r(x), i.mouse("end", x);
  }
  function k(x, w) {
    if (t.call(this, x, w)) {
      var y = x.changedTouches, H = e.call(this, x, w), B = y.length, V, X;
      for (V = 0; V < B; ++V)
        (X = I(this, H, x, w, y[V].identifier, y[V])) && (Hc(x), X("start", x, y[V]));
    }
  }
  function S(x) {
    var w = x.changedTouches, y = w.length, H, B;
    for (H = 0; H < y; ++H)
      (B = i[w[H].identifier]) && ($r(x), B("drag", x, w[H]));
  }
  function N(x) {
    var w = x.changedTouches, y = w.length, H, B;
    for (h && clearTimeout(h), h = setTimeout(function() {
      h = null;
    }, 500), H = 0; H < y; ++H)
      (B = i[w[H].identifier]) && (Hc(x), B("end", x, w[H]));
  }
  function I(x, w, y, H, B, V) {
    var X = c.copy(), G = Ra(V || y, w), q, E, _;
    if ((_ = a.call(x, new So("beforestart", {
      sourceEvent: y,
      target: m,
      identifier: B,
      active: o,
      x: G[0],
      y: G[1],
      dx: 0,
      dy: 0,
      dispatch: X
    }), H)) != null)
      return q = _.x - G[0] || 0, E = _.y - G[1] || 0, function C(A, Z, ee) {
        var ne = G, ie;
        switch (A) {
          case "start":
            i[B] = C, ie = o++;
            break;
          case "end":
            delete i[B], --o;
          // falls through
          case "drag":
            G = Ra(ee || Z, w), ie = o;
            break;
        }
        X.call(
          A,
          x,
          new So(A, {
            sourceEvent: Z,
            subject: _,
            target: m,
            identifier: B,
            active: ie,
            x: G[0] + q,
            y: G[1] + E,
            dx: G[0] - ne[0],
            dy: G[1] - ne[1],
            dispatch: X
          }),
          H
        );
      };
  }
  return m.filter = function(x) {
    return arguments.length ? (t = typeof x == "function" ? x : Ci(!!x), m) : t;
  }, m.container = function(x) {
    return arguments.length ? (e = typeof x == "function" ? x : Ci(x), m) : e;
  }, m.subject = function(x) {
    return arguments.length ? (a = typeof x == "function" ? x : Ci(x), m) : a;
  }, m.touchable = function(x) {
    return arguments.length ? (n = typeof x == "function" ? x : Ci(!!x), m) : n;
  }, m.on = function() {
    var x = c.on.apply(c, arguments);
    return x === c ? m : x;
  }, m.clickDistance = function(x) {
    return arguments.length ? (b = (x = +x) * x, m) : Math.sqrt(b);
  }, m;
}
var mn = 0, Hn = 0, Nn = 0, P0 = 1e3, rc, Bn, nc = 0, Or = 0, Sc = 0, ni = typeof performance == "object" && performance.now ? performance : Date, E0 = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function ps() {
  return Or || (E0(y8), Or = ni.now() + Sc);
}
function y8() {
  Or = 0;
}
function ic() {
  this._call = this._time = this._next = null;
}
ic.prototype = I0.prototype = {
  constructor: ic,
  restart: function(t, e, a) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    a = (a == null ? ps() : +a) + (e == null ? 0 : +e), !this._next && Bn !== this && (Bn ? Bn._next = this : rc = this, Bn = this), this._call = t, this._time = a, Mo();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Mo());
  }
};
function I0(t, e, a) {
  var n = new ic();
  return n.restart(t, e, a), n;
}
function v8() {
  ps(), ++mn;
  for (var t = rc, e; t; )
    (e = Or - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --mn;
}
function Vf() {
  Or = (nc = ni.now()) + Sc, mn = Hn = 0;
  try {
    v8();
  } finally {
    mn = 0, w8(), Or = 0;
  }
}
function _8() {
  var t = ni.now(), e = t - nc;
  e > P0 && (Sc -= e, nc = t);
}
function w8() {
  for (var t, e = rc, a, n = 1 / 0; e; )
    e._call ? (n > e._time && (n = e._time), t = e, e = e._next) : (a = e._next, e._next = null, e = t ? t._next = a : rc = a);
  Bn = t, Mo(n);
}
function Mo(t) {
  if (!mn) {
    Hn && (Hn = clearTimeout(Hn));
    var e = t - Or;
    e > 24 ? (t < 1 / 0 && (Hn = setTimeout(Vf, t - ni.now() - Sc)), Nn && (Nn = clearInterval(Nn))) : (Nn || (nc = ni.now(), Nn = setInterval(_8, P0)), mn = 1, E0(Vf));
  }
}
function Yf(t, e, a) {
  var n = new ic();
  return e = e == null ? 0 : +e, n.restart((i) => {
    n.stop(), t(i + e);
  }, e, a), n;
}
var x8 = xc("start", "end", "cancel", "interrupt"), k8 = [], N0 = 0, Hf = 1, To = 2, Hi = 3, Bf = 4, Do = 5, Bi = 6;
function Mc(t, e, a, n, i, c) {
  var o = t.__transition;
  if (!o) t.__transition = {};
  else if (a in o) return;
  S8(t, a, {
    name: e,
    index: n,
    // For context during callback.
    group: i,
    // For context during callback.
    on: x8,
    tween: k8,
    time: c.time,
    delay: c.delay,
    duration: c.duration,
    ease: c.ease,
    timer: null,
    state: N0
  });
}
function gs(t, e) {
  var a = ba(t, e);
  if (a.state > N0) throw new Error("too late; already scheduled");
  return a;
}
function Na(t, e) {
  var a = ba(t, e);
  if (a.state > Hi) throw new Error("too late; already running");
  return a;
}
function ba(t, e) {
  var a = t.__transition;
  if (!a || !(a = a[e])) throw new Error("transition not found");
  return a;
}
function S8(t, e, a) {
  var n = t.__transition, i;
  n[e] = a, a.timer = I0(c, 0, a.time);
  function c(d) {
    a.state = Hf, a.timer.restart(o, a.delay, a.time), a.delay <= d && o(d - a.delay);
  }
  function o(d) {
    var h, b, m, p;
    if (a.state !== Hf) return f();
    for (h in n)
      if (p = n[h], p.name === a.name) {
        if (p.state === Hi) return Yf(o);
        p.state === Bf ? (p.state = Bi, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete n[h]) : +h < e && (p.state = Bi, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete n[h]);
      }
    if (Yf(function() {
      a.state === Hi && (a.state = Bf, a.timer.restart(s, a.delay, a.time), s(d));
    }), a.state = To, a.on.call("start", t, t.__data__, a.index, a.group), a.state === To) {
      for (a.state = Hi, i = new Array(m = a.tween.length), h = 0, b = -1; h < m; ++h)
        (p = a.tween[h].value.call(t, t.__data__, a.index, a.group)) && (i[++b] = p);
      i.length = b + 1;
    }
  }
  function s(d) {
    for (var h = d < a.duration ? a.ease.call(null, d / a.duration) : (a.timer.restart(f), a.state = Do, 1), b = -1, m = i.length; ++b < m; )
      i[b].call(t, h);
    a.state === Do && (a.on.call("end", t, t.__data__, a.index, a.group), f());
  }
  function f() {
    a.state = Bi, a.timer.stop(), delete n[e];
    for (var d in n) return;
    delete t.__transition;
  }
}
function Wi(t, e) {
  var a = t.__transition, n, i, c = !0, o;
  if (a) {
    e = e == null ? null : e + "";
    for (o in a) {
      if ((n = a[o]).name !== e) {
        c = !1;
        continue;
      }
      i = n.state > To && n.state < Do, n.state = Bi, n.timer.stop(), n.on.call(i ? "interrupt" : "cancel", t, t.__data__, n.index, n.group), delete a[o];
    }
    c && delete t.__transition;
  }
}
function M8(t) {
  return this.each(function() {
    Wi(this, t);
  });
}
function T8(t, e) {
  var a, n;
  return function() {
    var i = Na(this, t), c = i.tween;
    if (c !== a) {
      n = a = c;
      for (var o = 0, s = n.length; o < s; ++o)
        if (n[o].name === e) {
          n = n.slice(), n.splice(o, 1);
          break;
        }
    }
    i.tween = n;
  };
}
function D8(t, e, a) {
  var n, i;
  if (typeof a != "function") throw new Error();
  return function() {
    var c = Na(this, t), o = c.tween;
    if (o !== n) {
      i = (n = o).slice();
      for (var s = { name: e, value: a }, f = 0, d = i.length; f < d; ++f)
        if (i[f].name === e) {
          i[f] = s;
          break;
        }
      f === d && i.push(s);
    }
    c.tween = i;
  };
}
function A8(t, e) {
  var a = this._id;
  if (t += "", arguments.length < 2) {
    for (var n = ba(this.node(), a).tween, i = 0, c = n.length, o; i < c; ++i)
      if ((o = n[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((e == null ? T8 : D8)(a, t, e));
}
function ys(t, e, a) {
  var n = t._id;
  return t.each(function() {
    var i = Na(this, n);
    (i.value || (i.value = {}))[e] = a.apply(this, arguments);
  }), function(i) {
    return ba(i, n).value[e];
  };
}
function L0(t, e) {
  var a;
  return (typeof e == "number" ? ia : e instanceof Fr ? ti : (a = Fr(e)) ? (e = a, ti) : Yd)(t, e);
}
function C8(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function P8(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function E8(t, e, a) {
  var n, i = a + "", c;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === n ? c : c = e(n = o, a);
  };
}
function I8(t, e, a) {
  var n, i = a + "", c;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === n ? c : c = e(n = o, a);
  };
}
function N8(t, e, a) {
  var n, i, c;
  return function() {
    var o, s = a(this), f;
    return s == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), f = s + "", o === f ? null : o === n && f === i ? c : (i = f, c = e(n = o, s)));
  };
}
function L8(t, e, a) {
  var n, i, c;
  return function() {
    var o, s = a(this), f;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), f = s + "", o === f ? null : o === n && f === i ? c : (i = f, c = e(n = o, s)));
  };
}
function F8(t, e) {
  var a = kc(t), n = a === "transform" ? L2 : L0;
  return this.attrTween(t, typeof e == "function" ? (a.local ? L8 : N8)(a, n, ys(this, "attr." + t, e)) : e == null ? (a.local ? P8 : C8)(a) : (a.local ? I8 : E8)(a, n, e));
}
function R8(t, e) {
  return function(a) {
    this.setAttribute(t, e.call(this, a));
  };
}
function O8(t, e) {
  return function(a) {
    this.setAttributeNS(t.space, t.local, e.call(this, a));
  };
}
function z8(t, e) {
  var a, n;
  function i() {
    var c = e.apply(this, arguments);
    return c !== n && (a = (n = c) && O8(t, c)), a;
  }
  return i._value = e, i;
}
function U8(t, e) {
  var a, n;
  function i() {
    var c = e.apply(this, arguments);
    return c !== n && (a = (n = c) && R8(t, c)), a;
  }
  return i._value = e, i;
}
function V8(t, e) {
  var a = "attr." + t;
  if (arguments.length < 2) return (a = this.tween(a)) && a._value;
  if (e == null) return this.tween(a, null);
  if (typeof e != "function") throw new Error();
  var n = kc(t);
  return this.tween(a, (n.local ? z8 : U8)(n, e));
}
function Y8(t, e) {
  return function() {
    gs(this, t).delay = +e.apply(this, arguments);
  };
}
function H8(t, e) {
  return e = +e, function() {
    gs(this, t).delay = e;
  };
}
function B8(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Y8 : H8)(e, t)) : ba(this.node(), e).delay;
}
function W8(t, e) {
  return function() {
    Na(this, t).duration = +e.apply(this, arguments);
  };
}
function G8(t, e) {
  return e = +e, function() {
    Na(this, t).duration = e;
  };
}
function X8(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? W8 : G8)(e, t)) : ba(this.node(), e).duration;
}
function q8(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    Na(this, t).ease = e;
  };
}
function j8(t) {
  var e = this._id;
  return arguments.length ? this.each(q8(e, t)) : ba(this.node(), e).ease;
}
function Z8(t, e) {
  return function() {
    var a = e.apply(this, arguments);
    if (typeof a != "function") throw new Error();
    Na(this, t).ease = a;
  };
}
function J8(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Z8(this._id, t));
}
function Q8(t) {
  typeof t != "function" && (t = y0(t));
  for (var e = this._groups, a = e.length, n = new Array(a), i = 0; i < a; ++i)
    for (var c = e[i], o = c.length, s = n[i] = [], f, d = 0; d < o; ++d)
      (f = c[d]) && t.call(f, f.__data__, d, c) && s.push(f);
  return new Ja(n, this._parents, this._name, this._id);
}
function K8(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, a = t._groups, n = e.length, i = a.length, c = Math.min(n, i), o = new Array(n), s = 0; s < c; ++s)
    for (var f = e[s], d = a[s], h = f.length, b = o[s] = new Array(h), m, p = 0; p < h; ++p)
      (m = f[p] || d[p]) && (b[p] = m);
  for (; s < n; ++s)
    o[s] = e[s];
  return new Ja(o, this._parents, this._name, this._id);
}
function $8(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var a = e.indexOf(".");
    return a >= 0 && (e = e.slice(0, a)), !e || e === "start";
  });
}
function e7(t, e, a) {
  var n, i, c = $8(e) ? gs : Na;
  return function() {
    var o = c(this, t), s = o.on;
    s !== n && (i = (n = s).copy()).on(e, a), o.on = i;
  };
}
function t7(t, e) {
  var a = this._id;
  return arguments.length < 2 ? ba(this.node(), a).on.on(t) : this.each(e7(a, t, e));
}
function a7(t) {
  return function() {
    var e = this.parentNode;
    for (var a in this.__transition) if (+a !== t) return;
    e && e.removeChild(this);
  };
}
function r7() {
  return this.on("end.remove", a7(this._id));
}
function n7(t) {
  var e = this._name, a = this._id;
  typeof t != "function" && (t = bs(t));
  for (var n = this._groups, i = n.length, c = new Array(i), o = 0; o < i; ++o)
    for (var s = n[o], f = s.length, d = c[o] = new Array(f), h, b, m = 0; m < f; ++m)
      (h = s[m]) && (b = t.call(h, h.__data__, m, s)) && ("__data__" in h && (b.__data__ = h.__data__), d[m] = b, Mc(d[m], e, a, m, d, ba(h, a)));
  return new Ja(c, this._parents, e, a);
}
function i7(t) {
  var e = this._name, a = this._id;
  typeof t != "function" && (t = g0(t));
  for (var n = this._groups, i = n.length, c = [], o = [], s = 0; s < i; ++s)
    for (var f = n[s], d = f.length, h, b = 0; b < d; ++b)
      if (h = f[b]) {
        for (var m = t.call(h, h.__data__, b, f), p, g = ba(h, a), v = 0, k = m.length; v < k; ++v)
          (p = m[v]) && Mc(p, e, a, v, m, g);
        c.push(m), o.push(h);
      }
  return new Ja(c, o, e, a);
}
var c7 = hi.prototype.constructor;
function o7() {
  return new c7(this._groups, this._parents);
}
function s7(t, e) {
  var a, n, i;
  return function() {
    var c = bn(this, t), o = (this.style.removeProperty(t), bn(this, t));
    return c === o ? null : c === a && o === n ? i : i = e(a = c, n = o);
  };
}
function F0(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function f7(t, e, a) {
  var n, i = a + "", c;
  return function() {
    var o = bn(this, t);
    return o === i ? null : o === n ? c : c = e(n = o, a);
  };
}
function l7(t, e, a) {
  var n, i, c;
  return function() {
    var o = bn(this, t), s = a(this), f = s + "";
    return s == null && (f = s = (this.style.removeProperty(t), bn(this, t))), o === f ? null : o === n && f === i ? c : (i = f, c = e(n = o, s));
  };
}
function d7(t, e) {
  var a, n, i, c = "style." + e, o = "end." + c, s;
  return function() {
    var f = Na(this, t), d = f.on, h = f.value[c] == null ? s || (s = F0(e)) : void 0;
    (d !== a || i !== h) && (n = (a = d).copy()).on(o, i = h), f.on = n;
  };
}
function u7(t, e, a) {
  var n = (t += "") == "transform" ? N2 : L0;
  return e == null ? this.styleTween(t, s7(t, n)).on("end.style." + t, F0(t)) : typeof e == "function" ? this.styleTween(t, l7(t, n, ys(this, "style." + t, e))).each(d7(this._id, t)) : this.styleTween(t, f7(t, n, e), a).on("end.style." + t, null);
}
function h7(t, e, a) {
  return function(n) {
    this.style.setProperty(t, e.call(this, n), a);
  };
}
function b7(t, e, a) {
  var n, i;
  function c() {
    var o = e.apply(this, arguments);
    return o !== i && (n = (i = o) && h7(t, o, a)), n;
  }
  return c._value = e, c;
}
function m7(t, e, a) {
  var n = "style." + (t += "");
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  return this.tween(n, b7(t, e, a ?? ""));
}
function p7(t) {
  return function() {
    this.textContent = t;
  };
}
function g7(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function y7(t) {
  return this.tween("text", typeof t == "function" ? g7(ys(this, "text", t)) : p7(t == null ? "" : t + ""));
}
function v7(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function _7(t) {
  var e, a;
  function n() {
    var i = t.apply(this, arguments);
    return i !== a && (e = (a = i) && v7(i)), e;
  }
  return n._value = t, n;
}
function w7(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, _7(t));
}
function x7() {
  for (var t = this._name, e = this._id, a = R0(), n = this._groups, i = n.length, c = 0; c < i; ++c)
    for (var o = n[c], s = o.length, f, d = 0; d < s; ++d)
      if (f = o[d]) {
        var h = ba(f, e);
        Mc(f, t, a, d, o, {
          time: h.time + h.delay + h.duration,
          delay: 0,
          duration: h.duration,
          ease: h.ease
        });
      }
  return new Ja(n, this._parents, t, a);
}
function k7() {
  var t, e, a = this, n = a._id, i = a.size();
  return new Promise(function(c, o) {
    var s = { value: o }, f = { value: function() {
      --i === 0 && c();
    } };
    a.each(function() {
      var d = Na(this, n), h = d.on;
      h !== t && (e = (t = h).copy(), e._.cancel.push(s), e._.interrupt.push(s), e._.end.push(f)), d.on = e;
    }), i === 0 && c();
  });
}
var S7 = 0;
function Ja(t, e, a, n) {
  this._groups = t, this._parents = e, this._name = a, this._id = n;
}
function R0() {
  return ++S7;
}
var Fa = hi.prototype;
Ja.prototype = {
  constructor: Ja,
  select: n7,
  selectAll: i7,
  selectChild: Fa.selectChild,
  selectChildren: Fa.selectChildren,
  filter: Q8,
  merge: K8,
  selection: o7,
  transition: x7,
  call: Fa.call,
  nodes: Fa.nodes,
  node: Fa.node,
  size: Fa.size,
  empty: Fa.empty,
  each: Fa.each,
  on: t7,
  attr: F8,
  attrTween: V8,
  style: u7,
  styleTween: m7,
  text: y7,
  textTween: w7,
  remove: r7,
  tween: A8,
  delay: B8,
  duration: X8,
  ease: j8,
  easeVarying: J8,
  end: k7,
  [Symbol.iterator]: Fa[Symbol.iterator]
};
function M7(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var T7 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: M7
};
function D7(t, e) {
  for (var a; !(a = t.__transition) || !(a = a[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return a;
}
function A7(t) {
  var e, a;
  t instanceof Ja ? (e = t._id, t = t._name) : (e = R0(), (a = T7).time = ps(), t = t == null ? null : t + "");
  for (var n = this._groups, i = n.length, c = 0; c < i; ++c)
    for (var o = n[c], s = o.length, f, d = 0; d < s; ++d)
      (f = o[d]) && Mc(f, t, e, d, o, a || D7(f, e));
  return new Ja(n, this._parents, t, e);
}
hi.prototype.interrupt = M8;
hi.prototype.transition = A7;
const Ao = Math.PI, Co = 2 * Ao, yr = 1e-6, C7 = Co - yr;
function O0(t) {
  this._ += t[0];
  for (let e = 1, a = t.length; e < a; ++e)
    this._ += arguments[e] + t[e];
}
function P7(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return O0;
  const a = 10 ** e;
  return function(n) {
    this._ += n[0];
    for (let i = 1, c = n.length; i < c; ++i)
      this._ += Math.round(arguments[i] * a) / a + n[i];
  };
}
class E7 {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? O0 : P7(e);
  }
  moveTo(e, a) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +a}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(e, a) {
    this._append`L${this._x1 = +e},${this._y1 = +a}`;
  }
  quadraticCurveTo(e, a, n, i) {
    this._append`Q${+e},${+a},${this._x1 = +n},${this._y1 = +i}`;
  }
  bezierCurveTo(e, a, n, i, c, o) {
    this._append`C${+e},${+a},${+n},${+i},${this._x1 = +c},${this._y1 = +o}`;
  }
  arcTo(e, a, n, i, c) {
    if (e = +e, a = +a, n = +n, i = +i, c = +c, c < 0) throw new Error(`negative radius: ${c}`);
    let o = this._x1, s = this._y1, f = n - e, d = i - a, h = o - e, b = s - a, m = h * h + b * b;
    if (this._x1 === null)
      this._append`M${this._x1 = e},${this._y1 = a}`;
    else if (m > yr) if (!(Math.abs(b * f - d * h) > yr) || !c)
      this._append`L${this._x1 = e},${this._y1 = a}`;
    else {
      let p = n - o, g = i - s, v = f * f + d * d, k = p * p + g * g, S = Math.sqrt(v), N = Math.sqrt(m), I = c * Math.tan((Ao - Math.acos((v + m - k) / (2 * S * N))) / 2), x = I / N, w = I / S;
      Math.abs(x - 1) > yr && this._append`L${e + x * h},${a + x * b}`, this._append`A${c},${c},0,0,${+(b * p > h * g)},${this._x1 = e + w * f},${this._y1 = a + w * d}`;
    }
  }
  arc(e, a, n, i, c, o) {
    if (e = +e, a = +a, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let s = n * Math.cos(i), f = n * Math.sin(i), d = e + s, h = a + f, b = 1 ^ o, m = o ? i - c : c - i;
    this._x1 === null ? this._append`M${d},${h}` : (Math.abs(this._x1 - d) > yr || Math.abs(this._y1 - h) > yr) && this._append`L${d},${h}`, n && (m < 0 && (m = m % Co + Co), m > C7 ? this._append`A${n},${n},0,1,${b},${e - s},${a - f}A${n},${n},0,1,${b},${this._x1 = d},${this._y1 = h}` : m > yr && this._append`A${n},${n},0,${+(m >= Ao)},${b},${this._x1 = e + n * Math.cos(c)},${this._y1 = a + n * Math.sin(c)}`);
  }
  rect(e, a, n, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +a}h${n = +n}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function I7(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function cc(t, e) {
  if ((a = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var a, n = t.slice(0, a);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +t.slice(a + 1)
  ];
}
function pn(t) {
  return t = cc(Math.abs(t)), t ? t[1] : NaN;
}
function N7(t, e) {
  return function(a, n) {
    for (var i = a.length, c = [], o = 0, s = t[0], f = 0; i > 0 && s > 0 && (f + s + 1 > n && (s = Math.max(1, n - f)), c.push(a.substring(i -= s, i + s)), !((f += s + 1) > n)); )
      s = t[o = (o + 1) % t.length];
    return c.reverse().join(e);
  };
}
function L7(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(a) {
      return t[+a];
    });
  };
}
var F7 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function ii(t) {
  if (!(e = F7.exec(t))) throw new Error("invalid format: " + t);
  var e;
  return new vs({
    fill: e[1],
    align: e[2],
    sign: e[3],
    symbol: e[4],
    zero: e[5],
    width: e[6],
    comma: e[7],
    precision: e[8] && e[8].slice(1),
    trim: e[9],
    type: e[10]
  });
}
ii.prototype = vs.prototype;
function vs(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
vs.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function R7(t) {
  e: for (var e = t.length, a = 1, n = -1, i; a < e; ++a)
    switch (t[a]) {
      case ".":
        n = i = a;
        break;
      case "0":
        n === 0 && (n = a), i = a;
        break;
      default:
        if (!+t[a]) break e;
        n > 0 && (n = 0);
        break;
    }
  return n > 0 ? t.slice(0, n) + t.slice(i + 1) : t;
}
var z0;
function O7(t, e) {
  var a = cc(t, e);
  if (!a) return t + "";
  var n = a[0], i = a[1], c = i - (z0 = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = n.length;
  return c === o ? n : c > o ? n + new Array(c - o + 1).join("0") : c > 0 ? n.slice(0, c) + "." + n.slice(c) : "0." + new Array(1 - c).join("0") + cc(t, Math.max(0, e + c - 1))[0];
}
function Wf(t, e) {
  var a = cc(t, e);
  if (!a) return t + "";
  var n = a[0], i = a[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const Gf = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: I7,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => Wf(t * 100, e),
  r: Wf,
  s: O7,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Xf(t) {
  return t;
}
var qf = Array.prototype.map, jf = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function z7(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? Xf : N7(qf.call(t.grouping, Number), t.thousands + ""), a = t.currency === void 0 ? "" : t.currency[0] + "", n = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", c = t.numerals === void 0 ? Xf : L7(qf.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", f = t.nan === void 0 ? "NaN" : t.nan + "";
  function d(b) {
    b = ii(b);
    var m = b.fill, p = b.align, g = b.sign, v = b.symbol, k = b.zero, S = b.width, N = b.comma, I = b.precision, x = b.trim, w = b.type;
    w === "n" ? (N = !0, w = "g") : Gf[w] || (I === void 0 && (I = 12), x = !0, w = "g"), (k || m === "0" && p === "=") && (k = !0, m = "0", p = "=");
    var y = v === "$" ? a : v === "#" && /[boxX]/.test(w) ? "0" + w.toLowerCase() : "", H = v === "$" ? n : /[%p]/.test(w) ? o : "", B = Gf[w], V = /[defgprs%]/.test(w);
    I = I === void 0 ? 6 : /[gprs]/.test(w) ? Math.max(1, Math.min(21, I)) : Math.max(0, Math.min(20, I));
    function X(G) {
      var q = y, E = H, _, C, A;
      if (w === "c")
        E = B(G) + E, G = "";
      else {
        G = +G;
        var Z = G < 0 || 1 / G < 0;
        if (G = isNaN(G) ? f : B(Math.abs(G), I), x && (G = R7(G)), Z && +G == 0 && g !== "+" && (Z = !1), q = (Z ? g === "(" ? g : s : g === "-" || g === "(" ? "" : g) + q, E = (w === "s" ? jf[8 + z0 / 3] : "") + E + (Z && g === "(" ? ")" : ""), V) {
          for (_ = -1, C = G.length; ++_ < C; )
            if (A = G.charCodeAt(_), 48 > A || A > 57) {
              E = (A === 46 ? i + G.slice(_ + 1) : G.slice(_)) + E, G = G.slice(0, _);
              break;
            }
        }
      }
      N && !k && (G = e(G, 1 / 0));
      var ee = q.length + G.length + E.length, ne = ee < S ? new Array(S - ee + 1).join(m) : "";
      switch (N && k && (G = e(ne + G, ne.length ? S - E.length : 1 / 0), ne = ""), p) {
        case "<":
          G = q + G + E + ne;
          break;
        case "=":
          G = q + ne + G + E;
          break;
        case "^":
          G = ne.slice(0, ee = ne.length >> 1) + q + G + E + ne.slice(ee);
          break;
        default:
          G = ne + q + G + E;
          break;
      }
      return c(G);
    }
    return X.toString = function() {
      return b + "";
    }, X;
  }
  function h(b, m) {
    var p = d((b = ii(b), b.type = "f", b)), g = Math.max(-8, Math.min(8, Math.floor(pn(m) / 3))) * 3, v = Math.pow(10, -g), k = jf[8 + g / 3];
    return function(S) {
      return p(v * S) + k;
    };
  }
  return {
    format: d,
    formatPrefix: h
  };
}
var Pi, zr, U0;
U7({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function U7(t) {
  return Pi = z7(t), zr = Pi.format, U0 = Pi.formatPrefix, Pi;
}
function V0(t) {
  return Math.max(0, -pn(Math.abs(t)));
}
function V7(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(pn(e) / 3))) * 3 - pn(Math.abs(t)));
}
function Y7(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, pn(e) - pn(t)) + 1;
}
function _s(t, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(e).domain(t);
      break;
  }
  return this;
}
function H7(t, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
    default: {
      this.domain(t), typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
  }
  return this;
}
function B7(t) {
  return function() {
    return t;
  };
}
function W7(t) {
  return +t;
}
var Zf = [0, 1];
function ir(t) {
  return t;
}
function Po(t, e) {
  return (e -= t = +t) ? function(a) {
    return (a - t) / e;
  } : B7(isNaN(e) ? NaN : 0.5);
}
function G7(t, e) {
  var a;
  return t > e && (a = t, t = e, e = a), function(n) {
    return Math.max(t, Math.min(e, n));
  };
}
function X7(t, e, a) {
  var n = t[0], i = t[1], c = e[0], o = e[1];
  return i < n ? (n = Po(i, n), c = a(o, c)) : (n = Po(n, i), c = a(c, o)), function(s) {
    return c(n(s));
  };
}
function q7(t, e, a) {
  var n = Math.min(t.length, e.length) - 1, i = new Array(n), c = new Array(n), o = -1;
  for (t[n] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++o < n; )
    i[o] = Po(t[o], t[o + 1]), c[o] = a(e[o], e[o + 1]);
  return function(s) {
    var f = D5(t, s, 1, n) - 1;
    return c[f](i[f](s));
  };
}
function ws(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Y0() {
  var t = Zf, e = Zf, a = ui, n, i, c, o = ir, s, f, d;
  function h() {
    var m = Math.min(t.length, e.length);
    return o !== ir && (o = G7(t[0], t[m - 1])), s = m > 2 ? q7 : X7, f = d = null, b;
  }
  function b(m) {
    return m == null || isNaN(m = +m) ? c : (f || (f = s(t.map(n), e, a)))(n(o(m)));
  }
  return b.invert = function(m) {
    return o(i((d || (d = s(e, t.map(n), ia)))(m)));
  }, b.domain = function(m) {
    return arguments.length ? (t = Array.from(m, W7), h()) : t.slice();
  }, b.range = function(m) {
    return arguments.length ? (e = Array.from(m), h()) : e.slice();
  }, b.rangeRound = function(m) {
    return e = Array.from(m), a = Hd, h();
  }, b.clamp = function(m) {
    return arguments.length ? (o = m ? !0 : ir, h()) : o !== ir;
  }, b.interpolate = function(m) {
    return arguments.length ? (a = m, h()) : a;
  }, b.unknown = function(m) {
    return arguments.length ? (c = m, b) : c;
  }, function(m, p) {
    return n = m, i = p, h();
  };
}
function H0() {
  return Y0()(ir, ir);
}
function j7(t, e, a, n) {
  var i = xo(t, e, a), c;
  switch (n = ii(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(e));
      return n.precision == null && !isNaN(c = V7(i, o)) && (n.precision = c), U0(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(c = Y7(i, Math.max(Math.abs(t), Math.abs(e)))) && (n.precision = c - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(c = V0(i)) && (n.precision = c - (n.type === "%") * 2);
      break;
    }
  }
  return zr(n);
}
function B0(t) {
  var e = t.domain;
  return t.ticks = function(a) {
    var n = e();
    return _o(n[0], n[n.length - 1], a ?? 10);
  }, t.tickFormat = function(a, n) {
    var i = e();
    return j7(i[0], i[i.length - 1], a ?? 10, n);
  }, t.nice = function(a) {
    a == null && (a = 10);
    var n = e(), i = 0, c = n.length - 1, o = n[i], s = n[c], f, d, h = 10;
    for (s < o && (d = o, o = s, s = d, d = i, i = c, c = d); h-- > 0; ) {
      if (d = wo(o, s, a), d === f)
        return n[i] = o, n[c] = s, e(n);
      if (d > 0)
        o = Math.floor(o / d) * d, s = Math.ceil(s / d) * d;
      else if (d < 0)
        o = Math.ceil(o * d) / d, s = Math.floor(s * d) / d;
      else
        break;
      f = d;
    }
    return t;
  }, t;
}
function ci() {
  var t = H0();
  return t.copy = function() {
    return ws(t, ci());
  }, _s.apply(t, arguments), B0(t);
}
function W0(t, e) {
  t = t.slice();
  var a = 0, n = t.length - 1, i = t[a], c = t[n], o;
  return c < i && (o = a, a = n, n = o, o = i, i = c, c = o), t[a] = e.floor(i), t[n] = e.ceil(c), t;
}
function Jf(t) {
  return Math.log(t);
}
function Qf(t) {
  return Math.exp(t);
}
function Z7(t) {
  return -Math.log(-t);
}
function J7(t) {
  return -Math.exp(-t);
}
function Q7(t) {
  return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
}
function K7(t) {
  return t === 10 ? Q7 : t === Math.E ? Math.exp : (e) => Math.pow(t, e);
}
function $7(t) {
  return t === Math.E ? Math.log : t === 10 && Math.log10 || t === 2 && Math.log2 || (t = Math.log(t), (e) => Math.log(e) / t);
}
function Kf(t) {
  return (e, a) => -t(-e, a);
}
function e4(t) {
  const e = t(Jf, Qf), a = e.domain;
  let n = 10, i, c;
  function o() {
    return i = $7(n), c = K7(n), a()[0] < 0 ? (i = Kf(i), c = Kf(c), t(Z7, J7)) : t(Jf, Qf), e;
  }
  return e.base = function(s) {
    return arguments.length ? (n = +s, o()) : n;
  }, e.domain = function(s) {
    return arguments.length ? (a(s), o()) : a();
  }, e.ticks = (s) => {
    const f = a();
    let d = f[0], h = f[f.length - 1];
    const b = h < d;
    b && ([d, h] = [h, d]);
    let m = i(d), p = i(h), g, v;
    const k = s == null ? 10 : +s;
    let S = [];
    if (!(n % 1) && p - m < k) {
      if (m = Math.floor(m), p = Math.ceil(p), d > 0) {
        for (; m <= p; ++m)
          for (g = 1; g < n; ++g)
            if (v = m < 0 ? g / c(-m) : g * c(m), !(v < d)) {
              if (v > h) break;
              S.push(v);
            }
      } else for (; m <= p; ++m)
        for (g = n - 1; g >= 1; --g)
          if (v = m > 0 ? g / c(-m) : g * c(m), !(v < d)) {
            if (v > h) break;
            S.push(v);
          }
      S.length * 2 < k && (S = _o(d, h, k));
    } else
      S = _o(m, p, Math.min(p - m, k)).map(c);
    return b ? S.reverse() : S;
  }, e.tickFormat = (s, f) => {
    if (s == null && (s = 10), f == null && (f = n === 10 ? "s" : ","), typeof f != "function" && (!(n % 1) && (f = ii(f)).precision == null && (f.trim = !0), f = zr(f)), s === 1 / 0) return f;
    const d = Math.max(1, n * s / e.ticks().length);
    return (h) => {
      let b = h / c(Math.round(i(h)));
      return b * n < n - 0.5 && (b *= n), b <= d ? f(h) : "";
    };
  }, e.nice = () => a(W0(a(), {
    floor: (s) => c(Math.floor(i(s))),
    ceil: (s) => c(Math.ceil(i(s)))
  })), e;
}
function G0() {
  const t = e4(Y0()).domain([1, 10]);
  return t.copy = () => ws(t, G0()).base(t.base()), _s.apply(t, arguments), t;
}
const Bc = /* @__PURE__ */ new Date(), Wc = /* @__PURE__ */ new Date();
function St(t, e, a, n) {
  function i(c) {
    return t(c = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+c)), c;
  }
  return i.floor = (c) => (t(c = /* @__PURE__ */ new Date(+c)), c), i.ceil = (c) => (t(c = new Date(c - 1)), e(c, 1), t(c), c), i.round = (c) => {
    const o = i(c), s = i.ceil(c);
    return c - o < s - c ? o : s;
  }, i.offset = (c, o) => (e(c = /* @__PURE__ */ new Date(+c), o == null ? 1 : Math.floor(o)), c), i.range = (c, o, s) => {
    const f = [];
    if (c = i.ceil(c), s = s == null ? 1 : Math.floor(s), !(c < o) || !(s > 0)) return f;
    let d;
    do
      f.push(d = /* @__PURE__ */ new Date(+c)), e(c, s), t(c);
    while (d < c && c < o);
    return f;
  }, i.filter = (c) => St((o) => {
    if (o >= o) for (; t(o), !c(o); ) o.setTime(o - 1);
  }, (o, s) => {
    if (o >= o)
      if (s < 0) for (; ++s <= 0; )
        for (; e(o, -1), !c(o); )
          ;
      else for (; --s >= 0; )
        for (; e(o, 1), !c(o); )
          ;
  }), a && (i.count = (c, o) => (Bc.setTime(+c), Wc.setTime(+o), t(Bc), t(Wc), Math.floor(a(Bc, Wc))), i.every = (c) => (c = Math.floor(c), !isFinite(c) || !(c > 0) ? null : c > 1 ? i.filter(n ? (o) => n(o) % c === 0 : (o) => i.count(0, o) % c === 0) : i)), i;
}
const oc = St(() => {
}, (t, e) => {
  t.setTime(+t + e);
}, (t, e) => e - t);
oc.every = (t) => (t = Math.floor(t), !isFinite(t) || !(t > 0) ? null : t > 1 ? St((e) => {
  e.setTime(Math.floor(e / t) * t);
}, (e, a) => {
  e.setTime(+e + a * t);
}, (e, a) => (a - e) / t) : oc);
oc.range;
const Va = 1e3, $t = Va * 60, Ya = $t * 60, Qa = Ya * 24, xs = Qa * 7, $f = Qa * 30, Gc = Qa * 365, Ha = St((t) => {
  t.setTime(t - t.getMilliseconds());
}, (t, e) => {
  t.setTime(+t + e * Va);
}, (t, e) => (e - t) / Va, (t) => t.getUTCSeconds());
Ha.range;
const ks = St((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * Va);
}, (t, e) => {
  t.setTime(+t + e * $t);
}, (t, e) => (e - t) / $t, (t) => t.getMinutes());
ks.range;
const Wn = St((t) => {
  t.setUTCSeconds(0, 0);
}, (t, e) => {
  t.setTime(+t + e * $t);
}, (t, e) => (e - t) / $t, (t) => t.getUTCMinutes());
Wn.range;
const Ss = St((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * Va - t.getMinutes() * $t);
}, (t, e) => {
  t.setTime(+t + e * Ya);
}, (t, e) => (e - t) / Ya, (t) => t.getHours());
Ss.range;
const Gn = St((t) => {
  t.setUTCMinutes(0, 0, 0);
}, (t, e) => {
  t.setTime(+t + e * Ya);
}, (t, e) => (e - t) / Ya, (t) => t.getUTCHours());
Gn.range;
const bi = St(
  (t) => t.setHours(0, 0, 0, 0),
  (t, e) => t.setDate(t.getDate() + e),
  (t, e) => (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * $t) / Qa,
  (t) => t.getDate() - 1
);
bi.range;
const It = St((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCDate(t.getUTCDate() + e);
}, (t, e) => (e - t) / Qa, (t) => t.getUTCDate() - 1);
It.range;
const t4 = St((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCDate(t.getUTCDate() + e);
}, (t, e) => (e - t) / Qa, (t) => Math.floor(t / Qa));
t4.range;
function Yr(t) {
  return St((e) => {
    e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7), e.setHours(0, 0, 0, 0);
  }, (e, a) => {
    e.setDate(e.getDate() + a * 7);
  }, (e, a) => (a - e - (a.getTimezoneOffset() - e.getTimezoneOffset()) * $t) / xs);
}
const Tc = Yr(0), sc = Yr(1), a4 = Yr(2), r4 = Yr(3), gn = Yr(4), n4 = Yr(5), i4 = Yr(6);
Tc.range;
sc.range;
a4.range;
r4.range;
gn.range;
n4.range;
i4.range;
function Hr(t) {
  return St((e) => {
    e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7), e.setUTCHours(0, 0, 0, 0);
  }, (e, a) => {
    e.setUTCDate(e.getUTCDate() + a * 7);
  }, (e, a) => (a - e) / xs);
}
const X0 = Hr(0), fc = Hr(1), c4 = Hr(2), o4 = Hr(3), yn = Hr(4), s4 = Hr(5), f4 = Hr(6);
X0.range;
fc.range;
c4.range;
o4.range;
yn.range;
s4.range;
f4.range;
const Ms = St((t) => {
  t.setDate(1), t.setHours(0, 0, 0, 0);
}, (t, e) => {
  t.setMonth(t.getMonth() + e);
}, (t, e) => e.getMonth() - t.getMonth() + (e.getFullYear() - t.getFullYear()) * 12, (t) => t.getMonth());
Ms.range;
const Gi = St((t) => {
  t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCMonth(t.getUTCMonth() + e);
}, (t, e) => e.getUTCMonth() - t.getUTCMonth() + (e.getUTCFullYear() - t.getUTCFullYear()) * 12, (t) => t.getUTCMonth());
Gi.range;
const Ka = St((t) => {
  t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, e) => {
  t.setFullYear(t.getFullYear() + e);
}, (t, e) => e.getFullYear() - t.getFullYear(), (t) => t.getFullYear());
Ka.every = (t) => !isFinite(t = Math.floor(t)) || !(t > 0) ? null : St((e) => {
  e.setFullYear(Math.floor(e.getFullYear() / t) * t), e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, a) => {
  e.setFullYear(e.getFullYear() + a * t);
});
Ka.range;
const Kt = St((t) => {
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCFullYear(t.getUTCFullYear() + e);
}, (t, e) => e.getUTCFullYear() - t.getUTCFullYear(), (t) => t.getUTCFullYear());
Kt.every = (t) => !isFinite(t = Math.floor(t)) || !(t > 0) ? null : St((e) => {
  e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, a) => {
  e.setUTCFullYear(e.getUTCFullYear() + a * t);
});
Kt.range;
function l4(t, e, a, n, i, c) {
  const o = [
    [Ha, 1, Va],
    [Ha, 5, 5 * Va],
    [Ha, 15, 15 * Va],
    [Ha, 30, 30 * Va],
    [c, 1, $t],
    [c, 5, 5 * $t],
    [c, 15, 15 * $t],
    [c, 30, 30 * $t],
    [i, 1, Ya],
    [i, 3, 3 * Ya],
    [i, 6, 6 * Ya],
    [i, 12, 12 * Ya],
    [n, 1, Qa],
    [n, 2, 2 * Qa],
    [a, 1, xs],
    [e, 1, $f],
    [e, 3, 3 * $f],
    [t, 1, Gc]
  ];
  function s(d, h, b) {
    const m = h < d;
    m && ([d, h] = [h, d]);
    const p = b && typeof b.range == "function" ? b : f(d, h, b), g = p ? p.range(d, +h + 1) : [];
    return m ? g.reverse() : g;
  }
  function f(d, h, b) {
    const m = Math.abs(h - d) / b, p = hs(([, , k]) => k).right(o, m);
    if (p === o.length) return t.every(xo(d / Gc, h / Gc, b));
    if (p === 0) return oc.every(Math.max(xo(d, h, b), 1));
    const [g, v] = o[m / o[p - 1][2] < o[p][2] / m ? p - 1 : p];
    return g.every(v);
  }
  return [s, f];
}
const [d4, u4] = l4(Ka, Ms, Tc, bi, Ss, ks);
function Xc(t) {
  if (0 <= t.y && t.y < 100) {
    var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
    return e.setFullYear(t.y), e;
  }
  return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
}
function qc(t) {
  if (0 <= t.y && t.y < 100) {
    var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
    return e.setUTCFullYear(t.y), e;
  }
  return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
}
function Ln(t, e, a) {
  return { y: t, m: e, d: a, H: 0, M: 0, S: 0, L: 0 };
}
function h4(t) {
  var e = t.dateTime, a = t.date, n = t.time, i = t.periods, c = t.days, o = t.shortDays, s = t.months, f = t.shortMonths, d = Fn(i), h = Rn(i), b = Fn(c), m = Rn(c), p = Fn(o), g = Rn(o), v = Fn(s), k = Rn(s), S = Fn(f), N = Rn(f), I = {
    a: Z,
    A: ee,
    b: ne,
    B: ie,
    c: null,
    d: il,
    e: il,
    f: R4,
    g: X4,
    G: j4,
    H: N4,
    I: L4,
    j: F4,
    L: q0,
    m: O4,
    M: z4,
    p: ue,
    q: oe,
    Q: sl,
    s: fl,
    S: U4,
    u: V4,
    U: Y4,
    V: H4,
    w: B4,
    W: W4,
    x: null,
    X: null,
    y: G4,
    Y: q4,
    Z: Z4,
    "%": ol
  }, x = {
    a: de,
    A: ge,
    b: te,
    B: ae,
    c: null,
    d: cl,
    e: cl,
    f: $4,
    g: f9,
    G: d9,
    H: J4,
    I: Q4,
    j: K4,
    L: Z0,
    m: e9,
    M: t9,
    p: ye,
    q: ve,
    Q: sl,
    s: fl,
    S: a9,
    u: r9,
    U: n9,
    V: i9,
    w: c9,
    W: o9,
    x: null,
    X: null,
    y: s9,
    Y: l9,
    Z: u9,
    "%": ol
  }, w = {
    a: X,
    A: G,
    b: q,
    B: E,
    c: _,
    d: rl,
    e: rl,
    f: C4,
    g: al,
    G: tl,
    H: nl,
    I: nl,
    j: M4,
    L: A4,
    m: S4,
    M: T4,
    p: V,
    q: k4,
    Q: E4,
    s: I4,
    S: D4,
    u: y4,
    U: v4,
    V: _4,
    w: g4,
    W: w4,
    x: C,
    X: A,
    y: al,
    Y: tl,
    Z: x4,
    "%": P4
  };
  I.x = y(a, I), I.X = y(n, I), I.c = y(e, I), x.x = y(a, x), x.X = y(n, x), x.c = y(e, x);
  function y($, pe) {
    return function(Ae) {
      var L = [], se = -1, fe = 0, me = $.length, Ie, Ve, Ne;
      for (Ae instanceof Date || (Ae = /* @__PURE__ */ new Date(+Ae)); ++se < me; )
        $.charCodeAt(se) === 37 && (L.push($.slice(fe, se)), (Ve = el[Ie = $.charAt(++se)]) != null ? Ie = $.charAt(++se) : Ve = Ie === "e" ? " " : "0", (Ne = pe[Ie]) && (Ie = Ne(Ae, Ve)), L.push(Ie), fe = se + 1);
      return L.push($.slice(fe, se)), L.join("");
    };
  }
  function H($, pe) {
    return function(Ae) {
      var L = Ln(1900, void 0, 1), se = B(L, $, Ae += "", 0), fe, me;
      if (se != Ae.length) return null;
      if ("Q" in L) return new Date(L.Q);
      if ("s" in L) return new Date(L.s * 1e3 + ("L" in L ? L.L : 0));
      if (pe && !("Z" in L) && (L.Z = 0), "p" in L && (L.H = L.H % 12 + L.p * 12), L.m === void 0 && (L.m = "q" in L ? L.q : 0), "V" in L) {
        if (L.V < 1 || L.V > 53) return null;
        "w" in L || (L.w = 1), "Z" in L ? (fe = qc(Ln(L.y, 0, 1)), me = fe.getUTCDay(), fe = me > 4 || me === 0 ? fc.ceil(fe) : fc(fe), fe = It.offset(fe, (L.V - 1) * 7), L.y = fe.getUTCFullYear(), L.m = fe.getUTCMonth(), L.d = fe.getUTCDate() + (L.w + 6) % 7) : (fe = Xc(Ln(L.y, 0, 1)), me = fe.getDay(), fe = me > 4 || me === 0 ? sc.ceil(fe) : sc(fe), fe = bi.offset(fe, (L.V - 1) * 7), L.y = fe.getFullYear(), L.m = fe.getMonth(), L.d = fe.getDate() + (L.w + 6) % 7);
      } else ("W" in L || "U" in L) && ("w" in L || (L.w = "u" in L ? L.u % 7 : "W" in L ? 1 : 0), me = "Z" in L ? qc(Ln(L.y, 0, 1)).getUTCDay() : Xc(Ln(L.y, 0, 1)).getDay(), L.m = 0, L.d = "W" in L ? (L.w + 6) % 7 + L.W * 7 - (me + 5) % 7 : L.w + L.U * 7 - (me + 6) % 7);
      return "Z" in L ? (L.H += L.Z / 100 | 0, L.M += L.Z % 100, qc(L)) : Xc(L);
    };
  }
  function B($, pe, Ae, L) {
    for (var se = 0, fe = pe.length, me = Ae.length, Ie, Ve; se < fe; ) {
      if (L >= me) return -1;
      if (Ie = pe.charCodeAt(se++), Ie === 37) {
        if (Ie = pe.charAt(se++), Ve = w[Ie in el ? pe.charAt(se++) : Ie], !Ve || (L = Ve($, Ae, L)) < 0) return -1;
      } else if (Ie != Ae.charCodeAt(L++))
        return -1;
    }
    return L;
  }
  function V($, pe, Ae) {
    var L = d.exec(pe.slice(Ae));
    return L ? ($.p = h.get(L[0].toLowerCase()), Ae + L[0].length) : -1;
  }
  function X($, pe, Ae) {
    var L = p.exec(pe.slice(Ae));
    return L ? ($.w = g.get(L[0].toLowerCase()), Ae + L[0].length) : -1;
  }
  function G($, pe, Ae) {
    var L = b.exec(pe.slice(Ae));
    return L ? ($.w = m.get(L[0].toLowerCase()), Ae + L[0].length) : -1;
  }
  function q($, pe, Ae) {
    var L = S.exec(pe.slice(Ae));
    return L ? ($.m = N.get(L[0].toLowerCase()), Ae + L[0].length) : -1;
  }
  function E($, pe, Ae) {
    var L = v.exec(pe.slice(Ae));
    return L ? ($.m = k.get(L[0].toLowerCase()), Ae + L[0].length) : -1;
  }
  function _($, pe, Ae) {
    return B($, e, pe, Ae);
  }
  function C($, pe, Ae) {
    return B($, a, pe, Ae);
  }
  function A($, pe, Ae) {
    return B($, n, pe, Ae);
  }
  function Z($) {
    return o[$.getDay()];
  }
  function ee($) {
    return c[$.getDay()];
  }
  function ne($) {
    return f[$.getMonth()];
  }
  function ie($) {
    return s[$.getMonth()];
  }
  function ue($) {
    return i[+($.getHours() >= 12)];
  }
  function oe($) {
    return 1 + ~~($.getMonth() / 3);
  }
  function de($) {
    return o[$.getUTCDay()];
  }
  function ge($) {
    return c[$.getUTCDay()];
  }
  function te($) {
    return f[$.getUTCMonth()];
  }
  function ae($) {
    return s[$.getUTCMonth()];
  }
  function ye($) {
    return i[+($.getUTCHours() >= 12)];
  }
  function ve($) {
    return 1 + ~~($.getUTCMonth() / 3);
  }
  return {
    format: function($) {
      var pe = y($ += "", I);
      return pe.toString = function() {
        return $;
      }, pe;
    },
    parse: function($) {
      var pe = H($ += "", !1);
      return pe.toString = function() {
        return $;
      }, pe;
    },
    utcFormat: function($) {
      var pe = y($ += "", x);
      return pe.toString = function() {
        return $;
      }, pe;
    },
    utcParse: function($) {
      var pe = H($ += "", !0);
      return pe.toString = function() {
        return $;
      }, pe;
    }
  };
}
var el = { "-": "", _: " ", 0: "0" }, At = /^\s*\d+/, b4 = /^%/, m4 = /[\\^$*+?|[\]().{}]/g;
function at(t, e, a) {
  var n = t < 0 ? "-" : "", i = (n ? -t : t) + "", c = i.length;
  return n + (c < a ? new Array(a - c + 1).join(e) + i : i);
}
function p4(t) {
  return t.replace(m4, "\\$&");
}
function Fn(t) {
  return new RegExp("^(?:" + t.map(p4).join("|") + ")", "i");
}
function Rn(t) {
  return new Map(t.map((e, a) => [e.toLowerCase(), a]));
}
function g4(t, e, a) {
  var n = At.exec(e.slice(a, a + 1));
  return n ? (t.w = +n[0], a + n[0].length) : -1;
}
function y4(t, e, a) {
  var n = At.exec(e.slice(a, a + 1));
  return n ? (t.u = +n[0], a + n[0].length) : -1;
}
function v4(t, e, a) {
  var n = At.exec(e.slice(a, a + 2));
  return n ? (t.U = +n[0], a + n[0].length) : -1;
}
function _4(t, e, a) {
  var n = At.exec(e.slice(a, a + 2));
  return n ? (t.V = +n[0], a + n[0].length) : -1;
}
function w4(t, e, a) {
  var n = At.exec(e.slice(a, a + 2));
  return n ? (t.W = +n[0], a + n[0].length) : -1;
}
function tl(t, e, a) {
  var n = At.exec(e.slice(a, a + 4));
  return n ? (t.y = +n[0], a + n[0].length) : -1;
}
function al(t, e, a) {
  var n = At.exec(e.slice(a, a + 2));
  return n ? (t.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), a + n[0].length) : -1;
}
function x4(t, e, a) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(a, a + 6));
  return n ? (t.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), a + n[0].length) : -1;
}
function k4(t, e, a) {
  var n = At.exec(e.slice(a, a + 1));
  return n ? (t.q = n[0] * 3 - 3, a + n[0].length) : -1;
}
function S4(t, e, a) {
  var n = At.exec(e.slice(a, a + 2));
  return n ? (t.m = n[0] - 1, a + n[0].length) : -1;
}
function rl(t, e, a) {
  var n = At.exec(e.slice(a, a + 2));
  return n ? (t.d = +n[0], a + n[0].length) : -1;
}
function M4(t, e, a) {
  var n = At.exec(e.slice(a, a + 3));
  return n ? (t.m = 0, t.d = +n[0], a + n[0].length) : -1;
}
function nl(t, e, a) {
  var n = At.exec(e.slice(a, a + 2));
  return n ? (t.H = +n[0], a + n[0].length) : -1;
}
function T4(t, e, a) {
  var n = At.exec(e.slice(a, a + 2));
  return n ? (t.M = +n[0], a + n[0].length) : -1;
}
function D4(t, e, a) {
  var n = At.exec(e.slice(a, a + 2));
  return n ? (t.S = +n[0], a + n[0].length) : -1;
}
function A4(t, e, a) {
  var n = At.exec(e.slice(a, a + 3));
  return n ? (t.L = +n[0], a + n[0].length) : -1;
}
function C4(t, e, a) {
  var n = At.exec(e.slice(a, a + 6));
  return n ? (t.L = Math.floor(n[0] / 1e3), a + n[0].length) : -1;
}
function P4(t, e, a) {
  var n = b4.exec(e.slice(a, a + 1));
  return n ? a + n[0].length : -1;
}
function E4(t, e, a) {
  var n = At.exec(e.slice(a));
  return n ? (t.Q = +n[0], a + n[0].length) : -1;
}
function I4(t, e, a) {
  var n = At.exec(e.slice(a));
  return n ? (t.s = +n[0], a + n[0].length) : -1;
}
function il(t, e) {
  return at(t.getDate(), e, 2);
}
function N4(t, e) {
  return at(t.getHours(), e, 2);
}
function L4(t, e) {
  return at(t.getHours() % 12 || 12, e, 2);
}
function F4(t, e) {
  return at(1 + bi.count(Ka(t), t), e, 3);
}
function q0(t, e) {
  return at(t.getMilliseconds(), e, 3);
}
function R4(t, e) {
  return q0(t, e) + "000";
}
function O4(t, e) {
  return at(t.getMonth() + 1, e, 2);
}
function z4(t, e) {
  return at(t.getMinutes(), e, 2);
}
function U4(t, e) {
  return at(t.getSeconds(), e, 2);
}
function V4(t) {
  var e = t.getDay();
  return e === 0 ? 7 : e;
}
function Y4(t, e) {
  return at(Tc.count(Ka(t) - 1, t), e, 2);
}
function j0(t) {
  var e = t.getDay();
  return e >= 4 || e === 0 ? gn(t) : gn.ceil(t);
}
function H4(t, e) {
  return t = j0(t), at(gn.count(Ka(t), t) + (Ka(t).getDay() === 4), e, 2);
}
function B4(t) {
  return t.getDay();
}
function W4(t, e) {
  return at(sc.count(Ka(t) - 1, t), e, 2);
}
function G4(t, e) {
  return at(t.getFullYear() % 100, e, 2);
}
function X4(t, e) {
  return t = j0(t), at(t.getFullYear() % 100, e, 2);
}
function q4(t, e) {
  return at(t.getFullYear() % 1e4, e, 4);
}
function j4(t, e) {
  var a = t.getDay();
  return t = a >= 4 || a === 0 ? gn(t) : gn.ceil(t), at(t.getFullYear() % 1e4, e, 4);
}
function Z4(t) {
  var e = t.getTimezoneOffset();
  return (e > 0 ? "-" : (e *= -1, "+")) + at(e / 60 | 0, "0", 2) + at(e % 60, "0", 2);
}
function cl(t, e) {
  return at(t.getUTCDate(), e, 2);
}
function J4(t, e) {
  return at(t.getUTCHours(), e, 2);
}
function Q4(t, e) {
  return at(t.getUTCHours() % 12 || 12, e, 2);
}
function K4(t, e) {
  return at(1 + It.count(Kt(t), t), e, 3);
}
function Z0(t, e) {
  return at(t.getUTCMilliseconds(), e, 3);
}
function $4(t, e) {
  return Z0(t, e) + "000";
}
function e9(t, e) {
  return at(t.getUTCMonth() + 1, e, 2);
}
function t9(t, e) {
  return at(t.getUTCMinutes(), e, 2);
}
function a9(t, e) {
  return at(t.getUTCSeconds(), e, 2);
}
function r9(t) {
  var e = t.getUTCDay();
  return e === 0 ? 7 : e;
}
function n9(t, e) {
  return at(X0.count(Kt(t) - 1, t), e, 2);
}
function J0(t) {
  var e = t.getUTCDay();
  return e >= 4 || e === 0 ? yn(t) : yn.ceil(t);
}
function i9(t, e) {
  return t = J0(t), at(yn.count(Kt(t), t) + (Kt(t).getUTCDay() === 4), e, 2);
}
function c9(t) {
  return t.getUTCDay();
}
function o9(t, e) {
  return at(fc.count(Kt(t) - 1, t), e, 2);
}
function s9(t, e) {
  return at(t.getUTCFullYear() % 100, e, 2);
}
function f9(t, e) {
  return t = J0(t), at(t.getUTCFullYear() % 100, e, 2);
}
function l9(t, e) {
  return at(t.getUTCFullYear() % 1e4, e, 4);
}
function d9(t, e) {
  var a = t.getUTCDay();
  return t = a >= 4 || a === 0 ? yn(t) : yn.ceil(t), at(t.getUTCFullYear() % 1e4, e, 4);
}
function u9() {
  return "+0000";
}
function ol() {
  return "%";
}
function sl(t) {
  return +t;
}
function fl(t) {
  return Math.floor(+t / 1e3);
}
var qr, Q0, Eo;
h9({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function h9(t) {
  return qr = h4(t), Q0 = qr.format, qr.parse, Eo = qr.utcFormat, qr.utcParse, qr;
}
function b9(t) {
  return new Date(t);
}
function m9(t) {
  return t instanceof Date ? +t : +/* @__PURE__ */ new Date(+t);
}
function K0(t, e, a, n, i, c, o, s, f, d) {
  var h = H0(), b = h.invert, m = h.domain, p = d(".%L"), g = d(":%S"), v = d("%I:%M"), k = d("%I %p"), S = d("%a %d"), N = d("%b %d"), I = d("%B"), x = d("%Y");
  function w(y) {
    return (f(y) < y ? p : s(y) < y ? g : o(y) < y ? v : c(y) < y ? k : n(y) < y ? i(y) < y ? S : N : a(y) < y ? I : x)(y);
  }
  return h.invert = function(y) {
    return new Date(b(y));
  }, h.domain = function(y) {
    return arguments.length ? m(Array.from(y, m9)) : m().map(b9);
  }, h.ticks = function(y) {
    var H = m();
    return t(H[0], H[H.length - 1], y ?? 10);
  }, h.tickFormat = function(y, H) {
    return H == null ? w : d(H);
  }, h.nice = function(y) {
    var H = m();
    return (!y || typeof y.range != "function") && (y = e(H[0], H[H.length - 1], y ?? 10)), y ? m(W0(H, y)) : h;
  }, h.copy = function() {
    return ws(h, K0(t, e, a, n, i, c, o, s, f, d));
  }, h;
}
function ar() {
  return _s.apply(K0(d4, u4, Ka, Ms, Tc, bi, Ss, ks, Ha, Q0).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function p9() {
  var t = 0, e = 1, a, n, i, c, o = ir, s = !1, f;
  function d(b) {
    return b == null || isNaN(b = +b) ? f : o(i === 0 ? 0.5 : (b = (c(b) - a) * i, s ? Math.max(0, Math.min(1, b)) : b));
  }
  d.domain = function(b) {
    return arguments.length ? ([t, e] = b, a = c(t = +t), n = c(e = +e), i = a === n ? 0 : 1 / (n - a), d) : [t, e];
  }, d.clamp = function(b) {
    return arguments.length ? (s = !!b, d) : s;
  }, d.interpolator = function(b) {
    return arguments.length ? (o = b, d) : o;
  };
  function h(b) {
    return function(m) {
      var p, g;
      return arguments.length ? ([p, g] = m, o = b(p, g), d) : [o(0), o(1)];
    };
  }
  return d.range = h(ui), d.rangeRound = h(Hd), d.unknown = function(b) {
    return arguments.length ? (f = b, d) : f;
  }, function(b) {
    return c = b, a = b(t), n = b(e), i = a === n ? 0 : 1 / (n - a), d;
  };
}
function g9(t, e) {
  return e.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown());
}
function lc() {
  var t = B0(p9()(ir));
  return t.copy = function() {
    return g9(t, lc());
  }, H7.apply(t, arguments);
}
function Mt(t) {
  return function() {
    return t;
  };
}
function $0(t) {
  let e = 3;
  return t.digits = function(a) {
    if (!arguments.length) return e;
    if (a == null)
      e = null;
    else {
      const n = Math.floor(a);
      if (!(n >= 0)) throw new RangeError(`invalid digits: ${a}`);
      e = n;
    }
    return t;
  }, () => new E7(e);
}
function e1(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function t1(t) {
  this._context = t;
}
t1.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, e) {
    switch (t = +t, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(t, e);
        break;
    }
  }
};
function fa(t) {
  return new t1(t);
}
function a1(t) {
  return t[0];
}
function r1(t) {
  return t[1];
}
function vn(t, e) {
  var a = Mt(!0), n = null, i = fa, c = null, o = $0(s);
  t = typeof t == "function" ? t : t === void 0 ? a1 : Mt(t), e = typeof e == "function" ? e : e === void 0 ? r1 : Mt(e);
  function s(f) {
    var d, h = (f = e1(f)).length, b, m = !1, p;
    for (n == null && (c = i(p = o())), d = 0; d <= h; ++d)
      !(d < h && a(b = f[d], d, f)) === m && ((m = !m) ? c.lineStart() : c.lineEnd()), m && c.point(+t(b, d, f), +e(b, d, f));
    if (p) return c = null, p + "" || null;
  }
  return s.x = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Mt(+f), s) : t;
  }, s.y = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : Mt(+f), s) : e;
  }, s.defined = function(f) {
    return arguments.length ? (a = typeof f == "function" ? f : Mt(!!f), s) : a;
  }, s.curve = function(f) {
    return arguments.length ? (i = f, n != null && (c = i(n)), s) : i;
  }, s.context = function(f) {
    return arguments.length ? (f == null ? n = c = null : c = i(n = f), s) : n;
  }, s;
}
function n1(t, e, a) {
  var n = null, i = Mt(!0), c = null, o = fa, s = null, f = $0(d);
  t = typeof t == "function" ? t : t === void 0 ? a1 : Mt(+t), e = typeof e == "function" ? e : Mt(e === void 0 ? 0 : +e), a = typeof a == "function" ? a : a === void 0 ? r1 : Mt(+a);
  function d(b) {
    var m, p, g, v = (b = e1(b)).length, k, S = !1, N, I = new Array(v), x = new Array(v);
    for (c == null && (s = o(N = f())), m = 0; m <= v; ++m) {
      if (!(m < v && i(k = b[m], m, b)) === S)
        if (S = !S)
          p = m, s.areaStart(), s.lineStart();
        else {
          for (s.lineEnd(), s.lineStart(), g = m - 1; g >= p; --g)
            s.point(I[g], x[g]);
          s.lineEnd(), s.areaEnd();
        }
      S && (I[m] = +t(k, m, b), x[m] = +e(k, m, b), s.point(n ? +n(k, m, b) : I[m], a ? +a(k, m, b) : x[m]));
    }
    if (N) return s = null, N + "" || null;
  }
  function h() {
    return vn().defined(i).curve(o).context(c);
  }
  return d.x = function(b) {
    return arguments.length ? (t = typeof b == "function" ? b : Mt(+b), n = null, d) : t;
  }, d.x0 = function(b) {
    return arguments.length ? (t = typeof b == "function" ? b : Mt(+b), d) : t;
  }, d.x1 = function(b) {
    return arguments.length ? (n = b == null ? null : typeof b == "function" ? b : Mt(+b), d) : n;
  }, d.y = function(b) {
    return arguments.length ? (e = typeof b == "function" ? b : Mt(+b), a = null, d) : e;
  }, d.y0 = function(b) {
    return arguments.length ? (e = typeof b == "function" ? b : Mt(+b), d) : e;
  }, d.y1 = function(b) {
    return arguments.length ? (a = b == null ? null : typeof b == "function" ? b : Mt(+b), d) : a;
  }, d.lineX0 = d.lineY0 = function() {
    return h().x(t).y(e);
  }, d.lineY1 = function() {
    return h().x(t).y(a);
  }, d.lineX1 = function() {
    return h().x(n).y(e);
  }, d.defined = function(b) {
    return arguments.length ? (i = typeof b == "function" ? b : Mt(!!b), d) : i;
  }, d.curve = function(b) {
    return arguments.length ? (o = b, c != null && (s = o(c)), d) : o;
  }, d.context = function(b) {
    return arguments.length ? (b == null ? c = s = null : s = o(c = b), d) : c;
  }, d;
}
function i1(t) {
  this._context = t;
}
i1.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var t = this._x, e = this._y, a = t.length;
    if (a)
      if (this._line ? this._context.lineTo(t[0], e[0]) : this._context.moveTo(t[0], e[0]), a === 2)
        this._context.lineTo(t[1], e[1]);
      else
        for (var n = ll(t), i = ll(e), c = 0, o = 1; o < a; ++c, ++o)
          this._context.bezierCurveTo(n[0][c], i[0][c], n[1][c], i[1][c], t[o], e[o]);
    (this._line || this._line !== 0 && a === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(t, e) {
    this._x.push(+t), this._y.push(+e);
  }
};
function ll(t) {
  var e, a = t.length - 1, n, i = new Array(a), c = new Array(a), o = new Array(a);
  for (i[0] = 0, c[0] = 2, o[0] = t[0] + 2 * t[1], e = 1; e < a - 1; ++e) i[e] = 1, c[e] = 4, o[e] = 4 * t[e] + 2 * t[e + 1];
  for (i[a - 1] = 2, c[a - 1] = 7, o[a - 1] = 8 * t[a - 1] + t[a], e = 1; e < a; ++e) n = i[e] / c[e - 1], c[e] -= n, o[e] -= n * o[e - 1];
  for (i[a - 1] = o[a - 1] / c[a - 1], e = a - 2; e >= 0; --e) i[e] = (o[e] - i[e + 1]) / c[e];
  for (c[a - 1] = (t[a] + i[a - 1]) / 2, e = 0; e < a - 1; ++e) c[e] = 2 * t[e + 1] - i[e + 1];
  return [i, c];
}
function Ts(t) {
  return new i1(t);
}
function Dc(t, e) {
  this._context = t, this._t = e;
}
Dc.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(t, e) {
    switch (t = +t, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
        break;
      case 1:
        this._point = 2;
      // falls through
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, e), this._context.lineTo(t, e);
        else {
          var a = this._x * (1 - this._t) + t * this._t;
          this._context.lineTo(a, this._y), this._context.lineTo(a, e);
        }
        break;
      }
    }
    this._x = t, this._y = e;
  }
};
function Ds(t) {
  return new Dc(t, 0.5);
}
function As(t) {
  return new Dc(t, 0);
}
function Cs(t) {
  return new Dc(t, 1);
}
const Ei = (t) => () => t;
function y9(t, {
  sourceEvent: e,
  target: a,
  transform: n,
  dispatch: i
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: e, enumerable: !0, configurable: !0 },
    target: { value: a, enumerable: !0, configurable: !0 },
    transform: { value: n, enumerable: !0, configurable: !0 },
    _: { value: i }
  });
}
function Ba(t, e, a) {
  this.k = t, this.x = e, this.y = a;
}
Ba.prototype = {
  constructor: Ba,
  scale: function(t) {
    return t === 1 ? this : new Ba(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new Ba(this.k, this.x + this.k * t, this.y + this.k * e);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var dc = new Ba(1, 0, 0);
Ba.prototype;
function jc(t) {
  t.stopImmediatePropagation();
}
function On(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function v9(t) {
  return (!t.ctrlKey || t.type === "wheel") && !t.button;
}
function _9() {
  var t = this;
  return t instanceof SVGElement ? (t = t.ownerSVGElement || t, t.hasAttribute("viewBox") ? (t = t.viewBox.baseVal, [[t.x, t.y], [t.x + t.width, t.y + t.height]]) : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]) : [[0, 0], [t.clientWidth, t.clientHeight]];
}
function dl() {
  return this.__zoom || dc;
}
function w9(t) {
  return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * (t.ctrlKey ? 10 : 1);
}
function x9() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function k9(t, e, a) {
  var n = t.invertX(e[0][0]) - a[0][0], i = t.invertX(e[1][0]) - a[1][0], c = t.invertY(e[0][1]) - a[0][1], o = t.invertY(e[1][1]) - a[1][1];
  return t.translate(
    i > n ? (n + i) / 2 : Math.min(0, n) || Math.max(0, i),
    o > c ? (c + o) / 2 : Math.min(0, c) || Math.max(0, o)
  );
}
function S9() {
  var t = v9, e = _9, a = k9, n = w9, i = x9, c = [0, 1 / 0], o = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, f = Gd, d = xc("start", "zoom", "end"), h, b, m, p = 500, g = 150, v = 0, k = 10;
  function S(_) {
    _.property("__zoom", dl).on("wheel.zoom", B, { passive: !1 }).on("mousedown.zoom", V).on("dblclick.zoom", X).filter(i).on("touchstart.zoom", G).on("touchmove.zoom", q).on("touchend.zoom touchcancel.zoom", E).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  S.transform = function(_, C, A, Z) {
    var ee = _.selection ? _.selection() : _;
    ee.property("__zoom", dl), _ !== ee ? w(_, C, A, Z) : ee.interrupt().each(function() {
      y(this, arguments).event(Z).start().zoom(null, typeof C == "function" ? C.apply(this, arguments) : C).end();
    });
  }, S.scaleBy = function(_, C, A, Z) {
    S.scaleTo(_, function() {
      var ee = this.__zoom.k, ne = typeof C == "function" ? C.apply(this, arguments) : C;
      return ee * ne;
    }, A, Z);
  }, S.scaleTo = function(_, C, A, Z) {
    S.transform(_, function() {
      var ee = e.apply(this, arguments), ne = this.__zoom, ie = A == null ? x(ee) : typeof A == "function" ? A.apply(this, arguments) : A, ue = ne.invert(ie), oe = typeof C == "function" ? C.apply(this, arguments) : C;
      return a(I(N(ne, oe), ie, ue), ee, o);
    }, A, Z);
  }, S.translateBy = function(_, C, A, Z) {
    S.transform(_, function() {
      return a(this.__zoom.translate(
        typeof C == "function" ? C.apply(this, arguments) : C,
        typeof A == "function" ? A.apply(this, arguments) : A
      ), e.apply(this, arguments), o);
    }, null, Z);
  }, S.translateTo = function(_, C, A, Z, ee) {
    S.transform(_, function() {
      var ne = e.apply(this, arguments), ie = this.__zoom, ue = Z == null ? x(ne) : typeof Z == "function" ? Z.apply(this, arguments) : Z;
      return a(dc.translate(ue[0], ue[1]).scale(ie.k).translate(
        typeof C == "function" ? -C.apply(this, arguments) : -C,
        typeof A == "function" ? -A.apply(this, arguments) : -A
      ), ne, o);
    }, Z, ee);
  };
  function N(_, C) {
    return C = Math.max(c[0], Math.min(c[1], C)), C === _.k ? _ : new Ba(C, _.x, _.y);
  }
  function I(_, C, A) {
    var Z = C[0] - A[0] * _.k, ee = C[1] - A[1] * _.k;
    return Z === _.x && ee === _.y ? _ : new Ba(_.k, Z, ee);
  }
  function x(_) {
    return [(+_[0][0] + +_[1][0]) / 2, (+_[0][1] + +_[1][1]) / 2];
  }
  function w(_, C, A, Z) {
    _.on("start.zoom", function() {
      y(this, arguments).event(Z).start();
    }).on("interrupt.zoom end.zoom", function() {
      y(this, arguments).event(Z).end();
    }).tween("zoom", function() {
      var ee = this, ne = arguments, ie = y(ee, ne).event(Z), ue = e.apply(ee, ne), oe = A == null ? x(ue) : typeof A == "function" ? A.apply(ee, ne) : A, de = Math.max(ue[1][0] - ue[0][0], ue[1][1] - ue[0][1]), ge = ee.__zoom, te = typeof C == "function" ? C.apply(ee, ne) : C, ae = f(ge.invert(oe).concat(de / ge.k), te.invert(oe).concat(de / te.k));
      return function(ye) {
        if (ye === 1) ye = te;
        else {
          var ve = ae(ye), $ = de / ve[2];
          ye = new Ba($, oe[0] - ve[0] * $, oe[1] - ve[1] * $);
        }
        ie.zoom(null, ye);
      };
    });
  }
  function y(_, C, A) {
    return !A && _.__zooming || new H(_, C);
  }
  function H(_, C) {
    this.that = _, this.args = C, this.active = 0, this.sourceEvent = null, this.extent = e.apply(_, C), this.taps = 0;
  }
  H.prototype = {
    event: function(_) {
      return _ && (this.sourceEvent = _), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(_, C) {
      return this.mouse && _ !== "mouse" && (this.mouse[1] = C.invert(this.mouse[0])), this.touch0 && _ !== "touch" && (this.touch0[1] = C.invert(this.touch0[0])), this.touch1 && _ !== "touch" && (this.touch1[1] = C.invert(this.touch1[0])), this.that.__zoom = C, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(_) {
      var C = mt(this.that).datum();
      d.call(
        _,
        this.that,
        new y9(_, {
          sourceEvent: this.sourceEvent,
          target: S,
          transform: this.that.__zoom,
          dispatch: d
        }),
        C
      );
    }
  };
  function B(_, ...C) {
    if (!t.apply(this, arguments)) return;
    var A = y(this, C).event(_), Z = this.__zoom, ee = Math.max(c[0], Math.min(c[1], Z.k * Math.pow(2, n.apply(this, arguments)))), ne = Ra(_);
    if (A.wheel)
      (A.mouse[0][0] !== ne[0] || A.mouse[0][1] !== ne[1]) && (A.mouse[1] = Z.invert(A.mouse[0] = ne)), clearTimeout(A.wheel);
    else {
      if (Z.k === ee) return;
      A.mouse = [ne, Z.invert(ne)], Wi(this), A.start();
    }
    On(_), A.wheel = setTimeout(ie, g), A.zoom("mouse", a(I(N(Z, ee), A.mouse[0], A.mouse[1]), A.extent, o));
    function ie() {
      A.wheel = null, A.end();
    }
  }
  function V(_, ...C) {
    if (m || !t.apply(this, arguments)) return;
    var A = _.currentTarget, Z = y(this, C, !0).event(_), ee = mt(_.view).on("mousemove.zoom", oe, !0).on("mouseup.zoom", de, !0), ne = Ra(_, A), ie = _.clientX, ue = _.clientY;
    A0(_.view), jc(_), Z.mouse = [ne, this.__zoom.invert(ne)], Wi(this), Z.start();
    function oe(ge) {
      if (On(ge), !Z.moved) {
        var te = ge.clientX - ie, ae = ge.clientY - ue;
        Z.moved = te * te + ae * ae > v;
      }
      Z.event(ge).zoom("mouse", a(I(Z.that.__zoom, Z.mouse[0] = Ra(ge, A), Z.mouse[1]), Z.extent, o));
    }
    function de(ge) {
      ee.on("mousemove.zoom mouseup.zoom", null), C0(ge.view, Z.moved), On(ge), Z.event(ge).end();
    }
  }
  function X(_, ...C) {
    if (t.apply(this, arguments)) {
      var A = this.__zoom, Z = Ra(_.changedTouches ? _.changedTouches[0] : _, this), ee = A.invert(Z), ne = A.k * (_.shiftKey ? 0.5 : 2), ie = a(I(N(A, ne), Z, ee), e.apply(this, C), o);
      On(_), s > 0 ? mt(this).transition().duration(s).call(w, ie, Z, _) : mt(this).call(S.transform, ie, Z, _);
    }
  }
  function G(_, ...C) {
    if (t.apply(this, arguments)) {
      var A = _.touches, Z = A.length, ee = y(this, C, _.changedTouches.length === Z).event(_), ne, ie, ue, oe;
      for (jc(_), ie = 0; ie < Z; ++ie)
        ue = A[ie], oe = Ra(ue, this), oe = [oe, this.__zoom.invert(oe), ue.identifier], ee.touch0 ? !ee.touch1 && ee.touch0[2] !== oe[2] && (ee.touch1 = oe, ee.taps = 0) : (ee.touch0 = oe, ne = !0, ee.taps = 1 + !!h);
      h && (h = clearTimeout(h)), ne && (ee.taps < 2 && (b = oe[0], h = setTimeout(function() {
        h = null;
      }, p)), Wi(this), ee.start());
    }
  }
  function q(_, ...C) {
    if (this.__zooming) {
      var A = y(this, C).event(_), Z = _.changedTouches, ee = Z.length, ne, ie, ue, oe;
      for (On(_), ne = 0; ne < ee; ++ne)
        ie = Z[ne], ue = Ra(ie, this), A.touch0 && A.touch0[2] === ie.identifier ? A.touch0[0] = ue : A.touch1 && A.touch1[2] === ie.identifier && (A.touch1[0] = ue);
      if (ie = A.that.__zoom, A.touch1) {
        var de = A.touch0[0], ge = A.touch0[1], te = A.touch1[0], ae = A.touch1[1], ye = (ye = te[0] - de[0]) * ye + (ye = te[1] - de[1]) * ye, ve = (ve = ae[0] - ge[0]) * ve + (ve = ae[1] - ge[1]) * ve;
        ie = N(ie, Math.sqrt(ye / ve)), ue = [(de[0] + te[0]) / 2, (de[1] + te[1]) / 2], oe = [(ge[0] + ae[0]) / 2, (ge[1] + ae[1]) / 2];
      } else if (A.touch0) ue = A.touch0[0], oe = A.touch0[1];
      else return;
      A.zoom("touch", a(I(ie, ue, oe), A.extent, o));
    }
  }
  function E(_, ...C) {
    if (this.__zooming) {
      var A = y(this, C).event(_), Z = _.changedTouches, ee = Z.length, ne, ie;
      for (jc(_), m && clearTimeout(m), m = setTimeout(function() {
        m = null;
      }, p), ne = 0; ne < ee; ++ne)
        ie = Z[ne], A.touch0 && A.touch0[2] === ie.identifier ? delete A.touch0 : A.touch1 && A.touch1[2] === ie.identifier && delete A.touch1;
      if (A.touch1 && !A.touch0 && (A.touch0 = A.touch1, delete A.touch1), A.touch0) A.touch0[1] = this.__zoom.invert(A.touch0[0]);
      else if (A.end(), A.taps === 2 && (ie = Ra(ie, this), Math.hypot(b[0] - ie[0], b[1] - ie[1]) < k)) {
        var ue = mt(this).on("dblclick.zoom");
        ue && ue.apply(this, arguments);
      }
    }
  }
  return S.wheelDelta = function(_) {
    return arguments.length ? (n = typeof _ == "function" ? _ : Ei(+_), S) : n;
  }, S.filter = function(_) {
    return arguments.length ? (t = typeof _ == "function" ? _ : Ei(!!_), S) : t;
  }, S.touchable = function(_) {
    return arguments.length ? (i = typeof _ == "function" ? _ : Ei(!!_), S) : i;
  }, S.extent = function(_) {
    return arguments.length ? (e = typeof _ == "function" ? _ : Ei([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), S) : e;
  }, S.scaleExtent = function(_) {
    return arguments.length ? (c[0] = +_[0], c[1] = +_[1], S) : [c[0], c[1]];
  }, S.translateExtent = function(_) {
    return arguments.length ? (o[0][0] = +_[0][0], o[1][0] = +_[1][0], o[0][1] = +_[0][1], o[1][1] = +_[1][1], S) : [[o[0][0], o[0][1]], [o[1][0], o[1][1]]];
  }, S.constrain = function(_) {
    return arguments.length ? (a = _, S) : a;
  }, S.duration = function(_) {
    return arguments.length ? (s = +_, S) : s;
  }, S.interpolate = function(_) {
    return arguments.length ? (f = _, S) : f;
  }, S.on = function() {
    var _ = d.on.apply(d, arguments);
    return _ === d ? S : _;
  }, S.clickDistance = function(_) {
    return arguments.length ? (v = (_ = +_) * _, S) : Math.sqrt(v);
  }, S.tapDistance = function(_) {
    return arguments.length ? (k = +_, S) : k;
  }, S;
}
const M9 = function(t) {
  const e = Math.log10(t), a = Math.floor(e), n = Math.pow(10, -1 * a + e).toFixed(0);
  return { value: t, exponent: a, multiplier: n };
}, T9 = function(t, e, a, n, i) {
  const c = Math.abs(e[0] - e[1]);
  if (a === "linear") {
    const o = ci().domain(t).range(e);
    let s;
    if (i && i > 0) {
      const f = Math.ceil(t[0] / i) * i, d = t[1];
      s = Of(f, d + i / 2, i).filter((h) => h >= t[0] && h <= t[1]);
    } else
      s = o.ticks(c / n);
    return { yScale: o, ticks: s };
  } else if (a === "log10") {
    const o = [Math.pow(10, t[0]), Math.pow(10, t[1])], s = G0().domain(o).range(e), d = s.ticks(c / n).map(M9);
    return { yScale: s, ticks: d };
  } else if (a === "polar_lat_annot") {
    const o = ci().domain(t).range(e), f = [5, 10, 15, 30, 45, 90].find((b) => o(0) - o(b) >= n) ?? 90, h = Of(t[0], t[1] + f, f).filter((b) => b >= t[0] && b <= t[1]).map((b) => b > 90 ? { value: b, annot: 180 - b } : b < -90 ? { value: b, annot: -180 - b } : { value: b, annot: b });
    return { yScale: o, ticks: h };
  } else
    throw new Error(`Unknown scale type: ${a}`);
}, D9 = '500 11px -apple-system, "Helvetica Neue", sans-serif', Ii = "…";
let Ni = null;
function A9() {
  return Ni || (Ni = document.createElement("canvas").getContext("2d"), Ni.font = D9), Ni;
}
function C9(t) {
  return A9().measureText(t).width;
}
function P9(t) {
  const e = t.match(/^(.*?)\s+(\([^)]+\))$/);
  return e ? { name: e[1], units: e[2] } : { name: t, units: null };
}
function E9(t, e, a) {
  if (!t)
    return { text: "", wasTruncated: !1 };
  if (e <= 0)
    return { text: "", wasTruncated: !0 };
  if (a(t) <= e)
    return { text: t, wasTruncated: !1 };
  const { name: n, units: i } = P9(t);
  if (i && a(i) <= e) {
    const f = ` ${i}`, d = a(f), h = a(Ii), b = e - d - h;
    if (b > 0)
      for (let m = n.length - 1; m >= 1; m--) {
        const p = n.slice(0, m).trimEnd();
        if (p.length >= 1 && a(p) <= b)
          return {
            text: p + Ii + f,
            wasTruncated: !0
          };
      }
    return { text: i, wasTruncated: !0 };
  }
  const c = a(Ii), o = e - c;
  if (o > 0)
    for (let s = t.length - 1; s >= 1; s--) {
      const f = t.slice(0, s).trimEnd();
      if (f.length >= 1 && a(f) <= o)
        return { text: f + Ii, wasTruncated: !0 };
    }
  return { text: "", wasTruncated: !0 };
}
function I9(t, e) {
  return E9(t, e, C9);
}
var N9 = /* @__PURE__ */ U('<line stroke="black" class="stroke-black dark:stroke-white" stroke-width="0.75"></line>'), L9 = /* @__PURE__ */ U(`<text font-family="-apple-system, 'Helvetica Neue', sans-serif" fill="black" class="fill-black dark:fill-white svelte-1py1k0x" alignment-baseline="middle" text-anchor="end">10<tspan baseline-shift="super"> </tspan></text>`), F9 = /* @__PURE__ */ U("<!><!>", 1), R9 = /* @__PURE__ */ U('<line stroke="black" class="stroke-black dark:stroke-white" stroke-width="0.75"></line>'), O9 = /* @__PURE__ */ U('<line stroke="black" class="stroke-black dark:stroke-white" stroke-width="0.75"></line>'), z9 = /* @__PURE__ */ U(`<text font-family="-apple-system, 'Helvetica Neue', sans-serif" fill="black" class="fill-black dark:fill-white svelte-1py1k0x" dominant-baseline="auto" text-anchor="end"> </text>`), U9 = /* @__PURE__ */ U("<!><!>", 1), V9 = /* @__PURE__ */ U(`<text x="0" y="0" font-family="-apple-system, 'Helvetica Neue', sans-serif" font-weight="500" fill="black" class="fill-black dark:fill-white svelte-1py1k0x" alignment-baseline="middle" text-anchor="middle"> </text>`), Y9 = /* @__PURE__ */ U('<g class="yaxis"><line stroke="black" class="stroke-black dark:stroke-white" stroke-width="1.5"></line><!><!></g>');
function H9(t, e) {
  it(e, !0);
  let a = Tt(e, "yTickPadding", 3, 4), n = Tt(e, "yTickSize", 3, 6), i = Tt(e, "ticksVisible", 3, !0), c = Tt(e, "annotationVisible", 3, !0), o = /* @__PURE__ */ u(() => e.yScale.range()[0]), s = /* @__PURE__ */ u(() => e.yScale.range()[1]), f = /* @__PURE__ */ u(() => (r(s) + r(o)) / 2), d = /* @__PURE__ */ u(() => e.scale_type === "log10" ? e.ticks : []), h = /* @__PURE__ */ u(() => e.scale_type !== "log10" ? e.ticks : []), b = /* @__PURE__ */ u(() => {
    if (e.yTickFormat == "auto") {
      const w = e.ticks;
      if (w.length < 2) return ".0f";
      const y = w[1] - w[0];
      return "." + V0(y) + "f";
    } else
      return e.yTickFormat ?? ".2f";
  }), m = /* @__PURE__ */ u(() => r(o) - r(s)), p = /* @__PURE__ */ u(() => e.yLabel ? I9(e.yLabel, r(m)).text : "");
  var g = Y9(), v = he(g), k = Q(v);
  {
    var S = (w) => {
      var y = qe(), H = ce(y);
      Xe(H, 17, () => r(d), (B) => B.value, (B, V) => {
        var X = qe(), G = ce(X);
        {
          var q = (_) => {
            var C = F9(), A = ce(C);
            {
              var Z = (ie) => {
                var ue = N9();
                Y(
                  (oe, de) => {
                    l(ue, "x1", e.left - n()), l(ue, "x2", e.left), l(ue, "y1", oe), l(ue, "y2", de);
                  },
                  [
                    () => e.yScale(r(V).value),
                    () => e.yScale(r(V).value)
                  ]
                ), T(ie, ue);
              };
              we(A, (ie) => {
                i() && ie(Z);
              });
            }
            var ee = Q(A);
            {
              var ne = (ie) => {
                var ue = L9();
                ft(ue, "", {}, { "font-size": "var(--plot-font-size-axis, 11px)" });
                var oe = Q(he(ue));
                ft(oe, "", {}, { "font-size": "var(--plot-font-size-small, 8px)" });
                var de = he(oe);
                Y(
                  (ge) => {
                    l(ue, "x", e.left - n() - a()), l(ue, "y", ge), Ke(de, r(V).exponent);
                  },
                  [() => e.yScale(r(V).value)]
                ), T(ie, ue);
              };
              we(ee, (ie) => {
                c() && ie(ne);
              });
            }
            T(_, C);
          }, E = (_) => {
            var C = R9();
            Y(
              (A, Z) => {
                l(C, "x1", e.left - 3), l(C, "x2", e.left), l(C, "y1", A), l(C, "y2", Z);
              },
              [
                () => e.yScale(r(V).value),
                () => e.yScale(r(V).value)
              ]
            ), T(_, C);
          };
          we(G, (_) => {
            r(V).multiplier === "1" ? _(q) : i() && _(E, 1);
          });
        }
        T(B, X);
      }), T(w, y);
    }, N = (w) => {
      var y = qe(), H = ce(y);
      Xe(H, 16, () => r(h), (B) => B, (B, V) => {
        var X = U9(), G = ce(X);
        {
          var q = (C) => {
            var A = O9();
            Y(
              (Z, ee) => {
                l(A, "x1", e.left - n()), l(A, "x2", e.left), l(A, "y1", Z), l(A, "y2", ee);
              },
              [() => e.yScale(V), () => e.yScale(V)]
            ), T(C, A);
          };
          we(G, (C) => {
            i() && C(q);
          });
        }
        var E = Q(G);
        {
          var _ = (C) => {
            var A = z9();
            ft(A, "", {}, { "font-size": "var(--plot-font-size-axis, 11px)" });
            var Z = he(A);
            Y(
              (ee, ne) => {
                l(A, "x", e.left - n() - a()), l(A, "y", ee), Ke(Z, ne);
              },
              [
                () => e.yScale(V) + 4,
                () => zr(r(b))(V)
              ]
            ), T(C, A);
          };
          we(E, (C) => {
            c() && C(_);
          });
        }
        T(B, X);
      }), T(w, y);
    };
    we(k, (w) => {
      e.scale_type === "log10" ? w(S) : w(N, -1);
    });
  }
  var I = Q(k);
  {
    var x = (w) => {
      var y = V9();
      ft(y, "", {}, { "font-size": "var(--plot-font-size-axis, 11px)" });
      var H = he(y);
      Y(() => {
        l(y, "transform", `translate(${e.left - 50}, ${r(f) ?? ""}) rotate(-90)`), Ke(H, r(p));
      }), T(w, y);
    };
    we(I, (w) => {
      r(p) !== "" && w(x);
    });
  }
  Y(() => {
    l(v, "x1", e.left), l(v, "x2", e.left), l(v, "y1", r(o)), l(v, "y2", r(s));
  }), T(t, g), ct();
}
function Ps(t, e) {
  return t.invert(e) - t.invert(0);
}
function Es(t, e) {
  return Math.log10(t.invert(e)) - Math.log10(t.invert(0));
}
function uc(t, e, a) {
  return Math.max(e, Math.min(a, t));
}
function B9(t, e, a, n) {
  if (n.scaleType === "log10") {
    const i = t.domain(), c = [Math.log10(i[0]), Math.log10(i[1])], o = Es(t, e);
    let s = c[0] + a * o, f = c[1] + a * o;
    return n.bounds && (s < n.bounds[0] && (s = n.bounds[0], f = c[1]), f > n.bounds[1] && (f = n.bounds[1], s = c[0])), [s, f];
  } else {
    const i = t.domain(), c = Ps(t, e);
    let o = i[0] + a * c, s = i[1] + a * c;
    return n.bounds && (o < n.bounds[0] && (o = n.bounds[0], s = i[1]), s > n.bounds[1] && (s = n.bounds[1], o = i[0])), [o, s];
  }
}
function W9(t, e, a, n) {
  if (n.scaleType === "log10") {
    const i = t.domain(), c = Math.log10(i[0]), o = Math.log10(i[1]), s = Es(t, e);
    let f = o + a * s;
    const d = n.bounds?.[1] ?? 1 / 0;
    return f = uc(f, c, d), n.mirror ? [-f, f] : [c, f];
  } else {
    const i = t.domain(), c = Ps(t, e);
    let o = i[1] + a * c;
    const s = n.bounds?.[1] ?? 1 / 0;
    return o = uc(o, i[0], s), n.mirror ? [-o, o] : [i[0], o];
  }
}
function G9(t, e, a, n) {
  if (n.scaleType === "log10") {
    const i = t.domain(), c = Math.log10(i[0]), o = Math.log10(i[1]), s = Es(t, e);
    let f = c + a * s;
    const d = n.bounds?.[0] ?? -1 / 0;
    return f = uc(f, d, o), n.mirror ? [f, -f] : [f, o];
  } else {
    const i = t.domain(), c = Ps(t, e);
    let o = i[0] + a * c;
    const s = n.bounds?.[0] ?? -1 / 0;
    return o = uc(o, s, i[1]), n.mirror ? [o, -o] : [o, i[1]];
  }
}
var X9 = /* @__PURE__ */ U('<rect class="draggable svelte-1dsob74" fill="purple" opacity="0"></rect><rect class="draggable svelte-1dsob74" fill="blue" opacity="0"></rect><rect class="draggable svelte-1dsob74" fill="green" opacity="0"></rect>', 1);
function q9(t, e) {
  it(e, !0);
  let a = Tt(e, "mirror", 3, !1), n, i, c, o = /* @__PURE__ */ u(() => e.yScale.range()[0]), s = /* @__PURE__ */ u(() => e.yScale.range()[1]), f = /* @__PURE__ */ u(() => (r(s) + r(o)) / 2);
  const d = 40;
  xn(() => {
    const g = {
      scaleType: e.scale_type,
      bounds: e.y_domain_bounds,
      mirror: a()
    };
    a() || mt(c).call(ja().on("start", () => e.onDragStart?.()).on("end", () => e.onDragEnd?.()).on("drag", (v) => {
      e.onYDomainChange(B9(e.yScale, v.dy, -1, g));
    })), mt(i).call(ja().on("start", () => e.onDragStart?.()).on("end", () => e.onDragEnd?.()).on("drag", (v) => {
      e.onYDomainChange(W9(e.yScale, v.dy, -1, g));
    })), mt(n).call(ja().on("start", () => e.onDragStart?.()).on("end", () => e.onDragEnd?.()).on("drag", (v) => {
      e.onYDomainChange(G9(e.yScale, v.dy, -1, g));
    }));
  });
  var h = X9(), b = ce(h);
  l(b, "width", d), l(b, "height", 20), Da(b, (g) => c = g, () => c);
  var m = Q(b);
  l(m, "width", d), l(m, "height", 20), Da(m, (g) => i = g, () => i);
  var p = Q(m);
  l(p, "width", d), l(p, "height", 20), Da(p, (g) => n = g, () => n), Y(() => {
    l(b, "x", e.left - d), l(b, "y", r(f) - 10), l(m, "x", e.left - d), l(m, "y", r(s)), l(p, "x", e.left - d), l(p, "y", r(o) - 20);
  }), T(t, h), ct();
}
const j9 = function(t) {
  const e = t.range()[1] - t.range()[0], a = 1280, n = t.domain();
  let i = (+n[1] - +n[0]) / 1e3 / 3600 / 24;
  i *= a / e;
  let c, o, s, f, d = "visible";
  return i < 35e-5 ? (c = Ha, o = It, s = "%H:%M:%S", f = "%Y-%m-%d") : i < 1e-3 ? (c = Ha.every(5), o = It, s = "%H:%M:%S", f = "%Y-%m-%d") : i < 25e-4 ? (c = Ha.every(10), o = It, s = "%H:%M:%S", f = "%Y-%m-%d") : i < 0.025 ? (c = Wn, o = It, s = "%H:%M", f = "%Y-%m-%d") : i < 0.1 ? (c = Wn.every(5), o = It, s = "%H:%M", f = "%Y-%m-%d") : i < 0.3 ? (c = Wn.every(15), o = It, s = "%H:%M", f = "%Y-%m-%d") : i < 0.5 ? (c = Wn.every(30), o = It, s = "%H:%M", f = "%Y-%m-%d") : i < 1 ? (c = Gn.every(1), o = It, s = "%H:%M", f = "%Y-%m-%d") : i < 3 ? (c = Gn.every(3), o = It, s = "%H:%M", f = "%Y-%m-%d") : i < 6 ? (c = Gn.every(6), o = It, s = "%H:%M", f = "%Y-%m-%d") : i < 12 ? (c = Gn.every(12), o = It, s = "%H:%M", f = "%Y-%m-%d") : i < 0.15 * 365 ? (c = It, o = Gi, s = "%d", f = "%b %Y") : i < 0.3 * 365 ? (c = It, o = Gi, s = "%d", f = "%b %Y", d = "hidden") : i < 3 * 365 ? (c = Gi, o = Kt, s = "%b", f = "%Y") : i < 30 * 365 ? (c = Kt, o = Kt.every(10), s = "%Y", f = "%Ys") : (c = Kt.every(10), o = Kt.every(100), s = "%Ys", f = "%Ys"), {
    interval_p: c,
    interval_s: o,
    tickformat_p: s,
    tickformat_s: f,
    visibility_annot_p: d
  };
};
var Z9 = /* @__PURE__ */ U('<line class="stroke-black dark:stroke-white" stroke-opacity="15%"></line>'), J9 = /* @__PURE__ */ U(`<text font-family="-apple-system, 'Helvetica Neue', sans-serif" fill="black" class="fill-black dark:fill-white svelte-4cksys"> </text>`), Q9 = /* @__PURE__ */ U(`<text font-family="-apple-system, 'Helvetica Neue', sans-serif" fill="black" class="fill-black dark:fill-white primaryTickText svelte-4cksys" role="button" tabindex="0"> </text>`), K9 = /* @__PURE__ */ U('<line stroke="black" class="stroke-black dark:stroke-white" stroke-width="0.75"></line><!>', 1), $9 = /* @__PURE__ */ U('<line stroke="black" class="stroke-black dark:stroke-white" stroke-width="0.75"></line>'), em = /* @__PURE__ */ U(`<!><text font-family="-apple-system, 'Helvetica Neue', sans-serif" fill="black" class="fill-black dark:fill-white secondaryTickText svelte-4cksys" text-anchor="begin" id="secondaryTickText" role="button" tabindex="0"> </text>`, 1), tm = /* @__PURE__ */ U('<line stroke="black" class="stroke-black dark:stroke-white" stroke-width="0.75"></line>'), am = /* @__PURE__ */ U("<!><!>", 1), rm = /* @__PURE__ */ U('<g class="dayticks"></g><g class="xaxis"><line stroke="black" class="stroke-black dark:stroke-white" stroke-width="1.5"></line><!></g>', 1);
function nm(t, e) {
  it(e, !0);
  let a = 4, n = 30, i = /* @__PURE__ */ u(() => j9(e.xScale)), c = /* @__PURE__ */ u(() => e.yScale.range()), o = /* @__PURE__ */ u(() => vr(r(c), 2)), s = /* @__PURE__ */ u(() => r(o)[0]), f = /* @__PURE__ */ u(() => r(o)[1]), d = /* @__PURE__ */ u(() => e.xScale.range()), h = /* @__PURE__ */ u(() => vr(r(d), 2)), b = /* @__PURE__ */ u(() => r(h)[0]), m = /* @__PURE__ */ u(() => r(h)[1]), p = /* @__PURE__ */ u(() => r(i).tickformat_p.startsWith("%H:%M") ? ["middle", 0, 20] : ["begin", 12, 0]), g = /* @__PURE__ */ u(() => vr(r(p), 3)), v = /* @__PURE__ */ u(() => r(g)[0]), k = /* @__PURE__ */ u(() => r(g)[1]), S = /* @__PURE__ */ u(() => r(g)[2]), N = /* @__PURE__ */ u(() => e.xScale.ticks(r(i).interval_p)), I = /* @__PURE__ */ u(() => Eo(r(i).tickformat_p)), x = /* @__PURE__ */ u(() => {
    let ee = e.xScale.ticks(r(i).interval_s);
    return ee.length == 0 ? [[e.xScale.domain()[0]], !1] : [ee, !0];
  }), w = /* @__PURE__ */ u(() => vr(r(x), 2)), y = /* @__PURE__ */ u(() => r(w)[0]), H = /* @__PURE__ */ u(() => r(w)[1]), B = /* @__PURE__ */ u(() => Eo(r(i).tickformat_s)), V = /* @__PURE__ */ u(() => r(i).tickformat_p.startsWith("%d") || r(i).tickformat_p.startsWith("%H") ? e.xScale.ticks(It) : []);
  const X = function(ee) {
    if (r(i).tickformat_p.startsWith("%H:%M"))
      return;
    const ne = ka(ee, "UTC"), ie = new Date(ee.getTime() + 1), ue = ka(r(i).interval_p.ceil(ie), "UTC");
    Je.setTimeDomainAnimated(ne, ue);
  }, G = function(ee) {
    const ne = ka(ee, "UTC"), ie = new Date(ee.getTime() + 1), ue = ka(r(i).interval_s.ceil(ie), "UTC");
    Je.setTimeDomainAnimated(ne, ue);
  };
  var q = rm(), E = ce(q);
  Xe(E, 21, () => r(V), (ee) => ee.getTime(), (ee, ne) => {
    var ie = Z9();
    Y(
      (ue, oe) => {
        l(ie, "x1", ue), l(ie, "x2", oe), l(ie, "y1", r(s)), l(ie, "y2", r(f));
      },
      [
        () => e.xScale(r(ne)),
        () => e.xScale(r(ne))
      ]
    ), T(ee, ie);
  });
  var _ = Q(E), C = he(_), A = Q(C);
  {
    var Z = (ee) => {
      var ne = am(), ie = ce(ne);
      Xe(ie, 17, () => r(N), (oe) => oe.getTime(), (oe, de) => {
        var ge = K9(), te = ce(ge), ae = Q(te);
        {
          var ye = (ve) => {
            var $ = qe(), pe = ce($);
            {
              var Ae = (fe) => {
                var me = J9();
                ft(me, "", {}, { "font-size": "var(--plot-font-size-axis, 11px)" });
                var Ie = he(me);
                Y(
                  (Ve, Ne) => {
                    l(me, "x", Ve), l(me, "y", r(s) + a + 12), l(me, "text-anchor", r(v)), Ke(Ie, Ne);
                  },
                  [
                    () => e.xScale(r(de)) + r(k),
                    () => r(I)(r(de))
                  ]
                ), T(fe, me);
              }, L = /* @__PURE__ */ u(() => r(i).tickformat_p.startsWith("%H:%M")), se = (fe) => {
                var me = Q9();
                ft(me, "", {}, { "font-size": "var(--plot-font-size-axis, 11px)" });
                var Ie = he(me);
                Y(
                  (Ve, Ne) => {
                    l(me, "x", Ve), l(me, "y", r(s) + a + 12), l(me, "text-anchor", r(v)), Ke(Ie, Ne);
                  },
                  [
                    () => e.xScale(r(de)) + r(k),
                    () => r(I)(r(de))
                  ]
                ), Ft("click", me, () => {
                  X(r(de));
                }), Ft("keydown", me, (Ve) => {
                  (Ve.key === "Enter" || Ve.key === " ") && (Ve.preventDefault(), X(r(de)));
                }), T(fe, me);
              };
              we(pe, (fe) => {
                r(L) ? fe(Ae) : fe(se, -1);
              });
            }
            T(ve, $);
          };
          we(ae, (ve) => {
            e.subplot.xaxis_annotation_visible !== !1 && r(i).visibility_annot_p == "visible" && ve(ye);
          });
        }
        Y(
          (ve, $) => {
            l(te, "x1", ve), l(te, "x2", $), l(te, "y1", r(s)), l(te, "y2", r(s) + a);
          },
          [
            () => e.xScale(r(de)),
            () => e.xScale(r(de))
          ]
        ), T(oe, ge);
      });
      var ue = Q(ie);
      Xe(ue, 17, () => r(y), (oe) => oe.getTime(), (oe, de) => {
        var ge = qe(), te = ce(ge);
        {
          var ae = (ve) => {
            var $ = em(), pe = ce($);
            {
              var Ae = (fe) => {
                var me = $9();
                Y(
                  (Ie, Ve) => {
                    l(me, "x1", Ie), l(me, "x2", Ve), l(me, "y1", r(s) + r(S)), l(me, "y2", r(s) + n);
                  },
                  [
                    () => e.xScale(r(de)),
                    () => e.xScale(r(de))
                  ]
                ), T(fe, me);
              };
              we(pe, (fe) => {
                r(H) && fe(Ae);
              });
            }
            var L = Q(pe);
            ft(L, "", {}, { "font-size": "var(--plot-font-size-axis, 11px)" });
            var se = he(L);
            Y(
              (fe, me) => {
                l(L, "x", fe), l(L, "y", r(s) + a + 24), Ke(se, me);
              },
              [
                () => e.xScale(r(de)) + 8,
                () => r(B)(r(de))
              ]
            ), Ft("click", L, () => {
              G(r(de));
            }), Ft("keydown", L, (fe) => {
              (fe.key === "Enter" || fe.key === " ") && (fe.preventDefault(), G(r(de)));
            }), T(ve, $);
          }, ye = (ve) => {
            var $ = tm();
            Y(
              (pe, Ae) => {
                l($, "x1", pe), l($, "x2", Ae), l($, "y1", r(s)), l($, "y2", r(s) + n / 2);
              },
              [
                () => e.xScale(r(de)),
                () => e.xScale(r(de))
              ]
            ), T(ve, $);
          };
          we(te, (ve) => {
            e.subplot.xaxis_annotation_visible !== !1 ? ve(ae) : r(H) && ve(ye, 1);
          });
        }
        T(oe, ge);
      }), T(ee, ne);
    };
    we(A, (ee) => {
      e.subplot.xaxis_ticks_visible !== !1 && ee(Z);
    });
  }
  Y(() => {
    l(C, "x1", r(b)), l(C, "x2", r(m)), l(C, "y1", r(s)), l(C, "y2", r(s));
  }), T(t, q), ct();
}
ur(["click", "keydown"]);
var im = /* @__PURE__ */ U('<defs><linearGradient id="nowindicatorgradient"><stop offset="0%" stop-color="#999" stop-opacity="20%"></stop><stop offset="100%" stop-color="white" stop-opacity="0%"></stop></linearGradient></defs><g class="nowbar"><line stroke="#79b" stroke-opacity="50%" stroke-width="1px"></line><rect width="50" fill="url(#nowindicatorgradient)" stroke="none"></rect></g>', 1);
function cm(t, e) {
  it(e, !0);
  const a = function(g) {
    return new Date(Math.round((/* @__PURE__ */ new Date()).getTime() / g) * g);
  }, n = 1e3;
  let i = /* @__PURE__ */ Me(bt(a(n)));
  xn(() => {
    const g = setInterval(
      () => {
        re(i, a(n), !0);
      },
      n
    );
    return () => {
      clearInterval(g);
    };
  });
  let c = /* @__PURE__ */ u(() => e.xScale(r(i))), o = /* @__PURE__ */ u(() => e.yScale.range()), s = /* @__PURE__ */ u(() => vr(r(o), 2)), f = /* @__PURE__ */ u(() => r(s)[0]), d = /* @__PURE__ */ u(() => r(s)[1]);
  var h = im(), b = Q(ce(h)), m = he(b), p = Q(m);
  Y(() => {
    l(m, "x1", r(c)), l(m, "x2", r(c)), l(m, "y1", r(f)), l(m, "y2", r(d)), l(p, "x", r(c)), l(p, "y", r(d)), l(p, "height", r(f) - r(d));
  }), T(t, h), ct();
}
const ul = function(t, ...e) {
  return e.reduce(
    (a, n) => a && typeof a == "object" ? a[n] : void 0,
    t
  );
};
var om = /* @__PURE__ */ U(`<text dominant-baseline="hanging" text-anchor="begin" font-family="-apple-system, 'Helvetica Neue', sans-serif" font-weight="600" class="svelte-wdjju6"> </text>`), sm = /* @__PURE__ */ U(`<text dominant-baseline="hanging" text-anchor="begin" font-family="-apple-system, 'Helvetica Neue', sans-serif" font-weight="600" class="fill-black dark:fill-white svelte-wdjju6"> </text>`), fm = /* @__PURE__ */ U('<g class="framelabel"><!></g>');
function lm(t, e) {
  it(e, !0);
  let a = /* @__PURE__ */ u(() => e.xScale.range()[0]), n = /* @__PURE__ */ u(() => e.yScale.range()[1]), i = /* @__PURE__ */ u(() => ul(e.subplot, "title_text_style", "text_color")), c = /* @__PURE__ */ u(() => ul(e.subplot, "title_text_style", "drop_shadow") || ""), o = /* @__PURE__ */ u(() => r(c) ? "url(#dropShadowBlack)" : "");
  var s = fm(), f = he(s);
  {
    var d = (b) => {
      var m = om();
      ft(m, "", {}, { "font-size": "var(--plot-font-size-title, 9pt)" });
      var p = he(m);
      Y(() => {
        l(m, "x", r(a) + 10), l(m, "y", r(n) + 6), l(m, "fill", r(i)), l(m, "filter", r(o)), Ke(p, e.subplot.title);
      }), T(b, m);
    }, h = (b) => {
      var m = sm();
      ft(m, "", {}, { "font-size": "var(--plot-font-size-title, 9pt)" });
      var p = he(m);
      Y(() => {
        l(m, "x", r(a) + 10), l(m, "y", r(n) + 6), l(m, "filter", r(o)), Ke(p, e.subplot.title);
      }), T(b, m);
    };
    we(f, (b) => {
      r(i) ? b(d) : b(h, -1);
    });
  }
  T(t, s), ct();
}
const c1 = Symbol("timeseries-context");
function dm(t) {
  Y1(c1, t);
}
function ma() {
  const t = V1(c1);
  if (!t)
    throw new Error(
      "getTimeseriesContext() must be called within a TimeseriesPane Panel component tree. Ensure your layer component is a descendant of Panel."
    );
  return t;
}
var um = /* @__PURE__ */ U('<path d="M 10 0 L -6 0 M -6 0 L 2 -8 M -6 0 L 2 8" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>'), hm = /* @__PURE__ */ U('<path d="M -10 0 L 6 0 M 6 0 L -2 -8 M 6 0 L -2 8" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>'), bm = /* @__PURE__ */ U("<g><!></g>"), mm = /* @__PURE__ */ U('<g transform="translate(-75, 0)"><circle cx="0" cy="-2" r="7" stroke="white" stroke-width="2" fill="none"></circle><line x1="5" y1="3" x2="10" y2="8" stroke="white" stroke-width="2" stroke-linecap="round"></line><line x1="-3" y1="-2" x2="3" y2="-2" stroke="white" stroke-width="1.5" stroke-linecap="round"></line><line x1="0" y1="-5" x2="0" y2="1" stroke="white" stroke-width="1.5" stroke-linecap="round"></line></g>'), pm = /* @__PURE__ */ U('<g transform="translate(-75, 0)"><circle cx="0" cy="0" r="9" stroke="white" stroke-width="2" fill="none"></circle><text x="0" y="4" text-anchor="middle" fill="white" font-size="12" font-weight="bold">i</text></g>'), gm = /* @__PURE__ */ U('<g><rect class="indicator-background svelte-1nga5fv"></rect><!><text y="5" text-anchor="middle" fill="white" font-size="12" font-family="system-ui, -apple-system, sans-serif" font-weight="500"> </text></g>');
function ym(t, e) {
  it(e, !0);
  const a = ma();
  let n = /* @__PURE__ */ u(() => (e.xScale.range()[0] + e.xScale.range()[1]) / 2), i = /* @__PURE__ */ u(() => (e.yScale.range()[0] + e.yScale.range()[1]) / 2), c = /* @__PURE__ */ u(() => {
    const I = (e.subplot.visualisation_layers || []).filter((q) => q.visible !== !1);
    let x = 0, w = 0, y = 0, H = 0, B = !1, V = null, X = null;
    for (const q of I) {
      const E = q.source;
      if (!E) continue;
      const _ = Ia(E, q.id);
      if (!_) continue;
      x++;
      const C = a.getViewportData(_);
      if (C) {
        if (C.status === "complete" || C.status === "partial")
          C.records.length > 0 && (B = !0);
        else if (C.status === "throttled")
          w++, C.throttleInfo && (V = `Too many records: ${C.throttleInfo.expectedRecords?.toLocaleString() ?? "?"} expected, max ${C.throttleInfo.maxRecords?.toLocaleString() ?? "?"} allowed`);
        else if (C.status === "no data") {
          let A = null;
          E.type === "hapi_data" ? A = xt.checkDataAvailability(E.server, E.dataset, C.timeRange) : E.type === "zarr_variable" && (A = g(E.url, E.variables, { start: a.timeDomain.start, end: a.timeDomain.end })), A && !A.isAvailable && (A.panDirection === "past" ? y++ : A.panDirection === "future" && H++, V = A.reason ?? null, A.availableStart && A.availableEnd && (X = {
            hasOverlap: !1,
            panDirection: A.panDirection ?? null,
            availableStart: A.availableStart,
            availableEnd: A.availableEnd,
            reason: V
          }));
        }
      }
    }
    return x === 0 ? null : w === x && !B ? { type: "throttled", reason: V, availability: X } : y + H === x && !B ? y === x ? { type: "pan", direction: "past", reason: V, availability: X } : H === x ? { type: "pan", direction: "future", reason: V, availability: X } : {
      type: "no-data",
      reason: "No data in current time range",
      availability: X
    } : null;
  }), o = /* @__PURE__ */ u(() => r(c) !== null), s = /* @__PURE__ */ u(() => r(c)?.type === "pan"), f = /* @__PURE__ */ u(() => r(c)?.type === "throttled"), d = /* @__PURE__ */ u(() => r(c)?.type === "no-data"), h = /* @__PURE__ */ u(() => r(c)?.type === "pan" ? r(c).direction : null), b = /* @__PURE__ */ u(() => r(s) || r(f)), m = /* @__PURE__ */ u(() => r(c) ? r(c).type === "throttled" ? "Zoom in to show data" : r(c).type === "pan" ? r(c).direction === "past" ? "Pan left to view data" : "Pan right to view data" : r(c).type === "no-data" ? "No data in view" : "" : "");
  function p() {
    if (!r(c)) return;
    const I = a.timeDomain.start, w = a.timeDomain.end.getTime() - I.getTime();
    if (r(c).type === "pan" && r(c).availability) {
      const { availableStart: y, availableEnd: H } = r(c).availability;
      if (r(c).direction === "past" && H) {
        const B = w * 0.1, V = new Date(H.getTime() + B), X = new Date(V.getTime() - w);
        a.setTimeDomain(X, V);
      } else if (r(c).direction === "future" && y) {
        const B = w * 0.1, V = new Date(y.getTime() - B), X = new Date(V.getTime() + w);
        a.setTimeDomain(V, X);
      }
    } else if (r(c).type === "throttled") {
      const y = I.getTime() + w / 2, H = w / 4, B = new Date(y - H / 2), V = new Date(y + H / 2);
      a.setTimeDomain(B, V);
    }
  }
  function g(I, x, w) {
    if (!w?.start || !w?.end) return { isAvailable: !0 };
    const y = v5.getMetadata(I, x[0]);
    if (!y?.timeStart || !y?.timeEnd) return { isAvailable: !0 };
    const H = y.timeStart, B = y.timeEnd;
    if (w.start < B && w.end > H) return { isAvailable: !0, availableStart: H, availableEnd: B };
    const X = w.end <= H ? "future" : "past", G = (E) => E.toISOString().replace("T", " ").replace(/\.\d{3}Z$/, " UTC"), q = X === "future" ? `Data starts at ${G(H)}. Pan right (future) to view.` : `Data ends at ${G(B)}. Pan left (past) to view.`;
    return {
      isAvailable: !1,
      panDirection: X,
      availableStart: H,
      availableEnd: B,
      reason: q
    };
  }
  function v(I) {
    (I.key === "Enter" || I.key === " ") && (I.preventDefault(), p());
  }
  var k = qe(), S = ce(k);
  {
    var N = (I) => {
      var x = gm();
      let w;
      var y = he(x);
      l(y, "x", -100), l(y, "y", -18), l(y, "width", 200), l(y, "height", 36), l(y, "rx", 18);
      var H = Q(y);
      {
        var B = (E) => {
          var _ = bm(), C = he(_);
          {
            var A = (ee) => {
              var ne = um();
              T(ee, ne);
            }, Z = (ee) => {
              var ne = hm();
              T(ee, ne);
            };
            we(C, (ee) => {
              r(h) === "past" ? ee(A) : ee(Z, -1);
            });
          }
          Y(() => l(_, "transform", `translate(${r(h) === "past" ? -75 : 75}, 0)`)), T(E, _);
        }, V = (E) => {
          var _ = mm();
          T(E, _);
        }, X = (E) => {
          var _ = pm();
          T(E, _);
        };
        we(H, (E) => {
          r(s) && r(h) ? E(B) : r(f) ? E(V, 1) : r(d) && E(X, 2);
        });
      }
      var G = Q(H), q = he(G);
      Y(() => {
        w = kn(x, 0, "data-status-indicator svelte-1nga5fv", null, w, { clickable: r(b) }), l(x, "transform", `translate(${r(n) ?? ""}, ${r(i) ?? ""})`), l(x, "role", r(b) ? "button" : void 0), l(x, "tabindex", r(b) ? 0 : void 0), l(G, "x", r(s) && r(h) === "past" ? 10 : r(s) ? -10 : 0), Ke(q, r(m));
      }), Ft("click", x, function(...E) {
        (r(b) ? p : void 0)?.apply(this, E);
      }), Ft("keydown", x, function(...E) {
        (r(b) ? v : void 0)?.apply(this, E);
      }), Er(1, x, () => Rr, () => ({ duration: 200 })), Er(2, x, () => Rr, () => ({ duration: 150 })), T(I, x);
    };
    we(S, (I) => {
      r(o) && I(N);
    });
  }
  T(t, k), ct();
}
ur(["click", "keydown"]);
function o1(t) {
  return typeof t == "object" && t !== null && "parameter" in t;
}
function wt(t) {
  if (typeof t == "string") return t;
  if (o1(t)) return t.parameter;
}
function vm(t) {
  const e = /* @__PURE__ */ new Map(), a = [
    "value",
    "baseline",
    "wiggle",
    "x",
    "y",
    "z",
    "latitude",
    "longitude",
    "radius",
    "altitude",
    "vx",
    "vy",
    "vz",
    "north_component",
    "east_component",
    "down_component",
    "colormap_value",
    "text",
    "label",
    "image_url",
    "stop_time",
    "start",
    "end",
    "anchor",
    "color_map_key",
    "y_map_key",
    "text_pane_content"
  ];
  for (const n of a) {
    const i = t[n];
    i && (typeof i == "string" ? e.set(n, {
      paramName: i,
      multiplier: 1,
      offset: 0,
      removeMean: !1
    }) : o1(i) && e.set(n, {
      paramName: i.parameter,
      componentIndex: i.index,
      multiplier: i.multiplier ?? 1,
      offset: i.offset ?? 0,
      removeMean: i.remove_mean ?? !1
    }));
  }
  return e;
}
function Ac(t) {
  const { parameterMapping: e, scaleType: a, logMinValue: n = 1e-30 } = t, i = a === "log10", c = vm(e);
  let o = null;
  function s(m, p) {
    const g = c.get(p);
    if (!g) return null;
    const v = m[g.paramName];
    return g.componentIndex !== void 0 && Array.isArray(v) ? v[g.componentIndex] ?? null : v ?? null;
  }
  function f(m) {
    return m == null ? !1 : typeof m == "number" ? !isNaN(m) : typeof m == "string" ? m.length > 0 : m instanceof Date ? !isNaN(m.getTime()) : !0;
  }
  function d(m, p, g = 0) {
    const v = c.get(p);
    if (!v) return m;
    let k = m;
    return v.removeMean && (k = k - g), k = k * v.multiplier + v.offset, i && k <= 0 && (k = n), k;
  }
  function h(m, p) {
    const g = s(m, p);
    if (g === null || typeof g != "number")
      return {
        value: NaN,
        isValid: f(g),
        rawValue: typeof g == "number" ? g : null
      };
    if (isNaN(g))
      return { value: NaN, isValid: !1, rawValue: g };
    const k = c.get(p)?.removeMean && o ? o.get(p) ?? 0 : 0;
    return {
      value: d(g, p, k),
      isValid: !0,
      rawValue: g
    };
  }
  function b(m, p) {
    if (!m.length) return 0;
    let g = 0, v = 0;
    for (const S of m) {
      const N = s(S, p);
      typeof N == "number" && !isNaN(N) && (g += N, v++);
    }
    const k = v > 0 ? g / v : 0;
    return o || (o = /* @__PURE__ */ new Map()), o.set(p, k), k;
  }
  return {
    get: h,
    getValue(m) {
      return h(m, "value");
    },
    getBaseline(m) {
      return h(m, "baseline");
    },
    getWiggle(m) {
      return h(m, "wiggle");
    },
    getX(m) {
      return h(m, "x");
    },
    getY(m) {
      return h(m, "y");
    },
    getLatLon(m) {
      const p = h(m, "latitude"), g = h(m, "longitude");
      return !p.isValid || !g.isValid ? null : { lat: p.value, lon: g.value };
    },
    getNorthEast(m) {
      const p = h(m, "north_component"), g = h(m, "east_component");
      return !p.isValid || !g.isValid ? null : { north: p.value, east: g.value };
    },
    isValid(m, p) {
      const g = s(m, p);
      return f(g);
    },
    hasValidData(m, p) {
      for (const g of p)
        if (!this.isValid(m, g))
          return !1;
      return !0;
    },
    getRaw(m, p) {
      return s(m, p);
    },
    computeMean: b
  };
}
function hl(t) {
  return t.replace(/\.\d+Z$/, "Z");
}
function Li(t) {
  if (t instanceof Date) {
    const e = t.toISOString();
    return hl(e);
  }
  return typeof t == "string" && t.includes("T") && t.endsWith("Z") ? hl(t) : t;
}
function _m(t, e) {
  const { parameter: a, component_index: n, operator: i, value: c } = t, o = Ca(c) ? aa(c, e) : c;
  return (s) => {
    let f = s[a];
    if (n !== void 0 && Array.isArray(f) && (f = f[n]), f == null || o == null)
      return !1;
    switch (i) {
      case "equals": {
        const d = Li(f), h = Li(o);
        return d === h;
      }
      case "not_equals":
        return Li(f) !== Li(o);
      case "gt":
        return typeof f == "number" && typeof o == "number" && f > o;
      case "gte":
        return typeof f == "number" && typeof o == "number" && f >= o;
      case "lt":
        return typeof f == "number" && typeof o == "number" && f < o;
      case "lte":
        return typeof f == "number" && typeof o == "number" && f <= o;
      case "in":
        return Array.isArray(o) && o.includes(f);
      case "not_in":
        return Array.isArray(o) && !o.includes(f);
      default:
        return !0;
    }
  };
}
function Br(t, e, a) {
  if (!e || !t.length)
    return t;
  const n = _m(e, a);
  return t.filter(n);
}
var wm = /* @__PURE__ */ U('<path stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke"></path>'), xm = /* @__PURE__ */ U('<path stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke"></path>'), km = /* @__PURE__ */ U('<g><title> </title><path stroke="none" vector-effect="non-scaling-stroke"></path><!><!></g>');
function Sm(t, e) {
  it(e, !0);
  const a = ma();
  let n = /* @__PURE__ */ u(() => aa(e.layer.style, a.drivers)), i = /* @__PURE__ */ u(() => qa(r(n)?.fill, a.drivers, "#ccc")), c = /* @__PURE__ */ u(() => qa(r(n)?.stroke, a.drivers, "#333")), o = /* @__PURE__ */ u(() => qa(r(n)?.baseline_stroke, a.drivers, "#333")), s = /* @__PURE__ */ u(() => Ia(e.layer.source, e.layer.id)), f = /* @__PURE__ */ u(() => r(s) ? a.getViewportData(r(s)) : void 0), d = /* @__PURE__ */ u(() => r(f)?.records ?? []), h = /* @__PURE__ */ u(() => Br(r(d), e.layer.filter, a.drivers)), b = /* @__PURE__ */ u(() => Ac({
    parameterMapping: e.layer.parameter_mapping,
    scaleType: e.scale_type
  })), m = /* @__PURE__ */ u(() => wt(e.layer.parameter_mapping?.value) ?? "value");
  const p = {
    "": fa,
    linear: fa,
    step: Ds,
    step_after: Cs,
    step_before: As,
    natural: Ts
  };
  let g = /* @__PURE__ */ u(() => p[r(n)?.curve_type ?? ""] ?? fa);
  const v = (q) => !(!r(b).isValid(q, "value") || r(n)?.baseline_mode === "parameter" && !r(b).isValid(q, "baseline")), k = (q) => {
    const E = r(n)?.baseline_mode;
    if (E === "mirror_zero_x") {
      const _ = r(b).getValue(q);
      return _.isValid ? -_.value : 0;
    } else {
      if (E === "constant")
        return r(n)?.baseline ?? 0;
      if (E === "parameter") {
        const _ = r(b).getBaseline(q);
        return _.isValid ? _.value : 0;
      }
    }
    return e.scale_type === "log10" ? 1e-20 : 0;
  };
  let S = /* @__PURE__ */ u(() => r(h)?.length ? n1().defined(v).curve(r(g)).x((q) => e.xScale(q.time)).y0((q) => e.yScale(k(q))).y1((q) => e.yScale(r(b).getValue(q).value))(r(h)) ?? "" : ""), N = /* @__PURE__ */ u(() => !r(h)?.length || r(n)?.stroke === "none" ? "" : vn().defined(v).curve(r(g)).x((q) => e.xScale(q.time)).y((q) => e.yScale(r(b).getValue(q).value))(r(h)) ?? ""), I = /* @__PURE__ */ u(() => {
    if (!r(h)?.length) return "";
    const q = r(n)?.baseline_mode;
    return q !== "mirror_zero_x" && q !== "parameter" ? "" : vn().defined(v).curve(r(g)).x((E) => e.xScale(E.time)).y((E) => e.yScale(k(E)))(r(h)) ?? "";
  });
  var x = km(), w = he(x), y = he(w), H = Q(w), B = Q(H);
  {
    var V = (q) => {
      var E = wm();
      Y(
        (_) => {
          l(E, "d", r(N)), l(E, "stroke", _), l(E, "stroke-width", r(n)?.stroke_width ?? 1), l(E, "stroke-opacity", r(n)?.stroke_opacity ?? 1);
        },
        [
          () => ai(e.instanceContext, "stroke") ? e.instanceContext.color : r(c)
        ]
      ), T(q, E);
    };
    we(B, (q) => {
      r(N) && q(V);
    });
  }
  var X = Q(B);
  {
    var G = (q) => {
      var E = xm();
      Y(() => {
        l(E, "d", r(I)), l(E, "stroke", r(o)), l(E, "stroke-width", r(n)?.baseline_stroke_width ?? 1), l(E, "stroke-opacity", r(n)?.baseline_stroke_opacity ?? 1);
      }), T(q, E);
    };
    we(X, (q) => {
      r(I) && q(G);
    });
  }
  Y(
    (q, E) => {
      Ke(y, `${e.layer.title ?? ""} [${q ?? ""} / ${r(m) ?? ""}]`), l(H, "d", r(S)), l(H, "fill", E), l(H, "fill-opacity", r(n)?.fill_opacity ?? 1);
    },
    [
      () => Mn(e.layer.source),
      () => ai(e.instanceContext, "fill") ? e.instanceContext.color : r(i)
    ]
  ), T(t, x), ct();
}
var Mm = /* @__PURE__ */ U('<path stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke"></path>'), Tm = /* @__PURE__ */ U("<g><title> </title><!></g>");
function Dm(t, e) {
  it(e, !0);
  const a = ma();
  let n = /* @__PURE__ */ u(() => aa(e.layer.style, a.drivers)), i = /* @__PURE__ */ u(() => qa(r(n)?.stroke, a.drivers, "#333")), c = /* @__PURE__ */ u(() => Ia(e.layer.source, e.layer.id)), o = /* @__PURE__ */ u(() => r(c) ? a.getViewportData(r(c)) : void 0), s = /* @__PURE__ */ u(() => r(o)?.records ?? []), f = /* @__PURE__ */ u(() => Br(r(s), e.layer.filter, a.drivers)), d = /* @__PURE__ */ u(() => wt(e.layer.parameter_mapping?.value) ?? "value"), h = /* @__PURE__ */ u(() => {
    const x = e.layer.parameter_mapping?.value;
    return typeof x == "object" && x !== null && "remove_mean" in x ? x.remove_mean ?? !1 : !1;
  }), b = /* @__PURE__ */ u(() => Ac({
    parameterMapping: e.layer.parameter_mapping,
    scaleType: e.scale_type
  }));
  const m = {
    "": fa,
    linear: fa,
    step: Ds,
    step_after: Cs,
    step_before: As,
    natural: Ts
  };
  let p = /* @__PURE__ */ u(() => m[r(n)?.curve_type ?? ""] ?? fa), g = /* @__PURE__ */ u(() => r(f)?.length ? (r(h) && r(b).computeMean(r(f), "value"), vn().defined((x) => r(b).getValue(x).isValid).curve(r(p)).x((x) => e.xScale(x.time)).y((x) => e.yScale(r(b).getValue(x).value))(r(f)) ?? "") : "");
  var v = Tm(), k = he(v), S = he(k), N = Q(k);
  {
    var I = (x) => {
      var w = Mm();
      Y(
        (y) => {
          l(w, "d", r(g)), l(w, "stroke", y), l(w, "stroke-width", r(n)?.stroke_width ?? 1), l(w, "stroke-opacity", r(n)?.stroke_opacity ?? 1);
        },
        [
          () => ai(e.instanceContext, "stroke") ? e.instanceContext.color : r(i)
        ]
      ), T(x, w);
    };
    we(N, (x) => {
      r(g) && x(I);
    });
  }
  Y((x) => Ke(S, `${e.layer.title ?? ""} [${x ?? ""} / ${r(d) ?? ""}]`), [() => Mn(e.layer.source)]), T(t, v), ct();
}
var Am = /* @__PURE__ */ U('<path stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke"></path>'), Cm = /* @__PURE__ */ U('<path stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke"></path>'), Pm = /* @__PURE__ */ U('<g><title> </title><path stroke="none" vector-effect="non-scaling-stroke"></path><!><!></g>');
function Em(t, e) {
  it(e, !0);
  const a = ma();
  let n = /* @__PURE__ */ u(() => aa(e.layer.style, a.drivers)), i = /* @__PURE__ */ u(() => qa(r(n)?.fill, a.drivers, "#ccc")), c = /* @__PURE__ */ u(() => qa(r(n)?.stroke, a.drivers, "#333")), o = /* @__PURE__ */ u(() => qa(r(n)?.baseline_stroke, a.drivers, "#333")), s = /* @__PURE__ */ u(() => Ia(e.layer.source, e.layer.id)), f = /* @__PURE__ */ u(() => r(s) ? a.getViewportData(r(s)) : void 0), d = /* @__PURE__ */ u(() => r(f)?.records ?? []), h = /* @__PURE__ */ u(() => Br(r(d), e.layer.filter, a.drivers)), b = /* @__PURE__ */ u(() => Ac({
    parameterMapping: e.layer.parameter_mapping,
    scaleType: e.scale_type
  })), m = /* @__PURE__ */ u(() => wt(e.layer.parameter_mapping?.value) ?? "value"), p = /* @__PURE__ */ u(() => r(n)?.wiggle_scale ?? 1), g = /* @__PURE__ */ u(() => r(n)?.filter_ascending_descending ?? "all");
  const v = {
    "": fa,
    linear: fa,
    step: Ds,
    step_after: Cs,
    step_before: As,
    natural: Ts
  };
  let k = /* @__PURE__ */ u(() => v[r(n)?.curve_type ?? ""] ?? fa), S = /* @__PURE__ */ u(() => {
    if (r(
      g
      // null means all valid
    ) === "all" || !r(h)?.length) return null;
    const _ = /* @__PURE__ */ new Set();
    for (let C = 0; C < r(h).length; C++) {
      if (C === r(h).length - 1) {
        r(g) === "ascending" && _.add(C);
        continue;
      }
      const A = r(b).getRaw(r(h)[C], "value"), Z = r(b).getRaw(r(h)[C + 1], "value");
      if (typeof A != "number" || isNaN(A) || typeof Z != "number" || isNaN(Z)) continue;
      const ee = Z > A;
      (r(g) === "ascending" ? ee : !ee) && _.add(C);
    }
    return _;
  });
  const N = (_, C) => !(!r(b).isValid(_, "value") || !r(b).isValid(_, "wiggle") || r(S) !== null && !r(S).has(C));
  let I = /* @__PURE__ */ u(() => r(h)?.length ? vn().defined((_, C) => N(_, C)).curve(r(k)).x((_) => e.xScale(_.time)).y((_) => e.yScale(r(b).getValue(_).value))(r(h)) ?? "" : ""), x = /* @__PURE__ */ u(() => r(h)?.length ? vn().defined((_, C) => N(_, C)).curve(r(k)).x((_) => e.xScale(_.time) + r(b).getWiggle(_).value * r(p)).y((_) => e.yScale(r(b).getValue(_).value))(r(h)) ?? "" : ""), w = /* @__PURE__ */ u(() => r(h)?.length ? n1().defined((_, C) => N(_, C)).curve(r(k)).x0((_) => e.xScale(_.time)).x1((_) => e.xScale(_.time) + r(b).getWiggle(_).value * r(p)).y((_) => e.yScale(r(b).getValue(_).value))(r(h)) ?? "" : "");
  var y = Pm(), H = he(y), B = he(H), V = Q(H), X = Q(V);
  {
    var G = (_) => {
      var C = Am();
      Y(() => {
        l(C, "d", r(I)), l(C, "stroke", r(o)), l(C, "stroke-width", r(n)?.baseline_stroke_width ?? 1), l(C, "stroke-opacity", r(n)?.baseline_stroke_opacity ?? 1);
      }), T(_, C);
    };
    we(X, (_) => {
      r(I) && (r(n)?.baseline_stroke_width ?? 0) > 0 && _(G);
    });
  }
  var q = Q(X);
  {
    var E = (_) => {
      var C = Cm();
      Y(
        (A) => {
          l(C, "d", r(x)), l(C, "stroke", A), l(C, "stroke-width", r(n)?.stroke_width ?? 1), l(C, "stroke-opacity", r(n)?.stroke_opacity ?? 1);
        },
        [
          () => ai(e.instanceContext, "stroke") ? e.instanceContext.color : r(c)
        ]
      ), T(_, C);
    };
    we(q, (_) => {
      r(x) && _(E);
    });
  }
  Y(
    (_, C) => {
      Ke(B, `${e.layer.title ?? ""} [${_ ?? ""} / ${r(m) ?? ""}]`), l(V, "d", r(w)), l(V, "fill", C), l(V, "fill-opacity", r(n)?.fill_opacity ?? 0.5);
    },
    [
      () => Mn(e.layer.source),
      () => ai(e.instanceContext, "fill") ? e.instanceContext.color : r(i)
    ]
  ), T(t, y), ct();
}
var Im = /* @__PURE__ */ U('<text text-anchor="middle"> </text>'), Nm = /* @__PURE__ */ U('<rect vector-effect="non-scaling-stroke"><title> </title></rect><!>', 1);
function Lm(t, e) {
  it(e, !0);
  const a = ma();
  let n = /* @__PURE__ */ u(() => aa(e.layer.style, a.drivers)), i = /* @__PURE__ */ u(() => Ia(e.layer.source, e.layer.id)), c = /* @__PURE__ */ u(() => r(i) ? a.getViewportData(r(i)) : void 0), o = /* @__PURE__ */ u(() => r(c)?.records ?? []), s = /* @__PURE__ */ u(() => Br(r(o), e.layer.filter, a.drivers)), f = /* @__PURE__ */ u(() => Ac({
    parameterMapping: e.layer.parameter_mapping
    // BarPlot doesn't use log scale transform - bars are always linear from 0
  })), d = /* @__PURE__ */ u(() => wt(e.layer.parameter_mapping?.value) ?? "value"), h = /* @__PURE__ */ u(() => r(c)?.cadence_ms ?? 10800 * 1e3), b = /* @__PURE__ */ u(() => e.xScale(r(h)) - e.xScale(0)), m = /* @__PURE__ */ u(() => r(n)?.bar_padding ?? 0.1), p = /* @__PURE__ */ u(() => 0.5 * r(m) * r(b)), g = /* @__PURE__ */ u(() => r(b) * (1 - r(m))), v = /* @__PURE__ */ u(() => qa(r(n)?.fill, a.drivers, "#888")), k = /* @__PURE__ */ u(() => qa(r(n)?.stroke, a.drivers, "#444"));
  const S = function(B) {
    const V = r(n)?.fill_colors;
    if (V)
      for (let X = 0; X < V.length; X++) {
        const G = V[X];
        if (B < G.threshold)
          return G.color;
      }
    return r(v);
  }, N = function(B) {
    const V = r(n)?.stroke_colors;
    if (V)
      for (let X = 0; X < V.length; X++) {
        const G = V[X];
        if (B < G.threshold)
          return G.color;
      }
    return r(k);
  };
  function I(B) {
    let V = Math.trunc(B), X = B - V;
    if (X < 0.1)
      return V.toFixed(0);
    if (X > 0.2 && X < 0.4)
      return V.toFixed(0) + "+";
    if (X > 0.6 && X < 0.9)
      return (V + 1).toFixed(0) + "-";
  }
  function x(B, V) {
    return B > 7 ? V(B) + 15 : V(B) - 4;
  }
  function w(B) {
    return B <= 7 ? "bartext fill-black dark:fill-white" : "bartext fill-white dark:fill-white";
  }
  var y = qe(), H = ce(y);
  Xe(H, 17, () => r(s), (B) => B.time, (B, V) => {
    const X = /* @__PURE__ */ u(() => r(f).getValue(r(V)));
    var G = qe(), q = ce(G);
    {
      var E = (_) => {
        const C = /* @__PURE__ */ u(() => r(X).value);
        var A = Nm(), Z = ce(A), ee = he(Z), ne = he(ee), ie = Q(Z);
        {
          var ue = (oe) => {
            var de = Im(), ge = he(de);
            Y(
              (te, ae, ye, ve) => {
                l(de, "x", te), l(de, "y", ae), kn(de, 0, ye, "svelte-u2u0se"), Ke(ge, ve);
              },
              [
                () => e.xScale(new Date(r(V).time)) + 0.5 * r(b),
                () => x(r(C), e.yScale),
                () => Nh(w(r(C))),
                () => I(r(C))
              ]
            ), T(oe, de);
          };
          we(ie, (oe) => {
            r(b) > 35 && r(n)?.bar_text && oe(ue);
          });
        }
        Y(
          (oe, de, ge, te, ae, ye) => {
            l(Z, "x", oe), l(Z, "y", de), l(Z, "width", r(g)), l(Z, "height", ge), l(Z, "fill", te), l(Z, "fill-opacity", r(n)?.fill_opacity ?? 1), l(Z, "stroke", ae), l(Z, "stroke-opacity", r(n)?.stroke_opacity ?? 1), l(Z, "stroke-width", r(n)?.stroke_width ?? 1), Ke(ne, `${e.layer.title ?? ""} [${ye ?? ""} / ${r(d) ?? ""}] Value: ${r(C) ?? ""}`);
          },
          [
            () => e.xScale(new Date(r(V).time)) + r(p),
            () => e.yScale(r(C)),
            () => e.yScale(0) - e.yScale(r(C)),
            () => S(r(C)),
            () => N(r(C)),
            () => Mn(e.layer.source)
          ]
        ), T(_, A);
      };
      we(q, (_) => {
        r(X).isValid && _(E);
      });
    }
    T(B, G);
  }), T(t, y), ct();
}
var Fm = /* @__PURE__ */ U("<line></line>"), Rm = /* @__PURE__ */ U('<text dominant-baseline="middle"> </text>'), Om = /* @__PURE__ */ U('<g class="static-annotation-layer"><title> </title><!><!></g>');
function zm(t, e) {
  it(e, !0);
  let a = /* @__PURE__ */ u(() => e.xScale.range()), n = /* @__PURE__ */ u(() => vr(r(a), 2)), i = /* @__PURE__ */ u(() => r(n)[0]), c = /* @__PURE__ */ u(() => r(n)[1]), o = /* @__PURE__ */ u(() => e.scale_type === "log10");
  function s(q) {
    return r(o) ? Math.pow(10, q) : q;
  }
  let f = /* @__PURE__ */ u(() => e.yScale.domain()), d = /* @__PURE__ */ u(() => vr(r(f), 2)), h = /* @__PURE__ */ u(() => r(d)[0]), b = /* @__PURE__ */ u(() => r(d)[1]), m = /* @__PURE__ */ u(() => (e.layer.horizontal_grid_lines ?? []).filter((q) => {
    const E = s(q);
    return E >= r(h) && E <= r(b);
  })), p = /* @__PURE__ */ u(() => (e.layer.text_labels ?? []).filter((q) => {
    const E = s(q.y);
    return E >= r(h) && E <= r(b);
  })), g = /* @__PURE__ */ u(() => e.layer.style?.stroke ?? "currentColor"), v = /* @__PURE__ */ u(() => e.layer.style?.stroke_width ?? 0.5), k = /* @__PURE__ */ u(() => e.layer.style?.stroke_opacity ?? 0.5), S = /* @__PURE__ */ u(() => e.layer.style?.stroke_dasharray ?? "none"), N = /* @__PURE__ */ u(() => e.layer.style?.font_size ?? 11), I = /* @__PURE__ */ u(() => e.layer.style?.text_color ?? "currentColor"), x = /* @__PURE__ */ u(() => e.layer.style?.text_opacity ?? 1);
  function w(q) {
    const E = q ?? "right_inside";
    return E === "left_outside" ? r(i) - 7 : E === "left_inside" ? r(i) + 7 : E === "center" ? (r(i) + r(c)) / 2 : E === "right_inside" ? r(c) - 7 : r(
      c
      // right_outside
    ) + 7;
  }
  function y(q) {
    const E = q ?? "right_inside";
    return E === "left_outside" ? "end" : E === "left_inside" ? "start" : E === "center" ? "middle" : E === "right_inside" ? "end" : "start";
  }
  var H = Om(), B = he(H), V = he(B), X = Q(B);
  Xe(X, 17, () => r(m), Xi, (q, E) => {
    var _ = Fm();
    Y(
      (C, A) => {
        l(_, "x1", r(i)), l(_, "x2", r(c)), l(_, "y1", C), l(_, "y2", A), l(_, "stroke", r(g)), l(_, "stroke-width", r(v)), l(_, "stroke-opacity", r(k)), l(_, "stroke-dasharray", r(S));
      },
      [
        () => e.yScale(s(r(E))),
        () => e.yScale(s(r(E)))
      ]
    ), T(q, _);
  });
  var G = Q(X);
  Xe(G, 17, () => r(p), Xi, (q, E) => {
    var _ = Rm(), C = he(_);
    Y(
      (A, Z, ee) => {
        l(_, "x", A), l(_, "y", Z), l(_, "font-size", r(N)), l(_, "fill", r(I)), l(_, "fill-opacity", r(x)), l(_, "text-anchor", ee), Ke(C, r(E).text);
      },
      [
        () => w(r(E).align),
        () => e.yScale(s(r(E).y)),
        () => y(r(E).align)
      ]
    ), T(q, _);
  }), Y(() => Ke(V, e.layer.title ?? "Static annotation")), T(t, H), ct();
}
var Um = /* @__PURE__ */ U('<image preserveAspectRatio="none" style="image-rendering: pixelated;"></image>'), Vm = /* @__PURE__ */ U("<g><title> </title><!></g>");
function Ym(t, e) {
  it(e, !0);
  const a = ma();
  let n = /* @__PURE__ */ u(() => e.layer.style), i = /* @__PURE__ */ u(() => Ia(e.layer.source, e.layer.id)), c = /* @__PURE__ */ u(() => r(i) ? a.getViewportData(r(i)) : void 0), o = /* @__PURE__ */ u(() => r(c)?.records ?? []), s = /* @__PURE__ */ u(() => wt(e.layer.parameter_mapping.image_url) ?? "url"), f = /* @__PURE__ */ u(() => wt(e.layer.parameter_mapping.stop_time) ?? "stop_time");
  function d(w) {
    return w instanceof Date ? w : typeof w == "string" ? pt(w) : new Date(w);
  }
  let h = /* @__PURE__ */ u(() => e.yScale.domain()[1]), b = /* @__PURE__ */ u(() => e.yScale.domain()[0]), m = /* @__PURE__ */ u(() => r(n)?.image_y_mapping?.top ?? r(h)), p = /* @__PURE__ */ u(() => r(n)?.image_y_mapping?.bottom ?? r(b)), g = /* @__PURE__ */ u(() => e.yScale(r(m))), v = /* @__PURE__ */ u(() => e.yScale(r(p))), k = /* @__PURE__ */ u(() => r(v) - r(g));
  var S = Vm(), N = he(S), I = he(N), x = Q(N);
  Xe(x, 17, () => r(o), (w) => w.time, (w, y) => {
    const H = /* @__PURE__ */ u(() => r(y)[r(s)]), B = /* @__PURE__ */ u(() => r(y)[r(f)]);
    var V = qe(), X = ce(V);
    {
      var G = (q) => {
        const E = /* @__PURE__ */ u(() => e.xScale(r(y).time)), _ = /* @__PURE__ */ u(() => e.xScale(d(r(B)))), C = /* @__PURE__ */ u(() => r(_) - r(E));
        var A = qe(), Z = ce(A);
        {
          var ee = (ne) => {
            var ie = Um();
            Y(() => {
              l(ie, "href", r(H)), l(ie, "x", r(E)), l(ie, "y", r(g)), l(ie, "width", r(C)), l(ie, "height", r(k));
            }), T(ne, ie);
          };
          we(Z, (ne) => {
            r(C) > 0 && ne(ee);
          });
        }
        T(q, A);
      };
      we(X, (q) => {
        r(H) && r(B) && q(G);
      });
    }
    T(w, V);
  }), Y((w) => Ke(I, `${e.layer.title ?? ""} [${w ?? ""} / ${e.layer.parameter_mapping?.image_url ?? "" ?? ""}]`), [() => Mn(e.layer.source)]), T(t, S), ct();
}
var Hm = /* @__PURE__ */ U("<text> </text>"), Bm = /* @__PURE__ */ U("<g><title> </title><!></g>");
function Wm(t, e) {
  it(e, !0);
  const a = ma();
  let n = /* @__PURE__ */ u(() => e.layer.style), i = /* @__PURE__ */ u(() => Ia(e.layer.source, e.layer.id)), c = /* @__PURE__ */ u(() => r(i) ? a.getViewportData(r(i)) : void 0), o = /* @__PURE__ */ u(() => r(c)?.records ?? []), s = /* @__PURE__ */ u(() => Br(r(o), e.layer.filter, a.drivers)), f = /* @__PURE__ */ u(() => wt(e.layer.parameter_mapping.value) ?? ""), d = /* @__PURE__ */ u(() => wt(e.layer.parameter_mapping.text) ?? ""), h = /* @__PURE__ */ u(() => r(n)?.text_source ?? "text_parameter"), b = /* @__PURE__ */ u(() => r(n)?.vertical_placement ?? "parameter"), m = /* @__PURE__ */ u(() => r(n)?.constant_y ?? 0), p = /* @__PURE__ */ u(() => r(n)?.xshift ?? 0), g = /* @__PURE__ */ u(() => r(n)?.yshift ?? 0), v = /* @__PURE__ */ u(() => r(n)?.sort_by_y ?? "descending"), k = /* @__PURE__ */ u(() => r(n)?.prevent_overlap_x ?? 0), S = /* @__PURE__ */ u(() => r(n)?.prevent_overlap_y ?? 0), N = /* @__PURE__ */ u(() => r(n)?.text_style?.text_rotation ?? 0), I = /* @__PURE__ */ u(() => r(n)?.text_style?.font_size ?? 11), x = /* @__PURE__ */ u(() => r(n)?.text_style?.text_color ?? "auto"), w = /* @__PURE__ */ u(() => r(n)?.text_style?.text_opacity ?? 1), y = /* @__PURE__ */ u(() => r(n)?.text_style?.dominant_baseline ?? "auto"), H = /* @__PURE__ */ u(() => r(n)?.text_style?.text_anchor ?? "middle"), B = /* @__PURE__ */ u(() => r(n)?.number_to_text_format ?? ".2e"), V = /* @__PURE__ */ u(() => r(n)?.convert_exponential_notation ?? !0), X = /* @__PURE__ */ u(() => r(n)?.text_prefix ?? ""), G = /* @__PURE__ */ u(() => r(n)?.text_suffix ?? "");
  const q = {
    "-": "⁻",
    "+": "⁺",
    0: "⁰",
    1: "¹",
    2: "²",
    3: "³",
    4: "⁴",
    5: "⁵",
    6: "⁶",
    7: "⁷",
    8: "⁸",
    9: "⁹"
  }, E = (oe) => {
    const de = oe.split("e");
    if (de.length !== 2) return oe;
    const [ge, te] = de, ae = te.split("").map((ye) => q[ye] ?? ye).join("");
    return ge + "×10" + ae;
  }, _ = (oe) => {
    switch (r(b)) {
      case "constant":
        return e.yScale(r(m));
      case "top":
        return e.yScale.range()[0];
      case // SVG y=0 is top
      "bottom":
        return e.yScale.range()[1];
      case "parameter":
      default:
        return e.yScale(oe[r(f)]);
    }
  }, C = (oe) => {
    let de;
    if (r(h) === "parameter_value") {
      const ge = oe[r(f)];
      de = zr(r(B))(ge), r(V) && de.includes("e") && (de = E(de));
    } else {
      const ge = oe[r(d)];
      typeof ge == "number" ? (de = zr(r(B))(ge), r(V) && de.includes("e") && (de = E(de))) : de = String(ge ?? "");
    }
    return r(X) + de + r(G);
  };
  let A = /* @__PURE__ */ u(() => {
    if (!r(s)?.length) return [];
    let oe = [...r(s)];
    r(v) === "ascending" && r(f) ? oe.sort((ge, te) => ge[r(f)] - te[r(f)]) : r(v) === "descending" && r(f) && oe.sort((ge, te) => te[r(f)] - ge[r(f)]);
    const de = [];
    for (const ge of oe) {
      const te = e.xScale(ge.time), ae = _(ge), ye = C(ge);
      let ve = !0;
      if (r(k) > 0 || r(S) > 0)
        for (const $ of de) {
          const pe = Math.abs(te - $.x), Ae = Math.abs(ae - $.y);
          if (pe < r(k) && Ae < r(S)) {
            ve = !1;
            break;
          }
        }
      ve && de.push({ x: te, y: ae, text: ye, time: ge.time });
    }
    return de;
  }), Z = /* @__PURE__ */ u(() => r(x) === "auto");
  var ee = Bm(), ne = he(ee), ie = he(ne), ue = Q(ne);
  Xe(ue, 17, () => r(A), (oe) => oe.time.getTime(), (oe, de) => {
    var ge = Hm();
    let te;
    var ae = he(ge);
    Y(() => {
      l(ge, "x", r(de).x), l(ge, "y", r(de).y), l(ge, "transform", `translate(${r(p) ?? ""},${-r(g)}) rotate(${r(N) ?? ""},${r(de).x ?? ""},${r(de).y ?? ""})`), ft(ge, `text-anchor: ${r(H) ?? ""};
             dominant-baseline: ${r(y) ?? ""};
             font-size: ${r(I) ?? ""}px;
             ${r(Z) ? "" : `fill: ${r(x)};`}
             fill-opacity: ${r(w) ?? ""};`), te = kn(ge, 0, "", null, te, {
        "fill-black": r(Z),
        "dark:fill-white": r(Z)
      }), Ke(ae, r(de).text);
    }), T(oe, ge);
  }), Y((oe) => Ke(ie, `${e.layer.title ?? ""} [${oe ?? ""} / ${(r(d) || r(f)) ?? ""}]`), [() => Mn(e.layer.source)]), T(t, ee), ct();
}
var Gm = /* @__PURE__ */ U('<rect class="issue-time-target svelte-jzebrj" fill="transparent" style="cursor: pointer" role="button" tabindex="0"><title> </title></rect>'), Xm = /* @__PURE__ */ U('<circle style="pointer-events: none"></circle>'), qm = /* @__PURE__ */ U("<!><!>", 1);
function jm(t, e) {
  it(e, !0);
  const a = ma();
  let n = /* @__PURE__ */ u(() => e.layer.style?.marker_size ?? 6), i = /* @__PURE__ */ u(() => e.layer.style?.fill_available ?? "transparent"), c = /* @__PURE__ */ u(() => e.layer.style?.fill_selected ?? "#3b82f6"), o = /* @__PURE__ */ u(() => e.layer.style?.stroke ?? "#3b82f6"), s = /* @__PURE__ */ u(() => e.layer.style?.stroke_width ?? 2), f = /* @__PURE__ */ u(() => e.layer.target_driver), d = /* @__PURE__ */ u(() => e.layer.selection_mode ?? "playhead_nearest_prior"), h = /* @__PURE__ */ u(() => r(d) === "playhead_nearest_prior"), b = /* @__PURE__ */ u(() => Ia(e.layer.source, e.layer.id)), m = /* @__PURE__ */ u(() => r(b) ? a.getViewportData(r(b)) : void 0), p = /* @__PURE__ */ u(() => r(m)?.records ?? []), g = /* @__PURE__ */ u(() => wt(e.layer.parameter_mapping.issue_time)), v = /* @__PURE__ */ u(() => {
    if (!r(g) || r(p).length === 0) return [];
    const V = new un(), X = [];
    for (const G of r(p)) {
      const q = G[r(g)];
      let E, _;
      if (q instanceof Date)
        E = q.getTime(), _ = q.toISOString();
      else if (typeof q == "string")
        E = pt(q).getTime(), _ = q;
      else
        continue;
      isNaN(E) || V.has(_) || (V.add(_), X.push({ timestamp: E, isoString: _ }));
    }
    return X.sort((G, q) => G.timestamp - q.timestamp), X;
  }), k = /* @__PURE__ */ u(() => {
    const V = a.drivers?.[r(f)];
    return typeof V == "string" ? V : null;
  }), S = /* @__PURE__ */ u(() => {
    if (!r(h) || r(v).length === 0) return null;
    const V = a.currentTime.getTime();
    let X = null;
    for (const G of r(v))
      if (G.timestamp <= V)
        X = G;
      else
        break;
    return X;
  });
  ut(() => {
    if (!r(h)) return;
    const V = r(S);
    if (!V) return;
    dt(() => r(k)) !== V.isoString && a.updateDriver(r(f), V.isoString);
  }), ut(() => {
    if (!r(
      h
      // Skip in playhead mode - handled above
    ) && r(v).length > 0 && r(k) === null) {
      const V = r(v)[r(v).length - 1];
      a.updateDriver(r(f), V.isoString);
    }
  });
  let N = /* @__PURE__ */ u(() => {
    const V = [], X = r(v).length;
    if (X === 0) return V;
    const [G, q] = e.xScale.range();
    for (let E = 0; E < X; E++) {
      const _ = r(v)[E], C = e.xScale(new Date(_.timestamp));
      let A;
      E === 0 ? A = G : A = (e.xScale(new Date(r(v)[E - 1].timestamp)) + C) / 2;
      let Z;
      if (E === X - 1)
        Z = q;
      else {
        const ee = e.xScale(new Date(r(v)[E + 1].timestamp));
        Z = (C + ee) / 2;
      }
      V.push({ marker: _, xLeft: A, xRight: Z, index: E });
    }
    return V;
  }), I = /* @__PURE__ */ u(() => e.yScale.range()[0]);
  function x(V) {
    const X = a.timeDomain.start.getTime(), G = a.timeDomain.end.getTime() - a.timeDomain.start.getTime(), q = (V - X) / G;
    q >= 0 && q <= 1 && a.setPlayheadPosition(q, 0);
  }
  function w(V, X) {
    a.updateDriver(r(f), V), r(h) && X && x(X.timestamp);
  }
  var y = qm(), H = ce(y);
  Xe(H, 17, () => r(N), (V) => V.marker.isoString, (V, X) => {
    const G = /* @__PURE__ */ u(() => r(X).marker.isoString === r(k));
    var q = Gm(), E = he(q), _ = he(E);
    Y(
      (C) => {
        l(q, "x", r(X).xLeft), l(q, "y", r(I) - r(n) * 2), l(q, "width", C), l(q, "height", r(n) * 4), l(q, "aria-label", `Select issue time ${r(X).marker.isoString ?? ""}`), l(q, "aria-pressed", r(G)), Ke(_, `Issue time: ${r(X).marker.isoString ?? ""}`);
      },
      [
        () => Math.max(0, r(X).xRight - r(X).xLeft)
      ]
    ), Ft("click", q, () => w(r(X).marker.isoString, r(X).marker)), Ft("keydown", q, (C) => C.key === "Enter" && w(r(X).marker.isoString, r(X).marker)), T(V, q);
  });
  var B = Q(H);
  Xe(B, 17, () => r(v), (V) => V.isoString, (V, X) => {
    const G = /* @__PURE__ */ u(() => e.xScale(new Date(r(X).timestamp))), q = /* @__PURE__ */ u(() => r(X).isoString === r(k));
    var E = Xm();
    Y(() => {
      l(E, "cx", r(G)), l(E, "cy", r(I)), l(E, "r", r(n)), l(E, "fill", r(q) ? r(c) : r(i)), l(E, "stroke", r(o)), l(E, "stroke-width", r(s)), l(E, "stroke-dasharray", r(h) ? "none" : "2 2");
    }), T(V, E);
  }), T(t, y), ct();
}
ur(["click", "keydown"]);
class Zm {
  #e = [];
  /** External handlers that can be registered at runtime (e.g., sidebar toggle) */
  #a = /* @__PURE__ */ new Map();
  constructor() {
    this.#t();
  }
  /** Register built-in shortcuts */
  #t() {
    this.register({
      key: " ",
      description: "Play/pause animation",
      category: "Playhead",
      handler: () => {
        Ge.animationPlaying ? Ge.pauseAnimation() : Ge.playAnimation();
      }
    }), this.register({
      key: "ArrowLeft",
      description: "Step playhead backward (2%)",
      category: "Playhead",
      handler: () => {
        if (!Ge.animationPlaying) {
          const e = Math.max(0, Ge.playheadPosition.current - 0.02);
          Ge.setPlayhead(e, 200);
        }
      }
    }), this.register({
      key: "ArrowRight",
      description: "Step playhead forward (2%)",
      category: "Playhead",
      handler: () => {
        if (!Ge.animationPlaying) {
          const e = Math.min(1, Ge.playheadPosition.current + 0.02);
          Ge.setPlayhead(e, 200);
        }
      }
    }), this.register({
      key: "[",
      description: "Step playhead backward 24h",
      category: "Playhead",
      handler: () => {
        if (!Ge.animationPlaying) {
          const e = 864e5 / Je.viewportTimeSpan_msec, a = Math.max(0, Ge.playheadPosition.current - e);
          Ge.setPlayhead(a, 0);
        }
      }
    }), this.register({
      key: "]",
      description: "Step playhead forward 24h",
      category: "Playhead",
      handler: () => {
        if (!Ge.animationPlaying) {
          const e = 864e5 / Je.viewportTimeSpan_msec, a = Math.min(1, Ge.playheadPosition.current + e);
          Ge.setPlayhead(a, 0);
        }
      }
    }), this.register({
      key: "Home",
      description: "Move playhead to start",
      category: "Playhead",
      handler: () => {
        Ge.animationPlaying || Ge.setPlayhead(0, 300);
      }
    }), this.register({
      key: "End",
      description: "Move playhead to end",
      category: "Playhead",
      handler: () => {
        Ge.animationPlaying || Ge.setPlayhead(1, 300);
      }
    }), this.register({
      key: "<",
      shift: !0,
      description: "Slow down animation",
      category: "Playhead",
      handler: () => {
        const e = Math.min(60, Ge.animationDuration + 1);
        Ge.setLoopDuration(e);
      }
    }), this.register({
      key: ">",
      shift: !0,
      description: "Speed up animation",
      category: "Playhead",
      handler: () => {
        const e = Math.max(1, Ge.animationDuration - 1);
        Ge.setLoopDuration(e);
      }
    }), this.register({
      key: "l",
      description: "Toggle playhead time lock",
      category: "Playhead",
      handler: () => {
        const e = this.#a.get("togglePlayheadLock");
        e && e();
      }
    }), this.register({
      key: "b",
      meta: !0,
      description: "Toggle sidebar",
      category: "Navigation",
      handler: () => {
        const e = this.#a.get("toggleSidebar");
        e && e();
      }
    }), this.register({
      key: "?",
      shift: !0,
      description: "Show keyboard shortcuts",
      category: "Navigation",
      handler: () => {
        const e = this.#a.get("toggleShortcutsOverlay");
        e && e();
      }
    });
  }
  /** Register a new shortcut */
  register(e) {
    const a = this.#e.find((n) => n.key.toLowerCase() === e.key.toLowerCase() && !!n.meta == !!e.meta && !!n.shift == !!e.shift);
    a && console.warn(`Keyboard shortcut conflict: "${e.key}" is already registered for "${a.description}"`), this.#e.push(e);
  }
  /** Register an external handler (for components that need to expose functionality) */
  registerExternalHandler(e, a) {
    this.#a.set(e, a);
  }
  /** Unregister an external handler */
  unregisterExternalHandler(e) {
    this.#a.delete(e);
  }
  /** Main keydown handler - attach to svelte:window */
  handleKeydown = (e) => {
    const a = e.target;
    if (!(a instanceof HTMLInputElement || a instanceof HTMLTextAreaElement || a.isContentEditable))
      for (const n of this.#e) {
        const i = e.key.toLowerCase() === n.key.toLowerCase() || e.key === n.key, c = n.meta ? e.metaKey || e.ctrlKey : !(e.metaKey || e.ctrlKey), o = n.shift ? e.shiftKey : !e.shiftKey;
        if (i && c && o) {
          e.preventDefault(), n.handler();
          return;
        }
      }
  };
  /** Get all shortcuts for documentation/help dialog */
  getShortcutList() {
    return this.#e.map((e) => ({
      key: e.key,
      meta: e.meta,
      shift: e.shift,
      description: e.description,
      category: e.category
    }));
  }
  /** Get shortcuts grouped by category */
  getShortcutsByCategory() {
    const e = /* @__PURE__ */ new Map();
    for (const a of this.#e) {
      const n = a.category ?? "General", i = e.get(n) ?? [];
      i.push(a), e.set(n, i);
    }
    return e;
  }
  /** Format a shortcut for display (e.g., "⌘B" or "Ctrl+B") */
  formatShortcut(e) {
    const a = typeof navigator < "u" && navigator.platform.includes("Mac"), n = [];
    e.meta && n.push(a ? "⌘" : "Ctrl+"), e.shift && n.push(a ? "⇧" : "Shift+");
    let i = e.key;
    switch (e.key) {
      case " ":
        i = "Space";
        break;
      case "ArrowLeft":
        i = "←";
        break;
      case "ArrowRight":
        i = "→";
        break;
      case "ArrowUp":
        i = "↑";
        break;
      case "ArrowDown":
        i = "↓";
        break;
      case "<":
        i = "<";
        break;
      case ">":
        i = ">";
        break;
    }
    return n.push(i.toUpperCase()), n.join("");
  }
}
new Zm();
class Jm {
  #e = /* @__PURE__ */ Me(null);
  /**
   * Get the currently selected event, or null if nothing is selected.
   */
  get selected() {
    return r(this.#e);
  }
  /**
   * Select an event. This replaces any previously selected event.
   */
  select(e) {
    re(this.#e, e, !0);
  }
  /**
   * Clear the current selection.
   */
  clear() {
    re(this.#e, null);
  }
  /**
   * Check if a specific event is currently selected.
   * Compares by layer ID and record timestamp.
   */
  isSelected(e, a) {
    if (!r(this.#e) || r(this.#e).layerId !== e) return !1;
    const n = r(this.#e).record.time, i = a.time;
    return n instanceof Date && i instanceof Date ? n.getTime() === i.getTime() : !1;
  }
}
const hc = new Jm();
function Qm(t) {
  const e = t.length / 6 | 0, a = new Array(e);
  for (let n = 0; n < e; n++) a[n] = "#" + t.slice(n * 6, (n + 1) * 6);
  return a;
}
function Km(t) {
  const e = t.length;
  return (a) => t[Math.max(0, Math.min(e - 1, Math.floor(a * e)))];
}
const $m = {
  acton: "260d40270e41280f422911432a12442b13452b14462c16482d17492e184a2f194b301b4c311c4d321d4e321e4f331f503421523522533623543624553725563826573927583a29593b2a5a3b2b5b3c2c5c3d2d5d3e2e5e3e2f5f3f3160403261413362423463423564433665443766453867453968463a69473c6a483d6b483e6c493f6d4a406e4b416f4b42704c43714d44724e45734e46744f4775504876514977514a78524b79534c7a544d7b544e7b554f7c56507d57517e57527f5853805954815a55825b56835c57835d58845e59855f5a86605b86615b87625c88635d88655d89665e8a675f8a685f8a69608b6b608b6c608c6d618c6e618c6f618c71618c72628d73628d74628d75628d77628d78628d79638d7a638d7b638d7d638e7e638e7f638e80638e81638e83638e84638e85648e86648e88648e89648e8a648e8b648e8d648e8e648e8f648e91648f92648f93658f95658f96658f97658f99658f9a658f9b658f9d658f9e658fa0658fa1668fa2668fa4668fa56690a76690a86690aa6690ab6690ac6790ae6790af6790b16790b26790b46791b56891b76891b86891ba6891bb6992bd6992be6a92bf6a93c16b93c26b94c36c94c56d95c66d96c76e96c86f97c97098ca7199cb7299cc739acd749bce759cce779dcf789ed0799fd07aa0d17ca1d27da3d27ea4d37fa5d381a6d382a7d483a8d485a9d586aad587abd688acd68aadd68bafd78cb0d78eb1d88fb2d890b3d892b4d993b5d994b6d995b8da97b9da98badb99bbdb9bbcdb9cbddc9dbedc9fbfdda0c0dda1c2dda3c3dea4c4dea5c5dea7c6dfa8c7dfa9c8dfabc9e0accae0adcbe1aecce1b0cde1b1cee2b2cfe2b4d0e2b5d1e3b6d2e3b7d3e3b9d4e4bad5e4bbd6e4bcd7e5bed8e5bfd9e5c0dae5c1dbe6c2dce6c4dde6c5dee7c6dee7c7dfe7c8e0e8cae1e8cbe2e8cce3e8cde4e9cee4e9cfe5e9d0e6e9d1e7ead3e8ead4e9ead5e9ebd6eaebd7ebebd8ecebd9edecdaedecdbeeecdcefecddf0eddef0eddff1ede0f2ede1f3eee2f3eee3f4eee4f5eee5f6efe6f6efe7f7efe8f8efe9f8efe9f9f0eafa",
  bam: "65024b67054e6a07506c0a526e0d5470105772125975145b77175d79195f7b1b617d1d637f1f6681216884236a86256c88276e8a28708c2a728e2c74902e7692307893317a95337c97357e99377f9b38819d3a839e3c85a03e87a23f88a4418aa5438ca7448ea9468faa4891ac4993ad4b94af4d96b04e97b25099b3529ab5549cb6559db8579fb959a0ba5aa2bc5ca3bd5ea5bf60a6c062a8c164a9c266abc468acc56aaec66cafc86eb0c970b2ca72b3cb74b5cc76b6ce78b7cf7ab9d07cbad17fbcd281bdd383bed485c0d587c1d68ac2d78cc4d88ec5d991c6da93c8db95c9dc97cadd9acbde9ccddf9ecedfa1cfe0a3d0e1a5d1e2a7d3e3aad4e4acd5e4aed6e5b0d7e6b3d8e7b5dae7b7dbe8b9dce9bbddeabddeeac0dfebc2e0ecc4e1ecc6e2edc8e3eecae4eecce5efcee6efd0e7f0d1e8f1d3e9f1d5e9f2d7eaf2d8ebf3daecf3dcecf3ddedf4dfeef4e0eef5e2eff5e3eff5e4f0f5e6f0f6e7f0f6e8f1f6e9f1f6eaf1f6ebf1f6ecf1f6edf1f6eef1f6eff1f6eff1f6f0f1f6f1f1f6f1f0f6f2f0f5f2f0f5f2eff5f3eff4f3eef4f3edf3f3edf3f3ecf2f3ebf2f3eaf1f3e9f0f3e8eff3e6eff3e5eef2e4edf2e2ecf2e0ebf1dfeaf1dde8f0dbe7f0d9e6efd7e5efd5e3eed3e2edd1e0eccfdfecccddebcadceac7dae9c5d8e8c2d6e7bfd4e6bdd2e4bad0e3b7cee2b4cce1b1cadfaec8deabc6dda8c3dba5c1daa2bfd89fbcd79bbad598b7d395b5d292b2d08fb0ce8cadcd89abcb86a8c983a6c780a3c67da1c47a9ec2779cc07499be7297bc6f94bb6d92b96a8fb7688db5658ab36388b16186b05e83ae5c81ac5a7faa587ca8567aa75478a55276a35074a24f72a04d709e4b6d9c496b9b4869994667984565964364944162934060913e5e903d5c8e3c5a8d3a588b39578a375588365387355185335084324e82314c812f4b7f2e497e2d477c2b457b2a4479294278274076263e75253d73233b7122397021376e1f356d1e336b1c32691b3068192e66182c64162a6315286113265f12245d10225c0e205a0d1e580b1b5609195507175306155104124f030f4d010d4c00",
  bamako: "003b47003b47013b47013c47023c46023c46033c46033d45043d45043d45053e45053e44063e44063f44073f43073f43083f430840420940420940420a41420a41410b41410b42410c42400c42400d43400d433f0e433f0e443f0f443e0f443e10453e10453d11453d12463d12463c13473c13473c14473b14483b15483a16483a16493a174939174a39184a39194a38194b381a4b371b4c371b4c371c4d361d4d361d4d351e4e351f4e34204f34204f3321503322503322513223513224523125523126533026533027542f28542f29552e29552e2a562d2b562d2c572c2d572c2e582b2e582b2f592a305a2a315a29325b29335b28345c27355c27355d26365e26375e25385f25395f243a60233b61233c61223d62223e62213f632140642041641f42651f43661e44661e45671d46681c47681c48691b49691a4a6a1a4b6b194c6b184d6c184e6d174f6e17506e16516f155270155370145471135572135672125873115974115a74105b750f5c760f5d770e5e770d5f780d60790c61790b637a0a647b0a657c09667c08677d07687e07697e066a7f056b80056d80046e81046f82037082037183027383027484017584017785017885017986007b86007c86007d87007f87008087008188008388008488008588008789008889008989008b89008c8a008d8a008f8a00908b00918b00938b01948c01958c01978d02988d03998e039b8e049c8f059d90069e9108a09209a1920ba2930da4940ea59510a69611a89713a99815aa9916ac9a18ad9b1aae9c1bb09d1db19e1fb29f20b4a022b5a124b7a225b8a327b9a529bba62bbca72cbea82ebfa930c0aa32c2ab34c3ac35c5ad37c6ae39c7af3bc9b03dcab23fcbb341cdb444ceb546cfb648d0b74ad2b84dd3b94fd4bb51d5bc54d6bd56d7be59d9bf5bdac05ddbc160dcc262ddc464dec567dfc669e0c76ce2c86ee3c970e4ca73e5cb75e6cc77e7cd7ae8cf7ce9d07eead181ebd283ecd385edd488efd58af0d68cf1d78ef2d891f3d993f4da95f5db97f6dc9af7dd9cf8de9ef9dfa0fae0a3fbe1a5fce2a7fde3a9fee4abffe5ad",
  bamO: "4f3043502f45512f4653304754304956304b58304d5a314e5c32505e325260335462345764355967365b69375d6b385f6d3961703a63723b65743d67763e69793f6b7b416d7d426f7f4471814573834675854877874979894b7b8b4c7d8d4e7e8f4f809151829352849454859655879857899a588a9b5a8c9d5b8d9f5d8fa05e91a26092a36194a56395a76597a86698aa689aab699bad6b9dae6d9eb06ea0b170a1b372a3b574a4b676a6b877a7b979a9bb7baabc7dacbe7fadbf81afc083b0c285b2c387b3c589b5c68bb6c78db8c98fb9ca92bacb94bccc96bdcd98becf9abfd09cc1d19ec2d2a0c3d2a3c4d3a5c5d4a7c6d5a9c7d6abc7d6adc8d7aec9d7b0c9d8b2cad8b4cad9b5cbd9b7cbd9b8cbd9baccdabbccdabcccdabeccdabfccdac0ccdac1ccdac2ccdac3ccdac4cbd9c5cbd9c5cbd9c6cbd9c7cad9c7cad8c8cad8c9c9d8c9c9d8cac8d7cac8d7cac7d7cbc7d6cbc7d6cbc6d6ccc5d5ccc5d5ccc4d4ccc4d4cdc3d4cdc2d3cdc2d3cdc1d2cdc0d1cdbfd1cdbed0cdbdcfcdbccecdbbcdcdbacccdb9cbccb7caccb6c9ccb4c8cbb2c6cbb1c5caafc3c9adc2c8aac0c7a8bec6a6bcc5a4bac4a1b8c29eb6c19cb4bf99b2be97b0bc94adba91abb88fa9b68ca7b58aa4b387a2b185a0af839ead809cab7e9aa97c98a77a96a57894a37692a174919f728f9e708d9c6e8b9a6d8a986b889669869468859366839165828f63808d627f8c617d8a5f7c885e7b875d79855c78835b77825a758058747f57737d56727c55717a546f79536e77526d75526c74516b72506a714f696f4e676e4d666c4c656b4c64694b63684a6266496165486063485f62475e60465d5f465c5d455b5c445a5b4459594358584257564257554156544155534054514054503f534f3f524e3f514d3e514c3e504b3d50493d4f483d4f483c4e473c4e463c4d453c4d443b4c433b4c423b4b413b4b403b4b403b4a3f3a4a3e3a4a3d3a4a3c3a493c3a493b3a493a3a49393a49393a49383a48373a48363b48363b48353b49343b49343c49333c49323d4a323d4a313e4b313e4b313f4c30404d30414e3042",
  batlow: "011959021b59031c5a041e5a051f5a06215b07225b07245b08255b09275c0a285c0a2a5c0b2b5c0b2d5d0c2e5d0c2f5d0d315d0d325e0d335e0e355e0e365e0e375e0f385f0f395f0f3b5f0f3c5f103d5f103e5f103f60104060114160114260114360114460124561124661124761124861134961134a61134b61144c62144d62144e62154f62154f621650621651621752621753621854621855621956621957621a57621b58621b59621c5a621d5b621e5c621e5d621f5d61205e61215f6122606123606024616025626026635f27635f28645f2a655e2b655e2c665d2d675d2f675c30685c31695b33695a346a5a356a59376b58386c583a6c573b6d563c6d563e6e553f6e54416f53426f5244705245705147715048714f4a724e4c724d4d734d4f734c50744b52744a5375495575485776475876465a77455b77455d78445f7843607942627941637a40657a3f677b3e687b3e6a7b3d6c7c3c6d7c3b6f7d3a717d39737e38747e38767f37787f367980357b80347d81347f813381823282823184833186833088842f8a842f8c852e8e852e8f862d91862d93872c95872c97882c99882c9b892b9d892b9f892ba18a2ba38a2ca58b2ca78b2ca98c2cab8c2dad8c2daf8d2eb18d2fb38e2fb58e30b78e31b98f32bb8f33bd8f34be9035c09036c29037c49138c6913ac8913bca923ccb923ecd923fcf9340d19342d29343d49445d69446d89448d9954adb954bdd954dde964fe09651e19752e39754e49756e69858e7985ae9995cea995eeb9a60ed9a62ee9b64ef9b67f09c69f19d6bf29d6df39e70f49f72f59f74f6a077f7a179f8a17bf8a27ef9a380f9a382faa485faa587fba689fba68cfca78efca890fca993fca995fdaa97fdab9afdac9cfdac9efdada0fdaea2fdafa5fdafa7fdb0a9fdb1abfdb2adfdb2affdb3b1fdb4b4fdb4b6fdb5b8fdb6bafdb7bcfdb7befdb8c0fdb9c2fdbac4fdbac7fdbbc9fdbccbfdbccdfcbdcffcbed1fcbfd3fcbfd6fcc0d8fcc1dafcc2dcfcc3dffcc3e1fcc4e3fcc5e5fbc6e8fbc6eafbc7ecfbc8effbc9f1fbcaf3fbcaf6facbf8faccfa",
  batlowK: "04050a05070d06080f070a11090c130a0d150b0f170c10190d111a0e121c0f141e0f151f101621101723111825111a27121b29121c2b131e2d141f2f14203115223315233516253717263917273b18293d192b3f1a2c411a2e431b2f451c31461d32481e344a1f354b20374d21384f223a50233b51243d53253e542640552741562843572944582a45592b475a2c485b2d495b2e4a5c2f4b5d304d5d314e5e324f5e33505e34515f35525f36535f37545f38555f39555f3a565f3b575f3c585f3d595f3e595f3e5a5f3f5b5e405c5e415c5e425d5e435d5d435e5d445f5d455f5c46605c47605c48615b49625b49625a4a635a4b63594c64594d65584e65584f6657506657516756526756536855546955556954566a53576a53586b52596c515a6c515b6d505c6e4f5e6e4f5f6f4e60704d61704d62714c63724b65724b66734a6774496974496a75486b76476c76476e77466f7845717845727944737a43757b43767b42787c41797d417b7e407d7e3f7e7f3f80803e81813e83813d85823d86833c88843c8a853b8c853b8e863a8f873a91883a938839958939978a39998b389b8b389d8c389f8d38a18e38a38e38a58f38a79038a99139ab9139ad9239af933ab1933ab3943bb5953bb7953cba963dbc963dbe973ec0983fc29840c49941c69942c89a43c99a45cb9b46cd9b47cf9c49d19c4ad39d4cd49d4dd69d4fd89e50d99e52db9f54dc9f55dea057dfa059e1a05be2a15de4a15fe5a160e6a262e7a264e8a366eaa368eba36aeca46ceda46eeea570efa572f0a574f0a676f1a678f2a77af3a77cf3a77ef4a880f5a882f5a984f6a986f6aa88f7aa8bf7ab8df8ab8ff8ac91f9ac92f9ad94faad96faae98faae9afbaf9cfbaf9efbb0a0fbb0a2fcb1a4fcb1a6fcb2a8fcb2aafcb3acfcb3aefdb4b0fdb5b2fdb5b4fdb6b6fdb6b7fdb7b9fdb7bbfdb8bdfdb9bffdb9c1fdbac3fdbbc5fdbbc7fdbcc9fdbccbfdbdcdfdbecffdbed1fdbfd3fdc0d6fdc1d8fdc1dafdc2dcfdc3defdc3e0fcc4e2fcc5e4fcc6e7fcc6e9fcc7ebfcc8edfbc8effbc9f1fbcaf4fbcbf6fbcbf8faccfa",
  batlowW: "011959021b59031c5a041e5a051f5a06215b07225b07245b08255b09275c0a285c0a2a5c0b2b5c0b2d5d0c2e5d0c2f5d0d315d0d325e0d335e0e355e0e365e0e375e0f385f0f3a5f0f3b5f0f3c5f103d5f103e5f103f60104060104160114260114360114460114561124661124761124761124861134961134a61134b61144c62144d62144e62154f621550621650621651621652621753621754621855621856621957621a58621a58621b59621c5a621c5b621d5c621e5d621f5d621f5e62205f6121606122616123616124626125636026646027646028655f2a665f2b675e2c675e2d685e2e695d30695d316a5c326b5c346b5b356c5a366c5a386d59396e593a6e583c6f573d70563f70564071554271544372544573534673524874514974514b75504c754f4e764e4f774d51774d53784c54784b56794a577a49597a495b7b485c7b475e7c465f7c45617d45637e44647e43667f42687f416980406b81406d813f6e823e70823d72833d74843c75843b77853a7985397b86397c87387e8737808837828936848935868a35888b348a8b348c8c338e8d33908d33928e32948f32968f329890329a91329c92329e9233a09333a29433a49434a79535a99636ab9737ad9738af9839b1993ab3993bb59a3db79b3fba9b40bb9c42bd9d44bf9d46c19e48c39f4ac59f4cc6a04ec8a050caa152cba154cda256cea258d0a35ad1a35cd3a45ed4a460d5a562d7a564d8a566d9a669daa66bdba76ddca76fdda770dfa872e0a874e1a976e2a978e3a97ae4aa7ce5aa7ee5ab80e6ab82e7ab84e8ac86e9ac88eaad89ebad8becae8dedaf8feeaf91eeb094efb196f0b198f1b29af2b39cf3b49ef3b5a1f4b6a3f5b7a6f6b9a8f7baaaf7bbadf8bdaff9beb2f9c0b5fac1b7fac3bafbc5bcfcc6bffcc8c1fccac4fdccc6fdcdc9fdcfcbfed1cdfed3cffed5d2fed6d4fed8d6ffdad8ffdbdaffdddbffdfddffe0dfffe2e1ffe3e2ffe5e4ffe6e6ffe8e7ffe9e9ffeaeaffecebffededffefeefff0f0fff1f1fff2f2fff4f3fff5f5fff6f6fff7f7fff8f8fffaf9fffbfbfffcfcfffdfdfffefe",
  berlin: "9eb0ff9cb0fe9ab0fd98affc95affb93affa91aef98eaef78caef68aaef587adf485adf382adf280acf17eacf07bacee79abed76abec74aaeb71aae96fa9e86ca9e66aa8e567a8e365a7e262a6e060a5df5da5dd5ba4db58a3d956a2d754a0d5519fd34f9ed14d9dcf4b9bcd489aca4698c84497c64395c34194c13f92be3e90bc3c8eb93b8db7398bb43889b23787af3685ad3584aa3382a83280a6327ea3317ca1307a9e2f789c2e76992d75972c73942c71922b6f8f2a6d8d296b8b29698828688627668327648126627f25607c245e7a245d78235b7522597322577121556e20546c20526a1f50681e4e651e4d631d4b611c495f1c475c1b465a1a44581a4256194153193f51183d4f173c4d173a4b16384916374715354415334214324014303e132f3c132d3a122c38122a3612293411273211263011242e11232c11212a112028101f26101d25101c23111b21111a2011191e11181c11161b111519111418111317121215121214131112141011140f10150e0e160e0d170d0b180c0a190c091a0c081b0b071c0b061d0b051e0b04200b04210b03220c02230c02240c02250c01260d01270d01280d012a0e012b0e012c0e002d0e002f0e00300f00310f00330f00340f003510003710003810003911003b11003c11013e12013f12014112014213014413014514014714014815024a15024b16024d16024f1703501803521804541905561a05571b06591c075b1d085d1e095f1f0a61200b63210c65230e68240f6a25106c27116e2813702a14732b16752d17772f1979301b7b321c7d341e803620823722843924863b26883d288a3f2a8c402c8e422e904430924632944834964a36984c399a4d3b9c4f3d9e513fa05341a25544a45746a65948a85a4aaa5c4cac5e4fae6051b06253b26455b46658b6685ab86a5cba6b5fbc6d61be6f63c07165c27368c4756ac6776cc8796fca7b71cc7d73ce7f76d08178d2837ad5857dd7877fd98982db8b84dd8d86df8f89e1918be3938ee59590e79792ea9995ec9b97ee9d9af09f9cf2a19ff4a3a1f6a5a3f9a7a6fba9a8fdababffadad",
  bilbao: "4c00014e01034f020551040752050954070b55080d570a0e580b105a0d115b0e135d10145e111560131661141862151964161a65181b67191d681a1e691b1f6b1d206c1e226d1f236e202470212671222772232873252975262b76272c77282d78292f7a2a307b2b317c2d327d2e347e2f3580303681313782323983333a84343b85353c87373e88383f8939408a3a418b3b428c3c438d3d458e3f468f404790414891424992434a93454b94464b95474c95484d96494e974a4f984c4f984d50994e51994f519a50529a51529b52539b53539c54539c55549d56549d57549d58559e59559e5a559e5b569e5c569f5d569f5e569f5e569f5f57a06057a06157a06257a06357a16358a16458a16558a16658a16758a26759a26859a26959a26a59a36b59a36b59a36c5aa36d5aa36e5aa46e5aa46f5aa4705aa4715ba4715ba5725ba5735ba5745ba5745ba5755ba6765ca6765ca6775ca6785ca6795ca7795ca77a5da77b5da77c5da77c5da87d5da87e5da87e5ea87f5ea8805ea9815ea9815ea9825ea9835ea9845faa845faa855faa865faa865faa875fab8860ab8960ab8960ab8a60ab8b60ac8c60ac8d61ac8d61ac8e61ac8f61ad9061ad9162ad9162ad9262ae9362ae9463ae9563ae9663af9664af9764af9864af9965b09a66b09b66b19c67b19d68b19e68b29f69b2a06ab3a16bb3a26db3a36eb4a46fb4a571b5a772b5a874b6a975b6aa77b7ab79b7ac7ab8ac7cb8ad7eb9ae80b9af82bab083bab185bbb287bbb289bcb38bbcb48dbdb58ebdb590beb692beb794bfb795bfb897bfb999c0b99ac0ba9cc1bb9ec1bb9fc1bca1c2bca3c2bda4c3bea6c3bea7c3bfa9c4bfaac4c0acc5c1adc5c1afc5c2b0c6c2b2c6c3b3c7c3b4c7c4b6c7c5b7c8c5b9c8c6bac9c7bccac7bdcac8becbc9c0cbcac1cccac3cdcbc4ceccc6cecdc7cfcec9d0cfcbd1d0ccd2d2ced4d3cfd5d4d1d6d5d3d7d7d4d9d8d6dadad8dbdbdadddddbdededde0e0dfe1e1e1e3e3e2e5e5e4e6e6e6e8e8e8eaeae9ebebebedededefefeff1f1f0f2f2f2f4f4f4f6f6f6f8f8f8fafafafbfbfbfdfdfdffffff",
  broc: "2c1a4c2c1b4e2c1d4f2b1e512b20522b21542b23552b24572b26582b275a2b295b2b2a5d2a2c5e2a2d602a2e612a30632a31642a336629356729366929386a29396c293b6d293c6f293e71283f7228417428437528447728467828477a29497c294b7d294c7f294e802a50822a51832b53852c55862d57882e58892f5a8b305c8c315e8e335f8f3461913663923765933966953b68963d6a973f6b99416d9a436f9b45719c47729e49749f4b76a04d78a15079a3527ba4547da5567fa65880a75b82a95d84aa5f85ab6187ac6489ad668baf688cb06b8eb16d90b26f92b37193b57495b67697b77899b87b9bba7d9cbb7f9ebc82a0bd84a2be86a3c089a5c18ba7c28da9c390aac592acc694aec797b0c899b2ca9bb3cb9eb5cca0b7cda2b9cea5bbd0a7bcd1aabed2acc0d3aec2d5b1c4d6b3c5d7b5c7d8b8c9dabacbdbbdcddcbfcfddc2d0dfc4d2e0c6d4e1c9d6e2cbd8e4ced9e5d0dbe6d2dde7d5dfe8d7e0e9d9e2eadce4ebdee5ece0e7ece2e8ede4eaede6ebede7ecede9ededeaeeecebeeececefebedefe9edefe8eeefe7eeefe5eeefe3edeee1edeedfecedddececdbebebd9eaead6e9e9d4e8e8d2e7e7cfe6e6cde5e5cbe4e4c8e3e2c6e1e1c4e0e0c1dfdfbfdedebdddddbadcdbb8dadab5d9d9b3d8d8b1d7d7aed5d5acd4d4aad3d3a7d2d2a5d0d0a2cfcfa0cece9ecccc9bcbcb99c9c996c8c894c6c691c5c58fc3c38cc1c18ac0bf87bebe85bcbc83baba80b8b87eb6b67cb4b479b2b277b0b075aeae73acac71aaaa6fa8a86da6a66ba3a369a1a1679f9f659d9d639b9b6299996097975e95955c93935b9191598f8f578d8d568b8b5489895287875185854f83834d81814c7f7f4a7d7d487b7b4779794577774475754274744072723f70703d6e6e3c6c6c3a6a6a386868376666356464346262326160315f5f2f5d5d2d5b5b2c59592a5757295555275454265252245050234e4e214c4c204b4b1f49491d47471c45451a4343194242184040163e3e153c3d143b3b1239391137381036360f34340e32330c31310b2f300a2e2e082c2c072b2b05292904282802262600",
  brocO: "372f38362f39362f3a362f3b362f3c36303d36303f36304036304136314336314436324636324736334936334a36344c36354e363550363651363753363855363957373a59373b5b373c5c373d5e373f6038406238416438436639446839456a3a476c3a486f3b4a713b4c733c4d753d4f773e51793e527b3f547c40567e415780425982435b84445d86455e8847608a48628b49648d4a668f4c67904d69924f6b94506d95526f9753709955729a56749c58769d5a789f5b79a05d7ba25f7da3617fa56381a66482a76684a96886aa6a88ab6c89ad6e8bae708daf728fb17490b27692b37894b47a96b67c97b77e99b8809bb9829dba849ebb86a0bd88a2be8aa3bf8ca5c08ea7c191a8c293aac395acc497adc599afc69bb1c79db2c89fb4c8a1b5c9a3b7caa5b8cba7bacca9bbccabbdcdadbecdafc0ceb1c1ceb3c2cfb5c4cfb7c5d0b8c6d0bac8d0bcc9d0bdcad0bfcbd0c1ccd0c2cdd0c4ced0c5cfcfc6cfcfc7d0cec9d1cecad1cdcbd2cccbd2cbccd3cbcdd3caced3c8ced3c7cfd3c6cfd3c5cfd3c3cfd3c2cfd3c0cfd3becfd2bdcfd2bbcfd1b9ced0b7ced0b5cdcfb3cdceb1cccdafcbccadcacbabc9caa9c8c9a6c7c8a4c6c6a2c5c5a0c4c49dc2c29bc1c199bfbf96bebe94bcbc92bbbb90b9b98db8b78bb6b689b4b486b3b284b1b082afaf7fadad7dabab7baaa979a8a777a6a574a4a472a2a270a0a06e9e9e6c9d9c6a9b9a6899986697966495946293926091915e8f8f5c8d8d5a8b8b59898957888755868553848351828150807f4e7e7e4c7c7c4b7b7a49797848777646757445737243727142706f416e6d3f6c6b3e6b693d69683b67663a666439646238626137615f365f5d355e5c345c5a335b593259573158553056542f55522e54512e524f2d514e2d504d2c4f4b2b4d4a2b4c482b4b472a4a462a49452a484329474229464129454029443f29433e29423d29423c29413b29403a293f39293f38293e382a3e372a3d362a3c352b3c352b3b342b3b342c3b332c3a332d3a322e39322e39312f393130383030383031383032383033372f34372f35372f36372f37",
  buda: "b301b3b303b2b305b1b307b0b309afb30baeb30daeb30fadb311acb312abb314aab316a9b317a9b318a8b31aa7b31ba6b31ca6b31ea5b31fa4b320a4b321a3b323a2b324a2b325a1b326a0b327a0b3289fb3299fb32b9eb32c9eb32d9db32e9db32f9cb3309cb4319bb4329bb4339ab4349ab43599b43699b53798b53898b53998b53a97b63b97b63c96b63d96b63e96b73f95b74095b74195b84294b84394b84494b84593b94693b94793b94892ba4992ba4a92ba4b91bb4b91bb4c91bb4d90bc4e90bc4f90bc508fbc518fbd528fbd538fbd548ebe558ebe558ebe568dbf578dbf588dbf598cbf5a8cc05b8cc05c8cc05c8bc15d8bc15e8bc15f8ac2608ac2618ac2628ac26389c36389c36489c36588c46688c46788c46888c46987c56987c56a87c56b86c66c86c66d86c66e86c66e85c76f85c77085c77184c77284c87384c87384c87483c97583c97683c97783c97882ca7982ca7982ca7a81ca7b81cb7c81cb7d81cb7e80cb7e80cc7f80cc8080cc817fcc827fcd837fcd847fcd847ecd857ece867ece877ece887ece897dcf8a7dcf8a7dcf8b7dcf8c7ccf8d7cd08e7cd08f7cd0907cd0917bd1917bd1927bd1937bd1947ad1957ad2967ad2977ad2977ad29879d29979d39a79d39b79d39c78d39d78d49e78d49e78d49f78d4a077d4a177d5a277d5a377d5a477d5a576d6a576d6a676d6a776d6a875d6a975d7aa75d7ab75d7ac75d7ad74d8ad74d8ae74d8af74d8b073d8b173d9b273d9b373d9b473d9b572dab572dab672dab772dab871dab971dbba71dbbb71dbbc71dbbd70dcbe70dcbf70dcbf70dcc06fddc16fddc26fddc36fddc46eddc56edec66edec76edec86edec96ddfca6ddfca6ddfcb6ddfcc6ce0cd6ce0ce6ce0cf6ce0d06be0d16be1d26be1d36be1d46be2d56ae2d66ae2d76ae2d86ae3d969e3da69e3db69e4dc69e4dd69e5de68e5df68e5e068e6e168e7e268e7e368e8e467e8e567e9e667eae767ebe867ebe967eceb67edec67eeed67efee66f0ef66f1f066f2f266f3f366f4f466f6f566f7f666f8f866f9f966fafa66fbfb66fdfd66fefe66ffff66",
  bukavu: "1a33331a34351a35371a35391b363b1b373d1b383f1b39411b3a431c3b451c3c471c3d491c3e4c1d3e4e1d3f501d40521e42551e43571e445a1e455c1f465f1f47621f4865204a68204b6b204c6e214e71214f7522517822527b22547f235582235786245989245b8c255c8f255e9226609527629727649a28669c29689f2969a12a6ba32a6da62b6fa82c71aa2c73ad2d75af2d76b12e78b42f7ab62f7cb8307eba317fbd3281bf3283c03485c23587c43689c5388ac63a8cc63b8ec73d90c73f92c84193c84395c84597c84799c8499ac84b9cc84c9ec94ea0c950a1c952a3c954a5c956a6c958a8c959aac95babca5dadca5faeca61b0ca62b2ca64b3ca66b5ca68b7ca6ab8cb6bbacb6dbbcb6fbdcb71bfcb72c0cb74c2cb76c3cb78c5cc7ac7cc7cc8cc7fcacc81cccd84cdcd87cfce8ad1cf8ed3d092d5d195d7d199d9d29ddad3a0dcd4a4ded5a8e0d6ace2d7afe4d8b3e6d9b6e7dabae9dbbeebdcc1eddcc5efddc8f0deccf2dfcff4e0d3f6e1d6f7e2daf9e3ddfbe3e0fce4e4fee501402602412503422404442305452206462107472008491f094a1e0b4b1d0c4d1c0e4e1b0f501a1151191353181554171756161a58151c59141f5b13225d13255e122860122b62122f63123265133666133967143d6915406a16446b17476c194b6d1a4e6e1b526f1d556f1e5870205b71215e71236172246472256773276973286c74296f742b71752c74752d76762e78762f7b76317d77327f77338278348478358678368879388b79398d7a3a8f7a3b917b3c937b3e967c3f987c409a7d429c7e439e7e45a17f47a38049a5824ba7834daa844fac8652ae8754b08957b28b5ab48d5db68f60b79163b99366bb9569bc976cbe996fbf9c72c09e76c2a079c3a27cc4a57fc5a782c6a985c8ac89c9ae8ccab08fcbb292ccb596cdb799ceb99ccfbba0d0bda3d2c0a6d3c2aad4c4add5c6b0d6c8b4d7cab7d8ccbad9cdbedacfc1dbd1c4dcd3c7ddd4caded6cddfd7d0e0d9d2e1dad5e2dbd8e3dddbe3dedde4dfe0e5e1e3e6e2e5e7e3e8e8e5ebe9e6ede9e7f0eae9f3ebeaf6ececf9ededfc",
  cork: "2c194c2c1b4e2c1d4f2b1e512b20532b22542b23562b25572b26592b285b2b295c2a2b5e2a2c5f2a2e612a2f622a31642a326529346729366829376a29396b293a6d283c6e283d70283f7228407328427528437628457828467928487b284a7c284b7e284d7f294f812950822a52842a53852b55872c57882d598a2e5a8b2f5c8d305e8e325f8f3361913563923664933866953a68963c69973d6b983f6c99416e9b43709c45719d47739e49749f4b76a04c77a14e79a2507aa3527ca4547da5567fa65880a75a82a85c83a95e85aa6086ac6288ad6489ae668baf688db06a8eb16d90b26f92b37193b47395b67597b77798b87a9ab97c9cba7e9dbb819fbd83a1be85a3bf88a4c08aa6c28ca8c38faac491acc594aec796afc899b1c99bb3cb9eb5cca0b7cda3b9cfa5bbd0a8bdd1aabfd3adc1d4b0c3d5b2c5d7b5c7d8b8c9dabacbdbbdcddcc0cfdec2d1dfc5d3e1c8d5e2cad7e3cdd9e5d0dbe6d2dde7d5dfe8d7e1e9dae3eadce5ebdee6ece0e8ede2e9ede3ebede5ecede6edede6edede6edece6eeebe6eeeae5ede8e4ede7e3ece5e2ebe3e0eae1dee9dfdce8dddae7dbd8e5d9d6e4d6d4e2d4d2e1d2cfdfcfcddecdcbdccbc8dbc8c6d9c6c4d7c3c1d6c1bfd4bfbcd3bcbad1bab7cfb7b5ceb5b2ccb2b0cab0aec9adabc7aba9c5a8a6c4a6a4c2a3a1c0a19fbf9f9cbd9c9abb9a97ba9795b89592b79290b5908eb38d8bb28b89b08886ae8684ad8482ab817faa7f7da87d7ba77a78a57876a37674a27371a0716f9f6f6d9d6c6b9c6a689a6866996664976462966160955f5d935d5b925b599059578f57558d55538c52518b504f894e4d884c4b864a498548478446458244438142417f403f7e3e3d7d3c3b7b3a397a383778363577343375323174302f722e2d702c2b6f2a2a6d28286b26266a2525682323662122642020631e1f611d1e5f1b1d5d1a1c5b191b59171a5816195615185414185213175012174e12164c11164b1015490f15470f14450e14430d13410d13400c133e0c123c0b123a0a12380a113709113508113308103107103006102e05102c050f2b040f2903",
  corkO: "3f3e3a3f3e3b3f3e3c3f3d3d3e3d3e3e3d3f3e3d403e3d413e3d423e3d433e3d443e3d453e3d463e3d473e3d483e3d493e3d4b3e3d4c3e3e4d3e3e4f3e3f503e3f523e40533e40553e41563e41583e425a3e435b3e445d3e455f3f46613f47623f4864404966404a68404b6a414c6c414e6e424f7042507243527444537644557845567a46587c47597e475b80485d82495e844a60864b62874d63894e658b4f678d50698f516a91536c92546e945670965771975873995a759b5c779c5d789e5f7a9f607ca1627ea2647fa46581a56783a66985a86a86a96c88ab6e8aac708cad728dae738fb07591b17792b27994b37b96b47c97b67e99b7809bb8829cb9849eba86a0bb87a1bc89a3bd8ba4be8da6bf8fa7c090a9c092abc194acc296aec397afc399b1c49ab2c59cb3c59eb5c69fb6c6a1b8c7a2b9c7a3bac7a5bbc8a6bdc8a7bec8a8bfc8a9c0c8aac1c8abc2c8acc3c8adc4c8aec5c7aec6c7afc6c7afc7c6b0c8c5b0c8c5b0c9c4b0c9c3b0cac2b0cac1b0cac0b0cabfb0cabeafcbbdafcbbcaecabbadcab9adcab8accab6abcab5aac9b3a9c9b2a8c8b0a7c8afa6c7ada5c7aba3c6aaa2c5a8a1c4a69fc4a49ec3a39cc2a19bc19f99c09d98bf9b96be9995bd9793bc9591bb9390ba918eb98f8cb78d8bb68b89b58987b48786b28584b18382b08180ae7f7fad7d7dac7b7baa797aa97778a77576a67375a47173a36f71a16c709f6a6e9e686c9c666b9a6469996268976066955e65945c63925a629058608e565f8d545e8b525c89505b874e5a864c59844a578249568047557f45547d44537b4252794151783f50763e4f743c4f733b4e713a4d6f384c6e374c6c364b6b354a69344a683349663249653248643148623047613047602f465e2f465d2e465c2e455b2d45592d45582d45572d44562c44552c44542c44532c43522c43512c43502c434f2c434f2c424e2d424d2d424c2d424b2d424b2e424a2e42492e41482f41482f41472f4147304146304145314145314144324044324043334043334042344042344041354041364040363f40373f3f383f3f383f3f393f3e3a",
  davos: "00054a00074c00094d000b4f010c50010e51020f5302105403125604135704145905165a05175b06185d071a5e071b60081c61091e620a1f640b20650b22670c23680d24690e266b0e276c0f286d102a6f112b70112c71122e73132f7413307514327715337816347917367a17377c18387d193a7e1a3b7f1a3c801b3e821c3f831d40841e41851e43861f448720458821478922488a23498b234a8c244c8d254d8e264e8f274f902851902952912a53922a54932b56932c57942d58952e59952f5a96305b97315c97325e98335f9834609935619936629a37639a38649a39659b3a669b3a679b3b689c3c699c3d6a9c3e6b9c3f6c9d406d9d416e9d426f9d43709d44709d45719d46729d47739d48749d49759d4a769d4b769d4c779d4d789d4e799d4f799d507a9c517b9c527c9c537c9c547d9c557e9b567f9b567f9b57809b58819a59819a5a829a5b83995c83995d84995e85985f8598608698618697628797638897648896658996658a95668a95678b95688b94698c946a8d936b8d936c8e936d8e926e8f926f909170909171919172919073929074938f74938f75948f76958e77958e78968d79968d7a978d7b988c7c988c7d998c7e9a8b7f9a8b809b8b819c8a829d8a839d8a849e89869f8987a08988a08989a1888aa2888ba3888ca3888da4888fa58890a68791a78792a88793a98795aa8796ab8797ac8799ad889aae889baf889db0889eb188a0b289a1b389a3b489a4b68aa6b78aa8b88ba9b98babbb8cadbc8caebd8db0bf8eb2c08fb4c190b6c391b8c492b9c693bbc794bdc995bfca96c1cc98c3cd99c5cf9bc7d09cc9d29ecbd39fcdd5a1cfd6a2d0d8a4d2d9a6d4dba8d6dca9d8deabd9dfaddbe0afdde2b1dee3b3e0e4b5e1e5b6e3e7b8e4e8bae6e9bce7eabee8ebc0eaecc2ebedc4eceec6edefc7eeefc9eff0cbf0f1cdf1f2cff2f2d0f3f3d2f3f4d4f4f4d6f5f5d7f5f6d9f6f6dbf7f7ddf7f7def8f8e0f8f8e1f9f9e3f9f9e5faf9e6fafae8fbfae9fbfbebfbfbecfcfbeefcfcf0fcfcf1fcfcf3fdfdf4fdfdf6fdfdf7fefdf9fefefafefefcfefefdfefefe",
  devon: "2c1a4c2c1b4d2c1c4e2b1c4f2b1d502b1e512b1f522b20532b21542b22552b23562b24572b25582b26582b27592a285a2a295b2a295c2a2a5d2a2b5e2a2c5f2a2d602a2e612a2f6229306329316429326529336629346729356829366929376a29386a28396b28396c283a6d283b6e283c6f283d70283e71283f7228407327417427427527437627447827457927467a27477b27487c27497d274a7e274c7f274d81274e82274f8327508427518627528727538828548a28558b28568c28578e29588f295990295a922a5b932a5c952b5d962b5d982c5e992c5f9a2d609c2e619d2e629f2f62a03063a23064a33165a43265a63266a73367a93468aa3568ab3669ad376aae386ab0396bb13a6cb23b6db43c6db53d6eb73e6fb83f70b94171bb4272bc4472bd4573bf4774c04875c14a76c34c77c44d78c54f79c6517ac8537bc9557cca577ccb597dcc5b7ecd5d7fce5f80cf6181d06382d16583d26784d36985d46b86d56d87d66f88d77188d87389d8758ad9778bda798cdb7b8ddc7d8edc7e8fdd808fde8290df8491df8692e08893e18a94e18c95e28d95e38f96e39197e49398e59599e5969ae6989be79a9be79b9ce89d9de89e9ee9a09fe9a2a0eaa3a1eaa4a2eba6a3eba7a4eca8a5ecaaa5edaba6edaca7edada8eeaea9eeafaaeeb0abeeb1acefb2adefb3adefb4aeefb5aff0b6b0f0b7b1f0b8b2f0b9b3f0bab3f1bab4f1bbb5f1bcb6f1bdb7f1beb8f2beb9f2bfb9f2c0baf2c1bbf2c2bcf2c2bdf3c3bef3c4bff3c5c0f3c6c0f3c6c1f3c7c2f4c8c3f4c9c4f4cac5f4cac6f4cbc6f4ccc7f4cdc8f5cec9f5cecaf5cfcbf5d0ccf5d1cdf5d2cdf6d2cef6d3cff6d4d0f6d5d1f6d6d2f6d6d3f7d7d4f7d8d4f7d9d5f7dad6f7dad7f7dbd8f8dcd9f8dddaf8dedbf8dedcf8dfdcf8e0ddf9e1def9e2dff9e3e0f9e3e1f9e4e2fae5e3fae6e4fae7e4fae8e5fae8e6fae9e7fbeae8fbebe9fbeceafbedebfbedecfbeeedfcefeefcf0eefcf1effcf2f0fcf2f1fcf3f2fdf4f3fdf5f4fdf6f5fdf7f6fdf7f7fdf8f8fef9f9fefaf9fefbfafefcfbfefcfcfefdfdfffefeffffffff",
  fes: "0d0d0d0f0f0f1212121414141616161818181919191b1b1b1d1d1d1f1f1f2121212222222424242626262828282929292b2b2b2d2d2d2e2e2e3030303232323434343535353737373939393b3b3b3c3c3c3e3e3e4040404141414343434545454646464848484949494b4b4b4d4d4d4e4e4e5050505252525353535555555656565858585959595b5b5b5c5c5c5e5e5e6060606161616363636464646565656767676868686a6a6a6b6b6b6d6d6d6e6e6e7070707171717272727474747575757777777878787979797b7b7b7c7c7c7e7e7e7f7f7f8181818282828484848585858787878888888a8a8a8b8b8b8d8d8d8e8e8e9090909292929393939595959797979999999a9a9a9c9c9c9e9e9ea0a0a0a1a1a1a3a3a3a5a5a5a7a7a7a9a9a9abababadadadafafafb1b1b1b3b3b3b5b5b5b7b7b7b9b9b9bbbbbbbdbdbdbfbfbfc1c1c1c3c3c3c5c5c5c8c8c8cacacacccccccececed1d1d1d3d3d3d5d5d5d8d8d8dadadadddddddfdfdfe2e2e2e4e4e4e7e7e7e9e9e9ecececeeeeeef1f1f10240260541260942250c43240f44231246231547221848221b49211e4a21214b20244c20274e202b4f202e50203151203452203753203a54203d55203f55214256214557224858224a59224d5923505a23525b24555b24575c255a5d255c5d265e5e26615e26635f276560276860286a61286c61296f622971622973632a75642a78642b7a652b7c652c7f662c81672d83672d86682e88682e8b692f8d6a2f906b30926b30956c31976d329a6e339c6f349f7035a17137a47338a6743aa8763cab773ead7940af7b42b17d45b37f47b5814ab6834db88550b98753ba8956bc8b59bd8e5cbe905fbf9262c09465c19769c2996cc39b6fc49d72c59f75c6a278c6a47cc7a67fc8a882c9ab85caad89cbaf8cccb18fcdb392ceb696cfb899d0ba9cd1bca0d2bea3d2c0a6d3c2aad4c4add5c6b0d6c8b4d7cab7d8ccbad9cebddacfc1dbd1c4dcd3c7ddd4caded6cddfd7cfe0d9d2e1dad5e2dbd8e2dddae3dedde4dfe0e5e0e2e6e2e5e7e3e8e8e4eae8e6ede9e7f0eae9f3ebeaf6ecebf9ededfc",
  glasgow: "3613383713373813373914363a14353b14343c14333d15333e15323f153140153040162f41162f42162e43162d44172c45172c46172b46172a4718294818294918284a18274b19264b19264c19254d19244e1a244f1a23501a22501a21511b21521b20531b1f541b1e551c1e561c1d571c1c571c1b581d1b591d1a5a1d195b1e185c1e185d1e175e1f165f1f1560201461201362211363211265221166221067230f68240e69250d6a250c6b260b6c270b6c280a6d29096e2a086f2b07702c06702d06712e05712f04723104723203733303733403733502743702743802743901743a01743b01743c01743e01743f01754001754100754200754300754400744500744600744700744900744a00744b00744c00744d00744e01744f01745001745101745201745302745402745503745603735704735804735905735a06735b07735c08725e0a725f0b72600d72610e72621071631171641371651571661770661870671a70681c70691e6f6a206f6b216f6c236e6d256e6e276e6f296d702b6d702d6d712f6c72316c73326c74346b75366b75386b763a6a773c6a783e6a7940697a42697a44697b46687c48687d4a687d4c677e4d677f4f67805166815366815566825765835965845b65845d65855f648661648763648864638866638968638a6a628b6c628b6e628c70618d72618e74618e76618f7860907960917b60927d60927f6093816094835f95855f958760968960978a60988c60998e609990619a92619b94629c96629d98639e9a649f9b659f9d66a09f67a1a168a2a369a3a56ba4a66ca5a86ea5aa6fa6ab71a7ad72a8af74a9b076aab277aab379abb57bacb77dadb87eaeb980aebb82afbc84b0be86b1bf87b1c189b2c28bb3c38db4c58eb4c690b5c892b6c994b6ca95b7cc97b8cd99b9ce9bb9cf9cbad19ebbd2a0bbd3a1bcd5a3bdd6a5bdd7a6bed8a8bfdaaabfdbabc0dcadc1ddafc1dfb0c2e0b2c3e1b4c3e2b5c4e4b7c5e5b9c6e6bbc6e7bcc7e9bec8eac0c8ecc2c9edc4caeec6cbf0c8ccf1caccf3cccdf4cecef6d0cff7d2d0f9d4d1fad7d1fcd9d2fddbd3ff",
  grayC: "0000000202020404040505050707070909090b0b0b0d0d0d0e0e0e0f0f0f1111111212121313131414141515151616161717171818181919191a1a1a1b1b1b1c1c1c1d1d1d1e1e1e1f1f1f2020202121212222222323232424242424242525252626262727272828282929292a2a2a2b2b2b2c2c2c2d2d2d2e2e2e2f2f2f3030303131313131313232323333333434343535353636363737373838383939393a3a3a3b3b3b3b3b3b3c3c3c3d3d3d3e3e3e3f3f3f4040404141414242424343434444444444444545454646464747474848484949494a4a4a4b4b4b4b4b4b4c4c4c4d4d4d4e4e4e4f4f4f5050505151515151515252525353535454545555555656565656565757575858585959595a5a5a5b5b5b5b5b5b5c5c5c5d5d5d5e5e5e5f5f5f5f5f5f6060606161616262626363636363636464646565656666666767676767676868686969696a6a6a6a6a6a6b6b6b6c6c6c6d6d6d6e6e6e6e6e6e6f6f6f7070707171717171717272727373737474747474747575757676767777777777777878787979797a7a7a7a7a7a7b7b7b7c7c7c7d7d7d7d7d7d7e7e7e7f7f7f8080808080808181818282828383838484848484848585858686868787878888888888888989898a8a8a8b8b8b8c8c8c8d8d8d8e8e8e8e8e8e8f8f8f9090909191919292929393939494949595959595959696969797979898989999999a9a9a9b9b9b9c9c9c9d9d9d9e9e9e9f9f9fa0a0a0a1a1a1a2a2a2a3a3a3a4a4a4a5a5a5a6a6a6a7a7a7a8a8a8a9a9a9aaaaaaabababacacacadadadaeaeaeafafafb0b0b0b1b1b1b2b2b2b3b3b3b4b4b4b5b5b5b6b6b6b7b7b7b8b8b8b9b9b9bbbbbbbcbcbcbdbdbdbebebebfbfbfc0c0c0c1c1c1c3c3c3c4c4c4c5c5c5c6c6c6c7c7c7c8c8c8cacacacbcbcbcccccccdcdcdcececed0d0d0d1d1d1d2d2d2d3d3d3d5d5d5d6d6d6d7d7d7d8d8d8dadadadbdbdbdcdcdcdedededfdfdfe0e0e0e2e2e2e3e3e3e4e4e4e6e6e6e7e7e7e8e8e8eaeaeaebebebecececeeeeeeefefeff1f1f1f2f2f2f3f3f3f5f5f5f6f6f6f8f8f8f9f9f9fbfbfbfcfcfcfefefeffffff",
  hawaii: "8c02738d04728d06718d08708d0a6f8e0d6e8e0e6d8e106c8e126b8e136a8f15698f16688f18678f19668f1a65901c64901d63901e63901f6290206190216091235f91245e91255d91265c91275b91285a92295a922a59922b58922c57922d56922e55922f5493305493315393325293335193345093355093364f94374e94384d94394d943a4c943b4b943c4a943d4a953e49953f48954047954147954246954345954445954544964643964742964842964941964a40964b40964c3f964d3e974e3e974f3d97503c97513c97523b97533a97533a975439985538985638985737985836985936985a35985c34995d34995e33995f3299603299613199623099633099642f9a652e9a662e9a672d9a682c9a692c9a6a2b9a6b2a9b6c2a9b6d299b6f289b70289b71279b72269b73269b74259c75249c77249c78239c79239c7a229c7b219c7d219c7e209c7f209c801f9d811f9d831e9d841e9d851d9d871d9d881d9d891c9d8a1c9d8c1c9d8d1c9d8e1c9d901c9c911c9c921c9c941c9c951c9c961c9c981d9b991d9b9a1e9b9c1f9b9d1f9a9f209aa0219aa12299a32399a42498a52698a62797a82897a92a96aa2b95ab2d95ad2e94ae3093af3293b03392b13591b33791b43990b53b8fb63c8eb73e8db8408cb9428cba448bbb468abc4889bd4a88be4c87be4e86bf5085c05284c15483c25782c35982c35b81c45d80c55f7fc6617ec6637dc7657cc8677bc9697ac96c79ca6e78cb7077cc7276cc7475cd7674ce7973ce7b72cf7d71d07f70d08170d1836fd2866ed2886dd38a6cd48c6bd48e6ad59169d69368d69568d79767d89966d89c65d99e64daa064daa263dba562dca762dca961ddab61deae60deb060dfb260e0b45fe0b75fe1b95fe2bb5fe2bd5fe3c05fe4c260e4c460e5c661e5c861e6ca62e7cd63e7cf64e8d166e8d367e9d568e9d76aead96cebdb6debdc6febde71ece073ece276ede378ede57aeee77deee87feeea82efeb84efec87efee8af0ef8df0f08ff0f192f0f395f1f498f1f59af1f69df1f7a0f1f8a3f1f9a6f1f9a8f2faabf2fbaef2fcb1f2fdb3f2fd",
  imola: "1a33b31a34b21b35b21b35b11c36b11c37b11c37b01d38b01d39b01e39af1e3aaf1e3baf1f3cae1f3cae1f3dae203ead203ead203fad2140ac2140ac2141ac2242ab2242ab2243ab2344aa2344aa2345aa2446a92446a92447a92548a82548a82549a8264aa7264aa7264ba7274ca6274ca6274da6284ea5284ea5284fa52950a42950a42951a42a52a32a52a32a53a32b53a22b54a22b55a22c55a12c56a12c57a12d57a02d58a02d59a02e599f2e5a9f2e5b9f2f5b9e2f5c9e2f5d9e305d9d305e9d305f9c315f9c31609c32609b32619b32629b33629a33639a346499346499346598356598356698366797366797376896376896386995386a95396a94396b943a6b933a6c933b6c923b6d923c6e913c6e913d6f903d6f903e708f3e708f3f718e40728d40728d41738c41738c42748b42748b43758a44768a447689457789457788467888467987477987487a86487b86497b854a7c854a7d844b7d844c7e834c7f834d7f824e80824e81814f818150828151838051848052858053857f54867f55877f56887e56897e578a7e588a7d598b7d5a8c7d5b8d7d5c8e7c5c8f7c5d907c5e917b5f927b60927b61937b62947a63957a64967a65977a66987a679979679a79689b79699c796a9d786b9e786c9f786da0786ea1776fa27770a37771a47772a57673a67674a77675a87676a97577aa7578ab7579ac757aad747bae747caf747db0747eb1737fb27380b37381b47382b57283b67284b77285b87286b97187ba7188bb7189bc718abd708bbe708cbf708dc0708ec16f90c26f91c36f92c46e93c66e94c76e95c86e96c96d97ca6d98cb6d99cc6d9bcd6c9cce6c9dcf6c9ed06c9fd26ba1d36ba2d46ba3d56ba4d66aa6d76aa7d86aa9d96aaada69acdb69addd69afde69b0df68b2e068b4e168b5e268b7e368b9e468bbe567bde667bfe767c0e867c2e967c4ea67c6eb67c8eb67caec67cded66cfee66d1ef66d3f066d5f066d7f166d9f266dbf366ddf466dff466e2f566e4f666e6f666e8f766eaf866ecf966eef966f0fa66f2fb66f5fb66f7fc66f9fd66fbfe66fdfe66ffff66",
  lajolla: "1919001a1a011b1a011c1a011d1b021e1b021e1b031f1c03201c04211c04221c05231d05241d06241d07251e07261e08271e08281f09291f092a1f0a2b200a2c200b2d200c2e210c2f210d30210d31220e32220f33220f3423103523103624113724113924123a25133b25133c26143d26143f2615402716412716432817442817452918472919482a1a4a2a1a4b2b1b4d2b1c4e2c1d502c1d512d1e532d1f542e20562e21572f21592f225b30235c30245e312560322661322763332865332967342a69352b6a352c6c362c6e362d70372e72382f743830763931783932793a337b3b347d3b357f3c36813c37833d38853e39873e3a893f3a8b3f3b8d403c8f403d92413e94413e96423f9842409a43409c43419e4442a04442a24543a44544a64644a84645ab4745ad4746af4846b14847b34947b54947b74a48b94a48bb4b48bc4c49be4c49c04d49c24d4ac44e4ac54f4ac7504bc9514bca514bcc524bcd534ccf544cd0554cd1564cd2584cd4594dd55a4dd65b4dd75c4dd75e4dd85f4dd9604eda614edb634edb644edc654edc674edd684edd694fde6b4fde6c4fdf6d4fdf6e4fe0704fe0714fe0724fe1744fe17550e17650e17750e27950e27a50e27b50e37c50e37d50e37f50e38050e48150e48251e48351e48551e58651e58751e58851e58951e68b51e68c51e68d51e68e51e68f52e79052e79252e79352e79452e89552e89652e89752e89852e99a52e99b52e99c52e99d53ea9e53ea9f53eaa153eaa253eba353eba453eba553eba653eba853eca953ecaa54ecab54ecac54edae54edaf54edb054edb154eeb355eeb455eeb555efb655efb856efb956efba56f0bc57f0bd57f0be58f1c058f1c159f1c25af1c45af2c55bf2c75cf2c85df3ca5ff3cb60f4cd61f4ce63f4d065f5d167f5d369f5d46bf6d66df6d76ff7d971f7da74f7dc77f8dd79f8df7cf8e07ff9e282f9e384fae587fae68afae78dfbe890fbea93fbeb96fbec99fced9cfcef9ffcf0a2fcf1a5fdf2a8fdf3abfdf4aefdf5b0fef6b3fef7b6fef8b8fef9bbfefabefefbc0fffcc3fffdc6fffec8fffecb",
  lapaz: "1a0c641b0e651b0f661b10671c12681c13681c14691d166a1d176b1d186c1e196d1e1a6d1e1c6e1f1d6f1f1e701f1f71202071202172202373202474212575212675212776212877222978222a79222b79222c7a232d7b232f7c23307c23317d24327e24337f24347f243580253681253782253882253983263a84263b84263c85263d86273e87273f8727408827418928428928438a28458b28468b29478c29488c29498d2a4a8e2a4b8e2a4c8f2b4d902b4e902b4f912c50912c51922c52922d53932d54942d55942e56952e57952e58962f59962f5a97305b97305c98305d98315e99315e99325f9932609a33619a33629b34639b34649c35659c35669c36679d37689d37699d386a9e386b9e396c9e3a6d9f3a6e9f3b6f9f3c70a03c70a03d71a03e72a13e73a13f74a14075a14176a24277a24278a24379a2447aa2457aa2467ba3477ca3487da3497ea34a7fa34b80a34c80a34d81a34e82a34f83a45084a45185a45285a45386a45487a45588a45688a45789a4588aa35a8ba35b8ba35c8ca35d8da35e8ea3608ea3618fa36290a36390a26591a26692a26792a26893a26a94a16b94a16c95a16e95a16f96a17097a07297a07398a074989f76999f77999f789a9f7a9a9e7b9b9e7c9b9e7e9c9d7f9c9d809d9d829d9c839e9c859e9c869e9b879f9b899f9a8aa09a8ba09a8da0998ea19990a19991a29892a29894a29895a39897a39798a49799a4979ba4969ca5969ea5969fa696a1a696a2a696a4a795a5a795a7a895a8a895aaa995aba995adaa95aeaa95b0ab95b2ab96b3ac96b5ad96b7ad96b8ae97baaf97bcb098beb098bfb199c1b299c3b39ac5b49bc7b59cc8b69ccab79dccb89eceb99fd0baa0d2bba2d3bca3d5bda4d7bea6d9c0a7dac1a8dcc2aadec3abdfc5ade1c6afe3c7b0e4c9b2e6cab4e7cbb5e8ccb7eaceb9ebcfbbecd0bdedd2beefd3c0f0d4c2f1d5c4f2d7c6f3d8c8f4d9c9f4dacbf5dbcdf6ddcff7ded1f7dfd3f8e0d4f9e1d6f9e2d8fae3dafae5dcfbe6ddfbe7dffbe8e1fce9e3fceae5fcebe6fdece8fdedeafdeeecfeefedfef0effef1f1fef2f3",
  lipari: "03132604142804162904172b05182d051a2f051b31051c33061d35061f3706203807213a07223c07243e0825400826420928440929460a2a480a2c4a0b2d4b0c2e4d0d304f0d31510e33530f345510355711375813385a14395c153b5e163c5f183e61193f631b40641d42661e436820446922466b24476c25486d27496f294b702b4c712d4d722f4e73314f743450753651763852773a53773c54783e55783f567941567943577a45587a47587a48597a4a597a4c5a7a4d5a7b4f5b7b505b7a525b7a535c7a545c7a565c7a575c7a585d7a5a5d7a5b5d795c5d795d5d795e5d79605e78615e78625e78635e78645e77655e77665e77685e77695e766a5e766b5f766c5f756d5f756e5f75705f74715f74725f74735f74745f73765f73775f73785f72795f727a5f727c60717d60717e607180607081607082607083606f85606f86606f87606e89606e8a606e8c606d8d616d8e616c90616c91616c93616b94616b96616b97616a98616a9a61699b61699d62699f6268a06268a26267a36267a56267a66266a86266aa6265ab6365ad6365ae6364b06364b26364b36363b56363b76462b86462ba6462bc6461be6561bf6561c16560c36660c56660c6665fc8675fca675fcb685fcd685fcf695ed06a5ed26a5ed46b5ed56c5ed76d5ed86e5eda6f5edb705fdd715fde725fdf735fe07460e17660e27760e37861e47a61e57b62e67c63e77e63e77f64e88165e88265e98466e98567e98768e98868ea8a69ea8b6aea8d6bea8e6cea906dea916eea926eea946fe99570e99771e99872e99973e99b74e89c75e89d76e89e77e8a077e7a178e7a279e7a37ae7a57be6a67ce6a77de6a87ee6aa7fe6ab80e6ac81e5ad82e5af84e5b085e5b186e5b287e5b488e5b58ae5b68be5b88ce5b98ee5ba8fe6bc90e6bd92e6be93e6c095e7c197e7c398e7c49ae8c69ce8c79de9c99fe9caa1eacca3eacda5ebcfa7ebd0a9ecd2abedd3adedd5afeed6b1efd8b3efdab5f0dbb7f1ddb9f2debbf2e0bef3e1c0f4e3c2f5e5c4f6e6c6f6e8c9f7e9cbf8ebcdf9edcffaeed1fbf0d4fbf1d6fcf3d8fdf5da",
  lisbon: "e6e5ffe3e3fde0e2fcdde0fadbdef9d8dcf7d5daf5d3d8f4d0d6f2cdd4f1cbd2efc8d0edc5ceecc3cceac0cae9bdc8e7bbc6e5b8c4e4b5c2e2b3c0e1b0bedfadbcdeabbadca8b9daa5b7d9a3b5d7a0b3d69eb1d49bafd398add196abcf93a9ce90a7cc8ea5cb8ba3c989a2c886a0c6849ec4819cc37e9ac17c98c07996be7794bd7492bb7290b96f8eb86d8db66a8bb56889b36587b16285b06083ae5e81ac5b7fab597da9567ba75479a65177a44f75a24c73a04a729e48709d456e9b436c99416a973f68953d66933a649138628f36608c345e8a325c88305a862f59842d57822b557f2a537d28517b274f78254e76244c74224a7121486f20476d1f456a1e43681d42661c40641b3f611a3d5f193c5d193a5a18395817375617365316345116334f15314d15304b142e48142d46132c44132a4213294012283e12273c12253a122437112335112233112132112030111f2e111e2c111d2a111c28111b27121b25121a24121a2212192113192013191e14181d14181c15181b15181a16191a171919181919181a18191a181a1b181b1c171c1c171e1d171f1e18201f1821201823211824231925241927251a28261a2a281b2b291c2d2b1c2f2c1d302d1e322f1f3330203532203734213835223a37233c38243e3a253f3c26413d27433f2845402946422a48442b4a452c4c472d4d492e4f4b2f514c31534e325550335751345853355a55365c57375e5838605a39625c3a645e3c66603d68613e69633f6b65406d67416f6943716b44736c45756e467770477972497b744a7d764b7f784c817a4e837b4f857d50877f528981538b83558d85568f8758918959948b5b968d5c988f5e9a91609c93619e9663a09865a29a67a49c69a69e6aa8a06caba26eada470afa772b1a975b3ab77b5ad79b7af7bb9b17dbbb380bdb682bfb884c1ba87c3bc89c5be8bc7c08ec9c390cbc593cdc795cfc998d1cb9ad3cd9dd5cf9fd7d2a2d9d4a4dad6a7dcd8a9dedaace0dcafe2deb1e4e1b4e6e3b6e8e5b9eae7bcece9beeeebc1f0eec3f1f0c6f3f2c9f5f4cbf7f6cef9f8d1fbfbd3fdfdd6ffffd9",
  managua: "ffcf67fecd66fdcb66fbc965fac764f9c564f8c363f6c162f5bf62f4bd61f3bb60f1b960f0b75fefb55eeeb35eecb15debb05deaae5ce9ac5be8aa5be6a85ae5a659e4a459e3a358e1a158e09f57df9d56de9c56dd9a55db9855da9654d99554d89353d79152d59052d48e51d38c51d28b50d18950cf874fce864fcd844ecc824dcb814dc97f4cc87e4cc77c4bc67b4bc5794ac3774ac27649c17449c07348be7148bd7047bc6f47bb6d46b96c46b86a45b76945b66745b46644b36444b26343b16243af6042ae5f42ad5e42ab5c41aa5b41a85940a75840a6573fa4553fa3543fa1533ea0513e9e503e9d4f3d9c4d3d9a4c3d984b3c97493c95483c94473b92463b91443b8f433b8e423a8c413a8a3f3a893e3a873d39863c39843b39823a398139397f38397e37397c36397a3539793439773339763239743139733039712f3a702f3a6e2e3a6d2d3a6b2d3b6a2c3b692b3c672b3c662a3d652a3d632a3e62293f61293f6029405f29415e29425d28435c28435b28445a284659294758294857294956294a552a4c542a4d542a4e532b50522b51522c53512d54512d56502e58502f594f305b4f315d4e315e4e32604e33624d34644d35664d36684d376a4c396b4c3a6d4c3b6f4c3c714c3d734c3f754c40774c41794c437b4c447d4c457f4c47814c48834c4a854c4b864d4c884d4e8a4d4f8c4d518e4d52904e54914e55934e57954f58974f5a984f5b9a505d9c505e9d51609f5161a15163a25264a45266a55367a75369a8546aaa546cab556eac556fae5671af5672b15774b25775b35877b55878b6597ab7597bb85a7dba5b7ebb5b80bc5c81bd5c83bf5d85c05d86c15e88c25f89c35f8bc5608dc6608ec76190c86292c96293cb6395cc6497cd6498ce659acf669cd0669ed2679fd368a1d468a3d569a5d669a6d76aa8d96baada6bacdb6caddc6dafdd6db1de6eb3df6fb5e16fb6e270b8e371bae472bce572bee673c0e774c2e974c4ea75c5eb76c7ec76c9ed77cbee78cdf078cff179d1f27ad3f37ad5f47bd7f57cd9f77cdbf87dddf97edffa7ee1fb7fe3fd80e5fe81e7ff",
  navia: "03132704152904162b04172c04182e041930051a32051b34051c36051d38051e3a05203c05213e05224005234205244405254605264806284a06294c062a4e062b50062c52062e54062f5606305806315a07325c07345e073560073662073764073966083a68083b6a083c6b083e6d093f6f0940710a41730a43740b44760b45780b46790c487b0d497d0d4a7e0e4c800e4d810f4e82104f8410518511528612538713548813568914578a15588b16598c175a8d175c8d185d8e195e8e1a5f8f1b608f1b61901c62901d63901e64911e65911f6691206791206891216991226a91226b91236c91246c91246d91256e90266f90266f9027709027718f28718f28728f29738f2a738e2a748e2b758e2b758d2c768d2c768d2d778c2d788c2e788c2f798b2f798b307a8b307a8a317b8a317c8a327c89327d89337d89347e88347e88357f88357f873680873680863781863781863882853983853983853a84843a84843b85843c85833c86833d86823d87823e88823f88813f8981408981408a80418a80428b7f428c7f438c7f448d7e448d7e458e7d468f7d478f7d47907c48917c49917b49927b4a937a4b937a4c947a4c95794d95794e96784f9778509877509877519976529a76539b75549b75559c74569d74579e73579f7358a07259a0725aa1715ba2715ca3705da4705ea56f5fa66f60a76e62a86e63a96d64aa6d65ab6c66ac6c67ad6b69ae6b6aaf6a6bb06a6db1696eb26970b36971b46973b56874b66876b76878b96879ba687bbb687dbc687fbd6881bf6883c06885c16987c26989c36a8cc56a8ec66b90c76c93c86d95ca6e98cb6f9acc709ccd729fce73a2cf74a4d176a7d278a9d379acd47baed57db1d67fb3d781b5d883b8d985bada87bcdb89bfdc8bc1dc8dc3dd90c5de92c7df94c9e096cbe098cde19bcfe29dd1e39fd3e3a1d5e4a3d7e5a5d8e5a8dae6aadce7acdde7aedfe8b0e0e8b2e2e9b4e3eab6e5eab8e6ebbae8ebbce9ecbeeaedbfebedc1edeec3eeeec5efefc6f0efc8f1f0caf3f0cbf4f1cdf5f1cff6f2d0f7f2d2f8f3d3f9f3d5faf3d6fbf4d7fcf4d9",
  naviaW: "04142704152904162b04172d05192f051a31051b33051c35051d37051e3905203b05213d06223f06234106244306264506274706284a06294c072b4e072c50072d52072f5407305608315808325a08345c08355e0936600938620939640a3a660a3c680a3d6a0b3e6b0b406d0c416f0c42710d44720e45740e46760f48770f4979104a7a114c7c114d7d124e7f135080145181145282155483165584175686185886185987195a881a5b891b5d8a1c5e8b1c5f8b1d608c1e618c1f628d20648d20658e21668e22678e23688e23698f246a8f256b8f266c8f266d8f276d8f286e8f286f8f29708f2a718f2a728f2b728f2b738e2c748e2d758e2d758e2e768e2e778d2f778d30788d30798d31798c317a8c327b8c337b8c337c8b347d8b347d8b357e8a367e8a367f8a3780893780893881893881883982883a83883a83873b84873c84873c85863d86863d86863e87853f87853f8885408984418984418a83428a83438b83438c82448c82458d82458e81468e81478f8048908048908049917f4a927f4b927e4b937e4c947e4d957d4e957d4f967c50977c50987c51997b52997b539a7a549b7a559c79569d79579d78589e78599f785aa0775ba1775ca2765da3765ea4755fa57560a67562a77463a87464a97365aa7367ab7368ac7269ad726bae726caf716eb0716fb27171b37172b47174b57176b67177b87179b9717bba717dbc717fbd7181be7283c07285c17287c27389c4748cc5748ec67590c87693c97795cb7898cc799acd7b9dcf7c9fd07da2d27fa4d381a7d482a9d684acd786afd888b1d98ab4db8cb6dc8eb9dd90bbde93bedf95c0e197c2e29ac5e39cc7e49ec9e5a1cbe6a3cde7a6cfe8a8d1e8abd3e9add5eaafd7ebb2d8ecb4daecb6dbedb9ddeebbdeeebde0efbfe1f0c2e3f0c4e4f1c6e5f1c8e6f2cae7f3cce8f3cee9f4d0eaf4d2ebf5d4ecf5d5edf5d7eef6d9eff6dbf0f7dcf1f7def1f8e0f2f8e1f3f8e3f3f9e4f4f9e6f5f9e7f6fae9f6faeaf7faecf7fbedf8fbeef9fbf0f9fcf1fafcf2fafcf3fbfdf5fbfdf6fcfdf7fcfdf8fdfef9fdfefbfefefcfefefd",
  nuuk: "05598c075a8c095a8c0b5a8b0d5b8b0e5b8b105b8a115b8a135c89145c89155c89175c88185d88195d881a5d871b5e871c5e871e5e861f5f86205f86215f862260852360852460852561852661842761842862842962842a63832b63832c63832d64832e64832f65833065823266823366823467823567823668823768823869823969823b6a823c6a823d6b823e6c823f6c82406d82426d82436e82446f82456f824670834871834971834a72834b73834d73844e74844f7584517584527685537785557885567886577986587a865a7a875b7b875c7c875e7d885f7d88607e88627f8963808964818a66818a67828a68838b6a848b6b848c6c858c6e868c6f878d70878d72888e73898e748a8f768b8f778b8f788c90798d907b8e917c8e917d8f917f90928091928191928292938493938594938694948795948996948a97958b97958c98958d99968e9a96909a96919b96929c96939c97949d97959e97969e97979f9798a09799a0979aa1989ba2989ca2989da3989ea4989fa498a0a598a1a698a2a698a2a798a3a798a4a897a5a897a6a997a6aa97a7aa97a8ab97a9ab97a9ac97aaac96abad96abad96acae96adae95adaf95aeaf95aeb095afb094b0b194b0b194b1b194b1b293b2b293b2b393b3b392b3b492b4b492b4b591b5b591b5b591b6b690b6b690b7b790b7b78fb7b78fb8b88eb8b88eb9b98eb9b98dbab98dbaba8dbaba8cbbbb8cbbbb8bbcbb8bbcbc8bbdbc8abdbd8abdbd8abebd89bebe89bfbe88bfbf88c0bf88c0c087c0c087c1c187c1c186c2c186c2c286c3c285c3c385c4c385c4c485c5c484c5c584c6c684c7c684c7c784c8c783c8c883c9c983cac983caca83cbcb83cccb83cdcc83cdcd83cece83cfcf84d0cf84d1d084d2d184d2d285d3d385d4d486d5d586d6d687d7d787d8d888d9d988dbda89dcdb8adddd8bdede8cdfdf8de0e08ee1e18fe3e290e4e391e5e592e6e693e7e794e8e895e9e997ebea98eceb99eded9aeeee9cefef9df0f09ef1f1a0f2f2a1f3f3a3f4f4a4f5f5a5f6f6a7f7f7a8f8f8aaf9f9abfafaadfbfbaefcfcaffdfdb1fefeb2",
  oleron: "1a26591b285b1d295c1e2b5e202c5f212e61232f622431642632652834672935682b376a2c386b2e3a6d2f3b6f313d70323f723440733542753743763945783a477a3c487b3d4a7d3f4b7e414d80424f824450834552854754874955884a578a4c598c4e5a8d4f5c8f515e91535f925461945663965864975966995b689b5d699c5e6b9e606da0626fa26470a36572a56774a76975a96b77aa6c79ac6e7bae707db0727eb17380b37582b57784b77985b87a87ba7c89bc7e8bbe808dc0828ec18390c38592c58794c78996c98b97ca8d99cc8e9bce909dd0929fd294a1d396a2d598a4d799a6d99ba8db9daadc9facdea1ade0a3afe1a4b1e3a6b3e5a8b5e6aab7e8acb8e9adbaeaafbcecb1bdedb2bfeeb4c1efb6c2f0b7c4f1b9c6f2bac7f3bcc9f3bdcaf4bfcbf4c0cdf5c2cef5c3d0f6c4d1f6c6d2f7c7d4f7c8d5f8cad6f8cbd8f8ccd9f9cedaf9cfdcf9d0ddfad2defad3e0fad4e1fbd6e2fbd7e4fbd8e5fcdae6fcdbe8fcdce9fddeeafddfecfde0edfee2eefee3f0fee4f1ffe6f2ff1a4c001d4d001f4e00224f00254f002750002a51002c51002f52003153003354003554003855003a56003c56003e5700405700425800445900465900495a014b5b014d5c014f5c02515d02535e02555f035760045a60055c61065e620760630963640a65660c67670e6a68106c69126e6a14716c16736d18756e1a78701d7a711f7c72217e742381752583762885782a87792c8a7b2e8c7c318e7d33907f3592803794823a97833c99843e9b86409d87439f8945a18a47a38c49a68d4ca88f4eaa9050ac9253ae9355b19557b39759b5985cb79a5eba9c60bc9d63be9f65c1a167c3a36ac5a46cc7a66ecaa871ccaa73ceac75d1ad78d3af7ad5b17cd7b37fd9b581dcb684deb886e0ba89e2bc8be4be8ee5c090e7c293e9c495eac598ecc79aedc99deecb9ff0cda2f1cea4f2d0a7f2d2a9f3d4abf4d5aef5d7b0f5d9b2f6dab5f6dcb7f7deb9f7dfbcf7e1bef8e2c0f8e4c3f8e6c5f9e7c7f9e9c9f9eaccfaeccefaeed0faefd3fbf1d5fbf3d7fbf4dafbf6dcfcf8defcf9e1fcfbe3fdfde6",
  oslo: "01010101020302040502050703060904070b04080d05090f050a10060b12060c13070d15080e16080f170910180911190a121b0b131c0b131d0b141e0c151f0c16200d16220d17230d18240d19250d19270d1a280d1b290e1b2a0e1c2c0e1d2d0e1e2e0e1e2f0e1f310e20320f21330f21350f22360f23370f24390f253a10263c10263d10273e102840102941112a43112b44112b45112c47122d48122e4a122f4b12304c13314e13324f13325114335214345414355514365715375815385a15395b163a5d163b5e173b60173c61173d63183e64183f6619406719416919426a1a436c1a446d1b456f1b46701c47721c48731d48751d49761e4a781e4b7a1f4c7b204d7d204e7e214f8021508122518323528523538624548825558926568b26578c27588e285990295a912a5b932b5c942c5d962d5e982e5f992f609b30619c31629e3263a03364a13465a33666a43767a63869a83a6aa93b6bab3d6cac3e6dae406eaf4170b14371b24472b34673b54775b64976b84b77b94c78ba4e7abb507bbc517cbd537dbe547ebf567fc05881c15982c25b83c35c84c35e85c46086c56187c56388c66489c6658ac7678bc7688cc76a8dc86b8ec86c8fc86e90c86f90c97091c97292c97393c97494c97594c97795c97896c97997ca7a98ca7b98ca7d99ca7e9aca7f9bca809bca819cca839dca849eca859eca869fca87a0ca89a0ca8aa1ca8ba2c98ca3c98da3c98ea4c990a5c991a6c992a6c993a7c994a8c996a9c997a9c998aac999abc99aacc99cacc99dadc99eaec99fafc9a0afc9a2b0caa3b1caa4b2caa5b3caa7b4caa8b4caa9b5caaab6caacb7caadb8cbaeb9cbb0bacbb1bbcbb2bcccb4bdccb5bdccb6becdb8bfcdb9c1cdbac2cebcc3cebdc4cfbfc5cfc0c6d0c2c7d1c3c8d1c5c9d2c6cbd3c7ccd3c9cdd4caced5ccd0d6ced1d7cfd2d8d1d3d9d2d5dad4d6dbd5d8dcd7d9ddd8dadedadcdfdbdde0dddee1dee0e2e0e1e4e2e3e5e3e4e6e5e6e7e6e7e9e8e9eae9eaebebecedecedeeeeeeefeff0f1f1f1f2f3f3f4f4f4f5f6f6f6f7f7f8f9f9f9fafafbfcfcfcfdfdfeffffff",
  roma: "7e17007f1a01801d02812003822204832504842705852a06862c06872e078830088a32088b34098c360a8d380b8e3a0b8f3c0c903e0d90400e91420f92440f934610944711954912964b12974d13984e149950149952159a53169b55179c57179d58189e5a199e5c199f5d1aa05f1ba1611ca2621ca2641da3651ea4671ea5681fa66a20a66c20a76d21a86f22a97023a97223aa7324ab7525ac7726ad7826ad7a27ae7c28af7d29b07f2ab0802bb1822cb2842db3862eb4872fb58930b58b31b68c32b78e33b89034b99235ba9437ba9538bb9739bc993bbd9b3cbe9d3ebf9f40c0a141c1a343c1a545c2a647c3a848c4aa4ac5ac4cc6ae4fc7b051c7b253c8b455c9b658cab85acbba5dcbbc5fccbe62cdc064cec267cec46acfc66dcfc86fd0ca72d0cc75d1cd78d1cf7bd2d17ed2d381d2d484d2d687d2d78ad2d98dd2da90d2dc93d2dd96d2de98d1df9bd1e19ed1e2a1d0e3a3d0e4a6cfe5a8cee5abcde6adcce7b0cce7b2cbe8b4c9e9b6c8e9b8c7e9bac6eabcc4eabec3eac0c1eac2c0eac3beeac5bdeac6bbeac8b9eac9b7eacab5eaccb3e9cdb1e9ceafe8cfade8d0abe7d1a9e7d2a6e6d2a4e5d3a2e5d49fe4d49de3d59be2d598e1d695e0d693dfd690ded78eddd78bdcd789dad786d9d783d8d781d7d77ed5d77bd4d779d2d776d1d774cfd671ced66eccd66ccbd669c9d567c7d564c6d562c4d460c2d45dc1d35bbfd359bdd257bcd255bad153b8d151b7d04fb5d04db3cf4bb2ce49b0ce47aecd46accc44abcc43a9cb41a7cb40a6ca3ea4c93da2c93ca1c83a9fc7399dc7389cc6379ac53698c53597c43495c33394c33292c23190c1308fc1308dc02f8cbf2e8abf2d88be2d87bd2c85bd2b84bc2b82bb2a81bb297fba297eb9287cb9287ab82779b72677b72676b62574b52573b52471b4246fb3236eb3236cb2226ab12269b02167b02166af2064ae2062ae1f60ad1e5fac1e5dab1d5bab1d5aaa1c58a91b56a81b54a81a53a71951a6194fa5184da4174ca4164aa31548a21446a11344a01242a011409f0f3f9e0e3d9d0c3b9c0b399c09379b07359a053399033198",
  romaO: "73395774395675395475385376385177385077384f78384d79384c79384b7a38497b38487c38477c39467d39457e39437e39427f3a41803a40813b3f813b3e823c3d833c3c843d3b843d3a853e39863f388740378740378841368942358a43348b44338c45338c46328d47318e48318f4930904a30914c2f924d2f934e2e94502e94512d95522d96542d97552c98572c99582c9a5a2c9b5b2c9c5d2b9d5f2b9e602b9f622ba0642ca2662ca3672ca4692ca56b2da66d2da76f2da8712ea9732eaa752fab7730ad7930ae7b31af7d32b07f33b18134b28335b48636b58837b68a39b78c3ab88e3bb9913dbb933fbc9540bd9842be9a44bf9c46c19f47c2a149c3a34bc4a54ec5a850c6aa52c8ac54c9af57cab159cbb35cccb55ecdb861ceba63cfbc66cfbe68d0c06bd1c26ed2c470d2c673d3c876d4c978d4cb7bd4cd7ed5ce81d5d083d5d186d6d388d6d48bd6d58ed6d790d6d893d5d995d5da98d5db9ad4dc9cd4dd9fd3dda1d3dea3d2dfa5d1dfa7d0e0a9cfe0abcee0adcde1afcce1b1cbe1b3cae1b5c8e1b6c7e1b8c5e1b9c4e1bbc2e1bcc1e1bebfe1bfbde0c0bbe0c2b9dfc3b8dfc4b6dec5b4dec6b1ddc7afdcc8addcc8abdbc9a9dacaa7d9cba4d8cba2d7cca0d6cc9dd5cd9bd4cd99d3ce96d1ce94d0ce92cfce8fcecf8dcccf8bcbcf88c9cf86c8cf84c6cf81c5cf7fc3cf7dc2ce7bc0ce78bece76bdce74bbcd72b9cd70b8cd6eb6cc6cb4cc6ab2cb68b1cb67afca65adca63abc962a9c960a8c85fa6c75da4c75ca2c65aa0c5599ec4589cc4579bc35699c25597c15495c05393bf5291be528fbd518dbc508bbb508aba4f88b94f86b84f84b74f82b64e80b44e7eb34e7cb24e7ab04f78af4f76ae4f75ac4f73ab5071a9506fa8516da6516ba45269a35267a153669f54649e54629c55609a565f98575d96575b945859935958915a568f5b558d5c538b5c52895d50875e4f855f4d83604c81614b7f62497d63487b63477964467765457666447467437268427068416e69406c6a3f6b6b3f696c3e676c3d656d3d646e3c626f3b606f3b5f703a5d713a5c723a5a723959",
  tofino: "ded9ffdbd7fed9d5fdd6d3fbd3d1fad0cff9cecdf8cbcbf7c8caf6c6c8f4c3c6f3c0c4f2bec2f1bbc0f0b8beefb6bcedb3bbecb0b9ebaeb7eaabb5e9a8b3e8a6b1e6a3afe5a0ade49eace39baae298a8e196a6df93a4de90a2dd8ea0dc8b9fdb889dd9869bd88399d78097d57e95d47b93d37991d1768fd0738dce718bcd6e89cb6b87ca6985c86683c66481c5617fc35f7dc15c7bbf5a79bd5777ba5575b85373b65171b44f6fb14c6daf4a6bac4969aa4767a74565a54363a24262a040609d3e5e9a3d5c983c5a953a599339579038558d37548b355288345086334f83324d80314c7e304a7b2f49792e47762d45742c44712b426f2a416c293f6a283e67273c65263b62253a6024385d23375b2235592234562132542031511f304f1e2e4d1d2d4a1c2b481c2a461b29431a284119263f19253d18243b172338162136162034151f32151e30141d2e131c2c131b2a121a2812192611182411182311172110162010161e0f151d0f151b0e151a0e15190d15180d15170d15160d15150d15140d16130d16130d17120d17120d18120e19120e1a110f1b120f1c12101c12101e12111f12112013112113122214122314132515132615142716142916152a17152c18162d18162f1917301a18321a18331b19351c1a361c1a381d1b391e1c3b1f1d3d201d3e201e40211f4222204323204524214725224825234a26234c27244d28254f2926512a27532b27542c28562c29582d2a5a2e2b5b2f2c5d302c5f312d61322e62332f6434306635316836326a37336c38346d39356f3a36713b37733c38753d39773e3a793f3b7b403d7d413e7f423f8144418345428546448747468949488b4a4a8d4b4c8f4d4e914e509350529551559753579a545a9c565c9e575fa05962a25a64a45c67a65e6aa85f6da96170ab6373ad6476af6679b1677cb3697fb46b82b66c85b86e88b9708bbb718ebd7391be7494c07697c2789ac3799dc57ba0c67ca3c87ea6ca7fa9cb81accd83afce84b2d086b5d187b7d389bad48abdd68cc0d88dc3d98fc6db91c9dc92ccde94cfdf95d2e197d5e298d8e49adbe69b",
  tokyo: "1c0e341d0f341f0f352110352310362410362611372811382912382b12392d13392f133a30143a32153b34153c35163c37163d39173d3a183e3c193e3e193f3f1a40411b40431c41441d41461e42481e43491f434b20444c21444e22454f2345512446522646532747552847562948572a48592b495a2c495b2d495c2f4a5d304a5e314b5f324b60334b61344c62354c63374c64384d64394d653a4d663b4d663c4e673d4e683e4e683f4e69404e69414f6a424f6a434f6a444f6b454f6b464f6c47506c48506c49506c4a506d4b506d4b506d4c506d4d506e4e506e4f506e4f516e50516e51516f52516f52516f53516f54516f54516f55516f5651705651705751705851705851705951705951705a52705b52705b52705c52715c52715d52715d52715e52715e52715f52715f52716052716152716152716252716252726352726352726452726452726552726552726653726753726753726853726853736953736953736a53736b53736b53736c53736d53736d53736e53746e53746f53747053747153747153747254747354747354747454757554757654757754757754757854757954757a54767b54767c54767c54767d55767e55767f55778055778155778255778355778455788555788656788756788856788956798a56798b56798d57798e57798f577a90577a91577a92587b94587b95587b96587b97597c98597c9a597c9b5a7d9c5a7d9e5a7d9f5b7ea05b7ea25c7fa35c7fa45d80a65d80a75e81a95e81aa5f82ac6082ad6083af6184b06284b26385b36486b56587b66687b86788b96889bb698abd6a8bbe6b8cc06d8dc16e8ec3708fc57191c67392c87493ca7695cb7896cd7998cf7b99d07d9bd27f9cd4819ed583a0d785a2d887a4da8aa5dc8ca7dd8ea9df90abe093ade295afe398b2e49ab4e69cb6e79fb8e8a1baeaa4bceba6beeca9c1edabc3eeadc5efb0c7f0b2c9f1b4cbf2b7cdf3b9cff4bbd1f4bdd3f5bfd5f6c1d6f6c3d8f7c5daf7c7dcf8c9ddf8cadff9cce0f9cee2f9cfe3fad1e5fad2e6fad4e8fbd5e9fbd7eafbd8ebfbd9edfcdaeefcdceffcdd",
  turku: "0000000202020404030606050707070909080b0b0a0d0d0c0e0e0d10100e1111101212111413121515131616141717151818161919171a1a181b1b191c1c191d1d1a1e1e1b1f1f1c20201d21211e22221f23231f2424202525212626222727232828232929242a2a252b2b262c2c272d2d272e2e282f2f2930302a32312a33322b34332c35342d36362d37372e38382f3939303a3a303b3b313c3c323d3d323e3e333f3f3440403441413542423543433644443745453746463847473848483949493a4b4a3a4c4b3b4d4c3b4e4d3c4f4e3c504f3d51503d52513e53523e54533f55543f5656405757405858415959415a5a425b5b425c5c435d5d435e5e445f5f446060456161456262466363466464476565476666476767486868486a69496b6a496c6b4a6d6c4a6e6d4b6f6e4b706f4c71704c72714d73724d75734e76744e77754f78764f7977507b79507c7a517d7b517e7c527f7d52817e53827f538380548581548682558783568984568a85578b86588d87588e8859908a59918b5a938c5b948d5b968e5c978f5d99905e9a915e9c925f9d93609f9461a19461a29562a49663a59764a79864a99965aa9a66ac9a67ad9b68af9c68b09d69b29d6ab39e6bb59f6cb69f6cb8a06db9a06ebba16fbca170bea270bfa271c0a272c2a373c3a374c4a474c6a475c7a476c8a477c9a578cba578cca579cda57acea67bcfa67cd0a67cd1a67dd2a67ed3a67fd4a780d6a780d7a781d8a782d9a783daa784dba885dba886dca887dda888dea889dfa98ae0a98be1a98ce2a98de3aa8ee4aa8fe5aa90e6ab92e7ab93e8ac94e9ac95e9ad97eaad98ebae99ecae9bedaf9ceeb09eefb09fefb1a1f0b2a2f1b3a3f2b3a5f2b4a7f3b5a8f4b6aaf4b7abf5b8adf6b9aef6bab0f7bbb1f7bcb3f8bdb4f8beb6f9bfb7f9c0b9fac1bafac2bcfbc3bdfbc4bffbc5c0fcc6c1fcc7c3fcc8c4fdc9c6fdcbc7fdccc8fdcdcafdcecbfecfccfed0cefed1cffed2d0fed3d1fed4d3fed6d4fed7d5ffd8d6ffd9d7ffdad9ffdbdaffdcdbffdddcffdeddffdfdfffe0e0ffe2e1ffe3e2ffe4e3ffe5e5ffe6e6",
  vanimo: "ffcdfdfdcafbfcc7f9fac4f7f9c1f4f7bef2f6bbf0f4b9eef3b6ecf1b3eaf0b0e8eeade6ecabe4eba8e2e9a5e0e8a2dee6a0dce59ddae39ad8e298d6e095d4de93d2dd90d0db8eceda8bccd889cad786c8d584c6d381c4d27fc2d07dc0cf7abfcd78bdcb76bbca73b9c871b7c76fb5c56db3c36bb2c269b0c067aebe65acbd63aabb61a8b95fa7b85da5b65ba3b45aa1b2589fb1569eaf559cad539aab5198a95096a74e94a54c92a34b90a1498e9f488c9d468a9b4488994386964184944082923e80903d7e8d3c7b8b3a798839778637758336728135707e336e7c326b793169763067742e64712d626e2c606c2b5d692a5b6629596427566126545e25515c244f59234d56224a5421485121464f20444c1f41491e3f471d3d451c3b421c39401b373e1a353b1a3339193137192f35182d33172c31172a2f17282e16272c16252a152429152328152126152025141f24141e23141d22141c21141b20141a1f14191e14181d14181d14171c14161c14161b14151b14151a14141a15141a15131a15131916131916121916121917121917121918111918111a19111a1a111a1a111a1b111b1c111b1d111b1e111c1f111c20111d21121d22121e24121f25121f2612202713212913222a13232c14232d14242f142530142632152734152935162a37162b39162c3b172d3c172e3e182f401831421832441933461934471a36491a374b1b384d1b3a4f1c3b511c3c531d3d551d3f561e40581f415a1f435c20445e204560214762214863224965234b67234c69244d6b244e6c25506e25517026527227547427557528567729577929597b2a5a7c2a5b7e2b5c802c5e812d5f832d60852e62872f63882f648a30658c31678e326890336a92346b93356c95366e97376f9938719b39729d3b749f3c75a13d77a33f79a6407aa8427caa437eac457fae4781b04983b34b85b54d87b74f88ba518abc538cbe558ec15890c35a92c65d94c86096cb6298cd659ad0689cd26b9ed56ea0d772a2da75a4dd78a6df7ca9e27fabe483ade786afea8ab1ec8eb3ef92b5f295b7f599baf79dbcfaa1befda5",
  vik: "001261011462011563011764011865011a66021c67021d68021f6902206a02226b02236c02256d02276e02286f022a70022b71022d72022e7302307402317502337602347702367802377902397a023a7b033c7c033e7d033f7e03417f034280034481034582034783034984034a85044c86044d87044f8805518905528a06548b06568c07578d08598f095b900b5d910c5e920e6093106294116496136697156798176999196b9a1c6d9c1e6f9d20719e2373a02575a12877a22b79a42d7ba5307da6337fa83681a93983ab3c85ac3f87ad4289af458bb0488db24b90b34e92b45194b65496b75798b95a9aba5d9cbb619ebd64a0be67a2c06aa4c16da6c271a8c474aac577acc67aaec87db0c980b2ca84b4cc87b6cd8ab8ce8dbad090bcd194bed297c0d49ac2d59dc4d6a0c5d8a3c7d9a7c9daaacbdcadcdddb0cfdeb3d1dfb6d3e1bad5e2bdd6e3c0d8e4c3dae5c6dbe6c9dde7ccdfe8cfe0e8d2e1e9d5e3e9d8e4e9dbe5e9dee6e9e0e6e9e2e7e8e5e7e8e7e7e7e8e7e5eae6e4ebe6e2ece5e0ede4deeee3dceee1daeee0d8eeded5eeddd3eedbd0eed9cdedd7cbedd5c8ecd3c5ecd1c3ebd0c0eacebde9ccbae9cab8e8c8b5e7c6b2e6c4b0e5c1ade4bfaae4bea8e3bca5e2baa2e1b8a0e0b69ddfb49adfb298deb095ddae93dcac90dbaa8ddba88bdaa688d9a486d8a283d7a081d69f7ed69d7cd59b79d49977d39774d39572d29470d1926dd0906bcf8e68cf8c66ce8b64cd8961cc875fcc855dcb835aca8258c98056c97e53c87c51c77b4fc6794cc6774ac57548c47445c37243c27041c26e3fc16d3cc06b3abf6938be6736be6533bd6431bc622fbb602dba5e2ab85c28b75a26b65824b55521b3531fb2511db04f1baf4c18ad4a16ab4814a94512a74310a5400fa33e0da13c0b9f390a9c37099a3508983307963107942f06912d068f2b068d29068b2706892606872406852206832106811f067f1e067e1d067c1b067a1a067818067617067415067314067113076f11076d10076c0e076a0d07680c07670a076509076307076206076004085e03085d02085b0108590008",
  vikO: "4f1a3d4e1a3e4e1b3f4d1b414c1c424b1d434b1d444a1e46491f4748204948214a47214b46224d45234e452450442551432653432754422856412958402a593f2c5b3f2d5d3e2e5e3d2f603d31623c32633b33653a35673a366839386a38396c383b6e373c6f363e71363f7335417435437634447834467a34487b34497d334b7f334d80334f8233518433528534548734568934588a355a8c355c8d365e8f375f903861923963943a65953b67973c69983d6b9a3f6d9b406f9c42719e43739f4575a14777a24979a44b7ba54d7da64f7fa85181a95383ab5585ac5787ad5a89af5c8bb05e8db1618fb26391b46693b56895b66b97b76d98b8709aba729cbb759ebc78a0bd7aa2be7da4bf80a5c083a7c185a9c288aac28bacc38eaec490afc593b1c596b2c699b4c69bb5c79eb6c7a1b8c8a4b9c8a6bac8a9bbc8abbcc8aebdc8b0bec8b3bfc8b5c0c8b8c0c7bac1c7bcc1c6bec2c6c0c2c5c2c2c4c4c2c3c6c3c2c8c3c1c9c2c0cbc2bfcdc2becec2bccfc1bbd1c1b9d2c0b8d3c0b6d4bfb5d5beb3d5bdb1d6bdafd7bcadd7bbacd8baaad8b8a8d9b7a6d9b6a4d9b5a1d9b49fd9b29dd9b19bd9af99d9ae97d9ac94d9ab92d9a990d8a88dd8a68bd8a589d7a387d7a184d6a082d59e80d59c7dd49a7bd49879d39776d29574d19372d0916fd08f6dcf8d6bce8b68cd8a66cc8864cb8661ca845fc8825dc7805bc67e58c57c56c47954c27752c1754fc0734dbe714bbd6f49bb6d47ba6a45b86843b76641b5643fb3623db25f3bb05d39ae5b37ac5935aa5633a95432a75230a5502fa34d2da14b2c9f492a9d47299b4528994327974126953e25933c24913b238f39228d37218c35218a332088312086301f842e1f822c1f812b1e7f291e7d281e7c271e7a251e79241e77231e76221f74211f73201f721f1f701e206f1d206e1c206c1b216b1a216a1a226919226819236718236618246517256417256316266216276116276016285f16295e152a5d152b5c152b5b152c5a152d5a152e59152f58163057163156163256163355163454173553173653173752183851183950193a50193c"
}, s1 = {};
for (const [t, e] of Object.entries($m))
  s1[t] = Km(Qm(e));
const ep = [{ id: "d3_perceptual", label: "D3 — Perceptually Uniform", colormaps: [{ id: "viridis", label: "Viridis", source: "d3", enabled: !0 }, { id: "inferno", label: "Inferno", source: "d3", enabled: !0 }, { id: "magma", label: "Magma", source: "d3", enabled: !0 }, { id: "plasma", label: "Plasma", source: "d3", enabled: !0 }, { id: "cividis", label: "Cividis", source: "d3", enabled: !0 }] }, { id: "d3_sequential", label: "D3 — Sequential", colormaps: [{ id: "turbo", label: "Turbo", source: "d3", enabled: !0 }, { id: "cubehelixDefault", label: "Cubehelix", source: "d3", enabled: !0 }, { id: "greys", label: "Greys", source: "d3", enabled: !0 }, { id: "warm", label: "Warm", source: "d3", enabled: !0 }, { id: "cool", label: "Cool", source: "d3", enabled: !0 }, { id: "blues", label: "Blues", source: "d3", enabled: !1 }, { id: "greens", label: "Greens", source: "d3", enabled: !1 }, { id: "oranges", label: "Oranges", source: "d3", enabled: !1 }, { id: "purples", label: "Purples", source: "d3", enabled: !1 }, { id: "reds", label: "Reds", source: "d3", enabled: !1 }, { id: "bugn", label: "Blue-Green", source: "d3", enabled: !1 }, { id: "bupu", label: "Blue-Purple", source: "d3", enabled: !1 }, { id: "gnbu", label: "Green-Blue", source: "d3", enabled: !1 }, { id: "orrd", label: "Orange-Red", source: "d3", enabled: !1 }, { id: "pubu", label: "Purple-Blue", source: "d3", enabled: !1 }, { id: "pubugn", label: "Purple-Blue-Green", source: "d3", enabled: !1 }, { id: "purd", label: "Purple-Red", source: "d3", enabled: !1 }, { id: "rdpu", label: "Red-Purple", source: "d3", enabled: !1 }, { id: "ylgn", label: "Yellow-Green", source: "d3", enabled: !1 }, { id: "ylgnbu", label: "Yellow-Green-Blue", source: "d3", enabled: !1 }, { id: "ylorbr", label: "Yellow-Orange-Brown", source: "d3", enabled: !1 }, { id: "ylorrd", label: "Yellow-Orange-Red", source: "d3", enabled: !1 }] }, { id: "d3_cyclical", label: "D3 — Cyclical", colormaps: [{ id: "rainbow", label: "Rainbow", source: "d3", enabled: !1 }, { id: "sinebow", label: "Sinebow", source: "d3", enabled: !1 }] }, { id: "crameri_sequential", label: "Crameri — Sequential", colormaps: [{ id: "acton", label: "Acton", source: "imported", enabled: !0 }, { id: "bamako", label: "Bamako", source: "imported", enabled: !0 }, { id: "batlow", label: "Batlow", source: "imported", enabled: !0 }, { id: "batlowK", label: "BatlowK", source: "imported", enabled: !0 }, { id: "batlowW", label: "BatlowW", source: "imported", enabled: !0 }, { id: "bilbao", label: "Bilbao", source: "imported", enabled: !0 }, { id: "buda", label: "Buda", source: "imported", enabled: !0 }, { id: "davos", label: "Davos", source: "imported", enabled: !0 }, { id: "devon", label: "Devon", source: "imported", enabled: !0 }, { id: "glasgow", label: "Glasgow", source: "imported", enabled: !0 }, { id: "grayC", label: "GrayC", source: "imported", enabled: !0 }, { id: "hawaii", label: "Hawaii", source: "imported", enabled: !0 }, { id: "imola", label: "Imola", source: "imported", enabled: !0 }, { id: "lajolla", label: "LaJolla", source: "imported", enabled: !0 }, { id: "lapaz", label: "LaPaz", source: "imported", enabled: !0 }, { id: "lipari", label: "Lipari", source: "imported", enabled: !0 }, { id: "navia", label: "Navia", source: "imported", enabled: !0 }, { id: "naviaW", label: "NaviaW", source: "imported", enabled: !0 }, { id: "nuuk", label: "Nuuk", source: "imported", enabled: !0 }, { id: "oslo", label: "Oslo", source: "imported", enabled: !0 }, { id: "tokyo", label: "Tokyo", source: "imported", enabled: !0 }, { id: "turku", label: "Turku", source: "imported", enabled: !0 }] }, { id: "crameri_diverging", label: "Crameri — Diverging", colormaps: [{ id: "bam", label: "Bam", source: "imported", enabled: !0 }, { id: "berlin", label: "Berlin", source: "imported", enabled: !0 }, { id: "broc", label: "Broc", source: "imported", enabled: !0 }, { id: "cork", label: "Cork", source: "imported", enabled: !0 }, { id: "lisbon", label: "Lisbon", source: "imported", enabled: !0 }, { id: "managua", label: "Managua", source: "imported", enabled: !0 }, { id: "roma", label: "Roma", source: "imported", enabled: !0 }, { id: "tofino", label: "Tofino", source: "imported", enabled: !0 }, { id: "vanimo", label: "Vanimo", source: "imported", enabled: !0 }, { id: "vik", label: "Vik", source: "imported", enabled: !0 }] }, { id: "crameri_multi_sequential", label: "Crameri — Multi-Sequential", colormaps: [{ id: "bukavu", label: "Bukavu", source: "imported", enabled: !0 }, { id: "fes", label: "Fes", source: "imported", enabled: !0 }, { id: "oleron", label: "Oleron", source: "imported", enabled: !0 }] }, { id: "crameri_cyclic", label: "Crameri — Cyclic", colormaps: [{ id: "bamO", label: "BamO", source: "imported", enabled: !0 }, { id: "brocO", label: "BrocO", source: "imported", enabled: !0 }, { id: "corkO", label: "CorkO", source: "imported", enabled: !0 }, { id: "romaO", label: "RomaO", source: "imported", enabled: !0 }, { id: "vikO", label: "VikO", source: "imported", enabled: !0 }] }], tp = {
  groups: ep
}, ap = {
  // Sequential (single-hue)
  viridis: $i,
  inferno: Xu,
  magma: Gu,
  plasma: qu,
  cividis: zu,
  turbo: Wu,
  // Sequential (multi-hue)
  warm: Vu,
  cool: Yu,
  cubehelixDefault: Uu,
  // Single-hue sequential
  blues: Du,
  greens: Cu,
  greys: Eu,
  oranges: Ou,
  purples: Nu,
  reds: Fu,
  // Multi-hue sequential
  bugn: ru,
  bupu: iu,
  gnbu: ou,
  orrd: fu,
  pubu: hu,
  pubugn: du,
  purd: mu,
  rdpu: gu,
  ylgn: wu,
  ylgnbu: vu,
  ylorbr: ku,
  ylorrd: Mu,
  // Cyclical
  rainbow: Hu,
  sinebow: Bu
}, en = {
  ...ap,
  ...s1
}, _n = "viridis";
function rp() {
  return tp.groups.map((t) => ({
    label: t.label,
    colormaps: t.colormaps.filter((e) => e.enabled && e.id in en).map((e) => ({ id: e.id, label: e.label }))
  })).filter((t) => t.colormaps.length > 0);
}
rp();
function bc(t) {
  return t.startsWith("custom:");
}
function f1(t) {
  return bc(t) ? t.slice(7) : null;
}
function Io(t) {
  return t in en;
}
function np(t) {
  return t.length < 2 ? (console.warn("Custom colormap needs at least 2 colors, using fallback"), en[_n]) : z2(ti, t);
}
function oi(t, e, a) {
  const { reverse: n = !1, trim: i } = a ?? {};
  let c;
  if (bc(t)) {
    const o = f1(t), s = o ? e?.get(o) : null;
    s ? c = np(s.colors) : (console.warn(`Custom colormap "${o}" not found, using default`), c = en[_n]);
  } else Io(t) ? c = en[t] : (console.warn(`Unknown colormap "${t}", using default`), c = en[_n]);
  return (o) => {
    let s = o;
    if (i) {
      const [f, d] = i;
      s = f + s * (d - f);
    }
    return n && (s = 1 - s), c(s);
  };
}
function ip(t) {
  const e = t.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (e)
    return [parseInt(e[1], 10), parseInt(e[2], 10), parseInt(e[3], 10), 255];
  const a = t.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  return a ? [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16), 255] : (console.warn(`Could not parse color: ${t}`), [255, 0, 255, 255]);
}
function l1(t = _n, e, a = 256, n) {
  const i = oi(t, e, n), c = new Uint8ClampedArray(a * 4);
  for (let o = 0; o < a; o++) {
    const s = o / (a - 1), f = i(s), [d, h, b, m] = ip(f), p = o * 4;
    c[p] = d, c[p + 1] = h, c[p + 2] = b, c[p + 3] = m;
  }
  return c;
}
function No(t, e, a = 0, n = 0) {
  switch (t) {
    case "circle":
      return null;
    case "triangle": {
      const i = n - e, c = n + e * 0.577;
      return `M${a},${i} L${a + e},${c} L${a - e},${c} Z`;
    }
    case "square": {
      const i = e * 0.9;
      return `M${a - i},${n - i} L${a + i},${n - i} L${a + i},${n + i} L${a - i},${n + i} Z`;
    }
    case "diamond":
      return `M${a},${n - e} L${a + e},${n} L${a},${n + e} L${a - e},${n} Z`;
    case "star": {
      const i = e * 0.4, c = [];
      for (let o = 0; o < 10; o++) {
        const s = o * Math.PI / 5 - Math.PI / 2, f = o % 2 === 0 ? e : i, d = o === 0 ? "M" : "L";
        c.push(`${d}${a + Math.cos(s) * f},${n + Math.sin(s) * f}`);
      }
      return c.join(" ") + " Z";
    }
  }
}
var cp = /* @__PURE__ */ U('<line style="pointer-events: none"></line>'), op = /* @__PURE__ */ U('<path fill="none" stroke-linecap="butt" style="pointer-events: none"></path>'), sp = /* @__PURE__ */ U('<rect fill="none" style="pointer-events: none"></rect>'), fp = /* @__PURE__ */ U('<circle style="pointer-events: none"></circle>'), lp = /* @__PURE__ */ U('<path style="pointer-events: none"></path>'), dp = /* @__PURE__ */ U('<!><rect role="button" tabindex="0" aria-label="Event interval"><title><!> </title></rect><!><!><!>', 1);
function up(t, e) {
  it(e, !0);
  const a = ma();
  let n = /* @__PURE__ */ u(() => Ia(e.layer.source, e.layer.id)), i = /* @__PURE__ */ u(() => r(n) ? a.getViewportData(r(n)) : void 0), c = /* @__PURE__ */ u(() => r(i)?.records ?? []), o = /* @__PURE__ */ u(() => Br(r(c), e.layer.filter, a.drivers)), s = /* @__PURE__ */ u(() => wt(e.layer.parameter_mapping.start)), f = /* @__PURE__ */ u(() => wt(e.layer.parameter_mapping.end)), d = /* @__PURE__ */ u(() => wt(e.layer.parameter_mapping.anchor)), h = /* @__PURE__ */ u(() => wt(e.layer.parameter_mapping.color_map_key)), b = /* @__PURE__ */ u(() => wt(e.layer.parameter_mapping.y_map_key)), m = /* @__PURE__ */ u(() => wt(e.layer.parameter_mapping.value)), p = /* @__PURE__ */ u(() => e.layer.style && typeof e.layer.style == "object" && !("$driver" in e.layer.style) ? e.layer.style : {}), g = /* @__PURE__ */ u(() => r(p).vertical_placement ?? "constant"), v = /* @__PURE__ */ u(() => r(p).constant_y ?? 0.5), k = /* @__PURE__ */ u(() => r(p).y_category_map ?? {}), S = /* @__PURE__ */ u(() => r(p).y_fallback ?? 0.5), N = /* @__PURE__ */ u(() => r(p).bar_height ?? 0.5), I = /* @__PURE__ */ u(() => Math.abs(e.yScale(0) - e.yScale(r(N)))), x = /* @__PURE__ */ u(() => r(p).bar_opacity ?? 0.85), w = /* @__PURE__ */ u(() => r(p).bar_rx ?? 3), y = /* @__PURE__ */ u(() => r(p).bar_stroke_width ?? 0), H = /* @__PURE__ */ u(() => r(p).bar_stroke_color ?? "auto"), B = /* @__PURE__ */ u(() => r(p).bar_borders), V = /* @__PURE__ */ u(() => r(B) != null && ((r(B).top?.width ?? 0) > 0 || (r(B).right?.width ?? 0) > 0 || (r(B).bottom?.width ?? 0) > 0 || (r(B).left?.width ?? 0) > 0)), X = /* @__PURE__ */ u(() => r(B)?.mode ?? "inset"), G = /* @__PURE__ */ u(() => r(p).color_mode ?? "fixed"), q = /* @__PURE__ */ u(() => r(p).color_fixed ?? "#666666"), E = /* @__PURE__ */ u(() => r(p).color_category_map ?? {}), _ = /* @__PURE__ */ u(() => r(p).color_scale ?? { domain: [0, 1], scheme: "viridis", reverse: !1 }), C = /* @__PURE__ */ u(() => r(p).color_fallback ?? "#999999"), A = /* @__PURE__ */ u(() => r(p).anchor_connector ?? { enabled: !1 }), Z = /* @__PURE__ */ u(() => r(A).enabled ?? !1), ee = /* @__PURE__ */ u(() => r(A).stroke_color ?? "#000000"), ne = /* @__PURE__ */ u(() => r(A).stroke_width ?? 1), ie = /* @__PURE__ */ u(() => r(A).stroke_opacity ?? 0.6), ue = /* @__PURE__ */ u(() => r(A).stroke_dasharray ?? ""), oe = /* @__PURE__ */ u(() => r(p).anchor_symbol ?? { enabled: !1 }), de = /* @__PURE__ */ u(() => r(oe).enabled ?? !1), ge = /* @__PURE__ */ u(() => r(oe).shape ?? "circle"), te = /* @__PURE__ */ u(() => r(oe).size ?? 4), ae = /* @__PURE__ */ u(() => r(oe).fill_color ?? "#000000"), ye = /* @__PURE__ */ u(() => r(oe).fill_opacity ?? 1), ve = /* @__PURE__ */ u(() => r(oe).stroke_color ?? "none"), $ = /* @__PURE__ */ u(() => r(oe).stroke_width ?? 0), pe = /* @__PURE__ */ u(() => r(p).selection ?? { enabled: !0 }), Ae = /* @__PURE__ */ u(() => r(pe).enabled ?? !0), L = /* @__PURE__ */ u(() => r(pe).highlight_stroke_color ?? "#ffffff"), se = /* @__PURE__ */ u(() => r(pe).highlight_stroke_width ?? 2), fe = /* @__PURE__ */ u(() => r(p).hover ?? { enabled: !0 }), me = /* @__PURE__ */ u(() => r(fe).enabled ?? !0), Ie = /* @__PURE__ */ u(() => r(fe).opacity_boost ?? 0.15), Ve = /* @__PURE__ */ u(() => r(fe).cursor ?? "pointer"), Ne = /* @__PURE__ */ Me(null), Qe = /* @__PURE__ */ u(() => {
    if (r(G) !== "scale") return null;
    const O = r(_).scheme ?? "viridis", D = r(_).domain ?? [0, 1], R = r(_).reverse ?? !1, J = oi(O);
    return lc((be) => J(be)).domain(R ? [D[1], D[0]] : D);
  });
  function Se(O, D) {
    const R = O[D];
    if (R instanceof Date)
      return R.getTime();
    if (typeof R == "string") {
      const J = pt(R).getTime();
      return isNaN(J) ? null : J;
    }
    return typeof R == "number" ? R : null;
  }
  function K(O) {
    if (r(G) === "fixed")
      return r(q);
    if (r(G) === "category_map" && r(h)) {
      const D = O[r(h)];
      return typeof D == "string" && D in r(E) ? r(E)[D] ?? r(C) : r(C);
    }
    if (r(G) === "scale" && r(m) && r(Qe)) {
      const D = O[r(m)];
      return typeof D == "number" && !isNaN(D) ? r(Qe)(D) : r(C);
    }
    return r(C);
  }
  function xe(O) {
    if (r(H) !== "auto")
      return r(H);
    const D = O.match(/^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);
    if (!D) return O;
    const R = Math.max(0, parseInt(D[1], 16) - 40), J = Math.max(0, parseInt(D[2], 16) - 40), z = Math.max(0, parseInt(D[3], 16) - 40);
    return `#${R.toString(16).padStart(2, "0")}${J.toString(16).padStart(2, "0")}${z.toString(16).padStart(2, "0")}`;
  }
  function We(O) {
    const D = O.match(/^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);
    if (!D) return O;
    const R = Math.max(0, parseInt(D[1], 16) - 40), J = Math.max(0, parseInt(D[2], 16) - 40), z = Math.max(0, parseInt(D[3], 16) - 40);
    return `#${R.toString(16).padStart(2, "0")}${J.toString(16).padStart(2, "0")}${z.toString(16).padStart(2, "0")}`;
  }
  function Ze(O, D) {
    const R = O?.width ?? 0;
    if (R <= 0) return { width: 0, color: "none", opacity: 0 };
    const J = (O?.color ?? "auto") === "auto" ? We(D) : O.color;
    return { width: R, color: J, opacity: O?.opacity ?? 1 };
  }
  function yt(O, D) {
    return (O[D]?.width ?? 0) > 0;
  }
  const vt = ["top", "right", "bottom", "left"];
  function _t(O) {
    const D = vt.indexOf(O);
    return vt[(D + 3) % 4];
  }
  function rt(O) {
    const D = vt.indexOf(O);
    return vt[(D + 1) % 4];
  }
  function hr(O, D, R, J, z, be, le, De, ke) {
    const Le = Math.min(be, J / 2, z / 2), Ce = De / 2;
    let Fe;
    le === "outset" ? Fe = Le + Ce : Fe = Math.max(0, Le - Ce);
    const Re = le === "inset" ? Ce : -Ce, _e = D, He = D + J, Pe = R, Be = R + z, ze = _e + Re, Ue = He - Re, Te = Pe + Re, Ye = Be - Re;
    switch (O) {
      case "top": {
        const Bt = ke.prev ? ze + Fe : ze, Wt = Te, Ct = ke.next ? Ue - Fe : Ue, $e = Te;
        let Oe = `M${Bt},${Wt}`;
        return Oe += ` L${Ct},${$e}`, ke.next && Fe > 0 && (Oe += ` A${Fe},${Fe} 0 0 1 ${Ue},${Te + Fe}`), Oe;
      }
      case "right": {
        const Bt = Ue, Wt = ke.prev ? Te + Fe : Te, Ct = Ue, $e = ke.next ? Ye - Fe : Ye;
        let Oe = `M${Bt},${Wt}`;
        return Oe += ` L${Ct},${$e}`, ke.next && Fe > 0 && (Oe += ` A${Fe},${Fe} 0 0 1 ${Ue - Fe},${Ye}`), Oe;
      }
      case "bottom": {
        const Bt = ke.prev ? Ue - Fe : Ue, Wt = Ye, Ct = ke.next ? ze + Fe : ze, $e = Ye;
        let Oe = `M${Bt},${Wt}`;
        return Oe += ` L${Ct},${$e}`, ke.next && Fe > 0 && (Oe += ` A${Fe},${Fe} 0 0 1 ${ze},${Ye - Fe}`), Oe;
      }
      case "left": {
        const Bt = ze, Wt = ke.prev ? Ye - Fe : Ye, Ct = ze, $e = ke.next ? Te + Fe : Te;
        let Oe = `M${Bt},${Wt}`;
        return Oe += ` L${Ct},${$e}`, ke.next && Fe > 0 && (Oe += ` A${Fe},${Fe} 0 0 1 ${ze + Fe},${Te}`), Oe;
      }
    }
  }
  let br = /* @__PURE__ */ u(() => {
    if (r(g) === "constant") {
      const [D, R] = e.yScale.domain(), J = D + (R - D) * r(v);
      return e.yScale(J);
    }
    const O = e.yScale.range();
    return (O[0] + O[1]) / 2;
  }), j = /* @__PURE__ */ u(() => {
    const O = [];
    if (!r(s) || !r(f)) return O;
    for (let D = 0; D < r(o).length; D++) {
      const R = r(o)[D], J = Se(R, r(s)), z = Se(R, r(f));
      if (J === null || z === null || z <= J) continue;
      const be = r(d) ? Se(R, r(d)) : null, le = K(R), De = xe(le);
      let ke = r(br);
      if (r(g) === "parameter" && r(m)) {
        const Le = R[r(m)];
        typeof Le == "number" && !isNaN(Le) && (ke = e.yScale(Le));
      } else if (r(g) === "category_map" && r(b)) {
        const Le = R[r(b)];
        typeof Le == "string" && Le in r(k) ? ke = e.yScale(r(k)[Le]) : ke = e.yScale(r(S));
      }
      O.push({
        record: R,
        startMs: J,
        endMs: z,
        anchorMs: be,
        color: le,
        strokeColor: De,
        yPixel: ke,
        index: D
      });
    }
    return O;
  });
  function P(O) {
    if (!r(Ae)) return;
    const D = e.layer.source;
    hc.select({
      record: O.record,
      server: D.type === "hapi_data" ? D.server : "",
      dataset: D.type === "hapi_data" ? D.dataset : "",
      layerId: e.layer.id,
      selectedAt: Date.now(),
      parameterMapping: e.layer.parameter_mapping
    });
  }
  function F(O) {
    return hc.isSelected(e.layer.id, O.record);
  }
  var W = qe(), M = ce(W);
  Xe(M, 17, () => r(j), (O) => O.index, (O, D) => {
    const R = /* @__PURE__ */ u(() => e.xScale(new Date(r(D).startMs))), J = /* @__PURE__ */ u(() => e.xScale(new Date(r(D).endMs))), z = /* @__PURE__ */ u(() => Math.max(0, r(J) - r(R))), be = /* @__PURE__ */ u(() => r(Ne) === r(D).index), le = /* @__PURE__ */ u(() => F(r(D))), De = /* @__PURE__ */ u(() => r(be) ? Math.min(1, r(x) + r(Ie)) : r(x)), ke = /* @__PURE__ */ u(() => r(V) ? "none" : r(le) ? r(L) : r(y) > 0 ? r(D).strokeColor : "none"), Le = /* @__PURE__ */ u(() => r(V) ? 0 : r(le) ? r(se) : r(y));
    var Ce = dp(), Fe = ce(Ce);
    {
      var Re = ($e) => {
        const Oe = /* @__PURE__ */ u(() => e.xScale(new Date(r(D).anchorMs)));
        var Ut = cp();
        Y(() => {
          l(Ut, "x1", r(Oe)), l(Ut, "y1", r(D).yPixel), l(Ut, "x2", r(R)), l(Ut, "y2", r(D).yPixel), l(Ut, "stroke", r(ee) === "auto" ? r(D).color : r(ee)), l(Ut, "stroke-width", r(ne)), l(Ut, "stroke-opacity", r(ie)), l(Ut, "stroke-dasharray", r(ue));
        }), T($e, Ut);
      };
      we(Fe, ($e) => {
        r(Z) && r(D).anchorMs !== null && $e(Re);
      });
    }
    var _e = Q(Fe), He = he(_e), Pe = he(He);
    {
      var Be = ($e) => {
        var Oe = Un();
        Y(() => Ke(Oe, `${r(D).record[r(h)] ?? ""} |`)), T($e, Oe);
      };
      we(Pe, ($e) => {
        r(h) && r(D).record[r(h)] && $e(Be);
      });
    }
    var ze = Q(Pe), Ue = Q(_e);
    {
      var Te = ($e) => {
        var Oe = qe(), Ut = ce(Oe);
        Xe(Ut, 16, () => vt, (Wr) => Wr, (Wr, Gr) => {
          const mr = /* @__PURE__ */ u(() => Ze(r(B)[Gr], r(D).color));
          var mi = qe(), er = ce(mi);
          {
            var Pt = (Tn) => {
              var Dn = op();
              Y(
                (m1) => {
                  l(Dn, "d", m1), l(Dn, "stroke", r(mr).color), l(Dn, "stroke-width", r(mr).width), l(Dn, "stroke-opacity", r(mr).opacity);
                },
                [
                  () => hr(Gr, r(R), r(D).yPixel - r(I) / 2, r(z), r(I), r(w), r(X), r(mr).width, {
                    prev: yt(r(B), _t(Gr)),
                    next: yt(r(B), rt(Gr))
                  })
                ]
              ), T(Tn, Dn);
            };
            we(er, (Tn) => {
              r(mr).width > 0 && Tn(Pt);
            });
          }
          T(Wr, mi);
        }), T($e, Oe);
      };
      we(Ue, ($e) => {
        r(V) && r(B) && $e(Te);
      });
    }
    var Ye = Q(Ue);
    {
      var Bt = ($e) => {
        var Oe = sp();
        Y(() => {
          l(Oe, "x", r(R) - r(se)), l(Oe, "y", r(D).yPixel - r(I) / 2 - r(se)), l(Oe, "width", r(z) + r(se) * 2), l(Oe, "height", r(I) + r(se) * 2), l(Oe, "rx", r(w) + r(se) / 2), l(Oe, "ry", r(w) + r(se) / 2), l(Oe, "stroke", r(L)), l(Oe, "stroke-width", r(se));
        }), T($e, Oe);
      };
      we(Ye, ($e) => {
        r(le) && r(se) > 0 && $e(Bt);
      });
    }
    var Wt = Q(Ye);
    {
      var Ct = ($e) => {
        const Oe = /* @__PURE__ */ u(() => e.xScale(new Date(r(D).anchorMs))), Ut = /* @__PURE__ */ u(() => r(ae) === "auto" ? r(D).color : r(ae));
        var Wr = qe(), Gr = ce(Wr);
        {
          var mr = (er) => {
            var Pt = fp();
            Y(() => {
              l(Pt, "cx", r(Oe)), l(Pt, "cy", r(D).yPixel), l(Pt, "r", r(te)), l(Pt, "fill", r(Ut)), l(Pt, "fill-opacity", r(ye)), l(Pt, "stroke", r(ve)), l(Pt, "stroke-width", r($));
            }), T(er, Pt);
          }, mi = (er) => {
            var Pt = lp();
            Y(
              (Tn) => {
                l(Pt, "d", Tn), l(Pt, "fill", r(Ut)), l(Pt, "fill-opacity", r(ye)), l(Pt, "stroke", r(ve)), l(Pt, "stroke-width", r($));
              },
              [
                () => No(r(ge), r(te), r(Oe), r(D).yPixel)
              ]
            ), T(er, Pt);
          };
          we(Gr, (er) => {
            r(ge) === "circle" ? er(mr) : er(mi, -1);
          });
        }
        T($e, Wr);
      };
      we(Wt, ($e) => {
        r(de) && r(D).anchorMs !== null && $e(Ct);
      });
    }
    Y(
      ($e, Oe) => {
        l(_e, "x", r(R)), l(_e, "y", r(D).yPixel - r(I) / 2), l(_e, "width", r(z)), l(_e, "height", r(I)), l(_e, "rx", r(w)), l(_e, "ry", r(w)), l(_e, "fill", r(D).color), l(_e, "fill-opacity", r(De)), l(_e, "stroke", r(ke)), l(_e, "stroke-width", r(Le)), ft(_e, `cursor: ${(r(me) ? r(Ve) : "default") ?? ""}`), l(_e, "aria-pressed", r(le)), Ke(ze, `${$e ?? ""} - ${Oe ?? ""}`);
      },
      [
        () => new Date(r(D).startMs).toISOString(),
        () => new Date(r(D).endMs).toISOString()
      ]
    ), Ft("click", _e, () => P(r(D))), Ft("keydown", _e, ($e) => $e.key === "Enter" && P(r(D))), xa("mouseenter", _e, () => re(Ne, r(D).index, !0)), xa("mouseleave", _e, () => re(Ne, null)), T(O, Ce);
  }), T(t, W), ct();
}
ur(["click", "keydown"]);
function hp(t, e) {
  const a = e?.scaleFactor ?? 1, n = e?.addOffset ?? 0, i = e?.fillValue, c = a !== 1 || n !== 0;
  if (t instanceof Float32Array && !c && i === void 0)
    return t;
  if (t instanceof Float32Array && !c) {
    const s = new Float32Array(t.length);
    for (let f = 0; f < t.length; f++) {
      const d = t[f];
      s[f] = d === i ? NaN : d;
    }
    return s;
  }
  const o = new Float32Array(t.length);
  for (let s = 0; s < t.length; s++) {
    const f = Number(t[s]);
    i !== void 0 && f === i ? o[s] = NaN : c ? o[s] = f * a + n : o[s] = f;
  }
  return o;
}
function bp(t) {
  let e = 1 / 0, a = -1 / 0;
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    Number.isNaN(i) || (i < e && (e = i), i > a && (a = i));
  }
  return e === 1 / 0 ? { min: 0, max: 1 } : { min: e, max: a };
}
function mp(t, e, a, n, i = {}) {
  const {
    colormap: c = _n,
    customColormaps: o,
    displayMin: s,
    displayMax: f,
    flipVertical: d = !1,
    reverse: h = !1,
    trim: b
  } = i;
  let m, p;
  if (s !== void 0 && f !== void 0)
    m = s, p = f;
  else {
    const I = bp(t);
    m = s ?? I.min, p = f ?? I.max;
  }
  const g = p - m, v = {};
  h && (v.reverse = !0), b && (v.trim = b);
  const k = l1(c, o, 256, v), S = new ImageData(e, a), N = S.data;
  for (let I = 0; I < t.length; I++) {
    const x = t[I];
    let w;
    if (d) {
      const y = Math.floor(I / e), H = I % e;
      w = ((a - 1 - y) * e + H) * 4;
    } else
      w = I * 4;
    if (Number.isNaN(x))
      N[w] = 0, N[w + 1] = 0, N[w + 2] = 0, N[w + 3] = 0;
    else {
      let y = (x - m) / g;
      y = Math.max(0, Math.min(1, y));
      const B = Math.round(y * 255) * 4;
      N[w] = k[B], N[w + 1] = k[B + 1], N[w + 2] = k[B + 2], N[w + 3] = k[B + 3];
    }
  }
  return S;
}
function pp(t, e, a, n, i = {}, c) {
  const o = hp(t, n), s = mp(o, e, a, n, i), f = c ?? new OffscreenCanvas(e, a);
  (f.width !== e || f.height !== a) && (f.width = e, f.height = a);
  const d = f.getContext("2d");
  if (!d)
    throw new Error("Failed to get 2D context from OffscreenCanvas");
  return d.putImageData(s, 0, 0), f;
}
let jr = null;
function gp(t, e = "image/png") {
  jr || (jr = document.createElement("canvas")), jr.width = t.width, jr.height = t.height;
  const a = jr.getContext("2d");
  if (!a) throw new Error("Failed to get 2D context from bridge canvas");
  return a.drawImage(t, 0, 0), jr.toDataURL(e);
}
function yp(t) {
  if (t != null)
    return typeof t == "string" ? t || void 0 : t.variable || void 0;
}
function vp(t) {
  if (t == null || typeof t == "string") return !1;
  const e = t.multiplier ?? 1, a = t.offset ?? 0;
  return e !== 1 || a !== 0;
}
function _p(t, e) {
  if (!vp(e)) return t;
  const a = e, n = a.multiplier ?? 1, i = a.offset ?? 0, c = t?.scaleFactor ?? 1, o = t?.addOffset ?? 0;
  return {
    scaleFactor: c * n,
    addOffset: o * n + i,
    fillValue: t?.fillValue
  };
}
var wp = /* @__PURE__ */ U('<text text-anchor="middle" dominant-baseline="middle" class="fill-muted-foreground text-xs">Loading...</text>'), xp = /* @__PURE__ */ U('<text text-anchor="middle" dominant-baseline="middle" class="fill-destructive text-xs"> </text>'), kp = /* @__PURE__ */ U('<text text-anchor="middle" dominant-baseline="middle" class="fill-muted-foreground text-xs">No source configured</text>'), Sp = /* @__PURE__ */ U('<g class="throttle-indicator svelte-1upump2" role="button"><rect class="indicator-background svelte-1upump2"></rect><g transform="translate(-90, 0)"><circle cx="0" cy="-2" r="7" stroke="white" stroke-width="2" fill="none"></circle><line x1="5" y1="3" x2="10" y2="8" stroke="white" stroke-width="2" stroke-linecap="round"></line><line x1="-3" y1="-2" x2="3" y2="-2" stroke="white" stroke-width="1.5" stroke-linecap="round"></line><line x1="0" y1="-5" x2="0" y2="1" stroke="white" stroke-width="1.5" stroke-linecap="round"></line></g><text x="5" y="5" text-anchor="middle" fill="white" font-size="12" font-family="system-ui, -apple-system, sans-serif" font-weight="500">Zoom in to load data</text></g>'), Mp = /* @__PURE__ */ U('<image preserveAspectRatio="none" style="image-rendering: pixelated;"></image>'), Tp = /* @__PURE__ */ U('<text text-anchor="end" class="fill-muted-foreground text-xs" style="font-variant-numeric: tabular-nums;"> </text>'), Dp = /* @__PURE__ */ U("<g></g><!>", 1), Ap = /* @__PURE__ */ U("<g><title> </title><!></g>");
function Cp(t, e) {
  it(e, !0);
  const a = ma();
  let n = new Nr(), i = null, c = /* @__PURE__ */ u(() => e.layer.source?.url), o = /* @__PURE__ */ u(() => e.layer.source?.variable_mapping), s = /* @__PURE__ */ u(() => yp(r(o)?.value)), f = /* @__PURE__ */ u(() => r(c) && r(s) ? a.zarrDataOrchestrator.getFrameMetadata(r(c), r(s)) : void 0), d = /* @__PURE__ */ u(() => r(c) ? a.zarrDataOrchestrator.getSourceGroupKey(r(c), r(o)) : void 0), h = /* @__PURE__ */ u(() => r(d) ? a.zarrDataOrchestrator.getSourceGroupData(r(d)) : void 0), b = /* @__PURE__ */ u(() => r(h)?.throttled ?? !1), m = /* @__PURE__ */ u(() => r(h)?.loading === !0 && !r(b)), p = /* @__PURE__ */ u(() => r(h)?.chunkProgress), g = /* @__PURE__ */ u(() => {
    if (!r(h)?.groups.length || !r(s)) return [];
    const L = [];
    for (const se of r(h).groups) {
      const fe = se.variableData.get(r(s));
      fe && L.push(fe);
    }
    return L.sort((se, fe) => se.startTime.getTime() - fe.startTime.getTime()), L;
  }), v = /* @__PURE__ */ u(() => r(c) && r(s) ? a.zarrDataOrchestrator.getSourceStatus(r(c), r(s)) : "unconfigured"), k = /* @__PURE__ */ u(() => r(v) === "metadata-loading" || r(v) === "store-opening"), S = /* @__PURE__ */ u(() => r(v) === "metadata-failed" || r(v) === "store-failed" ? a.zarrDataOrchestrator.getSourceEntry(r(c) ?? "", r(s) ?? "")?.errorMessage ?? "Failed to load Zarr store" : null), N = /* @__PURE__ */ u(() => e.layer.style && !("$driver" in e.layer.style) ? e.layer.style : {}), I = /* @__PURE__ */ u(() => "color_mapping" in r(N) ? r(N).color_mapping : void 0), x = /* @__PURE__ */ u(() => {
    if (r(I)) {
      if ("$driver" in r(I) && typeof r(I).$driver == "string") {
        const L = a.drivers[r(I).$driver];
        return L && typeof L == "object" && !("$driver" in L) ? L : void 0;
      }
      return r(I);
    }
  }), w = /* @__PURE__ */ u(() => r(x)?.color_map ?? "turbo"), y = /* @__PURE__ */ u(() => r(x)?.reverse_color_map ?? !1), H = /* @__PURE__ */ u(() => r(x)?.color_map_domain), B = /* @__PURE__ */ u(() => r(H)?.current?.[0]), V = /* @__PURE__ */ u(() => r(H)?.current?.[1]), X = /* @__PURE__ */ u(() => r(N).flip_vertical ?? !1), G = /* @__PURE__ */ u(() => r(N).opacity ?? 1), q = /* @__PURE__ */ u(() => r(N).y_mapping?.mode ?? "full_range"), E = /* @__PURE__ */ u(() => r(N).y_mapping?.top), _ = /* @__PURE__ */ u(() => r(N).y_mapping?.bottom), C = /* @__PURE__ */ u(() => r(q) === "explicit" && r(E) !== void 0 ? e.yScale(r(E)) : e.yScale.range()[1]), A = /* @__PURE__ */ u(() => r(q) === "explicit" && r(E) !== void 0 && r(_) !== void 0 ? Math.abs(e.yScale(r(_)) - e.yScale(r(E))) : Math.abs(e.yScale.range()[0] - e.yScale.range()[1])), Z = /* @__PURE__ */ u(() => (e.xScale.range()[0] + e.xScale.range()[1]) / 2), ee = /* @__PURE__ */ u(() => (e.yScale.range()[0] + e.yScale.range()[1]) / 2);
  ut(() => {
    if (r(g).length === 0 || !r(f) || !r(c)) return;
    const L = r(w), se = r(B), fe = r(V), me = r(X), Ie = r(y), Ve = r(f), Ne = r(g);
    dt(() => {
      const Qe = new Set(Ne.map((Se) => Se.groupPath));
      for (const Se of n.keys())
        Qe.has(Se) || n.delete(Se);
      for (const Se of Ne)
        ie(Se, Ve, {
          colormap: L,
          displayMin: se,
          displayMax: fe,
          flipVertical: me,
          reverse: Ie
        });
    });
  });
  function ne(L, se, fe) {
    const me = L.constructor, Ie = new me(se * fe), Ve = L;
    for (let Ne = 0; Ne < se; Ne++)
      for (let Qe = 0; Qe < fe; Qe++) {
        const Se = Ne * fe + Qe, K = Qe * se + Ne;
        Ie[K] = Ve[Se];
      }
    return Ie;
  }
  function ie(L, se, fe) {
    const me = L.shape[0], Ie = L.shape[1], Ve = ne(L.data, L.shape[0], L.shape[1]), Ne = {
      scaleFactor: L.scaleFactor ?? se.scaleFactor,
      addOffset: L.addOffset ?? se.addOffset,
      fillValue: L.fillValue ?? se.fillValue
    }, Qe = _p(Ne, r(o)?.value) ?? Ne, Se = {
      colormap: fe.colormap,
      displayMin: fe.displayMin,
      displayMax: fe.displayMax,
      flipVertical: fe.flipVertical,
      reverse: fe.reverse
    };
    i = pp(Ve, me, Ie, Qe, Se, i ?? void 0), n.set(L.groupPath, gp(i));
  }
  function ue() {
    const L = a.timeDomain.start, fe = a.timeDomain.end.getTime() - L.getTime(), me = L.getTime() + fe / 2, Ie = fe / 4, Ve = new Date(me - Ie / 2), Ne = new Date(me + Ie / 2);
    a.setTimeDomain(Ve, Ne);
  }
  function oe(L) {
    (L.key === "Enter" || L.key === " ") && (L.preventDefault(), ue());
  }
  ut(() => () => {
    n.clear();
  });
  var de = Ap(), ge = he(de), te = he(ge), ae = Q(ge);
  {
    var ye = (L) => {
      var se = wp();
      Y(() => {
        l(se, "x", r(Z)), l(se, "y", r(ee));
      }), T(L, se);
    }, ve = (L) => {
      var se = xp(), fe = he(se);
      Y(() => {
        l(se, "x", r(Z)), l(se, "y", r(ee)), Ke(fe, r(S));
      }), T(L, se);
    }, $ = (L) => {
      var se = kp();
      Y(() => {
        l(se, "x", r(Z)), l(se, "y", r(ee));
      }), T(L, se);
    }, pe = (L) => {
      var se = Sp();
      l(se, "tabindex", 0);
      var fe = he(se);
      l(fe, "x", -115), l(fe, "y", -18), l(fe, "width", 230), l(fe, "height", 36), l(fe, "rx", 18), Y(() => l(se, "transform", `translate(${r(Z) ?? ""}, ${r(ee) ?? ""})`)), Ft("click", se, ue), Ft("keydown", se, oe), Er(1, se, () => Rr, () => ({ duration: 200 })), Er(2, se, () => Rr, () => ({ duration: 150 })), T(L, se);
    }, Ae = (L) => {
      var se = Dp(), fe = ce(se);
      let me;
      Xe(fe, 21, () => r(g), (Ne) => Ne.groupPath, (Ne, Qe) => {
        const Se = /* @__PURE__ */ u(() => n.get(r(Qe).groupPath)), K = /* @__PURE__ */ u(() => e.xScale(r(Qe).startTime)), xe = /* @__PURE__ */ u(() => e.xScale(r(Qe).endTime)), We = /* @__PURE__ */ u(() => Math.max(0, r(xe) - r(K)));
        var Ze = qe(), yt = ce(Ze);
        {
          var vt = (_t) => {
            var rt = Mp();
            Y(() => {
              l(rt, "href", r(Se)), l(rt, "x", r(K)), l(rt, "y", r(C)), l(rt, "width", r(We)), l(rt, "height", r(A));
            }), T(_t, rt);
          };
          we(yt, (_t) => {
            r(Se) && r(We) > 0 && _t(vt);
          });
        }
        T(Ne, Ze);
      });
      var Ie = Q(fe);
      {
        var Ve = (Ne) => {
          var Qe = Tp(), Se = he(Qe);
          Y(
            (K, xe) => {
              l(Qe, "x", K), l(Qe, "y", xe), Ke(Se, `${r(p).loaded ?? ""}/${r(p).total ?? ""}`);
            },
            [
              () => e.xScale.range()[1] - 8,
              () => e.yScale.range()[1] + 14
            ]
          ), T(Ne, Qe);
        };
        we(Ie, (Ne) => {
          r(m) && r(p) && Ne(Ve);
        });
      }
      Y(() => me = ft(fe, "", me, {
        opacity: r(m) && r(g).length > 0 ? r(G) * 0.5 : r(G),
        transition: "opacity 0.2s ease-out"
      })), T(L, se);
    };
    we(ae, (L) => {
      r(k) ? L(ye) : r(S) ? L(ve, 1) : e.layer.source?.url ? r(b) ? L(pe, 3) : L(Ae, -1) : L($, 2);
    });
  }
  Y(() => Ke(te, `${e.layer.title ?? "Zarr Interval Image" ?? ""} [${r(s) ?? "" ?? ""}]`)), T(t, de), ct();
}
ur(["click", "keydown"]);
var Pp = /* @__PURE__ */ U('<circle role="button" tabindex="0" aria-label="Symbol"><title> <!><!></title></circle>'), Ep = /* @__PURE__ */ U('<path role="button" tabindex="0" aria-label="Symbol"><title> <!><!></title></path>'), Ip = /* @__PURE__ */ U('<circle fill="none" style="pointer-events: none"></circle>'), Np = /* @__PURE__ */ U('<path fill="none" style="pointer-events: none"></path>'), Lp = /* @__PURE__ */ U("<!><!>", 1);
function Fp(t, e) {
  it(e, !0);
  const a = ma();
  let n = /* @__PURE__ */ u(() => Ia(e.layer.source, e.layer.id)), i = /* @__PURE__ */ u(() => r(n) ? a.getViewportData(r(n)) : void 0), c = /* @__PURE__ */ u(() => r(i)?.records ?? []), o = /* @__PURE__ */ u(() => Br(r(c), e.layer.filter, a.drivers)), s = /* @__PURE__ */ u(() => wt(e.layer.parameter_mapping.time)), f = /* @__PURE__ */ u(() => wt(e.layer.parameter_mapping.value)), d = /* @__PURE__ */ u(() => wt(e.layer.parameter_mapping.y_map_key)), h = /* @__PURE__ */ u(() => wt(e.layer.parameter_mapping.color_map_key)), b = /* @__PURE__ */ u(() => wt(e.layer.parameter_mapping.size_parameter)), m = /* @__PURE__ */ u(() => e.layer.style && typeof e.layer.style == "object" && !("$driver" in e.layer.style) ? e.layer.style : {}), p = /* @__PURE__ */ u(() => r(m).shape ?? "circle"), g = /* @__PURE__ */ u(() => r(m).size ?? 6), v = /* @__PURE__ */ u(() => r(m).size_mode ?? "fixed"), k = /* @__PURE__ */ u(() => r(m).size_scale ?? { domain: [0, 1], range: [4, 12] }), S = /* @__PURE__ */ u(() => r(m).vertical_placement ?? "constant"), N = /* @__PURE__ */ u(() => r(m).constant_y ?? 0.5), I = /* @__PURE__ */ u(() => r(m).y_category_map ?? {}), x = /* @__PURE__ */ u(() => r(m).y_fallback ?? 0.5), w = /* @__PURE__ */ u(() => r(m).fill_mode ?? "fixed"), y = /* @__PURE__ */ u(() => r(m).fill_color ?? "#4c72b0"), H = /* @__PURE__ */ u(() => r(m).fill_category_map ?? {}), B = /* @__PURE__ */ u(() => r(m).fill_scale ?? { domain: [0, 1], scheme: "viridis", reverse: !1 }), V = /* @__PURE__ */ u(() => r(m).fill_fallback ?? "#999999"), X = /* @__PURE__ */ u(() => r(m).fill_opacity ?? 1), G = /* @__PURE__ */ u(() => r(m).stroke_mode ?? "auto"), q = /* @__PURE__ */ u(() => r(m).stroke_color ?? "#333333"), E = /* @__PURE__ */ u(() => r(m).stroke_category_map ?? {}), _ = /* @__PURE__ */ u(() => r(m).stroke_scale ?? { domain: [0, 1], scheme: "viridis", reverse: !1 }), C = /* @__PURE__ */ u(() => r(m).stroke_fallback ?? "#666666"), A = /* @__PURE__ */ u(() => r(m).stroke_width ?? 1), Z = /* @__PURE__ */ u(() => r(m).stroke_opacity ?? 1), ee = /* @__PURE__ */ u(() => r(m).selection ?? { enabled: !0 }), ne = /* @__PURE__ */ u(() => r(ee).enabled ?? !0), ie = /* @__PURE__ */ u(() => r(ee).highlight_stroke_color ?? "#ffffff"), ue = /* @__PURE__ */ u(() => r(ee).highlight_stroke_width ?? 2), oe = /* @__PURE__ */ u(() => r(m).hover ?? { enabled: !0 }), de = /* @__PURE__ */ u(() => r(oe).enabled ?? !0), ge = /* @__PURE__ */ u(() => r(oe).opacity_boost ?? 0.15), te = /* @__PURE__ */ u(() => r(oe).cursor ?? "pointer"), ae = /* @__PURE__ */ Me(null), ye = /* @__PURE__ */ u(() => {
    if (r(w) !== "scale") return null;
    const Se = r(B).scheme ?? "viridis", K = r(B).domain ?? [0, 1], xe = r(B).reverse ?? !1, We = `interpolate${Se.charAt(0).toUpperCase()}${Se.slice(1)}`, Ze = vf[We] ?? $i;
    return lc(Ze).domain(xe ? [K[1], K[0]] : K);
  }), ve = /* @__PURE__ */ u(() => {
    if (r(G) !== "scale") return null;
    const Se = r(_).scheme ?? "viridis", K = r(_).domain ?? [0, 1], xe = r(_).reverse ?? !1, We = `interpolate${Se.charAt(0).toUpperCase()}${Se.slice(1)}`, Ze = vf[We] ?? $i;
    return lc(Ze).domain(xe ? [K[1], K[0]] : K);
  }), $ = /* @__PURE__ */ u(() => {
    if (r(v) !== "parameter") return null;
    const Se = r(k).domain ?? [0, 1], K = r(k).range ?? [4, 12];
    return ci().domain(Se).range(K).clamp(!0);
  });
  function pe(Se, K) {
    if (!K) {
      const We = Se.time;
      if (We instanceof Date) return We.getTime();
      if (typeof We == "string") {
        const Ze = pt(We).getTime();
        return isNaN(Ze) ? null : Ze;
      }
      return typeof We == "number" ? We : null;
    }
    const xe = Se[K];
    if (xe instanceof Date) return xe.getTime();
    if (typeof xe == "string") {
      const We = pt(xe).getTime();
      return isNaN(We) ? null : We;
    }
    return typeof xe == "number" ? xe : null;
  }
  function Ae(Se) {
    if (r(w) === "fixed")
      return r(y);
    if (r(w) === "category_map" && r(h)) {
      const K = Se[r(h)];
      return typeof K == "string" && K in r(H) ? r(H)[K] ?? r(V) : r(V);
    }
    if (r(w) === "scale" && r(f) && r(ye)) {
      const K = Se[r(f)];
      return typeof K == "number" && !isNaN(K) ? r(ye)(K) : r(V);
    }
    return r(V);
  }
  function L(Se, K) {
    if (r(G) === "auto") {
      const xe = K.match(/^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);
      if (!xe) return K;
      const We = Math.max(0, parseInt(xe[1], 16) - 40), Ze = Math.max(0, parseInt(xe[2], 16) - 40), yt = Math.max(0, parseInt(xe[3], 16) - 40);
      return `#${We.toString(16).padStart(2, "0")}${Ze.toString(16).padStart(2, "0")}${yt.toString(16).padStart(2, "0")}`;
    }
    if (r(G) === "fixed")
      return r(q);
    if (r(G) === "category_map" && r(h)) {
      const xe = Se[r(h)];
      return typeof xe == "string" && xe in r(E) ? r(E)[xe] ?? r(C) : r(C);
    }
    if (r(G) === "scale" && r(f) && r(ve)) {
      const xe = Se[r(f)];
      return typeof xe == "number" && !isNaN(xe) ? r(ve)(xe) : r(C);
    }
    return r(C);
  }
  function se(Se) {
    if (r(v) === "fixed")
      return r(g);
    if (r(v) === "parameter" && r(b) && r($)) {
      const K = Se[r(b)];
      if (typeof K == "number" && !isNaN(K))
        return r($)(K);
    }
    return r(g);
  }
  let fe = /* @__PURE__ */ u(() => {
    if (r(S) === "constant") {
      const [K, xe] = e.yScale.domain(), We = K + (xe - K) * r(N);
      return e.yScale(We);
    }
    const Se = e.yScale.range();
    return (Se[0] + Se[1]) / 2;
  }), me = /* @__PURE__ */ u(() => {
    const Se = [];
    for (let K = 0; K < r(o).length; K++) {
      const xe = r(o)[K], We = pe(xe, r(s));
      if (We === null) continue;
      const Ze = Ae(xe), yt = L(xe, Ze), vt = se(xe);
      let _t = r(fe);
      if (r(S) === "parameter" && r(f)) {
        const rt = xe[r(f)];
        typeof rt == "number" && !isNaN(rt) && (_t = e.yScale(rt));
      } else if (r(S) === "category_map" && r(d)) {
        const rt = xe[r(d)];
        typeof rt == "string" && rt in r(I) ? _t = e.yScale(r(I)[rt]) : _t = e.yScale(r(x));
      }
      Se.push({
        record: xe,
        timeMs: We,
        fillColor: Ze,
        strokeColor: yt,
        size: vt,
        yPixel: _t,
        index: K
      });
    }
    return Se;
  });
  function Ie(Se) {
    if (!r(ne)) return;
    const K = e.layer.source;
    hc.select({
      record: Se.record,
      server: K.type === "hapi_data" ? K.server : "",
      dataset: K.type === "hapi_data" ? K.dataset : "",
      layerId: e.layer.id,
      selectedAt: Date.now(),
      parameterMapping: e.layer.parameter_mapping
    });
  }
  function Ve(Se) {
    return hc.isSelected(e.layer.id, Se.record);
  }
  var Ne = qe(), Qe = ce(Ne);
  Xe(Qe, 17, () => r(me), (Se) => Se.index, (Se, K) => {
    const xe = /* @__PURE__ */ u(() => e.xScale(new Date(r(K).timeMs))), We = /* @__PURE__ */ u(() => r(ae) === r(K).index), Ze = /* @__PURE__ */ u(() => Ve(r(K))), yt = /* @__PURE__ */ u(() => r(We) ? Math.min(1, r(X) + r(ge)) : r(X));
    var vt = Lp(), _t = ce(vt);
    {
      var rt = (P) => {
        var F = Pp(), W = he(F), M = he(W), O = Q(M);
        {
          var D = (z) => {
            var be = Un();
            Y(() => Ke(be, `| ${r(K).record[r(h)] ?? ""}`)), T(z, be);
          };
          we(O, (z) => {
            r(h) && r(K).record[r(h)] && z(D);
          });
        }
        var R = Q(O);
        {
          var J = (z) => {
            var be = Un();
            Y(() => Ke(be, `| ${r(K).record[r(f)] ?? ""}`)), T(z, be);
          };
          we(R, (z) => {
            r(f) && r(K).record[r(f)] !== void 0 && z(J);
          });
        }
        Y(
          (z) => {
            l(F, "cx", r(xe)), l(F, "cy", r(K).yPixel), l(F, "r", r(K).size), l(F, "fill", r(K).fillColor), l(F, "fill-opacity", r(yt)), l(F, "stroke", r(Ze) ? r(ie) : r(A) > 0 ? r(K).strokeColor : "none"), l(F, "stroke-width", r(Ze) ? r(ue) : r(A)), l(F, "stroke-opacity", r(Z)), ft(F, `cursor: ${(r(de) ? r(te) : "default") ?? ""}`), l(F, "aria-pressed", r(Ze)), Ke(M, z);
          },
          [() => new Date(r(K).timeMs).toISOString()]
        ), Ft("click", F, () => Ie(r(K))), Ft("keydown", F, (z) => z.key === "Enter" && Ie(r(K))), xa("mouseenter", F, () => re(ae, r(K).index, !0)), xa("mouseleave", F, () => re(ae, null)), T(P, F);
      }, hr = (P) => {
        var F = Ep(), W = he(F), M = he(W), O = Q(M);
        {
          var D = (z) => {
            var be = Un();
            Y(() => Ke(be, `| ${r(K).record[r(h)] ?? ""}`)), T(z, be);
          };
          we(O, (z) => {
            r(h) && r(K).record[r(h)] && z(D);
          });
        }
        var R = Q(O);
        {
          var J = (z) => {
            var be = Un();
            Y(() => Ke(be, `| ${r(K).record[r(f)] ?? ""}`)), T(z, be);
          };
          we(R, (z) => {
            r(f) && r(K).record[r(f)] !== void 0 && z(J);
          });
        }
        Y(
          (z, be) => {
            l(F, "d", z), l(F, "fill", r(K).fillColor), l(F, "fill-opacity", r(yt)), l(F, "stroke", r(Ze) ? r(ie) : r(A) > 0 ? r(K).strokeColor : "none"), l(F, "stroke-width", r(Ze) ? r(ue) : r(A)), l(F, "stroke-opacity", r(Z)), ft(F, `cursor: ${(r(de) ? r(te) : "default") ?? ""}`), l(F, "aria-pressed", r(Ze)), Ke(M, be);
          },
          [
            () => No(r(p), r(K).size, r(xe), r(K).yPixel),
            () => new Date(r(K).timeMs).toISOString()
          ]
        ), Ft("click", F, () => Ie(r(K))), Ft("keydown", F, (z) => z.key === "Enter" && Ie(r(K))), xa("mouseenter", F, () => re(ae, r(K).index, !0)), xa("mouseleave", F, () => re(ae, null)), T(P, F);
      };
      we(_t, (P) => {
        r(p) === "circle" ? P(rt) : P(hr, -1);
      });
    }
    var br = Q(_t);
    {
      var j = (P) => {
        var F = qe(), W = ce(F);
        {
          var M = (D) => {
            var R = Ip();
            Y(() => {
              l(R, "cx", r(xe)), l(R, "cy", r(K).yPixel), l(R, "r", r(K).size + r(ue)), l(R, "stroke", r(ie)), l(R, "stroke-width", r(ue));
            }), T(D, R);
          }, O = (D) => {
            var R = Np();
            Y(
              (J) => {
                l(R, "d", J), l(R, "stroke", r(ie)), l(R, "stroke-width", r(ue));
              },
              [
                () => No(r(p), r(K).size + r(ue), r(xe), r(K).yPixel)
              ]
            ), T(D, R);
          };
          we(W, (D) => {
            r(p) === "circle" ? D(M) : D(O, -1);
          });
        }
        T(P, F);
      };
      we(br, (P) => {
        r(Ze) && r(ue) > 0 && P(j);
      });
    }
    T(Se, vt);
  }), T(t, Ne), ct();
}
ur(["click", "keydown"]);
var Rp = /* @__PURE__ */ U("<g></g><!><!><!>", 1), Op = /* @__PURE__ */ U("<!><!><!>", 1), zp = /* @__PURE__ */ U("<defs><clipPath><rect></rect></clipPath><clipPath><rect></rect></clipPath></defs><g><!></g><g><!></g><!><!>", 1);
function Up(t, e) {
  it(e, !0);
  let a = /* @__PURE__ */ u(() => {
    if (!e.referenceXScale || !e.xScale) return "";
    const ne = e.referenceXScale.domain(), ie = e.referenceXScale.range(), ue = e.xScale(ne[0]), oe = e.xScale(ne[1]), de = ue - ie[0], ge = ie[1] - ie[0], ae = (oe - ue) / ge;
    return Math.abs(de) < 0.01 && Math.abs(ae - 1) < 1e-4 ? "" : `translate(${ie[0]}, 0) scale(${ae}, 1) translate(${-ie[0] + de / ae}, 0)`;
  }), n = /* @__PURE__ */ u(() => e.y1 - e.y0), i = /* @__PURE__ */ u(() => e.subplot.bottom_margin), c = /* @__PURE__ */ u(() => e.subplot.y_axis.scale), o = /* @__PURE__ */ u(() => e.subplot.y_axis.tick_spacing), s = /* @__PURE__ */ u(() => e.subplot.y_axis.tick_interval), f = /* @__PURE__ */ u(() => e.subplot.y_axis.tick_format), d = /* @__PURE__ */ u(() => e.subplot.y_domain.current), h = /* @__PURE__ */ u(() => e.subplot.y_domain.bounds), b = /* @__PURE__ */ u(() => {
    const ne = new Nr(), ie = Ee.drivers;
    for (const ue of e.subplot.visualisation_layers)
      if (ue.visible !== !1 && (ue.layer_type === "area" || ue.layer_type === "line" || ue.layer_type === "wiggle")) {
        const oe = ue;
        if (oe.source) {
          const de = Qu(oe.source, ie);
          ne.set(ue.id, { sources: de, layer: oe });
        }
      }
    return ne;
  }), m = /* @__PURE__ */ Me(null), p = /* @__PURE__ */ u(() => r(m) ?? r(d)), g = /* @__PURE__ */ u(() => T9(r(p), [e.y1 - r(i), e.y0], r(c), r(o), r(s))), v = /* @__PURE__ */ u(() => r(g).yScale), k = /* @__PURE__ */ u(() => r(g).ticks);
  function S(ne) {
    r(m) !== null ? re(m, ne, !0) : Ee.updateSubplotProperty(e.subplotIndex, "y_domain.current", ne);
  }
  function N() {
    re(m, [...r(d)], !0);
  }
  function I() {
    r(m) !== null && (Ee.updateSubplotProperty(e.subplotIndex, "y_domain.current", r(m)), re(m, null));
  }
  var x = zp(), w = ce(x), y = he(w), H = he(y), B = Q(y), V = he(B);
  l(V, "x", -1e4), l(V, "width", 2e4);
  var X = Q(w), G = he(X);
  {
    var q = (ne) => {
      var ie = Rp(), ue = ce(ie);
      Xe(ue, 23, () => e.subplot.visualisation_layers, (te) => te.id, (te, ae) => {
        var ye = qe(), ve = ce(ye);
        {
          var $ = (pe) => {
            var Ae = qe(), L = ce(Ae);
            {
              var se = (me) => {
                const Ie = /* @__PURE__ */ u(() => r(b).get(r(ae).id)), Ve = /* @__PURE__ */ u(() => r(Ie)?.sources ?? []), Ne = /* @__PURE__ */ u(() => r(Ie)?.layer ?? r(ae));
                var Qe = qe(), Se = ce(Qe);
                Xe(Se, 19, () => r(Ve), (K, xe) => pa(K) ? K._instanceId : xe, (K, xe) => {
                  const We = /* @__PURE__ */ u(() => pa(r(xe)) ? Rc(r(xe)) : void 0), Ze = /* @__PURE__ */ u(() => pa(r(xe)) ? {
                    ...r(Ne),
                    source: r(xe),
                    ...r(xe)._parameterMappingOverride && {
                      parameter_mapping: {
                        ...r(Ne).parameter_mapping,
                        ...r(xe)._parameterMappingOverride
                      }
                    }
                  } : r(Ne));
                  Sm(K, {
                    get layer() {
                      return r(Ze);
                    },
                    get xScale() {
                      return e.referenceXScale;
                    },
                    get yScale() {
                      return r(v);
                    },
                    get scale_type() {
                      return r(c);
                    },
                    get instanceContext() {
                      return r(We);
                    }
                  });
                }), T(me, Qe);
              }, fe = (me) => {
                const Ie = /* @__PURE__ */ u(() => r(b).get(r(ae).id)), Ve = /* @__PURE__ */ u(() => r(Ie)?.sources ?? []), Ne = /* @__PURE__ */ u(() => r(Ie)?.layer ?? r(ae));
                var Qe = qe(), Se = ce(Qe);
                Xe(Se, 19, () => r(Ve), (K, xe) => pa(K) ? K._instanceId : xe, (K, xe) => {
                  const We = /* @__PURE__ */ u(() => pa(r(xe)) ? Rc(r(xe)) : void 0), Ze = /* @__PURE__ */ u(() => pa(r(xe)) ? {
                    ...r(Ne),
                    source: r(xe),
                    ...r(xe)._parameterMappingOverride && {
                      parameter_mapping: {
                        ...r(Ne).parameter_mapping,
                        ...r(xe)._parameterMappingOverride
                      }
                    }
                  } : r(Ne));
                  Dm(K, {
                    get layer() {
                      return r(Ze);
                    },
                    get xScale() {
                      return e.referenceXScale;
                    },
                    get yScale() {
                      return r(v);
                    },
                    get scale_type() {
                      return r(c);
                    },
                    get instanceContext() {
                      return r(We);
                    }
                  });
                }), T(me, Qe);
              };
              we(L, (me) => {
                r(ae).layer_type == "area" ? me(se) : r(ae).layer_type == "line" && me(fe, 1);
              });
            }
            T(pe, Ae);
          };
          we(ve, (pe) => {
            r(ae).visible !== !1 && pe($);
          });
        }
        T(te, ye);
      });
      var oe = Q(ue);
      Xe(oe, 17, () => e.subplot.visualisation_layers, (te) => te.id, (te, ae) => {
        var ye = qe(), ve = ce(ye);
        {
          var $ = (pe) => {
            var Ae = qe(), L = ce(Ae);
            {
              var se = (K) => {
                const xe = /* @__PURE__ */ u(() => r(b).get(r(ae).id)), We = /* @__PURE__ */ u(() => r(xe)?.sources ?? []), Ze = /* @__PURE__ */ u(() => r(xe)?.layer ?? r(ae));
                var yt = qe(), vt = ce(yt);
                Xe(vt, 19, () => r(We), (_t, rt) => pa(_t) ? _t._instanceId : rt, (_t, rt) => {
                  const hr = /* @__PURE__ */ u(() => pa(r(rt)) ? Rc(r(rt)) : void 0), br = /* @__PURE__ */ u(() => pa(r(rt)) ? {
                    ...r(Ze),
                    source: r(rt),
                    ...r(rt)._parameterMappingOverride && {
                      parameter_mapping: {
                        ...r(Ze).parameter_mapping,
                        ...r(rt)._parameterMappingOverride
                      }
                    }
                  } : r(Ze));
                  Em(_t, {
                    get layer() {
                      return r(br);
                    },
                    get xScale() {
                      return e.xScale;
                    },
                    get yScale() {
                      return r(v);
                    },
                    get scale_type() {
                      return r(c);
                    },
                    get instanceContext() {
                      return r(hr);
                    }
                  });
                }), T(K, yt);
              }, fe = (K) => {
                Lm(K, {
                  get layer() {
                    return r(ae);
                  },
                  get xScale() {
                    return e.xScale;
                  },
                  get yScale() {
                    return r(v);
                  }
                });
              }, me = (K) => {
                Ym(K, {
                  get layer() {
                    return r(ae);
                  },
                  get xScale() {
                    return e.xScale;
                  },
                  get yScale() {
                    return r(v);
                  }
                });
              }, Ie = (K) => {
                Cp(K, {
                  get layer() {
                    return r(ae);
                  },
                  get xScale() {
                    return e.xScale;
                  },
                  get yScale() {
                    return r(v);
                  }
                });
              }, Ve = (K) => {
                Wm(K, {
                  get layer() {
                    return r(ae);
                  },
                  get xScale() {
                    return e.xScale;
                  },
                  get yScale() {
                    return r(v);
                  },
                  get scale_type() {
                    return r(c);
                  }
                });
              }, Ne = (K) => {
                jm(K, {
                  get layer() {
                    return r(ae);
                  },
                  get xScale() {
                    return e.xScale;
                  },
                  get yScale() {
                    return r(v);
                  }
                });
              }, Qe = (K) => {
                up(K, {
                  get layer() {
                    return r(ae);
                  },
                  get xScale() {
                    return e.xScale;
                  },
                  get yScale() {
                    return r(v);
                  }
                });
              }, Se = (K) => {
                Fp(K, {
                  get layer() {
                    return r(ae);
                  },
                  get xScale() {
                    return e.xScale;
                  },
                  get yScale() {
                    return r(v);
                  }
                });
              };
              we(L, (K) => {
                r(ae).layer_type == "wiggle" ? K(se) : r(ae).layer_type == "bars" ? K(fe, 1) : r(ae).layer_type == "interval_image" ? K(me, 2) : r(ae).layer_type == "zarr_interval_image" ? K(Ie, 3) : r(ae).layer_type == "xy_text_annotation" ? K(Ve, 4) : r(ae).layer_type == "issue_time_selector" ? K(Ne, 5) : r(ae).layer_type == "event_interval" ? K(Qe, 6) : r(ae).layer_type == "symbols" && K(Se, 7);
              });
            }
            T(pe, Ae);
          };
          we(ve, (pe) => {
            r(ae).visible !== !1 && pe($);
          });
        }
        T(te, ye);
      });
      var de = Q(oe);
      cm(de, {
        get xScale() {
          return e.xScale;
        },
        get yScale() {
          return r(v);
        }
      });
      var ge = Q(de);
      ym(ge, {
        get subplot() {
          return e.subplot;
        },
        get xScale() {
          return e.xScale;
        },
        get yScale() {
          return r(v);
        }
      }), Y(() => l(ue, "transform", r(a))), T(ne, ie);
    };
    we(G, (ne) => {
      r(n) > 50 && ne(q);
    });
  }
  var E = Q(X), _ = he(E);
  {
    var C = (ne) => {
      var ie = qe(), ue = ce(ie);
      Xe(ue, 17, () => e.subplot.visualisation_layers, (oe) => oe.id, (oe, de) => {
        var ge = qe(), te = ce(ge);
        {
          var ae = (ye) => {
            zm(ye, {
              get layer() {
                return r(de);
              },
              get xScale() {
                return e.xScale;
              },
              get yScale() {
                return r(v);
              },
              get scale_type() {
                return r(c);
              }
            });
          };
          we(te, (ye) => {
            r(de).visible !== !1 && r(de).layer_type === "static_annotation" && ye(ae);
          });
        }
        T(oe, ge);
      }), T(ne, ie);
    };
    we(_, (ne) => {
      r(n) > 50 && ne(C);
    });
  }
  var A = Q(E);
  lm(A, {
    get subplot() {
      return e.subplot;
    },
    get xScale() {
      return e.xScale;
    },
    get yScale() {
      return r(v);
    }
  });
  var Z = Q(A);
  {
    var ee = (ne) => {
      var ie = Op(), ue = ce(ie);
      nm(ue, {
        get subplot() {
          return e.subplot;
        },
        get xScale() {
          return e.xScale;
        },
        get yScale() {
          return r(v);
        }
      });
      var oe = Q(ue);
      {
        let ge = /* @__PURE__ */ u(() => e.xScale.range()[0]);
        H9(oe, {
          get left() {
            return r(ge);
          },
          get yScale() {
            return r(v);
          },
          get ticks() {
            return r(k);
          },
          yTickPadding: 4,
          yTickSize: 6,
          get scale_type() {
            return r(c);
          },
          get yTickFormat() {
            return r(f);
          },
          get yLabel() {
            return e.subplot.y_axis.label;
          },
          get ticksVisible() {
            return e.subplot.y_axis.ticks_visible;
          },
          get annotationVisible() {
            return e.subplot.y_axis.annotation_visible;
          }
        });
      }
      var de = Q(oe);
      {
        let ge = /* @__PURE__ */ u(() => e.xScale.range()[0]);
        q9(de, {
          get left() {
            return r(ge);
          },
          get yScale() {
            return r(v);
          },
          get scale_type() {
            return r(c);
          },
          get y_domain_bounds() {
            return r(h);
          },
          get mirror() {
            return e.subplot.y_domain.mirror;
          },
          onYDomainChange: S,
          onDragStart: N,
          onDragEnd: I
        });
      }
      T(ne, ie);
    };
    we(Z, (ne) => {
      r(n) > 50 && ne(ee);
    });
  }
  Y(
    (ne, ie, ue, oe, de, ge) => {
      l(y, "id", `clip-${e.subplot.id ?? ""}`), l(H, "x", ne), l(H, "y", ie), l(H, "width", ue), l(H, "height", oe), l(B, "id", `clip-vertical-${e.subplot.id ?? ""}`), l(V, "y", de), l(V, "height", ge), l(X, "clip-path", `url(#clip-${e.subplot.id ?? ""})`), l(E, "clip-path", `url(#clip-vertical-${e.subplot.id ?? ""})`);
    },
    [
      () => e.xScale.range()[0],
      () => r(v).range()[1],
      () => Math.max(0, e.xScale.range()[1] - e.xScale.range()[0]),
      () => Math.max(0, r(v).range()[0] - r(v).range()[1]),
      () => r(v).range()[1],
      () => Math.max(0, r(v).range()[0] - r(v).range()[1])
    ]
  ), T(t, x), ct();
}
const Vp = { bottom_margin: { minimum: 0, maximum: 100 } }, Yp = {
  properties: Vp
}, Lo = 20, d1 = Yp.properties.bottom_margin, bl = d1.minimum, Hp = d1.maximum;
function ml(t, e) {
  return e / t;
}
function Bp(t, e, a, n) {
  const i = Math.round(n - e), c = a - Lo, o = Math.min(Hp, Math.max(bl, c)), s = Math.max(bl, Math.min(o, i));
  t.bottom_margin = s;
}
function Wp(t, e, a, n, i) {
  if (e < 0 || e >= t.length - 1 || i.length !== t.length) return;
  const c = i.reduce((d, h) => d + h, 0), o = n / c, s = a / n * c, f = [...i];
  if (s > 0) {
    let d = e + 1, h = s;
    for (; h > 1e-3 && d < t.length; ) {
      const m = i[d], p = ml(o, Lo), g = m - p;
      if (g > 0) {
        const v = Math.min(g, h);
        f[d] = m - v, h -= v;
      }
      d++;
    }
    const b = s - h;
    b > 0 && (f[e] = i[e] + b);
  } else if (s < 0) {
    let d = e, h = Math.abs(s);
    for (; h > 1e-3 && d >= 0; ) {
      const m = i[d], p = ml(o, Lo), g = m - p;
      if (g > 0) {
        const v = Math.min(g, h);
        f[d] = m - v, h -= v;
      }
      d--;
    }
    const b = Math.abs(s) - h;
    b > 0 && (f[e + 1] = i[e + 1] + b);
  }
  for (let d = 0; d < t.length; d++)
    t[d].height = f[d];
}
var Gp = /* @__PURE__ */ U('<polygon class="arrowhead"></polygon><polygon class="arrowhead"></polygon>', 1), Xp = /* @__PURE__ */ U('<polygon class="arrowhead"></polygon><polygon class="arrowhead"></polygon>', 1), qp = /* @__PURE__ */ U('<text dominant-baseline="middle" fill="white" stroke="white" stroke-width="4" stroke-linejoin="round" font-size="11" font-weight="500" font-family="system-ui, -apple-system, sans-serif" class="dimension-text-bg"> </text><text dominant-baseline="middle" font-size="11" font-weight="500" font-family="system-ui, -apple-system, sans-serif" class="dimension-text svelte-gogtqe"> </text>', 1), jp = /* @__PURE__ */ U('<g class="dimension-indicator svelte-gogtqe"><line class="extension-line svelte-gogtqe"></line><line class="extension-line svelte-gogtqe"></line><line class="dimension-line svelte-gogtqe"></line><!><!></g>');
function Fo(t, e) {
  let a = Tt(e, "label", 3, ""), n = Tt(e, "color", 3, "var(--dimension-color, #888)"), i = Tt(e, "extensionLineLength", 3, 10), c = Tt(e, "arrowSize", 3, 7), o = Tt(e, "minArrowSpacing", 3, 28), s = Tt(e, "showValue", 3, !0), f = Tt(e, "textSide", 3, "left"), d = Tt(e, "strokeWidth", 3, 1.5), h = /* @__PURE__ */ u(() => Math.abs(e.y2 - e.y1)), b = /* @__PURE__ */ u(() => r(h) < o()), m = /* @__PURE__ */ u(() => Math.min(e.y1, e.y2)), p = /* @__PURE__ */ u(() => Math.max(e.y1, e.y2)), g = /* @__PURE__ */ u(() => (r(m) + r(p)) / 2), v = /* @__PURE__ */ u(() => e.x - i()), k = /* @__PURE__ */ u(() => e.x + i()), S = /* @__PURE__ */ u(() => f() === "left" ? r(v) - 4 : r(k) + 4), N = /* @__PURE__ */ u(() => f() === "left" ? "end" : "start"), I = /* @__PURE__ */ u(() => () => {
    const E = Math.round(r(h));
    return a() ? `${a()}: ${E}px` : `${E}px`;
  });
  var x = jp(), w = he(x), y = Q(w), H = Q(y), B = Q(H);
  {
    var V = (E) => {
      var _ = Gp(), C = ce(_), A = Q(C);
      Y(() => {
        l(C, "points", `${e.x ?? ""},${r(m) ?? ""} ${e.x - c() / 2},${r(m) - c()} ${e.x + c() / 2},${r(m) - c()}`), l(C, "fill", n()), l(A, "points", `${e.x ?? ""},${r(p) ?? ""} ${e.x - c() / 2},${r(p) + c()} ${e.x + c() / 2},${r(p) + c()}`), l(A, "fill", n());
      }), T(E, _);
    }, X = (E) => {
      var _ = Xp(), C = ce(_), A = Q(C);
      Y(() => {
        l(C, "points", `${e.x ?? ""},${r(m) ?? ""} ${e.x - c() / 2},${r(m) + c()} ${e.x + c() / 2},${r(m) + c()}`), l(C, "fill", n()), l(A, "points", `${e.x ?? ""},${r(p) ?? ""} ${e.x - c() / 2},${r(p) - c()} ${e.x + c() / 2},${r(p) - c()}`), l(A, "fill", n());
      }), T(E, _);
    };
    we(B, (E) => {
      r(b) ? E(V) : E(X, -1);
    });
  }
  var G = Q(B);
  {
    var q = (E) => {
      var _ = qp(), C = ce(_), A = he(C), Z = Q(C), ee = he(Z);
      Y(
        (ne, ie) => {
          l(C, "x", r(S)), l(C, "y", r(g)), l(C, "text-anchor", r(N)), Ke(A, ne), l(Z, "x", r(S)), l(Z, "y", r(g)), l(Z, "text-anchor", r(N)), l(Z, "fill", n()), Ke(ee, ie);
        },
        [() => r(I)(), () => r(I)()]
      ), T(E, _);
    };
    we(G, (E) => {
      s() && E(q);
    });
  }
  Y(() => {
    l(w, "x1", r(v)), l(w, "x2", r(k)), l(w, "y1", r(m)), l(w, "y2", r(m)), l(w, "stroke", n()), l(w, "stroke-width", d()), l(y, "x1", r(v)), l(y, "x2", r(k)), l(y, "y1", r(p)), l(y, "y2", r(p)), l(y, "stroke", n()), l(y, "stroke-width", d()), l(H, "x1", e.x), l(H, "x2", e.x), l(H, "y1", r(m)), l(H, "y2", r(p)), l(H, "stroke", n()), l(H, "stroke-width", d());
  }), Er(3, x, () => Rr, () => ({ duration: 150 })), T(t, x);
}
var Zp = /* @__PURE__ */ U('<line stroke="dodgerblue" stroke-width="2" pointer-events="none"></line><!><!>', 1), Jp = /* @__PURE__ */ U('<!><rect fill="transparent" role="separator" aria-orientation="horizontal"></rect>', 1);
function Qp(t, e) {
  it(e, !0);
  let a;
  const n = 12;
  let i = /* @__PURE__ */ Me(!1), c = /* @__PURE__ */ Me(!1), o = [], s = 0, f = /* @__PURE__ */ u(() => r(i) || r(c)), d = /* @__PURE__ */ u(() => e.leftOffset + e.handleWidth / 2);
  xn(() => {
    mt(a).call(ja().on("start", (v) => {
      re(c, !0), s = v.y, o = Ee.visibleSubplots.map((k) => k.height);
    }).on("drag", (v) => {
      const k = v.y - s;
      Wp(Ee.visibleSubplots, e.visibleIndexAbove, k, e.totalPixelHeight, o);
    }).on("end", () => {
      re(c, !1), o = [], s = 0;
    }));
  });
  var h = Jp(), b = ce(h);
  {
    var m = (v) => {
      var k = Zp(), S = ce(k), N = Q(S);
      {
        let x = /* @__PURE__ */ u(() => e.positionAbove.y1 - e.positionAbove.marginBottom);
        Fo(N, {
          get x() {
            return r(d);
          },
          get y1() {
            return e.positionAbove.y0;
          },
          get y2() {
            return r(x);
          },
          color: "dodgerblue",
          textSide: "left"
        });
      }
      var I = Q(N);
      {
        let x = /* @__PURE__ */ u(() => e.positionBelow.y1 - e.positionBelow.marginBottom);
        Fo(I, {
          get x() {
            return r(d);
          },
          get y1() {
            return e.positionBelow.y0;
          },
          get y2() {
            return r(x);
          },
          color: "dodgerblue",
          textSide: "left"
        });
      }
      Y(() => {
        l(S, "x1", e.leftOffset), l(S, "x2", e.leftOffset + e.handleWidth), l(S, "y1", e.y), l(S, "y2", e.y);
      }), Er(3, S, () => Rr, () => ({ duration: 150 })), T(v, k);
    };
    we(b, (v) => {
      r(f) && v(m);
    });
  }
  var p = Q(b);
  let g;
  l(p, "height", n), Da(p, (v) => a = v, () => a), Y(() => {
    g = kn(p, 0, "subplot-height-handle svelte-bssupp", null, g, { dragging: r(c) }), l(p, "x", e.leftOffset), l(p, "y", e.y - n / 2), l(p, "width", e.handleWidth);
  }), xa("mouseenter", p, () => re(i, !0)), xa("mouseleave", p, () => re(i, !1)), T(t, h), ct();
}
var Kp = /* @__PURE__ */ U('<!><rect fill="transparent" role="separator" aria-orientation="horizontal"></rect>', 1);
function $p(t, e) {
  it(e, !0);
  let a;
  const n = 12;
  let i = /* @__PURE__ */ Me(!1), c = /* @__PURE__ */ Me(!1), o = 0, s = 0, f, d = /* @__PURE__ */ u(() => r(i) || r(c)), h = /* @__PURE__ */ u(() => e.marginHeight < 5), b = /* @__PURE__ */ u(() => e.leftOffset + e.handleWidth / 2), m = /* @__PURE__ */ u(() => e.y), p = /* @__PURE__ */ u(() => e.y + e.marginHeight);
  xn(() => {
    mt(a).call(ja().on("start", (I) => {
      re(c, !0), s = I.y, f = Ee.getSubplotById(e.subplotId), o = f.bottom_margin;
    }).on("drag", (I) => {
      if (!f) return;
      const x = I.y - s;
      Bp(f, x, e.subplotPixelHeight, o);
    }).on("end", () => {
      re(c, !1), o = 0, s = 0, f = void 0;
    }));
  });
  var g = Kp(), v = ce(g);
  {
    var k = (I) => {
      Fo(I, {
        get x() {
          return r(b);
        },
        get y1() {
          return r(m);
        },
        get y2() {
          return r(p);
        },
        label: "margin",
        color: "hsl(30, 90%, 50%)",
        textSide: "left"
      });
    };
    we(v, (I) => {
      r(d) && I(k);
    });
  }
  var S = Q(v);
  let N;
  l(S, "height", n), Da(S, (I) => a = I, () => a), Y(() => {
    N = kn(S, 0, "subplot-margin-handle svelte-y5s56q", null, N, {
      dragging: r(c),
      "at-minimum": r(h)
    }), l(S, "x", e.leftOffset), l(S, "y", e.y - n / 2), l(S, "width", e.handleWidth);
  }), xa("mouseenter", S, () => re(i, !0)), xa("mouseleave", S, () => re(i, !1)), T(t, g), ct();
}
var eg = /* @__PURE__ */ U('<g class="playhead"><g><g><path stroke-opacity="1" fill-opacity="0.5" class="fill-white dark:fill-black stroke-black dark:stroke-white"></path></g></g></g>');
function tg(t, e) {
  it(e, !0);
  let a, n = /* @__PURE__ */ u(() => e.xScale.range()[0] + Ge.playheadPosition.current * (e.xScale.range()[1] - e.xScale.range()[0]));
  xn(() => {
    const d = ja().on("start", () => null).on("drag", (h) => {
      const b = (h.x - e.xScale.range()[0]) / (e.xScale.range()[1] - e.xScale.range()[0]);
      Ge.setPlayhead(b, 0);
    }).on("end", () => {
      Ge.animationPlaying && Ge.playAnimation();
    });
    mt(a).call(d);
  });
  const i = "M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z";
  var c = eg(), o = he(c), s = he(o);
  l(s, "transform", "rotate(180) scale(0.6666666666666666)");
  var f = he(s);
  l(f, "transform", "translate(-12, -12)"), l(f, "d", i), l(f, "stroke-width", "3px"), Da(o, (d) => a = d, () => a), Y(() => l(o, "transform", `translate(${r(n) ?? ""}, ${e.contentBottom ?? ""})`)), T(t, c), ct();
}
function Zc(t, e) {
  if (!t || typeof t != "object")
    return null;
  const a = Ca(t) ? aa(t, e) : t;
  return a || null;
}
function Jc(t, e) {
  const a = t.color_map_domain;
  return a?.current ? {
    colormap: t.color_map ?? _n,
    domain: a.current,
    domainBounds: a.bounds ?? a.current,
    reverse: t.reverse_color_map ?? !1,
    trim: t.color_map_trim,
    propertyPath: `${e}.color_map_domain.current`
  } : null;
}
function u1(t, e) {
  if ("color_mapping" in t && t.color_mapping) {
    const a = Zc(t.color_mapping, e);
    if (a)
      return Jc(a, "color_mapping");
  }
  if ("style" in t && t.style && typeof t.style == "object" && !Ca(t.style)) {
    const a = t.style, n = a.color_mode;
    if ((n === void 0 || n !== "fixed") && "color_mapping" in a && a.color_mapping) {
      const i = Zc(a.color_mapping, e);
      if (i)
        return Jc(i, "style.color_mapping");
    }
  }
  if ("textures" in t && Array.isArray(t.textures)) {
    const a = t.textures;
    for (let n = 0; n < a.length; n++) {
      const i = a[n];
      if (i.type === "color" && i.color_mapping) {
        const c = Zc(i.color_mapping, e);
        if (c)
          return Jc(c, `textures.${n}.color_mapping`);
      }
    }
  }
  return null;
}
var ag = /* @__PURE__ */ U("<rect></rect>"), rg = /* @__PURE__ */ U("<rect></rect>"), ng = /* @__PURE__ */ U("<line></line>"), ig = /* @__PURE__ */ U('<rect stroke="none"></rect><line></line>', 1), cg = /* @__PURE__ */ U("<rect></rect><rect></rect>", 1), og = /* @__PURE__ */ U('<text dominant-baseline="central" text-anchor="middle" class="fill-black dark:fill-white">M1</text>'), sg = /* @__PURE__ */ U("<path></path>"), fg = /* @__PURE__ */ U("<rect></rect>"), lg = /* @__PURE__ */ U("<line></line>"), dg = /* @__PURE__ */ U("<line></line>"), ug = /* @__PURE__ */ U("<line></line>"), hg = /* @__PURE__ */ U('<circle fill="#FFD700" stroke="#FF8C00"></circle>'), bg = /* @__PURE__ */ U("<!><!><!><!>", 1), mg = /* @__PURE__ */ U('<path fill="none"></path>'), pg = /* @__PURE__ */ U('<rect></rect><path></path><path fill="none"></path>', 1), gg = /* @__PURE__ */ U("<line></line>"), yg = /* @__PURE__ */ U('<line></line><path fill="none"></path>', 1), vg = /* @__PURE__ */ U('<line></line><path fill="none"></path>', 1), _g = /* @__PURE__ */ U("<circle></circle>"), wg = /* @__PURE__ */ U("<line></line><line></line>", 1), xg = /* @__PURE__ */ U('<path fill="none"></path><path fill="none"></path>', 1), kg = /* @__PURE__ */ U('<line stroke="#ff0000"></line><line stroke="#00ff00"></line><line stroke="#0000ff"></line>', 1), Sg = /* @__PURE__ */ U('<line stroke="#ff0000"></line><line stroke="#00ff00"></line><line stroke="#0000ff"></line><circle fill="#ff0000"></circle><circle fill="#00ff00"></circle><circle fill="#0000ff"></circle>', 1), Mg = /* @__PURE__ */ U("<stop></stop>"), Tg = /* @__PURE__ */ U('<defs><linearGradient x1="0%" y1="0%" x2="100%" y2="0%"></linearGradient><radialGradient r="0.7"><stop offset="0%" stop-color="white" stop-opacity="0.35"></stop><stop offset="50%" stop-color="white" stop-opacity="0"></stop><stop offset="100%" stop-color="black" stop-opacity="0.3"></stop></radialGradient></defs><circle stroke="#555"></circle><circle></circle>', 1), Dg = /* @__PURE__ */ U('<defs><radialGradient r="0.7"><stop offset="0%"></stop><stop offset="50%"></stop><stop offset="100%"></stop></radialGradient></defs><circle stroke="#555"></circle>', 1), Ag = /* @__PURE__ */ U("<rect></rect>"), Cg = /* @__PURE__ */ U('<defs><radialGradient cx="0.5" cy="0.5" r="0.5"><stop offset="0%" stop-opacity="0"></stop><stop offset="60%"></stop><stop offset="85%"></stop><stop offset="100%"></stop></radialGradient></defs><ellipse></ellipse>', 1), Pg = /* @__PURE__ */ U('<defs><linearGradient x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%"></stop><stop offset="40%"></stop><stop offset="100%"></stop></linearGradient></defs><path></path>', 1), Eg = /* @__PURE__ */ U("<stop></stop>"), Ig = /* @__PURE__ */ U('<defs><linearGradient x1="0%" y1="0%" x2="0%" y2="100%"></linearGradient></defs>'), Ng = /* @__PURE__ */ U('<path d="M 6,1 C 9,5 9,11 7,15 L 11,15 C 13,11 13,5 10,1 Z" stroke="#555"></path>'), Lg = /* @__PURE__ */ U('<path d="M 7,0 C 10,3 10,7 8,10 L 12,10 C 14,7 14,3 11,0 Z" stroke="#555"></path>'), Fg = /* @__PURE__ */ U("<!><!>", 1), Rg = /* @__PURE__ */ U('<circle stroke="#555"></circle>'), Og = /* @__PURE__ */ U('<circle stroke="#555"></circle>'), zg = /* @__PURE__ */ U("<rect></rect>"), Ug = /* @__PURE__ */ U("<rect></rect>"), Vg = /* @__PURE__ */ U("<polygon></polygon>"), Yg = /* @__PURE__ */ U("<polygon></polygon>"), Hg = /* @__PURE__ */ U("<circle></circle>"), Bg = /* @__PURE__ */ U('<line stroke="#ccc"></line><!>', 1), Wg = /* @__PURE__ */ U("<stop></stop>"), Gg = /* @__PURE__ */ U('<defs><linearGradient x1="0%" y1="0%" x2="100%" y2="0%"></linearGradient></defs><rect stroke="#555"></rect>', 1), Xg = /* @__PURE__ */ U("<line></line>"), qg = /* @__PURE__ */ U("<line></line><!>", 1), jg = /* @__PURE__ */ U("<line></line>"), Zg = /* @__PURE__ */ U('<line class="stroke-black dark:stroke-white"></line><path></path>', 1), Jg = /* @__PURE__ */ U("<line></line>"), Qg = /* @__PURE__ */ U("<rect></rect>"), Kg = /* @__PURE__ */ U("<rect></rect>"), $g = /* @__PURE__ */ U("<polygon></polygon>"), ey = /* @__PURE__ */ U("<polygon></polygon>"), ty = /* @__PURE__ */ U("<circle></circle>"), ay = /* @__PURE__ */ U("<rect></rect>"), ry = /* @__PURE__ */ U('<line></line><path fill="none"></path>', 1), ny = /* @__PURE__ */ U("<stop></stop>"), iy = /* @__PURE__ */ U('<defs><linearGradient x1="0%" y1="0%" x2="100%" y2="0%"></linearGradient></defs><rect stroke="#555"></rect>', 1), cy = /* @__PURE__ */ U('<rect fill="#b8d4e8" stroke="#555"></rect><circle fill="#f0c040"></circle><polygon points="2,14 6,6 10,14" fill="#7a9a6a"></polygon><polygon points="7,14 10,8 14,14" fill="#5a7a4a"></polygon>', 1), oy = /* @__PURE__ */ U('<rect fill="#b8d4e8" stroke="#555"></rect><circle fill="#f0c040"></circle><polygon points="1,9 6,3 11,9" fill="#7a9a6a"></polygon><polygon points="8,9 12,4 19,9" fill="#5a7a4a"></polygon>', 1), sy = /* @__PURE__ */ U("<stop></stop>"), fy = /* @__PURE__ */ U('<defs><linearGradient x1="0%" y1="0%" x2="100%" y2="0%"></linearGradient></defs><rect stroke="#555"></rect>', 1), ly = /* @__PURE__ */ U("<rect></rect><rect></rect>", 1), dy = /* @__PURE__ */ U("<rect></rect><rect></rect>", 1), uy = /* @__PURE__ */ U("<polygon></polygon><polygon></polygon>", 1), hy = /* @__PURE__ */ U("<polygon></polygon><polygon></polygon>", 1), by = /* @__PURE__ */ U("<circle></circle><circle></circle>", 1), my = /* @__PURE__ */ U("<stop></stop>"), py = /* @__PURE__ */ U('<linearGradient x1="100%" y1="0%" x2="0%" y2="100%"></linearGradient>'), gy = /* @__PURE__ */ U('<defs><radialGradient cx="0.35" cy="0.35" r="0.65"><stop offset="0%"></stop><stop offset="50%"></stop><stop offset="100%"></stop></radialGradient><!></defs><circle stroke="#555"></circle><path fill="none" stroke-linecap="round"></path>', 1), yy = /* @__PURE__ */ U('<circle stroke="#555"></circle>'), vy = /* @__PURE__ */ U('<rect stroke="#ccc"></rect>'), _y = /* @__PURE__ */ U('<!><text dominant-baseline="central" text-anchor="middle">A</text>', 1), wy = /* @__PURE__ */ U('<line></line><path d="M 12,8.5 L 14,10 L 12,11.5" fill="none"></path>', 1), xy = /* @__PURE__ */ U('<line></line><path d="M 15.5,5.5 L 17.5,7 L 15.5,8.5" fill="none"></path>', 1), ky = /* @__PURE__ */ U('<defs><radialGradient cx="0.35" cy="0.35" r="0.65"><stop offset="0%"></stop><stop offset="50%"></stop><stop offset="100%"></stop></radialGradient></defs><circle stroke="#555"></circle><path fill="none" stroke="#ccc" stroke-linecap="round"></path><!>', 1), Sy = /* @__PURE__ */ U("<stop></stop>"), My = /* @__PURE__ */ U('<defs><linearGradient x1="0%" y1="0%" x2="0%" y2="100%"></linearGradient></defs><path stroke="#555"></path>', 1), Ty = /* @__PURE__ */ U('<rect class="fill-gray-400 dark:fill-gray-500"></rect>'), Dy = /* @__PURE__ */ U('<svg class="shrink-0"><!></svg>');
function h1(t, e) {
  it(e, !0);
  let a = Tt(e, "variant", 3, "icon");
  function n(j) {
    if ("style" in j && j.style && typeof j.style == "object") {
      const P = j.style;
      if ("material" in P && P.material && typeof P.material == "object") {
        const F = P.material;
        if ("color" in F && typeof F.color == "string")
          return F.color;
      }
      if ("color" in P && typeof P.color == "string")
        return P.color;
    }
    return "#808080";
  }
  function i(j, P = 5, F = !1) {
    const W = oi(j), M = [];
    for (let O = 0; O < P; O++) {
      const D = O / (P - 1), R = F ? 1 - D : D;
      M.push({
        offset: `${Math.round(D * 100)}%`,
        color: W(R)
      });
    }
    return M;
  }
  function c(j, P) {
    const F = parseInt(j.replace("#", ""), 16), W = Math.min(255, Math.floor((F >> 16) + (255 - (F >> 16)) * P)), M = Math.min(255, Math.floor((F >> 8 & 255) + (255 - (F >> 8 & 255)) * P)), O = Math.min(255, Math.floor((F & 255) + (255 - (F & 255)) * P));
    return `#${(W << 16 | M << 8 | O).toString(16).padStart(6, "0")}`;
  }
  function o(j, P) {
    const F = parseInt(j.replace("#", ""), 16), W = Math.max(0, Math.floor((F >> 16) * (1 - P))), M = Math.max(0, Math.floor((F >> 8 & 255) * (1 - P))), O = Math.max(0, Math.floor((F & 255) * (1 - P)));
    return `#${(W << 16 | M << 8 | O).toString(16).padStart(6, "0")}`;
  }
  let s = /* @__PURE__ */ u(() => u1(e.layer, Ee.drivers)), f = /* @__PURE__ */ u(() => "source" in e.layer ? e.layer.source : void 0), d = /* @__PURE__ */ u(() => e6(r(f))), h = /* @__PURE__ */ u(() => r(d) ? t6(r(f)) : void 0), b = /* @__PURE__ */ u(() => os(r(h))), m = /* @__PURE__ */ u(() => r(b) === void 0 || r(b).length > 0), p = /* @__PURE__ */ u(() => {
    if (!r(d) || !r(m)) return null;
    const j = a6(r(f), Ee.drivers);
    return !j || j.length < 2 ? null : j.slice(0, 3).map((P, F) => ss(r(h), P, F, Ee.drivers));
  }), g = /* @__PURE__ */ u(() => r(s) ? i(r(s).colormap, 5, r(s).reverse) : []), v = /* @__PURE__ */ u(() => n(e.layer)), k = /* @__PURE__ */ u(() => c(r(v), 0.4)), S = /* @__PURE__ */ u(() => o(r(v), 0.3)), N = /* @__PURE__ */ u(() => `swatch-gradient-${e.layer.layer_type}-${Math.random().toString(36).slice(2, 8)}`), I = /* @__PURE__ */ u(() => `swatch-shading-${e.layer.layer_type}-${Math.random().toString(36).slice(2, 8)}`), x = /* @__PURE__ */ u(() => a() === "icon" ? { width: 16, height: 16, viewBox: "0 0 16 16" } : { width: 20, height: 10, viewBox: "0 0 20 10" }), w = /* @__PURE__ */ u(() => "style" in e.layer && e.layer.style && typeof e.layer.style == "object" ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.layer.style
  ) : {}), y = /* @__PURE__ */ u(() => a() === "icon" ? {
    // For 16x16 icon
    rectX: 2,
    rectY: 2,
    rectWidth: 12,
    rectHeight: 12,
    lineX1: 1,
    lineX2: 15,
    lineY: 8,
    centerY: 8,
    // Wiggle baseline
    wiggleBaseX: 14,
    // Bars positions
    bar1X: 2,
    bar1Y: 8,
    bar1Width: 5,
    bar1Height: 6,
    bar2X: 9,
    bar2Y: 3,
    bar2Width: 5,
    bar2Height: 11
  } : {
    // For 20x10 legend (compact)
    rectX: 1,
    rectY: 1,
    rectWidth: 18,
    rectHeight: 8,
    lineX1: 0,
    lineX2: 20,
    lineY: 5,
    centerY: 5,
    // Wiggle baseline
    wiggleBaseX: 18,
    // Bars positions
    bar1X: 2,
    bar1Y: 4,
    bar1Width: 6,
    bar1Height: 5,
    bar2X: 11,
    bar2Y: 2,
    bar2Width: 6,
    bar2Height: 7
  });
  var H = Dy(), B = he(H);
  {
    var V = (j) => {
      const P = /* @__PURE__ */ u(() => r(x).width / r(p).length);
      var F = qe(), W = ce(F);
      Xe(W, 17, () => r(p), Xi, (M, O, D) => {
        var R = ag();
        l(R, "y", 0), Y(() => {
          l(R, "x", D * r(P)), l(R, "width", r(P)), l(R, "height", r(x).height), l(R, "fill", r(O)), l(R, "rx", D === 0 ? a() === "legend" ? 2 : 1 : 0), l(R, "ry", D === r(p).length - 1 ? a() === "legend" ? 2 : 1 : 0);
        }), T(M, R);
      }), T(j, F);
    }, X = (j) => {
      var P = rg();
      Y(() => {
        l(P, "x", r(y).rectX), l(P, "y", r(y).rectY), l(P, "width", r(y).rectWidth), l(P, "height", r(y).rectHeight), l(P, "rx", a() === "legend" ? 2 : 1), l(P, "ry", a() === "legend" ? 2 : 1), l(P, "fill", r(w).fill ?? "none"), l(P, "fill-opacity", r(w).fill_opacity ?? 1), l(P, "stroke", r(w).stroke ?? "none"), l(P, "stroke-width", r(w).stroke_width ?? 1);
      }), T(j, P);
    }, G = (j) => {
      var P = ng();
      Y(() => {
        l(P, "x1", r(y).lineX1), l(P, "x2", r(y).lineX2), l(P, "y1", r(y).lineY), l(P, "y2", r(y).lineY), l(P, "stroke", r(w).stroke ?? "currentColor"), l(P, "stroke-width", r(w).stroke_width ?? 2);
      }), T(j, P);
    }, q = (j) => {
      var P = ig(), F = ce(P), W = Q(F);
      Y(() => {
        l(F, "x", r(y).rectX), l(F, "y", r(y).rectY), l(F, "width", r(y).rectWidth), l(F, "height", r(y).rectHeight), l(F, "fill", r(w).fill ?? "none"), l(F, "fill-opacity", r(w).fill_opacity ?? 1), l(W, "x1", r(y).wiggleBaseX), l(W, "x2", r(y).wiggleBaseX), l(W, "y1", r(y).rectY), l(W, "y2", r(y).rectY + r(y).rectHeight), l(W, "stroke", r(w).baseline_stroke ?? r(w).stroke ?? "currentColor"), l(W, "stroke-width", r(w).baseline_stroke_width ?? r(w).stroke_width ?? 1);
      }), T(j, P);
    }, E = (j) => {
      const P = /* @__PURE__ */ u(() => r(w).fill_colors ?? [{ color: "#888" }, { color: "#888" }, { color: "#888" }]);
      var F = cg(), W = ce(F), M = Q(W);
      Y(() => {
        l(W, "x", r(y).bar1X), l(W, "y", r(y).bar1Y), l(W, "width", r(y).bar1Width), l(W, "height", r(y).bar1Height), l(W, "fill", r(P)[0]?.color ?? "#888"), l(W, "fill-opacity", r(w).fill_opacity ?? 1), l(W, "stroke", r(w).stroke ?? "none"), l(W, "stroke-width", r(w).stroke_width ?? 0), l(M, "x", r(y).bar2X), l(M, "y", r(y).bar2Y), l(M, "width", r(y).bar2Width), l(M, "height", r(y).bar2Height), l(M, "fill", r(P)[2]?.color ?? "#888"), l(M, "fill-opacity", r(w).fill_opacity ?? 1), l(M, "stroke", r(w).stroke ?? "none"), l(M, "stroke-width", r(w).stroke_width ?? 0);
      }), T(j, F);
    }, _ = (j) => {
      var P = og();
      Y(() => {
        l(P, "x", r(x).width / 2), l(P, "y", r(x).height / 2), ft(P, `font-size: ${a() === "icon" ? "9px" : "8px"}; font-weight: 500;`);
      }), T(j, P);
    }, C = (j) => {
      const P = /* @__PURE__ */ u(() => "subsolar_reference" in e.layer && e.layer.subsolar_reference), F = /* @__PURE__ */ u(() => "show_subsolar_point" in e.layer && e.layer.show_subsolar_point && r(P)), W = /* @__PURE__ */ u(() => "step_latitude" in e.layer ? e.layer.step_latitude : 30), M = /* @__PURE__ */ u(() => "step_longitude" in e.layer ? e.layer.step_longitude : 30), O = /* @__PURE__ */ u(() => r(P) && r(W) >= 90 && r(M) < 2), D = /* @__PURE__ */ u(() => r(w).stroke ?? "#666"), R = /* @__PURE__ */ u(() => r(w).stroke_width ?? 1), J = /* @__PURE__ */ u(() => r(w).stroke_opacity ?? 1), z = /* @__PURE__ */ u(() => r(w).fill), be = /* @__PURE__ */ u(() => r(w).fill_opacity ?? 0.3), le = /* @__PURE__ */ u(() => r(x).width), De = /* @__PURE__ */ u(() => r(x).height), ke = /* @__PURE__ */ u(() => a() === "icon" ? 3 : 4);
      var Le = bg(), Ce = ce(Le);
      {
        var Fe = (Te) => {
          var Ye = qe(), Bt = ce(Ye);
          {
            var Wt = ($e) => {
              var Oe = sg();
              Y(() => {
                l(Oe, "d", `M ${r(le) / 2 - r(ke)} ${r(De) ?? ""} L ${r(le) / 2 + r(ke)} 0 L ${r(le) ?? ""} 0 L ${r(le) ?? ""} ${r(De) ?? ""} Z`), l(Oe, "fill", r(z)), l(Oe, "fill-opacity", r(be));
              }), T($e, Oe);
            }, Ct = ($e) => {
              var Oe = fg();
              l(Oe, "x", 0), l(Oe, "y", 0), Y(() => {
                l(Oe, "width", r(le)), l(Oe, "height", r(De)), l(Oe, "fill", r(z)), l(Oe, "fill-opacity", r(be));
              }), T($e, Oe);
            };
            we(Bt, ($e) => {
              r(P) ? $e(Wt) : $e(Ct, -1);
            });
          }
          T(Te, Ye);
        };
        we(Ce, (Te) => {
          r(z) && Te(Fe);
        });
      }
      var Re = Q(Ce);
      {
        var _e = (Te) => {
          var Ye = lg();
          l(Ye, "x1", 0), Y(() => {
            l(Ye, "x2", r(le)), l(Ye, "y1", r(De) / 2), l(Ye, "y2", r(De) / 2), l(Ye, "stroke", r(D)), l(Ye, "stroke-width", r(R)), l(Ye, "stroke-opacity", r(J));
          }), T(Te, Ye);
        };
        we(Re, (Te) => {
          r(O) || Te(_e);
        });
      }
      var He = Q(Re);
      {
        var Pe = (Te) => {
          var Ye = dg();
          l(Ye, "y2", 0), Y(() => {
            l(Ye, "x1", r(le) / 2 - r(ke)), l(Ye, "x2", r(le) / 2 + r(ke)), l(Ye, "y1", r(De)), l(Ye, "stroke", r(D)), l(Ye, "stroke-width", r(R)), l(Ye, "stroke-opacity", r(J));
          }), T(Te, Ye);
        }, Be = (Te) => {
          var Ye = ug();
          l(Ye, "y1", 0), Y(() => {
            l(Ye, "x1", r(le) / 2), l(Ye, "x2", r(le) / 2), l(Ye, "y2", r(De)), l(Ye, "stroke", r(D)), l(Ye, "stroke-width", r(R)), l(Ye, "stroke-opacity", r(J));
          }), T(Te, Ye);
        };
        we(He, (Te) => {
          r(P) ? Te(Pe) : Te(Be, -1);
        });
      }
      var ze = Q(He);
      {
        var Ue = (Te) => {
          const Ye = /* @__PURE__ */ u(() => a() === "icon" ? 2.5 : 2), Bt = /* @__PURE__ */ u(() => (a() === "icon", 4)), Wt = /* @__PURE__ */ u(() => a() === "icon" ? 4 : 3);
          var Ct = hg();
          l(Ct, "cx", r(Bt)), l(Ct, "stroke-width", 0.75), Y(() => {
            l(Ct, "cy", r(Wt)), l(Ct, "r", r(Ye));
          }), T(Te, Ct);
        };
        we(ze, (Te) => {
          r(F) && Te(Ue);
        });
      }
      T(j, Le);
    }, A = (j) => {
      const P = /* @__PURE__ */ u(() => r(w).stroke ?? r(w).coastline_stroke ?? "#666"), F = /* @__PURE__ */ u(() => r(w).stroke_width ?? r(w).coastline_stroke_width ?? 1), W = /* @__PURE__ */ u(() => a() === "icon" ? "M7,0 Q10,2.5 7,4.5 Q4,6.5 8,9 Q10,11.5 6,13.5 Q4,15 7,16" : "M5,0 Q8,1.5 5.5,3 Q2.5,5 6.5,7 Q9,8.5 7,10");
      var M = mg();
      Y(() => {
        l(M, "d", r(W)), l(M, "stroke", r(P)), l(M, "stroke-width", r(F));
      }), T(j, M);
    }, Z = (j) => {
      const P = /* @__PURE__ */ u(() => r(x).width), F = /* @__PURE__ */ u(() => r(x).height), W = /* @__PURE__ */ u(() => a() === "icon" ? "M7,0 Q10,2.5 7,4.5 Q4,6.5 8,9 Q10,11.5 6,13.5 Q4,15 7,16" : "M5,0 Q8,1.5 5.5,3 Q2.5,5 6.5,7 Q9,8.5 7,10"), M = /* @__PURE__ */ u(() => a() === "icon" ? `${r(W)} L${r(P)},${r(F)} L${r(P)},0 Z` : `${r(W)} L${r(P)},${r(F)} L${r(P)},0 Z`), O = /* @__PURE__ */ u(() => r(w).coastline_stroke ?? "#888"), D = /* @__PURE__ */ u(() => r(w).coastline_stroke_width ?? 0.5);
      var R = pg(), J = ce(R);
      l(J, "x", 0), l(J, "y", 0);
      var z = Q(J), be = Q(z);
      Y(() => {
        l(J, "width", r(P)), l(J, "height", r(F)), l(J, "fill", r(w).background ?? "#b3d9ff"), l(J, "fill-opacity", r(w).background_opacity ?? 0.5), l(z, "d", r(M)), l(z, "fill", r(w).land_fill ?? "#e8e8e8"), l(z, "fill-opacity", r(w).land_fill_opacity ?? 1), l(be, "d", r(W)), l(be, "stroke", r(O)), l(be, "stroke-width", r(D));
      }), T(j, R);
    }, ee = (j) => {
      var P = gg();
      Y(() => {
        l(P, "x1", r(y).lineX1), l(P, "x2", r(y).lineX2), l(P, "y1", r(y).lineY), l(P, "y2", r(y).lineY), l(P, "stroke", r(w).stroke ?? "#0066cc"), l(P, "stroke-width", r(w).stroke_width ?? 2);
      }), T(j, P);
    }, ne = (j) => {
      const P = /* @__PURE__ */ u(() => r(w).stroke ?? "#666");
      var F = yg(), W = ce(F);
      l(W, "stroke-width", 1.5);
      var M = Q(W);
      l(M, "stroke-width", 1.5), Y(() => {
        l(W, "x1", r(y).lineX1 + 2), l(W, "x2", r(y).lineX2 - 4), l(W, "y1", r(y).lineY), l(W, "y2", r(y).lineY), l(W, "stroke", r(P)), l(M, "d", `M${r(y).lineX2 - 4},${r(y).lineY - 3} L${r(y).lineX2 - 1},${r(y).lineY ?? ""} L${r(y).lineX2 - 4},${r(y).lineY + 3}`), l(M, "stroke", r(P));
      }), T(j, F);
    }, ie = (j) => {
      const P = /* @__PURE__ */ u(() => r(w).color ?? "#ff6b6b");
      var F = vg(), W = ce(F);
      l(W, "stroke-width", 1.5);
      var M = Q(W);
      l(M, "stroke-width", 1.5), Y(() => {
        l(W, "x1", r(y).lineX1 + 2), l(W, "x2", r(y).lineX2 - 4), l(W, "y1", r(y).lineY), l(W, "y2", r(y).lineY), l(W, "stroke", r(P)), l(M, "d", `M${r(y).lineX2 - 4},${r(y).lineY - 3} L${r(y).lineX2 - 1},${r(y).lineY ?? ""} L${r(y).lineX2 - 4},${r(y).lineY + 3}`), l(M, "stroke", r(P));
      }), T(j, F);
    }, ue = (j) => {
      var P = _g();
      Y(() => {
        l(P, "cx", r(x).width / 2), l(P, "cy", r(x).height / 2), l(P, "r", a() === "icon" ? 5 : 4), l(P, "fill", r(w).fill ?? "#ff6600"), l(P, "stroke", r(w).stroke ?? "#000"), l(P, "stroke-width", r(w).stroke_width ?? 1);
      }), T(j, P);
    }, oe = (j) => {
      const P = /* @__PURE__ */ u(() => r(w).color ?? "#666");
      var F = wg(), W = ce(F);
      l(W, "stroke-width", 1);
      var M = Q(W);
      l(M, "stroke-width", 1), Y(() => {
        l(W, "x1", r(y).lineX1), l(W, "x2", r(y).lineX2), l(W, "y1", r(y).lineY), l(W, "y2", r(y).lineY), l(W, "stroke", r(P)), l(M, "x1", r(x).width / 2), l(M, "x2", r(x).width / 2), l(M, "y1", r(y).rectY), l(M, "y2", r(y).rectY + r(y).rectHeight), l(M, "stroke", r(P));
      }), T(j, F);
    }, de = (j) => {
      const P = /* @__PURE__ */ u(() => r(w).material ?? {}), F = /* @__PURE__ */ u(() => r(P).color ?? "#6a5acd");
      var W = xg(), M = ce(W);
      l(M, "stroke-width", 1);
      var O = Q(M);
      l(O, "stroke-width", 1), Y(() => {
        l(M, "d", `M${r(x).width / 2},${r(y).rectY + 1} Q${r(y).lineX1 + 3},${r(y).lineY ?? ""} ${r(y).lineX1 + 4},${r(y).lineY + 4}`), l(M, "stroke", r(F)), l(O, "d", `M${r(x).width / 2},${r(y).rectY + 1} Q${r(y).lineX2 - 3},${r(y).lineY ?? ""} ${r(y).lineX2 - 4},${r(y).lineY + 4}`), l(O, "stroke", r(F));
      }), T(j, W);
    }, ge = (j) => {
      var P = kg(), F = ce(P);
      l(F, "stroke-width", 1.5);
      var W = Q(F);
      l(W, "stroke-width", 1.5);
      var M = Q(W);
      l(M, "stroke-width", 1.5), Y(() => {
        l(F, "x1", r(x).width / 2), l(F, "y1", r(y).lineY), l(F, "x2", r(y).lineX2 - 2), l(F, "y2", r(y).lineY), l(W, "x1", r(x).width / 2), l(W, "y1", r(y).lineY), l(W, "x2", r(x).width / 2), l(W, "y2", r(y).rectY + 1), l(M, "x1", r(x).width / 2), l(M, "y1", r(y).lineY), l(M, "x2", r(y).lineX1 + 3), l(M, "y2", r(y).lineY + 2);
      }), T(j, P);
    }, te = (j) => {
      const P = /* @__PURE__ */ u(() => r(x).width / 2), F = /* @__PURE__ */ u(() => r(y).lineX2 - 2), W = /* @__PURE__ */ u(() => r(y).rectY + 1), M = /* @__PURE__ */ u(() => r(y).lineX1 + 3), O = /* @__PURE__ */ u(() => r(y).lineY + 2), D = /* @__PURE__ */ u(() => a() === "icon" ? 1.5 : 1.2);
      var R = Sg(), J = ce(R);
      l(J, "stroke-width", 1.5);
      var z = Q(J);
      l(z, "stroke-width", 1.5);
      var be = Q(z);
      l(be, "stroke-width", 1.5);
      var le = Q(be), De = Q(le), ke = Q(De);
      Y(() => {
        l(J, "x1", r(P)), l(J, "y1", r(y).lineY), l(J, "x2", r(F)), l(J, "y2", r(y).lineY), l(z, "x1", r(P)), l(z, "y1", r(y).lineY), l(z, "x2", r(P)), l(z, "y2", r(W)), l(be, "x1", r(P)), l(be, "y1", r(y).lineY), l(be, "x2", r(M)), l(be, "y2", r(O)), l(le, "cx", r(F)), l(le, "cy", r(y).lineY), l(le, "r", r(D)), l(De, "cx", r(P)), l(De, "cy", r(W)), l(De, "r", r(D)), l(ke, "cx", r(M)), l(ke, "cy", r(O)), l(ke, "r", r(D));
      }), T(j, R);
    }, ae = (j) => {
      var P = qe(), F = ce(P);
      {
        var W = (O) => {
          const D = /* @__PURE__ */ u(() => a() === "icon" ? 6 : 5), R = /* @__PURE__ */ u(() => r(x).width / 2), J = /* @__PURE__ */ u(() => r(x).height / 2), z = /* @__PURE__ */ u(() => a() === "icon" ? -2 : -1.5), be = /* @__PURE__ */ u(() => a() === "icon" ? -2 : -1.5);
          var le = Tg(), De = ce(le), ke = he(De);
          Xe(ke, 21, () => r(g), (Re) => Re.offset, (Re, _e) => {
            var He = Mg();
            Y(() => {
              l(He, "offset", r(_e).offset), l(He, "stop-color", r(_e).color);
            }), T(Re, He);
          });
          var Le = Q(ke), Ce = Q(De);
          l(Ce, "stroke-width", 0.5);
          var Fe = Q(Ce);
          Y(() => {
            l(ke, "id", r(N)), l(Le, "id", r(I)), l(Le, "cx", (r(R) + r(z)) / r(x).width), l(Le, "cy", (r(J) + r(be)) / r(x).height), l(Ce, "cx", r(R)), l(Ce, "cy", r(J)), l(Ce, "r", r(D)), l(Ce, "fill", `url(#${r(N) ?? ""})`), l(Fe, "cx", r(R)), l(Fe, "cy", r(J)), l(Fe, "r", r(D)), l(Fe, "fill", `url(#${r(I) ?? ""})`);
          }), T(O, le);
        }, M = (O) => {
          const D = /* @__PURE__ */ u(() => a() === "icon" ? 6 : 5), R = /* @__PURE__ */ u(() => r(x).width / 2), J = /* @__PURE__ */ u(() => r(x).height / 2), z = /* @__PURE__ */ u(() => a() === "icon" ? -2 : -1.5), be = /* @__PURE__ */ u(() => a() === "icon" ? -2 : -1.5);
          var le = Dg(), De = ce(le), ke = he(De), Le = he(ke), Ce = Q(Le), Fe = Q(Ce), Re = Q(De);
          l(Re, "stroke-width", 0.5), Y(() => {
            l(ke, "id", r(N)), l(ke, "cx", (r(R) + r(z)) / r(x).width), l(ke, "cy", (r(J) + r(be)) / r(x).height), l(Le, "stop-color", r(k)), l(Ce, "stop-color", r(v)), l(Fe, "stop-color", r(S)), l(Re, "cx", r(R)), l(Re, "cy", r(J)), l(Re, "r", r(D)), l(Re, "fill", `url(#${r(N) ?? ""})`);
          }), T(O, le);
        };
        we(F, (O) => {
          r(s) ? O(W) : O(M, -1);
        });
      }
      T(j, P);
    }, ye = (j) => {
      const P = /* @__PURE__ */ u(() => r(w).color_fixed ?? "#666666"), F = /* @__PURE__ */ u(() => r(w).bar_opacity ?? 0.85), W = /* @__PURE__ */ u(() => r(w).bar_rx ?? 3), M = /* @__PURE__ */ u(() => a() === "icon" ? 6 : 5), O = /* @__PURE__ */ u(() => (r(x).height - r(M)) / 2);
      var D = Ag();
      Y(() => {
        l(D, "x", r(y).rectX), l(D, "y", r(O)), l(D, "width", r(y).rectWidth), l(D, "height", r(M)), l(D, "rx", r(W) > r(y).rectWidth / 4 ? r(y).rectWidth / 4 : r(W)), l(D, "ry", r(W) > r(M) / 2 ? r(M) / 2 : r(W)), l(D, "fill", r(P)), l(D, "fill-opacity", r(F));
      }), T(j, D);
    }, ve = (j) => {
      const P = /* @__PURE__ */ u(() => r(w).material ?? {}), F = /* @__PURE__ */ u(() => r(P).color ?? "#4488cc"), W = /* @__PURE__ */ u(() => r(P).opacity ?? 0.6), M = /* @__PURE__ */ u(() => r(x).width / 2), O = /* @__PURE__ */ u(() => r(x).height / 2), D = /* @__PURE__ */ u(() => a() === "icon" ? 6 : 8), R = /* @__PURE__ */ u(() => a() === "icon" ? 4 : 3.5);
      var J = Cg(), z = ce(J), be = he(z), le = he(be), De = Q(le), ke = Q(De), Le = Q(ke), Ce = Q(z);
      l(Ce, "stroke-width", 0.75), Y(
        (Fe, Re) => {
          l(be, "id", `${r(N) ?? ""}-shell`), l(le, "stop-color", r(F)), l(De, "stop-color", r(F)), l(De, "stop-opacity", r(W) * 0.3), l(ke, "stop-color", r(F)), l(ke, "stop-opacity", r(W) * 0.7), l(Le, "stop-color", Fe), l(Le, "stop-opacity", r(W)), l(Ce, "cx", r(M)), l(Ce, "cy", r(O)), l(Ce, "rx", r(D)), l(Ce, "ry", r(R)), l(Ce, "fill", `url(#${r(N) ?? ""}-shell)`), l(Ce, "stroke", Re), l(Ce, "stroke-opacity", r(W) * 0.8);
        },
        [
          () => c(r(F), 0.3),
          () => c(r(F), 0.2)
        ]
      ), T(j, J);
    }, $ = (j) => {
      const P = /* @__PURE__ */ u(() => r(w).material ?? {}), F = /* @__PURE__ */ u(() => r(P).color ?? "#4488cc"), W = /* @__PURE__ */ u(() => r(P).opacity ?? 0.5), M = /* @__PURE__ */ u(() => a() === "icon" ? 3 : 2), O = /* @__PURE__ */ u(() => a() === "icon" ? 14 : 18), D = /* @__PURE__ */ u(() => a() === "icon" ? 2 : 1), R = /* @__PURE__ */ u(() => a() === "icon" ? 14 : 9), J = /* @__PURE__ */ u(() => r(x).height / 2);
      var z = Pg(), be = ce(z), le = he(be), De = he(le), ke = Q(De), Le = Q(ke), Ce = Q(be);
      l(Ce, "stroke-width", 0.75), Y(
        (Fe, Re) => {
          l(le, "id", `${r(N) ?? ""}-mpause`), l(De, "stop-color", Fe), l(De, "stop-opacity", r(W)), l(ke, "stop-color", r(F)), l(ke, "stop-opacity", r(W) * 0.6), l(Le, "stop-color", r(F)), l(Le, "stop-opacity", r(W) * 0.15), l(Ce, "d", `M ${r(O) ?? ""},${r(D) ?? ""} Q ${r(M) ?? ""},${r(D) ?? ""} ${r(M) ?? ""},${r(J) ?? ""} Q ${r(M) ?? ""},${r(R) ?? ""} ${r(O) ?? ""},${r(R) ?? ""} Z`), l(Ce, "fill", `url(#${r(N) ?? ""}-mpause)`), l(Ce, "stroke", Re), l(Ce, "stroke-opacity", r(W) * 0.7);
        },
        [
          () => c(r(F), 0.3),
          () => c(r(F), 0.2)
        ]
      ), T(j, z);
    }, pe = (j) => {
      const P = /* @__PURE__ */ u(() => r(s) ? `url(#${r(N)}-swath)` : "#888");
      var F = Fg(), W = ce(F);
      {
        var M = (J) => {
          var z = Ig(), be = he(z);
          Xe(be, 21, () => r(g), (le) => le.offset, (le, De) => {
            var ke = Eg();
            Y(() => {
              l(ke, "offset", r(De).offset), l(ke, "stop-color", r(De).color);
            }), T(le, ke);
          }), Y(() => l(be, "id", `${r(N) ?? ""}-swath`)), T(J, z);
        };
        we(W, (J) => {
          r(s) && J(M);
        });
      }
      var O = Q(W);
      {
        var D = (J) => {
          var z = Ng();
          l(z, "stroke-width", 0.5), Y(() => l(z, "fill", r(P))), T(J, z);
        }, R = (J) => {
          var z = Lg();
          l(z, "stroke-width", 0.5), Y(() => l(z, "fill", r(P))), T(J, z);
        };
        we(O, (J) => {
          a() === "icon" ? J(D) : J(R, -1);
        });
      }
      T(j, F);
    }, Ae = (j) => {
      const P = /* @__PURE__ */ u(() => a() === "icon" ? 2.5 : 2), F = /* @__PURE__ */ u(() => r(x).height / 2), W = /* @__PURE__ */ u(() => a() === "icon" ? [3, 8, 13] : [3, 10, 17]);
      var M = qe(), O = ce(M);
      {
        var D = (J) => {
          const z = /* @__PURE__ */ u(() => oi(r(s).colormap));
          var be = qe(), le = ce(be);
          Xe(le, 18, () => r(W), (De) => De, (De, ke, Le) => {
            var Ce = Rg();
            l(Ce, "stroke-width", 0.5), Y(
              (Fe) => {
                l(Ce, "cx", ke), l(Ce, "cy", r(F)), l(Ce, "r", r(P)), l(Ce, "fill", Fe);
              },
              [
                () => r(z)(r(s).reverse ? 1 - r(Le) / 2 : r(Le) / 2)
              ]
            ), T(De, Ce);
          }), T(J, be);
        }, R = (J) => {
          const z = /* @__PURE__ */ u(() => r(w).fill ?? "#888");
          var be = qe(), le = ce(be);
          Xe(le, 16, () => r(W), (De) => De, (De, ke) => {
            var Le = Og();
            l(Le, "stroke-width", 0.5), Y(() => {
              l(Le, "cx", ke), l(Le, "cy", r(F)), l(Le, "r", r(P)), l(Le, "fill", r(z));
            }), T(De, Le);
          }), T(J, be);
        };
        we(O, (J) => {
          r(s) ? J(D) : J(R, -1);
        });
      }
      T(j, M);
    }, L = (j) => {
      const P = /* @__PURE__ */ u(() => r(w).fill_color ?? "#4c72b0"), F = /* @__PURE__ */ u(() => r(w).stroke_color ?? "#333333"), W = /* @__PURE__ */ u(() => r(w).shape ?? "circle"), M = /* @__PURE__ */ u(() => r(x).height / 2), O = /* @__PURE__ */ u(() => a() === "icon" ? [4, 8, 12] : [5, 10, 15]), D = /* @__PURE__ */ u(() => a() === "icon" ? 2 : 1.8);
      var R = Bg(), J = ce(R);
      l(J, "stroke-width", 0.5);
      var z = Q(J);
      Xe(z, 16, () => r(O), (be) => be, (be, le) => {
        var De = qe(), ke = ce(De);
        {
          var Le = (He) => {
            var Pe = zg();
            l(Pe, "stroke-width", 0.5), Y(() => {
              l(Pe, "x", le - r(D)), l(Pe, "y", r(M) - r(D)), l(Pe, "width", r(D) * 2), l(Pe, "height", r(D) * 2), l(Pe, "fill", r(P)), l(Pe, "stroke", r(F));
            }), T(He, Pe);
          }, Ce = (He) => {
            var Pe = Ug();
            l(Pe, "stroke-width", 0.5), Y(() => {
              l(Pe, "x", le - r(D)), l(Pe, "y", r(M) - r(D)), l(Pe, "width", r(D) * 2), l(Pe, "height", r(D) * 2), l(Pe, "fill", r(P)), l(Pe, "stroke", r(F)), l(Pe, "transform", `rotate(45 ${le ?? ""} ${r(M) ?? ""})`);
            }), T(He, Pe);
          }, Fe = (He) => {
            var Pe = Vg();
            l(Pe, "stroke-width", 0.5), Y(() => {
              l(Pe, "points", `${le ?? ""},${r(M) - r(D)} ${le - r(D)},${r(M) + r(D)} ${le + r(D)},${r(M) + r(D)}`), l(Pe, "fill", r(P)), l(Pe, "stroke", r(F));
            }), T(He, Pe);
          }, Re = (He) => {
            const Pe = /* @__PURE__ */ u(() => r(D) * 0.45);
            var Be = Yg();
            l(Be, "stroke-width", 0.5), Y(() => {
              l(Be, "points", `${le ?? ""},${r(M) - r(D)} ${le + r(Pe) * 0.59},${r(M) - r(Pe) * 0.81} ${le + r(D) * 0.95},${r(M) - r(D) * 0.31} ${le + r(Pe) * 0.95},${r(M) + r(Pe) * 0.31} ${le + r(D) * 0.59},${r(M) + r(D) * 0.81} ${le ?? ""},${r(M) + r(Pe)} ${le - r(D) * 0.59},${r(M) + r(D) * 0.81} ${le - r(Pe) * 0.95},${r(M) + r(Pe) * 0.31} ${le - r(D) * 0.95},${r(M) - r(D) * 0.31} ${le - r(Pe) * 0.59},${r(M) - r(Pe) * 0.81}`), l(Be, "fill", r(P)), l(Be, "stroke", r(F));
            }), T(He, Be);
          }, _e = (He) => {
            var Pe = Hg();
            l(Pe, "stroke-width", 0.5), Y(() => {
              l(Pe, "cx", le), l(Pe, "cy", r(M)), l(Pe, "r", r(D)), l(Pe, "fill", r(P)), l(Pe, "stroke", r(F));
            }), T(He, Pe);
          };
          we(ke, (He) => {
            r(W) === "square" ? He(Le) : r(W) === "diamond" ? He(Ce, 1) : r(W) === "triangle" ? He(Fe, 2) : r(W) === "star" ? He(Re, 3) : He(_e, -1);
          });
        }
        T(be, De);
      }), Y(() => {
        l(J, "x1", r(y).lineX1), l(J, "x2", r(y).lineX2), l(J, "y1", r(M)), l(J, "y2", r(M));
      }), T(j, R);
    }, se = (j) => {
      const P = /* @__PURE__ */ u(() => !r(s) && typeof r(w).color_map == "string" ? r(w).color_map : null), F = /* @__PURE__ */ u(() => !r(s) && r(w).reverse_color_map === !0), W = /* @__PURE__ */ u(() => r(s) ? r(g) : r(P) ? i(r(P), 5, r(F)) : [
        { offset: "0%", color: "#999" },
        { offset: "100%", color: "#666" }
      ]);
      var M = Gg(), O = ce(M), D = he(O);
      Xe(D, 21, () => r(W), (J) => J.offset, (J, z) => {
        var be = Wg();
        Y(() => {
          l(be, "offset", r(z).offset), l(be, "stop-color", r(z).color);
        }), T(J, be);
      });
      var R = Q(O);
      l(R, "stroke-width", 0.5), Y(() => {
        l(D, "id", `${r(N) ?? ""}-intimg`), l(R, "x", r(y).rectX), l(R, "y", r(y).rectY), l(R, "width", r(y).rectWidth), l(R, "height", r(y).rectHeight), l(R, "fill", `url(#${r(N) ?? ""}-intimg)`);
      }), T(j, M);
    }, fe = (j) => {
      const P = /* @__PURE__ */ u(() => r(w).stroke ?? "currentColor"), F = /* @__PURE__ */ u(() => r(w).stroke_width ?? 1), W = /* @__PURE__ */ u(() => r(x).height / 2), M = /* @__PURE__ */ u(() => a() === "icon" ? 4 : 3), O = /* @__PURE__ */ u(() => a() === "icon" ? [4, 8, 12] : [5, 10, 15]);
      var D = qg(), R = ce(D);
      l(R, "stroke-opacity", 0.4);
      var J = Q(R);
      Xe(J, 16, () => r(O), (z) => z, (z, be) => {
        var le = Xg();
        Y(() => {
          l(le, "x1", be), l(le, "x2", be), l(le, "y1", r(W) - r(M) / 2), l(le, "y2", r(W) + r(M) / 2), l(le, "stroke", r(P)), l(le, "stroke-width", r(F));
        }), T(z, le);
      }), Y(() => {
        l(R, "x1", r(y).lineX1), l(R, "x2", r(y).lineX2), l(R, "y1", r(W)), l(R, "y2", r(W)), l(R, "stroke", r(P)), l(R, "stroke-width", r(F) * 0.5);
      }), T(j, D);
    }, me = (j) => {
      const P = /* @__PURE__ */ u(() => r(w).stroke ?? "currentColor"), F = /* @__PURE__ */ u(() => r(w).stroke_opacity ?? 0.5), W = /* @__PURE__ */ u(() => r(w).stroke_dasharray ?? "3,2");
      var M = jg();
      Y(() => {
        l(M, "x1", r(y).lineX1), l(M, "x2", r(y).lineX2), l(M, "y1", r(y).lineY), l(M, "y2", r(y).lineY), l(M, "stroke", r(P)), l(M, "stroke-width", r(w).stroke_width ?? 1), l(M, "stroke-opacity", r(F)), l(M, "stroke-dasharray", r(W));
      }), T(j, M);
    }, Ie = (j) => {
      const P = /* @__PURE__ */ u(() => r(w).fill_selected ?? "#3b82f6"), F = /* @__PURE__ */ u(() => r(w).stroke ?? "#3b82f6"), W = /* @__PURE__ */ u(() => r(w).stroke_width ?? 1), M = /* @__PURE__ */ u(() => a() === "icon" ? 12 : 7.5), O = /* @__PURE__ */ u(() => r(x).width / 2), D = /* @__PURE__ */ u(() => a() === "icon" ? 3.5 : 2.5);
      var R = Zg(), J = ce(R);
      l(J, "stroke-width", 1.5);
      var z = Q(J);
      l(z, "fill-opacity", 0.8), Y(() => {
        l(J, "x1", r(y).lineX1), l(J, "x2", r(y).lineX2), l(J, "y1", r(M)), l(J, "y2", r(M)), l(z, "d", `M ${r(O) - r(D)},${r(M) ?? ""} A ${r(D) ?? ""},${r(D) ?? ""} 0 0 1 ${r(O) + r(D)},${r(M) ?? ""}`), l(z, "fill", r(P)), l(z, "stroke", r(F)), l(z, "stroke-width", r(W));
      }), T(j, R);
    }, Ve = (j) => {
      var P = Jg();
      Y(() => {
        l(P, "x1", r(y).lineX1), l(P, "x2", r(y).lineX2), l(P, "y1", r(y).lineY), l(P, "y2", r(y).lineY), l(P, "stroke", r(w).stroke ?? "currentColor"), l(P, "stroke-width", r(w).stroke_width ?? 2);
      }), T(j, P);
    }, Ne = (j) => {
      const P = /* @__PURE__ */ u(() => r(w).fill ?? "#4c72b0"), F = /* @__PURE__ */ u(() => r(w).stroke ?? "#333"), W = /* @__PURE__ */ u(() => r(w).shape ?? "circle"), M = /* @__PURE__ */ u(() => a() === "icon" ? 2 : 1.8), O = /* @__PURE__ */ u(() => a() === "icon" ? [{ x: 4, y: 5 }, { x: 9, y: 11 }, { x: 13, y: 7 }] : [{ x: 4, y: 3 }, { x: 11, y: 7 }, { x: 17, y: 4 }]);
      var D = qe(), R = ce(D);
      Xe(R, 17, () => r(O), (J) => J.x, (J, z) => {
        var be = qe(), le = ce(be);
        {
          var De = (Re) => {
            var _e = Qg();
            l(_e, "stroke-width", 0.5), Y(() => {
              l(_e, "x", r(z).x - r(M)), l(_e, "y", r(z).y - r(M)), l(_e, "width", r(M) * 2), l(_e, "height", r(M) * 2), l(_e, "fill", r(P)), l(_e, "stroke", r(F));
            }), T(Re, _e);
          }, ke = (Re) => {
            var _e = Kg();
            l(_e, "stroke-width", 0.5), Y(() => {
              l(_e, "x", r(z).x - r(M)), l(_e, "y", r(z).y - r(M)), l(_e, "width", r(M) * 2), l(_e, "height", r(M) * 2), l(_e, "fill", r(P)), l(_e, "stroke", r(F)), l(_e, "transform", `rotate(45 ${r(z).x ?? ""} ${r(z).y ?? ""})`);
            }), T(Re, _e);
          }, Le = (Re) => {
            var _e = $g();
            l(_e, "stroke-width", 0.5), Y(() => {
              l(_e, "points", `${r(z).x ?? ""},${r(z).y - r(M)} ${r(z).x - r(M)},${r(z).y + r(M)} ${r(z).x + r(M)},${r(z).y + r(M)}`), l(_e, "fill", r(P)), l(_e, "stroke", r(F));
            }), T(Re, _e);
          }, Ce = (Re) => {
            const _e = /* @__PURE__ */ u(() => r(M) * 0.45);
            var He = ey();
            l(He, "stroke-width", 0.5), Y(() => {
              l(He, "points", `${r(z).x ?? ""},${r(z).y - r(M)} ${r(z).x + r(_e) * 0.59},${r(z).y - r(_e) * 0.81} ${r(z).x + r(M) * 0.95},${r(z).y - r(M) * 0.31} ${r(z).x + r(_e) * 0.95},${r(z).y + r(_e) * 0.31} ${r(z).x + r(M) * 0.59},${r(z).y + r(M) * 0.81} ${r(z).x ?? ""},${r(z).y + r(_e)} ${r(z).x - r(M) * 0.59},${r(z).y + r(M) * 0.81} ${r(z).x - r(_e) * 0.95},${r(z).y + r(_e) * 0.31} ${r(z).x - r(M) * 0.95},${r(z).y - r(M) * 0.31} ${r(z).x - r(_e) * 0.59},${r(z).y - r(_e) * 0.81}`), l(He, "fill", r(P)), l(He, "stroke", r(F));
            }), T(Re, He);
          }, Fe = (Re) => {
            var _e = ty();
            l(_e, "stroke-width", 0.5), Y(() => {
              l(_e, "cx", r(z).x), l(_e, "cy", r(z).y), l(_e, "r", r(M)), l(_e, "fill", r(P)), l(_e, "stroke", r(F));
            }), T(Re, _e);
          };
          we(le, (Re) => {
            r(W) === "square" ? Re(De) : r(W) === "diamond" ? Re(ke, 1) : r(W) === "triangle" ? Re(Le, 2) : r(W) === "star" ? Re(Ce, 3) : Re(Fe, -1);
          });
        }
        T(J, be);
      }), T(j, D);
    }, Qe = (j) => {
      const P = /* @__PURE__ */ u(() => r(w).fill ?? "#4c72b0"), F = /* @__PURE__ */ u(() => r(w).stroke ?? "none"), W = /* @__PURE__ */ u(() => r(w).stroke_width ?? 0), M = /* @__PURE__ */ u(() => a() === "icon" ? [
        { x: 2, y: 6, w: 3, h: 8 },
        { x: 6, y: 3, w: 3, h: 11 },
        { x: 10, y: 8, w: 3, h: 6 }
      ] : [
        { x: 2, y: 4, w: 4, h: 5 },
        { x: 8, y: 2, w: 4, h: 7 },
        { x: 14, y: 5, w: 4, h: 4 }
      ]);
      var O = qe(), D = ce(O);
      Xe(D, 17, () => r(M), (R) => R.x, (R, J) => {
        var z = ay();
        Y(() => {
          l(z, "x", r(J).x), l(z, "y", r(J).y), l(z, "width", r(J).w), l(z, "height", r(J).h), l(z, "fill", r(P)), l(z, "fill-opacity", r(w).fill_opacity ?? 1), l(z, "stroke", r(F)), l(z, "stroke-width", r(W));
        }), T(R, z);
      }), T(j, O);
    }, Se = (j) => {
      const P = /* @__PURE__ */ u(() => r(w).stroke ?? "#666");
      var F = ry(), W = ce(F);
      l(W, "stroke-width", 1.5);
      var M = Q(W);
      l(M, "stroke-width", 1.5), Y(() => {
        l(W, "x1", r(y).lineX1 + 2), l(W, "x2", r(y).lineX2 - 4), l(W, "y1", r(y).lineY), l(W, "y2", r(y).lineY), l(W, "stroke", r(P)), l(M, "d", `M${r(y).lineX2 - 4},${r(y).lineY - 3} L${r(y).lineX2 - 1},${r(y).lineY ?? ""} L${r(y).lineX2 - 4},${r(y).lineY + 3}`), l(M, "stroke", r(P));
      }), T(j, F);
    }, K = (j) => {
      const P = /* @__PURE__ */ u(() => r(s) && e.layer.layer_type === "zarr_image_sequence"), F = /* @__PURE__ */ u(() => r(P) ? r(g) : [
        { offset: "0%", color: "#999" },
        { offset: "100%", color: "#666" }
      ]);
      var W = iy(), M = ce(W), O = he(M);
      Xe(O, 21, () => r(F), (R) => R.offset, (R, J) => {
        var z = ny();
        Y(() => {
          l(z, "offset", r(J).offset), l(z, "stop-color", r(J).color);
        }), T(R, z);
      });
      var D = Q(M);
      l(D, "rx", 1), l(D, "ry", 1), l(D, "stroke-width", 0.5), Y(() => {
        l(O, "id", `${r(N) ?? ""}-imgseq`), l(D, "x", r(y).rectX), l(D, "y", r(y).rectY), l(D, "width", r(y).rectWidth), l(D, "height", r(y).rectHeight), l(D, "fill", `url(#${r(N) ?? ""}-imgseq)`);
      }), T(j, W);
    }, xe = (j) => {
      var P = qe(), F = ce(P);
      {
        var W = (O) => {
          var D = cy(), R = ce(D);
          l(R, "x", 2), l(R, "y", 2), l(R, "width", 12), l(R, "height", 12), l(R, "rx", 1), l(R, "ry", 1), l(R, "stroke-width", 0.5);
          var J = Q(R);
          l(J, "cx", 11), l(J, "cy", 5), l(J, "r", 1.5), T(O, D);
        }, M = (O) => {
          var D = oy(), R = ce(D);
          l(R, "x", 1), l(R, "y", 1), l(R, "width", 18), l(R, "height", 8), l(R, "rx", 1), l(R, "ry", 1), l(R, "stroke-width", 0.5);
          var J = Q(R);
          l(J, "cx", 15), l(J, "cy", 3.5), l(J, "r", 1.2), T(O, D);
        };
        we(F, (O) => {
          a() === "icon" ? O(W) : O(M, -1);
        });
      }
      T(j, P);
    }, We = (j) => {
      const P = /* @__PURE__ */ u(() => r(s) ? r(g) : [
        { offset: "0%", color: "#999" },
        { offset: "100%", color: "#666" }
      ]);
      var F = fy(), W = ce(F), M = he(W);
      Xe(M, 21, () => r(P), (D) => D.offset, (D, R) => {
        var J = sy();
        Y(() => {
          l(J, "offset", r(R).offset), l(J, "stop-color", r(R).color);
        }), T(D, J);
      });
      var O = Q(W);
      l(O, "stroke-width", 0.5), Y(() => {
        l(M, "id", `${r(N) ?? ""}-pctex`), l(O, "x", r(y).rectX), l(O, "y", r(y).rectY), l(O, "width", r(y).rectWidth), l(O, "height", r(y).rectHeight), l(O, "fill", `url(#${r(N) ?? ""}-pctex)`), l(O, "fill-opacity", r(w).opacity ?? 1);
      }), T(j, F);
    }, Ze = (j) => {
      const P = /* @__PURE__ */ u(() => r(w).available ?? {}), F = /* @__PURE__ */ u(() => r(w).selected ?? {}), W = /* @__PURE__ */ u(() => r(P).shape ?? "circle"), M = /* @__PURE__ */ u(() => a() === "icon" ? 2.5 : 2), O = /* @__PURE__ */ u(() => r(x).height / 2), D = /* @__PURE__ */ u(() => a() === "icon" ? 5 : 6), R = /* @__PURE__ */ u(() => a() === "icon" ? 11 : 14), J = /* @__PURE__ */ u(() => r(P).fill ?? "#1ea951"), z = /* @__PURE__ */ u(() => r(P).stroke ?? "#000"), be = /* @__PURE__ */ u(() => r(P).stroke_width ?? 0.5), le = /* @__PURE__ */ u(() => r(F).fill ?? "#3b82f6"), De = /* @__PURE__ */ u(() => r(F).stroke ?? "#000"), ke = /* @__PURE__ */ u(() => r(F).stroke_width ?? 0.5);
      var Le = qe(), Ce = ce(Le);
      {
        var Fe = (Be) => {
          var ze = ly(), Ue = ce(ze), Te = Q(Ue);
          Y(() => {
            l(Ue, "x", r(D) - r(M)), l(Ue, "y", r(O) - r(M)), l(Ue, "width", r(M) * 2), l(Ue, "height", r(M) * 2), l(Ue, "fill", r(J)), l(Ue, "stroke", r(z)), l(Ue, "stroke-width", r(be)), l(Te, "x", r(R) - r(M)), l(Te, "y", r(O) - r(M)), l(Te, "width", r(M) * 2), l(Te, "height", r(M) * 2), l(Te, "fill", r(le)), l(Te, "stroke", r(De)), l(Te, "stroke-width", r(ke));
          }), T(Be, ze);
        }, Re = (Be) => {
          var ze = dy(), Ue = ce(ze), Te = Q(Ue);
          Y(() => {
            l(Ue, "x", r(D) - r(M)), l(Ue, "y", r(O) - r(M)), l(Ue, "width", r(M) * 2), l(Ue, "height", r(M) * 2), l(Ue, "fill", r(J)), l(Ue, "stroke", r(z)), l(Ue, "stroke-width", r(be)), l(Ue, "transform", `rotate(45 ${r(D) ?? ""} ${r(O) ?? ""})`), l(Te, "x", r(R) - r(M)), l(Te, "y", r(O) - r(M)), l(Te, "width", r(M) * 2), l(Te, "height", r(M) * 2), l(Te, "fill", r(le)), l(Te, "stroke", r(De)), l(Te, "stroke-width", r(ke)), l(Te, "transform", `rotate(45 ${r(R) ?? ""} ${r(O) ?? ""})`);
          }), T(Be, ze);
        }, _e = (Be) => {
          var ze = uy(), Ue = ce(ze), Te = Q(Ue);
          Y(() => {
            l(Ue, "points", `${r(D) ?? ""},${r(O) - r(M)} ${r(D) - r(M)},${r(O) + r(M)} ${r(D) + r(M)},${r(O) + r(M)}`), l(Ue, "fill", r(J)), l(Ue, "stroke", r(z)), l(Ue, "stroke-width", r(be)), l(Te, "points", `${r(R) ?? ""},${r(O) - r(M)} ${r(R) - r(M)},${r(O) + r(M)} ${r(R) + r(M)},${r(O) + r(M)}`), l(Te, "fill", r(le)), l(Te, "stroke", r(De)), l(Te, "stroke-width", r(ke));
          }), T(Be, ze);
        }, He = (Be) => {
          const ze = /* @__PURE__ */ u(() => r(M) * 0.45);
          var Ue = hy(), Te = ce(Ue), Ye = Q(Te);
          Y(() => {
            l(Te, "points", `${r(D) ?? ""},${r(O) - r(M)} ${r(D) + r(ze) * 0.59},${r(O) - r(ze) * 0.81} ${r(D) + r(M) * 0.95},${r(O) - r(M) * 0.31} ${r(D) + r(ze) * 0.95},${r(O) + r(ze) * 0.31} ${r(D) + r(M) * 0.59},${r(O) + r(M) * 0.81} ${r(D) ?? ""},${r(O) + r(ze)} ${r(D) - r(M) * 0.59},${r(O) + r(M) * 0.81} ${r(D) - r(ze) * 0.95},${r(O) + r(ze) * 0.31} ${r(D) - r(M) * 0.95},${r(O) - r(M) * 0.31} ${r(D) - r(ze) * 0.59},${r(O) - r(ze) * 0.81}`), l(Te, "fill", r(J)), l(Te, "stroke", r(z)), l(Te, "stroke-width", r(be)), l(Ye, "points", `${r(R) ?? ""},${r(O) - r(M)} ${r(R) + r(ze) * 0.59},${r(O) - r(ze) * 0.81} ${r(R) + r(M) * 0.95},${r(O) - r(M) * 0.31} ${r(R) + r(ze) * 0.95},${r(O) + r(ze) * 0.31} ${r(R) + r(M) * 0.59},${r(O) + r(M) * 0.81} ${r(R) ?? ""},${r(O) + r(ze)} ${r(R) - r(M) * 0.59},${r(O) + r(M) * 0.81} ${r(R) - r(ze) * 0.95},${r(O) + r(ze) * 0.31} ${r(R) - r(M) * 0.95},${r(O) - r(M) * 0.31} ${r(R) - r(ze) * 0.59},${r(O) - r(ze) * 0.81}`), l(Ye, "fill", r(le)), l(Ye, "stroke", r(De)), l(Ye, "stroke-width", r(ke));
          }), T(Be, Ue);
        }, Pe = (Be) => {
          var ze = by(), Ue = ce(ze), Te = Q(Ue);
          Y(() => {
            l(Ue, "cx", r(D)), l(Ue, "cy", r(O)), l(Ue, "r", r(M)), l(Ue, "fill", r(J)), l(Ue, "stroke", r(z)), l(Ue, "stroke-width", r(be)), l(Te, "cx", r(R)), l(Te, "cy", r(O)), l(Te, "r", r(M)), l(Te, "fill", r(le)), l(Te, "stroke", r(De)), l(Te, "stroke-width", r(ke));
          }), T(Be, ze);
        };
        we(Ce, (Be) => {
          r(W) === "square" ? Be(Fe) : r(W) === "diamond" ? Be(Re, 1) : r(W) === "triangle" ? Be(_e, 2) : r(W) === "star" ? Be(He, 3) : Be(Pe, -1);
        });
      }
      T(j, Le);
    }, yt = (j) => {
      const P = /* @__PURE__ */ u(() => "#999"), F = /* @__PURE__ */ u(() => a() === "icon" ? 6 : 7), W = /* @__PURE__ */ u(() => a() === "icon" ? 7 : 5), M = /* @__PURE__ */ u(() => a() === "icon" ? 3 : 2.5), O = /* @__PURE__ */ u(() => a() === "icon" ? "M 14,2 C 14,8 8,13 2,14" : "M 18,1 C 17,5 6,9 2,9"), D = /* @__PURE__ */ u(() => r(w).stroke ?? "#ff6600");
      var R = gy(), J = ce(R), z = he(J), be = he(z), le = Q(be);
      l(le, "stop-color", r(P));
      var De = Q(le), ke = Q(z);
      {
        var Le = (Re) => {
          var _e = py();
          Xe(_e, 21, () => r(g), (He) => He.offset, (He, Pe) => {
            var Be = my();
            Y(() => {
              l(Be, "offset", r(Pe).offset), l(Be, "stop-color", r(Pe).color);
            }), T(He, Be);
          }), Y(() => l(_e, "id", `${r(N) ?? ""}-trajpath`)), T(Re, _e);
        };
        we(ke, (Re) => {
          r(s) && Re(Le);
        });
      }
      var Ce = Q(J);
      l(Ce, "stroke-width", 0.5);
      var Fe = Q(Ce);
      l(Fe, "stroke-width", 2), Y(
        (Re, _e) => {
          l(z, "id", `${r(N) ?? ""}-planet`), l(be, "stop-color", Re), l(De, "stop-color", _e), l(Ce, "cx", r(F)), l(Ce, "cy", r(W)), l(Ce, "r", r(M)), l(Ce, "fill", `url(#${r(N) ?? ""}-planet)`), l(Fe, "d", r(O)), l(Fe, "stroke", r(s) ? `url(#${r(N)}-trajpath)` : r(D));
        },
        [
          () => c(r(P), 0.4),
          () => o(r(P), 0.3)
        ]
      ), T(j, R);
    }, vt = (j) => {
      const P = /* @__PURE__ */ u(() => r(w).material ?? {}), F = /* @__PURE__ */ u(() => r(P).color ?? "#ffffff"), W = /* @__PURE__ */ u(() => r(P).opacity ?? 1);
      var M = yy();
      l(M, "stroke-width", 1), Y(() => {
        l(M, "cx", r(x).width / 2), l(M, "cy", r(x).height / 2), l(M, "r", a() === "icon" ? 5 : 4), l(M, "fill", r(F)), l(M, "fill-opacity", r(W));
      }), T(j, M);
    }, _t = (j) => {
      const P = /* @__PURE__ */ u(() => r(w).font_color ?? "#111111"), F = /* @__PURE__ */ u(() => r(w).background_color ?? "#ffffff"), W = /* @__PURE__ */ u(() => r(w).background_visible !== !1), M = /* @__PURE__ */ u(() => r(w).border_radius ?? 4), O = /* @__PURE__ */ u(() => r(x).width / 2), D = /* @__PURE__ */ u(() => r(x).height / 2), R = /* @__PURE__ */ u(() => a() === "icon" ? 9 : 8);
      var J = _y(), z = ce(J);
      {
        var be = (De) => {
          var ke = vy();
          l(ke, "stroke-width", 0.5), Y(
            (Le, Ce) => {
              l(ke, "x", r(O) - (a() === "icon" ? 5 : 4.5)), l(ke, "y", r(D) - (a() === "icon" ? 5 : 4)), l(ke, "width", a() === "icon" ? 10 : 9), l(ke, "height", a() === "icon" ? 10 : 8), l(ke, "rx", Le), l(ke, "ry", Ce), l(ke, "fill", r(F));
            },
            [
              () => Math.min(r(M), 5),
              () => Math.min(r(M), 5)
            ]
          ), T(De, ke);
        };
        we(z, (De) => {
          r(W) && De(be);
        });
      }
      var le = Q(z);
      Y(() => {
        l(le, "x", r(O)), l(le, "y", r(D)), l(le, "fill", r(P)), ft(le, `font-size: ${r(R) ?? ""}px; font-weight: 600;`);
      }), T(j, J);
    }, rt = (j) => {
      const P = /* @__PURE__ */ u(() => r(w).material ?? {}), F = /* @__PURE__ */ u(() => r(P).color ?? "#ffffff"), W = /* @__PURE__ */ u(() => "#999"), M = /* @__PURE__ */ u(() => a() === "icon" ? 6 : 7), O = /* @__PURE__ */ u(() => a() === "icon" ? 7 : 5), D = /* @__PURE__ */ u(() => a() === "icon" ? 3 : 2.5), R = /* @__PURE__ */ u(() => a() === "icon" ? "M 14,2 C 14,8 8,13 2,14" : "M 18,1 C 17,5 6,9 2,9");
      var J = ky(), z = ce(J), be = he(z), le = he(be), De = Q(le);
      l(De, "stop-color", r(W));
      var ke = Q(De), Le = Q(z);
      l(Le, "stroke-width", 0.5);
      var Ce = Q(Le);
      l(Ce, "stroke-width", 1.5), l(Ce, "stroke-opacity", 0.5);
      var Fe = Q(Ce);
      {
        var Re = (He) => {
          var Pe = wy(), Be = ce(Pe);
          l(Be, "x1", 10.5), l(Be, "y1", 8.5), l(Be, "x2", 14), l(Be, "y2", 10), l(Be, "stroke-width", 1.5);
          var ze = Q(Be);
          l(ze, "stroke-width", 1.5), Y(() => {
            l(Be, "stroke", r(F)), l(ze, "stroke", r(F));
          }), T(He, Pe);
        }, _e = (He) => {
          var Pe = xy(), Be = ce(Pe);
          l(Be, "x1", 13), l(Be, "y1", 5.5), l(Be, "x2", 17.5), l(Be, "y2", 7), l(Be, "stroke-width", 1.5);
          var ze = Q(Be);
          l(ze, "stroke-width", 1.5), Y(() => {
            l(Be, "stroke", r(F)), l(ze, "stroke", r(F));
          }), T(He, Pe);
        };
        we(Fe, (He) => {
          a() === "icon" ? He(Re) : He(_e, -1);
        });
      }
      Y(
        (He, Pe) => {
          l(be, "id", `${r(N) ?? ""}-planet`), l(le, "stop-color", He), l(ke, "stop-color", Pe), l(Le, "cx", r(M)), l(Le, "cy", r(O)), l(Le, "r", r(D)), l(Le, "fill", `url(#${r(N) ?? ""}-planet)`), l(Ce, "d", r(R));
        },
        [
          () => c(r(W), 0.4),
          () => o(r(W), 0.3)
        ]
      ), T(j, J);
    }, hr = (j) => {
      const P = /* @__PURE__ */ u(() => r(w).material ?? {}), F = /* @__PURE__ */ u(() => r(P).opacity ?? 1), W = /* @__PURE__ */ u(() => r(s) ? r(g) : [
        { offset: "0%", color: "#999" },
        { offset: "100%", color: "#666" }
      ]), M = /* @__PURE__ */ u(() => a() === "icon" ? "M 1,2 L 15,2 L 11,14 L 5,14 Z" : "M 1,1 L 19,1 L 14,9 L 6,9 Z");
      var O = My(), D = ce(O), R = he(D);
      Xe(R, 21, () => r(W), (z) => z.offset, (z, be) => {
        var le = Sy();
        Y(() => {
          l(le, "offset", r(be).offset), l(le, "stop-color", r(be).color);
        }), T(z, le);
      });
      var J = Q(D);
      l(J, "stroke-width", 0.5), Y(() => {
        l(R, "id", `${r(N) ?? ""}-fov`), l(J, "d", r(M)), l(J, "fill", `url(#${r(N) ?? ""}-fov)`), l(J, "fill-opacity", r(F));
      }), T(j, O);
    }, br = (j) => {
      var P = Ty();
      Y(() => {
        l(P, "x", r(y).rectX), l(P, "y", r(y).rectY), l(P, "width", r(y).rectWidth), l(P, "height", r(y).rectHeight);
      }), T(j, P);
    };
    we(B, (j) => {
      r(p) ? j(V) : e.layer.layer_type === "area" ? j(X, 1) : e.layer.layer_type === "line" ? j(G, 2) : e.layer.layer_type === "wiggle" ? j(q, 3) : e.layer.layer_type === "bars" ? j(E, 4) : e.layer.layer_type === "xy_text_annotation" ? j(_, 5) : e.layer.layer_type === "graticule" ? j(C, 6) : e.layer.layer_type === "basemap_stroke" ? j(A, 7) : e.layer.layer_type === "basemap_fill" ? j(Z, 8) : e.layer.layer_type === "ground_track" ? j(ee, 9) : e.layer.layer_type === "vector_at_location" ? j(ne, 10) : e.layer.layer_type === "vector_at_location_3d" ? j(ie, 11) : e.layer.layer_type === "current_position" ? j(ue, 12) : e.layer.layer_type === "grid" ? j(oe, 13) : e.layer.layer_type === "field_lines" ? j(de, 14) : e.layer.layer_type === "axis_indicator" ? j(ge, 15) : e.layer.layer_type === "reference_frame_gizmo" ? j(te, 16) : e.layer.layer_type === "latlon_sphere" || e.layer.layer_type === "s2_cube_sphere" ? j(ae, 17) : e.layer.layer_type === "event_interval" ? j(ye, 18) : e.layer.layer_type === "field_line_shell" ? j(ve, 19) : e.layer.layer_type === "magnetopause" ? j($, 20) : e.layer.layer_type === "geolocated_texture" || e.layer.layer_type === "zarr_geolocated_mesh" ? j(pe, 21) : e.layer.layer_type === "color_mapped_symbols" ? j(Ae, 22) : e.layer.layer_type === "symbols" ? j(L, 23) : e.layer.layer_type === "interval_image" || e.layer.layer_type === "zarr_interval_image" ? j(se, 24) : e.layer.layer_type === "custom_xtick" ? j(fe, 25) : e.layer.layer_type === "static_annotation" ? j(me, 26) : e.layer.layer_type === "issue_time_selector" ? j(Ie, 27) : e.layer.layer_type === "plot_line" ? j(Ve, 28) : e.layer.layer_type === "plot_scatter" ? j(Ne, 29) : e.layer.layer_type === "plot_histogram" ? j(Qe, 30) : e.layer.layer_type === "plot_vector" ? j(Se, 31) : e.layer.layer_type === "zarr_image_sequence" || e.layer.layer_type === "hapi_image_sequence" ? j(K, 32) : e.layer.layer_type === "static_image" ? j(xe, 33) : e.layer.layer_type === "plate_carree_texture" ? j(We, 34) : e.layer.layer_type === "station_picker" ? j(Ze, 35) : e.layer.layer_type === "trajectory_path" ? j(yt, 36) : e.layer.layer_type === "position_marker" ? j(vt, 37) : e.layer.layer_type === "position_label" ? j(_t, 38) : e.layer.layer_type === "vector_along_trajectory" ? j(rt, 39) : e.layer.layer_type === "zarr_fov_plane" ? j(hr, 40) : j(br, -1);
    });
  }
  Y(() => {
    l(H, "width", r(x).width), l(H, "height", r(x).height), l(H, "viewBox", r(x).viewBox);
  }), T(t, H), ct();
}
var Ay = /* @__PURE__ */ ha('<div class="flex items-center gap-1.5"><!> <span class="leading-tight text-gray-700 dark:text-gray-200 whitespace-nowrap" style="font-size: var(--plot-font-size-legend, 10px)"> </span></div>');
function Cy(t, e) {
  it(e, !0);
  let a = /* @__PURE__ */ u(() => e.layer.title ?? e.layer.layer_type);
  var n = Ay(), i = he(n);
  h1(i, {
    get layer() {
      return e.layer;
    },
    variant: "legend"
  });
  var c = Q(i, 2), o = he(c);
  Y(() => Ke(o, r(a))), T(t, n), ct();
}
class Py {
  /** Map of loaded custom colormaps by name */
  #e = new Nr();
  /** Track loading state */
  #a = /* @__PURE__ */ new Map();
  /** Whether the index has been loaded */
  #t = /* @__PURE__ */ Me(!1);
  /** Available colormap names from index */
  #r = /* @__PURE__ */ Me(bt([]));
  /**
   * Load the index of available custom colormaps.
   * This is optional - colormaps can also be loaded on-demand.
   */
  async loadIndex() {
    if (r(this.#t))
      return r(this.#r);
    try {
      const e = await fetch("/colormaps/index.json");
      if (!e.ok) {
        if (e.status === 404)
          return re(this.#t, !0), [];
        throw new Error(`Failed to load colormap index: ${e.statusText}`);
      }
      const a = await e.json();
      return re(this.#r, a.colormaps ?? [], !0), re(this.#t, !0), r(this.#r);
    } catch (e) {
      return console.warn("Could not load colormap index:", e), re(this.#t, !0), [];
    }
  }
  /**
   * Load a specific custom colormap by name.
   *
   * @param name - Colormap name (without .json extension or "custom:" prefix)
   * @returns The loaded colormap, or null if loading failed
   */
  async loadColormap(e) {
    const a = e.startsWith("custom:") ? e.slice(7) : e, n = this.#e.get(a);
    if (n) return n;
    const i = this.#a.get(a);
    if (i) return i;
    const c = this.#n(a);
    this.#a.set(a, c);
    try {
      const o = await c;
      return o && this.#e.set(a, o), o;
    } finally {
      this.#a.delete(a);
    }
  }
  async #n(e) {
    try {
      const a = await fetch(`/colormaps/${e}.json`);
      if (!a.ok) {
        if (a.status === 404)
          return console.warn(`Custom colormap "${e}" not found`), null;
        throw new Error(`Failed to load colormap: ${a.statusText}`);
      }
      const n = await a.json();
      return !n.colors || !Array.isArray(n.colors) || n.colors.length < 2 ? (console.error(`Invalid colormap "${e}": must have at least 2 colors`), null) : (n.name || (n.name = e), n);
    } catch (a) {
      return console.error(`Failed to load colormap "${e}":`, a), null;
    }
  }
  /**
   * Get a loaded custom colormap.
   * Returns undefined if the colormap hasn't been loaded.
   * Use loadColormap() first to ensure it's loaded.
   */
  getCustomColormap(e) {
    const a = e.startsWith("custom:") ? e.slice(7) : e;
    return this.#e.get(a);
  }
  /**
   * Get all loaded custom colormaps.
   * Useful for populating UI dropdowns.
   */
  get customColormaps() {
    return this.#e;
  }
  /**
   * Get list of available custom colormap names (from index).
   */
  get availableColormaps() {
    return r(this.#r);
  }
  /**
   * Check if a colormap spec is valid (built-in or loaded custom).
   */
  isValidColormap(e) {
    if (Io(e)) return !0;
    if (bc(e)) {
      const a = f1(e);
      return a ? this.#e.has(a) : !1;
    }
    return !1;
  }
  /**
   * Get a color interpolator for any colormap specification.
   * Delegates to the core colormaps.ts utility with loaded custom colormaps.
   *
   * @param spec - D3 colormap name or "custom:name" reference
   * @param options - Reverse and trim options
   * @returns Interpolator function (t: number) => string
   */
  getInterpolator(e, a) {
    return oi(e, this.#e, a);
  }
  /**
   * Generate a lookup table (LUT) for a colormap.
   * Delegates to the core colormaps.ts utility with loaded custom colormaps.
   *
   * @param spec - D3 colormap name or "custom:name" reference
   * @param size - LUT size (default 256)
   * @param options - Reverse and trim options
   * @returns Uint8ClampedArray with RGBA values
   */
  createLUT(e, a = 256, n) {
    return l1(e, this.#e, a, n);
  }
  /**
   * Ensure a colormap is loaded before use.
   * For built-in colormaps, returns immediately.
   * For custom colormaps, loads them first.
   *
   * @param spec - Colormap specification
   * @returns Promise resolving when the colormap is ready
   */
  async ensureLoaded(e) {
    Io(e) || bc(e) && await this.loadColormap(e);
  }
}
const Ey = new Py();
var Iy = /* @__PURE__ */ U('<line class="stroke-gray-600 dark:stroke-gray-300" stroke-width="1"></line><text text-anchor="middle" class="fill-gray-600 dark:fill-gray-300" style="font-size: var(--plot-font-size-small, 8px);"> </text>', 1), Ny = /* @__PURE__ */ ha('<div class="absolute top-0 cursor-ew-resize select-none touch-none" role="slider" aria-label="Adjust minimum value" tabindex="0"></div> <div class="absolute top-0 cursor-ew-resize select-none touch-none" role="slider" aria-label="Adjust maximum value" tabindex="0"></div> <div class="absolute top-0 cursor-grab select-none touch-none active:cursor-grabbing" role="slider" aria-label="Pan color range" tabindex="0"></div>', 1), Ly = /* @__PURE__ */ ha('<div class="flex flex-col gap-0.5 select-none px-4"><span class="text-gray-700 dark:text-gray-200 whitespace-nowrap truncate" style="font-size: var(--plot-font-size-legend, 10px)"> </span> <div class="relative"><img alt="Color scale" class="block" draggable="false"/> <svg class="absolute top-0 left-0" style="pointer-events: none; overflow: visible;"></svg> <!></div></div>');
function Fy(t, e) {
  it(e, !0);
  let a = Tt(e, "reverse", 3, !1), n = Tt(e, "width", 3, 160);
  const i = 10, c = 4, o = 14, s = i + c + o + 4;
  let f = /* @__PURE__ */ u(() => Math.max(1e-3, (e.domain[1] - e.domain[0]) * 0.01)), d = /* @__PURE__ */ Me(void 0), h = /* @__PURE__ */ Me(void 0), b = /* @__PURE__ */ Me(void 0), m = /* @__PURE__ */ u(() => Ey.getInterpolator(e.colormap, { reverse: a(), trim: e.trim })), p = /* @__PURE__ */ u(() => {
    const G = document.createElement("canvas");
    G.width = n(), G.height = 1;
    const q = G.getContext("2d");
    if (!q) return "";
    for (let E = 0; E < n(); E++) {
      const _ = E / (n() - 1);
      q.fillStyle = r(m)(_), q.fillRect(E, 0, 1, 1);
    }
    return G.toDataURL();
  }), g = /* @__PURE__ */ u(() => ci().domain(e.domain).range([0, n()])), v = /* @__PURE__ */ u(() => r(g).ticks(3)), k = /* @__PURE__ */ u(() => zr(Math.abs(e.domain[1] - e.domain[0]) < 0.01 || Math.abs(e.domain[1]) > 1e4 ? ".2e" : ".3g")), S = /* @__PURE__ */ u(() => e.domainBounds ?? [e.domain[0] * 0.5, e.domain[1] * 1.5]), N = /* @__PURE__ */ u(() => n() / (e.domain[1] - e.domain[0]));
  ut(() => {
    e.onDomainChange && (!r(d) || !r(h) || !r(b) || (mt(r(d)).call(ja().on("drag", (G) => {
      const q = -G.dx / r(N), E = e.domain[0], _ = e.domain[1], C = r(f), A = r(S);
      let Z = E + q;
      Z = Math.max(A[0], Math.min(_ - C, Z)), e.onDomainChange([Z, _]);
    })), mt(r(h)).call(ja().on("drag", (G) => {
      const q = -G.dx / r(N), E = e.domain[0], _ = e.domain[1], C = r(f), A = r(S);
      let Z = _ + q;
      Z = Math.min(A[1], Math.max(E + C, Z)), e.onDomainChange([E, Z]);
    })), mt(r(b)).call(ja().on("drag", (G) => {
      const q = -G.dx / r(N), E = e.domain[0], _ = e.domain[1], C = _ - E, A = r(S);
      let Z = E + q, ee = _ + q;
      Z < A[0] && (Z = A[0], ee = A[0] + C), ee > A[1] && (ee = A[1], Z = A[1] - C), e.onDomainChange([Z, ee]);
    }))));
  });
  var I = Ly(), x = he(I), w = he(x), y = Q(x, 2);
  ft(y, "height: 32px; overflow: visible;");
  var H = he(y), B = Q(H, 2);
  l(B, "height", s), Xe(B, 20, () => r(v), (G) => G, (G, q) => {
    const E = /* @__PURE__ */ u(() => r(g)(q));
    var _ = Iy(), C = ce(_);
    l(C, "y1", i), l(C, "y2", i + c);
    var A = Q(C);
    l(A, "y", i + c + o);
    var Z = he(A);
    Y(
      (ee) => {
        l(C, "x1", r(E)), l(C, "x2", r(E)), l(A, "x", r(E)), Ke(Z, ee);
      },
      [() => r(k)(q)]
    ), T(G, _);
  });
  var V = Q(B, 2);
  {
    var X = (G) => {
      var q = Ny(), E = ce(q);
      ft(E, "left: -6px; width: 12px; height: 10px;"), Da(E, (A) => re(d, A), () => r(d));
      var _ = Q(E, 2);
      ft(_, "right: -6px; width: 12px; height: 10px;"), Da(_, (A) => re(h, A), () => r(h));
      var C = Q(_, 2);
      ft(C, "left: 6px; right: 6px; height: 10px;"), Da(C, (A) => re(b, A), () => r(b)), Y(() => {
        l(E, "aria-valuemin", r(S)[0]), l(E, "aria-valuemax", e.domain[1]), l(E, "aria-valuenow", e.domain[0]), l(_, "aria-valuemin", e.domain[0]), l(_, "aria-valuemax", r(S)[1]), l(_, "aria-valuenow", e.domain[1]), l(C, "aria-valuenow", (e.domain[0] + e.domain[1]) / 2);
      }), T(G, q);
    };
    we(V, (G) => {
      e.onDomainChange && G(X);
    });
  }
  Y(() => {
    ft(I, `width: ${n() + 32}px;`), Ke(w, e.label), l(H, "src", r(p)), ft(H, `width: ${n() ?? ""}px; height: 10px; image-rendering: pixelated;`), l(B, "width", n());
  }), T(t, I), ct();
}
var Ry = /* @__PURE__ */ ha('<div class="flex items-center gap-1.5"><div class="w-5 h-2.5 rounded-sm shrink-0"></div> <span class="leading-tight text-gray-700 dark:text-gray-200 whitespace-nowrap" style="font-size: var(--plot-font-size-legend, 10px)"> </span></div>'), Oy = /* @__PURE__ */ ha('<span class="leading-tight font-medium text-gray-700 dark:text-gray-200" style="font-size: var(--plot-font-size-legend, 10px)"> </span>'), zy = /* @__PURE__ */ ha('<div class="flex items-center gap-1.5"><!> <span class="leading-tight text-gray-600 dark:text-gray-300 whitespace-nowrap" style="font-size: var(--plot-font-size-legend-sm, 9px)"> </span></div>'), Uy = /* @__PURE__ */ ha('<div class="flex flex-col gap-0.5"><!> <div class="flex flex-col gap-0.5 pl-1"></div></div>'), Vy = /* @__PURE__ */ ha(`<div role="region" aria-label="Legend"><div class="relative bg-white dark:bg-gray-700 rounded shadow-md
           border border-gray-200 dark:border-gray-600
           px-2 py-1.5 min-w-[80px]"><div class="flex flex-col gap-0.5"></div></div></div>`);
function Yy(t, e) {
  it(e, !0);
  function a(f, d) {
    const h = { ...f };
    delete h.source;
    const b = "style" in f && f.style && typeof f.style == "object" ? f.style : {};
    return h.style = { ...b, fill: d, stroke: d }, h;
  }
  let n = Tt(e, "position", 3, "top-right"), i = /* @__PURE__ */ u(() => {
    const f = ["absolute", "z-40", "pointer-events-auto"];
    return n().startsWith("top") ? f.push("top-2") : f.push("bottom-2"), n().endsWith("left") ? f.push("left-2") : f.push("right-2"), f.join(" ");
  });
  var c = Vy(), o = he(c), s = he(o);
  Xe(s, 21, () => e.entries, Xi, (f, d) => {
    var h = qe(), b = ce(h);
    {
      var m = (k) => {
        Cy(k, {
          get layer() {
            return r(d).layer;
          }
        });
      }, p = (k) => {
        {
          let S = /* @__PURE__ */ u(() => r(d).layer.title ?? "");
          Fy(k, {
            get label() {
              return r(S);
            },
            get colormap() {
              return r(d).colormap;
            },
            get domain() {
              return r(d).domain;
            },
            get domainBounds() {
              return r(d).domainBounds;
            },
            get reverse() {
              return r(d).reverse;
            },
            get trim() {
              return r(d).trim;
            },
            get onDomainChange() {
              return r(d).onDomainChange;
            }
          });
        }
      }, g = (k) => {
        var S = Ry(), N = he(S), I = Q(N, 2), x = he(I);
        Y(() => {
          ft(N, `background-color: ${r(d).fill ?? ""};`), Ke(x, r(d).label);
        }), T(k, S);
      }, v = (k) => {
        var S = Uy(), N = he(S);
        {
          var I = (w) => {
            var y = Oy(), H = he(y);
            Y(() => Ke(H, r(d).layer.title)), T(w, y);
          };
          we(N, (w) => {
            r(d).layer.title && w(I);
          });
        }
        var x = Q(N, 2);
        Xe(x, 21, () => r(d).instances, (w) => w.id, (w, y) => {
          var H = zy(), B = he(H);
          {
            let G = /* @__PURE__ */ u(() => a(r(d).layer, r(y).color));
            h1(B, {
              get layer() {
                return r(G);
              },
              variant: "legend"
            });
          }
          var V = Q(B, 2), X = he(V);
          Y(() => Ke(X, r(y).label)), T(w, H);
        }), T(k, S);
      };
      we(b, (k) => {
        r(d).type === "simple" ? k(m) : r(d).type === "colorbar" ? k(p, 1) : r(d).type === "custom" ? k(g, 2) : r(d).type === "expanded" && k(v, 3);
      });
    }
    T(f, h);
  }), Y(() => kn(c, 1, `${r(i) ?? ""} overflow-visible`)), T(t, c), ct();
}
var Hy = /* @__PURE__ */ U("<!><!><!>", 1), By = /* @__PURE__ */ ha('<div class="absolute pointer-events-none"><!></div>'), Wy = /* @__PURE__ */ U('<svg class="panel-svg svelte-ahwj3q"><!><!></svg><!>', 1), Gy = /* @__PURE__ */ ha('<div class="panel-root svelte-ahwj3q"><!></div>');
function Xy(t, e) {
  it(e, !0);
  const a = bt({
    getViewportData: (te) => nt.getViewportData(te),
    drivers: {},
    currentTime: /* @__PURE__ */ new Date(),
    timeDomain: { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date() },
    isPlayheadSettled: !1,
    updateDriver: (te, ae) => Ee.updateDriver(te, ae),
    updateDriverProperty: (te, ae, ye) => Ee.updateDriverProperty(te, ae, ye),
    updateSubplotProperty: (te, ae, ye) => Ee.updateSubplotProperty(te, ae, ye),
    setPlayheadPosition: (te, ae) => Ge.setPlayhead(te, ae),
    setTimeDomain: (te, ae) => Je.setTimeDomainAnimated(ka(te, "UTC"), ka(ae, "UTC")),
    zarrDataOrchestrator: us
  });
  dm(a), Rs(() => {
    a.currentTime = Ge.playheadTime.toDate(), a.timeDomain = { start: Je.start, end: Je.end }, a.isPlayheadSettled = Ge.isSettled;
  }), Rs(() => {
    const te = Object.entries(Ee.drivers), ae = new Set(te.map(([ve]) => ve));
    for (const [ve, $] of te)
      a.drivers[ve] = kl($);
    const ye = dt(() => Object.keys(a.drivers));
    for (const ve of ye)
      ae.has(ve) || delete a.drivers[ve];
  });
  let n = { current: null };
  const i = 55;
  function c(te, ae) {
    const ye = ae.split(".");
    let ve = te;
    const $ = ye.slice(0, -2);
    for (const pe of $)
      if (ve && typeof ve == "object" && pe in ve)
        ve = ve[pe];
      else
        return null;
    return ve;
  }
  function o(te, ae, ye, ve) {
    if (!(te < 0)) {
      if (Ca(ye)) {
        const $ = ye.$driver;
        return (pe) => {
          a.updateDriverProperty($, "color_map_domain.current", pe);
        };
      }
      return ($) => {
        a.updateSubplotProperty(te, `visualisation_layers.${ae}.${ve}.color_map_domain.current`, $);
      };
    }
  }
  function s(te) {
    const ae = [], ye = Ee.visibleSubplots.findIndex((ve) => ve.id === te.id);
    for (let ve = 0; ve < te.visualisation_layers.length; ve++) {
      const $ = te.visualisation_layers[ve];
      if ($.visible === !1 || $.include_in_legend === !1 || $.layer_type === "custom_xtick") continue;
      const pe = u1($, Ee.drivers);
      if (pe) {
        const Ae = c($, pe.propertyPath);
        ae.push({
          type: "colorbar",
          layer: $,
          colormap: pe.colormap,
          domain: pe.domain,
          domainBounds: pe.domainBounds ?? pe.domain,
          reverse: pe.reverse ?? !1,
          trim: pe.trim,
          onDomainChange: o(ye, ve, Ae, pe.propertyPath.replace(".color_map_domain.current", ""))
        });
        continue;
      }
      if ("legend_display" in $ && $.legend_display === "expanded" && "source" in $ && $.source) {
        const L = Qu($.source, Ee.drivers).filter(pa);
        if (L.length > 1) {
          ae.push({
            type: "expanded",
            layer: $,
            instances: L.map((se) => ({
              id: se._instanceId ?? "unknown",
              label: se._instanceLabel ?? se._instanceId ?? "Unknown",
              color: se._instanceColor ?? "#999"
            }))
          });
          continue;
        }
      }
      ae.push({ type: "simple", layer: $ });
    }
    if (te.legend_additional_swaths)
      for (const ve of te.legend_additional_swaths)
        ae.push({ type: "custom", fill: ve.fill, label: ve.label });
    return ae;
  }
  let f = /* @__PURE__ */ Me(480), d = /* @__PURE__ */ u(() => Ee.globalMargins?.top ?? 0), h = /* @__PURE__ */ u(() => Ee.globalMargins?.bottom ?? 0), b = /* @__PURE__ */ u(() => Ee.globalMargins?.left ?? 40), m = /* @__PURE__ */ u(() => Ee.globalMargins?.right ?? 10), p = /* @__PURE__ */ u(() => r(f) - r(d) - r(h)), g = /* @__PURE__ */ u(() => Ee.visibleSubplots), v = /* @__PURE__ */ u(() => r(g).reduce((te, ae) => te + ae.height, 0)), k = /* @__PURE__ */ u(() => r(g).reduce((te, ae) => te + ae.bottom_margin, 0)), S = /* @__PURE__ */ u(() => r(p) - r(k)), N = /* @__PURE__ */ u(() => {
    let te = 0;
    return r(g).map((ae) => {
      const ye = r(d) + te, ve = ae.height / r(v) * r(S), $ = ye + ve + ae.bottom_margin;
      return te += ve + ae.bottom_margin, { y0: ye, y1: $, marginBottom: ae.bottom_margin };
    });
  }), I = 40, x = 10, w = /* @__PURE__ */ u(() => gr.width - r(m) - I), y = /* @__PURE__ */ u(() => gr.width - r(m) - I - x - I), H = null, B = /* @__PURE__ */ u(() => [
    r(b),
    gr.width - r(m)
  ]), V = /* @__PURE__ */ u(() => [Je.start, Je.end]), X = /* @__PURE__ */ Me(bt([Je.start, Je.end])), G = null, q = /* @__PURE__ */ Me(
    !1
    // Track if user is actively zooming
  ), E = /* @__PURE__ */ Me(bt(ar().domain(r(X)).range(r(B))));
  function _(te) {
    const ae = te[0].valueOf(), ye = te[1].valueOf(), ve = (ae + ye) / 2, $ = ye - ae;
    return [ve, 0, $];
  }
  function C(te) {
    const ae = te[0], ye = te[2], ve = new Date(ae - ye / 2), $ = new Date(ae + ye / 2);
    return [ve, $];
  }
  ut(() => {
    !r(q) && r(X).length === 2 && r(X)[0] && r(X)[1] && re(E, ar().domain(r(X)).range(r(B)), !0);
  }), ut(() => {
    const te = r(V), ae = Je.shouldAnimate, ye = dt(() => r(X));
    if (G && (G.interrupt(), G = null), ae) {
      const ve = _(ye), $ = _(te), pe = Gd.rho(1.41)(ve, $), Ae = Je.requestedDurationMs;
      Je.requestedDurationMs = null;
      const L = Ae !== null ? Ae : Math.min(Math.max(pe.duration, 500), 2e3);
      G = mt({}), G.transition().duration(L).tween("domain", function() {
        return function(se) {
          const fe = pe(se);
          re(X, C(fe), !0);
        };
      }).on("end", () => {
        re(X, [te[0], te[1]], !0), re(A, ar().domain([te[0], te[1]]).range(r(B)), !0), re(ee, ar().domain([te[0], te[1]]).range(r(B)), !0), Ee.updateTimeDomain(te[0], te[1]), Ge.onViewportChange(te[0], te[1]);
        try {
          if (r(ie) && n.current) {
            const se = n.current;
            requestAnimationFrame(() => {
              mt(se).call(ue.transform, dc);
            });
          }
        } catch (se) {
          console.warn("Error resetting zoom transform:", se);
        }
        Je.shouldAnimate = !1, G = null;
      }).on("interrupt", () => {
        G = null;
      });
    } else
      re(X, [te[0], te[1]], !0);
  });
  let A = /* @__PURE__ */ Me(bt(r(E).copy())), Z = /* @__PURE__ */ Me(bt([...r(B)])), ee = /* @__PURE__ */ Me(bt(ar().domain(r(X)).range(r(B))));
  ut(() => {
    (r(B)[0] !== r(Z)[0] || r(B)[1] !== r(Z)[1]) && (re(A, ar().domain(r(X)).range(r(B)), !0), re(ee, ar().domain(r(X)).range(r(B)), !0), r(ie) && n.current && mt(n.current).call(ue.transform, dc), re(Z, [...r(B)], !0));
  });
  const ne = function(te) {
    G && (G.interrupt(), G = null), Je.shouldAnimate = !1, re(q, !0), re(E, te.transform.rescaleX(r(A).range(r(B))), !0);
    const ae = r(E).domain();
    ae && ae.length === 2 && ae[0] && ae[1] && (Je.setTimeDomainFromDate(ae[0], ae[1]), Ge.onViewportChange(ae[0], ae[1])), H !== null && clearTimeout(H), H = setTimeout(
      async () => {
        const ye = r(E).domain();
        ye && ye.length === 2 && ye[0] && ye[1] && (re(ee, ar().domain(ye).range(r(B)), !0), Ee.updateTimeDomain(ye[0], ye[1])), re(q, !1);
      },
      100
    );
  };
  let ie = /* @__PURE__ */ Me(!1), ue = S9().on("zoom", ne);
  xn(() => {
    n.current && mt(n.current).call(ue), re(ie, !0);
  });
  var oe = Gy(), de = he(oe);
  {
    var ge = (te) => {
      var ae = Wy(), ye = ce(ae), ve = he(ye);
      Xe(ve, 19, () => r(g), (L) => L.id, (L, se, fe) => {
        const me = /* @__PURE__ */ u(() => r(N)[r(fe)]);
        var Ie = Hy(), Ve = ce(Ie);
        {
          let K = /* @__PURE__ */ u(() => Ee.getSubplotIndex(r(se).id));
          Up(Ve, {
            get subplot() {
              return r(se);
            },
            get subplotIndex() {
              return r(K);
            },
            get xScale() {
              return r(E);
            },
            get referenceXScale() {
              return r(ee);
            },
            get y0() {
              return r(me).y0;
            },
            get y1() {
              return r(me).y1;
            }
          });
        }
        var Ne = Q(Ve);
        {
          let K = /* @__PURE__ */ u(() => r(me).y1 - r(me).marginBottom), xe = /* @__PURE__ */ u(() => r(me).y1 - r(me).y0);
          $p(Ne, {
            get subplotId() {
              return r(se).id;
            },
            get y() {
              return r(K);
            },
            handleWidth: I,
            get leftOffset() {
              return r(y);
            },
            get subplotPixelHeight() {
              return r(xe);
            },
            get marginHeight() {
              return r(me).marginBottom;
            }
          });
        }
        var Qe = Q(Ne);
        {
          var Se = (K) => {
            const xe = /* @__PURE__ */ u(() => r(N)[r(fe) + 1]);
            {
              let We = /* @__PURE__ */ u(() => r(me).y1 - r(me).marginBottom), Ze = /* @__PURE__ */ u(() => gr.width - r(m));
              Qp(K, {
                get visibleIndexAbove() {
                  return r(fe);
                },
                get y() {
                  return r(We);
                },
                handleWidth: I,
                get leftOffset() {
                  return r(w);
                },
                get totalPixelHeight() {
                  return r(S);
                },
                get plotAreaLeft() {
                  return r(b);
                },
                get plotAreaRight() {
                  return r(Ze);
                },
                get positionAbove() {
                  return r(me);
                },
                get positionBelow() {
                  return r(xe);
                }
              });
            }
          };
          we(Qe, (K) => {
            r(fe) < r(g).length - 1 && K(Se);
          });
        }
        T(L, Ie);
      });
      var $ = Q(ve);
      {
        var pe = (L) => {
          var se = qe(), fe = ce(se);
          Xe(fe, 19, () => r(g), (me) => me.id, (me, Ie, Ve) => {
            const Ne = /* @__PURE__ */ u(() => r(N)[r(Ve)]), Qe = /* @__PURE__ */ u(() => r(Ne).y1 - r(Ne).marginBottom), Se = /* @__PURE__ */ u(() => r(Ne).y1 - r(Ne).y0), K = /* @__PURE__ */ u(() => r(Ve) === r(g).length - 1), xe = /* @__PURE__ */ u(() => r(Se) > 50 && (Ee.playheadVisibility === "all" || Ee.playheadVisibility === "bottom" && r(K) || Ee.playheadVisibility === "annotation" && r(Ie).xaxis_annotation_visible));
            var We = qe(), Ze = ce(We);
            {
              var yt = (vt) => {
                tg(vt, {
                  get xScale() {
                    return r(E);
                  },
                  get contentBottom() {
                    return r(Qe);
                  }
                });
              };
              we(Ze, (vt) => {
                r(xe) && vt(yt);
              });
            }
            T(me, We);
          }), T(L, se);
        };
        we($, (L) => {
          Ee.playheadVisibility !== "off" && L(pe);
        });
      }
      var Ae = Q(ye);
      Xe(Ae, 19, () => r(g), (L) => L.id, (L, se, fe) => {
        const me = /* @__PURE__ */ u(() => r(N)[r(fe)]), Ie = /* @__PURE__ */ u(() => r(me).y1 - r(me).y0 - r(me).marginBottom), Ve = /* @__PURE__ */ u(() => s(r(se))), Ne = /* @__PURE__ */ u(() => r(se).legend_visible && r(Ve).length > 0 && r(Ie) >= i);
        var Qe = qe(), Se = ce(Qe);
        {
          var K = (xe) => {
            var We = By(), Ze = he(We);
            {
              let yt = /* @__PURE__ */ u(() => r(se).legend_position ?? "top-right");
              Yy(Ze, {
                get entries() {
                  return r(Ve);
                },
                get position() {
                  return r(yt);
                }
              });
            }
            Y(() => ft(We, `
            top: ${r(me).y0 ?? ""}px;
            left: ${r(b) ?? ""}px;
            width: ${gr.width - r(b) - r(m)}px;
            height: ${r(Ie) ?? ""}px;
          `)), Er(3, We, () => Rr, () => ({ duration: 200 })), T(xe, We);
          };
          we(Se, (xe) => {
            r(Ne) && xe(K);
          });
        }
        T(L, Qe);
      }), T(te, ae);
    };
    we(de, (te) => {
      r(ie) && te(ge);
    });
  }
  Da(oe, (te) => n.current = te, () => n?.current), Xs(oe, "clientHeight", (te) => re(f, te)), Xs(oe, "clientWidth", (te) => gr.width = te), T(t, oe), ct();
}
var qy = /* @__PURE__ */ ha('<div class="standalone-timeseries svelte-l6922a"><!></div>');
function b1(t, e) {
  let a = Tt(e, "height", 3, "100%");
  var n = qy();
  let i;
  var c = he(n);
  Xy(c, {}), Y(() => i = ft(n, "", i, { height: a() })), T(t, n);
}
function Ky(t, e, a) {
  const { height: n = "400px", width: i = "100%" } = a ?? {};
  return t.style.height = n, t.style.width = i, typeof e == "string" ? Zy(t, e) : jy(t, e);
}
function jy(t, e) {
  const a = new m0();
  let n;
  const i = li(() => {
    $u(e), h0(), n = nd(b1, { target: t, props: { height: "100%" } });
  }), { controller: c, markInitialized: o } = b0(
    () => {
      id(n), i();
    },
    a
  );
  return o(), c;
}
function Zy(t, e) {
  const a = new m0();
  let n, i;
  const { controller: c, markInitialized: o } = b0(
    () => {
      n && id(n), i && i();
    },
    a
  );
  return fetch(e).then((s) => {
    if (!s.ok)
      throw new Error(`[timeline-viewer] Failed to fetch layout from ${e}: ${s.status} ${s.statusText}`);
    return s.json();
  }).then((s) => {
    i = li(() => {
      $u(s), h0(), n = nd(b1, { target: t, props: { height: "100%" } });
    }), o();
  }).catch((s) => {
    const f = s instanceof Error ? s : new Error(String(s));
    a.emitError(f);
  }), c;
}
Gh();
export {
  Ky as render
};
