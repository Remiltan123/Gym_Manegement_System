package com.GymManegmnet.demo.Controller;


import com.GymManegmnet.demo.Model.Member;
import com.GymManegmnet.demo.Service.GymMemberService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin()
public class GymMemberController {
    private GymMemberService gymMemberService;

    public GymMemberController(GymMemberService gymMemberService) {
        this.gymMemberService = gymMemberService;
    }

    @PostMapping("/SaveMember")
    public ResponseEntity<Member> SaveTheMember(@RequestBody  Member member){
        try{
            Member newMember = gymMemberService.SaveMember(member);
            return new ResponseEntity<>(newMember, HttpStatus.CREATED);

        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
