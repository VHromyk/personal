'use client'

import React, { ReactNode, useRef } from 'react'

import { motion, useInView } from 'framer-motion'

export const MotionListElement = ({
  children,
  index,
}: {
  children: ReactNode
  index: number
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
