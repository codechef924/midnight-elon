(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5415],
  {
    40926: function (t, e, r) {
      "use strict";
      function n() {
        return (
          (null === r.g || void 0 === r.g ? void 0 : r.g.crypto) ||
          (null === r.g || void 0 === r.g ? void 0 : r.g.msCrypto) ||
          {}
        );
      }
      function o() {
        let t = n();
        return t.subtle || t.webkitSubtle;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isBrowserCryptoAvailable =
          e.getSubtleCrypto =
          e.getBrowerCrypto =
            void 0),
        (e.getBrowerCrypto = n),
        (e.getSubtleCrypto = o),
        (e.isBrowserCryptoAvailable = function () {
          return !!n() && !!o();
        });
    },
    88618: function (t, e, r) {
      "use strict";
      var n = r(83454);
      function o() {
        return (
          "undefined" == typeof document &&
          "undefined" != typeof navigator &&
          "ReactNative" === navigator.product
        );
      }
      function s() {
        return (
          void 0 !== n && void 0 !== n.versions && void 0 !== n.versions.node
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isBrowser = e.isNode = e.isReactNative = void 0),
        (e.isReactNative = o),
        (e.isNode = s),
        (e.isBrowser = function () {
          return !o() && !s();
        });
    },
    1468: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      let n = r(70655);
      n.__exportStar(r(40926), e), n.__exportStar(r(88618), e);
    },
    99003: function (t, e, r) {
      "use strict";
      r.d(e, {
        k: function () {
          return p;
        },
        Z: function () {
          return y;
        },
      });
      var n = r(17187),
        o = r(80699),
        s = r.n(o),
        i = r(85094);
      let a = "INTERNAL_ERROR",
        c = "SERVER_ERROR",
        u = [-32700, -32600, -32601, -32602, -32603],
        h = {
          PARSE_ERROR: { code: -32700, message: "Parse error" },
          INVALID_REQUEST: { code: -32600, message: "Invalid Request" },
          METHOD_NOT_FOUND: { code: -32601, message: "Method not found" },
          INVALID_PARAMS: { code: -32602, message: "Invalid params" },
          [a]: { code: -32603, message: "Internal error" },
          [c]: { code: -32e3, message: "Server error" },
        };
      function d(t) {
        return Object.keys(h).includes(t) ? h[t] : h[c];
      }
      function l(t) {
        return (function (t, e) {
          let r = (function (t) {
            let e = t.match(RegExp(/^\w+:/, "gi"));
            if (e && e.length) return e[0];
          })(t);
          return void 0 !== r && RegExp(e).test(r);
        })(t, "^https?:");
      }
      r(1468), r(35885);
      let f = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
      };
      class p {
        constructor(t, e = !1) {
          if (
            ((this.url = t),
            (this.disableProviderPing = e),
            (this.events = new n.EventEmitter()),
            (this.isAvailable = !1),
            (this.registering = !1),
            !l(t))
          )
            throw Error(
              `Provided URL is not compatible with HTTP connection: ${t}`
            );
          (this.url = t), (this.disableProviderPing = e);
        }
        get connected() {
          return this.isAvailable;
        }
        get connecting() {
          return this.registering;
        }
        on(t, e) {
          this.events.on(t, e);
        }
        once(t, e) {
          this.events.once(t, e);
        }
        off(t, e) {
          this.events.off(t, e);
        }
        removeListener(t, e) {
          this.events.removeListener(t, e);
        }
        async open(t = this.url) {
          await this.register(t);
        }
        async close() {
          if (!this.isAvailable) throw Error("Connection already closed");
          this.onClose();
        }
        async send(t, e) {
          this.isAvailable || (await this.register());
          try {
            let e = (0, i.u)(t),
              r = await s()(
                this.url,
                Object.assign(Object.assign({}, f), { body: e })
              ),
              n = await r.json();
            this.onPayload({ data: n });
          } catch (e) {
            this.onError(t.id, e);
          }
        }
        async register(t = this.url) {
          if (!l(t))
            throw Error(
              `Provided URL is not compatible with HTTP connection: ${t}`
            );
          if (this.registering) {
            let t = this.events.getMaxListeners();
            return (
              (this.events.listenerCount("register_error") >= t ||
                this.events.listenerCount("open") >= t) &&
                this.events.setMaxListeners(t + 1),
              new Promise((t, e) => {
                this.events.once("register_error", (t) => {
                  this.resetMaxListeners(), e(t);
                }),
                  this.events.once("open", () => {
                    if ((this.resetMaxListeners(), void 0 === this.isAvailable))
                      return e(Error("HTTP connection is missing or invalid"));
                    t();
                  });
              })
            );
          }
          (this.url = t), (this.registering = !0);
          try {
            if (!this.disableProviderPing) {
              let e = (0, i.u)({
                id: 1,
                jsonrpc: "2.0",
                method: "test",
                params: [],
              });
              await s()(t, Object.assign(Object.assign({}, f), { body: e }));
            }
            this.onOpen();
          } catch (e) {
            let t = this.parseError(e);
            throw (this.events.emit("register_error", t), this.onClose(), t);
          }
        }
        onOpen() {
          (this.isAvailable = !0),
            (this.registering = !1),
            this.events.emit("open");
        }
        onClose() {
          (this.isAvailable = !1),
            (this.registering = !1),
            this.events.emit("close");
        }
        onPayload(t) {
          if (void 0 === t.data) return;
          let e = "string" == typeof t.data ? (0, i.D)(t.data) : t.data;
          this.events.emit("payload", e);
        }
        onError(t, e) {
          var r, n, o;
          let s = this.parseError(e),
            i = s.message || s.toString(),
            l = {
              id: t,
              jsonrpc: "2.0",
              error:
                ((n = void 0),
                void 0 === (r = i)
                  ? d(a)
                  : ("string" == typeof r &&
                      (r = Object.assign(Object.assign({}, d(c)), {
                        message: r,
                      })),
                    void 0 !== n && (r.data = n),
                    (o = r.code),
                    u.includes(o) &&
                      (r = (function (t) {
                        let e = Object.values(h).find((e) => e.code === t);
                        return e || h[c];
                      })(r.code)),
                    r)),
            };
          this.events.emit("payload", l);
        }
        parseError(t, e = this.url) {
          return t.message.includes("getaddrinfo ENOTFOUND") ||
            t.message.includes("connect ECONNREFUSED")
            ? Error(`Unavailable HTTP RPC url at ${e}`)
            : t;
        }
        resetMaxListeners() {
          this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
        }
      }
      var y = p;
    },
    80699: function (t, e) {
      var r,
        n = "undefined" != typeof self ? self : this,
        o = (function () {
          function t() {
            (this.fetch = !1), (this.DOMException = n.DOMException);
          }
          return (t.prototype = n), new t();
        })();
      (r = o),
        (function (t) {
          var e = {
            searchParams: "URLSearchParams" in r,
            iterable: "Symbol" in r && "iterator" in Symbol,
            blob:
              "FileReader" in r &&
              "Blob" in r &&
              (function () {
                try {
                  return new Blob(), !0;
                } catch (t) {
                  return !1;
                }
              })(),
            formData: "FormData" in r,
            arrayBuffer: "ArrayBuffer" in r,
          };
          if (e.arrayBuffer)
            var n = [
                "[object Int8Array]",
                "[object Uint8Array]",
                "[object Uint8ClampedArray]",
                "[object Int16Array]",
                "[object Uint16Array]",
                "[object Int32Array]",
                "[object Uint32Array]",
                "[object Float32Array]",
                "[object Float64Array]",
              ],
              o =
                ArrayBuffer.isView ||
                function (t) {
                  return t && n.indexOf(Object.prototype.toString.call(t)) > -1;
                };
          function s(t) {
            if (
              ("string" != typeof t && (t = String(t)),
              /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))
            )
              throw TypeError("Invalid character in header field name");
            return t.toLowerCase();
          }
          function i(t) {
            return "string" != typeof t && (t = String(t)), t;
          }
          function a(t) {
            var r = {
              next: function () {
                var e = t.shift();
                return { done: void 0 === e, value: e };
              },
            };
            return (
              e.iterable &&
                (r[Symbol.iterator] = function () {
                  return r;
                }),
              r
            );
          }
          function c(t) {
            (this.map = {}),
              t instanceof c
                ? t.forEach(function (t, e) {
                    this.append(e, t);
                  }, this)
                : Array.isArray(t)
                ? t.forEach(function (t) {
                    this.append(t[0], t[1]);
                  }, this)
                : t &&
                  Object.getOwnPropertyNames(t).forEach(function (e) {
                    this.append(e, t[e]);
                  }, this);
          }
          function u(t) {
            if (t.bodyUsed) return Promise.reject(TypeError("Already read"));
            t.bodyUsed = !0;
          }
          function h(t) {
            return new Promise(function (e, r) {
              (t.onload = function () {
                e(t.result);
              }),
                (t.onerror = function () {
                  r(t.error);
                });
            });
          }
          function d(t) {
            var e = new FileReader(),
              r = h(e);
            return e.readAsArrayBuffer(t), r;
          }
          function l(t) {
            if (t.slice) return t.slice(0);
            var e = new Uint8Array(t.byteLength);
            return e.set(new Uint8Array(t)), e.buffer;
          }
          function f() {
            return (
              (this.bodyUsed = !1),
              (this._initBody = function (t) {
                if (((this._bodyInit = t), t)) {
                  if ("string" == typeof t) this._bodyText = t;
                  else if (e.blob && Blob.prototype.isPrototypeOf(t))
                    this._bodyBlob = t;
                  else if (e.formData && FormData.prototype.isPrototypeOf(t))
                    this._bodyFormData = t;
                  else if (
                    e.searchParams &&
                    URLSearchParams.prototype.isPrototypeOf(t)
                  )
                    this._bodyText = t.toString();
                  else {
                    var r;
                    e.arrayBuffer &&
                    e.blob &&
                    (r = t) &&
                    DataView.prototype.isPrototypeOf(r)
                      ? ((this._bodyArrayBuffer = l(t.buffer)),
                        (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                      : e.arrayBuffer &&
                        (ArrayBuffer.prototype.isPrototypeOf(t) || o(t))
                      ? (this._bodyArrayBuffer = l(t))
                      : (this._bodyText = t =
                          Object.prototype.toString.call(t));
                  }
                } else this._bodyText = "";
                !this.headers.get("content-type") &&
                  ("string" == typeof t
                    ? this.headers.set(
                        "content-type",
                        "text/plain;charset=UTF-8"
                      )
                    : this._bodyBlob && this._bodyBlob.type
                    ? this.headers.set("content-type", this._bodyBlob.type)
                    : e.searchParams &&
                      URLSearchParams.prototype.isPrototypeOf(t) &&
                      this.headers.set(
                        "content-type",
                        "application/x-www-form-urlencoded;charset=UTF-8"
                      ));
              }),
              e.blob &&
                ((this.blob = function () {
                  var t = u(this);
                  if (t) return t;
                  if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                  if (this._bodyArrayBuffer)
                    return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                  if (!this._bodyFormData)
                    return Promise.resolve(new Blob([this._bodyText]));
                  throw Error("could not read FormData body as blob");
                }),
                (this.arrayBuffer = function () {
                  return this._bodyArrayBuffer
                    ? u(this) || Promise.resolve(this._bodyArrayBuffer)
                    : this.blob().then(d);
                })),
              (this.text = function () {
                var t,
                  e,
                  r,
                  n = u(this);
                if (n) return n;
                if (this._bodyBlob)
                  return (
                    (t = this._bodyBlob),
                    (r = h((e = new FileReader()))),
                    e.readAsText(t),
                    r
                  );
                if (this._bodyArrayBuffer)
                  return Promise.resolve(
                    (function (t) {
                      for (
                        var e = new Uint8Array(t), r = Array(e.length), n = 0;
                        n < e.length;
                        n++
                      )
                        r[n] = String.fromCharCode(e[n]);
                      return r.join("");
                    })(this._bodyArrayBuffer)
                  );
                if (!this._bodyFormData) return Promise.resolve(this._bodyText);
                throw Error("could not read FormData body as text");
              }),
              e.formData &&
                (this.formData = function () {
                  return this.text().then(v);
                }),
              (this.json = function () {
                return this.text().then(JSON.parse);
              }),
              this
            );
          }
          (c.prototype.append = function (t, e) {
            (t = s(t)), (e = i(e));
            var r = this.map[t];
            this.map[t] = r ? r + ", " + e : e;
          }),
            (c.prototype.delete = function (t) {
              delete this.map[s(t)];
            }),
            (c.prototype.get = function (t) {
              return (t = s(t)), this.has(t) ? this.map[t] : null;
            }),
            (c.prototype.has = function (t) {
              return this.map.hasOwnProperty(s(t));
            }),
            (c.prototype.set = function (t, e) {
              this.map[s(t)] = i(e);
            }),
            (c.prototype.forEach = function (t, e) {
              for (var r in this.map)
                this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this);
            }),
            (c.prototype.keys = function () {
              var t = [];
              return (
                this.forEach(function (e, r) {
                  t.push(r);
                }),
                a(t)
              );
            }),
            (c.prototype.values = function () {
              var t = [];
              return (
                this.forEach(function (e) {
                  t.push(e);
                }),
                a(t)
              );
            }),
            (c.prototype.entries = function () {
              var t = [];
              return (
                this.forEach(function (e, r) {
                  t.push([r, e]);
                }),
                a(t)
              );
            }),
            e.iterable && (c.prototype[Symbol.iterator] = c.prototype.entries);
          var p = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
          function y(t, e) {
            var r,
              n,
              o = (e = e || {}).body;
            if (t instanceof y) {
              if (t.bodyUsed) throw TypeError("Already read");
              (this.url = t.url),
                (this.credentials = t.credentials),
                e.headers || (this.headers = new c(t.headers)),
                (this.method = t.method),
                (this.mode = t.mode),
                (this.signal = t.signal),
                o ||
                  null == t._bodyInit ||
                  ((o = t._bodyInit), (t.bodyUsed = !0));
            } else this.url = String(t);
            if (
              ((this.credentials =
                e.credentials || this.credentials || "same-origin"),
              (e.headers || !this.headers) && (this.headers = new c(e.headers)),
              (this.method =
                ((n = (r = e.method || this.method || "GET").toUpperCase()),
                p.indexOf(n) > -1 ? n : r)),
              (this.mode = e.mode || this.mode || null),
              (this.signal = e.signal || this.signal),
              (this.referrer = null),
              ("GET" === this.method || "HEAD" === this.method) && o)
            )
              throw TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(o);
          }
          function v(t) {
            var e = new FormData();
            return (
              t
                .trim()
                .split("&")
                .forEach(function (t) {
                  if (t) {
                    var r = t.split("="),
                      n = r.shift().replace(/\+/g, " "),
                      o = r.join("=").replace(/\+/g, " ");
                    e.append(decodeURIComponent(n), decodeURIComponent(o));
                  }
                }),
              e
            );
          }
          function b(t, e) {
            e || (e = {}),
              (this.type = "default"),
              (this.status = void 0 === e.status ? 200 : e.status),
              (this.ok = this.status >= 200 && this.status < 300),
              (this.statusText = "statusText" in e ? e.statusText : "OK"),
              (this.headers = new c(e.headers)),
              (this.url = e.url || ""),
              this._initBody(t);
          }
          (y.prototype.clone = function () {
            return new y(this, { body: this._bodyInit });
          }),
            f.call(y.prototype),
            f.call(b.prototype),
            (b.prototype.clone = function () {
              return new b(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new c(this.headers),
                url: this.url,
              });
            }),
            (b.error = function () {
              var t = new b(null, { status: 0, statusText: "" });
              return (t.type = "error"), t;
            });
          var m = [301, 302, 303, 307, 308];
          (b.redirect = function (t, e) {
            if (-1 === m.indexOf(e)) throw RangeError("Invalid status code");
            return new b(null, { status: e, headers: { location: t } });
          }),
            (t.DOMException = r.DOMException);
          try {
            new t.DOMException();
          } catch (e) {
            (t.DOMException = function (t, e) {
              (this.message = t), (this.name = e);
              var r = Error(t);
              this.stack = r.stack;
            }),
              (t.DOMException.prototype = Object.create(Error.prototype)),
              (t.DOMException.prototype.constructor = t.DOMException);
          }
          function g(r, n) {
            return new Promise(function (o, s) {
              var i = new y(r, n);
              if (i.signal && i.signal.aborted)
                return s(new t.DOMException("Aborted", "AbortError"));
              var a = new XMLHttpRequest();
              function u() {
                a.abort();
              }
              (a.onload = function () {
                var t,
                  e,
                  r = {
                    status: a.status,
                    statusText: a.statusText,
                    headers:
                      ((t = a.getAllResponseHeaders() || ""),
                      (e = new c()),
                      t
                        .replace(/\r?\n[\t ]+/g, " ")
                        .split(/\r?\n/)
                        .forEach(function (t) {
                          var r = t.split(":"),
                            n = r.shift().trim();
                          if (n) {
                            var o = r.join(":").trim();
                            e.append(n, o);
                          }
                        }),
                      e),
                  };
                r.url =
                  "responseURL" in a
                    ? a.responseURL
                    : r.headers.get("X-Request-URL");
                var n = "response" in a ? a.response : a.responseText;
                o(new b(n, r));
              }),
                (a.onerror = function () {
                  s(TypeError("Network request failed"));
                }),
                (a.ontimeout = function () {
                  s(TypeError("Network request failed"));
                }),
                (a.onabort = function () {
                  s(new t.DOMException("Aborted", "AbortError"));
                }),
                a.open(i.method, i.url, !0),
                "include" === i.credentials
                  ? (a.withCredentials = !0)
                  : "omit" === i.credentials && (a.withCredentials = !1),
                "responseType" in a && e.blob && (a.responseType = "blob"),
                i.headers.forEach(function (t, e) {
                  a.setRequestHeader(e, t);
                }),
                i.signal &&
                  (i.signal.addEventListener("abort", u),
                  (a.onreadystatechange = function () {
                    4 === a.readyState &&
                      i.signal.removeEventListener("abort", u);
                  })),
                a.send(void 0 === i._bodyInit ? null : i._bodyInit);
            });
          }
          (g.polyfill = !0),
            r.fetch ||
              ((r.fetch = g),
              (r.Headers = c),
              (r.Request = y),
              (r.Response = b)),
            (t.Headers = c),
            (t.Request = y),
            (t.Response = b),
            (t.fetch = g),
            Object.defineProperty(t, "__esModule", { value: !0 });
        })({}),
        (o.fetch.ponyfill = !0),
        delete o.fetch.polyfill,
        ((e = o.fetch).default = o.fetch),
        (e.fetch = o.fetch),
        (e.Headers = o.Headers),
        (e.Request = o.Request),
        (e.Response = o.Response),
        (t.exports = e);
    },
    46160: function (t, e, r) {
      "use strict";
      r.d(e, {
        r: function () {
          return s;
        },
      });
      var n = r(17187),
        o = r(15359);
      class s extends o.IJsonRpcProvider {
        constructor(t) {
          super(t),
            (this.events = new n.EventEmitter()),
            (this.hasRegisteredEventListeners = !1),
            (this.connection = this.setConnection(t)),
            this.connection.connected && this.registerEventListeners();
        }
        async connect(t = this.connection) {
          await this.open(t);
        }
        async disconnect() {
          await this.close();
        }
        on(t, e) {
          this.events.on(t, e);
        }
        once(t, e) {
          this.events.once(t, e);
        }
        off(t, e) {
          this.events.off(t, e);
        }
        removeListener(t, e) {
          this.events.removeListener(t, e);
        }
        async request(t, e) {
          return this.requestStrict(
            (0, o.formatJsonRpcRequest)(
              t.method,
              t.params || [],
              t.id || (0, o.getBigIntRpcId)().toString()
            ),
            e
          );
        }
        async requestStrict(t, e) {
          return new Promise(async (r, n) => {
            if (!this.connection.connected)
              try {
                await this.open();
              } catch (t) {
                n(t);
              }
            this.events.on(`${t.id}`, (t) => {
              (0, o.isJsonRpcError)(t) ? n(t.error) : r(t.result);
            });
            try {
              await this.connection.send(t, e);
            } catch (t) {
              n(t);
            }
          });
        }
        setConnection(t = this.connection) {
          return t;
        }
        onPayload(t) {
          this.events.emit("payload", t),
            (0, o.isJsonRpcResponse)(t)
              ? this.events.emit(`${t.id}`, t)
              : this.events.emit("message", { type: t.method, data: t.params });
        }
        onClose(t) {
          t &&
            3e3 === t.code &&
            this.events.emit(
              "error",
              Error(
                `WebSocket connection closed abnormally with code: ${t.code} ${
                  t.reason ? `(${t.reason})` : ""
                }`
              )
            ),
            this.events.emit("disconnect");
        }
        async open(t = this.connection) {
          (this.connection === t && this.connection.connected) ||
            (this.connection.connected && this.close(),
            "string" == typeof t &&
              (await this.connection.open(t), (t = this.connection)),
            (this.connection = this.setConnection(t)),
            await this.connection.open(),
            this.registerEventListeners(),
            this.events.emit("connect"));
        }
        async close() {
          await this.connection.close();
        }
        registerEventListeners() {
          this.hasRegisteredEventListeners ||
            (this.connection.on("payload", (t) => this.onPayload(t)),
            this.connection.on("close", (t) => this.onClose(t)),
            this.connection.on("error", (t) => this.events.emit("error", t)),
            this.connection.on("register_error", (t) => this.onClose()),
            (this.hasRegisteredEventListeners = !0));
        }
      }
    },
    35885: function (t, e, r) {
      "use strict";
      var n = r(74057);
      r.o(n, "isHttpUrl") &&
        r.d(e, {
          isHttpUrl: function () {
            return n.isHttpUrl;
          },
        }),
        r.o(n, "isLocalhostUrl") &&
          r.d(e, {
            isLocalhostUrl: function () {
              return n.isLocalhostUrl;
            },
          }),
        r.o(n, "isReactNative") &&
          r.d(e, {
            isReactNative: function () {
              return n.isReactNative;
            },
          }),
        r.o(n, "isWsUrl") &&
          r.d(e, {
            isWsUrl: function () {
              return n.isWsUrl;
            },
          });
      var o = r(71948);
      r.o(o, "isHttpUrl") &&
        r.d(e, {
          isHttpUrl: function () {
            return o.isHttpUrl;
          },
        }),
        r.o(o, "isLocalhostUrl") &&
          r.d(e, {
            isLocalhostUrl: function () {
              return o.isLocalhostUrl;
            },
          }),
        r.o(o, "isReactNative") &&
          r.d(e, {
            isReactNative: function () {
              return o.isReactNative;
            },
          }),
        r.o(o, "isWsUrl") &&
          r.d(e, {
            isWsUrl: function () {
              return o.isWsUrl;
            },
          });
    },
    74057: function () {},
    71948: function () {},
    15359: function (t, e, r) {
      "use strict";
      r.d(e, {
        IJsonRpcProvider: function () {
          return y;
        },
        formatJsonRpcError: function () {
          return l;
        },
        formatJsonRpcRequest: function () {
          return h;
        },
        formatJsonRpcResult: function () {
          return d;
        },
        getBigIntRpcId: function () {
          return u;
        },
        isJsonRpcError: function () {
          return E;
        },
        isJsonRpcRequest: function () {
          return b;
        },
        isJsonRpcResponse: function () {
          return m;
        },
        isJsonRpcResult: function () {
          return g;
        },
        payloadId: function () {
          return c;
        },
      });
      let n = "INTERNAL_ERROR",
        o = "SERVER_ERROR",
        s = [-32700, -32600, -32601, -32602, -32603],
        i = {
          PARSE_ERROR: { code: -32700, message: "Parse error" },
          INVALID_REQUEST: { code: -32600, message: "Invalid Request" },
          METHOD_NOT_FOUND: { code: -32601, message: "Method not found" },
          INVALID_PARAMS: { code: -32602, message: "Invalid params" },
          [n]: { code: -32603, message: "Internal error" },
          [o]: { code: -32e3, message: "Server error" },
        };
      function a(t) {
        return Object.keys(i).includes(t) ? i[t] : i[o];
      }
      function c(t = 3) {
        let e = Date.now() * Math.pow(10, t);
        return e + Math.floor(Math.random() * Math.pow(10, t));
      }
      function u(t = 6) {
        return BigInt(c(t));
      }
      function h(t, e, r) {
        return { id: r || c(), jsonrpc: "2.0", method: t, params: e };
      }
      function d(t, e) {
        return { id: t, jsonrpc: "2.0", result: e };
      }
      function l(t, e, r) {
        var c, u;
        return {
          id: t,
          jsonrpc: "2.0",
          error:
            void 0 === (c = e)
              ? a(n)
              : ("string" == typeof c &&
                  (c = Object.assign(Object.assign({}, a(o)), { message: c })),
                void 0 !== r && (c.data = r),
                (u = c.code),
                s.includes(u) &&
                  (c = (function (t) {
                    let e = Object.values(i).find((e) => e.code === t);
                    return e || i[o];
                  })(c.code)),
                c),
        };
      }
      r(1468);
      class f {}
      class p extends f {
        constructor() {
          super();
        }
      }
      class y extends p {
        constructor(t) {
          super();
        }
      }
      function v(t) {
        return (
          "object" == typeof t &&
          "id" in t &&
          "jsonrpc" in t &&
          "2.0" === t.jsonrpc
        );
      }
      function b(t) {
        return v(t) && "method" in t;
      }
      function m(t) {
        return v(t) && (g(t) || E(t));
      }
      function g(t) {
        return "result" in t;
      }
      function E(t) {
        return "error" in t;
      }
    },
    85094: function (t, e, r) {
      "use strict";
      function n(t) {
        if ("string" != typeof t)
          throw Error(`Cannot safe json parse value of type ${typeof t}`);
        try {
          return JSON.parse(t);
        } catch (e) {
          return t;
        }
      }
      function o(t) {
        return "string" == typeof t ? t : JSON.stringify(t);
      }
      r.d(e, {
        D: function () {
          return n;
        },
        u: function () {
          return o;
        },
      });
    },
    57026: function (t) {
      "use strict";
      t.exports = function () {
        throw Error(
          "ws does not work in the browser. Browser clients must use the native WebSocket object"
        );
      };
    },
  },
]);
