const dataModel = require('./model');
const mongoDb = require('./mongo')


module.exports.createData = async (options, next) => {
    try {
        await mongoDb.connect();
        var dbdata = new dataModel(options.body);
        const save = await new dbdata.save();
        return {
            status: 201,
            data: save
        }
    } catch (e){
        next(e);
    } finally {
        mongoDb.disconnect();
    }
}

module.exports.updateData = async (options, next) => {
    try {
        await mongoDb.connect();
        var dbdata = new dataModel(options.body);
        //const updateData = await new dataModel.findOneAndUpdate(filter, update {
            // new: true
        // }) 
        return {
            status: 201,
            data: save
        }
    } catch (e){
        next(e);
    } finally {
        mongoDb.disconnect();
    }
}