package com.GymManegmnet.demo.ServiceImpl;

import com.GymManegmnet.demo.Model.Equepment;
import com.GymManegmnet.demo.Repository.GymEquiomentRepository;
import com.GymManegmnet.demo.Service.GymEquipmentService;
import org.springframework.stereotype.Service;

@Service
public class GymEquipmentServiceImpl implements GymEquipmentService {
    private GymEquiomentRepository gymEquiomentRepository;

    public GymEquipmentServiceImpl(GymEquiomentRepository gymEquiomentRepository) {
        this.gymEquiomentRepository = gymEquiomentRepository;
    }

    @Override
    public Equepment SaveEquepment(Equepment equepment) {
        return gymEquiomentRepository.save(equepment);
    }
}
