import React from "react";

interface coctailProps {
  className: string;
}

export const Martini: React.FC<coctailProps> = ({ className }) => {
  return (
    <svg
      width="35"
      height="50"
      viewBox="0 0 35 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M22.7212 47.9011C23.0767 48.029 23.4848 48.1755 23.893 48.3257C20.4677 48.3854 14.5583 48.3846 11.1377 48.3245C11.5482 48.1732 11.959 48.025 12.3171 47.8962C14.2482 47.201 15.4541 46.7567 15.8995 46.3979C17.0652 45.4597 17.1681 43.9867 17.1719 43.5624C17.174 43.4316 17.3631 31.0824 17.3049 25.357C17.3764 25.3596 17.4477 25.3625 17.5251 25.3625C17.5946 25.3625 17.658 25.3596 17.7226 25.3576C17.6647 31.0838 17.8547 43.4423 17.8567 43.5687C17.8608 43.996 17.9647 45.4629 19.1324 46.4031C19.5781 46.7619 20.7863 47.2062 22.7212 47.9011ZM13.1232 15.4783C12.4093 15.4783 11.5604 15.0389 10.9076 14.3315C10.3982 13.7796 10.0543 13.1114 9.96326 12.4974C9.91846 12.1958 9.89811 11.6401 10.2647 11.3042C10.45 11.134 10.7048 11.0476 11.0213 11.0476C11.7352 11.0476 12.5841 11.487 13.237 12.1946C13.7464 12.7462 14.0905 13.4147 14.1813 14.0284C14.2261 14.3301 14.2465 14.8857 13.8799 15.2216C13.6946 15.3918 13.4397 15.4783 13.1232 15.4783ZM33.9177 8.6891C34.1118 8.4768 34.1618 8.17054 34.0455 7.90778C33.9291 7.64502 33.6684 7.47565 33.3801 7.47565H9.96414C9.56239 7.47565 9.23685 7.80019 9.23685 8.20071C9.23685 8.60123 9.56239 8.92577 9.96414 8.92577H31.7332L29.8775 10.9559H16.0734C15.6717 10.9559 15.3461 11.2805 15.3461 11.681C15.3461 12.0815 15.6717 12.406 16.0734 12.406H28.5518L20.3359 21.3933L15.2882 15.7625C15.6074 15.2251 15.7287 14.547 15.6202 13.8167C15.4858 12.9089 15.0197 11.9841 14.3075 11.2126C13.3743 10.2013 12.1457 9.59746 11.0213 9.59746C10.6341 9.59746 10.2743 9.67083 9.95105 9.80859L1.56126 0.449554C1.29361 0.151699 0.83397 0.125294 0.534325 0.392117C0.23497 0.659229 0.209079 1.11747 0.476724 1.4159L8.85633 10.7636C8.53748 11.3011 8.41587 11.9791 8.52438 12.7091C8.65879 13.6169 9.12483 14.5418 9.83729 15.3132C10.7706 16.3246 11.9988 16.9284 13.1232 16.9284C13.5104 16.9284 13.87 16.855 14.1932 16.7175L19.3509 22.471L18.0633 23.8794C17.9207 23.8979 17.7412 23.9124 17.5251 23.9124C17.3101 23.9124 17.1312 23.8979 16.9892 23.8796L6.49901 12.406H7.34588C7.74764 12.406 8.07318 12.0815 8.07318 11.681C8.07318 11.2805 7.74764 10.9559 7.34588 10.9559H5.1733L3.31695 8.92577H5.01854C5.4203 8.92577 5.74583 8.60123 5.74583 8.20071C5.74583 7.80019 5.4203 7.47565 5.01854 7.47565H1.67007C1.38206 7.47565 1.1214 7.64502 1.00474 7.90778C0.888661 8.17054 0.938696 8.4768 1.13274 8.6891L15.843 24.7787C15.9221 30.1618 15.7197 43.4049 15.7173 43.545C15.7159 43.7361 15.6725 44.7169 14.9863 45.2697C14.6942 45.4988 13.0348 46.0963 11.8231 46.5328C8.48715 47.7338 7.75811 48.0519 7.61556 48.6894C7.55563 48.9577 7.63679 49.2352 7.83287 49.4304C8.09091 49.6879 8.22067 49.819 17.519 49.819C17.5458 49.819 17.5708 49.819 17.5972 49.819C26.817 49.819 26.9479 49.6888 27.2054 49.4318C27.4018 49.2364 27.4829 48.9582 27.4227 48.69C27.2802 48.0528 26.5505 47.7355 23.214 46.5368C22.0003 46.1009 20.3383 45.5038 20.0459 45.2749C19.357 44.7198 19.3131 43.7451 19.3113 43.5508C19.309 43.4156 19.1062 30.2065 19.1839 24.806L33.9177 8.6891Z"
        fill="#333333"
      />
    </svg>
  );
};
