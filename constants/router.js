export const MAP_ROUTER_NAME = {
  "": "Trang Chủ",
  "bai-viet": "Bài Viết",
  "cac-linh-vuc": "Các lĩnh vực",
}

/**
 * slugKey: use to map with router.query
 * dataKey: use to map with blogListMock
 * labelKey: use to get label from blogListMock
 */
export const MAP_QUERY_KEY_NAME = {
  "[categoryId]": { slugKey: "categoryId", dataKey: "categoryId", labelKey: "category" },
  "[blogId]": { slugKey: "blogId", dataKey: "id", labelKey: "title" }
}
