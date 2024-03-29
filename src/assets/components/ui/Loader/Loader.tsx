import cn from 'classnames';
import { motion } from 'framer-motion';
import { CSSProperties, FC } from 'react';

import numericGenerator from '@utils/numericGenerator';

import styles from './Loader.module.scss';
import type { LoaderProps } from './Loader.props';

/**
 * Loader component.
 *
 * @param type
 * @param className
 * @param mainColor         color of loader.
 * @constructor
 */
const Loader: FC<LoaderProps> = ({ type, className, mainColor }) => {
  return (
    <>
      {type === 'circle' && (
        <motion.svg
          className={cn(className)}
          animate={{ rotate: [0, 360] }}
          transition={{
            duration: 2,
            ease: 'linear',
            repeat: Infinity,
          }}
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_127_6)'>
            <path
              d='M10 18.9709C10 19.5393 9.53807 20.0055 8.97274 19.9471C7.79078 19.825 6.6372 19.493 5.56716 18.9638C4.18886 18.2822 2.98631 17.2919 2.05297 16.07C1.11964 14.848 0.480658 13.4273 0.185706 11.9182C-0.109247 10.4092 -0.0522292 8.8524 0.352327 7.36895C0.756884 5.8855 1.49808 4.51532 2.51831 3.36492C3.53853 2.21452 4.81031 1.31488 6.23477 0.735926C7.65924 0.156975 9.19803 -0.0856897 10.7315 0.0267932C11.9221 0.114119 13.0845 0.413671 14.1648 0.908551C14.6815 1.14525 14.8428 1.78142 14.5543 2.27107V2.27107C14.2657 2.76072 13.6368 2.91689 13.1139 2.69405C12.3114 2.35199 11.4557 2.14356 10.581 2.0794C9.36309 1.99007 8.141 2.18279 7.0097 2.64258C5.87841 3.10238 4.86838 3.81686 4.05813 4.7305C3.24788 5.64414 2.65923 6.73231 2.33793 7.91045C2.01664 9.08859 1.97136 10.325 2.2056 11.5234C2.43985 12.7219 2.94732 13.8503 3.68857 14.8207C4.42981 15.7912 5.38486 16.5776 6.47949 17.119C7.2657 17.5078 8.10871 17.7626 8.97381 17.8753C9.53738 17.9487 10 18.4026 10 18.9709V18.9709Z'
              fill={mainColor}
            />
          </g>
          <defs>
            <clipPath id='clip0_127_6'>
              <rect width='20' height='20' fill='white' />
            </clipPath>
          </defs>
        </motion.svg>
      )}

      {type === 'three-dots' && (
        <div
          style={
            {
              '--main-color': mainColor,
            } as CSSProperties
          }
          className={cn(styles.loader, styles.threeDots, className)}
        >
          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1,
              ease: 'linear',
              repeatDelay: 2,
              repeat: Infinity,
            }}
            className={cn(styles.dot)}
          ></motion.div>

          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1,
              ease: 'linear',
              delay: 1,
              repeatDelay: 2,
              repeat: Infinity,
            }}
            className={cn(styles.dot)}
          ></motion.div>

          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1,
              delay: 2,
              repeatDelay: 2,
              ease: 'linear',
              repeat: Infinity,
            }}
            className={cn(styles.dot)}
          ></motion.div>
        </div>
      )}

      {type === 'wave' && (
        <div
          style={
            {
              '--main-color': mainColor,
            } as CSSProperties
          }
          className={cn(styles.loader, styles.verticalLines, className)}
        >
          {numericGenerator(10).map(num => {
            const startScale = 0.3;

            return (
              <motion.div
                animate={{
                  scaleY: [startScale, 1, startScale],
                }}
                transition={{
                  duration: 1,
                  delay: 0.1 * num,
                  ease: 'easeOut',
                  repeat: Infinity,
                }}
                className={cn(styles.line)}
                key={`wave-element-${num}`}
              ></motion.div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Loader;
