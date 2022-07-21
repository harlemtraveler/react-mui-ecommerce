import { useEffect, useRef, useState } from "react";
import { Box, Slide, Typography } from "@mui/material";
import { Colors } from "../../styles/theme";
import { PromotionsContainer, MessageText } from "../../styles/promotions";

// the value of messages is temp and can instead be pulled from a server, api, etc.
const messages = [
  "20% off on your first order!",
  "Summer sale starts now, visit any store.",
  "Please like and subscribe :)",
]

export default function Promotions() {
  const containerRef = useRef();
  const [messageIndex, setMessageIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false)
    }, 3000);

    const intervalId = setInterval(() => {
      // get next message
      setMessageIndex(i => (i + 1) % messages.length);

      // slide the message in
      setShow(true);

      setTimeout(() => {
        setShow(false)
      }, 3000);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  return (
    <PromotionsContainer ref={containerRef} overflow="hidden">
      <Slide
        container={containerRef.current}
        direction={show ? "left" : "right"}
        in={show}
        timeout={{
          enter: 500,
          exit: 100,
        }}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <MessageText>
            {messages[messageIndex]}
          </MessageText>
        </Box>
      </Slide>
    </PromotionsContainer>
  );
}