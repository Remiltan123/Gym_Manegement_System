package com.GymManegmnet.demo.Controller;


import com.GymManegmnet.demo.Model.Equepment;
import com.GymManegmnet.demo.Service.GymEquipmentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin()
@RequestMapping("/Equipment")
public class GymEquipmentController {
    private GymEquipmentService gymEquipmentService;

    public GymEquipmentController(GymEquipmentService gymEquipmentService) {
        this.gymEquipmentService = gymEquipmentService;
    }

    @PostMapping("/AddEquipment")
    public ResponseEntity<Equepment> SaveEquipment (@RequestBody Equepment equepment){
        return new ResponseEntity<>(gymEquipmentService.SaveEquepment(equepment), HttpStatus.CREATED);
    }
}
