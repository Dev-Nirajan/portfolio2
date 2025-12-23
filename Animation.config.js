module.exports = {
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': { width: '0ch' },
          '100%': { width: '100%' },
        },
        blink: {
          '50%': { 'border-color': 'transparent' },
        },
      },
      animation: {
        typing: 'typing 2s steps(15) infinite alternate, blink .7s infinite',
      },
    },
  },
}
