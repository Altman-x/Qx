// 2024-01-23 14:05
const url = $request.url;
const scriptEnvironment = typeof $task != 'undefined' ? 'Surge' : (typeof $loon != 'undefined' ? 'Loon' : (typeof $httpClient != 'undefined' ? 'Qx' : 'Unknown'));

if (!$response.body || scriptEnvironment === 'Unknown') {
  $done({});
}

/******************************

ppx


*******************************

^https:\/\/.+\.pipix\.com\/bds\/feed\/channel_list\/ url script-response-body https://raw.githubusercontent.com/Altman-x/Qx/main/PPX_own.js?token=GHSAT0AAAAAACNJAQKAVRPBA6Y2YGR24SNQZNQZFQQ
^https:\/\/.+\.pipix\.com\/bds\/user\/check_in\/ url script-response-body https://raw.githubusercontent.com/Altman-x/Qx/main/PPX_own.js?token=GHSAT0AAAAAACNJAQKAVRPBA6Y2YGR24SNQZNQZFQQ

hostname = *.pipix.com

*******************************/
