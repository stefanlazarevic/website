import env from './src/config/env.client';

function singleLineString(strings, ...values) {
    // Interweave the strings with the
    // substitution vars first.
    let output = '';
    for (let i = 0; i < values.length; i++) {
        output += strings[i] + values[i];
    }
    output += strings[values.length];

    // Split on newlines.
    let lines = output.split(/(?:\r\n|\n|\r)/);

    // Rip out the leading whitespace.
    return lines.map((line) => {
        return line.replace(/(^\s+)|(<!--(.*?)-->)/gm, '');
    }).join('').trim();
}

export default (options) =>
    singleLineString`<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <!-- General metadata -->

    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="author" content="${env.APP_AUTHOR}" />
    <meta name="name" content="Stefan Lazarevic - Web Developer">
    <meta name="short_name" content="Stefan L." />
    <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png">
    <meta name="theme-color" content="#3d3d57">

    ${options.style}
    ${options.meta}
    ${options.title}

    <!-- Apple metadata -->
    <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png">
    <link rel="apple-touch-icon" href="/icons/apple-icon.png">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">

    <!-- Microsoft metadata. -->
    <meta name="msapplication-TileColor" content="#3d3d57">
    <meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png">

    <link href="/css/flexbox-layout.css" rel="stylesheet" />
    <link href="/css/styles.min.css" rel="stylesheet" />

    ${options.links}

    <link rel="manifest" href="/manifest.json">
    </head>
    <body>
    <div id="app">${options.body}</div>
    <script>
        <!--
        (function() {
            var link = document.createElement('link');
            var head = document.getElementsByTagName('head')[0];
            link.href = "https://use.fontawesome.com/releases/v5.3.1/css/all.css";
            link.type = "text/css";
            link.rel = "stylesheet";
            head.appendChild(link);
        })();
        -->
        (function() {
            var link = document.createElement('link');
            var head = document.getElementsByTagName('head')[0];
            link.href = "https://fonts.googleapis.com/css?family=Open+Sans";
            link.type = "text/css";
            link.rel = "stylesheet";
            head.appendChild(link);
        })();
        (function() {
            var links = document.querySelectorAll('[data-href]');
            links.forEach(l => l.addEventListener('click', e => window.location = l.dataset.href));
        })();
    </script>
    <script defer src="/js/client.min.js"></script>
</body>
</html>`
