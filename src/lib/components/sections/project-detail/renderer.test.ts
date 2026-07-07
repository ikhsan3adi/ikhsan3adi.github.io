import { describe, it, expect, vi } from 'vitest';
import { renderer } from './renderer';

type RendererModule = Parameters<typeof renderer>[1];

function createMockSetup() {
  const instance: Record<string, unknown> = {};
  const Module = {
    Renderer: vi.fn(function () {
      return instance;
    })
  } as unknown as RendererModule;
  return { instance, Module, r: renderer('https://github.com/user/repo', Module) };
}

describe('renderer', () => {
  it('creates renderer and calls Renderer constructor once', () => {
    const { Module, instance, r } = createMockSetup();
    expect(Module.Renderer).toHaveBeenCalledOnce();
    expect(r).toBe(instance);
  });

  describe('heading', () => {
    it('renders h1 with slug id and default classes', () => {
      const { r } = createMockSetup();
      const result = r.heading('Hello World', 1, '');
      expect(result).toMatch(/^<h1/);
    });

    it('includes id attribute based on slug', () => {
      const { r } = createMockSetup();
      const result = r.heading('My Section', 2, '');
      expect(result).toMatch(/id="my-section"/);
    });

    it('renders h2 heading', () => {
      const { r } = createMockSetup();
      const result = r.heading('Subsection', 2, '');
      expect(result).toMatch(/^<h2/);
    });
  });

  describe('paragraph', () => {
    it('renders paragraph with custom classes', () => {
      const { r } = createMockSetup();
      const result = r.paragraph('Some text content');
      expect(result).toContain('<p');
      expect(result).toContain('Some text content');
      expect(result).toContain('</p>');
    });
  });

  describe('link', () => {
    it('renders external https link as-is', () => {
      const { r } = createMockSetup();
      const result = r.link('https://example.com', null, 'Example');
      expect(result).toContain('href="https://example.com"');
      expect(result).toContain('>Example</a>');
    });

    it('resolves relative URL with baseUrl', () => {
      const { r } = createMockSetup();
      const result = r.link('/path/to/file', null, 'File');
      expect(result).toContain('href="https://github.com/path/to/file"');
    });

    it('handles null href by returning text only', () => {
      const { r } = createMockSetup();
      const result = r.link(null as unknown as string, null, 'No Link');
      expect(result).toBe('No Link');
    });

    it('includes title attribute when provided', () => {
      const { r } = createMockSetup();
      const result = r.link('https://example.com', 'Visit Example', 'Example');
      expect(result).toContain('title="Visit Example"');
    });
  });

  describe('codespan', () => {
    it('renders inline code with classes', () => {
      const { r } = createMockSetup();
      const result = r.codespan('const x = 1');
      expect(result).toContain('<code');
      expect(result).toContain('const x = 1');
      expect(result).toContain('</code>');
    });
  });

  describe('html (inline)', () => {
    it('resolves relative image src with baseUrl', () => {
      const { r } = createMockSetup();
      const result = r.html('<img src="/images/foo.png">');
      expect(result).toContain('src="https://github.com/images/foo.png"');
    });

    it('adds max-w-full class to images', () => {
      const { r } = createMockSetup();
      const result = r.html('<img src="https://example.com/img.png">');
      expect(result).toContain('max-w-full');
    });

    it('resolves relative anchor href', () => {
      const { r } = createMockSetup();
      const result = r.html('<a href="/other-page">link</a>');
      expect(result).toContain('href="https://github.com/other-page"');
    });
  });

  describe('table', () => {
    it('renders table in overflow wrapper', () => {
      const { r } = createMockSetup();
      const result = r.table('<tr><th>Name</th></tr>', '<tr><td>Foo</td></tr>');
      expect(result).toContain('overflow-x-auto');
      expect(result).toContain('<table');
      expect(result).toContain('<thead>');
      expect(result).toContain('<tbody>');
    });
  });

  describe('hr', () => {
    it('renders hr with border classes', () => {
      const { r } = createMockSetup();
      const result = r.hr();
      expect(result).toContain('<hr');
    });
  });

  describe('image', () => {
    it('renders img tag with src and title as alt', () => {
      const { r } = createMockSetup();
      const result = r.image('https://example.com/pic.png', 'Title', 'Alt Text');
      expect(result).toContain('src="https://example.com/pic.png"');
      expect(result).toContain('alt="Title"');
    });
  });

  describe('blockquote', () => {
    it('renders blockquote with border classes', () => {
      const { r } = createMockSetup();
      const result = r.blockquote('Quote text');
      expect(result).toContain('<blockquote');
      expect(result).toContain('Quote text');
      expect(result).toContain('</blockquote>');
    });
  });

  describe('strong', () => {
    it('renders strong with font-bold class', () => {
      const { r } = createMockSetup();
      const result = r.strong('bold text');
      expect(result).toContain('<strong');
      expect(result).toContain('bold text');
    });
  });

  describe('list', () => {
    it('renders unordered list with disc style', () => {
      const { r } = createMockSetup();
      const result = r.list('<li>Item</li>', false, 1);
      expect(result).toContain('<ul');
    });

    it('renders ordered list with decimal style', () => {
      const { r } = createMockSetup();
      const result = r.list('<li>Item</li>', true, 1);
      expect(result).toContain('<ol');
    });
  });

  describe('listitem', () => {
    it('renders list item with margin class', () => {
      const { r } = createMockSetup();
      const result = r.listitem('Content', false, false);
      expect(result).toBe('<li class="mb-1">Content</li>');
    });
  });

  describe('tablecell', () => {
    it('renders header cell as th', () => {
      const { r } = createMockSetup();
      const result = r.tablecell('Name', { header: true, align: null });
      expect(result).toContain('<th');
    });

    it('renders data cell as td', () => {
      const { r } = createMockSetup();
      const result = r.tablecell('Value', { header: false, align: null });
      expect(result).toContain('<td');
    });

    it('includes align attribute when provided', () => {
      const { r } = createMockSetup();
      const result = r.tablecell('Centered', { header: false, align: 'center' });
      expect(result).toContain('align="center"');
    });
  });
});
