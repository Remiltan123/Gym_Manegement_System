package com.GymManegmnet.demo.ServiceImpl;

import com.GymManegmnet.demo.Model.Member;
import com.GymManegmnet.demo.Repository.GymMemberRepository;
import com.GymManegmnet.demo.Service.GymMemberService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


@Service
public class GymMemberServiceImpl implements GymMemberService {

    private GymMemberRepository gymMemberRepository;

    public GymMemberServiceImpl(GymMemberRepository gymMemberRepository) {
        this.gymMemberRepository = gymMemberRepository;
    }

    @Override
    public Member SaveMember(Member member) {
        return gymMemberRepository.save(member);
    }
}
