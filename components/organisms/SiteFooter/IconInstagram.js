import * as React from 'react'

const SvgIconInstagram = (props) => (
  <svg
    fill="none"
    viewBox="0 0 28 28"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <linearGradient
      id="icon_instagram_svg__a"
      gradientUnits="userSpaceOnUse"
      x1={21.875}
      x2={4.667}
      y1={3.208}
      y2={28}
    >
      <stop offset={0} stopColor="#d82e7c" />
      <stop offset={1} stopColor="#fbb44d" />
    </linearGradient>
    <mask
      id="icon_instagram_svg__b"
      height={28}
      maskUnits="userSpaceOnUse"
      width={28}
      x={0}
      y={0}
    >
      <path
        clipRule="evenodd"
        d="M0 14C0 6.268 6.268 0 14 0s14 6.268 14 14-6.268 14-14 14S0 21.732 0 14z"
        fill="#fff"
        fillRule="evenodd"
      />
    </mask>
    <path
      d="M0 14C0 6.268 6.268 0 14 0s14 6.268 14 14-6.268 14-14 14S0 21.732 0 14z"
      fill="url(#icon_instagram_svg__a)"
    />
    <g mask="url(#icon_instagram_svg__b)">
      <path
        clipRule="evenodd"
        d="M14 6.533c-2.027 0-2.282.01-3.078.045-.795.037-1.337.163-1.812.347-.491.191-.908.446-1.323.861-.415.415-.67.832-.862 1.323-.185.475-.31 1.018-.347 1.812-.035.797-.045 1.051-.045 3.08 0 2.027.01 2.28.046 3.077.036.795.162 1.338.346 1.812.191.491.446.908.862 1.323.414.415.831.671 1.322.862.475.185 1.018.31 1.812.347.797.036 1.051.045 3.079.045 2.028 0 2.282-.009 3.078-.045.795-.037 1.338-.162 1.813-.347.491-.19.907-.447 1.322-.862.415-.415.67-.832.862-1.322.183-.475.31-1.018.347-1.813.035-.796.045-1.05.045-3.078 0-2.028-.01-2.282-.045-3.079-.038-.795-.164-1.337-.347-1.812a3.666 3.666 0 0 0-.862-1.323 3.65 3.65 0 0 0-1.322-.86c-.476-.185-1.02-.311-1.814-.348-.797-.036-1.05-.045-3.079-.045zm-.669 1.346H14.001c1.993 0 2.23.007 3.017.043.728.033 1.123.155 1.386.257.349.135.597.297.858.558.262.262.423.51.56.86.101.262.223.657.256 1.385.036.787.044 1.024.044 3.016s-.008 2.23-.044 3.017c-.033.728-.155 1.123-.257 1.386a2.308 2.308 0 0 1-.559.857c-.26.262-.51.424-.858.559-.263.103-.658.224-1.386.257-.787.036-1.024.044-3.017.044-1.994 0-2.23-.008-3.017-.044-.728-.034-1.123-.155-1.387-.257a2.313 2.313 0 0 1-.859-.559 2.314 2.314 0 0 1-.558-.858c-.102-.263-.224-.658-.257-1.386-.036-.787-.043-1.024-.043-3.017s.007-2.23.043-3.017c.033-.728.155-1.123.257-1.386.135-.349.297-.597.558-.859.262-.261.51-.423.86-.559.262-.102.658-.224 1.386-.257.688-.031.955-.04 2.347-.042zm3.76 2.135a.896.896 0 1 1 0 0zm-3.09.152a3.835 3.835 0 1 0 0 7.669 3.835 3.835 0 0 0 0-7.67zM16.49 14a2.489 2.489 0 1 0-4.978 0 2.489 2.489 0 0 0 4.978 0z"
        fill="#fff"
        fillRule="evenodd"
      />
    </g>
  </svg>
)

export default SvgIconInstagram
