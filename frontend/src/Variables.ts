export const variables={
    API_URL:"https://localhost:44390/api/",
    USER_URL:"https://localhost:44390/api/user/",
    CREATE_USER: "https://localhost:44390/api/user",
    MY_USER_URL:"https://localhost:44390/api/user/1",
    CREATE_POST_URL:"https://localhost:44390/api/post",
    TOP_POST_LIKE: "https://localhost:44390/api/post/top/like",
    TOP_POST_COMMENT: "https://localhost:44390/api/post/top/comment",
    TOP_POST_DATE: "https://localhost:44390/api/post/top/date  ",
    NEWS_POST_LIKE: "https://localhost:44390/api/post/news/like",
    NEWS_POST_COMMENT: "https://localhost:44390/api/post/news/comment",
    NEWS_POST_DATE: "https://localhost:44390/api/post/news/date",
    POST_COMMENT: "https://localhost:44390/api/post/comment ",
    POST_LIKE: "https://localhost:44390/api/post/like ",
    POST_DATE: "https://localhost:44390/api/post/date ",
    DELETE_POST_URL:"https://localhost:44390/api/post/",
    POST_TITLE_URL:"https://localhost:44390/api/post/title/",
    POST_TAG_URL:"https://localhost:44390/api/post/tag/",
    POST_USER:"https://localhost:44390/api/post/user/",
    CURRENT_POST:"https://localhost:44390/api/post/",
    COMMENTS_POST:"https://localhost:44390/api/comment/",
    ADD_COMMENTS:"https://localhost:44390/api/comment",
}
/*
https://localhost:44390/api/auth              - авторизация

https://localhost:44390/api/user              - все пользователи (не будем использовать)

https://localhost:44390/api/user/{3}          - пользователь по id

https://localhost:44390/api/user/{myasha}     - пользователи по login

https://localhost:44390/api/user + json       - создание пользователя

https://localhost:44390/api/user/{3}          - удаление пользователя по id

https://localhost:44390/api/user+ json        - редактирвоание пользователя по id


https://localhost:44390/api/post/{3}          - пост по id

https://localhost:44390/api/post/user/{3}     - посты по user id

https://localhost:44390/api/post/title/{test} - посты по title

https://localhost:44390/api/post/tag/{test}   - посты по tag

https://localhost:44390/api/post + json       - создание поста

https://localhost:44390/api/post/{3}          - удаление поста по id



https://localhost:44390/api/comment/{3}       - все комментарии поста с id

https://localhost:44390/api/comment + json    - добавить комментарий к посту с id



https://localhost:44390/api/like              - поставить лайк

https://localhost:44390/api/like/{1}/{2}      - удалить лайк idUser = 1, IdPost = 2 */