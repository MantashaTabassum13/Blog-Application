const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
const blogs = [
    {
        title: "You Are Not Just Talented, You Are Spiritually Gifted",
        description: "I want to make a difference in the world.",
        content: "   We are not talking about “spiritual” as some nebulous, impersonal energy. Rather, spiritual gifts come exclusively from the Holy Spirit. He is the source and sustenance of spiritual gifts. Having the Holy Spirit is a necessary prerequisite to unleashing our spiritual gifts.",
        image: "https://newbreak.church/wp-content/uploads/2023/02/3kv48ns4wuu-1024x683.jpg"
    },
    {
        title: "A Lesson in Reading the “Commands” of Scripture",
        description: "Let the indicatives (truths) of Scripture set up the imperatives (commands).",
        content: "Its easy to overlook the word “therefore,” in verse 5 (above), but less not do that. It is there for a reason! And its purpose is to link what came before with what is being said. To be purposefully redundant, the “therefore” links the imperative to the indicative; it links the call to action with the truth that has already been substantiated. So, where is the indicative? Where is that truth that is grounding this ethical call to action? Unsurprisingly, it is contained within the passage that came just prior.",
        image: "https://newbreak.church/wp-content/uploads/2023/02/xqxjjhk-c08-1024x683.jpg"
    },
    {
        title: "You Were Loved Into Existence",
        description: "If God created us (and he surely did!) then we are loved into existence!",
        content: "Prior to receiving Christ as Lord, the Ephesians grew up in an ancient Greco-Roman pagan background that told a drastically different narrative than Christianity. They were religious but they might as well have been atheists since their so-called “gods” did not care about them. Greco-Roman religion would never use language such as “Artemis loves you,” or fill in the blank. They served a purpose to the gods, sure. So they had a “purpose,” but it was not a purpose born out of love. Rather, their purpose was born out of utilitarian causes. Pagan religion taught that the “gods” created humans to serve them and do the grunt work they didn’t want to do, such as feeding themselves (via the sacrifices) and so on. The relationship was transactional: you do this for me, a god, and I’ll bestow some blessings on you.",
        image: "https://newbreak.church/wp-content/uploads/2023/01/abkeaojny0s-1024x683.jpg"
    }
]

app.get("/blogs", (req, res) => {
    res.json(blogs)
})
app.listen(6060, () => {
    console.log("yyeyeye")
})