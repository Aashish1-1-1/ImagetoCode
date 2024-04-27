import { CopyBlock, dracula } from 'react-code-blocks';

export default function CodeBox({ code, language, showLineNumbers }) {
 return(
 <CopyBlock
    text={code}
    language={language}
    showLineNumbers={showLineNumbers}
    theme={dracula}
    codeBlock />
  )
}
     
