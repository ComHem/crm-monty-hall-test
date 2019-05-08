package se.comhem.test.montyhall.utils;

import org.springframework.stereotype.Component;
import se.comhem.test.montyhall.api.GameResultDto;
import se.comhem.test.montyhall.game.GameResult;

import java.util.ArrayList;
import java.util.List;

@Component
public class GameResultConverter {
    public List<GameResultDto> toApi(List<GameResult> gameResult) {
        List<GameResultDto> gameResultDtos = new ArrayList<>();
        for (GameResult result : gameResult) {
            gameResultDtos.add(convertGameResult(result));
        }
        return gameResultDtos;
    }

    private GameResultDto convertGameResult(GameResult result) {
        GameResultDto gameResultDto = new GameResultDto();
        gameResultDto.setWon(result.getWon());
        return gameResultDto;
    }
}
