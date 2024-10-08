module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  plugins: [require('@trivago/prettier-plugin-sort-imports')],
  importOrder: [
    '^react$', // React
    '^@?\\w', // Інші зовнішні бібліотеки
    '^(@|components|screens|hooks|assets)(/.*|$)', // Внутрішні імпорти проекту
    '^[./]', // Відносні імпорти
  ],
  importOrderSeparation: true, // Відокремлює групи імпортів порожнім рядком
  importOrderSortSpecifiers: true,
}
