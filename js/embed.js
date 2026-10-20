function embedUrl(url) {
  if (window.self !== window.top) return;
  document.open();
  document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Embed</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body { width: 100%; height: 100%; overflow: hidden; background: #fff; font-family: sans-serif; }
        iframe { width: 100vw; height: 100vh; border: none; display: block; }
        .error-msg { position: absolute; top: 10px; left: 10px; color: red; z-index: -1; }
      </style>
    </head>
    <body>
      <div class="error-msg">Failed to load: ${url} (Check if file path exists or use a local server)</div>
      <iframe src="${url}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </body>
    </html>
  `);
  document.close();
}