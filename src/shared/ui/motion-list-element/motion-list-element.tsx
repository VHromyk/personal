'use client'

import { FC, useRef } from 'react'

import { motion, useInView } from 'framer-motion'

import { IMotionListElementProps } from './motion-list-element.types'

export const MotionListElement: FC<IMotionListElementProps> = ({
  children,
  index,
}) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
        staggerChildren: 0.5,
        delay: index / 10,
      }}
    >
      {children}
    </motion.div>
  )
}
