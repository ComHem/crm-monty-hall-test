package se.comhem.test.montyhall.game;

import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

@Service
public class DefaultMontyHallGameService implements MontyHallGameService {

    @Override
    public List<GameResult> generateDraws(Integer simulations, Boolean reselect) {

        ThreadLocalRandom random = ThreadLocalRandom.current();
        List<GameResult> results = new ArrayList<>();

        for (int i = 0; i < simulations; i++) {

            Integer carDoor = random.nextInt(1, 4); // e.g. car on door 2
            List<Integer> doors = new ArrayList<>();
            doors.add(1);
            doors.add(2);
            doors.add(3);

            Collections.shuffle(doors);
            Integer playerSelectedDoor = doors.remove(0);

            Integer gameHostSelection = carDoor.equals(doors.get(0))
                    ? doors.remove(1)
                    : doors.remove(0);

            if(reselect) {
                playerSelectedDoor = doors.get(0);
            }

            boolean carWon = carDoor.equals(playerSelectedDoor);

            GameResult gameResult = new GameResult();
            gameResult.setWon(carWon);

            results.add(gameResult);
        }
        return results;
    }
}
