import Matches from '../database/models/Matches';

export default class MatchesService {
  public static async MatchesAll() {
    const matchsAll = await Matches.findAll();

    return matchsAll;
  }
}
