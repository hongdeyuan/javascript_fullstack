/**
 * 日志模型
 */
module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;
  const Diary = app.model.define('diary', {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: STRING,
      allowNull: false
    },
    content: {
      type: STRING,
      allowNull: false
    }
  });
 
  // 表关联的字段
  Diary.associate = function() {
    app.model.Diary.belongsTo(app.model.User, { foreignKey: 'user_id', targetKey: 'id'})
  }
 
  return Diary;
}