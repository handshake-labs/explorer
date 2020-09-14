import useClipboard from "react-use-clipboard";

interface Props {
  text: string;
}

const Clipboard: React.FC<Props> = (props: Props) => {
  const [isCopied, setCopied] = useClipboard(props.text, {
    successDuration: 1000,
  });

  return <button onClick={setCopied}>{isCopied ? "copy" : "copied"}</button>;
};
export default Clipboard;
