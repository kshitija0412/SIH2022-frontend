import React from 'react'
import { Text, Timeline } from '@mantine/core';

function DisplayLine() {
    return (
        <div style={{ maxWidth: 320, margin: 'auto' }}>
          <Timeline>
            {/* If you do not pass bullet prop, default bullet will be rendered */}
            <Timeline.Item title="Basic Details" bulletSize={24}>
              <Text color="dimmed" size="sm">
              Default bullet without anything
              </Text>
            </Timeline.Item>
    
            {/* You can use any react node as bullet, e.g. Avatar, ThemeIcon or any svg icon */}
            <Timeline.Item title="Location Details" bulletSize={24}>
              <Text color="dimmed" size="sm">
                Default bullet without anything
              </Text>
            </Timeline.Item>

            <Timeline.Item title="Demographic Details" bulletSize={24}>
              <Text color="dimmed" size="sm">
                Default bullet without anything
              </Text>
            </Timeline.Item>

            <Timeline.Item title="Education Details" bulletSize={24}>
              <Text color="dimmed" size="sm">
                Default bullet without anything
              </Text>
            </Timeline.Item>

            <Timeline.Item title="Experience Details" bulletSize={24}>
              <Text color="dimmed" size="sm">
                Default bullet without anything
              </Text>
            </Timeline.Item>

            <Timeline.Item title="Skills" bulletSize={24}>
              <Text color="dimmed" size="sm">
                Default bullet without anything
              </Text>
            </Timeline.Item>

            <Timeline.Item title="Social Media Links" bulletSize={24}>
              <Text color="dimmed" size="sm">
                Default bullet without anything
              </Text>
            </Timeline.Item>

            <Timeline.Item title="Papers Published" bulletSize={24}>
              <Text color="dimmed" size="sm">
                Default bullet without anything
              </Text>
            </Timeline.Item>

          </Timeline>
        </div>
      );
}

export default DisplayLine