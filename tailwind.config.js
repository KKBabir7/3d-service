// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./src/app/**/*.{js,ts,jsx,tsx}",
//     "./src/components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     fontFamily: {
//       'tag-font' : ['Rubik Doodle Shadow', 'system-ui'],
//       'anek-latin' : [ 'Anek Latin', 'sans-serif'],
//       'ibm-plex' : [ 'IBM Plex Mono', 'monospace']
//     },
//     container: {
//       screens: {
       
//         '2xl': '1600px',
//       },

//       padding: {
//         DEFAULT: '10px',
//         sm: '10px',
//         lg: '20px',
//         xl: '20px',
//         '2xl': '0px',
//       },

//     },
//     extend: {
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-conic':
//           'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       },
//       boxShadow: {
//         'kow-shadow': '-3px 3px 7px gray',
//         'kow-shadow-sm': '5px 5px 5px #818181'
//       },
//       colors: {
//         'kow-gray-light': '#dde1e1', 
//         'kow-green': '#309c9c',
//         'kow-green-light': '#b1cc40',
//         'kow-text-black': '#333333',
//       },
//        fontFamily: {
//        roboto: ['"Roboto Condensed"', 'sans-serif'],
//        rubik: ['"Rubik Doodle Shadow"', 'cursive'],
//     },
//      keyframes: {
//         'slide-down': {
//           '0%': {
//             opacity: '0',
//             transform: 'translateY(-30px)'
//           },
//           '100%': {
//             opacity: '1',
//             transform: 'translateY(0)'
//           }
//         },
//         'slide-up': {
//           '0%': {
//             opacity: '0',
//             transform: 'translateY(30px)'
//           },
//           '100%': {
//             opacity: '1',
//             transform: 'translateY(0)'
//           }
//         },
//         'scale-pulse': {
//           '0%, 100%': {
//             transform: 'scale(1)'
//           },
//           '50%': {
//             transform: 'scale(1.05)'
//           }
//         }
//       },
//       animation: {
//         'slide-down': 'slide-down 0.8s ease-out',
//         'slide-up': 'slide-up 0.8s ease-out',
//         'scale-pulse': 'scale-pulse 4s ease-in-out infinite'
//       },
//     },
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}", // Add this if you're using pages directory
  ],
  theme: {
    container: {
      screens: {
        '2xl': '1600px',
      },
      padding: {
        DEFAULT: '10px',
        sm: '10px',
        lg: '20px',
        xl: '20px',
        '2xl': '0px',
      },
    },
    extend: {
      fontFamily: {
        'tag-font': ['Rubik Doodle Shadow', 'system-ui'],
        'anek-latin': ['Anek Latin', 'sans-serif'],
        'ibm-plex': ['IBM Plex Mono', 'monospace'],
        roboto: ['"Roboto Condensed"', 'sans-serif'],
        rubik: ['"Rubik Doodle Shadow"', 'cursive'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'kow-shadow': '-3px 3px 7px gray',
        'kow-shadow-sm': '5px 5px 5px #818181'
      },
      colors: {
        'kow-gray-light': '#dde1e1',
        'kow-green': '#FF6900',
        'kow-green-light': '#b1cc40',
        'kow-text-black': '#333333',
      },
      keyframes: {
        'slide-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'slide-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'scale-pulse': {
          '0%, 100%': {
            transform: 'scale(1)'
          },
          '50%': {
            transform: 'scale(1.05)'
          }
        }
      },
      animation: {
        'slide-down': 'slide-down 0.8s ease-out',
        'slide-up': 'slide-up 0.8s ease-out',
        'scale-pulse': 'scale-pulse 4s ease-in-out infinite'
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // Add this plugin
}
