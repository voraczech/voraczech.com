export function getArticleId(articlePath: string | undefined): string {
  return articlePath?.split("/").pop() || ""
}
