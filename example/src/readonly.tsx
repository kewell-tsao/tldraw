import { TLDraw, TLDrawFile } from '@tldraw/tldraw'
import * as React from 'react'

export default function ReadOnly(): JSX.Element {
  const [file, setFile] = React.useState<TLDrawFile>()

  React.useEffect(() => {
    async function loadFile(): Promise<void> {
      const file = await fetch('Example.tldr').then((response) => response.json())
      setFile(file)
    }

    loadFile()
  }, [])

  return (
    <div className="tldraw">
      <TLDraw readOnly document={file?.document} />
    </div>
  )
}
