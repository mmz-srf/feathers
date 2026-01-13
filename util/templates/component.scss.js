module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js - adapt as needed
@use "../../foundation/colors.scss";

.foo-bar {
  color: colors.$color-srf-red-600;
}
`,
  extension: `.scss`
});
