import { describe, it, expect } from 'vitest';
import { initialProjects } from '$lib/api/projects/projects';
import { contacts, whatsappLink, emailLink } from '$lib/api/contact/contacts';
import { achievements } from '$lib/api/achievements/achievements';
import { socials, githubLink, codebergLink, linkedInLink } from '$lib/api/socials/socials';
import { toolCategories } from '$lib/api/tools/tools';
import { photoCards, aboutTexts } from '$lib/api/about/about';
import { topMarqueeTexts, bottomMarqueeTexts } from '$lib/api/about/marqueeTexts';

const urlRegex = /^https?:\/\/.+/;
const urlOrMailtoRegex = /^(?:https?:\/\/|mailto:).+/;
const mailtoRegex = /^mailto:[^\s]+/;
const validTypes = ['competition', 'course', 'other'] as const;

// ---------------------------------------------------------------------------
// initialProjects
// ---------------------------------------------------------------------------
describe('initialProjects', () => {
  const ids = initialProjects.map((p) => p.id);

  it('is not empty', () => {
    expect(initialProjects).not.toHaveLength(0);
  });

  it('has no duplicate IDs', () => {
    expect(new Set(ids).size).toBe(ids.length);
  });

  describe.each(initialProjects)('$id', (project) => {
    it('has required fields', () => {
      expect(project.id).toBeTruthy();
      expect(project.name).toBeTruthy();
      expect(project.url).toBeTruthy();
      expect(project.readmeBaseUrl).toBeTruthy();
      expect(project.imageUrl).toBeTruthy();
      expect(project.tags).toBeInstanceOf(Array);
    });

    it('has valid URL for url', () => {
      expect(project.url).toMatch(urlRegex);
    });

    it('has valid URL for readmeBaseUrl', () => {
      expect(project.readmeBaseUrl).toMatch(urlRegex);
    });

    it('has valid URL for imageUrl', () => {
      expect(project.imageUrl).toMatch(urlRegex);
    });

    it('has at least one tag', () => {
      expect(project.tags.length).toBeGreaterThan(0);
    });

    if (project.description !== undefined) {
      it('description is non-empty when present', () => {
        expect(project.description).toBeTruthy();
      });
    }

    if (project.readmeUrl !== undefined) {
      it('readmeUrl is valid URL when present', () => {
        expect(project.readmeUrl).toMatch(urlRegex);
      });
    }
  });
});

// ---------------------------------------------------------------------------
// contacts
// ---------------------------------------------------------------------------
describe('contacts', () => {
  it('is not empty', () => {
    expect(contacts).not.toHaveLength(0);
  });

  describe.each(contacts)('$contact', (contact) => {
    it('has required fields', () => {
      expect(contact.contact).toBeTruthy();
      expect(contact.name).toBeTruthy();
      expect(contact.link).toBeTruthy();
      expect(contact.colorVariant).toBeTruthy();
      expect(contact.icon).toBeTruthy();
    });

    it('has valid link', () => {
      expect(contact.link).toMatch(urlOrMailtoRegex);
    });
  });

  it('whatsappLink is a valid URL', () => {
    expect(whatsappLink).toMatch(urlRegex);
  });

  it('emailLink is a valid mailto', () => {
    expect(emailLink).toMatch(mailtoRegex);
  });
});

// ---------------------------------------------------------------------------
// achievements
// ---------------------------------------------------------------------------
describe('achievements', () => {
  it('is not empty', () => {
    expect(achievements).not.toHaveLength(0);
  });

  describe.each(achievements)('$title', (achievement) => {
    it('has required fields', () => {
      expect(achievement.title).toBeTruthy();
      expect(achievement.issuer).toBeTruthy();
      expect(achievement.date).toBeTruthy();
      expect(achievement.description).toBeTruthy();
      expect(achievement.icon).toBeTruthy();
    });

    if (achievement.type !== undefined) {
      it('type is valid', () => {
        expect(validTypes).toContain(achievement.type);
      });
    }

    if (achievement.link !== undefined) {
      it('link is valid URL when present', () => {
        expect(achievement.link).toMatch(urlRegex);
      });
    }
  });
});

// ---------------------------------------------------------------------------
// socials
// ---------------------------------------------------------------------------
describe('socials', () => {
  it('is not empty', () => {
    expect(socials).not.toHaveLength(0);
  });

  describe.each(socials)('$social', (social) => {
    it('has required fields', () => {
      expect(social.social).toBeTruthy();
      expect(social.name).toBeTruthy();
      expect(social.link).toBeTruthy();
      expect(social.colorVariant).toBeTruthy();
      expect(social.icon).toBeTruthy();
    });

    it('has valid link', () => {
      expect(social.link).toMatch(urlRegex);
    });
  });

  it('githubLink is a valid URL', () => {
    expect(githubLink).toMatch(urlRegex);
  });

  it('codebergLink is a valid URL', () => {
    expect(codebergLink).toMatch(urlRegex);
  });

  it('linkedInLink is a valid URL', () => {
    expect(linkedInLink).toMatch(urlRegex);
  });
});

// ---------------------------------------------------------------------------
// toolCategories
// ---------------------------------------------------------------------------
describe('toolCategories', () => {
  it('is not empty', () => {
    expect(toolCategories).not.toHaveLength(0);
  });

  describe.each(toolCategories)('$category', (cat) => {
    it('has category name', () => {
      expect(cat.category).toBeTruthy();
    });

    it('has non-empty tools array', () => {
      expect(cat.tools.length).toBeGreaterThan(0);
    });

    describe.each(cat.tools)('$name', (tool) => {
      it('has name and icon', () => {
        expect(tool.name).toBeTruthy();
        expect(tool.icon).toBeTruthy();
      });
    });
  });
});

// ---------------------------------------------------------------------------
// about (photoCards, aboutTexts)
// ---------------------------------------------------------------------------
describe('about photoCards', () => {
  it('is not empty', () => {
    expect(photoCards).not.toHaveLength(0);
  });

  describe.each(photoCards)('$title', (card) => {
    it('has required fields', () => {
      expect(card.title).toBeTruthy();
      expect(card.description).toBeTruthy();
      expect(card.bgClass).toBeTruthy();
      expect(card.transformClass).toBeTruthy();
      expect(card.cardSizeClass).toBeTruthy();
      expect(card.imgClass).toBeTruthy();
      expect(typeof card.baseZ).toBe('number');
    });
  });
});

describe('aboutTexts', () => {
  it('is not empty', () => {
    expect(aboutTexts).not.toHaveLength(0);
  });

  it('all paragraphs are non-empty', () => {
    aboutTexts.forEach((text) => {
      expect(text).toBeTruthy();
    });
  });
});

// ---------------------------------------------------------------------------
// marqueeTexts
// ---------------------------------------------------------------------------
describe('marqueeTexts', () => {
  it('topMarqueeTexts is not empty', () => {
    expect(topMarqueeTexts).not.toHaveLength(0);
  });

  it('bottomMarqueeTexts is not empty', () => {
    expect(bottomMarqueeTexts).not.toHaveLength(0);
  });

  it('topMarqueeTexts all start with bullet', () => {
    topMarqueeTexts.forEach((text) => {
      expect(text).toMatch(/^✦ /);
    });
  });

  it('bottomMarqueeTexts all start with bullet', () => {
    bottomMarqueeTexts.forEach((text) => {
      expect(text).toMatch(/^✦ /);
    });
  });
});
