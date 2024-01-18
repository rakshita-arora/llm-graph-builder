import { Dropzone, Box } from '@neo4j-ndl/react';
import { useState } from 'react';
import FileTable from './FileTable';

export default function DropZone() {
  const [files, setFiles] = useState<Partial<globalThis.File>[] | []>([]);
  return (
    <>
      <Box
        borderRadius='xl'
        className='n-bg-palette-primary-bg-weak n-border n-border-palette-primary-border-strong'
        style={{
          minWidth: '300px',
        }}
      >
        <Dropzone
          dropZoneOptions={{
            accept: { 'application/pdf': ['.pdf'] },
            onDrop: (f: Partial<globalThis.File>[]) => {
              if (f.length) {
                setFiles((files) => [...files, ...f]);
              }
            },
          }}
        />
      </Box>
      <div>{files.length > 0 && <FileTable files={files} />}</div>
    </>
  );
}
