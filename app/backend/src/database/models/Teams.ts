import { Model, DataTypes } from 'sequelize';
import db from '.';
// import OtherModel from './OtherModel';

class Teams extends Model {
  // public <campo>!: <tipo>;
  public id!: number;
  public team_name!: string;
}

Teams.init({
  // ... Campos
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  team_name: {
    type: DataTypes.STRING,
    allowNull: false
  }  
}, {
  // ... Outras configs
  underscored: true,
  sequelize: db,
  // modelName: 'example',
  modelName: 'Teams',
  timestamps: false,
});

export default Teams;
