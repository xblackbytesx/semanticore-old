module.exports = {
  plugins: {
    "postcss-custom-properties": {
      preserve: true,
    },
    "postcss-nested": {},
    cssnano: {
      preset: [
        "default",
        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    },
  },
};
