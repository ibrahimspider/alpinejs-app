/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*"],
    theme: {
        extend: {
            keyframes: {
                dotAnimatedBottomToTop2: {
                  '0%': { bottom: '64%' },
                  '50%': { bottom: '0%' },
                  '100%': { bottom: '100%' },
                },
                dotAnimatedBottomToTop3: {
                    '0%': { bottom: '5%' },
                    '50%': { bottom: '100%' },
                    '100%': { bottom: '5%' },
                  },
                  heAnimate: {
                    '0%': { left: '0%' },
                    '50%': { left: '50%' },
                  '100%': { left: '0%' },
                  },
                  loadingAnimate: {
                    '0%': { transform: 'rotate(0)' },
                    '50%': { transform: 'rotate(369deg)' },
                    '100%': { transform: 'rotate(0)' },
                  }
              },
              animation: {
                'dot-item-1': 'dotAnimatedBottomToTop2 20s infinite linear',
                'dot-item-2': 'dotAnimatedBottomToTop2 30s infinite linear',
                'dot-item-3': 'dotAnimatedBottomToTop3 30s infinite linear',
                'header-hr-animate': 'heAnimate 5s infinite linear',
                'loading-animate': 'loadingAnimate 3s infinite linear',

              },
              colors: {
                'dark': '#1e1e1e',
                'main': '#d6ecfa',
              },
        },
    },
    plugins: [],
}

 
