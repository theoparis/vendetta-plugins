(function(c,i,s,e){"use strict";function a(){const t=/client-analytics\.braintreegateway\.com|discord\.com\/api\/v9\/(science|track)|app\.adjust\..*|.*\.ingest\.sentry\.io/;return i.instead("send",XMLHttpRequest.prototype,function(n,g){var r;if(!t.test((r=this.__sentry_xhr__)===null||r===void 0?void 0:r.url))return g.apply(this,n)})}function u(){const t={};try{Object.keys(console).forEach(function(n){t[n]=console[n],console[n]=console[n].__sentry_original__??console[n]})}catch(n){s.logger.log("Failed to de-sentrify console functions!",n)}return function(){return Object.keys(console).forEach(function(n){return console[n]=t[n]})}}const o=function(t,n){return i.instead(t,n,function(){})},d=e.findByProps("AnalyticsActionHandlers"),f=e.findByProps("encodeProperties","track"),l=e.findByProps("getVoiceStateMetadata"),p=e.findByProps("submitLiveCrashReport"),y=e.findByProps("_metrics");function h(){const t=[...["handleTrack","handleFingerprint"].map(function(n){return o(n,d.AnalyticsActionHandlers)}),o("track",f),o("trackWithMetadata",l),o("submitLiveCrashReport",p),o("push",y._metrics)];return function(){return t.forEach(function(n){return n()})}}const _=[a(),u(),h()];function v(){_.forEach(function(t){return t()})}return c.onUnload=v,c})({},vendetta.patcher,vendetta,vendetta.metro);