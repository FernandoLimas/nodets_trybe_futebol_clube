import { Model, DataTypes } from 'sequelize';
import db from '.';
import Teams from './Teams';
// import OtherModel from './OtherModel';

class Matches extends Model {
  // public <campo>!: <tipo>;
  public id!: number;

  public homeTeam!: number;

  public homeTeamGoals!: number;

  public awayTeam!: number;

  public awayTeamGoals!: number;

  public inProgress!: boolean;
}

Matches.init({
  // ... Campos
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeam: {
    type: DataTypes.INTEGER,
  },
  homeTeamGoals: {
    type: DataTypes.INTEGER,
  },
  awayTeam: {
    type: DataTypes.INTEGER,
  },
  awayTeamGoals: {
    type: DataTypes.INTEGER,
  },
  inProgress: {
    type: DataTypes.BOOLEAN,
  },
}, {
  // ... Outras configs
  underscored: true,
  sequelize: db,
  // modelName: 'example',
  modelName: 'Matches',
  timestamps: false,
});

// ---associations---
Matches.belongsTo(Teams, { foreignKey: 'homeTeam', as: 'teamHome' });
Matches.belongsTo(Teams, { foreignKey: 'awayTeam', as: 'teamAway' });

Teams.hasMany(Matches, { foreignKey: 'homeTeam', as: 'HomeMatch' });
Teams.hasMany(Matches, { foreignKey: 'awayTeam', as: 'AwayMatch' });

export default Matches;
