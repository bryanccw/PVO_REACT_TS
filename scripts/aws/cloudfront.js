/**
 * Simple CloudFront function to re-route requests from /v2/ind to /v2/ind/index.html
 * As of time of writing, CloudFront function only supports ES5
 */
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  if (!uri.includes('.')) {
    request.uri = uri.replace(/v2\/ind.*/, 'v2/ind/index.html');
  }

  return request;
}
