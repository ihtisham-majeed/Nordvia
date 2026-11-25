import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIRECTORY = path.join(
  process.cwd(),
  "content",
  "resources",
  "blog"
);

export type BlogFAQ = {
  question: string;
  answer: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  category?: string;
  readTime?: string;
  content: string;
  coverImage?: string;
  coverImageAlt?: string;
  bannerImage?: string;
  bannerImageAlt?: string;
  ogImage?: string;
  featured?: boolean;
  tags?: string[];
  faqs?: BlogFAQ[];
};

function ensureBlogDirectory(): void {
  if (!fs.existsSync(BLOG_DIRECTORY)) {
    fs.mkdirSync(BLOG_DIRECTORY, { recursive: true });
  }
}

function isValidSlug(slug: string): boolean {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
}

function normalizeDate(value: unknown): string {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().split("T")[0];
  }

  if (typeof value === "string" && value.trim()) {
    return value.trim();
  }

  return "";
}

function parseBlogPost(filename: string): BlogPost | null {
  try {
    const fullPath = path.join(BLOG_DIRECTORY, filename);
    const fileContent = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContent);

    const filenameSlug = filename.replace(/\.mdx$/i, "");

    const slug =
      typeof data.slug === "string" && data.slug.trim()
        ? data.slug.trim()
        : filenameSlug;

    if (!isValidSlug(slug)) {
      console.warn(`Invalid blog slug in ${filename}: ${slug}`);
      return null;
    }

    if (typeof data.title !== "string" || !data.title.trim()) {
      console.warn(`Missing title in blog post: ${filename}`);
      return null;
    }

    const publishedAt =
      normalizeDate(data.publishedAt) ||
      normalizeDate(data.date);

    const faqs: BlogFAQ[] = Array.isArray(data.faqs)
      ? data.faqs.filter(
          (faq: unknown): faq is BlogFAQ =>
            typeof faq === "object" &&
            faq !== null &&
            "question" in faq &&
            "answer" in faq &&
            typeof faq.question === "string" &&
            typeof faq.answer === "string"
        )
      : [];

    return {
      slug,
      title: data.title.trim(),

      description:
        typeof data.description === "string"
          ? data.description.trim()
          : "",

      date: publishedAt,
      publishedAt,

      updatedAt: normalizeDate(data.updatedAt) || undefined,

      author:
        typeof data.author === "string" && data.author.trim()
          ? data.author.trim()
          : "NORDVIA EXPORTS",

      category:
        typeof data.category === "string"
          ? data.category
          : undefined,

      readTime:
        typeof data.readTime === "string"
          ? data.readTime
          : undefined,

      content,

      coverImage:
        typeof data.coverImage === "string"
          ? data.coverImage
          : typeof data.cover === "string"
            ? data.cover
            : undefined,

      coverImageAlt:
        typeof data.coverImageAlt === "string"
          ? data.coverImageAlt
          : undefined,

      bannerImage:
        typeof data.bannerImage === "string"
          ? data.bannerImage
          : typeof data.banner === "string"
            ? data.banner
            : undefined,

      bannerImageAlt:
        typeof data.bannerImageAlt === "string"
          ? data.bannerImageAlt
          : undefined,

      ogImage:
        typeof data.ogImage === "string" ? data.ogImage : undefined,

      featured:
        typeof data.featured === "boolean"
          ? data.featured
          : false,

      tags: Array.isArray(data.tags)
        ? data.tags.filter(
            (tag: unknown): tag is string =>
              typeof tag === "string"
          )
        : [],

      faqs,
    };
  } catch (error) {
    console.error(`Error parsing blog post ${filename}:`, error);
    return null;
  }
}

export function getAllPosts(): BlogPost[] {
  try {
    ensureBlogDirectory();

    const files = fs
      .readdirSync(BLOG_DIRECTORY)
      .filter((filename) => /\.mdx$/i.test(filename));

    const posts = files
      .map((filename) => parseBlogPost(filename))
      .filter((post): post is BlogPost => post !== null);

    return posts.sort((a, b) => {
      return (
        new Date(b.publishedAt).getTime() -
        new Date(a.publishedAt).getTime()
      );
    });
  } catch (error) {
    console.error("Error loading blog posts:", error);
    return [];
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  if (!isValidSlug(slug)) {
    return null;
  }

  return getAllPosts().find((post) => post.slug === slug) ?? null;
}

export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter((post) => post.featured);
}