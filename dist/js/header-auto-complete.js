var HeaderAutoComplete = function(x, y) {
  $(function() {
    var mainArr = [
      'Accept-Charset',
      'Accept-Language',
      'Accept-Ranges',
      'Access-Control-Request-Headers',
      'Authorization',
      'Accept',
      'Accept-Encoding',
      'Access-Control-Request-Method',
      'Cache-Control',
      'Connection',
      'Content-Transfer-Encoding',
      'Content-Language',
      'Content-Length',
      'Content-Type',
      'Cookie',
      'Cookie2',
      'Date',
      'Expect',
      'From',
      'Host',
      'If-Modified-Since',
      'If-Unmodified-Since',
      'If-Match',
      'If-None-Match',
      'If-Range',
      'Keep-Alive',
      'Origin',
      'Pragma',
      'Proxy-Authorization',
      'Range',
      'Referer',
      'Te',
      'Trailer',
      'Transfer-Encoding',
      'Upgrade',
      'User-Agent',
      'Via'
    ];
    // binding header key source
    $(x).autocomplete({source: mainArr});

    var subArr = [
      [
        'ISO-2022-JP',
        'ISO-2022-JP-2',
        'ISO-2022-KR',
        'ISO-8859-1',
        'ISO-8859-10',
        'ISO-8859-11',
        'ISO-8859-12',
        'ISO-8859-13',
        'US-ASCII',
        'UTF-16',
        'UTF-32',
        'UTF-8'
      ],
      [
        'cs-CZ',
        'de',
        'de-AT',
        'de-CH',
        'de-DE',
        'en',
        'en-AU',
        'en-GB',
        'en-US',
        'es',
        'fr',
        'fr-CA',
        'fr-CH',
        'it',
        'ja',
        'ja-JP',
        'jp',
        'ko',
        'ko-KR',
        'pt',
        'ru',
        'zh',
        'zh-CN',
        'zh-TW'
      ],
      [
        'bytes', 'none'
      ],
      [],
      [],
      [
        'application/*',
        'application/atom+xml',
        'application/ecmascript',
        'application/gzip',
        'application/hal+json',
        'application/javascript',
        'application/json',
        'application/mp4',
        'image/*',
        'image/gif',
        'image/jpeg',
        'image/png',
        'image/svg+xml',
        'image/tiff',
        'message/*',
        'message/CPIM',
        'message/partial',
        'message/sip',
        'message/tracking-status',
        'model/*',
        'model/mesh',
        'multipart/*',
        'text/*',
        'text/css',
        'text/csv',
        'text/dns',
        'text/enriched',
        'text/html',
        'text/plain',
        'text/richtext',
        'video/*',
        'video/3gpp',
        'video/DV',
        'video/H261',
        'video/H263',
        'video/H264',
        'video/JPEG',
        'video/jpeg2000'
      ],
      [
        'compress',
        'deflate',
        'exi',
        'gzip',
        'identity',
        'pack200-gzip'
      ],
      [],
      [
        'max-age=',
        'max-stale=',
        'min-fresh=',
        'no-cache',
        'no-store',
        'no-transform',
        'only-if-cached'
      ],
      [],
      [],
      [
        'cs-CZ',
        'de',
        'de-AT',
        'de-CH',
        'de-DE',
        'en',
        'en-AU',
        'en-GB',
        'en-US',
        'es',
        'fr',
        'fr-CA',
        'fr-CH',
        'it',
        'ja',
        'ja-JP',
        'jp',
        'ko',
        'ko-KR',
        'pt',
        'ru',
        'zh',
        'zh-CN',
        'zh-TW'
      ],
      [],
      [
        'application/atom+xml',
        'application/ecmascript',
        'application/gzip',
        'application/hal+json',
        'application/javascript',
        'application/json',
        'application/mp4',
        'application/octet-stream',
        'image/gif',
        'image/jpeg',
        'image/png',
        'image/svg+xml',
        'image/tiff',
        'message/CPIM',
        'message/partial',
        'message/sip',
        'message/tracking-status',
        'model/mesh',
        'multipart/byteranges',
        'multipart/digest',
        'multipart/encrypted',
        'text/css',
        'text/csv',
        'text/dns',
        'text/enriched',
        'text/html',
        'text/plain',
        'text/richtext',
        'text/rtf',
        'video/3gpp',
        'video/DV',
        'video/H261',
        'video/H263',
        'video/H264',
        'video/JPEG',
        'video/jpeg2000',
        'video/mp4'
      ],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [
        'chunked', 'compress', 'deflate', 'gzip', 'identity'
      ],
      [],
      [],
      []
    ];

    // binding header value source
    $(y).autocomplete({
      source: function(request, response) {
        var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
        var mainTagVal = $(x).val();
        var index = mainArr.indexOf(mainTagVal);
        var subTagSize = subArr.length;
        var subArray = new Array([]);
        if (index != -1 && index < subTagSize) {
          subArray = subArr[index];
        }

        // filter
        response($.grep(subArray, function(value) {
          value = value.label || value.value || value;
          return matcher.test(value) || matcher.test(value);
        }));
      }
    });
  });
};
