// business rules
import Teams from '../database/models/Teams';
import Matches from '../database/models/Matches';
import ScoreBoard from './ScoreBoard';

export default class ScoreBoardService {
  private sortResults = (results: ScoreBoard[]) => {
    const orderByGoalsFavor = results.sort((a, b) => b.goalsFavor - a.goalsFavor);
    const orderByBalance = orderByGoalsFavor.sort((a, b) => b.goalsBalance - a.goalsBalance);
    const orderByVictories = orderByBalance.sort((a, b) => b.totalVictories - a.totalVictories);
    const orderByPoints = orderByVictories.sort((a, b) => b.totalPoints - a.totalPoints);

    return orderByPoints;
  };

  public async home() {
    const allMatches = await Matches.findAll();
    const allTeams = await Teams.findAll();
    const results: ScoreBoard[] = []; // initial empty
    allTeams.forEach((team) => {
      const teste = allMatches
        .filter((match) => match.homeTeam === team.id && match.inProgress === false) //  home team and match finish
        .map((match) => ({ goalsFavor: match.homeTeamGoals, goalsOwn: match.awayTeamGoals })); // goals favor and goals own
      const result = new ScoreBoard({ teamName: team.teamName, matches: teste });
      results.push(result);
    });
    return this.sortResults(results);
  }

  public async away() {
    const allMatches = await Matches.findAll();
    const allTeams = await Teams.findAll();
    const results: ScoreBoard[] = [];
    allTeams.forEach((team) => {
      const teste = allMatches
        .filter((match) => match.awayTeam === team.id && match.inProgress === false)
        .map((match) => ({ goalsFavor: match.awayTeamGoals, goalsOwn: match.homeTeamGoals }));
      const result = new ScoreBoard({ teamName: team.teamName, matches: teste });
      results.push(result);
    });
    return this.sortResults(results);
  }

  public async allMatches() {
    const allMatches = await Matches.findAll();
    const allTeams = await Teams.findAll();
    const results: ScoreBoard[] = [];
    allTeams.forEach((team) => {
      let teamMatch = allMatches
        .filter((match) => match.homeTeam === team.id && match.inProgress === false)
        .map((match) => ({ goalsFavor: match.homeTeamGoals, goalsOwn: match.awayTeamGoals }));
      const awayGames = allMatches
        .filter((match) => match.awayTeam === team.id && match.inProgress === false)
        .map((match) => ({ goalsFavor: match.awayTeamGoals, goalsOwn: match.homeTeamGoals }));
      teamMatch = [...teamMatch, ...awayGames];
      const result = new ScoreBoard({ teamName: team.teamName, matches: teamMatch });
      results.push(result);
    });
    return this.sortResults(results);
  }
}
