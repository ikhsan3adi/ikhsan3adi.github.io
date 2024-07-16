import { marked, Renderer } from 'marked';

export const renderer = (baseUrl: string) => {
  const renderer: Renderer = new marked.Renderer();

  renderer.heading = (text, level) => {
    return `<h${level} class="my-4 font-jetbrains dark:text-white">${text}</h${level}>`;
  };

  renderer.paragraph = (text) => {
    return `<span class="text-slate-600 dark:text-slate-300 mb-2">${text}</span><br>`;
  };

  renderer.strong = (text) => {
    return `<span class="font-bold text-black dark:text-white">${text}</span>`;
  };

  renderer.list = (body, ordered) => {
    const type = ordered ? 'ol' : 'ul';
    return '<div class="my-4"><' + type + 'start="0">\n' + body + '</' + type + '></div>\n';
  };

  renderer.listitem = (text) => {
    return `<li class="mb-2">${text}</li>`;
  };

  renderer.image = (href, title, text) => {
    return `<img class="my-4" src=${href} alt=${title ?? text} />`;
  };

  renderer.table = (header, body) => {
    if (body) body = `<tbody>${body}</tbody>`;

    return (
      '<table class="border-collapse border border-slate-500">\n' +
      '<thead>\n' +
      header +
      '</thead>\n' +
      body +
      '</table>\n'
    );
  };

  renderer.tablecell = (content, flags) => {
    const type = flags.header ? 'th' : 'td';
    const tag = flags.align
      ? `<${type} align="${flags.align}" class="border-collapse border border-slate-500 px-4 py-2">`
      : `<${type} class="border-collapse border border-slate-500 px-4 py-2">`;
    return tag + content + `</${type}>\n`;
  };

  renderer.link = (href, title, text) => {
    if (href === null) {
      return text;
    }

    if (!href.startsWith('http') || href.startsWith('./')) {
      href = new URL(href, baseUrl).toString();
    }

    let out = '<a href="' + href + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out +=
      ' class="text-blue-500 dark:text-sky-500 hover:text-blue-300 dark:hover:text-sky-300 hover:underline">' +
      text +
      '</a>';
    return out;
  };

  renderer.codespan = (code) => {
    return `<pre class="inline-block bg-slate-200 dark:bg-slate-700 px-2 py-0.5 mb-4"><code class="text-text dark:text-slate-50">${code}</code></pre>`;
  };

  renderer.html = (html, block) => {
    if (html.includes('<img')) {
      const regex = /src="([^"]+?)"/g;
      const hrefs = html.match(regex) ?? [];

      for (const href of hrefs) {
        const hrefVal = href.match(/src="([^"]+?)"/)?.[1];

        if (hrefVal && (!hrefVal.startsWith('http') || hrefVal.startsWith('./'))) {
          const newHref = new URL(hrefVal, baseUrl).toString();
          html = html.replace(href, `src="${newHref}"`);
        }
      }
    }
    if (html.includes('href=')) {
      const regex = /href="([^"]+?)"/g;
      const hrefs = html.match(regex) ?? [];

      for (const href of hrefs) {
        const hrefVal = href.match(/href="([^"]+?)"/)?.[1];

        if (hrefVal && (!hrefVal.startsWith('http') || hrefVal.startsWith('./'))) {
          const newHref = new URL(hrefVal, baseUrl).toString();
          html = html.replace(href, `href="${newHref}"`);
        }
      }
    }
    return `<div class="${block ? 'block' : 'inline'} my-5">${html}</div>`;
  };

  renderer.blockquote = (quote) => {
    return (
      '<blockquote class="my-4 py-4 border-l-4 dark:border-slate-600 pl-4 bg-slate-100 dark:bg-slate-700">' +
      quote +
      '</blockquote>\n'
    );
  };

  renderer.hr = () => '<hr class="my-4 border-slate-500" />';

  return renderer;
};
