import React from "react";
import classNames from "classnames";

import { IconProps } from "./Icon.types";

import "./Icon.scss";

const Icon: React.FC<IconProps> = ({ modifier, children }) => (
  <div data-testid="Icon" className={classNames(
    'f-icon',
    {
      'f-icon--success': modifier === 'success',
      'f-icon--danger': modifier === 'danger',
      'f-icon--info': modifier === 'info'
    })}
  >
    {children}
  </div>
);

export const UpdateIcon: React.FC<IconProps> = ({ modifier }) => (
    <Icon {...{modifier}}>
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                d="M0.713989 10.353L3.50099 14.503L6.70599 10.665"
                stroke="#4E4D47"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M23.2859 14.6551L20.5009 10.5031L17.2939 14.3421"
                stroke="#4E4D47"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M20.464 10.54C20.8021 12.6833 20.3197 14.8753 19.1131 16.6787C17.9064 18.482 16.0642 19.764 13.9539 20.269C12.5519 20.6016 11.0882 20.5719 9.70079 20.1829C8.31334 19.7938 7.04769 19.0581 6.02295 18.045"
                stroke="#4E4D47"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M3.50501 14.479C3.22197 13.3435 3.16688 12.1631 3.34294 11.0061C3.51899 9.84912 3.92269 8.73853 4.53069 7.73856C5.13868 6.7386 5.93891 5.8691 6.88508 5.18036C7.83125 4.49163 8.90459 3.99732 10.043 3.72604C11.5397 3.37139 13.1046 3.42984 14.5706 3.89516C16.0367 4.36047 17.3488 5.21518 18.367 6.36804"
                stroke="#4E4D47"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            </svg>
    </Icon>
);

export const ExclamationMarkIcon: React.FC<IconProps> = ({modifier}) => (
  <Icon {...{modifier}}>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.5 11.8024C23.5077 14.8728 22.3048 17.8224 20.1521 20.0119C17.9994 22.2013 15.0703 23.4542 12 23.4987C10.5005 23.5213 9.01135 23.2459 7.61905 22.6886C6.22674 22.1313 4.95895 21.3032 3.8892 20.2522C2.81944 19.2012 1.96901 17.9484 1.38723 16.5662C0.805446 15.1841 0.503889 13.7002 0.500046 12.2007C0.491468 9.12983 1.69398 6.17937 3.84679 3.98923C5.99959 1.79908 8.92911 0.545824 12 0.501266C13.4998 0.478844 14.9891 0.754394 16.3815 1.31193C17.774 1.86947 19.0418 2.69791 20.1116 3.74918C21.1814 4.80046 22.0318 6.05365 22.6134 7.43608C23.195 8.8185 23.4964 10.3026 23.5 11.8024Z"
        stroke="#4E4D47"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 14.005V7.005"
        stroke="#4E4D47"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.991 16.005C11.9583 16.0055 11.926 16.0126 11.8961 16.0257C11.8661 16.0389 11.8392 16.0579 11.8167 16.0817C11.7942 16.1055 11.7768 16.1335 11.7653 16.1641C11.7538 16.1947 11.7486 16.2273 11.75 16.26C11.7523 16.3256 11.7799 16.3878 11.8271 16.4335C11.8743 16.4792 11.9373 16.5048 12.003 16.505V16.505C12.0356 16.5044 12.0678 16.4972 12.0977 16.484C12.1275 16.4708 12.1545 16.4518 12.1769 16.428C12.1993 16.4043 12.2168 16.3763 12.2283 16.3458C12.2399 16.3152 12.2452 16.2826 12.244 16.25C12.242 16.1858 12.2157 16.1248 12.1703 16.0793C12.125 16.0338 12.0641 16.0073 12 16.005H11.995"
        stroke="#4E4D47"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </Icon>
);

export default Icon;

