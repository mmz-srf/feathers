module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
@use "../variables.scss";

.foo-bar {
  @include font-defaults;

  color: variables.$harvey-green;
}
`,
  extension: `.scss`
});
