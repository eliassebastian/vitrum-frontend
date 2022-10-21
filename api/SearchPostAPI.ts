import axios from "axios";

//initial discussion info from reddit api - check if valid reddit link
//const searchPostAPI = (id: string) => axios.get(`https://vitrum.free.beeceptor.com/test`).then((res) => res.data)

const searchPostAPI = (id: string) => axios.get(`https://api.reddit.com/api/info/?id=t3_${id}`).then((res) => res.data)

export {searchPostAPI};
