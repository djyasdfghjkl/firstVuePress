/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "563b31d04900f9551aebefa6141c5ad6"
  },
  {
    "url": "assets/css/0.styles.c986e881.css",
    "revision": "a42f4bd6b90ab87430d2b9ff5d1dc994"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.d4b92052.js",
    "revision": "84dae207cecb211ebcb6357182805778"
  },
  {
    "url": "assets/js/10.6b79bd4b.js",
    "revision": "7b19d008056ecdcf504b53bae609b322"
  },
  {
    "url": "assets/js/11.b9e832f1.js",
    "revision": "867b178e0fe337d950b7313bd0ff7fd0"
  },
  {
    "url": "assets/js/12.30131b69.js",
    "revision": "b08a1d4e7d376966c0fb4f7efd96313c"
  },
  {
    "url": "assets/js/13.d3059b5b.js",
    "revision": "e6f24b5c2efd47346c6c52e9a6d160a6"
  },
  {
    "url": "assets/js/14.e91c67d0.js",
    "revision": "7d55bfe1b322cd36c30635a3c3217c5e"
  },
  {
    "url": "assets/js/15.77c1dcfc.js",
    "revision": "07cfd5445103ae2beed8109a01be1915"
  },
  {
    "url": "assets/js/16.8e39ac90.js",
    "revision": "5efac7b825b1d840f231ba40626a9c45"
  },
  {
    "url": "assets/js/17.6ac66727.js",
    "revision": "142f6e88cbec190daf648effaaf004f4"
  },
  {
    "url": "assets/js/18.811f2669.js",
    "revision": "086235dc9aa06aa40f207ba5daaf0207"
  },
  {
    "url": "assets/js/4.d5083a5c.js",
    "revision": "736b52e98da51b38ed5a28430ca94910"
  },
  {
    "url": "assets/js/5.c2820dc6.js",
    "revision": "5e0d19f3a4d51708bd55401e4a3ce910"
  },
  {
    "url": "assets/js/6.a5cd173d.js",
    "revision": "6534dd4a2db6ad8bb0fe76c27e370f8a"
  },
  {
    "url": "assets/js/7.5878f3ad.js",
    "revision": "8b0941d36948b3c96dae41cb38879a89"
  },
  {
    "url": "assets/js/8.44d8e251.js",
    "revision": "4c85e3f125aaf9efbed15076a9ca3242"
  },
  {
    "url": "assets/js/9.d14ae279.js",
    "revision": "afdcd6b807f02bf91e666289ab6fdbc5"
  },
  {
    "url": "assets/js/app.35db763b.js",
    "revision": "7115fd802ccbe342bb6774dbea1ffa88"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.7597310a.js",
    "revision": "4e99e0a52737730379809c6486767d89"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "e169204e8a84bf4c9f6fb7da34b152ef"
  },
  {
    "url": "categories/java/index.html",
    "revision": "0a8f0ff605520775e3562bb7b0cf9355"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "6b32b531d706bdf703f8d55db43a8c67"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "ecc23551efb38614559cb2b509f472bf"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "98a5c54e33fe8ce2793653d030f871f9"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "a0a9ef600cee92c9ce13c7375578fa74"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "b36906a29f106e74c0d47d10ae6c7d53"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "7a532f02a1a3170c39f5cb121048428b"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "6269dfcdd2a705770c4b0d1e8d5d1120"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "8dc130010dc40069b6471a4ac79d8755"
  },
  {
    "url": "tags/js/index.html",
    "revision": "1ea85f2127ed69645d3c9f27b0e4aa54"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "bab624b5ddb48c5aa01c73dd6f43fa15"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "ed1324c141b44b7e842cfa6ac20fa32c"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "77e22cdaa61145e6233ea7038f10db1c"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "e360814ea4ceec3f0ef3db9f34103592"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "16574043e4eece258f5e1507ee7826ff"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "f12fcc7a7ded7f44578e68eb829232f0"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "0ede6ed7509c6310c4e442b2049d7a04"
  },
  {
    "url": "timeline/index.html",
    "revision": "647e5bbed2d2e4bbec3ed8e4389849db"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "0ad248257582ddba6320dea52968c348"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "981eed78ed0845925370589beda2359d"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "a5f2fb7bdf214de90e7b374b2436ca3a"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "fcead1fd863fa74561bfbcc454cb1d39"
  },
  {
    "url": "生活分享/life.html",
    "revision": "8d9a3e4d71de17397784d8420ba16dc5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
