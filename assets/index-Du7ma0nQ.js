(function () { const e = document.createElement("link").relList; if (e && e.supports && e.supports("modulepreload")) return; for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i); new MutationObserver(i => { for (const r of i) if (r.type === "childList") for (const o of r.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && n(o) }).observe(document, { childList: !0, subtree: !0 }); function t(i) { const r = {}; return i.integrity && (r.integrity = i.integrity), i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? r.credentials = "include" : i.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r } function n(i) { if (i.ep) return; i.ep = !0; const r = t(i); fetch(i.href, r) } })();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wo = "161", ai = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }, ci = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, lh = 0, sa = 1, hh = 2, ol = 1, uh = 2, mn = 3, vn = 0, Nt = 1, en = 2, Dn = 0, Li = 1, ra = 2, oa = 3, aa = 4, dh = 5, Yn = 100, fh = 101, ph = 102, ca = 103, la = 104, mh = 200, gh = 201, _h = 202, xh = 203, co = 204, lo = 205, vh = 206, yh = 207, Mh = 208, Sh = 209, Eh = 210, Th = 211, bh = 212, Ah = 213, wh = 214, Rh = 0, Ch = 1, Lh = 2, Qs = 3, Ph = 4, Ih = 5, Dh = 6, Nh = 7, Ro = 0, Uh = 1, Oh = 2, Nn = 0, Fh = 1, Bh = 2, zh = 3, Hh = 4, Gh = 5, kh = 6, ha = "attached", Vh = "detached", al = 300, Ni = 301, Ui = 302, ho = 303, uo = 304, ar = 306, Oi = 1e3, Gt = 1001, er = 1002, _t = 1003, fo = 1004, Ai = 1005, At = 1006, Zs = 1007, gn = 1008, Un = 1009, Wh = 1010, Xh = 1011, Co = 1012, cl = 1013, Pn = 1014, tn = 1015, as = 1016, ll = 1017, hl = 1018, Jn = 1020, qh = 1021, kt = 1023, Yh = 1024, jh = 1025, $n = 1026, Fi = 1027, Kh = 1028, ul = 1029, Zh = 1030, dl = 1031, fl = 1033, yr = 33776, Mr = 33777, Sr = 33778, Er = 33779, ua = 35840, da = 35841, fa = 35842, pa = 35843, pl = 36196, ma = 37492, ga = 37496, _a = 37808, xa = 37809, va = 37810, ya = 37811, Ma = 37812, Sa = 37813, Ea = 37814, Ta = 37815, ba = 37816, Aa = 37817, wa = 37818, Ra = 37819, Ca = 37820, La = 37821, Tr = 36492, Pa = 36494, Ia = 36495, Jh = 36283, Da = 36284, Na = 36285, Ua = 36286, cs = 2300, Bi = 2301, br = 2302, Oa = 2400, Fa = 2401, Ba = 2402, $h = 2500, Qh = 0, ml = 1, po = 2, gl = 3e3, Qn = 3001, eu = 3200, tu = 3201, Lo = 0, nu = 1, Vt = "", ct = "srgb", vt = "srgb-linear", Po = "display-p3", cr = "display-p3-linear", tr = "linear", it = "srgb", nr = "rec709", ir = "p3", li = 7680, za = 519, iu = 512, su = 513, ru = 514, _l = 515, ou = 516, au = 517, cu = 518, lu = 519, mo = 35044, Ha = "300 es", go = 1035, _n = 2e3, sr = 2001; class si { addEventListener(e, t) { this._listeners === void 0 && (this._listeners = {}); const n = this._listeners; n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t) } hasEventListener(e, t) { if (this._listeners === void 0) return !1; const n = this._listeners; return n[e] !== void 0 && n[e].indexOf(t) !== -1 } removeEventListener(e, t) { if (this._listeners === void 0) return; const i = this._listeners[e]; if (i !== void 0) { const r = i.indexOf(t); r !== -1 && i.splice(r, 1) } } dispatchEvent(e) { if (this._listeners === void 0) return; const n = this._listeners[e.type]; if (n !== void 0) { e.target = this; const i = n.slice(0); for (let r = 0, o = i.length; r < o; r++)i[r].call(this, e); e.target = null } } } const Tt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"]; let Ga = 1234567; const ts = Math.PI / 180, zi = 180 / Math.PI; function Wt() { const s = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0; return (Tt[s & 255] + Tt[s >> 8 & 255] + Tt[s >> 16 & 255] + Tt[s >> 24 & 255] + "-" + Tt[e & 255] + Tt[e >> 8 & 255] + "-" + Tt[e >> 16 & 15 | 64] + Tt[e >> 24 & 255] + "-" + Tt[t & 63 | 128] + Tt[t >> 8 & 255] + "-" + Tt[t >> 16 & 255] + Tt[t >> 24 & 255] + Tt[n & 255] + Tt[n >> 8 & 255] + Tt[n >> 16 & 255] + Tt[n >> 24 & 255]).toLowerCase() } function dt(s, e, t) { return Math.max(e, Math.min(t, s)) } function Io(s, e) { return (s % e + e) % e } function hu(s, e, t, n, i) { return n + (s - e) * (i - n) / (t - e) } function uu(s, e, t) { return s !== e ? (t - s) / (e - s) : 0 } function ns(s, e, t) { return (1 - t) * s + t * e } function du(s, e, t, n) { return ns(s, e, 1 - Math.exp(-t * n)) } function fu(s, e = 1) { return e - Math.abs(Io(s, e * 2) - e) } function pu(s, e, t) { return s <= e ? 0 : s >= t ? 1 : (s = (s - e) / (t - e), s * s * (3 - 2 * s)) } function mu(s, e, t) { return s <= e ? 0 : s >= t ? 1 : (s = (s - e) / (t - e), s * s * s * (s * (s * 6 - 15) + 10)) } function gu(s, e) { return s + Math.floor(Math.random() * (e - s + 1)) } function _u(s, e) { return s + Math.random() * (e - s) } function xu(s) { return s * (.5 - Math.random()) } function vu(s) { s !== void 0 && (Ga = s); let e = Ga += 1831565813; return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296 } function yu(s) { return s * ts } function Mu(s) { return s * zi } function _o(s) { return (s & s - 1) === 0 && s !== 0 } function Su(s) { return Math.pow(2, Math.ceil(Math.log(s) / Math.LN2)) } function rr(s) { return Math.pow(2, Math.floor(Math.log(s) / Math.LN2)) } function Eu(s, e, t, n, i) { const r = Math.cos, o = Math.sin, a = r(t / 2), c = o(t / 2), l = r((e + n) / 2), h = o((e + n) / 2), u = r((e - n) / 2), d = o((e - n) / 2), m = r((n - e) / 2), g = o((n - e) / 2); switch (i) { case "XYX": s.set(a * h, c * u, c * d, a * l); break; case "YZY": s.set(c * d, a * h, c * u, a * l); break; case "ZXZ": s.set(c * u, c * d, a * h, a * l); break; case "XZX": s.set(a * h, c * g, c * m, a * l); break; case "YXY": s.set(c * m, a * h, c * g, a * l); break; case "ZYZ": s.set(c * g, c * m, a * h, a * l); break; default: console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i) } } function jt(s, e) { switch (e.constructor) { case Float32Array: return s; case Uint32Array: return s / 4294967295; case Uint16Array: return s / 65535; case Uint8Array: return s / 255; case Int32Array: return Math.max(s / 2147483647, -1); case Int16Array: return Math.max(s / 32767, -1); case Int8Array: return Math.max(s / 127, -1); default: throw new Error("Invalid component type.") } } function Qe(s, e) { switch (e.constructor) { case Float32Array: return s; case Uint32Array: return Math.round(s * 4294967295); case Uint16Array: return Math.round(s * 65535); case Uint8Array: return Math.round(s * 255); case Int32Array: return Math.round(s * 2147483647); case Int16Array: return Math.round(s * 32767); case Int8Array: return Math.round(s * 127); default: throw new Error("Invalid component type.") } } const xl = { DEG2RAD: ts, RAD2DEG: zi, generateUUID: Wt, clamp: dt, euclideanModulo: Io, mapLinear: hu, inverseLerp: uu, lerp: ns, damp: du, pingpong: fu, smoothstep: pu, smootherstep: mu, randInt: gu, randFloat: _u, randFloatSpread: xu, seededRandom: vu, degToRad: yu, radToDeg: Mu, isPowerOfTwo: _o, ceilPowerOfTwo: Su, floorPowerOfTwo: rr, setQuaternionFromProperEuler: Eu, normalize: Qe, denormalize: jt }; class ae { constructor(e = 0, t = 0) { ae.prototype.isVector2 = !0, this.x = e, this.y = t } get width() { return this.x } set width(e) { this.x = e } get height() { return this.y } set height(e) { this.y = e } set(e, t) { return this.x = e, this.y = t, this } setScalar(e) { return this.x = e, this.y = e, this } setX(e) { return this.x = e, this } setY(e) { return this.y = e, this } setComponent(e, t) { switch (e) { case 0: this.x = t; break; case 1: this.y = t; break; default: throw new Error("index is out of range: " + e) }return this } getComponent(e) { switch (e) { case 0: return this.x; case 1: return this.y; default: throw new Error("index is out of range: " + e) } } clone() { return new this.constructor(this.x, this.y) } copy(e) { return this.x = e.x, this.y = e.y, this } add(e) { return this.x += e.x, this.y += e.y, this } addScalar(e) { return this.x += e, this.y += e, this } addVectors(e, t) { return this.x = e.x + t.x, this.y = e.y + t.y, this } addScaledVector(e, t) { return this.x += e.x * t, this.y += e.y * t, this } sub(e) { return this.x -= e.x, this.y -= e.y, this } subScalar(e) { return this.x -= e, this.y -= e, this } subVectors(e, t) { return this.x = e.x - t.x, this.y = e.y - t.y, this } multiply(e) { return this.x *= e.x, this.y *= e.y, this } multiplyScalar(e) { return this.x *= e, this.y *= e, this } divide(e) { return this.x /= e.x, this.y /= e.y, this } divideScalar(e) { return this.multiplyScalar(1 / e) } applyMatrix3(e) { const t = this.x, n = this.y, i = e.elements; return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this } min(e) { return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this } max(e) { return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this } clamp(e, t) { return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this } clampScalar(e, t) { return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this } clampLength(e, t) { const n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n))) } floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this } ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this } round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this } roundToZero() { return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this } negate() { return this.x = -this.x, this.y = -this.y, this } dot(e) { return this.x * e.x + this.y * e.y } cross(e) { return this.x * e.y - this.y * e.x } lengthSq() { return this.x * this.x + this.y * this.y } length() { return Math.sqrt(this.x * this.x + this.y * this.y) } manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) } normalize() { return this.divideScalar(this.length() || 1) } angle() { return Math.atan2(-this.y, -this.x) + Math.PI } angleTo(e) { const t = Math.sqrt(this.lengthSq() * e.lengthSq()); if (t === 0) return Math.PI / 2; const n = this.dot(e) / t; return Math.acos(dt(n, -1, 1)) } distanceTo(e) { return Math.sqrt(this.distanceToSquared(e)) } distanceToSquared(e) { const t = this.x - e.x, n = this.y - e.y; return t * t + n * n } manhattanDistanceTo(e) { return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) } setLength(e) { return this.normalize().multiplyScalar(e) } lerp(e, t) { return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this } lerpVectors(e, t, n) { return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this } equals(e) { return e.x === this.x && e.y === this.y } fromArray(e, t = 0) { return this.x = e[t], this.y = e[t + 1], this } toArray(e = [], t = 0) { return e[t] = this.x, e[t + 1] = this.y, e } fromBufferAttribute(e, t) { return this.x = e.getX(t), this.y = e.getY(t), this } rotateAround(e, t) { const n = Math.cos(t), i = Math.sin(t), r = this.x - e.x, o = this.y - e.y; return this.x = r * n - o * i + e.x, this.y = r * i + o * n + e.y, this } random() { return this.x = Math.random(), this.y = Math.random(), this } *[Symbol.iterator]() { yield this.x, yield this.y } } class qe { constructor(e, t, n, i, r, o, a, c, l) { qe.prototype.isMatrix3 = !0, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, i, r, o, a, c, l) } set(e, t, n, i, r, o, a, c, l) { const h = this.elements; return h[0] = e, h[1] = i, h[2] = a, h[3] = t, h[4] = r, h[5] = c, h[6] = n, h[7] = o, h[8] = l, this } identity() { return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this } copy(e) { const t = this.elements, n = e.elements; return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this } extractBasis(e, t, n) { return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this } setFromMatrix4(e) { const t = e.elements; return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this } multiply(e) { return this.multiplyMatrices(this, e) } premultiply(e) { return this.multiplyMatrices(e, this) } multiplyMatrices(e, t) { const n = e.elements, i = t.elements, r = this.elements, o = n[0], a = n[3], c = n[6], l = n[1], h = n[4], u = n[7], d = n[2], m = n[5], g = n[8], _ = i[0], f = i[3], p = i[6], T = i[1], x = i[4], M = i[7], I = i[2], L = i[5], A = i[8]; return r[0] = o * _ + a * T + c * I, r[3] = o * f + a * x + c * L, r[6] = o * p + a * M + c * A, r[1] = l * _ + h * T + u * I, r[4] = l * f + h * x + u * L, r[7] = l * p + h * M + u * A, r[2] = d * _ + m * T + g * I, r[5] = d * f + m * x + g * L, r[8] = d * p + m * M + g * A, this } multiplyScalar(e) { const t = this.elements; return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this } determinant() { const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], o = e[4], a = e[5], c = e[6], l = e[7], h = e[8]; return t * o * h - t * a * l - n * r * h + n * a * c + i * r * l - i * o * c } invert() { const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], o = e[4], a = e[5], c = e[6], l = e[7], h = e[8], u = h * o - a * l, d = a * c - h * r, m = l * r - o * c, g = t * u + n * d + i * m; if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0); const _ = 1 / g; return e[0] = u * _, e[1] = (i * l - h * n) * _, e[2] = (a * n - i * o) * _, e[3] = d * _, e[4] = (h * t - i * c) * _, e[5] = (i * r - a * t) * _, e[6] = m * _, e[7] = (n * c - l * t) * _, e[8] = (o * t - n * r) * _, this } transpose() { let e; const t = this.elements; return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this } getNormalMatrix(e) { return this.setFromMatrix4(e).invert().transpose() } transposeIntoArray(e) { const t = this.elements; return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this } setUvTransform(e, t, n, i, r, o, a) { const c = Math.cos(r), l = Math.sin(r); return this.set(n * c, n * l, -n * (c * o + l * a) + o + e, -i * l, i * c, -i * (-l * o + c * a) + a + t, 0, 0, 1), this } scale(e, t) { return this.premultiply(Ar.makeScale(e, t)), this } rotate(e) { return this.premultiply(Ar.makeRotation(-e)), this } translate(e, t) { return this.premultiply(Ar.makeTranslation(e, t)), this } makeTranslation(e, t) { return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this } makeRotation(e) { const t = Math.cos(e), n = Math.sin(e); return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this } makeScale(e, t) { return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this } equals(e) { const t = this.elements, n = e.elements; for (let i = 0; i < 9; i++)if (t[i] !== n[i]) return !1; return !0 } fromArray(e, t = 0) { for (let n = 0; n < 9; n++)this.elements[n] = e[n + t]; return this } toArray(e = [], t = 0) { const n = this.elements; return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e } clone() { return new this.constructor().fromArray(this.elements) } } const Ar = new qe; function vl(s) { for (let e = s.length - 1; e >= 0; --e)if (s[e] >= 65535) return !0; return !1 } function ls(s) { return document.createElementNS("http://www.w3.org/1999/xhtml", s) } function Tu() { const s = ls("canvas"); return s.style.display = "block", s } const ka = {}; function ei(s) { s in ka || (ka[s] = !0, console.warn(s)) } const Va = new qe().set(.8224621, .177538, 0, .0331941, .9668058, 0, .0170827, .0723974, .9105199), Wa = new qe().set(1.2249401, -.2249404, 0, -.0420569, 1.0420571, 0, -.0196376, -.0786361, 1.0982735), vs = { [vt]: { transfer: tr, primaries: nr, toReference: s => s, fromReference: s => s }, [ct]: { transfer: it, primaries: nr, toReference: s => s.convertSRGBToLinear(), fromReference: s => s.convertLinearToSRGB() }, [cr]: { transfer: tr, primaries: ir, toReference: s => s.applyMatrix3(Wa), fromReference: s => s.applyMatrix3(Va) }, [Po]: { transfer: it, primaries: ir, toReference: s => s.convertSRGBToLinear().applyMatrix3(Wa), fromReference: s => s.applyMatrix3(Va).convertLinearToSRGB() } }, bu = new Set([vt, cr]), $e = { enabled: !0, _workingColorSpace: vt, get workingColorSpace() { return this._workingColorSpace }, set workingColorSpace(s) { if (!bu.has(s)) throw new Error(`Unsupported working color space, "${s}".`); this._workingColorSpace = s }, convert: function (s, e, t) { if (this.enabled === !1 || e === t || !e || !t) return s; const n = vs[e].toReference, i = vs[t].fromReference; return i(n(s)) }, fromWorkingColorSpace: function (s, e) { return this.convert(s, this._workingColorSpace, e) }, toWorkingColorSpace: function (s, e) { return this.convert(s, e, this._workingColorSpace) }, getPrimaries: function (s) { return vs[s].primaries }, getTransfer: function (s) { return s === Vt ? tr : vs[s].transfer } }; function Pi(s) { return s < .04045 ? s * .0773993808 : Math.pow(s * .9478672986 + .0521327014, 2.4) } function wr(s) { return s < .0031308 ? s * 12.92 : 1.055 * Math.pow(s, .41666) - .055 } let hi; class yl { static getDataURL(e) { if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src; let t; if (e instanceof HTMLCanvasElement) t = e; else { hi === void 0 && (hi = ls("canvas")), hi.width = e.width, hi.height = e.height; const n = hi.getContext("2d"); e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = hi } return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", .6)) : t.toDataURL("image/png") } static sRGBToLinear(e) { if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) { const t = ls("canvas"); t.width = e.width, t.height = e.height; const n = t.getContext("2d"); n.drawImage(e, 0, 0, e.width, e.height); const i = n.getImageData(0, 0, e.width, e.height), r = i.data; for (let o = 0; o < r.length; o++)r[o] = Pi(r[o] / 255) * 255; return n.putImageData(i, 0, 0), t } else if (e.data) { const t = e.data.slice(0); for (let n = 0; n < t.length; n++)t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Pi(t[n] / 255) * 255) : t[n] = Pi(t[n]); return { data: t, width: e.width, height: e.height } } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e } } let Au = 0; class Ml { constructor(e = null) { this.isSource = !0, Object.defineProperty(this, "id", { value: Au++ }), this.uuid = Wt(), this.data = e, this.dataReady = !0, this.version = 0 } set needsUpdate(e) { e === !0 && this.version++ } toJSON(e) { const t = e === void 0 || typeof e == "string"; if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid]; const n = { uuid: this.uuid, url: "" }, i = this.data; if (i !== null) { let r; if (Array.isArray(i)) { r = []; for (let o = 0, a = i.length; o < a; o++)i[o].isDataTexture ? r.push(Rr(i[o].image)) : r.push(Rr(i[o])) } else r = Rr(i); n.url = r } return t || (e.images[this.uuid] = n), n } } function Rr(s) { return typeof HTMLImageElement < "u" && s instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && s instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && s instanceof ImageBitmap ? yl.getDataURL(s) : s.data ? { data: Array.from(s.data), width: s.width, height: s.height, type: s.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {}) } let wu = 0; class xt extends si { constructor(e = xt.DEFAULT_IMAGE, t = xt.DEFAULT_MAPPING, n = Gt, i = Gt, r = At, o = gn, a = kt, c = Un, l = xt.DEFAULT_ANISOTROPY, h = Vt) { super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: wu++ }), this.uuid = Wt(), this.name = "", this.source = new Ml(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = o, this.anisotropy = l, this.format = a, this.internalFormat = null, this.type = c, this.offset = new ae(0, 0), this.repeat = new ae(1, 1), this.center = new ae(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new qe, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, typeof h == "string" ? this.colorSpace = h : (ei("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = h === Qn ? ct : Vt), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1 } get image() { return this.source.data } set image(e = null) { this.source.data = e } updateMatrix() { this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y) } clone() { return new this.constructor().copy(this) } copy(e) { return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this } toJSON(e) { const t = e === void 0 || typeof e == "string"; if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid]; const n = { metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(e).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment }; return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n } dispose() { this.dispatchEvent({ type: "dispose" }) } transformUv(e) { if (this.mapping !== al) return e; if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) { case Oi: e.x = e.x - Math.floor(e.x); break; case Gt: e.x = e.x < 0 ? 0 : 1; break; case er: Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x); break }if (e.y < 0 || e.y > 1) switch (this.wrapT) { case Oi: e.y = e.y - Math.floor(e.y); break; case Gt: e.y = e.y < 0 ? 0 : 1; break; case er: Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y); break }return this.flipY && (e.y = 1 - e.y), e } set needsUpdate(e) { e === !0 && (this.version++, this.source.needsUpdate = !0) } get encoding() { return ei("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === ct ? Qn : gl } set encoding(e) { ei("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = e === Qn ? ct : Vt } } xt.DEFAULT_IMAGE = null; xt.DEFAULT_MAPPING = al; xt.DEFAULT_ANISOTROPY = 1; class nt { constructor(e = 0, t = 0, n = 0, i = 1) { nt.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i } get width() { return this.z } set width(e) { this.z = e } get height() { return this.w } set height(e) { this.w = e } set(e, t, n, i) { return this.x = e, this.y = t, this.z = n, this.w = i, this } setScalar(e) { return this.x = e, this.y = e, this.z = e, this.w = e, this } setX(e) { return this.x = e, this } setY(e) { return this.y = e, this } setZ(e) { return this.z = e, this } setW(e) { return this.w = e, this } setComponent(e, t) { switch (e) { case 0: this.x = t; break; case 1: this.y = t; break; case 2: this.z = t; break; case 3: this.w = t; break; default: throw new Error("index is out of range: " + e) }return this } getComponent(e) { switch (e) { case 0: return this.x; case 1: return this.y; case 2: return this.z; case 3: return this.w; default: throw new Error("index is out of range: " + e) } } clone() { return new this.constructor(this.x, this.y, this.z, this.w) } copy(e) { return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this } add(e) { return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this } addScalar(e) { return this.x += e, this.y += e, this.z += e, this.w += e, this } addVectors(e, t) { return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this } addScaledVector(e, t) { return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this } sub(e) { return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this } subScalar(e) { return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this } subVectors(e, t) { return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this } multiply(e) { return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this } multiplyScalar(e) { return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this } applyMatrix4(e) { const t = this.x, n = this.y, i = this.z, r = this.w, o = e.elements; return this.x = o[0] * t + o[4] * n + o[8] * i + o[12] * r, this.y = o[1] * t + o[5] * n + o[9] * i + o[13] * r, this.z = o[2] * t + o[6] * n + o[10] * i + o[14] * r, this.w = o[3] * t + o[7] * n + o[11] * i + o[15] * r, this } divideScalar(e) { return this.multiplyScalar(1 / e) } setAxisAngleFromQuaternion(e) { this.w = 2 * Math.acos(e.w); const t = Math.sqrt(1 - e.w * e.w); return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this } setAxisAngleFromRotationMatrix(e) { let t, n, i, r; const c = e.elements, l = c[0], h = c[4], u = c[8], d = c[1], m = c[5], g = c[9], _ = c[2], f = c[6], p = c[10]; if (Math.abs(h - d) < .01 && Math.abs(u - _) < .01 && Math.abs(g - f) < .01) { if (Math.abs(h + d) < .1 && Math.abs(u + _) < .1 && Math.abs(g + f) < .1 && Math.abs(l + m + p - 3) < .1) return this.set(1, 0, 0, 0), this; t = Math.PI; const x = (l + 1) / 2, M = (m + 1) / 2, I = (p + 1) / 2, L = (h + d) / 4, A = (u + _) / 4, z = (g + f) / 4; return x > M && x > I ? x < .01 ? (n = 0, i = .707106781, r = .707106781) : (n = Math.sqrt(x), i = L / n, r = A / n) : M > I ? M < .01 ? (n = .707106781, i = 0, r = .707106781) : (i = Math.sqrt(M), n = L / i, r = z / i) : I < .01 ? (n = .707106781, i = .707106781, r = 0) : (r = Math.sqrt(I), n = A / r, i = z / r), this.set(n, i, r, t), this } let T = Math.sqrt((f - g) * (f - g) + (u - _) * (u - _) + (d - h) * (d - h)); return Math.abs(T) < .001 && (T = 1), this.x = (f - g) / T, this.y = (u - _) / T, this.z = (d - h) / T, this.w = Math.acos((l + m + p - 1) / 2), this } min(e) { return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this } max(e) { return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this } clamp(e, t) { return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this } clampScalar(e, t) { return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this } clampLength(e, t) { const n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n))) } floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this } ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this } round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this } roundToZero() { return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this } negate() { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this } dot(e) { return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w } lengthSq() { return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w } length() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w) } manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w) } normalize() { return this.divideScalar(this.length() || 1) } setLength(e) { return this.normalize().multiplyScalar(e) } lerp(e, t) { return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this } lerpVectors(e, t, n) { return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this } equals(e) { return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w } fromArray(e, t = 0) { return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this } toArray(e = [], t = 0) { return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e } fromBufferAttribute(e, t) { return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this } random() { return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this } *[Symbol.iterator]() { yield this.x, yield this.y, yield this.z, yield this.w } } class Ru extends si { constructor(e = 1, t = 1, n = {}) { super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new nt(0, 0, e, t), this.scissorTest = !1, this.viewport = new nt(0, 0, e, t); const i = { width: e, height: t, depth: 1 }; n.encoding !== void 0 && (ei("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), n.colorSpace = n.encoding === Qn ? ct : Vt), n = Object.assign({ generateMipmaps: !1, internalFormat: null, minFilter: At, depthBuffer: !0, stencilBuffer: !1, depthTexture: null, samples: 0 }, n), this.texture = new xt(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps, this.texture.internalFormat = n.internalFormat, this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples } setSize(e, t, n = 1) { (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t) } clone() { return new this.constructor().copy(this) } copy(e) { this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.isRenderTargetTexture = !0; const t = Object.assign({}, e.texture.image); return this.texture.source = new Ml(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this } dispose() { this.dispatchEvent({ type: "dispose" }) } } class ti extends Ru { constructor(e = 1, t = 1, n = {}) { super(e, t, n), this.isWebGLRenderTarget = !0 } } class Sl extends xt { constructor(e = null, t = 1, n = 1, i = 1) { super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = _t, this.minFilter = _t, this.wrapR = Gt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1 } } class Cu extends xt { constructor(e = null, t = 1, n = 1, i = 1) { super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = _t, this.minFilter = _t, this.wrapR = Gt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1 } } class sn { constructor(e = 0, t = 0, n = 0, i = 1) { this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i } static slerpFlat(e, t, n, i, r, o, a) { let c = n[i + 0], l = n[i + 1], h = n[i + 2], u = n[i + 3]; const d = r[o + 0], m = r[o + 1], g = r[o + 2], _ = r[o + 3]; if (a === 0) { e[t + 0] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = u; return } if (a === 1) { e[t + 0] = d, e[t + 1] = m, e[t + 2] = g, e[t + 3] = _; return } if (u !== _ || c !== d || l !== m || h !== g) { let f = 1 - a; const p = c * d + l * m + h * g + u * _, T = p >= 0 ? 1 : -1, x = 1 - p * p; if (x > Number.EPSILON) { const I = Math.sqrt(x), L = Math.atan2(I, p * T); f = Math.sin(f * L) / I, a = Math.sin(a * L) / I } const M = a * T; if (c = c * f + d * M, l = l * f + m * M, h = h * f + g * M, u = u * f + _ * M, f === 1 - a) { const I = 1 / Math.sqrt(c * c + l * l + h * h + u * u); c *= I, l *= I, h *= I, u *= I } } e[t] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = u } static multiplyQuaternionsFlat(e, t, n, i, r, o) { const a = n[i], c = n[i + 1], l = n[i + 2], h = n[i + 3], u = r[o], d = r[o + 1], m = r[o + 2], g = r[o + 3]; return e[t] = a * g + h * u + c * m - l * d, e[t + 1] = c * g + h * d + l * u - a * m, e[t + 2] = l * g + h * m + a * d - c * u, e[t + 3] = h * g - a * u - c * d - l * m, e } get x() { return this._x } set x(e) { this._x = e, this._onChangeCallback() } get y() { return this._y } set y(e) { this._y = e, this._onChangeCallback() } get z() { return this._z } set z(e) { this._z = e, this._onChangeCallback() } get w() { return this._w } set w(e) { this._w = e, this._onChangeCallback() } set(e, t, n, i) { return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this } clone() { return new this.constructor(this._x, this._y, this._z, this._w) } copy(e) { return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this } setFromEuler(e, t = !0) { const n = e._x, i = e._y, r = e._z, o = e._order, a = Math.cos, c = Math.sin, l = a(n / 2), h = a(i / 2), u = a(r / 2), d = c(n / 2), m = c(i / 2), g = c(r / 2); switch (o) { case "XYZ": this._x = d * h * u + l * m * g, this._y = l * m * u - d * h * g, this._z = l * h * g + d * m * u, this._w = l * h * u - d * m * g; break; case "YXZ": this._x = d * h * u + l * m * g, this._y = l * m * u - d * h * g, this._z = l * h * g - d * m * u, this._w = l * h * u + d * m * g; break; case "ZXY": this._x = d * h * u - l * m * g, this._y = l * m * u + d * h * g, this._z = l * h * g + d * m * u, this._w = l * h * u - d * m * g; break; case "ZYX": this._x = d * h * u - l * m * g, this._y = l * m * u + d * h * g, this._z = l * h * g - d * m * u, this._w = l * h * u + d * m * g; break; case "YZX": this._x = d * h * u + l * m * g, this._y = l * m * u + d * h * g, this._z = l * h * g - d * m * u, this._w = l * h * u - d * m * g; break; case "XZY": this._x = d * h * u - l * m * g, this._y = l * m * u - d * h * g, this._z = l * h * g + d * m * u, this._w = l * h * u + d * m * g; break; default: console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o) }return t === !0 && this._onChangeCallback(), this } setFromAxisAngle(e, t) { const n = t / 2, i = Math.sin(n); return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this } setFromRotationMatrix(e) { const t = e.elements, n = t[0], i = t[4], r = t[8], o = t[1], a = t[5], c = t[9], l = t[2], h = t[6], u = t[10], d = n + a + u; if (d > 0) { const m = .5 / Math.sqrt(d + 1); this._w = .25 / m, this._x = (h - c) * m, this._y = (r - l) * m, this._z = (o - i) * m } else if (n > a && n > u) { const m = 2 * Math.sqrt(1 + n - a - u); this._w = (h - c) / m, this._x = .25 * m, this._y = (i + o) / m, this._z = (r + l) / m } else if (a > u) { const m = 2 * Math.sqrt(1 + a - n - u); this._w = (r - l) / m, this._x = (i + o) / m, this._y = .25 * m, this._z = (c + h) / m } else { const m = 2 * Math.sqrt(1 + u - n - a); this._w = (o - i) / m, this._x = (r + l) / m, this._y = (c + h) / m, this._z = .25 * m } return this._onChangeCallback(), this } setFromUnitVectors(e, t) { let n = e.dot(t) + 1; return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize() } angleTo(e) { return 2 * Math.acos(Math.abs(dt(this.dot(e), -1, 1))) } rotateTowards(e, t) { const n = this.angleTo(e); if (n === 0) return this; const i = Math.min(1, t / n); return this.slerp(e, i), this } identity() { return this.set(0, 0, 0, 1) } invert() { return this.conjugate() } conjugate() { return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this } dot(e) { return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w } lengthSq() { return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w } length() { return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w) } normalize() { let e = this.length(); return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this } multiply(e) { return this.multiplyQuaternions(this, e) } premultiply(e) { return this.multiplyQuaternions(e, this) } multiplyQuaternions(e, t) { const n = e._x, i = e._y, r = e._z, o = e._w, a = t._x, c = t._y, l = t._z, h = t._w; return this._x = n * h + o * a + i * l - r * c, this._y = i * h + o * c + r * a - n * l, this._z = r * h + o * l + n * c - i * a, this._w = o * h - n * a - i * c - r * l, this._onChangeCallback(), this } slerp(e, t) { if (t === 0) return this; if (t === 1) return this.copy(e); const n = this._x, i = this._y, r = this._z, o = this._w; let a = o * e._w + n * e._x + i * e._y + r * e._z; if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1) return this._w = o, this._x = n, this._y = i, this._z = r, this; const c = 1 - a * a; if (c <= Number.EPSILON) { const m = 1 - t; return this._w = m * o + t * this._w, this._x = m * n + t * this._x, this._y = m * i + t * this._y, this._z = m * r + t * this._z, this.normalize(), this } const l = Math.sqrt(c), h = Math.atan2(l, a), u = Math.sin((1 - t) * h) / l, d = Math.sin(t * h) / l; return this._w = o * u + this._w * d, this._x = n * u + this._x * d, this._y = i * u + this._y * d, this._z = r * u + this._z * d, this._onChangeCallback(), this } slerpQuaternions(e, t, n) { return this.copy(e).slerp(t, n) } random() { const e = Math.random(), t = Math.sqrt(1 - e), n = Math.sqrt(e), i = 2 * Math.PI * Math.random(), r = 2 * Math.PI * Math.random(); return this.set(t * Math.cos(i), n * Math.sin(r), n * Math.cos(r), t * Math.sin(i)) } equals(e) { return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w } fromArray(e, t = 0) { return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this } toArray(e = [], t = 0) { return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e } fromBufferAttribute(e, t) { return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this } toJSON() { return this.toArray() } _onChange(e) { return this._onChangeCallback = e, this } _onChangeCallback() { } *[Symbol.iterator]() { yield this._x, yield this._y, yield this._z, yield this._w } } class P { constructor(e = 0, t = 0, n = 0) { P.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n } set(e, t, n) { return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this } setScalar(e) { return this.x = e, this.y = e, this.z = e, this } setX(e) { return this.x = e, this } setY(e) { return this.y = e, this } setZ(e) { return this.z = e, this } setComponent(e, t) { switch (e) { case 0: this.x = t; break; case 1: this.y = t; break; case 2: this.z = t; break; default: throw new Error("index is out of range: " + e) }return this } getComponent(e) { switch (e) { case 0: return this.x; case 1: return this.y; case 2: return this.z; default: throw new Error("index is out of range: " + e) } } clone() { return new this.constructor(this.x, this.y, this.z) } copy(e) { return this.x = e.x, this.y = e.y, this.z = e.z, this } add(e) { return this.x += e.x, this.y += e.y, this.z += e.z, this } addScalar(e) { return this.x += e, this.y += e, this.z += e, this } addVectors(e, t) { return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this } addScaledVector(e, t) { return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this } sub(e) { return this.x -= e.x, this.y -= e.y, this.z -= e.z, this } subScalar(e) { return this.x -= e, this.y -= e, this.z -= e, this } subVectors(e, t) { return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this } multiply(e) { return this.x *= e.x, this.y *= e.y, this.z *= e.z, this } multiplyScalar(e) { return this.x *= e, this.y *= e, this.z *= e, this } multiplyVectors(e, t) { return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this } applyEuler(e) { return this.applyQuaternion(Xa.setFromEuler(e)) } applyAxisAngle(e, t) { return this.applyQuaternion(Xa.setFromAxisAngle(e, t)) } applyMatrix3(e) { const t = this.x, n = this.y, i = this.z, r = e.elements; return this.x = r[0] * t + r[3] * n + r[6] * i, this.y = r[1] * t + r[4] * n + r[7] * i, this.z = r[2] * t + r[5] * n + r[8] * i, this } applyNormalMatrix(e) { return this.applyMatrix3(e).normalize() } applyMatrix4(e) { const t = this.x, n = this.y, i = this.z, r = e.elements, o = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]); return this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * o, this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * o, this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * o, this } applyQuaternion(e) { const t = this.x, n = this.y, i = this.z, r = e.x, o = e.y, a = e.z, c = e.w, l = 2 * (o * i - a * n), h = 2 * (a * t - r * i), u = 2 * (r * n - o * t); return this.x = t + c * l + o * u - a * h, this.y = n + c * h + a * l - r * u, this.z = i + c * u + r * h - o * l, this } project(e) { return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix) } unproject(e) { return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld) } transformDirection(e) { const t = this.x, n = this.y, i = this.z, r = e.elements; return this.x = r[0] * t + r[4] * n + r[8] * i, this.y = r[1] * t + r[5] * n + r[9] * i, this.z = r[2] * t + r[6] * n + r[10] * i, this.normalize() } divide(e) { return this.x /= e.x, this.y /= e.y, this.z /= e.z, this } divideScalar(e) { return this.multiplyScalar(1 / e) } min(e) { return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this } max(e) { return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this } clamp(e, t) { return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this } clampScalar(e, t) { return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this } clampLength(e, t) { const n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n))) } floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this } ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this } round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this } roundToZero() { return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this } negate() { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this } dot(e) { return this.x * e.x + this.y * e.y + this.z * e.z } lengthSq() { return this.x * this.x + this.y * this.y + this.z * this.z } length() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z) } manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) } normalize() { return this.divideScalar(this.length() || 1) } setLength(e) { return this.normalize().multiplyScalar(e) } lerp(e, t) { return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this } lerpVectors(e, t, n) { return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this } cross(e) { return this.crossVectors(this, e) } crossVectors(e, t) { const n = e.x, i = e.y, r = e.z, o = t.x, a = t.y, c = t.z; return this.x = i * c - r * a, this.y = r * o - n * c, this.z = n * a - i * o, this } projectOnVector(e) { const t = e.lengthSq(); if (t === 0) return this.set(0, 0, 0); const n = e.dot(this) / t; return this.copy(e).multiplyScalar(n) } projectOnPlane(e) { return Cr.copy(this).projectOnVector(e), this.sub(Cr) } reflect(e) { return this.sub(Cr.copy(e).multiplyScalar(2 * this.dot(e))) } angleTo(e) { const t = Math.sqrt(this.lengthSq() * e.lengthSq()); if (t === 0) return Math.PI / 2; const n = this.dot(e) / t; return Math.acos(dt(n, -1, 1)) } distanceTo(e) { return Math.sqrt(this.distanceToSquared(e)) } distanceToSquared(e) { const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z; return t * t + n * n + i * i } manhattanDistanceTo(e) { return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z) } setFromSpherical(e) { return this.setFromSphericalCoords(e.radius, e.phi, e.theta) } setFromSphericalCoords(e, t, n) { const i = Math.sin(t) * e; return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this } setFromCylindrical(e) { return this.setFromCylindricalCoords(e.radius, e.theta, e.y) } setFromCylindricalCoords(e, t, n) { return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this } setFromMatrixPosition(e) { const t = e.elements; return this.x = t[12], this.y = t[13], this.z = t[14], this } setFromMatrixScale(e) { const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length(); return this.x = t, this.y = n, this.z = i, this } setFromMatrixColumn(e, t) { return this.fromArray(e.elements, t * 4) } setFromMatrix3Column(e, t) { return this.fromArray(e.elements, t * 3) } setFromEuler(e) { return this.x = e._x, this.y = e._y, this.z = e._z, this } setFromColor(e) { return this.x = e.r, this.y = e.g, this.z = e.b, this } equals(e) { return e.x === this.x && e.y === this.y && e.z === this.z } fromArray(e, t = 0) { return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this } toArray(e = [], t = 0) { return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e } fromBufferAttribute(e, t) { return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this } random() { return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this } randomDirection() { const e = (Math.random() - .5) * 2, t = Math.random() * Math.PI * 2, n = Math.sqrt(1 - e ** 2); return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this } *[Symbol.iterator]() { yield this.x, yield this.y, yield this.z } } const Cr = new P, Xa = new sn; class yn { constructor(e = new P(1 / 0, 1 / 0, 1 / 0), t = new P(-1 / 0, -1 / 0, -1 / 0)) { this.isBox3 = !0, this.min = e, this.max = t } set(e, t) { return this.min.copy(e), this.max.copy(t), this } setFromArray(e) { this.makeEmpty(); for (let t = 0, n = e.length; t < n; t += 3)this.expandByPoint(Xt.fromArray(e, t)); return this } setFromBufferAttribute(e) { this.makeEmpty(); for (let t = 0, n = e.count; t < n; t++)this.expandByPoint(Xt.fromBufferAttribute(e, t)); return this } setFromPoints(e) { this.makeEmpty(); for (let t = 0, n = e.length; t < n; t++)this.expandByPoint(e[t]); return this } setFromCenterAndSize(e, t) { const n = Xt.copy(t).multiplyScalar(.5); return this.min.copy(e).sub(n), this.max.copy(e).add(n), this } setFromObject(e, t = !1) { return this.makeEmpty(), this.expandByObject(e, t) } clone() { return new this.constructor().copy(this) } copy(e) { return this.min.copy(e.min), this.max.copy(e.max), this } makeEmpty() { return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this } isEmpty() { return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z } getCenter(e) { return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5) } getSize(e) { return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min) } expandByPoint(e) { return this.min.min(e), this.max.max(e), this } expandByVector(e) { return this.min.sub(e), this.max.add(e), this } expandByScalar(e) { return this.min.addScalar(-e), this.max.addScalar(e), this } expandByObject(e, t = !1) { e.updateWorldMatrix(!1, !1); const n = e.geometry; if (n !== void 0) { const r = n.getAttribute("position"); if (t === !0 && r !== void 0 && e.isInstancedMesh !== !0) for (let o = 0, a = r.count; o < a; o++)e.isMesh === !0 ? e.getVertexPosition(o, Xt) : Xt.fromBufferAttribute(r, o), Xt.applyMatrix4(e.matrixWorld), this.expandByPoint(Xt); else e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), ys.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), ys.copy(n.boundingBox)), ys.applyMatrix4(e.matrixWorld), this.union(ys) } const i = e.children; for (let r = 0, o = i.length; r < o; r++)this.expandByObject(i[r], t); return this } containsPoint(e) { return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z) } containsBox(e) { return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z } getParameter(e, t) { return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z)) } intersectsBox(e) { return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z) } intersectsSphere(e) { return this.clampPoint(e.center, Xt), Xt.distanceToSquared(e.center) <= e.radius * e.radius } intersectsPlane(e) { let t, n; return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant } intersectsTriangle(e) { if (this.isEmpty()) return !1; this.getCenter(Yi), Ms.subVectors(this.max, Yi), ui.subVectors(e.a, Yi), di.subVectors(e.b, Yi), fi.subVectors(e.c, Yi), Sn.subVectors(di, ui), En.subVectors(fi, di), Gn.subVectors(ui, fi); let t = [0, -Sn.z, Sn.y, 0, -En.z, En.y, 0, -Gn.z, Gn.y, Sn.z, 0, -Sn.x, En.z, 0, -En.x, Gn.z, 0, -Gn.x, -Sn.y, Sn.x, 0, -En.y, En.x, 0, -Gn.y, Gn.x, 0]; return !Lr(t, ui, di, fi, Ms) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Lr(t, ui, di, fi, Ms)) ? !1 : (Ss.crossVectors(Sn, En), t = [Ss.x, Ss.y, Ss.z], Lr(t, ui, di, fi, Ms)) } clampPoint(e, t) { return t.copy(e).clamp(this.min, this.max) } distanceToPoint(e) { return this.clampPoint(e, Xt).distanceTo(e) } getBoundingSphere(e) { return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Xt).length() * .5), e } intersect(e) { return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this } union(e) { return this.min.min(e.min), this.max.max(e.max), this } applyMatrix4(e) { return this.isEmpty() ? this : (ln[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), ln[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), ln[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), ln[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), ln[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), ln[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), ln[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), ln[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(ln), this) } translate(e) { return this.min.add(e), this.max.add(e), this } equals(e) { return e.min.equals(this.min) && e.max.equals(this.max) } } const ln = [new P, new P, new P, new P, new P, new P, new P, new P], Xt = new P, ys = new yn, ui = new P, di = new P, fi = new P, Sn = new P, En = new P, Gn = new P, Yi = new P, Ms = new P, Ss = new P, kn = new P; function Lr(s, e, t, n, i) { for (let r = 0, o = s.length - 3; r <= o; r += 3) { kn.fromArray(s, r); const a = i.x * Math.abs(kn.x) + i.y * Math.abs(kn.y) + i.z * Math.abs(kn.z), c = e.dot(kn), l = t.dot(kn), h = n.dot(kn); if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > a) return !1 } return !0 } const Lu = new yn, ji = new P, Pr = new P; class rn { constructor(e = new P, t = -1) { this.isSphere = !0, this.center = e, this.radius = t } set(e, t) { return this.center.copy(e), this.radius = t, this } setFromPoints(e, t) { const n = this.center; t !== void 0 ? n.copy(t) : Lu.setFromPoints(e).getCenter(n); let i = 0; for (let r = 0, o = e.length; r < o; r++)i = Math.max(i, n.distanceToSquared(e[r])); return this.radius = Math.sqrt(i), this } copy(e) { return this.center.copy(e.center), this.radius = e.radius, this } isEmpty() { return this.radius < 0 } makeEmpty() { return this.center.set(0, 0, 0), this.radius = -1, this } containsPoint(e) { return e.distanceToSquared(this.center) <= this.radius * this.radius } distanceToPoint(e) { return e.distanceTo(this.center) - this.radius } intersectsSphere(e) { const t = this.radius + e.radius; return e.center.distanceToSquared(this.center) <= t * t } intersectsBox(e) { return e.intersectsSphere(this) } intersectsPlane(e) { return Math.abs(e.distanceToPoint(this.center)) <= this.radius } clampPoint(e, t) { const n = this.center.distanceToSquared(e); return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t } getBoundingBox(e) { return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e) } applyMatrix4(e) { return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this } translate(e) { return this.center.add(e), this } expandByPoint(e) { if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this; ji.subVectors(e, this.center); const t = ji.lengthSq(); if (t > this.radius * this.radius) { const n = Math.sqrt(t), i = (n - this.radius) * .5; this.center.addScaledVector(ji, i / n), this.radius += i } return this } union(e) { return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Pr.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(ji.copy(e.center).add(Pr)), this.expandByPoint(ji.copy(e.center).sub(Pr))), this) } equals(e) { return e.center.equals(this.center) && e.radius === this.radius } clone() { return new this.constructor().copy(this) } } const hn = new P, Ir = new P, Es = new P, Tn = new P, Dr = new P, Ts = new P, Nr = new P; class ps { constructor(e = new P, t = new P(0, 0, -1)) { this.origin = e, this.direction = t } set(e, t) { return this.origin.copy(e), this.direction.copy(t), this } copy(e) { return this.origin.copy(e.origin), this.direction.copy(e.direction), this } at(e, t) { return t.copy(this.origin).addScaledVector(this.direction, e) } lookAt(e) { return this.direction.copy(e).sub(this.origin).normalize(), this } recast(e) { return this.origin.copy(this.at(e, hn)), this } closestPointToPoint(e, t) { t.subVectors(e, this.origin); const n = t.dot(this.direction); return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n) } distanceToPoint(e) { return Math.sqrt(this.distanceSqToPoint(e)) } distanceSqToPoint(e) { const t = hn.subVectors(e, this.origin).dot(this.direction); return t < 0 ? this.origin.distanceToSquared(e) : (hn.copy(this.origin).addScaledVector(this.direction, t), hn.distanceToSquared(e)) } distanceSqToSegment(e, t, n, i) { Ir.copy(e).add(t).multiplyScalar(.5), Es.copy(t).sub(e).normalize(), Tn.copy(this.origin).sub(Ir); const r = e.distanceTo(t) * .5, o = -this.direction.dot(Es), a = Tn.dot(this.direction), c = -Tn.dot(Es), l = Tn.lengthSq(), h = Math.abs(1 - o * o); let u, d, m, g; if (h > 0) if (u = o * c - a, d = o * a - c, g = r * h, u >= 0) if (d >= -g) if (d <= g) { const _ = 1 / h; u *= _, d *= _, m = u * (u + o * d + 2 * a) + d * (o * u + d + 2 * c) + l } else d = r, u = Math.max(0, -(o * d + a)), m = -u * u + d * (d + 2 * c) + l; else d = -r, u = Math.max(0, -(o * d + a)), m = -u * u + d * (d + 2 * c) + l; else d <= -g ? (u = Math.max(0, -(-o * r + a)), d = u > 0 ? -r : Math.min(Math.max(-r, -c), r), m = -u * u + d * (d + 2 * c) + l) : d <= g ? (u = 0, d = Math.min(Math.max(-r, -c), r), m = d * (d + 2 * c) + l) : (u = Math.max(0, -(o * r + a)), d = u > 0 ? r : Math.min(Math.max(-r, -c), r), m = -u * u + d * (d + 2 * c) + l); else d = o > 0 ? -r : r, u = Math.max(0, -(o * d + a)), m = -u * u + d * (d + 2 * c) + l; return n && n.copy(this.origin).addScaledVector(this.direction, u), i && i.copy(Ir).addScaledVector(Es, d), m } intersectSphere(e, t) { hn.subVectors(e.center, this.origin); const n = hn.dot(this.direction), i = hn.dot(hn) - n * n, r = e.radius * e.radius; if (i > r) return null; const o = Math.sqrt(r - i), a = n - o, c = n + o; return c < 0 ? null : a < 0 ? this.at(c, t) : this.at(a, t) } intersectsSphere(e) { return this.distanceSqToPoint(e.center) <= e.radius * e.radius } distanceToPlane(e) { const t = e.normal.dot(this.direction); if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null; const n = -(this.origin.dot(e.normal) + e.constant) / t; return n >= 0 ? n : null } intersectPlane(e, t) { const n = this.distanceToPlane(e); return n === null ? null : this.at(n, t) } intersectsPlane(e) { const t = e.distanceToPoint(this.origin); return t === 0 || e.normal.dot(this.direction) * t < 0 } intersectBox(e, t) { let n, i, r, o, a, c; const l = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin; return l >= 0 ? (n = (e.min.x - d.x) * l, i = (e.max.x - d.x) * l) : (n = (e.max.x - d.x) * l, i = (e.min.x - d.x) * l), h >= 0 ? (r = (e.min.y - d.y) * h, o = (e.max.y - d.y) * h) : (r = (e.max.y - d.y) * h, o = (e.min.y - d.y) * h), n > o || r > i || ((r > n || isNaN(n)) && (n = r), (o < i || isNaN(i)) && (i = o), u >= 0 ? (a = (e.min.z - d.z) * u, c = (e.max.z - d.z) * u) : (a = (e.max.z - d.z) * u, c = (e.min.z - d.z) * u), n > c || a > i) || ((a > n || n !== n) && (n = a), (c < i || i !== i) && (i = c), i < 0) ? null : this.at(n >= 0 ? n : i, t) } intersectsBox(e) { return this.intersectBox(e, hn) !== null } intersectTriangle(e, t, n, i, r) { Dr.subVectors(t, e), Ts.subVectors(n, e), Nr.crossVectors(Dr, Ts); let o = this.direction.dot(Nr), a; if (o > 0) { if (i) return null; a = 1 } else if (o < 0) a = -1, o = -o; else return null; Tn.subVectors(this.origin, e); const c = a * this.direction.dot(Ts.crossVectors(Tn, Ts)); if (c < 0) return null; const l = a * this.direction.dot(Dr.cross(Tn)); if (l < 0 || c + l > o) return null; const h = -a * Tn.dot(Nr); return h < 0 ? null : this.at(h / o, r) } applyMatrix4(e) { return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this } equals(e) { return e.origin.equals(this.origin) && e.direction.equals(this.direction) } clone() { return new this.constructor().copy(this) } } class We { constructor(e, t, n, i, r, o, a, c, l, h, u, d, m, g, _, f) { We.prototype.isMatrix4 = !0, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, i, r, o, a, c, l, h, u, d, m, g, _, f) } set(e, t, n, i, r, o, a, c, l, h, u, d, m, g, _, f) { const p = this.elements; return p[0] = e, p[4] = t, p[8] = n, p[12] = i, p[1] = r, p[5] = o, p[9] = a, p[13] = c, p[2] = l, p[6] = h, p[10] = u, p[14] = d, p[3] = m, p[7] = g, p[11] = _, p[15] = f, this } identity() { return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this } clone() { return new We().fromArray(this.elements) } copy(e) { const t = this.elements, n = e.elements; return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this } copyPosition(e) { const t = this.elements, n = e.elements; return t[12] = n[12], t[13] = n[13], t[14] = n[14], this } setFromMatrix3(e) { const t = e.elements; return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this } extractBasis(e, t, n) { return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this } makeBasis(e, t, n) { return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this } extractRotation(e) { const t = this.elements, n = e.elements, i = 1 / pi.setFromMatrixColumn(e, 0).length(), r = 1 / pi.setFromMatrixColumn(e, 1).length(), o = 1 / pi.setFromMatrixColumn(e, 2).length(); return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = 0, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this } makeRotationFromEuler(e) { const t = this.elements, n = e.x, i = e.y, r = e.z, o = Math.cos(n), a = Math.sin(n), c = Math.cos(i), l = Math.sin(i), h = Math.cos(r), u = Math.sin(r); if (e.order === "XYZ") { const d = o * h, m = o * u, g = a * h, _ = a * u; t[0] = c * h, t[4] = -c * u, t[8] = l, t[1] = m + g * l, t[5] = d - _ * l, t[9] = -a * c, t[2] = _ - d * l, t[6] = g + m * l, t[10] = o * c } else if (e.order === "YXZ") { const d = c * h, m = c * u, g = l * h, _ = l * u; t[0] = d + _ * a, t[4] = g * a - m, t[8] = o * l, t[1] = o * u, t[5] = o * h, t[9] = -a, t[2] = m * a - g, t[6] = _ + d * a, t[10] = o * c } else if (e.order === "ZXY") { const d = c * h, m = c * u, g = l * h, _ = l * u; t[0] = d - _ * a, t[4] = -o * u, t[8] = g + m * a, t[1] = m + g * a, t[5] = o * h, t[9] = _ - d * a, t[2] = -o * l, t[6] = a, t[10] = o * c } else if (e.order === "ZYX") { const d = o * h, m = o * u, g = a * h, _ = a * u; t[0] = c * h, t[4] = g * l - m, t[8] = d * l + _, t[1] = c * u, t[5] = _ * l + d, t[9] = m * l - g, t[2] = -l, t[6] = a * c, t[10] = o * c } else if (e.order === "YZX") { const d = o * c, m = o * l, g = a * c, _ = a * l; t[0] = c * h, t[4] = _ - d * u, t[8] = g * u + m, t[1] = u, t[5] = o * h, t[9] = -a * h, t[2] = -l * h, t[6] = m * u + g, t[10] = d - _ * u } else if (e.order === "XZY") { const d = o * c, m = o * l, g = a * c, _ = a * l; t[0] = c * h, t[4] = -u, t[8] = l * h, t[1] = d * u + _, t[5] = o * h, t[9] = m * u - g, t[2] = g * u - m, t[6] = a * h, t[10] = _ * u + d } return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this } makeRotationFromQuaternion(e) { return this.compose(Pu, e, Iu) } lookAt(e, t, n) { const i = this.elements; return Ot.subVectors(e, t), Ot.lengthSq() === 0 && (Ot.z = 1), Ot.normalize(), bn.crossVectors(n, Ot), bn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Ot.x += 1e-4 : Ot.z += 1e-4, Ot.normalize(), bn.crossVectors(n, Ot)), bn.normalize(), bs.crossVectors(Ot, bn), i[0] = bn.x, i[4] = bs.x, i[8] = Ot.x, i[1] = bn.y, i[5] = bs.y, i[9] = Ot.y, i[2] = bn.z, i[6] = bs.z, i[10] = Ot.z, this } multiply(e) { return this.multiplyMatrices(this, e) } premultiply(e) { return this.multiplyMatrices(e, this) } multiplyMatrices(e, t) { const n = e.elements, i = t.elements, r = this.elements, o = n[0], a = n[4], c = n[8], l = n[12], h = n[1], u = n[5], d = n[9], m = n[13], g = n[2], _ = n[6], f = n[10], p = n[14], T = n[3], x = n[7], M = n[11], I = n[15], L = i[0], A = i[4], z = i[8], Q = i[12], v = i[1], w = i[5], q = i[9], ee = i[13], D = i[2], G = i[6], O = i[10], j = i[14], X = i[3], Y = i[7], K = i[11], ne = i[15]; return r[0] = o * L + a * v + c * D + l * X, r[4] = o * A + a * w + c * G + l * Y, r[8] = o * z + a * q + c * O + l * K, r[12] = o * Q + a * ee + c * j + l * ne, r[1] = h * L + u * v + d * D + m * X, r[5] = h * A + u * w + d * G + m * Y, r[9] = h * z + u * q + d * O + m * K, r[13] = h * Q + u * ee + d * j + m * ne, r[2] = g * L + _ * v + f * D + p * X, r[6] = g * A + _ * w + f * G + p * Y, r[10] = g * z + _ * q + f * O + p * K, r[14] = g * Q + _ * ee + f * j + p * ne, r[3] = T * L + x * v + M * D + I * X, r[7] = T * A + x * w + M * G + I * Y, r[11] = T * z + x * q + M * O + I * K, r[15] = T * Q + x * ee + M * j + I * ne, this } multiplyScalar(e) { const t = this.elements; return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this } determinant() { const e = this.elements, t = e[0], n = e[4], i = e[8], r = e[12], o = e[1], a = e[5], c = e[9], l = e[13], h = e[2], u = e[6], d = e[10], m = e[14], g = e[3], _ = e[7], f = e[11], p = e[15]; return g * (+r * c * u - i * l * u - r * a * d + n * l * d + i * a * m - n * c * m) + _ * (+t * c * m - t * l * d + r * o * d - i * o * m + i * l * h - r * c * h) + f * (+t * l * u - t * a * m - r * o * u + n * o * m + r * a * h - n * l * h) + p * (-i * a * h - t * c * u + t * a * d + i * o * u - n * o * d + n * c * h) } transpose() { const e = this.elements; let t; return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this } setPosition(e, t, n) { const i = this.elements; return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this } invert() { const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], o = e[4], a = e[5], c = e[6], l = e[7], h = e[8], u = e[9], d = e[10], m = e[11], g = e[12], _ = e[13], f = e[14], p = e[15], T = u * f * l - _ * d * l + _ * c * m - a * f * m - u * c * p + a * d * p, x = g * d * l - h * f * l - g * c * m + o * f * m + h * c * p - o * d * p, M = h * _ * l - g * u * l + g * a * m - o * _ * m - h * a * p + o * u * p, I = g * u * c - h * _ * c - g * a * d + o * _ * d + h * a * f - o * u * f, L = t * T + n * x + i * M + r * I; if (L === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0); const A = 1 / L; return e[0] = T * A, e[1] = (_ * d * r - u * f * r - _ * i * m + n * f * m + u * i * p - n * d * p) * A, e[2] = (a * f * r - _ * c * r + _ * i * l - n * f * l - a * i * p + n * c * p) * A, e[3] = (u * c * r - a * d * r - u * i * l + n * d * l + a * i * m - n * c * m) * A, e[4] = x * A, e[5] = (h * f * r - g * d * r + g * i * m - t * f * m - h * i * p + t * d * p) * A, e[6] = (g * c * r - o * f * r - g * i * l + t * f * l + o * i * p - t * c * p) * A, e[7] = (o * d * r - h * c * r + h * i * l - t * d * l - o * i * m + t * c * m) * A, e[8] = M * A, e[9] = (g * u * r - h * _ * r - g * n * m + t * _ * m + h * n * p - t * u * p) * A, e[10] = (o * _ * r - g * a * r + g * n * l - t * _ * l - o * n * p + t * a * p) * A, e[11] = (h * a * r - o * u * r - h * n * l + t * u * l + o * n * m - t * a * m) * A, e[12] = I * A, e[13] = (h * _ * i - g * u * i + g * n * d - t * _ * d - h * n * f + t * u * f) * A, e[14] = (g * a * i - o * _ * i - g * n * c + t * _ * c + o * n * f - t * a * f) * A, e[15] = (o * u * i - h * a * i + h * n * c - t * u * c - o * n * d + t * a * d) * A, this } scale(e) { const t = this.elements, n = e.x, i = e.y, r = e.z; return t[0] *= n, t[4] *= i, t[8] *= r, t[1] *= n, t[5] *= i, t[9] *= r, t[2] *= n, t[6] *= i, t[10] *= r, t[3] *= n, t[7] *= i, t[11] *= r, this } getMaxScaleOnAxis() { const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10]; return Math.sqrt(Math.max(t, n, i)) } makeTranslation(e, t, n) { return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this } makeRotationX(e) { const t = Math.cos(e), n = Math.sin(e); return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this } makeRotationY(e) { const t = Math.cos(e), n = Math.sin(e); return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this } makeRotationZ(e) { const t = Math.cos(e), n = Math.sin(e); return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this } makeRotationAxis(e, t) { const n = Math.cos(t), i = Math.sin(t), r = 1 - n, o = e.x, a = e.y, c = e.z, l = r * o, h = r * a; return this.set(l * o + n, l * a - i * c, l * c + i * a, 0, l * a + i * c, h * a + n, h * c - i * o, 0, l * c - i * a, h * c + i * o, r * c * c + n, 0, 0, 0, 0, 1), this } makeScale(e, t, n) { return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this } makeShear(e, t, n, i, r, o) { return this.set(1, n, r, 0, e, 1, o, 0, t, i, 1, 0, 0, 0, 0, 1), this } compose(e, t, n) { const i = this.elements, r = t._x, o = t._y, a = t._z, c = t._w, l = r + r, h = o + o, u = a + a, d = r * l, m = r * h, g = r * u, _ = o * h, f = o * u, p = a * u, T = c * l, x = c * h, M = c * u, I = n.x, L = n.y, A = n.z; return i[0] = (1 - (_ + p)) * I, i[1] = (m + M) * I, i[2] = (g - x) * I, i[3] = 0, i[4] = (m - M) * L, i[5] = (1 - (d + p)) * L, i[6] = (f + T) * L, i[7] = 0, i[8] = (g + x) * A, i[9] = (f - T) * A, i[10] = (1 - (d + _)) * A, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this } decompose(e, t, n) { const i = this.elements; let r = pi.set(i[0], i[1], i[2]).length(); const o = pi.set(i[4], i[5], i[6]).length(), a = pi.set(i[8], i[9], i[10]).length(); this.determinant() < 0 && (r = -r), e.x = i[12], e.y = i[13], e.z = i[14], qt.copy(this); const l = 1 / r, h = 1 / o, u = 1 / a; return qt.elements[0] *= l, qt.elements[1] *= l, qt.elements[2] *= l, qt.elements[4] *= h, qt.elements[5] *= h, qt.elements[6] *= h, qt.elements[8] *= u, qt.elements[9] *= u, qt.elements[10] *= u, t.setFromRotationMatrix(qt), n.x = r, n.y = o, n.z = a, this } makePerspective(e, t, n, i, r, o, a = _n) { const c = this.elements, l = 2 * r / (t - e), h = 2 * r / (n - i), u = (t + e) / (t - e), d = (n + i) / (n - i); let m, g; if (a === _n) m = -(o + r) / (o - r), g = -2 * o * r / (o - r); else if (a === sr) m = -o / (o - r), g = -o * r / (o - r); else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a); return c[0] = l, c[4] = 0, c[8] = u, c[12] = 0, c[1] = 0, c[5] = h, c[9] = d, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = m, c[14] = g, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this } makeOrthographic(e, t, n, i, r, o, a = _n) { const c = this.elements, l = 1 / (t - e), h = 1 / (n - i), u = 1 / (o - r), d = (t + e) * l, m = (n + i) * h; let g, _; if (a === _n) g = (o + r) * u, _ = -2 * u; else if (a === sr) g = r * u, _ = -1 * u; else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a); return c[0] = 2 * l, c[4] = 0, c[8] = 0, c[12] = -d, c[1] = 0, c[5] = 2 * h, c[9] = 0, c[13] = -m, c[2] = 0, c[6] = 0, c[10] = _, c[14] = -g, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this } equals(e) { const t = this.elements, n = e.elements; for (let i = 0; i < 16; i++)if (t[i] !== n[i]) return !1; return !0 } fromArray(e, t = 0) { for (let n = 0; n < 16; n++)this.elements[n] = e[n + t]; return this } toArray(e = [], t = 0) { const n = this.elements; return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e } } const pi = new P, qt = new We, Pu = new P(0, 0, 0), Iu = new P(1, 1, 1), bn = new P, bs = new P, Ot = new P, qa = new We, Ya = new sn; class lr { constructor(e = 0, t = 0, n = 0, i = lr.DEFAULT_ORDER) { this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = i } get x() { return this._x } set x(e) { this._x = e, this._onChangeCallback() } get y() { return this._y } set y(e) { this._y = e, this._onChangeCallback() } get z() { return this._z } set z(e) { this._z = e, this._onChangeCallback() } get order() { return this._order } set order(e) { this._order = e, this._onChangeCallback() } set(e, t, n, i = this._order) { return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this } clone() { return new this.constructor(this._x, this._y, this._z, this._order) } copy(e) { return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this } setFromRotationMatrix(e, t = this._order, n = !0) { const i = e.elements, r = i[0], o = i[4], a = i[8], c = i[1], l = i[5], h = i[9], u = i[2], d = i[6], m = i[10]; switch (t) { case "XYZ": this._y = Math.asin(dt(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(-h, m), this._z = Math.atan2(-o, r)) : (this._x = Math.atan2(d, l), this._z = 0); break; case "YXZ": this._x = Math.asin(-dt(h, -1, 1)), Math.abs(h) < .9999999 ? (this._y = Math.atan2(a, m), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-u, r), this._z = 0); break; case "ZXY": this._x = Math.asin(dt(d, -1, 1)), Math.abs(d) < .9999999 ? (this._y = Math.atan2(-u, m), this._z = Math.atan2(-o, l)) : (this._y = 0, this._z = Math.atan2(c, r)); break; case "ZYX": this._y = Math.asin(-dt(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(d, m), this._z = Math.atan2(c, r)) : (this._x = 0, this._z = Math.atan2(-o, l)); break; case "YZX": this._z = Math.asin(dt(c, -1, 1)), Math.abs(c) < .9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-u, r)) : (this._x = 0, this._y = Math.atan2(a, m)); break; case "XZY": this._z = Math.asin(-dt(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(d, l), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-h, m), this._y = 0); break; default: console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t) }return this._order = t, n === !0 && this._onChangeCallback(), this } setFromQuaternion(e, t, n) { return qa.makeRotationFromQuaternion(e), this.setFromRotationMatrix(qa, t, n) } setFromVector3(e, t = this._order) { return this.set(e.x, e.y, e.z, t) } reorder(e) { return Ya.setFromEuler(this), this.setFromQuaternion(Ya, e) } equals(e) { return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order } fromArray(e) { return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this } toArray(e = [], t = 0) { return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e } _onChange(e) { return this._onChangeCallback = e, this } _onChangeCallback() { } *[Symbol.iterator]() { yield this._x, yield this._y, yield this._z, yield this._order } } lr.DEFAULT_ORDER = "XYZ"; class El { constructor() { this.mask = 1 } set(e) { this.mask = (1 << e | 0) >>> 0 } enable(e) { this.mask |= 1 << e | 0 } enableAll() { this.mask = -1 } toggle(e) { this.mask ^= 1 << e | 0 } disable(e) { this.mask &= ~(1 << e | 0) } disableAll() { this.mask = 0 } test(e) { return (this.mask & e.mask) !== 0 } isEnabled(e) { return (this.mask & (1 << e | 0)) !== 0 } } let Du = 0; const ja = new P, mi = new sn, un = new We, As = new P, Ki = new P, Nu = new P, Uu = new sn, Ka = new P(1, 0, 0), Za = new P(0, 1, 0), Ja = new P(0, 0, 1), Ou = { type: "added" }, Fu = { type: "removed" }; class ot extends si { constructor() { super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Du++ }), this.uuid = Wt(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ot.DEFAULT_UP.clone(); const e = new P, t = new lr, n = new sn, i = new P(1, 1, 1); function r() { n.setFromEuler(t, !1) } function o() { t.setFromQuaternion(n, void 0, !1) } t._onChange(r), n._onChange(o), Object.defineProperties(this, { position: { configurable: !0, enumerable: !0, value: e }, rotation: { configurable: !0, enumerable: !0, value: t }, quaternion: { configurable: !0, enumerable: !0, value: n }, scale: { configurable: !0, enumerable: !0, value: i }, modelViewMatrix: { value: new We }, normalMatrix: { value: new qe } }), this.matrix = new We, this.matrixWorld = new We, this.matrixAutoUpdate = ot.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new El, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {} } onBeforeShadow() { } onAfterShadow() { } onBeforeRender() { } onAfterRender() { } applyMatrix4(e) { this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale) } applyQuaternion(e) { return this.quaternion.premultiply(e), this } setRotationFromAxisAngle(e, t) { this.quaternion.setFromAxisAngle(e, t) } setRotationFromEuler(e) { this.quaternion.setFromEuler(e, !0) } setRotationFromMatrix(e) { this.quaternion.setFromRotationMatrix(e) } setRotationFromQuaternion(e) { this.quaternion.copy(e) } rotateOnAxis(e, t) { return mi.setFromAxisAngle(e, t), this.quaternion.multiply(mi), this } rotateOnWorldAxis(e, t) { return mi.setFromAxisAngle(e, t), this.quaternion.premultiply(mi), this } rotateX(e) { return this.rotateOnAxis(Ka, e) } rotateY(e) { return this.rotateOnAxis(Za, e) } rotateZ(e) { return this.rotateOnAxis(Ja, e) } translateOnAxis(e, t) { return ja.copy(e).applyQuaternion(this.quaternion), this.position.add(ja.multiplyScalar(t)), this } translateX(e) { return this.translateOnAxis(Ka, e) } translateY(e) { return this.translateOnAxis(Za, e) } translateZ(e) { return this.translateOnAxis(Ja, e) } localToWorld(e) { return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld) } worldToLocal(e) { return this.updateWorldMatrix(!0, !1), e.applyMatrix4(un.copy(this.matrixWorld).invert()) } lookAt(e, t, n) { e.isVector3 ? As.copy(e) : As.set(e, t, n); const i = this.parent; this.updateWorldMatrix(!0, !1), Ki.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? un.lookAt(Ki, As, this.up) : un.lookAt(As, Ki, this.up), this.quaternion.setFromRotationMatrix(un), i && (un.extractRotation(i.matrixWorld), mi.setFromRotationMatrix(un), this.quaternion.premultiply(mi.invert())) } add(e) { if (arguments.length > 1) { for (let t = 0; t < arguments.length; t++)this.add(arguments[t]); return this } return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(Ou)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this) } remove(e) { if (arguments.length > 1) { for (let n = 0; n < arguments.length; n++)this.remove(arguments[n]); return this } const t = this.children.indexOf(e); return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Fu)), this } removeFromParent() { const e = this.parent; return e !== null && e.remove(this), this } clear() { return this.remove(...this.children) } attach(e) { return this.updateWorldMatrix(!0, !1), un.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), un.multiply(e.parent.matrixWorld)), e.applyMatrix4(un), this.add(e), e.updateWorldMatrix(!1, !0), this } getObjectById(e) { return this.getObjectByProperty("id", e) } getObjectByName(e) { return this.getObjectByProperty("name", e) } getObjectByProperty(e, t) { if (this[e] === t) return this; for (let n = 0, i = this.children.length; n < i; n++) { const o = this.children[n].getObjectByProperty(e, t); if (o !== void 0) return o } } getObjectsByProperty(e, t, n = []) { this[e] === t && n.push(this); const i = this.children; for (let r = 0, o = i.length; r < o; r++)i[r].getObjectsByProperty(e, t, n); return n } getWorldPosition(e) { return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld) } getWorldQuaternion(e) { return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ki, e, Nu), e } getWorldScale(e) { return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ki, Uu, e), e } getWorldDirection(e) { this.updateWorldMatrix(!0, !1); const t = this.matrixWorld.elements; return e.set(t[8], t[9], t[10]).normalize() } raycast() { } traverse(e) { e(this); const t = this.children; for (let n = 0, i = t.length; n < i; n++)t[n].traverse(e) } traverseVisible(e) { if (this.visible === !1) return; e(this); const t = this.children; for (let n = 0, i = t.length; n < i; n++)t[n].traverseVisible(e) } traverseAncestors(e) { const t = this.parent; t !== null && (e(t), t.traverseAncestors(e)) } updateMatrix() { this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0 } updateMatrixWorld(e) { this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0); const t = this.children; for (let n = 0, i = t.length; n < i; n++) { const r = t[n]; (r.matrixWorldAutoUpdate === !0 || e === !0) && r.updateMatrixWorld(e) } } updateWorldMatrix(e, t) { const n = this.parent; if (e === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) { const i = this.children; for (let r = 0, o = i.length; r < o; r++) { const a = i[r]; a.matrixWorldAutoUpdate === !0 && a.updateWorldMatrix(!1, !0) } } } toJSON(e) { const t = e === void 0 || typeof e == "string", n = {}; t && (e = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, n.metadata = { version: 4.6, type: "Object", generator: "Object3D.toJSON" }); const i = {}; i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.visibility = this._visibility, i.active = this._active, i.bounds = this._bounds.map(a => ({ boxInitialized: a.boxInitialized, boxMin: a.box.min.toArray(), boxMax: a.box.max.toArray(), sphereInitialized: a.sphereInitialized, sphereRadius: a.sphere.radius, sphereCenter: a.sphere.center.toArray() })), i.maxGeometryCount = this._maxGeometryCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.geometryCount = this._geometryCount, i.matricesTexture = this._matricesTexture.toJSON(e), this.boundingSphere !== null && (i.boundingSphere = { center: i.boundingSphere.center.toArray(), radius: i.boundingSphere.radius }), this.boundingBox !== null && (i.boundingBox = { min: i.boundingBox.min.toArray(), max: i.boundingBox.max.toArray() })); function r(a, c) { return a[c.uuid] === void 0 && (a[c.uuid] = c.toJSON(e)), c.uuid } if (this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid); else if (this.isMesh || this.isLine || this.isPoints) { i.geometry = r(e.geometries, this.geometry); const a = this.geometry.parameters; if (a !== void 0 && a.shapes !== void 0) { const c = a.shapes; if (Array.isArray(c)) for (let l = 0, h = c.length; l < h; l++) { const u = c[l]; r(e.shapes, u) } else r(e.shapes, c) } } if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) { const a = []; for (let c = 0, l = this.material.length; c < l; c++)a.push(r(e.materials, this.material[c])); i.material = a } else i.material = r(e.materials, this.material); if (this.children.length > 0) { i.children = []; for (let a = 0; a < this.children.length; a++)i.children.push(this.children[a].toJSON(e).object) } if (this.animations.length > 0) { i.animations = []; for (let a = 0; a < this.animations.length; a++) { const c = this.animations[a]; i.animations.push(r(e.animations, c)) } } if (t) { const a = o(e.geometries), c = o(e.materials), l = o(e.textures), h = o(e.images), u = o(e.shapes), d = o(e.skeletons), m = o(e.animations), g = o(e.nodes); a.length > 0 && (n.geometries = a), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), d.length > 0 && (n.skeletons = d), m.length > 0 && (n.animations = m), g.length > 0 && (n.nodes = g) } return n.object = i, n; function o(a) { const c = []; for (const l in a) { const h = a[l]; delete h.metadata, c.push(h) } return c } } clone(e) { return new this.constructor().copy(this, e) } copy(e, t = !0) { if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0) for (let n = 0; n < e.children.length; n++) { const i = e.children[n]; this.add(i.clone()) } return this } } ot.DEFAULT_UP = new P(0, 1, 0); ot.DEFAULT_MATRIX_AUTO_UPDATE = !0; ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0; const Yt = new P, dn = new P, Ur = new P, fn = new P, gi = new P, _i = new P, $a = new P, Or = new P, Fr = new P, Br = new P; class nn { constructor(e = new P, t = new P, n = new P) { this.a = e, this.b = t, this.c = n } static getNormal(e, t, n, i) { i.subVectors(n, t), Yt.subVectors(e, t), i.cross(Yt); const r = i.lengthSq(); return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0) } static getBarycoord(e, t, n, i, r) { Yt.subVectors(i, t), dn.subVectors(n, t), Ur.subVectors(e, t); const o = Yt.dot(Yt), a = Yt.dot(dn), c = Yt.dot(Ur), l = dn.dot(dn), h = dn.dot(Ur), u = o * l - a * a; if (u === 0) return r.set(0, 0, 0), null; const d = 1 / u, m = (l * c - a * h) * d, g = (o * h - a * c) * d; return r.set(1 - m - g, g, m) } static containsPoint(e, t, n, i) { return this.getBarycoord(e, t, n, i, fn) === null ? !1 : fn.x >= 0 && fn.y >= 0 && fn.x + fn.y <= 1 } static getInterpolation(e, t, n, i, r, o, a, c) { return this.getBarycoord(e, t, n, i, fn) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(r, fn.x), c.addScaledVector(o, fn.y), c.addScaledVector(a, fn.z), c) } static isFrontFacing(e, t, n, i) { return Yt.subVectors(n, t), dn.subVectors(e, t), Yt.cross(dn).dot(i) < 0 } set(e, t, n) { return this.a.copy(e), this.b.copy(t), this.c.copy(n), this } setFromPointsAndIndices(e, t, n, i) { return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this } setFromAttributeAndIndices(e, t, n, i) { return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this } clone() { return new this.constructor().copy(this) } copy(e) { return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this } getArea() { return Yt.subVectors(this.c, this.b), dn.subVectors(this.a, this.b), Yt.cross(dn).length() * .5 } getMidpoint(e) { return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3) } getNormal(e) { return nn.getNormal(this.a, this.b, this.c, e) } getPlane(e) { return e.setFromCoplanarPoints(this.a, this.b, this.c) } getBarycoord(e, t) { return nn.getBarycoord(e, this.a, this.b, this.c, t) } getInterpolation(e, t, n, i, r) { return nn.getInterpolation(e, this.a, this.b, this.c, t, n, i, r) } containsPoint(e) { return nn.containsPoint(e, this.a, this.b, this.c) } isFrontFacing(e) { return nn.isFrontFacing(this.a, this.b, this.c, e) } intersectsBox(e) { return e.intersectsTriangle(this) } closestPointToPoint(e, t) { const n = this.a, i = this.b, r = this.c; let o, a; gi.subVectors(i, n), _i.subVectors(r, n), Or.subVectors(e, n); const c = gi.dot(Or), l = _i.dot(Or); if (c <= 0 && l <= 0) return t.copy(n); Fr.subVectors(e, i); const h = gi.dot(Fr), u = _i.dot(Fr); if (h >= 0 && u <= h) return t.copy(i); const d = c * u - h * l; if (d <= 0 && c >= 0 && h <= 0) return o = c / (c - h), t.copy(n).addScaledVector(gi, o); Br.subVectors(e, r); const m = gi.dot(Br), g = _i.dot(Br); if (g >= 0 && m <= g) return t.copy(r); const _ = m * l - c * g; if (_ <= 0 && l >= 0 && g <= 0) return a = l / (l - g), t.copy(n).addScaledVector(_i, a); const f = h * g - m * u; if (f <= 0 && u - h >= 0 && m - g >= 0) return $a.subVectors(r, i), a = (u - h) / (u - h + (m - g)), t.copy(i).addScaledVector($a, a); const p = 1 / (f + _ + d); return o = _ * p, a = d * p, t.copy(n).addScaledVector(gi, o).addScaledVector(_i, a) } equals(e) { return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c) } } const Tl = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, An = { h: 0, s: 0, l: 0 }, ws = { h: 0, s: 0, l: 0 }; function zr(s, e, t) { return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? s + (e - s) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? s + (e - s) * 6 * (2 / 3 - t) : s } class De { constructor(e, t, n) { return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n) } set(e, t, n) { if (t === void 0 && n === void 0) { const i = e; i && i.isColor ? this.copy(i) : typeof i == "number" ? this.setHex(i) : typeof i == "string" && this.setStyle(i) } else this.setRGB(e, t, n); return this } setScalar(e) { return this.r = e, this.g = e, this.b = e, this } setHex(e, t = ct) { return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, $e.toWorkingColorSpace(this, t), this } setRGB(e, t, n, i = $e.workingColorSpace) { return this.r = e, this.g = t, this.b = n, $e.toWorkingColorSpace(this, i), this } setHSL(e, t, n, i = $e.workingColorSpace) { if (e = Io(e, 1), t = dt(t, 0, 1), n = dt(n, 0, 1), t === 0) this.r = this.g = this.b = n; else { const r = n <= .5 ? n * (1 + t) : n + t - n * t, o = 2 * n - r; this.r = zr(o, r, e + 1 / 3), this.g = zr(o, r, e), this.b = zr(o, r, e - 1 / 3) } return $e.toWorkingColorSpace(this, i), this } setStyle(e, t = ct) { function n(r) { r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.") } let i; if (i = /^(\w+)\(([^\)]*)\)/.exec(e)) { let r; const o = i[1], a = i[2]; switch (o) { case "rgb": case "rgba": if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(r[4]), this.setRGB(Math.min(255, parseInt(r[1], 10)) / 255, Math.min(255, parseInt(r[2], 10)) / 255, Math.min(255, parseInt(r[3], 10)) / 255, t); if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(r[4]), this.setRGB(Math.min(100, parseInt(r[1], 10)) / 100, Math.min(100, parseInt(r[2], 10)) / 100, Math.min(100, parseInt(r[3], 10)) / 100, t); break; case "hsl": case "hsla": if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(r[4]), this.setHSL(parseFloat(r[1]) / 360, parseFloat(r[2]) / 100, parseFloat(r[3]) / 100, t); break; default: console.warn("THREE.Color: Unknown color model " + e) } } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) { const r = i[1], o = r.length; if (o === 3) return this.setRGB(parseInt(r.charAt(0), 16) / 15, parseInt(r.charAt(1), 16) / 15, parseInt(r.charAt(2), 16) / 15, t); if (o === 6) return this.setHex(parseInt(r, 16), t); console.warn("THREE.Color: Invalid hex color " + e) } else if (e && e.length > 0) return this.setColorName(e, t); return this } setColorName(e, t = ct) { const n = Tl[e.toLowerCase()]; return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this } clone() { return new this.constructor(this.r, this.g, this.b) } copy(e) { return this.r = e.r, this.g = e.g, this.b = e.b, this } copySRGBToLinear(e) { return this.r = Pi(e.r), this.g = Pi(e.g), this.b = Pi(e.b), this } copyLinearToSRGB(e) { return this.r = wr(e.r), this.g = wr(e.g), this.b = wr(e.b), this } convertSRGBToLinear() { return this.copySRGBToLinear(this), this } convertLinearToSRGB() { return this.copyLinearToSRGB(this), this } getHex(e = ct) { return $e.fromWorkingColorSpace(bt.copy(this), e), Math.round(dt(bt.r * 255, 0, 255)) * 65536 + Math.round(dt(bt.g * 255, 0, 255)) * 256 + Math.round(dt(bt.b * 255, 0, 255)) } getHexString(e = ct) { return ("000000" + this.getHex(e).toString(16)).slice(-6) } getHSL(e, t = $e.workingColorSpace) { $e.fromWorkingColorSpace(bt.copy(this), t); const n = bt.r, i = bt.g, r = bt.b, o = Math.max(n, i, r), a = Math.min(n, i, r); let c, l; const h = (a + o) / 2; if (a === o) c = 0, l = 0; else { const u = o - a; switch (l = h <= .5 ? u / (o + a) : u / (2 - o - a), o) { case n: c = (i - r) / u + (i < r ? 6 : 0); break; case i: c = (r - n) / u + 2; break; case r: c = (n - i) / u + 4; break }c /= 6 } return e.h = c, e.s = l, e.l = h, e } getRGB(e, t = $e.workingColorSpace) { return $e.fromWorkingColorSpace(bt.copy(this), t), e.r = bt.r, e.g = bt.g, e.b = bt.b, e } getStyle(e = ct) { $e.fromWorkingColorSpace(bt.copy(this), e); const t = bt.r, n = bt.g, i = bt.b; return e !== ct ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})` } offsetHSL(e, t, n) { return this.getHSL(An), this.setHSL(An.h + e, An.s + t, An.l + n) } add(e) { return this.r += e.r, this.g += e.g, this.b += e.b, this } addColors(e, t) { return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this } addScalar(e) { return this.r += e, this.g += e, this.b += e, this } sub(e) { return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this } multiply(e) { return this.r *= e.r, this.g *= e.g, this.b *= e.b, this } multiplyScalar(e) { return this.r *= e, this.g *= e, this.b *= e, this } lerp(e, t) { return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this } lerpColors(e, t, n) { return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this } lerpHSL(e, t) { this.getHSL(An), e.getHSL(ws); const n = ns(An.h, ws.h, t), i = ns(An.s, ws.s, t), r = ns(An.l, ws.l, t); return this.setHSL(n, i, r), this } setFromVector3(e) { return this.r = e.x, this.g = e.y, this.b = e.z, this } applyMatrix3(e) { const t = this.r, n = this.g, i = this.b, r = e.elements; return this.r = r[0] * t + r[3] * n + r[6] * i, this.g = r[1] * t + r[4] * n + r[7] * i, this.b = r[2] * t + r[5] * n + r[8] * i, this } equals(e) { return e.r === this.r && e.g === this.g && e.b === this.b } fromArray(e, t = 0) { return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this } toArray(e = [], t = 0) { return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e } fromBufferAttribute(e, t) { return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this } toJSON() { return this.getHex() } *[Symbol.iterator]() { yield this.r, yield this.g, yield this.b } } const bt = new De; De.NAMES = Tl; let Bu = 0; class Zt extends si { constructor() { super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Bu++ }), this.uuid = Wt(), this.name = "", this.type = "Material", this.blending = Li, this.side = vn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = co, this.blendDst = lo, this.blendEquation = Yn, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new De(0, 0, 0), this.blendAlpha = 0, this.depthFunc = Qs, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = za, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = li, this.stencilZFail = li, this.stencilZPass = li, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0 } get alphaTest() { return this._alphaTest } set alphaTest(e) { this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e } onBuild() { } onBeforeRender() { } onBeforeCompile() { } customProgramCacheKey() { return this.onBeforeCompile.toString() } setValues(e) { if (e !== void 0) for (const t in e) { const n = e[t]; if (n === void 0) { console.warn(`THREE.Material: parameter '${t}' has value of undefined.`); continue } const i = this[t]; if (i === void 0) { console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`); continue } i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n } } toJSON(e) { const t = e === void 0 || typeof e == "string"; t && (e = { textures: {}, images: {} }); const n = { metadata: { version: 4.6, type: "Material", generator: "Material.toJSON" } }; n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Li && (n.blending = this.blending), this.side !== vn && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== co && (n.blendSrc = this.blendSrc), this.blendDst !== lo && (n.blendDst = this.blendDst), this.blendEquation !== Yn && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== Qs && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== za && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== li && (n.stencilFail = this.stencilFail), this.stencilZFail !== li && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== li && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData); function i(r) { const o = []; for (const a in r) { const c = r[a]; delete c.metadata, o.push(c) } return o } if (t) { const r = i(e.textures), o = i(e.images); r.length > 0 && (n.textures = r), o.length > 0 && (n.images = o) } return n } clone() { return new this.constructor().copy(this) } copy(e) { this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite; const t = e.clippingPlanes; let n = null; if (t !== null) { const i = t.length; n = new Array(i); for (let r = 0; r !== i; ++r)n[r] = t[r].clone() } return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this } dispose() { this.dispatchEvent({ type: "dispose" }) } set needsUpdate(e) { e === !0 && this.version++ } } class xn extends Zt { constructor(e) { super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new De(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Ro, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e) } copy(e) { return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this } } const ut = new P, Rs = new ae; class It { constructor(e, t, n = !1) { if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array."); this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = mo, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.gpuType = tn, this.version = 0 } onUploadCallback() { } set needsUpdate(e) { e === !0 && this.version++ } get updateRange() { return ei("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange } setUsage(e) { return this.usage = e, this } addUpdateRange(e, t) { this.updateRanges.push({ start: e, count: t }) } clearUpdateRanges() { this.updateRanges.length = 0 } copy(e) { return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this } copyAt(e, t, n) { e *= this.itemSize, n *= t.itemSize; for (let i = 0, r = this.itemSize; i < r; i++)this.array[e + i] = t.array[n + i]; return this } copyArray(e) { return this.array.set(e), this } applyMatrix3(e) { if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++)Rs.fromBufferAttribute(this, t), Rs.applyMatrix3(e), this.setXY(t, Rs.x, Rs.y); else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++)ut.fromBufferAttribute(this, t), ut.applyMatrix3(e), this.setXYZ(t, ut.x, ut.y, ut.z); return this } applyMatrix4(e) { for (let t = 0, n = this.count; t < n; t++)ut.fromBufferAttribute(this, t), ut.applyMatrix4(e), this.setXYZ(t, ut.x, ut.y, ut.z); return this } applyNormalMatrix(e) { for (let t = 0, n = this.count; t < n; t++)ut.fromBufferAttribute(this, t), ut.applyNormalMatrix(e), this.setXYZ(t, ut.x, ut.y, ut.z); return this } transformDirection(e) { for (let t = 0, n = this.count; t < n; t++)ut.fromBufferAttribute(this, t), ut.transformDirection(e), this.setXYZ(t, ut.x, ut.y, ut.z); return this } set(e, t = 0) { return this.array.set(e, t), this } getComponent(e, t) { let n = this.array[e * this.itemSize + t]; return this.normalized && (n = jt(n, this.array)), n } setComponent(e, t, n) { return this.normalized && (n = Qe(n, this.array)), this.array[e * this.itemSize + t] = n, this } getX(e) { let t = this.array[e * this.itemSize]; return this.normalized && (t = jt(t, this.array)), t } setX(e, t) { return this.normalized && (t = Qe(t, this.array)), this.array[e * this.itemSize] = t, this } getY(e) { let t = this.array[e * this.itemSize + 1]; return this.normalized && (t = jt(t, this.array)), t } setY(e, t) { return this.normalized && (t = Qe(t, this.array)), this.array[e * this.itemSize + 1] = t, this } getZ(e) { let t = this.array[e * this.itemSize + 2]; return this.normalized && (t = jt(t, this.array)), t } setZ(e, t) { return this.normalized && (t = Qe(t, this.array)), this.array[e * this.itemSize + 2] = t, this } getW(e) { let t = this.array[e * this.itemSize + 3]; return this.normalized && (t = jt(t, this.array)), t } setW(e, t) { return this.normalized && (t = Qe(t, this.array)), this.array[e * this.itemSize + 3] = t, this } setXY(e, t, n) { return e *= this.itemSize, this.normalized && (t = Qe(t, this.array), n = Qe(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this } setXYZ(e, t, n, i) { return e *= this.itemSize, this.normalized && (t = Qe(t, this.array), n = Qe(n, this.array), i = Qe(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this } setXYZW(e, t, n, i, r) { return e *= this.itemSize, this.normalized && (t = Qe(t, this.array), n = Qe(n, this.array), i = Qe(i, this.array), r = Qe(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = r, this } onUpload(e) { return this.onUploadCallback = e, this } clone() { return new this.constructor(this.array, this.itemSize).copy(this) } toJSON() { const e = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized }; return this.name !== "" && (e.name = this.name), this.usage !== mo && (e.usage = this.usage), e } } class bl extends It { constructor(e, t, n) { super(new Uint16Array(e), t, n) } } class Al extends It { constructor(e, t, n) { super(new Uint32Array(e), t, n) } } class Jt extends It { constructor(e, t, n) { super(new Float32Array(e), t, n) } } let zu = 0; const zt = new We, Hr = new ot, xi = new P, Ft = new yn, Zi = new yn, gt = new P; class $t extends si { constructor() { super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: zu++ }), this.uuid = Wt(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {} } getIndex() { return this.index } setIndex(e) { return Array.isArray(e) ? this.index = new (vl(e) ? Al : bl)(e, 1) : this.index = e, this } getAttribute(e) { return this.attributes[e] } setAttribute(e, t) { return this.attributes[e] = t, this } deleteAttribute(e) { return delete this.attributes[e], this } hasAttribute(e) { return this.attributes[e] !== void 0 } addGroup(e, t, n = 0) { this.groups.push({ start: e, count: t, materialIndex: n }) } clearGroups() { this.groups = [] } setDrawRange(e, t) { this.drawRange.start = e, this.drawRange.count = t } applyMatrix4(e) { const t = this.attributes.position; t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0); const n = this.attributes.normal; if (n !== void 0) { const r = new qe().getNormalMatrix(e); n.applyNormalMatrix(r), n.needsUpdate = !0 } const i = this.attributes.tangent; return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this } applyQuaternion(e) { return zt.makeRotationFromQuaternion(e), this.applyMatrix4(zt), this } rotateX(e) { return zt.makeRotationX(e), this.applyMatrix4(zt), this } rotateY(e) { return zt.makeRotationY(e), this.applyMatrix4(zt), this } rotateZ(e) { return zt.makeRotationZ(e), this.applyMatrix4(zt), this } translate(e, t, n) { return zt.makeTranslation(e, t, n), this.applyMatrix4(zt), this } scale(e, t, n) { return zt.makeScale(e, t, n), this.applyMatrix4(zt), this } lookAt(e) { return Hr.lookAt(e), Hr.updateMatrix(), this.applyMatrix4(Hr.matrix), this } center() { return this.computeBoundingBox(), this.boundingBox.getCenter(xi).negate(), this.translate(xi.x, xi.y, xi.z), this } setFromPoints(e) { const t = []; for (let n = 0, i = e.length; n < i; n++) { const r = e[n]; t.push(r.x, r.y, r.z || 0) } return this.setAttribute("position", new Jt(t, 3)), this } computeBoundingBox() { this.boundingBox === null && (this.boundingBox = new yn); const e = this.attributes.position, t = this.morphAttributes.position; if (e && e.isGLBufferAttribute) { console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(new P(-1 / 0, -1 / 0, -1 / 0), new P(1 / 0, 1 / 0, 1 / 0)); return } if (e !== void 0) { if (this.boundingBox.setFromBufferAttribute(e), t) for (let n = 0, i = t.length; n < i; n++) { const r = t[n]; Ft.setFromBufferAttribute(r), this.morphTargetsRelative ? (gt.addVectors(this.boundingBox.min, Ft.min), this.boundingBox.expandByPoint(gt), gt.addVectors(this.boundingBox.max, Ft.max), this.boundingBox.expandByPoint(gt)) : (this.boundingBox.expandByPoint(Ft.min), this.boundingBox.expandByPoint(Ft.max)) } } else this.boundingBox.makeEmpty(); (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this) } computeBoundingSphere() { this.boundingSphere === null && (this.boundingSphere = new rn); const e = this.attributes.position, t = this.morphAttributes.position; if (e && e.isGLBufferAttribute) { console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new P, 1 / 0); return } if (e) { const n = this.boundingSphere.center; if (Ft.setFromBufferAttribute(e), t) for (let r = 0, o = t.length; r < o; r++) { const a = t[r]; Zi.setFromBufferAttribute(a), this.morphTargetsRelative ? (gt.addVectors(Ft.min, Zi.min), Ft.expandByPoint(gt), gt.addVectors(Ft.max, Zi.max), Ft.expandByPoint(gt)) : (Ft.expandByPoint(Zi.min), Ft.expandByPoint(Zi.max)) } Ft.getCenter(n); let i = 0; for (let r = 0, o = e.count; r < o; r++)gt.fromBufferAttribute(e, r), i = Math.max(i, n.distanceToSquared(gt)); if (t) for (let r = 0, o = t.length; r < o; r++) { const a = t[r], c = this.morphTargetsRelative; for (let l = 0, h = a.count; l < h; l++)gt.fromBufferAttribute(a, l), c && (xi.fromBufferAttribute(e, l), gt.add(xi)), i = Math.max(i, n.distanceToSquared(gt)) } this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this) } } computeTangents() { const e = this.index, t = this.attributes; if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) { console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"); return } const n = e.array, i = t.position.array, r = t.normal.array, o = t.uv.array, a = i.length / 3; this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new It(new Float32Array(4 * a), 4)); const c = this.getAttribute("tangent").array, l = [], h = []; for (let v = 0; v < a; v++)l[v] = new P, h[v] = new P; const u = new P, d = new P, m = new P, g = new ae, _ = new ae, f = new ae, p = new P, T = new P; function x(v, w, q) { u.fromArray(i, v * 3), d.fromArray(i, w * 3), m.fromArray(i, q * 3), g.fromArray(o, v * 2), _.fromArray(o, w * 2), f.fromArray(o, q * 2), d.sub(u), m.sub(u), _.sub(g), f.sub(g); const ee = 1 / (_.x * f.y - f.x * _.y); isFinite(ee) && (p.copy(d).multiplyScalar(f.y).addScaledVector(m, -_.y).multiplyScalar(ee), T.copy(m).multiplyScalar(_.x).addScaledVector(d, -f.x).multiplyScalar(ee), l[v].add(p), l[w].add(p), l[q].add(p), h[v].add(T), h[w].add(T), h[q].add(T)) } let M = this.groups; M.length === 0 && (M = [{ start: 0, count: n.length }]); for (let v = 0, w = M.length; v < w; ++v) { const q = M[v], ee = q.start, D = q.count; for (let G = ee, O = ee + D; G < O; G += 3)x(n[G + 0], n[G + 1], n[G + 2]) } const I = new P, L = new P, A = new P, z = new P; function Q(v) { A.fromArray(r, v * 3), z.copy(A); const w = l[v]; I.copy(w), I.sub(A.multiplyScalar(A.dot(w))).normalize(), L.crossVectors(z, w); const ee = L.dot(h[v]) < 0 ? -1 : 1; c[v * 4] = I.x, c[v * 4 + 1] = I.y, c[v * 4 + 2] = I.z, c[v * 4 + 3] = ee } for (let v = 0, w = M.length; v < w; ++v) { const q = M[v], ee = q.start, D = q.count; for (let G = ee, O = ee + D; G < O; G += 3)Q(n[G + 0]), Q(n[G + 1]), Q(n[G + 2]) } } computeVertexNormals() { const e = this.index, t = this.getAttribute("position"); if (t !== void 0) { let n = this.getAttribute("normal"); if (n === void 0) n = new It(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n); else for (let d = 0, m = n.count; d < m; d++)n.setXYZ(d, 0, 0, 0); const i = new P, r = new P, o = new P, a = new P, c = new P, l = new P, h = new P, u = new P; if (e) for (let d = 0, m = e.count; d < m; d += 3) { const g = e.getX(d + 0), _ = e.getX(d + 1), f = e.getX(d + 2); i.fromBufferAttribute(t, g), r.fromBufferAttribute(t, _), o.fromBufferAttribute(t, f), h.subVectors(o, r), u.subVectors(i, r), h.cross(u), a.fromBufferAttribute(n, g), c.fromBufferAttribute(n, _), l.fromBufferAttribute(n, f), a.add(h), c.add(h), l.add(h), n.setXYZ(g, a.x, a.y, a.z), n.setXYZ(_, c.x, c.y, c.z), n.setXYZ(f, l.x, l.y, l.z) } else for (let d = 0, m = t.count; d < m; d += 3)i.fromBufferAttribute(t, d + 0), r.fromBufferAttribute(t, d + 1), o.fromBufferAttribute(t, d + 2), h.subVectors(o, r), u.subVectors(i, r), h.cross(u), n.setXYZ(d + 0, h.x, h.y, h.z), n.setXYZ(d + 1, h.x, h.y, h.z), n.setXYZ(d + 2, h.x, h.y, h.z); this.normalizeNormals(), n.needsUpdate = !0 } } normalizeNormals() { const e = this.attributes.normal; for (let t = 0, n = e.count; t < n; t++)gt.fromBufferAttribute(e, t), gt.normalize(), e.setXYZ(t, gt.x, gt.y, gt.z) } toNonIndexed() { function e(a, c) { const l = a.array, h = a.itemSize, u = a.normalized, d = new l.constructor(c.length * h); let m = 0, g = 0; for (let _ = 0, f = c.length; _ < f; _++) { a.isInterleavedBufferAttribute ? m = c[_] * a.data.stride + a.offset : m = c[_] * h; for (let p = 0; p < h; p++)d[g++] = l[m++] } return new It(d, h, u) } if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this; const t = new $t, n = this.index.array, i = this.attributes; for (const a in i) { const c = i[a], l = e(c, n); t.setAttribute(a, l) } const r = this.morphAttributes; for (const a in r) { const c = [], l = r[a]; for (let h = 0, u = l.length; h < u; h++) { const d = l[h], m = e(d, n); c.push(m) } t.morphAttributes[a] = c } t.morphTargetsRelative = this.morphTargetsRelative; const o = this.groups; for (let a = 0, c = o.length; a < c; a++) { const l = o[a]; t.addGroup(l.start, l.count, l.materialIndex) } return t } toJSON() { const e = { metadata: { version: 4.6, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } }; if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) { const c = this.parameters; for (const l in c) c[l] !== void 0 && (e[l] = c[l]); return e } e.data = { attributes: {} }; const t = this.index; t !== null && (e.data.index = { type: t.array.constructor.name, array: Array.prototype.slice.call(t.array) }); const n = this.attributes; for (const c in n) { const l = n[c]; e.data.attributes[c] = l.toJSON(e.data) } const i = {}; let r = !1; for (const c in this.morphAttributes) { const l = this.morphAttributes[c], h = []; for (let u = 0, d = l.length; u < d; u++) { const m = l[u]; h.push(m.toJSON(e.data)) } h.length > 0 && (i[c] = h, r = !0) } r && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative); const o = this.groups; o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o))); const a = this.boundingSphere; return a !== null && (e.data.boundingSphere = { center: a.center.toArray(), radius: a.radius }), e } clone() { return new this.constructor().copy(this) } copy(e) { this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null; const t = {}; this.name = e.name; const n = e.index; n !== null && this.setIndex(n.clone(t)); const i = e.attributes; for (const l in i) { const h = i[l]; this.setAttribute(l, h.clone(t)) } const r = e.morphAttributes; for (const l in r) { const h = [], u = r[l]; for (let d = 0, m = u.length; d < m; d++)h.push(u[d].clone(t)); this.morphAttributes[l] = h } this.morphTargetsRelative = e.morphTargetsRelative; const o = e.groups; for (let l = 0, h = o.length; l < h; l++) { const u = o[l]; this.addGroup(u.start, u.count, u.materialIndex) } const a = e.boundingBox; a !== null && (this.boundingBox = a.clone()); const c = e.boundingSphere; return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this } dispose() { this.dispatchEvent({ type: "dispose" }) } } const Qa = new We, Vn = new ps, Cs = new rn, ec = new P, vi = new P, yi = new P, Mi = new P, Gr = new P, Ls = new P, Ps = new ae, Is = new ae, Ds = new ae, tc = new P, nc = new P, ic = new P, Ns = new P, Us = new P; class Pt extends ot { constructor(e = new $t, t = new xn) { super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets() } copy(e, t) { return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this } updateMorphTargets() { const t = this.geometry.morphAttributes, n = Object.keys(t); if (n.length > 0) { const i = t[n[0]]; if (i !== void 0) { this.morphTargetInfluences = [], this.morphTargetDictionary = {}; for (let r = 0, o = i.length; r < o; r++) { const a = i[r].name || String(r); this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r } } } } getVertexPosition(e, t) { const n = this.geometry, i = n.attributes.position, r = n.morphAttributes.position, o = n.morphTargetsRelative; t.fromBufferAttribute(i, e); const a = this.morphTargetInfluences; if (r && a) { Ls.set(0, 0, 0); for (let c = 0, l = r.length; c < l; c++) { const h = a[c], u = r[c]; h !== 0 && (Gr.fromBufferAttribute(u, e), o ? Ls.addScaledVector(Gr, h) : Ls.addScaledVector(Gr.sub(t), h)) } t.add(Ls) } return t } raycast(e, t) { const n = this.geometry, i = this.material, r = this.matrixWorld; i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Cs.copy(n.boundingSphere), Cs.applyMatrix4(r), Vn.copy(e.ray).recast(e.near), !(Cs.containsPoint(Vn.origin) === !1 && (Vn.intersectSphere(Cs, ec) === null || Vn.origin.distanceToSquared(ec) > (e.far - e.near) ** 2)) && (Qa.copy(r).invert(), Vn.copy(e.ray).applyMatrix4(Qa), !(n.boundingBox !== null && Vn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, Vn))) } _computeIntersections(e, t, n) { let i; const r = this.geometry, o = this.material, a = r.index, c = r.attributes.position, l = r.attributes.uv, h = r.attributes.uv1, u = r.attributes.normal, d = r.groups, m = r.drawRange; if (a !== null) if (Array.isArray(o)) for (let g = 0, _ = d.length; g < _; g++) { const f = d[g], p = o[f.materialIndex], T = Math.max(f.start, m.start), x = Math.min(a.count, Math.min(f.start + f.count, m.start + m.count)); for (let M = T, I = x; M < I; M += 3) { const L = a.getX(M), A = a.getX(M + 1), z = a.getX(M + 2); i = Os(this, p, e, n, l, h, u, L, A, z), i && (i.faceIndex = Math.floor(M / 3), i.face.materialIndex = f.materialIndex, t.push(i)) } } else { const g = Math.max(0, m.start), _ = Math.min(a.count, m.start + m.count); for (let f = g, p = _; f < p; f += 3) { const T = a.getX(f), x = a.getX(f + 1), M = a.getX(f + 2); i = Os(this, o, e, n, l, h, u, T, x, M), i && (i.faceIndex = Math.floor(f / 3), t.push(i)) } } else if (c !== void 0) if (Array.isArray(o)) for (let g = 0, _ = d.length; g < _; g++) { const f = d[g], p = o[f.materialIndex], T = Math.max(f.start, m.start), x = Math.min(c.count, Math.min(f.start + f.count, m.start + m.count)); for (let M = T, I = x; M < I; M += 3) { const L = M, A = M + 1, z = M + 2; i = Os(this, p, e, n, l, h, u, L, A, z), i && (i.faceIndex = Math.floor(M / 3), i.face.materialIndex = f.materialIndex, t.push(i)) } } else { const g = Math.max(0, m.start), _ = Math.min(c.count, m.start + m.count); for (let f = g, p = _; f < p; f += 3) { const T = f, x = f + 1, M = f + 2; i = Os(this, o, e, n, l, h, u, T, x, M), i && (i.faceIndex = Math.floor(f / 3), t.push(i)) } } } } function Hu(s, e, t, n, i, r, o, a) { let c; if (e.side === Nt ? c = n.intersectTriangle(o, r, i, !0, a) : c = n.intersectTriangle(i, r, o, e.side === vn, a), c === null) return null; Us.copy(a), Us.applyMatrix4(s.matrixWorld); const l = t.ray.origin.distanceTo(Us); return l < t.near || l > t.far ? null : { distance: l, point: Us.clone(), object: s } } function Os(s, e, t, n, i, r, o, a, c, l) { s.getVertexPosition(a, vi), s.getVertexPosition(c, yi), s.getVertexPosition(l, Mi); const h = Hu(s, e, t, n, vi, yi, Mi, Ns); if (h) { i && (Ps.fromBufferAttribute(i, a), Is.fromBufferAttribute(i, c), Ds.fromBufferAttribute(i, l), h.uv = nn.getInterpolation(Ns, vi, yi, Mi, Ps, Is, Ds, new ae)), r && (Ps.fromBufferAttribute(r, a), Is.fromBufferAttribute(r, c), Ds.fromBufferAttribute(r, l), h.uv1 = nn.getInterpolation(Ns, vi, yi, Mi, Ps, Is, Ds, new ae), h.uv2 = h.uv1), o && (tc.fromBufferAttribute(o, a), nc.fromBufferAttribute(o, c), ic.fromBufferAttribute(o, l), h.normal = nn.getInterpolation(Ns, vi, yi, Mi, tc, nc, ic, new P), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1)); const u = { a, b: c, c: l, normal: new P, materialIndex: 0 }; nn.getNormal(vi, yi, Mi, u.normal), h.face = u } return h } class ms extends $t { constructor(e = 1, t = 1, n = 1, i = 1, r = 1, o = 1) { super(), this.type = "BoxGeometry", this.parameters = { width: e, height: t, depth: n, widthSegments: i, heightSegments: r, depthSegments: o }; const a = this; i = Math.floor(i), r = Math.floor(r), o = Math.floor(o); const c = [], l = [], h = [], u = []; let d = 0, m = 0; g("z", "y", "x", -1, -1, n, t, e, o, r, 0), g("z", "y", "x", 1, -1, n, t, -e, o, r, 1), g("x", "z", "y", 1, 1, e, n, t, i, o, 2), g("x", "z", "y", 1, -1, e, n, -t, i, o, 3), g("x", "y", "z", 1, -1, e, t, n, i, r, 4), g("x", "y", "z", -1, -1, e, t, -n, i, r, 5), this.setIndex(c), this.setAttribute("position", new Jt(l, 3)), this.setAttribute("normal", new Jt(h, 3)), this.setAttribute("uv", new Jt(u, 2)); function g(_, f, p, T, x, M, I, L, A, z, Q) { const v = M / A, w = I / z, q = M / 2, ee = I / 2, D = L / 2, G = A + 1, O = z + 1; let j = 0, X = 0; const Y = new P; for (let K = 0; K < O; K++) { const ne = K * w - ee; for (let he = 0; he < G; he++) { const Pe = he * v - q; Y[_] = Pe * T, Y[f] = ne * x, Y[p] = D, l.push(Y.x, Y.y, Y.z), Y[_] = 0, Y[f] = 0, Y[p] = L > 0 ? 1 : -1, h.push(Y.x, Y.y, Y.z), u.push(he / A), u.push(1 - K / z), j += 1 } } for (let K = 0; K < z; K++)for (let ne = 0; ne < A; ne++) { const he = d + ne + G * K, Pe = d + ne + G * (K + 1), k = d + (ne + 1) + G * (K + 1), ie = d + (ne + 1) + G * K; c.push(he, Pe, ie), c.push(Pe, k, ie), X += 6 } a.addGroup(m, X, Q), m += X, d += j } } copy(e) { return super.copy(e), this.parameters = Object.assign({}, e.parameters), this } static fromJSON(e) { return new ms(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments) } } function Hi(s) { const e = {}; for (const t in s) { e[t] = {}; for (const n in s[t]) { const i = s[t][n]; i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i } } return e } function Ct(s) { const e = {}; for (let t = 0; t < s.length; t++) { const n = Hi(s[t]); for (const i in n) e[i] = n[i] } return e } function Gu(s) { const e = []; for (let t = 0; t < s.length; t++)e.push(s[t].clone()); return e } function wl(s) { return s.getRenderTarget() === null ? s.outputColorSpace : $e.workingColorSpace } const ku = { clone: Hi, merge: Ct }; var Vu = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Wu = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`; class Fn extends Zt { constructor(e) { super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Vu, this.fragmentShader = Wu, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = { derivatives: !1, fragDepth: !1, drawBuffers: !1, shaderTextureLOD: !1, clipCullDistance: !1, multiDraw: !1 }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e) } copy(e) { return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Hi(e.uniforms), this.uniformsGroups = Gu(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this } toJSON(e) { const t = super.toJSON(e); t.glslVersion = this.glslVersion, t.uniforms = {}; for (const i in this.uniforms) { const o = this.uniforms[i].value; o && o.isTexture ? t.uniforms[i] = { type: "t", value: o.toJSON(e).uuid } : o && o.isColor ? t.uniforms[i] = { type: "c", value: o.getHex() } : o && o.isVector2 ? t.uniforms[i] = { type: "v2", value: o.toArray() } : o && o.isVector3 ? t.uniforms[i] = { type: "v3", value: o.toArray() } : o && o.isVector4 ? t.uniforms[i] = { type: "v4", value: o.toArray() } : o && o.isMatrix3 ? t.uniforms[i] = { type: "m3", value: o.toArray() } : o && o.isMatrix4 ? t.uniforms[i] = { type: "m4", value: o.toArray() } : t.uniforms[i] = { value: o } } Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping; const n = {}; for (const i in this.extensions) this.extensions[i] === !0 && (n[i] = !0); return Object.keys(n).length > 0 && (t.extensions = n), t } } class Rl extends ot { constructor() { super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new We, this.projectionMatrix = new We, this.projectionMatrixInverse = new We, this.coordinateSystem = _n } copy(e, t) { return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this } getWorldDirection(e) { return super.getWorldDirection(e).negate() } updateMatrixWorld(e) { super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert() } updateWorldMatrix(e, t) { super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert() } clone() { return new this.constructor().copy(this) } } const wn = new P, sc = new ae, rc = new ae; class Lt extends Rl { constructor(e = 50, t = 1, n = .1, i = 2e3) { super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix() } copy(e, t) { return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this } setFocalLength(e) { const t = .5 * this.getFilmHeight() / e; this.fov = zi * 2 * Math.atan(t), this.updateProjectionMatrix() } getFocalLength() { const e = Math.tan(ts * .5 * this.fov); return .5 * this.getFilmHeight() / e } getEffectiveFOV() { return zi * 2 * Math.atan(Math.tan(ts * .5 * this.fov) / this.zoom) } getFilmWidth() { return this.filmGauge * Math.min(this.aspect, 1) } getFilmHeight() { return this.filmGauge / Math.max(this.aspect, 1) } getViewBounds(e, t, n) { wn.set(-1, -1, .5).applyMatrix4(this.projectionMatrixInverse), t.set(wn.x, wn.y).multiplyScalar(-e / wn.z), wn.set(1, 1, .5).applyMatrix4(this.projectionMatrixInverse), n.set(wn.x, wn.y).multiplyScalar(-e / wn.z) } getViewSize(e, t) { return this.getViewBounds(e, sc, rc), t.subVectors(rc, sc) } setViewOffset(e, t, n, i, r, o) { this.aspect = e / t, this.view === null && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = o, this.updateProjectionMatrix() } clearViewOffset() { this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix() } updateProjectionMatrix() { const e = this.near; let t = e * Math.tan(ts * .5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, r = -.5 * i; const o = this.view; if (this.view !== null && this.view.enabled) { const c = o.fullWidth, l = o.fullHeight; r += o.offsetX * i / c, t -= o.offsetY * n / l, i *= o.width / c, n *= o.height / l } const a = this.filmOffset; a !== 0 && (r += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert() } toJSON(e) { const t = super.toJSON(e); return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t } } const Si = -90, Ei = 1; class Xu extends ot { constructor(e, t, n) { super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0; const i = new Lt(Si, Ei, e, t); i.layers = this.layers, this.add(i); const r = new Lt(Si, Ei, e, t); r.layers = this.layers, this.add(r); const o = new Lt(Si, Ei, e, t); o.layers = this.layers, this.add(o); const a = new Lt(Si, Ei, e, t); a.layers = this.layers, this.add(a); const c = new Lt(Si, Ei, e, t); c.layers = this.layers, this.add(c); const l = new Lt(Si, Ei, e, t); l.layers = this.layers, this.add(l) } updateCoordinateSystem() { const e = this.coordinateSystem, t = this.children.concat(), [n, i, r, o, a, c] = t; for (const l of t) this.remove(l); if (e === _n) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1); else if (e === sr) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), o.up.set(0, 0, -1), o.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), c.up.set(0, -1, 0), c.lookAt(0, 0, -1); else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e); for (const l of t) this.add(l), l.updateMatrixWorld() } update(e, t) { this.parent === null && this.updateMatrixWorld(); const { renderTarget: n, activeMipmapLevel: i } = this; this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem()); const [r, o, a, c, l, h] = this.children, u = e.getRenderTarget(), d = e.getActiveCubeFace(), m = e.getActiveMipmapLevel(), g = e.xr.enabled; e.xr.enabled = !1; const _ = n.texture.generateMipmaps; n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, i), e.render(t, r), e.setRenderTarget(n, 1, i), e.render(t, o), e.setRenderTarget(n, 2, i), e.render(t, a), e.setRenderTarget(n, 3, i), e.render(t, c), e.setRenderTarget(n, 4, i), e.render(t, l), n.texture.generateMipmaps = _, e.setRenderTarget(n, 5, i), e.render(t, h), e.setRenderTarget(u, d, m), e.xr.enabled = g, n.texture.needsPMREMUpdate = !0 } } class Cl extends xt { constructor(e, t, n, i, r, o, a, c, l, h) { e = e !== void 0 ? e : [], t = t !== void 0 ? t : Ni, super(e, t, n, i, r, o, a, c, l, h), this.isCubeTexture = !0, this.flipY = !1 } get images() { return this.image } set images(e) { this.image = e } } class qu extends ti {
	constructor(e = 1, t = {}) { super(e, e, t), this.isWebGLCubeRenderTarget = !0; const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n]; t.encoding !== void 0 && (ei("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."), t.colorSpace = t.encoding === Qn ? ct : Vt), this.texture = new Cl(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : At } fromEquirectangularTexture(e, t) {
		this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter; const n = {
			uniforms: { tEquirect: { value: null } }, vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`}, i = new ms(5, 5, 5), r = new Fn({ name: "CubemapFromEquirect", uniforms: Hi(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: Nt, blending: Dn }); r.uniforms.tEquirect.value = t; const o = new Pt(i, r), a = t.minFilter; return t.minFilter === gn && (t.minFilter = At), new Xu(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this
	} clear(e, t, n, i) { const r = e.getRenderTarget(); for (let o = 0; o < 6; o++)e.setRenderTarget(this, o), e.clear(t, n, i); e.setRenderTarget(r) }
} const kr = new P, Yu = new P, ju = new qe; class Cn { constructor(e = new P(1, 0, 0), t = 0) { this.isPlane = !0, this.normal = e, this.constant = t } set(e, t) { return this.normal.copy(e), this.constant = t, this } setComponents(e, t, n, i) { return this.normal.set(e, t, n), this.constant = i, this } setFromNormalAndCoplanarPoint(e, t) { return this.normal.copy(e), this.constant = -t.dot(this.normal), this } setFromCoplanarPoints(e, t, n) { const i = kr.subVectors(n, t).cross(Yu.subVectors(e, t)).normalize(); return this.setFromNormalAndCoplanarPoint(i, e), this } copy(e) { return this.normal.copy(e.normal), this.constant = e.constant, this } normalize() { const e = 1 / this.normal.length(); return this.normal.multiplyScalar(e), this.constant *= e, this } negate() { return this.constant *= -1, this.normal.negate(), this } distanceToPoint(e) { return this.normal.dot(e) + this.constant } distanceToSphere(e) { return this.distanceToPoint(e.center) - e.radius } projectPoint(e, t) { return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e)) } intersectLine(e, t) { const n = e.delta(kr), i = this.normal.dot(n); if (i === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null; const r = -(e.start.dot(this.normal) + this.constant) / i; return r < 0 || r > 1 ? null : t.copy(e.start).addScaledVector(n, r) } intersectsLine(e) { const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end); return t < 0 && n > 0 || n < 0 && t > 0 } intersectsBox(e) { return e.intersectsPlane(this) } intersectsSphere(e) { return e.intersectsPlane(this) } coplanarPoint(e) { return e.copy(this.normal).multiplyScalar(-this.constant) } applyMatrix4(e, t) { const n = t || ju.getNormalMatrix(e), i = this.coplanarPoint(kr).applyMatrix4(e), r = this.normal.applyMatrix3(n).normalize(); return this.constant = -i.dot(r), this } translate(e) { return this.constant -= e.dot(this.normal), this } equals(e) { return e.normal.equals(this.normal) && e.constant === this.constant } clone() { return new this.constructor().copy(this) } } const Wn = new rn, Fs = new P; class Do { constructor(e = new Cn, t = new Cn, n = new Cn, i = new Cn, r = new Cn, o = new Cn) { this.planes = [e, t, n, i, r, o] } set(e, t, n, i, r, o) { const a = this.planes; return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(i), a[4].copy(r), a[5].copy(o), this } copy(e) { const t = this.planes; for (let n = 0; n < 6; n++)t[n].copy(e.planes[n]); return this } setFromProjectionMatrix(e, t = _n) { const n = this.planes, i = e.elements, r = i[0], o = i[1], a = i[2], c = i[3], l = i[4], h = i[5], u = i[6], d = i[7], m = i[8], g = i[9], _ = i[10], f = i[11], p = i[12], T = i[13], x = i[14], M = i[15]; if (n[0].setComponents(c - r, d - l, f - m, M - p).normalize(), n[1].setComponents(c + r, d + l, f + m, M + p).normalize(), n[2].setComponents(c + o, d + h, f + g, M + T).normalize(), n[3].setComponents(c - o, d - h, f - g, M - T).normalize(), n[4].setComponents(c - a, d - u, f - _, M - x).normalize(), t === _n) n[5].setComponents(c + a, d + u, f + _, M + x).normalize(); else if (t === sr) n[5].setComponents(a, u, _, x).normalize(); else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t); return this } intersectsObject(e) { if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), Wn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld); else { const t = e.geometry; t.boundingSphere === null && t.computeBoundingSphere(), Wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld) } return this.intersectsSphere(Wn) } intersectsSprite(e) { return Wn.center.set(0, 0, 0), Wn.radius = .7071067811865476, Wn.applyMatrix4(e.matrixWorld), this.intersectsSphere(Wn) } intersectsSphere(e) { const t = this.planes, n = e.center, i = -e.radius; for (let r = 0; r < 6; r++)if (t[r].distanceToPoint(n) < i) return !1; return !0 } intersectsBox(e) { const t = this.planes; for (let n = 0; n < 6; n++) { const i = t[n]; if (Fs.x = i.normal.x > 0 ? e.max.x : e.min.x, Fs.y = i.normal.y > 0 ? e.max.y : e.min.y, Fs.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(Fs) < 0) return !1 } return !0 } containsPoint(e) { const t = this.planes; for (let n = 0; n < 6; n++)if (t[n].distanceToPoint(e) < 0) return !1; return !0 } clone() { return new this.constructor().copy(this) } } function Ll() { let s = null, e = !1, t = null, n = null; function i(r, o) { t(r, o), n = s.requestAnimationFrame(i) } return { start: function () { e !== !0 && t !== null && (n = s.requestAnimationFrame(i), e = !0) }, stop: function () { s.cancelAnimationFrame(n), e = !1 }, setAnimationLoop: function (r) { t = r }, setContext: function (r) { s = r } } } function Ku(s, e) { const t = e.isWebGL2, n = new WeakMap; function i(l, h) { const u = l.array, d = l.usage, m = u.byteLength, g = s.createBuffer(); s.bindBuffer(h, g), s.bufferData(h, u, d), l.onUploadCallback(); let _; if (u instanceof Float32Array) _ = s.FLOAT; else if (u instanceof Uint16Array) if (l.isFloat16BufferAttribute) if (t) _ = s.HALF_FLOAT; else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."); else _ = s.UNSIGNED_SHORT; else if (u instanceof Int16Array) _ = s.SHORT; else if (u instanceof Uint32Array) _ = s.UNSIGNED_INT; else if (u instanceof Int32Array) _ = s.INT; else if (u instanceof Int8Array) _ = s.BYTE; else if (u instanceof Uint8Array) _ = s.UNSIGNED_BYTE; else if (u instanceof Uint8ClampedArray) _ = s.UNSIGNED_BYTE; else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + u); return { buffer: g, type: _, bytesPerElement: u.BYTES_PER_ELEMENT, version: l.version, size: m } } function r(l, h, u) { const d = h.array, m = h._updateRange, g = h.updateRanges; if (s.bindBuffer(u, l), m.count === -1 && g.length === 0 && s.bufferSubData(u, 0, d), g.length !== 0) { for (let _ = 0, f = g.length; _ < f; _++) { const p = g[_]; t ? s.bufferSubData(u, p.start * d.BYTES_PER_ELEMENT, d, p.start, p.count) : s.bufferSubData(u, p.start * d.BYTES_PER_ELEMENT, d.subarray(p.start, p.start + p.count)) } h.clearUpdateRanges() } m.count !== -1 && (t ? s.bufferSubData(u, m.offset * d.BYTES_PER_ELEMENT, d, m.offset, m.count) : s.bufferSubData(u, m.offset * d.BYTES_PER_ELEMENT, d.subarray(m.offset, m.offset + m.count)), m.count = -1), h.onUploadCallback() } function o(l) { return l.isInterleavedBufferAttribute && (l = l.data), n.get(l) } function a(l) { l.isInterleavedBufferAttribute && (l = l.data); const h = n.get(l); h && (s.deleteBuffer(h.buffer), n.delete(l)) } function c(l, h) { if (l.isGLBufferAttribute) { const d = n.get(l); (!d || d.version < l.version) && n.set(l, { buffer: l.buffer, type: l.type, bytesPerElement: l.elementSize, version: l.version }); return } l.isInterleavedBufferAttribute && (l = l.data); const u = n.get(l); if (u === void 0) n.set(l, i(l, h)); else if (u.version < l.version) { if (u.size !== l.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported."); r(u.buffer, l, h), u.version = l.version } } return { get: o, remove: a, update: c } } class hr extends $t { constructor(e = 1, t = 1, n = 1, i = 1) { super(), this.type = "PlaneGeometry", this.parameters = { width: e, height: t, widthSegments: n, heightSegments: i }; const r = e / 2, o = t / 2, a = Math.floor(n), c = Math.floor(i), l = a + 1, h = c + 1, u = e / a, d = t / c, m = [], g = [], _ = [], f = []; for (let p = 0; p < h; p++) { const T = p * d - o; for (let x = 0; x < l; x++) { const M = x * u - r; g.push(M, -T, 0), _.push(0, 0, 1), f.push(x / a), f.push(1 - p / c) } } for (let p = 0; p < c; p++)for (let T = 0; T < a; T++) { const x = T + l * p, M = T + l * (p + 1), I = T + 1 + l * (p + 1), L = T + 1 + l * p; m.push(x, M, L), m.push(M, I, L) } this.setIndex(m), this.setAttribute("position", new Jt(g, 3)), this.setAttribute("normal", new Jt(_, 3)), this.setAttribute("uv", new Jt(f, 2)) } copy(e) { return super.copy(e), this.parameters = Object.assign({}, e.parameters), this } static fromJSON(e) { return new hr(e.width, e.height, e.widthSegments, e.heightSegments) } } var Zu = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Ju = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, $u = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Qu = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, ed = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, td = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, nd = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, id = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, sd = `#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, rd = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`, od = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, ad = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, cd = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, ld = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, hd = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, ud = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, dd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, fd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, pd = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, md = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, gd = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, _d = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, xd = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, vd = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, yd = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Md = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Sd = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Ed = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Td = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, bd = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Ad = "gl_FragColor = linearToOutputTexel( gl_FragColor );", wd = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`, Rd = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, Cd = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Ld = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Pd = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Id = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, Dd = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Nd = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Ud = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Od = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Fd = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, Bd = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, zd = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Hd = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Gd = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, kd = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, Vd = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, Wd = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Xd = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, qd = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Yd = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, jd = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, Kd = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, Zd = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, Jd = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, $d = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Qd = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, ef = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, tf = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, nf = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, sf = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, rf = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, of = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, af = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, cf = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, lf = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, hf = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, uf = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`, df = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`, ff = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`, pf = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, mf = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, gf = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, _f = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, xf = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, vf = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, yf = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Mf = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Sf = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Ef = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Tf = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, bf = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, Af = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, wf = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Rf = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Cf = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Lf = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Pf = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, If = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, Df = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, Nf = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, Uf = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, Of = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Ff = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, Bf = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, zf = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, Hf = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Gf = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, kf = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Vf = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, Wf = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, Xf = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, qf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Yf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, jf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, Kf = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`; const Zf = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Jf = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, $f = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Qf = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, ep = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, tp = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, np = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, ip = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, sp = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, rp = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, op = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, ap = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, cp = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, lp = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, hp = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, up = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, dp = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, fp = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, pp = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, mp = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, gp = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, _p = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, xp = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, vp = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, yp = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Mp = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Sp = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Ep = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Tp = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, bp = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Ap = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, wp = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Rp = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Cp = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Ge = { alphahash_fragment: Zu, alphahash_pars_fragment: Ju, alphamap_fragment: $u, alphamap_pars_fragment: Qu, alphatest_fragment: ed, alphatest_pars_fragment: td, aomap_fragment: nd, aomap_pars_fragment: id, batching_pars_vertex: sd, batching_vertex: rd, begin_vertex: od, beginnormal_vertex: ad, bsdfs: cd, iridescence_fragment: ld, bumpmap_pars_fragment: hd, clipping_planes_fragment: ud, clipping_planes_pars_fragment: dd, clipping_planes_pars_vertex: fd, clipping_planes_vertex: pd, color_fragment: md, color_pars_fragment: gd, color_pars_vertex: _d, color_vertex: xd, common: vd, cube_uv_reflection_fragment: yd, defaultnormal_vertex: Md, displacementmap_pars_vertex: Sd, displacementmap_vertex: Ed, emissivemap_fragment: Td, emissivemap_pars_fragment: bd, colorspace_fragment: Ad, colorspace_pars_fragment: wd, envmap_fragment: Rd, envmap_common_pars_fragment: Cd, envmap_pars_fragment: Ld, envmap_pars_vertex: Pd, envmap_physical_pars_fragment: Vd, envmap_vertex: Id, fog_vertex: Dd, fog_pars_vertex: Nd, fog_fragment: Ud, fog_pars_fragment: Od, gradientmap_pars_fragment: Fd, lightmap_fragment: Bd, lightmap_pars_fragment: zd, lights_lambert_fragment: Hd, lights_lambert_pars_fragment: Gd, lights_pars_begin: kd, lights_toon_fragment: Wd, lights_toon_pars_fragment: Xd, lights_phong_fragment: qd, lights_phong_pars_fragment: Yd, lights_physical_fragment: jd, lights_physical_pars_fragment: Kd, lights_fragment_begin: Zd, lights_fragment_maps: Jd, lights_fragment_end: $d, logdepthbuf_fragment: Qd, logdepthbuf_pars_fragment: ef, logdepthbuf_pars_vertex: tf, logdepthbuf_vertex: nf, map_fragment: sf, map_pars_fragment: rf, map_particle_fragment: of, map_particle_pars_fragment: af, metalnessmap_fragment: cf, metalnessmap_pars_fragment: lf, morphcolor_vertex: hf, morphnormal_vertex: uf, morphtarget_pars_vertex: df, morphtarget_vertex: ff, normal_fragment_begin: pf, normal_fragment_maps: mf, normal_pars_fragment: gf, normal_pars_vertex: _f, normal_vertex: xf, normalmap_pars_fragment: vf, clearcoat_normal_fragment_begin: yf, clearcoat_normal_fragment_maps: Mf, clearcoat_pars_fragment: Sf, iridescence_pars_fragment: Ef, opaque_fragment: Tf, packing: bf, premultiplied_alpha_fragment: Af, project_vertex: wf, dithering_fragment: Rf, dithering_pars_fragment: Cf, roughnessmap_fragment: Lf, roughnessmap_pars_fragment: Pf, shadowmap_pars_fragment: If, shadowmap_pars_vertex: Df, shadowmap_vertex: Nf, shadowmask_pars_fragment: Uf, skinbase_vertex: Of, skinning_pars_vertex: Ff, skinning_vertex: Bf, skinnormal_vertex: zf, specularmap_fragment: Hf, specularmap_pars_fragment: Gf, tonemapping_fragment: kf, tonemapping_pars_fragment: Vf, transmission_fragment: Wf, transmission_pars_fragment: Xf, uv_pars_fragment: qf, uv_pars_vertex: Yf, uv_vertex: jf, worldpos_vertex: Kf, background_vert: Zf, background_frag: Jf, backgroundCube_vert: $f, backgroundCube_frag: Qf, cube_vert: ep, cube_frag: tp, depth_vert: np, depth_frag: ip, distanceRGBA_vert: sp, distanceRGBA_frag: rp, equirect_vert: op, equirect_frag: ap, linedashed_vert: cp, linedashed_frag: lp, meshbasic_vert: hp, meshbasic_frag: up, meshlambert_vert: dp, meshlambert_frag: fp, meshmatcap_vert: pp, meshmatcap_frag: mp, meshnormal_vert: gp, meshnormal_frag: _p, meshphong_vert: xp, meshphong_frag: vp, meshphysical_vert: yp, meshphysical_frag: Mp, meshtoon_vert: Sp, meshtoon_frag: Ep, points_vert: Tp, points_frag: bp, shadow_vert: Ap, shadow_frag: wp, sprite_vert: Rp, sprite_frag: Cp }, ue = { common: { diffuse: { value: new De(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new qe }, alphaMap: { value: null }, alphaMapTransform: { value: new qe }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new qe } }, envmap: { envMap: { value: null }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: .98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new qe } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new qe } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new qe }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new qe }, normalScale: { value: new ae(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new qe }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new qe } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new qe } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new qe } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new De(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new De(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new qe }, alphaTest: { value: 0 }, uvTransform: { value: new qe } }, sprite: { diffuse: { value: new De(16777215) }, opacity: { value: 1 }, center: { value: new ae(.5, .5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new qe }, alphaMap: { value: null }, alphaMapTransform: { value: new qe }, alphaTest: { value: 0 } } }, Qt = { basic: { uniforms: Ct([ue.common, ue.specularmap, ue.envmap, ue.aomap, ue.lightmap, ue.fog]), vertexShader: Ge.meshbasic_vert, fragmentShader: Ge.meshbasic_frag }, lambert: { uniforms: Ct([ue.common, ue.specularmap, ue.envmap, ue.aomap, ue.lightmap, ue.emissivemap, ue.bumpmap, ue.normalmap, ue.displacementmap, ue.fog, ue.lights, { emissive: { value: new De(0) } }]), vertexShader: Ge.meshlambert_vert, fragmentShader: Ge.meshlambert_frag }, phong: { uniforms: Ct([ue.common, ue.specularmap, ue.envmap, ue.aomap, ue.lightmap, ue.emissivemap, ue.bumpmap, ue.normalmap, ue.displacementmap, ue.fog, ue.lights, { emissive: { value: new De(0) }, specular: { value: new De(1118481) }, shininess: { value: 30 } }]), vertexShader: Ge.meshphong_vert, fragmentShader: Ge.meshphong_frag }, standard: { uniforms: Ct([ue.common, ue.envmap, ue.aomap, ue.lightmap, ue.emissivemap, ue.bumpmap, ue.normalmap, ue.displacementmap, ue.roughnessmap, ue.metalnessmap, ue.fog, ue.lights, { emissive: { value: new De(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Ge.meshphysical_vert, fragmentShader: Ge.meshphysical_frag }, toon: { uniforms: Ct([ue.common, ue.aomap, ue.lightmap, ue.emissivemap, ue.bumpmap, ue.normalmap, ue.displacementmap, ue.gradientmap, ue.fog, ue.lights, { emissive: { value: new De(0) } }]), vertexShader: Ge.meshtoon_vert, fragmentShader: Ge.meshtoon_frag }, matcap: { uniforms: Ct([ue.common, ue.bumpmap, ue.normalmap, ue.displacementmap, ue.fog, { matcap: { value: null } }]), vertexShader: Ge.meshmatcap_vert, fragmentShader: Ge.meshmatcap_frag }, points: { uniforms: Ct([ue.points, ue.fog]), vertexShader: Ge.points_vert, fragmentShader: Ge.points_frag }, dashed: { uniforms: Ct([ue.common, ue.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Ge.linedashed_vert, fragmentShader: Ge.linedashed_frag }, depth: { uniforms: Ct([ue.common, ue.displacementmap]), vertexShader: Ge.depth_vert, fragmentShader: Ge.depth_frag }, normal: { uniforms: Ct([ue.common, ue.bumpmap, ue.normalmap, ue.displacementmap, { opacity: { value: 1 } }]), vertexShader: Ge.meshnormal_vert, fragmentShader: Ge.meshnormal_frag }, sprite: { uniforms: Ct([ue.sprite, ue.fog]), vertexShader: Ge.sprite_vert, fragmentShader: Ge.sprite_frag }, background: { uniforms: { uvTransform: { value: new qe }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Ge.background_vert, fragmentShader: Ge.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 } }, vertexShader: Ge.backgroundCube_vert, fragmentShader: Ge.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Ge.cube_vert, fragmentShader: Ge.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Ge.equirect_vert, fragmentShader: Ge.equirect_frag }, distanceRGBA: { uniforms: Ct([ue.common, ue.displacementmap, { referencePosition: { value: new P }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Ge.distanceRGBA_vert, fragmentShader: Ge.distanceRGBA_frag }, shadow: { uniforms: Ct([ue.lights, ue.fog, { color: { value: new De(0) }, opacity: { value: 1 } }]), vertexShader: Ge.shadow_vert, fragmentShader: Ge.shadow_frag } }; Qt.physical = { uniforms: Ct([Qt.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new qe }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new qe }, clearcoatNormalScale: { value: new ae(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new qe }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new qe }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new qe }, sheen: { value: 0 }, sheenColor: { value: new De(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new qe }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new qe }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new qe }, transmissionSamplerSize: { value: new ae }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new qe }, attenuationDistance: { value: 0 }, attenuationColor: { value: new De(0) }, specularColor: { value: new De(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new qe }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new qe }, anisotropyVector: { value: new ae }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new qe } }]), vertexShader: Ge.meshphysical_vert, fragmentShader: Ge.meshphysical_frag }; const Bs = { r: 0, b: 0, g: 0 }; function Lp(s, e, t, n, i, r, o) { const a = new De(0); let c = r === !0 ? 0 : 1, l, h, u = null, d = 0, m = null; function g(f, p) { let T = !1, x = p.isScene === !0 ? p.background : null; x && x.isTexture && (x = (p.backgroundBlurriness > 0 ? t : e).get(x)), x === null ? _(a, c) : x && x.isColor && (_(x, 1), T = !0); const M = s.xr.getEnvironmentBlendMode(); M === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, o) : M === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, o), (s.autoClear || T) && s.clear(s.autoClearColor, s.autoClearDepth, s.autoClearStencil), x && (x.isCubeTexture || x.mapping === ar) ? (h === void 0 && (h = new Pt(new ms(1, 1, 1), new Fn({ name: "BackgroundCubeMaterial", uniforms: Hi(Qt.backgroundCube.uniforms), vertexShader: Qt.backgroundCube.vertexShader, fragmentShader: Qt.backgroundCube.fragmentShader, side: Nt, depthTest: !1, depthWrite: !1, fog: !1 })), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function (I, L, A) { this.matrixWorld.copyPosition(A.matrixWorld) }, Object.defineProperty(h.material, "envMap", { get: function () { return this.uniforms.envMap.value } }), i.update(h)), h.material.uniforms.envMap.value = x, h.material.uniforms.flipEnvMap.value = x.isCubeTexture && x.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = p.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = p.backgroundIntensity, h.material.toneMapped = $e.getTransfer(x.colorSpace) !== it, (u !== x || d !== x.version || m !== s.toneMapping) && (h.material.needsUpdate = !0, u = x, d = x.version, m = s.toneMapping), h.layers.enableAll(), f.unshift(h, h.geometry, h.material, 0, 0, null)) : x && x.isTexture && (l === void 0 && (l = new Pt(new hr(2, 2), new Fn({ name: "BackgroundMaterial", uniforms: Hi(Qt.background.uniforms), vertexShader: Qt.background.vertexShader, fragmentShader: Qt.background.fragmentShader, side: vn, depthTest: !1, depthWrite: !1, fog: !1 })), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", { get: function () { return this.uniforms.t2D.value } }), i.update(l)), l.material.uniforms.t2D.value = x, l.material.uniforms.backgroundIntensity.value = p.backgroundIntensity, l.material.toneMapped = $e.getTransfer(x.colorSpace) !== it, x.matrixAutoUpdate === !0 && x.updateMatrix(), l.material.uniforms.uvTransform.value.copy(x.matrix), (u !== x || d !== x.version || m !== s.toneMapping) && (l.material.needsUpdate = !0, u = x, d = x.version, m = s.toneMapping), l.layers.enableAll(), f.unshift(l, l.geometry, l.material, 0, 0, null)) } function _(f, p) { f.getRGB(Bs, wl(s)), n.buffers.color.setClear(Bs.r, Bs.g, Bs.b, p, o) } return { getClearColor: function () { return a }, setClearColor: function (f, p = 1) { a.set(f), c = p, _(a, c) }, getClearAlpha: function () { return c }, setClearAlpha: function (f) { c = f, _(a, c) }, render: g } } function Pp(s, e, t, n) { const i = s.getParameter(s.MAX_VERTEX_ATTRIBS), r = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), o = n.isWebGL2 || r !== null, a = {}, c = f(null); let l = c, h = !1; function u(D, G, O, j, X) { let Y = !1; if (o) { const K = _(j, O, G); l !== K && (l = K, m(l.object)), Y = p(D, j, O, X), Y && T(D, j, O, X) } else { const K = G.wireframe === !0; (l.geometry !== j.id || l.program !== O.id || l.wireframe !== K) && (l.geometry = j.id, l.program = O.id, l.wireframe = K, Y = !0) } X !== null && t.update(X, s.ELEMENT_ARRAY_BUFFER), (Y || h) && (h = !1, z(D, G, O, j), X !== null && s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, t.get(X).buffer)) } function d() { return n.isWebGL2 ? s.createVertexArray() : r.createVertexArrayOES() } function m(D) { return n.isWebGL2 ? s.bindVertexArray(D) : r.bindVertexArrayOES(D) } function g(D) { return n.isWebGL2 ? s.deleteVertexArray(D) : r.deleteVertexArrayOES(D) } function _(D, G, O) { const j = O.wireframe === !0; let X = a[D.id]; X === void 0 && (X = {}, a[D.id] = X); let Y = X[G.id]; Y === void 0 && (Y = {}, X[G.id] = Y); let K = Y[j]; return K === void 0 && (K = f(d()), Y[j] = K), K } function f(D) { const G = [], O = [], j = []; for (let X = 0; X < i; X++)G[X] = 0, O[X] = 0, j[X] = 0; return { geometry: null, program: null, wireframe: !1, newAttributes: G, enabledAttributes: O, attributeDivisors: j, object: D, attributes: {}, index: null } } function p(D, G, O, j) { const X = l.attributes, Y = G.attributes; let K = 0; const ne = O.getAttributes(); for (const he in ne) if (ne[he].location >= 0) { const k = X[he]; let ie = Y[he]; if (ie === void 0 && (he === "instanceMatrix" && D.instanceMatrix && (ie = D.instanceMatrix), he === "instanceColor" && D.instanceColor && (ie = D.instanceColor)), k === void 0 || k.attribute !== ie || ie && k.data !== ie.data) return !0; K++ } return l.attributesNum !== K || l.index !== j } function T(D, G, O, j) { const X = {}, Y = G.attributes; let K = 0; const ne = O.getAttributes(); for (const he in ne) if (ne[he].location >= 0) { let k = Y[he]; k === void 0 && (he === "instanceMatrix" && D.instanceMatrix && (k = D.instanceMatrix), he === "instanceColor" && D.instanceColor && (k = D.instanceColor)); const ie = {}; ie.attribute = k, k && k.data && (ie.data = k.data), X[he] = ie, K++ } l.attributes = X, l.attributesNum = K, l.index = j } function x() { const D = l.newAttributes; for (let G = 0, O = D.length; G < O; G++)D[G] = 0 } function M(D) { I(D, 0) } function I(D, G) { const O = l.newAttributes, j = l.enabledAttributes, X = l.attributeDivisors; O[D] = 1, j[D] === 0 && (s.enableVertexAttribArray(D), j[D] = 1), X[D] !== G && ((n.isWebGL2 ? s : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](D, G), X[D] = G) } function L() { const D = l.newAttributes, G = l.enabledAttributes; for (let O = 0, j = G.length; O < j; O++)G[O] !== D[O] && (s.disableVertexAttribArray(O), G[O] = 0) } function A(D, G, O, j, X, Y, K) { K === !0 ? s.vertexAttribIPointer(D, G, O, X, Y) : s.vertexAttribPointer(D, G, O, j, X, Y) } function z(D, G, O, j) { if (n.isWebGL2 === !1 && (D.isInstancedMesh || j.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null) return; x(); const X = j.attributes, Y = O.getAttributes(), K = G.defaultAttributeValues; for (const ne in Y) { const he = Y[ne]; if (he.location >= 0) { let Pe = X[ne]; if (Pe === void 0 && (ne === "instanceMatrix" && D.instanceMatrix && (Pe = D.instanceMatrix), ne === "instanceColor" && D.instanceColor && (Pe = D.instanceColor)), Pe !== void 0) { const k = Pe.normalized, ie = Pe.itemSize, ge = t.get(Pe); if (ge === void 0) continue; const Me = ge.buffer, Te = ge.type, ve = ge.bytesPerElement, Oe = n.isWebGL2 === !0 && (Te === s.INT || Te === s.UNSIGNED_INT || Pe.gpuType === cl); if (Pe.isInterleavedBufferAttribute) { const Ae = Pe.data, C = Ae.stride, le = Pe.offset; if (Ae.isInstancedInterleavedBuffer) { for (let V = 0; V < he.locationSize; V++)I(he.location + V, Ae.meshPerAttribute); D.isInstancedMesh !== !0 && j._maxInstanceCount === void 0 && (j._maxInstanceCount = Ae.meshPerAttribute * Ae.count) } else for (let V = 0; V < he.locationSize; V++)M(he.location + V); s.bindBuffer(s.ARRAY_BUFFER, Me); for (let V = 0; V < he.locationSize; V++)A(he.location + V, ie / he.locationSize, Te, k, C * ve, (le + ie / he.locationSize * V) * ve, Oe) } else { if (Pe.isInstancedBufferAttribute) { for (let Ae = 0; Ae < he.locationSize; Ae++)I(he.location + Ae, Pe.meshPerAttribute); D.isInstancedMesh !== !0 && j._maxInstanceCount === void 0 && (j._maxInstanceCount = Pe.meshPerAttribute * Pe.count) } else for (let Ae = 0; Ae < he.locationSize; Ae++)M(he.location + Ae); s.bindBuffer(s.ARRAY_BUFFER, Me); for (let Ae = 0; Ae < he.locationSize; Ae++)A(he.location + Ae, ie / he.locationSize, Te, k, ie * ve, ie / he.locationSize * Ae * ve, Oe) } } else if (K !== void 0) { const k = K[ne]; if (k !== void 0) switch (k.length) { case 2: s.vertexAttrib2fv(he.location, k); break; case 3: s.vertexAttrib3fv(he.location, k); break; case 4: s.vertexAttrib4fv(he.location, k); break; default: s.vertexAttrib1fv(he.location, k) } } } } L() } function Q() { q(); for (const D in a) { const G = a[D]; for (const O in G) { const j = G[O]; for (const X in j) g(j[X].object), delete j[X]; delete G[O] } delete a[D] } } function v(D) { if (a[D.id] === void 0) return; const G = a[D.id]; for (const O in G) { const j = G[O]; for (const X in j) g(j[X].object), delete j[X]; delete G[O] } delete a[D.id] } function w(D) { for (const G in a) { const O = a[G]; if (O[D.id] === void 0) continue; const j = O[D.id]; for (const X in j) g(j[X].object), delete j[X]; delete O[D.id] } } function q() { ee(), h = !0, l !== c && (l = c, m(l.object)) } function ee() { c.geometry = null, c.program = null, c.wireframe = !1 } return { setup: u, reset: q, resetDefaultState: ee, dispose: Q, releaseStatesOfGeometry: v, releaseStatesOfProgram: w, initAttributes: x, enableAttribute: M, disableUnusedAttributes: L } } function Ip(s, e, t, n) { const i = n.isWebGL2; let r; function o(h) { r = h } function a(h, u) { s.drawArrays(r, h, u), t.update(u, r, 1) } function c(h, u, d) { if (d === 0) return; let m, g; if (i) m = s, g = "drawArraysInstanced"; else if (m = e.get("ANGLE_instanced_arrays"), g = "drawArraysInstancedANGLE", m === null) { console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."); return } m[g](r, h, u, d), t.update(u, r, d) } function l(h, u, d) { if (d === 0) return; const m = e.get("WEBGL_multi_draw"); if (m === null) for (let g = 0; g < d; g++)this.render(h[g], u[g]); else { m.multiDrawArraysWEBGL(r, h, 0, u, 0, d); let g = 0; for (let _ = 0; _ < d; _++)g += u[_]; t.update(g, r, 1) } } this.setMode = o, this.render = a, this.renderInstances = c, this.renderMultiDraw = l } function Dp(s, e, t) { let n; function i() { if (n !== void 0) return n; if (e.has("EXT_texture_filter_anisotropic") === !0) { const A = e.get("EXT_texture_filter_anisotropic"); n = s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT) } else n = 0; return n } function r(A) { if (A === "highp") { if (s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.HIGH_FLOAT).precision > 0 && s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.HIGH_FLOAT).precision > 0) return "highp"; A = "mediump" } return A === "mediump" && s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.MEDIUM_FLOAT).precision > 0 && s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp" } const o = typeof WebGL2RenderingContext < "u" && s.constructor.name === "WebGL2RenderingContext"; let a = t.precision !== void 0 ? t.precision : "highp"; const c = r(a); c !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", c, "instead."), a = c); const l = o || e.has("WEBGL_draw_buffers"), h = t.logarithmicDepthBuffer === !0, u = s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS), d = s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS), m = s.getParameter(s.MAX_TEXTURE_SIZE), g = s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE), _ = s.getParameter(s.MAX_VERTEX_ATTRIBS), f = s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS), p = s.getParameter(s.MAX_VARYING_VECTORS), T = s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS), x = d > 0, M = o || e.has("OES_texture_float"), I = x && M, L = o ? s.getParameter(s.MAX_SAMPLES) : 0; return { isWebGL2: o, drawBuffers: l, getMaxAnisotropy: i, getMaxPrecision: r, precision: a, logarithmicDepthBuffer: h, maxTextures: u, maxVertexTextures: d, maxTextureSize: m, maxCubemapSize: g, maxAttributes: _, maxVertexUniforms: f, maxVaryings: p, maxFragmentUniforms: T, vertexTextures: x, floatFragmentTextures: M, floatVertexTextures: I, maxSamples: L } } function Np(s) { const e = this; let t = null, n = 0, i = !1, r = !1; const o = new Cn, a = new qe, c = { value: null, needsUpdate: !1 }; this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function (u, d) { const m = u.length !== 0 || d || n !== 0 || i; return i = d, n = u.length, m }, this.beginShadows = function () { r = !0, h(null) }, this.endShadows = function () { r = !1 }, this.setGlobalState = function (u, d) { t = h(u, d, 0) }, this.setState = function (u, d, m) { const g = u.clippingPlanes, _ = u.clipIntersection, f = u.clipShadows, p = s.get(u); if (!i || g === null || g.length === 0 || r && !f) r ? h(null) : l(); else { const T = r ? 0 : n, x = T * 4; let M = p.clippingState || null; c.value = M, M = h(g, d, x, m); for (let I = 0; I !== x; ++I)M[I] = t[I]; p.clippingState = M, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += T } }; function l() { c.value !== t && (c.value = t, c.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0 } function h(u, d, m, g) { const _ = u !== null ? u.length : 0; let f = null; if (_ !== 0) { if (f = c.value, g !== !0 || f === null) { const p = m + _ * 4, T = d.matrixWorldInverse; a.getNormalMatrix(T), (f === null || f.length < p) && (f = new Float32Array(p)); for (let x = 0, M = m; x !== _; ++x, M += 4)o.copy(u[x]).applyMatrix4(T, a), o.normal.toArray(f, M), f[M + 3] = o.constant } c.value = f, c.needsUpdate = !0 } return e.numPlanes = _, e.numIntersection = 0, f } } function Up(s) { let e = new WeakMap; function t(o, a) { return a === ho ? o.mapping = Ni : a === uo && (o.mapping = Ui), o } function n(o) { if (o && o.isTexture) { const a = o.mapping; if (a === ho || a === uo) if (e.has(o)) { const c = e.get(o).texture; return t(c, o.mapping) } else { const c = o.image; if (c && c.height > 0) { const l = new qu(c.height); return l.fromEquirectangularTexture(s, o), e.set(o, l), o.addEventListener("dispose", i), t(l.texture, o.mapping) } else return null } } return o } function i(o) { const a = o.target; a.removeEventListener("dispose", i); const c = e.get(a); c !== void 0 && (e.delete(a), c.dispose()) } function r() { e = new WeakMap } return { get: n, dispose: r } } class No extends Rl { constructor(e = -1, t = 1, n = 1, i = -1, r = .1, o = 2e3) { super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = r, this.far = o, this.updateProjectionMatrix() } copy(e, t) { return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this } setViewOffset(e, t, n, i, r, o) { this.view === null && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = o, this.updateProjectionMatrix() } clearViewOffset() { this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix() } updateProjectionMatrix() { const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2; let r = n - e, o = n + e, a = i + t, c = i - t; if (this.view !== null && this.view.enabled) { const l = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom; r += l * this.view.offsetX, o = r + l * this.view.width, a -= h * this.view.offsetY, c = a - h * this.view.height } this.projectionMatrix.makeOrthographic(r, o, a, c, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert() } toJSON(e) { const t = super.toJSON(e); return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t } } const wi = 4, oc = [.125, .215, .35, .446, .526, .582], jn = 20, Vr = new No, ac = new De; let Wr = null, Xr = 0, qr = 0; const qn = (1 + Math.sqrt(5)) / 2, Ti = 1 / qn, cc = [new P(1, 1, 1), new P(-1, 1, 1), new P(1, 1, -1), new P(-1, 1, -1), new P(0, qn, Ti), new P(0, qn, -Ti), new P(Ti, 0, qn), new P(-Ti, 0, qn), new P(qn, Ti, 0), new P(-qn, Ti, 0)]; class lc { constructor(e) { this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial) } fromScene(e, t = 0, n = .1, i = 100) { Wr = this._renderer.getRenderTarget(), Xr = this._renderer.getActiveCubeFace(), qr = this._renderer.getActiveMipmapLevel(), this._setSize(256); const r = this._allocateTargets(); return r.depthBuffer = !0, this._sceneToCubeUV(e, n, i, r), t > 0 && this._blur(r, 0, 0, t), this._applyPMREM(r), this._cleanup(r), r } fromEquirectangular(e, t = null) { return this._fromTexture(e, t) } fromCubemap(e, t = null) { return this._fromTexture(e, t) } compileCubemapShader() { this._cubemapMaterial === null && (this._cubemapMaterial = dc(), this._compileMaterial(this._cubemapMaterial)) } compileEquirectangularShader() { this._equirectMaterial === null && (this._equirectMaterial = uc(), this._compileMaterial(this._equirectMaterial)) } dispose() { this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose() } _setSize(e) { this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax) } _dispose() { this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose(); for (let e = 0; e < this._lodPlanes.length; e++)this._lodPlanes[e].dispose() } _cleanup(e) { this._renderer.setRenderTarget(Wr, Xr, qr), e.scissorTest = !1, zs(e, 0, 0, e.width, e.height) } _fromTexture(e, t) { e.mapping === Ni || e.mapping === Ui ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Wr = this._renderer.getRenderTarget(), Xr = this._renderer.getActiveCubeFace(), qr = this._renderer.getActiveMipmapLevel(); const n = t || this._allocateTargets(); return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n } _allocateTargets() { const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = { magFilter: At, minFilter: At, generateMipmaps: !1, type: as, format: kt, colorSpace: vt, depthBuffer: !1 }, i = hc(e, t, n); if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) { this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = hc(e, t, n); const { _lodMax: r } = this; ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Op(r)), this._blurMaterial = Fp(r, e, t) } return i } _compileMaterial(e) { const t = new Pt(this._lodPlanes[0], e); this._renderer.compile(t, Vr) } _sceneToCubeUV(e, t, n, i) { const a = new Lt(90, 1, t, n), c = [1, -1, 1, 1, 1, 1], l = [1, 1, 1, -1, -1, -1], h = this._renderer, u = h.autoClear, d = h.toneMapping; h.getClearColor(ac), h.toneMapping = Nn, h.autoClear = !1; const m = new xn({ name: "PMREM.Background", side: Nt, depthWrite: !1, depthTest: !1 }), g = new Pt(new ms, m); let _ = !1; const f = e.background; f ? f.isColor && (m.color.copy(f), e.background = null, _ = !0) : (m.color.copy(ac), _ = !0); for (let p = 0; p < 6; p++) { const T = p % 3; T === 0 ? (a.up.set(0, c[p], 0), a.lookAt(l[p], 0, 0)) : T === 1 ? (a.up.set(0, 0, c[p]), a.lookAt(0, l[p], 0)) : (a.up.set(0, c[p], 0), a.lookAt(0, 0, l[p])); const x = this._cubeSize; zs(i, T * x, p > 2 ? x : 0, x, x), h.setRenderTarget(i), _ && h.render(g, a), h.render(e, a) } g.geometry.dispose(), g.material.dispose(), h.toneMapping = d, h.autoClear = u, e.background = f } _textureToCubeUV(e, t) { const n = this._renderer, i = e.mapping === Ni || e.mapping === Ui; i ? (this._cubemapMaterial === null && (this._cubemapMaterial = dc()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = uc()); const r = i ? this._cubemapMaterial : this._equirectMaterial, o = new Pt(this._lodPlanes[0], r), a = r.uniforms; a.envMap.value = e; const c = this._cubeSize; zs(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(o, Vr) } _applyPMREM(e) { const t = this._renderer, n = t.autoClear; t.autoClear = !1; for (let i = 1; i < this._lodPlanes.length; i++) { const r = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]), o = cc[(i - 1) % cc.length]; this._blur(e, i - 1, i, r, o) } t.autoClear = n } _blur(e, t, n, i, r) { const o = this._pingPongRenderTarget; this._halfBlur(e, o, t, n, i, "latitudinal", r), this._halfBlur(o, e, n, n, i, "longitudinal", r) } _halfBlur(e, t, n, i, r, o, a) { const c = this._renderer, l = this._blurMaterial; o !== "latitudinal" && o !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!"); const h = 3, u = new Pt(this._lodPlanes[i], l), d = l.uniforms, m = this._sizeLods[n] - 1, g = isFinite(r) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * jn - 1), _ = r / g, f = isFinite(r) ? 1 + Math.floor(h * _) : jn; f > jn && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${jn}`); const p = []; let T = 0; for (let A = 0; A < jn; ++A) { const z = A / _, Q = Math.exp(-z * z / 2); p.push(Q), A === 0 ? T += Q : A < f && (T += 2 * Q) } for (let A = 0; A < p.length; A++)p[A] = p[A] / T; d.envMap.value = e.texture, d.samples.value = f, d.weights.value = p, d.latitudinal.value = o === "latitudinal", a && (d.poleAxis.value = a); const { _lodMax: x } = this; d.dTheta.value = g, d.mipInt.value = x - n; const M = this._sizeLods[i], I = 3 * M * (i > x - wi ? i - x + wi : 0), L = 4 * (this._cubeSize - M); zs(t, I, L, 3 * M, 2 * M), c.setRenderTarget(t), c.render(u, Vr) } } function Op(s) { const e = [], t = [], n = []; let i = s; const r = s - wi + 1 + oc.length; for (let o = 0; o < r; o++) { const a = Math.pow(2, i); t.push(a); let c = 1 / a; o > s - wi ? c = oc[o - s + wi - 1] : o === 0 && (c = 0), n.push(c); const l = 1 / (a - 2), h = -l, u = 1 + l, d = [h, h, u, h, u, u, h, h, u, u, h, u], m = 6, g = 6, _ = 3, f = 2, p = 1, T = new Float32Array(_ * g * m), x = new Float32Array(f * g * m), M = new Float32Array(p * g * m); for (let L = 0; L < m; L++) { const A = L % 3 * 2 / 3 - 1, z = L > 2 ? 0 : -1, Q = [A, z, 0, A + 2 / 3, z, 0, A + 2 / 3, z + 1, 0, A, z, 0, A + 2 / 3, z + 1, 0, A, z + 1, 0]; T.set(Q, _ * g * L), x.set(d, f * g * L); const v = [L, L, L, L, L, L]; M.set(v, p * g * L) } const I = new $t; I.setAttribute("position", new It(T, _)), I.setAttribute("uv", new It(x, f)), I.setAttribute("faceIndex", new It(M, p)), e.push(I), i > wi && i-- } return { lodPlanes: e, sizeLods: t, sigmas: n } } function hc(s, e, t) { const n = new ti(s, e, t); return n.texture.mapping = ar, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n } function zs(s, e, t, n, i) { s.viewport.set(e, t, n, i), s.scissor.set(e, t, n, i) } function Fp(s, e, t) {
	const n = new Float32Array(jn), i = new P(0, 1, 0); return new Fn({
		name: "SphericalGaussianBlur", defines: { n: jn, CUBEUV_TEXEL_WIDTH: 1 / e, CUBEUV_TEXEL_HEIGHT: 1 / t, CUBEUV_MAX_MIP: `${s}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: n }, latitudinal: { value: !1 }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: i } }, vertexShader: Uo(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`, blending: Dn, depthTest: !1, depthWrite: !1
	})
} function uc() {
	return new Fn({
		name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: Uo(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`, blending: Dn, depthTest: !1, depthWrite: !1
	})
} function dc() {
	return new Fn({
		name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: Uo(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: Dn, depthTest: !1, depthWrite: !1
	})
} function Uo() {
	return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`} function Bp(s) { let e = new WeakMap, t = null; function n(a) { if (a && a.isTexture) { const c = a.mapping, l = c === ho || c === uo, h = c === Ni || c === Ui; if (l || h) if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) { a.needsPMREMUpdate = !1; let u = e.get(a); return t === null && (t = new lc(s)), u = l ? t.fromEquirectangular(a, u) : t.fromCubemap(a, u), e.set(a, u), u.texture } else { if (e.has(a)) return e.get(a).texture; { const u = a.image; if (l && u && u.height > 0 || h && u && i(u)) { t === null && (t = new lc(s)); const d = l ? t.fromEquirectangular(a) : t.fromCubemap(a); return e.set(a, d), a.addEventListener("dispose", r), d.texture } else return null } } } return a } function i(a) { let c = 0; const l = 6; for (let h = 0; h < l; h++)a[h] !== void 0 && c++; return c === l } function r(a) { const c = a.target; c.removeEventListener("dispose", r); const l = e.get(c); l !== void 0 && (e.delete(c), l.dispose()) } function o() { e = new WeakMap, t !== null && (t.dispose(), t = null) } return { get: n, dispose: o } } function zp(s) { const e = {}; function t(n) { if (e[n] !== void 0) return e[n]; let i; switch (n) { case "WEBGL_depth_texture": i = s.getExtension("WEBGL_depth_texture") || s.getExtension("MOZ_WEBGL_depth_texture") || s.getExtension("WEBKIT_WEBGL_depth_texture"); break; case "EXT_texture_filter_anisotropic": i = s.getExtension("EXT_texture_filter_anisotropic") || s.getExtension("MOZ_EXT_texture_filter_anisotropic") || s.getExtension("WEBKIT_EXT_texture_filter_anisotropic"); break; case "WEBGL_compressed_texture_s3tc": i = s.getExtension("WEBGL_compressed_texture_s3tc") || s.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"); break; case "WEBGL_compressed_texture_pvrtc": i = s.getExtension("WEBGL_compressed_texture_pvrtc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"); break; default: i = s.getExtension(n) }return e[n] = i, i } return { has: function (n) { return t(n) !== null }, init: function (n) { n.isWebGL2 ? (t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance")) : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture") }, get: function (n) { const i = t(n); return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), i } } } function Hp(s, e, t, n) { const i = {}, r = new WeakMap; function o(u) { const d = u.target; d.index !== null && e.remove(d.index); for (const g in d.attributes) e.remove(d.attributes[g]); for (const g in d.morphAttributes) { const _ = d.morphAttributes[g]; for (let f = 0, p = _.length; f < p; f++)e.remove(_[f]) } d.removeEventListener("dispose", o), delete i[d.id]; const m = r.get(d); m && (e.remove(m), r.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, t.memory.geometries-- } function a(u, d) { return i[d.id] === !0 || (d.addEventListener("dispose", o), i[d.id] = !0, t.memory.geometries++), d } function c(u) { const d = u.attributes; for (const g in d) e.update(d[g], s.ARRAY_BUFFER); const m = u.morphAttributes; for (const g in m) { const _ = m[g]; for (let f = 0, p = _.length; f < p; f++)e.update(_[f], s.ARRAY_BUFFER) } } function l(u) { const d = [], m = u.index, g = u.attributes.position; let _ = 0; if (m !== null) { const T = m.array; _ = m.version; for (let x = 0, M = T.length; x < M; x += 3) { const I = T[x + 0], L = T[x + 1], A = T[x + 2]; d.push(I, L, L, A, A, I) } } else if (g !== void 0) { const T = g.array; _ = g.version; for (let x = 0, M = T.length / 3 - 1; x < M; x += 3) { const I = x + 0, L = x + 1, A = x + 2; d.push(I, L, L, A, A, I) } } else return; const f = new (vl(d) ? Al : bl)(d, 1); f.version = _; const p = r.get(u); p && e.remove(p), r.set(u, f) } function h(u) { const d = r.get(u); if (d) { const m = u.index; m !== null && d.version < m.version && l(u) } else l(u); return r.get(u) } return { get: a, update: c, getWireframeAttribute: h } } function Gp(s, e, t, n) { const i = n.isWebGL2; let r; function o(m) { r = m } let a, c; function l(m) { a = m.type, c = m.bytesPerElement } function h(m, g) { s.drawElements(r, g, a, m * c), t.update(g, r, 1) } function u(m, g, _) { if (_ === 0) return; let f, p; if (i) f = s, p = "drawElementsInstanced"; else if (f = e.get("ANGLE_instanced_arrays"), p = "drawElementsInstancedANGLE", f === null) { console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."); return } f[p](r, g, a, m * c, _), t.update(g, r, _) } function d(m, g, _) { if (_ === 0) return; const f = e.get("WEBGL_multi_draw"); if (f === null) for (let p = 0; p < _; p++)this.render(m[p] / c, g[p]); else { f.multiDrawElementsWEBGL(r, g, 0, a, m, 0, _); let p = 0; for (let T = 0; T < _; T++)p += g[T]; t.update(p, r, 1) } } this.setMode = o, this.setIndex = l, this.render = h, this.renderInstances = u, this.renderMultiDraw = d } function kp(s) { const e = { geometries: 0, textures: 0 }, t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 }; function n(r, o, a) { switch (t.calls++, o) { case s.TRIANGLES: t.triangles += a * (r / 3); break; case s.LINES: t.lines += a * (r / 2); break; case s.LINE_STRIP: t.lines += a * (r - 1); break; case s.LINE_LOOP: t.lines += a * r; break; case s.POINTS: t.points += a * r; break; default: console.error("THREE.WebGLInfo: Unknown draw mode:", o); break } } function i() { t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0 } return { memory: e, render: t, programs: null, autoReset: !0, reset: i, update: n } } function Vp(s, e) { return s[0] - e[0] } function Wp(s, e) { return Math.abs(e[1]) - Math.abs(s[1]) } function Xp(s, e, t) { const n = {}, i = new Float32Array(8), r = new WeakMap, o = new nt, a = []; for (let l = 0; l < 8; l++)a[l] = [l, 0]; function c(l, h, u) { const d = l.morphTargetInfluences; if (e.isWebGL2 === !0) { const g = h.morphAttributes.position || h.morphAttributes.normal || h.morphAttributes.color, _ = g !== void 0 ? g.length : 0; let f = r.get(h); if (f === void 0 || f.count !== _) { let G = function () { ee.dispose(), r.delete(h), h.removeEventListener("dispose", G) }; var m = G; f !== void 0 && f.texture.dispose(); const x = h.morphAttributes.position !== void 0, M = h.morphAttributes.normal !== void 0, I = h.morphAttributes.color !== void 0, L = h.morphAttributes.position || [], A = h.morphAttributes.normal || [], z = h.morphAttributes.color || []; let Q = 0; x === !0 && (Q = 1), M === !0 && (Q = 2), I === !0 && (Q = 3); let v = h.attributes.position.count * Q, w = 1; v > e.maxTextureSize && (w = Math.ceil(v / e.maxTextureSize), v = e.maxTextureSize); const q = new Float32Array(v * w * 4 * _), ee = new Sl(q, v, w, _); ee.type = tn, ee.needsUpdate = !0; const D = Q * 4; for (let O = 0; O < _; O++) { const j = L[O], X = A[O], Y = z[O], K = v * w * 4 * O; for (let ne = 0; ne < j.count; ne++) { const he = ne * D; x === !0 && (o.fromBufferAttribute(j, ne), q[K + he + 0] = o.x, q[K + he + 1] = o.y, q[K + he + 2] = o.z, q[K + he + 3] = 0), M === !0 && (o.fromBufferAttribute(X, ne), q[K + he + 4] = o.x, q[K + he + 5] = o.y, q[K + he + 6] = o.z, q[K + he + 7] = 0), I === !0 && (o.fromBufferAttribute(Y, ne), q[K + he + 8] = o.x, q[K + he + 9] = o.y, q[K + he + 10] = o.z, q[K + he + 11] = Y.itemSize === 4 ? o.w : 1) } } f = { count: _, texture: ee, size: new ae(v, w) }, r.set(h, f), h.addEventListener("dispose", G) } let p = 0; for (let x = 0; x < d.length; x++)p += d[x]; const T = h.morphTargetsRelative ? 1 : 1 - p; u.getUniforms().setValue(s, "morphTargetBaseInfluence", T), u.getUniforms().setValue(s, "morphTargetInfluences", d), u.getUniforms().setValue(s, "morphTargetsTexture", f.texture, t), u.getUniforms().setValue(s, "morphTargetsTextureSize", f.size) } else { const g = d === void 0 ? 0 : d.length; let _ = n[h.id]; if (_ === void 0 || _.length !== g) { _ = []; for (let M = 0; M < g; M++)_[M] = [M, 0]; n[h.id] = _ } for (let M = 0; M < g; M++) { const I = _[M]; I[0] = M, I[1] = d[M] } _.sort(Wp); for (let M = 0; M < 8; M++)M < g && _[M][1] ? (a[M][0] = _[M][0], a[M][1] = _[M][1]) : (a[M][0] = Number.MAX_SAFE_INTEGER, a[M][1] = 0); a.sort(Vp); const f = h.morphAttributes.position, p = h.morphAttributes.normal; let T = 0; for (let M = 0; M < 8; M++) { const I = a[M], L = I[0], A = I[1]; L !== Number.MAX_SAFE_INTEGER && A ? (f && h.getAttribute("morphTarget" + M) !== f[L] && h.setAttribute("morphTarget" + M, f[L]), p && h.getAttribute("morphNormal" + M) !== p[L] && h.setAttribute("morphNormal" + M, p[L]), i[M] = A, T += A) : (f && h.hasAttribute("morphTarget" + M) === !0 && h.deleteAttribute("morphTarget" + M), p && h.hasAttribute("morphNormal" + M) === !0 && h.deleteAttribute("morphNormal" + M), i[M] = 0) } const x = h.morphTargetsRelative ? 1 : 1 - T; u.getUniforms().setValue(s, "morphTargetBaseInfluence", x), u.getUniforms().setValue(s, "morphTargetInfluences", i) } } return { update: c } } function qp(s, e, t, n) { let i = new WeakMap; function r(c) { const l = n.render.frame, h = c.geometry, u = e.get(c, h); if (i.get(u) !== l && (e.update(u), i.set(u, l)), c.isInstancedMesh && (c.hasEventListener("dispose", a) === !1 && c.addEventListener("dispose", a), i.get(c) !== l && (t.update(c.instanceMatrix, s.ARRAY_BUFFER), c.instanceColor !== null && t.update(c.instanceColor, s.ARRAY_BUFFER), i.set(c, l))), c.isSkinnedMesh) { const d = c.skeleton; i.get(d) !== l && (d.update(), i.set(d, l)) } return u } function o() { i = new WeakMap } function a(c) { const l = c.target; l.removeEventListener("dispose", a), t.remove(l.instanceMatrix), l.instanceColor !== null && t.remove(l.instanceColor) } return { update: r, dispose: o } } class Pl extends xt { constructor(e, t, n, i, r, o, a, c, l, h) { if (h = h !== void 0 ? h : $n, h !== $n && h !== Fi) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"); n === void 0 && h === $n && (n = Pn), n === void 0 && h === Fi && (n = Jn), super(null, i, r, o, a, c, h, n, l), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = a !== void 0 ? a : _t, this.minFilter = c !== void 0 ? c : _t, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null } copy(e) { return super.copy(e), this.compareFunction = e.compareFunction, this } toJSON(e) { const t = super.toJSON(e); return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t } } const Il = new xt, Dl = new Pl(1, 1); Dl.compareFunction = _l; const Nl = new Sl, Ul = new Cu, Ol = new Cl, fc = [], pc = [], mc = new Float32Array(16), gc = new Float32Array(9), _c = new Float32Array(4); function Vi(s, e, t) { const n = s[0]; if (n <= 0 || n > 0) return s; const i = e * t; let r = fc[i]; if (r === void 0 && (r = new Float32Array(i), fc[i] = r), e !== 0) { n.toArray(r, 0); for (let o = 1, a = 0; o !== e; ++o)a += t, s[o].toArray(r, a) } return r } function ft(s, e) { if (s.length !== e.length) return !1; for (let t = 0, n = s.length; t < n; t++)if (s[t] !== e[t]) return !1; return !0 } function pt(s, e) { for (let t = 0, n = e.length; t < n; t++)s[t] = e[t] } function ur(s, e) { let t = pc[e]; t === void 0 && (t = new Int32Array(e), pc[e] = t); for (let n = 0; n !== e; ++n)t[n] = s.allocateTextureUnit(); return t } function Yp(s, e) { const t = this.cache; t[0] !== e && (s.uniform1f(this.addr, e), t[0] = e) } function jp(s, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (s.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y); else { if (ft(t, e)) return; s.uniform2fv(this.addr, e), pt(t, e) } } function Kp(s, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z); else if (e.r !== void 0) (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (s.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b); else { if (ft(t, e)) return; s.uniform3fv(this.addr, e), pt(t, e) } } function Zp(s, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w); else { if (ft(t, e)) return; s.uniform4fv(this.addr, e), pt(t, e) } } function Jp(s, e) { const t = this.cache, n = e.elements; if (n === void 0) { if (ft(t, e)) return; s.uniformMatrix2fv(this.addr, !1, e), pt(t, e) } else { if (ft(t, n)) return; _c.set(n), s.uniformMatrix2fv(this.addr, !1, _c), pt(t, n) } } function $p(s, e) { const t = this.cache, n = e.elements; if (n === void 0) { if (ft(t, e)) return; s.uniformMatrix3fv(this.addr, !1, e), pt(t, e) } else { if (ft(t, n)) return; gc.set(n), s.uniformMatrix3fv(this.addr, !1, gc), pt(t, n) } } function Qp(s, e) { const t = this.cache, n = e.elements; if (n === void 0) { if (ft(t, e)) return; s.uniformMatrix4fv(this.addr, !1, e), pt(t, e) } else { if (ft(t, n)) return; mc.set(n), s.uniformMatrix4fv(this.addr, !1, mc), pt(t, n) } } function em(s, e) { const t = this.cache; t[0] !== e && (s.uniform1i(this.addr, e), t[0] = e) } function tm(s, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (s.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y); else { if (ft(t, e)) return; s.uniform2iv(this.addr, e), pt(t, e) } } function nm(s, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z); else { if (ft(t, e)) return; s.uniform3iv(this.addr, e), pt(t, e) } } function im(s, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w); else { if (ft(t, e)) return; s.uniform4iv(this.addr, e), pt(t, e) } } function sm(s, e) { const t = this.cache; t[0] !== e && (s.uniform1ui(this.addr, e), t[0] = e) } function rm(s, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (s.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y); else { if (ft(t, e)) return; s.uniform2uiv(this.addr, e), pt(t, e) } } function om(s, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z); else { if (ft(t, e)) return; s.uniform3uiv(this.addr, e), pt(t, e) } } function am(s, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w); else { if (ft(t, e)) return; s.uniform4uiv(this.addr, e), pt(t, e) } } function cm(s, e, t) { const n = this.cache, i = t.allocateTextureUnit(); n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i); const r = this.type === s.SAMPLER_2D_SHADOW ? Dl : Il; t.setTexture2D(e || r, i) } function lm(s, e, t) { const n = this.cache, i = t.allocateTextureUnit(); n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || Ul, i) } function hm(s, e, t) { const n = this.cache, i = t.allocateTextureUnit(); n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || Ol, i) } function um(s, e, t) { const n = this.cache, i = t.allocateTextureUnit(); n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || Nl, i) } function dm(s) { switch (s) { case 5126: return Yp; case 35664: return jp; case 35665: return Kp; case 35666: return Zp; case 35674: return Jp; case 35675: return $p; case 35676: return Qp; case 5124: case 35670: return em; case 35667: case 35671: return tm; case 35668: case 35672: return nm; case 35669: case 35673: return im; case 5125: return sm; case 36294: return rm; case 36295: return om; case 36296: return am; case 35678: case 36198: case 36298: case 36306: case 35682: return cm; case 35679: case 36299: case 36307: return lm; case 35680: case 36300: case 36308: case 36293: return hm; case 36289: case 36303: case 36311: case 36292: return um } } function fm(s, e) { s.uniform1fv(this.addr, e) } function pm(s, e) { const t = Vi(e, this.size, 2); s.uniform2fv(this.addr, t) } function mm(s, e) { const t = Vi(e, this.size, 3); s.uniform3fv(this.addr, t) } function gm(s, e) { const t = Vi(e, this.size, 4); s.uniform4fv(this.addr, t) } function _m(s, e) { const t = Vi(e, this.size, 4); s.uniformMatrix2fv(this.addr, !1, t) } function xm(s, e) { const t = Vi(e, this.size, 9); s.uniformMatrix3fv(this.addr, !1, t) } function vm(s, e) { const t = Vi(e, this.size, 16); s.uniformMatrix4fv(this.addr, !1, t) } function ym(s, e) { s.uniform1iv(this.addr, e) } function Mm(s, e) { s.uniform2iv(this.addr, e) } function Sm(s, e) { s.uniform3iv(this.addr, e) } function Em(s, e) { s.uniform4iv(this.addr, e) } function Tm(s, e) { s.uniform1uiv(this.addr, e) } function bm(s, e) { s.uniform2uiv(this.addr, e) } function Am(s, e) { s.uniform3uiv(this.addr, e) } function wm(s, e) { s.uniform4uiv(this.addr, e) } function Rm(s, e, t) { const n = this.cache, i = e.length, r = ur(t, i); ft(n, r) || (s.uniform1iv(this.addr, r), pt(n, r)); for (let o = 0; o !== i; ++o)t.setTexture2D(e[o] || Il, r[o]) } function Cm(s, e, t) { const n = this.cache, i = e.length, r = ur(t, i); ft(n, r) || (s.uniform1iv(this.addr, r), pt(n, r)); for (let o = 0; o !== i; ++o)t.setTexture3D(e[o] || Ul, r[o]) } function Lm(s, e, t) { const n = this.cache, i = e.length, r = ur(t, i); ft(n, r) || (s.uniform1iv(this.addr, r), pt(n, r)); for (let o = 0; o !== i; ++o)t.setTextureCube(e[o] || Ol, r[o]) } function Pm(s, e, t) { const n = this.cache, i = e.length, r = ur(t, i); ft(n, r) || (s.uniform1iv(this.addr, r), pt(n, r)); for (let o = 0; o !== i; ++o)t.setTexture2DArray(e[o] || Nl, r[o]) } function Im(s) { switch (s) { case 5126: return fm; case 35664: return pm; case 35665: return mm; case 35666: return gm; case 35674: return _m; case 35675: return xm; case 35676: return vm; case 5124: case 35670: return ym; case 35667: case 35671: return Mm; case 35668: case 35672: return Sm; case 35669: case 35673: return Em; case 5125: return Tm; case 36294: return bm; case 36295: return Am; case 36296: return wm; case 35678: case 36198: case 36298: case 36306: case 35682: return Rm; case 35679: case 36299: case 36307: return Cm; case 35680: case 36300: case 36308: case 36293: return Lm; case 36289: case 36303: case 36311: case 36292: return Pm } } class Dm { constructor(e, t, n) { this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = dm(t.type) } } class Nm { constructor(e, t, n) { this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = Im(t.type) } } class Um { constructor(e) { this.id = e, this.seq = [], this.map = {} } setValue(e, t, n) { const i = this.seq; for (let r = 0, o = i.length; r !== o; ++r) { const a = i[r]; a.setValue(e, t[a.id], n) } } } const Yr = /(\w+)(\])?(\[|\.)?/g; function xc(s, e) { s.seq.push(e), s.map[e.id] = e } function Om(s, e, t) { const n = s.name, i = n.length; for (Yr.lastIndex = 0; ;) { const r = Yr.exec(n), o = Yr.lastIndex; let a = r[1]; const c = r[2] === "]", l = r[3]; if (c && (a = a | 0), l === void 0 || l === "[" && o + 2 === i) { xc(t, l === void 0 ? new Dm(a, s, e) : new Nm(a, s, e)); break } else { let u = t.map[a]; u === void 0 && (u = new Um(a), xc(t, u)), t = u } } } class Js { constructor(e, t) { this.seq = [], this.map = {}; const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS); for (let i = 0; i < n; ++i) { const r = e.getActiveUniform(t, i), o = e.getUniformLocation(t, r.name); Om(r, o, this) } } setValue(e, t, n, i) { const r = this.map[t]; r !== void 0 && r.setValue(e, n, i) } setOptional(e, t, n) { const i = t[n]; i !== void 0 && this.setValue(e, n, i) } static upload(e, t, n, i) { for (let r = 0, o = t.length; r !== o; ++r) { const a = t[r], c = n[a.id]; c.needsUpdate !== !1 && a.setValue(e, c.value, i) } } static seqWithValue(e, t) { const n = []; for (let i = 0, r = e.length; i !== r; ++i) { const o = e[i]; o.id in t && n.push(o) } return n } } function vc(s, e, t) { const n = s.createShader(e); return s.shaderSource(n, t), s.compileShader(n), n } const Fm = 37297; let Bm = 0; function zm(s, e) {
	const t = s.split(`
`), n = [], i = Math.max(e - 6, 0), r = Math.min(e + 6, t.length); for (let o = i; o < r; o++) { const a = o + 1; n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`) } return n.join(`
`)
} function Hm(s) { const e = $e.getPrimaries($e.workingColorSpace), t = $e.getPrimaries(s); let n; switch (e === t ? n = "" : e === ir && t === nr ? n = "LinearDisplayP3ToLinearSRGB" : e === nr && t === ir && (n = "LinearSRGBToLinearDisplayP3"), s) { case vt: case cr: return [n, "LinearTransferOETF"]; case ct: case Po: return [n, "sRGBTransferOETF"]; default: return console.warn("THREE.WebGLProgram: Unsupported color space:", s), [n, "LinearTransferOETF"] } } function yc(s, e, t) {
	const n = s.getShaderParameter(e, s.COMPILE_STATUS), i = s.getShaderInfoLog(e).trim(); if (n && i === "") return ""; const r = /ERROR: 0:(\d+)/.exec(i); if (r) {
		const o = parseInt(r[1]); return t.toUpperCase() + `

`+ i + `

`+ zm(s.getShaderSource(e), o)
	} else return i
} function Gm(s, e) { const t = Hm(e); return `vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }` } function km(s, e) { let t; switch (e) { case Fh: t = "Linear"; break; case Bh: t = "Reinhard"; break; case zh: t = "OptimizedCineon"; break; case Hh: t = "ACESFilmic"; break; case kh: t = "AgX"; break; case Gh: t = "Custom"; break; default: console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear" }return "vec3 " + s + "( vec3 color ) { return " + t + "ToneMapping( color ); }" } function Vm(s) {
	return [s.extensionDerivatives || s.envMapCubeUVHeight || s.bumpMap || s.normalMapTangentSpace || s.clearcoatNormalMap || s.flatShading || s.alphaToCoverage || s.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "", (s.extensionFragDepth || s.logarithmicDepthBuffer) && s.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", s.extensionDrawBuffers && s.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (s.extensionShaderTextureLOD || s.envMap || s.transmission) && s.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Ri).join(`
`)
} function Wm(s) {
	return [s.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", s.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(Ri).join(`
`)
} function Xm(s) {
	const e = []; for (const t in s) { const n = s[t]; n !== !1 && e.push("#define " + t + " " + n) } return e.join(`
`)
} function qm(s, e) { const t = {}, n = s.getProgramParameter(e, s.ACTIVE_ATTRIBUTES); for (let i = 0; i < n; i++) { const r = s.getActiveAttrib(e, i), o = r.name; let a = 1; r.type === s.FLOAT_MAT2 && (a = 2), r.type === s.FLOAT_MAT3 && (a = 3), r.type === s.FLOAT_MAT4 && (a = 4), t[o] = { type: r.type, location: s.getAttribLocation(e, o), locationSize: a } } return t } function Ri(s) { return s !== "" } function Mc(s, e) { const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps; return s.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows) } function Sc(s, e) { return s.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection) } const Ym = /^[ \t]*#include +<([\w\d./]+)>/gm; function xo(s) { return s.replace(Ym, Km) } const jm = new Map([["encodings_fragment", "colorspace_fragment"], ["encodings_pars_fragment", "colorspace_pars_fragment"], ["output_fragment", "opaque_fragment"]]); function Km(s, e) { let t = Ge[e]; if (t === void 0) { const n = jm.get(e); if (n !== void 0) t = Ge[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n); else throw new Error("Can not resolve #include <" + e + ">") } return xo(t) } const Zm = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g; function Ec(s) { return s.replace(Zm, Jm) } function Jm(s, e, t, n) { let i = ""; for (let r = parseInt(e); r < parseInt(t); r++)i += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r); return i } function Tc(s) {
	let e = `precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	`; return s.isWebGL2 && (e += `precision ${s.precision} sampler3D;
		precision ${s.precision} sampler2DArray;
		precision ${s.precision} sampler2DShadow;
		precision ${s.precision} samplerCubeShadow;
		precision ${s.precision} sampler2DArrayShadow;
		precision ${s.precision} isampler2D;
		precision ${s.precision} isampler3D;
		precision ${s.precision} isamplerCube;
		precision ${s.precision} isampler2DArray;
		precision ${s.precision} usampler2D;
		precision ${s.precision} usampler3D;
		precision ${s.precision} usamplerCube;
		precision ${s.precision} usampler2DArray;
		`), s.precision === "highp" ? e += `
#define HIGH_PRECISION`: s.precision === "mediump" ? e += `
#define MEDIUM_PRECISION`: s.precision === "lowp" && (e += `
#define LOW_PRECISION`), e
} function $m(s) { let e = "SHADOWMAP_TYPE_BASIC"; return s.shadowMapType === ol ? e = "SHADOWMAP_TYPE_PCF" : s.shadowMapType === uh ? e = "SHADOWMAP_TYPE_PCF_SOFT" : s.shadowMapType === mn && (e = "SHADOWMAP_TYPE_VSM"), e } function Qm(s) { let e = "ENVMAP_TYPE_CUBE"; if (s.envMap) switch (s.envMapMode) { case Ni: case Ui: e = "ENVMAP_TYPE_CUBE"; break; case ar: e = "ENVMAP_TYPE_CUBE_UV"; break }return e } function eg(s) { let e = "ENVMAP_MODE_REFLECTION"; if (s.envMap) switch (s.envMapMode) { case Ui: e = "ENVMAP_MODE_REFRACTION"; break }return e } function tg(s) { let e = "ENVMAP_BLENDING_NONE"; if (s.envMap) switch (s.combine) { case Ro: e = "ENVMAP_BLENDING_MULTIPLY"; break; case Uh: e = "ENVMAP_BLENDING_MIX"; break; case Oh: e = "ENVMAP_BLENDING_ADD"; break }return e } function ng(s) { const e = s.envMapCubeUVHeight; if (e === null) return null; const t = Math.log2(e) - 2, n = 1 / e; return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t } } function ig(s, e, t, n) {
	const i = s.getContext(), r = t.defines; let o = t.vertexShader, a = t.fragmentShader; const c = $m(t), l = Qm(t), h = eg(t), u = tg(t), d = ng(t), m = t.isWebGL2 ? "" : Vm(t), g = Wm(t), _ = Xm(r), f = i.createProgram(); let p, T, x = t.glslVersion ? "#version " + t.glslVersion + `
`: ""; t.isRawShaderMaterial ? (p = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, _].filter(Ri).join(`
`), p.length > 0 && (p += `
`), T = [m, "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, _].filter(Ri).join(`
`), T.length > 0 && (T += `
`)) : (p = [Tc(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, _, t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", t.batching ? "#define USE_BATCHING" : "", t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + h : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.mapUv ? "#define MAP_UV " + t.mapUv : "", t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "", t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "", t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "", t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "", t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "", t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "", t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "", t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "", t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "", t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "", t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "", t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "", t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "", t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "", t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "", t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "", t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "", t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "", t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "", t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "", t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "", t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "", t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "", t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "", t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "", t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + c : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.useLegacyLights ? "#define LEGACY_LIGHTS" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(Ri).join(`
`), T = [m, Tc(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, _, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + l : "", t.envMap ? "#define " + h : "", t.envMap ? "#define " + u : "", d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "", d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "", d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescence ? "#define USE_IRIDESCENCE" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + c : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.useLegacyLights ? "#define LEGACY_LIGHTS" : "", t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== Nn ? "#define TONE_MAPPING" : "", t.toneMapping !== Nn ? Ge.tonemapping_pars_fragment : "", t.toneMapping !== Nn ? km("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.opaque ? "#define OPAQUE" : "", Ge.colorspace_pars_fragment, Gm("linearToOutputTexel", t.outputColorSpace), t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(Ri).join(`
`)), o = xo(o), o = Mc(o, t), o = Sc(o, t), a = xo(a), a = Mc(a, t), a = Sc(a, t), o = Ec(o), a = Ec(a), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (x = `#version 300 es
`, p = [g, "precision mediump sampler2DArray;", "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
`+ p, T = ["precision mediump sampler2DArray;", "#define varying in", t.glslVersion === Ha ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === Ha ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
`+ T); const M = x + p + o, I = x + T + a, L = vc(i, i.VERTEX_SHADER, M), A = vc(i, i.FRAGMENT_SHADER, I); i.attachShader(f, L), i.attachShader(f, A), t.index0AttributeName !== void 0 ? i.bindAttribLocation(f, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(f, 0, "position"), i.linkProgram(f); function z(q) {
		if (s.debug.checkShaderErrors) {
			const ee = i.getProgramInfoLog(f).trim(), D = i.getShaderInfoLog(L).trim(), G = i.getShaderInfoLog(A).trim(); let O = !0, j = !0; if (i.getProgramParameter(f, i.LINK_STATUS) === !1) if (O = !1, typeof s.debug.onShaderError == "function") s.debug.onShaderError(i, f, L, A); else {
				const X = yc(i, L, "vertex"), Y = yc(i, A, "fragment"); console.error("THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(f, i.VALIDATE_STATUS) + `

Material Name: `+ q.name + `
Material Type: `+ q.type + `

Program Info Log: `+ ee + `
`+ X + `
`+ Y)
			} else ee !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", ee) : (D === "" || G === "") && (j = !1); j && (q.diagnostics = { runnable: O, programLog: ee, vertexShader: { log: D, prefix: p }, fragmentShader: { log: G, prefix: T } })
		} i.deleteShader(L), i.deleteShader(A), Q = new Js(i, f), v = qm(i, f)
	} let Q; this.getUniforms = function () { return Q === void 0 && z(this), Q }; let v; this.getAttributes = function () { return v === void 0 && z(this), v }; let w = t.rendererExtensionParallelShaderCompile === !1; return this.isReady = function () { return w === !1 && (w = i.getProgramParameter(f, Fm)), w }, this.destroy = function () { n.releaseStatesOfProgram(this), i.deleteProgram(f), this.program = void 0 }, this.type = t.shaderType, this.name = t.shaderName, this.id = Bm++, this.cacheKey = e, this.usedTimes = 1, this.program = f, this.vertexShader = L, this.fragmentShader = A, this
} let sg = 0; class rg { constructor() { this.shaderCache = new Map, this.materialCache = new Map } update(e) { const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), r = this._getShaderStage(n), o = this._getShaderCacheForMaterial(e); return o.has(i) === !1 && (o.add(i), i.usedTimes++), o.has(r) === !1 && (o.add(r), r.usedTimes++), this } remove(e) { const t = this.materialCache.get(e); for (const n of t) n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code); return this.materialCache.delete(e), this } getVertexShaderID(e) { return this._getShaderStage(e.vertexShader).id } getFragmentShaderID(e) { return this._getShaderStage(e.fragmentShader).id } dispose() { this.shaderCache.clear(), this.materialCache.clear() } _getShaderCacheForMaterial(e) { const t = this.materialCache; let n = t.get(e); return n === void 0 && (n = new Set, t.set(e, n)), n } _getShaderStage(e) { const t = this.shaderCache; let n = t.get(e); return n === void 0 && (n = new og(e), t.set(e, n)), n } } class og { constructor(e) { this.id = sg++, this.code = e, this.usedTimes = 0 } } function ag(s, e, t, n, i, r, o) { const a = new El, c = new rg, l = new Set, h = [], u = i.isWebGL2, d = i.logarithmicDepthBuffer, m = i.vertexTextures; let g = i.precision; const _ = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" }; function f(v) { return l.add(v), v === 0 ? "uv" : `uv${v}` } function p(v, w, q, ee, D) { const G = ee.fog, O = D.geometry, j = v.isMeshStandardMaterial ? ee.environment : null, X = (v.isMeshStandardMaterial ? t : e).get(v.envMap || j), Y = X && X.mapping === ar ? X.image.height : null, K = _[v.type]; v.precision !== null && (g = i.getMaxPrecision(v.precision), g !== v.precision && console.warn("THREE.WebGLProgram.getParameters:", v.precision, "not supported, using", g, "instead.")); const ne = O.morphAttributes.position || O.morphAttributes.normal || O.morphAttributes.color, he = ne !== void 0 ? ne.length : 0; let Pe = 0; O.morphAttributes.position !== void 0 && (Pe = 1), O.morphAttributes.normal !== void 0 && (Pe = 2), O.morphAttributes.color !== void 0 && (Pe = 3); let k, ie, ge, Me; if (K) { const Ye = Qt[K]; k = Ye.vertexShader, ie = Ye.fragmentShader } else k = v.vertexShader, ie = v.fragmentShader, c.update(v), ge = c.getVertexShaderID(v), Me = c.getFragmentShaderID(v); const Te = s.getRenderTarget(), ve = D.isInstancedMesh === !0, Oe = D.isBatchedMesh === !0, Ae = !!v.map, C = !!v.matcap, le = !!X, V = !!v.aoMap, oe = !!v.lightMap, W = !!v.bumpMap, Ee = !!v.normalMap, pe = !!v.displacementMap, S = !!v.emissiveMap, y = !!v.metalnessMap, N = !!v.roughnessMap, te = v.anisotropy > 0, J = v.clearcoat > 0, Z = v.iridescence > 0, ye = v.sheen > 0, de = v.transmission > 0, _e = te && !!v.anisotropyMap, Ce = J && !!v.clearcoatMap, Fe = J && !!v.clearcoatNormalMap, $ = J && !!v.clearcoatRoughnessMap, Ke = Z && !!v.iridescenceMap, ke = Z && !!v.iridescenceThicknessMap, Ne = ye && !!v.sheenColorMap, we = ye && !!v.sheenRoughnessMap, me = !!v.specularMap, ze = !!v.specularColorMap, R = !!v.specularIntensityMap, ce = de && !!v.transmissionMap, fe = de && !!v.thicknessMap, Re = !!v.gradientMap, b = !!v.alphaMap, re = v.alphaTest > 0, se = !!v.alphaHash, Se = !!v.extensions; let Le = Nn; v.toneMapped && (Te === null || Te.isXRRenderTarget === !0) && (Le = s.toneMapping); const Ze = { isWebGL2: u, shaderID: K, shaderType: v.type, shaderName: v.name, vertexShader: k, fragmentShader: ie, defines: v.defines, customVertexShaderID: ge, customFragmentShaderID: Me, isRawShaderMaterial: v.isRawShaderMaterial === !0, glslVersion: v.glslVersion, precision: g, batching: Oe, instancing: ve, instancingColor: ve && D.instanceColor !== null, supportsVertexTextures: m, outputColorSpace: Te === null ? s.outputColorSpace : Te.isXRRenderTarget === !0 ? Te.texture.colorSpace : vt, alphaToCoverage: !!v.alphaToCoverage, map: Ae, matcap: C, envMap: le, envMapMode: le && X.mapping, envMapCubeUVHeight: Y, aoMap: V, lightMap: oe, bumpMap: W, normalMap: Ee, displacementMap: m && pe, emissiveMap: S, normalMapObjectSpace: Ee && v.normalMapType === nu, normalMapTangentSpace: Ee && v.normalMapType === Lo, metalnessMap: y, roughnessMap: N, anisotropy: te, anisotropyMap: _e, clearcoat: J, clearcoatMap: Ce, clearcoatNormalMap: Fe, clearcoatRoughnessMap: $, iridescence: Z, iridescenceMap: Ke, iridescenceThicknessMap: ke, sheen: ye, sheenColorMap: Ne, sheenRoughnessMap: we, specularMap: me, specularColorMap: ze, specularIntensityMap: R, transmission: de, transmissionMap: ce, thicknessMap: fe, gradientMap: Re, opaque: v.transparent === !1 && v.blending === Li && v.alphaToCoverage === !1, alphaMap: b, alphaTest: re, alphaHash: se, combine: v.combine, mapUv: Ae && f(v.map.channel), aoMapUv: V && f(v.aoMap.channel), lightMapUv: oe && f(v.lightMap.channel), bumpMapUv: W && f(v.bumpMap.channel), normalMapUv: Ee && f(v.normalMap.channel), displacementMapUv: pe && f(v.displacementMap.channel), emissiveMapUv: S && f(v.emissiveMap.channel), metalnessMapUv: y && f(v.metalnessMap.channel), roughnessMapUv: N && f(v.roughnessMap.channel), anisotropyMapUv: _e && f(v.anisotropyMap.channel), clearcoatMapUv: Ce && f(v.clearcoatMap.channel), clearcoatNormalMapUv: Fe && f(v.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: $ && f(v.clearcoatRoughnessMap.channel), iridescenceMapUv: Ke && f(v.iridescenceMap.channel), iridescenceThicknessMapUv: ke && f(v.iridescenceThicknessMap.channel), sheenColorMapUv: Ne && f(v.sheenColorMap.channel), sheenRoughnessMapUv: we && f(v.sheenRoughnessMap.channel), specularMapUv: me && f(v.specularMap.channel), specularColorMapUv: ze && f(v.specularColorMap.channel), specularIntensityMapUv: R && f(v.specularIntensityMap.channel), transmissionMapUv: ce && f(v.transmissionMap.channel), thicknessMapUv: fe && f(v.thicknessMap.channel), alphaMapUv: b && f(v.alphaMap.channel), vertexTangents: !!O.attributes.tangent && (Ee || te), vertexColors: v.vertexColors, vertexAlphas: v.vertexColors === !0 && !!O.attributes.color && O.attributes.color.itemSize === 4, pointsUvs: D.isPoints === !0 && !!O.attributes.uv && (Ae || b), fog: !!G, useFog: v.fog === !0, fogExp2: !!G && G.isFogExp2, flatShading: v.flatShading === !0, sizeAttenuation: v.sizeAttenuation === !0, logarithmicDepthBuffer: d, skinning: D.isSkinnedMesh === !0, morphTargets: O.morphAttributes.position !== void 0, morphNormals: O.morphAttributes.normal !== void 0, morphColors: O.morphAttributes.color !== void 0, morphTargetsCount: he, morphTextureStride: Pe, numDirLights: w.directional.length, numPointLights: w.point.length, numSpotLights: w.spot.length, numSpotLightMaps: w.spotLightMap.length, numRectAreaLights: w.rectArea.length, numHemiLights: w.hemi.length, numDirLightShadows: w.directionalShadowMap.length, numPointLightShadows: w.pointShadowMap.length, numSpotLightShadows: w.spotShadowMap.length, numSpotLightShadowsWithMaps: w.numSpotLightShadowsWithMaps, numLightProbes: w.numLightProbes, numClippingPlanes: o.numPlanes, numClipIntersection: o.numIntersection, dithering: v.dithering, shadowMapEnabled: s.shadowMap.enabled && q.length > 0, shadowMapType: s.shadowMap.type, toneMapping: Le, useLegacyLights: s._useLegacyLights, decodeVideoTexture: Ae && v.map.isVideoTexture === !0 && $e.getTransfer(v.map.colorSpace) === it, premultipliedAlpha: v.premultipliedAlpha, doubleSided: v.side === en, flipSided: v.side === Nt, useDepthPacking: v.depthPacking >= 0, depthPacking: v.depthPacking || 0, index0AttributeName: v.index0AttributeName, extensionDerivatives: Se && v.extensions.derivatives === !0, extensionFragDepth: Se && v.extensions.fragDepth === !0, extensionDrawBuffers: Se && v.extensions.drawBuffers === !0, extensionShaderTextureLOD: Se && v.extensions.shaderTextureLOD === !0, extensionClipCullDistance: Se && v.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"), extensionMultiDraw: Se && v.extensions.multiDraw === !0 && n.has("WEBGL_multi_draw"), rendererExtensionFragDepth: u || n.has("EXT_frag_depth"), rendererExtensionDrawBuffers: u || n.has("WEBGL_draw_buffers"), rendererExtensionShaderTextureLod: u || n.has("EXT_shader_texture_lod"), rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"), customProgramCacheKey: v.customProgramCacheKey() }; return Ze.vertexUv1s = l.has(1), Ze.vertexUv2s = l.has(2), Ze.vertexUv3s = l.has(3), l.clear(), Ze } function T(v) { const w = []; if (v.shaderID ? w.push(v.shaderID) : (w.push(v.customVertexShaderID), w.push(v.customFragmentShaderID)), v.defines !== void 0) for (const q in v.defines) w.push(q), w.push(v.defines[q]); return v.isRawShaderMaterial === !1 && (x(w, v), M(w, v), w.push(s.outputColorSpace)), w.push(v.customProgramCacheKey), w.join() } function x(v, w) { v.push(w.precision), v.push(w.outputColorSpace), v.push(w.envMapMode), v.push(w.envMapCubeUVHeight), v.push(w.mapUv), v.push(w.alphaMapUv), v.push(w.lightMapUv), v.push(w.aoMapUv), v.push(w.bumpMapUv), v.push(w.normalMapUv), v.push(w.displacementMapUv), v.push(w.emissiveMapUv), v.push(w.metalnessMapUv), v.push(w.roughnessMapUv), v.push(w.anisotropyMapUv), v.push(w.clearcoatMapUv), v.push(w.clearcoatNormalMapUv), v.push(w.clearcoatRoughnessMapUv), v.push(w.iridescenceMapUv), v.push(w.iridescenceThicknessMapUv), v.push(w.sheenColorMapUv), v.push(w.sheenRoughnessMapUv), v.push(w.specularMapUv), v.push(w.specularColorMapUv), v.push(w.specularIntensityMapUv), v.push(w.transmissionMapUv), v.push(w.thicknessMapUv), v.push(w.combine), v.push(w.fogExp2), v.push(w.sizeAttenuation), v.push(w.morphTargetsCount), v.push(w.morphAttributeCount), v.push(w.numDirLights), v.push(w.numPointLights), v.push(w.numSpotLights), v.push(w.numSpotLightMaps), v.push(w.numHemiLights), v.push(w.numRectAreaLights), v.push(w.numDirLightShadows), v.push(w.numPointLightShadows), v.push(w.numSpotLightShadows), v.push(w.numSpotLightShadowsWithMaps), v.push(w.numLightProbes), v.push(w.shadowMapType), v.push(w.toneMapping), v.push(w.numClippingPlanes), v.push(w.numClipIntersection), v.push(w.depthPacking) } function M(v, w) { a.disableAll(), w.isWebGL2 && a.enable(0), w.supportsVertexTextures && a.enable(1), w.instancing && a.enable(2), w.instancingColor && a.enable(3), w.matcap && a.enable(4), w.envMap && a.enable(5), w.normalMapObjectSpace && a.enable(6), w.normalMapTangentSpace && a.enable(7), w.clearcoat && a.enable(8), w.iridescence && a.enable(9), w.alphaTest && a.enable(10), w.vertexColors && a.enable(11), w.vertexAlphas && a.enable(12), w.vertexUv1s && a.enable(13), w.vertexUv2s && a.enable(14), w.vertexUv3s && a.enable(15), w.vertexTangents && a.enable(16), w.anisotropy && a.enable(17), w.alphaHash && a.enable(18), w.batching && a.enable(19), v.push(a.mask), a.disableAll(), w.fog && a.enable(0), w.useFog && a.enable(1), w.flatShading && a.enable(2), w.logarithmicDepthBuffer && a.enable(3), w.skinning && a.enable(4), w.morphTargets && a.enable(5), w.morphNormals && a.enable(6), w.morphColors && a.enable(7), w.premultipliedAlpha && a.enable(8), w.shadowMapEnabled && a.enable(9), w.useLegacyLights && a.enable(10), w.doubleSided && a.enable(11), w.flipSided && a.enable(12), w.useDepthPacking && a.enable(13), w.dithering && a.enable(14), w.transmission && a.enable(15), w.sheen && a.enable(16), w.opaque && a.enable(17), w.pointsUvs && a.enable(18), w.decodeVideoTexture && a.enable(19), w.alphaToCoverage && a.enable(20), v.push(a.mask) } function I(v) { const w = _[v.type]; let q; if (w) { const ee = Qt[w]; q = ku.clone(ee.uniforms) } else q = v.uniforms; return q } function L(v, w) { let q; for (let ee = 0, D = h.length; ee < D; ee++) { const G = h[ee]; if (G.cacheKey === w) { q = G, ++q.usedTimes; break } } return q === void 0 && (q = new ig(s, w, v, r), h.push(q)), q } function A(v) { if (--v.usedTimes === 0) { const w = h.indexOf(v); h[w] = h[h.length - 1], h.pop(), v.destroy() } } function z(v) { c.remove(v) } function Q() { c.dispose() } return { getParameters: p, getProgramCacheKey: T, getUniforms: I, acquireProgram: L, releaseProgram: A, releaseShaderCache: z, programs: h, dispose: Q } } function cg() { let s = new WeakMap; function e(r) { let o = s.get(r); return o === void 0 && (o = {}, s.set(r, o)), o } function t(r) { s.delete(r) } function n(r, o, a) { s.get(r)[o] = a } function i() { s = new WeakMap } return { get: e, remove: t, update: n, dispose: i } } function lg(s, e) { return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.material.id !== e.material.id ? s.material.id - e.material.id : s.z !== e.z ? s.z - e.z : s.id - e.id } function bc(s, e) { return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.z !== e.z ? e.z - s.z : s.id - e.id } function Ac() { const s = []; let e = 0; const t = [], n = [], i = []; function r() { e = 0, t.length = 0, n.length = 0, i.length = 0 } function o(u, d, m, g, _, f) { let p = s[e]; return p === void 0 ? (p = { id: u.id, object: u, geometry: d, material: m, groupOrder: g, renderOrder: u.renderOrder, z: _, group: f }, s[e] = p) : (p.id = u.id, p.object = u, p.geometry = d, p.material = m, p.groupOrder = g, p.renderOrder = u.renderOrder, p.z = _, p.group = f), e++, p } function a(u, d, m, g, _, f) { const p = o(u, d, m, g, _, f); m.transmission > 0 ? n.push(p) : m.transparent === !0 ? i.push(p) : t.push(p) } function c(u, d, m, g, _, f) { const p = o(u, d, m, g, _, f); m.transmission > 0 ? n.unshift(p) : m.transparent === !0 ? i.unshift(p) : t.unshift(p) } function l(u, d) { t.length > 1 && t.sort(u || lg), n.length > 1 && n.sort(d || bc), i.length > 1 && i.sort(d || bc) } function h() { for (let u = e, d = s.length; u < d; u++) { const m = s[u]; if (m.id === null) break; m.id = null, m.object = null, m.geometry = null, m.material = null, m.group = null } } return { opaque: t, transmissive: n, transparent: i, init: r, push: a, unshift: c, finish: h, sort: l } } function hg() { let s = new WeakMap; function e(n, i) { const r = s.get(n); let o; return r === void 0 ? (o = new Ac, s.set(n, [o])) : i >= r.length ? (o = new Ac, r.push(o)) : o = r[i], o } function t() { s = new WeakMap } return { get: e, dispose: t } } function ug() { const s = {}; return { get: function (e) { if (s[e.id] !== void 0) return s[e.id]; let t; switch (e.type) { case "DirectionalLight": t = { direction: new P, color: new De }; break; case "SpotLight": t = { position: new P, direction: new P, color: new De, distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 }; break; case "PointLight": t = { position: new P, color: new De, distance: 0, decay: 0 }; break; case "HemisphereLight": t = { direction: new P, skyColor: new De, groundColor: new De }; break; case "RectAreaLight": t = { color: new De, position: new P, halfWidth: new P, halfHeight: new P }; break }return s[e.id] = t, t } } } function dg() { const s = {}; return { get: function (e) { if (s[e.id] !== void 0) return s[e.id]; let t; switch (e.type) { case "DirectionalLight": t = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new ae }; break; case "SpotLight": t = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new ae }; break; case "PointLight": t = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new ae, shadowCameraNear: 1, shadowCameraFar: 1e3 }; break }return s[e.id] = t, t } } } let fg = 0; function pg(s, e) { return (e.castShadow ? 2 : 0) - (s.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (s.map ? 1 : 0) } function mg(s, e) { const t = new ug, n = dg(), i = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 }; for (let h = 0; h < 9; h++)i.probe.push(new P); const r = new P, o = new We, a = new We; function c(h, u) { let d = 0, m = 0, g = 0; for (let q = 0; q < 9; q++)i.probe[q].set(0, 0, 0); let _ = 0, f = 0, p = 0, T = 0, x = 0, M = 0, I = 0, L = 0, A = 0, z = 0, Q = 0; h.sort(pg); const v = u === !0 ? Math.PI : 1; for (let q = 0, ee = h.length; q < ee; q++) { const D = h[q], G = D.color, O = D.intensity, j = D.distance, X = D.shadow && D.shadow.map ? D.shadow.map.texture : null; if (D.isAmbientLight) d += G.r * O * v, m += G.g * O * v, g += G.b * O * v; else if (D.isLightProbe) { for (let Y = 0; Y < 9; Y++)i.probe[Y].addScaledVector(D.sh.coefficients[Y], O); Q++ } else if (D.isDirectionalLight) { const Y = t.get(D); if (Y.color.copy(D.color).multiplyScalar(D.intensity * v), D.castShadow) { const K = D.shadow, ne = n.get(D); ne.shadowBias = K.bias, ne.shadowNormalBias = K.normalBias, ne.shadowRadius = K.radius, ne.shadowMapSize = K.mapSize, i.directionalShadow[_] = ne, i.directionalShadowMap[_] = X, i.directionalShadowMatrix[_] = D.shadow.matrix, M++ } i.directional[_] = Y, _++ } else if (D.isSpotLight) { const Y = t.get(D); Y.position.setFromMatrixPosition(D.matrixWorld), Y.color.copy(G).multiplyScalar(O * v), Y.distance = j, Y.coneCos = Math.cos(D.angle), Y.penumbraCos = Math.cos(D.angle * (1 - D.penumbra)), Y.decay = D.decay, i.spot[p] = Y; const K = D.shadow; if (D.map && (i.spotLightMap[A] = D.map, A++, K.updateMatrices(D), D.castShadow && z++), i.spotLightMatrix[p] = K.matrix, D.castShadow) { const ne = n.get(D); ne.shadowBias = K.bias, ne.shadowNormalBias = K.normalBias, ne.shadowRadius = K.radius, ne.shadowMapSize = K.mapSize, i.spotShadow[p] = ne, i.spotShadowMap[p] = X, L++ } p++ } else if (D.isRectAreaLight) { const Y = t.get(D); Y.color.copy(G).multiplyScalar(O), Y.halfWidth.set(D.width * .5, 0, 0), Y.halfHeight.set(0, D.height * .5, 0), i.rectArea[T] = Y, T++ } else if (D.isPointLight) { const Y = t.get(D); if (Y.color.copy(D.color).multiplyScalar(D.intensity * v), Y.distance = D.distance, Y.decay = D.decay, D.castShadow) { const K = D.shadow, ne = n.get(D); ne.shadowBias = K.bias, ne.shadowNormalBias = K.normalBias, ne.shadowRadius = K.radius, ne.shadowMapSize = K.mapSize, ne.shadowCameraNear = K.camera.near, ne.shadowCameraFar = K.camera.far, i.pointShadow[f] = ne, i.pointShadowMap[f] = X, i.pointShadowMatrix[f] = D.shadow.matrix, I++ } i.point[f] = Y, f++ } else if (D.isHemisphereLight) { const Y = t.get(D); Y.skyColor.copy(D.color).multiplyScalar(O * v), Y.groundColor.copy(D.groundColor).multiplyScalar(O * v), i.hemi[x] = Y, x++ } } T > 0 && (e.isWebGL2 ? s.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = ue.LTC_FLOAT_1, i.rectAreaLTC2 = ue.LTC_FLOAT_2) : (i.rectAreaLTC1 = ue.LTC_HALF_1, i.rectAreaLTC2 = ue.LTC_HALF_2) : s.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = ue.LTC_FLOAT_1, i.rectAreaLTC2 = ue.LTC_FLOAT_2) : s.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = ue.LTC_HALF_1, i.rectAreaLTC2 = ue.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = d, i.ambient[1] = m, i.ambient[2] = g; const w = i.hash; (w.directionalLength !== _ || w.pointLength !== f || w.spotLength !== p || w.rectAreaLength !== T || w.hemiLength !== x || w.numDirectionalShadows !== M || w.numPointShadows !== I || w.numSpotShadows !== L || w.numSpotMaps !== A || w.numLightProbes !== Q) && (i.directional.length = _, i.spot.length = p, i.rectArea.length = T, i.point.length = f, i.hemi.length = x, i.directionalShadow.length = M, i.directionalShadowMap.length = M, i.pointShadow.length = I, i.pointShadowMap.length = I, i.spotShadow.length = L, i.spotShadowMap.length = L, i.directionalShadowMatrix.length = M, i.pointShadowMatrix.length = I, i.spotLightMatrix.length = L + A - z, i.spotLightMap.length = A, i.numSpotLightShadowsWithMaps = z, i.numLightProbes = Q, w.directionalLength = _, w.pointLength = f, w.spotLength = p, w.rectAreaLength = T, w.hemiLength = x, w.numDirectionalShadows = M, w.numPointShadows = I, w.numSpotShadows = L, w.numSpotMaps = A, w.numLightProbes = Q, i.version = fg++) } function l(h, u) { let d = 0, m = 0, g = 0, _ = 0, f = 0; const p = u.matrixWorldInverse; for (let T = 0, x = h.length; T < x; T++) { const M = h[T]; if (M.isDirectionalLight) { const I = i.directional[d]; I.direction.setFromMatrixPosition(M.matrixWorld), r.setFromMatrixPosition(M.target.matrixWorld), I.direction.sub(r), I.direction.transformDirection(p), d++ } else if (M.isSpotLight) { const I = i.spot[g]; I.position.setFromMatrixPosition(M.matrixWorld), I.position.applyMatrix4(p), I.direction.setFromMatrixPosition(M.matrixWorld), r.setFromMatrixPosition(M.target.matrixWorld), I.direction.sub(r), I.direction.transformDirection(p), g++ } else if (M.isRectAreaLight) { const I = i.rectArea[_]; I.position.setFromMatrixPosition(M.matrixWorld), I.position.applyMatrix4(p), a.identity(), o.copy(M.matrixWorld), o.premultiply(p), a.extractRotation(o), I.halfWidth.set(M.width * .5, 0, 0), I.halfHeight.set(0, M.height * .5, 0), I.halfWidth.applyMatrix4(a), I.halfHeight.applyMatrix4(a), _++ } else if (M.isPointLight) { const I = i.point[m]; I.position.setFromMatrixPosition(M.matrixWorld), I.position.applyMatrix4(p), m++ } else if (M.isHemisphereLight) { const I = i.hemi[f]; I.direction.setFromMatrixPosition(M.matrixWorld), I.direction.transformDirection(p), f++ } } } return { setup: c, setupView: l, state: i } } function wc(s, e) { const t = new mg(s, e), n = [], i = []; function r() { n.length = 0, i.length = 0 } function o(u) { n.push(u) } function a(u) { i.push(u) } function c(u) { t.setup(n, u) } function l(u) { t.setupView(n, u) } return { init: r, state: { lightsArray: n, shadowsArray: i, lights: t }, setupLights: c, setupLightsView: l, pushLight: o, pushShadow: a } } function gg(s, e) { let t = new WeakMap; function n(r, o = 0) { const a = t.get(r); let c; return a === void 0 ? (c = new wc(s, e), t.set(r, [c])) : o >= a.length ? (c = new wc(s, e), a.push(c)) : c = a[o], c } function i() { t = new WeakMap } return { get: n, dispose: i } } class _g extends Zt { constructor(e) { super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = eu, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e) } copy(e) { return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this } } class xg extends Zt { constructor(e) { super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e) } copy(e) { return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this } } const vg = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, yg = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`; function Mg(s, e, t) { let n = new Do; const i = new ae, r = new ae, o = new nt, a = new _g({ depthPacking: tu }), c = new xg, l = {}, h = t.maxTextureSize, u = { [vn]: Nt, [Nt]: vn, [en]: en }, d = new Fn({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new ae }, radius: { value: 4 } }, vertexShader: vg, fragmentShader: yg }), m = d.clone(); m.defines.HORIZONTAL_PASS = 1; const g = new $t; g.setAttribute("position", new It(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3)); const _ = new Pt(g, d), f = this; this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = ol; let p = this.type; this.render = function (L, A, z) { if (f.enabled === !1 || f.autoUpdate === !1 && f.needsUpdate === !1 || L.length === 0) return; const Q = s.getRenderTarget(), v = s.getActiveCubeFace(), w = s.getActiveMipmapLevel(), q = s.state; q.setBlending(Dn), q.buffers.color.setClear(1, 1, 1, 1), q.buffers.depth.setTest(!0), q.setScissorTest(!1); const ee = p !== mn && this.type === mn, D = p === mn && this.type !== mn; for (let G = 0, O = L.length; G < O; G++) { const j = L[G], X = j.shadow; if (X === void 0) { console.warn("THREE.WebGLShadowMap:", j, "has no shadow."); continue } if (X.autoUpdate === !1 && X.needsUpdate === !1) continue; i.copy(X.mapSize); const Y = X.getFrameExtents(); if (i.multiply(Y), r.copy(X.mapSize), (i.x > h || i.y > h) && (i.x > h && (r.x = Math.floor(h / Y.x), i.x = r.x * Y.x, X.mapSize.x = r.x), i.y > h && (r.y = Math.floor(h / Y.y), i.y = r.y * Y.y, X.mapSize.y = r.y)), X.map === null || ee === !0 || D === !0) { const ne = this.type !== mn ? { minFilter: _t, magFilter: _t } : {}; X.map !== null && X.map.dispose(), X.map = new ti(i.x, i.y, ne), X.map.texture.name = j.name + ".shadowMap", X.camera.updateProjectionMatrix() } s.setRenderTarget(X.map), s.clear(); const K = X.getViewportCount(); for (let ne = 0; ne < K; ne++) { const he = X.getViewport(ne); o.set(r.x * he.x, r.y * he.y, r.x * he.z, r.y * he.w), q.viewport(o), X.updateMatrices(j, ne), n = X.getFrustum(), M(A, z, X.camera, j, this.type) } X.isPointLightShadow !== !0 && this.type === mn && T(X, z), X.needsUpdate = !1 } p = this.type, f.needsUpdate = !1, s.setRenderTarget(Q, v, w) }; function T(L, A) { const z = e.update(_); d.defines.VSM_SAMPLES !== L.blurSamples && (d.defines.VSM_SAMPLES = L.blurSamples, m.defines.VSM_SAMPLES = L.blurSamples, d.needsUpdate = !0, m.needsUpdate = !0), L.mapPass === null && (L.mapPass = new ti(i.x, i.y)), d.uniforms.shadow_pass.value = L.map.texture, d.uniforms.resolution.value = L.mapSize, d.uniforms.radius.value = L.radius, s.setRenderTarget(L.mapPass), s.clear(), s.renderBufferDirect(A, null, z, d, _, null), m.uniforms.shadow_pass.value = L.mapPass.texture, m.uniforms.resolution.value = L.mapSize, m.uniforms.radius.value = L.radius, s.setRenderTarget(L.map), s.clear(), s.renderBufferDirect(A, null, z, m, _, null) } function x(L, A, z, Q) { let v = null; const w = z.isPointLight === !0 ? L.customDistanceMaterial : L.customDepthMaterial; if (w !== void 0) v = w; else if (v = z.isPointLight === !0 ? c : a, s.localClippingEnabled && A.clipShadows === !0 && Array.isArray(A.clippingPlanes) && A.clippingPlanes.length !== 0 || A.displacementMap && A.displacementScale !== 0 || A.alphaMap && A.alphaTest > 0 || A.map && A.alphaTest > 0) { const q = v.uuid, ee = A.uuid; let D = l[q]; D === void 0 && (D = {}, l[q] = D); let G = D[ee]; G === void 0 && (G = v.clone(), D[ee] = G, A.addEventListener("dispose", I)), v = G } if (v.visible = A.visible, v.wireframe = A.wireframe, Q === mn ? v.side = A.shadowSide !== null ? A.shadowSide : A.side : v.side = A.shadowSide !== null ? A.shadowSide : u[A.side], v.alphaMap = A.alphaMap, v.alphaTest = A.alphaTest, v.map = A.map, v.clipShadows = A.clipShadows, v.clippingPlanes = A.clippingPlanes, v.clipIntersection = A.clipIntersection, v.displacementMap = A.displacementMap, v.displacementScale = A.displacementScale, v.displacementBias = A.displacementBias, v.wireframeLinewidth = A.wireframeLinewidth, v.linewidth = A.linewidth, z.isPointLight === !0 && v.isMeshDistanceMaterial === !0) { const q = s.properties.get(v); q.light = z } return v } function M(L, A, z, Q, v) { if (L.visible === !1) return; if (L.layers.test(A.layers) && (L.isMesh || L.isLine || L.isPoints) && (L.castShadow || L.receiveShadow && v === mn) && (!L.frustumCulled || n.intersectsObject(L))) { L.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse, L.matrixWorld); const ee = e.update(L), D = L.material; if (Array.isArray(D)) { const G = ee.groups; for (let O = 0, j = G.length; O < j; O++) { const X = G[O], Y = D[X.materialIndex]; if (Y && Y.visible) { const K = x(L, Y, Q, v); L.onBeforeShadow(s, L, A, z, ee, K, X), s.renderBufferDirect(z, null, ee, K, L, X), L.onAfterShadow(s, L, A, z, ee, K, X) } } } else if (D.visible) { const G = x(L, D, Q, v); L.onBeforeShadow(s, L, A, z, ee, G, null), s.renderBufferDirect(z, null, ee, G, L, null), L.onAfterShadow(s, L, A, z, ee, G, null) } } const q = L.children; for (let ee = 0, D = q.length; ee < D; ee++)M(q[ee], A, z, Q, v) } function I(L) { L.target.removeEventListener("dispose", I); for (const z in l) { const Q = l[z], v = L.target.uuid; v in Q && (Q[v].dispose(), delete Q[v]) } } } function Sg(s, e, t) { const n = t.isWebGL2; function i() { let b = !1; const re = new nt; let se = null; const Se = new nt(0, 0, 0, 0); return { setMask: function (Le) { se !== Le && !b && (s.colorMask(Le, Le, Le, Le), se = Le) }, setLocked: function (Le) { b = Le }, setClear: function (Le, Ze, Ye, tt, yt) { yt === !0 && (Le *= tt, Ze *= tt, Ye *= tt), re.set(Le, Ze, Ye, tt), Se.equals(re) === !1 && (s.clearColor(Le, Ze, Ye, tt), Se.copy(re)) }, reset: function () { b = !1, se = null, Se.set(-1, 0, 0, 0) } } } function r() { let b = !1, re = null, se = null, Se = null; return { setTest: function (Le) { Le ? ve(s.DEPTH_TEST) : Oe(s.DEPTH_TEST) }, setMask: function (Le) { re !== Le && !b && (s.depthMask(Le), re = Le) }, setFunc: function (Le) { if (se !== Le) { switch (Le) { case Rh: s.depthFunc(s.NEVER); break; case Ch: s.depthFunc(s.ALWAYS); break; case Lh: s.depthFunc(s.LESS); break; case Qs: s.depthFunc(s.LEQUAL); break; case Ph: s.depthFunc(s.EQUAL); break; case Ih: s.depthFunc(s.GEQUAL); break; case Dh: s.depthFunc(s.GREATER); break; case Nh: s.depthFunc(s.NOTEQUAL); break; default: s.depthFunc(s.LEQUAL) }se = Le } }, setLocked: function (Le) { b = Le }, setClear: function (Le) { Se !== Le && (s.clearDepth(Le), Se = Le) }, reset: function () { b = !1, re = null, se = null, Se = null } } } function o() { let b = !1, re = null, se = null, Se = null, Le = null, Ze = null, Ye = null, tt = null, yt = null; return { setTest: function (Je) { b || (Je ? ve(s.STENCIL_TEST) : Oe(s.STENCIL_TEST)) }, setMask: function (Je) { re !== Je && !b && (s.stencilMask(Je), re = Je) }, setFunc: function (Je, lt, wt) { (se !== Je || Se !== lt || Le !== wt) && (s.stencilFunc(Je, lt, wt), se = Je, Se = lt, Le = wt) }, setOp: function (Je, lt, wt) { (Ze !== Je || Ye !== lt || tt !== wt) && (s.stencilOp(Je, lt, wt), Ze = Je, Ye = lt, tt = wt) }, setLocked: function (Je) { b = Je }, setClear: function (Je) { yt !== Je && (s.clearStencil(Je), yt = Je) }, reset: function () { b = !1, re = null, se = null, Se = null, Le = null, Ze = null, Ye = null, tt = null, yt = null } } } const a = new i, c = new r, l = new o, h = new WeakMap, u = new WeakMap; let d = {}, m = {}, g = new WeakMap, _ = [], f = null, p = !1, T = null, x = null, M = null, I = null, L = null, A = null, z = null, Q = new De(0, 0, 0), v = 0, w = !1, q = null, ee = null, D = null, G = null, O = null; const j = s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS); let X = !1, Y = 0; const K = s.getParameter(s.VERSION); K.indexOf("WebGL") !== -1 ? (Y = parseFloat(/^WebGL (\d)/.exec(K)[1]), X = Y >= 1) : K.indexOf("OpenGL ES") !== -1 && (Y = parseFloat(/^OpenGL ES (\d)/.exec(K)[1]), X = Y >= 2); let ne = null, he = {}; const Pe = s.getParameter(s.SCISSOR_BOX), k = s.getParameter(s.VIEWPORT), ie = new nt().fromArray(Pe), ge = new nt().fromArray(k); function Me(b, re, se, Se) { const Le = new Uint8Array(4), Ze = s.createTexture(); s.bindTexture(b, Ze), s.texParameteri(b, s.TEXTURE_MIN_FILTER, s.NEAREST), s.texParameteri(b, s.TEXTURE_MAG_FILTER, s.NEAREST); for (let Ye = 0; Ye < se; Ye++)n && (b === s.TEXTURE_3D || b === s.TEXTURE_2D_ARRAY) ? s.texImage3D(re, 0, s.RGBA, 1, 1, Se, 0, s.RGBA, s.UNSIGNED_BYTE, Le) : s.texImage2D(re + Ye, 0, s.RGBA, 1, 1, 0, s.RGBA, s.UNSIGNED_BYTE, Le); return Ze } const Te = {}; Te[s.TEXTURE_2D] = Me(s.TEXTURE_2D, s.TEXTURE_2D, 1), Te[s.TEXTURE_CUBE_MAP] = Me(s.TEXTURE_CUBE_MAP, s.TEXTURE_CUBE_MAP_POSITIVE_X, 6), n && (Te[s.TEXTURE_2D_ARRAY] = Me(s.TEXTURE_2D_ARRAY, s.TEXTURE_2D_ARRAY, 1, 1), Te[s.TEXTURE_3D] = Me(s.TEXTURE_3D, s.TEXTURE_3D, 1, 1)), a.setClear(0, 0, 0, 1), c.setClear(1), l.setClear(0), ve(s.DEPTH_TEST), c.setFunc(Qs), pe(!1), S(sa), ve(s.CULL_FACE), W(Dn); function ve(b) { d[b] !== !0 && (s.enable(b), d[b] = !0) } function Oe(b) { d[b] !== !1 && (s.disable(b), d[b] = !1) } function Ae(b, re) { return m[b] !== re ? (s.bindFramebuffer(b, re), m[b] = re, n && (b === s.DRAW_FRAMEBUFFER && (m[s.FRAMEBUFFER] = re), b === s.FRAMEBUFFER && (m[s.DRAW_FRAMEBUFFER] = re)), !0) : !1 } function C(b, re) { let se = _, Se = !1; if (b) if (se = g.get(re), se === void 0 && (se = [], g.set(re, se)), b.isWebGLMultipleRenderTargets) { const Le = b.texture; if (se.length !== Le.length || se[0] !== s.COLOR_ATTACHMENT0) { for (let Ze = 0, Ye = Le.length; Ze < Ye; Ze++)se[Ze] = s.COLOR_ATTACHMENT0 + Ze; se.length = Le.length, Se = !0 } } else se[0] !== s.COLOR_ATTACHMENT0 && (se[0] = s.COLOR_ATTACHMENT0, Se = !0); else se[0] !== s.BACK && (se[0] = s.BACK, Se = !0); Se && (t.isWebGL2 ? s.drawBuffers(se) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se)) } function le(b) { return f !== b ? (s.useProgram(b), f = b, !0) : !1 } const V = { [Yn]: s.FUNC_ADD, [fh]: s.FUNC_SUBTRACT, [ph]: s.FUNC_REVERSE_SUBTRACT }; if (n) V[ca] = s.MIN, V[la] = s.MAX; else { const b = e.get("EXT_blend_minmax"); b !== null && (V[ca] = b.MIN_EXT, V[la] = b.MAX_EXT) } const oe = { [mh]: s.ZERO, [gh]: s.ONE, [_h]: s.SRC_COLOR, [co]: s.SRC_ALPHA, [Eh]: s.SRC_ALPHA_SATURATE, [Mh]: s.DST_COLOR, [vh]: s.DST_ALPHA, [xh]: s.ONE_MINUS_SRC_COLOR, [lo]: s.ONE_MINUS_SRC_ALPHA, [Sh]: s.ONE_MINUS_DST_COLOR, [yh]: s.ONE_MINUS_DST_ALPHA, [Th]: s.CONSTANT_COLOR, [bh]: s.ONE_MINUS_CONSTANT_COLOR, [Ah]: s.CONSTANT_ALPHA, [wh]: s.ONE_MINUS_CONSTANT_ALPHA }; function W(b, re, se, Se, Le, Ze, Ye, tt, yt, Je) { if (b === Dn) { p === !0 && (Oe(s.BLEND), p = !1); return } if (p === !1 && (ve(s.BLEND), p = !0), b !== dh) { if (b !== T || Je !== w) { if ((x !== Yn || L !== Yn) && (s.blendEquation(s.FUNC_ADD), x = Yn, L = Yn), Je) switch (b) { case Li: s.blendFuncSeparate(s.ONE, s.ONE_MINUS_SRC_ALPHA, s.ONE, s.ONE_MINUS_SRC_ALPHA); break; case ra: s.blendFunc(s.ONE, s.ONE); break; case oa: s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE); break; case aa: s.blendFuncSeparate(s.ZERO, s.SRC_COLOR, s.ZERO, s.SRC_ALPHA); break; default: console.error("THREE.WebGLState: Invalid blending: ", b); break } else switch (b) { case Li: s.blendFuncSeparate(s.SRC_ALPHA, s.ONE_MINUS_SRC_ALPHA, s.ONE, s.ONE_MINUS_SRC_ALPHA); break; case ra: s.blendFunc(s.SRC_ALPHA, s.ONE); break; case oa: s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE); break; case aa: s.blendFunc(s.ZERO, s.SRC_COLOR); break; default: console.error("THREE.WebGLState: Invalid blending: ", b); break }M = null, I = null, A = null, z = null, Q.set(0, 0, 0), v = 0, T = b, w = Je } return } Le = Le || re, Ze = Ze || se, Ye = Ye || Se, (re !== x || Le !== L) && (s.blendEquationSeparate(V[re], V[Le]), x = re, L = Le), (se !== M || Se !== I || Ze !== A || Ye !== z) && (s.blendFuncSeparate(oe[se], oe[Se], oe[Ze], oe[Ye]), M = se, I = Se, A = Ze, z = Ye), (tt.equals(Q) === !1 || yt !== v) && (s.blendColor(tt.r, tt.g, tt.b, yt), Q.copy(tt), v = yt), T = b, w = !1 } function Ee(b, re) { b.side === en ? Oe(s.CULL_FACE) : ve(s.CULL_FACE); let se = b.side === Nt; re && (se = !se), pe(se), b.blending === Li && b.transparent === !1 ? W(Dn) : W(b.blending, b.blendEquation, b.blendSrc, b.blendDst, b.blendEquationAlpha, b.blendSrcAlpha, b.blendDstAlpha, b.blendColor, b.blendAlpha, b.premultipliedAlpha), c.setFunc(b.depthFunc), c.setTest(b.depthTest), c.setMask(b.depthWrite), a.setMask(b.colorWrite); const Se = b.stencilWrite; l.setTest(Se), Se && (l.setMask(b.stencilWriteMask), l.setFunc(b.stencilFunc, b.stencilRef, b.stencilFuncMask), l.setOp(b.stencilFail, b.stencilZFail, b.stencilZPass)), N(b.polygonOffset, b.polygonOffsetFactor, b.polygonOffsetUnits), b.alphaToCoverage === !0 ? ve(s.SAMPLE_ALPHA_TO_COVERAGE) : Oe(s.SAMPLE_ALPHA_TO_COVERAGE) } function pe(b) { q !== b && (b ? s.frontFace(s.CW) : s.frontFace(s.CCW), q = b) } function S(b) { b !== lh ? (ve(s.CULL_FACE), b !== ee && (b === sa ? s.cullFace(s.BACK) : b === hh ? s.cullFace(s.FRONT) : s.cullFace(s.FRONT_AND_BACK))) : Oe(s.CULL_FACE), ee = b } function y(b) { b !== D && (X && s.lineWidth(b), D = b) } function N(b, re, se) { b ? (ve(s.POLYGON_OFFSET_FILL), (G !== re || O !== se) && (s.polygonOffset(re, se), G = re, O = se)) : Oe(s.POLYGON_OFFSET_FILL) } function te(b) { b ? ve(s.SCISSOR_TEST) : Oe(s.SCISSOR_TEST) } function J(b) { b === void 0 && (b = s.TEXTURE0 + j - 1), ne !== b && (s.activeTexture(b), ne = b) } function Z(b, re, se) { se === void 0 && (ne === null ? se = s.TEXTURE0 + j - 1 : se = ne); let Se = he[se]; Se === void 0 && (Se = { type: void 0, texture: void 0 }, he[se] = Se), (Se.type !== b || Se.texture !== re) && (ne !== se && (s.activeTexture(se), ne = se), s.bindTexture(b, re || Te[b]), Se.type = b, Se.texture = re) } function ye() { const b = he[ne]; b !== void 0 && b.type !== void 0 && (s.bindTexture(b.type, null), b.type = void 0, b.texture = void 0) } function de() { try { s.compressedTexImage2D.apply(s, arguments) } catch (b) { console.error("THREE.WebGLState:", b) } } function _e() { try { s.compressedTexImage3D.apply(s, arguments) } catch (b) { console.error("THREE.WebGLState:", b) } } function Ce() { try { s.texSubImage2D.apply(s, arguments) } catch (b) { console.error("THREE.WebGLState:", b) } } function Fe() { try { s.texSubImage3D.apply(s, arguments) } catch (b) { console.error("THREE.WebGLState:", b) } } function $() { try { s.compressedTexSubImage2D.apply(s, arguments) } catch (b) { console.error("THREE.WebGLState:", b) } } function Ke() { try { s.compressedTexSubImage3D.apply(s, arguments) } catch (b) { console.error("THREE.WebGLState:", b) } } function ke() { try { s.texStorage2D.apply(s, arguments) } catch (b) { console.error("THREE.WebGLState:", b) } } function Ne() { try { s.texStorage3D.apply(s, arguments) } catch (b) { console.error("THREE.WebGLState:", b) } } function we() { try { s.texImage2D.apply(s, arguments) } catch (b) { console.error("THREE.WebGLState:", b) } } function me() { try { s.texImage3D.apply(s, arguments) } catch (b) { console.error("THREE.WebGLState:", b) } } function ze(b) { ie.equals(b) === !1 && (s.scissor(b.x, b.y, b.z, b.w), ie.copy(b)) } function R(b) { ge.equals(b) === !1 && (s.viewport(b.x, b.y, b.z, b.w), ge.copy(b)) } function ce(b, re) { let se = u.get(re); se === void 0 && (se = new WeakMap, u.set(re, se)); let Se = se.get(b); Se === void 0 && (Se = s.getUniformBlockIndex(re, b.name), se.set(b, Se)) } function fe(b, re) { const Se = u.get(re).get(b); h.get(re) !== Se && (s.uniformBlockBinding(re, Se, b.__bindingPointIndex), h.set(re, Se)) } function Re() { s.disable(s.BLEND), s.disable(s.CULL_FACE), s.disable(s.DEPTH_TEST), s.disable(s.POLYGON_OFFSET_FILL), s.disable(s.SCISSOR_TEST), s.disable(s.STENCIL_TEST), s.disable(s.SAMPLE_ALPHA_TO_COVERAGE), s.blendEquation(s.FUNC_ADD), s.blendFunc(s.ONE, s.ZERO), s.blendFuncSeparate(s.ONE, s.ZERO, s.ONE, s.ZERO), s.blendColor(0, 0, 0, 0), s.colorMask(!0, !0, !0, !0), s.clearColor(0, 0, 0, 0), s.depthMask(!0), s.depthFunc(s.LESS), s.clearDepth(1), s.stencilMask(4294967295), s.stencilFunc(s.ALWAYS, 0, 4294967295), s.stencilOp(s.KEEP, s.KEEP, s.KEEP), s.clearStencil(0), s.cullFace(s.BACK), s.frontFace(s.CCW), s.polygonOffset(0, 0), s.activeTexture(s.TEXTURE0), s.bindFramebuffer(s.FRAMEBUFFER, null), n === !0 && (s.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), s.bindFramebuffer(s.READ_FRAMEBUFFER, null)), s.useProgram(null), s.lineWidth(1), s.scissor(0, 0, s.canvas.width, s.canvas.height), s.viewport(0, 0, s.canvas.width, s.canvas.height), d = {}, ne = null, he = {}, m = {}, g = new WeakMap, _ = [], f = null, p = !1, T = null, x = null, M = null, I = null, L = null, A = null, z = null, Q = new De(0, 0, 0), v = 0, w = !1, q = null, ee = null, D = null, G = null, O = null, ie.set(0, 0, s.canvas.width, s.canvas.height), ge.set(0, 0, s.canvas.width, s.canvas.height), a.reset(), c.reset(), l.reset() } return { buffers: { color: a, depth: c, stencil: l }, enable: ve, disable: Oe, bindFramebuffer: Ae, drawBuffers: C, useProgram: le, setBlending: W, setMaterial: Ee, setFlipSided: pe, setCullFace: S, setLineWidth: y, setPolygonOffset: N, setScissorTest: te, activeTexture: J, bindTexture: Z, unbindTexture: ye, compressedTexImage2D: de, compressedTexImage3D: _e, texImage2D: we, texImage3D: me, updateUBOMapping: ce, uniformBlockBinding: fe, texStorage2D: ke, texStorage3D: Ne, texSubImage2D: Ce, texSubImage3D: Fe, compressedTexSubImage2D: $, compressedTexSubImage3D: Ke, scissor: ze, viewport: R, reset: Re } } function Eg(s, e, t, n, i, r, o) { const a = i.isWebGL2, c = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), h = new WeakMap; let u; const d = new WeakMap; let m = !1; try { m = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null } catch { } function g(S, y) { return m ? new OffscreenCanvas(S, y) : ls("canvas") } function _(S, y, N, te) { let J = 1; if ((S.width > te || S.height > te) && (J = te / Math.max(S.width, S.height)), J < 1 || y === !0) if (typeof HTMLImageElement < "u" && S instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && S instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && S instanceof ImageBitmap) { const Z = y ? rr : Math.floor, ye = Z(J * S.width), de = Z(J * S.height); u === void 0 && (u = g(ye, de)); const _e = N ? g(ye, de) : u; return _e.width = ye, _e.height = de, _e.getContext("2d").drawImage(S, 0, 0, ye, de), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + S.width + "x" + S.height + ") to (" + ye + "x" + de + ")."), _e } else return "data" in S && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + S.width + "x" + S.height + ")."), S; return S } function f(S) { return _o(S.width) && _o(S.height) } function p(S) { return a ? !1 : S.wrapS !== Gt || S.wrapT !== Gt || S.minFilter !== _t && S.minFilter !== At } function T(S, y) { return S.generateMipmaps && y && S.minFilter !== _t && S.minFilter !== At } function x(S) { s.generateMipmap(S) } function M(S, y, N, te, J = !1) { if (a === !1) return y; if (S !== null) { if (s[S] !== void 0) return s[S]; console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + S + "'") } let Z = y; if (y === s.RED && (N === s.FLOAT && (Z = s.R32F), N === s.HALF_FLOAT && (Z = s.R16F), N === s.UNSIGNED_BYTE && (Z = s.R8)), y === s.RED_INTEGER && (N === s.UNSIGNED_BYTE && (Z = s.R8UI), N === s.UNSIGNED_SHORT && (Z = s.R16UI), N === s.UNSIGNED_INT && (Z = s.R32UI), N === s.BYTE && (Z = s.R8I), N === s.SHORT && (Z = s.R16I), N === s.INT && (Z = s.R32I)), y === s.RG && (N === s.FLOAT && (Z = s.RG32F), N === s.HALF_FLOAT && (Z = s.RG16F), N === s.UNSIGNED_BYTE && (Z = s.RG8)), y === s.RGBA) { const ye = J ? tr : $e.getTransfer(te); N === s.FLOAT && (Z = s.RGBA32F), N === s.HALF_FLOAT && (Z = s.RGBA16F), N === s.UNSIGNED_BYTE && (Z = ye === it ? s.SRGB8_ALPHA8 : s.RGBA8), N === s.UNSIGNED_SHORT_4_4_4_4 && (Z = s.RGBA4), N === s.UNSIGNED_SHORT_5_5_5_1 && (Z = s.RGB5_A1) } return (Z === s.R16F || Z === s.R32F || Z === s.RG16F || Z === s.RG32F || Z === s.RGBA16F || Z === s.RGBA32F) && e.get("EXT_color_buffer_float"), Z } function I(S, y, N) { return T(S, N) === !0 || S.isFramebufferTexture && S.minFilter !== _t && S.minFilter !== At ? Math.log2(Math.max(y.width, y.height)) + 1 : S.mipmaps !== void 0 && S.mipmaps.length > 0 ? S.mipmaps.length : S.isCompressedTexture && Array.isArray(S.image) ? y.mipmaps.length : 1 } function L(S) { return S === _t || S === fo || S === Ai ? s.NEAREST : s.LINEAR } function A(S) { const y = S.target; y.removeEventListener("dispose", A), Q(y), y.isVideoTexture && h.delete(y) } function z(S) { const y = S.target; y.removeEventListener("dispose", z), w(y) } function Q(S) { const y = n.get(S); if (y.__webglInit === void 0) return; const N = S.source, te = d.get(N); if (te) { const J = te[y.__cacheKey]; J.usedTimes--, J.usedTimes === 0 && v(S), Object.keys(te).length === 0 && d.delete(N) } n.remove(S) } function v(S) { const y = n.get(S); s.deleteTexture(y.__webglTexture); const N = S.source, te = d.get(N); delete te[y.__cacheKey], o.memory.textures-- } function w(S) { const y = S.texture, N = n.get(S), te = n.get(y); if (te.__webglTexture !== void 0 && (s.deleteTexture(te.__webglTexture), o.memory.textures--), S.depthTexture && S.depthTexture.dispose(), S.isWebGLCubeRenderTarget) for (let J = 0; J < 6; J++) { if (Array.isArray(N.__webglFramebuffer[J])) for (let Z = 0; Z < N.__webglFramebuffer[J].length; Z++)s.deleteFramebuffer(N.__webglFramebuffer[J][Z]); else s.deleteFramebuffer(N.__webglFramebuffer[J]); N.__webglDepthbuffer && s.deleteRenderbuffer(N.__webglDepthbuffer[J]) } else { if (Array.isArray(N.__webglFramebuffer)) for (let J = 0; J < N.__webglFramebuffer.length; J++)s.deleteFramebuffer(N.__webglFramebuffer[J]); else s.deleteFramebuffer(N.__webglFramebuffer); if (N.__webglDepthbuffer && s.deleteRenderbuffer(N.__webglDepthbuffer), N.__webglMultisampledFramebuffer && s.deleteFramebuffer(N.__webglMultisampledFramebuffer), N.__webglColorRenderbuffer) for (let J = 0; J < N.__webglColorRenderbuffer.length; J++)N.__webglColorRenderbuffer[J] && s.deleteRenderbuffer(N.__webglColorRenderbuffer[J]); N.__webglDepthRenderbuffer && s.deleteRenderbuffer(N.__webglDepthRenderbuffer) } if (S.isWebGLMultipleRenderTargets) for (let J = 0, Z = y.length; J < Z; J++) { const ye = n.get(y[J]); ye.__webglTexture && (s.deleteTexture(ye.__webglTexture), o.memory.textures--), n.remove(y[J]) } n.remove(y), n.remove(S) } let q = 0; function ee() { q = 0 } function D() { const S = q; return S >= i.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + S + " texture units while this GPU supports only " + i.maxTextures), q += 1, S } function G(S) { const y = []; return y.push(S.wrapS), y.push(S.wrapT), y.push(S.wrapR || 0), y.push(S.magFilter), y.push(S.minFilter), y.push(S.anisotropy), y.push(S.internalFormat), y.push(S.format), y.push(S.type), y.push(S.generateMipmaps), y.push(S.premultiplyAlpha), y.push(S.flipY), y.push(S.unpackAlignment), y.push(S.colorSpace), y.join() } function O(S, y) { const N = n.get(S); if (S.isVideoTexture && Ee(S), S.isRenderTargetTexture === !1 && S.version > 0 && N.__version !== S.version) { const te = S.image; if (te === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found."); else if (te.complete === !1) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete"); else { ie(N, S, y); return } } t.bindTexture(s.TEXTURE_2D, N.__webglTexture, s.TEXTURE0 + y) } function j(S, y) { const N = n.get(S); if (S.version > 0 && N.__version !== S.version) { ie(N, S, y); return } t.bindTexture(s.TEXTURE_2D_ARRAY, N.__webglTexture, s.TEXTURE0 + y) } function X(S, y) { const N = n.get(S); if (S.version > 0 && N.__version !== S.version) { ie(N, S, y); return } t.bindTexture(s.TEXTURE_3D, N.__webglTexture, s.TEXTURE0 + y) } function Y(S, y) { const N = n.get(S); if (S.version > 0 && N.__version !== S.version) { ge(N, S, y); return } t.bindTexture(s.TEXTURE_CUBE_MAP, N.__webglTexture, s.TEXTURE0 + y) } const K = { [Oi]: s.REPEAT, [Gt]: s.CLAMP_TO_EDGE, [er]: s.MIRRORED_REPEAT }, ne = { [_t]: s.NEAREST, [fo]: s.NEAREST_MIPMAP_NEAREST, [Ai]: s.NEAREST_MIPMAP_LINEAR, [At]: s.LINEAR, [Zs]: s.LINEAR_MIPMAP_NEAREST, [gn]: s.LINEAR_MIPMAP_LINEAR }, he = { [iu]: s.NEVER, [lu]: s.ALWAYS, [su]: s.LESS, [_l]: s.LEQUAL, [ru]: s.EQUAL, [cu]: s.GEQUAL, [ou]: s.GREATER, [au]: s.NOTEQUAL }; function Pe(S, y, N) { if (y.type === tn && e.has("OES_texture_float_linear") === !1 && (y.magFilter === At || y.magFilter === Zs || y.magFilter === Ai || y.magFilter === gn || y.minFilter === At || y.minFilter === Zs || y.minFilter === Ai || y.minFilter === gn) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), N ? (s.texParameteri(S, s.TEXTURE_WRAP_S, K[y.wrapS]), s.texParameteri(S, s.TEXTURE_WRAP_T, K[y.wrapT]), (S === s.TEXTURE_3D || S === s.TEXTURE_2D_ARRAY) && s.texParameteri(S, s.TEXTURE_WRAP_R, K[y.wrapR]), s.texParameteri(S, s.TEXTURE_MAG_FILTER, ne[y.magFilter]), s.texParameteri(S, s.TEXTURE_MIN_FILTER, ne[y.minFilter])) : (s.texParameteri(S, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE), s.texParameteri(S, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE), (S === s.TEXTURE_3D || S === s.TEXTURE_2D_ARRAY) && s.texParameteri(S, s.TEXTURE_WRAP_R, s.CLAMP_TO_EDGE), (y.wrapS !== Gt || y.wrapT !== Gt) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), s.texParameteri(S, s.TEXTURE_MAG_FILTER, L(y.magFilter)), s.texParameteri(S, s.TEXTURE_MIN_FILTER, L(y.minFilter)), y.minFilter !== _t && y.minFilter !== At && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), y.compareFunction && (s.texParameteri(S, s.TEXTURE_COMPARE_MODE, s.COMPARE_REF_TO_TEXTURE), s.texParameteri(S, s.TEXTURE_COMPARE_FUNC, he[y.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) { const te = e.get("EXT_texture_filter_anisotropic"); if (y.magFilter === _t || y.minFilter !== Ai && y.minFilter !== gn || y.type === tn && e.has("OES_texture_float_linear") === !1 || a === !1 && y.type === as && e.has("OES_texture_half_float_linear") === !1) return; (y.anisotropy > 1 || n.get(y).__currentAnisotropy) && (s.texParameterf(S, te.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(y.anisotropy, i.getMaxAnisotropy())), n.get(y).__currentAnisotropy = y.anisotropy) } } function k(S, y) { let N = !1; S.__webglInit === void 0 && (S.__webglInit = !0, y.addEventListener("dispose", A)); const te = y.source; let J = d.get(te); J === void 0 && (J = {}, d.set(te, J)); const Z = G(y); if (Z !== S.__cacheKey) { J[Z] === void 0 && (J[Z] = { texture: s.createTexture(), usedTimes: 0 }, o.memory.textures++, N = !0), J[Z].usedTimes++; const ye = J[S.__cacheKey]; ye !== void 0 && (J[S.__cacheKey].usedTimes--, ye.usedTimes === 0 && v(y)), S.__cacheKey = Z, S.__webglTexture = J[Z].texture } return N } function ie(S, y, N) { let te = s.TEXTURE_2D; (y.isDataArrayTexture || y.isCompressedArrayTexture) && (te = s.TEXTURE_2D_ARRAY), y.isData3DTexture && (te = s.TEXTURE_3D); const J = k(S, y), Z = y.source; t.bindTexture(te, S.__webglTexture, s.TEXTURE0 + N); const ye = n.get(Z); if (Z.version !== ye.__version || J === !0) { t.activeTexture(s.TEXTURE0 + N); const de = $e.getPrimaries($e.workingColorSpace), _e = y.colorSpace === Vt ? null : $e.getPrimaries(y.colorSpace), Ce = y.colorSpace === Vt || de === _e ? s.NONE : s.BROWSER_DEFAULT_WEBGL; s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, y.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, y.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, y.unpackAlignment), s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ce); const Fe = p(y) && f(y.image) === !1; let $ = _(y.image, Fe, !1, i.maxTextureSize); $ = pe(y, $); const Ke = f($) || a, ke = r.convert(y.format, y.colorSpace); let Ne = r.convert(y.type), we = M(y.internalFormat, ke, Ne, y.colorSpace, y.isVideoTexture); Pe(te, y, Ke); let me; const ze = y.mipmaps, R = a && y.isVideoTexture !== !0 && we !== pl, ce = ye.__version === void 0 || J === !0, fe = Z.dataReady, Re = I(y, $, Ke); if (y.isDepthTexture) we = s.DEPTH_COMPONENT, a ? y.type === tn ? we = s.DEPTH_COMPONENT32F : y.type === Pn ? we = s.DEPTH_COMPONENT24 : y.type === Jn ? we = s.DEPTH24_STENCIL8 : we = s.DEPTH_COMPONENT16 : y.type === tn && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), y.format === $n && we === s.DEPTH_COMPONENT && y.type !== Co && y.type !== Pn && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), y.type = Pn, Ne = r.convert(y.type)), y.format === Fi && we === s.DEPTH_COMPONENT && (we = s.DEPTH_STENCIL, y.type !== Jn && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), y.type = Jn, Ne = r.convert(y.type))), ce && (R ? t.texStorage2D(s.TEXTURE_2D, 1, we, $.width, $.height) : t.texImage2D(s.TEXTURE_2D, 0, we, $.width, $.height, 0, ke, Ne, null)); else if (y.isDataTexture) if (ze.length > 0 && Ke) { R && ce && t.texStorage2D(s.TEXTURE_2D, Re, we, ze[0].width, ze[0].height); for (let b = 0, re = ze.length; b < re; b++)me = ze[b], R ? fe && t.texSubImage2D(s.TEXTURE_2D, b, 0, 0, me.width, me.height, ke, Ne, me.data) : t.texImage2D(s.TEXTURE_2D, b, we, me.width, me.height, 0, ke, Ne, me.data); y.generateMipmaps = !1 } else R ? (ce && t.texStorage2D(s.TEXTURE_2D, Re, we, $.width, $.height), fe && t.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, $.width, $.height, ke, Ne, $.data)) : t.texImage2D(s.TEXTURE_2D, 0, we, $.width, $.height, 0, ke, Ne, $.data); else if (y.isCompressedTexture) if (y.isCompressedArrayTexture) { R && ce && t.texStorage3D(s.TEXTURE_2D_ARRAY, Re, we, ze[0].width, ze[0].height, $.depth); for (let b = 0, re = ze.length; b < re; b++)me = ze[b], y.format !== kt ? ke !== null ? R ? fe && t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY, b, 0, 0, 0, me.width, me.height, $.depth, ke, me.data, 0, 0) : t.compressedTexImage3D(s.TEXTURE_2D_ARRAY, b, we, me.width, me.height, $.depth, 0, me.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : R ? fe && t.texSubImage3D(s.TEXTURE_2D_ARRAY, b, 0, 0, 0, me.width, me.height, $.depth, ke, Ne, me.data) : t.texImage3D(s.TEXTURE_2D_ARRAY, b, we, me.width, me.height, $.depth, 0, ke, Ne, me.data) } else { R && ce && t.texStorage2D(s.TEXTURE_2D, Re, we, ze[0].width, ze[0].height); for (let b = 0, re = ze.length; b < re; b++)me = ze[b], y.format !== kt ? ke !== null ? R ? fe && t.compressedTexSubImage2D(s.TEXTURE_2D, b, 0, 0, me.width, me.height, ke, me.data) : t.compressedTexImage2D(s.TEXTURE_2D, b, we, me.width, me.height, 0, me.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : R ? fe && t.texSubImage2D(s.TEXTURE_2D, b, 0, 0, me.width, me.height, ke, Ne, me.data) : t.texImage2D(s.TEXTURE_2D, b, we, me.width, me.height, 0, ke, Ne, me.data) } else if (y.isDataArrayTexture) R ? (ce && t.texStorage3D(s.TEXTURE_2D_ARRAY, Re, we, $.width, $.height, $.depth), fe && t.texSubImage3D(s.TEXTURE_2D_ARRAY, 0, 0, 0, 0, $.width, $.height, $.depth, ke, Ne, $.data)) : t.texImage3D(s.TEXTURE_2D_ARRAY, 0, we, $.width, $.height, $.depth, 0, ke, Ne, $.data); else if (y.isData3DTexture) R ? (ce && t.texStorage3D(s.TEXTURE_3D, Re, we, $.width, $.height, $.depth), fe && t.texSubImage3D(s.TEXTURE_3D, 0, 0, 0, 0, $.width, $.height, $.depth, ke, Ne, $.data)) : t.texImage3D(s.TEXTURE_3D, 0, we, $.width, $.height, $.depth, 0, ke, Ne, $.data); else if (y.isFramebufferTexture) { if (ce) if (R) t.texStorage2D(s.TEXTURE_2D, Re, we, $.width, $.height); else { let b = $.width, re = $.height; for (let se = 0; se < Re; se++)t.texImage2D(s.TEXTURE_2D, se, we, b, re, 0, ke, Ne, null), b >>= 1, re >>= 1 } } else if (ze.length > 0 && Ke) { R && ce && t.texStorage2D(s.TEXTURE_2D, Re, we, ze[0].width, ze[0].height); for (let b = 0, re = ze.length; b < re; b++)me = ze[b], R ? fe && t.texSubImage2D(s.TEXTURE_2D, b, 0, 0, ke, Ne, me) : t.texImage2D(s.TEXTURE_2D, b, we, ke, Ne, me); y.generateMipmaps = !1 } else R ? (ce && t.texStorage2D(s.TEXTURE_2D, Re, we, $.width, $.height), fe && t.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, ke, Ne, $)) : t.texImage2D(s.TEXTURE_2D, 0, we, ke, Ne, $); T(y, Ke) && x(te), ye.__version = Z.version, y.onUpdate && y.onUpdate(y) } S.__version = y.version } function ge(S, y, N) { if (y.image.length !== 6) return; const te = k(S, y), J = y.source; t.bindTexture(s.TEXTURE_CUBE_MAP, S.__webglTexture, s.TEXTURE0 + N); const Z = n.get(J); if (J.version !== Z.__version || te === !0) { t.activeTexture(s.TEXTURE0 + N); const ye = $e.getPrimaries($e.workingColorSpace), de = y.colorSpace === Vt ? null : $e.getPrimaries(y.colorSpace), _e = y.colorSpace === Vt || ye === de ? s.NONE : s.BROWSER_DEFAULT_WEBGL; s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, y.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, y.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, y.unpackAlignment), s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, _e); const Ce = y.isCompressedTexture || y.image[0].isCompressedTexture, Fe = y.image[0] && y.image[0].isDataTexture, $ = []; for (let b = 0; b < 6; b++)!Ce && !Fe ? $[b] = _(y.image[b], !1, !0, i.maxCubemapSize) : $[b] = Fe ? y.image[b].image : y.image[b], $[b] = pe(y, $[b]); const Ke = $[0], ke = f(Ke) || a, Ne = r.convert(y.format, y.colorSpace), we = r.convert(y.type), me = M(y.internalFormat, Ne, we, y.colorSpace), ze = a && y.isVideoTexture !== !0, R = Z.__version === void 0 || te === !0, ce = J.dataReady; let fe = I(y, Ke, ke); Pe(s.TEXTURE_CUBE_MAP, y, ke); let Re; if (Ce) { ze && R && t.texStorage2D(s.TEXTURE_CUBE_MAP, fe, me, Ke.width, Ke.height); for (let b = 0; b < 6; b++) { Re = $[b].mipmaps; for (let re = 0; re < Re.length; re++) { const se = Re[re]; y.format !== kt ? Ne !== null ? ze ? ce && t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + b, re, 0, 0, se.width, se.height, Ne, se.data) : t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + b, re, me, se.width, se.height, 0, se.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : ze ? ce && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + b, re, 0, 0, se.width, se.height, Ne, we, se.data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + b, re, me, se.width, se.height, 0, Ne, we, se.data) } } } else { Re = y.mipmaps, ze && R && (Re.length > 0 && fe++, t.texStorage2D(s.TEXTURE_CUBE_MAP, fe, me, $[0].width, $[0].height)); for (let b = 0; b < 6; b++)if (Fe) { ze ? ce && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + b, 0, 0, 0, $[b].width, $[b].height, Ne, we, $[b].data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + b, 0, me, $[b].width, $[b].height, 0, Ne, we, $[b].data); for (let re = 0; re < Re.length; re++) { const Se = Re[re].image[b].image; ze ? ce && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + b, re + 1, 0, 0, Se.width, Se.height, Ne, we, Se.data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + b, re + 1, me, Se.width, Se.height, 0, Ne, we, Se.data) } } else { ze ? ce && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + b, 0, 0, 0, Ne, we, $[b]) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + b, 0, me, Ne, we, $[b]); for (let re = 0; re < Re.length; re++) { const se = Re[re]; ze ? ce && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + b, re + 1, 0, 0, Ne, we, se.image[b]) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + b, re + 1, me, Ne, we, se.image[b]) } } } T(y, ke) && x(s.TEXTURE_CUBE_MAP), Z.__version = J.version, y.onUpdate && y.onUpdate(y) } S.__version = y.version } function Me(S, y, N, te, J, Z) { const ye = r.convert(N.format, N.colorSpace), de = r.convert(N.type), _e = M(N.internalFormat, ye, de, N.colorSpace); if (!n.get(y).__hasExternalTextures) { const Fe = Math.max(1, y.width >> Z), $ = Math.max(1, y.height >> Z); J === s.TEXTURE_3D || J === s.TEXTURE_2D_ARRAY ? t.texImage3D(J, Z, _e, Fe, $, y.depth, 0, ye, de, null) : t.texImage2D(J, Z, _e, Fe, $, 0, ye, de, null) } t.bindFramebuffer(s.FRAMEBUFFER, S), W(y) ? c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, te, J, n.get(N).__webglTexture, 0, oe(y)) : (J === s.TEXTURE_2D || J >= s.TEXTURE_CUBE_MAP_POSITIVE_X && J <= s.TEXTURE_CUBE_MAP_NEGATIVE_Z) && s.framebufferTexture2D(s.FRAMEBUFFER, te, J, n.get(N).__webglTexture, Z), t.bindFramebuffer(s.FRAMEBUFFER, null) } function Te(S, y, N) { if (s.bindRenderbuffer(s.RENDERBUFFER, S), y.depthBuffer && !y.stencilBuffer) { let te = a === !0 ? s.DEPTH_COMPONENT24 : s.DEPTH_COMPONENT16; if (N || W(y)) { const J = y.depthTexture; J && J.isDepthTexture && (J.type === tn ? te = s.DEPTH_COMPONENT32F : J.type === Pn && (te = s.DEPTH_COMPONENT24)); const Z = oe(y); W(y) ? c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, Z, te, y.width, y.height) : s.renderbufferStorageMultisample(s.RENDERBUFFER, Z, te, y.width, y.height) } else s.renderbufferStorage(s.RENDERBUFFER, te, y.width, y.height); s.framebufferRenderbuffer(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.RENDERBUFFER, S) } else if (y.depthBuffer && y.stencilBuffer) { const te = oe(y); N && W(y) === !1 ? s.renderbufferStorageMultisample(s.RENDERBUFFER, te, s.DEPTH24_STENCIL8, y.width, y.height) : W(y) ? c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, te, s.DEPTH24_STENCIL8, y.width, y.height) : s.renderbufferStorage(s.RENDERBUFFER, s.DEPTH_STENCIL, y.width, y.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.RENDERBUFFER, S) } else { const te = y.isWebGLMultipleRenderTargets === !0 ? y.texture : [y.texture]; for (let J = 0; J < te.length; J++) { const Z = te[J], ye = r.convert(Z.format, Z.colorSpace), de = r.convert(Z.type), _e = M(Z.internalFormat, ye, de, Z.colorSpace), Ce = oe(y); N && W(y) === !1 ? s.renderbufferStorageMultisample(s.RENDERBUFFER, Ce, _e, y.width, y.height) : W(y) ? c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, Ce, _e, y.width, y.height) : s.renderbufferStorage(s.RENDERBUFFER, _e, y.width, y.height) } } s.bindRenderbuffer(s.RENDERBUFFER, null) } function ve(S, y) { if (y && y.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported"); if (t.bindFramebuffer(s.FRAMEBUFFER, S), !(y.depthTexture && y.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture"); (!n.get(y.depthTexture).__webglTexture || y.depthTexture.image.width !== y.width || y.depthTexture.image.height !== y.height) && (y.depthTexture.image.width = y.width, y.depthTexture.image.height = y.height, y.depthTexture.needsUpdate = !0), O(y.depthTexture, 0); const te = n.get(y.depthTexture).__webglTexture, J = oe(y); if (y.depthTexture.format === $n) W(y) ? c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, te, 0, J) : s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, te, 0); else if (y.depthTexture.format === Fi) W(y) ? c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.TEXTURE_2D, te, 0, J) : s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.TEXTURE_2D, te, 0); else throw new Error("Unknown depthTexture format") } function Oe(S) { const y = n.get(S), N = S.isWebGLCubeRenderTarget === !0; if (S.depthTexture && !y.__autoAllocateDepthBuffer) { if (N) throw new Error("target.depthTexture not supported in Cube render targets"); ve(y.__webglFramebuffer, S) } else if (N) { y.__webglDepthbuffer = []; for (let te = 0; te < 6; te++)t.bindFramebuffer(s.FRAMEBUFFER, y.__webglFramebuffer[te]), y.__webglDepthbuffer[te] = s.createRenderbuffer(), Te(y.__webglDepthbuffer[te], S, !1) } else t.bindFramebuffer(s.FRAMEBUFFER, y.__webglFramebuffer), y.__webglDepthbuffer = s.createRenderbuffer(), Te(y.__webglDepthbuffer, S, !1); t.bindFramebuffer(s.FRAMEBUFFER, null) } function Ae(S, y, N) { const te = n.get(S); y !== void 0 && Me(te.__webglFramebuffer, S, S.texture, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, 0), N !== void 0 && Oe(S) } function C(S) { const y = S.texture, N = n.get(S), te = n.get(y); S.addEventListener("dispose", z), S.isWebGLMultipleRenderTargets !== !0 && (te.__webglTexture === void 0 && (te.__webglTexture = s.createTexture()), te.__version = y.version, o.memory.textures++); const J = S.isWebGLCubeRenderTarget === !0, Z = S.isWebGLMultipleRenderTargets === !0, ye = f(S) || a; if (J) { N.__webglFramebuffer = []; for (let de = 0; de < 6; de++)if (a && y.mipmaps && y.mipmaps.length > 0) { N.__webglFramebuffer[de] = []; for (let _e = 0; _e < y.mipmaps.length; _e++)N.__webglFramebuffer[de][_e] = s.createFramebuffer() } else N.__webglFramebuffer[de] = s.createFramebuffer() } else { if (a && y.mipmaps && y.mipmaps.length > 0) { N.__webglFramebuffer = []; for (let de = 0; de < y.mipmaps.length; de++)N.__webglFramebuffer[de] = s.createFramebuffer() } else N.__webglFramebuffer = s.createFramebuffer(); if (Z) if (i.drawBuffers) { const de = S.texture; for (let _e = 0, Ce = de.length; _e < Ce; _e++) { const Fe = n.get(de[_e]); Fe.__webglTexture === void 0 && (Fe.__webglTexture = s.createTexture(), o.memory.textures++) } } else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension."); if (a && S.samples > 0 && W(S) === !1) { const de = Z ? y : [y]; N.__webglMultisampledFramebuffer = s.createFramebuffer(), N.__webglColorRenderbuffer = [], t.bindFramebuffer(s.FRAMEBUFFER, N.__webglMultisampledFramebuffer); for (let _e = 0; _e < de.length; _e++) { const Ce = de[_e]; N.__webglColorRenderbuffer[_e] = s.createRenderbuffer(), s.bindRenderbuffer(s.RENDERBUFFER, N.__webglColorRenderbuffer[_e]); const Fe = r.convert(Ce.format, Ce.colorSpace), $ = r.convert(Ce.type), Ke = M(Ce.internalFormat, Fe, $, Ce.colorSpace, S.isXRRenderTarget === !0), ke = oe(S); s.renderbufferStorageMultisample(s.RENDERBUFFER, ke, Ke, S.width, S.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + _e, s.RENDERBUFFER, N.__webglColorRenderbuffer[_e]) } s.bindRenderbuffer(s.RENDERBUFFER, null), S.depthBuffer && (N.__webglDepthRenderbuffer = s.createRenderbuffer(), Te(N.__webglDepthRenderbuffer, S, !0)), t.bindFramebuffer(s.FRAMEBUFFER, null) } } if (J) { t.bindTexture(s.TEXTURE_CUBE_MAP, te.__webglTexture), Pe(s.TEXTURE_CUBE_MAP, y, ye); for (let de = 0; de < 6; de++)if (a && y.mipmaps && y.mipmaps.length > 0) for (let _e = 0; _e < y.mipmaps.length; _e++)Me(N.__webglFramebuffer[de][_e], S, y, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + de, _e); else Me(N.__webglFramebuffer[de], S, y, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + de, 0); T(y, ye) && x(s.TEXTURE_CUBE_MAP), t.unbindTexture() } else if (Z) { const de = S.texture; for (let _e = 0, Ce = de.length; _e < Ce; _e++) { const Fe = de[_e], $ = n.get(Fe); t.bindTexture(s.TEXTURE_2D, $.__webglTexture), Pe(s.TEXTURE_2D, Fe, ye), Me(N.__webglFramebuffer, S, Fe, s.COLOR_ATTACHMENT0 + _e, s.TEXTURE_2D, 0), T(Fe, ye) && x(s.TEXTURE_2D) } t.unbindTexture() } else { let de = s.TEXTURE_2D; if ((S.isWebGL3DRenderTarget || S.isWebGLArrayRenderTarget) && (a ? de = S.isWebGL3DRenderTarget ? s.TEXTURE_3D : s.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(de, te.__webglTexture), Pe(de, y, ye), a && y.mipmaps && y.mipmaps.length > 0) for (let _e = 0; _e < y.mipmaps.length; _e++)Me(N.__webglFramebuffer[_e], S, y, s.COLOR_ATTACHMENT0, de, _e); else Me(N.__webglFramebuffer, S, y, s.COLOR_ATTACHMENT0, de, 0); T(y, ye) && x(de), t.unbindTexture() } S.depthBuffer && Oe(S) } function le(S) { const y = f(S) || a, N = S.isWebGLMultipleRenderTargets === !0 ? S.texture : [S.texture]; for (let te = 0, J = N.length; te < J; te++) { const Z = N[te]; if (T(Z, y)) { const ye = S.isWebGLCubeRenderTarget ? s.TEXTURE_CUBE_MAP : s.TEXTURE_2D, de = n.get(Z).__webglTexture; t.bindTexture(ye, de), x(ye), t.unbindTexture() } } } function V(S) { if (a && S.samples > 0 && W(S) === !1) { const y = S.isWebGLMultipleRenderTargets ? S.texture : [S.texture], N = S.width, te = S.height; let J = s.COLOR_BUFFER_BIT; const Z = [], ye = S.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, de = n.get(S), _e = S.isWebGLMultipleRenderTargets === !0; if (_e) for (let Ce = 0; Ce < y.length; Ce++)t.bindFramebuffer(s.FRAMEBUFFER, de.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + Ce, s.RENDERBUFFER, null), t.bindFramebuffer(s.FRAMEBUFFER, de.__webglFramebuffer), s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0 + Ce, s.TEXTURE_2D, null, 0); t.bindFramebuffer(s.READ_FRAMEBUFFER, de.__webglMultisampledFramebuffer), t.bindFramebuffer(s.DRAW_FRAMEBUFFER, de.__webglFramebuffer); for (let Ce = 0; Ce < y.length; Ce++) { Z.push(s.COLOR_ATTACHMENT0 + Ce), S.depthBuffer && Z.push(ye); const Fe = de.__ignoreDepthValues !== void 0 ? de.__ignoreDepthValues : !1; if (Fe === !1 && (S.depthBuffer && (J |= s.DEPTH_BUFFER_BIT), S.stencilBuffer && (J |= s.STENCIL_BUFFER_BIT)), _e && s.framebufferRenderbuffer(s.READ_FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.RENDERBUFFER, de.__webglColorRenderbuffer[Ce]), Fe === !0 && (s.invalidateFramebuffer(s.READ_FRAMEBUFFER, [ye]), s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, [ye])), _e) { const $ = n.get(y[Ce]).__webglTexture; s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, $, 0) } s.blitFramebuffer(0, 0, N, te, 0, 0, N, te, J, s.NEAREST), l && s.invalidateFramebuffer(s.READ_FRAMEBUFFER, Z) } if (t.bindFramebuffer(s.READ_FRAMEBUFFER, null), t.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), _e) for (let Ce = 0; Ce < y.length; Ce++) { t.bindFramebuffer(s.FRAMEBUFFER, de.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + Ce, s.RENDERBUFFER, de.__webglColorRenderbuffer[Ce]); const Fe = n.get(y[Ce]).__webglTexture; t.bindFramebuffer(s.FRAMEBUFFER, de.__webglFramebuffer), s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0 + Ce, s.TEXTURE_2D, Fe, 0) } t.bindFramebuffer(s.DRAW_FRAMEBUFFER, de.__webglMultisampledFramebuffer) } } function oe(S) { return Math.min(i.maxSamples, S.samples) } function W(S) { const y = n.get(S); return a && S.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && y.__useRenderToTexture !== !1 } function Ee(S) { const y = o.render.frame; h.get(S) !== y && (h.set(S, y), S.update()) } function pe(S, y) { const N = S.colorSpace, te = S.format, J = S.type; return S.isCompressedTexture === !0 || S.isVideoTexture === !0 || S.format === go || N !== vt && N !== Vt && ($e.getTransfer(N) === it ? a === !1 ? e.has("EXT_sRGB") === !0 && te === kt ? (S.format = go, S.minFilter = At, S.generateMipmaps = !1) : y = yl.sRGBToLinear(y) : (te !== kt || J !== Un) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", N)), y } this.allocateTextureUnit = D, this.resetTextureUnits = ee, this.setTexture2D = O, this.setTexture2DArray = j, this.setTexture3D = X, this.setTextureCube = Y, this.rebindTextures = Ae, this.setupRenderTarget = C, this.updateRenderTargetMipmap = le, this.updateMultisampleRenderTarget = V, this.setupDepthRenderbuffer = Oe, this.setupFrameBufferTexture = Me, this.useMultisampledRTT = W } function Tg(s, e, t) { const n = t.isWebGL2; function i(r, o = Vt) { let a; const c = $e.getTransfer(o); if (r === Un) return s.UNSIGNED_BYTE; if (r === ll) return s.UNSIGNED_SHORT_4_4_4_4; if (r === hl) return s.UNSIGNED_SHORT_5_5_5_1; if (r === Wh) return s.BYTE; if (r === Xh) return s.SHORT; if (r === Co) return s.UNSIGNED_SHORT; if (r === cl) return s.INT; if (r === Pn) return s.UNSIGNED_INT; if (r === tn) return s.FLOAT; if (r === as) return n ? s.HALF_FLOAT : (a = e.get("OES_texture_half_float"), a !== null ? a.HALF_FLOAT_OES : null); if (r === qh) return s.ALPHA; if (r === kt) return s.RGBA; if (r === Yh) return s.LUMINANCE; if (r === jh) return s.LUMINANCE_ALPHA; if (r === $n) return s.DEPTH_COMPONENT; if (r === Fi) return s.DEPTH_STENCIL; if (r === go) return a = e.get("EXT_sRGB"), a !== null ? a.SRGB_ALPHA_EXT : null; if (r === Kh) return s.RED; if (r === ul) return s.RED_INTEGER; if (r === Zh) return s.RG; if (r === dl) return s.RG_INTEGER; if (r === fl) return s.RGBA_INTEGER; if (r === yr || r === Mr || r === Sr || r === Er) if (c === it) if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"), a !== null) { if (r === yr) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT; if (r === Mr) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT; if (r === Sr) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT; if (r === Er) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT } else return null; else if (a = e.get("WEBGL_compressed_texture_s3tc"), a !== null) { if (r === yr) return a.COMPRESSED_RGB_S3TC_DXT1_EXT; if (r === Mr) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT; if (r === Sr) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT; if (r === Er) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT } else return null; if (r === ua || r === da || r === fa || r === pa) if (a = e.get("WEBGL_compressed_texture_pvrtc"), a !== null) { if (r === ua) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG; if (r === da) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG; if (r === fa) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG; if (r === pa) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG } else return null; if (r === pl) return a = e.get("WEBGL_compressed_texture_etc1"), a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null; if (r === ma || r === ga) if (a = e.get("WEBGL_compressed_texture_etc"), a !== null) { if (r === ma) return c === it ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2; if (r === ga) return c === it ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC } else return null; if (r === _a || r === xa || r === va || r === ya || r === Ma || r === Sa || r === Ea || r === Ta || r === ba || r === Aa || r === wa || r === Ra || r === Ca || r === La) if (a = e.get("WEBGL_compressed_texture_astc"), a !== null) { if (r === _a) return c === it ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR; if (r === xa) return c === it ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR; if (r === va) return c === it ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR; if (r === ya) return c === it ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR; if (r === Ma) return c === it ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR; if (r === Sa) return c === it ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR; if (r === Ea) return c === it ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR; if (r === Ta) return c === it ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR; if (r === ba) return c === it ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR; if (r === Aa) return c === it ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR; if (r === wa) return c === it ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR; if (r === Ra) return c === it ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR; if (r === Ca) return c === it ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR; if (r === La) return c === it ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR } else return null; if (r === Tr || r === Pa || r === Ia) if (a = e.get("EXT_texture_compression_bptc"), a !== null) { if (r === Tr) return c === it ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT; if (r === Pa) return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT; if (r === Ia) return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT } else return null; if (r === Jh || r === Da || r === Na || r === Ua) if (a = e.get("EXT_texture_compression_rgtc"), a !== null) { if (r === Tr) return a.COMPRESSED_RED_RGTC1_EXT; if (r === Da) return a.COMPRESSED_SIGNED_RED_RGTC1_EXT; if (r === Na) return a.COMPRESSED_RED_GREEN_RGTC2_EXT; if (r === Ua) return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT } else return null; return r === Jn ? n ? s.UNSIGNED_INT_24_8 : (a = e.get("WEBGL_depth_texture"), a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null) : s[r] !== void 0 ? s[r] : null } return { convert: i } } class bg extends Lt { constructor(e = []) { super(), this.isArrayCamera = !0, this.cameras = e } } class Kn extends ot { constructor() { super(), this.isGroup = !0, this.type = "Group" } } const Ag = { type: "move" }; class jr { constructor() { this._targetRay = null, this._grip = null, this._hand = null } getHandSpace() { return this._hand === null && (this._hand = new Kn, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand } getTargetRaySpace() { return this._targetRay === null && (this._targetRay = new Kn, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new P, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new P), this._targetRay } getGripSpace() { return this._grip === null && (this._grip = new Kn, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new P, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new P), this._grip } dispatchEvent(e) { return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this } connect(e) { if (e && e.hand) { const t = this._hand; if (t) for (const n of e.hand.values()) this._getHandJoint(t, n) } return this.dispatchEvent({ type: "connected", data: e }), this } disconnect(e) { return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this } update(e, t, n) { let i = null, r = null, o = null; const a = this._targetRay, c = this._grip, l = this._hand; if (e && t.session.visibilityState !== "visible-blurred") { if (l && e.hand) { o = !0; for (const _ of e.hand.values()) { const f = t.getJointPose(_, n), p = this._getHandJoint(l, _); f !== null && (p.matrix.fromArray(f.transform.matrix), p.matrix.decompose(p.position, p.rotation, p.scale), p.matrixWorldNeedsUpdate = !0, p.jointRadius = f.radius), p.visible = f !== null } const h = l.joints["index-finger-tip"], u = l.joints["thumb-tip"], d = h.position.distanceTo(u.position), m = .02, g = .005; l.inputState.pinching && d > m + g ? (l.inputState.pinching = !1, this.dispatchEvent({ type: "pinchend", handedness: e.handedness, target: this })) : !l.inputState.pinching && d <= m - g && (l.inputState.pinching = !0, this.dispatchEvent({ type: "pinchstart", handedness: e.handedness, target: this })) } else c !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n), r !== null && (c.matrix.fromArray(r.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(r.linearVelocity)) : c.hasLinearVelocity = !1, r.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(r.angularVelocity)) : c.hasAngularVelocity = !1)); a !== null && (i = t.getPose(e.targetRaySpace, n), i === null && r !== null && (i = r), i !== null && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1, i.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(Ag))) } return a !== null && (a.visible = i !== null), c !== null && (c.visible = r !== null), l !== null && (l.visible = o !== null), this } _getHandJoint(e, t) { if (e.joints[t.jointName] === void 0) { const n = new Kn; n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n) } return e.joints[t.jointName] } } const wg = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Rg = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`; class Cg { constructor() { this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0 } init(e, t, n) { if (this.texture === null) { const i = new xt, r = e.properties.get(i); r.__webglTexture = t.texture, (t.depthNear != n.depthNear || t.depthFar != n.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = i } } render(e, t) { if (this.texture !== null) { if (this.mesh === null) { const n = t.cameras[0].viewport, i = new Fn({ extensions: { fragDepth: !0 }, vertexShader: wg, fragmentShader: Rg, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: n.z }, depthHeight: { value: n.w } } }); this.mesh = new Pt(new hr(20, 20), i) } e.render(this.mesh, t) } } reset() { this.texture = null, this.mesh = null } } class Lg extends si { constructor(e, t) { super(); const n = this; let i = null, r = 1, o = null, a = "local-floor", c = 1, l = null, h = null, u = null, d = null, m = null, g = null; const _ = new Cg, f = t.getContextAttributes(); let p = null, T = null; const x = [], M = [], I = new ae; let L = null; const A = new Lt; A.layers.enable(1), A.viewport = new nt; const z = new Lt; z.layers.enable(2), z.viewport = new nt; const Q = [A, z], v = new bg; v.layers.enable(1), v.layers.enable(2); let w = null, q = null; this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function (k) { let ie = x[k]; return ie === void 0 && (ie = new jr, x[k] = ie), ie.getTargetRaySpace() }, this.getControllerGrip = function (k) { let ie = x[k]; return ie === void 0 && (ie = new jr, x[k] = ie), ie.getGripSpace() }, this.getHand = function (k) { let ie = x[k]; return ie === void 0 && (ie = new jr, x[k] = ie), ie.getHandSpace() }; function ee(k) { const ie = M.indexOf(k.inputSource); if (ie === -1) return; const ge = x[ie]; ge !== void 0 && (ge.update(k.inputSource, k.frame, l || o), ge.dispatchEvent({ type: k.type, data: k.inputSource })) } function D() { i.removeEventListener("select", ee), i.removeEventListener("selectstart", ee), i.removeEventListener("selectend", ee), i.removeEventListener("squeeze", ee), i.removeEventListener("squeezestart", ee), i.removeEventListener("squeezeend", ee), i.removeEventListener("end", D), i.removeEventListener("inputsourceschange", G); for (let k = 0; k < x.length; k++) { const ie = M[k]; ie !== null && (M[k] = null, x[k].disconnect(ie)) } w = null, q = null, _.reset(), e.setRenderTarget(p), m = null, d = null, u = null, i = null, T = null, Pe.stop(), n.isPresenting = !1, e.setPixelRatio(L), e.setSize(I.width, I.height, !1), n.dispatchEvent({ type: "sessionend" }) } this.setFramebufferScaleFactor = function (k) { r = k, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.") }, this.setReferenceSpaceType = function (k) { a = k, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.") }, this.getReferenceSpace = function () { return l || o }, this.setReferenceSpace = function (k) { l = k }, this.getBaseLayer = function () { return d !== null ? d : m }, this.getBinding = function () { return u }, this.getFrame = function () { return g }, this.getSession = function () { return i }, this.setSession = async function (k) { if (i = k, i !== null) { if (p = e.getRenderTarget(), i.addEventListener("select", ee), i.addEventListener("selectstart", ee), i.addEventListener("selectend", ee), i.addEventListener("squeeze", ee), i.addEventListener("squeezestart", ee), i.addEventListener("squeezeend", ee), i.addEventListener("end", D), i.addEventListener("inputsourceschange", G), f.xrCompatible !== !0 && await t.makeXRCompatible(), L = e.getPixelRatio(), e.getSize(I), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) { const ie = { antialias: i.renderState.layers === void 0 ? f.antialias : !0, alpha: !0, depth: f.depth, stencil: f.stencil, framebufferScaleFactor: r }; m = new XRWebGLLayer(i, t, ie), i.updateRenderState({ baseLayer: m }), e.setPixelRatio(1), e.setSize(m.framebufferWidth, m.framebufferHeight, !1), T = new ti(m.framebufferWidth, m.framebufferHeight, { format: kt, type: Un, colorSpace: e.outputColorSpace, stencilBuffer: f.stencil }) } else { let ie = null, ge = null, Me = null; f.depth && (Me = f.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, ie = f.stencil ? Fi : $n, ge = f.stencil ? Jn : Pn); const Te = { colorFormat: t.RGBA8, depthFormat: Me, scaleFactor: r }; u = new XRWebGLBinding(i, t), d = u.createProjectionLayer(Te), i.updateRenderState({ layers: [d] }), e.setPixelRatio(1), e.setSize(d.textureWidth, d.textureHeight, !1), T = new ti(d.textureWidth, d.textureHeight, { format: kt, type: Un, depthTexture: new Pl(d.textureWidth, d.textureHeight, ge, void 0, void 0, void 0, void 0, void 0, void 0, ie), stencilBuffer: f.stencil, colorSpace: e.outputColorSpace, samples: f.antialias ? 4 : 0 }); const ve = e.properties.get(T); ve.__ignoreDepthValues = d.ignoreDepthValues } T.isXRRenderTarget = !0, this.setFoveation(c), l = null, o = await i.requestReferenceSpace(a), Pe.setContext(i), Pe.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" }) } }, this.getEnvironmentBlendMode = function () { if (i !== null) return i.environmentBlendMode }; function G(k) { for (let ie = 0; ie < k.removed.length; ie++) { const ge = k.removed[ie], Me = M.indexOf(ge); Me >= 0 && (M[Me] = null, x[Me].disconnect(ge)) } for (let ie = 0; ie < k.added.length; ie++) { const ge = k.added[ie]; let Me = M.indexOf(ge); if (Me === -1) { for (let ve = 0; ve < x.length; ve++)if (ve >= M.length) { M.push(ge), Me = ve; break } else if (M[ve] === null) { M[ve] = ge, Me = ve; break } if (Me === -1) break } const Te = x[Me]; Te && Te.connect(ge) } } const O = new P, j = new P; function X(k, ie, ge) { O.setFromMatrixPosition(ie.matrixWorld), j.setFromMatrixPosition(ge.matrixWorld); const Me = O.distanceTo(j), Te = ie.projectionMatrix.elements, ve = ge.projectionMatrix.elements, Oe = Te[14] / (Te[10] - 1), Ae = Te[14] / (Te[10] + 1), C = (Te[9] + 1) / Te[5], le = (Te[9] - 1) / Te[5], V = (Te[8] - 1) / Te[0], oe = (ve[8] + 1) / ve[0], W = Oe * V, Ee = Oe * oe, pe = Me / (-V + oe), S = pe * -V; ie.matrixWorld.decompose(k.position, k.quaternion, k.scale), k.translateX(S), k.translateZ(pe), k.matrixWorld.compose(k.position, k.quaternion, k.scale), k.matrixWorldInverse.copy(k.matrixWorld).invert(); const y = Oe + pe, N = Ae + pe, te = W - S, J = Ee + (Me - S), Z = C * Ae / N * y, ye = le * Ae / N * y; k.projectionMatrix.makePerspective(te, J, Z, ye, y, N), k.projectionMatrixInverse.copy(k.projectionMatrix).invert() } function Y(k, ie) { ie === null ? k.matrixWorld.copy(k.matrix) : k.matrixWorld.multiplyMatrices(ie.matrixWorld, k.matrix), k.matrixWorldInverse.copy(k.matrixWorld).invert() } this.updateCamera = function (k) { if (i === null) return; _.texture !== null && (k.near = _.depthNear, k.far = _.depthFar), v.near = z.near = A.near = k.near, v.far = z.far = A.far = k.far, (w !== v.near || q !== v.far) && (i.updateRenderState({ depthNear: v.near, depthFar: v.far }), w = v.near, q = v.far, A.near = w, A.far = q, z.near = w, z.far = q, A.updateProjectionMatrix(), z.updateProjectionMatrix(), k.updateProjectionMatrix()); const ie = k.parent, ge = v.cameras; Y(v, ie); for (let Me = 0; Me < ge.length; Me++)Y(ge[Me], ie); ge.length === 2 ? X(v, A, z) : v.projectionMatrix.copy(A.projectionMatrix), K(k, v, ie) }; function K(k, ie, ge) { ge === null ? k.matrix.copy(ie.matrixWorld) : (k.matrix.copy(ge.matrixWorld), k.matrix.invert(), k.matrix.multiply(ie.matrixWorld)), k.matrix.decompose(k.position, k.quaternion, k.scale), k.updateMatrixWorld(!0), k.projectionMatrix.copy(ie.projectionMatrix), k.projectionMatrixInverse.copy(ie.projectionMatrixInverse), k.isPerspectiveCamera && (k.fov = zi * 2 * Math.atan(1 / k.projectionMatrix.elements[5]), k.zoom = 1) } this.getCamera = function () { return v }, this.getFoveation = function () { if (!(d === null && m === null)) return c }, this.setFoveation = function (k) { c = k, d !== null && (d.fixedFoveation = k), m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = k) }, this.hasDepthSensing = function () { return _.texture !== null }; let ne = null; function he(k, ie) { if (h = ie.getViewerPose(l || o), g = ie, h !== null) { const ge = h.views; m !== null && (e.setRenderTargetFramebuffer(T, m.framebuffer), e.setRenderTarget(T)); let Me = !1; ge.length !== v.cameras.length && (v.cameras.length = 0, Me = !0); for (let ve = 0; ve < ge.length; ve++) { const Oe = ge[ve]; let Ae = null; if (m !== null) Ae = m.getViewport(Oe); else { const le = u.getViewSubImage(d, Oe); Ae = le.viewport, ve === 0 && (e.setRenderTargetTextures(T, le.colorTexture, d.ignoreDepthValues ? void 0 : le.depthStencilTexture), e.setRenderTarget(T)) } let C = Q[ve]; C === void 0 && (C = new Lt, C.layers.enable(ve), C.viewport = new nt, Q[ve] = C), C.matrix.fromArray(Oe.transform.matrix), C.matrix.decompose(C.position, C.quaternion, C.scale), C.projectionMatrix.fromArray(Oe.projectionMatrix), C.projectionMatrixInverse.copy(C.projectionMatrix).invert(), C.viewport.set(Ae.x, Ae.y, Ae.width, Ae.height), ve === 0 && (v.matrix.copy(C.matrix), v.matrix.decompose(v.position, v.quaternion, v.scale)), Me === !0 && v.cameras.push(C) } const Te = i.enabledFeatures; if (Te && Te.includes("depth-sensing")) { const ve = u.getDepthInformation(ge[0]); ve && ve.isValid && ve.texture && _.init(e, ve, i.renderState) } } for (let ge = 0; ge < x.length; ge++) { const Me = M[ge], Te = x[ge]; Me !== null && Te !== void 0 && Te.update(Me, ie, l || o) } _.render(e, v), ne && ne(k, ie), ie.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: ie }), g = null } const Pe = new Ll; Pe.setAnimationLoop(he), this.setAnimationLoop = function (k) { ne = k }, this.dispose = function () { } } } function Pg(s, e) { function t(f, p) { f.matrixAutoUpdate === !0 && f.updateMatrix(), p.value.copy(f.matrix) } function n(f, p) { p.color.getRGB(f.fogColor.value, wl(s)), p.isFog ? (f.fogNear.value = p.near, f.fogFar.value = p.far) : p.isFogExp2 && (f.fogDensity.value = p.density) } function i(f, p, T, x, M) { p.isMeshBasicMaterial || p.isMeshLambertMaterial ? r(f, p) : p.isMeshToonMaterial ? (r(f, p), u(f, p)) : p.isMeshPhongMaterial ? (r(f, p), h(f, p)) : p.isMeshStandardMaterial ? (r(f, p), d(f, p), p.isMeshPhysicalMaterial && m(f, p, M)) : p.isMeshMatcapMaterial ? (r(f, p), g(f, p)) : p.isMeshDepthMaterial ? r(f, p) : p.isMeshDistanceMaterial ? (r(f, p), _(f, p)) : p.isMeshNormalMaterial ? r(f, p) : p.isLineBasicMaterial ? (o(f, p), p.isLineDashedMaterial && a(f, p)) : p.isPointsMaterial ? c(f, p, T, x) : p.isSpriteMaterial ? l(f, p) : p.isShadowMaterial ? (f.color.value.copy(p.color), f.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = !1) } function r(f, p) { f.opacity.value = p.opacity, p.color && f.diffuse.value.copy(p.color), p.emissive && f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (f.map.value = p.map, t(p.map, f.mapTransform)), p.alphaMap && (f.alphaMap.value = p.alphaMap, t(p.alphaMap, f.alphaMapTransform)), p.bumpMap && (f.bumpMap.value = p.bumpMap, t(p.bumpMap, f.bumpMapTransform), f.bumpScale.value = p.bumpScale, p.side === Nt && (f.bumpScale.value *= -1)), p.normalMap && (f.normalMap.value = p.normalMap, t(p.normalMap, f.normalMapTransform), f.normalScale.value.copy(p.normalScale), p.side === Nt && f.normalScale.value.negate()), p.displacementMap && (f.displacementMap.value = p.displacementMap, t(p.displacementMap, f.displacementMapTransform), f.displacementScale.value = p.displacementScale, f.displacementBias.value = p.displacementBias), p.emissiveMap && (f.emissiveMap.value = p.emissiveMap, t(p.emissiveMap, f.emissiveMapTransform)), p.specularMap && (f.specularMap.value = p.specularMap, t(p.specularMap, f.specularMapTransform)), p.alphaTest > 0 && (f.alphaTest.value = p.alphaTest); const T = e.get(p).envMap; if (T && (f.envMap.value = T, f.flipEnvMap.value = T.isCubeTexture && T.isRenderTargetTexture === !1 ? -1 : 1, f.reflectivity.value = p.reflectivity, f.ior.value = p.ior, f.refractionRatio.value = p.refractionRatio), p.lightMap) { f.lightMap.value = p.lightMap; const x = s._useLegacyLights === !0 ? Math.PI : 1; f.lightMapIntensity.value = p.lightMapIntensity * x, t(p.lightMap, f.lightMapTransform) } p.aoMap && (f.aoMap.value = p.aoMap, f.aoMapIntensity.value = p.aoMapIntensity, t(p.aoMap, f.aoMapTransform)) } function o(f, p) { f.diffuse.value.copy(p.color), f.opacity.value = p.opacity, p.map && (f.map.value = p.map, t(p.map, f.mapTransform)) } function a(f, p) { f.dashSize.value = p.dashSize, f.totalSize.value = p.dashSize + p.gapSize, f.scale.value = p.scale } function c(f, p, T, x) { f.diffuse.value.copy(p.color), f.opacity.value = p.opacity, f.size.value = p.size * T, f.scale.value = x * .5, p.map && (f.map.value = p.map, t(p.map, f.uvTransform)), p.alphaMap && (f.alphaMap.value = p.alphaMap, t(p.alphaMap, f.alphaMapTransform)), p.alphaTest > 0 && (f.alphaTest.value = p.alphaTest) } function l(f, p) { f.diffuse.value.copy(p.color), f.opacity.value = p.opacity, f.rotation.value = p.rotation, p.map && (f.map.value = p.map, t(p.map, f.mapTransform)), p.alphaMap && (f.alphaMap.value = p.alphaMap, t(p.alphaMap, f.alphaMapTransform)), p.alphaTest > 0 && (f.alphaTest.value = p.alphaTest) } function h(f, p) { f.specular.value.copy(p.specular), f.shininess.value = Math.max(p.shininess, 1e-4) } function u(f, p) { p.gradientMap && (f.gradientMap.value = p.gradientMap) } function d(f, p) { f.metalness.value = p.metalness, p.metalnessMap && (f.metalnessMap.value = p.metalnessMap, t(p.metalnessMap, f.metalnessMapTransform)), f.roughness.value = p.roughness, p.roughnessMap && (f.roughnessMap.value = p.roughnessMap, t(p.roughnessMap, f.roughnessMapTransform)), e.get(p).envMap && (f.envMapIntensity.value = p.envMapIntensity) } function m(f, p, T) { f.ior.value = p.ior, p.sheen > 0 && (f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), f.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (f.sheenColorMap.value = p.sheenColorMap, t(p.sheenColorMap, f.sheenColorMapTransform)), p.sheenRoughnessMap && (f.sheenRoughnessMap.value = p.sheenRoughnessMap, t(p.sheenRoughnessMap, f.sheenRoughnessMapTransform))), p.clearcoat > 0 && (f.clearcoat.value = p.clearcoat, f.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (f.clearcoatMap.value = p.clearcoatMap, t(p.clearcoatMap, f.clearcoatMapTransform)), p.clearcoatRoughnessMap && (f.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap, t(p.clearcoatRoughnessMap, f.clearcoatRoughnessMapTransform)), p.clearcoatNormalMap && (f.clearcoatNormalMap.value = p.clearcoatNormalMap, t(p.clearcoatNormalMap, f.clearcoatNormalMapTransform), f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), p.side === Nt && f.clearcoatNormalScale.value.negate())), p.iridescence > 0 && (f.iridescence.value = p.iridescence, f.iridescenceIOR.value = p.iridescenceIOR, f.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], f.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (f.iridescenceMap.value = p.iridescenceMap, t(p.iridescenceMap, f.iridescenceMapTransform)), p.iridescenceThicknessMap && (f.iridescenceThicknessMap.value = p.iridescenceThicknessMap, t(p.iridescenceThicknessMap, f.iridescenceThicknessMapTransform))), p.transmission > 0 && (f.transmission.value = p.transmission, f.transmissionSamplerMap.value = T.texture, f.transmissionSamplerSize.value.set(T.width, T.height), p.transmissionMap && (f.transmissionMap.value = p.transmissionMap, t(p.transmissionMap, f.transmissionMapTransform)), f.thickness.value = p.thickness, p.thicknessMap && (f.thicknessMap.value = p.thicknessMap, t(p.thicknessMap, f.thicknessMapTransform)), f.attenuationDistance.value = p.attenuationDistance, f.attenuationColor.value.copy(p.attenuationColor)), p.anisotropy > 0 && (f.anisotropyVector.value.set(p.anisotropy * Math.cos(p.anisotropyRotation), p.anisotropy * Math.sin(p.anisotropyRotation)), p.anisotropyMap && (f.anisotropyMap.value = p.anisotropyMap, t(p.anisotropyMap, f.anisotropyMapTransform))), f.specularIntensity.value = p.specularIntensity, f.specularColor.value.copy(p.specularColor), p.specularColorMap && (f.specularColorMap.value = p.specularColorMap, t(p.specularColorMap, f.specularColorMapTransform)), p.specularIntensityMap && (f.specularIntensityMap.value = p.specularIntensityMap, t(p.specularIntensityMap, f.specularIntensityMapTransform)) } function g(f, p) { p.matcap && (f.matcap.value = p.matcap) } function _(f, p) { const T = e.get(p).light; f.referencePosition.value.setFromMatrixPosition(T.matrixWorld), f.nearDistance.value = T.shadow.camera.near, f.farDistance.value = T.shadow.camera.far } return { refreshFogUniforms: n, refreshMaterialUniforms: i } } function Ig(s, e, t, n) { let i = {}, r = {}, o = []; const a = t.isWebGL2 ? s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS) : 0; function c(T, x) { const M = x.program; n.uniformBlockBinding(T, M) } function l(T, x) { let M = i[T.id]; M === void 0 && (g(T), M = h(T), i[T.id] = M, T.addEventListener("dispose", f)); const I = x.program; n.updateUBOMapping(T, I); const L = e.render.frame; r[T.id] !== L && (d(T), r[T.id] = L) } function h(T) { const x = u(); T.__bindingPointIndex = x; const M = s.createBuffer(), I = T.__size, L = T.usage; return s.bindBuffer(s.UNIFORM_BUFFER, M), s.bufferData(s.UNIFORM_BUFFER, I, L), s.bindBuffer(s.UNIFORM_BUFFER, null), s.bindBufferBase(s.UNIFORM_BUFFER, x, M), M } function u() { for (let T = 0; T < a; T++)if (o.indexOf(T) === -1) return o.push(T), T; return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0 } function d(T) { const x = i[T.id], M = T.uniforms, I = T.__cache; s.bindBuffer(s.UNIFORM_BUFFER, x); for (let L = 0, A = M.length; L < A; L++) { const z = Array.isArray(M[L]) ? M[L] : [M[L]]; for (let Q = 0, v = z.length; Q < v; Q++) { const w = z[Q]; if (m(w, L, Q, I) === !0) { const q = w.__offset, ee = Array.isArray(w.value) ? w.value : [w.value]; let D = 0; for (let G = 0; G < ee.length; G++) { const O = ee[G], j = _(O); typeof O == "number" || typeof O == "boolean" ? (w.__data[0] = O, s.bufferSubData(s.UNIFORM_BUFFER, q + D, w.__data)) : O.isMatrix3 ? (w.__data[0] = O.elements[0], w.__data[1] = O.elements[1], w.__data[2] = O.elements[2], w.__data[3] = 0, w.__data[4] = O.elements[3], w.__data[5] = O.elements[4], w.__data[6] = O.elements[5], w.__data[7] = 0, w.__data[8] = O.elements[6], w.__data[9] = O.elements[7], w.__data[10] = O.elements[8], w.__data[11] = 0) : (O.toArray(w.__data, D), D += j.storage / Float32Array.BYTES_PER_ELEMENT) } s.bufferSubData(s.UNIFORM_BUFFER, q, w.__data) } } } s.bindBuffer(s.UNIFORM_BUFFER, null) } function m(T, x, M, I) { const L = T.value, A = x + "_" + M; if (I[A] === void 0) return typeof L == "number" || typeof L == "boolean" ? I[A] = L : I[A] = L.clone(), !0; { const z = I[A]; if (typeof L == "number" || typeof L == "boolean") { if (z !== L) return I[A] = L, !0 } else if (z.equals(L) === !1) return z.copy(L), !0 } return !1 } function g(T) { const x = T.uniforms; let M = 0; const I = 16; for (let A = 0, z = x.length; A < z; A++) { const Q = Array.isArray(x[A]) ? x[A] : [x[A]]; for (let v = 0, w = Q.length; v < w; v++) { const q = Q[v], ee = Array.isArray(q.value) ? q.value : [q.value]; for (let D = 0, G = ee.length; D < G; D++) { const O = ee[D], j = _(O), X = M % I; X !== 0 && I - X < j.boundary && (M += I - X), q.__data = new Float32Array(j.storage / Float32Array.BYTES_PER_ELEMENT), q.__offset = M, M += j.storage } } } const L = M % I; return L > 0 && (M += I - L), T.__size = M, T.__cache = {}, this } function _(T) { const x = { boundary: 0, storage: 0 }; return typeof T == "number" || typeof T == "boolean" ? (x.boundary = 4, x.storage = 4) : T.isVector2 ? (x.boundary = 8, x.storage = 8) : T.isVector3 || T.isColor ? (x.boundary = 16, x.storage = 12) : T.isVector4 ? (x.boundary = 16, x.storage = 16) : T.isMatrix3 ? (x.boundary = 48, x.storage = 48) : T.isMatrix4 ? (x.boundary = 64, x.storage = 64) : T.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", T), x } function f(T) { const x = T.target; x.removeEventListener("dispose", f); const M = o.indexOf(x.__bindingPointIndex); o.splice(M, 1), s.deleteBuffer(i[x.id]), delete i[x.id], delete r[x.id] } function p() { for (const T in i) s.deleteBuffer(i[T]); o = [], i = {}, r = {} } return { bind: c, update: l, dispose: p } } class Fl { constructor(e = {}) { const { canvas: t = Tu(), context: n = null, depth: i = !0, stencil: r = !0, alpha: o = !1, antialias: a = !1, premultipliedAlpha: c = !0, preserveDrawingBuffer: l = !1, powerPreference: h = "default", failIfMajorPerformanceCaveat: u = !1 } = e; this.isWebGLRenderer = !0; let d; n !== null ? d = n.getContextAttributes().alpha : d = o; const m = new Uint32Array(4), g = new Int32Array(4); let _ = null, f = null; const p = [], T = []; this.domElement = t, this.debug = { checkShaderErrors: !0, onShaderError: null }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = ct, this._useLegacyLights = !1, this.toneMapping = Nn, this.toneMappingExposure = 1; const x = this; let M = !1, I = 0, L = 0, A = null, z = -1, Q = null; const v = new nt, w = new nt; let q = null; const ee = new De(0); let D = 0, G = t.width, O = t.height, j = 1, X = null, Y = null; const K = new nt(0, 0, G, O), ne = new nt(0, 0, G, O); let he = !1; const Pe = new Do; let k = !1, ie = !1, ge = null; const Me = new We, Te = new ae, ve = new P, Oe = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 }; function Ae() { return A === null ? j : 1 } let C = n; function le(E, U) { for (let B = 0; B < E.length; B++) { const H = E[B], F = t.getContext(H, U); if (F !== null) return F } return null } try { const E = { alpha: !0, depth: i, stencil: r, antialias: a, premultipliedAlpha: c, preserveDrawingBuffer: l, powerPreference: h, failIfMajorPerformanceCaveat: u }; if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${wo}`), t.addEventListener("webglcontextlost", Re, !1), t.addEventListener("webglcontextrestored", b, !1), t.addEventListener("webglcontextcreationerror", re, !1), C === null) { const U = ["webgl2", "webgl", "experimental-webgl"]; if (x.isWebGL1Renderer === !0 && U.shift(), C = le(U, E), C === null) throw le(U) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.") } typeof WebGLRenderingContext < "u" && C instanceof WebGLRenderingContext && console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."), C.getShaderPrecisionFormat === void 0 && (C.getShaderPrecisionFormat = function () { return { rangeMin: 1, rangeMax: 1, precision: 1 } }) } catch (E) { throw console.error("THREE.WebGLRenderer: " + E.message), E } let V, oe, W, Ee, pe, S, y, N, te, J, Z, ye, de, _e, Ce, Fe, $, Ke, ke, Ne, we, me, ze, R; function ce() { V = new zp(C), oe = new Dp(C, V, e), V.init(oe), me = new Tg(C, V, oe), W = new Sg(C, V, oe), Ee = new kp(C), pe = new cg, S = new Eg(C, V, W, pe, oe, me, Ee), y = new Up(x), N = new Bp(x), te = new Ku(C, oe), ze = new Pp(C, V, te, oe), J = new Hp(C, te, Ee, ze), Z = new qp(C, J, te, Ee), ke = new Xp(C, oe, S), Fe = new Np(pe), ye = new ag(x, y, N, V, oe, ze, Fe), de = new Pg(x, pe), _e = new hg, Ce = new gg(V, oe), Ke = new Lp(x, y, N, W, Z, d, c), $ = new Mg(x, Z, oe), R = new Ig(C, Ee, oe, W), Ne = new Ip(C, V, Ee, oe), we = new Gp(C, V, Ee, oe), Ee.programs = ye.programs, x.capabilities = oe, x.extensions = V, x.properties = pe, x.renderLists = _e, x.shadowMap = $, x.state = W, x.info = Ee } ce(); const fe = new Lg(x, C); this.xr = fe, this.getContext = function () { return C }, this.getContextAttributes = function () { return C.getContextAttributes() }, this.forceContextLoss = function () { const E = V.get("WEBGL_lose_context"); E && E.loseContext() }, this.forceContextRestore = function () { const E = V.get("WEBGL_lose_context"); E && E.restoreContext() }, this.getPixelRatio = function () { return j }, this.setPixelRatio = function (E) { E !== void 0 && (j = E, this.setSize(G, O, !1)) }, this.getSize = function (E) { return E.set(G, O) }, this.setSize = function (E, U, B = !0) { if (fe.isPresenting) { console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."); return } G = E, O = U, t.width = Math.floor(E * j), t.height = Math.floor(U * j), B === !0 && (t.style.width = E + "px", t.style.height = U + "px"), this.setViewport(0, 0, E, U) }, this.getDrawingBufferSize = function (E) { return E.set(G * j, O * j).floor() }, this.setDrawingBufferSize = function (E, U, B) { G = E, O = U, j = B, t.width = Math.floor(E * B), t.height = Math.floor(U * B), this.setViewport(0, 0, E, U) }, this.getCurrentViewport = function (E) { return E.copy(v) }, this.getViewport = function (E) { return E.copy(K) }, this.setViewport = function (E, U, B, H) { E.isVector4 ? K.set(E.x, E.y, E.z, E.w) : K.set(E, U, B, H), W.viewport(v.copy(K).multiplyScalar(j).floor()) }, this.getScissor = function (E) { return E.copy(ne) }, this.setScissor = function (E, U, B, H) { E.isVector4 ? ne.set(E.x, E.y, E.z, E.w) : ne.set(E, U, B, H), W.scissor(w.copy(ne).multiplyScalar(j).floor()) }, this.getScissorTest = function () { return he }, this.setScissorTest = function (E) { W.setScissorTest(he = E) }, this.setOpaqueSort = function (E) { X = E }, this.setTransparentSort = function (E) { Y = E }, this.getClearColor = function (E) { return E.copy(Ke.getClearColor()) }, this.setClearColor = function () { Ke.setClearColor.apply(Ke, arguments) }, this.getClearAlpha = function () { return Ke.getClearAlpha() }, this.setClearAlpha = function () { Ke.setClearAlpha.apply(Ke, arguments) }, this.clear = function (E = !0, U = !0, B = !0) { let H = 0; if (E) { let F = !1; if (A !== null) { const xe = A.texture.format; F = xe === fl || xe === dl || xe === ul } if (F) { const xe = A.texture.type, be = xe === Un || xe === Pn || xe === Co || xe === Jn || xe === ll || xe === hl, Ie = Ke.getClearColor(), Ue = Ke.getClearAlpha(), Ve = Ie.r, Be = Ie.g, He = Ie.b; be ? (m[0] = Ve, m[1] = Be, m[2] = He, m[3] = Ue, C.clearBufferuiv(C.COLOR, 0, m)) : (g[0] = Ve, g[1] = Be, g[2] = He, g[3] = Ue, C.clearBufferiv(C.COLOR, 0, g)) } else H |= C.COLOR_BUFFER_BIT } U && (H |= C.DEPTH_BUFFER_BIT), B && (H |= C.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), C.clear(H) }, this.clearColor = function () { this.clear(!0, !1, !1) }, this.clearDepth = function () { this.clear(!1, !0, !1) }, this.clearStencil = function () { this.clear(!1, !1, !0) }, this.dispose = function () { t.removeEventListener("webglcontextlost", Re, !1), t.removeEventListener("webglcontextrestored", b, !1), t.removeEventListener("webglcontextcreationerror", re, !1), _e.dispose(), Ce.dispose(), pe.dispose(), y.dispose(), N.dispose(), Z.dispose(), ze.dispose(), R.dispose(), ye.dispose(), fe.dispose(), fe.removeEventListener("sessionstart", yt), fe.removeEventListener("sessionend", Je), ge && (ge.dispose(), ge = null), lt.stop() }; function Re(E) { E.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), M = !0 } function b() { console.log("THREE.WebGLRenderer: Context Restored."), M = !1; const E = Ee.autoReset, U = $.enabled, B = $.autoUpdate, H = $.needsUpdate, F = $.type; ce(), Ee.autoReset = E, $.enabled = U, $.autoUpdate = B, $.needsUpdate = H, $.type = F } function re(E) { console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", E.statusMessage) } function se(E) { const U = E.target; U.removeEventListener("dispose", se), Se(U) } function Se(E) { Le(E), pe.remove(E) } function Le(E) { const U = pe.get(E).programs; U !== void 0 && (U.forEach(function (B) { ye.releaseProgram(B) }), E.isShaderMaterial && ye.releaseShaderCache(E)) } this.renderBufferDirect = function (E, U, B, H, F, xe) { U === null && (U = Oe); const be = F.isMesh && F.matrixWorld.determinant() < 0, Ie = rh(E, U, B, H, F); W.setMaterial(H, be); let Ue = B.index, Ve = 1; if (H.wireframe === !0) { if (Ue = J.getWireframeAttribute(B), Ue === void 0) return; Ve = 2 } const Be = B.drawRange, He = B.attributes.position; let ht = Be.start * Ve, Ut = (Be.start + Be.count) * Ve; xe !== null && (ht = Math.max(ht, xe.start * Ve), Ut = Math.min(Ut, (xe.start + xe.count) * Ve)), Ue !== null ? (ht = Math.max(ht, 0), Ut = Math.min(Ut, Ue.count)) : He != null && (ht = Math.max(ht, 0), Ut = Math.min(Ut, He.count)); const mt = Ut - ht; if (mt < 0 || mt === 1 / 0) return; ze.setup(F, H, Ie, B, Ue); let cn, st = Ne; if (Ue !== null && (cn = te.get(Ue), st = we, st.setIndex(cn)), F.isMesh) H.wireframe === !0 ? (W.setLineWidth(H.wireframeLinewidth * Ae()), st.setMode(C.LINES)) : st.setMode(C.TRIANGLES); else if (F.isLine) { let Xe = H.linewidth; Xe === void 0 && (Xe = 1), W.setLineWidth(Xe * Ae()), F.isLineSegments ? st.setMode(C.LINES) : F.isLineLoop ? st.setMode(C.LINE_LOOP) : st.setMode(C.LINE_STRIP) } else F.isPoints ? st.setMode(C.POINTS) : F.isSprite && st.setMode(C.TRIANGLES); if (F.isBatchedMesh) st.renderMultiDraw(F._multiDrawStarts, F._multiDrawCounts, F._multiDrawCount); else if (F.isInstancedMesh) st.renderInstances(ht, mt, F.count); else if (B.isInstancedBufferGeometry) { const Xe = B._maxInstanceCount !== void 0 ? B._maxInstanceCount : 1 / 0, gr = Math.min(B.instanceCount, Xe); st.renderInstances(ht, mt, gr) } else st.render(ht, mt) }; function Ze(E, U, B) { E.transparent === !0 && E.side === en && E.forceSinglePass === !1 ? (E.side = Nt, E.needsUpdate = !0, xs(E, U, B), E.side = vn, E.needsUpdate = !0, xs(E, U, B), E.side = en) : xs(E, U, B) } this.compile = function (E, U, B = null) { B === null && (B = E), f = Ce.get(B), f.init(), T.push(f), B.traverseVisible(function (F) { F.isLight && F.layers.test(U.layers) && (f.pushLight(F), F.castShadow && f.pushShadow(F)) }), E !== B && E.traverseVisible(function (F) { F.isLight && F.layers.test(U.layers) && (f.pushLight(F), F.castShadow && f.pushShadow(F)) }), f.setupLights(x._useLegacyLights); const H = new Set; return E.traverse(function (F) { const xe = F.material; if (xe) if (Array.isArray(xe)) for (let be = 0; be < xe.length; be++) { const Ie = xe[be]; Ze(Ie, B, F), H.add(Ie) } else Ze(xe, B, F), H.add(xe) }), T.pop(), f = null, H }, this.compileAsync = function (E, U, B = null) { const H = this.compile(E, U, B); return new Promise(F => { function xe() { if (H.forEach(function (be) { pe.get(be).currentProgram.isReady() && H.delete(be) }), H.size === 0) { F(E); return } setTimeout(xe, 10) } V.get("KHR_parallel_shader_compile") !== null ? xe() : setTimeout(xe, 10) }) }; let Ye = null; function tt(E) { Ye && Ye(E) } function yt() { lt.stop() } function Je() { lt.start() } const lt = new Ll; lt.setAnimationLoop(tt), typeof self < "u" && lt.setContext(self), this.setAnimationLoop = function (E) { Ye = E, fe.setAnimationLoop(E), E === null ? lt.stop() : lt.start() }, fe.addEventListener("sessionstart", yt), fe.addEventListener("sessionend", Je), this.render = function (E, U) { if (U !== void 0 && U.isCamera !== !0) { console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."); return } if (M === !0) return; E.matrixWorldAutoUpdate === !0 && E.updateMatrixWorld(), U.parent === null && U.matrixWorldAutoUpdate === !0 && U.updateMatrixWorld(), fe.enabled === !0 && fe.isPresenting === !0 && (fe.cameraAutoUpdate === !0 && fe.updateCamera(U), U = fe.getCamera()), E.isScene === !0 && E.onBeforeRender(x, E, U, A), f = Ce.get(E, T.length), f.init(), T.push(f), Me.multiplyMatrices(U.projectionMatrix, U.matrixWorldInverse), Pe.setFromProjectionMatrix(Me), ie = this.localClippingEnabled, k = Fe.init(this.clippingPlanes, ie), _ = _e.get(E, p.length), _.init(), p.push(_), wt(E, U, 0, x.sortObjects), _.finish(), x.sortObjects === !0 && _.sort(X, Y), this.info.render.frame++, k === !0 && Fe.beginShadows(); const B = f.state.shadowsArray; if ($.render(B, E, U), k === !0 && Fe.endShadows(), this.info.autoReset === !0 && this.info.reset(), (fe.enabled === !1 || fe.isPresenting === !1 || fe.hasDepthSensing() === !1) && Ke.render(_, E), f.setupLights(x._useLegacyLights), U.isArrayCamera) { const H = U.cameras; for (let F = 0, xe = H.length; F < xe; F++) { const be = H[F]; $o(_, E, be, be.viewport) } } else $o(_, E, U); A !== null && (S.updateMultisampleRenderTarget(A), S.updateRenderTargetMipmap(A)), E.isScene === !0 && E.onAfterRender(x, E, U), ze.resetDefaultState(), z = -1, Q = null, T.pop(), T.length > 0 ? f = T[T.length - 1] : f = null, p.pop(), p.length > 0 ? _ = p[p.length - 1] : _ = null }; function wt(E, U, B, H) { if (E.visible === !1) return; if (E.layers.test(U.layers)) { if (E.isGroup) B = E.renderOrder; else if (E.isLOD) E.autoUpdate === !0 && E.update(U); else if (E.isLight) f.pushLight(E), E.castShadow && f.pushShadow(E); else if (E.isSprite) { if (!E.frustumCulled || Pe.intersectsSprite(E)) { H && ve.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Me); const be = Z.update(E), Ie = E.material; Ie.visible && _.push(E, be, Ie, B, ve.z, null) } } else if ((E.isMesh || E.isLine || E.isPoints) && (!E.frustumCulled || Pe.intersectsObject(E))) { const be = Z.update(E), Ie = E.material; if (H && (E.boundingSphere !== void 0 ? (E.boundingSphere === null && E.computeBoundingSphere(), ve.copy(E.boundingSphere.center)) : (be.boundingSphere === null && be.computeBoundingSphere(), ve.copy(be.boundingSphere.center)), ve.applyMatrix4(E.matrixWorld).applyMatrix4(Me)), Array.isArray(Ie)) { const Ue = be.groups; for (let Ve = 0, Be = Ue.length; Ve < Be; Ve++) { const He = Ue[Ve], ht = Ie[He.materialIndex]; ht && ht.visible && _.push(E, be, ht, B, ve.z, He) } } else Ie.visible && _.push(E, be, Ie, B, ve.z, null) } } const xe = E.children; for (let be = 0, Ie = xe.length; be < Ie; be++)wt(xe[be], U, B, H) } function $o(E, U, B, H) { const F = E.opaque, xe = E.transmissive, be = E.transparent; f.setupLightsView(B), k === !0 && Fe.setGlobalState(x.clippingPlanes, B), xe.length > 0 && sh(F, xe, U, B), H && W.viewport(v.copy(H)), F.length > 0 && _s(F, U, B), xe.length > 0 && _s(xe, U, B), be.length > 0 && _s(be, U, B), W.buffers.depth.setTest(!0), W.buffers.depth.setMask(!0), W.buffers.color.setMask(!0), W.setPolygonOffset(!1) } function sh(E, U, B, H) { if ((B.isScene === !0 ? B.overrideMaterial : null) !== null) return; const xe = oe.isWebGL2; ge === null && (ge = new ti(1, 1, { generateMipmaps: !0, type: V.has("EXT_color_buffer_half_float") ? as : Un, minFilter: gn, samples: xe ? 4 : 0 })), x.getDrawingBufferSize(Te), xe ? ge.setSize(Te.x, Te.y) : ge.setSize(rr(Te.x), rr(Te.y)); const be = x.getRenderTarget(); x.setRenderTarget(ge), x.getClearColor(ee), D = x.getClearAlpha(), D < 1 && x.setClearColor(16777215, .5), x.clear(); const Ie = x.toneMapping; x.toneMapping = Nn, _s(E, B, H), S.updateMultisampleRenderTarget(ge), S.updateRenderTargetMipmap(ge); let Ue = !1; for (let Ve = 0, Be = U.length; Ve < Be; Ve++) { const He = U[Ve], ht = He.object, Ut = He.geometry, mt = He.material, cn = He.group; if (mt.side === en && ht.layers.test(H.layers)) { const st = mt.side; mt.side = Nt, mt.needsUpdate = !0, Qo(ht, B, H, Ut, mt, cn), mt.side = st, mt.needsUpdate = !0, Ue = !0 } } Ue === !0 && (S.updateMultisampleRenderTarget(ge), S.updateRenderTargetMipmap(ge)), x.setRenderTarget(be), x.setClearColor(ee, D), x.toneMapping = Ie } function _s(E, U, B) { const H = U.isScene === !0 ? U.overrideMaterial : null; for (let F = 0, xe = E.length; F < xe; F++) { const be = E[F], Ie = be.object, Ue = be.geometry, Ve = H === null ? be.material : H, Be = be.group; Ie.layers.test(B.layers) && Qo(Ie, U, B, Ue, Ve, Be) } } function Qo(E, U, B, H, F, xe) { E.onBeforeRender(x, U, B, H, F, xe), E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse, E.matrixWorld), E.normalMatrix.getNormalMatrix(E.modelViewMatrix), F.onBeforeRender(x, U, B, H, E, xe), F.transparent === !0 && F.side === en && F.forceSinglePass === !1 ? (F.side = Nt, F.needsUpdate = !0, x.renderBufferDirect(B, U, H, F, E, xe), F.side = vn, F.needsUpdate = !0, x.renderBufferDirect(B, U, H, F, E, xe), F.side = en) : x.renderBufferDirect(B, U, H, F, E, xe), E.onAfterRender(x, U, B, H, F, xe) } function xs(E, U, B) { U.isScene !== !0 && (U = Oe); const H = pe.get(E), F = f.state.lights, xe = f.state.shadowsArray, be = F.state.version, Ie = ye.getParameters(E, F.state, xe, U, B), Ue = ye.getProgramCacheKey(Ie); let Ve = H.programs; H.environment = E.isMeshStandardMaterial ? U.environment : null, H.fog = U.fog, H.envMap = (E.isMeshStandardMaterial ? N : y).get(E.envMap || H.environment), Ve === void 0 && (E.addEventListener("dispose", se), Ve = new Map, H.programs = Ve); let Be = Ve.get(Ue); if (Be !== void 0) { if (H.currentProgram === Be && H.lightsStateVersion === be) return ta(E, Ie), Be } else Ie.uniforms = ye.getUniforms(E), E.onBuild(B, Ie, x), E.onBeforeCompile(Ie, x), Be = ye.acquireProgram(Ie, Ue), Ve.set(Ue, Be), H.uniforms = Ie.uniforms; const He = H.uniforms; return (!E.isShaderMaterial && !E.isRawShaderMaterial || E.clipping === !0) && (He.clippingPlanes = Fe.uniform), ta(E, Ie), H.needsLights = ah(E), H.lightsStateVersion = be, H.needsLights && (He.ambientLightColor.value = F.state.ambient, He.lightProbe.value = F.state.probe, He.directionalLights.value = F.state.directional, He.directionalLightShadows.value = F.state.directionalShadow, He.spotLights.value = F.state.spot, He.spotLightShadows.value = F.state.spotShadow, He.rectAreaLights.value = F.state.rectArea, He.ltc_1.value = F.state.rectAreaLTC1, He.ltc_2.value = F.state.rectAreaLTC2, He.pointLights.value = F.state.point, He.pointLightShadows.value = F.state.pointShadow, He.hemisphereLights.value = F.state.hemi, He.directionalShadowMap.value = F.state.directionalShadowMap, He.directionalShadowMatrix.value = F.state.directionalShadowMatrix, He.spotShadowMap.value = F.state.spotShadowMap, He.spotLightMatrix.value = F.state.spotLightMatrix, He.spotLightMap.value = F.state.spotLightMap, He.pointShadowMap.value = F.state.pointShadowMap, He.pointShadowMatrix.value = F.state.pointShadowMatrix), H.currentProgram = Be, H.uniformsList = null, Be } function ea(E) { if (E.uniformsList === null) { const U = E.currentProgram.getUniforms(); E.uniformsList = Js.seqWithValue(U.seq, E.uniforms) } return E.uniformsList } function ta(E, U) { const B = pe.get(E); B.outputColorSpace = U.outputColorSpace, B.batching = U.batching, B.instancing = U.instancing, B.instancingColor = U.instancingColor, B.skinning = U.skinning, B.morphTargets = U.morphTargets, B.morphNormals = U.morphNormals, B.morphColors = U.morphColors, B.morphTargetsCount = U.morphTargetsCount, B.numClippingPlanes = U.numClippingPlanes, B.numIntersection = U.numClipIntersection, B.vertexAlphas = U.vertexAlphas, B.vertexTangents = U.vertexTangents, B.toneMapping = U.toneMapping } function rh(E, U, B, H, F) { U.isScene !== !0 && (U = Oe), S.resetTextureUnits(); const xe = U.fog, be = H.isMeshStandardMaterial ? U.environment : null, Ie = A === null ? x.outputColorSpace : A.isXRRenderTarget === !0 ? A.texture.colorSpace : vt, Ue = (H.isMeshStandardMaterial ? N : y).get(H.envMap || be), Ve = H.vertexColors === !0 && !!B.attributes.color && B.attributes.color.itemSize === 4, Be = !!B.attributes.tangent && (!!H.normalMap || H.anisotropy > 0), He = !!B.morphAttributes.position, ht = !!B.morphAttributes.normal, Ut = !!B.morphAttributes.color; let mt = Nn; H.toneMapped && (A === null || A.isXRRenderTarget === !0) && (mt = x.toneMapping); const cn = B.morphAttributes.position || B.morphAttributes.normal || B.morphAttributes.color, st = cn !== void 0 ? cn.length : 0, Xe = pe.get(H), gr = f.state.lights; if (k === !0 && (ie === !0 || E !== Q)) { const Bt = E === Q && H.id === z; Fe.setState(H, E, Bt) } let at = !1; H.version === Xe.__version ? (Xe.needsLights && Xe.lightsStateVersion !== gr.state.version || Xe.outputColorSpace !== Ie || F.isBatchedMesh && Xe.batching === !1 || !F.isBatchedMesh && Xe.batching === !0 || F.isInstancedMesh && Xe.instancing === !1 || !F.isInstancedMesh && Xe.instancing === !0 || F.isSkinnedMesh && Xe.skinning === !1 || !F.isSkinnedMesh && Xe.skinning === !0 || F.isInstancedMesh && Xe.instancingColor === !0 && F.instanceColor === null || F.isInstancedMesh && Xe.instancingColor === !1 && F.instanceColor !== null || Xe.envMap !== Ue || H.fog === !0 && Xe.fog !== xe || Xe.numClippingPlanes !== void 0 && (Xe.numClippingPlanes !== Fe.numPlanes || Xe.numIntersection !== Fe.numIntersection) || Xe.vertexAlphas !== Ve || Xe.vertexTangents !== Be || Xe.morphTargets !== He || Xe.morphNormals !== ht || Xe.morphColors !== Ut || Xe.toneMapping !== mt || oe.isWebGL2 === !0 && Xe.morphTargetsCount !== st) && (at = !0) : (at = !0, Xe.__version = H.version); let zn = Xe.currentProgram; at === !0 && (zn = xs(H, U, F)); let na = !1, qi = !1, _r = !1; const Et = zn.getUniforms(), Hn = Xe.uniforms; if (W.useProgram(zn.program) && (na = !0, qi = !0, _r = !0), H.id !== z && (z = H.id, qi = !0), na || Q !== E) { Et.setValue(C, "projectionMatrix", E.projectionMatrix), Et.setValue(C, "viewMatrix", E.matrixWorldInverse); const Bt = Et.map.cameraPosition; Bt !== void 0 && Bt.setValue(C, ve.setFromMatrixPosition(E.matrixWorld)), oe.logarithmicDepthBuffer && Et.setValue(C, "logDepthBufFC", 2 / (Math.log(E.far + 1) / Math.LN2)), (H.isMeshPhongMaterial || H.isMeshToonMaterial || H.isMeshLambertMaterial || H.isMeshBasicMaterial || H.isMeshStandardMaterial || H.isShaderMaterial) && Et.setValue(C, "isOrthographic", E.isOrthographicCamera === !0), Q !== E && (Q = E, qi = !0, _r = !0) } if (F.isSkinnedMesh) { Et.setOptional(C, F, "bindMatrix"), Et.setOptional(C, F, "bindMatrixInverse"); const Bt = F.skeleton; Bt && (oe.floatVertexTextures ? (Bt.boneTexture === null && Bt.computeBoneTexture(), Et.setValue(C, "boneTexture", Bt.boneTexture, S)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required.")) } F.isBatchedMesh && (Et.setOptional(C, F, "batchingTexture"), Et.setValue(C, "batchingTexture", F._matricesTexture, S)); const xr = B.morphAttributes; if ((xr.position !== void 0 || xr.normal !== void 0 || xr.color !== void 0 && oe.isWebGL2 === !0) && ke.update(F, B, zn), (qi || Xe.receiveShadow !== F.receiveShadow) && (Xe.receiveShadow = F.receiveShadow, Et.setValue(C, "receiveShadow", F.receiveShadow)), H.isMeshGouraudMaterial && H.envMap !== null && (Hn.envMap.value = Ue, Hn.flipEnvMap.value = Ue.isCubeTexture && Ue.isRenderTargetTexture === !1 ? -1 : 1), qi && (Et.setValue(C, "toneMappingExposure", x.toneMappingExposure), Xe.needsLights && oh(Hn, _r), xe && H.fog === !0 && de.refreshFogUniforms(Hn, xe), de.refreshMaterialUniforms(Hn, H, j, O, ge), Js.upload(C, ea(Xe), Hn, S)), H.isShaderMaterial && H.uniformsNeedUpdate === !0 && (Js.upload(C, ea(Xe), Hn, S), H.uniformsNeedUpdate = !1), H.isSpriteMaterial && Et.setValue(C, "center", F.center), Et.setValue(C, "modelViewMatrix", F.modelViewMatrix), Et.setValue(C, "normalMatrix", F.normalMatrix), Et.setValue(C, "modelMatrix", F.matrixWorld), H.isShaderMaterial || H.isRawShaderMaterial) { const Bt = H.uniformsGroups; for (let vr = 0, ch = Bt.length; vr < ch; vr++)if (oe.isWebGL2) { const ia = Bt[vr]; R.update(ia, zn), R.bind(ia, zn) } else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.") } return zn } function oh(E, U) { E.ambientLightColor.needsUpdate = U, E.lightProbe.needsUpdate = U, E.directionalLights.needsUpdate = U, E.directionalLightShadows.needsUpdate = U, E.pointLights.needsUpdate = U, E.pointLightShadows.needsUpdate = U, E.spotLights.needsUpdate = U, E.spotLightShadows.needsUpdate = U, E.rectAreaLights.needsUpdate = U, E.hemisphereLights.needsUpdate = U } function ah(E) { return E.isMeshLambertMaterial || E.isMeshToonMaterial || E.isMeshPhongMaterial || E.isMeshStandardMaterial || E.isShadowMaterial || E.isShaderMaterial && E.lights === !0 } this.getActiveCubeFace = function () { return I }, this.getActiveMipmapLevel = function () { return L }, this.getRenderTarget = function () { return A }, this.setRenderTargetTextures = function (E, U, B) { pe.get(E.texture).__webglTexture = U, pe.get(E.depthTexture).__webglTexture = B; const H = pe.get(E); H.__hasExternalTextures = !0, H.__hasExternalTextures && (H.__autoAllocateDepthBuffer = B === void 0, H.__autoAllocateDepthBuffer || V.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), H.__useRenderToTexture = !1)) }, this.setRenderTargetFramebuffer = function (E, U) { const B = pe.get(E); B.__webglFramebuffer = U, B.__useDefaultFramebuffer = U === void 0 }, this.setRenderTarget = function (E, U = 0, B = 0) { A = E, I = U, L = B; let H = !0, F = null, xe = !1, be = !1; if (E) { const Ue = pe.get(E); Ue.__useDefaultFramebuffer !== void 0 ? (W.bindFramebuffer(C.FRAMEBUFFER, null), H = !1) : Ue.__webglFramebuffer === void 0 ? S.setupRenderTarget(E) : Ue.__hasExternalTextures && S.rebindTextures(E, pe.get(E.texture).__webglTexture, pe.get(E.depthTexture).__webglTexture); const Ve = E.texture; (Ve.isData3DTexture || Ve.isDataArrayTexture || Ve.isCompressedArrayTexture) && (be = !0); const Be = pe.get(E).__webglFramebuffer; E.isWebGLCubeRenderTarget ? (Array.isArray(Be[U]) ? F = Be[U][B] : F = Be[U], xe = !0) : oe.isWebGL2 && E.samples > 0 && S.useMultisampledRTT(E) === !1 ? F = pe.get(E).__webglMultisampledFramebuffer : Array.isArray(Be) ? F = Be[B] : F = Be, v.copy(E.viewport), w.copy(E.scissor), q = E.scissorTest } else v.copy(K).multiplyScalar(j).floor(), w.copy(ne).multiplyScalar(j).floor(), q = he; if (W.bindFramebuffer(C.FRAMEBUFFER, F) && oe.drawBuffers && H && W.drawBuffers(E, F), W.viewport(v), W.scissor(w), W.setScissorTest(q), xe) { const Ue = pe.get(E.texture); C.framebufferTexture2D(C.FRAMEBUFFER, C.COLOR_ATTACHMENT0, C.TEXTURE_CUBE_MAP_POSITIVE_X + U, Ue.__webglTexture, B) } else if (be) { const Ue = pe.get(E.texture), Ve = U || 0; C.framebufferTextureLayer(C.FRAMEBUFFER, C.COLOR_ATTACHMENT0, Ue.__webglTexture, B || 0, Ve) } z = -1 }, this.readRenderTargetPixels = function (E, U, B, H, F, xe, be) { if (!(E && E.isWebGLRenderTarget)) { console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."); return } let Ie = pe.get(E).__webglFramebuffer; if (E.isWebGLCubeRenderTarget && be !== void 0 && (Ie = Ie[be]), Ie) { W.bindFramebuffer(C.FRAMEBUFFER, Ie); try { const Ue = E.texture, Ve = Ue.format, Be = Ue.type; if (Ve !== kt && me.convert(Ve) !== C.getParameter(C.IMPLEMENTATION_COLOR_READ_FORMAT)) { console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."); return } const He = Be === as && (V.has("EXT_color_buffer_half_float") || oe.isWebGL2 && V.has("EXT_color_buffer_float")); if (Be !== Un && me.convert(Be) !== C.getParameter(C.IMPLEMENTATION_COLOR_READ_TYPE) && !(Be === tn && (oe.isWebGL2 || V.has("OES_texture_float") || V.has("WEBGL_color_buffer_float"))) && !He) { console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."); return } U >= 0 && U <= E.width - H && B >= 0 && B <= E.height - F && C.readPixels(U, B, H, F, me.convert(Ve), me.convert(Be), xe) } finally { const Ue = A !== null ? pe.get(A).__webglFramebuffer : null; W.bindFramebuffer(C.FRAMEBUFFER, Ue) } } }, this.copyFramebufferToTexture = function (E, U, B = 0) { const H = Math.pow(2, -B), F = Math.floor(U.image.width * H), xe = Math.floor(U.image.height * H); S.setTexture2D(U, 0), C.copyTexSubImage2D(C.TEXTURE_2D, B, 0, 0, E.x, E.y, F, xe), W.unbindTexture() }, this.copyTextureToTexture = function (E, U, B, H = 0) { const F = U.image.width, xe = U.image.height, be = me.convert(B.format), Ie = me.convert(B.type); S.setTexture2D(B, 0), C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL, B.flipY), C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL, B.premultiplyAlpha), C.pixelStorei(C.UNPACK_ALIGNMENT, B.unpackAlignment), U.isDataTexture ? C.texSubImage2D(C.TEXTURE_2D, H, E.x, E.y, F, xe, be, Ie, U.image.data) : U.isCompressedTexture ? C.compressedTexSubImage2D(C.TEXTURE_2D, H, E.x, E.y, U.mipmaps[0].width, U.mipmaps[0].height, be, U.mipmaps[0].data) : C.texSubImage2D(C.TEXTURE_2D, H, E.x, E.y, be, Ie, U.image), H === 0 && B.generateMipmaps && C.generateMipmap(C.TEXTURE_2D), W.unbindTexture() }, this.copyTextureToTexture3D = function (E, U, B, H, F = 0) { if (x.isWebGL1Renderer) { console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."); return } const xe = E.max.x - E.min.x + 1, be = E.max.y - E.min.y + 1, Ie = E.max.z - E.min.z + 1, Ue = me.convert(H.format), Ve = me.convert(H.type); let Be; if (H.isData3DTexture) S.setTexture3D(H, 0), Be = C.TEXTURE_3D; else if (H.isDataArrayTexture || H.isCompressedArrayTexture) S.setTexture2DArray(H, 0), Be = C.TEXTURE_2D_ARRAY; else { console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."); return } C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL, H.flipY), C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL, H.premultiplyAlpha), C.pixelStorei(C.UNPACK_ALIGNMENT, H.unpackAlignment); const He = C.getParameter(C.UNPACK_ROW_LENGTH), ht = C.getParameter(C.UNPACK_IMAGE_HEIGHT), Ut = C.getParameter(C.UNPACK_SKIP_PIXELS), mt = C.getParameter(C.UNPACK_SKIP_ROWS), cn = C.getParameter(C.UNPACK_SKIP_IMAGES), st = B.isCompressedTexture ? B.mipmaps[F] : B.image; C.pixelStorei(C.UNPACK_ROW_LENGTH, st.width), C.pixelStorei(C.UNPACK_IMAGE_HEIGHT, st.height), C.pixelStorei(C.UNPACK_SKIP_PIXELS, E.min.x), C.pixelStorei(C.UNPACK_SKIP_ROWS, E.min.y), C.pixelStorei(C.UNPACK_SKIP_IMAGES, E.min.z), B.isDataTexture || B.isData3DTexture ? C.texSubImage3D(Be, F, U.x, U.y, U.z, xe, be, Ie, Ue, Ve, st.data) : B.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), C.compressedTexSubImage3D(Be, F, U.x, U.y, U.z, xe, be, Ie, Ue, st.data)) : C.texSubImage3D(Be, F, U.x, U.y, U.z, xe, be, Ie, Ue, Ve, st), C.pixelStorei(C.UNPACK_ROW_LENGTH, He), C.pixelStorei(C.UNPACK_IMAGE_HEIGHT, ht), C.pixelStorei(C.UNPACK_SKIP_PIXELS, Ut), C.pixelStorei(C.UNPACK_SKIP_ROWS, mt), C.pixelStorei(C.UNPACK_SKIP_IMAGES, cn), F === 0 && H.generateMipmaps && C.generateMipmap(Be), W.unbindTexture() }, this.initTexture = function (E) { E.isCubeTexture ? S.setTextureCube(E, 0) : E.isData3DTexture ? S.setTexture3D(E, 0) : E.isDataArrayTexture || E.isCompressedArrayTexture ? S.setTexture2DArray(E, 0) : S.setTexture2D(E, 0), W.unbindTexture() }, this.resetState = function () { I = 0, L = 0, A = null, W.reset(), ze.reset() }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this })) } get coordinateSystem() { return _n } get outputColorSpace() { return this._outputColorSpace } set outputColorSpace(e) { this._outputColorSpace = e; const t = this.getContext(); t.drawingBufferColorSpace = e === Po ? "display-p3" : "srgb", t.unpackColorSpace = $e.workingColorSpace === cr ? "display-p3" : "srgb" } get outputEncoding() { return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace === ct ? Qn : gl } set outputEncoding(e) { console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace = e === Qn ? ct : vt } get useLegacyLights() { return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights } set useLegacyLights(e) { console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights = e } } class Dg extends Fl { } Dg.prototype.isWebGL1Renderer = !0; class Ng extends ot { constructor() { super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this })) } copy(e, t) { return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this } toJSON(e) { const t = super.toJSON(e); return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t } } class Ug { constructor(e, t) { this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = mo, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.version = 0, this.uuid = Wt() } onUploadCallback() { } set needsUpdate(e) { e === !0 && this.version++ } get updateRange() { return ei("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange } setUsage(e) { return this.usage = e, this } addUpdateRange(e, t) { this.updateRanges.push({ start: e, count: t }) } clearUpdateRanges() { this.updateRanges.length = 0 } copy(e) { return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this } copyAt(e, t, n) { e *= this.stride, n *= t.stride; for (let i = 0, r = this.stride; i < r; i++)this.array[e + i] = t.array[n + i]; return this } set(e, t = 0) { return this.array.set(e, t), this } clone(e) { e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Wt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer); const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride); return n.setUsage(this.usage), n } onUpload(e) { return this.onUploadCallback = e, this } toJSON(e) { return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Wt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), { uuid: this.uuid, buffer: this.array.buffer._uuid, type: this.array.constructor.name, stride: this.stride } } } const Rt = new P; class Oo { constructor(e, t, n, i = !1) { this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i } get count() { return this.data.count } get array() { return this.data.array } set needsUpdate(e) { this.data.needsUpdate = e } applyMatrix4(e) { for (let t = 0, n = this.data.count; t < n; t++)Rt.fromBufferAttribute(this, t), Rt.applyMatrix4(e), this.setXYZ(t, Rt.x, Rt.y, Rt.z); return this } applyNormalMatrix(e) { for (let t = 0, n = this.count; t < n; t++)Rt.fromBufferAttribute(this, t), Rt.applyNormalMatrix(e), this.setXYZ(t, Rt.x, Rt.y, Rt.z); return this } transformDirection(e) { for (let t = 0, n = this.count; t < n; t++)Rt.fromBufferAttribute(this, t), Rt.transformDirection(e), this.setXYZ(t, Rt.x, Rt.y, Rt.z); return this } getComponent(e, t) { let n = this.array[e * this.data.stride + this.offset + t]; return this.normalized && (n = jt(n, this.array)), n } setComponent(e, t, n) { return this.normalized && (n = Qe(n, this.array)), this.data.array[e * this.data.stride + this.offset + t] = n, this } setX(e, t) { return this.normalized && (t = Qe(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this } setY(e, t) { return this.normalized && (t = Qe(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this } setZ(e, t) { return this.normalized && (t = Qe(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this } setW(e, t) { return this.normalized && (t = Qe(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this } getX(e) { let t = this.data.array[e * this.data.stride + this.offset]; return this.normalized && (t = jt(t, this.array)), t } getY(e) { let t = this.data.array[e * this.data.stride + this.offset + 1]; return this.normalized && (t = jt(t, this.array)), t } getZ(e) { let t = this.data.array[e * this.data.stride + this.offset + 2]; return this.normalized && (t = jt(t, this.array)), t } getW(e) { let t = this.data.array[e * this.data.stride + this.offset + 3]; return this.normalized && (t = jt(t, this.array)), t } setXY(e, t, n) { return e = e * this.data.stride + this.offset, this.normalized && (t = Qe(t, this.array), n = Qe(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this } setXYZ(e, t, n, i) { return e = e * this.data.stride + this.offset, this.normalized && (t = Qe(t, this.array), n = Qe(n, this.array), i = Qe(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this } setXYZW(e, t, n, i, r) { return e = e * this.data.stride + this.offset, this.normalized && (t = Qe(t, this.array), n = Qe(n, this.array), i = Qe(i, this.array), r = Qe(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = r, this } clone(e) { if (e === void 0) { console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data."); const t = []; for (let n = 0; n < this.count; n++) { const i = n * this.data.stride + this.offset; for (let r = 0; r < this.itemSize; r++)t.push(this.data.array[i + r]) } return new It(new this.array.constructor(t), this.itemSize, this.normalized) } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new Oo(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized) } toJSON(e) { if (e === void 0) { console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data."); const t = []; for (let n = 0; n < this.count; n++) { const i = n * this.data.stride + this.offset; for (let r = 0; r < this.itemSize; r++)t.push(this.data.array[i + r]) } return { itemSize: this.itemSize, type: this.array.constructor.name, array: t, normalized: this.normalized } } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), { isInterleavedBufferAttribute: !0, itemSize: this.itemSize, data: this.data.uuid, offset: this.offset, normalized: this.normalized } } } const Rc = new P, Cc = new nt, Lc = new nt, Og = new P, Pc = new We, Hs = new P, Kr = new rn, Ic = new We, Zr = new ps; class Fg extends Pt { constructor(e, t) { super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = ha, this.bindMatrix = new We, this.bindMatrixInverse = new We, this.boundingBox = null, this.boundingSphere = null } computeBoundingBox() { const e = this.geometry; this.boundingBox === null && (this.boundingBox = new yn), this.boundingBox.makeEmpty(); const t = e.getAttribute("position"); for (let n = 0; n < t.count; n++)this.getVertexPosition(n, Hs), this.boundingBox.expandByPoint(Hs) } computeBoundingSphere() { const e = this.geometry; this.boundingSphere === null && (this.boundingSphere = new rn), this.boundingSphere.makeEmpty(); const t = e.getAttribute("position"); for (let n = 0; n < t.count; n++)this.getVertexPosition(n, Hs), this.boundingSphere.expandByPoint(Hs) } copy(e, t) { return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this } raycast(e, t) { const n = this.material, i = this.matrixWorld; n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Kr.copy(this.boundingSphere), Kr.applyMatrix4(i), e.ray.intersectsSphere(Kr) !== !1 && (Ic.copy(i).invert(), Zr.copy(e.ray).applyMatrix4(Ic), !(this.boundingBox !== null && Zr.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(e, t, Zr))) } getVertexPosition(e, t) { return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t } bind(e, t) { this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert() } pose() { this.skeleton.pose() } normalizeSkinWeights() { const e = new nt, t = this.geometry.attributes.skinWeight; for (let n = 0, i = t.count; n < i; n++) { e.fromBufferAttribute(t, n); const r = 1 / e.manhattanLength(); r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w) } } updateMatrixWorld(e) { super.updateMatrixWorld(e), this.bindMode === ha ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === Vh ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode) } applyBoneTransform(e, t) { const n = this.skeleton, i = this.geometry; Cc.fromBufferAttribute(i.attributes.skinIndex, e), Lc.fromBufferAttribute(i.attributes.skinWeight, e), Rc.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0); for (let r = 0; r < 4; r++) { const o = Lc.getComponent(r); if (o !== 0) { const a = Cc.getComponent(r); Pc.multiplyMatrices(n.bones[a].matrixWorld, n.boneInverses[a]), t.addScaledVector(Og.copy(Rc).applyMatrix4(Pc), o) } } return t.applyMatrix4(this.bindMatrixInverse) } } class Bl extends ot { constructor() { super(), this.isBone = !0, this.type = "Bone" } } class Bg extends xt { constructor(e = null, t = 1, n = 1, i, r, o, a, c, l = _t, h = _t, u, d) { super(null, o, a, c, l, h, i, r, u, d), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1 } } const Dc = new We, zg = new We; class Fo { constructor(e = [], t = []) { this.uuid = Wt(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.init() } init() { const e = this.bones, t = this.boneInverses; if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0) this.calculateInverses(); else if (e.length !== t.length) { console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = []; for (let n = 0, i = this.bones.length; n < i; n++)this.boneInverses.push(new We) } } calculateInverses() { this.boneInverses.length = 0; for (let e = 0, t = this.bones.length; e < t; e++) { const n = new We; this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(n) } } pose() { for (let e = 0, t = this.bones.length; e < t; e++) { const n = this.bones[e]; n && n.matrixWorld.copy(this.boneInverses[e]).invert() } for (let e = 0, t = this.bones.length; e < t; e++) { const n = this.bones[e]; n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale)) } } update() { const e = this.bones, t = this.boneInverses, n = this.boneMatrices, i = this.boneTexture; for (let r = 0, o = e.length; r < o; r++) { const a = e[r] ? e[r].matrixWorld : zg; Dc.multiplyMatrices(a, t[r]), Dc.toArray(n, r * 16) } i !== null && (i.needsUpdate = !0) } clone() { return new Fo(this.bones, this.boneInverses) } computeBoneTexture() { let e = Math.sqrt(this.bones.length * 4); e = Math.ceil(e / 4) * 4, e = Math.max(e, 4); const t = new Float32Array(e * e * 4); t.set(this.boneMatrices); const n = new Bg(t, e, e, kt, tn); return n.needsUpdate = !0, this.boneMatrices = t, this.boneTexture = n, this } getBoneByName(e) { for (let t = 0, n = this.bones.length; t < n; t++) { const i = this.bones[t]; if (i.name === e) return i } } dispose() { this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null) } fromJSON(e, t) { this.uuid = e.uuid; for (let n = 0, i = e.bones.length; n < i; n++) { const r = e.bones[n]; let o = t[r]; o === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", r), o = new Bl), this.bones.push(o), this.boneInverses.push(new We().fromArray(e.boneInverses[n])) } return this.init(), this } toJSON() { const e = { metadata: { version: 4.6, type: "Skeleton", generator: "Skeleton.toJSON" }, bones: [], boneInverses: [] }; e.uuid = this.uuid; const t = this.bones, n = this.boneInverses; for (let i = 0, r = t.length; i < r; i++) { const o = t[i]; e.bones.push(o.uuid); const a = n[i]; e.boneInverses.push(a.toArray()) } return e } } class vo extends It { constructor(e, t, n, i = 1) { super(e, t, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = i } copy(e) { return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this } toJSON() { const e = super.toJSON(); return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e } } const bi = new We, Nc = new We, Gs = [], Uc = new yn, Hg = new We, Ji = new Pt, $i = new rn; class Gg extends Pt { constructor(e, t, n) { super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new vo(new Float32Array(n * 16), 16), this.instanceColor = null, this.count = n, this.boundingBox = null, this.boundingSphere = null; for (let i = 0; i < n; i++)this.setMatrixAt(i, Hg) } computeBoundingBox() { const e = this.geometry, t = this.count; this.boundingBox === null && (this.boundingBox = new yn), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty(); for (let n = 0; n < t; n++)this.getMatrixAt(n, bi), Uc.copy(e.boundingBox).applyMatrix4(bi), this.boundingBox.union(Uc) } computeBoundingSphere() { const e = this.geometry, t = this.count; this.boundingSphere === null && (this.boundingSphere = new rn), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty(); for (let n = 0; n < t; n++)this.getMatrixAt(n, bi), $i.copy(e.boundingSphere).applyMatrix4(bi), this.boundingSphere.union($i) } copy(e, t) { return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this } getColorAt(e, t) { t.fromArray(this.instanceColor.array, e * 3) } getMatrixAt(e, t) { t.fromArray(this.instanceMatrix.array, e * 16) } raycast(e, t) { const n = this.matrixWorld, i = this.count; if (Ji.geometry = this.geometry, Ji.material = this.material, Ji.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), $i.copy(this.boundingSphere), $i.applyMatrix4(n), e.ray.intersectsSphere($i) !== !1)) for (let r = 0; r < i; r++) { this.getMatrixAt(r, bi), Nc.multiplyMatrices(n, bi), Ji.matrixWorld = Nc, Ji.raycast(e, Gs); for (let o = 0, a = Gs.length; o < a; o++) { const c = Gs[o]; c.instanceId = r, c.object = this, t.push(c) } Gs.length = 0 } } setColorAt(e, t) { this.instanceColor === null && (this.instanceColor = new vo(new Float32Array(this.instanceMatrix.count * 3), 3)), t.toArray(this.instanceColor.array, e * 3) } setMatrixAt(e, t) { t.toArray(this.instanceMatrix.array, e * 16) } updateMorphTargets() { } dispose() { this.dispatchEvent({ type: "dispose" }) } } class zl extends Zt { constructor(e) { super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new De(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e) } copy(e) { return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this } } const Oc = new P, Fc = new P, Bc = new We, Jr = new ps, ks = new rn; class Bo extends ot { constructor(e = new $t, t = new zl) { super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets() } copy(e, t) { return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this } computeLineDistances() { const e = this.geometry; if (e.index === null) { const t = e.attributes.position, n = [0]; for (let i = 1, r = t.count; i < r; i++)Oc.fromBufferAttribute(t, i - 1), Fc.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += Oc.distanceTo(Fc); e.setAttribute("lineDistance", new Jt(n, 1)) } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."); return this } raycast(e, t) { const n = this.geometry, i = this.matrixWorld, r = e.params.Line.threshold, o = n.drawRange; if (n.boundingSphere === null && n.computeBoundingSphere(), ks.copy(n.boundingSphere), ks.applyMatrix4(i), ks.radius += r, e.ray.intersectsSphere(ks) === !1) return; Bc.copy(i).invert(), Jr.copy(e.ray).applyMatrix4(Bc); const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = a * a, l = new P, h = new P, u = new P, d = new P, m = this.isLineSegments ? 2 : 1, g = n.index, f = n.attributes.position; if (g !== null) { const p = Math.max(0, o.start), T = Math.min(g.count, o.start + o.count); for (let x = p, M = T - 1; x < M; x += m) { const I = g.getX(x), L = g.getX(x + 1); if (l.fromBufferAttribute(f, I), h.fromBufferAttribute(f, L), Jr.distanceSqToSegment(l, h, d, u) > c) continue; d.applyMatrix4(this.matrixWorld); const z = e.ray.origin.distanceTo(d); z < e.near || z > e.far || t.push({ distance: z, point: u.clone().applyMatrix4(this.matrixWorld), index: x, face: null, faceIndex: null, object: this }) } } else { const p = Math.max(0, o.start), T = Math.min(f.count, o.start + o.count); for (let x = p, M = T - 1; x < M; x += m) { if (l.fromBufferAttribute(f, x), h.fromBufferAttribute(f, x + 1), Jr.distanceSqToSegment(l, h, d, u) > c) continue; d.applyMatrix4(this.matrixWorld); const L = e.ray.origin.distanceTo(d); L < e.near || L > e.far || t.push({ distance: L, point: u.clone().applyMatrix4(this.matrixWorld), index: x, face: null, faceIndex: null, object: this }) } } } updateMorphTargets() { const t = this.geometry.morphAttributes, n = Object.keys(t); if (n.length > 0) { const i = t[n[0]]; if (i !== void 0) { this.morphTargetInfluences = [], this.morphTargetDictionary = {}; for (let r = 0, o = i.length; r < o; r++) { const a = i[r].name || String(r); this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r } } } } } const zc = new P, Hc = new P; class kg extends Bo { constructor(e, t) { super(e, t), this.isLineSegments = !0, this.type = "LineSegments" } computeLineDistances() { const e = this.geometry; if (e.index === null) { const t = e.attributes.position, n = []; for (let i = 0, r = t.count; i < r; i += 2)zc.fromBufferAttribute(t, i), Hc.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + zc.distanceTo(Hc); e.setAttribute("lineDistance", new Jt(n, 1)) } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."); return this } } class Vg extends Bo { constructor(e, t) { super(e, t), this.isLineLoop = !0, this.type = "LineLoop" } } class Hl extends Zt { constructor(e) { super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new De(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e) } copy(e) { return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this } } const Gc = new We, yo = new ps, Vs = new rn, Ws = new P; class Wg extends ot { constructor(e = new $t, t = new Hl) { super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets() } copy(e, t) { return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this } raycast(e, t) { const n = this.geometry, i = this.matrixWorld, r = e.params.Points.threshold, o = n.drawRange; if (n.boundingSphere === null && n.computeBoundingSphere(), Vs.copy(n.boundingSphere), Vs.applyMatrix4(i), Vs.radius += r, e.ray.intersectsSphere(Vs) === !1) return; Gc.copy(i).invert(), yo.copy(e.ray).applyMatrix4(Gc); const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = a * a, l = n.index, u = n.attributes.position; if (l !== null) { const d = Math.max(0, o.start), m = Math.min(l.count, o.start + o.count); for (let g = d, _ = m; g < _; g++) { const f = l.getX(g); Ws.fromBufferAttribute(u, f), kc(Ws, f, c, i, e, t, this) } } else { const d = Math.max(0, o.start), m = Math.min(u.count, o.start + o.count); for (let g = d, _ = m; g < _; g++)Ws.fromBufferAttribute(u, g), kc(Ws, g, c, i, e, t, this) } } updateMorphTargets() { const t = this.geometry.morphAttributes, n = Object.keys(t); if (n.length > 0) { const i = t[n[0]]; if (i !== void 0) { this.morphTargetInfluences = [], this.morphTargetDictionary = {}; for (let r = 0, o = i.length; r < o; r++) { const a = i[r].name || String(r); this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r } } } } } function kc(s, e, t, n, i, r, o) { const a = yo.distanceSqToPoint(s); if (a < t) { const c = new P; yo.closestPointToPoint(s, c), c.applyMatrix4(n); const l = i.ray.origin.distanceTo(c); if (l < i.near || l > i.far) return; r.push({ distance: l, distanceToRay: Math.sqrt(a), point: c, index: e, face: null, object: o }) } } class on { constructor() { this.type = "Curve", this.arcLengthDivisions = 200 } getPoint() { return console.warn("THREE.Curve: .getPoint() not implemented."), null } getPointAt(e, t) { const n = this.getUtoTmapping(e); return this.getPoint(n, t) } getPoints(e = 5) { const t = []; for (let n = 0; n <= e; n++)t.push(this.getPoint(n / e)); return t } getSpacedPoints(e = 5) { const t = []; for (let n = 0; n <= e; n++)t.push(this.getPointAt(n / e)); return t } getLength() { const e = this.getLengths(); return e[e.length - 1] } getLengths(e = this.arcLengthDivisions) { if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths; this.needsUpdate = !1; const t = []; let n, i = this.getPoint(0), r = 0; t.push(0); for (let o = 1; o <= e; o++)n = this.getPoint(o / e), r += n.distanceTo(i), t.push(r), i = n; return this.cacheArcLengths = t, t } updateArcLengths() { this.needsUpdate = !0, this.getLengths() } getUtoTmapping(e, t) { const n = this.getLengths(); let i = 0; const r = n.length; let o; t ? o = t : o = e * n[r - 1]; let a = 0, c = r - 1, l; for (; a <= c;)if (i = Math.floor(a + (c - a) / 2), l = n[i] - o, l < 0) a = i + 1; else if (l > 0) c = i - 1; else { c = i; break } if (i = c, n[i] === o) return i / (r - 1); const h = n[i], d = n[i + 1] - h, m = (o - h) / d; return (i + m) / (r - 1) } getTangent(e, t) { let i = e - 1e-4, r = e + 1e-4; i < 0 && (i = 0), r > 1 && (r = 1); const o = this.getPoint(i), a = this.getPoint(r), c = t || (o.isVector2 ? new ae : new P); return c.copy(a).sub(o).normalize(), c } getTangentAt(e, t) { const n = this.getUtoTmapping(e); return this.getTangent(n, t) } computeFrenetFrames(e, t) { const n = new P, i = [], r = [], o = [], a = new P, c = new We; for (let m = 0; m <= e; m++) { const g = m / e; i[m] = this.getTangentAt(g, new P) } r[0] = new P, o[0] = new P; let l = Number.MAX_VALUE; const h = Math.abs(i[0].x), u = Math.abs(i[0].y), d = Math.abs(i[0].z); h <= l && (l = h, n.set(1, 0, 0)), u <= l && (l = u, n.set(0, 1, 0)), d <= l && n.set(0, 0, 1), a.crossVectors(i[0], n).normalize(), r[0].crossVectors(i[0], a), o[0].crossVectors(i[0], r[0]); for (let m = 1; m <= e; m++) { if (r[m] = r[m - 1].clone(), o[m] = o[m - 1].clone(), a.crossVectors(i[m - 1], i[m]), a.length() > Number.EPSILON) { a.normalize(); const g = Math.acos(dt(i[m - 1].dot(i[m]), -1, 1)); r[m].applyMatrix4(c.makeRotationAxis(a, g)) } o[m].crossVectors(i[m], r[m]) } if (t === !0) { let m = Math.acos(dt(r[0].dot(r[e]), -1, 1)); m /= e, i[0].dot(a.crossVectors(r[0], r[e])) > 0 && (m = -m); for (let g = 1; g <= e; g++)r[g].applyMatrix4(c.makeRotationAxis(i[g], m * g)), o[g].crossVectors(i[g], r[g]) } return { tangents: i, normals: r, binormals: o } } clone() { return new this.constructor().copy(this) } copy(e) { return this.arcLengthDivisions = e.arcLengthDivisions, this } toJSON() { const e = { metadata: { version: 4.6, type: "Curve", generator: "Curve.toJSON" } }; return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e } fromJSON(e) { return this.arcLengthDivisions = e.arcLengthDivisions, this } } class zo extends on { constructor(e = 0, t = 0, n = 1, i = 1, r = 0, o = Math.PI * 2, a = !1, c = 0) { super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = n, this.yRadius = i, this.aStartAngle = r, this.aEndAngle = o, this.aClockwise = a, this.aRotation = c } getPoint(e, t) { const n = t || new ae, i = Math.PI * 2; let r = this.aEndAngle - this.aStartAngle; const o = Math.abs(r) < Number.EPSILON; for (; r < 0;)r += i; for (; r > i;)r -= i; r < Number.EPSILON && (o ? r = 0 : r = i), this.aClockwise === !0 && !o && (r === i ? r = -i : r = r - i); const a = this.aStartAngle + e * r; let c = this.aX + this.xRadius * Math.cos(a), l = this.aY + this.yRadius * Math.sin(a); if (this.aRotation !== 0) { const h = Math.cos(this.aRotation), u = Math.sin(this.aRotation), d = c - this.aX, m = l - this.aY; c = d * h - m * u + this.aX, l = d * u + m * h + this.aY } return n.set(c, l) } copy(e) { return super.copy(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this } toJSON() { const e = super.toJSON(); return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e } fromJSON(e) { return super.fromJSON(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this } } class Xg extends zo { constructor(e, t, n, i, r, o) { super(e, t, n, n, i, r, o), this.isArcCurve = !0, this.type = "ArcCurve" } } function Ho() { let s = 0, e = 0, t = 0, n = 0; function i(r, o, a, c) { s = r, e = a, t = -3 * r + 3 * o - 2 * a - c, n = 2 * r - 2 * o + a + c } return { initCatmullRom: function (r, o, a, c, l) { i(o, a, l * (a - r), l * (c - o)) }, initNonuniformCatmullRom: function (r, o, a, c, l, h, u) { let d = (o - r) / l - (a - r) / (l + h) + (a - o) / h, m = (a - o) / h - (c - o) / (h + u) + (c - a) / u; d *= h, m *= h, i(o, a, d, m) }, calc: function (r) { const o = r * r, a = o * r; return s + e * r + t * o + n * a } } } const Xs = new P, $r = new Ho, Qr = new Ho, eo = new Ho; class qg extends on { constructor(e = [], t = !1, n = "centripetal", i = .5) { super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = n, this.tension = i } getPoint(e, t = new P) { const n = t, i = this.points, r = i.length, o = (r - (this.closed ? 0 : 1)) * e; let a = Math.floor(o), c = o - a; this.closed ? a += a > 0 ? 0 : (Math.floor(Math.abs(a) / r) + 1) * r : c === 0 && a === r - 1 && (a = r - 2, c = 1); let l, h; this.closed || a > 0 ? l = i[(a - 1) % r] : (Xs.subVectors(i[0], i[1]).add(i[0]), l = Xs); const u = i[a % r], d = i[(a + 1) % r]; if (this.closed || a + 2 < r ? h = i[(a + 2) % r] : (Xs.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), h = Xs), this.curveType === "centripetal" || this.curveType === "chordal") { const m = this.curveType === "chordal" ? .5 : .25; let g = Math.pow(l.distanceToSquared(u), m), _ = Math.pow(u.distanceToSquared(d), m), f = Math.pow(d.distanceToSquared(h), m); _ < 1e-4 && (_ = 1), g < 1e-4 && (g = _), f < 1e-4 && (f = _), $r.initNonuniformCatmullRom(l.x, u.x, d.x, h.x, g, _, f), Qr.initNonuniformCatmullRom(l.y, u.y, d.y, h.y, g, _, f), eo.initNonuniformCatmullRom(l.z, u.z, d.z, h.z, g, _, f) } else this.curveType === "catmullrom" && ($r.initCatmullRom(l.x, u.x, d.x, h.x, this.tension), Qr.initCatmullRom(l.y, u.y, d.y, h.y, this.tension), eo.initCatmullRom(l.z, u.z, d.z, h.z, this.tension)); return n.set($r.calc(c), Qr.calc(c), eo.calc(c)), n } copy(e) { super.copy(e), this.points = []; for (let t = 0, n = e.points.length; t < n; t++) { const i = e.points[t]; this.points.push(i.clone()) } return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this } toJSON() { const e = super.toJSON(); e.points = []; for (let t = 0, n = this.points.length; t < n; t++) { const i = this.points[t]; e.points.push(i.toArray()) } return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e } fromJSON(e) { super.fromJSON(e), this.points = []; for (let t = 0, n = e.points.length; t < n; t++) { const i = e.points[t]; this.points.push(new P().fromArray(i)) } return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this } } function Vc(s, e, t, n, i) { const r = (n - e) * .5, o = (i - t) * .5, a = s * s, c = s * a; return (2 * t - 2 * n + r + o) * c + (-3 * t + 3 * n - 2 * r - o) * a + r * s + t } function Yg(s, e) { const t = 1 - s; return t * t * e } function jg(s, e) { return 2 * (1 - s) * s * e } function Kg(s, e) { return s * s * e } function is(s, e, t, n) { return Yg(s, e) + jg(s, t) + Kg(s, n) } function Zg(s, e) { const t = 1 - s; return t * t * t * e } function Jg(s, e) { const t = 1 - s; return 3 * t * t * s * e } function $g(s, e) { return 3 * (1 - s) * s * s * e } function Qg(s, e) { return s * s * s * e } function ss(s, e, t, n, i) { return Zg(s, e) + Jg(s, t) + $g(s, n) + Qg(s, i) } class Gl extends on { constructor(e = new ae, t = new ae, n = new ae, i = new ae) { super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i } getPoint(e, t = new ae) { const n = t, i = this.v0, r = this.v1, o = this.v2, a = this.v3; return n.set(ss(e, i.x, r.x, o.x, a.x), ss(e, i.y, r.y, o.y, a.y)), n } copy(e) { return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this } toJSON() { const e = super.toJSON(); return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e } fromJSON(e) { return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this } } class e_ extends on { constructor(e = new P, t = new P, n = new P, i = new P) { super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i } getPoint(e, t = new P) { const n = t, i = this.v0, r = this.v1, o = this.v2, a = this.v3; return n.set(ss(e, i.x, r.x, o.x, a.x), ss(e, i.y, r.y, o.y, a.y), ss(e, i.z, r.z, o.z, a.z)), n } copy(e) { return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this } toJSON() { const e = super.toJSON(); return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e } fromJSON(e) { return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this } } class kl extends on { constructor(e = new ae, t = new ae) { super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = e, this.v2 = t } getPoint(e, t = new ae) { const n = t; return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n } getPointAt(e, t) { return this.getPoint(e, t) } getTangent(e, t = new ae) { return t.subVectors(this.v2, this.v1).normalize() } getTangentAt(e, t) { return this.getTangent(e, t) } copy(e) { return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this } toJSON() { const e = super.toJSON(); return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e } fromJSON(e) { return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this } } class t_ extends on { constructor(e = new P, t = new P) { super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = e, this.v2 = t } getPoint(e, t = new P) { const n = t; return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n } getPointAt(e, t) { return this.getPoint(e, t) } getTangent(e, t = new P) { return t.subVectors(this.v2, this.v1).normalize() } getTangentAt(e, t) { return this.getTangent(e, t) } copy(e) { return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this } toJSON() { const e = super.toJSON(); return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e } fromJSON(e) { return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this } } class Vl extends on { constructor(e = new ae, t = new ae, n = new ae) { super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n } getPoint(e, t = new ae) { const n = t, i = this.v0, r = this.v1, o = this.v2; return n.set(is(e, i.x, r.x, o.x), is(e, i.y, r.y, o.y)), n } copy(e) { return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this } toJSON() { const e = super.toJSON(); return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e } fromJSON(e) { return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this } } class n_ extends on { constructor(e = new P, t = new P, n = new P) { super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n } getPoint(e, t = new P) { const n = t, i = this.v0, r = this.v1, o = this.v2; return n.set(is(e, i.x, r.x, o.x), is(e, i.y, r.y, o.y), is(e, i.z, r.z, o.z)), n } copy(e) { return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this } toJSON() { const e = super.toJSON(); return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e } fromJSON(e) { return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this } } class Wl extends on { constructor(e = []) { super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = e } getPoint(e, t = new ae) { const n = t, i = this.points, r = (i.length - 1) * e, o = Math.floor(r), a = r - o, c = i[o === 0 ? o : o - 1], l = i[o], h = i[o > i.length - 2 ? i.length - 1 : o + 1], u = i[o > i.length - 3 ? i.length - 1 : o + 2]; return n.set(Vc(a, c.x, l.x, h.x, u.x), Vc(a, c.y, l.y, h.y, u.y)), n } copy(e) { super.copy(e), this.points = []; for (let t = 0, n = e.points.length; t < n; t++) { const i = e.points[t]; this.points.push(i.clone()) } return this } toJSON() { const e = super.toJSON(); e.points = []; for (let t = 0, n = this.points.length; t < n; t++) { const i = this.points[t]; e.points.push(i.toArray()) } return e } fromJSON(e) { super.fromJSON(e), this.points = []; for (let t = 0, n = e.points.length; t < n; t++) { const i = e.points[t]; this.points.push(new ae().fromArray(i)) } return this } } var Mo = Object.freeze({ __proto__: null, ArcCurve: Xg, CatmullRomCurve3: qg, CubicBezierCurve: Gl, CubicBezierCurve3: e_, EllipseCurve: zo, LineCurve: kl, LineCurve3: t_, QuadraticBezierCurve: Vl, QuadraticBezierCurve3: n_, SplineCurve: Wl }); class i_ extends on { constructor() { super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1 } add(e) { this.curves.push(e) } closePath() { const e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1); if (!e.equals(t)) { const n = e.isVector2 === !0 ? "LineCurve" : "LineCurve3"; this.curves.push(new Mo[n](t, e)) } return this } getPoint(e, t) { const n = e * this.getLength(), i = this.getCurveLengths(); let r = 0; for (; r < i.length;) { if (i[r] >= n) { const o = i[r] - n, a = this.curves[r], c = a.getLength(), l = c === 0 ? 0 : 1 - o / c; return a.getPointAt(l, t) } r++ } return null } getLength() { const e = this.getCurveLengths(); return e[e.length - 1] } updateArcLengths() { this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths() } getCurveLengths() { if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths; const e = []; let t = 0; for (let n = 0, i = this.curves.length; n < i; n++)t += this.curves[n].getLength(), e.push(t); return this.cacheLengths = e, e } getSpacedPoints(e = 40) { const t = []; for (let n = 0; n <= e; n++)t.push(this.getPoint(n / e)); return this.autoClose && t.push(t[0]), t } getPoints(e = 12) { const t = []; let n; for (let i = 0, r = this.curves; i < r.length; i++) { const o = r[i], a = o.isEllipseCurve ? e * 2 : o.isLineCurve || o.isLineCurve3 ? 1 : o.isSplineCurve ? e * o.points.length : e, c = o.getPoints(a); for (let l = 0; l < c.length; l++) { const h = c[l]; n && n.equals(h) || (t.push(h), n = h) } } return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t } copy(e) { super.copy(e), this.curves = []; for (let t = 0, n = e.curves.length; t < n; t++) { const i = e.curves[t]; this.curves.push(i.clone()) } return this.autoClose = e.autoClose, this } toJSON() { const e = super.toJSON(); e.autoClose = this.autoClose, e.curves = []; for (let t = 0, n = this.curves.length; t < n; t++) { const i = this.curves[t]; e.curves.push(i.toJSON()) } return e } fromJSON(e) { super.fromJSON(e), this.autoClose = e.autoClose, this.curves = []; for (let t = 0, n = e.curves.length; t < n; t++) { const i = e.curves[t]; this.curves.push(new Mo[i.type]().fromJSON(i)) } return this } } class So extends i_ { constructor(e) { super(), this.type = "Path", this.currentPoint = new ae, e && this.setFromPoints(e) } setFromPoints(e) { this.moveTo(e[0].x, e[0].y); for (let t = 1, n = e.length; t < n; t++)this.lineTo(e[t].x, e[t].y); return this } moveTo(e, t) { return this.currentPoint.set(e, t), this } lineTo(e, t) { const n = new kl(this.currentPoint.clone(), new ae(e, t)); return this.curves.push(n), this.currentPoint.set(e, t), this } quadraticCurveTo(e, t, n, i) { const r = new Vl(this.currentPoint.clone(), new ae(e, t), new ae(n, i)); return this.curves.push(r), this.currentPoint.set(n, i), this } bezierCurveTo(e, t, n, i, r, o) { const a = new Gl(this.currentPoint.clone(), new ae(e, t), new ae(n, i), new ae(r, o)); return this.curves.push(a), this.currentPoint.set(r, o), this } splineThru(e) { const t = [this.currentPoint.clone()].concat(e), n = new Wl(t); return this.curves.push(n), this.currentPoint.copy(e[e.length - 1]), this } arc(e, t, n, i, r, o) { const a = this.currentPoint.x, c = this.currentPoint.y; return this.absarc(e + a, t + c, n, i, r, o), this } absarc(e, t, n, i, r, o) { return this.absellipse(e, t, n, n, i, r, o), this } ellipse(e, t, n, i, r, o, a, c) { const l = this.currentPoint.x, h = this.currentPoint.y; return this.absellipse(e + l, t + h, n, i, r, o, a, c), this } absellipse(e, t, n, i, r, o, a, c) { const l = new zo(e, t, n, i, r, o, a, c); if (this.curves.length > 0) { const u = l.getPoint(0); u.equals(this.currentPoint) || this.lineTo(u.x, u.y) } this.curves.push(l); const h = l.getPoint(1); return this.currentPoint.copy(h), this } copy(e) { return super.copy(e), this.currentPoint.copy(e.currentPoint), this } toJSON() { const e = super.toJSON(); return e.currentPoint = this.currentPoint.toArray(), e } fromJSON(e) { return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this } } class $s extends So { constructor(e) { super(e), this.uuid = Wt(), this.type = "Shape", this.holes = [] } getPointsHoles(e) { const t = []; for (let n = 0, i = this.holes.length; n < i; n++)t[n] = this.holes[n].getPoints(e); return t } extractPoints(e) { return { shape: this.getPoints(e), holes: this.getPointsHoles(e) } } copy(e) { super.copy(e), this.holes = []; for (let t = 0, n = e.holes.length; t < n; t++) { const i = e.holes[t]; this.holes.push(i.clone()) } return this } toJSON() { const e = super.toJSON(); e.uuid = this.uuid, e.holes = []; for (let t = 0, n = this.holes.length; t < n; t++) { const i = this.holes[t]; e.holes.push(i.toJSON()) } return e } fromJSON(e) { super.fromJSON(e), this.uuid = e.uuid, this.holes = []; for (let t = 0, n = e.holes.length; t < n; t++) { const i = e.holes[t]; this.holes.push(new So().fromJSON(i)) } return this } } const s_ = { triangulate: function (s, e, t = 2) { const n = e && e.length, i = n ? e[0] * t : s.length; let r = Xl(s, 0, i, t, !0); const o = []; if (!r || r.next === r.prev) return o; let a, c, l, h, u, d, m; if (n && (r = l_(s, e, r, t)), s.length > 80 * t) { a = l = s[0], c = h = s[1]; for (let g = t; g < i; g += t)u = s[g], d = s[g + 1], u < a && (a = u), d < c && (c = d), u > l && (l = u), d > h && (h = d); m = Math.max(l - a, h - c), m = m !== 0 ? 32767 / m : 0 } return hs(r, o, t, a, c, m, 0), o } }; function Xl(s, e, t, n, i) { let r, o; if (i === y_(s, e, t, n) > 0) for (r = e; r < t; r += n)o = Wc(r, s[r], s[r + 1], o); else for (r = t - n; r >= e; r -= n)o = Wc(r, s[r], s[r + 1], o); return o && dr(o, o.next) && (ds(o), o = o.next), o } function ni(s, e) { if (!s) return s; e || (e = s); let t = s, n; do if (n = !1, !t.steiner && (dr(t, t.next) || rt(t.prev, t, t.next) === 0)) { if (ds(t), t = e = t.prev, t === t.next) break; n = !0 } else t = t.next; while (n || t !== e); return e } function hs(s, e, t, n, i, r, o) { if (!s) return; !o && r && p_(s, n, i, r); let a = s, c, l; for (; s.prev !== s.next;) { if (c = s.prev, l = s.next, r ? o_(s, n, i, r) : r_(s)) { e.push(c.i / t | 0), e.push(s.i / t | 0), e.push(l.i / t | 0), ds(s), s = l.next, a = l.next; continue } if (s = l, s === a) { o ? o === 1 ? (s = a_(ni(s), e, t), hs(s, e, t, n, i, r, 2)) : o === 2 && c_(s, e, t, n, i, r) : hs(ni(s), e, t, n, i, r, 1); break } } } function r_(s) { const e = s.prev, t = s, n = s.next; if (rt(e, t, n) >= 0) return !1; const i = e.x, r = t.x, o = n.x, a = e.y, c = t.y, l = n.y, h = i < r ? i < o ? i : o : r < o ? r : o, u = a < c ? a < l ? a : l : c < l ? c : l, d = i > r ? i > o ? i : o : r > o ? r : o, m = a > c ? a > l ? a : l : c > l ? c : l; let g = n.next; for (; g !== e;) { if (g.x >= h && g.x <= d && g.y >= u && g.y <= m && Ci(i, a, r, c, o, l, g.x, g.y) && rt(g.prev, g, g.next) >= 0) return !1; g = g.next } return !0 } function o_(s, e, t, n) { const i = s.prev, r = s, o = s.next; if (rt(i, r, o) >= 0) return !1; const a = i.x, c = r.x, l = o.x, h = i.y, u = r.y, d = o.y, m = a < c ? a < l ? a : l : c < l ? c : l, g = h < u ? h < d ? h : d : u < d ? u : d, _ = a > c ? a > l ? a : l : c > l ? c : l, f = h > u ? h > d ? h : d : u > d ? u : d, p = Eo(m, g, e, t, n), T = Eo(_, f, e, t, n); let x = s.prevZ, M = s.nextZ; for (; x && x.z >= p && M && M.z <= T;) { if (x.x >= m && x.x <= _ && x.y >= g && x.y <= f && x !== i && x !== o && Ci(a, h, c, u, l, d, x.x, x.y) && rt(x.prev, x, x.next) >= 0 || (x = x.prevZ, M.x >= m && M.x <= _ && M.y >= g && M.y <= f && M !== i && M !== o && Ci(a, h, c, u, l, d, M.x, M.y) && rt(M.prev, M, M.next) >= 0)) return !1; M = M.nextZ } for (; x && x.z >= p;) { if (x.x >= m && x.x <= _ && x.y >= g && x.y <= f && x !== i && x !== o && Ci(a, h, c, u, l, d, x.x, x.y) && rt(x.prev, x, x.next) >= 0) return !1; x = x.prevZ } for (; M && M.z <= T;) { if (M.x >= m && M.x <= _ && M.y >= g && M.y <= f && M !== i && M !== o && Ci(a, h, c, u, l, d, M.x, M.y) && rt(M.prev, M, M.next) >= 0) return !1; M = M.nextZ } return !0 } function a_(s, e, t) { let n = s; do { const i = n.prev, r = n.next.next; !dr(i, r) && ql(i, n, n.next, r) && us(i, r) && us(r, i) && (e.push(i.i / t | 0), e.push(n.i / t | 0), e.push(r.i / t | 0), ds(n), ds(n.next), n = s = r), n = n.next } while (n !== s); return ni(n) } function c_(s, e, t, n, i, r) { let o = s; do { let a = o.next.next; for (; a !== o.prev;) { if (o.i !== a.i && __(o, a)) { let c = Yl(o, a); o = ni(o, o.next), c = ni(c, c.next), hs(o, e, t, n, i, r, 0), hs(c, e, t, n, i, r, 0); return } a = a.next } o = o.next } while (o !== s) } function l_(s, e, t, n) { const i = []; let r, o, a, c, l; for (r = 0, o = e.length; r < o; r++)a = e[r] * n, c = r < o - 1 ? e[r + 1] * n : s.length, l = Xl(s, a, c, n, !1), l === l.next && (l.steiner = !0), i.push(g_(l)); for (i.sort(h_), r = 0; r < i.length; r++)t = u_(i[r], t); return t } function h_(s, e) { return s.x - e.x } function u_(s, e) { const t = d_(s, e); if (!t) return e; const n = Yl(t, s); return ni(n, n.next), ni(t, t.next) } function d_(s, e) { let t = e, n = -1 / 0, i; const r = s.x, o = s.y; do { if (o <= t.y && o >= t.next.y && t.next.y !== t.y) { const d = t.x + (o - t.y) * (t.next.x - t.x) / (t.next.y - t.y); if (d <= r && d > n && (n = d, i = t.x < t.next.x ? t : t.next, d === r)) return i } t = t.next } while (t !== e); if (!i) return null; const a = i, c = i.x, l = i.y; let h = 1 / 0, u; t = i; do r >= t.x && t.x >= c && r !== t.x && Ci(o < l ? r : n, o, c, l, o < l ? n : r, o, t.x, t.y) && (u = Math.abs(o - t.y) / (r - t.x), us(t, s) && (u < h || u === h && (t.x > i.x || t.x === i.x && f_(i, t))) && (i = t, h = u)), t = t.next; while (t !== a); return i } function f_(s, e) { return rt(s.prev, s, e.prev) < 0 && rt(e.next, s, s.next) < 0 } function p_(s, e, t, n) { let i = s; do i.z === 0 && (i.z = Eo(i.x, i.y, e, t, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next; while (i !== s); i.prevZ.nextZ = null, i.prevZ = null, m_(i) } function m_(s) { let e, t, n, i, r, o, a, c, l = 1; do { for (t = s, s = null, r = null, o = 0; t;) { for (o++, n = t, a = 0, e = 0; e < l && (a++, n = n.nextZ, !!n); e++); for (c = l; a > 0 || c > 0 && n;)a !== 0 && (c === 0 || !n || t.z <= n.z) ? (i = t, t = t.nextZ, a--) : (i = n, n = n.nextZ, c--), r ? r.nextZ = i : s = i, i.prevZ = r, r = i; t = n } r.nextZ = null, l *= 2 } while (o > 1); return s } function Eo(s, e, t, n, i) { return s = (s - t) * i | 0, e = (e - n) * i | 0, s = (s | s << 8) & 16711935, s = (s | s << 4) & 252645135, s = (s | s << 2) & 858993459, s = (s | s << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, s | e << 1 } function g_(s) { let e = s, t = s; do (e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next; while (e !== s); return t } function Ci(s, e, t, n, i, r, o, a) { return (i - o) * (e - a) >= (s - o) * (r - a) && (s - o) * (n - a) >= (t - o) * (e - a) && (t - o) * (r - a) >= (i - o) * (n - a) } function __(s, e) { return s.next.i !== e.i && s.prev.i !== e.i && !x_(s, e) && (us(s, e) && us(e, s) && v_(s, e) && (rt(s.prev, s, e.prev) || rt(s, e.prev, e)) || dr(s, e) && rt(s.prev, s, s.next) > 0 && rt(e.prev, e, e.next) > 0) } function rt(s, e, t) { return (e.y - s.y) * (t.x - e.x) - (e.x - s.x) * (t.y - e.y) } function dr(s, e) { return s.x === e.x && s.y === e.y } function ql(s, e, t, n) { const i = Ys(rt(s, e, t)), r = Ys(rt(s, e, n)), o = Ys(rt(t, n, s)), a = Ys(rt(t, n, e)); return !!(i !== r && o !== a || i === 0 && qs(s, t, e) || r === 0 && qs(s, n, e) || o === 0 && qs(t, s, n) || a === 0 && qs(t, e, n)) } function qs(s, e, t) { return e.x <= Math.max(s.x, t.x) && e.x >= Math.min(s.x, t.x) && e.y <= Math.max(s.y, t.y) && e.y >= Math.min(s.y, t.y) } function Ys(s) { return s > 0 ? 1 : s < 0 ? -1 : 0 } function x_(s, e) { let t = s; do { if (t.i !== s.i && t.next.i !== s.i && t.i !== e.i && t.next.i !== e.i && ql(t, t.next, s, e)) return !0; t = t.next } while (t !== s); return !1 } function us(s, e) { return rt(s.prev, s, s.next) < 0 ? rt(s, e, s.next) >= 0 && rt(s, s.prev, e) >= 0 : rt(s, e, s.prev) < 0 || rt(s, s.next, e) < 0 } function v_(s, e) { let t = s, n = !1; const i = (s.x + e.x) / 2, r = (s.y + e.y) / 2; do t.y > r != t.next.y > r && t.next.y !== t.y && i < (t.next.x - t.x) * (r - t.y) / (t.next.y - t.y) + t.x && (n = !n), t = t.next; while (t !== s); return n } function Yl(s, e) { const t = new To(s.i, s.x, s.y), n = new To(e.i, e.x, e.y), i = s.next, r = e.prev; return s.next = e, e.prev = s, t.next = i, i.prev = t, n.next = t, t.prev = n, r.next = n, n.prev = r, n } function Wc(s, e, t, n) { const i = new To(s, e, t); return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i } function ds(s) { s.next.prev = s.prev, s.prev.next = s.next, s.prevZ && (s.prevZ.nextZ = s.nextZ), s.nextZ && (s.nextZ.prevZ = s.prevZ) } function To(s, e, t) { this.i = s, this.x = e, this.y = t, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = !1 } function y_(s, e, t, n) { let i = 0; for (let r = e, o = t - n; r < t; r += n)i += (s[o] - s[r]) * (s[r + 1] + s[o + 1]), o = r; return i } class Ii { static area(e) { const t = e.length; let n = 0; for (let i = t - 1, r = 0; r < t; i = r++)n += e[i].x * e[r].y - e[r].x * e[i].y; return n * .5 } static isClockWise(e) { return Ii.area(e) < 0 } static triangulateShape(e, t) { const n = [], i = [], r = []; Xc(e), qc(n, e); let o = e.length; t.forEach(Xc); for (let c = 0; c < t.length; c++)i.push(o), o += t[c].length, qc(n, t[c]); const a = s_.triangulate(n, i); for (let c = 0; c < a.length; c += 3)r.push(a.slice(c, c + 3)); return r } } function Xc(s) { const e = s.length; e > 2 && s[e - 1].equals(s[0]) && s.pop() } function qc(s, e) { for (let t = 0; t < e.length; t++)s.push(e[t].x), s.push(e[t].y) } class Go extends $t { constructor(e = new $s([new ae(.5, .5), new ae(-.5, .5), new ae(-.5, -.5), new ae(.5, -.5)]), t = {}) { super(), this.type = "ExtrudeGeometry", this.parameters = { shapes: e, options: t }, e = Array.isArray(e) ? e : [e]; const n = this, i = [], r = []; for (let a = 0, c = e.length; a < c; a++) { const l = e[a]; o(l) } this.setAttribute("position", new Jt(i, 3)), this.setAttribute("uv", new Jt(r, 2)), this.computeVertexNormals(); function o(a) { const c = [], l = t.curveSegments !== void 0 ? t.curveSegments : 12, h = t.steps !== void 0 ? t.steps : 1, u = t.depth !== void 0 ? t.depth : 1; let d = t.bevelEnabled !== void 0 ? t.bevelEnabled : !0, m = t.bevelThickness !== void 0 ? t.bevelThickness : .2, g = t.bevelSize !== void 0 ? t.bevelSize : m - .1, _ = t.bevelOffset !== void 0 ? t.bevelOffset : 0, f = t.bevelSegments !== void 0 ? t.bevelSegments : 3; const p = t.extrudePath, T = t.UVGenerator !== void 0 ? t.UVGenerator : M_; let x, M = !1, I, L, A, z; p && (x = p.getSpacedPoints(h), M = !0, d = !1, I = p.computeFrenetFrames(h, !1), L = new P, A = new P, z = new P), d || (f = 0, m = 0, g = 0, _ = 0); const Q = a.extractPoints(l); let v = Q.shape; const w = Q.holes; if (!Ii.isClockWise(v)) { v = v.reverse(); for (let C = 0, le = w.length; C < le; C++) { const V = w[C]; Ii.isClockWise(V) && (w[C] = V.reverse()) } } const ee = Ii.triangulateShape(v, w), D = v; for (let C = 0, le = w.length; C < le; C++) { const V = w[C]; v = v.concat(V) } function G(C, le, V) { return le || console.error("THREE.ExtrudeGeometry: vec does not exist"), C.clone().addScaledVector(le, V) } const O = v.length, j = ee.length; function X(C, le, V) { let oe, W, Ee; const pe = C.x - le.x, S = C.y - le.y, y = V.x - C.x, N = V.y - C.y, te = pe * pe + S * S, J = pe * N - S * y; if (Math.abs(J) > Number.EPSILON) { const Z = Math.sqrt(te), ye = Math.sqrt(y * y + N * N), de = le.x - S / Z, _e = le.y + pe / Z, Ce = V.x - N / ye, Fe = V.y + y / ye, $ = ((Ce - de) * N - (Fe - _e) * y) / (pe * N - S * y); oe = de + pe * $ - C.x, W = _e + S * $ - C.y; const Ke = oe * oe + W * W; if (Ke <= 2) return new ae(oe, W); Ee = Math.sqrt(Ke / 2) } else { let Z = !1; pe > Number.EPSILON ? y > Number.EPSILON && (Z = !0) : pe < -Number.EPSILON ? y < -Number.EPSILON && (Z = !0) : Math.sign(S) === Math.sign(N) && (Z = !0), Z ? (oe = -S, W = pe, Ee = Math.sqrt(te)) : (oe = pe, W = S, Ee = Math.sqrt(te / 2)) } return new ae(oe / Ee, W / Ee) } const Y = []; for (let C = 0, le = D.length, V = le - 1, oe = C + 1; C < le; C++, V++, oe++)V === le && (V = 0), oe === le && (oe = 0), Y[C] = X(D[C], D[V], D[oe]); const K = []; let ne, he = Y.concat(); for (let C = 0, le = w.length; C < le; C++) { const V = w[C]; ne = []; for (let oe = 0, W = V.length, Ee = W - 1, pe = oe + 1; oe < W; oe++, Ee++, pe++)Ee === W && (Ee = 0), pe === W && (pe = 0), ne[oe] = X(V[oe], V[Ee], V[pe]); K.push(ne), he = he.concat(ne) } for (let C = 0; C < f; C++) { const le = C / f, V = m * Math.cos(le * Math.PI / 2), oe = g * Math.sin(le * Math.PI / 2) + _; for (let W = 0, Ee = D.length; W < Ee; W++) { const pe = G(D[W], Y[W], oe); Me(pe.x, pe.y, -V) } for (let W = 0, Ee = w.length; W < Ee; W++) { const pe = w[W]; ne = K[W]; for (let S = 0, y = pe.length; S < y; S++) { const N = G(pe[S], ne[S], oe); Me(N.x, N.y, -V) } } } const Pe = g + _; for (let C = 0; C < O; C++) { const le = d ? G(v[C], he[C], Pe) : v[C]; M ? (A.copy(I.normals[0]).multiplyScalar(le.x), L.copy(I.binormals[0]).multiplyScalar(le.y), z.copy(x[0]).add(A).add(L), Me(z.x, z.y, z.z)) : Me(le.x, le.y, 0) } for (let C = 1; C <= h; C++)for (let le = 0; le < O; le++) { const V = d ? G(v[le], he[le], Pe) : v[le]; M ? (A.copy(I.normals[C]).multiplyScalar(V.x), L.copy(I.binormals[C]).multiplyScalar(V.y), z.copy(x[C]).add(A).add(L), Me(z.x, z.y, z.z)) : Me(V.x, V.y, u / h * C) } for (let C = f - 1; C >= 0; C--) { const le = C / f, V = m * Math.cos(le * Math.PI / 2), oe = g * Math.sin(le * Math.PI / 2) + _; for (let W = 0, Ee = D.length; W < Ee; W++) { const pe = G(D[W], Y[W], oe); Me(pe.x, pe.y, u + V) } for (let W = 0, Ee = w.length; W < Ee; W++) { const pe = w[W]; ne = K[W]; for (let S = 0, y = pe.length; S < y; S++) { const N = G(pe[S], ne[S], oe); M ? Me(N.x, N.y + x[h - 1].y, x[h - 1].x + V) : Me(N.x, N.y, u + V) } } } k(), ie(); function k() { const C = i.length / 3; if (d) { let le = 0, V = O * le; for (let oe = 0; oe < j; oe++) { const W = ee[oe]; Te(W[2] + V, W[1] + V, W[0] + V) } le = h + f * 2, V = O * le; for (let oe = 0; oe < j; oe++) { const W = ee[oe]; Te(W[0] + V, W[1] + V, W[2] + V) } } else { for (let le = 0; le < j; le++) { const V = ee[le]; Te(V[2], V[1], V[0]) } for (let le = 0; le < j; le++) { const V = ee[le]; Te(V[0] + O * h, V[1] + O * h, V[2] + O * h) } } n.addGroup(C, i.length / 3 - C, 0) } function ie() { const C = i.length / 3; let le = 0; ge(D, le), le += D.length; for (let V = 0, oe = w.length; V < oe; V++) { const W = w[V]; ge(W, le), le += W.length } n.addGroup(C, i.length / 3 - C, 1) } function ge(C, le) { let V = C.length; for (; --V >= 0;) { const oe = V; let W = V - 1; W < 0 && (W = C.length - 1); for (let Ee = 0, pe = h + f * 2; Ee < pe; Ee++) { const S = O * Ee, y = O * (Ee + 1), N = le + oe + S, te = le + W + S, J = le + W + y, Z = le + oe + y; ve(N, te, J, Z) } } } function Me(C, le, V) { c.push(C), c.push(le), c.push(V) } function Te(C, le, V) { Oe(C), Oe(le), Oe(V); const oe = i.length / 3, W = T.generateTopUV(n, i, oe - 3, oe - 2, oe - 1); Ae(W[0]), Ae(W[1]), Ae(W[2]) } function ve(C, le, V, oe) { Oe(C), Oe(le), Oe(oe), Oe(le), Oe(V), Oe(oe); const W = i.length / 3, Ee = T.generateSideWallUV(n, i, W - 6, W - 3, W - 2, W - 1); Ae(Ee[0]), Ae(Ee[1]), Ae(Ee[3]), Ae(Ee[1]), Ae(Ee[2]), Ae(Ee[3]) } function Oe(C) { i.push(c[C * 3 + 0]), i.push(c[C * 3 + 1]), i.push(c[C * 3 + 2]) } function Ae(C) { r.push(C.x), r.push(C.y) } } } copy(e) { return super.copy(e), this.parameters = Object.assign({}, e.parameters), this } toJSON() { const e = super.toJSON(), t = this.parameters.shapes, n = this.parameters.options; return S_(t, n, e) } static fromJSON(e, t) { const n = []; for (let r = 0, o = e.shapes.length; r < o; r++) { const a = t[e.shapes[r]]; n.push(a) } const i = e.options.extrudePath; return i !== void 0 && (e.options.extrudePath = new Mo[i.type]().fromJSON(i)), new Go(n, e.options) } } const M_ = { generateTopUV: function (s, e, t, n, i) { const r = e[t * 3], o = e[t * 3 + 1], a = e[n * 3], c = e[n * 3 + 1], l = e[i * 3], h = e[i * 3 + 1]; return [new ae(r, o), new ae(a, c), new ae(l, h)] }, generateSideWallUV: function (s, e, t, n, i, r) { const o = e[t * 3], a = e[t * 3 + 1], c = e[t * 3 + 2], l = e[n * 3], h = e[n * 3 + 1], u = e[n * 3 + 2], d = e[i * 3], m = e[i * 3 + 1], g = e[i * 3 + 2], _ = e[r * 3], f = e[r * 3 + 1], p = e[r * 3 + 2]; return Math.abs(a - h) < Math.abs(o - l) ? [new ae(o, 1 - c), new ae(l, 1 - u), new ae(d, 1 - g), new ae(_, 1 - p)] : [new ae(a, 1 - c), new ae(h, 1 - u), new ae(m, 1 - g), new ae(f, 1 - p)] } }; function S_(s, e, t) { if (t.shapes = [], Array.isArray(s)) for (let n = 0, i = s.length; n < i; n++) { const r = s[n]; t.shapes.push(r.uuid) } else t.shapes.push(s.uuid); return t.options = Object.assign({}, e), e.extrudePath !== void 0 && (t.options.extrudePath = e.extrudePath.toJSON()), t } class ko extends Zt { constructor(e) { super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new De(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new De(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Lo, this.normalScale = new ae(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e) } copy(e) { return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this } } class Mn extends ko { constructor(e) { super(), this.isMeshPhysicalMaterial = !0, this.defines = { STANDARD: "", PHYSICAL: "" }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new ae(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", { get: function () { return dt(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1) }, set: function (t) { this.ior = (1 + .4 * t) / (1 - .4 * t) } }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new De(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new De(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new De(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e) } get anisotropy() { return this._anisotropy } set anisotropy(e) { this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e } get clearcoat() { return this._clearcoat } set clearcoat(e) { this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e } get iridescence() { return this._iridescence } set iridescence(e) { this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e } get sheen() { return this._sheen } set sheen(e) { this._sheen > 0 != e > 0 && this.version++, this._sheen = e } get transmission() { return this._transmission } set transmission(e) { this._transmission > 0 != e > 0 && this.version++, this._transmission = e } copy(e) { return super.copy(e), this.defines = { STANDARD: "", PHYSICAL: "" }, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this } } class jl extends Zt { constructor(e) { super(), this.isMeshPhongMaterial = !0, this.type = "MeshPhongMaterial", this.color = new De(16777215), this.specular = new De(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new De(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Lo, this.normalScale = new ae(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Ro, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e) } copy(e) { return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this } } function js(s, e, t) { return !s || !t && s.constructor === e ? s : typeof e.BYTES_PER_ELEMENT == "number" ? new e(s) : Array.prototype.slice.call(s) } function E_(s) { return ArrayBuffer.isView(s) && !(s instanceof DataView) } function T_(s) { function e(i, r) { return s[i] - s[r] } const t = s.length, n = new Array(t); for (let i = 0; i !== t; ++i)n[i] = i; return n.sort(e), n } function Yc(s, e, t) { const n = s.length, i = new s.constructor(n); for (let r = 0, o = 0; o !== n; ++r) { const a = t[r] * e; for (let c = 0; c !== e; ++c)i[o++] = s[a + c] } return i } function Kl(s, e, t, n) { let i = 1, r = s[0]; for (; r !== void 0 && r[n] === void 0;)r = s[i++]; if (r === void 0) return; let o = r[n]; if (o !== void 0) if (Array.isArray(o)) do o = r[n], o !== void 0 && (e.push(r.time), t.push.apply(t, o)), r = s[i++]; while (r !== void 0); else if (o.toArray !== void 0) do o = r[n], o !== void 0 && (e.push(r.time), o.toArray(t, t.length)), r = s[i++]; while (r !== void 0); else do o = r[n], o !== void 0 && (e.push(r.time), t.push(o)), r = s[i++]; while (r !== void 0) } class gs { constructor(e, t, n, i) { this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {} } evaluate(e) { const t = this.parameterPositions; let n = this._cachedIndex, i = t[n], r = t[n - 1]; n: { e: { let o; t: { i: if (!(e < i)) { for (let a = n + 2; ;) { if (i === void 0) { if (e < r) break i; return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1) } if (n === a) break; if (r = i, i = t[++n], e < i) break e } o = t.length; break t } if (!(e >= r)) { const a = t[1]; e < a && (n = 2, r = a); for (let c = n - 2; ;) { if (r === void 0) return this._cachedIndex = 0, this.copySampleValue_(0); if (n === c) break; if (i = r, r = t[--n - 1], e >= r) break e } o = n, n = 0; break t } break n } for (; n < o;) { const a = n + o >>> 1; e < t[a] ? o = a : n = a + 1 } if (i = t[n], r = t[n - 1], r === void 0) return this._cachedIndex = 0, this.copySampleValue_(0); if (i === void 0) return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1) } this._cachedIndex = n, this.intervalChanged_(n, r, i) } return this.interpolate_(n, r, e, i) } getSettings_() { return this.settings || this.DefaultSettings_ } copySampleValue_(e) { const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i; for (let o = 0; o !== i; ++o)t[o] = n[r + o]; return t } interpolate_() { throw new Error("call to abstract method") } intervalChanged_() { } } class b_ extends gs { constructor(e, t, n, i) { super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = { endingStart: Oa, endingEnd: Oa } } intervalChanged_(e, t, n) { const i = this.parameterPositions; let r = e - 2, o = e + 1, a = i[r], c = i[o]; if (a === void 0) switch (this.getSettings_().endingStart) { case Fa: r = e, a = 2 * t - n; break; case Ba: r = i.length - 2, a = t + i[r] - i[r + 1]; break; default: r = e, a = n }if (c === void 0) switch (this.getSettings_().endingEnd) { case Fa: o = e, c = 2 * n - t; break; case Ba: o = 1, c = n + i[1] - i[0]; break; default: o = e - 1, c = t }const l = (n - t) * .5, h = this.valueSize; this._weightPrev = l / (t - a), this._weightNext = l / (c - n), this._offsetPrev = r * h, this._offsetNext = o * h } interpolate_(e, t, n, i) { const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, c = e * a, l = c - a, h = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, m = this._weightNext, g = (n - t) / (i - t), _ = g * g, f = _ * g, p = -d * f + 2 * d * _ - d * g, T = (1 + d) * f + (-1.5 - 2 * d) * _ + (-.5 + d) * g + 1, x = (-1 - m) * f + (1.5 + m) * _ + .5 * g, M = m * f - m * _; for (let I = 0; I !== a; ++I)r[I] = p * o[h + I] + T * o[l + I] + x * o[c + I] + M * o[u + I]; return r } } class A_ extends gs { constructor(e, t, n, i) { super(e, t, n, i) } interpolate_(e, t, n, i) { const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, c = e * a, l = c - a, h = (n - t) / (i - t), u = 1 - h; for (let d = 0; d !== a; ++d)r[d] = o[l + d] * u + o[c + d] * h; return r } } class w_ extends gs { constructor(e, t, n, i) { super(e, t, n, i) } interpolate_(e) { return this.copySampleValue_(e - 1) } } class an { constructor(e, t, n, i) { if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined"); if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e); this.name = e, this.times = js(t, this.TimeBufferType), this.values = js(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation) } static toJSON(e) { const t = e.constructor; let n; if (t.toJSON !== this.toJSON) n = t.toJSON(e); else { n = { name: e.name, times: js(e.times, Array), values: js(e.values, Array) }; const i = e.getInterpolation(); i !== e.DefaultInterpolation && (n.interpolation = i) } return n.type = e.ValueTypeName, n } InterpolantFactoryMethodDiscrete(e) { return new w_(this.times, this.values, this.getValueSize(), e) } InterpolantFactoryMethodLinear(e) { return new A_(this.times, this.values, this.getValueSize(), e) } InterpolantFactoryMethodSmooth(e) { return new b_(this.times, this.values, this.getValueSize(), e) } setInterpolation(e) { let t; switch (e) { case cs: t = this.InterpolantFactoryMethodDiscrete; break; case Bi: t = this.InterpolantFactoryMethodLinear; break; case br: t = this.InterpolantFactoryMethodSmooth; break }if (t === void 0) { const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name; if (this.createInterpolant === void 0) if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation); else throw new Error(n); return console.warn("THREE.KeyframeTrack:", n), this } return this.createInterpolant = t, this } getInterpolation() { switch (this.createInterpolant) { case this.InterpolantFactoryMethodDiscrete: return cs; case this.InterpolantFactoryMethodLinear: return Bi; case this.InterpolantFactoryMethodSmooth: return br } } getValueSize() { return this.values.length / this.times.length } shift(e) { if (e !== 0) { const t = this.times; for (let n = 0, i = t.length; n !== i; ++n)t[n] += e } return this } scale(e) { if (e !== 1) { const t = this.times; for (let n = 0, i = t.length; n !== i; ++n)t[n] *= e } return this } trim(e, t) { const n = this.times, i = n.length; let r = 0, o = i - 1; for (; r !== i && n[r] < e;)++r; for (; o !== -1 && n[o] > t;)--o; if (++o, r !== 0 || o !== i) { r >= o && (o = Math.max(o, 1), r = o - 1); const a = this.getValueSize(); this.times = n.slice(r, o), this.values = this.values.slice(r * a, o * a) } return this } validate() { let e = !0; const t = this.getValueSize(); t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1); const n = this.times, i = this.values, r = n.length; r === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1); let o = null; for (let a = 0; a !== r; a++) { const c = n[a]; if (typeof c == "number" && isNaN(c)) { console.error("THREE.KeyframeTrack: Time is not a valid number.", this, a, c), e = !1; break } if (o !== null && o > c) { console.error("THREE.KeyframeTrack: Out of order keys.", this, a, c, o), e = !1; break } o = c } if (i !== void 0 && E_(i)) for (let a = 0, c = i.length; a !== c; ++a) { const l = i[a]; if (isNaN(l)) { console.error("THREE.KeyframeTrack: Value is not a valid number.", this, a, l), e = !1; break } } return e } optimize() { const e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === br, r = e.length - 1; let o = 1; for (let a = 1; a < r; ++a) { let c = !1; const l = e[a], h = e[a + 1]; if (l !== h && (a !== 1 || l !== e[0])) if (i) c = !0; else { const u = a * n, d = u - n, m = u + n; for (let g = 0; g !== n; ++g) { const _ = t[u + g]; if (_ !== t[d + g] || _ !== t[m + g]) { c = !0; break } } } if (c) { if (a !== o) { e[o] = e[a]; const u = a * n, d = o * n; for (let m = 0; m !== n; ++m)t[d + m] = t[u + m] } ++o } } if (r > 0) { e[o] = e[r]; for (let a = r * n, c = o * n, l = 0; l !== n; ++l)t[c + l] = t[a + l]; ++o } return o !== e.length ? (this.times = e.slice(0, o), this.values = t.slice(0, o * n)) : (this.times = e, this.values = t), this } clone() { const e = this.times.slice(), t = this.values.slice(), n = this.constructor, i = new n(this.name, e, t); return i.createInterpolant = this.createInterpolant, i } } an.prototype.TimeBufferType = Float32Array; an.prototype.ValueBufferType = Float32Array; an.prototype.DefaultInterpolation = Bi; class Wi extends an { } Wi.prototype.ValueTypeName = "bool"; Wi.prototype.ValueBufferType = Array; Wi.prototype.DefaultInterpolation = cs; Wi.prototype.InterpolantFactoryMethodLinear = void 0; Wi.prototype.InterpolantFactoryMethodSmooth = void 0; class Zl extends an { } Zl.prototype.ValueTypeName = "color"; class Gi extends an { } Gi.prototype.ValueTypeName = "number"; class R_ extends gs { constructor(e, t, n, i) { super(e, t, n, i) } interpolate_(e, t, n, i) { const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, c = (n - t) / (i - t); let l = e * a; for (let h = l + a; l !== h; l += 4)sn.slerpFlat(r, 0, o, l - a, o, l, c); return r } } class ii extends an { InterpolantFactoryMethodLinear(e) { return new R_(this.times, this.values, this.getValueSize(), e) } } ii.prototype.ValueTypeName = "quaternion"; ii.prototype.DefaultInterpolation = Bi; ii.prototype.InterpolantFactoryMethodSmooth = void 0; class Xi extends an { } Xi.prototype.ValueTypeName = "string"; Xi.prototype.ValueBufferType = Array; Xi.prototype.DefaultInterpolation = cs; Xi.prototype.InterpolantFactoryMethodLinear = void 0; Xi.prototype.InterpolantFactoryMethodSmooth = void 0; class ki extends an { } ki.prototype.ValueTypeName = "vector"; class C_ { constructor(e, t = -1, n, i = $h) { this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = Wt(), this.duration < 0 && this.resetDuration() } static parse(e) { const t = [], n = e.tracks, i = 1 / (e.fps || 1); for (let o = 0, a = n.length; o !== a; ++o)t.push(P_(n[o]).scale(i)); const r = new this(e.name, e.duration, t, e.blendMode); return r.uuid = e.uuid, r } static toJSON(e) { const t = [], n = e.tracks, i = { name: e.name, duration: e.duration, tracks: t, uuid: e.uuid, blendMode: e.blendMode }; for (let r = 0, o = n.length; r !== o; ++r)t.push(an.toJSON(n[r])); return i } static CreateFromMorphTargetSequence(e, t, n, i) { const r = t.length, o = []; for (let a = 0; a < r; a++) { let c = [], l = []; c.push((a + r - 1) % r, a, (a + 1) % r), l.push(0, 1, 0); const h = T_(c); c = Yc(c, 1, h), l = Yc(l, 1, h), !i && c[0] === 0 && (c.push(r), l.push(l[0])), o.push(new Gi(".morphTargetInfluences[" + t[a].name + "]", c, l).scale(1 / n)) } return new this(e, -1, o) } static findByName(e, t) { let n = e; if (!Array.isArray(e)) { const i = e; n = i.geometry && i.geometry.animations || i.animations } for (let i = 0; i < n.length; i++)if (n[i].name === t) return n[i]; return null } static CreateClipsFromMorphTargetSequences(e, t, n) { const i = {}, r = /^([\w-]*?)([\d]+)$/; for (let a = 0, c = e.length; a < c; a++) { const l = e[a], h = l.name.match(r); if (h && h.length > 1) { const u = h[1]; let d = i[u]; d || (i[u] = d = []), d.push(l) } } const o = []; for (const a in i) o.push(this.CreateFromMorphTargetSequence(a, i[a], t, n)); return o } static parseAnimation(e, t) { if (!e) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null; const n = function (u, d, m, g, _) { if (m.length !== 0) { const f = [], p = []; Kl(m, f, p, g), f.length !== 0 && _.push(new u(d, f, p)) } }, i = [], r = e.name || "default", o = e.fps || 30, a = e.blendMode; let c = e.length || -1; const l = e.hierarchy || []; for (let u = 0; u < l.length; u++) { const d = l[u].keys; if (!(!d || d.length === 0)) if (d[0].morphTargets) { const m = {}; let g; for (g = 0; g < d.length; g++)if (d[g].morphTargets) for (let _ = 0; _ < d[g].morphTargets.length; _++)m[d[g].morphTargets[_]] = -1; for (const _ in m) { const f = [], p = []; for (let T = 0; T !== d[g].morphTargets.length; ++T) { const x = d[g]; f.push(x.time), p.push(x.morphTarget === _ ? 1 : 0) } i.push(new Gi(".morphTargetInfluence[" + _ + "]", f, p)) } c = m.length * o } else { const m = ".bones[" + t[u].name + "]"; n(ki, m + ".position", d, "pos", i), n(ii, m + ".quaternion", d, "rot", i), n(ki, m + ".scale", d, "scl", i) } } return i.length === 0 ? null : new this(r, c, i, a) } resetDuration() { const e = this.tracks; let t = 0; for (let n = 0, i = e.length; n !== i; ++n) { const r = this.tracks[n]; t = Math.max(t, r.times[r.times.length - 1]) } return this.duration = t, this } trim() { for (let e = 0; e < this.tracks.length; e++)this.tracks[e].trim(0, this.duration); return this } validate() { let e = !0; for (let t = 0; t < this.tracks.length; t++)e = e && this.tracks[t].validate(); return e } optimize() { for (let e = 0; e < this.tracks.length; e++)this.tracks[e].optimize(); return this } clone() { const e = []; for (let t = 0; t < this.tracks.length; t++)e.push(this.tracks[t].clone()); return new this.constructor(this.name, this.duration, e, this.blendMode) } toJSON() { return this.constructor.toJSON(this) } } function L_(s) { switch (s.toLowerCase()) { case "scalar": case "double": case "float": case "number": case "integer": return Gi; case "vector": case "vector2": case "vector3": case "vector4": return ki; case "color": return Zl; case "quaternion": return ii; case "bool": case "boolean": return Wi; case "string": return Xi }throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + s) } function P_(s) { if (s.type === void 0) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse"); const e = L_(s.type); if (s.times === void 0) { const t = [], n = []; Kl(s.keys, t, n, "value"), s.times = t, s.values = n } return e.parse !== void 0 ? e.parse(s) : new e(s.name, s.times, s.values, s.interpolation) } const In = { enabled: !1, files: {}, add: function (s, e) { this.enabled !== !1 && (this.files[s] = e) }, get: function (s) { if (this.enabled !== !1) return this.files[s] }, remove: function (s) { delete this.files[s] }, clear: function () { this.files = {} } }; class Jl { constructor(e, t, n) { const i = this; let r = !1, o = 0, a = 0, c; const l = []; this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function (h) { a++, r === !1 && i.onStart !== void 0 && i.onStart(h, o, a), r = !0 }, this.itemEnd = function (h) { o++, i.onProgress !== void 0 && i.onProgress(h, o, a), o === a && (r = !1, i.onLoad !== void 0 && i.onLoad()) }, this.itemError = function (h) { i.onError !== void 0 && i.onError(h) }, this.resolveURL = function (h) { return c ? c(h) : h }, this.setURLModifier = function (h) { return c = h, this }, this.addHandler = function (h, u) { return l.push(h, u), this }, this.removeHandler = function (h) { const u = l.indexOf(h); return u !== -1 && l.splice(u, 2), this }, this.getHandler = function (h) { for (let u = 0, d = l.length; u < d; u += 2) { const m = l[u], g = l[u + 1]; if (m.global && (m.lastIndex = 0), m.test(h)) return g } return null } } } const I_ = new Jl; class ri { constructor(e) { this.manager = e !== void 0 ? e : I_, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {} } load() { } loadAsync(e, t) { const n = this; return new Promise(function (i, r) { n.load(e, i, t, r) }) } parse() { } setCrossOrigin(e) { return this.crossOrigin = e, this } setWithCredentials(e) { return this.withCredentials = e, this } setPath(e) { return this.path = e, this } setResourcePath(e) { return this.resourcePath = e, this } setRequestHeader(e) { return this.requestHeader = e, this } } ri.DEFAULT_MATERIAL_NAME = "__DEFAULT"; const pn = {}; class D_ extends Error { constructor(e, t) { super(e), this.response = t } } class Vo extends ri { constructor(e) { super(e) } load(e, t, n, i) { e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e); const r = In.get(e); if (r !== void 0) return this.manager.itemStart(e), setTimeout(() => { t && t(r), this.manager.itemEnd(e) }, 0), r; if (pn[e] !== void 0) { pn[e].push({ onLoad: t, onProgress: n, onError: i }); return } pn[e] = [], pn[e].push({ onLoad: t, onProgress: n, onError: i }); const o = new Request(e, { headers: new Headers(this.requestHeader), credentials: this.withCredentials ? "include" : "same-origin" }), a = this.mimeType, c = this.responseType; fetch(o).then(l => { if (l.status === 200 || l.status === 0) { if (l.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || l.body === void 0 || l.body.getReader === void 0) return l; const h = pn[e], u = l.body.getReader(), d = l.headers.get("Content-Length") || l.headers.get("X-File-Size"), m = d ? parseInt(d) : 0, g = m !== 0; let _ = 0; const f = new ReadableStream({ start(p) { T(); function T() { u.read().then(({ done: x, value: M }) => { if (x) p.close(); else { _ += M.byteLength; const I = new ProgressEvent("progress", { lengthComputable: g, loaded: _, total: m }); for (let L = 0, A = h.length; L < A; L++) { const z = h[L]; z.onProgress && z.onProgress(I) } p.enqueue(M), T() } }) } } }); return new Response(f) } else throw new D_(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`, l) }).then(l => { switch (c) { case "arraybuffer": return l.arrayBuffer(); case "blob": return l.blob(); case "document": return l.text().then(h => new DOMParser().parseFromString(h, a)); case "json": return l.json(); default: if (a === void 0) return l.text(); { const u = /charset="?([^;"\s]*)"?/i.exec(a), d = u && u[1] ? u[1].toLowerCase() : void 0, m = new TextDecoder(d); return l.arrayBuffer().then(g => m.decode(g)) } } }).then(l => { In.add(e, l); const h = pn[e]; delete pn[e]; for (let u = 0, d = h.length; u < d; u++) { const m = h[u]; m.onLoad && m.onLoad(l) } }).catch(l => { const h = pn[e]; if (h === void 0) throw this.manager.itemError(e), l; delete pn[e]; for (let u = 0, d = h.length; u < d; u++) { const m = h[u]; m.onError && m.onError(l) } this.manager.itemError(e) }).finally(() => { this.manager.itemEnd(e) }), this.manager.itemStart(e) } setResponseType(e) { return this.responseType = e, this } setMimeType(e) { return this.mimeType = e, this } } class N_ extends ri { constructor(e) { super(e) } load(e, t, n, i) { this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e); const r = this, o = In.get(e); if (o !== void 0) return r.manager.itemStart(e), setTimeout(function () { t && t(o), r.manager.itemEnd(e) }, 0), o; const a = ls("img"); function c() { h(), In.add(e, this), t && t(this), r.manager.itemEnd(e) } function l(u) { h(), i && i(u), r.manager.itemError(e), r.manager.itemEnd(e) } function h() { a.removeEventListener("load", c, !1), a.removeEventListener("error", l, !1) } return a.addEventListener("load", c, !1), a.addEventListener("error", l, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(e), a.src = e, a } } class U_ extends ri { constructor(e) { super(e) } load(e, t, n, i) { const r = new xt, o = new N_(this.manager); return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(e, function (a) { r.image = a, r.needsUpdate = !0, t !== void 0 && t(r) }, n, i), r } } class Wo extends ot { constructor(e, t = 1) { super(), this.isLight = !0, this.type = "Light", this.color = new De(e), this.intensity = t } dispose() { } copy(e, t) { return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this } toJSON(e) { const t = super.toJSON(e); return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t } } const to = new We, jc = new P, Kc = new P; class Xo { constructor(e) { this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new ae(512, 512), this.map = null, this.mapPass = null, this.matrix = new We, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Do, this._frameExtents = new ae(1, 1), this._viewportCount = 1, this._viewports = [new nt(0, 0, 1, 1)] } getViewportCount() { return this._viewportCount } getFrustum() { return this._frustum } updateMatrices(e) { const t = this.camera, n = this.matrix; jc.setFromMatrixPosition(e.matrixWorld), t.position.copy(jc), Kc.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Kc), t.updateMatrixWorld(), to.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(to), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(to) } getViewport(e) { return this._viewports[e] } getFrameExtents() { return this._frameExtents } dispose() { this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose() } copy(e) { return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this } clone() { return new this.constructor().copy(this) } toJSON() { const e = {}; return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e } } class O_ extends Xo { constructor() { super(new Lt(50, 1, .5, 500)), this.isSpotLightShadow = !0, this.focus = 1 } updateMatrices(e) { const t = this.camera, n = zi * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, r = e.distance || t.far; (n !== t.fov || i !== t.aspect || r !== t.far) && (t.fov = n, t.aspect = i, t.far = r, t.updateProjectionMatrix()), super.updateMatrices(e) } copy(e) { return super.copy(e), this.focus = e.focus, this } } class F_ extends Wo { constructor(e, t, n = 0, i = Math.PI / 3, r = 0, o = 2) { super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(ot.DEFAULT_UP), this.updateMatrix(), this.target = new ot, this.distance = n, this.angle = i, this.penumbra = r, this.decay = o, this.map = null, this.shadow = new O_ } get power() { return this.intensity * Math.PI } set power(e) { this.intensity = e / Math.PI } dispose() { this.shadow.dispose() } copy(e, t) { return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this } } const Zc = new We, Qi = new P, no = new P; class B_ extends Xo { constructor() { super(new Lt(90, 1, .5, 500)), this.isPointLightShadow = !0, this._frameExtents = new ae(4, 2), this._viewportCount = 6, this._viewports = [new nt(2, 1, 1, 1), new nt(0, 1, 1, 1), new nt(3, 1, 1, 1), new nt(1, 1, 1, 1), new nt(3, 0, 1, 1), new nt(1, 0, 1, 1)], this._cubeDirections = [new P(1, 0, 0), new P(-1, 0, 0), new P(0, 0, 1), new P(0, 0, -1), new P(0, 1, 0), new P(0, -1, 0)], this._cubeUps = [new P(0, 1, 0), new P(0, 1, 0), new P(0, 1, 0), new P(0, 1, 0), new P(0, 0, 1), new P(0, 0, -1)] } updateMatrices(e, t = 0) { const n = this.camera, i = this.matrix, r = e.distance || n.far; r !== n.far && (n.far = r, n.updateProjectionMatrix()), Qi.setFromMatrixPosition(e.matrixWorld), n.position.copy(Qi), no.copy(n.position), no.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(no), n.updateMatrixWorld(), i.makeTranslation(-Qi.x, -Qi.y, -Qi.z), Zc.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Zc) } } class z_ extends Wo { constructor(e, t, n = 0, i = 2) { super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new B_ } get power() { return this.intensity * 4 * Math.PI } set power(e) { this.intensity = e / (4 * Math.PI) } dispose() { this.shadow.dispose() } copy(e, t) { return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this } } class H_ extends Xo { constructor() { super(new No(-5, 5, 5, -5, .5, 500)), this.isDirectionalLightShadow = !0 } } class fr extends Wo { constructor(e, t) { super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(ot.DEFAULT_UP), this.updateMatrix(), this.target = new ot, this.shadow = new H_ } dispose() { this.shadow.dispose() } copy(e) { return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this } } class rs { static decodeText(e) { if (typeof TextDecoder < "u") return new TextDecoder().decode(e); let t = ""; for (let n = 0, i = e.length; n < i; n++)t += String.fromCharCode(e[n]); try { return decodeURIComponent(escape(t)) } catch { return t } } static extractUrlBase(e) { const t = e.lastIndexOf("/"); return t === -1 ? "./" : e.slice(0, t + 1) } static resolveURL(e, t) { return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e) } } class G_ extends ri { constructor(e) { super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" } } setOptions(e) { return this.options = e, this } load(e, t, n, i) { e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e); const r = this, o = In.get(e); if (o !== void 0) { if (r.manager.itemStart(e), o.then) { o.then(l => { t && t(l), r.manager.itemEnd(e) }).catch(l => { i && i(l) }); return } return setTimeout(function () { t && t(o), r.manager.itemEnd(e) }, 0), o } const a = {}; a.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", a.headers = this.requestHeader; const c = fetch(e, a).then(function (l) { return l.blob() }).then(function (l) { return createImageBitmap(l, Object.assign(r.options, { colorSpaceConversion: "none" })) }).then(function (l) { return In.add(e, l), t && t(l), r.manager.itemEnd(e), l }).catch(function (l) { i && i(l), In.remove(e), r.manager.itemError(e), r.manager.itemEnd(e) }); In.add(e, c), r.manager.itemStart(e) } } const qo = "\\[\\]\\.:\\/", k_ = new RegExp("[" + qo + "]", "g"), Yo = "[^" + qo + "]", V_ = "[^" + qo.replace("\\.", "") + "]", W_ = /((?:WC+[\/:])*)/.source.replace("WC", Yo), X_ = /(WCOD+)?/.source.replace("WCOD", V_), q_ = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Yo), Y_ = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Yo), j_ = new RegExp("^" + W_ + X_ + q_ + Y_ + "$"), K_ = ["material", "materials", "bones", "map"]; class Z_ { constructor(e, t, n) { const i = n || et.parseTrackName(t); this._targetGroup = e, this._bindings = e.subscribe_(t, i) } getValue(e, t) { this.bind(); const n = this._targetGroup.nCachedObjects_, i = this._bindings[n]; i !== void 0 && i.getValue(e, t) } setValue(e, t) { const n = this._bindings; for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i)n[i].setValue(e, t) } bind() { const e = this._bindings; for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)e[t].bind() } unbind() { const e = this._bindings; for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)e[t].unbind() } } class et { constructor(e, t, n) { this.path = t, this.parsedPath = n || et.parseTrackName(t), this.node = et.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound } static create(e, t, n) { return e && e.isAnimationObjectGroup ? new et.Composite(e, t, n) : new et(e, t, n) } static sanitizeNodeName(e) { return e.replace(/\s/g, "_").replace(k_, "") } static parseTrackName(e) { const t = j_.exec(e); if (t === null) throw new Error("PropertyBinding: Cannot parse trackName: " + e); const n = { nodeName: t[2], objectName: t[3], objectIndex: t[4], propertyName: t[5], propertyIndex: t[6] }, i = n.nodeName && n.nodeName.lastIndexOf("."); if (i !== void 0 && i !== -1) { const r = n.nodeName.substring(i + 1); K_.indexOf(r) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = r) } if (n.propertyName === null || n.propertyName.length === 0) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e); return n } static findNode(e, t) { if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid) return e; if (e.skeleton) { const n = e.skeleton.getBoneByName(t); if (n !== void 0) return n } if (e.children) { const n = function (r) { for (let o = 0; o < r.length; o++) { const a = r[o]; if (a.name === t || a.uuid === t) return a; const c = n(a.children); if (c) return c } return null }, i = n(e.children); if (i) return i } return null } _getValue_unavailable() { } _setValue_unavailable() { } _getValue_direct(e, t) { e[t] = this.targetObject[this.propertyName] } _getValue_array(e, t) { const n = this.resolvedProperty; for (let i = 0, r = n.length; i !== r; ++i)e[t++] = n[i] } _getValue_arrayElement(e, t) { e[t] = this.resolvedProperty[this.propertyIndex] } _getValue_toArray(e, t) { this.resolvedProperty.toArray(e, t) } _setValue_direct(e, t) { this.targetObject[this.propertyName] = e[t] } _setValue_direct_setNeedsUpdate(e, t) { this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0 } _setValue_direct_setMatrixWorldNeedsUpdate(e, t) { this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0 } _setValue_array(e, t) { const n = this.resolvedProperty; for (let i = 0, r = n.length; i !== r; ++i)n[i] = e[t++] } _setValue_array_setNeedsUpdate(e, t) { const n = this.resolvedProperty; for (let i = 0, r = n.length; i !== r; ++i)n[i] = e[t++]; this.targetObject.needsUpdate = !0 } _setValue_array_setMatrixWorldNeedsUpdate(e, t) { const n = this.resolvedProperty; for (let i = 0, r = n.length; i !== r; ++i)n[i] = e[t++]; this.targetObject.matrixWorldNeedsUpdate = !0 } _setValue_arrayElement(e, t) { this.resolvedProperty[this.propertyIndex] = e[t] } _setValue_arrayElement_setNeedsUpdate(e, t) { this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0 } _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) { this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0 } _setValue_fromArray(e, t) { this.resolvedProperty.fromArray(e, t) } _setValue_fromArray_setNeedsUpdate(e, t) { this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0 } _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) { this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0 } _getValue_unbound(e, t) { this.bind(), this.getValue(e, t) } _setValue_unbound(e, t) { this.bind(), this.setValue(e, t) } bind() { let e = this.node; const t = this.parsedPath, n = t.objectName, i = t.propertyName; let r = t.propertyIndex; if (e || (e = et.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) { console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + "."); return } if (n) { let l = t.objectIndex; switch (n) { case "materials": if (!e.material) { console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this); return } if (!e.material.materials) { console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this); return } e = e.material.materials; break; case "bones": if (!e.skeleton) { console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this); return } e = e.skeleton.bones; for (let h = 0; h < e.length; h++)if (e[h].name === l) { l = h; break } break; case "map": if ("map" in e) { e = e.map; break } if (!e.material) { console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this); return } if (!e.material.map) { console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this); return } e = e.material.map; break; default: if (e[n] === void 0) { console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this); return } e = e[n] }if (l !== void 0) { if (e[l] === void 0) { console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e); return } e = e[l] } } const o = e[i]; if (o === void 0) { const l = t.nodeName; console.error("THREE.PropertyBinding: Trying to update property for track: " + l + "." + i + " but it wasn't found.", e); return } let a = this.Versioning.None; this.targetObject = e, e.needsUpdate !== void 0 ? a = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (a = this.Versioning.MatrixWorldNeedsUpdate); let c = this.BindingType.Direct; if (r !== void 0) { if (i === "morphTargetInfluences") { if (!e.geometry) { console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this); return } if (!e.geometry.morphAttributes) { console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this); return } e.morphTargetDictionary[r] !== void 0 && (r = e.morphTargetDictionary[r]) } c = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = r } else o.fromArray !== void 0 && o.toArray !== void 0 ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (c = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = i; this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][a] } unbind() { this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound } } et.Composite = Z_; et.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 }; et.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 }; et.prototype.GetterByBindingType = [et.prototype._getValue_direct, et.prototype._getValue_array, et.prototype._getValue_arrayElement, et.prototype._getValue_toArray]; et.prototype.SetterByBindingTypeAndVersioning = [[et.prototype._setValue_direct, et.prototype._setValue_direct_setNeedsUpdate, et.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [et.prototype._setValue_array, et.prototype._setValue_array_setNeedsUpdate, et.prototype._setValue_array_setMatrixWorldNeedsUpdate], [et.prototype._setValue_arrayElement, et.prototype._setValue_arrayElement_setNeedsUpdate, et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [et.prototype._setValue_fromArray, et.prototype._setValue_fromArray_setNeedsUpdate, et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]]; class Jc { constructor(e = 1, t = 0, n = 0) { return this.radius = e, this.phi = t, this.theta = n, this } set(e, t, n) { return this.radius = e, this.phi = t, this.theta = n, this } copy(e) { return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this } makeSafe() { return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this } setFromVector3(e) { return this.setFromCartesianCoords(e.x, e.y, e.z) } setFromCartesianCoords(e, t, n) { return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(dt(t / this.radius, -1, 1))), this } clone() { return new this.constructor().copy(this) } } class J_ { constructor() { this.type = "ShapePath", this.color = new De, this.subPaths = [], this.currentPath = null } moveTo(e, t) { return this.currentPath = new So, this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, t), this } lineTo(e, t) { return this.currentPath.lineTo(e, t), this } quadraticCurveTo(e, t, n, i) { return this.currentPath.quadraticCurveTo(e, t, n, i), this } bezierCurveTo(e, t, n, i, r, o) { return this.currentPath.bezierCurveTo(e, t, n, i, r, o), this } splineThru(e) { return this.currentPath.splineThru(e), this } toShapes(e) { function t(p) { const T = []; for (let x = 0, M = p.length; x < M; x++) { const I = p[x], L = new $s; L.curves = I.curves, T.push(L) } return T } function n(p, T) { const x = T.length; let M = !1; for (let I = x - 1, L = 0; L < x; I = L++) { let A = T[I], z = T[L], Q = z.x - A.x, v = z.y - A.y; if (Math.abs(v) > Number.EPSILON) { if (v < 0 && (A = T[L], Q = -Q, z = T[I], v = -v), p.y < A.y || p.y > z.y) continue; if (p.y === A.y) { if (p.x === A.x) return !0 } else { const w = v * (p.x - A.x) - Q * (p.y - A.y); if (w === 0) return !0; if (w < 0) continue; M = !M } } else { if (p.y !== A.y) continue; if (z.x <= p.x && p.x <= A.x || A.x <= p.x && p.x <= z.x) return !0 } } return M } const i = Ii.isClockWise, r = this.subPaths; if (r.length === 0) return []; let o, a, c; const l = []; if (r.length === 1) return a = r[0], c = new $s, c.curves = a.curves, l.push(c), l; let h = !i(r[0].getPoints()); h = e ? !h : h; const u = [], d = []; let m = [], g = 0, _; d[g] = void 0, m[g] = []; for (let p = 0, T = r.length; p < T; p++)a = r[p], _ = a.getPoints(), o = i(_), o = e ? !o : o, o ? (!h && d[g] && g++, d[g] = { s: new $s, p: _ }, d[g].s.curves = a.curves, h && g++, m[g] = []) : m[g].push({ h: a, p: _[0] }); if (!d[0]) return t(r); if (d.length > 1) { let p = !1, T = 0; for (let x = 0, M = d.length; x < M; x++)u[x] = []; for (let x = 0, M = d.length; x < M; x++) { const I = m[x]; for (let L = 0; L < I.length; L++) { const A = I[L]; let z = !0; for (let Q = 0; Q < d.length; Q++)n(A.p, d[Q].p) && (x !== Q && T++, z ? (z = !1, u[Q].push(A)) : p = !0); z && u[x].push(A) } } T > 0 && p === !1 && (m = u) } let f; for (let p = 0, T = d.length; p < T; p++) { c = d[p].s, l.push(c), f = m[p]; for (let x = 0, M = f.length; x < M; x++)c.holes.push(f[x].h) } return l } } typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: wo } })); typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = wo); const $c = { type: "change" }, io = { type: "start" }, Qc = { type: "end" }, Ks = new ps, el = new Cn, $_ = Math.cos(70 * xl.DEG2RAD); class Q_ extends si { constructor(e, t) { super(), this.object = e, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new P, this.cursor = new P, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: ai.ROTATE, MIDDLE: ai.DOLLY, RIGHT: ai.PAN }, this.touches = { ONE: ci.ROTATE, TWO: ci.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function () { return a.phi }, this.getAzimuthalAngle = function () { return a.theta }, this.getDistance = function () { return this.object.position.distanceTo(this.target) }, this.listenToKeyEvents = function (R) { R.addEventListener("keydown", Ce), this._domElementKeyEvents = R }, this.stopListenToKeyEvents = function () { this._domElementKeyEvents.removeEventListener("keydown", Ce), this._domElementKeyEvents = null }, this.saveState = function () { n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom }, this.reset = function () { n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent($c), n.update(), r = i.NONE }, this.update = function () { const R = new P, ce = new sn().setFromUnitVectors(e.up, new P(0, 1, 0)), fe = ce.clone().invert(), Re = new P, b = new sn, re = new P, se = 2 * Math.PI; return function (Le = null) { const Ze = n.object.position; R.copy(Ze).sub(n.target), R.applyQuaternion(ce), a.setFromVector3(R), n.autoRotate && r === i.NONE && q(v(Le)), n.enableDamping ? (a.theta += c.theta * n.dampingFactor, a.phi += c.phi * n.dampingFactor) : (a.theta += c.theta, a.phi += c.phi); let Ye = n.minAzimuthAngle, tt = n.maxAzimuthAngle; isFinite(Ye) && isFinite(tt) && (Ye < -Math.PI ? Ye += se : Ye > Math.PI && (Ye -= se), tt < -Math.PI ? tt += se : tt > Math.PI && (tt -= se), Ye <= tt ? a.theta = Math.max(Ye, Math.min(tt, a.theta)) : a.theta = a.theta > (Ye + tt) / 2 ? Math.max(Ye, a.theta) : Math.min(tt, a.theta)), a.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, a.phi)), a.makeSafe(), n.enableDamping === !0 ? n.target.addScaledVector(h, n.dampingFactor) : n.target.add(h), n.target.sub(n.cursor), n.target.clampLength(n.minTargetRadius, n.maxTargetRadius), n.target.add(n.cursor), n.zoomToCursor && L || n.object.isOrthographicCamera ? a.radius = K(a.radius) : a.radius = K(a.radius * l), R.setFromSpherical(a), R.applyQuaternion(fe), Ze.copy(n.target).add(R), n.object.lookAt(n.target), n.enableDamping === !0 ? (c.theta *= 1 - n.dampingFactor, c.phi *= 1 - n.dampingFactor, h.multiplyScalar(1 - n.dampingFactor)) : (c.set(0, 0, 0), h.set(0, 0, 0)); let yt = !1; if (n.zoomToCursor && L) { let Je = null; if (n.object.isPerspectiveCamera) { const lt = R.length(); Je = K(lt * l); const wt = lt - Je; n.object.position.addScaledVector(M, wt), n.object.updateMatrixWorld() } else if (n.object.isOrthographicCamera) { const lt = new P(I.x, I.y, 0); lt.unproject(n.object), n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / l)), n.object.updateProjectionMatrix(), yt = !0; const wt = new P(I.x, I.y, 0); wt.unproject(n.object), n.object.position.sub(wt).add(lt), n.object.updateMatrixWorld(), Je = R.length() } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), n.zoomToCursor = !1; Je !== null && (this.screenSpacePanning ? n.target.set(0, 0, -1).transformDirection(n.object.matrix).multiplyScalar(Je).add(n.object.position) : (Ks.origin.copy(n.object.position), Ks.direction.set(0, 0, -1).transformDirection(n.object.matrix), Math.abs(n.object.up.dot(Ks.direction)) < $_ ? e.lookAt(n.target) : (el.setFromNormalAndCoplanarPoint(n.object.up, n.target), Ks.intersectPlane(el, n.target)))) } else n.object.isOrthographicCamera && (yt = l !== 1, yt && (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / l)), n.object.updateProjectionMatrix())); return l = 1, L = !1, yt || Re.distanceToSquared(n.object.position) > o || 8 * (1 - b.dot(n.object.quaternion)) > o || re.distanceToSquared(n.target) > 0 ? (n.dispatchEvent($c), Re.copy(n.object.position), b.copy(n.object.quaternion), re.copy(n.target), !0) : !1 } }(), this.dispose = function () { n.domElement.removeEventListener("contextmenu", Ke), n.domElement.removeEventListener("pointerdown", S), n.domElement.removeEventListener("pointercancel", N), n.domElement.removeEventListener("wheel", Z), n.domElement.removeEventListener("pointermove", y), n.domElement.removeEventListener("pointerup", N), n._domElementKeyEvents !== null && (n._domElementKeyEvents.removeEventListener("keydown", Ce), n._domElementKeyEvents = null) }; const n = this, i = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 }; let r = i.NONE; const o = 1e-6, a = new Jc, c = new Jc; let l = 1; const h = new P, u = new ae, d = new ae, m = new ae, g = new ae, _ = new ae, f = new ae, p = new ae, T = new ae, x = new ae, M = new P, I = new ae; let L = !1; const A = [], z = {}; let Q = !1; function v(R) { return R !== null ? 2 * Math.PI / 60 * n.autoRotateSpeed * R : 2 * Math.PI / 60 / 60 * n.autoRotateSpeed } function w(R) { const ce = Math.abs(R * .01); return Math.pow(.95, n.zoomSpeed * ce) } function q(R) { c.theta -= R } function ee(R) { c.phi -= R } const D = function () { const R = new P; return function (fe, Re) { R.setFromMatrixColumn(Re, 0), R.multiplyScalar(-fe), h.add(R) } }(), G = function () { const R = new P; return function (fe, Re) { n.screenSpacePanning === !0 ? R.setFromMatrixColumn(Re, 1) : (R.setFromMatrixColumn(Re, 0), R.crossVectors(n.object.up, R)), R.multiplyScalar(fe), h.add(R) } }(), O = function () { const R = new P; return function (fe, Re) { const b = n.domElement; if (n.object.isPerspectiveCamera) { const re = n.object.position; R.copy(re).sub(n.target); let se = R.length(); se *= Math.tan(n.object.fov / 2 * Math.PI / 180), D(2 * fe * se / b.clientHeight, n.object.matrix), G(2 * Re * se / b.clientHeight, n.object.matrix) } else n.object.isOrthographicCamera ? (D(fe * (n.object.right - n.object.left) / n.object.zoom / b.clientWidth, n.object.matrix), G(Re * (n.object.top - n.object.bottom) / n.object.zoom / b.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1) } }(); function j(R) { n.object.isPerspectiveCamera || n.object.isOrthographicCamera ? l /= R : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1) } function X(R) { n.object.isPerspectiveCamera || n.object.isOrthographicCamera ? l *= R : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1) } function Y(R, ce) { if (!n.zoomToCursor) return; L = !0; const fe = n.domElement.getBoundingClientRect(), Re = R - fe.left, b = ce - fe.top, re = fe.width, se = fe.height; I.x = Re / re * 2 - 1, I.y = -(b / se) * 2 + 1, M.set(I.x, I.y, 1).unproject(n.object).sub(n.object.position).normalize() } function K(R) { return Math.max(n.minDistance, Math.min(n.maxDistance, R)) } function ne(R) { u.set(R.clientX, R.clientY) } function he(R) { Y(R.clientX, R.clientX), p.set(R.clientX, R.clientY) } function Pe(R) { g.set(R.clientX, R.clientY) } function k(R) { d.set(R.clientX, R.clientY), m.subVectors(d, u).multiplyScalar(n.rotateSpeed); const ce = n.domElement; q(2 * Math.PI * m.x / ce.clientHeight), ee(2 * Math.PI * m.y / ce.clientHeight), u.copy(d), n.update() } function ie(R) { T.set(R.clientX, R.clientY), x.subVectors(T, p), x.y > 0 ? j(w(x.y)) : x.y < 0 && X(w(x.y)), p.copy(T), n.update() } function ge(R) { _.set(R.clientX, R.clientY), f.subVectors(_, g).multiplyScalar(n.panSpeed), O(f.x, f.y), g.copy(_), n.update() } function Me(R) { Y(R.clientX, R.clientY), R.deltaY < 0 ? X(w(R.deltaY)) : R.deltaY > 0 && j(w(R.deltaY)), n.update() } function Te(R) { let ce = !1; switch (R.code) { case n.keys.UP: R.ctrlKey || R.metaKey || R.shiftKey ? ee(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : O(0, n.keyPanSpeed), ce = !0; break; case n.keys.BOTTOM: R.ctrlKey || R.metaKey || R.shiftKey ? ee(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : O(0, -n.keyPanSpeed), ce = !0; break; case n.keys.LEFT: R.ctrlKey || R.metaKey || R.shiftKey ? q(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : O(n.keyPanSpeed, 0), ce = !0; break; case n.keys.RIGHT: R.ctrlKey || R.metaKey || R.shiftKey ? q(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : O(-n.keyPanSpeed, 0), ce = !0; break }ce && (R.preventDefault(), n.update()) } function ve(R) { if (A.length === 1) u.set(R.pageX, R.pageY); else { const ce = me(R), fe = .5 * (R.pageX + ce.x), Re = .5 * (R.pageY + ce.y); u.set(fe, Re) } } function Oe(R) { if (A.length === 1) g.set(R.pageX, R.pageY); else { const ce = me(R), fe = .5 * (R.pageX + ce.x), Re = .5 * (R.pageY + ce.y); g.set(fe, Re) } } function Ae(R) { const ce = me(R), fe = R.pageX - ce.x, Re = R.pageY - ce.y, b = Math.sqrt(fe * fe + Re * Re); p.set(0, b) } function C(R) { n.enableZoom && Ae(R), n.enablePan && Oe(R) } function le(R) { n.enableZoom && Ae(R), n.enableRotate && ve(R) } function V(R) { if (A.length == 1) d.set(R.pageX, R.pageY); else { const fe = me(R), Re = .5 * (R.pageX + fe.x), b = .5 * (R.pageY + fe.y); d.set(Re, b) } m.subVectors(d, u).multiplyScalar(n.rotateSpeed); const ce = n.domElement; q(2 * Math.PI * m.x / ce.clientHeight), ee(2 * Math.PI * m.y / ce.clientHeight), u.copy(d) } function oe(R) { if (A.length === 1) _.set(R.pageX, R.pageY); else { const ce = me(R), fe = .5 * (R.pageX + ce.x), Re = .5 * (R.pageY + ce.y); _.set(fe, Re) } f.subVectors(_, g).multiplyScalar(n.panSpeed), O(f.x, f.y), g.copy(_) } function W(R) { const ce = me(R), fe = R.pageX - ce.x, Re = R.pageY - ce.y, b = Math.sqrt(fe * fe + Re * Re); T.set(0, b), x.set(0, Math.pow(T.y / p.y, n.zoomSpeed)), j(x.y), p.copy(T); const re = (R.pageX + ce.x) * .5, se = (R.pageY + ce.y) * .5; Y(re, se) } function Ee(R) { n.enableZoom && W(R), n.enablePan && oe(R) } function pe(R) { n.enableZoom && W(R), n.enableRotate && V(R) } function S(R) { n.enabled !== !1 && (A.length === 0 && (n.domElement.setPointerCapture(R.pointerId), n.domElement.addEventListener("pointermove", y), n.domElement.addEventListener("pointerup", N)), ke(R), R.pointerType === "touch" ? Fe(R) : te(R)) } function y(R) { n.enabled !== !1 && (R.pointerType === "touch" ? $(R) : J(R)) } function N(R) { switch (Ne(R), A.length) { case 0: n.domElement.releasePointerCapture(R.pointerId), n.domElement.removeEventListener("pointermove", y), n.domElement.removeEventListener("pointerup", N), n.dispatchEvent(Qc), r = i.NONE; break; case 1: const ce = A[0], fe = z[ce]; Fe({ pointerId: ce, pageX: fe.x, pageY: fe.y }); break } } function te(R) { let ce; switch (R.button) { case 0: ce = n.mouseButtons.LEFT; break; case 1: ce = n.mouseButtons.MIDDLE; break; case 2: ce = n.mouseButtons.RIGHT; break; default: ce = -1 }switch (ce) { case ai.DOLLY: if (n.enableZoom === !1) return; he(R), r = i.DOLLY; break; case ai.ROTATE: if (R.ctrlKey || R.metaKey || R.shiftKey) { if (n.enablePan === !1) return; Pe(R), r = i.PAN } else { if (n.enableRotate === !1) return; ne(R), r = i.ROTATE } break; case ai.PAN: if (R.ctrlKey || R.metaKey || R.shiftKey) { if (n.enableRotate === !1) return; ne(R), r = i.ROTATE } else { if (n.enablePan === !1) return; Pe(R), r = i.PAN } break; default: r = i.NONE }r !== i.NONE && n.dispatchEvent(io) } function J(R) { switch (r) { case i.ROTATE: if (n.enableRotate === !1) return; k(R); break; case i.DOLLY: if (n.enableZoom === !1) return; ie(R); break; case i.PAN: if (n.enablePan === !1) return; ge(R); break } } function Z(R) { n.enabled === !1 || n.enableZoom === !1 || r !== i.NONE || (R.preventDefault(), n.dispatchEvent(io), Me(ye(R)), n.dispatchEvent(Qc)) } function ye(R) { const ce = R.deltaMode, fe = { clientX: R.clientX, clientY: R.clientY, deltaY: R.deltaY }; switch (ce) { case 1: fe.deltaY *= 16; break; case 2: fe.deltaY *= 100; break }return R.ctrlKey && !Q && (fe.deltaY *= 10), fe } function de(R) { R.key === "Control" && (Q = !0, n.domElement.getRootNode().addEventListener("keyup", _e, { passive: !0, capture: !0 })) } function _e(R) { R.key === "Control" && (Q = !1, n.domElement.getRootNode().removeEventListener("keyup", _e, { passive: !0, capture: !0 })) } function Ce(R) { n.enabled === !1 || n.enablePan === !1 || Te(R) } function Fe(R) { switch (we(R), A.length) { case 1: switch (n.touches.ONE) { case ci.ROTATE: if (n.enableRotate === !1) return; ve(R), r = i.TOUCH_ROTATE; break; case ci.PAN: if (n.enablePan === !1) return; Oe(R), r = i.TOUCH_PAN; break; default: r = i.NONE }break; case 2: switch (n.touches.TWO) { case ci.DOLLY_PAN: if (n.enableZoom === !1 && n.enablePan === !1) return; C(R), r = i.TOUCH_DOLLY_PAN; break; case ci.DOLLY_ROTATE: if (n.enableZoom === !1 && n.enableRotate === !1) return; le(R), r = i.TOUCH_DOLLY_ROTATE; break; default: r = i.NONE }break; default: r = i.NONE }r !== i.NONE && n.dispatchEvent(io) } function $(R) { switch (we(R), r) { case i.TOUCH_ROTATE: if (n.enableRotate === !1) return; V(R), n.update(); break; case i.TOUCH_PAN: if (n.enablePan === !1) return; oe(R), n.update(); break; case i.TOUCH_DOLLY_PAN: if (n.enableZoom === !1 && n.enablePan === !1) return; Ee(R), n.update(); break; case i.TOUCH_DOLLY_ROTATE: if (n.enableZoom === !1 && n.enableRotate === !1) return; pe(R), n.update(); break; default: r = i.NONE } } function Ke(R) { n.enabled !== !1 && R.preventDefault() } function ke(R) { A.push(R.pointerId) } function Ne(R) { delete z[R.pointerId]; for (let ce = 0; ce < A.length; ce++)if (A[ce] == R.pointerId) { A.splice(ce, 1); return } } function we(R) { let ce = z[R.pointerId]; ce === void 0 && (ce = new ae, z[R.pointerId] = ce), ce.set(R.pageX, R.pageY) } function me(R) { const ce = R.pointerId === A[0] ? A[1] : A[0]; return z[ce] } n.domElement.addEventListener("contextmenu", Ke), n.domElement.addEventListener("pointerdown", S), n.domElement.addEventListener("pointercancel", N), n.domElement.addEventListener("wheel", Z, { passive: !1 }), n.domElement.getRootNode().addEventListener("keydown", de, { passive: !0, capture: !0 }), this.update() } } class $l extends Go { constructor(e, t = {}) { const n = t.font; if (n === void 0) super(); else { const i = n.generateShapes(e, t.size); t.depth = t.height !== void 0 ? t.height : 50, t.bevelThickness === void 0 && (t.bevelThickness = 10), t.bevelSize === void 0 && (t.bevelSize = 8), t.bevelEnabled === void 0 && (t.bevelEnabled = !1), super(i, t) } this.type = "TextGeometry" } } class Bn extends ri { constructor(e) { super(e) } load(e, t, n, i) { const r = this, o = new Vo(this.manager); o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, function (a) { const c = r.parse(JSON.parse(a)); t && t(c) }, n, i) } parse(e) { return new ex(e) } } class ex { constructor(e) { this.isFont = !0, this.type = "Font", this.data = e } generateShapes(e, t = 100) { const n = [], i = tx(e, t, this.data); for (let r = 0, o = i.length; r < o; r++)n.push(...i[r].toShapes()); return n } } function tx(s, e, t) {
	const n = Array.from(s), i = e / t.resolution, r = (t.boundingBox.yMax - t.boundingBox.yMin + t.underlineThickness) * i, o = []; let a = 0, c = 0; for (let l = 0; l < n.length; l++) {
		const h = n[l]; if (h === `
`) a = 0, c -= r; else { const u = nx(h, i, a, c, t); a += u.offsetX, o.push(u.path) }
	} return o
} function nx(s, e, t, n, i) { const r = i.glyphs[s] || i.glyphs["?"]; if (!r) { console.error('THREE.Font: character "' + s + '" does not exists in font family ' + i.familyName + "."); return } const o = new J_; let a, c, l, h, u, d, m, g; if (r.o) { const _ = r._cachedOutline || (r._cachedOutline = r.o.split(" ")); for (let f = 0, p = _.length; f < p;)switch (_[f++]) { case "m": a = _[f++] * e + t, c = _[f++] * e + n, o.moveTo(a, c); break; case "l": a = _[f++] * e + t, c = _[f++] * e + n, o.lineTo(a, c); break; case "q": l = _[f++] * e + t, h = _[f++] * e + n, u = _[f++] * e + t, d = _[f++] * e + n, o.quadraticCurveTo(u, d, l, h); break; case "b": l = _[f++] * e + t, h = _[f++] * e + n, u = _[f++] * e + t, d = _[f++] * e + n, m = _[f++] * e + t, g = _[f++] * e + n, o.bezierCurveTo(u, d, m, g, l, h); break } } return { offsetX: r.ha * e, path: o } } function tl(s, e) { if (e === Qh) return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), s; if (e === po || e === ml) { let t = s.getIndex(); if (t === null) { const o = [], a = s.getAttribute("position"); if (a !== void 0) { for (let c = 0; c < a.count; c++)o.push(c); s.setIndex(o), t = s.getIndex() } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), s } const n = t.count - 2, i = []; if (e === po) for (let o = 1; o <= n; o++)i.push(t.getX(0)), i.push(t.getX(o)), i.push(t.getX(o + 1)); else for (let o = 0; o < n; o++)o % 2 === 0 ? (i.push(t.getX(o)), i.push(t.getX(o + 1)), i.push(t.getX(o + 2))) : (i.push(t.getX(o + 2)), i.push(t.getX(o + 1)), i.push(t.getX(o))); i.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."); const r = s.clone(); return r.setIndex(i), r.clearGroups(), r } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), s } class oi extends ri { constructor(e) { super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function (t) { return new ax(t) }), this.register(function (t) { return new gx(t) }), this.register(function (t) { return new _x(t) }), this.register(function (t) { return new xx(t) }), this.register(function (t) { return new lx(t) }), this.register(function (t) { return new hx(t) }), this.register(function (t) { return new ux(t) }), this.register(function (t) { return new dx(t) }), this.register(function (t) { return new ox(t) }), this.register(function (t) { return new fx(t) }), this.register(function (t) { return new cx(t) }), this.register(function (t) { return new mx(t) }), this.register(function (t) { return new px(t) }), this.register(function (t) { return new sx(t) }), this.register(function (t) { return new vx(t) }), this.register(function (t) { return new yx(t) }) } load(e, t, n, i) { const r = this; let o; if (this.resourcePath !== "") o = this.resourcePath; else if (this.path !== "") { const l = rs.extractUrlBase(e); o = rs.resolveURL(l, this.path) } else o = rs.extractUrlBase(e); this.manager.itemStart(e); const a = function (l) { i ? i(l) : console.error(l), r.manager.itemError(e), r.manager.itemEnd(e) }, c = new Vo(this.manager); c.setPath(this.path), c.setResponseType("arraybuffer"), c.setRequestHeader(this.requestHeader), c.setWithCredentials(this.withCredentials), c.load(e, function (l) { try { r.parse(l, o, function (h) { t(h), r.manager.itemEnd(e) }, a) } catch (h) { a(h) } }, n, a) } setDRACOLoader(e) { return this.dracoLoader = e, this } setDDSLoader() { throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".') } setKTX2Loader(e) { return this.ktx2Loader = e, this } setMeshoptDecoder(e) { return this.meshoptDecoder = e, this } register(e) { return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this } unregister(e) { return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this } parse(e, t, n, i) { let r; const o = {}, a = {}, c = new TextDecoder; if (typeof e == "string") r = JSON.parse(e); else if (e instanceof ArrayBuffer) if (c.decode(new Uint8Array(e, 0, 4)) === Ql) { try { o[je.KHR_BINARY_GLTF] = new Mx(e) } catch (u) { i && i(u); return } r = JSON.parse(o[je.KHR_BINARY_GLTF].content) } else r = JSON.parse(c.decode(e)); else r = e; if (r.asset === void 0 || r.asset.version[0] < 2) { i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.")); return } const l = new Nx(r, { path: t || this.resourcePath || "", crossOrigin: this.crossOrigin, requestHeader: this.requestHeader, manager: this.manager, ktx2Loader: this.ktx2Loader, meshoptDecoder: this.meshoptDecoder }); l.fileLoader.setRequestHeader(this.requestHeader); for (let h = 0; h < this.pluginCallbacks.length; h++) { const u = this.pluginCallbacks[h](l); u.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), a[u.name] = u, o[u.name] = !0 } if (r.extensionsUsed) for (let h = 0; h < r.extensionsUsed.length; ++h) { const u = r.extensionsUsed[h], d = r.extensionsRequired || []; switch (u) { case je.KHR_MATERIALS_UNLIT: o[u] = new rx; break; case je.KHR_DRACO_MESH_COMPRESSION: o[u] = new Sx(r, this.dracoLoader); break; case je.KHR_TEXTURE_TRANSFORM: o[u] = new Ex; break; case je.KHR_MESH_QUANTIZATION: o[u] = new Tx; break; default: d.indexOf(u) >= 0 && a[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".') } } l.setExtensions(o), l.setPlugins(a), l.parse(n, i) } parseAsync(e, t) { const n = this; return new Promise(function (i, r) { n.parse(e, t, i, r) }) } } function ix() { let s = {}; return { get: function (e) { return s[e] }, add: function (e, t) { s[e] = t }, remove: function (e) { delete s[e] }, removeAll: function () { s = {} } } } const je = { KHR_BINARY_GLTF: "KHR_binary_glTF", KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression", KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual", KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat", KHR_MATERIALS_IOR: "KHR_materials_ior", KHR_MATERIALS_SHEEN: "KHR_materials_sheen", KHR_MATERIALS_SPECULAR: "KHR_materials_specular", KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission", KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence", KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy", KHR_MATERIALS_UNLIT: "KHR_materials_unlit", KHR_MATERIALS_VOLUME: "KHR_materials_volume", KHR_TEXTURE_BASISU: "KHR_texture_basisu", KHR_TEXTURE_TRANSFORM: "KHR_texture_transform", KHR_MESH_QUANTIZATION: "KHR_mesh_quantization", KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength", EXT_MATERIALS_BUMP: "EXT_materials_bump", EXT_TEXTURE_WEBP: "EXT_texture_webp", EXT_TEXTURE_AVIF: "EXT_texture_avif", EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression", EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing" }; class sx { constructor(e) { this.parser = e, this.name = je.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} } } _markDefs() { const e = this.parser, t = this.parser.json.nodes || []; for (let n = 0, i = t.length; n < i; n++) { const r = t[n]; r.extensions && r.extensions[this.name] && r.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, r.extensions[this.name].light) } } _loadLight(e) { const t = this.parser, n = "light:" + e; let i = t.cache.get(n); if (i) return i; const r = t.json, c = ((r.extensions && r.extensions[this.name] || {}).lights || [])[e]; let l; const h = new De(16777215); c.color !== void 0 && h.setRGB(c.color[0], c.color[1], c.color[2], vt); const u = c.range !== void 0 ? c.range : 0; switch (c.type) { case "directional": l = new fr(h), l.target.position.set(0, 0, -1), l.add(l.target); break; case "point": l = new z_(h), l.distance = u; break; case "spot": l = new F_(h), l.distance = u, c.spot = c.spot || {}, c.spot.innerConeAngle = c.spot.innerConeAngle !== void 0 ? c.spot.innerConeAngle : 0, c.spot.outerConeAngle = c.spot.outerConeAngle !== void 0 ? c.spot.outerConeAngle : Math.PI / 4, l.angle = c.spot.outerConeAngle, l.penumbra = 1 - c.spot.innerConeAngle / c.spot.outerConeAngle, l.target.position.set(0, 0, -1), l.add(l.target); break; default: throw new Error("THREE.GLTFLoader: Unexpected light type: " + c.type) }return l.position.set(0, 0, 0), l.decay = 2, Ln(l, c), c.intensity !== void 0 && (l.intensity = c.intensity), l.name = t.createUniqueName(c.name || "light_" + e), i = Promise.resolve(l), t.cache.add(n, i), i } getDependency(e, t) { if (e === "light") return this._loadLight(t) } createNodeAttachment(e) { const t = this, n = this.parser, r = n.json.nodes[e], a = (r.extensions && r.extensions[this.name] || {}).light; return a === void 0 ? null : this._loadLight(a).then(function (c) { return n._getNodeRef(t.cache, a, c) }) } } class rx { constructor() { this.name = je.KHR_MATERIALS_UNLIT } getMaterialType() { return xn } extendParams(e, t, n) { const i = []; e.color = new De(1, 1, 1), e.opacity = 1; const r = t.pbrMetallicRoughness; if (r) { if (Array.isArray(r.baseColorFactor)) { const o = r.baseColorFactor; e.color.setRGB(o[0], o[1], o[2], vt), e.opacity = o[3] } r.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", r.baseColorTexture, ct)) } return Promise.all(i) } } class ox { constructor(e) { this.parser = e, this.name = je.KHR_MATERIALS_EMISSIVE_STRENGTH } extendMaterialParams(e, t) { const i = this.parser.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); const r = i.extensions[this.name].emissiveStrength; return r !== void 0 && (t.emissiveIntensity = r), Promise.resolve() } } class ax { constructor(e) { this.parser = e, this.name = je.KHR_MATERIALS_CLEARCOAT } getMaterialType(e) { const n = this.parser.json.materials[e]; return !n.extensions || !n.extensions[this.name] ? null : Mn } extendMaterialParams(e, t) { const n = this.parser, i = n.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); const r = [], o = i.extensions[this.name]; if (o.clearcoatFactor !== void 0 && (t.clearcoat = o.clearcoatFactor), o.clearcoatTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatMap", o.clearcoatTexture)), o.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = o.clearcoatRoughnessFactor), o.clearcoatRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatRoughnessMap", o.clearcoatRoughnessTexture)), o.clearcoatNormalTexture !== void 0 && (r.push(n.assignTexture(t, "clearcoatNormalMap", o.clearcoatNormalTexture)), o.clearcoatNormalTexture.scale !== void 0)) { const a = o.clearcoatNormalTexture.scale; t.clearcoatNormalScale = new ae(a, a) } return Promise.all(r) } } class cx { constructor(e) { this.parser = e, this.name = je.KHR_MATERIALS_IRIDESCENCE } getMaterialType(e) { const n = this.parser.json.materials[e]; return !n.extensions || !n.extensions[this.name] ? null : Mn } extendMaterialParams(e, t) { const n = this.parser, i = n.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); const r = [], o = i.extensions[this.name]; return o.iridescenceFactor !== void 0 && (t.iridescence = o.iridescenceFactor), o.iridescenceTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceMap", o.iridescenceTexture)), o.iridescenceIor !== void 0 && (t.iridescenceIOR = o.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), o.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = o.iridescenceThicknessMinimum), o.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = o.iridescenceThicknessMaximum), o.iridescenceThicknessTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceThicknessMap", o.iridescenceThicknessTexture)), Promise.all(r) } } class lx { constructor(e) { this.parser = e, this.name = je.KHR_MATERIALS_SHEEN } getMaterialType(e) { const n = this.parser.json.materials[e]; return !n.extensions || !n.extensions[this.name] ? null : Mn } extendMaterialParams(e, t) { const n = this.parser, i = n.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); const r = []; t.sheenColor = new De(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1; const o = i.extensions[this.name]; if (o.sheenColorFactor !== void 0) { const a = o.sheenColorFactor; t.sheenColor.setRGB(a[0], a[1], a[2], vt) } return o.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = o.sheenRoughnessFactor), o.sheenColorTexture !== void 0 && r.push(n.assignTexture(t, "sheenColorMap", o.sheenColorTexture, ct)), o.sheenRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "sheenRoughnessMap", o.sheenRoughnessTexture)), Promise.all(r) } } class hx { constructor(e) { this.parser = e, this.name = je.KHR_MATERIALS_TRANSMISSION } getMaterialType(e) { const n = this.parser.json.materials[e]; return !n.extensions || !n.extensions[this.name] ? null : Mn } extendMaterialParams(e, t) { const n = this.parser, i = n.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); const r = [], o = i.extensions[this.name]; return o.transmissionFactor !== void 0 && (t.transmission = o.transmissionFactor), o.transmissionTexture !== void 0 && r.push(n.assignTexture(t, "transmissionMap", o.transmissionTexture)), Promise.all(r) } } class ux { constructor(e) { this.parser = e, this.name = je.KHR_MATERIALS_VOLUME } getMaterialType(e) { const n = this.parser.json.materials[e]; return !n.extensions || !n.extensions[this.name] ? null : Mn } extendMaterialParams(e, t) { const n = this.parser, i = n.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); const r = [], o = i.extensions[this.name]; t.thickness = o.thicknessFactor !== void 0 ? o.thicknessFactor : 0, o.thicknessTexture !== void 0 && r.push(n.assignTexture(t, "thicknessMap", o.thicknessTexture)), t.attenuationDistance = o.attenuationDistance || 1 / 0; const a = o.attenuationColor || [1, 1, 1]; return t.attenuationColor = new De().setRGB(a[0], a[1], a[2], vt), Promise.all(r) } } class dx { constructor(e) { this.parser = e, this.name = je.KHR_MATERIALS_IOR } getMaterialType(e) { const n = this.parser.json.materials[e]; return !n.extensions || !n.extensions[this.name] ? null : Mn } extendMaterialParams(e, t) { const i = this.parser.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); const r = i.extensions[this.name]; return t.ior = r.ior !== void 0 ? r.ior : 1.5, Promise.resolve() } } class fx { constructor(e) { this.parser = e, this.name = je.KHR_MATERIALS_SPECULAR } getMaterialType(e) { const n = this.parser.json.materials[e]; return !n.extensions || !n.extensions[this.name] ? null : Mn } extendMaterialParams(e, t) { const n = this.parser, i = n.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); const r = [], o = i.extensions[this.name]; t.specularIntensity = o.specularFactor !== void 0 ? o.specularFactor : 1, o.specularTexture !== void 0 && r.push(n.assignTexture(t, "specularIntensityMap", o.specularTexture)); const a = o.specularColorFactor || [1, 1, 1]; return t.specularColor = new De().setRGB(a[0], a[1], a[2], vt), o.specularColorTexture !== void 0 && r.push(n.assignTexture(t, "specularColorMap", o.specularColorTexture, ct)), Promise.all(r) } } class px { constructor(e) { this.parser = e, this.name = je.EXT_MATERIALS_BUMP } getMaterialType(e) { const n = this.parser.json.materials[e]; return !n.extensions || !n.extensions[this.name] ? null : Mn } extendMaterialParams(e, t) { const n = this.parser, i = n.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); const r = [], o = i.extensions[this.name]; return t.bumpScale = o.bumpFactor !== void 0 ? o.bumpFactor : 1, o.bumpTexture !== void 0 && r.push(n.assignTexture(t, "bumpMap", o.bumpTexture)), Promise.all(r) } } class mx { constructor(e) { this.parser = e, this.name = je.KHR_MATERIALS_ANISOTROPY } getMaterialType(e) { const n = this.parser.json.materials[e]; return !n.extensions || !n.extensions[this.name] ? null : Mn } extendMaterialParams(e, t) { const n = this.parser, i = n.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); const r = [], o = i.extensions[this.name]; return o.anisotropyStrength !== void 0 && (t.anisotropy = o.anisotropyStrength), o.anisotropyRotation !== void 0 && (t.anisotropyRotation = o.anisotropyRotation), o.anisotropyTexture !== void 0 && r.push(n.assignTexture(t, "anisotropyMap", o.anisotropyTexture)), Promise.all(r) } } class gx { constructor(e) { this.parser = e, this.name = je.KHR_TEXTURE_BASISU } loadTexture(e) { const t = this.parser, n = t.json, i = n.textures[e]; if (!i.extensions || !i.extensions[this.name]) return null; const r = i.extensions[this.name], o = t.options.ktx2Loader; if (!o) { if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures"); return null } return t.loadTextureImage(e, r.source, o) } } class _x { constructor(e) { this.parser = e, this.name = je.EXT_TEXTURE_WEBP, this.isSupported = null } loadTexture(e) { const t = this.name, n = this.parser, i = n.json, r = i.textures[e]; if (!r.extensions || !r.extensions[t]) return null; const o = r.extensions[t], a = i.images[o.source]; let c = n.textureLoader; if (a.uri) { const l = n.options.manager.getHandler(a.uri); l !== null && (c = l) } return this.detectSupport().then(function (l) { if (l) return n.loadTextureImage(e, o.source, c); if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported."); return n.loadTexture(e) }) } detectSupport() { return this.isSupported || (this.isSupported = new Promise(function (e) { const t = new Image; t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function () { e(t.height === 1) } })), this.isSupported } } class xx { constructor(e) { this.parser = e, this.name = je.EXT_TEXTURE_AVIF, this.isSupported = null } loadTexture(e) { const t = this.name, n = this.parser, i = n.json, r = i.textures[e]; if (!r.extensions || !r.extensions[t]) return null; const o = r.extensions[t], a = i.images[o.source]; let c = n.textureLoader; if (a.uri) { const l = n.options.manager.getHandler(a.uri); l !== null && (c = l) } return this.detectSupport().then(function (l) { if (l) return n.loadTextureImage(e, o.source, c); if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported."); return n.loadTexture(e) }) } detectSupport() { return this.isSupported || (this.isSupported = new Promise(function (e) { const t = new Image; t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function () { e(t.height === 1) } })), this.isSupported } } class vx { constructor(e) { this.name = je.EXT_MESHOPT_COMPRESSION, this.parser = e } loadBufferView(e) { const t = this.parser.json, n = t.bufferViews[e]; if (n.extensions && n.extensions[this.name]) { const i = n.extensions[this.name], r = this.parser.getDependency("buffer", i.buffer), o = this.parser.options.meshoptDecoder; if (!o || !o.supported) { if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files"); return null } return r.then(function (a) { const c = i.byteOffset || 0, l = i.byteLength || 0, h = i.count, u = i.byteStride, d = new Uint8Array(a, c, l); return o.decodeGltfBufferAsync ? o.decodeGltfBufferAsync(h, u, d, i.mode, i.filter).then(function (m) { return m.buffer }) : o.ready.then(function () { const m = new ArrayBuffer(h * u); return o.decodeGltfBuffer(new Uint8Array(m), h, u, d, i.mode, i.filter), m }) }) } else return null } } class yx { constructor(e) { this.name = je.EXT_MESH_GPU_INSTANCING, this.parser = e } createNodeMesh(e) { const t = this.parser.json, n = t.nodes[e]; if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0) return null; const i = t.meshes[n.mesh]; for (const l of i.primitives) if (l.mode !== Ht.TRIANGLES && l.mode !== Ht.TRIANGLE_STRIP && l.mode !== Ht.TRIANGLE_FAN && l.mode !== void 0) return null; const o = n.extensions[this.name].attributes, a = [], c = {}; for (const l in o) a.push(this.parser.getDependency("accessor", o[l]).then(h => (c[l] = h, c[l]))); return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(e)), Promise.all(a).then(l => { const h = l.pop(), u = h.isGroup ? h.children : [h], d = l[0].count, m = []; for (const g of u) { const _ = new We, f = new P, p = new sn, T = new P(1, 1, 1), x = new Gg(g.geometry, g.material, d); for (let M = 0; M < d; M++)c.TRANSLATION && f.fromBufferAttribute(c.TRANSLATION, M), c.ROTATION && p.fromBufferAttribute(c.ROTATION, M), c.SCALE && T.fromBufferAttribute(c.SCALE, M), x.setMatrixAt(M, _.compose(f, p, T)); for (const M in c) if (M === "_COLOR_0") { const I = c[M]; x.instanceColor = new vo(I.array, I.itemSize, I.normalized) } else M !== "TRANSLATION" && M !== "ROTATION" && M !== "SCALE" && g.geometry.setAttribute(M, c[M]); ot.prototype.copy.call(x, g), this.parser.assignFinalMaterial(x), m.push(x) } return h.isGroup ? (h.clear(), h.add(...m), h) : m[0] })) } } const Ql = "glTF", es = 12, nl = { JSON: 1313821514, BIN: 5130562 }; class Mx { constructor(e) { this.name = je.KHR_BINARY_GLTF, this.content = null, this.body = null; const t = new DataView(e, 0, es), n = new TextDecoder; if (this.header = { magic: n.decode(new Uint8Array(e.slice(0, 4))), version: t.getUint32(4, !0), length: t.getUint32(8, !0) }, this.header.magic !== Ql) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header."); if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected."); const i = this.header.length - es, r = new DataView(e, es); let o = 0; for (; o < i;) { const a = r.getUint32(o, !0); o += 4; const c = r.getUint32(o, !0); if (o += 4, c === nl.JSON) { const l = new Uint8Array(e, es + o, a); this.content = n.decode(l) } else if (c === nl.BIN) { const l = es + o; this.body = e.slice(l, l + a) } o += a } if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.") } } class Sx { constructor(e, t) { if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided."); this.name = je.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload() } decodePrimitive(e, t) { const n = this.json, i = this.dracoLoader, r = e.extensions[this.name].bufferView, o = e.extensions[this.name].attributes, a = {}, c = {}, l = {}; for (const h in o) { const u = bo[h] || h.toLowerCase(); a[u] = o[h] } for (const h in e.attributes) { const u = bo[h] || h.toLowerCase(); if (o[h] !== void 0) { const d = n.accessors[e.attributes[h]], m = Di[d.componentType]; l[u] = m.name, c[u] = d.normalized === !0 } } return t.getDependency("bufferView", r).then(function (h) { return new Promise(function (u, d) { i.decodeDracoFile(h, function (m) { for (const g in m.attributes) { const _ = m.attributes[g], f = c[g]; f !== void 0 && (_.normalized = f) } u(m) }, a, l, vt, d) }) }) } } class Ex { constructor() { this.name = je.KHR_TEXTURE_TRANSFORM } extendTexture(e, t) { return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e } } class Tx { constructor() { this.name = je.KHR_MESH_QUANTIZATION } } class eh extends gs { constructor(e, t, n, i) { super(e, t, n, i) } copySampleValue_(e) { const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i * 3 + i; for (let o = 0; o !== i; o++)t[o] = n[r + o]; return t } interpolate_(e, t, n, i) { const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, c = a * 2, l = a * 3, h = i - t, u = (n - t) / h, d = u * u, m = d * u, g = e * l, _ = g - l, f = -2 * m + 3 * d, p = m - d, T = 1 - f, x = p - d + u; for (let M = 0; M !== a; M++) { const I = o[_ + M + a], L = o[_ + M + c] * h, A = o[g + M + a], z = o[g + M] * h; r[M] = T * I + x * L + f * A + p * z } return r } } const bx = new sn; class Ax extends eh { interpolate_(e, t, n, i) { const r = super.interpolate_(e, t, n, i); return bx.fromArray(r).normalize().toArray(r), r } } const Ht = { FLOAT: 5126, FLOAT_MAT3: 35675, FLOAT_MAT4: 35676, FLOAT_VEC2: 35664, FLOAT_VEC3: 35665, FLOAT_VEC4: 35666, LINEAR: 9729, REPEAT: 10497, SAMPLER_2D: 35678, POINTS: 0, LINES: 1, LINE_LOOP: 2, LINE_STRIP: 3, TRIANGLES: 4, TRIANGLE_STRIP: 5, TRIANGLE_FAN: 6, UNSIGNED_BYTE: 5121, UNSIGNED_SHORT: 5123 }, Di = { 5120: Int8Array, 5121: Uint8Array, 5122: Int16Array, 5123: Uint16Array, 5125: Uint32Array, 5126: Float32Array }, il = { 9728: _t, 9729: At, 9984: fo, 9985: Zs, 9986: Ai, 9987: gn }, sl = { 33071: Gt, 33648: er, 10497: Oi }, so = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 }, bo = { POSITION: "position", NORMAL: "normal", TANGENT: "tangent", TEXCOORD_0: "uv", TEXCOORD_1: "uv1", TEXCOORD_2: "uv2", TEXCOORD_3: "uv3", COLOR_0: "color", WEIGHTS_0: "skinWeight", JOINTS_0: "skinIndex" }, Rn = { scale: "scale", translation: "position", rotation: "quaternion", weights: "morphTargetInfluences" }, wx = { CUBICSPLINE: void 0, LINEAR: Bi, STEP: cs }, ro = { OPAQUE: "OPAQUE", MASK: "MASK", BLEND: "BLEND" }; function Rx(s) { return s.DefaultMaterial === void 0 && (s.DefaultMaterial = new ko({ color: 16777215, emissive: 0, metalness: 1, roughness: 1, transparent: !1, depthTest: !0, side: vn })), s.DefaultMaterial } function Xn(s, e, t) { for (const n in t.extensions) s[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]) } function Ln(s, e) { e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(s.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras)) } function Cx(s, e, t) { let n = !1, i = !1, r = !1; for (let l = 0, h = e.length; l < h; l++) { const u = e[l]; if (u.POSITION !== void 0 && (n = !0), u.NORMAL !== void 0 && (i = !0), u.COLOR_0 !== void 0 && (r = !0), n && i && r) break } if (!n && !i && !r) return Promise.resolve(s); const o = [], a = [], c = []; for (let l = 0, h = e.length; l < h; l++) { const u = e[l]; if (n) { const d = u.POSITION !== void 0 ? t.getDependency("accessor", u.POSITION) : s.attributes.position; o.push(d) } if (i) { const d = u.NORMAL !== void 0 ? t.getDependency("accessor", u.NORMAL) : s.attributes.normal; a.push(d) } if (r) { const d = u.COLOR_0 !== void 0 ? t.getDependency("accessor", u.COLOR_0) : s.attributes.color; c.push(d) } } return Promise.all([Promise.all(o), Promise.all(a), Promise.all(c)]).then(function (l) { const h = l[0], u = l[1], d = l[2]; return n && (s.morphAttributes.position = h), i && (s.morphAttributes.normal = u), r && (s.morphAttributes.color = d), s.morphTargetsRelative = !0, s }) } function Lx(s, e) { if (s.updateMorphTargets(), e.weights !== void 0) for (let t = 0, n = e.weights.length; t < n; t++)s.morphTargetInfluences[t] = e.weights[t]; if (e.extras && Array.isArray(e.extras.targetNames)) { const t = e.extras.targetNames; if (s.morphTargetInfluences.length === t.length) { s.morphTargetDictionary = {}; for (let n = 0, i = t.length; n < i; n++)s.morphTargetDictionary[t[n]] = n } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.") } } function Px(s) { let e; const t = s.extensions && s.extensions[je.KHR_DRACO_MESH_COMPRESSION]; if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + oo(t.attributes) : e = s.indices + ":" + oo(s.attributes) + ":" + s.mode, s.targets !== void 0) for (let n = 0, i = s.targets.length; n < i; n++)e += ":" + oo(s.targets[n]); return e } function oo(s) { let e = ""; const t = Object.keys(s).sort(); for (let n = 0, i = t.length; n < i; n++)e += t[n] + ":" + s[t[n]] + ";"; return e } function Ao(s) { switch (s) { case Int8Array: return 1 / 127; case Uint8Array: return 1 / 255; case Int16Array: return 1 / 32767; case Uint16Array: return 1 / 65535; default: throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.") } } function Ix(s) { return s.search(/\.jpe?g($|\?)/i) > 0 || s.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : s.search(/\.webp($|\?)/i) > 0 || s.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png" } const Dx = new We; class Nx { constructor(e = {}, t = {}) { this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new ix, this.associations = new Map, this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {}; let n = !1, i = !1, r = -1; typeof navigator < "u" && (n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, i = navigator.userAgent.indexOf("Firefox") > -1, r = i ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), typeof createImageBitmap > "u" || n || i && r < 98 ? this.textureLoader = new U_(this.options.manager) : this.textureLoader = new G_(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Vo(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0) } setExtensions(e) { this.extensions = e } setPlugins(e) { this.plugins = e } parse(e, t) { const n = this, i = this.json, r = this.extensions; this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function (o) { return o._markDefs && o._markDefs() }), Promise.all(this._invokeAll(function (o) { return o.beforeRoot && o.beforeRoot() })).then(function () { return Promise.all([n.getDependencies("scene"), n.getDependencies("animation"), n.getDependencies("camera")]) }).then(function (o) { const a = { scene: o[0][i.scene || 0], scenes: o[0], animations: o[1], cameras: o[2], asset: i.asset, parser: n, userData: {} }; return Xn(r, a, i), Ln(a, i), Promise.all(n._invokeAll(function (c) { return c.afterRoot && c.afterRoot(a) })).then(function () { e(a) }) }).catch(t) } _markDefs() { const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || []; for (let i = 0, r = t.length; i < r; i++) { const o = t[i].joints; for (let a = 0, c = o.length; a < c; a++)e[o[a]].isBone = !0 } for (let i = 0, r = e.length; i < r; i++) { const o = e[i]; o.mesh !== void 0 && (this._addNodeRef(this.meshCache, o.mesh), o.skin !== void 0 && (n[o.mesh].isSkinnedMesh = !0)), o.camera !== void 0 && this._addNodeRef(this.cameraCache, o.camera) } } _addNodeRef(e, t) { t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++) } _getNodeRef(e, t, n) { if (e.refs[t] <= 1) return n; const i = n.clone(), r = (o, a) => { const c = this.associations.get(o); c != null && this.associations.set(a, c); for (const [l, h] of o.children.entries()) r(h, a.children[l]) }; return r(n, i), i.name += "_instance_" + e.uses[t]++, i } _invokeOne(e) { const t = Object.values(this.plugins); t.push(this); for (let n = 0; n < t.length; n++) { const i = e(t[n]); if (i) return i } return null } _invokeAll(e) { const t = Object.values(this.plugins); t.unshift(this); const n = []; for (let i = 0; i < t.length; i++) { const r = e(t[i]); r && n.push(r) } return n } getDependency(e, t) { const n = e + ":" + t; let i = this.cache.get(n); if (!i) { switch (e) { case "scene": i = this.loadScene(t); break; case "node": i = this._invokeOne(function (r) { return r.loadNode && r.loadNode(t) }); break; case "mesh": i = this._invokeOne(function (r) { return r.loadMesh && r.loadMesh(t) }); break; case "accessor": i = this.loadAccessor(t); break; case "bufferView": i = this._invokeOne(function (r) { return r.loadBufferView && r.loadBufferView(t) }); break; case "buffer": i = this.loadBuffer(t); break; case "material": i = this._invokeOne(function (r) { return r.loadMaterial && r.loadMaterial(t) }); break; case "texture": i = this._invokeOne(function (r) { return r.loadTexture && r.loadTexture(t) }); break; case "skin": i = this.loadSkin(t); break; case "animation": i = this._invokeOne(function (r) { return r.loadAnimation && r.loadAnimation(t) }); break; case "camera": i = this.loadCamera(t); break; default: if (i = this._invokeOne(function (r) { return r != this && r.getDependency && r.getDependency(e, t) }), !i) throw new Error("Unknown type: " + e); break }this.cache.add(n, i) } return i } getDependencies(e) { let t = this.cache.get(e); if (!t) { const n = this, i = this.json[e + (e === "mesh" ? "es" : "s")] || []; t = Promise.all(i.map(function (r, o) { return n.getDependency(e, o) })), this.cache.add(e, t) } return t } loadBuffer(e) { const t = this.json.buffers[e], n = this.fileLoader; if (t.type && t.type !== "arraybuffer") throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported."); if (t.uri === void 0 && e === 0) return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body); const i = this.options; return new Promise(function (r, o) { n.load(rs.resolveURL(t.uri, i.path), r, void 0, function () { o(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".')) }) }) } loadBufferView(e) { const t = this.json.bufferViews[e]; return this.getDependency("buffer", t.buffer).then(function (n) { const i = t.byteLength || 0, r = t.byteOffset || 0; return n.slice(r, r + i) }) } loadAccessor(e) { const t = this, n = this.json, i = this.json.accessors[e]; if (i.bufferView === void 0 && i.sparse === void 0) { const o = so[i.type], a = Di[i.componentType], c = i.normalized === !0, l = new a(i.count * o); return Promise.resolve(new It(l, o, c)) } const r = []; return i.bufferView !== void 0 ? r.push(this.getDependency("bufferView", i.bufferView)) : r.push(null), i.sparse !== void 0 && (r.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(r).then(function (o) { const a = o[0], c = so[i.type], l = Di[i.componentType], h = l.BYTES_PER_ELEMENT, u = h * c, d = i.byteOffset || 0, m = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, g = i.normalized === !0; let _, f; if (m && m !== u) { const p = Math.floor(d / m), T = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + p + ":" + i.count; let x = t.cache.get(T); x || (_ = new l(a, p * m, i.count * m / h), x = new Ug(_, m / h), t.cache.add(T, x)), f = new Oo(x, c, d % m / h, g) } else a === null ? _ = new l(i.count * c) : _ = new l(a, d, i.count * c), f = new It(_, c, g); if (i.sparse !== void 0) { const p = so.SCALAR, T = Di[i.sparse.indices.componentType], x = i.sparse.indices.byteOffset || 0, M = i.sparse.values.byteOffset || 0, I = new T(o[1], x, i.sparse.count * p), L = new l(o[2], M, i.sparse.count * c); a !== null && (f = new It(f.array.slice(), f.itemSize, f.normalized)); for (let A = 0, z = I.length; A < z; A++) { const Q = I[A]; if (f.setX(Q, L[A * c]), c >= 2 && f.setY(Q, L[A * c + 1]), c >= 3 && f.setZ(Q, L[A * c + 2]), c >= 4 && f.setW(Q, L[A * c + 3]), c >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.") } } return f }) } loadTexture(e) { const t = this.json, n = this.options, r = t.textures[e].source, o = t.images[r]; let a = this.textureLoader; if (o.uri) { const c = n.manager.getHandler(o.uri); c !== null && (a = c) } return this.loadTextureImage(e, r, a) } loadTextureImage(e, t, n) { const i = this, r = this.json, o = r.textures[e], a = r.images[t], c = (a.uri || a.bufferView) + ":" + o.sampler; if (this.textureCache[c]) return this.textureCache[c]; const l = this.loadImageSource(t, n).then(function (h) { h.flipY = !1, h.name = o.name || a.name || "", h.name === "" && typeof a.uri == "string" && a.uri.startsWith("data:image/") === !1 && (h.name = a.uri); const d = (r.samplers || {})[o.sampler] || {}; return h.magFilter = il[d.magFilter] || At, h.minFilter = il[d.minFilter] || gn, h.wrapS = sl[d.wrapS] || Oi, h.wrapT = sl[d.wrapT] || Oi, i.associations.set(h, { textures: e }), h }).catch(function () { return null }); return this.textureCache[c] = l, l } loadImageSource(e, t) { const n = this, i = this.json, r = this.options; if (this.sourceCache[e] !== void 0) return this.sourceCache[e].then(u => u.clone()); const o = i.images[e], a = self.URL || self.webkitURL; let c = o.uri || "", l = !1; if (o.bufferView !== void 0) c = n.getDependency("bufferView", o.bufferView).then(function (u) { l = !0; const d = new Blob([u], { type: o.mimeType }); return c = a.createObjectURL(d), c }); else if (o.uri === void 0) throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView"); const h = Promise.resolve(c).then(function (u) { return new Promise(function (d, m) { let g = d; t.isImageBitmapLoader === !0 && (g = function (_) { const f = new xt(_); f.needsUpdate = !0, d(f) }), t.load(rs.resolveURL(u, r.path), g, void 0, m) }) }).then(function (u) { return l === !0 && a.revokeObjectURL(c), u.userData.mimeType = o.mimeType || Ix(o.uri), u }).catch(function (u) { throw console.error("THREE.GLTFLoader: Couldn't load texture", c), u }); return this.sourceCache[e] = h, h } assignTexture(e, t, n, i) { const r = this; return this.getDependency("texture", n.index).then(function (o) { if (!o) return null; if (n.texCoord !== void 0 && n.texCoord > 0 && (o = o.clone(), o.channel = n.texCoord), r.extensions[je.KHR_TEXTURE_TRANSFORM]) { const a = n.extensions !== void 0 ? n.extensions[je.KHR_TEXTURE_TRANSFORM] : void 0; if (a) { const c = r.associations.get(o); o = r.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(o, a), r.associations.set(o, c) } } return i !== void 0 && (o.colorSpace = i), e[t] = o, o }) } assignFinalMaterial(e) { const t = e.geometry; let n = e.material; const i = t.attributes.tangent === void 0, r = t.attributes.color !== void 0, o = t.attributes.normal === void 0; if (e.isPoints) { const a = "PointsMaterial:" + n.uuid; let c = this.cache.get(a); c || (c = new Hl, Zt.prototype.copy.call(c, n), c.color.copy(n.color), c.map = n.map, c.sizeAttenuation = !1, this.cache.add(a, c)), n = c } else if (e.isLine) { const a = "LineBasicMaterial:" + n.uuid; let c = this.cache.get(a); c || (c = new zl, Zt.prototype.copy.call(c, n), c.color.copy(n.color), c.map = n.map, this.cache.add(a, c)), n = c } if (i || r || o) { let a = "ClonedMaterial:" + n.uuid + ":"; i && (a += "derivative-tangents:"), r && (a += "vertex-colors:"), o && (a += "flat-shading:"); let c = this.cache.get(a); c || (c = n.clone(), r && (c.vertexColors = !0), o && (c.flatShading = !0), i && (c.normalScale && (c.normalScale.y *= -1), c.clearcoatNormalScale && (c.clearcoatNormalScale.y *= -1)), this.cache.add(a, c), this.associations.set(c, this.associations.get(n))), n = c } e.material = n } getMaterialType() { return ko } loadMaterial(e) { const t = this, n = this.json, i = this.extensions, r = n.materials[e]; let o; const a = {}, c = r.extensions || {}, l = []; if (c[je.KHR_MATERIALS_UNLIT]) { const u = i[je.KHR_MATERIALS_UNLIT]; o = u.getMaterialType(), l.push(u.extendParams(a, r, t)) } else { const u = r.pbrMetallicRoughness || {}; if (a.color = new De(1, 1, 1), a.opacity = 1, Array.isArray(u.baseColorFactor)) { const d = u.baseColorFactor; a.color.setRGB(d[0], d[1], d[2], vt), a.opacity = d[3] } u.baseColorTexture !== void 0 && l.push(t.assignTexture(a, "map", u.baseColorTexture, ct)), a.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, a.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (l.push(t.assignTexture(a, "metalnessMap", u.metallicRoughnessTexture)), l.push(t.assignTexture(a, "roughnessMap", u.metallicRoughnessTexture))), o = this._invokeOne(function (d) { return d.getMaterialType && d.getMaterialType(e) }), l.push(Promise.all(this._invokeAll(function (d) { return d.extendMaterialParams && d.extendMaterialParams(e, a) }))) } r.doubleSided === !0 && (a.side = en); const h = r.alphaMode || ro.OPAQUE; if (h === ro.BLEND ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, h === ro.MASK && (a.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : .5)), r.normalTexture !== void 0 && o !== xn && (l.push(t.assignTexture(a, "normalMap", r.normalTexture)), a.normalScale = new ae(1, 1), r.normalTexture.scale !== void 0)) { const u = r.normalTexture.scale; a.normalScale.set(u, u) } if (r.occlusionTexture !== void 0 && o !== xn && (l.push(t.assignTexture(a, "aoMap", r.occlusionTexture)), r.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = r.occlusionTexture.strength)), r.emissiveFactor !== void 0 && o !== xn) { const u = r.emissiveFactor; a.emissive = new De().setRGB(u[0], u[1], u[2], vt) } return r.emissiveTexture !== void 0 && o !== xn && l.push(t.assignTexture(a, "emissiveMap", r.emissiveTexture, ct)), Promise.all(l).then(function () { const u = new o(a); return r.name && (u.name = r.name), Ln(u, r), t.associations.set(u, { materials: e }), r.extensions && Xn(i, u, r), u }) } createUniqueName(e) { const t = et.sanitizeNodeName(e || ""); return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t) } loadGeometries(e) { const t = this, n = this.extensions, i = this.primitiveCache; function r(a) { return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function (c) { return rl(c, a, t) }) } const o = []; for (let a = 0, c = e.length; a < c; a++) { const l = e[a], h = Px(l), u = i[h]; if (u) o.push(u.promise); else { let d; l.extensions && l.extensions[je.KHR_DRACO_MESH_COMPRESSION] ? d = r(l) : d = rl(new $t, l, t), i[h] = { primitive: l, promise: d }, o.push(d) } } return Promise.all(o) } loadMesh(e) { const t = this, n = this.json, i = this.extensions, r = n.meshes[e], o = r.primitives, a = []; for (let c = 0, l = o.length; c < l; c++) { const h = o[c].material === void 0 ? Rx(this.cache) : this.getDependency("material", o[c].material); a.push(h) } return a.push(t.loadGeometries(o)), Promise.all(a).then(function (c) { const l = c.slice(0, c.length - 1), h = c[c.length - 1], u = []; for (let m = 0, g = h.length; m < g; m++) { const _ = h[m], f = o[m]; let p; const T = l[m]; if (f.mode === Ht.TRIANGLES || f.mode === Ht.TRIANGLE_STRIP || f.mode === Ht.TRIANGLE_FAN || f.mode === void 0) p = r.isSkinnedMesh === !0 ? new Fg(_, T) : new Pt(_, T), p.isSkinnedMesh === !0 && p.normalizeSkinWeights(), f.mode === Ht.TRIANGLE_STRIP ? p.geometry = tl(p.geometry, ml) : f.mode === Ht.TRIANGLE_FAN && (p.geometry = tl(p.geometry, po)); else if (f.mode === Ht.LINES) p = new kg(_, T); else if (f.mode === Ht.LINE_STRIP) p = new Bo(_, T); else if (f.mode === Ht.LINE_LOOP) p = new Vg(_, T); else if (f.mode === Ht.POINTS) p = new Wg(_, T); else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + f.mode); Object.keys(p.geometry.morphAttributes).length > 0 && Lx(p, r), p.name = t.createUniqueName(r.name || "mesh_" + e), Ln(p, r), f.extensions && Xn(i, p, f), t.assignFinalMaterial(p), u.push(p) } for (let m = 0, g = u.length; m < g; m++)t.associations.set(u[m], { meshes: e, primitives: m }); if (u.length === 1) return r.extensions && Xn(i, u[0], r), u[0]; const d = new Kn; r.extensions && Xn(i, d, r), t.associations.set(d, { meshes: e }); for (let m = 0, g = u.length; m < g; m++)d.add(u[m]); return d }) } loadCamera(e) { let t; const n = this.json.cameras[e], i = n[n.type]; if (!i) { console.warn("THREE.GLTFLoader: Missing camera parameters."); return } return n.type === "perspective" ? t = new Lt(xl.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new No(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), Ln(t, n), Promise.resolve(t) } loadSkin(e) { const t = this.json.skins[e], n = []; for (let i = 0, r = t.joints.length; i < r; i++)n.push(this._loadNodeShallow(t.joints[i])); return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function (i) { const r = i.pop(), o = i, a = [], c = []; for (let l = 0, h = o.length; l < h; l++) { const u = o[l]; if (u) { a.push(u); const d = new We; r !== null && d.fromArray(r.array, l * 16), c.push(d) } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[l]) } return new Fo(a, c) }) } loadAnimation(e) { const t = this.json, n = this, i = t.animations[e], r = i.name ? i.name : "animation_" + e, o = [], a = [], c = [], l = [], h = []; for (let u = 0, d = i.channels.length; u < d; u++) { const m = i.channels[u], g = i.samplers[m.sampler], _ = m.target, f = _.node, p = i.parameters !== void 0 ? i.parameters[g.input] : g.input, T = i.parameters !== void 0 ? i.parameters[g.output] : g.output; _.node !== void 0 && (o.push(this.getDependency("node", f)), a.push(this.getDependency("accessor", p)), c.push(this.getDependency("accessor", T)), l.push(g), h.push(_)) } return Promise.all([Promise.all(o), Promise.all(a), Promise.all(c), Promise.all(l), Promise.all(h)]).then(function (u) { const d = u[0], m = u[1], g = u[2], _ = u[3], f = u[4], p = []; for (let T = 0, x = d.length; T < x; T++) { const M = d[T], I = m[T], L = g[T], A = _[T], z = f[T]; if (M === void 0) continue; M.updateMatrix && M.updateMatrix(); const Q = n._createAnimationTracks(M, I, L, A, z); if (Q) for (let v = 0; v < Q.length; v++)p.push(Q[v]) } return new C_(r, void 0, p) }) } createNodeMesh(e) { const t = this.json, n = this, i = t.nodes[e]; return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function (r) { const o = n._getNodeRef(n.meshCache, i.mesh, r); return i.weights !== void 0 && o.traverse(function (a) { if (a.isMesh) for (let c = 0, l = i.weights.length; c < l; c++)a.morphTargetInfluences[c] = i.weights[c] }), o }) } loadNode(e) { const t = this.json, n = this, i = t.nodes[e], r = n._loadNodeShallow(e), o = [], a = i.children || []; for (let l = 0, h = a.length; l < h; l++)o.push(n.getDependency("node", a[l])); const c = i.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", i.skin); return Promise.all([r, Promise.all(o), c]).then(function (l) { const h = l[0], u = l[1], d = l[2]; d !== null && h.traverse(function (m) { m.isSkinnedMesh && m.bind(d, Dx) }); for (let m = 0, g = u.length; m < g; m++)h.add(u[m]); return h }) } _loadNodeShallow(e) { const t = this.json, n = this.extensions, i = this; if (this.nodeCache[e] !== void 0) return this.nodeCache[e]; const r = t.nodes[e], o = r.name ? i.createUniqueName(r.name) : "", a = [], c = i._invokeOne(function (l) { return l.createNodeMesh && l.createNodeMesh(e) }); return c && a.push(c), r.camera !== void 0 && a.push(i.getDependency("camera", r.camera).then(function (l) { return i._getNodeRef(i.cameraCache, r.camera, l) })), i._invokeAll(function (l) { return l.createNodeAttachment && l.createNodeAttachment(e) }).forEach(function (l) { a.push(l) }), this.nodeCache[e] = Promise.all(a).then(function (l) { let h; if (r.isBone === !0 ? h = new Bl : l.length > 1 ? h = new Kn : l.length === 1 ? h = l[0] : h = new ot, h !== l[0]) for (let u = 0, d = l.length; u < d; u++)h.add(l[u]); if (r.name && (h.userData.name = r.name, h.name = o), Ln(h, r), r.extensions && Xn(n, h, r), r.matrix !== void 0) { const u = new We; u.fromArray(r.matrix), h.applyMatrix4(u) } else r.translation !== void 0 && h.position.fromArray(r.translation), r.rotation !== void 0 && h.quaternion.fromArray(r.rotation), r.scale !== void 0 && h.scale.fromArray(r.scale); return i.associations.has(h) || i.associations.set(h, {}), i.associations.get(h).nodes = e, h }), this.nodeCache[e] } loadScene(e) { const t = this.extensions, n = this.json.scenes[e], i = this, r = new Kn; n.name && (r.name = i.createUniqueName(n.name)), Ln(r, n), n.extensions && Xn(t, r, n); const o = n.nodes || [], a = []; for (let c = 0, l = o.length; c < l; c++)a.push(i.getDependency("node", o[c])); return Promise.all(a).then(function (c) { for (let h = 0, u = c.length; h < u; h++)r.add(c[h]); const l = h => { const u = new Map; for (const [d, m] of i.associations) (d instanceof Zt || d instanceof xt) && u.set(d, m); return h.traverse(d => { const m = i.associations.get(d); m != null && u.set(d, m) }), u }; return i.associations = l(r), r }) } _createAnimationTracks(e, t, n, i, r) { const o = [], a = e.name ? e.name : e.uuid, c = []; Rn[r.path] === Rn.weights ? e.traverse(function (d) { d.morphTargetInfluences && c.push(d.name ? d.name : d.uuid) }) : c.push(a); let l; switch (Rn[r.path]) { case Rn.weights: l = Gi; break; case Rn.rotation: l = ii; break; case Rn.position: case Rn.scale: l = ki; break; default: switch (n.itemSize) { case 1: l = Gi; break; case 2: case 3: default: l = ki; break }break }const h = i.interpolation !== void 0 ? wx[i.interpolation] : Bi, u = this._getArrayFromAccessor(n); for (let d = 0, m = c.length; d < m; d++) { const g = new l(c[d] + "." + Rn[r.path], t.array, u, h); i.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(g), o.push(g) } return o } _getArrayFromAccessor(e) { let t = e.array; if (e.normalized) { const n = Ao(t.constructor), i = new Float32Array(t.length); for (let r = 0, o = t.length; r < o; r++)i[r] = t[r] * n; t = i } return t } _createCubicSplineTrackInterpolant(e) { e.createInterpolant = function (n) { const i = this instanceof ii ? Ax : eh; return new i(this.times, this.values, this.getValueSize() / 3, n) }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0 } } function Ux(s, e, t) { const n = e.attributes, i = new yn; if (n.POSITION !== void 0) { const a = t.json.accessors[n.POSITION], c = a.min, l = a.max; if (c !== void 0 && l !== void 0) { if (i.set(new P(c[0], c[1], c[2]), new P(l[0], l[1], l[2])), a.normalized) { const h = Ao(Di[a.componentType]); i.min.multiplyScalar(h), i.max.multiplyScalar(h) } } else { console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION."); return } } else return; const r = e.targets; if (r !== void 0) { const a = new P, c = new P; for (let l = 0, h = r.length; l < h; l++) { const u = r[l]; if (u.POSITION !== void 0) { const d = t.json.accessors[u.POSITION], m = d.min, g = d.max; if (m !== void 0 && g !== void 0) { if (c.setX(Math.max(Math.abs(m[0]), Math.abs(g[0]))), c.setY(Math.max(Math.abs(m[1]), Math.abs(g[1]))), c.setZ(Math.max(Math.abs(m[2]), Math.abs(g[2]))), d.normalized) { const _ = Ao(Di[d.componentType]); c.multiplyScalar(_) } a.max(c) } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.") } } i.expandByVector(a) } s.boundingBox = i; const o = new rn; i.getCenter(o.center), o.radius = i.min.distanceTo(i.max) / 2, s.boundingSphere = o } function rl(s, e, t) { const n = e.attributes, i = []; function r(o, a) { return t.getDependency("accessor", o).then(function (c) { s.setAttribute(a, c) }) } for (const o in n) { const a = bo[o] || o.toLowerCase(); a in s.attributes || i.push(r(n[o], a)) } if (e.indices !== void 0 && !s.index) { const o = t.getDependency("accessor", e.indices).then(function (a) { s.setIndex(a) }); i.push(o) } return $e.workingColorSpace !== vt && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$e.workingColorSpace}" not supported.`), Ln(s, e), Ux(s, e, t), Promise.all(i).then(function () { return e.targets !== void 0 ? Cx(s, e.targets, t) : s }) } class Ox { bend(e, t, n) { let i = 0; if (n !== 0) { const r = e.attributes.position.array; for (let o = 0; o < r.length; o += 3) { let a = r[o], c = r[o + 1], l = r[o + 2]; switch (t) { case "x": i = l * n; break; case "y": i = a * n; break; default: i = a * n; break }let h = Math.sin(i), u = Math.cos(i); switch (t) { case "x": r[o] = a, r[o + 1] = (c - 1 / n) * u + 1 / n, r[o + 2] = -(c - 1 / n) * h; break; case "y": r[o] = -(l - 1 / n) * h, r[o + 1] = c, r[o + 2] = (l - 1 / n) * u + 1 / n; break; default: r[o] = -(c - 1 / n) * h, r[o + 1] = (c - 1 / n) * u + 1 / n, r[o + 2] = l; break } } e.attributes.position.needsUpdate = !0 } } } let Fx = ["3dmodel/charm/1.gltf", "3dmodel/charm/2.gltf", "3dmodel/charm/3.gltf"]; function Kt(s) { return Math.PI / 180 * s } function Bx(s, e, t, n) { var i; const r = new oi(e); new Bn(e), r.load("3dmodel/watch.gltf", function (o) { if (i = o.scene, s.children.length > 2) { let a = s.children[2]; s.remove(a) } console.log(s.children.length), s.add(o.scene), i.rotation.set(0, 0, 0) }) } function zx(s, e, t, n) { var i; const r = new oi(e); new Bn(e), r.load("3dmodel/purse.gltf", function (o) { if (i = o.scene, s.children.length > 2) { let a = s.children[2]; s.remove(a) } console.log(s.children.length), s.add(o.scene), i.rotation.set(0, 0, 0), s.traverse(function (a) { if (a.isMesh) { const c = a.material; c.name == "pusre" && c.color.set(3149568) } }) }) } function pr(s, e, t, n, i) { var r; const o = new oi(e), a = new Bn(e); o.load("3dmodel/wallet.gltf", function (c) { if (r = c.scene, s.children.length > 2) { let l = s.children[2]; s.remove(l) } console.log(s.children.length), s.add(c.scene), s.traverse(function (l) { if (l.isMesh) { const h = l.material; h.name == "walletcolor" && h.color.set(t) } }), r.rotation.set(0, Kt(90), 0), n.length > 10 && (n = n.substring(0, 10)), o.load(Fx[i], function (l) { let h = l.scene; r.add(l.scene), h.rotation.set(0, -Kt(90), Kt(90)), h.position.set(.5, .055, .12), h.scale.set(4, 4, 4) }), a.load("droid_serif_regular.typeface.json", function (l) { const h = new $l(n, { font: l, size: .075, height: .1, curveSegments: 6, bevelEnabled: !0, bevelThickness: .01, bevelSize: .005, bevelSegments: 12 }), u = new xn({ color: 16777215 }); let d = new Pt(h, u); d.rotation.set(-Kt(90), .07, 0), d.position.set(.21, -.01, .5), r.add(d) }) }) } function Hx(s, e, t, n) { var i; const r = new oi(e); new Bn(e), r.load("3dmodel/passportcover.gltf", function (o) { if (i = o.scene, s.children.length > 2) { let a = s.children[2]; s.remove(a) } console.log(s.children.length), s.add(o.scene), i.rotation.set(0, Kt(90), 0) }) } function Gx(s, e, t, n) { var i; const r = new oi(e); new Bn(e), r.load("3dmodel/pen1.gltf", function (o) { if (i = o.scene, s.children.length > 2) { let a = s.children[2]; s.remove(a) } console.log(s.children.length), s.add(o.scene), i.rotation.set(0, Kt(90), 0) }) } function kx(s, e, t, n) { var i; const r = new oi(e); new Bn(e), r.load("3dmodel/cup.gltf", function (o) { if (i = o.scene, s.children.length > 2) { let a = s.children[2]; s.remove(a) } console.log(s.children.length), s.add(o.scene), i.rotation.set(0, -Kt(90), 0), i.traverse(function (a) { a.isMesh && (console.log("Mesh has material"), a.material = new jl({ color: parseInt(t[n].color[0].hex, 16) })) }) }) } function jo(s, e, t, n) { var i; const r = new oi(e), o = new Ox, a = new Bn(e); r.load("3dmodel/bottle.gltf", function (c) { if (i = c.scene, s.children.length > 2) { let l = s.children[2]; s.remove(l) } s.add(c.scene), i.rotation.set(0, -Kt(90), 0), i.traverse(function (l) { l.isMesh && (console.log("Mesh has material"), l.material = new jl({ color: t })) }), console.log(n.length), n.length > 10 && (n = n.substring(0, 10)), a.load("droid_serif_regular.typeface.json", function (l) { const h = new $l(n, { font: l, size: 1.5 / n.length, height: .1, curveSegments: 6, bevelEnabled: !0, bevelThickness: .01, bevelSize: .005, bevelSegments: 12 }), u = new xn({ color: 16777215 }); let d = new Pt(h, u); d.rotation.set(0, Kt(90), -Kt(90)), d.position.set(.28, .4, .15 + .002 * n.length), o.bend(h, "x", Kt(0)), i.add(d) }) }) } const Ko = document.querySelector("#c"), ao = new Fl({ antialias: !0, canvas: Ko, alpha: !0 }), Mt = new Jl; Mt.onStart = function (s, e, t) {
	console.log("Started loading file: " + s + `.
Loaded `+ e + " of " + t + " files.")
}; Mt.onLoad = function () { console.log("Loading complete!") }; Mt.onProgress = function (s, e, t) { }; Mt.onError = function (s) { console.log("There was an error loading " + s) }; const Vx = 75, Wx = 2, Xx = .1, qx = 10, os = new Lt(Vx, Wx, Xx, qx); os.position.z = 2; const St = new Ng, Zo = 16777215, Jo = 10, th = new fr(Zo, Jo), nh = new fr(Zo, Jo), Yx = new fr(Zo, Jo); th.position.set(0, 2, 3); nh.position.set(2, -2, -3); Yx.position.set(-2, -2, -3); St.add(th); St.add(nh); const mr = new Q_(os, Ko); mr.target.set(0, 0, 0); mr.minDistance = 1.7; mr.maxDistance = 3; mr.update(); function jx(s) { const e = s.domElement, t = e.clientWidth, n = e.clientHeight, i = e.width !== t || e.height !== n; return i && s.setSize(t, n, !1), i } let Zn, fs, On = "text", Dt; document.addEventListener("DOMContentLoaded", function () { document.querySelectorAll(".options div").forEach(e => { e.addEventListener("click", function () { fetch("data2.json").then(t => t.json()).then(t => { Zn = t[e.id].color, console.log(t[e.id].charm), console.log("this is for the god sake", Zn); const n = document.getElementById("dropdownMenu"); n.innerHTML = ""; for (let r = 0; r < Zn.length; r++) { const o = document.createElement("li"); o.innerHTML = `<a class="dropdown-item" id="${r}">${Zn[r].c}</a>`, n.appendChild(o) } if (Dt = t[e.id].name, fs = t[e.id].color[0].hex, Dt == "Mug") { var i = document.getElementById("invisible"); i.style.display = "none", kx(St, Mt, t, e.id) } else if (Dt == "Bottle") { var i = document.getElementById("invisible"); i.style.display = "none", jo(St, Mt, t[e.id].color[0].hex, On) } else if (Dt == "Wallet") { var i = document.getElementById("invisible"); i.style.display = "block", pr(St, Mt, t[e.id].color[0].hex, On, 0) } else if (Dt == "Watch") { var i = document.getElementById("invisible"); i.style.display = "none", Bx(St, Mt, t, e.id) } else if (Dt == "Purse") { var i = document.getElementById("invisible"); i.style.display = "block", zx(St, Mt, t, e.id) } else if (Dt == "passport Cover") { var i = document.getElementById("invisible"); i.style.display = "block", Hx(St, Mt, t, e.id) } else if (Dt == "Pen") { var i = document.getElementById("invisible"); i.style.display = "none", Gx(St, Mt, t, e.id) } }).catch(t => console.error("Error fetching JSON:", t)) }) }) }); let or = 0; dropdownMenu.addEventListener("click", function (s) { s.target.classList.contains("dropdown-item") && (console.log("Mesh has material", Dt), fs = Zn[s.target.id].hex, Dt == "Bottle" ? jo(St, Mt, Zn[s.target.id].hex, On) : Dt == "Wallet" && pr(St, Mt, Zn[s.target.id].hex, On, or)) }); dropdownMenu2.addEventListener("click", function (s) { s.target.classList.contains("dropdown-item") && (or = s.target.id, Dt == "Wallet" && pr(St, Mt, fs, On, or)) }); document.getElementById("submitButton").addEventListener("click", function () { const s = document.getElementById("exampleFormControlInput1").value; console.log("Input Value:", s), On = s, Dt == "Bottle" ? jo(St, Mt, fs, On) : Dt == "Wallet" && pr(St, Mt, fs, On, or) }); new Bn(Mt); function ih(s) { if (s *= .001, jx(ao)) { const e = ao.domElement; os.aspect = e.clientWidth / e.clientHeight, os.updateProjectionMatrix() } if (St.children.length > 2) { let e = St.children[2]; Ko.clientWidth < 550 ? e.scale.set(.5, .5, .5) : e.scale.set(.8, .8, .8), e.rotation.z = Math.cos(s * 1.5) / 20, e.rotation.x = Math.cos(s * 1.5) / 20, e.position.y = Math.cos(s * 1.5) / 20 } ao.render(St, os), requestAnimationFrame(ih) } requestAnimationFrame(ih);
