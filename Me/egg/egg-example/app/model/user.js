/**
 * 用户模型
 */
module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;
  const User = app.model.define('user', {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: STRING,
      allowNull: false
    },
    password: {
      type: STRING(32),
      allowNull: false
    }
  });
 
  // 表关联的字段
  User.associate = function() {
    // 一对多
    app.model.User.hasMany(app.model.Diary, { foreignKey: 'user_id', targetKey: 'id'})
  }
 
  return User;
}