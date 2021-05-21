module.exports = {
  // Once we add our changes, we can make a typescript file our entry point
  entry: "./src/index.tsx",
  resolve: {
    // We need to add .tsx and .ts as file extensions to be resolved
    extensions: [".js", ".jsx", ".tsx", ".ts"],
  },
};
