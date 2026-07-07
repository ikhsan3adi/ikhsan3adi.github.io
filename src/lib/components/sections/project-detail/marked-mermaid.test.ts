import { describe, it, expect } from 'vitest';
import mermaidExt from './marked-mermaid';

describe('marked-mermaid', () => {
  const ext = mermaidExt();

  it('returns extensions array with one extension', () => {
    expect(ext.extensions).toHaveLength(1);
  });

  it('extension has block level', () => {
    expect(ext.extensions[0].level).toBe('block');
  });

  describe('tokenizer', () => {
    const tokenizer = ext.extensions[0].tokenizer!;

    it('matches mermaid code fence', () => {
      const result = tokenizer('```mermaid\ngraph TD;\nA-->B;\n```');
      expect(result).toBeDefined();
      expect(result!.type).toBe('mermaid');
      expect(result!.text).toBe('graph TD;\nA-->B;');
    });

    it('matches with trailing newline after fence', () => {
      const result = tokenizer('```mermaid\ngraph TD;\n```\n');
      expect(result).toBeDefined();
      expect(result!.text).toBe('graph TD;');
    });

    it('does not match regular code fence', () => {
      const result = tokenizer('```js\nconst x = 1;\n```');
      expect(result).toBeUndefined();
    });

    it('does not match non-code text', () => {
      const result = tokenizer('hello world');
      expect(result).toBeUndefined();
    });

    it('handles empty mermaid block', () => {
      const result = tokenizer('```mermaid\n```');
      expect(result).toBeDefined();
      expect(result!.text).toBe('');
    });
  });

  describe('renderer', () => {
    const renderFn = ext.extensions[0].renderer!;

    it('renders mermaid div with text content', () => {
      const result = renderFn({
        type: 'mermaid',
        text: 'graph TD;\nA-->B;',
        raw: '```mermaid\ngraph TD;\nA-->B;\n```'
      });
      expect(result).toBe('<div class="mermaid">graph TD;\nA-->B;</div>\n');
    });
  });
});
