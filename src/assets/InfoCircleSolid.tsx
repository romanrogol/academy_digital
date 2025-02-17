import { FC } from "react";

const InfoCircleSolid: FC = () => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_813_11110)">
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            fill="#7EBBED"
            stroke="black"
          />
          <path d="M12 17V11" stroke="#0D1E4A" strokeLinecap="round" />
          <path
            d="M12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"
            fill="#0D1E4A"
          />
        </g>
        <defs>
          <clipPath id="clip0_813_11110">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default InfoCircleSolid;
