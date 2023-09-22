// ニュース本文に当たるパース可能なHTML文字列（article以下に置かれるやつ）
type NewsContent = string

// なるべくインターフェイスに依存しない形で定義する
export type News = {
    id: number
    title: string
    content: NewsContent
}
