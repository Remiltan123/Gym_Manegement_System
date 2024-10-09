package com.GymManegmnet.demo.Service;

import com.GymManegmnet.demo.Model.Member;

import java.util.List;

public interface GymMemberService {
    Member SaveMember (Member member);
    List<Member> GetAllMember ();

    Member GitOneMember (Long id);

    void DeleteMember (Long id);

 }
