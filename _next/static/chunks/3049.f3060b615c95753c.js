(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3049],
  {
    31050: function (e, t, r) {
      "use strict";
      (t.Xx = t._w = t.aP = t.KS = t.jQ = void 0), r(31416);
      let i = r(93350);
      function n(e) {
        let t = new Float64Array(16);
        if (e) for (let r = 0; r < e.length; r++) t[r] = e[r];
        return t;
      }
      r(17309), (t.jQ = 64), (t.KS = 64), (t.aP = 32);
      let s = new Uint8Array(32);
      s[0] = 9;
      let o = n(),
        a = n([1]),
        c =
          (n([
            30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585,
            16505, 36039, 65139, 11119, 27886, 20995,
          ]),
          n([
            61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171,
            33010, 6542, 64743, 22239, 55772, 9222,
          ])),
        h = n([
          54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982,
          57905, 49316, 21502, 52590, 14035, 8553,
        ]),
        l = n([
          26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
          26214, 26214, 26214, 26214, 26214, 26214,
        ]);
      function u(e, t) {
        for (let r = 0; r < 16; r++) e[r] = 0 | t[r];
      }
      function p(e) {
        let t = 1;
        for (let r = 0; r < 16; r++) {
          let i = e[r] + t + 65535;
          (t = Math.floor(i / 65536)), (e[r] = i - 65536 * t);
        }
        e[0] += t - 1 + 37 * (t - 1);
      }
      function f(e, t, r) {
        let i = ~(r - 1);
        for (let r = 0; r < 16; r++) {
          let n = i & (e[r] ^ t[r]);
          (e[r] ^= n), (t[r] ^= n);
        }
      }
      function d(e, t) {
        let r = n(),
          i = n();
        for (let e = 0; e < 16; e++) i[e] = t[e];
        p(i), p(i), p(i);
        for (let e = 0; e < 2; e++) {
          r[0] = i[0] - 65517;
          for (let e = 1; e < 15; e++)
            (r[e] = i[e] - 65535 - ((r[e - 1] >> 16) & 1)), (r[e - 1] &= 65535);
          r[15] = i[15] - 32767 - ((r[14] >> 16) & 1);
          let e = (r[15] >> 16) & 1;
          (r[14] &= 65535), f(i, r, 1 - e);
        }
        for (let t = 0; t < 16; t++)
          (e[2 * t] = 255 & i[t]), (e[2 * t + 1] = i[t] >> 8);
      }
      n([
        41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153,
        11085, 57099, 20417, 9344, 11139,
      ]);
      function g(e, t, r) {
        for (let i = 0; i < 16; i++) e[i] = t[i] + r[i];
      }
      function v(e, t, r) {
        for (let i = 0; i < 16; i++) e[i] = t[i] - r[i];
      }
      function y(e, t, r) {
        let i,
          n,
          s = 0,
          o = 0,
          a = 0,
          c = 0,
          h = 0,
          l = 0,
          u = 0,
          p = 0,
          f = 0,
          d = 0,
          g = 0,
          v = 0,
          y = 0,
          m = 0,
          _ = 0,
          w = 0,
          b = 0,
          E = 0,
          I = 0,
          P = 0,
          S = 0,
          R = 0,
          O = 0,
          x = 0,
          C = 0,
          A = 0,
          N = 0,
          T = 0,
          q = 0,
          j = 0,
          L = 0,
          D = r[0],
          z = r[1],
          M = r[2],
          U = r[3],
          k = r[4],
          $ = r[5],
          H = r[6],
          V = r[7],
          K = r[8],
          B = r[9],
          J = r[10],
          F = r[11],
          W = r[12],
          Z = r[13],
          G = r[14],
          Q = r[15];
        (s += (i = t[0]) * D),
          (o += i * z),
          (a += i * M),
          (c += i * U),
          (h += i * k),
          (l += i * $),
          (u += i * H),
          (p += i * V),
          (f += i * K),
          (d += i * B),
          (g += i * J),
          (v += i * F),
          (y += i * W),
          (m += i * Z),
          (_ += i * G),
          (w += i * Q),
          (o += (i = t[1]) * D),
          (a += i * z),
          (c += i * M),
          (h += i * U),
          (l += i * k),
          (u += i * $),
          (p += i * H),
          (f += i * V),
          (d += i * K),
          (g += i * B),
          (v += i * J),
          (y += i * F),
          (m += i * W),
          (_ += i * Z),
          (w += i * G),
          (b += i * Q),
          (a += (i = t[2]) * D),
          (c += i * z),
          (h += i * M),
          (l += i * U),
          (u += i * k),
          (p += i * $),
          (f += i * H),
          (d += i * V),
          (g += i * K),
          (v += i * B),
          (y += i * J),
          (m += i * F),
          (_ += i * W),
          (w += i * Z),
          (b += i * G),
          (E += i * Q),
          (c += (i = t[3]) * D),
          (h += i * z),
          (l += i * M),
          (u += i * U),
          (p += i * k),
          (f += i * $),
          (d += i * H),
          (g += i * V),
          (v += i * K),
          (y += i * B),
          (m += i * J),
          (_ += i * F),
          (w += i * W),
          (b += i * Z),
          (E += i * G),
          (I += i * Q),
          (h += (i = t[4]) * D),
          (l += i * z),
          (u += i * M),
          (p += i * U),
          (f += i * k),
          (d += i * $),
          (g += i * H),
          (v += i * V),
          (y += i * K),
          (m += i * B),
          (_ += i * J),
          (w += i * F),
          (b += i * W),
          (E += i * Z),
          (I += i * G),
          (P += i * Q),
          (l += (i = t[5]) * D),
          (u += i * z),
          (p += i * M),
          (f += i * U),
          (d += i * k),
          (g += i * $),
          (v += i * H),
          (y += i * V),
          (m += i * K),
          (_ += i * B),
          (w += i * J),
          (b += i * F),
          (E += i * W),
          (I += i * Z),
          (P += i * G),
          (S += i * Q),
          (u += (i = t[6]) * D),
          (p += i * z),
          (f += i * M),
          (d += i * U),
          (g += i * k),
          (v += i * $),
          (y += i * H),
          (m += i * V),
          (_ += i * K),
          (w += i * B),
          (b += i * J),
          (E += i * F),
          (I += i * W),
          (P += i * Z),
          (S += i * G),
          (R += i * Q),
          (p += (i = t[7]) * D),
          (f += i * z),
          (d += i * M),
          (g += i * U),
          (v += i * k),
          (y += i * $),
          (m += i * H),
          (_ += i * V),
          (w += i * K),
          (b += i * B),
          (E += i * J),
          (I += i * F),
          (P += i * W),
          (S += i * Z),
          (R += i * G),
          (O += i * Q),
          (f += (i = t[8]) * D),
          (d += i * z),
          (g += i * M),
          (v += i * U),
          (y += i * k),
          (m += i * $),
          (_ += i * H),
          (w += i * V),
          (b += i * K),
          (E += i * B),
          (I += i * J),
          (P += i * F),
          (S += i * W),
          (R += i * Z),
          (O += i * G),
          (x += i * Q),
          (d += (i = t[9]) * D),
          (g += i * z),
          (v += i * M),
          (y += i * U),
          (m += i * k),
          (_ += i * $),
          (w += i * H),
          (b += i * V),
          (E += i * K),
          (I += i * B),
          (P += i * J),
          (S += i * F),
          (R += i * W),
          (O += i * Z),
          (x += i * G),
          (C += i * Q),
          (g += (i = t[10]) * D),
          (v += i * z),
          (y += i * M),
          (m += i * U),
          (_ += i * k),
          (w += i * $),
          (b += i * H),
          (E += i * V),
          (I += i * K),
          (P += i * B),
          (S += i * J),
          (R += i * F),
          (O += i * W),
          (x += i * Z),
          (C += i * G),
          (A += i * Q),
          (v += (i = t[11]) * D),
          (y += i * z),
          (m += i * M),
          (_ += i * U),
          (w += i * k),
          (b += i * $),
          (E += i * H),
          (I += i * V),
          (P += i * K),
          (S += i * B),
          (R += i * J),
          (O += i * F),
          (x += i * W),
          (C += i * Z),
          (A += i * G),
          (N += i * Q),
          (y += (i = t[12]) * D),
          (m += i * z),
          (_ += i * M),
          (w += i * U),
          (b += i * k),
          (E += i * $),
          (I += i * H),
          (P += i * V),
          (S += i * K),
          (R += i * B),
          (O += i * J),
          (x += i * F),
          (C += i * W),
          (A += i * Z),
          (N += i * G),
          (T += i * Q),
          (m += (i = t[13]) * D),
          (_ += i * z),
          (w += i * M),
          (b += i * U),
          (E += i * k),
          (I += i * $),
          (P += i * H),
          (S += i * V),
          (R += i * K),
          (O += i * B),
          (x += i * J),
          (C += i * F),
          (A += i * W),
          (N += i * Z),
          (T += i * G),
          (q += i * Q),
          (_ += (i = t[14]) * D),
          (w += i * z),
          (b += i * M),
          (E += i * U),
          (I += i * k),
          (P += i * $),
          (S += i * H),
          (R += i * V),
          (O += i * K),
          (x += i * B),
          (C += i * J),
          (A += i * F),
          (N += i * W),
          (T += i * Z),
          (q += i * G),
          (j += i * Q),
          (w += (i = t[15]) * D),
          (b += i * z),
          (E += i * M),
          (I += i * U),
          (P += i * k),
          (S += i * $),
          (R += i * H),
          (O += i * V),
          (x += i * K),
          (C += i * B),
          (A += i * J),
          (N += i * F),
          (T += i * W),
          (q += i * Z),
          (j += i * G),
          (L += i * Q),
          (s += 38 * b),
          (o += 38 * E),
          (a += 38 * I),
          (c += 38 * P),
          (h += 38 * S),
          (l += 38 * R),
          (u += 38 * O),
          (p += 38 * x),
          (f += 38 * C),
          (d += 38 * A),
          (g += 38 * N),
          (v += 38 * T),
          (y += 38 * q),
          (m += 38 * j),
          (_ += 38 * L),
          (n = Math.floor((i = s + (n = 1) + 65535) / 65536)),
          (s = i - 65536 * n),
          (n = Math.floor((i = o + n + 65535) / 65536)),
          (o = i - 65536 * n),
          (n = Math.floor((i = a + n + 65535) / 65536)),
          (a = i - 65536 * n),
          (n = Math.floor((i = c + n + 65535) / 65536)),
          (c = i - 65536 * n),
          (n = Math.floor((i = h + n + 65535) / 65536)),
          (h = i - 65536 * n),
          (n = Math.floor((i = l + n + 65535) / 65536)),
          (l = i - 65536 * n),
          (n = Math.floor((i = u + n + 65535) / 65536)),
          (u = i - 65536 * n),
          (n = Math.floor((i = p + n + 65535) / 65536)),
          (p = i - 65536 * n),
          (n = Math.floor((i = f + n + 65535) / 65536)),
          (f = i - 65536 * n),
          (n = Math.floor((i = d + n + 65535) / 65536)),
          (d = i - 65536 * n),
          (n = Math.floor((i = g + n + 65535) / 65536)),
          (g = i - 65536 * n),
          (n = Math.floor((i = v + n + 65535) / 65536)),
          (v = i - 65536 * n),
          (n = Math.floor((i = y + n + 65535) / 65536)),
          (y = i - 65536 * n),
          (n = Math.floor((i = m + n + 65535) / 65536)),
          (m = i - 65536 * n),
          (n = Math.floor((i = _ + n + 65535) / 65536)),
          (_ = i - 65536 * n),
          (n = Math.floor((i = w + n + 65535) / 65536)),
          (w = i - 65536 * n),
          (s += n - 1 + 37 * (n - 1)),
          (n = Math.floor((i = s + (n = 1) + 65535) / 65536)),
          (s = i - 65536 * n),
          (n = Math.floor((i = o + n + 65535) / 65536)),
          (o = i - 65536 * n),
          (n = Math.floor((i = a + n + 65535) / 65536)),
          (a = i - 65536 * n),
          (n = Math.floor((i = c + n + 65535) / 65536)),
          (c = i - 65536 * n),
          (n = Math.floor((i = h + n + 65535) / 65536)),
          (h = i - 65536 * n),
          (n = Math.floor((i = l + n + 65535) / 65536)),
          (l = i - 65536 * n),
          (n = Math.floor((i = u + n + 65535) / 65536)),
          (u = i - 65536 * n),
          (n = Math.floor((i = p + n + 65535) / 65536)),
          (p = i - 65536 * n),
          (n = Math.floor((i = f + n + 65535) / 65536)),
          (f = i - 65536 * n),
          (n = Math.floor((i = d + n + 65535) / 65536)),
          (d = i - 65536 * n),
          (n = Math.floor((i = g + n + 65535) / 65536)),
          (g = i - 65536 * n),
          (n = Math.floor((i = v + n + 65535) / 65536)),
          (v = i - 65536 * n),
          (n = Math.floor((i = y + n + 65535) / 65536)),
          (y = i - 65536 * n),
          (n = Math.floor((i = m + n + 65535) / 65536)),
          (m = i - 65536 * n),
          (n = Math.floor((i = _ + n + 65535) / 65536)),
          (_ = i - 65536 * n),
          (n = Math.floor((i = w + n + 65535) / 65536)),
          (w = i - 65536 * n),
          (s += n - 1 + 37 * (n - 1)),
          (e[0] = s),
          (e[1] = o),
          (e[2] = a),
          (e[3] = c),
          (e[4] = h),
          (e[5] = l),
          (e[6] = u),
          (e[7] = p),
          (e[8] = f),
          (e[9] = d),
          (e[10] = g),
          (e[11] = v),
          (e[12] = y),
          (e[13] = m),
          (e[14] = _),
          (e[15] = w);
      }
      function m(e, t) {
        let r = n(),
          i = n(),
          s = n(),
          o = n(),
          a = n(),
          h = n(),
          l = n(),
          u = n(),
          p = n();
        v(r, e[1], e[0]),
          v(p, t[1], t[0]),
          y(r, r, p),
          g(i, e[0], e[1]),
          g(p, t[0], t[1]),
          y(i, i, p),
          y(s, e[3], t[3]),
          y(s, s, c),
          y(o, e[2], t[2]),
          g(o, o, o),
          v(a, i, r),
          v(h, o, s),
          g(l, o, s),
          g(u, i, r),
          y(e[0], a, h),
          y(e[1], u, l),
          y(e[2], l, h),
          y(e[3], a, u);
      }
      function _(e, t, r) {
        for (let i = 0; i < 4; i++) f(e[i], t[i], r);
      }
      function w(e, t) {
        let r = n(),
          i = n(),
          s = n();
        (function (e, t) {
          let r;
          let i = n();
          for (r = 0; r < 16; r++) i[r] = t[r];
          for (r = 253; r >= 0; r--)
            y(i, i, i), 2 !== r && 4 !== r && y(i, i, t);
          for (r = 0; r < 16; r++) e[r] = i[r];
        })(s, t[2]),
          y(r, t[0], s),
          y(i, t[1], s),
          d(e, i),
          (e[31] ^=
            (function (e) {
              let t = new Uint8Array(32);
              return d(t, e), 1 & t[0];
            })(r) << 7);
      }
      function b(e, t) {
        let r = [n(), n(), n(), n()];
        u(r[0], h),
          u(r[1], l),
          u(r[2], a),
          y(r[3], h, l),
          (function (e, t, r) {
            u(e[0], o), u(e[1], a), u(e[2], a), u(e[3], o);
            for (let i = 255; i >= 0; --i) {
              let n = (r[(i / 8) | 0] >> (7 & i)) & 1;
              _(e, t, n), m(t, e), m(e, e), _(e, t, n);
            }
          })(e, r, t);
      }
      t._w = function (e) {
        if (e.length !== t.aP)
          throw Error(`ed25519: seed must be ${t.aP} bytes`);
        let r = (0, i.hash)(e);
        (r[0] &= 248), (r[31] &= 127), (r[31] |= 64);
        let s = new Uint8Array(32),
          o = [n(), n(), n(), n()];
        b(o, r), w(s, o);
        let a = new Uint8Array(64);
        return a.set(e), a.set(s, 32), { publicKey: s, secretKey: a };
      };
      let E = new Float64Array([
        237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222,
        20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
      ]);
      function I(e, t) {
        let r, i, n, s;
        for (i = 63; i >= 32; --i) {
          for (r = 0, n = i - 32, s = i - 12; n < s; ++n)
            (t[n] += r - 16 * t[i] * E[n - (i - 32)]),
              (r = Math.floor((t[n] + 128) / 256)),
              (t[n] -= 256 * r);
          (t[n] += r), (t[i] = 0);
        }
        for (n = 0, r = 0; n < 32; n++)
          (t[n] += r - (t[31] >> 4) * E[n]), (r = t[n] >> 8), (t[n] &= 255);
        for (n = 0; n < 32; n++) t[n] -= r * E[n];
        for (i = 0; i < 32; i++) (t[i + 1] += t[i] >> 8), (e[i] = 255 & t[i]);
      }
      function P(e) {
        let t = new Float64Array(64);
        for (let r = 0; r < 64; r++) t[r] = e[r];
        for (let t = 0; t < 64; t++) e[t] = 0;
        I(e, t);
      }
      t.Xx = function (e, t) {
        let r = new Float64Array(64),
          s = [n(), n(), n(), n()],
          o = (0, i.hash)(e.subarray(0, 32));
        (o[0] &= 248), (o[31] &= 127), (o[31] |= 64);
        let a = new Uint8Array(64);
        a.set(o.subarray(32), 32);
        let c = new i.SHA512();
        c.update(a.subarray(32)), c.update(t);
        let h = c.digest();
        c.clean(),
          P(h),
          b(s, h),
          w(a, s),
          c.reset(),
          c.update(a.subarray(0, 32)),
          c.update(e.subarray(32)),
          c.update(t);
        let l = c.digest();
        P(l);
        for (let e = 0; e < 32; e++) r[e] = h[e];
        for (let e = 0; e < 32; e++)
          for (let t = 0; t < 32; t++) r[e + t] += l[e] * o[t];
        return I(a.subarray(32), r), a;
      };
    },
    93350: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(98099),
        n = r(17309);
      (t.DIGEST_LENGTH = 64), (t.BLOCK_SIZE = 128);
      var s = (function () {
        function e() {
          (this.digestLength = t.DIGEST_LENGTH),
            (this.blockSize = t.BLOCK_SIZE),
            (this._stateHi = new Int32Array(8)),
            (this._stateLo = new Int32Array(8)),
            (this._tempHi = new Int32Array(16)),
            (this._tempLo = new Int32Array(16)),
            (this._buffer = new Uint8Array(256)),
            (this._bufferLength = 0),
            (this._bytesHashed = 0),
            (this._finished = !1),
            this.reset();
        }
        return (
          (e.prototype._initState = function () {
            (this._stateHi[0] = 1779033703),
              (this._stateHi[1] = 3144134277),
              (this._stateHi[2] = 1013904242),
              (this._stateHi[3] = 2773480762),
              (this._stateHi[4] = 1359893119),
              (this._stateHi[5] = 2600822924),
              (this._stateHi[6] = 528734635),
              (this._stateHi[7] = 1541459225),
              (this._stateLo[0] = 4089235720),
              (this._stateLo[1] = 2227873595),
              (this._stateLo[2] = 4271175723),
              (this._stateLo[3] = 1595750129),
              (this._stateLo[4] = 2917565137),
              (this._stateLo[5] = 725511199),
              (this._stateLo[6] = 4215389547),
              (this._stateLo[7] = 327033209);
          }),
          (e.prototype.reset = function () {
            return (
              this._initState(),
              (this._bufferLength = 0),
              (this._bytesHashed = 0),
              (this._finished = !1),
              this
            );
          }),
          (e.prototype.clean = function () {
            n.wipe(this._buffer),
              n.wipe(this._tempHi),
              n.wipe(this._tempLo),
              this.reset();
          }),
          (e.prototype.update = function (e, r) {
            if ((void 0 === r && (r = e.length), this._finished))
              throw Error("SHA512: can't update because hash was finished.");
            var i = 0;
            if (((this._bytesHashed += r), this._bufferLength > 0)) {
              for (; this._bufferLength < t.BLOCK_SIZE && r > 0; )
                (this._buffer[this._bufferLength++] = e[i++]), r--;
              this._bufferLength === this.blockSize &&
                (a(
                  this._tempHi,
                  this._tempLo,
                  this._stateHi,
                  this._stateLo,
                  this._buffer,
                  0,
                  this.blockSize
                ),
                (this._bufferLength = 0));
            }
            for (
              r >= this.blockSize &&
              ((i = a(
                this._tempHi,
                this._tempLo,
                this._stateHi,
                this._stateLo,
                e,
                i,
                r
              )),
              (r %= this.blockSize));
              r > 0;

            )
              (this._buffer[this._bufferLength++] = e[i++]), r--;
            return this;
          }),
          (e.prototype.finish = function (e) {
            if (!this._finished) {
              var t = this._bytesHashed,
                r = this._bufferLength,
                n = t % 128 < 112 ? 128 : 256;
              this._buffer[r] = 128;
              for (var s = r + 1; s < n - 8; s++) this._buffer[s] = 0;
              i.writeUint32BE((t / 536870912) | 0, this._buffer, n - 8),
                i.writeUint32BE(t << 3, this._buffer, n - 4),
                a(
                  this._tempHi,
                  this._tempLo,
                  this._stateHi,
                  this._stateLo,
                  this._buffer,
                  0,
                  n
                ),
                (this._finished = !0);
            }
            for (var s = 0; s < this.digestLength / 8; s++)
              i.writeUint32BE(this._stateHi[s], e, 8 * s),
                i.writeUint32BE(this._stateLo[s], e, 8 * s + 4);
            return this;
          }),
          (e.prototype.digest = function () {
            var e = new Uint8Array(this.digestLength);
            return this.finish(e), e;
          }),
          (e.prototype.saveState = function () {
            if (this._finished)
              throw Error("SHA256: cannot save finished state");
            return {
              stateHi: new Int32Array(this._stateHi),
              stateLo: new Int32Array(this._stateLo),
              buffer:
                this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
              bufferLength: this._bufferLength,
              bytesHashed: this._bytesHashed,
            };
          }),
          (e.prototype.restoreState = function (e) {
            return (
              this._stateHi.set(e.stateHi),
              this._stateLo.set(e.stateLo),
              (this._bufferLength = e.bufferLength),
              e.buffer && this._buffer.set(e.buffer),
              (this._bytesHashed = e.bytesHashed),
              (this._finished = !1),
              this
            );
          }),
          (e.prototype.cleanSavedState = function (e) {
            n.wipe(e.stateHi),
              n.wipe(e.stateLo),
              e.buffer && n.wipe(e.buffer),
              (e.bufferLength = 0),
              (e.bytesHashed = 0);
          }),
          e
        );
      })();
      t.SHA512 = s;
      var o = new Int32Array([
        1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
        3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
        2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394,
        310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
        1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317,
        3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139,
        264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
        1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
        2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879,
        3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
        113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964,
        773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
        1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142,
        2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273,
        3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344,
        3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720,
        430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593,
        883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403,
        1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
        2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
        2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
        3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
        3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
        174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
        685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
        1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866,
        1607167915, 987167468, 1816402316, 1246189591,
      ]);
      function a(e, t, r, n, s, a, c) {
        for (
          var h,
            l,
            u,
            p,
            f,
            d,
            g,
            v,
            y = r[0],
            m = r[1],
            _ = r[2],
            w = r[3],
            b = r[4],
            E = r[5],
            I = r[6],
            P = r[7],
            S = n[0],
            R = n[1],
            O = n[2],
            x = n[3],
            C = n[4],
            A = n[5],
            N = n[6],
            T = n[7];
          c >= 128;

        ) {
          for (var q = 0; q < 16; q++) {
            var j = 8 * q + a;
            (e[q] = i.readUint32BE(s, j)), (t[q] = i.readUint32BE(s, j + 4));
          }
          for (var q = 0; q < 80; q++) {
            var L = y,
              D = m,
              z = _,
              M = w,
              U = b,
              k = E,
              $ = I,
              H = P,
              V = S,
              K = R,
              B = O,
              J = x,
              F = C,
              W = A,
              Z = N,
              G = T;
            if (
              ((h = P),
              (f = 65535 & (l = T)),
              (d = l >>> 16),
              (g = 65535 & h),
              (v = h >>> 16),
              (h =
                ((b >>> 14) | (C << 18)) ^
                ((b >>> 18) | (C << 14)) ^
                ((C >>> 9) | (b << 23))),
              (f +=
                65535 &
                (l =
                  ((C >>> 14) | (b << 18)) ^
                  ((C >>> 18) | (b << 14)) ^
                  ((b >>> 9) | (C << 23)))),
              (d += l >>> 16),
              (g += 65535 & h),
              (v += h >>> 16),
              (h = (b & E) ^ (~b & I)),
              (f += 65535 & (l = (C & A) ^ (~C & N))),
              (d += l >>> 16),
              (g += 65535 & h),
              (v += h >>> 16),
              (h = o[2 * q]),
              (f += 65535 & (l = o[2 * q + 1])),
              (d += l >>> 16),
              (g += 65535 & h),
              (v += h >>> 16),
              (h = e[q % 16]),
              (f += 65535 & (l = t[q % 16])),
              (d += l >>> 16),
              (g += 65535 & h),
              (v += h >>> 16),
              (d += f >>> 16),
              (g += d >>> 16),
              (v += g >>> 16),
              (u = (65535 & g) | (v << 16)),
              (p = (65535 & f) | (d << 16)),
              (h = u),
              (f = 65535 & (l = p)),
              (d = l >>> 16),
              (g = 65535 & h),
              (v = h >>> 16),
              (h =
                ((y >>> 28) | (S << 4)) ^
                ((S >>> 2) | (y << 30)) ^
                ((S >>> 7) | (y << 25))),
              (f +=
                65535 &
                (l =
                  ((S >>> 28) | (y << 4)) ^
                  ((y >>> 2) | (S << 30)) ^
                  ((y >>> 7) | (S << 25)))),
              (d += l >>> 16),
              (g += 65535 & h),
              (v += h >>> 16),
              (h = (y & m) ^ (y & _) ^ (m & _)),
              (f += 65535 & (l = (S & R) ^ (S & O) ^ (R & O))),
              (d += l >>> 16),
              (g += 65535 & h),
              (v += h >>> 16),
              (d += f >>> 16),
              (g += d >>> 16),
              (v += g >>> 16),
              (H = (65535 & g) | (v << 16)),
              (G = (65535 & f) | (d << 16)),
              (h = M),
              (f = 65535 & (l = J)),
              (d = l >>> 16),
              (g = 65535 & h),
              (v = h >>> 16),
              (h = u),
              (f += 65535 & (l = p)),
              (d += l >>> 16),
              (g += 65535 & h),
              (v += h >>> 16),
              (d += f >>> 16),
              (g += d >>> 16),
              (v += g >>> 16),
              (M = (65535 & g) | (v << 16)),
              (J = (65535 & f) | (d << 16)),
              (m = L),
              (_ = D),
              (w = z),
              (b = M),
              (E = U),
              (I = k),
              (P = $),
              (y = H),
              (R = V),
              (O = K),
              (x = B),
              (C = J),
              (A = F),
              (N = W),
              (T = Z),
              (S = G),
              q % 16 == 15)
            )
              for (var j = 0; j < 16; j++)
                (h = e[j]),
                  (f = 65535 & (l = t[j])),
                  (d = l >>> 16),
                  (g = 65535 & h),
                  (v = h >>> 16),
                  (h = e[(j + 9) % 16]),
                  (f += 65535 & (l = t[(j + 9) % 16])),
                  (d += l >>> 16),
                  (g += 65535 & h),
                  (v += h >>> 16),
                  (h =
                    (((u = e[(j + 1) % 16]) >>> 1) |
                      ((p = t[(j + 1) % 16]) << 31)) ^
                    ((u >>> 8) | (p << 24)) ^
                    (u >>> 7)),
                  (f +=
                    65535 &
                    (l =
                      ((p >>> 1) | (u << 31)) ^
                      ((p >>> 8) | (u << 24)) ^
                      ((p >>> 7) | (u << 25)))),
                  (d += l >>> 16),
                  (g += 65535 & h),
                  (v += h >>> 16),
                  (h =
                    (((u = e[(j + 14) % 16]) >>> 19) |
                      ((p = t[(j + 14) % 16]) << 13)) ^
                    ((p >>> 29) | (u << 3)) ^
                    (u >>> 6)),
                  (f +=
                    65535 &
                    (l =
                      ((p >>> 19) | (u << 13)) ^
                      ((u >>> 29) | (p << 3)) ^
                      ((p >>> 6) | (u << 26)))),
                  (d += l >>> 16),
                  (g += 65535 & h),
                  (v += h >>> 16),
                  (d += f >>> 16),
                  (g += d >>> 16),
                  (v += g >>> 16),
                  (e[j] = (65535 & g) | (v << 16)),
                  (t[j] = (65535 & f) | (d << 16));
          }
          (h = y),
            (f = 65535 & (l = S)),
            (d = l >>> 16),
            (g = 65535 & h),
            (v = h >>> 16),
            (h = r[0]),
            (f += 65535 & (l = n[0])),
            (d += l >>> 16),
            (g += 65535 & h),
            (v += h >>> 16),
            (d += f >>> 16),
            (g += d >>> 16),
            (v += g >>> 16),
            (r[0] = y = (65535 & g) | (v << 16)),
            (n[0] = S = (65535 & f) | (d << 16)),
            (h = m),
            (f = 65535 & (l = R)),
            (d = l >>> 16),
            (g = 65535 & h),
            (v = h >>> 16),
            (h = r[1]),
            (f += 65535 & (l = n[1])),
            (d += l >>> 16),
            (g += 65535 & h),
            (v += h >>> 16),
            (d += f >>> 16),
            (g += d >>> 16),
            (v += g >>> 16),
            (r[1] = m = (65535 & g) | (v << 16)),
            (n[1] = R = (65535 & f) | (d << 16)),
            (h = _),
            (f = 65535 & (l = O)),
            (d = l >>> 16),
            (g = 65535 & h),
            (v = h >>> 16),
            (h = r[2]),
            (f += 65535 & (l = n[2])),
            (d += l >>> 16),
            (g += 65535 & h),
            (v += h >>> 16),
            (d += f >>> 16),
            (g += d >>> 16),
            (v += g >>> 16),
            (r[2] = _ = (65535 & g) | (v << 16)),
            (n[2] = O = (65535 & f) | (d << 16)),
            (h = w),
            (f = 65535 & (l = x)),
            (d = l >>> 16),
            (g = 65535 & h),
            (v = h >>> 16),
            (h = r[3]),
            (f += 65535 & (l = n[3])),
            (d += l >>> 16),
            (g += 65535 & h),
            (v += h >>> 16),
            (d += f >>> 16),
            (g += d >>> 16),
            (v += g >>> 16),
            (r[3] = w = (65535 & g) | (v << 16)),
            (n[3] = x = (65535 & f) | (d << 16)),
            (h = b),
            (f = 65535 & (l = C)),
            (d = l >>> 16),
            (g = 65535 & h),
            (v = h >>> 16),
            (h = r[4]),
            (f += 65535 & (l = n[4])),
            (d += l >>> 16),
            (g += 65535 & h),
            (v += h >>> 16),
            (d += f >>> 16),
            (g += d >>> 16),
            (v += g >>> 16),
            (r[4] = b = (65535 & g) | (v << 16)),
            (n[4] = C = (65535 & f) | (d << 16)),
            (h = E),
            (f = 65535 & (l = A)),
            (d = l >>> 16),
            (g = 65535 & h),
            (v = h >>> 16),
            (h = r[5]),
            (f += 65535 & (l = n[5])),
            (d += l >>> 16),
            (g += 65535 & h),
            (v += h >>> 16),
            (d += f >>> 16),
            (g += d >>> 16),
            (v += g >>> 16),
            (r[5] = E = (65535 & g) | (v << 16)),
            (n[5] = A = (65535 & f) | (d << 16)),
            (h = I),
            (f = 65535 & (l = N)),
            (d = l >>> 16),
            (g = 65535 & h),
            (v = h >>> 16),
            (h = r[6]),
            (f += 65535 & (l = n[6])),
            (d += l >>> 16),
            (g += 65535 & h),
            (v += h >>> 16),
            (d += f >>> 16),
            (g += d >>> 16),
            (v += g >>> 16),
            (r[6] = I = (65535 & g) | (v << 16)),
            (n[6] = N = (65535 & f) | (d << 16)),
            (h = P),
            (f = 65535 & (l = T)),
            (d = l >>> 16),
            (g = 65535 & h),
            (v = h >>> 16),
            (h = r[7]),
            (f += 65535 & (l = n[7])),
            (d += l >>> 16),
            (g += 65535 & h),
            (v += h >>> 16),
            (d += f >>> 16),
            (g += d >>> 16),
            (v += g >>> 16),
            (r[7] = P = (65535 & g) | (v << 16)),
            (n[7] = T = (65535 & f) | (d << 16)),
            (a += 128),
            (c -= 128);
        }
        return a;
      }
      t.hash = function (e) {
        var t = new s();
        t.update(e);
        var r = t.digest();
        return t.clean(), r;
      };
    },
    53049: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          EthereumProvider: function () {
            return i_;
          },
          OPTIONAL_EVENTS: function () {
            return is;
          },
          OPTIONAL_METHODS: function () {
            return ir;
          },
          REQUIRED_EVENTS: function () {
            return ii;
          },
          REQUIRED_METHODS: function () {
            return it;
          },
          default: function () {
            return im;
          },
        });
      var i = r(17187),
        n = r.n(i),
        s = r(50778),
        o = r(85150),
        a = r(90772),
        c = r(9107),
        h = r(38200);
      class l extends h.q {
        constructor(e) {
          super(), (this.opts = e), (this.protocol = "wc"), (this.version = 2);
        }
      }
      class u extends h.q {
        constructor(e, t) {
          super(),
            (this.core = e),
            (this.logger = t),
            (this.records = new Map());
        }
      }
      class p {
        constructor(e, t) {
          (this.logger = e), (this.core = t);
        }
      }
      class f extends h.q {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class d extends h.q {
        constructor(e) {
          super();
        }
      }
      class g {
        constructor(e, t, r, i) {
          (this.core = e), (this.logger = t), (this.name = r);
        }
      }
      class v extends h.q {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class y extends h.q {
        constructor(e, t) {
          super(), (this.core = e), (this.logger = t);
        }
      }
      class m {
        constructor(e, t) {
          (this.projectId = e), (this.logger = t);
        }
      }
      class _ {
        constructor(e) {
          (this.opts = e), (this.protocol = "wc"), (this.version = 2);
        }
      }
      class w {
        constructor(e) {
          this.client = e;
        }
      }
      let b = (e) =>
          JSON.stringify(e, (e, t) =>
            "bigint" == typeof t ? t.toString() + "n" : t
          ),
        E = (e) => {
          let t = e.replace(
            /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
            '$1"$2n"$3'
          );
          return JSON.parse(t, (e, t) => {
            let r = "string" == typeof t && t.match(/^\d+n$/);
            return r ? BigInt(t.substring(0, t.length - 1)) : t;
          });
        };
      var I = r(31050),
        P = r(31416),
        S = r(66736);
      let R = "base64url",
        O = "base58btc";
      var x = r(20605),
        C = r(92263),
        A = r(52217),
        N = r(85094);
      function T(e) {
        return (0, C.B)((0, A.m)((0, N.u)(e), "utf8"), R);
      }
      function q(e) {
        let t = (0, A.m)("K36", O),
          r = "z" + (0, C.B)((0, x.z)([t, e]), O);
        return ["did", "key", r].join(":");
      }
      function j(e = (0, P.randomBytes)(32)) {
        return I._w(e);
      }
      async function L(e, t, r, i, n = (0, S.fromMiliseconds)(Date.now())) {
        var s, o, a;
        let c = { alg: "EdDSA", typ: "JWT" },
          h = q(i.publicKey),
          l = { iss: h, sub: e, aud: t, iat: n, exp: n + r },
          u =
            ((s = { header: c, payload: l }),
            (0, A.m)([T(s.header), T(s.payload)].join("."), "utf8")),
          p = I.Xx(i.secretKey, u);
        return [
          T((o = { header: c, payload: l, signature: p }).header),
          T(o.payload),
          ((a = o.signature), (0, C.B)(a, R)),
        ].join(".");
      }
      r(43014);
      var D = r(37466),
        z = r(46160),
        M = r(15359);
      let U = (e) =>
          JSON.stringify(e, (e, t) =>
            "bigint" == typeof t ? t.toString() + "n" : t
          ),
        k = (e) => {
          let t = e.replace(
            /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
            '$1"$2n"$3'
          );
          return JSON.parse(t, (e, t) => {
            let r = "string" == typeof t && t.match(/^\d+n$/);
            return r ? BigInt(t.substring(0, t.length - 1)) : t;
          });
        };
      var $ = r(94135);
      let H = () =>
          "undefined" != typeof WebSocket ||
          (void 0 !== r.g && void 0 !== r.g.WebSocket) ||
          ("undefined" != typeof window && void 0 !== window.WebSocket) ||
          ("undefined" != typeof self && void 0 !== self.WebSocket),
        V = (e) => e.split("?")[0],
        K =
          "undefined" != typeof WebSocket
            ? WebSocket
            : void 0 !== r.g && void 0 !== r.g.WebSocket
            ? r.g.WebSocket
            : "undefined" != typeof window && void 0 !== window.WebSocket
            ? window.WebSocket
            : "undefined" != typeof self && void 0 !== self.WebSocket
            ? self.WebSocket
            : r(57026);
      var B = class {
          constructor(e) {
            if (
              ((this.url = e),
              (this.events = new i.EventEmitter()),
              (this.registering = !1),
              !(0, $.isWsUrl)(e))
            )
              throw Error(
                `Provided URL is not compatible with WebSocket connection: ${e}`
              );
            this.url = e;
          }
          get connected() {
            return void 0 !== this.socket;
          }
          get connecting() {
            return this.registering;
          }
          on(e, t) {
            this.events.on(e, t);
          }
          once(e, t) {
            this.events.once(e, t);
          }
          off(e, t) {
            this.events.off(e, t);
          }
          removeListener(e, t) {
            this.events.removeListener(e, t);
          }
          async open(e = this.url) {
            await this.register(e);
          }
          async close() {
            return new Promise((e, t) => {
              if (void 0 === this.socket) {
                t(Error("Connection already closed"));
                return;
              }
              (this.socket.onclose = (t) => {
                this.onClose(t), e();
              }),
                this.socket.close();
            });
          }
          async send(e, t) {
            void 0 === this.socket && (this.socket = await this.register());
            try {
              this.socket.send("string" == typeof e ? e : U(e) || "");
            } catch (t) {
              this.onError(e.id, t);
            }
          }
          register(e = this.url) {
            if (!(0, $.isWsUrl)(e))
              throw Error(
                `Provided URL is not compatible with WebSocket connection: ${e}`
              );
            if (this.registering) {
              let e = this.events.getMaxListeners();
              return (
                (this.events.listenerCount("register_error") >= e ||
                  this.events.listenerCount("open") >= e) &&
                  this.events.setMaxListeners(e + 1),
                new Promise((e, t) => {
                  this.events.once("register_error", (e) => {
                    this.resetMaxListeners(), t(e);
                  }),
                    this.events.once("open", () => {
                      if ((this.resetMaxListeners(), void 0 === this.socket))
                        return t(
                          Error("WebSocket connection is missing or invalid")
                        );
                      e(this.socket);
                    });
                })
              );
            }
            return (
              (this.url = e),
              (this.registering = !0),
              new Promise((t, r) => {
                let i = (0, $.isReactNative)()
                    ? void 0
                    : { rejectUnauthorized: !(0, $.isLocalhostUrl)(e) },
                  n = new K(e, [], i);
                H()
                  ? (n.onerror = (e) => {
                      r(this.emitError(e.error));
                    })
                  : n.on("error", (e) => {
                      r(this.emitError(e));
                    }),
                  (n.onopen = () => {
                    this.onOpen(n), t(n);
                  });
              })
            );
          }
          onOpen(e) {
            (e.onmessage = (e) => this.onPayload(e)),
              (e.onclose = (e) => this.onClose(e)),
              (this.socket = e),
              (this.registering = !1),
              this.events.emit("open");
          }
          onClose(e) {
            (this.socket = void 0),
              (this.registering = !1),
              this.events.emit("close", e);
          }
          onPayload(e) {
            if (void 0 === e.data) return;
            let t =
              "string" == typeof e.data
                ? (function (e) {
                    if ("string" != typeof e)
                      throw Error(
                        `Cannot safe json parse value of type ${typeof e}`
                      );
                    try {
                      return k(e);
                    } catch (t) {
                      return e;
                    }
                  })(e.data)
                : e.data;
            this.events.emit("payload", t);
          }
          onError(e, t) {
            let r = this.parseError(t),
              i = r.message || r.toString(),
              n = (0, $.formatJsonRpcError)(e, i);
            this.events.emit("payload", n);
          }
          parseError(e, t = this.url) {
            return (0, $.parseConnectionError)(e, V(t), "WS");
          }
          resetMaxListeners() {
            this.events.getMaxListeners() > 10 &&
              this.events.setMaxListeners(10);
          }
          emitError(e) {
            let t = this.parseError(
              Error(
                (null == e ? void 0 : e.message) ||
                  `WebSocket connection failed for host: ${V(this.url)}`
              )
            );
            return this.events.emit("register_error", t), t;
          }
        },
        J = r(72307),
        F = r.n(J),
        W = r(83454),
        Z = function (e, t) {
          if (e.length >= 255) throw TypeError("Alphabet too long");
          for (var r = new Uint8Array(256), i = 0; i < r.length; i++)
            r[i] = 255;
          for (var n = 0; n < e.length; n++) {
            var s = e.charAt(n),
              o = s.charCodeAt(0);
            if (255 !== r[o]) throw TypeError(s + " is ambiguous");
            r[o] = n;
          }
          var a = e.length,
            c = e.charAt(0),
            h = Math.log(a) / Math.log(256),
            l = Math.log(256) / Math.log(a);
          function u(e) {
            if ("string" != typeof e) throw TypeError("Expected String");
            if (0 === e.length) return new Uint8Array();
            var t = 0;
            if (" " !== e[0]) {
              for (var i = 0, n = 0; e[t] === c; ) i++, t++;
              for (
                var s = ((e.length - t) * h + 1) >>> 0, o = new Uint8Array(s);
                e[t];

              ) {
                var l = r[e.charCodeAt(t)];
                if (255 === l) return;
                for (
                  var u = 0, p = s - 1;
                  (0 !== l || u < n) && -1 !== p;
                  p--, u++
                )
                  (l += (a * o[p]) >>> 0),
                    (o[p] = l % 256 >>> 0),
                    (l = (l / 256) >>> 0);
                if (0 !== l) throw Error("Non-zero carry");
                (n = u), t++;
              }
              if (" " !== e[t]) {
                for (var f = s - n; f !== s && 0 === o[f]; ) f++;
                for (var d = new Uint8Array(i + (s - f)), g = i; f !== s; )
                  d[g++] = o[f++];
                return d;
              }
            }
          }
          return {
            encode: function (t) {
              if (
                (t instanceof Uint8Array ||
                  (ArrayBuffer.isView(t)
                    ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                    : Array.isArray(t) && (t = Uint8Array.from(t))),
                !(t instanceof Uint8Array))
              )
                throw TypeError("Expected Uint8Array");
              if (0 === t.length) return "";
              for (
                var r = 0, i = 0, n = 0, s = t.length;
                n !== s && 0 === t[n];

              )
                n++, r++;
              for (
                var o = ((s - n) * l + 1) >>> 0, h = new Uint8Array(o);
                n !== s;

              ) {
                for (
                  var u = t[n], p = 0, f = o - 1;
                  (0 !== u || p < i) && -1 !== f;
                  f--, p++
                )
                  (u += (256 * h[f]) >>> 0),
                    (h[f] = u % a >>> 0),
                    (u = (u / a) >>> 0);
                if (0 !== u) throw Error("Non-zero carry");
                (i = p), n++;
              }
              for (var d = o - i; d !== o && 0 === h[d]; ) d++;
              for (var g = c.repeat(r); d < o; ++d) g += e.charAt(h[d]);
              return g;
            },
            decodeUnsafe: u,
            decode: function (e) {
              var r = u(e);
              if (r) return r;
              throw Error(`Non-${t} character`);
            },
          };
        };
      let G = (e) => {
          if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
            return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e))
            return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw Error("Unknown type, must be binary type");
        },
        Q = (e) => new TextEncoder().encode(e),
        Y = (e) => new TextDecoder().decode(e);
      class X {
        constructor(e, t, r) {
          (this.name = e), (this.prefix = t), (this.baseEncode = r);
        }
        encode(e) {
          if (e instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(e)}`;
          throw Error("Unknown type, must be binary type");
        }
      }
      class ee {
        constructor(e, t, r) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw Error("Invalid prefix character");
          (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = r);
        }
        decode(e) {
          if ("string" == typeof e) {
            if (e.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                `Unable to decode multibase string ${JSON.stringify(e)}, ${
                  this.name
                } decoder only supports inputs prefixed with ${this.prefix}`
              );
            return this.baseDecode(e.slice(this.prefix.length));
          }
          throw Error("Can only multibase decode strings");
        }
        or(e) {
          return er(this, e);
        }
      }
      class et {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return er(this, e);
        }
        decode(e) {
          let t = e[0],
            r = this.decoders[t];
          if (r) return r.decode(e);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(
              e
            )}, only inputs prefixed with ${Object.keys(
              this.decoders
            )} are supported`
          );
        }
      }
      let er = (e, t) =>
        new et({
          ...(e.decoders || { [e.prefix]: e }),
          ...(t.decoders || { [t.prefix]: t }),
        });
      class ei {
        constructor(e, t, r, i) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = r),
            (this.baseDecode = i),
            (this.encoder = new X(e, t, r)),
            (this.decoder = new ee(e, t, i));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      let en = ({ name: e, prefix: t, encode: r, decode: i }) =>
          new ei(e, t, r, i),
        es = ({ prefix: e, name: t, alphabet: r }) => {
          let { encode: i, decode: n } = Z(r, t);
          return en({ prefix: e, name: t, encode: i, decode: (e) => G(n(e)) });
        },
        eo = (e, t, r, i) => {
          let n = {};
          for (let e = 0; e < t.length; ++e) n[t[e]] = e;
          let s = e.length;
          for (; "=" === e[s - 1]; ) --s;
          let o = new Uint8Array(((s * r) / 8) | 0),
            a = 0,
            c = 0,
            h = 0;
          for (let t = 0; t < s; ++t) {
            let s = n[e[t]];
            if (void 0 === s) throw SyntaxError(`Non-${i} character`);
            (c = (c << r) | s),
              (a += r) >= 8 && ((a -= 8), (o[h++] = 255 & (c >> a)));
          }
          if (a >= r || 255 & (c << (8 - a)))
            throw SyntaxError("Unexpected end of data");
          return o;
        },
        ea = (e, t, r) => {
          let i = "=" === t[t.length - 1],
            n = (1 << r) - 1,
            s = "",
            o = 0,
            a = 0;
          for (let i = 0; i < e.length; ++i)
            for (a = (a << 8) | e[i], o += 8; o > r; )
              (o -= r), (s += t[n & (a >> o)]);
          if ((o && (s += t[n & (a << (r - o))]), i))
            for (; (s.length * r) & 7; ) s += "=";
          return s;
        },
        ec = ({ name: e, prefix: t, bitsPerChar: r, alphabet: i }) =>
          en({
            prefix: t,
            name: e,
            encode: (e) => ea(e, i, r),
            decode: (t) => eo(t, i, r, e),
          }),
        eh = en({
          prefix: "\x00",
          name: "identity",
          encode: (e) => Y(e),
          decode: (e) => Q(e),
        });
      var el = Object.freeze({ __proto__: null, identity: eh });
      let eu = ec({
        prefix: "0",
        name: "base2",
        alphabet: "01",
        bitsPerChar: 1,
      });
      var ep = Object.freeze({ __proto__: null, base2: eu });
      let ef = ec({
        prefix: "7",
        name: "base8",
        alphabet: "01234567",
        bitsPerChar: 3,
      });
      var ed = Object.freeze({ __proto__: null, base8: ef });
      let eg = es({ prefix: "9", name: "base10", alphabet: "0123456789" });
      var ev = Object.freeze({ __proto__: null, base10: eg });
      let ey = ec({
          prefix: "f",
          name: "base16",
          alphabet: "0123456789abcdef",
          bitsPerChar: 4,
        }),
        em = ec({
          prefix: "F",
          name: "base16upper",
          alphabet: "0123456789ABCDEF",
          bitsPerChar: 4,
        });
      var e_ = Object.freeze({ __proto__: null, base16: ey, base16upper: em });
      let ew = ec({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        eb = ec({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        eE = ec({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        eI = ec({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        eP = ec({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        eS = ec({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        }),
        eR = ec({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5,
        }),
        eO = ec({
          prefix: "T",
          name: "base32hexpadupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
          bitsPerChar: 5,
        }),
        ex = ec({
          prefix: "h",
          name: "base32z",
          alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
          bitsPerChar: 5,
        });
      var eC = Object.freeze({
        __proto__: null,
        base32: ew,
        base32upper: eb,
        base32pad: eE,
        base32padupper: eI,
        base32hex: eP,
        base32hexupper: eS,
        base32hexpad: eR,
        base32hexpadupper: eO,
        base32z: ex,
      });
      let eA = es({
          prefix: "k",
          name: "base36",
          alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
        }),
        eN = es({
          prefix: "K",
          name: "base36upper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        });
      var eT = Object.freeze({ __proto__: null, base36: eA, base36upper: eN });
      let eq = es({
          name: "base58btc",
          prefix: "z",
          alphabet:
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        }),
        ej = es({
          name: "base58flickr",
          prefix: "Z",
          alphabet:
            "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
        });
      var eL = Object.freeze({
        __proto__: null,
        base58btc: eq,
        base58flickr: ej,
      });
      let eD = ec({
          prefix: "m",
          name: "base64",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6,
        }),
        ez = ec({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        }),
        eM = ec({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        eU = ec({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        });
      var ek = Object.freeze({
        __proto__: null,
        base64: eD,
        base64pad: ez,
        base64url: eM,
        base64urlpad: eU,
      });
      let e$ = Array.from(
          "\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"
        ),
        eH = e$.reduce((e, t, r) => ((e[r] = t), e), []),
        eV = e$.reduce((e, t, r) => ((e[t.codePointAt(0)] = r), e), []),
        eK = en({
          prefix: "\uD83D\uDE80",
          name: "base256emoji",
          encode: function (e) {
            return e.reduce((e, t) => (e += eH[t]), "");
          },
          decode: function (e) {
            let t = [];
            for (let r of e) {
              let e = eV[r.codePointAt(0)];
              if (void 0 === e) throw Error(`Non-base256emoji character: ${r}`);
              t.push(e);
            }
            return new Uint8Array(t);
          },
        });
      var eB = Object.freeze({ __proto__: null, base256emoji: eK });
      function eJ(e, t, r) {
        (t = t || []), (r = r || 0);
        for (var i = r; e >= 2147483648; )
          (t[r++] = (255 & e) | 128), (e /= 128);
        for (; -128 & e; ) (t[r++] = (255 & e) | 128), (e >>>= 7);
        return (t[r] = 0 | e), (eJ.bytes = r - i + 1), t;
      }
      function eF(e, t) {
        var r,
          i = 0,
          t = t || 0,
          n = 0,
          s = t,
          o = e.length;
        do {
          if (s >= o)
            throw ((eF.bytes = 0), RangeError("Could not decode varint"));
          (r = e[s++]),
            (i += n < 28 ? (127 & r) << n : (127 & r) * Math.pow(2, n)),
            (n += 7);
        } while (r >= 128);
        return (eF.bytes = s - t), i;
      }
      var eW = {
        encode: eJ,
        decode: eF,
        encodingLength: function (e) {
          return e < 128
            ? 1
            : e < 16384
            ? 2
            : e < 2097152
            ? 3
            : e < 268435456
            ? 4
            : e < 34359738368
            ? 5
            : e < 4398046511104
            ? 6
            : e < 562949953421312
            ? 7
            : e < 72057594037927940
            ? 8
            : e < 0x7fffffffffffffff
            ? 9
            : 10;
        },
      };
      let eZ = (e, t, r = 0) => (eW.encode(e, t, r), t),
        eG = (e) => eW.encodingLength(e),
        eQ = (e, t) => {
          let r = t.byteLength,
            i = eG(e),
            n = i + eG(r),
            s = new Uint8Array(n + r);
          return eZ(e, s, 0), eZ(r, s, i), s.set(t, n), new eY(e, r, t, s);
        };
      class eY {
        constructor(e, t, r, i) {
          (this.code = e), (this.size = t), (this.digest = r), (this.bytes = i);
        }
      }
      let eX = ({ name: e, code: t, encode: r }) => new e0(e, t, r);
      class e0 {
        constructor(e, t, r) {
          (this.name = e), (this.code = t), (this.encode = r);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            let t = this.encode(e);
            return t instanceof Uint8Array
              ? eQ(this.code, t)
              : t.then((e) => eQ(this.code, e));
          }
          throw Error("Unknown type, must be binary type");
        }
      }
      let e1 = (e) => async (t) =>
          new Uint8Array(await crypto.subtle.digest(e, t)),
        e5 = eX({ name: "sha2-256", code: 18, encode: e1("SHA-256") }),
        e6 = eX({ name: "sha2-512", code: 19, encode: e1("SHA-512") });
      var e3 = Object.freeze({ __proto__: null, sha256: e5, sha512: e6 });
      let e2 = (e) => eQ(0, G(e));
      var e9 = Object.freeze({
        __proto__: null,
        identity: { code: 0, name: "identity", encode: G, digest: e2 },
      });
      new TextEncoder(), new TextDecoder();
      let e4 = {
        ...el,
        ...ep,
        ...ed,
        ...ev,
        ...e_,
        ...eC,
        ...eT,
        ...eL,
        ...ek,
        ...eB,
      };
      function e7(e) {
        return null != globalThis.Buffer
          ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
          : e;
      }
      function e8(e, t, r, i) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: r },
          decoder: { decode: i },
        };
      }
      ({ ...e3, ...e9 });
      let te = e8(
          "utf8",
          "u",
          (e) => "u" + new TextDecoder("utf8").decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        tt = e8(
          "ascii",
          "a",
          (e) => {
            let t = "a";
            for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
            return t;
          },
          (e) => {
            e = e.substring(1);
            let t = (function (e = 0) {
              return null != globalThis.Buffer &&
                null != globalThis.Buffer.allocUnsafe
                ? e7(globalThis.Buffer.allocUnsafe(e))
                : new Uint8Array(e);
            })(e.length);
            for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t;
          }
        ),
        tr = {
          utf8: te,
          "utf-8": te,
          hex: e4.base16,
          latin1: tt,
          ascii: tt,
          binary: tt,
          ...e4,
        },
        ti = "core",
        tn = `wc@2:${ti}:`,
        ts = { name: ti, logger: "error" },
        to = { database: ":memory:" },
        ta = "client_ed25519_seed",
        tc = S.ONE_DAY,
        th = S.SIX_HOURS,
        tl = "wss://relay.walletconnect.com",
        tu = "wss://relay.walletconnect.org",
        tp = {
          message: "relayer_message",
          message_ack: "relayer_message_ack",
          connect: "relayer_connect",
          disconnect: "relayer_disconnect",
          error: "relayer_error",
          connection_stalled: "relayer_connection_stalled",
          transport_closed: "relayer_transport_closed",
          publish: "relayer_publish",
        },
        tf = {
          payload: "payload",
          connect: "connect",
          disconnect: "disconnect",
          error: "error",
        },
        td = S.ONE_SECOND,
        tg = {
          created: "subscription_created",
          deleted: "subscription_deleted",
          expired: "subscription_expired",
          disabled: "subscription_disabled",
          sync: "subscription_sync",
          resubscribed: "subscription_resubscribed",
        },
        tv = 1e3 * S.FIVE_SECONDS,
        ty = {
          wc_pairingDelete: {
            req: { ttl: S.ONE_DAY, prompt: !1, tag: 1e3 },
            res: { ttl: S.ONE_DAY, prompt: !1, tag: 1001 },
          },
          wc_pairingPing: {
            req: { ttl: S.THIRTY_SECONDS, prompt: !1, tag: 1002 },
            res: { ttl: S.THIRTY_SECONDS, prompt: !1, tag: 1003 },
          },
          unregistered_method: {
            req: { ttl: S.ONE_DAY, prompt: !1, tag: 0 },
            res: { ttl: S.ONE_DAY, prompt: !1, tag: 0 },
          },
        },
        tm = {
          create: "pairing_create",
          expire: "pairing_expire",
          delete: "pairing_delete",
          ping: "pairing_ping",
        },
        t_ = {
          created: "history_created",
          updated: "history_updated",
          deleted: "history_deleted",
          sync: "history_sync",
        },
        tw = {
          created: "expirer_created",
          deleted: "expirer_deleted",
          expired: "expirer_expired",
          sync: "expirer_sync",
        },
        tb = "verify-api",
        tE = "https://verify.walletconnect.com",
        tI = "https://verify.walletconnect.org";
      class tP {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            (this.keychain = new Map()),
            (this.name = "keychain"),
            (this.version = "0.3"),
            (this.initialized = !1),
            (this.storagePrefix = tn),
            (this.init = async () => {
              if (!this.initialized) {
                let e = await this.getKeyChain();
                "u" > typeof e && (this.keychain = e), (this.initialized = !0);
              }
            }),
            (this.has = (e) => (this.isInitialized(), this.keychain.has(e))),
            (this.set = async (e, t) => {
              this.isInitialized(),
                this.keychain.set(e, t),
                await this.persist();
            }),
            (this.get = (e) => {
              this.isInitialized();
              let t = this.keychain.get(e);
              if (typeof t > "u") {
                let { message: t } = (0, s.Z7)(
                  "NO_MATCHING_KEY",
                  `${this.name}: ${e}`
                );
                throw Error(t);
              }
              return t;
            }),
            (this.del = async (e) => {
              this.isInitialized(),
                this.keychain.delete(e),
                await this.persist();
            }),
            (this.core = e),
            (this.logger = (0, c.generateChildLogger)(t, this.name));
        }
        get context() {
          return (0, c.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + "//" + this.name;
        }
        async setKeyChain(e) {
          await this.core.storage.setItem(this.storageKey, (0, s.KC)(e));
        }
        async getKeyChain() {
          let e = await this.core.storage.getItem(this.storageKey);
          return "u" > typeof e ? (0, s.IP)(e) : void 0;
        }
        async persist() {
          await this.setKeyChain(this.keychain);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, s.Z7)("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      class tS {
        constructor(e, t, r) {
          (this.core = e),
            (this.logger = t),
            (this.name = "crypto"),
            (this.initialized = !1),
            (this.init = async () => {
              this.initialized ||
                (await this.keychain.init(), (this.initialized = !0));
            }),
            (this.hasKeys = (e) => (
              this.isInitialized(), this.keychain.has(e)
            )),
            (this.getClientId = async () => {
              this.isInitialized();
              let e = await this.getClientSeed(),
                t = j(e);
              return q(t.publicKey);
            }),
            (this.generateKeyPair = () => {
              this.isInitialized();
              let e = (0, s.Au)();
              return this.setPrivateKey(e.publicKey, e.privateKey);
            }),
            (this.signJWT = async (e) => {
              this.isInitialized();
              let t = await this.getClientSeed(),
                r = j(t),
                i = (0, s.jd)();
              return await L(i, e, tc, r);
            }),
            (this.generateSharedKey = (e, t, r) => {
              this.isInitialized();
              let i = this.getPrivateKey(e),
                n = (0, s.m$)(i, t);
              return this.setSymKey(n, r);
            }),
            (this.setSymKey = async (e, t) => {
              this.isInitialized();
              let r = t || (0, s.Ym)(e);
              return await this.keychain.set(r, e), r;
            }),
            (this.deleteKeyPair = async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            (this.deleteSymKey = async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            (this.encode = async (e, t, r) => {
              this.isInitialized();
              let i = (0, s.EN)(r),
                n = "string" == typeof t ? t : b(t) || "";
              if ((0, s.Q8)(i)) {
                let t = i.senderPublicKey,
                  r = i.receiverPublicKey;
                e = await this.generateSharedKey(t, r);
              }
              let o = this.getSymKey(e),
                { type: a, senderPublicKey: c } = i;
              return (0, s.HI)({
                type: a,
                symKey: o,
                message: n,
                senderPublicKey: c,
              });
            }),
            (this.decode = async (e, t, r) => {
              this.isInitialized();
              let i = (0, s.Ll)(t, r);
              if ((0, s.Q8)(i)) {
                let t = i.receiverPublicKey,
                  r = i.senderPublicKey;
                e = await this.generateSharedKey(t, r);
              }
              try {
                let r = this.getSymKey(e),
                  i = (0, s.pe)({ symKey: r, encoded: t });
                return (function (e) {
                  if ("string" != typeof e)
                    throw Error(
                      `Cannot safe json parse value of type ${typeof e}`
                    );
                  try {
                    return E(e);
                  } catch (t) {
                    return e;
                  }
                })(i);
              } catch (t) {
                this.logger.error(
                  `Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`
                ),
                  this.logger.error(t);
              }
            }),
            (this.getPayloadType = (e) => {
              let t = (0, s.vB)(e);
              return (0, s.WG)(t.type);
            }),
            (this.getPayloadSenderPublicKey = (e) => {
              let t = (0, s.vB)(e);
              return t.senderPublicKey
                ? (0, D.BB)(t.senderPublicKey, s.AW)
                : void 0;
            }),
            (this.core = e),
            (this.logger = (0, c.generateChildLogger)(t, this.name)),
            (this.keychain = r || new tP(this.core, this.logger));
        }
        get context() {
          return (0, c.getLoggerContext)(this.logger);
        }
        async setPrivateKey(e, t) {
          return await this.keychain.set(e, t), e;
        }
        getPrivateKey(e) {
          return this.keychain.get(e);
        }
        async getClientSeed() {
          let e = "";
          try {
            e = this.keychain.get(ta);
          } catch {
            (e = (0, s.jd)()), await this.keychain.set(ta, e);
          }
          return (function (e, t = "utf8") {
            let r = tr[t];
            if (!r) throw Error(`Unsupported encoding "${t}"`);
            return ("utf8" === t || "utf-8" === t) &&
              null != globalThis.Buffer &&
              null != globalThis.Buffer.from
              ? e7(globalThis.Buffer.from(e, "utf-8"))
              : r.decoder.decode(`${r.prefix}${e}`);
          })(e, "base16");
        }
        getSymKey(e) {
          return this.keychain.get(e);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, s.Z7)("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      class tR extends p {
        constructor(e, t) {
          super(e, t),
            (this.logger = e),
            (this.core = t),
            (this.messages = new Map()),
            (this.name = "messages"),
            (this.version = "0.3"),
            (this.initialized = !1),
            (this.storagePrefix = tn),
            (this.init = async () => {
              if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                  let e = await this.getRelayerMessages();
                  "u" > typeof e && (this.messages = e),
                    this.logger.debug(
                      `Successfully Restored records for ${this.name}`
                    ),
                    this.logger.trace({
                      type: "method",
                      method: "restore",
                      size: this.messages.size,
                    });
                } catch (e) {
                  this.logger.debug(
                    `Failed to Restore records for ${this.name}`
                  ),
                    this.logger.error(e);
                } finally {
                  this.initialized = !0;
                }
              }
            }),
            (this.set = async (e, t) => {
              this.isInitialized();
              let r = (0, s.rj)(t),
                i = this.messages.get(e);
              return (
                typeof i > "u" && (i = {}),
                "u" > typeof i[r] ||
                  ((i[r] = t), this.messages.set(e, i), await this.persist()),
                r
              );
            }),
            (this.get = (e) => {
              this.isInitialized();
              let t = this.messages.get(e);
              return typeof t > "u" && (t = {}), t;
            }),
            (this.has = (e, t) => {
              this.isInitialized();
              let r = this.get(e),
                i = (0, s.rj)(t);
              return "u" > typeof r[i];
            }),
            (this.del = async (e) => {
              this.isInitialized(),
                this.messages.delete(e),
                await this.persist();
            }),
            (this.logger = (0, c.generateChildLogger)(e, this.name)),
            (this.core = t);
        }
        get context() {
          return (0, c.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + "//" + this.name;
        }
        async setRelayerMessages(e) {
          await this.core.storage.setItem(this.storageKey, (0, s.KC)(e));
        }
        async getRelayerMessages() {
          let e = await this.core.storage.getItem(this.storageKey);
          return "u" > typeof e ? (0, s.IP)(e) : void 0;
        }
        async persist() {
          await this.setRelayerMessages(this.messages);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, s.Z7)("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      class tO extends f {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            (this.events = new i.EventEmitter()),
            (this.name = "publisher"),
            (this.queue = new Map()),
            (this.publishTimeout = (0, S.toMiliseconds)(S.TEN_SECONDS)),
            (this.needsTransportRestart = !1),
            (this.publish = async (e, t, r) => {
              var i;
              this.logger.debug("Publishing Payload"),
                this.logger.trace({
                  type: "method",
                  method: "publish",
                  params: { topic: e, message: t, opts: r },
                });
              try {
                let n = r?.ttl || th,
                  o = (0, s._H)(r),
                  a = r?.prompt || !1,
                  c = r?.tag || 0,
                  h = r?.id || (0, M.getBigIntRpcId)().toString(),
                  l = {
                    topic: e,
                    message: t,
                    opts: { ttl: n, relay: o, prompt: a, tag: c, id: h },
                  },
                  u = setTimeout(
                    () => this.queue.set(h, l),
                    this.publishTimeout
                  );
                try {
                  await await (0, s.hF)(
                    this.rpcPublish(e, t, n, o, a, c, h),
                    this.publishTimeout,
                    "Failed to publish payload, please try again."
                  ),
                    this.removeRequestFromQueue(h),
                    this.relayer.events.emit(tp.publish, l);
                } catch (e) {
                  if (
                    (this.logger.debug("Publishing Payload stalled"),
                    (this.needsTransportRestart = !0),
                    null != (i = r?.internal) && i.throwOnFailedPublish)
                  )
                    throw (this.removeRequestFromQueue(h), e);
                  return;
                } finally {
                  clearTimeout(u);
                }
                this.logger.debug("Successfully Published Payload"),
                  this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: { topic: e, message: t, opts: r },
                  });
              } catch (e) {
                throw (
                  (this.logger.debug("Failed to Publish Payload"),
                  this.logger.error(e),
                  e)
                );
              }
            }),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.relayer = e),
            (this.logger = (0, c.generateChildLogger)(t, this.name)),
            this.registerEventListeners();
        }
        get context() {
          return (0, c.getLoggerContext)(this.logger);
        }
        rpcPublish(e, t, r, i, n, o, a) {
          var c, h, l, u;
          let p = {
            method: (0, s.cO)(i.protocol).publish,
            params: { topic: e, message: t, ttl: r, prompt: n, tag: o },
            id: a,
          };
          return (
            (0, s.o8)(null == (c = p.params) ? void 0 : c.prompt) &&
              (null == (h = p.params) || delete h.prompt),
            (0, s.o8)(null == (l = p.params) ? void 0 : l.tag) &&
              (null == (u = p.params) || delete u.tag),
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "message",
              direction: "outgoing",
              request: p,
            }),
            this.relayer.request(p)
          );
        }
        removeRequestFromQueue(e) {
          this.queue.delete(e);
        }
        checkQueue() {
          this.queue.forEach(async (e) => {
            let { topic: t, message: r, opts: i } = e;
            await this.publish(t, r, i);
          });
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(a.HEARTBEAT_EVENTS.pulse, () => {
            if (this.needsTransportRestart) {
              (this.needsTransportRestart = !1),
                this.relayer.events.emit(tp.connection_stalled);
              return;
            }
            this.checkQueue();
          }),
            this.relayer.on(tp.message_ack, (e) => {
              this.removeRequestFromQueue(e.id.toString());
            });
        }
      }
      class tx {
        constructor() {
          (this.map = new Map()),
            (this.set = (e, t) => {
              let r = this.get(e);
              this.exists(e, t) || this.map.set(e, [...r, t]);
            }),
            (this.get = (e) => this.map.get(e) || []),
            (this.exists = (e, t) => this.get(e).includes(t)),
            (this.delete = (e, t) => {
              if (typeof t > "u") {
                this.map.delete(e);
                return;
              }
              if (!this.map.has(e)) return;
              let r = this.get(e);
              if (!this.exists(e, t)) return;
              let i = r.filter((e) => e !== t);
              if (!i.length) {
                this.map.delete(e);
                return;
              }
              this.map.set(e, i);
            }),
            (this.clear = () => {
              this.map.clear();
            });
        }
        get topics() {
          return Array.from(this.map.keys());
        }
      }
      var tC = Object.defineProperty,
        tA = Object.defineProperties,
        tN = Object.getOwnPropertyDescriptors,
        tT = Object.getOwnPropertySymbols,
        tq = Object.prototype.hasOwnProperty,
        tj = Object.prototype.propertyIsEnumerable,
        tL = (e, t, r) =>
          t in e
            ? tC(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        tD = (e, t) => {
          for (var r in t || (t = {})) tq.call(t, r) && tL(e, r, t[r]);
          if (tT) for (var r of tT(t)) tj.call(t, r) && tL(e, r, t[r]);
          return e;
        },
        tz = (e, t) => tA(e, tN(t));
      class tM extends v {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            (this.subscriptions = new Map()),
            (this.topicMap = new tx()),
            (this.events = new i.EventEmitter()),
            (this.name = "subscription"),
            (this.version = "0.3"),
            (this.pending = new Map()),
            (this.cached = []),
            (this.initialized = !1),
            (this.pendingSubscriptionWatchLabel = "pending_sub_watch_label"),
            (this.pollingInterval = 20),
            (this.storagePrefix = tn),
            (this.subscribeTimeout = 1e4),
            (this.restartInProgress = !1),
            (this.batchSubscribeTopicsLimit = 500),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                this.registerEventListeners(),
                (this.clientId = await this.relayer.core.crypto.getClientId()));
            }),
            (this.subscribe = async (e, t) => {
              await this.restartToComplete(),
                this.isInitialized(),
                this.logger.debug("Subscribing Topic"),
                this.logger.trace({
                  type: "method",
                  method: "subscribe",
                  params: { topic: e, opts: t },
                });
              try {
                let r = (0, s._H)(t),
                  i = { topic: e, relay: r };
                this.pending.set(e, i);
                let n = await this.rpcSubscribe(e, r);
                return (
                  this.onSubscribe(n, i),
                  this.logger.debug("Successfully Subscribed Topic"),
                  this.logger.trace({
                    type: "method",
                    method: "subscribe",
                    params: { topic: e, opts: t },
                  }),
                  n
                );
              } catch (e) {
                throw (
                  (this.logger.debug("Failed to Subscribe Topic"),
                  this.logger.error(e),
                  e)
                );
              }
            }),
            (this.unsubscribe = async (e, t) => {
              await this.restartToComplete(),
                this.isInitialized(),
                "u" > typeof t?.id
                  ? await this.unsubscribeById(e, t.id, t)
                  : await this.unsubscribeByTopic(e, t);
            }),
            (this.isSubscribed = async (e) =>
              !!this.topics.includes(e) ||
              (await new Promise((t, r) => {
                let i = new S.Watch();
                i.start(this.pendingSubscriptionWatchLabel);
                let n = setInterval(() => {
                  !this.pending.has(e) &&
                    this.topics.includes(e) &&
                    (clearInterval(n),
                    i.stop(this.pendingSubscriptionWatchLabel),
                    t(!0)),
                    i.elapsed(this.pendingSubscriptionWatchLabel) >= tv &&
                      (clearInterval(n),
                      i.stop(this.pendingSubscriptionWatchLabel),
                      r(Error("Subscription resolution timeout")));
                }, this.pollingInterval);
              }).catch(() => !1))),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.restart = async () => {
              (this.restartInProgress = !0),
                await this.restore(),
                await this.reset(),
                (this.restartInProgress = !1);
            }),
            (this.relayer = e),
            (this.logger = (0, c.generateChildLogger)(t, this.name)),
            (this.clientId = "");
        }
        get context() {
          return (0, c.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + "//" + this.name;
        }
        get length() {
          return this.subscriptions.size;
        }
        get ids() {
          return Array.from(this.subscriptions.keys());
        }
        get values() {
          return Array.from(this.subscriptions.values());
        }
        get topics() {
          return this.topicMap.topics;
        }
        hasSubscription(e, t) {
          let r = !1;
          try {
            r = this.getSubscription(e).topic === t;
          } catch {}
          return r;
        }
        onEnable() {
          (this.cached = []), (this.initialized = !0);
        }
        onDisable() {
          (this.cached = this.values),
            this.subscriptions.clear(),
            this.topicMap.clear();
        }
        async unsubscribeByTopic(e, t) {
          let r = this.topicMap.get(e);
          await Promise.all(
            r.map(async (r) => await this.unsubscribeById(e, r, t))
          );
        }
        async unsubscribeById(e, t, r) {
          this.logger.debug("Unsubscribing Topic"),
            this.logger.trace({
              type: "method",
              method: "unsubscribe",
              params: { topic: e, id: t, opts: r },
            });
          try {
            let i = (0, s._H)(r);
            await this.rpcUnsubscribe(e, t, i);
            let n = (0, s.D6)("USER_DISCONNECTED", `${this.name}, ${e}`);
            await this.onUnsubscribe(e, t, n),
              this.logger.debug("Successfully Unsubscribed Topic"),
              this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: { topic: e, id: t, opts: r },
              });
          } catch (e) {
            throw (
              (this.logger.debug("Failed to Unsubscribe Topic"),
              this.logger.error(e),
              e)
            );
          }
        }
        async rpcSubscribe(e, t) {
          let r = {
            method: (0, s.cO)(t.protocol).subscribe,
            params: { topic: e },
          };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: r,
            });
          try {
            await await (0, s.hF)(
              this.relayer.request(r),
              this.subscribeTimeout
            );
          } catch {
            this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
              this.relayer.events.emit(tp.connection_stalled);
          }
          return (0, s.rj)(e + this.clientId);
        }
        async rpcBatchSubscribe(e) {
          if (!e.length) return;
          let t = e[0].relay,
            r = {
              method: (0, s.cO)(t.protocol).batchSubscribe,
              params: { topics: e.map((e) => e.topic) },
            };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: r,
            });
          try {
            return await await (0, s.hF)(
              this.relayer.request(r),
              this.subscribeTimeout
            );
          } catch {
            this.logger.debug("Outgoing Relay Payload stalled"),
              this.relayer.events.emit(tp.connection_stalled);
          }
        }
        rpcUnsubscribe(e, t, r) {
          let i = {
            method: (0, s.cO)(r.protocol).unsubscribe,
            params: { topic: e, id: t },
          };
          return (
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: i,
            }),
            this.relayer.request(i)
          );
        }
        onSubscribe(e, t) {
          this.setSubscription(e, tz(tD({}, t), { id: e })),
            this.pending.delete(t.topic);
        }
        onBatchSubscribe(e) {
          e.length &&
            e.forEach((e) => {
              this.setSubscription(e.id, tD({}, e)),
                this.pending.delete(e.topic);
            });
        }
        async onUnsubscribe(e, t, r) {
          this.events.removeAllListeners(t),
            this.hasSubscription(t, e) && this.deleteSubscription(t, r),
            await this.relayer.messages.del(e);
        }
        async setRelayerSubscriptions(e) {
          await this.relayer.core.storage.setItem(this.storageKey, e);
        }
        async getRelayerSubscriptions() {
          return await this.relayer.core.storage.getItem(this.storageKey);
        }
        setSubscription(e, t) {
          this.subscriptions.has(e) ||
            (this.logger.debug("Setting subscription"),
            this.logger.trace({
              type: "method",
              method: "setSubscription",
              id: e,
              subscription: t,
            }),
            this.addSubscription(e, t));
        }
        addSubscription(e, t) {
          this.subscriptions.set(e, tD({}, t)),
            this.topicMap.set(t.topic, e),
            this.events.emit(tg.created, t);
        }
        getSubscription(e) {
          this.logger.debug("Getting subscription"),
            this.logger.trace({
              type: "method",
              method: "getSubscription",
              id: e,
            });
          let t = this.subscriptions.get(e);
          if (!t) {
            let { message: t } = (0, s.Z7)(
              "NO_MATCHING_KEY",
              `${this.name}: ${e}`
            );
            throw Error(t);
          }
          return t;
        }
        deleteSubscription(e, t) {
          this.logger.debug("Deleting subscription"),
            this.logger.trace({
              type: "method",
              method: "deleteSubscription",
              id: e,
              reason: t,
            });
          let r = this.getSubscription(e);
          this.subscriptions.delete(e),
            this.topicMap.delete(r.topic, e),
            this.events.emit(tg.deleted, tz(tD({}, r), { reason: t }));
        }
        async persist() {
          await this.setRelayerSubscriptions(this.values),
            this.events.emit(tg.sync);
        }
        async reset() {
          if (this.cached.length) {
            let e = Math.ceil(
              this.cached.length / this.batchSubscribeTopicsLimit
            );
            for (let t = 0; t < e; t++) {
              let e = this.cached.splice(0, this.batchSubscribeTopicsLimit);
              await this.batchSubscribe(e);
            }
          }
          this.events.emit(tg.resubscribed);
        }
        async restore() {
          try {
            let e = await this.getRelayerSubscriptions();
            if (typeof e > "u" || !e.length) return;
            if (this.subscriptions.size) {
              let { message: e } = (0, s.Z7)(
                "RESTORE_WILL_OVERRIDE",
                this.name
              );
              throw (
                (this.logger.error(e),
                this.logger.error(
                  `${this.name}: ${JSON.stringify(this.values)}`
                ),
                Error(e))
              );
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored subscriptions for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                subscriptions: this.values,
              });
          } catch (e) {
            this.logger.debug(
              `Failed to Restore subscriptions for ${this.name}`
            ),
              this.logger.error(e);
          }
        }
        async batchSubscribe(e) {
          if (!e.length) return;
          let t = await this.rpcBatchSubscribe(e);
          (0, s.qt)(t) &&
            this.onBatchSubscribe(t.map((t, r) => tz(tD({}, e[r]), { id: t })));
        }
        async onConnect() {
          this.restartInProgress || (await this.restart(), this.onEnable());
        }
        onDisconnect() {
          this.onDisable();
        }
        async checkPending() {
          if (!this.initialized || this.relayer.transportExplicitlyClosed)
            return;
          let e = [];
          this.pending.forEach((t) => {
            e.push(t);
          }),
            await this.batchSubscribe(e);
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(a.HEARTBEAT_EVENTS.pulse, async () => {
            await this.checkPending();
          }),
            this.relayer.on(tp.connect, async () => {
              await this.onConnect();
            }),
            this.relayer.on(tp.disconnect, () => {
              this.onDisconnect();
            }),
            this.events.on(tg.created, async (e) => {
              let t = tg.created;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                await this.persist();
            }),
            this.events.on(tg.deleted, async (e) => {
              let t = tg.deleted;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                await this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, s.Z7)("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
        async restartToComplete() {
          this.restartInProgress &&
            (await new Promise((e) => {
              let t = setInterval(() => {
                this.restartInProgress || (clearInterval(t), e());
              }, this.pollingInterval);
            }));
        }
      }
      var tU = Object.defineProperty,
        tk = Object.getOwnPropertySymbols,
        t$ = Object.prototype.hasOwnProperty,
        tH = Object.prototype.propertyIsEnumerable,
        tV = (e, t, r) =>
          t in e
            ? tU(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        tK = (e, t) => {
          for (var r in t || (t = {})) t$.call(t, r) && tV(e, r, t[r]);
          if (tk) for (var r of tk(t)) tH.call(t, r) && tV(e, r, t[r]);
          return e;
        };
      class tB extends d {
        constructor(e) {
          super(e),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.events = new i.EventEmitter()),
            (this.name = "relayer"),
            (this.transportExplicitlyClosed = !1),
            (this.initialized = !1),
            (this.connectionAttemptInProgress = !1),
            (this.connectionStatusPollingInterval = 20),
            (this.staleConnectionErrors = ["socket hang up", "socket stalled"]),
            (this.hasExperiencedNetworkDisruption = !1),
            (this.request = async (e) => {
              this.logger.debug("Publishing Request Payload");
              try {
                return (
                  await this.toEstablishConnection(),
                  await this.provider.request(e)
                );
              } catch (e) {
                throw (
                  (this.logger.debug("Failed to Publish Request"),
                  this.logger.error(e),
                  e)
                );
              }
            }),
            (this.onPayloadHandler = (e) => {
              this.onProviderPayload(e);
            }),
            (this.onConnectHandler = () => {
              this.events.emit(tp.connect);
            }),
            (this.onDisconnectHandler = () => {
              this.onProviderDisconnect();
            }),
            (this.onProviderErrorHandler = (e) => {
              this.logger.error(e),
                this.events.emit(tp.error, e),
                this.logger.info(
                  "Fatal socket error received, closing transport"
                ),
                this.transportClose();
            }),
            (this.registerProviderListeners = () => {
              this.provider.on(tf.payload, this.onPayloadHandler),
                this.provider.on(tf.connect, this.onConnectHandler),
                this.provider.on(tf.disconnect, this.onDisconnectHandler),
                this.provider.on(tf.error, this.onProviderErrorHandler);
            }),
            (this.core = e.core),
            (this.logger =
              "u" > typeof e.logger && "string" != typeof e.logger
                ? (0, c.generateChildLogger)(e.logger, this.name)
                : (0, c.pino)(
                    (0, c.getDefaultLoggerOptions)({
                      level: e.logger || "error",
                    })
                  )),
            (this.messages = new tR(this.logger, e.core)),
            (this.subscriber = new tM(this, this.logger)),
            (this.publisher = new tO(this, this.logger)),
            (this.relayUrl = e?.relayUrl || tl),
            (this.projectId = e.projectId),
            (this.provider = {});
        }
        async init() {
          this.logger.trace("Initialized"),
            this.registerEventListeners(),
            await this.createProvider(),
            await Promise.all([this.messages.init(), this.subscriber.init()]);
          try {
            await this.transportOpen();
          } catch {
            this.logger.warn(
              `Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${tu}...`
            ),
              await this.restartTransport(tu);
          }
          (this.initialized = !0),
            setTimeout(async () => {
              0 === this.subscriber.topics.length &&
                (this.logger.info(
                  "No topics subscribed to after init, closing transport"
                ),
                await this.transportClose(),
                (this.transportExplicitlyClosed = !1));
            }, 1e4);
        }
        get context() {
          return (0, c.getLoggerContext)(this.logger);
        }
        get connected() {
          return this.provider.connection.connected;
        }
        get connecting() {
          return this.provider.connection.connecting;
        }
        async publish(e, t, r) {
          this.isInitialized(),
            await this.publisher.publish(e, t, r),
            await this.recordMessageEvent({
              topic: e,
              message: t,
              publishedAt: Date.now(),
            });
        }
        async subscribe(e, t) {
          var r;
          this.isInitialized();
          let i =
            (null == (r = this.subscriber.topicMap.get(e)) ? void 0 : r[0]) ||
            "";
          return (
            i ||
            (await Promise.all([
              new Promise((t) => {
                this.subscriber.once(tg.created, (r) => {
                  r.topic === e && t();
                });
              }),
              new Promise(async (r) => {
                (i = await this.subscriber.subscribe(e, t)), r();
              }),
            ]),
            i)
          );
        }
        async unsubscribe(e, t) {
          this.isInitialized(), await this.subscriber.unsubscribe(e, t);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async transportClose() {
          (this.transportExplicitlyClosed = !0),
            this.hasExperiencedNetworkDisruption && this.connected
              ? await (0, s.hF)(
                  this.provider.disconnect(),
                  1e3,
                  "provider.disconnect()"
                ).catch(() => this.onProviderDisconnect())
              : this.connected && (await this.provider.disconnect());
        }
        async transportOpen(e) {
          if (
            ((this.transportExplicitlyClosed = !1),
            await this.confirmOnlineStateOrThrow(),
            !this.connectionAttemptInProgress)
          ) {
            e &&
              e !== this.relayUrl &&
              ((this.relayUrl = e),
              await this.transportClose(),
              await this.createProvider()),
              (this.connectionAttemptInProgress = !0);
            try {
              await Promise.all([
                new Promise((e) => {
                  if (!this.initialized) return e();
                  this.subscriber.once(tg.resubscribed, () => {
                    e();
                  });
                }),
                new Promise(async (e, t) => {
                  try {
                    await (0, s.hF)(
                      this.provider.connect(),
                      1e4,
                      `Socket stalled when trying to connect to ${this.relayUrl}`
                    );
                  } catch (e) {
                    t(e);
                    return;
                  }
                  e();
                }),
              ]);
            } catch (e) {
              if ((this.logger.error(e), !this.isConnectionStalled(e.message)))
                throw e;
              this.provider.events.emit(tf.disconnect);
            } finally {
              (this.connectionAttemptInProgress = !1),
                (this.hasExperiencedNetworkDisruption = !1);
            }
          }
        }
        async restartTransport(e) {
          await this.confirmOnlineStateOrThrow(),
            this.connectionAttemptInProgress ||
              ((this.relayUrl = e || this.relayUrl),
              await this.transportClose(),
              await this.createProvider(),
              await this.transportOpen());
        }
        async confirmOnlineStateOrThrow() {
          if (!(await (0, s.Gg)()))
            throw Error(
              "No internet connection detected. Please restart your network and try again."
            );
        }
        isConnectionStalled(e) {
          return this.staleConnectionErrors.some((t) => e.includes(t));
        }
        async createProvider() {
          this.provider.connection && this.unregisterProviderListeners();
          let e = await this.core.crypto.signJWT(this.relayUrl);
          (this.provider = new z.r(
            new B(
              (0, s.$0)({
                sdkVersion: "2.10.1",
                protocol: this.protocol,
                version: this.version,
                relayUrl: this.relayUrl,
                projectId: this.projectId,
                auth: e,
                useOnCloseEvent: !0,
              })
            )
          )),
            this.registerProviderListeners();
        }
        async recordMessageEvent(e) {
          let { topic: t, message: r } = e;
          await this.messages.set(t, r);
        }
        async shouldIgnoreMessageEvent(e) {
          let { topic: t, message: r } = e;
          if (!r || 0 === r.length)
            return (
              this.logger.debug(`Ignoring invalid/empty message: ${r}`), !0
            );
          if (!(await this.subscriber.isSubscribed(t)))
            return (
              this.logger.debug(
                `Ignoring message for non-subscribed topic ${t}`
              ),
              !0
            );
          let i = this.messages.has(t, r);
          return i && this.logger.debug(`Ignoring duplicate message: ${r}`), i;
        }
        async onProviderPayload(e) {
          if (
            (this.logger.debug("Incoming Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "incoming",
              payload: e,
            }),
            (0, M.isJsonRpcRequest)(e))
          ) {
            if (!e.method.endsWith("_subscription")) return;
            let t = e.params,
              { topic: r, message: i, publishedAt: n } = t.data,
              s = { topic: r, message: i, publishedAt: n };
            this.logger.debug("Emitting Relayer Payload"),
              this.logger.trace(tK({ type: "event", event: t.id }, s)),
              this.events.emit(t.id, s),
              await this.acknowledgePayload(e),
              await this.onMessageEvent(s);
          } else
            (0, M.isJsonRpcResponse)(e) && this.events.emit(tp.message_ack, e);
        }
        async onMessageEvent(e) {
          (await this.shouldIgnoreMessageEvent(e)) ||
            (this.events.emit(tp.message, e), await this.recordMessageEvent(e));
        }
        async acknowledgePayload(e) {
          let t = (0, M.formatJsonRpcResult)(e.id, !0);
          await this.provider.connection.send(t);
        }
        unregisterProviderListeners() {
          this.provider.off(tf.payload, this.onPayloadHandler),
            this.provider.off(tf.connect, this.onConnectHandler),
            this.provider.off(tf.disconnect, this.onDisconnectHandler),
            this.provider.off(tf.error, this.onProviderErrorHandler);
        }
        async registerEventListeners() {
          this.events.on(tp.connection_stalled, () => {
            this.restartTransport().catch((e) => this.logger.error(e));
          });
          let e = await (0, s.Gg)();
          (0, s.uw)(async (t) => {
            this.initialized &&
              e !== t &&
              ((e = t),
              t
                ? await this.restartTransport().catch((e) =>
                    this.logger.error(e)
                  )
                : ((this.hasExperiencedNetworkDisruption = !0),
                  await this.transportClose().catch((e) =>
                    this.logger.error(e)
                  )));
          });
        }
        onProviderDisconnect() {
          this.events.emit(tp.disconnect), this.attemptToReconnect();
        }
        attemptToReconnect() {
          this.transportExplicitlyClosed ||
            (this.logger.info("attemptToReconnect called. Connecting..."),
            setTimeout(async () => {
              await this.restartTransport().catch((e) => this.logger.error(e));
            }, (0, S.toMiliseconds)(td)));
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, s.Z7)("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
        async toEstablishConnection() {
          if ((await this.confirmOnlineStateOrThrow(), !this.connected)) {
            if (this.connectionAttemptInProgress)
              return await new Promise((e) => {
                let t = setInterval(() => {
                  this.connected && (clearInterval(t), e());
                }, this.connectionStatusPollingInterval);
              });
            await this.restartTransport();
          }
        }
      }
      var tJ = Object.defineProperty,
        tF = Object.getOwnPropertySymbols,
        tW = Object.prototype.hasOwnProperty,
        tZ = Object.prototype.propertyIsEnumerable,
        tG = (e, t, r) =>
          t in e
            ? tJ(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        tQ = (e, t) => {
          for (var r in t || (t = {})) tW.call(t, r) && tG(e, r, t[r]);
          if (tF) for (var r of tF(t)) tZ.call(t, r) && tG(e, r, t[r]);
          return e;
        };
      class tY extends g {
        constructor(e, t, r, i = tn, n) {
          super(e, t, r, i),
            (this.core = e),
            (this.logger = t),
            (this.name = r),
            (this.map = new Map()),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = tn),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => {
                  this.getKey && null !== e && !(0, s.o8)(e)
                    ? this.map.set(this.getKey(e), e)
                    : (0, s.xW)(e)
                    ? this.map.set(e.id, e)
                    : (0, s.h1)(e) && this.map.set(e.topic, e);
                }),
                (this.cached = []),
                (this.initialized = !0));
            }),
            (this.set = async (e, t) => {
              this.isInitialized(),
                this.map.has(e)
                  ? await this.update(e, t)
                  : (this.logger.debug("Setting value"),
                    this.logger.trace({
                      type: "method",
                      method: "set",
                      key: e,
                      value: t,
                    }),
                    this.map.set(e, t),
                    await this.persist());
            }),
            (this.get = (e) => (
              this.isInitialized(),
              this.logger.debug("Getting value"),
              this.logger.trace({ type: "method", method: "get", key: e }),
              this.getData(e)
            )),
            (this.getAll = (e) => (
              this.isInitialized(),
              e
                ? this.values.filter((t) =>
                    Object.keys(e).every((r) => F()(t[r], e[r]))
                  )
                : this.values
            )),
            (this.update = async (e, t) => {
              this.isInitialized(),
                this.logger.debug("Updating value"),
                this.logger.trace({
                  type: "method",
                  method: "update",
                  key: e,
                  update: t,
                });
              let r = tQ(tQ({}, this.getData(e)), t);
              this.map.set(e, r), await this.persist();
            }),
            (this.delete = async (e, t) => {
              this.isInitialized(),
                this.map.has(e) &&
                  (this.logger.debug("Deleting value"),
                  this.logger.trace({
                    type: "method",
                    method: "delete",
                    key: e,
                    reason: t,
                  }),
                  this.map.delete(e),
                  await this.persist());
            }),
            (this.logger = (0, c.generateChildLogger)(t, this.name)),
            (this.storagePrefix = i),
            (this.getKey = n);
        }
        get context() {
          return (0, c.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + "//" + this.name;
        }
        get length() {
          return this.map.size;
        }
        get keys() {
          return Array.from(this.map.keys());
        }
        get values() {
          return Array.from(this.map.values());
        }
        async setDataStore(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getDataStore() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getData(e) {
          let t = this.map.get(e);
          if (!t) {
            let { message: t } = (0, s.Z7)(
              "NO_MATCHING_KEY",
              `${this.name}: ${e}`
            );
            throw (this.logger.error(t), Error(t));
          }
          return t;
        }
        async persist() {
          await this.setDataStore(this.values);
        }
        async restore() {
          try {
            let e = await this.getDataStore();
            if (typeof e > "u" || !e.length) return;
            if (this.map.size) {
              let { message: e } = (0, s.Z7)(
                "RESTORE_WILL_OVERRIDE",
                this.name
              );
              throw (this.logger.error(e), Error(e));
            }
            (this.cached = e),
              this.logger.debug(`Successfully Restored value for ${this.name}`),
              this.logger.trace({
                type: "method",
                method: "restore",
                value: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore value for ${this.name}`),
              this.logger.error(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, s.Z7)("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      class tX {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            (this.name = "pairing"),
            (this.version = "0.3"),
            (this.events = new (n())()),
            (this.initialized = !1),
            (this.storagePrefix = tn),
            (this.ignoredPayloadTypes = [s.rV]),
            (this.registeredMethods = []),
            (this.init = async () => {
              this.initialized ||
                (await this.pairings.init(),
                await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                (this.initialized = !0),
                this.logger.trace("Initialized"));
            }),
            (this.register = ({ methods: e }) => {
              this.isInitialized(),
                (this.registeredMethods = [
                  ...new Set([...this.registeredMethods, ...e]),
                ]);
            }),
            (this.create = async () => {
              this.isInitialized();
              let e = (0, s.jd)(),
                t = await this.core.crypto.setSymKey(e),
                r = (0, s.gn)(S.FIVE_MINUTES),
                i = { protocol: "irn" },
                n = (0, s.Bv)({
                  protocol: this.core.protocol,
                  version: this.core.version,
                  topic: t,
                  symKey: e,
                  relay: i,
                });
              return (
                await this.pairings.set(t, {
                  topic: t,
                  expiry: r,
                  relay: i,
                  active: !1,
                }),
                await this.core.relayer.subscribe(t),
                this.core.expirer.set(t, r),
                { topic: t, uri: n }
              );
            }),
            (this.pair = async (e) => {
              this.isInitialized(), this.isValidPair(e);
              let { topic: t, symKey: r, relay: i } = (0, s.he)(e.uri);
              if (this.pairings.keys.includes(t) && this.pairings.get(t).active)
                throw Error(
                  `Pairing already exists: ${t}. Please try again with a new connection URI.`
                );
              this.core.crypto.keychain.has(t) ||
                (await this.core.crypto.setSymKey(r, t),
                await this.core.relayer.subscribe(t, { relay: i }));
              let n = (0, s.gn)(S.FIVE_MINUTES),
                o = { topic: t, relay: i, expiry: n, active: !1 };
              return (
                await this.pairings.set(t, o),
                this.core.expirer.set(t, n),
                e.activatePairing && (await this.activate({ topic: t })),
                this.events.emit(tm.create, o),
                o
              );
            }),
            (this.activate = async ({ topic: e }) => {
              this.isInitialized();
              let t = (0, s.gn)(S.THIRTY_DAYS);
              await this.pairings.update(e, { active: !0, expiry: t }),
                this.core.expirer.set(e, t);
            }),
            (this.ping = async (e) => {
              this.isInitialized(), await this.isValidPing(e);
              let { topic: t } = e;
              if (this.pairings.keys.includes(t)) {
                let e = await this.sendRequest(t, "wc_pairingPing", {}),
                  { done: r, resolve: i, reject: n } = (0, s.H1)();
                this.events.once(
                  (0, s.E0)("pairing_ping", e),
                  ({ error: e }) => {
                    e ? n(e) : i();
                  }
                ),
                  await r();
              }
            }),
            (this.updateExpiry = async ({ topic: e, expiry: t }) => {
              this.isInitialized(),
                await this.pairings.update(e, { expiry: t });
            }),
            (this.updateMetadata = async ({ topic: e, metadata: t }) => {
              this.isInitialized(),
                await this.pairings.update(e, { peerMetadata: t });
            }),
            (this.getPairings = () => (
              this.isInitialized(), this.pairings.values
            )),
            (this.disconnect = async (e) => {
              this.isInitialized(), await this.isValidDisconnect(e);
              let { topic: t } = e;
              this.pairings.keys.includes(t) &&
                (await this.sendRequest(
                  t,
                  "wc_pairingDelete",
                  (0, s.D6)("USER_DISCONNECTED")
                ),
                await this.deletePairing(t));
            }),
            (this.sendRequest = async (e, t, r) => {
              let i = (0, M.formatJsonRpcRequest)(t, r),
                n = await this.core.crypto.encode(e, i),
                s = ty[t].req;
              return (
                this.core.history.set(e, i),
                this.core.relayer.publish(e, n, s),
                i.id
              );
            }),
            (this.sendResult = async (e, t, r) => {
              let i = (0, M.formatJsonRpcResult)(e, r),
                n = await this.core.crypto.encode(t, i),
                s = await this.core.history.get(t, e),
                o = ty[s.request.method].res;
              await this.core.relayer.publish(t, n, o),
                await this.core.history.resolve(i);
            }),
            (this.sendError = async (e, t, r) => {
              let i = (0, M.formatJsonRpcError)(e, r),
                n = await this.core.crypto.encode(t, i),
                s = await this.core.history.get(t, e),
                o = ty[s.request.method]
                  ? ty[s.request.method].res
                  : ty.unregistered_method.res;
              await this.core.relayer.publish(t, n, o),
                await this.core.history.resolve(i);
            }),
            (this.deletePairing = async (e, t) => {
              await this.core.relayer.unsubscribe(e),
                await Promise.all([
                  this.pairings.delete(e, (0, s.D6)("USER_DISCONNECTED")),
                  this.core.crypto.deleteSymKey(e),
                  t ? Promise.resolve() : this.core.expirer.del(e),
                ]);
            }),
            (this.cleanup = async () => {
              let e = this.pairings.getAll().filter((e) => (0, s.Bw)(e.expiry));
              await Promise.all(e.map((e) => this.deletePairing(e.topic)));
            }),
            (this.onRelayEventRequest = (e) => {
              let { topic: t, payload: r } = e;
              switch (r.method) {
                case "wc_pairingPing":
                  return this.onPairingPingRequest(t, r);
                case "wc_pairingDelete":
                  return this.onPairingDeleteRequest(t, r);
                default:
                  return this.onUnknownRpcMethodRequest(t, r);
              }
            }),
            (this.onRelayEventResponse = async (e) => {
              let { topic: t, payload: r } = e,
                i = (await this.core.history.get(t, r.id)).request.method;
              return "wc_pairingPing" === i
                ? this.onPairingPingResponse(t, r)
                : this.onUnknownRpcMethodResponse(i);
            }),
            (this.onPairingPingRequest = async (e, t) => {
              let { id: r } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult(r, e, !0),
                  this.events.emit(tm.ping, { id: r, topic: e });
              } catch (t) {
                await this.sendError(r, e, t), this.logger.error(t);
              }
            }),
            (this.onPairingPingResponse = (e, t) => {
              let { id: r } = t;
              setTimeout(() => {
                (0, M.isJsonRpcResult)(t)
                  ? this.events.emit((0, s.E0)("pairing_ping", r), {})
                  : (0, M.isJsonRpcError)(t) &&
                    this.events.emit((0, s.E0)("pairing_ping", r), {
                      error: t.error,
                    });
              }, 500);
            }),
            (this.onPairingDeleteRequest = async (e, t) => {
              let { id: r } = t;
              try {
                this.isValidDisconnect({ topic: e }),
                  await this.deletePairing(e),
                  this.events.emit(tm.delete, { id: r, topic: e });
              } catch (t) {
                await this.sendError(r, e, t), this.logger.error(t);
              }
            }),
            (this.onUnknownRpcMethodRequest = async (e, t) => {
              let { id: r, method: i } = t;
              try {
                if (this.registeredMethods.includes(i)) return;
                let t = (0, s.D6)("WC_METHOD_UNSUPPORTED", i);
                await this.sendError(r, e, t), this.logger.error(t);
              } catch (t) {
                await this.sendError(r, e, t), this.logger.error(t);
              }
            }),
            (this.onUnknownRpcMethodResponse = (e) => {
              this.registeredMethods.includes(e) ||
                this.logger.error((0, s.D6)("WC_METHOD_UNSUPPORTED", e));
            }),
            (this.isValidPair = (e) => {
              if (!(0, s.EJ)(e)) {
                let { message: t } = (0, s.Z7)(
                  "MISSING_OR_INVALID",
                  `pair() params: ${e}`
                );
                throw Error(t);
              }
              if (!(0, s.jv)(e.uri)) {
                let { message: t } = (0, s.Z7)(
                  "MISSING_OR_INVALID",
                  `pair() uri: ${e.uri}`
                );
                throw Error(t);
              }
            }),
            (this.isValidPing = async (e) => {
              if (!(0, s.EJ)(e)) {
                let { message: t } = (0, s.Z7)(
                  "MISSING_OR_INVALID",
                  `ping() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            (this.isValidDisconnect = async (e) => {
              if (!(0, s.EJ)(e)) {
                let { message: t } = (0, s.Z7)(
                  "MISSING_OR_INVALID",
                  `disconnect() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            (this.isValidPairingTopic = async (e) => {
              if (!(0, s.M_)(e, !1)) {
                let { message: t } = (0, s.Z7)(
                  "MISSING_OR_INVALID",
                  `pairing topic should be a string: ${e}`
                );
                throw Error(t);
              }
              if (!this.pairings.keys.includes(e)) {
                let { message: t } = (0, s.Z7)(
                  "NO_MATCHING_KEY",
                  `pairing topic doesn't exist: ${e}`
                );
                throw Error(t);
              }
              if ((0, s.Bw)(this.pairings.get(e).expiry)) {
                await this.deletePairing(e);
                let { message: t } = (0, s.Z7)(
                  "EXPIRED",
                  `pairing topic: ${e}`
                );
                throw Error(t);
              }
            }),
            (this.core = e),
            (this.logger = (0, c.generateChildLogger)(t, this.name)),
            (this.pairings = new tY(
              this.core,
              this.logger,
              this.name,
              this.storagePrefix
            ));
        }
        get context() {
          return (0, c.getLoggerContext)(this.logger);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, s.Z7)("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
        registerRelayerEvents() {
          this.core.relayer.on(tp.message, async (e) => {
            let { topic: t, message: r } = e;
            if (
              !this.pairings.keys.includes(t) ||
              this.ignoredPayloadTypes.includes(
                this.core.crypto.getPayloadType(r)
              )
            )
              return;
            let i = await this.core.crypto.decode(t, r);
            try {
              (0, M.isJsonRpcRequest)(i)
                ? (this.core.history.set(t, i),
                  this.onRelayEventRequest({ topic: t, payload: i }))
                : (0, M.isJsonRpcResponse)(i) &&
                  (await this.core.history.resolve(i),
                  await this.onRelayEventResponse({ topic: t, payload: i }),
                  this.core.history.delete(t, i.id));
            } catch (e) {
              this.logger.error(e);
            }
          });
        }
        registerExpirerEvents() {
          this.core.expirer.on(tw.expired, async (e) => {
            let { topic: t } = (0, s.iP)(e.target);
            t &&
              this.pairings.keys.includes(t) &&
              (await this.deletePairing(t, !0),
              this.events.emit(tm.expire, { topic: t }));
          });
        }
      }
      class t0 extends u {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            (this.records = new Map()),
            (this.events = new i.EventEmitter()),
            (this.name = "history"),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = tn),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => this.records.set(e.id, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            (this.set = (e, t, r) => {
              if (
                (this.isInitialized(),
                this.logger.debug("Setting JSON-RPC request history record"),
                this.logger.trace({
                  type: "method",
                  method: "set",
                  topic: e,
                  request: t,
                  chainId: r,
                }),
                this.records.has(t.id))
              )
                return;
              let i = {
                id: t.id,
                topic: e,
                request: { method: t.method, params: t.params || null },
                chainId: r,
                expiry: (0, s.gn)(S.THIRTY_DAYS),
              };
              this.records.set(i.id, i), this.events.emit(t_.created, i);
            }),
            (this.resolve = async (e) => {
              if (
                (this.isInitialized(),
                this.logger.debug("Updating JSON-RPC response history record"),
                this.logger.trace({
                  type: "method",
                  method: "update",
                  response: e,
                }),
                !this.records.has(e.id))
              )
                return;
              let t = await this.getRecord(e.id);
              typeof t.response > "u" &&
                ((t.response = (0, M.isJsonRpcError)(e)
                  ? { error: e.error }
                  : { result: e.result }),
                this.records.set(t.id, t),
                this.events.emit(t_.updated, t));
            }),
            (this.get = async (e, t) => (
              this.isInitialized(),
              this.logger.debug("Getting record"),
              this.logger.trace({
                type: "method",
                method: "get",
                topic: e,
                id: t,
              }),
              await this.getRecord(t)
            )),
            (this.delete = (e, t) => {
              this.isInitialized(),
                this.logger.debug("Deleting record"),
                this.logger.trace({ type: "method", method: "delete", id: t }),
                this.values.forEach((r) => {
                  r.topic !== e ||
                    ("u" > typeof t && r.id !== t) ||
                    (this.records.delete(r.id),
                    this.events.emit(t_.deleted, r));
                });
            }),
            (this.exists = async (e, t) => (
              this.isInitialized(),
              !!this.records.has(t) && (await this.getRecord(t)).topic === e
            )),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = (0, c.generateChildLogger)(t, this.name));
        }
        get context() {
          return (0, c.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + "//" + this.name;
        }
        get size() {
          return this.records.size;
        }
        get keys() {
          return Array.from(this.records.keys());
        }
        get values() {
          return Array.from(this.records.values());
        }
        get pending() {
          let e = [];
          return (
            this.values.forEach((t) => {
              if ("u" > typeof t.response) return;
              let r = {
                topic: t.topic,
                request: (0, M.formatJsonRpcRequest)(
                  t.request.method,
                  t.request.params,
                  t.id
                ),
                chainId: t.chainId,
              };
              return e.push(r);
            }),
            e
          );
        }
        async setJsonRpcRecords(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getJsonRpcRecords() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getRecord(e) {
          this.isInitialized();
          let t = this.records.get(e);
          if (!t) {
            let { message: t } = (0, s.Z7)(
              "NO_MATCHING_KEY",
              `${this.name}: ${e}`
            );
            throw Error(t);
          }
          return t;
        }
        async persist() {
          await this.setJsonRpcRecords(this.values), this.events.emit(t_.sync);
        }
        async restore() {
          try {
            let e = await this.getJsonRpcRecords();
            if (typeof e > "u" || !e.length) return;
            if (this.records.size) {
              let { message: e } = (0, s.Z7)(
                "RESTORE_WILL_OVERRIDE",
                this.name
              );
              throw (this.logger.error(e), Error(e));
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored records for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                records: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore records for ${this.name}`),
              this.logger.error(e);
          }
        }
        registerEventListeners() {
          this.events.on(t_.created, (e) => {
            let t = t_.created;
            this.logger.info(`Emitting ${t}`),
              this.logger.debug({ type: "event", event: t, record: e }),
              this.persist();
          }),
            this.events.on(t_.updated, (e) => {
              let t = t_.updated;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, record: e }),
                this.persist();
            }),
            this.events.on(t_.deleted, (e) => {
              let t = t_.deleted;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, record: e }),
                this.persist();
            }),
            this.core.heartbeat.on(a.HEARTBEAT_EVENTS.pulse, () => {
              this.cleanup();
            });
        }
        cleanup() {
          try {
            this.records.forEach((e) => {
              (0, S.toMiliseconds)(e.expiry || 0) - Date.now() <= 0 &&
                (this.logger.info(`Deleting expired history log: ${e.id}`),
                this.delete(e.topic, e.id));
            });
          } catch (e) {
            this.logger.warn(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, s.Z7)("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      class t1 extends y {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            (this.expirations = new Map()),
            (this.events = new i.EventEmitter()),
            (this.name = "expirer"),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = tn),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => this.expirations.set(e.target, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            (this.has = (e) => {
              try {
                let t = this.formatTarget(e);
                return "u" > typeof this.getExpiration(t);
              } catch {
                return !1;
              }
            }),
            (this.set = (e, t) => {
              this.isInitialized();
              let r = this.formatTarget(e),
                i = { target: r, expiry: t };
              this.expirations.set(r, i),
                this.checkExpiry(r, i),
                this.events.emit(tw.created, { target: r, expiration: i });
            }),
            (this.get = (e) => {
              this.isInitialized();
              let t = this.formatTarget(e);
              return this.getExpiration(t);
            }),
            (this.del = (e) => {
              if ((this.isInitialized(), this.has(e))) {
                let t = this.formatTarget(e),
                  r = this.getExpiration(t);
                this.expirations.delete(t),
                  this.events.emit(tw.deleted, { target: t, expiration: r });
              }
            }),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = (0, c.generateChildLogger)(t, this.name));
        }
        get context() {
          return (0, c.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + "//" + this.name;
        }
        get length() {
          return this.expirations.size;
        }
        get keys() {
          return Array.from(this.expirations.keys());
        }
        get values() {
          return Array.from(this.expirations.values());
        }
        formatTarget(e) {
          if ("string" == typeof e) return (0, s.Z4)(e);
          if ("number" == typeof e) return (0, s.Gq)(e);
          let { message: t } = (0, s.Z7)(
            "UNKNOWN_TYPE",
            `Target type: ${typeof e}`
          );
          throw Error(t);
        }
        async setExpirations(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getExpirations() {
          return await this.core.storage.getItem(this.storageKey);
        }
        async persist() {
          await this.setExpirations(this.values), this.events.emit(tw.sync);
        }
        async restore() {
          try {
            let e = await this.getExpirations();
            if (typeof e > "u" || !e.length) return;
            if (this.expirations.size) {
              let { message: e } = (0, s.Z7)(
                "RESTORE_WILL_OVERRIDE",
                this.name
              );
              throw (this.logger.error(e), Error(e));
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored expirations for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                expirations: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`),
              this.logger.error(e);
          }
        }
        getExpiration(e) {
          let t = this.expirations.get(e);
          if (!t) {
            let { message: t } = (0, s.Z7)(
              "NO_MATCHING_KEY",
              `${this.name}: ${e}`
            );
            throw (this.logger.error(t), Error(t));
          }
          return t;
        }
        checkExpiry(e, t) {
          let { expiry: r } = t;
          (0, S.toMiliseconds)(r) - Date.now() <= 0 && this.expire(e, t);
        }
        expire(e, t) {
          this.expirations.delete(e),
            this.events.emit(tw.expired, { target: e, expiration: t });
        }
        checkExpirations() {
          this.core.relayer.connected &&
            this.expirations.forEach((e, t) => this.checkExpiry(t, e));
        }
        registerEventListeners() {
          this.core.heartbeat.on(a.HEARTBEAT_EVENTS.pulse, () =>
            this.checkExpirations()
          ),
            this.events.on(tw.created, (e) => {
              let t = tw.created;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            }),
            this.events.on(tw.expired, (e) => {
              let t = tw.expired;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            }),
            this.events.on(tw.deleted, (e) => {
              let t = tw.deleted;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, s.Z7)("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      class t5 extends m {
        constructor(e, t) {
          super(e, t),
            (this.projectId = e),
            (this.logger = t),
            (this.name = tb),
            (this.initialized = !1),
            (this.queue = []),
            (this.verifyDisabled = !1),
            (this.init = async (e) => {
              if (this.verifyDisabled || (0, s.b$)() || !(0, s.jU)()) return;
              let t = e?.verifyUrl || tE;
              this.verifyUrl !== t && this.removeIframe(), (this.verifyUrl = t);
              try {
                await this.createIframe();
              } catch (e) {
                this.logger.info(
                  `Verify iframe failed to load: ${this.verifyUrl}`
                ),
                  this.logger.info(e);
              }
              if (!this.initialized) {
                this.removeIframe(), (this.verifyUrl = tI);
                try {
                  await this.createIframe();
                } catch (e) {
                  this.logger.info(
                    `Verify iframe failed to load: ${this.verifyUrl}`
                  ),
                    this.logger.info(e),
                    (this.verifyDisabled = !0);
                }
              }
            }),
            (this.register = async (e) => {
              this.initialized
                ? this.sendPost(e.attestationId)
                : (this.addToQueue(e.attestationId), await this.init());
            }),
            (this.resolve = async (e) => {
              let t;
              if (this.isDevEnv) return "";
              let r = e?.verifyUrl || tE;
              try {
                t = await this.fetchAttestation(e.attestationId, r);
              } catch (i) {
                this.logger.info(
                  `failed to resolve attestation: ${e.attestationId} from url: ${r}`
                ),
                  this.logger.info(i),
                  (t = await this.fetchAttestation(e.attestationId, tI));
              }
              return t;
            }),
            (this.fetchAttestation = async (e, t) => {
              this.logger.info(`resolving attestation: ${e} from url: ${t}`);
              let r = this.startAbortTimer(2 * S.ONE_SECOND),
                i = await fetch(`${t}/attestation/${e}`, {
                  signal: this.abortController.signal,
                });
              return (
                clearTimeout(r), 200 === i.status ? await i.json() : void 0
              );
            }),
            (this.addToQueue = (e) => {
              this.queue.push(e);
            }),
            (this.processQueue = () => {
              0 !== this.queue.length &&
                (this.queue.forEach((e) => this.sendPost(e)),
                (this.queue = []));
            }),
            (this.sendPost = (e) => {
              var t;
              try {
                if (!this.iframe) return;
                null == (t = this.iframe.contentWindow) ||
                  t.postMessage(e, "*"),
                  this.logger.info(`postMessage sent: ${e} ${this.verifyUrl}`);
              } catch {}
            }),
            (this.createIframe = async () => {
              let e;
              let t = (r) => {
                "verify_ready" === r.data &&
                  ((this.initialized = !0),
                  this.processQueue(),
                  window.removeEventListener("message", t),
                  e());
              };
              await Promise.race([
                new Promise((r) => {
                  if (document.getElementById(tb)) return r();
                  window.addEventListener("message", t);
                  let i = document.createElement("iframe");
                  (i.id = tb),
                    (i.src = `${this.verifyUrl}/${this.projectId}`),
                    (i.style.display = "none"),
                    document.body.append(i),
                    (this.iframe = i),
                    (e = r);
                }),
                new Promise((e, r) =>
                  setTimeout(() => {
                    window.removeEventListener("message", t),
                      r("verify iframe load timeout");
                  }, (0, S.toMiliseconds)(S.FIVE_SECONDS))
                ),
              ]);
            }),
            (this.removeIframe = () => {
              this.iframe &&
                (this.iframe.remove(),
                (this.iframe = void 0),
                (this.initialized = !1));
            }),
            (this.logger = (0, c.generateChildLogger)(t, this.name)),
            (this.verifyUrl = tE),
            (this.abortController = new AbortController()),
            (this.isDevEnv = (0, s.UG)() && W.env.IS_VITEST);
        }
        get context() {
          return (0, c.getLoggerContext)(this.logger);
        }
        startAbortTimer(e) {
          return (
            (this.abortController = new AbortController()),
            setTimeout(
              () => this.abortController.abort(),
              (0, S.toMiliseconds)(e)
            )
          );
        }
      }
      var t6 = Object.defineProperty,
        t3 = Object.getOwnPropertySymbols,
        t2 = Object.prototype.hasOwnProperty,
        t9 = Object.prototype.propertyIsEnumerable,
        t4 = (e, t, r) =>
          t in e
            ? t6(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        t7 = (e, t) => {
          for (var r in t || (t = {})) t2.call(t, r) && t4(e, r, t[r]);
          if (t3) for (var r of t3(t)) t9.call(t, r) && t4(e, r, t[r]);
          return e;
        };
      class t8 extends l {
        constructor(e) {
          super(e),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.name = ti),
            (this.events = new i.EventEmitter()),
            (this.initialized = !1),
            (this.on = (e, t) => this.events.on(e, t)),
            (this.once = (e, t) => this.events.once(e, t)),
            (this.off = (e, t) => this.events.off(e, t)),
            (this.removeListener = (e, t) => this.events.removeListener(e, t)),
            (this.projectId = e?.projectId),
            (this.relayUrl = e?.relayUrl || tl);
          let t =
            "u" > typeof e?.logger && "string" != typeof e?.logger
              ? e.logger
              : (0, c.pino)(
                  (0, c.getDefaultLoggerOptions)({
                    level: e?.logger || ts.logger,
                  })
                );
          (this.logger = (0, c.generateChildLogger)(t, this.name)),
            (this.heartbeat = new a.HeartBeat()),
            (this.crypto = new tS(this, this.logger, e?.keychain)),
            (this.history = new t0(this, this.logger)),
            (this.expirer = new t1(this, this.logger)),
            (this.storage =
              null != e && e.storage
                ? e.storage
                : new o.ZP(t7(t7({}, to), e?.storageOptions))),
            (this.relayer = new tB({
              core: this,
              logger: this.logger,
              relayUrl: this.relayUrl,
              projectId: this.projectId,
            })),
            (this.pairing = new tX(this, this.logger)),
            (this.verify = new t5(this.projectId || "", this.logger));
        }
        static async init(e) {
          let t = new t8(e);
          await t.initialize();
          let r = await t.crypto.getClientId();
          return await t.storage.setItem("WALLETCONNECT_CLIENT_ID", r), t;
        }
        get context() {
          return (0, c.getLoggerContext)(this.logger);
        }
        async start() {
          this.initialized || (await this.initialize());
        }
        async initialize() {
          this.logger.trace("Initialized");
          try {
            await this.crypto.init(),
              await this.history.init(),
              await this.expirer.init(),
              await this.relayer.init(),
              await this.heartbeat.init(),
              await this.pairing.init(),
              (this.initialized = !0),
              this.logger.info("Core Initialization Success");
          } catch (e) {
            throw (
              (this.logger.warn(
                `Core Initialization Failure at epoch ${Date.now()}`,
                e
              ),
              this.logger.error(e.message),
              e)
            );
          }
        }
      }
      let re = "client",
        rt = `wc@2:${re}:`,
        rr = {
          name: re,
          logger: "error",
          controller: !1,
          relayUrl: "wss://relay.walletconnect.com",
        },
        ri = "WALLETCONNECT_DEEPLINK_CHOICE",
        rn = "Proposal expired",
        rs = S.SEVEN_DAYS,
        ro = {
          wc_sessionPropose: {
            req: { ttl: S.FIVE_MINUTES, prompt: !0, tag: 1100 },
            res: { ttl: S.FIVE_MINUTES, prompt: !1, tag: 1101 },
          },
          wc_sessionSettle: {
            req: { ttl: S.FIVE_MINUTES, prompt: !1, tag: 1102 },
            res: { ttl: S.FIVE_MINUTES, prompt: !1, tag: 1103 },
          },
          wc_sessionUpdate: {
            req: { ttl: S.ONE_DAY, prompt: !1, tag: 1104 },
            res: { ttl: S.ONE_DAY, prompt: !1, tag: 1105 },
          },
          wc_sessionExtend: {
            req: { ttl: S.ONE_DAY, prompt: !1, tag: 1106 },
            res: { ttl: S.ONE_DAY, prompt: !1, tag: 1107 },
          },
          wc_sessionRequest: {
            req: { ttl: S.FIVE_MINUTES, prompt: !0, tag: 1108 },
            res: { ttl: S.FIVE_MINUTES, prompt: !1, tag: 1109 },
          },
          wc_sessionEvent: {
            req: { ttl: S.FIVE_MINUTES, prompt: !0, tag: 1110 },
            res: { ttl: S.FIVE_MINUTES, prompt: !1, tag: 1111 },
          },
          wc_sessionDelete: {
            req: { ttl: S.ONE_DAY, prompt: !1, tag: 1112 },
            res: { ttl: S.ONE_DAY, prompt: !1, tag: 1113 },
          },
          wc_sessionPing: {
            req: { ttl: S.THIRTY_SECONDS, prompt: !1, tag: 1114 },
            res: { ttl: S.THIRTY_SECONDS, prompt: !1, tag: 1115 },
          },
        },
        ra = { min: S.FIVE_MINUTES, max: S.SEVEN_DAYS },
        rc = { idle: "IDLE", active: "ACTIVE" },
        rh = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
      var rl = Object.defineProperty,
        ru = Object.defineProperties,
        rp = Object.getOwnPropertyDescriptors,
        rf = Object.getOwnPropertySymbols,
        rd = Object.prototype.hasOwnProperty,
        rg = Object.prototype.propertyIsEnumerable,
        rv = (e, t, r) =>
          t in e
            ? rl(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        ry = (e, t) => {
          for (var r in t || (t = {})) rd.call(t, r) && rv(e, r, t[r]);
          if (rf) for (var r of rf(t)) rg.call(t, r) && rv(e, r, t[r]);
          return e;
        },
        rm = (e, t) => ru(e, rp(t));
      class r_ extends w {
        constructor(e) {
          super(e),
            (this.name = "engine"),
            (this.events = new (n())()),
            (this.initialized = !1),
            (this.ignoredPayloadTypes = [s.rV]),
            (this.requestQueue = { state: rc.idle, queue: [] }),
            (this.sessionRequestQueue = { state: rc.idle, queue: [] }),
            (this.requestQueueDelay = S.ONE_SECOND),
            (this.init = async () => {
              this.initialized ||
                (await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                this.registerPairingEvents(),
                this.client.core.pairing.register({ methods: Object.keys(ro) }),
                (this.initialized = !0),
                setTimeout(() => {
                  (this.sessionRequestQueue.queue =
                    this.getPendingSessionRequests()),
                    this.processSessionRequestQueue();
                }, (0, S.toMiliseconds)(this.requestQueueDelay)));
            }),
            (this.connect = async (e) => {
              await this.isInitialized();
              let t = rm(ry({}, e), {
                requiredNamespaces: e.requiredNamespaces || {},
                optionalNamespaces: e.optionalNamespaces || {},
              });
              await this.isValidConnect(t);
              let {
                  pairingTopic: r,
                  requiredNamespaces: i,
                  optionalNamespaces: n,
                  sessionProperties: o,
                  relays: a,
                } = t,
                c = r,
                h,
                l = !1;
              if (
                (c && (l = this.client.core.pairing.pairings.get(c).active),
                !c || !l)
              ) {
                let { topic: e, uri: t } =
                  await this.client.core.pairing.create();
                (c = e), (h = t);
              }
              let u = await this.client.core.crypto.generateKeyPair(),
                p = ry(
                  {
                    requiredNamespaces: i,
                    optionalNamespaces: n,
                    relays: a ?? [{ protocol: "irn" }],
                    proposer: { publicKey: u, metadata: this.client.metadata },
                  },
                  o && { sessionProperties: o }
                ),
                {
                  reject: f,
                  resolve: d,
                  done: g,
                } = (0, s.H1)(S.FIVE_MINUTES, rn);
              if (
                (this.events.once(
                  (0, s.E0)("session_connect"),
                  async ({ error: e, session: t }) => {
                    if (e) f(e);
                    else if (t) {
                      t.self.publicKey = u;
                      let e = rm(ry({}, t), {
                        requiredNamespaces: t.requiredNamespaces,
                        optionalNamespaces: t.optionalNamespaces,
                      });
                      await this.client.session.set(t.topic, e),
                        await this.setExpiry(t.topic, t.expiry),
                        c &&
                          (await this.client.core.pairing.updateMetadata({
                            topic: c,
                            metadata: t.peer.metadata,
                          })),
                        d(e);
                    }
                  }
                ),
                !c)
              ) {
                let { message: e } = (0, s.Z7)(
                  "NO_MATCHING_KEY",
                  `connect() pairing topic: ${c}`
                );
                throw Error(e);
              }
              let v = await this.sendRequest({
                  topic: c,
                  method: "wc_sessionPropose",
                  params: p,
                }),
                y = (0, s.gn)(S.FIVE_MINUTES);
              return (
                await this.setProposal(v, ry({ id: v, expiry: y }, p)),
                { uri: h, approval: g }
              );
            }),
            (this.pair = async (e) => (
              await this.isInitialized(), await this.client.core.pairing.pair(e)
            )),
            (this.approve = async (e) => {
              await this.isInitialized(), await this.isValidApprove(e);
              let {
                  id: t,
                  relayProtocol: r,
                  namespaces: i,
                  sessionProperties: n,
                } = e,
                o = this.client.proposal.get(t),
                {
                  pairingTopic: a,
                  proposer: c,
                  requiredNamespaces: h,
                  optionalNamespaces: l,
                } = o;
              (a = a || ""), (0, s.L5)(h) || (h = (0, s.fc)(i, "approve()"));
              let u = await this.client.core.crypto.generateKeyPair(),
                p = c.publicKey,
                f = await this.client.core.crypto.generateSharedKey(u, p);
              a &&
                t &&
                (await this.client.core.pairing.updateMetadata({
                  topic: a,
                  metadata: c.metadata,
                }),
                await this.sendResult({
                  id: t,
                  topic: a,
                  result: {
                    relay: { protocol: r ?? "irn" },
                    responderPublicKey: u,
                  },
                }),
                await this.client.proposal.delete(
                  t,
                  (0, s.D6)("USER_DISCONNECTED")
                ),
                await this.client.core.pairing.activate({ topic: a }));
              let d = ry(
                {
                  relay: { protocol: r ?? "irn" },
                  namespaces: i,
                  requiredNamespaces: h,
                  optionalNamespaces: l,
                  pairingTopic: a,
                  controller: { publicKey: u, metadata: this.client.metadata },
                  expiry: (0, s.gn)(rs),
                },
                n && { sessionProperties: n }
              );
              await this.client.core.relayer.subscribe(f),
                await this.sendRequest({
                  topic: f,
                  method: "wc_sessionSettle",
                  params: d,
                  throwOnFailedPublish: !0,
                });
              let g = rm(ry({}, d), {
                topic: f,
                pairingTopic: a,
                acknowledged: !1,
                self: d.controller,
                peer: { publicKey: c.publicKey, metadata: c.metadata },
                controller: u,
              });
              return (
                await this.client.session.set(f, g),
                await this.setExpiry(f, (0, s.gn)(rs)),
                {
                  topic: f,
                  acknowledged: () =>
                    new Promise((e) =>
                      setTimeout(() => e(this.client.session.get(f)), 500)
                    ),
                }
              );
            }),
            (this.reject = async (e) => {
              await this.isInitialized(), await this.isValidReject(e);
              let { id: t, reason: r } = e,
                { pairingTopic: i } = this.client.proposal.get(t);
              i &&
                (await this.sendError(t, i, r),
                await this.client.proposal.delete(
                  t,
                  (0, s.D6)("USER_DISCONNECTED")
                ));
            }),
            (this.update = async (e) => {
              await this.isInitialized(), await this.isValidUpdate(e);
              let { topic: t, namespaces: r } = e,
                i = await this.sendRequest({
                  topic: t,
                  method: "wc_sessionUpdate",
                  params: { namespaces: r },
                }),
                { done: n, resolve: o, reject: a } = (0, s.H1)();
              return (
                this.events.once(
                  (0, s.E0)("session_update", i),
                  ({ error: e }) => {
                    e ? a(e) : o();
                  }
                ),
                await this.client.session.update(t, { namespaces: r }),
                { acknowledged: n }
              );
            }),
            (this.extend = async (e) => {
              await this.isInitialized(), await this.isValidExtend(e);
              let { topic: t } = e,
                r = await this.sendRequest({
                  topic: t,
                  method: "wc_sessionExtend",
                  params: {},
                }),
                { done: i, resolve: n, reject: o } = (0, s.H1)();
              return (
                this.events.once(
                  (0, s.E0)("session_extend", r),
                  ({ error: e }) => {
                    e ? o(e) : n();
                  }
                ),
                await this.setExpiry(t, (0, s.gn)(rs)),
                { acknowledged: i }
              );
            }),
            (this.request = async (e) => {
              await this.isInitialized(), await this.isValidRequest(e);
              let { chainId: t, request: r, topic: i, expiry: n } = e,
                o = (0, M.payloadId)(),
                { done: a, resolve: c, reject: h } = (0, s.H1)(n);
              return (
                this.events.once(
                  (0, s.E0)("session_request", o),
                  ({ error: e, result: t }) => {
                    e ? h(e) : c(t);
                  }
                ),
                await Promise.all([
                  new Promise(async (e) => {
                    await this.sendRequest({
                      clientRpcId: o,
                      topic: i,
                      method: "wc_sessionRequest",
                      params: { request: r, chainId: t },
                      expiry: n,
                      throwOnFailedPublish: !0,
                    }).catch((e) => h(e)),
                      this.client.events.emit("session_request_sent", {
                        topic: i,
                        request: r,
                        chainId: t,
                        id: o,
                      }),
                      e();
                  }),
                  new Promise(async (e) => {
                    let t = await this.client.core.storage.getItem(ri);
                    (0, s.Hh)({ id: o, topic: i, wcDeepLink: t }), e();
                  }),
                  a(),
                ]).then((e) => e[2])
              );
            }),
            (this.respond = async (e) => {
              await this.isInitialized(), await this.isValidRespond(e);
              let { topic: t, response: r } = e,
                { id: i } = r;
              (0, M.isJsonRpcResult)(r)
                ? await this.sendResult({
                    id: i,
                    topic: t,
                    result: r.result,
                    throwOnFailedPublish: !0,
                  })
                : (0, M.isJsonRpcError)(r) &&
                  (await this.sendError(i, t, r.error)),
                this.cleanupAfterResponse(e);
            }),
            (this.ping = async (e) => {
              await this.isInitialized(), await this.isValidPing(e);
              let { topic: t } = e;
              if (this.client.session.keys.includes(t)) {
                let e = await this.sendRequest({
                    topic: t,
                    method: "wc_sessionPing",
                    params: {},
                  }),
                  { done: r, resolve: i, reject: n } = (0, s.H1)();
                this.events.once(
                  (0, s.E0)("session_ping", e),
                  ({ error: e }) => {
                    e ? n(e) : i();
                  }
                ),
                  await r();
              } else
                this.client.core.pairing.pairings.keys.includes(t) &&
                  (await this.client.core.pairing.ping({ topic: t }));
            }),
            (this.emit = async (e) => {
              await this.isInitialized(), await this.isValidEmit(e);
              let { topic: t, event: r, chainId: i } = e;
              await this.sendRequest({
                topic: t,
                method: "wc_sessionEvent",
                params: { event: r, chainId: i },
              });
            }),
            (this.disconnect = async (e) => {
              await this.isInitialized(), await this.isValidDisconnect(e);
              let { topic: t } = e;
              this.client.session.keys.includes(t)
                ? (await this.sendRequest({
                    topic: t,
                    method: "wc_sessionDelete",
                    params: (0, s.D6)("USER_DISCONNECTED"),
                    throwOnFailedPublish: !0,
                  }),
                  await this.deleteSession(t))
                : await this.client.core.pairing.disconnect({ topic: t });
            }),
            (this.find = (e) => (
              this.isInitialized(),
              this.client.session.getAll().filter((t) => (0, s.Ih)(t, e))
            )),
            (this.getPendingSessionRequests = () => (
              this.isInitialized(), this.client.pendingRequest.getAll()
            )),
            (this.cleanupDuplicatePairings = async (e) => {
              if (e.pairingTopic)
                try {
                  let t = this.client.core.pairing.pairings.get(e.pairingTopic),
                    r = this.client.core.pairing.pairings
                      .getAll()
                      .filter((r) => {
                        var i, n;
                        return (
                          (null == (i = r.peerMetadata) ? void 0 : i.url) &&
                          (null == (n = r.peerMetadata) ? void 0 : n.url) ===
                            e.peer.metadata.url &&
                          r.topic &&
                          r.topic !== t.topic
                        );
                      });
                  if (0 === r.length) return;
                  this.client.logger.info(
                    `Cleaning up ${r.length} duplicate pairing(s)`
                  ),
                    await Promise.all(
                      r.map((e) =>
                        this.client.core.pairing.disconnect({ topic: e.topic })
                      )
                    ),
                    this.client.logger.info(
                      "Duplicate pairings clean up finished"
                    );
                } catch (e) {
                  this.client.logger.error(e);
                }
            }),
            (this.deleteSession = async (e, t) => {
              let { self: r } = this.client.session.get(e);
              await this.client.core.relayer.unsubscribe(e),
                this.client.session.delete(e, (0, s.D6)("USER_DISCONNECTED")),
                this.client.core.crypto.keychain.has(r.publicKey) &&
                  (await this.client.core.crypto.deleteKeyPair(r.publicKey)),
                this.client.core.crypto.keychain.has(e) &&
                  (await this.client.core.crypto.deleteSymKey(e)),
                t || this.client.core.expirer.del(e),
                this.client.core.storage
                  .removeItem(ri)
                  .catch((e) => this.client.logger.warn(e));
            }),
            (this.deleteProposal = async (e, t) => {
              await Promise.all([
                this.client.proposal.delete(e, (0, s.D6)("USER_DISCONNECTED")),
                t ? Promise.resolve() : this.client.core.expirer.del(e),
              ]);
            }),
            (this.deletePendingSessionRequest = async (e, t, r = !1) => {
              await Promise.all([
                this.client.pendingRequest.delete(e, t),
                r ? Promise.resolve() : this.client.core.expirer.del(e),
              ]),
                (this.sessionRequestQueue.queue =
                  this.sessionRequestQueue.queue.filter((t) => t.id !== e)),
                r && (this.sessionRequestQueue.state = rc.idle);
            }),
            (this.setExpiry = async (e, t) => {
              this.client.session.keys.includes(e) &&
                (await this.client.session.update(e, { expiry: t })),
                this.client.core.expirer.set(e, t);
            }),
            (this.setProposal = async (e, t) => {
              await this.client.proposal.set(e, t),
                this.client.core.expirer.set(e, t.expiry);
            }),
            (this.setPendingSessionRequest = async (e) => {
              let t = ro.wc_sessionRequest.req.ttl,
                { id: r, topic: i, params: n, verifyContext: o } = e;
              await this.client.pendingRequest.set(r, {
                id: r,
                topic: i,
                params: n,
                verifyContext: o,
              }),
                t && this.client.core.expirer.set(r, (0, s.gn)(t));
            }),
            (this.sendRequest = async (e) => {
              let {
                  topic: t,
                  method: r,
                  params: i,
                  expiry: n,
                  relayRpcId: o,
                  clientRpcId: a,
                  throwOnFailedPublish: c,
                } = e,
                h = (0, M.formatJsonRpcRequest)(r, i, a);
              if ((0, s.jU)() && rh.includes(r)) {
                let e = (0, s.rj)(JSON.stringify(h));
                this.client.core.verify.register({ attestationId: e });
              }
              let l = await this.client.core.crypto.encode(t, h),
                u = ro[r].req;
              return (
                n && (u.ttl = n),
                o && (u.id = o),
                this.client.core.history.set(t, h),
                c
                  ? ((u.internal = rm(ry({}, u.internal), {
                      throwOnFailedPublish: !0,
                    })),
                    await this.client.core.relayer.publish(t, l, u))
                  : this.client.core.relayer
                      .publish(t, l, u)
                      .catch((e) => this.client.logger.error(e)),
                h.id
              );
            }),
            (this.sendResult = async (e) => {
              let { id: t, topic: r, result: i, throwOnFailedPublish: n } = e,
                s = (0, M.formatJsonRpcResult)(t, i),
                o = await this.client.core.crypto.encode(r, s),
                a = await this.client.core.history.get(r, t),
                c = ro[a.request.method].res;
              n
                ? ((c.internal = rm(ry({}, c.internal), {
                    throwOnFailedPublish: !0,
                  })),
                  await this.client.core.relayer.publish(r, o, c))
                : this.client.core.relayer
                    .publish(r, o, c)
                    .catch((e) => this.client.logger.error(e)),
                await this.client.core.history.resolve(s);
            }),
            (this.sendError = async (e, t, r) => {
              let i = (0, M.formatJsonRpcError)(e, r),
                n = await this.client.core.crypto.encode(t, i),
                s = await this.client.core.history.get(t, e),
                o = ro[s.request.method].res;
              this.client.core.relayer.publish(t, n, o),
                await this.client.core.history.resolve(i);
            }),
            (this.cleanup = async () => {
              let e = [],
                t = [];
              this.client.session.getAll().forEach((t) => {
                (0, s.Bw)(t.expiry) && e.push(t.topic);
              }),
                this.client.proposal.getAll().forEach((e) => {
                  (0, s.Bw)(e.expiry) && t.push(e.id);
                }),
                await Promise.all([
                  ...e.map((e) => this.deleteSession(e)),
                  ...t.map((e) => this.deleteProposal(e)),
                ]);
            }),
            (this.onRelayEventRequest = async (e) => {
              this.requestQueue.queue.push(e),
                await this.processRequestsQueue();
            }),
            (this.processRequestsQueue = async () => {
              if (this.requestQueue.state === rc.active) {
                this.client.logger.info(
                  "Request queue already active, skipping..."
                );
                return;
              }
              for (
                this.client.logger.info(
                  `Request queue starting with ${this.requestQueue.queue.length} requests`
                );
                this.requestQueue.queue.length > 0;

              ) {
                this.requestQueue.state = rc.active;
                let e = this.requestQueue.queue.shift();
                if (e)
                  try {
                    this.processRequest(e),
                      await new Promise((e) => setTimeout(e, 300));
                  } catch (e) {
                    this.client.logger.warn(e);
                  }
              }
              this.requestQueue.state = rc.idle;
            }),
            (this.processRequest = (e) => {
              let { topic: t, payload: r } = e,
                i = r.method;
              switch (i) {
                case "wc_sessionPropose":
                  return this.onSessionProposeRequest(t, r);
                case "wc_sessionSettle":
                  return this.onSessionSettleRequest(t, r);
                case "wc_sessionUpdate":
                  return this.onSessionUpdateRequest(t, r);
                case "wc_sessionExtend":
                  return this.onSessionExtendRequest(t, r);
                case "wc_sessionPing":
                  return this.onSessionPingRequest(t, r);
                case "wc_sessionDelete":
                  return this.onSessionDeleteRequest(t, r);
                case "wc_sessionRequest":
                  return this.onSessionRequest(t, r);
                case "wc_sessionEvent":
                  return this.onSessionEventRequest(t, r);
                default:
                  return this.client.logger.info(
                    `Unsupported request method ${i}`
                  );
              }
            }),
            (this.onRelayEventResponse = async (e) => {
              let { topic: t, payload: r } = e,
                i = (await this.client.core.history.get(t, r.id)).request
                  .method;
              switch (i) {
                case "wc_sessionPropose":
                  return this.onSessionProposeResponse(t, r);
                case "wc_sessionSettle":
                  return this.onSessionSettleResponse(t, r);
                case "wc_sessionUpdate":
                  return this.onSessionUpdateResponse(t, r);
                case "wc_sessionExtend":
                  return this.onSessionExtendResponse(t, r);
                case "wc_sessionPing":
                  return this.onSessionPingResponse(t, r);
                case "wc_sessionRequest":
                  return this.onSessionRequestResponse(t, r);
                default:
                  return this.client.logger.info(
                    `Unsupported response method ${i}`
                  );
              }
            }),
            (this.onRelayEventUnknownPayload = (e) => {
              let { topic: t } = e,
                { message: r } = (0, s.Z7)(
                  "MISSING_OR_INVALID",
                  `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`
                );
              throw Error(r);
            }),
            (this.onSessionProposeRequest = async (e, t) => {
              let { params: r, id: i } = t;
              try {
                this.isValidConnect(ry({}, t.params));
                let n = (0, s.gn)(S.FIVE_MINUTES),
                  o = ry({ id: i, pairingTopic: e, expiry: n }, r);
                await this.setProposal(i, o);
                let a = (0, s.rj)(JSON.stringify(t)),
                  c = await this.getVerifyContext(a, o.proposer.metadata);
                this.client.events.emit("session_proposal", {
                  id: i,
                  params: o,
                  verifyContext: c,
                });
              } catch (t) {
                await this.sendError(i, e, t), this.client.logger.error(t);
              }
            }),
            (this.onSessionProposeResponse = async (e, t) => {
              let { id: r } = t;
              if ((0, M.isJsonRpcResult)(t)) {
                let { result: i } = t;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  result: i,
                });
                let n = this.client.proposal.get(r);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  proposal: n,
                });
                let s = n.proposer.publicKey;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  selfPublicKey: s,
                });
                let o = i.responderPublicKey;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  peerPublicKey: o,
                });
                let a = await this.client.core.crypto.generateSharedKey(s, o);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  sessionTopic: a,
                });
                let c = await this.client.core.relayer.subscribe(a);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  subscriptionId: c,
                }),
                  await this.client.core.pairing.activate({ topic: e });
              } else
                (0, M.isJsonRpcError)(t) &&
                  (await this.client.proposal.delete(
                    r,
                    (0, s.D6)("USER_DISCONNECTED")
                  ),
                  this.events.emit((0, s.E0)("session_connect"), {
                    error: t.error,
                  }));
            }),
            (this.onSessionSettleRequest = async (e, t) => {
              let { id: r, params: i } = t;
              try {
                this.isValidSessionSettleRequest(i);
                let {
                    relay: r,
                    controller: n,
                    expiry: o,
                    namespaces: a,
                    requiredNamespaces: c,
                    optionalNamespaces: h,
                    sessionProperties: l,
                    pairingTopic: u,
                  } = t.params,
                  p = ry(
                    {
                      topic: e,
                      relay: r,
                      expiry: o,
                      namespaces: a,
                      acknowledged: !0,
                      pairingTopic: u,
                      requiredNamespaces: c,
                      optionalNamespaces: h,
                      controller: n.publicKey,
                      self: { publicKey: "", metadata: this.client.metadata },
                      peer: { publicKey: n.publicKey, metadata: n.metadata },
                    },
                    l && { sessionProperties: l }
                  );
                await this.sendResult({ id: t.id, topic: e, result: !0 }),
                  this.events.emit((0, s.E0)("session_connect"), {
                    session: p,
                  }),
                  this.cleanupDuplicatePairings(p);
              } catch (t) {
                await this.sendError(r, e, t), this.client.logger.error(t);
              }
            }),
            (this.onSessionSettleResponse = async (e, t) => {
              let { id: r } = t;
              (0, M.isJsonRpcResult)(t)
                ? (await this.client.session.update(e, { acknowledged: !0 }),
                  this.events.emit((0, s.E0)("session_approve", r), {}))
                : (0, M.isJsonRpcError)(t) &&
                  (await this.client.session.delete(
                    e,
                    (0, s.D6)("USER_DISCONNECTED")
                  ),
                  this.events.emit((0, s.E0)("session_approve", r), {
                    error: t.error,
                  }));
            }),
            (this.onSessionUpdateRequest = async (e, t) => {
              let { params: r, id: i } = t;
              try {
                let t = `${e}_session_update`,
                  n = s.O6.get(t);
                if (n && this.isRequestOutOfSync(n, i)) {
                  this.client.logger.info(
                    `Discarding out of sync request - ${i}`
                  );
                  return;
                }
                this.isValidUpdate(ry({ topic: e }, r)),
                  await this.client.session.update(e, {
                    namespaces: r.namespaces,
                  }),
                  await this.sendResult({ id: i, topic: e, result: !0 }),
                  this.client.events.emit("session_update", {
                    id: i,
                    topic: e,
                    params: r,
                  }),
                  s.O6.set(t, i);
              } catch (t) {
                await this.sendError(i, e, t), this.client.logger.error(t);
              }
            }),
            (this.isRequestOutOfSync = (e, t) =>
              parseInt(t.toString().slice(0, -3)) <=
              parseInt(e.toString().slice(0, -3))),
            (this.onSessionUpdateResponse = (e, t) => {
              let { id: r } = t;
              (0, M.isJsonRpcResult)(t)
                ? this.events.emit((0, s.E0)("session_update", r), {})
                : (0, M.isJsonRpcError)(t) &&
                  this.events.emit((0, s.E0)("session_update", r), {
                    error: t.error,
                  });
            }),
            (this.onSessionExtendRequest = async (e, t) => {
              let { id: r } = t;
              try {
                this.isValidExtend({ topic: e }),
                  await this.setExpiry(e, (0, s.gn)(rs)),
                  await this.sendResult({ id: r, topic: e, result: !0 }),
                  this.client.events.emit("session_extend", {
                    id: r,
                    topic: e,
                  });
              } catch (t) {
                await this.sendError(r, e, t), this.client.logger.error(t);
              }
            }),
            (this.onSessionExtendResponse = (e, t) => {
              let { id: r } = t;
              (0, M.isJsonRpcResult)(t)
                ? this.events.emit((0, s.E0)("session_extend", r), {})
                : (0, M.isJsonRpcError)(t) &&
                  this.events.emit((0, s.E0)("session_extend", r), {
                    error: t.error,
                  });
            }),
            (this.onSessionPingRequest = async (e, t) => {
              let { id: r } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult({ id: r, topic: e, result: !0 }),
                  this.client.events.emit("session_ping", { id: r, topic: e });
              } catch (t) {
                await this.sendError(r, e, t), this.client.logger.error(t);
              }
            }),
            (this.onSessionPingResponse = (e, t) => {
              let { id: r } = t;
              setTimeout(() => {
                (0, M.isJsonRpcResult)(t)
                  ? this.events.emit((0, s.E0)("session_ping", r), {})
                  : (0, M.isJsonRpcError)(t) &&
                    this.events.emit((0, s.E0)("session_ping", r), {
                      error: t.error,
                    });
              }, 500);
            }),
            (this.onSessionDeleteRequest = async (e, t) => {
              let { id: r } = t;
              try {
                this.isValidDisconnect({ topic: e, reason: t.params }),
                  await Promise.all([
                    new Promise((t) => {
                      this.client.core.relayer.once(tp.publish, async () => {
                        t(await this.deleteSession(e));
                      });
                    }),
                    this.sendResult({ id: r, topic: e, result: !0 }),
                  ]),
                  this.client.events.emit("session_delete", {
                    id: r,
                    topic: e,
                  });
              } catch (e) {
                this.client.logger.error(e);
              }
            }),
            (this.onSessionRequest = async (e, t) => {
              let { id: r, params: i } = t;
              try {
                this.isValidRequest(ry({ topic: e }, i));
                let t = (0, s.rj)(
                    JSON.stringify(
                      (0, M.formatJsonRpcRequest)("wc_sessionRequest", i, r)
                    )
                  ),
                  n = this.client.session.get(e),
                  o = await this.getVerifyContext(t, n.peer.metadata),
                  a = { id: r, topic: e, params: i, verifyContext: o };
                await this.setPendingSessionRequest(a),
                  this.addSessionRequestToSessionRequestQueue(a),
                  this.processSessionRequestQueue();
              } catch (t) {
                await this.sendError(r, e, t), this.client.logger.error(t);
              }
            }),
            (this.onSessionRequestResponse = (e, t) => {
              let { id: r } = t;
              (0, M.isJsonRpcResult)(t)
                ? this.events.emit((0, s.E0)("session_request", r), {
                    result: t.result,
                  })
                : (0, M.isJsonRpcError)(t) &&
                  this.events.emit((0, s.E0)("session_request", r), {
                    error: t.error,
                  });
            }),
            (this.onSessionEventRequest = async (e, t) => {
              let { id: r, params: i } = t;
              try {
                let t = `${e}_session_event_${i.event.name}`,
                  n = s.O6.get(t);
                if (n && this.isRequestOutOfSync(n, r)) {
                  this.client.logger.info(
                    `Discarding out of sync request - ${r}`
                  );
                  return;
                }
                this.isValidEmit(ry({ topic: e }, i)),
                  this.client.events.emit("session_event", {
                    id: r,
                    topic: e,
                    params: i,
                  }),
                  s.O6.set(t, r);
              } catch (t) {
                await this.sendError(r, e, t), this.client.logger.error(t);
              }
            }),
            (this.addSessionRequestToSessionRequestQueue = (e) => {
              this.sessionRequestQueue.queue.push(e);
            }),
            (this.cleanupAfterResponse = (e) => {
              this.deletePendingSessionRequest(e.response.id, {
                message: "fulfilled",
                code: 0,
              }),
                setTimeout(() => {
                  (this.sessionRequestQueue.state = rc.idle),
                    this.processSessionRequestQueue();
                }, (0, S.toMiliseconds)(this.requestQueueDelay));
            }),
            (this.processSessionRequestQueue = () => {
              if (this.sessionRequestQueue.state === rc.active) {
                this.client.logger.info(
                  "session request queue is already active."
                );
                return;
              }
              let e = this.sessionRequestQueue.queue[0];
              if (!e) {
                this.client.logger.info("session request queue is empty.");
                return;
              }
              try {
                (this.sessionRequestQueue.state = rc.active),
                  this.client.events.emit("session_request", e);
              } catch (e) {
                this.client.logger.error(e);
              }
            }),
            (this.onPairingCreated = (e) => {
              if (e.active) return;
              let t = this.client.proposal
                .getAll()
                .find((t) => t.pairingTopic === e.topic);
              t &&
                this.onSessionProposeRequest(
                  e.topic,
                  (0, M.formatJsonRpcRequest)(
                    "wc_sessionPropose",
                    {
                      requiredNamespaces: t.requiredNamespaces,
                      optionalNamespaces: t.optionalNamespaces,
                      relays: t.relays,
                      proposer: t.proposer,
                    },
                    t.id
                  )
                );
            }),
            (this.isValidConnect = async (e) => {
              if (!(0, s.EJ)(e)) {
                let { message: t } = (0, s.Z7)(
                  "MISSING_OR_INVALID",
                  `connect() params: ${JSON.stringify(e)}`
                );
                throw Error(t);
              }
              let {
                pairingTopic: t,
                requiredNamespaces: r,
                optionalNamespaces: i,
                sessionProperties: n,
                relays: o,
              } = e;
              if (
                ((0, s.o8)(t) || (await this.isValidPairingTopic(t)),
                !(0, s.PM)(o, !0))
              ) {
                let { message: e } = (0, s.Z7)(
                  "MISSING_OR_INVALID",
                  `connect() relays: ${o}`
                );
                throw Error(e);
              }
              (0, s.o8)(r) ||
                0 === (0, s.L5)(r) ||
                this.validateNamespaces(r, "requiredNamespaces"),
                (0, s.o8)(i) ||
                  0 === (0, s.L5)(i) ||
                  this.validateNamespaces(i, "optionalNamespaces"),
                (0, s.o8)(n) ||
                  this.validateSessionProps(n, "sessionProperties");
            }),
            (this.validateNamespaces = (e, t) => {
              let r = (0, s.n)(e, "connect()", t);
              if (r) throw Error(r.message);
            }),
            (this.isValidApprove = async (e) => {
              if (!(0, s.EJ)(e))
                throw Error(
                  (0, s.Z7)("MISSING_OR_INVALID", `approve() params: ${e}`)
                    .message
                );
              let {
                id: t,
                namespaces: r,
                relayProtocol: i,
                sessionProperties: n,
              } = e;
              await this.isValidProposalId(t);
              let o = this.client.proposal.get(t),
                a = (0, s.in)(r, "approve()");
              if (a) throw Error(a.message);
              let c = (0, s.rF)(o.requiredNamespaces, r, "approve()");
              if (c) throw Error(c.message);
              if (!(0, s.M_)(i, !0)) {
                let { message: e } = (0, s.Z7)(
                  "MISSING_OR_INVALID",
                  `approve() relayProtocol: ${i}`
                );
                throw Error(e);
              }
              (0, s.o8)(n) || this.validateSessionProps(n, "sessionProperties");
            }),
            (this.isValidReject = async (e) => {
              if (!(0, s.EJ)(e)) {
                let { message: t } = (0, s.Z7)(
                  "MISSING_OR_INVALID",
                  `reject() params: ${e}`
                );
                throw Error(t);
              }
              let { id: t, reason: r } = e;
              if ((await this.isValidProposalId(t), !(0, s.$t)(r))) {
                let { message: e } = (0, s.Z7)(
                  "MISSING_OR_INVALID",
                  `reject() reason: ${JSON.stringify(r)}`
                );
                throw Error(e);
              }
            }),
            (this.isValidSessionSettleRequest = (e) => {
              if (!(0, s.EJ)(e)) {
                let { message: t } = (0, s.Z7)(
                  "MISSING_OR_INVALID",
                  `onSessionSettleRequest() params: ${e}`
                );
                throw Error(t);
              }
              let { relay: t, controller: r, namespaces: i, expiry: n } = e;
              if (!(0, s.Z2)(t)) {
                let { message: e } = (0, s.Z7)(
                  "MISSING_OR_INVALID",
                  "onSessionSettleRequest() relay protocol should be a string"
                );
                throw Error(e);
              }
              let o = (0, s.Dd)(r, "onSessionSettleRequest()");
              if (o) throw Error(o.message);
              let a = (0, s.in)(i, "onSessionSettleRequest()");
              if (a) throw Error(a.message);
              if ((0, s.Bw)(n)) {
                let { message: e } = (0, s.Z7)(
                  "EXPIRED",
                  "onSessionSettleRequest()"
                );
                throw Error(e);
              }
            }),
            (this.isValidUpdate = async (e) => {
              if (!(0, s.EJ)(e)) {
                let { message: t } = (0, s.Z7)(
                  "MISSING_OR_INVALID",
                  `update() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t, namespaces: r } = e;
              await this.isValidSessionTopic(t);
              let i = this.client.session.get(t),
                n = (0, s.in)(r, "update()");
              if (n) throw Error(n.message);
              let o = (0, s.rF)(i.requiredNamespaces, r, "update()");
              if (o) throw Error(o.message);
            }),
            (this.isValidExtend = async (e) => {
              if (!(0, s.EJ)(e)) {
                let { message: t } = (0, s.Z7)(
                  "MISSING_OR_INVALID",
                  `extend() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidSessionTopic(t);
            }),
            (this.isValidRequest = async (e) => {
              if (!(0, s.EJ)(e)) {
                let { message: t } = (0, s.Z7)(
                  "MISSING_OR_INVALID",
                  `request() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t, request: r, chainId: i, expiry: n } = e;
              await this.isValidSessionTopic(t);
              let { namespaces: o } = this.client.session.get(t);
              if (!(0, s.p8)(o, i)) {
                let { message: e } = (0, s.Z7)(
                  "MISSING_OR_INVALID",
                  `request() chainId: ${i}`
                );
                throw Error(e);
              }
              if (!(0, s.hH)(r)) {
                let { message: e } = (0, s.Z7)(
                  "MISSING_OR_INVALID",
                  `request() ${JSON.stringify(r)}`
                );
                throw Error(e);
              }
              if (!(0, s.al)(o, i, r.method)) {
                let { message: e } = (0, s.Z7)(
                  "MISSING_OR_INVALID",
                  `request() method: ${r.method}`
                );
                throw Error(e);
              }
              if (n && !(0, s.ON)(n, ra)) {
                let { message: e } = (0, s.Z7)(
                  "MISSING_OR_INVALID",
                  `request() expiry: ${n}. Expiry must be a number (in seconds) between ${ra.min} and ${ra.max}`
                );
                throw Error(e);
              }
            }),
            (this.isValidRespond = async (e) => {
              if (!(0, s.EJ)(e)) {
                let { message: t } = (0, s.Z7)(
                  "MISSING_OR_INVALID",
                  `respond() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t, response: r } = e;
              if ((await this.isValidSessionTopic(t), !(0, s.JT)(r))) {
                let { message: e } = (0, s.Z7)(
                  "MISSING_OR_INVALID",
                  `respond() response: ${JSON.stringify(r)}`
                );
                throw Error(e);
              }
            }),
            (this.isValidPing = async (e) => {
              if (!(0, s.EJ)(e)) {
                let { message: t } = (0, s.Z7)(
                  "MISSING_OR_INVALID",
                  `ping() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            (this.isValidEmit = async (e) => {
              if (!(0, s.EJ)(e)) {
                let { message: t } = (0, s.Z7)(
                  "MISSING_OR_INVALID",
                  `emit() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t, event: r, chainId: i } = e;
              await this.isValidSessionTopic(t);
              let { namespaces: n } = this.client.session.get(t);
              if (!(0, s.p8)(n, i)) {
                let { message: e } = (0, s.Z7)(
                  "MISSING_OR_INVALID",
                  `emit() chainId: ${i}`
                );
                throw Error(e);
              }
              if (!(0, s.nf)(r)) {
                let { message: e } = (0, s.Z7)(
                  "MISSING_OR_INVALID",
                  `emit() event: ${JSON.stringify(r)}`
                );
                throw Error(e);
              }
              if (!(0, s.sI)(n, i, r.name)) {
                let { message: e } = (0, s.Z7)(
                  "MISSING_OR_INVALID",
                  `emit() event: ${JSON.stringify(r)}`
                );
                throw Error(e);
              }
            }),
            (this.isValidDisconnect = async (e) => {
              if (!(0, s.EJ)(e)) {
                let { message: t } = (0, s.Z7)(
                  "MISSING_OR_INVALID",
                  `disconnect() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            (this.getVerifyContext = async (e, t) => {
              let r = {
                verified: {
                  verifyUrl: t.verifyUrl || tE,
                  validation: "UNKNOWN",
                  origin: t.url || "",
                },
              };
              try {
                let i = await this.client.core.verify.resolve({
                  attestationId: e,
                  verifyUrl: t.verifyUrl,
                });
                i &&
                  ((r.verified.origin = i.origin),
                  (r.verified.isScam = i.isScam),
                  (r.verified.validation =
                    i.origin === new URL(t.url).origin ? "VALID" : "INVALID"));
              } catch (e) {
                this.client.logger.info(e);
              }
              return (
                this.client.logger.info(`Verify context: ${JSON.stringify(r)}`),
                r
              );
            }),
            (this.validateSessionProps = (e, t) => {
              Object.values(e).forEach((e) => {
                if (!(0, s.M_)(e, !1)) {
                  let { message: r } = (0, s.Z7)(
                    "MISSING_OR_INVALID",
                    `${t} must be in Record<string, string> format. Received: ${JSON.stringify(
                      e
                    )}`
                  );
                  throw Error(r);
                }
              });
            });
        }
        async isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, s.Z7)("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
          await this.client.core.relayer.confirmOnlineStateOrThrow();
        }
        registerRelayerEvents() {
          this.client.core.relayer.on(tp.message, async (e) => {
            let { topic: t, message: r } = e;
            if (
              this.ignoredPayloadTypes.includes(
                this.client.core.crypto.getPayloadType(r)
              )
            )
              return;
            let i = await this.client.core.crypto.decode(t, r);
            try {
              (0, M.isJsonRpcRequest)(i)
                ? (this.client.core.history.set(t, i),
                  this.onRelayEventRequest({ topic: t, payload: i }))
                : (0, M.isJsonRpcResponse)(i)
                ? (await this.client.core.history.resolve(i),
                  await this.onRelayEventResponse({ topic: t, payload: i }),
                  this.client.core.history.delete(t, i.id))
                : this.onRelayEventUnknownPayload({ topic: t, payload: i });
            } catch (e) {
              this.client.logger.error(e);
            }
          });
        }
        registerExpirerEvents() {
          this.client.core.expirer.on(tw.expired, async (e) => {
            let { topic: t, id: r } = (0, s.iP)(e.target);
            if (r && this.client.pendingRequest.keys.includes(r))
              return await this.deletePendingSessionRequest(
                r,
                (0, s.Z7)("EXPIRED"),
                !0
              );
            t
              ? this.client.session.keys.includes(t) &&
                (await this.deleteSession(t, !0),
                this.client.events.emit("session_expire", { topic: t }))
              : r &&
                (await this.deleteProposal(r, !0),
                this.client.events.emit("proposal_expire", { id: r }));
          });
        }
        registerPairingEvents() {
          this.client.core.pairing.events.on(tm.create, (e) =>
            this.onPairingCreated(e)
          );
        }
        isValidPairingTopic(e) {
          if (!(0, s.M_)(e, !1)) {
            let { message: t } = (0, s.Z7)(
              "MISSING_OR_INVALID",
              `pairing topic should be a string: ${e}`
            );
            throw Error(t);
          }
          if (!this.client.core.pairing.pairings.keys.includes(e)) {
            let { message: t } = (0, s.Z7)(
              "NO_MATCHING_KEY",
              `pairing topic doesn't exist: ${e}`
            );
            throw Error(t);
          }
          if ((0, s.Bw)(this.client.core.pairing.pairings.get(e).expiry)) {
            let { message: t } = (0, s.Z7)("EXPIRED", `pairing topic: ${e}`);
            throw Error(t);
          }
        }
        async isValidSessionTopic(e) {
          if (!(0, s.M_)(e, !1)) {
            let { message: t } = (0, s.Z7)(
              "MISSING_OR_INVALID",
              `session topic should be a string: ${e}`
            );
            throw Error(t);
          }
          if (!this.client.session.keys.includes(e)) {
            let { message: t } = (0, s.Z7)(
              "NO_MATCHING_KEY",
              `session topic doesn't exist: ${e}`
            );
            throw Error(t);
          }
          if ((0, s.Bw)(this.client.session.get(e).expiry)) {
            await this.deleteSession(e);
            let { message: t } = (0, s.Z7)("EXPIRED", `session topic: ${e}`);
            throw Error(t);
          }
        }
        async isValidSessionOrPairingTopic(e) {
          if (this.client.session.keys.includes(e))
            await this.isValidSessionTopic(e);
          else if (this.client.core.pairing.pairings.keys.includes(e))
            this.isValidPairingTopic(e);
          else if ((0, s.M_)(e, !1)) {
            let { message: t } = (0, s.Z7)(
              "NO_MATCHING_KEY",
              `session or pairing topic doesn't exist: ${e}`
            );
            throw Error(t);
          } else {
            let { message: t } = (0, s.Z7)(
              "MISSING_OR_INVALID",
              `session or pairing topic should be a string: ${e}`
            );
            throw Error(t);
          }
        }
        async isValidProposalId(e) {
          if (!(0, s.Q0)(e)) {
            let { message: t } = (0, s.Z7)(
              "MISSING_OR_INVALID",
              `proposal id should be a number: ${e}`
            );
            throw Error(t);
          }
          if (!this.client.proposal.keys.includes(e)) {
            let { message: t } = (0, s.Z7)(
              "NO_MATCHING_KEY",
              `proposal id doesn't exist: ${e}`
            );
            throw Error(t);
          }
          if ((0, s.Bw)(this.client.proposal.get(e).expiry)) {
            await this.deleteProposal(e);
            let { message: t } = (0, s.Z7)("EXPIRED", `proposal id: ${e}`);
            throw Error(t);
          }
        }
      }
      class rw extends tY {
        constructor(e, t) {
          super(e, t, "proposal", rt), (this.core = e), (this.logger = t);
        }
      }
      class rb extends tY {
        constructor(e, t) {
          super(e, t, "session", rt), (this.core = e), (this.logger = t);
        }
      }
      class rE extends tY {
        constructor(e, t) {
          super(e, t, "request", rt, (e) => e.id),
            (this.core = e),
            (this.logger = t);
        }
      }
      class rI extends _ {
        constructor(e) {
          super(e),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.name = rr.name),
            (this.events = new i.EventEmitter()),
            (this.on = (e, t) => this.events.on(e, t)),
            (this.once = (e, t) => this.events.once(e, t)),
            (this.off = (e, t) => this.events.off(e, t)),
            (this.removeListener = (e, t) => this.events.removeListener(e, t)),
            (this.removeAllListeners = (e) =>
              this.events.removeAllListeners(e)),
            (this.connect = async (e) => {
              try {
                return await this.engine.connect(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.pair = async (e) => {
              try {
                return await this.engine.pair(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.approve = async (e) => {
              try {
                return await this.engine.approve(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.reject = async (e) => {
              try {
                return await this.engine.reject(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.update = async (e) => {
              try {
                return await this.engine.update(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.extend = async (e) => {
              try {
                return await this.engine.extend(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.request = async (e) => {
              try {
                return await this.engine.request(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.respond = async (e) => {
              try {
                return await this.engine.respond(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.ping = async (e) => {
              try {
                return await this.engine.ping(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.emit = async (e) => {
              try {
                return await this.engine.emit(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.disconnect = async (e) => {
              try {
                return await this.engine.disconnect(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.find = (e) => {
              try {
                return this.engine.find(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.getPendingSessionRequests = () => {
              try {
                return this.engine.getPendingSessionRequests();
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.name = e?.name || rr.name),
            (this.metadata = e?.metadata || (0, s.D)());
          let t =
            "u" > typeof e?.logger && "string" != typeof e?.logger
              ? e.logger
              : (0, c.pino)(
                  (0, c.getDefaultLoggerOptions)({
                    level: e?.logger || rr.logger,
                  })
                );
          (this.core = e?.core || new t8(e)),
            (this.logger = (0, c.generateChildLogger)(t, this.name)),
            (this.session = new rb(this.core, this.logger)),
            (this.proposal = new rw(this.core, this.logger)),
            (this.pendingRequest = new rE(this.core, this.logger)),
            (this.engine = new r_(this));
        }
        static async init(e) {
          let t = new rI(e);
          return await t.initialize(), t;
        }
        get context() {
          return (0, c.getLoggerContext)(this.logger);
        }
        get pairing() {
          return this.core.pairing.pairings;
        }
        async initialize() {
          this.logger.trace("Initialized");
          try {
            await this.core.start(),
              await this.session.init(),
              await this.proposal.init(),
              await this.pendingRequest.init(),
              await this.engine.init(),
              this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }),
              this.logger.info("SignClient Initialization Success");
          } catch (e) {
            throw (
              (this.logger.info("SignClient Initialization Failure"),
              this.logger.error(e.message),
              e)
            );
          }
        }
      }
      var rP = r(99003);
      let rS = "error",
        rR = "wc@2:universal_provider:",
        rO = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
      var rx =
          "u" > typeof globalThis
            ? globalThis
            : "u" > typeof window
            ? window
            : "u" > typeof r.g
            ? r.g
            : "u" > typeof self
            ? self
            : {},
        rC = { exports: {} };
      /**
       * @license
       * Lodash <https://lodash.com/>
       * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
       * Released under MIT license <https://lodash.com/license>
       * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
       * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
       */ !(function (e, t) {
        (function () {
          var r,
            i = "Expected a function",
            n = "__lodash_hash_undefined__",
            s = "__lodash_placeholder__",
            o = 1 / 0,
            a = 0 / 0,
            c = [
              ["ary", 128],
              ["bind", 1],
              ["bindKey", 2],
              ["curry", 8],
              ["curryRight", 16],
              ["flip", 512],
              ["partial", 32],
              ["partialRight", 64],
              ["rearg", 256],
            ],
            h = "[object Arguments]",
            l = "[object Array]",
            u = "[object Boolean]",
            p = "[object Date]",
            f = "[object Error]",
            d = "[object Function]",
            g = "[object GeneratorFunction]",
            v = "[object Map]",
            y = "[object Number]",
            m = "[object Object]",
            _ = "[object Promise]",
            w = "[object RegExp]",
            b = "[object Set]",
            E = "[object String]",
            I = "[object Symbol]",
            P = "[object WeakMap]",
            S = "[object ArrayBuffer]",
            R = "[object DataView]",
            O = "[object Float32Array]",
            x = "[object Float64Array]",
            C = "[object Int8Array]",
            A = "[object Int16Array]",
            N = "[object Int32Array]",
            T = "[object Uint8Array]",
            q = "[object Uint8ClampedArray]",
            j = "[object Uint16Array]",
            L = "[object Uint32Array]",
            D = /\b__p \+= '';/g,
            z = /\b(__p \+=) '' \+/g,
            M = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            U = /&(?:amp|lt|gt|quot|#39);/g,
            k = /[&<>"']/g,
            $ = RegExp(U.source),
            H = RegExp(k.source),
            V = /<%-([\s\S]+?)%>/g,
            K = /<%([\s\S]+?)%>/g,
            B = /<%=([\s\S]+?)%>/g,
            J = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            F = /^\w*$/,
            W =
              /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            Z = /[\\^$.*+?()[\]{}|]/g,
            G = RegExp(Z.source),
            Q = /^\s+/,
            Y = /\s/,
            X = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
            ee = /\{\n\/\* \[wrapped with (.+)\] \*/,
            et = /,? & /,
            er = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
            ei = /[()=,{}\[\]\/\s]/,
            en = /\\(\\)?/g,
            es = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            eo = /\w*$/,
            ea = /^[-+]0x[0-9a-f]+$/i,
            ec = /^0b[01]+$/i,
            eh = /^\[object .+?Constructor\]$/,
            el = /^0o[0-7]+$/i,
            eu = /^(?:0|[1-9]\d*)$/,
            ep = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            ef = /($^)/,
            ed = /['\n\r\u2028\u2029\\]/g,
            eg = "\ud800-\udfff",
            ev = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
            ey = "\\u2700-\\u27bf",
            em = "a-z\\xdf-\\xf6\\xf8-\\xff",
            e_ = "A-Z\\xc0-\\xd6\\xd8-\\xde",
            ew = "\\ufe0e\\ufe0f",
            eb =
              "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
            eE = "['’]",
            eI = "[" + eb + "]",
            eP = "[" + ev + "]",
            eS = "[" + em + "]",
            eR = "[^" + eg + eb + "\\d+" + ey + em + e_ + "]",
            eO = "\ud83c[\udffb-\udfff]",
            ex = "[^" + eg + "]",
            eC = "(?:\ud83c[\udde6-\uddff]){2}",
            eA = "[\ud800-\udbff][\udc00-\udfff]",
            eN = "[" + e_ + "]",
            eT = "\\u200d",
            eq = "(?:" + eS + "|" + eR + ")",
            ej = "(?:" + eE + "(?:d|ll|m|re|s|t|ve))?",
            eL = "(?:" + eE + "(?:D|LL|M|RE|S|T|VE))?",
            eD = "(?:" + eP + "|" + eO + ")?",
            ez = "[" + ew + "]?",
            eM =
              "(?:" +
              eT +
              "(?:" +
              [ex, eC, eA].join("|") +
              ")" +
              ez +
              eD +
              ")*",
            eU = ez + eD + eM,
            ek = "(?:" + ["[" + ey + "]", eC, eA].join("|") + ")" + eU,
            e$ =
              "(?:" +
              [ex + eP + "?", eP, eC, eA, "[" + eg + "]"].join("|") +
              ")",
            eH = RegExp(eE, "g"),
            eV = RegExp(eP, "g"),
            eK = RegExp(eO + "(?=" + eO + ")|" + e$ + eU, "g"),
            eB = RegExp(
              [
                eN +
                  "?" +
                  eS +
                  "+" +
                  ej +
                  "(?=" +
                  [eI, eN, "$"].join("|") +
                  ")",
                "(?:" +
                  eN +
                  "|" +
                  eR +
                  ")+" +
                  eL +
                  "(?=" +
                  [eI, eN + eq, "$"].join("|") +
                  ")",
                eN + "?" + eq + "+" + ej,
                eN + "+" + eL,
                "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                "\\d+",
                ek,
              ].join("|"),
              "g"
            ),
            eJ = RegExp("[" + eT + eg + ev + ew + "]"),
            eF =
              /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            eW = [
              "Array",
              "Buffer",
              "DataView",
              "Date",
              "Error",
              "Float32Array",
              "Float64Array",
              "Function",
              "Int8Array",
              "Int16Array",
              "Int32Array",
              "Map",
              "Math",
              "Object",
              "Promise",
              "RegExp",
              "Set",
              "String",
              "Symbol",
              "TypeError",
              "Uint8Array",
              "Uint8ClampedArray",
              "Uint16Array",
              "Uint32Array",
              "WeakMap",
              "_",
              "clearTimeout",
              "isFinite",
              "parseInt",
              "setTimeout",
            ],
            eZ = -1,
            eG = {};
          (eG[O] =
            eG[x] =
            eG[C] =
            eG[A] =
            eG[N] =
            eG[T] =
            eG[q] =
            eG[j] =
            eG[L] =
              !0),
            (eG[h] =
              eG[l] =
              eG[S] =
              eG[u] =
              eG[R] =
              eG[p] =
              eG[f] =
              eG[d] =
              eG[v] =
              eG[y] =
              eG[m] =
              eG[w] =
              eG[b] =
              eG[E] =
              eG[P] =
                !1);
          var eQ = {};
          (eQ[h] =
            eQ[l] =
            eQ[S] =
            eQ[R] =
            eQ[u] =
            eQ[p] =
            eQ[O] =
            eQ[x] =
            eQ[C] =
            eQ[A] =
            eQ[N] =
            eQ[v] =
            eQ[y] =
            eQ[m] =
            eQ[w] =
            eQ[b] =
            eQ[E] =
            eQ[I] =
            eQ[T] =
            eQ[q] =
            eQ[j] =
            eQ[L] =
              !0),
            (eQ[f] = eQ[d] = eQ[P] = !1);
          var eY = {
              "\\": "\\",
              "'": "'",
              "\n": "n",
              "\r": "r",
              "\u2028": "u2028",
              "\u2029": "u2029",
            },
            eX = parseFloat,
            e0 = parseInt,
            e1 = "object" == typeof rx && rx && rx.Object === Object && rx,
            e5 =
              "object" == typeof self && self && self.Object === Object && self,
            e6 = e1 || e5 || Function("return this")(),
            e3 = t && !t.nodeType && t,
            e2 = e3 && e && !e.nodeType && e,
            e9 = e2 && e2.exports === e3,
            e4 = e9 && e1.process,
            e7 = (function () {
              try {
                return (
                  (e2 && e2.require && e2.require("util").types) ||
                  (e4 && e4.binding && e4.binding("util"))
                );
              } catch {}
            })(),
            e8 = e7 && e7.isArrayBuffer,
            te = e7 && e7.isDate,
            tt = e7 && e7.isMap,
            tr = e7 && e7.isRegExp,
            ti = e7 && e7.isSet,
            tn = e7 && e7.isTypedArray;
          function ts(e, t, r) {
            switch (r.length) {
              case 0:
                return e.call(t);
              case 1:
                return e.call(t, r[0]);
              case 2:
                return e.call(t, r[0], r[1]);
              case 3:
                return e.call(t, r[0], r[1], r[2]);
            }
            return e.apply(t, r);
          }
          function to(e, t, r, i) {
            for (var n = -1, s = null == e ? 0 : e.length; ++n < s; ) {
              var o = e[n];
              t(i, o, r(o), e);
            }
            return i;
          }
          function ta(e, t) {
            for (
              var r = -1, i = null == e ? 0 : e.length;
              ++r < i && !1 !== t(e[r], r, e);

            );
            return e;
          }
          function tc(e, t) {
            for (
              var r = null == e ? 0 : e.length;
              r-- && !1 !== t(e[r], r, e);

            );
            return e;
          }
          function th(e, t) {
            for (var r = -1, i = null == e ? 0 : e.length; ++r < i; )
              if (!t(e[r], r, e)) return !1;
            return !0;
          }
          function tl(e, t) {
            for (
              var r = -1, i = null == e ? 0 : e.length, n = 0, s = [];
              ++r < i;

            ) {
              var o = e[r];
              t(o, r, e) && (s[n++] = o);
            }
            return s;
          }
          function tu(e, t) {
            return !!(null == e ? 0 : e.length) && tb(e, t, 0) > -1;
          }
          function tp(e, t, r) {
            for (var i = -1, n = null == e ? 0 : e.length; ++i < n; )
              if (r(t, e[i])) return !0;
            return !1;
          }
          function tf(e, t) {
            for (
              var r = -1, i = null == e ? 0 : e.length, n = Array(i);
              ++r < i;

            )
              n[r] = t(e[r], r, e);
            return n;
          }
          function td(e, t) {
            for (var r = -1, i = t.length, n = e.length; ++r < i; )
              e[n + r] = t[r];
            return e;
          }
          function tg(e, t, r, i) {
            var n = -1,
              s = null == e ? 0 : e.length;
            for (i && s && (r = e[++n]); ++n < s; ) r = t(r, e[n], n, e);
            return r;
          }
          function tv(e, t, r, i) {
            var n = null == e ? 0 : e.length;
            for (i && n && (r = e[--n]); n--; ) r = t(r, e[n], n, e);
            return r;
          }
          function ty(e, t) {
            for (var r = -1, i = null == e ? 0 : e.length; ++r < i; )
              if (t(e[r], r, e)) return !0;
            return !1;
          }
          var tm = tS("length");
          function t_(e, t, r) {
            var i;
            return (
              r(e, function (e, r, n) {
                if (t(e, r, n)) return (i = r), !1;
              }),
              i
            );
          }
          function tw(e, t, r, i) {
            for (var n = e.length, s = r + (i ? 1 : -1); i ? s-- : ++s < n; )
              if (t(e[s], s, e)) return s;
            return -1;
          }
          function tb(e, t, r) {
            return t == t
              ? (function (e, t, r) {
                  for (var i = r - 1, n = e.length; ++i < n; )
                    if (e[i] === t) return i;
                  return -1;
                })(e, t, r)
              : tw(e, tI, r);
          }
          function tE(e, t, r, i) {
            for (var n = r - 1, s = e.length; ++n < s; )
              if (i(e[n], t)) return n;
            return -1;
          }
          function tI(e) {
            return e != e;
          }
          function tP(e, t) {
            var r = null == e ? 0 : e.length;
            return r ? tx(e, t) / r : a;
          }
          function tS(e) {
            return function (t) {
              return null == t ? r : t[e];
            };
          }
          function tR(e) {
            return function (t) {
              return null == e ? r : e[t];
            };
          }
          function tO(e, t, r, i, n) {
            return (
              n(e, function (e, n, s) {
                r = i ? ((i = !1), e) : t(r, e, n, s);
              }),
              r
            );
          }
          function tx(e, t) {
            for (var i, n = -1, s = e.length; ++n < s; ) {
              var o = t(e[n]);
              o !== r && (i = i === r ? o : i + o);
            }
            return i;
          }
          function tC(e, t) {
            for (var r = -1, i = Array(e); ++r < e; ) i[r] = t(r);
            return i;
          }
          function tA(e) {
            return e && e.slice(0, tJ(e) + 1).replace(Q, "");
          }
          function tN(e) {
            return function (t) {
              return e(t);
            };
          }
          function tT(e, t) {
            return tf(t, function (t) {
              return e[t];
            });
          }
          function tq(e, t) {
            return e.has(t);
          }
          function tj(e, t) {
            for (var r = -1, i = e.length; ++r < i && tb(t, e[r], 0) > -1; );
            return r;
          }
          function tL(e, t) {
            for (var r = e.length; r-- && tb(t, e[r], 0) > -1; );
            return r;
          }
          var tD = tR({
              À: "A",
              Á: "A",
              Â: "A",
              Ã: "A",
              Ä: "A",
              Å: "A",
              à: "a",
              á: "a",
              â: "a",
              ã: "a",
              ä: "a",
              å: "a",
              Ç: "C",
              ç: "c",
              Ð: "D",
              ð: "d",
              È: "E",
              É: "E",
              Ê: "E",
              Ë: "E",
              è: "e",
              é: "e",
              ê: "e",
              ë: "e",
              Ì: "I",
              Í: "I",
              Î: "I",
              Ï: "I",
              ì: "i",
              í: "i",
              î: "i",
              ï: "i",
              Ñ: "N",
              ñ: "n",
              Ò: "O",
              Ó: "O",
              Ô: "O",
              Õ: "O",
              Ö: "O",
              Ø: "O",
              ò: "o",
              ó: "o",
              ô: "o",
              õ: "o",
              ö: "o",
              ø: "o",
              Ù: "U",
              Ú: "U",
              Û: "U",
              Ü: "U",
              ù: "u",
              ú: "u",
              û: "u",
              ü: "u",
              Ý: "Y",
              ý: "y",
              ÿ: "y",
              Æ: "Ae",
              æ: "ae",
              Þ: "Th",
              þ: "th",
              ß: "ss",
              Ā: "A",
              Ă: "A",
              Ą: "A",
              ā: "a",
              ă: "a",
              ą: "a",
              Ć: "C",
              Ĉ: "C",
              Ċ: "C",
              Č: "C",
              ć: "c",
              ĉ: "c",
              ċ: "c",
              č: "c",
              Ď: "D",
              Đ: "D",
              ď: "d",
              đ: "d",
              Ē: "E",
              Ĕ: "E",
              Ė: "E",
              Ę: "E",
              Ě: "E",
              ē: "e",
              ĕ: "e",
              ė: "e",
              ę: "e",
              ě: "e",
              Ĝ: "G",
              Ğ: "G",
              Ġ: "G",
              Ģ: "G",
              ĝ: "g",
              ğ: "g",
              ġ: "g",
              ģ: "g",
              Ĥ: "H",
              Ħ: "H",
              ĥ: "h",
              ħ: "h",
              Ĩ: "I",
              Ī: "I",
              Ĭ: "I",
              Į: "I",
              İ: "I",
              ĩ: "i",
              ī: "i",
              ĭ: "i",
              į: "i",
              ı: "i",
              Ĵ: "J",
              ĵ: "j",
              Ķ: "K",
              ķ: "k",
              ĸ: "k",
              Ĺ: "L",
              Ļ: "L",
              Ľ: "L",
              Ŀ: "L",
              Ł: "L",
              ĺ: "l",
              ļ: "l",
              ľ: "l",
              ŀ: "l",
              ł: "l",
              Ń: "N",
              Ņ: "N",
              Ň: "N",
              Ŋ: "N",
              ń: "n",
              ņ: "n",
              ň: "n",
              ŋ: "n",
              Ō: "O",
              Ŏ: "O",
              Ő: "O",
              ō: "o",
              ŏ: "o",
              ő: "o",
              Ŕ: "R",
              Ŗ: "R",
              Ř: "R",
              ŕ: "r",
              ŗ: "r",
              ř: "r",
              Ś: "S",
              Ŝ: "S",
              Ş: "S",
              Š: "S",
              ś: "s",
              ŝ: "s",
              ş: "s",
              š: "s",
              Ţ: "T",
              Ť: "T",
              Ŧ: "T",
              ţ: "t",
              ť: "t",
              ŧ: "t",
              Ũ: "U",
              Ū: "U",
              Ŭ: "U",
              Ů: "U",
              Ű: "U",
              Ų: "U",
              ũ: "u",
              ū: "u",
              ŭ: "u",
              ů: "u",
              ű: "u",
              ų: "u",
              Ŵ: "W",
              ŵ: "w",
              Ŷ: "Y",
              ŷ: "y",
              Ÿ: "Y",
              Ź: "Z",
              Ż: "Z",
              Ž: "Z",
              ź: "z",
              ż: "z",
              ž: "z",
              Ĳ: "IJ",
              ĳ: "ij",
              Œ: "Oe",
              œ: "oe",
              ŉ: "'n",
              ſ: "s",
            }),
            tz = tR({
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;",
            });
          function tM(e) {
            return "\\" + eY[e];
          }
          function tU(e) {
            return eJ.test(e);
          }
          function tk(e) {
            var t = -1,
              r = Array(e.size);
            return (
              e.forEach(function (e, i) {
                r[++t] = [i, e];
              }),
              r
            );
          }
          function t$(e, t) {
            return function (r) {
              return e(t(r));
            };
          }
          function tH(e, t) {
            for (var r = -1, i = e.length, n = 0, o = []; ++r < i; ) {
              var a = e[r];
              (a === t || a === s) && ((e[r] = s), (o[n++] = r));
            }
            return o;
          }
          function tV(e) {
            var t = -1,
              r = Array(e.size);
            return (
              e.forEach(function (e) {
                r[++t] = e;
              }),
              r
            );
          }
          function tK(e) {
            return tU(e)
              ? (function (e) {
                  for (var t = (eK.lastIndex = 0); eK.test(e); ) ++t;
                  return t;
                })(e)
              : tm(e);
          }
          function tB(e) {
            return tU(e) ? e.match(eK) || [] : e.split("");
          }
          function tJ(e) {
            for (var t = e.length; t-- && Y.test(e.charAt(t)); );
            return t;
          }
          var tF = tR({
              "&amp;": "&",
              "&lt;": "<",
              "&gt;": ">",
              "&quot;": '"',
              "&#39;": "'",
            }),
            tW = (function e(t) {
              var Y,
                eg,
                ev,
                ey,
                em = (t =
                  null == t ? e6 : tW.defaults(e6.Object(), t, tW.pick(e6, eW)))
                  .Array,
                e_ = t.Date,
                ew = t.Error,
                eb = t.Function,
                eE = t.Math,
                eI = t.Object,
                eP = t.RegExp,
                eS = t.String,
                eR = t.TypeError,
                eO = em.prototype,
                ex = eb.prototype,
                eC = eI.prototype,
                eA = t["__core-js_shared__"],
                eN = ex.toString,
                eT = eC.hasOwnProperty,
                eq = 0,
                ej = (Y = /[^.]+$/.exec(
                  (eA && eA.keys && eA.keys.IE_PROTO) || ""
                ))
                  ? "Symbol(src)_1." + Y
                  : "",
                eL = eC.toString,
                eD = eN.call(eI),
                ez = e6._,
                eM = eP(
                  "^" +
                    eN
                      .call(eT)
                      .replace(Z, "\\$&")
                      .replace(
                        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                        "$1.*?"
                      ) +
                    "$"
                ),
                eU = e9 ? t.Buffer : r,
                ek = t.Symbol,
                e$ = t.Uint8Array,
                eK = eU ? eU.allocUnsafe : r,
                eJ = t$(eI.getPrototypeOf, eI),
                eY = eI.create,
                e1 = eC.propertyIsEnumerable,
                e5 = eO.splice,
                e3 = ek ? ek.isConcatSpreadable : r,
                e2 = ek ? ek.iterator : r,
                e4 = ek ? ek.toStringTag : r,
                e7 = (function () {
                  try {
                    var e = n_(eI, "defineProperty");
                    return e({}, "", {}), e;
                  } catch {}
                })(),
                tm = t.clearTimeout !== e6.clearTimeout && t.clearTimeout,
                tR = e_ && e_.now !== e6.Date.now && e_.now,
                tZ = t.setTimeout !== e6.setTimeout && t.setTimeout,
                tG = eE.ceil,
                tQ = eE.floor,
                tY = eI.getOwnPropertySymbols,
                tX = eU ? eU.isBuffer : r,
                t0 = t.isFinite,
                t1 = eO.join,
                t5 = t$(eI.keys, eI),
                t6 = eE.max,
                t3 = eE.min,
                t2 = e_.now,
                t9 = t.parseInt,
                t4 = eE.random,
                t7 = eO.reverse,
                t8 = n_(t, "DataView"),
                re = n_(t, "Map"),
                rt = n_(t, "Promise"),
                rr = n_(t, "Set"),
                ri = n_(t, "WeakMap"),
                rn = n_(eI, "create"),
                rs = ri && new ri(),
                ro = {},
                ra = nK(t8),
                rc = nK(re),
                rh = nK(rt),
                rl = nK(rr),
                ru = nK(ri),
                rp = ek ? ek.prototype : r,
                rf = rp ? rp.valueOf : r,
                rd = rp ? rp.toString : r;
              function rg(e) {
                if (sQ(e) && !sk(e) && !(e instanceof r_)) {
                  if (e instanceof rm) return e;
                  if (eT.call(e, "__wrapped__")) return nB(e);
                }
                return new rm(e);
              }
              var rv = (function () {
                function e() {}
                return function (t) {
                  if (!sG(t)) return {};
                  if (eY) return eY(t);
                  e.prototype = t;
                  var i = new e();
                  return (e.prototype = r), i;
                };
              })();
              function ry() {}
              function rm(e, t) {
                (this.__wrapped__ = e),
                  (this.__actions__ = []),
                  (this.__chain__ = !!t),
                  (this.__index__ = 0),
                  (this.__values__ = r);
              }
              function r_(e) {
                (this.__wrapped__ = e),
                  (this.__actions__ = []),
                  (this.__dir__ = 1),
                  (this.__filtered__ = !1),
                  (this.__iteratees__ = []),
                  (this.__takeCount__ = 4294967295),
                  (this.__views__ = []);
              }
              function rw(e) {
                var t = -1,
                  r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r; ) {
                  var i = e[t];
                  this.set(i[0], i[1]);
                }
              }
              function rb(e) {
                var t = -1,
                  r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r; ) {
                  var i = e[t];
                  this.set(i[0], i[1]);
                }
              }
              function rE(e) {
                var t = -1,
                  r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r; ) {
                  var i = e[t];
                  this.set(i[0], i[1]);
                }
              }
              function rI(e) {
                var t = -1,
                  r = null == e ? 0 : e.length;
                for (this.__data__ = new rE(); ++t < r; ) this.add(e[t]);
              }
              function rP(e) {
                var t = (this.__data__ = new rb(e));
                this.size = t.size;
              }
              function rS(e, t) {
                var r = sk(e),
                  i = !r && sU(e),
                  n = !r && !i && sK(e),
                  s = !r && !i && !n && s2(e),
                  o = r || i || n || s,
                  a = o ? tC(e.length, eS) : [],
                  c = a.length;
                for (var h in e)
                  (t || eT.call(e, h)) &&
                    !(
                      o &&
                      ("length" == h ||
                        (n && ("offset" == h || "parent" == h)) ||
                        (s &&
                          ("buffer" == h ||
                            "byteLength" == h ||
                            "byteOffset" == h)) ||
                        nR(h, c))
                    ) &&
                    a.push(h);
                return a;
              }
              function rR(e) {
                var t = e.length;
                return t ? e[id(0, t - 1)] : r;
              }
              function rO(e, t) {
                return n$(iF(e), rD(t, 0, e.length));
              }
              function rx(e) {
                return n$(iF(e));
              }
              function rC(e, t, i) {
                ((i === r || sD(e[t], i)) && (i !== r || t in e)) ||
                  rj(e, t, i);
              }
              function rA(e, t, i) {
                var n = e[t];
                (eT.call(e, t) && sD(n, i) && (i !== r || t in e)) ||
                  rj(e, t, i);
              }
              function rN(e, t) {
                for (var r = e.length; r--; ) if (sD(e[r][0], t)) return r;
                return -1;
              }
              function rT(e, t, r, i) {
                return (
                  r$(e, function (e, n, s) {
                    t(i, e, r(e), s);
                  }),
                  i
                );
              }
              function rq(e, t) {
                return e && iW(t, oy(t), e);
              }
              function rj(e, t, r) {
                "__proto__" == t && e7
                  ? e7(e, t, {
                      configurable: !0,
                      enumerable: !0,
                      value: r,
                      writable: !0,
                    })
                  : (e[t] = r);
              }
              function rL(e, t) {
                for (
                  var i = -1, n = t.length, s = em(n), o = null == e;
                  ++i < n;

                )
                  s[i] = o ? r : op(e, t[i]);
                return s;
              }
              function rD(e, t, i) {
                return (
                  e == e &&
                    (i !== r && (e = e <= i ? e : i),
                    t !== r && (e = e >= t ? e : t)),
                  e
                );
              }
              function rz(e, t, i, n, s, o) {
                var a,
                  c = 1 & t,
                  l = 2 & t;
                if ((i && (a = s ? i(e, n, s, o) : i(e)), a !== r)) return a;
                if (!sG(e)) return e;
                var f = sk(e);
                if (f) {
                  if (
                    ((_ = e.length),
                    (P = new e.constructor(_)),
                    _ &&
                      "string" == typeof e[0] &&
                      eT.call(e, "index") &&
                      ((P.index = e.index), (P.input = e.input)),
                    (a = P),
                    !c)
                  )
                    return iF(e, a);
                } else {
                  var _,
                    P,
                    D,
                    z,
                    M,
                    U = nE(e),
                    k = U == d || U == g;
                  if (sK(e)) return i$(e, c);
                  if (U == m || U == h || (k && !s)) {
                    if (((a = l || k ? {} : nP(e)), !c))
                      return l
                        ? ((D = (M = a) && iW(e, om(e), M)), iW(e, nb(e), D))
                        : ((z = rq(a, e)), iW(e, nw(e), z));
                  } else {
                    if (!eQ[U]) return s ? e : {};
                    a = (function (e, t, r) {
                      var i,
                        n,
                        s = e.constructor;
                      switch (t) {
                        case S:
                          return iH(e);
                        case u:
                        case p:
                          return new s(+e);
                        case R:
                          return (
                            (i = r ? iH(e.buffer) : e.buffer),
                            new e.constructor(i, e.byteOffset, e.byteLength)
                          );
                        case O:
                        case x:
                        case C:
                        case A:
                        case N:
                        case T:
                        case q:
                        case j:
                        case L:
                          return iV(e, r);
                        case v:
                          return new s();
                        case y:
                        case E:
                          return new s(e);
                        case w:
                          return (
                            ((n = new e.constructor(
                              e.source,
                              eo.exec(e)
                            )).lastIndex = e.lastIndex),
                            n
                          );
                        case b:
                          return new s();
                        case I:
                          return rf ? eI(rf.call(e)) : {};
                      }
                    })(e, U, c);
                  }
                }
                o || (o = new rP());
                var $ = o.get(e);
                if ($) return $;
                o.set(e, a),
                  s5(e)
                    ? e.forEach(function (r) {
                        a.add(rz(r, t, i, r, e, o));
                      })
                    : sY(e) &&
                      e.forEach(function (r, n) {
                        a.set(n, rz(r, t, i, n, e, o));
                      });
                var H = f ? r : (4 & t ? (l ? np : nu) : l ? om : oy)(e);
                return (
                  ta(H || e, function (r, n) {
                    H && (r = e[(n = r)]), rA(a, n, rz(r, t, i, n, e, o));
                  }),
                  a
                );
              }
              function rM(e, t, i) {
                var n = i.length;
                if (null == e) return !n;
                for (e = eI(e); n--; ) {
                  var s = i[n],
                    o = t[s],
                    a = e[s];
                  if ((a === r && !(s in e)) || !o(a)) return !1;
                }
                return !0;
              }
              function rU(e, t, n) {
                if ("function" != typeof e) throw new eR(i);
                return nz(function () {
                  e.apply(r, n);
                }, t);
              }
              function rk(e, t, r, i) {
                var n = -1,
                  s = tu,
                  o = !0,
                  a = e.length,
                  c = [],
                  h = t.length;
                if (!a) return c;
                r && (t = tf(t, tN(r))),
                  i
                    ? ((s = tp), (o = !1))
                    : t.length >= 200 && ((s = tq), (o = !1), (t = new rI(t)));
                e: for (; ++n < a; ) {
                  var l = e[n],
                    u = null == r ? l : r(l);
                  if (((l = i || 0 !== l ? l : 0), o && u == u)) {
                    for (var p = h; p--; ) if (t[p] === u) continue e;
                    c.push(l);
                  } else s(t, u, i) || c.push(l);
                }
                return c;
              }
              (rg.templateSettings = {
                escape: V,
                evaluate: K,
                interpolate: B,
                variable: "",
                imports: { _: rg },
              }),
                (rg.prototype = ry.prototype),
                (rg.prototype.constructor = rg),
                (rm.prototype = rv(ry.prototype)),
                (rm.prototype.constructor = rm),
                (r_.prototype = rv(ry.prototype)),
                (r_.prototype.constructor = r_),
                (rw.prototype.clear = function () {
                  (this.__data__ = rn ? rn(null) : {}), (this.size = 0);
                }),
                (rw.prototype.delete = function (e) {
                  var t = this.has(e) && delete this.__data__[e];
                  return (this.size -= t ? 1 : 0), t;
                }),
                (rw.prototype.get = function (e) {
                  var t = this.__data__;
                  if (rn) {
                    var i = t[e];
                    return i === n ? r : i;
                  }
                  return eT.call(t, e) ? t[e] : r;
                }),
                (rw.prototype.has = function (e) {
                  var t = this.__data__;
                  return rn ? t[e] !== r : eT.call(t, e);
                }),
                (rw.prototype.set = function (e, t) {
                  var i = this.__data__;
                  return (
                    (this.size += this.has(e) ? 0 : 1),
                    (i[e] = rn && t === r ? n : t),
                    this
                  );
                }),
                (rb.prototype.clear = function () {
                  (this.__data__ = []), (this.size = 0);
                }),
                (rb.prototype.delete = function (e) {
                  var t = this.__data__,
                    r = rN(t, e);
                  return (
                    !(r < 0) &&
                    (r == t.length - 1 ? t.pop() : e5.call(t, r, 1),
                    --this.size,
                    !0)
                  );
                }),
                (rb.prototype.get = function (e) {
                  var t = this.__data__,
                    i = rN(t, e);
                  return i < 0 ? r : t[i][1];
                }),
                (rb.prototype.has = function (e) {
                  return rN(this.__data__, e) > -1;
                }),
                (rb.prototype.set = function (e, t) {
                  var r = this.__data__,
                    i = rN(r, e);
                  return (
                    i < 0 ? (++this.size, r.push([e, t])) : (r[i][1] = t), this
                  );
                }),
                (rE.prototype.clear = function () {
                  (this.size = 0),
                    (this.__data__ = {
                      hash: new rw(),
                      map: new (re || rb)(),
                      string: new rw(),
                    });
                }),
                (rE.prototype.delete = function (e) {
                  var t = ny(this, e).delete(e);
                  return (this.size -= t ? 1 : 0), t;
                }),
                (rE.prototype.get = function (e) {
                  return ny(this, e).get(e);
                }),
                (rE.prototype.has = function (e) {
                  return ny(this, e).has(e);
                }),
                (rE.prototype.set = function (e, t) {
                  var r = ny(this, e),
                    i = r.size;
                  return r.set(e, t), (this.size += r.size == i ? 0 : 1), this;
                }),
                (rI.prototype.add = rI.prototype.push =
                  function (e) {
                    return this.__data__.set(e, n), this;
                  }),
                (rI.prototype.has = function (e) {
                  return this.__data__.has(e);
                }),
                (rP.prototype.clear = function () {
                  (this.__data__ = new rb()), (this.size = 0);
                }),
                (rP.prototype.delete = function (e) {
                  var t = this.__data__,
                    r = t.delete(e);
                  return (this.size = t.size), r;
                }),
                (rP.prototype.get = function (e) {
                  return this.__data__.get(e);
                }),
                (rP.prototype.has = function (e) {
                  return this.__data__.has(e);
                }),
                (rP.prototype.set = function (e, t) {
                  var r = this.__data__;
                  if (r instanceof rb) {
                    var i = r.__data__;
                    if (!re || i.length < 199)
                      return i.push([e, t]), (this.size = ++r.size), this;
                    r = this.__data__ = new rE(i);
                  }
                  return r.set(e, t), (this.size = r.size), this;
                });
              var r$ = iQ(rZ),
                rH = iQ(rG, !0);
              function rV(e, t) {
                var r = !0;
                return (
                  r$(e, function (e, i, n) {
                    return (r = !!t(e, i, n));
                  }),
                  r
                );
              }
              function rK(e, t, i) {
                for (var n = -1, s = e.length; ++n < s; ) {
                  var o = e[n],
                    a = t(o);
                  if (null != a && (c === r ? a == a && !s3(a) : i(a, c)))
                    var c = a,
                      h = o;
                }
                return h;
              }
              function rB(e, t) {
                var r = [];
                return (
                  r$(e, function (e, i, n) {
                    t(e, i, n) && r.push(e);
                  }),
                  r
                );
              }
              function rJ(e, t, r, i, n) {
                var s = -1,
                  o = e.length;
                for (r || (r = nS), n || (n = []); ++s < o; ) {
                  var a = e[s];
                  t > 0 && r(a)
                    ? t > 1
                      ? rJ(a, t - 1, r, i, n)
                      : td(n, a)
                    : i || (n[n.length] = a);
                }
                return n;
              }
              var rF = iY(),
                rW = iY(!0);
              function rZ(e, t) {
                return e && rF(e, t, oy);
              }
              function rG(e, t) {
                return e && rW(e, t, oy);
              }
              function rQ(e, t) {
                return tl(t, function (t) {
                  return sF(e[t]);
                });
              }
              function rY(e, t) {
                t = iM(t, e);
                for (var i = 0, n = t.length; null != e && i < n; )
                  e = e[nV(t[i++])];
                return i && i == n ? e : r;
              }
              function rX(e, t, r) {
                var i = t(e);
                return sk(e) ? i : td(i, r(e));
              }
              function r0(e) {
                return null == e
                  ? e === r
                    ? "[object Undefined]"
                    : "[object Null]"
                  : e4 && e4 in eI(e)
                  ? (function (e) {
                      var t = eT.call(e, e4),
                        i = e[e4];
                      try {
                        e[e4] = r;
                        var n = !0;
                      } catch {}
                      var s = eL.call(e);
                      return n && (t ? (e[e4] = i) : delete e[e4]), s;
                    })(e)
                  : eL.call(e);
              }
              function r1(e, t) {
                return e > t;
              }
              function r5(e, t) {
                return null != e && eT.call(e, t);
              }
              function r6(e, t) {
                return null != e && t in eI(e);
              }
              function r3(e, t, i) {
                for (
                  var n = i ? tp : tu,
                    s = e[0].length,
                    o = e.length,
                    a = o,
                    c = em(o),
                    h = 1 / 0,
                    l = [];
                  a--;

                ) {
                  var u = e[a];
                  a && t && (u = tf(u, tN(t))),
                    (h = t3(u.length, h)),
                    (c[a] =
                      !i && (t || (s >= 120 && u.length >= 120))
                        ? new rI(a && u)
                        : r);
                }
                u = e[0];
                var p = -1,
                  f = c[0];
                e: for (; ++p < s && l.length < h; ) {
                  var d = u[p],
                    g = t ? t(d) : d;
                  if (
                    ((d = i || 0 !== d ? d : 0), !(f ? tq(f, g) : n(l, g, i)))
                  ) {
                    for (a = o; --a; ) {
                      var v = c[a];
                      if (!(v ? tq(v, g) : n(e[a], g, i))) continue e;
                    }
                    f && f.push(g), l.push(d);
                  }
                }
                return l;
              }
              function r2(e, t, i) {
                t = iM(t, e);
                var n = null == (e = nj(e, t)) ? e : e[nV(n5(t))];
                return null == n ? r : ts(n, e, i);
              }
              function r9(e) {
                return sQ(e) && r0(e) == h;
              }
              function r4(e, t, i, n, s) {
                return (
                  e === t ||
                  (null != e && null != t && (sQ(e) || sQ(t))
                    ? (function (e, t, i, n, s, o) {
                        var a = sk(e),
                          c = sk(t),
                          d = a ? l : nE(e),
                          g = c ? l : nE(t);
                        (d = d == h ? m : d), (g = g == h ? m : g);
                        var _ = d == m,
                          P = g == m,
                          O = d == g;
                        if (O && sK(e)) {
                          if (!sK(t)) return !1;
                          (a = !0), (_ = !1);
                        }
                        if (O && !_)
                          return (
                            o || (o = new rP()),
                            a || s2(e)
                              ? nh(e, t, i, n, s, o)
                              : (function (e, t, r, i, n, s, o) {
                                  switch (r) {
                                    case R:
                                      if (
                                        e.byteLength != t.byteLength ||
                                        e.byteOffset != t.byteOffset
                                      )
                                        break;
                                      (e = e.buffer), (t = t.buffer);
                                    case S:
                                      return !(
                                        e.byteLength != t.byteLength ||
                                        !s(new e$(e), new e$(t))
                                      );
                                    case u:
                                    case p:
                                    case y:
                                      return sD(+e, +t);
                                    case f:
                                      return (
                                        e.name == t.name &&
                                        e.message == t.message
                                      );
                                    case w:
                                    case E:
                                      return e == t + "";
                                    case v:
                                      var a = tk;
                                    case b:
                                      var c = 1 & i;
                                      if (
                                        (a || (a = tV), e.size != t.size && !c)
                                      )
                                        break;
                                      var h = o.get(e);
                                      if (h) return h == t;
                                      (i |= 2), o.set(e, t);
                                      var l = nh(a(e), a(t), i, n, s, o);
                                      return o.delete(e), l;
                                    case I:
                                      if (rf) return rf.call(e) == rf.call(t);
                                  }
                                  return !1;
                                })(e, t, d, i, n, s, o)
                          );
                        if (!(1 & i)) {
                          var x = _ && eT.call(e, "__wrapped__"),
                            C = P && eT.call(t, "__wrapped__");
                          if (x || C) {
                            var A = x ? e.value() : e,
                              N = C ? t.value() : t;
                            return o || (o = new rP()), s(A, N, i, n, o);
                          }
                        }
                        return (
                          !!O &&
                          (o || (o = new rP()),
                          (function (e, t, i, n, s, o) {
                            var a = 1 & i,
                              c = nu(e),
                              h = c.length;
                            if (h != nu(t).length && !a) return !1;
                            for (var l = h; l--; ) {
                              var u = c[l];
                              if (!(a ? u in t : eT.call(t, u))) return !1;
                            }
                            var p = o.get(e),
                              f = o.get(t);
                            if (p && f) return p == t && f == e;
                            var d = !0;
                            o.set(e, t), o.set(t, e);
                            for (var g = a; ++l < h; ) {
                              var v = e[(u = c[l])],
                                y = t[u];
                              if (n)
                                var m = a
                                  ? n(y, v, u, t, e, o)
                                  : n(v, y, u, e, t, o);
                              if (
                                !(m === r ? v === y || s(v, y, i, n, o) : m)
                              ) {
                                d = !1;
                                break;
                              }
                              g || (g = "constructor" == u);
                            }
                            if (d && !g) {
                              var _ = e.constructor,
                                w = t.constructor;
                              _ != w &&
                                "constructor" in e &&
                                "constructor" in t &&
                                !(
                                  "function" == typeof _ &&
                                  _ instanceof _ &&
                                  "function" == typeof w &&
                                  w instanceof w
                                ) &&
                                (d = !1);
                            }
                            return o.delete(e), o.delete(t), d;
                          })(e, t, i, n, s, o))
                        );
                      })(e, t, i, n, r4, s)
                    : e != e && t != t)
                );
              }
              function r7(e, t, i, n) {
                var s = i.length,
                  o = s,
                  a = !n;
                if (null == e) return !o;
                for (e = eI(e); s--; ) {
                  var c = i[s];
                  if (a && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1;
                }
                for (; ++s < o; ) {
                  var h = (c = i[s])[0],
                    l = e[h],
                    u = c[1];
                  if (a && c[2]) {
                    if (l === r && !(h in e)) return !1;
                  } else {
                    var p = new rP();
                    if (n) var f = n(l, u, h, e, t, p);
                    if (!(f === r ? r4(u, l, 3, n, p) : f)) return !1;
                  }
                }
                return !0;
              }
              function r8(e) {
                return (
                  !(!sG(e) || (ej && ej in e)) && (sF(e) ? eM : eh).test(nK(e))
                );
              }
              function ie(e) {
                return "function" == typeof e
                  ? e
                  : null == e
                  ? oV
                  : "object" == typeof e
                  ? sk(e)
                    ? io(e[0], e[1])
                    : is(e)
                  : oY(e);
              }
              function it(e) {
                if (!nN(e)) return t5(e);
                var t = [];
                for (var r in eI(e))
                  eT.call(e, r) && "constructor" != r && t.push(r);
                return t;
              }
              function ir(e, t) {
                return e < t;
              }
              function ii(e, t) {
                var r = -1,
                  i = sH(e) ? em(e.length) : [];
                return (
                  r$(e, function (e, n, s) {
                    i[++r] = t(e, n, s);
                  }),
                  i
                );
              }
              function is(e) {
                var t = nm(e);
                return 1 == t.length && t[0][2]
                  ? nT(t[0][0], t[0][1])
                  : function (r) {
                      return r === e || r7(r, e, t);
                    };
              }
              function io(e, t) {
                var i;
                return nx(e) && (i = t) == i && !sG(i)
                  ? nT(nV(e), t)
                  : function (i) {
                      var n = op(i, e);
                      return n === r && n === t ? of(i, e) : r4(t, n, 3);
                    };
              }
              function ia(e, t, i, n, s) {
                e !== t &&
                  rF(
                    t,
                    function (o, a) {
                      if ((s || (s = new rP()), sG(o)))
                        !(function (e, t, i, n, s, o, a) {
                          var c = nL(e, i),
                            h = nL(t, i),
                            l = a.get(h);
                          if (l) {
                            rC(e, i, l);
                            return;
                          }
                          var u = o ? o(c, h, i + "", e, t, a) : r,
                            p = u === r;
                          if (p) {
                            var f = sk(h),
                              d = !f && sK(h),
                              g = !f && !d && s2(h);
                            (u = h),
                              f || d || g
                                ? sk(c)
                                  ? (u = c)
                                  : sV(c)
                                  ? (u = iF(c))
                                  : d
                                  ? ((p = !1), (u = i$(h, !0)))
                                  : g
                                  ? ((p = !1), (u = iV(h, !0)))
                                  : (u = [])
                                : s0(h) || sU(h)
                                ? ((u = c),
                                  sU(c)
                                    ? (u = oi(c))
                                    : (!sG(c) || sF(c)) && (u = nP(h)))
                                : (p = !1);
                          }
                          p && (a.set(h, u), s(u, h, n, o, a), a.delete(h)),
                            rC(e, i, u);
                        })(e, t, a, i, ia, n, s);
                      else {
                        var c = n ? n(nL(e, a), o, a + "", e, t, s) : r;
                        c === r && (c = o), rC(e, a, c);
                      }
                    },
                    om
                  );
              }
              function ic(e, t) {
                var i = e.length;
                if (i) return nR((t += t < 0 ? i : 0), i) ? e[t] : r;
              }
              function ih(e, t, r) {
                t = t.length
                  ? tf(t, function (e) {
                      return sk(e)
                        ? function (t) {
                            return rY(t, 1 === e.length ? e[0] : e);
                          }
                        : e;
                    })
                  : [oV];
                var i = -1;
                return (
                  (t = tf(t, tN(nv()))),
                  (function (e, t) {
                    var r = e.length;
                    for (e.sort(t); r--; ) e[r] = e[r].value;
                    return e;
                  })(
                    ii(e, function (e, r, n) {
                      return {
                        criteria: tf(t, function (t) {
                          return t(e);
                        }),
                        index: ++i,
                        value: e,
                      };
                    }),
                    function (e, t) {
                      return (function (e, t, r) {
                        for (
                          var i = -1,
                            n = e.criteria,
                            s = t.criteria,
                            o = n.length,
                            a = r.length;
                          ++i < o;

                        ) {
                          var c = iK(n[i], s[i]);
                          if (c) {
                            if (i >= a) return c;
                            return c * ("desc" == r[i] ? -1 : 1);
                          }
                        }
                        return e.index - t.index;
                      })(e, t, r);
                    }
                  )
                );
              }
              function il(e, t, r) {
                for (var i = -1, n = t.length, s = {}; ++i < n; ) {
                  var o = t[i],
                    a = rY(e, o);
                  r(a, o) && i_(s, iM(o, e), a);
                }
                return s;
              }
              function iu(e, t, r, i) {
                var n = i ? tE : tb,
                  s = -1,
                  o = t.length,
                  a = e;
                for (e === t && (t = iF(t)), r && (a = tf(e, tN(r))); ++s < o; )
                  for (
                    var c = 0, h = t[s], l = r ? r(h) : h;
                    (c = n(a, l, c, i)) > -1;

                  )
                    a !== e && e5.call(a, c, 1), e5.call(e, c, 1);
                return e;
              }
              function ip(e, t) {
                for (var r = e ? t.length : 0, i = r - 1; r--; ) {
                  var n = t[r];
                  if (r == i || n !== s) {
                    var s = n;
                    nR(n) ? e5.call(e, n, 1) : iA(e, n);
                  }
                }
                return e;
              }
              function id(e, t) {
                return e + tQ(t4() * (t - e + 1));
              }
              function ig(e, t) {
                var r = "";
                if (!e || t < 1 || t > 9007199254740991) return r;
                do t % 2 && (r += e), (t = tQ(t / 2)) && (e += e);
                while (t);
                return r;
              }
              function iv(e, t) {
                return nM(nq(e, t, oV), e + "");
              }
              function iy(e) {
                return rR(oR(e));
              }
              function im(e, t) {
                var r = oR(e);
                return n$(r, rD(t, 0, r.length));
              }
              function i_(e, t, i, n) {
                if (!sG(e)) return e;
                t = iM(t, e);
                for (
                  var s = -1, o = t.length, a = o - 1, c = e;
                  null != c && ++s < o;

                ) {
                  var h = nV(t[s]),
                    l = i;
                  if (
                    "__proto__" === h ||
                    "constructor" === h ||
                    "prototype" === h
                  )
                    break;
                  if (s != a) {
                    var u = c[h];
                    (l = n ? n(u, h, c) : r) === r &&
                      (l = sG(u) ? u : nR(t[s + 1]) ? [] : {});
                  }
                  rA(c, h, l), (c = c[h]);
                }
                return e;
              }
              var iw = rs
                ? function (e, t) {
                    return rs.set(e, t), e;
                  }
                : oV;
              function ib(e) {
                return n$(oR(e));
              }
              function iE(e, t, r) {
                var i = -1,
                  n = e.length;
                t < 0 && (t = -t > n ? 0 : n + t),
                  (r = r > n ? n : r) < 0 && (r += n),
                  (n = t > r ? 0 : (r - t) >>> 0),
                  (t >>>= 0);
                for (var s = em(n); ++i < n; ) s[i] = e[i + t];
                return s;
              }
              function iI(e, t) {
                var r;
                return (
                  r$(e, function (e, i, n) {
                    return !(r = t(e, i, n));
                  }),
                  !!r
                );
              }
              function iP(e, t, r) {
                var i = 0,
                  n = null == e ? i : e.length;
                if ("number" == typeof t && t == t && n <= 2147483647) {
                  for (; i < n; ) {
                    var s = (i + n) >>> 1,
                      o = e[s];
                    null !== o && !s3(o) && (r ? o <= t : o < t)
                      ? (i = s + 1)
                      : (n = s);
                  }
                  return n;
                }
                return iS(e, t, oV, r);
              }
              function iS(e, t, i, n) {
                var s = 0,
                  o = null == e ? 0 : e.length;
                if (0 === o) return 0;
                t = i(t);
                for (
                  var a = t != t, c = null === t, h = s3(t), l = t === r;
                  s < o;

                ) {
                  var u = tQ((s + o) / 2),
                    p = i(e[u]),
                    f = p !== r,
                    d = null === p,
                    g = p == p,
                    v = s3(p);
                  if (a) var y = n || g;
                  else
                    y = l
                      ? g && (n || f)
                      : c
                      ? g && f && (n || !d)
                      : h
                      ? g && f && !d && (n || !v)
                      : !d && !v && (n ? p <= t : p < t);
                  y ? (s = u + 1) : (o = u);
                }
                return t3(o, 4294967294);
              }
              function iR(e, t) {
                for (var r = -1, i = e.length, n = 0, s = []; ++r < i; ) {
                  var o = e[r],
                    a = t ? t(o) : o;
                  if (!r || !sD(a, c)) {
                    var c = a;
                    s[n++] = 0 === o ? 0 : o;
                  }
                }
                return s;
              }
              function iO(e) {
                return "number" == typeof e ? e : s3(e) ? a : +e;
              }
              function ix(e) {
                if ("string" == typeof e) return e;
                if (sk(e)) return tf(e, ix) + "";
                if (s3(e)) return rd ? rd.call(e) : "";
                var t = e + "";
                return "0" == t && 1 / e == -o ? "-0" : t;
              }
              function iC(e, t, r) {
                var i = -1,
                  n = tu,
                  s = e.length,
                  o = !0,
                  a = [],
                  c = a;
                if (r) (o = !1), (n = tp);
                else if (s >= 200) {
                  var h = t ? null : ni(e);
                  if (h) return tV(h);
                  (o = !1), (n = tq), (c = new rI());
                } else c = t ? [] : a;
                e: for (; ++i < s; ) {
                  var l = e[i],
                    u = t ? t(l) : l;
                  if (((l = r || 0 !== l ? l : 0), o && u == u)) {
                    for (var p = c.length; p--; ) if (c[p] === u) continue e;
                    t && c.push(u), a.push(l);
                  } else n(c, u, r) || (c !== a && c.push(u), a.push(l));
                }
                return a;
              }
              function iA(e, t) {
                return (
                  (t = iM(t, e)), null == (e = nj(e, t)) || delete e[nV(n5(t))]
                );
              }
              function iN(e, t, r, i) {
                return i_(e, t, r(rY(e, t)), i);
              }
              function iT(e, t, r, i) {
                for (
                  var n = e.length, s = i ? n : -1;
                  (i ? s-- : ++s < n) && t(e[s], s, e);

                );
                return r
                  ? iE(e, i ? 0 : s, i ? s + 1 : n)
                  : iE(e, i ? s + 1 : 0, i ? n : s);
              }
              function iq(e, t) {
                var r = e;
                return (
                  r instanceof r_ && (r = r.value()),
                  tg(
                    t,
                    function (e, t) {
                      return t.func.apply(t.thisArg, td([e], t.args));
                    },
                    r
                  )
                );
              }
              function ij(e, t, r) {
                var i = e.length;
                if (i < 2) return i ? iC(e[0]) : [];
                for (var n = -1, s = em(i); ++n < i; )
                  for (var o = e[n], a = -1; ++a < i; )
                    a != n && (s[n] = rk(s[n] || o, e[a], t, r));
                return iC(rJ(s, 1), t, r);
              }
              function iL(e, t, i) {
                for (
                  var n = -1, s = e.length, o = t.length, a = {};
                  ++n < s;

                ) {
                  var c = n < o ? t[n] : r;
                  i(a, e[n], c);
                }
                return a;
              }
              function iD(e) {
                return sV(e) ? e : [];
              }
              function iz(e) {
                return "function" == typeof e ? e : oV;
              }
              function iM(e, t) {
                return sk(e) ? e : nx(e, t) ? [e] : nH(on(e));
              }
              function iU(e, t, i) {
                var n = e.length;
                return (i = i === r ? n : i), !t && i >= n ? e : iE(e, t, i);
              }
              var ik =
                tm ||
                function (e) {
                  return e6.clearTimeout(e);
                };
              function i$(e, t) {
                if (t) return e.slice();
                var r = e.length,
                  i = eK ? eK(r) : new e.constructor(r);
                return e.copy(i), i;
              }
              function iH(e) {
                var t = new e.constructor(e.byteLength);
                return new e$(t).set(new e$(e)), t;
              }
              function iV(e, t) {
                var r = t ? iH(e.buffer) : e.buffer;
                return new e.constructor(r, e.byteOffset, e.length);
              }
              function iK(e, t) {
                if (e !== t) {
                  var i = e !== r,
                    n = null === e,
                    s = e == e,
                    o = s3(e),
                    a = t !== r,
                    c = null === t,
                    h = t == t,
                    l = s3(t);
                  if (
                    (!c && !l && !o && e > t) ||
                    (o && a && h && !c && !l) ||
                    (n && a && h) ||
                    (!i && h) ||
                    !s
                  )
                    return 1;
                  if (
                    (!n && !o && !l && e < t) ||
                    (l && i && s && !n && !o) ||
                    (c && i && s) ||
                    (!a && s) ||
                    !h
                  )
                    return -1;
                }
                return 0;
              }
              function iB(e, t, r, i) {
                for (
                  var n = -1,
                    s = e.length,
                    o = r.length,
                    a = -1,
                    c = t.length,
                    h = t6(s - o, 0),
                    l = em(c + h),
                    u = !i;
                  ++a < c;

                )
                  l[a] = t[a];
                for (; ++n < o; ) (u || n < s) && (l[r[n]] = e[n]);
                for (; h--; ) l[a++] = e[n++];
                return l;
              }
              function iJ(e, t, r, i) {
                for (
                  var n = -1,
                    s = e.length,
                    o = -1,
                    a = r.length,
                    c = -1,
                    h = t.length,
                    l = t6(s - a, 0),
                    u = em(l + h),
                    p = !i;
                  ++n < l;

                )
                  u[n] = e[n];
                for (var f = n; ++c < h; ) u[f + c] = t[c];
                for (; ++o < a; ) (p || n < s) && (u[f + r[o]] = e[n++]);
                return u;
              }
              function iF(e, t) {
                var r = -1,
                  i = e.length;
                for (t || (t = em(i)); ++r < i; ) t[r] = e[r];
                return t;
              }
              function iW(e, t, i, n) {
                var s = !i;
                i || (i = {});
                for (var o = -1, a = t.length; ++o < a; ) {
                  var c = t[o],
                    h = n ? n(i[c], e[c], c, i, e) : r;
                  h === r && (h = e[c]), s ? rj(i, c, h) : rA(i, c, h);
                }
                return i;
              }
              function iZ(e, t) {
                return function (r, i) {
                  var n = sk(r) ? to : rT,
                    s = t ? t() : {};
                  return n(r, e, nv(i, 2), s);
                };
              }
              function iG(e) {
                return iv(function (t, i) {
                  var n = -1,
                    s = i.length,
                    o = s > 1 ? i[s - 1] : r,
                    a = s > 2 ? i[2] : r;
                  for (
                    o = e.length > 3 && "function" == typeof o ? (s--, o) : r,
                      a && nO(i[0], i[1], a) && ((o = s < 3 ? r : o), (s = 1)),
                      t = eI(t);
                    ++n < s;

                  ) {
                    var c = i[n];
                    c && e(t, c, n, o);
                  }
                  return t;
                });
              }
              function iQ(e, t) {
                return function (r, i) {
                  if (null == r) return r;
                  if (!sH(r)) return e(r, i);
                  for (
                    var n = r.length, s = t ? n : -1, o = eI(r);
                    (t ? s-- : ++s < n) && !1 !== i(o[s], s, o);

                  );
                  return r;
                };
              }
              function iY(e) {
                return function (t, r, i) {
                  for (var n = -1, s = eI(t), o = i(t), a = o.length; a--; ) {
                    var c = o[e ? a : ++n];
                    if (!1 === r(s[c], c, s)) break;
                  }
                  return t;
                };
              }
              function iX(e) {
                return function (t) {
                  var i = tU((t = on(t))) ? tB(t) : r,
                    n = i ? i[0] : t.charAt(0),
                    s = i ? iU(i, 1).join("") : t.slice(1);
                  return n[e]() + s;
                };
              }
              function i0(e) {
                return function (t) {
                  return tg(oz(oC(t).replace(eH, "")), e, "");
                };
              }
              function i1(e) {
                return function () {
                  var t = arguments;
                  switch (t.length) {
                    case 0:
                      return new e();
                    case 1:
                      return new e(t[0]);
                    case 2:
                      return new e(t[0], t[1]);
                    case 3:
                      return new e(t[0], t[1], t[2]);
                    case 4:
                      return new e(t[0], t[1], t[2], t[3]);
                    case 5:
                      return new e(t[0], t[1], t[2], t[3], t[4]);
                    case 6:
                      return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                    case 7:
                      return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
                  }
                  var r = rv(e.prototype),
                    i = e.apply(r, t);
                  return sG(i) ? i : r;
                };
              }
              function i5(e) {
                return function (t, i, n) {
                  var s = eI(t);
                  if (!sH(t)) {
                    var o = nv(i, 3);
                    (t = oy(t)),
                      (i = function (e) {
                        return o(s[e], e, s);
                      });
                  }
                  var a = e(t, i, n);
                  return a > -1 ? s[o ? t[a] : a] : r;
                };
              }
              function i6(e) {
                return nl(function (t) {
                  var n = t.length,
                    s = n,
                    o = rm.prototype.thru;
                  for (e && t.reverse(); s--; ) {
                    var a = t[s];
                    if ("function" != typeof a) throw new eR(i);
                    if (o && !c && "wrapper" == nd(a)) var c = new rm([], !0);
                  }
                  for (s = c ? s : n; ++s < n; ) {
                    var h = nd((a = t[s])),
                      l = "wrapper" == h ? nf(a) : r;
                    c =
                      l && nC(l[0]) && 424 == l[1] && !l[4].length && 1 == l[9]
                        ? c[nd(l[0])].apply(c, l[3])
                        : 1 == a.length && nC(a)
                        ? c[h]()
                        : c.thru(a);
                  }
                  return function () {
                    var e = arguments,
                      r = e[0];
                    if (c && 1 == e.length && sk(r)) return c.plant(r).value();
                    for (var i = 0, s = n ? t[i].apply(this, e) : r; ++i < n; )
                      s = t[i].call(this, s);
                    return s;
                  };
                });
              }
              function i3(e, t, i, n, s, o, a, c, h, l) {
                var u = 128 & t,
                  p = 1 & t,
                  f = 2 & t,
                  d = 24 & t,
                  g = 512 & t,
                  v = f ? r : i1(e);
                return function y() {
                  for (var m = arguments.length, _ = em(m), w = m; w--; )
                    _[w] = arguments[w];
                  if (d)
                    var b = ng(y),
                      E = (function (e, t) {
                        for (var r = e.length, i = 0; r--; ) e[r] === t && ++i;
                        return i;
                      })(_, b);
                  if (
                    (n && (_ = iB(_, n, s, d)),
                    o && (_ = iJ(_, o, a, d)),
                    (m -= E),
                    d && m < l)
                  ) {
                    var I = tH(_, b);
                    return nt(e, t, i3, y.placeholder, i, _, I, c, h, l - m);
                  }
                  var P = p ? i : this,
                    S = f ? P[e] : e;
                  return (
                    (m = _.length),
                    c
                      ? (_ = (function (e, t) {
                          for (
                            var i = e.length, n = t3(t.length, i), s = iF(e);
                            n--;

                          ) {
                            var o = t[n];
                            e[n] = nR(o, i) ? s[o] : r;
                          }
                          return e;
                        })(_, c))
                      : g && m > 1 && _.reverse(),
                    u && h < m && (_.length = h),
                    this &&
                      this !== e6 &&
                      this instanceof y &&
                      (S = v || i1(S)),
                    S.apply(P, _)
                  );
                };
              }
              function i2(e, t) {
                return function (r, i) {
                  var n, s;
                  return (
                    (n = t(i)),
                    (s = {}),
                    rZ(r, function (t, r, i) {
                      e(s, n(t), r, i);
                    }),
                    s
                  );
                };
              }
              function i9(e, t) {
                return function (i, n) {
                  var s;
                  if (i === r && n === r) return t;
                  if ((i !== r && (s = i), n !== r)) {
                    if (s === r) return n;
                    "string" == typeof i || "string" == typeof n
                      ? ((i = ix(i)), (n = ix(n)))
                      : ((i = iO(i)), (n = iO(n))),
                      (s = e(i, n));
                  }
                  return s;
                };
              }
              function i4(e) {
                return nl(function (t) {
                  return (
                    (t = tf(t, tN(nv()))),
                    iv(function (r) {
                      var i = this;
                      return e(t, function (e) {
                        return ts(e, i, r);
                      });
                    })
                  );
                });
              }
              function i7(e, t) {
                var i = (t = t === r ? " " : ix(t)).length;
                if (i < 2) return i ? ig(t, e) : t;
                var n = ig(t, tG(e / tK(t)));
                return tU(t) ? iU(tB(n), 0, e).join("") : n.slice(0, e);
              }
              function i8(e) {
                return function (t, i, n) {
                  return (
                    n && "number" != typeof n && nO(t, i, n) && (i = n = r),
                    (t = s8(t)),
                    i === r ? ((i = t), (t = 0)) : (i = s8(i)),
                    (n = n === r ? (t < i ? 1 : -1) : s8(n)),
                    (function (e, t, r, i) {
                      for (
                        var n = -1,
                          s = t6(tG((t - e) / (r || 1)), 0),
                          o = em(s);
                        s--;

                      )
                        (o[i ? s : ++n] = e), (e += r);
                      return o;
                    })(t, i, n, e)
                  );
                };
              }
              function ne(e) {
                return function (t, r) {
                  return (
                    ("string" == typeof t && "string" == typeof r) ||
                      ((t = or(t)), (r = or(r))),
                    e(t, r)
                  );
                };
              }
              function nt(e, t, i, n, s, o, a, c, h, l) {
                var u = 8 & t;
                (t |= u ? 32 : 64), 4 & (t &= ~(u ? 64 : 32)) || (t &= -4);
                var p = [
                    e,
                    t,
                    s,
                    u ? o : r,
                    u ? a : r,
                    u ? r : o,
                    u ? r : a,
                    c,
                    h,
                    l,
                  ],
                  f = i.apply(r, p);
                return nC(e) && nD(f, p), (f.placeholder = n), nU(f, e, t);
              }
              function nr(e) {
                var t = eE[e];
                return function (e, r) {
                  if (
                    ((e = or(e)), (r = null == r ? 0 : t3(oe(r), 292)) && t0(e))
                  ) {
                    var i = (on(e) + "e").split("e");
                    return +(
                      (i = (on(t(i[0] + "e" + (+i[1] + r))) + "e").split(
                        "e"
                      ))[0] +
                      "e" +
                      (+i[1] - r)
                    );
                  }
                  return t(e);
                };
              }
              var ni =
                rr && 1 / tV(new rr([, -0]))[1] == o
                  ? function (e) {
                      return new rr(e);
                    }
                  : oW;
              function nn(e) {
                return function (t) {
                  var r,
                    i,
                    n = nE(t);
                  return n == v
                    ? tk(t)
                    : n == b
                    ? ((r = -1),
                      (i = Array(t.size)),
                      t.forEach(function (e) {
                        i[++r] = [e, e];
                      }),
                      i)
                    : tf(e(t), function (e) {
                        return [e, t[e]];
                      });
                };
              }
              function ns(e, t, n, o, a, c, h, l) {
                var u = 2 & t;
                if (!u && "function" != typeof e) throw new eR(i);
                var p = o ? o.length : 0;
                if (
                  (p || ((t &= -97), (o = a = r)),
                  (h = h === r ? h : t6(oe(h), 0)),
                  (l = l === r ? l : oe(l)),
                  (p -= a ? a.length : 0),
                  64 & t)
                ) {
                  var f = o,
                    d = a;
                  o = a = r;
                }
                var g = u ? r : nf(e),
                  v = [e, t, n, o, a, f, d, c, h, l];
                if (
                  (g &&
                    (function (e, t) {
                      var r = e[1],
                        i = t[1],
                        n = r | i,
                        o = n < 131,
                        a =
                          (128 == i && 8 == r) ||
                          (128 == i && 256 == r && e[7].length <= t[8]) ||
                          (384 == i && t[7].length <= t[8] && 8 == r);
                      if (o || a) {
                        1 & i && ((e[2] = t[2]), (n |= 1 & r ? 0 : 4));
                        var c = t[3];
                        if (c) {
                          var h = e[3];
                          (e[3] = h ? iB(h, c, t[4]) : c),
                            (e[4] = h ? tH(e[3], s) : t[4]);
                        }
                        (c = t[5]) &&
                          ((h = e[5]),
                          (e[5] = h ? iJ(h, c, t[6]) : c),
                          (e[6] = h ? tH(e[5], s) : t[6])),
                          (c = t[7]) && (e[7] = c),
                          128 & i &&
                            (e[8] = null == e[8] ? t[8] : t3(e[8], t[8])),
                          null == e[9] && (e[9] = t[9]),
                          (e[0] = t[0]),
                          (e[1] = n);
                      }
                    })(v, g),
                  (e = v[0]),
                  (t = v[1]),
                  (n = v[2]),
                  (o = v[3]),
                  (a = v[4]),
                  (l = v[9] =
                    v[9] === r ? (u ? 0 : e.length) : t6(v[9] - p, 0)) ||
                    !(24 & t) ||
                    (t &= -25),
                  t && 1 != t)
                )
                  8 == t || 16 == t
                    ? ((y = e),
                      (m = t),
                      (_ = l),
                      (w = i1(y)),
                      (T = function e() {
                        for (
                          var t = arguments.length, i = em(t), n = t, s = ng(e);
                          n--;

                        )
                          i[n] = arguments[n];
                        var o =
                          t < 3 && i[0] !== s && i[t - 1] !== s ? [] : tH(i, s);
                        return (t -= o.length) < _
                          ? nt(y, m, i3, e.placeholder, r, i, o, r, r, _ - t)
                          : ts(
                              this && this !== e6 && this instanceof e ? w : y,
                              this,
                              i
                            );
                      }))
                    : (32 != t && 33 != t) || a.length
                    ? (T = i3.apply(r, v))
                    : ((b = e),
                      (E = t),
                      (I = n),
                      (P = o),
                      (S = 1 & E),
                      (R = i1(b)),
                      (T = function e() {
                        for (
                          var t = -1,
                            r = arguments.length,
                            i = -1,
                            n = P.length,
                            s = em(n + r),
                            o =
                              this && this !== e6 && this instanceof e ? R : b;
                          ++i < n;

                        )
                          s[i] = P[i];
                        for (; r--; ) s[i++] = arguments[++t];
                        return ts(o, S ? I : this, s);
                      }));
                else
                  var y,
                    m,
                    _,
                    w,
                    b,
                    E,
                    I,
                    P,
                    S,
                    R,
                    O,
                    x,
                    C,
                    A,
                    N,
                    T =
                      ((O = e),
                      (x = t),
                      (C = n),
                      (A = 1 & x),
                      (N = i1(O)),
                      function e() {
                        return (
                          this && this !== e6 && this instanceof e ? N : O
                        ).apply(A ? C : this, arguments);
                      });
                return nU((g ? iw : nD)(T, v), e, t);
              }
              function no(e, t, i, n) {
                return e === r || (sD(e, eC[i]) && !eT.call(n, i)) ? t : e;
              }
              function na(e, t, i, n, s, o) {
                return (
                  sG(e) &&
                    sG(t) &&
                    (o.set(t, e), ia(e, t, r, na, o), o.delete(t)),
                  e
                );
              }
              function nc(e) {
                return s0(e) ? r : e;
              }
              function nh(e, t, i, n, s, o) {
                var a = 1 & i,
                  c = e.length,
                  h = t.length;
                if (c != h && !(a && h > c)) return !1;
                var l = o.get(e),
                  u = o.get(t);
                if (l && u) return l == t && u == e;
                var p = -1,
                  f = !0,
                  d = 2 & i ? new rI() : r;
                for (o.set(e, t), o.set(t, e); ++p < c; ) {
                  var g = e[p],
                    v = t[p];
                  if (n) var y = a ? n(v, g, p, t, e, o) : n(g, v, p, e, t, o);
                  if (y !== r) {
                    if (y) continue;
                    f = !1;
                    break;
                  }
                  if (d) {
                    if (
                      !ty(t, function (e, t) {
                        if (!tq(d, t) && (g === e || s(g, e, i, n, o)))
                          return d.push(t);
                      })
                    ) {
                      f = !1;
                      break;
                    }
                  } else if (!(g === v || s(g, v, i, n, o))) {
                    f = !1;
                    break;
                  }
                }
                return o.delete(e), o.delete(t), f;
              }
              function nl(e) {
                return nM(nq(e, r, nQ), e + "");
              }
              function nu(e) {
                return rX(e, oy, nw);
              }
              function np(e) {
                return rX(e, om, nb);
              }
              var nf = rs
                ? function (e) {
                    return rs.get(e);
                  }
                : oW;
              function nd(e) {
                for (
                  var t = e.name + "",
                    r = ro[t],
                    i = eT.call(ro, t) ? r.length : 0;
                  i--;

                ) {
                  var n = r[i],
                    s = n.func;
                  if (null == s || s == e) return n.name;
                }
                return t;
              }
              function ng(e) {
                return (eT.call(rg, "placeholder") ? rg : e).placeholder;
              }
              function nv() {
                var e = rg.iteratee || oK;
                return (
                  (e = e === oK ? ie : e),
                  arguments.length ? e(arguments[0], arguments[1]) : e
                );
              }
              function ny(e, t) {
                var r,
                  i = e.__data__;
                return (
                  "string" == (r = typeof t) ||
                  "number" == r ||
                  "symbol" == r ||
                  "boolean" == r
                    ? "__proto__" !== t
                    : null === t
                )
                  ? i["string" == typeof t ? "string" : "hash"]
                  : i.map;
              }
              function nm(e) {
                for (var t = oy(e), r = t.length; r--; ) {
                  var i = t[r],
                    n = e[i];
                  t[r] = [i, n, n == n && !sG(n)];
                }
                return t;
              }
              function n_(e, t) {
                var i = null == e ? r : e[t];
                return r8(i) ? i : r;
              }
              var nw = tY
                  ? function (e) {
                      return null == e
                        ? []
                        : tl(tY((e = eI(e))), function (t) {
                            return e1.call(e, t);
                          });
                    }
                  : o1,
                nb = tY
                  ? function (e) {
                      for (var t = []; e; ) td(t, nw(e)), (e = eJ(e));
                      return t;
                    }
                  : o1,
                nE = r0;
              function nI(e, t, r) {
                t = iM(t, e);
                for (var i = -1, n = t.length, s = !1; ++i < n; ) {
                  var o = nV(t[i]);
                  if (!(s = null != e && r(e, o))) break;
                  e = e[o];
                }
                return s || ++i != n
                  ? s
                  : !!(n = null == e ? 0 : e.length) &&
                      sZ(n) &&
                      nR(o, n) &&
                      (sk(e) || sU(e));
              }
              function nP(e) {
                return "function" != typeof e.constructor || nN(e)
                  ? {}
                  : rv(eJ(e));
              }
              function nS(e) {
                return sk(e) || sU(e) || !!(e3 && e && e[e3]);
              }
              function nR(e, t) {
                var r = typeof e;
                return (
                  !!(t = t ?? 9007199254740991) &&
                  ("number" == r || ("symbol" != r && eu.test(e))) &&
                  e > -1 &&
                  e % 1 == 0 &&
                  e < t
                );
              }
              function nO(e, t, r) {
                if (!sG(r)) return !1;
                var i = typeof t;
                return (
                  ("number" == i
                    ? !!(sH(r) && nR(t, r.length))
                    : "string" == i && t in r) && sD(r[t], e)
                );
              }
              function nx(e, t) {
                if (sk(e)) return !1;
                var r = typeof e;
                return (
                  !!(
                    "number" == r ||
                    "symbol" == r ||
                    "boolean" == r ||
                    null == e ||
                    s3(e)
                  ) ||
                  F.test(e) ||
                  !J.test(e) ||
                  (null != t && e in eI(t))
                );
              }
              function nC(e) {
                var t = nd(e),
                  r = rg[t];
                if ("function" != typeof r || !(t in r_.prototype)) return !1;
                if (e === r) return !0;
                var i = nf(r);
                return !!i && e === i[0];
              }
              ((t8 && nE(new t8(new ArrayBuffer(1))) != R) ||
                (re && nE(new re()) != v) ||
                (rt && nE(rt.resolve()) != _) ||
                (rr && nE(new rr()) != b) ||
                (ri && nE(new ri()) != P)) &&
                (nE = function (e) {
                  var t = r0(e),
                    i = t == m ? e.constructor : r,
                    n = i ? nK(i) : "";
                  if (n)
                    switch (n) {
                      case ra:
                        return R;
                      case rc:
                        return v;
                      case rh:
                        return _;
                      case rl:
                        return b;
                      case ru:
                        return P;
                    }
                  return t;
                });
              var nA = eA ? sF : o5;
              function nN(e) {
                var t = e && e.constructor,
                  r = ("function" == typeof t && t.prototype) || eC;
                return e === r;
              }
              function nT(e, t) {
                return function (i) {
                  return null != i && i[e] === t && (t !== r || e in eI(i));
                };
              }
              function nq(e, t, i) {
                return (
                  (t = t6(t === r ? e.length - 1 : t, 0)),
                  function () {
                    for (
                      var r = arguments,
                        n = -1,
                        s = t6(r.length - t, 0),
                        o = em(s);
                      ++n < s;

                    )
                      o[n] = r[t + n];
                    n = -1;
                    for (var a = em(t + 1); ++n < t; ) a[n] = r[n];
                    return (a[t] = i(o)), ts(e, this, a);
                  }
                );
              }
              function nj(e, t) {
                return t.length < 2 ? e : rY(e, iE(t, 0, -1));
              }
              function nL(e, t) {
                if (
                  !("constructor" === t && "function" == typeof e[t]) &&
                  "__proto__" != t
                )
                  return e[t];
              }
              var nD = nk(iw),
                nz =
                  tZ ||
                  function (e, t) {
                    return e6.setTimeout(e, t);
                  },
                nM = nk(
                  e7
                    ? function (e, t) {
                        return e7(e, "toString", {
                          configurable: !0,
                          enumerable: !1,
                          value: ok(t),
                          writable: !0,
                        });
                      }
                    : oV
                );
              function nU(e, t, r) {
                var i,
                  n,
                  s = t + "";
                return nM(
                  e,
                  (function (e, t) {
                    var r = t.length;
                    if (!r) return e;
                    var i = r - 1;
                    return (
                      (t[i] = (r > 1 ? "& " : "") + t[i]),
                      (t = t.join(r > 2 ? ", " : " ")),
                      e.replace(
                        X,
                        `{
/* [wrapped with ` +
                          t +
                          `] */
`
                      )
                    );
                  })(
                    s,
                    ((i = (n = s.match(ee)) ? n[1].split(et) : []),
                    ta(c, function (e) {
                      var t = "_." + e[0];
                      r & e[1] && !tu(i, t) && i.push(t);
                    }),
                    i.sort())
                  )
                );
              }
              function nk(e) {
                var t = 0,
                  i = 0;
                return function () {
                  var n = t2(),
                    s = 16 - (n - i);
                  if (((i = n), s > 0)) {
                    if (++t >= 800) return arguments[0];
                  } else t = 0;
                  return e.apply(r, arguments);
                };
              }
              function n$(e, t) {
                var i = -1,
                  n = e.length,
                  s = n - 1;
                for (t = t === r ? n : t; ++i < t; ) {
                  var o = id(i, s),
                    a = e[o];
                  (e[o] = e[i]), (e[i] = a);
                }
                return (e.length = t), e;
              }
              var nH =
                ((ev = (eg = sA(
                  function (e) {
                    var t = [];
                    return (
                      46 === e.charCodeAt(0) && t.push(""),
                      e.replace(W, function (e, r, i, n) {
                        t.push(i ? n.replace(en, "$1") : r || e);
                      }),
                      t
                    );
                  },
                  function (e) {
                    return 500 === ev.size && ev.clear(), e;
                  }
                )).cache),
                eg);
              function nV(e) {
                if ("string" == typeof e || s3(e)) return e;
                var t = e + "";
                return "0" == t && 1 / e == -o ? "-0" : t;
              }
              function nK(e) {
                if (null != e) {
                  try {
                    return eN.call(e);
                  } catch {}
                  try {
                    return e + "";
                  } catch {}
                }
                return "";
              }
              function nB(e) {
                if (e instanceof r_) return e.clone();
                var t = new rm(e.__wrapped__, e.__chain__);
                return (
                  (t.__actions__ = iF(e.__actions__)),
                  (t.__index__ = e.__index__),
                  (t.__values__ = e.__values__),
                  t
                );
              }
              var nJ = iv(function (e, t) {
                  return sV(e) ? rk(e, rJ(t, 1, sV, !0)) : [];
                }),
                nF = iv(function (e, t) {
                  var i = n5(t);
                  return (
                    sV(i) && (i = r),
                    sV(e) ? rk(e, rJ(t, 1, sV, !0), nv(i, 2)) : []
                  );
                }),
                nW = iv(function (e, t) {
                  var i = n5(t);
                  return (
                    sV(i) && (i = r), sV(e) ? rk(e, rJ(t, 1, sV, !0), r, i) : []
                  );
                });
              function nZ(e, t, r) {
                var i = null == e ? 0 : e.length;
                if (!i) return -1;
                var n = null == r ? 0 : oe(r);
                return n < 0 && (n = t6(i + n, 0)), tw(e, nv(t, 3), n);
              }
              function nG(e, t, i) {
                var n = null == e ? 0 : e.length;
                if (!n) return -1;
                var s = n - 1;
                return (
                  i !== r &&
                    ((s = oe(i)), (s = i < 0 ? t6(n + s, 0) : t3(s, n - 1))),
                  tw(e, nv(t, 3), s, !0)
                );
              }
              function nQ(e) {
                return (null == e ? 0 : e.length) ? rJ(e, 1) : [];
              }
              function nY(e) {
                return e && e.length ? e[0] : r;
              }
              var nX = iv(function (e) {
                  var t = tf(e, iD);
                  return t.length && t[0] === e[0] ? r3(t) : [];
                }),
                n0 = iv(function (e) {
                  var t = n5(e),
                    i = tf(e, iD);
                  return (
                    t === n5(i) ? (t = r) : i.pop(),
                    i.length && i[0] === e[0] ? r3(i, nv(t, 2)) : []
                  );
                }),
                n1 = iv(function (e) {
                  var t = n5(e),
                    i = tf(e, iD);
                  return (
                    (t = "function" == typeof t ? t : r) && i.pop(),
                    i.length && i[0] === e[0] ? r3(i, r, t) : []
                  );
                });
              function n5(e) {
                var t = null == e ? 0 : e.length;
                return t ? e[t - 1] : r;
              }
              var n6 = iv(n3);
              function n3(e, t) {
                return e && e.length && t && t.length ? iu(e, t) : e;
              }
              var n2 = nl(function (e, t) {
                var r = null == e ? 0 : e.length,
                  i = rL(e, t);
                return (
                  ip(
                    e,
                    tf(t, function (e) {
                      return nR(e, r) ? +e : e;
                    }).sort(iK)
                  ),
                  i
                );
              });
              function n9(e) {
                return null == e ? e : t7.call(e);
              }
              var n4 = iv(function (e) {
                  return iC(rJ(e, 1, sV, !0));
                }),
                n7 = iv(function (e) {
                  var t = n5(e);
                  return sV(t) && (t = r), iC(rJ(e, 1, sV, !0), nv(t, 2));
                }),
                n8 = iv(function (e) {
                  var t = n5(e);
                  return (
                    (t = "function" == typeof t ? t : r),
                    iC(rJ(e, 1, sV, !0), r, t)
                  );
                });
              function se(e) {
                if (!(e && e.length)) return [];
                var t = 0;
                return (
                  (e = tl(e, function (e) {
                    if (sV(e)) return (t = t6(e.length, t)), !0;
                  })),
                  tC(t, function (t) {
                    return tf(e, tS(t));
                  })
                );
              }
              function st(e, t) {
                if (!(e && e.length)) return [];
                var i = se(e);
                return null == t
                  ? i
                  : tf(i, function (e) {
                      return ts(t, r, e);
                    });
              }
              var sr = iv(function (e, t) {
                  return sV(e) ? rk(e, t) : [];
                }),
                si = iv(function (e) {
                  return ij(tl(e, sV));
                }),
                sn = iv(function (e) {
                  var t = n5(e);
                  return sV(t) && (t = r), ij(tl(e, sV), nv(t, 2));
                }),
                ss = iv(function (e) {
                  var t = n5(e);
                  return (
                    (t = "function" == typeof t ? t : r), ij(tl(e, sV), r, t)
                  );
                }),
                so = iv(se),
                sa = iv(function (e) {
                  var t = e.length,
                    i = t > 1 ? e[t - 1] : r;
                  return (
                    (i = "function" == typeof i ? (e.pop(), i) : r), st(e, i)
                  );
                });
              function sc(e) {
                var t = rg(e);
                return (t.__chain__ = !0), t;
              }
              function sh(e, t) {
                return t(e);
              }
              var sl = nl(function (e) {
                  var t = e.length,
                    i = t ? e[0] : 0,
                    n = this.__wrapped__,
                    s = function (t) {
                      return rL(t, e);
                    };
                  return !(t > 1) &&
                    !this.__actions__.length &&
                    n instanceof r_ &&
                    nR(i)
                    ? ((n = n.slice(i, +i + (t ? 1 : 0))).__actions__.push({
                        func: sh,
                        args: [s],
                        thisArg: r,
                      }),
                      new rm(n, this.__chain__).thru(function (e) {
                        return t && !e.length && e.push(r), e;
                      }))
                    : this.thru(s);
                }),
                su = iZ(function (e, t, r) {
                  eT.call(e, r) ? ++e[r] : rj(e, r, 1);
                }),
                sp = i5(nZ),
                sf = i5(nG);
              function sd(e, t) {
                return (sk(e) ? ta : r$)(e, nv(t, 3));
              }
              function sg(e, t) {
                return (sk(e) ? tc : rH)(e, nv(t, 3));
              }
              var sv = iZ(function (e, t, r) {
                  eT.call(e, r) ? e[r].push(t) : rj(e, r, [t]);
                }),
                sy = iv(function (e, t, r) {
                  var i = -1,
                    n = "function" == typeof t,
                    s = sH(e) ? em(e.length) : [];
                  return (
                    r$(e, function (e) {
                      s[++i] = n ? ts(t, e, r) : r2(e, t, r);
                    }),
                    s
                  );
                }),
                sm = iZ(function (e, t, r) {
                  rj(e, r, t);
                });
              function s_(e, t) {
                return (sk(e) ? tf : ii)(e, nv(t, 3));
              }
              var sw = iZ(
                  function (e, t, r) {
                    e[r ? 0 : 1].push(t);
                  },
                  function () {
                    return [[], []];
                  }
                ),
                sb = iv(function (e, t) {
                  if (null == e) return [];
                  var r = t.length;
                  return (
                    r > 1 && nO(e, t[0], t[1])
                      ? (t = [])
                      : r > 2 && nO(t[0], t[1], t[2]) && (t = [t[0]]),
                    ih(e, rJ(t, 1), [])
                  );
                }),
                sE =
                  tR ||
                  function () {
                    return e6.Date.now();
                  };
              function sI(e, t, i) {
                return (
                  (t = i ? r : t),
                  (t = e && null == t ? e.length : t),
                  ns(e, 128, r, r, r, r, t)
                );
              }
              function sP(e, t) {
                var n;
                if ("function" != typeof t) throw new eR(i);
                return (
                  (e = oe(e)),
                  function () {
                    return (
                      --e > 0 && (n = t.apply(this, arguments)),
                      e <= 1 && (t = r),
                      n
                    );
                  }
                );
              }
              var sS = iv(function (e, t, r) {
                  var i = 1;
                  if (r.length) {
                    var n = tH(r, ng(sS));
                    i |= 32;
                  }
                  return ns(e, i, t, r, n);
                }),
                sR = iv(function (e, t, r) {
                  var i = 3;
                  if (r.length) {
                    var n = tH(r, ng(sR));
                    i |= 32;
                  }
                  return ns(t, i, e, r, n);
                });
              function sO(e, t, n) {
                var s,
                  o,
                  a,
                  c,
                  h,
                  l,
                  u = 0,
                  p = !1,
                  f = !1,
                  d = !0;
                if ("function" != typeof e) throw new eR(i);
                function g(t) {
                  var i = s,
                    n = o;
                  return (s = o = r), (u = t), (c = e.apply(n, i));
                }
                function v(e) {
                  var i = e - l,
                    n = e - u;
                  return l === r || i >= t || i < 0 || (f && n >= a);
                }
                function y() {
                  var e,
                    r,
                    i,
                    n = sE();
                  if (v(n)) return m(n);
                  h = nz(
                    y,
                    ((e = n - l),
                    (r = n - u),
                    (i = t - e),
                    f ? t3(i, a - r) : i)
                  );
                }
                function m(e) {
                  return (h = r), d && s ? g(e) : ((s = o = r), c);
                }
                function _() {
                  var e,
                    i = sE(),
                    n = v(i);
                  if (((s = arguments), (o = this), (l = i), n)) {
                    if (h === r)
                      return (u = e = l), (h = nz(y, t)), p ? g(e) : c;
                    if (f) return ik(h), (h = nz(y, t)), g(l);
                  }
                  return h === r && (h = nz(y, t)), c;
                }
                return (
                  (t = or(t) || 0),
                  sG(n) &&
                    ((p = !!n.leading),
                    (a = (f = "maxWait" in n) ? t6(or(n.maxWait) || 0, t) : a),
                    (d = "trailing" in n ? !!n.trailing : d)),
                  (_.cancel = function () {
                    h !== r && ik(h), (u = 0), (s = l = o = h = r);
                  }),
                  (_.flush = function () {
                    return h === r ? c : m(sE());
                  }),
                  _
                );
              }
              var sx = iv(function (e, t) {
                  return rU(e, 1, t);
                }),
                sC = iv(function (e, t, r) {
                  return rU(e, or(t) || 0, r);
                });
              function sA(e, t) {
                if (
                  "function" != typeof e ||
                  (null != t && "function" != typeof t)
                )
                  throw new eR(i);
                var r = function () {
                  var i = arguments,
                    n = t ? t.apply(this, i) : i[0],
                    s = r.cache;
                  if (s.has(n)) return s.get(n);
                  var o = e.apply(this, i);
                  return (r.cache = s.set(n, o) || s), o;
                };
                return (r.cache = new (sA.Cache || rE)()), r;
              }
              function sN(e) {
                if ("function" != typeof e) throw new eR(i);
                return function () {
                  var t = arguments;
                  switch (t.length) {
                    case 0:
                      return !e.call(this);
                    case 1:
                      return !e.call(this, t[0]);
                    case 2:
                      return !e.call(this, t[0], t[1]);
                    case 3:
                      return !e.call(this, t[0], t[1], t[2]);
                  }
                  return !e.apply(this, t);
                };
              }
              sA.Cache = rE;
              var sT = iv(function (e, t) {
                  var r = (t =
                    1 == t.length && sk(t[0])
                      ? tf(t[0], tN(nv()))
                      : tf(rJ(t, 1), tN(nv()))).length;
                  return iv(function (i) {
                    for (var n = -1, s = t3(i.length, r); ++n < s; )
                      i[n] = t[n].call(this, i[n]);
                    return ts(e, this, i);
                  });
                }),
                sq = iv(function (e, t) {
                  var i = tH(t, ng(sq));
                  return ns(e, 32, r, t, i);
                }),
                sj = iv(function (e, t) {
                  var i = tH(t, ng(sj));
                  return ns(e, 64, r, t, i);
                }),
                sL = nl(function (e, t) {
                  return ns(e, 256, r, r, r, t);
                });
              function sD(e, t) {
                return e === t || (e != e && t != t);
              }
              var sz = ne(r1),
                sM = ne(function (e, t) {
                  return e >= t;
                }),
                sU = r9(
                  (function () {
                    return arguments;
                  })()
                )
                  ? r9
                  : function (e) {
                      return (
                        sQ(e) && eT.call(e, "callee") && !e1.call(e, "callee")
                      );
                    },
                sk = em.isArray,
                s$ = e8
                  ? tN(e8)
                  : function (e) {
                      return sQ(e) && r0(e) == S;
                    };
              function sH(e) {
                return null != e && sZ(e.length) && !sF(e);
              }
              function sV(e) {
                return sQ(e) && sH(e);
              }
              var sK = tX || o5,
                sB = te
                  ? tN(te)
                  : function (e) {
                      return sQ(e) && r0(e) == p;
                    };
              function sJ(e) {
                if (!sQ(e)) return !1;
                var t = r0(e);
                return (
                  t == f ||
                  "[object DOMException]" == t ||
                  ("string" == typeof e.message &&
                    "string" == typeof e.name &&
                    !s0(e))
                );
              }
              function sF(e) {
                if (!sG(e)) return !1;
                var t = r0(e);
                return (
                  t == d ||
                  t == g ||
                  "[object AsyncFunction]" == t ||
                  "[object Proxy]" == t
                );
              }
              function sW(e) {
                return "number" == typeof e && e == oe(e);
              }
              function sZ(e) {
                return (
                  "number" == typeof e &&
                  e > -1 &&
                  e % 1 == 0 &&
                  e <= 9007199254740991
                );
              }
              function sG(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t);
              }
              function sQ(e) {
                return null != e && "object" == typeof e;
              }
              var sY = tt
                ? tN(tt)
                : function (e) {
                    return sQ(e) && nE(e) == v;
                  };
              function sX(e) {
                return "number" == typeof e || (sQ(e) && r0(e) == y);
              }
              function s0(e) {
                if (!sQ(e) || r0(e) != m) return !1;
                var t = eJ(e);
                if (null === t) return !0;
                var r = eT.call(t, "constructor") && t.constructor;
                return (
                  "function" == typeof r && r instanceof r && eN.call(r) == eD
                );
              }
              var s1 = tr
                  ? tN(tr)
                  : function (e) {
                      return sQ(e) && r0(e) == w;
                    },
                s5 = ti
                  ? tN(ti)
                  : function (e) {
                      return sQ(e) && nE(e) == b;
                    };
              function s6(e) {
                return "string" == typeof e || (!sk(e) && sQ(e) && r0(e) == E);
              }
              function s3(e) {
                return "symbol" == typeof e || (sQ(e) && r0(e) == I);
              }
              var s2 = tn
                  ? tN(tn)
                  : function (e) {
                      return sQ(e) && sZ(e.length) && !!eG[r0(e)];
                    },
                s9 = ne(ir),
                s4 = ne(function (e, t) {
                  return e <= t;
                });
              function s7(e) {
                if (!e) return [];
                if (sH(e)) return s6(e) ? tB(e) : iF(e);
                if (e2 && e[e2])
                  return (function (e) {
                    for (var t, r = []; !(t = e.next()).done; ) r.push(t.value);
                    return r;
                  })(e[e2]());
                var t = nE(e);
                return (t == v ? tk : t == b ? tV : oR)(e);
              }
              function s8(e) {
                return e
                  ? (e = or(e)) === o || e === -o
                    ? (e < 0 ? -1 : 1) * 17976931348623157e292
                    : e == e
                    ? e
                    : 0
                  : 0 === e
                  ? e
                  : 0;
              }
              function oe(e) {
                var t = s8(e),
                  r = t % 1;
                return t == t ? (r ? t - r : t) : 0;
              }
              function ot(e) {
                return e ? rD(oe(e), 0, 4294967295) : 0;
              }
              function or(e) {
                if ("number" == typeof e) return e;
                if (s3(e)) return a;
                if (sG(e)) {
                  var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                  e = sG(t) ? t + "" : t;
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = tA(e);
                var r = ec.test(e);
                return r || el.test(e)
                  ? e0(e.slice(2), r ? 2 : 8)
                  : ea.test(e)
                  ? a
                  : +e;
              }
              function oi(e) {
                return iW(e, om(e));
              }
              function on(e) {
                return null == e ? "" : ix(e);
              }
              var os = iG(function (e, t) {
                  if (nN(t) || sH(t)) {
                    iW(t, oy(t), e);
                    return;
                  }
                  for (var r in t) eT.call(t, r) && rA(e, r, t[r]);
                }),
                oo = iG(function (e, t) {
                  iW(t, om(t), e);
                }),
                oa = iG(function (e, t, r, i) {
                  iW(t, om(t), e, i);
                }),
                oc = iG(function (e, t, r, i) {
                  iW(t, oy(t), e, i);
                }),
                oh = nl(rL),
                ol = iv(function (e, t) {
                  e = eI(e);
                  var i = -1,
                    n = t.length,
                    s = n > 2 ? t[2] : r;
                  for (s && nO(t[0], t[1], s) && (n = 1); ++i < n; )
                    for (
                      var o = t[i], a = om(o), c = -1, h = a.length;
                      ++c < h;

                    ) {
                      var l = a[c],
                        u = e[l];
                      (u === r || (sD(u, eC[l]) && !eT.call(e, l))) &&
                        (e[l] = o[l]);
                    }
                  return e;
                }),
                ou = iv(function (e) {
                  return e.push(r, na), ts(ow, r, e);
                });
              function op(e, t, i) {
                var n = null == e ? r : rY(e, t);
                return n === r ? i : n;
              }
              function of(e, t) {
                return null != e && nI(e, t, r6);
              }
              var od = i2(function (e, t, r) {
                  null != t &&
                    "function" != typeof t.toString &&
                    (t = eL.call(t)),
                    (e[t] = r);
                }, ok(oV)),
                og = i2(function (e, t, r) {
                  null != t &&
                    "function" != typeof t.toString &&
                    (t = eL.call(t)),
                    eT.call(e, t) ? e[t].push(r) : (e[t] = [r]);
                }, nv),
                ov = iv(r2);
              function oy(e) {
                return sH(e) ? rS(e) : it(e);
              }
              function om(e) {
                return sH(e)
                  ? rS(e, !0)
                  : (function (e) {
                      if (!sG(e))
                        return (function (e) {
                          var t = [];
                          if (null != e) for (var r in eI(e)) t.push(r);
                          return t;
                        })(e);
                      var t = nN(e),
                        r = [];
                      for (var i in e)
                        ("constructor" == i && (t || !eT.call(e, i))) ||
                          r.push(i);
                      return r;
                    })(e);
              }
              var o_ = iG(function (e, t, r) {
                  ia(e, t, r);
                }),
                ow = iG(function (e, t, r, i) {
                  ia(e, t, r, i);
                }),
                ob = nl(function (e, t) {
                  var r = {};
                  if (null == e) return r;
                  var i = !1;
                  (t = tf(t, function (t) {
                    return (t = iM(t, e)), i || (i = t.length > 1), t;
                  })),
                    iW(e, np(e), r),
                    i && (r = rz(r, 7, nc));
                  for (var n = t.length; n--; ) iA(r, t[n]);
                  return r;
                }),
                oE = nl(function (e, t) {
                  return null == e
                    ? {}
                    : il(e, t, function (t, r) {
                        return of(e, r);
                      });
                });
              function oI(e, t) {
                if (null == e) return {};
                var r = tf(np(e), function (e) {
                  return [e];
                });
                return (
                  (t = nv(t)),
                  il(e, r, function (e, r) {
                    return t(e, r[0]);
                  })
                );
              }
              var oP = nn(oy),
                oS = nn(om);
              function oR(e) {
                return null == e ? [] : tT(e, oy(e));
              }
              var oO = i0(function (e, t, r) {
                return (t = t.toLowerCase()), e + (r ? ox(t) : t);
              });
              function ox(e) {
                return oD(on(e).toLowerCase());
              }
              function oC(e) {
                return (e = on(e)) && e.replace(ep, tD).replace(eV, "");
              }
              var oA = i0(function (e, t, r) {
                  return e + (r ? "-" : "") + t.toLowerCase();
                }),
                oN = i0(function (e, t, r) {
                  return e + (r ? " " : "") + t.toLowerCase();
                }),
                oT = iX("toLowerCase"),
                oq = i0(function (e, t, r) {
                  return e + (r ? "_" : "") + t.toLowerCase();
                }),
                oj = i0(function (e, t, r) {
                  return e + (r ? " " : "") + oD(t);
                }),
                oL = i0(function (e, t, r) {
                  return e + (r ? " " : "") + t.toUpperCase();
                }),
                oD = iX("toUpperCase");
              function oz(e, t, i) {
                var n;
                return (
                  (e = on(e)),
                  (t = i ? r : t) === r
                    ? ((n = e), eF.test(n))
                      ? e.match(eB) || []
                      : e.match(er) || []
                    : e.match(t) || []
                );
              }
              var oM = iv(function (e, t) {
                  try {
                    return ts(e, r, t);
                  } catch (e) {
                    return sJ(e) ? e : new ew(e);
                  }
                }),
                oU = nl(function (e, t) {
                  return (
                    ta(t, function (t) {
                      rj(e, (t = nV(t)), sS(e[t], e));
                    }),
                    e
                  );
                });
              function ok(e) {
                return function () {
                  return e;
                };
              }
              var o$ = i6(),
                oH = i6(!0);
              function oV(e) {
                return e;
              }
              function oK(e) {
                return ie("function" == typeof e ? e : rz(e, 1));
              }
              var oB = iv(function (e, t) {
                  return function (r) {
                    return r2(r, e, t);
                  };
                }),
                oJ = iv(function (e, t) {
                  return function (r) {
                    return r2(e, r, t);
                  };
                });
              function oF(e, t, r) {
                var i = oy(t),
                  n = rQ(t, i);
                null != r ||
                  (sG(t) && (n.length || !i.length)) ||
                  ((r = t), (t = e), (e = this), (n = rQ(t, oy(t))));
                var s = !(sG(r) && "chain" in r) || !!r.chain,
                  o = sF(e);
                return (
                  ta(n, function (r) {
                    var i = t[r];
                    (e[r] = i),
                      o &&
                        (e.prototype[r] = function () {
                          var t = this.__chain__;
                          if (s || t) {
                            var r = e(this.__wrapped__);
                            return (
                              (r.__actions__ = iF(this.__actions__)).push({
                                func: i,
                                args: arguments,
                                thisArg: e,
                              }),
                              (r.__chain__ = t),
                              r
                            );
                          }
                          return i.apply(e, td([this.value()], arguments));
                        });
                  }),
                  e
                );
              }
              function oW() {}
              var oZ = i4(tf),
                oG = i4(th),
                oQ = i4(ty);
              function oY(e) {
                return nx(e)
                  ? tS(nV(e))
                  : function (t) {
                      return rY(t, e);
                    };
              }
              var oX = i8(),
                o0 = i8(!0);
              function o1() {
                return [];
              }
              function o5() {
                return !1;
              }
              var o6 = i9(function (e, t) {
                  return e + t;
                }, 0),
                o3 = nr("ceil"),
                o2 = i9(function (e, t) {
                  return e / t;
                }, 1),
                o9 = nr("floor"),
                o4 = i9(function (e, t) {
                  return e * t;
                }, 1),
                o7 = nr("round"),
                o8 = i9(function (e, t) {
                  return e - t;
                }, 0);
              return (
                (rg.after = function (e, t) {
                  if ("function" != typeof t) throw new eR(i);
                  return (
                    (e = oe(e)),
                    function () {
                      if (--e < 1) return t.apply(this, arguments);
                    }
                  );
                }),
                (rg.ary = sI),
                (rg.assign = os),
                (rg.assignIn = oo),
                (rg.assignInWith = oa),
                (rg.assignWith = oc),
                (rg.at = oh),
                (rg.before = sP),
                (rg.bind = sS),
                (rg.bindAll = oU),
                (rg.bindKey = sR),
                (rg.castArray = function () {
                  if (!arguments.length) return [];
                  var e = arguments[0];
                  return sk(e) ? e : [e];
                }),
                (rg.chain = sc),
                (rg.chunk = function (e, t, i) {
                  t = (i ? nO(e, t, i) : t === r) ? 1 : t6(oe(t), 0);
                  var n = null == e ? 0 : e.length;
                  if (!n || t < 1) return [];
                  for (var s = 0, o = 0, a = em(tG(n / t)); s < n; )
                    a[o++] = iE(e, s, (s += t));
                  return a;
                }),
                (rg.compact = function (e) {
                  for (
                    var t = -1, r = null == e ? 0 : e.length, i = 0, n = [];
                    ++t < r;

                  ) {
                    var s = e[t];
                    s && (n[i++] = s);
                  }
                  return n;
                }),
                (rg.concat = function () {
                  var e = arguments.length;
                  if (!e) return [];
                  for (var t = em(e - 1), r = arguments[0], i = e; i--; )
                    t[i - 1] = arguments[i];
                  return td(sk(r) ? iF(r) : [r], rJ(t, 1));
                }),
                (rg.cond = function (e) {
                  var t = null == e ? 0 : e.length,
                    r = nv();
                  return (
                    (e = t
                      ? tf(e, function (e) {
                          if ("function" != typeof e[1]) throw new eR(i);
                          return [r(e[0]), e[1]];
                        })
                      : []),
                    iv(function (r) {
                      for (var i = -1; ++i < t; ) {
                        var n = e[i];
                        if (ts(n[0], this, r)) return ts(n[1], this, r);
                      }
                    })
                  );
                }),
                (rg.conforms = function (e) {
                  var t, r;
                  return (
                    (r = oy((t = rz(e, 1)))),
                    function (e) {
                      return rM(e, t, r);
                    }
                  );
                }),
                (rg.constant = ok),
                (rg.countBy = su),
                (rg.create = function (e, t) {
                  var r = rv(e);
                  return null == t ? r : rq(r, t);
                }),
                (rg.curry = function e(t, i, n) {
                  i = n ? r : i;
                  var s = ns(t, 8, r, r, r, r, r, i);
                  return (s.placeholder = e.placeholder), s;
                }),
                (rg.curryRight = function e(t, i, n) {
                  i = n ? r : i;
                  var s = ns(t, 16, r, r, r, r, r, i);
                  return (s.placeholder = e.placeholder), s;
                }),
                (rg.debounce = sO),
                (rg.defaults = ol),
                (rg.defaultsDeep = ou),
                (rg.defer = sx),
                (rg.delay = sC),
                (rg.difference = nJ),
                (rg.differenceBy = nF),
                (rg.differenceWith = nW),
                (rg.drop = function (e, t, i) {
                  var n = null == e ? 0 : e.length;
                  return n
                    ? iE(e, (t = i || t === r ? 1 : oe(t)) < 0 ? 0 : t, n)
                    : [];
                }),
                (rg.dropRight = function (e, t, i) {
                  var n = null == e ? 0 : e.length;
                  return n
                    ? iE(
                        e,
                        0,
                        (t = n - (t = i || t === r ? 1 : oe(t))) < 0 ? 0 : t
                      )
                    : [];
                }),
                (rg.dropRightWhile = function (e, t) {
                  return e && e.length ? iT(e, nv(t, 3), !0, !0) : [];
                }),
                (rg.dropWhile = function (e, t) {
                  return e && e.length ? iT(e, nv(t, 3), !0) : [];
                }),
                (rg.fill = function (e, t, i, n) {
                  var s = null == e ? 0 : e.length;
                  return s
                    ? (i &&
                        "number" != typeof i &&
                        nO(e, t, i) &&
                        ((i = 0), (n = s)),
                      (function (e, t, i, n) {
                        var s = e.length;
                        for (
                          (i = oe(i)) < 0 && (i = -i > s ? 0 : s + i),
                            (n = n === r || n > s ? s : oe(n)) < 0 && (n += s),
                            n = i > n ? 0 : ot(n);
                          i < n;

                        )
                          e[i++] = t;
                        return e;
                      })(e, t, i, n))
                    : [];
                }),
                (rg.filter = function (e, t) {
                  return (sk(e) ? tl : rB)(e, nv(t, 3));
                }),
                (rg.flatMap = function (e, t) {
                  return rJ(s_(e, t), 1);
                }),
                (rg.flatMapDeep = function (e, t) {
                  return rJ(s_(e, t), o);
                }),
                (rg.flatMapDepth = function (e, t, i) {
                  return (i = i === r ? 1 : oe(i)), rJ(s_(e, t), i);
                }),
                (rg.flatten = nQ),
                (rg.flattenDeep = function (e) {
                  return (null == e ? 0 : e.length) ? rJ(e, o) : [];
                }),
                (rg.flattenDepth = function (e, t) {
                  return (null == e ? 0 : e.length)
                    ? rJ(e, (t = t === r ? 1 : oe(t)))
                    : [];
                }),
                (rg.flip = function (e) {
                  return ns(e, 512);
                }),
                (rg.flow = o$),
                (rg.flowRight = oH),
                (rg.fromPairs = function (e) {
                  for (
                    var t = -1, r = null == e ? 0 : e.length, i = {};
                    ++t < r;

                  ) {
                    var n = e[t];
                    i[n[0]] = n[1];
                  }
                  return i;
                }),
                (rg.functions = function (e) {
                  return null == e ? [] : rQ(e, oy(e));
                }),
                (rg.functionsIn = function (e) {
                  return null == e ? [] : rQ(e, om(e));
                }),
                (rg.groupBy = sv),
                (rg.initial = function (e) {
                  return (null == e ? 0 : e.length) ? iE(e, 0, -1) : [];
                }),
                (rg.intersection = nX),
                (rg.intersectionBy = n0),
                (rg.intersectionWith = n1),
                (rg.invert = od),
                (rg.invertBy = og),
                (rg.invokeMap = sy),
                (rg.iteratee = oK),
                (rg.keyBy = sm),
                (rg.keys = oy),
                (rg.keysIn = om),
                (rg.map = s_),
                (rg.mapKeys = function (e, t) {
                  var r = {};
                  return (
                    (t = nv(t, 3)),
                    rZ(e, function (e, i, n) {
                      rj(r, t(e, i, n), e);
                    }),
                    r
                  );
                }),
                (rg.mapValues = function (e, t) {
                  var r = {};
                  return (
                    (t = nv(t, 3)),
                    rZ(e, function (e, i, n) {
                      rj(r, i, t(e, i, n));
                    }),
                    r
                  );
                }),
                (rg.matches = function (e) {
                  return is(rz(e, 1));
                }),
                (rg.matchesProperty = function (e, t) {
                  return io(e, rz(t, 1));
                }),
                (rg.memoize = sA),
                (rg.merge = o_),
                (rg.mergeWith = ow),
                (rg.method = oB),
                (rg.methodOf = oJ),
                (rg.mixin = oF),
                (rg.negate = sN),
                (rg.nthArg = function (e) {
                  return (
                    (e = oe(e)),
                    iv(function (t) {
                      return ic(t, e);
                    })
                  );
                }),
                (rg.omit = ob),
                (rg.omitBy = function (e, t) {
                  return oI(e, sN(nv(t)));
                }),
                (rg.once = function (e) {
                  return sP(2, e);
                }),
                (rg.orderBy = function (e, t, i, n) {
                  return null == e
                    ? []
                    : (sk(t) || (t = null == t ? [] : [t]),
                      sk((i = n ? r : i)) || (i = null == i ? [] : [i]),
                      ih(e, t, i));
                }),
                (rg.over = oZ),
                (rg.overArgs = sT),
                (rg.overEvery = oG),
                (rg.overSome = oQ),
                (rg.partial = sq),
                (rg.partialRight = sj),
                (rg.partition = sw),
                (rg.pick = oE),
                (rg.pickBy = oI),
                (rg.property = oY),
                (rg.propertyOf = function (e) {
                  return function (t) {
                    return null == e ? r : rY(e, t);
                  };
                }),
                (rg.pull = n6),
                (rg.pullAll = n3),
                (rg.pullAllBy = function (e, t, r) {
                  return e && e.length && t && t.length
                    ? iu(e, t, nv(r, 2))
                    : e;
                }),
                (rg.pullAllWith = function (e, t, i) {
                  return e && e.length && t && t.length ? iu(e, t, r, i) : e;
                }),
                (rg.pullAt = n2),
                (rg.range = oX),
                (rg.rangeRight = o0),
                (rg.rearg = sL),
                (rg.reject = function (e, t) {
                  return (sk(e) ? tl : rB)(e, sN(nv(t, 3)));
                }),
                (rg.remove = function (e, t) {
                  var r = [];
                  if (!(e && e.length)) return r;
                  var i = -1,
                    n = [],
                    s = e.length;
                  for (t = nv(t, 3); ++i < s; ) {
                    var o = e[i];
                    t(o, i, e) && (r.push(o), n.push(i));
                  }
                  return ip(e, n), r;
                }),
                (rg.rest = function (e, t) {
                  if ("function" != typeof e) throw new eR(i);
                  return iv(e, (t = t === r ? t : oe(t)));
                }),
                (rg.reverse = n9),
                (rg.sampleSize = function (e, t, i) {
                  return (
                    (t = (i ? nO(e, t, i) : t === r) ? 1 : oe(t)),
                    (sk(e) ? rO : im)(e, t)
                  );
                }),
                (rg.set = function (e, t, r) {
                  return null == e ? e : i_(e, t, r);
                }),
                (rg.setWith = function (e, t, i, n) {
                  return (
                    (n = "function" == typeof n ? n : r),
                    null == e ? e : i_(e, t, i, n)
                  );
                }),
                (rg.shuffle = function (e) {
                  return (sk(e) ? rx : ib)(e);
                }),
                (rg.slice = function (e, t, i) {
                  var n = null == e ? 0 : e.length;
                  return n
                    ? (i && "number" != typeof i && nO(e, t, i)
                        ? ((t = 0), (i = n))
                        : ((t = null == t ? 0 : oe(t)),
                          (i = i === r ? n : oe(i))),
                      iE(e, t, i))
                    : [];
                }),
                (rg.sortBy = sb),
                (rg.sortedUniq = function (e) {
                  return e && e.length ? iR(e) : [];
                }),
                (rg.sortedUniqBy = function (e, t) {
                  return e && e.length ? iR(e, nv(t, 2)) : [];
                }),
                (rg.split = function (e, t, i) {
                  return (
                    i && "number" != typeof i && nO(e, t, i) && (t = i = r),
                    (i = i === r ? 4294967295 : i >>> 0)
                      ? (e = on(e)) &&
                        ("string" == typeof t || (null != t && !s1(t))) &&
                        !(t = ix(t)) &&
                        tU(e)
                        ? iU(tB(e), 0, i)
                        : e.split(t, i)
                      : []
                  );
                }),
                (rg.spread = function (e, t) {
                  if ("function" != typeof e) throw new eR(i);
                  return (
                    (t = null == t ? 0 : t6(oe(t), 0)),
                    iv(function (r) {
                      var i = r[t],
                        n = iU(r, 0, t);
                      return i && td(n, i), ts(e, this, n);
                    })
                  );
                }),
                (rg.tail = function (e) {
                  var t = null == e ? 0 : e.length;
                  return t ? iE(e, 1, t) : [];
                }),
                (rg.take = function (e, t, i) {
                  return e && e.length
                    ? iE(e, 0, (t = i || t === r ? 1 : oe(t)) < 0 ? 0 : t)
                    : [];
                }),
                (rg.takeRight = function (e, t, i) {
                  var n = null == e ? 0 : e.length;
                  return n
                    ? iE(
                        e,
                        (t = n - (t = i || t === r ? 1 : oe(t))) < 0 ? 0 : t,
                        n
                      )
                    : [];
                }),
                (rg.takeRightWhile = function (e, t) {
                  return e && e.length ? iT(e, nv(t, 3), !1, !0) : [];
                }),
                (rg.takeWhile = function (e, t) {
                  return e && e.length ? iT(e, nv(t, 3)) : [];
                }),
                (rg.tap = function (e, t) {
                  return t(e), e;
                }),
                (rg.throttle = function (e, t, r) {
                  var n = !0,
                    s = !0;
                  if ("function" != typeof e) throw new eR(i);
                  return (
                    sG(r) &&
                      ((n = "leading" in r ? !!r.leading : n),
                      (s = "trailing" in r ? !!r.trailing : s)),
                    sO(e, t, { leading: n, maxWait: t, trailing: s })
                  );
                }),
                (rg.thru = sh),
                (rg.toArray = s7),
                (rg.toPairs = oP),
                (rg.toPairsIn = oS),
                (rg.toPath = function (e) {
                  return sk(e) ? tf(e, nV) : s3(e) ? [e] : iF(nH(on(e)));
                }),
                (rg.toPlainObject = oi),
                (rg.transform = function (e, t, r) {
                  var i = sk(e),
                    n = i || sK(e) || s2(e);
                  if (((t = nv(t, 4)), null == r)) {
                    var s = e && e.constructor;
                    r = n
                      ? i
                        ? new s()
                        : []
                      : sG(e) && sF(s)
                      ? rv(eJ(e))
                      : {};
                  }
                  return (
                    (n ? ta : rZ)(e, function (e, i, n) {
                      return t(r, e, i, n);
                    }),
                    r
                  );
                }),
                (rg.unary = function (e) {
                  return sI(e, 1);
                }),
                (rg.union = n4),
                (rg.unionBy = n7),
                (rg.unionWith = n8),
                (rg.uniq = function (e) {
                  return e && e.length ? iC(e) : [];
                }),
                (rg.uniqBy = function (e, t) {
                  return e && e.length ? iC(e, nv(t, 2)) : [];
                }),
                (rg.uniqWith = function (e, t) {
                  return (
                    (t = "function" == typeof t ? t : r),
                    e && e.length ? iC(e, r, t) : []
                  );
                }),
                (rg.unset = function (e, t) {
                  return null == e || iA(e, t);
                }),
                (rg.unzip = se),
                (rg.unzipWith = st),
                (rg.update = function (e, t, r) {
                  return null == e ? e : iN(e, t, iz(r));
                }),
                (rg.updateWith = function (e, t, i, n) {
                  return (
                    (n = "function" == typeof n ? n : r),
                    null == e ? e : iN(e, t, iz(i), n)
                  );
                }),
                (rg.values = oR),
                (rg.valuesIn = function (e) {
                  return null == e ? [] : tT(e, om(e));
                }),
                (rg.without = sr),
                (rg.words = oz),
                (rg.wrap = function (e, t) {
                  return sq(iz(t), e);
                }),
                (rg.xor = si),
                (rg.xorBy = sn),
                (rg.xorWith = ss),
                (rg.zip = so),
                (rg.zipObject = function (e, t) {
                  return iL(e || [], t || [], rA);
                }),
                (rg.zipObjectDeep = function (e, t) {
                  return iL(e || [], t || [], i_);
                }),
                (rg.zipWith = sa),
                (rg.entries = oP),
                (rg.entriesIn = oS),
                (rg.extend = oo),
                (rg.extendWith = oa),
                oF(rg, rg),
                (rg.add = o6),
                (rg.attempt = oM),
                (rg.camelCase = oO),
                (rg.capitalize = ox),
                (rg.ceil = o3),
                (rg.clamp = function (e, t, i) {
                  return (
                    i === r && ((i = t), (t = r)),
                    i !== r && (i = (i = or(i)) == i ? i : 0),
                    t !== r && (t = (t = or(t)) == t ? t : 0),
                    rD(or(e), t, i)
                  );
                }),
                (rg.clone = function (e) {
                  return rz(e, 4);
                }),
                (rg.cloneDeep = function (e) {
                  return rz(e, 5);
                }),
                (rg.cloneDeepWith = function (e, t) {
                  return rz(e, 5, (t = "function" == typeof t ? t : r));
                }),
                (rg.cloneWith = function (e, t) {
                  return rz(e, 4, (t = "function" == typeof t ? t : r));
                }),
                (rg.conformsTo = function (e, t) {
                  return null == t || rM(e, t, oy(t));
                }),
                (rg.deburr = oC),
                (rg.defaultTo = function (e, t) {
                  return null == e || e != e ? t : e;
                }),
                (rg.divide = o2),
                (rg.endsWith = function (e, t, i) {
                  (e = on(e)), (t = ix(t));
                  var n = e.length,
                    s = (i = i === r ? n : rD(oe(i), 0, n));
                  return (i -= t.length) >= 0 && e.slice(i, s) == t;
                }),
                (rg.eq = sD),
                (rg.escape = function (e) {
                  return (e = on(e)) && H.test(e) ? e.replace(k, tz) : e;
                }),
                (rg.escapeRegExp = function (e) {
                  return (e = on(e)) && G.test(e) ? e.replace(Z, "\\$&") : e;
                }),
                (rg.every = function (e, t, i) {
                  var n = sk(e) ? th : rV;
                  return i && nO(e, t, i) && (t = r), n(e, nv(t, 3));
                }),
                (rg.find = sp),
                (rg.findIndex = nZ),
                (rg.findKey = function (e, t) {
                  return t_(e, nv(t, 3), rZ);
                }),
                (rg.findLast = sf),
                (rg.findLastIndex = nG),
                (rg.findLastKey = function (e, t) {
                  return t_(e, nv(t, 3), rG);
                }),
                (rg.floor = o9),
                (rg.forEach = sd),
                (rg.forEachRight = sg),
                (rg.forIn = function (e, t) {
                  return null == e ? e : rF(e, nv(t, 3), om);
                }),
                (rg.forInRight = function (e, t) {
                  return null == e ? e : rW(e, nv(t, 3), om);
                }),
                (rg.forOwn = function (e, t) {
                  return e && rZ(e, nv(t, 3));
                }),
                (rg.forOwnRight = function (e, t) {
                  return e && rG(e, nv(t, 3));
                }),
                (rg.get = op),
                (rg.gt = sz),
                (rg.gte = sM),
                (rg.has = function (e, t) {
                  return null != e && nI(e, t, r5);
                }),
                (rg.hasIn = of),
                (rg.head = nY),
                (rg.identity = oV),
                (rg.includes = function (e, t, r, i) {
                  (e = sH(e) ? e : oR(e)), (r = r && !i ? oe(r) : 0);
                  var n = e.length;
                  return (
                    r < 0 && (r = t6(n + r, 0)),
                    s6(e)
                      ? r <= n && e.indexOf(t, r) > -1
                      : !!n && tb(e, t, r) > -1
                  );
                }),
                (rg.indexOf = function (e, t, r) {
                  var i = null == e ? 0 : e.length;
                  if (!i) return -1;
                  var n = null == r ? 0 : oe(r);
                  return n < 0 && (n = t6(i + n, 0)), tb(e, t, n);
                }),
                (rg.inRange = function (e, t, i) {
                  var n, s, o;
                  return (
                    (t = s8(t)),
                    i === r ? ((i = t), (t = 0)) : (i = s8(i)),
                    (n = e = or(e)) >= t3((s = t), (o = i)) && n < t6(s, o)
                  );
                }),
                (rg.invoke = ov),
                (rg.isArguments = sU),
                (rg.isArray = sk),
                (rg.isArrayBuffer = s$),
                (rg.isArrayLike = sH),
                (rg.isArrayLikeObject = sV),
                (rg.isBoolean = function (e) {
                  return !0 === e || !1 === e || (sQ(e) && r0(e) == u);
                }),
                (rg.isBuffer = sK),
                (rg.isDate = sB),
                (rg.isElement = function (e) {
                  return sQ(e) && 1 === e.nodeType && !s0(e);
                }),
                (rg.isEmpty = function (e) {
                  if (null == e) return !0;
                  if (
                    sH(e) &&
                    (sk(e) ||
                      "string" == typeof e ||
                      "function" == typeof e.splice ||
                      sK(e) ||
                      s2(e) ||
                      sU(e))
                  )
                    return !e.length;
                  var t = nE(e);
                  if (t == v || t == b) return !e.size;
                  if (nN(e)) return !it(e).length;
                  for (var r in e) if (eT.call(e, r)) return !1;
                  return !0;
                }),
                (rg.isEqual = function (e, t) {
                  return r4(e, t);
                }),
                (rg.isEqualWith = function (e, t, i) {
                  var n = (i = "function" == typeof i ? i : r) ? i(e, t) : r;
                  return n === r ? r4(e, t, r, i) : !!n;
                }),
                (rg.isError = sJ),
                (rg.isFinite = function (e) {
                  return "number" == typeof e && t0(e);
                }),
                (rg.isFunction = sF),
                (rg.isInteger = sW),
                (rg.isLength = sZ),
                (rg.isMap = sY),
                (rg.isMatch = function (e, t) {
                  return e === t || r7(e, t, nm(t));
                }),
                (rg.isMatchWith = function (e, t, i) {
                  return (
                    (i = "function" == typeof i ? i : r), r7(e, t, nm(t), i)
                  );
                }),
                (rg.isNaN = function (e) {
                  return sX(e) && e != +e;
                }),
                (rg.isNative = function (e) {
                  if (nA(e))
                    throw new ew(
                      "Unsupported core-js use. Try https://npms.io/search?q=ponyfill."
                    );
                  return r8(e);
                }),
                (rg.isNil = function (e) {
                  return null == e;
                }),
                (rg.isNull = function (e) {
                  return null === e;
                }),
                (rg.isNumber = sX),
                (rg.isObject = sG),
                (rg.isObjectLike = sQ),
                (rg.isPlainObject = s0),
                (rg.isRegExp = s1),
                (rg.isSafeInteger = function (e) {
                  return (
                    sW(e) && e >= -9007199254740991 && e <= 9007199254740991
                  );
                }),
                (rg.isSet = s5),
                (rg.isString = s6),
                (rg.isSymbol = s3),
                (rg.isTypedArray = s2),
                (rg.isUndefined = function (e) {
                  return e === r;
                }),
                (rg.isWeakMap = function (e) {
                  return sQ(e) && nE(e) == P;
                }),
                (rg.isWeakSet = function (e) {
                  return sQ(e) && "[object WeakSet]" == r0(e);
                }),
                (rg.join = function (e, t) {
                  return null == e ? "" : t1.call(e, t);
                }),
                (rg.kebabCase = oA),
                (rg.last = n5),
                (rg.lastIndexOf = function (e, t, i) {
                  var n = null == e ? 0 : e.length;
                  if (!n) return -1;
                  var s = n;
                  return (
                    i !== r &&
                      (s = (s = oe(i)) < 0 ? t6(n + s, 0) : t3(s, n - 1)),
                    t == t
                      ? (function (e, t, r) {
                          for (var i = r + 1; i-- && e[i] !== t; );
                          return i;
                        })(e, t, s)
                      : tw(e, tI, s, !0)
                  );
                }),
                (rg.lowerCase = oN),
                (rg.lowerFirst = oT),
                (rg.lt = s9),
                (rg.lte = s4),
                (rg.max = function (e) {
                  return e && e.length ? rK(e, oV, r1) : r;
                }),
                (rg.maxBy = function (e, t) {
                  return e && e.length ? rK(e, nv(t, 2), r1) : r;
                }),
                (rg.mean = function (e) {
                  return tP(e, oV);
                }),
                (rg.meanBy = function (e, t) {
                  return tP(e, nv(t, 2));
                }),
                (rg.min = function (e) {
                  return e && e.length ? rK(e, oV, ir) : r;
                }),
                (rg.minBy = function (e, t) {
                  return e && e.length ? rK(e, nv(t, 2), ir) : r;
                }),
                (rg.stubArray = o1),
                (rg.stubFalse = o5),
                (rg.stubObject = function () {
                  return {};
                }),
                (rg.stubString = function () {
                  return "";
                }),
                (rg.stubTrue = function () {
                  return !0;
                }),
                (rg.multiply = o4),
                (rg.nth = function (e, t) {
                  return e && e.length ? ic(e, oe(t)) : r;
                }),
                (rg.noConflict = function () {
                  return e6._ === this && (e6._ = ez), this;
                }),
                (rg.noop = oW),
                (rg.now = sE),
                (rg.pad = function (e, t, r) {
                  e = on(e);
                  var i = (t = oe(t)) ? tK(e) : 0;
                  if (!t || i >= t) return e;
                  var n = (t - i) / 2;
                  return i7(tQ(n), r) + e + i7(tG(n), r);
                }),
                (rg.padEnd = function (e, t, r) {
                  e = on(e);
                  var i = (t = oe(t)) ? tK(e) : 0;
                  return t && i < t ? e + i7(t - i, r) : e;
                }),
                (rg.padStart = function (e, t, r) {
                  e = on(e);
                  var i = (t = oe(t)) ? tK(e) : 0;
                  return t && i < t ? i7(t - i, r) + e : e;
                }),
                (rg.parseInt = function (e, t, r) {
                  return (
                    r || null == t ? (t = 0) : t && (t = +t),
                    t9(on(e).replace(Q, ""), t || 0)
                  );
                }),
                (rg.random = function (e, t, i) {
                  if (
                    (i && "boolean" != typeof i && nO(e, t, i) && (t = i = r),
                    i === r &&
                      ("boolean" == typeof t
                        ? ((i = t), (t = r))
                        : "boolean" == typeof e && ((i = e), (e = r))),
                    e === r && t === r
                      ? ((e = 0), (t = 1))
                      : ((e = s8(e)),
                        t === r ? ((t = e), (e = 0)) : (t = s8(t))),
                    e > t)
                  ) {
                    var n = e;
                    (e = t), (t = n);
                  }
                  if (i || e % 1 || t % 1) {
                    var s = t4();
                    return t3(
                      e + s * (t - e + eX("1e-" + ((s + "").length - 1))),
                      t
                    );
                  }
                  return id(e, t);
                }),
                (rg.reduce = function (e, t, r) {
                  var i = sk(e) ? tg : tO,
                    n = arguments.length < 3;
                  return i(e, nv(t, 4), r, n, r$);
                }),
                (rg.reduceRight = function (e, t, r) {
                  var i = sk(e) ? tv : tO,
                    n = arguments.length < 3;
                  return i(e, nv(t, 4), r, n, rH);
                }),
                (rg.repeat = function (e, t, i) {
                  return (
                    (t = (i ? nO(e, t, i) : t === r) ? 1 : oe(t)), ig(on(e), t)
                  );
                }),
                (rg.replace = function () {
                  var e = arguments,
                    t = on(e[0]);
                  return e.length < 3 ? t : t.replace(e[1], e[2]);
                }),
                (rg.result = function (e, t, i) {
                  t = iM(t, e);
                  var n = -1,
                    s = t.length;
                  for (s || ((s = 1), (e = r)); ++n < s; ) {
                    var o = null == e ? r : e[nV(t[n])];
                    o === r && ((n = s), (o = i)), (e = sF(o) ? o.call(e) : o);
                  }
                  return e;
                }),
                (rg.round = o7),
                (rg.runInContext = e),
                (rg.sample = function (e) {
                  return (sk(e) ? rR : iy)(e);
                }),
                (rg.size = function (e) {
                  if (null == e) return 0;
                  if (sH(e)) return s6(e) ? tK(e) : e.length;
                  var t = nE(e);
                  return t == v || t == b ? e.size : it(e).length;
                }),
                (rg.snakeCase = oq),
                (rg.some = function (e, t, i) {
                  var n = sk(e) ? ty : iI;
                  return i && nO(e, t, i) && (t = r), n(e, nv(t, 3));
                }),
                (rg.sortedIndex = function (e, t) {
                  return iP(e, t);
                }),
                (rg.sortedIndexBy = function (e, t, r) {
                  return iS(e, t, nv(r, 2));
                }),
                (rg.sortedIndexOf = function (e, t) {
                  var r = null == e ? 0 : e.length;
                  if (r) {
                    var i = iP(e, t);
                    if (i < r && sD(e[i], t)) return i;
                  }
                  return -1;
                }),
                (rg.sortedLastIndex = function (e, t) {
                  return iP(e, t, !0);
                }),
                (rg.sortedLastIndexBy = function (e, t, r) {
                  return iS(e, t, nv(r, 2), !0);
                }),
                (rg.sortedLastIndexOf = function (e, t) {
                  if (null == e ? 0 : e.length) {
                    var r = iP(e, t, !0) - 1;
                    if (sD(e[r], t)) return r;
                  }
                  return -1;
                }),
                (rg.startCase = oj),
                (rg.startsWith = function (e, t, r) {
                  return (
                    (e = on(e)),
                    (r = null == r ? 0 : rD(oe(r), 0, e.length)),
                    (t = ix(t)),
                    e.slice(r, r + t.length) == t
                  );
                }),
                (rg.subtract = o8),
                (rg.sum = function (e) {
                  return e && e.length ? tx(e, oV) : 0;
                }),
                (rg.sumBy = function (e, t) {
                  return e && e.length ? tx(e, nv(t, 2)) : 0;
                }),
                (rg.template = function (e, t, i) {
                  var n = rg.templateSettings;
                  i && nO(e, t, i) && (t = r),
                    (e = on(e)),
                    (t = oa({}, t, n, no));
                  var s,
                    o,
                    a = oa({}, t.imports, n.imports, no),
                    c = oy(a),
                    h = tT(a, c),
                    l = 0,
                    u = t.interpolate || ef,
                    p = "__p += '",
                    f = eP(
                      (t.escape || ef).source +
                        "|" +
                        u.source +
                        "|" +
                        (u === B ? es : ef).source +
                        "|" +
                        (t.evaluate || ef).source +
                        "|$",
                      "g"
                    ),
                    d =
                      "//# sourceURL=" +
                      (eT.call(t, "sourceURL")
                        ? (t.sourceURL + "").replace(/\s/g, " ")
                        : "lodash.templateSources[" + ++eZ + "]") +
                      `
`;
                  e.replace(f, function (t, r, i, n, a, c) {
                    return (
                      i || (i = n),
                      (p += e.slice(l, c).replace(ed, tM)),
                      r &&
                        ((s = !0),
                        (p +=
                          `' +
__e(` +
                          r +
                          `) +
'`)),
                      a &&
                        ((o = !0),
                        (p +=
                          `';
` +
                          a +
                          `;
__p += '`)),
                      i &&
                        (p +=
                          `' +
((__t = (` +
                          i +
                          `)) == null ? '' : __t) +
'`),
                      (l = c + t.length),
                      t
                    );
                  }),
                    (p += `';
`);
                  var g = eT.call(t, "variable") && t.variable;
                  if (g) {
                    if (ei.test(g))
                      throw new ew(
                        "Invalid `variable` option passed into `_.template`"
                      );
                  } else
                    p =
                      `with (obj) {
` +
                      p +
                      `
}
`;
                  (p = (o ? p.replace(D, "") : p)
                    .replace(z, "$1")
                    .replace(M, "$1;")),
                    (p =
                      "function(" +
                      (g || "obj") +
                      `) {
` +
                      (g
                        ? ""
                        : `obj || (obj = {});
`) +
                      "var __t, __p = ''" +
                      (s ? ", __e = _.escape" : "") +
                      (o
                        ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                        : `;
`) +
                      p +
                      `return __p
}`);
                  var v = oM(function () {
                    return eb(c, d + "return " + p).apply(r, h);
                  });
                  if (((v.source = p), sJ(v))) throw v;
                  return v;
                }),
                (rg.times = function (e, t) {
                  if ((e = oe(e)) < 1 || e > 9007199254740991) return [];
                  var r = 4294967295,
                    i = t3(e, 4294967295);
                  (t = nv(t)), (e -= 4294967295);
                  for (var n = tC(i, t); ++r < e; ) t(r);
                  return n;
                }),
                (rg.toFinite = s8),
                (rg.toInteger = oe),
                (rg.toLength = ot),
                (rg.toLower = function (e) {
                  return on(e).toLowerCase();
                }),
                (rg.toNumber = or),
                (rg.toSafeInteger = function (e) {
                  return e
                    ? rD(oe(e), -9007199254740991, 9007199254740991)
                    : 0 === e
                    ? e
                    : 0;
                }),
                (rg.toString = on),
                (rg.toUpper = function (e) {
                  return on(e).toUpperCase();
                }),
                (rg.trim = function (e, t, i) {
                  if ((e = on(e)) && (i || t === r)) return tA(e);
                  if (!e || !(t = ix(t))) return e;
                  var n = tB(e),
                    s = tB(t),
                    o = tj(n, s),
                    a = tL(n, s) + 1;
                  return iU(n, o, a).join("");
                }),
                (rg.trimEnd = function (e, t, i) {
                  if ((e = on(e)) && (i || t === r))
                    return e.slice(0, tJ(e) + 1);
                  if (!e || !(t = ix(t))) return e;
                  var n = tB(e),
                    s = tL(n, tB(t)) + 1;
                  return iU(n, 0, s).join("");
                }),
                (rg.trimStart = function (e, t, i) {
                  if ((e = on(e)) && (i || t === r)) return e.replace(Q, "");
                  if (!e || !(t = ix(t))) return e;
                  var n = tB(e),
                    s = tj(n, tB(t));
                  return iU(n, s).join("");
                }),
                (rg.truncate = function (e, t) {
                  var i = 30,
                    n = "...";
                  if (sG(t)) {
                    var s = "separator" in t ? t.separator : s;
                    (i = "length" in t ? oe(t.length) : i),
                      (n = "omission" in t ? ix(t.omission) : n);
                  }
                  var o = (e = on(e)).length;
                  if (tU(e)) {
                    var a = tB(e);
                    o = a.length;
                  }
                  if (i >= o) return e;
                  var c = i - tK(n);
                  if (c < 1) return n;
                  var h = a ? iU(a, 0, c).join("") : e.slice(0, c);
                  if (s === r) return h + n;
                  if ((a && (c += h.length - c), s1(s))) {
                    if (e.slice(c).search(s)) {
                      var l,
                        u = h;
                      for (
                        s.global || (s = eP(s.source, on(eo.exec(s)) + "g")),
                          s.lastIndex = 0;
                        (l = s.exec(u));

                      )
                        var p = l.index;
                      h = h.slice(0, p === r ? c : p);
                    }
                  } else if (e.indexOf(ix(s), c) != c) {
                    var f = h.lastIndexOf(s);
                    f > -1 && (h = h.slice(0, f));
                  }
                  return h + n;
                }),
                (rg.unescape = function (e) {
                  return (e = on(e)) && $.test(e) ? e.replace(U, tF) : e;
                }),
                (rg.uniqueId = function (e) {
                  var t = ++eq;
                  return on(e) + t;
                }),
                (rg.upperCase = oL),
                (rg.upperFirst = oD),
                (rg.each = sd),
                (rg.eachRight = sg),
                (rg.first = nY),
                oF(
                  rg,
                  ((ey = {}),
                  rZ(rg, function (e, t) {
                    eT.call(rg.prototype, t) || (ey[t] = e);
                  }),
                  ey),
                  { chain: !1 }
                ),
                (rg.VERSION = "4.17.21"),
                ta(
                  [
                    "bind",
                    "bindKey",
                    "curry",
                    "curryRight",
                    "partial",
                    "partialRight",
                  ],
                  function (e) {
                    rg[e].placeholder = rg;
                  }
                ),
                ta(["drop", "take"], function (e, t) {
                  (r_.prototype[e] = function (i) {
                    i = i === r ? 1 : t6(oe(i), 0);
                    var n =
                      this.__filtered__ && !t ? new r_(this) : this.clone();
                    return (
                      n.__filtered__
                        ? (n.__takeCount__ = t3(i, n.__takeCount__))
                        : n.__views__.push({
                            size: t3(i, 4294967295),
                            type: e + (n.__dir__ < 0 ? "Right" : ""),
                          }),
                      n
                    );
                  }),
                    (r_.prototype[e + "Right"] = function (t) {
                      return this.reverse()[e](t).reverse();
                    });
                }),
                ta(["filter", "map", "takeWhile"], function (e, t) {
                  var r = t + 1,
                    i = 1 == r || 3 == r;
                  r_.prototype[e] = function (e) {
                    var t = this.clone();
                    return (
                      t.__iteratees__.push({ iteratee: nv(e, 3), type: r }),
                      (t.__filtered__ = t.__filtered__ || i),
                      t
                    );
                  };
                }),
                ta(["head", "last"], function (e, t) {
                  var r = "take" + (t ? "Right" : "");
                  r_.prototype[e] = function () {
                    return this[r](1).value()[0];
                  };
                }),
                ta(["initial", "tail"], function (e, t) {
                  var r = "drop" + (t ? "" : "Right");
                  r_.prototype[e] = function () {
                    return this.__filtered__ ? new r_(this) : this[r](1);
                  };
                }),
                (r_.prototype.compact = function () {
                  return this.filter(oV);
                }),
                (r_.prototype.find = function (e) {
                  return this.filter(e).head();
                }),
                (r_.prototype.findLast = function (e) {
                  return this.reverse().find(e);
                }),
                (r_.prototype.invokeMap = iv(function (e, t) {
                  return "function" == typeof e
                    ? new r_(this)
                    : this.map(function (r) {
                        return r2(r, e, t);
                      });
                })),
                (r_.prototype.reject = function (e) {
                  return this.filter(sN(nv(e)));
                }),
                (r_.prototype.slice = function (e, t) {
                  e = oe(e);
                  var i = this;
                  return i.__filtered__ && (e > 0 || t < 0)
                    ? new r_(i)
                    : (e < 0 ? (i = i.takeRight(-e)) : e && (i = i.drop(e)),
                      t !== r &&
                        (i = (t = oe(t)) < 0 ? i.dropRight(-t) : i.take(t - e)),
                      i);
                }),
                (r_.prototype.takeRightWhile = function (e) {
                  return this.reverse().takeWhile(e).reverse();
                }),
                (r_.prototype.toArray = function () {
                  return this.take(4294967295);
                }),
                rZ(r_.prototype, function (e, t) {
                  var i = /^(?:filter|find|map|reject)|While$/.test(t),
                    n = /^(?:head|last)$/.test(t),
                    s = rg[n ? "take" + ("last" == t ? "Right" : "") : t],
                    o = n || /^find/.test(t);
                  s &&
                    (rg.prototype[t] = function () {
                      var t = this.__wrapped__,
                        a = n ? [1] : arguments,
                        c = t instanceof r_,
                        h = a[0],
                        l = c || sk(t),
                        u = function (e) {
                          var t = s.apply(rg, td([e], a));
                          return n && p ? t[0] : t;
                        };
                      l &&
                        i &&
                        "function" == typeof h &&
                        1 != h.length &&
                        (c = l = !1);
                      var p = this.__chain__,
                        f = !!this.__actions__.length,
                        d = o && !p,
                        g = c && !f;
                      if (!o && l) {
                        t = g ? t : new r_(this);
                        var v = e.apply(t, a);
                        return (
                          v.__actions__.push({
                            func: sh,
                            args: [u],
                            thisArg: r,
                          }),
                          new rm(v, p)
                        );
                      }
                      return d && g
                        ? e.apply(this, a)
                        : ((v = this.thru(u)),
                          d ? (n ? v.value()[0] : v.value()) : v);
                    });
                }),
                ta(
                  ["pop", "push", "shift", "sort", "splice", "unshift"],
                  function (e) {
                    var t = eO[e],
                      r = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                      i = /^(?:pop|shift)$/.test(e);
                    rg.prototype[e] = function () {
                      var e = arguments;
                      if (i && !this.__chain__) {
                        var n = this.value();
                        return t.apply(sk(n) ? n : [], e);
                      }
                      return this[r](function (r) {
                        return t.apply(sk(r) ? r : [], e);
                      });
                    };
                  }
                ),
                rZ(r_.prototype, function (e, t) {
                  var r = rg[t];
                  if (r) {
                    var i = r.name + "";
                    eT.call(ro, i) || (ro[i] = []),
                      ro[i].push({ name: t, func: r });
                  }
                }),
                (ro[i3(r, 2).name] = [{ name: "wrapper", func: r }]),
                (r_.prototype.clone = function () {
                  var e = new r_(this.__wrapped__);
                  return (
                    (e.__actions__ = iF(this.__actions__)),
                    (e.__dir__ = this.__dir__),
                    (e.__filtered__ = this.__filtered__),
                    (e.__iteratees__ = iF(this.__iteratees__)),
                    (e.__takeCount__ = this.__takeCount__),
                    (e.__views__ = iF(this.__views__)),
                    e
                  );
                }),
                (r_.prototype.reverse = function () {
                  if (this.__filtered__) {
                    var e = new r_(this);
                    (e.__dir__ = -1), (e.__filtered__ = !0);
                  } else (e = this.clone()), (e.__dir__ *= -1);
                  return e;
                }),
                (r_.prototype.value = function () {
                  var e = this.__wrapped__.value(),
                    t = this.__dir__,
                    r = sk(e),
                    i = t < 0,
                    n = r ? e.length : 0,
                    s = (function (e, t, r) {
                      for (var i = -1, n = r.length; ++i < n; ) {
                        var s = r[i],
                          o = s.size;
                        switch (s.type) {
                          case "drop":
                            e += o;
                            break;
                          case "dropRight":
                            t -= o;
                            break;
                          case "take":
                            t = t3(t, e + o);
                            break;
                          case "takeRight":
                            e = t6(e, t - o);
                        }
                      }
                      return { start: e, end: t };
                    })(0, n, this.__views__),
                    o = s.start,
                    a = s.end,
                    c = a - o,
                    h = i ? a : o - 1,
                    l = this.__iteratees__,
                    u = l.length,
                    p = 0,
                    f = t3(c, this.__takeCount__);
                  if (!r || (!i && n == c && f == c))
                    return iq(e, this.__actions__);
                  var d = [];
                  e: for (; c-- && p < f; ) {
                    h += t;
                    for (var g = -1, v = e[h]; ++g < u; ) {
                      var y = l[g],
                        m = y.iteratee,
                        _ = y.type,
                        w = m(v);
                      if (2 == _) v = w;
                      else if (!w) {
                        if (1 == _) continue e;
                        break e;
                      }
                    }
                    d[p++] = v;
                  }
                  return d;
                }),
                (rg.prototype.at = sl),
                (rg.prototype.chain = function () {
                  return sc(this);
                }),
                (rg.prototype.commit = function () {
                  return new rm(this.value(), this.__chain__);
                }),
                (rg.prototype.next = function () {
                  this.__values__ === r && (this.__values__ = s7(this.value()));
                  var e = this.__index__ >= this.__values__.length,
                    t = e ? r : this.__values__[this.__index__++];
                  return { done: e, value: t };
                }),
                (rg.prototype.plant = function (e) {
                  for (var t, i = this; i instanceof ry; ) {
                    var n = nB(i);
                    (n.__index__ = 0),
                      (n.__values__ = r),
                      t ? (s.__wrapped__ = n) : (t = n);
                    var s = n;
                    i = i.__wrapped__;
                  }
                  return (s.__wrapped__ = e), t;
                }),
                (rg.prototype.reverse = function () {
                  var e = this.__wrapped__;
                  if (e instanceof r_) {
                    var t = e;
                    return (
                      this.__actions__.length && (t = new r_(this)),
                      (t = t.reverse()).__actions__.push({
                        func: sh,
                        args: [n9],
                        thisArg: r,
                      }),
                      new rm(t, this.__chain__)
                    );
                  }
                  return this.thru(n9);
                }),
                (rg.prototype.toJSON =
                  rg.prototype.valueOf =
                  rg.prototype.value =
                    function () {
                      return iq(this.__wrapped__, this.__actions__);
                    }),
                (rg.prototype.first = rg.prototype.head),
                e2 &&
                  (rg.prototype[e2] = function () {
                    return this;
                  }),
                rg
              );
            })();
          e2 ? (((e2.exports = tW)._ = tW), (e3._ = tW)) : (e6._ = tW);
        }).call(rx);
      })(rC, rC.exports);
      var rA = Object.defineProperty,
        rN = Object.defineProperties,
        rT = Object.getOwnPropertyDescriptors,
        rq = Object.getOwnPropertySymbols,
        rj = Object.prototype.hasOwnProperty,
        rL = Object.prototype.propertyIsEnumerable,
        rD = (e, t, r) =>
          t in e
            ? rA(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        rz = (e, t) => {
          for (var r in t || (t = {})) rj.call(t, r) && rD(e, r, t[r]);
          if (rq) for (var r of rq(t)) rL.call(t, r) && rD(e, r, t[r]);
          return e;
        },
        rM = (e, t) => rN(e, rT(t));
      function rU(e, t, r) {
        var i;
        let n = (0, s.DQ)(e);
        return (
          (null == (i = t.rpcMap) ? void 0 : i[n.reference]) ||
          `https://rpc.walletconnect.com/v1/?chainId=${n.namespace}:${n.reference}&projectId=${r}`
        );
      }
      function rk(e) {
        return e.includes(":") ? e.split(":")[1] : e;
      }
      function r$(e) {
        return e.map((e) => `${e.split(":")[0]}:${e.split(":")[1]}`);
      }
      function rH(e) {
        var t, r, i, n;
        let o = {};
        if (!(0, s.L5)(e)) return o;
        for (let [a, c] of Object.entries(e)) {
          let e = (0, s.gp)(a) ? [a] : c.chains,
            h = c.methods || [],
            l = c.events || [],
            u = c.rpcMap || {},
            p = (0, s.M)(a);
          o[p] = rM(rz(rz({}, o[p]), c), {
            chains: (0, s.eG)(e, null == (t = o[p]) ? void 0 : t.chains),
            methods: (0, s.eG)(h, null == (r = o[p]) ? void 0 : r.methods),
            events: (0, s.eG)(l, null == (i = o[p]) ? void 0 : i.events),
            rpcMap: rz(rz({}, u), null == (n = o[p]) ? void 0 : n.rpcMap),
          });
        }
        return o;
      }
      function rV(e) {
        return e.includes(":") ? e.split(":")[2] : e;
      }
      function rK(e) {
        return "number" == typeof e
          ? e
          : e.includes("0x")
          ? parseInt(e, 16)
          : e.includes(":")
          ? Number(e.split(":")[1])
          : Number(e);
      }
      let rB = {},
        rJ = (e) => rB[e],
        rF = (e, t) => {
          rB[e] = t;
        };
      class rW {
        constructor(e) {
          (this.name = "polkadot"),
            (this.namespace = e.namespace),
            (this.events = rJ("events")),
            (this.client = rJ("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(rO.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return (
            (e &&
              e
                .filter((e) => e.split(":")[1] === this.chainId.toString())
                .map((e) => e.split(":")[2])) ||
            []
          );
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              let i = rk(t);
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || rU(e, this.namespace, this.client.core.projectId);
          if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
          return new z.r(new rP.Z(r, rJ("disableProviderPing")));
        }
      }
      class rZ {
        constructor(e) {
          (this.name = "eip155"),
            (this.namespace = e.namespace),
            (this.events = rJ("events")),
            (this.client = rJ("client")),
            (this.httpProviders = this.createHttpProviders()),
            (this.chainId = parseInt(this.getDefaultChain()));
        }
        async request(e) {
          switch (e.request.method) {
            case "eth_requestAccounts":
            case "eth_accounts":
              return this.getAccounts();
            case "wallet_switchEthereumChain":
              return await this.handleSwitchChain(e);
            case "eth_chainId":
              return parseInt(this.getDefaultChain());
          }
          return this.namespace.methods.includes(e.request.method)
            ? await this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(parseInt(e), t),
            (this.chainId = parseInt(e)),
            this.events.emit(rO.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId.toString();
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        createHttpProvider(e, t) {
          let r =
            t ||
            rU(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
          if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
          return new z.r(new rP.k(r, rJ("disableProviderPing")));
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              let i = parseInt(rk(t));
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        getHttpProvider() {
          let e = this.chainId,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        async handleSwitchChain(e) {
          var t, r;
          let i = e.request.params
            ? null == (t = e.request.params[0])
              ? void 0
              : t.chainId
            : "0x0";
          i = i.startsWith("0x") ? i : `0x${i}`;
          let n = parseInt(i, 16);
          if (this.isChainApproved(n)) this.setDefaultChain(`${n}`);
          else if (
            this.namespace.methods.includes("wallet_switchEthereumChain")
          )
            await this.client.request({
              topic: e.topic,
              request: { method: e.request.method, params: [{ chainId: i }] },
              chainId: null == (r = this.namespace.chains) ? void 0 : r[0],
            }),
              this.setDefaultChain(`${n}`);
          else
            throw Error(
              `Failed to switch to chain 'eip155:${n}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`
            );
          return null;
        }
        isChainApproved(e) {
          return this.namespace.chains.includes(`${this.name}:${e}`);
        }
      }
      class rG {
        constructor(e) {
          (this.name = "solana"),
            (this.namespace = e.namespace),
            (this.events = rJ("events")),
            (this.client = rJ("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(rO.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              let i = rk(t);
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || rU(e, this.namespace, this.client.core.projectId);
          if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
          return new z.r(new rP.Z(r, rJ("disableProviderPing")));
        }
      }
      class rQ {
        constructor(e) {
          (this.name = "cosmos"),
            (this.namespace = e.namespace),
            (this.events = rJ("events")),
            (this.client = rJ("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(
              rO.DEFAULT_CHAIN_CHANGED,
              `${this.name}:${this.chainId}`
            );
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              let i = rk(t);
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || rU(e, this.namespace, this.client.core.projectId);
          if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
          return new z.r(new rP.Z(r, rJ("disableProviderPing")));
        }
      }
      class rY {
        constructor(e) {
          (this.name = "cip34"),
            (this.namespace = e.namespace),
            (this.events = rJ("events")),
            (this.client = rJ("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(
              rO.DEFAULT_CHAIN_CHANGED,
              `${this.name}:${this.chainId}`
            );
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              let r = this.getCardanoRPCUrl(t),
                i = rk(t);
              e[i] = this.createHttpProvider(i, r);
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        getCardanoRPCUrl(e) {
          let t = this.namespace.rpcMap;
          if (t) return t[e];
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || this.getCardanoRPCUrl(e);
          if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
          return new z.r(new rP.Z(r, rJ("disableProviderPing")));
        }
      }
      class rX {
        constructor(e) {
          (this.name = "elrond"),
            (this.namespace = e.namespace),
            (this.events = rJ("events")),
            (this.client = rJ("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(rO.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              let i = rk(t);
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || rU(e, this.namespace, this.client.core.projectId);
          if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
          return new z.r(new rP.Z(r, rJ("disableProviderPing")));
        }
      }
      class r0 {
        constructor(e) {
          (this.name = "multiversx"),
            (this.namespace = e.namespace),
            (this.events = rJ("events")),
            (this.client = rJ("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(rO.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              let i = rk(t);
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || rU(e, this.namespace, this.client.core.projectId);
          if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
          return new z.r(new rP.Z(r, rJ("disableProviderPing")));
        }
      }
      var r1 = Object.defineProperty,
        r5 = Object.defineProperties,
        r6 = Object.getOwnPropertyDescriptors,
        r3 = Object.getOwnPropertySymbols,
        r2 = Object.prototype.hasOwnProperty,
        r9 = Object.prototype.propertyIsEnumerable,
        r4 = (e, t, r) =>
          t in e
            ? r1(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        r7 = (e, t) => {
          for (var r in t || (t = {})) r2.call(t, r) && r4(e, r, t[r]);
          if (r3) for (var r of r3(t)) r9.call(t, r) && r4(e, r, t[r]);
          return e;
        },
        r8 = (e, t) => r5(e, r6(t));
      class ie {
        constructor(e) {
          (this.events = new (n())()),
            (this.rpcProviders = {}),
            (this.shouldAbortPairingAttempt = !1),
            (this.maxPairingAttempts = 10),
            (this.disableProviderPing = !1),
            (this.providerOpts = e),
            (this.logger =
              "u" > typeof e?.logger && "string" != typeof e?.logger
                ? e.logger
                : (0, c.pino)(
                    (0, c.getDefaultLoggerOptions)({ level: e?.logger || rS })
                  )),
            (this.disableProviderPing = e?.disableProviderPing || !1);
        }
        static async init(e) {
          let t = new ie(e);
          return await t.initialize(), t;
        }
        async request(e, t) {
          let [r, i] = this.validateChain(t);
          if (!this.session)
            throw Error("Please call connect() before request()");
          return await this.getProvider(r).request({
            request: r7({}, e),
            chainId: `${r}:${i}`,
            topic: this.session.topic,
          });
        }
        sendAsync(e, t, r) {
          this.request(e, r)
            .then((e) => t(null, e))
            .catch((e) => t(e, void 0));
        }
        async enable() {
          if (!this.client) throw Error("Sign Client not initialized");
          return (
            this.session ||
              (await this.connect({
                namespaces: this.namespaces,
                optionalNamespaces: this.optionalNamespaces,
                sessionProperties: this.sessionProperties,
              })),
            await this.requestAccounts()
          );
        }
        async disconnect() {
          var e;
          if (!this.session)
            throw Error("Please call connect() before enable()");
          await this.client.disconnect({
            topic: null == (e = this.session) ? void 0 : e.topic,
            reason: (0, s.D6)("USER_DISCONNECTED"),
          }),
            await this.cleanup();
        }
        async connect(e) {
          if (!this.client) throw Error("Sign Client not initialized");
          if (
            (this.setNamespaces(e),
            await this.cleanupPendingPairings(),
            !e.skipPairing)
          )
            return await this.pair(e.pairingTopic);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        get isWalletConnect() {
          return !0;
        }
        async pair(e) {
          this.shouldAbortPairingAttempt = !1;
          let t = 0;
          do {
            if (this.shouldAbortPairingAttempt) throw Error("Pairing aborted");
            if (t >= this.maxPairingAttempts)
              throw Error("Max auto pairing attempts reached");
            let { uri: r, approval: i } = await this.client.connect({
              pairingTopic: e,
              requiredNamespaces: this.namespaces,
              optionalNamespaces: this.optionalNamespaces,
              sessionProperties: this.sessionProperties,
            });
            r && ((this.uri = r), this.events.emit("display_uri", r)),
              await i()
                .then((e) => {
                  (this.session = e),
                    this.namespaces ||
                      ((this.namespaces = (function (e) {
                        let t = {};
                        for (let [r, i] of Object.entries(e)) {
                          let e = i.methods || [],
                            n = i.events || [],
                            o = i.accounts || [],
                            a = (0, s.gp)(r)
                              ? [r]
                              : i.chains
                              ? i.chains
                              : r$(i.accounts);
                          t[r] = {
                            chains: a,
                            methods: e,
                            events: n,
                            accounts: o,
                          };
                        }
                        return t;
                      })(e.namespaces)),
                      this.persist("namespaces", this.namespaces));
                })
                .catch((e) => {
                  if (e.message !== rn) throw e;
                  t++;
                });
          } while (!this.session);
          return this.onConnect(), this.session;
        }
        setDefaultChain(e, t) {
          try {
            if (!this.session) return;
            let [r, i] = this.validateChain(e);
            this.getProvider(r).setDefaultChain(i, t);
          } catch (e) {
            if (!/Please call connect/.test(e.message)) throw e;
          }
        }
        async cleanupPendingPairings(e = {}) {
          this.logger.info("Cleaning up inactive pairings...");
          let t = this.client.pairing.getAll();
          if ((0, s.qt)(t)) {
            for (let r of t)
              e.deletePairings
                ? this.client.core.expirer.set(r.topic, 0)
                : await this.client.core.relayer.subscriber.unsubscribe(
                    r.topic
                  );
            this.logger.info(`Inactive pairings cleared: ${t.length}`);
          }
        }
        abortPairingAttempt() {
          this.shouldAbortPairingAttempt = !0;
        }
        async checkStorage() {
          if (
            ((this.namespaces = await this.getFromStore("namespaces")),
            (this.optionalNamespaces =
              (await this.getFromStore("optionalNamespaces")) || {}),
            this.client.session.length)
          ) {
            let e = this.client.session.keys.length - 1;
            (this.session = this.client.session.get(
              this.client.session.keys[e]
            )),
              this.createProviders();
          }
        }
        async initialize() {
          this.logger.trace("Initialized"),
            await this.createClient(),
            await this.checkStorage(),
            this.registerEventListeners();
        }
        async createClient() {
          (this.client =
            this.providerOpts.client ||
            (await rI.init({
              logger: this.providerOpts.logger || rS,
              relayUrl:
                this.providerOpts.relayUrl || "wss://relay.walletconnect.com",
              projectId: this.providerOpts.projectId,
              metadata: this.providerOpts.metadata,
              storageOptions: this.providerOpts.storageOptions,
              storage: this.providerOpts.storage,
              name: this.providerOpts.name,
            }))),
            this.logger.trace("SignClient Initialized");
        }
        createProviders() {
          if (!this.client) throw Error("Sign Client not initialized");
          if (!this.session)
            throw Error(
              "Session not initialized. Please call connect() before enable()"
            );
          let e = [
            ...new Set(
              Object.keys(this.session.namespaces).map((e) => (0, s.M)(e))
            ),
          ];
          rF("client", this.client),
            rF("events", this.events),
            rF("disableProviderPing", this.disableProviderPing),
            e.forEach((e) => {
              if (!this.session) return;
              let t = (function (e, t) {
                  let r = Object.keys(t.namespaces).filter((t) =>
                    t.includes(e)
                  );
                  if (!r.length) return [];
                  let i = [];
                  return (
                    r.forEach((e) => {
                      let r = t.namespaces[e].accounts;
                      i.push(...r);
                    }),
                    i
                  );
                })(e, this.session),
                r = r$(t),
                i = (function (e = {}, t = {}) {
                  let r = rH(e),
                    i = rH(t);
                  return rC.exports.merge(r, i);
                })(this.namespaces, this.optionalNamespaces),
                n = r8(r7({}, i[e]), { accounts: t, chains: r });
              switch (e) {
                case "eip155":
                  this.rpcProviders[e] = new rZ({ namespace: n });
                  break;
                case "solana":
                  this.rpcProviders[e] = new rG({ namespace: n });
                  break;
                case "cosmos":
                  this.rpcProviders[e] = new rQ({ namespace: n });
                  break;
                case "polkadot":
                  this.rpcProviders[e] = new rW({ namespace: n });
                  break;
                case "cip34":
                  this.rpcProviders[e] = new rY({ namespace: n });
                  break;
                case "elrond":
                  this.rpcProviders[e] = new rX({ namespace: n });
                  break;
                case "multiversx":
                  this.rpcProviders[e] = new r0({ namespace: n });
              }
            });
        }
        registerEventListeners() {
          if (typeof this.client > "u")
            throw Error("Sign Client is not initialized");
          this.client.on("session_ping", (e) => {
            this.events.emit("session_ping", e);
          }),
            this.client.on("session_event", (e) => {
              let { params: t } = e,
                { event: r } = t;
              if ("accountsChanged" === r.name) {
                let e = r.data;
                e &&
                  (0, s.qt)(e) &&
                  this.events.emit("accountsChanged", e.map(rV));
              } else if ("chainChanged" === r.name) {
                let e = t.chainId,
                  r = t.event.data,
                  i = (0, s.M)(e),
                  n = rK(e) !== rK(r) ? `${i}:${rK(r)}` : e;
                this.onChainChanged(n);
              } else this.events.emit(r.name, r.data);
              this.events.emit("session_event", e);
            }),
            this.client.on("session_update", ({ topic: e, params: t }) => {
              var r;
              let { namespaces: i } = t,
                n = null == (r = this.client) ? void 0 : r.session.get(e);
              (this.session = r8(r7({}, n), { namespaces: i })),
                this.onSessionUpdate(),
                this.events.emit("session_update", { topic: e, params: t });
            }),
            this.client.on("session_delete", async (e) => {
              await this.cleanup(),
                this.events.emit("session_delete", e),
                this.events.emit(
                  "disconnect",
                  r8(r7({}, (0, s.D6)("USER_DISCONNECTED")), { data: e.topic })
                );
            }),
            this.on(rO.DEFAULT_CHAIN_CHANGED, (e) => {
              this.onChainChanged(e, !0);
            });
        }
        getProvider(e) {
          if (!this.rpcProviders[e]) throw Error(`Provider not found: ${e}`);
          return this.rpcProviders[e];
        }
        onSessionUpdate() {
          Object.keys(this.rpcProviders).forEach((e) => {
            var t;
            this.getProvider(e).updateNamespace(
              null == (t = this.session) ? void 0 : t.namespaces[e]
            );
          });
        }
        setNamespaces(e) {
          let {
            namespaces: t,
            optionalNamespaces: r,
            sessionProperties: i,
          } = e;
          t && Object.keys(t).length && (this.namespaces = t),
            r && Object.keys(r).length && (this.optionalNamespaces = r),
            (this.sessionProperties = i),
            this.persist("namespaces", t),
            this.persist("optionalNamespaces", r);
        }
        validateChain(e) {
          let [t, r] = e?.split(":") || ["", ""];
          if (!this.namespaces || !Object.keys(this.namespaces).length)
            return [t, r];
          if (
            t &&
            !Object.keys(this.namespaces || {})
              .map((e) => (0, s.M)(e))
              .includes(t)
          )
            throw Error(
              `Namespace '${t}' is not configured. Please call connect() first with namespace config.`
            );
          if (t && r) return [t, r];
          let i = (0, s.M)(Object.keys(this.namespaces)[0]),
            n = this.rpcProviders[i].getDefaultChain();
          return [i, n];
        }
        async requestAccounts() {
          let [e] = this.validateChain();
          return await this.getProvider(e).requestAccounts();
        }
        onChainChanged(e, t = !1) {
          var r;
          if (!this.namespaces) return;
          let [i, n] = this.validateChain(e);
          t || this.getProvider(i).setDefaultChain(n),
            ((null != (r = this.namespaces[i])
              ? r
              : this.namespaces[`${i}:${n}`]
            ).defaultChain = n),
            this.persist("namespaces", this.namespaces),
            this.events.emit("chainChanged", n);
        }
        onConnect() {
          this.createProviders(),
            this.events.emit("connect", { session: this.session });
        }
        async cleanup() {
          (this.session = void 0),
            (this.namespaces = void 0),
            (this.optionalNamespaces = void 0),
            (this.sessionProperties = void 0),
            this.persist("namespaces", void 0),
            this.persist("optionalNamespaces", void 0),
            this.persist("sessionProperties", void 0),
            await this.cleanupPendingPairings({ deletePairings: !0 });
        }
        persist(e, t) {
          this.client.core.storage.setItem(`${rR}/${e}`, t);
        }
        async getFromStore(e) {
          return await this.client.core.storage.getItem(`${rR}/${e}`);
        }
      }
      let it = ["eth_sendTransaction", "personal_sign"],
        ir = [
          "eth_accounts",
          "eth_requestAccounts",
          "eth_sendRawTransaction",
          "eth_sign",
          "eth_signTransaction",
          "eth_signTypedData",
          "eth_signTypedData_v3",
          "eth_signTypedData_v4",
          "eth_sendTransaction",
          "personal_sign",
          "wallet_switchEthereumChain",
          "wallet_addEthereumChain",
          "wallet_getPermissions",
          "wallet_requestPermissions",
          "wallet_registerOnboarding",
          "wallet_watchAsset",
          "wallet_scanQRCode",
        ],
        ii = ["chainChanged", "accountsChanged"],
        is = [
          "chainChanged",
          "accountsChanged",
          "message",
          "disconnect",
          "connect",
        ];
      var io = Object.defineProperty,
        ia = Object.defineProperties,
        ic = Object.getOwnPropertyDescriptors,
        ih = Object.getOwnPropertySymbols,
        il = Object.prototype.hasOwnProperty,
        iu = Object.prototype.propertyIsEnumerable,
        ip = (e, t, r) =>
          t in e
            ? io(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        id = (e, t) => {
          for (var r in t || (t = {})) il.call(t, r) && ip(e, r, t[r]);
          if (ih) for (var r of ih(t)) iu.call(t, r) && ip(e, r, t[r]);
          return e;
        },
        ig = (e, t) => ia(e, ic(t));
      function iv(e) {
        return Number(e[0].split(":")[1]);
      }
      function iy(e) {
        return `0x${e.toString(16)}`;
      }
      class im {
        constructor() {
          (this.events = new i.EventEmitter()),
            (this.namespace = "eip155"),
            (this.accounts = []),
            (this.chainId = 1),
            (this.STORAGE_KEY = "wc@2:ethereum_provider:"),
            (this.on = (e, t) => (this.events.on(e, t), this)),
            (this.once = (e, t) => (this.events.once(e, t), this)),
            (this.removeListener = (e, t) => (
              this.events.removeListener(e, t), this
            )),
            (this.off = (e, t) => (this.events.off(e, t), this)),
            (this.parseAccount = (e) =>
              this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e),
            (this.signer = {}),
            (this.rpc = {});
        }
        static async init(e) {
          let t = new im();
          return await t.initialize(e), t;
        }
        async request(e) {
          return await this.signer.request(e, this.formatChainId(this.chainId));
        }
        sendAsync(e, t) {
          this.signer.sendAsync(e, t, this.formatChainId(this.chainId));
        }
        get connected() {
          return (
            !!this.signer.client && this.signer.client.core.relayer.connected
          );
        }
        get connecting() {
          return (
            !!this.signer.client && this.signer.client.core.relayer.connecting
          );
        }
        async enable() {
          return (
            this.session || (await this.connect()),
            await this.request({ method: "eth_requestAccounts" })
          );
        }
        async connect(e) {
          if (!this.signer.client)
            throw Error("Provider not initialized. Call init() first");
          this.loadConnectOpts(e);
          let { required: t, optional: r } = (function (e) {
            let {
              chains: t,
              optionalChains: r,
              methods: i,
              optionalMethods: n,
              events: o,
              optionalEvents: a,
              rpcMap: c,
            } = e;
            if (!(0, s.qt)(t)) throw Error("Invalid chains");
            let h = {
                chains: t,
                methods: i || it,
                events: o || ii,
                rpcMap: id({}, t.length ? { [iv(t)]: c[iv(t)] } : {}),
              },
              l = o?.filter((e) => !ii.includes(e)),
              u = i?.filter((e) => !it.includes(e));
            if (
              !r &&
              !a &&
              !n &&
              !(null != l && l.length) &&
              !(null != u && u.length)
            )
              return { required: t.length ? h : void 0 };
            let p = (l?.length && u?.length) || !r,
              f = {
                chains: [...new Set(p ? h.chains.concat(r || []) : r)],
                methods: [
                  ...new Set(h.methods.concat(null != n && n.length ? n : ir)),
                ],
                events: [
                  ...new Set(h.events.concat(null != a && a.length ? a : is)),
                ],
                rpcMap: c,
              };
            return {
              required: t.length ? h : void 0,
              optional: r.length ? f : void 0,
            };
          })(this.rpc);
          try {
            let i = await new Promise(async (i, n) => {
              var s;
              this.rpc.showQrModal &&
                (null == (s = this.modal) ||
                  s.subscribeModal((e) => {
                    e.open ||
                      this.signer.session ||
                      (this.signer.abortPairingAttempt(),
                      n(Error("Connection request reset. Please try again.")));
                  })),
                await this.signer
                  .connect(
                    ig(
                      id(
                        { namespaces: id({}, t && { [this.namespace]: t }) },
                        r && { optionalNamespaces: { [this.namespace]: r } }
                      ),
                      { pairingTopic: e?.pairingTopic }
                    )
                  )
                  .then((e) => {
                    i(e);
                  })
                  .catch((e) => {
                    n(Error(e.message));
                  });
            });
            if (!i) return;
            let n = (0, s.gu)(i.namespaces, [this.namespace]);
            this.setChainIds(this.rpc.chains.length ? this.rpc.chains : n),
              this.setAccounts(n),
              this.events.emit("connect", { chainId: iy(this.chainId) });
          } catch (e) {
            throw (this.signer.logger.error(e), e);
          } finally {
            this.modal && this.modal.closeModal();
          }
        }
        async disconnect() {
          this.session && (await this.signer.disconnect()), this.reset();
        }
        get isWalletConnect() {
          return !0;
        }
        get session() {
          return this.signer.session;
        }
        registerEventListeners() {
          this.signer.on("session_event", (e) => {
            let { params: t } = e,
              { event: r } = t;
            "accountsChanged" === r.name
              ? ((this.accounts = this.parseAccounts(r.data)),
                this.events.emit("accountsChanged", this.accounts))
              : "chainChanged" === r.name
              ? this.setChainId(this.formatChainId(r.data))
              : this.events.emit(r.name, r.data),
              this.events.emit("session_event", e);
          }),
            this.signer.on("chainChanged", (e) => {
              let t = parseInt(e);
              (this.chainId = t),
                this.events.emit("chainChanged", iy(this.chainId)),
                this.persist();
            }),
            this.signer.on("session_update", (e) => {
              this.events.emit("session_update", e);
            }),
            this.signer.on("session_delete", (e) => {
              this.reset(),
                this.events.emit("session_delete", e),
                this.events.emit(
                  "disconnect",
                  ig(id({}, (0, s.D6)("USER_DISCONNECTED")), {
                    data: e.topic,
                    name: "USER_DISCONNECTED",
                  })
                );
            }),
            this.signer.on("display_uri", (e) => {
              var t, r;
              this.rpc.showQrModal &&
                (null == (t = this.modal) || t.closeModal(),
                null == (r = this.modal) || r.openModal({ uri: e })),
                this.events.emit("display_uri", e);
            });
        }
        switchEthereumChain(e) {
          this.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: e.toString(16) }],
          });
        }
        isCompatibleChainId(e) {
          return "string" == typeof e && e.startsWith(`${this.namespace}:`);
        }
        formatChainId(e) {
          return `${this.namespace}:${e}`;
        }
        parseChainId(e) {
          return Number(e.split(":")[1]);
        }
        setChainIds(e) {
          let t = e
            .filter((e) => this.isCompatibleChainId(e))
            .map((e) => this.parseChainId(e));
          t.length &&
            ((this.chainId = t[0]),
            this.events.emit("chainChanged", iy(this.chainId)),
            this.persist());
        }
        setChainId(e) {
          if (this.isCompatibleChainId(e)) {
            let t = this.parseChainId(e);
            (this.chainId = t), this.switchEthereumChain(t);
          }
        }
        parseAccountId(e) {
          let [t, r, i] = e.split(":");
          return { chainId: `${t}:${r}`, address: i };
        }
        setAccounts(e) {
          (this.accounts = e
            .filter(
              (e) =>
                this.parseChainId(this.parseAccountId(e).chainId) ===
                this.chainId
            )
            .map((e) => this.parseAccountId(e).address)),
            this.events.emit("accountsChanged", this.accounts);
        }
        getRpcConfig(e) {
          var t, r;
          let i = null != (t = e?.chains) ? t : [],
            n = null != (r = e?.optionalChains) ? r : [],
            s = i.concat(n);
          if (!s.length)
            throw Error(
              "No chains specified in either `chains` or `optionalChains`"
            );
          let o = i.length ? e?.methods || it : [],
            a = i.length ? e?.events || ii : [],
            c = e?.optionalMethods || [],
            h = e?.optionalEvents || [],
            l = e?.rpcMap || this.buildRpcMap(s, e.projectId),
            u = e?.qrModalOptions || void 0;
          return {
            chains: i?.map((e) => this.formatChainId(e)),
            optionalChains: n.map((e) => this.formatChainId(e)),
            methods: o,
            events: a,
            optionalMethods: c,
            optionalEvents: h,
            rpcMap: l,
            showQrModal: !!(null != e && e.showQrModal),
            qrModalOptions: u,
            projectId: e.projectId,
            metadata: e.metadata,
          };
        }
        buildRpcMap(e, t) {
          let r = {};
          return (
            e.forEach((e) => {
              r[e] = this.getRpcUrl(e, t);
            }),
            r
          );
        }
        async initialize(e) {
          if (
            ((this.rpc = this.getRpcConfig(e)),
            (this.chainId = this.rpc.chains.length
              ? iv(this.rpc.chains)
              : iv(this.rpc.optionalChains)),
            (this.signer = await ie.init({
              projectId: this.rpc.projectId,
              metadata: this.rpc.metadata,
              disableProviderPing: e.disableProviderPing,
              relayUrl: e.relayUrl,
              storageOptions: e.storageOptions,
            })),
            this.registerEventListeners(),
            await this.loadPersistedSession(),
            this.rpc.showQrModal)
          ) {
            let e;
            try {
              let { WalletConnectModal: t } = await r
                .e(9343)
                .then(r.bind(r, 59343));
              e = t;
            } catch {
              throw Error(
                "To use QR modal, please install @walletconnect/modal package"
              );
            }
            if (e)
              try {
                this.modal = new e(
                  id(
                    {
                      walletConnectVersion: 2,
                      projectId: this.rpc.projectId,
                      standaloneChains: this.rpc.chains,
                    },
                    this.rpc.qrModalOptions
                  )
                );
              } catch (e) {
                throw (
                  (this.signer.logger.error(e),
                  Error("Could not generate WalletConnectModal Instance"))
                );
              }
          }
        }
        loadConnectOpts(e) {
          if (!e) return;
          let { chains: t, optionalChains: r, rpcMap: i } = e;
          t &&
            (0, s.qt)(t) &&
            ((this.rpc.chains = t.map((e) => this.formatChainId(e))),
            t.forEach((e) => {
              this.rpc.rpcMap[e] = i?.[e] || this.getRpcUrl(e);
            })),
            r &&
              (0, s.qt)(r) &&
              ((this.rpc.optionalChains = []),
              (this.rpc.optionalChains = r?.map((e) => this.formatChainId(e))),
              r.forEach((e) => {
                this.rpc.rpcMap[e] = i?.[e] || this.getRpcUrl(e);
              }));
        }
        getRpcUrl(e, t) {
          var r;
          return (
            (null == (r = this.rpc.rpcMap) ? void 0 : r[e]) ||
            `https://rpc.walletconnect.com/v1/?chainId=eip155:${e}&projectId=${
              t || this.rpc.projectId
            }`
          );
        }
        async loadPersistedSession() {
          if (!this.session) return;
          let e = await this.signer.client.core.storage.getItem(
              `${this.STORAGE_KEY}/chainId`
            ),
            t = this.session.namespaces[`${this.namespace}:${e}`]
              ? this.session.namespaces[`${this.namespace}:${e}`]
              : this.session.namespaces[this.namespace];
          this.setChainIds(e ? [this.formatChainId(e)] : t?.accounts),
            this.setAccounts(t?.accounts);
        }
        reset() {
          (this.chainId = 1), (this.accounts = []);
        }
        persist() {
          this.session &&
            this.signer.client.core.storage.setItem(
              `${this.STORAGE_KEY}/chainId`,
              this.chainId
            );
        }
        parseAccounts(e) {
          return "string" == typeof e || e instanceof String
            ? [this.parseAccount(e)]
            : e.map((e) => this.parseAccount(e));
        }
      }
      let i_ = im;
    },
    38200: function (e, t, r) {
      "use strict";
      r.d(t, {
        q: function () {
          return i;
        },
      });
      class i {}
    },
    30997: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          IEvents: function () {
            return i.q;
          },
        });
      var i = r(38200);
    },
    32568: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.HEARTBEAT_EVENTS = t.HEARTBEAT_INTERVAL = void 0);
      let i = r(66736);
      (t.HEARTBEAT_INTERVAL = i.FIVE_SECONDS),
        (t.HEARTBEAT_EVENTS = { pulse: "heartbeat_pulse" });
    },
    53401: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let i = r(70655);
      i.__exportStar(r(32568), t);
    },
    38969: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.HeartBeat = void 0);
      let i = r(70655),
        n = r(17187),
        s = r(66736),
        o = r(1614),
        a = r(53401);
      class c extends o.IHeartBeat {
        constructor(e) {
          super(e),
            (this.events = new n.EventEmitter()),
            (this.interval = a.HEARTBEAT_INTERVAL),
            (this.interval =
              (null == e ? void 0 : e.interval) || a.HEARTBEAT_INTERVAL);
        }
        static init(e) {
          return i.__awaiter(this, void 0, void 0, function* () {
            let t = new c(e);
            return yield t.init(), t;
          });
        }
        init() {
          return i.__awaiter(this, void 0, void 0, function* () {
            yield this.initialize();
          });
        }
        stop() {
          clearInterval(this.intervalRef);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        initialize() {
          return i.__awaiter(this, void 0, void 0, function* () {
            this.intervalRef = setInterval(
              () => this.pulse(),
              s.toMiliseconds(this.interval)
            );
          });
        }
        pulse() {
          this.events.emit(a.HEARTBEAT_EVENTS.pulse);
        }
      }
      t.HeartBeat = c;
    },
    90772: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let i = r(70655);
      i.__exportStar(r(38969), t),
        i.__exportStar(r(1614), t),
        i.__exportStar(r(53401), t);
    },
    44174: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.IHeartBeat = void 0);
      let i = r(30997);
      class n extends i.IEvents {
        constructor(e) {
          super();
        }
      }
      t.IHeartBeat = n;
    },
    1614: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let i = r(70655);
      i.__exportStar(r(44174), t);
    },
    48718: function (e, t, r) {
      "use strict";
      r.d(t, {
        CA: function () {
          return n;
        },
        JV: function () {
          return a;
        },
        O4: function () {
          return i;
        },
        dQ: function () {
          return s;
        },
        xK: function () {
          return o;
        },
      });
      let i = "INTERNAL_ERROR",
        n = "SERVER_ERROR",
        s = [-32700, -32600, -32601, -32602, -32603],
        o = {
          PARSE_ERROR: { code: -32700, message: "Parse error" },
          INVALID_REQUEST: { code: -32600, message: "Invalid Request" },
          METHOD_NOT_FOUND: { code: -32601, message: "Method not found" },
          INVALID_PARAMS: { code: -32602, message: "Invalid params" },
          [i]: { code: -32603, message: "Internal error" },
          [n]: { code: -32e3, message: "Server error" },
        },
        a = n;
    },
    91309: function (e, t, r) {
      "use strict";
      var i = r(1468);
      r.o(i, "formatJsonRpcError") &&
        r.d(t, {
          formatJsonRpcError: function () {
            return i.formatJsonRpcError;
          },
        }),
        r.o(i, "isLocalhostUrl") &&
          r.d(t, {
            isLocalhostUrl: function () {
              return i.isLocalhostUrl;
            },
          }),
        r.o(i, "isReactNative") &&
          r.d(t, {
            isReactNative: function () {
              return i.isReactNative;
            },
          }),
        r.o(i, "isWsUrl") &&
          r.d(t, {
            isWsUrl: function () {
              return i.isWsUrl;
            },
          });
    },
    31877: function (e, t, r) {
      "use strict";
      r.d(t, {
        CX: function () {
          return a;
        },
        L2: function () {
          return o;
        },
        by: function () {
          return s;
        },
        i5: function () {
          return n;
        },
      });
      var i = r(48718);
      function n(e) {
        return i.dQ.includes(e);
      }
      function s(e) {
        return Object.keys(i.xK).includes(e) ? i.xK[e] : i.xK[i.JV];
      }
      function o(e) {
        let t = Object.values(i.xK).find((t) => t.code === e);
        return t || i.xK[i.JV];
      }
      function a(e, t, r) {
        return e.message.includes("getaddrinfo ENOTFOUND") ||
          e.message.includes("connect ECONNREFUSED")
          ? Error(`Unavailable ${r} RPC url at ${t}`)
          : e;
      }
    },
    26200: function (e, t, r) {
      "use strict";
      r.d(t, {
        RI: function () {
          return s;
        },
      });
      var i = r(31877),
        n = r(48718);
      function s(e, t, r) {
        var s;
        return {
          id: e,
          jsonrpc: "2.0",
          error:
            void 0 === (s = t)
              ? (0, i.by)(n.O4)
              : ("string" == typeof s &&
                  (s = Object.assign(Object.assign({}, (0, i.by)(n.CA)), {
                    message: s,
                  })),
                void 0 !== r && (s.data = r),
                (0, i.i5)(s.code) && (s = (0, i.L2)(s.code)),
                s),
        };
      }
    },
    94135: function (e, t, r) {
      "use strict";
      r.d(t, {
        formatJsonRpcError: function () {
          return s.RI;
        },
        isLocalhostUrl: function () {
          return a.JF;
        },
        isWsUrl: function () {
          return a.UZ;
        },
        parseConnectionError: function () {
          return i.CX;
        },
      }),
        r(48718);
      var i = r(31877),
        n = r(91309);
      r.o(n, "formatJsonRpcError") &&
        r.d(t, {
          formatJsonRpcError: function () {
            return n.formatJsonRpcError;
          },
        }),
        r.o(n, "isLocalhostUrl") &&
          r.d(t, {
            isLocalhostUrl: function () {
              return n.isLocalhostUrl;
            },
          }),
        r.o(n, "isReactNative") &&
          r.d(t, {
            isReactNative: function () {
              return n.isReactNative;
            },
          }),
        r.o(n, "isWsUrl") &&
          r.d(t, {
            isWsUrl: function () {
              return n.isWsUrl;
            },
          });
      var s = r(26200),
        o = r(54956);
      r.o(o, "isLocalhostUrl") &&
        r.d(t, {
          isLocalhostUrl: function () {
            return o.isLocalhostUrl;
          },
        }),
        r.o(o, "isReactNative") &&
          r.d(t, {
            isReactNative: function () {
              return o.isReactNative;
            },
          }),
        r.o(o, "isWsUrl") &&
          r.d(t, {
            isWsUrl: function () {
              return o.isWsUrl;
            },
          });
      var a = r(62186);
    },
    54956: function (e, t, r) {
      "use strict";
      var i = r(35885);
      r.o(i, "isLocalhostUrl") &&
        r.d(t, {
          isLocalhostUrl: function () {
            return i.isLocalhostUrl;
          },
        }),
        r.o(i, "isReactNative") &&
          r.d(t, {
            isReactNative: function () {
              return i.isReactNative;
            },
          }),
        r.o(i, "isWsUrl") &&
          r.d(t, {
            isWsUrl: function () {
              return i.isWsUrl;
            },
          });
    },
    62186: function (e, t, r) {
      "use strict";
      function i(e) {
        return (function (e, t) {
          let r = (function (e) {
            let t = e.match(RegExp(/^\w+:/, "gi"));
            if (t && t.length) return t[0];
          })(e);
          return void 0 !== r && RegExp(t).test(r);
        })(e, "^wss?:");
      }
      function n(e) {
        return RegExp("wss?://localhost(:d{2,5})?").test(e);
      }
      r.d(t, {
        JF: function () {
          return n;
        },
        UZ: function () {
          return i;
        },
      });
    },
    85150: function (e, t, r) {
      "use strict";
      let i = r(70655),
        n = r(63954),
        s = i.__importDefault(r(30653)),
        o = r(59728);
      t.ZP = class {
        constructor() {
          this.localStorage = s.default;
        }
        getKeys() {
          return i.__awaiter(this, void 0, void 0, function* () {
            return Object.keys(this.localStorage);
          });
        }
        getEntries() {
          return i.__awaiter(this, void 0, void 0, function* () {
            return Object.entries(this.localStorage).map(o.parseEntry);
          });
        }
        getItem(e) {
          return i.__awaiter(this, void 0, void 0, function* () {
            let t = this.localStorage.getItem(e);
            if (null !== t) return n.safeJsonParse(t);
          });
        }
        setItem(e, t) {
          return i.__awaiter(this, void 0, void 0, function* () {
            this.localStorage.setItem(e, n.safeJsonStringify(t));
          });
        }
        removeItem(e) {
          return i.__awaiter(this, void 0, void 0, function* () {
            this.localStorage.removeItem(e);
          });
        }
      };
    },
    30653: function (e, t, r) {
      "use strict";
      !(function () {
        let t;
        function i() {}
        ((t = i).prototype.getItem = function (e) {
          return this.hasOwnProperty(e) ? String(this[e]) : null;
        }),
          (t.prototype.setItem = function (e, t) {
            this[e] = String(t);
          }),
          (t.prototype.removeItem = function (e) {
            delete this[e];
          }),
          (t.prototype.clear = function () {
            let e = this;
            Object.keys(e).forEach(function (t) {
              (e[t] = void 0), delete e[t];
            });
          }),
          (t.prototype.key = function (e) {
            return (e = e || 0), Object.keys(this)[e];
          }),
          t.prototype.__defineGetter__("length", function () {
            return Object.keys(this).length;
          }),
          void 0 !== r.g && r.g.localStorage
            ? (e.exports = r.g.localStorage)
            : "undefined" != typeof window && window.localStorage
            ? (e.exports = window.localStorage)
            : (e.exports = new i());
      })();
    },
    59728: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let i = r(70655);
      i.__exportStar(r(39076), t), i.__exportStar(r(20496), t);
    },
    39076: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.IKeyValueStorage = void 0),
        (t.IKeyValueStorage = class {});
    },
    20496: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.parseEntry = void 0);
      let i = r(63954);
      t.parseEntry = function (e) {
        var t;
        return [
          e[0],
          i.safeJsonParse(null !== (t = e[1]) && void 0 !== t ? t : ""),
        ];
      };
    },
    65727: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.PINO_CUSTOM_CONTEXT_KEY = t.PINO_LOGGER_DEFAULTS = void 0),
        (t.PINO_LOGGER_DEFAULTS = { level: "info" }),
        (t.PINO_CUSTOM_CONTEXT_KEY = "custom_context");
    },
    9107: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.pino = void 0);
      let i = r(70655),
        n = i.__importDefault(r(36559));
      Object.defineProperty(t, "pino", {
        enumerable: !0,
        get: function () {
          return n.default;
        },
      }),
        i.__exportStar(r(65727), t),
        i.__exportStar(r(58048), t);
    },
    58048: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.generateChildLogger =
          t.formatChildLoggerContext =
          t.getLoggerContext =
          t.setBrowserLoggerContext =
          t.getBrowserLoggerContext =
          t.getDefaultLoggerOptions =
            void 0);
      let i = r(65727);
      function n(e, t = i.PINO_CUSTOM_CONTEXT_KEY) {
        return e[t] || "";
      }
      function s(e, t, r = i.PINO_CUSTOM_CONTEXT_KEY) {
        return (e[r] = t), e;
      }
      function o(e, t = i.PINO_CUSTOM_CONTEXT_KEY) {
        return void 0 === e.bindings ? n(e, t) : e.bindings().context || "";
      }
      function a(e, t, r = i.PINO_CUSTOM_CONTEXT_KEY) {
        let n = o(e, r),
          s = n.trim() ? `${n}/${t}` : t;
        return s;
      }
      (t.getDefaultLoggerOptions = function (e) {
        return Object.assign(Object.assign({}, e), {
          level: (null == e ? void 0 : e.level) || i.PINO_LOGGER_DEFAULTS.level,
        });
      }),
        (t.getBrowserLoggerContext = n),
        (t.setBrowserLoggerContext = s),
        (t.getLoggerContext = o),
        (t.formatChildLoggerContext = a),
        (t.generateChildLogger = function (
          e,
          t,
          r = i.PINO_CUSTOM_CONTEXT_KEY
        ) {
          let n = a(e, t, r),
            o = e.child({ context: n });
          return s(o, n, r);
        });
    },
    43014: function () {},
    72307: function (e, t, r) {
      e = r.nmd(e);
      var i,
        n,
        s,
        o = "__lodash_hash_undefined__",
        a = "[object Arguments]",
        c = "[object Array]",
        h = "[object Boolean]",
        l = "[object Date]",
        u = "[object Error]",
        p = "[object Function]",
        f = "[object Map]",
        d = "[object Number]",
        g = "[object Object]",
        v = "[object Promise]",
        y = "[object RegExp]",
        m = "[object Set]",
        _ = "[object String]",
        w = "[object WeakMap]",
        b = "[object ArrayBuffer]",
        E = "[object DataView]",
        I = /^\[object .+?Constructor\]$/,
        P = /^(?:0|[1-9]\d*)$/,
        S = {};
      (S["[object Float32Array]"] =
        S["[object Float64Array]"] =
        S["[object Int8Array]"] =
        S["[object Int16Array]"] =
        S["[object Int32Array]"] =
        S["[object Uint8Array]"] =
        S["[object Uint8ClampedArray]"] =
        S["[object Uint16Array]"] =
        S["[object Uint32Array]"] =
          !0),
        (S[a] =
          S[c] =
          S[b] =
          S[h] =
          S[E] =
          S[l] =
          S[u] =
          S[p] =
          S[f] =
          S[d] =
          S[g] =
          S[y] =
          S[m] =
          S[_] =
          S[w] =
            !1);
      var R = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
        O = "object" == typeof self && self && self.Object === Object && self,
        x = R || O || Function("return this")(),
        C = t && !t.nodeType && t,
        A = C && e && !e.nodeType && e,
        N = A && A.exports === C,
        T = N && R.process,
        q = (function () {
          try {
            return T && T.binding && T.binding("util");
          } catch (e) {}
        })(),
        j = q && q.isTypedArray;
      function L(e) {
        var t = -1,
          r = Array(e.size);
        return (
          e.forEach(function (e, i) {
            r[++t] = [i, e];
          }),
          r
        );
      }
      function D(e) {
        var t = -1,
          r = Array(e.size);
        return (
          e.forEach(function (e) {
            r[++t] = e;
          }),
          r
        );
      }
      var z = Array.prototype,
        M = Function.prototype,
        U = Object.prototype,
        k = x["__core-js_shared__"],
        $ = M.toString,
        H = U.hasOwnProperty,
        V = (i = /[^.]+$/.exec((k && k.keys && k.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + i
          : "",
        K = U.toString,
        B = RegExp(
          "^" +
            $.call(H)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        ),
        J = N ? x.Buffer : void 0,
        F = x.Symbol,
        W = x.Uint8Array,
        Z = U.propertyIsEnumerable,
        G = z.splice,
        Q = F ? F.toStringTag : void 0,
        Y = Object.getOwnPropertySymbols,
        X = J ? J.isBuffer : void 0,
        ee =
          ((n = Object.keys),
          (s = Object),
          function (e) {
            return n(s(e));
          }),
        et = eS(x, "DataView"),
        er = eS(x, "Map"),
        ei = eS(x, "Promise"),
        en = eS(x, "Set"),
        es = eS(x, "WeakMap"),
        eo = eS(Object, "create"),
        ea = ex(et),
        ec = ex(er),
        eh = ex(ei),
        el = ex(en),
        eu = ex(es),
        ep = F ? F.prototype : void 0,
        ef = ep ? ep.valueOf : void 0;
      function ed(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var i = e[t];
          this.set(i[0], i[1]);
        }
      }
      function eg(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var i = e[t];
          this.set(i[0], i[1]);
        }
      }
      function ev(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var i = e[t];
          this.set(i[0], i[1]);
        }
      }
      function ey(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.__data__ = new ev(); ++t < r; ) this.add(e[t]);
      }
      function em(e) {
        var t = (this.__data__ = new eg(e));
        this.size = t.size;
      }
      function e_(e, t) {
        for (var r = e.length; r--; ) if (eC(e[r][0], t)) return r;
        return -1;
      }
      function ew(e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : Q && Q in Object(e)
          ? (function (e) {
              var t = H.call(e, Q),
                r = e[Q];
              try {
                e[Q] = void 0;
                var i = !0;
              } catch (e) {}
              var n = K.call(e);
              return i && (t ? (e[Q] = r) : delete e[Q]), n;
            })(e)
          : K.call(e);
      }
      function eb(e) {
        return eD(e) && ew(e) == a;
      }
      function eE(e, t, r, i, n, s) {
        var o = 1 & r,
          a = e.length,
          c = t.length;
        if (a != c && !(o && c > a)) return !1;
        var h = s.get(e);
        if (h && s.get(t)) return h == t;
        var l = -1,
          u = !0,
          p = 2 & r ? new ey() : void 0;
        for (s.set(e, t), s.set(t, e); ++l < a; ) {
          var f = e[l],
            d = t[l];
          if (i) var g = o ? i(d, f, l, t, e, s) : i(f, d, l, e, t, s);
          if (void 0 !== g) {
            if (g) continue;
            u = !1;
            break;
          }
          if (p) {
            if (
              !(function (e, t) {
                for (var r = -1, i = null == e ? 0 : e.length; ++r < i; )
                  if (t(e[r], r, e)) return !0;
                return !1;
              })(t, function (e, t) {
                if (!p.has(t) && (f === e || n(f, e, r, i, s)))
                  return p.push(t);
              })
            ) {
              u = !1;
              break;
            }
          } else if (!(f === d || n(f, d, r, i, s))) {
            u = !1;
            break;
          }
        }
        return s.delete(e), s.delete(t), u;
      }
      function eI(e) {
        var t;
        return (
          (t = (function (e) {
            return null != e && ej(e.length) && !eq(e)
              ? (function (e, t) {
                  var r,
                    i,
                    n = eN(e),
                    s = !n && eA(e),
                    o = !n && !s && eT(e),
                    a = !n && !s && !o && ez(e),
                    c = n || s || o || a,
                    h = c
                      ? (function (e, t) {
                          for (var r = -1, i = Array(e); ++r < e; ) i[r] = t(r);
                          return i;
                        })(e.length, String)
                      : [],
                    l = h.length;
                  for (var u in e)
                    H.call(e, u) &&
                      !(
                        c &&
                        ("length" == u ||
                          (o && ("offset" == u || "parent" == u)) ||
                          (a &&
                            ("buffer" == u ||
                              "byteLength" == u ||
                              "byteOffset" == u)) ||
                          ((r = u),
                          (i = null == (i = l) ? 9007199254740991 : i) &&
                            ("number" == typeof r || P.test(r)) &&
                            r > -1 &&
                            r % 1 == 0 &&
                            r < i))
                      ) &&
                      h.push(u);
                  return h;
                })(e)
              : (function (e) {
                  if (
                    ((r =
                      ("function" == typeof (t = e && e.constructor) &&
                        t.prototype) ||
                      U),
                    e !== r)
                  )
                    return ee(e);
                  var t,
                    r,
                    i = [];
                  for (var n in Object(e))
                    H.call(e, n) && "constructor" != n && i.push(n);
                  return i;
                })(e);
          })(e)),
          eN(e)
            ? t
            : (function (e, t) {
                for (var r = -1, i = t.length, n = e.length; ++r < i; )
                  e[n + r] = t[r];
                return e;
              })(t, eR(e))
        );
      }
      function eP(e, t) {
        var r,
          i = e.__data__;
        return (
          "string" == (r = typeof t) ||
          "number" == r ||
          "symbol" == r ||
          "boolean" == r
            ? "__proto__" !== t
            : null === t
        )
          ? i["string" == typeof t ? "string" : "hash"]
          : i.map;
      }
      function eS(e, t) {
        var r = null == e ? void 0 : e[t];
        return !(!eL(r) || (V && V in r)) && (eq(r) ? B : I).test(ex(r))
          ? r
          : void 0;
      }
      (ed.prototype.clear = function () {
        (this.__data__ = eo ? eo(null) : {}), (this.size = 0);
      }),
        (ed.prototype.delete = function (e) {
          var t = this.has(e) && delete this.__data__[e];
          return (this.size -= t ? 1 : 0), t;
        }),
        (ed.prototype.get = function (e) {
          var t = this.__data__;
          if (eo) {
            var r = t[e];
            return r === o ? void 0 : r;
          }
          return H.call(t, e) ? t[e] : void 0;
        }),
        (ed.prototype.has = function (e) {
          var t = this.__data__;
          return eo ? void 0 !== t[e] : H.call(t, e);
        }),
        (ed.prototype.set = function (e, t) {
          var r = this.__data__;
          return (
            (this.size += this.has(e) ? 0 : 1),
            (r[e] = eo && void 0 === t ? o : t),
            this
          );
        }),
        (eg.prototype.clear = function () {
          (this.__data__ = []), (this.size = 0);
        }),
        (eg.prototype.delete = function (e) {
          var t = this.__data__,
            r = e_(t, e);
          return (
            !(r < 0) &&
            (r == t.length - 1 ? t.pop() : G.call(t, r, 1), --this.size, !0)
          );
        }),
        (eg.prototype.get = function (e) {
          var t = this.__data__,
            r = e_(t, e);
          return r < 0 ? void 0 : t[r][1];
        }),
        (eg.prototype.has = function (e) {
          return e_(this.__data__, e) > -1;
        }),
        (eg.prototype.set = function (e, t) {
          var r = this.__data__,
            i = e_(r, e);
          return i < 0 ? (++this.size, r.push([e, t])) : (r[i][1] = t), this;
        }),
        (ev.prototype.clear = function () {
          (this.size = 0),
            (this.__data__ = {
              hash: new ed(),
              map: new (er || eg)(),
              string: new ed(),
            });
        }),
        (ev.prototype.delete = function (e) {
          var t = eP(this, e).delete(e);
          return (this.size -= t ? 1 : 0), t;
        }),
        (ev.prototype.get = function (e) {
          return eP(this, e).get(e);
        }),
        (ev.prototype.has = function (e) {
          return eP(this, e).has(e);
        }),
        (ev.prototype.set = function (e, t) {
          var r = eP(this, e),
            i = r.size;
          return r.set(e, t), (this.size += r.size == i ? 0 : 1), this;
        }),
        (ey.prototype.add = ey.prototype.push =
          function (e) {
            return this.__data__.set(e, o), this;
          }),
        (ey.prototype.has = function (e) {
          return this.__data__.has(e);
        }),
        (em.prototype.clear = function () {
          (this.__data__ = new eg()), (this.size = 0);
        }),
        (em.prototype.delete = function (e) {
          var t = this.__data__,
            r = t.delete(e);
          return (this.size = t.size), r;
        }),
        (em.prototype.get = function (e) {
          return this.__data__.get(e);
        }),
        (em.prototype.has = function (e) {
          return this.__data__.has(e);
        }),
        (em.prototype.set = function (e, t) {
          var r = this.__data__;
          if (r instanceof eg) {
            var i = r.__data__;
            if (!er || i.length < 199)
              return i.push([e, t]), (this.size = ++r.size), this;
            r = this.__data__ = new ev(i);
          }
          return r.set(e, t), (this.size = r.size), this;
        });
      var eR = Y
          ? function (e) {
              return null == e
                ? []
                : (function (e, t) {
                    for (
                      var r = -1, i = null == e ? 0 : e.length, n = 0, s = [];
                      ++r < i;

                    ) {
                      var o = e[r];
                      t(o, r, e) && (s[n++] = o);
                    }
                    return s;
                  })(Y((e = Object(e))), function (t) {
                    return Z.call(e, t);
                  });
            }
          : function () {
              return [];
            },
        eO = ew;
      function ex(e) {
        if (null != e) {
          try {
            return $.call(e);
          } catch (e) {}
          try {
            return e + "";
          } catch (e) {}
        }
        return "";
      }
      function eC(e, t) {
        return e === t || (e != e && t != t);
      }
      ((et && eO(new et(new ArrayBuffer(1))) != E) ||
        (er && eO(new er()) != f) ||
        (ei && eO(ei.resolve()) != v) ||
        (en && eO(new en()) != m) ||
        (es && eO(new es()) != w)) &&
        (eO = function (e) {
          var t = ew(e),
            r = t == g ? e.constructor : void 0,
            i = r ? ex(r) : "";
          if (i)
            switch (i) {
              case ea:
                return E;
              case ec:
                return f;
              case eh:
                return v;
              case el:
                return m;
              case eu:
                return w;
            }
          return t;
        });
      var eA = eb(
          (function () {
            return arguments;
          })()
        )
          ? eb
          : function (e) {
              return eD(e) && H.call(e, "callee") && !Z.call(e, "callee");
            },
        eN = Array.isArray,
        eT =
          X ||
          function () {
            return !1;
          };
      function eq(e) {
        if (!eL(e)) return !1;
        var t = ew(e);
        return (
          t == p ||
          "[object GeneratorFunction]" == t ||
          "[object AsyncFunction]" == t ||
          "[object Proxy]" == t
        );
      }
      function ej(e) {
        return (
          "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        );
      }
      function eL(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      }
      function eD(e) {
        return null != e && "object" == typeof e;
      }
      var ez = j
        ? function (e) {
            return j(e);
          }
        : function (e) {
            return eD(e) && ej(e.length) && !!S[ew(e)];
          };
      e.exports = function (e, t) {
        return (function e(t, r, i, n, s) {
          return (
            t === r ||
            (null != t && null != r && (eD(t) || eD(r))
              ? (function (e, t, r, i, n, s) {
                  var o = eN(e),
                    p = eN(t),
                    v = o ? c : eO(e),
                    w = p ? c : eO(t);
                  (v = v == a ? g : v), (w = w == a ? g : w);
                  var I = v == g,
                    P = w == g,
                    S = v == w;
                  if (S && eT(e)) {
                    if (!eT(t)) return !1;
                    (o = !0), (I = !1);
                  }
                  if (S && !I)
                    return (
                      s || (s = new em()),
                      o || ez(e)
                        ? eE(e, t, r, i, n, s)
                        : (function (e, t, r, i, n, s, o) {
                            switch (r) {
                              case E:
                                if (
                                  e.byteLength != t.byteLength ||
                                  e.byteOffset != t.byteOffset
                                )
                                  break;
                                (e = e.buffer), (t = t.buffer);
                              case b:
                                if (
                                  e.byteLength != t.byteLength ||
                                  !s(new W(e), new W(t))
                                )
                                  break;
                                return !0;
                              case h:
                              case l:
                              case d:
                                return eC(+e, +t);
                              case u:
                                return (
                                  e.name == t.name && e.message == t.message
                                );
                              case y:
                              case _:
                                return e == t + "";
                              case f:
                                var a = L;
                              case m:
                                var c = 1 & i;
                                if ((a || (a = D), e.size != t.size && !c))
                                  break;
                                var p = o.get(e);
                                if (p) return p == t;
                                (i |= 2), o.set(e, t);
                                var g = eE(a(e), a(t), i, n, s, o);
                                return o.delete(e), g;
                              case "[object Symbol]":
                                if (ef) return ef.call(e) == ef.call(t);
                            }
                            return !1;
                          })(e, t, v, r, i, n, s)
                    );
                  if (!(1 & r)) {
                    var R = I && H.call(e, "__wrapped__"),
                      O = P && H.call(t, "__wrapped__");
                    if (R || O) {
                      var x = R ? e.value() : e,
                        C = O ? t.value() : t;
                      return s || (s = new em()), n(x, C, r, i, s);
                    }
                  }
                  return (
                    !!S &&
                    (s || (s = new em()),
                    (function (e, t, r, i, n, s) {
                      var o = 1 & r,
                        a = eI(e),
                        c = a.length;
                      if (c != eI(t).length && !o) return !1;
                      for (var h = c; h--; ) {
                        var l = a[h];
                        if (!(o ? l in t : H.call(t, l))) return !1;
                      }
                      var u = s.get(e);
                      if (u && s.get(t)) return u == t;
                      var p = !0;
                      s.set(e, t), s.set(t, e);
                      for (var f = o; ++h < c; ) {
                        var d = e[(l = a[h])],
                          g = t[l];
                        if (i)
                          var v = o ? i(g, d, l, t, e, s) : i(d, g, l, e, t, s);
                        if (!(void 0 === v ? d === g || n(d, g, r, i, s) : v)) {
                          p = !1;
                          break;
                        }
                        f || (f = "constructor" == l);
                      }
                      if (p && !f) {
                        var y = e.constructor,
                          m = t.constructor;
                        y != m &&
                          "constructor" in e &&
                          "constructor" in t &&
                          !(
                            "function" == typeof y &&
                            y instanceof y &&
                            "function" == typeof m &&
                            m instanceof m
                          ) &&
                          (p = !1);
                      }
                      return s.delete(e), s.delete(t), p;
                    })(e, t, r, i, n, s))
                  );
                })(t, r, i, n, e, s)
              : t != t && r != r)
          );
        })(e, t);
      };
    },
    85346: function (e) {
      "use strict";
      function t(e) {
        try {
          return JSON.stringify(e);
        } catch (e) {
          return '"[Circular]"';
        }
      }
      e.exports = function (e, r, i) {
        var n = (i && i.stringify) || t;
        if ("object" == typeof e && null !== e) {
          var s = r.length + 1;
          if (1 === s) return e;
          var o = Array(s);
          o[0] = n(e);
          for (var a = 1; a < s; a++) o[a] = n(r[a]);
          return o.join(" ");
        }
        if ("string" != typeof e) return e;
        var c = r.length;
        if (0 === c) return e;
        for (
          var h = "", l = 0, u = -1, p = (e && e.length) || 0, f = 0;
          f < p;

        ) {
          if (37 === e.charCodeAt(f) && f + 1 < p) {
            switch (((u = u > -1 ? u : 0), e.charCodeAt(f + 1))) {
              case 100:
              case 102:
                if (l >= c || null == r[l]) break;
                u < f && (h += e.slice(u, f)),
                  (h += Number(r[l])),
                  (u = f + 2),
                  f++;
                break;
              case 105:
                if (l >= c || null == r[l]) break;
                u < f && (h += e.slice(u, f)),
                  (h += Math.floor(Number(r[l]))),
                  (u = f + 2),
                  f++;
                break;
              case 79:
              case 111:
              case 106:
                if (l >= c || void 0 === r[l]) break;
                u < f && (h += e.slice(u, f));
                var d = typeof r[l];
                if ("string" === d) {
                  (h += "'" + r[l] + "'"), (u = f + 2), f++;
                  break;
                }
                if ("function" === d) {
                  (h += r[l].name || "<anonymous>"), (u = f + 2), f++;
                  break;
                }
                (h += n(r[l])), (u = f + 2), f++;
                break;
              case 115:
                if (l >= c) break;
                u < f && (h += e.slice(u, f)),
                  (h += String(r[l])),
                  (u = f + 2),
                  f++;
                break;
              case 37:
                u < f && (h += e.slice(u, f)),
                  (h += "%"),
                  (u = f + 2),
                  f++,
                  l--;
            }
            ++l;
          }
          ++f;
        }
        return -1 === u ? e : (u < p && (h += e.slice(u)), h);
      };
    },
    63954: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.safeJsonParse = function (e) {
          if ("string" != typeof e)
            throw Error(`Cannot safe json parse value of type ${typeof e}`);
          try {
            return JSON.parse(e);
          } catch (t) {
            return e;
          }
        }),
        (t.safeJsonStringify = function (e) {
          return "string" == typeof e
            ? e
            : JSON.stringify(e, (e, t) => (void 0 === t ? null : t));
        });
    },
    36559: function (e, t, r) {
      "use strict";
      let i = r(85346);
      e.exports = s;
      let n =
        (function () {
          function e(e) {
            return void 0 !== e && e;
          }
          try {
            if ("undefined" != typeof globalThis) return globalThis;
            return (
              Object.defineProperty(Object.prototype, "globalThis", {
                get: function () {
                  return (
                    delete Object.prototype.globalThis, (this.globalThis = this)
                  );
                },
                configurable: !0,
              }),
              globalThis
            );
          } catch (t) {
            return e(self) || e(window) || e(this) || {};
          }
        })().console || {};
      function s(e) {
        var t;
        (e = e || {}).browser = e.browser || {};
        let r = e.browser.transmit;
        if (r && "function" != typeof r.send)
          throw Error("pino: transmit option must have a send function");
        let i = e.browser.write || n;
        e.browser.write && (e.browser.asObject = !0);
        let l = e.serializers || {},
          u = (function (e, t) {
            if (Array.isArray(e)) {
              let t = e.filter(function (e) {
                return "!stdSerializers.err" !== e;
              });
              return t;
            }
            return !0 === e && Object.keys(t);
          })(e.browser.serialize, l),
          g = e.browser.serialize;
        Array.isArray(e.browser.serialize) &&
          e.browser.serialize.indexOf("!stdSerializers.err") > -1 &&
          (g = !1),
          "function" == typeof i &&
            (i.error = i.fatal = i.warn = i.info = i.debug = i.trace = i),
          !1 === e.enabled && (e.level = "silent");
        let v = e.level || "info",
          y = Object.create(i);
        y.log || (y.log = p),
          Object.defineProperty(y, "levelVal", {
            get: function () {
              return "silent" === this.level
                ? 1 / 0
                : this.levels.values[this.level];
            },
          }),
          Object.defineProperty(y, "level", {
            get: function () {
              return this._level;
            },
            set: function (e) {
              if ("silent" !== e && !this.levels.values[e])
                throw Error("unknown level " + e);
              (this._level = e),
                o(m, y, "error", "log"),
                o(m, y, "fatal", "error"),
                o(m, y, "warn", "error"),
                o(m, y, "info", "log"),
                o(m, y, "debug", "log"),
                o(m, y, "trace", "log");
            },
          });
        let m = {
          transmit: r,
          serialize: u,
          asObject: e.browser.asObject,
          levels: ["error", "fatal", "warn", "info", "debug", "trace"],
          timestamp:
            "function" == typeof (t = e).timestamp
              ? t.timestamp
              : !1 === t.timestamp
              ? f
              : d,
        };
        return (
          (y.levels = s.levels),
          (y.level = v),
          (y.setMaxListeners =
            y.getMaxListeners =
            y.emit =
            y.addListener =
            y.on =
            y.prependListener =
            y.once =
            y.prependOnceListener =
            y.removeListener =
            y.removeAllListeners =
            y.listeners =
            y.listenerCount =
            y.eventNames =
            y.write =
            y.flush =
              p),
          (y.serializers = l),
          (y._serialize = u),
          (y._stdErrSerialize = g),
          (y.child = function (t, i) {
            if (!t) throw Error("missing bindings for child Pino");
            (i = i || {}),
              u && t.serializers && (i.serializers = t.serializers);
            let n = i.serializers;
            if (u && n) {
              var s = Object.assign({}, l, n),
                o = !0 === e.browser.serialize ? Object.keys(s) : u;
              delete t.serializers, a([t], o, s, this._stdErrSerialize);
            }
            function p(e) {
              (this._childLevel = (0 | e._childLevel) + 1),
                (this.error = c(e, t, "error")),
                (this.fatal = c(e, t, "fatal")),
                (this.warn = c(e, t, "warn")),
                (this.info = c(e, t, "info")),
                (this.debug = c(e, t, "debug")),
                (this.trace = c(e, t, "trace")),
                s && ((this.serializers = s), (this._serialize = o)),
                r && (this._logEvent = h([].concat(e._logEvent.bindings, t)));
            }
            return (p.prototype = this), new p(this);
          }),
          r && (y._logEvent = h()),
          y
        );
      }
      function o(e, t, r, o) {
        let c = Object.getPrototypeOf(t);
        (t[r] =
          t.levelVal > t.levels.values[r]
            ? p
            : c[r]
            ? c[r]
            : n[r] || n[o] || p),
          (function (e, t, r) {
            if (e.transmit || t[r] !== p) {
              var o;
              t[r] =
                ((o = t[r]),
                function () {
                  let c = e.timestamp(),
                    l = Array(arguments.length),
                    u =
                      Object.getPrototypeOf && Object.getPrototypeOf(this) === n
                        ? n
                        : this;
                  for (var p = 0; p < l.length; p++) l[p] = arguments[p];
                  if (
                    (e.serialize &&
                      !e.asObject &&
                      a(
                        l,
                        this._serialize,
                        this.serializers,
                        this._stdErrSerialize
                      ),
                    e.asObject
                      ? o.call(
                          u,
                          (function (e, t, r, n) {
                            e._serialize &&
                              a(
                                r,
                                e._serialize,
                                e.serializers,
                                e._stdErrSerialize
                              );
                            let o = r.slice(),
                              c = o[0],
                              h = {};
                            n && (h.time = n), (h.level = s.levels.values[t]);
                            let l = (0 | e._childLevel) + 1;
                            if (
                              (l < 1 && (l = 1),
                              null !== c && "object" == typeof c)
                            ) {
                              for (; l-- && "object" == typeof o[0]; )
                                Object.assign(h, o.shift());
                              c = o.length ? i(o.shift(), o) : void 0;
                            } else
                              "string" == typeof c && (c = i(o.shift(), o));
                            return void 0 !== c && (h.msg = c), h;
                          })(this, r, l, c)
                        )
                      : o.apply(u, l),
                    e.transmit)
                  ) {
                    let i = e.transmit.level || t.level,
                      n = s.levels.values[i],
                      o = s.levels.values[r];
                    if (o < n) return;
                    (function (e, t, r) {
                      let i = t.send,
                        n = t.ts,
                        s = t.methodLevel,
                        o = t.methodValue,
                        c = t.val,
                        l = e._logEvent.bindings;
                      a(
                        r,
                        e._serialize || Object.keys(e.serializers),
                        e.serializers,
                        void 0 === e._stdErrSerialize || e._stdErrSerialize
                      ),
                        (e._logEvent.ts = n),
                        (e._logEvent.messages = r.filter(function (e) {
                          return -1 === l.indexOf(e);
                        })),
                        (e._logEvent.level.label = s),
                        (e._logEvent.level.value = o),
                        i(s, e._logEvent, c),
                        (e._logEvent = h(l));
                    })(
                      this,
                      {
                        ts: c,
                        methodLevel: r,
                        methodValue: o,
                        transmitLevel: i,
                        transmitValue:
                          s.levels.values[e.transmit.level || t.level],
                        send: e.transmit.send,
                        val: t.levelVal,
                      },
                      l
                    );
                  }
                });
            }
          })(e, t, r);
      }
      function a(e, t, r, i) {
        for (let n in e)
          if (i && e[n] instanceof Error) e[n] = s.stdSerializers.err(e[n]);
          else if ("object" == typeof e[n] && !Array.isArray(e[n]))
            for (let i in e[n])
              t && t.indexOf(i) > -1 && i in r && (e[n][i] = r[i](e[n][i]));
      }
      function c(e, t, r) {
        return function () {
          let i = Array(1 + arguments.length);
          i[0] = t;
          for (var n = 1; n < i.length; n++) i[n] = arguments[n - 1];
          return e[r].apply(this, i);
        };
      }
      function h(e) {
        return {
          ts: 0,
          messages: [],
          bindings: e || [],
          level: { label: "", value: 0 },
        };
      }
      function l() {
        return {};
      }
      function u(e) {
        return e;
      }
      function p() {}
      function f() {
        return !1;
      }
      function d() {
        return Date.now();
      }
      (s.levels = {
        values: {
          fatal: 60,
          error: 50,
          warn: 40,
          info: 30,
          debug: 20,
          trace: 10,
        },
        labels: {
          10: "trace",
          20: "debug",
          30: "info",
          40: "warn",
          50: "error",
          60: "fatal",
        },
      }),
        (s.stdSerializers = {
          mapHttpRequest: l,
          mapHttpResponse: l,
          wrapRequestSerializer: u,
          wrapResponseSerializer: u,
          wrapErrorSerializer: u,
          req: l,
          res: l,
          err: function (e) {
            let t = {
              type: e.constructor.name,
              msg: e.message,
              stack: e.stack,
            };
            for (let r in e) void 0 === t[r] && (t[r] = e[r]);
            return t;
          },
        }),
        (s.stdTimeFunctions = Object.assign(
          {},
          {
            nullTime: f,
            epochTime: d,
            unixTime: function () {
              return Math.round(Date.now() / 1e3);
            },
            isoTime: function () {
              return new Date(Date.now()).toISOString();
            },
          }
        ));
    },
  },
]);
