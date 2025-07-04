import markdownIt from "markdown-it";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default function config(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style");

  eleventyConfig.addWatchTarget("**/*.{js,css}");

  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("notes/draft_*");

  /** @type {import("markdown-it").Options} */
  const markdownOptions = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
  };

  eleventyConfig.setLibrary("md", markdownIt(markdownOptions));
}
