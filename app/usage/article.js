const {Article} = require('../models/article')
const {Category} = require('../models/category')

class ArticleUsage {
    // 创建文章
    async create(cxt) {
        return await Article.create(cxt)
    }

    // 获取文章列表
    async list() {
        return await Article.findAll({
            // 过滤文章内容
            attributes: {
                exclude: ['content']
            }
        })
    }

    // 获取文章详情
    async detail(id) {
        return await Article.findOne({
            where: {
                id
            },
            // 把文章关联的分类也查询出来
            include: [{
                model: Category
            }]
        })
    }
}

module.exports = {
    ArticleUsage
}
