module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // A new feature
        "fix", // A bug fix
        "docs", // Documentation changes
        "style", // Formatting changes (white-space, formatting, etc.)
        "refactor", // Code refactoring
        "test", // Adding or modifying tests
        "chore", // Maintenance tasks
        "ci", // CI/CD changes
        "perf", // Performance improvements
        "build", // Build system changes
        "revert", // Reverts a previous commit
      ],
    ],
    "subject-max-length": [2, "always", 72],
    "subject-case": [2, "always", "lower-case"],
  },
};
