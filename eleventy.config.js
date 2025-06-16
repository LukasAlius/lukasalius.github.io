module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/main.js");
  eleventyConfig.addPassthroughCopy({ "public/favicon.ico": "/" });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
