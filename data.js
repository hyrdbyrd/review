
const chats = [
    {
        chatId: 1,
        author: 'Tom',
        title: 'Group1',
        last_date: new Date(),
        message: 'lorem ipsum', 
        avatar: "https://yt3.ggpht.com/a/AGF-l7_2Yb4zGh_CpGmALFruR4XavmxUDZC7zoTbNQ=s900-c-k-c0xffffffff-no-rj-mo"
    },
    {
        chatId: 2,
        author: 'Jerry',
        title: 'Group2',
        last_date: new Date(),
        message: 'lorem ipsum', 
        avatar: "https://yt3.ggpht.com/a/AGF-l7_2Yb4zGh_CpGmALFruR4XavmxUDZC7zoTbNQ=s900-c-k-c0xffffffff-no-rj-mo"
    },
    {
        chatId: 3,
        author: 'Jane',
        title: 'Group3',
        last_date: new Date(),
        message: 'Lorem, ipsum dolor sit amet consectetur', 
        avatar: "https://yt3.ggpht.com/a/AGF-l7_2Yb4zGh_CpGmALFruR4XavmxUDZC7zoTbNQ=s900-c-k-c0xffffffff-no-rj-mo"
    },
    {
        chatId: 4, 
        author: 'Tomas',
        title: 'Group4',
        last_date: new Date(),
        message: 'lorem ipsum', 
        avatar: "https://yt3.ggpht.com/a/AGF-l7_2Yb4zGh_CpGmALFruR4XavmxUDZC7zoTbNQ=s900-c-k-c0xffffffff-no-rj-mo"
    },
    {
        chatId: 5,
        author: 'Tom',
        title: 'Group5',
        last_date: new Date("2020-06-24T13:51:50.417-07:00"),
        message: 'Lorem, ipsum dolor sit amet consectetur', 
        avatar: "https://yt3.ggpht.com/a/AGF-l7_2Yb4zGh_CpGmALFruR4XavmxUDZC7zoTbNQ=s900-c-k-c0xffffffff-no-rj-mo"
    },
    {
        chatId: 6,
        author: 'Eugene',
        title: 'Group6',
        last_date: new Date(),
        message: 'Lorem, ipsum dolor sit amet consectetur', 
        avatar: "https://yt3.ggpht.com/a/AGF-l7_2Yb4zGh_CpGmALFruR4XavmxUDZC7zoTbNQ=s900-c-k-c0xffffffff-no-rj-mo"
    }
]

const messages = [
    {
        messageId: 1,
        author: 'Tom',
        messageDate: new Date("2020-06-23T13:51:50.417-07:00"),
        message: ' Lorem, ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vitae quidem vel, dolorem ad suscipit perferendis odio rerum delectus ea corrupti possimus assumenda pariatur facilis omnis sit veritatis inventore consequatur?', 
        avatar: "https://yt3.ggpht.com/a/AGF-l7_2Yb4zGh_CpGmALFruR4XavmxUDZC7zoTbNQ=s900-c-k-c0xffffffff-no-rj-mo"
    },
    {
        messageId: 2,
        author: 'Jane',
        messageDate: new Date("2020-06-22T13:51:50.417-07:00"),
        message: ' Lorem, ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vitae quidem vel, dolorem ad suscipit perferendis odio rerum delectus ea corrupti possimus assumenda pariatur facilis omnis sit veritatis inventore consequatur?', 
        avatar: "https://yt3.ggpht.com/a/AGF-l7_2Yb4zGh_CpGmALFruR4XavmxUDZC7zoTbNQ=s900-c-k-c0xffffffff-no-rj-mo"
    },
    {
        messageId: 3,
        author: 'Tom',
        messageDate: new Date("2020-06-21T13:51:50.417-07:00"),
        message: ' Lorem, ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vitae quidem vel, dolorem ad suscipit perferendis odio rerum delectus ea corrupti possimus assumenda pariatur facilis omnis sit veritatis inventore consequatur?', 
        avatar: "https://yt3.ggpht.com/a/AGF-l7_2Yb4zGh_CpGmALFruR4XavmxUDZC7zoTbNQ=s900-c-k-c0xffffffff-no-rj-mo"
    },
    {
        messageId: 5,
        author: 'Tomas',
        messageDate: new Date("2020-06-22T13:51:50.417-07:00"),
        message: ' Lorem, ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vitae quidem vel, dolorem ad suscipit perferendis odio rerum delectus ea corrupti possimus assumenda pariatur facilis omnis sit veritatis inventore consequatur?', 
        avatar: "https://yt3.ggpht.com/a/AGF-l7_2Yb4zGh_CpGmALFruR4XavmxUDZC7zoTbNQ=s900-c-k-c0xffffffff-no-rj-mo"
    },
    {
        messageId: 6,
        author: 'Tom',
        messageDate: new Date("2020-06-22T13:51:50.417-07:00"),
        message: ' Lorem, ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vitae quidem vel, dolorem ad suscipit perferendis odio rerum delectus ea corrupti possimus assumenda pariatur facilis omnis sit veritatis inventore consequatur?', 
        avatar: "https://yt3.ggpht.com/a/AGF-l7_2Yb4zGh_CpGmALFruR4XavmxUDZC7zoTbNQ=s900-c-k-c0xffffffff-no-rj-mo"
    },
    {
        messageId: 7,
        author: 'Tom',
        messageDate: new Date("2020-06-22T13:51:50.417-07:00"),
        message: ' Lorem, ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vitae quidem vel, dolorem ad suscipit perferendis odio rerum delectus ea corrupti possimus assumenda pariatur facilis omnis sit veritatis inventore consequatur?', 
        avatar: "https://yt3.ggpht.com/a/AGF-l7_2Yb4zGh_CpGmALFruR4XavmxUDZC7zoTbNQ=s900-c-k-c0xffffffff-no-rj-mo"
    },
    {
        messageId: 8,
        author: 'Tom',
        messageDate: new Date("2020-06-22T13:51:50.417-07:00"),
        message: ' Lorem, ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vitae quidem vel, dolorem ad suscipit perferendis odio rerum delectus ea corrupti possimus assumenda pariatur facilis omnis sit veritatis inventore consequatur?', 
        avatar: "https://yt3.ggpht.com/a/AGF-l7_2Yb4zGh_CpGmALFruR4XavmxUDZC7zoTbNQ=s900-c-k-c0xffffffff-no-rj-mo"
    },
    {
        messageId: 9,
        author: 'Tom',
        messageDate: new Date("2020-06-22T13:51:50.417-07:00"),
        message: ' Lorem, ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vitae quidem vel, dolorem ad suscipit perferendis odio rerum delectus ea corrupti possimus assumenda pariatur facilis omnis sit veritatis inventore consequatur?', 
        avatar: "https://yt3.ggpht.com/a/AGF-l7_2Yb4zGh_CpGmALFruR4XavmxUDZC7zoTbNQ=s900-c-k-c0xffffffff-no-rj-mo"
    },
    {
        messageId: 10,
        author: 'Tom',
        messageDate: new Date("2020-06-22T13:51:50.417-07:00"),
        message: ' Lorem, ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vitae quidem vel, dolorem ad suscipit perferendis odio rerum delectus ea corrupti possimus assumenda pariatur facilis omnis sit veritatis inventore consequatur?', 
        avatar: "https://yt3.ggpht.com/a/AGF-l7_2Yb4zGh_CpGmALFruR4XavmxUDZC7zoTbNQ=s900-c-k-c0xffffffff-no-rj-mo"
    },
    {
        messageId: 11,
        author: 'Eugene',
        messageDate: new Date("2020-06-22T13:51:50.417-07:00"),
        message: ' Lorem, ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vitae quidem vel, dolorem ad suscipit perferendis odio rerum delectus ea corrupti possimus assumenda pariatur facilis omnis sit veritatis inventore consequatur?', 
        avatar: "https://yt3.ggpht.com/a/AGF-l7_2Yb4zGh_CpGmALFruR4XavmxUDZC7zoTbNQ=s900-c-k-c0xffffffff-no-rj-mo"
    }

]

module.exports.chats = chats;
module.exports.messages = messages;
