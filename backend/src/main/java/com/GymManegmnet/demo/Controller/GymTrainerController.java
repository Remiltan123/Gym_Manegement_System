package com.GymManegmnet.demo.Controller;

import com.GymManegmnet.demo.Model.Trainer;
import com.GymManegmnet.demo.Service.GymTrainerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin()
@RequestMapping("/Trainer")
public class GymTrainerController {

    private final GymTrainerService gymTrainerService;

    // Injecting the service via constructor
    public GymTrainerController(GymTrainerService gymTrainerService) {
        this.gymTrainerService = gymTrainerService;
    }

    @PostMapping("/saveTrainer")
    public ResponseEntity<Trainer> saveTrainer(@RequestBody Trainer trainer) {
        return new ResponseEntity<>(gymTrainerService.saveTrainer(trainer), HttpStatus.CREATED);
    }
}
