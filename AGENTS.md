## Agent Guidelines for JavaScript Learning Repository

Welcome, Agent! Your contributions to this repository are valuable for helping students learn JavaScript. Please follow these guidelines to maintain consistency and clarity.

### 1. Code Style and Formatting
    - **Indentation:** Use 2 spaces for indentation.
    - **Semicolons:** Use semicolons at the end of statements.
    - **Variable Declarations:** Prefer `const` for variables that won't be reassigned, and `let` for variables that will be reassigned. Avoid using `var` due to its scoping issues.
    - **Naming Conventions:**
        - Use camelCase for variable and function names (e.g., `myVariable`, `calculateSum`).
        - Use PascalCase for class names (e.g., `MyClass`).
    - **String Literals:** Use double quotes (`"`) for string literals.
    - **Line Length:** Keep lines of code to a reasonable length (e.g., under 100 characters) for better readability.

### 2. Comments and Explanations
    - **Clarity is Key:** Write comments that are clear, concise, and helpful for beginners.
    - **Explain Concepts:** When introducing new concepts, provide a brief explanation in comments.
    - **Code Blocks:** For multi-line explanations or examples within comments, use appropriate formatting.
    - **Avoid Redundant Comments:** Do not comment on obvious code (e.g., `// increment i by 1` for `i++`).
    - **JSDoc for Functions:** For functions, consider using JSDoc-style comments to describe parameters, return values, and the function's purpose.
      ```javascript
      /**
       * Calculates the sum of two numbers.
       * @param {number} a - The first number.
       * @param {number} b - The second number.
       * @returns {number} The sum of a and b.
       */
      function add(a, b) {
        return a + b;
      }
      ```

### 3. File Structure and Naming
    - **Directory Structure:** Files are organized into directories based on topics (e.g., `01_Basics`, `02_Basics`).
    - **File Naming:**
        - Use descriptive names for files that indicate their content (e.g., `01_Variables.js`, `05_Strings.js`).
        - Maintain the existing numbering convention for new files within a section.

### 4. Content Guidelines
    - **Focus on Fundamentals:** The primary goal is to teach JavaScript fundamentals clearly.
    - **Simple Examples:** Use simple and illustrative examples. Avoid overly complex or obscure code unless necessary to demonstrate a specific concept.
    - **Accuracy:** Ensure all code examples and explanations are accurate and up-to-date with modern JavaScript practices.
    - **Node.js Environment:** Assume code will be run in a Node.js environment. Avoid browser-specific APIs (like `alert` or `document`) unless explicitly demonstrating client-side JavaScript in a separate section.

### 5. `README.md` Updates
    - If you add new files or sections, update the `Table of Contents` in the main `README.md` file accordingly.
    - Provide a brief description of the new content.

### 6. Testing Your Changes (Conceptual)
    - Before submitting, mentally review your code or run it in a Node.js environment to ensure it works as expected and is free of errors.
    - Ensure that explanations align with the code's behavior.

### 7. Commit Messages
    - Write clear and descriptive commit messages.
    - Start with a capital letter and use the imperative mood (e.g., "Add feature for X," "Fix bug in Y," "Update documentation for Z").
    - Example: `Add examples for array destructuring in 02_Basics/01_arrays.js`

By following these guidelines, we can create a high-quality learning resource for JavaScript students. Thank you for your contribution!
