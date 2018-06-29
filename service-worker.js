/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["Assets/bibliotheque/JSON/action.json","f8bc5d0e32ec6fbbe1a232ff575ffe10"],["Assets/bibliotheque/JSON/comedie.json","22cbf73a8592012abc8728f8bee793b4"],["Assets/bibliotheque/JSON/movies.json","c39a243aeb60b21ab9d359087be15545"],["Assets/bibliotheque/JSON/scifi.json","757d764ec8a8dcb33acee8e6cfc03c0b"],["Assets/css/style.css","91f36df7fa25a49b8f3d9293d0059459"],["Assets/css/style.min.css","0f8fd7e13403a889811385dac135be35"],["Assets/images/action/TombRaider-2018-action.jpg","2210c7f68839817759feb75e8afcafe0"],["Assets/images/action/avengersinfinitywar-2018-action.jpg","15fafdedce10b3d2f128084b6da58456"],["Assets/images/action/deadpool-2016-action.jpg","d23eb1d25a21cf2f1e6a4a127e3af665"],["Assets/images/action/deadpool2-2018-action.jpg","338a3acb91e871c6bcee8a9c3c8f799b"],["Assets/images/action/gijoe.jpg","cbe8f030c2074b51f58d37a5e7bc5347"],["Assets/images/action/jurassicworld2-2018-action.jpg","4125699cc6bacf1fa12f5800b93992fc"],["Assets/images/action/mazerunner3-2018-action.jpeg","1125d9540004b858a216661fda8255d6"],["Assets/images/allezcine-192.png","f0fa95756826068403dfeec52fd6dd8f"],["Assets/images/allezcine-512.png","88218a86e511771d9d15f94b5c2ade22"],["Assets/images/aventure/La-Planète-des-singes-les-origines-affiche-cinema.jpg","898ebc939dba01b6b4e9fe18a7f82147"],["Assets/images/aventure/lesdeuxtours-2002-aventure.jpg","70a93fadd64024cc19823202186dc3b1"],["Assets/images/comedie/Survivestyle5-2004-comedie.jpg","0577b93654886419df9ca9aa3e5eb5f3"],["Assets/images/comedie/WhatWeDoInTheShadows-2014-comedie.jpg","1bd64d0f8c424193a9d5dbc687d2dea4"],["Assets/images/comedie/batmanmovie-2017-comedie.jpg","f500614ad3574ea531c9e8a20f5523e2"],["Assets/images/comedie/intouchables-2011-comedie.jpg","ef1bd465346d1aa2e3be999720d15226"],["Assets/images/comedie/jumanji-2018-comedie.jpg","e77dbbd9c3b573d7fc35c8d3e044d226"],["Assets/images/comedie/swissarmyman-2016-comedie.jpg","5f8224d8d43b36a66c197eeb4bd4864f"],["Assets/images/comedie/zoolander-2001-comedie.jpg","14fdef0e95ee53aeaad0d8d38b0f99c4"],["Assets/images/deadpool2.jpg","f5039950a3ab48ff1d7c2f505dfdfdb2"],["Assets/images/dramatique/lepatientanglais-1996-dramatique.jpg","388096519d756894eeff4853ee36d5a4"],["Assets/images/dramatique/thefall-2006-dramatique.jpg","bbc700e4f0c9d3fe9560ed8cadf0277b"],["Assets/images/exorcism.jpg","3e0aef54a6ecf4150b635e3f5e3986e8"],["Assets/images/fantastique/Le-Hobbit-la-desolation-de-Smaug.jpg","6bc24b98c8ad6e001e61095c4abf86ff"],["Assets/images/fantastique/TheGreatestShowman-2018-fantastique.jpg","8e6fa1ea7531c809703723c496b274ea"],["Assets/images/historique/gladiator.jpg","87485125be904d7f5a733b663b70224d"],["Assets/images/mazerunner3.jpg","4efc53b10e16f2ee24e39d78d626853b"],["Assets/images/murder-on-the-orient-express.jpg","1289506b119c538a2756423a3f605d52"],["Assets/images/scifi/inception-2010-scifi.jpg","2f367b15507f6938a57765991bc33949"],["Assets/images/scifi/matrix.jpg","c6de25f7414febdaa704069346b32672"],["Assets/images/scifi/pacificrimuprising-2018-scifi.jpg","0a9b41a300caa408cebc44984417c31b"],["Assets/images/scifi/starwarsempire-1980-scifi.jpg","6a6c65cfdf4d6b42258840e7fbd7b211"],["Assets/images/scifi/starwarsthelastjedi-2018-scifi.jpeg","3c40210728128d6de874ffba5e9e9e40"],["Assets/images/thriller/hostel-2005-thriller.jpg","fe2d26fd855a3fc64352ce5c4d35bf06"],["Assets/images/thriller/seven-1995-thriller.jpg","c327ade356c3dda4bca1eb653b84d682"],["Assets/images/thriller/shutterisland-2010-thriller.jpg","0cf8822af62289cc261e2d37fa4ac857"],["Assets/js/app.js","6d3d0effbcac1450f55875d1439a3a1f"],["README.md","98f5d949db64fef609112be9f576e1d6"],["favicon.png","b745d05b2e52bf7eab7ea3d1c818355d"],["index.html","bdc765a790f0d3e2a096156b67a465fb"],["manifest.json","a3c29124485d6cb7e0b62078a49d51ed"],["newsletter.html","e4b191e5cdbbfbaa491eafc19b4fb016"],["style2.css","8368dd0551ab622c8b795eff62a05c8a"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







