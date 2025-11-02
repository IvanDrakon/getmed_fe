import ReactMardown from "react-markdown";

interface MarkdownProps {
  content: string;
}

const MarkdownRenderer = ({ content }: MarkdownProps) => {
  return (
    <div className="prose max-w-none">
      <ReactMardown>{content}</ReactMardown>
    </div>
  );
};

export default MarkdownRenderer;
