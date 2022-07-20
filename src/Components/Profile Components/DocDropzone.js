import React from 'react';
import { useRef } from 'react';
import { Button, Group } from '@mantine/core';
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';

function DocDropzone() {
    // const openRef = useRef<() => void> ();

  return (
        <>
            <div>
      <Dropzone openRef={openRef} accept={[application/pdf, application/msword]}>
        {/* children */}
      </Dropzone>

      <Group position="center" mt="md">
        <Button onClick={() => openRef.current()}>Select files</Button>
      </Group>
      </div>
    </>

  )
}

export default DocDropzone;