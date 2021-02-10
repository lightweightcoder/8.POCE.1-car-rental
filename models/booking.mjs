export default function bookingModel(sequelize, DataTypes) {
  return sequelize.define('booking', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    userEmail: {
      type: DataTypes.STRING,
    },
    startDate: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    carId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'cars',
        key: 'id',
      },
    },
    endDate: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, { underscored: true });
}
