import React, { useState } from 'react';
import MarkdownPreviewer from './MarkdownPreviewer';
import './App.css';

const App = () => {
  const defaultMarkdown = `# Welcome to my React Markdown Previewer!
## This is a sub-heading...
[This is a link](https://www.freecodecamp.org)
Inline code \`<div></div>\`
\`\`\`
const hello = 'world';
console.log(hello);
\`\`\`
- List item
> This is a blockquote
![Image](https://via.placeholder.com/150)
**This is bold text**
`;

  const [markdown, setMarkdown] = useState(defaultMarkdown);

  return (
    <div className="App">
      <textarea
        id="editor"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <MarkdownPreviewer markdown={markdown} />
    </div>
  );
};

export default App;