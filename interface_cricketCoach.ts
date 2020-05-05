import { Coach } from "./interface_coach";

export class CricketCoach implements Coach {
  getDailyWorkout(): string {
    return "Practice your spin bowling technique.";
  }
}
