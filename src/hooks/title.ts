export const useDocumentTitle = (title: string): void => {
  React.useEffect(() => {
    const prevTitle = document.title;
    document.title = title;
    return () => {
      document.title = prevTitle;
    };
  }, [title]);
};
