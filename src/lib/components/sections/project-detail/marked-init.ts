import { renderer } from './renderer';

let initPromise: Promise<{
  marked: (typeof import('marked'))['marked'];
  markedBaseUrl: (baseUrl: string) => ReturnType<(typeof import('marked-base-url'))['baseUrl']>;
}> | null = null;

function ensureInit() {
  if (initPromise) return initPromise;

  initPromise = (async () => {
    const [
      { Octokit },
      { marked },
      { default: markedAlert },
      { baseUrl: markedBaseUrl },
      { markedEmoji },
      { markedHighlight },
      { default: hljs },
      { default: javascript },
      { default: typescript },
      { default: xml },
      { default: css },
      { default: bash },
      { default: shell },
      { default: json },
      { default: plaintext },
      { default: python },
      { default: php },
      { default: markedKatex },
      { default: markedMermaid }
    ] = await Promise.all([
      import('@octokit/rest'),
      import('marked'),
      import('marked-alert'),
      import('marked-base-url'),
      import('marked-emoji'),
      import('marked-highlight'),
      import('highlight.js/lib/core'),
      import('highlight.js/lib/languages/javascript'),
      import('highlight.js/lib/languages/typescript'),
      import('highlight.js/lib/languages/xml'),
      import('highlight.js/lib/languages/css'),
      import('highlight.js/lib/languages/bash'),
      import('highlight.js/lib/languages/shell'),
      import('highlight.js/lib/languages/json'),
      import('highlight.js/lib/languages/plaintext'),
      import('highlight.js/lib/languages/python'),
      import('highlight.js/lib/languages/php'),
      import('marked-katex-extension'),
      import('./marked-mermaid')
    ]);

    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('js', javascript);
    hljs.registerLanguage('typescript', typescript);
    hljs.registerLanguage('ts', typescript);
    hljs.registerLanguage('xml', xml);
    hljs.registerLanguage('html', xml);
    hljs.registerLanguage('css', css);
    hljs.registerLanguage('bash', bash);
    hljs.registerLanguage('shell', shell);
    hljs.registerLanguage('sh', bash);
    hljs.registerLanguage('json', json);
    hljs.registerLanguage('plaintext', plaintext);
    hljs.registerLanguage('python', python);
    hljs.registerLanguage('php', php);
    hljs.registerLanguage('txt', plaintext);

    const res = await new Octokit().rest.emojis.get().catch(() => null);
    const emojis = res?.data;

    const baseMarked = marked.use(
      markedHighlight({
        langPrefix: 'hljs language-',
        highlight(code, lang) {
          const language = hljs.getLanguage(lang) ? lang : 'plaintext';
          return hljs.highlight(code, { language }).value;
        }
      }),
      markedAlert(),
      markedEmoji({ emojis: emojis ?? {} }),
      markedKatex(),
      markedMermaid()
    );

    return { marked: baseMarked, markedBaseUrl };
  })();

  return initPromise;
}

export async function getConfiguredMarked(readmeBaseUrl: string) {
  const { marked, markedBaseUrl } = await ensureInit();
  return marked.use({ renderer: renderer(readmeBaseUrl, marked) }, markedBaseUrl(readmeBaseUrl));
}
