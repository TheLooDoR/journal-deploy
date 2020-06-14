const Sequelize = require('sequelize')
const db = require('../db/database')
const Journal = require('../models/Journal')
const Schedule = require('../models/Schedule')

const SubjectType = db.define('subject_type', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
    }
})

Journal.hasMany(SubjectType, {foreignKey: 'id', sourceKey: 'type_id'})
SubjectType.belongsTo(Journal, {foreignKey: 'id', targetKey: 'type_id'})

Schedule.hasMany(SubjectType, {foreignKey: 'id', sourceKey: 'type_id'})
SubjectType.belongsTo(Schedule, {foreignKey: 'id', targetKey: 'type_id'})

module.exports = SubjectType