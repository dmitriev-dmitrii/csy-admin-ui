import axios from "axios";

// export
//
// const catalogApi = {
//     getProductsList
// }

//
// class AchievementRepository extends BaseRepository {
//     constructor(client, param) {
//         super(client);
//         this.prefix = param.prefix;
//         this.type = param.type;
//     }
//
//     _getByCategory(id) {
//         return this.GET(`${this.prefix}`, {
//             params: {
//                 'filter[category_id]': id,
//             },
//         });
//     }
//
//     getWithCategory(id) {
//         return this.GET(`${this.prefix}${id}`, {
//             params: {
//                 include: 'category',
//             },
//         });
//     }
//
//     getCertificate(id) {
//         return this.GET(`${this.prefix}`, {
//             params: {
//                 'filter[user_id]': id,
//             },
//         });
//     }
//
//     // getСertificateByStream(streamId) {
//     //     return this.GET(`${CONST.baseURILegacyJsAPI}programs/streams/${streamId}`);
//     // }
// }
//
// const achievementApi = new AchievementRepository(axios, {
//     prefix: `${CONST.baseURI}achievements/`,
//     type: 'achievements',
// });
//
// export default achievementApi;

