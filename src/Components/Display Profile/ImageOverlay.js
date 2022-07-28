import React from 'react';
import { Overlay, Image, Text, Divider } from '@mantine/core';

function ImageOverlay() {
  return (
    <>
    <div>
        <div>
					<h2>Basic Details</h2>
				</div>
				<div id="TextField">
					<Text>First Name: </Text>
					<Text>Middle Name: </Text>
					<Text>Last Name: </Text>
					
				</div>
        <Image
        // width={45}
        // height={35}
        fit="contain"
        src="src\Components\Display Profile\prof.png"
      />

<Overlay component="Image" zIndex={-1}/>

      <Divider my="md" />
    </div>
    </>
  );
}

export default ImageOverlay