

package com.GymManegmnet.demo.ServiceImpl;

        import com.GymManegmnet.demo.Model.Trainer;
        import com.GymManegmnet.demo.Repository.GymTrainerRepository;
        import com.GymManegmnet.demo.Service.GymTrainerService;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.stereotype.Service;

@Service
public class GymTrainerServiseImpl implements GymTrainerService {

    private final GymTrainerRepository gymTrainerRepository;

    @Autowired
    public GymTrainerServiseImpl (GymTrainerRepository gymTrainerRepository) {
        this.gymTrainerRepository = gymTrainerRepository;
    }

    @Override
    public Trainer saveTrainer(Trainer trainer) {
        return gymTrainerRepository.save(trainer);
    }
}
