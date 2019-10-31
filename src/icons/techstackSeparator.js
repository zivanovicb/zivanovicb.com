import React from "react"

const TechstackSeparator = ({ width, height, className }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 28 275"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="273" width="28" height="2" fill="url(#paint0_linear)" />
      <rect x="2" y="182" width="26" height="2" fill="url(#paint1_linear)" />
      <rect x="2" width="26" height="2" fill="url(#paint2_linear)" />
      <rect
        x="1.75"
        y="91"
        width="26.25"
        height="2"
        fill="url(#paint3_linear)"
      />
      <path d="M0 0H2V147.939H0V0Z" fill="url(#paint4_linear)" />
      <path d="M0 126.587H2V273H0V126.587Z" fill="url(#paint5_linear)" />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="28"
          y1="274"
          x2="-1.15085e-08"
          y2="274"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.989583" stop-color="#F68B9D" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="28"
          y1="183"
          x2="2"
          y2="183"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.989583" stop-color="#F68B9D" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="28"
          y1="1"
          x2="2"
          y2="1"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.989583" stop-color="#F68B9D" />
        </linearGradient>
        <linearGradient
          id="paint3_linear"
          x1="28"
          y1="92"
          x2="1.75"
          y2="92"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.989583" stop-color="#F68B9D" />
        </linearGradient>
        <linearGradient
          id="paint4_linear"
          x1="1"
          y1="0"
          x2="1"
          y2="147.939"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="#F68B9D" />
        </linearGradient>
        <linearGradient
          id="paint5_linear"
          x1="1"
          y1="126.587"
          x2="1"
          y2="273"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="#F68B9D" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default TechstackSeparator
