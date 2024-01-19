import { Dropzone, Box } from '@neo4j-ndl/react';
import { useState } from 'react';
import FileTable from './FileTable';

export default function DropZone() {
  const [files, setFiles] = useState<Partial<globalThis.File>[] | []>([]);
  return (
    <>
       <Box
        borderRadius='xl'
        className=' n-border n-border-palette-primary-border-strong'
        style={{
          width:"100%"
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
      <div style={{marginTop:"15px",width:"100%"}}>{files.length > 0 && <FileTable files={files} />}</div>
    </>
  );
}
