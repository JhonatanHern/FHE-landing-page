export const markdownComponents = {
  h1: ({ ...props }) => <h1 className="md-h1" {...props} />,
  h2: ({ ...props }) => <h2 className="md-h2" {...props} />,
  h3: ({ ...props }) => <h3 className="md-h3" {...props} />,
  h4: ({ ...props }) => <h4 className="md-h4" {...props} />,
  p: ({ ...props }) => <p className="md-p" {...props} />,
  ul: ({ ...props }) => <ul className="md-ul" {...props} />,
  ol: ({ ...props }) => <ol className="md-ol" {...props} />,
  li: ({ ...props }) => <li className="md-li" {...props} />,
  a: ({ ...props }) => <a className="md-link" {...props} />,
  blockquote: ({ ...props }) => <blockquote className="md-quote" {...props} />,
  code: ({ ...props }) => <code className="md-code" {...props} />,
  table: ({ ...props }) => (
    <div className="md-table-wrap">
      <table className="md-table" {...props} />
    </div>
  ),
  thead: ({ ...props }) => <thead className="md-thead" {...props} />,
  tbody: ({ ...props }) => <tbody className="md-tbody" {...props} />,
  tr: ({ ...props }) => <tr className="md-tr" {...props} />,
  th: ({ ...props }) => <th className="md-th" {...props} />,
  td: ({ ...props }) => <td className="md-td" {...props} />,
}
