package se.comhem.test.montyhall.game;

import org.junit.Test;

import java.util.List;

import static org.junit.Assert.*;

/**
 * Rudimentary unit test, of course should be improved.
 */
public class MontyHallGameImplTest {

    private DefaultMontyHallGameService cut = new DefaultMontyHallGameService();

    @Test
    public void shouldDrawWithoutCrash() {
        List<GameResult> gameResults = cut.generateDraws(10, true);
        assertEquals(gameResults.size(), 10);
    }

}