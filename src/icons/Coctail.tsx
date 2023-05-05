import React from "react";

interface CoctailProps {
  className: string;
}

export const Coctail: React.FC<CoctailProps> = ({ className }) => {
  return (
    <svg
      width="20"
      height="48"
      viewBox="0 0 20 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14.8437 45.1276C14.7669 45.6833 14.2261 46.2088 13.7304 46.2088H5.41043C4.9147 46.2088 4.37389 45.6833 4.29708 45.1279C3.71408 40.8965 2.36509 30.6427 2.15622 27.7381C1.94646 24.8216 1.91738 19.1589 1.91447 16.9745C3.49183 17.123 7.24525 17.4516 9.5499 17.4516C11.8746 17.4516 15.6746 17.1172 17.2266 16.9707C17.2234 19.1517 17.1943 24.8214 16.9846 27.7402C16.776 30.6421 15.427 40.8959 14.8437 45.1276ZM3.72601 9.72914C4.08587 9.04062 4.6488 8.47536 5.06016 8.06237C5.21202 7.90982 5.34032 7.77989 5.44766 7.65808C6.39693 7.72478 8.5727 7.8666 9.84081 7.8666C11.0915 7.8666 12.8847 7.72914 13.6975 7.66098C13.8037 7.78134 13.9308 7.90982 14.0804 8.06005C14.4917 8.47333 15.0549 9.03917 15.4151 9.72798C15.7883 10.4417 16.1947 11.7201 16.4915 12.6537C16.5662 12.8884 16.6276 13.0806 16.6815 13.2442C14.9639 13.4008 11.6055 13.6813 9.5499 13.6813C7.51056 13.6813 4.18828 13.4052 2.45848 13.248C2.51259 13.0835 2.57427 12.8904 2.64933 12.6543C2.94606 11.721 3.35247 10.4429 3.72601 9.72914ZM6.16477 2.56295C6.19503 2.13691 6.27911 1.83529 7.09164 1.83529H12.0492C12.8617 1.83529 12.9458 2.13691 12.976 2.56295C12.9891 2.74682 13.0045 3.04729 13.0229 3.4075C13.0924 4.76858 13.1494 5.65343 13.2134 6.24508C12.3261 6.31527 10.8669 6.41649 9.84081 6.41649C8.77547 6.41649 6.97877 6.30772 5.92855 6.23725C5.99226 5.64531 6.04899 4.76278 6.11794 3.40838C6.13656 3.04759 6.15168 2.74682 6.16477 2.56295ZM17.5885 14.8277C17.6089 15.0209 17.5219 15.29 17.4344 15.4939C16.2233 15.6102 11.9782 16.0015 9.5499 16.0015C7.15128 16.0015 2.97777 15.6198 1.70879 15.498C1.62006 15.2935 1.53191 15.0224 1.55227 14.828C1.56042 14.7489 1.58223 14.6987 1.63867 14.6282C3.00511 14.7593 7.09833 15.1314 9.5499 15.1314C12.0256 15.1314 16.1747 14.752 17.4995 14.6244C17.5583 14.6969 17.5804 14.7474 17.5885 14.8277ZM19.0356 14.6781C18.9695 14.0444 18.6332 13.6972 18.4107 13.4678C18.3286 13.3831 18.2576 13.3098 18.2271 13.2509C18.1712 13.1375 18.0089 12.6265 17.878 12.2155C17.5653 11.2312 17.1367 9.88343 16.7047 9.05744C16.2428 8.17403 15.5629 7.49074 15.1131 7.03859C14.9741 6.89909 14.8047 6.72885 14.7413 6.6488C14.622 6.19753 14.5199 4.20013 14.4754 3.33383C14.4565 2.96115 14.4405 2.65083 14.4271 2.46086C14.3323 1.1224 13.4878 0.38517 12.0492 0.38517H7.09164C5.65305 0.38517 4.80852 1.1224 4.71397 2.46086C4.7003 2.65083 4.68429 2.96173 4.66538 3.33441C4.62116 4.20042 4.51934 6.19521 4.39978 6.64938C4.33316 6.73407 4.16559 6.90257 4.02798 7.04062C3.57793 7.49247 2.89806 8.17519 2.43608 9.0586C2.00436 9.8843 1.57555 11.232 1.26281 12.2161C1.13219 12.627 0.969564 13.1381 0.914581 13.25C0.883162 13.3103 0.812175 13.3834 0.730136 13.4681C0.507875 13.6978 0.171284 14.0447 0.105245 14.6784C0.0400799 15.3063 0.303947 15.9469 0.459588 16.2605C0.457552 17.4994 0.459005 24.4113 0.705413 27.8417C0.916619 30.7816 2.27084 41.0792 2.85617 45.3254C3.03363 46.6122 4.17955 47.6589 5.41043 47.6589H13.7304C14.9615 47.6589 16.1072 46.6119 16.2846 45.3251C16.87 41.0786 18.2242 30.7808 18.4357 27.8437C18.6821 24.4133 18.6833 17.4997 18.6815 16.2613C18.8366 15.9475 19.101 15.3063 19.0356 14.6781Z"
        fill="#333333"
      />
      <path
        d="M4.89181 20.0461C4.92992 19.6476 4.63667 19.2935 4.23666 19.2555C3.83432 19.2164 3.48201 19.5101 3.4439 19.9086C3.12738 23.2245 3.65512 31.0014 4.72192 35.3512C4.80308 35.6824 5.10039 35.9043 5.42797 35.9043C5.48499 35.9043 5.54318 35.8976 5.60107 35.8834C5.99149 35.7883 6.23033 35.3959 6.1349 35.007C5.11756 30.8588 4.59245 23.1853 4.89181 20.0461Z"
        fill="#333333"
      />
    </svg>
  );
};