import React from 'react'
import { Dropzone, Box } from '@neo4j-ndl/react'
function DropZone() {
    return (
        <Box
            borderRadius="xl"
            className="n-bg-palette-primary-bg-weak n-border n-border-palette-primary-border-strong"
            style={{
                minWidth: '300px'
            }}
        >
            <Dropzone
                dropZoneOptions={{
                    onDrop: function drop(e) {
                        alert("attempted to upload " + e.length + " file(s). Check console logs for more info")
                    },
                    maxFiles: 1,
                    accept: { 'application/pdf': ['.pdf'] }
                }}
                supportedFilesDescription="Supports: Only PDF"
                

            />
        </Box>

    )
}

export default DropZone