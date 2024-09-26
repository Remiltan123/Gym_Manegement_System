package com.GymManegmnet.demo.ServiceImpl;

import com.GymManegmnet.demo.Model.Admin;
import com.GymManegmnet.demo.Repository.GymAdminRepository;
import com.GymManegmnet.demo.Service.GymAdminService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class GymAdminServise_Impl implements GymAdminService {

    private final GymAdminRepository gymAdminRepository;

    //private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public GymAdminServise_Impl(GymAdminRepository gymAdminRepository) {
        this.gymAdminRepository = gymAdminRepository;
    }

    @Override
    public Admin SaveAdmin(Admin admin) {
        return gymAdminRepository.save(admin);
    }

    @Override
    public boolean LoginAdmin(String email, String password) {
        Admin admin = gymAdminRepository.findByEmail(email); // Implement this method in your repository
        if (admin != null) {
            // Compare the provided password with the stored password directly
            return admin.getPassword().equals(password);
        }
        return false;
    }
}
