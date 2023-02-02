import axios from "axios";

export default class  apiBuilder{
    constructor(
        config = {apiPrefix:'',
                    entity:'',
                    method:'',
                },data = {}) {
        this.url = `api/${config.apiPrefix}/${config.entity}`
        this.sendRequest =  axios[config.method] ( this.url , { data } )
    }
}
