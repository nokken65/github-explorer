import 'highlight.js/styles/github.css';

import { useUnit } from 'effector-react';
import Emoji from 'emoji-js';
import hljs from 'highlight.js';
import { marked } from 'marked';
import { useEffect, useState } from 'react';

import { $readme } from './model';

marked.setOptions({
  highlight: function (code, lang) {
    return hljs.highlight(lang, code).value;
  },
});

const RepoPage = () => {
  const readme = useUnit($readme);
  const [text, setText] = useState<string>('');
  // console.log(readme);

  useEffect(() => {
    const emojiConvertor = new Emoji.EmojiConvertor();
    const textWithEmojis = emojiConvertor.replace_colons(readme);

    const htmlWithEmojis = marked(textWithEmojis);

    setText(htmlWithEmojis);
  }, [readme]);

  return (
    <div
      className='markdown-flavored markdown-flavored--github'
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export default RepoPage;
