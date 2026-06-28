import type { Tokens } from 'marked';

const fence = /^```mermaid[ \t]*\n([\s\S]*?)```(?:\n|$)/;

export default function () {
  return {
    extensions: [
      {
        name: 'mermaid',
        level: 'block',
        tokenizer(src: string) {
          const match = src.match(fence);
          if (match) {
            return {
              type: 'mermaid',
              raw: match[0],
              text: match[1].trim()
            };
          }
        },
        renderer(token: Tokens.Generic) {
          return `<div class="mermaid">${token.text}</div>\n`;
        }
      }
    ]
  };
}
