package com.GymManegmnet.demo.Repository;

import com.GymManegmnet.demo.Model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GymAdminRepository extends JpaRepository<Admin, Long> {
    Admin findByEmail(String email);
}
