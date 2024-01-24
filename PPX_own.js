// 2024-01-23 14:05
const url = $request.url;
const scriptEnvironment = typeof $task != 'undefined' ? 'Surge' : (typeof $loon != 'undefined' ? 'Loon' : (typeof $httpClient != 'undefined' ? 'Qx' : 'Unknown'));

if (!$response.body || scriptEnvironment === 'Unknown') {
  $done({});
}

