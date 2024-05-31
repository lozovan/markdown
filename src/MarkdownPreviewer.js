import { marked } from 'marked';

const getMarkdownText = (markdown) => {
  const rawMarkup = marked(markdown);
  return { __html: rawMarkup };
};

const MarkdownPreviewer = ({ markdown }) => {
  return <div id="preview" dangerouslySetInnerHTML={getMarkdownText(markdown)} />;
};

export * from 'marked';
export default MarkdownPreviewer;