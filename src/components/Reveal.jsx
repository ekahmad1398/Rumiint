import { motion, useReducedMotion } from 'framer-motion'

const easing = [0.22, 1, 0.36, 1]

export function Reveal({
  amount = 0.18,
  axis = 'y',
  children,
  className,
  delay = 0,
  distance = 18,
  duration = 0.5,
  once = true,
}) {
  const shouldReduceMotion = useReducedMotion()

  const hiddenState = shouldReduceMotion
    ? { opacity: 0 }
    : {
        opacity: 0,
        x: axis === 'x' ? distance : 0,
        y: axis === 'y' ? distance : 0,
      }

  const visibleState = {
    opacity: 1,
    x: 0,
    y: 0,
    transition: shouldReduceMotion
      ? { duration: 0.01 }
      : {
          delay,
          duration,
          ease: easing,
        },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      variants={{ hidden: hiddenState, visible: visibleState }}
      viewport={{ amount, once }}
      whileInView="visible"
    >
      {children}
    </motion.div>
  )
}

export function Stagger({
  amount = 0.12,
  children,
  className,
  delayChildren = 0.04,
  once = true,
  staggerChildren = 0.08,
}) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial="hidden"
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: shouldReduceMotion
            ? { duration: 0.01 }
            : {
                delayChildren,
                staggerChildren,
              },
        },
      }}
      viewport={{ amount, once }}
      whileInView="visible"
    >
      {children}
    </motion.div>
  )
}

export const fadeUpItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.48,
      ease: easing,
    },
  },
}
