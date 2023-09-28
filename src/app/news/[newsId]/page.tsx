import {UnknownTodayNews} from "@/type/unknownTodayNews";

export default function NewsPage() {
    const newsMock: UnknownTodayNews = {
        id: 0,
        title: "Unknown Todayが創刊",
        content: "<p>Unknown Todayが創刊されました。</p>" +
            "<p>Unknown Todayは個人が営む新聞ではありつつも、従来はなかった切り口で『今日』を写します。</p>" +
            "<p>誰にも知られていなかった『今日』をぜひ味わっていただければと思います。</p>" +
            "<p>そしてあなたに『今日』がやってきますように。</p>" +
            "<p>―― Unknown Today <span class='bg-gray-300 blur-sm'>----------------</span> Marco</p>",
        authors: ["Marco"],
        tag: ["編集部より"],
        date: "2023/09/28", // WIP: リリース日に合わせて調整する
        newsPublishedAt: "2XXX/XX/XX",
        newsUpdatedAt: "",
    }

    return (
        <>
            <main className="px-4">
                <article>
                    <div className="border-b py-2">
                        <h2 className="inline text-lg font-bold">{newsMock.title}</h2>
                        <small className="ml-1 text-sm text-gray-500">
                            <time>({newsMock.date})</time>
                        </small>

                        <div>
                            <span className="text-gray-500">
                            {
                                (newsMock.newsUpdatedAt === "") && (
                                    <span>公開 </span>
                                )
                            }
                                <time
                                    className={(newsMock.newsUpdatedAt !== "" ? "text-sm" : "")}>{newsMock.newsPublishedAt}</time>
                            </span>

                            <ul className="inline-flex text-blue-500 ml-2">
                                {newsMock.tag.map((tag, index) => (
                                    <li key={tag} className={`${index ? 'ml-0.5' : ''}`}>{tag}</li>
                                ))}
                            </ul>

                            <span>――</span>

                            <ul className="inline-flex text-sky-500 ml-1">
                                {newsMock.authors.map((author, index) => (
                                    <li key={author} className={`${index ? 'ml-0.5' : ''}`}>{author}</li>
                                ))}
                            </ul>
                        </div>

                        {
                            (newsMock.newsUpdatedAt !== "") &&
                            <p className="text-gray-500">更新 <time>{newsMock.newsUpdatedAt}</time></p>
                        }
                    </div>

                    <div className="mt-2" dangerouslySetInnerHTML={{__html: newsMock.content}}></div>
                </article>
            </main>
        </>
    );
}
