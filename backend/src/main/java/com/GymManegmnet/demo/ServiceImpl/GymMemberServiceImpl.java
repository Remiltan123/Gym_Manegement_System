package com.GymManegmnet.demo.ServiceImpl;

import com.GymManegmnet.demo.Model.Member;
import com.GymManegmnet.demo.Repository.GymMemberRepository;
import com.GymManegmnet.demo.Service.GymMemberService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;


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

    @Override
    public List<Member> GetAllMember() {
        return gymMemberRepository.findAll();
    }

    @Override
    public Member GitOneMember(Long id) {
        return gymMemberRepository.findById(id)
                .orElseThrow(()-> new RuntimeException("member not found with id" + id));
    }

    @Override
    public void DeleteMember(Long id) {
        gymMemberRepository.findById(id).orElseThrow(()-> new RuntimeException("member not found with id" + id));
        gymMemberRepository.deleteById(id);
    }
}
