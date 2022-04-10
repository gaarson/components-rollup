declare module '*.svg' {
  const content: React.FunctionComponent<{[key:string]: string}>;
  export default content;
}

declare module '*.css' {
  const content: {[key:string]: string};
  export default content;
}
