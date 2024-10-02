package com.GymManegmnet.demo.Repository;

import com.GymManegmnet.demo.Model.Trainer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GymTrainerRepository extends JpaRepository<Trainer, Long> {
}
