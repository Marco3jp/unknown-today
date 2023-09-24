// ニュース本文に当たるパース可能なHTML文字列（article以下に置かれるやつ）
type UnknownTodayNewsContent = string

// なるべくインターフェイスに依存しない形で定義する
export type UnknownTodayNews = {
    id: number
    title: string
    content: UnknownTodayNewsContent

    // ニュースの執筆者。特筆する場合のみ書く、が安定なのかな〜と見ている（これは私目線
    authors: string[]

    // ニュースにアサインされたタグの配列
    // thinking: これはstringじゃなくてenumとかを持つようにしたほうが良いかも
    tag: string[]

    // 記事を公開した日付。ただし現実世界のウェブサイト上に限った情報で、ニュース自体の執筆、公開日とは関係がない
    // 「公開日」とか「出版日」みたいな言葉をつけてしまうと、ウェブサイトとUnknownTodayとニュースの関係性が固まってしまいそうなので避けている
    // 原則YYYY-MM-DD、ただし表現のためには任意の文字列を入れることも許容
    // 　＝基本的に日付として扱えないStringとして解釈するべき、ページネーションに使うのはIDで、月別フィルタくらいは作っても良いかも？
    date: string

    // 以下のデータは命名規則こそ ~edAt としているが、DBへの記録とは全く関係がない
    // 完全に創作のために用意されたプロパティであることに注意

    // ニュースの公開日時、ただしウェブサイト上での公開日と一致するとは限らない
    newsPublishedAt: string
    // ニュースの更新日時（同上）
    newsUpdatedAt: string
}
