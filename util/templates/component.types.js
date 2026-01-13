module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js - adapt as needed
export interface ${componentName}Props {
    foo: string;
}
`,
  extension: `.types.ts`
});
