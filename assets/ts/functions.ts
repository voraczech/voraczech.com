export function getArticleId(articlePath: string | undefined): string {
  return articlePath?.split("/").pop() || ""
}

export const getReadableDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}
