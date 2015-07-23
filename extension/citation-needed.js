(function() {
    var m, i, j, c, html,
        ps = document.querySelectorAll('p,h1,h2,h3,h4,h5,li'),
        reg = /(officials?[^\.,]*? sa(?:y|id)|according to[^\.,]*? officials?|(said) (?:an?|the)[^\.,]*? officials?|condition of anonymity)/g,
        css = 'p > span.citation-needed {' +
                "background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHFJREFUeNpUjWENgCAUhA/mfyNIJAOwqQ1soEZx0kMjGEEbSILngc9N2T72+O4AyIKLjCKCH8kxswBKMiCYHu8Kps6OmUlNPUTitLKTikwmPccbh4pZCw054cUVKlqyaoCPg82jl417p9/EPD8OtwADAOKnLmQFLo8dAAAAAElFTkSuQmCC') bottom repeat-x;" +
                'background-size: 4px 3px; ' +
                ' }\np > span.citation-needed:hover:after {' +
                ' content: "[citation needed]"; font-size: 70%;'+
                ' position: relative; top: -0.5em; font-family: sans-serif;' +
                ' font-style: italic; opacity: 0.5;' +
                ' }',
        style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet){
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
    document.head.appendChild(style);
    for (i=0; i<ps.length; i++) {
        html = ps[i].innerHTML;
        c = false;
        if ((m = html.match(reg))) {
            c = true;
            for (j=0; j<m.length; j++) {
                html = html.replace(m[j], '<span class="citation-needed">'+m[j]+'</span>');
            }
        }
        if (c) ps[i].innerHTML = html;
    }
})();