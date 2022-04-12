import React from 'react';
import { Box, Stack } from '@chakra-ui/react';

function myMessage(): JSX.Element {
    return (
        <Box textAlign="right">
            <Box>
                <p>Me &emsp; <i>12:39PM</i></p>
            </Box>
            <Box as="button" borderRadius='md' bg='#63B3ED' px={4} h={10} color='white' style={{overflow: "auto"}}>
                Message
            </Box>
        </Box>
    );
}

function playerMessage(): JSX.Element {
    return (
        <Box textAlign="left">
            <Box>
                <p>Sender &emsp; <i>12:39PM</i></p>
            </Box>
            <Box as="button" borderRadius='md' bg='#EDF2F7' px={4} h={10} color='black' style={{overflow: "auto"}}>
                Message
            </Box>
        </Box>
    );
}

export default function ChatConversation(): JSX.Element {
    return (
      <div data-testid="container" style={{overflow: "scroll", flex: "auto"}}>
          <Stack>
              {myMessage()}
              {playerMessage()}
          </Stack>
      </div>
    );
  }