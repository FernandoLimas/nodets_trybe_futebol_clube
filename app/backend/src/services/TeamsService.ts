import Teams from '../database/models/Teams';

export default class TeamsService {
  public static async Teams() {
    const allTeams = await Teams.findAll();

    return allTeams;
  }

  public static async TeamsById(id: string) {
    const getByid = await Teams.findByPk(id);

    return getByid;
  }
}
