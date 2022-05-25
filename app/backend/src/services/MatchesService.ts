import Teams from '../database/models/Teams';
import Matches from '../database/models/Matches';
import { Op } from 'sequelize';

export default class MatchesService {
  public static async MatchesAll() {
    const matchsAll = await Matches.findAll({
      include: [{
        model: Teams,
        as: 'teamHome',
        attributes: {
          exclude: ['id'],
        },
      }, {
        model: Teams,
        as: 'teamAway',
        attributes: {
          exclude: ['id'],
        },
      },
      ],
    });

    return matchsAll;
  }

  public static async getFilterQuery(filterName: string, filterValue: string | boolean | number) {
    const matchsAll = Matches.findAll(
      {
        where: { [filterName]: filterValue },
        include: [
          { model: Teams, as: 'teamHome', attributes: { exclude: ['id'] } },
          { model: Teams, as: 'teamAway', attributes: { exclude: ['id'] } },
        ],
      },
    );
    if (!matchsAll) { return null; }
    return matchsAll;
  }

  public static async createMatches(hTeam:number, hTGoals:number, aTeam:number, aTGoals:number) {
    const inProgress = true;
    const { count } = await Teams.findAndCountAll({

    });
    const createMatch = await Matches.create({
      homeTeam: hTeam,
      homeTeamGoals: hTGoals,
      awayTeam: aTeam,
      awayTeamGoals: aTGoals,
      inProgress,
    });

    return createMatch;
  }
}
