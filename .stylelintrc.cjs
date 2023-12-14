module.exports = {
  extends: [
    // https://github.com/constverum/stylelint-config-rational-order
    // 'stylelint-config-rational-order',
    // https://github.com/shannonmoeller/stylelint-config-prettier
    'stylelint-config-standard',
    'stylelint-order-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-recommended-vue'
  ],
  plugins: [
    // https://github.com/kristerkari/stylelinyt-scss#list-of-rules
    'stylelint-scss',
    // https://github.com/hudochenkov/stylelint-order
    'stylelint-order',
  //   'stylelint-config-rational-order/plugin'
  ],
  "rules": {
    "media-query-no-invalid": null,
  }
}
