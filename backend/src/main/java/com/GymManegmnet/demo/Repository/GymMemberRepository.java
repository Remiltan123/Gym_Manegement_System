package com.GymManegmnet.demo.Repository;

import com.GymManegmnet.demo.Model.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GymMemberRepository extends JpaRepository<Member, Long> {
}
