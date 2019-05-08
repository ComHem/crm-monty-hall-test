package se.comhem.test.montyhall.game;

import java.util.List;

public interface MontyHallGameService {
    List<GameResult> generateDraws(Integer simulations, Boolean reselect);
}
