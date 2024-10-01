package com.GymManegmnet.demo.Controller;

import com.GymManegmnet.demo.Model.Admin;
import com.GymManegmnet.demo.Service.GymAdminService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/Admin")
@CrossOrigin()
public class GymAdminController {

    private GymAdminService gymAdminService;

    public GymAdminController(GymAdminService gymAdminService) {
        this.gymAdminService = gymAdminService;
    }

    @PostMapping("/Resgister")
    public ResponseEntity<Admin> AdminRegister(@RequestBody Admin admin) {
        try {
            Admin savedAdmin = gymAdminService.SaveAdmin(admin);
            return new ResponseEntity<>(savedAdmin, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Admin admin) {
        String email = admin.getEmail();
        String password = admin.getPassword();

        if (gymAdminService.LoginAdmin(email, password)) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }
    }
}
