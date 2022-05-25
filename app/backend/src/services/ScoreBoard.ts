interface IMatch {
  goalsFavor: number;
  goalsOwn: number;
}

interface IBoard {
  teamName: string;
  matches: IMatch[];
}

export default class ScoreBoard {
  public name: string;

  public totalPoints: number;

  public totalGames: number;

  public totalVictories: number;

  public totalDraws: number;

  public totalLosses: number;

  public goalsFavor: number;

  public goalsOwn: number;

  public goalsBalance: number;

  public efficiency: number;

  constructor({ teamName, matches }: IBoard) {
    this.name = teamName;
    this.totalVictories = ScoreBoard.victories(matches);
    this.totalPoints = ScoreBoard.points(matches);
    this.totalGames = matches.length;
    this.totalLosses = ScoreBoard.loses(matches);
    this.totalDraws = ScoreBoard.draws(matches);
    this.goalsOwn = ScoreBoard.goalsOwn(matches);
    this.goalsFavor = ScoreBoard.goalsFavor(matches);
    this.goalsBalance = this.goalsFavor - this.goalsOwn;
    this.efficiency = ScoreBoard.efficiency(this.totalGames, this.totalPoints);
  }

  private static points(matches: IMatch[]) {
    return matches.reduce((totalPoints, { goalsFavor, goalsOwn }) => {
      if (goalsFavor > goalsOwn) return totalPoints + 3;
      if (goalsFavor === goalsOwn) return totalPoints + 1;
      return totalPoints;
    }, 0);
  }

  private static victories(matches: IMatch[]) {
    return matches.reduce((totalVictories, { goalsFavor, goalsOwn }) => {
      if (goalsFavor > goalsOwn) return totalVictories + 1;
      return totalVictories;
    }, 0);
  }

  private static draws(matches: IMatch[]) {
    return matches.reduce((totalDraws, { goalsFavor, goalsOwn }) => {
      if (goalsFavor === goalsOwn) return totalDraws + 1;
      return totalDraws;
    }, 0);
  }

  private static loses(matches: IMatch[]) {
    return matches.reduce((totalLosses, { goalsFavor, goalsOwn }) => {
      if (goalsFavor < goalsOwn) return totalLosses + 1;
      return totalLosses;
    }, 0);
  }

  private static goalsOwn(matches: IMatch[]) {
    return matches.reduce((totalGoals, { goalsOwn }) => totalGoals + goalsOwn, 0);
  }

  private static goalsFavor(matches: IMatch[]) {
    return matches.reduce((totalGoals, { goalsFavor }) => totalGoals + goalsFavor, 0);
  }

  private static efficiency(games: number, points: number) {
    const efficiency = Number(((100 * points) / (games * 3)).toPrecision(4));
    return efficiency;
  }
}
