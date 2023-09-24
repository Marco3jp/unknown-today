import {UnknownTodayNews} from "@/type/unknownTodayNews";

export default function NewsPage() {
    const newsMock: UnknownTodayNews = {
        id: 0,
        title: "",
        content: "",
        authors: [],
        tag: [],
        date: "",
        newsPublishedAt: "",
        newsUpdatedAt: ""
    }

    return (
        <>
            <h1>Unknown Today</h1>
            <main className="conainer">
                <article>
                    <div className="border-2 border-blue-300 p-2">
                        <h2>{newsMock.title}</h2>
                        <p>{newsMock.date}</p>
                        <p>公開日: <time>{newsMock.newsPublishedAt}</time></p>
                        <p>更新日: <time>{newsMock.newsUpdatedAt}</time></p>
                        <ul className="list-none text-gray-500 flex">
                            {newsMock.authors.map((author, index) => (
                                <li key={author} className={`${index ? 'ml-0.5' : ''}`}>{author}</li>
                            ))}
                        </ul>
                        <ul className="list-none text-gray-500">
                            {newsMock.tag.map((tag, index) => (
                                <li key={tag} className={`${index ? 'ml-0.5' : ''}`}>{tag}</li>
                            ))}
                        </ul>
                    </div>

                    <div dangerouslySetInnerHTML={{__html: newsMock.content}}></div>
                </article>
            </main>
        </>
    );
}
