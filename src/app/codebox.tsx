import { CopyBlock, dracula } from 'react-code-blocks';

export default function CodeBox({ code, language, showLineNumbers }:{code:string,language:string,showLineNumbers:boolean}) {
 return(
 <CopyBlock
    text={code}
    language={language}
    showLineNumbers={showLineNumbers}
    theme={dracula}
    codeBlock />
  )
}
     
