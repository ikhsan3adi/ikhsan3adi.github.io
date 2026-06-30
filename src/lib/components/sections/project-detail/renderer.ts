import type { Renderer as MarkedRenderer } from 'marked';

export const renderer = (baseUrl: string, markedModule: { Renderer: new () => MarkedRenderer }) => {
  const renderer: MarkedRenderer = new markedModule.Renderer();

  renderer.heading = (text, level) => {
    return `<h${level} class="my-4 font-bold font-space-grotesk text-slate-900 dark:text-white">${text}</h${level}>`;
  };

  renderer.paragraph = (text) => {
    return `<p class="mb-4 last:mb-0 leading-relaxed">${text}</p>\n`;
  };

  renderer.strong = (text) => {
    return `<strong class="font-bold text-slate-900 dark:text-white">${text}</strong>`;
  };

  renderer.list = (body, ordered) => {
    const type = ordered ? 'ol' : 'ul';
    const startAttr = ordered ? ' start="0"' : '';
    const styleClass = ordered ? 'list-decimal pl-5' : 'list-disc pl-5';
    return (
      '<div class="my-4"><' +
      type +
      ' class="' +
      styleClass +
      '"' +
      startAttr +
      '>\n' +
      body +
      '</' +
      type +
      '></div>\n'
    );
  };

  renderer.listitem = (text) => {
    return `<li class="mb-1">${text}</li>`;
  };

  renderer.image = (href, title, text) => {
    const alt = (title ?? text ?? '').replace(/"/g, '&quot;');
    return `<img class="my-4 max-w-full h-auto" src="${href}" alt="${alt}" />`;
  };

  renderer.table = (header, body) => {
    if (body) body = `<tbody>${body}</tbody>`;

    return (
      '<div class="overflow-x-auto">\n' +
      '<table class="border-collapse border border-slate-300 dark:border-slate-600 my-4 w-full">\n' +
      '<thead>\n' +
      header +
      '</thead>\n' +
      body +
      '</table>\n' +
      '</div>\n'
    );
  };

  renderer.tablecell = (content, flags) => {
    const type = flags.header ? 'th' : 'td';
    const baseClass = 'border border-slate-300 dark:border-slate-600 px-4 py-2';
    const textClass = flags.header
      ? 'font-bold text-slate-900 dark:text-white'
      : 'text-slate-700 dark:text-slate-300';
    const tag = flags.align
      ? `<${type} align="${flags.align}" class="${baseClass} ${textClass}">`
      : `<${type} class="${baseClass} ${textClass}">`;
    return tag + content + `</${type}>\n`;
  };

  renderer.link = (href, title, text) => {
    if (href === null) {
      return text;
    }

    if (
      !href.startsWith('http://') &&
      !href.startsWith('https://') &&
      !href.startsWith('mailto:') &&
      !href.startsWith('tel:') &&
      !href.startsWith('#')
    ) {
      href = new URL(href, baseUrl).toString();
    }

    const safeHref = href.replace(/"/g, '&quot;');
    let out = '<a href="' + safeHref + '"';
    if (title) {
      out += ' title="' + title.replace(/"/g, '&quot;') + '"';
    }
    out +=
      ' class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline">' +
      text +
      '</a>';
    return out;
  };

  renderer.codespan = (code) => {
    return `<code class="bg-slate-200 dark:bg-slate-600 px-1.5 py-0.5 rounded font-cascadia-mono text-rose-700 dark:text-rose-300">${code}</code>`;
  };

  renderer.html = (html) => {
    if (html.includes('<img')) {
      const regex = /src="([^"]+?)"/g;
      const hrefs = html.match(regex) ?? [];

      for (const href of hrefs) {
        const hrefVal = href.match(/src="([^"]+?)"/)?.[1];

        if (hrefVal && !hrefVal.startsWith('http')) {
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

        if (hrefVal && !hrefVal.startsWith('http')) {
          const newHref = new URL(hrefVal, baseUrl).toString();
          html = html.replace(href, `href="${newHref}"`);
        }
      }
    }
    return html;
  };

  renderer.blockquote = (quote) => {
    return (
      '<blockquote class="my-4 py-4 border-l-4 border-slate-300 dark:border-slate-600 pl-4 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">' +
      quote +
      '</blockquote>\n'
    );
  };

  renderer.hr = () => '<hr class="my-4 border-slate-300 dark:border-slate-600" />';

  return renderer;
};
