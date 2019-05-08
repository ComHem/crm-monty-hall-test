package se.comhem.test.montyhall.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import se.comhem.test.montyhall.game.GameResult;
import se.comhem.test.montyhall.game.MontyHallGameService;
import se.comhem.test.montyhall.utils.GameResultConverter;

import javax.validation.constraints.Min;
import java.util.List;

@RestController
@RequestMapping(value = "/game", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
public class GameEndpoint {
    @Autowired
    private MontyHallGameService montyHallGameService;
    @Autowired
    private GameResultConverter gameResultConverter;

    @RequestMapping(value = "/draws", method = RequestMethod.GET)
    public ResponseEntity getDraws(@RequestParam @Min(1) Integer simulations, @RequestParam Boolean reselect) {

        List<GameResult> gameResults = montyHallGameService.generateDraws(simulations, reselect);
        List<GameResultDto> gameResultDto = gameResultConverter.toApi(gameResults);

        // todo handle errors
        return ResponseEntity.ok(gameResultDto);
    }

}
