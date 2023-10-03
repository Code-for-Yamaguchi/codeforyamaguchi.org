import styles from './post.module.css';

export default function Text({ title }) {
  if (!title) {
    return null;
  }
  return title.map((value) => {
    const {
      annotations: {
        bold, code, color, italic, strikethrough, underline,
      },
      text,
    } = value;
    if (text && text.content) {
      return (
        <span
          className={[
            bold ? styles.bold : '',
            code ? styles.code : '',
            italic ? styles.italic : '',
            strikethrough ? styles.strikethrough : '',
            underline ? styles.underline : '',
          ].join(' ')}
          style={color !== 'default' ? { color } : {}}
          key={text.content}
        >
          {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
        </span>
      );
    }
  });
}
