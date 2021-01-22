import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import "../animated-reviews/styles.css"
import Styled from 'styled-components'
/**
 * This is an example of animating shared layouts in Framer Motion 2.
 *
 * The open state of each panel is contained locally to that component. Wrapping
 * them all in the same AnimateSharedLayout component allows them all to animate
 * in response to state changes that affect each other's layout.
 *
 * Try removing AnimateSharedLayout to see how that affects the animation.
 */

const Flex = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`


export default function AnimatedReviews() {

const data = ["hi", "second", "third"]

useEffect(() => {
  const interval = setInterval(() => {
    let temp = (activeReview + 1) % 4
    setActiveReview(temp)
  }, 5000)
  return () => clearInterval(interval)
}, [activeReview])

const [activeReview, setActiveReview] = useState(0);

  return (
    <Flex>
        <motion.div
        animate={{ translateX: 100 }}
        transition={{ duration: 0.5 }}
        className="box"
        >
            {data[activeReview]}
        </motion.div>
    </Flex>
    )
}